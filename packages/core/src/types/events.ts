import type { UsageRecord } from "./model.js";
import type { ChannelContext } from "./providers.js";
import type {
  ChannelEventActor,
  ChannelEventBindingOutcome,
  ChannelEventDirection,
  ChannelEventHandlingDisposition,
  ChannelEventIdentity,
  ChannelEventIntent,
  ChannelEventNature,
  ChannelSourceEvidence,
} from "./channel-events.js";
import type { RuntimeEventTelemetry } from "../telemetry.js";
import type { ApprovalResolutionMode } from "./capabilities.js";

export interface RuntimeEventBase<TType extends string, TData> {
  id: string;
  conversationId: string;
  offset: number;
  type: TType;
  createdAt: string;
  telemetry?: RuntimeEventTelemetry;
  data: TData;
}

export type ConversationLifecycle = "active" | "handoff" | "closed";

export interface MessageSegment {
  id: string;
  text: string;
  references?: SupportReference[];
}

export type SupportReference =
  | { type: "knowledge"; id: string; sourceName?: string; title?: string; metadata?: unknown }
  | { type: "toolResult"; id: string };

export type RuntimeEvent =
  | RuntimeEventBase<"message.started", { role: "assistant" | "user" }>
  | RuntimeEventBase<"message.delta", { textDelta: string }>
  | RuntimeEventBase<"message.completed", { text: string; segments?: MessageSegment[]; usage?: UsageRecord; intermediate?: boolean; visibleToModel?: boolean }>
  | RuntimeEventBase<"message.generated", { textLength: number; toolCallCount?: number; usage?: UsageRecord; channel?: ChannelContext; policyApplied?: { truncated?: boolean; maxWords?: number; maxCharacters?: number } }>
  | RuntimeEventBase<"message.aborted", { reason: string; partialText?: string }>
  | RuntimeEventBase<"channel.event.received", {
      eventId?: string;
      nature: ChannelEventNature;
      direction?: ChannelEventDirection;
      intent?: ChannelEventIntent;
      actor?: ChannelEventActor;
      channel: ChannelContext;
      bindingOutcome: ChannelEventBindingOutcome;
      handlingDisposition: ChannelEventHandlingDisposition;
      occurredAt?: string;
      payload?: unknown;
      identity?: ChannelEventIdentity;
      source?: ChannelSourceEvidence;
      metadata?: Record<string, unknown>;
    }>
  | RuntimeEventBase<"channel.received", { channel: ChannelContext; text?: string; payload?: unknown }>
  | RuntimeEventBase<"channel.sent", { channel: ChannelContext; text?: string; payload?: unknown }>
  | RuntimeEventBase<"channel.delivery.updated", { channel: ChannelContext; status: string; payload?: unknown }>
  | RuntimeEventBase<"channel.thread.linked", { channel: ChannelContext; previousChannel?: ChannelContext; reason?: string }>
  | RuntimeEventBase<"voice.segment.started", { channelSegmentId: string; connectionId: string; adapter: string; provider?: string }>
  | RuntimeEventBase<"voice.segment.ended", { channelSegmentId: string; connectionId?: string; reason?: string }>
  | RuntimeEventBase<"voice.connection.failed", { channelSegmentId: string; connectionId?: string; code: string; message: string; retryable?: boolean }>
  | RuntimeEventBase<"voice.interrupted", { channelSegmentId: string; connectionId?: string; interruptedMessageId?: string; source?: "userSpeech" | "adapter" | "provider"; reason?: string; recordingReferenceId?: string; offsetMs?: number }>
  | RuntimeEventBase<"voice.recording.started", { channelSegmentId: string; recordingReferenceId: string; policy?: unknown }>
  | RuntimeEventBase<"voice.recording.completed", { channelSegmentId: string; recordingReferenceId: string; uri?: string; startedAt?: string; endedAt?: string; metadata?: unknown }>
  | RuntimeEventBase<"voice.transcript.committed", { channelSegmentId: string; speaker: "user" | "assistant"; messageEventId: string; recordingReferenceId?: string; startedAtMs?: number; endedAtMs?: number; transcriptionSource?: string; metadata?: unknown }>
  | RuntimeEventBase<"journey.candidates.retrieved", { journeyIds: string[] }>
  | RuntimeEventBase<"journey.matched", { candidates: Array<{ journeyId: string; confidence: number; reason?: string }> }>
  | RuntimeEventBase<"journey.activated", { journeyId: string; previousJourneyId?: string }>
  | RuntimeEventBase<"journey.completed", { journeyId: string; stateId?: string; reason?: string }>
  | RuntimeEventBase<"journey.guard.denied", { journeyId: string; stateId?: string; code: string; message?: string; metadata?: Record<string, unknown> }>
  | RuntimeEventBase<"journey.event.emitted", {
      name: string;
      payload: unknown;
      routing: "none" | "activeJourneyOnly" | "full" | "targeted";
      target?: { journeyId?: string; stateId?: string };
    }>
  | RuntimeEventBase<"journey.state.entered", { journeyId: string; stateId: string }>
  | RuntimeEventBase<"journey.extraction.proposed", { journeyId: string; stateId: string; fields: string[] }>
  | RuntimeEventBase<"journey.extraction.accepted", { journeyId: string; stateId: string; fields: string[] }>
  | RuntimeEventBase<"action.started", { actionName: string; journeyId?: string; stateId?: string }>
  | RuntimeEventBase<"action.completed", { actionName: string; success: boolean; journeyId?: string; stateId?: string; error?: string }>
  | RuntimeEventBase<"tool.started", { toolName: string; journeyId?: string; stateId?: string }>
  | RuntimeEventBase<"tool.completed", { toolName: string; success: boolean; journeyId?: string; stateId?: string; result?: unknown; error?: string; policyBlock?: { code: string; message: string; blockers: Array<{ code: string; message: string; kind?: string }> }; approval?: { approvalId: string; status: "requested" | "resolved" } }>
  | RuntimeEventBase<"approval.requested", {
      approvalId: string;
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
    }>
  | RuntimeEventBase<"approval.resolved", {
      approvalId: string;
      resolution: ApprovalResolutionMode;
      toolName?: string;
      resolvedBy?: string;
      reason?: string;
      editedInput?: unknown;
      executed?: boolean;
      result?: unknown;
      error?: string;
      policyBlock?: { code: string; message: string; blockers: Array<{ code: string; message: string; kind?: string }> };
      metadata?: Record<string, unknown>;
    }>
  | RuntimeEventBase<"knowledge.retrieved", { sourceName: string; itemIds: string[] }>
  | RuntimeEventBase<"context.resolved", { keys: string[]; channel?: ChannelContext }>
  | RuntimeEventBase<"policy.evaluated", { channel?: ChannelContext; channelPolicyId?: string; configuredPolicyIds?: string[]; enabledCapabilities?: string[]; outboundEnabled?: boolean; handoffEnabled?: boolean; responseConstraints?: { maxWords?: number; maxCharacters?: number }; agentChannelPolicyKeys?: string[]; hasAgentHandoffPolicy?: boolean }>
  | RuntimeEventBase<"ui.prompted", { promptId: string; widgetKind: string; input: unknown }>
  | RuntimeEventBase<"ui.submitted", { promptId: string; widgetKind: string; output: unknown }>
  | RuntimeEventBase<"conversation.compaction.started", { fromOffset: number; toOffset: number }>
  | RuntimeEventBase<"conversation.compaction.completed", { fromOffset: number; toOffset: number; schemaVersion: string }>
  | RuntimeEventBase<"handoff.requested", { reason: string; summary?: string; target?: { providerPackageId?: string; destination?: string; channelId?: string; queue?: string; externalConversationId?: string; policyId?: string }; payload?: unknown }>
  | RuntimeEventBase<"handoff.completed", { target?: { providerPackageId?: string; destination?: string; channelId?: string; queue?: string; externalConversationId?: string; policyId?: string }; channel?: ChannelContext; policyId?: string; status: "accepted" | "adapter-completed"; payload?: unknown }>
  | RuntimeEventBase<"handoff.resumed", { reason?: string; payload?: unknown }>
  | RuntimeEventBase<"schedule.due", { scheduleId: string; scheduledFor?: string; dueAt: string; eventName: string; payload?: unknown; intent?: { operationAlias?: string; providerPackageId?: string; capability?: string; reason?: string }; metadata?: Record<string, unknown> }>
  | RuntimeEventBase<"conversation.closed", { reason?: string }>
  | RuntimeEventBase<"error", { code: string; message: string; details?: unknown }>
  | RuntimeEventBase<"eval.completed", { scenarioId?: string; success: boolean; score?: number; details?: unknown }>
  | RuntimeEventBase<`custom.${string}`, unknown>;
