import type {
  GenesysCloudContactCenterClient,
  GenesysCloudContactCenterOptions,
  GenesysCloudCreateCallbackInput,
  GenesysCloudCreateOpenMessageInput,
  GenesysCloudGetConversationInput,
  GenesysCloudHandoffInput,
  GenesysCloudListQueuesInput,
  GenesysCloudOpenMessageSdkCallOptions,
  GenesysCloudPlatformSdk,
  GenesysCloudSdkCallOptions,
  GenesysCloudSdkClient,
} from "./contracts.js";

export async function createGenesysCloudContactCenterClient(
  options: GenesysCloudContactCenterOptions,
): Promise<GenesysCloudContactCenterClient> {
  const sdkClient = options.sdkClient ?? await createGenesysCloudSdkClient(options);

  const client: GenesysCloudContactCenterClient = {
    sdkClient,
    createHandoff(input = {}) {
      const openMessage = handoffOpenMessage(input);
      if (openMessage) return client.createOpenMessage(openMessage);

      const callback = handoffCallback(input);
      assertBody(callback, "Genesys Cloud handoff callback payload");
      return client.createCallback({
        callback,
        ...(input.customHeaders ? { customHeaders: input.customHeaders } : {}),
      });
    },
    createCallback(input) {
      assertBody(input.callback, "Genesys Cloud callback");
      return sdkClient.conversationsApi.postConversationsCallbacks(input.callback, sdkOptions(input));
    },
    createOpenMessage(input) {
      requireIntegrationId(input.integrationId);
      assertBody(input.message, "Genesys Cloud Open Messaging message");
      return sdkClient.conversationsApi.postConversationsMessageInboundOpenMessage(
        input.integrationId,
        input.message,
        openMessageSdkOptions(input),
      );
    },
    getConversation(input) {
      requireConversationId(input.conversationId);
      return sdkClient.conversationsApi.getConversation(input.conversationId, sdkOptions(input));
    },
    listQueues(input = {}) {
      return sdkClient.routingApi.getRoutingQueues(listQueuesSdkOptions(input));
    },
    readiness() {
      return sdkClient.usersApi.getUsersMe();
    },
  };

  return client;
}

export async function createGenesysCloudSdkClient(
  options: Pick<GenesysCloudContactCenterOptions, "apiBaseUrl" | "accessToken" | "sdk">,
): Promise<GenesysCloudSdkClient> {
  const sdk = options.sdk ?? await loadGenesysCloudSdk();
  const apiClient = sdk.ApiClient.instance;
  apiClient.setEnvironment?.(options.apiBaseUrl);
  if (options.accessToken) apiClient.setAccessToken?.(options.accessToken);

  return {
    apiClient,
    conversationsApi: new sdk.ConversationsApi(apiClient),
    routingApi: new sdk.RoutingApi(apiClient),
    usersApi: new sdk.UsersApi(apiClient),
  };
}

async function loadGenesysCloudSdk(): Promise<GenesysCloudPlatformSdk> {
  const sdkModule = await import("purecloud-platform-client-v2");
  return ((sdkModule as { default?: unknown }).default ?? sdkModule) as GenesysCloudPlatformSdk;
}

function handoffOpenMessage(input: GenesysCloudHandoffInput): GenesysCloudCreateOpenMessageInput | undefined {
  if (input.openMessage) return input.openMessage;
  if (!input.integrationId) return undefined;
  const message = input.message !== undefined ? input.message : input.payload;
  return {
    integrationId: input.integrationId,
    message,
    ...(input.prefetchConversationId !== undefined ? { prefetchConversationId: input.prefetchConversationId } : {}),
    ...(input.customHeaders ? { customHeaders: input.customHeaders } : {}),
  };
}

function handoffCallback(input: GenesysCloudHandoffInput) {
  return input.callback !== undefined ? input.callback : input.payload;
}

function sdkOptions(input: { customHeaders?: Record<string, string> }): GenesysCloudSdkCallOptions | undefined {
  return input.customHeaders ? { customHeaders: input.customHeaders } : undefined;
}

function openMessageSdkOptions(input: GenesysCloudCreateOpenMessageInput): GenesysCloudOpenMessageSdkCallOptions | undefined {
  const options: GenesysCloudOpenMessageSdkCallOptions = {};
  if (input.prefetchConversationId !== undefined) options.prefetchConversationId = input.prefetchConversationId;
  if (input.customHeaders) options.customHeaders = input.customHeaders;
  return Object.keys(options).length > 0 ? options : undefined;
}

function listQueuesSdkOptions(input: GenesysCloudListQueuesInput) {
  const options: GenesysCloudListQueuesInput = {};
  if (input.pageSize !== undefined) options.pageSize = input.pageSize;
  if (input.pageNumber !== undefined) options.pageNumber = input.pageNumber;
  if (input.name !== undefined) options.name = input.name;
  return Object.keys(options).length > 0 ? options : undefined;
}

function assertBody(body: unknown, label: string) {
  if (body === undefined) throw new Error(`${label} is required.`);
}

function requireIntegrationId(integrationId: string) {
  if (!integrationId) throw new Error("Genesys Cloud Open Messaging integrationId is required.");
}

function requireConversationId(conversationId: string) {
  if (!conversationId) throw new Error("Genesys Cloud conversationId is required.");
}
