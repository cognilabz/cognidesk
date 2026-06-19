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
export const AppStoreFullApiPreReleaseVersionsOperationKeys = [
  "preReleaseVersions_app_getToOneRelated",
  "preReleaseVersions_app_getToOneRelationship",
  "preReleaseVersions_builds_getToManyRelated",
  "preReleaseVersions_builds_getToManyRelationship",
  "preReleaseVersions_getCollection",
  "preReleaseVersions_getInstance"
] as const;
export type AppStoreFullApiPreReleaseVersionsOperationKey = typeof AppStoreFullApiPreReleaseVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiPreReleaseVersionsOperationPathParamMap {
  "preReleaseVersions_app_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "preReleaseVersions_app_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "preReleaseVersions_builds_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "preReleaseVersions_builds_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "preReleaseVersions_getCollection": {};
  "preReleaseVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiPreReleaseVersionsOperationRequestMap {
  "preReleaseVersions_app_getToOneRelated": AppStoreFullApiOperationInput<"preReleaseVersions_app_getToOneRelated">;
  "preReleaseVersions_app_getToOneRelationship": AppStoreFullApiOperationInput<"preReleaseVersions_app_getToOneRelationship">;
  "preReleaseVersions_builds_getToManyRelated": AppStoreFullApiOperationInput<"preReleaseVersions_builds_getToManyRelated">;
  "preReleaseVersions_builds_getToManyRelationship": AppStoreFullApiOperationInput<"preReleaseVersions_builds_getToManyRelationship">;
  "preReleaseVersions_getCollection": AppStoreFullApiOperationInput<"preReleaseVersions_getCollection">;
  "preReleaseVersions_getInstance": AppStoreFullApiOperationInput<"preReleaseVersions_getInstance">;
}

export interface AppStoreFullApiPreReleaseVersionsGeneratedClient {
  PreReleaseVersionsAppGetToOneRelated(...args: AppStoreFullApiOperationArgs<"preReleaseVersions_app_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["preReleaseVersions_app_getToOneRelated"]>;
  PreReleaseVersionsAppGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"preReleaseVersions_app_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["preReleaseVersions_app_getToOneRelationship"]>;
  PreReleaseVersionsBuildsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"preReleaseVersions_builds_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["preReleaseVersions_builds_getToManyRelated"]>;
  PreReleaseVersionsBuildsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"preReleaseVersions_builds_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["preReleaseVersions_builds_getToManyRelationship"]>;
  PreReleaseVersionsGetCollection(...args: AppStoreFullApiOperationArgs<"preReleaseVersions_getCollection">): Promise<AppStoreFullApiOperationResponseMap["preReleaseVersions_getCollection"]>;
  PreReleaseVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"preReleaseVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["preReleaseVersions_getInstance"]>;
}

export const AppStoreFullApiPreReleaseVersionsGeneratedFunctionNames = [
  "PreReleaseVersionsAppGetToOneRelated",
  "PreReleaseVersionsAppGetToOneRelationship",
  "PreReleaseVersionsBuildsGetToManyRelated",
  "PreReleaseVersionsBuildsGetToManyRelationship",
  "PreReleaseVersionsGetCollection",
  "PreReleaseVersionsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiPreReleaseVersionsGeneratedClient)[];

export function createAppStoreFullApiPreReleaseVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiPreReleaseVersionsGeneratedClient {
  return {
    PreReleaseVersionsAppGetToOneRelated: (...args) => callOperation("preReleaseVersions_app_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"preReleaseVersions_app_getToOneRelated">)),
    PreReleaseVersionsAppGetToOneRelationship: (...args) => callOperation("preReleaseVersions_app_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"preReleaseVersions_app_getToOneRelationship">)),
    PreReleaseVersionsBuildsGetToManyRelated: (...args) => callOperation("preReleaseVersions_builds_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"preReleaseVersions_builds_getToManyRelated">)),
    PreReleaseVersionsBuildsGetToManyRelationship: (...args) => callOperation("preReleaseVersions_builds_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"preReleaseVersions_builds_getToManyRelationship">)),
    PreReleaseVersionsGetCollection: (...args) => callOperation("preReleaseVersions_getCollection", ...(args as AppStoreFullApiOperationArgs<"preReleaseVersions_getCollection">)),
    PreReleaseVersionsGetInstance: (...args) => callOperation("preReleaseVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"preReleaseVersions_getInstance">)),
  };
}
