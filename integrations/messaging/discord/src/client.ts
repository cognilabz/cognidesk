import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import type {
  DiscordApplicationResource,
  DiscordChannelResource,
  DiscordMessagingClient,
  DiscordMessagingClientOptions,
  DiscordMessagingJsonObject,
  DiscordCreateForumPostInput,
  DiscordCreateThreadInput,
  DiscordExecuteWebhookInput,
  DiscordGatewayClientOptions,
  DiscordGuildResource,
  DiscordMessageInput,
  DiscordMessageResource,
  DiscordRestLike,
  DiscordUserResource,
} from "./contracts.js";

export function createDiscordMessagingClient(options: DiscordMessagingClientOptions): DiscordMessagingClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://discord.com/api").replace(/\/+$/, "");
  const apiVersion = options.apiVersion ?? "10";
  const rest = options.rest ?? createDiscordRest({ ...options, apiBaseUrl, apiVersion });
  const authenticatedRest = (operation: string) => {
    if (!options.rest && !options.botToken) {
      throw new Error(`Discord botToken is required for ${operation}; pass botToken or a discord.js REST-compatible client.`);
    }
    return rest;
  };

  return {
    rest,
    async sendChannelMessage(input) {
      return authenticatedRest("discord.message.send").post(Routes.channelMessages(input.channelId), {
        body: discordMessageBody(input),
      }) as Promise<DiscordMessageResource>;
    },
    async createThread(input) {
      return authenticatedRest("discord.thread.create").post(Routes.threads(input.channelId), {
        body: stripUndefined({
          name: input.name,
          auto_archive_duration: input.autoArchiveDuration,
          rate_limit_per_user: input.rateLimitPerUser,
          invitable: input.invitable,
          type: input.type,
        }),
        ...(input.reason ? { reason: input.reason } : {}),
      }) as Promise<DiscordChannelResource>;
    },
    async createForumPost(input: DiscordCreateForumPostInput) {
      return authenticatedRest("discord.forum-post.create").post(Routes.threads(input.channelId), {
        body: stripUndefined({
          name: input.name,
          auto_archive_duration: input.autoArchiveDuration,
          rate_limit_per_user: input.rateLimitPerUser,
          applied_tags: input.appliedTags,
          message: discordMessageBody(input),
        }),
        ...(input.reason ? { reason: input.reason } : {}),
      }) as Promise<DiscordChannelResource>;
    },
    async executeWebhook(input) {
      const webhook = parseDiscordWebhookUrl(input.webhookUrl, apiBaseUrl);
      const query = new URLSearchParams();
      if (input.wait !== undefined) query.set("wait", String(input.wait));
      if (input.threadId) query.set("thread_id", input.threadId);
      return rest.post(Routes.webhook(webhook.id, webhook.token), {
        auth: false,
        body: discordMessageBody(input),
        ...(query.size > 0 ? { query } : {}),
      }) as Promise<DiscordMessageResource | Record<string, never>>;
    },
    async getCurrentBot() {
      return authenticatedRest("discord.bot.read").get(Routes.user()) as Promise<DiscordUserResource>;
    },
    async getCurrentApplication() {
      return authenticatedRest("discord.application.read").get(Routes.oauth2CurrentApplication()) as Promise<DiscordApplicationResource>;
    },
    async getGuild(guildId) {
      return authenticatedRest("discord.guild.read").get(Routes.guild(guildId)) as Promise<DiscordGuildResource>;
    },
    async getChannel(channelId) {
      return authenticatedRest("discord.channel.read").get(Routes.channel(channelId)) as Promise<DiscordChannelResource>;
    },
    async listChannelMessages(input) {
      const query = new URLSearchParams();
      setOptionalQuery(query, "around", input.around);
      setOptionalQuery(query, "before", input.before);
      setOptionalQuery(query, "after", input.after);
      if (input.limit !== undefined) query.set("limit", String(input.limit));
      return authenticatedRest("discord.channel-messages.list").get(Routes.channelMessages(input.channelId), {
        ...(query.size > 0 ? { query } : {}),
      }) as Promise<DiscordMessageResource[]>;
    },
    createGatewayClient(input: DiscordGatewayClientOptions = {}) {
      return new Client(input.clientOptions ?? { intents: [GatewayIntentBits.Guilds] });
    },
  };
}

export function discordMessageBody(input: DiscordMessageInput) {
  return stripUndefined({
    content: input.content,
    tts: input.tts,
    embeds: input.embeds,
    allowed_mentions: input.allowedMentions,
    message_reference: input.messageReference,
    components: input.components,
    sticker_ids: input.stickerIds,
    attachments: input.attachments,
    flags: input.flags,
    ...(input.additionalFields ?? {}),
  });
}

export function discordWebhookUrl(webhookUrl: string, apiBaseUrl: string) {
  return parseDiscordWebhookUrl(webhookUrl, apiBaseUrl).url;
}

export function encodePath(value: string | number) {
  return encodeURIComponent(String(value));
}

export function stripUndefined<T extends DiscordMessagingJsonObject>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}

function createDiscordRest(options: DiscordMessagingClientOptions & { apiBaseUrl: string; apiVersion: string }) {
  const rest = new REST({
    api: discordRestApiBaseUrl(options.apiBaseUrl),
    version: options.apiVersion,
  });
  return (options.botToken ? rest.setToken(options.botToken) : rest) as unknown as DiscordRestLike;
}

function discordRestApiBaseUrl(apiBaseUrl: string) {
  return apiBaseUrl.replace(/\/v\d+$/, "");
}

function parseDiscordWebhookUrl(webhookUrl: string, apiBaseUrl: string) {
  const url = new URL(webhookUrl);
  const apiUrl = new URL(apiBaseUrl);
  const apiPath = apiUrl.pathname.replace(/\/+$/, "");
  const versionedApiPath = `${apiPath}/v10`;
  const allowedPrefix = (url.pathname.startsWith(`${apiPath}/webhooks/`) || url.pathname.startsWith(`${versionedApiPath}/webhooks/`));
  if (url.origin !== apiUrl.origin || !allowedPrefix) {
    throw new Error("Discord webhookUrl must be a Discord webhook execution URL for the configured Discord API origin.");
  }
  const parts = url.pathname.split("/").filter(Boolean);
  const webhooksIndex = parts.indexOf("webhooks");
  const id = parts[webhooksIndex + 1];
  const token = parts[webhooksIndex + 2];
  if (!id || !token || parts.length !== webhooksIndex + 3) {
    throw new Error("Discord webhookUrl must be a Discord webhook execution URL for the configured Discord API origin.");
  }
  return { url, id, token };
}

function setOptionalQuery(query: URLSearchParams, key: string, value?: string) {
  if (value) query.set(key, value);
}

export type { DiscordRestLike };
