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
export const TeamsGraphTeamsTeamsTemplateOperationKeys = [
  "teams.GetTemplate"
] as const;
export type TeamsGraphTeamsTeamsTemplateOperationKey = typeof TeamsGraphTeamsTeamsTemplateOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsTeamsTemplateOperationPathParamMap {
  "teams.GetTemplate": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsTeamsTemplateOperationRequestMap {
  "teams.GetTemplate": TeamsGraphOperationInput<"teams.GetTemplate">;
}

export interface TeamsGraphTeamsTeamsTemplateGeneratedClient {
  TeamsGetTemplate(...args: TeamsGraphOperationArgs<"teams.GetTemplate">): Promise<TeamsGraphOperationResponseMap["teams.GetTemplate"]>;
}

export const TeamsGraphTeamsTeamsTemplateGeneratedFunctionNames = [
  "TeamsGetTemplate"
] as const satisfies readonly (keyof TeamsGraphTeamsTeamsTemplateGeneratedClient)[];

export function createTeamsGraphTeamsTeamsTemplateGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsTeamsTemplateGeneratedClient {
  return {
    TeamsGetTemplate: (...args) => callOperation("teams.GetTemplate", ...(args as TeamsGraphOperationArgs<"teams.GetTemplate">)),
  };
}
