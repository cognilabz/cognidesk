// Generated endpoint chunk for DiscordHttpApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DiscordHttpApiGeneratedOperationCaller,
  DiscordHttpApiOperationArgs,
  DiscordHttpApiOperationInput,
  DiscordHttpApiPathParamValue,
} from "../../http-api-client.generated.js";
import type { DiscordHttpApiOperationResponseMap } from "../../http-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DiscordHttpApiOauth2OperationKeys = [
  "GET /oauth2/@me",
  "GET /oauth2/applications/@me",
  "GET /oauth2/keys",
  "GET /oauth2/userinfo"
] as const;
export type DiscordHttpApiOauth2OperationKey = typeof DiscordHttpApiOauth2OperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiOauth2OperationPathParamMap {
  "GET /oauth2/@me": {};
  "GET /oauth2/applications/@me": {};
  "GET /oauth2/keys": {};
  "GET /oauth2/userinfo": {};
}

export interface DiscordHttpApiOauth2OperationRequestMap {
  "GET /oauth2/@me": DiscordHttpApiOperationInput<"GET /oauth2/@me">;
  "GET /oauth2/applications/@me": DiscordHttpApiOperationInput<"GET /oauth2/applications/@me">;
  "GET /oauth2/keys": DiscordHttpApiOperationInput<"GET /oauth2/keys">;
  "GET /oauth2/userinfo": DiscordHttpApiOperationInput<"GET /oauth2/userinfo">;
}

export interface DiscordHttpApiOauth2GeneratedClient {
  GetMyOauth2Authorization(...args: DiscordHttpApiOperationArgs<"GET /oauth2/@me">): Promise<DiscordHttpApiOperationResponseMap["GET /oauth2/@me"]>;
  GetMyOauth2Application(...args: DiscordHttpApiOperationArgs<"GET /oauth2/applications/@me">): Promise<DiscordHttpApiOperationResponseMap["GET /oauth2/applications/@me"]>;
  GetPublicKeys(...args: DiscordHttpApiOperationArgs<"GET /oauth2/keys">): Promise<DiscordHttpApiOperationResponseMap["GET /oauth2/keys"]>;
  GetOpenidConnectUserinfo(...args: DiscordHttpApiOperationArgs<"GET /oauth2/userinfo">): Promise<DiscordHttpApiOperationResponseMap["GET /oauth2/userinfo"]>;
}

export const DiscordHttpApiOauth2GeneratedFunctionNames = [
  "GetMyOauth2Authorization",
  "GetMyOauth2Application",
  "GetPublicKeys",
  "GetOpenidConnectUserinfo"
] as const satisfies readonly (keyof DiscordHttpApiOauth2GeneratedClient)[];

export function createDiscordHttpApiOauth2GeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiOauth2GeneratedClient {
  return {
    GetMyOauth2Authorization: (...args) => callOperation("GET /oauth2/@me", ...(args as DiscordHttpApiOperationArgs<"GET /oauth2/@me">)),
    GetMyOauth2Application: (...args) => callOperation("GET /oauth2/applications/@me", ...(args as DiscordHttpApiOperationArgs<"GET /oauth2/applications/@me">)),
    GetPublicKeys: (...args) => callOperation("GET /oauth2/keys", ...(args as DiscordHttpApiOperationArgs<"GET /oauth2/keys">)),
    GetOpenidConnectUserinfo: (...args) => callOperation("GET /oauth2/userinfo", ...(args as DiscordHttpApiOperationArgs<"GET /oauth2/userinfo">)),
  };
}
