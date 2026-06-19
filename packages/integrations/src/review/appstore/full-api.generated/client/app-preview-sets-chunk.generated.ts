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
export const AppStoreFullApiAppPreviewSetsOperationKeys = [
  "appPreviewSets_appPreviews_getToManyRelated",
  "appPreviewSets_appPreviews_getToManyRelationship",
  "appPreviewSets_appPreviews_replaceToManyRelationship",
  "appPreviewSets_createInstance",
  "appPreviewSets_deleteInstance",
  "appPreviewSets_getInstance"
] as const;
export type AppStoreFullApiAppPreviewSetsOperationKey = typeof AppStoreFullApiAppPreviewSetsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppPreviewSetsOperationPathParamMap {
  "appPreviewSets_appPreviews_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appPreviewSets_appPreviews_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appPreviewSets_appPreviews_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appPreviewSets_createInstance": {};
  "appPreviewSets_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appPreviewSets_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppPreviewSetsOperationRequestMap {
  "appPreviewSets_appPreviews_getToManyRelated": AppStoreFullApiOperationInput<"appPreviewSets_appPreviews_getToManyRelated">;
  "appPreviewSets_appPreviews_getToManyRelationship": AppStoreFullApiOperationInput<"appPreviewSets_appPreviews_getToManyRelationship">;
  "appPreviewSets_appPreviews_replaceToManyRelationship": AppStoreFullApiOperationInput<"appPreviewSets_appPreviews_replaceToManyRelationship">;
  "appPreviewSets_createInstance": AppStoreFullApiOperationInput<"appPreviewSets_createInstance">;
  "appPreviewSets_deleteInstance": AppStoreFullApiOperationInput<"appPreviewSets_deleteInstance">;
  "appPreviewSets_getInstance": AppStoreFullApiOperationInput<"appPreviewSets_getInstance">;
}

export interface AppStoreFullApiAppPreviewSetsGeneratedClient {
  AppPreviewSetsAppPreviewsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appPreviewSets_appPreviews_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appPreviewSets_appPreviews_getToManyRelated"]>;
  AppPreviewSetsAppPreviewsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appPreviewSets_appPreviews_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appPreviewSets_appPreviews_getToManyRelationship"]>;
  AppPreviewSetsAppPreviewsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"appPreviewSets_appPreviews_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appPreviewSets_appPreviews_replaceToManyRelationship"]>;
  AppPreviewSetsCreateInstance(...args: AppStoreFullApiOperationArgs<"appPreviewSets_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appPreviewSets_createInstance"]>;
  AppPreviewSetsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appPreviewSets_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appPreviewSets_deleteInstance"]>;
  AppPreviewSetsGetInstance(...args: AppStoreFullApiOperationArgs<"appPreviewSets_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appPreviewSets_getInstance"]>;
}

export const AppStoreFullApiAppPreviewSetsGeneratedFunctionNames = [
  "AppPreviewSetsAppPreviewsGetToManyRelated",
  "AppPreviewSetsAppPreviewsGetToManyRelationship",
  "AppPreviewSetsAppPreviewsReplaceToManyRelationship",
  "AppPreviewSetsCreateInstance",
  "AppPreviewSetsDeleteInstance",
  "AppPreviewSetsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppPreviewSetsGeneratedClient)[];

export function createAppStoreFullApiAppPreviewSetsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppPreviewSetsGeneratedClient {
  return {
    AppPreviewSetsAppPreviewsGetToManyRelated: (...args) => callOperation("appPreviewSets_appPreviews_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appPreviewSets_appPreviews_getToManyRelated">)),
    AppPreviewSetsAppPreviewsGetToManyRelationship: (...args) => callOperation("appPreviewSets_appPreviews_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appPreviewSets_appPreviews_getToManyRelationship">)),
    AppPreviewSetsAppPreviewsReplaceToManyRelationship: (...args) => callOperation("appPreviewSets_appPreviews_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appPreviewSets_appPreviews_replaceToManyRelationship">)),
    AppPreviewSetsCreateInstance: (...args) => callOperation("appPreviewSets_createInstance", ...(args as AppStoreFullApiOperationArgs<"appPreviewSets_createInstance">)),
    AppPreviewSetsDeleteInstance: (...args) => callOperation("appPreviewSets_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appPreviewSets_deleteInstance">)),
    AppPreviewSetsGetInstance: (...args) => callOperation("appPreviewSets_getInstance", ...(args as AppStoreFullApiOperationArgs<"appPreviewSets_getInstance">)),
  };
}
