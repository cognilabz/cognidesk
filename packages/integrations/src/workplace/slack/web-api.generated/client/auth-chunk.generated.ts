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
export const SlackWebApiAuthOperationKeys = [
  "GET /auth.revoke",
  "GET /auth.test"
] as const;
export type SlackWebApiAuthOperationKey = typeof SlackWebApiAuthOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAuthOperationPathParamMap {
  "GET /auth.revoke": {};
  "GET /auth.test": {};
}

export interface SlackWebApiAuthOperationRequestMap {
  "GET /auth.revoke": SlackWebApiOperationInput<"GET /auth.revoke">;
  "GET /auth.test": SlackWebApiOperationInput<"GET /auth.test">;
}

export interface SlackWebApiAuthGeneratedClient {
  AuthRevoke(...args: SlackWebApiOperationArgs<"GET /auth.revoke">): Promise<SlackWebApiOperationResponseMap["GET /auth.revoke"]>;
  AuthTest(...args: SlackWebApiOperationArgs<"GET /auth.test">): Promise<SlackWebApiOperationResponseMap["GET /auth.test"]>;
}

export const SlackWebApiAuthGeneratedFunctionNames = [
  "AuthRevoke",
  "AuthTest"
] as const satisfies readonly (keyof SlackWebApiAuthGeneratedClient)[];

export function createSlackWebApiAuthGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAuthGeneratedClient {
  return {
    AuthRevoke: (...args) => callOperation("GET /auth.revoke", ...(args as SlackWebApiOperationArgs<"GET /auth.revoke">)),
    AuthTest: (...args) => callOperation("GET /auth.test", ...(args as SlackWebApiOperationArgs<"GET /auth.test">)),
  };
}
