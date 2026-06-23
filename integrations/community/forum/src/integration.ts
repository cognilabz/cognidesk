import { defineIntegration } from "@cognidesk/integration-kit";
import {
  createForumCommunityClient,
  parseForumWebhook,
  type ForumCommunityClient,
  type ForumCommunityClientOptions,
  type ForumCreateReplyInput,
  type ForumCreateTopicInput,
  type ForumSearchInput,
  type ParseForumWebhookOptions,
} from "./index.js";
import { forumCommunityProviderManifest } from "./manifest.js";

export interface ForumCommunityIntegrationOptions {
  client?: ForumCommunityClient;
  clientOptions?: ForumCommunityClientOptions;
}

export interface ParseForumWebhookOperationInput {
  request: Request;
  options?: ParseForumWebhookOptions;
}

export function createForumCommunityIntegration(options: ForumCommunityIntegrationOptions) {
  const client = options.client ?? (options.clientOptions ? createForumCommunityClient(options.clientOptions) : undefined);
  if (!client) throw new Error("Forum integration requires a client or clientOptions.");

  return defineIntegration({
    manifest: forumCommunityProviderManifest as never,
    operations: {
      "forum.topic.create": (input: ForumCreateTopicInput) => client.createTopic(input),
      "forum.reply.create": (input: ForumCreateReplyInput) => client.createReply(input),
      "forum.topic.read": (input: { topicId: number }) => client.getTopic(input.topicId),
      "forum.post.read": (input: { postId: number }) => client.getPost(input.postId),
      "forum.search": (input: ForumSearchInput) => client.search(input),
      "forum.webhook.parse": (input: ParseForumWebhookOperationInput) =>
        parseForumWebhook(input.request, input.options),
    } as never,
  });
}
