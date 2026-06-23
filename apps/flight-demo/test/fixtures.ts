import type { AgentModelSet, ModelAdapter, ModelMessage } from "@cognidesk/core";
import type { FlightDemoConfig } from "../server/config.js";
import { buildFlightKnowledgeIndex } from "../server/knowledge-index.js";

export const testConfig: FlightDemoConfig = {
  models: {
    provider: "openai",
    apiKeyEnv: "OPENAI_API_KEY",
    roles: {
      response: "gpt-5.4-mini",
      compaction: "gpt-5.4-mini",
      matcher: "gpt-5.4-mini",
      extraction: "gpt-5.4-mini",
      citationPostProcessing: "gpt-5.4-mini",
      journeyEmbedding: "test-embedding",
    },
  },
  storage: {
    sqlitePath: ":memory:",
    knowledgeIndexPath: ".data/test-knowledge-index.json",
  },
};

export function createTestModelSet(): AgentModelSet {
  const response: ModelAdapter = {
    provider: "test",
    model: "test-response",
    generateText: async ({ role, messages }) => {
      if (role === "extraction") return createTestExtraction(messages);
      if (role === "matcher") return createTestMatcher(messages);
      if (role === "citationPostProcessing") return createTestCitationSegments(messages);
      if (role === "compaction") return createTestCompaction(messages);
      return {
        text: createTestAnswer(messages),
        usage: {
          inputTokens: messages.reduce((sum, message) => sum + Math.ceil(message.content.length / 4), 0),
          outputTokens: 40,
          totalTokens: 40,
        },
      };
    },
  };
  const embedding: ModelAdapter = {
    provider: "test",
    model: "test-embedding",
    generateText: response.generateText,
    embed: async ({ text }) => ({
      embedding: keywordEmbedding(text),
      model: "test-embedding",
      dimensions: keywordEmbedding(text).length,
    }),
  };
  return {
    response,
    matcher: response,
    extraction: response,
    citationPostProcessing: response,
    compaction: response,
    journeyEmbedding: embedding,
  };
}

export async function createTestKnowledgeIndex(models: AgentModelSet) {
  return await buildFlightKnowledgeIndex({
    documents: [
      {
        id: "test-checkin",
        title: "Check-in",
        category: "check-in",
        url: "/docs/test-checkin.html",
        content: "Online check-in opens 24 hours before departure.",
      },
      {
        id: "test-baggage",
        title: "Baggage",
        category: "baggage",
        url: "/docs/test-baggage.html",
        content: "Economy tickets include one cabin bag. The demo cannot add extra baggage or verify baggage add-on eligibility.",
      },
      {
        id: "test-checkin-policy",
        title: "Check-in policy",
        category: "check-in",
        url: "/docs/test-checkin-policy.html",
        content: "Online check-in opens 24 hours before departure.",
      },
      {
        id: "test-boarding",
        title: "Boarding",
        category: "boarding",
        url: "/docs/test-boarding.html",
        content: "Boarding starts 35 minutes before European departures.",
      },
      {
        id: "test-ticket-changes",
        title: "Ticket changes",
        category: "changes",
        url: "/docs/test-ticket-changes.html",
        content: "Flexible fares can be changed before departure; Promo fares are non-changeable unless a disruption applies.",
      },
    ],
    embeddingModel: models.journeyEmbedding,
    generatedAt: "2026-05-26T00:00:00.000Z",
  });
}

function createTestMatcher(messages: ModelMessage[]) {
  const prompt = messages.map((message) => message.content).join("\n").toLowerCase();
  const latestUser = extractLatestUserMessage(prompt);
  if (prompt.includes("explicitly confirms the pending side-effect action")) {
    const latestUtterance = extractLatestUtterance(prompt) || latestUser;
    const confirmed = /\b(yes|yes please|confirm|go ahead|create|book it|proceed)\b/.test(latestUtterance);
    const structured = {
      confirmed,
      confidence: confirmed ? 0.95 : 0.2,
      reason: confirmed ? "Clear voice confirmation." : "No explicit voice confirmation.",
    };
    return { text: JSON.stringify(structured), structured };
  }
  if (prompt.includes("state transition candidates")) {
    const candidates = [];
    const mentionsAvailableFlights = prompt.includes("availableflights");
    const hasNoFlights = mentionsAvailableFlights && prompt.includes("[]");
    if (prompt.includes("state: noflights") && (latestUser.includes("cheaper") || latestUser.includes("cheapest") || latestUser.match(/\bcl\d{3}\b/i))) {
      candidates.push({ id: "transition_1", confidence: 0.95, reason: "Customer selected an alternative." });
    } else if (prompt.includes("state: noflights") && latestUser.includes("try")) {
      candidates.push({ id: "transition_2", confidence: 0.8, reason: "Customer wants a different search." });
    } else if (prompt.includes("targetid: noflights") && hasNoFlights) {
      candidates.push({ id: "transition_2", confidence: 0.95, reason: "No mocked flights are available." });
    } else if (prompt.includes("targetid: selectflight") && mentionsAvailableFlights && !hasNoFlights) {
      candidates.push({ id: "transition_1", confidence: 0.95, reason: "Mocked flights are available." });
    } else if (latestUser.match(/\bcd-[a-z0-9-]+-\d{4}\b/i) || latestUser.includes("booking")) {
      candidates.push({ id: "transition_1", confidence: 0.95, reason: "Booking reference is present." });
    } else if (latestUser.match(/\bcl\d{3}\b/i)) {
      candidates.push({ id: "transition_2", confidence: 0.95, reason: "Flight number is present." });
    }
    const structured = { candidates };
    return { text: JSON.stringify(structured), structured };
  }
  const candidates = [];
  const mentionsBaggage = /\b(bag|bags|baggage|luggage|suitcase|sports equipment)\b/.test(latestUser);
  const baggageServiceIntent = /\badd[- ]?on\b/.test(latestUser)
    || (mentionsBaggage && /\b(add|order|buy|purchase|more|extra|eligib|check|upgrade|pay|second|checked)\b/.test(latestUser));
  const statusIntent = !baggageServiceIntent && (
    latestUser.includes("status of booking")
    || latestUser.includes("booking status")
    || latestUser.includes("where is my ticket")
    || latestUser.includes("where is my booking")
    || latestUser.includes("can i check in")
    || latestUser.includes("can i check-in")
    || latestUser.includes("check in for")
    || latestUser.includes("check-in for")
    || latestUser.includes("flight status")
    || /\bstatus\b/.test(latestUser)
  );
  if (prompt.includes("ticket-status") && statusIntent) {
    candidates.push({ journeyId: "ticket-status", confidence: 0.9, reason: "Status request." });
  }
  if (
    prompt.includes("baggage-service")
    && (
      baggageServiceIntent
      || (
        prompt.includes("active journey: baggage-service")
        && (
          latestUser.match(/\bcd-[a-z0-9-]+-\d{4}\b/i)
          || /\b(yes|check|verify|that|it)\b/.test(latestUser)
        )
      )
    )
  ) {
    candidates.push({ journeyId: "baggage-service", confidence: 0.96, reason: "Unsupported baggage/add-on request." });
  }
  if (prompt.includes("human-handoff") && (latestUser.includes("human") || latestUser.includes("person") || latestUser.includes("cancelled"))) {
    candidates.push({ journeyId: "human-handoff", confidence: 0.92, reason: "Human handoff request." });
  }
  if (
    prompt.includes("book-flight")
    && !statusIntent
    && !baggageServiceIntent
    && !mentionsBaggage
    && (
      latestUser.includes("find flights")
      || latestUser.includes("search for a flight")
      || latestUser.includes("looking for a flight")
      || /\bbook\b/.test(latestUser)
      || latestUser.includes("ticket to")
      || (
        prompt.includes("active journey: book-flight")
        && (
          latestUser.includes("available flights")
          || latestUser.includes("any dates")
          || latestUser.includes("try")
          || latestUser.includes("today")
          || latestUser.includes("tomorrow")
          || latestUser.includes("cheaper")
          || latestUser.includes("cheapest")
          || latestUser.includes("book that")
          || latestUser.includes("create the mocked booking")
          || latestUser.includes("confirm")
          || latestUser.includes("yes")
          || /\bcl\d{3}\b/i.test(latestUser)
        )
      )
    )
  ) {
    candidates.push({ journeyId: "book-flight", confidence: 0.95, reason: "Booking request." });
  }
  const structured = { candidates };
  return { text: JSON.stringify(structured), structured };
}

function createTestExtraction(messages: ModelMessage[]) {
  const system = messages.find((message) => message.role === "system")?.content ?? "";
  const user = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const lower = user.toLowerCase();
  const values: Record<string, unknown> = {};
  const wants = (path: string) => system.includes(path);
  const route = lower.match(/from\s+([a-z\s]+?)\s+to\s+([a-z\s]+?)(?:\s+today|\s+tomorrow|\s+on\s+\d{4}-\d{2}-\d{2}|\.|$)/i);
  const routeWithoutFrom = lower.match(/\b(vienna|berlin|paris)\s+to\s+(vienna|berlin|paris)(?:\s+today|\s+tomorrow|\s+on\s+\d{4}-\d{2}-\d{2}|\.|$)/i);
  const toOnly = lower.match(/(?:to|for)\s+(vienna|berlin|paris)/i);
  if (wants("origin") && route?.[1]) values.origin = titleCase(route[1].trim());
  if (wants("origin") && !values.origin && routeWithoutFrom?.[1]) values.origin = titleCase(routeWithoutFrom[1]);
  if (wants("destination") && route?.[2]) values.destination = titleCase(route[2].trim());
  if (wants("destination") && !values.destination && routeWithoutFrom?.[2]) values.destination = titleCase(routeWithoutFrom[2]);
  if (wants("destination") && !values.destination && toOnly?.[1]) values.destination = titleCase(toOnly[1]);
  if (wants("departureDate")) {
    const isoDate = user.match(/\b20\d{2}-\d{2}-\d{2}\b/)?.[0];
    if (isoDate) values.departureDate = isoDate;
    if (lower.includes("tomorrow")) values.departureDate = "2026-05-27";
    if (lower.includes("today")) values.departureDate = "2026-05-26";
  }
  const passenger = user.match(/(?:for|passenger)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
  if (wants("passengerName") && passenger?.[1]) values.passengerName = passenger[1];
  const bookingReference = user.match(/\b(?:CD-[A-Z0-9-]+|ABC\d{3,})\b/i)?.[0];
  if (wants("bookingReference") && bookingReference) values.bookingReference = bookingReference.toUpperCase();
  const flightNumber = user.match(/\bCL\d{3}\b/i)?.[0];
  if (wants("flightNumber") && flightNumber) values.flightNumber = flightNumber.toUpperCase();
  if (wants("selectedFlightId") && flightNumber) values.selectedFlightId = flightNumber.toUpperCase();
  if (wants("selectedFlightId") && !values.selectedFlightId && /\b(cheaper|cheapest|lowest price)\b/.test(lower)) {
    const currentContext = system.match(/current context:\s*(\{.*\})/is)?.[1];
    const cheaperFlightId = currentContext ? cheapestFlightIdFromContext(currentContext) : null;
    if (cheaperFlightId) values.selectedFlightId = cheaperFlightId;
  }
  const structured = { values };
  return { text: JSON.stringify(structured), structured };
}

function createTestCitationSegments(messages: ModelMessage[]) {
  const user = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const answer = user.split("Assistant answer:\n").at(-1)?.trim() ?? "";
  const knowledgeIds = [...user.matchAll(/^\[([^\]]+)\]/gm)].map((match) => match[1]).filter((id): id is string => Boolean(id));
  const lowerAnswer = answer.toLowerCase();
  const matchedKnowledgeIds = knowledgeIds.filter((id) => {
    const lowerId = id.toLowerCase();
    if (lowerId.includes("bag")) return lowerAnswer.includes("bag") || lowerAnswer.includes("cabin");
    if (lowerId.includes("check")) return lowerAnswer.includes("check-in") || lowerAnswer.includes("check in");
    if (lowerId.includes("boarding")) return lowerAnswer.includes("boarding") || lowerAnswer.includes("gate");
    if (lowerId.includes("change")) return lowerAnswer.includes("change") || lowerAnswer.includes("promo");
    return lowerAnswer.includes("source");
  });
  const structured = {
    segments: [{
      text: answer,
      knowledgeIds: matchedKnowledgeIds.slice(0, 1),
    }],
  };
  return { text: JSON.stringify(structured), structured };
}

function createTestCompaction(messages: ModelMessage[]) {
  const structured = {
    summary: messages.at(-1)?.content.slice(0, 240) ?? "No conversation events.",
    stableFacts: [],
    openQuestions: [],
    activeCommitments: [],
  };
  return { text: JSON.stringify(structured), structured };
}

function createTestAnswer(messages: ModelMessage[]) {
  const system = messages.find((message) => message.role === "system")?.content.toLowerCase() ?? "";
  const user = [...messages].reverse().find((message) => message.role === "user")?.content.toLowerCase() ?? "";
  const transcript = messages.map((message) => message.content).join("\n").toLowerCase();
  if (transcript.includes("mock booking confirmed") && /\b(cool|thanks|thank you|ok|okay|great)\b/.test(user)) {
    return "You're all set — the mocked booking is already confirmed.";
  }
  if (/\b(baggage|luggage|extra bag|add-on|add on)\b/.test(transcript) && /\b(yes|check that|check it|verify|eligib)\b/.test(user)) {
    return "I cannot verify baggage add-on eligibility in this demo. I can explain the baggage policy or prepare a human handoff.";
  }
  if (/^cd-cl\d{3}-\d{4}$/i.test(user.trim()) && /\b(baggage|luggage|extra bag|add-on|add on)\b/.test(transcript)) {
    return "I cannot verify baggage add-on eligibility from a booking reference in this demo. I can explain the baggage policy or prepare a human handoff.";
  }
  if (system.includes("active state: noflights") && (user.includes("available flights") || user.includes("any dates"))) {
    return "There are no mocked Berlin to Paris flights on any date. Available mocked flights include CL102 Vienna to Berlin and CL204 Vienna to Paris.";
  }
  if (system.includes('"availableflights":[]')) {
    return "There are no mocked flights for that route and date. I can suggest available mocked flights or check a different route.";
  }
  if (user.includes("human") || user.includes("person")) {
    return "I can collect a short summary for human support so the customer can be handed off.";
  }
  if (user.includes("bag") || user.includes("bags") || user.includes("luggage") || user.includes("suitcase") || user.includes("sports equipment")) {
    if (user.includes("raw source")) return "Economy tickets include one cabin bag. Source: K1:test-baggage.";
    if (/\b(add|order|buy|purchase|more|extra|eligib|check|upgrade|pay|second)\b/.test(user)) {
      return "Economy Light includes one cabin bag. This demo can explain the baggage policy, but it cannot add extra baggage or verify baggage add-on eligibility for a booking.";
    }
    return "Economy tickets include one cabin bag.";
  }
  if (/\bbook\b/.test(user) || user.includes("ticket to") || user.includes("flight to")) {
    return "I can help book a mocked flight. Tell me the origin, destination, travel date, and passenger name. For example, Vienna to Berlin tomorrow for Alex Morgan.";
  }
  if (user.includes("boarding") || user.includes("gate")) {
    return "Boarding usually starts 35 minutes before European departures.";
  }
  if (user.includes("change") || user.includes("promo fare")) {
    return "Flexible fares can be changed before departure. Promo fares are non-changeable unless a schedule disruption applies.";
  }
  if (user.includes("check-in") || user.includes("check in")) {
    return "Online check-in opens 24 hours before departure.";
  }
  if (
    user.includes("status")
    || user.includes("can i check in")
    || user.includes("can i check-in")
    || user.includes("check in for")
    || user.includes("check-in for")
    || user.includes("where is my ticket")
  ) {
    return "Your mocked ticket is confirmed. Check-in opens 24 hours before departure.";
  }
  return "I can help with mocked flight booking, ticket status, flight information, check-in, baggage, or handoff.";
}

function titleCase(value: string) {
  return value.split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part[0]?.toUpperCase() ?? ""}${part.slice(1).toLowerCase()}`)
    .join(" ");
}

function extractLatestUserMessage(prompt: string) {
  const jsonValue = prompt.match(/"latestusermessage"\s*:\s*"([^"]*)"/)?.[1];
  if (jsonValue) return jsonValue.replace(/\\"/g, "\"");
  return prompt.match(/latest user message:\s*([^\n]+)/)?.[1] ?? prompt;
}

function extractLatestUtterance(prompt: string) {
  return prompt.match(/"latestutterance"\s*:\s*"([^"]*)"/)?.[1]?.replace(/\\"/g, "\"") ?? "";
}

function cheapestFlightIdFromContext(contextJson: string) {
  try {
    const context = JSON.parse(contextJson) as { availableFlights?: Array<{ id?: unknown; price?: unknown }> };
    const flights = Array.isArray(context.availableFlights)
      ? context.availableFlights.filter((flight): flight is { id: string; price: number } => (
        typeof flight.id === "string" && typeof flight.price === "number"
      ))
      : [];
    return flights.sort((left, right) => left.price - right.price)[0]?.id ?? null;
  } catch {
    return null;
  }
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
    lower.includes("boarding") || lower.includes("gate") ? 1 : 0,
    lower.includes("check-in") || lower.includes("check in") ? 1 : 0,
    lower.includes("disruption") || lower.includes("cancelled") || lower.includes("delayed") ? 1 : 0,
  ];
}
