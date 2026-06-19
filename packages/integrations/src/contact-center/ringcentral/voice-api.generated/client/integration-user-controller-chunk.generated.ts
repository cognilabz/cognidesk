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
export const RingCentralVoiceApiIntegrationUserControllerOperationKeys = [
  "GET /voice/api/integration/v1/admin/users/{mainAccountId}"
] as const;
export type RingCentralVoiceApiIntegrationUserControllerOperationKey = typeof RingCentralVoiceApiIntegrationUserControllerOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiIntegrationUserControllerOperationPathParamMap {
  "GET /voice/api/integration/v1/admin/users/{mainAccountId}": { "mainAccountId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiIntegrationUserControllerOperationRequestMap {
  "GET /voice/api/integration/v1/admin/users/{mainAccountId}": RingCentralVoiceApiOperationInput<"GET /voice/api/integration/v1/admin/users/{mainAccountId}">;
}

export interface RingCentralVoiceApiIntegrationUserControllerGeneratedClient {
  GetUserList(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/integration/v1/admin/users/{mainAccountId}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/integration/v1/admin/users/{mainAccountId}"]>;
}

export const RingCentralVoiceApiIntegrationUserControllerGeneratedFunctionNames = [
  "GetUserList"
] as const satisfies readonly (keyof RingCentralVoiceApiIntegrationUserControllerGeneratedClient)[];

export function createRingCentralVoiceApiIntegrationUserControllerGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiIntegrationUserControllerGeneratedClient {
  return {
    GetUserList: (...args) => callOperation("GET /voice/api/integration/v1/admin/users/{mainAccountId}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/integration/v1/admin/users/{mainAccountId}">)),
  };
}
