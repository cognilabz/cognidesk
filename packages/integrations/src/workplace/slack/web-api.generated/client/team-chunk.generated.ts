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
export const SlackWebApiTeamOperationKeys = [
  "GET /team.accessLogs",
  "GET /team.billableInfo",
  "GET /team.info",
  "GET /team.integrationLogs"
] as const;
export type SlackWebApiTeamOperationKey = typeof SlackWebApiTeamOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiTeamOperationPathParamMap {
  "GET /team.accessLogs": {};
  "GET /team.billableInfo": {};
  "GET /team.info": {};
  "GET /team.integrationLogs": {};
}

export interface SlackWebApiTeamOperationRequestMap {
  "GET /team.accessLogs": SlackWebApiOperationInput<"GET /team.accessLogs">;
  "GET /team.billableInfo": SlackWebApiOperationInput<"GET /team.billableInfo">;
  "GET /team.info": SlackWebApiOperationInput<"GET /team.info">;
  "GET /team.integrationLogs": SlackWebApiOperationInput<"GET /team.integrationLogs">;
}

export interface SlackWebApiTeamGeneratedClient {
  TeamAccessLogs(...args: SlackWebApiOperationArgs<"GET /team.accessLogs">): Promise<SlackWebApiOperationResponseMap["GET /team.accessLogs"]>;
  TeamBillableInfo(...args: SlackWebApiOperationArgs<"GET /team.billableInfo">): Promise<SlackWebApiOperationResponseMap["GET /team.billableInfo"]>;
  TeamInfo(...args: SlackWebApiOperationArgs<"GET /team.info">): Promise<SlackWebApiOperationResponseMap["GET /team.info"]>;
  TeamIntegrationLogs(...args: SlackWebApiOperationArgs<"GET /team.integrationLogs">): Promise<SlackWebApiOperationResponseMap["GET /team.integrationLogs"]>;
}

export const SlackWebApiTeamGeneratedFunctionNames = [
  "TeamAccessLogs",
  "TeamBillableInfo",
  "TeamInfo",
  "TeamIntegrationLogs"
] as const satisfies readonly (keyof SlackWebApiTeamGeneratedClient)[];

export function createSlackWebApiTeamGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiTeamGeneratedClient {
  return {
    TeamAccessLogs: (...args) => callOperation("GET /team.accessLogs", ...(args as SlackWebApiOperationArgs<"GET /team.accessLogs">)),
    TeamBillableInfo: (...args) => callOperation("GET /team.billableInfo", ...(args as SlackWebApiOperationArgs<"GET /team.billableInfo">)),
    TeamInfo: (...args) => callOperation("GET /team.info", ...(args as SlackWebApiOperationArgs<"GET /team.info">)),
    TeamIntegrationLogs: (...args) => callOperation("GET /team.integrationLogs", ...(args as SlackWebApiOperationArgs<"GET /team.integrationLogs">)),
  };
}
