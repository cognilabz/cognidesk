import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRuntime } from "@cognidesk/core";
import { createClient } from "@libsql/client";
import { describe, expect, it } from "vitest";
import { defineStorageAdapterConformanceSuite } from "../src/conformance.js";
import { createSqliteStorage, type SqliteStorageAdapter } from "../src/sqlite.js";

defineStorageAdapterConformanceSuite<SqliteStorageAdapter>({
  name: "SQLite storage adapter",
  createStorage: () => createSqliteStorage({ filename: ":memory:" }),
  cleanup: (storage) => storage.close(),
});

async function withStorageFile<T>(fn: (filename: string) => Promise<T>) {
  const dir = await mkdtemp(join(tmpdir(), "cognidesk-sqlite-"));
  try {
    return await fn(join(dir, "test.sqlite"));
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

async function expectIndexColumns(
  client: ReturnType<typeof createClient>,
  indexName: string,
  expected: Array<{ name: string; desc: 0 | 1 }>,
) {
  const result = await client.execute(`PRAGMA index_xinfo('${indexName}')`);
  expect(result.rows
    .filter((row) => Number(row.key) === 1)
    .map((row) => ({ name: String(row.name), desc: Number(row.desc) }))).toEqual(expected);
}

describe("SQLite runtime integration", () => {
  it("creates conversation listing indexes during initialization", async () => {
    await withStorageFile(async (filename) => {
      const storage = createSqliteStorage({ filename });
      try {
        await storage.initialize();
        const client = createClient({ url: `file:${filename}` });
        try {
          const result = await client.execute({
            sql: "SELECT name FROM sqlite_master WHERE type = 'index' AND name IN (?, ?) ORDER BY name",
            args: ["conversations_agent_updated_desc_id_asc_idx", "conversations_updated_desc_id_asc_idx"],
          });
          expect(result.rows.map((row) => row.name)).toEqual([
            "conversations_agent_updated_desc_id_asc_idx",
            "conversations_updated_desc_id_asc_idx",
          ]);
          await expectIndexColumns(client, "conversations_updated_desc_id_asc_idx", [
            { name: "updated_at", desc: 1 },
            { name: "id", desc: 0 },
          ]);
          await expectIndexColumns(client, "conversations_agent_updated_desc_id_asc_idx", [
            { name: "agent_id", desc: 0 },
            { name: "updated_at", desc: 1 },
            { name: "id", desc: 0 },
          ]);
        } finally {
          client.close();
        }
      } finally {
        storage.close();
      }
    });
  });

  it("adds corrected conversation listing indexes to databases with previous ascending indexes", async () => {
    await withStorageFile(async (filename) => {
      const client = createClient({ url: `file:${filename}` });
      try {
        await client.execute(`CREATE TABLE conversations (
          id TEXT PRIMARY KEY,
          agent_id TEXT NOT NULL,
          lifecycle TEXT NOT NULL CHECK (lifecycle IN ('active', 'handoff', 'closed')),
          context_json TEXT NOT NULL,
          channel_json TEXT,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        )`);
        await client.execute("CREATE INDEX conversations_updated_id_idx ON conversations(updated_at ASC, id ASC)");
        await client.execute(
          "CREATE INDEX conversations_agent_updated_id_idx ON conversations(agent_id, updated_at ASC, id ASC)",
        );
      } finally {
        client.close();
      }

      const storage = createSqliteStorage({ filename });
      try {
        await storage.initialize();
        const upgradedClient = createClient({ url: `file:${filename}` });
        try {
          await expectIndexColumns(upgradedClient, "conversations_updated_id_idx", [
            { name: "updated_at", desc: 0 },
            { name: "id", desc: 0 },
          ]);
          await expectIndexColumns(upgradedClient, "conversations_updated_desc_id_asc_idx", [
            { name: "updated_at", desc: 1 },
            { name: "id", desc: 0 },
          ]);
          await expectIndexColumns(upgradedClient, "conversations_agent_updated_desc_id_asc_idx", [
            { name: "agent_id", desc: 0 },
            { name: "updated_at", desc: 1 },
            { name: "id", desc: 0 },
          ]);
        } finally {
          upgradedClient.close();
        }
      } finally {
        storage.close();
      }
    });
  });

  it("persists conversations, events, and snapshots in a real sqlite file", async () => {
    await withStorageFile(async (filename) => {
      const storage = createSqliteStorage({ filename });
      const runtime = createRuntime({ storage });
      await runtime.initialize();

      const conversation = await runtime.createConversation({
        id: "conv_1",
        agentId: "agent_primary",
        context: { locale: "en" },
      });

      const first = await runtime.emit({
        conversationId: conversation.id,
        type: "message.completed",
        data: { text: "Hello" },
      });
      const second = await runtime.closeConversation(conversation.id, "resolved");

      expect(first.offset).toBe(2);
      expect(second?.lifecycle).toBe("closed");

      const events = await runtime.listEvents(conversation.id);
      expect(events.map((event) => event.offset)).toEqual([1, 2, 3]);
      expect(events.map((event) => event.type)).toEqual([
        "custom.conversation.created",
        "message.completed",
        "conversation.closed",
      ]);

      const snapshot = await runtime.getSnapshot(conversation.id);
      expect(snapshot?.conversationId).toBe(conversation.id);
      expect(snapshot?.lifecycle).toBe("closed");

      storage.close();
    });
  });

  it("shares active voice segment state across sqlite adapter instances", async () => {
    await withStorageFile(async (filename) => {
      const first = createSqliteStorage({ filename });
      const second = createSqliteStorage({ filename });
      try {
        await Promise.all([first.initialize(), second.initialize()]);
        await first.createConversation({ id: "conv_voice_cross_adapter", agentId: "agent", context: {} });

        await expect(first.appendEventIfNoActiveVoiceSegment({
          conversationId: "conv_voice_cross_adapter",
          type: "voice.segment.started",
          data: {
            channelSegmentId: "voice_segment_first",
            connectionId: "voice_connection_first",
            adapter: "test",
          },
        })).resolves.toMatchObject({
          type: "voice.segment.started",
          data: { channelSegmentId: "voice_segment_first" },
        });
        await expect(second.appendEventIfNoActiveVoiceSegment({
          conversationId: "conv_voice_cross_adapter",
          type: "voice.segment.started",
          data: {
            channelSegmentId: "voice_segment_second",
            connectionId: "voice_connection_second",
            adapter: "test",
          },
        })).resolves.toBeNull();
        const events = await first.listEvents({ conversationId: "conv_voice_cross_adapter" });
        expect(events.filter((event) => event.type === "voice.segment.started")).toHaveLength(1);
      } finally {
        first.close();
        second.close();
      }
    });
  });
});
