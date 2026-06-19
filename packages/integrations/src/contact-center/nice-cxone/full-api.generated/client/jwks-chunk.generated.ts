// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiJWKSOperationKeys = [
  "authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks"
] as const;
export type NiceCxoneFullApiJWKSOperationKey = typeof NiceCxoneFullApiJWKSOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiJWKSOperationPathParamMap {
  "authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks": {};
}

export interface NiceCxoneFullApiJWKSOperationRequestMap {
  "authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks">;
}

export interface NiceCxoneFullApiJWKSGeneratedClient {
  AuthenticationGlobalauthenticationApiDocsGetAuthJwks(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks"]>;
}

export const NiceCxoneFullApiJWKSGeneratedFunctionNames = [
  "AuthenticationGlobalauthenticationApiDocsGetAuthJwks"
] as const satisfies readonly (keyof NiceCxoneFullApiJWKSGeneratedClient)[];

export function createNiceCxoneFullApiJWKSGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiJWKSGeneratedClient {
  return {
    AuthenticationGlobalauthenticationApiDocsGetAuthJwks: (...args) => callOperation("authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:get_/auth/jwks:GET:/auth/jwks">)),
  };
}
