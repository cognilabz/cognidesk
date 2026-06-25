import type * as GenesysCloudPlatformClient from "purecloud-platform-client-v2";

export type GenesysCloudPlatformSdk = typeof GenesysCloudPlatformClient;
export type GenesysCloudSdkApiClient = typeof GenesysCloudPlatformClient.ApiClient;
export type GenesysCloudConversationsApi = InstanceType<typeof GenesysCloudPlatformClient.ConversationsApi>;
export type GenesysCloudRoutingApi = InstanceType<typeof GenesysCloudPlatformClient.RoutingApi>;
export type GenesysCloudUsersApi = InstanceType<typeof GenesysCloudPlatformClient.UsersApi>;
export type GenesysCloudCallbackBody = Parameters<GenesysCloudConversationsApi["postConversationsCallbacks"]>[0];
export type GenesysCloudOpenMessageBody =
  Parameters<GenesysCloudConversationsApi["postConversationsMessageInboundOpenMessage"]>[1];
export type GenesysCloudSdkCallOptions =
  NonNullable<Parameters<GenesysCloudConversationsApi["postConversationsCallbacks"]>[1]>;
export type GenesysCloudOpenMessageSdkCallOptions =
  NonNullable<Parameters<GenesysCloudConversationsApi["postConversationsMessageInboundOpenMessage"]>[2]>;
export type GenesysCloudListQueuesSdkOptions =
  NonNullable<Parameters<GenesysCloudRoutingApi["getRoutingQueues"]>[0]>;

export type GenesysCloudJsonObject = Record<string, unknown>;

export interface GenesysCloudSdkClient {
  platformClient: GenesysCloudPlatformSdk;
  apiClient: GenesysCloudSdkApiClient;
  conversationsApi: GenesysCloudConversationsApi;
  routingApi: GenesysCloudRoutingApi;
  usersApi: GenesysCloudUsersApi;
}

export interface GenesysCloudContactCenterOptions {
  apiBaseUrl: string;
  accessToken?: string;
  sdk?: GenesysCloudPlatformSdk;
  sdkClient?: GenesysCloudSdkClient;
}

export interface GenesysCloudCreateCallbackInput {
  callback: unknown;
  customHeaders?: Record<string, string>;
}

export interface GenesysCloudCreateOpenMessageInput {
  integrationId: string;
  message: unknown;
  prefetchConversationId?: boolean;
  customHeaders?: Record<string, string>;
}

export interface GenesysCloudHandoffInput {
  callback?: unknown;
  payload?: unknown;
  openMessage?: GenesysCloudCreateOpenMessageInput;
  integrationId?: string;
  message?: unknown;
  prefetchConversationId?: boolean;
  customHeaders?: Record<string, string>;
}

export interface GenesysCloudGetConversationInput {
  conversationId: string;
  customHeaders?: Record<string, string>;
}

export interface GenesysCloudListQueuesInput {
  pageSize?: number;
  pageNumber?: number;
  name?: string;
}

export interface GenesysCloudContactCenterClient {
  sdkClient: GenesysCloudSdkClient;
  createHandoff(input?: GenesysCloudHandoffInput): Promise<unknown>;
  createCallback(input: GenesysCloudCreateCallbackInput): Promise<unknown>;
  createOpenMessage(input: GenesysCloudCreateOpenMessageInput): Promise<unknown>;
  getConversation(input: GenesysCloudGetConversationInput): Promise<unknown>;
  listQueues(input?: GenesysCloudListQueuesInput): Promise<unknown>;
  readiness(): Promise<unknown>;
}
