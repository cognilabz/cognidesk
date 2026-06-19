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
export const AmazonConnectFullApiWorkspacesOperationKeys = [
  "connect:AssociateWorkspace",
  "connect:CreateWorkspace",
  "connect:CreateWorkspacePage",
  "connect:DeleteWorkspace",
  "connect:DeleteWorkspaceMedia",
  "connect:DeleteWorkspacePage",
  "connect:DescribeWorkspace",
  "connect:DisassociateWorkspace",
  "connect:ImportWorkspaceMedia",
  "connect:ListWorkspaceMedia",
  "connect:ListWorkspacePages",
  "connect:ListWorkspaces",
  "connect:UpdateWorkspaceMetadata",
  "connect:UpdateWorkspacePage",
  "connect:UpdateWorkspaceTheme",
  "connect:UpdateWorkspaceVisibility"
] as const;
export type AmazonConnectFullApiWorkspacesOperationKey = typeof AmazonConnectFullApiWorkspacesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiWorkspacesOperationPathParamMap {
  "connect:AssociateWorkspace": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateWorkspace": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateWorkspacePage": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteWorkspace": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteWorkspaceMedia": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteWorkspacePage": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue; "Page": AmazonConnectFullApiPathParamValue };
  "connect:DescribeWorkspace": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateWorkspace": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:ImportWorkspaceMedia": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:ListWorkspaceMedia": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:ListWorkspacePages": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:ListWorkspaces": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateWorkspaceMetadata": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateWorkspacePage": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue; "Page": AmazonConnectFullApiPathParamValue };
  "connect:UpdateWorkspaceTheme": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateWorkspaceVisibility": { "InstanceId": AmazonConnectFullApiPathParamValue; "WorkspaceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiWorkspacesOperationRequestMap {
  "connect:AssociateWorkspace": AmazonConnectFullApiOperationInput<"connect:AssociateWorkspace">;
  "connect:CreateWorkspace": AmazonConnectFullApiOperationInput<"connect:CreateWorkspace">;
  "connect:CreateWorkspacePage": AmazonConnectFullApiOperationInput<"connect:CreateWorkspacePage">;
  "connect:DeleteWorkspace": AmazonConnectFullApiOperationInput<"connect:DeleteWorkspace">;
  "connect:DeleteWorkspaceMedia": AmazonConnectFullApiOperationInput<"connect:DeleteWorkspaceMedia">;
  "connect:DeleteWorkspacePage": AmazonConnectFullApiOperationInput<"connect:DeleteWorkspacePage">;
  "connect:DescribeWorkspace": AmazonConnectFullApiOperationInput<"connect:DescribeWorkspace">;
  "connect:DisassociateWorkspace": AmazonConnectFullApiOperationInput<"connect:DisassociateWorkspace">;
  "connect:ImportWorkspaceMedia": AmazonConnectFullApiOperationInput<"connect:ImportWorkspaceMedia">;
  "connect:ListWorkspaceMedia": AmazonConnectFullApiOperationInput<"connect:ListWorkspaceMedia">;
  "connect:ListWorkspacePages": AmazonConnectFullApiOperationInput<"connect:ListWorkspacePages">;
  "connect:ListWorkspaces": AmazonConnectFullApiOperationInput<"connect:ListWorkspaces">;
  "connect:UpdateWorkspaceMetadata": AmazonConnectFullApiOperationInput<"connect:UpdateWorkspaceMetadata">;
  "connect:UpdateWorkspacePage": AmazonConnectFullApiOperationInput<"connect:UpdateWorkspacePage">;
  "connect:UpdateWorkspaceTheme": AmazonConnectFullApiOperationInput<"connect:UpdateWorkspaceTheme">;
  "connect:UpdateWorkspaceVisibility": AmazonConnectFullApiOperationInput<"connect:UpdateWorkspaceVisibility">;
}

export interface AmazonConnectFullApiWorkspacesGeneratedClient {
  AssociateWorkspace(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateWorkspace">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateWorkspace"]>;
  CreateWorkspace(...args: AmazonConnectFullApiOperationArgs<"connect:CreateWorkspace">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateWorkspace"]>;
  CreateWorkspacePage(...args: AmazonConnectFullApiOperationArgs<"connect:CreateWorkspacePage">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateWorkspacePage"]>;
  DeleteWorkspace(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteWorkspace">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteWorkspace"]>;
  DeleteWorkspaceMedia(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteWorkspaceMedia">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteWorkspaceMedia"]>;
  DeleteWorkspacePage(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteWorkspacePage">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteWorkspacePage"]>;
  DescribeWorkspace(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeWorkspace">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeWorkspace"]>;
  DisassociateWorkspace(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateWorkspace">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateWorkspace"]>;
  ImportWorkspaceMedia(...args: AmazonConnectFullApiOperationArgs<"connect:ImportWorkspaceMedia">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ImportWorkspaceMedia"]>;
  ListWorkspaceMedia(...args: AmazonConnectFullApiOperationArgs<"connect:ListWorkspaceMedia">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListWorkspaceMedia"]>;
  ListWorkspacePages(...args: AmazonConnectFullApiOperationArgs<"connect:ListWorkspacePages">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListWorkspacePages"]>;
  ListWorkspaces(...args: AmazonConnectFullApiOperationArgs<"connect:ListWorkspaces">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListWorkspaces"]>;
  UpdateWorkspaceMetadata(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateWorkspaceMetadata">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateWorkspaceMetadata"]>;
  UpdateWorkspacePage(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateWorkspacePage">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateWorkspacePage"]>;
  UpdateWorkspaceTheme(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateWorkspaceTheme">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateWorkspaceTheme"]>;
  UpdateWorkspaceVisibility(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateWorkspaceVisibility">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateWorkspaceVisibility"]>;
}

export const AmazonConnectFullApiWorkspacesGeneratedFunctionNames = [
  "AssociateWorkspace",
  "CreateWorkspace",
  "CreateWorkspacePage",
  "DeleteWorkspace",
  "DeleteWorkspaceMedia",
  "DeleteWorkspacePage",
  "DescribeWorkspace",
  "DisassociateWorkspace",
  "ImportWorkspaceMedia",
  "ListWorkspaceMedia",
  "ListWorkspacePages",
  "ListWorkspaces",
  "UpdateWorkspaceMetadata",
  "UpdateWorkspacePage",
  "UpdateWorkspaceTheme",
  "UpdateWorkspaceVisibility"
] as const satisfies readonly (keyof AmazonConnectFullApiWorkspacesGeneratedClient)[];

export function createAmazonConnectFullApiWorkspacesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiWorkspacesGeneratedClient {
  return {
    AssociateWorkspace: (...args) => callOperation("connect:AssociateWorkspace", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateWorkspace">)),
    CreateWorkspace: (...args) => callOperation("connect:CreateWorkspace", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateWorkspace">)),
    CreateWorkspacePage: (...args) => callOperation("connect:CreateWorkspacePage", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateWorkspacePage">)),
    DeleteWorkspace: (...args) => callOperation("connect:DeleteWorkspace", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteWorkspace">)),
    DeleteWorkspaceMedia: (...args) => callOperation("connect:DeleteWorkspaceMedia", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteWorkspaceMedia">)),
    DeleteWorkspacePage: (...args) => callOperation("connect:DeleteWorkspacePage", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteWorkspacePage">)),
    DescribeWorkspace: (...args) => callOperation("connect:DescribeWorkspace", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeWorkspace">)),
    DisassociateWorkspace: (...args) => callOperation("connect:DisassociateWorkspace", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateWorkspace">)),
    ImportWorkspaceMedia: (...args) => callOperation("connect:ImportWorkspaceMedia", ...(args as AmazonConnectFullApiOperationArgs<"connect:ImportWorkspaceMedia">)),
    ListWorkspaceMedia: (...args) => callOperation("connect:ListWorkspaceMedia", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListWorkspaceMedia">)),
    ListWorkspacePages: (...args) => callOperation("connect:ListWorkspacePages", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListWorkspacePages">)),
    ListWorkspaces: (...args) => callOperation("connect:ListWorkspaces", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListWorkspaces">)),
    UpdateWorkspaceMetadata: (...args) => callOperation("connect:UpdateWorkspaceMetadata", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateWorkspaceMetadata">)),
    UpdateWorkspacePage: (...args) => callOperation("connect:UpdateWorkspacePage", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateWorkspacePage">)),
    UpdateWorkspaceTheme: (...args) => callOperation("connect:UpdateWorkspaceTheme", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateWorkspaceTheme">)),
    UpdateWorkspaceVisibility: (...args) => callOperation("connect:UpdateWorkspaceVisibility", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateWorkspaceVisibility">)),
  };
}
