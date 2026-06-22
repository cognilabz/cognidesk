import { Client, GatewayIntentBits, REST } from "discord.js";
import type {
  DiscordApplicationResource,
  DiscordChannelResource,
  DiscordCommunityClient,
  DiscordCommunityClientOptions,
  DiscordCommunityJsonObject,
  DiscordCommunityProviderPayload,
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

export function createDiscordCommunityClient(options: DiscordCommunityClientOptions): DiscordCommunityClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://discord.com/api").replace(/\/+$/, "");
  const apiVersion = options.apiVersion ?? "10";
  const rest: DiscordRestLike = options.rest ?? (new REST({ version: apiVersion }).setToken(options.botToken) as unknown as DiscordRestLike);
  const fetchImpl = options.fetch ?? fetch;

  return {
    rest,
    async sendChannelMessage(input) {
      return rest.post(`/channels/${encodePath(input.channelId)}/messages`, {
        body: discordMessageBody(input),
      }) as Promise<DiscordMessageResource>;
    },
    async createThread(input) {
      return rest.post(`/channels/${encodePath(input.channelId)}/threads`, {
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
      return rest.post(`/channels/${encodePath(input.channelId)}/threads`, {
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
      const url = discordWebhookUrl(input.webhookUrl, apiBaseUrl);
      if (input.wait !== undefined) url.searchParams.set("wait", String(input.wait));
      if (input.threadId) url.searchParams.set("thread_id", input.threadId);
      const response = await fetchImpl(url.toString(), {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(discordMessageBody(input)),
      });
      return parseDiscordFetchResponse<DiscordMessageResource | Record<string, never>>(response);
    },
    async getCurrentBot() {
      return rest.get("/users/@me") as Promise<DiscordUserResource>;
    },
    async getCurrentApplication() {
      return rest.get("/oauth2/applications/@me") as Promise<DiscordApplicationResource>;
    },
    async getGuild(guildId) {
      return rest.get(`/guilds/${encodePath(guildId)}`) as Promise<DiscordGuildResource>;
    },
    async getChannel(channelId) {
      return rest.get(`/channels/${encodePath(channelId)}`) as Promise<DiscordChannelResource>;
    },
    async listChannelMessages(input) {
      const query = new URLSearchParams();
      setOptionalQuery(query, "around", input.around);
      setOptionalQuery(query, "before", input.before);
      setOptionalQuery(query, "after", input.after);
      if (input.limit !== undefined) query.set("limit", String(input.limit));
      const suffix = query.size > 0 ? `?${query}` : "";
      return rest.get(`/channels/${encodePath(input.channelId)}/messages${suffix}`) as Promise<DiscordMessageResource[]>;
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
  return url;
}

export function encodePath(value: string | number) {
  return encodeURIComponent(String(value));
}

export function stripUndefined<T extends DiscordCommunityJsonObject>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}

function setOptionalQuery(query: URLSearchParams, key: string, value?: string) {
  if (value) query.set(key, value);
}

async function parseDiscordFetchResponse<T>(response: Response): Promise<T> {
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & DiscordErrorResponse : {} as T & DiscordErrorResponse;
  if (!response.ok) {
    const message = typeof body.message === "string" ? body.message : `Discord API request failed with status ${response.status}.`;
    const code = typeof body.code === "number" || typeof body.code === "string" ? ` (${body.code})` : "";
    throw new Error(`${message}${code}`);
  }
  return body as T;
}

interface DiscordErrorResponse {
  message?: string;
  code?: number | string;
  errors?: DiscordCommunityProviderPayload;
}

export type { DiscordRestLike };
