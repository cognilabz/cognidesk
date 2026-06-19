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
export const AppStoreFullApiGameCenterLeaderboardImagesOperationKeys = [
  "gameCenterLeaderboardImages_createInstance",
  "gameCenterLeaderboardImages_deleteInstance",
  "gameCenterLeaderboardImages_getInstance",
  "gameCenterLeaderboardImages_updateInstance",
  "gameCenterLeaderboardImagesV2_createInstance",
  "gameCenterLeaderboardImagesV2_deleteInstance",
  "gameCenterLeaderboardImagesV2_getInstance",
  "gameCenterLeaderboardImagesV2_updateInstance"
] as const;
export type AppStoreFullApiGameCenterLeaderboardImagesOperationKey = typeof AppStoreFullApiGameCenterLeaderboardImagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardImagesOperationPathParamMap {
  "gameCenterLeaderboardImages_createInstance": {};
  "gameCenterLeaderboardImages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardImages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardImages_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardImagesV2_createInstance": {};
  "gameCenterLeaderboardImagesV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardImagesV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardImagesV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardImagesOperationRequestMap {
  "gameCenterLeaderboardImages_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardImages_createInstance">;
  "gameCenterLeaderboardImages_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardImages_deleteInstance">;
  "gameCenterLeaderboardImages_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardImages_getInstance">;
  "gameCenterLeaderboardImages_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardImages_updateInstance">;
  "gameCenterLeaderboardImagesV2_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardImagesV2_createInstance">;
  "gameCenterLeaderboardImagesV2_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardImagesV2_deleteInstance">;
  "gameCenterLeaderboardImagesV2_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardImagesV2_getInstance">;
  "gameCenterLeaderboardImagesV2_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardImagesV2_updateInstance">;
}

export interface AppStoreFullApiGameCenterLeaderboardImagesGeneratedClient {
  GameCenterLeaderboardImagesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardImages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardImages_createInstance"]>;
  GameCenterLeaderboardImagesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardImages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardImages_deleteInstance"]>;
  GameCenterLeaderboardImagesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardImages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardImages_getInstance"]>;
  GameCenterLeaderboardImagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardImages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardImages_updateInstance"]>;
  GameCenterLeaderboardImagesV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardImagesV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardImagesV2_createInstance"]>;
  GameCenterLeaderboardImagesV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardImagesV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardImagesV2_deleteInstance"]>;
  GameCenterLeaderboardImagesV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardImagesV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardImagesV2_getInstance"]>;
  GameCenterLeaderboardImagesV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardImagesV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardImagesV2_updateInstance"]>;
}

export const AppStoreFullApiGameCenterLeaderboardImagesGeneratedFunctionNames = [
  "GameCenterLeaderboardImagesCreateInstance",
  "GameCenterLeaderboardImagesDeleteInstance",
  "GameCenterLeaderboardImagesGetInstance",
  "GameCenterLeaderboardImagesUpdateInstance",
  "GameCenterLeaderboardImagesV2CreateInstance",
  "GameCenterLeaderboardImagesV2DeleteInstance",
  "GameCenterLeaderboardImagesV2GetInstance",
  "GameCenterLeaderboardImagesV2UpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardImagesGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardImagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardImagesGeneratedClient {
  return {
    GameCenterLeaderboardImagesCreateInstance: (...args) => callOperation("gameCenterLeaderboardImages_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardImages_createInstance">)),
    GameCenterLeaderboardImagesDeleteInstance: (...args) => callOperation("gameCenterLeaderboardImages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardImages_deleteInstance">)),
    GameCenterLeaderboardImagesGetInstance: (...args) => callOperation("gameCenterLeaderboardImages_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardImages_getInstance">)),
    GameCenterLeaderboardImagesUpdateInstance: (...args) => callOperation("gameCenterLeaderboardImages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardImages_updateInstance">)),
    GameCenterLeaderboardImagesV2CreateInstance: (...args) => callOperation("gameCenterLeaderboardImagesV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardImagesV2_createInstance">)),
    GameCenterLeaderboardImagesV2DeleteInstance: (...args) => callOperation("gameCenterLeaderboardImagesV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardImagesV2_deleteInstance">)),
    GameCenterLeaderboardImagesV2GetInstance: (...args) => callOperation("gameCenterLeaderboardImagesV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardImagesV2_getInstance">)),
    GameCenterLeaderboardImagesV2UpdateInstance: (...args) => callOperation("gameCenterLeaderboardImagesV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardImagesV2_updateInstance">)),
  };
}
