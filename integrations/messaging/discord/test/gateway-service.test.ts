import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { RuntimeEvent } from "@cognidesk/core";
import { describe, expect, it, vi } from "vitest";
import {
  DiscordGatewayService,
  collectDiscordMirrorItems,
  createDiscordSqliteStore,
  discordMessagingProviderManifest,
} from "../src/index.js";

describe("@cognidesk/integration-messaging-discord Gateway manifest", () => {
  it("represents Discord Gateway support inside the split provider package", () => {
    expect(discordMessagingProviderManifest).toMatchObject({
      id: "messaging.discord",
      packageName: "@cognidesk/integration-messaging-discord",
      provider: "discord",
      category: "messaging",
      trustLevel: "official",
    });
    expect(discordMessagingProviderManifest.coverage.notes.join(" "))
      .toContain("optional discord.js Gateway service");
    expect(discordMessagingProviderManifest.metadata?.channelCoverage).toMatchObject({
      gatewayEvents: "sdk-owned-discord-js-gateway-service",
    });
  });
});

describe("@cognidesk/integration-messaging-discord Gateway store", () => {
  it("persists thread bindings and mirrored event idempotency", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "cognidesk-discord-store-"));
    const store = createDiscordSqliteStore({ filename: join(tempDir, "demo.sqlite") });
    try {
      const binding = await store.upsertBinding({
        discordThreadId: "thread_1",
        conversationId: "conversation_1",
        guildId: "guild_1",
        parentChannelId: "channel_1",
        starterUserId: "user_1",
        threadName: "Cognidesk support",
      });

      expect(binding).toMatchObject({
        discordThreadId: "thread_1",
        conversationId: "conversation_1",
        active: true,
      });
      expect(await store.listActiveBindingsForConversation("conversation_1")).toHaveLength(1);

      await store.recordMirroredEvent({
        discordThreadId: "thread_1",
        conversationId: "conversation_1",
        runtimeEventId: "message_1",
        runtimeEventOffset: 4,
        direction: "runtime-to-discord",
        discordMessageId: "discord_message_1",
      });
      await store.recordMirroredEvent({
        discordThreadId: "thread_1",
        conversationId: "conversation_1",
        runtimeEventId: "message_2",
        runtimeEventOffset: 7,
        direction: "runtime-to-discord",
      });

      expect(await store.hasMirroredEvent("thread_1", "message_1")).toBe(true);
      expect(await store.hasMirroredEvent("thread_1", "message_missing")).toBe(false);
      expect(await store.getLastMirroredOffset("thread_1")).toBe(7);

      await store.deactivateBinding("thread_1");
      expect(await store.listActiveBindingsForConversation("conversation_1")).toHaveLength(0);
    } finally {
      store.close();
    }
  });
});

describe("DiscordGatewayService mirroring", () => {
  it("does not poll a Discord thread while a source turn is still in progress", async () => {
    const runtime = { listEvents: vi.fn() };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime,
      store: {},
    } as never);
    const internals = service as unknown as {
      discordSourceThreadsInProgress: Map<string, number>;
      mirrorBinding(binding: unknown): Promise<void>;
    };

    internals.discordSourceThreadsInProgress.set("thread_1", 1);
    await internals.mirrorBinding(discordBinding("thread_1"));

    expect(runtime.listEvents).not.toHaveBeenCalled();
  });

  it("records Discord-origin user messages without echoing them into the thread", async () => {
    const events: RuntimeEvent[] = [
      runtimeEvent({
        id: "channel_discord",
        offset: 1,
        type: "channel.event.received",
        data: {
          kind: "message",
          direction: "inbound",
          intent: "customer-message",
          channel: {
            channelId: "discord_channel",
            kind: "community",
            provider: "discord",
            capabilities: {},
          },
          bindingOutcome: "resume-existing",
          handlingDisposition: "model-turn",
        },
      }),
      runtimeEvent({
        id: "user_discord_started",
        offset: 2,
        type: "message.started",
        data: { role: "user" },
      }),
      runtimeEvent({
        id: "user_discord_completed",
        offset: 3,
        type: "message.completed",
        data: { text: "Discord live mirror test" },
      }),
      runtimeEvent({
        id: "assistant_started",
        offset: 4,
        type: "message.started",
        data: { role: "assistant" },
      }),
      runtimeEvent({
        id: "assistant_completed",
        offset: 5,
        type: "message.completed",
        data: { text: "I can help with that." },
      }),
    ];
    const send = vi.fn().mockResolvedValue({ id: "sent_assistant" });
    const store = {
      hasMirroredEvent: vi.fn().mockResolvedValue(false),
      recordMirroredEvent: vi.fn().mockResolvedValue(undefined),
      deactivateBinding: vi.fn(),
    };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime: { listEvents: vi.fn().mockResolvedValue(events) },
      store,
    } as never);
    const internals = service as unknown as {
      fetchThread(binding: unknown): Promise<{ send: typeof send }>;
      mirrorBinding(binding: unknown): Promise<void>;
    };
    internals.fetchThread = vi.fn().mockResolvedValue({ send });

    await internals.mirrorBinding(discordBinding("thread_1"));

    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith("I can help with that.");
    expect(store.recordMirroredEvent).toHaveBeenNthCalledWith(1, expect.objectContaining({
      direction: "discord-to-runtime",
      runtimeEventId: "user_discord_completed",
      runtimeEventOffset: 3,
    }));
    expect(store.recordMirroredEvent.mock.calls[0]?.[0]).not.toHaveProperty("discordMessageId");
    expect(store.recordMirroredEvent).toHaveBeenNthCalledWith(2, expect.objectContaining({
      direction: "runtime-to-discord",
      discordMessageId: "sent_assistant",
      runtimeEventId: "assistant_completed",
      runtimeEventOffset: 5,
    }));
  });
});

describe("collectDiscordMirrorItems", () => {
  it("extracts completed messages, origins, and prompt fallbacks in offset order", () => {
    const events: RuntimeEvent[] = [
      runtimeEvent({
        id: "user_web_started",
        offset: 1,
        type: "message.started",
        data: { role: "user" },
      }),
      runtimeEvent({
        id: "user_web_completed",
        offset: 2,
        type: "message.completed",
        data: { text: "Can I bring a bag?" },
      }),
      runtimeEvent({
        id: "assistant_web_started",
        offset: 3,
        type: "message.started",
        data: { role: "assistant" },
      }),
      runtimeEvent({
        id: "assistant_web_completed",
        offset: 4,
        type: "message.completed",
        data: { text: "One cabin bag is included." },
      }),
      runtimeEvent({
        id: "channel_1",
        offset: 5,
        type: "channel.event.received",
        data: {
          kind: "message",
          direction: "inbound",
          intent: "customer-message",
          channel: {
            channelId: "discord_channel",
            kind: "community",
            provider: "discord",
            capabilities: {},
          },
          bindingOutcome: "resume-existing",
          handlingDisposition: "model-turn",
        },
      }),
      runtimeEvent({
        id: "user_discord_started",
        offset: 8,
        type: "message.started",
        data: { role: "user" },
      }),
      runtimeEvent({
        id: "user_discord_completed",
        offset: 9,
        type: "message.completed",
        data: { text: "I need a flight to Berlin" },
      }),
      runtimeEvent({
        id: "assistant_1_started",
        offset: 10,
        type: "message.started",
        data: { role: "assistant" },
      }),
      runtimeEvent({
        id: "assistant_1_completed",
        offset: 11,
        type: "message.completed",
        data: { text: "I can help with that." },
      }),
      runtimeEvent({
        id: "channel_web_after_discord",
        offset: 12,
        type: "channel.event.received",
        data: {
          kind: "message",
          direction: "inbound",
          intent: "customer-message",
          channel: {
            channelId: "chat",
            kind: "chat",
            capabilities: {},
          },
          bindingOutcome: "resume-existing",
          handlingDisposition: "model-turn",
        },
      }),
      runtimeEvent({
        id: "user_web_after_discord_started",
        offset: 13,
        type: "message.started",
        data: { role: "user" },
      }),
      runtimeEvent({
        id: "user_web_after_discord_completed",
        offset: 14,
        type: "message.completed",
        data: { text: "Back on the web" },
      }),
      runtimeEvent({
        id: "prompt_1",
        offset: 15,
        type: "ui.prompted",
        data: {
          promptId: "confirm:book-flight",
          widgetKind: "confirmation",
          input: {},
        },
      }),
      runtimeEvent({
        id: "user_voice_started",
        offset: 16,
        type: "message.started",
        data: { role: "user" },
      }),
      runtimeEvent({
        id: "user_voice_completed",
        offset: 17,
        type: "message.completed",
        data: { text: "Make it tomorrow" },
      }),
      runtimeEvent({
        id: "voice_commit",
        offset: 18,
        type: "voice.transcript.committed",
        data: {
          channelSegmentId: "voice_segment_1",
          speaker: "user",
          messageEventId: "user_voice_completed",
        },
      }),
    ];

    expect(collectDiscordMirrorItems(events)).toEqual([
      expect.objectContaining({
        kind: "message",
        role: "user",
        origin: "web",
        text: "Can I bring a bag?",
      }),
      expect.objectContaining({
        kind: "message",
        role: "assistant",
        text: "One cabin bag is included.",
      }),
      expect.objectContaining({
        kind: "message",
        role: "user",
        origin: "discord",
        text: "I need a flight to Berlin",
      }),
      expect.objectContaining({
        kind: "message",
        role: "assistant",
        text: "I can help with that.",
      }),
      expect.objectContaining({
        kind: "message",
        role: "user",
        origin: "web",
        text: "Back on the web",
      }),
      expect.objectContaining({
        kind: "prompt",
        event: expect.objectContaining({ id: "prompt_1" }),
      }),
      expect.objectContaining({
        kind: "message",
        role: "user",
        origin: "voice",
        text: "Make it tomorrow",
      }),
    ]);
  });
});

function runtimeEvent<TType extends RuntimeEvent["type"]>(
  event: Omit<Extract<RuntimeEvent, { type: TType }>, "conversationId" | "createdAt">,
): RuntimeEvent {
  return {
    conversationId: "conversation_1",
    createdAt: "2026-06-20T00:00:00.000Z",
    ...event,
  } as RuntimeEvent;
}

function discordTestConfig() {
  return {
    enabled: true,
    applicationId: "application_1",
    botTokenEnv: "DISCORD_BOT_TOKEN",
    guildId: "guild_1",
    supportChannelId: "channel_1",
    webAppUrl: "http://localhost:5173",
    threadAutoArchiveDuration: 60,
    mirrorPollIntervalMs: 1_000,
  };
}

function discordBinding(discordThreadId: string) {
  return {
    discordThreadId,
    conversationId: "conversation_1",
    guildId: "guild_1",
    parentChannelId: "channel_1",
    active: true,
    createdAt: "2026-06-20T00:00:00.000Z",
    updatedAt: "2026-06-20T00:00:00.000Z",
  };
}
