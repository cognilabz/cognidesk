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
export const AppStoreFullApiAppCustomProductPageVersionsOperationKeys = [
  "appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelated",
  "appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelationship",
  "appCustomProductPageVersions_createInstance",
  "appCustomProductPageVersions_getInstance",
  "appCustomProductPageVersions_updateInstance"
] as const;
export type AppStoreFullApiAppCustomProductPageVersionsOperationKey = typeof AppStoreFullApiAppCustomProductPageVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppCustomProductPageVersionsOperationPathParamMap {
  "appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageVersions_createInstance": {};
  "appCustomProductPageVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPageVersions_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppCustomProductPageVersionsOperationRequestMap {
  "appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelated">;
  "appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelationship">;
  "appCustomProductPageVersions_createInstance": AppStoreFullApiOperationInput<"appCustomProductPageVersions_createInstance">;
  "appCustomProductPageVersions_getInstance": AppStoreFullApiOperationInput<"appCustomProductPageVersions_getInstance">;
  "appCustomProductPageVersions_updateInstance": AppStoreFullApiOperationInput<"appCustomProductPageVersions_updateInstance">;
}

export interface AppStoreFullApiAppCustomProductPageVersionsGeneratedClient {
  AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelated"]>;
  AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelationship"]>;
  AppCustomProductPageVersionsCreateInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPageVersions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageVersions_createInstance"]>;
  AppCustomProductPageVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPageVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageVersions_getInstance"]>;
  AppCustomProductPageVersionsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPageVersions_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPageVersions_updateInstance"]>;
}

export const AppStoreFullApiAppCustomProductPageVersionsGeneratedFunctionNames = [
  "AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated",
  "AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelationship",
  "AppCustomProductPageVersionsCreateInstance",
  "AppCustomProductPageVersionsGetInstance",
  "AppCustomProductPageVersionsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppCustomProductPageVersionsGeneratedClient)[];

export function createAppStoreFullApiAppCustomProductPageVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppCustomProductPageVersionsGeneratedClient {
  return {
    AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated: (...args) => callOperation("appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelated">)),
    AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelationship: (...args) => callOperation("appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageVersions_appCustomProductPageLocalizations_getToManyRelationship">)),
    AppCustomProductPageVersionsCreateInstance: (...args) => callOperation("appCustomProductPageVersions_createInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageVersions_createInstance">)),
    AppCustomProductPageVersionsGetInstance: (...args) => callOperation("appCustomProductPageVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageVersions_getInstance">)),
    AppCustomProductPageVersionsUpdateInstance: (...args) => callOperation("appCustomProductPageVersions_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPageVersions_updateInstance">)),
  };
}
