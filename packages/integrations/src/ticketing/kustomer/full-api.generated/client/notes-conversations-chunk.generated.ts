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
export const KustomerFullApiNotesConversationsOperationKeys = [
  "CreateaNotewithinConversation"
] as const;
export type KustomerFullApiNotesConversationsOperationKey = typeof KustomerFullApiNotesConversationsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiNotesConversationsOperationPathParamMap {
  "CreateaNotewithinConversation": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiNotesConversationsOperationRequestMap {
  "CreateaNotewithinConversation": KustomerFullApiOperationInput<"CreateaNotewithinConversation">;
}

export interface KustomerFullApiNotesConversationsGeneratedClient {
  kustomerCreateaNotewithinConversation(...args: KustomerFullApiOperationArgs<"CreateaNotewithinConversation">): Promise<KustomerFullApiOperationResponseMap["CreateaNotewithinConversation"]>;
}

export const KustomerFullApiNotesConversationsGeneratedFunctionNames = [
  "kustomerCreateaNotewithinConversation"
] as const satisfies readonly (keyof KustomerFullApiNotesConversationsGeneratedClient)[];

export function createKustomerFullApiNotesConversationsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiNotesConversationsGeneratedClient {
  return {
    kustomerCreateaNotewithinConversation: (...args) => callOperation("CreateaNotewithinConversation", ...(args as KustomerFullApiOperationArgs<"CreateaNotewithinConversation">)),
  };
}
