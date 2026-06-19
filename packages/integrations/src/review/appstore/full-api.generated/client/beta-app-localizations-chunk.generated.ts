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
export const AppStoreFullApiBetaAppLocalizationsOperationKeys = [
  "betaAppLocalizations_app_getToOneRelated",
  "betaAppLocalizations_app_getToOneRelationship",
  "betaAppLocalizations_createInstance",
  "betaAppLocalizations_deleteInstance",
  "betaAppLocalizations_getCollection",
  "betaAppLocalizations_getInstance",
  "betaAppLocalizations_updateInstance"
] as const;
export type AppStoreFullApiBetaAppLocalizationsOperationKey = typeof AppStoreFullApiBetaAppLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaAppLocalizationsOperationPathParamMap {
  "betaAppLocalizations_app_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "betaAppLocalizations_app_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaAppLocalizations_createInstance": {};
  "betaAppLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "betaAppLocalizations_getCollection": {};
  "betaAppLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "betaAppLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaAppLocalizationsOperationRequestMap {
  "betaAppLocalizations_app_getToOneRelated": AppStoreFullApiOperationInput<"betaAppLocalizations_app_getToOneRelated">;
  "betaAppLocalizations_app_getToOneRelationship": AppStoreFullApiOperationInput<"betaAppLocalizations_app_getToOneRelationship">;
  "betaAppLocalizations_createInstance": AppStoreFullApiOperationInput<"betaAppLocalizations_createInstance">;
  "betaAppLocalizations_deleteInstance": AppStoreFullApiOperationInput<"betaAppLocalizations_deleteInstance">;
  "betaAppLocalizations_getCollection": AppStoreFullApiOperationInput<"betaAppLocalizations_getCollection">;
  "betaAppLocalizations_getInstance": AppStoreFullApiOperationInput<"betaAppLocalizations_getInstance">;
  "betaAppLocalizations_updateInstance": AppStoreFullApiOperationInput<"betaAppLocalizations_updateInstance">;
}

export interface AppStoreFullApiBetaAppLocalizationsGeneratedClient {
  BetaAppLocalizationsAppGetToOneRelated(...args: AppStoreFullApiOperationArgs<"betaAppLocalizations_app_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["betaAppLocalizations_app_getToOneRelated"]>;
  BetaAppLocalizationsAppGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"betaAppLocalizations_app_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaAppLocalizations_app_getToOneRelationship"]>;
  BetaAppLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"betaAppLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppLocalizations_createInstance"]>;
  BetaAppLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"betaAppLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppLocalizations_deleteInstance"]>;
  BetaAppLocalizationsGetCollection(...args: AppStoreFullApiOperationArgs<"betaAppLocalizations_getCollection">): Promise<AppStoreFullApiOperationResponseMap["betaAppLocalizations_getCollection"]>;
  BetaAppLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"betaAppLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppLocalizations_getInstance"]>;
  BetaAppLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"betaAppLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppLocalizations_updateInstance"]>;
}

export const AppStoreFullApiBetaAppLocalizationsGeneratedFunctionNames = [
  "BetaAppLocalizationsAppGetToOneRelated",
  "BetaAppLocalizationsAppGetToOneRelationship",
  "BetaAppLocalizationsCreateInstance",
  "BetaAppLocalizationsDeleteInstance",
  "BetaAppLocalizationsGetCollection",
  "BetaAppLocalizationsGetInstance",
  "BetaAppLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaAppLocalizationsGeneratedClient)[];

export function createAppStoreFullApiBetaAppLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaAppLocalizationsGeneratedClient {
  return {
    BetaAppLocalizationsAppGetToOneRelated: (...args) => callOperation("betaAppLocalizations_app_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"betaAppLocalizations_app_getToOneRelated">)),
    BetaAppLocalizationsAppGetToOneRelationship: (...args) => callOperation("betaAppLocalizations_app_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"betaAppLocalizations_app_getToOneRelationship">)),
    BetaAppLocalizationsCreateInstance: (...args) => callOperation("betaAppLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppLocalizations_createInstance">)),
    BetaAppLocalizationsDeleteInstance: (...args) => callOperation("betaAppLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppLocalizations_deleteInstance">)),
    BetaAppLocalizationsGetCollection: (...args) => callOperation("betaAppLocalizations_getCollection", ...(args as AppStoreFullApiOperationArgs<"betaAppLocalizations_getCollection">)),
    BetaAppLocalizationsGetInstance: (...args) => callOperation("betaAppLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppLocalizations_getInstance">)),
    BetaAppLocalizationsUpdateInstance: (...args) => callOperation("betaAppLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppLocalizations_updateInstance">)),
  };
}
