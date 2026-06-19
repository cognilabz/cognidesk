// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiAgentStatusOperationKeys = [
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents",
  "agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk",
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}",
  "agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}"
] as const;
export type EightByEightContactCenterApiAgentStatusOperationKey = typeof EightByEightContactCenterApiAgentStatusOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiAgentStatusOperationPathParamMap {
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents": { "tenantId": EightByEightContactCenterApiPathParamValue };
  "agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk": { "tenantId": EightByEightContactCenterApiPathParamValue };
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}": { "tenantId": EightByEightContactCenterApiPathParamValue; "agentId": EightByEightContactCenterApiPathParamValue };
  "agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}": { "tenantId": EightByEightContactCenterApiPathParamValue; "agentId": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiAgentStatusOperationRequestMap {
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents": EightByEightContactCenterApiOperationInput<"agent-status:GET /tenants/{tenantId}/agentstatus/agents">;
  "agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk": EightByEightContactCenterApiOperationInput<"agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk">;
  "agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}": EightByEightContactCenterApiOperationInput<"agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}">;
  "agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}": EightByEightContactCenterApiOperationInput<"agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}">;
}

export interface EightByEightContactCenterApiAgentStatusGeneratedClient {
  Getagentsstatus(...args: EightByEightContactCenterApiOperationArgs<"agent-status:GET /tenants/{tenantId}/agentstatus/agents">): Promise<EightByEightContactCenterApiOperationResponseMap["agent-status:GET /tenants/{tenantId}/agentstatus/agents"]>;
  Setagentsstatuses(...args: EightByEightContactCenterApiOperationArgs<"agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk">): Promise<EightByEightContactCenterApiOperationResponseMap["agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk"]>;
  Getagentstatus(...args: EightByEightContactCenterApiOperationArgs<"agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}">): Promise<EightByEightContactCenterApiOperationResponseMap["agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}"]>;
  Setagentstatus(...args: EightByEightContactCenterApiOperationArgs<"agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}">): Promise<EightByEightContactCenterApiOperationResponseMap["agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}"]>;
}

export const EightByEightContactCenterApiAgentStatusGeneratedFunctionNames = [
  "Getagentsstatus",
  "Setagentsstatuses",
  "Getagentstatus",
  "Setagentstatus"
] as const satisfies readonly (keyof EightByEightContactCenterApiAgentStatusGeneratedClient)[];

export function createEightByEightContactCenterApiAgentStatusGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiAgentStatusGeneratedClient {
  return {
    Getagentsstatus: (...args) => callOperation("agent-status:GET /tenants/{tenantId}/agentstatus/agents", ...(args as EightByEightContactCenterApiOperationArgs<"agent-status:GET /tenants/{tenantId}/agentstatus/agents">)),
    Setagentsstatuses: (...args) => callOperation("agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk", ...(args as EightByEightContactCenterApiOperationArgs<"agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk">)),
    Getagentstatus: (...args) => callOperation("agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}", ...(args as EightByEightContactCenterApiOperationArgs<"agent-status:GET /tenants/{tenantId}/agentstatus/agents/{agentId}">)),
    Setagentstatus: (...args) => callOperation("agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}", ...(args as EightByEightContactCenterApiOperationArgs<"agent-status:PUT /tenants/{tenantId}/agentstatus/agents/{agentId}">)),
  };
}
