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
export const AppStoreFullApiGameCenterLeaderboardVersionsOperationKeys = [
  "gameCenterLeaderboardVersionsV2_createInstance",
  "gameCenterLeaderboardVersionsV2_getInstance",
  "gameCenterLeaderboardVersionsV2_localizations_getToManyRelated",
  "gameCenterLeaderboardVersionsV2_localizations_getToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterLeaderboardVersionsOperationKey = typeof AppStoreFullApiGameCenterLeaderboardVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardVersionsOperationPathParamMap {
  "gameCenterLeaderboardVersionsV2_createInstance": {};
  "gameCenterLeaderboardVersionsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardVersionsV2_localizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardVersionsV2_localizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardVersionsOperationRequestMap {
  "gameCenterLeaderboardVersionsV2_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardVersionsV2_createInstance">;
  "gameCenterLeaderboardVersionsV2_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardVersionsV2_getInstance">;
  "gameCenterLeaderboardVersionsV2_localizations_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardVersionsV2_localizations_getToManyRelated">;
  "gameCenterLeaderboardVersionsV2_localizations_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardVersionsV2_localizations_getToManyRelationship">;
}

export interface AppStoreFullApiGameCenterLeaderboardVersionsGeneratedClient {
  GameCenterLeaderboardVersionsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardVersionsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardVersionsV2_createInstance"]>;
  GameCenterLeaderboardVersionsV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardVersionsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardVersionsV2_getInstance"]>;
  GameCenterLeaderboardVersionsV2LocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardVersionsV2_localizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardVersionsV2_localizations_getToManyRelated"]>;
  GameCenterLeaderboardVersionsV2LocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardVersionsV2_localizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardVersionsV2_localizations_getToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterLeaderboardVersionsGeneratedFunctionNames = [
  "GameCenterLeaderboardVersionsV2CreateInstance",
  "GameCenterLeaderboardVersionsV2GetInstance",
  "GameCenterLeaderboardVersionsV2LocalizationsGetToManyRelated",
  "GameCenterLeaderboardVersionsV2LocalizationsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardVersionsGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardVersionsGeneratedClient {
  return {
    GameCenterLeaderboardVersionsV2CreateInstance: (...args) => callOperation("gameCenterLeaderboardVersionsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardVersionsV2_createInstance">)),
    GameCenterLeaderboardVersionsV2GetInstance: (...args) => callOperation("gameCenterLeaderboardVersionsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardVersionsV2_getInstance">)),
    GameCenterLeaderboardVersionsV2LocalizationsGetToManyRelated: (...args) => callOperation("gameCenterLeaderboardVersionsV2_localizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardVersionsV2_localizations_getToManyRelated">)),
    GameCenterLeaderboardVersionsV2LocalizationsGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboardVersionsV2_localizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardVersionsV2_localizations_getToManyRelationship">)),
  };
}
