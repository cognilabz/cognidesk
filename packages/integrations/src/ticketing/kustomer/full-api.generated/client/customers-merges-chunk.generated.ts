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
export const KustomerFullApiCustomersMergesOperationKeys = [
  "GetCustomerMergesbyCustomer",
  "CreateaCustomerMerge",
  "GetaCustomerMerge"
] as const;
export type KustomerFullApiCustomersMergesOperationKey = typeof KustomerFullApiCustomersMergesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersMergesOperationPathParamMap {
  "GetCustomerMergesbyCustomer": { "id": KustomerFullApiPathParamValue };
  "CreateaCustomerMerge": {};
  "GetaCustomerMerge": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomersMergesOperationRequestMap {
  "GetCustomerMergesbyCustomer": KustomerFullApiOperationInput<"GetCustomerMergesbyCustomer">;
  "CreateaCustomerMerge": KustomerFullApiOperationInput<"CreateaCustomerMerge">;
  "GetaCustomerMerge": KustomerFullApiOperationInput<"GetaCustomerMerge">;
}

export interface KustomerFullApiCustomersMergesGeneratedClient {
  kustomerGetCustomerMergesbyCustomer(...args: KustomerFullApiOperationArgs<"GetCustomerMergesbyCustomer">): Promise<KustomerFullApiOperationResponseMap["GetCustomerMergesbyCustomer"]>;
  kustomerCreateaCustomerMerge(...args: KustomerFullApiOperationArgs<"CreateaCustomerMerge">): Promise<KustomerFullApiOperationResponseMap["CreateaCustomerMerge"]>;
  kustomerGetaCustomerMerge(...args: KustomerFullApiOperationArgs<"GetaCustomerMerge">): Promise<KustomerFullApiOperationResponseMap["GetaCustomerMerge"]>;
}

export const KustomerFullApiCustomersMergesGeneratedFunctionNames = [
  "kustomerGetCustomerMergesbyCustomer",
  "kustomerCreateaCustomerMerge",
  "kustomerGetaCustomerMerge"
] as const satisfies readonly (keyof KustomerFullApiCustomersMergesGeneratedClient)[];

export function createKustomerFullApiCustomersMergesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersMergesGeneratedClient {
  return {
    kustomerGetCustomerMergesbyCustomer: (...args) => callOperation("GetCustomerMergesbyCustomer", ...(args as KustomerFullApiOperationArgs<"GetCustomerMergesbyCustomer">)),
    kustomerCreateaCustomerMerge: (...args) => callOperation("CreateaCustomerMerge", ...(args as KustomerFullApiOperationArgs<"CreateaCustomerMerge">)),
    kustomerGetaCustomerMerge: (...args) => callOperation("GetaCustomerMerge", ...(args as KustomerFullApiOperationArgs<"GetaCustomerMerge">)),
  };
}
