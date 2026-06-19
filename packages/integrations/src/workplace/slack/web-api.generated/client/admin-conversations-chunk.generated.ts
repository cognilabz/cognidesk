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
export const SlackWebApiAdminConversationsOperationKeys = [
  "POST /admin.conversations.archive",
  "POST /admin.conversations.convertToPrivate",
  "POST /admin.conversations.create",
  "POST /admin.conversations.delete",
  "POST /admin.conversations.disconnectShared",
  "GET /admin.conversations.getConversationPrefs",
  "GET /admin.conversations.getTeams",
  "POST /admin.conversations.invite",
  "POST /admin.conversations.rename",
  "GET /admin.conversations.search",
  "POST /admin.conversations.setConversationPrefs",
  "POST /admin.conversations.setTeams",
  "POST /admin.conversations.unarchive"
] as const;
export type SlackWebApiAdminConversationsOperationKey = typeof SlackWebApiAdminConversationsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminConversationsOperationPathParamMap {
  "POST /admin.conversations.archive": {};
  "POST /admin.conversations.convertToPrivate": {};
  "POST /admin.conversations.create": {};
  "POST /admin.conversations.delete": {};
  "POST /admin.conversations.disconnectShared": {};
  "GET /admin.conversations.getConversationPrefs": {};
  "GET /admin.conversations.getTeams": {};
  "POST /admin.conversations.invite": {};
  "POST /admin.conversations.rename": {};
  "GET /admin.conversations.search": {};
  "POST /admin.conversations.setConversationPrefs": {};
  "POST /admin.conversations.setTeams": {};
  "POST /admin.conversations.unarchive": {};
}

export interface SlackWebApiAdminConversationsOperationRequestMap {
  "POST /admin.conversations.archive": SlackWebApiOperationInput<"POST /admin.conversations.archive">;
  "POST /admin.conversations.convertToPrivate": SlackWebApiOperationInput<"POST /admin.conversations.convertToPrivate">;
  "POST /admin.conversations.create": SlackWebApiOperationInput<"POST /admin.conversations.create">;
  "POST /admin.conversations.delete": SlackWebApiOperationInput<"POST /admin.conversations.delete">;
  "POST /admin.conversations.disconnectShared": SlackWebApiOperationInput<"POST /admin.conversations.disconnectShared">;
  "GET /admin.conversations.getConversationPrefs": SlackWebApiOperationInput<"GET /admin.conversations.getConversationPrefs">;
  "GET /admin.conversations.getTeams": SlackWebApiOperationInput<"GET /admin.conversations.getTeams">;
  "POST /admin.conversations.invite": SlackWebApiOperationInput<"POST /admin.conversations.invite">;
  "POST /admin.conversations.rename": SlackWebApiOperationInput<"POST /admin.conversations.rename">;
  "GET /admin.conversations.search": SlackWebApiOperationInput<"GET /admin.conversations.search">;
  "POST /admin.conversations.setConversationPrefs": SlackWebApiOperationInput<"POST /admin.conversations.setConversationPrefs">;
  "POST /admin.conversations.setTeams": SlackWebApiOperationInput<"POST /admin.conversations.setTeams">;
  "POST /admin.conversations.unarchive": SlackWebApiOperationInput<"POST /admin.conversations.unarchive">;
}

export interface SlackWebApiAdminConversationsGeneratedClient {
  AdminConversationsArchive(...args: SlackWebApiOperationArgs<"POST /admin.conversations.archive">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.archive"]>;
  AdminConversationsConvertToPrivate(...args: SlackWebApiOperationArgs<"POST /admin.conversations.convertToPrivate">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.convertToPrivate"]>;
  AdminConversationsCreate(...args: SlackWebApiOperationArgs<"POST /admin.conversations.create">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.create"]>;
  AdminConversationsDelete(...args: SlackWebApiOperationArgs<"POST /admin.conversations.delete">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.delete"]>;
  AdminConversationsDisconnectShared(...args: SlackWebApiOperationArgs<"POST /admin.conversations.disconnectShared">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.disconnectShared"]>;
  AdminConversationsGetConversationPrefs(...args: SlackWebApiOperationArgs<"GET /admin.conversations.getConversationPrefs">): Promise<SlackWebApiOperationResponseMap["GET /admin.conversations.getConversationPrefs"]>;
  AdminConversationsGetTeams(...args: SlackWebApiOperationArgs<"GET /admin.conversations.getTeams">): Promise<SlackWebApiOperationResponseMap["GET /admin.conversations.getTeams"]>;
  AdminConversationsInvite(...args: SlackWebApiOperationArgs<"POST /admin.conversations.invite">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.invite"]>;
  AdminConversationsRename(...args: SlackWebApiOperationArgs<"POST /admin.conversations.rename">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.rename"]>;
  AdminConversationsSearch(...args: SlackWebApiOperationArgs<"GET /admin.conversations.search">): Promise<SlackWebApiOperationResponseMap["GET /admin.conversations.search"]>;
  AdminConversationsSetConversationPrefs(...args: SlackWebApiOperationArgs<"POST /admin.conversations.setConversationPrefs">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.setConversationPrefs"]>;
  AdminConversationsSetTeams(...args: SlackWebApiOperationArgs<"POST /admin.conversations.setTeams">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.setTeams"]>;
  AdminConversationsUnarchive(...args: SlackWebApiOperationArgs<"POST /admin.conversations.unarchive">): Promise<SlackWebApiOperationResponseMap["POST /admin.conversations.unarchive"]>;
}

export const SlackWebApiAdminConversationsGeneratedFunctionNames = [
  "AdminConversationsArchive",
  "AdminConversationsConvertToPrivate",
  "AdminConversationsCreate",
  "AdminConversationsDelete",
  "AdminConversationsDisconnectShared",
  "AdminConversationsGetConversationPrefs",
  "AdminConversationsGetTeams",
  "AdminConversationsInvite",
  "AdminConversationsRename",
  "AdminConversationsSearch",
  "AdminConversationsSetConversationPrefs",
  "AdminConversationsSetTeams",
  "AdminConversationsUnarchive"
] as const satisfies readonly (keyof SlackWebApiAdminConversationsGeneratedClient)[];

export function createSlackWebApiAdminConversationsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminConversationsGeneratedClient {
  return {
    AdminConversationsArchive: (...args) => callOperation("POST /admin.conversations.archive", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.archive">)),
    AdminConversationsConvertToPrivate: (...args) => callOperation("POST /admin.conversations.convertToPrivate", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.convertToPrivate">)),
    AdminConversationsCreate: (...args) => callOperation("POST /admin.conversations.create", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.create">)),
    AdminConversationsDelete: (...args) => callOperation("POST /admin.conversations.delete", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.delete">)),
    AdminConversationsDisconnectShared: (...args) => callOperation("POST /admin.conversations.disconnectShared", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.disconnectShared">)),
    AdminConversationsGetConversationPrefs: (...args) => callOperation("GET /admin.conversations.getConversationPrefs", ...(args as SlackWebApiOperationArgs<"GET /admin.conversations.getConversationPrefs">)),
    AdminConversationsGetTeams: (...args) => callOperation("GET /admin.conversations.getTeams", ...(args as SlackWebApiOperationArgs<"GET /admin.conversations.getTeams">)),
    AdminConversationsInvite: (...args) => callOperation("POST /admin.conversations.invite", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.invite">)),
    AdminConversationsRename: (...args) => callOperation("POST /admin.conversations.rename", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.rename">)),
    AdminConversationsSearch: (...args) => callOperation("GET /admin.conversations.search", ...(args as SlackWebApiOperationArgs<"GET /admin.conversations.search">)),
    AdminConversationsSetConversationPrefs: (...args) => callOperation("POST /admin.conversations.setConversationPrefs", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.setConversationPrefs">)),
    AdminConversationsSetTeams: (...args) => callOperation("POST /admin.conversations.setTeams", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.setTeams">)),
    AdminConversationsUnarchive: (...args) => callOperation("POST /admin.conversations.unarchive", ...(args as SlackWebApiOperationArgs<"POST /admin.conversations.unarchive">)),
  };
}
