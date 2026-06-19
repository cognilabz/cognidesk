// Generated endpoint chunk for DiscordHttpApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DiscordHttpApiGeneratedOperationCaller,
  DiscordHttpApiOperationArgs,
  DiscordHttpApiOperationInput,
  DiscordHttpApiPathParamValue,
} from "../../http-api-client.generated.js";
import type { DiscordHttpApiOperationResponseMap } from "../../http-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DiscordHttpApiPartnerSdkOperationKeys = [
  "PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata",
  "POST /partner-sdk/provisional-accounts/unmerge",
  "POST /partner-sdk/provisional-accounts/unmerge/bot",
  "POST /partner-sdk/token",
  "POST /partner-sdk/token/bot"
] as const;
export type DiscordHttpApiPartnerSdkOperationKey = typeof DiscordHttpApiPartnerSdkOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiPartnerSdkOperationPathParamMap {
  "PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata": { "user_id_1": DiscordHttpApiPathParamValue; "user_id_2": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "POST /partner-sdk/provisional-accounts/unmerge": {};
  "POST /partner-sdk/provisional-accounts/unmerge/bot": {};
  "POST /partner-sdk/token": {};
  "POST /partner-sdk/token/bot": {};
}

export interface DiscordHttpApiPartnerSdkOperationRequestMap {
  "PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata": DiscordHttpApiOperationInput<"PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata">;
  "POST /partner-sdk/provisional-accounts/unmerge": DiscordHttpApiOperationInput<"POST /partner-sdk/provisional-accounts/unmerge">;
  "POST /partner-sdk/provisional-accounts/unmerge/bot": DiscordHttpApiOperationInput<"POST /partner-sdk/provisional-accounts/unmerge/bot">;
  "POST /partner-sdk/token": DiscordHttpApiOperationInput<"POST /partner-sdk/token">;
  "POST /partner-sdk/token/bot": DiscordHttpApiOperationInput<"POST /partner-sdk/token/bot">;
}

export interface DiscordHttpApiPartnerSdkGeneratedClient {
  UpdateUserMessageExternalModerationMetadata(...args: DiscordHttpApiOperationArgs<"PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata">): Promise<DiscordHttpApiOperationResponseMap["PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata"]>;
  PartnerSdkUnmergeProvisionalAccount(...args: DiscordHttpApiOperationArgs<"POST /partner-sdk/provisional-accounts/unmerge">): Promise<DiscordHttpApiOperationResponseMap["POST /partner-sdk/provisional-accounts/unmerge"]>;
  BotPartnerSdkUnmergeProvisionalAccount(...args: DiscordHttpApiOperationArgs<"POST /partner-sdk/provisional-accounts/unmerge/bot">): Promise<DiscordHttpApiOperationResponseMap["POST /partner-sdk/provisional-accounts/unmerge/bot"]>;
  PartnerSdkToken(...args: DiscordHttpApiOperationArgs<"POST /partner-sdk/token">): Promise<DiscordHttpApiOperationResponseMap["POST /partner-sdk/token"]>;
  BotPartnerSdkToken(...args: DiscordHttpApiOperationArgs<"POST /partner-sdk/token/bot">): Promise<DiscordHttpApiOperationResponseMap["POST /partner-sdk/token/bot"]>;
}

export const DiscordHttpApiPartnerSdkGeneratedFunctionNames = [
  "UpdateUserMessageExternalModerationMetadata",
  "PartnerSdkUnmergeProvisionalAccount",
  "BotPartnerSdkUnmergeProvisionalAccount",
  "PartnerSdkToken",
  "BotPartnerSdkToken"
] as const satisfies readonly (keyof DiscordHttpApiPartnerSdkGeneratedClient)[];

export function createDiscordHttpApiPartnerSdkGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiPartnerSdkGeneratedClient {
  return {
    UpdateUserMessageExternalModerationMetadata: (...args) => callOperation("PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata", ...(args as DiscordHttpApiOperationArgs<"PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata">)),
    PartnerSdkUnmergeProvisionalAccount: (...args) => callOperation("POST /partner-sdk/provisional-accounts/unmerge", ...(args as DiscordHttpApiOperationArgs<"POST /partner-sdk/provisional-accounts/unmerge">)),
    BotPartnerSdkUnmergeProvisionalAccount: (...args) => callOperation("POST /partner-sdk/provisional-accounts/unmerge/bot", ...(args as DiscordHttpApiOperationArgs<"POST /partner-sdk/provisional-accounts/unmerge/bot">)),
    PartnerSdkToken: (...args) => callOperation("POST /partner-sdk/token", ...(args as DiscordHttpApiOperationArgs<"POST /partner-sdk/token">)),
    BotPartnerSdkToken: (...args) => callOperation("POST /partner-sdk/token/bot", ...(args as DiscordHttpApiOperationArgs<"POST /partner-sdk/token/bot">)),
  };
}
