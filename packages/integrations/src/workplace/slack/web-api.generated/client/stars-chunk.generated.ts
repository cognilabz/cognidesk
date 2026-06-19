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
export const SlackWebApiStarsOperationKeys = [
  "POST /stars.add",
  "GET /stars.list",
  "POST /stars.remove"
] as const;
export type SlackWebApiStarsOperationKey = typeof SlackWebApiStarsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiStarsOperationPathParamMap {
  "POST /stars.add": {};
  "GET /stars.list": {};
  "POST /stars.remove": {};
}

export interface SlackWebApiStarsOperationRequestMap {
  "POST /stars.add": SlackWebApiOperationInput<"POST /stars.add">;
  "GET /stars.list": SlackWebApiOperationInput<"GET /stars.list">;
  "POST /stars.remove": SlackWebApiOperationInput<"POST /stars.remove">;
}

export interface SlackWebApiStarsGeneratedClient {
  StarsAdd(...args: SlackWebApiOperationArgs<"POST /stars.add">): Promise<SlackWebApiOperationResponseMap["POST /stars.add"]>;
  StarsList(...args: SlackWebApiOperationArgs<"GET /stars.list">): Promise<SlackWebApiOperationResponseMap["GET /stars.list"]>;
  StarsRemove(...args: SlackWebApiOperationArgs<"POST /stars.remove">): Promise<SlackWebApiOperationResponseMap["POST /stars.remove"]>;
}

export const SlackWebApiStarsGeneratedFunctionNames = [
  "StarsAdd",
  "StarsList",
  "StarsRemove"
] as const satisfies readonly (keyof SlackWebApiStarsGeneratedClient)[];

export function createSlackWebApiStarsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiStarsGeneratedClient {
  return {
    StarsAdd: (...args) => callOperation("POST /stars.add", ...(args as SlackWebApiOperationArgs<"POST /stars.add">)),
    StarsList: (...args) => callOperation("GET /stars.list", ...(args as SlackWebApiOperationArgs<"GET /stars.list">)),
    StarsRemove: (...args) => callOperation("POST /stars.remove", ...(args as SlackWebApiOperationArgs<"POST /stars.remove">)),
  };
}
