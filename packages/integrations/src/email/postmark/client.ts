import {
  createPostmarkFullApiGeneratedClient,
  type PostmarkGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  POSTMARK_FULL_API_OPERATION_BY_ID,
  POSTMARK_FULL_API_OPERATION_BY_UID,
  type PostmarkFullApiOperation,
  type PostmarkFullApiOperationUid,
} from "./full-api-operations.generated.js";
import type {
  PostmarkEmailClient,
  PostmarkEmailClientOptions,
  PostmarkMessageDetails,
  PostmarkMessageSearchResponse,
  PostmarkMessageStreamsResponse,
  PostmarkOperationRequestInput,
  PostmarkSendEmailResponse,
  PostmarkSuppressionChangeResponse,
  PostmarkSuppressionDumpResponse,
  PostmarkWebhookResource,
} from "./contracts.js";
import {
  applyMessageSearchQuery,
  postmarkOperationUrl,
  postmarkRequest,
  resolvePostmarkApiBaseUrl,
} from "./request.js";

export function createPostmarkEmailClient(options: PostmarkEmailClientOptions): PostmarkEmailClient {
  const apiBaseUrl = resolvePostmarkApiBaseUrl(options);
  const fetchImpl = options.fetch ?? fetch;
  const requestOperation = async (
    operationUidOrId: PostmarkFullApiOperationUid | string,
    input: PostmarkOperationRequestInput = {},
  ) => {
    const operation: PostmarkFullApiOperation | undefined = POSTMARK_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? POSTMARK_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Postmark Swagger operation '${operationUidOrId}'.`);
    const tokenHeader = operation.surface === "account" ? "x-postmark-account-token" : "x-postmark-server-token";
    if (operation.surface === "account" && !options.accountToken) {
      throw new Error("Postmark account token is required for account-level generated operations.");
    }
    return postmarkRequest({
      url: postmarkOperationUrl(apiBaseUrl, operation.path, input.pathParams, input.query),
      method: operation.method,
      options,
      fetch: fetchImpl,
      body: input.body,
      tokenHeader,
      ...(input.headers ? { headers: input.headers } : {}),
    });
  };
  const fullApi = createPostmarkFullApiGeneratedClient(requestOperation as PostmarkGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as PostmarkGeneratedOperationCaller,
    async sendEmail(input) {
      return postmarkRequest<PostmarkSendEmailResponse>({
        url: `${apiBaseUrl}/email`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body: input,
        tokenHeader: "x-postmark-server-token",
      });
    },
    async sendEmailWithTemplate(input) {
      return postmarkRequest<PostmarkSendEmailResponse>({
        url: `${apiBaseUrl}/email/withTemplate`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body: input,
        tokenHeader: "x-postmark-server-token",
      });
    },
    async getOutboundMessageDetails(messageId) {
      return postmarkRequest<PostmarkMessageDetails>({
        url: `${apiBaseUrl}/messages/outbound/${encodeURIComponent(messageId)}/details`,
        method: "GET",
        options,
        fetch: fetchImpl,
        tokenHeader: "x-postmark-server-token",
      });
    },
    async getInboundMessageDetails(messageId) {
      return postmarkRequest<PostmarkMessageDetails>({
        url: `${apiBaseUrl}/messages/inbound/${encodeURIComponent(messageId)}/details`,
        method: "GET",
        options,
        fetch: fetchImpl,
        tokenHeader: "x-postmark-server-token",
      });
    },
    async searchOutboundMessages(input = {}) {
      const url = new URL(`${apiBaseUrl}/messages/outbound`);
      applyMessageSearchQuery(url, input);
      return postmarkRequest<PostmarkMessageSearchResponse>({
        url: url.toString(),
        method: "GET",
        options,
        fetch: fetchImpl,
        tokenHeader: "x-postmark-server-token",
      });
    },
    async searchInboundMessages(input = {}) {
      const url = new URL(`${apiBaseUrl}/messages/inbound`);
      applyMessageSearchQuery(url, input);
      return postmarkRequest<PostmarkMessageSearchResponse>({
        url: url.toString(),
        method: "GET",
        options,
        fetch: fetchImpl,
        tokenHeader: "x-postmark-server-token",
      });
    },
    async listWebhooks() {
      const response = await postmarkRequest<{ Webhooks?: PostmarkWebhookResource[] }>({
        url: `${apiBaseUrl}/webhooks`,
        method: "GET",
        options,
        fetch: fetchImpl,
        tokenHeader: "x-postmark-server-token",
      });
      return response.Webhooks ?? [];
    },
    async listMessageStreams(input = {}) {
      const url = new URL(`${apiBaseUrl}/message-streams`);
      if (input.MessageStreamType) url.searchParams.set("MessageStreamType", input.MessageStreamType);
      if (input.IncludeArchivedStreams !== undefined) {
        url.searchParams.set("IncludeArchivedStreams", String(input.IncludeArchivedStreams));
      }
      return postmarkRequest<PostmarkMessageStreamsResponse>({
        url: url.toString(),
        method: "GET",
        options,
        fetch: fetchImpl,
        tokenHeader: "x-postmark-server-token",
      });
    },
    async dumpSuppressions(input) {
      const url = new URL(`${apiBaseUrl}/message-streams/${encodeURIComponent(input.streamId)}/suppressions/dump`);
      if (input.fromDate) url.searchParams.set("fromdate", input.fromDate);
      if (input.toDate) url.searchParams.set("todate", input.toDate);
      return postmarkRequest<PostmarkSuppressionDumpResponse>({
        url: url.toString(),
        method: "GET",
        options,
        fetch: fetchImpl,
        tokenHeader: "x-postmark-server-token",
      });
    },
    async createSuppressions(input) {
      return postmarkRequest<PostmarkSuppressionChangeResponse>({
        url: `${apiBaseUrl}/message-streams/${encodeURIComponent(input.streamId)}/suppressions`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body: { Suppressions: input.suppressions },
        tokenHeader: "x-postmark-server-token",
      });
    },
    async deleteSuppressions(input) {
      return postmarkRequest<PostmarkSuppressionChangeResponse>({
        url: `${apiBaseUrl}/message-streams/${encodeURIComponent(input.streamId)}/suppressions/delete`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body: { Suppressions: input.suppressions },
        tokenHeader: "x-postmark-server-token",
      });
    },
  };
}
