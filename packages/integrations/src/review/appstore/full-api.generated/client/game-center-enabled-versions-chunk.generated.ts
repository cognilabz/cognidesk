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
export const AppStoreFullApiGameCenterEnabledVersionsOperationKeys = [
  "gameCenterEnabledVersions_compatibleVersions_createToManyRelationship",
  "gameCenterEnabledVersions_compatibleVersions_deleteToManyRelationship",
  "gameCenterEnabledVersions_compatibleVersions_getToManyRelated",
  "gameCenterEnabledVersions_compatibleVersions_getToManyRelationship",
  "gameCenterEnabledVersions_compatibleVersions_replaceToManyRelationship"
] as const;
export type AppStoreFullApiGameCenterEnabledVersionsOperationKey = typeof AppStoreFullApiGameCenterEnabledVersionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterEnabledVersionsOperationPathParamMap {
  "gameCenterEnabledVersions_compatibleVersions_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterEnabledVersions_compatibleVersions_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterEnabledVersions_compatibleVersions_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterEnabledVersions_compatibleVersions_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterEnabledVersions_compatibleVersions_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterEnabledVersionsOperationRequestMap {
  "gameCenterEnabledVersions_compatibleVersions_createToManyRelationship": AppStoreFullApiOperationInput<"gameCenterEnabledVersions_compatibleVersions_createToManyRelationship">;
  "gameCenterEnabledVersions_compatibleVersions_deleteToManyRelationship": AppStoreFullApiOperationInput<"gameCenterEnabledVersions_compatibleVersions_deleteToManyRelationship">;
  "gameCenterEnabledVersions_compatibleVersions_getToManyRelated": AppStoreFullApiOperationInput<"gameCenterEnabledVersions_compatibleVersions_getToManyRelated">;
  "gameCenterEnabledVersions_compatibleVersions_getToManyRelationship": AppStoreFullApiOperationInput<"gameCenterEnabledVersions_compatibleVersions_getToManyRelationship">;
  "gameCenterEnabledVersions_compatibleVersions_replaceToManyRelationship": AppStoreFullApiOperationInput<"gameCenterEnabledVersions_compatibleVersions_replaceToManyRelationship">;
}

export interface AppStoreFullApiGameCenterEnabledVersionsGeneratedClient {
  GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterEnabledVersions_compatibleVersions_createToManyRelationship"]>;
  GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterEnabledVersions_compatibleVersions_deleteToManyRelationship"]>;
  GameCenterEnabledVersionsCompatibleVersionsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterEnabledVersions_compatibleVersions_getToManyRelated"]>;
  GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterEnabledVersions_compatibleVersions_getToManyRelationship"]>;
  GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterEnabledVersions_compatibleVersions_replaceToManyRelationship"]>;
}

export const AppStoreFullApiGameCenterEnabledVersionsGeneratedFunctionNames = [
  "GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship",
  "GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship",
  "GameCenterEnabledVersionsCompatibleVersionsGetToManyRelated",
  "GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship",
  "GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterEnabledVersionsGeneratedClient)[];

export function createAppStoreFullApiGameCenterEnabledVersionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterEnabledVersionsGeneratedClient {
  return {
    GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship: (...args) => callOperation("gameCenterEnabledVersions_compatibleVersions_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_createToManyRelationship">)),
    GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship: (...args) => callOperation("gameCenterEnabledVersions_compatibleVersions_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_deleteToManyRelationship">)),
    GameCenterEnabledVersionsCompatibleVersionsGetToManyRelated: (...args) => callOperation("gameCenterEnabledVersions_compatibleVersions_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_getToManyRelated">)),
    GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship: (...args) => callOperation("gameCenterEnabledVersions_compatibleVersions_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_getToManyRelationship">)),
    GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship: (...args) => callOperation("gameCenterEnabledVersions_compatibleVersions_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterEnabledVersions_compatibleVersions_replaceToManyRelationship">)),
  };
}
