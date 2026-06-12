import { randomUUID } from "node:crypto";
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
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import type { Client, Pool, PoolConfig } from "pg";
import {
  postgresConversations,
  postgresRuntimeEvents,
  postgresRuntimeSnapshots,
  postgresStorageSchema,
} from "./schema/postgres.js";
import {
  conversationFromRow,
  eventFromRow,
  nowIso,
  runtimeEventFromParts,
  snapshotFromRow,
  storageMissingConversationError,
} from "./shared.js";

export type PostgresStorageDatabase = NodePgDatabase<typeof postgresStorageSchema>;
export type PostgresStorageClient = Pool | Client;

export type PostgresStorageOptions =
  | {
      url: string;
      connection?: never;
      client?: never;
      db?: never;
    }
  | {
      connection: string | PoolConfig;
      url?: never;
      client?: never;
      db?: never;
    }
  | {
      client: PostgresStorageClient;
      url?: never;
      connection?: never;
      db?: never;
    }
  | {
      db: PostgresStorageDatabase;
      url?: never;
      connection?: never;
      client?: never;
    };

export class PostgresStorageAdapter implements StorageAdapter {
  private readonly db: PostgresStorageDatabase;
  private readonly ownedClient: PostgresStorageClient | null;
  private initializePromise: Promise<void> | null = null;

  constructor(readonly options: PostgresStorageOptions) {
    if ("db" in options && options.db) {
      this.db = options.db;
      this.ownedClient = null;
      return;
    }

    if ("client" in options && options.client) {
      this.db = drizzle(options.client, { schema: postgresStorageSchema });
      this.ownedClient = null;
      return;
    }

    const connection = "url" in options ? options.url : options.connection;
    const db = drizzle({ connection, schema: postgresStorageSchema });
    this.db = db;
    this.ownedClient = db.$client;
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
    await this.db.insert(postgresConversations).values({
      id,
      agentId: input.agentId,
      lifecycle,
      contextJson: input.context,
      createdAt,
      updatedAt: createdAt,
    });
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
    const rows = await this.db.select().from(postgresConversations)
      .where(eq(postgresConversations.id, conversationId))
      .limit(1);
    const row = rows[0];
    return row ? conversationFromRow<TConversationContext>(row) : null;
  }

  async updateConversationLifecycle(
    conversationId: string,
    lifecycle: ConversationLifecycle,
  ): Promise<ConversationRecord | null> {
    const updatedAt = nowIso();
    await this.db.update(postgresConversations)
      .set({ lifecycle, updatedAt })
      .where(eq(postgresConversations.id, conversationId));
    return this.getConversation(conversationId);
  }

  async appendEvent<TEvent extends RuntimeEventInput>(event: TEvent): Promise<RuntimeEvent> {
    return this.db.transaction(async (tx) => {
      const lockedConversation = await tx.update(postgresConversations)
        .set({ updatedAt: sql`${postgresConversations.updatedAt}` })
        .where(eq(postgresConversations.id, event.conversationId))
        .returning({ id: postgresConversations.id });
      if (!lockedConversation[0]) throw storageMissingConversationError(event.conversationId);

      const [nextOffsetRow] = await tx.select({
        nextOffset: sql<number>`COALESCE(MAX(${postgresRuntimeEvents.offset}), 0) + 1`,
      })
        .from(postgresRuntimeEvents)
        .where(eq(postgresRuntimeEvents.conversationId, event.conversationId));
      const offset = Number(nextOffsetRow?.nextOffset ?? 1);
      const id = event.id ?? randomUUID();
      const createdAt = event.createdAt ?? nowIso();
      await tx.insert(postgresRuntimeEvents).values({
        id,
        conversationId: event.conversationId,
        offset,
        type: event.type,
        telemetryTraceId: event.telemetry?.traceId ?? null,
        telemetrySpanId: event.telemetry?.spanId ?? null,
        dataJson: event.data,
        createdAt,
      });
      await tx.update(postgresConversations)
        .set({ updatedAt: createdAt })
        .where(eq(postgresConversations.id, event.conversationId));
      return runtimeEventFromParts(event, id, offset, createdAt);
    });
  }

  async listEvents(options: ListEventsOptions): Promise<RuntimeEvent[]> {
    const filters = [
      eq(postgresRuntimeEvents.conversationId, options.conversationId),
      gt(postgresRuntimeEvents.offset, options.afterOffset ?? 0),
    ];
    const query = this.db.select().from(postgresRuntimeEvents)
      .where(and(...filters))
      .orderBy(asc(postgresRuntimeEvents.offset));
    const rows = options.limit === undefined
      ? await query
      : await query.limit(options.limit);
    return rows.map(eventFromRow);
  }

  async saveSnapshot(snapshot: RuntimeSnapshot): Promise<void> {
    await this.db.transaction(async (tx) => {
      const conversation = await tx.select({ id: postgresConversations.id })
        .from(postgresConversations)
        .where(eq(postgresConversations.id, snapshot.conversationId))
        .limit(1);
      if (!conversation[0]) throw storageMissingConversationError(snapshot.conversationId);

      const updatedAt = nowIso();
      await tx.insert(postgresRuntimeSnapshots).values({
        conversationId: snapshot.conversationId,
        snapshotJson: snapshot,
        updatedAt,
      }).onConflictDoUpdate({
        target: postgresRuntimeSnapshots.conversationId,
        set: {
          snapshotJson: snapshot,
          updatedAt,
        },
      });
    });
  }

  async getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
    const rows = await this.db.select({ snapshotJson: postgresRuntimeSnapshots.snapshotJson })
      .from(postgresRuntimeSnapshots)
      .where(eq(postgresRuntimeSnapshots.conversationId, conversationId))
      .limit(1);
    const row = rows[0];
    return row ? snapshotFromRow(row) : null;
  }

  async close() {
    await this.ownedClient?.end();
  }

  private async runMigrations() {
    for (const statement of postgresMigrationStatements) {
      await this.db.execute(sql.raw(statement));
    }
  }
}

export function createPostgresStorage(options: PostgresStorageOptions) {
  return new PostgresStorageAdapter(options);
}

const postgresMigrationStatements = [
  `CREATE TABLE IF NOT EXISTS conversations (
    id TEXT PRIMARY KEY,
    agent_id TEXT NOT NULL,
    lifecycle TEXT NOT NULL CHECK (lifecycle IN ('active', 'handoff', 'closed')),
    context_json JSONB NOT NULL,
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
    data_json JSONB NOT NULL,
    created_at TEXT NOT NULL
  )`,
  "CREATE UNIQUE INDEX IF NOT EXISTS runtime_events_conversation_offset_idx ON runtime_events(conversation_id, offset)",
  "CREATE INDEX IF NOT EXISTS runtime_events_conversation_created_idx ON runtime_events(conversation_id, created_at)",
  "CREATE INDEX IF NOT EXISTS runtime_events_type_idx ON runtime_events(type)",
  "CREATE INDEX IF NOT EXISTS runtime_events_trace_idx ON runtime_events(telemetry_trace_id)",
  `CREATE TABLE IF NOT EXISTS runtime_snapshots (
    conversation_id TEXT PRIMARY KEY REFERENCES conversations(id) ON DELETE CASCADE,
    snapshot_json JSONB NOT NULL,
    updated_at TEXT NOT NULL
  )`,
];
