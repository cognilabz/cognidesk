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
export const AppStoreFullApiBackgroundAssetVersionAppStoreReleasesOperationKeys = [
  "backgroundAssetVersionAppStoreReleases_getInstance"
] as const;
export type AppStoreFullApiBackgroundAssetVersionAppStoreReleasesOperationKey = typeof AppStoreFullApiBackgroundAssetVersionAppStoreReleasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBackgroundAssetVersionAppStoreReleasesOperationPathParamMap {
  "backgroundAssetVersionAppStoreReleases_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBackgroundAssetVersionAppStoreReleasesOperationRequestMap {
  "backgroundAssetVersionAppStoreReleases_getInstance": AppStoreFullApiOperationInput<"backgroundAssetVersionAppStoreReleases_getInstance">;
}

export interface AppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedClient {
  BackgroundAssetVersionAppStoreReleasesGetInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssetVersionAppStoreReleases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetVersionAppStoreReleases_getInstance"]>;
}

export const AppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedFunctionNames = [
  "BackgroundAssetVersionAppStoreReleasesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedClient)[];

export function createAppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBackgroundAssetVersionAppStoreReleasesGeneratedClient {
  return {
    BackgroundAssetVersionAppStoreReleasesGetInstance: (...args) => callOperation("backgroundAssetVersionAppStoreReleases_getInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetVersionAppStoreReleases_getInstance">)),
  };
}
