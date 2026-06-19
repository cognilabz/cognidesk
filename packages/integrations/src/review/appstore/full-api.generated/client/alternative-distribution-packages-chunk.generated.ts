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
export const AppStoreFullApiAlternativeDistributionPackagesOperationKeys = [
  "alternativeDistributionPackages_createInstance",
  "alternativeDistributionPackages_getInstance",
  "alternativeDistributionPackages_versions_getToManyRelated",
  "alternativeDistributionPackages_versions_getToManyRelationship"
] as const;
export type AppStoreFullApiAlternativeDistributionPackagesOperationKey = typeof AppStoreFullApiAlternativeDistributionPackagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAlternativeDistributionPackagesOperationPathParamMap {
  "alternativeDistributionPackages_createInstance": {};
  "alternativeDistributionPackages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "alternativeDistributionPackages_versions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "alternativeDistributionPackages_versions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAlternativeDistributionPackagesOperationRequestMap {
  "alternativeDistributionPackages_createInstance": AppStoreFullApiOperationInput<"alternativeDistributionPackages_createInstance">;
  "alternativeDistributionPackages_getInstance": AppStoreFullApiOperationInput<"alternativeDistributionPackages_getInstance">;
  "alternativeDistributionPackages_versions_getToManyRelated": AppStoreFullApiOperationInput<"alternativeDistributionPackages_versions_getToManyRelated">;
  "alternativeDistributionPackages_versions_getToManyRelationship": AppStoreFullApiOperationInput<"alternativeDistributionPackages_versions_getToManyRelationship">;
}

export interface AppStoreFullApiAlternativeDistributionPackagesGeneratedClient {
  AlternativeDistributionPackagesCreateInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackages_createInstance"]>;
  AlternativeDistributionPackagesGetInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackages_getInstance"]>;
  AlternativeDistributionPackagesVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackages_versions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackages_versions_getToManyRelated"]>;
  AlternativeDistributionPackagesVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackages_versions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackages_versions_getToManyRelationship"]>;
}

export const AppStoreFullApiAlternativeDistributionPackagesGeneratedFunctionNames = [
  "AlternativeDistributionPackagesCreateInstance",
  "AlternativeDistributionPackagesGetInstance",
  "AlternativeDistributionPackagesVersionsGetToManyRelated",
  "AlternativeDistributionPackagesVersionsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiAlternativeDistributionPackagesGeneratedClient)[];

export function createAppStoreFullApiAlternativeDistributionPackagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAlternativeDistributionPackagesGeneratedClient {
  return {
    AlternativeDistributionPackagesCreateInstance: (...args) => callOperation("alternativeDistributionPackages_createInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackages_createInstance">)),
    AlternativeDistributionPackagesGetInstance: (...args) => callOperation("alternativeDistributionPackages_getInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackages_getInstance">)),
    AlternativeDistributionPackagesVersionsGetToManyRelated: (...args) => callOperation("alternativeDistributionPackages_versions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackages_versions_getToManyRelated">)),
    AlternativeDistributionPackagesVersionsGetToManyRelationship: (...args) => callOperation("alternativeDistributionPackages_versions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackages_versions_getToManyRelationship">)),
  };
}
