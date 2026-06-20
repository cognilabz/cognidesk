import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { createClient, type Client } from "@libsql/client";

export interface DiscordThreadBinding {
  discordThreadId: string;
  conversationId: string;
  guildId: string;
  parentChannelId: string;
  starterUserId?: string;
  threadName?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export type DiscordMirrorDirection = "discord-to-runtime" | "runtime-to-discord";

export interface RecordMirroredEventInput {
  discordThreadId: string;
  runtimeEventId: string;
  runtimeEventOffset: number;
  conversationId: string;
  direction: DiscordMirrorDirection;
  discordMessageId?: string;
}

export interface FlightDemoDiscordStoreOptions {
  filename: string;
}

export class FlightDemoDiscordStore {
  private readonly client: Client;
  private initializePromise: Promise<void> | null = null;

  constructor(private readonly options: FlightDemoDiscordStoreOptions) {
    this.client = createClient({ url: sqliteFilenameToUrl(options.filename) });
  }

  initialize() {
    this.initializePromise ??= this.runMigrations();
    return this.initializePromise;
  }

  async getBindingByThreadId(discordThreadId: string) {
    await this.initialize();
    const result = await this.client.execute({
      sql: "SELECT * FROM discord_thread_bindings WHERE discord_thread_id = ? LIMIT 1",
      args: [discordThreadId],
    });
    return result.rows[0] ? bindingFromRow(result.rows[0]) : null;
  }

  async listActiveBindings() {
    await this.initialize();
    const result = await this.client.execute({
      sql: "SELECT * FROM discord_thread_bindings WHERE active = 1 ORDER BY updated_at DESC",
      args: [],
    });
    return result.rows.map(bindingFromRow);
  }

  async listActiveBindingsForConversation(conversationId: string) {
    await this.initialize();
    const result = await this.client.execute({
      sql: "SELECT * FROM discord_thread_bindings WHERE conversation_id = ? AND active = 1 ORDER BY updated_at DESC",
      args: [conversationId],
    });
    return result.rows.map(bindingFromRow);
  }

  async upsertBinding(input: {
    discordThreadId: string;
    conversationId: string;
    guildId: string;
    parentChannelId: string;
    starterUserId?: string;
    threadName?: string;
    active?: boolean;
  }) {
    await this.initialize();
    const now = new Date().toISOString();
    await this.client.execute({
      sql: `
        INSERT INTO discord_thread_bindings (
          discord_thread_id,
          conversation_id,
          guild_id,
          parent_channel_id,
          starter_user_id,
          thread_name,
          active,
          created_at,
          updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(discord_thread_id) DO UPDATE SET
          conversation_id = excluded.conversation_id,
          guild_id = excluded.guild_id,
          parent_channel_id = excluded.parent_channel_id,
          starter_user_id = COALESCE(excluded.starter_user_id, discord_thread_bindings.starter_user_id),
          thread_name = COALESCE(excluded.thread_name, discord_thread_bindings.thread_name),
          active = excluded.active,
          updated_at = excluded.updated_at
      `,
      args: [
        input.discordThreadId,
        input.conversationId,
        input.guildId,
        input.parentChannelId,
        input.starterUserId ?? null,
        input.threadName ?? null,
        input.active === false ? 0 : 1,
        now,
        now,
      ],
    });
    return this.getBindingByThreadId(input.discordThreadId);
  }

  async deactivateBinding(discordThreadId: string) {
    await this.initialize();
    await this.client.execute({
      sql: "UPDATE discord_thread_bindings SET active = 0, updated_at = ? WHERE discord_thread_id = ?",
      args: [new Date().toISOString(), discordThreadId],
    });
  }

  async getLastMirroredOffset(discordThreadId: string) {
    await this.initialize();
    const result = await this.client.execute({
      sql: "SELECT COALESCE(MAX(runtime_event_offset), 0) AS last_offset FROM discord_mirrored_events WHERE discord_thread_id = ?",
      args: [discordThreadId],
    });
    return Number(result.rows[0]?.last_offset ?? 0);
  }

  async hasMirroredEvent(discordThreadId: string, runtimeEventId: string) {
    await this.initialize();
    const result = await this.client.execute({
      sql: "SELECT 1 FROM discord_mirrored_events WHERE discord_thread_id = ? AND runtime_event_id = ? LIMIT 1",
      args: [discordThreadId, runtimeEventId],
    });
    return result.rows.length > 0;
  }

  async recordMirroredEvent(input: RecordMirroredEventInput) {
    await this.initialize();
    const now = new Date().toISOString();
    await this.client.execute({
      sql: `
        INSERT INTO discord_mirrored_events (
          discord_thread_id,
          runtime_event_id,
          runtime_event_offset,
          conversation_id,
          discord_message_id,
          direction,
          created_at,
          updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(discord_thread_id, runtime_event_id) DO UPDATE SET
          runtime_event_offset = excluded.runtime_event_offset,
          conversation_id = excluded.conversation_id,
          discord_message_id = COALESCE(excluded.discord_message_id, discord_mirrored_events.discord_message_id),
          direction = excluded.direction,
          updated_at = excluded.updated_at
      `,
      args: [
        input.discordThreadId,
        input.runtimeEventId,
        input.runtimeEventOffset,
        input.conversationId,
        input.discordMessageId ?? null,
        input.direction,
        now,
        now,
      ],
    });
  }

  close() {
    this.client.close();
  }

  private async runMigrations() {
    if (this.options.filename !== ":memory:") {
      const dir = dirname(this.options.filename);
      if (dir && dir !== ".") await mkdir(dir, { recursive: true });
    }
    await this.client.execute("PRAGMA foreign_keys = ON");
    await this.client.execute("PRAGMA busy_timeout = 5000");
    await this.client.batch([
      `
        CREATE TABLE IF NOT EXISTS discord_thread_bindings (
          discord_thread_id TEXT PRIMARY KEY,
          conversation_id TEXT NOT NULL,
          guild_id TEXT NOT NULL,
          parent_channel_id TEXT NOT NULL,
          starter_user_id TEXT,
          thread_name TEXT,
          active INTEGER NOT NULL DEFAULT 1,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        )
      `,
      "CREATE INDEX IF NOT EXISTS discord_thread_bindings_conversation_idx ON discord_thread_bindings(conversation_id, active)",
      "CREATE INDEX IF NOT EXISTS discord_thread_bindings_updated_idx ON discord_thread_bindings(updated_at DESC)",
      `
        CREATE TABLE IF NOT EXISTS discord_mirrored_events (
          discord_thread_id TEXT NOT NULL,
          runtime_event_id TEXT NOT NULL,
          runtime_event_offset INTEGER NOT NULL,
          conversation_id TEXT NOT NULL,
          discord_message_id TEXT,
          direction TEXT NOT NULL CHECK(direction IN ('discord-to-runtime', 'runtime-to-discord')),
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          PRIMARY KEY (discord_thread_id, runtime_event_id)
        )
      `,
      "CREATE INDEX IF NOT EXISTS discord_mirrored_events_conversation_idx ON discord_mirrored_events(conversation_id, runtime_event_offset)",
    ], "write");
  }
}

export function createFlightDemoDiscordStore(options: FlightDemoDiscordStoreOptions) {
  return new FlightDemoDiscordStore(options);
}

function bindingFromRow(row: Record<string, unknown>): DiscordThreadBinding {
  return {
    discordThreadId: String(row.discord_thread_id),
    conversationId: String(row.conversation_id),
    guildId: String(row.guild_id),
    parentChannelId: String(row.parent_channel_id),
    ...(row.starter_user_id ? { starterUserId: String(row.starter_user_id) } : {}),
    ...(row.thread_name ? { threadName: String(row.thread_name) } : {}),
    active: Number(row.active) === 1,
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

function sqliteFilenameToUrl(filename: string) {
  if (filename === ":memory:") return "file::memory:?cache=shared";
  if (filename.startsWith("file:")) return filename;
  return `file:${filename}`;
}
