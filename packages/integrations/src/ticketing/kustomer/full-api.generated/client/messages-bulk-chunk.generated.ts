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
export const KustomerFullApiMessagesBulkOperationKeys = [
  "BulkCreateMessages",
  "BulkBatchUpdateMessages"
] as const;
export type KustomerFullApiMessagesBulkOperationKey = typeof KustomerFullApiMessagesBulkOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiMessagesBulkOperationPathParamMap {
  "BulkCreateMessages": {};
  "BulkBatchUpdateMessages": {};
}

export interface KustomerFullApiMessagesBulkOperationRequestMap {
  "BulkCreateMessages": KustomerFullApiOperationInput<"BulkCreateMessages">;
  "BulkBatchUpdateMessages": KustomerFullApiOperationInput<"BulkBatchUpdateMessages">;
}

export interface KustomerFullApiMessagesBulkGeneratedClient {
  kustomerBulkCreateMessages(...args: KustomerFullApiOperationArgs<"BulkCreateMessages">): Promise<KustomerFullApiOperationResponseMap["BulkCreateMessages"]>;
  kustomerBulkBatchUpdateMessages(...args: KustomerFullApiOperationArgs<"BulkBatchUpdateMessages">): Promise<KustomerFullApiOperationResponseMap["BulkBatchUpdateMessages"]>;
}

export const KustomerFullApiMessagesBulkGeneratedFunctionNames = [
  "kustomerBulkCreateMessages",
  "kustomerBulkBatchUpdateMessages"
] as const satisfies readonly (keyof KustomerFullApiMessagesBulkGeneratedClient)[];

export function createKustomerFullApiMessagesBulkGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiMessagesBulkGeneratedClient {
  return {
    kustomerBulkCreateMessages: (...args) => callOperation("BulkCreateMessages", ...(args as KustomerFullApiOperationArgs<"BulkCreateMessages">)),
    kustomerBulkBatchUpdateMessages: (...args) => callOperation("BulkBatchUpdateMessages", ...(args as KustomerFullApiOperationArgs<"BulkBatchUpdateMessages">)),
  };
}
