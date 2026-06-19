// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiWorkspaceOperationKeys = [
  "POST /v1/workspaces/api-keys/disable",
  "GET /v1/service-accounts/{service_account_user_id}/api-keys",
  "POST /v1/service-accounts/{service_account_user_id}/api-keys",
  "PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}",
  "DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}",
  "GET /v1/workspace/audit-logs",
  "POST /v1/workspace/auth-connections",
  "GET /v1/workspace/auth-connections",
  "PATCH /v1/workspace/auth-connections/{auth_connection_id}",
  "DELETE /v1/workspace/auth-connections/{auth_connection_id}",
  "GET /v1/service-accounts",
  "GET /v1/workspace/groups",
  "GET /v1/workspace/groups/search",
  "POST /v1/workspace/groups/{group_id}/members/remove",
  "POST /v1/workspace/groups/{group_id}/members",
  "POST /v1/workspace/invites/add",
  "POST /v1/workspace/invites/add-bulk",
  "DELETE /v1/workspace/invites",
  "POST /v1/workspace/members",
  "GET /v1/workspace/resources/{resource_id}",
  "POST /v1/workspace/resources/{resource_id}/share",
  "POST /v1/workspace/resources/{resource_id}/unshare",
  "GET /v1/workspace/webhooks",
  "POST /v1/workspace/webhooks",
  "PATCH /v1/workspace/webhooks/{webhook_id}",
  "DELETE /v1/workspace/webhooks/{webhook_id}"
] as const;
export type ElevenLabsFullApiWorkspaceOperationKey = typeof ElevenLabsFullApiWorkspaceOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiWorkspaceOperationPathParamMap {
  "POST /v1/workspaces/api-keys/disable": {};
  "GET /v1/service-accounts/{service_account_user_id}/api-keys": { "service_account_user_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/service-accounts/{service_account_user_id}/api-keys": { "service_account_user_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": { "service_account_user_id": ElevenLabsFullApiPathParamValue; "api_key_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": { "service_account_user_id": ElevenLabsFullApiPathParamValue; "api_key_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/workspace/audit-logs": {};
  "POST /v1/workspace/auth-connections": {};
  "GET /v1/workspace/auth-connections": {};
  "PATCH /v1/workspace/auth-connections/{auth_connection_id}": { "auth_connection_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/workspace/auth-connections/{auth_connection_id}": { "auth_connection_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/service-accounts": {};
  "GET /v1/workspace/groups": {};
  "GET /v1/workspace/groups/search": {};
  "POST /v1/workspace/groups/{group_id}/members/remove": { "group_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/workspace/groups/{group_id}/members": { "group_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/workspace/invites/add": {};
  "POST /v1/workspace/invites/add-bulk": {};
  "DELETE /v1/workspace/invites": {};
  "POST /v1/workspace/members": {};
  "GET /v1/workspace/resources/{resource_id}": { "resource_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/workspace/resources/{resource_id}/share": { "resource_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/workspace/resources/{resource_id}/unshare": { "resource_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/workspace/webhooks": {};
  "POST /v1/workspace/webhooks": {};
  "PATCH /v1/workspace/webhooks/{webhook_id}": { "webhook_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/workspace/webhooks/{webhook_id}": { "webhook_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiWorkspaceOperationRequestMap {
  "POST /v1/workspaces/api-keys/disable": ElevenLabsFullApiOperationInput<"POST /v1/workspaces/api-keys/disable">;
  "GET /v1/service-accounts/{service_account_user_id}/api-keys": ElevenLabsFullApiOperationInput<"GET /v1/service-accounts/{service_account_user_id}/api-keys">;
  "POST /v1/service-accounts/{service_account_user_id}/api-keys": ElevenLabsFullApiOperationInput<"POST /v1/service-accounts/{service_account_user_id}/api-keys">;
  "PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}">;
  "DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}">;
  "GET /v1/workspace/audit-logs": ElevenLabsFullApiOperationInput<"GET /v1/workspace/audit-logs">;
  "POST /v1/workspace/auth-connections": ElevenLabsFullApiOperationInput<"POST /v1/workspace/auth-connections">;
  "GET /v1/workspace/auth-connections": ElevenLabsFullApiOperationInput<"GET /v1/workspace/auth-connections">;
  "PATCH /v1/workspace/auth-connections/{auth_connection_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/workspace/auth-connections/{auth_connection_id}">;
  "DELETE /v1/workspace/auth-connections/{auth_connection_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/workspace/auth-connections/{auth_connection_id}">;
  "GET /v1/service-accounts": ElevenLabsFullApiOperationInput<"GET /v1/service-accounts">;
  "GET /v1/workspace/groups": ElevenLabsFullApiOperationInput<"GET /v1/workspace/groups">;
  "GET /v1/workspace/groups/search": ElevenLabsFullApiOperationInput<"GET /v1/workspace/groups/search">;
  "POST /v1/workspace/groups/{group_id}/members/remove": ElevenLabsFullApiOperationInput<"POST /v1/workspace/groups/{group_id}/members/remove">;
  "POST /v1/workspace/groups/{group_id}/members": ElevenLabsFullApiOperationInput<"POST /v1/workspace/groups/{group_id}/members">;
  "POST /v1/workspace/invites/add": ElevenLabsFullApiOperationInput<"POST /v1/workspace/invites/add">;
  "POST /v1/workspace/invites/add-bulk": ElevenLabsFullApiOperationInput<"POST /v1/workspace/invites/add-bulk">;
  "DELETE /v1/workspace/invites": ElevenLabsFullApiOperationInput<"DELETE /v1/workspace/invites">;
  "POST /v1/workspace/members": ElevenLabsFullApiOperationInput<"POST /v1/workspace/members">;
  "GET /v1/workspace/resources/{resource_id}": ElevenLabsFullApiOperationInput<"GET /v1/workspace/resources/{resource_id}">;
  "POST /v1/workspace/resources/{resource_id}/share": ElevenLabsFullApiOperationInput<"POST /v1/workspace/resources/{resource_id}/share">;
  "POST /v1/workspace/resources/{resource_id}/unshare": ElevenLabsFullApiOperationInput<"POST /v1/workspace/resources/{resource_id}/unshare">;
  "GET /v1/workspace/webhooks": ElevenLabsFullApiOperationInput<"GET /v1/workspace/webhooks">;
  "POST /v1/workspace/webhooks": ElevenLabsFullApiOperationInput<"POST /v1/workspace/webhooks">;
  "PATCH /v1/workspace/webhooks/{webhook_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/workspace/webhooks/{webhook_id}">;
  "DELETE /v1/workspace/webhooks/{webhook_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/workspace/webhooks/{webhook_id}">;
}

export interface ElevenLabsFullApiWorkspaceGeneratedClient {
  Disable(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspaces/api-keys/disable">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspaces/api-keys/disable"]>;
  GetServiceAccountApiKeysRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/service-accounts/{service_account_user_id}/api-keys">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/service-accounts/{service_account_user_id}/api-keys"]>;
  CreateServiceAccountApiKey(...args: ElevenLabsFullApiOperationArgs<"POST /v1/service-accounts/{service_account_user_id}/api-keys">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/service-accounts/{service_account_user_id}/api-keys"]>;
  EditServiceAccountApiKey(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}"]>;
  DeleteServiceAccountApiKey(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}"]>;
  GetWorkspaceAuditLogs(...args: ElevenLabsFullApiOperationArgs<"GET /v1/workspace/audit-logs">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/workspace/audit-logs"]>;
  CreateAuthConnection(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/auth-connections">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/auth-connections"]>;
  ListAuthConnections(...args: ElevenLabsFullApiOperationArgs<"GET /v1/workspace/auth-connections">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/workspace/auth-connections"]>;
  UpdateAuthConnection(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/workspace/auth-connections/{auth_connection_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/workspace/auth-connections/{auth_connection_id}"]>;
  DeleteAuthConnection(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/workspace/auth-connections/{auth_connection_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/workspace/auth-connections/{auth_connection_id}"]>;
  GetWorkspaceServiceAccounts(...args: ElevenLabsFullApiOperationArgs<"GET /v1/service-accounts">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/service-accounts"]>;
  GetGroupsEndpoint(...args: ElevenLabsFullApiOperationArgs<"GET /v1/workspace/groups">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/workspace/groups"]>;
  SearchGroups(...args: ElevenLabsFullApiOperationArgs<"GET /v1/workspace/groups/search">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/workspace/groups/search"]>;
  RemoveMember(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/groups/{group_id}/members/remove">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/groups/{group_id}/members/remove"]>;
  AddMember(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/groups/{group_id}/members">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/groups/{group_id}/members"]>;
  InviteUser(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/invites/add">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/invites/add"]>;
  InviteUsersBulk(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/invites/add-bulk">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/invites/add-bulk"]>;
  DeleteInvite(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/workspace/invites">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/workspace/invites"]>;
  UpdateWorkspaceMember(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/members">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/members"]>;
  GetResourceMetadata(...args: ElevenLabsFullApiOperationArgs<"GET /v1/workspace/resources/{resource_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/workspace/resources/{resource_id}"]>;
  ShareResourceEndpoint(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/resources/{resource_id}/share">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/resources/{resource_id}/share"]>;
  UnshareResourceEndpoint(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/resources/{resource_id}/unshare">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/resources/{resource_id}/unshare"]>;
  GetWorkspaceWebhooksRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/workspace/webhooks">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/workspace/webhooks"]>;
  CreateWorkspaceWebhookRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/webhooks">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/webhooks"]>;
  EditWorkspaceWebhookRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/workspace/webhooks/{webhook_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/workspace/webhooks/{webhook_id}"]>;
  DeleteWorkspaceWebhookRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/workspace/webhooks/{webhook_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/workspace/webhooks/{webhook_id}"]>;
}

export const ElevenLabsFullApiWorkspaceGeneratedFunctionNames = [
  "Disable",
  "GetServiceAccountApiKeysRoute",
  "CreateServiceAccountApiKey",
  "EditServiceAccountApiKey",
  "DeleteServiceAccountApiKey",
  "GetWorkspaceAuditLogs",
  "CreateAuthConnection",
  "ListAuthConnections",
  "UpdateAuthConnection",
  "DeleteAuthConnection",
  "GetWorkspaceServiceAccounts",
  "GetGroupsEndpoint",
  "SearchGroups",
  "RemoveMember",
  "AddMember",
  "InviteUser",
  "InviteUsersBulk",
  "DeleteInvite",
  "UpdateWorkspaceMember",
  "GetResourceMetadata",
  "ShareResourceEndpoint",
  "UnshareResourceEndpoint",
  "GetWorkspaceWebhooksRoute",
  "CreateWorkspaceWebhookRoute",
  "EditWorkspaceWebhookRoute",
  "DeleteWorkspaceWebhookRoute"
] as const satisfies readonly (keyof ElevenLabsFullApiWorkspaceGeneratedClient)[];

export function createElevenLabsFullApiWorkspaceGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiWorkspaceGeneratedClient {
  return {
    Disable: (...args) => callOperation("POST /v1/workspaces/api-keys/disable", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspaces/api-keys/disable">)),
    GetServiceAccountApiKeysRoute: (...args) => callOperation("GET /v1/service-accounts/{service_account_user_id}/api-keys", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/service-accounts/{service_account_user_id}/api-keys">)),
    CreateServiceAccountApiKey: (...args) => callOperation("POST /v1/service-accounts/{service_account_user_id}/api-keys", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/service-accounts/{service_account_user_id}/api-keys">)),
    EditServiceAccountApiKey: (...args) => callOperation("PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}">)),
    DeleteServiceAccountApiKey: (...args) => callOperation("DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}">)),
    GetWorkspaceAuditLogs: (...args) => callOperation("GET /v1/workspace/audit-logs", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/workspace/audit-logs">)),
    CreateAuthConnection: (...args) => callOperation("POST /v1/workspace/auth-connections", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/auth-connections">)),
    ListAuthConnections: (...args) => callOperation("GET /v1/workspace/auth-connections", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/workspace/auth-connections">)),
    UpdateAuthConnection: (...args) => callOperation("PATCH /v1/workspace/auth-connections/{auth_connection_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/workspace/auth-connections/{auth_connection_id}">)),
    DeleteAuthConnection: (...args) => callOperation("DELETE /v1/workspace/auth-connections/{auth_connection_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/workspace/auth-connections/{auth_connection_id}">)),
    GetWorkspaceServiceAccounts: (...args) => callOperation("GET /v1/service-accounts", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/service-accounts">)),
    GetGroupsEndpoint: (...args) => callOperation("GET /v1/workspace/groups", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/workspace/groups">)),
    SearchGroups: (...args) => callOperation("GET /v1/workspace/groups/search", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/workspace/groups/search">)),
    RemoveMember: (...args) => callOperation("POST /v1/workspace/groups/{group_id}/members/remove", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/groups/{group_id}/members/remove">)),
    AddMember: (...args) => callOperation("POST /v1/workspace/groups/{group_id}/members", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/groups/{group_id}/members">)),
    InviteUser: (...args) => callOperation("POST /v1/workspace/invites/add", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/invites/add">)),
    InviteUsersBulk: (...args) => callOperation("POST /v1/workspace/invites/add-bulk", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/invites/add-bulk">)),
    DeleteInvite: (...args) => callOperation("DELETE /v1/workspace/invites", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/workspace/invites">)),
    UpdateWorkspaceMember: (...args) => callOperation("POST /v1/workspace/members", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/members">)),
    GetResourceMetadata: (...args) => callOperation("GET /v1/workspace/resources/{resource_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/workspace/resources/{resource_id}">)),
    ShareResourceEndpoint: (...args) => callOperation("POST /v1/workspace/resources/{resource_id}/share", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/resources/{resource_id}/share">)),
    UnshareResourceEndpoint: (...args) => callOperation("POST /v1/workspace/resources/{resource_id}/unshare", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/resources/{resource_id}/unshare">)),
    GetWorkspaceWebhooksRoute: (...args) => callOperation("GET /v1/workspace/webhooks", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/workspace/webhooks">)),
    CreateWorkspaceWebhookRoute: (...args) => callOperation("POST /v1/workspace/webhooks", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/webhooks">)),
    EditWorkspaceWebhookRoute: (...args) => callOperation("PATCH /v1/workspace/webhooks/{webhook_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/workspace/webhooks/{webhook_id}">)),
    DeleteWorkspaceWebhookRoute: (...args) => callOperation("DELETE /v1/workspace/webhooks/{webhook_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/workspace/webhooks/{webhook_id}">)),
  };
}
