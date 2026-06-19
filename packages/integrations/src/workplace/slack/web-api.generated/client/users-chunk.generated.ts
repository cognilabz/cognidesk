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
export const SlackWebApiUsersOperationKeys = [
  "GET /users.conversations",
  "POST /users.deletePhoto",
  "GET /users.getPresence",
  "GET /users.identity",
  "GET /users.info",
  "GET /users.list",
  "GET /users.lookupByEmail",
  "POST /users.setActive",
  "POST /users.setPhoto",
  "POST /users.setPresence"
] as const;
export type SlackWebApiUsersOperationKey = typeof SlackWebApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiUsersOperationPathParamMap {
  "GET /users.conversations": {};
  "POST /users.deletePhoto": {};
  "GET /users.getPresence": {};
  "GET /users.identity": {};
  "GET /users.info": {};
  "GET /users.list": {};
  "GET /users.lookupByEmail": {};
  "POST /users.setActive": {};
  "POST /users.setPhoto": {};
  "POST /users.setPresence": {};
}

export interface SlackWebApiUsersOperationRequestMap {
  "GET /users.conversations": SlackWebApiOperationInput<"GET /users.conversations">;
  "POST /users.deletePhoto": SlackWebApiOperationInput<"POST /users.deletePhoto">;
  "GET /users.getPresence": SlackWebApiOperationInput<"GET /users.getPresence">;
  "GET /users.identity": SlackWebApiOperationInput<"GET /users.identity">;
  "GET /users.info": SlackWebApiOperationInput<"GET /users.info">;
  "GET /users.list": SlackWebApiOperationInput<"GET /users.list">;
  "GET /users.lookupByEmail": SlackWebApiOperationInput<"GET /users.lookupByEmail">;
  "POST /users.setActive": SlackWebApiOperationInput<"POST /users.setActive">;
  "POST /users.setPhoto": SlackWebApiOperationInput<"POST /users.setPhoto">;
  "POST /users.setPresence": SlackWebApiOperationInput<"POST /users.setPresence">;
}

export interface SlackWebApiUsersGeneratedClient {
  UsersConversations(...args: SlackWebApiOperationArgs<"GET /users.conversations">): Promise<SlackWebApiOperationResponseMap["GET /users.conversations"]>;
  UsersDeletePhoto(...args: SlackWebApiOperationArgs<"POST /users.deletePhoto">): Promise<SlackWebApiOperationResponseMap["POST /users.deletePhoto"]>;
  UsersGetPresence(...args: SlackWebApiOperationArgs<"GET /users.getPresence">): Promise<SlackWebApiOperationResponseMap["GET /users.getPresence"]>;
  UsersIdentity(...args: SlackWebApiOperationArgs<"GET /users.identity">): Promise<SlackWebApiOperationResponseMap["GET /users.identity"]>;
  UsersInfo(...args: SlackWebApiOperationArgs<"GET /users.info">): Promise<SlackWebApiOperationResponseMap["GET /users.info"]>;
  UsersList(...args: SlackWebApiOperationArgs<"GET /users.list">): Promise<SlackWebApiOperationResponseMap["GET /users.list"]>;
  UsersLookupByEmail(...args: SlackWebApiOperationArgs<"GET /users.lookupByEmail">): Promise<SlackWebApiOperationResponseMap["GET /users.lookupByEmail"]>;
  UsersSetActive(...args: SlackWebApiOperationArgs<"POST /users.setActive">): Promise<SlackWebApiOperationResponseMap["POST /users.setActive"]>;
  UsersSetPhoto(...args: SlackWebApiOperationArgs<"POST /users.setPhoto">): Promise<SlackWebApiOperationResponseMap["POST /users.setPhoto"]>;
  UsersSetPresence(...args: SlackWebApiOperationArgs<"POST /users.setPresence">): Promise<SlackWebApiOperationResponseMap["POST /users.setPresence"]>;
}

export const SlackWebApiUsersGeneratedFunctionNames = [
  "UsersConversations",
  "UsersDeletePhoto",
  "UsersGetPresence",
  "UsersIdentity",
  "UsersInfo",
  "UsersList",
  "UsersLookupByEmail",
  "UsersSetActive",
  "UsersSetPhoto",
  "UsersSetPresence"
] as const satisfies readonly (keyof SlackWebApiUsersGeneratedClient)[];

export function createSlackWebApiUsersGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiUsersGeneratedClient {
  return {
    UsersConversations: (...args) => callOperation("GET /users.conversations", ...(args as SlackWebApiOperationArgs<"GET /users.conversations">)),
    UsersDeletePhoto: (...args) => callOperation("POST /users.deletePhoto", ...(args as SlackWebApiOperationArgs<"POST /users.deletePhoto">)),
    UsersGetPresence: (...args) => callOperation("GET /users.getPresence", ...(args as SlackWebApiOperationArgs<"GET /users.getPresence">)),
    UsersIdentity: (...args) => callOperation("GET /users.identity", ...(args as SlackWebApiOperationArgs<"GET /users.identity">)),
    UsersInfo: (...args) => callOperation("GET /users.info", ...(args as SlackWebApiOperationArgs<"GET /users.info">)),
    UsersList: (...args) => callOperation("GET /users.list", ...(args as SlackWebApiOperationArgs<"GET /users.list">)),
    UsersLookupByEmail: (...args) => callOperation("GET /users.lookupByEmail", ...(args as SlackWebApiOperationArgs<"GET /users.lookupByEmail">)),
    UsersSetActive: (...args) => callOperation("POST /users.setActive", ...(args as SlackWebApiOperationArgs<"POST /users.setActive">)),
    UsersSetPhoto: (...args) => callOperation("POST /users.setPhoto", ...(args as SlackWebApiOperationArgs<"POST /users.setPhoto">)),
    UsersSetPresence: (...args) => callOperation("POST /users.setPresence", ...(args as SlackWebApiOperationArgs<"POST /users.setPresence">)),
  };
}
