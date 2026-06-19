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
export const KustomerFullApiCompaniesBulkOperationKeys = [
  "BulkCreateCompanies",
  "BulkBatchUpdateCompanies"
] as const;
export type KustomerFullApiCompaniesBulkOperationKey = typeof KustomerFullApiCompaniesBulkOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCompaniesBulkOperationPathParamMap {
  "BulkCreateCompanies": {};
  "BulkBatchUpdateCompanies": {};
}

export interface KustomerFullApiCompaniesBulkOperationRequestMap {
  "BulkCreateCompanies": KustomerFullApiOperationInput<"BulkCreateCompanies">;
  "BulkBatchUpdateCompanies": KustomerFullApiOperationInput<"BulkBatchUpdateCompanies">;
}

export interface KustomerFullApiCompaniesBulkGeneratedClient {
  kustomerBulkCreateCompanies(...args: KustomerFullApiOperationArgs<"BulkCreateCompanies">): Promise<KustomerFullApiOperationResponseMap["BulkCreateCompanies"]>;
  kustomerBulkBatchUpdateCompanies(...args: KustomerFullApiOperationArgs<"BulkBatchUpdateCompanies">): Promise<KustomerFullApiOperationResponseMap["BulkBatchUpdateCompanies"]>;
}

export const KustomerFullApiCompaniesBulkGeneratedFunctionNames = [
  "kustomerBulkCreateCompanies",
  "kustomerBulkBatchUpdateCompanies"
] as const satisfies readonly (keyof KustomerFullApiCompaniesBulkGeneratedClient)[];

export function createKustomerFullApiCompaniesBulkGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCompaniesBulkGeneratedClient {
  return {
    kustomerBulkCreateCompanies: (...args) => callOperation("BulkCreateCompanies", ...(args as KustomerFullApiOperationArgs<"BulkCreateCompanies">)),
    kustomerBulkBatchUpdateCompanies: (...args) => callOperation("BulkBatchUpdateCompanies", ...(args as KustomerFullApiOperationArgs<"BulkBatchUpdateCompanies">)),
  };
}
