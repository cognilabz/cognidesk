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
export const KustomerFullApiConversationsNotesOperationKeys = [
  "GetNotesbyConversation"
] as const;
export type KustomerFullApiConversationsNotesOperationKey = typeof KustomerFullApiConversationsNotesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiConversationsNotesOperationPathParamMap {
  "GetNotesbyConversation": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiConversationsNotesOperationRequestMap {
  "GetNotesbyConversation": KustomerFullApiOperationInput<"GetNotesbyConversation">;
}

export interface KustomerFullApiConversationsNotesGeneratedClient {
  kustomerGetNotesbyConversation(...args: KustomerFullApiOperationArgs<"GetNotesbyConversation">): Promise<KustomerFullApiOperationResponseMap["GetNotesbyConversation"]>;
}

export const KustomerFullApiConversationsNotesGeneratedFunctionNames = [
  "kustomerGetNotesbyConversation"
] as const satisfies readonly (keyof KustomerFullApiConversationsNotesGeneratedClient)[];

export function createKustomerFullApiConversationsNotesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiConversationsNotesGeneratedClient {
  return {
    kustomerGetNotesbyConversation: (...args) => callOperation("GetNotesbyConversation", ...(args as KustomerFullApiOperationArgs<"GetNotesbyConversation">)),
  };
}
