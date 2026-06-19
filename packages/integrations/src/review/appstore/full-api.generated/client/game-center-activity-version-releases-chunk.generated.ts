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
export const AppStoreFullApiGameCenterActivityVersionReleasesOperationKeys = [
  "gameCenterActivityVersionReleases_createInstance",
  "gameCenterActivityVersionReleases_deleteInstance",
  "gameCenterActivityVersionReleases_getInstance"
] as const;
export type AppStoreFullApiGameCenterActivityVersionReleasesOperationKey = typeof AppStoreFullApiGameCenterActivityVersionReleasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterActivityVersionReleasesOperationPathParamMap {
  "gameCenterActivityVersionReleases_createInstance": {};
  "gameCenterActivityVersionReleases_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityVersionReleases_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterActivityVersionReleasesOperationRequestMap {
  "gameCenterActivityVersionReleases_createInstance": AppStoreFullApiOperationInput<"gameCenterActivityVersionReleases_createInstance">;
  "gameCenterActivityVersionReleases_deleteInstance": AppStoreFullApiOperationInput<"gameCenterActivityVersionReleases_deleteInstance">;
  "gameCenterActivityVersionReleases_getInstance": AppStoreFullApiOperationInput<"gameCenterActivityVersionReleases_getInstance">;
}

export interface AppStoreFullApiGameCenterActivityVersionReleasesGeneratedClient {
  GameCenterActivityVersionReleasesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersionReleases_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersionReleases_createInstance"]>;
  GameCenterActivityVersionReleasesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersionReleases_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersionReleases_deleteInstance"]>;
  GameCenterActivityVersionReleasesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersionReleases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersionReleases_getInstance"]>;
}

export const AppStoreFullApiGameCenterActivityVersionReleasesGeneratedFunctionNames = [
  "GameCenterActivityVersionReleasesCreateInstance",
  "GameCenterActivityVersionReleasesDeleteInstance",
  "GameCenterActivityVersionReleasesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterActivityVersionReleasesGeneratedClient)[];

export function createAppStoreFullApiGameCenterActivityVersionReleasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterActivityVersionReleasesGeneratedClient {
  return {
    GameCenterActivityVersionReleasesCreateInstance: (...args) => callOperation("gameCenterActivityVersionReleases_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersionReleases_createInstance">)),
    GameCenterActivityVersionReleasesDeleteInstance: (...args) => callOperation("gameCenterActivityVersionReleases_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersionReleases_deleteInstance">)),
    GameCenterActivityVersionReleasesGetInstance: (...args) => callOperation("gameCenterActivityVersionReleases_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersionReleases_getInstance">)),
  };
}
