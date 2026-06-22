import type { ConversationChannelInput, CognideskRuntime, RuntimeEvent } from "@cognidesk/core";
import {
  ChannelType,
  Client,
  GatewayIntentBits,
  Partials,
  type Message,
  type NewsChannel,
  type TextChannel,
  type ThreadChannel,
} from "discord.js";
import type { DiscordGatewayServiceConfig, DiscordGatewayServiceCopy } from "./gateway-config.js";
import type { DiscordGatewayStore, DiscordThreadBinding } from "./sqlite-store.js";

const DISCORD_PROVIDER_PACKAGE_ID = "messaging.discord";
const DISCORD_SOURCE_ID = "discord-gateway";
const EYE_REACTION = "👀";
const DONE_REACTION = "✅";
const DEFAULT_SUPPORT_THREAD_NAME_PREFIX = "Cognidesk support";
const DEFAULT_SOURCE_THREAD_NAME_PREFIX = "Cognidesk support";
const DEFAULT_WEB_MESSAGE_PREFIX = "Web";
const DEFAULT_VOICE_MESSAGE_PREFIX = "Voice";

export interface DiscordGatewayServiceOptions {
  config: DiscordGatewayServiceConfig;
  botToken: string;
  runtime: CognideskRuntime;
  store: DiscordGatewayStore;
  agentId: string;
  copy?: DiscordGatewayServiceCopy;
}

export interface ContinueConversationInDiscordResult {
  enabled: true;
  ready: boolean;
  conversationId: string;
  discordThreadId: string;
  discordThreadUrl: string;
}

export interface DiscordGatewayStatus {
  enabled: true;
  ready: boolean;
  guildId: string;
  supportChannelId: string;
  applicationId: string;
  botUser?: {
    id: string;
    tag: string;
  };
}

export type DiscordMirrorMessageOrigin = "web" | "voice" | "discord";

export type DiscordMirrorItem =
  | {
      kind: "message";
      event: Extract<RuntimeEvent, { type: "message.completed" }>;
      role: "user" | "assistant";
      origin: DiscordMirrorMessageOrigin;
      text: string;
    }
  | {
      kind: "prompt";
      event: Extract<RuntimeEvent, { type: "ui.prompted" }>;
    };

export class DiscordGatewayService {
  private readonly client: Client;
  private mirrorTimer: NodeJS.Timeout | null = null;
  private mirrorRunning = false;
  private stopped = false;
  private readonly discordSourceThreadsInProgress = new Map<string, number>();

  constructor(private readonly options: DiscordGatewayServiceOptions) {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
      ],
      partials: [Partials.Message, Partials.Channel, Partials.Reaction],
    });
  }

  async start() {
    await this.options.store.initialize();
    this.client.on("messageCreate", (message) => {
      void this.handleDiscordMessage(message).catch((error) => {
        console.error("Cognidesk Discord Gateway message handling failed.", error);
      });
    });
    await this.client.login(this.options.botToken);
    this.startMirrorLoop();
    console.log(`Cognidesk Discord Gateway integration connected as ${this.client.user?.tag ?? "unknown bot"}`);
  }

  async stop() {
    this.stopped = true;
    if (this.mirrorTimer) {
      clearTimeout(this.mirrorTimer);
      this.mirrorTimer = null;
    }
    this.client.destroy();
    this.options.store.close();
  }

  status(): DiscordGatewayStatus {
    return {
      enabled: true,
      ready: this.client.isReady(),
      guildId: this.options.config.guildId,
      supportChannelId: this.options.config.supportChannelId,
      applicationId: this.options.config.applicationId,
      ...(this.client.user
        ? {
            botUser: {
              id: this.client.user.id,
              tag: this.client.user.tag,
            },
          }
        : {}),
    };
  }

  async continueConversation(conversationId: string): Promise<ContinueConversationInDiscordResult> {
    this.requireReady();
    const existing = (await this.options.store.listActiveBindingsForConversation(conversationId))[0];
    if (existing) {
      return {
        enabled: true,
        ready: true,
        conversationId,
        discordThreadId: existing.discordThreadId,
        discordThreadUrl: discordThreadUrl(existing.guildId, existing.discordThreadId),
      };
    }

    const supportChannel = await this.fetchSupportChannel();
    const thread = await supportChannel.threads.create({
      name: this.supportThreadName(conversationId),
      autoArchiveDuration: this.options.config.threadAutoArchiveDuration,
      reason: "Cognidesk Discord Gateway web continuation",
    });
    const binding = await this.options.store.upsertBinding({
      discordThreadId: thread.id,
      conversationId,
      guildId: this.options.config.guildId,
      parentChannelId: this.options.config.supportChannelId,
      threadName: thread.name,
    });
    if (!binding) throw new Error("Failed to persist Discord thread binding.");

    await this.mirrorBinding(binding).catch((error) => {
      console.error("Cognidesk Discord Gateway initial history mirror failed.", error);
    });
    await thread.send(this.connectedMessage(conversationId));

    return {
      enabled: true,
      ready: true,
      conversationId,
      discordThreadId: thread.id,
      discordThreadUrl: discordThreadUrl(this.options.config.guildId, thread.id),
    };
  }

  private async handleDiscordMessage(message: Message) {
    if (message.author.bot) return;
    if (!message.inGuild()) return;
    if (message.guildId !== this.options.config.guildId) return;

    const content = message.cleanContent.trim() || message.content.trim();
    if (!content) return;

    const thread = await this.resolveConversationThread(message);
    if (!thread) return;

    this.markDiscordSourceThreadInProgress(thread.id);
    let sourceThreadReleased = false;
    const releaseSourceThread = () => {
      if (sourceThreadReleased) return;
      sourceThreadReleased = true;
      this.unmarkDiscordSourceThreadInProgress(thread.id);
    };

    await message.react(EYE_REACTION).catch(() => undefined);
    const typing = startTyping(thread);
    try {
      const currentBinding = await this.options.store.getBindingByThreadId(thread.id);
      const channel = discordChannelContext({
        guildId: this.options.config.guildId,
        parentChannelId: this.options.config.supportChannelId,
        threadId: thread.id,
        messageId: message.id,
        userId: message.author.id,
        threadName: thread.name,
      });
      const result = await this.options.runtime.handleChannelEvent({
        event: {
          id: `discord:${message.id}`,
          kind: "message",
          nature: "message",
          direction: "inbound",
          intent: "customer-message",
          actor: {
            type: "customer",
            id: message.author.id,
            displayName: message.member?.displayName ?? message.author.globalName ?? message.author.username,
          },
          channel,
          occurredAt: message.createdAt.toISOString(),
          payload: {
            text: content,
            providerObject: {
              guildId: this.options.config.guildId,
              channelId: message.channelId,
              threadId: thread.id,
              messageId: message.id,
              authorId: message.author.id,
            },
          },
          identity: {
            key: `discord:${message.id}`,
            dedupeKey: `discord:${message.id}`,
            streamId: thread.id,
          },
          source: {
            sourceType: "provider-adapter",
            sourceId: DISCORD_SOURCE_ID,
            provider: "discord",
            providerPackageId: DISCORD_PROVIDER_PACKAGE_ID,
            eventId: message.id,
            streamId: thread.id,
            externalObjectIds: {
              guildId: this.options.config.guildId,
              channelId: message.channelId,
              threadId: thread.id,
              userId: message.author.id,
            },
          },
        },
        ...(currentBinding
          ? {
              conversationId: currentBinding.conversationId,
              binding: {
                outcome: "resume-existing",
                conversationId: currentBinding.conversationId,
              },
            }
          : {
              agentId: this.options.agentId,
              createConversation: {
                agentId: this.options.agentId,
                context: {},
                channel,
              },
              binding: {
                outcome: "start-new",
                agentId: this.options.agentId,
              },
            }),
        handling: {
          disposition: "model-turn",
        },
      });
      const conversationId = currentBinding?.conversationId ?? result.conversation?.id;
      if (!conversationId) {
        throw new Error("Discord message started a new turn but the runtime did not return a conversation.");
      }
      const binding = currentBinding ?? await this.options.store.upsertBinding({
        discordThreadId: thread.id,
        conversationId,
        guildId: this.options.config.guildId,
        parentChannelId: this.options.config.supportChannelId,
        starterUserId: message.author.id,
        threadName: thread.name,
      });
      if (!binding) throw new Error("Failed to persist Discord thread binding.");
      await this.recordSourceThreadEvents(binding, result.events, message.id, thread);
      releaseSourceThread();
      await this.mirrorConversation(conversationId);
      await replaceReaction(message, EYE_REACTION, DONE_REACTION, this.client.user?.id);
    } catch (error) {
      console.error("Cognidesk Discord Gateway turn failed.", error);
      await removeReaction(message, EYE_REACTION, this.client.user?.id);
      await thread.send(this.turnFailureMessage(thread.id));
    } finally {
      releaseSourceThread();
      typing.stop();
    }
  }

  private async resolveConversationThread(message: Message): Promise<ThreadChannel | null> {
    if (message.channel.isThread()) {
      if (message.channel.parentId !== this.options.config.supportChannelId) return null;
      return message.channel;
    }
    if (message.channelId !== this.options.config.supportChannelId) return null;
    if (!message.inGuild()) return null;
    if (message.hasThread && message.thread) return message.thread;
    return message.startThread({
      name: this.sourceThreadName(message.author.id, message.id),
      autoArchiveDuration: this.options.config.threadAutoArchiveDuration,
      reason: "Cognidesk Discord Gateway conversation",
    });
  }

  private async recordSourceThreadEvents(
    binding: DiscordThreadBinding,
    events: RuntimeEvent[],
    sourceMessageId: string,
    thread: ThreadChannel,
  ) {
    const items = collectDiscordMirrorItems(events);
    for (const item of items) {
      if (item.kind === "message") {
        if (item.role === "user") {
          await this.options.store.recordMirroredEvent({
            discordThreadId: binding.discordThreadId,
            conversationId: binding.conversationId,
            runtimeEventId: item.event.id,
            runtimeEventOffset: item.event.offset,
            direction: "discord-to-runtime",
            discordMessageId: sourceMessageId,
          });
          continue;
        }
        const sent = await thread.send(item.text);
        await this.options.store.recordMirroredEvent({
          discordThreadId: binding.discordThreadId,
          conversationId: binding.conversationId,
          runtimeEventId: item.event.id,
          runtimeEventOffset: item.event.offset,
          direction: "runtime-to-discord",
          discordMessageId: sent.id,
        });
        continue;
      }
      const sent = await thread.send(this.promptFallbackText(binding.conversationId));
      await this.options.store.recordMirroredEvent({
        discordThreadId: binding.discordThreadId,
        conversationId: binding.conversationId,
        runtimeEventId: item.event.id,
        runtimeEventOffset: item.event.offset,
        direction: "runtime-to-discord",
        discordMessageId: sent.id,
      });
    }
  }

  private async mirrorConversation(conversationId: string) {
    const bindings = await this.options.store.listActiveBindingsForConversation(conversationId);
    for (const binding of bindings) {
      await this.mirrorBinding(binding);
    }
  }

  private async mirrorBinding(binding: DiscordThreadBinding) {
    if (this.isDiscordSourceThreadInProgress(binding.discordThreadId)) return;

    const events = await this.options.runtime.listEvents(binding.conversationId, 0);
    const items = collectDiscordMirrorItems(events);
    if (items.length === 0) return;
    if (this.isDiscordSourceThreadInProgress(binding.discordThreadId)) return;

    const thread = await this.fetchThread(binding);
    if (!thread) {
      await this.options.store.deactivateBinding(binding.discordThreadId);
      return;
    }

    for (const item of items) {
      if (await this.options.store.hasMirroredEvent(binding.discordThreadId, item.event.id)) continue;
      if (isDiscordOriginUserMessage(item)) {
        await this.options.store.recordMirroredEvent({
          discordThreadId: binding.discordThreadId,
          conversationId: binding.conversationId,
          runtimeEventId: item.event.id,
          runtimeEventOffset: item.event.offset,
          direction: "discord-to-runtime",
        });
        continue;
      }
      const text = item.kind === "message"
        ? this.messageMirrorText(item)
        : this.promptFallbackText(binding.conversationId);
      if (!text) continue;
      try {
        const sent = await thread.send(text);
        await this.options.store.recordMirroredEvent({
          discordThreadId: binding.discordThreadId,
          conversationId: binding.conversationId,
          runtimeEventId: item.event.id,
          runtimeEventOffset: item.event.offset,
          direction: "runtime-to-discord",
          discordMessageId: sent.id,
        });
      } catch (error) {
        console.error("Cognidesk Discord Gateway mirror send failed.", error);
        await this.options.store.deactivateBinding(binding.discordThreadId);
        return;
      }
    }
  }

  private messageMirrorText(item: Extract<DiscordMirrorItem, { kind: "message" }>): string | null {
    if (item.role === "assistant") return item.text;
    if (item.origin === "discord") return null;
    if (item.origin === "voice") return `${this.options.copy?.voiceMessagePrefix ?? DEFAULT_VOICE_MESSAGE_PREFIX}: ${item.text}`;
    return `${this.options.copy?.webMessagePrefix ?? DEFAULT_WEB_MESSAGE_PREFIX}: ${item.text}`;
  }

  private promptFallbackText(conversationId: string) {
    return this.options.copy?.promptFallbackMessage?.({
      conversationId,
      conversationUrl: this.conversationUrl(conversationId),
    }) ?? `This step needs the web experience. Continue here: ${this.conversationUrl(conversationId)}`;
  }

  private connectedMessage(conversationId: string) {
    return this.options.copy?.connectedMessage?.({
      conversationId,
      conversationUrl: this.conversationUrl(conversationId),
    }) ?? `Discord continuation is connected. Web: ${this.conversationUrl(conversationId)}`;
  }

  private turnFailureMessage(discordThreadId: string) {
    return this.options.copy?.turnFailureMessage?.({
      discordThreadId,
      conversationUrl: this.conversationUrlForThread(discordThreadId),
    }) ?? `Cognidesk could not generate a response. Continue on web: ${this.conversationUrlForThread(discordThreadId)}`;
  }

  private supportThreadName(conversationId: string) {
    return `${this.options.copy?.supportThreadNamePrefix ?? DEFAULT_SUPPORT_THREAD_NAME_PREFIX} ${shortId(conversationId)}`;
  }

  private sourceThreadName(userId: string, messageId: string) {
    return `${this.options.copy?.sourceThreadNamePrefix ?? DEFAULT_SOURCE_THREAD_NAME_PREFIX} ${shortId(userId)}-${shortId(messageId)}`;
  }

  private conversationUrlForThread(discordThreadId: string) {
    return `${trimTrailingSlash(this.options.config.webAppUrl)}?discordThreadId=${encodeURIComponent(discordThreadId)}`;
  }

  private conversationUrl(conversationId: string) {
    return `${trimTrailingSlash(this.options.config.webAppUrl)}?conversationId=${encodeURIComponent(conversationId)}`;
  }

  private startMirrorLoop() {
    const run = async () => {
      if (this.stopped) return;
      if (this.mirrorRunning) {
        this.scheduleMirrorLoop();
        return;
      }
      this.mirrorRunning = true;
      try {
        const bindings = await this.options.store.listActiveBindings();
        for (const binding of bindings) {
          await this.mirrorBinding(binding);
        }
      } catch (error) {
        console.error("Cognidesk Discord Gateway mirror loop failed.", error);
      } finally {
        this.mirrorRunning = false;
        this.scheduleMirrorLoop();
      }
    };
    void run();
  }

  private scheduleMirrorLoop() {
    if (this.stopped) return;
    this.mirrorTimer = setTimeout(() => this.startMirrorLoop(), this.options.config.mirrorPollIntervalMs);
  }

  private markDiscordSourceThreadInProgress(threadId: string) {
    this.discordSourceThreadsInProgress.set(threadId, (this.discordSourceThreadsInProgress.get(threadId) ?? 0) + 1);
  }

  private unmarkDiscordSourceThreadInProgress(threadId: string) {
    const count = this.discordSourceThreadsInProgress.get(threadId) ?? 0;
    if (count <= 1) {
      this.discordSourceThreadsInProgress.delete(threadId);
      return;
    }
    this.discordSourceThreadsInProgress.set(threadId, count - 1);
  }

  private isDiscordSourceThreadInProgress(threadId: string) {
    return this.discordSourceThreadsInProgress.has(threadId);
  }

  private async fetchSupportChannel(): Promise<TextChannel | NewsChannel> {
    const channel = await this.client.channels.fetch(this.options.config.supportChannelId);
    if (!channel || (channel.type !== ChannelType.GuildText && channel.type !== ChannelType.GuildAnnouncement)) {
      throw new Error("Discord supportChannelId must point to a guild text or announcement channel.");
    }
    return channel;
  }

  private async fetchThread(binding: DiscordThreadBinding) {
    const channel = await this.client.channels.fetch(binding.discordThreadId).catch(() => null);
    if (!channel || !channel.isThread() || !channel.isSendable()) return null;
    return channel;
  }

  private requireReady() {
    if (!this.client.isReady()) {
      throw new Error("Discord Gateway integration is not ready yet.");
    }
  }
}

export function createDiscordGatewayService(options: DiscordGatewayServiceOptions) {
  return new DiscordGatewayService(options);
}

export function collectDiscordMirrorItems(events: RuntimeEvent[]): DiscordMirrorItem[] {
  const voiceMessageIds = new Set<string>();
  const orderedEvents = [...events].sort((left, right) => left.offset - right.offset);

  for (const event of orderedEvents) {
    if (event.type === "voice.transcript.committed") {
      voiceMessageIds.add(event.data.messageEventId);
    }
  }

  let pendingMessageRole: "user" | "assistant" | undefined;
  let pendingUserOrigin: DiscordMirrorMessageOrigin | undefined;
  const items: DiscordMirrorItem[] = [];

  for (const event of orderedEvents) {
    if (event.type === "channel.event.received") {
      pendingUserOrigin = channelEventOrigin(event);
      continue;
    }
    if (event.type === "message.started") {
      pendingMessageRole = event.data.role;
      continue;
    }
    if (event.type === "ui.prompted") {
      items.push({ kind: "prompt", event });
      continue;
    }
    if (event.type !== "message.completed") continue;
    const text = event.data.text.trim();
    if (!text) {
      pendingMessageRole = undefined;
      continue;
    }
    const role = pendingMessageRole ?? inferCompletedMessageRole(items, text);
    pendingMessageRole = undefined;
    const origin = role === "assistant"
      ? "web"
      : voiceMessageIds.has(event.id)
        ? "voice"
        : pendingUserOrigin ?? "web";
    if (role === "user") pendingUserOrigin = undefined;
    items.push({
      kind: "message",
      event,
      role,
      origin,
      text,
    });
  }

  return items;
}

function channelEventOrigin(event: Extract<RuntimeEvent, { type: "channel.event.received" }>): DiscordMirrorMessageOrigin {
  if (event.data.channel.provider === "discord") return "discord";
  if (event.data.channel.kind === "voice") return "voice";
  return "web";
}

function inferCompletedMessageRole(items: DiscordMirrorItem[], text: string): "user" | "assistant" {
  const previousMessage = [...items].reverse().find((item) => item.kind === "message");
  if (!previousMessage || previousMessage.role === "assistant") return "assistant";
  return previousMessage.text === text ? "user" : "assistant";
}

function isDiscordOriginUserMessage(
  item: DiscordMirrorItem,
): item is Extract<DiscordMirrorItem, { kind: "message" }> & { role: "user"; origin: "discord" } {
  return item.kind === "message" && item.role === "user" && item.origin === "discord";
}

function discordChannelContext(input: {
  guildId: string;
  parentChannelId: string;
  threadId: string;
  messageId?: string;
  userId?: string;
  threadName?: string;
}): ConversationChannelInput {
  return {
    channelId: input.parentChannelId,
    kind: "community",
    provider: "discord",
    externalThreadId: input.threadId,
    ...(input.messageId ? { externalMessageId: input.messageId } : {}),
    ...(input.userId ? { externalUserId: input.userId } : {}),
    capabilities: {
      async: true,
      markdown: true,
      richText: true,
      threaded: true,
      typingIndicator: true,
      attachments: true,
    },
    metadata: {
      guildId: input.guildId,
      threadId: input.threadId,
      ...(input.threadName ? { threadName: input.threadName } : {}),
    },
  };
}

function startTyping(thread: ThreadChannel) {
  let stopped = false;
  const send = () => {
    if (stopped) return;
    void thread.sendTyping().catch(() => undefined);
  };
  send();
  const interval = setInterval(send, 8_000);
  return {
    stop() {
      stopped = true;
      clearInterval(interval);
    },
  };
}

async function replaceReaction(message: Message, remove: string, add: string, botUserId: string | undefined) {
  await removeReaction(message, remove, botUserId);
  await message.react(add).catch(() => undefined);
}

async function removeReaction(message: Message, emoji: string, botUserId: string | undefined) {
  if (!botUserId) return;
  try {
    const reaction = message.reactions.cache.get(emoji) ?? await message.reactions.resolve(emoji)?.fetch();
    await reaction?.users.remove(botUserId);
  } catch {
    // Reactions are a UX hint; missing permissions should not break the turn.
  }
}

export function discordThreadUrl(guildId: string, threadId: string) {
  return `https://discord.com/channels/${guildId}/${threadId}`;
}

function shortId(value: string) {
  return value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) || "thread";
}

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}
