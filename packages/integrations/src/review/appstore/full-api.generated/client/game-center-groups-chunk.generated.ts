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
export const AppStoreFullApiGameCenterGroupsOperationKeys = [
  "gameCenterGroups_createInstance",
  "gameCenterGroups_deleteInstance",
  "gameCenterGroups_gameCenterAchievements_getToManyRelated",
  "gameCenterGroups_gameCenterAchievements_getToManyRelationship",
  "gameCenterGroups_gameCenterAchievements_replaceToManyRelationship",
  "gameCenterGroups_gameCenterAchievementsV2_getToManyRelated",
  "gameCenterGroups_gameCenterAchievementsV2_getToManyRelationship",
  "gameCenterGroups_gameCenterAchievementsV2_replaceToManyRelationship",
  "gameCenterGroups_gameCenterActivities_getToManyRelated",
  "gameCenterGroups_gameCenterActivities_getToManyRelationship",
  "gameCenterGroups_gameCenterChallenges_getToManyRelated",
  "gameCenterGroups_gameCenterChallenges_getToManyRelationship",
  "gameCenterGroups_gameCenterDetails_getToManyRelated",
  "gameCenterGroups_gameCenterDetails_getToManyRelationship",
  "gameCenterGroups_gameCenterLeaderboardSets_getToManyRelated",
  "gameCenterGroups_gameCenterLeaderboardSets_getToManyRelationship",
  "gameCenterGroups_gameCenterLeaderboardSets_replaceToManyRelationship",
  "gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelated",
  "gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelationship",
  "gameCenterGroups_gameCenterLeaderboardSetsV2_replaceToManyRelationship",
  "gameCenterGroups_gameCenterLeaderboards_getToManyRelated",
  "gameCenterGroups_gameCenterLeaderboards_getToManyRelationship",
  "gameCenterGroups_gameCenterLeaderboards_replaceToManyRelationship",
  "gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelated",
  "gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelationship",
  "gameCenterGroups_gameCenterLeaderboardsV2_replaceToManyRelationship",
  "gameCenterGroups_getCollection",
  "gameCenterGroups_getInstance",
  "gameCenterGroups_updateInstance"
] as const;
export type AppStoreFullApiGameCenterGroupsOperationKey = typeof AppStoreFullApiGameCenterGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterGroupsOperationPathParamMap {
  "gameCenterGroups_createInstance": {};
  "gameCenterGroups_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterAchievements_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterAchievements_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterAchievements_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterAchievementsV2_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterAchievementsV2_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterAchievementsV2_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterActivities_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterActivities_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterChallenges_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterChallenges_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterDetails_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterDetails_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboardSets_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboardSets_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboardSets_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboardSetsV2_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboards_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboards_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboards_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_gameCenterLeaderboardsV2_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_getCollection": {};
  "gameCenterGroups_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterGroups_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterGroupsOperationRequestMap {
  "gameCenterGroups_createInstance": AppStoreFullApiOperationInput<"gameCenterGroups_createInstance">;
  "gameCenterGroups_deleteInstance": AppStoreFullApiOperationInput<"gameCenterGroups_deleteInstance">;
  "gameCenterGroups_gameCenterAchievements_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterAchievements_getToManyRelated">;
  "gameCenterGroups_gameCenterAchievements_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterAchievements_getToManyRelationship">;
  "gameCenterGroups_gameCenterAchievements_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterAchievements_replaceToManyRelationship">;
  "gameCenterGroups_gameCenterAchievementsV2_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterAchievementsV2_getToManyRelated">;
  "gameCenterGroups_gameCenterAchievementsV2_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterAchievementsV2_getToManyRelationship">;
  "gameCenterGroups_gameCenterAchievementsV2_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterAchievementsV2_replaceToManyRelationship">;
  "gameCenterGroups_gameCenterActivities_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterActivities_getToManyRelated">;
  "gameCenterGroups_gameCenterActivities_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterActivities_getToManyRelationship">;
  "gameCenterGroups_gameCenterChallenges_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterChallenges_getToManyRelated">;
  "gameCenterGroups_gameCenterChallenges_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterChallenges_getToManyRelationship">;
  "gameCenterGroups_gameCenterDetails_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterDetails_getToManyRelated">;
  "gameCenterGroups_gameCenterDetails_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterDetails_getToManyRelationship">;
  "gameCenterGroups_gameCenterLeaderboardSets_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboardSets_getToManyRelated">;
  "gameCenterGroups_gameCenterLeaderboardSets_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboardSets_getToManyRelationship">;
  "gameCenterGroups_gameCenterLeaderboardSets_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboardSets_replaceToManyRelationship">;
  "gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelated">;
  "gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelationship">;
  "gameCenterGroups_gameCenterLeaderboardSetsV2_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboardSetsV2_replaceToManyRelationship">;
  "gameCenterGroups_gameCenterLeaderboards_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboards_getToManyRelated">;
  "gameCenterGroups_gameCenterLeaderboards_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboards_getToManyRelationship">;
  "gameCenterGroups_gameCenterLeaderboards_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboards_replaceToManyRelationship">;
  "gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelated">;
  "gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelationship">;
  "gameCenterGroups_gameCenterLeaderboardsV2_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterGroups_gameCenterLeaderboardsV2_replaceToManyRelationship">;
  "gameCenterGroups_getCollection": AppStoreFullApiOperationInput<"gameCenterGroups_getCollection">;
  "gameCenterGroups_getInstance": AppStoreFullApiOperationInput<"gameCenterGroups_getInstance">;
  "gameCenterGroups_updateInstance": AppStoreFullApiOperationInput<"gameCenterGroups_updateInstance">;
}

export interface AppStoreFullApiGameCenterGroupsGeneratedClient {
  GameCenterGroupsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_createInstance"]>;
  GameCenterGroupsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_deleteInstance"]>;
  GameCenterGroupsGameCenterAchievementsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievements_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterAchievements_getToManyRelated"]>;
  GameCenterGroupsGameCenterAchievementsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievements_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterAchievements_getToManyRelationship"]>;
  GameCenterGroupsGameCenterAchievementsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievements_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterAchievements_replaceToManyRelationship"]>;
  GameCenterGroupsGameCenterAchievementsV2GetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievementsV2_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterAchievementsV2_getToManyRelated"]>;
  GameCenterGroupsGameCenterAchievementsV2GetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievementsV2_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterAchievementsV2_getToManyRelationship"]>;
  GameCenterGroupsGameCenterAchievementsV2ReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievementsV2_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterAchievementsV2_replaceToManyRelationship"]>;
  GameCenterGroupsGameCenterActivitiesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterActivities_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterActivities_getToManyRelated"]>;
  GameCenterGroupsGameCenterActivitiesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterActivities_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterActivities_getToManyRelationship"]>;
  GameCenterGroupsGameCenterChallengesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterChallenges_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterChallenges_getToManyRelated"]>;
  GameCenterGroupsGameCenterChallengesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterChallenges_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterChallenges_getToManyRelationship"]>;
  GameCenterGroupsGameCenterDetailsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterDetails_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterDetails_getToManyRelated"]>;
  GameCenterGroupsGameCenterDetailsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterDetails_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterDetails_getToManyRelationship"]>;
  GameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSets_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboardSets_getToManyRelated"]>;
  GameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSets_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboardSets_getToManyRelationship"]>;
  GameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSets_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboardSets_replaceToManyRelationship"]>;
  GameCenterGroupsGameCenterLeaderboardSetsV2GetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelated"]>;
  GameCenterGroupsGameCenterLeaderboardSetsV2GetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelationship"]>;
  GameCenterGroupsGameCenterLeaderboardSetsV2ReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSetsV2_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboardSetsV2_replaceToManyRelationship"]>;
  GameCenterGroupsGameCenterLeaderboardsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboards_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboards_getToManyRelated"]>;
  GameCenterGroupsGameCenterLeaderboardsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboards_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboards_getToManyRelationship"]>;
  GameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboards_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboards_replaceToManyRelationship"]>;
  GameCenterGroupsGameCenterLeaderboardsV2GetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelated"]>;
  GameCenterGroupsGameCenterLeaderboardsV2GetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelationship"]>;
  GameCenterGroupsGameCenterLeaderboardsV2ReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardsV2_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_gameCenterLeaderboardsV2_replaceToManyRelationship"]>;
  GameCenterGroupsGetCollection(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_getCollection">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_getCollection"]>;
  GameCenterGroupsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_getInstance"]>;
  GameCenterGroupsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterGroups_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterGroups_updateInstance"]>;
}

export const AppStoreFullApiGameCenterGroupsGeneratedFunctionNames = [
  "GameCenterGroupsCreateInstance",
  "GameCenterGroupsDeleteInstance",
  "GameCenterGroupsGameCenterAchievementsGetToManyRelated",
  "GameCenterGroupsGameCenterAchievementsGetToManyRelationship",
  "GameCenterGroupsGameCenterAchievementsReplaceToManyRelationship",
  "GameCenterGroupsGameCenterAchievementsV2GetToManyRelated",
  "GameCenterGroupsGameCenterAchievementsV2GetToManyRelationship",
  "GameCenterGroupsGameCenterAchievementsV2ReplaceToManyRelationship",
  "GameCenterGroupsGameCenterActivitiesGetToManyRelated",
  "GameCenterGroupsGameCenterActivitiesGetToManyRelationship",
  "GameCenterGroupsGameCenterChallengesGetToManyRelated",
  "GameCenterGroupsGameCenterChallengesGetToManyRelationship",
  "GameCenterGroupsGameCenterDetailsGetToManyRelated",
  "GameCenterGroupsGameCenterDetailsGetToManyRelationship",
  "GameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated",
  "GameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship",
  "GameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship",
  "GameCenterGroupsGameCenterLeaderboardSetsV2GetToManyRelated",
  "GameCenterGroupsGameCenterLeaderboardSetsV2GetToManyRelationship",
  "GameCenterGroupsGameCenterLeaderboardSetsV2ReplaceToManyRelationship",
  "GameCenterGroupsGameCenterLeaderboardsGetToManyRelated",
  "GameCenterGroupsGameCenterLeaderboardsGetToManyRelationship",
  "GameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship",
  "GameCenterGroupsGameCenterLeaderboardsV2GetToManyRelated",
  "GameCenterGroupsGameCenterLeaderboardsV2GetToManyRelationship",
  "GameCenterGroupsGameCenterLeaderboardsV2ReplaceToManyRelationship",
  "GameCenterGroupsGetCollection",
  "GameCenterGroupsGetInstance",
  "GameCenterGroupsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterGroupsGeneratedClient)[];

export function createAppStoreFullApiGameCenterGroupsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterGroupsGeneratedClient {
  return {
    GameCenterGroupsCreateInstance: (...args) => callOperation("gameCenterGroups_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_createInstance">)),
    GameCenterGroupsDeleteInstance: (...args) => callOperation("gameCenterGroups_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_deleteInstance">)),
    GameCenterGroupsGameCenterAchievementsGetToManyRelated: (...args) => callOperation("gameCenterGroups_gameCenterAchievements_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievements_getToManyRelated">)),
    GameCenterGroupsGameCenterAchievementsGetToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterAchievements_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievements_getToManyRelationship">)),
    GameCenterGroupsGameCenterAchievementsReplaceToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterAchievements_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievements_replaceToManyRelationship">)),
    GameCenterGroupsGameCenterAchievementsV2GetToManyRelated: (...args) => callOperation("gameCenterGroups_gameCenterAchievementsV2_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievementsV2_getToManyRelated">)),
    GameCenterGroupsGameCenterAchievementsV2GetToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterAchievementsV2_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievementsV2_getToManyRelationship">)),
    GameCenterGroupsGameCenterAchievementsV2ReplaceToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterAchievementsV2_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterAchievementsV2_replaceToManyRelationship">)),
    GameCenterGroupsGameCenterActivitiesGetToManyRelated: (...args) => callOperation("gameCenterGroups_gameCenterActivities_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterActivities_getToManyRelated">)),
    GameCenterGroupsGameCenterActivitiesGetToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterActivities_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterActivities_getToManyRelationship">)),
    GameCenterGroupsGameCenterChallengesGetToManyRelated: (...args) => callOperation("gameCenterGroups_gameCenterChallenges_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterChallenges_getToManyRelated">)),
    GameCenterGroupsGameCenterChallengesGetToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterChallenges_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterChallenges_getToManyRelationship">)),
    GameCenterGroupsGameCenterDetailsGetToManyRelated: (...args) => callOperation("gameCenterGroups_gameCenterDetails_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterDetails_getToManyRelated">)),
    GameCenterGroupsGameCenterDetailsGetToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterDetails_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterDetails_getToManyRelationship">)),
    GameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboardSets_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSets_getToManyRelated">)),
    GameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboardSets_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSets_getToManyRelationship">)),
    GameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboardSets_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSets_replaceToManyRelationship">)),
    GameCenterGroupsGameCenterLeaderboardSetsV2GetToManyRelated: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelated">)),
    GameCenterGroupsGameCenterLeaderboardSetsV2GetToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSetsV2_getToManyRelationship">)),
    GameCenterGroupsGameCenterLeaderboardSetsV2ReplaceToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboardSetsV2_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardSetsV2_replaceToManyRelationship">)),
    GameCenterGroupsGameCenterLeaderboardsGetToManyRelated: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboards_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboards_getToManyRelated">)),
    GameCenterGroupsGameCenterLeaderboardsGetToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboards_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboards_getToManyRelationship">)),
    GameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboards_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboards_replaceToManyRelationship">)),
    GameCenterGroupsGameCenterLeaderboardsV2GetToManyRelated: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelated">)),
    GameCenterGroupsGameCenterLeaderboardsV2GetToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardsV2_getToManyRelationship">)),
    GameCenterGroupsGameCenterLeaderboardsV2ReplaceToManyRelationship: (...args) => callOperation("gameCenterGroups_gameCenterLeaderboardsV2_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_gameCenterLeaderboardsV2_replaceToManyRelationship">)),
    GameCenterGroupsGetCollection: (...args) => callOperation("gameCenterGroups_getCollection", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_getCollection">)),
    GameCenterGroupsGetInstance: (...args) => callOperation("gameCenterGroups_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_getInstance">)),
    GameCenterGroupsUpdateInstance: (...args) => callOperation("gameCenterGroups_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterGroups_updateInstance">)),
  };
}
