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
export const AppStoreFullApiBackgroundAssetUploadFilesOperationKeys = [
  "backgroundAssetUploadFiles_createInstance",
  "backgroundAssetUploadFiles_getInstance",
  "backgroundAssetUploadFiles_updateInstance"
] as const;
export type AppStoreFullApiBackgroundAssetUploadFilesOperationKey = typeof AppStoreFullApiBackgroundAssetUploadFilesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBackgroundAssetUploadFilesOperationPathParamMap {
  "backgroundAssetUploadFiles_createInstance": {};
  "backgroundAssetUploadFiles_getInstance": { "id": AppStoreFullApiPathParamValue };
  "backgroundAssetUploadFiles_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBackgroundAssetUploadFilesOperationRequestMap {
  "backgroundAssetUploadFiles_createInstance": AppStoreFullApiOperationInput<"backgroundAssetUploadFiles_createInstance">;
  "backgroundAssetUploadFiles_getInstance": AppStoreFullApiOperationInput<"backgroundAssetUploadFiles_getInstance">;
  "backgroundAssetUploadFiles_updateInstance": AppStoreFullApiOperationInput<"backgroundAssetUploadFiles_updateInstance">;
}

export interface AppStoreFullApiBackgroundAssetUploadFilesGeneratedClient {
  BackgroundAssetUploadFilesCreateInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssetUploadFiles_createInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetUploadFiles_createInstance"]>;
  BackgroundAssetUploadFilesGetInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssetUploadFiles_getInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetUploadFiles_getInstance"]>;
  BackgroundAssetUploadFilesUpdateInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssetUploadFiles_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetUploadFiles_updateInstance"]>;
}

export const AppStoreFullApiBackgroundAssetUploadFilesGeneratedFunctionNames = [
  "BackgroundAssetUploadFilesCreateInstance",
  "BackgroundAssetUploadFilesGetInstance",
  "BackgroundAssetUploadFilesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBackgroundAssetUploadFilesGeneratedClient)[];

export function createAppStoreFullApiBackgroundAssetUploadFilesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBackgroundAssetUploadFilesGeneratedClient {
  return {
    BackgroundAssetUploadFilesCreateInstance: (...args) => callOperation("backgroundAssetUploadFiles_createInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetUploadFiles_createInstance">)),
    BackgroundAssetUploadFilesGetInstance: (...args) => callOperation("backgroundAssetUploadFiles_getInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetUploadFiles_getInstance">)),
    BackgroundAssetUploadFilesUpdateInstance: (...args) => callOperation("backgroundAssetUploadFiles_updateInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetUploadFiles_updateInstance">)),
  };
}
