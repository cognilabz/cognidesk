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
export const SlackWebApiAppsPermissionsOperationKeys = [
  "GET /apps.permissions.info",
  "GET /apps.permissions.request"
] as const;
export type SlackWebApiAppsPermissionsOperationKey = typeof SlackWebApiAppsPermissionsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAppsPermissionsOperationPathParamMap {
  "GET /apps.permissions.info": {};
  "GET /apps.permissions.request": {};
}

export interface SlackWebApiAppsPermissionsOperationRequestMap {
  "GET /apps.permissions.info": SlackWebApiOperationInput<"GET /apps.permissions.info">;
  "GET /apps.permissions.request": SlackWebApiOperationInput<"GET /apps.permissions.request">;
}

export interface SlackWebApiAppsPermissionsGeneratedClient {
  AppsPermissionsInfo(...args: SlackWebApiOperationArgs<"GET /apps.permissions.info">): Promise<SlackWebApiOperationResponseMap["GET /apps.permissions.info"]>;
  AppsPermissionsRequest(...args: SlackWebApiOperationArgs<"GET /apps.permissions.request">): Promise<SlackWebApiOperationResponseMap["GET /apps.permissions.request"]>;
}

export const SlackWebApiAppsPermissionsGeneratedFunctionNames = [
  "AppsPermissionsInfo",
  "AppsPermissionsRequest"
] as const satisfies readonly (keyof SlackWebApiAppsPermissionsGeneratedClient)[];

export function createSlackWebApiAppsPermissionsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAppsPermissionsGeneratedClient {
  return {
    AppsPermissionsInfo: (...args) => callOperation("GET /apps.permissions.info", ...(args as SlackWebApiOperationArgs<"GET /apps.permissions.info">)),
    AppsPermissionsRequest: (...args) => callOperation("GET /apps.permissions.request", ...(args as SlackWebApiOperationArgs<"GET /apps.permissions.request">)),
  };
}
