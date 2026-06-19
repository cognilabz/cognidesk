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
export const NiceCxoneFullApiAuthorizeOperationKeys = [
  "authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize",
  "authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize"
] as const;
export type NiceCxoneFullApiAuthorizeOperationKey = typeof NiceCxoneFullApiAuthorizeOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAuthorizeOperationPathParamMap {
  "authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize": {};
  "authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize": {};
}

export interface NiceCxoneFullApiAuthorizeOperationRequestMap {
  "authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize">;
  "authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize">;
}

export interface NiceCxoneFullApiAuthorizeGeneratedClient {
  AuthenticationGlobalauthenticationApiDocsGetAuthAuthorize(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize"]>;
  AuthenticationGlobalauthenticationApiDocsAuthAuthorize(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize"]>;
}

export const NiceCxoneFullApiAuthorizeGeneratedFunctionNames = [
  "AuthenticationGlobalauthenticationApiDocsGetAuthAuthorize",
  "AuthenticationGlobalauthenticationApiDocsAuthAuthorize"
] as const satisfies readonly (keyof NiceCxoneFullApiAuthorizeGeneratedClient)[];

export function createNiceCxoneFullApiAuthorizeGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAuthorizeGeneratedClient {
  return {
    AuthenticationGlobalauthenticationApiDocsGetAuthAuthorize: (...args) => callOperation("authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getAuthAuthorize:GET:/auth/authorize">)),
    AuthenticationGlobalauthenticationApiDocsAuthAuthorize: (...args) => callOperation("authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:authAuthorize:POST:/auth/authorize">)),
  };
}
