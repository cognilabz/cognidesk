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
export const AppStoreFullApiGameCenterMatchmakingTeamsOperationKeys = [
  "gameCenterMatchmakingTeams_createInstance",
  "gameCenterMatchmakingTeams_deleteInstance",
  "gameCenterMatchmakingTeams_updateInstance"
] as const;
export type AppStoreFullApiGameCenterMatchmakingTeamsOperationKey = typeof AppStoreFullApiGameCenterMatchmakingTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterMatchmakingTeamsOperationPathParamMap {
  "gameCenterMatchmakingTeams_createInstance": {};
  "gameCenterMatchmakingTeams_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterMatchmakingTeams_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterMatchmakingTeamsOperationRequestMap {
  "gameCenterMatchmakingTeams_createInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingTeams_createInstance">;
  "gameCenterMatchmakingTeams_deleteInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingTeams_deleteInstance">;
  "gameCenterMatchmakingTeams_updateInstance": AppStoreFullApiOperationInput<"gameCenterMatchmakingTeams_updateInstance">;
}

export interface AppStoreFullApiGameCenterMatchmakingTeamsGeneratedClient {
  GameCenterMatchmakingTeamsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingTeams_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingTeams_createInstance"]>;
  GameCenterMatchmakingTeamsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingTeams_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingTeams_deleteInstance"]>;
  GameCenterMatchmakingTeamsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterMatchmakingTeams_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterMatchmakingTeams_updateInstance"]>;
}

export const AppStoreFullApiGameCenterMatchmakingTeamsGeneratedFunctionNames = [
  "GameCenterMatchmakingTeamsCreateInstance",
  "GameCenterMatchmakingTeamsDeleteInstance",
  "GameCenterMatchmakingTeamsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterMatchmakingTeamsGeneratedClient)[];

export function createAppStoreFullApiGameCenterMatchmakingTeamsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterMatchmakingTeamsGeneratedClient {
  return {
    GameCenterMatchmakingTeamsCreateInstance: (...args) => callOperation("gameCenterMatchmakingTeams_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingTeams_createInstance">)),
    GameCenterMatchmakingTeamsDeleteInstance: (...args) => callOperation("gameCenterMatchmakingTeams_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingTeams_deleteInstance">)),
    GameCenterMatchmakingTeamsUpdateInstance: (...args) => callOperation("gameCenterMatchmakingTeams_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterMatchmakingTeams_updateInstance">)),
  };
}
