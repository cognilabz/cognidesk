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
export const AmazonConnectFullApiContactFlowModulesOperationKeys = [
  "connect:CreateContactFlowModule",
  "connect:CreateContactFlowModuleAlias",
  "connect:CreateContactFlowModuleVersion",
  "connect:DeleteContactFlowModule",
  "connect:DeleteContactFlowModuleAlias",
  "connect:DeleteContactFlowModuleVersion",
  "connect:DescribeContactFlowModule",
  "connect:DescribeContactFlowModuleAlias",
  "connect:ListContactFlowModuleAliases",
  "connect:ListContactFlowModuleVersions",
  "connect:UpdateContactFlowModuleAlias",
  "connect:UpdateContactFlowModuleContent",
  "connect:UpdateContactFlowModuleMetadata"
] as const;
export type AmazonConnectFullApiContactFlowModulesOperationKey = typeof AmazonConnectFullApiContactFlowModulesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiContactFlowModulesOperationPathParamMap {
  "connect:CreateContactFlowModule": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateContactFlowModuleAlias": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue };
  "connect:CreateContactFlowModuleVersion": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteContactFlowModule": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteContactFlowModuleAlias": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue; "AliasId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteContactFlowModuleVersion": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleVersion": AmazonConnectFullApiPathParamValue };
  "connect:DescribeContactFlowModule": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeContactFlowModuleAlias": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue; "AliasId": AmazonConnectFullApiPathParamValue };
  "connect:ListContactFlowModuleAliases": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue };
  "connect:ListContactFlowModuleVersions": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContactFlowModuleAlias": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue; "AliasId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContactFlowModuleContent": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContactFlowModuleMetadata": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactFlowModuleId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiContactFlowModulesOperationRequestMap {
  "connect:CreateContactFlowModule": AmazonConnectFullApiOperationInput<"connect:CreateContactFlowModule">;
  "connect:CreateContactFlowModuleAlias": AmazonConnectFullApiOperationInput<"connect:CreateContactFlowModuleAlias">;
  "connect:CreateContactFlowModuleVersion": AmazonConnectFullApiOperationInput<"connect:CreateContactFlowModuleVersion">;
  "connect:DeleteContactFlowModule": AmazonConnectFullApiOperationInput<"connect:DeleteContactFlowModule">;
  "connect:DeleteContactFlowModuleAlias": AmazonConnectFullApiOperationInput<"connect:DeleteContactFlowModuleAlias">;
  "connect:DeleteContactFlowModuleVersion": AmazonConnectFullApiOperationInput<"connect:DeleteContactFlowModuleVersion">;
  "connect:DescribeContactFlowModule": AmazonConnectFullApiOperationInput<"connect:DescribeContactFlowModule">;
  "connect:DescribeContactFlowModuleAlias": AmazonConnectFullApiOperationInput<"connect:DescribeContactFlowModuleAlias">;
  "connect:ListContactFlowModuleAliases": AmazonConnectFullApiOperationInput<"connect:ListContactFlowModuleAliases">;
  "connect:ListContactFlowModuleVersions": AmazonConnectFullApiOperationInput<"connect:ListContactFlowModuleVersions">;
  "connect:UpdateContactFlowModuleAlias": AmazonConnectFullApiOperationInput<"connect:UpdateContactFlowModuleAlias">;
  "connect:UpdateContactFlowModuleContent": AmazonConnectFullApiOperationInput<"connect:UpdateContactFlowModuleContent">;
  "connect:UpdateContactFlowModuleMetadata": AmazonConnectFullApiOperationInput<"connect:UpdateContactFlowModuleMetadata">;
}

export interface AmazonConnectFullApiContactFlowModulesGeneratedClient {
  CreateContactFlowModule(...args: AmazonConnectFullApiOperationArgs<"connect:CreateContactFlowModule">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateContactFlowModule"]>;
  CreateContactFlowModuleAlias(...args: AmazonConnectFullApiOperationArgs<"connect:CreateContactFlowModuleAlias">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateContactFlowModuleAlias"]>;
  CreateContactFlowModuleVersion(...args: AmazonConnectFullApiOperationArgs<"connect:CreateContactFlowModuleVersion">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateContactFlowModuleVersion"]>;
  DeleteContactFlowModule(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlowModule">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteContactFlowModule"]>;
  DeleteContactFlowModuleAlias(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlowModuleAlias">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteContactFlowModuleAlias"]>;
  DeleteContactFlowModuleVersion(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlowModuleVersion">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteContactFlowModuleVersion"]>;
  DescribeContactFlowModule(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeContactFlowModule">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeContactFlowModule"]>;
  DescribeContactFlowModuleAlias(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeContactFlowModuleAlias">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeContactFlowModuleAlias"]>;
  ListContactFlowModuleAliases(...args: AmazonConnectFullApiOperationArgs<"connect:ListContactFlowModuleAliases">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListContactFlowModuleAliases"]>;
  ListContactFlowModuleVersions(...args: AmazonConnectFullApiOperationArgs<"connect:ListContactFlowModuleVersions">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListContactFlowModuleVersions"]>;
  UpdateContactFlowModuleAlias(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowModuleAlias">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactFlowModuleAlias"]>;
  UpdateContactFlowModuleContent(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowModuleContent">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactFlowModuleContent"]>;
  UpdateContactFlowModuleMetadata(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowModuleMetadata">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactFlowModuleMetadata"]>;
}

export const AmazonConnectFullApiContactFlowModulesGeneratedFunctionNames = [
  "CreateContactFlowModule",
  "CreateContactFlowModuleAlias",
  "CreateContactFlowModuleVersion",
  "DeleteContactFlowModule",
  "DeleteContactFlowModuleAlias",
  "DeleteContactFlowModuleVersion",
  "DescribeContactFlowModule",
  "DescribeContactFlowModuleAlias",
  "ListContactFlowModuleAliases",
  "ListContactFlowModuleVersions",
  "UpdateContactFlowModuleAlias",
  "UpdateContactFlowModuleContent",
  "UpdateContactFlowModuleMetadata"
] as const satisfies readonly (keyof AmazonConnectFullApiContactFlowModulesGeneratedClient)[];

export function createAmazonConnectFullApiContactFlowModulesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiContactFlowModulesGeneratedClient {
  return {
    CreateContactFlowModule: (...args) => callOperation("connect:CreateContactFlowModule", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateContactFlowModule">)),
    CreateContactFlowModuleAlias: (...args) => callOperation("connect:CreateContactFlowModuleAlias", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateContactFlowModuleAlias">)),
    CreateContactFlowModuleVersion: (...args) => callOperation("connect:CreateContactFlowModuleVersion", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateContactFlowModuleVersion">)),
    DeleteContactFlowModule: (...args) => callOperation("connect:DeleteContactFlowModule", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlowModule">)),
    DeleteContactFlowModuleAlias: (...args) => callOperation("connect:DeleteContactFlowModuleAlias", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlowModuleAlias">)),
    DeleteContactFlowModuleVersion: (...args) => callOperation("connect:DeleteContactFlowModuleVersion", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteContactFlowModuleVersion">)),
    DescribeContactFlowModule: (...args) => callOperation("connect:DescribeContactFlowModule", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeContactFlowModule">)),
    DescribeContactFlowModuleAlias: (...args) => callOperation("connect:DescribeContactFlowModuleAlias", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeContactFlowModuleAlias">)),
    ListContactFlowModuleAliases: (...args) => callOperation("connect:ListContactFlowModuleAliases", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListContactFlowModuleAliases">)),
    ListContactFlowModuleVersions: (...args) => callOperation("connect:ListContactFlowModuleVersions", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListContactFlowModuleVersions">)),
    UpdateContactFlowModuleAlias: (...args) => callOperation("connect:UpdateContactFlowModuleAlias", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowModuleAlias">)),
    UpdateContactFlowModuleContent: (...args) => callOperation("connect:UpdateContactFlowModuleContent", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowModuleContent">)),
    UpdateContactFlowModuleMetadata: (...args) => callOperation("connect:UpdateContactFlowModuleMetadata", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactFlowModuleMetadata">)),
  };
}
