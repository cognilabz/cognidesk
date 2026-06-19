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
export const NiceCxoneFullApiLogoutOperationKeys = [
  "authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout",
  "authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout"
] as const;
export type NiceCxoneFullApiLogoutOperationKey = typeof NiceCxoneFullApiLogoutOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiLogoutOperationPathParamMap {
  "authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout": {};
  "authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout": {};
}

export interface NiceCxoneFullApiLogoutOperationRequestMap {
  "authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout">;
  "authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout">;
}

export interface NiceCxoneFullApiLogoutGeneratedClient {
  AuthenticationGlobalauthenticationApiDocsGetAuthAuthorizeLogout(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout"]>;
  AuthenticationGlobalauthenticationApiDocsPostAuthAuthorizeLogout(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout"]>;
}

export const NiceCxoneFullApiLogoutGeneratedFunctionNames = [
  "AuthenticationGlobalauthenticationApiDocsGetAuthAuthorizeLogout",
  "AuthenticationGlobalauthenticationApiDocsPostAuthAuthorizeLogout"
] as const satisfies readonly (keyof NiceCxoneFullApiLogoutGeneratedClient)[];

export function createNiceCxoneFullApiLogoutGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiLogoutGeneratedClient {
  return {
    AuthenticationGlobalauthenticationApiDocsGetAuthAuthorizeLogout: (...args) => callOperation("authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:get_/auth/authorize/logout:GET:/auth/authorize/logout">)),
    AuthenticationGlobalauthenticationApiDocsPostAuthAuthorizeLogout: (...args) => callOperation("authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:post_/auth/authorize/logout:POST:/auth/authorize/logout">)),
  };
}
