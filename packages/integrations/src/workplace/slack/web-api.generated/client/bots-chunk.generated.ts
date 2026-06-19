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
export const SlackWebApiBotsOperationKeys = [
  "GET /bots.info"
] as const;
export type SlackWebApiBotsOperationKey = typeof SlackWebApiBotsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiBotsOperationPathParamMap {
  "GET /bots.info": {};
}

export interface SlackWebApiBotsOperationRequestMap {
  "GET /bots.info": SlackWebApiOperationInput<"GET /bots.info">;
}

export interface SlackWebApiBotsGeneratedClient {
  BotsInfo(...args: SlackWebApiOperationArgs<"GET /bots.info">): Promise<SlackWebApiOperationResponseMap["GET /bots.info"]>;
}

export const SlackWebApiBotsGeneratedFunctionNames = [
  "BotsInfo"
] as const satisfies readonly (keyof SlackWebApiBotsGeneratedClient)[];

export function createSlackWebApiBotsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiBotsGeneratedClient {
  return {
    BotsInfo: (...args) => callOperation("GET /bots.info", ...(args as SlackWebApiOperationArgs<"GET /bots.info">)),
  };
}
