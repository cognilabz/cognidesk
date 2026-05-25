import { mkdtemp, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
import { createRuntime } from "@cognidesk/core";
import { createSqliteStorage } from "../src/index.js";

async function withStorage<T>(fn: (filename: string) => Promise<T>) {
  const dir = await mkdtemp(join(tmpdir(), "cognidesk-sqlite-"));
  try {
    return await fn(join(dir, "test.sqlite"));
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

describe("SQLite storage adapter", () => {
  it("persists conversations, events, and snapshots in a real sqlite file", async () => {
    await withStorage(async (filename) => {
      const storage = createSqliteStorage({ filename });
      const runtime = createRuntime({ storage });
      await runtime.initialize();

      const conversation = await runtime.createConversation({
        id: "conv_1",
        agentId: "flight-service",
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
    });
  });
});
