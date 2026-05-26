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
});

export const statusContext = z.object({
  bookingReference: z.string().optional(),
  flightNumber: z.string().optional(),
  flightInfo: flightSchema.optional(),
});

export type Flight = z.infer<typeof flightSchema>;
