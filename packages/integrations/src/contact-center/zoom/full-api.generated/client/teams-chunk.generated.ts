// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiTeamsOperationKeys = [
  "GET /contact_center/teams",
  "POST /contact_center/teams",
  "GET /contact_center/teams/{teamId}",
  "DELETE /contact_center/teams/{teamId}",
  "PATCH /contact_center/teams/{teamId}",
  "GET /contact_center/teams/{teamId}/agents",
  "POST /contact_center/teams/{teamId}/agents",
  "DELETE /contact_center/teams/{teamId}/agents",
  "GET /contact_center/teams/{teamId}/children",
  "PATCH /contact_center/teams/{teamId}/move",
  "GET /contact_center/teams/{teamId}/parents",
  "GET /contact_center/teams/{teamId}/supervisors",
  "POST /contact_center/teams/{teamId}/supervisors",
  "DELETE /contact_center/teams/{teamId}/supervisors"
] as const;
export type ZoomContactCenterFullApiTeamsOperationKey = typeof ZoomContactCenterFullApiTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiTeamsOperationPathParamMap {
  "GET /contact_center/teams": {};
  "POST /contact_center/teams": {};
  "GET /contact_center/teams/{teamId}": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/teams/{teamId}": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/teams/{teamId}": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/teams/{teamId}/agents": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/teams/{teamId}/agents": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/teams/{teamId}/agents": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/teams/{teamId}/children": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/teams/{teamId}/move": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/teams/{teamId}/parents": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/teams/{teamId}/supervisors": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/teams/{teamId}/supervisors": { "teamId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/teams/{teamId}/supervisors": { "teamId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiTeamsOperationRequestMap {
  "GET /contact_center/teams": ZoomContactCenterFullApiOperationInput<"GET /contact_center/teams">;
  "POST /contact_center/teams": ZoomContactCenterFullApiOperationInput<"POST /contact_center/teams">;
  "GET /contact_center/teams/{teamId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/teams/{teamId}">;
  "DELETE /contact_center/teams/{teamId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/teams/{teamId}">;
  "PATCH /contact_center/teams/{teamId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/teams/{teamId}">;
  "GET /contact_center/teams/{teamId}/agents": ZoomContactCenterFullApiOperationInput<"GET /contact_center/teams/{teamId}/agents">;
  "POST /contact_center/teams/{teamId}/agents": ZoomContactCenterFullApiOperationInput<"POST /contact_center/teams/{teamId}/agents">;
  "DELETE /contact_center/teams/{teamId}/agents": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/teams/{teamId}/agents">;
  "GET /contact_center/teams/{teamId}/children": ZoomContactCenterFullApiOperationInput<"GET /contact_center/teams/{teamId}/children">;
  "PATCH /contact_center/teams/{teamId}/move": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/teams/{teamId}/move">;
  "GET /contact_center/teams/{teamId}/parents": ZoomContactCenterFullApiOperationInput<"GET /contact_center/teams/{teamId}/parents">;
  "GET /contact_center/teams/{teamId}/supervisors": ZoomContactCenterFullApiOperationInput<"GET /contact_center/teams/{teamId}/supervisors">;
  "POST /contact_center/teams/{teamId}/supervisors": ZoomContactCenterFullApiOperationInput<"POST /contact_center/teams/{teamId}/supervisors">;
  "DELETE /contact_center/teams/{teamId}/supervisors": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/teams/{teamId}/supervisors">;
}

export interface ZoomContactCenterFullApiTeamsGeneratedClient {
  ListTeams(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/teams"]>;
  CreateTeam(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/teams">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/teams"]>;
  GetTeamDetail(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/teams/{teamId}"]>;
  DeleteTeam(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/teams/{teamId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/teams/{teamId}"]>;
  Updateateam(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/teams/{teamId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/teams/{teamId}"]>;
  ListTeamAgents(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}/agents">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/teams/{teamId}/agents"]>;
  AssignTeamAgents(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/teams/{teamId}/agents">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/teams/{teamId}/agents"]>;
  UnassignTeamAgents(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/teams/{teamId}/agents">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/teams/{teamId}/agents"]>;
  GetTeamChildTeams(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}/children">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/teams/{teamId}/children"]>;
  MoveTeam(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/teams/{teamId}/move">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/teams/{teamId}/move"]>;
  GetTeamParentTeams(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}/parents">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/teams/{teamId}/parents"]>;
  ListTeamSupervisors(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}/supervisors">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/teams/{teamId}/supervisors"]>;
  AssignTeamSupervisors(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/teams/{teamId}/supervisors">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/teams/{teamId}/supervisors"]>;
  UnassignTeamSupervisors(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/teams/{teamId}/supervisors">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/teams/{teamId}/supervisors"]>;
}

export const ZoomContactCenterFullApiTeamsGeneratedFunctionNames = [
  "ListTeams",
  "CreateTeam",
  "GetTeamDetail",
  "DeleteTeam",
  "Updateateam",
  "ListTeamAgents",
  "AssignTeamAgents",
  "UnassignTeamAgents",
  "GetTeamChildTeams",
  "MoveTeam",
  "GetTeamParentTeams",
  "ListTeamSupervisors",
  "AssignTeamSupervisors",
  "UnassignTeamSupervisors"
] as const satisfies readonly (keyof ZoomContactCenterFullApiTeamsGeneratedClient)[];

export function createZoomContactCenterFullApiTeamsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiTeamsGeneratedClient {
  return {
    ListTeams: (...args) => callOperation("GET /contact_center/teams", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams">)),
    CreateTeam: (...args) => callOperation("POST /contact_center/teams", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/teams">)),
    GetTeamDetail: (...args) => callOperation("GET /contact_center/teams/{teamId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}">)),
    DeleteTeam: (...args) => callOperation("DELETE /contact_center/teams/{teamId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/teams/{teamId}">)),
    Updateateam: (...args) => callOperation("PATCH /contact_center/teams/{teamId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/teams/{teamId}">)),
    ListTeamAgents: (...args) => callOperation("GET /contact_center/teams/{teamId}/agents", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}/agents">)),
    AssignTeamAgents: (...args) => callOperation("POST /contact_center/teams/{teamId}/agents", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/teams/{teamId}/agents">)),
    UnassignTeamAgents: (...args) => callOperation("DELETE /contact_center/teams/{teamId}/agents", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/teams/{teamId}/agents">)),
    GetTeamChildTeams: (...args) => callOperation("GET /contact_center/teams/{teamId}/children", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}/children">)),
    MoveTeam: (...args) => callOperation("PATCH /contact_center/teams/{teamId}/move", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/teams/{teamId}/move">)),
    GetTeamParentTeams: (...args) => callOperation("GET /contact_center/teams/{teamId}/parents", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}/parents">)),
    ListTeamSupervisors: (...args) => callOperation("GET /contact_center/teams/{teamId}/supervisors", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/teams/{teamId}/supervisors">)),
    AssignTeamSupervisors: (...args) => callOperation("POST /contact_center/teams/{teamId}/supervisors", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/teams/{teamId}/supervisors">)),
    UnassignTeamSupervisors: (...args) => callOperation("DELETE /contact_center/teams/{teamId}/supervisors", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/teams/{teamId}/supervisors">)),
  };
}
