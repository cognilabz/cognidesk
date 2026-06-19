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
export const RingCentralDigitalApiUsersSourcesPermissionsOperationKeys = [
  "GET /users/{userId}/sources_permissions",
  "PUT /users/{userId}/sources_permissions"
] as const;
export type RingCentralDigitalApiUsersSourcesPermissionsOperationKey = typeof RingCentralDigitalApiUsersSourcesPermissionsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiUsersSourcesPermissionsOperationPathParamMap {
  "GET /users/{userId}/sources_permissions": { "userId": RingCentralDigitalApiPathParamValue };
  "PUT /users/{userId}/sources_permissions": { "userId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiUsersSourcesPermissionsOperationRequestMap {
  "GET /users/{userId}/sources_permissions": RingCentralDigitalApiOperationInput<"GET /users/{userId}/sources_permissions">;
  "PUT /users/{userId}/sources_permissions": RingCentralDigitalApiOperationInput<"PUT /users/{userId}/sources_permissions">;
}

export interface RingCentralDigitalApiUsersSourcesPermissionsGeneratedClient {
  GetUserSourcesPermissions(...args: RingCentralDigitalApiOperationArgs<"GET /users/{userId}/sources_permissions">): Promise<RingCentralDigitalApiOperationResponseMap["GET /users/{userId}/sources_permissions"]>;
  UpdateUserSourcesPermissions(...args: RingCentralDigitalApiOperationArgs<"PUT /users/{userId}/sources_permissions">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /users/{userId}/sources_permissions"]>;
}

export const RingCentralDigitalApiUsersSourcesPermissionsGeneratedFunctionNames = [
  "GetUserSourcesPermissions",
  "UpdateUserSourcesPermissions"
] as const satisfies readonly (keyof RingCentralDigitalApiUsersSourcesPermissionsGeneratedClient)[];

export function createRingCentralDigitalApiUsersSourcesPermissionsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiUsersSourcesPermissionsGeneratedClient {
  return {
    GetUserSourcesPermissions: (...args) => callOperation("GET /users/{userId}/sources_permissions", ...(args as RingCentralDigitalApiOperationArgs<"GET /users/{userId}/sources_permissions">)),
    UpdateUserSourcesPermissions: (...args) => callOperation("PUT /users/{userId}/sources_permissions", ...(args as RingCentralDigitalApiOperationArgs<"PUT /users/{userId}/sources_permissions">)),
  };
}
