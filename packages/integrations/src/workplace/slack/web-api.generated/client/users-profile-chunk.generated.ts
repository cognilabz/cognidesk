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
export const SlackWebApiUsersProfileOperationKeys = [
  "GET /users.profile.get",
  "POST /users.profile.set"
] as const;
export type SlackWebApiUsersProfileOperationKey = typeof SlackWebApiUsersProfileOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiUsersProfileOperationPathParamMap {
  "GET /users.profile.get": {};
  "POST /users.profile.set": {};
}

export interface SlackWebApiUsersProfileOperationRequestMap {
  "GET /users.profile.get": SlackWebApiOperationInput<"GET /users.profile.get">;
  "POST /users.profile.set": SlackWebApiOperationInput<"POST /users.profile.set">;
}

export interface SlackWebApiUsersProfileGeneratedClient {
  UsersProfileGet(...args: SlackWebApiOperationArgs<"GET /users.profile.get">): Promise<SlackWebApiOperationResponseMap["GET /users.profile.get"]>;
  UsersProfileSet(...args: SlackWebApiOperationArgs<"POST /users.profile.set">): Promise<SlackWebApiOperationResponseMap["POST /users.profile.set"]>;
}

export const SlackWebApiUsersProfileGeneratedFunctionNames = [
  "UsersProfileGet",
  "UsersProfileSet"
] as const satisfies readonly (keyof SlackWebApiUsersProfileGeneratedClient)[];

export function createSlackWebApiUsersProfileGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiUsersProfileGeneratedClient {
  return {
    UsersProfileGet: (...args) => callOperation("GET /users.profile.get", ...(args as SlackWebApiOperationArgs<"GET /users.profile.get">)),
    UsersProfileSet: (...args) => callOperation("POST /users.profile.set", ...(args as SlackWebApiOperationArgs<"POST /users.profile.set">)),
  };
}
