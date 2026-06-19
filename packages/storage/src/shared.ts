import { defineChannelContext } from "@cognidesk/core";
import type {
  ConversationLifecycle,
  ConversationChannel,
  ConversationChannelInput,
  ConversationRecord,
  RuntimeEvent,
  RuntimeEventInput,
  RuntimeSnapshot,
} from "@cognidesk/core";

export function nowIso() {
  return new Date().toISOString();
}

export function assertLifecycle(value: string): ConversationLifecycle {
  if (value === "active" || value === "handoff" || value === "closed") return value;
  throw new Error(`Invalid conversation lifecycle '${value}' in storage.`);
}

export function decodeJson<T>(value: unknown): T {
  if (typeof value === "string") return JSON.parse(value) as T;
  return value as T;
}

export interface ConversationRow {
  id: string;
  agentId: string;
  lifecycle: string;
  contextJson: unknown;
  channelJson?: unknown | null;
  createdAt: string;
  updatedAt: string;
}

export interface RuntimeEventRow {
  id: string;
  conversationId: string;
  offset: number;
  type: string;
  telemetryTraceId: string | null;
  telemetrySpanId: string | null;
  dataJson: unknown;
  createdAt: string;
}

export interface RuntimeSnapshotRow {
  snapshotJson: unknown;
}

export function conversationFromRow<TConversationContext>(
  row: ConversationRow,
): ConversationRecord<TConversationContext> {
  const channel = row.channelJson === undefined || row.channelJson === null
    ? undefined
    : defineChannelContext(decodeJson<ConversationChannelInput>(row.channelJson));
  return {
    id: row.id,
    agentId: row.agentId,
    lifecycle: assertLifecycle(row.lifecycle),
    context: decodeJson<TConversationContext>(row.contextJson),
    ...(channel ? { channel } : {}),
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

export function normalizeConversationChannel(channel: ConversationChannelInput | undefined): ConversationChannel | undefined {
  return channel ? defineChannelContext(channel) : undefined;
}

export function eventFromRow(row: RuntimeEventRow): RuntimeEvent {
  const offset = Number(row.offset);
  if (!Number.isSafeInteger(offset) || offset < 1) {
    throw new Error(`Invalid runtime event offset '${String(row.offset)}' in storage.`);
  }
  return {
    id: row.id,
    conversationId: row.conversationId,
    offset,
    type: row.type as RuntimeEvent["type"],
    createdAt: row.createdAt,
    ...(row.telemetryTraceId
      ? {
          telemetry: {
            traceId: row.telemetryTraceId,
            ...(row.telemetrySpanId ? { spanId: row.telemetrySpanId } : {}),
          },
        }
      : {}),
    data: decodeJson(row.dataJson),
  } as RuntimeEvent;
}

export function runtimeEventFromParts(
  input: RuntimeEventInput,
  id: string,
  offset: number,
  createdAt: string,
): RuntimeEvent {
  return {
    id,
    conversationId: input.conversationId,
    offset,
    type: input.type,
    createdAt,
    ...(input.telemetry ? { telemetry: input.telemetry } : {}),
    data: input.data,
  } as RuntimeEvent;
}

export function snapshotFromRow(row: RuntimeSnapshotRow): RuntimeSnapshot {
  return decodeJson<RuntimeSnapshot>(row.snapshotJson);
}

export function storageMissingConversationError(conversationId: string) {
  return new Error(`Conversation '${conversationId}' does not exist.`);
}

export function isApprovalPending(events: RuntimeEvent[], approvalId: string, now = Date.now()) {
  let requested: Extract<RuntimeEvent, { type: "approval.requested" }> | undefined;
  let resolved = false;
  for (const event of events) {
    if (event.type === "approval.requested" && event.data.approvalId === approvalId) {
      requested = event;
      continue;
    }
    if (event.type === "approval.resolved" && event.data.approvalId === approvalId) {
      resolved = true;
    }
  }
  if (!requested || resolved) return false;
  return !requested.data.expiresAt || Date.parse(requested.data.expiresAt) > now;
}

export function hasActiveVoiceSegment(events: RuntimeEvent[]) {
  const active = new Set<string>();
  for (const event of events) {
    if (event.type === "voice.segment.started") {
      active.add(event.data.channelSegmentId);
      continue;
    }
    if (event.type === "voice.segment.ended" || event.type === "voice.connection.failed") {
      active.delete(event.data.channelSegmentId);
    }
  }
  return active.size > 0;
}
