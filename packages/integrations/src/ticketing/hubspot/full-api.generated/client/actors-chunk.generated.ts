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
export const HubSpotFullApiActorsOperationKeys = [
  "conversations:conversations:3:post-/conversations/v3/conversations/actors/batch/read",
  "conversations:conversations:3:get-/conversations/v3/conversations/actors/{actorId}"
] as const;
export type HubSpotFullApiActorsOperationKey = typeof HubSpotFullApiActorsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiActorsOperationPathParamMap {
  "conversations:conversations:3:post-/conversations/v3/conversations/actors/batch/read": {};
  "conversations:conversations:3:get-/conversations/v3/conversations/actors/{actorId}": { "actorId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiActorsOperationRequestMap {
  "conversations:conversations:3:post-/conversations/v3/conversations/actors/batch/read": HubSpotFullApiOperationInput<"conversations:conversations:3:post-/conversations/v3/conversations/actors/batch/read">;
  "conversations:conversations:3:get-/conversations/v3/conversations/actors/{actorId}": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/actors/{actorId}">;
}

export interface HubSpotFullApiActorsGeneratedClient {
  ConversationsPostConversationsV3ConversationsActorsBatchRead(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:post-/conversations/v3/conversations/actors/batch/read">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:post-/conversations/v3/conversations/actors/batch/read"]>;
  ConversationsGetConversationsV3ConversationsActorsActorId(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/actors/{actorId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/actors/{actorId}"]>;
}

export const HubSpotFullApiActorsGeneratedFunctionNames = [
  "ConversationsPostConversationsV3ConversationsActorsBatchRead",
  "ConversationsGetConversationsV3ConversationsActorsActorId"
] as const satisfies readonly (keyof HubSpotFullApiActorsGeneratedClient)[];

export function createHubSpotFullApiActorsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiActorsGeneratedClient {
  return {
    ConversationsPostConversationsV3ConversationsActorsBatchRead: (...args) => callOperation("conversations:conversations:3:post-/conversations/v3/conversations/actors/batch/read", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:post-/conversations/v3/conversations/actors/batch/read">)),
    ConversationsGetConversationsV3ConversationsActorsActorId: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/actors/{actorId}", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/actors/{actorId}">)),
  };
}
