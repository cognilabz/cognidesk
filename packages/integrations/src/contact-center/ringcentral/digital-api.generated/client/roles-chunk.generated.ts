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
export const RingCentralDigitalApiRolesOperationKeys = [
  "GET /roles",
  "POST /roles",
  "GET /roles/{roleId}",
  "PUT /roles/{roleId}"
] as const;
export type RingCentralDigitalApiRolesOperationKey = typeof RingCentralDigitalApiRolesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiRolesOperationPathParamMap {
  "GET /roles": {};
  "POST /roles": {};
  "GET /roles/{roleId}": { "roleId": RingCentralDigitalApiPathParamValue };
  "PUT /roles/{roleId}": { "roleId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiRolesOperationRequestMap {
  "GET /roles": RingCentralDigitalApiOperationInput<"GET /roles">;
  "POST /roles": RingCentralDigitalApiOperationInput<"POST /roles">;
  "GET /roles/{roleId}": RingCentralDigitalApiOperationInput<"GET /roles/{roleId}">;
  "PUT /roles/{roleId}": RingCentralDigitalApiOperationInput<"PUT /roles/{roleId}">;
}

export interface RingCentralDigitalApiRolesGeneratedClient {
  GetAllRoles(...args: RingCentralDigitalApiOperationArgs<"GET /roles">): Promise<RingCentralDigitalApiOperationResponseMap["GET /roles"]>;
  CreateRole(...args: RingCentralDigitalApiOperationArgs<"POST /roles">): Promise<RingCentralDigitalApiOperationResponseMap["POST /roles"]>;
  GetRole(...args: RingCentralDigitalApiOperationArgs<"GET /roles/{roleId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /roles/{roleId}"]>;
  UpdateRole(...args: RingCentralDigitalApiOperationArgs<"PUT /roles/{roleId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /roles/{roleId}"]>;
}

export const RingCentralDigitalApiRolesGeneratedFunctionNames = [
  "GetAllRoles",
  "CreateRole",
  "GetRole",
  "UpdateRole"
] as const satisfies readonly (keyof RingCentralDigitalApiRolesGeneratedClient)[];

export function createRingCentralDigitalApiRolesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiRolesGeneratedClient {
  return {
    GetAllRoles: (...args) => callOperation("GET /roles", ...(args as RingCentralDigitalApiOperationArgs<"GET /roles">)),
    CreateRole: (...args) => callOperation("POST /roles", ...(args as RingCentralDigitalApiOperationArgs<"POST /roles">)),
    GetRole: (...args) => callOperation("GET /roles/{roleId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /roles/{roleId}">)),
    UpdateRole: (...args) => callOperation("PUT /roles/{roleId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /roles/{roleId}">)),
  };
}
