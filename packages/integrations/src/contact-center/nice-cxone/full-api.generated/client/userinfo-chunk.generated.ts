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
export const NiceCxoneFullApiUserinfoOperationKeys = [
  "authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo",
  "authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo"
] as const;
export type NiceCxoneFullApiUserinfoOperationKey = typeof NiceCxoneFullApiUserinfoOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiUserinfoOperationPathParamMap {
  "authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo": {};
  "authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo": {};
}

export interface NiceCxoneFullApiUserinfoOperationRequestMap {
  "authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo">;
  "authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo">;
}

export interface NiceCxoneFullApiUserinfoGeneratedClient {
  AuthenticationGlobalauthenticationApiDocsGetAuthUserinfo(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo"]>;
  AuthenticationGlobalauthenticationApiDocsPostAuthUserinfo(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo"]>;
}

export const NiceCxoneFullApiUserinfoGeneratedFunctionNames = [
  "AuthenticationGlobalauthenticationApiDocsGetAuthUserinfo",
  "AuthenticationGlobalauthenticationApiDocsPostAuthUserinfo"
] as const satisfies readonly (keyof NiceCxoneFullApiUserinfoGeneratedClient)[];

export function createNiceCxoneFullApiUserinfoGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiUserinfoGeneratedClient {
  return {
    AuthenticationGlobalauthenticationApiDocsGetAuthUserinfo: (...args) => callOperation("authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:get_/auth/userinfo:GET:/auth/userinfo">)),
    AuthenticationGlobalauthenticationApiDocsPostAuthUserinfo: (...args) => callOperation("authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:post_/auth/userinfo:POST:/auth/userinfo">)),
  };
}
