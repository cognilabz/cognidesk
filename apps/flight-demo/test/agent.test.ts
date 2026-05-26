import { describe, expect, it } from "vitest";
import { createRuntime } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage-sqlite";
import { createFlightDemoRuntimeParts } from "../server/flight-agent.js";
import { createTestKnowledgeIndex, createTestModelSet, testConfig } from "./fixtures.js";

describe("flight demo agent", () => {
  it("handles a booking search turn without runtime errors", async () => {
    const models = createTestModelSet();
    const knowledgeIndex = await createTestKnowledgeIndex(models);
    const { agent, journeyIndex } = await createFlightDemoRuntimeParts({
      config: testConfig,
      models,
      knowledgeIndex,
    });
    const runtime = createRuntime({
      storage: createSqliteStorage({ filename: ":memory:" }),
      agent,
      models,
      journeyIndex,
      topKJourneys: 3,
    });
    await runtime.initialize();
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin tomorrow.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.activeJourneyId).toBe("book-flight");
    expect(events.find((event) => event.type === "error")).toBeUndefined();
    expect(result.snapshot.journeyContext).toMatchObject({
      origin: "Vienna",
      destination: "Berlin",
      departureDate: "2026-05-26",
    });
  });
});
