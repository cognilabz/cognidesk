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
export const SlackWebApiTeamProfileOperationKeys = [
  "GET /team.profile.get"
] as const;
export type SlackWebApiTeamProfileOperationKey = typeof SlackWebApiTeamProfileOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiTeamProfileOperationPathParamMap {
  "GET /team.profile.get": {};
}

export interface SlackWebApiTeamProfileOperationRequestMap {
  "GET /team.profile.get": SlackWebApiOperationInput<"GET /team.profile.get">;
}

export interface SlackWebApiTeamProfileGeneratedClient {
  TeamProfileGet(...args: SlackWebApiOperationArgs<"GET /team.profile.get">): Promise<SlackWebApiOperationResponseMap["GET /team.profile.get"]>;
}

export const SlackWebApiTeamProfileGeneratedFunctionNames = [
  "TeamProfileGet"
] as const satisfies readonly (keyof SlackWebApiTeamProfileGeneratedClient)[];

export function createSlackWebApiTeamProfileGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiTeamProfileGeneratedClient {
  return {
    TeamProfileGet: (...args) => callOperation("GET /team.profile.get", ...(args as SlackWebApiOperationArgs<"GET /team.profile.get">)),
  };
}
