import type { ConversationRecord, StorageAdapter } from "../storage.js";
import {
  defineChannelContext,
  type ChannelPolicyConfig,
  type RuntimeSnapshot,
} from "../types.js";
import {
  channelPolicyIdsForKind,
  resolveRuntimeChannelPolicy,
} from "./channel-policy.js";
import { createLifecycleSnapshot } from "./snapshots.js";
import type {
  HandleUserMessageResult,
  RequestHandoffInput,
  ResumeConversationInput,
  RuntimeEventEmitter,
} from "./types.js";

export async function requireActiveConversation(storage: StorageAdapter, conversationId: string) {
  const conversation = await requireConversationRecord(storage, conversationId);
  if (conversation.lifecycle !== "active") {
    throw new Error(`Conversation '${conversationId}' is '${conversation.lifecycle}' and cannot receive user messages.`);
  }
  return conversation;
}

export async function requireConversationRecord(storage: StorageAdapter, conversationId: string) {
  const conversation = await storage.getConversation(conversationId);
  if (!conversation) throw new Error(`Conversation '${conversationId}' does not exist.`);
  return conversation;
}

export async function createLifecycleInterruptionResult(args: {
  storage: StorageAdapter;
  conversationId: string;
  events: import("../types.js").RuntimeEvent[];
}): Promise<HandleUserMessageResult | null> {
  const conversation = await requireConversationRecord(args.storage, args.conversationId);
  if (conversation.lifecycle === "active") return null;
  const snapshot = await args.storage.getSnapshot(args.conversationId) ?? {
    conversationId: args.conversationId,
    lifecycle: conversation.lifecycle,
    activeStateIds: [],
    updatedAt: conversation.updatedAt,
  };
  return {
    conversation,
    snapshot,
    events: args.events,
    text: "",
    ...(snapshot.activeJourneyId ? { activeJourneyId: snapshot.activeJourneyId } : {}),
  };
}

export async function applyConversationClosure(args: {
  storage: StorageAdapter;
  conversationId: string;
  reason?: string;
  emit: RuntimeEventEmitter;
}) {
  const conversation = await args.storage.updateConversationLifecycle(args.conversationId, "closed");
  if (!conversation) throw new Error(`Conversation '${args.conversationId}' does not exist.`);
  await saveLifecycleSnapshot(args.storage, args.conversationId, "closed", conversation.updatedAt);
  const event = await args.emit({
    conversationId: args.conversationId,
    type: "conversation.closed",
    data: args.reason ? { reason: args.reason } : {},
  });
  return { conversation, event };
}

export async function applyHandoffRequest(args: RequestHandoffInput & {
  storage: StorageAdapter;
  channels?: ChannelPolicyConfig[];
  emit: RuntimeEventEmitter;
}) {
  const handoffPolicy = await assertHandoffAllowed(args);
  const conversation = await args.storage.updateConversationLifecycle(args.conversationId, "handoff");
  if (!conversation) throw new Error(`Conversation '${args.conversationId}' does not exist.`);
  await saveLifecycleSnapshot(args.storage, args.conversationId, "handoff", conversation.updatedAt);
  const channel = conversation.channel ? defineChannelContext(conversation.channel) : undefined;
  const target = args.target ?? deriveHandoffTarget(handoffPolicy);
  const event = await args.emit({
    conversationId: args.conversationId,
    type: "handoff.requested",
    data: {
      reason: args.reason,
      ...(args.summary ? { summary: args.summary } : {}),
      ...(target ? { target } : {}),
      ...(args.payload !== undefined ? { payload: args.payload } : {}),
    },
  });
  if (target || channel || handoffPolicy?.id) {
    await args.emit({
      conversationId: args.conversationId,
      type: "handoff.completed",
      data: {
        status: "accepted",
        ...(target ? { target } : {}),
        ...(channel ? { channel } : {}),
        ...(handoffPolicy?.id ? { policyId: handoffPolicy.id } : {}),
        ...(args.payload !== undefined ? { payload: args.payload } : {}),
      },
    });
  }
  return { conversation, event };
}

export async function applyConversationResume(args: ResumeConversationInput & {
  storage: StorageAdapter;
  emit: RuntimeEventEmitter;
}) {
  const current = await requireConversationRecord(args.storage, args.conversationId);
  if (current.lifecycle === "closed") {
    throw new Error(`Conversation '${args.conversationId}' is closed and cannot be resumed.`);
  }
  const conversation = current.lifecycle === "active"
    ? current
    : await args.storage.updateConversationLifecycle(args.conversationId, "active");
  if (!conversation) throw new Error(`Conversation '${args.conversationId}' does not exist.`);
  await saveLifecycleSnapshot(args.storage, args.conversationId, "active", conversation.updatedAt);
  const event = await args.emit({
    conversationId: args.conversationId,
    type: "handoff.resumed",
    data: {
      ...(args.reason ? { reason: args.reason } : {}),
      ...(args.payload !== undefined ? { payload: args.payload } : {}),
    },
  });
  return { conversation, event };
}

export async function applyBuiltInLifecycleTool(args: {
  storage: StorageAdapter;
  channels?: ChannelPolicyConfig[];
  toolName: string;
  input: unknown;
  conversationId: string;
  emit: RuntimeEventEmitter;
}) {
  if (args.toolName === "cognidesk.handoff") {
    const input = args.input as { reason: string; summary?: string; payload?: unknown };
    await applyHandoffRequest({
      storage: args.storage,
      ...(args.channels ? { channels: args.channels } : {}),
      conversationId: args.conversationId,
      reason: input.reason,
      ...(input.summary ? { summary: input.summary } : {}),
      ...(input.payload !== undefined ? { payload: input.payload } : {}),
      emit: args.emit,
    });
    return true;
  }
  if (args.toolName === "cognidesk.endConversation") {
    const input = args.input as { reason?: string };
    await applyConversationClosure({
      storage: args.storage,
      conversationId: args.conversationId,
      ...(input.reason ? { reason: input.reason } : {}),
      emit: args.emit,
    });
    return true;
  }
  return false;
}

async function assertHandoffAllowed(args: {
  storage: StorageAdapter;
  conversationId: string;
  channels?: ChannelPolicyConfig[];
  emit: RuntimeEventEmitter;
}): Promise<ChannelPolicyConfig | undefined> {
  if (!args.channels?.length) return undefined;
  const conversation = await requireConversationRecord(args.storage, args.conversationId);
  if (!conversation.channel) return undefined;
  const channel = defineChannelContext(conversation.channel);
  const policy = resolveRuntimeChannelPolicy(args.channels, channel);
  const policyIdsForKind = channelPolicyIdsForKind(args.channels, channel);
  if (!policy && policyIdsForKind.length === 0) return undefined;
  if (
    policy
    && (policy.handoff?.enabled === true || (!policy.handoff && policy.enabledCapabilities.includes("handoff")))
  ) {
    return policy;
  }

  await args.emit({
    conversationId: args.conversationId,
    type: "custom.channel.handoff.blocked",
    data: {
      channel,
      channelPolicyIds: policy ? [policy.id] : policyIdsForKind,
      reason: "handoff-disabled-for-channel",
    },
  });
  throw new Error(`Handoff is not enabled for channel '${channel.channelId}'.`);
}

function deriveHandoffTarget(policy?: ChannelPolicyConfig): RequestHandoffInput["target"] | undefined {
  if (!policy?.handoff) return undefined;
  const providerPackageId = policy.handoff.providerPackageIds[0];
  const destination = policy.handoff.destinations[0];
  const policyId = policy.handoff.policyIds[0];
  if (!providerPackageId && !destination && !policyId) return undefined;
  return {
    ...(providerPackageId ? { providerPackageId } : {}),
    ...(destination ? { destination } : {}),
    ...(policy.id ? { channelId: policy.id } : {}),
    ...(policyId ? { policyId } : {}),
  };
}

export async function saveLifecycleSnapshot(
  storage: StorageAdapter,
  conversationId: string,
  lifecycle: RuntimeSnapshot["lifecycle"],
  updatedAt: string,
) {
  const currentSnapshot = await storage.getSnapshot(conversationId);
  await storage.saveSnapshot(createLifecycleSnapshot({
    conversationId,
    lifecycle,
    updatedAt,
    currentSnapshot,
  }));
}

export type LifecycleConversation = ConversationRecord;
