import { WebClient, type WebClientOptions } from "@slack/web-api";
import type {
  SlackApiResponse,
  SlackAuthTestResponse,
  SlackCompleteUploadExternalResponse,
  SlackConversationsRepliesInput,
  SlackConversationsRepliesResponse,
  SlackGetUploadUrlExternalInput,
  SlackGetUploadUrlExternalResponse,
  SlackPostEphemeralInput,
  SlackPostEphemeralResponse,
  SlackPostMessageInput,
  SlackPostMessageResponse,
  SlackUpdateMessageInput,
  SlackUpdateMessageResponse,
  SlackUploadExternalFileBytesInput,
  SlackUploadExternalFileInput,
  SlackWorkplaceClient,
  SlackWorkplaceClientOptions,
  SlackWorkplaceJsonObject,
} from "./contracts.js";

export function createSlackWorkplaceClient(options: SlackWorkplaceClientOptions): SlackWorkplaceClient {
  if (!options.client && !options.botToken) {
    throw new Error("Slack bot token is required to create a Slack Web API client.");
  }
  const webClient = options.client ?? createWebClient(options);
  const fetchImpl = options.fetch ?? fetch;

  return {
    webClient,
    async apiCall<T = SlackApiResponse>(method: string, callOptions: SlackWorkplaceJsonObject = {}) {
      return assertSlackOk(await webClient.apiCall(method, callOptions as never)) as T;
    },
    async postMessage(input) {
      return assertSlackOk(await webClient.chat.postMessage(slackPostMessageBody(input) as never)) as SlackPostMessageResponse;
    },
    async postEphemeralMessage(input) {
      return assertSlackOk(await webClient.chat.postEphemeral(slackPostEphemeralBody(input) as never)) as SlackPostEphemeralResponse;
    },
    async postInternalAssistMessage(input) {
      return this.postEphemeralMessage(input);
    },
    async updateMessage(input) {
      return assertSlackOk(await webClient.chat.update(slackUpdateMessageBody(input) as never)) as SlackUpdateMessageResponse;
    },
    async conversationsReplies(input) {
      return assertSlackOk(await webClient.conversations.replies(slackRepliesBody(input) as never)) as SlackConversationsRepliesResponse;
    },
    async getUploadUrlExternal(input) {
      const files = webClient.files as unknown as {
        getUploadURLExternal(input: SlackWorkplaceJsonObject): Promise<unknown>;
      };
      return assertSlackOk(await files.getUploadURLExternal(stripUndefined({
        filename: input.filename,
        length: input.length,
        alt_txt: input.altTxt,
        snippet_type: input.snippetType,
      }))) as SlackGetUploadUrlExternalResponse;
    },
    async uploadExternalFileBytes(input) {
      const response = await fetchImpl(input.uploadUrl, {
        method: "POST",
        headers: {
          ...(input.contentType ? { "content-type": input.contentType } : {}),
        },
        body: input.body,
        ...(input.signal ? { signal: input.signal } : {}),
      });
      if (!response.ok) {
        throw new Error(`Slack external file upload returned ${response.status}.`);
      }
      return response;
    },
    async uploadExternalFile(input) {
      const upload = await this.getUploadUrlExternal(input);
      if (!upload.upload_url || !upload.file_id) {
        throw new Error("Slack files.getUploadURLExternal did not return an upload URL and file ID.");
      }
      await this.uploadExternalFileBytes({
        uploadUrl: upload.upload_url,
        body: input.body,
        ...(input.contentType ? { contentType: input.contentType } : {}),
        ...(input.signal ? { signal: input.signal } : {}),
      });
      return this.completeUploadExternal({
        files: [{ id: upload.file_id, ...(input.title ? { title: input.title } : {}) }],
        ...(input.channelId ? { channelId: input.channelId } : {}),
        ...(input.initialComment ? { initialComment: input.initialComment } : {}),
        ...(input.threadTs ? { threadTs: input.threadTs } : {}),
        ...(input.signal ? { signal: input.signal } : {}),
      });
    },
    async completeUploadExternal(input) {
      const files = webClient.files as unknown as {
        completeUploadExternal(input: SlackWorkplaceJsonObject): Promise<unknown>;
      };
      return assertSlackOk(await files.completeUploadExternal(stripUndefined({
        files: input.files,
        channel_id: input.channelId,
        initial_comment: input.initialComment,
        thread_ts: input.threadTs,
      }))) as SlackCompleteUploadExternalResponse;
    },
    async authTest() {
      return assertSlackOk(await webClient.auth.test()) as SlackAuthTestResponse;
    },
  };
}

function createWebClient(options: SlackWorkplaceClientOptions) {
  const webClientOptions: WebClientOptions = {
    ...(options.webClientOptions ?? {}),
  };
  if (options.apiBaseUrl) {
    (webClientOptions as WebClientOptions & { slackApiUrl?: string }).slackApiUrl = options.apiBaseUrl.replace(/\/+$/, "/");
  }
  return new WebClient(options.botToken, webClientOptions);
}

function slackPostMessageBody(input: SlackPostMessageInput) {
  return stripUndefined({
    channel: input.channel,
    text: input.text,
    blocks: input.blocks,
    attachments: input.attachments,
    thread_ts: input.threadTs,
    mrkdwn: input.mrkdwn,
    unfurl_links: input.unfurlLinks,
    unfurl_media: input.unfurlMedia,
    reply_broadcast: input.replyBroadcast,
    metadata: input.metadata,
  });
}

function slackPostEphemeralBody(input: SlackPostEphemeralInput) {
  return stripUndefined({
    channel: input.channel,
    user: input.user,
    text: input.text,
    blocks: input.blocks,
    attachments: input.attachments,
    thread_ts: input.threadTs,
    mrkdwn: input.mrkdwn,
  });
}

function slackUpdateMessageBody(input: SlackUpdateMessageInput) {
  return stripUndefined({
    channel: input.channel,
    ts: input.ts,
    text: input.text,
    blocks: input.blocks,
    attachments: input.attachments,
    metadata: input.metadata,
  });
}

function slackRepliesBody(input: SlackConversationsRepliesInput) {
  return stripUndefined({
    channel: input.channel,
    ts: input.ts,
    cursor: input.cursor,
    inclusive: input.inclusive,
    latest: input.latest,
    limit: input.limit,
    oldest: input.oldest,
  });
}

function assertSlackOk(response: unknown) {
  const payload = response as Partial<SlackApiResponse>;
  if (payload.ok === false) {
    const detail = typeof payload.error === "string" ? payload.error : "Slack Web API request failed.";
    throw new Error(detail);
  }
  return response;
}

export function stripUndefined(input: SlackWorkplaceJsonObject) {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as SlackWorkplaceJsonObject;
}

export type {
  SlackConversationsRepliesInput,
  SlackGetUploadUrlExternalInput,
  SlackPostEphemeralInput,
  SlackPostMessageInput,
  SlackUpdateMessageInput,
  SlackUploadExternalFileBytesInput,
  SlackUploadExternalFileInput,
};
