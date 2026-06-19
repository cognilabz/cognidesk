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
export const RingCentralVoiceApiRingCentralAuthOperationKeys = [
  "POST /api/auth/login/rc/accesstoken"
] as const;
export type RingCentralVoiceApiRingCentralAuthOperationKey = typeof RingCentralVoiceApiRingCentralAuthOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiRingCentralAuthOperationPathParamMap {
  "POST /api/auth/login/rc/accesstoken": {};
}

export interface RingCentralVoiceApiRingCentralAuthOperationRequestMap {
  "POST /api/auth/login/rc/accesstoken": RingCentralVoiceApiOperationInput<"POST /api/auth/login/rc/accesstoken">;
}

export interface RingCentralVoiceApiRingCentralAuthGeneratedClient {
  LoginWithRcAccessToken(...args: RingCentralVoiceApiOperationArgs<"POST /api/auth/login/rc/accesstoken">): Promise<RingCentralVoiceApiOperationResponseMap["POST /api/auth/login/rc/accesstoken"]>;
}

export const RingCentralVoiceApiRingCentralAuthGeneratedFunctionNames = [
  "LoginWithRcAccessToken"
] as const satisfies readonly (keyof RingCentralVoiceApiRingCentralAuthGeneratedClient)[];

export function createRingCentralVoiceApiRingCentralAuthGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiRingCentralAuthGeneratedClient {
  return {
    LoginWithRcAccessToken: (...args) => callOperation("POST /api/auth/login/rc/accesstoken", ...(args as RingCentralVoiceApiOperationArgs<"POST /api/auth/login/rc/accesstoken">)),
  };
}
