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
export const SlackWebApiAdminAppsOperationKeys = [
  "POST /admin.apps.approve",
  "POST /admin.apps.restrict"
] as const;
export type SlackWebApiAdminAppsOperationKey = typeof SlackWebApiAdminAppsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAdminAppsOperationPathParamMap {
  "POST /admin.apps.approve": {};
  "POST /admin.apps.restrict": {};
}

export interface SlackWebApiAdminAppsOperationRequestMap {
  "POST /admin.apps.approve": SlackWebApiOperationInput<"POST /admin.apps.approve">;
  "POST /admin.apps.restrict": SlackWebApiOperationInput<"POST /admin.apps.restrict">;
}

export interface SlackWebApiAdminAppsGeneratedClient {
  AdminAppsApprove(...args: SlackWebApiOperationArgs<"POST /admin.apps.approve">): Promise<SlackWebApiOperationResponseMap["POST /admin.apps.approve"]>;
  AdminAppsRestrict(...args: SlackWebApiOperationArgs<"POST /admin.apps.restrict">): Promise<SlackWebApiOperationResponseMap["POST /admin.apps.restrict"]>;
}

export const SlackWebApiAdminAppsGeneratedFunctionNames = [
  "AdminAppsApprove",
  "AdminAppsRestrict"
] as const satisfies readonly (keyof SlackWebApiAdminAppsGeneratedClient)[];

export function createSlackWebApiAdminAppsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAdminAppsGeneratedClient {
  return {
    AdminAppsApprove: (...args) => callOperation("POST /admin.apps.approve", ...(args as SlackWebApiOperationArgs<"POST /admin.apps.approve">)),
    AdminAppsRestrict: (...args) => callOperation("POST /admin.apps.restrict", ...(args as SlackWebApiOperationArgs<"POST /admin.apps.restrict">)),
  };
}
