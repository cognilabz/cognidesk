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
export const RingCentralVoiceApiDialGroupsOperationKeys = [
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups",
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups",
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren",
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}",
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents",
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents"
] as const;
export type RingCentralVoiceApiDialGroupsOperationKey = typeof RingCentralVoiceApiDialGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiDialGroupsOperationPathParamMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups": { "accountId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups": { "accountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren": { "accountId": RingCentralVoiceApiPathParamValue };
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents": { "accountId": RingCentralVoiceApiPathParamValue; "dialGroupId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiDialGroupsOperationRequestMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups">;
  "POST /voice/api/v1/admin/accounts/{accountId}/dialGroups": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/dialGroups">;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren">;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}">;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents">;
  "GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents">;
}

export interface RingCentralVoiceApiDialGroupsGeneratedClient {
  GetDialGroupListByAccount(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/dialGroups"]>;
  CreateDialGroup(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/dialGroups">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/dialGroups"]>;
  GetDialGroupListWithChildren(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren"]>;
  DeleteDialGroup(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}"]>;
  GetDialGroup(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}"]>;
  UpdateDialGroup(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}"]>;
  AssignAgentsToDialGroups(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents"]>;
  GetAgentsFromDialGroup(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents"]>;
}

export const RingCentralVoiceApiDialGroupsGeneratedFunctionNames = [
  "GetDialGroupListByAccount",
  "CreateDialGroup",
  "GetDialGroupListWithChildren",
  "DeleteDialGroup",
  "GetDialGroup",
  "UpdateDialGroup",
  "AssignAgentsToDialGroups",
  "GetAgentsFromDialGroup"
] as const satisfies readonly (keyof RingCentralVoiceApiDialGroupsGeneratedClient)[];

export function createRingCentralVoiceApiDialGroupsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiDialGroupsGeneratedClient {
  return {
    GetDialGroupListByAccount: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/dialGroups", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups">)),
    CreateDialGroup: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/dialGroups", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/dialGroups">)),
    GetDialGroupListWithChildren: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/withChildren">)),
    DeleteDialGroup: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}">)),
    GetDialGroup: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}">)),
    UpdateDialGroup: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}">)),
    AssignAgentsToDialGroups: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignAgents">)),
    GetAgentsFromDialGroup: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/dialGroups/{dialGroupId}/assignedAgents">)),
  };
}
