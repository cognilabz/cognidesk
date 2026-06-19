// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiContentManagementOperationKeys = [
  "deleteContentmanagementDocument",
  "deleteContentmanagementShare",
  "deleteContentmanagementStatusStatusId",
  "deleteContentmanagementWorkspace",
  "deleteContentmanagementWorkspaceMember",
  "deleteContentmanagementWorkspaceTagvalue",
  "getContentmanagementDocument",
  "getContentmanagementDocumentContent",
  "getContentmanagementDocuments",
  "getContentmanagementQuery",
  "getContentmanagementSecurityprofile",
  "getContentmanagementSecurityprofiles",
  "getContentmanagementShare",
  "getContentmanagementSharedSharedId",
  "getContentmanagementShares",
  "getContentmanagementStatus",
  "getContentmanagementStatusStatusId",
  "getContentmanagementUsage",
  "getContentmanagementWorkspace",
  "getContentmanagementWorkspaceDocuments",
  "getContentmanagementWorkspaceMember",
  "getContentmanagementWorkspaceMembers",
  "getContentmanagementWorkspaces",
  "getContentmanagementWorkspaceTagvalue",
  "getContentmanagementWorkspaceTagvalues",
  "postContentmanagementDocument",
  "postContentmanagementDocumentContent",
  "postContentmanagementDocuments",
  "postContentmanagementQuery",
  "postContentmanagementShares",
  "postContentmanagementWorkspaces",
  "postContentmanagementWorkspaceTagvalues",
  "postContentmanagementWorkspaceTagvaluesQuery",
  "putContentmanagementWorkspace",
  "putContentmanagementWorkspaceMember",
  "putContentmanagementWorkspaceTagvalue"
] as const;
export type GenesysCloudFullApiContentManagementOperationKey = typeof GenesysCloudFullApiContentManagementOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiContentManagementOperationPathParamMap {
  "deleteContentmanagementDocument": { "documentId": GenesysCloudFullApiPathParamValue };
  "deleteContentmanagementShare": { "shareId": GenesysCloudFullApiPathParamValue };
  "deleteContentmanagementStatusStatusId": { "statusId": GenesysCloudFullApiPathParamValue };
  "deleteContentmanagementWorkspace": { "workspaceId": GenesysCloudFullApiPathParamValue };
  "deleteContentmanagementWorkspaceMember": { "workspaceId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "deleteContentmanagementWorkspaceTagvalue": { "workspaceId": GenesysCloudFullApiPathParamValue; "tagId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementDocument": { "documentId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementDocumentContent": { "documentId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementDocuments": {};
  "getContentmanagementQuery": {};
  "getContentmanagementSecurityprofile": { "securityProfileId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementSecurityprofiles": {};
  "getContentmanagementShare": { "shareId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementSharedSharedId": { "sharedId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementShares": {};
  "getContentmanagementStatus": {};
  "getContentmanagementStatusStatusId": { "statusId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementUsage": {};
  "getContentmanagementWorkspace": { "workspaceId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementWorkspaceDocuments": { "workspaceId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementWorkspaceMember": { "workspaceId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementWorkspaceMembers": { "workspaceId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementWorkspaces": {};
  "getContentmanagementWorkspaceTagvalue": { "workspaceId": GenesysCloudFullApiPathParamValue; "tagId": GenesysCloudFullApiPathParamValue };
  "getContentmanagementWorkspaceTagvalues": { "workspaceId": GenesysCloudFullApiPathParamValue };
  "postContentmanagementDocument": { "documentId": GenesysCloudFullApiPathParamValue };
  "postContentmanagementDocumentContent": { "documentId": GenesysCloudFullApiPathParamValue };
  "postContentmanagementDocuments": {};
  "postContentmanagementQuery": {};
  "postContentmanagementShares": {};
  "postContentmanagementWorkspaces": {};
  "postContentmanagementWorkspaceTagvalues": { "workspaceId": GenesysCloudFullApiPathParamValue };
  "postContentmanagementWorkspaceTagvaluesQuery": { "workspaceId": GenesysCloudFullApiPathParamValue };
  "putContentmanagementWorkspace": { "workspaceId": GenesysCloudFullApiPathParamValue };
  "putContentmanagementWorkspaceMember": { "workspaceId": GenesysCloudFullApiPathParamValue; "memberId": GenesysCloudFullApiPathParamValue };
  "putContentmanagementWorkspaceTagvalue": { "workspaceId": GenesysCloudFullApiPathParamValue; "tagId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiContentManagementOperationRequestMap {
  "deleteContentmanagementDocument": GenesysCloudFullApiOperationInput<"deleteContentmanagementDocument">;
  "deleteContentmanagementShare": GenesysCloudFullApiOperationInput<"deleteContentmanagementShare">;
  "deleteContentmanagementStatusStatusId": GenesysCloudFullApiOperationInput<"deleteContentmanagementStatusStatusId">;
  "deleteContentmanagementWorkspace": GenesysCloudFullApiOperationInput<"deleteContentmanagementWorkspace">;
  "deleteContentmanagementWorkspaceMember": GenesysCloudFullApiOperationInput<"deleteContentmanagementWorkspaceMember">;
  "deleteContentmanagementWorkspaceTagvalue": GenesysCloudFullApiOperationInput<"deleteContentmanagementWorkspaceTagvalue">;
  "getContentmanagementDocument": GenesysCloudFullApiOperationInput<"getContentmanagementDocument">;
  "getContentmanagementDocumentContent": GenesysCloudFullApiOperationInput<"getContentmanagementDocumentContent">;
  "getContentmanagementDocuments": GenesysCloudFullApiOperationInput<"getContentmanagementDocuments">;
  "getContentmanagementQuery": GenesysCloudFullApiOperationInput<"getContentmanagementQuery">;
  "getContentmanagementSecurityprofile": GenesysCloudFullApiOperationInput<"getContentmanagementSecurityprofile">;
  "getContentmanagementSecurityprofiles": GenesysCloudFullApiOperationInput<"getContentmanagementSecurityprofiles">;
  "getContentmanagementShare": GenesysCloudFullApiOperationInput<"getContentmanagementShare">;
  "getContentmanagementSharedSharedId": GenesysCloudFullApiOperationInput<"getContentmanagementSharedSharedId">;
  "getContentmanagementShares": GenesysCloudFullApiOperationInput<"getContentmanagementShares">;
  "getContentmanagementStatus": GenesysCloudFullApiOperationInput<"getContentmanagementStatus">;
  "getContentmanagementStatusStatusId": GenesysCloudFullApiOperationInput<"getContentmanagementStatusStatusId">;
  "getContentmanagementUsage": GenesysCloudFullApiOperationInput<"getContentmanagementUsage">;
  "getContentmanagementWorkspace": GenesysCloudFullApiOperationInput<"getContentmanagementWorkspace">;
  "getContentmanagementWorkspaceDocuments": GenesysCloudFullApiOperationInput<"getContentmanagementWorkspaceDocuments">;
  "getContentmanagementWorkspaceMember": GenesysCloudFullApiOperationInput<"getContentmanagementWorkspaceMember">;
  "getContentmanagementWorkspaceMembers": GenesysCloudFullApiOperationInput<"getContentmanagementWorkspaceMembers">;
  "getContentmanagementWorkspaces": GenesysCloudFullApiOperationInput<"getContentmanagementWorkspaces">;
  "getContentmanagementWorkspaceTagvalue": GenesysCloudFullApiOperationInput<"getContentmanagementWorkspaceTagvalue">;
  "getContentmanagementWorkspaceTagvalues": GenesysCloudFullApiOperationInput<"getContentmanagementWorkspaceTagvalues">;
  "postContentmanagementDocument": GenesysCloudFullApiOperationInput<"postContentmanagementDocument">;
  "postContentmanagementDocumentContent": GenesysCloudFullApiOperationInput<"postContentmanagementDocumentContent">;
  "postContentmanagementDocuments": GenesysCloudFullApiOperationInput<"postContentmanagementDocuments">;
  "postContentmanagementQuery": GenesysCloudFullApiOperationInput<"postContentmanagementQuery">;
  "postContentmanagementShares": GenesysCloudFullApiOperationInput<"postContentmanagementShares">;
  "postContentmanagementWorkspaces": GenesysCloudFullApiOperationInput<"postContentmanagementWorkspaces">;
  "postContentmanagementWorkspaceTagvalues": GenesysCloudFullApiOperationInput<"postContentmanagementWorkspaceTagvalues">;
  "postContentmanagementWorkspaceTagvaluesQuery": GenesysCloudFullApiOperationInput<"postContentmanagementWorkspaceTagvaluesQuery">;
  "putContentmanagementWorkspace": GenesysCloudFullApiOperationInput<"putContentmanagementWorkspace">;
  "putContentmanagementWorkspaceMember": GenesysCloudFullApiOperationInput<"putContentmanagementWorkspaceMember">;
  "putContentmanagementWorkspaceTagvalue": GenesysCloudFullApiOperationInput<"putContentmanagementWorkspaceTagvalue">;
}

export interface GenesysCloudFullApiContentManagementGeneratedClient {
  DeleteContentmanagementDocument(...args: GenesysCloudFullApiOperationArgs<"deleteContentmanagementDocument">): Promise<GenesysCloudFullApiOperationResponseMap["deleteContentmanagementDocument"]>;
  DeleteContentmanagementShare(...args: GenesysCloudFullApiOperationArgs<"deleteContentmanagementShare">): Promise<GenesysCloudFullApiOperationResponseMap["deleteContentmanagementShare"]>;
  DeleteContentmanagementStatusStatusId(...args: GenesysCloudFullApiOperationArgs<"deleteContentmanagementStatusStatusId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteContentmanagementStatusStatusId"]>;
  DeleteContentmanagementWorkspace(...args: GenesysCloudFullApiOperationArgs<"deleteContentmanagementWorkspace">): Promise<GenesysCloudFullApiOperationResponseMap["deleteContentmanagementWorkspace"]>;
  DeleteContentmanagementWorkspaceMember(...args: GenesysCloudFullApiOperationArgs<"deleteContentmanagementWorkspaceMember">): Promise<GenesysCloudFullApiOperationResponseMap["deleteContentmanagementWorkspaceMember"]>;
  DeleteContentmanagementWorkspaceTagvalue(...args: GenesysCloudFullApiOperationArgs<"deleteContentmanagementWorkspaceTagvalue">): Promise<GenesysCloudFullApiOperationResponseMap["deleteContentmanagementWorkspaceTagvalue"]>;
  GetContentmanagementDocument(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementDocument">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementDocument"]>;
  GetContentmanagementDocumentContent(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementDocumentContent">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementDocumentContent"]>;
  GetContentmanagementDocuments(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementDocuments">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementDocuments"]>;
  GetContentmanagementQuery(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementQuery">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementQuery"]>;
  GetContentmanagementSecurityprofile(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementSecurityprofile">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementSecurityprofile"]>;
  GetContentmanagementSecurityprofiles(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementSecurityprofiles">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementSecurityprofiles"]>;
  GetContentmanagementShare(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementShare">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementShare"]>;
  GetContentmanagementSharedSharedId(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementSharedSharedId">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementSharedSharedId"]>;
  GetContentmanagementShares(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementShares">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementShares"]>;
  GetContentmanagementStatus(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementStatus">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementStatus"]>;
  GetContentmanagementStatusStatusId(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementStatusStatusId">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementStatusStatusId"]>;
  GetContentmanagementUsage(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementUsage">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementUsage"]>;
  GetContentmanagementWorkspace(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspace">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementWorkspace"]>;
  GetContentmanagementWorkspaceDocuments(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceDocuments">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementWorkspaceDocuments"]>;
  GetContentmanagementWorkspaceMember(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceMember">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementWorkspaceMember"]>;
  GetContentmanagementWorkspaceMembers(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceMembers">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementWorkspaceMembers"]>;
  GetContentmanagementWorkspaces(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaces">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementWorkspaces"]>;
  GetContentmanagementWorkspaceTagvalue(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceTagvalue">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementWorkspaceTagvalue"]>;
  GetContentmanagementWorkspaceTagvalues(...args: GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceTagvalues">): Promise<GenesysCloudFullApiOperationResponseMap["getContentmanagementWorkspaceTagvalues"]>;
  PostContentmanagementDocument(...args: GenesysCloudFullApiOperationArgs<"postContentmanagementDocument">): Promise<GenesysCloudFullApiOperationResponseMap["postContentmanagementDocument"]>;
  PostContentmanagementDocumentContent(...args: GenesysCloudFullApiOperationArgs<"postContentmanagementDocumentContent">): Promise<GenesysCloudFullApiOperationResponseMap["postContentmanagementDocumentContent"]>;
  PostContentmanagementDocuments(...args: GenesysCloudFullApiOperationArgs<"postContentmanagementDocuments">): Promise<GenesysCloudFullApiOperationResponseMap["postContentmanagementDocuments"]>;
  PostContentmanagementQuery(...args: GenesysCloudFullApiOperationArgs<"postContentmanagementQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postContentmanagementQuery"]>;
  PostContentmanagementShares(...args: GenesysCloudFullApiOperationArgs<"postContentmanagementShares">): Promise<GenesysCloudFullApiOperationResponseMap["postContentmanagementShares"]>;
  PostContentmanagementWorkspaces(...args: GenesysCloudFullApiOperationArgs<"postContentmanagementWorkspaces">): Promise<GenesysCloudFullApiOperationResponseMap["postContentmanagementWorkspaces"]>;
  PostContentmanagementWorkspaceTagvalues(...args: GenesysCloudFullApiOperationArgs<"postContentmanagementWorkspaceTagvalues">): Promise<GenesysCloudFullApiOperationResponseMap["postContentmanagementWorkspaceTagvalues"]>;
  PostContentmanagementWorkspaceTagvaluesQuery(...args: GenesysCloudFullApiOperationArgs<"postContentmanagementWorkspaceTagvaluesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postContentmanagementWorkspaceTagvaluesQuery"]>;
  PutContentmanagementWorkspace(...args: GenesysCloudFullApiOperationArgs<"putContentmanagementWorkspace">): Promise<GenesysCloudFullApiOperationResponseMap["putContentmanagementWorkspace"]>;
  PutContentmanagementWorkspaceMember(...args: GenesysCloudFullApiOperationArgs<"putContentmanagementWorkspaceMember">): Promise<GenesysCloudFullApiOperationResponseMap["putContentmanagementWorkspaceMember"]>;
  PutContentmanagementWorkspaceTagvalue(...args: GenesysCloudFullApiOperationArgs<"putContentmanagementWorkspaceTagvalue">): Promise<GenesysCloudFullApiOperationResponseMap["putContentmanagementWorkspaceTagvalue"]>;
}

export const GenesysCloudFullApiContentManagementGeneratedFunctionNames = [
  "DeleteContentmanagementDocument",
  "DeleteContentmanagementShare",
  "DeleteContentmanagementStatusStatusId",
  "DeleteContentmanagementWorkspace",
  "DeleteContentmanagementWorkspaceMember",
  "DeleteContentmanagementWorkspaceTagvalue",
  "GetContentmanagementDocument",
  "GetContentmanagementDocumentContent",
  "GetContentmanagementDocuments",
  "GetContentmanagementQuery",
  "GetContentmanagementSecurityprofile",
  "GetContentmanagementSecurityprofiles",
  "GetContentmanagementShare",
  "GetContentmanagementSharedSharedId",
  "GetContentmanagementShares",
  "GetContentmanagementStatus",
  "GetContentmanagementStatusStatusId",
  "GetContentmanagementUsage",
  "GetContentmanagementWorkspace",
  "GetContentmanagementWorkspaceDocuments",
  "GetContentmanagementWorkspaceMember",
  "GetContentmanagementWorkspaceMembers",
  "GetContentmanagementWorkspaces",
  "GetContentmanagementWorkspaceTagvalue",
  "GetContentmanagementWorkspaceTagvalues",
  "PostContentmanagementDocument",
  "PostContentmanagementDocumentContent",
  "PostContentmanagementDocuments",
  "PostContentmanagementQuery",
  "PostContentmanagementShares",
  "PostContentmanagementWorkspaces",
  "PostContentmanagementWorkspaceTagvalues",
  "PostContentmanagementWorkspaceTagvaluesQuery",
  "PutContentmanagementWorkspace",
  "PutContentmanagementWorkspaceMember",
  "PutContentmanagementWorkspaceTagvalue"
] as const satisfies readonly (keyof GenesysCloudFullApiContentManagementGeneratedClient)[];

export function createGenesysCloudFullApiContentManagementGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiContentManagementGeneratedClient {
  return {
    DeleteContentmanagementDocument: (...args) => callOperation("deleteContentmanagementDocument", ...(args as GenesysCloudFullApiOperationArgs<"deleteContentmanagementDocument">)),
    DeleteContentmanagementShare: (...args) => callOperation("deleteContentmanagementShare", ...(args as GenesysCloudFullApiOperationArgs<"deleteContentmanagementShare">)),
    DeleteContentmanagementStatusStatusId: (...args) => callOperation("deleteContentmanagementStatusStatusId", ...(args as GenesysCloudFullApiOperationArgs<"deleteContentmanagementStatusStatusId">)),
    DeleteContentmanagementWorkspace: (...args) => callOperation("deleteContentmanagementWorkspace", ...(args as GenesysCloudFullApiOperationArgs<"deleteContentmanagementWorkspace">)),
    DeleteContentmanagementWorkspaceMember: (...args) => callOperation("deleteContentmanagementWorkspaceMember", ...(args as GenesysCloudFullApiOperationArgs<"deleteContentmanagementWorkspaceMember">)),
    DeleteContentmanagementWorkspaceTagvalue: (...args) => callOperation("deleteContentmanagementWorkspaceTagvalue", ...(args as GenesysCloudFullApiOperationArgs<"deleteContentmanagementWorkspaceTagvalue">)),
    GetContentmanagementDocument: (...args) => callOperation("getContentmanagementDocument", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementDocument">)),
    GetContentmanagementDocumentContent: (...args) => callOperation("getContentmanagementDocumentContent", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementDocumentContent">)),
    GetContentmanagementDocuments: (...args) => callOperation("getContentmanagementDocuments", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementDocuments">)),
    GetContentmanagementQuery: (...args) => callOperation("getContentmanagementQuery", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementQuery">)),
    GetContentmanagementSecurityprofile: (...args) => callOperation("getContentmanagementSecurityprofile", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementSecurityprofile">)),
    GetContentmanagementSecurityprofiles: (...args) => callOperation("getContentmanagementSecurityprofiles", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementSecurityprofiles">)),
    GetContentmanagementShare: (...args) => callOperation("getContentmanagementShare", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementShare">)),
    GetContentmanagementSharedSharedId: (...args) => callOperation("getContentmanagementSharedSharedId", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementSharedSharedId">)),
    GetContentmanagementShares: (...args) => callOperation("getContentmanagementShares", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementShares">)),
    GetContentmanagementStatus: (...args) => callOperation("getContentmanagementStatus", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementStatus">)),
    GetContentmanagementStatusStatusId: (...args) => callOperation("getContentmanagementStatusStatusId", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementStatusStatusId">)),
    GetContentmanagementUsage: (...args) => callOperation("getContentmanagementUsage", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementUsage">)),
    GetContentmanagementWorkspace: (...args) => callOperation("getContentmanagementWorkspace", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspace">)),
    GetContentmanagementWorkspaceDocuments: (...args) => callOperation("getContentmanagementWorkspaceDocuments", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceDocuments">)),
    GetContentmanagementWorkspaceMember: (...args) => callOperation("getContentmanagementWorkspaceMember", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceMember">)),
    GetContentmanagementWorkspaceMembers: (...args) => callOperation("getContentmanagementWorkspaceMembers", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceMembers">)),
    GetContentmanagementWorkspaces: (...args) => callOperation("getContentmanagementWorkspaces", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaces">)),
    GetContentmanagementWorkspaceTagvalue: (...args) => callOperation("getContentmanagementWorkspaceTagvalue", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceTagvalue">)),
    GetContentmanagementWorkspaceTagvalues: (...args) => callOperation("getContentmanagementWorkspaceTagvalues", ...(args as GenesysCloudFullApiOperationArgs<"getContentmanagementWorkspaceTagvalues">)),
    PostContentmanagementDocument: (...args) => callOperation("postContentmanagementDocument", ...(args as GenesysCloudFullApiOperationArgs<"postContentmanagementDocument">)),
    PostContentmanagementDocumentContent: (...args) => callOperation("postContentmanagementDocumentContent", ...(args as GenesysCloudFullApiOperationArgs<"postContentmanagementDocumentContent">)),
    PostContentmanagementDocuments: (...args) => callOperation("postContentmanagementDocuments", ...(args as GenesysCloudFullApiOperationArgs<"postContentmanagementDocuments">)),
    PostContentmanagementQuery: (...args) => callOperation("postContentmanagementQuery", ...(args as GenesysCloudFullApiOperationArgs<"postContentmanagementQuery">)),
    PostContentmanagementShares: (...args) => callOperation("postContentmanagementShares", ...(args as GenesysCloudFullApiOperationArgs<"postContentmanagementShares">)),
    PostContentmanagementWorkspaces: (...args) => callOperation("postContentmanagementWorkspaces", ...(args as GenesysCloudFullApiOperationArgs<"postContentmanagementWorkspaces">)),
    PostContentmanagementWorkspaceTagvalues: (...args) => callOperation("postContentmanagementWorkspaceTagvalues", ...(args as GenesysCloudFullApiOperationArgs<"postContentmanagementWorkspaceTagvalues">)),
    PostContentmanagementWorkspaceTagvaluesQuery: (...args) => callOperation("postContentmanagementWorkspaceTagvaluesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postContentmanagementWorkspaceTagvaluesQuery">)),
    PutContentmanagementWorkspace: (...args) => callOperation("putContentmanagementWorkspace", ...(args as GenesysCloudFullApiOperationArgs<"putContentmanagementWorkspace">)),
    PutContentmanagementWorkspaceMember: (...args) => callOperation("putContentmanagementWorkspaceMember", ...(args as GenesysCloudFullApiOperationArgs<"putContentmanagementWorkspaceMember">)),
    PutContentmanagementWorkspaceTagvalue: (...args) => callOperation("putContentmanagementWorkspaceTagvalue", ...(args as GenesysCloudFullApiOperationArgs<"putContentmanagementWorkspaceTagvalue">)),
  };
}
