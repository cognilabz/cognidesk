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
export const AppStoreFullApiGameCenterLeaderboardEntrySubmissionsOperationKeys = [
  "gameCenterLeaderboardEntrySubmissions_createInstance"
] as const;
export type AppStoreFullApiGameCenterLeaderboardEntrySubmissionsOperationKey = typeof AppStoreFullApiGameCenterLeaderboardEntrySubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardEntrySubmissionsOperationPathParamMap {
  "gameCenterLeaderboardEntrySubmissions_createInstance": {};
}

export interface AppStoreFullApiGameCenterLeaderboardEntrySubmissionsOperationRequestMap {
  "gameCenterLeaderboardEntrySubmissions_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardEntrySubmissions_createInstance">;
}

export interface AppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedClient {
  GameCenterLeaderboardEntrySubmissionsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardEntrySubmissions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardEntrySubmissions_createInstance"]>;
}

export const AppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedFunctionNames = [
  "GameCenterLeaderboardEntrySubmissionsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardEntrySubmissionsGeneratedClient {
  return {
    GameCenterLeaderboardEntrySubmissionsCreateInstance: (...args) => callOperation("gameCenterLeaderboardEntrySubmissions_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardEntrySubmissions_createInstance">)),
  };
}
