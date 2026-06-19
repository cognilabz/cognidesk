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
export const KustomerFullApiSearchFiltersPinnedOperationKeys = [
  "GetAllPinnedSearches",
  "PinSearch",
  "DeletePinnedSearchbyID"
] as const;
export type KustomerFullApiSearchFiltersPinnedOperationKey = typeof KustomerFullApiSearchFiltersPinnedOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSearchFiltersPinnedOperationPathParamMap {
  "GetAllPinnedSearches": {};
  "PinSearch": {};
  "DeletePinnedSearchbyID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiSearchFiltersPinnedOperationRequestMap {
  "GetAllPinnedSearches": KustomerFullApiOperationInput<"GetAllPinnedSearches">;
  "PinSearch": KustomerFullApiOperationInput<"PinSearch">;
  "DeletePinnedSearchbyID": KustomerFullApiOperationInput<"DeletePinnedSearchbyID">;
}

export interface KustomerFullApiSearchFiltersPinnedGeneratedClient {
  kustomerGetAllPinnedSearches(...args: KustomerFullApiOperationArgs<"GetAllPinnedSearches">): Promise<KustomerFullApiOperationResponseMap["GetAllPinnedSearches"]>;
  kustomerPinSearch(...args: KustomerFullApiOperationArgs<"PinSearch">): Promise<KustomerFullApiOperationResponseMap["PinSearch"]>;
  kustomerDeletePinnedSearchbyID(...args: KustomerFullApiOperationArgs<"DeletePinnedSearchbyID">): Promise<KustomerFullApiOperationResponseMap["DeletePinnedSearchbyID"]>;
}

export const KustomerFullApiSearchFiltersPinnedGeneratedFunctionNames = [
  "kustomerGetAllPinnedSearches",
  "kustomerPinSearch",
  "kustomerDeletePinnedSearchbyID"
] as const satisfies readonly (keyof KustomerFullApiSearchFiltersPinnedGeneratedClient)[];

export function createKustomerFullApiSearchFiltersPinnedGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSearchFiltersPinnedGeneratedClient {
  return {
    kustomerGetAllPinnedSearches: (...args) => callOperation("GetAllPinnedSearches", ...(args as KustomerFullApiOperationArgs<"GetAllPinnedSearches">)),
    kustomerPinSearch: (...args) => callOperation("PinSearch", ...(args as KustomerFullApiOperationArgs<"PinSearch">)),
    kustomerDeletePinnedSearchbyID: (...args) => callOperation("DeletePinnedSearchbyID", ...(args as KustomerFullApiOperationArgs<"DeletePinnedSearchbyID">)),
  };
}
