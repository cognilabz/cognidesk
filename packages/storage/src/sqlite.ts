import { randomUUID } from "node:crypto";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { createClient, type Client, type Config as LibsqlConfig } from "@libsql/client";
import type {
  ConversationLifecycle,
  ConversationRecord,
  CreateConversationInput,
  ListEventsOptions,
  RuntimeEvent,
  RuntimeEventInput,
  RuntimeSnapshot,
  StorageAdapter,
} from "@cognidesk/core";
import { and, asc, eq, gt, sql } from "drizzle-orm";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import {
  sqliteConversations,
  sqliteRuntimeEvents,
  sqliteRuntimeSnapshots,
  sqliteStorageSchema,
} from "./schema/sqlite.js";
import {
  conversationFromRow,
  eventFromRow,
  hasActiveVoiceSegment,
  isApprovalPending,
  nowIso,
  normalizeConversationChannel,
  runtimeEventFromParts,
  snapshotFromRow,
  storageMissingConversationError,
} from "./shared.js";

export type SqliteStorageDatabase = LibSQLDatabase<typeof sqliteStorageSchema>;
type SqliteTransaction = Parameters<Parameters<SqliteStorageDatabase["transaction"]>[0]>[0];

export type SqliteStorageOptions =
  | {
      filename: string;
      url?: never;
      authToken?: never;
      client?: never;
      db?: never;
    }
  | {
      url: string;
      authToken?: string;
      filename?: never;
      client?: never;
      db?: never;
    }
  | {
      client: Client;
      filename?: never;
      url?: never;
      authToken?: never;
      db?: never;
    }
  | {
      db: SqliteStorageDatabase;
      filename?: never;
      url?: never;
      authToken?: never;
      client?: never;
    };

export class SqliteStorageAdapter implements StorageAdapter {
  private readonly client: Client | null;
  private readonly db: SqliteStorageDatabase;
  private readonly ownsClient: boolean;
  private initializePromise: Promise<void> | null = null;
  private writeQueue: Promise<void> = Promise.resolve();

  constructor(readonly options: SqliteStorageOptions) {
    if ("db" in options && options.db) {
      this.client = null;
      this.db = options.db;
      this.ownsClient = false;
      return;
    }

    if ("client" in options && options.client) {
      this.client = options.client;
      this.db = drizzle(options.client, { schema: sqliteStorageSchema });
      this.ownsClient = false;
      return;
    }

    const clientOptions = sqliteClientConfig(options);
    this.client = createClient(clientOptions);
    this.db = drizzle(this.client, { schema: sqliteStorageSchema });
    this.ownsClient = true;
  }

  initialize(): Promise<void> {
    this.initializePromise ??= this.runMigrations();
    return this.initializePromise;
  }

  async createConversation<TConversationContext = unknown>(
    input: CreateConversationInput<TConversationContext>,
  ): Promise<ConversationRecord<TConversationContext>> {
    const id = input.id ?? randomUUID();
    const createdAt = nowIso();
    const lifecycle: ConversationLifecycle = "active";
    const channel = normalizeConversationChannel(input.channel);
    await this.db.insert(sqliteConversations).values({
      id,
      agentId: input.agentId,
      lifecycle,
      contextJson: JSON.stringify(input.context),
      channelJson: channel ? JSON.stringify(channel) : null,
      createdAt,
      updatedAt: createdAt,
    });
    return {
      id,
      agentId: input.agentId,
      lifecycle,
      context: input.context,
      ...(channel ? { channel } : {}),
      createdAt,
      updatedAt: createdAt,
    };
  }

  async getConversation<TConversationContext = unknown>(
    conversationId: string,
  ): Promise<ConversationRecord<TConversationContext> | null> {
    const row = await this.db.select().from(sqliteConversations)
      .where(eq(sqliteConversations.id, conversationId))
      .limit(1)
      .get();
    return row ? conversationFromRow<TConversationContext>(row) : null;
  }

  async updateConversationLifecycle(
    conversationId: string,
    lifecycle: ConversationLifecycle,
  ): Promise<ConversationRecord | null> {
    const updatedAt = nowIso();
    await this.db.update(sqliteConversations)
      .set({ lifecycle, updatedAt })
      .where(eq(sqliteConversations.id, conversationId));
    return this.getConversation(conversationId);
  }

  async appendEvent<TEvent extends RuntimeEventInput>(event: TEvent): Promise<RuntimeEvent> {
    return this.enqueueWrite(() => this.db.transaction(async (tx) => {
      await this.requireConversation(tx, event.conversationId);
      return this.insertRuntimeEvent(tx, event);
    }));
  }

  async appendEventIfApprovalPending<TEvent extends RuntimeEventInput<"approval.resolved">>(
    event: TEvent,
  ): Promise<RuntimeEvent | null> {
    return this.enqueueWrite(() => this.db.transaction(async (tx) => {
      await this.requireConversation(tx, event.conversationId);
      const approvalEvents = await tx.select().from(sqliteRuntimeEvents)
        .where(and(
          eq(sqliteRuntimeEvents.conversationId, event.conversationId),
          sql`${sqliteRuntimeEvents.type} IN ('approval.requested', 'approval.resolved')`,
          sql`json_extract(${sqliteRuntimeEvents.dataJson}, '$.approvalId') = ${event.data.approvalId}`,
        ))
        .orderBy(asc(sqliteRuntimeEvents.offset))
        .all();
      if (!isApprovalPending(approvalEvents.map(eventFromRow), event.data.approvalId)) return null;
      return this.insertRuntimeEvent(tx, event);
    }));
  }

  async appendEventIfNoActiveVoiceSegment<TEvent extends RuntimeEventInput<"voice.segment.started">>(
    event: TEvent,
  ): Promise<RuntimeEvent | null> {
    return this.enqueueWrite(() => this.db.transaction(async (tx) => {
      await this.requireConversation(tx, event.conversationId);
      const voiceEvents = await tx.select().from(sqliteRuntimeEvents)
        .where(and(
          eq(sqliteRuntimeEvents.conversationId, event.conversationId),
          sql`${sqliteRuntimeEvents.type} IN ('voice.segment.started', 'voice.segment.ended', 'voice.connection.failed')`,
        ))
        .orderBy(asc(sqliteRuntimeEvents.offset))
        .all();
      if (hasActiveVoiceSegment(voiceEvents.map(eventFromRow))) return null;
      return this.insertRuntimeEvent(tx, event);
    }));
  }

  async listEvents(options: ListEventsOptions): Promise<RuntimeEvent[]> {
    const filters = [
      eq(sqliteRuntimeEvents.conversationId, options.conversationId),
      gt(sqliteRuntimeEvents.offset, options.afterOffset ?? 0),
    ];
    const query = this.db.select().from(sqliteRuntimeEvents)
      .where(and(...filters))
      .orderBy(asc(sqliteRuntimeEvents.offset));
    const rows = options.limit === undefined
      ? await query.all()
      : await query.limit(options.limit).all();
    return rows.map(eventFromRow);
  }

  async saveSnapshot(snapshot: RuntimeSnapshot): Promise<void> {
    await this.enqueueWrite(() => this.db.transaction(async (tx) => {
      const conversation = await tx.select({ id: sqliteConversations.id })
        .from(sqliteConversations)
        .where(eq(sqliteConversations.id, snapshot.conversationId))
        .limit(1)
        .get();
      if (!conversation) throw storageMissingConversationError(snapshot.conversationId);

      const updatedAt = nowIso();
      await tx.insert(sqliteRuntimeSnapshots).values({
        conversationId: snapshot.conversationId,
        snapshotJson: JSON.stringify(snapshot),
        updatedAt,
      }).onConflictDoUpdate({
        target: sqliteRuntimeSnapshots.conversationId,
        set: {
          snapshotJson: JSON.stringify(snapshot),
          updatedAt,
        },
      });
    }));
  }

  async getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
    const row = await this.db.select({ snapshotJson: sqliteRuntimeSnapshots.snapshotJson })
      .from(sqliteRuntimeSnapshots)
      .where(eq(sqliteRuntimeSnapshots.conversationId, conversationId))
      .limit(1)
      .get();
    return row ? snapshotFromRow(row) : null;
  }

  close() {
    if (this.ownsClient) this.client?.close();
  }

  private async runMigrations() {
    if ("filename" in this.options && this.options.filename && this.options.filename !== ":memory:") {
      const dir = dirname(this.options.filename);
      if (dir && dir !== ".") await mkdir(dir, { recursive: true });
    }

    await this.db.run("PRAGMA foreign_keys = ON");
    await this.db.run("PRAGMA busy_timeout = 5000");
    for (const statement of sqliteMigrationStatements) {
      await this.db.run(statement);
    }
    await this.addColumnIfMissing("conversations", "channel_json", "TEXT");
  }

  private async addColumnIfMissing(table: string, column: string, definition: string) {
    try {
      await this.db.run(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
    } catch (error) {
      if (!isDuplicateColumnError(error)) throw error;
    }
  }

  private enqueueWrite<T>(operation: () => Promise<T>): Promise<T> {
    const run = this.writeQueue.then(operation, operation);
    this.writeQueue = run.then(() => undefined, () => undefined);
    return run;
  }

  private async requireConversation(tx: SqliteTransaction, conversationId: string) {
    const conversation = await tx.update(sqliteConversations)
      .set({ updatedAt: sql`${sqliteConversations.updatedAt}` })
      .where(eq(sqliteConversations.id, conversationId))
      .returning({ id: sqliteConversations.id })
      .get();
    if (!conversation) throw storageMissingConversationError(conversationId);
  }

  private async insertRuntimeEvent<TEvent extends RuntimeEventInput>(
    tx: SqliteTransaction,
    event: TEvent,
  ): Promise<RuntimeEvent> {
    const nextOffsetRow = await tx.select({
      nextOffset: sql<number>`COALESCE(MAX(${sqliteRuntimeEvents.offset}), 0) + 1`,
    })
      .from(sqliteRuntimeEvents)
      .where(eq(sqliteRuntimeEvents.conversationId, event.conversationId))
      .get();
    const offset = Number(nextOffsetRow?.nextOffset ?? 1);
    const id = event.id ?? randomUUID();
    const createdAt = event.createdAt ?? nowIso();
    await tx.insert(sqliteRuntimeEvents).values({
      id,
      conversationId: event.conversationId,
      offset,
      type: event.type,
      telemetryTraceId: event.telemetry?.traceId ?? null,
      telemetrySpanId: event.telemetry?.spanId ?? null,
      dataJson: JSON.stringify(event.data),
      createdAt,
    });
    await tx.update(sqliteConversations)
      .set({ updatedAt: createdAt })
      .where(eq(sqliteConversations.id, event.conversationId));
    return runtimeEventFromParts(event, id, offset, createdAt);
  }
}

export function createSqliteStorage(options: SqliteStorageOptions) {
  return new SqliteStorageAdapter(options);
}

function sqliteClientConfig(options: Exclude<SqliteStorageOptions, { client: Client } | { db: SqliteStorageDatabase }>): LibsqlConfig {
  if ("filename" in options) return { url: sqliteFilenameToUrl(options.filename) };
  return {
    url: options.url,
    ...(options.authToken ? { authToken: options.authToken } : {}),
  };
}

function sqliteFilenameToUrl(filename: string) {
  if (filename === ":memory:") return "file::memory:?cache=shared";
  if (filename.startsWith("file:")) return filename;
  return `file:${filename}`;
}

function isDuplicateColumnError(error: unknown) {
  return collectErrorMessages(error).some((message) =>
    /duplicate column|already exists/i.test(message)
  );
}

function collectErrorMessages(error: unknown): string[] {
  const messages: string[] = [];
  let current = error;
  while (current) {
    if (current instanceof Error) messages.push(current.message);
    if (typeof current === "string") messages.push(current);
    if (typeof current !== "object") break;
    const cause = "cause" in current ? (current as { cause?: unknown }).cause : undefined;
    if (!cause || cause === current) break;
    current = cause;
  }
  return messages;
}

const sqliteMigrationStatements = [
  `CREATE TABLE IF NOT EXISTS conversations (
    id TEXT PRIMARY KEY,
    agent_id TEXT NOT NULL,
    lifecycle TEXT NOT NULL CHECK (lifecycle IN ('active', 'handoff', 'closed')),
    context_json TEXT NOT NULL,
    channel_json TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS runtime_events (
    id TEXT PRIMARY KEY,
    conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    offset INTEGER NOT NULL CHECK (offset > 0),
    type TEXT NOT NULL,
    telemetry_trace_id TEXT,
    telemetry_span_id TEXT,
    data_json TEXT NOT NULL,
    created_at TEXT NOT NULL
  )`,
  "CREATE UNIQUE INDEX IF NOT EXISTS runtime_events_conversation_offset_idx ON runtime_events(conversation_id, offset)",
  "CREATE INDEX IF NOT EXISTS runtime_events_conversation_created_idx ON runtime_events(conversation_id, created_at)",
  "CREATE INDEX IF NOT EXISTS runtime_events_type_idx ON runtime_events(type)",
  "CREATE INDEX IF NOT EXISTS runtime_events_trace_idx ON runtime_events(telemetry_trace_id)",
  `CREATE TABLE IF NOT EXISTS runtime_snapshots (
    conversation_id TEXT PRIMARY KEY REFERENCES conversations(id) ON DELETE CASCADE,
    snapshot_json TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )`,
];
