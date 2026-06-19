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
export const RingCentralDigitalApiUsersOperationKeys = [
  "GET /users",
  "POST /users",
  "POST /users/invite",
  "DELETE /users/{userId}",
  "GET /users/{userId}",
  "PUT /users/{userId}"
] as const;
export type RingCentralDigitalApiUsersOperationKey = typeof RingCentralDigitalApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiUsersOperationPathParamMap {
  "GET /users": {};
  "POST /users": {};
  "POST /users/invite": {};
  "DELETE /users/{userId}": { "userId": RingCentralDigitalApiPathParamValue };
  "GET /users/{userId}": { "userId": RingCentralDigitalApiPathParamValue };
  "PUT /users/{userId}": { "userId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiUsersOperationRequestMap {
  "GET /users": RingCentralDigitalApiOperationInput<"GET /users">;
  "POST /users": RingCentralDigitalApiOperationInput<"POST /users">;
  "POST /users/invite": RingCentralDigitalApiOperationInput<"POST /users/invite">;
  "DELETE /users/{userId}": RingCentralDigitalApiOperationInput<"DELETE /users/{userId}">;
  "GET /users/{userId}": RingCentralDigitalApiOperationInput<"GET /users/{userId}">;
  "PUT /users/{userId}": RingCentralDigitalApiOperationInput<"PUT /users/{userId}">;
}

export interface RingCentralDigitalApiUsersGeneratedClient {
  GetAllUsers(...args: RingCentralDigitalApiOperationArgs<"GET /users">): Promise<RingCentralDigitalApiOperationResponseMap["GET /users"]>;
  CreateUser(...args: RingCentralDigitalApiOperationArgs<"POST /users">): Promise<RingCentralDigitalApiOperationResponseMap["POST /users"]>;
  InviteUser(...args: RingCentralDigitalApiOperationArgs<"POST /users/invite">): Promise<RingCentralDigitalApiOperationResponseMap["POST /users/invite"]>;
  DeleteUser(...args: RingCentralDigitalApiOperationArgs<"DELETE /users/{userId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /users/{userId}"]>;
  GetUser(...args: RingCentralDigitalApiOperationArgs<"GET /users/{userId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /users/{userId}"]>;
  UpdateUser(...args: RingCentralDigitalApiOperationArgs<"PUT /users/{userId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /users/{userId}"]>;
}

export const RingCentralDigitalApiUsersGeneratedFunctionNames = [
  "GetAllUsers",
  "CreateUser",
  "InviteUser",
  "DeleteUser",
  "GetUser",
  "UpdateUser"
] as const satisfies readonly (keyof RingCentralDigitalApiUsersGeneratedClient)[];

export function createRingCentralDigitalApiUsersGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiUsersGeneratedClient {
  return {
    GetAllUsers: (...args) => callOperation("GET /users", ...(args as RingCentralDigitalApiOperationArgs<"GET /users">)),
    CreateUser: (...args) => callOperation("POST /users", ...(args as RingCentralDigitalApiOperationArgs<"POST /users">)),
    InviteUser: (...args) => callOperation("POST /users/invite", ...(args as RingCentralDigitalApiOperationArgs<"POST /users/invite">)),
    DeleteUser: (...args) => callOperation("DELETE /users/{userId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /users/{userId}">)),
    GetUser: (...args) => callOperation("GET /users/{userId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /users/{userId}">)),
    UpdateUser: (...args) => callOperation("PUT /users/{userId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /users/{userId}">)),
  };
}
