import {
  createGmailFullApiGeneratedClient,
  type GmailFullApiGeneratedClient,
  type GmailGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  GMAIL_FULL_API_OPERATION_BY_ID,
  type GmailFullApiOperationId,
} from "./full-api-operations.generated.js";
import type {
  GmailAttachmentResource,
  GmailClientRequestInput,
  GmailDraftResource,
  GmailEmailClient,
  GmailEmailClientOptions,
  GmailGetAttachmentInput,
  GmailGetMessageInput,
  GmailHttpMethod,
  GmailLabelResource,
  GmailListHistoryInput,
  GmailListHistoryResult,
  GmailListMessagesInput,
  GmailLiveCheckOptions,
  GmailMessageResource,
  GmailModifyMessageInput,
  GmailOperationRequestInput,
  GmailProfileResource,
  GmailProviderRequestOptions,
  GmailResource,
  GmailSendMessageInput,
  GmailWatchInput,
  GmailWatchResponse,
} from "./contracts.js";
import {
  gmailGenericUrl,
  gmailRequest,
  gmailUrl,
  stripUndefined,
} from "./request.js";

export function createGmailEmailClient(options: GmailEmailClientOptions): GmailEmailClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://gmail.googleapis.com").replace(/\/+$/, "");
  const userId = options.userId ?? "me";
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = GmailResource>(
    method: GmailHttpMethod,
    path: string,
    input: GmailClientRequestInput = {},
  ) => gmailRequest<T>({
    url: gmailGenericUrl(apiBaseUrl, path, input.pathParams, input.query),
    method,
    body: input.body,
    options,
    fetch: fetchImpl,
    signal: input.signal ?? options.signal,
  });
  const requestOperation = async (
    operationId: GmailFullApiOperationId | string,
    input: GmailOperationRequestInput = {},
  ) => {
    const operation = GMAIL_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) throw new Error(`Unknown Gmail Discovery operation '${operationId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi: GmailFullApiGeneratedClient = createGmailFullApiGeneratedClient(
    requestOperation as GmailGeneratedOperationCaller,
  );

  return {
    fullApi,
    requestOperation: requestOperation as GmailGeneratedOperationCaller,
    async listMessages(input = {}) {
      const url = gmailUrl(apiBaseUrl, userId, "/messages");
      if (input.query) url.searchParams.set("q", input.query);
      for (const labelId of input.labelIds ?? []) url.searchParams.append("labelIds", labelId);
      if (input.maxResults !== undefined) url.searchParams.set("maxResults", String(input.maxResults));
      if (input.pageToken) url.searchParams.set("pageToken", input.pageToken);
      if (input.includeSpamTrash !== undefined) {
        url.searchParams.set("includeSpamTrash", String(input.includeSpamTrash));
      }
      return gmailRequest<{ messages?: GmailMessageResource[]; nextPageToken?: string }>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async getMessage(input: GmailGetMessageInput) {
      const url = gmailUrl(apiBaseUrl, userId, `/messages/${encodeURIComponent(input.id)}`);
      if (input.format) url.searchParams.set("format", input.format);
      for (const header of input.metadataHeaders ?? []) url.searchParams.append("metadataHeaders", header);
      return gmailRequest<GmailMessageResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async listHistory(input: GmailListHistoryInput) {
      const url = gmailUrl(apiBaseUrl, userId, "/history");
      url.searchParams.set("startHistoryId", input.startHistoryId);
      for (const historyType of input.historyTypes ?? []) url.searchParams.append("historyTypes", historyType);
      if (input.labelId) url.searchParams.set("labelId", input.labelId);
      if (input.maxResults !== undefined) url.searchParams.set("maxResults", String(input.maxResults));
      if (input.pageToken) url.searchParams.set("pageToken", input.pageToken);
      return gmailRequest<GmailListHistoryResult>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async watchMailbox(input: GmailWatchInput) {
      return gmailRequest<GmailWatchResponse>({
        url: gmailUrl(apiBaseUrl, userId, "/watch"),
        method: "POST",
        body: stripUndefined({
          topicName: input.topicName,
          labelIds: input.labelIds,
          labelFilterBehavior: input.labelFilterBehavior,
        }),
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async getAttachment(input: GmailGetAttachmentInput) {
      return gmailRequest<GmailAttachmentResource>({
        url: gmailUrl(
          apiBaseUrl,
          userId,
          `/messages/${encodeURIComponent(input.messageId)}/attachments/${encodeURIComponent(input.attachmentId)}`,
        ),
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async listLabels(input: GmailProviderRequestOptions = {}) {
      return gmailRequest<{ labels?: GmailLabelResource[] }>({
        url: gmailUrl(apiBaseUrl, userId, "/labels"),
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async createDraft(input) {
      return gmailRequest<GmailDraftResource>({
        url: gmailUrl(apiBaseUrl, userId, "/drafts"),
        method: "POST",
        body: { message: { raw: input.raw, ...(input.threadId ? { threadId: input.threadId } : {}) } },
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async sendDraft(draftId, input = {}) {
      return gmailRequest<GmailMessageResource>({
        url: gmailUrl(apiBaseUrl, userId, "/drafts/send"),
        method: "POST",
        body: { id: draftId },
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async sendMessage(input: GmailSendMessageInput) {
      return gmailRequest<GmailMessageResource>({
        url: gmailUrl(apiBaseUrl, userId, "/messages/send"),
        method: "POST",
        body: { raw: input.raw, ...(input.threadId ? { threadId: input.threadId } : {}) },
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async modifyMessage(input: GmailModifyMessageInput) {
      return gmailRequest<GmailMessageResource>({
        url: gmailUrl(apiBaseUrl, userId, `/messages/${encodeURIComponent(input.id)}/modify`),
        method: "POST",
        body: {
          addLabelIds: input.addLabelIds ?? [],
          removeLabelIds: input.removeLabelIds ?? [],
        },
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async getProfile(input = {}) {
      return gmailRequest<GmailProfileResource>({
        url: gmailUrl(apiBaseUrl, userId, "/profile"),
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
  };
}

export function createGmailEmailLiveChecks(options: GmailLiveCheckOptions) {
  return [{
    id: "profile",
    description: "Gmail API profile endpoint is reachable with the configured OAuth token.",
    requiredCredentialIds: ["google-oauth-access-token"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createGmailEmailClient(options);
      const profile = await client.getProfile({ signal: context.signal });
      if (context.signal?.aborted) throw new Error("Gmail live profile check aborted.");
      return {
        details: {
          emailAddress: typeof profile.emailAddress === "string" ? profile.emailAddress : undefined,
          messagesTotal: typeof profile.messagesTotal === "number" ? profile.messagesTotal : undefined,
        },
      };
    },
  }];
}
