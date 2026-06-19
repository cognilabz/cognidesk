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
export const AppStoreFullApiCiXcodeVersionsOperationKeys = [
  "ciXcodeVersions_getCollection",
  "ciXcodeVersions_getInstance",
  "ciXcodeVersions_macOsVersions_getToManyRelated",
  "ciXcodeVersions_macOsVersions_getToManyRelationship"
] as const;
export type AppStoreFullApiCiXcodeVersionsOperationKey = typeof AppStoreFullApiCiXcodeVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCiXcodeVersionsOperationPathParamMap {
  "ciXcodeVersions_getCollection": {};
  "ciXcodeVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "ciXcodeVersions_macOsVersions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciXcodeVersions_macOsVersions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCiXcodeVersionsOperationRequestMap {
  "ciXcodeVersions_getCollection": AppStoreFullApiOperationInput<"ciXcodeVersions_getCollection">;
  "ciXcodeVersions_getInstance": AppStoreFullApiOperationInput<"ciXcodeVersions_getInstance">;
  "ciXcodeVersions_macOsVersions_getToManyRelated": AppStoreFullApiOperationInput<"ciXcodeVersions_macOsVersions_getToManyRelated">;
  "ciXcodeVersions_macOsVersions_getToManyRelationship": AppStoreFullApiOperationInput<"ciXcodeVersions_macOsVersions_getToManyRelationship">;
}

export interface AppStoreFullApiCiXcodeVersionsGeneratedClient {
  CiXcodeVersionsGetCollection(...args: AppStoreFullApiOperationArgs<"ciXcodeVersions_getCollection">): Promise<AppStoreFullApiOperationResponseMap["ciXcodeVersions_getCollection"]>;
  CiXcodeVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"ciXcodeVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["ciXcodeVersions_getInstance"]>;
  CiXcodeVersionsMacOsVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciXcodeVersions_macOsVersions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciXcodeVersions_macOsVersions_getToManyRelated"]>;
  CiXcodeVersionsMacOsVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciXcodeVersions_macOsVersions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciXcodeVersions_macOsVersions_getToManyRelationship"]>;
}

export const AppStoreFullApiCiXcodeVersionsGeneratedFunctionNames = [
  "CiXcodeVersionsGetCollection",
  "CiXcodeVersionsGetInstance",
  "CiXcodeVersionsMacOsVersionsGetToManyRelated",
  "CiXcodeVersionsMacOsVersionsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiCiXcodeVersionsGeneratedClient)[];

export function createAppStoreFullApiCiXcodeVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCiXcodeVersionsGeneratedClient {
  return {
    CiXcodeVersionsGetCollection: (...args) => callOperation("ciXcodeVersions_getCollection", ...(args as AppStoreFullApiOperationArgs<"ciXcodeVersions_getCollection">)),
    CiXcodeVersionsGetInstance: (...args) => callOperation("ciXcodeVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"ciXcodeVersions_getInstance">)),
    CiXcodeVersionsMacOsVersionsGetToManyRelated: (...args) => callOperation("ciXcodeVersions_macOsVersions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciXcodeVersions_macOsVersions_getToManyRelated">)),
    CiXcodeVersionsMacOsVersionsGetToManyRelationship: (...args) => callOperation("ciXcodeVersions_macOsVersions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciXcodeVersions_macOsVersions_getToManyRelationship">)),
  };
}
