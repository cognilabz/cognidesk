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
export const SlackWebApiAdminConversationsRestrictAccessOperationKeys = [
  "POST /admin.conversations.restrictAccess.addGroup",
  "GET /admin.conversations.restrictAccess.listGroups",
  "POST /admin.conversations.restrictAccess.removeGroup"
] as const;
export type SlackWebApiAdminConversationsRestrictAccessOperationKey = typeof SlackWebApiAdminConversationsRestrictAccessOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminConversationsRestrictAccessOperationPathParamMap {
  "POST /admin.conversations.restrictAccess.addGroup": {};
  "GET /admin.conversations.restrictAccess.listGroups": {};
  "POST /admin.conversations.restrictAccess.removeGroup": {};
}

export interface SlackWebApiAdminConversationsRestrictAccessOperationRequestMap {
  "POST /admin.conversations.restrictAccess.addGroup": SlackWebApiOperationInput<"POST /admin.conversations.restrictAccess.addGroup">;
  "GET /admin.conversations.restrictAccess.listGroups": SlackWebApiOperationInput<"GET /admin.conversations.restrictAccess.listGroups">;
  "POST /admin.conversations.restrictAccess.removeGroup": SlackWebApiOperationInput<"POST /admin.conversations.restrictAccess.removeGroup">;
}

export interface SlackWebApiAdminConversationsRestrictAccessGeneratedClient {
  AdminConversationsRestrictAccessAddGroup(...args: SlackWebApiOperationArgs<"POST /admin.conversations.restrictAccess.addGroup">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.restrictAccess.addGroup"]>;
  AdminConversationsRestrictAccessListGroups(...args: SlackWebApiOperationArgs<"GET /admin.conversations.restrictAccess.listGroups">): Promise<SlackWebApiOperationResponseMap["GET /admin.conversations.restrictAccess.listGroups"]>;
  AdminConversationsRestrictAccessRemoveGroup(...args: SlackWebApiOperationArgs<"POST /admin.conversations.restrictAccess.removeGroup">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.restrictAccess.removeGroup"]>;
}

export const SlackWebApiAdminConversationsRestrictAccessGeneratedFunctionNames = [
  "AdminConversationsRestrictAccessAddGroup",
  "AdminConversationsRestrictAccessListGroups",
  "AdminConversationsRestrictAccessRemoveGroup"
] as const satisfies readonly (keyof SlackWebApiAdminConversationsRestrictAccessGeneratedClient)[];

export function createSlackWebApiAdminConversationsRestrictAccessGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminConversationsRestrictAccessGeneratedClient {
  return {
    AdminConversationsRestrictAccessAddGroup: (...args) => callOperation("POST /admin.conversations.restrictAccess.addGroup", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.restrictAccess.addGroup">)),
    AdminConversationsRestrictAccessListGroups: (...args) => callOperation("GET /admin.conversations.restrictAccess.listGroups", ...(args as SlackWebApiOperationArgs<"GET /admin.conversations.restrictAccess.listGroups">)),
    AdminConversationsRestrictAccessRemoveGroup: (...args) => callOperation("POST /admin.conversations.restrictAccess.removeGroup", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.restrictAccess.removeGroup">)),
  };
}
