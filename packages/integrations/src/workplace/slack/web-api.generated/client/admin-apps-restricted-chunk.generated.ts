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
export const SlackWebApiAdminAppsRestrictedOperationKeys = [
  "GET /admin.apps.restricted.list"
] as const;
export type SlackWebApiAdminAppsRestrictedOperationKey = typeof SlackWebApiAdminAppsRestrictedOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminAppsRestrictedOperationPathParamMap {
  "GET /admin.apps.restricted.list": {};
}

export interface SlackWebApiAdminAppsRestrictedOperationRequestMap {
  "GET /admin.apps.restricted.list": SlackWebApiOperationInput<"GET /admin.apps.restricted.list">;
}

export interface SlackWebApiAdminAppsRestrictedGeneratedClient {
  AdminAppsRestrictedList(...args: SlackWebApiOperationArgs<"GET /admin.apps.restricted.list">): Promise<SlackWebApiOperationResponseMap["GET /admin.apps.restricted.list"]>;
}

export const SlackWebApiAdminAppsRestrictedGeneratedFunctionNames = [
  "AdminAppsRestrictedList"
] as const satisfies readonly (keyof SlackWebApiAdminAppsRestrictedGeneratedClient)[];

export function createSlackWebApiAdminAppsRestrictedGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminAppsRestrictedGeneratedClient {
  return {
    AdminAppsRestrictedList: (...args) => callOperation("GET /admin.apps.restricted.list", ...(args as SlackWebApiOperationArgs<"GET /admin.apps.restricted.list">)),
  };
}
