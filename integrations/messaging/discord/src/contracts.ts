import type { ChannelEventEnvelopeInput } from "@cognidesk/core";
import type { Client, ClientOptions, REST } from "discord.js";

export type DiscordMessagingJsonPrimitive = string | number | boolean | null;
export type DiscordMessagingJsonValue =
  | DiscordMessagingJsonPrimitive
  | DiscordMessagingJsonObject
  | readonly DiscordMessagingJsonValue[];
export type DiscordMessagingProviderExtensionValue = DiscordMessagingJsonValue | object | undefined;

export interface DiscordMessagingJsonObject {
  [key: string]: DiscordMessagingProviderExtensionValue;
}

export type DiscordMessagingProviderPayload = DiscordMessagingJsonObject | object;

export interface DiscordRestOptions {
  auth?: boolean;
  body?: DiscordMessagingProviderPayload;
  query?: URLSearchParams;
  reason?: string;
}

export interface DiscordRestLike {
  get(route: string, options?: DiscordRestOptions): Promise<unknown>;
  post(route: string, options?: DiscordRestOptions): Promise<unknown>;
}

export interface DiscordMessagingClientOptions {
  botToken?: string;
  apiBaseUrl?: string;
  apiVersion?: string;
  rest?: DiscordRestLike;
}

export interface DiscordGatewayClientOptions {
  clientOptions?: ClientOptions;
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
  [key: string]: DiscordMessagingProviderExtensionValue;
}

export interface DiscordApplicationResource {
  id?: string;
  name?: string;
  description?: string;
  bot_public?: boolean;
  bot_require_code_grant?: boolean;
  verify_key?: string;
  [key: string]: DiscordMessagingProviderExtensionValue;
}

export interface DiscordGuildResource {
  id?: string;
  name?: string;
  icon?: string | null;
  owner_id?: string;
  features?: string[];
  [key: string]: DiscordMessagingProviderExtensionValue;
}

export interface DiscordChannelResource {
  id?: string;
  type?: number;
  guild_id?: string;
  name?: string;
  topic?: string | null;
  parent_id?: string | null;
  thread_metadata?: DiscordMessagingJsonObject;
  message?: DiscordMessageResource;
  [key: string]: DiscordMessagingProviderExtensionValue;
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
  mentions?: DiscordMessagingJsonValue[];
  attachments?: DiscordMessagingJsonValue[];
  embeds?: DiscordMessagingJsonValue[];
  components?: DiscordMessagingJsonValue[];
  flags?: number;
  thread?: DiscordChannelResource;
  [key: string]: DiscordMessagingProviderExtensionValue;
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
  embeds?: DiscordMessagingJsonValue[];
  allowedMentions?: DiscordAllowedMentions;
  messageReference?: DiscordMessagingJsonObject;
  components?: DiscordMessagingJsonValue[];
  stickerIds?: string[];
  attachments?: DiscordMessagingJsonValue[];
  flags?: number;
  additionalFields?: DiscordMessagingJsonObject;
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

export interface DiscordGetGuildInput {
  guildId: string;
}

export interface DiscordGetChannelInput {
  channelId: string;
}

export interface DiscordMessagingClient {
  rest: DiscordRestLike | REST;
  sendChannelMessage(input: DiscordSendChannelMessageInput): Promise<DiscordMessageResource>;
  createThread(input: DiscordCreateThreadInput): Promise<DiscordChannelResource>;
  createForumPost(input: DiscordCreateForumPostInput): Promise<DiscordChannelResource>;
  executeWebhook(input: DiscordExecuteWebhookInput): Promise<DiscordMessageResource | Record<string, never>>;
  getCurrentBot(): Promise<DiscordUserResource>;
  getCurrentApplication(): Promise<DiscordApplicationResource>;
  getGuild(guildId: string): Promise<DiscordGuildResource>;
  getChannel(channelId: string): Promise<DiscordChannelResource>;
  listChannelMessages(input: DiscordListMessagesInput): Promise<DiscordMessageResource[]>;
  createGatewayClient(options?: DiscordGatewayClientOptions): Client;
}

export interface DiscordLiveCheckOptions extends DiscordMessagingClientOptions {
  applicationId?: string;
  guildId?: string;
  channelId?: string;
  client?: Pick<DiscordMessagingClient, "getCurrentBot" | "getCurrentApplication" | "getGuild" | "getChannel">;
}

export interface DiscordInteractionPayload {
  id?: string;
  application_id?: string;
  type?: number;
  token?: string;
  guild_id?: string;
  channel_id?: string;
  member?: DiscordMessagingProviderExtensionValue;
  user?: DiscordUserResource;
  data?: DiscordMessagingJsonObject;
  message?: DiscordMessageResource;
  [key: string]: DiscordMessagingProviderExtensionValue;
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

export interface ParseDiscordInteractionRequestInput extends ParseDiscordInteractionOptions {
  request: Request;
}

export interface ValidateDiscordInteractionSignatureInput {
  publicKey: string;
  rawBody: string | Buffer;
  timestamp: string;
  signature: string;
}

export interface NormalizeDiscordChannelEventInput {
  interaction: DiscordParsedInteractionRequest;
  receivedAt?: string;
}

export type DiscordChannelEvent = ChannelEventEnvelopeInput<Record<string, unknown>, unknown>;
