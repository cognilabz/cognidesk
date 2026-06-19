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
export const SlackWebApiAppsOperationKeys = [
  "GET /apps.uninstall"
] as const;
export type SlackWebApiAppsOperationKey = typeof SlackWebApiAppsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAppsOperationPathParamMap {
  "GET /apps.uninstall": {};
}

export interface SlackWebApiAppsOperationRequestMap {
  "GET /apps.uninstall": SlackWebApiOperationInput<"GET /apps.uninstall">;
}

export interface SlackWebApiAppsGeneratedClient {
  AppsUninstall(...args: SlackWebApiOperationArgs<"GET /apps.uninstall">): Promise<SlackWebApiOperationResponseMap["GET /apps.uninstall"]>;
}

export const SlackWebApiAppsGeneratedFunctionNames = [
  "AppsUninstall"
] as const satisfies readonly (keyof SlackWebApiAppsGeneratedClient)[];

export function createSlackWebApiAppsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAppsGeneratedClient {
  return {
    AppsUninstall: (...args) => callOperation("GET /apps.uninstall", ...(args as SlackWebApiOperationArgs<"GET /apps.uninstall">)),
  };
}
