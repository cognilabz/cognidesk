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
export const KustomerFullApiKObjectsCustomObjectsBulkOperationKeys = [
  "BulkDeleteKObjects",
  "BulkCreateKObjects",
  "BulkBatchUpdateKObjects"
] as const;
export type KustomerFullApiKObjectsCustomObjectsBulkOperationKey = typeof KustomerFullApiKObjectsCustomObjectsBulkOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiKObjectsCustomObjectsBulkOperationPathParamMap {
  "BulkDeleteKObjects": { "name": KustomerFullApiPathParamValue };
  "BulkCreateKObjects": { "name": KustomerFullApiPathParamValue };
  "BulkBatchUpdateKObjects": { "name": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiKObjectsCustomObjectsBulkOperationRequestMap {
  "BulkDeleteKObjects": KustomerFullApiOperationInput<"BulkDeleteKObjects">;
  "BulkCreateKObjects": KustomerFullApiOperationInput<"BulkCreateKObjects">;
  "BulkBatchUpdateKObjects": KustomerFullApiOperationInput<"BulkBatchUpdateKObjects">;
}

export interface KustomerFullApiKObjectsCustomObjectsBulkGeneratedClient {
  kustomerBulkDeleteKObjects(...args: KustomerFullApiOperationArgs<"BulkDeleteKObjects">): Promise<KustomerFullApiOperationResponseMap["BulkDeleteKObjects"]>;
  kustomerBulkCreateKObjects(...args: KustomerFullApiOperationArgs<"BulkCreateKObjects">): Promise<KustomerFullApiOperationResponseMap["BulkCreateKObjects"]>;
  kustomerBulkBatchUpdateKObjects(...args: KustomerFullApiOperationArgs<"BulkBatchUpdateKObjects">): Promise<KustomerFullApiOperationResponseMap["BulkBatchUpdateKObjects"]>;
}

export const KustomerFullApiKObjectsCustomObjectsBulkGeneratedFunctionNames = [
  "kustomerBulkDeleteKObjects",
  "kustomerBulkCreateKObjects",
  "kustomerBulkBatchUpdateKObjects"
] as const satisfies readonly (keyof KustomerFullApiKObjectsCustomObjectsBulkGeneratedClient)[];

export function createKustomerFullApiKObjectsCustomObjectsBulkGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiKObjectsCustomObjectsBulkGeneratedClient {
  return {
    kustomerBulkDeleteKObjects: (...args) => callOperation("BulkDeleteKObjects", ...(args as KustomerFullApiOperationArgs<"BulkDeleteKObjects">)),
    kustomerBulkCreateKObjects: (...args) => callOperation("BulkCreateKObjects", ...(args as KustomerFullApiOperationArgs<"BulkCreateKObjects">)),
    kustomerBulkBatchUpdateKObjects: (...args) => callOperation("BulkBatchUpdateKObjects", ...(args as KustomerFullApiOperationArgs<"BulkBatchUpdateKObjects">)),
  };
}
