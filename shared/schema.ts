import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  preferredDate: timestamp("preferred_date").notNull(),
  guests: integer("guests").notNull(),
  charterType: text("charter_type").notNull(),
  specialRequests: text("special_requests"),
  agreedToRules: text("agreed_to_rules").notNull().default('false'),
  agreedToSafety: text("agreed_to_safety").notNull().default('false'),
  mealType: text("meal_type"),
  mealPackage: text("meal_package"),
  seafoodUpgrade: text("seafood_upgrade").default('false'),
  beverageSelections: text("beverage_selections"),
  mealTotal: integer("meal_total").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  preferredDate: z.coerce.date(),
  guests: z.coerce.number().min(1),
  email: z.string().email(),
});

export const insertContactSchema = createInsertSchema(contactInquiries).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  email: z.string().email(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = z.infer<typeof insertContactSchema>;
