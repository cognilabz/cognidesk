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

describe("runtime tools and actions 02", () => {
  it("executes typed state actions on entry, transition, and exit", async () => {
    const executed: string[] = [];
    const recordAction = action("recordAction", {
      input: z.object({ label: z.string() }),
      run: ({ input }) => {
        executed.push(input.label);
      },
    });
    const agentBuilder = createAgent("agent_primary", { instructions: "Help customers with flights." });
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
    const agentBuilder = createAgent("agent_primary", { instructions: "Help customers with flights." });
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
        if (attempts === 1) {
          const error = new Error("service unavailable") as Error & { status: number };
          error.status = 503;
          throw error;
        }
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
    const agentBuilder = createAgent("agent_primary", { instructions: "Help customers with flights." });
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

  it("blocks consequential model-requested tools until channel policy is configured", async () => {
    let attempts = 0;
    const sendSms = tool("sendSms", {
      description: "Send an SMS to the customer.",
      input: z.object({ body: z.string() }),
      output: z.object({ sent: z.boolean() }),
      sideEffect: true,
      policy: {
        capability: "send",
        externallyVisible: true,
        requiredPolicyIds: ["approval"],
      },
      execute: async () => {
        attempts += 1;
        return { sent: true };
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
              name: "sendSms",
              input: { body: "Your booking changed." },
            }],
          };
        }
        return { text: "I cannot send that until policy is configured." };
      },
    };
    const agentBuilder = createAgent("agent_primary", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(sendSms);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
      channels: [{
        id: "sms",
        channel: "sms",
        enabled: true,
        channelSetIds: [],
        providerPackageIds: [],
        enabledCapabilities: ["receive"],
        flowActivations: [],
        policies: {},
      }],
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {}, channel: "sms" });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Send me the booking change by SMS.",
      channel: "sms",
    });
    const toolEvents = (await runtime.listEvents(conversation.id)).filter((event) => event.type === "tool.completed");

    expect(result.text).toBe("I cannot send that until policy is configured.");
    expect(attempts).toBe(0);
    expect(toolEvents).toHaveLength(1);
    expect(toolEvents[0]).toMatchObject({
      type: "tool.completed",
      data: {
        toolName: "sendSms",
        success: false,
        policyBlock: {
          code: "capability-not-enabled",
        },
      },
    });
  });

  it("allows consequential model-requested tools when channel capability and required policy exist", async () => {
    let attempts = 0;
    const sendSms = tool("sendSms", {
      description: "Send an SMS to the customer.",
      input: z.object({ body: z.string() }),
      output: z.object({ sent: z.boolean() }),
      sideEffect: true,
      policy: {
        capability: "send",
        externallyVisible: true,
        requiredPolicyIds: ["approval"],
      },
      execute: async () => {
        attempts += 1;
        return { sent: true };
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
              name: "sendSms",
              input: { body: "Your booking changed." },
            }],
          };
        }
        return { text: "Sent." };
      },
    };
    const agentBuilder = createAgent("agent_primary", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(sendSms);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
      channels: [{
        id: "sms",
        channel: "sms",
        enabled: true,
        channelSetIds: [],
        providerPackageIds: [],
        enabledCapabilities: ["receive", "send"],
        flowActivations: [],
        policies: {
          approval: { owner: "sdk-user", requiredFor: ["send"] },
        },
      }],
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {}, channel: "sms" });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Send me the booking change by SMS.",
      channel: "sms",
    });
    const toolEvents = (await runtime.listEvents(conversation.id)).filter((event) => event.type === "tool.completed");

    expect(attempts).toBe(1);
    expect(toolEvents.at(-1)).toMatchObject({
      type: "tool.completed",
      data: {
        toolName: "sendSms",
        success: true,
        result: { sent: true },
      },
    });
  });

  it("blocks consequential state-machine tool runs until channel policy is configured", async () => {
    let attempts = 0;
    const updateTicket = tool("updateTicket", {
      description: "Update an external ticket record.",
      input: z.object({ ticketId: z.string() }),
      output: z.object({ updated: z.boolean() }),
      policy: {
        capability: "update-provider-object",
        changesWorkflow: true,
        requiredPolicyIds: ["approval"],
      },
      execute: async () => {
        attempts += 1;
        return { updated: true };
      },
    });
    const agentBuilder = createAgent("agent_primary", { instructions: "Help customers with flights." });
    const journey = agentBuilder.stateMachineJourney("ticket-update", {
      condition: "Customer updates a ticket",
      context: z.object({}),
    });
    const start = journey.state("start").runTool(updateTicket, {
      input: () => ({ ticketId: "INC-42" }),
    });
    const done = journey.final("done");
    journey.initial(start);
    start.transitionTo(done);
    const agent = agentBuilder.compile();
    const models = createModels();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      journeyIndex: await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding }),
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        enabled: true,
        channelSetIds: [],
        providerPackageIds: [],
        enabledCapabilities: ["receive", "update-provider-object"],
        flowActivations: [],
        policies: {},
      }],
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {}, channel: "ticketing" });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Please update my ticket.",
      channel: "ticketing",
    });
    const toolEvents = (await runtime.listEvents(conversation.id)).filter((event) => event.type === "tool.completed");

    expect(attempts).toBe(0);
    expect(toolEvents[0]).toMatchObject({
      type: "tool.completed",
      data: {
        toolName: "updateTicket",
        success: false,
        policyBlock: {
          code: "missing-policy",
        },
      },
    });
  });
});
