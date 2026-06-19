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
export const RingCentralVoiceApiQueuesOperationKeys = [
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates",
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates",
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}",
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup",
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone",
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup",
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive"
] as const;
export type RingCentralVoiceApiQueuesOperationKey = typeof RingCentralVoiceApiQueuesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiQueuesOperationPathParamMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue };
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiQueuesOperationRequestMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates">;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates">;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}">;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup">;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone">;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive">;
}

export interface RingCentralVoiceApiQueuesGeneratedClient {
  GetGateList(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates"]>;
  CreateGate(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates"]>;
  DeleteGate(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}"]>;
  GetGate(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}"]>;
  UpdateGate(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}"]>;
  AssignGateToPriorityGroup(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup"]>;
  CloneGate(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone"]>;
  MoveGateToGroup(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup"]>;
  SetGateIsActive(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive"]>;
}

export const RingCentralVoiceApiQueuesGeneratedFunctionNames = [
  "GetGateList",
  "CreateGate",
  "DeleteGate",
  "GetGate",
  "UpdateGate",
  "AssignGateToPriorityGroup",
  "CloneGate",
  "MoveGateToGroup",
  "SetGateIsActive"
] as const satisfies readonly (keyof RingCentralVoiceApiQueuesGeneratedClient)[];

export function createRingCentralVoiceApiQueuesGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiQueuesGeneratedClient {
  return {
    GetGateList: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates">)),
    CreateGate: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates">)),
    DeleteGate: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}">)),
    GetGate: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}">)),
    UpdateGate: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}">)),
    AssignGateToPriorityGroup: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/assignGateToPriorityGroup">)),
    CloneGate: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/clone">)),
    MoveGateToGroup: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/moveToGroup">)),
    SetGateIsActive: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/setIsActive">)),
  };
}
