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
  const lifecycle = String(row.lifecycle);
  if (lifecycle !== "active" && lifecycle !== "handoff" && lifecycle !== "closed") {
    throw new Error(`Invalid conversation lifecycle '${lifecycle}' in SQLite storage.`);
  }
  return {
    id: String(row.id),
    agentId: String(row.agent_id),
    lifecycle,
    context: parseJson<TConversationContext>(row.context_json),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

export function eventFromRow(row: RowRecord): RuntimeEvent {
  const offset = Number(row.offset);
  if (!Number.isSafeInteger(offset) || offset < 1) {
    throw new Error(`Invalid runtime event offset '${String(row.offset)}' in SQLite storage.`);
  }
  return {
    id: String(row.id),
    conversationId: String(row.conversation_id),
    offset,
    type: String(row.type) as RuntimeEvent["type"],
    createdAt: String(row.created_at),
    telemetry: typeof row.telemetry_trace_id === "string"
      ? {
          traceId: row.telemetry_trace_id,
          ...(typeof row.telemetry_span_id === "string" ? { spanId: row.telemetry_span_id } : {}),
        }
      : undefined,
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
    telemetry: input.telemetry,
    data: input.data,
  } as RuntimeEvent;
}
