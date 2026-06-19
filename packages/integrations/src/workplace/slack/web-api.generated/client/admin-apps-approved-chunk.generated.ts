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
export const SlackWebApiAdminAppsApprovedOperationKeys = [
  "GET /admin.apps.approved.list"
] as const;
export type SlackWebApiAdminAppsApprovedOperationKey = typeof SlackWebApiAdminAppsApprovedOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminAppsApprovedOperationPathParamMap {
  "GET /admin.apps.approved.list": {};
}

export interface SlackWebApiAdminAppsApprovedOperationRequestMap {
  "GET /admin.apps.approved.list": SlackWebApiOperationInput<"GET /admin.apps.approved.list">;
}

export interface SlackWebApiAdminAppsApprovedGeneratedClient {
  AdminAppsApprovedList(...args: SlackWebApiOperationArgs<"GET /admin.apps.approved.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.apps.approved.list"]>;
}

export const SlackWebApiAdminAppsApprovedGeneratedFunctionNames = [
  "AdminAppsApprovedList"
] as const satisfies readonly (keyof SlackWebApiAdminAppsApprovedGeneratedClient)[];

export function createSlackWebApiAdminAppsApprovedGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminAppsApprovedGeneratedClient {
  return {
    AdminAppsApprovedList: (...args) => callOperation("GET /admin.apps.approved.list", ...(args as SlackWebApiOperationArgs<"GET /admin.apps.approved.list">)),
  };
}
