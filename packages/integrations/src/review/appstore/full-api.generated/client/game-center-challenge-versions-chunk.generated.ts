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
export const AppStoreFullApiGameCenterChallengeVersionsOperationKeys = [
  "gameCenterChallengeVersions_createInstance",
  "gameCenterChallengeVersions_defaultImage_getToOneRelated",
  "gameCenterChallengeVersions_defaultImage_getToOneRelationship",
  "gameCenterChallengeVersions_getInstance",
  "gameCenterChallengeVersions_localizations_getToManyRelated",
  "gameCenterChallengeVersions_localizations_getToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterChallengeVersionsOperationKey = typeof AppStoreFullApiGameCenterChallengeVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterChallengeVersionsOperationPathParamMap {
  "gameCenterChallengeVersions_createInstance": {};
  "gameCenterChallengeVersions_defaultImage_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeVersions_defaultImage_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeVersions_localizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeVersions_localizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterChallengeVersionsOperationRequestMap {
  "gameCenterChallengeVersions_createInstance": AppStoreFullApiOperationInput<"gameCenterChallengeVersions_createInstance">;
  "gameCenterChallengeVersions_defaultImage_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterChallengeVersions_defaultImage_getToOneRelated">;
  "gameCenterChallengeVersions_defaultImage_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterChallengeVersions_defaultImage_getToOneRelationship">;
  "gameCenterChallengeVersions_getInstance": AppStoreFullApiOperationInput<"gameCenterChallengeVersions_getInstance">;
  "gameCenterChallengeVersions_localizations_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterChallengeVersions_localizations_getToManyRelated">;
  "gameCenterChallengeVersions_localizations_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterChallengeVersions_localizations_getToManyRelationship">;
}

export interface AppStoreFullApiGameCenterChallengeVersionsGeneratedClient {
  GameCenterChallengeVersionsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeVersions_createInstance"]>;
  GameCenterChallengeVersionsDefaultImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_defaultImage_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeVersions_defaultImage_getToOneRelated"]>;
  GameCenterChallengeVersionsDefaultImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_defaultImage_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeVersions_defaultImage_getToOneRelationship"]>;
  GameCenterChallengeVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeVersions_getInstance"]>;
  GameCenterChallengeVersionsLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_localizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeVersions_localizations_getToManyRelated"]>;
  GameCenterChallengeVersionsLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_localizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeVersions_localizations_getToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterChallengeVersionsGeneratedFunctionNames = [
  "GameCenterChallengeVersionsCreateInstance",
  "GameCenterChallengeVersionsDefaultImageGetToOneRelated",
  "GameCenterChallengeVersionsDefaultImageGetToOneRelationship",
  "GameCenterChallengeVersionsGetInstance",
  "GameCenterChallengeVersionsLocalizationsGetToManyRelated",
  "GameCenterChallengeVersionsLocalizationsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterChallengeVersionsGeneratedClient)[];

export function createAppStoreFullApiGameCenterChallengeVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterChallengeVersionsGeneratedClient {
  return {
    GameCenterChallengeVersionsCreateInstance: (...args) => callOperation("gameCenterChallengeVersions_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_createInstance">)),
    GameCenterChallengeVersionsDefaultImageGetToOneRelated: (...args) => callOperation("gameCenterChallengeVersions_defaultImage_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_defaultImage_getToOneRelated">)),
    GameCenterChallengeVersionsDefaultImageGetToOneRelationship: (...args) => callOperation("gameCenterChallengeVersions_defaultImage_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_defaultImage_getToOneRelationship">)),
    GameCenterChallengeVersionsGetInstance: (...args) => callOperation("gameCenterChallengeVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_getInstance">)),
    GameCenterChallengeVersionsLocalizationsGetToManyRelated: (...args) => callOperation("gameCenterChallengeVersions_localizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_localizations_getToManyRelated">)),
    GameCenterChallengeVersionsLocalizationsGetToManyRelationship: (...args) => callOperation("gameCenterChallengeVersions_localizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeVersions_localizations_getToManyRelationship">)),
  };
}
