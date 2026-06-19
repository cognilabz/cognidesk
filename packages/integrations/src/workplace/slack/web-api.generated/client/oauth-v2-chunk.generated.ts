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
export const SlackWebApiOauthV2OperationKeys = [
  "GET /oauth.v2.access"
] as const;
export type SlackWebApiOauthV2OperationKey = typeof SlackWebApiOauthV2OperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiOauthV2OperationPathParamMap {
  "GET /oauth.v2.access": {};
}

export interface SlackWebApiOauthV2OperationRequestMap {
  "GET /oauth.v2.access": SlackWebApiOperationInput<"GET /oauth.v2.access">;
}

export interface SlackWebApiOauthV2GeneratedClient {
  OauthV2Access(...args: SlackWebApiOperationArgs<"GET /oauth.v2.access">): Promise<SlackWebApiOperationResponseMap["GET /oauth.v2.access"]>;
}

export const SlackWebApiOauthV2GeneratedFunctionNames = [
  "OauthV2Access"
] as const satisfies readonly (keyof SlackWebApiOauthV2GeneratedClient)[];

export function createSlackWebApiOauthV2GeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiOauthV2GeneratedClient {
  return {
    OauthV2Access: (...args) => callOperation("GET /oauth.v2.access", ...(args as SlackWebApiOperationArgs<"GET /oauth.v2.access">)),
  };
}
