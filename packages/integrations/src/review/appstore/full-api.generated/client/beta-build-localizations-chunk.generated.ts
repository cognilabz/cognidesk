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
export const AppStoreFullApiBetaBuildLocalizationsOperationKeys = [
  "betaBuildLocalizations_build_getToOneRelated",
  "betaBuildLocalizations_build_getToOneRelationship",
  "betaBuildLocalizations_createInstance",
  "betaBuildLocalizations_deleteInstance",
  "betaBuildLocalizations_getCollection",
  "betaBuildLocalizations_getInstance",
  "betaBuildLocalizations_updateInstance"
] as const;
export type AppStoreFullApiBetaBuildLocalizationsOperationKey = typeof AppStoreFullApiBetaBuildLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaBuildLocalizationsOperationPathParamMap {
  "betaBuildLocalizations_build_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "betaBuildLocalizations_build_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaBuildLocalizations_createInstance": {};
  "betaBuildLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "betaBuildLocalizations_getCollection": {};
  "betaBuildLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "betaBuildLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaBuildLocalizationsOperationRequestMap {
  "betaBuildLocalizations_build_getToOneRelated": AppStoreFullApiOperationInput<"betaBuildLocalizations_build_getToOneRelated">;
  "betaBuildLocalizations_build_getToOneRelationship": AppStoreFullApiOperationInput<"betaBuildLocalizations_build_getToOneRelationship">;
  "betaBuildLocalizations_createInstance": AppStoreFullApiOperationInput<"betaBuildLocalizations_createInstance">;
  "betaBuildLocalizations_deleteInstance": AppStoreFullApiOperationInput<"betaBuildLocalizations_deleteInstance">;
  "betaBuildLocalizations_getCollection": AppStoreFullApiOperationInput<"betaBuildLocalizations_getCollection">;
  "betaBuildLocalizations_getInstance": AppStoreFullApiOperationInput<"betaBuildLocalizations_getInstance">;
  "betaBuildLocalizations_updateInstance": AppStoreFullApiOperationInput<"betaBuildLocalizations_updateInstance">;
}

export interface AppStoreFullApiBetaBuildLocalizationsGeneratedClient {
  BetaBuildLocalizationsBuildGetToOneRelated(...args: AppStoreFullApiOperationArgs<"betaBuildLocalizations_build_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["betaBuildLocalizations_build_getToOneRelated"]>;
  BetaBuildLocalizationsBuildGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"betaBuildLocalizations_build_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaBuildLocalizations_build_getToOneRelationship"]>;
  BetaBuildLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"betaBuildLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["betaBuildLocalizations_createInstance"]>;
  BetaBuildLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"betaBuildLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["betaBuildLocalizations_deleteInstance"]>;
  BetaBuildLocalizationsGetCollection(...args: AppStoreFullApiOperationArgs<"betaBuildLocalizations_getCollection">): Promise<AppStoreFullApiOperationResponseMap["betaBuildLocalizations_getCollection"]>;
  BetaBuildLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"betaBuildLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaBuildLocalizations_getInstance"]>;
  BetaBuildLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"betaBuildLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["betaBuildLocalizations_updateInstance"]>;
}

export const AppStoreFullApiBetaBuildLocalizationsGeneratedFunctionNames = [
  "BetaBuildLocalizationsBuildGetToOneRelated",
  "BetaBuildLocalizationsBuildGetToOneRelationship",
  "BetaBuildLocalizationsCreateInstance",
  "BetaBuildLocalizationsDeleteInstance",
  "BetaBuildLocalizationsGetCollection",
  "BetaBuildLocalizationsGetInstance",
  "BetaBuildLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaBuildLocalizationsGeneratedClient)[];

export function createAppStoreFullApiBetaBuildLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaBuildLocalizationsGeneratedClient {
  return {
    BetaBuildLocalizationsBuildGetToOneRelated: (...args) => callOperation("betaBuildLocalizations_build_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"betaBuildLocalizations_build_getToOneRelated">)),
    BetaBuildLocalizationsBuildGetToOneRelationship: (...args) => callOperation("betaBuildLocalizations_build_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"betaBuildLocalizations_build_getToOneRelationship">)),
    BetaBuildLocalizationsCreateInstance: (...args) => callOperation("betaBuildLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"betaBuildLocalizations_createInstance">)),
    BetaBuildLocalizationsDeleteInstance: (...args) => callOperation("betaBuildLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"betaBuildLocalizations_deleteInstance">)),
    BetaBuildLocalizationsGetCollection: (...args) => callOperation("betaBuildLocalizations_getCollection", ...(args as AppStoreFullApiOperationArgs<"betaBuildLocalizations_getCollection">)),
    BetaBuildLocalizationsGetInstance: (...args) => callOperation("betaBuildLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaBuildLocalizations_getInstance">)),
    BetaBuildLocalizationsUpdateInstance: (...args) => callOperation("betaBuildLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"betaBuildLocalizations_updateInstance">)),
  };
}
