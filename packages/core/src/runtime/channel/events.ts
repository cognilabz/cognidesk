import { randomUUID } from "node:crypto";
import type { ConversationRecord, RuntimeEventInput } from "../../storage.js";
import type {
  CapabilityUseDecision,
  ChannelEventBindingOutcome,
  ChannelEventHandlingDisposition,
  ChannelOutputIntent,
  ChannelOutputResolution,
  ChannelOutputResolutionDecision,
  ChannelOutputResolutionOutcome,
  ChannelOutputResolutionPayload,
  RuntimeEvent,
} from "../../types.js";
import {
  channelEventDedupeKey,
  defineChannelContext,
  defineChannelEvent,
  defineChannelOutputResolutionDecision,
  evaluateCapabilityUse,
} from "../../types.js";
import type {
  ChannelEventBindingInput,
  ChannelEventHandlingInput,
  RuntimeEventEmitter,
  RuntimeOptions,
} from "../types.js";

export function terminalBindingResult(binding?: ChannelEventBindingInput): {
  outcome: "ignored" | "deferred" | "handoff-review" | "blocked";
  bindingOutcome: "ignore" | "defer" | "handoff-review" | "blocked";
  disposition: "no-op" | "handoff-review";
} | undefined {
  switch (binding?.outcome) {
    case "ignore":
      return { outcome: "ignored", bindingOutcome: "ignore", disposition: "no-op" };
    case "defer":
      return { outcome: "deferred", bindingOutcome: "defer", disposition: "no-op" };
    case "handoff-review":
      return { outcome: "handoff-review", bindingOutcome: "handoff-review", disposition: "handoff-review" };
    case "blocked":
      return { outcome: "blocked", bindingOutcome: "blocked", disposition: "no-op" };
    default:
      return undefined;
  }
}

export function reasonFields(binding?: ChannelEventBindingInput) {
  return {
    ...(binding?.reason ? { reason: binding.reason } : {}),
    ...(binding?.reasonCode ? { reasonCode: binding.reasonCode } : {}),
    ...(binding?.reasonLabel ? { reasonLabel: binding.reasonLabel } : {}),
    ...(binding?.blockers ? { blockers: binding.blockers } : {}),
    ...(binding?.metadata ? { metadata: binding.metadata } : {}),
  };
}

export async function findDuplicateChannelEvent(
  options: RuntimeOptions,
  conversationId: string,
  channelEvent: ReturnType<typeof defineChannelEvent>,
) {
  const key = channelEventDedupeKey(channelEvent);
  if (!key) return undefined;
  const events = await options.storage.listEvents({ conversationId });
  return events.find((event) => {
    if (event.type === "channel.event.received") {
      return channelEventAuditDataMatchesKey(event.data, key);
    }
    if (event.type === "channel.received" || event.type === "channel.sent") {
      return channelEventAuditDataMatchesKey(event.data.payload, key);
    }
    return false;
  });
}

function channelEventAuditDataMatchesKey(data: unknown, key: string) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const event = data as {
    eventId?: string;
    identity?: { key?: string; dedupeKey?: string };
    source?: { eventId?: string; streamId?: string };
  };
  return event.identity?.dedupeKey === key
    || event.identity?.key === key
    || event.eventId === key
    || Boolean(event.source?.eventId && event.source.streamId && `${event.source.streamId}:${event.source.eventId}` === key)
    || event.source?.eventId === key;
}

export function resolveChannelEventCapabilityDecision(args: {
  options: RuntimeOptions;
  channelEvent: ReturnType<typeof defineChannelEvent>;
}): CapabilityUseDecision | undefined {
  if (!args.options.channels?.length) return undefined;
  const capability = args.channelEvent.direction === "outbound" ? "send" : args.channelEvent.nature === "schedule.due" ? "schedule" : "receive";
  return evaluateCapabilityUse({
    request: {
      channel: args.channelEvent.channel.kind,
      channelId: args.channelEvent.channel.channelId,
      capability,
      ...(args.channelEvent.source?.providerPackageId ? { providerPackageId: args.channelEvent.source.providerPackageId } : {}),
      outbound: args.channelEvent.direction === "outbound",
      sideEffect: false,
      externallyVisible: false,
      exposesSensitiveData: false,
      changesWorkflow: false,
      requiredPolicyIds: [],
    },
    channels: args.options.channels,
    ...(args.options.capabilityAvailability ? { availability: args.options.capabilityAvailability } : {}),
    ...(args.options.providerPackages ? { providerPackages: args.options.providerPackages } : {}),
  });
}

export function resolveChannelOutputChannel(
  intent: ChannelOutputIntent<unknown>,
  conversation: ConversationRecord,
) {
  if (intent.channel) return defineChannelContext(intent.channel);
  if (conversation.channel) return defineChannelContext(conversation.channel);
  return undefined;
}

export function resolveChannelOutputCapabilityDecision(args: {
  options: RuntimeOptions;
  intent: ChannelOutputIntent<unknown>;
  channel: ReturnType<typeof defineChannelContext>;
}): CapabilityUseDecision | undefined {
  const capability = channelOutputCapability(args.intent);
  const consequential = channelOutputIsConsequential(args.intent, capability);
  if (!args.options.channels?.length) {
    if (!consequential) return undefined;
    return blockedCapabilityDecision(
      "missing-channel-configuration",
      `Channel '${args.channel.kind}' is not configured.`,
      [{
        code: "missing-channel-configuration",
        message: `Channel '${args.channel.kind}' is not configured.`,
        kind: "missing-configuration",
      }],
    );
  }
  return evaluateCapabilityUse({
    request: {
      channel: args.channel.kind,
      channelId: args.channel.channelId,
      capability,
      ...(args.intent.providerPackageId ? { providerPackageId: args.intent.providerPackageId } : {}),
      ...(args.intent.actionAudience ? { actionAudience: args.intent.actionAudience } : {}),
      outbound: args.intent.outbound ?? channelOutputDefaultsOutbound(args.intent),
      sideEffect: args.intent.sideEffect ?? consequential,
      ...(args.intent.externallyVisible !== undefined ? { externallyVisible: args.intent.externallyVisible } : {}),
      ...(args.intent.exposesSensitiveData !== undefined ? { exposesSensitiveData: args.intent.exposesSensitiveData } : {}),
      ...(args.intent.changesWorkflow !== undefined ? { changesWorkflow: args.intent.changesWorkflow } : {}),
      requiredPolicyIds: args.intent.requiredPolicyIds ?? [],
    },
    channels: args.options.channels,
    ...(args.options.capabilityAvailability ? { availability: args.options.capabilityAvailability } : {}),
    ...(args.options.providerPackages ? { providerPackages: args.options.providerPackages } : {}),
  });
}

export function resolveDefaultChannelOutputDecision(args: {
  intent: ChannelOutputIntent<unknown>;
  capabilityDecision?: CapabilityUseDecision;
  configuredResolution?: ChannelOutputResolutionDecision;
}): ChannelOutputResolutionDecision {
  if (args.capabilityDecision && !args.capabilityDecision.allowed) {
    return {
      outcome: "block",
      reason: args.capabilityDecision.message,
      reasonCode: args.capabilityDecision.code,
      blockers: args.capabilityDecision.blockers,
      capability: channelOutputCapability(args.intent),
      ...(args.intent.providerPackageId ? { providerPackageId: args.intent.providerPackageId } : {}),
      ...(args.intent.operationAlias ? { operationAlias: args.intent.operationAlias } : {}),
      ...(args.intent.providerOperation ? { providerOperation: args.intent.providerOperation } : {}),
      ...(args.intent.actionAudience ? { actionAudience: args.intent.actionAudience } : {}),
    };
  }
  if (args.configuredResolution) return args.configuredResolution;

  const capability = channelOutputCapability(args.intent);
  const deliveryMode = args.intent.deliveryMode;
  const policy = args.capabilityDecision?.allowed ? args.capabilityDecision.policy : undefined;
  const outcome: ChannelOutputResolutionOutcome = deliveryMode === "none"
    ? "no-op"
    : deliveryMode === "draft" || args.intent.kind === "message.draft" || (capability === "send" && policy?.behavior?.draftFirst === true)
      ? "draft"
      : deliveryMode === "approval" || args.intent.kind === "approval.request"
        ? "approval-required"
        : deliveryMode === "provider-operation" || args.intent.kind === "provider.operation" || args.intent.kind === "provider.object.update"
          ? "provider-operation"
          : deliveryMode === "artifact" || args.intent.kind === "artifact.create"
            ? "artifact"
            : deliveryMode === "notify" || args.intent.kind === "notification.send"
              ? "notify"
              : deliveryMode === "handoff-review" || args.intent.kind === "handoff.review"
                ? "handoff-review"
                : "send";

  return {
    outcome,
    capability,
    deliveryMode: deliveryMode ?? channelOutputDeliveryModeForOutcome(outcome),
    ...(args.intent.providerPackageId ? { providerPackageId: args.intent.providerPackageId } : {}),
    ...(args.intent.operationAlias ? { operationAlias: args.intent.operationAlias } : {}),
    ...(args.intent.providerOperation ? { providerOperation: args.intent.providerOperation } : {}),
    ...(args.intent.actionAudience ? { actionAudience: args.intent.actionAudience } : {}),
    ...(args.intent.reason ? { reason: args.intent.reason } : {}),
    ...(args.intent.reasonCode ? { reasonCode: args.intent.reasonCode } : {}),
    ...(args.intent.reasonLabel ? { reasonLabel: args.intent.reasonLabel } : {}),
    ...(args.intent.policyId ? { policyId: args.intent.policyId } : {}),
    ...(args.intent.policyIds ? { policyIds: args.intent.policyIds } : {}),
    ...(args.intent.metadata ? { metadata: args.intent.metadata } : {}),
  };
}

export function enforceChannelOutputCapabilityDecision(args: {
  decision: ChannelOutputResolutionDecision;
  capabilityDecision?: CapabilityUseDecision;
}): ChannelOutputResolutionDecision {
  if (!args.capabilityDecision || args.capabilityDecision.allowed) return args.decision;
  if (!channelOutputShouldExecute(args.decision.outcome)) return args.decision;
  return {
    ...args.decision,
    outcome: "block",
    status: "blocked",
    reason: args.decision.reason ?? args.capabilityDecision.message,
    reasonCode: args.decision.reasonCode ?? args.capabilityDecision.code,
    blockers: args.decision.blockers ?? args.capabilityDecision.blockers,
  };
}

export function materializeChannelOutputResolution(args: {
  intent: ChannelOutputIntent<unknown>;
  decision: ChannelOutputResolutionDecision;
  channel?: ReturnType<typeof defineChannelContext>;
}): ChannelOutputResolution {
  const decision = defineChannelOutputResolutionDecision(args.decision);
  return {
    id: randomUUID(),
    ...(args.intent.id ? { intentId: args.intent.id } : {}),
    ...decision,
    status: decision.status ?? channelOutputStatus(decision.outcome),
    ...(args.channel ? { channel: args.channel } : {}),
    resolvedAt: new Date().toISOString(),
  };
}

export function channelOutputResolutionEventInput<TPayload>(args: {
  conversationId: string;
  channelEvent: ReturnType<typeof defineChannelEvent<ChannelOutputResolutionPayload<TPayload>>>;
}): RuntimeEventInput<"channel.event.received"> {
  return {
    conversationId: args.conversationId,
    type: "channel.event.received",
    data: {
      kind: args.channelEvent.kind,
      direction: args.channelEvent.direction,
      ...(args.channelEvent.id ? { eventId: args.channelEvent.id } : {}),
      ...(args.channelEvent.intent ? { intent: args.channelEvent.intent } : {}),
      ...(args.channelEvent.actor ? { actor: args.channelEvent.actor } : {}),
      channel: args.channelEvent.channel,
      bindingOutcome: "resume-existing",
      handlingDisposition: "output-resolution",
      ...(args.channelEvent.occurredAt ? { occurredAt: args.channelEvent.occurredAt } : {}),
      payload: args.channelEvent.payload,
      ...(args.channelEvent.source ? { source: args.channelEvent.source } : {}),
      ...(args.channelEvent.metadata ? { metadata: args.channelEvent.metadata } : {}),
    },
  };
}

export async function emitChannelOutputDeliveryEvents<TPayload>(
  emit: RuntimeEventEmitter,
  args: {
    conversationId: string;
    outputIntent: ChannelOutputIntent<TPayload>;
    resolution: ChannelOutputResolution<TPayload>;
    channel: ReturnType<typeof defineChannelContext>;
  },
) {
  const events: RuntimeEvent[] = [];
  if (args.resolution.outcome === "send") {
    events.push(await emit({
      conversationId: args.conversationId,
      type: "channel.sent",
      data: {
        channel: args.channel,
        ...(args.outputIntent.text ? { text: args.outputIntent.text } : {}),
        payload: {
          outputIntentId: args.outputIntent.id,
          resolutionId: args.resolution.id,
          ...(args.outputIntent.subject ? { subject: args.outputIntent.subject } : {}),
          ...(args.outputIntent.body ? { body: args.outputIntent.body } : {}),
          ...(args.outputIntent.attachments ? { attachments: args.outputIntent.attachments } : {}),
          ...(args.outputIntent.payload !== undefined ? { payload: args.outputIntent.payload } : {}),
          ...(args.resolution.externalMessageId ? { externalMessageId: args.resolution.externalMessageId } : {}),
          ...(args.resolution.providerResult !== undefined ? { providerResult: args.resolution.providerResult } : {}),
        },
      },
    }));
  }
  if (args.resolution.deliveryStatus) {
    events.push(await emit({
      conversationId: args.conversationId,
      type: "channel.delivery.updated",
      data: {
        channel: args.channel,
        status: args.resolution.deliveryStatus,
        payload: {
          outputIntentId: args.outputIntent.id,
          resolutionId: args.resolution.id,
          ...(args.resolution.externalMessageId ? { externalMessageId: args.resolution.externalMessageId } : {}),
          ...(args.resolution.providerResult !== undefined ? { providerResult: args.resolution.providerResult } : {}),
        },
      },
    }));
  }
  return events;
}

function channelOutputCapability(intent: ChannelOutputIntent<unknown>): NonNullable<ChannelOutputIntent["capability"]> {
  if (intent.capability) return intent.capability;
  if (intent.deliveryMode === "draft" || intent.kind === "message.draft") return "draft";
  if (intent.deliveryMode === "handoff-review" || intent.kind === "handoff.review") return "handoff";
  if (intent.deliveryMode === "notify" || intent.kind === "notification.send") return "notify";
  if (intent.deliveryMode === "artifact" || intent.kind === "artifact.create") return "artifact";
  if (
    intent.deliveryMode === "provider-operation"
    || intent.kind === "provider.operation"
    || intent.kind === "provider.object.update"
  ) {
    return "update-provider-object";
  }
  return "send";
}

function channelOutputIsConsequential(intent: ChannelOutputIntent<unknown>, capability: string) {
  if (intent.sideEffect !== undefined) return intent.sideEffect;
  if (intent.outbound !== undefined) return intent.outbound;
  if (intent.externallyVisible !== undefined) return intent.externallyVisible;
  if (intent.exposesSensitiveData !== undefined) return intent.exposesSensitiveData;
  if (intent.changesWorkflow !== undefined) return intent.changesWorkflow;
  return capability === "send"
    || capability === "draft"
    || capability === "update-provider-object"
    || capability === "delete-provider-object"
    || capability === "notify"
    || capability === "handoff";
}

function channelOutputDefaultsOutbound(intent: ChannelOutputIntent<unknown>) {
  if (intent.outbound !== undefined) return intent.outbound;
  if (intent.deliveryMode === "none" || intent.kind === "internal.note") return false;
  return true;
}

function channelOutputDeliveryModeForOutcome(
  outcome: ChannelOutputResolutionOutcome,
): NonNullable<ChannelOutputResolutionDecision["deliveryMode"]> {
  switch (outcome) {
    case "send":
      return "send";
    case "draft":
      return "draft";
    case "provider-operation":
      return "provider-operation";
    case "artifact":
      return "artifact";
    case "notify":
      return "notify";
    case "handoff-review":
      return "handoff-review";
    case "approval-required":
      return "approval";
    default:
      return "none";
  }
}

export function channelOutputStatus(outcome: ChannelOutputResolutionOutcome): ChannelOutputResolution["status"] {
  switch (outcome) {
    case "approval-required":
    case "handoff-review":
      return "pending";
    case "defer":
      return "deferred";
    case "block":
      return "blocked";
    case "drop":
    case "no-op":
      return "no-op";
    default:
      return "resolved";
  }
}

export function channelOutputShouldExecute(outcome: ChannelOutputResolutionOutcome) {
  return outcome === "send"
    || outcome === "draft"
    || outcome === "provider-operation"
    || outcome === "artifact"
    || outcome === "notify";
}

export function blockedCapabilityDecision(
  code: Exclude<CapabilityUseDecision, { allowed: true }>["code"],
  message: string,
  blockers: Array<{ code: string; message: string; kind?: string }>,
): CapabilityUseDecision {
  return { allowed: false, code, message, blockers };
}

export function resolveHandlingDisposition(
  channelEvent: ReturnType<typeof defineChannelEvent>,
  handling?: ChannelEventHandlingInput,
) {
  if (handling?.disposition) return handling.disposition;
  if (
    (channelEvent.nature === "message"
      || channelEvent.nature === "voice.turn.finalized"
      || channelEvent.intent === "customer-message"
      || channelEvent.intent === "customer-voice-turn")
    && channelEventText(channelEvent.payload)
  ) {
    return "model-turn";
  }
  if (channelEvent.intent === "output-resolution" || channelEvent.nature === "output.resolution") {
    return "output-resolution";
  }
  if (channelEvent.intent === "handoff-review") return "handoff-review";
  return "record-only";
}

export function channelEventRecordInput(args: {
  conversationId: string;
  channelEvent: ReturnType<typeof defineChannelEvent>;
  bindingOutcome: ChannelEventBindingOutcome;
  disposition: ChannelEventHandlingDisposition;
}): RuntimeEventInput<"channel.event.received"> {
  return {
    conversationId: args.conversationId,
    type: "channel.event.received",
    data: {
      ...(args.channelEvent.id ? { eventId: args.channelEvent.id } : {}),
      kind: args.channelEvent.kind,
      direction: args.channelEvent.direction,
      ...(args.channelEvent.intent ? { intent: args.channelEvent.intent } : {}),
      ...(args.channelEvent.actor ? { actor: args.channelEvent.actor } : {}),
      channel: args.channelEvent.channel,
      bindingOutcome: args.bindingOutcome,
      handlingDisposition: args.disposition,
      ...(args.channelEvent.occurredAt ? { occurredAt: args.channelEvent.occurredAt } : {}),
      ...(args.channelEvent.payload !== undefined ? { payload: args.channelEvent.payload } : {}),
      ...(args.channelEvent.identity ? { identity: args.channelEvent.identity } : {}),
      ...(args.channelEvent.source ? { source: args.channelEvent.source } : {}),
      ...(args.channelEvent.metadata ? { metadata: args.channelEvent.metadata } : {}),
    },
  };
}

export function channelEventText(payload: unknown) {
  if (typeof payload === "string") return payload.trim() || undefined;
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return undefined;
  const text = (payload as { text?: unknown; message?: unknown }).text
    ?? (payload as { text?: unknown; message?: unknown }).message;
  return typeof text === "string" && text.trim().length > 0 ? text : undefined;
}

export function findMessageCompletedForRole(events: RuntimeEvent[], role: "user" | "assistant") {
  let activeRole: "user" | "assistant" | undefined;
  for (const event of events) {
    if (event.type === "message.started") {
      activeRole = event.data.role;
      continue;
    }
    if (event.type !== "message.completed") continue;
    if (activeRole === role && event.data.intermediate !== true) return event;
    activeRole = undefined;
  }
  return undefined;
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function blockedChannelEventBinding(code: string, message: string) {
  return {
    accepted: false as const,
    reason: message,
    blockers: [{ code, message, kind: "missing-configuration" }],
  };
}
