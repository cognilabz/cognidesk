import {
  auth as officialGmailAuth,
  gmail as createOfficialGmailClient,
  type MethodOptions,
} from "@googleapis/gmail";
import {
  defineIntegration,
  type IntegrationOperationHandlers,
} from "@cognidesk/integration-kit";
import type {
  GmailArchiveThreadInput,
  GmailAttachmentBody,
  GmailCreateDraftInput,
  GmailEmailClient,
  GmailEmailClientOptions,
  GmailEmailDraft,
  GmailEmailMessage,
  GmailEmailOperationHandlers,
  GmailEmailOperationInputMap,
  GmailEmailOperationOutputMap,
  GmailEmailThread,
  GmailGetAttachmentInput,
  GmailHistoryListResponse,
  GmailLabelListResponse,
  GmailListHistoryInput,
  GmailLiveCheckOptions,
  GmailOfficialClient,
  GmailProfileResource,
  GmailProviderRequestOptions,
  GmailReadThreadInput,
  GmailReplySendInput,
  GmailSendDraftInput,
  GmailSendEmailInput,
  GmailWatchInput,
  GmailWatchResponse,
} from "./contracts.js";
import { normalizeGmailProviderError } from "./errors.js";
import {
  normalizeGmailDraft,
  normalizeGmailMessage,
  normalizeGmailThread,
  resolveGmailRawMessage,
} from "./mappers.js";
import { gmailEmailProviderManifest } from "./manifest.js";
import { parseGmailPubSubNotification } from "./webhooks.js";

export { officialGmailAuth as gmailAuth };

export function createGmailEmailClient(options: GmailEmailClientOptions): GmailEmailClient {
  const rawClient = options.rawClient ?? createRawClient(options);
  const userId = options.userId ?? "me";
  const methodOptions = (signal?: AbortSignal): MethodOptions | undefined => {
    const resolvedSignal = signal ?? options.signal;
    return resolvedSignal ? { signal: resolvedSignal } : undefined;
  };

  const handlers: GmailEmailOperationHandlers = {
    async "email.receive"(input) {
      return parseGmailPubSubNotification(input);
    },
    async "email.thread.read"(input) {
      return withGmailError("email.thread.read", async () => {
        const response = await rawClient.users.threads.get({
          userId,
          id: input.threadId,
          ...(input.format ? { format: input.format } : {}),
          ...(input.metadataHeaders ? { metadataHeaders: input.metadataHeaders } : {}),
        }, methodOptions(input.signal));
        return normalizeGmailThread(response.data);
      });
    },
    async "email.reply.send"(input) {
      return withGmailError("email.reply.send", async () => {
        const response = await rawClient.users.messages.send({
          userId,
          requestBody: {
            raw: resolveGmailRawMessage(input),
            threadId: input.threadId,
          },
        }, methodOptions(input.signal));
        return normalizeGmailMessage(response.data);
      });
    },
    async "email.send"(input) {
      return withGmailError("email.send", async () => {
        const response = await rawClient.users.messages.send({
          userId,
          requestBody: {
            raw: resolveGmailRawMessage(input),
            ...(input.threadId ? { threadId: input.threadId } : {}),
          },
        }, methodOptions(input.signal));
        return normalizeGmailMessage(response.data);
      });
    },
    async "email.draft.create"(input) {
      return withGmailError("email.draft.create", async () => {
        const response = await rawClient.users.drafts.create({
          userId,
          requestBody: {
            message: {
              raw: resolveGmailRawMessage(input),
              ...(input.threadId ? { threadId: input.threadId } : {}),
            },
          },
        }, methodOptions(input.signal));
        return normalizeGmailDraft(response.data);
      });
    },
    async "email.draft.send"(input) {
      return withGmailError("email.draft.send", async () => {
        const response = await rawClient.users.drafts.send({
          userId,
          requestBody: { id: input.draftId },
        }, methodOptions(input.signal));
        return normalizeGmailMessage(response.data);
      });
    },
    async "email.archive"(input) {
      return withGmailError("email.archive", async () => {
        const response = await rawClient.users.threads.modify({
          userId,
          id: input.threadId,
          requestBody: {
            removeLabelIds: input.removeLabelIds ?? ["INBOX"],
          },
        }, methodOptions(input.signal));
        return normalizeGmailThread(response.data);
      });
    },
    async "mailbox.watch"(input) {
      return withGmailError("mailbox.watch", async () => {
        const response = await rawClient.users.watch({
          userId,
          requestBody: {
            topicName: input.topicName,
            ...(input.labelIds ? { labelIds: input.labelIds } : {}),
            ...(input.labelFilterBehavior ? { labelFilterBehavior: input.labelFilterBehavior } : {}),
          },
        }, methodOptions(input.signal));
        return response.data;
      });
    },
    async "gmail.history.list"(input) {
      return withGmailError("gmail.history.list", async () => {
        const response = await rawClient.users.history.list({
          userId,
          startHistoryId: input.startHistoryId,
          ...(input.historyTypes ? { historyTypes: input.historyTypes } : {}),
          ...(input.labelId ? { labelId: input.labelId } : {}),
          ...(input.maxResults !== undefined ? { maxResults: input.maxResults } : {}),
          ...(input.pageToken ? { pageToken: input.pageToken } : {}),
        }, methodOptions(input.signal));
        return response.data;
      });
    },
    async "gmail.attachment.get"(input) {
      return withGmailError("gmail.attachment.get", async () => {
        const response = await rawClient.users.messages.attachments.get({
          userId,
          messageId: input.messageId,
          id: input.attachmentId,
        }, methodOptions(input.signal));
        return response.data;
      });
    },
    async "gmail.labels.list"(input) {
      return withGmailError("gmail.labels.list", async () => {
        const response = await rawClient.users.labels.list({ userId }, methodOptions(input?.signal));
        return response.data;
      });
    },
  };

  const execute = (<K extends keyof GmailEmailOperationInputMap>(
    alias: K,
    input: GmailEmailOperationInputMap[K],
  ) => handlers[alias](input as never)) as GmailEmailClient["execute"];

  return {
    rawClient,
    userId,
    handlers,
    execute,
    readThread(input: GmailReadThreadInput): Promise<GmailEmailThread> {
      return handlers["email.thread.read"](input);
    },
    sendReply(input: GmailReplySendInput): Promise<GmailEmailMessage> {
      return handlers["email.reply.send"](input);
    },
    sendEmail(input: GmailSendEmailInput): Promise<GmailEmailMessage> {
      return handlers["email.send"](input);
    },
    createDraft(input: GmailCreateDraftInput): Promise<GmailEmailDraft> {
      return handlers["email.draft.create"](input);
    },
    sendDraft(input: GmailSendDraftInput): Promise<GmailEmailMessage> {
      return handlers["email.draft.send"](input);
    },
    archiveThread(input: GmailArchiveThreadInput): Promise<GmailEmailThread> {
      return handlers["email.archive"](input);
    },
    watchMailbox(input: GmailWatchInput): Promise<GmailWatchResponse> {
      return handlers["mailbox.watch"](input);
    },
    listHistory(input: GmailListHistoryInput): Promise<GmailHistoryListResponse> {
      return handlers["gmail.history.list"](input);
    },
    getAttachment(input: GmailGetAttachmentInput): Promise<GmailAttachmentBody> {
      return handlers["gmail.attachment.get"](input);
    },
    listLabels(input?: GmailProviderRequestOptions): Promise<GmailLabelListResponse> {
      return handlers["gmail.labels.list"](input);
    },
    async getProfile(input: GmailProviderRequestOptions = {}): Promise<GmailProfileResource> {
      return withGmailError("users.getProfile", async () => {
        const response = await rawClient.users.getProfile({ userId }, methodOptions(input.signal));
        return response.data;
      });
    },
  };
}

export function createGmailEmailIntegration(options: GmailEmailClientOptions) {
  const client = createGmailEmailClient(options);
  return defineIntegration({
    manifest: gmailEmailProviderManifest,
    operations: client.handlers as unknown as IntegrationOperationHandlers,
    metadata: {
      rawClient: client.rawClient,
      userId: client.userId,
    },
  });
}

export function createGmailEmailLiveChecks(options: GmailLiveCheckOptions) {
  return [{
    id: "profile",
    description: "Gmail API profile endpoint is reachable with the configured OAuth token or injected official SDK client.",
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

function createRawClient(options: GmailEmailClientOptions): GmailOfficialClient {
  const clientOptions: Parameters<typeof createOfficialGmailClient>[0] = { version: "v1" };
  if (options.rootUrl) clientOptions.rootUrl = options.rootUrl;
  if (options.auth) {
    clientOptions.auth = options.auth;
  } else if (options.accessToken) {
    const oauthClient = new officialGmailAuth.OAuth2();
    oauthClient.setCredentials({ access_token: options.accessToken });
    clientOptions.auth = oauthClient;
  }
  return createOfficialGmailClient(clientOptions);
}

async function withGmailError<T>(operationAlias: string, call: () => Promise<T>): Promise<T> {
  try {
    return await call();
  } catch (error) {
    normalizeGmailProviderError(error, operationAlias);
  }
}
