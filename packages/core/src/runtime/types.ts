import type { z } from "zod";
import type { Logger } from "pino";
import type { ConversationRecord, CreateConversationInput, ListConversationsOptions, RuntimeEventInput } from "../storage.js";
import type { CompiledAgent } from "../definition.js";
import type { ReplayedMessage, ReplayedPrompt } from "./replay.js";
import type { RuntimeApprovalEvaluationInput } from "./types/operations.js";
import type {
  AgentModelSet,
  CapabilityUseDecision,
  ChannelEvent,
  ChannelEventBindingOutcome,
  ChannelEventEnvelopeInput,
  ChannelEventHandlingDisposition,
  ChannelEventIntakeResult,
  ChannelContext,
  ChannelOutputIntent,
  ChannelOutputIntentInput,
  ChannelOutputResolution,
  ChannelOutputResolutionDecision,
  ChannelOutputResolutionPayload,
  ChannelOutputResolverInput,
  ChannelOutputResolverResult,
  ConversationChannel,
  ConversationChannelInput,
  KnowledgeItem,
  CapabilityAvailability,
  ChannelPolicyConfig,
  ChannelSetConfig,
  ProviderCredentialStatus,
  ProviderManifest,
  ProviderReadiness,
  RuntimeApprovalDecision,
  RuntimeEvent,
  RuntimeSnapshot,
} from "../types.js";
import type { PrivacyHooks } from "../privacy.js";
import type { AgentLogLevel } from "../definition.js";
import type { RuntimeTelemetryOptions } from "../telemetry.js";

export type RetrievedKnowledgeItem = KnowledgeItem & {
  sourceName: string;
};

export interface RuntimeContextResolveInput<TTurn = unknown> {
  conversation: ConversationRecord;
  turn: TTurn;
  channel?: ChannelContext;
  app: unknown;
  text: string;
}

export interface RuntimeContextOptions<TTurn = unknown> {
  resolve?(input: RuntimeContextResolveInput<TTurn>): unknown | Promise<unknown>;
  schema?: z.ZodType;
  redact?: string[];
}

export interface RuntimeOptions {
  storage: import("../storage.js").StorageAdapter;
  agent?: CompiledAgent;
  models?: AgentModelSet;
  journeyIndex?: import("../journey-index.js").JourneyIndex;
  topKJourneys?: number;
  app?: unknown;
  context?: RuntimeContextOptions;
  knowledgeLimit?: number;
  privacy?: PrivacyHooks;
  telemetry?: RuntimeTelemetryOptions;
  logLevel?: AgentLogLevel;
  logger?: Pick<Logger, "trace" | "debug" | "info" | "warn" | "error" | "child">;
  compaction?: {
    beforeTurn?: boolean;
    afterTurn?: boolean;
    minEvents?: number;
    schemaVersion?: string;
    instructions?: string;
    summarySchema?: z.ZodType;
  };
  postProcessing?: {
    citations?: boolean;
  };
  streaming?: {
    syntheticDeltas?: boolean;
  };
  toolRetry?: {
    maxAttempts?: number;
    notice?: string;
  };
  approval?: {
    evaluate?(input: RuntimeApprovalEvaluationInput): RuntimeApprovalDecision | null | undefined;
  };
  channelOutput?: {
    resolve?(input: ChannelOutputResolutionPolicyInput): ChannelOutputResolutionDecision | null | undefined | Promise<ChannelOutputResolutionDecision | null | undefined>;
    execute?(input: ChannelOutputResolverInput): ChannelOutputResolverResult | Promise<ChannelOutputResolverResult>;
  };
  channelSets?: ChannelSetConfig[];
  channels?: ChannelPolicyConfig[];
  providerPackages?: ProviderManifest[];
  capabilityAvailability?: CapabilityAvailability[];
  providerCredentialStatuses?: ProviderCredentialStatus[];
  providerReadiness?: ProviderReadiness[];
}

export interface RuntimeConfigurationSource {
  channelSets?: ChannelSetConfig[];
  channels?: ChannelPolicyConfig[];
  providerPackages?: ProviderManifest[];
  capabilityAvailability?: CapabilityAvailability[];
  credentialStatuses?: ProviderCredentialStatus[];
  providerReadiness?: ProviderReadiness[];
}

export interface CreateRuntimeConversationInput<TConversationContext = unknown>
  extends CreateConversationInput<TConversationContext> {}

export interface ListRuntimeConversationsOptions extends ListConversationsOptions {}

export interface HandleUserMessageInput<TTurn = unknown> {
  conversationId: string;
  text: string;
  channel?: ConversationChannel;
  turn?: TTurn;
  app?: unknown;
  signal?: AbortSignal;
  recordUserMessage?: boolean;
  assistantMessageMode?: "canonical" | "intermediate" | "none";
  onAssistantTextDelta?(textDelta: string): Promise<void> | void;
}

export interface HandleUserMessageResult {
  conversation: ConversationRecord;
  snapshot: RuntimeSnapshot;
  events: RuntimeEvent[];
  text: string;
  activeJourneyId?: string;
}

export interface ChannelEventBindingInput {
  outcome?: ChannelEventBindingOutcome;
  conversationId?: string;
  agentId?: string;
  conversationContext?: unknown;
  linkedConversationId?: string;
  reason?: string;
  reasonCode?: string;
  reasonLabel?: string;
  blockers?: Array<{ code: string; message: string; kind?: string }>;
  metadata?: Record<string, unknown>;
}

export interface ChannelEventHandlingInput<TTurn = unknown> {
  disposition?: ChannelEventHandlingDisposition;
  text?: string;
  turn?: TTurn;
  recordUserMessage?: HandleUserMessageInput<TTurn>["recordUserMessage"];
  assistantMessageMode?: HandleUserMessageInput<TTurn>["assistantMessageMode"];
}

export interface HandleChannelEventInput<TPayload = unknown, TTurn = unknown> {
  event: ChannelEventEnvelopeInput<TPayload>;
  conversationId?: string;
  agentId?: string;
  conversationContext?: unknown;
  createConversation?: CreateRuntimeConversationInput;
  binding?: ChannelEventBindingInput;
  handling?: ChannelEventHandlingInput<TTurn>;
  app?: unknown;
  signal?: AbortSignal;
  onAssistantTextDelta?(textDelta: string): Promise<void> | void;
}

export interface HandleChannelEventResult<TPayload = unknown> {
  channelEvent: ChannelEvent<TPayload>;
  intake: ChannelEventIntakeResult;
  disposition: ChannelEventHandlingDisposition;
  conversation?: ConversationRecord;
  turn?: HandleUserMessageResult;
  snapshot?: RuntimeSnapshot;
  events: RuntimeEvent[];
  text?: string;
  activeJourneyId?: string;
}

export interface RequestOutboundContactInput<TPayload = unknown> {
  conversationId?: string;
  agentId?: string;
  conversationContext?: unknown;
  channel: ConversationChannelInput;
  text?: string;
  payload?: TPayload;
  app?: unknown;
  signal?: AbortSignal;
  binding?: ChannelEventBindingInput;
  handling?: ChannelEventHandlingInput;
}

export interface RequestChannelHandoffReviewInput<TPayload = unknown> {
  conversationId?: string;
  agentId?: string;
  conversationContext?: unknown;
  channel: ConversationChannelInput;
  payload?: TPayload;
  reason?: string;
  reasonCode?: string;
  reasonLabel?: string;
  app?: unknown;
  signal?: AbortSignal;
  binding?: ChannelEventBindingInput;
  handling?: ChannelEventHandlingInput;
}

export interface RequestChannelHandoffInput<TPayload = unknown> {
  conversationId: string;
  fromChannel?: ConversationChannelInput;
  toChannel: ConversationChannelInput;
  payload?: TPayload;
  reason?: string;
  reasonCode?: string;
  reasonLabel?: string;
  app?: unknown;
  signal?: AbortSignal;
  binding?: ChannelEventBindingInput;
  handling?: ChannelEventHandlingInput;
}

export interface ChannelOutputResolutionPolicyInput<TPayload = unknown> {
  conversation: ConversationRecord;
  intent: ChannelOutputIntent<TPayload>;
  channel: ChannelContext;
  defaultResolution: ChannelOutputResolutionDecision;
  capabilityDecision?: CapabilityUseDecision;
  app: unknown;
}

export interface ResolveChannelOutputInput<TPayload = unknown> {
  conversationId: string;
  intent: ChannelOutputIntentInput<TPayload>;
  resolution?: ChannelOutputResolutionDecision;
  app?: unknown;
  signal?: AbortSignal;
}

export interface ResolveChannelOutputResult<TPayload = unknown> {
  conversation?: ConversationRecord;
  outputIntent: ChannelOutputIntent<TPayload>;
  resolution: ChannelOutputResolution;
  channelEvent?: ChannelEvent<ChannelOutputResolutionPayload<TPayload>>;
  event?: RuntimeEvent;
  events: RuntimeEvent[];
  shouldExecute: boolean;
  execution?: ChannelOutputResolverResult;
}

export interface HandleVoiceUserMessageInput<TTurn = unknown> extends HandleUserMessageInput<TTurn> {
  channelSegmentId: string;
  connectionId?: string;
  recordingReferenceId?: string;
  startedAtMs?: number;
  endedAtMs?: number;
  transcriptionSource?: string;
  metadata?: Record<string, unknown>;
}

export interface HandleVoiceUserMessageResult extends HandleUserMessageResult {
  voiceEvents: RuntimeEvent[];
}

export interface CompactConversationInput {
  conversationId: string;
  fromOffset?: number;
  toOffset?: number;
  schemaVersion?: string;
  signal?: AbortSignal;
}

export interface ReplayConversationInput {
  conversationId: string;
  afterOffset?: number;
}

export interface ReplayConversationResult {
  conversation: ConversationRecord;
  snapshot: RuntimeSnapshot | null;
  events: RuntimeEvent[];
  messages: ReplayedMessage[];
  openPrompts: ReplayedPrompt[];
}

export interface ExplainTurnInput<TTurn = unknown> extends HandleUserMessageInput<TTurn> {}

export interface ExplainTurnResult {
  conversationId: string;
  agentId: string;
  channel?: ChannelContext;
  persona?: unknown;
  agentChannelPolicy?: unknown;
  channelPolicy?: unknown;
  handoffPolicy?: unknown;
  conversationContext?: unknown;
  resolvedContext?: unknown;
  resolvedContextKeys: string[];
  policyEventData: Record<string, unknown>;
}

export interface SubmitWidgetInput {
  conversationId: string;
  promptId: string;
  widgetKind: string;
  output: unknown;
}

export interface EmitIntermediateMessageInput {
  conversationId: string;
  text: string;
  visibleToModel?: boolean;
}

export interface EmitGeneratedPreambleInput {
  conversationId: string;
  purpose?: string;
  maxWords?: number;
  signal?: AbortSignal;
}

export interface EmitGeneratedPreambleResult {
  text: string;
  events: RuntimeEvent[];
}

export type { ReplayedMessage, ReplayedPrompt };
export * from "./types/operations.js";
