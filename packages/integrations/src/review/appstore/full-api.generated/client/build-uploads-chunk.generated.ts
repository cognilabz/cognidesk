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
export const AppStoreFullApiBuildUploadsOperationKeys = [
  "buildUploads_buildUploadFiles_getToManyRelated",
  "buildUploads_buildUploadFiles_getToManyRelationship",
  "buildUploads_createInstance",
  "buildUploads_deleteInstance",
  "buildUploads_getInstance"
] as const;
export type AppStoreFullApiBuildUploadsOperationKey = typeof AppStoreFullApiBuildUploadsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBuildUploadsOperationPathParamMap {
  "buildUploads_buildUploadFiles_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "buildUploads_buildUploadFiles_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "buildUploads_createInstance": {};
  "buildUploads_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "buildUploads_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBuildUploadsOperationRequestMap {
  "buildUploads_buildUploadFiles_getToManyRelated": AppStoreFullApiOperationInput<"buildUploads_buildUploadFiles_getToManyRelated">;
  "buildUploads_buildUploadFiles_getToManyRelationship": AppStoreFullApiOperationInput<"buildUploads_buildUploadFiles_getToManyRelationship">;
  "buildUploads_createInstance": AppStoreFullApiOperationInput<"buildUploads_createInstance">;
  "buildUploads_deleteInstance": AppStoreFullApiOperationInput<"buildUploads_deleteInstance">;
  "buildUploads_getInstance": AppStoreFullApiOperationInput<"buildUploads_getInstance">;
}

export interface AppStoreFullApiBuildUploadsGeneratedClient {
  BuildUploadsBuildUploadFilesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"buildUploads_buildUploadFiles_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["buildUploads_buildUploadFiles_getToManyRelated"]>;
  BuildUploadsBuildUploadFilesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"buildUploads_buildUploadFiles_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["buildUploads_buildUploadFiles_getToManyRelationship"]>;
  BuildUploadsCreateInstance(...args: AppStoreFullApiOperationArgs<"buildUploads_createInstance">): Promise<AppStoreFullApiOperationResponseMap["buildUploads_createInstance"]>;
  BuildUploadsDeleteInstance(...args: AppStoreFullApiOperationArgs<"buildUploads_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["buildUploads_deleteInstance"]>;
  BuildUploadsGetInstance(...args: AppStoreFullApiOperationArgs<"buildUploads_getInstance">): Promise<AppStoreFullApiOperationResponseMap["buildUploads_getInstance"]>;
}

export const AppStoreFullApiBuildUploadsGeneratedFunctionNames = [
  "BuildUploadsBuildUploadFilesGetToManyRelated",
  "BuildUploadsBuildUploadFilesGetToManyRelationship",
  "BuildUploadsCreateInstance",
  "BuildUploadsDeleteInstance",
  "BuildUploadsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBuildUploadsGeneratedClient)[];

export function createAppStoreFullApiBuildUploadsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBuildUploadsGeneratedClient {
  return {
    BuildUploadsBuildUploadFilesGetToManyRelated: (...args) => callOperation("buildUploads_buildUploadFiles_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"buildUploads_buildUploadFiles_getToManyRelated">)),
    BuildUploadsBuildUploadFilesGetToManyRelationship: (...args) => callOperation("buildUploads_buildUploadFiles_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"buildUploads_buildUploadFiles_getToManyRelationship">)),
    BuildUploadsCreateInstance: (...args) => callOperation("buildUploads_createInstance", ...(args as AppStoreFullApiOperationArgs<"buildUploads_createInstance">)),
    BuildUploadsDeleteInstance: (...args) => callOperation("buildUploads_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"buildUploads_deleteInstance">)),
    BuildUploadsGetInstance: (...args) => callOperation("buildUploads_getInstance", ...(args as AppStoreFullApiOperationArgs<"buildUploads_getInstance">)),
  };
}
