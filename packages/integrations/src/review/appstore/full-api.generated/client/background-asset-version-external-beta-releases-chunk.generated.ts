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
export const AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesOperationKeys = [
  "backgroundAssetVersionExternalBetaReleases_getInstance"
] as const;
export type AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesOperationKey = typeof AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesOperationPathParamMap {
  "backgroundAssetVersionExternalBetaReleases_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesOperationRequestMap {
  "backgroundAssetVersionExternalBetaReleases_getInstance": AppStoreFullApiOperationInput<"backgroundAssetVersionExternalBetaReleases_getInstance">;
}

export interface AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedClient {
  BackgroundAssetVersionExternalBetaReleasesGetInstance(...args: AppStoreFullApiOperationArgs<"backgroundAssetVersionExternalBetaReleases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["backgroundAssetVersionExternalBetaReleases_getInstance"]>;
}

export const AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedFunctionNames = [
  "BackgroundAssetVersionExternalBetaReleasesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedClient)[];

export function createAppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBackgroundAssetVersionExternalBetaReleasesGeneratedClient {
  return {
    BackgroundAssetVersionExternalBetaReleasesGetInstance: (...args) => callOperation("backgroundAssetVersionExternalBetaReleases_getInstance", ...(args as AppStoreFullApiOperationArgs<"backgroundAssetVersionExternalBetaReleases_getInstance">)),
  };
}
