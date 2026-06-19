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
export const ZendeskFullApiGroupMembershipsOperationKeys = [
  "CreateGroupMembership",
  "CreateUserGroupMembership",
  "DeleteGroupMembership",
  "DeleteUserGroupMembership",
  "GroupMembershipBulkCreate",
  "GroupMembershipBulkDelete",
  "GroupMembershipSetDefault",
  "ListAssignableGroupMemberships",
  "ListAssignableGroupMembershipsByGroup",
  "ListGroupMemberships",
  "ListGroupMembershipsByGroup",
  "ListUserGroupMemberships",
  "ShowGroupMembershipById",
  "ShowUserGroupMembershipById"
] as const;
export type ZendeskFullApiGroupMembershipsOperationKey = typeof ZendeskFullApiGroupMembershipsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiGroupMembershipsOperationPathParamMap {
  "CreateGroupMembership": {};
  "CreateUserGroupMembership": { "user_id": ZendeskFullApiPathParamValue };
  "DeleteGroupMembership": { "group_membership_id": ZendeskFullApiPathParamValue };
  "DeleteUserGroupMembership": { "user_id": ZendeskFullApiPathParamValue; "group_membership_id": ZendeskFullApiPathParamValue };
  "GroupMembershipBulkCreate": {};
  "GroupMembershipBulkDelete": {};
  "GroupMembershipSetDefault": { "user_id": ZendeskFullApiPathParamValue; "group_membership_id": ZendeskFullApiPathParamValue };
  "ListAssignableGroupMemberships": {};
  "ListAssignableGroupMembershipsByGroup": { "group_id": ZendeskFullApiPathParamValue };
  "ListGroupMemberships": {};
  "ListGroupMembershipsByGroup": { "group_id": ZendeskFullApiPathParamValue };
  "ListUserGroupMemberships": { "user_id": ZendeskFullApiPathParamValue };
  "ShowGroupMembershipById": { "group_membership_id": ZendeskFullApiPathParamValue };
  "ShowUserGroupMembershipById": { "user_id": ZendeskFullApiPathParamValue; "group_membership_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiGroupMembershipsOperationRequestMap {
  "CreateGroupMembership": ZendeskFullApiOperationInput<"CreateGroupMembership">;
  "CreateUserGroupMembership": ZendeskFullApiOperationInput<"CreateUserGroupMembership">;
  "DeleteGroupMembership": ZendeskFullApiOperationInput<"DeleteGroupMembership">;
  "DeleteUserGroupMembership": ZendeskFullApiOperationInput<"DeleteUserGroupMembership">;
  "GroupMembershipBulkCreate": ZendeskFullApiOperationInput<"GroupMembershipBulkCreate">;
  "GroupMembershipBulkDelete": ZendeskFullApiOperationInput<"GroupMembershipBulkDelete">;
  "GroupMembershipSetDefault": ZendeskFullApiOperationInput<"GroupMembershipSetDefault">;
  "ListAssignableGroupMemberships": ZendeskFullApiOperationInput<"ListAssignableGroupMemberships">;
  "ListAssignableGroupMembershipsByGroup": ZendeskFullApiOperationInput<"ListAssignableGroupMembershipsByGroup">;
  "ListGroupMemberships": ZendeskFullApiOperationInput<"ListGroupMemberships">;
  "ListGroupMembershipsByGroup": ZendeskFullApiOperationInput<"ListGroupMembershipsByGroup">;
  "ListUserGroupMemberships": ZendeskFullApiOperationInput<"ListUserGroupMemberships">;
  "ShowGroupMembershipById": ZendeskFullApiOperationInput<"ShowGroupMembershipById">;
  "ShowUserGroupMembershipById": ZendeskFullApiOperationInput<"ShowUserGroupMembershipById">;
}

export interface ZendeskFullApiGroupMembershipsGeneratedClient {
  CreateGroupMembership(...args: ZendeskFullApiOperationArgs<"CreateGroupMembership">): Promise<ZendeskFullApiOperationResponseMap["CreateGroupMembership"]>;
  CreateUserGroupMembership(...args: ZendeskFullApiOperationArgs<"CreateUserGroupMembership">): Promise<ZendeskFullApiOperationResponseMap["CreateUserGroupMembership"]>;
  DeleteGroupMembership(...args: ZendeskFullApiOperationArgs<"DeleteGroupMembership">): Promise<ZendeskFullApiOperationResponseMap["DeleteGroupMembership"]>;
  DeleteUserGroupMembership(...args: ZendeskFullApiOperationArgs<"DeleteUserGroupMembership">): Promise<ZendeskFullApiOperationResponseMap["DeleteUserGroupMembership"]>;
  GroupMembershipBulkCreate(...args: ZendeskFullApiOperationArgs<"GroupMembershipBulkCreate">): Promise<ZendeskFullApiOperationResponseMap["GroupMembershipBulkCreate"]>;
  GroupMembershipBulkDelete(...args: ZendeskFullApiOperationArgs<"GroupMembershipBulkDelete">): Promise<ZendeskFullApiOperationResponseMap["GroupMembershipBulkDelete"]>;
  GroupMembershipSetDefault(...args: ZendeskFullApiOperationArgs<"GroupMembershipSetDefault">): Promise<ZendeskFullApiOperationResponseMap["GroupMembershipSetDefault"]>;
  ListAssignableGroupMemberships(...args: ZendeskFullApiOperationArgs<"ListAssignableGroupMemberships">): Promise<ZendeskFullApiOperationResponseMap["ListAssignableGroupMemberships"]>;
  ListAssignableGroupMembershipsByGroup(...args: ZendeskFullApiOperationArgs<"ListAssignableGroupMembershipsByGroup">): Promise<ZendeskFullApiOperationResponseMap["ListAssignableGroupMembershipsByGroup"]>;
  ListGroupMemberships(...args: ZendeskFullApiOperationArgs<"ListGroupMemberships">): Promise<ZendeskFullApiOperationResponseMap["ListGroupMemberships"]>;
  ListGroupMembershipsByGroup(...args: ZendeskFullApiOperationArgs<"ListGroupMembershipsByGroup">): Promise<ZendeskFullApiOperationResponseMap["ListGroupMembershipsByGroup"]>;
  ListUserGroupMemberships(...args: ZendeskFullApiOperationArgs<"ListUserGroupMemberships">): Promise<ZendeskFullApiOperationResponseMap["ListUserGroupMemberships"]>;
  ShowGroupMembershipById(...args: ZendeskFullApiOperationArgs<"ShowGroupMembershipById">): Promise<ZendeskFullApiOperationResponseMap["ShowGroupMembershipById"]>;
  ShowUserGroupMembershipById(...args: ZendeskFullApiOperationArgs<"ShowUserGroupMembershipById">): Promise<ZendeskFullApiOperationResponseMap["ShowUserGroupMembershipById"]>;
}

export const ZendeskFullApiGroupMembershipsGeneratedFunctionNames = [
  "CreateGroupMembership",
  "CreateUserGroupMembership",
  "DeleteGroupMembership",
  "DeleteUserGroupMembership",
  "GroupMembershipBulkCreate",
  "GroupMembershipBulkDelete",
  "GroupMembershipSetDefault",
  "ListAssignableGroupMemberships",
  "ListAssignableGroupMembershipsByGroup",
  "ListGroupMemberships",
  "ListGroupMembershipsByGroup",
  "ListUserGroupMemberships",
  "ShowGroupMembershipById",
  "ShowUserGroupMembershipById"
] as const satisfies readonly (keyof ZendeskFullApiGroupMembershipsGeneratedClient)[];

export function createZendeskFullApiGroupMembershipsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiGroupMembershipsGeneratedClient {
  return {
    CreateGroupMembership: (...args) => callOperation("CreateGroupMembership", ...(args as ZendeskFullApiOperationArgs<"CreateGroupMembership">)),
    CreateUserGroupMembership: (...args) => callOperation("CreateUserGroupMembership", ...(args as ZendeskFullApiOperationArgs<"CreateUserGroupMembership">)),
    DeleteGroupMembership: (...args) => callOperation("DeleteGroupMembership", ...(args as ZendeskFullApiOperationArgs<"DeleteGroupMembership">)),
    DeleteUserGroupMembership: (...args) => callOperation("DeleteUserGroupMembership", ...(args as ZendeskFullApiOperationArgs<"DeleteUserGroupMembership">)),
    GroupMembershipBulkCreate: (...args) => callOperation("GroupMembershipBulkCreate", ...(args as ZendeskFullApiOperationArgs<"GroupMembershipBulkCreate">)),
    GroupMembershipBulkDelete: (...args) => callOperation("GroupMembershipBulkDelete", ...(args as ZendeskFullApiOperationArgs<"GroupMembershipBulkDelete">)),
    GroupMembershipSetDefault: (...args) => callOperation("GroupMembershipSetDefault", ...(args as ZendeskFullApiOperationArgs<"GroupMembershipSetDefault">)),
    ListAssignableGroupMemberships: (...args) => callOperation("ListAssignableGroupMemberships", ...(args as ZendeskFullApiOperationArgs<"ListAssignableGroupMemberships">)),
    ListAssignableGroupMembershipsByGroup: (...args) => callOperation("ListAssignableGroupMembershipsByGroup", ...(args as ZendeskFullApiOperationArgs<"ListAssignableGroupMembershipsByGroup">)),
    ListGroupMemberships: (...args) => callOperation("ListGroupMemberships", ...(args as ZendeskFullApiOperationArgs<"ListGroupMemberships">)),
    ListGroupMembershipsByGroup: (...args) => callOperation("ListGroupMembershipsByGroup", ...(args as ZendeskFullApiOperationArgs<"ListGroupMembershipsByGroup">)),
    ListUserGroupMemberships: (...args) => callOperation("ListUserGroupMemberships", ...(args as ZendeskFullApiOperationArgs<"ListUserGroupMemberships">)),
    ShowGroupMembershipById: (...args) => callOperation("ShowGroupMembershipById", ...(args as ZendeskFullApiOperationArgs<"ShowGroupMembershipById">)),
    ShowUserGroupMembershipById: (...args) => callOperation("ShowUserGroupMembershipById", ...(args as ZendeskFullApiOperationArgs<"ShowUserGroupMembershipById">)),
  };
}
