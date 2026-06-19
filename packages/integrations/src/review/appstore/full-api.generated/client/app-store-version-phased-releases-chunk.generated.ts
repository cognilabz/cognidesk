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
export const AppStoreFullApiAppStoreVersionPhasedReleasesOperationKeys = [
  "appStoreVersionPhasedReleases_createInstance",
  "appStoreVersionPhasedReleases_deleteInstance",
  "appStoreVersionPhasedReleases_updateInstance"
] as const;
export type AppStoreFullApiAppStoreVersionPhasedReleasesOperationKey = typeof AppStoreFullApiAppStoreVersionPhasedReleasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreVersionPhasedReleasesOperationPathParamMap {
  "appStoreVersionPhasedReleases_createInstance": {};
  "appStoreVersionPhasedReleases_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appStoreVersionPhasedReleases_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppStoreVersionPhasedReleasesOperationRequestMap {
  "appStoreVersionPhasedReleases_createInstance": AppStoreFullApiOperationInput<"appStoreVersionPhasedReleases_createInstance">;
  "appStoreVersionPhasedReleases_deleteInstance": AppStoreFullApiOperationInput<"appStoreVersionPhasedReleases_deleteInstance">;
  "appStoreVersionPhasedReleases_updateInstance": AppStoreFullApiOperationInput<"appStoreVersionPhasedReleases_updateInstance">;
}

export interface AppStoreFullApiAppStoreVersionPhasedReleasesGeneratedClient {
  AppStoreVersionPhasedReleasesCreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionPhasedReleases_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionPhasedReleases_createInstance"]>;
  AppStoreVersionPhasedReleasesDeleteInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionPhasedReleases_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionPhasedReleases_deleteInstance"]>;
  AppStoreVersionPhasedReleasesUpdateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionPhasedReleases_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionPhasedReleases_updateInstance"]>;
}

export const AppStoreFullApiAppStoreVersionPhasedReleasesGeneratedFunctionNames = [
  "AppStoreVersionPhasedReleasesCreateInstance",
  "AppStoreVersionPhasedReleasesDeleteInstance",
  "AppStoreVersionPhasedReleasesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreVersionPhasedReleasesGeneratedClient)[];

export function createAppStoreFullApiAppStoreVersionPhasedReleasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreVersionPhasedReleasesGeneratedClient {
  return {
    AppStoreVersionPhasedReleasesCreateInstance: (...args) => callOperation("appStoreVersionPhasedReleases_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionPhasedReleases_createInstance">)),
    AppStoreVersionPhasedReleasesDeleteInstance: (...args) => callOperation("appStoreVersionPhasedReleases_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionPhasedReleases_deleteInstance">)),
    AppStoreVersionPhasedReleasesUpdateInstance: (...args) => callOperation("appStoreVersionPhasedReleases_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionPhasedReleases_updateInstance">)),
  };
}
