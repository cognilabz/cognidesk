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
export const SlackWebApiReactionsOperationKeys = [
  "POST /reactions.add",
  "GET /reactions.get",
  "GET /reactions.list",
  "POST /reactions.remove"
] as const;
export type SlackWebApiReactionsOperationKey = typeof SlackWebApiReactionsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiReactionsOperationPathParamMap {
  "POST /reactions.add": {};
  "GET /reactions.get": {};
  "GET /reactions.list": {};
  "POST /reactions.remove": {};
}

export interface SlackWebApiReactionsOperationRequestMap {
  "POST /reactions.add": SlackWebApiOperationInput<"POST /reactions.add">;
  "GET /reactions.get": SlackWebApiOperationInput<"GET /reactions.get">;
  "GET /reactions.list": SlackWebApiOperationInput<"GET /reactions.list">;
  "POST /reactions.remove": SlackWebApiOperationInput<"POST /reactions.remove">;
}

export interface SlackWebApiReactionsGeneratedClient {
  ReactionsAdd(...args: SlackWebApiOperationArgs<"POST /reactions.add">): Promise<SlackWebApiOperationResponseMap["POST /reactions.add"]>;
  ReactionsGet(...args: SlackWebApiOperationArgs<"GET /reactions.get">): Promise<SlackWebApiOperationResponseMap["GET /reactions.get"]>;
  ReactionsList(...args: SlackWebApiOperationArgs<"GET /reactions.list">): Promise<SlackWebApiOperationResponseMap["GET /reactions.list"]>;
  ReactionsRemove(...args: SlackWebApiOperationArgs<"POST /reactions.remove">): Promise<SlackWebApiOperationResponseMap["POST /reactions.remove"]>;
}

export const SlackWebApiReactionsGeneratedFunctionNames = [
  "ReactionsAdd",
  "ReactionsGet",
  "ReactionsList",
  "ReactionsRemove"
] as const satisfies readonly (keyof SlackWebApiReactionsGeneratedClient)[];

export function createSlackWebApiReactionsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiReactionsGeneratedClient {
  return {
    ReactionsAdd: (...args) => callOperation("POST /reactions.add", ...(args as SlackWebApiOperationArgs<"POST /reactions.add">)),
    ReactionsGet: (...args) => callOperation("GET /reactions.get", ...(args as SlackWebApiOperationArgs<"GET /reactions.get">)),
    ReactionsList: (...args) => callOperation("GET /reactions.list", ...(args as SlackWebApiOperationArgs<"GET /reactions.list">)),
    ReactionsRemove: (...args) => callOperation("POST /reactions.remove", ...(args as SlackWebApiOperationArgs<"POST /reactions.remove">)),
  };
}
