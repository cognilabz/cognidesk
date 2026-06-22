// Generated endpoint chunk for ZoomMeetingsApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomMeetingsGeneratedOperationCaller,
  ZoomMeetingsApiOperationArgs,
  ZoomMeetingsApiOperationInput,
  ZoomMeetingsApiPathParamValue,
} from "../../meetings-api-client.generated.js";
import type { ZoomMeetingsApiOperationResponseMap } from "../../meetings-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomMeetingsApiTSPOperationKeys = [
  "GET /tsp",
  "PATCH /tsp",
  "GET /users/{userId}/tsp",
  "POST /users/{userId}/tsp",
  "PATCH /users/{userId}/tsp/settings",
  "GET /users/{userId}/tsp/{tspId}",
  "DELETE /users/{userId}/tsp/{tspId}",
  "PATCH /users/{userId}/tsp/{tspId}"
] as const;
export type ZoomMeetingsApiTSPOperationKey = typeof ZoomMeetingsApiTSPOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiTSPOperationPathParamMap {
  "GET /tsp": {};
  "PATCH /tsp": {};
  "GET /users/{userId}/tsp": { "userId": ZoomMeetingsApiPathParamValue };
  "POST /users/{userId}/tsp": { "userId": ZoomMeetingsApiPathParamValue };
  "PATCH /users/{userId}/tsp/settings": { "userId": ZoomMeetingsApiPathParamValue };
  "GET /users/{userId}/tsp/{tspId}": { "userId": ZoomMeetingsApiPathParamValue; "tspId": ZoomMeetingsApiPathParamValue };
  "DELETE /users/{userId}/tsp/{tspId}": { "userId": ZoomMeetingsApiPathParamValue; "tspId": ZoomMeetingsApiPathParamValue };
  "PATCH /users/{userId}/tsp/{tspId}": { "userId": ZoomMeetingsApiPathParamValue; "tspId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiTSPOperationRequestMap {
  "GET /tsp": ZoomMeetingsApiOperationInput<"GET /tsp">;
  "PATCH /tsp": ZoomMeetingsApiOperationInput<"PATCH /tsp">;
  "GET /users/{userId}/tsp": ZoomMeetingsApiOperationInput<"GET /users/{userId}/tsp">;
  "POST /users/{userId}/tsp": ZoomMeetingsApiOperationInput<"POST /users/{userId}/tsp">;
  "PATCH /users/{userId}/tsp/settings": ZoomMeetingsApiOperationInput<"PATCH /users/{userId}/tsp/settings">;
  "GET /users/{userId}/tsp/{tspId}": ZoomMeetingsApiOperationInput<"GET /users/{userId}/tsp/{tspId}">;
  "DELETE /users/{userId}/tsp/{tspId}": ZoomMeetingsApiOperationInput<"DELETE /users/{userId}/tsp/{tspId}">;
  "PATCH /users/{userId}/tsp/{tspId}": ZoomMeetingsApiOperationInput<"PATCH /users/{userId}/tsp/{tspId}">;
}

export interface ZoomMeetingsApiTSPGeneratedClient {
  Tsp(...args: ZoomMeetingsApiOperationArgs<"GET /tsp">): Promise<ZoomMeetingsApiOperationResponseMap["GET /tsp"]>;
  TspUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /tsp">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /tsp"]>;
  UserTSPs(...args: ZoomMeetingsApiOperationArgs<"GET /users/{userId}/tsp">): Promise<ZoomMeetingsApiOperationResponseMap["GET /users/{userId}/tsp"]>;
  UserTSPCreate(...args: ZoomMeetingsApiOperationArgs<"POST /users/{userId}/tsp">): Promise<ZoomMeetingsApiOperationResponseMap["POST /users/{userId}/tsp"]>;
  TspUrlUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /users/{userId}/tsp/settings">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /users/{userId}/tsp/settings"]>;
  UserTSP(...args: ZoomMeetingsApiOperationArgs<"GET /users/{userId}/tsp/{tspId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /users/{userId}/tsp/{tspId}"]>;
  UserTSPDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /users/{userId}/tsp/{tspId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /users/{userId}/tsp/{tspId}"]>;
  UserTSPUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /users/{userId}/tsp/{tspId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /users/{userId}/tsp/{tspId}"]>;
}

export const ZoomMeetingsApiTSPGeneratedFunctionNames = [
  "Tsp",
  "TspUpdate",
  "UserTSPs",
  "UserTSPCreate",
  "TspUrlUpdate",
  "UserTSP",
  "UserTSPDelete",
  "UserTSPUpdate"
] as const satisfies readonly (keyof ZoomMeetingsApiTSPGeneratedClient)[];

export function createZoomMeetingsApiTSPGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiTSPGeneratedClient {
  return {
    Tsp: (...args) => callOperation("GET /tsp", ...(args as ZoomMeetingsApiOperationArgs<"GET /tsp">)),
    TspUpdate: (...args) => callOperation("PATCH /tsp", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /tsp">)),
    UserTSPs: (...args) => callOperation("GET /users/{userId}/tsp", ...(args as ZoomMeetingsApiOperationArgs<"GET /users/{userId}/tsp">)),
    UserTSPCreate: (...args) => callOperation("POST /users/{userId}/tsp", ...(args as ZoomMeetingsApiOperationArgs<"POST /users/{userId}/tsp">)),
    TspUrlUpdate: (...args) => callOperation("PATCH /users/{userId}/tsp/settings", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /users/{userId}/tsp/settings">)),
    UserTSP: (...args) => callOperation("GET /users/{userId}/tsp/{tspId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /users/{userId}/tsp/{tspId}">)),
    UserTSPDelete: (...args) => callOperation("DELETE /users/{userId}/tsp/{tspId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /users/{userId}/tsp/{tspId}">)),
    UserTSPUpdate: (...args) => callOperation("PATCH /users/{userId}/tsp/{tspId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /users/{userId}/tsp/{tspId}">)),
  };
}
