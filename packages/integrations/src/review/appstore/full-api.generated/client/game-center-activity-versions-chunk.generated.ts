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
export const AppStoreFullApiGameCenterActivityVersionsOperationKeys = [
  "gameCenterActivityVersions_createInstance",
  "gameCenterActivityVersions_defaultImage_getToOneRelated",
  "gameCenterActivityVersions_defaultImage_getToOneRelationship",
  "gameCenterActivityVersions_getInstance",
  "gameCenterActivityVersions_localizations_getToManyRelated",
  "gameCenterActivityVersions_localizations_getToManyRelationship",
  "gameCenterActivityVersions_updateInstance"
] as const;
export type AppStoreFullApiGameCenterActivityVersionsOperationKey = typeof AppStoreFullApiGameCenterActivityVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterActivityVersionsOperationPathParamMap {
  "gameCenterActivityVersions_createInstance": {};
  "gameCenterActivityVersions_defaultImage_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityVersions_defaultImage_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityVersions_localizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityVersions_localizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityVersions_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterActivityVersionsOperationRequestMap {
  "gameCenterActivityVersions_createInstance": AppStoreFullApiOperationInput<"gameCenterActivityVersions_createInstance">;
  "gameCenterActivityVersions_defaultImage_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterActivityVersions_defaultImage_getToOneRelated">;
  "gameCenterActivityVersions_defaultImage_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterActivityVersions_defaultImage_getToOneRelationship">;
  "gameCenterActivityVersions_getInstance": AppStoreFullApiOperationInput<"gameCenterActivityVersions_getInstance">;
  "gameCenterActivityVersions_localizations_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterActivityVersions_localizations_getToManyRelated">;
  "gameCenterActivityVersions_localizations_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterActivityVersions_localizations_getToManyRelationship">;
  "gameCenterActivityVersions_updateInstance": AppStoreFullApiOperationInput<"gameCenterActivityVersions_updateInstance">;
}

export interface AppStoreFullApiGameCenterActivityVersionsGeneratedClient {
  GameCenterActivityVersionsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersions_createInstance"]>;
  GameCenterActivityVersionsDefaultImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersions_defaultImage_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersions_defaultImage_getToOneRelated"]>;
  GameCenterActivityVersionsDefaultImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersions_defaultImage_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersions_defaultImage_getToOneRelationship"]>;
  GameCenterActivityVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersions_getInstance"]>;
  GameCenterActivityVersionsLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersions_localizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersions_localizations_getToManyRelated"]>;
  GameCenterActivityVersionsLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersions_localizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersions_localizations_getToManyRelationship"]>;
  GameCenterActivityVersionsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityVersions_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityVersions_updateInstance"]>;
}

export const AppStoreFullApiGameCenterActivityVersionsGeneratedFunctionNames = [
  "GameCenterActivityVersionsCreateInstance",
  "GameCenterActivityVersionsDefaultImageGetToOneRelated",
  "GameCenterActivityVersionsDefaultImageGetToOneRelationship",
  "GameCenterActivityVersionsGetInstance",
  "GameCenterActivityVersionsLocalizationsGetToManyRelated",
  "GameCenterActivityVersionsLocalizationsGetToManyRelationship",
  "GameCenterActivityVersionsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterActivityVersionsGeneratedClient)[];

export function createAppStoreFullApiGameCenterActivityVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterActivityVersionsGeneratedClient {
  return {
    GameCenterActivityVersionsCreateInstance: (...args) => callOperation("gameCenterActivityVersions_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersions_createInstance">)),
    GameCenterActivityVersionsDefaultImageGetToOneRelated: (...args) => callOperation("gameCenterActivityVersions_defaultImage_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersions_defaultImage_getToOneRelated">)),
    GameCenterActivityVersionsDefaultImageGetToOneRelationship: (...args) => callOperation("gameCenterActivityVersions_defaultImage_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersions_defaultImage_getToOneRelationship">)),
    GameCenterActivityVersionsGetInstance: (...args) => callOperation("gameCenterActivityVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersions_getInstance">)),
    GameCenterActivityVersionsLocalizationsGetToManyRelated: (...args) => callOperation("gameCenterActivityVersions_localizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersions_localizations_getToManyRelated">)),
    GameCenterActivityVersionsLocalizationsGetToManyRelationship: (...args) => callOperation("gameCenterActivityVersions_localizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersions_localizations_getToManyRelationship">)),
    GameCenterActivityVersionsUpdateInstance: (...args) => callOperation("gameCenterActivityVersions_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityVersions_updateInstance">)),
  };
}
