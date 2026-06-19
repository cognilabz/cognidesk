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
export const AppStoreFullApiAlternativeDistributionPackageDeltasOperationKeys = [
  "alternativeDistributionPackageDeltas_getInstance"
] as const;
export type AppStoreFullApiAlternativeDistributionPackageDeltasOperationKey = typeof AppStoreFullApiAlternativeDistributionPackageDeltasOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAlternativeDistributionPackageDeltasOperationPathParamMap {
  "alternativeDistributionPackageDeltas_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAlternativeDistributionPackageDeltasOperationRequestMap {
  "alternativeDistributionPackageDeltas_getInstance": AppStoreFullApiOperationInput<"alternativeDistributionPackageDeltas_getInstance">;
}

export interface AppStoreFullApiAlternativeDistributionPackageDeltasGeneratedClient {
  AlternativeDistributionPackageDeltasGetInstance(...args: AppStoreFullApiOperationArgs<"alternativeDistributionPackageDeltas_getInstance">): Promise<AppStoreFullApiOperationResponseMap["alternativeDistributionPackageDeltas_getInstance"]>;
}

export const AppStoreFullApiAlternativeDistributionPackageDeltasGeneratedFunctionNames = [
  "AlternativeDistributionPackageDeltasGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAlternativeDistributionPackageDeltasGeneratedClient)[];

export function createAppStoreFullApiAlternativeDistributionPackageDeltasGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAlternativeDistributionPackageDeltasGeneratedClient {
  return {
    AlternativeDistributionPackageDeltasGetInstance: (...args) => callOperation("alternativeDistributionPackageDeltas_getInstance", ...(args as AppStoreFullApiOperationArgs<"alternativeDistributionPackageDeltas_getInstance">)),
  };
}
