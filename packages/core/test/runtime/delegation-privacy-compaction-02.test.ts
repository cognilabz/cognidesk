import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  action,
  buildJourneyIndex,
  createAgent,
  createRuntime,
  customRuntimeEvent,
  endConversationTool,
  handoffTool,
  journeyContextViewerTool,
  knowledgeSource,
  textInputWidget,
  tool,
  widgetPrompt,
} from "../../src/index.js";
import type {
  AgentModelSet,
  ConversationLifecycle,
  ConversationRecord,
  CreateConversationInput,
  ListEventsOptions,
  TextGenerationInput,
  TraceEvent,
  RuntimeEvent,
  RuntimeEventInput,
  RuntimeSnapshot,
  StorageAdapter,
} from "../../src/index.js";

import { AbortError, RecordingStorage, createModels, deferred, vectorForMatcherTest } from "./fixtures.js";

describe("runtime delegation, privacy, and compaction 02", () => {
  it("can compact before processing the next user turn", async () => {
    const response = {
      provider: "test",
      model: "response",
      generateText: async ({ role }: { role: string }) => {
        if (role === "compaction") {
          const structured = {
            summary: "Previous conversation exists.",
            stableFacts: ["Conversation was created"],
            openQuestions: [],
            activeCommitments: [],
          };
          return { text: JSON.stringify(structured), structured };
        }
        return { text: "Ready after compaction." };
      },
    };
    const embedding = {
      provider: "test",
      model: "embedding",
      generateText: response.generateText,
      embed: async () => ({ embedding: [0], model: "embedding", dimensions: 1 }),
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: {
        response,
        matcher: response,
        extraction: response,
        citationPostProcessing: response,
        journeyEmbedding: embedding,
        compaction: response,
      },
      compaction: {
        beforeTurn: true,
        minEvents: 1,
        schemaVersion: "test.compaction.v1",
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Hello.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.events.slice(0, 2).map((event) => event.type)).toEqual([
      "conversation.compaction.started",
      "conversation.compaction.completed",
    ]);
    expect(events.map((event) => event.type).slice(1, 5)).toEqual([
      "conversation.compaction.started",
      "conversation.compaction.completed",
      "message.started",
      "message.completed",
    ]);
    expect(await runtime.getSnapshot(conversation.id)).toMatchObject({
      compactionSummary: {
        summary: "Previous conversation exists.",
        stableFacts: ["Conversation was created"],
      },
    });
  });
});
