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
export const KustomerFullApiCategoriesPublicOperationKeys = [
  "GetCategories(Public)",
  "GetCategorybyID(Public)"
] as const;
export type KustomerFullApiCategoriesPublicOperationKey = typeof KustomerFullApiCategoriesPublicOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCategoriesPublicOperationPathParamMap {
  "GetCategories(Public)": {};
  "GetCategorybyID(Public)": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCategoriesPublicOperationRequestMap {
  "GetCategories(Public)": KustomerFullApiOperationInput<"GetCategories(Public)">;
  "GetCategorybyID(Public)": KustomerFullApiOperationInput<"GetCategorybyID(Public)">;
}

export interface KustomerFullApiCategoriesPublicGeneratedClient {
  kustomerGetCategoriesPublic(...args: KustomerFullApiOperationArgs<"GetCategories(Public)">): Promise<KustomerFullApiOperationResponseMap["GetCategories(Public)"]>;
  kustomerGetCategorybyIDPublic(...args: KustomerFullApiOperationArgs<"GetCategorybyID(Public)">): Promise<KustomerFullApiOperationResponseMap["GetCategorybyID(Public)"]>;
}

export const KustomerFullApiCategoriesPublicGeneratedFunctionNames = [
  "kustomerGetCategoriesPublic",
  "kustomerGetCategorybyIDPublic"
] as const satisfies readonly (keyof KustomerFullApiCategoriesPublicGeneratedClient)[];

export function createKustomerFullApiCategoriesPublicGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCategoriesPublicGeneratedClient {
  return {
    kustomerGetCategoriesPublic: (...args) => callOperation("GetCategories(Public)", ...(args as KustomerFullApiOperationArgs<"GetCategories(Public)">)),
    kustomerGetCategorybyIDPublic: (...args) => callOperation("GetCategorybyID(Public)", ...(args as KustomerFullApiOperationArgs<"GetCategorybyID(Public)">)),
  };
}
