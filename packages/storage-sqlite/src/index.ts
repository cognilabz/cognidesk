import { randomUUID } from "node:crypto";
import { createRequire } from "node:module";
import type {
  ConversationLifecycle,
  RuntimeEvent,
  RuntimeSnapshot,
  StorageAdapter,
  CreateConversationInput,
  ConversationRecord,
  RuntimeEventInput,
  ListEventsOptions,
} from "@cognidesk/core";

const require = createRequire(import.meta.url);
const { DatabaseSync } = require("node:sqlite") as typeof import("node:sqlite");

export interface SqliteStorageOptions {
  filename: string;
}

type RowRecord = Record<string, unknown>;

function nowIso() {
  return new Date().toISOString();
}

function parseJson<T>(value: unknown): T {
  return JSON.parse(String(value)) as T;
}

export class SqliteStorageAdapter implements StorageAdapter {
  private readonly db: InstanceType<typeof DatabaseSync>;

  constructor(readonly options: SqliteStorageOptions) {
    this.db = new DatabaseSync(options.filename);
    this.db.exec("PRAGMA foreign_keys = ON");
  }

  initialize() {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS conversations (
        id TEXT PRIMARY KEY,
        agent_id TEXT NOT NULL,
        lifecycle TEXT NOT NULL,
        context_json TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS runtime_events (
        id TEXT PRIMARY KEY,
        conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
        offset INTEGER NOT NULL,
        type TEXT NOT NULL,
        trace_id TEXT,
        data_json TEXT NOT NULL,
        created_at TEXT NOT NULL,
        UNIQUE(conversation_id, offset)
      );

      CREATE TABLE IF NOT EXISTS runtime_snapshots (
        conversation_id TEXT PRIMARY KEY REFERENCES conversations(id) ON DELETE CASCADE,
        snapshot_json TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `);
  }

  async createConversation<TConversationContext = unknown>(
    input: CreateConversationInput<TConversationContext>,
  ): Promise<ConversationRecord<TConversationContext>> {
    const id = input.id ?? randomUUID();
    const createdAt = nowIso();
    const lifecycle: ConversationLifecycle = "active";
    this.db.prepare(`
      INSERT INTO conversations (id, agent_id, lifecycle, context_json, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      id,
      input.agentId,
      lifecycle,
      JSON.stringify(input.context),
      createdAt,
      createdAt,
    );
    return {
      id,
      agentId: input.agentId,
      lifecycle,
      context: input.context,
      createdAt,
      updatedAt: createdAt,
    };
  }

  async getConversation<TConversationContext = unknown>(
    conversationId: string,
  ): Promise<ConversationRecord<TConversationContext> | null> {
    const row = this.db.prepare("SELECT * FROM conversations WHERE id = ?").get(conversationId) as RowRecord | undefined;
    return row ? conversationFromRow<TConversationContext>(row) : null;
  }

  async updateConversationLifecycle(
    conversationId: string,
    lifecycle: ConversationLifecycle,
  ): Promise<ConversationRecord | null> {
    const updatedAt = nowIso();
    this.db.prepare("UPDATE conversations SET lifecycle = ?, updated_at = ? WHERE id = ?").run(
      lifecycle,
      updatedAt,
      conversationId,
    );
    return this.getConversation(conversationId);
  }

  async appendEvent<TEvent extends RuntimeEventInput>(event: TEvent): Promise<RuntimeEvent> {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const nextOffsetRow = this.db.prepare(`
        SELECT COALESCE(MAX(offset), 0) + 1 AS next_offset
        FROM runtime_events
        WHERE conversation_id = ?
      `).get(event.conversationId) as { next_offset: number };
      const offset = Number(nextOffsetRow.next_offset);
      const id = event.id ?? randomUUID();
      const createdAt = event.createdAt ?? nowIso();
      this.db.prepare(`
        INSERT INTO runtime_events (id, conversation_id, offset, type, trace_id, data_json, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).run(
        id,
        event.conversationId,
        offset,
        event.type,
        event.traceId ?? null,
        JSON.stringify(event.data),
        createdAt,
      );
      this.db.prepare("UPDATE conversations SET updated_at = ? WHERE id = ?").run(
        createdAt,
        event.conversationId,
      );
      this.db.exec("COMMIT");
      return runtimeEventFromParts(event, id, offset, createdAt);
    } catch (error) {
      this.db.exec("ROLLBACK");
      throw error;
    }
  }

  async listEvents(options: ListEventsOptions): Promise<RuntimeEvent[]> {
    const limit = options.limit ?? 500;
    const rows = this.db.prepare(`
      SELECT * FROM runtime_events
      WHERE conversation_id = ? AND offset > ?
      ORDER BY offset ASC
      LIMIT ?
    `).all(options.conversationId, options.afterOffset ?? 0, limit) as RowRecord[];
    return rows.map(eventFromRow);
  }

  async saveSnapshot(snapshot: RuntimeSnapshot): Promise<void> {
    const updatedAt = nowIso();
    this.db.prepare(`
      INSERT INTO runtime_snapshots (conversation_id, snapshot_json, updated_at)
      VALUES (?, ?, ?)
      ON CONFLICT(conversation_id) DO UPDATE SET
        snapshot_json = excluded.snapshot_json,
        updated_at = excluded.updated_at
    `).run(snapshot.conversationId, JSON.stringify(snapshot), updatedAt);
  }

  async getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
    const row = this.db.prepare("SELECT snapshot_json FROM runtime_snapshots WHERE conversation_id = ?").get(conversationId) as RowRecord | undefined;
    return row ? parseJson<RuntimeSnapshot>(row.snapshot_json) : null;
  }
}

export function createSqliteStorage(options: SqliteStorageOptions) {
  const adapter = new SqliteStorageAdapter(options);
  adapter.initialize();
  return adapter;
}

function conversationFromRow<TConversationContext>(row: RowRecord): ConversationRecord<TConversationContext> {
  return {
    id: String(row.id),
    agentId: String(row.agent_id),
    lifecycle: row.lifecycle as ConversationLifecycle,
    context: parseJson<TConversationContext>(row.context_json),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

function eventFromRow(row: RowRecord): RuntimeEvent {
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

function runtimeEventFromParts(
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
