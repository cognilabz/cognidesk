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
export const AppStoreFullApiGameCenterActivityLocalizationsOperationKeys = [
  "gameCenterActivityLocalizations_createInstance",
  "gameCenterActivityLocalizations_deleteInstance",
  "gameCenterActivityLocalizations_getInstance",
  "gameCenterActivityLocalizations_image_getToOneRelated",
  "gameCenterActivityLocalizations_image_getToOneRelationship",
  "gameCenterActivityLocalizations_updateInstance"
] as const;
export type AppStoreFullApiGameCenterActivityLocalizationsOperationKey = typeof AppStoreFullApiGameCenterActivityLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterActivityLocalizationsOperationPathParamMap {
  "gameCenterActivityLocalizations_createInstance": {};
  "gameCenterActivityLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityLocalizations_image_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityLocalizations_image_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterActivityLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterActivityLocalizationsOperationRequestMap {
  "gameCenterActivityLocalizations_createInstance": AppStoreFullApiOperationInput<"gameCenterActivityLocalizations_createInstance">;
  "gameCenterActivityLocalizations_deleteInstance": AppStoreFullApiOperationInput<"gameCenterActivityLocalizations_deleteInstance">;
  "gameCenterActivityLocalizations_getInstance": AppStoreFullApiOperationInput<"gameCenterActivityLocalizations_getInstance">;
  "gameCenterActivityLocalizations_image_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterActivityLocalizations_image_getToOneRelated">;
  "gameCenterActivityLocalizations_image_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterActivityLocalizations_image_getToOneRelationship">;
  "gameCenterActivityLocalizations_updateInstance": AppStoreFullApiOperationInput<"gameCenterActivityLocalizations_updateInstance">;
}

export interface AppStoreFullApiGameCenterActivityLocalizationsGeneratedClient {
  GameCenterActivityLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityLocalizations_createInstance"]>;
  GameCenterActivityLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityLocalizations_deleteInstance"]>;
  GameCenterActivityLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityLocalizations_getInstance"]>;
  GameCenterActivityLocalizationsImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_image_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityLocalizations_image_getToOneRelated"]>;
  GameCenterActivityLocalizationsImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_image_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityLocalizations_image_getToOneRelationship"]>;
  GameCenterActivityLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterActivityLocalizations_updateInstance"]>;
}

export const AppStoreFullApiGameCenterActivityLocalizationsGeneratedFunctionNames = [
  "GameCenterActivityLocalizationsCreateInstance",
  "GameCenterActivityLocalizationsDeleteInstance",
  "GameCenterActivityLocalizationsGetInstance",
  "GameCenterActivityLocalizationsImageGetToOneRelated",
  "GameCenterActivityLocalizationsImageGetToOneRelationship",
  "GameCenterActivityLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterActivityLocalizationsGeneratedClient)[];

export function createAppStoreFullApiGameCenterActivityLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterActivityLocalizationsGeneratedClient {
  return {
    GameCenterActivityLocalizationsCreateInstance: (...args) => callOperation("gameCenterActivityLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_createInstance">)),
    GameCenterActivityLocalizationsDeleteInstance: (...args) => callOperation("gameCenterActivityLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_deleteInstance">)),
    GameCenterActivityLocalizationsGetInstance: (...args) => callOperation("gameCenterActivityLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_getInstance">)),
    GameCenterActivityLocalizationsImageGetToOneRelated: (...args) => callOperation("gameCenterActivityLocalizations_image_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_image_getToOneRelated">)),
    GameCenterActivityLocalizationsImageGetToOneRelationship: (...args) => callOperation("gameCenterActivityLocalizations_image_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_image_getToOneRelationship">)),
    GameCenterActivityLocalizationsUpdateInstance: (...args) => callOperation("gameCenterActivityLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterActivityLocalizations_updateInstance">)),
  };
}
