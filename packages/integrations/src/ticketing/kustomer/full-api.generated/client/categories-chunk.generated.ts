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
export const KustomerFullApiCategoriesOperationKeys = [
  "GetCategories",
  "CreateaCategory",
  "GetCategorybyID",
  "UpdateCategory"
] as const;
export type KustomerFullApiCategoriesOperationKey = typeof KustomerFullApiCategoriesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCategoriesOperationPathParamMap {
  "GetCategories": {};
  "CreateaCategory": {};
  "GetCategorybyID": { "id": KustomerFullApiPathParamValue };
  "UpdateCategory": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCategoriesOperationRequestMap {
  "GetCategories": KustomerFullApiOperationInput<"GetCategories">;
  "CreateaCategory": KustomerFullApiOperationInput<"CreateaCategory">;
  "GetCategorybyID": KustomerFullApiOperationInput<"GetCategorybyID">;
  "UpdateCategory": KustomerFullApiOperationInput<"UpdateCategory">;
}

export interface KustomerFullApiCategoriesGeneratedClient {
  kustomerGetCategories(...args: KustomerFullApiOperationArgs<"GetCategories">): Promise<KustomerFullApiOperationResponseMap["GetCategories"]>;
  kustomerCreateaCategory(...args: KustomerFullApiOperationArgs<"CreateaCategory">): Promise<KustomerFullApiOperationResponseMap["CreateaCategory"]>;
  kustomerGetCategorybyID(...args: KustomerFullApiOperationArgs<"GetCategorybyID">): Promise<KustomerFullApiOperationResponseMap["GetCategorybyID"]>;
  kustomerUpdateCategory(...args: KustomerFullApiOperationArgs<"UpdateCategory">): Promise<KustomerFullApiOperationResponseMap["UpdateCategory"]>;
}

export const KustomerFullApiCategoriesGeneratedFunctionNames = [
  "kustomerGetCategories",
  "kustomerCreateaCategory",
  "kustomerGetCategorybyID",
  "kustomerUpdateCategory"
] as const satisfies readonly (keyof KustomerFullApiCategoriesGeneratedClient)[];

export function createKustomerFullApiCategoriesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCategoriesGeneratedClient {
  return {
    kustomerGetCategories: (...args) => callOperation("GetCategories", ...(args as KustomerFullApiOperationArgs<"GetCategories">)),
    kustomerCreateaCategory: (...args) => callOperation("CreateaCategory", ...(args as KustomerFullApiOperationArgs<"CreateaCategory">)),
    kustomerGetCategorybyID: (...args) => callOperation("GetCategorybyID", ...(args as KustomerFullApiOperationArgs<"GetCategorybyID">)),
    kustomerUpdateCategory: (...args) => callOperation("UpdateCategory", ...(args as KustomerFullApiOperationArgs<"UpdateCategory">)),
  };
}
