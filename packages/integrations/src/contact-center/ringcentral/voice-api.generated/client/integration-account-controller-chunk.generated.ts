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
export const RingCentralVoiceApiIntegrationAccountControllerOperationKeys = [
  "GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts"
] as const;
export type RingCentralVoiceApiIntegrationAccountControllerOperationKey = typeof RingCentralVoiceApiIntegrationAccountControllerOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiIntegrationAccountControllerOperationPathParamMap {
  "GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts": { "mainAccountId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiIntegrationAccountControllerOperationRequestMap {
  "GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts": RingCentralVoiceApiOperationInput<"GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts">;
}

export interface RingCentralVoiceApiIntegrationAccountControllerGeneratedClient {
  GetSubAccountsByMainAccountId(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts"]>;
}

export const RingCentralVoiceApiIntegrationAccountControllerGeneratedFunctionNames = [
  "GetSubAccountsByMainAccountId"
] as const satisfies readonly (keyof RingCentralVoiceApiIntegrationAccountControllerGeneratedClient)[];

export function createRingCentralVoiceApiIntegrationAccountControllerGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiIntegrationAccountControllerGeneratedClient {
  return {
    GetSubAccountsByMainAccountId: (...args) => callOperation("GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/integration/v1/admin/accounts/{mainAccountId}/subaccounts">)),
  };
}
