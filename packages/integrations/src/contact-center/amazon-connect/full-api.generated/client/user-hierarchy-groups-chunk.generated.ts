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
export const AmazonConnectFullApiUserHierarchyGroupsOperationKeys = [
  "connect:CreateUserHierarchyGroup",
  "connect:DeleteUserHierarchyGroup",
  "connect:DescribeUserHierarchyGroup",
  "connect:UpdateUserHierarchyGroupName"
] as const;
export type AmazonConnectFullApiUserHierarchyGroupsOperationKey = typeof AmazonConnectFullApiUserHierarchyGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiUserHierarchyGroupsOperationPathParamMap {
  "connect:CreateUserHierarchyGroup": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteUserHierarchyGroup": { "InstanceId": AmazonConnectFullApiPathParamValue; "HierarchyGroupId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeUserHierarchyGroup": { "InstanceId": AmazonConnectFullApiPathParamValue; "HierarchyGroupId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserHierarchyGroupName": { "InstanceId": AmazonConnectFullApiPathParamValue; "HierarchyGroupId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiUserHierarchyGroupsOperationRequestMap {
  "connect:CreateUserHierarchyGroup": AmazonConnectFullApiOperationInput<"connect:CreateUserHierarchyGroup">;
  "connect:DeleteUserHierarchyGroup": AmazonConnectFullApiOperationInput<"connect:DeleteUserHierarchyGroup">;
  "connect:DescribeUserHierarchyGroup": AmazonConnectFullApiOperationInput<"connect:DescribeUserHierarchyGroup">;
  "connect:UpdateUserHierarchyGroupName": AmazonConnectFullApiOperationInput<"connect:UpdateUserHierarchyGroupName">;
}

export interface AmazonConnectFullApiUserHierarchyGroupsGeneratedClient {
  CreateUserHierarchyGroup(...args: AmazonConnectFullApiOperationArgs<"connect:CreateUserHierarchyGroup">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateUserHierarchyGroup"]>;
  DeleteUserHierarchyGroup(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteUserHierarchyGroup">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteUserHierarchyGroup"]>;
  DescribeUserHierarchyGroup(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeUserHierarchyGroup">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeUserHierarchyGroup"]>;
  UpdateUserHierarchyGroupName(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserHierarchyGroupName">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserHierarchyGroupName"]>;
}

export const AmazonConnectFullApiUserHierarchyGroupsGeneratedFunctionNames = [
  "CreateUserHierarchyGroup",
  "DeleteUserHierarchyGroup",
  "DescribeUserHierarchyGroup",
  "UpdateUserHierarchyGroupName"
] as const satisfies readonly (keyof AmazonConnectFullApiUserHierarchyGroupsGeneratedClient)[];

export function createAmazonConnectFullApiUserHierarchyGroupsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiUserHierarchyGroupsGeneratedClient {
  return {
    CreateUserHierarchyGroup: (...args) => callOperation("connect:CreateUserHierarchyGroup", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateUserHierarchyGroup">)),
    DeleteUserHierarchyGroup: (...args) => callOperation("connect:DeleteUserHierarchyGroup", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteUserHierarchyGroup">)),
    DescribeUserHierarchyGroup: (...args) => callOperation("connect:DescribeUserHierarchyGroup", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeUserHierarchyGroup">)),
    UpdateUserHierarchyGroupName: (...args) => callOperation("connect:UpdateUserHierarchyGroupName", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserHierarchyGroupName">)),
  };
}
