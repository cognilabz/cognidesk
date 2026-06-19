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
export const AppStoreFullApiGameCenterLeaderboardReleasesOperationKeys = [
  "gameCenterLeaderboardReleases_createInstance",
  "gameCenterLeaderboardReleases_deleteInstance",
  "gameCenterLeaderboardReleases_getInstance"
] as const;
export type AppStoreFullApiGameCenterLeaderboardReleasesOperationKey = typeof AppStoreFullApiGameCenterLeaderboardReleasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardReleasesOperationPathParamMap {
  "gameCenterLeaderboardReleases_createInstance": {};
  "gameCenterLeaderboardReleases_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardReleases_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardReleasesOperationRequestMap {
  "gameCenterLeaderboardReleases_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardReleases_createInstance">;
  "gameCenterLeaderboardReleases_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardReleases_deleteInstance">;
  "gameCenterLeaderboardReleases_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardReleases_getInstance">;
}

export interface AppStoreFullApiGameCenterLeaderboardReleasesGeneratedClient {
  GameCenterLeaderboardReleasesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardReleases_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardReleases_createInstance"]>;
  GameCenterLeaderboardReleasesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardReleases_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardReleases_deleteInstance"]>;
  GameCenterLeaderboardReleasesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardReleases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardReleases_getInstance"]>;
}

export const AppStoreFullApiGameCenterLeaderboardReleasesGeneratedFunctionNames = [
  "GameCenterLeaderboardReleasesCreateInstance",
  "GameCenterLeaderboardReleasesDeleteInstance",
  "GameCenterLeaderboardReleasesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardReleasesGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardReleasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardReleasesGeneratedClient {
  return {
    GameCenterLeaderboardReleasesCreateInstance: (...args) => callOperation("gameCenterLeaderboardReleases_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardReleases_createInstance">)),
    GameCenterLeaderboardReleasesDeleteInstance: (...args) => callOperation("gameCenterLeaderboardReleases_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardReleases_deleteInstance">)),
    GameCenterLeaderboardReleasesGetInstance: (...args) => callOperation("gameCenterLeaderboardReleases_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardReleases_getInstance">)),
  };
}
