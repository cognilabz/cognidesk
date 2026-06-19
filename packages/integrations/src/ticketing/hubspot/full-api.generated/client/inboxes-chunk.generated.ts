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
export const HubSpotFullApiInboxesOperationKeys = [
  "conversations:conversations:3:get-/conversations/v3/conversations/inboxes",
  "conversations:conversations:3:get-/conversations/v3/conversations/inboxes/{inboxId}"
] as const;
export type HubSpotFullApiInboxesOperationKey = typeof HubSpotFullApiInboxesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiInboxesOperationPathParamMap {
  "conversations:conversations:3:get-/conversations/v3/conversations/inboxes": {};
  "conversations:conversations:3:get-/conversations/v3/conversations/inboxes/{inboxId}": { "inboxId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiInboxesOperationRequestMap {
  "conversations:conversations:3:get-/conversations/v3/conversations/inboxes": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/inboxes">;
  "conversations:conversations:3:get-/conversations/v3/conversations/inboxes/{inboxId}": HubSpotFullApiOperationInput<"conversations:conversations:3:get-/conversations/v3/conversations/inboxes/{inboxId}">;
}

export interface HubSpotFullApiInboxesGeneratedClient {
  ConversationsGetConversationsV3ConversationsInboxes(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/inboxes">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/inboxes"]>;
  ConversationsGetConversationsV3ConversationsInboxesInboxId(...args: HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/inboxes/{inboxId}">): Promise<HubSpotFullApiOperationResponseMap["conversations:conversations:3:get-/conversations/v3/conversations/inboxes/{inboxId}"]>;
}

export const HubSpotFullApiInboxesGeneratedFunctionNames = [
  "ConversationsGetConversationsV3ConversationsInboxes",
  "ConversationsGetConversationsV3ConversationsInboxesInboxId"
] as const satisfies readonly (keyof HubSpotFullApiInboxesGeneratedClient)[];

export function createHubSpotFullApiInboxesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiInboxesGeneratedClient {
  return {
    ConversationsGetConversationsV3ConversationsInboxes: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/inboxes", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/inboxes">)),
    ConversationsGetConversationsV3ConversationsInboxesInboxId: (...args) => callOperation("conversations:conversations:3:get-/conversations/v3/conversations/inboxes/{inboxId}", ...(args as HubSpotFullApiOperationArgs<"conversations:conversations:3:get-/conversations/v3/conversations/inboxes/{inboxId}">)),
  };
}
