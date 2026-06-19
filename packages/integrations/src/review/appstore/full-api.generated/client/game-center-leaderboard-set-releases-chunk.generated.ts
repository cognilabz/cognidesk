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
export const AppStoreFullApiGameCenterLeaderboardSetReleasesOperationKeys = [
  "gameCenterLeaderboardSetReleases_createInstance",
  "gameCenterLeaderboardSetReleases_deleteInstance",
  "gameCenterLeaderboardSetReleases_getInstance"
] as const;
export type AppStoreFullApiGameCenterLeaderboardSetReleasesOperationKey = typeof AppStoreFullApiGameCenterLeaderboardSetReleasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardSetReleasesOperationPathParamMap {
  "gameCenterLeaderboardSetReleases_createInstance": {};
  "gameCenterLeaderboardSetReleases_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetReleases_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardSetReleasesOperationRequestMap {
  "gameCenterLeaderboardSetReleases_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetReleases_createInstance">;
  "gameCenterLeaderboardSetReleases_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetReleases_deleteInstance">;
  "gameCenterLeaderboardSetReleases_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetReleases_getInstance">;
}

export interface AppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedClient {
  GameCenterLeaderboardSetReleasesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetReleases_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetReleases_createInstance"]>;
  GameCenterLeaderboardSetReleasesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetReleases_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetReleases_deleteInstance"]>;
  GameCenterLeaderboardSetReleasesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetReleases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetReleases_getInstance"]>;
}

export const AppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedFunctionNames = [
  "GameCenterLeaderboardSetReleasesCreateInstance",
  "GameCenterLeaderboardSetReleasesDeleteInstance",
  "GameCenterLeaderboardSetReleasesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardSetReleasesGeneratedClient {
  return {
    GameCenterLeaderboardSetReleasesCreateInstance: (...args) => callOperation("gameCenterLeaderboardSetReleases_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetReleases_createInstance">)),
    GameCenterLeaderboardSetReleasesDeleteInstance: (...args) => callOperation("gameCenterLeaderboardSetReleases_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetReleases_deleteInstance">)),
    GameCenterLeaderboardSetReleasesGetInstance: (...args) => callOperation("gameCenterLeaderboardSetReleases_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetReleases_getInstance">)),
  };
}
