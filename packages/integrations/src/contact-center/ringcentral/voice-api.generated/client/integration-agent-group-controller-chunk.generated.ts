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
export const RingCentralVoiceApiIntegrationAgentGroupControllerOperationKeys = [
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups"
] as const;
export type RingCentralVoiceApiIntegrationAgentGroupControllerOperationKey = typeof RingCentralVoiceApiIntegrationAgentGroupControllerOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiIntegrationAgentGroupControllerOperationPathParamMap {
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups": { "subAccountId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiIntegrationAgentGroupControllerOperationRequestMap {
  "GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups": RingCentralVoiceApiOperationInput<"GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups">;
}

export interface RingCentralVoiceApiIntegrationAgentGroupControllerGeneratedClient {
  GetAgentGroups(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups"]>;
}

export const RingCentralVoiceApiIntegrationAgentGroupControllerGeneratedFunctionNames = [
  "GetAgentGroups"
] as const satisfies readonly (keyof RingCentralVoiceApiIntegrationAgentGroupControllerGeneratedClient)[];

export function createRingCentralVoiceApiIntegrationAgentGroupControllerGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiIntegrationAgentGroupControllerGeneratedClient {
  return {
    GetAgentGroups: (...args) => callOperation("GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/integration/v1/admin/accounts/{subAccountId}/agentGroups">)),
  };
}
