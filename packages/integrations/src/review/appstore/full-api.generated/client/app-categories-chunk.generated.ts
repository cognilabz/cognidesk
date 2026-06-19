// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiAppCategoriesOperationKeys = [
  "appCategories_getCollection",
  "appCategories_getInstance",
  "appCategories_parent_getToOneRelated",
  "appCategories_parent_getToOneRelationship",
  "appCategories_subcategories_getToManyRelated",
  "appCategories_subcategories_getToManyRelationship"
] as const;
export type AppStoreFullApiAppCategoriesOperationKey = typeof AppStoreFullApiAppCategoriesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppCategoriesOperationPathParamMap {
  "appCategories_getCollection": {};
  "appCategories_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appCategories_parent_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appCategories_parent_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appCategories_subcategories_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appCategories_subcategories_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppCategoriesOperationRequestMap {
  "appCategories_getCollection": AppStoreFullApiOperationInput<"appCategories_getCollection">;
  "appCategories_getInstance": AppStoreFullApiOperationInput<"appCategories_getInstance">;
  "appCategories_parent_getToOneRelated": AppStoreFullApiOperationInput<"appCategories_parent_getToOneRelated">;
  "appCategories_parent_getToOneRelationship": AppStoreFullApiOperationInput<"appCategories_parent_getToOneRelationship">;
  "appCategories_subcategories_getToManyRelated": AppStoreFullApiOperationInput<"appCategories_subcategories_getToManyRelated">;
  "appCategories_subcategories_getToManyRelationship": AppStoreFullApiOperationInput<"appCategories_subcategories_getToManyRelationship">;
}

export interface AppStoreFullApiAppCategoriesGeneratedClient {
  AppCategoriesGetCollection(...args: AppStoreFullApiOperationArgs<"appCategories_getCollection">): Promise<AppStoreFullApiOperationResponseMap["appCategories_getCollection"]>;
  AppCategoriesGetInstance(...args: AppStoreFullApiOperationArgs<"appCategories_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appCategories_getInstance"]>;
  AppCategoriesParentGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appCategories_parent_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appCategories_parent_getToOneRelated"]>;
  AppCategoriesParentGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appCategories_parent_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appCategories_parent_getToOneRelationship"]>;
  AppCategoriesSubcategoriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appCategories_subcategories_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appCategories_subcategories_getToManyRelated"]>;
  AppCategoriesSubcategoriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appCategories_subcategories_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appCategories_subcategories_getToManyRelationship"]>;
}

export const AppStoreFullApiAppCategoriesGeneratedFunctionNames = [
  "AppCategoriesGetCollection",
  "AppCategoriesGetInstance",
  "AppCategoriesParentGetToOneRelated",
  "AppCategoriesParentGetToOneRelationship",
  "AppCategoriesSubcategoriesGetToManyRelated",
  "AppCategoriesSubcategoriesGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiAppCategoriesGeneratedClient)[];

export function createAppStoreFullApiAppCategoriesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppCategoriesGeneratedClient {
  return {
    AppCategoriesGetCollection: (...args) => callOperation("appCategories_getCollection", ...(args as AppStoreFullApiOperationArgs<"appCategories_getCollection">)),
    AppCategoriesGetInstance: (...args) => callOperation("appCategories_getInstance", ...(args as AppStoreFullApiOperationArgs<"appCategories_getInstance">)),
    AppCategoriesParentGetToOneRelated: (...args) => callOperation("appCategories_parent_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appCategories_parent_getToOneRelated">)),
    AppCategoriesParentGetToOneRelationship: (...args) => callOperation("appCategories_parent_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appCategories_parent_getToOneRelationship">)),
    AppCategoriesSubcategoriesGetToManyRelated: (...args) => callOperation("appCategories_subcategories_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appCategories_subcategories_getToManyRelated">)),
    AppCategoriesSubcategoriesGetToManyRelationship: (...args) => callOperation("appCategories_subcategories_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appCategories_subcategories_getToManyRelationship">)),
  };
}
