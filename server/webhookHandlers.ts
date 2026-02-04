import { getStripeSync, getUncachableStripeClient } from './stripeClient';
import { storage } from './storage';
import { sendReservationConfirmationEmails } from './emailService';

export class WebhookHandlers {
  static async processWebhook(payload: Buffer, signature: string): Promise<void> {
    if (!Buffer.isBuffer(payload)) {
      throw new Error(
        'STRIPE WEBHOOK ERROR: Payload must be a Buffer. ' +
        'Received type: ' + typeof payload + '. '
      );
    }

    const sync = await getStripeSync();
    const event = await sync.processWebhook(payload, signature);
    
    // Handle checkout.session.completed event
    if (event && event.type === 'checkout.session.completed') {
      const session = event.data.object as any;
      if (session.id) {
        console.log('Webhook: Processing checkout.session.completed for session:', session.id);
        await WebhookHandlers.handlePaymentSuccess(session.id);
      }
    }
  }

  static async handlePaymentSuccess(sessionId: string): Promise<void> {
    const stripe = await getUncachableStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status === 'paid' && session.metadata?.bookingId) {
      const bookingId = parseInt(session.metadata.bookingId);
      
      // Check if already processed (idempotency)
      const existingBooking = await storage.getBooking(bookingId);
      if (existingBooking?.paymentStatus === 'paid') {
        console.log(`Payment already processed for booking ${bookingId}, skipping`);
        return;
      }
      
      const booking = await storage.updateBookingPaymentStatus(bookingId, {
        paymentStatus: 'paid',
        stripeSessionId: sessionId,
        stripePaymentIntentId: session.payment_intent as string,
        depositAmount: session.amount_total || 0,
      });

      if (booking) {
        console.log(`Sending confirmation emails for booking ${bookingId}`);
        await sendReservationConfirmationEmails(booking);
      }
    }
  }
}
