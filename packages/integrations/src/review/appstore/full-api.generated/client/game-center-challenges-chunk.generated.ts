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
export const AppStoreFullApiGameCenterChallengesOperationKeys = [
  "gameCenterChallenges_createInstance",
  "gameCenterChallenges_deleteInstance",
  "gameCenterChallenges_getInstance",
  "gameCenterChallenges_leaderboard_updateToOneRelationship",
  "gameCenterChallenges_leaderboardV2_updateToOneRelationship",
  "gameCenterChallenges_updateInstance",
  "gameCenterChallenges_versions_getToManyRelated",
  "gameCenterChallenges_versions_getToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterChallengesOperationKey = typeof AppStoreFullApiGameCenterChallengesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterChallengesOperationPathParamMap {
  "gameCenterChallenges_createInstance": {};
  "gameCenterChallenges_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallenges_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallenges_leaderboard_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallenges_leaderboardV2_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallenges_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallenges_versions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallenges_versions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterChallengesOperationRequestMap {
  "gameCenterChallenges_createInstance": AppStoreFullApiOperationInput<"gameCenterChallenges_createInstance">;
  "gameCenterChallenges_deleteInstance": AppStoreFullApiOperationInput<"gameCenterChallenges_deleteInstance">;
  "gameCenterChallenges_getInstance": AppStoreFullApiOperationInput<"gameCenterChallenges_getInstance">;
  "gameCenterChallenges_leaderboard_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterChallenges_leaderboard_updateToOneRelationship">;
  "gameCenterChallenges_leaderboardV2_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterChallenges_leaderboardV2_updateToOneRelationship">;
  "gameCenterChallenges_updateInstance": AppStoreFullApiOperationInput<"gameCenterChallenges_updateInstance">;
  "gameCenterChallenges_versions_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterChallenges_versions_getToManyRelated">;
  "gameCenterChallenges_versions_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterChallenges_versions_getToManyRelationship">;
}

export interface AppStoreFullApiGameCenterChallengesGeneratedClient {
  GameCenterChallengesCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallenges_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallenges_createInstance"]>;
  GameCenterChallengesDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallenges_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallenges_deleteInstance"]>;
  GameCenterChallengesGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallenges_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallenges_getInstance"]>;
  GameCenterChallengesLeaderboardUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterChallenges_leaderboard_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallenges_leaderboard_updateToOneRelationship"]>;
  GameCenterChallengesLeaderboardV2UpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterChallenges_leaderboardV2_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallenges_leaderboardV2_updateToOneRelationship"]>;
  GameCenterChallengesUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallenges_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallenges_updateInstance"]>;
  GameCenterChallengesVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterChallenges_versions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallenges_versions_getToManyRelated"]>;
  GameCenterChallengesVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterChallenges_versions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallenges_versions_getToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterChallengesGeneratedFunctionNames = [
  "GameCenterChallengesCreateInstance",
  "GameCenterChallengesDeleteInstance",
  "GameCenterChallengesGetInstance",
  "GameCenterChallengesLeaderboardUpdateToOneRelationship",
  "GameCenterChallengesLeaderboardV2UpdateToOneRelationship",
  "GameCenterChallengesUpdateInstance",
  "GameCenterChallengesVersionsGetToManyRelated",
  "GameCenterChallengesVersionsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterChallengesGeneratedClient)[];

export function createAppStoreFullApiGameCenterChallengesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterChallengesGeneratedClient {
  return {
    GameCenterChallengesCreateInstance: (...args) => callOperation("gameCenterChallenges_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallenges_createInstance">)),
    GameCenterChallengesDeleteInstance: (...args) => callOperation("gameCenterChallenges_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallenges_deleteInstance">)),
    GameCenterChallengesGetInstance: (...args) => callOperation("gameCenterChallenges_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallenges_getInstance">)),
    GameCenterChallengesLeaderboardUpdateToOneRelationship: (...args) => callOperation("gameCenterChallenges_leaderboard_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallenges_leaderboard_updateToOneRelationship">)),
    GameCenterChallengesLeaderboardV2UpdateToOneRelationship: (...args) => callOperation("gameCenterChallenges_leaderboardV2_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallenges_leaderboardV2_updateToOneRelationship">)),
    GameCenterChallengesUpdateInstance: (...args) => callOperation("gameCenterChallenges_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallenges_updateInstance">)),
    GameCenterChallengesVersionsGetToManyRelated: (...args) => callOperation("gameCenterChallenges_versions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallenges_versions_getToManyRelated">)),
    GameCenterChallengesVersionsGetToManyRelationship: (...args) => callOperation("gameCenterChallenges_versions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallenges_versions_getToManyRelationship">)),
  };
}
