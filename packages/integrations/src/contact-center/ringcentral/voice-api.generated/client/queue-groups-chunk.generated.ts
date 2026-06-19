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
export const RingCentralVoiceApiQueueGroupsOperationKeys = [
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren",
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData",
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}",
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}"
] as const;
export type RingCentralVoiceApiQueueGroupsOperationKey = typeof RingCentralVoiceApiQueueGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiQueueGroupsOperationPathParamMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren": { "accountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData": { "accountId": RingCentralVoiceApiPathParamValue };
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiQueueGroupsOperationRequestMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren">;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData">;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}">;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}">;
}

export interface RingCentralVoiceApiQueueGroupsGeneratedClient {
  GetGateGroupListWithChildren(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren"]>;
  GetGateGroupListWithChildrenAdditionalData(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData"]>;
  DeleteGateGroup(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}"]>;
  GetGateGroup(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}"]>;
  UpdateGateGroup(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}"]>;
}

export const RingCentralVoiceApiQueueGroupsGeneratedFunctionNames = [
  "GetGateGroupListWithChildren",
  "GetGateGroupListWithChildrenAdditionalData",
  "DeleteGateGroup",
  "GetGateGroup",
  "UpdateGateGroup"
] as const satisfies readonly (keyof RingCentralVoiceApiQueueGroupsGeneratedClient)[];

export function createRingCentralVoiceApiQueueGroupsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiQueueGroupsGeneratedClient {
  return {
    GetGateGroupListWithChildren: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren">)),
    GetGateGroupListWithChildrenAdditionalData: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/withChildren/additionalData">)),
    DeleteGateGroup: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}">)),
    GetGateGroup: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}">)),
    UpdateGateGroup: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}">)),
  };
}
