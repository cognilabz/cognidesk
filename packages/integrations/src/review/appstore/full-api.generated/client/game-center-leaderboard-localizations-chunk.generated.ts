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
export const AppStoreFullApiGameCenterLeaderboardLocalizationsOperationKeys = [
  "gameCenterLeaderboardLocalizations_createInstance",
  "gameCenterLeaderboardLocalizations_deleteInstance",
  "gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelated",
  "gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelationship",
  "gameCenterLeaderboardLocalizations_getInstance",
  "gameCenterLeaderboardLocalizations_updateInstance",
  "gameCenterLeaderboardLocalizationsV2_createInstance",
  "gameCenterLeaderboardLocalizationsV2_deleteInstance",
  "gameCenterLeaderboardLocalizationsV2_getInstance",
  "gameCenterLeaderboardLocalizationsV2_image_getToOneRelated",
  "gameCenterLeaderboardLocalizationsV2_image_getToOneRelationship",
  "gameCenterLeaderboardLocalizationsV2_updateInstance"
] as const;
export type AppStoreFullApiGameCenterLeaderboardLocalizationsOperationKey = typeof AppStoreFullApiGameCenterLeaderboardLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardLocalizationsOperationPathParamMap {
  "gameCenterLeaderboardLocalizations_createInstance": {};
  "gameCenterLeaderboardLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardLocalizationsV2_createInstance": {};
  "gameCenterLeaderboardLocalizationsV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardLocalizationsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardLocalizationsV2_image_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardLocalizationsV2_image_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardLocalizationsV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardLocalizationsOperationRequestMap {
  "gameCenterLeaderboardLocalizations_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizations_createInstance">;
  "gameCenterLeaderboardLocalizations_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizations_deleteInstance">;
  "gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelated">;
  "gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelationship">;
  "gameCenterLeaderboardLocalizations_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizations_getInstance">;
  "gameCenterLeaderboardLocalizations_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizations_updateInstance">;
  "gameCenterLeaderboardLocalizationsV2_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizationsV2_createInstance">;
  "gameCenterLeaderboardLocalizationsV2_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizationsV2_deleteInstance">;
  "gameCenterLeaderboardLocalizationsV2_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizationsV2_getInstance">;
  "gameCenterLeaderboardLocalizationsV2_image_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizationsV2_image_getToOneRelated">;
  "gameCenterLeaderboardLocalizationsV2_image_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizationsV2_image_getToOneRelationship">;
  "gameCenterLeaderboardLocalizationsV2_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardLocalizationsV2_updateInstance">;
}

export interface AppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedClient {
  GameCenterLeaderboardLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizations_createInstance"]>;
  GameCenterLeaderboardLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizations_deleteInstance"]>;
  GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelated"]>;
  GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelationship"]>;
  GameCenterLeaderboardLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizations_getInstance"]>;
  GameCenterLeaderboardLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizations_updateInstance"]>;
  GameCenterLeaderboardLocalizationsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizationsV2_createInstance"]>;
  GameCenterLeaderboardLocalizationsV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizationsV2_deleteInstance"]>;
  GameCenterLeaderboardLocalizationsV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizationsV2_getInstance"]>;
  GameCenterLeaderboardLocalizationsV2ImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_image_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizationsV2_image_getToOneRelated"]>;
  GameCenterLeaderboardLocalizationsV2ImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_image_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizationsV2_image_getToOneRelationship"]>;
  GameCenterLeaderboardLocalizationsV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardLocalizationsV2_updateInstance"]>;
}

export const AppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedFunctionNames = [
  "GameCenterLeaderboardLocalizationsCreateInstance",
  "GameCenterLeaderboardLocalizationsDeleteInstance",
  "GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated",
  "GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelationship",
  "GameCenterLeaderboardLocalizationsGetInstance",
  "GameCenterLeaderboardLocalizationsUpdateInstance",
  "GameCenterLeaderboardLocalizationsV2CreateInstance",
  "GameCenterLeaderboardLocalizationsV2DeleteInstance",
  "GameCenterLeaderboardLocalizationsV2GetInstance",
  "GameCenterLeaderboardLocalizationsV2ImageGetToOneRelated",
  "GameCenterLeaderboardLocalizationsV2ImageGetToOneRelationship",
  "GameCenterLeaderboardLocalizationsV2UpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardLocalizationsGeneratedClient {
  return {
    GameCenterLeaderboardLocalizationsCreateInstance: (...args) => callOperation("gameCenterLeaderboardLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_createInstance">)),
    GameCenterLeaderboardLocalizationsDeleteInstance: (...args) => callOperation("gameCenterLeaderboardLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_deleteInstance">)),
    GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated: (...args) => callOperation("gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelated">)),
    GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelationship: (...args) => callOperation("gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_gameCenterLeaderboardImage_getToOneRelationship">)),
    GameCenterLeaderboardLocalizationsGetInstance: (...args) => callOperation("gameCenterLeaderboardLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_getInstance">)),
    GameCenterLeaderboardLocalizationsUpdateInstance: (...args) => callOperation("gameCenterLeaderboardLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizations_updateInstance">)),
    GameCenterLeaderboardLocalizationsV2CreateInstance: (...args) => callOperation("gameCenterLeaderboardLocalizationsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_createInstance">)),
    GameCenterLeaderboardLocalizationsV2DeleteInstance: (...args) => callOperation("gameCenterLeaderboardLocalizationsV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_deleteInstance">)),
    GameCenterLeaderboardLocalizationsV2GetInstance: (...args) => callOperation("gameCenterLeaderboardLocalizationsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_getInstance">)),
    GameCenterLeaderboardLocalizationsV2ImageGetToOneRelated: (...args) => callOperation("gameCenterLeaderboardLocalizationsV2_image_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_image_getToOneRelated">)),
    GameCenterLeaderboardLocalizationsV2ImageGetToOneRelationship: (...args) => callOperation("gameCenterLeaderboardLocalizationsV2_image_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_image_getToOneRelationship">)),
    GameCenterLeaderboardLocalizationsV2UpdateInstance: (...args) => callOperation("gameCenterLeaderboardLocalizationsV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardLocalizationsV2_updateInstance">)),
  };
}
