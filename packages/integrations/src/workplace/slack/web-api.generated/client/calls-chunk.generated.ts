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
export const SlackWebApiCallsOperationKeys = [
  "POST /calls.add",
  "POST /calls.end",
  "GET /calls.info",
  "POST /calls.update"
] as const;
export type SlackWebApiCallsOperationKey = typeof SlackWebApiCallsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiCallsOperationPathParamMap {
  "POST /calls.add": {};
  "POST /calls.end": {};
  "GET /calls.info": {};
  "POST /calls.update": {};
}

export interface SlackWebApiCallsOperationRequestMap {
  "POST /calls.add": SlackWebApiOperationInput<"POST /calls.add">;
  "POST /calls.end": SlackWebApiOperationInput<"POST /calls.end">;
  "GET /calls.info": SlackWebApiOperationInput<"GET /calls.info">;
  "POST /calls.update": SlackWebApiOperationInput<"POST /calls.update">;
}

export interface SlackWebApiCallsGeneratedClient {
  CallsAdd(...args: SlackWebApiOperationArgs<"POST /calls.add">): Promise<SlackWebApiOperationResponseMap["POST /calls.add"]>;
  CallsEnd(...args: SlackWebApiOperationArgs<"POST /calls.end">): Promise<SlackWebApiOperationResponseMap["POST /calls.end"]>;
  CallsInfo(...args: SlackWebApiOperationArgs<"GET /calls.info">): Promise<SlackWebApiOperationResponseMap["GET /calls.info"]>;
  CallsUpdate(...args: SlackWebApiOperationArgs<"POST /calls.update">): Promise<SlackWebApiOperationResponseMap["POST /calls.update"]>;
}

export const SlackWebApiCallsGeneratedFunctionNames = [
  "CallsAdd",
  "CallsEnd",
  "CallsInfo",
  "CallsUpdate"
] as const satisfies readonly (keyof SlackWebApiCallsGeneratedClient)[];

export function createSlackWebApiCallsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiCallsGeneratedClient {
  return {
    CallsAdd: (...args) => callOperation("POST /calls.add", ...(args as SlackWebApiOperationArgs<"POST /calls.add">)),
    CallsEnd: (...args) => callOperation("POST /calls.end", ...(args as SlackWebApiOperationArgs<"POST /calls.end">)),
    CallsInfo: (...args) => callOperation("GET /calls.info", ...(args as SlackWebApiOperationArgs<"GET /calls.info">)),
    CallsUpdate: (...args) => callOperation("POST /calls.update", ...(args as SlackWebApiOperationArgs<"POST /calls.update">)),
  };
}
