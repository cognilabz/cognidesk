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
export const KustomerFullApiBulkOperationsOperationKeys = [
  "GetBulkOperationById",
  "GetBulkOperationBatches"
] as const;
export type KustomerFullApiBulkOperationsOperationKey = typeof KustomerFullApiBulkOperationsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiBulkOperationsOperationPathParamMap {
  "GetBulkOperationById": { "id": KustomerFullApiPathParamValue };
  "GetBulkOperationBatches": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiBulkOperationsOperationRequestMap {
  "GetBulkOperationById": KustomerFullApiOperationInput<"GetBulkOperationById">;
  "GetBulkOperationBatches": KustomerFullApiOperationInput<"GetBulkOperationBatches">;
}

export interface KustomerFullApiBulkOperationsGeneratedClient {
  kustomerGetBulkOperationById(...args: KustomerFullApiOperationArgs<"GetBulkOperationById">): Promise<KustomerFullApiOperationResponseMap["GetBulkOperationById"]>;
  kustomerGetBulkOperationBatches(...args: KustomerFullApiOperationArgs<"GetBulkOperationBatches">): Promise<KustomerFullApiOperationResponseMap["GetBulkOperationBatches"]>;
}

export const KustomerFullApiBulkOperationsGeneratedFunctionNames = [
  "kustomerGetBulkOperationById",
  "kustomerGetBulkOperationBatches"
] as const satisfies readonly (keyof KustomerFullApiBulkOperationsGeneratedClient)[];

export function createKustomerFullApiBulkOperationsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiBulkOperationsGeneratedClient {
  return {
    kustomerGetBulkOperationById: (...args) => callOperation("GetBulkOperationById", ...(args as KustomerFullApiOperationArgs<"GetBulkOperationById">)),
    kustomerGetBulkOperationBatches: (...args) => callOperation("GetBulkOperationBatches", ...(args as KustomerFullApiOperationArgs<"GetBulkOperationBatches">)),
  };
}
