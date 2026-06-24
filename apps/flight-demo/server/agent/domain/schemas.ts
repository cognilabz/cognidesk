import { z } from "zod";

export const flightSchema = z.object({
  id: z.string(),
  origin: z.string(),
  destination: z.string(),
  departureTime: z.string(),
  status: z.enum(["scheduled", "delayed", "boarding", "departed"]),
  price: z.number(),
});

export const bookingContext = z.object({
  origin: z.string().optional(),
  destination: z.string().optional(),
  departureDate: z.string().optional(),
  passengerName: z.string().optional(),
  selectedFlightId: z.string().optional(),
  bookingReference: z.string().optional(),
  availableFlights: z.array(flightSchema).optional(),
  routeAlternativeFlights: z.array(flightSchema).optional(),
  allAvailableFlights: z.array(flightSchema).optional(),
  lastSearchOrigin: z.string().optional(),
  lastSearchDestination: z.string().optional(),
  lastSearchDepartureDate: z.string().optional(),
});

export const statusContext = z.object({
  bookingReference: z.string().optional(),
  flightNumber: z.string().optional(),
  flightInfo: flightSchema.optional(),
  ticketStatus: z.object({
    bookingReference: z.string(),
    status: z.enum(["confirmed", "checked-in", "cancelled"]),
    nextStep: z.string(),
  }).optional(),
});

export const secureEmailLoginContext = z.object({
  bookingReference: z.string().optional(),
  accountEmail: z.string().email().optional(),
  requestType: z.string().optional(),
});

export const whatsappCustomerMessageContext = z.object({
  recipientPhone: z.string().optional(),
  messagePurpose: z.enum(["verification-link", "confirmation-link", "notification"]).optional(),
  bookingReference: z.string().optional(),
  requestLabel: z.string().optional(),
  notificationText: z.string().optional(),
  whatsAppDelivery: z.object({
    provider: z.literal("whatsapp"),
    status: z.enum(["sent", "not-configured", "failed"]),
    purpose: z.enum(["verification-link", "confirmation-link", "notification"]),
    recipientPhone: z.string(),
    recipientOverridden: z.boolean(),
    previewUrl: z.boolean(),
    messageId: z.string().optional(),
    link: z.string().url().optional(),
    reason: z.string().optional(),
    missingEnv: z.array(z.string()).optional(),
  }).optional(),
});

export type Flight = z.infer<typeof flightSchema>;
