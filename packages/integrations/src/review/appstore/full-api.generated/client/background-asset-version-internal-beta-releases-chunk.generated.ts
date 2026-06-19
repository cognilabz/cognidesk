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
export const AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesOperationKeys = [
  "backgroundAssetVersionInternalBetaReleases_getInstance"
] as const;
export type AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesOperationKey = typeof AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesOperationPathParamMap {
  "backgroundAssetVersionInternalBetaReleases_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesOperationRequestMap {
  "backgroundAssetVersionInternalBetaReleases_getInstance": AppStoreFullApiOperationInput<"backgroundAssetVersionInternalBetaReleases_getInstance">;
}

export interface AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedClient {
  BackgroundAssetVersionInternalBetaReleasesGetInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssetVersionInternalBetaReleases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetVersionInternalBetaReleases_getInstance"]>;
}

export const AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedFunctionNames = [
  "BackgroundAssetVersionInternalBetaReleasesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedClient)[];

export function createAppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBackgroundAssetVersionInternalBetaReleasesGeneratedClient {
  return {
    BackgroundAssetVersionInternalBetaReleasesGetInstance: (...args) => callOperation("backgroundAssetVersionInternalBetaReleases_getInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetVersionInternalBetaReleases_getInstance">)),
  };
}
