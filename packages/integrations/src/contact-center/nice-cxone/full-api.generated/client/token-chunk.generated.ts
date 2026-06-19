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
export const NiceCxoneFullApiTokenOperationKeys = [
  "authentication-globalauthentication-api-docs:getToken:POST:/auth/token"
] as const;
export type NiceCxoneFullApiTokenOperationKey = typeof NiceCxoneFullApiTokenOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiTokenOperationPathParamMap {
  "authentication-globalauthentication-api-docs:getToken:POST:/auth/token": {};
}

export interface NiceCxoneFullApiTokenOperationRequestMap {
  "authentication-globalauthentication-api-docs:getToken:POST:/auth/token": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:getToken:POST:/auth/token">;
}

export interface NiceCxoneFullApiTokenGeneratedClient {
  AuthenticationGlobalauthenticationApiDocsGetToken(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getToken:POST:/auth/token">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:getToken:POST:/auth/token"]>;
}

export const NiceCxoneFullApiTokenGeneratedFunctionNames = [
  "AuthenticationGlobalauthenticationApiDocsGetToken"
] as const satisfies readonly (keyof NiceCxoneFullApiTokenGeneratedClient)[];

export function createNiceCxoneFullApiTokenGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiTokenGeneratedClient {
  return {
    AuthenticationGlobalauthenticationApiDocsGetToken: (...args) => callOperation("authentication-globalauthentication-api-docs:getToken:POST:/auth/token", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getToken:POST:/auth/token">)),
  };
}
