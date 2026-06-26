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

describe("runtime turn pipeline 03", () => {
  it("emits intermediate messages when telemetry is disabled", async () => {
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
      telemetry: { enabled: false },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await expect(runtime.emitIntermediateMessage({
      conversationId: conversation.id,
      text: "Still working.",
    })).resolves.toMatchObject({
      events: [
        { type: "message.started" },
        { type: "message.completed" },
      ],
    });
  });

  it("includes the full conversation transcript in response model calls", async () => {
    const calls: TextGenerationInput[] = [];
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        calls.push(input);
        return { text: `Answer ${calls.length}` };
      },
    };
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "First question.",
    });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Second question.",
    });

    expect(calls[1]?.messages.filter((message) => message.role !== "system")).toEqual([
      { role: "user", content: "First question." },
      { role: "assistant", content: "Answer 1" },
      { role: "user", content: "Second question." },
    ]);
  });

  it("includes compacted conversation memory in response model calls", async () => {
    let systemPrompt = "";
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        systemPrompt = input.messages.find((message) => message.role === "system")?.content ?? "";
        return { text: "Ready." };
      },
    };
    const storage = new RecordingStorage();
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage,
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await storage.saveSnapshot({
      conversationId: conversation.id,
      lifecycle: "active",
      activeStateIds: [],
      compactionSummary: {
        summary: "Customer already shared booking ABC123.",
        stableFacts: ["Booking ABC123"],
      },
      journeySummaries: [{
        journeyId: "journey_primary",
        kind: "stateMachine",
        completedAt: "2026-05-26T00:00:00.000Z",
        stateId: "done",
        summary: "Ticket status journey completed with booking ABC123.",
      }],
      updatedAt: new Date().toISOString(),
    });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you continue?",
    });

    expect(systemPrompt).toContain("Conversation memory:");
    expect(systemPrompt).toContain("Customer already shared booking ABC123.");
    expect(systemPrompt).toContain("Completed journey summaries:");
    expect(systemPrompt).toContain("Ticket status journey completed with booking ABC123.");
  });

  it("interrupts an active generation when a new user message arrives by default", async () => {
    const firstResponseStarted = deferred<void>();
    let responseCalls = 0;
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        if (input.role !== "response") return { text: "{}" };
        responseCalls += 1;
        if (responseCalls === 1) {
          firstResponseStarted.resolve();
          await new Promise((_resolve, reject) => {
            input.signal?.addEventListener("abort", () => reject(new AbortError()), { once: true });
          });
        }
        return { text: "Second answer." };
      },
    };
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const first = runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "First question.",
    });
    await firstResponseStarted.promise;
    const second = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Second question.",
    });
    const firstResult = await first;
    const events = await runtime.listEvents(conversation.id);

    expect(firstResult.text).toBe("");
    expect(firstResult.events.map((event) => event.type)).toContain("message.aborted");
    expect(second.events[0]).toMatchObject({
      type: "message.aborted",
      data: { reason: "interrupted_by_new_message" },
    });
    expect(events.map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "message.aborted",
      "message.started",
      "message.completed",
      "message.started",
      "message.completed",
    ]);
  });

  it("interrupts an active generation even when the model ignores the abort signal", async () => {
    const firstResponseStarted = deferred<void>();
    let responseCalls = 0;
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        if (input.role !== "response") return { text: "{}" };
        responseCalls += 1;
        if (responseCalls === 1) {
          firstResponseStarted.resolve();
          return new Promise<never>(() => {});
        }
        return { text: "Second answer." };
      },
    };
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const first = runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "First question.",
    });
    await firstResponseStarted.promise;
    const second = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Second question.",
    });
    const firstResult = await first;

    expect(firstResult.text).toBe("");
    expect(second.text).toBe("Second answer.");
    expect(firstResult.events.map((event) => event.type)).toContain("message.aborted");
  });

  it("aborts parent-cancelled turns even when the model ignores the abort signal", async () => {
    const firstResponseStarted = deferred<void>();
    let responseCalls = 0;
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        if (input.role !== "response") return { text: "{}" };
        responseCalls += 1;
        if (responseCalls === 1) {
          firstResponseStarted.resolve();
          return new Promise<never>(() => {});
        }
        return { text: "Recovered." };
      },
    };
    const agent = createAgent("agent_primary", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    const controller = new AbortController();

    const first = runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "First question.",
      signal: controller.signal,
    });
    await firstResponseStarted.promise;
    controller.abort();
    await expect(first).rejects.toMatchObject({ name: "AbortError" });
    const second = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Second question.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(second.text).toBe("Recovered.");
    expect(events.map((event) => event.type)).not.toContain("message.aborted");
  });

  it("can opt out of interrupting active generations at the agent level", async () => {
    const firstResponseStarted = deferred<void>();
    const releaseFirstResponse = deferred<void>();
    let firstSignal: AbortSignal | undefined;
    let responseCalls = 0;
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        if (input.role !== "response") return { text: "{}" };
        responseCalls += 1;
        if (responseCalls === 1) {
          firstSignal = input.signal;
          firstResponseStarted.resolve();
          await releaseFirstResponse.promise;
          return { text: "First answer." };
        }
        return { text: "Second answer." };
      },
    };
    const agent = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
      behavior: { interruptOnNewMessage: false },
    }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const first = runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "First question.",
    });
    await firstResponseStarted.promise;
    const second = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Second question.",
    });
    releaseFirstResponse.resolve();
    const firstResult = await first;
    const events = await runtime.listEvents(conversation.id);

    expect(firstSignal?.aborted).toBe(false);
    expect(firstResult.text).toBe("First answer.");
    expect(second.text).toBe("Second answer.");
    expect(events.map((event) => event.type)).not.toContain("message.aborted");
  });
});
