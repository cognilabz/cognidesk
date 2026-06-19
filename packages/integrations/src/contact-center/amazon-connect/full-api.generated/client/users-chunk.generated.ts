// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiUsersOperationKeys = [
  "connect:AssociateUserProficiencies",
  "connect:CreateUser",
  "connect:DeleteUser",
  "connect:DescribeUser",
  "connect:DisassociateUserProficiencies",
  "connect:DismissUserContact",
  "connect:ListUserNotifications",
  "connect:ListUserProficiencies",
  "connect:PutUserStatus",
  "connect:UpdateUserConfig",
  "connect:UpdateUserHierarchy",
  "connect:UpdateUserIdentityInfo",
  "connect:UpdateUserNotificationStatus",
  "connect:UpdateUserPhoneConfig",
  "connect:UpdateUserProficiencies",
  "connect:UpdateUserRoutingProfile",
  "connect:UpdateUserSecurityProfiles"
] as const;
export type AmazonConnectFullApiUsersOperationKey = typeof AmazonConnectFullApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiUsersOperationPathParamMap {
  "connect:AssociateUserProficiencies": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:CreateUser": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteUser": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeUser": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateUserProficiencies": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:DismissUserContact": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:ListUserNotifications": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:ListUserProficiencies": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:PutUserStatus": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserConfig": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserHierarchy": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserIdentityInfo": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserNotificationStatus": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue; "NotificationId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserPhoneConfig": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserProficiencies": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserRoutingProfile": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserSecurityProfiles": { "InstanceId": AmazonConnectFullApiPathParamValue; "UserId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiUsersOperationRequestMap {
  "connect:AssociateUserProficiencies": AmazonConnectFullApiOperationInput<"connect:AssociateUserProficiencies">;
  "connect:CreateUser": AmazonConnectFullApiOperationInput<"connect:CreateUser">;
  "connect:DeleteUser": AmazonConnectFullApiOperationInput<"connect:DeleteUser">;
  "connect:DescribeUser": AmazonConnectFullApiOperationInput<"connect:DescribeUser">;
  "connect:DisassociateUserProficiencies": AmazonConnectFullApiOperationInput<"connect:DisassociateUserProficiencies">;
  "connect:DismissUserContact": AmazonConnectFullApiOperationInput<"connect:DismissUserContact">;
  "connect:ListUserNotifications": AmazonConnectFullApiOperationInput<"connect:ListUserNotifications">;
  "connect:ListUserProficiencies": AmazonConnectFullApiOperationInput<"connect:ListUserProficiencies">;
  "connect:PutUserStatus": AmazonConnectFullApiOperationInput<"connect:PutUserStatus">;
  "connect:UpdateUserConfig": AmazonConnectFullApiOperationInput<"connect:UpdateUserConfig">;
  "connect:UpdateUserHierarchy": AmazonConnectFullApiOperationInput<"connect:UpdateUserHierarchy">;
  "connect:UpdateUserIdentityInfo": AmazonConnectFullApiOperationInput<"connect:UpdateUserIdentityInfo">;
  "connect:UpdateUserNotificationStatus": AmazonConnectFullApiOperationInput<"connect:UpdateUserNotificationStatus">;
  "connect:UpdateUserPhoneConfig": AmazonConnectFullApiOperationInput<"connect:UpdateUserPhoneConfig">;
  "connect:UpdateUserProficiencies": AmazonConnectFullApiOperationInput<"connect:UpdateUserProficiencies">;
  "connect:UpdateUserRoutingProfile": AmazonConnectFullApiOperationInput<"connect:UpdateUserRoutingProfile">;
  "connect:UpdateUserSecurityProfiles": AmazonConnectFullApiOperationInput<"connect:UpdateUserSecurityProfiles">;
}

export interface AmazonConnectFullApiUsersGeneratedClient {
  AssociateUserProficiencies(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateUserProficiencies">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateUserProficiencies"]>;
  CreateUser(...args: AmazonConnectFullApiOperationArgs<"connect:CreateUser">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateUser"]>;
  DeleteUser(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteUser">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteUser"]>;
  DescribeUser(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeUser">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeUser"]>;
  DisassociateUserProficiencies(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateUserProficiencies">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateUserProficiencies"]>;
  DismissUserContact(...args: AmazonConnectFullApiOperationArgs<"connect:DismissUserContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DismissUserContact"]>;
  ListUserNotifications(...args: AmazonConnectFullApiOperationArgs<"connect:ListUserNotifications">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListUserNotifications"]>;
  ListUserProficiencies(...args: AmazonConnectFullApiOperationArgs<"connect:ListUserProficiencies">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListUserProficiencies"]>;
  PutUserStatus(...args: AmazonConnectFullApiOperationArgs<"connect:PutUserStatus">): Promise<AmazonConnectFullApiOperationResponseMap["connect:PutUserStatus"]>;
  UpdateUserConfig(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserConfig"]>;
  UpdateUserHierarchy(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserHierarchy">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserHierarchy"]>;
  UpdateUserIdentityInfo(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserIdentityInfo">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserIdentityInfo"]>;
  UpdateUserNotificationStatus(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserNotificationStatus">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserNotificationStatus"]>;
  UpdateUserPhoneConfig(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserPhoneConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserPhoneConfig"]>;
  UpdateUserProficiencies(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserProficiencies">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserProficiencies"]>;
  UpdateUserRoutingProfile(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserRoutingProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserRoutingProfile"]>;
  UpdateUserSecurityProfiles(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserSecurityProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserSecurityProfiles"]>;
}

export const AmazonConnectFullApiUsersGeneratedFunctionNames = [
  "AssociateUserProficiencies",
  "CreateUser",
  "DeleteUser",
  "DescribeUser",
  "DisassociateUserProficiencies",
  "DismissUserContact",
  "ListUserNotifications",
  "ListUserProficiencies",
  "PutUserStatus",
  "UpdateUserConfig",
  "UpdateUserHierarchy",
  "UpdateUserIdentityInfo",
  "UpdateUserNotificationStatus",
  "UpdateUserPhoneConfig",
  "UpdateUserProficiencies",
  "UpdateUserRoutingProfile",
  "UpdateUserSecurityProfiles"
] as const satisfies readonly (keyof AmazonConnectFullApiUsersGeneratedClient)[];

export function createAmazonConnectFullApiUsersGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiUsersGeneratedClient {
  return {
    AssociateUserProficiencies: (...args) => callOperation("connect:AssociateUserProficiencies", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateUserProficiencies">)),
    CreateUser: (...args) => callOperation("connect:CreateUser", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateUser">)),
    DeleteUser: (...args) => callOperation("connect:DeleteUser", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteUser">)),
    DescribeUser: (...args) => callOperation("connect:DescribeUser", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeUser">)),
    DisassociateUserProficiencies: (...args) => callOperation("connect:DisassociateUserProficiencies", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateUserProficiencies">)),
    DismissUserContact: (...args) => callOperation("connect:DismissUserContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:DismissUserContact">)),
    ListUserNotifications: (...args) => callOperation("connect:ListUserNotifications", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListUserNotifications">)),
    ListUserProficiencies: (...args) => callOperation("connect:ListUserProficiencies", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListUserProficiencies">)),
    PutUserStatus: (...args) => callOperation("connect:PutUserStatus", ...(args as AmazonConnectFullApiOperationArgs<"connect:PutUserStatus">)),
    UpdateUserConfig: (...args) => callOperation("connect:UpdateUserConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserConfig">)),
    UpdateUserHierarchy: (...args) => callOperation("connect:UpdateUserHierarchy", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserHierarchy">)),
    UpdateUserIdentityInfo: (...args) => callOperation("connect:UpdateUserIdentityInfo", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserIdentityInfo">)),
    UpdateUserNotificationStatus: (...args) => callOperation("connect:UpdateUserNotificationStatus", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserNotificationStatus">)),
    UpdateUserPhoneConfig: (...args) => callOperation("connect:UpdateUserPhoneConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserPhoneConfig">)),
    UpdateUserProficiencies: (...args) => callOperation("connect:UpdateUserProficiencies", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserProficiencies">)),
    UpdateUserRoutingProfile: (...args) => callOperation("connect:UpdateUserRoutingProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserRoutingProfile">)),
    UpdateUserSecurityProfiles: (...args) => callOperation("connect:UpdateUserSecurityProfiles", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserSecurityProfiles">)),
  };
}
