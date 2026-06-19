// Generated endpoint chunk for RingCentralVoiceApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralVoiceGeneratedOperationCaller,
  RingCentralVoiceApiOperationArgs,
  RingCentralVoiceApiOperationInput,
  RingCentralVoiceApiPathParamValue,
} from "../../voice-api-client.generated.js";
import type { RingCentralVoiceApiOperationResponseMap } from "../../voice-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralVoiceApiAgentsOperationKeys = [
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents",
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents",
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents",
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}",
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents",
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents",
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}"
] as const;
export type RingCentralVoiceApiAgentsOperationKey = typeof RingCentralVoiceApiAgentsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiAgentsOperationPathParamMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue };
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue; "agentId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue; "agentId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue; "agentId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue; "agentId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiAgentsOperationRequestMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents">;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents">;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}">;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents">;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents">;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}">;
}

export interface RingCentralVoiceApiAgentsGeneratedClient {
  GetAgentList(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents"]>;
  CreateAgent(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents"]>;
  UpdateAgents(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents"]>;
  DeleteAgent(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}"]>;
  GetAgent(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}"]>;
  UpdateAgent(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}"]>;
  AssignAgentsToGate(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents"]>;
  GetAssignedAgentsForGate(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents"]>;
  UnassignAgentFromGate(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}"]>;
}

export const RingCentralVoiceApiAgentsGeneratedFunctionNames = [
  "GetAgentList",
  "CreateAgent",
  "UpdateAgents",
  "DeleteAgent",
  "GetAgent",
  "UpdateAgent",
  "AssignAgentsToGate",
  "GetAssignedAgentsForGate",
  "UnassignAgentFromGate"
] as const satisfies readonly (keyof RingCentralVoiceApiAgentsGeneratedClient)[];

export function createRingCentralVoiceApiAgentsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiAgentsGeneratedClient {
  return {
    GetAgentList: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents">)),
    CreateAgent: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents">)),
    UpdateAgents: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents">)),
    DeleteAgent: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}">)),
    GetAgent: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}">)),
    UpdateAgent: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/agents/{agentId}">)),
    AssignAgentsToGate: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignAgents">)),
    GetAssignedAgentsForGate: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignedAgents">)),
    UnassignAgentFromGate: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/unassignAgent/{agentId}">)),
  };
}
