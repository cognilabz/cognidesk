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
export const SlackWebApiEmojiOperationKeys = [
  "GET /emoji.list"
] as const;
export type SlackWebApiEmojiOperationKey = typeof SlackWebApiEmojiOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiEmojiOperationPathParamMap {
  "GET /emoji.list": {};
}

export interface SlackWebApiEmojiOperationRequestMap {
  "GET /emoji.list": SlackWebApiOperationInput<"GET /emoji.list">;
}

export interface SlackWebApiEmojiGeneratedClient {
  EmojiList(...args: SlackWebApiOperationArgs<"GET /emoji.list">): Promise<SlackWebApiOperationResponseMap["GET /emoji.list"]>;
}

export const SlackWebApiEmojiGeneratedFunctionNames = [
  "EmojiList"
] as const satisfies readonly (keyof SlackWebApiEmojiGeneratedClient)[];

export function createSlackWebApiEmojiGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiEmojiGeneratedClient {
  return {
    EmojiList: (...args) => callOperation("GET /emoji.list", ...(args as SlackWebApiOperationArgs<"GET /emoji.list">)),
  };
}
