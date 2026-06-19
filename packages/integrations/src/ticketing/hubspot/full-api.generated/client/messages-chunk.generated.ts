// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiMessagesOperationKeys = [
  "conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/messages",
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}",
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}",
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}",
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content"
] as const;
export type HubSpotFullApiMessagesOperationKey = typeof HubSpotFullApiMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiMessagesOperationPathParamMap {
  "conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/messages": { "channelId": HubSpotFullApiPathParamValue };
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}": { "channelId": HubSpotFullApiPathParamValue; "messageId": HubSpotFullApiPathParamValue };
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}": { "channelId": HubSpotFullApiPathParamValue; "messageId": HubSpotFullApiPathParamValue };
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}": { "threadId": HubSpotFullApiPathParamValue; "messageId": HubSpotFullApiPathParamValue };
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content": { "threadId": HubSpotFullApiPathParamValue; "messageId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiMessagesOperationRequestMap {
  "conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/messages": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/messages">;
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}">;
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}">;
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}">;
  "conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content">;
}

export interface HubSpotFullApiMessagesGeneratedClient {
  CustomChannelsPostConversationsCustomChannels202603ChannelIdMessages(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/messages">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/messages"]>;
  CustomChannelsGetConversationsCustomChannels202603ChannelIdMessagesMessageId(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}"]>;
  CustomChannelsPatchConversationsCustomChannels202603ChannelIdMessagesMessageId(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}"]>;
  ConversationsGetConversationsV3ConversationsThreadsThreadIdMessagesMessageId(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}"]>;
  ConversationsGetConversationsV3ConversationsThreadsThreadIdMessagesMessageIdOriginalContent(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content"]>;
}

export const HubSpotFullApiMessagesGeneratedFunctionNames = [
  "CustomChannelsPostConversationsCustomChannels202603ChannelIdMessages",
  "CustomChannelsGetConversationsCustomChannels202603ChannelIdMessagesMessageId",
  "CustomChannelsPatchConversationsCustomChannels202603ChannelIdMessagesMessageId",
  "ConversationsGetConversationsV3ConversationsThreadsThreadIdMessagesMessageId",
  "ConversationsGetConversationsV3ConversationsThreadsThreadIdMessagesMessageIdOriginalContent"
] as const satisfies readonly (keyof HubSpotFullApiMessagesGeneratedClient)[];

export function createHubSpotFullApiMessagesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiMessagesGeneratedClient {
  return {
    CustomChannelsPostConversationsCustomChannels202603ChannelIdMessages: (...args) => callOperation("conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/messages", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/messages">)),
    CustomChannelsGetConversationsCustomChannels202603ChannelIdMessagesMessageId: (...args) => callOperation("conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}">)),
    CustomChannelsPatchConversationsCustomChannels202603ChannelIdMessagesMessageId: (...args) => callOperation("conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/messages/{messageId}">)),
    ConversationsGetConversationsV3ConversationsThreadsThreadIdMessagesMessageId: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}">)),
    ConversationsGetConversationsV3ConversationsThreadsThreadIdMessagesMessageIdOriginalContent: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/threads/{threadId}/messages/{messageId}/original-content">)),
  };
}
