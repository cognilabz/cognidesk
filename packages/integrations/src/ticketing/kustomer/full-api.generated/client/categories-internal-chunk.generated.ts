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
export const KustomerFullApiCategoriesInternalOperationKeys = [
  "GetInternalCategories",
  "CreateanInternalCategory",
  "GetInternalCategorybyID"
] as const;
export type KustomerFullApiCategoriesInternalOperationKey = typeof KustomerFullApiCategoriesInternalOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCategoriesInternalOperationPathParamMap {
  "GetInternalCategories": {};
  "CreateanInternalCategory": {};
  "GetInternalCategorybyID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCategoriesInternalOperationRequestMap {
  "GetInternalCategories": KustomerFullApiOperationInput<"GetInternalCategories">;
  "CreateanInternalCategory": KustomerFullApiOperationInput<"CreateanInternalCategory">;
  "GetInternalCategorybyID": KustomerFullApiOperationInput<"GetInternalCategorybyID">;
}

export interface KustomerFullApiCategoriesInternalGeneratedClient {
  kustomerGetInternalCategories(...args: KustomerFullApiOperationArgs<"GetInternalCategories">): Promise<KustomerFullApiOperationResponseMap["GetInternalCategories"]>;
  kustomerCreateanInternalCategory(...args: KustomerFullApiOperationArgs<"CreateanInternalCategory">): Promise<KustomerFullApiOperationResponseMap["CreateanInternalCategory"]>;
  kustomerGetInternalCategorybyID(...args: KustomerFullApiOperationArgs<"GetInternalCategorybyID">): Promise<KustomerFullApiOperationResponseMap["GetInternalCategorybyID"]>;
}

export const KustomerFullApiCategoriesInternalGeneratedFunctionNames = [
  "kustomerGetInternalCategories",
  "kustomerCreateanInternalCategory",
  "kustomerGetInternalCategorybyID"
] as const satisfies readonly (keyof KustomerFullApiCategoriesInternalGeneratedClient)[];

export function createKustomerFullApiCategoriesInternalGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCategoriesInternalGeneratedClient {
  return {
    kustomerGetInternalCategories: (...args) => callOperation("GetInternalCategories", ...(args as KustomerFullApiOperationArgs<"GetInternalCategories">)),
    kustomerCreateanInternalCategory: (...args) => callOperation("CreateanInternalCategory", ...(args as KustomerFullApiOperationArgs<"CreateanInternalCategory">)),
    kustomerGetInternalCategorybyID: (...args) => callOperation("GetInternalCategorybyID", ...(args as KustomerFullApiOperationArgs<"GetInternalCategorybyID">)),
  };
}
