import type { RuntimeEvent, RuntimeSnapshot, ConversationLifecycle } from "./types.js";

export interface ConversationRecord<TConversationContext = unknown> {
  id: string;
  agentId: string;
  lifecycle: ConversationLifecycle;
  context: TConversationContext;
  createdAt: string;
  updatedAt: string;
}

export type RuntimeEventInput<TType extends RuntimeEvent["type"] = RuntimeEvent["type"]> =
  Omit<Extract<RuntimeEvent, { type: TType }>, "id" | "offset" | "createdAt"> & {
    id?: string;
    createdAt?: string;
  };

export interface ListEventsOptions {
  conversationId: string;
  afterOffset?: number;
  limit?: number;
}

export interface CreateConversationInput<TConversationContext = unknown> {
  id?: string;
  agentId: string;
  context: TConversationContext;
}

export interface StorageAdapter {
  initialize?(): Promise<void> | void;

  createConversation<TConversationContext = unknown>(
    input: CreateConversationInput<TConversationContext>,
  ): Promise<ConversationRecord<TConversationContext>>;

  getConversation<TConversationContext = unknown>(
    conversationId: string,
  ): Promise<ConversationRecord<TConversationContext> | null>;

  updateConversationLifecycle(
    conversationId: string,
    lifecycle: ConversationLifecycle,
  ): Promise<ConversationRecord | null>;

  appendEvent<TEvent extends RuntimeEventInput>(
    event: TEvent,
  ): Promise<RuntimeEvent>;

  listEvents(options: ListEventsOptions): Promise<RuntimeEvent[]>;

  saveSnapshot(snapshot: RuntimeSnapshot): Promise<void>;

  getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null>;
}
