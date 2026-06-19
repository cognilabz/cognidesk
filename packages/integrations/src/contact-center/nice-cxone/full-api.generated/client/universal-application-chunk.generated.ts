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
export const NiceCxoneFullApiUniversalApplicationOperationKeys = [
  "authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage",
  "authentication-universalapplication-api-docs:getCallback:GET:/callback"
] as const;
export type NiceCxoneFullApiUniversalApplicationOperationKey = typeof NiceCxoneFullApiUniversalApplicationOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiUniversalApplicationOperationPathParamMap {
  "authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage": {};
  "authentication-universalapplication-api-docs:getCallback:GET:/callback": {};
}

export interface NiceCxoneFullApiUniversalApplicationOperationRequestMap {
  "authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage": NiceCxoneFullApiOperationInput<"authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage">;
  "authentication-universalapplication-api-docs:getCallback:GET:/callback": NiceCxoneFullApiOperationInput<"authentication-universalapplication-api-docs:getCallback:GET:/callback">;
}

export interface NiceCxoneFullApiUniversalApplicationGeneratedClient {
  AuthenticationUniversalapplicationApiDocsRedirectToGA(...args: NiceCxoneFullApiOperationArgs<"authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage"]>;
  AuthenticationUniversalapplicationApiDocsGetCallback(...args: NiceCxoneFullApiOperationArgs<"authentication-universalapplication-api-docs:getCallback:GET:/callback">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-universalapplication-api-docs:getCallback:GET:/callback"]>;
}

export const NiceCxoneFullApiUniversalApplicationGeneratedFunctionNames = [
  "AuthenticationUniversalapplicationApiDocsRedirectToGA",
  "AuthenticationUniversalapplicationApiDocsGetCallback"
] as const satisfies readonly (keyof NiceCxoneFullApiUniversalApplicationGeneratedClient)[];

export function createNiceCxoneFullApiUniversalApplicationGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiUniversalApplicationGeneratedClient {
  return {
    AuthenticationUniversalapplicationApiDocsRedirectToGA: (...args) => callOperation("authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage", ...(args as NiceCxoneFullApiOperationArgs<"authentication-universalapplication-api-docs:redirectToGA:GET:/GALandingPage">)),
    AuthenticationUniversalapplicationApiDocsGetCallback: (...args) => callOperation("authentication-universalapplication-api-docs:getCallback:GET:/callback", ...(args as NiceCxoneFullApiOperationArgs<"authentication-universalapplication-api-docs:getCallback:GET:/callback">)),
  };
}
