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
export const RingCentralDigitalApiUserSignaturesOperationKeys = [
  "GET /users/{userId}/signatures",
  "POST /users/{userId}/signatures",
  "DELETE /users/{userId}/signatures/{signatureId}",
  "GET /users/{userId}/signatures/{signatureId}",
  "PUT /users/{userId}/signatures/{signatureId}"
] as const;
export type RingCentralDigitalApiUserSignaturesOperationKey = typeof RingCentralDigitalApiUserSignaturesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiUserSignaturesOperationPathParamMap {
  "GET /users/{userId}/signatures": { "userId": RingCentralDigitalApiPathParamValue };
  "POST /users/{userId}/signatures": { "userId": RingCentralDigitalApiPathParamValue };
  "DELETE /users/{userId}/signatures/{signatureId}": { "userId": RingCentralDigitalApiPathParamValue; "signatureId": RingCentralDigitalApiPathParamValue };
  "GET /users/{userId}/signatures/{signatureId}": { "userId": RingCentralDigitalApiPathParamValue; "signatureId": RingCentralDigitalApiPathParamValue };
  "PUT /users/{userId}/signatures/{signatureId}": { "userId": RingCentralDigitalApiPathParamValue; "signatureId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiUserSignaturesOperationRequestMap {
  "GET /users/{userId}/signatures": RingCentralDigitalApiOperationInput<"GET /users/{userId}/signatures">;
  "POST /users/{userId}/signatures": RingCentralDigitalApiOperationInput<"POST /users/{userId}/signatures">;
  "DELETE /users/{userId}/signatures/{signatureId}": RingCentralDigitalApiOperationInput<"DELETE /users/{userId}/signatures/{signatureId}">;
  "GET /users/{userId}/signatures/{signatureId}": RingCentralDigitalApiOperationInput<"GET /users/{userId}/signatures/{signatureId}">;
  "PUT /users/{userId}/signatures/{signatureId}": RingCentralDigitalApiOperationInput<"PUT /users/{userId}/signatures/{signatureId}">;
}

export interface RingCentralDigitalApiUserSignaturesGeneratedClient {
  GetAllUserSignatures(...args: RingCentralDigitalApiOperationArgs<"GET /users/{userId}/signatures">): Promise<RingCentralDigitalApiOperationResponseMap["GET /users/{userId}/signatures"]>;
  CreateUserSignature(...args: RingCentralDigitalApiOperationArgs<"POST /users/{userId}/signatures">): Promise<RingCentralDigitalApiOperationResponseMap["POST /users/{userId}/signatures"]>;
  DeleteUserSignature(...args: RingCentralDigitalApiOperationArgs<"DELETE /users/{userId}/signatures/{signatureId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /users/{userId}/signatures/{signatureId}"]>;
  GetUserSignature(...args: RingCentralDigitalApiOperationArgs<"GET /users/{userId}/signatures/{signatureId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /users/{userId}/signatures/{signatureId}"]>;
  UpdateUserSignature(...args: RingCentralDigitalApiOperationArgs<"PUT /users/{userId}/signatures/{signatureId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /users/{userId}/signatures/{signatureId}"]>;
}

export const RingCentralDigitalApiUserSignaturesGeneratedFunctionNames = [
  "GetAllUserSignatures",
  "CreateUserSignature",
  "DeleteUserSignature",
  "GetUserSignature",
  "UpdateUserSignature"
] as const satisfies readonly (keyof RingCentralDigitalApiUserSignaturesGeneratedClient)[];

export function createRingCentralDigitalApiUserSignaturesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiUserSignaturesGeneratedClient {
  return {
    GetAllUserSignatures: (...args) => callOperation("GET /users/{userId}/signatures", ...(args as RingCentralDigitalApiOperationArgs<"GET /users/{userId}/signatures">)),
    CreateUserSignature: (...args) => callOperation("POST /users/{userId}/signatures", ...(args as RingCentralDigitalApiOperationArgs<"POST /users/{userId}/signatures">)),
    DeleteUserSignature: (...args) => callOperation("DELETE /users/{userId}/signatures/{signatureId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /users/{userId}/signatures/{signatureId}">)),
    GetUserSignature: (...args) => callOperation("GET /users/{userId}/signatures/{signatureId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /users/{userId}/signatures/{signatureId}">)),
    UpdateUserSignature: (...args) => callOperation("PUT /users/{userId}/signatures/{signatureId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /users/{userId}/signatures/{signatureId}">)),
  };
}
