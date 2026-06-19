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
export const AppStoreFullApiGameCenterAchievementVersionsOperationKeys = [
  "gameCenterAchievementVersionsV2_createInstance",
  "gameCenterAchievementVersionsV2_getInstance",
  "gameCenterAchievementVersionsV2_localizations_getToManyRelated",
  "gameCenterAchievementVersionsV2_localizations_getToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterAchievementVersionsOperationKey = typeof AppStoreFullApiGameCenterAchievementVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterAchievementVersionsOperationPathParamMap {
  "gameCenterAchievementVersionsV2_createInstance": {};
  "gameCenterAchievementVersionsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementVersionsV2_localizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAchievementVersionsV2_localizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterAchievementVersionsOperationRequestMap {
  "gameCenterAchievementVersionsV2_createInstance": AppStoreFullApiOperationInput<"gameCenterAchievementVersionsV2_createInstance">;
  "gameCenterAchievementVersionsV2_getInstance": AppStoreFullApiOperationInput<"gameCenterAchievementVersionsV2_getInstance">;
  "gameCenterAchievementVersionsV2_localizations_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterAchievementVersionsV2_localizations_getToManyRelated">;
  "gameCenterAchievementVersionsV2_localizations_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterAchievementVersionsV2_localizations_getToManyRelationship">;
}

export interface AppStoreFullApiGameCenterAchievementVersionsGeneratedClient {
  GameCenterAchievementVersionsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementVersionsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementVersionsV2_createInstance"]>;
  GameCenterAchievementVersionsV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementVersionsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementVersionsV2_getInstance"]>;
  GameCenterAchievementVersionsV2LocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementVersionsV2_localizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementVersionsV2_localizations_getToManyRelated"]>;
  GameCenterAchievementVersionsV2LocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAchievementVersionsV2_localizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAchievementVersionsV2_localizations_getToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterAchievementVersionsGeneratedFunctionNames = [
  "GameCenterAchievementVersionsV2CreateInstance",
  "GameCenterAchievementVersionsV2GetInstance",
  "GameCenterAchievementVersionsV2LocalizationsGetToManyRelated",
  "GameCenterAchievementVersionsV2LocalizationsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterAchievementVersionsGeneratedClient)[];

export function createAppStoreFullApiGameCenterAchievementVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterAchievementVersionsGeneratedClient {
  return {
    GameCenterAchievementVersionsV2CreateInstance: (...args) => callOperation("gameCenterAchievementVersionsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementVersionsV2_createInstance">)),
    GameCenterAchievementVersionsV2GetInstance: (...args) => callOperation("gameCenterAchievementVersionsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementVersionsV2_getInstance">)),
    GameCenterAchievementVersionsV2LocalizationsGetToManyRelated: (...args) => callOperation("gameCenterAchievementVersionsV2_localizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementVersionsV2_localizations_getToManyRelated">)),
    GameCenterAchievementVersionsV2LocalizationsGetToManyRelationship: (...args) => callOperation("gameCenterAchievementVersionsV2_localizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAchievementVersionsV2_localizations_getToManyRelationship">)),
  };
}
