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
export const SlackWebApiAppsPermissionsUsersOperationKeys = [
  "GET /apps.permissions.users.list",
  "GET /apps.permissions.users.request"
] as const;
export type SlackWebApiAppsPermissionsUsersOperationKey = typeof SlackWebApiAppsPermissionsUsersOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAppsPermissionsUsersOperationPathParamMap {
  "GET /apps.permissions.users.list": {};
  "GET /apps.permissions.users.request": {};
}

export interface SlackWebApiAppsPermissionsUsersOperationRequestMap {
  "GET /apps.permissions.users.list": SlackWebApiOperationInput<"GET /apps.permissions.users.list">;
  "GET /apps.permissions.users.request": SlackWebApiOperationInput<"GET /apps.permissions.users.request">;
}

export interface SlackWebApiAppsPermissionsUsersGeneratedClient {
  AppsPermissionsUsersList(...args: SlackWebApiOperationArgs<"GET /apps.permissions.users.list">): Promise<SlackWebApiOperationResponseMap["GET /apps.permissions.users.list"]>;
  AppsPermissionsUsersRequest(...args: SlackWebApiOperationArgs<"GET /apps.permissions.users.request">): Promise<SlackWebApiOperationResponseMap["GET /apps.permissions.users.request"]>;
}

export const SlackWebApiAppsPermissionsUsersGeneratedFunctionNames = [
  "AppsPermissionsUsersList",
  "AppsPermissionsUsersRequest"
] as const satisfies readonly (keyof SlackWebApiAppsPermissionsUsersGeneratedClient)[];

export function createSlackWebApiAppsPermissionsUsersGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAppsPermissionsUsersGeneratedClient {
  return {
    AppsPermissionsUsersList: (...args) => callOperation("GET /apps.permissions.users.list", ...(args as SlackWebApiOperationArgs<"GET /apps.permissions.users.list">)),
    AppsPermissionsUsersRequest: (...args) => callOperation("GET /apps.permissions.users.request", ...(args as SlackWebApiOperationArgs<"GET /apps.permissions.users.request">)),
  };
}
