import {
  RCS_BUSINESS_COMMUNICATIONS_SCOPE,
  type RcsAgentEvent,
  type RcsAgentMessage,
  type RcsAgentResource,
  type RcsCapabilityResponse,
  type RcsFileResource,
  type RcsMessagingClient,
  type RcsMessagingClientOptions,
  type RcsMessagingProviderResponse,
  type RcsSendAgentEventInput,
  type RcsSendCardInput,
  type RcsSendMediaInput,
  type RcsSendTextInput,
} from "./contracts.js";
import {
  rcsMessagingBaseUrl,
  rcsPhonePath,
  rcsRequest,
  rcsUrl,
  requireAgentName,
  stripUndefined,
} from "./request.js";

export function createRcsMessagingClient(options: RcsMessagingClientOptions): RcsMessagingClient {
  const fetchImpl = options.fetch ?? fetch;
  const messagingApiBaseUrl = rcsMessagingBaseUrl(options);
  const managementApiBaseUrl = (options.managementApiBaseUrl ?? "https://businesscommunications.googleapis.com").replace(/\/+$/, "");

  return {
    async sendMessage(input) {
      const url = rcsUrl(messagingApiBaseUrl, `/v1/phones/${rcsPhonePath(input.phoneNumber)}/agentMessages`);
      url.searchParams.set("messageId", input.messageId);
      url.searchParams.set("agentId", options.agentId);
      return rcsRequest<RcsAgentMessage>({ url, method: "POST", options, fetch: fetchImpl, body: input.message });
    },
    async sendText(input) {
      return this.sendMessage({
        phoneNumber: input.phoneNumber,
        messageId: input.messageId,
        message: createRcsTextMessage(input),
      });
    },
    async sendMedia(input) {
      return this.sendMessage({
        phoneNumber: input.phoneNumber,
        messageId: input.messageId,
        message: createRcsMediaMessage(input),
      });
    },
    async sendCard(input) {
      return this.sendMessage({
        phoneNumber: input.phoneNumber,
        messageId: input.messageId,
        message: createRcsCardMessage(input),
      });
    },
    async sendReadReceipt(input) {
      return this.sendAgentEvent({
        phoneNumber: input.phoneNumber,
        ...(input.eventId ? { eventId: input.eventId } : {}),
        event: { eventType: "READ", messageId: input.messageId },
      });
    },
    async sendTyping(input) {
      return this.sendAgentEvent({
        phoneNumber: input.phoneNumber,
        ...(input.eventId ? { eventId: input.eventId } : {}),
        event: { eventType: "IS_TYPING" },
      });
    },
    async createFile(input) {
      return rcsRequest<RcsFileResource>({
        url: rcsUrl(messagingApiBaseUrl, "/v1/files"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: stripUndefined({
          fileUrl: input.fileUrl,
          thumbnailUrl: input.thumbnailUrl,
          agentId: options.agentId,
        }),
      });
    },
    async uploadFile(input) {
      const url = rcsUrl(messagingApiBaseUrl, "/upload/v1/files");
      url.searchParams.set("agentId", options.agentId);
      return rcsRequest<RcsFileResource>({
        url,
        method: "POST",
        options,
        fetch: fetchImpl,
        rawBody: input.body,
        contentType: input.contentType,
      });
    },
    async getCapabilities(input) {
      const url = rcsUrl(messagingApiBaseUrl, `/v1/phones/${rcsPhonePath(input.phoneNumber)}/capabilities`);
      url.searchParams.set("agentId", options.agentId);
      if (input.requestId) url.searchParams.set("requestId", input.requestId);
      return rcsRequest<RcsCapabilityResponse>({ url, method: "GET", options, fetch: fetchImpl });
    },
    async getAgent(agentName = options.agentName) {
      const name = requireAgentName(agentName);
      return rcsRequest<RcsAgentResource>({
        url: rcsUrl(managementApiBaseUrl, `/v1/${name}`),
        method: "GET",
        options,
        fetch: fetchImpl,
        scopes: [RCS_BUSINESS_COMMUNICATIONS_SCOPE],
      });
    },
    async getAgentLaunch(agentName = options.agentName) {
      const name = requireAgentName(agentName);
      return rcsRequest<RcsMessagingProviderResponse>({
        url: rcsUrl(managementApiBaseUrl, `/v1/${name}/launch`),
        method: "GET",
        options,
        fetch: fetchImpl,
        scopes: [RCS_BUSINESS_COMMUNICATIONS_SCOPE],
      });
    },
    async getAgentVerification(agentName = options.agentName) {
      const name = requireAgentName(agentName);
      return rcsRequest<RcsMessagingProviderResponse>({
        url: rcsUrl(managementApiBaseUrl, `/v1/${name}/verification`),
        method: "GET",
        options,
        fetch: fetchImpl,
        scopes: [RCS_BUSINESS_COMMUNICATIONS_SCOPE],
      });
    },
    async sendAgentEvent(input: RcsSendAgentEventInput) {
      const url = rcsUrl(messagingApiBaseUrl, `/v1/phones/${rcsPhonePath(input.phoneNumber)}/agentEvents`);
      url.searchParams.set("agentId", options.agentId);
      if (input.eventId) url.searchParams.set("eventId", input.eventId);
      return rcsRequest<RcsAgentEvent>({ url, method: "POST", options, fetch: fetchImpl, body: input.event });
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
