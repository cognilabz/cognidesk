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
export const SlackWebApiAdminAppsRequestsOperationKeys = [
  "GET /admin.apps.requests.list"
] as const;
export type SlackWebApiAdminAppsRequestsOperationKey = typeof SlackWebApiAdminAppsRequestsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminAppsRequestsOperationPathParamMap {
  "GET /admin.apps.requests.list": {};
}

export interface SlackWebApiAdminAppsRequestsOperationRequestMap {
  "GET /admin.apps.requests.list": SlackWebApiOperationInput<"GET /admin.apps.requests.list">;
}

export interface SlackWebApiAdminAppsRequestsGeneratedClient {
  AdminAppsRequestsList(...args: SlackWebApiOperationArgs<"GET /admin.apps.requests.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.apps.requests.list"]>;
}

export const SlackWebApiAdminAppsRequestsGeneratedFunctionNames = [
  "AdminAppsRequestsList"
] as const satisfies readonly (keyof SlackWebApiAdminAppsRequestsGeneratedClient)[];

export function createSlackWebApiAdminAppsRequestsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminAppsRequestsGeneratedClient {
  return {
    AdminAppsRequestsList: (...args) => callOperation("GET /admin.apps.requests.list", ...(args as SlackWebApiOperationArgs<"GET /admin.apps.requests.list">)),
  };
}
