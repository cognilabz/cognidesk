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
export const AppStoreFullApiGameCenterDetailsOperationKeys = [
  "gameCenterDetails_achievementReleases_getToManyRelated",
  "gameCenterDetails_achievementReleases_getToManyRelationship",
  "gameCenterDetails_activityReleases_getToManyRelated",
  "gameCenterDetails_activityReleases_getToManyRelationship",
  "gameCenterDetails_challengeReleases_getToManyRelated",
  "gameCenterDetails_challengeReleases_getToManyRelationship",
  "gameCenterDetails_challengesMinimumPlatformVersions_replaceToManyRelationship",
  "gameCenterDetails_classicMatchmakingRequests_getMetrics",
  "gameCenterDetails_createInstance",
  "gameCenterDetails_gameCenterAchievements_getToManyRelated",
  "gameCenterDetails_gameCenterAchievements_getToManyRelationship",
  "gameCenterDetails_gameCenterAchievements_replaceToManyRelationship",
  "gameCenterDetails_gameCenterAchievementsV2_getToManyRelated",
  "gameCenterDetails_gameCenterAchievementsV2_getToManyRelationship",
  "gameCenterDetails_gameCenterAchievementsV2_replaceToManyRelationship",
  "gameCenterDetails_gameCenterActivities_getToManyRelated",
  "gameCenterDetails_gameCenterActivities_getToManyRelationship",
  "gameCenterDetails_gameCenterAppVersions_getToManyRelated",
  "gameCenterDetails_gameCenterAppVersions_getToManyRelationship",
  "gameCenterDetails_gameCenterChallenges_getToManyRelated",
  "gameCenterDetails_gameCenterChallenges_getToManyRelationship",
  "gameCenterDetails_gameCenterGroup_getToOneRelated",
  "gameCenterDetails_gameCenterGroup_getToOneRelationship",
  "gameCenterDetails_gameCenterLeaderboardSets_getToManyRelated",
  "gameCenterDetails_gameCenterLeaderboardSets_getToManyRelationship",
  "gameCenterDetails_gameCenterLeaderboardSets_replaceToManyRelationship",
  "gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelated",
  "gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelationship",
  "gameCenterDetails_gameCenterLeaderboardSetsV2_replaceToManyRelationship",
  "gameCenterDetails_gameCenterLeaderboards_getToManyRelated",
  "gameCenterDetails_gameCenterLeaderboards_getToManyRelationship",
  "gameCenterDetails_gameCenterLeaderboards_replaceToManyRelationship",
  "gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelated",
  "gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelationship",
  "gameCenterDetails_gameCenterLeaderboardsV2_replaceToManyRelationship",
  "gameCenterDetails_getInstance",
  "gameCenterDetails_leaderboardReleases_getToManyRelated",
  "gameCenterDetails_leaderboardReleases_getToManyRelationship",
  "gameCenterDetails_leaderboardSetReleases_getToManyRelated",
  "gameCenterDetails_leaderboardSetReleases_getToManyRelationship",
  "gameCenterDetails_ruleBasedMatchmakingRequests_getMetrics",
  "gameCenterDetails_updateInstance"
] as const;
export type AppStoreFullApiGameCenterDetailsOperationKey = typeof AppStoreFullApiGameCenterDetailsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterDetailsOperationPathParamMap {
  "gameCenterDetails_achievementReleases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_achievementReleases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_activityReleases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_activityReleases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_challengeReleases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_challengeReleases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_challengesMinimumPlatformVersions_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_classicMatchmakingRequests_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_createInstance": {};
  "gameCenterDetails_gameCenterAchievements_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterAchievements_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterAchievements_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterAchievementsV2_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterAchievementsV2_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterAchievementsV2_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterActivities_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterActivities_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterAppVersions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterAppVersions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterChallenges_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterChallenges_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterGroup_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterGroup_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboardSets_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboardSets_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboardSets_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboardSetsV2_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboards_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboards_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboards_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_gameCenterLeaderboardsV2_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_leaderboardReleases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_leaderboardReleases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_leaderboardSetReleases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_leaderboardSetReleases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_ruleBasedMatchmakingRequests_getMetrics": { "id": AppStoreFullApiPathParamValue };
  "gameCenterDetails_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterDetailsOperationRequestMap {
  "gameCenterDetails_achievementReleases_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_achievementReleases_getToManyRelated">;
  "gameCenterDetails_achievementReleases_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_achievementReleases_getToManyRelationship">;
  "gameCenterDetails_activityReleases_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_activityReleases_getToManyRelated">;
  "gameCenterDetails_activityReleases_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_activityReleases_getToManyRelationship">;
  "gameCenterDetails_challengeReleases_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_challengeReleases_getToManyRelated">;
  "gameCenterDetails_challengeReleases_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_challengeReleases_getToManyRelationship">;
  "gameCenterDetails_challengesMinimumPlatformVersions_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_challengesMinimumPlatformVersions_replaceToManyRelationship">;
  "gameCenterDetails_classicMatchmakingRequests_getMetrics": AppStoreFullApiOperationInput<"gameCenterDetails_classicMatchmakingRequests_getMetrics">;
  "gameCenterDetails_createInstance": AppStoreFullApiOperationInput<"gameCenterDetails_createInstance">;
  "gameCenterDetails_gameCenterAchievements_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterAchievements_getToManyRelated">;
  "gameCenterDetails_gameCenterAchievements_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterAchievements_getToManyRelationship">;
  "gameCenterDetails_gameCenterAchievements_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterAchievements_replaceToManyRelationship">;
  "gameCenterDetails_gameCenterAchievementsV2_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterAchievementsV2_getToManyRelated">;
  "gameCenterDetails_gameCenterAchievementsV2_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterAchievementsV2_getToManyRelationship">;
  "gameCenterDetails_gameCenterAchievementsV2_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterAchievementsV2_replaceToManyRelationship">;
  "gameCenterDetails_gameCenterActivities_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterActivities_getToManyRelated">;
  "gameCenterDetails_gameCenterActivities_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterActivities_getToManyRelationship">;
  "gameCenterDetails_gameCenterAppVersions_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterAppVersions_getToManyRelated">;
  "gameCenterDetails_gameCenterAppVersions_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterAppVersions_getToManyRelationship">;
  "gameCenterDetails_gameCenterChallenges_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterChallenges_getToManyRelated">;
  "gameCenterDetails_gameCenterChallenges_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterChallenges_getToManyRelationship">;
  "gameCenterDetails_gameCenterGroup_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterGroup_getToOneRelated">;
  "gameCenterDetails_gameCenterGroup_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterGroup_getToOneRelationship">;
  "gameCenterDetails_gameCenterLeaderboardSets_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboardSets_getToManyRelated">;
  "gameCenterDetails_gameCenterLeaderboardSets_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboardSets_getToManyRelationship">;
  "gameCenterDetails_gameCenterLeaderboardSets_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboardSets_replaceToManyRelationship">;
  "gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelated">;
  "gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelationship">;
  "gameCenterDetails_gameCenterLeaderboardSetsV2_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboardSetsV2_replaceToManyRelationship">;
  "gameCenterDetails_gameCenterLeaderboards_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboards_getToManyRelated">;
  "gameCenterDetails_gameCenterLeaderboards_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboards_getToManyRelationship">;
  "gameCenterDetails_gameCenterLeaderboards_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboards_replaceToManyRelationship">;
  "gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelated">;
  "gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelationship">;
  "gameCenterDetails_gameCenterLeaderboardsV2_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_gameCenterLeaderboardsV2_replaceToManyRelationship">;
  "gameCenterDetails_getInstance": AppStoreFullApiOperationInput<"gameCenterDetails_getInstance">;
  "gameCenterDetails_leaderboardReleases_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_leaderboardReleases_getToManyRelated">;
  "gameCenterDetails_leaderboardReleases_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_leaderboardReleases_getToManyRelationship">;
  "gameCenterDetails_leaderboardSetReleases_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterDetails_leaderboardSetReleases_getToManyRelated">;
  "gameCenterDetails_leaderboardSetReleases_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterDetails_leaderboardSetReleases_getToManyRelationship">;
  "gameCenterDetails_ruleBasedMatchmakingRequests_getMetrics": AppStoreFullApiOperationInput<"gameCenterDetails_ruleBasedMatchmakingRequests_getMetrics">;
  "gameCenterDetails_updateInstance": AppStoreFullApiOperationInput<"gameCenterDetails_updateInstance">;
}

export interface AppStoreFullApiGameCenterDetailsGeneratedClient {
  GameCenterDetailsAchievementReleasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_achievementReleases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_achievementReleases_getToManyRelated"]>;
  GameCenterDetailsAchievementReleasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_achievementReleases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_achievementReleases_getToManyRelationship"]>;
  GameCenterDetailsActivityReleasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_activityReleases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_activityReleases_getToManyRelated"]>;
  GameCenterDetailsActivityReleasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_activityReleases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_activityReleases_getToManyRelationship"]>;
  GameCenterDetailsChallengeReleasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_challengeReleases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_challengeReleases_getToManyRelated"]>;
  GameCenterDetailsChallengeReleasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_challengeReleases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_challengeReleases_getToManyRelationship"]>;
  GameCenterDetailsChallengesMinimumPlatformVersionsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_challengesMinimumPlatformVersions_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_challengesMinimumPlatformVersions_replaceToManyRelationship"]>;
  GameCenterDetailsClassicMatchmakingRequestsGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_classicMatchmakingRequests_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_classicMatchmakingRequests_getMetrics"]>;
  GameCenterDetailsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_createInstance"]>;
  GameCenterDetailsGameCenterAchievementsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievements_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterAchievements_getToManyRelated"]>;
  GameCenterDetailsGameCenterAchievementsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievements_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterAchievements_getToManyRelationship"]>;
  GameCenterDetailsGameCenterAchievementsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievements_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterAchievements_replaceToManyRelationship"]>;
  GameCenterDetailsGameCenterAchievementsV2GetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievementsV2_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterAchievementsV2_getToManyRelated"]>;
  GameCenterDetailsGameCenterAchievementsV2GetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievementsV2_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterAchievementsV2_getToManyRelationship"]>;
  GameCenterDetailsGameCenterAchievementsV2ReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievementsV2_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterAchievementsV2_replaceToManyRelationship"]>;
  GameCenterDetailsGameCenterActivitiesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterActivities_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterActivities_getToManyRelated"]>;
  GameCenterDetailsGameCenterActivitiesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterActivities_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterActivities_getToManyRelationship"]>;
  GameCenterDetailsGameCenterAppVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAppVersions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterAppVersions_getToManyRelated"]>;
  GameCenterDetailsGameCenterAppVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAppVersions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterAppVersions_getToManyRelationship"]>;
  GameCenterDetailsGameCenterChallengesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterChallenges_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterChallenges_getToManyRelated"]>;
  GameCenterDetailsGameCenterChallengesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterChallenges_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterChallenges_getToManyRelationship"]>;
  GameCenterDetailsGameCenterGroupGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterGroup_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterGroup_getToOneRelated"]>;
  GameCenterDetailsGameCenterGroupGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterGroup_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterGroup_getToOneRelationship"]>;
  GameCenterDetailsGameCenterLeaderboardSetsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSets_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboardSets_getToManyRelated"]>;
  GameCenterDetailsGameCenterLeaderboardSetsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSets_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboardSets_getToManyRelationship"]>;
  GameCenterDetailsGameCenterLeaderboardSetsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSets_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboardSets_replaceToManyRelationship"]>;
  GameCenterDetailsGameCenterLeaderboardSetsV2GetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelated"]>;
  GameCenterDetailsGameCenterLeaderboardSetsV2GetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelationship"]>;
  GameCenterDetailsGameCenterLeaderboardSetsV2ReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSetsV2_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboardSetsV2_replaceToManyRelationship"]>;
  GameCenterDetailsGameCenterLeaderboardsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboards_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboards_getToManyRelated"]>;
  GameCenterDetailsGameCenterLeaderboardsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboards_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboards_getToManyRelationship"]>;
  GameCenterDetailsGameCenterLeaderboardsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboards_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboards_replaceToManyRelationship"]>;
  GameCenterDetailsGameCenterLeaderboardsV2GetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelated"]>;
  GameCenterDetailsGameCenterLeaderboardsV2GetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelationship"]>;
  GameCenterDetailsGameCenterLeaderboardsV2ReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardsV2_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_gameCenterLeaderboardsV2_replaceToManyRelationship"]>;
  GameCenterDetailsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_getInstance"]>;
  GameCenterDetailsLeaderboardReleasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_leaderboardReleases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_leaderboardReleases_getToManyRelated"]>;
  GameCenterDetailsLeaderboardReleasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_leaderboardReleases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_leaderboardReleases_getToManyRelationship"]>;
  GameCenterDetailsLeaderboardSetReleasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_leaderboardSetReleases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_leaderboardSetReleases_getToManyRelated"]>;
  GameCenterDetailsLeaderboardSetReleasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_leaderboardSetReleases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_leaderboardSetReleases_getToManyRelationship"]>;
  GameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_ruleBasedMatchmakingRequests_getMetrics">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_ruleBasedMatchmakingRequests_getMetrics"]>;
  GameCenterDetailsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterDetails_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterDetails_updateInstance"]>;
}

export const AppStoreFullApiGameCenterDetailsGeneratedFunctionNames = [
  "GameCenterDetailsAchievementReleasesGetToManyRelated",
  "GameCenterDetailsAchievementReleasesGetToManyRelationship",
  "GameCenterDetailsActivityReleasesGetToManyRelated",
  "GameCenterDetailsActivityReleasesGetToManyRelationship",
  "GameCenterDetailsChallengeReleasesGetToManyRelated",
  "GameCenterDetailsChallengeReleasesGetToManyRelationship",
  "GameCenterDetailsChallengesMinimumPlatformVersionsReplaceToManyRelationship",
  "GameCenterDetailsClassicMatchmakingRequestsGetMetrics",
  "GameCenterDetailsCreateInstance",
  "GameCenterDetailsGameCenterAchievementsGetToManyRelated",
  "GameCenterDetailsGameCenterAchievementsGetToManyRelationship",
  "GameCenterDetailsGameCenterAchievementsReplaceToManyRelationship",
  "GameCenterDetailsGameCenterAchievementsV2GetToManyRelated",
  "GameCenterDetailsGameCenterAchievementsV2GetToManyRelationship",
  "GameCenterDetailsGameCenterAchievementsV2ReplaceToManyRelationship",
  "GameCenterDetailsGameCenterActivitiesGetToManyRelated",
  "GameCenterDetailsGameCenterActivitiesGetToManyRelationship",
  "GameCenterDetailsGameCenterAppVersionsGetToManyRelated",
  "GameCenterDetailsGameCenterAppVersionsGetToManyRelationship",
  "GameCenterDetailsGameCenterChallengesGetToManyRelated",
  "GameCenterDetailsGameCenterChallengesGetToManyRelationship",
  "GameCenterDetailsGameCenterGroupGetToOneRelated",
  "GameCenterDetailsGameCenterGroupGetToOneRelationship",
  "GameCenterDetailsGameCenterLeaderboardSetsGetToManyRelated",
  "GameCenterDetailsGameCenterLeaderboardSetsGetToManyRelationship",
  "GameCenterDetailsGameCenterLeaderboardSetsReplaceToManyRelationship",
  "GameCenterDetailsGameCenterLeaderboardSetsV2GetToManyRelated",
  "GameCenterDetailsGameCenterLeaderboardSetsV2GetToManyRelationship",
  "GameCenterDetailsGameCenterLeaderboardSetsV2ReplaceToManyRelationship",
  "GameCenterDetailsGameCenterLeaderboardsGetToManyRelated",
  "GameCenterDetailsGameCenterLeaderboardsGetToManyRelationship",
  "GameCenterDetailsGameCenterLeaderboardsReplaceToManyRelationship",
  "GameCenterDetailsGameCenterLeaderboardsV2GetToManyRelated",
  "GameCenterDetailsGameCenterLeaderboardsV2GetToManyRelationship",
  "GameCenterDetailsGameCenterLeaderboardsV2ReplaceToManyRelationship",
  "GameCenterDetailsGetInstance",
  "GameCenterDetailsLeaderboardReleasesGetToManyRelated",
  "GameCenterDetailsLeaderboardReleasesGetToManyRelationship",
  "GameCenterDetailsLeaderboardSetReleasesGetToManyRelated",
  "GameCenterDetailsLeaderboardSetReleasesGetToManyRelationship",
  "GameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics",
  "GameCenterDetailsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterDetailsGeneratedClient)[];

export function createAppStoreFullApiGameCenterDetailsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterDetailsGeneratedClient {
  return {
    GameCenterDetailsAchievementReleasesGetToManyRelated: (...args) => callOperation("gameCenterDetails_achievementReleases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_achievementReleases_getToManyRelated">)),
    GameCenterDetailsAchievementReleasesGetToManyRelationship: (...args) => callOperation("gameCenterDetails_achievementReleases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_achievementReleases_getToManyRelationship">)),
    GameCenterDetailsActivityReleasesGetToManyRelated: (...args) => callOperation("gameCenterDetails_activityReleases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_activityReleases_getToManyRelated">)),
    GameCenterDetailsActivityReleasesGetToManyRelationship: (...args) => callOperation("gameCenterDetails_activityReleases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_activityReleases_getToManyRelationship">)),
    GameCenterDetailsChallengeReleasesGetToManyRelated: (...args) => callOperation("gameCenterDetails_challengeReleases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_challengeReleases_getToManyRelated">)),
    GameCenterDetailsChallengeReleasesGetToManyRelationship: (...args) => callOperation("gameCenterDetails_challengeReleases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_challengeReleases_getToManyRelationship">)),
    GameCenterDetailsChallengesMinimumPlatformVersionsReplaceToManyRelationship: (...args) => callOperation("gameCenterDetails_challengesMinimumPlatformVersions_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_challengesMinimumPlatformVersions_replaceToManyRelationship">)),
    GameCenterDetailsClassicMatchmakingRequestsGetMetrics: (...args) => callOperation("gameCenterDetails_classicMatchmakingRequests_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_classicMatchmakingRequests_getMetrics">)),
    GameCenterDetailsCreateInstance: (...args) => callOperation("gameCenterDetails_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_createInstance">)),
    GameCenterDetailsGameCenterAchievementsGetToManyRelated: (...args) => callOperation("gameCenterDetails_gameCenterAchievements_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievements_getToManyRelated">)),
    GameCenterDetailsGameCenterAchievementsGetToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterAchievements_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievements_getToManyRelationship">)),
    GameCenterDetailsGameCenterAchievementsReplaceToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterAchievements_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievements_replaceToManyRelationship">)),
    GameCenterDetailsGameCenterAchievementsV2GetToManyRelated: (...args) => callOperation("gameCenterDetails_gameCenterAchievementsV2_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievementsV2_getToManyRelated">)),
    GameCenterDetailsGameCenterAchievementsV2GetToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterAchievementsV2_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievementsV2_getToManyRelationship">)),
    GameCenterDetailsGameCenterAchievementsV2ReplaceToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterAchievementsV2_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAchievementsV2_replaceToManyRelationship">)),
    GameCenterDetailsGameCenterActivitiesGetToManyRelated: (...args) => callOperation("gameCenterDetails_gameCenterActivities_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterActivities_getToManyRelated">)),
    GameCenterDetailsGameCenterActivitiesGetToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterActivities_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterActivities_getToManyRelationship">)),
    GameCenterDetailsGameCenterAppVersionsGetToManyRelated: (...args) => callOperation("gameCenterDetails_gameCenterAppVersions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAppVersions_getToManyRelated">)),
    GameCenterDetailsGameCenterAppVersionsGetToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterAppVersions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterAppVersions_getToManyRelationship">)),
    GameCenterDetailsGameCenterChallengesGetToManyRelated: (...args) => callOperation("gameCenterDetails_gameCenterChallenges_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterChallenges_getToManyRelated">)),
    GameCenterDetailsGameCenterChallengesGetToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterChallenges_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterChallenges_getToManyRelationship">)),
    GameCenterDetailsGameCenterGroupGetToOneRelated: (...args) => callOperation("gameCenterDetails_gameCenterGroup_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterGroup_getToOneRelated">)),
    GameCenterDetailsGameCenterGroupGetToOneRelationship: (...args) => callOperation("gameCenterDetails_gameCenterGroup_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterGroup_getToOneRelationship">)),
    GameCenterDetailsGameCenterLeaderboardSetsGetToManyRelated: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboardSets_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSets_getToManyRelated">)),
    GameCenterDetailsGameCenterLeaderboardSetsGetToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboardSets_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSets_getToManyRelationship">)),
    GameCenterDetailsGameCenterLeaderboardSetsReplaceToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboardSets_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSets_replaceToManyRelationship">)),
    GameCenterDetailsGameCenterLeaderboardSetsV2GetToManyRelated: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelated">)),
    GameCenterDetailsGameCenterLeaderboardSetsV2GetToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSetsV2_getToManyRelationship">)),
    GameCenterDetailsGameCenterLeaderboardSetsV2ReplaceToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboardSetsV2_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardSetsV2_replaceToManyRelationship">)),
    GameCenterDetailsGameCenterLeaderboardsGetToManyRelated: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboards_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboards_getToManyRelated">)),
    GameCenterDetailsGameCenterLeaderboardsGetToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboards_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboards_getToManyRelationship">)),
    GameCenterDetailsGameCenterLeaderboardsReplaceToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboards_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboards_replaceToManyRelationship">)),
    GameCenterDetailsGameCenterLeaderboardsV2GetToManyRelated: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelated">)),
    GameCenterDetailsGameCenterLeaderboardsV2GetToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardsV2_getToManyRelationship">)),
    GameCenterDetailsGameCenterLeaderboardsV2ReplaceToManyRelationship: (...args) => callOperation("gameCenterDetails_gameCenterLeaderboardsV2_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_gameCenterLeaderboardsV2_replaceToManyRelationship">)),
    GameCenterDetailsGetInstance: (...args) => callOperation("gameCenterDetails_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_getInstance">)),
    GameCenterDetailsLeaderboardReleasesGetToManyRelated: (...args) => callOperation("gameCenterDetails_leaderboardReleases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_leaderboardReleases_getToManyRelated">)),
    GameCenterDetailsLeaderboardReleasesGetToManyRelationship: (...args) => callOperation("gameCenterDetails_leaderboardReleases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_leaderboardReleases_getToManyRelationship">)),
    GameCenterDetailsLeaderboardSetReleasesGetToManyRelated: (...args) => callOperation("gameCenterDetails_leaderboardSetReleases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_leaderboardSetReleases_getToManyRelated">)),
    GameCenterDetailsLeaderboardSetReleasesGetToManyRelationship: (...args) => callOperation("gameCenterDetails_leaderboardSetReleases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_leaderboardSetReleases_getToManyRelationship">)),
    GameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics: (...args) => callOperation("gameCenterDetails_ruleBasedMatchmakingRequests_getMetrics", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_ruleBasedMatchmakingRequests_getMetrics">)),
    GameCenterDetailsUpdateInstance: (...args) => callOperation("gameCenterDetails_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterDetails_updateInstance">)),
  };
}
