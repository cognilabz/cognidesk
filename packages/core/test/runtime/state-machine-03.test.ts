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

describe("runtime state machine orchestration 03", () => {
  it("can route targeted journey events into an inactive state machine", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const status = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status",
      context: z.object({}),
    });
    const sync = status.event("ticket.synced", {
      payload: z.object({ ok: z.boolean() }),
      routing: "targeted",
    });
    const wait = status.state("wait");
    const done = status.final("done");
    wait.on(sync).target(done);
    status.initial(wait);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.emitJourneyEvent({
      conversationId: conversation.id,
      event: sync,
      payload: { ok: true },
      target: { journeyId: "ticket-status", stateId: "wait" },
    });

    expect(result.snapshot?.activeJourneyId).toBeUndefined();
    expect(result.snapshot?.activeStateIds).toEqual([]);
    expect(result.events.map((event) => event.type)).toEqual([
      "journey.event.emitted",
      "journey.activated",
      "journey.state.entered",
      "journey.completed",
    ]);
  });

  it("lets an exposed built-in tool view the active journey context", async () => {
    const context = z.object({
      bookingReference: z.string().optional(),
      viewedContext: z.unknown().optional(),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const status = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status",
      context,
    });
    const identify = status.state("identify").collect("bookingReference");
    const inspect = status.state("inspect").runTool(journeyContextViewerTool, {
      input: () => ({ journeyId: "ticket-status", fields: ["bookingReference"] }),
      assign: {
        viewedContext: ({ output }) => output.context,
      },
    });
    const done = status.state("done");
    status.initial(identify);
    identify.transitionTo(inspect);
    inspect.transitionTo(done);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you check ticket ABC123?",
    });

    expect(result.snapshot.journeyContext).toMatchObject({
      bookingReference: "ABC123",
      viewedContext: { bookingReference: "ABC123" },
    });
  });

  it("lets an exposed built-in tool view exact stored journey context", async () => {
    const calls: TextGenerationInput[] = [];
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        calls.push(input);
        if (!input.messages.some((message) => message.role === "tool")) {
          return {
            text: "",
            toolCalls: [{
              id: "call_1",
              name: "cognidesk.viewJourneyContext",
              input: { journeyId: "ticket-status", fields: ["bookingReference"] },
            }],
          };
        }
        return { text: `Context ${input.messages.at(-1)?.content}` };
      },
    };
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(journeyContextViewerTool);
    const agent = agentBuilder.compile();
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage, agent, models: createModels({ response }) });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await storage.saveSnapshot({
      conversationId: conversation.id,
      lifecycle: "active",
      activeStateIds: [],
      journeyContexts: [{
        journeyId: "ticket-status",
        context: { bookingReference: "ABC123", internalNote: "not requested" },
        updatedAt: "2026-05-26T00:00:00.000Z",
        stateId: "done",
      }],
      updatedAt: new Date().toISOString(),
    });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "What booking reference did I share?",
    });

    expect(result.text).toContain('"bookingReference":"ABC123"');
    expect(result.text).not.toContain("internalNote");
    expect(calls).toHaveLength(2);
  });

  it("adds delegation goal, instructions, and tools to the response prompt", async () => {
    let systemPrompt = "";
    const summarize = tool("summarizeHandoff", {
      input: z.object({ issue: z.string() }),
      output: z.object({ summary: z.string() }),
      execute: async ({ input }) => ({ summary: input.issue }),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.delegationJourney("human-handoff", {
      condition: "Customer asks for a human specialist",
      specialist: {
        goal: "Collect a concise handoff summary and stop automated troubleshooting.",
        instructions: "Ask only for missing handoff details.",
        tools: [summarize],
      },
      completeWhen: ["booking reference is known", "issue summary is known"],
    });
    const agent = agentBuilder.compile();
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async ({ messages }) => {
          systemPrompt = messages.find((message) => message.role === "system")?.content ?? "";
          return { text: "I can prepare a handoff." };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need a human agent.",
    });

    expect(result.activeJourneyId).toBe("human-handoff");
    expect(systemPrompt).toContain("Journey kind: delegation");
    expect(systemPrompt).toContain("Delegation goal: Collect a concise handoff summary");
    expect(systemPrompt).toContain("Delegation instructions: Ask only for missing handoff details.");
    expect(systemPrompt).toContain("Delegation completion criteria: booking reference is known; issue summary is known");
    expect(systemPrompt).toContain("Delegation tools: summarizeHandoff");
  });
});
