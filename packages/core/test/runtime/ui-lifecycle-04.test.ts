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

describe("runtime UI and lifecycle events 04", () => {
  it("emits structured guard denials and guard prompts without advancing state", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const journey = agentBuilder.stateMachineJourney("ticket-review", {
      condition: "Customer wants ticket review information",
      context: z.object({}),
    });
    const review = journey.state("reviewTicket");
    const done = journey.final("done");
    journey.initial(review);
    review.transitionTo(done, {
      guard: () => ({
        allow: false,
        code: "identity_required",
        message: "Identity must be confirmed before the review can continue.",
        metadata: { policy: "ticket-review" },
        prompt: widgetPrompt(textInputWidget, {
          label: "Confirmation code",
          placeholder: "ABC-123",
        }),
      }),
    });

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const turn = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need a ticket review.",
    });
    const events = await runtime.listEvents(conversation.id);
    const denial = events.find((event) => event.type === "journey.guard.denied");
    const prompt = events.find((event) => event.type === "ui.prompted");

    expect(turn.snapshot.activeJourneyId).toBe("ticket-review");
    expect(turn.snapshot.activeStateIds).toEqual(["reviewTicket"]);
    expect(denial?.data).toEqual({
      journeyId: "ticket-review",
      stateId: "reviewTicket",
      code: "identity_required",
      message: "Identity must be confirmed before the review can continue.",
      metadata: { policy: "ticket-review" },
    });
    expect(prompt?.data).toEqual({
      promptId: "guard:ticket-review:reviewTicket:identity_required",
      widgetKind: "text-input",
      input: {
        label: "Confirmation code",
        placeholder: "ABC-123",
      },
    });
  });

  it("applies journey guards before activation", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const journey = agentBuilder.stateMachineJourney("secured-ticket-review", {
      condition: "Customer wants secured ticket review information",
      context: z.object({}),
      guard: ({ app }) => {
        const authenticated = typeof app === "object" && app !== null && "authenticated" in app
          ? app.authenticated
          : false;
        return authenticated === true
          ? { allow: true }
          : {
              allow: false,
              code: "auth_required",
              message: "The customer must authenticate before this journey can start.",
              prompt: widgetPrompt(textInputWidget, {
                label: "Authentication code",
              }),
            };
      },
    });
    journey.initial(journey.state("reviewTicket"));

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      journeyIndex,
      app: { authenticated: false },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const turn = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need a secured ticket review.",
    });
    const events = await runtime.listEvents(conversation.id);
    const denial = events.find((event) => event.type === "journey.guard.denied");
    const prompt = events.find((event) => event.type === "ui.prompted");

    expect(turn.snapshot.activeJourneyId).toBeUndefined();
    expect(turn.snapshot.activeStateIds).toEqual([]);
    expect(events.map((event) => event.type)).not.toContain("journey.activated");
    expect(denial?.data).toEqual({
      journeyId: "secured-ticket-review",
      code: "auth_required",
      message: "The customer must authenticate before this journey can start.",
    });
    expect(prompt?.data).toEqual({
      promptId: "guard:secured-ticket-review:journey:auth_required",
      widgetKind: "text-input",
      input: {
        label: "Authentication code",
      },
    });
  });

  it("applies widget submissions to the matching active parallel state", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const journey = agentBuilder.stateMachineJourney("parallel-profile", {
      condition: "Customer updates profile while another branch remains active",
      context: z.object({
        email: z.string().email().optional(),
      }),
    });
    const root = journey.parallel("profileRoot");
    const hold = root.state("hold");
    const collectEmail = root.state("collectEmail").collect("email", {
      widget: widgetPrompt(textInputWidget, { label: "Email address" }),
    });
    const emailDone = journey.final("emailDone");
    collectEmail.transitionTo(emailDone);
    journey.initial(root);

    const agent = agentBuilder.compile();
    const models = createModels({
      extraction: {
        provider: "test",
        model: "extraction",
        generateText: async () => {
          const structured = { values: {} };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const turn = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Update my profile.",
    });
    expect(turn.snapshot.activeStateIds.sort()).toEqual(["collectEmail", "hold"]);

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "field:parallel-profile:collectEmail:email",
      widgetKind: "text-input",
      output: { value: "alex@example.com" },
    });

    const snapshot = await runtime.getSnapshot(conversation.id);
    expect(snapshot?.activeJourneyId).toBe("parallel-profile");
    expect(snapshot?.activeStateIds.sort()).toEqual(["emailDone", "hold"]);
    expect(snapshot?.journeyContext).toEqual({ email: "alex@example.com" });
  });

  it("moves to handoff when the confirmed built-in handoff tool runs", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const handoff = agentBuilder.stateMachineJourney("human-handoff", {
      condition: "Customer needs a human support handoff",
      context: z.object({}),
    });
    const pause = handoff.state("pause").runTool(handoffTool, {
      confirm: { message: "Confirm handoff" },
      input: () => ({
        reason: "Customer requested a human",
        summary: "Needs human review.",
      }),
    });
    handoff.initial(pause);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need a human support person.",
    });

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm:human-handoff:pause:cognidesk.handoff",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });

    const snapshot = await runtime.getSnapshot(conversation.id);
    const events = await runtime.listEvents(conversation.id);
    expect(snapshot?.lifecycle).toBe("handoff");
    expect(events.map((event) => event.type)).toContain("handoff.requested");
    expect(events.at(-1)?.data).toEqual({
      reason: "Customer requested a human",
      summary: "Needs human review.",
    });
    await expect(runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Are you there?",
    })).rejects.toThrow("is 'handoff'");
  });
});
