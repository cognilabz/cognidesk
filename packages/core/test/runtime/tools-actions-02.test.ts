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

describe("runtime tools and actions 02", () => {
  it("executes typed state actions on entry, transition, and exit", async () => {
    const executed: string[] = [];
    const recordAction = action("recordAction", {
      input: z.object({ label: z.string() }),
      run: ({ input }) => {
        executed.push(input.label);
      },
    });
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    const journey = agentBuilder.stateMachineJourney("action-test", {
      condition: "Customer triggers a deterministic action test",
      context: z.object({}),
    });
    const start = journey.state("start")
      .useAction(recordAction, {
        type: "entry",
        input: () => ({ label: "entry:start" }),
      })
      .useAction(recordAction, {
        type: "transition",
        input: () => ({ label: "transition:start" }),
      })
      .useAction(recordAction, {
        type: "exit",
        input: () => ({ label: "exit:start" }),
      });
    const done = journey.final("done")
      .useAction(recordAction, {
        type: "entry",
        input: () => ({ label: "entry:done" }),
      });
    journey.initial(start);
    start.transitionTo(done);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      journeyIndex,
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Run the deterministic action test.",
    });

    expect(executed).toEqual([
      "entry:start",
      "transition:start",
      "exit:start",
      "entry:done",
    ]);
    const actionEvents = (await runtime.listEvents(conversation.id)).filter((event) => event.type.startsWith("action."));
    expect(actionEvents.map((event) => event.type)).toEqual([
      "action.started",
      "action.completed",
      "action.started",
      "action.completed",
      "action.started",
      "action.completed",
      "action.started",
      "action.completed",
    ]);
    expect(actionEvents.filter((event) => event.type === "action.completed").map((event) => event.data)).toEqual([
      { actionName: "recordAction", success: true, journeyId: "action-test", stateId: "start" },
      { actionName: "recordAction", success: true, journeyId: "action-test", stateId: "start" },
      { actionName: "recordAction", success: true, journeyId: "action-test", stateId: "start" },
      { actionName: "recordAction", success: true, journeyId: "action-test", stateId: "done" },
    ]);
  });

  it("retries retryable state actions and emits an intermediate notice", async () => {
    let attempts = 0;
    const retryAction = action("retryAction", {
      input: z.object({}),
      retry: { maxAttempts: 2, notice: "Retrying deterministic action." },
      run: () => {
        attempts += 1;
        if (attempts === 1) throw new Error("temporary action outage");
      },
    });
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    const journey = agentBuilder.stateMachineJourney("action-test", {
      condition: "Customer triggers a deterministic action retry",
      context: z.object({}),
    });
    const start = journey.state("start").useAction(retryAction, "transition");
    const done = journey.final("done");
    journey.initial(start);
    start.transitionTo(done);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      journeyIndex,
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Run the deterministic action retry.",
    });

    const events = await runtime.listEvents(conversation.id);
    expect(attempts).toBe(2);
    expect(events).toContainEqual(expect.objectContaining({
      type: "message.completed",
      data: expect.objectContaining({
        text: "Retrying deterministic action.",
        intermediate: true,
      }),
    }));
    expect(events).toContainEqual(expect.objectContaining({
      type: "action.completed",
      data: {
        actionName: "retryAction",
        success: true,
        journeyId: "action-test",
        stateId: "start",
      },
    }));
    expect(events.map((event) => event.type)).not.toContain("error");
  });

  it("retries retryable model-requested tools and emits an intermediate notice", async () => {
    let attempts = 0;
    const getTicketStatus = tool("getTicketStatus", {
      description: "Get mocked ticket status.",
      input: z.object({ bookingReference: z.string() }),
      output: z.object({ status: z.string() }),
      execute: async ({ input }) => {
        attempts += 1;
        if (attempts === 1) throw new Error("temporary outage");
        return { status: `${input.bookingReference}:confirmed` };
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
              id: "call_1",
              name: "getTicketStatus",
              input: { bookingReference: "ABC123" },
            }],
          };
        }
        return { text: "Recovered." };
      },
    };
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(getTicketStatus);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "What is ticket ABC123 doing?",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(attempts).toBe(2);
    expect(events.map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "tool.started",
      "message.started",
      "message.completed",
      "tool.completed",
      "message.started",
      "message.completed",
    ]);
    expect(events[5]).toMatchObject({
      type: "message.completed",
      data: { intermediate: true },
    });
  });
});
