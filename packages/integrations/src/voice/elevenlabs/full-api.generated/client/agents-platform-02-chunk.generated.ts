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
export const ElevenLabsFullApiAgentsPlatform02OperationKeys = [
  "DELETE /v1/convai/tools/{tool_id}",
  "GET /v1/convai/tools/{tool_id}/dependent-agents",
  "GET /v1/convai/tools/{tool_id}/executions",
  "GET /v1/convai/settings",
  "PATCH /v1/convai/settings",
  "GET /v1/convai/settings/dashboard",
  "PATCH /v1/convai/settings/dashboard",
  "POST /v1/convai/secrets",
  "GET /v1/convai/secrets",
  "GET /v1/convai/secrets/{secret_id}",
  "DELETE /v1/convai/secrets/{secret_id}",
  "PATCH /v1/convai/secrets/{secret_id}",
  "GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}",
  "POST /v1/convai/batch-calling/submit",
  "GET /v1/convai/batch-calling/workspace",
  "GET /v1/convai/batch-calling/{batch_id}",
  "DELETE /v1/convai/batch-calling/{batch_id}",
  "POST /v1/convai/batch-calling/{batch_id}/cancel",
  "POST /v1/convai/batch-calling/{batch_id}/retry",
  "POST /v1/convai/sip-trunk/outbound-call",
  "POST /v1/convai/mcp-servers",
  "GET /v1/convai/mcp-servers",
  "GET /v1/convai/mcp-servers/{mcp_server_id}",
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}",
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}",
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tools",
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy",
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals",
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}",
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs",
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}",
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}",
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}",
  "GET /v1/convai/whatsapp-accounts/{phone_number_id}",
  "PATCH /v1/convai/whatsapp-accounts/{phone_number_id}",
  "DELETE /v1/convai/whatsapp-accounts/{phone_number_id}",
  "GET /v1/convai/whatsapp-accounts",
  "POST /v1/convai/agents/{agent_id}/branches",
  "GET /v1/convai/agents/{agent_id}/branches",
  "GET /v1/convai/agents/{agent_id}/branches/{branch_id}",
  "PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}",
  "GET /v1/convai/agents/{agent_id}/versions/{version_id}",
  "POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge",
  "POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase",
  "POST /v1/convai/agents/{agent_id}/deployments",
  "POST /v1/convai/agents/{agent_id}/drafts",
  "DELETE /v1/convai/agents/{agent_id}/drafts",
  "GET /v1/convai/environment-variables",
  "POST /v1/convai/environment-variables",
  "GET /v1/convai/environment-variables/{env_var_id}",
  "PATCH /v1/convai/environment-variables/{env_var_id}"
] as const;
export type ElevenLabsFullApiAgentsPlatform02OperationKey = typeof ElevenLabsFullApiAgentsPlatform02OperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiAgentsPlatform02OperationPathParamMap {
  "DELETE /v1/convai/tools/{tool_id}": { "tool_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/tools/{tool_id}/dependent-agents": { "tool_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/tools/{tool_id}/executions": { "tool_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/settings": {};
  "PATCH /v1/convai/settings": {};
  "GET /v1/convai/settings/dashboard": {};
  "PATCH /v1/convai/settings/dashboard": {};
  "POST /v1/convai/secrets": {};
  "GET /v1/convai/secrets": {};
  "GET /v1/convai/secrets/{secret_id}": { "secret_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/secrets/{secret_id}": { "secret_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/secrets/{secret_id}": { "secret_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}": { "secret_id": ElevenLabsFullApiPathParamValue; "resource_type": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/batch-calling/submit": {};
  "GET /v1/convai/batch-calling/workspace": {};
  "GET /v1/convai/batch-calling/{batch_id}": { "batch_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/batch-calling/{batch_id}": { "batch_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/batch-calling/{batch_id}/cancel": { "batch_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/batch-calling/{batch_id}/retry": { "batch_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/sip-trunk/outbound-call": {};
  "POST /v1/convai/mcp-servers": {};
  "GET /v1/convai/mcp-servers": {};
  "GET /v1/convai/mcp-servers/{mcp_server_id}": { "mcp_server_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}": { "mcp_server_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}": { "mcp_server_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tools": { "mcp_server_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy": { "mcp_server_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals": { "mcp_server_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}": { "mcp_server_id": ElevenLabsFullApiPathParamValue; "tool_name": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs": { "mcp_server_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": { "mcp_server_id": ElevenLabsFullApiPathParamValue; "tool_name": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": { "mcp_server_id": ElevenLabsFullApiPathParamValue; "tool_name": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": { "mcp_server_id": ElevenLabsFullApiPathParamValue; "tool_name": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/whatsapp-accounts/{phone_number_id}": { "phone_number_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/whatsapp-accounts/{phone_number_id}": { "phone_number_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/whatsapp-accounts/{phone_number_id}": { "phone_number_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/whatsapp-accounts": {};
  "POST /v1/convai/agents/{agent_id}/branches": { "agent_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/agents/{agent_id}/branches": { "agent_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/agents/{agent_id}/branches/{branch_id}": { "agent_id": ElevenLabsFullApiPathParamValue; "branch_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}": { "agent_id": ElevenLabsFullApiPathParamValue; "branch_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/agents/{agent_id}/versions/{version_id}": { "agent_id": ElevenLabsFullApiPathParamValue; "version_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge": { "agent_id": ElevenLabsFullApiPathParamValue; "source_branch_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase": { "agent_id": ElevenLabsFullApiPathParamValue; "branch_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agents/{agent_id}/deployments": { "agent_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/convai/agents/{agent_id}/drafts": { "agent_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/convai/agents/{agent_id}/drafts": { "agent_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/convai/environment-variables": {};
  "POST /v1/convai/environment-variables": {};
  "GET /v1/convai/environment-variables/{env_var_id}": { "env_var_id": ElevenLabsFullApiPathParamValue };
  "PATCH /v1/convai/environment-variables/{env_var_id}": { "env_var_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiAgentsPlatform02OperationRequestMap {
  "DELETE /v1/convai/tools/{tool_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/tools/{tool_id}">;
  "GET /v1/convai/tools/{tool_id}/dependent-agents": ElevenLabsFullApiOperationInput<"GET /v1/convai/tools/{tool_id}/dependent-agents">;
  "GET /v1/convai/tools/{tool_id}/executions": ElevenLabsFullApiOperationInput<"GET /v1/convai/tools/{tool_id}/executions">;
  "GET /v1/convai/settings": ElevenLabsFullApiOperationInput<"GET /v1/convai/settings">;
  "PATCH /v1/convai/settings": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/settings">;
  "GET /v1/convai/settings/dashboard": ElevenLabsFullApiOperationInput<"GET /v1/convai/settings/dashboard">;
  "PATCH /v1/convai/settings/dashboard": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/settings/dashboard">;
  "POST /v1/convai/secrets": ElevenLabsFullApiOperationInput<"POST /v1/convai/secrets">;
  "GET /v1/convai/secrets": ElevenLabsFullApiOperationInput<"GET /v1/convai/secrets">;
  "GET /v1/convai/secrets/{secret_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/secrets/{secret_id}">;
  "DELETE /v1/convai/secrets/{secret_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/secrets/{secret_id}">;
  "PATCH /v1/convai/secrets/{secret_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/secrets/{secret_id}">;
  "GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}": ElevenLabsFullApiOperationInput<"GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}">;
  "POST /v1/convai/batch-calling/submit": ElevenLabsFullApiOperationInput<"POST /v1/convai/batch-calling/submit">;
  "GET /v1/convai/batch-calling/workspace": ElevenLabsFullApiOperationInput<"GET /v1/convai/batch-calling/workspace">;
  "GET /v1/convai/batch-calling/{batch_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/batch-calling/{batch_id}">;
  "DELETE /v1/convai/batch-calling/{batch_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/batch-calling/{batch_id}">;
  "POST /v1/convai/batch-calling/{batch_id}/cancel": ElevenLabsFullApiOperationInput<"POST /v1/convai/batch-calling/{batch_id}/cancel">;
  "POST /v1/convai/batch-calling/{batch_id}/retry": ElevenLabsFullApiOperationInput<"POST /v1/convai/batch-calling/{batch_id}/retry">;
  "POST /v1/convai/sip-trunk/outbound-call": ElevenLabsFullApiOperationInput<"POST /v1/convai/sip-trunk/outbound-call">;
  "POST /v1/convai/mcp-servers": ElevenLabsFullApiOperationInput<"POST /v1/convai/mcp-servers">;
  "GET /v1/convai/mcp-servers": ElevenLabsFullApiOperationInput<"GET /v1/convai/mcp-servers">;
  "GET /v1/convai/mcp-servers/{mcp_server_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/mcp-servers/{mcp_server_id}">;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/mcp-servers/{mcp_server_id}">;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/mcp-servers/{mcp_server_id}">;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tools": ElevenLabsFullApiOperationInput<"GET /v1/convai/mcp-servers/{mcp_server_id}/tools">;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy">;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals": ElevenLabsFullApiOperationInput<"POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals">;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}">;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs": ElevenLabsFullApiOperationInput<"POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs">;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": ElevenLabsFullApiOperationInput<"GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}">;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}">;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}">;
  "GET /v1/convai/whatsapp-accounts/{phone_number_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/whatsapp-accounts/{phone_number_id}">;
  "PATCH /v1/convai/whatsapp-accounts/{phone_number_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/whatsapp-accounts/{phone_number_id}">;
  "DELETE /v1/convai/whatsapp-accounts/{phone_number_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/whatsapp-accounts/{phone_number_id}">;
  "GET /v1/convai/whatsapp-accounts": ElevenLabsFullApiOperationInput<"GET /v1/convai/whatsapp-accounts">;
  "POST /v1/convai/agents/{agent_id}/branches": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/branches">;
  "GET /v1/convai/agents/{agent_id}/branches": ElevenLabsFullApiOperationInput<"GET /v1/convai/agents/{agent_id}/branches">;
  "GET /v1/convai/agents/{agent_id}/branches/{branch_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/agents/{agent_id}/branches/{branch_id}">;
  "PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}">;
  "GET /v1/convai/agents/{agent_id}/versions/{version_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/agents/{agent_id}/versions/{version_id}">;
  "POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge">;
  "POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase">;
  "POST /v1/convai/agents/{agent_id}/deployments": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/deployments">;
  "POST /v1/convai/agents/{agent_id}/drafts": ElevenLabsFullApiOperationInput<"POST /v1/convai/agents/{agent_id}/drafts">;
  "DELETE /v1/convai/agents/{agent_id}/drafts": ElevenLabsFullApiOperationInput<"DELETE /v1/convai/agents/{agent_id}/drafts">;
  "GET /v1/convai/environment-variables": ElevenLabsFullApiOperationInput<"GET /v1/convai/environment-variables">;
  "POST /v1/convai/environment-variables": ElevenLabsFullApiOperationInput<"POST /v1/convai/environment-variables">;
  "GET /v1/convai/environment-variables/{env_var_id}": ElevenLabsFullApiOperationInput<"GET /v1/convai/environment-variables/{env_var_id}">;
  "PATCH /v1/convai/environment-variables/{env_var_id}": ElevenLabsFullApiOperationInput<"PATCH /v1/convai/environment-variables/{env_var_id}">;
}

export interface ElevenLabsFullApiAgentsPlatform02GeneratedClient {
  DeleteToolRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/tools/{tool_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/tools/{tool_id}"]>;
  GetToolDependentAgentsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/tools/{tool_id}/dependent-agents">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/tools/{tool_id}/dependent-agents"]>;
  GetToolExecutionsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/tools/{tool_id}/executions">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/tools/{tool_id}/executions"]>;
  GetSettingsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/settings">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/settings"]>;
  UpdateSettingsRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/settings">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/settings"]>;
  GetDashboardSettingsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/settings/dashboard">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/settings/dashboard"]>;
  UpdateDashboardSettingsRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/settings/dashboard">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/settings/dashboard"]>;
  CreateSecretRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/secrets">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/secrets"]>;
  GetSecretsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/secrets">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/secrets"]>;
  GetSecretRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/secrets/{secret_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/secrets/{secret_id}"]>;
  DeleteSecretRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/secrets/{secret_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/secrets/{secret_id}"]>;
  UpdateSecretRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/secrets/{secret_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/secrets/{secret_id}"]>;
  GetSecretDependenciesRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}"]>;
  CreateBatchCall(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/batch-calling/submit">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/batch-calling/submit"]>;
  GetWorkspaceBatchCalls(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/batch-calling/workspace">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/batch-calling/workspace"]>;
  GetBatchCall(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/batch-calling/{batch_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/batch-calling/{batch_id}"]>;
  DeleteBatchCall(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/batch-calling/{batch_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/batch-calling/{batch_id}"]>;
  CancelBatchCall(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/batch-calling/{batch_id}/cancel">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/batch-calling/{batch_id}/cancel"]>;
  RetryBatchCall(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/batch-calling/{batch_id}/retry">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/batch-calling/{batch_id}/retry"]>;
  HandleSipTrunkOutboundCall(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/sip-trunk/outbound-call">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/sip-trunk/outbound-call"]>;
  CreateMcpServerRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/mcp-servers">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/mcp-servers"]>;
  ListMcpServersRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/mcp-servers">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/mcp-servers"]>;
  GetMcpRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/mcp-servers/{mcp_server_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/mcp-servers/{mcp_server_id}"]>;
  DeleteMcpServerRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/mcp-servers/{mcp_server_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/mcp-servers/{mcp_server_id}"]>;
  UpdateMcpServerConfigRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/mcp-servers/{mcp_server_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/mcp-servers/{mcp_server_id}"]>;
  ListMcpServerToolsRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/mcp-servers/{mcp_server_id}/tools">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/mcp-servers/{mcp_server_id}/tools"]>;
  UpdateMcpServerApprovalPolicyRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy"]>;
  AddMcpServerToolApprovalRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals"]>;
  RemoveMcpServerToolApprovalRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}"]>;
  AddMcpToolConfigOverrideRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs"]>;
  GetMcpToolConfigOverrideRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}"]>;
  UpdateMcpToolConfigOverrideRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}"]>;
  RemoveMcpToolConfigOverrideRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}"]>;
  GetWhatsappAccount(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/whatsapp-accounts/{phone_number_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/whatsapp-accounts/{phone_number_id}"]>;
  UpdateWhatsappAccount(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/whatsapp-accounts/{phone_number_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/whatsapp-accounts/{phone_number_id}"]>;
  DeleteWhatsappAccount(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/whatsapp-accounts/{phone_number_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/whatsapp-accounts/{phone_number_id}"]>;
  ListWhatsappAccounts(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/whatsapp-accounts">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/whatsapp-accounts"]>;
  CreateBranchRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/branches">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/branches"]>;
  GetBranchesRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/branches">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agents/{agent_id}/branches"]>;
  GetBranchRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/branches/{branch_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agents/{agent_id}/branches/{branch_id}"]>;
  UpdateBranchRoute(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}"]>;
  GetVersionMetadataRoute(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/versions/{version_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/agents/{agent_id}/versions/{version_id}"]>;
  MergeBranchIntoTarget(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge"]>;
  RebaseBranchOntoMain(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase"]>;
  CreateAgentDeploymentRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/deployments">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/deployments"]>;
  CreateAgentDraftRoute(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/drafts">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/agents/{agent_id}/drafts"]>;
  DeleteAgentDraftRoute(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/agents/{agent_id}/drafts">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/convai/agents/{agent_id}/drafts"]>;
  ListEnvironmentVariables(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/environment-variables">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/environment-variables"]>;
  CreateEnvironmentVariable(...args: ElevenLabsFullApiOperationArgs<"POST /v1/convai/environment-variables">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/convai/environment-variables"]>;
  GetEnvironmentVariable(...args: ElevenLabsFullApiOperationArgs<"GET /v1/convai/environment-variables/{env_var_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/convai/environment-variables/{env_var_id}"]>;
  UpdateEnvironmentVariable(...args: ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/environment-variables/{env_var_id}">): Promise<ElevenLabsFullApiOperationResponseMap["PATCH /v1/convai/environment-variables/{env_var_id}"]>;
}

export const ElevenLabsFullApiAgentsPlatform02GeneratedFunctionNames = [
  "DeleteToolRoute",
  "GetToolDependentAgentsRoute",
  "GetToolExecutionsRoute",
  "GetSettingsRoute",
  "UpdateSettingsRoute",
  "GetDashboardSettingsRoute",
  "UpdateDashboardSettingsRoute",
  "CreateSecretRoute",
  "GetSecretsRoute",
  "GetSecretRoute",
  "DeleteSecretRoute",
  "UpdateSecretRoute",
  "GetSecretDependenciesRoute",
  "CreateBatchCall",
  "GetWorkspaceBatchCalls",
  "GetBatchCall",
  "DeleteBatchCall",
  "CancelBatchCall",
  "RetryBatchCall",
  "HandleSipTrunkOutboundCall",
  "CreateMcpServerRoute",
  "ListMcpServersRoute",
  "GetMcpRoute",
  "DeleteMcpServerRoute",
  "UpdateMcpServerConfigRoute",
  "ListMcpServerToolsRoute",
  "UpdateMcpServerApprovalPolicyRoute",
  "AddMcpServerToolApprovalRoute",
  "RemoveMcpServerToolApprovalRoute",
  "AddMcpToolConfigOverrideRoute",
  "GetMcpToolConfigOverrideRoute",
  "UpdateMcpToolConfigOverrideRoute",
  "RemoveMcpToolConfigOverrideRoute",
  "GetWhatsappAccount",
  "UpdateWhatsappAccount",
  "DeleteWhatsappAccount",
  "ListWhatsappAccounts",
  "CreateBranchRoute",
  "GetBranchesRoute",
  "GetBranchRoute",
  "UpdateBranchRoute",
  "GetVersionMetadataRoute",
  "MergeBranchIntoTarget",
  "RebaseBranchOntoMain",
  "CreateAgentDeploymentRoute",
  "CreateAgentDraftRoute",
  "DeleteAgentDraftRoute",
  "ListEnvironmentVariables",
  "CreateEnvironmentVariable",
  "GetEnvironmentVariable",
  "UpdateEnvironmentVariable"
] as const satisfies readonly (keyof ElevenLabsFullApiAgentsPlatform02GeneratedClient)[];

export function createElevenLabsFullApiAgentsPlatform02GeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiAgentsPlatform02GeneratedClient {
  return {
    DeleteToolRoute: (...args) => callOperation("DELETE /v1/convai/tools/{tool_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/tools/{tool_id}">)),
    GetToolDependentAgentsRoute: (...args) => callOperation("GET /v1/convai/tools/{tool_id}/dependent-agents", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/tools/{tool_id}/dependent-agents">)),
    GetToolExecutionsRoute: (...args) => callOperation("GET /v1/convai/tools/{tool_id}/executions", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/tools/{tool_id}/executions">)),
    GetSettingsRoute: (...args) => callOperation("GET /v1/convai/settings", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/settings">)),
    UpdateSettingsRoute: (...args) => callOperation("PATCH /v1/convai/settings", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/settings">)),
    GetDashboardSettingsRoute: (...args) => callOperation("GET /v1/convai/settings/dashboard", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/settings/dashboard">)),
    UpdateDashboardSettingsRoute: (...args) => callOperation("PATCH /v1/convai/settings/dashboard", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/settings/dashboard">)),
    CreateSecretRoute: (...args) => callOperation("POST /v1/convai/secrets", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/secrets">)),
    GetSecretsRoute: (...args) => callOperation("GET /v1/convai/secrets", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/secrets">)),
    GetSecretRoute: (...args) => callOperation("GET /v1/convai/secrets/{secret_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/secrets/{secret_id}">)),
    DeleteSecretRoute: (...args) => callOperation("DELETE /v1/convai/secrets/{secret_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/secrets/{secret_id}">)),
    UpdateSecretRoute: (...args) => callOperation("PATCH /v1/convai/secrets/{secret_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/secrets/{secret_id}">)),
    GetSecretDependenciesRoute: (...args) => callOperation("GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}">)),
    CreateBatchCall: (...args) => callOperation("POST /v1/convai/batch-calling/submit", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/batch-calling/submit">)),
    GetWorkspaceBatchCalls: (...args) => callOperation("GET /v1/convai/batch-calling/workspace", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/batch-calling/workspace">)),
    GetBatchCall: (...args) => callOperation("GET /v1/convai/batch-calling/{batch_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/batch-calling/{batch_id}">)),
    DeleteBatchCall: (...args) => callOperation("DELETE /v1/convai/batch-calling/{batch_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/batch-calling/{batch_id}">)),
    CancelBatchCall: (...args) => callOperation("POST /v1/convai/batch-calling/{batch_id}/cancel", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/batch-calling/{batch_id}/cancel">)),
    RetryBatchCall: (...args) => callOperation("POST /v1/convai/batch-calling/{batch_id}/retry", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/batch-calling/{batch_id}/retry">)),
    HandleSipTrunkOutboundCall: (...args) => callOperation("POST /v1/convai/sip-trunk/outbound-call", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/sip-trunk/outbound-call">)),
    CreateMcpServerRoute: (...args) => callOperation("POST /v1/convai/mcp-servers", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/mcp-servers">)),
    ListMcpServersRoute: (...args) => callOperation("GET /v1/convai/mcp-servers", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/mcp-servers">)),
    GetMcpRoute: (...args) => callOperation("GET /v1/convai/mcp-servers/{mcp_server_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/mcp-servers/{mcp_server_id}">)),
    DeleteMcpServerRoute: (...args) => callOperation("DELETE /v1/convai/mcp-servers/{mcp_server_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/mcp-servers/{mcp_server_id}">)),
    UpdateMcpServerConfigRoute: (...args) => callOperation("PATCH /v1/convai/mcp-servers/{mcp_server_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/mcp-servers/{mcp_server_id}">)),
    ListMcpServerToolsRoute: (...args) => callOperation("GET /v1/convai/mcp-servers/{mcp_server_id}/tools", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/mcp-servers/{mcp_server_id}/tools">)),
    UpdateMcpServerApprovalPolicyRoute: (...args) => callOperation("PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy">)),
    AddMcpServerToolApprovalRoute: (...args) => callOperation("POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals">)),
    RemoveMcpServerToolApprovalRoute: (...args) => callOperation("DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}">)),
    AddMcpToolConfigOverrideRoute: (...args) => callOperation("POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs">)),
    GetMcpToolConfigOverrideRoute: (...args) => callOperation("GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}">)),
    UpdateMcpToolConfigOverrideRoute: (...args) => callOperation("PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}">)),
    RemoveMcpToolConfigOverrideRoute: (...args) => callOperation("DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}">)),
    GetWhatsappAccount: (...args) => callOperation("GET /v1/convai/whatsapp-accounts/{phone_number_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/whatsapp-accounts/{phone_number_id}">)),
    UpdateWhatsappAccount: (...args) => callOperation("PATCH /v1/convai/whatsapp-accounts/{phone_number_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/whatsapp-accounts/{phone_number_id}">)),
    DeleteWhatsappAccount: (...args) => callOperation("DELETE /v1/convai/whatsapp-accounts/{phone_number_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/whatsapp-accounts/{phone_number_id}">)),
    ListWhatsappAccounts: (...args) => callOperation("GET /v1/convai/whatsapp-accounts", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/whatsapp-accounts">)),
    CreateBranchRoute: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/branches", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/branches">)),
    GetBranchesRoute: (...args) => callOperation("GET /v1/convai/agents/{agent_id}/branches", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/branches">)),
    GetBranchRoute: (...args) => callOperation("GET /v1/convai/agents/{agent_id}/branches/{branch_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/branches/{branch_id}">)),
    UpdateBranchRoute: (...args) => callOperation("PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}">)),
    GetVersionMetadataRoute: (...args) => callOperation("GET /v1/convai/agents/{agent_id}/versions/{version_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/agents/{agent_id}/versions/{version_id}">)),
    MergeBranchIntoTarget: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge">)),
    RebaseBranchOntoMain: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase">)),
    CreateAgentDeploymentRoute: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/deployments", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/deployments">)),
    CreateAgentDraftRoute: (...args) => callOperation("POST /v1/convai/agents/{agent_id}/drafts", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/agents/{agent_id}/drafts">)),
    DeleteAgentDraftRoute: (...args) => callOperation("DELETE /v1/convai/agents/{agent_id}/drafts", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/convai/agents/{agent_id}/drafts">)),
    ListEnvironmentVariables: (...args) => callOperation("GET /v1/convai/environment-variables", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/environment-variables">)),
    CreateEnvironmentVariable: (...args) => callOperation("POST /v1/convai/environment-variables", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/convai/environment-variables">)),
    GetEnvironmentVariable: (...args) => callOperation("GET /v1/convai/environment-variables/{env_var_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/convai/environment-variables/{env_var_id}">)),
    UpdateEnvironmentVariable: (...args) => callOperation("PATCH /v1/convai/environment-variables/{env_var_id}", ...(args as ElevenLabsFullApiOperationArgs<"PATCH /v1/convai/environment-variables/{env_var_id}">)),
  };
}
