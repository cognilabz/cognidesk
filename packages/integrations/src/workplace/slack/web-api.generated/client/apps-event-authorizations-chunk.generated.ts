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
export const SlackWebApiAppsEventAuthorizationsOperationKeys = [
  "GET /apps.event.authorizations.list"
] as const;
export type SlackWebApiAppsEventAuthorizationsOperationKey = typeof SlackWebApiAppsEventAuthorizationsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiAppsEventAuthorizationsOperationPathParamMap {
  "GET /apps.event.authorizations.list": {};
}

export interface SlackWebApiAppsEventAuthorizationsOperationRequestMap {
  "GET /apps.event.authorizations.list": SlackWebApiOperationInput<"GET /apps.event.authorizations.list">;
}

export interface SlackWebApiAppsEventAuthorizationsGeneratedClient {
  AppsEventAuthorizationsList(...args: SlackWebApiOperationArgs<"GET /apps.event.authorizations.list">): Promise<SlackWebApiOperationResponseMap["GET /apps.event.authorizations.list"]>;
}

export const SlackWebApiAppsEventAuthorizationsGeneratedFunctionNames = [
  "AppsEventAuthorizationsList"
] as const satisfies readonly (keyof SlackWebApiAppsEventAuthorizationsGeneratedClient)[];

export function createSlackWebApiAppsEventAuthorizationsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiAppsEventAuthorizationsGeneratedClient {
  return {
    AppsEventAuthorizationsList: (...args) => callOperation("GET /apps.event.authorizations.list", ...(args as SlackWebApiOperationArgs<"GET /apps.event.authorizations.list">)),
  };
}
