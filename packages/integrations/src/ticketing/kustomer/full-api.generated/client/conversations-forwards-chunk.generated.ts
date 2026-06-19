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
export const KustomerFullApiConversationsForwardsOperationKeys = [
  "GetallForwardsbyConversation",
  "CreateaForwardbyConversation"
] as const;
export type KustomerFullApiConversationsForwardsOperationKey = typeof KustomerFullApiConversationsForwardsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiConversationsForwardsOperationPathParamMap {
  "GetallForwardsbyConversation": { "id": KustomerFullApiPathParamValue };
  "CreateaForwardbyConversation": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiConversationsForwardsOperationRequestMap {
  "GetallForwardsbyConversation": KustomerFullApiOperationInput<"GetallForwardsbyConversation">;
  "CreateaForwardbyConversation": KustomerFullApiOperationInput<"CreateaForwardbyConversation">;
}

export interface KustomerFullApiConversationsForwardsGeneratedClient {
  kustomerGetallForwardsbyConversation(...args: KustomerFullApiOperationArgs<"GetallForwardsbyConversation">): Promise<KustomerFullApiOperationResponseMap["GetallForwardsbyConversation"]>;
  kustomerCreateaForwardbyConversation(...args: KustomerFullApiOperationArgs<"CreateaForwardbyConversation">): Promise<KustomerFullApiOperationResponseMap["CreateaForwardbyConversation"]>;
}

export const KustomerFullApiConversationsForwardsGeneratedFunctionNames = [
  "kustomerGetallForwardsbyConversation",
  "kustomerCreateaForwardbyConversation"
] as const satisfies readonly (keyof KustomerFullApiConversationsForwardsGeneratedClient)[];

export function createKustomerFullApiConversationsForwardsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiConversationsForwardsGeneratedClient {
  return {
    kustomerGetallForwardsbyConversation: (...args) => callOperation("GetallForwardsbyConversation", ...(args as KustomerFullApiOperationArgs<"GetallForwardsbyConversation">)),
    kustomerCreateaForwardbyConversation: (...args) => callOperation("CreateaForwardbyConversation", ...(args as KustomerFullApiOperationArgs<"CreateaForwardbyConversation">)),
  };
}
