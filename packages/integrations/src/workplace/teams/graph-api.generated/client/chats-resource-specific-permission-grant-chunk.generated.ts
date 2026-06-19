// Generated endpoint chunk for TeamsGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TeamsGraphGeneratedOperationCaller,
  TeamsGraphOperationArgs,
  TeamsGraphOperationInput,
  TeamsGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { TeamsGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TeamsGraphChatsResourceSpecificPermissionGrantOperationKeys = [
  "chats.ListPermissionGrants",
  "chats.CreatePermissionGrants",
  "chats.GetPermissionGrants",
  "chats.UpdatePermissionGrants",
  "chats.DeletePermissionGrants",
  "chats.permissionGrants.GetCount-7597"
] as const;
export type TeamsGraphChatsResourceSpecificPermissionGrantOperationKey = typeof TeamsGraphChatsResourceSpecificPermissionGrantOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsResourceSpecificPermissionGrantOperationPathParamMap {
  "chats.ListPermissionGrants": { "chat-id": TeamsGraphPathParamValue };
  "chats.CreatePermissionGrants": { "chat-id": TeamsGraphPathParamValue };
  "chats.GetPermissionGrants": { "chat-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "chats.UpdatePermissionGrants": { "chat-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "chats.DeletePermissionGrants": { "chat-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "chats.permissionGrants.GetCount-7597": { "chat-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphChatsResourceSpecificPermissionGrantOperationRequestMap {
  "chats.ListPermissionGrants": TeamsGraphOperationInput<"chats.ListPermissionGrants">;
  "chats.CreatePermissionGrants": TeamsGraphOperationInput<"chats.CreatePermissionGrants">;
  "chats.GetPermissionGrants": TeamsGraphOperationInput<"chats.GetPermissionGrants">;
  "chats.UpdatePermissionGrants": TeamsGraphOperationInput<"chats.UpdatePermissionGrants">;
  "chats.DeletePermissionGrants": TeamsGraphOperationInput<"chats.DeletePermissionGrants">;
  "chats.permissionGrants.GetCount-7597": TeamsGraphOperationInput<"chats.permissionGrants.GetCount-7597">;
}

export interface TeamsGraphChatsResourceSpecificPermissionGrantGeneratedClient {
  ChatsListPermissionGrants(...args: TeamsGraphOperationArgs<"chats.ListPermissionGrants">): Promise<TeamsGraphOperationResponseMap["chats.ListPermissionGrants"]>;
  ChatsCreatePermissionGrants(...args: TeamsGraphOperationArgs<"chats.CreatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["chats.CreatePermissionGrants"]>;
  ChatsGetPermissionGrants(...args: TeamsGraphOperationArgs<"chats.GetPermissionGrants">): Promise<TeamsGraphOperationResponseMap["chats.GetPermissionGrants"]>;
  ChatsUpdatePermissionGrants(...args: TeamsGraphOperationArgs<"chats.UpdatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["chats.UpdatePermissionGrants"]>;
  ChatsDeletePermissionGrants(...args: TeamsGraphOperationArgs<"chats.DeletePermissionGrants">): Promise<TeamsGraphOperationResponseMap["chats.DeletePermissionGrants"]>;
  ChatsPermissionGrantsGetCount7597(...args: TeamsGraphOperationArgs<"chats.permissionGrants.GetCount-7597">): Promise<TeamsGraphOperationResponseMap["chats.permissionGrants.GetCount-7597"]>;
}

export const TeamsGraphChatsResourceSpecificPermissionGrantGeneratedFunctionNames = [
  "ChatsListPermissionGrants",
  "ChatsCreatePermissionGrants",
  "ChatsGetPermissionGrants",
  "ChatsUpdatePermissionGrants",
  "ChatsDeletePermissionGrants",
  "ChatsPermissionGrantsGetCount7597"
] as const satisfies readonly (keyof TeamsGraphChatsResourceSpecificPermissionGrantGeneratedClient)[];

export function createTeamsGraphChatsResourceSpecificPermissionGrantGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsResourceSpecificPermissionGrantGeneratedClient {
  return {
    ChatsListPermissionGrants: (...args) => callOperation("chats.ListPermissionGrants", ...(args as TeamsGraphOperationArgs<"chats.ListPermissionGrants">)),
    ChatsCreatePermissionGrants: (...args) => callOperation("chats.CreatePermissionGrants", ...(args as TeamsGraphOperationArgs<"chats.CreatePermissionGrants">)),
    ChatsGetPermissionGrants: (...args) => callOperation("chats.GetPermissionGrants", ...(args as TeamsGraphOperationArgs<"chats.GetPermissionGrants">)),
    ChatsUpdatePermissionGrants: (...args) => callOperation("chats.UpdatePermissionGrants", ...(args as TeamsGraphOperationArgs<"chats.UpdatePermissionGrants">)),
    ChatsDeletePermissionGrants: (...args) => callOperation("chats.DeletePermissionGrants", ...(args as TeamsGraphOperationArgs<"chats.DeletePermissionGrants">)),
    ChatsPermissionGrantsGetCount7597: (...args) => callOperation("chats.permissionGrants.GetCount-7597", ...(args as TeamsGraphOperationArgs<"chats.permissionGrants.GetCount-7597">)),
  };
}
