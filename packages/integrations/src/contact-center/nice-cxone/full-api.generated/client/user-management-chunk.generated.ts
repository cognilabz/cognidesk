// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiUserManagementOperationKeys = [
  "cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams",
  "cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams",
  "cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}",
  "cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search",
  "cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users",
  "cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users",
  "cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users",
  "cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate",
  "cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}",
  "cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive",
  "cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search",
  "cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities",
  "cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail",
  "cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById",
  "cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities",
  "cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator"
] as const;
export type NiceCxoneFullApiUserManagementOperationKey = typeof NiceCxoneFullApiUserManagementOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiUserManagementOperationPathParamMap {
  "cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams": {};
  "cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams": {};
  "cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}": { "teamId": NiceCxoneFullApiPathParamValue };
  "cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search": {};
  "cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users": {};
  "cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users": {};
  "cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users": {};
  "cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate": {};
  "cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}": { "userId": NiceCxoneFullApiPathParamValue };
  "cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive": { "userId": NiceCxoneFullApiPathParamValue };
  "cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search": {};
  "cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities": {};
  "cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail": {};
  "cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById": {};
  "cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities": { "userId": NiceCxoneFullApiPathParamValue };
  "cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator": { "userId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiUserManagementOperationRequestMap {
  "cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams">;
  "cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams">;
  "cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}">;
  "cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search">;
  "cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users">;
  "cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users">;
  "cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users">;
  "cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate">;
  "cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}">;
  "cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive">;
  "cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search">;
  "cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities">;
  "cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail">;
  "cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById">;
  "cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities">;
  "cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator": NiceCxoneFullApiOperationInput<"cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator">;
}

export interface NiceCxoneFullApiUserManagementGeneratedClient {
  CxoneUsermanagementApiDocsCreateTeam(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams"]>;
  CxoneUsermanagementApiDocsUpdateTeam(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams"]>;
  CxoneUsermanagementApiDocsGetTeamById(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}"]>;
  CxoneUsermanagementApiDocsGetTeamsByCriteria(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search"]>;
  CxoneUsermanagementApiDocsGetUserList(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users"]>;
  CxoneUsermanagementApiDocsRegisterUserV1(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users"]>;
  CxoneUsermanagementApiDocsUpdateUserV1(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users"]>;
  CxoneUsermanagementApiDocsDeactivateUser(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate"]>;
  CxoneUsermanagementApiDocsGetUserByIdV3(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}"]>;
  CxoneUsermanagementApiDocsReviveUser(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive"]>;
  CxoneUsermanagementApiDocsGetUsersByCriteria(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search"]>;
  CxoneUsermanagementApiDocsGetUserIdentityList(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities"]>;
  CxoneUsermanagementApiDocsInviteUserByEmail(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail"]>;
  CxoneUsermanagementApiDocsInviteUserById(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById"]>;
  CxoneUsermanagementApiDocsGetUserIdentity(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities"]>;
  CxoneUsermanagementApiDocsAssignAuthenticatorV1(...args: NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator"]>;
}

export const NiceCxoneFullApiUserManagementGeneratedFunctionNames = [
  "CxoneUsermanagementApiDocsCreateTeam",
  "CxoneUsermanagementApiDocsUpdateTeam",
  "CxoneUsermanagementApiDocsGetTeamById",
  "CxoneUsermanagementApiDocsGetTeamsByCriteria",
  "CxoneUsermanagementApiDocsGetUserList",
  "CxoneUsermanagementApiDocsRegisterUserV1",
  "CxoneUsermanagementApiDocsUpdateUserV1",
  "CxoneUsermanagementApiDocsDeactivateUser",
  "CxoneUsermanagementApiDocsGetUserByIdV3",
  "CxoneUsermanagementApiDocsReviveUser",
  "CxoneUsermanagementApiDocsGetUsersByCriteria",
  "CxoneUsermanagementApiDocsGetUserIdentityList",
  "CxoneUsermanagementApiDocsInviteUserByEmail",
  "CxoneUsermanagementApiDocsInviteUserById",
  "CxoneUsermanagementApiDocsGetUserIdentity",
  "CxoneUsermanagementApiDocsAssignAuthenticatorV1"
] as const satisfies readonly (keyof NiceCxoneFullApiUserManagementGeneratedClient)[];

export function createNiceCxoneFullApiUserManagementGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiUserManagementGeneratedClient {
  return {
    CxoneUsermanagementApiDocsCreateTeam: (...args) => callOperation("cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:createTeam:POST:/user-management/v3/teams">)),
    CxoneUsermanagementApiDocsUpdateTeam: (...args) => callOperation("cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:updateTeam:PUT:/user-management/v3/teams">)),
    CxoneUsermanagementApiDocsGetTeamById: (...args) => callOperation("cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getTeamById:GET:/user-management/v3/teams/{teamId}">)),
    CxoneUsermanagementApiDocsGetTeamsByCriteria: (...args) => callOperation("cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getTeamsByCriteria:POST:/user-management/v4/teams/search">)),
    CxoneUsermanagementApiDocsGetUserList: (...args) => callOperation("cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUserList:GET:/user-management/v1/users">)),
    CxoneUsermanagementApiDocsRegisterUserV1: (...args) => callOperation("cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:registerUserV1:POST:/user-management/v1/users">)),
    CxoneUsermanagementApiDocsUpdateUserV1: (...args) => callOperation("cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:updateUserV1:PUT:/user-management/v1/users">)),
    CxoneUsermanagementApiDocsDeactivateUser: (...args) => callOperation("cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:deactivateUser:POST:/user-management/v1/users/deactivate">)),
    CxoneUsermanagementApiDocsGetUserByIdV3: (...args) => callOperation("cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUserByIdV3:GET:/user-management/v3/users/{userId}">)),
    CxoneUsermanagementApiDocsReviveUser: (...args) => callOperation("cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:reviveUser:POST:/user-management/v1/users/{userId}/revive">)),
    CxoneUsermanagementApiDocsGetUsersByCriteria: (...args) => callOperation("cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUsersByCriteria:POST:/user-management/v2/users/search">)),
    CxoneUsermanagementApiDocsGetUserIdentityList: (...args) => callOperation("cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUserIdentityList:GET:/user-management/v2/users/identities">)),
    CxoneUsermanagementApiDocsInviteUserByEmail: (...args) => callOperation("cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:inviteUserByEmail:POST:/user-management/v2/users/inviteByEmail">)),
    CxoneUsermanagementApiDocsInviteUserById: (...args) => callOperation("cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:inviteUserById:POST:/user-management/v2/users/inviteById">)),
    CxoneUsermanagementApiDocsGetUserIdentity: (...args) => callOperation("cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:getUserIdentity:GET:/user-management/v1/users/{userId}/identities">)),
    CxoneUsermanagementApiDocsAssignAuthenticatorV1: (...args) => callOperation("cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator", ...(args as NiceCxoneFullApiOperationArgs<"cxone-usermanagement-api-docs:assignAuthenticatorV1:PUT:/user-management/v1/users/{userId}/login-authenticator">)),
  };
}
