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
export const KustomerFullApiCustomersBulkOperationKeys = [
  "BulkDeleteCustomers",
  "BulkCreateCustomers",
  "BulkBatchUpdateCustomers"
] as const;
export type KustomerFullApiCustomersBulkOperationKey = typeof KustomerFullApiCustomersBulkOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersBulkOperationPathParamMap {
  "BulkDeleteCustomers": {};
  "BulkCreateCustomers": {};
  "BulkBatchUpdateCustomers": {};
}

export interface KustomerFullApiCustomersBulkOperationRequestMap {
  "BulkDeleteCustomers": KustomerFullApiOperationInput<"BulkDeleteCustomers">;
  "BulkCreateCustomers": KustomerFullApiOperationInput<"BulkCreateCustomers">;
  "BulkBatchUpdateCustomers": KustomerFullApiOperationInput<"BulkBatchUpdateCustomers">;
}

export interface KustomerFullApiCustomersBulkGeneratedClient {
  kustomerBulkDeleteCustomers(...args: KustomerFullApiOperationArgs<"BulkDeleteCustomers">): Promise<KustomerFullApiOperationResponseMap["BulkDeleteCustomers"]>;
  kustomerBulkCreateCustomers(...args: KustomerFullApiOperationArgs<"BulkCreateCustomers">): Promise<KustomerFullApiOperationResponseMap["BulkCreateCustomers"]>;
  kustomerBulkBatchUpdateCustomers(...args: KustomerFullApiOperationArgs<"BulkBatchUpdateCustomers">): Promise<KustomerFullApiOperationResponseMap["BulkBatchUpdateCustomers"]>;
}

export const KustomerFullApiCustomersBulkGeneratedFunctionNames = [
  "kustomerBulkDeleteCustomers",
  "kustomerBulkCreateCustomers",
  "kustomerBulkBatchUpdateCustomers"
] as const satisfies readonly (keyof KustomerFullApiCustomersBulkGeneratedClient)[];

export function createKustomerFullApiCustomersBulkGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersBulkGeneratedClient {
  return {
    kustomerBulkDeleteCustomers: (...args) => callOperation("BulkDeleteCustomers", ...(args as KustomerFullApiOperationArgs<"BulkDeleteCustomers">)),
    kustomerBulkCreateCustomers: (...args) => callOperation("BulkCreateCustomers", ...(args as KustomerFullApiOperationArgs<"BulkCreateCustomers">)),
    kustomerBulkBatchUpdateCustomers: (...args) => callOperation("BulkBatchUpdateCustomers", ...(args as KustomerFullApiOperationArgs<"BulkBatchUpdateCustomers">)),
  };
}
