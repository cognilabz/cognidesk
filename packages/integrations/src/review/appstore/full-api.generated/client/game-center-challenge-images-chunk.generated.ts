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
export const AppStoreFullApiGameCenterChallengeImagesOperationKeys = [
  "gameCenterChallengeImages_createInstance",
  "gameCenterChallengeImages_deleteInstance",
  "gameCenterChallengeImages_getInstance",
  "gameCenterChallengeImages_updateInstance"
] as const;
export type AppStoreFullApiGameCenterChallengeImagesOperationKey = typeof AppStoreFullApiGameCenterChallengeImagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterChallengeImagesOperationPathParamMap {
  "gameCenterChallengeImages_createInstance": {};
  "gameCenterChallengeImages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeImages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeImages_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterChallengeImagesOperationRequestMap {
  "gameCenterChallengeImages_createInstance": AppStoreFullApiOperationInput<"gameCenterChallengeImages_createInstance">;
  "gameCenterChallengeImages_deleteInstance": AppStoreFullApiOperationInput<"gameCenterChallengeImages_deleteInstance">;
  "gameCenterChallengeImages_getInstance": AppStoreFullApiOperationInput<"gameCenterChallengeImages_getInstance">;
  "gameCenterChallengeImages_updateInstance": AppStoreFullApiOperationInput<"gameCenterChallengeImages_updateInstance">;
}

export interface AppStoreFullApiGameCenterChallengeImagesGeneratedClient {
  GameCenterChallengeImagesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeImages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeImages_createInstance"]>;
  GameCenterChallengeImagesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeImages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeImages_deleteInstance"]>;
  GameCenterChallengeImagesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeImages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeImages_getInstance"]>;
  GameCenterChallengeImagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeImages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeImages_updateInstance"]>;
}

export const AppStoreFullApiGameCenterChallengeImagesGeneratedFunctionNames = [
  "GameCenterChallengeImagesCreateInstance",
  "GameCenterChallengeImagesDeleteInstance",
  "GameCenterChallengeImagesGetInstance",
  "GameCenterChallengeImagesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterChallengeImagesGeneratedClient)[];

export function createAppStoreFullApiGameCenterChallengeImagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterChallengeImagesGeneratedClient {
  return {
    GameCenterChallengeImagesCreateInstance: (...args) => callOperation("gameCenterChallengeImages_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeImages_createInstance">)),
    GameCenterChallengeImagesDeleteInstance: (...args) => callOperation("gameCenterChallengeImages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeImages_deleteInstance">)),
    GameCenterChallengeImagesGetInstance: (...args) => callOperation("gameCenterChallengeImages_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeImages_getInstance">)),
    GameCenterChallengeImagesUpdateInstance: (...args) => callOperation("gameCenterChallengeImages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeImages_updateInstance">)),
  };
}
