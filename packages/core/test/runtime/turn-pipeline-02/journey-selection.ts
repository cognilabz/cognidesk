import {
  buildJourneyIndex,
  createAgent,
  createModels,
  createRuntime,
  expect,
  it,
  RecordingStorage,
  vectorForMatcherTest,
  z,
} from "./helpers.js";

export function registerJourneySelectionTests() {
  it("lets the matcher rank only retrieved journey candidates", async () => {
    let matcherPrompt = "";
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const context = z.object({ bookingReference: z.string().optional() });
    const ticket = agentBuilder.stateMachineJourney("journey_primary", {
      condition: "Customer wants ticket status information",
      priority: 20,
      context,
    });
    ticket.initial(ticket.state("state_primary"));
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
    expect(matcherPrompt).toContain("journeyId: journey_primary");
    expect(matcherPrompt).toContain("journeyId: refund-status");
    expect(matcherPrompt).not.toContain("journeyId: book-flight");
    const matched = (await runtime.listEvents(conversation.id)).find((event) => event.type === "journey.matched");
    expect(matched?.data.candidates).toEqual([{
      journeyId: "refund-status",
      confidence: 0.91,
      reason: "The user asks about a refund.",
    }]);
  });

  it("does not activate a journey disabled by the configured channel flow policy", async () => {
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const context = z.object({ bookingReference: z.string().optional() });
    const booking = agentBuilder.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context,
    });
    booking.initial(booking.state("collectBooking"));
    const ticket = agentBuilder.stateMachineJourney("journey_primary", {
      condition: "Customer wants ticket status information",
      always: true,
      context,
    });
    ticket.initial(ticket.state("state_primary"));

    const agent = agentBuilder.compile();
    const models = createModels({
      matcher: {
        provider: "test",
        model: "matcher",
        generateText: async () => {
          const structured = {
            candidates: [
              { journeyId: "book-flight", confidence: 0.95, reason: "The user asks to book a flight." },
              { journeyId: "journey_primary", confidence: 0.4, reason: "Fallback support flow." },
            ],
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
      channels: [{
        id: "sms-support",
        channel: "sms",
        enabled: true,
        channelSetIds: [],
        providerPackageIds: [],
        enabledCapabilities: ["receive", "send"],
        flowActivations: [{
          journeyId: "book-flight",
          enabled: false,
          providerPackageIds: [],
          policyIds: [],
          reason: "Booking flow requires richer selection UI than SMS.",
        }],
        policies: {},
      }],
    });
    const conversation = await runtime.createConversation({
      agentId: agent.id,
      context: {},
      channel: { channelId: "sms-support", kind: "sms" },
    });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I want to book a flight.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.activeJourneyId).toBe("journey_primary");
    expect(events.find((event) => event.type === "journey.activated")?.data.journeyId).toBe("journey_primary");
    expect(events.find((event) => event.type === "custom.channel.flow.disabled")).toMatchObject({
      data: {
        journeyId: "book-flight",
        channelPolicyId: "sms-support",
        reason: "Booking flow requires richer selection UI than SMS.",
      },
    });
  });

  it("does not apply an unrelated same-kind concrete channel flow policy", async () => {
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const context = z.object({ bookingReference: z.string().optional() });
    const booking = agentBuilder.stateMachineJourney("book-flight", {
      condition: "Customer wants to book a flight",
      context,
    });
    booking.initial(booking.state("collectBooking"));
    const ticket = agentBuilder.stateMachineJourney("journey_primary", {
      condition: "Customer wants ticket status information",
      always: true,
      context,
    });
    ticket.initial(ticket.state("state_primary"));

    const agent = agentBuilder.compile();
    const models = createModels({
      matcher: {
        provider: "test",
        model: "matcher",
        generateText: async () => {
          const structured = {
            candidates: [
              { journeyId: "book-flight", confidence: 0.95, reason: "The user asks to book a flight." },
              { journeyId: "journey_primary", confidence: 0.4, reason: "Fallback support flow." },
            ],
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
      channels: [{
        id: "sms-support",
        channel: "sms",
        enabled: true,
        channelSetIds: [],
        providerPackageIds: [],
        enabledCapabilities: ["receive", "send"],
        flowActivations: [{
          journeyId: "book-flight",
          enabled: false,
          providerPackageIds: [],
          policyIds: [],
          reason: "Booking flow requires richer selection UI than SMS.",
        }],
        policies: {},
      }],
    });
    const conversation = await runtime.createConversation({
      agentId: agent.id,
      context: {},
      channel: { channelId: "sms-billing", kind: "sms" },
    });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I want to book a flight.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.activeJourneyId).toBe("book-flight");
    expect(events.find((event) => event.type === "custom.channel.flow.disabled")).toBeUndefined();
  });

  it("passes the full conversation transcript to the journey matcher", async () => {
    let matcherPrompt = "";
    let responseCount = 0;
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    const ticket = agentBuilder.stateMachineJourney("journey_primary", {
      condition: "Customer wants ticket status information",
      context: z.object({ bookingReference: z.string().optional() }),
    });
    ticket.initial(ticket.state("state_primary"));

    const agent = agentBuilder.compile();
    const models = createModels({
      matcher: {
        provider: "test",
        model: "matcher",
        generateText: async ({ messages }) => {
          matcherPrompt = messages.map((message) => message.content).join("\n");
          const structured = {
            candidates: [{ journeyId: "journey_primary", confidence: 0.9 }],
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
}
