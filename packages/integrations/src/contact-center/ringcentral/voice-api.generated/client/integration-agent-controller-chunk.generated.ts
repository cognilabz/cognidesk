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
export const RingCentralVoiceApiIntegrationAgentControllerOperationKeys = [
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents"
] as const;
export type RingCentralVoiceApiIntegrationAgentControllerOperationKey = typeof RingCentralVoiceApiIntegrationAgentControllerOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiIntegrationAgentControllerOperationPathParamMap {
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents": { "subAccountId": RingCentralVoiceApiPathParamValue; "agentGroupId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiIntegrationAgentControllerOperationRequestMap {
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents": RingCentralVoiceApiOperationInput<"GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents">;
}

export interface RingCentralVoiceApiIntegrationAgentControllerGeneratedClient {
  GetAgentList2(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents"]>;
}

export const RingCentralVoiceApiIntegrationAgentControllerGeneratedFunctionNames = [
  "GetAgentList2"
] as const satisfies readonly (keyof RingCentralVoiceApiIntegrationAgentControllerGeneratedClient)[];

export function createRingCentralVoiceApiIntegrationAgentControllerGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiIntegrationAgentControllerGeneratedClient {
  return {
    GetAgentList2: (...args) => callOperation("GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups/{agentGroupId}/agents">)),
  };
}
