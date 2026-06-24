import { describe, expect, it } from "vitest";
import { createRuntime, createTelemetryContext, type CognideskRuntime, type RuntimeEvent } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage/sqlite";
import {
  createFlightDemoRuntimeParts,
  type FlightDemoExternalIntegrationJourneyOption,
} from "../server/agent/index.js";
import { flightDemoRuntimeChannels } from "../server/agent/policies.js";
import {
  createFlightTools,
  flightTools,
  type FlightTools,
  type FlightWhatsAppCustomerMessageSendInput,
} from "../server/agent/tools/flight-tools.js";
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
        widgetKind: "choice",
        data: expect.objectContaining({
          input: expect.objectContaining({
            options: [expect.objectContaining({ id: "CL102" })],
          }),
        }),
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
        widgetKind: "choice",
      }),
    ]);
  });

  it("lets customers choose route alternatives from the no-flights state and continue booking", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin on 2026-05-28.",
    });
    const prompts = openPrompts(await runtime.listEvents(conversation.id));

    expect(result.snapshot.activeStateIds).toEqual(["noFlights"]);
    expect(result.snapshot.journeyContext).toMatchObject({
      routeAlternativeFlights: expect.arrayContaining([
        expect.objectContaining({ id: "CL101" }),
        expect.objectContaining({ id: "CL102" }),
      ]),
      availableFlights: expect.arrayContaining([
        expect.objectContaining({ id: "CL101" }),
        expect.objectContaining({ id: "CL102" }),
      ]),
    });
    expect(prompts).toEqual([
      expect.objectContaining({
        promptId: "field:book-flight:noFlights:selectedFlightId",
        widgetKind: "choice",
      }),
    ]);

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "field:book-flight:noFlights:selectedFlightId",
      widgetKind: "choice",
      output: { selectedId: "CL101" },
    });

    expect(await runtime.getSnapshot(conversation.id)).toMatchObject({
      activeJourneyId: "book-flight",
      activeStateIds: ["confirmPassenger"],
      journeyContext: {
        selectedFlightId: "CL101",
      },
    });
  });

  it("accepts clear-text cheaper alternative selection and keeps the booking journey alive", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin on 2026-05-28.",
    });
    const selected = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "The cheaper one sounds good",
    });

    expect(selected.snapshot).toMatchObject({
      activeJourneyId: "book-flight",
      activeStateIds: ["confirmPassenger"],
      journeyContext: {
        selectedFlightId: "CL101",
      },
    });
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
      widgetKind: "choice",
      output: { selectedId: "cl204" },
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
        data: expect.objectContaining({
          input: expect.objectContaining({
            message: expect.stringContaining("Flight: CL204"),
          }),
        }),
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
      widgetKind: "choice",
      output: { selectedId: "CL102" },
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

  it("allows verbally confirmed mocked bookings in the voice channel policy", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime({ channels: flightDemoRuntimeChannels });
    const started = await runtime.startVoiceConversation({ agentId, context: {} });
    const voiceTurn = (text: string) => runtime.handleVoiceUserMessage({
      conversationId: started.conversation.id,
      channelSegmentId: started.channelSegment.id,
      connectionId: started.connection.id,
      text,
    });

    await voiceTurn("Find flights from Vienna to Berlin tomorrow for Alex Morgan.");
    await voiceTurn("Select CL102.");
    await voiceTurn("Yes, please create the mocked booking now.");

    const events = await runtime.listEvents(started.conversation.id);
    expect(findSuccessfulTool(events, "bookFlight")?.data.result).toEqual({ bookingReference: "CD-CL102-4821" });
    expect(events.some((event) => (
      event.type === "tool.completed"
      && event.data.toolName === "bookFlight"
      && !event.data.success
      && event.data.policyBlock?.code === "missing-policy"
    ))).toBe(false);
    expect(events.map((event) => event.type)).toContain("journey.completed");
    expect(events.some((event) => event.type === "ui.prompted")).toBe(false);
  });

  it("does not ask for booking confirmation again after a confirmed booking follow-up", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin tomorrow.",
    });
    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "field:book-flight:selectFlight:selectedFlightId",
      widgetKind: "choice",
      output: { selectedId: "CL102" },
    });
    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "field:book-flight:confirmPassenger:passengerName",
      widgetKind: "text-input",
      output: { value: "Philipp" },
    });
    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm:book-flight:book:bookFlight",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });
    await runtime.emitIntermediateMessage({
      conversationId: conversation.id,
      text: "Mock booking confirmed. Booking reference: CD-CL102-4821.",
      visibleToModel: true,
    });

    const followUp = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "cool",
    });

    expect(followUp.text.toLowerCase()).toContain("already confirmed");
    expect(followUp.text).not.toMatch(/please confirm|confirm the booking/i);
    expect(openPrompts(await runtime.listEvents(conversation.id))).toEqual([]);
  });

  it("keeps the booking confirmation available when the customer clicks not now", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin tomorrow.",
    });
    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "field:book-flight:selectFlight:selectedFlightId",
      widgetKind: "choice",
      output: { selectedId: "CL102" },
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
      output: { confirmed: false },
    });

    const events = await runtime.listEvents(conversation.id);
    expect(findSuccessfulTool(events, "bookFlight")).toBeUndefined();
    expect(openPrompts(events)).toEqual([
      expect.objectContaining({
        promptId: "confirm:book-flight:book:bookFlight",
        widgetKind: "confirmation",
      }),
    ]);
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

  it("triages delayed baggage claims without turning the booking reference into ticket status", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime();
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "My checked bag did not arrive in Vienna after flight CL204.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.activeJourneyId).toBe("baggage-service");
    expect(findSuccessfulTool(events, "getTicketStatus")).toBeUndefined();
    expect(findSuccessfulTool(events, "bookFlight")).toBeUndefined();
    expect(result.text).toMatch(/delayed|lost|damaged|baggage|handoff/i);
    expect(openPrompts(events)).toEqual([]);
  });

  it.each([
    {
      name: "all off",
      flags: false,
      expectedJourneys: [],
      expectedTools: [],
    },
    {
      name: "secure email only",
      flags: { secureEmail: true, discordHandoff: false, whatsapp: false },
      expectedJourneys: ["secure-email-login"],
      expectedTools: [],
    },
    {
      name: "WhatsApp only",
      flags: { secureEmail: false, discordHandoff: false, whatsapp: true },
      expectedJourneys: ["whatsapp-customer-message"],
      expectedTools: ["sendWhatsAppCustomerMessage"],
    },
    {
      name: "Discord handoff only",
      flags: { secureEmail: false, discordHandoff: true, whatsapp: false },
      expectedJourneys: ["human-handoff"],
      expectedTools: [],
    },
  ] satisfies Array<{
    name: string;
    flags: FlightDemoExternalIntegrationJourneyOption;
    expectedJourneys: string[];
    expectedTools: string[];
  }>)("registers external integration journeys individually: $name", async ({ flags, expectedJourneys, expectedTools }) => {
    const models = createTestModelSet();
    const knowledgeIndex = await createTestKnowledgeIndex(models);
    const { agent, journeyIndex } = await createFlightDemoRuntimeParts({
      config: testConfig,
      externalIntegrationJourneysEnabled: flags,
      models,
      knowledgeIndex,
    });
    const journeyIds = agent.journeys.map((journey) => journey.id);
    const indexedJourneyIds = journeyIndex.entries.map((entry) => entry.journeyId);
    const toolNames = agent.tools.map((tool) => tool.name);

    expect(journeyIds).toEqual(expect.arrayContaining([
      "baggage-service",
      "book-flight",
      "ticket-status",
    ]));
    for (const journeyId of ["secure-email-login", "whatsapp-customer-message", "human-handoff"]) {
      if (expectedJourneys.includes(journeyId)) {
        expect(journeyIds).toContain(journeyId);
        expect(indexedJourneyIds).toContain(journeyId);
      } else {
        expect(journeyIds).not.toContain(journeyId);
        expect(indexedJourneyIds).not.toContain(journeyId);
      }
    }
    for (const toolName of ["sendWhatsAppCustomerMessage"]) {
      if (expectedTools.includes(toolName)) {
        expect(toolNames).toContain(toolName);
      } else {
        expect(toolNames).not.toContain(toolName);
      }
    }
  });

  it("routes account-protected requests into secure email login and collects safe contact details", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime({
      externalIntegrationJourneysEnabled: { secureEmail: true, discordHandoff: false, whatsapp: false },
    });
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need to change the passenger name on my booking.",
    });
    const prompts = openPrompts(await runtime.listEvents(conversation.id));

    expect(result.activeJourneyId).toBe("secure-email-login");
    expect(result.snapshot.activeStateIds).toEqual(["collectSecureContact"]);
    expect(findSuccessfulTool(await runtime.listEvents(conversation.id), "getTicketStatus")).toBeUndefined();
    expect(prompts).toEqual([
      expect.objectContaining({
        promptId: "fields:secure-email-login:collectSecureContact",
        widgetKind: "form",
        data: expect.objectContaining({
          input: expect.objectContaining({
            fields: [
              expect.objectContaining({ path: "bookingReference", label: "Booking reference", type: "text" }),
              expect.objectContaining({ path: "accountEmail", label: "Account email", type: "email" }),
            ],
          }),
        }),
      }),
    ]);
  });

  it("completes secure email login preparation when booking reference and account email are known", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime({
      externalIntegrationJourneysEnabled: { secureEmail: true, discordHandoff: false, whatsapp: false },
    });
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Send my boarding pass to my email for booking CD-CL102-4821. My account email is alex@example.com.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(events.some((event) =>
      event.type === "journey.activated" && event.data.journeyId === "secure-email-login"
    )).toBe(true);
    expect(events.some((event) =>
      event.type === "journey.completed" && event.data.journeyId === "secure-email-login"
    )).toBe(true);
    expect(result.snapshot).toMatchObject({
      activeStateIds: [],
    });
    expect(events.some((event) =>
      event.type === "journey.extraction.accepted"
      && event.data.journeyId === "secure-email-login"
      && event.data.fields.includes("bookingReference")
      && event.data.fields.includes("accountEmail")
    )).toBe(true);
    expect(openPrompts(events)).toEqual([]);
    expect(findSuccessfulTool(events, "getTicketStatus")).toBeUndefined();
    expect(result.text).toMatch(/secure email login|sign-in link|continue.*email/i);
  });

  it("routes refund-status requests through secure email without refunding or cancelling in chat", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime({
      externalIntegrationJourneysEnabled: { secureEmail: true, discordHandoff: false, whatsapp: false },
    });
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "What is the refund status for booking CD-CL204-4821?",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.activeJourneyId).toBe("secure-email-login");
    expect(result.snapshot.activeStateIds).toEqual(["collectSecureContact"]);
    expect(result.snapshot.journeyContext).toMatchObject({
      bookingReference: "CD-CL204-4821",
      requestType: "refund status request",
    });
    expect(findSuccessfulTool(events, "bookFlight")).toBeUndefined();
    expect(findSuccessfulTool(events, "getTicketStatus")).toBeUndefined();
    expect(openPrompts(events)).toEqual([
      expect.objectContaining({
        promptId: "field:secure-email-login:collectSecureContact:accountEmail",
        widgetKind: "text-input",
      }),
    ]);
    expect(result.text).not.toMatch(/refunded|cancelled|canceled|completed/i);
  });

  it("sends WhatsApp verification links only after explicit confirmation", async () => {
    const sentMessages: FlightWhatsAppCustomerMessageSendInput[] = [];
    const tools = createFlightTools({
      whatsapp: {
        confirmationBaseUrl: "https://auth.example.test/whatsapp",
        sender: {
          async send(input) {
            sentMessages.push(input);
            return { status: "sent", messageId: "wamid.test-1" };
          },
        },
      },
    });
    const { runtime, agentId } = await setupFlightDemoRuntime({
      externalIntegrationJourneysEnabled: { secureEmail: false, discordHandoff: false, whatsapp: true },
      tools,
    });
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Send a WhatsApp verification link for booking CD-CL102-4821 to +15550100.",
    });
    const beforeConfirmEvents = await runtime.listEvents(conversation.id);

    expect(result.activeJourneyId).toBe("whatsapp-customer-message");
    expect(result.snapshot).toMatchObject({
      activeStateIds: ["sendWhatsAppMessage"],
      journeyContext: {
        recipientPhone: "+15550100",
        messagePurpose: "verification-link",
        bookingReference: "CD-CL102-4821",
      },
    });
    expect(sentMessages).toEqual([]);
    expect(openPrompts(beforeConfirmEvents)).toEqual([
      expect.objectContaining({
        promptId: "confirm:whatsapp-customer-message:sendWhatsAppMessage:sendWhatsAppCustomerMessage",
        widgetKind: "confirmation",
      }),
    ]);

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm:whatsapp-customer-message:sendWhatsAppMessage:sendWhatsAppCustomerMessage",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });
    const events = await runtime.listEvents(conversation.id);
    const toolEvent = findSuccessfulTool(events, "sendWhatsAppCustomerMessage");

    expect(sentMessages).toEqual([
      expect.objectContaining({
        to: "15550100",
        purpose: "verification-link",
        previewUrl: true,
        customerPhone: "15550100",
        recipientOverridden: false,
      }),
    ]);
    expect(sentMessages[0]?.body).toContain("https://auth.example.test/whatsapp/verify/");
    expect(sentMessages[0]?.body).toContain("CD-CL102-4821");
    expect(sentMessages[0]?.body).toContain("Do not share passwords");
    expect(toolEvent?.data.result).toMatchObject({
      provider: "whatsapp",
      status: "sent",
      purpose: "verification-link",
      recipientPhone: "+155...0100",
      messageId: "wamid.test-1",
    });
    expect(events.map((event) => event.type)).toContain("journey.completed");
  });

  it("sends WhatsApp airline notifications with a support-specific request label", async () => {
    const sentMessages: FlightWhatsAppCustomerMessageSendInput[] = [];
    const tools = createFlightTools({
      whatsapp: {
        confirmationBaseUrl: "https://auth.example.test/whatsapp",
        sender: {
          async send(input) {
            sentMessages.push(input);
            return { status: "sent", messageId: "wamid.gate-change" };
          },
        },
      },
    });
    const { runtime, agentId } = await setupFlightDemoRuntime({
      externalIntegrationJourneysEnabled: { secureEmail: false, discordHandoff: false, whatsapp: true },
      tools,
    });
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Send a WhatsApp notification to +15550100 that gate changed for booking CD-CL204-4821.",
    });

    expect(result.activeJourneyId).toBe("whatsapp-customer-message");
    expect(result.snapshot).toMatchObject({
      activeStateIds: ["sendWhatsAppMessage"],
      journeyContext: {
        recipientPhone: "+15550100",
        messagePurpose: "notification",
        bookingReference: "CD-CL204-4821",
        requestLabel: "gate-change notification",
      },
    });
    expect(sentMessages).toEqual([]);

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm:whatsapp-customer-message:sendWhatsAppMessage:sendWhatsAppCustomerMessage",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });
    const events = await runtime.listEvents(conversation.id);
    const toolEvent = findSuccessfulTool(events, "sendWhatsAppCustomerMessage");

    expect(sentMessages).toEqual([
      expect.objectContaining({
        to: "15550100",
        purpose: "notification",
        body: expect.stringContaining("gate-change notification"),
      }),
    ]);
    expect(toolEvent?.data.result).toMatchObject({
      provider: "whatsapp",
      status: "sent",
      purpose: "notification",
      messageId: "wamid.gate-change",
    });
  });

  it("routes upset customers asking for a person into the handoff journey", async () => {
    const { runtime, agentId } = await setupFlightDemoRuntime({
      externalIntegrationJourneysEnabled: { secureEmail: false, discordHandoff: true, whatsapp: false },
    });
    const conversation = await runtime.createConversation({ agentId, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "My flight was cancelled and I need to talk to a human.",
    });

    expect(result.activeJourneyId).toBe("human-handoff");
    expect(result.text.toLowerCase()).toContain("human");
  });

  it("normalizes spoken flight numbers before looking up flight status", async () => {
    await expect(flightTools.getFlightInfo.execute({
      input: { flightNumber: "CL 204" },
      app: {},
      conversationId: "test-conversation",
      telemetry: createTelemetryContext({}),
      signal: new AbortController().signal,
    })).resolves.toMatchObject({
      id: "CL204",
    });
  });
});

async function setupFlightDemoRuntime(options: {
  channels?: typeof flightDemoRuntimeChannels;
  externalIntegrationJourneysEnabled?: FlightDemoExternalIntegrationJourneyOption;
  tools?: FlightTools;
} = {}): Promise<FlightDemoTestRuntime> {
  const models = createTestModelSet();
  const knowledgeIndex = await createTestKnowledgeIndex(models);
  const { agent, journeyIndex } = await createFlightDemoRuntimeParts({
    config: testConfig,
    ...(options.externalIntegrationJourneysEnabled === undefined
      ? {}
      : { externalIntegrationJourneysEnabled: options.externalIntegrationJourneysEnabled }),
    models,
    knowledgeIndex,
    ...(options.tools ? { tools: options.tools } : {}),
  });
  const runtime = createRuntime({
    storage: createSqliteStorage({ filename: ":memory:" }),
    agent,
    models,
    journeyIndex,
    ...(options.channels ? { channels: options.channels } : {}),
    topKJourneys: 3,
    streaming: {
      syntheticDeltas: true,
    },
  });
  await runtime.initialize();
  return { runtime, agentId: agent.id };
}

function openPrompts(events: RuntimeEvent[]) {
  const latestByPrompt = new Map<string, RuntimeEvent>();
  for (const event of events) {
    if (event.type === "ui.prompted" || event.type === "ui.submitted") latestByPrompt.set(event.data.promptId, event);
  }
  return [...latestByPrompt.values()]
    .filter((event): event is Extract<RuntimeEvent, { type: "ui.prompted" }> => event.type === "ui.prompted")
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
