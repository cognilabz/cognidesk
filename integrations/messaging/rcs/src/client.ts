import { rcsbusinessmessaging_v1 } from "@google/rcsbusinessmessaging/src/rcsbusinessmessaging/v1.js";
import {
  RCS_BUSINESS_COMMUNICATIONS_SCOPE,
  RCS_MESSAGING_SCOPE,
  type RcsAgentEvent,
  type RcsAgentMessage,
  type RcsAgentResource,
  type RcsBusinessMessagingSdkClient,
  type RcsBusinessMessagingSdkRequestOptions,
  type RcsBusinessMessagingSdkResponse,
  type RcsCapabilityResponse,
  type RcsCreateFileInput,
  type RcsFileResource,
  type RcsMessagingJsonObject,
  type RcsMessagingClient,
  type RcsMessagingClientOptions,
  type RcsMessagingProviderClient,
  type RcsMessagingProviderResponse,
  type RcsSendAgentEventInput,
  type RcsSendCardInput,
  type RcsSendMediaInput,
  type RcsSendTextInput,
} from "./contracts.js";
import {
  rcsManagementBaseUrl,
  rcsMessagingBaseUrl,
  rcsPhonePath,
  rcsRequest,
  rcsUrl,
  resolveRcsAccessToken,
  requireAgentId,
  requireAgentName,
  stripUndefined,
} from "./request.js";

export function createRcsMessagingClient(options: RcsMessagingClientOptions = {}): RcsMessagingClient {
  const providerClient = requireRcsMessagingProviderClient(
    options.providerClient ?? createRcsSdkProviderClient(options),
  );

  const client: RcsMessagingClient = {
    providerClient,
    async sendMessage(input) {
      return providerClient.sendMessage(input);
    },
    async sendText(input) {
      return client.sendMessage({
        phoneNumber: input.phoneNumber,
        messageId: input.messageId,
        message: createRcsTextMessage(input),
      });
    },
    async sendMedia(input) {
      return client.sendMessage({
        phoneNumber: input.phoneNumber,
        messageId: input.messageId,
        message: createRcsMediaMessage(input),
      });
    },
    async sendCard(input) {
      return client.sendMessage({
        phoneNumber: input.phoneNumber,
        messageId: input.messageId,
        message: createRcsCardMessage(input),
      });
    },
    async sendReadReceipt(input) {
      return client.sendAgentEvent({
        phoneNumber: input.phoneNumber,
        ...(input.eventId ? { eventId: input.eventId } : {}),
        event: { eventType: "READ", messageId: input.messageId },
      });
    },
    async sendTyping(input) {
      return client.sendAgentEvent({
        phoneNumber: input.phoneNumber,
        ...(input.eventId ? { eventId: input.eventId } : {}),
        event: { eventType: "IS_TYPING" },
      });
    },
    async createFile(input) {
      return providerClient.createFile(input);
    },
    async uploadFile(input) {
      return providerClient.uploadFile(input);
    },
    async getCapabilities(input) {
      return providerClient.getCapabilities(input);
    },
    async getAgent(agentName = options.agentName) {
      return providerClient.getAgent(agentName);
    },
    async getAgentLaunch(agentName = options.agentName) {
      return providerClient.getAgentLaunch(agentName);
    },
    async getAgentVerification(agentName = options.agentName) {
      return providerClient.getAgentVerification(agentName);
    },
    async sendAgentEvent(input: RcsSendAgentEventInput) {
      return providerClient.sendAgentEvent(input);
    },
  };

  return client;
}

export function createRcsSdkProviderClient(options: RcsMessagingClientOptions): RcsMessagingProviderClient {
  requireRcsRestTransport(options);
  const fetchImpl = options.fetch ?? fetch;
  const sdkClient = options.sdkClient ?? createRcsBusinessMessagingSdkClient();

  return {
    rawClient: sdkClient,
    async sendMessage(input) {
      const response = await sdkClient.phones.agentMessages.create({
        ...rcsSdkAuthParams(await resolveRcsAccessToken(options, fetchImpl, [RCS_MESSAGING_SCOPE])),
        agentId: requireAgentId(options.agentId),
        parent: `phones/${input.phoneNumber}`,
        messageId: input.messageId,
        requestBody: input.message,
      }, rcsSdkRequestOptions(options));
      return sdkResponseData<RcsAgentMessage>(response);
    },
    async sendAgentEvent(input) {
      const response = await sdkClient.phones.agentEvents.create({
        ...rcsSdkAuthParams(await resolveRcsAccessToken(options, fetchImpl, [RCS_MESSAGING_SCOPE])),
        agentId: requireAgentId(options.agentId),
        parent: `phones/${input.phoneNumber}`,
        ...(input.eventId ? { eventId: input.eventId } : {}),
        requestBody: input.event,
      }, rcsSdkRequestOptions(options));
      return sdkResponseData<RcsAgentEvent>(response);
    },
    async createFile(input) {
      const response = await sdkClient.files.create({
        ...rcsSdkAuthParams(await resolveRcsAccessToken(options, fetchImpl, [RCS_MESSAGING_SCOPE])),
        agentId: requireAgentId(options.agentId),
        requestBody: rcsCreateFileRequest(input),
      }, rcsSdkRequestOptions(options));
      return sdkResponseData<RcsFileResource>(response);
    },
    async uploadFile(input) {
      const response = await sdkClient.files.create({
        ...rcsSdkAuthParams(await resolveRcsAccessToken(options, fetchImpl, [RCS_MESSAGING_SCOPE])),
        agentId: requireAgentId(options.agentId),
        media: {
          mimeType: input.contentType,
          body: input.body,
        },
      }, rcsSdkRequestOptions(options));
      return sdkResponseData<RcsFileResource>(response);
    },
    async getCapabilities(input) {
      const response = await sdkClient.phones.getCapabilities({
        ...rcsSdkAuthParams(await resolveRcsAccessToken(options, fetchImpl, [RCS_MESSAGING_SCOPE])),
        agentId: requireAgentId(options.agentId),
        name: `phones/${input.phoneNumber}`,
        ...(input.requestId ? { requestId: input.requestId } : {}),
      }, rcsSdkRequestOptions(options));
      return sdkResponseData<RcsCapabilityResponse>(response);
    },
    getAgent(agentName = options.agentName) {
      return rcsBusinessCommunicationsRequest<RcsAgentResource>(options, fetchImpl, agentName, "");
    },
    getAgentLaunch(agentName = options.agentName) {
      return rcsBusinessCommunicationsRequest<RcsMessagingProviderResponse>(options, fetchImpl, agentName, "/launch");
    },
    getAgentVerification(agentName = options.agentName) {
      return rcsBusinessCommunicationsRequest<RcsMessagingProviderResponse>(options, fetchImpl, agentName, "/verification");
    },
  };
}

export function createRcsTextMessage(input: Omit<RcsSendTextInput, "phoneNumber" | "messageId">): RcsAgentMessage {
  return stripUndefined({
    contentMessage: stripUndefined({
      text: input.text,
      suggestions: input.suggestions,
    }),
    messageTrafficType: input.messageTrafficType,
    expireTime: input.expireTime,
    ttl: input.ttl,
  }) as RcsAgentMessage;
}

export function createRcsMediaMessage(input: Omit<RcsSendMediaInput, "phoneNumber" | "messageId">): RcsAgentMessage {
  if (Boolean(input.contentInfo) === Boolean(input.uploadedRbmFile)) {
    throw new Error("Exactly one of contentInfo or uploadedRbmFile is required for an RCS media message.");
  }
  return stripUndefined({
    contentMessage: stripUndefined({
      contentInfo: input.contentInfo,
      uploadedRbmFile: input.uploadedRbmFile,
      suggestions: input.suggestions,
    }),
    messageTrafficType: input.messageTrafficType,
    expireTime: input.expireTime,
    ttl: input.ttl,
  }) as RcsAgentMessage;
}

export function createRcsCardMessage(input: Omit<RcsSendCardInput, "phoneNumber" | "messageId">): RcsAgentMessage {
  return stripUndefined({
    contentMessage: stripUndefined({
      richCard: input.richCard,
      suggestions: input.suggestions,
    }),
    messageTrafficType: input.messageTrafficType,
    expireTime: input.expireTime,
    ttl: input.ttl,
  }) as RcsAgentMessage;
}

export function createRcsRestProviderClient(options: RcsMessagingClientOptions): RcsMessagingProviderClient {
  requireRcsRestTransport(options);
  const fetchImpl = options.fetch ?? fetch;
  const messagingApiBaseUrl = rcsMessagingBaseUrl(options);
  const managementApiBaseUrl = rcsManagementBaseUrl(options);

  return {
    rawClient: { type: "provider-rest-adapter", provider: "rcs" },
    sendMessage(input) {
      const agentId = requireAgentId(options.agentId);
      const url = rcsUrl(messagingApiBaseUrl, `/v1/phones/${rcsPhonePath(input.phoneNumber)}/agentMessages`);
      url.searchParams.set("messageId", input.messageId);
      url.searchParams.set("agentId", agentId);
      return rcsRequest<RcsAgentMessage>({ url, method: "POST", options, fetch: fetchImpl, body: input.message });
    },
    sendAgentEvent(input) {
      const agentId = requireAgentId(options.agentId);
      const url = rcsUrl(messagingApiBaseUrl, `/v1/phones/${rcsPhonePath(input.phoneNumber)}/agentEvents`);
      url.searchParams.set("agentId", agentId);
      if (input.eventId) url.searchParams.set("eventId", input.eventId);
      return rcsRequest<RcsAgentEvent>({ url, method: "POST", options, fetch: fetchImpl, body: input.event });
    },
    createFile(input) {
      return rcsRequest<RcsFileResource>({
        url: rcsUrl(messagingApiBaseUrl, "/v1/files"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: stripUndefined({
          fileUrl: input.fileUrl,
          thumbnailUrl: input.thumbnailUrl,
          agentId: requireAgentId(options.agentId),
        }),
      });
    },
    uploadFile(input) {
      const url = rcsUrl(messagingApiBaseUrl, "/upload/v1/files");
      url.searchParams.set("agentId", requireAgentId(options.agentId));
      return rcsRequest<RcsFileResource>({
        url,
        method: "POST",
        options,
        fetch: fetchImpl,
        rawBody: input.body,
        contentType: input.contentType,
      });
    },
    getCapabilities(input) {
      const url = rcsUrl(messagingApiBaseUrl, `/v1/phones/${rcsPhonePath(input.phoneNumber)}/capabilities`);
      url.searchParams.set("agentId", requireAgentId(options.agentId));
      if (input.requestId) url.searchParams.set("requestId", input.requestId);
      return rcsRequest<RcsCapabilityResponse>({ url, method: "GET", options, fetch: fetchImpl });
    },
    getAgent(agentName = options.agentName) {
      const name = requireAgentName(agentName);
      return rcsRequest<RcsAgentResource>({
        url: rcsUrl(managementApiBaseUrl, `/v1/${name}`),
        method: "GET",
        options,
        fetch: fetchImpl,
        scopes: [RCS_BUSINESS_COMMUNICATIONS_SCOPE],
      });
    },
    getAgentLaunch(agentName = options.agentName) {
      const name = requireAgentName(agentName);
      return rcsRequest<RcsMessagingProviderResponse>({
        url: rcsUrl(managementApiBaseUrl, `/v1/${name}/launch`),
        method: "GET",
        options,
        fetch: fetchImpl,
        scopes: [RCS_BUSINESS_COMMUNICATIONS_SCOPE],
      });
    },
    getAgentVerification(agentName = options.agentName) {
      const name = requireAgentName(agentName);
      return rcsRequest<RcsMessagingProviderResponse>({
        url: rcsUrl(managementApiBaseUrl, `/v1/${name}/verification`),
        method: "GET",
        options,
        fetch: fetchImpl,
        scopes: [RCS_BUSINESS_COMMUNICATIONS_SCOPE],
      });
    },
  };
}

function createRcsBusinessMessagingSdkClient(): RcsBusinessMessagingSdkClient {
  return new rcsbusinessmessaging_v1.Rcsbusinessmessaging({}) as unknown as RcsBusinessMessagingSdkClient;
}

function rcsSdkAuthParams(accessToken: string | undefined): RcsMessagingJsonObject {
  return accessToken ? { access_token: accessToken } : {};
}

function rcsSdkRequestOptions(options: RcsMessagingClientOptions): RcsBusinessMessagingSdkRequestOptions {
  return stripUndefined({
    rootUrl: rcsMessagingBaseUrl(options),
    signal: options.signal,
  });
}

function sdkResponseData<T>(response: RcsBusinessMessagingSdkResponse<T>): T {
  return (response.data ?? {}) as T;
}

function rcsCreateFileRequest(input: RcsCreateFileInput): RcsCreateFileInput {
  return stripUndefined({
    fileUrl: input.fileUrl,
    thumbnailUrl: input.thumbnailUrl,
  }) as unknown as RcsCreateFileInput;
}

function rcsBusinessCommunicationsRequest<T>(
  options: RcsMessagingClientOptions,
  fetchImpl: typeof fetch,
  agentName: string | undefined,
  suffix: "" | "/launch" | "/verification",
) {
  const name = requireAgentName(agentName);
  return rcsRequest<T>({
    url: rcsUrl(rcsManagementBaseUrl(options), `/v1/${name}${suffix}`),
    method: "GET",
    options,
    fetch: fetchImpl,
    scopes: [RCS_BUSINESS_COMMUNICATIONS_SCOPE],
  });
}

function requireRcsMessagingProviderClient(client: RcsMessagingProviderClient) {
  for (const method of requiredProviderClientMethods) {
    if (typeof client[method] !== "function") {
      throw new Error(`RcsMessagingProviderClient must implement ${method}().`);
    }
  }
  return client;
}

function requireRcsRestTransport(options: RcsMessagingClientOptions) {
  if (options.accessToken || options.tokenProvider || options.serviceAccount) return;
  throw new Error("RCS built-in REST adapter requires accessToken, tokenProvider, serviceAccount, or providerClient.");
}

const requiredProviderClientMethods = [
  "sendMessage",
  "sendAgentEvent",
  "createFile",
  "uploadFile",
  "getCapabilities",
  "getAgent",
  "getAgentLaunch",
  "getAgentVerification",
] as const;
