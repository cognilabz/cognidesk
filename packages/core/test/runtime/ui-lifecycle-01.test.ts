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

describe("runtime UI and lifecycle events 01", () => {
  it("stores submitted widget output as a conversation event", async () => {
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const event = await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "prompt_1",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });

    expect(event.type).toBe("ui.submitted");
    expect((await runtime.listEvents(conversation.id)).at(-1)?.data).toEqual({
      promptId: "prompt_1",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });
  });

  it("replays runtime events into inspectable messages and open prompts", async () => {
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.emit({
      conversationId: conversation.id,
      type: "message.started",
      data: { role: "user" },
    });
    await runtime.emit({
      conversationId: conversation.id,
      type: "message.completed",
      data: { text: "Check booking ABC123." },
    });
    await runtime.emit({
      conversationId: conversation.id,
      type: "ui.prompted",
      data: {
        promptId: "prompt_1",
        widgetKind: "confirmation",
        input: { title: "Confirm", message: "Proceed?" },
      },
    });
    await runtime.emit({
      conversationId: conversation.id,
      type: "message.started",
      data: { role: "assistant" },
    });
    await runtime.emit({
      conversationId: conversation.id,
      type: "message.aborted",
      data: { reason: "interrupted_by_new_message", partialText: "Checking" },
    });

    const replay = await runtime.replayConversation({ conversationId: conversation.id });

    expect(replay.conversation.id).toBe(conversation.id);
    expect(replay.messages).toEqual([
      expect.objectContaining({
        offset: 3,
        role: "user",
        text: "Check booking ABC123.",
        intermediate: false,
        aborted: false,
      }),
      expect.objectContaining({
        offset: 6,
        role: "assistant",
        text: "Checking",
        intermediate: false,
        aborted: true,
        reason: "interrupted_by_new_message",
      }),
    ]);
    expect(replay.openPrompts).toEqual([{
      promptId: "prompt_1",
      offset: 4,
      widgetKind: "confirmation",
      input: { title: "Confirm", message: "Proceed?" },
    }]);
    expect(replay.events.map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "ui.prompted",
      "message.started",
      "message.aborted",
    ]);
  });

  it("emits programmatic intermediate assistant messages", async () => {
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.emitIntermediateMessage({
      conversationId: conversation.id,
      text: "I am checking that now.",
      traceId: "trace_1",
    });

    expect(result.events.map((event) => event.type)).toEqual(["message.started", "message.completed"]);
    expect(result.events[0]?.traceId).toBe("trace_1");
    expect(result.events[1]?.data).toEqual({
      text: "I am checking that now.",
      intermediate: true,
    });

    await runtime.closeConversation(conversation.id, "done");
    await expect(runtime.emitIntermediateMessage({
      conversationId: conversation.id,
      text: "This should not be emitted.",
    })).rejects.toThrow("is 'closed'");
  });

  it("generates constrained wait-time preambles as intermediate messages", async () => {
    let preamblePrompt = "";
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({
        response: {
          provider: "test",
          model: "response",
          generateText: async ({ messages }) => {
            preamblePrompt = messages.map((message) => message.content).join("\n");
            return { text: "I am checking the latest mocked booking details now for you." };
          },
        },
      }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.emitIntermediateMessage({
      conversationId: conversation.id,
      text: "Programmatic progress should stay out of transcript.",
    });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you review booking ABC123?",
    });

    const result = await runtime.emitGeneratedPreamble({
      conversationId: conversation.id,
      purpose: "checking booking ABC123",
      maxWords: 7,
      traceId: "trace_preamble",
    });

    expect(result.text).toBe("I am checking the latest mocked booking");
    expect(preamblePrompt).toContain("Write one brief wait-time preamble");
    expect(preamblePrompt).toContain("Current work: checking booking ABC123");
    expect(preamblePrompt).toContain("user: Can you review booking ABC123?");
    expect(preamblePrompt).not.toContain("Programmatic progress should stay out of transcript.");
    expect(result.events.map((event) => event.type)).toEqual(["message.started", "message.completed"]);
    expect(result.events[1]).toMatchObject({
      traceId: "trace_preamble",
      data: {
        text: "I am checking the latest mocked booking",
        intermediate: true,
      },
    });
  });
});
