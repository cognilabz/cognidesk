import { describe, expect, it } from "vitest";
import { createRuntime } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage-sqlite";
import { createFlightDemoRuntimeParts } from "../server/flight-agent.js";
import { createTestKnowledgeIndex, createTestModelSet, testConfig } from "./fixtures.js";

describe("flight demo agent", () => {
  it("handles a booking search turn without runtime errors", async () => {
    const models = createTestModelSet();
    const knowledgeIndex = await createTestKnowledgeIndex(models);
    const { agent, journeyIndex } = await createFlightDemoRuntimeParts({
      config: testConfig,
      models,
      knowledgeIndex,
    });
    const runtime = createRuntime({
      storage: createSqliteStorage({ filename: ":memory:" }),
      agent,
      models,
      journeyIndex,
      topKJourneys: 3,
    });
    await runtime.initialize();
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin tomorrow.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.activeJourneyId).toBe("book-flight");
    expect(events.find((event) => event.type === "error")).toBeUndefined();
    expect(result.snapshot.journeyContext).toMatchObject({
      origin: "Vienna",
      destination: "Berlin",
      departureDate: "2026-05-27",
      availableFlights: [expect.objectContaining({ id: "CL102" })],
    });
    expect(result.snapshot.activeStateIds).toEqual(["selectFlight"]);
  });

  it("books a selected mocked flight only after explicit widget confirmation", async () => {
    const models = createTestModelSet();
    const knowledgeIndex = await createTestKnowledgeIndex(models);
    const { agent, journeyIndex } = await createFlightDemoRuntimeParts({
      config: testConfig,
      models,
      knowledgeIndex,
    });
    const runtime = createRuntime({
      storage: createSqliteStorage({ filename: ":memory:" }),
      agent,
      models,
      journeyIndex,
      topKJourneys: 3,
    });
    await runtime.initialize();
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin tomorrow.",
    });
    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "field:book-flight:selectFlight:selectedFlightId",
      widgetKind: "text-input",
      output: { value: "CL102" },
    });
    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "field:book-flight:confirmPassenger:passengerName",
      widgetKind: "text-input",
      output: { value: "Alex Morgan" },
    });
    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm:book-flight:book:bookFlight",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });

    const events = await runtime.listEvents(conversation.id);
    const booking = events.find((event) => (
      event.type === "tool.completed"
      && event.data.toolName === "bookFlight"
      && event.data.success
    ));
    expect(booking?.data.result).toEqual({ bookingReference: "CD-CL102-4821" });
    expect(events.map((event) => event.type)).toContain("journey.completed");
    expect(await runtime.getSnapshot(conversation.id)).toMatchObject({
      activeStateIds: [],
    });
  });

  it("uses booking references and flight numbers on the status journey", async () => {
    const models = createTestModelSet();
    const knowledgeIndex = await createTestKnowledgeIndex(models);
    const { agent, journeyIndex } = await createFlightDemoRuntimeParts({
      config: testConfig,
      models,
      knowledgeIndex,
    });
    const runtime = createRuntime({
      storage: createSqliteStorage({ filename: ":memory:" }),
      agent,
      models,
      journeyIndex,
      topKJourneys: 3,
    });
    await runtime.initialize();
    const bookingConversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({
      conversationId: bookingConversation.id,
      text: "What is the status of booking CD-CL204-4821?",
      turn: { forceStatus: true },
    });
    const bookingEvents = await runtime.listEvents(bookingConversation.id);
    expect(bookingEvents.find((event) => (
      event.type === "tool.completed"
      && event.data.toolName === "getTicketStatus"
    ))?.data.result).toMatchObject({
      bookingReference: "CD-CL204-4821",
      status: "confirmed",
    });

    const flightConversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({
      conversationId: flightConversation.id,
      text: "Can I check in for CL204?",
      turn: { forceStatus: true },
    });
    const flightEvents = await runtime.listEvents(flightConversation.id);
    expect(flightEvents.find((event) => (
      event.type === "tool.completed"
      && event.data.toolName === "getFlightInfo"
    ))?.data.result).toMatchObject({
      id: "CL204",
      destination: "Paris",
    });
  });
});
