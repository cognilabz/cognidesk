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
export const AppStoreFullApiGameCenterLeaderboardSetVersionsOperationKeys = [
  "gameCenterLeaderboardSetVersionsV2_createInstance",
  "gameCenterLeaderboardSetVersionsV2_getInstance",
  "gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelated",
  "gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterLeaderboardSetVersionsOperationKey = typeof AppStoreFullApiGameCenterLeaderboardSetVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardSetVersionsOperationPathParamMap {
  "gameCenterLeaderboardSetVersionsV2_createInstance": {};
  "gameCenterLeaderboardSetVersionsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardSetVersionsOperationRequestMap {
  "gameCenterLeaderboardSetVersionsV2_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetVersionsV2_createInstance">;
  "gameCenterLeaderboardSetVersionsV2_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetVersionsV2_getInstance">;
  "gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelated">;
  "gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelationship">;
}

export interface AppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedClient {
  GameCenterLeaderboardSetVersionsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetVersionsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetVersionsV2_createInstance"]>;
  GameCenterLeaderboardSetVersionsV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetVersionsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetVersionsV2_getInstance"]>;
  GameCenterLeaderboardSetVersionsV2LocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelated"]>;
  GameCenterLeaderboardSetVersionsV2LocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedFunctionNames = [
  "GameCenterLeaderboardSetVersionsV2CreateInstance",
  "GameCenterLeaderboardSetVersionsV2GetInstance",
  "GameCenterLeaderboardSetVersionsV2LocalizationsGetToManyRelated",
  "GameCenterLeaderboardSetVersionsV2LocalizationsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardSetVersionsGeneratedClient {
  return {
    GameCenterLeaderboardSetVersionsV2CreateInstance: (...args) => callOperation("gameCenterLeaderboardSetVersionsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetVersionsV2_createInstance">)),
    GameCenterLeaderboardSetVersionsV2GetInstance: (...args) => callOperation("gameCenterLeaderboardSetVersionsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetVersionsV2_getInstance">)),
    GameCenterLeaderboardSetVersionsV2LocalizationsGetToManyRelated: (...args) => callOperation("gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelated">)),
    GameCenterLeaderboardSetVersionsV2LocalizationsGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetVersionsV2_localizations_getToManyRelationship">)),
  };
}
