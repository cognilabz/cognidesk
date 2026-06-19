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
export const AmazonConnectFullApiTrafficDistributionGroupOperationKeys = [
  "connect:AssociateTrafficDistributionGroupUser",
  "connect:CreateTrafficDistributionGroup",
  "connect:DeleteTrafficDistributionGroup",
  "connect:DescribeTrafficDistributionGroup",
  "connect:DisassociateTrafficDistributionGroupUser",
  "connect:ListTrafficDistributionGroupUsers"
] as const;
export type AmazonConnectFullApiTrafficDistributionGroupOperationKey = typeof AmazonConnectFullApiTrafficDistributionGroupOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiTrafficDistributionGroupOperationPathParamMap {
  "connect:AssociateTrafficDistributionGroupUser": { "TrafficDistributionGroupId": AmazonConnectFullApiPathParamValue };
  "connect:CreateTrafficDistributionGroup": {};
  "connect:DeleteTrafficDistributionGroup": { "TrafficDistributionGroupId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeTrafficDistributionGroup": { "TrafficDistributionGroupId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateTrafficDistributionGroupUser": { "TrafficDistributionGroupId": AmazonConnectFullApiPathParamValue };
  "connect:ListTrafficDistributionGroupUsers": { "TrafficDistributionGroupId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiTrafficDistributionGroupOperationRequestMap {
  "connect:AssociateTrafficDistributionGroupUser": AmazonConnectFullApiOperationInput<"connect:AssociateTrafficDistributionGroupUser">;
  "connect:CreateTrafficDistributionGroup": AmazonConnectFullApiOperationInput<"connect:CreateTrafficDistributionGroup">;
  "connect:DeleteTrafficDistributionGroup": AmazonConnectFullApiOperationInput<"connect:DeleteTrafficDistributionGroup">;
  "connect:DescribeTrafficDistributionGroup": AmazonConnectFullApiOperationInput<"connect:DescribeTrafficDistributionGroup">;
  "connect:DisassociateTrafficDistributionGroupUser": AmazonConnectFullApiOperationInput<"connect:DisassociateTrafficDistributionGroupUser">;
  "connect:ListTrafficDistributionGroupUsers": AmazonConnectFullApiOperationInput<"connect:ListTrafficDistributionGroupUsers">;
}

export interface AmazonConnectFullApiTrafficDistributionGroupGeneratedClient {
  AssociateTrafficDistributionGroupUser(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateTrafficDistributionGroupUser">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateTrafficDistributionGroupUser"]>;
  CreateTrafficDistributionGroup(...args: AmazonConnectFullApiOperationArgs<"connect:CreateTrafficDistributionGroup">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateTrafficDistributionGroup"]>;
  DeleteTrafficDistributionGroup(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteTrafficDistributionGroup">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteTrafficDistributionGroup"]>;
  DescribeTrafficDistributionGroup(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeTrafficDistributionGroup">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeTrafficDistributionGroup"]>;
  DisassociateTrafficDistributionGroupUser(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateTrafficDistributionGroupUser">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateTrafficDistributionGroupUser"]>;
  ListTrafficDistributionGroupUsers(...args: AmazonConnectFullApiOperationArgs<"connect:ListTrafficDistributionGroupUsers">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListTrafficDistributionGroupUsers"]>;
}

export const AmazonConnectFullApiTrafficDistributionGroupGeneratedFunctionNames = [
  "AssociateTrafficDistributionGroupUser",
  "CreateTrafficDistributionGroup",
  "DeleteTrafficDistributionGroup",
  "DescribeTrafficDistributionGroup",
  "DisassociateTrafficDistributionGroupUser",
  "ListTrafficDistributionGroupUsers"
] as const satisfies readonly (keyof AmazonConnectFullApiTrafficDistributionGroupGeneratedClient)[];

export function createAmazonConnectFullApiTrafficDistributionGroupGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiTrafficDistributionGroupGeneratedClient {
  return {
    AssociateTrafficDistributionGroupUser: (...args) => callOperation("connect:AssociateTrafficDistributionGroupUser", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateTrafficDistributionGroupUser">)),
    CreateTrafficDistributionGroup: (...args) => callOperation("connect:CreateTrafficDistributionGroup", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateTrafficDistributionGroup">)),
    DeleteTrafficDistributionGroup: (...args) => callOperation("connect:DeleteTrafficDistributionGroup", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteTrafficDistributionGroup">)),
    DescribeTrafficDistributionGroup: (...args) => callOperation("connect:DescribeTrafficDistributionGroup", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeTrafficDistributionGroup">)),
    DisassociateTrafficDistributionGroupUser: (...args) => callOperation("connect:DisassociateTrafficDistributionGroupUser", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateTrafficDistributionGroupUser">)),
    ListTrafficDistributionGroupUsers: (...args) => callOperation("connect:ListTrafficDistributionGroupUsers", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListTrafficDistributionGroupUsers">)),
  };
}
