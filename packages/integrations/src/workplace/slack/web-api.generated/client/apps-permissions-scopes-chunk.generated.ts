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
export const SlackWebApiAppsPermissionsScopesOperationKeys = [
  "GET /apps.permissions.scopes.list"
] as const;
export type SlackWebApiAppsPermissionsScopesOperationKey = typeof SlackWebApiAppsPermissionsScopesOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAppsPermissionsScopesOperationPathParamMap {
  "GET /apps.permissions.scopes.list": {};
}

export interface SlackWebApiAppsPermissionsScopesOperationRequestMap {
  "GET /apps.permissions.scopes.list": SlackWebApiOperationInput<"GET /apps.permissions.scopes.list">;
}

export interface SlackWebApiAppsPermissionsScopesGeneratedClient {
  AppsPermissionsScopesList(...args: SlackWebApiOperationArgs<"GET /apps.permissions.scopes.list">): Promise<SlackWebApiOperationResponseMap["GET /apps.permissions.scopes.list"]>;
}

export const SlackWebApiAppsPermissionsScopesGeneratedFunctionNames = [
  "AppsPermissionsScopesList"
] as const satisfies readonly (keyof SlackWebApiAppsPermissionsScopesGeneratedClient)[];

export function createSlackWebApiAppsPermissionsScopesGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAppsPermissionsScopesGeneratedClient {
  return {
    AppsPermissionsScopesList: (...args) => callOperation("GET /apps.permissions.scopes.list", ...(args as SlackWebApiOperationArgs<"GET /apps.permissions.scopes.list">)),
  };
}
