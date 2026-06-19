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
export const KustomerFullApiCustomersConversationsOperationKeys = [
  "GetConversationsbyCustomer",
  "CreateaConversationforaCustomer"
] as const;
export type KustomerFullApiCustomersConversationsOperationKey = typeof KustomerFullApiCustomersConversationsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersConversationsOperationPathParamMap {
  "GetConversationsbyCustomer": { "id": KustomerFullApiPathParamValue };
  "CreateaConversationforaCustomer": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomersConversationsOperationRequestMap {
  "GetConversationsbyCustomer": KustomerFullApiOperationInput<"GetConversationsbyCustomer">;
  "CreateaConversationforaCustomer": KustomerFullApiOperationInput<"CreateaConversationforaCustomer">;
}

export interface KustomerFullApiCustomersConversationsGeneratedClient {
  kustomerGetConversationsbyCustomer(...args: KustomerFullApiOperationArgs<"GetConversationsbyCustomer">): Promise<KustomerFullApiOperationResponseMap["GetConversationsbyCustomer"]>;
  kustomerCreateaConversationforaCustomer(...args: KustomerFullApiOperationArgs<"CreateaConversationforaCustomer">): Promise<KustomerFullApiOperationResponseMap["CreateaConversationforaCustomer"]>;
}

export const KustomerFullApiCustomersConversationsGeneratedFunctionNames = [
  "kustomerGetConversationsbyCustomer",
  "kustomerCreateaConversationforaCustomer"
] as const satisfies readonly (keyof KustomerFullApiCustomersConversationsGeneratedClient)[];

export function createKustomerFullApiCustomersConversationsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersConversationsGeneratedClient {
  return {
    kustomerGetConversationsbyCustomer: (...args) => callOperation("GetConversationsbyCustomer", ...(args as KustomerFullApiOperationArgs<"GetConversationsbyCustomer">)),
    kustomerCreateaConversationforaCustomer: (...args) => callOperation("CreateaConversationforaCustomer", ...(args as KustomerFullApiOperationArgs<"CreateaConversationforaCustomer">)),
  };
}
