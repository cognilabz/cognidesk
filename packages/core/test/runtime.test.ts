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
} from "../src/index.js";
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
} from "../src/index.js";

describe("runtime turn pipeline", () => {
  it("routes a user message, retrieves knowledge, calls the response model, and stores a snapshot", async () => {
    const knowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "faq-ticket-status",
          title: "Ticket status",
          content: "Ticket status is available with the booking reference.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.knowledge.add(knowledge);
    const status = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status information",
      context: z.object({ bookingReference: z.string().optional() }),
    });
    const identify = status.state("identifyTicket").collect("bookingReference");
    status.initial(identify);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const storage = new RecordingStorage();
    const runtime = createRuntime({ storage, agent, models, journeyIndex });

    const conversation = await runtime.createConversation({
      agentId: agent.id,
      context: {},
    });
    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you check ticket ABC123?",
    });

    expect(result.activeJourneyId).toBe("ticket-status");
    expect(result.text).toContain("faq-ticket-status");
    expect(result.snapshot.activeStateIds).toEqual(["identifyTicket"]);
    const events = await runtime.listEvents(conversation.id);
    expect(events.map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "journey.candidates.retrieved",
      "journey.matched",
      "journey.activated",
      "journey.state.entered",
      "journey.extraction.proposed",
      "journey.extraction.accepted",
      "knowledge.retrieved",
      "message.started",
      "message.completed",
    ]);
    expect(result.snapshot.journeyContext).toEqual({ bookingReference: "ABC123" });
    expect(events.at(-1)?.data).toMatchObject({
      segments: [{
        id: "segment_1",
        text: "Use faq-ticket-status for the current ticket status.",
        references: [{ type: "knowledge", id: "faq-ticket-status" }],
      }],
    });
  });

  it("lets the matcher rank only retrieved journey candidates", async () => {
    let matcherPrompt = "";
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const context = z.object({ bookingReference: z.string().optional() });
    const ticket = agentBuilder.stateMachineJourney("ticket-status", {
      condition: "Customer wants ticket status information",
      priority: 20,
      context,
    });
    ticket.initial(ticket.state("identifyTicket"));
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
    expect(matcherPrompt).toContain("journeyId: ticket-status");
    expect(matcherPrompt).toContain("journeyId: refund-status");
    expect(matcherPrompt).not.toContain("journeyId: book-flight");
    const matched = (await runtime.listEvents(conversation.id)).find((event) => event.type === "journey.matched");
    expect(matched?.data.candidates).toEqual([{
      journeyId: "refund-status",
      confidence: 0.91,
      reason: "The user asks about a refund.",
    }]);
  });

  it("emits provider-neutral trace events without storing them as runtime events", async () => {
    const traces: TraceEvent[] = [];
    const searchFlights = tool("searchFlights", {
      input: z.object({ origin: z.string(), destination: z.string() }),
      output: z.object({ flights: z.array(z.object({ id: z.string() })) }),
      execute: async () => ({ flights: [{ id: "OS123" }] }),
    });
    const knowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "faq-routes",
          content: "Route searches need an origin and destination.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.knowledge.add(knowledge);
    const booking = agentBuilder.stateMachineJourney("book-flight", {
      condition: "Customer wants to search flights",
      context: z.object({
        origin: z.string().optional(),
        destination: z.string().optional(),
        flightCount: z.number().optional(),
      }),
    });
    const route = booking.state("route").collect("origin").collect("destination");
    const search = booking.state("search").runTool(searchFlights, {
      input: ({ context }) => ({
        origin: context.origin ?? "",
        destination: context.destination ?? "",
      }),
      assign: {
        flightCount: ({ output }) => output.flights.length,
      },
    });
    booking.initial(route);
    route.transitionTo(search);

    const agent = agentBuilder.compile();
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async () => ({
          text: "I found one route using faq-routes.",
          usage: { totalTokens: 12 },
        }),
      },
      extraction: {
        provider: "test",
        model: "extraction",
        generateText: async () => {
          const structured = { values: { origin: "Vienna", destination: "Berlin" } };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      journeyIndex,
      observability: {
        onTraceEvent: (event) => {
          traces.push(event);
        },
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin.",
    });

    expect(traces.map((event) => event.type)).toEqual(expect.arrayContaining([
      "runtime.event",
      "model.started",
      "model.completed",
      "tool.started",
      "tool.completed",
      "knowledge.retrieved",
    ]));
    expect(traces.some((event) => event.type === "model.completed" && event.role === "response" && event.usage?.totalTokens === 12)).toBe(true);
    expect(traces.some((event) => event.type === "tool.completed" && event.toolName === "searchFlights" && event.success)).toBe(true);
    expect((await runtime.listEvents(conversation.id)).some((event) => event.type === "custom.observability")).toBe(false);
  });

  it("ignores observability hook failures", async () => {
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
      observability: {
        onTraceEvent: () => {
          throw new Error("trace sink unavailable");
        },
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await expect(runtime.emitIntermediateMessage({
      conversationId: conversation.id,
      text: "Still working.",
    })).resolves.toMatchObject({
      events: [
        { type: "message.started" },
        { type: "message.completed" },
      ],
    });
  });

  it("includes the full conversation transcript in response model calls", async () => {
    const calls: TextGenerationInput[] = [];
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        calls.push(input);
        return { text: `Answer ${calls.length}` };
      },
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "First question.",
    });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Second question.",
    });

    expect(calls[1]?.messages.filter((message) => message.role !== "system")).toEqual([
      { role: "user", content: "First question." },
      { role: "assistant", content: "Answer 1" },
      { role: "user", content: "Second question." },
    ]);
  });

  it("includes compacted conversation memory in response model calls", async () => {
    let systemPrompt = "";
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        systemPrompt = input.messages.find((message) => message.role === "system")?.content ?? "";
        return { text: "Ready." };
      },
    };
    const storage = new RecordingStorage();
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage,
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await storage.saveSnapshot({
      conversationId: conversation.id,
      lifecycle: "active",
      activeStateIds: [],
      compactionSummary: {
        summary: "Customer already shared booking ABC123.",
        stableFacts: ["Booking ABC123"],
      },
      updatedAt: new Date().toISOString(),
    });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Can you continue?",
    });

    expect(systemPrompt).toContain("Conversation memory:");
    expect(systemPrompt).toContain("Customer already shared booking ABC123.");
  });

  it("interrupts an active generation when a new user message arrives by default", async () => {
    const firstResponseStarted = deferred<void>();
    let responseCalls = 0;
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        if (input.role !== "response") return { text: "{}" };
        responseCalls += 1;
        if (responseCalls === 1) {
          firstResponseStarted.resolve();
          await new Promise((_resolve, reject) => {
            input.signal?.addEventListener("abort", () => reject(new AbortError()), { once: true });
          });
        }
        return { text: "Second answer." };
      },
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const first = runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "First question.",
    });
    await firstResponseStarted.promise;
    const second = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Second question.",
    });
    const firstResult = await first;
    const events = await runtime.listEvents(conversation.id);

    expect(firstResult.text).toBe("");
    expect(firstResult.events.map((event) => event.type)).toContain("message.aborted");
    expect(second.events[0]).toMatchObject({
      type: "message.aborted",
      data: { reason: "interrupted_by_new_message" },
    });
    expect(events.map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "message.aborted",
      "message.started",
      "message.completed",
      "message.started",
      "message.completed",
    ]);
  });

  it("can opt out of interrupting active generations at the agent level", async () => {
    const firstResponseStarted = deferred<void>();
    const releaseFirstResponse = deferred<void>();
    let firstSignal: AbortSignal | undefined;
    let responseCalls = 0;
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        if (input.role !== "response") return { text: "{}" };
        responseCalls += 1;
        if (responseCalls === 1) {
          firstSignal = input.signal;
          firstResponseStarted.resolve();
          await releaseFirstResponse.promise;
          return { text: "First answer." };
        }
        return { text: "Second answer." };
      },
    };
    const agent = createAgent("flight-service", {
      instructions: "Help customers with flights.",
      behavior: { interruptOnNewMessage: false },
    }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const first = runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "First question.",
    });
    await firstResponseStarted.promise;
    const second = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Second question.",
    });
    releaseFirstResponse.resolve();
    const firstResult = await first;
    const events = await runtime.listEvents(conversation.id);

    expect(firstSignal?.aborted).toBe(false);
    expect(firstResult.text).toBe("First answer.");
    expect(second.text).toBe("Second answer.");
    expect(events.map((event) => event.type)).not.toContain("message.aborted");
  });

  it("executes base agent tools requested by the response model", async () => {
    const getTicketStatus = tool("getTicketStatus", {
      description: "Get mocked ticket status.",
      input: z.object({ bookingReference: z.string() }),
      output: z.object({ status: z.string() }),
      execute: async ({ input }) => ({ status: `${input.bookingReference}:confirmed` }),
    });
    const calls: TextGenerationInput[] = [];
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        calls.push(input);
        if (calls.length === 1) {
          return {
            text: "",
            toolCalls: [{
              id: "call_1",
              name: "getTicketStatus",
              input: { bookingReference: "ABC123" },
            }],
          };
        }
        return { text: `Tool said ${input.messages.at(-1)?.content}` };
      },
    };
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(getTicketStatus);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "What is ticket ABC123 doing?",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(calls[0]?.tools?.map((toolDefinition) => toolDefinition.name)).toEqual(["getTicketStatus"]);
    expect(calls[1]?.messages).toContainEqual(expect.objectContaining({
      role: "tool",
      name: "getTicketStatus",
      toolCallId: "call_1",
      content: JSON.stringify({ status: "ABC123:confirmed" }),
    }));
    expect(result.text).toContain("ABC123:confirmed");
    expect(events.map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "tool.started",
      "tool.completed",
      "message.started",
      "message.completed",
    ]);
  });

  it("exposes active state-scoped tools and knowledge to the response turn", async () => {
    const getSeatMap = tool("getSeatMap", {
      description: "Get the available seat map.",
      input: z.object({}),
      output: z.object({ seats: z.array(z.string()) }),
      execute: async () => ({ seats: ["12A"] }),
    });
    const stateFaq = knowledgeSource("seat-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "seat-map",
          content: "Seat 12A is a window seat near the front.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const responseCalls: TextGenerationInput[] = [];
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    const seating = agentBuilder.stateMachineJourney("seat-selection", {
      condition: "Customer wants help selecting a seat",
      context: z.object({}),
    });
    const parent = seating.state("seatSupport");
    parent.tools.add(getSeatMap);
    const selectSeat = parent.state("selectSeat").instructions("Use seat-specific support context.");
    selectSeat.knowledge.add(stateFaq);
    seating.initial(selectSeat);

    const agent = agentBuilder.compile();
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async (input: TextGenerationInput) => {
          responseCalls.push(input);
          return { text: "Seat 12A is available using seat-map." };
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
      text: "Can you help me pick a seat?",
    });

    const responseCall = responseCalls.at(-1);
    const systemPrompt = responseCall?.messages.find((message) => message.role === "system")?.content ?? "";
    expect(responseCall?.tools?.map((toolDefinition) => toolDefinition.name)).toEqual(["getSeatMap"]);
    expect(systemPrompt).toContain("State selectSeat instructions: Use seat-specific support context.");
    expect(systemPrompt).toContain("[K1:seat-map]");
    expect((await runtime.listEvents(conversation.id)).find((event) => event.type === "knowledge.retrieved")).toMatchObject({
      data: {
        sourceName: "seat-faq",
        itemIds: ["seat-map"],
      },
    });
  });

  it("executes typed state actions on entry, transition, and exit", async () => {
    const executed: string[] = [];
    const recordAction = action("recordAction", {
      input: z.object({ label: z.string() }),
      run: ({ input }) => {
        executed.push(input.label);
      },
    });
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    const journey = agentBuilder.stateMachineJourney("action-test", {
      condition: "Customer triggers a deterministic action test",
      context: z.object({}),
    });
    const start = journey.state("start")
      .useAction(recordAction, {
        type: "entry",
        input: () => ({ label: "entry:start" }),
      })
      .useAction(recordAction, {
        type: "transition",
        input: () => ({ label: "transition:start" }),
      })
      .useAction(recordAction, {
        type: "exit",
        input: () => ({ label: "exit:start" }),
      });
    const done = journey.final("done")
      .useAction(recordAction, {
        type: "entry",
        input: () => ({ label: "entry:done" }),
      });
    journey.initial(start);
    start.transitionTo(done);

    const agent = agentBuilder.compile();
    const models = createModels();
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
      text: "Run the deterministic action test.",
    });

    expect(executed).toEqual([
      "entry:start",
      "transition:start",
      "exit:start",
      "entry:done",
    ]);
    const actionEvents = (await runtime.listEvents(conversation.id)).filter((event) => event.type.startsWith("action."));
    expect(actionEvents.map((event) => event.type)).toEqual([
      "action.started",
      "action.completed",
      "action.started",
      "action.completed",
      "action.started",
      "action.completed",
      "action.started",
      "action.completed",
    ]);
    expect(actionEvents.filter((event) => event.type === "action.completed").map((event) => event.data)).toEqual([
      { actionName: "recordAction", success: true, journeyId: "action-test", stateId: "start" },
      { actionName: "recordAction", success: true, journeyId: "action-test", stateId: "start" },
      { actionName: "recordAction", success: true, journeyId: "action-test", stateId: "start" },
      { actionName: "recordAction", success: true, journeyId: "action-test", stateId: "done" },
    ]);
  });

  it("retries retryable model-requested tools and emits an intermediate notice", async () => {
    let attempts = 0;
    const getTicketStatus = tool("getTicketStatus", {
      description: "Get mocked ticket status.",
      input: z.object({ bookingReference: z.string() }),
      output: z.object({ status: z.string() }),
      execute: async ({ input }) => {
        attempts += 1;
        if (attempts === 1) throw new Error("temporary outage");
        return { status: `${input.bookingReference}:confirmed` };
      },
    });
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        if (!input.messages.some((message) => message.role === "tool")) {
          return {
            text: "",
            toolCalls: [{
              id: "call_1",
              name: "getTicketStatus",
              input: { bookingReference: "ABC123" },
            }],
          };
        }
        return { text: "Recovered." };
      },
    };
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(getTicketStatus);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "What is ticket ABC123 doing?",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(attempts).toBe(2);
    expect(events.map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "tool.started",
      "message.started",
      "message.completed",
      "tool.completed",
      "message.started",
      "message.completed",
    ]);
    expect(events[5]).toMatchObject({
      type: "message.completed",
      data: { intermediate: true },
    });
  });

  it("does not retry side-effect tools without an idempotency key", async () => {
    let attempts = 0;
    const chargeCard = tool("chargeCard", {
      input: z.object({ amount: z.number() }),
      output: z.object({ charged: z.boolean() }),
      sideEffect: true,
      execute: async () => {
        attempts += 1;
        throw new Error("processor unavailable");
      },
    });
    const response = {
      provider: "test",
      model: "response",
      generateText: async (input: TextGenerationInput) => {
        if (!input.messages.some((message) => message.role === "tool")) {
          return {
            text: "",
            toolCalls: [{
              id: "call_charge",
              name: "chargeCard",
              input: { amount: 10 },
            }],
          };
        }
        return { text: "Could not charge." };
      },
    };
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(chargeCard);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Charge me.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(attempts).toBe(1);
    expect(events.filter((event) => (
      event.type === "message.completed" && event.data.intermediate
    ))).toHaveLength(0);
    expect(events.filter((event) => event.type === "tool.completed").at(0)).toMatchObject({
      data: {
        success: false,
        error: "processor unavailable",
      },
    });
  });

  it("applies built-in lifecycle tools requested by the response model", async () => {
    const response = {
      provider: "test",
      model: "response",
      generateText: async () => ({
        text: "",
        toolCalls: [{
          id: "call_handoff",
          name: "cognidesk.handoff",
          input: {
            reason: "customer requested a person",
            summary: "Customer wants human support.",
          },
        }],
      }),
    };
    const agentBuilder = createAgent("flight-service", { instructions: "Help customers with flights." });
    agentBuilder.tools.add(handoffTool);
    const agent = agentBuilder.compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels({ response }),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need a person.",
    });

    expect(result.text).toBe("");
    expect(result.conversation.lifecycle).toBe("handoff");
    expect(result.events.map((event) => event.type)).toEqual([
      "message.started",
      "message.completed",
      "tool.started",
      "tool.completed",
      "handoff.requested",
    ]);
  });

  it("can disable citation post-processing when knowledge is used", async () => {
    const knowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "faq-ticket-status",
          content: "Ticket status is available with the booking reference.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.knowledge.add(knowledge);
    const agent = agentBuilder.compile();
    const models = createModels({
      citationPostProcessing: {
        provider: "test",
        model: "citation",
        generateText: async () => {
          throw new Error("Citation post-processing should be disabled.");
        },
      },
    });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      postProcessing: { citations: false },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "How can I check a ticket?",
    });

    const events = await runtime.listEvents(conversation.id);
    expect(events.find((event) => event.type === "error")).toBeUndefined();
    expect(events.at(-1)?.data).toEqual({ text: "Use faq-ticket-status for the current ticket status." });
  });

  it("can disable citation post-processing on the agent definition", async () => {
    let citationCalls = 0;
    const knowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "faq-ticket-status",
          content: "Ticket status is available with the booking reference.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
      postProcessing: { citations: false },
    });
    agentBuilder.knowledge.add(knowledge);
    const agent = agentBuilder.compile();
    const models = createModels({
      citationPostProcessing: {
        provider: "test",
        model: "citation",
        generateText: async () => {
          citationCalls += 1;
          return { text: JSON.stringify({ segments: [] }), structured: { segments: [] } };
        },
      },
    });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "How can I check a ticket?",
    });

    const events = await runtime.listEvents(conversation.id);
    expect(citationCalls).toBe(0);
    expect(events.find((event) => event.type === "error")).toBeUndefined();
    expect(events.at(-1)?.data).toEqual({ text: "Use faq-ticket-status for the current ticket status." });
  });

  it("stores submitted widget output as a conversation event", async () => {
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const event = await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "prompt_1",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });

    expect(event.type).toBe("ui.submitted");
    expect((await runtime.listEvents(conversation.id)).at(-1)?.data).toEqual({
      promptId: "prompt_1",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });
  });

  it("emits programmatic intermediate assistant messages", async () => {
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: createModels(),
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.emitIntermediateMessage({
      conversationId: conversation.id,
      text: "I am checking that now.",
      traceId: "trace_1",
    });

    expect(result.events.map((event) => event.type)).toEqual(["message.started", "message.completed"]);
    expect(result.events[0]?.traceId).toBe("trace_1");
    expect(result.events[1]?.data).toEqual({
      text: "I am checking that now.",
      intermediate: true,
    });

    await runtime.closeConversation(conversation.id, "done");
    await expect(runtime.emitIntermediateMessage({
      conversationId: conversation.id,
      text: "This should not be emitted.",
    })).rejects.toThrow("is 'closed'");
  });

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
        message: "Confirm booking",
        confirmLabel: "Confirm",
        cancelLabel: "Cancel",
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

  it("closes the conversation when the confirmed built-in end tool runs", async () => {
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    const resolution = agentBuilder.stateMachineJourney("resolved", {
      condition: "Customer says the support case is resolved",
      context: z.object({}),
    });
    const close = resolution.state("close").runTool(endConversationTool, {
      confirm: { message: "End conversation" },
      input: () => ({ reason: "Resolved by customer" }),
    });
    resolution.initial(close);

    const agent = agentBuilder.compile();
    const models = createModels();
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "This is resolved, thanks.",
    });

    await runtime.submitWidget({
      conversationId: conversation.id,
      promptId: "confirm:resolved:close:cognidesk.endConversation",
      widgetKind: "confirmation",
      output: { confirmed: true },
    });

    const snapshot = await runtime.getSnapshot(conversation.id);
    const events = await runtime.listEvents(conversation.id);
    expect(snapshot?.lifecycle).toBe("closed");
    expect(events.map((event) => event.type)).toContain("conversation.closed");
    expect(events.at(-1)?.data).toEqual({ reason: "Resolved by customer" });
    await expect(runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "One more thing.",
    })).rejects.toThrow("is 'closed'");
  });

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

  it("completes delegation journeys when completion criteria are satisfied", async () => {
    let completionPrompt = "";
    const agentBuilder = createAgent("flight-service", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.delegationJourney("human-handoff", {
      condition: "Customer asks for a human specialist",
      specialist: {
        goal: "Collect a concise handoff summary and stop automated troubleshooting.",
        instructions: "Ask only for missing handoff details.",
      },
      completeWhen: ["booking reference is known", "issue summary is known"],
    });
    const agent = agentBuilder.compile();
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async () => ({ text: "I have the booking reference and issue summary ready." }),
      },
      matcher: {
        provider: "test",
        model: "matcher",
        generateText: async ({ messages }) => {
          const prompt = messages.map((message) => message.content).join("\n");
          if (prompt.includes("Rank only the provided candidate journeys")) {
            const structured = {
              candidates: [{ journeyId: "human-handoff", confidence: 0.9 }],
            };
            return { text: JSON.stringify(structured), structured };
          }
          completionPrompt = prompt;
          const structured = { complete: true, reason: "All handoff details are known." };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({ storage: new RecordingStorage(), agent, models, journeyIndex });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "I need a human for booking ABC123 because the ticket name is wrong.",
    });

    expect(result.activeJourneyId).toBeUndefined();
    expect(result.snapshot.activeJourneyId).toBeUndefined();
    expect(result.snapshot.activeStateIds).toEqual([]);
    expect(completionPrompt).toContain("Completion criteria: booking reference is known; issue summary is known");
    expect(completionPrompt).toContain("assistant: I have the booking reference and issue summary ready.");
    expect((await runtime.listEvents(conversation.id)).at(-1)).toMatchObject({
      type: "journey.completed",
      data: {
        journeyId: "human-handoff",
        reason: "All handoff details are known.",
      },
    });
  });

  it("applies privacy hooks before storage, model calls, and returned assistant text", async () => {
    let modelPrompt = "";
    const response = {
      provider: "test",
      model: "response",
      generateText: async ({ messages }: { messages: Array<{ content: string }> }) => {
        modelPrompt = messages.map((message) => message.content).join("\n");
        return { text: "Reach phil@example.com for details." };
      },
    };
    const embedding = {
      provider: "test",
      model: "embedding",
      generateText: response.generateText,
      embed: async () => ({ embedding: [0], model: "embedding", dimensions: 1 }),
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: {
        response,
        matcher: response,
        extraction: response,
        citationPostProcessing: response,
        journeyEmbedding: embedding,
        compaction: response,
      },
      privacy: {
        redactUserMessage: ({ text }) => text.replace("phil@example.com", "[email]"),
        redactModelMessages: ({ messages }) => messages.map((message) => ({
          ...message,
          content: message.content.replace("secret", "[secret]"),
        })),
        redactAssistantMessage: ({ text }) => text.replace("phil@example.com", "[email]"),
      },
    });

    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "My email is phil@example.com and the code is secret.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(events.find((event) => event.type === "message.completed")?.data).toEqual({
      text: "My email is [email] and the code is secret.",
    });
    expect(modelPrompt).toContain("[email]");
    expect(modelPrompt).toContain("[secret]");
    expect(result.text).toBe("Reach [email] for details.");
    expect(events.at(-1)?.data).toMatchObject({ text: "Reach [email] for details." });
  });

  it("compacts conversation events into the runtime snapshot", async () => {
    const response = {
      provider: "test",
      model: "response",
      generateText: async ({ role }: { role: string }) => {
        if (role === "compaction") {
          const structured = {
            summary: "Customer asked about ticket status.",
            stableFacts: ["Booking reference ABC123"],
            openQuestions: [],
            activeCommitments: ["Check ticket status"],
          };
          return { text: JSON.stringify(structured), structured };
        }
        return { text: "Ticket ABC123 is confirmed." };
      },
    };
    const embedding = {
      provider: "test",
      model: "embedding",
      generateText: response.generateText,
      embed: async () => ({ embedding: [0], model: "embedding", dimensions: 1 }),
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: {
        response,
        matcher: response,
        extraction: response,
        citationPostProcessing: response,
        journeyEmbedding: embedding,
        compaction: response,
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({ conversationId: conversation.id, text: "Status for ABC123?" });

    const result = await runtime.compactConversation({ conversationId: conversation.id });
    const snapshot = await runtime.getSnapshot(conversation.id);

    expect(result.summary.stableFacts).toEqual(["Booking reference ABC123"]);
    expect(snapshot?.compactionSummary).toEqual(result.summary);
    expect(result.events.map((event) => event.type)).toEqual([
      "conversation.compaction.started",
      "conversation.compaction.completed",
    ]);
  });

  it("supports custom compaction instructions and summary schema", async () => {
    let compactionPrompt = "";
    const customSummarySchema = z.object({
      handoffSummary: z.string(),
      riskLevel: z.enum(["low", "medium", "high"]),
    });
    const response = {
      provider: "test",
      model: "response",
      generateText: async ({ role, messages }: TextGenerationInput) => {
        if (role === "compaction") {
          compactionPrompt = messages.find((message) => message.role === "system")?.content ?? "";
          const structured = {
            handoffSummary: "Customer asked for a status check.",
            riskLevel: "low" as const,
          };
          return { text: JSON.stringify(structured), structured };
        }
        return { text: "Ticket ABC123 is confirmed." };
      },
    };
    const embedding = {
      provider: "test",
      model: "embedding",
      generateText: response.generateText,
      embed: async () => ({ embedding: [0], model: "embedding", dimensions: 1 }),
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: {
        response,
        matcher: response,
        extraction: response,
        citationPostProcessing: response,
        journeyEmbedding: embedding,
        compaction: response,
      },
      compaction: {
        instructions: "Create a handoff-focused support memory.",
        summarySchema: customSummarySchema,
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });
    await runtime.handleUserMessage({ conversationId: conversation.id, text: "Status for ABC123?" });

    const result = await runtime.compactConversation<z.infer<typeof customSummarySchema>>({
      conversationId: conversation.id,
    });

    expect(compactionPrompt).toBe("Create a handoff-focused support memory.");
    expect(result.summary.riskLevel).toBe("low");
    expect((await runtime.getSnapshot(conversation.id))?.compactionSummary).toEqual({
      handoffSummary: "Customer asked for a status check.",
      riskLevel: "low",
    });
  });

  it("can compact before processing the next user turn", async () => {
    const response = {
      provider: "test",
      model: "response",
      generateText: async ({ role }: { role: string }) => {
        if (role === "compaction") {
          const structured = {
            summary: "Previous conversation exists.",
            stableFacts: ["Conversation was created"],
            openQuestions: [],
            activeCommitments: [],
          };
          return { text: JSON.stringify(structured), structured };
        }
        return { text: "Ready after compaction." };
      },
    };
    const embedding = {
      provider: "test",
      model: "embedding",
      generateText: response.generateText,
      embed: async () => ({ embedding: [0], model: "embedding", dimensions: 1 }),
    };
    const agent = createAgent("flight-service", { instructions: "Help customers with flights." }).compile();
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models: {
        response,
        matcher: response,
        extraction: response,
        citationPostProcessing: response,
        journeyEmbedding: embedding,
        compaction: response,
      },
      compaction: {
        beforeTurn: true,
        minEvents: 1,
        schemaVersion: "test.compaction.v1",
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    const result = await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Hello.",
    });
    const events = await runtime.listEvents(conversation.id);

    expect(result.events.slice(0, 2).map((event) => event.type)).toEqual([
      "conversation.compaction.started",
      "conversation.compaction.completed",
    ]);
    expect(events.map((event) => event.type).slice(1, 5)).toEqual([
      "conversation.compaction.started",
      "conversation.compaction.completed",
      "message.started",
      "message.completed",
    ]);
    expect(await runtime.getSnapshot(conversation.id)).toMatchObject({
      compactionSummary: {
        summary: "Previous conversation exists.",
        stableFacts: ["Conversation was created"],
      },
    });
  });
});

function createModels(overrides: Partial<AgentModelSet> = {}): AgentModelSet {
  const response = {
    provider: "test",
    model: "response",
    generateText: async () => ({ text: "Use faq-ticket-status for the current ticket status." }),
  };
  const extraction = {
    provider: "test",
    model: "extraction",
    generateText: async (_input: TextGenerationInput) => {
      const structured = { values: { bookingReference: "ABC123" } };
      return { text: JSON.stringify(structured), structured };
    },
  };
  const citationPostProcessing = {
    provider: "test",
    model: "citation",
    generateText: async (_input: TextGenerationInput) => {
      const structured = {
        segments: [{
          text: "Use faq-ticket-status for the current ticket status.",
          knowledgeIds: ["faq-ticket-status"],
        }],
      };
      return { text: JSON.stringify(structured), structured };
    },
  };
  const embedding = {
    provider: "test",
    model: "embedding",
    generateText: async () => ({ text: "" }),
    embed: async ({ text }: { text: string }) => ({
      embedding: [text.toLowerCase().includes("ticket") ? 1 : 0],
      model: "embedding",
      dimensions: 1,
    }),
  };
  return {
    response,
    matcher: response,
    extraction,
    citationPostProcessing,
    journeyEmbedding: embedding,
    compaction: response,
    ...overrides,
  };
}

function vectorForMatcherTest(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes("book-flight") || lower.includes("book a flight")) return [0, 1];
  if (lower.includes("ticket-status")) return [1, 0];
  if (lower.includes("refund-status")) return [1, 0];
  if (lower.includes("refund")) return [1, 0];
  return [0, 0];
}

function deferred<T>() {
  let resolve!: (value: T | PromiseLike<T>) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });
  return { promise, resolve, reject };
}

class AbortError extends Error {
  constructor() {
    super("aborted");
    this.name = "AbortError";
  }
}

class RecordingStorage implements StorageAdapter {
  private conversations = new Map<string, ConversationRecord>();
  private snapshots = new Map<string, RuntimeSnapshot>();
  private events = new Map<string, RuntimeEvent[]>();

  async createConversation<TConversationContext = unknown>(
    input: CreateConversationInput<TConversationContext>,
  ): Promise<ConversationRecord<TConversationContext>> {
    const now = new Date().toISOString();
    const conversation = {
      id: input.id ?? "conversation_1",
      agentId: input.agentId,
      lifecycle: "active" as ConversationLifecycle,
      context: input.context,
      createdAt: now,
      updatedAt: now,
    };
    this.conversations.set(conversation.id, conversation as ConversationRecord);
    return conversation;
  }

  async getConversation<TConversationContext = unknown>(
    conversationId: string,
  ): Promise<ConversationRecord<TConversationContext> | null> {
    return (this.conversations.get(conversationId) as ConversationRecord<TConversationContext> | undefined) ?? null;
  }

  async updateConversationLifecycle(
    conversationId: string,
    lifecycle: ConversationLifecycle,
  ): Promise<ConversationRecord | null> {
    const current = this.conversations.get(conversationId);
    if (!current) return null;
    const updated = { ...current, lifecycle, updatedAt: new Date().toISOString() };
    this.conversations.set(conversationId, updated);
    return updated;
  }

  async appendEvent<TEvent extends RuntimeEventInput>(event: TEvent): Promise<RuntimeEvent> {
    const events = this.events.get(event.conversationId) ?? [];
    const stored = {
      ...event,
      id: event.id ?? `event_${events.length + 1}`,
      offset: events.length + 1,
      createdAt: event.createdAt ?? new Date().toISOString(),
    } as RuntimeEvent;
    events.push(stored);
    this.events.set(event.conversationId, events);
    return stored;
  }

  async listEvents(options: ListEventsOptions): Promise<RuntimeEvent[]> {
    return (this.events.get(options.conversationId) ?? [])
      .filter((event) => options.afterOffset === undefined || event.offset > options.afterOffset)
      .slice(0, options.limit);
  }

  async saveSnapshot(snapshot: RuntimeSnapshot): Promise<void> {
    this.snapshots.set(snapshot.conversationId, snapshot);
  }

  async getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
    return this.snapshots.get(conversationId) ?? null;
  }
}
