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
export const AppStoreFullApiBackgroundAssetsOperationKeys = [
  "backgroundAssets_createInstance",
  "backgroundAssets_getInstance",
  "backgroundAssets_updateInstance",
  "backgroundAssets_versions_getToManyRelated",
  "backgroundAssets_versions_getToManyRelationship"
] as const;
export type AppStoreFullApiBackgroundAssetsOperationKey = typeof AppStoreFullApiBackgroundAssetsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBackgroundAssetsOperationPathParamMap {
  "backgroundAssets_createInstance": {};
  "backgroundAssets_getInstance": { "id": AppStoreFullApiPathParamValue };
  "backgroundAssets_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "backgroundAssets_versions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "backgroundAssets_versions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBackgroundAssetsOperationRequestMap {
  "backgroundAssets_createInstance": AppStoreFullApiOperationInput<"backgroundAssets_createInstance">;
  "backgroundAssets_getInstance": AppStoreFullApiOperationInput<"backgroundAssets_getInstance">;
  "backgroundAssets_updateInstance": AppStoreFullApiOperationInput<"backgroundAssets_updateInstance">;
  "backgroundAssets_versions_getToManyRelated": AppStoreFullApiOperationInput<"backgroundAssets_versions_getToManyRelated">;
  "backgroundAssets_versions_getToManyRelationship": AppStoreFullApiOperationInput<"backgroundAssets_versions_getToManyRelationship">;
}

export interface AppStoreFullApiBackgroundAssetsGeneratedClient {
  BackgroundAssetsCreateInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssets_createInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssets_createInstance"]>;
  BackgroundAssetsGetInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssets_getInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssets_getInstance"]>;
  BackgroundAssetsUpdateInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssets_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssets_updateInstance"]>;
  BackgroundAssetsVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"backgroundAssets_versions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssets_versions_getToManyRelated"]>;
  BackgroundAssetsVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"backgroundAssets_versions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssets_versions_getToManyRelationship"]>;
}

export const AppStoreFullApiBackgroundAssetsGeneratedFunctionNames = [
  "BackgroundAssetsCreateInstance",
  "BackgroundAssetsGetInstance",
  "BackgroundAssetsUpdateInstance",
  "BackgroundAssetsVersionsGetToManyRelated",
  "BackgroundAssetsVersionsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiBackgroundAssetsGeneratedClient)[];

export function createAppStoreFullApiBackgroundAssetsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBackgroundAssetsGeneratedClient {
  return {
    BackgroundAssetsCreateInstance: (...args) => callOperation("backgroundAssets_createInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssets_createInstance">)),
    BackgroundAssetsGetInstance: (...args) => callOperation("backgroundAssets_getInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssets_getInstance">)),
    BackgroundAssetsUpdateInstance: (...args) => callOperation("backgroundAssets_updateInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssets_updateInstance">)),
    BackgroundAssetsVersionsGetToManyRelated: (...args) => callOperation("backgroundAssets_versions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"backgroundAssets_versions_getToManyRelated">)),
    BackgroundAssetsVersionsGetToManyRelationship: (...args) => callOperation("backgroundAssets_versions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"backgroundAssets_versions_getToManyRelationship">)),
  };
}
