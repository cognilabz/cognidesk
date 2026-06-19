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
export const AppStoreFullApiAppEventsOperationKeys = [
  "appEvents_createInstance",
  "appEvents_deleteInstance",
  "appEvents_getInstance",
  "appEvents_localizations_getToManyRelated",
  "appEvents_localizations_getToManyRelationship",
  "appEvents_updateInstance"
] as const;
export type AppStoreFullApiAppEventsOperationKey = typeof AppStoreFullApiAppEventsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppEventsOperationPathParamMap {
  "appEvents_createInstance": {};
  "appEvents_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appEvents_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appEvents_localizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appEvents_localizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appEvents_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppEventsOperationRequestMap {
  "appEvents_createInstance": AppStoreFullApiOperationInput<"appEvents_createInstance">;
  "appEvents_deleteInstance": AppStoreFullApiOperationInput<"appEvents_deleteInstance">;
  "appEvents_getInstance": AppStoreFullApiOperationInput<"appEvents_getInstance">;
  "appEvents_localizations_getToManyRelated": AppStoreFullApiOperationInput<"appEvents_localizations_getToManyRelated">;
  "appEvents_localizations_getToManyRelationship": AppStoreFullApiOperationInput<"appEvents_localizations_getToManyRelationship">;
  "appEvents_updateInstance": AppStoreFullApiOperationInput<"appEvents_updateInstance">;
}

export interface AppStoreFullApiAppEventsGeneratedClient {
  AppEventsCreateInstance(...args: AppStoreFullApiOperationArgs<"appEvents_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appEvents_createInstance"]>;
  AppEventsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appEvents_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appEvents_deleteInstance"]>;
  AppEventsGetInstance(...args: AppStoreFullApiOperationArgs<"appEvents_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appEvents_getInstance"]>;
  AppEventsLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appEvents_localizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appEvents_localizations_getToManyRelated"]>;
  AppEventsLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appEvents_localizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appEvents_localizations_getToManyRelationship"]>;
  AppEventsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appEvents_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appEvents_updateInstance"]>;
}

export const AppStoreFullApiAppEventsGeneratedFunctionNames = [
  "AppEventsCreateInstance",
  "AppEventsDeleteInstance",
  "AppEventsGetInstance",
  "AppEventsLocalizationsGetToManyRelated",
  "AppEventsLocalizationsGetToManyRelationship",
  "AppEventsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppEventsGeneratedClient)[];

export function createAppStoreFullApiAppEventsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppEventsGeneratedClient {
  return {
    AppEventsCreateInstance: (...args) => callOperation("appEvents_createInstance", ...(args as AppStoreFullApiOperationArgs<"appEvents_createInstance">)),
    AppEventsDeleteInstance: (...args) => callOperation("appEvents_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appEvents_deleteInstance">)),
    AppEventsGetInstance: (...args) => callOperation("appEvents_getInstance", ...(args as AppStoreFullApiOperationArgs<"appEvents_getInstance">)),
    AppEventsLocalizationsGetToManyRelated: (...args) => callOperation("appEvents_localizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appEvents_localizations_getToManyRelated">)),
    AppEventsLocalizationsGetToManyRelationship: (...args) => callOperation("appEvents_localizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appEvents_localizations_getToManyRelationship">)),
    AppEventsUpdateInstance: (...args) => callOperation("appEvents_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appEvents_updateInstance">)),
  };
}
