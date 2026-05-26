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

describe("runtime UI and lifecycle events 03", () => {
  it("prompts for collected field confirmation before continuing", async () => {
    const context = z.object({
      bookingReference: z.string().optional(),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const status = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status information",
      context,
    });
    const identify = status.state("identify")
      .collect("bookingReference", { confirm: { message: "Confirm booking reference" } });
    const done = status.final("done");
    status.initial(identify);
    identify.transitionTo(done);

    const agent = agentBuilder.compile();
    const models = createModels({
      extraction: {
        provider: "test",
        model: "extraction",
        generateText: async () => {
          const structured = { values: { bookingReference: "ABC123" } };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const turn = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you check ticket ABC123?",
    });
    const prompted = (await runtime.listEvents(conversation.id)).find((event) => event.type === "ui.prompted");

    expect(turn.snapshot.activeStateIds).toEqual(["identify"]);
    expect(prompted?.data).toEqual({
      promptId: "confirm-field:ticket-status:identify:bookingReference",
      widgetKind: "confirmation",
      input: {
        title: "Confirm booking reference",
        message: "Confirm booking reference",
        confirmLabel: "Confirm",
        cancelLabel: "Edit",
      },
    });

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm-field:ticket-status:identify:bookingReference",
      widgetKind: "confirmation",
      output: { confirmed: false },
    });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Please use ABC123 after all.",
    });
    expect((await runtime.listEvents(conversation.id)).filter((event) => (
      event.type === "ui.prompted"
      && event.data.promptId === "confirm-field:ticket-status:identify:bookingReference"
    ))).toHaveLength(2);

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm-field:ticket-status:identify:bookingReference",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });

    const snapshot = await runtime.getSnapshot(conversation.id);
    expect(snapshot?.activeJourneyId).toBeUndefined();
    expect(snapshot?.activeStateIds).toEqual([]);
    expect((await runtime.listEvents(conversation.id)).map((event) => event.type)).toEqual(expect.arrayContaining([
      "ui.submitted",
      "journey.completed",
    ]));
  });

  it("uses requiredWhen to skip conditionally unnecessary collected fields", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const booking = agentBuilder.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context: z.object({
        destinationType: z.enum(["domestic", "international"]).optional(),
        passportNumber: z.string().optional(),
      }),
    });
    const collectDetails = booking.state("collectDetails")
      .collect("destinationType")
      .collect("passportNumber", {
        requiredWhen: ({ context }) => context.destinationType === "international",
      });
    const done = booking.final("done");
    booking.initial(collectDetails);
    collectDetails.transitionTo(done);

    const agent = agentBuilder.compile();
    const models = createModels({
      extraction: {
        provider: "test",
        model: "extraction",
        generateText: async () => {
          const structured = { values: { destinationType: "domestic" } };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Book a domestic flight.",
    });

    expect(result.snapshot.activeJourneyId).toBeUndefined();
    expect(result.snapshot.activeStateIds).toEqual([]);
    expect((await runtime.listEvents(conversation.id)).map((event) => event.type)).toContain("journey.completed");
  });

  it("prompts for missing collected fields and applies widget submissions to journey context", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const profile = agentBuilder.stateMachineJourney("traveller-profile", {
      condition: "Customer needs to update traveller profile",
      context: z.object({
        email: z.string().email().optional(),
      }),
    });
    const collectEmail = profile.state("collectEmail").collect("email", {
      widget: widgetPrompt(textInputWidget, {
        label: "Email address",
        placeholder: "alex@example.com",
      }),
    });
    const done = profile.final("done");
    profile.initial(collectEmail);
    collectEmail.transitionTo(done);

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
      text: "Update my traveller profile.",
    });
    const prompted = (await runtime.listEvents(conversation.id)).find((event) => event.type === "ui.prompted");

    expect(turn.snapshot.activeStateIds).toEqual(["collectEmail"]);
    expect(prompted?.data).toEqual({
      promptId: "field:traveller-profile:collectEmail:email",
      widgetKind: "text-input",
      input: {
        label: "Email address",
        placeholder: "alex@example.com",
      },
    });

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "field:traveller-profile:collectEmail:email",
      widgetKind: "text-input",
      output: { value: "alex@example.com" },
    });

    const snapshot = await runtime.getSnapshot(conversation.id);
    expect(snapshot?.activeJourneyId).toBeUndefined();
    expect(snapshot?.activeStateIds).toEqual([]);
    expect(snapshot?.journeyContext).toBeUndefined();
    expect((await runtime.listEvents(conversation.id)).map((event) => event.type)).toEqual(expect.arrayContaining([
      "ui.submitted",
      "journey.completed",
    ]));
  });
});
