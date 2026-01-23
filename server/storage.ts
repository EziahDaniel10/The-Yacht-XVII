import { db } from "./db";
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

  async createContactInquiry(insertContact: InsertContactInquiry): Promise<ContactInquiry> {
    const [contact] = await db
      .insert(contactInquiries)
      .values(insertContact)
      .returning();
    return contact;
  }
}

export const storage = new DatabaseStorage();
