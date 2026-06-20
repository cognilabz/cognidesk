import type {
  AgentModelSet,
  ConversationLifecycle,
  ConversationRecord,
  CreateConversationInput,
  ListConversationsOptions,
  ListEventsOptions,
  TextGenerationInput,
  RuntimeEvent,
  RuntimeEventInput,
  RuntimeSnapshot,
  StorageAdapter,
} from "../../src/index.js";
import { defineChannelContext } from "../../src/index.js";

export function createModels(overrides: Partial<AgentModelSet> = {}): AgentModelSet {
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

export function vectorForMatcherTest(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes("book-flight") || lower.includes("book a flight")) return [0, 1];
  if (lower.includes("ticket-status")) return [1, 0];
  if (lower.includes("refund-status")) return [1, 0];
  if (lower.includes("refund")) return [1, 0];
  return [0, 0];
}

export function deferred<T>() {
  let resolve!: (value: T | PromiseLike<T>) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });
  return { promise, resolve, reject };
}

export class AbortError extends Error {
  constructor() {
    super("aborted");
    this.name = "AbortError";
  }
}

export class RecordingStorage implements StorageAdapter {
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
      ...(input.channel ? { channel: defineChannelContext(input.channel) } : {}),
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

  async listConversations<TConversationContext = unknown>(
    options: ListConversationsOptions = {},
  ): Promise<ConversationRecord<TConversationContext>[]> {
    return Array.from(this.conversations.values())
      .filter((conversation) => options.agentId === undefined || conversation.agentId === options.agentId)
      .filter((conversation) =>
        options.before === undefined
        || conversation.updatedAt < options.before.updatedAt
        || (conversation.updatedAt === options.before.updatedAt && conversation.id > options.before.id)
      )
      .filter((conversation) =>
        options.after === undefined
        || conversation.updatedAt > options.after.updatedAt
        || (conversation.updatedAt === options.after.updatedAt && conversation.id < options.after.id)
      )
      .filter((conversation) => options.beforeUpdatedAt === undefined || conversation.updatedAt < options.beforeUpdatedAt)
      .filter((conversation) => options.afterUpdatedAt === undefined || conversation.updatedAt > options.afterUpdatedAt)
      .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt) || left.id.localeCompare(right.id))
      .slice(0, options.limit) as ConversationRecord<TConversationContext>[];
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
    const conversation = this.conversations.get(event.conversationId);
    if (conversation) this.conversations.set(event.conversationId, { ...conversation, updatedAt: stored.createdAt });
    return stored;
  }

  async appendEventIfApprovalPending<TEvent extends RuntimeEventInput<"approval.resolved">>(
    event: TEvent,
  ): Promise<RuntimeEvent | null> {
    const events = this.events.get(event.conversationId) ?? [];
    if (!isApprovalPending(events, event.data.approvalId)) return null;
    return this.appendEvent(event);
  }

  async appendEventIfNoActiveVoiceSegment<TEvent extends RuntimeEventInput<"voice.segment.started">>(
    event: TEvent,
  ): Promise<RuntimeEvent | null> {
    const events = this.events.get(event.conversationId) ?? [];
    if (hasActiveVoiceSegment(events)) return null;
    return this.appendEvent(event);
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

function isApprovalPending(events: RuntimeEvent[], approvalId: string) {
  let requested: Extract<RuntimeEvent, { type: "approval.requested" }> | undefined;
  let resolved = false;
  for (const event of events) {
    if (event.type === "approval.requested" && event.data.approvalId === approvalId) {
      requested = event;
      continue;
    }
    if (event.type === "approval.resolved" && event.data.approvalId === approvalId) {
      resolved = true;
    }
  }
  if (!requested || resolved) return false;
  return !requested.data.expiresAt || Date.parse(requested.data.expiresAt) > Date.now();
}

function hasActiveVoiceSegment(events: RuntimeEvent[]) {
  const active = new Set<string>();
  for (const event of events) {
    if (event.type === "voice.segment.started") {
      active.add(event.data.channelSegmentId);
      continue;
    }
    if (event.type === "voice.segment.ended" || event.type === "voice.connection.failed") {
      active.delete(event.data.channelSegmentId);
    }
  }
  return active.size > 0;
}
