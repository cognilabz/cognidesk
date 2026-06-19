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
export const AppStoreFullApiProfilesOperationKeys = [
  "profiles_bundleId_getToOneRelated",
  "profiles_bundleId_getToOneRelationship",
  "profiles_certificates_getToManyRelated",
  "profiles_certificates_getToManyRelationship",
  "profiles_createInstance",
  "profiles_deleteInstance",
  "profiles_devices_getToManyRelated",
  "profiles_devices_getToManyRelationship",
  "profiles_getCollection",
  "profiles_getInstance"
] as const;
export type AppStoreFullApiProfilesOperationKey = typeof AppStoreFullApiProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiProfilesOperationPathParamMap {
  "profiles_bundleId_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "profiles_bundleId_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "profiles_certificates_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "profiles_certificates_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "profiles_createInstance": {};
  "profiles_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "profiles_devices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "profiles_devices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "profiles_getCollection": {};
  "profiles_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiProfilesOperationRequestMap {
  "profiles_bundleId_getToOneRelated": AppStoreFullApiOperationInput<"profiles_bundleId_getToOneRelated">;
  "profiles_bundleId_getToOneRelationship": AppStoreFullApiOperationInput<"profiles_bundleId_getToOneRelationship">;
  "profiles_certificates_getToManyRelated": AppStoreFullApiOperationInput<"profiles_certificates_getToManyRelated">;
  "profiles_certificates_getToManyRelationship": AppStoreFullApiOperationInput<"profiles_certificates_getToManyRelationship">;
  "profiles_createInstance": AppStoreFullApiOperationInput<"profiles_createInstance">;
  "profiles_deleteInstance": AppStoreFullApiOperationInput<"profiles_deleteInstance">;
  "profiles_devices_getToManyRelated": AppStoreFullApiOperationInput<"profiles_devices_getToManyRelated">;
  "profiles_devices_getToManyRelationship": AppStoreFullApiOperationInput<"profiles_devices_getToManyRelationship">;
  "profiles_getCollection": AppStoreFullApiOperationInput<"profiles_getCollection">;
  "profiles_getInstance": AppStoreFullApiOperationInput<"profiles_getInstance">;
}

export interface AppStoreFullApiProfilesGeneratedClient {
  ProfilesBundleIdGetToOneRelated(...args: AppStoreFullApiOperationArgs<"profiles_bundleId_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["profiles_bundleId_getToOneRelated"]>;
  ProfilesBundleIdGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"profiles_bundleId_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["profiles_bundleId_getToOneRelationship"]>;
  ProfilesCertificatesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"profiles_certificates_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["profiles_certificates_getToManyRelated"]>;
  ProfilesCertificatesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"profiles_certificates_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["profiles_certificates_getToManyRelationship"]>;
  ProfilesCreateInstance(...args: AppStoreFullApiOperationArgs<"profiles_createInstance">): Promise<AppStoreFullApiOperationResponseMap["profiles_createInstance"]>;
  ProfilesDeleteInstance(...args: AppStoreFullApiOperationArgs<"profiles_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["profiles_deleteInstance"]>;
  ProfilesDevicesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"profiles_devices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["profiles_devices_getToManyRelated"]>;
  ProfilesDevicesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"profiles_devices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["profiles_devices_getToManyRelationship"]>;
  ProfilesGetCollection(...args: AppStoreFullApiOperationArgs<"profiles_getCollection">): Promise<AppStoreFullApiOperationResponseMap["profiles_getCollection"]>;
  ProfilesGetInstance(...args: AppStoreFullApiOperationArgs<"profiles_getInstance">): Promise<AppStoreFullApiOperationResponseMap["profiles_getInstance"]>;
}

export const AppStoreFullApiProfilesGeneratedFunctionNames = [
  "ProfilesBundleIdGetToOneRelated",
  "ProfilesBundleIdGetToOneRelationship",
  "ProfilesCertificatesGetToManyRelated",
  "ProfilesCertificatesGetToManyRelationship",
  "ProfilesCreateInstance",
  "ProfilesDeleteInstance",
  "ProfilesDevicesGetToManyRelated",
  "ProfilesDevicesGetToManyRelationship",
  "ProfilesGetCollection",
  "ProfilesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiProfilesGeneratedClient)[];

export function createAppStoreFullApiProfilesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiProfilesGeneratedClient {
  return {
    ProfilesBundleIdGetToOneRelated: (...args) => callOperation("profiles_bundleId_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"profiles_bundleId_getToOneRelated">)),
    ProfilesBundleIdGetToOneRelationship: (...args) => callOperation("profiles_bundleId_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"profiles_bundleId_getToOneRelationship">)),
    ProfilesCertificatesGetToManyRelated: (...args) => callOperation("profiles_certificates_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"profiles_certificates_getToManyRelated">)),
    ProfilesCertificatesGetToManyRelationship: (...args) => callOperation("profiles_certificates_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"profiles_certificates_getToManyRelationship">)),
    ProfilesCreateInstance: (...args) => callOperation("profiles_createInstance", ...(args as AppStoreFullApiOperationArgs<"profiles_createInstance">)),
    ProfilesDeleteInstance: (...args) => callOperation("profiles_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"profiles_deleteInstance">)),
    ProfilesDevicesGetToManyRelated: (...args) => callOperation("profiles_devices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"profiles_devices_getToManyRelated">)),
    ProfilesDevicesGetToManyRelationship: (...args) => callOperation("profiles_devices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"profiles_devices_getToManyRelationship">)),
    ProfilesGetCollection: (...args) => callOperation("profiles_getCollection", ...(args as AppStoreFullApiOperationArgs<"profiles_getCollection">)),
    ProfilesGetInstance: (...args) => callOperation("profiles_getInstance", ...(args as AppStoreFullApiOperationArgs<"profiles_getInstance">)),
  };
}
