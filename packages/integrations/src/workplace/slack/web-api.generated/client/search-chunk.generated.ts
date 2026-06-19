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
export const SlackWebApiSearchOperationKeys = [
  "GET /search.messages"
] as const;
export type SlackWebApiSearchOperationKey = typeof SlackWebApiSearchOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiSearchOperationPathParamMap {
  "GET /search.messages": {};
}

export interface SlackWebApiSearchOperationRequestMap {
  "GET /search.messages": SlackWebApiOperationInput<"GET /search.messages">;
}

export interface SlackWebApiSearchGeneratedClient {
  SearchMessages(...args: SlackWebApiOperationArgs<"GET /search.messages">): Promise<SlackWebApiOperationResponseMap["GET /search.messages"]>;
}

export const SlackWebApiSearchGeneratedFunctionNames = [
  "SearchMessages"
] as const satisfies readonly (keyof SlackWebApiSearchGeneratedClient)[];

export function createSlackWebApiSearchGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiSearchGeneratedClient {
  return {
    SearchMessages: (...args) => callOperation("GET /search.messages", ...(args as SlackWebApiOperationArgs<"GET /search.messages">)),
  };
}
