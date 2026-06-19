// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiConversationsMessagesOperationKeys = [
  "GetMessagesbyConversation",
  "CreateaMessagefromConversation"
] as const;
export type KustomerFullApiConversationsMessagesOperationKey = typeof KustomerFullApiConversationsMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiConversationsMessagesOperationPathParamMap {
  "GetMessagesbyConversation": { "id": KustomerFullApiPathParamValue };
  "CreateaMessagefromConversation": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiConversationsMessagesOperationRequestMap {
  "GetMessagesbyConversation": KustomerFullApiOperationInput<"GetMessagesbyConversation">;
  "CreateaMessagefromConversation": KustomerFullApiOperationInput<"CreateaMessagefromConversation">;
}

export interface KustomerFullApiConversationsMessagesGeneratedClient {
  kustomerGetMessagesbyConversation(...args: KustomerFullApiOperationArgs<"GetMessagesbyConversation">): Promise<KustomerFullApiOperationResponseMap["GetMessagesbyConversation"]>;
  kustomerCreateaMessagefromConversation(...args: KustomerFullApiOperationArgs<"CreateaMessagefromConversation">): Promise<KustomerFullApiOperationResponseMap["CreateaMessagefromConversation"]>;
}

export const KustomerFullApiConversationsMessagesGeneratedFunctionNames = [
  "kustomerGetMessagesbyConversation",
  "kustomerCreateaMessagefromConversation"
] as const satisfies readonly (keyof KustomerFullApiConversationsMessagesGeneratedClient)[];

export function createKustomerFullApiConversationsMessagesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiConversationsMessagesGeneratedClient {
  return {
    kustomerGetMessagesbyConversation: (...args) => callOperation("GetMessagesbyConversation", ...(args as KustomerFullApiOperationArgs<"GetMessagesbyConversation">)),
    kustomerCreateaMessagefromConversation: (...args) => callOperation("CreateaMessagefromConversation", ...(args as KustomerFullApiOperationArgs<"CreateaMessagefromConversation">)),
  };
}
