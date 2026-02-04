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
    await sync.processWebhook(payload, signature);
  }

  static async handlePaymentSuccess(sessionId: string): Promise<void> {
    const stripe = await getUncachableStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status === 'paid' && session.metadata?.bookingId) {
      const bookingId = parseInt(session.metadata.bookingId);
      
      const booking = await storage.updateBookingPaymentStatus(bookingId, {
        paymentStatus: 'paid',
        stripeSessionId: sessionId,
        stripePaymentIntentId: session.payment_intent as string,
        depositAmount: session.amount_total || 0,
      });

      if (booking) {
        await sendReservationConfirmationEmails(booking);
      }
    }
  }
}
