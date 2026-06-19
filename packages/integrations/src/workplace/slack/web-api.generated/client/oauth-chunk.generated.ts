// Generated endpoint chunk for SlackWebApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  SlackWebApiGeneratedOperationCaller,
  SlackWebApiOperationArgs,
  SlackWebApiOperationInput,
  SlackWebApiPathParamValue,
} from "../../web-api-client.generated.js";
import type { SlackWebApiOperationResponseMap } from "../../web-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const SlackWebApiOauthOperationKeys = [
  "GET /oauth.access",
  "GET /oauth.token"
] as const;
export type SlackWebApiOauthOperationKey = typeof SlackWebApiOauthOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiOauthOperationPathParamMap {
  "GET /oauth.access": {};
  "GET /oauth.token": {};
}

export interface SlackWebApiOauthOperationRequestMap {
  "GET /oauth.access": SlackWebApiOperationInput<"GET /oauth.access">;
  "GET /oauth.token": SlackWebApiOperationInput<"GET /oauth.token">;
}

export interface SlackWebApiOauthGeneratedClient {
  OauthAccess(...args: SlackWebApiOperationArgs<"GET /oauth.access">): Promise<SlackWebApiOperationResponseMap["GET /oauth.access"]>;
  OauthToken(...args: SlackWebApiOperationArgs<"GET /oauth.token">): Promise<SlackWebApiOperationResponseMap["GET /oauth.token"]>;
}

export const SlackWebApiOauthGeneratedFunctionNames = [
  "OauthAccess",
  "OauthToken"
] as const satisfies readonly (keyof SlackWebApiOauthGeneratedClient)[];

export function createSlackWebApiOauthGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiOauthGeneratedClient {
  return {
    OauthAccess: (...args) => callOperation("GET /oauth.access", ...(args as SlackWebApiOperationArgs<"GET /oauth.access">)),
    OauthToken: (...args) => callOperation("GET /oauth.token", ...(args as SlackWebApiOperationArgs<"GET /oauth.token">)),
  };
}
