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
export const SlackWebApiApiOperationKeys = [
  "GET /api.test"
] as const;
export type SlackWebApiApiOperationKey = typeof SlackWebApiApiOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiApiOperationPathParamMap {
  "GET /api.test": {};
}

export interface SlackWebApiApiOperationRequestMap {
  "GET /api.test": SlackWebApiOperationInput<"GET /api.test">;
}

export interface SlackWebApiApiGeneratedClient {
  ApiTest(...args: SlackWebApiOperationArgs<"GET /api.test">): Promise<SlackWebApiOperationResponseMap["GET /api.test"]>;
}

export const SlackWebApiApiGeneratedFunctionNames = [
  "ApiTest"
] as const satisfies readonly (keyof SlackWebApiApiGeneratedClient)[];

export function createSlackWebApiApiGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiApiGeneratedClient {
  return {
    ApiTest: (...args) => callOperation("GET /api.test", ...(args as SlackWebApiOperationArgs<"GET /api.test">)),
  };
}
