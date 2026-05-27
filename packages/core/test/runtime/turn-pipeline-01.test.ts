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
          id: "faq-ticket-status",
          title: "Ticket status",
          content: "Ticket status is available with the booking reference.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.knowledge.add(knowledge);
    const status = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status information",
      context: z.object({ bookingReference: z.string().optional() }),
    });
    const identify = status.state("identifyTicket").collect("bookingReference");
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

    expect(result.activeJourneyId).toBe("ticket-status");
    expect(result.text).toContain("faq-ticket-status");
    expect(result.snapshot.activeStateIds).toEqual(["identifyTicket"]);
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
        text: "Use faq-ticket-status for the current ticket status.",
        references: [{
          type: "knowledge",
          id: "faq-ticket-status",
          sourceName: "flight-faq",
          title: "Ticket status",
          metadata: { source: "faq" },
        }],
      }],
    });
  });

  it("renders model prompt profiles with task payloads before model calls", async () => {
    const agent = createAgent("flight-service", {
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
    const agentBuilder = createAgent("flight-service", {
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
    const agentBuilder = createAgent("flight-service", {
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
