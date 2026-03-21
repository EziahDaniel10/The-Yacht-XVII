import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { getUncachableStripeClient, getStripePublishableKey } from "./stripeClient";
import { WebhookHandlers } from "./webhookHandlers";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Get Stripe publishable key for frontend
  app.get('/api/stripe/config', async (req, res) => {
    try {
      const publishableKey = await getStripePublishableKey();
      res.json({ publishableKey });
    } catch (err) {
      console.error('Error getting Stripe config:', err);
      res.status(500).json({ error: 'Failed to get Stripe configuration' });
    }
  });

  // Booking API - creates booking and returns checkout session
  app.post(api.bookings.create.path, async (req, res) => {
    try {
      const input = api.bookings.create.input.parse(req.body);
      
      // Calculate the charter price based on charter type (in cents)
      const charterPrices: Record<string, number> = {
        'Just-Cruising': 102500, // $1,025 average
        'Yacht-Party': 145000, // $1,450 average
        'Half-Day': 187500, // $1,875 average
        'Full-Day': 375000, // $3,750 average
        'Sunset': 145000, // $1,450 average
        'After-Party': 225000, // $2,250
      };
      
      const charterPrice = charterPrices[input.charterType] || 150000;
      const mealTotal = (input.mealTotal || 0) * 100; // Convert to cents
      const totalPrice = charterPrice + mealTotal;
      const depositAmount = Math.round(totalPrice * 0.5); // 50% deposit
      
      // Create booking with pending payment status
      const booking = await storage.createBooking({
        ...input,
        charterPrice,
        depositAmount,
        paymentStatus: 'pending',
      } as any);
      
      // Create Stripe checkout session
      const stripe = await getUncachableStripeClient();
      const baseUrl = `https://${process.env.REPLIT_DOMAINS?.split(',')[0]}`;
      
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card', 'afterpay_clearpay'],
        billing_address_collection: 'required',
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `Yacht XVII Charter - ${input.charterType}`,
                description: `50% deposit for ${input.charterType} charter on ${new Date(input.preferredDate).toLocaleDateString()}`,
              },
              unit_amount: depositAmount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${baseUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}&booking_id=${booking.id}`,
        cancel_url: `${baseUrl}/booking?cancelled=true`,
        customer_email: input.email,
        metadata: {
          bookingId: booking.id.toString(),
        },
      });
      
      // Update booking with session ID
      await storage.updateBookingPaymentStatus(booking.id, {
        paymentStatus: 'pending',
        stripeSessionId: session.id,
      });
      
      res.status(201).json({ 
        booking, 
        checkoutUrl: session.url,
        sessionId: session.id,
      });
    } catch (err) {
      console.error('Booking error:', err);
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Verify payment and send confirmation emails
  app.post('/api/bookings/verify-payment', async (req, res) => {
    try {
      const { sessionId, bookingId } = req.body;
      
      if (!sessionId || !bookingId) {
        return res.status(400).json({ error: 'Missing sessionId or bookingId' });
      }
      
      const stripe = await getUncachableStripeClient();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      
      // Validate bookingId matches session metadata for security
      if (session.metadata?.bookingId !== bookingId.toString()) {
        return res.status(403).json({ error: 'Booking ID mismatch' });
      }
      
      // Check payment status
      if (session.payment_status !== 'paid') {
        return res.status(400).json({ error: 'Payment not completed' });
      }
      
      // Process the payment confirmation (idempotent - won't duplicate if already processed)
      await WebhookHandlers.handlePaymentSuccess(sessionId);
      
      // Return limited booking info (not full data for security)
      res.json({ 
        success: true, 
        message: 'Payment verified and confirmation emails sent',
        charterType: session.metadata?.bookingId ? 'confirmed' : 'unknown',
      });
    } catch (err) {
      console.error('Payment verification error:', err);
      res.status(500).json({ error: 'Failed to verify payment' });
    }
  });

  // Get booking by ID
  app.get('/api/bookings/:id', async (req, res) => {
    try {
      const booking = await storage.getBooking(parseInt(req.params.id));
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
      res.json(booking);
    } catch (err) {
      console.error('Get booking error:', err);
      res.status(500).json({ error: 'Failed to get booking' });
    }
  });

  // Contact API
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const contact = await storage.createContactInquiry(input);
      res.status(201).json(contact);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
