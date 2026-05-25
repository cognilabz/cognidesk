import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  confirmationWidget,
  createAgent,
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

describe("definition builders", () => {
  it("compiles a type-safe state machine journey graph", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      examples: ["Book me a flight to Berlin"],
      context: bookingContext,
    });

    const search = booking.state("search")
      .collect("origin")
      .collect("destination")
      .collect("departureDate")
      .collect("passenger.firstName");
    const choose = booking.state("chooseFlight")
      .runTool(searchFlights, {});
    const confirm = booking.state("confirm")
      .runTool(bookFlight, {
        confirm: {
          widget: confirmationWidget,
          message: "Confirm booking",
        },
      });
    const completed = booking.final("completed");

    booking.initial(search);
    search.when("flight search details are complete").target(choose);
    choose.transitionTo(confirm);
    confirm.transitionTo(completed);

    const compiled = agent.compile();
    expect(compiled.journeys).toHaveLength(1);
    expect(compiled.journeys[0]?.initialStateId).toBe("search");
    expect(compiled.journeys[0]?.toMermaid()).toContain("search --> chooseFlight");
  });

  it("rejects journeys without initial state", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    }).state("search");

    expect(() => agent.compile()).toThrow("must declare an initial state");
  });

  it("keeps side-effect tool confirmation as a type requirement", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    });
    const confirm = booking.state("confirm");

    // @ts-expect-error side-effect tools require explicit confirmation
    confirm.runTool(bookFlight, {});
  });

  it("rejects unknown context paths at typecheck time", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    });
    const search = booking.state("search");

    // @ts-expect-error unknown context path
    search.collect("badField");
    // @ts-expect-error arbitrary array index paths are not supported
    search.collect("passengers.0.firstName");
  });

  it("supports compile-time checked state registry lookups", () => {
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agent.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: bookingContext,
    });
    const states = booking.defineStates("search", "chooseFlight", "confirm");
    const search = states.get("search").collect("origin");
    const choose = states.get("chooseFlight");
    const confirm = states.get("confirm");
    const completed = booking.final("completed");

    if (false) {
      // @ts-expect-error unknown state ids are rejected at typecheck time
      states.get("missing");
    }

    booking.initial(search);
    search.transitionTo(choose);
    choose.transitionTo(confirm);
    confirm.transitionTo(completed);

    expect(agent.compile().journeys[0]?.toMermaid()).toContain("search --> chooseFlight");
  });

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

    const duplicateToolAgent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    duplicateToolAgent.tools.add(searchFlights, duplicateTool);
    expect(() => duplicateToolAgent.compile()).toThrow("Tool 'searchFlights' is already registered.");

    const duplicateKnowledgeAgent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    duplicateKnowledgeAgent.knowledge.add(flightFaq, duplicateKnowledge);
    expect(() => duplicateKnowledgeAgent.compile()).toThrow("Knowledge source 'flight-faq' is already registered.");

    const duplicateWidgetAgent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    duplicateWidgetAgent.registerWidget(confirmationWidget).registerWidget(duplicateWidget);
    expect(() => duplicateWidgetAgent.compile()).toThrow("Widget 'confirmation' is already registered.");

    const agent = createAgent("flight-service", {
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
    const agent = createAgent("flight-service", {
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
