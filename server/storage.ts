import { db } from "./db";
import { eq } from "drizzle-orm";
import {
  bookings,
  contactInquiries,
  type InsertBooking,
  type Booking,
  type InsertContactInquiry,
  type ContactInquiry
} from "@shared/schema";

export interface IStorage {
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBooking(id: number): Promise<Booking | undefined>;
  updateBookingPaymentStatus(id: number, paymentData: {
    paymentStatus: string;
    stripeSessionId?: string;
    stripePaymentIntentId?: string;
    depositAmount?: number;
  }): Promise<Booking | undefined>;
  createContactInquiry(contact: InsertContactInquiry): Promise<ContactInquiry>;
}

export class DatabaseStorage implements IStorage {
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db
      .insert(bookings)
      .values(insertBooking)
      .returning();
    return booking;
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    const [booking] = await db
      .select()
      .from(bookings)
      .where(eq(bookings.id, id));
    return booking;
  }

  async updateBookingPaymentStatus(id: number, paymentData: {
    paymentStatus: string;
    stripeSessionId?: string;
    stripePaymentIntentId?: string;
    depositAmount?: number;
  }): Promise<Booking | undefined> {
    const [booking] = await db
      .update(bookings)
      .set(paymentData)
      .where(eq(bookings.id, id))
      .returning();
    return booking;
  }

  async createContactInquiry(insertContact: InsertContactInquiry): Promise<ContactInquiry> {
    const [contact] = await db
      .insert(contactInquiries)
      .values(insertContact)
      .returning();
    return contact;
  }
}

export const storage = new DatabaseStorage();
