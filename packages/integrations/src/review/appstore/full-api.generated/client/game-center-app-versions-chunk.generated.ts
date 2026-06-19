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
export const AppStoreFullApiGameCenterAppVersionsOperationKeys = [
  "gameCenterAppVersions_appStoreVersion_getToOneRelated",
  "gameCenterAppVersions_appStoreVersion_getToOneRelationship",
  "gameCenterAppVersions_compatibilityVersions_createToManyRelationship",
  "gameCenterAppVersions_compatibilityVersions_deleteToManyRelationship",
  "gameCenterAppVersions_compatibilityVersions_getToManyRelated",
  "gameCenterAppVersions_compatibilityVersions_getToManyRelationship",
  "gameCenterAppVersions_createInstance",
  "gameCenterAppVersions_getInstance",
  "gameCenterAppVersions_updateInstance"
] as const;
export type AppStoreFullApiGameCenterAppVersionsOperationKey = typeof AppStoreFullApiGameCenterAppVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterAppVersionsOperationPathParamMap {
  "gameCenterAppVersions_appStoreVersion_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAppVersions_appStoreVersion_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAppVersions_compatibilityVersions_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAppVersions_compatibilityVersions_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAppVersions_compatibilityVersions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAppVersions_compatibilityVersions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAppVersions_createInstance": {};
  "gameCenterAppVersions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterAppVersions_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterAppVersionsOperationRequestMap {
  "gameCenterAppVersions_appStoreVersion_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterAppVersions_appStoreVersion_getToOneRelated">;
  "gameCenterAppVersions_appStoreVersion_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterAppVersions_appStoreVersion_getToOneRelationship">;
  "gameCenterAppVersions_compatibilityVersions_createToManyRelationship": AppStoreFullApiOperationInput<"gameCenterAppVersions_compatibilityVersions_createToManyRelationship">;
  "gameCenterAppVersions_compatibilityVersions_deleteToManyRelationship": AppStoreFullApiOperationInput<"gameCenterAppVersions_compatibilityVersions_deleteToManyRelationship">;
  "gameCenterAppVersions_compatibilityVersions_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterAppVersions_compatibilityVersions_getToManyRelated">;
  "gameCenterAppVersions_compatibilityVersions_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterAppVersions_compatibilityVersions_getToManyRelationship">;
  "gameCenterAppVersions_createInstance": AppStoreFullApiOperationInput<"gameCenterAppVersions_createInstance">;
  "gameCenterAppVersions_getInstance": AppStoreFullApiOperationInput<"gameCenterAppVersions_getInstance">;
  "gameCenterAppVersions_updateInstance": AppStoreFullApiOperationInput<"gameCenterAppVersions_updateInstance">;
}

export interface AppStoreFullApiGameCenterAppVersionsGeneratedClient {
  GameCenterAppVersionsAppStoreVersionGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAppVersions_appStoreVersion_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAppVersions_appStoreVersion_getToOneRelated"]>;
  GameCenterAppVersionsAppStoreVersionGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAppVersions_appStoreVersion_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAppVersions_appStoreVersion_getToOneRelationship"]>;
  GameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAppVersions_compatibilityVersions_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAppVersions_compatibilityVersions_createToManyRelationship"]>;
  GameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAppVersions_compatibilityVersions_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAppVersions_compatibilityVersions_deleteToManyRelationship"]>;
  GameCenterAppVersionsCompatibilityVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterAppVersions_compatibilityVersions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAppVersions_compatibilityVersions_getToManyRelated"]>;
  GameCenterAppVersionsCompatibilityVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterAppVersions_compatibilityVersions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAppVersions_compatibilityVersions_getToManyRelationship"]>;
  GameCenterAppVersionsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAppVersions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAppVersions_createInstance"]>;
  GameCenterAppVersionsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAppVersions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAppVersions_getInstance"]>;
  GameCenterAppVersionsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterAppVersions_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterAppVersions_updateInstance"]>;
}

export const AppStoreFullApiGameCenterAppVersionsGeneratedFunctionNames = [
  "GameCenterAppVersionsAppStoreVersionGetToOneRelated",
  "GameCenterAppVersionsAppStoreVersionGetToOneRelationship",
  "GameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship",
  "GameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship",
  "GameCenterAppVersionsCompatibilityVersionsGetToManyRelated",
  "GameCenterAppVersionsCompatibilityVersionsGetToManyRelationship",
  "GameCenterAppVersionsCreateInstance",
  "GameCenterAppVersionsGetInstance",
  "GameCenterAppVersionsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterAppVersionsGeneratedClient)[];

export function createAppStoreFullApiGameCenterAppVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterAppVersionsGeneratedClient {
  return {
    GameCenterAppVersionsAppStoreVersionGetToOneRelated: (...args) => callOperation("gameCenterAppVersions_appStoreVersion_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAppVersions_appStoreVersion_getToOneRelated">)),
    GameCenterAppVersionsAppStoreVersionGetToOneRelationship: (...args) => callOperation("gameCenterAppVersions_appStoreVersion_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAppVersions_appStoreVersion_getToOneRelationship">)),
    GameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship: (...args) => callOperation("gameCenterAppVersions_compatibilityVersions_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAppVersions_compatibilityVersions_createToManyRelationship">)),
    GameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship: (...args) => callOperation("gameCenterAppVersions_compatibilityVersions_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAppVersions_compatibilityVersions_deleteToManyRelationship">)),
    GameCenterAppVersionsCompatibilityVersionsGetToManyRelated: (...args) => callOperation("gameCenterAppVersions_compatibilityVersions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterAppVersions_compatibilityVersions_getToManyRelated">)),
    GameCenterAppVersionsCompatibilityVersionsGetToManyRelationship: (...args) => callOperation("gameCenterAppVersions_compatibilityVersions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterAppVersions_compatibilityVersions_getToManyRelationship">)),
    GameCenterAppVersionsCreateInstance: (...args) => callOperation("gameCenterAppVersions_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAppVersions_createInstance">)),
    GameCenterAppVersionsGetInstance: (...args) => callOperation("gameCenterAppVersions_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAppVersions_getInstance">)),
    GameCenterAppVersionsUpdateInstance: (...args) => callOperation("gameCenterAppVersions_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterAppVersions_updateInstance">)),
  };
}
