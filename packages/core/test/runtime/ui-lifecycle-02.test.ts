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

describe("runtime UI and lifecycle events 02", () => {
  it("validates declared custom runtime events and exposes only visible ones to the model", async () => {
    const leadCaptured = customRuntimeEvent("lead.captured", {
      payload: z.object({ email: z.string().email(), source: z.string() }),
      visibleToModel: true,
    });
    const internalMetric = customRuntimeEvent("metric.logged", {
      payload: z.object({ name: z.string() }),
    });
    let systemPrompt = "";
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.customEvents.add(leadCaptured, internalMetric);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({
        response: {
          provider: "test",
          model: "response",
          generateText: async ({ messages }) => {
            systemPrompt = messages.find((message) => message.role === "system")?.content ?? "";
            return { text: "I can help with that lead." };
          },
        },
      }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const event = await runtime.emitCustomEvent({
      conversationId: conversation.id,
      event: leadCaptured,
      payload: { email: "phil@example.com", source: "chat" },
    });
    await runtime.emitCustomEvent({
      conversationId: conversation.id,
      event: internalMetric,
      payload: { name: "widget.opened" },
    });
    await expect(runtime.emitCustomEvent({
      conversationId: conversation.id,
      event: leadCaptured,
      payload: { email: "not-an-email", source: "chat" },
    })).rejects.toThrow();

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Use the current lead.",
    });

    expect(event.type).toBe("custom.lead.captured");
    expect(event.data).toEqual({ email: "phil@example.com", source: "chat" });
    expect(systemPrompt).toContain("custom.lead.captured");
    expect(systemPrompt).toContain("phil@example.com");
    expect(systemPrompt).not.toContain("custom.metric.logged");
    expect(systemPrompt).not.toContain("widget.opened");
  });

  it("rejects custom runtime events that are not registered on the agent", async () => {
    const registered = customRuntimeEvent("registered", {
      payload: z.object({ ok: z.boolean() }),
    });
    const unregistered = customRuntimeEvent("unregistered", {
      payload: z.object({ ok: z.boolean() }),
    });
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.customEvents.add(registered);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await expect(runtime.emitCustomEvent({
      conversationId: conversation.id,
      event: unregistered,
      payload: { ok: true },
    })).rejects.toThrow("Custom runtime event 'unregistered' is not registered on agent 'flight-service'.");
  });

  it("moves a conversation into handoff lifecycle and stores a handoff event", async () => {
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.requestHandoff({
      conversationId: conversation.id,
      reason: "Customer asked for a human",
      summary: "Needs ticket exception review.",
      payload: { priority: "high" },
    });

    expect(result.conversation.lifecycle).toBe("handoff");
    expect(result.event.type).toBe("handoff.requested");
    expect(await runtime.getSnapshot(conversation.id)).toMatchObject({ lifecycle: "handoff" });
    expect((await runtime.listEvents(conversation.id)).at(-1)?.data).toEqual({
      reason: "Customer asked for a human",
      summary: "Needs ticket exception review.",
      payload: { priority: "high" },
    });
  });

  it("blocks handoff when the configured channel policy does not enable it", async () => {
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
      channels: [{
        id: "sms-support",
        channel: "sms",
        enabled: true,
        channelSetIds: [],
        providerPackageIds: [],
        enabledCapabilities: ["receive", "send"],
        flowActivations: [],
        handoff: {
          enabled: false,
          providerPackageIds: [],
          destinations: [],
          sdkControlled: true,
          policyIds: ["handoff"],
        },
        policies: {},
      }],
    });
    const conversation = await runtime.createConversation({
      agentId: agent.id,
      context: {},
      channel: { channelId: "sms-support", kind: "sms" },
    });

    await expect(runtime.requestHandoff({
      conversationId: conversation.id,
      reason: "Customer asked for a human",
    })).rejects.toThrow("Handoff is not enabled for channel 'sms-support'.");

    expect(await runtime.getSnapshot(conversation.id)).toMatchObject({ lifecycle: "active" });
    expect((await runtime.listEvents(conversation.id)).at(-1)).toMatchObject({
      type: "custom.channel.handoff.blocked",
      data: {
        channelPolicyIds: ["sms-support"],
        reason: "handoff-disabled-for-channel",
      },
    });
  });

  it("resumes a handoff conversation back to active lifecycle", async () => {
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.requestHandoff({
      conversationId: conversation.id,
      reason: "Human review",
    });

    const result = await runtime.resumeConversation({
      conversationId: conversation.id,
      reason: "Human finished review",
      payload: { ticketId: "T-1" },
    });

    expect(result.conversation.lifecycle).toBe("active");
    expect(result.event.type).toBe("handoff.resumed");
    expect(await runtime.getSnapshot(conversation.id)).toMatchObject({ lifecycle: "active" });
    expect((await runtime.listEvents(conversation.id)).at(-1)?.data).toEqual({
      reason: "Human finished review",
      payload: { ticketId: "T-1" },
    });
  });

  it("prompts for side-effect tool confirmation and executes it after widget submission", async () => {
    const bookTicket = tool("bookTicket", {
      input: z.object({ passengerName: z.string() }),
      output: z.object({ bookingReference: z.string() }),
      sideEffect: true,
      execute: async ({ input }) => ({ bookingReference: `BOOKED-${input.passengerName}` }),
    });
    const context = z.object({
      passengerName: z.string().optional(),
      bookingReference: z.string().optional(),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agentBuilder.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context,
    });
    const identify = booking.state("identifyPassenger").collect("passengerName");
    const book = booking.state("book").runTool(bookTicket, {
      confirm: { message: "Confirm booking" },
      input: ({ context: journeyContext }) => ({ passengerName: journeyContext.passengerName ?? "" }),
      assign: {
        bookingReference: ({ output }) => output.bookingReference,
      },
    });
    const done = booking.final("done");
    booking.initial(identify);
    identify.transitionTo(book);
    book.transitionTo(done);

    const agent = agentBuilder.compile();
    const models = createModels({
      extraction: {
        provider: "test",
        model: "extraction",
        generateText: async () => {
          const structured = { values: { passengerName: "Alex" } };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const turn = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Book this for Alex.",
    });
    expect(turn.snapshot.activeStateIds).toEqual(["book"]);
    const prompted = (await runtime.listEvents(conversation.id)).find((event) => event.type === "ui.prompted");
    expect(prompted?.data).toEqual({
      promptId: "confirm:book-flight:book:bookTicket",
      widgetKind: "confirmation",
      input: {
        title: "Confirm booking",
        message: "Confirm booking\n\nPassenger Name: Alex",
        confirmLabel: "Confirm",
        cancelLabel: "Not now",
      },
    });

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm:book-flight:book:bookTicket",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });

    const snapshot = await runtime.getSnapshot(conversation.id);
    expect(snapshot?.activeJourneyId).toBeUndefined();
    expect(snapshot?.activeStateIds).toEqual([]);
    expect(snapshot?.journeyContext).toBeUndefined();
    expect((await runtime.listEvents(conversation.id)).map((event) => event.type)).toEqual(expect.arrayContaining([
      "tool.completed",
      "journey.completed",
    ]));
  });
});
