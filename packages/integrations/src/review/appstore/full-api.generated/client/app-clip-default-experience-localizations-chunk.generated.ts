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
export const AppStoreFullApiAppClipDefaultExperienceLocalizationsOperationKeys = [
  "appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelated",
  "appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelationship",
  "appClipDefaultExperienceLocalizations_createInstance",
  "appClipDefaultExperienceLocalizations_deleteInstance",
  "appClipDefaultExperienceLocalizations_getInstance",
  "appClipDefaultExperienceLocalizations_updateInstance"
] as const;
export type AppStoreFullApiAppClipDefaultExperienceLocalizationsOperationKey = typeof AppStoreFullApiAppClipDefaultExperienceLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppClipDefaultExperienceLocalizationsOperationPathParamMap {
  "appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperienceLocalizations_createInstance": {};
  "appClipDefaultExperienceLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperienceLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appClipDefaultExperienceLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppClipDefaultExperienceLocalizationsOperationRequestMap {
  "appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelated": AppStoreFullApiOperationInput<"appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelated">;
  "appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelationship": AppStoreFullApiOperationInput<"appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelationship">;
  "appClipDefaultExperienceLocalizations_createInstance": AppStoreFullApiOperationInput<"appClipDefaultExperienceLocalizations_createInstance">;
  "appClipDefaultExperienceLocalizations_deleteInstance": AppStoreFullApiOperationInput<"appClipDefaultExperienceLocalizations_deleteInstance">;
  "appClipDefaultExperienceLocalizations_getInstance": AppStoreFullApiOperationInput<"appClipDefaultExperienceLocalizations_getInstance">;
  "appClipDefaultExperienceLocalizations_updateInstance": AppStoreFullApiOperationInput<"appClipDefaultExperienceLocalizations_updateInstance">;
}

export interface AppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedClient {
  AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelated"]>;
  AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelationship"]>;
  AppClipDefaultExperienceLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperienceLocalizations_createInstance"]>;
  AppClipDefaultExperienceLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperienceLocalizations_deleteInstance"]>;
  AppClipDefaultExperienceLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperienceLocalizations_getInstance"]>;
  AppClipDefaultExperienceLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appClipDefaultExperienceLocalizations_updateInstance"]>;
}

export const AppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedFunctionNames = [
  "AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated",
  "AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelationship",
  "AppClipDefaultExperienceLocalizationsCreateInstance",
  "AppClipDefaultExperienceLocalizationsDeleteInstance",
  "AppClipDefaultExperienceLocalizationsGetInstance",
  "AppClipDefaultExperienceLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedClient)[];

export function createAppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppClipDefaultExperienceLocalizationsGeneratedClient {
  return {
    AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated: (...args) => callOperation("appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelated">)),
    AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelationship: (...args) => callOperation("appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_appClipHeaderImage_getToOneRelationship">)),
    AppClipDefaultExperienceLocalizationsCreateInstance: (...args) => callOperation("appClipDefaultExperienceLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_createInstance">)),
    AppClipDefaultExperienceLocalizationsDeleteInstance: (...args) => callOperation("appClipDefaultExperienceLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_deleteInstance">)),
    AppClipDefaultExperienceLocalizationsGetInstance: (...args) => callOperation("appClipDefaultExperienceLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_getInstance">)),
    AppClipDefaultExperienceLocalizationsUpdateInstance: (...args) => callOperation("appClipDefaultExperienceLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appClipDefaultExperienceLocalizations_updateInstance">)),
  };
}
