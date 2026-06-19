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
export const AppStoreFullApiBackgroundAssetVersionsOperationKeys = [
  "backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated",
  "backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelationship",
  "backgroundAssetVersions_createInstance",
  "backgroundAssetVersions_getInstance"
] as const;
export type AppStoreFullApiBackgroundAssetVersionsOperationKey = typeof AppStoreFullApiBackgroundAssetVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBackgroundAssetVersionsOperationPathParamMap {
  "backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "backgroundAssetVersions_createInstance": {};
  "backgroundAssetVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBackgroundAssetVersionsOperationRequestMap {
  "backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated": AppStoreFullApiOperationInput<"backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated">;
  "backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelationship": AppStoreFullApiOperationInput<"backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelationship">;
  "backgroundAssetVersions_createInstance": AppStoreFullApiOperationInput<"backgroundAssetVersions_createInstance">;
  "backgroundAssetVersions_getInstance": AppStoreFullApiOperationInput<"backgroundAssetVersions_getInstance">;
}

export interface AppStoreFullApiBackgroundAssetVersionsGeneratedClient {
  BackgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated"]>;
  BackgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelationship"]>;
  BackgroundAssetVersionsCreateInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssetVersions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetVersions_createInstance"]>;
  BackgroundAssetVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssetVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetVersions_getInstance"]>;
}

export const AppStoreFullApiBackgroundAssetVersionsGeneratedFunctionNames = [
  "BackgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelated",
  "BackgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelationship",
  "BackgroundAssetVersionsCreateInstance",
  "BackgroundAssetVersionsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBackgroundAssetVersionsGeneratedClient)[];

export function createAppStoreFullApiBackgroundAssetVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBackgroundAssetVersionsGeneratedClient {
  return {
    BackgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelated: (...args) => callOperation("backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelated">)),
    BackgroundAssetVersionsBackgroundAssetUploadFilesGetToManyRelationship: (...args) => callOperation("backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetVersions_backgroundAssetUploadFiles_getToManyRelationship">)),
    BackgroundAssetVersionsCreateInstance: (...args) => callOperation("backgroundAssetVersions_createInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetVersions_createInstance">)),
    BackgroundAssetVersionsGetInstance: (...args) => callOperation("backgroundAssetVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetVersions_getInstance">)),
  };
}
