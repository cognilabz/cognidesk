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
export const AppStoreFullApiGameCenterLeaderboardSetsOperationKeys = [
  "gameCenterLeaderboardSets_createInstance",
  "gameCenterLeaderboardSets_deleteInstance",
  "gameCenterLeaderboardSets_gameCenterLeaderboards_createToManyRelationship",
  "gameCenterLeaderboardSets_gameCenterLeaderboards_deleteToManyRelationship",
  "gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelated",
  "gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelationship",
  "gameCenterLeaderboardSets_gameCenterLeaderboards_replaceToManyRelationship",
  "gameCenterLeaderboardSets_getInstance",
  "gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelated",
  "gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelationship",
  "gameCenterLeaderboardSets_groupLeaderboardSet_updateToOneRelationship",
  "gameCenterLeaderboardSets_localizations_getToManyRelated",
  "gameCenterLeaderboardSets_localizations_getToManyRelationship",
  "gameCenterLeaderboardSets_releases_getToManyRelated",
  "gameCenterLeaderboardSets_releases_getToManyRelationship",
  "gameCenterLeaderboardSets_updateInstance",
  "gameCenterLeaderboardSetsV2_createInstance",
  "gameCenterLeaderboardSetsV2_deleteInstance",
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_createToManyRelationship",
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_deleteToManyRelationship",
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelated",
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelationship",
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_replaceToManyRelationship",
  "gameCenterLeaderboardSetsV2_getInstance",
  "gameCenterLeaderboardSetsV2_updateInstance",
  "gameCenterLeaderboardSetsV2_versions_getToManyRelated",
  "gameCenterLeaderboardSetsV2_versions_getToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterLeaderboardSetsOperationKey = typeof AppStoreFullApiGameCenterLeaderboardSetsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterLeaderboardSetsOperationPathParamMap {
  "gameCenterLeaderboardSets_createInstance": {};
  "gameCenterLeaderboardSets_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_gameCenterLeaderboards_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_gameCenterLeaderboards_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_gameCenterLeaderboards_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_groupLeaderboardSet_updateToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_localizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_localizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_releases_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_releases_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSets_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_createInstance": {};
  "gameCenterLeaderboardSetsV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_versions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterLeaderboardSetsV2_versions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterLeaderboardSetsOperationRequestMap {
  "gameCenterLeaderboardSets_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_createInstance">;
  "gameCenterLeaderboardSets_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_deleteInstance">;
  "gameCenterLeaderboardSets_gameCenterLeaderboards_createToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_gameCenterLeaderboards_createToManyRelationship">;
  "gameCenterLeaderboardSets_gameCenterLeaderboards_deleteToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_gameCenterLeaderboards_deleteToManyRelationship">;
  "gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelated">;
  "gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelationship">;
  "gameCenterLeaderboardSets_gameCenterLeaderboards_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_gameCenterLeaderboards_replaceToManyRelationship">;
  "gameCenterLeaderboardSets_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_getInstance">;
  "gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelated">;
  "gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelationship">;
  "gameCenterLeaderboardSets_groupLeaderboardSet_updateToOneRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_groupLeaderboardSet_updateToOneRelationship">;
  "gameCenterLeaderboardSets_localizations_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_localizations_getToManyRelated">;
  "gameCenterLeaderboardSets_localizations_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_localizations_getToManyRelationship">;
  "gameCenterLeaderboardSets_releases_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_releases_getToManyRelated">;
  "gameCenterLeaderboardSets_releases_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_releases_getToManyRelationship">;
  "gameCenterLeaderboardSets_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSets_updateInstance">;
  "gameCenterLeaderboardSetsV2_createInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_createInstance">;
  "gameCenterLeaderboardSetsV2_deleteInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_deleteInstance">;
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_createToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_createToManyRelationship">;
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_deleteToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_deleteToManyRelationship">;
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelated">;
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelationship">;
  "gameCenterLeaderboardSetsV2_gameCenterLeaderboards_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_replaceToManyRelationship">;
  "gameCenterLeaderboardSetsV2_getInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_getInstance">;
  "gameCenterLeaderboardSetsV2_updateInstance": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_updateInstance">;
  "gameCenterLeaderboardSetsV2_versions_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_versions_getToManyRelated">;
  "gameCenterLeaderboardSetsV2_versions_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterLeaderboardSetsV2_versions_getToManyRelationship">;
}

export interface AppStoreFullApiGameCenterLeaderboardSetsGeneratedClient {
  GameCenterLeaderboardSetsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_createInstance"]>;
  GameCenterLeaderboardSetsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_deleteInstance"]>;
  GameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_gameCenterLeaderboards_createToManyRelationship"]>;
  GameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_gameCenterLeaderboards_deleteToManyRelationship"]>;
  GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelated"]>;
  GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelationship"]>;
  GameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_gameCenterLeaderboards_replaceToManyRelationship"]>;
  GameCenterLeaderboardSetsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_getInstance"]>;
  GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelated"]>;
  GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelationship"]>;
  GameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_groupLeaderboardSet_updateToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_groupLeaderboardSet_updateToOneRelationship"]>;
  GameCenterLeaderboardSetsLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_localizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_localizations_getToManyRelated"]>;
  GameCenterLeaderboardSetsLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_localizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_localizations_getToManyRelationship"]>;
  GameCenterLeaderboardSetsReleasesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_releases_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_releases_getToManyRelated"]>;
  GameCenterLeaderboardSetsReleasesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_releases_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_releases_getToManyRelationship"]>;
  GameCenterLeaderboardSetsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSets_updateInstance"]>;
  GameCenterLeaderboardSetsV2CreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_createInstance"]>;
  GameCenterLeaderboardSetsV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_deleteInstance"]>;
  GameCenterLeaderboardSetsV2GameCenterLeaderboardsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_gameCenterLeaderboards_createToManyRelationship"]>;
  GameCenterLeaderboardSetsV2GameCenterLeaderboardsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_gameCenterLeaderboards_deleteToManyRelationship"]>;
  GameCenterLeaderboardSetsV2GameCenterLeaderboardsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelated"]>;
  GameCenterLeaderboardSetsV2GameCenterLeaderboardsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelationship"]>;
  GameCenterLeaderboardSetsV2GameCenterLeaderboardsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_gameCenterLeaderboards_replaceToManyRelationship"]>;
  GameCenterLeaderboardSetsV2GetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_getInstance"]>;
  GameCenterLeaderboardSetsV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_updateInstance"]>;
  GameCenterLeaderboardSetsV2VersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_versions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_versions_getToManyRelated"]>;
  GameCenterLeaderboardSetsV2VersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_versions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterLeaderboardSetsV2_versions_getToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterLeaderboardSetsGeneratedFunctionNames = [
  "GameCenterLeaderboardSetsCreateInstance",
  "GameCenterLeaderboardSetsDeleteInstance",
  "GameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship",
  "GameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship",
  "GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated",
  "GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship",
  "GameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship",
  "GameCenterLeaderboardSetsGetInstance",
  "GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated",
  "GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship",
  "GameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship",
  "GameCenterLeaderboardSetsLocalizationsGetToManyRelated",
  "GameCenterLeaderboardSetsLocalizationsGetToManyRelationship",
  "GameCenterLeaderboardSetsReleasesGetToManyRelated",
  "GameCenterLeaderboardSetsReleasesGetToManyRelationship",
  "GameCenterLeaderboardSetsUpdateInstance",
  "GameCenterLeaderboardSetsV2CreateInstance",
  "GameCenterLeaderboardSetsV2DeleteInstance",
  "GameCenterLeaderboardSetsV2GameCenterLeaderboardsCreateToManyRelationship",
  "GameCenterLeaderboardSetsV2GameCenterLeaderboardsDeleteToManyRelationship",
  "GameCenterLeaderboardSetsV2GameCenterLeaderboardsGetToManyRelated",
  "GameCenterLeaderboardSetsV2GameCenterLeaderboardsGetToManyRelationship",
  "GameCenterLeaderboardSetsV2GameCenterLeaderboardsReplaceToManyRelationship",
  "GameCenterLeaderboardSetsV2GetInstance",
  "GameCenterLeaderboardSetsV2UpdateInstance",
  "GameCenterLeaderboardSetsV2VersionsGetToManyRelated",
  "GameCenterLeaderboardSetsV2VersionsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterLeaderboardSetsGeneratedClient)[];

export function createAppStoreFullApiGameCenterLeaderboardSetsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterLeaderboardSetsGeneratedClient {
  return {
    GameCenterLeaderboardSetsCreateInstance: (...args) => callOperation("gameCenterLeaderboardSets_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_createInstance">)),
    GameCenterLeaderboardSetsDeleteInstance: (...args) => callOperation("gameCenterLeaderboardSets_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_deleteInstance">)),
    GameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSets_gameCenterLeaderboards_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_createToManyRelationship">)),
    GameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSets_gameCenterLeaderboards_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_deleteToManyRelationship">)),
    GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated: (...args) => callOperation("gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelated">)),
    GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_getToManyRelationship">)),
    GameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSets_gameCenterLeaderboards_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_gameCenterLeaderboards_replaceToManyRelationship">)),
    GameCenterLeaderboardSetsGetInstance: (...args) => callOperation("gameCenterLeaderboardSets_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_getInstance">)),
    GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated: (...args) => callOperation("gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelated">)),
    GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship: (...args) => callOperation("gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_groupLeaderboardSet_getToOneRelationship">)),
    GameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship: (...args) => callOperation("gameCenterLeaderboardSets_groupLeaderboardSet_updateToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_groupLeaderboardSet_updateToOneRelationship">)),
    GameCenterLeaderboardSetsLocalizationsGetToManyRelated: (...args) => callOperation("gameCenterLeaderboardSets_localizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_localizations_getToManyRelated">)),
    GameCenterLeaderboardSetsLocalizationsGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSets_localizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_localizations_getToManyRelationship">)),
    GameCenterLeaderboardSetsReleasesGetToManyRelated: (...args) => callOperation("gameCenterLeaderboardSets_releases_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_releases_getToManyRelated">)),
    GameCenterLeaderboardSetsReleasesGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSets_releases_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_releases_getToManyRelationship">)),
    GameCenterLeaderboardSetsUpdateInstance: (...args) => callOperation("gameCenterLeaderboardSets_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSets_updateInstance">)),
    GameCenterLeaderboardSetsV2CreateInstance: (...args) => callOperation("gameCenterLeaderboardSetsV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_createInstance">)),
    GameCenterLeaderboardSetsV2DeleteInstance: (...args) => callOperation("gameCenterLeaderboardSetsV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_deleteInstance">)),
    GameCenterLeaderboardSetsV2GameCenterLeaderboardsCreateToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSetsV2_gameCenterLeaderboards_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_createToManyRelationship">)),
    GameCenterLeaderboardSetsV2GameCenterLeaderboardsDeleteToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSetsV2_gameCenterLeaderboards_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_deleteToManyRelationship">)),
    GameCenterLeaderboardSetsV2GameCenterLeaderboardsGetToManyRelated: (...args) => callOperation("gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelated">)),
    GameCenterLeaderboardSetsV2GameCenterLeaderboardsGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_getToManyRelationship">)),
    GameCenterLeaderboardSetsV2GameCenterLeaderboardsReplaceToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSetsV2_gameCenterLeaderboards_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_gameCenterLeaderboards_replaceToManyRelationship">)),
    GameCenterLeaderboardSetsV2GetInstance: (...args) => callOperation("gameCenterLeaderboardSetsV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_getInstance">)),
    GameCenterLeaderboardSetsV2UpdateInstance: (...args) => callOperation("gameCenterLeaderboardSetsV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_updateInstance">)),
    GameCenterLeaderboardSetsV2VersionsGetToManyRelated: (...args) => callOperation("gameCenterLeaderboardSetsV2_versions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_versions_getToManyRelated">)),
    GameCenterLeaderboardSetsV2VersionsGetToManyRelationship: (...args) => callOperation("gameCenterLeaderboardSetsV2_versions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterLeaderboardSetsV2_versions_getToManyRelationship">)),
  };
}
