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
export const TeamsGraphTeamsTemplatesTeamsTemplateOperationKeys = [
  "teamsTemplates.teamsTemplate.ListTeamsTemplate",
  "teamsTemplates.teamsTemplate.CreateTeamsTemplate",
  "teamsTemplates.teamsTemplate.GetTeamsTemplate",
  "teamsTemplates.teamsTemplate.UpdateTeamsTemplate",
  "teamsTemplates.teamsTemplate.DeleteTeamsTemplate",
  "teamsTemplates.GetCount-3b4a"
] as const;
export type TeamsGraphTeamsTemplatesTeamsTemplateOperationKey = typeof TeamsGraphTeamsTemplatesTeamsTemplateOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsTemplatesTeamsTemplateOperationPathParamMap {
  "teamsTemplates.teamsTemplate.ListTeamsTemplate": {};
  "teamsTemplates.teamsTemplate.CreateTeamsTemplate": {};
  "teamsTemplates.teamsTemplate.GetTeamsTemplate": { "teamsTemplate-id": TeamsGraphPathParamValue };
  "teamsTemplates.teamsTemplate.UpdateTeamsTemplate": { "teamsTemplate-id": TeamsGraphPathParamValue };
  "teamsTemplates.teamsTemplate.DeleteTeamsTemplate": { "teamsTemplate-id": TeamsGraphPathParamValue };
  "teamsTemplates.GetCount-3b4a": {};
}

export interface TeamsGraphTeamsTemplatesTeamsTemplateOperationRequestMap {
  "teamsTemplates.teamsTemplate.ListTeamsTemplate": TeamsGraphOperationInput<"teamsTemplates.teamsTemplate.ListTeamsTemplate">;
  "teamsTemplates.teamsTemplate.CreateTeamsTemplate": TeamsGraphOperationInput<"teamsTemplates.teamsTemplate.CreateTeamsTemplate">;
  "teamsTemplates.teamsTemplate.GetTeamsTemplate": TeamsGraphOperationInput<"teamsTemplates.teamsTemplate.GetTeamsTemplate">;
  "teamsTemplates.teamsTemplate.UpdateTeamsTemplate": TeamsGraphOperationInput<"teamsTemplates.teamsTemplate.UpdateTeamsTemplate">;
  "teamsTemplates.teamsTemplate.DeleteTeamsTemplate": TeamsGraphOperationInput<"teamsTemplates.teamsTemplate.DeleteTeamsTemplate">;
  "teamsTemplates.GetCount-3b4a": TeamsGraphOperationInput<"teamsTemplates.GetCount-3b4a">;
}

export interface TeamsGraphTeamsTemplatesTeamsTemplateGeneratedClient {
  TeamsTemplatesTeamsTemplateListTeamsTemplate(...args: TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.ListTeamsTemplate">): Promise<TeamsGraphOperationResponseMap["teamsTemplates.teamsTemplate.ListTeamsTemplate"]>;
  TeamsTemplatesTeamsTemplateCreateTeamsTemplate(...args: TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.CreateTeamsTemplate">): Promise<TeamsGraphOperationResponseMap["teamsTemplates.teamsTemplate.CreateTeamsTemplate"]>;
  TeamsTemplatesTeamsTemplateGetTeamsTemplate(...args: TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.GetTeamsTemplate">): Promise<TeamsGraphOperationResponseMap["teamsTemplates.teamsTemplate.GetTeamsTemplate"]>;
  TeamsTemplatesTeamsTemplateUpdateTeamsTemplate(...args: TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.UpdateTeamsTemplate">): Promise<TeamsGraphOperationResponseMap["teamsTemplates.teamsTemplate.UpdateTeamsTemplate"]>;
  TeamsTemplatesTeamsTemplateDeleteTeamsTemplate(...args: TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.DeleteTeamsTemplate">): Promise<TeamsGraphOperationResponseMap["teamsTemplates.teamsTemplate.DeleteTeamsTemplate"]>;
  TeamsTemplatesGetCount3b4a(...args: TeamsGraphOperationArgs<"teamsTemplates.GetCount-3b4a">): Promise<TeamsGraphOperationResponseMap["teamsTemplates.GetCount-3b4a"]>;
}

export const TeamsGraphTeamsTemplatesTeamsTemplateGeneratedFunctionNames = [
  "TeamsTemplatesTeamsTemplateListTeamsTemplate",
  "TeamsTemplatesTeamsTemplateCreateTeamsTemplate",
  "TeamsTemplatesTeamsTemplateGetTeamsTemplate",
  "TeamsTemplatesTeamsTemplateUpdateTeamsTemplate",
  "TeamsTemplatesTeamsTemplateDeleteTeamsTemplate",
  "TeamsTemplatesGetCount3b4a"
] as const satisfies readonly (keyof TeamsGraphTeamsTemplatesTeamsTemplateGeneratedClient)[];

export function createTeamsGraphTeamsTemplatesTeamsTemplateGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsTemplatesTeamsTemplateGeneratedClient {
  return {
    TeamsTemplatesTeamsTemplateListTeamsTemplate: (...args) => callOperation("teamsTemplates.teamsTemplate.ListTeamsTemplate", ...(args as TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.ListTeamsTemplate">)),
    TeamsTemplatesTeamsTemplateCreateTeamsTemplate: (...args) => callOperation("teamsTemplates.teamsTemplate.CreateTeamsTemplate", ...(args as TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.CreateTeamsTemplate">)),
    TeamsTemplatesTeamsTemplateGetTeamsTemplate: (...args) => callOperation("teamsTemplates.teamsTemplate.GetTeamsTemplate", ...(args as TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.GetTeamsTemplate">)),
    TeamsTemplatesTeamsTemplateUpdateTeamsTemplate: (...args) => callOperation("teamsTemplates.teamsTemplate.UpdateTeamsTemplate", ...(args as TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.UpdateTeamsTemplate">)),
    TeamsTemplatesTeamsTemplateDeleteTeamsTemplate: (...args) => callOperation("teamsTemplates.teamsTemplate.DeleteTeamsTemplate", ...(args as TeamsGraphOperationArgs<"teamsTemplates.teamsTemplate.DeleteTeamsTemplate">)),
    TeamsTemplatesGetCount3b4a: (...args) => callOperation("teamsTemplates.GetCount-3b4a", ...(args as TeamsGraphOperationArgs<"teamsTemplates.GetCount-3b4a">)),
  };
}
