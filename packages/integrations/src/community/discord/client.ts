import {
  createDiscordHttpApiGeneratedClient,
  type DiscordHttpApiGeneratedOperationCaller,
} from "./http-api-client.generated.js";
import {
  DISCORD_HTTP_API_OPERATION_BY_ID,
  DISCORD_HTTP_API_OPERATION_BY_UID,
  type DiscordHttpApiOperationUid,
} from "./http-api-operations.generated.js";
import type {
  DiscordApplicationResource,
  DiscordChannelResource,
  DiscordCommunityClient,
  DiscordCommunityClientOptions,
  DiscordCreateForumPostInput,
  DiscordGuildResource,
  DiscordHttpMethod,
  DiscordMessageResource,
  DiscordOperationRequestInput,
  DiscordResource,
  DiscordUserResource,
} from "./contracts.js";
import {
  applyDiscordPathParams,
  applyOptionalNumberQuery,
  applyOptionalStringQuery,
  discordApiUrl,
  discordMessageBody,
  discordOperationUrl,
  discordRequest,
  discordWebhookRequest,
  discordWebhookUrl,
  encodePath,
  stripUndefined,
} from "./request.js";

export function createDiscordCommunityClient(options: DiscordCommunityClientOptions): DiscordCommunityClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://discord.com/api").replace(/\/+$/, "");
  const apiVersion = options.apiVersion ?? "v10";
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = DiscordResource>(
    method: DiscordHttpMethod,
    path: string,
    input: DiscordOperationRequestInput = {},
  ) => discordRequest<T>({
    url: discordOperationUrl(apiBaseUrl, apiVersion, path, input.query),
    method,
    options,
    fetch: fetchImpl,
    body: input.body,
    headers: input.headers,
    reason: input.reason,
    auth: input.auth,
  });
  const requestOperation = async (
    operationUidOrId: DiscordHttpApiOperationUid | string,
    input: DiscordOperationRequestInput = {},
  ) => {
    const operation = DISCORD_HTTP_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? DISCORD_HTTP_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Discord HTTP API operation '${operationUidOrId}'.`);
    const path = applyDiscordPathParams(operation.path, input.pathParams);
    return request(operation.method, path, input);
  };
  const httpApi = createDiscordHttpApiGeneratedClient(requestOperation as DiscordHttpApiGeneratedOperationCaller);

  return {
    httpApi,
    requestOperation: requestOperation as DiscordHttpApiGeneratedOperationCaller,
    async sendChannelMessage(input) {
      return discordRequest<DiscordMessageResource>({
        url: discordApiUrl(apiBaseUrl, apiVersion, `/channels/${encodePath(input.channelId)}/messages`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: discordMessageBody(input),
      });
    },
    async createThread(input) {
      return discordRequest<DiscordChannelResource>({
        url: discordApiUrl(apiBaseUrl, apiVersion, `/channels/${encodePath(input.channelId)}/threads`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: stripUndefined({
          name: input.name,
          auto_archive_duration: input.autoArchiveDuration,
          rate_limit_per_user: input.rateLimitPerUser,
          invitable: input.invitable,
          type: input.type,
        }),
        ...(input.reason ? { reason: input.reason } : {}),
      });
    },
    async createForumPost(input: DiscordCreateForumPostInput) {
      return discordRequest<DiscordChannelResource>({
        url: discordApiUrl(apiBaseUrl, apiVersion, `/channels/${encodePath(input.channelId)}/threads`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: stripUndefined({
          name: input.name,
          auto_archive_duration: input.autoArchiveDuration,
          rate_limit_per_user: input.rateLimitPerUser,
          applied_tags: input.appliedTags,
          message: discordMessageBody(input),
        }),
        ...(input.reason ? { reason: input.reason } : {}),
      });
    },
    async executeWebhook(input) {
      const url = discordWebhookUrl(input.webhookUrl, apiBaseUrl);
      if (input.wait !== undefined) url.searchParams.set("wait", String(input.wait));
      if (input.threadId) url.searchParams.set("thread_id", input.threadId);
      return discordWebhookRequest<DiscordMessageResource | Record<string, never>>({
        url,
        fetch: fetchImpl,
        body: discordMessageBody(input),
      });
    },
    async getCurrentBot() {
      return discordRequest<DiscordUserResource>({
        url: discordApiUrl(apiBaseUrl, apiVersion, "/users/@me"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getCurrentApplication() {
      return discordRequest<DiscordApplicationResource>({
        url: discordApiUrl(apiBaseUrl, apiVersion, "/oauth2/applications/@me"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getGuild(guildId) {
      return discordRequest<DiscordGuildResource>({
        url: discordApiUrl(apiBaseUrl, apiVersion, `/guilds/${encodePath(guildId)}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getChannel(channelId) {
      return discordRequest<DiscordChannelResource>({
        url: discordApiUrl(apiBaseUrl, apiVersion, `/channels/${encodePath(channelId)}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async listChannelMessages(input) {
      const url = discordApiUrl(apiBaseUrl, apiVersion, `/channels/${encodePath(input.channelId)}/messages`);
      applyOptionalStringQuery(url, "around", input.around);
      applyOptionalStringQuery(url, "before", input.before);
      applyOptionalStringQuery(url, "after", input.after);
      applyOptionalNumberQuery(url, "limit", input.limit);
      return discordRequest<DiscordMessageResource[]>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}
