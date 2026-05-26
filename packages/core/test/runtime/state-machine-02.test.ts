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

describe("runtime state machine orchestration 02", () => {
  it("can enter an activated journey through an alternate state when reused context is sufficient", async () => {
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
        when: ({ previousContext }) => previousContext.bookingReference === "ABC123",
      },
    });
    const identify = status.state("identifyTicket").collect("bookingReference");
    const lookup = status.final("lookupTicket");
    status.initial(identify);
    identify.transitionTo(lookup);
    status.alternateEntry(lookup, {
      description: "Skip identification when the booking reference was reused.",
      priority: 10,
      when: ({ context }) => context.bookingReference === "ABC123",
    });

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage, agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await storage.saveSnapshot({
      conversationId: conversation.id,
      lifecycle: "active",
      activeStateIds: [],
      journeyContexts: [{
        journeyId: "ticket-status",
        context: { bookingReference: "ABC123" },
        updatedAt: "2026-05-26T00:00:00.000Z",
        stateId: "lookupTicket",
      }],
      updatedAt: "2026-05-26T00:00:00.000Z",
    });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you check my ticket again?",
    });

    expect(result.snapshot.activeJourneyId).toBeUndefined();
    expect(result.snapshot.activeStateIds).toEqual([]);
    expect(result.snapshot.journeySummaries?.at(-1)?.summary).toContain('"bookingReference":"ABC123"');
    expect(result.events.map((event) => event.type)).toEqual([
      "message.started",
      "message.completed",
      "journey.candidates.retrieved",
      "journey.matched",
      "journey.activated",
      "journey.state.entered",
      "journey.completed",
      "message.started",
      "message.completed",
    ]);
    expect(result.events.find((event) => event.type === "journey.state.entered")?.data).toEqual({
      journeyId: "ticket-status",
      stateId: "lookupTicket",
    });
  });

  it("uses the matcher to choose among multiple conversational transitions", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const journey = agentBuilder.stateMachineJourney("ticket-help", {
      condition: "Customer needs ticket help",
      context: z.object({}),
    });
    const classify = journey.state("classify");
    const refund = journey.final("refund");
    const status = journey.final("status");
    journey.initial(classify);
    classify.when("Customer wants a refund").target(refund);
    classify.when("Customer wants ticket status").target(status);

    const agent = agentBuilder.compile();
    const matcherPrompts: string[] = [];
    const matcher = {
      provider: "test",
      model: "matcher",
      generateText: async (input: TextGenerationInput) => {
        const prompt = input.messages.map((message) => message.content).join("\n");
        matcherPrompts.push(prompt);
        if (prompt.includes("state transition candidates")) {
          const structured = { candidates: [{ id: "transition_2", confidence: 0.95 }] };
          return { text: JSON.stringify(structured), structured };
        }
        const structured = { candidates: [{ journeyId: "ticket-help", confidence: 0.9 }] };
        return { text: JSON.stringify(structured), structured };
      },
    };
    const models = createModels({ matcher });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you check my ticket status?",
    });
    const completed = result.events.find((event) => event.type === "journey.completed");

    expect(completed?.data).toEqual({ journeyId: "ticket-help", stateId: "status" });
    expect(matcherPrompts.some((prompt) => prompt.includes("targetId: status"))).toBe(true);
    expect(matcherPrompts.some((prompt) => prompt.includes("targetId: refund"))).toBe(true);
  });

  it("validates journey events and routes them through the active state machine", async () => {
    const context = z.object({ bookingReference: z.string().optional() });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const status = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status",
      context,
    });
    const refreshed = status.event("ticket.refreshed", {
      payload: z.object({ bookingReference: z.string() }),
      routing: "activeJourneyOnly",
    });
    const wait = status.state("wait");
    const done = status.final("done");
    wait.on(refreshed).target(done);
    status.initial(wait);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you help with ticket ABC123?",
    });

    await expect(runtime.emitJourneyEvent({
      conversationId: conversation.id,
      event: refreshed,
      payload: { bookingReference: 123 } as unknown as { bookingReference: string },
    })).rejects.toThrow();

    const result = await runtime.emitJourneyEvent({
      conversationId: conversation.id,
      event: refreshed,
      payload: { bookingReference: "ABC123" },
    });

    expect(result.event.type).toBe("journey.event.emitted");
    expect(result.snapshot?.activeJourneyId).toBeUndefined();
    expect(result.snapshot?.activeStateIds).toEqual([]);
    expect(result.events.map((event) => event.type)).toEqual([
      "journey.event.emitted",
      "journey.state.entered",
      "journey.completed",
    ]);
    expect((await runtime.listEvents(conversation.id)).at(-3)?.data).toMatchObject({
      name: "ticket.refreshed",
      payload: { bookingReference: "ABC123" },
      routing: "activeJourneyOnly",
    });
  });

  it("routes active-journey events to the matching active parallel state", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const journey = agentBuilder.stateMachineJourney("parallel-events", {
      condition: "Customer has parallel event branches",
      context: z.object({}),
    });
    const synced = journey.event("branch.synced", {
      payload: z.object({ ok: z.boolean() }),
      routing: "activeJourneyOnly",
    });
    const root = journey.parallel("root");
    const passive = root.state("passive");
    const waiting = root.state("waiting");
    const syncedDone = journey.final("syncedDone");
    waiting.on(synced).target(syncedDone);
    journey.initial(root);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    const turn = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Use the parallel event journey.",
    });
    expect(turn.snapshot.activeStateIds.sort()).toEqual(["passive", "waiting"]);

    const result = await runtime.emitJourneyEvent({
      conversationId: conversation.id,
      event: synced,
      payload: { ok: true },
    });

    expect(result.snapshot?.activeJourneyId).toBe("parallel-events");
    expect(result.snapshot?.activeStateIds.sort()).toEqual(["passive", "syncedDone"]);
    expect(result.events.map((event) => event.type)).toEqual([
      "journey.event.emitted",
      "journey.state.entered",
    ]);
  });
});
