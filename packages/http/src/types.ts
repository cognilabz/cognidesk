import type {
  CognideskRuntime,
  CompactConversationInput,
  CompactConversationResult,
  ConversationRecord,
  CreateRuntimeConversationInput,
  ConversationChannelInput,
  CustomRuntimeEventDefinition,
  EmitGeneratedPreambleInput,
  EmitIntermediateMessageInput,
  EmitJourneyEventResult,
  HandleChannelEventInput,
  HandleChannelEventResult,
  HandleUserMessageInput,
  HandleUserMessageResult,
  JourneyEventDefinition,
  RequestHandoffInput,
  ReplayConversationInput,
  ReplayConversationResult,
  ResumeConversationInput,
  ResolveChannelOutputInput,
  ResolveChannelOutputResult,
  RuntimeEvent,
  RuntimeSnapshot,
  StartVoiceConversationInput,
  StartVoiceResult,
  StartVoiceSegmentInput,
  VoiceSocketMetadata,
  SubmitWidgetInput,
} from "@cognidesk/core";
import type { ChannelEventSubmitInput } from "./channel-events.js";

export interface CognideskHttpRuntime {
  createConversation(input: CreateRuntimeConversationInput): Promise<ConversationRecord>;
  handleChannelEvent?(input: HandleChannelEventInput): Promise<HandleChannelEventResult>;
  handleUserMessage(input: HandleUserMessageInput): Promise<HandleUserMessageResult>;
  submitWidget?(input: SubmitWidgetInput): Promise<RuntimeEvent>;
  emitCustomEvent?(input: { conversationId: string; event: CustomRuntimeEventDefinition; payload: unknown }): Promise<RuntimeEvent>;
  emitJourneyEvent?(input: { conversationId: string; event: JourneyEventDefinition; payload: unknown; routing?: "none" | "activeJourneyOnly" | "full" | "targeted"; target?: { journeyId?: string; stateId?: string }; app?: unknown; signal?: AbortSignal }): Promise<EmitJourneyEventResult>;
  emitIntermediateMessage?(input: EmitIntermediateMessageInput): Promise<{ events: RuntimeEvent[] }>;
  emitGeneratedPreamble?(input: EmitGeneratedPreambleInput): Promise<{ text: string; events: RuntimeEvent[] }>;
  compactConversation?(input: CompactConversationInput): Promise<CompactConversationResult<unknown>>;
  closeConversation?(conversationId: string, reason?: string): Promise<ConversationRecord>;
  requestHandoff?(input: RequestHandoffInput): Promise<{ conversation: ConversationRecord; event: RuntimeEvent }>;
  resumeConversation?(input: ResumeConversationInput): Promise<{ conversation: ConversationRecord; event: RuntimeEvent }>;
  resolveChannelOutput?(input: ResolveChannelOutputInput): Promise<ResolveChannelOutputResult>;
  startVoiceConversation?(input: StartVoiceConversationInput): Promise<StartVoiceResult>;
  startVoiceSegment?(input: StartVoiceSegmentInput): Promise<StartVoiceResult>;
  replayConversation?(input: ReplayConversationInput): Promise<ReplayConversationResult>;
  getSnapshot?(conversationId: string): Promise<RuntimeSnapshot | null>;
  listEvents(conversationId: string, afterOffset?: number): Promise<RuntimeEvent[]>;
}

export interface VoiceSocketHandshakeInput {
  result: StartVoiceResult;
  request: Request;
  basePath: string;
}

export interface VoiceSocketHandshake {
  createSocket(input: VoiceSocketHandshakeInput): Promise<VoiceSocketMetadata>;
}

export interface CognideskHttpAuthorizeInput {
  /** Original request before the HTTP handler reads the body or calls the runtime. */
  request: Request;
  /** Parsed request URL. */
  url: URL;
  /** Request path after the configured basePath has been stripped. */
  path: string;
}

export type CognideskHttpAuthorizeResult = boolean | Response;

export type CognideskHttpAuthorize = (
  input: CognideskHttpAuthorizeInput,
) => CognideskHttpAuthorizeResult | Promise<CognideskHttpAuthorizeResult>;

export interface CognideskHttpCorsOptions {
  /** Exact browser origins allowed to call the handler, for example "https://app.example.com". */
  origins: string | readonly string[];
  /** Defaults to GET, POST, and OPTIONS. */
  methods?: string | readonly string[];
  /** Defaults to content-type and authorization. */
  allowedHeaders?: string | readonly string[];
  exposedHeaders?: string | readonly string[];
  credentials?: boolean;
  maxAgeSeconds?: number;
}

export type CognideskHttpCorsConfig = boolean | CognideskHttpCorsOptions;

export interface CognideskHttpHandlerOptions {
  runtime: CognideskHttpRuntime | CognideskRuntime;
  basePath?: string;
  agentId?: string;
  voice?: VoiceSocketHandshake;
  customEvents?: CustomRuntimeEventDefinition[];
  journeyEvents?: JourneyEventDefinition[];
  ssePollIntervalMs?: number;
  /**
   * Enable CORS. `true` keeps the legacy wildcard behavior; prefer an object
   * with explicit origins for browser-facing deployments.
   */
  cors?: CognideskHttpCorsConfig;
  /**
   * Authorize non-preflight requests before the runtime is called. Return true
   * to allow, false for a default 401, or a Response for a custom denial.
   */
  authorize?: CognideskHttpAuthorize;
  /**
   * Include raw thrown Error messages in 500 responses. Defaults to false so
   * internal runtime details are not exposed to HTTP clients.
   */
  exposeInternalErrors?: boolean;
}

export interface CognideskHttpHandler {
  handle(request: Request): Promise<Response>;
}

interface BaseCreateConversationBody {
  id?: string;
  agentId?: string;
  context?: unknown;
}

export interface CreateConversationBody extends BaseCreateConversationBody {
  channel?: ConversationChannelInput;
}

export interface CreateVoiceConversationBody extends BaseCreateConversationBody {
  client?: unknown;
  app?: unknown;
}

export interface CreateVoiceSegmentBody {
  client?: unknown;
  app?: unknown;
}

export interface CreateMessageBody {
  message?: string;
  text?: string;
  channel?: ConversationChannelInput;
  turn?: unknown;
  app?: unknown;
}

export type CreateChannelEventBody = ChannelEventSubmitInput;

export type ResolveChannelOutputBody<TPayload = unknown> = Omit<ResolveChannelOutputInput<TPayload>, "signal">;

export interface CreateWidgetSubmissionBody {
  widgetKind?: string;
  output?: unknown;
}

export interface CreateRuntimeEventBody {
  payload?: unknown;
}

export interface CreateJourneyEventBody extends CreateRuntimeEventBody {
  routing?: "none" | "activeJourneyOnly" | "full" | "targeted";
  target?: {
    journeyId?: string;
    stateId?: string;
  };
  app?: unknown;
}

export interface CreateHandoffBody {
  reason?: string;
  summary?: string;
  payload?: unknown;
}

export interface CreateResumeBody {
  reason?: string;
  payload?: unknown;
}

export interface CreateCloseBody {
  reason?: string;
}

export interface CreateIntermediateMessageBody {
  text?: string;
  visibleToModel?: boolean;
}

export interface CreateGeneratedPreambleBody {
  purpose?: string;
  maxWords?: number;
}

export interface CreateCompactionBody {
  fromOffset?: number;
  toOffset?: number;
  schemaVersion?: string;
}
