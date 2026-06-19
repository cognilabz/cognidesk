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
export const KustomerFullApiCustomersMessagesOperationKeys = [
  "GetMessagesbyCustomer",
  "CreateaMessagebyCustomer"
] as const;
export type KustomerFullApiCustomersMessagesOperationKey = typeof KustomerFullApiCustomersMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersMessagesOperationPathParamMap {
  "GetMessagesbyCustomer": { "id": KustomerFullApiPathParamValue };
  "CreateaMessagebyCustomer": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomersMessagesOperationRequestMap {
  "GetMessagesbyCustomer": KustomerFullApiOperationInput<"GetMessagesbyCustomer">;
  "CreateaMessagebyCustomer": KustomerFullApiOperationInput<"CreateaMessagebyCustomer">;
}

export interface KustomerFullApiCustomersMessagesGeneratedClient {
  kustomerGetMessagesbyCustomer(...args: KustomerFullApiOperationArgs<"GetMessagesbyCustomer">): Promise<KustomerFullApiOperationResponseMap["GetMessagesbyCustomer"]>;
  kustomerCreateaMessagebyCustomer(...args: KustomerFullApiOperationArgs<"CreateaMessagebyCustomer">): Promise<KustomerFullApiOperationResponseMap["CreateaMessagebyCustomer"]>;
}

export const KustomerFullApiCustomersMessagesGeneratedFunctionNames = [
  "kustomerGetMessagesbyCustomer",
  "kustomerCreateaMessagebyCustomer"
] as const satisfies readonly (keyof KustomerFullApiCustomersMessagesGeneratedClient)[];

export function createKustomerFullApiCustomersMessagesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersMessagesGeneratedClient {
  return {
    kustomerGetMessagesbyCustomer: (...args) => callOperation("GetMessagesbyCustomer", ...(args as KustomerFullApiOperationArgs<"GetMessagesbyCustomer">)),
    kustomerCreateaMessagebyCustomer: (...args) => callOperation("CreateaMessagebyCustomer", ...(args as KustomerFullApiOperationArgs<"CreateaMessagebyCustomer">)),
  };
}
