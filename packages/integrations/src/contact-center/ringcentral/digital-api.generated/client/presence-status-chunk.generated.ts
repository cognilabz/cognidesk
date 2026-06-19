// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiPresenceStatusOperationKeys = [
  "GET /presence_status",
  "POST /presence_status",
  "DELETE /presence_status/{presenceStatusId}",
  "GET /presence_status/{presenceStatusId}",
  "PUT /presence_status/{presenceStatusId}"
] as const;
export type RingCentralDigitalApiPresenceStatusOperationKey = typeof RingCentralDigitalApiPresenceStatusOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiPresenceStatusOperationPathParamMap {
  "GET /presence_status": {};
  "POST /presence_status": {};
  "DELETE /presence_status/{presenceStatusId}": { "presenceStatusId": RingCentralDigitalApiPathParamValue };
  "GET /presence_status/{presenceStatusId}": { "presenceStatusId": RingCentralDigitalApiPathParamValue };
  "PUT /presence_status/{presenceStatusId}": { "presenceStatusId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiPresenceStatusOperationRequestMap {
  "GET /presence_status": RingCentralDigitalApiOperationInput<"GET /presence_status">;
  "POST /presence_status": RingCentralDigitalApiOperationInput<"POST /presence_status">;
  "DELETE /presence_status/{presenceStatusId}": RingCentralDigitalApiOperationInput<"DELETE /presence_status/{presenceStatusId}">;
  "GET /presence_status/{presenceStatusId}": RingCentralDigitalApiOperationInput<"GET /presence_status/{presenceStatusId}">;
  "PUT /presence_status/{presenceStatusId}": RingCentralDigitalApiOperationInput<"PUT /presence_status/{presenceStatusId}">;
}

export interface RingCentralDigitalApiPresenceStatusGeneratedClient {
  GetAllPresenceStatus(...args: RingCentralDigitalApiOperationArgs<"GET /presence_status">): Promise<RingCentralDigitalApiOperationResponseMap["GET /presence_status"]>;
  CreatePresenceStatus(...args: RingCentralDigitalApiOperationArgs<"POST /presence_status">): Promise<RingCentralDigitalApiOperationResponseMap["POST /presence_status"]>;
  DeletePresenceStatus(...args: RingCentralDigitalApiOperationArgs<"DELETE /presence_status/{presenceStatusId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /presence_status/{presenceStatusId}"]>;
  GetPresenceStatus(...args: RingCentralDigitalApiOperationArgs<"GET /presence_status/{presenceStatusId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /presence_status/{presenceStatusId}"]>;
  UpdatePresenceStatus(...args: RingCentralDigitalApiOperationArgs<"PUT /presence_status/{presenceStatusId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /presence_status/{presenceStatusId}"]>;
}

export const RingCentralDigitalApiPresenceStatusGeneratedFunctionNames = [
  "GetAllPresenceStatus",
  "CreatePresenceStatus",
  "DeletePresenceStatus",
  "GetPresenceStatus",
  "UpdatePresenceStatus"
] as const satisfies readonly (keyof RingCentralDigitalApiPresenceStatusGeneratedClient)[];

export function createRingCentralDigitalApiPresenceStatusGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiPresenceStatusGeneratedClient {
  return {
    GetAllPresenceStatus: (...args) => callOperation("GET /presence_status", ...(args as RingCentralDigitalApiOperationArgs<"GET /presence_status">)),
    CreatePresenceStatus: (...args) => callOperation("POST /presence_status", ...(args as RingCentralDigitalApiOperationArgs<"POST /presence_status">)),
    DeletePresenceStatus: (...args) => callOperation("DELETE /presence_status/{presenceStatusId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /presence_status/{presenceStatusId}">)),
    GetPresenceStatus: (...args) => callOperation("GET /presence_status/{presenceStatusId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /presence_status/{presenceStatusId}">)),
    UpdatePresenceStatus: (...args) => callOperation("PUT /presence_status/{presenceStatusId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /presence_status/{presenceStatusId}">)),
  };
}
