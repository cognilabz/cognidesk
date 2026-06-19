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
export const SlackWebApiChatScheduledMessagesOperationKeys = [
  "GET /chat.scheduledMessages.list"
] as const;
export type SlackWebApiChatScheduledMessagesOperationKey = typeof SlackWebApiChatScheduledMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiChatScheduledMessagesOperationPathParamMap {
  "GET /chat.scheduledMessages.list": {};
}

export interface SlackWebApiChatScheduledMessagesOperationRequestMap {
  "GET /chat.scheduledMessages.list": SlackWebApiOperationInput<"GET /chat.scheduledMessages.list">;
}

export interface SlackWebApiChatScheduledMessagesGeneratedClient {
  ChatScheduledMessagesList(...args: SlackWebApiOperationArgs<"GET /chat.scheduledMessages.list">): Promise<SlackWebApiOperationResponseMap["GET /chat.scheduledMessages.list"]>;
}

export const SlackWebApiChatScheduledMessagesGeneratedFunctionNames = [
  "ChatScheduledMessagesList"
] as const satisfies readonly (keyof SlackWebApiChatScheduledMessagesGeneratedClient)[];

export function createSlackWebApiChatScheduledMessagesGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiChatScheduledMessagesGeneratedClient {
  return {
    ChatScheduledMessagesList: (...args) => callOperation("GET /chat.scheduledMessages.list", ...(args as SlackWebApiOperationArgs<"GET /chat.scheduledMessages.list">)),
  };
}
