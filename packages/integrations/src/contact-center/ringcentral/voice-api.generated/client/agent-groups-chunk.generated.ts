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
export const RingCentralVoiceApiAgentGroupsOperationKeys = [
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups",
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups",
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}",
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}"
] as const;
export type RingCentralVoiceApiAgentGroupsOperationKey = typeof RingCentralVoiceApiAgentGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiAgentGroupsOperationPathParamMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups": { "accountId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups": { "accountId": RingCentralVoiceApiPathParamValue };
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiAgentGroupsOperationRequestMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups">;
  "POST /voice/api/v1/admin/accounts/{accountId}/agentGroups": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/agentGroups">;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}">;
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}">;
}

export interface RingCentralVoiceApiAgentGroupsGeneratedClient {
  GetAgentGroupList(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/agentGroups"]>;
  CreateAgentGroup(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/agentGroups">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/agentGroups"]>;
  DeleteAgentGroup(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}"]>;
  GetAgentGroup(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}"]>;
  UpdateAgentGroup(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}"]>;
}

export const RingCentralVoiceApiAgentGroupsGeneratedFunctionNames = [
  "GetAgentGroupList",
  "CreateAgentGroup",
  "DeleteAgentGroup",
  "GetAgentGroup",
  "UpdateAgentGroup"
] as const satisfies readonly (keyof RingCentralVoiceApiAgentGroupsGeneratedClient)[];

export function createRingCentralVoiceApiAgentGroupsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiAgentGroupsGeneratedClient {
  return {
    GetAgentGroupList: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/agentGroups", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups">)),
    CreateAgentGroup: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/agentGroups", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/agentGroups">)),
    DeleteAgentGroup: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}">)),
    GetAgentGroup: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}">)),
    UpdateAgentGroup: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}">)),
  };
}
