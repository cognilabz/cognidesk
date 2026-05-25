import { z } from "zod";
import {
  buildJourneyIndex,
  createAgent,
  knowledgeSource,
  tool,
  type AgentModelSet,
  type ModelAdapter,
  type ModelMessage,
} from "@cognidesk/core";

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

const flightKnowledge = knowledgeSource("flight-policies", {
  query: z.object({ query: z.string() }),
  metadata: z.object({ category: z.string() }),
  retrieve: async ({ query }) => {
    const text = query.query.toLowerCase();
    const items = [
      {
        id: "policy-checkin",
        title: "Check-in",
        content: "Online check-in opens 24 hours before departure and closes 45 minutes before departure.",
        metadata: { category: "check-in" },
      },
      {
        id: "policy-bags",
        title: "Baggage",
        content: "Economy tickets include one cabin bag. Checked baggage can be added after booking.",
        metadata: { category: "baggage" },
      },
      {
        id: "policy-changes",
        title: "Changes",
        content: "Ticket changes depend on fare rules. Flexible fares can be changed without a service fee.",
        metadata: { category: "changes" },
      },
    ];
    return {
      items: items.filter((item) => text.includes(item.metadata.category) || text.includes("ticket") || text.includes("flight")),
    };
  },
});

export async function createFlightDemoRuntimeParts() {
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
  const models = createMockModelSet();
  const journeyIndex = await buildJourneyIndex(compiledAgent, { embeddingModel: models.journeyEmbedding });
  return { agent: compiledAgent, models, journeyIndex };
}

function createMockModelSet(): AgentModelSet {
  const response: ModelAdapter = {
    provider: "mock",
    model: "flight-demo-response",
    generateText: async ({ role, messages }) => {
      if (role === "extraction") return createMockExtraction(messages);
      if (role === "citationPostProcessing") return createMockCitationSegments(messages);
      if (role === "compaction") return createMockCompaction(messages);
      return {
        text: createMockAnswer(messages),
        usage: {
          inputTokens: messages.reduce((sum, message) => sum + Math.ceil(message.content.length / 4), 0),
          outputTokens: 40,
          totalTokens: 40,
        },
      };
    },
  };
  const embedding: ModelAdapter = {
    provider: "mock",
    model: "flight-demo-embedding",
    generateText: response.generateText,
    embed: async ({ text }) => ({
      embedding: keywordEmbedding(text),
      model: "flight-demo-embedding",
      dimensions: 6,
    }),
  };
  return {
    response,
    matcher: response,
    extraction: response,
    citationPostProcessing: response,
    journeyEmbedding: embedding,
    compaction: response,
  };
}

function createMockExtraction(messages: ModelMessage[]) {
  const system = messages.find((message) => message.role === "system")?.content ?? "";
  const user = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const lower = user.toLowerCase();
  const values: Record<string, unknown> = {};
  const wants = (path: string) => system.includes(path);
  const route = lower.match(/from\s+([a-z\s]+?)\s+to\s+([a-z\s]+?)(?:\s+today|\s+tomorrow|\.|$)/i);
  const toOnly = lower.match(/(?:to|for)\s+(vienna|berlin|paris)/i);
  if (wants("origin") && route?.[1]) values.origin = titleCase(route[1].trim());
  if (wants("destination") && route?.[2]) values.destination = titleCase(route[2].trim());
  if (wants("destination") && !values.destination && toOnly?.[1]) values.destination = titleCase(toOnly[1]);
  if (wants("departureDate")) {
    if (lower.includes("tomorrow")) values.departureDate = "2026-05-26";
    if (lower.includes("today")) values.departureDate = "2026-05-25";
  }
  const passenger = user.match(/(?:for|passenger)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
  if (wants("passengerName") && passenger?.[1]) values.passengerName = passenger[1];
  const bookingReference = user.match(/\b(?:CD-[A-Z0-9-]+|ABC\d{3,})\b/i)?.[0];
  if (wants("bookingReference") && bookingReference) values.bookingReference = bookingReference.toUpperCase();
  const flightNumber = user.match(/\bCL\d{3}\b/i)?.[0];
  if (wants("flightNumber") && flightNumber) values.flightNumber = flightNumber.toUpperCase();
  const structured = { values };
  return { text: JSON.stringify(structured), structured };
}

function createMockCitationSegments(messages: ModelMessage[]) {
  const user = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const answer = user.split("Assistant answer:\n").at(-1)?.trim() ?? "";
  const knowledgeIds = [...user.matchAll(/^\[([^\]]+)\]/gm)].map((match) => match[1]).filter((id): id is string => Boolean(id));
  const usedIds = knowledgeIds.filter((id) => answer.includes(id));
  const structured = {
    segments: [{
      text: answer,
      knowledgeIds: usedIds.length > 0 ? usedIds : knowledgeIds.slice(0, answer.includes("Source:") ? 1 : 0),
    }],
  };
  return { text: JSON.stringify(structured), structured };
}

function createMockCompaction(messages: ModelMessage[]) {
  const structured = {
    summary: messages.at(-1)?.content.slice(0, 240) ?? "No conversation events.",
    stableFacts: [],
    openQuestions: [],
    activeCommitments: [],
  };
  return { text: JSON.stringify(structured), structured };
}

function createMockAnswer(messages: ModelMessage[]) {
  const user = [...messages].reverse().find((message) => message.role === "user")?.content.toLowerCase() ?? "";
  if (user.includes("book") || user.includes("ticket to") || user.includes("flight to")) {
    return "I can help book a mocked flight. Tell me the origin, destination, travel date, and passenger name. For example, Vienna to Berlin tomorrow for Alex Morgan.";
  }
  if (user.includes("status") || user.includes("check") || user.includes("cl")) {
    const flightMatch = user.match(/cl\d{3}/i)?.[0]?.toUpperCase();
    if (flightMatch) {
      const found = flights.find((flight) => flight.id === flightMatch);
      return found
        ? `${found.id} from ${found.origin} to ${found.destination} is currently ${found.status}. Departure: ${found.departureTime}. Source: policy-checkin.`
        : `I could not find ${flightMatch} in the mocked flight data.`;
    }
    return "Your mocked ticket is confirmed. Check-in opens 24 hours before departure. Source: policy-checkin.";
  }
  if (user.includes("bag")) {
    return "Economy tickets include one cabin bag, and checked baggage can be added after booking. Source: policy-bags.";
  }
  if (user.includes("human") || user.includes("agent")) {
    return "I can prepare a handoff summary for a human agent. Please share the booking reference and the issue.";
  }
  return "I can help with mocked flight booking, ticket status, flight information, check-in, baggage, or handoff.";
}

function titleCase(value: string) {
  return value.split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part[0]?.toUpperCase() ?? ""}${part.slice(1).toLowerCase()}`)
    .join(" ");
}

function keywordEmbedding(text: string) {
  const lower = text.toLowerCase();
  return [
    lower.includes("book") || lower.includes("ticket to") ? 1 : 0,
    lower.includes("status") || lower.includes("check") ? 1 : 0,
    lower.includes("flight") || lower.includes("cl") ? 1 : 0,
    lower.includes("bag") ? 1 : 0,
    lower.includes("human") || lower.includes("handoff") ? 1 : 0,
    lower.includes("change") ? 1 : 0,
  ];
}
