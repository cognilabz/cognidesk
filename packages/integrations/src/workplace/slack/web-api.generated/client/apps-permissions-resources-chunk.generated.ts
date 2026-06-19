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
export const SlackWebApiAppsPermissionsResourcesOperationKeys = [
  "GET /apps.permissions.resources.list"
] as const;
export type SlackWebApiAppsPermissionsResourcesOperationKey = typeof SlackWebApiAppsPermissionsResourcesOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAppsPermissionsResourcesOperationPathParamMap {
  "GET /apps.permissions.resources.list": {};
}

export interface SlackWebApiAppsPermissionsResourcesOperationRequestMap {
  "GET /apps.permissions.resources.list": SlackWebApiOperationInput<"GET /apps.permissions.resources.list">;
}

export interface SlackWebApiAppsPermissionsResourcesGeneratedClient {
  AppsPermissionsResourcesList(...args: SlackWebApiOperationArgs<"GET /apps.permissions.resources.list">): Promise<SlackWebApiOperationResponseMap["GET /apps.permissions.resources.list"]>;
}

export const SlackWebApiAppsPermissionsResourcesGeneratedFunctionNames = [
  "AppsPermissionsResourcesList"
] as const satisfies readonly (keyof SlackWebApiAppsPermissionsResourcesGeneratedClient)[];

export function createSlackWebApiAppsPermissionsResourcesGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAppsPermissionsResourcesGeneratedClient {
  return {
    AppsPermissionsResourcesList: (...args) => callOperation("GET /apps.permissions.resources.list", ...(args as SlackWebApiOperationArgs<"GET /apps.permissions.resources.list">)),
  };
}
