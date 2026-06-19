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
export const AppStoreFullApiBuildBundlesOperationKeys = [
  "buildBundles_appClipDomainCacheStatus_getToOneRelated",
  "buildBundles_appClipDomainCacheStatus_getToOneRelationship",
  "buildBundles_appClipDomainDebugStatus_getToOneRelated",
  "buildBundles_appClipDomainDebugStatus_getToOneRelationship",
  "buildBundles_betaAppClipInvocations_getToManyRelated",
  "buildBundles_betaAppClipInvocations_getToManyRelationship",
  "buildBundles_buildBundleFileSizes_getToManyRelated",
  "buildBundles_buildBundleFileSizes_getToManyRelationship"
] as const;
export type AppStoreFullApiBuildBundlesOperationKey = typeof AppStoreFullApiBuildBundlesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBuildBundlesOperationPathParamMap {
  "buildBundles_appClipDomainCacheStatus_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "buildBundles_appClipDomainCacheStatus_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "buildBundles_appClipDomainDebugStatus_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "buildBundles_appClipDomainDebugStatus_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "buildBundles_betaAppClipInvocations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "buildBundles_betaAppClipInvocations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "buildBundles_buildBundleFileSizes_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "buildBundles_buildBundleFileSizes_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBuildBundlesOperationRequestMap {
  "buildBundles_appClipDomainCacheStatus_getToOneRelated": AppStoreFullApiOperationInput<"buildBundles_appClipDomainCacheStatus_getToOneRelated">;
  "buildBundles_appClipDomainCacheStatus_getToOneRelationship": AppStoreFullApiOperationInput<"buildBundles_appClipDomainCacheStatus_getToOneRelationship">;
  "buildBundles_appClipDomainDebugStatus_getToOneRelated": AppStoreFullApiOperationInput<"buildBundles_appClipDomainDebugStatus_getToOneRelated">;
  "buildBundles_appClipDomainDebugStatus_getToOneRelationship": AppStoreFullApiOperationInput<"buildBundles_appClipDomainDebugStatus_getToOneRelationship">;
  "buildBundles_betaAppClipInvocations_getToManyRelated": AppStoreFullApiOperationInput<"buildBundles_betaAppClipInvocations_getToManyRelated">;
  "buildBundles_betaAppClipInvocations_getToManyRelationship": AppStoreFullApiOperationInput<"buildBundles_betaAppClipInvocations_getToManyRelationship">;
  "buildBundles_buildBundleFileSizes_getToManyRelated": AppStoreFullApiOperationInput<"buildBundles_buildBundleFileSizes_getToManyRelated">;
  "buildBundles_buildBundleFileSizes_getToManyRelationship": AppStoreFullApiOperationInput<"buildBundles_buildBundleFileSizes_getToManyRelationship">;
}

export interface AppStoreFullApiBuildBundlesGeneratedClient {
  BuildBundlesAppClipDomainCacheStatusGetToOneRelated(...args: AppStoreFullApiOperationArgs<"buildBundles_appClipDomainCacheStatus_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["buildBundles_appClipDomainCacheStatus_getToOneRelated"]>;
  BuildBundlesAppClipDomainCacheStatusGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"buildBundles_appClipDomainCacheStatus_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["buildBundles_appClipDomainCacheStatus_getToOneRelationship"]>;
  BuildBundlesAppClipDomainDebugStatusGetToOneRelated(...args: AppStoreFullApiOperationArgs<"buildBundles_appClipDomainDebugStatus_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["buildBundles_appClipDomainDebugStatus_getToOneRelated"]>;
  BuildBundlesAppClipDomainDebugStatusGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"buildBundles_appClipDomainDebugStatus_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["buildBundles_appClipDomainDebugStatus_getToOneRelationship"]>;
  BuildBundlesBetaAppClipInvocationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"buildBundles_betaAppClipInvocations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["buildBundles_betaAppClipInvocations_getToManyRelated"]>;
  BuildBundlesBetaAppClipInvocationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"buildBundles_betaAppClipInvocations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["buildBundles_betaAppClipInvocations_getToManyRelationship"]>;
  BuildBundlesBuildBundleFileSizesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"buildBundles_buildBundleFileSizes_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["buildBundles_buildBundleFileSizes_getToManyRelated"]>;
  BuildBundlesBuildBundleFileSizesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"buildBundles_buildBundleFileSizes_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["buildBundles_buildBundleFileSizes_getToManyRelationship"]>;
}

export const AppStoreFullApiBuildBundlesGeneratedFunctionNames = [
  "BuildBundlesAppClipDomainCacheStatusGetToOneRelated",
  "BuildBundlesAppClipDomainCacheStatusGetToOneRelationship",
  "BuildBundlesAppClipDomainDebugStatusGetToOneRelated",
  "BuildBundlesAppClipDomainDebugStatusGetToOneRelationship",
  "BuildBundlesBetaAppClipInvocationsGetToManyRelated",
  "BuildBundlesBetaAppClipInvocationsGetToManyRelationship",
  "BuildBundlesBuildBundleFileSizesGetToManyRelated",
  "BuildBundlesBuildBundleFileSizesGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiBuildBundlesGeneratedClient)[];

export function createAppStoreFullApiBuildBundlesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBuildBundlesGeneratedClient {
  return {
    BuildBundlesAppClipDomainCacheStatusGetToOneRelated: (...args) => callOperation("buildBundles_appClipDomainCacheStatus_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"buildBundles_appClipDomainCacheStatus_getToOneRelated">)),
    BuildBundlesAppClipDomainCacheStatusGetToOneRelationship: (...args) => callOperation("buildBundles_appClipDomainCacheStatus_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"buildBundles_appClipDomainCacheStatus_getToOneRelationship">)),
    BuildBundlesAppClipDomainDebugStatusGetToOneRelated: (...args) => callOperation("buildBundles_appClipDomainDebugStatus_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"buildBundles_appClipDomainDebugStatus_getToOneRelated">)),
    BuildBundlesAppClipDomainDebugStatusGetToOneRelationship: (...args) => callOperation("buildBundles_appClipDomainDebugStatus_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"buildBundles_appClipDomainDebugStatus_getToOneRelationship">)),
    BuildBundlesBetaAppClipInvocationsGetToManyRelated: (...args) => callOperation("buildBundles_betaAppClipInvocations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"buildBundles_betaAppClipInvocations_getToManyRelated">)),
    BuildBundlesBetaAppClipInvocationsGetToManyRelationship: (...args) => callOperation("buildBundles_betaAppClipInvocations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"buildBundles_betaAppClipInvocations_getToManyRelationship">)),
    BuildBundlesBuildBundleFileSizesGetToManyRelated: (...args) => callOperation("buildBundles_buildBundleFileSizes_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"buildBundles_buildBundleFileSizes_getToManyRelated">)),
    BuildBundlesBuildBundleFileSizesGetToManyRelationship: (...args) => callOperation("buildBundles_buildBundleFileSizes_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"buildBundles_buildBundleFileSizes_getToManyRelationship">)),
  };
}
