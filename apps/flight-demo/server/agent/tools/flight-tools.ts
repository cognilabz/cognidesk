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
      normalizeText(candidate.origin) === normalizeText(input.origin)
        && normalizeText(candidate.destination) === normalizeText(input.destination)
        && candidate.departureTime.slice(0, 10) === input.departureDate.trim()
    )),
  }),
});

export const suggestFlightOptions = tool("suggestFlightOptions", {
  description: "List mocked flight alternatives for a route and the whole demo inventory.",
  input: z.object({
    origin: z.string().optional(),
    destination: z.string().optional(),
  }),
  output: z.object({
    routeFlights: z.array(flightSchema),
    allFlights: z.array(flightSchema),
  }),
  execute: async ({ input }) => ({
    routeFlights: flights.filter((candidate) => (
      (!input.origin || normalizeText(candidate.origin) === normalizeText(input.origin))
        && (!input.destination || normalizeText(candidate.destination) === normalizeText(input.destination))
    )),
    allFlights: [...flights],
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
  idempotencyKey: ({ conversationId, input }) => `${conversationId}:${normalizeFlightId(input.selectedFlightId)}`,
  execute: async ({ input }) => {
    const selectedFlightId = normalizeFlightId(input.selectedFlightId);
    const flight = flights.find((candidate) => candidate.id === selectedFlightId);
    if (!flight) throw new Error(`Unknown mocked flight '${input.selectedFlightId}'.`);
    if (!input.passengerName.trim()) throw new Error("Passenger name is required.");
    return { bookingReference: `CD-${selectedFlightId}-4821` };
  },
});

export const getTicketStatus = tool("getTicketStatus", {
  description: "Get mocked ticket status.",
  input: z.object({ bookingReference: z.string() }),
  output: z.object({
    bookingReference: z.string(),
    status: z.enum(["confirmed", "checked-in", "cancelled"]),
    nextStep: z.string(),
  }),
  execute: async ({ input }) => {
    const flightId = input.bookingReference.match(/^CD-(CL\d{3})-\d{4}$/i)?.[1]?.toUpperCase();
    if (!flightId || !flights.some((candidate) => candidate.id === flightId)) {
      throw new Error(`Unknown mocked booking reference '${input.bookingReference}'.`);
    }
    return {
      bookingReference: input.bookingReference.toUpperCase(),
      status: "confirmed" as const,
      nextStep: "Check in opens 24 hours before departure.",
    };
  },
});

export const getFlightInfo = tool("getFlightInfo", {
  description: "Get mocked flight information.",
  input: z.object({ flightNumber: z.string() }),
  output: flightSchema.optional(),
  execute: async ({ input }) => flights.find((candidate) => candidate.id.toLowerCase() === input.flightNumber.toLowerCase()),
});

export const flightTools = {
  searchFlights,
  suggestFlightOptions,
  bookFlight,
  getTicketStatus,
  getFlightInfo,
};

export type FlightTools = typeof flightTools;

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function normalizeFlightId(value: string) {
  return value.trim().toUpperCase();
}
