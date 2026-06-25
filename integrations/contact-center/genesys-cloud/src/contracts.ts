export type GenesysCloudJsonObject = Record<string, unknown>;

export interface GenesysCloudSdkApiClient {
  setEnvironment?: (environment: string) => void;
  setAccessToken?: (token: string) => void;
}

export interface GenesysCloudSdkCallOptions {
  customHeaders?: Record<string, string>;
}

export interface GenesysCloudOpenMessageSdkCallOptions extends GenesysCloudSdkCallOptions {
  prefetchConversationId?: boolean;
}

export interface GenesysCloudConversationsApi {
  postConversationsCallbacks(body: unknown, opts?: GenesysCloudSdkCallOptions): Promise<unknown>;
  postConversationsMessageInboundOpenMessage(
    integrationId: string,
    body: unknown,
    opts?: GenesysCloudOpenMessageSdkCallOptions,
  ): Promise<unknown>;
  getConversation(conversationId: string, opts?: GenesysCloudSdkCallOptions): Promise<unknown>;
}

export interface GenesysCloudRoutingApi {
  getRoutingQueues(opts?: GenesysCloudListQueuesInput & GenesysCloudSdkCallOptions): Promise<unknown>;
}

export interface GenesysCloudUsersApi {
  getUsersMe(opts?: GenesysCloudSdkCallOptions): Promise<unknown>;
}

export interface GenesysCloudSdkClient {
  apiClient: GenesysCloudSdkApiClient;
  conversationsApi: GenesysCloudConversationsApi;
  routingApi: GenesysCloudRoutingApi;
  usersApi: GenesysCloudUsersApi;
}

export interface GenesysCloudPlatformSdk {
  ApiClient: { instance: GenesysCloudSdkApiClient };
  ConversationsApi: new (apiClient?: GenesysCloudSdkApiClient) => GenesysCloudConversationsApi;
  RoutingApi: new (apiClient?: GenesysCloudSdkApiClient) => GenesysCloudRoutingApi;
  UsersApi: new (apiClient?: GenesysCloudSdkApiClient) => GenesysCloudUsersApi;
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
