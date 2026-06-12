import type { StorageAdapter, RuntimeSnapshot } from "@cognidesk/core";
import { describe, expect, it } from "vitest";

export interface StorageAdapterConformanceOptions<TStorage extends StorageAdapter = StorageAdapter> {
  name: string;
  createStorage: () => TStorage | Promise<TStorage>;
  cleanup?: (storage: TStorage) => void | Promise<void>;
}

export function defineStorageAdapterConformanceSuite<TStorage extends StorageAdapter>(
  options: StorageAdapterConformanceOptions<TStorage>,
) {
  describe(options.name, () => {
    async function withStorage<T>(run: (storage: TStorage) => Promise<T>) {
      const storage = await options.createStorage();
      try {
        await Promise.all([storage.initialize?.(), storage.initialize?.()]);
        return await run(storage);
      } finally {
        await options.cleanup?.(storage);
      }
    }

    it("persists conversations, lifecycle changes, events, and snapshots", async () => {
      await withStorage(async (storage) => {
        const conversation = await storage.createConversation({
          id: "conv_1",
          agentId: "flight-service",
          context: { locale: "en" },
        });

        expect(conversation).toMatchObject({
          id: "conv_1",
          agentId: "flight-service",
          lifecycle: "active",
          context: { locale: "en" },
        });
        await expect(storage.createConversation({
          id: "conv_1",
          agentId: "flight-service",
          context: { locale: "en" },
        })).rejects.toThrow();

        const storedConversation = await storage.getConversation<{ locale: string }>("conv_1");
        expect(storedConversation?.context.locale).toBe("en");

        const event = await storage.appendEvent({
          conversationId: "conv_1",
          type: "message.completed",
          telemetry: { traceId: "trace_1", spanId: "span_1" },
          data: { text: "Hello" },
        });
        expect(event.offset).toBe(1);
        expect(event.telemetry).toEqual({ traceId: "trace_1", spanId: "span_1" });

        const updated = await storage.updateConversationLifecycle("conv_1", "closed");
        expect(updated?.lifecycle).toBe("closed");
        expect(await storage.updateConversationLifecycle("missing", "closed")).toBeNull();

        const snapshot: RuntimeSnapshot = {
          conversationId: "conv_1",
          lifecycle: "closed",
          activeStateIds: ["done"],
          updatedAt: new Date().toISOString(),
        };
        await storage.saveSnapshot(snapshot);
        expect(await storage.getSnapshot("conv_1")).toEqual(snapshot);
      });
    });

    it("lists complete event history by default and supports offsets and limits", async () => {
      await withStorage(async (storage) => {
        await storage.createConversation({ id: "conv_many", agentId: "agent", context: {} });
        for (let index = 0; index < 12; index += 1) {
          await storage.appendEvent({
            conversationId: "conv_many",
            type: "message.completed",
            data: { text: `Event ${index}` },
          });
        }

        expect(await storage.listEvents({ conversationId: "conv_many" })).toHaveLength(12);
        expect((await storage.listEvents({ conversationId: "conv_many", afterOffset: 10 })).map((event) => event.offset))
          .toEqual([11, 12]);
        expect(await storage.listEvents({ conversationId: "conv_many", limit: 5 })).toHaveLength(5);
      });
    });

    it("rejects orphan events and snapshots", async () => {
      await withStorage(async (storage) => {
        await expect(storage.appendEvent({
          conversationId: "missing",
          type: "message.completed",
          data: { text: "Nope" },
        })).rejects.toThrow();
        await expect(storage.saveSnapshot({
          conversationId: "missing",
          lifecycle: "active",
          activeStateIds: [],
          updatedAt: new Date().toISOString(),
        })).rejects.toThrow();
      });
    });

    it("allocates unique ordered offsets for concurrent event appends", async () => {
      await withStorage(async (storage) => {
        await storage.createConversation({ id: "conv_concurrent", agentId: "agent", context: {} });
        await Promise.all(Array.from({ length: 10 }, (_, index) => storage.appendEvent({
          conversationId: "conv_concurrent",
          type: "message.completed",
          data: { text: `Event ${index}` },
        })));

        const events = await storage.listEvents({ conversationId: "conv_concurrent" });
        expect(events.map((event) => event.offset)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      });
    });
  });
}
