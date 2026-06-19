// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiAuthenticationOperationKeys = [
  "oauth-token-post",
  "oauth-authorize-get",
  "oauth-introspect-post",
  "getPublicServerJwkSet",
  "oauth-2023-10-certs-get",
  "oauth-end-user-session-post"
] as const;
export type TalkdeskFullApiAuthenticationOperationKey = typeof TalkdeskFullApiAuthenticationOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiAuthenticationOperationPathParamMap {
  "oauth-token-post": {};
  "oauth-authorize-get": {};
  "oauth-introspect-post": {};
  "getPublicServerJwkSet": {};
  "oauth-2023-10-certs-get": {};
  "oauth-end-user-session-post": {};
}

export interface TalkdeskFullApiAuthenticationOperationRequestMap {
  "oauth-token-post": TalkdeskFullApiOperationInput<"oauth-token-post">;
  "oauth-authorize-get": TalkdeskFullApiOperationInput<"oauth-authorize-get">;
  "oauth-introspect-post": TalkdeskFullApiOperationInput<"oauth-introspect-post">;
  "getPublicServerJwkSet": TalkdeskFullApiOperationInput<"getPublicServerJwkSet">;
  "oauth-2023-10-certs-get": TalkdeskFullApiOperationInput<"oauth-2023-10-certs-get">;
  "oauth-end-user-session-post": TalkdeskFullApiOperationInput<"oauth-end-user-session-post">;
}

export interface TalkdeskFullApiAuthenticationGeneratedClient {
  OauthTokenPost(...args: TalkdeskFullApiOperationArgs<"oauth-token-post">): Promise<TalkdeskFullApiOperationResponseMap["oauth-token-post"]>;
  OauthAuthorizeGet(...args: TalkdeskFullApiOperationArgs<"oauth-authorize-get">): Promise<TalkdeskFullApiOperationResponseMap["oauth-authorize-get"]>;
  OauthIntrospectPost(...args: TalkdeskFullApiOperationArgs<"oauth-introspect-post">): Promise<TalkdeskFullApiOperationResponseMap["oauth-introspect-post"]>;
  GetPublicServerJwkSet(...args: TalkdeskFullApiOperationArgs<"getPublicServerJwkSet">): Promise<TalkdeskFullApiOperationResponseMap["getPublicServerJwkSet"]>;
  Oauth202310CertsGet(...args: TalkdeskFullApiOperationArgs<"oauth-2023-10-certs-get">): Promise<TalkdeskFullApiOperationResponseMap["oauth-2023-10-certs-get"]>;
  OauthEndUserSessionPost(...args: TalkdeskFullApiOperationArgs<"oauth-end-user-session-post">): Promise<TalkdeskFullApiOperationResponseMap["oauth-end-user-session-post"]>;
}

export const TalkdeskFullApiAuthenticationGeneratedFunctionNames = [
  "OauthTokenPost",
  "OauthAuthorizeGet",
  "OauthIntrospectPost",
  "GetPublicServerJwkSet",
  "Oauth202310CertsGet",
  "OauthEndUserSessionPost"
] as const satisfies readonly (keyof TalkdeskFullApiAuthenticationGeneratedClient)[];

export function createTalkdeskFullApiAuthenticationGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiAuthenticationGeneratedClient {
  return {
    OauthTokenPost: (...args) => callOperation("oauth-token-post", ...(args as TalkdeskFullApiOperationArgs<"oauth-token-post">)),
    OauthAuthorizeGet: (...args) => callOperation("oauth-authorize-get", ...(args as TalkdeskFullApiOperationArgs<"oauth-authorize-get">)),
    OauthIntrospectPost: (...args) => callOperation("oauth-introspect-post", ...(args as TalkdeskFullApiOperationArgs<"oauth-introspect-post">)),
    GetPublicServerJwkSet: (...args) => callOperation("getPublicServerJwkSet", ...(args as TalkdeskFullApiOperationArgs<"getPublicServerJwkSet">)),
    Oauth202310CertsGet: (...args) => callOperation("oauth-2023-10-certs-get", ...(args as TalkdeskFullApiOperationArgs<"oauth-2023-10-certs-get">)),
    OauthEndUserSessionPost: (...args) => callOperation("oauth-end-user-session-post", ...(args as TalkdeskFullApiOperationArgs<"oauth-end-user-session-post">)),
  };
}
