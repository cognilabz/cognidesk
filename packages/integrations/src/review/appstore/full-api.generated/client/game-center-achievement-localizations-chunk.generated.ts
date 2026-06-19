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
export const AppStoreFullApiGameCenterAchievementLocalizationsOperationKeys = [
  "gameCenterAchievementLocalizations_createInstance",
  "gameCenterAchievementLocalizations_deleteInstance",
  "gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelated",
  "gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelationship",
  "gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelated",
  "gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelationship",
  "gameCenterAchievementLocalizations_getInstance",
  "gameCenterAchievementLocalizations_updateInstance",
  "gameCenterAchievementLocalizationsV2_createInstance",
  "gameCenterAchievementLocalizationsV2_deleteInstance",
  "gameCenterAchievementLocalizationsV2_getInstance",
  "gameCenterAchievementLocalizationsV2_image_getToOneRelated",
  "gameCenterAchievementLocalizationsV2_image_getToOneRelationship",
  "gameCenterAchievementLocalizationsV2_updateInstance"
] as const;
export type AppStoreFullApiGameCenterAchievementLocalizationsOperationKey = typeof AppStoreFullApiGameCenterAchievementLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterAchievementLocalizationsOperationPathParamMap {
  "gameCenterAchievementLocalizations_createInstance": {};
  "gameCenterAchievementLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizationsV2_createInstance": {};
  "gameCenterAchievementLocalizationsV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizationsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizationsV2_image_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizationsV2_image_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementLocalizationsV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterAchievementLocalizationsOperationRequestMap {
  "gameCenterAchievementLocalizations_createInstance": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizations_createInstance">;
  "gameCenterAchievementLocalizations_deleteInstance": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizations_deleteInstance">;
  "gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelated">;
  "gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelationship">;
  "gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelated">;
  "gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelationship">;
  "gameCenterAchievementLocalizations_getInstance": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizations_getInstance">;
  "gameCenterAchievementLocalizations_updateInstance": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizations_updateInstance">;
  "gameCenterAchievementLocalizationsV2_createInstance": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizationsV2_createInstance">;
  "gameCenterAchievementLocalizationsV2_deleteInstance": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizationsV2_deleteInstance">;
  "gameCenterAchievementLocalizationsV2_getInstance": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizationsV2_getInstance">;
  "gameCenterAchievementLocalizationsV2_image_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizationsV2_image_getToOneRelated">;
  "gameCenterAchievementLocalizationsV2_image_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizationsV2_image_getToOneRelationship">;
  "gameCenterAchievementLocalizationsV2_updateInstance": AppStoreFullApiOperationInput<"gameCenterAchievementLocalizationsV2_updateInstance">;
}

export interface AppStoreFullApiGameCenterAchievementLocalizationsGeneratedClient {
  GameCenterAchievementLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizations_createInstance"]>;
  GameCenterAchievementLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizations_deleteInstance"]>;
  GameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelated"]>;
  GameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelationship"]>;
  GameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelated"]>;
  GameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelationship"]>;
  GameCenterAchievementLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizations_getInstance"]>;
  GameCenterAchievementLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizations_updateInstance"]>;
  GameCenterAchievementLocalizationsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizationsV2_createInstance"]>;
  GameCenterAchievementLocalizationsV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizationsV2_deleteInstance"]>;
  GameCenterAchievementLocalizationsV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizationsV2_getInstance"]>;
  GameCenterAchievementLocalizationsV2ImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_image_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizationsV2_image_getToOneRelated"]>;
  GameCenterAchievementLocalizationsV2ImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_image_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizationsV2_image_getToOneRelationship"]>;
  GameCenterAchievementLocalizationsV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementLocalizationsV2_updateInstance"]>;
}

export const AppStoreFullApiGameCenterAchievementLocalizationsGeneratedFunctionNames = [
  "GameCenterAchievementLocalizationsCreateInstance",
  "GameCenterAchievementLocalizationsDeleteInstance",
  "GameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated",
  "GameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelationship",
  "GameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated",
  "GameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelationship",
  "GameCenterAchievementLocalizationsGetInstance",
  "GameCenterAchievementLocalizationsUpdateInstance",
  "GameCenterAchievementLocalizationsV2CreateInstance",
  "GameCenterAchievementLocalizationsV2DeleteInstance",
  "GameCenterAchievementLocalizationsV2GetInstance",
  "GameCenterAchievementLocalizationsV2ImageGetToOneRelated",
  "GameCenterAchievementLocalizationsV2ImageGetToOneRelationship",
  "GameCenterAchievementLocalizationsV2UpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterAchievementLocalizationsGeneratedClient)[];

export function createAppStoreFullApiGameCenterAchievementLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterAchievementLocalizationsGeneratedClient {
  return {
    GameCenterAchievementLocalizationsCreateInstance: (...args) => callOperation("gameCenterAchievementLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_createInstance">)),
    GameCenterAchievementLocalizationsDeleteInstance: (...args) => callOperation("gameCenterAchievementLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_deleteInstance">)),
    GameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated: (...args) => callOperation("gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelated">)),
    GameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelationship: (...args) => callOperation("gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_gameCenterAchievement_getToOneRelationship">)),
    GameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated: (...args) => callOperation("gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelated">)),
    GameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelationship: (...args) => callOperation("gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_gameCenterAchievementImage_getToOneRelationship">)),
    GameCenterAchievementLocalizationsGetInstance: (...args) => callOperation("gameCenterAchievementLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_getInstance">)),
    GameCenterAchievementLocalizationsUpdateInstance: (...args) => callOperation("gameCenterAchievementLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizations_updateInstance">)),
    GameCenterAchievementLocalizationsV2CreateInstance: (...args) => callOperation("gameCenterAchievementLocalizationsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_createInstance">)),
    GameCenterAchievementLocalizationsV2DeleteInstance: (...args) => callOperation("gameCenterAchievementLocalizationsV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_deleteInstance">)),
    GameCenterAchievementLocalizationsV2GetInstance: (...args) => callOperation("gameCenterAchievementLocalizationsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_getInstance">)),
    GameCenterAchievementLocalizationsV2ImageGetToOneRelated: (...args) => callOperation("gameCenterAchievementLocalizationsV2_image_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_image_getToOneRelated">)),
    GameCenterAchievementLocalizationsV2ImageGetToOneRelationship: (...args) => callOperation("gameCenterAchievementLocalizationsV2_image_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_image_getToOneRelationship">)),
    GameCenterAchievementLocalizationsV2UpdateInstance: (...args) => callOperation("gameCenterAchievementLocalizationsV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementLocalizationsV2_updateInstance">)),
  };
}
