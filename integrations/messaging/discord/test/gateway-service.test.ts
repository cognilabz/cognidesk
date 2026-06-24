import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { defineChannelContext, type RuntimeEvent } from "@cognidesk/core";
import { ChannelType } from "discord.js";
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
        discordVoiceChannelId: "voice_1",
        discordVoiceChannelName: "Flight support voice",
      });

      expect(binding).toMatchObject({
        discordThreadId: "thread_1",
        conversationId: "conversation_1",
        discordVoiceChannelId: "voice_1",
        discordVoiceChannelName: "Flight support voice",
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
  it("reuses one support thread for concurrent web continuations without a connected notice", async () => {
    const thread = {
      id: "thread_1",
      name: "Flight support conversat",
      send: vi.fn().mockResolvedValue({ id: "connected_notice" }),
    };
    const createThread = vi.fn().mockResolvedValue(thread);
    const store = {
      listActiveBindingsForConversation: vi.fn().mockResolvedValue([]),
      upsertBinding: vi.fn().mockResolvedValue(discordBinding("thread_1")),
    };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime: { listEvents: vi.fn().mockResolvedValue([]) },
      store,
    } as never);
    const internals = service as unknown as {
      client: { isReady(): boolean };
      fetchSupportChannel(): Promise<unknown>;
      mirrorBinding(binding: unknown): Promise<void>;
    };
    vi.spyOn(internals.client, "isReady").mockReturnValue(true);
    internals.fetchSupportChannel = vi.fn().mockResolvedValue({
      threads: { create: createThread },
    });
    internals.mirrorBinding = vi.fn().mockResolvedValue(undefined);

    const [first, second] = await Promise.all([
      service.continueConversation("conversation_1"),
      service.continueConversation("conversation_1"),
    ]);

    expect(first.discordThreadId).toBe("thread_1");
    expect(second.discordThreadId).toBe("thread_1");
    expect(store.listActiveBindingsForConversation).toHaveBeenCalledTimes(1);
    expect(createThread).toHaveBeenCalledTimes(1);
    expect(internals.mirrorBinding).toHaveBeenCalledTimes(1);
    expect(thread.send).not.toHaveBeenCalled();
  });

  it("creates one Discord voice room for voice handoffs and posts the back-to-bot instruction", async () => {
    const thread = {
      id: "thread_1",
      name: "Flight support conversat",
      send: vi.fn().mockResolvedValue({ id: "voice_notice" }),
    };
    const createThread = vi.fn().mockResolvedValue(thread);
    const createVoiceChannel = vi.fn().mockResolvedValue({
      id: "voice_1",
      name: "Flight support voice conversat",
    });
    const threadBinding = discordBinding("thread_1");
    const voiceBinding = {
      ...threadBinding,
      discordVoiceChannelId: "voice_1",
      discordVoiceChannelName: "Flight support voice conversat",
    };
    const store = {
      listActiveBindingsForConversation: vi.fn()
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([threadBinding]),
      upsertBinding: vi.fn()
        .mockResolvedValueOnce(threadBinding)
        .mockResolvedValueOnce(voiceBinding),
    };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime: { listEvents: vi.fn().mockResolvedValue([]) },
      store,
    } as never);
    const internals = service as unknown as {
      client: { isReady(): boolean };
      fetchSupportChannel(): Promise<unknown>;
      fetchThread(binding: unknown): Promise<{ send: typeof thread.send }>;
      mirrorBinding(binding: unknown): Promise<void>;
    };
    vi.spyOn(internals.client, "isReady").mockReturnValue(true);
    internals.fetchSupportChannel = vi.fn().mockResolvedValue({
      parentId: "category_1",
      threads: { create: createThread },
      guild: {
        channels: { create: createVoiceChannel },
      },
    });
    internals.fetchThread = vi.fn().mockResolvedValue({ send: thread.send });
    internals.mirrorBinding = vi.fn().mockResolvedValue(undefined);

    const result = await service.continueConversation("conversation_1", { voice: true });

    expect(result).toMatchObject({
      discordThreadId: "thread_1",
      discordVoiceChannelId: "voice_1",
      discordVoiceChannelUrl: "https://discord.com/channels/guild_1/voice_1",
    });
    expect(createVoiceChannel).toHaveBeenCalledWith(expect.objectContaining({
      name: expect.stringContaining("Cognidesk voice support"),
      type: ChannelType.GuildVoice,
      parent: "category_1",
    }));
    expect(store.upsertBinding).toHaveBeenNthCalledWith(2, expect.objectContaining({
      discordThreadId: "thread_1",
      discordVoiceChannelId: "voice_1",
      discordVoiceChannelName: "Flight support voice conversat",
    }));
    expect(thread.send).toHaveBeenCalledWith(expect.stringContaining("https://discord.com/channels/guild_1/voice_1"));
    expect(thread.send).toHaveBeenCalledWith(expect.stringContaining("bot: <instruction>"));
  });

  it("explains missing Discord permissions when voice room creation is blocked", async () => {
    const thread = {
      id: "thread_1",
      name: "Flight support conversat",
    };
    const createThread = vi.fn().mockResolvedValue(thread);
    const missingPermissions = Object.assign(new Error("Missing Permissions"), { code: 50013 });
    const createVoiceChannel = vi.fn().mockRejectedValue(missingPermissions);
    const threadBinding = discordBinding("thread_1");
    const store = {
      listActiveBindingsForConversation: vi.fn()
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([threadBinding]),
      upsertBinding: vi.fn().mockResolvedValue(threadBinding),
    };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime: { listEvents: vi.fn().mockResolvedValue([]) },
      store,
    } as never);
    const internals = service as unknown as {
      client: { isReady(): boolean };
      fetchSupportChannel(): Promise<unknown>;
      mirrorBinding(binding: unknown): Promise<void>;
    };
    vi.spyOn(internals.client, "isReady").mockReturnValue(true);
    internals.fetchSupportChannel = vi.fn().mockResolvedValue({
      parentId: "category_1",
      threads: { create: createThread },
      guild: {
        channels: { create: createVoiceChannel },
      },
    });
    internals.mirrorBinding = vi.fn().mockResolvedValue(undefined);

    await expect(service.continueConversation("conversation_1", { voice: true }))
      .rejects.toThrow("Grant the bot Manage Channels");
  });

  it("serializes per-thread mirroring so prior web messages are sent at most once", async () => {
    let resolveEvents: (events: RuntimeEvent[]) => void = () => undefined;
    const eventsPromise = new Promise<RuntimeEvent[]>((resolve) => {
      resolveEvents = resolve;
    });
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
        id: "assistant_started",
        offset: 3,
        type: "message.started",
        data: { role: "assistant" },
      }),
      runtimeEvent({
        id: "assistant_completed",
        offset: 4,
        type: "message.completed",
        data: { text: "One cabin bag is included." },
      }),
    ];
    const send = vi.fn()
      .mockResolvedValueOnce({ id: "sent_user" })
      .mockResolvedValueOnce({ id: "sent_assistant" });
    const store = {
      hasMirroredEvent: vi.fn().mockResolvedValue(false),
      recordMirroredEvent: vi.fn().mockResolvedValue(undefined),
      deactivateBinding: vi.fn(),
    };
    const runtime = { listEvents: vi.fn().mockReturnValue(eventsPromise) };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime,
      store,
    } as never);
    const internals = service as unknown as {
      fetchThread(binding: unknown): Promise<{ send: typeof send }>;
      mirrorBinding(binding: unknown): Promise<void>;
    };
    internals.fetchThread = vi.fn().mockResolvedValue({ send });

    const first = internals.mirrorBinding(discordBinding("thread_1"));
    const second = internals.mirrorBinding(discordBinding("thread_1"));
    resolveEvents(events);
    await Promise.all([first, second]);

    expect(runtime.listEvents).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledTimes(2);
    expect(send).toHaveBeenNthCalledWith(1, "Web: Can I bring a bag?");
    expect(send).toHaveBeenNthCalledWith(2, "One cabin bag is included.");
    expect(store.recordMirroredEvent).toHaveBeenCalledTimes(2);
  });

  it("relays bound support-thread human messages into the existing web conversation", async () => {
    const binding = discordBinding("thread_1");
    const store = {
      getBindingByThreadId: vi.fn().mockResolvedValue(binding),
      recordMirroredEvent: vi.fn().mockResolvedValue(undefined),
    };
    const intakeEvent = runtimeEvent({
      id: "support_intake",
      offset: 10,
      type: "channel.event.received",
      data: {
        eventId: "discord_message_1",
        nature: "message",
        direction: "inbound",
        intent: "agent-message",
        actor: { type: "operator", id: "operator_1", displayName: "Michi" },
        channel: discordChannel(),
        bindingOutcome: "resume-existing",
        handlingDisposition: "record-only",
        payload: { text: "Hi" },
      },
    });
    const runtime = {
      handleChannelEvent: vi.fn().mockResolvedValue({
        intake: { outcome: "accepted" },
        events: [intakeEvent],
      }),
      emit: vi.fn().mockResolvedValue(runtimeEvent({
        id: "operator_joined",
        offset: 11,
        type: "custom.discord.operator_joined",
        data: {
          operatorId: "operator_1",
          operatorName: "Michi",
          discordThreadId: "thread_1",
        },
      })),
      listEvents: vi.fn().mockResolvedValue([]),
    };
    const threadSend = vi.fn();
    const message = {
      id: "discord_message_1",
      guildId: "guild_1",
      channelId: "thread_1",
      cleanContent: "Hi",
      content: "Hi",
      createdAt: new Date("2026-06-20T00:00:00.000Z"),
      author: {
        bot: false,
        id: "operator_1",
        globalName: null,
        username: "michi",
      },
      member: { displayName: "Michi" },
      channel: {
        id: "thread_1",
        name: "Flight support conversat",
        parentId: "channel_1",
        isThread: () => true,
        send: threadSend,
      },
      inGuild: () => true,
      react: vi.fn().mockResolvedValue(undefined),
    };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime,
      store,
    } as never);
    const internals = service as unknown as {
      handleDiscordMessage(message: unknown): Promise<void>;
    };

    await internals.handleDiscordMessage(message);

    expect(runtime.handleChannelEvent).toHaveBeenCalledWith(expect.objectContaining({
      conversationId: "conversation_1",
      handling: { disposition: "record-only" },
      event: expect.objectContaining({
        id: "discord:discord_message_1",
        intent: "agent-message",
        actor: expect.objectContaining({
          type: "operator",
          id: "operator_1",
          displayName: "Michi",
        }),
      }),
    }));
    expect(runtime.listEvents).toHaveBeenCalledWith("conversation_1", 0);
    expect(runtime.emit).toHaveBeenCalledWith({
      conversationId: "conversation_1",
      type: "custom.discord.operator_joined",
      data: expect.objectContaining({
        operatorId: "operator_1",
        operatorName: "Michi",
        discordThreadId: "thread_1",
      }),
    });
    expect(store.recordMirroredEvent).toHaveBeenCalledWith(expect.objectContaining({
      discordThreadId: "thread_1",
      conversationId: "conversation_1",
      runtimeEventId: "support_intake",
      runtimeEventOffset: 10,
      direction: "discord-to-runtime",
      discordMessageId: "discord_message_1",
    }));
    expect(message.react).toHaveBeenCalledWith("✅");
    expect(threadSend).not.toHaveBeenCalled();
  });

  it("emits support-thread operator typing into the runtime", async () => {
    const binding = discordBinding("thread_1");
    const store = {
      getBindingByThreadId: vi.fn().mockResolvedValue(binding),
    };
    const runtime = {
      emit: vi.fn().mockResolvedValue(runtimeEvent({
        id: "operator_typing",
        offset: 10,
        type: "custom.discord.operator_typing.started",
        data: {
          operatorId: "operator_1",
          operatorName: "Michi",
          discordThreadId: "thread_1",
        },
      })),
      listEvents: vi.fn().mockResolvedValue([]),
    };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime,
      store,
    } as never);
    const internals = service as unknown as {
      handleDiscordTyping(typing: unknown): Promise<void>;
    };

    await internals.handleDiscordTyping({
      user: {
        bot: false,
        id: "operator_1",
        globalName: null,
        username: "michi",
      },
      member: { displayName: "Michi" },
      guild: { id: "guild_1" },
      channel: {
        id: "thread_1",
        name: "Flight support conversat",
        parentId: "channel_1",
        isThread: () => true,
      },
      startedAt: new Date("2026-06-20T00:00:00.000Z"),
      inGuild: () => true,
    });

    expect(runtime.emit).toHaveBeenNthCalledWith(1, {
      conversationId: "conversation_1",
      type: "custom.discord.operator_joined",
      data: expect.objectContaining({
        operatorId: "operator_1",
        operatorName: "Michi",
        discordThreadId: "thread_1",
      }),
    });
    expect(runtime.emit).toHaveBeenNthCalledWith(2, {
      conversationId: "conversation_1",
      type: "custom.discord.operator_typing.started",
      data: expect.objectContaining({
        operatorId: "operator_1",
        operatorName: "Michi",
        discordThreadId: "thread_1",
        startedAt: "2026-06-20T00:00:00.000Z",
      }),
    });
  });

  it("does not acknowledge support-thread messages that the runtime rejects", async () => {
    const binding = discordBinding("thread_1");
    const store = {
      getBindingByThreadId: vi.fn().mockResolvedValue(binding),
      recordMirroredEvent: vi.fn().mockResolvedValue(undefined),
    };
    const runtime = {
      handleChannelEvent: vi.fn().mockResolvedValue({
        intake: { outcome: "blocked", reason: "Channel 'community/channel_1' is not configured." },
        events: [],
      }),
      emit: vi.fn(),
    };
    const threadSend = vi.fn();
    const message = {
      id: "discord_message_blocked",
      guildId: "guild_1",
      channelId: "thread_1",
      cleanContent: "Hi",
      content: "Hi",
      createdAt: new Date("2026-06-20T00:00:00.000Z"),
      author: {
        bot: false,
        id: "operator_1",
        globalName: null,
        username: "michi",
      },
      member: { displayName: "Michi" },
      channel: {
        id: "thread_1",
        name: "Flight support conversat",
        parentId: "channel_1",
        isThread: () => true,
        send: threadSend,
      },
      inGuild: () => true,
      react: vi.fn().mockResolvedValue(undefined),
    };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime,
      store,
    } as never);
    const internals = service as unknown as {
      handleDiscordMessage(message: unknown): Promise<void>;
    };

    await internals.handleDiscordMessage(message);

    expect(runtime.emit).not.toHaveBeenCalled();
    expect(store.recordMirroredEvent).not.toHaveBeenCalled();
    expect(message.react).toHaveBeenCalledWith("⚠️");
    expect(message.react).not.toHaveBeenCalledWith("✅");
    expect(threadSend).toHaveBeenCalledWith(expect.stringContaining("Continue on web"));
  });

  it("hands bound support-thread conversations back to the bot with a bot command", async () => {
    const binding = discordBinding("thread_1");
    const store = {
      getBindingByThreadId: vi.fn().mockResolvedValue(binding),
      recordMirroredEvent: vi.fn().mockResolvedValue(undefined),
    };
    const resumeIntake = runtimeEvent({
      id: "resume_intake",
      offset: 10,
      type: "channel.event.received",
      data: {
        eventId: "discord:discord_message_2:bot-resume",
        nature: "operator.resume",
        direction: "internal",
        intent: "operator-resume",
        actor: { type: "operator", id: "operator_1", displayName: "Michi" },
        channel: discordChannel(),
        bindingOutcome: "resume-existing",
        handlingDisposition: "model-turn",
        payload: {
          text: "Michi handed the conversation back to the bot: Please ask for the booking reference.",
        },
      },
    });
    const botStarted = runtimeEvent({
      id: "bot_started",
      offset: 12,
      type: "message.started",
      data: { role: "assistant" },
    });
    const botCompleted = runtimeEvent({
      id: "bot_completed",
      offset: 13,
      type: "message.completed",
      data: { text: "I'm back on the bot side. What is your booking reference?" },
    });
    const runtime = {
      handleChannelEvent: vi.fn().mockResolvedValue({
        intake: { outcome: "accepted" },
        events: [resumeIntake, botStarted, botCompleted],
      }),
    };
    const threadSend = vi.fn().mockResolvedValue({ id: "discord_bot_reply" });
    const message = {
      id: "discord_message_2",
      guildId: "guild_1",
      channelId: "thread_1",
      cleanContent: "bot: Please ask for the booking reference.",
      content: "bot: Please ask for the booking reference.",
      createdAt: new Date("2026-06-20T00:00:00.000Z"),
      author: {
        bot: false,
        id: "operator_1",
        globalName: null,
        username: "michi",
      },
      member: { displayName: "Michi" },
      channel: {
        id: "thread_1",
        name: "Flight support conversat",
        parentId: "channel_1",
        isThread: () => true,
        send: threadSend,
      },
      inGuild: () => true,
      react: vi.fn().mockResolvedValue(undefined),
    };
    const service = new DiscordGatewayService({
      agentId: "flight-service",
      botToken: "unused",
      config: discordTestConfig(),
      runtime,
      store,
    } as never);
    const internals = service as unknown as {
      handleDiscordMessage(message: unknown): Promise<void>;
    };

    await internals.handleDiscordMessage(message);

    expect(runtime.handleChannelEvent).toHaveBeenCalledWith(expect.objectContaining({
      conversationId: "conversation_1",
      handling: expect.objectContaining({
        disposition: "model-turn",
        recordUserMessage: false,
        text: expect.stringContaining("Do not say you are handing this over to a person."),
      }),
      event: expect.objectContaining({
        id: "discord:discord_message_2:bot-resume",
        nature: "operator.resume",
        intent: "operator-resume",
        actor: expect.objectContaining({
          type: "operator",
          id: "operator_1",
          displayName: "Michi",
        }),
      }),
    }));
    expect(store.recordMirroredEvent).toHaveBeenNthCalledWith(1, expect.objectContaining({
      discordThreadId: "thread_1",
      conversationId: "conversation_1",
      runtimeEventId: "resume_intake",
      runtimeEventOffset: 10,
      direction: "discord-to-runtime",
      discordMessageId: "discord_message_2",
    }));
    expect(threadSend).toHaveBeenCalledWith("I'm back on the bot side. What is your booking reference?");
    expect(store.recordMirroredEvent).toHaveBeenNthCalledWith(2, expect.objectContaining({
      discordThreadId: "thread_1",
      conversationId: "conversation_1",
      runtimeEventId: "bot_completed",
      runtimeEventOffset: 13,
      direction: "runtime-to-discord",
      discordMessageId: "discord_bot_reply",
    }));
    expect(message.react).toHaveBeenCalledWith("✅");
  });

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

function discordChannel() {
  return defineChannelContext({
    channelId: "channel_1",
    kind: "community",
    provider: "discord",
    externalThreadId: "thread_1",
    capabilities: {
      async: true,
      markdown: true,
      richText: true,
      threaded: true,
      typingIndicator: true,
      attachments: true,
    },
    metadata: {
      guildId: "guild_1",
      threadId: "thread_1",
    },
  });
}
