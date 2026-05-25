import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  buildJourneyIndex,
  createAgent,
  createRuntime,
  knowledgeSource,
} from "../src/index.js";
import type {
  AgentModelSet,
  ConversationLifecycle,
  ConversationRecord,
  CreateConversationInput,
  ListEventsOptions,
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
    expect((await runtime.listEvents(conversation.id)).map((event) => event.type)).toEqual([
      "custom.conversation.created",
      "message.started",
      "message.completed",
      "journey.candidates.retrieved",
      "journey.matched",
      "journey.activated",
      "journey.state.entered",
      "knowledge.retrieved",
      "message.started",
      "message.completed",
    ]);
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
});

function createModels(): AgentModelSet {
  const response = {
    provider: "test",
    model: "response",
    generateText: async () => ({ text: "Use faq-ticket-status for the current ticket status." }),
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
    extraction: response,
    citationPostProcessing: response,
    journeyEmbedding: embedding,
    compaction: response,
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
