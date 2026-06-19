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
export const SlackWebApiRtmOperationKeys = [
  "GET /rtm.connect"
] as const;
export type SlackWebApiRtmOperationKey = typeof SlackWebApiRtmOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiRtmOperationPathParamMap {
  "GET /rtm.connect": {};
}

export interface SlackWebApiRtmOperationRequestMap {
  "GET /rtm.connect": SlackWebApiOperationInput<"GET /rtm.connect">;
}

export interface SlackWebApiRtmGeneratedClient {
  RtmConnect(...args: SlackWebApiOperationArgs<"GET /rtm.connect">): Promise<SlackWebApiOperationResponseMap["GET /rtm.connect"]>;
}

export const SlackWebApiRtmGeneratedFunctionNames = [
  "RtmConnect"
] as const satisfies readonly (keyof SlackWebApiRtmGeneratedClient)[];

export function createSlackWebApiRtmGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiRtmGeneratedClient {
  return {
    RtmConnect: (...args) => callOperation("GET /rtm.connect", ...(args as SlackWebApiOperationArgs<"GET /rtm.connect">)),
  };
}
