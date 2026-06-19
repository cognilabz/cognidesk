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
export const AppStoreFullApiBuildUploadFilesOperationKeys = [
  "buildUploadFiles_createInstance",
  "buildUploadFiles_getInstance",
  "buildUploadFiles_updateInstance"
] as const;
export type AppStoreFullApiBuildUploadFilesOperationKey = typeof AppStoreFullApiBuildUploadFilesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBuildUploadFilesOperationPathParamMap {
  "buildUploadFiles_createInstance": {};
  "buildUploadFiles_getInstance": { "id": AppStoreFullApiPathParamValue };
  "buildUploadFiles_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBuildUploadFilesOperationRequestMap {
  "buildUploadFiles_createInstance": AppStoreFullApiOperationInput<"buildUploadFiles_createInstance">;
  "buildUploadFiles_getInstance": AppStoreFullApiOperationInput<"buildUploadFiles_getInstance">;
  "buildUploadFiles_updateInstance": AppStoreFullApiOperationInput<"buildUploadFiles_updateInstance">;
}

export interface AppStoreFullApiBuildUploadFilesGeneratedClient {
  BuildUploadFilesCreateInstance(...args: AppStoreFullApiOperationArgs<"buildUploadFiles_createInstance">): Promise<AppStoreFullApiOperationResponseMap["buildUploadFiles_createInstance"]>;
  BuildUploadFilesGetInstance(...args: AppStoreFullApiOperationArgs<"buildUploadFiles_getInstance">): Promise<AppStoreFullApiOperationResponseMap["buildUploadFiles_getInstance"]>;
  BuildUploadFilesUpdateInstance(...args: AppStoreFullApiOperationArgs<"buildUploadFiles_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["buildUploadFiles_updateInstance"]>;
}

export const AppStoreFullApiBuildUploadFilesGeneratedFunctionNames = [
  "BuildUploadFilesCreateInstance",
  "BuildUploadFilesGetInstance",
  "BuildUploadFilesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBuildUploadFilesGeneratedClient)[];

export function createAppStoreFullApiBuildUploadFilesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBuildUploadFilesGeneratedClient {
  return {
    BuildUploadFilesCreateInstance: (...args) => callOperation("buildUploadFiles_createInstance", ...(args as AppStoreFullApiOperationArgs<"buildUploadFiles_createInstance">)),
    BuildUploadFilesGetInstance: (...args) => callOperation("buildUploadFiles_getInstance", ...(args as AppStoreFullApiOperationArgs<"buildUploadFiles_getInstance">)),
    BuildUploadFilesUpdateInstance: (...args) => callOperation("buildUploadFiles_updateInstance", ...(args as AppStoreFullApiOperationArgs<"buildUploadFiles_updateInstance">)),
  };
}
