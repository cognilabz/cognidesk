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
export const KustomerFullApiCustomersNotesOperationKeys = [
  "GetNotesbyCustomer"
] as const;
export type KustomerFullApiCustomersNotesOperationKey = typeof KustomerFullApiCustomersNotesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersNotesOperationPathParamMap {
  "GetNotesbyCustomer": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomersNotesOperationRequestMap {
  "GetNotesbyCustomer": KustomerFullApiOperationInput<"GetNotesbyCustomer">;
}

export interface KustomerFullApiCustomersNotesGeneratedClient {
  kustomerGetNotesbyCustomer(...args: KustomerFullApiOperationArgs<"GetNotesbyCustomer">): Promise<KustomerFullApiOperationResponseMap["GetNotesbyCustomer"]>;
}

export const KustomerFullApiCustomersNotesGeneratedFunctionNames = [
  "kustomerGetNotesbyCustomer"
] as const satisfies readonly (keyof KustomerFullApiCustomersNotesGeneratedClient)[];

export function createKustomerFullApiCustomersNotesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersNotesGeneratedClient {
  return {
    kustomerGetNotesbyCustomer: (...args) => callOperation("GetNotesbyCustomer", ...(args as KustomerFullApiOperationArgs<"GetNotesbyCustomer">)),
  };
}
