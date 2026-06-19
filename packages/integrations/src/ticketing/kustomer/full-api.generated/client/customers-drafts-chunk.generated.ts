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
export const KustomerFullApiCustomersDraftsOperationKeys = [
  "GetallDraftsbyCustomer",
  "CreateaDraftbyCustomer"
] as const;
export type KustomerFullApiCustomersDraftsOperationKey = typeof KustomerFullApiCustomersDraftsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersDraftsOperationPathParamMap {
  "GetallDraftsbyCustomer": { "id": KustomerFullApiPathParamValue };
  "CreateaDraftbyCustomer": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomersDraftsOperationRequestMap {
  "GetallDraftsbyCustomer": KustomerFullApiOperationInput<"GetallDraftsbyCustomer">;
  "CreateaDraftbyCustomer": KustomerFullApiOperationInput<"CreateaDraftbyCustomer">;
}

export interface KustomerFullApiCustomersDraftsGeneratedClient {
  kustomerGetallDraftsbyCustomer(...args: KustomerFullApiOperationArgs<"GetallDraftsbyCustomer">): Promise<KustomerFullApiOperationResponseMap["GetallDraftsbyCustomer"]>;
  kustomerCreateaDraftbyCustomer(...args: KustomerFullApiOperationArgs<"CreateaDraftbyCustomer">): Promise<KustomerFullApiOperationResponseMap["CreateaDraftbyCustomer"]>;
}

export const KustomerFullApiCustomersDraftsGeneratedFunctionNames = [
  "kustomerGetallDraftsbyCustomer",
  "kustomerCreateaDraftbyCustomer"
] as const satisfies readonly (keyof KustomerFullApiCustomersDraftsGeneratedClient)[];

export function createKustomerFullApiCustomersDraftsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersDraftsGeneratedClient {
  return {
    kustomerGetallDraftsbyCustomer: (...args) => callOperation("GetallDraftsbyCustomer", ...(args as KustomerFullApiOperationArgs<"GetallDraftsbyCustomer">)),
    kustomerCreateaDraftbyCustomer: (...args) => callOperation("CreateaDraftbyCustomer", ...(args as KustomerFullApiOperationArgs<"CreateaDraftbyCustomer">)),
  };
}
