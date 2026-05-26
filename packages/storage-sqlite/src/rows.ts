import type {
  ConversationLifecycle,
  ConversationRecord,
  RuntimeEvent,
  RuntimeEventInput,
  RuntimeSnapshot,
} from "@cognidesk/core";

export type RowRecord = Record<string, unknown>;

export function parseJson<T>(value: unknown): T {
  return JSON.parse(String(value)) as T;
}

export function snapshotFromRow(row: RowRecord): RuntimeSnapshot {
  return parseJson<RuntimeSnapshot>(row.snapshot_json);
}

export function conversationFromRow<TConversationContext>(row: RowRecord): ConversationRecord<TConversationContext> {
  return {
    id: String(row.id),
    agentId: String(row.agent_id),
    lifecycle: row.lifecycle as ConversationLifecycle,
    context: parseJson<TConversationContext>(row.context_json),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

export function eventFromRow(row: RowRecord): RuntimeEvent {
  return {
    id: String(row.id),
    conversationId: String(row.conversation_id),
    offset: Number(row.offset),
    type: String(row.type) as RuntimeEvent["type"],
    createdAt: String(row.created_at),
    traceId: typeof row.trace_id === "string" ? row.trace_id : undefined,
    data: parseJson(row.data_json),
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
    traceId: input.traceId,
    data: input.data,
  } as RuntimeEvent;
}
