import type {
  GenesysEngageContactCenterClient,
  GenesysEngageContactCenterClientOptions,
  GenesysEngageRequestInput,
} from "./contracts.js";
import {
  chatV2FileForm,
  chatV2SessionForm,
  chatV2SessionPath,
  postChatV2Session,
} from "./chat-v2.js";
import {
  encodeCallbackPayload,
  encodeChatV2Payload,
  flattenUserData,
} from "./encoding.js";
import {
  basePath,
  genesysEngageRequest,
  type GenesysEngageRequestInternalInput,
} from "./request.js";

export function createGenesysEngageContactCenterClient(
  options: GenesysEngageContactCenterClientOptions,
): GenesysEngageContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  const request = ((input: GenesysEngageRequestInput) => {
    const requestInput: GenesysEngageRequestInternalInput = {
      options,
      fetch: fetchImpl,
      method: input.method,
      path: input.path,
      ...(input.body !== undefined ? { body: input.body } : {}),
      ...(input.contentType !== undefined ? { contentType: input.contentType } : {}),
      ...(input.idempotencyKey !== undefined ? { idempotencyKey: input.idempotencyKey } : {}),
      ...(input.headers !== undefined ? { headers: input.headers } : {}),
    };
    return input.returnResponse
      ? genesysEngageRequest({ ...requestInput, returnResponse: true })
      : genesysEngageRequest({ ...requestInput, returnResponse: false });
  }) as GenesysEngageContactCenterClient["request"];
  return {
    request,
    async createHandoff(input) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) {
        throw new Error("Genesys Engage handoff path must be provided by SDK configuration.");
      }
      return genesysEngageRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path,
        body: JSON.stringify(input.payload),
        contentType: "application/json",
        idempotencyKey: input.idempotencyKey,
      });
    },
    async createCallback(input) {
      if (!input.serviceName) {
        throw new Error("Genesys Engage callback serviceName is required.");
      }
      const contentType = input.contentType ?? "application/x-www-form-urlencoded";
      const query = new URLSearchParams();
      for (const [key, value] of Object.entries(input.query ?? {})) {
        if (value !== undefined) query.set(key, String(value));
      }
      const path = `${basePath(options)}/service/callback/${encodeURIComponent(input.serviceName)}${
        query.size > 0 ? `?${query.toString()}` : ""
      }`;
      return genesysEngageRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path,
        body: encodeCallbackPayload(input.payload, contentType),
        contentType,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async requestChatV2(input) {
      return genesysEngageRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: `/genesys/2/chat/${encodeURIComponent(input.serviceName)}`,
        body: encodeChatV2Payload(input.payload, input.contentType ?? "application/x-www-form-urlencoded"),
        contentType: input.contentType ?? "application/x-www-form-urlencoded",
      });
    },
    async sendChatV2Message(input) {
      return postChatV2Session(options, fetchImpl, input, "send", {
        message: input.message,
        messageType: input.messageType,
        transcriptPosition: input.transcriptPosition,
      });
    },
    async startChatV2Typing(input) {
      return postChatV2Session(options, fetchImpl, input, "startTyping", input.payload);
    },
    async stopChatV2Typing(input) {
      return postChatV2Session(options, fetchImpl, input, "stopTyping", input.payload);
    },
    async refreshChatV2(input) {
      return postChatV2Session(options, fetchImpl, input, "refresh", input.payload);
    },
    async disconnectChatV2(input) {
      return postChatV2Session(options, fetchImpl, input, "disconnect");
    },
    async pushChatV2Url(input) {
      return postChatV2Session(options, fetchImpl, input, "pushUrl", { pushUrl: input.pushUrl });
    },
    async updateChatV2Nickname(input) {
      return postChatV2Session(options, fetchImpl, input, "updateNickname", { nickname: input.nickname });
    },
    async sendChatV2CustomNotice(input) {
      return postChatV2Session(options, fetchImpl, input, "customNotice", input.payload);
    },
    async updateChatV2Data(input) {
      return postChatV2Session(options, fetchImpl, input, "updateData", flattenUserData(input.userData));
    },
    async sendChatV2ReadReceipt(input) {
      return postChatV2Session(options, fetchImpl, input, "readReceipt", {
        transcriptPosition: input.transcriptPosition,
      });
    },
    async getChatV2FileLimits(input) {
      return postChatV2Session(options, fetchImpl, input, "file/limits");
    },
    async uploadChatV2File(input) {
      const body = chatV2FileForm(input);
      return genesysEngageRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: chatV2SessionPath(input, "file"),
        body,
      });
    },
    async downloadChatV2File(input) {
      if (!input.fileId) throw new Error("Genesys Engage Chat API v2 fileId is required.");
      return genesysEngageRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: chatV2SessionPath(input, `file/${encodeURIComponent(input.fileId)}/download`),
        body: chatV2SessionForm(input),
        returnResponse: true,
      });
    },
    async deleteChatV2File(input) {
      if (!input.fileId) throw new Error("Genesys Engage Chat API v2 fileId is required.");
      return genesysEngageRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: chatV2SessionPath(input, `file/${encodeURIComponent(input.fileId)}/delete`),
        body: chatV2SessionForm(input),
      });
    },
    async readiness() {
      return genesysEngageRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: options.readinessPath ?? basePath(options),
      });
    },
  };
}
