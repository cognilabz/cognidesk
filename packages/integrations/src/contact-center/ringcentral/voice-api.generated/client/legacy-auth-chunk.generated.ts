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
export const RingCentralVoiceApiLegacyAuthOperationKeys = [
  "GET /voice/api/v1/admin/token",
  "POST /voice/api/v1/admin/token",
  "DELETE /voice/api/v1/admin/token/{token}",
  "POST /voice/api/v1/auth/login"
] as const;
export type RingCentralVoiceApiLegacyAuthOperationKey = typeof RingCentralVoiceApiLegacyAuthOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiLegacyAuthOperationPathParamMap {
  "GET /voice/api/v1/admin/token": {};
  "POST /voice/api/v1/admin/token": {};
  "DELETE /voice/api/v1/admin/token/{token}": { "token": RingCentralVoiceApiPathParamValue };
  "POST /voice/api/v1/auth/login": {};
}

export interface RingCentralVoiceApiLegacyAuthOperationRequestMap {
  "GET /voice/api/v1/admin/token": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/token">;
  "POST /voice/api/v1/admin/token": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/token">;
  "DELETE /voice/api/v1/admin/token/{token}": RingCentralVoiceApiOperationInput<"DELETE /voice/api/v1/admin/token/{token}">;
  "POST /voice/api/v1/auth/login": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/auth/login">;
}

export interface RingCentralVoiceApiLegacyAuthGeneratedClient {
  GetApiTokensForLoggedInUser(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/token">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/token"]>;
  CreateApiTokenForLoggedInUser(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/token">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/token"]>;
  RemoveApiToken(...args: RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/token/{token}">): Promise<RingCentralVoiceApiOperationResponseMap["DELETE /voice/api/v1/admin/token/{token}"]>;
  DoLogin(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/auth/login">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/auth/login"]>;
}

export const RingCentralVoiceApiLegacyAuthGeneratedFunctionNames = [
  "GetApiTokensForLoggedInUser",
  "CreateApiTokenForLoggedInUser",
  "RemoveApiToken",
  "DoLogin"
] as const satisfies readonly (keyof RingCentralVoiceApiLegacyAuthGeneratedClient)[];

export function createRingCentralVoiceApiLegacyAuthGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiLegacyAuthGeneratedClient {
  return {
    GetApiTokensForLoggedInUser: (...args) => callOperation("GET /voice/api/v1/admin/token", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/token">)),
    CreateApiTokenForLoggedInUser: (...args) => callOperation("POST /voice/api/v1/admin/token", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/token">)),
    RemoveApiToken: (...args) => callOperation("DELETE /voice/api/v1/admin/token/{token}", ...(args as RingCentralVoiceApiOperationArgs<"DELETE /voice/api/v1/admin/token/{token}">)),
    DoLogin: (...args) => callOperation("POST /voice/api/v1/auth/login", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/auth/login">)),
  };
}
