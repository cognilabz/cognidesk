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
export const AppStoreFullApiUserInvitationsOperationKeys = [
  "userInvitations_createInstance",
  "userInvitations_deleteInstance",
  "userInvitations_getCollection",
  "userInvitations_getInstance",
  "userInvitations_visibleApps_getToManyRelated",
  "userInvitations_visibleApps_getToManyRelationship"
] as const;
export type AppStoreFullApiUserInvitationsOperationKey = typeof AppStoreFullApiUserInvitationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiUserInvitationsOperationPathParamMap {
  "userInvitations_createInstance": {};
  "userInvitations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "userInvitations_getCollection": {};
  "userInvitations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "userInvitations_visibleApps_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "userInvitations_visibleApps_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiUserInvitationsOperationRequestMap {
  "userInvitations_createInstance": AppStoreFullApiOperationInput<"userInvitations_createInstance">;
  "userInvitations_deleteInstance": AppStoreFullApiOperationInput<"userInvitations_deleteInstance">;
  "userInvitations_getCollection": AppStoreFullApiOperationInput<"userInvitations_getCollection">;
  "userInvitations_getInstance": AppStoreFullApiOperationInput<"userInvitations_getInstance">;
  "userInvitations_visibleApps_getToManyRelated": AppStoreFullApiOperationInput<"userInvitations_visibleApps_getToManyRelated">;
  "userInvitations_visibleApps_getToManyRelationship": AppStoreFullApiOperationInput<"userInvitations_visibleApps_getToManyRelationship">;
}

export interface AppStoreFullApiUserInvitationsGeneratedClient {
  UserInvitationsCreateInstance(...args: AppStoreFullApiOperationArgs<"userInvitations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["userInvitations_createInstance"]>;
  UserInvitationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"userInvitations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["userInvitations_deleteInstance"]>;
  UserInvitationsGetCollection(...args: AppStoreFullApiOperationArgs<"userInvitations_getCollection">): Promise<AppStoreFullApiOperationResponseMap["userInvitations_getCollection"]>;
  UserInvitationsGetInstance(...args: AppStoreFullApiOperationArgs<"userInvitations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["userInvitations_getInstance"]>;
  UserInvitationsVisibleAppsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"userInvitations_visibleApps_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["userInvitations_visibleApps_getToManyRelated"]>;
  UserInvitationsVisibleAppsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"userInvitations_visibleApps_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["userInvitations_visibleApps_getToManyRelationship"]>;
}

export const AppStoreFullApiUserInvitationsGeneratedFunctionNames = [
  "UserInvitationsCreateInstance",
  "UserInvitationsDeleteInstance",
  "UserInvitationsGetCollection",
  "UserInvitationsGetInstance",
  "UserInvitationsVisibleAppsGetToManyRelated",
  "UserInvitationsVisibleAppsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiUserInvitationsGeneratedClient)[];

export function createAppStoreFullApiUserInvitationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiUserInvitationsGeneratedClient {
  return {
    UserInvitationsCreateInstance: (...args) => callOperation("userInvitations_createInstance", ...(args as AppStoreFullApiOperationArgs<"userInvitations_createInstance">)),
    UserInvitationsDeleteInstance: (...args) => callOperation("userInvitations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"userInvitations_deleteInstance">)),
    UserInvitationsGetCollection: (...args) => callOperation("userInvitations_getCollection", ...(args as AppStoreFullApiOperationArgs<"userInvitations_getCollection">)),
    UserInvitationsGetInstance: (...args) => callOperation("userInvitations_getInstance", ...(args as AppStoreFullApiOperationArgs<"userInvitations_getInstance">)),
    UserInvitationsVisibleAppsGetToManyRelated: (...args) => callOperation("userInvitations_visibleApps_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"userInvitations_visibleApps_getToManyRelated">)),
    UserInvitationsVisibleAppsGetToManyRelationship: (...args) => callOperation("userInvitations_visibleApps_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"userInvitations_visibleApps_getToManyRelationship">)),
  };
}
