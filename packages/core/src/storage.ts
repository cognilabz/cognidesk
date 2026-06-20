import type { ConversationChannel, ConversationChannelInput, RuntimeEvent, RuntimeSnapshot, ConversationLifecycle } from "./types.js";

export interface ConversationRecord<TConversationContext = unknown> {
  id: string;
  agentId: string;
  lifecycle: ConversationLifecycle;
  context: TConversationContext;
  channel?: ConversationChannel;
  createdAt: string;
  updatedAt: string;
}

export type RuntimeEventInput<TType extends RuntimeEvent["type"] = RuntimeEvent["type"]> =
  Omit<Extract<RuntimeEvent, { type: TType }>, "id" | "offset" | "createdAt" | "telemetry"> & {
    id?: string;
    createdAt?: string;
    telemetry?: RuntimeEvent["telemetry"];
  };

export interface ListEventsOptions {
  conversationId: string;
  afterOffset?: number;
  limit?: number;
}

export interface ConversationListCursor {
  updatedAt: string;
  id: string;
}

export interface ListConversationsOptions {
  agentId?: string;
  before?: ConversationListCursor;
  after?: ConversationListCursor;
  /** Timestamp-only range filter. Use `before` for lossless cursor pagination. */
  beforeUpdatedAt?: string;
  /** Timestamp-only range filter. Use `after` for lossless cursor pagination. */
  afterUpdatedAt?: string;
  limit?: number;
}

export interface CreateConversationInput<TConversationContext = unknown> {
  id?: string;
  agentId: string;
  context: TConversationContext;
  channel?: ConversationChannelInput;
}

export interface StorageAdapter {
  initialize?(): Promise<void> | void;

  createConversation<TConversationContext = unknown>(
    input: CreateConversationInput<TConversationContext>,
  ): Promise<ConversationRecord<TConversationContext>>;

  getConversation<TConversationContext = unknown>(
    conversationId: string,
  ): Promise<ConversationRecord<TConversationContext> | null>;

  listConversations<TConversationContext = unknown>(
    options?: ListConversationsOptions,
  ): Promise<ConversationRecord<TConversationContext>[]>;

  updateConversationLifecycle(
    conversationId: string,
    lifecycle: ConversationLifecycle,
  ): Promise<ConversationRecord | null>;

  appendEvent<TEvent extends RuntimeEventInput>(
    event: TEvent,
  ): Promise<RuntimeEvent>;

  appendEventIfApprovalPending?<TEvent extends RuntimeEventInput<"approval.resolved">>(
    event: TEvent,
  ): Promise<RuntimeEvent | null>;

  appendEventIfNoActiveVoiceSegment?<TEvent extends RuntimeEventInput<"voice.segment.started">>(
    event: TEvent,
  ): Promise<RuntimeEvent | null>;

  listEvents(options: ListEventsOptions): Promise<RuntimeEvent[]>;

  saveSnapshot(snapshot: RuntimeSnapshot): Promise<void>;

  getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null>;
}
