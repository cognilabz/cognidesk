// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiTeamsOperationKeys = [
  "deleteTeam",
  "deleteTeamMembers",
  "getTeam",
  "getTeamMembers",
  "getTeams",
  "patchTeam",
  "postTeamMembers",
  "postTeams",
  "postTeamsSearch"
] as const;
export type GenesysCloudFullApiTeamsOperationKey = typeof GenesysCloudFullApiTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiTeamsOperationPathParamMap {
  "deleteTeam": { "teamId": GenesysCloudFullApiPathParamValue };
  "deleteTeamMembers": { "teamId": GenesysCloudFullApiPathParamValue };
  "getTeam": { "teamId": GenesysCloudFullApiPathParamValue };
  "getTeamMembers": { "teamId": GenesysCloudFullApiPathParamValue };
  "getTeams": {};
  "patchTeam": { "teamId": GenesysCloudFullApiPathParamValue };
  "postTeamMembers": { "teamId": GenesysCloudFullApiPathParamValue };
  "postTeams": {};
  "postTeamsSearch": {};
}

export interface GenesysCloudFullApiTeamsOperationRequestMap {
  "deleteTeam": GenesysCloudFullApiOperationInput<"deleteTeam">;
  "deleteTeamMembers": GenesysCloudFullApiOperationInput<"deleteTeamMembers">;
  "getTeam": GenesysCloudFullApiOperationInput<"getTeam">;
  "getTeamMembers": GenesysCloudFullApiOperationInput<"getTeamMembers">;
  "getTeams": GenesysCloudFullApiOperationInput<"getTeams">;
  "patchTeam": GenesysCloudFullApiOperationInput<"patchTeam">;
  "postTeamMembers": GenesysCloudFullApiOperationInput<"postTeamMembers">;
  "postTeams": GenesysCloudFullApiOperationInput<"postTeams">;
  "postTeamsSearch": GenesysCloudFullApiOperationInput<"postTeamsSearch">;
}

export interface GenesysCloudFullApiTeamsGeneratedClient {
  DeleteTeam(...args: GenesysCloudFullApiOperationArgs<"deleteTeam">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTeam"]>;
  DeleteTeamMembers(...args: GenesysCloudFullApiOperationArgs<"deleteTeamMembers">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTeamMembers"]>;
  GetTeam(...args: GenesysCloudFullApiOperationArgs<"getTeam">): Promise<GenesysCloudFullApiOperationResponseMap["getTeam"]>;
  GetTeamMembers(...args: GenesysCloudFullApiOperationArgs<"getTeamMembers">): Promise<GenesysCloudFullApiOperationResponseMap["getTeamMembers"]>;
  GetTeams(...args: GenesysCloudFullApiOperationArgs<"getTeams">): Promise<GenesysCloudFullApiOperationResponseMap["getTeams"]>;
  PatchTeam(...args: GenesysCloudFullApiOperationArgs<"patchTeam">): Promise<GenesysCloudFullApiOperationResponseMap["patchTeam"]>;
  PostTeamMembers(...args: GenesysCloudFullApiOperationArgs<"postTeamMembers">): Promise<GenesysCloudFullApiOperationResponseMap["postTeamMembers"]>;
  PostTeams(...args: GenesysCloudFullApiOperationArgs<"postTeams">): Promise<GenesysCloudFullApiOperationResponseMap["postTeams"]>;
  PostTeamsSearch(...args: GenesysCloudFullApiOperationArgs<"postTeamsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postTeamsSearch"]>;
}

export const GenesysCloudFullApiTeamsGeneratedFunctionNames = [
  "DeleteTeam",
  "DeleteTeamMembers",
  "GetTeam",
  "GetTeamMembers",
  "GetTeams",
  "PatchTeam",
  "PostTeamMembers",
  "PostTeams",
  "PostTeamsSearch"
] as const satisfies readonly (keyof GenesysCloudFullApiTeamsGeneratedClient)[];

export function createGenesysCloudFullApiTeamsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiTeamsGeneratedClient {
  return {
    DeleteTeam: (...args) => callOperation("deleteTeam", ...(args as GenesysCloudFullApiOperationArgs<"deleteTeam">)),
    DeleteTeamMembers: (...args) => callOperation("deleteTeamMembers", ...(args as GenesysCloudFullApiOperationArgs<"deleteTeamMembers">)),
    GetTeam: (...args) => callOperation("getTeam", ...(args as GenesysCloudFullApiOperationArgs<"getTeam">)),
    GetTeamMembers: (...args) => callOperation("getTeamMembers", ...(args as GenesysCloudFullApiOperationArgs<"getTeamMembers">)),
    GetTeams: (...args) => callOperation("getTeams", ...(args as GenesysCloudFullApiOperationArgs<"getTeams">)),
    PatchTeam: (...args) => callOperation("patchTeam", ...(args as GenesysCloudFullApiOperationArgs<"patchTeam">)),
    PostTeamMembers: (...args) => callOperation("postTeamMembers", ...(args as GenesysCloudFullApiOperationArgs<"postTeamMembers">)),
    PostTeams: (...args) => callOperation("postTeams", ...(args as GenesysCloudFullApiOperationArgs<"postTeams">)),
    PostTeamsSearch: (...args) => callOperation("postTeamsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postTeamsSearch">)),
  };
}
