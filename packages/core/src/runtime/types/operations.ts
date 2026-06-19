import type { z } from "zod";
import type { JourneyCandidate } from "../../journey-index.js";
import type { ConversationRecord, RuntimeEventInput } from "../../storage.js";
import type {
  ActionDefinition,
  CompiledJourney,
  EventRoutingMode,
  JourneyEventDefinition,
} from "../../definition.js";
import type { ConversationCompactionSummary } from "../schemas.js";
import type { ReplayedMessage, ReplayedPrompt } from "../replay.js";
import type {
  AnyTool,
  ApprovalResolutionMode,
  ChannelContext,
  ChannelEvent,
  ChannelEventIntakeResult,
  ConversationChannel,
  CustomRuntimeEventDefinition,
  RuntimeApprovalDecision,
  RuntimeEvent,
  RuntimeSnapshot,
} from "../../types.js";

export interface RuntimeApprovalEvaluationInput {
  conversation: ConversationRecord;
  tool: AnyTool;
  input: unknown;
  channel?: ChannelContext;
}

export interface PendingSupportAction {
  approvalId: string;
  conversationId: string;
  requestedEventId: string;
  requestedAt: string;
  toolName: string;
  input: unknown;
  channel?: ChannelContext;
  providerPackageId?: string;
  operationAlias?: string;
  providerOperation?: string;
  capability?: string;
  actionAudience?: string;
  sideEffect?: boolean;
  outbound?: boolean;
  externallyVisible?: boolean;
  exposesSensitiveData?: boolean;
  changesWorkflow?: boolean;
  reason?: string;
  supportedResolutions: ApprovalResolutionMode[];
  editableFields?: string[];
  expiresAt?: string;
  journeyId?: string;
  stateId?: string;
  metadata?: Record<string, unknown>;
}

export interface ListPendingSupportActionsInput {
  conversationId: string;
}

export interface ResolvePendingSupportActionInput {
  conversationId: string;
  approvalId: string;
  resolution: ApprovalResolutionMode;
  editedInput?: unknown;
  resolvedBy?: string;
  reason?: string;
  metadata?: Record<string, unknown>;
  signal?: AbortSignal;
}

export interface ResolvePendingSupportActionResult {
  action: PendingSupportAction;
  resolution: RuntimeEvent;
  events: RuntimeEvent[];
  executed: boolean;
  result?: unknown;
}

export interface EmitCustomEventInput<TEvent extends CustomRuntimeEventDefinition = CustomRuntimeEventDefinition> {
  conversationId: string;
  event: TEvent;
  payload: z.infer<TEvent["payload"]>;
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
  signal?: AbortSignal;
}

export interface EmitJourneyEventResult {
  event: RuntimeEvent;
  snapshot: RuntimeSnapshot | null;
  events: RuntimeEvent[];
}

export interface EmitScheduledEventInput<TEvent extends JourneyEventDefinition = JourneyEventDefinition> {
  conversationId: string;
  scheduleId: string;
  event: TEvent;
  payload: z.infer<TEvent["payload"]>;
  scheduledFor?: string;
  dueAt?: string;
  routing?: EventRoutingMode;
  target?: {
    journeyId?: string;
    stateId?: string;
  };
  intent?: {
    operationAlias?: string;
    providerPackageId?: string;
    capability?: string;
    reason?: string;
  };
  metadata?: Record<string, unknown>;
  app?: unknown;
  signal?: AbortSignal;
}

export interface EmitScheduledEventResult extends EmitJourneyEventResult {
  channelEvent: ChannelEvent;
  intake: ChannelEventIntakeResult;
  scheduleEvent: RuntimeEvent;
}

export interface RequestHandoffInput {
  conversationId: string;
  reason: string;
  summary?: string;
  target?: {
    providerPackageId?: string;
    destination?: string;
    channelId?: string;
    queue?: string;
    externalConversationId?: string;
    policyId?: string;
  };
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
  channel?: ConversationChannel;
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
