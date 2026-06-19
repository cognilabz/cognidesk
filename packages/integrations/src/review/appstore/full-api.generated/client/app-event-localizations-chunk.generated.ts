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
export const AppStoreFullApiAppEventLocalizationsOperationKeys = [
  "appEventLocalizations_appEventScreenshots_getToManyRelated",
  "appEventLocalizations_appEventScreenshots_getToManyRelationship",
  "appEventLocalizations_appEventVideoClips_getToManyRelated",
  "appEventLocalizations_appEventVideoClips_getToManyRelationship",
  "appEventLocalizations_createInstance",
  "appEventLocalizations_deleteInstance",
  "appEventLocalizations_getInstance",
  "appEventLocalizations_updateInstance"
] as const;
export type AppStoreFullApiAppEventLocalizationsOperationKey = typeof AppStoreFullApiAppEventLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppEventLocalizationsOperationPathParamMap {
  "appEventLocalizations_appEventScreenshots_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appEventLocalizations_appEventScreenshots_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appEventLocalizations_appEventVideoClips_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appEventLocalizations_appEventVideoClips_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appEventLocalizations_createInstance": {};
  "appEventLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appEventLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appEventLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppEventLocalizationsOperationRequestMap {
  "appEventLocalizations_appEventScreenshots_getToManyRelated": AppStoreFullApiOperationInput<"appEventLocalizations_appEventScreenshots_getToManyRelated">;
  "appEventLocalizations_appEventScreenshots_getToManyRelationship": AppStoreFullApiOperationInput<"appEventLocalizations_appEventScreenshots_getToManyRelationship">;
  "appEventLocalizations_appEventVideoClips_getToManyRelated": AppStoreFullApiOperationInput<"appEventLocalizations_appEventVideoClips_getToManyRelated">;
  "appEventLocalizations_appEventVideoClips_getToManyRelationship": AppStoreFullApiOperationInput<"appEventLocalizations_appEventVideoClips_getToManyRelationship">;
  "appEventLocalizations_createInstance": AppStoreFullApiOperationInput<"appEventLocalizations_createInstance">;
  "appEventLocalizations_deleteInstance": AppStoreFullApiOperationInput<"appEventLocalizations_deleteInstance">;
  "appEventLocalizations_getInstance": AppStoreFullApiOperationInput<"appEventLocalizations_getInstance">;
  "appEventLocalizations_updateInstance": AppStoreFullApiOperationInput<"appEventLocalizations_updateInstance">;
}

export interface AppStoreFullApiAppEventLocalizationsGeneratedClient {
  AppEventLocalizationsAppEventScreenshotsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appEventLocalizations_appEventScreenshots_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appEventLocalizations_appEventScreenshots_getToManyRelated"]>;
  AppEventLocalizationsAppEventScreenshotsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appEventLocalizations_appEventScreenshots_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appEventLocalizations_appEventScreenshots_getToManyRelationship"]>;
  AppEventLocalizationsAppEventVideoClipsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appEventLocalizations_appEventVideoClips_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appEventLocalizations_appEventVideoClips_getToManyRelated"]>;
  AppEventLocalizationsAppEventVideoClipsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appEventLocalizations_appEventVideoClips_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appEventLocalizations_appEventVideoClips_getToManyRelationship"]>;
  AppEventLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"appEventLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventLocalizations_createInstance"]>;
  AppEventLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appEventLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventLocalizations_deleteInstance"]>;
  AppEventLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"appEventLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventLocalizations_getInstance"]>;
  AppEventLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appEventLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventLocalizations_updateInstance"]>;
}

export const AppStoreFullApiAppEventLocalizationsGeneratedFunctionNames = [
  "AppEventLocalizationsAppEventScreenshotsGetToManyRelated",
  "AppEventLocalizationsAppEventScreenshotsGetToManyRelationship",
  "AppEventLocalizationsAppEventVideoClipsGetToManyRelated",
  "AppEventLocalizationsAppEventVideoClipsGetToManyRelationship",
  "AppEventLocalizationsCreateInstance",
  "AppEventLocalizationsDeleteInstance",
  "AppEventLocalizationsGetInstance",
  "AppEventLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppEventLocalizationsGeneratedClient)[];

export function createAppStoreFullApiAppEventLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppEventLocalizationsGeneratedClient {
  return {
    AppEventLocalizationsAppEventScreenshotsGetToManyRelated: (...args) => callOperation("appEventLocalizations_appEventScreenshots_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appEventLocalizations_appEventScreenshots_getToManyRelated">)),
    AppEventLocalizationsAppEventScreenshotsGetToManyRelationship: (...args) => callOperation("appEventLocalizations_appEventScreenshots_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appEventLocalizations_appEventScreenshots_getToManyRelationship">)),
    AppEventLocalizationsAppEventVideoClipsGetToManyRelated: (...args) => callOperation("appEventLocalizations_appEventVideoClips_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appEventLocalizations_appEventVideoClips_getToManyRelated">)),
    AppEventLocalizationsAppEventVideoClipsGetToManyRelationship: (...args) => callOperation("appEventLocalizations_appEventVideoClips_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appEventLocalizations_appEventVideoClips_getToManyRelationship">)),
    AppEventLocalizationsCreateInstance: (...args) => callOperation("appEventLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"appEventLocalizations_createInstance">)),
    AppEventLocalizationsDeleteInstance: (...args) => callOperation("appEventLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appEventLocalizations_deleteInstance">)),
    AppEventLocalizationsGetInstance: (...args) => callOperation("appEventLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"appEventLocalizations_getInstance">)),
    AppEventLocalizationsUpdateInstance: (...args) => callOperation("appEventLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appEventLocalizations_updateInstance">)),
  };
}
