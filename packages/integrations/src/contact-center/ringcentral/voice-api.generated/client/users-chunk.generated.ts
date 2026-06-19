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
export const RingCentralVoiceApiUsersOperationKeys = [
  "GET /voice/api/v1/admin/users",
  "POST /voice/api/v1/admin/users"
] as const;
export type RingCentralVoiceApiUsersOperationKey = typeof RingCentralVoiceApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiUsersOperationPathParamMap {
  "GET /voice/api/v1/admin/users": {};
  "POST /voice/api/v1/admin/users": {};
}

export interface RingCentralVoiceApiUsersOperationRequestMap {
  "GET /voice/api/v1/admin/users": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/users">;
  "POST /voice/api/v1/admin/users": RingCentralVoiceApiOperationInput<"POST /voice/api/v1/admin/users">;
}

export interface RingCentralVoiceApiUsersGeneratedClient {
  ListAllUsers(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/users">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/users"]>;
  CreateUser(...args: RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/users">): Promise<RingCentralVoiceApiOperationResponseMap["POST /voice/api/v1/admin/users"]>;
}

export const RingCentralVoiceApiUsersGeneratedFunctionNames = [
  "ListAllUsers",
  "CreateUser"
] as const satisfies readonly (keyof RingCentralVoiceApiUsersGeneratedClient)[];

export function createRingCentralVoiceApiUsersGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiUsersGeneratedClient {
  return {
    ListAllUsers: (...args) => callOperation("GET /voice/api/v1/admin/users", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/users">)),
    CreateUser: (...args) => callOperation("POST /voice/api/v1/admin/users", ...(args as RingCentralVoiceApiOperationArgs<"POST /voice/api/v1/admin/users">)),
  };
}
