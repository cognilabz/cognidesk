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
export const SlackWebApiAdminConversationsEkmOperationKeys = [
  "GET /admin.conversations.ekm.listOriginalConnectedChannelInfo"
] as const;
export type SlackWebApiAdminConversationsEkmOperationKey = typeof SlackWebApiAdminConversationsEkmOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminConversationsEkmOperationPathParamMap {
  "GET /admin.conversations.ekm.listOriginalConnectedChannelInfo": {};
}

export interface SlackWebApiAdminConversationsEkmOperationRequestMap {
  "GET /admin.conversations.ekm.listOriginalConnectedChannelInfo": SlackWebApiOperationInput<"GET /admin.conversations.ekm.listOriginalConnectedChannelInfo">;
}

export interface SlackWebApiAdminConversationsEkmGeneratedClient {
  AdminConversationsEkmListOriginalConnectedChannelInfo(...args: SlackWebApiOperationArgs<"GET /admin.conversations.ekm.listOriginalConnectedChannelInfo">): Promise<SlackWebApiOperationResponseMap["GET /admin.conversations.ekm.listOriginalConnectedChannelInfo"]>;
}

export const SlackWebApiAdminConversationsEkmGeneratedFunctionNames = [
  "AdminConversationsEkmListOriginalConnectedChannelInfo"
] as const satisfies readonly (keyof SlackWebApiAdminConversationsEkmGeneratedClient)[];

export function createSlackWebApiAdminConversationsEkmGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminConversationsEkmGeneratedClient {
  return {
    AdminConversationsEkmListOriginalConnectedChannelInfo: (...args) => callOperation("GET /admin.conversations.ekm.listOriginalConnectedChannelInfo", ...(args as SlackWebApiOperationArgs<"GET /admin.conversations.ekm.listOriginalConnectedChannelInfo">)),
  };
}
