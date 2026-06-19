// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiUsersOperationKeys = [
  "AutocompleteUsers",
  "AutocompleteUsersPost",
  "CountDeletedUsers",
  "CountGroupUsers",
  "CountOrganizationUsers",
  "CountUsers",
  "CreateManyUsers",
  "CreateOrUpdateManyUsers",
  "CreateOrUpdateUser",
  "CreateUser",
  "DeleteUser",
  "DestroyManyUsers",
  "GetUserEntitlementsFull",
  "ListDeletedUsers",
  "ListGroupUsers",
  "ListOrganizationUsers",
  "ListUsers",
  "LogoutManyUsers",
  "MergeEndUsers",
  "PermanentlyDeleteUser",
  "RequestUserCreate",
  "SearchUsers",
  "ShowCurrentUser",
  "ShowCurrentUserSettings",
  "ShowDeletedUser",
  "ShowManyUsers",
  "ShowUser",
  "ShowUserComplianceDeletionStatuses",
  "ShowUserRelated",
  "UpdateCurrentUserSettings",
  "UpdateManyUsers",
  "UpdateUser"
] as const;
export type ZendeskFullApiUsersOperationKey = typeof ZendeskFullApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiUsersOperationPathParamMap {
  "AutocompleteUsers": {};
  "AutocompleteUsersPost": {};
  "CountDeletedUsers": {};
  "CountGroupUsers": { "group_id": ZendeskFullApiPathParamValue };
  "CountOrganizationUsers": { "organization_id": ZendeskFullApiPathParamValue };
  "CountUsers": {};
  "CreateManyUsers": {};
  "CreateOrUpdateManyUsers": {};
  "CreateOrUpdateUser": {};
  "CreateUser": {};
  "DeleteUser": { "user_id": ZendeskFullApiPathParamValue };
  "DestroyManyUsers": {};
  "GetUserEntitlementsFull": { "user_id": ZendeskFullApiPathParamValue };
  "ListDeletedUsers": {};
  "ListGroupUsers": { "group_id": ZendeskFullApiPathParamValue };
  "ListOrganizationUsers": { "organization_id": ZendeskFullApiPathParamValue };
  "ListUsers": {};
  "LogoutManyUsers": {};
  "MergeEndUsers": { "user_id": ZendeskFullApiPathParamValue };
  "PermanentlyDeleteUser": { "deleted_user_id": ZendeskFullApiPathParamValue };
  "RequestUserCreate": {};
  "SearchUsers": {};
  "ShowCurrentUser": {};
  "ShowCurrentUserSettings": {};
  "ShowDeletedUser": { "deleted_user_id": ZendeskFullApiPathParamValue };
  "ShowManyUsers": {};
  "ShowUser": { "user_id": ZendeskFullApiPathParamValue };
  "ShowUserComplianceDeletionStatuses": { "user_id": ZendeskFullApiPathParamValue };
  "ShowUserRelated": { "user_id": ZendeskFullApiPathParamValue };
  "UpdateCurrentUserSettings": {};
  "UpdateManyUsers": {};
  "UpdateUser": { "user_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiUsersOperationRequestMap {
  "AutocompleteUsers": ZendeskFullApiOperationInput<"AutocompleteUsers">;
  "AutocompleteUsersPost": ZendeskFullApiOperationInput<"AutocompleteUsersPost">;
  "CountDeletedUsers": ZendeskFullApiOperationInput<"CountDeletedUsers">;
  "CountGroupUsers": ZendeskFullApiOperationInput<"CountGroupUsers">;
  "CountOrganizationUsers": ZendeskFullApiOperationInput<"CountOrganizationUsers">;
  "CountUsers": ZendeskFullApiOperationInput<"CountUsers">;
  "CreateManyUsers": ZendeskFullApiOperationInput<"CreateManyUsers">;
  "CreateOrUpdateManyUsers": ZendeskFullApiOperationInput<"CreateOrUpdateManyUsers">;
  "CreateOrUpdateUser": ZendeskFullApiOperationInput<"CreateOrUpdateUser">;
  "CreateUser": ZendeskFullApiOperationInput<"CreateUser">;
  "DeleteUser": ZendeskFullApiOperationInput<"DeleteUser">;
  "DestroyManyUsers": ZendeskFullApiOperationInput<"DestroyManyUsers">;
  "GetUserEntitlementsFull": ZendeskFullApiOperationInput<"GetUserEntitlementsFull">;
  "ListDeletedUsers": ZendeskFullApiOperationInput<"ListDeletedUsers">;
  "ListGroupUsers": ZendeskFullApiOperationInput<"ListGroupUsers">;
  "ListOrganizationUsers": ZendeskFullApiOperationInput<"ListOrganizationUsers">;
  "ListUsers": ZendeskFullApiOperationInput<"ListUsers">;
  "LogoutManyUsers": ZendeskFullApiOperationInput<"LogoutManyUsers">;
  "MergeEndUsers": ZendeskFullApiOperationInput<"MergeEndUsers">;
  "PermanentlyDeleteUser": ZendeskFullApiOperationInput<"PermanentlyDeleteUser">;
  "RequestUserCreate": ZendeskFullApiOperationInput<"RequestUserCreate">;
  "SearchUsers": ZendeskFullApiOperationInput<"SearchUsers">;
  "ShowCurrentUser": ZendeskFullApiOperationInput<"ShowCurrentUser">;
  "ShowCurrentUserSettings": ZendeskFullApiOperationInput<"ShowCurrentUserSettings">;
  "ShowDeletedUser": ZendeskFullApiOperationInput<"ShowDeletedUser">;
  "ShowManyUsers": ZendeskFullApiOperationInput<"ShowManyUsers">;
  "ShowUser": ZendeskFullApiOperationInput<"ShowUser">;
  "ShowUserComplianceDeletionStatuses": ZendeskFullApiOperationInput<"ShowUserComplianceDeletionStatuses">;
  "ShowUserRelated": ZendeskFullApiOperationInput<"ShowUserRelated">;
  "UpdateCurrentUserSettings": ZendeskFullApiOperationInput<"UpdateCurrentUserSettings">;
  "UpdateManyUsers": ZendeskFullApiOperationInput<"UpdateManyUsers">;
  "UpdateUser": ZendeskFullApiOperationInput<"UpdateUser">;
}

export interface ZendeskFullApiUsersGeneratedClient {
  AutocompleteUsers(...args: ZendeskFullApiOperationArgs<"AutocompleteUsers">): Promise<ZendeskFullApiOperationResponseMap["AutocompleteUsers"]>;
  AutocompleteUsersPost(...args: ZendeskFullApiOperationArgs<"AutocompleteUsersPost">): Promise<ZendeskFullApiOperationResponseMap["AutocompleteUsersPost"]>;
  CountDeletedUsers(...args: ZendeskFullApiOperationArgs<"CountDeletedUsers">): Promise<ZendeskFullApiOperationResponseMap["CountDeletedUsers"]>;
  CountGroupUsers(...args: ZendeskFullApiOperationArgs<"CountGroupUsers">): Promise<ZendeskFullApiOperationResponseMap["CountGroupUsers"]>;
  CountOrganizationUsers(...args: ZendeskFullApiOperationArgs<"CountOrganizationUsers">): Promise<ZendeskFullApiOperationResponseMap["CountOrganizationUsers"]>;
  CountUsers(...args: ZendeskFullApiOperationArgs<"CountUsers">): Promise<ZendeskFullApiOperationResponseMap["CountUsers"]>;
  CreateManyUsers(...args: ZendeskFullApiOperationArgs<"CreateManyUsers">): Promise<ZendeskFullApiOperationResponseMap["CreateManyUsers"]>;
  CreateOrUpdateManyUsers(...args: ZendeskFullApiOperationArgs<"CreateOrUpdateManyUsers">): Promise<ZendeskFullApiOperationResponseMap["CreateOrUpdateManyUsers"]>;
  CreateOrUpdateUser(...args: ZendeskFullApiOperationArgs<"CreateOrUpdateUser">): Promise<ZendeskFullApiOperationResponseMap["CreateOrUpdateUser"]>;
  CreateUser(...args: ZendeskFullApiOperationArgs<"CreateUser">): Promise<ZendeskFullApiOperationResponseMap["CreateUser"]>;
  DeleteUser(...args: ZendeskFullApiOperationArgs<"DeleteUser">): Promise<ZendeskFullApiOperationResponseMap["DeleteUser"]>;
  DestroyManyUsers(...args: ZendeskFullApiOperationArgs<"DestroyManyUsers">): Promise<ZendeskFullApiOperationResponseMap["DestroyManyUsers"]>;
  GetUserEntitlementsFull(...args: ZendeskFullApiOperationArgs<"GetUserEntitlementsFull">): Promise<ZendeskFullApiOperationResponseMap["GetUserEntitlementsFull"]>;
  ListDeletedUsers(...args: ZendeskFullApiOperationArgs<"ListDeletedUsers">): Promise<ZendeskFullApiOperationResponseMap["ListDeletedUsers"]>;
  ListGroupUsers(...args: ZendeskFullApiOperationArgs<"ListGroupUsers">): Promise<ZendeskFullApiOperationResponseMap["ListGroupUsers"]>;
  ListOrganizationUsers(...args: ZendeskFullApiOperationArgs<"ListOrganizationUsers">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationUsers"]>;
  ListUsers(...args: ZendeskFullApiOperationArgs<"ListUsers">): Promise<ZendeskFullApiOperationResponseMap["ListUsers"]>;
  LogoutManyUsers(...args: ZendeskFullApiOperationArgs<"LogoutManyUsers">): Promise<ZendeskFullApiOperationResponseMap["LogoutManyUsers"]>;
  MergeEndUsers(...args: ZendeskFullApiOperationArgs<"MergeEndUsers">): Promise<ZendeskFullApiOperationResponseMap["MergeEndUsers"]>;
  PermanentlyDeleteUser(...args: ZendeskFullApiOperationArgs<"PermanentlyDeleteUser">): Promise<ZendeskFullApiOperationResponseMap["PermanentlyDeleteUser"]>;
  RequestUserCreate(...args: ZendeskFullApiOperationArgs<"RequestUserCreate">): Promise<ZendeskFullApiOperationResponseMap["RequestUserCreate"]>;
  SearchUsers(...args: ZendeskFullApiOperationArgs<"SearchUsers">): Promise<ZendeskFullApiOperationResponseMap["SearchUsers"]>;
  ShowCurrentUser(...args: ZendeskFullApiOperationArgs<"ShowCurrentUser">): Promise<ZendeskFullApiOperationResponseMap["ShowCurrentUser"]>;
  ShowCurrentUserSettings(...args: ZendeskFullApiOperationArgs<"ShowCurrentUserSettings">): Promise<ZendeskFullApiOperationResponseMap["ShowCurrentUserSettings"]>;
  ShowDeletedUser(...args: ZendeskFullApiOperationArgs<"ShowDeletedUser">): Promise<ZendeskFullApiOperationResponseMap["ShowDeletedUser"]>;
  ShowManyUsers(...args: ZendeskFullApiOperationArgs<"ShowManyUsers">): Promise<ZendeskFullApiOperationResponseMap["ShowManyUsers"]>;
  ShowUser(...args: ZendeskFullApiOperationArgs<"ShowUser">): Promise<ZendeskFullApiOperationResponseMap["ShowUser"]>;
  ShowUserComplianceDeletionStatuses(...args: ZendeskFullApiOperationArgs<"ShowUserComplianceDeletionStatuses">): Promise<ZendeskFullApiOperationResponseMap["ShowUserComplianceDeletionStatuses"]>;
  ShowUserRelated(...args: ZendeskFullApiOperationArgs<"ShowUserRelated">): Promise<ZendeskFullApiOperationResponseMap["ShowUserRelated"]>;
  UpdateCurrentUserSettings(...args: ZendeskFullApiOperationArgs<"UpdateCurrentUserSettings">): Promise<ZendeskFullApiOperationResponseMap["UpdateCurrentUserSettings"]>;
  UpdateManyUsers(...args: ZendeskFullApiOperationArgs<"UpdateManyUsers">): Promise<ZendeskFullApiOperationResponseMap["UpdateManyUsers"]>;
  UpdateUser(...args: ZendeskFullApiOperationArgs<"UpdateUser">): Promise<ZendeskFullApiOperationResponseMap["UpdateUser"]>;
}

export const ZendeskFullApiUsersGeneratedFunctionNames = [
  "AutocompleteUsers",
  "AutocompleteUsersPost",
  "CountDeletedUsers",
  "CountGroupUsers",
  "CountOrganizationUsers",
  "CountUsers",
  "CreateManyUsers",
  "CreateOrUpdateManyUsers",
  "CreateOrUpdateUser",
  "CreateUser",
  "DeleteUser",
  "DestroyManyUsers",
  "GetUserEntitlementsFull",
  "ListDeletedUsers",
  "ListGroupUsers",
  "ListOrganizationUsers",
  "ListUsers",
  "LogoutManyUsers",
  "MergeEndUsers",
  "PermanentlyDeleteUser",
  "RequestUserCreate",
  "SearchUsers",
  "ShowCurrentUser",
  "ShowCurrentUserSettings",
  "ShowDeletedUser",
  "ShowManyUsers",
  "ShowUser",
  "ShowUserComplianceDeletionStatuses",
  "ShowUserRelated",
  "UpdateCurrentUserSettings",
  "UpdateManyUsers",
  "UpdateUser"
] as const satisfies readonly (keyof ZendeskFullApiUsersGeneratedClient)[];

export function createZendeskFullApiUsersGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiUsersGeneratedClient {
  return {
    AutocompleteUsers: (...args) => callOperation("AutocompleteUsers", ...(args as ZendeskFullApiOperationArgs<"AutocompleteUsers">)),
    AutocompleteUsersPost: (...args) => callOperation("AutocompleteUsersPost", ...(args as ZendeskFullApiOperationArgs<"AutocompleteUsersPost">)),
    CountDeletedUsers: (...args) => callOperation("CountDeletedUsers", ...(args as ZendeskFullApiOperationArgs<"CountDeletedUsers">)),
    CountGroupUsers: (...args) => callOperation("CountGroupUsers", ...(args as ZendeskFullApiOperationArgs<"CountGroupUsers">)),
    CountOrganizationUsers: (...args) => callOperation("CountOrganizationUsers", ...(args as ZendeskFullApiOperationArgs<"CountOrganizationUsers">)),
    CountUsers: (...args) => callOperation("CountUsers", ...(args as ZendeskFullApiOperationArgs<"CountUsers">)),
    CreateManyUsers: (...args) => callOperation("CreateManyUsers", ...(args as ZendeskFullApiOperationArgs<"CreateManyUsers">)),
    CreateOrUpdateManyUsers: (...args) => callOperation("CreateOrUpdateManyUsers", ...(args as ZendeskFullApiOperationArgs<"CreateOrUpdateManyUsers">)),
    CreateOrUpdateUser: (...args) => callOperation("CreateOrUpdateUser", ...(args as ZendeskFullApiOperationArgs<"CreateOrUpdateUser">)),
    CreateUser: (...args) => callOperation("CreateUser", ...(args as ZendeskFullApiOperationArgs<"CreateUser">)),
    DeleteUser: (...args) => callOperation("DeleteUser", ...(args as ZendeskFullApiOperationArgs<"DeleteUser">)),
    DestroyManyUsers: (...args) => callOperation("DestroyManyUsers", ...(args as ZendeskFullApiOperationArgs<"DestroyManyUsers">)),
    GetUserEntitlementsFull: (...args) => callOperation("GetUserEntitlementsFull", ...(args as ZendeskFullApiOperationArgs<"GetUserEntitlementsFull">)),
    ListDeletedUsers: (...args) => callOperation("ListDeletedUsers", ...(args as ZendeskFullApiOperationArgs<"ListDeletedUsers">)),
    ListGroupUsers: (...args) => callOperation("ListGroupUsers", ...(args as ZendeskFullApiOperationArgs<"ListGroupUsers">)),
    ListOrganizationUsers: (...args) => callOperation("ListOrganizationUsers", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationUsers">)),
    ListUsers: (...args) => callOperation("ListUsers", ...(args as ZendeskFullApiOperationArgs<"ListUsers">)),
    LogoutManyUsers: (...args) => callOperation("LogoutManyUsers", ...(args as ZendeskFullApiOperationArgs<"LogoutManyUsers">)),
    MergeEndUsers: (...args) => callOperation("MergeEndUsers", ...(args as ZendeskFullApiOperationArgs<"MergeEndUsers">)),
    PermanentlyDeleteUser: (...args) => callOperation("PermanentlyDeleteUser", ...(args as ZendeskFullApiOperationArgs<"PermanentlyDeleteUser">)),
    RequestUserCreate: (...args) => callOperation("RequestUserCreate", ...(args as ZendeskFullApiOperationArgs<"RequestUserCreate">)),
    SearchUsers: (...args) => callOperation("SearchUsers", ...(args as ZendeskFullApiOperationArgs<"SearchUsers">)),
    ShowCurrentUser: (...args) => callOperation("ShowCurrentUser", ...(args as ZendeskFullApiOperationArgs<"ShowCurrentUser">)),
    ShowCurrentUserSettings: (...args) => callOperation("ShowCurrentUserSettings", ...(args as ZendeskFullApiOperationArgs<"ShowCurrentUserSettings">)),
    ShowDeletedUser: (...args) => callOperation("ShowDeletedUser", ...(args as ZendeskFullApiOperationArgs<"ShowDeletedUser">)),
    ShowManyUsers: (...args) => callOperation("ShowManyUsers", ...(args as ZendeskFullApiOperationArgs<"ShowManyUsers">)),
    ShowUser: (...args) => callOperation("ShowUser", ...(args as ZendeskFullApiOperationArgs<"ShowUser">)),
    ShowUserComplianceDeletionStatuses: (...args) => callOperation("ShowUserComplianceDeletionStatuses", ...(args as ZendeskFullApiOperationArgs<"ShowUserComplianceDeletionStatuses">)),
    ShowUserRelated: (...args) => callOperation("ShowUserRelated", ...(args as ZendeskFullApiOperationArgs<"ShowUserRelated">)),
    UpdateCurrentUserSettings: (...args) => callOperation("UpdateCurrentUserSettings", ...(args as ZendeskFullApiOperationArgs<"UpdateCurrentUserSettings">)),
    UpdateManyUsers: (...args) => callOperation("UpdateManyUsers", ...(args as ZendeskFullApiOperationArgs<"UpdateManyUsers">)),
    UpdateUser: (...args) => callOperation("UpdateUser", ...(args as ZendeskFullApiOperationArgs<"UpdateUser">)),
  };
}
