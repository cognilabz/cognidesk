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
export const AppStoreFullApiAppScreenshotSetsOperationKeys = [
  "appScreenshotSets_appScreenshots_getToManyRelated",
  "appScreenshotSets_appScreenshots_getToManyRelationship",
  "appScreenshotSets_appScreenshots_replaceToManyRelationship",
  "appScreenshotSets_createInstance",
  "appScreenshotSets_deleteInstance",
  "appScreenshotSets_getInstance"
] as const;
export type AppStoreFullApiAppScreenshotSetsOperationKey = typeof AppStoreFullApiAppScreenshotSetsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppScreenshotSetsOperationPathParamMap {
  "appScreenshotSets_appScreenshots_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appScreenshotSets_appScreenshots_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appScreenshotSets_appScreenshots_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appScreenshotSets_createInstance": {};
  "appScreenshotSets_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appScreenshotSets_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppScreenshotSetsOperationRequestMap {
  "appScreenshotSets_appScreenshots_getToManyRelated": AppStoreFullApiOperationInput<"appScreenshotSets_appScreenshots_getToManyRelated">;
  "appScreenshotSets_appScreenshots_getToManyRelationship": AppStoreFullApiOperationInput<"appScreenshotSets_appScreenshots_getToManyRelationship">;
  "appScreenshotSets_appScreenshots_replaceToManyRelationship": AppStoreFullApiOperationInput<"appScreenshotSets_appScreenshots_replaceToManyRelationship">;
  "appScreenshotSets_createInstance": AppStoreFullApiOperationInput<"appScreenshotSets_createInstance">;
  "appScreenshotSets_deleteInstance": AppStoreFullApiOperationInput<"appScreenshotSets_deleteInstance">;
  "appScreenshotSets_getInstance": AppStoreFullApiOperationInput<"appScreenshotSets_getInstance">;
}

export interface AppStoreFullApiAppScreenshotSetsGeneratedClient {
  AppScreenshotSetsAppScreenshotsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appScreenshotSets_appScreenshots_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appScreenshotSets_appScreenshots_getToManyRelated"]>;
  AppScreenshotSetsAppScreenshotsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appScreenshotSets_appScreenshots_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appScreenshotSets_appScreenshots_getToManyRelationship"]>;
  AppScreenshotSetsAppScreenshotsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"appScreenshotSets_appScreenshots_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appScreenshotSets_appScreenshots_replaceToManyRelationship"]>;
  AppScreenshotSetsCreateInstance(...args: AppStoreFullApiOperationArgs<"appScreenshotSets_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appScreenshotSets_createInstance"]>;
  AppScreenshotSetsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appScreenshotSets_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appScreenshotSets_deleteInstance"]>;
  AppScreenshotSetsGetInstance(...args: AppStoreFullApiOperationArgs<"appScreenshotSets_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appScreenshotSets_getInstance"]>;
}

export const AppStoreFullApiAppScreenshotSetsGeneratedFunctionNames = [
  "AppScreenshotSetsAppScreenshotsGetToManyRelated",
  "AppScreenshotSetsAppScreenshotsGetToManyRelationship",
  "AppScreenshotSetsAppScreenshotsReplaceToManyRelationship",
  "AppScreenshotSetsCreateInstance",
  "AppScreenshotSetsDeleteInstance",
  "AppScreenshotSetsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppScreenshotSetsGeneratedClient)[];

export function createAppStoreFullApiAppScreenshotSetsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppScreenshotSetsGeneratedClient {
  return {
    AppScreenshotSetsAppScreenshotsGetToManyRelated: (...args) => callOperation("appScreenshotSets_appScreenshots_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appScreenshotSets_appScreenshots_getToManyRelated">)),
    AppScreenshotSetsAppScreenshotsGetToManyRelationship: (...args) => callOperation("appScreenshotSets_appScreenshots_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appScreenshotSets_appScreenshots_getToManyRelationship">)),
    AppScreenshotSetsAppScreenshotsReplaceToManyRelationship: (...args) => callOperation("appScreenshotSets_appScreenshots_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appScreenshotSets_appScreenshots_replaceToManyRelationship">)),
    AppScreenshotSetsCreateInstance: (...args) => callOperation("appScreenshotSets_createInstance", ...(args as AppStoreFullApiOperationArgs<"appScreenshotSets_createInstance">)),
    AppScreenshotSetsDeleteInstance: (...args) => callOperation("appScreenshotSets_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appScreenshotSets_deleteInstance">)),
    AppScreenshotSetsGetInstance: (...args) => callOperation("appScreenshotSets_getInstance", ...(args as AppStoreFullApiOperationArgs<"appScreenshotSets_getInstance">)),
  };
}
