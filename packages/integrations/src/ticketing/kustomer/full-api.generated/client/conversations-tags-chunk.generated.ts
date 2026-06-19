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
export const KustomerFullApiConversationsTagsOperationKeys = [
  "RemoveTagsfromConversation",
  "AppendTagstoConversation"
] as const;
export type KustomerFullApiConversationsTagsOperationKey = typeof KustomerFullApiConversationsTagsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiConversationsTagsOperationPathParamMap {
  "RemoveTagsfromConversation": { "id": KustomerFullApiPathParamValue };
  "AppendTagstoConversation": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiConversationsTagsOperationRequestMap {
  "RemoveTagsfromConversation": KustomerFullApiOperationInput<"RemoveTagsfromConversation">;
  "AppendTagstoConversation": KustomerFullApiOperationInput<"AppendTagstoConversation">;
}

export interface KustomerFullApiConversationsTagsGeneratedClient {
  kustomerRemoveTagsfromConversation(...args: KustomerFullApiOperationArgs<"RemoveTagsfromConversation">): Promise<KustomerFullApiOperationResponseMap["RemoveTagsfromConversation"]>;
  kustomerAppendTagstoConversation(...args: KustomerFullApiOperationArgs<"AppendTagstoConversation">): Promise<KustomerFullApiOperationResponseMap["AppendTagstoConversation"]>;
}

export const KustomerFullApiConversationsTagsGeneratedFunctionNames = [
  "kustomerRemoveTagsfromConversation",
  "kustomerAppendTagstoConversation"
] as const satisfies readonly (keyof KustomerFullApiConversationsTagsGeneratedClient)[];

export function createKustomerFullApiConversationsTagsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiConversationsTagsGeneratedClient {
  return {
    kustomerRemoveTagsfromConversation: (...args) => callOperation("RemoveTagsfromConversation", ...(args as KustomerFullApiOperationArgs<"RemoveTagsfromConversation">)),
    kustomerAppendTagstoConversation: (...args) => callOperation("AppendTagstoConversation", ...(args as KustomerFullApiOperationArgs<"AppendTagstoConversation">)),
  };
}
