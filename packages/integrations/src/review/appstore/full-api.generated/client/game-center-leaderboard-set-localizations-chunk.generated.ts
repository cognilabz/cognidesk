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
export const AppStoreFullApiGameCenterLeaderboardSetLocalizationsOperationKeys = [
  "gameCenterLeaderboardSetLocalizations_createInstance",
  "gameCenterLeaderboardSetLocalizations_deleteInstance",
  "gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelated",
  "gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelationship",
  "gameCenterLeaderboardSetLocalizations_getInstance",
  "gameCenterLeaderboardSetLocalizations_updateInstance",
  "gameCenterLeaderboardSetLocalizationsV2_createInstance",
  "gameCenterLeaderboardSetLocalizationsV2_deleteInstance",
  "gameCenterLeaderboardSetLocalizationsV2_getInstance",
  "gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelated",
  "gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelationship",
  "gameCenterLeaderboardSetLocalizationsV2_updateInstance"
] as const;
export type AppStoreFullApiGameCenterLeaderboardSetLocalizationsOperationKey = typeof AppStoreFullApiGameCenterLeaderboardSetLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardSetLocalizationsOperationPathParamMap {
  "gameCenterLeaderboardSetLocalizations_createInstance": {};
  "gameCenterLeaderboardSetLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetLocalizationsV2_createInstance": {};
  "gameCenterLeaderboardSetLocalizationsV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetLocalizationsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetLocalizationsV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardSetLocalizationsOperationRequestMap {
  "gameCenterLeaderboardSetLocalizations_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizations_createInstance">;
  "gameCenterLeaderboardSetLocalizations_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizations_deleteInstance">;
  "gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelated">;
  "gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelationship">;
  "gameCenterLeaderboardSetLocalizations_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizations_getInstance">;
  "gameCenterLeaderboardSetLocalizations_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizations_updateInstance">;
  "gameCenterLeaderboardSetLocalizationsV2_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizationsV2_createInstance">;
  "gameCenterLeaderboardSetLocalizationsV2_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizationsV2_deleteInstance">;
  "gameCenterLeaderboardSetLocalizationsV2_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizationsV2_getInstance">;
  "gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelated">;
  "gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelationship">;
  "gameCenterLeaderboardSetLocalizationsV2_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetLocalizationsV2_updateInstance">;
}

export interface AppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedClient {
  GameCenterLeaderboardSetLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizations_createInstance"]>;
  GameCenterLeaderboardSetLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizations_deleteInstance"]>;
  GameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelated"]>;
  GameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelationship"]>;
  GameCenterLeaderboardSetLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizations_getInstance"]>;
  GameCenterLeaderboardSetLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizations_updateInstance"]>;
  GameCenterLeaderboardSetLocalizationsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizationsV2_createInstance"]>;
  GameCenterLeaderboardSetLocalizationsV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizationsV2_deleteInstance"]>;
  GameCenterLeaderboardSetLocalizationsV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizationsV2_getInstance"]>;
  GameCenterLeaderboardSetLocalizationsV2ImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelated"]>;
  GameCenterLeaderboardSetLocalizationsV2ImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelationship"]>;
  GameCenterLeaderboardSetLocalizationsV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetLocalizationsV2_updateInstance"]>;
}

export const AppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedFunctionNames = [
  "GameCenterLeaderboardSetLocalizationsCreateInstance",
  "GameCenterLeaderboardSetLocalizationsDeleteInstance",
  "GameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated",
  "GameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelationship",
  "GameCenterLeaderboardSetLocalizationsGetInstance",
  "GameCenterLeaderboardSetLocalizationsUpdateInstance",
  "GameCenterLeaderboardSetLocalizationsV2CreateInstance",
  "GameCenterLeaderboardSetLocalizationsV2DeleteInstance",
  "GameCenterLeaderboardSetLocalizationsV2GetInstance",
  "GameCenterLeaderboardSetLocalizationsV2ImageGetToOneRelated",
  "GameCenterLeaderboardSetLocalizationsV2ImageGetToOneRelationship",
  "GameCenterLeaderboardSetLocalizationsV2UpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardSetLocalizationsGeneratedClient {
  return {
    GameCenterLeaderboardSetLocalizationsCreateInstance: (...args) => callOperation("gameCenterLeaderboardSetLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_createInstance">)),
    GameCenterLeaderboardSetLocalizationsDeleteInstance: (...args) => callOperation("gameCenterLeaderboardSetLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_deleteInstance">)),
    GameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated: (...args) => callOperation("gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelated">)),
    GameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelationship: (...args) => callOperation("gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_gameCenterLeaderboardSetImage_getToOneRelationship">)),
    GameCenterLeaderboardSetLocalizationsGetInstance: (...args) => callOperation("gameCenterLeaderboardSetLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_getInstance">)),
    GameCenterLeaderboardSetLocalizationsUpdateInstance: (...args) => callOperation("gameCenterLeaderboardSetLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizations_updateInstance">)),
    GameCenterLeaderboardSetLocalizationsV2CreateInstance: (...args) => callOperation("gameCenterLeaderboardSetLocalizationsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_createInstance">)),
    GameCenterLeaderboardSetLocalizationsV2DeleteInstance: (...args) => callOperation("gameCenterLeaderboardSetLocalizationsV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_deleteInstance">)),
    GameCenterLeaderboardSetLocalizationsV2GetInstance: (...args) => callOperation("gameCenterLeaderboardSetLocalizationsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_getInstance">)),
    GameCenterLeaderboardSetLocalizationsV2ImageGetToOneRelated: (...args) => callOperation("gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelated">)),
    GameCenterLeaderboardSetLocalizationsV2ImageGetToOneRelationship: (...args) => callOperation("gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_image_getToOneRelationship">)),
    GameCenterLeaderboardSetLocalizationsV2UpdateInstance: (...args) => callOperation("gameCenterLeaderboardSetLocalizationsV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetLocalizationsV2_updateInstance">)),
  };
}
