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
export const AppStoreFullApiGameCenterActivitiesOperationKeys = [
  "gameCenterActivities_achievements_createToManyRelationship",
  "gameCenterActivities_achievements_deleteToManyRelationship",
  "gameCenterActivities_achievementsV2_createToManyRelationship",
  "gameCenterActivities_achievementsV2_deleteToManyRelationship",
  "gameCenterActivities_createInstance",
  "gameCenterActivities_deleteInstance",
  "gameCenterActivities_getInstance",
  "gameCenterActivities_leaderboards_createToManyRelationship",
  "gameCenterActivities_leaderboards_deleteToManyRelationship",
  "gameCenterActivities_leaderboardsV2_createToManyRelationship",
  "gameCenterActivities_leaderboardsV2_deleteToManyRelationship",
  "gameCenterActivities_updateInstance",
  "gameCenterActivities_versions_getToManyRelated",
  "gameCenterActivities_versions_getToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterActivitiesOperationKey = typeof AppStoreFullApiGameCenterActivitiesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterActivitiesOperationPathParamMap {
  "gameCenterActivities_achievements_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_achievements_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_achievementsV2_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_achievementsV2_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_createInstance": {};
  "gameCenterActivities_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_leaderboards_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_leaderboards_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_leaderboardsV2_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_leaderboardsV2_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_versions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivities_versions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterActivitiesOperationRequestMap {
  "gameCenterActivities_achievements_createToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivities_achievements_createToManyRelationship">;
  "gameCenterActivities_achievements_deleteToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivities_achievements_deleteToManyRelationship">;
  "gameCenterActivities_achievementsV2_createToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivities_achievementsV2_createToManyRelationship">;
  "gameCenterActivities_achievementsV2_deleteToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivities_achievementsV2_deleteToManyRelationship">;
  "gameCenterActivities_createInstance": AppStoreFullApiOperationInput<"gameCenterActivities_createInstance">;
  "gameCenterActivities_deleteInstance": AppStoreFullApiOperationInput<"gameCenterActivities_deleteInstance">;
  "gameCenterActivities_getInstance": AppStoreFullApiOperationInput<"gameCenterActivities_getInstance">;
  "gameCenterActivities_leaderboards_createToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivities_leaderboards_createToManyRelationship">;
  "gameCenterActivities_leaderboards_deleteToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivities_leaderboards_deleteToManyRelationship">;
  "gameCenterActivities_leaderboardsV2_createToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivities_leaderboardsV2_createToManyRelationship">;
  "gameCenterActivities_leaderboardsV2_deleteToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivities_leaderboardsV2_deleteToManyRelationship">;
  "gameCenterActivities_updateInstance": AppStoreFullApiOperationInput<"gameCenterActivities_updateInstance">;
  "gameCenterActivities_versions_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterActivities_versions_getToManyRelated">;
  "gameCenterActivities_versions_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivities_versions_getToManyRelationship">;
}

export interface AppStoreFullApiGameCenterActivitiesGeneratedClient {
  GameCenterActivitiesAchievementsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_achievements_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_achievements_createToManyRelationship"]>;
  GameCenterActivitiesAchievementsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_achievements_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_achievements_deleteToManyRelationship"]>;
  GameCenterActivitiesAchievementsV2CreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_achievementsV2_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_achievementsV2_createToManyRelationship"]>;
  GameCenterActivitiesAchievementsV2DeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_achievementsV2_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_achievementsV2_deleteToManyRelationship"]>;
  GameCenterActivitiesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_createInstance"]>;
  GameCenterActivitiesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_deleteInstance"]>;
  GameCenterActivitiesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_getInstance"]>;
  GameCenterActivitiesLeaderboardsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_leaderboards_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_leaderboards_createToManyRelationship"]>;
  GameCenterActivitiesLeaderboardsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_leaderboards_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_leaderboards_deleteToManyRelationship"]>;
  GameCenterActivitiesLeaderboardsV2CreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_leaderboardsV2_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_leaderboardsV2_createToManyRelationship"]>;
  GameCenterActivitiesLeaderboardsV2DeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_leaderboardsV2_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_leaderboardsV2_deleteToManyRelationship"]>;
  GameCenterActivitiesUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_updateInstance"]>;
  GameCenterActivitiesVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_versions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_versions_getToManyRelated"]>;
  GameCenterActivitiesVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivities_versions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivities_versions_getToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterActivitiesGeneratedFunctionNames = [
  "GameCenterActivitiesAchievementsCreateToManyRelationship",
  "GameCenterActivitiesAchievementsDeleteToManyRelationship",
  "GameCenterActivitiesAchievementsV2CreateToManyRelationship",
  "GameCenterActivitiesAchievementsV2DeleteToManyRelationship",
  "GameCenterActivitiesCreateInstance",
  "GameCenterActivitiesDeleteInstance",
  "GameCenterActivitiesGetInstance",
  "GameCenterActivitiesLeaderboardsCreateToManyRelationship",
  "GameCenterActivitiesLeaderboardsDeleteToManyRelationship",
  "GameCenterActivitiesLeaderboardsV2CreateToManyRelationship",
  "GameCenterActivitiesLeaderboardsV2DeleteToManyRelationship",
  "GameCenterActivitiesUpdateInstance",
  "GameCenterActivitiesVersionsGetToManyRelated",
  "GameCenterActivitiesVersionsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterActivitiesGeneratedClient)[];

export function createAppStoreFullApiGameCenterActivitiesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterActivitiesGeneratedClient {
  return {
    GameCenterActivitiesAchievementsCreateToManyRelationship: (...args) => callOperation("gameCenterActivities_achievements_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_achievements_createToManyRelationship">)),
    GameCenterActivitiesAchievementsDeleteToManyRelationship: (...args) => callOperation("gameCenterActivities_achievements_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_achievements_deleteToManyRelationship">)),
    GameCenterActivitiesAchievementsV2CreateToManyRelationship: (...args) => callOperation("gameCenterActivities_achievementsV2_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_achievementsV2_createToManyRelationship">)),
    GameCenterActivitiesAchievementsV2DeleteToManyRelationship: (...args) => callOperation("gameCenterActivities_achievementsV2_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_achievementsV2_deleteToManyRelationship">)),
    GameCenterActivitiesCreateInstance: (...args) => callOperation("gameCenterActivities_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_createInstance">)),
    GameCenterActivitiesDeleteInstance: (...args) => callOperation("gameCenterActivities_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_deleteInstance">)),
    GameCenterActivitiesGetInstance: (...args) => callOperation("gameCenterActivities_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_getInstance">)),
    GameCenterActivitiesLeaderboardsCreateToManyRelationship: (...args) => callOperation("gameCenterActivities_leaderboards_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_leaderboards_createToManyRelationship">)),
    GameCenterActivitiesLeaderboardsDeleteToManyRelationship: (...args) => callOperation("gameCenterActivities_leaderboards_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_leaderboards_deleteToManyRelationship">)),
    GameCenterActivitiesLeaderboardsV2CreateToManyRelationship: (...args) => callOperation("gameCenterActivities_leaderboardsV2_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_leaderboardsV2_createToManyRelationship">)),
    GameCenterActivitiesLeaderboardsV2DeleteToManyRelationship: (...args) => callOperation("gameCenterActivities_leaderboardsV2_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_leaderboardsV2_deleteToManyRelationship">)),
    GameCenterActivitiesUpdateInstance: (...args) => callOperation("gameCenterActivities_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_updateInstance">)),
    GameCenterActivitiesVersionsGetToManyRelated: (...args) => callOperation("gameCenterActivities_versions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_versions_getToManyRelated">)),
    GameCenterActivitiesVersionsGetToManyRelationship: (...args) => callOperation("gameCenterActivities_versions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivities_versions_getToManyRelationship">)),
  };
}
