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
export const AppStoreFullApiGameCenterAchievementImagesOperationKeys = [
  "gameCenterAchievementImages_createInstance",
  "gameCenterAchievementImages_deleteInstance",
  "gameCenterAchievementImages_getInstance",
  "gameCenterAchievementImages_updateInstance",
  "gameCenterAchievementImagesV2_createInstance",
  "gameCenterAchievementImagesV2_deleteInstance",
  "gameCenterAchievementImagesV2_getInstance",
  "gameCenterAchievementImagesV2_updateInstance"
] as const;
export type AppStoreFullApiGameCenterAchievementImagesOperationKey = typeof AppStoreFullApiGameCenterAchievementImagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterAchievementImagesOperationPathParamMap {
  "gameCenterAchievementImages_createInstance": {};
  "gameCenterAchievementImages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementImages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementImages_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementImagesV2_createInstance": {};
  "gameCenterAchievementImagesV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementImagesV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementImagesV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterAchievementImagesOperationRequestMap {
  "gameCenterAchievementImages_createInstance": AppStoreFullApiOperationInput<"gameCenterAchievementImages_createInstance">;
  "gameCenterAchievementImages_deleteInstance": AppStoreFullApiOperationInput<"gameCenterAchievementImages_deleteInstance">;
  "gameCenterAchievementImages_getInstance": AppStoreFullApiOperationInput<"gameCenterAchievementImages_getInstance">;
  "gameCenterAchievementImages_updateInstance": AppStoreFullApiOperationInput<"gameCenterAchievementImages_updateInstance">;
  "gameCenterAchievementImagesV2_createInstance": AppStoreFullApiOperationInput<"gameCenterAchievementImagesV2_createInstance">;
  "gameCenterAchievementImagesV2_deleteInstance": AppStoreFullApiOperationInput<"gameCenterAchievementImagesV2_deleteInstance">;
  "gameCenterAchievementImagesV2_getInstance": AppStoreFullApiOperationInput<"gameCenterAchievementImagesV2_getInstance">;
  "gameCenterAchievementImagesV2_updateInstance": AppStoreFullApiOperationInput<"gameCenterAchievementImagesV2_updateInstance">;
}

export interface AppStoreFullApiGameCenterAchievementImagesGeneratedClient {
  GameCenterAchievementImagesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementImages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementImages_createInstance"]>;
  GameCenterAchievementImagesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementImages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementImages_deleteInstance"]>;
  GameCenterAchievementImagesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementImages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementImages_getInstance"]>;
  GameCenterAchievementImagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementImages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementImages_updateInstance"]>;
  GameCenterAchievementImagesV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementImagesV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementImagesV2_createInstance"]>;
  GameCenterAchievementImagesV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementImagesV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementImagesV2_deleteInstance"]>;
  GameCenterAchievementImagesV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementImagesV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementImagesV2_getInstance"]>;
  GameCenterAchievementImagesV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementImagesV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementImagesV2_updateInstance"]>;
}

export const AppStoreFullApiGameCenterAchievementImagesGeneratedFunctionNames = [
  "GameCenterAchievementImagesCreateInstance",
  "GameCenterAchievementImagesDeleteInstance",
  "GameCenterAchievementImagesGetInstance",
  "GameCenterAchievementImagesUpdateInstance",
  "GameCenterAchievementImagesV2CreateInstance",
  "GameCenterAchievementImagesV2DeleteInstance",
  "GameCenterAchievementImagesV2GetInstance",
  "GameCenterAchievementImagesV2UpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterAchievementImagesGeneratedClient)[];

export function createAppStoreFullApiGameCenterAchievementImagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterAchievementImagesGeneratedClient {
  return {
    GameCenterAchievementImagesCreateInstance: (...args) => callOperation("gameCenterAchievementImages_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementImages_createInstance">)),
    GameCenterAchievementImagesDeleteInstance: (...args) => callOperation("gameCenterAchievementImages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementImages_deleteInstance">)),
    GameCenterAchievementImagesGetInstance: (...args) => callOperation("gameCenterAchievementImages_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementImages_getInstance">)),
    GameCenterAchievementImagesUpdateInstance: (...args) => callOperation("gameCenterAchievementImages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementImages_updateInstance">)),
    GameCenterAchievementImagesV2CreateInstance: (...args) => callOperation("gameCenterAchievementImagesV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementImagesV2_createInstance">)),
    GameCenterAchievementImagesV2DeleteInstance: (...args) => callOperation("gameCenterAchievementImagesV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementImagesV2_deleteInstance">)),
    GameCenterAchievementImagesV2GetInstance: (...args) => callOperation("gameCenterAchievementImagesV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementImagesV2_getInstance">)),
    GameCenterAchievementImagesV2UpdateInstance: (...args) => callOperation("gameCenterAchievementImagesV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementImagesV2_updateInstance">)),
  };
}
