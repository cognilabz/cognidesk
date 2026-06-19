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
export const AppStoreFullApiAppTagsOperationKeys = [
  "appTags_territories_getToManyRelated",
  "appTags_territories_getToManyRelationship",
  "appTags_updateInstance"
] as const;
export type AppStoreFullApiAppTagsOperationKey = typeof AppStoreFullApiAppTagsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppTagsOperationPathParamMap {
  "appTags_territories_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appTags_territories_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appTags_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppTagsOperationRequestMap {
  "appTags_territories_getToManyRelated": AppStoreFullApiOperationInput<"appTags_territories_getToManyRelated">;
  "appTags_territories_getToManyRelationship": AppStoreFullApiOperationInput<"appTags_territories_getToManyRelationship">;
  "appTags_updateInstance": AppStoreFullApiOperationInput<"appTags_updateInstance">;
}

export interface AppStoreFullApiAppTagsGeneratedClient {
  AppTagsTerritoriesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appTags_territories_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appTags_territories_getToManyRelated"]>;
  AppTagsTerritoriesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appTags_territories_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appTags_territories_getToManyRelationship"]>;
  AppTagsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appTags_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appTags_updateInstance"]>;
}

export const AppStoreFullApiAppTagsGeneratedFunctionNames = [
  "AppTagsTerritoriesGetToManyRelated",
  "AppTagsTerritoriesGetToManyRelationship",
  "AppTagsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppTagsGeneratedClient)[];

export function createAppStoreFullApiAppTagsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppTagsGeneratedClient {
  return {
    AppTagsTerritoriesGetToManyRelated: (...args) => callOperation("appTags_territories_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appTags_territories_getToManyRelated">)),
    AppTagsTerritoriesGetToManyRelationship: (...args) => callOperation("appTags_territories_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appTags_territories_getToManyRelationship">)),
    AppTagsUpdateInstance: (...args) => callOperation("appTags_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appTags_updateInstance">)),
  };
}
