import type {
  ConversationChannel,
  ConversationChannelInput,
  HandleChannelEventInput as CoreHandleChannelEventInput,
  HandleChannelEventResult as CoreHandleChannelEventResult,
  MessageSegment,
  ResolveChannelOutputInput as CoreResolveChannelOutputInput,
  ResolveChannelOutputResult as CoreResolveChannelOutputResult,
  RuntimeEvent,
} from "@cognidesk/core";
import type { AppearanceConfiguration } from "@cognidesk/ui";
import type { ReactNode } from "react";
import type {
  ChannelEventSubmitInput,
  ChannelHandoffEventInput,
  ChannelHandoffReviewEventInput,
  ChannelMessageEventInput,
  ChannelOutputResolutionEventInput,
  OutboundContactChannelEventInput,
  ProviderObjectChannelEventInput,
  ScheduledChannelEventInput,
  VoiceTurnChannelEventInput,
} from "./channel-events.js";

export type HandleChannelEventInput<TPayload = unknown, TTurn = unknown> =
  CoreHandleChannelEventInput<TPayload, TTurn>;
export type HandleChannelEventResult<TPayload = unknown> =
  CoreHandleChannelEventResult<TPayload>;
export type ResolveChannelOutputInput<TPayload = unknown> =
  CoreResolveChannelOutputInput<TPayload>;
export type ResolveChannelOutputResult<TPayload = unknown> =
  CoreResolveChannelOutputResult<TPayload>;

export interface CognideskClientOptions {
  baseUrl: string;
  fetch?: typeof fetch;
  /**
   * Shared headers for fetch requests. These are also passed to streamEvents
   * factories/polyfills that support header-based EventSource authentication.
   */
  headers?: HeadersInit;
  /**
   * Shared credentials mode for fetch requests. "include" also enables
   * EventSource withCredentials unless streamEvents overrides it.
   */
  credentials?: RequestCredentials;
  /**
   * Shared request options, or a resolver for per-operation options such as
   * auth headers, AbortSignal, cache mode, or credentials.
   */
  requestOptions?: CognideskRequestOptions | CognideskRequestOptionsResolver;
  EventSource?: typeof EventSource;
  /**
   * Use a factory for EventSource implementations that need constructor
   * options beyond the browser-native EventSourceInit, such as auth headers.
   */
  createEventSource?: CognideskEventSourceFactory;
  eventSourceOptions?: CognideskEventSourceOptions;
}

export type CognideskRequestOperation =
  | "createConversation"
  | "listConversations"
  | "handleChannelEvent"
  | "receiveMessage"
  | "recordProviderUpdate"
  | "finalizeVoiceTurn"
  | "requestOutboundContact"
  | "submitScheduledEvent"
  | "resolveChannelOutput"
  | "recordChannelOutputResolution"
  | "requestChannelHandoff"
  | "requestChannelHandoffReview"
  | "startVoiceConversation"
  | "startVoiceSegment"
  | "sendMessage"
  | "listEvents"
  | "submitWidget"
  | "emitCustomEvent"
  | "emitJourneyEvent"
  | "emitIntermediateMessage"
  | "emitGeneratedPreamble"
  | "compactConversation"
  | "closeConversation"
  | "requestHandoff"
  | "resumeConversation"
  | "getSnapshot"
  | "replayConversation";

export interface CognideskRequestContext {
  operation: CognideskRequestOperation;
  url: string;
  method: "GET" | "POST";
  conversationId?: string;
}

export type CognideskRequestOptions = Omit<RequestInit, "body" | "method">;

export type CognideskRequestOptionsResolver = (context: CognideskRequestContext) => CognideskRequestOptions | undefined;

export interface CognideskEventSourceOptions extends EventSourceInit {
  headers?: HeadersInit;
}

export type CognideskEventSourceFactory = (url: string, options: CognideskEventSourceOptions) => EventSource;

export interface CognideskStreamEventsOptions extends CognideskEventSourceOptions {
  afterOffset?: number;
  EventSource?: typeof EventSource;
  createEventSource?: CognideskEventSourceFactory;
}

export interface CreateConversationResult {
  conversation: {
    id: string;
    agentId: string;
    lifecycle: string;
    context: unknown;
    channel?: ConversationChannel;
    createdAt: string;
    updatedAt: string;
  };
  events?: RuntimeEvent[];
}

export interface CreateConversationInput {
  agentId?: string;
  context?: unknown;
  id?: string;
  channel?: ConversationChannelInput;
  chatStart?: ChatStartAction;
  app?: unknown;
}

export type ChatStartAction =
  | string
  | false
  | null
  | undefined
  | {
      type?: "message";
      text: string;
      visibleToModel?: boolean;
    }
  | {
      type: "generatedPreamble";
      purpose?: string;
      maxWords?: number;
    }
  | {
      type: "none";
    };

export interface ChatStartInput {
  context: unknown;
  channel?: ConversationChannelInput;
  app?: unknown;
}

export type ChatStartBehavior =
  | ChatStartAction
  | ((input: ChatStartInput) => ChatStartAction | Promise<ChatStartAction>);

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

export interface ListConversationsResult {
  conversations: CreateConversationResult["conversation"][];
}

export interface StartVoiceResult {
  conversation: CreateConversationResult["conversation"];
  channelSegment: {
    id: string;
    conversationId: string;
    channel: "voice";
    startedAt: string;
    endedAt?: string;
  };
  connection: {
    id: string;
    channelSegmentId: string;
    status: string;
    adapter: string;
    provider?: string;
    providerSessionId?: string;
    expiresAt?: string;
  };
  socket: {
    url: string;
    token: string;
    expiresAt: string;
    protocol: "cognidesk.voice.v1";
  };
  events: RuntimeEvent[];
  eventsUrl?: string;
}

export interface SendMessageResult {
  text: string;
  events: RuntimeEvent[];
  activeJourneyId?: string;
}

export interface RuntimeSnapshotResult {
  snapshot: {
    conversationId: string;
    lifecycle: string;
    activeJourneyId?: string;
    activeStateIds: string[];
    journeyContext?: unknown;
    compactionSummary?: unknown;
    definitionHash?: string;
    updatedAt: string;
  } | null;
}

export interface ReplayConversationResult {
  conversation: CreateConversationResult["conversation"];
  snapshot: RuntimeSnapshotResult["snapshot"];
  events: RuntimeEvent[];
  messages: Array<{
    id: string;
    offset: number;
    role: "user" | "assistant";
    text: string;
    intermediate: boolean;
    aborted: boolean;
    reason?: string;
    segments?: MessageSegment[];
  }>;
  openPrompts: Array<{
    promptId: string;
    offset: number;
    widgetKind: string;
    input: unknown;
  }>;
}

export interface CognideskClient {
  createConversation(input?: CreateConversationInput): Promise<CreateConversationResult>;
  listConversations(options?: ListConversationsOptions): Promise<ListConversationsResult>;
  handleChannelEvent(input: ChannelEventSubmitInput): Promise<HandleChannelEventResult>;
  receiveMessage(input: ChannelMessageEventInput): Promise<HandleChannelEventResult>;
  recordProviderUpdate(input: ProviderObjectChannelEventInput): Promise<HandleChannelEventResult>;
  finalizeVoiceTurn(input: VoiceTurnChannelEventInput): Promise<HandleChannelEventResult>;
  requestOutboundContact(input: OutboundContactChannelEventInput): Promise<HandleChannelEventResult>;
  submitScheduledEvent(input: ScheduledChannelEventInput): Promise<HandleChannelEventResult>;
  resolveChannelOutput(input: ResolveChannelOutputInput): Promise<ResolveChannelOutputResult>;
  recordChannelOutputResolution(input: ChannelOutputResolutionEventInput): Promise<HandleChannelEventResult>;
  requestChannelHandoff(input: ChannelHandoffEventInput): Promise<HandleChannelEventResult>;
  requestChannelHandoffReview(input: ChannelHandoffReviewEventInput): Promise<HandleChannelEventResult>;
  startVoiceConversation(input: { agentId?: string; context?: unknown; id?: string; client?: VoiceStartClientHints; chatStart?: ChatStartAction; app?: unknown }): Promise<StartVoiceResult>;
  startVoiceSegment(conversationId: string, input?: { client?: VoiceStartClientHints; initialGreeting?: string; app?: unknown }): Promise<StartVoiceResult>;
  sendMessage(conversationId: string, message: string, options?: { channel?: ConversationChannelInput; turn?: unknown; app?: unknown }): Promise<SendMessageResult>;
  submitWidget(conversationId: string, input: { promptId: string; widgetKind: string; output: unknown }): Promise<{ event: RuntimeEvent }>;
  emitCustomEvent(conversationId: string, eventName: string, input?: { payload?: unknown }): Promise<{ event: RuntimeEvent }>;
  emitJourneyEvent(conversationId: string, eventName: string, input?: { payload?: unknown; routing?: "none" | "activeJourneyOnly" | "full" | "targeted"; target?: { journeyId?: string; stateId?: string }; app?: unknown }): Promise<{ event: RuntimeEvent; snapshot: RuntimeSnapshotResult["snapshot"]; events: RuntimeEvent[] }>;
  emitIntermediateMessage(conversationId: string, input: { text: string; visibleToModel?: boolean }): Promise<{ events: RuntimeEvent[] }>;
  emitGeneratedPreamble(conversationId: string, input?: { purpose?: string; maxWords?: number }): Promise<{ text: string; events: RuntimeEvent[] }>;
  compactConversation(conversationId: string, input?: { fromOffset?: number; toOffset?: number; schemaVersion?: string }): Promise<{ summary: unknown; snapshot: NonNullable<RuntimeSnapshotResult["snapshot"]>; events: RuntimeEvent[] }>;
  closeConversation(conversationId: string, input?: { reason?: string }): Promise<{ conversation: CreateConversationResult["conversation"] }>;
  requestHandoff(conversationId: string, input: { reason: string; summary?: string; payload?: unknown }): Promise<{ conversation: CreateConversationResult["conversation"]; event: RuntimeEvent }>;
  resumeConversation(conversationId: string, input?: { reason?: string; payload?: unknown }): Promise<{ conversation: CreateConversationResult["conversation"]; event: RuntimeEvent }>;
  replayConversation(conversationId: string, options?: { afterOffset?: number }): Promise<ReplayConversationResult>;
  getSnapshot(conversationId: string): Promise<RuntimeSnapshotResult>;
  listEvents(conversationId: string, options?: { afterOffset?: number }): Promise<{ events: RuntimeEvent[] }>;
  streamEvents(conversationId: string, handlers: { onEvent(event: RuntimeEvent): void; onError?(error: Event): void }, options?: CognideskStreamEventsOptions): () => void;
}

export interface WidgetRendererProps {
  promptId: string;
  kind: string;
  input: unknown;
  output?: unknown;
  appearance?: AppearanceConfiguration | undefined;
  disabled?: boolean;
  submitted?: boolean;
  submit(output: unknown): void;
}

export type WidgetRenderer = (props: WidgetRendererProps) => ReactNode;

export type WidgetRendererMap = Record<string, WidgetRenderer>;

export type ChatActivityLabelKind =
  | "response"
  | "widget"
  | "intent"
  | "extraction"
  | "action"
  | "tool"
  | "knowledge";

export interface ChatActivityLabelInput {
  kind: ChatActivityLabelKind;
  event: RuntimeEvent;
  defaultLabel: string;
  name?: string;
}

export type ChatActivityLabelFormatter = (input: ChatActivityLabelInput) => string | undefined;

export interface ChatWidgetProps {
  client: CognideskClient;
  conversationId?: string;
  agentId?: string;
  channel?: ConversationChannelInput;
  initialContext?: unknown;
  app?: unknown;
  chatStart?: ChatStartBehavior;
  autoStart?: boolean;
  title?: ReactNode;
  placeholder?: string;
  sendLabel?: string;
  composer?: ReactNode | false;
  appearance?: AppearanceConfiguration;
  widgets?: WidgetRendererMap;
  formatActivityLabel?: ChatActivityLabelFormatter;
  onConversationCreated?(conversationId: string): void;
  onWidgetSubmit?(args: { promptId: string; kind: string; output: unknown }): void;
}

export interface UseChatOptions {
  client: CognideskClient;
  conversationId?: string;
  agentId?: string;
  channel?: ConversationChannelInput;
  initialContext?: unknown;
  app?: unknown;
  chatStart?: ChatStartBehavior;
  autoStart?: boolean;
  formatActivityLabel?: ChatActivityLabelFormatter;
  onConversationCreated?(conversationId: string): void;
}

export type VoiceConnectionStatus =
  | "idle"
  | "requestingPermission"
  | "connecting"
  | "connected"
  | "ended"
  | "error";

export interface UseVoiceOptions {
  client: CognideskClient;
  conversationId?: string;
  agentId?: string;
  initialContext?: unknown;
  chatStart?: ChatStartBehavior;
  mediaConstraints?: MediaStreamConstraints;
  /**
   * Defaults to true. Disable only when the app explicitly wants barge-in while
   * assistant audio is playing and has reliable echo isolation.
   */
  suppressCaptureDuringPlayback?: boolean;
  WebSocket?: typeof WebSocket;
  audioContext?: AudioContext;
  app?: unknown;
  onConversationCreated?(conversationId: string): void;
  onConnected?(result: StartVoiceResult): void;
  onEnded?(): void;
  onEvent?(event: VoiceProtocolServerEvent): void;
  onError?(error: Error): void;
}

export interface VoiceStartClientHints {
  userAgent?: string;
  locale?: string;
  metadata?: Record<string, unknown>;
}

export type VoiceProtocolClientEvent =
  | { type: "session.update"; event_id?: string; session?: Record<string, unknown> }
  | { type: "input_audio_buffer.append"; event_id?: string; audio: string; sequence?: number }
  | { type: "input_audio_buffer.commit"; event_id?: string }
  | { type: "input_audio_buffer.clear"; event_id?: string }
  | { type: "response.cancel"; event_id?: string; response_id?: string; interruptedMessageId?: string; playedUntilMs?: number; audioEndMs?: number; reason?: string }
  | { type: "conversation.item.truncate"; event_id?: string; item_id?: string; content_index?: number; audio_end_ms?: number };

export type VoiceProtocolServerEvent = {
  type: string;
  event_id?: string;
  [key: string]: unknown;
};
