import type {
  DiscordHttpApiGeneratedClient,
  DiscordHttpApiGeneratedOperationCaller,
} from "./http-api-client.generated.js";

export type DiscordCommunityJsonPrimitive = string | number | boolean | null;
export type DiscordCommunityJsonValue =
  | DiscordCommunityJsonPrimitive
  | DiscordCommunityJsonObject
  | readonly DiscordCommunityJsonValue[];
export type DiscordCommunityProviderExtensionValue = DiscordCommunityJsonValue | object | undefined;
export interface DiscordCommunityJsonObject {
  [key: string]: DiscordCommunityProviderExtensionValue;
}
export type DiscordCommunityProviderPayload = DiscordCommunityJsonObject | object;
export type DiscordCommunityProviderQuery = Record<string, DiscordCommunityProviderExtensionValue>;
export interface DiscordCommunityProviderResponse extends DiscordCommunityJsonObject {}
export interface DiscordCommunityProviderExtensionFields extends DiscordCommunityJsonObject {}

export interface DiscordCommunityClientOptions {
  botToken: string;
  apiBaseUrl?: string;
  apiVersion?: string;
  fetch?: typeof fetch;
}

export interface DiscordCredentialStatusInput {
  botToken?: string;
  applicationId?: string;
  publicKey?: string;
  guildId?: string;
  channelId?: string;
  webhookUrl?: string;
  scopes?: string[];
  requiredScopes?: string[];
  expiresAt?: string;
  botInstalled?: boolean;
  channelPermissionGranted?: boolean;
}

export interface DiscordUserResource {
  id?: string;
  username?: string;
  discriminator?: string;
  global_name?: string | null;
  bot?: boolean;
  system?: boolean;
  avatar?: string | null;
  [key: string]: DiscordCommunityProviderExtensionValue;
}

export interface DiscordApplicationResource {
  id?: string;
  name?: string;
  description?: string;
  bot_public?: boolean;
  bot_require_code_grant?: boolean;
  verify_key?: string;
  [key: string]: DiscordCommunityProviderExtensionValue;
}

export interface DiscordGuildResource {
  id?: string;
  name?: string;
  icon?: string | null;
  owner_id?: string;
  features?: string[];
  [key: string]: DiscordCommunityProviderExtensionValue;
}

export interface DiscordChannelResource {
  id?: string;
  type?: number;
  guild_id?: string;
  name?: string;
  topic?: string | null;
  parent_id?: string | null;
  thread_metadata?: DiscordCommunityProviderExtensionFields;
  message?: DiscordMessageResource;
  [key: string]: DiscordCommunityProviderExtensionValue;
}

export interface DiscordMessageResource {
  id?: string;
  channel_id?: string;
  guild_id?: string;
  author?: DiscordUserResource;
  content?: string;
  timestamp?: string;
  edited_timestamp?: string | null;
  tts?: boolean;
  mention_everyone?: boolean;
  mentions?: DiscordCommunityJsonValue[];
  attachments?: DiscordCommunityJsonValue[];
  embeds?: DiscordCommunityJsonValue[];
  components?: DiscordCommunityJsonValue[];
  flags?: number;
  thread?: DiscordChannelResource;
  [key: string]: DiscordCommunityProviderExtensionValue;
}

export interface DiscordAllowedMentions {
  parse?: Array<"roles" | "users" | "everyone">;
  roles?: string[];
  users?: string[];
  replied_user?: boolean;
}

export interface DiscordMessageInput {
  content?: string;
  tts?: boolean;
  embeds?: DiscordCommunityJsonValue[];
  allowedMentions?: DiscordAllowedMentions;
  messageReference?: DiscordCommunityJsonObject;
  components?: DiscordCommunityJsonValue[];
  stickerIds?: string[];
  attachments?: DiscordCommunityJsonValue[];
  flags?: number;
  additionalFields?: DiscordCommunityProviderExtensionFields;
}

export interface DiscordSendChannelMessageInput extends DiscordMessageInput {
  channelId: string;
}

export interface DiscordCreateThreadInput {
  channelId: string;
  name: string;
  autoArchiveDuration?: 60 | 1440 | 4320 | 10080 | number;
  rateLimitPerUser?: number;
  invitable?: boolean;
  type?: number;
  reason?: string;
}

export interface DiscordCreateForumPostInput extends DiscordMessageInput {
  channelId: string;
  name: string;
  autoArchiveDuration?: 60 | 1440 | 4320 | 10080 | number;
  rateLimitPerUser?: number;
  appliedTags?: string[];
  reason?: string;
}

export interface DiscordListMessagesInput {
  channelId: string;
  around?: string;
  before?: string;
  after?: string;
  limit?: number;
}

export interface DiscordExecuteWebhookInput extends DiscordMessageInput {
  webhookUrl: string;
  wait?: boolean;
  threadId?: string;
}

export type DiscordHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface DiscordResource {
  [key: string]: DiscordCommunityProviderExtensionValue;
}

export interface DiscordOperationRequestInput {
  pathParams?: Record<string, string | number> | undefined;
  query?: DiscordCommunityProviderQuery | undefined;
  body?: DiscordCommunityProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  reason?: string | undefined;
  auth?: "bot" | "none" | undefined;
}

export interface DiscordCommunityClient {
  httpApi: DiscordHttpApiGeneratedClient;
  requestOperation: DiscordHttpApiGeneratedOperationCaller;
  sendChannelMessage(input: DiscordSendChannelMessageInput): Promise<DiscordMessageResource>;
  createThread(input: DiscordCreateThreadInput): Promise<DiscordChannelResource>;
  createForumPost(input: DiscordCreateForumPostInput): Promise<DiscordChannelResource>;
  executeWebhook(input: DiscordExecuteWebhookInput): Promise<DiscordMessageResource | Record<string, never>>;
  getCurrentBot(): Promise<DiscordUserResource>;
  getCurrentApplication(): Promise<DiscordApplicationResource>;
  getGuild(guildId: string): Promise<DiscordGuildResource>;
  getChannel(channelId: string): Promise<DiscordChannelResource>;
  listChannelMessages(input: DiscordListMessagesInput): Promise<DiscordMessageResource[]>;
}

export interface DiscordLiveCheckOptions extends DiscordCommunityClientOptions {
  applicationId?: string;
  guildId?: string;
  channelId?: string;
  client?: Pick<DiscordCommunityClient, "getCurrentBot" | "getCurrentApplication" | "getGuild" | "getChannel">;
}

export interface DiscordInteractionPayload {
  id?: string;
  application_id?: string;
  type?: number;
  token?: string;
  guild_id?: string;
  channel_id?: string;
  member?: DiscordCommunityProviderExtensionValue;
  user?: DiscordUserResource;
  data?: DiscordCommunityJsonObject;
  message?: DiscordMessageResource;
  [key: string]: DiscordCommunityProviderExtensionValue;
}

export interface DiscordParsedInteractionRequest {
  rawBody: string;
  contentType?: string;
  payload: DiscordInteractionPayload;
  validSignature?: boolean;
}

export interface ParseDiscordInteractionOptions {
  publicKey?: string;
  requireSignature?: boolean;
}

export interface ValidateDiscordInteractionSignatureInput {
  publicKey: string;
  rawBody: string | Buffer;
  timestamp: string;
  signature: string;
}
