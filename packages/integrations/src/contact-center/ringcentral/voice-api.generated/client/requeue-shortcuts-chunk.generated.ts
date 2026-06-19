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
export const RingCentralVoiceApiRequeueShortcutsOperationKeys = [
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts",
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts",
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts",
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}",
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}",
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}"
] as const;
export type RingCentralVoiceApiRequeueShortcutsOperationKey = typeof RingCentralVoiceApiRequeueShortcutsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiRequeueShortcutsOperationPathParamMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue; "requeueShortcutId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue; "requeueShortcutId": RingCentralVoiceApiPathParamValue };
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue; "requeueShortcutId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiRequeueShortcutsOperationRequestMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts">;
  "POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts">;
  "DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}">;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}">;
  "PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}">;
}

export interface RingCentralVoiceApiRequeueShortcutsGeneratedClient {
  GetGateRequeueShortcutList(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts"]>;
  CreateGateRequeueShortcut(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts"]>;
  CreateGateRequeueShortcuts(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts"]>;
  DeleteGateRequeueShortcut(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}"]>;
  GetGateRequeueShortcut(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}"]>;
  UpdateGateRequeueShortcut(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}"]>;
}

export const RingCentralVoiceApiRequeueShortcutsGeneratedFunctionNames = [
  "GetGateRequeueShortcutList",
  "CreateGateRequeueShortcut",
  "CreateGateRequeueShortcuts",
  "DeleteGateRequeueShortcut",
  "GetGateRequeueShortcut",
  "UpdateGateRequeueShortcut"
] as const satisfies readonly (keyof RingCentralVoiceApiRequeueShortcutsGeneratedClient)[];

export function createRingCentralVoiceApiRequeueShortcutsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiRequeueShortcutsGeneratedClient {
  return {
    GetGateRequeueShortcutList: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts">)),
    CreateGateRequeueShortcut: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts">)),
    CreateGateRequeueShortcuts: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts">)),
    DeleteGateRequeueShortcut: (...args) => callOperation("DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}">)),
    GetGateRequeueShortcut: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}">)),
    UpdateGateRequeueShortcut: (...args) => callOperation("PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/requeueShortcuts/{requeueShortcutId}">)),
  };
}
