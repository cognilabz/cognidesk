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
export const AppStoreFullApiGameCenterPlayerAchievementSubmissionsOperationKeys = [
  "gameCenterPlayerAchievementSubmissions_createInstance"
] as const;
export type AppStoreFullApiGameCenterPlayerAchievementSubmissionsOperationKey = typeof AppStoreFullApiGameCenterPlayerAchievementSubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterPlayerAchievementSubmissionsOperationPathParamMap {
  "gameCenterPlayerAchievementSubmissions_createInstance": {};
}

export interface AppStoreFullApiGameCenterPlayerAchievementSubmissionsOperationRequestMap {
  "gameCenterPlayerAchievementSubmissions_createInstance": AppStoreFullApiOperationInput<"gameCenterPlayerAchievementSubmissions_createInstance">;
}

export interface AppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedClient {
  GameCenterPlayerAchievementSubmissionsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterPlayerAchievementSubmissions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterPlayerAchievementSubmissions_createInstance"]>;
}

export const AppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedFunctionNames = [
  "GameCenterPlayerAchievementSubmissionsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedClient)[];

export function createAppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterPlayerAchievementSubmissionsGeneratedClient {
  return {
    GameCenterPlayerAchievementSubmissionsCreateInstance: (...args) => callOperation("gameCenterPlayerAchievementSubmissions_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterPlayerAchievementSubmissions_createInstance">)),
  };
}
