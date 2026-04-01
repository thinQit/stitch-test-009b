import { z } from "zod";

export const contactTopics = [
  "Private dining",
  "Press",
  "Dietary accommodations",
  "Lost & found",
  "General inquiry",
] as const;

export const reservationTimes = [
  "5:00 PM",
  "6:30 PM",
  "8:00 PM",
  "9:30 PM",
  "10:15 PM",
] as const;

export const reservationExperiences = [
  "À la carte",
  "Chef’s Tasting — Midnight Cellar ($95)",
  "Chef’s Tasting + Wine Pairing (+$55)",
] as const;

const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  topic: z.enum(contactTopics),
  message: z.string().trim().min(10).max(2000),
});

export const reservationSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().regex(phoneRegex, "Invalid phone number format."),
  date: z.string().trim().date(),
  time: z.enum(reservationTimes),
  partySize: z.number().int().min(1).max(6),
  experience: z.enum(reservationExperiences).optional(),
  notes: z.string().trim().max(1500).optional(),
});
