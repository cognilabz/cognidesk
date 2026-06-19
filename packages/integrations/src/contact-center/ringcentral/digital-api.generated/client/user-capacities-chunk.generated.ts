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
export const RingCentralDigitalApiUserCapacitiesOperationKeys = [
  "GET /user_capacities",
  "POST /user_capacities",
  "DELETE /user_capacities/{userCapacityId}",
  "GET /user_capacities/{userCapacityId}",
  "PUT /user_capacities/{userCapacityId}"
] as const;
export type RingCentralDigitalApiUserCapacitiesOperationKey = typeof RingCentralDigitalApiUserCapacitiesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiUserCapacitiesOperationPathParamMap {
  "GET /user_capacities": {};
  "POST /user_capacities": {};
  "DELETE /user_capacities/{userCapacityId}": { "userCapacityId": RingCentralDigitalApiPathParamValue };
  "GET /user_capacities/{userCapacityId}": { "userCapacityId": RingCentralDigitalApiPathParamValue };
  "PUT /user_capacities/{userCapacityId}": { "userCapacityId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiUserCapacitiesOperationRequestMap {
  "GET /user_capacities": RingCentralDigitalApiOperationInput<"GET /user_capacities">;
  "POST /user_capacities": RingCentralDigitalApiOperationInput<"POST /user_capacities">;
  "DELETE /user_capacities/{userCapacityId}": RingCentralDigitalApiOperationInput<"DELETE /user_capacities/{userCapacityId}">;
  "GET /user_capacities/{userCapacityId}": RingCentralDigitalApiOperationInput<"GET /user_capacities/{userCapacityId}">;
  "PUT /user_capacities/{userCapacityId}": RingCentralDigitalApiOperationInput<"PUT /user_capacities/{userCapacityId}">;
}

export interface RingCentralDigitalApiUserCapacitiesGeneratedClient {
  GetAllUserCapacities(...args: RingCentralDigitalApiOperationArgs<"GET /user_capacities">): Promise<RingCentralDigitalApiOperationResponseMap["GET /user_capacities"]>;
  CreateUserCapacity(...args: RingCentralDigitalApiOperationArgs<"POST /user_capacities">): Promise<RingCentralDigitalApiOperationResponseMap["POST /user_capacities"]>;
  DeleteUserCapacity(...args: RingCentralDigitalApiOperationArgs<"DELETE /user_capacities/{userCapacityId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /user_capacities/{userCapacityId}"]>;
  GetUserCapacity(...args: RingCentralDigitalApiOperationArgs<"GET /user_capacities/{userCapacityId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /user_capacities/{userCapacityId}"]>;
  UpdateUserCapacity(...args: RingCentralDigitalApiOperationArgs<"PUT /user_capacities/{userCapacityId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /user_capacities/{userCapacityId}"]>;
}

export const RingCentralDigitalApiUserCapacitiesGeneratedFunctionNames = [
  "GetAllUserCapacities",
  "CreateUserCapacity",
  "DeleteUserCapacity",
  "GetUserCapacity",
  "UpdateUserCapacity"
] as const satisfies readonly (keyof RingCentralDigitalApiUserCapacitiesGeneratedClient)[];

export function createRingCentralDigitalApiUserCapacitiesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiUserCapacitiesGeneratedClient {
  return {
    GetAllUserCapacities: (...args) => callOperation("GET /user_capacities", ...(args as RingCentralDigitalApiOperationArgs<"GET /user_capacities">)),
    CreateUserCapacity: (...args) => callOperation("POST /user_capacities", ...(args as RingCentralDigitalApiOperationArgs<"POST /user_capacities">)),
    DeleteUserCapacity: (...args) => callOperation("DELETE /user_capacities/{userCapacityId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /user_capacities/{userCapacityId}">)),
    GetUserCapacity: (...args) => callOperation("GET /user_capacities/{userCapacityId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /user_capacities/{userCapacityId}">)),
    UpdateUserCapacity: (...args) => callOperation("PUT /user_capacities/{userCapacityId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /user_capacities/{userCapacityId}">)),
  };
}
