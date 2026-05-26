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

describe("runtime turn pipeline 02", () => {
  it("lets the matcher rank only retrieved journey candidates", async () => {
    let matcherPrompt = "";
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const context = z.object({ bookingReference: z.string().optional() });
    const ticket = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status information",
      priority: 20,
      context,
    });
    ticket.initial(ticket.state("identifyTicket"));
    const refund = agentBuilder.stateMachineJourney("refund-status", {
      condition: "Customer wants refund status information",
      context,
    });
    refund.initial(refund.state("identifyRefund"));
    const booking = agentBuilder.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context,
    });
    booking.initial(booking.state("collectBooking"));

    const agent = agentBuilder.compile();
    const models = createModels({
      matcher: {
        provider: "test",
        model: "matcher",
        generateText: async ({ messages }) => {
          matcherPrompt = messages.map((message) => message.content).join("\n");
          const structured = {
            candidates: [{
              journeyId: "refund-status",
              confidence: 0.91,
              reason: "The user asks about a refund.",
            }],
          };
          return { text: JSON.stringify(structured), structured };
        },
      },
      journeyEmbedding: {
        provider: "test",
        model: "embedding",
        generateText: async () => ({ text: "" }),
        embed: async ({ text }: { text: string }) => ({
          embedding: vectorForMatcherTest(text),
          model: "embedding",
          dimensions: 2,
        }),
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      journeyIndex,
      topKJourneys: 2,
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you check my refund?",
    });

    expect(result.activeJourneyId).toBe("refund-status");
    expect(matcherPrompt).toContain("journeyId: ticket-status");
    expect(matcherPrompt).toContain("journeyId: refund-status");
    expect(matcherPrompt).not.toContain("journeyId: book-flight");
    const matched = (await runtime.listEvents(conversation.id)).find((event) => event.type === "journey.matched");
    expect(matched?.data.candidates).toEqual([{
      journeyId: "refund-status",
      confidence: 0.91,
      reason: "The user asks about a refund.",
    }]);
  });

  it("passes the full conversation transcript to the journey matcher", async () => {
    let matcherPrompt = "";
    let responseCount = 0;
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const ticket = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status information",
      context: z.object({ bookingReference: z.string().optional() }),
    });
    ticket.initial(ticket.state("identifyTicket"));

    const agent = agentBuilder.compile();
    const models = createModels({
      matcher: {
        provider: "test",
        model: "matcher",
        generateText: async ({ messages }) => {
          matcherPrompt = messages.map((message) => message.content).join("\n");
          const structured = {
            candidates: [{ journeyId: "ticket-status", confidence: 0.9 }],
          };
          return { text: JSON.stringify(structured), structured };
        },
      },
      response: {
        provider: "test",
        model: "response",
        generateText: async () => {
          responseCount += 1;
          return { text: `Answer ${responseCount}` };
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
      text: "My booking reference is ABC123.",
    });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you check it?",
    });

    expect(matcherPrompt).toContain("Conversation transcript:");
    expect(matcherPrompt).toContain("user: My booking reference is ABC123.");
    expect(matcherPrompt).toContain("assistant: Answer 1");
    expect(matcherPrompt).toContain("user: Can you check it?");
  });

  it("emits provider-neutral trace events without storing them as runtime events", async () => {
    const traces: TraceEvent[] = [];
    const searchFlights = tool("searchFlights", {
      input: z.object({ origin: z.string(), destination: z.string() }),
      output: z.object({ flights: z.array(z.object({ id: z.string() })) }),
      execute: async () => ({ flights: [{ id: "OS123" }] }),
    });
    const knowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "faq-routes",
          content: "Route searches need an origin and destination.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.knowledge.add(knowledge);
    const booking = agentBuilder.stateMachineJourney("book-flight", {
      condition: "Customer wants to search flights",
      context: z.object({
        origin: z.string().optional(),
        destination: z.string().optional(),
        flightCount: z.number().optional(),
      }),
    });
    const route = booking.state("route").collect("origin").collect("destination");
    const search = booking.state("search").runTool(searchFlights, {
      input: ({ context }) => ({
        origin: context.origin ?? "",
        destination: context.destination ?? "",
      }),
      assign: {
        flightCount: ({ output }) => output.flights.length,
      },
    });
    booking.initial(route);
    route.transitionTo(search);

    const agent = agentBuilder.compile();
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async () => ({
          text: "I found one route using faq-routes.",
          usage: { totalTokens: 12 },
        }),
      },
      extraction: {
        provider: "test",
        model: "extraction",
        generateText: async () => {
          const structured = { values: { origin: "Vienna", destination: "Berlin" } };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      journeyIndex,
      observability: {
        onTraceEvent: (event) => {
          traces.push(event);
        },
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin.",
    });

    expect(traces.map((event) => event.type)).toEqual(expect.arrayContaining([
      "runtime.event",
      "model.started",
      "model.completed",
      "tool.started",
      "tool.completed",
      "knowledge.retrieved",
    ]));
    expect(traces.some((event) => event.type === "model.completed" && event.role === "response" && event.usage?.totalTokens === 12)).toBe(true);
    expect(traces.some((event) => event.type === "tool.completed" && event.toolName === "searchFlights" && event.success)).toBe(true);
    expect((await runtime.listEvents(conversation.id)).some((event) => event.type === "custom.observability")).toBe(false);
  });
});
