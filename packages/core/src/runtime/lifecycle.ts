import type { ConversationRecord, StorageAdapter } from "../storage.js";
import type { RuntimeSnapshot } from "../types.js";
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
  emit: RuntimeEventEmitter;
}) {
  const conversation = await args.storage.updateConversationLifecycle(args.conversationId, "handoff");
  if (!conversation) throw new Error(`Conversation '${args.conversationId}' does not exist.`);
  await saveLifecycleSnapshot(args.storage, args.conversationId, "handoff", conversation.updatedAt);
  const event = await args.emit({
    conversationId: args.conversationId,
    type: "handoff.requested",
    data: {
      reason: args.reason,
      ...(args.summary ? { summary: args.summary } : {}),
      ...(args.payload !== undefined ? { payload: args.payload } : {}),
    },
  });
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
  toolName: string;
  input: unknown;
  conversationId: string;
  emit: RuntimeEventEmitter;
}) {
  if (args.toolName === "cognidesk.handoff") {
    const input = args.input as { reason: string; summary?: string; payload?: unknown };
    await applyHandoffRequest({
      storage: args.storage,
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
