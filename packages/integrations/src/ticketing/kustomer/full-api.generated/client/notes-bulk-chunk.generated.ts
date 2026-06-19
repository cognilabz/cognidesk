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
export const KustomerFullApiNotesBulkOperationKeys = [
  "BulkCreateNotes",
  "BulkBatchUpdateNotes"
] as const;
export type KustomerFullApiNotesBulkOperationKey = typeof KustomerFullApiNotesBulkOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiNotesBulkOperationPathParamMap {
  "BulkCreateNotes": {};
  "BulkBatchUpdateNotes": {};
}

export interface KustomerFullApiNotesBulkOperationRequestMap {
  "BulkCreateNotes": KustomerFullApiOperationInput<"BulkCreateNotes">;
  "BulkBatchUpdateNotes": KustomerFullApiOperationInput<"BulkBatchUpdateNotes">;
}

export interface KustomerFullApiNotesBulkGeneratedClient {
  kustomerBulkCreateNotes(...args: KustomerFullApiOperationArgs<"BulkCreateNotes">): Promise<KustomerFullApiOperationResponseMap["BulkCreateNotes"]>;
  kustomerBulkBatchUpdateNotes(...args: KustomerFullApiOperationArgs<"BulkBatchUpdateNotes">): Promise<KustomerFullApiOperationResponseMap["BulkBatchUpdateNotes"]>;
}

export const KustomerFullApiNotesBulkGeneratedFunctionNames = [
  "kustomerBulkCreateNotes",
  "kustomerBulkBatchUpdateNotes"
] as const satisfies readonly (keyof KustomerFullApiNotesBulkGeneratedClient)[];

export function createKustomerFullApiNotesBulkGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiNotesBulkGeneratedClient {
  return {
    kustomerBulkCreateNotes: (...args) => callOperation("BulkCreateNotes", ...(args as KustomerFullApiOperationArgs<"BulkCreateNotes">)),
    kustomerBulkBatchUpdateNotes: (...args) => callOperation("BulkBatchUpdateNotes", ...(args as KustomerFullApiOperationArgs<"BulkBatchUpdateNotes">)),
  };
}
