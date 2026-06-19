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
export const AppStoreFullApiAppCustomProductPageLocalizationsOperationKeys = [
  "appCustomProductPageLocalizations_appPreviewSets_getToManyRelated",
  "appCustomProductPageLocalizations_appPreviewSets_getToManyRelationship",
  "appCustomProductPageLocalizations_appScreenshotSets_getToManyRelated",
  "appCustomProductPageLocalizations_appScreenshotSets_getToManyRelationship",
  "appCustomProductPageLocalizations_createInstance",
  "appCustomProductPageLocalizations_deleteInstance",
  "appCustomProductPageLocalizations_getInstance",
  "appCustomProductPageLocalizations_searchKeywords_createToManyRelationship",
  "appCustomProductPageLocalizations_searchKeywords_deleteToManyRelationship",
  "appCustomProductPageLocalizations_searchKeywords_getToManyRelated",
  "appCustomProductPageLocalizations_searchKeywords_getToManyRelationship",
  "appCustomProductPageLocalizations_updateInstance"
] as const;
export type AppStoreFullApiAppCustomProductPageLocalizationsOperationKey = typeof AppStoreFullApiAppCustomProductPageLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppCustomProductPageLocalizationsOperationPathParamMap {
  "appCustomProductPageLocalizations_appPreviewSets_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_appPreviewSets_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_appScreenshotSets_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_appScreenshotSets_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_createInstance": {};
  "appCustomProductPageLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_searchKeywords_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_searchKeywords_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_searchKeywords_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_searchKeywords_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppCustomProductPageLocalizationsOperationRequestMap {
  "appCustomProductPageLocalizations_appPreviewSets_getToManyRelated": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_appPreviewSets_getToManyRelated">;
  "appCustomProductPageLocalizations_appPreviewSets_getToManyRelationship": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_appPreviewSets_getToManyRelationship">;
  "appCustomProductPageLocalizations_appScreenshotSets_getToManyRelated": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_appScreenshotSets_getToManyRelated">;
  "appCustomProductPageLocalizations_appScreenshotSets_getToManyRelationship": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_appScreenshotSets_getToManyRelationship">;
  "appCustomProductPageLocalizations_createInstance": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_createInstance">;
  "appCustomProductPageLocalizations_deleteInstance": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_deleteInstance">;
  "appCustomProductPageLocalizations_getInstance": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_getInstance">;
  "appCustomProductPageLocalizations_searchKeywords_createToManyRelationship": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_searchKeywords_createToManyRelationship">;
  "appCustomProductPageLocalizations_searchKeywords_deleteToManyRelationship": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_searchKeywords_deleteToManyRelationship">;
  "appCustomProductPageLocalizations_searchKeywords_getToManyRelated": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_searchKeywords_getToManyRelated">;
  "appCustomProductPageLocalizations_searchKeywords_getToManyRelationship": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_searchKeywords_getToManyRelationship">;
  "appCustomProductPageLocalizations_updateInstance": AppStoreFullApiOperationInput<"appCustomProductPageLocalizations_updateInstance">;
}

export interface AppStoreFullApiAppCustomProductPageLocalizationsGeneratedClient {
  AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_appPreviewSets_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_appPreviewSets_getToManyRelated"]>;
  AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_appPreviewSets_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_appPreviewSets_getToManyRelationship"]>;
  AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_appScreenshotSets_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_appScreenshotSets_getToManyRelated"]>;
  AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_appScreenshotSets_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_appScreenshotSets_getToManyRelationship"]>;
  AppCustomProductPageLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_createInstance"]>;
  AppCustomProductPageLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_deleteInstance"]>;
  AppCustomProductPageLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_getInstance"]>;
  AppCustomProductPageLocalizationsSearchKeywordsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_searchKeywords_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_searchKeywords_createToManyRelationship"]>;
  AppCustomProductPageLocalizationsSearchKeywordsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_searchKeywords_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_searchKeywords_deleteToManyRelationship"]>;
  AppCustomProductPageLocalizationsSearchKeywordsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_searchKeywords_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_searchKeywords_getToManyRelated"]>;
  AppCustomProductPageLocalizationsSearchKeywordsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_searchKeywords_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_searchKeywords_getToManyRelationship"]>;
  AppCustomProductPageLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageLocalizations_updateInstance"]>;
}

export const AppStoreFullApiAppCustomProductPageLocalizationsGeneratedFunctionNames = [
  "AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated",
  "AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelationship",
  "AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated",
  "AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelationship",
  "AppCustomProductPageLocalizationsCreateInstance",
  "AppCustomProductPageLocalizationsDeleteInstance",
  "AppCustomProductPageLocalizationsGetInstance",
  "AppCustomProductPageLocalizationsSearchKeywordsCreateToManyRelationship",
  "AppCustomProductPageLocalizationsSearchKeywordsDeleteToManyRelationship",
  "AppCustomProductPageLocalizationsSearchKeywordsGetToManyRelated",
  "AppCustomProductPageLocalizationsSearchKeywordsGetToManyRelationship",
  "AppCustomProductPageLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppCustomProductPageLocalizationsGeneratedClient)[];

export function createAppStoreFullApiAppCustomProductPageLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppCustomProductPageLocalizationsGeneratedClient {
  return {
    AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated: (...args) => callOperation("appCustomProductPageLocalizations_appPreviewSets_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_appPreviewSets_getToManyRelated">)),
    AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelationship: (...args) => callOperation("appCustomProductPageLocalizations_appPreviewSets_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_appPreviewSets_getToManyRelationship">)),
    AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated: (...args) => callOperation("appCustomProductPageLocalizations_appScreenshotSets_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_appScreenshotSets_getToManyRelated">)),
    AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelationship: (...args) => callOperation("appCustomProductPageLocalizations_appScreenshotSets_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_appScreenshotSets_getToManyRelationship">)),
    AppCustomProductPageLocalizationsCreateInstance: (...args) => callOperation("appCustomProductPageLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_createInstance">)),
    AppCustomProductPageLocalizationsDeleteInstance: (...args) => callOperation("appCustomProductPageLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_deleteInstance">)),
    AppCustomProductPageLocalizationsGetInstance: (...args) => callOperation("appCustomProductPageLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_getInstance">)),
    AppCustomProductPageLocalizationsSearchKeywordsCreateToManyRelationship: (...args) => callOperation("appCustomProductPageLocalizations_searchKeywords_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_searchKeywords_createToManyRelationship">)),
    AppCustomProductPageLocalizationsSearchKeywordsDeleteToManyRelationship: (...args) => callOperation("appCustomProductPageLocalizations_searchKeywords_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_searchKeywords_deleteToManyRelationship">)),
    AppCustomProductPageLocalizationsSearchKeywordsGetToManyRelated: (...args) => callOperation("appCustomProductPageLocalizations_searchKeywords_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_searchKeywords_getToManyRelated">)),
    AppCustomProductPageLocalizationsSearchKeywordsGetToManyRelationship: (...args) => callOperation("appCustomProductPageLocalizations_searchKeywords_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_searchKeywords_getToManyRelationship">)),
    AppCustomProductPageLocalizationsUpdateInstance: (...args) => callOperation("appCustomProductPageLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageLocalizations_updateInstance">)),
  };
}
