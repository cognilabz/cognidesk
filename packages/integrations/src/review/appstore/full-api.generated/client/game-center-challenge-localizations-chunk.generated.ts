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
export const AppStoreFullApiGameCenterChallengeLocalizationsOperationKeys = [
  "gameCenterChallengeLocalizations_createInstance",
  "gameCenterChallengeLocalizations_deleteInstance",
  "gameCenterChallengeLocalizations_getInstance",
  "gameCenterChallengeLocalizations_image_getToOneRelated",
  "gameCenterChallengeLocalizations_image_getToOneRelationship",
  "gameCenterChallengeLocalizations_updateInstance"
] as const;
export type AppStoreFullApiGameCenterChallengeLocalizationsOperationKey = typeof AppStoreFullApiGameCenterChallengeLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiGameCenterChallengeLocalizationsOperationPathParamMap {
  "gameCenterChallengeLocalizations_createInstance": {};
  "gameCenterChallengeLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeLocalizations_image_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeLocalizations_image_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "gameCenterChallengeLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiGameCenterChallengeLocalizationsOperationRequestMap {
  "gameCenterChallengeLocalizations_createInstance": AppStoreFullApiOperationInput<"gameCenterChallengeLocalizations_createInstance">;
  "gameCenterChallengeLocalizations_deleteInstance": AppStoreFullApiOperationInput<"gameCenterChallengeLocalizations_deleteInstance">;
  "gameCenterChallengeLocalizations_getInstance": AppStoreFullApiOperationInput<"gameCenterChallengeLocalizations_getInstance">;
  "gameCenterChallengeLocalizations_image_getToOneRelated": AppStoreFullApiOperationInput<"gameCenterChallengeLocalizations_image_getToOneRelated">;
  "gameCenterChallengeLocalizations_image_getToOneRelationship": AppStoreFullApiOperationInput<"gameCenterChallengeLocalizations_image_getToOneRelationship">;
  "gameCenterChallengeLocalizations_updateInstance": AppStoreFullApiOperationInput<"gameCenterChallengeLocalizations_updateInstance">;
}

export interface AppStoreFullApiGameCenterChallengeLocalizationsGeneratedClient {
  GameCenterChallengeLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeLocalizations_createInstance"]>;
  GameCenterChallengeLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeLocalizations_deleteInstance"]>;
  GameCenterChallengeLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeLocalizations_getInstance"]>;
  GameCenterChallengeLocalizationsImageGetToOneRelated(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_image_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeLocalizations_image_getToOneRelated"]>;
  GameCenterChallengeLocalizationsImageGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_image_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeLocalizations_image_getToOneRelationship"]>;
  GameCenterChallengeLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["gameCenterChallengeLocalizations_updateInstance"]>;
}

export const AppStoreFullApiGameCenterChallengeLocalizationsGeneratedFunctionNames = [
  "GameCenterChallengeLocalizationsCreateInstance",
  "GameCenterChallengeLocalizationsDeleteInstance",
  "GameCenterChallengeLocalizationsGetInstance",
  "GameCenterChallengeLocalizationsImageGetToOneRelated",
  "GameCenterChallengeLocalizationsImageGetToOneRelationship",
  "GameCenterChallengeLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiGameCenterChallengeLocalizationsGeneratedClient)[];

export function createAppStoreFullApiGameCenterChallengeLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiGameCenterChallengeLocalizationsGeneratedClient {
  return {
    GameCenterChallengeLocalizationsCreateInstance: (...args) => callOperation("gameCenterChallengeLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_createInstance">)),
    GameCenterChallengeLocalizationsDeleteInstance: (...args) => callOperation("gameCenterChallengeLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_deleteInstance">)),
    GameCenterChallengeLocalizationsGetInstance: (...args) => callOperation("gameCenterChallengeLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_getInstance">)),
    GameCenterChallengeLocalizationsImageGetToOneRelated: (...args) => callOperation("gameCenterChallengeLocalizations_image_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_image_getToOneRelated">)),
    GameCenterChallengeLocalizationsImageGetToOneRelationship: (...args) => callOperation("gameCenterChallengeLocalizations_image_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_image_getToOneRelationship">)),
    GameCenterChallengeLocalizationsUpdateInstance: (...args) => callOperation("gameCenterChallengeLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"gameCenterChallengeLocalizations_updateInstance">)),
  };
}
