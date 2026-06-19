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
export const RingCentralVoiceApiAgentAccessOperationKeys = [
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}",
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin"
] as const;
export type RingCentralVoiceApiAgentAccessOperationKey = typeof RingCentralVoiceApiAgentAccessOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiAgentAccessOperationPathParamMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}": { "accountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin": { "accountId": RingCentralVoiceApiPathParamValue; "gateGroupId": RingCentralVoiceApiPathParamValue; "gateId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiAgentAccessOperationRequestMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}">;
  "GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin">;
}

export interface RingCentralVoiceApiAgentAccessGeneratedClient {
  GetLoggedInAgentsByAgentGroupPerQueue(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}"]>;
  GetGatesAgentsLoggedInto(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin"]>;
}

export const RingCentralVoiceApiAgentAccessGeneratedFunctionNames = [
  "GetLoggedInAgentsByAgentGroupPerQueue",
  "GetGatesAgentsLoggedInto"
] as const satisfies readonly (keyof RingCentralVoiceApiAgentAccessGeneratedClient)[];

export function createRingCentralVoiceApiAgentAccessGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiAgentAccessGeneratedClient {
  return {
    GetLoggedInAgentsByAgentGroupPerQueue: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/agentGroups/{agentGroupId}/gateGroups/{gateGroupId}/gates/{gateId}">)),
    GetGatesAgentsLoggedInto: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/gateGroups/{gateGroupId}/gates/{gateId}/gateAgentAccessLogin">)),
  };
}
