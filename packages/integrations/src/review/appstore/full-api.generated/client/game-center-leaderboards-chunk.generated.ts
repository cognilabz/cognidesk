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
export const AppStoreFullApiGameCenterLeaderboardsOperationKeys = [
  "gameCenterLeaderboards_activity_updateToOneRelationship",
  "gameCenterLeaderboards_challenge_updateToOneRelationship",
  "gameCenterLeaderboards_createInstance",
  "gameCenterLeaderboards_deleteInstance",
  "gameCenterLeaderboards_getInstance",
  "gameCenterLeaderboards_groupLeaderboard_getToOneRelated",
  "gameCenterLeaderboards_groupLeaderboard_getToOneRelationship",
  "gameCenterLeaderboards_groupLeaderboard_updateToOneRelationship",
  "gameCenterLeaderboards_localizations_getToManyRelated",
  "gameCenterLeaderboards_localizations_getToManyRelationship",
  "gameCenterLeaderboards_releases_getToManyRelated",
  "gameCenterLeaderboards_releases_getToManyRelationship",
  "gameCenterLeaderboards_updateInstance",
  "gameCenterLeaderboardsV2_activity_updateToOneRelationship",
  "gameCenterLeaderboardsV2_challenge_updateToOneRelationship",
  "gameCenterLeaderboardsV2_createInstance",
  "gameCenterLeaderboardsV2_deleteInstance",
  "gameCenterLeaderboardsV2_getInstance",
  "gameCenterLeaderboardsV2_updateInstance",
  "gameCenterLeaderboardsV2_versions_getToManyRelated",
  "gameCenterLeaderboardsV2_versions_getToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterLeaderboardsOperationKey = typeof AppStoreFullApiGameCenterLeaderboardsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardsOperationPathParamMap {
  "gameCenterLeaderboards_activity_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_challenge_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_createInstance": {};
  "gameCenterLeaderboards_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_groupLeaderboard_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_groupLeaderboard_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_groupLeaderboard_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_localizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_localizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_releases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_releases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboards_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardsV2_activity_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardsV2_challenge_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardsV2_createInstance": {};
  "gameCenterLeaderboardsV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardsV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardsV2_versions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardsV2_versions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardsOperationRequestMap {
  "gameCenterLeaderboards_activity_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboards_activity_updateToOneRelationship">;
  "gameCenterLeaderboards_challenge_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboards_challenge_updateToOneRelationship">;
  "gameCenterLeaderboards_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboards_createInstance">;
  "gameCenterLeaderboards_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboards_deleteInstance">;
  "gameCenterLeaderboards_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboards_getInstance">;
  "gameCenterLeaderboards_groupLeaderboard_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboards_groupLeaderboard_getToOneRelated">;
  "gameCenterLeaderboards_groupLeaderboard_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboards_groupLeaderboard_getToOneRelationship">;
  "gameCenterLeaderboards_groupLeaderboard_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboards_groupLeaderboard_updateToOneRelationship">;
  "gameCenterLeaderboards_localizations_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboards_localizations_getToManyRelated">;
  "gameCenterLeaderboards_localizations_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboards_localizations_getToManyRelationship">;
  "gameCenterLeaderboards_releases_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboards_releases_getToManyRelated">;
  "gameCenterLeaderboards_releases_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboards_releases_getToManyRelationship">;
  "gameCenterLeaderboards_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboards_updateInstance">;
  "gameCenterLeaderboardsV2_activity_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardsV2_activity_updateToOneRelationship">;
  "gameCenterLeaderboardsV2_challenge_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardsV2_challenge_updateToOneRelationship">;
  "gameCenterLeaderboardsV2_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardsV2_createInstance">;
  "gameCenterLeaderboardsV2_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardsV2_deleteInstance">;
  "gameCenterLeaderboardsV2_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardsV2_getInstance">;
  "gameCenterLeaderboardsV2_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardsV2_updateInstance">;
  "gameCenterLeaderboardsV2_versions_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardsV2_versions_getToManyRelated">;
  "gameCenterLeaderboardsV2_versions_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardsV2_versions_getToManyRelationship">;
}

export interface AppStoreFullApiGameCenterLeaderboardsGeneratedClient {
  GameCenterLeaderboardsActivityUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_activity_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_activity_updateToOneRelationship"]>;
  GameCenterLeaderboardsChallengeUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_challenge_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_challenge_updateToOneRelationship"]>;
  GameCenterLeaderboardsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_createInstance"]>;
  GameCenterLeaderboardsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_deleteInstance"]>;
  GameCenterLeaderboardsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_getInstance"]>;
  GameCenterLeaderboardsGroupLeaderboardGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_groupLeaderboard_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_groupLeaderboard_getToOneRelated"]>;
  GameCenterLeaderboardsGroupLeaderboardGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_groupLeaderboard_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_groupLeaderboard_getToOneRelationship"]>;
  GameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_groupLeaderboard_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_groupLeaderboard_updateToOneRelationship"]>;
  GameCenterLeaderboardsLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_localizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_localizations_getToManyRelated"]>;
  GameCenterLeaderboardsLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_localizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_localizations_getToManyRelationship"]>;
  GameCenterLeaderboardsReleasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_releases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_releases_getToManyRelated"]>;
  GameCenterLeaderboardsReleasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_releases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_releases_getToManyRelationship"]>;
  GameCenterLeaderboardsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboards_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboards_updateInstance"]>;
  GameCenterLeaderboardsV2ActivityUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_activity_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardsV2_activity_updateToOneRelationship"]>;
  GameCenterLeaderboardsV2ChallengeUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_challenge_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardsV2_challenge_updateToOneRelationship"]>;
  GameCenterLeaderboardsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardsV2_createInstance"]>;
  GameCenterLeaderboardsV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardsV2_deleteInstance"]>;
  GameCenterLeaderboardsV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardsV2_getInstance"]>;
  GameCenterLeaderboardsV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardsV2_updateInstance"]>;
  GameCenterLeaderboardsV2VersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_versions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardsV2_versions_getToManyRelated"]>;
  GameCenterLeaderboardsV2VersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_versions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardsV2_versions_getToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterLeaderboardsGeneratedFunctionNames = [
  "GameCenterLeaderboardsActivityUpdateToOneRelationship",
  "GameCenterLeaderboardsChallengeUpdateToOneRelationship",
  "GameCenterLeaderboardsCreateInstance",
  "GameCenterLeaderboardsDeleteInstance",
  "GameCenterLeaderboardsGetInstance",
  "GameCenterLeaderboardsGroupLeaderboardGetToOneRelated",
  "GameCenterLeaderboardsGroupLeaderboardGetToOneRelationship",
  "GameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship",
  "GameCenterLeaderboardsLocalizationsGetToManyRelated",
  "GameCenterLeaderboardsLocalizationsGetToManyRelationship",
  "GameCenterLeaderboardsReleasesGetToManyRelated",
  "GameCenterLeaderboardsReleasesGetToManyRelationship",
  "GameCenterLeaderboardsUpdateInstance",
  "GameCenterLeaderboardsV2ActivityUpdateToOneRelationship",
  "GameCenterLeaderboardsV2ChallengeUpdateToOneRelationship",
  "GameCenterLeaderboardsV2CreateInstance",
  "GameCenterLeaderboardsV2DeleteInstance",
  "GameCenterLeaderboardsV2GetInstance",
  "GameCenterLeaderboardsV2UpdateInstance",
  "GameCenterLeaderboardsV2VersionsGetToManyRelated",
  "GameCenterLeaderboardsV2VersionsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardsGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardsGeneratedClient {
  return {
    GameCenterLeaderboardsActivityUpdateToOneRelationship: (...args) => callOperation("gameCenterLeaderboards_activity_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_activity_updateToOneRelationship">)),
    GameCenterLeaderboardsChallengeUpdateToOneRelationship: (...args) => callOperation("gameCenterLeaderboards_challenge_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_challenge_updateToOneRelationship">)),
    GameCenterLeaderboardsCreateInstance: (...args) => callOperation("gameCenterLeaderboards_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_createInstance">)),
    GameCenterLeaderboardsDeleteInstance: (...args) => callOperation("gameCenterLeaderboards_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_deleteInstance">)),
    GameCenterLeaderboardsGetInstance: (...args) => callOperation("gameCenterLeaderboards_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_getInstance">)),
    GameCenterLeaderboardsGroupLeaderboardGetToOneRelated: (...args) => callOperation("gameCenterLeaderboards_groupLeaderboard_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_groupLeaderboard_getToOneRelated">)),
    GameCenterLeaderboardsGroupLeaderboardGetToOneRelationship: (...args) => callOperation("gameCenterLeaderboards_groupLeaderboard_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_groupLeaderboard_getToOneRelationship">)),
    GameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship: (...args) => callOperation("gameCenterLeaderboards_groupLeaderboard_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_groupLeaderboard_updateToOneRelationship">)),
    GameCenterLeaderboardsLocalizationsGetToManyRelated: (...args) => callOperation("gameCenterLeaderboards_localizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_localizations_getToManyRelated">)),
    GameCenterLeaderboardsLocalizationsGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboards_localizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_localizations_getToManyRelationship">)),
    GameCenterLeaderboardsReleasesGetToManyRelated: (...args) => callOperation("gameCenterLeaderboards_releases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_releases_getToManyRelated">)),
    GameCenterLeaderboardsReleasesGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboards_releases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_releases_getToManyRelationship">)),
    GameCenterLeaderboardsUpdateInstance: (...args) => callOperation("gameCenterLeaderboards_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboards_updateInstance">)),
    GameCenterLeaderboardsV2ActivityUpdateToOneRelationship: (...args) => callOperation("gameCenterLeaderboardsV2_activity_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_activity_updateToOneRelationship">)),
    GameCenterLeaderboardsV2ChallengeUpdateToOneRelationship: (...args) => callOperation("gameCenterLeaderboardsV2_challenge_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_challenge_updateToOneRelationship">)),
    GameCenterLeaderboardsV2CreateInstance: (...args) => callOperation("gameCenterLeaderboardsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_createInstance">)),
    GameCenterLeaderboardsV2DeleteInstance: (...args) => callOperation("gameCenterLeaderboardsV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_deleteInstance">)),
    GameCenterLeaderboardsV2GetInstance: (...args) => callOperation("gameCenterLeaderboardsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_getInstance">)),
    GameCenterLeaderboardsV2UpdateInstance: (...args) => callOperation("gameCenterLeaderboardsV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_updateInstance">)),
    GameCenterLeaderboardsV2VersionsGetToManyRelated: (...args) => callOperation("gameCenterLeaderboardsV2_versions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_versions_getToManyRelated">)),
    GameCenterLeaderboardsV2VersionsGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboardsV2_versions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardsV2_versions_getToManyRelationship">)),
  };
}
