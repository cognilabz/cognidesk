// Generated endpoint chunk for ZoomMeetingsApi.
// Do not edit by hand; refresh this generated provider package after updating provider specs.

import type {
  ZoomMeetingsGeneratedOperationCaller,
  ZoomMeetingsApiOperationArgs,
  ZoomMeetingsApiOperationInput,
  ZoomMeetingsApiPathParamValue,
} from "../../meetings-api-client.generated.js";
import type { ZoomMeetingsApiOperationResponseMap } from "../../meetings-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomMeetingsApiPACOperationKeys = [
  "GET /users/{userId}/pac"
] as const;
export type ZoomMeetingsApiPACOperationKey = typeof ZoomMeetingsApiPACOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiPACOperationPathParamMap {
  "GET /users/{userId}/pac": { "userId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiPACOperationRequestMap {
  "GET /users/{userId}/pac": ZoomMeetingsApiOperationInput<"GET /users/{userId}/pac">;
}

export interface ZoomMeetingsApiPACGeneratedClient {
  UserPACs(...args: ZoomMeetingsApiOperationArgs<"GET /users/{userId}/pac">): Promise<ZoomMeetingsApiOperationResponseMap["GET /users/{userId}/pac"]>;
}

export const ZoomMeetingsApiPACGeneratedFunctionNames = [
  "UserPACs"
] as const satisfies readonly (keyof ZoomMeetingsApiPACGeneratedClient)[];

export function createZoomMeetingsApiPACGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiPACGeneratedClient {
  return {
    UserPACs: (...args) => callOperation("GET /users/{userId}/pac", ...(args as ZoomMeetingsApiOperationArgs<"GET /users/{userId}/pac">)),
  };
}
