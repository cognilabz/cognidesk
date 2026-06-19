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
export const RingCentralVoiceApiActiveCallsOperationKeys = [
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall",
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list",
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus",
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold",
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall",
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall",
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall",
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession",
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording"
] as const;
export type RingCentralVoiceApiActiveCallsOperationKey = typeof RingCentralVoiceApiActiveCallsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiActiveCallsOperationPathParamMap {
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall": { "accountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list": { "accountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus": { "accountId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold": { "accountId": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall": { "accountId": RingCentralVoiceApiPathParamValue; "uii": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall": { "accountId": RingCentralVoiceApiPathParamValue; "uii": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall": { "accountId": RingCentralVoiceApiPathParamValue; "uii": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession": { "accountId": RingCentralVoiceApiPathParamValue; "uii": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording": { "accountId": RingCentralVoiceApiPathParamValue; "uii": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiActiveCallsOperationRequestMap {
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall">;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list">;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus">;
  "GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold">;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall">;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall">;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall">;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession">;
  "POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording">;
}

export interface RingCentralVoiceApiActiveCallsGeneratedClient {
  CreateManualAgentCall(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall"]>;
  GetProductActiveCallsListRequest(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list"]>;
  CheckQueueStatus(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus"]>;
  CheckQueueThreshold(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold"]>;
  AddSessionToCall(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall"]>;
  DispositionCall(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall"]>;
  HangupCall(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall"]>;
  HangupSession(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession"]>;
  ToggleCallRecording(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording"]>;
}

export const RingCentralVoiceApiActiveCallsGeneratedFunctionNames = [
  "CreateManualAgentCall",
  "GetProductActiveCallsListRequest",
  "CheckQueueStatus",
  "CheckQueueThreshold",
  "AddSessionToCall",
  "DispositionCall",
  "HangupCall",
  "HangupSession",
  "ToggleCallRecording"
] as const satisfies readonly (keyof RingCentralVoiceApiActiveCallsGeneratedClient)[];

export function createRingCentralVoiceApiActiveCallsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiActiveCallsGeneratedClient {
  return {
    CreateManualAgentCall: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/createManualAgentCall">)),
    GetProductActiveCallsListRequest: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/list">)),
    CheckQueueStatus: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueStatus">)),
    CheckQueueThreshold: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/activeCalls/prerouteChecks/checkQueueThreshold">)),
    AddSessionToCall: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/addSessionToCall">)),
    DispositionCall: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/dispositionCall">)),
    HangupCall: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupCall">)),
    HangupSession: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/hangupSession">)),
    ToggleCallRecording: (...args) => callOperation("POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/accounts/{accountId}/activeCalls/{uii}/toggleCallRecording">)),
  };
}
