import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  buildJourneyIndex,
  createAgent,
  selectJourneyCandidates,
  validateJourneyIndex,
} from "../src/index.js";
import type { ModelAdapter } from "../src/index.js";

const embeddingModel: ModelAdapter = {
  provider: "test",
  model: "keyword-embedding",
  generateText: async () => ({ text: "" }),
  embed: async ({ text }) => ({
    embedding: vectorFor(text),
    model: "keyword-embedding",
    dimensions: 4,
  }),
};

const context = z.object({
  bookingReference: z.string().optional(),
});

describe("journey index", () => {
  it("builds a generated embedding index and validates definition freshness", async () => {
    const agent = createRoutingAgent("ticket status");
    const compiled = agent.compile();

    const index = await buildJourneyIndex(compiled, {
      embeddingModel,
      generatedAt: "2026-05-25T00:00:00.000Z",
    });

    expect(index.entries).toHaveLength(4);
    expect(validateJourneyIndex(compiled, index).ok).toBe(true);

    const changed = createRoutingAgent("refund status").compile();
    const validation = validateJourneyIndex(changed, index);
    expect(validation.ok).toBe(false);
    expect(validation.errors.join("\n")).toContain("hash changed");
  });

  it("selects embedding candidates while forcing always and matcher journeys into the candidate set", async () => {
    const compiled = createRoutingAgent("ticket status").compile();
    const index = await buildJourneyIndex(compiled, { embeddingModel });

    const candidates = await selectJourneyCandidates({
      agent: compiled,
      index,
      embeddingModel,
      message: "Can you check the status of ticket ABC123?",
      app: {},
      conversation: { id: "conversation_1" },
      turn: { vip: true },
      topK: 1,
    });

    expect(candidates.map((candidate) => candidate.journeyId)).toEqual([
      "handoff",
      "vip-review",
      "journey_primary",
    ]);
    expect(candidates.map((candidate) => candidate.reason)).toEqual([
      "always",
      "matcher",
      "embedding",
    ]);
  });

  it("keeps the active journey in the candidate set outside topK", async () => {
    const compiled = createRoutingAgent("ticket status").compile();
    const index = await buildJourneyIndex(compiled, { embeddingModel });

    const candidates = await selectJourneyCandidates({
      agent: compiled,
      index,
      embeddingModel,
      message: "Can you check the status of ticket ABC123?",
      app: {},
      conversation: { id: "conversation_1" },
      turn: {},
      activeJourneyId: "vip-review",
      topK: 1,
    });

    expect(candidates.map((candidate) => candidate.journeyId)).toEqual([
      "handoff",
      "journey_primary",
      "vip-review",
    ]);
  });

  it("applies includeWhen as a hard candidate filter", async () => {
    const agent = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const status = agent.stateMachineJourney("journey_primary", {
      condition: "Customer wants ticket status information",
      context,
    });
    status.initial(status.state("state_primary"));
    agent.delegationJourney("internal-review", {
      condition: "Internal review is required",
      always: true,
      includeWhen: ({ app, conversation, turn }) => (
        (app as { internal?: boolean }).internal === true
        && (conversation as { channel?: string }).channel === "agent-console"
        && (turn as { allowInternal?: boolean }).allowInternal === true
      ),
      specialist: {
        goal: "Review internal support notes.",
      },
    });
    const compiled = agent.compile();
    const index = await buildJourneyIndex(compiled, { embeddingModel });

    const candidates = await selectJourneyCandidates({
      agent: compiled,
      index,
      embeddingModel,
      message: "Can you check ticket ABC123?",
      app: { internal: false },
      conversation: { id: "conversation_1", channel: "agent-console" },
      turn: { allowInternal: true },
      activeJourneyId: "internal-review",
      topK: 2,
    });

    expect(candidates.map((candidate) => candidate.journeyId)).toEqual(["journey_primary"]);

    const allowed = await selectJourneyCandidates({
      agent: compiled,
      index,
      embeddingModel,
      message: "Can you check ticket ABC123?",
      app: { internal: true },
      conversation: { id: "conversation_1", channel: "agent-console" },
      turn: { allowInternal: true },
      topK: 1,
    });

    expect(allowed.map((candidate) => candidate.journeyId)).toEqual([
      "internal-review",
      "journey_primary",
    ]);
  });

  it("rejects incompatible runtime embedding models", async () => {
    const compiled = createRoutingAgent("ticket status").compile();
    const index = await buildJourneyIndex(compiled, { embeddingModel });
    const otherModel: ModelAdapter = {
      ...embeddingModel,
      provider: "other",
      model: "other-embedding",
    };

    expect(validateJourneyIndex(compiled, index, { embeddingModel: otherModel }).errors).toEqual([
      "Index embedding provider 'test' does not match 'other'.",
      "Index embedding model 'keyword-embedding' does not match 'other-embedding'.",
    ]);
    await expect(selectJourneyCandidates({
      agent: compiled,
      index,
      embeddingModel: otherModel,
      message: "Can you check ticket ABC123?",
      app: {},
      conversation: { id: "conversation_1" },
      turn: {},
    })).rejects.toThrow("embedding provider");
  });

  it("rejects embedding dimension mismatches", async () => {
    const compiled = createRoutingAgent("ticket status").compile();
    const index = await buildJourneyIndex(compiled, { embeddingModel });
    const wrongDimensions: ModelAdapter = {
      ...embeddingModel,
      embed: async () => ({
        embedding: [1, 0],
        model: "keyword-embedding",
        dimensions: 2,
      }),
    };

    await expect(selectJourneyCandidates({
      agent: compiled,
      index,
      embeddingModel: wrongDimensions,
      message: "Can you check ticket ABC123?",
      app: {},
      conversation: { id: "conversation_1" },
      turn: {},
    })).rejects.toThrow("embedding dimensions");
  });
});

function createRoutingAgent(statusCondition: string) {
  const agent = createAgent("agent_primary", {
    instructions: "Help customers with flights.",
  });

  const booking = agent.stateMachineJourney("book-flight", {
    condition: "Customer wants to book a flight",
    examples: ["Book me a ticket to Berlin"],
    tags: ["booking"],
    context,
  });
  const collect = booking.state("collectDetails");
  booking.initial(collect);

  const status = agent.stateMachineJourney("journey_primary", {
    condition: `Customer wants ${statusCondition} information`,
    examples: ["Where is my ticket?"],
    tags: ["status"],
    priority: 10,
    context,
  });
  const identify = status.state("state_primary").collect("bookingReference");
  status.initial(identify);

  agent.delegationJourney("handoff", {
    condition: "A human needs to take over",
    always: true,
    specialist: {
      goal: "Prepare a human handoff.",
    },
  });

  agent.delegationJourney("vip-review", {
    condition: "VIP customer needs special handling",
    matcher: ({ turn }) => (turn as { vip?: boolean }).vip === true,
    specialist: {
      goal: "Review VIP customer context.",
    },
  });

  return agent;
}

function vectorFor(text: string) {
  const lower = text.toLowerCase();
  return [
    lower.includes("book") || lower.includes("booking") ? 1 : 0,
    lower.includes("ticket") || lower.includes("status") ? 1 : 0,
    lower.includes("handoff") || lower.includes("human") ? 1 : 0,
    lower.includes("vip") ? 1 : 0,
  ];
}
