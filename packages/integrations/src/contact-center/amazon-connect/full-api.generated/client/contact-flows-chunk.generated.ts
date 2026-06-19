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
export const AmazonConnectFullApiContactFlowsOperationKeys = [
  "connect:CreateContactFlow",
  "connect:CreateContactFlowVersion",
  "connect:DeleteContactFlow",
  "connect:DeleteContactFlowVersion",
  "connect:DescribeContactFlow",
  "connect:ListContactFlowVersions",
  "connect:UpdateContactFlowContent",
  "connect:UpdateContactFlowMetadata",
  "connect:UpdateContactFlowName"
] as const;
export type AmazonConnectFullApiContactFlowsOperationKey = typeof AmazonConnectFullApiContactFlowsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiContactFlowsOperationPathParamMap {
  "connect:CreateContactFlow": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateContactFlowVersion": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteContactFlow": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteContactFlowVersion": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowId": AmazonConnectFullApiPathParamValue; "ContactFlowVersion": AmazonConnectFullApiPathParamValue };
  "connect:DescribeContactFlow": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowId": AmazonConnectFullApiPathParamValue };
  "connect:ListContactFlowVersions": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContactFlowContent": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContactFlowMetadata": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContactFlowName": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiContactFlowsOperationRequestMap {
  "connect:CreateContactFlow": AmazonConnectFullApiOperationInput<"connect:CreateContactFlow">;
  "connect:CreateContactFlowVersion": AmazonConnectFullApiOperationInput<"connect:CreateContactFlowVersion">;
  "connect:DeleteContactFlow": AmazonConnectFullApiOperationInput<"connect:DeleteContactFlow">;
  "connect:DeleteContactFlowVersion": AmazonConnectFullApiOperationInput<"connect:DeleteContactFlowVersion">;
  "connect:DescribeContactFlow": AmazonConnectFullApiOperationInput<"connect:DescribeContactFlow">;
  "connect:ListContactFlowVersions": AmazonConnectFullApiOperationInput<"connect:ListContactFlowVersions">;
  "connect:UpdateContactFlowContent": AmazonConnectFullApiOperationInput<"connect:UpdateContactFlowContent">;
  "connect:UpdateContactFlowMetadata": AmazonConnectFullApiOperationInput<"connect:UpdateContactFlowMetadata">;
  "connect:UpdateContactFlowName": AmazonConnectFullApiOperationInput<"connect:UpdateContactFlowName">;
}

export interface AmazonConnectFullApiContactFlowsGeneratedClient {
  CreateContactFlow(...args: AmazonConnectFullApiOperationArgs<"connect:CreateContactFlow">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateContactFlow"]>;
  CreateContactFlowVersion(...args: AmazonConnectFullApiOperationArgs<"connect:CreateContactFlowVersion">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateContactFlowVersion"]>;
  DeleteContactFlow(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlow">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteContactFlow"]>;
  DeleteContactFlowVersion(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlowVersion">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteContactFlowVersion"]>;
  DescribeContactFlow(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeContactFlow">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeContactFlow"]>;
  ListContactFlowVersions(...args: AmazonConnectFullApiOperationArgs<"connect:ListContactFlowVersions">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListContactFlowVersions"]>;
  UpdateContactFlowContent(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowContent">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactFlowContent"]>;
  UpdateContactFlowMetadata(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowMetadata">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactFlowMetadata"]>;
  UpdateContactFlowName(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowName">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactFlowName"]>;
}

export const AmazonConnectFullApiContactFlowsGeneratedFunctionNames = [
  "CreateContactFlow",
  "CreateContactFlowVersion",
  "DeleteContactFlow",
  "DeleteContactFlowVersion",
  "DescribeContactFlow",
  "ListContactFlowVersions",
  "UpdateContactFlowContent",
  "UpdateContactFlowMetadata",
  "UpdateContactFlowName"
] as const satisfies readonly (keyof AmazonConnectFullApiContactFlowsGeneratedClient)[];

export function createAmazonConnectFullApiContactFlowsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiContactFlowsGeneratedClient {
  return {
    CreateContactFlow: (...args) => callOperation("connect:CreateContactFlow", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateContactFlow">)),
    CreateContactFlowVersion: (...args) => callOperation("connect:CreateContactFlowVersion", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateContactFlowVersion">)),
    DeleteContactFlow: (...args) => callOperation("connect:DeleteContactFlow", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlow">)),
    DeleteContactFlowVersion: (...args) => callOperation("connect:DeleteContactFlowVersion", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlowVersion">)),
    DescribeContactFlow: (...args) => callOperation("connect:DescribeContactFlow", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeContactFlow">)),
    ListContactFlowVersions: (...args) => callOperation("connect:ListContactFlowVersions", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListContactFlowVersions">)),
    UpdateContactFlowContent: (...args) => callOperation("connect:UpdateContactFlowContent", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowContent">)),
    UpdateContactFlowMetadata: (...args) => callOperation("connect:UpdateContactFlowMetadata", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowMetadata">)),
    UpdateContactFlowName: (...args) => callOperation("connect:UpdateContactFlowName", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowName">)),
  };
}
