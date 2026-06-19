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
export const AppStoreFullApiAppStoreVersionLocalizationsOperationKeys = [
  "appStoreVersionLocalizations_appPreviewSets_getToManyRelated",
  "appStoreVersionLocalizations_appPreviewSets_getToManyRelationship",
  "appStoreVersionLocalizations_appScreenshotSets_getToManyRelated",
  "appStoreVersionLocalizations_appScreenshotSets_getToManyRelationship",
  "appStoreVersionLocalizations_createInstance",
  "appStoreVersionLocalizations_deleteInstance",
  "appStoreVersionLocalizations_getInstance",
  "appStoreVersionLocalizations_searchKeywords_createToManyRelationship",
  "appStoreVersionLocalizations_searchKeywords_deleteToManyRelationship",
  "appStoreVersionLocalizations_searchKeywords_getToManyRelated",
  "appStoreVersionLocalizations_searchKeywords_getToManyRelationship",
  "appStoreVersionLocalizations_updateInstance"
] as const;
export type AppStoreFullApiAppStoreVersionLocalizationsOperationKey = typeof AppStoreFullApiAppStoreVersionLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreVersionLocalizationsOperationPathParamMap {
  "appStoreVersionLocalizations_appPreviewSets_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_appPreviewSets_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_appScreenshotSets_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_appScreenshotSets_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_createInstance": {};
  "appStoreVersionLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_searchKeywords_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_searchKeywords_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_searchKeywords_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_searchKeywords_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppStoreVersionLocalizationsOperationRequestMap {
  "appStoreVersionLocalizations_appPreviewSets_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_appPreviewSets_getToManyRelated">;
  "appStoreVersionLocalizations_appPreviewSets_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_appPreviewSets_getToManyRelationship">;
  "appStoreVersionLocalizations_appScreenshotSets_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_appScreenshotSets_getToManyRelated">;
  "appStoreVersionLocalizations_appScreenshotSets_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_appScreenshotSets_getToManyRelationship">;
  "appStoreVersionLocalizations_createInstance": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_createInstance">;
  "appStoreVersionLocalizations_deleteInstance": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_deleteInstance">;
  "appStoreVersionLocalizations_getInstance": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_getInstance">;
  "appStoreVersionLocalizations_searchKeywords_createToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_searchKeywords_createToManyRelationship">;
  "appStoreVersionLocalizations_searchKeywords_deleteToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_searchKeywords_deleteToManyRelationship">;
  "appStoreVersionLocalizations_searchKeywords_getToManyRelated": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_searchKeywords_getToManyRelated">;
  "appStoreVersionLocalizations_searchKeywords_getToManyRelationship": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_searchKeywords_getToManyRelationship">;
  "appStoreVersionLocalizations_updateInstance": AppStoreFullApiOperationInput<"appStoreVersionLocalizations_updateInstance">;
}

export interface AppStoreFullApiAppStoreVersionLocalizationsGeneratedClient {
  AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_appPreviewSets_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_appPreviewSets_getToManyRelated"]>;
  AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_appPreviewSets_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_appPreviewSets_getToManyRelationship"]>;
  AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_appScreenshotSets_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_appScreenshotSets_getToManyRelated"]>;
  AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_appScreenshotSets_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_appScreenshotSets_getToManyRelationship"]>;
  AppStoreVersionLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_createInstance"]>;
  AppStoreVersionLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_deleteInstance"]>;
  AppStoreVersionLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_getInstance"]>;
  AppStoreVersionLocalizationsSearchKeywordsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_searchKeywords_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_searchKeywords_createToManyRelationship"]>;
  AppStoreVersionLocalizationsSearchKeywordsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_searchKeywords_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_searchKeywords_deleteToManyRelationship"]>;
  AppStoreVersionLocalizationsSearchKeywordsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_searchKeywords_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_searchKeywords_getToManyRelated"]>;
  AppStoreVersionLocalizationsSearchKeywordsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_searchKeywords_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_searchKeywords_getToManyRelationship"]>;
  AppStoreVersionLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionLocalizations_updateInstance"]>;
}

export const AppStoreFullApiAppStoreVersionLocalizationsGeneratedFunctionNames = [
  "AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelated",
  "AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelationship",
  "AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated",
  "AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelationship",
  "AppStoreVersionLocalizationsCreateInstance",
  "AppStoreVersionLocalizationsDeleteInstance",
  "AppStoreVersionLocalizationsGetInstance",
  "AppStoreVersionLocalizationsSearchKeywordsCreateToManyRelationship",
  "AppStoreVersionLocalizationsSearchKeywordsDeleteToManyRelationship",
  "AppStoreVersionLocalizationsSearchKeywordsGetToManyRelated",
  "AppStoreVersionLocalizationsSearchKeywordsGetToManyRelationship",
  "AppStoreVersionLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreVersionLocalizationsGeneratedClient)[];

export function createAppStoreFullApiAppStoreVersionLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreVersionLocalizationsGeneratedClient {
  return {
    AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelated: (...args) => callOperation("appStoreVersionLocalizations_appPreviewSets_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_appPreviewSets_getToManyRelated">)),
    AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelationship: (...args) => callOperation("appStoreVersionLocalizations_appPreviewSets_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_appPreviewSets_getToManyRelationship">)),
    AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated: (...args) => callOperation("appStoreVersionLocalizations_appScreenshotSets_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_appScreenshotSets_getToManyRelated">)),
    AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelationship: (...args) => callOperation("appStoreVersionLocalizations_appScreenshotSets_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_appScreenshotSets_getToManyRelationship">)),
    AppStoreVersionLocalizationsCreateInstance: (...args) => callOperation("appStoreVersionLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_createInstance">)),
    AppStoreVersionLocalizationsDeleteInstance: (...args) => callOperation("appStoreVersionLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_deleteInstance">)),
    AppStoreVersionLocalizationsGetInstance: (...args) => callOperation("appStoreVersionLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_getInstance">)),
    AppStoreVersionLocalizationsSearchKeywordsCreateToManyRelationship: (...args) => callOperation("appStoreVersionLocalizations_searchKeywords_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_searchKeywords_createToManyRelationship">)),
    AppStoreVersionLocalizationsSearchKeywordsDeleteToManyRelationship: (...args) => callOperation("appStoreVersionLocalizations_searchKeywords_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_searchKeywords_deleteToManyRelationship">)),
    AppStoreVersionLocalizationsSearchKeywordsGetToManyRelated: (...args) => callOperation("appStoreVersionLocalizations_searchKeywords_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_searchKeywords_getToManyRelated">)),
    AppStoreVersionLocalizationsSearchKeywordsGetToManyRelationship: (...args) => callOperation("appStoreVersionLocalizations_searchKeywords_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_searchKeywords_getToManyRelationship">)),
    AppStoreVersionLocalizationsUpdateInstance: (...args) => callOperation("appStoreVersionLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionLocalizations_updateInstance">)),
  };
}
