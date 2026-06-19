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
export const NiceCxoneFullApiDiscoveryOperationKeys = [
  "authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration",
  "authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration"
] as const;
export type NiceCxoneFullApiDiscoveryOperationKey = typeof NiceCxoneFullApiDiscoveryOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiDiscoveryOperationPathParamMap {
  "authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration": {};
  "authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration": {};
}

export interface NiceCxoneFullApiDiscoveryOperationRequestMap {
  "authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration">;
  "authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration">;
}

export interface NiceCxoneFullApiDiscoveryGeneratedClient {
  AuthenticationGlobalauthenticationApiDocsGetOIDCConfig(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration"]>;
  AuthenticationGlobalauthenticationApiDocsGetCXoneConfig(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration"]>;
}

export const NiceCxoneFullApiDiscoveryGeneratedFunctionNames = [
  "AuthenticationGlobalauthenticationApiDocsGetOIDCConfig",
  "AuthenticationGlobalauthenticationApiDocsGetCXoneConfig"
] as const satisfies readonly (keyof NiceCxoneFullApiDiscoveryGeneratedClient)[];

export function createNiceCxoneFullApiDiscoveryGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiDiscoveryGeneratedClient {
  return {
    AuthenticationGlobalauthenticationApiDocsGetOIDCConfig: (...args) => callOperation("authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getOIDCConfig:GET:/.well-known/openid-configuration">)),
    AuthenticationGlobalauthenticationApiDocsGetCXoneConfig: (...args) => callOperation("authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getCXoneConfig:GET:/.well-known/cxone-configuration">)),
  };
}
