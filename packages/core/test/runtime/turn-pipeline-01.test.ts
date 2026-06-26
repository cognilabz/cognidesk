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

describe("runtime turn pipeline 01", () => {
  it("routes a user message, retrieves knowledge, calls the response model, and stores a snapshot", async () => {
    const knowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "faq-journey_primary",
          title: "Ticket status",
          content: "Ticket status is available with the booking reference.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.knowledge.add(knowledge);
    const status = agentBuilder.stateMachineJourney("journey_primary", {
      condition: "Customer wants ticket status information",
      context: z.object({ bookingReference: z.string().optional() }),
    });
    const identify = status.state("state_primary").collect("bookingReference");
    status.initial(identify);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage, agent, models, journeyIndex });

    const conversation = await runtime.createConversation({
      agentId: agent.id,
      context: {},
    });
    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you check ticket ABC123?",
    });

    expect(result.activeJourneyId).toBe("journey_primary");
    expect(result.text).toContain("faq-journey_primary");
    expect(result.snapshot.activeStateIds).toEqual(["state_primary"]);
    const events = await runtime.listEvents(conversation.id);
    expect(events.map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "journey.candidates.retrieved",
      "journey.matched",
      "journey.activated",
      "journey.state.entered",
      "journey.extraction.proposed",
      "journey.extraction.accepted",
      "knowledge.retrieved",
      "message.started",
      "message.completed",
    ]);
    expect(result.snapshot.journeyContext).toEqual({ bookingReference: "ABC123" });
    expect(events.at(-1)?.data).toMatchObject({
      segments: [{
        id: "segment_1",
        text: "Use faq-journey_primary for the current ticket status.",
        references: [{
          type: "knowledge",
          id: "faq-journey_primary",
          sourceName: "flight-faq",
          title: "Ticket status",
          metadata: { source: "faq" },
        }],
      }],
    });
  });

  it("persists channel context, renders channel-aware instructions, and emits channel events", async () => {
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const emailJourney = agentBuilder.stateMachineJourney("email-support", {
      condition: "Customer needs email support",
      context: z.object({}),
    });
    emailJourney.initial(emailJourney.state("respond"));
    const agent = agentBuilder.compile();
    let capturedSystem = "";
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async (input: TextGenerationInput) => {
          capturedSystem = input.messages.find((message) => message.role === "system")?.content ?? "";
          return { text: "Thanks for emailing support." };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage, agent, models, journeyIndex });

    const conversation = await runtime.createConversation({
      agentId: agent.id,
      context: {},
      channel: {
        channelId: "email.gmail",
        kind: "email",
        provider: "gmail",
        externalThreadId: "thread_123",
        capabilities: {
          attachments: true,
        },
      },
    });
    const storedConversation = await storage.getConversation(conversation.id);
    expect(storedConversation?.channel).toMatchObject({
      kind: "email",
      provider: "gmail",
      externalThreadId: "thread_123",
    });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Please answer my email.",
    });

    expect(capturedSystem).toContain("Current support channel: email.");
    expect(capturedSystem).toContain("draft-first");
    const events = await runtime.listEvents(conversation.id);
    expect(events.map((event) => event.type)).toEqual(expect.arrayContaining([
      "channel.received",
      "channel.sent",
    ]));
    expect(events.find((event) => event.type === "channel.received")?.data).toMatchObject({
      channel: {
        kind: "email",
        provider: "gmail",
        externalThreadId: "thread_123",
      },
      text: "Please answer my email.",
    });
    expect(events.find((event) => event.type === "channel.sent")?.data).toMatchObject({
      channel: {
        kind: "email",
        provider: "gmail",
      },
      text: "Thanks for emailing support.",
    });
  });

  it("renders model prompt profiles with task payloads before model calls", async () => {
    const agent = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    }).compile();
    let capturedSystem = "";
    let capturedPromptTask = "";
    let capturedSelectedJourneyId: unknown;
    const response = {
      provider: "test",
      model: "profiled-response",
      promptProfile: {
        id: "model-profile",
        logicalModelSlug: "profiled-response",
        renderInstruction: (input: { promptTask: string; payload: Record<string, unknown> }) => {
          capturedPromptTask = input.promptTask;
          capturedSelectedJourneyId = input.payload.selectedJourneyId;
          return `model profile for ${input.promptTask}`;
        },
      },
      generateText: async (input: TextGenerationInput) => {
        capturedSystem = input.messages
          .filter((message) => message.role === "system")
          .map((message) => message.content)
          .join("\n");
        return { text: "Profiled answer." };
      },
    };
    const models = createModels({ response });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Hello",
    });

    expect(capturedSystem).toContain("model profile for response");
    expect(capturedSystem).toContain("Help customers with flights.");
    expect(capturedPromptTask).toBe("response");
    expect(capturedSelectedJourneyId).toBeNull();
  });

  it("can emit synthetic assistant text deltas for streaming clients", async () => {
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({
        response: {
          provider: "test",
          model: "response",
          generateText: async () => ({ text: "Ticket ABC123 is confirmed." }),
        },
      }),
      streaming: { syntheticDeltas: true },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Check ticket ABC123.",
    });
    const intermediate = await runtime.emitIntermediateMessage({
      conversationId: conversation.id,
      text: "Still checking.",
    });

    expect(result.events.map((event) => event.type)).toEqual([
      "message.started",
      "message.completed",
      "message.started",
      "message.delta",
      "message.completed",
    ]);
    expect(result.events.find((event) => event.type === "message.delta")?.data).toEqual({
      textDelta: "Ticket ABC123 is confirmed.",
    });
    expect(intermediate.events.map((event) => event.type)).toEqual([
      "message.started",
      "message.delta",
      "message.completed",
    ]);
  });

  it("forwards model text deltas before assistant completion when the adapter streams", async () => {
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({
        response: {
          provider: "test",
          model: "response",
          generateText: async (input) => {
            await input.onTextDelta?.("Ticket ");
            await input.onTextDelta?.("confirmed.");
            return { text: "Ticket confirmed." };
          },
        },
      }),
      streaming: { syntheticDeltas: true },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Check ticket ABC123.",
    });
    const assistantStartedIndex = result.events.findIndex((event) => event.type === "message.started" && event.data.role === "assistant");
    const completedIndex = result.events.findIndex((event) => event.type === "message.completed" && event.data.text === "Ticket confirmed.");
    const deltas = result.events.filter((event) => event.type === "message.delta");

    expect(deltas.map((event) => event.data.textDelta)).toEqual(["Ticket ", "confirmed."]);
    expect(assistantStartedIndex).toBeGreaterThan(-1);
    expect(completedIndex).toBeGreaterThan(assistantStartedIndex);
    expect(result.events.findIndex((event) => event === deltas[0])).toBeGreaterThan(assistantStartedIndex);
    expect(result.events.findIndex((event) => event === deltas[1])).toBeLessThan(completedIndex);
  });
});
