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
export const SlackWebApiPinsOperationKeys = [
  "POST /pins.add",
  "GET /pins.list",
  "POST /pins.remove"
] as const;
export type SlackWebApiPinsOperationKey = typeof SlackWebApiPinsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiPinsOperationPathParamMap {
  "POST /pins.add": {};
  "GET /pins.list": {};
  "POST /pins.remove": {};
}

export interface SlackWebApiPinsOperationRequestMap {
  "POST /pins.add": SlackWebApiOperationInput<"POST /pins.add">;
  "GET /pins.list": SlackWebApiOperationInput<"GET /pins.list">;
  "POST /pins.remove": SlackWebApiOperationInput<"POST /pins.remove">;
}

export interface SlackWebApiPinsGeneratedClient {
  PinsAdd(...args: SlackWebApiOperationArgs<"POST /pins.add">): Promise<SlackWebApiOperationResponseMap["POST /pins.add"]>;
  PinsList(...args: SlackWebApiOperationArgs<"GET /pins.list">): Promise<SlackWebApiOperationResponseMap["GET /pins.list"]>;
  PinsRemove(...args: SlackWebApiOperationArgs<"POST /pins.remove">): Promise<SlackWebApiOperationResponseMap["POST /pins.remove"]>;
}

export const SlackWebApiPinsGeneratedFunctionNames = [
  "PinsAdd",
  "PinsList",
  "PinsRemove"
] as const satisfies readonly (keyof SlackWebApiPinsGeneratedClient)[];

export function createSlackWebApiPinsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiPinsGeneratedClient {
  return {
    PinsAdd: (...args) => callOperation("POST /pins.add", ...(args as SlackWebApiOperationArgs<"POST /pins.add">)),
    PinsList: (...args) => callOperation("GET /pins.list", ...(args as SlackWebApiOperationArgs<"GET /pins.list">)),
    PinsRemove: (...args) => callOperation("POST /pins.remove", ...(args as SlackWebApiOperationArgs<"POST /pins.remove">)),
  };
}
