// Generated endpoint chunk for TeamsGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TeamsGraphGeneratedOperationCaller,
  TeamsGraphOperationArgs,
  TeamsGraphOperationInput,
  TeamsGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { TeamsGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TeamsGraphTeamworkWorkforceIntegrationOperationKeys = [
  "teamwork.ListWorkforceIntegrations",
  "teamwork.CreateWorkforceIntegrations",
  "teamwork.GetWorkforceIntegrations",
  "teamwork.UpdateWorkforceIntegrations",
  "teamwork.DeleteWorkforceIntegrations",
  "teamwork.workforceIntegrations.GetCount-5b5b"
] as const;
export type TeamsGraphTeamworkWorkforceIntegrationOperationKey = typeof TeamsGraphTeamworkWorkforceIntegrationOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamworkWorkforceIntegrationOperationPathParamMap {
  "teamwork.ListWorkforceIntegrations": {};
  "teamwork.CreateWorkforceIntegrations": {};
  "teamwork.GetWorkforceIntegrations": { "workforceIntegration-id": TeamsGraphPathParamValue };
  "teamwork.UpdateWorkforceIntegrations": { "workforceIntegration-id": TeamsGraphPathParamValue };
  "teamwork.DeleteWorkforceIntegrations": { "workforceIntegration-id": TeamsGraphPathParamValue };
  "teamwork.workforceIntegrations.GetCount-5b5b": {};
}

export interface TeamsGraphTeamworkWorkforceIntegrationOperationRequestMap {
  "teamwork.ListWorkforceIntegrations": TeamsGraphOperationInput<"teamwork.ListWorkforceIntegrations">;
  "teamwork.CreateWorkforceIntegrations": TeamsGraphOperationInput<"teamwork.CreateWorkforceIntegrations">;
  "teamwork.GetWorkforceIntegrations": TeamsGraphOperationInput<"teamwork.GetWorkforceIntegrations">;
  "teamwork.UpdateWorkforceIntegrations": TeamsGraphOperationInput<"teamwork.UpdateWorkforceIntegrations">;
  "teamwork.DeleteWorkforceIntegrations": TeamsGraphOperationInput<"teamwork.DeleteWorkforceIntegrations">;
  "teamwork.workforceIntegrations.GetCount-5b5b": TeamsGraphOperationInput<"teamwork.workforceIntegrations.GetCount-5b5b">;
}

export interface TeamsGraphTeamworkWorkforceIntegrationGeneratedClient {
  TeamworkListWorkforceIntegrations(...args: TeamsGraphOperationArgs<"teamwork.ListWorkforceIntegrations">): Promise<TeamsGraphOperationResponseMap["teamwork.ListWorkforceIntegrations"]>;
  TeamworkCreateWorkforceIntegrations(...args: TeamsGraphOperationArgs<"teamwork.CreateWorkforceIntegrations">): Promise<TeamsGraphOperationResponseMap["teamwork.CreateWorkforceIntegrations"]>;
  TeamworkGetWorkforceIntegrations(...args: TeamsGraphOperationArgs<"teamwork.GetWorkforceIntegrations">): Promise<TeamsGraphOperationResponseMap["teamwork.GetWorkforceIntegrations"]>;
  TeamworkUpdateWorkforceIntegrations(...args: TeamsGraphOperationArgs<"teamwork.UpdateWorkforceIntegrations">): Promise<TeamsGraphOperationResponseMap["teamwork.UpdateWorkforceIntegrations"]>;
  TeamworkDeleteWorkforceIntegrations(...args: TeamsGraphOperationArgs<"teamwork.DeleteWorkforceIntegrations">): Promise<TeamsGraphOperationResponseMap["teamwork.DeleteWorkforceIntegrations"]>;
  TeamworkWorkforceIntegrationsGetCount5b5b(...args: TeamsGraphOperationArgs<"teamwork.workforceIntegrations.GetCount-5b5b">): Promise<TeamsGraphOperationResponseMap["teamwork.workforceIntegrations.GetCount-5b5b"]>;
}

export const TeamsGraphTeamworkWorkforceIntegrationGeneratedFunctionNames = [
  "TeamworkListWorkforceIntegrations",
  "TeamworkCreateWorkforceIntegrations",
  "TeamworkGetWorkforceIntegrations",
  "TeamworkUpdateWorkforceIntegrations",
  "TeamworkDeleteWorkforceIntegrations",
  "TeamworkWorkforceIntegrationsGetCount5b5b"
] as const satisfies readonly (keyof TeamsGraphTeamworkWorkforceIntegrationGeneratedClient)[];

export function createTeamsGraphTeamworkWorkforceIntegrationGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamworkWorkforceIntegrationGeneratedClient {
  return {
    TeamworkListWorkforceIntegrations: (...args) => callOperation("teamwork.ListWorkforceIntegrations", ...(args as TeamsGraphOperationArgs<"teamwork.ListWorkforceIntegrations">)),
    TeamworkCreateWorkforceIntegrations: (...args) => callOperation("teamwork.CreateWorkforceIntegrations", ...(args as TeamsGraphOperationArgs<"teamwork.CreateWorkforceIntegrations">)),
    TeamworkGetWorkforceIntegrations: (...args) => callOperation("teamwork.GetWorkforceIntegrations", ...(args as TeamsGraphOperationArgs<"teamwork.GetWorkforceIntegrations">)),
    TeamworkUpdateWorkforceIntegrations: (...args) => callOperation("teamwork.UpdateWorkforceIntegrations", ...(args as TeamsGraphOperationArgs<"teamwork.UpdateWorkforceIntegrations">)),
    TeamworkDeleteWorkforceIntegrations: (...args) => callOperation("teamwork.DeleteWorkforceIntegrations", ...(args as TeamsGraphOperationArgs<"teamwork.DeleteWorkforceIntegrations">)),
    TeamworkWorkforceIntegrationsGetCount5b5b: (...args) => callOperation("teamwork.workforceIntegrations.GetCount-5b5b", ...(args as TeamsGraphOperationArgs<"teamwork.workforceIntegrations.GetCount-5b5b">)),
  };
}
