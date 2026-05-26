import { z } from "zod";
import { tool } from "@cognidesk/core";
import { flights } from "../data/flights.js";
import { flightSchema } from "../domain/schemas.js";

export const searchFlights = tool("searchFlights", {
  description: "Search mocked flight inventory.",
  input: z.object({
    origin: z.string(),
    destination: z.string(),
    departureDate: z.string(),
  }),
  output: z.object({ flights: z.array(flightSchema) }),
  execute: async ({ input }) => ({
    flights: flights.filter((candidate) => (
      candidate.origin.toLowerCase() === input.origin.toLowerCase()
        && candidate.destination.toLowerCase() === input.destination.toLowerCase()
    )),
  }),
});

export const bookFlight = tool("bookFlight", {
  description: "Create a mocked booking.",
  input: z.object({
    selectedFlightId: z.string(),
    passengerName: z.string(),
  }),
  output: z.object({
    bookingReference: z.string(),
  }),
  sideEffect: true,
  idempotencyKey: ({ conversationId, input }) => `${conversationId}:${input.selectedFlightId}`,
  execute: async ({ input }) => ({ bookingReference: `CD-${input.selectedFlightId}-4821` }),
});

export const getTicketStatus = tool("getTicketStatus", {
  description: "Get mocked ticket status.",
  input: z.object({ bookingReference: z.string() }),
  output: z.object({
    bookingReference: z.string(),
    status: z.enum(["confirmed", "checked-in", "cancelled"]),
    nextStep: z.string(),
  }),
  execute: async ({ input }) => ({
    bookingReference: input.bookingReference,
    status: "confirmed" as const,
    nextStep: "Check in opens 24 hours before departure.",
  }),
});

export const getFlightInfo = tool("getFlightInfo", {
  description: "Get mocked flight information.",
  input: z.object({ flightNumber: z.string() }),
  output: flightSchema.optional(),
  execute: async ({ input }) => flights.find((candidate) => candidate.id.toLowerCase() === input.flightNumber.toLowerCase()),
});

export const flightTools = {
  searchFlights,
  bookFlight,
  getTicketStatus,
  getFlightInfo,
};

export type FlightTools = typeof flightTools;
