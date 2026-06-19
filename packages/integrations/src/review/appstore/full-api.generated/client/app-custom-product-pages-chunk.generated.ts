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
export const AppStoreFullApiAppCustomProductPagesOperationKeys = [
  "appCustomProductPages_appCustomProductPageVersions_getToManyRelated",
  "appCustomProductPages_appCustomProductPageVersions_getToManyRelationship",
  "appCustomProductPages_createInstance",
  "appCustomProductPages_deleteInstance",
  "appCustomProductPages_getInstance",
  "appCustomProductPages_updateInstance"
] as const;
export type AppStoreFullApiAppCustomProductPagesOperationKey = typeof AppStoreFullApiAppCustomProductPagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppCustomProductPagesOperationPathParamMap {
  "appCustomProductPages_appCustomProductPageVersions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPages_appCustomProductPageVersions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPages_createInstance": {};
  "appCustomProductPages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appCustomProductPages_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppCustomProductPagesOperationRequestMap {
  "appCustomProductPages_appCustomProductPageVersions_getToManyRelated": AppStoreFullApiOperationInput<"appCustomProductPages_appCustomProductPageVersions_getToManyRelated">;
  "appCustomProductPages_appCustomProductPageVersions_getToManyRelationship": AppStoreFullApiOperationInput<"appCustomProductPages_appCustomProductPageVersions_getToManyRelationship">;
  "appCustomProductPages_createInstance": AppStoreFullApiOperationInput<"appCustomProductPages_createInstance">;
  "appCustomProductPages_deleteInstance": AppStoreFullApiOperationInput<"appCustomProductPages_deleteInstance">;
  "appCustomProductPages_getInstance": AppStoreFullApiOperationInput<"appCustomProductPages_getInstance">;
  "appCustomProductPages_updateInstance": AppStoreFullApiOperationInput<"appCustomProductPages_updateInstance">;
}

export interface AppStoreFullApiAppCustomProductPagesGeneratedClient {
  AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appCustomProductPages_appCustomProductPageVersions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPages_appCustomProductPageVersions_getToManyRelated"]>;
  AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appCustomProductPages_appCustomProductPageVersions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPages_appCustomProductPageVersions_getToManyRelationship"]>;
  AppCustomProductPagesCreateInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPages_createInstance"]>;
  AppCustomProductPagesDeleteInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPages_deleteInstance"]>;
  AppCustomProductPagesGetInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPages_getInstance"]>;
  AppCustomProductPagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"appCustomProductPages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appCustomProductPages_updateInstance"]>;
}

export const AppStoreFullApiAppCustomProductPagesGeneratedFunctionNames = [
  "AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelated",
  "AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelationship",
  "AppCustomProductPagesCreateInstance",
  "AppCustomProductPagesDeleteInstance",
  "AppCustomProductPagesGetInstance",
  "AppCustomProductPagesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppCustomProductPagesGeneratedClient)[];

export function createAppStoreFullApiAppCustomProductPagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppCustomProductPagesGeneratedClient {
  return {
    AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelated: (...args) => callOperation("appCustomProductPages_appCustomProductPageVersions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPages_appCustomProductPageVersions_getToManyRelated">)),
    AppCustomProductPagesAppCustomProductPageVersionsGetToManyRelationship: (...args) => callOperation("appCustomProductPages_appCustomProductPageVersions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPages_appCustomProductPageVersions_getToManyRelationship">)),
    AppCustomProductPagesCreateInstance: (...args) => callOperation("appCustomProductPages_createInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPages_createInstance">)),
    AppCustomProductPagesDeleteInstance: (...args) => callOperation("appCustomProductPages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPages_deleteInstance">)),
    AppCustomProductPagesGetInstance: (...args) => callOperation("appCustomProductPages_getInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPages_getInstance">)),
    AppCustomProductPagesUpdateInstance: (...args) => callOperation("appCustomProductPages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appCustomProductPages_updateInstance">)),
  };
}
