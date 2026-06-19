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
export const AppStoreFullApiGameCenterAchievementReleasesOperationKeys = [
  "gameCenterAchievementReleases_createInstance",
  "gameCenterAchievementReleases_deleteInstance",
  "gameCenterAchievementReleases_getInstance"
] as const;
export type AppStoreFullApiGameCenterAchievementReleasesOperationKey = typeof AppStoreFullApiGameCenterAchievementReleasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterAchievementReleasesOperationPathParamMap {
  "gameCenterAchievementReleases_createInstance": {};
  "gameCenterAchievementReleases_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementReleases_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterAchievementReleasesOperationRequestMap {
  "gameCenterAchievementReleases_createInstance": AppStoreFullApiOperationInput<"gameCenterAchievementReleases_createInstance">;
  "gameCenterAchievementReleases_deleteInstance": AppStoreFullApiOperationInput<"gameCenterAchievementReleases_deleteInstance">;
  "gameCenterAchievementReleases_getInstance": AppStoreFullApiOperationInput<"gameCenterAchievementReleases_getInstance">;
}

export interface AppStoreFullApiGameCenterAchievementReleasesGeneratedClient {
  GameCenterAchievementReleasesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementReleases_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementReleases_createInstance"]>;
  GameCenterAchievementReleasesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementReleases_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementReleases_deleteInstance"]>;
  GameCenterAchievementReleasesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementReleases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementReleases_getInstance"]>;
}

export const AppStoreFullApiGameCenterAchievementReleasesGeneratedFunctionNames = [
  "GameCenterAchievementReleasesCreateInstance",
  "GameCenterAchievementReleasesDeleteInstance",
  "GameCenterAchievementReleasesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterAchievementReleasesGeneratedClient)[];

export function createAppStoreFullApiGameCenterAchievementReleasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterAchievementReleasesGeneratedClient {
  return {
    GameCenterAchievementReleasesCreateInstance: (...args) => callOperation("gameCenterAchievementReleases_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementReleases_createInstance">)),
    GameCenterAchievementReleasesDeleteInstance: (...args) => callOperation("gameCenterAchievementReleases_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementReleases_deleteInstance">)),
    GameCenterAchievementReleasesGetInstance: (...args) => callOperation("gameCenterAchievementReleases_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementReleases_getInstance">)),
  };
}
