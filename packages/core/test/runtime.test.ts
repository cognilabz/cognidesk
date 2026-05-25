import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  buildJourneyIndex,
  createAgent,
  createRuntime,
  knowledgeSource,
  tool,
} from "../src/index.js";
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

    expect(result.snapshot.activeStateIds).toEqual(["completed"]);
    expect(result.snapshot.journeyContext).toEqual({
      origin: "Vienna",
      destination: "Berlin",
      flightCount: 1,
    });
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
      "message.started",
      "message.completed",
    ]);
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
