import { z } from "zod";
import {
  buildJourneyIndex,
  createAgent,
  knowledgeSource,
  tool,
  type AgentModelSet,
} from "@cognidesk/core";
import { openaiModel } from "@cognidesk/model-openai";
import {
  loadFlightDemoConfig,
  requireConfiguredApiKey,
  resolveFlightDemoPath,
  type FlightDemoConfig,
} from "./config.js";
import {
  assertCompatibleKnowledgeIndex,
  loadFlightKnowledgeIndex,
  searchFlightKnowledgeIndex,
  type FlightKnowledgeIndex,
  type FlightKnowledgeMetadata,
} from "./knowledge-index.js";

const flight = z.object({
  id: z.string(),
  origin: z.string(),
  destination: z.string(),
  departureTime: z.string(),
  status: z.enum(["scheduled", "delayed", "boarding", "departed"]),
  price: z.number(),
});

const bookingContext = z.object({
  origin: z.string().optional(),
  destination: z.string().optional(),
  departureDate: z.string().optional(),
  passengerName: z.string().optional(),
  selectedFlightId: z.string().optional(),
  bookingReference: z.string().optional(),
  availableFlights: z.array(flight).optional(),
});

const statusContext = z.object({
  bookingReference: z.string().optional(),
  flightNumber: z.string().optional(),
});

const flights = [
  { id: "CL101", origin: "Vienna", destination: "Berlin", departureTime: "2026-05-26T09:10:00+02:00", status: "scheduled" as const, price: 189 },
  { id: "CL204", origin: "Vienna", destination: "Paris", departureTime: "2026-05-26T13:40:00+02:00", status: "boarding" as const, price: 224 },
  { id: "CL330", origin: "Berlin", destination: "Vienna", departureTime: "2026-05-26T18:20:00+02:00", status: "delayed" as const, price: 172 },
];

const searchFlights = tool("searchFlights", {
  description: "Search mocked flight inventory.",
  input: z.object({
    origin: z.string(),
    destination: z.string(),
    departureDate: z.string(),
  }),
  output: z.object({ flights: z.array(flight) }),
  execute: async ({ input }) => ({
    flights: flights.filter((candidate) => (
      candidate.origin.toLowerCase() === input.origin.toLowerCase()
        && candidate.destination.toLowerCase() === input.destination.toLowerCase()
    )),
  }),
});

const bookFlight = tool("bookFlight", {
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

const getTicketStatus = tool("getTicketStatus", {
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

const getFlightInfo = tool("getFlightInfo", {
  description: "Get mocked flight information.",
  input: z.object({ flightNumber: z.string() }),
  output: flight.optional(),
  execute: async ({ input }) => flights.find((candidate) => candidate.id.toLowerCase() === input.flightNumber.toLowerCase()),
});

function createFlightKnowledgeSource(args: {
  index: FlightKnowledgeIndex;
  embeddingModel: AgentModelSet["journeyEmbedding"];
}) {
  return knowledgeSource("flight-policies", {
  query: z.object({ query: z.string() }),
  metadata: z.object({
    documentId: z.string(),
    category: z.string(),
  }),
  retrieve: async ({ query, signal }) => {
    // Demo-only infrastructure: this app-local JSON index is not a Cognidesk v1 Knowledge database package.
    const items = await searchFlightKnowledgeIndex({
      index: args.index,
      embeddingModel: args.embeddingModel,
      query: query.query,
      ...(signal ? { signal } : {}),
    });
    return {
      items: items as Array<{
        id: string;
        title?: string;
        content: string;
        score?: number;
        metadata: FlightKnowledgeMetadata;
      }>,
    };
  },
});
}

export interface CreateFlightDemoRuntimePartsOptions {
  config?: FlightDemoConfig;
  models?: AgentModelSet;
  knowledgeIndex?: FlightKnowledgeIndex;
}

export async function createFlightDemoRuntimeParts(options: CreateFlightDemoRuntimePartsOptions = {}) {
  const config = options.config ?? await loadFlightDemoConfig();
  const models = options.models ?? createOpenAIModelSet(config, requireConfiguredApiKey(config));
  const knowledgeIndex = options.knowledgeIndex
    ?? await loadFlightKnowledgeIndex(resolveFlightDemoPath(config.storage.knowledgeIndexPath));
  assertCompatibleKnowledgeIndex(knowledgeIndex, models.journeyEmbedding);
  const flightKnowledge = createFlightKnowledgeSource({
    index: knowledgeIndex,
    embeddingModel: models.journeyEmbedding,
  });
  const agent = createAgent("flight-service", {
    instructions: [
      "You are a concise customer support agent for a mocked flight service.",
      "Help with booking tickets, ticket status, flight information, check-in, baggage, and handoff.",
      "Do not claim that real bookings were made; this demo uses mocked data.",
    ].join("\n"),
  });
  agent.tools.add(searchFlights, bookFlight, getTicketStatus, getFlightInfo);
  agent.knowledge.add(flightKnowledge);

  const booking = agent.stateMachineJourney("book-flight", {
    condition: "Customer wants to search for flights or book a ticket",
    examples: ["Book a ticket to Berlin", "Find me a flight from Vienna to Paris tomorrow"],
    tags: ["booking", "tickets"],
    context: bookingContext,
    priority: 20,
  });
  const collectRoute = booking.state("collectRoute")
    .collect("origin")
    .collect("destination")
    .collect("departureDate");
  const chooseFlight = booking.state("chooseFlight").runTool(searchFlights, {
    input: ({ context }) => ({
      origin: context.origin ?? "",
      destination: context.destination ?? "",
      departureDate: context.departureDate ?? "",
    }),
    assign: {
      availableFlights: ({ output }) => output.flights,
    },
  });
  const confirmPassenger = booking.state("confirmPassenger").collect("passengerName");
  const book = booking.state("book").runTool(bookFlight, {
    confirm: {
      message: "Confirm mocked booking",
    },
  });
  const booked = booking.final("booked");
  booking.initial(collectRoute);
  collectRoute.when("route and date are known").target(chooseFlight);
  chooseFlight.when("customer selected a flight").target(confirmPassenger);
  confirmPassenger.when("passenger is known").target(book);
  book.transitionTo(booked);

  const status = agent.stateMachineJourney("ticket-status", {
    condition: "Customer wants ticket status, booking status, check-in status, or flight information",
    examples: ["Where is my ticket?", "What is the status of CL204?", "Can I check in?"],
    tags: ["status", "check-in", "flight-info"],
    context: statusContext,
    priority: 30,
    matcher: ({ turn }) => Boolean((turn as { forceStatus?: boolean }).forceStatus),
  });
  const identify = status.state("identify").collect("bookingReference", { required: false }).collect("flightNumber", { required: false });
  const lookup = status.state("lookup").runTool(getTicketStatus, {
    input: ({ context }) => ({
      bookingReference: context.bookingReference ?? "",
    }),
  });
  const done = status.final("done");
  status.initial(identify);
  identify.when("booking reference or flight number is known", {
    guard: ({ context }) => Boolean(context.bookingReference),
  }).target(lookup);
  lookup.transitionTo(done);

  agent.delegationJourney("human-handoff", {
    condition: "Customer is angry, asks for a person, or has a complex exception",
    examples: ["I want to talk to a human", "This is urgent and complicated"],
    tags: ["handoff"],
    specialist: {
      goal: "Collect a short handoff summary and stop automated replies.",
      tools: [],
      knowledge: [flightKnowledge],
    },
  });

  const compiledAgent = agent.compile();
  const journeyIndex = await buildJourneyIndex(compiledAgent, { embeddingModel: models.journeyEmbedding });
  return { agent: compiledAgent, models, journeyIndex };
}

function createOpenAIModelSet(config: FlightDemoConfig, apiKey: string): AgentModelSet {
  return {
    response: openaiModel({ model: config.models.roles.response, apiKey }),
    matcher: openaiModel({ model: config.models.roles.matcher, apiKey }),
    extraction: openaiModel({ model: config.models.roles.extraction, apiKey }),
    citationPostProcessing: openaiModel({ model: config.models.roles.citationPostProcessing, apiKey }),
    compaction: openaiModel({ model: config.models.roles.compaction, apiKey }),
    journeyEmbedding: openaiModel({
      model: config.models.roles.journeyEmbedding,
      embeddingModel: config.models.roles.journeyEmbedding,
      apiKey,
    }),
  };
}
