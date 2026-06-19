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
export const AppStoreFullApiGameCenterAchievementsOperationKeys = [
  "gameCenterAchievements_activity_updateToOneRelationship",
  "gameCenterAchievements_createInstance",
  "gameCenterAchievements_deleteInstance",
  "gameCenterAchievements_getInstance",
  "gameCenterAchievements_groupAchievement_getToOneRelated",
  "gameCenterAchievements_groupAchievement_getToOneRelationship",
  "gameCenterAchievements_groupAchievement_updateToOneRelationship",
  "gameCenterAchievements_localizations_getToManyRelated",
  "gameCenterAchievements_localizations_getToManyRelationship",
  "gameCenterAchievements_releases_getToManyRelated",
  "gameCenterAchievements_releases_getToManyRelationship",
  "gameCenterAchievements_updateInstance",
  "gameCenterAchievementsV2_activity_updateToOneRelationship",
  "gameCenterAchievementsV2_createInstance",
  "gameCenterAchievementsV2_deleteInstance",
  "gameCenterAchievementsV2_getInstance",
  "gameCenterAchievementsV2_updateInstance",
  "gameCenterAchievementsV2_versions_getToManyRelated",
  "gameCenterAchievementsV2_versions_getToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterAchievementsOperationKey = typeof AppStoreFullApiGameCenterAchievementsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterAchievementsOperationPathParamMap {
  "gameCenterAchievements_activity_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_createInstance": {};
  "gameCenterAchievements_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_groupAchievement_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_groupAchievement_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_groupAchievement_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_localizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_localizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_releases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_releases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievements_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementsV2_activity_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementsV2_createInstance": {};
  "gameCenterAchievementsV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementsV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementsV2_versions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementsV2_versions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterAchievementsOperationRequestMap {
  "gameCenterAchievements_activity_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterAchievements_activity_updateToOneRelationship">;
  "gameCenterAchievements_createInstance": AppStoreFullApiOperationInput<"gameCenterAchievements_createInstance">;
  "gameCenterAchievements_deleteInstance": AppStoreFullApiOperationInput<"gameCenterAchievements_deleteInstance">;
  "gameCenterAchievements_getInstance": AppStoreFullApiOperationInput<"gameCenterAchievements_getInstance">;
  "gameCenterAchievements_groupAchievement_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterAchievements_groupAchievement_getToOneRelated">;
  "gameCenterAchievements_groupAchievement_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterAchievements_groupAchievement_getToOneRelationship">;
  "gameCenterAchievements_groupAchievement_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterAchievements_groupAchievement_updateToOneRelationship">;
  "gameCenterAchievements_localizations_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterAchievements_localizations_getToManyRelated">;
  "gameCenterAchievements_localizations_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterAchievements_localizations_getToManyRelationship">;
  "gameCenterAchievements_releases_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterAchievements_releases_getToManyRelated">;
  "gameCenterAchievements_releases_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterAchievements_releases_getToManyRelationship">;
  "gameCenterAchievements_updateInstance": AppStoreFullApiOperationInput<"gameCenterAchievements_updateInstance">;
  "gameCenterAchievementsV2_activity_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterAchievementsV2_activity_updateToOneRelationship">;
  "gameCenterAchievementsV2_createInstance": AppStoreFullApiOperationInput<"gameCenterAchievementsV2_createInstance">;
  "gameCenterAchievementsV2_deleteInstance": AppStoreFullApiOperationInput<"gameCenterAchievementsV2_deleteInstance">;
  "gameCenterAchievementsV2_getInstance": AppStoreFullApiOperationInput<"gameCenterAchievementsV2_getInstance">;
  "gameCenterAchievementsV2_updateInstance": AppStoreFullApiOperationInput<"gameCenterAchievementsV2_updateInstance">;
  "gameCenterAchievementsV2_versions_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterAchievementsV2_versions_getToManyRelated">;
  "gameCenterAchievementsV2_versions_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterAchievementsV2_versions_getToManyRelationship">;
}

export interface AppStoreFullApiGameCenterAchievementsGeneratedClient {
  GameCenterAchievementsActivityUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_activity_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_activity_updateToOneRelationship"]>;
  GameCenterAchievementsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_createInstance"]>;
  GameCenterAchievementsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_deleteInstance"]>;
  GameCenterAchievementsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_getInstance"]>;
  GameCenterAchievementsGroupAchievementGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_groupAchievement_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_groupAchievement_getToOneRelated"]>;
  GameCenterAchievementsGroupAchievementGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_groupAchievement_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_groupAchievement_getToOneRelationship"]>;
  GameCenterAchievementsGroupAchievementUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_groupAchievement_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_groupAchievement_updateToOneRelationship"]>;
  GameCenterAchievementsLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_localizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_localizations_getToManyRelated"]>;
  GameCenterAchievementsLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_localizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_localizations_getToManyRelationship"]>;
  GameCenterAchievementsReleasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_releases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_releases_getToManyRelated"]>;
  GameCenterAchievementsReleasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_releases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_releases_getToManyRelationship"]>;
  GameCenterAchievementsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievements_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievements_updateInstance"]>;
  GameCenterAchievementsV2ActivityUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_activity_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementsV2_activity_updateToOneRelationship"]>;
  GameCenterAchievementsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementsV2_createInstance"]>;
  GameCenterAchievementsV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementsV2_deleteInstance"]>;
  GameCenterAchievementsV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementsV2_getInstance"]>;
  GameCenterAchievementsV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementsV2_updateInstance"]>;
  GameCenterAchievementsV2VersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_versions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementsV2_versions_getToManyRelated"]>;
  GameCenterAchievementsV2VersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_versions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementsV2_versions_getToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterAchievementsGeneratedFunctionNames = [
  "GameCenterAchievementsActivityUpdateToOneRelationship",
  "GameCenterAchievementsCreateInstance",
  "GameCenterAchievementsDeleteInstance",
  "GameCenterAchievementsGetInstance",
  "GameCenterAchievementsGroupAchievementGetToOneRelated",
  "GameCenterAchievementsGroupAchievementGetToOneRelationship",
  "GameCenterAchievementsGroupAchievementUpdateToOneRelationship",
  "GameCenterAchievementsLocalizationsGetToManyRelated",
  "GameCenterAchievementsLocalizationsGetToManyRelationship",
  "GameCenterAchievementsReleasesGetToManyRelated",
  "GameCenterAchievementsReleasesGetToManyRelationship",
  "GameCenterAchievementsUpdateInstance",
  "GameCenterAchievementsV2ActivityUpdateToOneRelationship",
  "GameCenterAchievementsV2CreateInstance",
  "GameCenterAchievementsV2DeleteInstance",
  "GameCenterAchievementsV2GetInstance",
  "GameCenterAchievementsV2UpdateInstance",
  "GameCenterAchievementsV2VersionsGetToManyRelated",
  "GameCenterAchievementsV2VersionsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterAchievementsGeneratedClient)[];

export function createAppStoreFullApiGameCenterAchievementsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterAchievementsGeneratedClient {
  return {
    GameCenterAchievementsActivityUpdateToOneRelationship: (...args) => callOperation("gameCenterAchievements_activity_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_activity_updateToOneRelationship">)),
    GameCenterAchievementsCreateInstance: (...args) => callOperation("gameCenterAchievements_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_createInstance">)),
    GameCenterAchievementsDeleteInstance: (...args) => callOperation("gameCenterAchievements_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_deleteInstance">)),
    GameCenterAchievementsGetInstance: (...args) => callOperation("gameCenterAchievements_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_getInstance">)),
    GameCenterAchievementsGroupAchievementGetToOneRelated: (...args) => callOperation("gameCenterAchievements_groupAchievement_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_groupAchievement_getToOneRelated">)),
    GameCenterAchievementsGroupAchievementGetToOneRelationship: (...args) => callOperation("gameCenterAchievements_groupAchievement_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_groupAchievement_getToOneRelationship">)),
    GameCenterAchievementsGroupAchievementUpdateToOneRelationship: (...args) => callOperation("gameCenterAchievements_groupAchievement_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_groupAchievement_updateToOneRelationship">)),
    GameCenterAchievementsLocalizationsGetToManyRelated: (...args) => callOperation("gameCenterAchievements_localizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_localizations_getToManyRelated">)),
    GameCenterAchievementsLocalizationsGetToManyRelationship: (...args) => callOperation("gameCenterAchievements_localizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_localizations_getToManyRelationship">)),
    GameCenterAchievementsReleasesGetToManyRelated: (...args) => callOperation("gameCenterAchievements_releases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_releases_getToManyRelated">)),
    GameCenterAchievementsReleasesGetToManyRelationship: (...args) => callOperation("gameCenterAchievements_releases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_releases_getToManyRelationship">)),
    GameCenterAchievementsUpdateInstance: (...args) => callOperation("gameCenterAchievements_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievements_updateInstance">)),
    GameCenterAchievementsV2ActivityUpdateToOneRelationship: (...args) => callOperation("gameCenterAchievementsV2_activity_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_activity_updateToOneRelationship">)),
    GameCenterAchievementsV2CreateInstance: (...args) => callOperation("gameCenterAchievementsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_createInstance">)),
    GameCenterAchievementsV2DeleteInstance: (...args) => callOperation("gameCenterAchievementsV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_deleteInstance">)),
    GameCenterAchievementsV2GetInstance: (...args) => callOperation("gameCenterAchievementsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_getInstance">)),
    GameCenterAchievementsV2UpdateInstance: (...args) => callOperation("gameCenterAchievementsV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_updateInstance">)),
    GameCenterAchievementsV2VersionsGetToManyRelated: (...args) => callOperation("gameCenterAchievementsV2_versions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_versions_getToManyRelated">)),
    GameCenterAchievementsV2VersionsGetToManyRelationship: (...args) => callOperation("gameCenterAchievementsV2_versions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementsV2_versions_getToManyRelationship">)),
  };
}
