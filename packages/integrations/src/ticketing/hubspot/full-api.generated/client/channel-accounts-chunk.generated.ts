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
export const HubSpotFullApiChannelAccountsOperationKeys = [
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-account-staging-tokens/{accountToken}",
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts",
  "conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/channel-accounts",
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}",
  "conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts",
  "conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts/{channelAccountId}"
] as const;
export type HubSpotFullApiChannelAccountsOperationKey = typeof HubSpotFullApiChannelAccountsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiChannelAccountsOperationPathParamMap {
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-account-staging-tokens/{accountToken}": { "channelId": HubSpotFullApiPathParamValue; "accountToken": HubSpotFullApiPathParamValue };
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts": { "channelId": HubSpotFullApiPathParamValue };
  "conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/channel-accounts": { "channelId": HubSpotFullApiPathParamValue };
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}": { "channelId": HubSpotFullApiPathParamValue; "channelAccountId": HubSpotFullApiPathParamValue };
  "conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts": {};
  "conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts/{channelAccountId}": { "channelAccountId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiChannelAccountsOperationRequestMap {
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-account-staging-tokens/{accountToken}": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-account-staging-tokens/{accountToken}">;
  "conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts">;
  "conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/channel-accounts": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/channel-accounts">;
  "conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}": HubSpotFullApiOperationInput<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}">;
  "conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts">;
  "conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts/{channelAccountId}": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts/{channelAccountId}">;
}

export interface HubSpotFullApiChannelAccountsGeneratedClient {
  CustomChannelsPatchConversationsCustomChannels202603ChannelIdChannelAccountStagingTokensAccountToken(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-account-staging-tokens/{accountToken}">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-account-staging-tokens/{accountToken}"]>;
  CustomChannelsGetConversationsCustomChannels202603ChannelIdChannelAccounts(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts"]>;
  CustomChannelsPostConversationsCustomChannels202603ChannelIdChannelAccounts(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/channel-accounts">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/channel-accounts"]>;
  CustomChannelsPatchConversationsCustomChannels202603ChannelIdChannelAccountsChannelAccountId(...args: HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}"]>;
  ConversationsGetConversationsV3ConversationsChannelAccounts(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts"]>;
  ConversationsGetConversationsV3ConversationsChannelAccountsChannelAccountId(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts/{channelAccountId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts/{channelAccountId}"]>;
}

export const HubSpotFullApiChannelAccountsGeneratedFunctionNames = [
  "CustomChannelsPatchConversationsCustomChannels202603ChannelIdChannelAccountStagingTokensAccountToken",
  "CustomChannelsGetConversationsCustomChannels202603ChannelIdChannelAccounts",
  "CustomChannelsPostConversationsCustomChannels202603ChannelIdChannelAccounts",
  "CustomChannelsPatchConversationsCustomChannels202603ChannelIdChannelAccountsChannelAccountId",
  "ConversationsGetConversationsV3ConversationsChannelAccounts",
  "ConversationsGetConversationsV3ConversationsChannelAccountsChannelAccountId"
] as const satisfies readonly (keyof HubSpotFullApiChannelAccountsGeneratedClient)[];

export function createHubSpotFullApiChannelAccountsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiChannelAccountsGeneratedClient {
  return {
    CustomChannelsPatchConversationsCustomChannels202603ChannelIdChannelAccountStagingTokensAccountToken: (...args) => callOperation("conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-account-staging-tokens/{accountToken}", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-account-staging-tokens/{accountToken}">)),
    CustomChannelsGetConversationsCustomChannels202603ChannelIdChannelAccounts: (...args) => callOperation("conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:get-/conversations/custom-channels/2026-03/{channelId}/channel-accounts">)),
    CustomChannelsPostConversationsCustomChannels202603ChannelIdChannelAccounts: (...args) => callOperation("conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/channel-accounts", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:post-/conversations/custom-channels/2026-03/{channelId}/channel-accounts">)),
    CustomChannelsPatchConversationsCustomChannels202603ChannelIdChannelAccountsChannelAccountId: (...args) => callOperation("conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}", ...(args as HubSpotFullApiOperationArgs<"conversations:custom-channels:2026-03:patch-/conversations/custom-channels/2026-03/{channelId}/channel-accounts/{channelAccountId}">)),
    ConversationsGetConversationsV3ConversationsChannelAccounts: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts">)),
    ConversationsGetConversationsV3ConversationsChannelAccountsChannelAccountId: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts/{channelAccountId}", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/channel-accounts/{channelAccountId}">)),
  };
}
