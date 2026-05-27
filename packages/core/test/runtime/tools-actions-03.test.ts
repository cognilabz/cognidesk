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

describe("runtime tools and actions 03", () => {
  it("does not retry side-effect tools without an idempotency key", async () => {
    let attempts = 0;
    const chargeCard = tool("chargeCard", {
      input: z.object({ amount: z.number() }),
      output: z.object({ charged: z.boolean() }),
      sideEffect: true,
      execute: async () => {
        attempts += 1;
        throw new Error("processor unavailable");
      },
    });
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        if (!input.messages.some((message) => message.role === "tool")) {
          return {
            text: "",
            toolCalls: [{
              id: "call_charge",
              name: "chargeCard",
              input: { amount: 10 },
            }],
          };
        }
        return { text: "Could not charge." };
      },
    };
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(chargeCard);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Charge me.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(attempts).toBe(1);
    expect(events.filter((event) => (
      event.type === "message.completed" && event.data.intermediate
    ))).toHaveLength(0);
    expect(events.filter((event) => event.type === "tool.completed").at(0)).toMatchObject({
      data: {
        success: false,
        error: "processor unavailable",
      },
    });
  });

  it("applies built-in lifecycle tools requested by the response model", async () => {
    const response = {
      provider: "test",
      model: "response",
      generateText: async () => ({
        text: "",
        toolCalls: [{
          id: "call_handoff",
          name: "cognidesk.handoff",
          input: {
            reason: "customer requested a person",
            summary: "Customer wants human support.",
          },
        }],
      }),
    };
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(handoffTool);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need a person.",
    });

    expect(result.text).toBe("");
    expect(result.conversation.lifecycle).toBe("handoff");
    expect(result.events.map((event) => event.type)).toEqual([
      "message.started",
      "message.completed",
      "tool.started",
      "tool.completed",
      "handoff.requested",
    ]);
  });

  it("can disable citation post-processing when knowledge is used", async () => {
    const knowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "faq-ticket-status",
          content: "Ticket status is available with the booking reference.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.knowledge.add(knowledge);
    const agent = agentBuilder.compile();
    const models = createModels({
      citationPostProcessing: {
        provider: "test",
        model: "citation",
        generateText: async () => {
          throw new Error("Citation post-processing should be disabled.");
        },
      },
    });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      postProcessing: { citations: false },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "How can I check a ticket?",
    });

    const events = await runtime.listEvents(conversation.id);
    expect(events.find((event) => event.type === "error")).toBeUndefined();
    expect(events.at(-1)?.data).toEqual({ text: "Use faq-ticket-status for the current ticket status." });
  });

  it("can disable citation post-processing on the agent definition", async () => {
    let citationCalls = 0;
    const knowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "faq-ticket-status",
          content: "Ticket status is available with the booking reference.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
      postProcessing: { citations: false },
    });
    agentBuilder.knowledge.add(knowledge);
    const agent = agentBuilder.compile();
    const models = createModels({
      citationPostProcessing: {
        provider: "test",
        model: "citation",
        generateText: async () => {
          citationCalls += 1;
          return { text: JSON.stringify({ segments: [] }), structured: { segments: [] } };
        },
      },
    });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "How can I check a ticket?",
    });

    const events = await runtime.listEvents(conversation.id);
    expect(citationCalls).toBe(0);
    expect(events.find((event) => event.type === "error")).toBeUndefined();
    expect(events.at(-1)?.data).toEqual({ text: "Use faq-ticket-status for the current ticket status." });
  });
});
