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
export const AppStoreFullApiBuildBetaDetailsOperationKeys = [
  "buildBetaDetails_build_getToOneRelated",
  "buildBetaDetails_build_getToOneRelationship",
  "buildBetaDetails_getCollection",
  "buildBetaDetails_getInstance",
  "buildBetaDetails_updateInstance"
] as const;
export type AppStoreFullApiBuildBetaDetailsOperationKey = typeof AppStoreFullApiBuildBetaDetailsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBuildBetaDetailsOperationPathParamMap {
  "buildBetaDetails_build_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "buildBetaDetails_build_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "buildBetaDetails_getCollection": {};
  "buildBetaDetails_getInstance": { "id": AppStoreFullApiPathParamValue };
  "buildBetaDetails_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBuildBetaDetailsOperationRequestMap {
  "buildBetaDetails_build_getToOneRelated": AppStoreFullApiOperationInput<"buildBetaDetails_build_getToOneRelated">;
  "buildBetaDetails_build_getToOneRelationship": AppStoreFullApiOperationInput<"buildBetaDetails_build_getToOneRelationship">;
  "buildBetaDetails_getCollection": AppStoreFullApiOperationInput<"buildBetaDetails_getCollection">;
  "buildBetaDetails_getInstance": AppStoreFullApiOperationInput<"buildBetaDetails_getInstance">;
  "buildBetaDetails_updateInstance": AppStoreFullApiOperationInput<"buildBetaDetails_updateInstance">;
}

export interface AppStoreFullApiBuildBetaDetailsGeneratedClient {
  BuildBetaDetailsBuildGetToOneRelated(...args: AppStoreFullApiOperationArgs<"buildBetaDetails_build_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["buildBetaDetails_build_getToOneRelated"]>;
  BuildBetaDetailsBuildGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"buildBetaDetails_build_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["buildBetaDetails_build_getToOneRelationship"]>;
  BuildBetaDetailsGetCollection(...args: AppStoreFullApiOperationArgs<"buildBetaDetails_getCollection">): Promise<AppStoreFullApiOperationResponseMap["buildBetaDetails_getCollection"]>;
  BuildBetaDetailsGetInstance(...args: AppStoreFullApiOperationArgs<"buildBetaDetails_getInstance">): Promise<AppStoreFullApiOperationResponseMap["buildBetaDetails_getInstance"]>;
  BuildBetaDetailsUpdateInstance(...args: AppStoreFullApiOperationArgs<"buildBetaDetails_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["buildBetaDetails_updateInstance"]>;
}

export const AppStoreFullApiBuildBetaDetailsGeneratedFunctionNames = [
  "BuildBetaDetailsBuildGetToOneRelated",
  "BuildBetaDetailsBuildGetToOneRelationship",
  "BuildBetaDetailsGetCollection",
  "BuildBetaDetailsGetInstance",
  "BuildBetaDetailsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBuildBetaDetailsGeneratedClient)[];

export function createAppStoreFullApiBuildBetaDetailsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBuildBetaDetailsGeneratedClient {
  return {
    BuildBetaDetailsBuildGetToOneRelated: (...args) => callOperation("buildBetaDetails_build_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"buildBetaDetails_build_getToOneRelated">)),
    BuildBetaDetailsBuildGetToOneRelationship: (...args) => callOperation("buildBetaDetails_build_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"buildBetaDetails_build_getToOneRelationship">)),
    BuildBetaDetailsGetCollection: (...args) => callOperation("buildBetaDetails_getCollection", ...(args as AppStoreFullApiOperationArgs<"buildBetaDetails_getCollection">)),
    BuildBetaDetailsGetInstance: (...args) => callOperation("buildBetaDetails_getInstance", ...(args as AppStoreFullApiOperationArgs<"buildBetaDetails_getInstance">)),
    BuildBetaDetailsUpdateInstance: (...args) => callOperation("buildBetaDetails_updateInstance", ...(args as AppStoreFullApiOperationArgs<"buildBetaDetails_updateInstance">)),
  };
}
