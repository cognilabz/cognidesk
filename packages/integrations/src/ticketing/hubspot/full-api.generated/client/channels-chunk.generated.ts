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
export const HubSpotFullApiChannelsOperationKeys = [
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}",
  "conversations:custom-channels:2026-03:delete-/conversations/custom-channels/2026-03/{channelId}",
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}",
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}",
  "conversations:conversations:3:get-/conversations/v3/conversations/channels",
  "conversations:conversations:3:get-/conversations/v3/conversations/channels/{channelId}"
] as const;
export type HubSpotFullApiChannelsOperationKey = typeof HubSpotFullApiChannelsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiChannelsOperationPathParamMap {
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}": { "channelId": HubSpotFullApiPathParamValue };
  "conversations:custom-channels:2026-03:delete-/conversations/custom-channels/2026-03/{channelId}": { "channelId": HubSpotFullApiPathParamValue };
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}": { "channelId": HubSpotFullApiPathParamValue };
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}": { "channelId": HubSpotFullApiPathParamValue; "channelAccountId": HubSpotFullApiPathParamValue };
  "conversations:conversations:3:get-/conversations/v3/conversations/channels": {};
  "conversations:conversations:3:get-/conversations/v3/conversations/channels/{channelId}": { "channelId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiChannelsOperationRequestMap {
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}">;
  "conversations:custom-channels:2026-03:delete-/conversations/custom-channels/2026-03/{channelId}": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:delete-/conversations/custom-channels/2026-03/{channelId}">;
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}">;
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}">;
  "conversations:conversations:3:get-/conversations/v3/conversations/channels": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/channels">;
  "conversations:conversations:3:get-/conversations/v3/conversations/channels/{channelId}": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/channels/{channelId}">;
}

export interface HubSpotFullApiChannelsGeneratedClient {
  CustomChannelsGetConversationsCustomChannels202603ChannelId(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}"]>;
  CustomChannelsDeleteConversationsCustomChannels202603ChannelId(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:delete-/conversations/custom-channels/2026-03/{channelId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:delete-/conversations/custom-channels/2026-03/{channelId}"]>;
  CustomChannelsPatchConversationsCustomChannels202603ChannelId(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}"]>;
  CustomChannelsGetConversationsCustomChannels202603ChannelIdChannelAccountsChannelAccountId(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}"]>;
  ConversationsGetConversationsV3ConversationsChannels(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/channels">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/channels"]>;
  ConversationsGetConversationsV3ConversationsChannelsChannelId(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/channels/{channelId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/channels/{channelId}"]>;
}

export const HubSpotFullApiChannelsGeneratedFunctionNames = [
  "CustomChannelsGetConversationsCustomChannels202603ChannelId",
  "CustomChannelsDeleteConversationsCustomChannels202603ChannelId",
  "CustomChannelsPatchConversationsCustomChannels202603ChannelId",
  "CustomChannelsGetConversationsCustomChannels202603ChannelIdChannelAccountsChannelAccountId",
  "ConversationsGetConversationsV3ConversationsChannels",
  "ConversationsGetConversationsV3ConversationsChannelsChannelId"
] as const satisfies readonly (keyof HubSpotFullApiChannelsGeneratedClient)[];

export function createHubSpotFullApiChannelsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiChannelsGeneratedClient {
  return {
    CustomChannelsGetConversationsCustomChannels202603ChannelId: (...args) => callOperation("conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}">)),
    CustomChannelsDeleteConversationsCustomChannels202603ChannelId: (...args) => callOperation("conversations:custom-channels:2026-03:delete-/conversations/custom-channels/2026-03/{channelId}", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:delete-/conversations/custom-channels/2026-03/{channelId}">)),
    CustomChannelsPatchConversationsCustomChannels202603ChannelId: (...args) => callOperation("conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}">)),
    CustomChannelsGetConversationsCustomChannels202603ChannelIdChannelAccountsChannelAccountId: (...args) => callOperation("conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}">)),
    ConversationsGetConversationsV3ConversationsChannels: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/channels", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/channels">)),
    ConversationsGetConversationsV3ConversationsChannelsChannelId: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/channels/{channelId}", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/channels/{channelId}">)),
  };
}
