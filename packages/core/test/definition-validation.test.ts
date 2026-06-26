import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  confirmationWidget,
  createAgent,
  journeyFragment,
  knowledgeSource,
  tool,
  widget,
} from "../src/index.js";

const flightSchema = z.object({
  id: z.string(),
  price: z.number(),
});

const bookingContext = z.object({
  origin: z.string().optional(),
  destination: z.string().optional(),
  departureDate: z.string().optional(),
  selectedFlightId: z.string().optional(),
  passenger: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email().optional(),
  }),
  passengers: z.array(z.object({
    firstName: z.string(),
    lastName: z.string(),
  })).optional(),
  flights: z.array(flightSchema).optional(),
});

const searchFlights = tool("searchFlights", {
  input: z.object({
    origin: z.string(),
    destination: z.string(),
    departureDate: z.string(),
  }),
  output: z.object({
    flights: z.array(flightSchema),
  }),
  execute: async () => ({ flights: [{ id: "OS123", price: 220 }] }),
});

const bookFlight = tool("bookFlight", {
  input: z.object({
    selectedFlightId: z.string(),
  }),
  output: z.object({
    bookingReference: z.string(),
  }),
  sideEffect: true,
  idempotencyKey: ({ conversationId, input }) => `${conversationId}:${input.selectedFlightId}`,
  execute: async () => ({ bookingReference: "ABC123" }),
});

describe("definition builder validation", () => {
  it("rejects duplicate runtime definition identifiers", () => {
    const duplicateTool = tool("searchFlights", {
      input: z.object({}),
      output: z.object({ ok: z.boolean() }),
      execute: async () => ({ ok: true }),
    });
    const flightFaq = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({ items: [] }),
    });
    const duplicateKnowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({ items: [] }),
    });
    const duplicateWidget = widget("confirmation", {
      input: z.object({}),
      output: z.object({}),
    });

    const duplicateToolAgent = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    duplicateToolAgent.tools.add(searchFlights, duplicateTool);
    expect(() => duplicateToolAgent.compile()).toThrow("Tool 'searchFlights' is already registered.");

    const duplicateKnowledgeAgent = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    duplicateKnowledgeAgent.knowledge.add(flightFaq, duplicateKnowledge);
    expect(() => duplicateKnowledgeAgent.compile()).toThrow("Knowledge source 'flight-faq' is already registered.");

    const duplicateWidgetAgent = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    duplicateWidgetAgent.registerWidget(confirmationWidget).registerWidget(duplicateWidget);
    expect(() => duplicateWidgetAgent.compile()).toThrow("Widget 'confirmation' is already registered.");

    const agent = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const first = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    });
    first.initial(first.state("search"));
    const duplicateJourney = agent.stateMachineJourney("book-flight", {
      condition: "Duplicate journey",
      context: bookingContext,
    });
    duplicateJourney.initial(duplicateJourney.state("other"));

    expect(() => agent.compile()).toThrow("Journey 'book-flight' is already registered.");
  });

  it("rejects duplicate state identifiers in a journey", () => {
    const agent = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const booking = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    });
    const parent = booking.state("traveller");
    const child = parent.state("search");
    parent.initial(child);
    booking.state("search");
    booking.initial(parent);

    expect(() => agent.compile()).toThrow("State 'search' is already registered.");
  });
});
