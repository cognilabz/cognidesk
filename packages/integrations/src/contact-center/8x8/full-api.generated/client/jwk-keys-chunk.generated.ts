// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiJwkKeysOperationKeys = [
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public",
  "chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public",
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public"
] as const;
export type EightByEightContactCenterApiJwkKeysOperationKey = typeof EightByEightContactCenterApiJwkKeysOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiJwkKeysOperationPathParamMap {
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": { "region": EightByEightContactCenterApiPathParamValue; "jwk-id": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public": { "jwkId": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": { "region": EightByEightContactCenterApiPathParamValue; "jwk-id": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiJwkKeysOperationRequestMap {
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public">;
  "chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public">;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public">;
}

export interface EightByEightContactCenterApiJwkKeysGeneratedClient {
  Getjwkpublickey(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public"]>;
  Getjwkpublickey1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public"]>;
  Getjwkpublickey2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public"]>;
}

export const EightByEightContactCenterApiJwkKeysGeneratedFunctionNames = [
  "Getjwkpublickey",
  "Getjwkpublickey1",
  "Getjwkpublickey2"
] as const satisfies readonly (keyof EightByEightContactCenterApiJwkKeysGeneratedClient)[];

export function createEightByEightContactCenterApiJwkKeysGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiJwkKeysGeneratedClient {
  return {
    Getjwkpublickey: (...args) => callOperation("chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public">)),
    Getjwkpublickey1: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/jwk/{jwkId}/public">)),
    Getjwkpublickey2: (...args) => callOperation("chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/jwk/{jwk-id}/public">)),
  };
}
