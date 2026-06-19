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
export const AppStoreFullApiGameCenterLeaderboardSetImagesOperationKeys = [
  "gameCenterLeaderboardSetImages_createInstance",
  "gameCenterLeaderboardSetImages_deleteInstance",
  "gameCenterLeaderboardSetImages_getInstance",
  "gameCenterLeaderboardSetImages_updateInstance",
  "gameCenterLeaderboardSetImagesV2_createInstance",
  "gameCenterLeaderboardSetImagesV2_deleteInstance",
  "gameCenterLeaderboardSetImagesV2_getInstance",
  "gameCenterLeaderboardSetImagesV2_updateInstance"
] as const;
export type AppStoreFullApiGameCenterLeaderboardSetImagesOperationKey = typeof AppStoreFullApiGameCenterLeaderboardSetImagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardSetImagesOperationPathParamMap {
  "gameCenterLeaderboardSetImages_createInstance": {};
  "gameCenterLeaderboardSetImages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetImages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetImages_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetImagesV2_createInstance": {};
  "gameCenterLeaderboardSetImagesV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetImagesV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetImagesV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardSetImagesOperationRequestMap {
  "gameCenterLeaderboardSetImages_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetImages_createInstance">;
  "gameCenterLeaderboardSetImages_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetImages_deleteInstance">;
  "gameCenterLeaderboardSetImages_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetImages_getInstance">;
  "gameCenterLeaderboardSetImages_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetImages_updateInstance">;
  "gameCenterLeaderboardSetImagesV2_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetImagesV2_createInstance">;
  "gameCenterLeaderboardSetImagesV2_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetImagesV2_deleteInstance">;
  "gameCenterLeaderboardSetImagesV2_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetImagesV2_getInstance">;
  "gameCenterLeaderboardSetImagesV2_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetImagesV2_updateInstance">;
}

export interface AppStoreFullApiGameCenterLeaderboardSetImagesGeneratedClient {
  GameCenterLeaderboardSetImagesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetImages_createInstance"]>;
  GameCenterLeaderboardSetImagesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetImages_deleteInstance"]>;
  GameCenterLeaderboardSetImagesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetImages_getInstance"]>;
  GameCenterLeaderboardSetImagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetImages_updateInstance"]>;
  GameCenterLeaderboardSetImagesV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImagesV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetImagesV2_createInstance"]>;
  GameCenterLeaderboardSetImagesV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImagesV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetImagesV2_deleteInstance"]>;
  GameCenterLeaderboardSetImagesV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImagesV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetImagesV2_getInstance"]>;
  GameCenterLeaderboardSetImagesV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImagesV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetImagesV2_updateInstance"]>;
}

export const AppStoreFullApiGameCenterLeaderboardSetImagesGeneratedFunctionNames = [
  "GameCenterLeaderboardSetImagesCreateInstance",
  "GameCenterLeaderboardSetImagesDeleteInstance",
  "GameCenterLeaderboardSetImagesGetInstance",
  "GameCenterLeaderboardSetImagesUpdateInstance",
  "GameCenterLeaderboardSetImagesV2CreateInstance",
  "GameCenterLeaderboardSetImagesV2DeleteInstance",
  "GameCenterLeaderboardSetImagesV2GetInstance",
  "GameCenterLeaderboardSetImagesV2UpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardSetImagesGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardSetImagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardSetImagesGeneratedClient {
  return {
    GameCenterLeaderboardSetImagesCreateInstance: (...args) => callOperation("gameCenterLeaderboardSetImages_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImages_createInstance">)),
    GameCenterLeaderboardSetImagesDeleteInstance: (...args) => callOperation("gameCenterLeaderboardSetImages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImages_deleteInstance">)),
    GameCenterLeaderboardSetImagesGetInstance: (...args) => callOperation("gameCenterLeaderboardSetImages_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImages_getInstance">)),
    GameCenterLeaderboardSetImagesUpdateInstance: (...args) => callOperation("gameCenterLeaderboardSetImages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImages_updateInstance">)),
    GameCenterLeaderboardSetImagesV2CreateInstance: (...args) => callOperation("gameCenterLeaderboardSetImagesV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImagesV2_createInstance">)),
    GameCenterLeaderboardSetImagesV2DeleteInstance: (...args) => callOperation("gameCenterLeaderboardSetImagesV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImagesV2_deleteInstance">)),
    GameCenterLeaderboardSetImagesV2GetInstance: (...args) => callOperation("gameCenterLeaderboardSetImagesV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImagesV2_getInstance">)),
    GameCenterLeaderboardSetImagesV2UpdateInstance: (...args) => callOperation("gameCenterLeaderboardSetImagesV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetImagesV2_updateInstance">)),
  };
}
