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

describe("definition builders hierarchy and fragments", () => {
  it("requires hierarchical states to declare their initial child", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    });
    const parent = booking.state("traveller");
    parent.state("name");
    booking.initial(parent);

    expect(() => agent.compile()).toThrow("State 'traveller' has child states and must declare an initial child state.");
  });

  it("compiles hierarchical initial child state metadata", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    });
    const parent = booking.state("traveller");
    const name = parent.state("name");
    parent.initial(name);
    booking.initial(parent);

    const graph = agent.compile().journeys[0]?.toGraph();

    expect(graph?.states.find((state) => state.id === "traveller")).toMatchObject({
      id: "traveller",
      initialStateId: "name",
    });
  });

  it("inherits parent collected fields into child states", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    });
    const parent = booking.state("traveller").collect("passenger.email");
    const name = parent.state("name").collect("passenger.firstName");
    parent.initial(name);
    booking.initial(parent);

    const graph = agent.compile().journeys[0]?.toGraph();

    expect(graph?.states.find((state) => state.id === "name")?.collected).toEqual([
      { path: "passenger.email", required: true, extract: true },
      { path: "passenger.firstName", required: true, extract: true },
    ]);
  });

  it("composes reusable journey fragments into a state-machine journey", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const passengerLookup = tool("lookupPassenger", {
      input: z.object({ email: z.string().email() }),
      output: z.object({ known: z.boolean() }),
      execute: async () => ({ known: true }),
    });
    const passengerFragment = journeyFragment("passenger-details", {
      context: bookingContext,
      tools: [passengerLookup],
      define: (journey) => {
        const collectPassenger = journey.state("collectPassenger")
          .collect("passenger.email")
          .runTool(passengerLookup, {
            input: ({ context }) => ({ email: context.passenger.email ?? "" }),
          });
        const passengerReady = journey.state("passengerReady");
        collectPassenger.transitionTo(passengerReady);
      },
    });
    const booking = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    });
    booking.use(passengerFragment);
    const search = booking.state("search").collect("destination");
    booking.initial(search);
    search.transitionTo(booking.states.get("collectPassenger"));
    booking.states.get("passengerReady").transitionTo(booking.final("done"));

    const compiled = agent.compile();
    const graph = compiled.journeys[0]?.toGraph();

    expect(compiled.journeys[0]?.tools.map((toolDefinition) => toolDefinition.name)).toEqual(["lookupPassenger"]);
    expect(graph?.states.map((state) => state.id)).toEqual(expect.arrayContaining([
      "search",
      "collectPassenger",
      "passengerReady",
      "done",
    ]));
    expect(compiled.journeys[0]?.toMermaid()).toContain("collectPassenger --> passengerReady");

    const wrongContext = z.object({ other: z.string().optional() });
    const wrongFragment = journeyFragment("wrong", {
      context: wrongContext,
      define: (journey) => {
        journey.state("wrong").collect("other");
      },
    });
    if (false) {
      // @ts-expect-error fragments are typed to the journey context schema
      booking.use(wrongFragment);
    }
  });
});
