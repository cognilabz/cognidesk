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
export const AppStoreFullApiAlternativeDistributionPackageVersionsOperationKeys = [
  "alternativeDistributionPackageVersions_deltas_getToManyRelated",
  "alternativeDistributionPackageVersions_deltas_getToManyRelationship",
  "alternativeDistributionPackageVersions_getInstance",
  "alternativeDistributionPackageVersions_variants_getToManyRelated",
  "alternativeDistributionPackageVersions_variants_getToManyRelationship"
] as const;
export type AppStoreFullApiAlternativeDistributionPackageVersionsOperationKey = typeof AppStoreFullApiAlternativeDistributionPackageVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAlternativeDistributionPackageVersionsOperationPathParamMap {
  "alternativeDistributionPackageVersions_deltas_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "alternativeDistributionPackageVersions_deltas_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "alternativeDistributionPackageVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "alternativeDistributionPackageVersions_variants_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "alternativeDistributionPackageVersions_variants_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAlternativeDistributionPackageVersionsOperationRequestMap {
  "alternativeDistributionPackageVersions_deltas_getToManyRelated": AppStoreFullApiOperationInput<"alternativeDistributionPackageVersions_deltas_getToManyRelated">;
  "alternativeDistributionPackageVersions_deltas_getToManyRelationship": AppStoreFullApiOperationInput<"alternativeDistributionPackageVersions_deltas_getToManyRelationship">;
  "alternativeDistributionPackageVersions_getInstance": AppStoreFullApiOperationInput<"alternativeDistributionPackageVersions_getInstance">;
  "alternativeDistributionPackageVersions_variants_getToManyRelated": AppStoreFullApiOperationInput<"alternativeDistributionPackageVersions_variants_getToManyRelated">;
  "alternativeDistributionPackageVersions_variants_getToManyRelationship": AppStoreFullApiOperationInput<"alternativeDistributionPackageVersions_variants_getToManyRelationship">;
}

export interface AppStoreFullApiAlternativeDistributionPackageVersionsGeneratedClient {
  AlternativeDistributionPackageVersionsDeltasGetToManyRelated(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_deltas_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackageVersions_deltas_getToManyRelated"]>;
  AlternativeDistributionPackageVersionsDeltasGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_deltas_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackageVersions_deltas_getToManyRelationship"]>;
  AlternativeDistributionPackageVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackageVersions_getInstance"]>;
  AlternativeDistributionPackageVersionsVariantsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_variants_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackageVersions_variants_getToManyRelated"]>;
  AlternativeDistributionPackageVersionsVariantsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_variants_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackageVersions_variants_getToManyRelationship"]>;
}

export const AppStoreFullApiAlternativeDistributionPackageVersionsGeneratedFunctionNames = [
  "AlternativeDistributionPackageVersionsDeltasGetToManyRelated",
  "AlternativeDistributionPackageVersionsDeltasGetToManyRelationship",
  "AlternativeDistributionPackageVersionsGetInstance",
  "AlternativeDistributionPackageVersionsVariantsGetToManyRelated",
  "AlternativeDistributionPackageVersionsVariantsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiAlternativeDistributionPackageVersionsGeneratedClient)[];

export function createAppStoreFullApiAlternativeDistributionPackageVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAlternativeDistributionPackageVersionsGeneratedClient {
  return {
    AlternativeDistributionPackageVersionsDeltasGetToManyRelated: (...args) => callOperation("alternativeDistributionPackageVersions_deltas_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_deltas_getToManyRelated">)),
    AlternativeDistributionPackageVersionsDeltasGetToManyRelationship: (...args) => callOperation("alternativeDistributionPackageVersions_deltas_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_deltas_getToManyRelationship">)),
    AlternativeDistributionPackageVersionsGetInstance: (...args) => callOperation("alternativeDistributionPackageVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_getInstance">)),
    AlternativeDistributionPackageVersionsVariantsGetToManyRelated: (...args) => callOperation("alternativeDistributionPackageVersions_variants_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_variants_getToManyRelated">)),
    AlternativeDistributionPackageVersionsVariantsGetToManyRelationship: (...args) => callOperation("alternativeDistributionPackageVersions_variants_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackageVersions_variants_getToManyRelationship">)),
  };
}
