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
export const AppStoreFullApiCiMacOsVersionsOperationKeys = [
  "ciMacOsVersions_getCollection",
  "ciMacOsVersions_getInstance",
  "ciMacOsVersions_xcodeVersions_getToManyRelated",
  "ciMacOsVersions_xcodeVersions_getToManyRelationship"
] as const;
export type AppStoreFullApiCiMacOsVersionsOperationKey = typeof AppStoreFullApiCiMacOsVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCiMacOsVersionsOperationPathParamMap {
  "ciMacOsVersions_getCollection": {};
  "ciMacOsVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "ciMacOsVersions_xcodeVersions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "ciMacOsVersions_xcodeVersions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCiMacOsVersionsOperationRequestMap {
  "ciMacOsVersions_getCollection": AppStoreFullApiOperationInput<"ciMacOsVersions_getCollection">;
  "ciMacOsVersions_getInstance": AppStoreFullApiOperationInput<"ciMacOsVersions_getInstance">;
  "ciMacOsVersions_xcodeVersions_getToManyRelated": AppStoreFullApiOperationInput<"ciMacOsVersions_xcodeVersions_getToManyRelated">;
  "ciMacOsVersions_xcodeVersions_getToManyRelationship": AppStoreFullApiOperationInput<"ciMacOsVersions_xcodeVersions_getToManyRelationship">;
}

export interface AppStoreFullApiCiMacOsVersionsGeneratedClient {
  CiMacOsVersionsGetCollection(...args: AppStoreFullApiOperationArgs<"ciMacOsVersions_getCollection">): Promise<AppStoreFullApiOperationResponseMap["ciMacOsVersions_getCollection"]>;
  CiMacOsVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"ciMacOsVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["ciMacOsVersions_getInstance"]>;
  CiMacOsVersionsXcodeVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"ciMacOsVersions_xcodeVersions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["ciMacOsVersions_xcodeVersions_getToManyRelated"]>;
  CiMacOsVersionsXcodeVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"ciMacOsVersions_xcodeVersions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["ciMacOsVersions_xcodeVersions_getToManyRelationship"]>;
}

export const AppStoreFullApiCiMacOsVersionsGeneratedFunctionNames = [
  "CiMacOsVersionsGetCollection",
  "CiMacOsVersionsGetInstance",
  "CiMacOsVersionsXcodeVersionsGetToManyRelated",
  "CiMacOsVersionsXcodeVersionsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiCiMacOsVersionsGeneratedClient)[];

export function createAppStoreFullApiCiMacOsVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCiMacOsVersionsGeneratedClient {
  return {
    CiMacOsVersionsGetCollection: (...args) => callOperation("ciMacOsVersions_getCollection", ...(args as AppStoreFullApiOperationArgs<"ciMacOsVersions_getCollection">)),
    CiMacOsVersionsGetInstance: (...args) => callOperation("ciMacOsVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"ciMacOsVersions_getInstance">)),
    CiMacOsVersionsXcodeVersionsGetToManyRelated: (...args) => callOperation("ciMacOsVersions_xcodeVersions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"ciMacOsVersions_xcodeVersions_getToManyRelated">)),
    CiMacOsVersionsXcodeVersionsGetToManyRelationship: (...args) => callOperation("ciMacOsVersions_xcodeVersions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"ciMacOsVersions_xcodeVersions_getToManyRelationship">)),
  };
}
