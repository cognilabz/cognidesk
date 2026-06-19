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
export const KustomerFullApiSearchFiltersOperationKeys = [
  "GetAllSearches",
  "CreateSavedSearch",
  "DeleteSearchbyID",
  "GetSavedSearchbyID",
  "UpdateSearchbyID",
  "GetSearchPositions",
  "UpdateSearchPositions",
  "GetSchemaforSearches"
] as const;
export type KustomerFullApiSearchFiltersOperationKey = typeof KustomerFullApiSearchFiltersOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSearchFiltersOperationPathParamMap {
  "GetAllSearches": {};
  "CreateSavedSearch": {};
  "DeleteSearchbyID": { "id": KustomerFullApiPathParamValue };
  "GetSavedSearchbyID": { "id": KustomerFullApiPathParamValue };
  "UpdateSearchbyID": { "id": KustomerFullApiPathParamValue };
  "GetSearchPositions": {};
  "UpdateSearchPositions": {};
  "GetSchemaforSearches": {};
}

export interface KustomerFullApiSearchFiltersOperationRequestMap {
  "GetAllSearches": KustomerFullApiOperationInput<"GetAllSearches">;
  "CreateSavedSearch": KustomerFullApiOperationInput<"CreateSavedSearch">;
  "DeleteSearchbyID": KustomerFullApiOperationInput<"DeleteSearchbyID">;
  "GetSavedSearchbyID": KustomerFullApiOperationInput<"GetSavedSearchbyID">;
  "UpdateSearchbyID": KustomerFullApiOperationInput<"UpdateSearchbyID">;
  "GetSearchPositions": KustomerFullApiOperationInput<"GetSearchPositions">;
  "UpdateSearchPositions": KustomerFullApiOperationInput<"UpdateSearchPositions">;
  "GetSchemaforSearches": KustomerFullApiOperationInput<"GetSchemaforSearches">;
}

export interface KustomerFullApiSearchFiltersGeneratedClient {
  kustomerGetAllSearches(...args: KustomerFullApiOperationArgs<"GetAllSearches">): Promise<KustomerFullApiOperationResponseMap["GetAllSearches"]>;
  kustomerCreateSavedSearch(...args: KustomerFullApiOperationArgs<"CreateSavedSearch">): Promise<KustomerFullApiOperationResponseMap["CreateSavedSearch"]>;
  kustomerDeleteSearchbyID(...args: KustomerFullApiOperationArgs<"DeleteSearchbyID">): Promise<KustomerFullApiOperationResponseMap["DeleteSearchbyID"]>;
  kustomerGetSavedSearchbyID(...args: KustomerFullApiOperationArgs<"GetSavedSearchbyID">): Promise<KustomerFullApiOperationResponseMap["GetSavedSearchbyID"]>;
  kustomerUpdateSearchbyID(...args: KustomerFullApiOperationArgs<"UpdateSearchbyID">): Promise<KustomerFullApiOperationResponseMap["UpdateSearchbyID"]>;
  kustomerGetSearchPositions(...args: KustomerFullApiOperationArgs<"GetSearchPositions">): Promise<KustomerFullApiOperationResponseMap["GetSearchPositions"]>;
  kustomerUpdateSearchPositions(...args: KustomerFullApiOperationArgs<"UpdateSearchPositions">): Promise<KustomerFullApiOperationResponseMap["UpdateSearchPositions"]>;
  kustomerGetSchemaforSearches(...args: KustomerFullApiOperationArgs<"GetSchemaforSearches">): Promise<KustomerFullApiOperationResponseMap["GetSchemaforSearches"]>;
}

export const KustomerFullApiSearchFiltersGeneratedFunctionNames = [
  "kustomerGetAllSearches",
  "kustomerCreateSavedSearch",
  "kustomerDeleteSearchbyID",
  "kustomerGetSavedSearchbyID",
  "kustomerUpdateSearchbyID",
  "kustomerGetSearchPositions",
  "kustomerUpdateSearchPositions",
  "kustomerGetSchemaforSearches"
] as const satisfies readonly (keyof KustomerFullApiSearchFiltersGeneratedClient)[];

export function createKustomerFullApiSearchFiltersGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSearchFiltersGeneratedClient {
  return {
    kustomerGetAllSearches: (...args) => callOperation("GetAllSearches", ...(args as KustomerFullApiOperationArgs<"GetAllSearches">)),
    kustomerCreateSavedSearch: (...args) => callOperation("CreateSavedSearch", ...(args as KustomerFullApiOperationArgs<"CreateSavedSearch">)),
    kustomerDeleteSearchbyID: (...args) => callOperation("DeleteSearchbyID", ...(args as KustomerFullApiOperationArgs<"DeleteSearchbyID">)),
    kustomerGetSavedSearchbyID: (...args) => callOperation("GetSavedSearchbyID", ...(args as KustomerFullApiOperationArgs<"GetSavedSearchbyID">)),
    kustomerUpdateSearchbyID: (...args) => callOperation("UpdateSearchbyID", ...(args as KustomerFullApiOperationArgs<"UpdateSearchbyID">)),
    kustomerGetSearchPositions: (...args) => callOperation("GetSearchPositions", ...(args as KustomerFullApiOperationArgs<"GetSearchPositions">)),
    kustomerUpdateSearchPositions: (...args) => callOperation("UpdateSearchPositions", ...(args as KustomerFullApiOperationArgs<"UpdateSearchPositions">)),
    kustomerGetSchemaforSearches: (...args) => callOperation("GetSchemaforSearches", ...(args as KustomerFullApiOperationArgs<"GetSchemaforSearches">)),
  };
}
