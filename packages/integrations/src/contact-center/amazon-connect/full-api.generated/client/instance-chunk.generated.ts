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
export const AmazonConnectFullApiInstanceOperationKeys = [
  "connect:AssociateApprovedOrigin",
  "connect:AssociateBot",
  "connect:AssociateInstanceStorageConfig",
  "connect:AssociateLambdaFunction",
  "connect:AssociateLexBot",
  "connect:AssociateSecurityKey",
  "connect:CreateInstance",
  "connect:CreateIntegrationAssociation",
  "connect:CreateTaskTemplate",
  "connect:CreateUseCase",
  "connect:DeleteInstance",
  "connect:DeleteIntegrationAssociation",
  "connect:DeleteTaskTemplate",
  "connect:DeleteUseCase",
  "connect:DescribeInstance",
  "connect:DescribeInstanceAttribute",
  "connect:DescribeInstanceStorageConfig",
  "connect:DisassociateApprovedOrigin",
  "connect:DisassociateBot",
  "connect:DisassociateInstanceStorageConfig",
  "connect:DisassociateLambdaFunction",
  "connect:DisassociateLexBot",
  "connect:DisassociateSecurityKey",
  "connect:GetTaskTemplate",
  "connect:ListApprovedOrigins",
  "connect:ListBots",
  "connect:ListInstanceAttributes",
  "connect:ListInstanceStorageConfigs",
  "connect:ListInstances",
  "connect:ListIntegrationAssociations",
  "connect:ListLambdaFunctions",
  "connect:ListLexBots",
  "connect:ListSecurityKeys",
  "connect:ListTaskTemplates",
  "connect:ListUseCases",
  "connect:ReplicateInstance",
  "connect:SendOutboundEmail",
  "connect:UpdateInstanceAttribute",
  "connect:UpdateInstanceStorageConfig",
  "connect:UpdateTaskTemplate"
] as const;
export type AmazonConnectFullApiInstanceOperationKey = typeof AmazonConnectFullApiInstanceOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiInstanceOperationPathParamMap {
  "connect:AssociateApprovedOrigin": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:AssociateBot": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:AssociateInstanceStorageConfig": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:AssociateLambdaFunction": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:AssociateLexBot": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:AssociateSecurityKey": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateInstance": {};
  "connect:CreateIntegrationAssociation": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateTaskTemplate": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateUseCase": { "InstanceId": AmazonConnectFullApiPathParamValue; "IntegrationAssociationId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteInstance": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteIntegrationAssociation": { "InstanceId": AmazonConnectFullApiPathParamValue; "IntegrationAssociationId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteTaskTemplate": { "InstanceId": AmazonConnectFullApiPathParamValue; "TaskTemplateId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteUseCase": { "InstanceId": AmazonConnectFullApiPathParamValue; "IntegrationAssociationId": AmazonConnectFullApiPathParamValue; "UseCaseId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeInstance": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeInstanceAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue; "AttributeType": AmazonConnectFullApiPathParamValue };
  "connect:DescribeInstanceStorageConfig": { "InstanceId": AmazonConnectFullApiPathParamValue; "AssociationId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateApprovedOrigin": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateBot": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateInstanceStorageConfig": { "InstanceId": AmazonConnectFullApiPathParamValue; "AssociationId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateLambdaFunction": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateLexBot": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateSecurityKey": { "InstanceId": AmazonConnectFullApiPathParamValue; "AssociationId": AmazonConnectFullApiPathParamValue };
  "connect:GetTaskTemplate": { "InstanceId": AmazonConnectFullApiPathParamValue; "TaskTemplateId": AmazonConnectFullApiPathParamValue };
  "connect:ListApprovedOrigins": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListBots": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListInstanceAttributes": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListInstanceStorageConfigs": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListInstances": {};
  "connect:ListIntegrationAssociations": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListLambdaFunctions": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListLexBots": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListSecurityKeys": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListTaskTemplates": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListUseCases": { "InstanceId": AmazonConnectFullApiPathParamValue; "IntegrationAssociationId": AmazonConnectFullApiPathParamValue };
  "connect:ReplicateInstance": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:SendOutboundEmail": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateInstanceAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue; "AttributeType": AmazonConnectFullApiPathParamValue };
  "connect:UpdateInstanceStorageConfig": { "InstanceId": AmazonConnectFullApiPathParamValue; "AssociationId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateTaskTemplate": { "InstanceId": AmazonConnectFullApiPathParamValue; "TaskTemplateId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiInstanceOperationRequestMap {
  "connect:AssociateApprovedOrigin": AmazonConnectFullApiOperationInput<"connect:AssociateApprovedOrigin">;
  "connect:AssociateBot": AmazonConnectFullApiOperationInput<"connect:AssociateBot">;
  "connect:AssociateInstanceStorageConfig": AmazonConnectFullApiOperationInput<"connect:AssociateInstanceStorageConfig">;
  "connect:AssociateLambdaFunction": AmazonConnectFullApiOperationInput<"connect:AssociateLambdaFunction">;
  "connect:AssociateLexBot": AmazonConnectFullApiOperationInput<"connect:AssociateLexBot">;
  "connect:AssociateSecurityKey": AmazonConnectFullApiOperationInput<"connect:AssociateSecurityKey">;
  "connect:CreateInstance": AmazonConnectFullApiOperationInput<"connect:CreateInstance">;
  "connect:CreateIntegrationAssociation": AmazonConnectFullApiOperationInput<"connect:CreateIntegrationAssociation">;
  "connect:CreateTaskTemplate": AmazonConnectFullApiOperationInput<"connect:CreateTaskTemplate">;
  "connect:CreateUseCase": AmazonConnectFullApiOperationInput<"connect:CreateUseCase">;
  "connect:DeleteInstance": AmazonConnectFullApiOperationInput<"connect:DeleteInstance">;
  "connect:DeleteIntegrationAssociation": AmazonConnectFullApiOperationInput<"connect:DeleteIntegrationAssociation">;
  "connect:DeleteTaskTemplate": AmazonConnectFullApiOperationInput<"connect:DeleteTaskTemplate">;
  "connect:DeleteUseCase": AmazonConnectFullApiOperationInput<"connect:DeleteUseCase">;
  "connect:DescribeInstance": AmazonConnectFullApiOperationInput<"connect:DescribeInstance">;
  "connect:DescribeInstanceAttribute": AmazonConnectFullApiOperationInput<"connect:DescribeInstanceAttribute">;
  "connect:DescribeInstanceStorageConfig": AmazonConnectFullApiOperationInput<"connect:DescribeInstanceStorageConfig">;
  "connect:DisassociateApprovedOrigin": AmazonConnectFullApiOperationInput<"connect:DisassociateApprovedOrigin">;
  "connect:DisassociateBot": AmazonConnectFullApiOperationInput<"connect:DisassociateBot">;
  "connect:DisassociateInstanceStorageConfig": AmazonConnectFullApiOperationInput<"connect:DisassociateInstanceStorageConfig">;
  "connect:DisassociateLambdaFunction": AmazonConnectFullApiOperationInput<"connect:DisassociateLambdaFunction">;
  "connect:DisassociateLexBot": AmazonConnectFullApiOperationInput<"connect:DisassociateLexBot">;
  "connect:DisassociateSecurityKey": AmazonConnectFullApiOperationInput<"connect:DisassociateSecurityKey">;
  "connect:GetTaskTemplate": AmazonConnectFullApiOperationInput<"connect:GetTaskTemplate">;
  "connect:ListApprovedOrigins": AmazonConnectFullApiOperationInput<"connect:ListApprovedOrigins">;
  "connect:ListBots": AmazonConnectFullApiOperationInput<"connect:ListBots">;
  "connect:ListInstanceAttributes": AmazonConnectFullApiOperationInput<"connect:ListInstanceAttributes">;
  "connect:ListInstanceStorageConfigs": AmazonConnectFullApiOperationInput<"connect:ListInstanceStorageConfigs">;
  "connect:ListInstances": AmazonConnectFullApiOperationInput<"connect:ListInstances">;
  "connect:ListIntegrationAssociations": AmazonConnectFullApiOperationInput<"connect:ListIntegrationAssociations">;
  "connect:ListLambdaFunctions": AmazonConnectFullApiOperationInput<"connect:ListLambdaFunctions">;
  "connect:ListLexBots": AmazonConnectFullApiOperationInput<"connect:ListLexBots">;
  "connect:ListSecurityKeys": AmazonConnectFullApiOperationInput<"connect:ListSecurityKeys">;
  "connect:ListTaskTemplates": AmazonConnectFullApiOperationInput<"connect:ListTaskTemplates">;
  "connect:ListUseCases": AmazonConnectFullApiOperationInput<"connect:ListUseCases">;
  "connect:ReplicateInstance": AmazonConnectFullApiOperationInput<"connect:ReplicateInstance">;
  "connect:SendOutboundEmail": AmazonConnectFullApiOperationInput<"connect:SendOutboundEmail">;
  "connect:UpdateInstanceAttribute": AmazonConnectFullApiOperationInput<"connect:UpdateInstanceAttribute">;
  "connect:UpdateInstanceStorageConfig": AmazonConnectFullApiOperationInput<"connect:UpdateInstanceStorageConfig">;
  "connect:UpdateTaskTemplate": AmazonConnectFullApiOperationInput<"connect:UpdateTaskTemplate">;
}

export interface AmazonConnectFullApiInstanceGeneratedClient {
  AssociateApprovedOrigin(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateApprovedOrigin">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateApprovedOrigin"]>;
  AssociateBot(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateBot">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateBot"]>;
  AssociateInstanceStorageConfig(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateInstanceStorageConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateInstanceStorageConfig"]>;
  AssociateLambdaFunction(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateLambdaFunction">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateLambdaFunction"]>;
  AssociateLexBot(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateLexBot">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateLexBot"]>;
  AssociateSecurityKey(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateSecurityKey">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateSecurityKey"]>;
  CreateInstance(...args: AmazonConnectFullApiOperationArgs<"connect:CreateInstance">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateInstance"]>;
  CreateIntegrationAssociation(...args: AmazonConnectFullApiOperationArgs<"connect:CreateIntegrationAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateIntegrationAssociation"]>;
  CreateTaskTemplate(...args: AmazonConnectFullApiOperationArgs<"connect:CreateTaskTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateTaskTemplate"]>;
  CreateUseCase(...args: AmazonConnectFullApiOperationArgs<"connect:CreateUseCase">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateUseCase"]>;
  DeleteInstance(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteInstance">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteInstance"]>;
  DeleteIntegrationAssociation(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteIntegrationAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteIntegrationAssociation"]>;
  DeleteTaskTemplate(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteTaskTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteTaskTemplate"]>;
  DeleteUseCase(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteUseCase">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteUseCase"]>;
  DescribeInstance(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeInstance">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeInstance"]>;
  DescribeInstanceAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeInstanceAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeInstanceAttribute"]>;
  DescribeInstanceStorageConfig(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeInstanceStorageConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeInstanceStorageConfig"]>;
  DisassociateApprovedOrigin(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateApprovedOrigin">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateApprovedOrigin"]>;
  DisassociateBot(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateBot">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateBot"]>;
  DisassociateInstanceStorageConfig(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateInstanceStorageConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateInstanceStorageConfig"]>;
  DisassociateLambdaFunction(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateLambdaFunction">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateLambdaFunction"]>;
  DisassociateLexBot(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateLexBot">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateLexBot"]>;
  DisassociateSecurityKey(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateSecurityKey">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateSecurityKey"]>;
  GetTaskTemplate(...args: AmazonConnectFullApiOperationArgs<"connect:GetTaskTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetTaskTemplate"]>;
  ListApprovedOrigins(...args: AmazonConnectFullApiOperationArgs<"connect:ListApprovedOrigins">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListApprovedOrigins"]>;
  ListBots(...args: AmazonConnectFullApiOperationArgs<"connect:ListBots">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListBots"]>;
  ListInstanceAttributes(...args: AmazonConnectFullApiOperationArgs<"connect:ListInstanceAttributes">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListInstanceAttributes"]>;
  ListInstanceStorageConfigs(...args: AmazonConnectFullApiOperationArgs<"connect:ListInstanceStorageConfigs">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListInstanceStorageConfigs"]>;
  ListInstances(...args: AmazonConnectFullApiOperationArgs<"connect:ListInstances">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListInstances"]>;
  ListIntegrationAssociations(...args: AmazonConnectFullApiOperationArgs<"connect:ListIntegrationAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListIntegrationAssociations"]>;
  ListLambdaFunctions(...args: AmazonConnectFullApiOperationArgs<"connect:ListLambdaFunctions">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListLambdaFunctions"]>;
  ListLexBots(...args: AmazonConnectFullApiOperationArgs<"connect:ListLexBots">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListLexBots"]>;
  ListSecurityKeys(...args: AmazonConnectFullApiOperationArgs<"connect:ListSecurityKeys">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListSecurityKeys"]>;
  ListTaskTemplates(...args: AmazonConnectFullApiOperationArgs<"connect:ListTaskTemplates">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListTaskTemplates"]>;
  ListUseCases(...args: AmazonConnectFullApiOperationArgs<"connect:ListUseCases">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListUseCases"]>;
  ReplicateInstance(...args: AmazonConnectFullApiOperationArgs<"connect:ReplicateInstance">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ReplicateInstance"]>;
  SendOutboundEmail(...args: AmazonConnectFullApiOperationArgs<"connect:SendOutboundEmail">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SendOutboundEmail"]>;
  UpdateInstanceAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateInstanceAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateInstanceAttribute"]>;
  UpdateInstanceStorageConfig(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateInstanceStorageConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateInstanceStorageConfig"]>;
  UpdateTaskTemplate(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateTaskTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateTaskTemplate"]>;
}

export const AmazonConnectFullApiInstanceGeneratedFunctionNames = [
  "AssociateApprovedOrigin",
  "AssociateBot",
  "AssociateInstanceStorageConfig",
  "AssociateLambdaFunction",
  "AssociateLexBot",
  "AssociateSecurityKey",
  "CreateInstance",
  "CreateIntegrationAssociation",
  "CreateTaskTemplate",
  "CreateUseCase",
  "DeleteInstance",
  "DeleteIntegrationAssociation",
  "DeleteTaskTemplate",
  "DeleteUseCase",
  "DescribeInstance",
  "DescribeInstanceAttribute",
  "DescribeInstanceStorageConfig",
  "DisassociateApprovedOrigin",
  "DisassociateBot",
  "DisassociateInstanceStorageConfig",
  "DisassociateLambdaFunction",
  "DisassociateLexBot",
  "DisassociateSecurityKey",
  "GetTaskTemplate",
  "ListApprovedOrigins",
  "ListBots",
  "ListInstanceAttributes",
  "ListInstanceStorageConfigs",
  "ListInstances",
  "ListIntegrationAssociations",
  "ListLambdaFunctions",
  "ListLexBots",
  "ListSecurityKeys",
  "ListTaskTemplates",
  "ListUseCases",
  "ReplicateInstance",
  "SendOutboundEmail",
  "UpdateInstanceAttribute",
  "UpdateInstanceStorageConfig",
  "UpdateTaskTemplate"
] as const satisfies readonly (keyof AmazonConnectFullApiInstanceGeneratedClient)[];

export function createAmazonConnectFullApiInstanceGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiInstanceGeneratedClient {
  return {
    AssociateApprovedOrigin: (...args) => callOperation("connect:AssociateApprovedOrigin", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateApprovedOrigin">)),
    AssociateBot: (...args) => callOperation("connect:AssociateBot", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateBot">)),
    AssociateInstanceStorageConfig: (...args) => callOperation("connect:AssociateInstanceStorageConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateInstanceStorageConfig">)),
    AssociateLambdaFunction: (...args) => callOperation("connect:AssociateLambdaFunction", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateLambdaFunction">)),
    AssociateLexBot: (...args) => callOperation("connect:AssociateLexBot", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateLexBot">)),
    AssociateSecurityKey: (...args) => callOperation("connect:AssociateSecurityKey", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateSecurityKey">)),
    CreateInstance: (...args) => callOperation("connect:CreateInstance", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateInstance">)),
    CreateIntegrationAssociation: (...args) => callOperation("connect:CreateIntegrationAssociation", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateIntegrationAssociation">)),
    CreateTaskTemplate: (...args) => callOperation("connect:CreateTaskTemplate", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateTaskTemplate">)),
    CreateUseCase: (...args) => callOperation("connect:CreateUseCase", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateUseCase">)),
    DeleteInstance: (...args) => callOperation("connect:DeleteInstance", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteInstance">)),
    DeleteIntegrationAssociation: (...args) => callOperation("connect:DeleteIntegrationAssociation", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteIntegrationAssociation">)),
    DeleteTaskTemplate: (...args) => callOperation("connect:DeleteTaskTemplate", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteTaskTemplate">)),
    DeleteUseCase: (...args) => callOperation("connect:DeleteUseCase", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteUseCase">)),
    DescribeInstance: (...args) => callOperation("connect:DescribeInstance", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeInstance">)),
    DescribeInstanceAttribute: (...args) => callOperation("connect:DescribeInstanceAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeInstanceAttribute">)),
    DescribeInstanceStorageConfig: (...args) => callOperation("connect:DescribeInstanceStorageConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeInstanceStorageConfig">)),
    DisassociateApprovedOrigin: (...args) => callOperation("connect:DisassociateApprovedOrigin", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateApprovedOrigin">)),
    DisassociateBot: (...args) => callOperation("connect:DisassociateBot", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateBot">)),
    DisassociateInstanceStorageConfig: (...args) => callOperation("connect:DisassociateInstanceStorageConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateInstanceStorageConfig">)),
    DisassociateLambdaFunction: (...args) => callOperation("connect:DisassociateLambdaFunction", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateLambdaFunction">)),
    DisassociateLexBot: (...args) => callOperation("connect:DisassociateLexBot", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateLexBot">)),
    DisassociateSecurityKey: (...args) => callOperation("connect:DisassociateSecurityKey", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateSecurityKey">)),
    GetTaskTemplate: (...args) => callOperation("connect:GetTaskTemplate", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetTaskTemplate">)),
    ListApprovedOrigins: (...args) => callOperation("connect:ListApprovedOrigins", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListApprovedOrigins">)),
    ListBots: (...args) => callOperation("connect:ListBots", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListBots">)),
    ListInstanceAttributes: (...args) => callOperation("connect:ListInstanceAttributes", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListInstanceAttributes">)),
    ListInstanceStorageConfigs: (...args) => callOperation("connect:ListInstanceStorageConfigs", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListInstanceStorageConfigs">)),
    ListInstances: (...args) => callOperation("connect:ListInstances", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListInstances">)),
    ListIntegrationAssociations: (...args) => callOperation("connect:ListIntegrationAssociations", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListIntegrationAssociations">)),
    ListLambdaFunctions: (...args) => callOperation("connect:ListLambdaFunctions", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListLambdaFunctions">)),
    ListLexBots: (...args) => callOperation("connect:ListLexBots", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListLexBots">)),
    ListSecurityKeys: (...args) => callOperation("connect:ListSecurityKeys", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListSecurityKeys">)),
    ListTaskTemplates: (...args) => callOperation("connect:ListTaskTemplates", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListTaskTemplates">)),
    ListUseCases: (...args) => callOperation("connect:ListUseCases", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListUseCases">)),
    ReplicateInstance: (...args) => callOperation("connect:ReplicateInstance", ...(args as AmazonConnectFullApiOperationArgs<"connect:ReplicateInstance">)),
    SendOutboundEmail: (...args) => callOperation("connect:SendOutboundEmail", ...(args as AmazonConnectFullApiOperationArgs<"connect:SendOutboundEmail">)),
    UpdateInstanceAttribute: (...args) => callOperation("connect:UpdateInstanceAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateInstanceAttribute">)),
    UpdateInstanceStorageConfig: (...args) => callOperation("connect:UpdateInstanceStorageConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateInstanceStorageConfig">)),
    UpdateTaskTemplate: (...args) => callOperation("connect:UpdateTaskTemplate", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateTaskTemplate">)),
  };
}
