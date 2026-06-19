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
export const AppStoreFullApiGameCenterActivityImagesOperationKeys = [
  "gameCenterActivityImages_createInstance",
  "gameCenterActivityImages_deleteInstance",
  "gameCenterActivityImages_getInstance",
  "gameCenterActivityImages_updateInstance"
] as const;
export type AppStoreFullApiGameCenterActivityImagesOperationKey = typeof AppStoreFullApiGameCenterActivityImagesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterActivityImagesOperationPathParamMap {
  "gameCenterActivityImages_createInstance": {};
  "gameCenterActivityImages_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityImages_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityImages_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterActivityImagesOperationRequestMap {
  "gameCenterActivityImages_createInstance": AppStoreFullApiOperationInput<"gameCenterActivityImages_createInstance">;
  "gameCenterActivityImages_deleteInstance": AppStoreFullApiOperationInput<"gameCenterActivityImages_deleteInstance">;
  "gameCenterActivityImages_getInstance": AppStoreFullApiOperationInput<"gameCenterActivityImages_getInstance">;
  "gameCenterActivityImages_updateInstance": AppStoreFullApiOperationInput<"gameCenterActivityImages_updateInstance">;
}

export interface AppStoreFullApiGameCenterActivityImagesGeneratedClient {
  GameCenterActivityImagesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityImages_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityImages_createInstance"]>;
  GameCenterActivityImagesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityImages_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityImages_deleteInstance"]>;
  GameCenterActivityImagesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityImages_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityImages_getInstance"]>;
  GameCenterActivityImagesUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityImages_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityImages_updateInstance"]>;
}

export const AppStoreFullApiGameCenterActivityImagesGeneratedFunctionNames = [
  "GameCenterActivityImagesCreateInstance",
  "GameCenterActivityImagesDeleteInstance",
  "GameCenterActivityImagesGetInstance",
  "GameCenterActivityImagesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterActivityImagesGeneratedClient)[];

export function createAppStoreFullApiGameCenterActivityImagesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterActivityImagesGeneratedClient {
  return {
    GameCenterActivityImagesCreateInstance: (...args) => callOperation("gameCenterActivityImages_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityImages_createInstance">)),
    GameCenterActivityImagesDeleteInstance: (...args) => callOperation("gameCenterActivityImages_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityImages_deleteInstance">)),
    GameCenterActivityImagesGetInstance: (...args) => callOperation("gameCenterActivityImages_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityImages_getInstance">)),
    GameCenterActivityImagesUpdateInstance: (...args) => callOperation("gameCenterActivityImages_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityImages_updateInstance">)),
  };
}
