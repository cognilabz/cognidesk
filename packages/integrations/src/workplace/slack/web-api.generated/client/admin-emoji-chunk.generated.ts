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
export const SlackWebApiAdminEmojiOperationKeys = [
  "POST /admin.emoji.add",
  "POST /admin.emoji.addAlias",
  "GET /admin.emoji.list",
  "POST /admin.emoji.remove",
  "POST /admin.emoji.rename"
] as const;
export type SlackWebApiAdminEmojiOperationKey = typeof SlackWebApiAdminEmojiOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminEmojiOperationPathParamMap {
  "POST /admin.emoji.add": {};
  "POST /admin.emoji.addAlias": {};
  "GET /admin.emoji.list": {};
  "POST /admin.emoji.remove": {};
  "POST /admin.emoji.rename": {};
}

export interface SlackWebApiAdminEmojiOperationRequestMap {
  "POST /admin.emoji.add": SlackWebApiOperationInput<"POST /admin.emoji.add">;
  "POST /admin.emoji.addAlias": SlackWebApiOperationInput<"POST /admin.emoji.addAlias">;
  "GET /admin.emoji.list": SlackWebApiOperationInput<"GET /admin.emoji.list">;
  "POST /admin.emoji.remove": SlackWebApiOperationInput<"POST /admin.emoji.remove">;
  "POST /admin.emoji.rename": SlackWebApiOperationInput<"POST /admin.emoji.rename">;
}

export interface SlackWebApiAdminEmojiGeneratedClient {
  AdminEmojiAdd(...args: SlackWebApiOperationArgs<"POST /admin.emoji.add">): Promise<SlackWebApiOperationResponseMap["POST /admin.emoji.add"]>;
  AdminEmojiAddAlias(...args: SlackWebApiOperationArgs<"POST /admin.emoji.addAlias">): Promise<SlackWebApiOperationResponseMap["POST /admin.emoji.addAlias"]>;
  AdminEmojiList(...args: SlackWebApiOperationArgs<"GET /admin.emoji.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.emoji.list"]>;
  AdminEmojiRemove(...args: SlackWebApiOperationArgs<"POST /admin.emoji.remove">): Promise<SlackWebApiOperationResponseMap["POST /admin.emoji.remove"]>;
  AdminEmojiRename(...args: SlackWebApiOperationArgs<"POST /admin.emoji.rename">): Promise<SlackWebApiOperationResponseMap["POST /admin.emoji.rename"]>;
}

export const SlackWebApiAdminEmojiGeneratedFunctionNames = [
  "AdminEmojiAdd",
  "AdminEmojiAddAlias",
  "AdminEmojiList",
  "AdminEmojiRemove",
  "AdminEmojiRename"
] as const satisfies readonly (keyof SlackWebApiAdminEmojiGeneratedClient)[];

export function createSlackWebApiAdminEmojiGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminEmojiGeneratedClient {
  return {
    AdminEmojiAdd: (...args) => callOperation("POST /admin.emoji.add", ...(args as SlackWebApiOperationArgs<"POST /admin.emoji.add">)),
    AdminEmojiAddAlias: (...args) => callOperation("POST /admin.emoji.addAlias", ...(args as SlackWebApiOperationArgs<"POST /admin.emoji.addAlias">)),
    AdminEmojiList: (...args) => callOperation("GET /admin.emoji.list", ...(args as SlackWebApiOperationArgs<"GET /admin.emoji.list">)),
    AdminEmojiRemove: (...args) => callOperation("POST /admin.emoji.remove", ...(args as SlackWebApiOperationArgs<"POST /admin.emoji.remove">)),
    AdminEmojiRename: (...args) => callOperation("POST /admin.emoji.rename", ...(args as SlackWebApiOperationArgs<"POST /admin.emoji.rename">)),
  };
}
