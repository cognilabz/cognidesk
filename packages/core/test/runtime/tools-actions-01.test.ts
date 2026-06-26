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

describe("runtime tools and actions 01", () => {
  it("executes base agent tools requested by the response model", async () => {
    const getTicketStatus = tool("getTicketStatus", {
      description: "Get mocked ticket status.",
      input: z.object({ bookingReference: z.string() }),
      output: z.object({ status: z.string() }),
      execute: async ({ input }) => ({ status: `${input.bookingReference}:confirmed` }),
    });
    const calls: TextGenerationInput[] = [];
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        calls.push(input);
        if (calls.length === 1) {
          return {
            text: "",
            toolCalls: [{
              id: "call_1",
              name: "getTicketStatus",
              input: { bookingReference: "ABC123" },
            }],
          };
        }
        return { text: `Tool said ${input.messages.at(-1)?.content}` };
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

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "What is ticket ABC123 doing?",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(calls[0]?.tools?.map((toolDefinition) => toolDefinition.name)).toEqual(["getTicketStatus"]);
    expect(calls[1]?.messages).toContainEqual(expect.objectContaining({
      role: "tool",
      name: "getTicketStatus",
      toolCallId: "call_1",
      content: JSON.stringify({ status: "ABC123:confirmed" }),
    }));
    expect(result.text).toContain("ABC123:confirmed");
    expect(events.map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "tool.started",
      "tool.completed",
      "message.started",
      "message.completed",
    ]);
  });

  it("exposes active state-scoped tools and knowledge to the response turn", async () => {
    const getSeatMap = tool("getSeatMap", {
      description: "Get the available seat map.",
      input: z.object({}),
      output: z.object({ seats: z.array(z.string()) }),
      execute: async () => ({ seats: ["12A"] }),
    });
    const stateFaq = knowledgeSource("seat-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "seat-map",
          content: "Seat 12A is a window seat near the front.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const responseCalls: TextGenerationInput[] = [];
    const agentBuilder = createAgent("agent_primary", { instructions: "Help customers with flights." });
    const seating = agentBuilder.stateMachineJourney("seat-selection", {
      condition: "Customer wants help selecting a seat",
      context: z.object({}),
    });
    const parent = seating.state("seatSupport").instructions("Keep the customer in the seat-selection support context.");
    parent.tools.add(getSeatMap);
    const selectSeat = parent.state("selectSeat").instructions("Use seat-specific support context.");
    selectSeat.knowledge.add(stateFaq);
    parent.initial(selectSeat);
    seating.initial(selectSeat);

    const agent = agentBuilder.compile();
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async (input: TextGenerationInput) => {
          responseCalls.push(input);
          return { text: "Seat 12A is available using seat-map." };
        },
      },
    });
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
      text: "Can you help me pick a seat?",
    });

    const responseCall = responseCalls.at(-1);
    const systemPrompt = responseCall?.messages.find((message) => message.role === "system")?.content ?? "";
    expect(responseCall?.tools?.map((toolDefinition) => toolDefinition.name)).toEqual(["getSeatMap"]);
    expect(systemPrompt).toContain("State seatSupport instructions: Keep the customer in the seat-selection support context.");
    expect(systemPrompt).toContain("State selectSeat instructions: Use seat-specific support context.");
    expect(systemPrompt).toContain("[K1:seat-map]");
    expect((await runtime.listEvents(conversation.id)).find((event) => event.type === "knowledge.retrieved")).toMatchObject({
      data: {
        sourceName: "seat-faq",
        itemIds: ["seat-map"],
      },
    });
  });

  it("enters logical parallel child states and coordinates one response", async () => {
    const seatMap = tool("seatMap", {
      description: "Get available seats.",
      input: z.object({}),
      output: z.object({ seats: z.array(z.string()) }),
      execute: async () => ({ seats: ["12A"] }),
    });
    const baggageFaq = knowledgeSource("baggage-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "baggage-policy",
          content: "Economy tickets include one cabin bag.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const responseCalls: TextGenerationInput[] = [];
    const agentBuilder = createAgent("agent_primary", { instructions: "Help customers with flights." });
    const journey = agentBuilder.stateMachineJourney("trip-prep", {
      condition: "Customer wants help preparing for a trip",
      context: z.object({}),
    });
    const prep = journey.parallel("prepareTrip");
    const baggage = prep.state("baggage").instructions("Explain baggage rules.");
    baggage.knowledge.add(baggageFaq);
    const seating = prep.state("seating").instructions("Help select seats.");
    seating.tools.add(seatMap);
    journey.initial(prep);

    const agent = agentBuilder.compile();
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async (input: TextGenerationInput) => {
          responseCalls.push(input);
          return { text: "One coordinated trip preparation answer." };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      journeyIndex,
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you help with baggage and seats?",
    });

    const responseCall = responseCalls.at(-1);
    const systemPrompt = responseCall?.messages.find((message) => message.role === "system")?.content ?? "";
    expect(result.snapshot.activeStateIds.sort()).toEqual(["baggage", "seating"]);
    expect(responseCall?.tools?.map((toolDefinition) => toolDefinition.name)).toEqual(["seatMap"]);
    expect(systemPrompt).toContain("Active state: baggage, seating");
    expect(systemPrompt).toContain("State baggage instructions: Explain baggage rules.");
    expect(systemPrompt).toContain("State seating instructions: Help select seats.");
    expect(systemPrompt).toContain("[K1:baggage-policy]");
    expect((await runtime.listEvents(conversation.id)).filter((event) => event.type === "message.completed" && !event.data.intermediate)).toHaveLength(2);
  });
});
