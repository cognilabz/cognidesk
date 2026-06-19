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
export const SlackWebApiChatOperationKeys = [
  "POST /chat.delete",
  "POST /chat.deleteScheduledMessage",
  "GET /chat.getPermalink",
  "POST /chat.meMessage",
  "POST /chat.postEphemeral",
  "POST /chat.postMessage",
  "POST /chat.scheduleMessage",
  "POST /chat.unfurl",
  "POST /chat.update"
] as const;
export type SlackWebApiChatOperationKey = typeof SlackWebApiChatOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiChatOperationPathParamMap {
  "POST /chat.delete": {};
  "POST /chat.deleteScheduledMessage": {};
  "GET /chat.getPermalink": {};
  "POST /chat.meMessage": {};
  "POST /chat.postEphemeral": {};
  "POST /chat.postMessage": {};
  "POST /chat.scheduleMessage": {};
  "POST /chat.unfurl": {};
  "POST /chat.update": {};
}

export interface SlackWebApiChatOperationRequestMap {
  "POST /chat.delete": SlackWebApiOperationInput<"POST /chat.delete">;
  "POST /chat.deleteScheduledMessage": SlackWebApiOperationInput<"POST /chat.deleteScheduledMessage">;
  "GET /chat.getPermalink": SlackWebApiOperationInput<"GET /chat.getPermalink">;
  "POST /chat.meMessage": SlackWebApiOperationInput<"POST /chat.meMessage">;
  "POST /chat.postEphemeral": SlackWebApiOperationInput<"POST /chat.postEphemeral">;
  "POST /chat.postMessage": SlackWebApiOperationInput<"POST /chat.postMessage">;
  "POST /chat.scheduleMessage": SlackWebApiOperationInput<"POST /chat.scheduleMessage">;
  "POST /chat.unfurl": SlackWebApiOperationInput<"POST /chat.unfurl">;
  "POST /chat.update": SlackWebApiOperationInput<"POST /chat.update">;
}

export interface SlackWebApiChatGeneratedClient {
  ChatDelete(...args: SlackWebApiOperationArgs<"POST /chat.delete">): Promise<SlackWebApiOperationResponseMap["POST /chat.delete"]>;
  ChatDeleteScheduledMessage(...args: SlackWebApiOperationArgs<"POST /chat.deleteScheduledMessage">): Promise<SlackWebApiOperationResponseMap["POST /chat.deleteScheduledMessage"]>;
  ChatGetPermalink(...args: SlackWebApiOperationArgs<"GET /chat.getPermalink">): Promise<SlackWebApiOperationResponseMap["GET /chat.getPermalink"]>;
  ChatMeMessage(...args: SlackWebApiOperationArgs<"POST /chat.meMessage">): Promise<SlackWebApiOperationResponseMap["POST /chat.meMessage"]>;
  ChatPostEphemeral(...args: SlackWebApiOperationArgs<"POST /chat.postEphemeral">): Promise<SlackWebApiOperationResponseMap["POST /chat.postEphemeral"]>;
  ChatPostMessage(...args: SlackWebApiOperationArgs<"POST /chat.postMessage">): Promise<SlackWebApiOperationResponseMap["POST /chat.postMessage"]>;
  ChatScheduleMessage(...args: SlackWebApiOperationArgs<"POST /chat.scheduleMessage">): Promise<SlackWebApiOperationResponseMap["POST /chat.scheduleMessage"]>;
  ChatUnfurl(...args: SlackWebApiOperationArgs<"POST /chat.unfurl">): Promise<SlackWebApiOperationResponseMap["POST /chat.unfurl"]>;
  ChatUpdate(...args: SlackWebApiOperationArgs<"POST /chat.update">): Promise<SlackWebApiOperationResponseMap["POST /chat.update"]>;
}

export const SlackWebApiChatGeneratedFunctionNames = [
  "ChatDelete",
  "ChatDeleteScheduledMessage",
  "ChatGetPermalink",
  "ChatMeMessage",
  "ChatPostEphemeral",
  "ChatPostMessage",
  "ChatScheduleMessage",
  "ChatUnfurl",
  "ChatUpdate"
] as const satisfies readonly (keyof SlackWebApiChatGeneratedClient)[];

export function createSlackWebApiChatGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiChatGeneratedClient {
  return {
    ChatDelete: (...args) => callOperation("POST /chat.delete", ...(args as SlackWebApiOperationArgs<"POST /chat.delete">)),
    ChatDeleteScheduledMessage: (...args) => callOperation("POST /chat.deleteScheduledMessage", ...(args as SlackWebApiOperationArgs<"POST /chat.deleteScheduledMessage">)),
    ChatGetPermalink: (...args) => callOperation("GET /chat.getPermalink", ...(args as SlackWebApiOperationArgs<"GET /chat.getPermalink">)),
    ChatMeMessage: (...args) => callOperation("POST /chat.meMessage", ...(args as SlackWebApiOperationArgs<"POST /chat.meMessage">)),
    ChatPostEphemeral: (...args) => callOperation("POST /chat.postEphemeral", ...(args as SlackWebApiOperationArgs<"POST /chat.postEphemeral">)),
    ChatPostMessage: (...args) => callOperation("POST /chat.postMessage", ...(args as SlackWebApiOperationArgs<"POST /chat.postMessage">)),
    ChatScheduleMessage: (...args) => callOperation("POST /chat.scheduleMessage", ...(args as SlackWebApiOperationArgs<"POST /chat.scheduleMessage">)),
    ChatUnfurl: (...args) => callOperation("POST /chat.unfurl", ...(args as SlackWebApiOperationArgs<"POST /chat.unfurl">)),
    ChatUpdate: (...args) => callOperation("POST /chat.update", ...(args as SlackWebApiOperationArgs<"POST /chat.update">)),
  };
}
