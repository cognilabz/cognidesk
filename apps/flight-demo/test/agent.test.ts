import { describe, expect, it } from "vitest";
import { createRuntime, type CognideskRuntime, type RuntimeEvent } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage-sqlite";
import { createFlightDemoRuntimeParts } from "../server/flight-agent.js";
import { createTestKnowledgeIndex, createTestModelSet, testConfig } from "./fixtures.js";

type FlightDemoTestRuntime = {
  agentId: string;
  runtime: CognideskRuntime;
};

describe("flight demo customer use cases", () => {
  it("helps a customer find an available flight before asking them to choose", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

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
    expect(openPrompts(events)).toEqual([
      expect.objectContaining({
        promptId: "field:book-flight:selectFlight:selectedFlightId",
        widgetKind: "text-input",
      }),
    ]);
  });

  it("collects missing route details in one form and advances after submission", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need to book a flight.",
    });
    const prompts = openPrompts(await runtime.listEvents(conversation.id));

    expect(result.activeJourneyId).toBe("book-flight");
    expect(result.snapshot.activeStateIds).toEqual(["collectRoute"]);
    expect(prompts).toEqual([
      expect.objectContaining({
        promptId: "fields:book-flight:collectRoute",
        widgetKind: "form",
        data: expect.objectContaining({
          input: expect.objectContaining({
            fields: [
              expect.objectContaining({ path: "origin", label: "Origin city", type: "text", placeholder: "Vienna" }),
              expect.objectContaining({ path: "destination", label: "Destination city", type: "text", placeholder: "Berlin" }),
              expect.objectContaining({ path: "departureDate", label: "Departure date", type: "date", min: "2026-05-26" }),
            ],
          }),
        }),
      }),
    ]);

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "fields:book-flight:collectRoute",
      widgetKind: "form",
      output: {
        values: {
          origin: "Vienna",
          destination: "Berlin",
          departureDate: "2026-05-27",
        },
      },
    });
    const afterForm = await runtime.getSnapshot(conversation.id);
    const afterFormPrompts = openPrompts(await runtime.listEvents(conversation.id));

    expect(afterForm).toMatchObject({
      activeJourneyId: "book-flight",
      activeStateIds: ["selectFlight"],
      journeyContext: {
        origin: "Vienna",
        destination: "Berlin",
        departureDate: "2026-05-27",
        availableFlights: [expect.objectContaining({ id: "CL102" })],
      },
    });
    expect(afterFormPrompts).toEqual([
      expect.objectContaining({
        promptId: "field:book-flight:selectFlight:selectedFlightId",
        widgetKind: "text-input",
      }),
    ]);
  });

  it("does not ask customers to choose a flight when the mocked inventory is empty", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Berlin to Paris today.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.snapshot.journeyContext).toMatchObject({
      origin: "Berlin",
      destination: "Paris",
      departureDate: "2026-05-26",
      availableFlights: [],
      routeAlternativeFlights: [],
      allAvailableFlights: expect.arrayContaining([
        expect.objectContaining({ id: "CL102" }),
        expect.objectContaining({ id: "CL204" }),
      ]),
    });
    expect(result.snapshot.activeStateIds).toEqual(["noFlights"]);
    expect(openPrompts(events).some((prompt) => prompt.promptId.includes("selectFlight"))).toBe(false);
    expect(result.text.toLowerCase()).toContain("no mocked flights");
  });

  it("answers vague no-inventory follow-ups with alternatives instead of repeating the failed date", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Berlin to Paris today.",
    });
    const followUp = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "What are available flights? On any dates?",
    });
    const events = await runtime.listEvents(conversation.id);
    const searches = events.filter((event) => event.type === "tool.completed" && event.data.toolName === "searchFlights");

    expect(searches).toHaveLength(1);
    expect(followUp.snapshot.activeStateIds).toEqual(["noFlights"]);
    expect(followUp.text).toContain("CL102");
    expect(followUp.text).toContain("CL204");
    expect(followUp.text.toLowerCase()).toContain("available mocked flights");
  });

  it("keeps one-shot passenger details and accepts lowercase flight numbers before confirmation", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Book a ticket from Vienna to Paris tomorrow for Alex Morgan.",
    });
    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "field:book-flight:selectFlight:selectedFlightId",
      widgetKind: "text-input",
      output: { value: "cl204" },
    });
    const afterSelection = await runtime.getSnapshot(conversation.id);

    expect(afterSelection).toMatchObject({
      activeJourneyId: "book-flight",
      activeStateIds: ["book"],
      journeyContext: {
        passengerName: "Alex Morgan",
        selectedFlightId: "cl204",
      },
    });
    expect(openPrompts(await runtime.listEvents(conversation.id))).toEqual([
      expect.objectContaining({
        promptId: "confirm:book-flight:book:bookFlight",
        widgetKind: "confirmation",
      }),
    ]);
  });

  it("books a selected mocked flight only after explicit widget confirmation", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

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

    expect(findSuccessfulTool(await runtime.listEvents(conversation.id), "bookFlight")).toBeUndefined();

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
    expect(findSuccessfulTool(events, "bookFlight")?.data.result).toEqual({ bookingReference: "CD-CL102-4821" });
    expect(events.map((event) => event.type)).toContain("journey.completed");
    expect(await runtime.getSnapshot(conversation.id)).toMatchObject({
      activeStateIds: [],
    });
  });

  it("uses booking references and flight numbers on the status journey", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const bookingConversation = await runtime.createConversation({ agentId, context: {} });
    await runtime.handleUserMessage({
      conversationId: bookingConversation.id,
      text: "What is the status of booking CD-CL204-4821?",
      turn: { forceStatus: true },
    });
    expect(findSuccessfulTool(await runtime.listEvents(bookingConversation.id), "getTicketStatus")?.data.result).toMatchObject({
      bookingReference: "CD-CL204-4821",
      status: "confirmed",
    });

    const flightConversation = await runtime.createConversation({ agentId, context: {} });
    await runtime.handleUserMessage({
      conversationId: flightConversation.id,
      text: "Can I check in for CL204?",
      turn: { forceStatus: true },
    });
    expect(findSuccessfulTool(await runtime.listEvents(flightConversation.id), "getFlightInfo")?.data.result).toMatchObject({
      id: "CL204",
      destination: "Paris",
    });
  });

  it("answers baggage questions from knowledge without forcing a booking journey", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "What baggage is included in economy?",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.activeJourneyId).toBeUndefined();
    expect(result.text).toContain("one cabin bag");
    expect(events.find((event) => (
      event.type === "knowledge.retrieved"
      && event.data.itemIds.includes("test-baggage")
    ))).toBeDefined();
  });

  it("routes upset customers asking for a person into the handoff journey", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "My flight was cancelled and I need to talk to a human.",
    });

    expect(result.activeJourneyId).toBe("human-handoff");
    expect(result.text.toLowerCase()).toContain("human");
  });
});

async function setupFlightDemoRuntime(): Promise<FlightDemoTestRuntime> {
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
    streaming: {
      syntheticDeltas: true,
    },
  });
  await runtime.initialize();
  return { runtime, agentId: agent.id };
}

function openPrompts(events: RuntimeEvent[]) {
  const submitted = new Set(events
    .filter((event) => event.type === "ui.submitted")
    .map((event) => event.data.promptId));
  return events
    .filter((event) => event.type === "ui.prompted" && !submitted.has(event.data.promptId))
    .map((event) => ({
      promptId: event.data.promptId,
      widgetKind: event.data.widgetKind,
      data: event.data,
    }));
}

function findSuccessfulTool(events: RuntimeEvent[], toolName: string) {
  return events.find((event) => (
    event.type === "tool.completed"
    && event.data.toolName === toolName
    && event.data.success
  ));
}
