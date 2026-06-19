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
export const ZendeskFullApiOrganizationMembershipsOperationKeys = [
  "CreateManyOrganizationMemberships",
  "CreateOrganizationMembership",
  "CreateUserOrganizationMembership",
  "DeleteManyOrganizationMemberships",
  "DeleteOrganizationMembership",
  "DeleteUserOrganizationMembership",
  "ListOrganizationMemberships",
  "ListOrganizationMembershipsByOrganization",
  "ListUserOrganizationMemberships",
  "SetOrganizationAsDefault",
  "SetOrganizationMembershipAsDefault",
  "ShowOrganizationMembershipById",
  "ShowOrganizationMembershipByUserId",
  "UnassignOrganization"
] as const;
export type ZendeskFullApiOrganizationMembershipsOperationKey = typeof ZendeskFullApiOrganizationMembershipsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiOrganizationMembershipsOperationPathParamMap {
  "CreateManyOrganizationMemberships": {};
  "CreateOrganizationMembership": {};
  "CreateUserOrganizationMembership": { "user_id": ZendeskFullApiPathParamValue };
  "DeleteManyOrganizationMemberships": {};
  "DeleteOrganizationMembership": { "organization_membership_id": ZendeskFullApiPathParamValue };
  "DeleteUserOrganizationMembership": { "user_id": ZendeskFullApiPathParamValue; "organization_membership_id": ZendeskFullApiPathParamValue };
  "ListOrganizationMemberships": {};
  "ListOrganizationMembershipsByOrganization": { "organization_id": ZendeskFullApiPathParamValue };
  "ListUserOrganizationMemberships": { "user_id": ZendeskFullApiPathParamValue };
  "SetOrganizationAsDefault": { "user_id": ZendeskFullApiPathParamValue; "organization_id": ZendeskFullApiPathParamValue };
  "SetOrganizationMembershipAsDefault": { "user_id": ZendeskFullApiPathParamValue; "organization_membership_id": ZendeskFullApiPathParamValue };
  "ShowOrganizationMembershipById": { "organization_membership_id": ZendeskFullApiPathParamValue };
  "ShowOrganizationMembershipByUserId": { "user_id": ZendeskFullApiPathParamValue; "organization_membership_id": ZendeskFullApiPathParamValue };
  "UnassignOrganization": { "user_id": ZendeskFullApiPathParamValue; "organization_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiOrganizationMembershipsOperationRequestMap {
  "CreateManyOrganizationMemberships": ZendeskFullApiOperationInput<"CreateManyOrganizationMemberships">;
  "CreateOrganizationMembership": ZendeskFullApiOperationInput<"CreateOrganizationMembership">;
  "CreateUserOrganizationMembership": ZendeskFullApiOperationInput<"CreateUserOrganizationMembership">;
  "DeleteManyOrganizationMemberships": ZendeskFullApiOperationInput<"DeleteManyOrganizationMemberships">;
  "DeleteOrganizationMembership": ZendeskFullApiOperationInput<"DeleteOrganizationMembership">;
  "DeleteUserOrganizationMembership": ZendeskFullApiOperationInput<"DeleteUserOrganizationMembership">;
  "ListOrganizationMemberships": ZendeskFullApiOperationInput<"ListOrganizationMemberships">;
  "ListOrganizationMembershipsByOrganization": ZendeskFullApiOperationInput<"ListOrganizationMembershipsByOrganization">;
  "ListUserOrganizationMemberships": ZendeskFullApiOperationInput<"ListUserOrganizationMemberships">;
  "SetOrganizationAsDefault": ZendeskFullApiOperationInput<"SetOrganizationAsDefault">;
  "SetOrganizationMembershipAsDefault": ZendeskFullApiOperationInput<"SetOrganizationMembershipAsDefault">;
  "ShowOrganizationMembershipById": ZendeskFullApiOperationInput<"ShowOrganizationMembershipById">;
  "ShowOrganizationMembershipByUserId": ZendeskFullApiOperationInput<"ShowOrganizationMembershipByUserId">;
  "UnassignOrganization": ZendeskFullApiOperationInput<"UnassignOrganization">;
}

export interface ZendeskFullApiOrganizationMembershipsGeneratedClient {
  CreateManyOrganizationMemberships(...args: ZendeskFullApiOperationArgs<"CreateManyOrganizationMemberships">): Promise<ZendeskFullApiOperationResponseMap["CreateManyOrganizationMemberships"]>;
  CreateOrganizationMembership(...args: ZendeskFullApiOperationArgs<"CreateOrganizationMembership">): Promise<ZendeskFullApiOperationResponseMap["CreateOrganizationMembership"]>;
  CreateUserOrganizationMembership(...args: ZendeskFullApiOperationArgs<"CreateUserOrganizationMembership">): Promise<ZendeskFullApiOperationResponseMap["CreateUserOrganizationMembership"]>;
  DeleteManyOrganizationMemberships(...args: ZendeskFullApiOperationArgs<"DeleteManyOrganizationMemberships">): Promise<ZendeskFullApiOperationResponseMap["DeleteManyOrganizationMemberships"]>;
  DeleteOrganizationMembership(...args: ZendeskFullApiOperationArgs<"DeleteOrganizationMembership">): Promise<ZendeskFullApiOperationResponseMap["DeleteOrganizationMembership"]>;
  DeleteUserOrganizationMembership(...args: ZendeskFullApiOperationArgs<"DeleteUserOrganizationMembership">): Promise<ZendeskFullApiOperationResponseMap["DeleteUserOrganizationMembership"]>;
  ListOrganizationMemberships(...args: ZendeskFullApiOperationArgs<"ListOrganizationMemberships">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationMemberships"]>;
  ListOrganizationMembershipsByOrganization(...args: ZendeskFullApiOperationArgs<"ListOrganizationMembershipsByOrganization">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationMembershipsByOrganization"]>;
  ListUserOrganizationMemberships(...args: ZendeskFullApiOperationArgs<"ListUserOrganizationMemberships">): Promise<ZendeskFullApiOperationResponseMap["ListUserOrganizationMemberships"]>;
  SetOrganizationAsDefault(...args: ZendeskFullApiOperationArgs<"SetOrganizationAsDefault">): Promise<ZendeskFullApiOperationResponseMap["SetOrganizationAsDefault"]>;
  SetOrganizationMembershipAsDefault(...args: ZendeskFullApiOperationArgs<"SetOrganizationMembershipAsDefault">): Promise<ZendeskFullApiOperationResponseMap["SetOrganizationMembershipAsDefault"]>;
  ShowOrganizationMembershipById(...args: ZendeskFullApiOperationArgs<"ShowOrganizationMembershipById">): Promise<ZendeskFullApiOperationResponseMap["ShowOrganizationMembershipById"]>;
  ShowOrganizationMembershipByUserId(...args: ZendeskFullApiOperationArgs<"ShowOrganizationMembershipByUserId">): Promise<ZendeskFullApiOperationResponseMap["ShowOrganizationMembershipByUserId"]>;
  UnassignOrganization(...args: ZendeskFullApiOperationArgs<"UnassignOrganization">): Promise<ZendeskFullApiOperationResponseMap["UnassignOrganization"]>;
}

export const ZendeskFullApiOrganizationMembershipsGeneratedFunctionNames = [
  "CreateManyOrganizationMemberships",
  "CreateOrganizationMembership",
  "CreateUserOrganizationMembership",
  "DeleteManyOrganizationMemberships",
  "DeleteOrganizationMembership",
  "DeleteUserOrganizationMembership",
  "ListOrganizationMemberships",
  "ListOrganizationMembershipsByOrganization",
  "ListUserOrganizationMemberships",
  "SetOrganizationAsDefault",
  "SetOrganizationMembershipAsDefault",
  "ShowOrganizationMembershipById",
  "ShowOrganizationMembershipByUserId",
  "UnassignOrganization"
] as const satisfies readonly (keyof ZendeskFullApiOrganizationMembershipsGeneratedClient)[];

export function createZendeskFullApiOrganizationMembershipsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiOrganizationMembershipsGeneratedClient {
  return {
    CreateManyOrganizationMemberships: (...args) => callOperation("CreateManyOrganizationMemberships", ...(args as ZendeskFullApiOperationArgs<"CreateManyOrganizationMemberships">)),
    CreateOrganizationMembership: (...args) => callOperation("CreateOrganizationMembership", ...(args as ZendeskFullApiOperationArgs<"CreateOrganizationMembership">)),
    CreateUserOrganizationMembership: (...args) => callOperation("CreateUserOrganizationMembership", ...(args as ZendeskFullApiOperationArgs<"CreateUserOrganizationMembership">)),
    DeleteManyOrganizationMemberships: (...args) => callOperation("DeleteManyOrganizationMemberships", ...(args as ZendeskFullApiOperationArgs<"DeleteManyOrganizationMemberships">)),
    DeleteOrganizationMembership: (...args) => callOperation("DeleteOrganizationMembership", ...(args as ZendeskFullApiOperationArgs<"DeleteOrganizationMembership">)),
    DeleteUserOrganizationMembership: (...args) => callOperation("DeleteUserOrganizationMembership", ...(args as ZendeskFullApiOperationArgs<"DeleteUserOrganizationMembership">)),
    ListOrganizationMemberships: (...args) => callOperation("ListOrganizationMemberships", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationMemberships">)),
    ListOrganizationMembershipsByOrganization: (...args) => callOperation("ListOrganizationMembershipsByOrganization", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationMembershipsByOrganization">)),
    ListUserOrganizationMemberships: (...args) => callOperation("ListUserOrganizationMemberships", ...(args as ZendeskFullApiOperationArgs<"ListUserOrganizationMemberships">)),
    SetOrganizationAsDefault: (...args) => callOperation("SetOrganizationAsDefault", ...(args as ZendeskFullApiOperationArgs<"SetOrganizationAsDefault">)),
    SetOrganizationMembershipAsDefault: (...args) => callOperation("SetOrganizationMembershipAsDefault", ...(args as ZendeskFullApiOperationArgs<"SetOrganizationMembershipAsDefault">)),
    ShowOrganizationMembershipById: (...args) => callOperation("ShowOrganizationMembershipById", ...(args as ZendeskFullApiOperationArgs<"ShowOrganizationMembershipById">)),
    ShowOrganizationMembershipByUserId: (...args) => callOperation("ShowOrganizationMembershipByUserId", ...(args as ZendeskFullApiOperationArgs<"ShowOrganizationMembershipByUserId">)),
    UnassignOrganization: (...args) => callOperation("UnassignOrganization", ...(args as ZendeskFullApiOperationArgs<"UnassignOrganization">)),
  };
}
