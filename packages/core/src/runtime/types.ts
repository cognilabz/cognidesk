import type { z } from "zod";
import type { Logger } from "pino";
import type { JourneyCandidate } from "../journey-index.js";
import type { ConversationRecord, CreateConversationInput, RuntimeEventInput } from "../storage.js";
import type { ActionDefinition, CompiledAgent, CompiledJourney, EventRoutingMode, JourneyEventDefinition } from "../definition.js";
import type { ConversationCompactionSummary } from "./schemas.js";
import type { ReplayedMessage, ReplayedPrompt } from "./replay.js";
import type {
  AgentModelSet,
  AnyTool,
  CustomRuntimeEventDefinition,
  JourneyContextRecord,
  JourneySummary,
  KnowledgeItem,
  RuntimeEvent,
  RuntimeSnapshot,
} from "../types.js";
import type { ObservabilityHooks } from "../observability.js";
import type { PrivacyHooks } from "../privacy.js";
import type { AgentLogLevel } from "../definition.js";

export type RetrievedKnowledgeItem = KnowledgeItem & {
  sourceName: string;
};

export interface RuntimeOptions {
  storage: import("../storage.js").StorageAdapter;
  agent?: CompiledAgent;
  models?: AgentModelSet;
  journeyIndex?: import("../journey-index.js").JourneyIndex;
  topKJourneys?: number;
  app?: unknown;
  knowledgeLimit?: number;
  privacy?: PrivacyHooks;
  observability?: ObservabilityHooks;
  logLevel?: AgentLogLevel;
  logger?: Pick<Logger, "trace" | "debug" | "info" | "error" | "child">;
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
}

export interface CreateRuntimeConversationInput<TConversationContext = unknown>
  extends CreateConversationInput<TConversationContext> {}

export interface HandleUserMessageInput<TTurn = unknown> {
  conversationId: string;
  text: string;
  turn?: TTurn;
  app?: unknown;
  signal?: AbortSignal;
}

export interface HandleUserMessageResult {
  conversation: ConversationRecord;
  snapshot: RuntimeSnapshot;
  events: RuntimeEvent[];
  text: string;
  activeJourneyId?: string;
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

export interface SubmitWidgetInput {
  conversationId: string;
  promptId: string;
  widgetKind: string;
  output: unknown;
}

export interface EmitIntermediateMessageInput {
  conversationId: string;
  text: string;
  traceId?: string;
  visibleToModel?: boolean;
}

export interface EmitGeneratedPreambleInput {
  conversationId: string;
  purpose?: string;
  maxWords?: number;
  traceId?: string;
  signal?: AbortSignal;
}

export interface EmitGeneratedPreambleResult {
  text: string;
  events: RuntimeEvent[];
}

export interface EmitCustomEventInput<TEvent extends CustomRuntimeEventDefinition = CustomRuntimeEventDefinition> {
  conversationId: string;
  event: TEvent;
  payload: z.infer<TEvent["payload"]>;
  traceId?: string;
}

export interface EmitJourneyEventInput<TEvent extends JourneyEventDefinition = JourneyEventDefinition> {
  conversationId: string;
  event: TEvent;
  payload: z.infer<TEvent["payload"]>;
  routing?: EventRoutingMode;
  target?: {
    journeyId?: string;
    stateId?: string;
  };
  app?: unknown;
  traceId?: string;
  signal?: AbortSignal;
}

export interface EmitJourneyEventResult {
  event: RuntimeEvent;
  snapshot: RuntimeSnapshot | null;
  events: RuntimeEvent[];
}

export interface RequestHandoffInput {
  conversationId: string;
  reason: string;
  summary?: string;
  payload?: unknown;
}

export interface ResumeConversationInput {
  conversationId: string;
  reason?: string;
  payload?: unknown;
}

export interface CompactConversationResult<TSummary = ConversationCompactionSummary> {
  summary: TSummary;
  snapshot: RuntimeSnapshot;
  events: RuntimeEvent[];
}

export interface StateMachineTurnResult {
  activeStateIds: string[];
  journeyContext: Record<string, unknown>;
  completed?: {
    journeyId: string;
    stateId?: string;
  };
}

export interface VisibleCustomEventContext {
  type: string;
  offset: number;
  data: unknown;
}

export interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

export type RankedJourneyCandidate = JourneyCandidate & {
  matchConfidence?: number;
  matchReason?: string;
};

export interface ActiveTurn {
  id: string;
  conversationId: string;
  controller: AbortController;
  interruptedByNewMessage: boolean;
  abortEvent?: Promise<RuntimeEvent>;
  interruptedEvent?: RuntimeEvent;
  cleanup(): void;
}

export type RuntimeEventEmitter = <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;

export interface StateActionRunArgs {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}

export interface ActionRunRetryTarget {
  action: ActionDefinition;
}

export type { ReplayedMessage, ReplayedPrompt };
