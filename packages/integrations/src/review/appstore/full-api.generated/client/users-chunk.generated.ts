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
export const AppStoreFullApiUsersOperationKeys = [
  "users_deleteInstance",
  "users_getCollection",
  "users_getInstance",
  "users_updateInstance",
  "users_visibleApps_createToManyRelationship",
  "users_visibleApps_deleteToManyRelationship",
  "users_visibleApps_getToManyRelated",
  "users_visibleApps_getToManyRelationship",
  "users_visibleApps_replaceToManyRelationship"
] as const;
export type AppStoreFullApiUsersOperationKey = typeof AppStoreFullApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiUsersOperationPathParamMap {
  "users_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "users_getCollection": {};
  "users_getInstance": { "id": AppStoreFullApiPathParamValue };
  "users_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "users_visibleApps_createToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "users_visibleApps_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "users_visibleApps_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "users_visibleApps_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "users_visibleApps_replaceToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiUsersOperationRequestMap {
  "users_deleteInstance": AppStoreFullApiOperationInput<"users_deleteInstance">;
  "users_getCollection": AppStoreFullApiOperationInput<"users_getCollection">;
  "users_getInstance": AppStoreFullApiOperationInput<"users_getInstance">;
  "users_updateInstance": AppStoreFullApiOperationInput<"users_updateInstance">;
  "users_visibleApps_createToManyRelationship": AppStoreFullApiOperationInput<"users_visibleApps_createToManyRelationship">;
  "users_visibleApps_deleteToManyRelationship": AppStoreFullApiOperationInput<"users_visibleApps_deleteToManyRelationship">;
  "users_visibleApps_getToManyRelated": AppStoreFullApiOperationInput<"users_visibleApps_getToManyRelated">;
  "users_visibleApps_getToManyRelationship": AppStoreFullApiOperationInput<"users_visibleApps_getToManyRelationship">;
  "users_visibleApps_replaceToManyRelationship": AppStoreFullApiOperationInput<"users_visibleApps_replaceToManyRelationship">;
}

export interface AppStoreFullApiUsersGeneratedClient {
  UsersDeleteInstance(...args: AppStoreFullApiOperationArgs<"users_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["users_deleteInstance"]>;
  UsersGetCollection(...args: AppStoreFullApiOperationArgs<"users_getCollection">): Promise<AppStoreFullApiOperationResponseMap["users_getCollection"]>;
  UsersGetInstance(...args: AppStoreFullApiOperationArgs<"users_getInstance">): Promise<AppStoreFullApiOperationResponseMap["users_getInstance"]>;
  UsersUpdateInstance(...args: AppStoreFullApiOperationArgs<"users_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["users_updateInstance"]>;
  UsersVisibleAppsCreateToManyRelationship(...args: AppStoreFullApiOperationArgs<"users_visibleApps_createToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["users_visibleApps_createToManyRelationship"]>;
  UsersVisibleAppsDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"users_visibleApps_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["users_visibleApps_deleteToManyRelationship"]>;
  UsersVisibleAppsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"users_visibleApps_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["users_visibleApps_getToManyRelated"]>;
  UsersVisibleAppsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"users_visibleApps_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["users_visibleApps_getToManyRelationship"]>;
  UsersVisibleAppsReplaceToManyRelationship(...args: AppStoreFullApiOperationArgs<"users_visibleApps_replaceToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["users_visibleApps_replaceToManyRelationship"]>;
}

export const AppStoreFullApiUsersGeneratedFunctionNames = [
  "UsersDeleteInstance",
  "UsersGetCollection",
  "UsersGetInstance",
  "UsersUpdateInstance",
  "UsersVisibleAppsCreateToManyRelationship",
  "UsersVisibleAppsDeleteToManyRelationship",
  "UsersVisibleAppsGetToManyRelated",
  "UsersVisibleAppsGetToManyRelationship",
  "UsersVisibleAppsReplaceToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiUsersGeneratedClient)[];

export function createAppStoreFullApiUsersGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiUsersGeneratedClient {
  return {
    UsersDeleteInstance: (...args) => callOperation("users_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"users_deleteInstance">)),
    UsersGetCollection: (...args) => callOperation("users_getCollection", ...(args as AppStoreFullApiOperationArgs<"users_getCollection">)),
    UsersGetInstance: (...args) => callOperation("users_getInstance", ...(args as AppStoreFullApiOperationArgs<"users_getInstance">)),
    UsersUpdateInstance: (...args) => callOperation("users_updateInstance", ...(args as AppStoreFullApiOperationArgs<"users_updateInstance">)),
    UsersVisibleAppsCreateToManyRelationship: (...args) => callOperation("users_visibleApps_createToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"users_visibleApps_createToManyRelationship">)),
    UsersVisibleAppsDeleteToManyRelationship: (...args) => callOperation("users_visibleApps_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"users_visibleApps_deleteToManyRelationship">)),
    UsersVisibleAppsGetToManyRelated: (...args) => callOperation("users_visibleApps_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"users_visibleApps_getToManyRelated">)),
    UsersVisibleAppsGetToManyRelationship: (...args) => callOperation("users_visibleApps_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"users_visibleApps_getToManyRelationship">)),
    UsersVisibleAppsReplaceToManyRelationship: (...args) => callOperation("users_visibleApps_replaceToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"users_visibleApps_replaceToManyRelationship">)),
  };
}
