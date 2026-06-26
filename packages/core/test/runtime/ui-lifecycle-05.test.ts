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
  RuntimeEvent,
  RuntimeEventInput,
  RuntimeSnapshot,
  StorageAdapter,
} from "../../src/index.js";

import { AbortError, RecordingStorage, createModels, deferred, vectorForMatcherTest } from "./fixtures.js";

describe("runtime UI and lifecycle events 05", () => {
  it("closes the conversation when the confirmed built-in end tool runs", async () => {
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const resolution = agentBuilder.stateMachineJourney("resolved", {
      condition: "Customer says the support case is resolved",
      context: z.object({}),
    });
    const close = resolution.state("close").runTool(endConversationTool, {
      confirm: { message: "End conversation" },
      input: () => ({ reason: "Resolved by customer" }),
    });
    resolution.initial(close);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "This is resolved, thanks.",
    });

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm:resolved:close:cognidesk.endConversation",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });

    const snapshot = await runtime.getSnapshot(conversation.id);
    const events = await runtime.listEvents(conversation.id);
    expect(snapshot?.lifecycle).toBe("closed");
    expect(events.map((event) => event.type)).toContain("conversation.closed");
    expect(events.at(-1)?.data).toEqual({ reason: "Resolved by customer" });
    await expect(runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "One more thing.",
    })).rejects.toThrow("is 'closed'");
  });
});
