import {
  createSlackWebApiGeneratedClient,
  type SlackWebApiGeneratedOperationCaller,
} from "./web-api-client.generated.js";
import {
  SLACK_WEB_API_OPERATION_BY_ID,
  SLACK_WEB_API_OPERATION_BY_UID,
  type SlackWebApiOperationUid,
} from "./web-api-operations.generated.js";
import type {
  SlackAuthTestResponse,
  SlackCompleteUploadExternalResponse,
  SlackConversationsHistoryResponse,
  SlackConversationsRepliesResponse,
  SlackGetUploadUrlExternalResponse,
  SlackHttpMethod,
  SlackOperationRequestInput,
  SlackPostEphemeralResponse,
  SlackPostMessageResponse,
  SlackResource,
  SlackUpdateMessageResponse,
  SlackWorkplaceClient,
  SlackWorkplaceClientOptions,
} from "./contracts.js";
import {
  applyHistoryQuery,
  applyRepliesQuery,
  slackApiUrl,
  slackOperationUrl,
  slackPostEphemeralBody,
  slackPostMessageBody,
  slackRequest,
  slackUpdateMessageBody,
  slackUploadExternalFileBytes,
  stripUndefined,
} from "./request.js";

export function createSlackWorkplaceClient(options: SlackWorkplaceClientOptions): SlackWorkplaceClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://slack.com/api").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = SlackResource>(
    method: SlackHttpMethod,
    path: string,
    input: SlackOperationRequestInput = {},
  ) => slackRequest<T>({
    url: slackOperationUrl(apiBaseUrl, path, input.query),
    method,
    body: input.body,
    headers: input.headers,
    options,
    fetch: fetchImpl,
    signal: input.signal ?? options.signal,
  });
  const requestOperation = async (
    operationUidOrId: SlackWebApiOperationUid | string,
    input: SlackOperationRequestInput = {},
  ) => {
    const operation = SLACK_WEB_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? SLACK_WEB_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Slack Web API operation '${operationUidOrId}'.`);
    return request(operation.method, operation.path, input);
  };
  const webApi = createSlackWebApiGeneratedClient(requestOperation as SlackWebApiGeneratedOperationCaller);

  return {
    webApi,
    requestOperation: requestOperation as SlackWebApiGeneratedOperationCaller,
    async postMessage(input) {
      return slackRequest<SlackPostMessageResponse>({
        url: slackApiUrl(apiBaseUrl, "chat.postMessage"),
        method: "POST",
        body: slackPostMessageBody(input),
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async postEphemeralMessage(input) {
      return slackRequest<SlackPostEphemeralResponse>({
        url: slackApiUrl(apiBaseUrl, "chat.postEphemeral"),
        method: "POST",
        body: slackPostEphemeralBody(input),
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async postInternalAssistMessage(input) {
      return this.postEphemeralMessage(input);
    },
    async updateMessage(input) {
      return slackRequest<SlackUpdateMessageResponse>({
        url: slackApiUrl(apiBaseUrl, "chat.update"),
        method: "POST",
        body: slackUpdateMessageBody(input),
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async conversationsHistory(input) {
      const url = slackApiUrl(apiBaseUrl, "conversations.history");
      applyHistoryQuery(url, input);
      return slackRequest<SlackConversationsHistoryResponse>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async conversationsReplies(input) {
      const url = slackApiUrl(apiBaseUrl, "conversations.replies");
      applyRepliesQuery(url, input);
      return slackRequest<SlackConversationsRepliesResponse>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async getUploadUrlExternal(input) {
      return slackRequest<SlackGetUploadUrlExternalResponse>({
        url: slackApiUrl(apiBaseUrl, "files.getUploadURLExternal"),
        method: "POST",
        body: stripUndefined({
          filename: input.filename,
          length: input.length,
          alt_txt: input.altTxt,
          snippet_type: input.snippetType,
        }),
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async uploadExternalFileBytes(input) {
      return slackUploadExternalFileBytes({
        uploadUrl: input.uploadUrl,
        body: input.body,
        contentType: input.contentType,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async completeUploadExternal(input) {
      return slackRequest<SlackCompleteUploadExternalResponse>({
        url: slackApiUrl(apiBaseUrl, "files.completeUploadExternal"),
        method: "POST",
        body: stripUndefined({
          files: input.files,
          channel_id: input.channelId,
          initial_comment: input.initialComment,
          thread_ts: input.threadTs,
        }),
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async authTest(input = {}) {
      return slackRequest<SlackAuthTestResponse>({
        url: slackApiUrl(apiBaseUrl, "auth.test"),
        method: "POST",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
  };
}
