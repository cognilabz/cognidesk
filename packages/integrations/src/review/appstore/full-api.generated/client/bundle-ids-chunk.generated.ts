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
export const AppStoreFullApiBundleIdsOperationKeys = [
  "bundleIds_app_getToOneRelated",
  "bundleIds_app_getToOneRelationship",
  "bundleIds_bundleIdCapabilities_getToManyRelated",
  "bundleIds_bundleIdCapabilities_getToManyRelationship",
  "bundleIds_createInstance",
  "bundleIds_deleteInstance",
  "bundleIds_getCollection",
  "bundleIds_getInstance",
  "bundleIds_profiles_getToManyRelated",
  "bundleIds_profiles_getToManyRelationship",
  "bundleIds_updateInstance"
] as const;
export type AppStoreFullApiBundleIdsOperationKey = typeof AppStoreFullApiBundleIdsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBundleIdsOperationPathParamMap {
  "bundleIds_app_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "bundleIds_app_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "bundleIds_bundleIdCapabilities_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "bundleIds_bundleIdCapabilities_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "bundleIds_createInstance": {};
  "bundleIds_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "bundleIds_getCollection": {};
  "bundleIds_getInstance": { "id": AppStoreFullApiPathParamValue };
  "bundleIds_profiles_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "bundleIds_profiles_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "bundleIds_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBundleIdsOperationRequestMap {
  "bundleIds_app_getToOneRelated": AppStoreFullApiOperationInput<"bundleIds_app_getToOneRelated">;
  "bundleIds_app_getToOneRelationship": AppStoreFullApiOperationInput<"bundleIds_app_getToOneRelationship">;
  "bundleIds_bundleIdCapabilities_getToManyRelated": AppStoreFullApiOperationInput<"bundleIds_bundleIdCapabilities_getToManyRelated">;
  "bundleIds_bundleIdCapabilities_getToManyRelationship": AppStoreFullApiOperationInput<"bundleIds_bundleIdCapabilities_getToManyRelationship">;
  "bundleIds_createInstance": AppStoreFullApiOperationInput<"bundleIds_createInstance">;
  "bundleIds_deleteInstance": AppStoreFullApiOperationInput<"bundleIds_deleteInstance">;
  "bundleIds_getCollection": AppStoreFullApiOperationInput<"bundleIds_getCollection">;
  "bundleIds_getInstance": AppStoreFullApiOperationInput<"bundleIds_getInstance">;
  "bundleIds_profiles_getToManyRelated": AppStoreFullApiOperationInput<"bundleIds_profiles_getToManyRelated">;
  "bundleIds_profiles_getToManyRelationship": AppStoreFullApiOperationInput<"bundleIds_profiles_getToManyRelationship">;
  "bundleIds_updateInstance": AppStoreFullApiOperationInput<"bundleIds_updateInstance">;
}

export interface AppStoreFullApiBundleIdsGeneratedClient {
  BundleIdsAppGetToOneRelated(...args: AppStoreFullApiOperationArgs<"bundleIds_app_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_app_getToOneRelated"]>;
  BundleIdsAppGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"bundleIds_app_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_app_getToOneRelationship"]>;
  BundleIdsBundleIdCapabilitiesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"bundleIds_bundleIdCapabilities_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_bundleIdCapabilities_getToManyRelated"]>;
  BundleIdsBundleIdCapabilitiesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"bundleIds_bundleIdCapabilities_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_bundleIdCapabilities_getToManyRelationship"]>;
  BundleIdsCreateInstance(...args: AppStoreFullApiOperationArgs<"bundleIds_createInstance">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_createInstance"]>;
  BundleIdsDeleteInstance(...args: AppStoreFullApiOperationArgs<"bundleIds_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_deleteInstance"]>;
  BundleIdsGetCollection(...args: AppStoreFullApiOperationArgs<"bundleIds_getCollection">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_getCollection"]>;
  BundleIdsGetInstance(...args: AppStoreFullApiOperationArgs<"bundleIds_getInstance">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_getInstance"]>;
  BundleIdsProfilesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"bundleIds_profiles_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_profiles_getToManyRelated"]>;
  BundleIdsProfilesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"bundleIds_profiles_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_profiles_getToManyRelationship"]>;
  BundleIdsUpdateInstance(...args: AppStoreFullApiOperationArgs<"bundleIds_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["bundleIds_updateInstance"]>;
}

export const AppStoreFullApiBundleIdsGeneratedFunctionNames = [
  "BundleIdsAppGetToOneRelated",
  "BundleIdsAppGetToOneRelationship",
  "BundleIdsBundleIdCapabilitiesGetToManyRelated",
  "BundleIdsBundleIdCapabilitiesGetToManyRelationship",
  "BundleIdsCreateInstance",
  "BundleIdsDeleteInstance",
  "BundleIdsGetCollection",
  "BundleIdsGetInstance",
  "BundleIdsProfilesGetToManyRelated",
  "BundleIdsProfilesGetToManyRelationship",
  "BundleIdsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBundleIdsGeneratedClient)[];

export function createAppStoreFullApiBundleIdsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBundleIdsGeneratedClient {
  return {
    BundleIdsAppGetToOneRelated: (...args) => callOperation("bundleIds_app_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"bundleIds_app_getToOneRelated">)),
    BundleIdsAppGetToOneRelationship: (...args) => callOperation("bundleIds_app_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"bundleIds_app_getToOneRelationship">)),
    BundleIdsBundleIdCapabilitiesGetToManyRelated: (...args) => callOperation("bundleIds_bundleIdCapabilities_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"bundleIds_bundleIdCapabilities_getToManyRelated">)),
    BundleIdsBundleIdCapabilitiesGetToManyRelationship: (...args) => callOperation("bundleIds_bundleIdCapabilities_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"bundleIds_bundleIdCapabilities_getToManyRelationship">)),
    BundleIdsCreateInstance: (...args) => callOperation("bundleIds_createInstance", ...(args as AppStoreFullApiOperationArgs<"bundleIds_createInstance">)),
    BundleIdsDeleteInstance: (...args) => callOperation("bundleIds_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"bundleIds_deleteInstance">)),
    BundleIdsGetCollection: (...args) => callOperation("bundleIds_getCollection", ...(args as AppStoreFullApiOperationArgs<"bundleIds_getCollection">)),
    BundleIdsGetInstance: (...args) => callOperation("bundleIds_getInstance", ...(args as AppStoreFullApiOperationArgs<"bundleIds_getInstance">)),
    BundleIdsProfilesGetToManyRelated: (...args) => callOperation("bundleIds_profiles_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"bundleIds_profiles_getToManyRelated">)),
    BundleIdsProfilesGetToManyRelationship: (...args) => callOperation("bundleIds_profiles_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"bundleIds_profiles_getToManyRelationship">)),
    BundleIdsUpdateInstance: (...args) => callOperation("bundleIds_updateInstance", ...(args as AppStoreFullApiOperationArgs<"bundleIds_updateInstance">)),
  };
}
