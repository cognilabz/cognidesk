import type { RuntimeEvent, RuntimeSnapshot, StorageAdapter } from "@cognidesk/core";
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
          channel: {
            channelId: "email.support",
            kind: "email",
            provider: "gmail",
            externalThreadId: "thread_123",
            capabilities: {
              attachments: true,
            },
          },
        });

        expect(conversation).toMatchObject({
          id: "conv_1",
          agentId: "flight-service",
          lifecycle: "active",
          context: { locale: "en" },
          channel: {
            channelId: "email.support",
            kind: "email",
            provider: "gmail",
            externalThreadId: "thread_123",
            capabilities: {
              async: true,
              threaded: true,
              html: true,
              attachments: true,
            },
          },
        });
        await expect(storage.createConversation({
          id: "conv_1",
          agentId: "flight-service",
          context: { locale: "en" },
        })).rejects.toThrow();

        const storedConversation = await storage.getConversation<{ locale: string }>("conv_1");
        expect(storedConversation?.context.locale).toBe("en");
        expect(storedConversation?.channel).toMatchObject({
          channelId: "email.support",
          kind: "email",
          provider: "gmail",
          externalThreadId: "thread_123",
          capabilities: {
            async: true,
            threaded: true,
            html: true,
            attachments: true,
          },
        });

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
        expect(updated?.channel).toMatchObject({
          channelId: "email.support",
          kind: "email",
        });
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

    it("lists conversations by most recent update and supports filters and limits", async () => {
      await withStorage(async (storage) => {
        await storage.createConversation({
          id: "conv_support_old",
          agentId: "support",
          context: { customerId: "customer_123", customer: { label: "standard support customer" }, tier: "standard" },
          channel: "chat",
        });
        await storage.createConversation({
          id: "conv_sales",
          agentId: "sales",
          context: { customerId: "customer_999", customer: { label: "sales customer" }, tier: "enterprise" },
          channel: {
            channelId: "email.sales",
            kind: "email",
            provider: "gmail",
          },
        });
        await storage.createConversation({
          id: "conv_support_new",
          agentId: "support",
          context: { customer: { id: "customer_123", label: "nested customer id" }, tier: "vip" },
        });

        await storage.appendEvent({
          conversationId: "conv_support_old",
          type: "message.completed",
          createdAt: "2099-01-01T00:00:00.000Z",
          data: { text: "old" },
        });
        await storage.appendEvent({
          conversationId: "conv_sales",
          type: "message.completed",
          createdAt: "2099-01-02T00:00:00.000Z",
          data: { text: "sales" },
        });
        await storage.appendEvent({
          conversationId: "conv_support_new",
          type: "message.completed",
          createdAt: "2099-01-03T00:00:00.000Z",
          data: { text: "new" },
        });

        const all = await storage.listConversations<{ tier: string }>({
          afterUpdatedAt: "2098-12-31T00:00:00.000Z",
        });
        expect(all.map((conversation) => conversation.id)).toEqual([
          "conv_support_new",
          "conv_sales",
          "conv_support_old",
        ]);
        expect(all[1]).toMatchObject({
          id: "conv_sales",
          agentId: "sales",
          lifecycle: "active",
          context: { tier: "enterprise" },
          channel: {
            channelId: "email.sales",
            kind: "email",
            provider: "gmail",
          },
          updatedAt: "2099-01-02T00:00:00.000Z",
        });

        await expect(storage.listConversations({ afterUpdatedAt: "2098-12-31T00:00:00.000Z", limit: 2 }))
          .resolves.toHaveLength(2);
        await expect(storage.listConversations({ agentId: "support" }))
          .resolves.toMatchObject([{ id: "conv_support_new" }, { id: "conv_support_old" }]);
        await expect(storage.listConversations({ customerId: "customer_123" }))
          .resolves.toMatchObject([{ id: "conv_support_new" }, { id: "conv_support_old" }]);
        await expect(storage.listConversations({ agentId: "support", customerId: "customer_999" }))
          .resolves.toEqual([]);
        await expect(storage.listConversations({
          afterUpdatedAt: "2098-12-31T00:00:00.000Z",
          beforeUpdatedAt: "2099-01-03T00:00:00.000Z",
        }))
          .resolves.toMatchObject([{ id: "conv_sales" }, { id: "conv_support_old" }]);
        await expect(storage.listConversations({ afterUpdatedAt: "2099-01-01T00:00:00.000Z" }))
          .resolves.toMatchObject([{ id: "conv_support_new" }, { id: "conv_sales" }]);
      });
    });

    it("paginates conversations losslessly when updatedAt values are tied", async () => {
      await withStorage(async (storage) => {
        const updatedAt = "2099-02-01T00:00:00.000Z";
        for (const id of ["conv_cursor_a", "conv_cursor_b", "conv_cursor_c", "conv_cursor_d"]) {
          await storage.createConversation({ id, agentId: "support", context: {} });
          await storage.appendEvent({
            conversationId: id,
            type: "message.completed",
            createdAt: updatedAt,
            data: { text: id },
          });
        }

        const firstPage = await storage.listConversations({ agentId: "support", limit: 2 });
        expect(firstPage.map((conversation) => conversation.id)).toEqual(["conv_cursor_a", "conv_cursor_b"]);

        const cursor = firstPage[1];
        expect(cursor).toBeDefined();
        const secondPage = await storage.listConversations({
          agentId: "support",
          before: { updatedAt: cursor!.updatedAt, id: cursor!.id },
          limit: 2,
        });
        expect(secondPage.map((conversation) => conversation.id)).toEqual(["conv_cursor_c", "conv_cursor_d"]);

        const previousPage = await storage.listConversations({
          agentId: "support",
          after: { updatedAt: secondPage[0]!.updatedAt, id: secondPage[0]!.id },
          limit: 2,
        });
        expect(previousPage.map((conversation) => conversation.id)).toEqual(["conv_cursor_a", "conv_cursor_b"]);
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

    it("atomically resolves each pending approval once", async () => {
      await withStorage(async (storage) => {
        if (!storage.appendEventIfApprovalPending) {
          throw new Error("Storage adapter must implement appendEventIfApprovalPending.");
        }
        await storage.createConversation({ id: "conv_approval", agentId: "agent", context: {} });

        expect(await storage.appendEventIfApprovalPending({
          conversationId: "conv_approval",
          type: "approval.resolved",
          data: {
            approvalId: "approval_missing",
            resolution: "approve",
            toolName: "sendEmail",
            executed: true,
          },
        })).toBeNull();

        await storage.appendEvent({
          conversationId: "conv_approval",
          type: "approval.requested",
          data: {
            approvalId: "approval_1",
            toolName: "sendEmail",
            input: { recipient: "user@example.com" },
            supportedResolutions: ["approve", "reject"],
            expiresAt: new Date(Date.now() + 60_000).toISOString(),
          },
        });

        const attempts = await Promise.all([
          storage.appendEventIfApprovalPending({
            conversationId: "conv_approval",
            type: "approval.resolved",
            data: {
              approvalId: "approval_1",
              resolution: "approve",
              toolName: "sendEmail",
              resolvedBy: "operator_1",
              executed: true,
            },
          }),
          storage.appendEventIfApprovalPending({
            conversationId: "conv_approval",
            type: "approval.resolved",
            data: {
              approvalId: "approval_1",
              resolution: "approve",
              toolName: "sendEmail",
              resolvedBy: "operator_2",
              executed: true,
            },
          }),
        ]);

        const stored = attempts.filter((event): event is RuntimeEvent => event !== null);
        expect(stored).toHaveLength(1);
        expect(stored[0]?.offset).toBe(2);
        expect(await storage.appendEventIfApprovalPending({
          conversationId: "conv_approval",
          type: "approval.resolved",
          data: {
            approvalId: "approval_1",
            resolution: "approve",
            toolName: "sendEmail",
            resolvedBy: "operator_3",
            executed: true,
          },
        })).toBeNull();

        const events = await storage.listEvents({ conversationId: "conv_approval" });
        expect(events.filter((event) => event.type === "approval.resolved")).toHaveLength(1);
        expect(events.map((event) => event.offset)).toEqual([1, 2]);
      });
    });

    it("atomically allows only one active voice segment", async () => {
      await withStorage(async (storage) => {
        if (!storage.appendEventIfNoActiveVoiceSegment) {
          throw new Error("Storage adapter must implement appendEventIfNoActiveVoiceSegment.");
        }
        await storage.createConversation({ id: "conv_voice", agentId: "agent", context: {} });

        const attempts = await Promise.all([
          storage.appendEventIfNoActiveVoiceSegment({
            conversationId: "conv_voice",
            type: "voice.segment.started",
            data: {
              channelSegmentId: "voice_segment_1",
              connectionId: "connection_1",
              adapter: "test",
            },
          }),
          storage.appendEventIfNoActiveVoiceSegment({
            conversationId: "conv_voice",
            type: "voice.segment.started",
            data: {
              channelSegmentId: "voice_segment_2",
              connectionId: "connection_2",
              adapter: "test",
            },
          }),
        ]);

        const started = attempts.filter((event): event is Extract<RuntimeEvent, { type: "voice.segment.started" }> =>
          event?.type === "voice.segment.started"
        );
        expect(started).toHaveLength(1);
        expect(await storage.appendEventIfNoActiveVoiceSegment({
          conversationId: "conv_voice",
          type: "voice.segment.started",
          data: {
            channelSegmentId: "voice_segment_blocked",
            connectionId: "connection_blocked",
            adapter: "test",
          },
        })).toBeNull();

        await storage.appendEvent({
          conversationId: "conv_voice",
          type: "voice.segment.ended",
          data: {
            channelSegmentId: started[0]!.data.channelSegmentId,
            connectionId: started[0]!.data.connectionId,
            reason: "complete",
          },
        });

        const next = await storage.appendEventIfNoActiveVoiceSegment({
          conversationId: "conv_voice",
          type: "voice.segment.started",
          data: {
            channelSegmentId: "voice_segment_3",
            connectionId: "connection_3",
            adapter: "test",
          },
        });
        expect(next?.type).toBe("voice.segment.started");
        expect(next?.data).toMatchObject({ channelSegmentId: "voice_segment_3" });

        const events = await storage.listEvents({ conversationId: "conv_voice" });
        expect(events.filter((event) => event.type === "voice.segment.started")).toHaveLength(2);
        expect(events.map((event) => event.offset)).toEqual([1, 2, 3]);
      });
    });
  });
}
