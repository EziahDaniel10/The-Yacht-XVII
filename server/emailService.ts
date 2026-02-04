import type { Booking } from '@shared/schema';

const CAPTAIN_EMAIL = 'yachtxvii@gmail.com';

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
}

function getCharterTypeName(charterType: string): string {
  const types: Record<string, string> = {
    'Just-Cruising': 'Just Cruising (2hr)',
    'Yacht-Party': 'The Yacht Party (3hr)',
    'Half-Day': 'Half-Day Escape (4hr)',
    'Full-Day': 'Full-Day Voyage (8hr)',
    'Sunset': 'Date Night, Sunset & Champagne (3hr)',
    'After-Party': 'After Party (3hr)',
  };
  return types[charterType] || charterType;
}

export async function sendReservationConfirmationEmails(booking: Booking): Promise<void> {
  const guestEmailHtml = `
    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; border-bottom: 2px solid #C4A052; padding-bottom: 20px; margin-bottom: 20px;">
        <h1 style="color: #1a1a1a; font-size: 28px; margin: 0;">Yacht XVII</h1>
        <p style="color: #C4A052; font-size: 14px; letter-spacing: 2px; margin: 10px 0 0 0;">LUXURY YACHT CHARTER</p>
      </div>
      
      <h2 style="color: #1a1a1a; font-size: 24px;">Reservation Confirmed!</h2>
      
      <p style="color: #333; line-height: 1.6;">Dear ${booking.fullName},</p>
      
      <p style="color: #333; line-height: 1.6;">Thank you for your reservation with Yacht XVII. Your deposit has been received and your charter is now confirmed!</p>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #C4A052; margin: 20px 0;">
        <h3 style="color: #1a1a1a; margin-top: 0;">Reservation Details</h3>
        <p style="margin: 8px 0;"><strong>Date:</strong> ${formatDate(booking.preferredDate)}</p>
        <p style="margin: 8px 0;"><strong>Experience:</strong> ${getCharterTypeName(booking.charterType)}</p>
        <p style="margin: 8px 0;"><strong>Guests:</strong> ${booking.guests}</p>
        <p style="margin: 8px 0;"><strong>Deposit Paid:</strong> ${formatCurrency(booking.depositAmount || 0)}</p>
        ${booking.mealPackage ? `<p style="margin: 8px 0;"><strong>Meal Package:</strong> ${booking.mealPackage}</p>` : ''}
        ${booking.specialRequests ? `<p style="margin: 8px 0;"><strong>Special Requests:</strong> ${booking.specialRequests}</p>` : ''}
      </div>
      
      <p style="color: #333; line-height: 1.6;">Captain Mike will reach out to you shortly to confirm the final details of your charter experience.</p>
      
      <p style="color: #333; line-height: 1.6;">If you have any questions, please don't hesitate to contact us at <a href="mailto:${CAPTAIN_EMAIL}" style="color: #C4A052;">${CAPTAIN_EMAIL}</a></p>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">Yacht XVII | Washington DC</p>
        <p style="color: #666; font-size: 12px;">${CAPTAIN_EMAIL}</p>
      </div>
    </div>
  `;

  const captainEmailHtml = `
    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; border-bottom: 2px solid #C4A052; padding-bottom: 20px; margin-bottom: 20px;">
        <h1 style="color: #1a1a1a; font-size: 28px; margin: 0;">New Reservation Alert</h1>
        <p style="color: #C4A052; font-size: 14px; letter-spacing: 2px; margin: 10px 0 0 0;">YACHT XVII</p>
      </div>
      
      <h2 style="color: #1a1a1a; font-size: 24px;">New Paid Reservation!</h2>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #C4A052; margin: 20px 0;">
        <h3 style="color: #1a1a1a; margin-top: 0;">Guest Information</h3>
        <p style="margin: 8px 0;"><strong>Name:</strong> ${booking.fullName}</p>
        <p style="margin: 8px 0;"><strong>Email:</strong> ${booking.email}</p>
        <p style="margin: 8px 0;"><strong>Phone:</strong> ${booking.phoneNumber}</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #C4A052; margin: 20px 0;">
        <h3 style="color: #1a1a1a; margin-top: 0;">Reservation Details</h3>
        <p style="margin: 8px 0;"><strong>Date:</strong> ${formatDate(booking.preferredDate)}</p>
        <p style="margin: 8px 0;"><strong>Experience:</strong> ${getCharterTypeName(booking.charterType)}</p>
        <p style="margin: 8px 0;"><strong>Guests:</strong> ${booking.guests}</p>
        <p style="margin: 8px 0;"><strong>Deposit Paid:</strong> ${formatCurrency(booking.depositAmount || 0)}</p>
        ${booking.mealPackage ? `<p style="margin: 8px 0;"><strong>Meal Package:</strong> ${booking.mealPackage}</p>` : ''}
        ${booking.seafoodUpgrade === 'true' ? `<p style="margin: 8px 0;"><strong>Seafood Upgrade:</strong> Yes</p>` : ''}
        ${booking.beverageSelections ? `<p style="margin: 8px 0;"><strong>Beverages:</strong> ${booking.beverageSelections}</p>` : ''}
        ${booking.specialRequests ? `<p style="margin: 8px 0;"><strong>Special Requests:</strong> ${booking.specialRequests}</p>` : ''}
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">This is an automated notification from Yacht XVII booking system.</p>
      </div>
    </div>
  `;

  console.log('=== RESERVATION CONFIRMATION ===');
  console.log('Guest Email would be sent to:', booking.email);
  console.log('Captain Email would be sent to:', CAPTAIN_EMAIL);
  console.log('Booking ID:', booking.id);
  console.log('Deposit Amount:', formatCurrency(booking.depositAmount || 0));
  console.log('================================');

  // Note: To enable actual email sending, integrate with an email service like SendGrid, Resend, or Nodemailer
  // For now, we log the emails that would be sent
}
