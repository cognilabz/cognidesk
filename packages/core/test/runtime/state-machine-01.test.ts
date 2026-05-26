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

describe("runtime state machine orchestration 01", () => {
  it("extracts context, skips satisfied states, runs transition tools, and stores the final active state", async () => {
    const searchFlights = tool("searchFlights", {
      input: z.object({ origin: z.string(), destination: z.string() }),
      output: z.object({ flights: z.array(z.object({ id: z.string() })) }),
      execute: async () => ({ flights: [{ id: "OS123" }] }),
    });
    const context = z.object({
      origin: z.string().optional(),
      destination: z.string().optional(),
      flightCount: z.number().optional(),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agentBuilder.stateMachineJourney("book-flight", {
      condition: "Customer wants to search flights",
      context,
    });
    const collectRoute = booking.state("collectRoute")
      .collect("origin")
      .collect("destination");
    const search = booking.state("search")
      .runTool(searchFlights, {
        input: ({ context: journeyContext }) => ({
          origin: journeyContext.origin ?? "",
          destination: journeyContext.destination ?? "",
        }),
        assign: {
          flightCount: ({ output }) => output.flights.length,
        },
      });
    const completed = booking.final("completed");
    booking.initial(collectRoute);
    collectRoute.transitionTo(search);
    search.transitionTo(completed);

    const agent = agentBuilder.compile();
    const models = createModels({
      extraction: {
        provider: "test",
        model: "extraction",
        generateText: async () => {
          const structured = {
            values: {
              origin: "Vienna",
              destination: "Berlin",
            },
          };
          return { text: JSON.stringify(structured), structured };
        },
      },
      response: {
        provider: "test",
        model: "response",
        generateText: async () => ({ text: "I found one flight." }),
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin.",
    });

    expect(result.activeJourneyId).toBeUndefined();
    expect(result.snapshot.activeJourneyId).toBeUndefined();
    expect(result.snapshot.activeStateIds).toEqual([]);
    expect(result.snapshot.journeyContext).toBeUndefined();
    expect(result.snapshot.journeySummaries).toEqual([
      expect.objectContaining({
        journeyId: "book-flight",
        kind: "stateMachine",
        stateId: "completed",
        summary: expect.stringContaining('"origin":"Vienna"'),
      }),
    ]);
    expect((await runtime.listEvents(conversation.id)).map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "journey.candidates.retrieved",
      "journey.matched",
      "journey.activated",
      "journey.state.entered",
      "journey.extraction.proposed",
      "journey.extraction.accepted",
      "journey.state.entered",
      "tool.started",
      "tool.completed",
      "journey.state.entered",
      "journey.completed",
      "message.started",
      "message.completed",
    ]);
  });

  it("reuses completed journey context only when the journey policy allows it", async () => {
    let extractionCalls = 0;
    const context = z.object({
      bookingReference: z.string().optional(),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const status = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status information",
      context,
      contextReuse: {
        fields: ["bookingReference"],
        when: ({ turn, previousContext }) => (
          typeof turn === "object"
          && turn !== null
          && "reusePrevious" in turn
          && turn.reusePrevious === true
          && previousContext.bookingReference === "ABC123"
        ),
      },
    });
    const identify = status.state("identifyTicket").collect("bookingReference");
    const done = status.final("done");
    status.initial(identify);
    identify.transitionTo(done);

    const agent = agentBuilder.compile();
    const models = createModels({
      extraction: {
        provider: "test",
        model: "extraction",
        generateText: async () => {
          extractionCalls += 1;
          const structured = extractionCalls === 1
            ? { values: { bookingReference: "ABC123" } }
            : { values: {} };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const first = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Check ticket ABC123.",
    });
    const second = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Check the same ticket again.",
      turn: { reusePrevious: true },
    });

    expect(first.snapshot.journeyContexts?.at(0)).toMatchObject({
      journeyId: "ticket-status",
      context: { bookingReference: "ABC123" },
    });
    expect(second.snapshot.activeJourneyId).toBeUndefined();
    expect(second.snapshot.journeySummaries?.at(-1)?.summary).toContain('"bookingReference":"ABC123"');

    const storage = new RecordingStorage();
    const noReuseRuntime = createRuntime({ storage, agent, models, journeyIndex });
    const noReuseConversation = await noReuseRuntime.createConversation({ agentId: agent.id, context: {} });
    await storage.saveSnapshot({
      conversationId: noReuseConversation.id,
      lifecycle: "active",
      activeStateIds: [],
      journeyContexts: [{
        journeyId: "ticket-status",
        context: { bookingReference: "ABC123" },
        updatedAt: "2026-05-26T00:00:00.000Z",
        stateId: "done",
      }],
      updatedAt: "2026-05-26T00:00:00.000Z",
    });

    const noReuse = await noReuseRuntime.handleUserMessage({
      conversationId: noReuseConversation.id,
      text: "Check another ticket.",
      turn: { reusePrevious: false },
    });

    expect(noReuse.snapshot.activeJourneyId).toBe("ticket-status");
    expect(noReuse.snapshot.activeStateIds).toEqual(["identifyTicket"]);
    expect(noReuse.snapshot.journeyContext).toEqual({});
    expect(noReuse.events.map((event) => event.type)).toContain("ui.prompted");
  });
});
