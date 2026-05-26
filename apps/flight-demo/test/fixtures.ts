import type { AgentModelSet, ModelAdapter, ModelMessage } from "@cognidesk/core";
import type { FlightDemoConfig } from "../server/config.js";
import { buildFlightKnowledgeIndex } from "../server/knowledge-index.js";

export const testConfig: FlightDemoConfig = {
  models: {
    provider: "openai",
    apiKeyEnv: "OPENAI_API_KEY",
    roles: {
      response: "gpt-5.5",
      compaction: "gpt-5.5",
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
      dimensions: 6,
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
        content: "Online check-in opens 24 hours before departure.",
      },
      {
        id: "test-baggage",
        title: "Baggage",
        category: "baggage",
        content: "Economy tickets include one cabin bag.",
      },
    ],
    embeddingModel: models.journeyEmbedding,
    generatedAt: "2026-05-26T00:00:00.000Z",
  });
}

function createTestMatcher(messages: ModelMessage[]) {
  const prompt = messages.map((message) => message.content).join("\n").toLowerCase();
  const latestUser = prompt.match(/latest user message:\s*([^\n]+)/)?.[1] ?? prompt;
  if (prompt.includes("state transition candidates")) {
    const candidates = [];
    if (latestUser.match(/\bcd-[a-z0-9-]+-\d{4}\b/i) || latestUser.includes("booking")) {
      candidates.push({ id: "transition_1", confidence: 0.95, reason: "Booking reference is present." });
    } else if (latestUser.match(/\bcl\d{3}\b/i)) {
      candidates.push({ id: "transition_2", confidence: 0.95, reason: "Flight number is present." });
    }
    const structured = { candidates };
    return { text: JSON.stringify(structured), structured };
  }
  const candidates = [];
  const statusIntent = latestUser.includes("status of booking") || latestUser.includes("check in") || /\bcl\d{3}\b/.test(latestUser);
  if (prompt.includes("ticket-status") && (statusIntent || latestUser.includes("status"))) {
    candidates.push({ journeyId: "ticket-status", confidence: 0.9, reason: "Status request." });
  }
  if (prompt.includes("book-flight") && !statusIntent && (latestUser.includes("find flights") || /\bbook\b/.test(latestUser) || latestUser.includes("ticket to"))) {
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
  const route = lower.match(/from\s+([a-z\s]+?)\s+to\s+([a-z\s]+?)(?:\s+today|\s+tomorrow|\.|$)/i);
  const toOnly = lower.match(/(?:to|for)\s+(vienna|berlin|paris)/i);
  if (wants("origin") && route?.[1]) values.origin = titleCase(route[1].trim());
  if (wants("destination") && route?.[2]) values.destination = titleCase(route[2].trim());
  if (wants("destination") && !values.destination && toOnly?.[1]) values.destination = titleCase(toOnly[1]);
  if (wants("departureDate")) {
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
  const structured = { values };
  return { text: JSON.stringify(structured), structured };
}

function createTestCitationSegments(messages: ModelMessage[]) {
  const user = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const answer = user.split("Assistant answer:\n").at(-1)?.trim() ?? "";
  const knowledgeIds = [...user.matchAll(/^\[([^\]]+)\]/gm)].map((match) => match[1]).filter((id): id is string => Boolean(id));
  const structured = {
    segments: [{
      text: answer,
      knowledgeIds: knowledgeIds.slice(0, answer.includes("Source:") ? 1 : 0),
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
  const user = [...messages].reverse().find((message) => message.role === "user")?.content.toLowerCase() ?? "";
  if (user.includes("book") || user.includes("ticket to") || user.includes("flight to")) {
    return "I can help book a mocked flight. Tell me the origin, destination, travel date, and passenger name. For example, Vienna to Berlin tomorrow for Alex Morgan.";
  }
  if (user.includes("status") || user.includes("check") || user.includes("cl")) {
    return "Your mocked ticket is confirmed. Check-in opens 24 hours before departure. Source: test-checkin.";
  }
  if (user.includes("bag")) {
    return "Economy tickets include one cabin bag. Source: test-baggage.";
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
