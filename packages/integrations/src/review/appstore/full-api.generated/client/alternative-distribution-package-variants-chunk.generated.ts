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
export const AppStoreFullApiAlternativeDistributionPackageVariantsOperationKeys = [
  "alternativeDistributionPackageVariants_getInstance"
] as const;
export type AppStoreFullApiAlternativeDistributionPackageVariantsOperationKey = typeof AppStoreFullApiAlternativeDistributionPackageVariantsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAlternativeDistributionPackageVariantsOperationPathParamMap {
  "alternativeDistributionPackageVariants_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAlternativeDistributionPackageVariantsOperationRequestMap {
  "alternativeDistributionPackageVariants_getInstance": AppStoreFullApiOperationInput<"alternativeDistributionPackageVariants_getInstance">;
}

export interface AppStoreFullApiAlternativeDistributionPackageVariantsGeneratedClient {
  AlternativeDistributionPackageVariantsGetInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackageVariants_getInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackageVariants_getInstance"]>;
}

export const AppStoreFullApiAlternativeDistributionPackageVariantsGeneratedFunctionNames = [
  "AlternativeDistributionPackageVariantsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAlternativeDistributionPackageVariantsGeneratedClient)[];

export function createAppStoreFullApiAlternativeDistributionPackageVariantsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAlternativeDistributionPackageVariantsGeneratedClient {
  return {
    AlternativeDistributionPackageVariantsGetInstance: (...args) => callOperation("alternativeDistributionPackageVariants_getInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackageVariants_getInstance">)),
  };
}
