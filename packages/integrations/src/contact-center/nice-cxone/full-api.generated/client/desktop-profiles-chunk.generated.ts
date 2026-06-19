// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiDesktopProfilesOperationKeys = [
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned",
  "cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations",
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search",
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}",
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}",
  "cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles",
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles",
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status",
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams",
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams",
  "cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams",
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search"
] as const;
export type NiceCxoneFullApiDesktopProfilesOperationKey = typeof NiceCxoneFullApiDesktopProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiDesktopProfilesOperationPathParamMap {
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned": {};
  "cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations": {};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search": {};
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}": { "id": NiceCxoneFullApiPathParamValue };
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}": { "id": NiceCxoneFullApiPathParamValue };
  "cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles": {};
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles": {};
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status": {};
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams": { "id": NiceCxoneFullApiPathParamValue };
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams": { "id": NiceCxoneFullApiPathParamValue };
  "cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams": { "id": NiceCxoneFullApiPathParamValue };
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search": {};
}

export interface NiceCxoneFullApiDesktopProfilesOperationRequestMap {
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned">;
  "cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations">;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search">;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}">;
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}">;
  "cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles">;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles">;
  "cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status">;
  "cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams">;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams">;
  "cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams">;
  "cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search": NiceCxoneFullApiOperationInput<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search">;
}

export interface NiceCxoneFullApiDesktopProfilesGeneratedClient {
  CxoneDesktopprofilesApiDocsGetAgentProfilesV1Assigned(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned"]>;
  CxoneDesktopprofilesApiDocsAssignableConfigurations(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations"]>;
  CxoneDesktopprofilesApiDocsPostAgentProfilesV1ProfilesSearch(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search"]>;
  CxoneDesktopprofilesApiDocsGetAgentProfilesV1ProfilesId(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}"]>;
  CxoneDesktopprofilesApiDocsPutAgentProfilesV1ProfilesId(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}"]>;
  CxoneDesktopprofilesApiDocsAgentProfile(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles"]>;
  CxoneDesktopprofilesApiDocsPostAgentProfilesV1Profiles(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles"]>;
  CxoneDesktopprofilesApiDocsPutAgentProfilesV1ProfilesStatus(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status"]>;
  CxoneDesktopprofilesApiDocsGetAgentProfilesV1ProfilesIdTeams(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams"]>;
  CxoneDesktopprofilesApiDocsPostAgentProfilesV1ProfilesIdTeams(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams"]>;
  CxoneDesktopprofilesApiDocsDeleteAgentProfilesV1ProfilesIdTeams(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams"]>;
  CxoneDesktopprofilesApiDocsPostAgentProfilesV1ProfilesTeamsSearch(...args: NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search"]>;
}

export const NiceCxoneFullApiDesktopProfilesGeneratedFunctionNames = [
  "CxoneDesktopprofilesApiDocsGetAgentProfilesV1Assigned",
  "CxoneDesktopprofilesApiDocsAssignableConfigurations",
  "CxoneDesktopprofilesApiDocsPostAgentProfilesV1ProfilesSearch",
  "CxoneDesktopprofilesApiDocsGetAgentProfilesV1ProfilesId",
  "CxoneDesktopprofilesApiDocsPutAgentProfilesV1ProfilesId",
  "CxoneDesktopprofilesApiDocsAgentProfile",
  "CxoneDesktopprofilesApiDocsPostAgentProfilesV1Profiles",
  "CxoneDesktopprofilesApiDocsPutAgentProfilesV1ProfilesStatus",
  "CxoneDesktopprofilesApiDocsGetAgentProfilesV1ProfilesIdTeams",
  "CxoneDesktopprofilesApiDocsPostAgentProfilesV1ProfilesIdTeams",
  "CxoneDesktopprofilesApiDocsDeleteAgentProfilesV1ProfilesIdTeams",
  "CxoneDesktopprofilesApiDocsPostAgentProfilesV1ProfilesTeamsSearch"
] as const satisfies readonly (keyof NiceCxoneFullApiDesktopProfilesGeneratedClient)[];

export function createNiceCxoneFullApiDesktopProfilesGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiDesktopProfilesGeneratedClient {
  return {
    CxoneDesktopprofilesApiDocsGetAgentProfilesV1Assigned: (...args) => callOperation("cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/assigned:GET:/agent-profiles/v1/assigned">)),
    CxoneDesktopprofilesApiDocsAssignableConfigurations: (...args) => callOperation("cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:AssignableConfigurations:GET:/agent-profiles/v1/configurations">)),
    CxoneDesktopprofilesApiDocsPostAgentProfilesV1ProfilesSearch: (...args) => callOperation("cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/search:POST:/agent-profiles/v1/profiles/search">)),
    CxoneDesktopprofilesApiDocsGetAgentProfilesV1ProfilesId: (...args) => callOperation("cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}:GET:/agent-profiles/v1/profiles/{id}">)),
    CxoneDesktopprofilesApiDocsPutAgentProfilesV1ProfilesId: (...args) => callOperation("cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/{id}:PUT:/agent-profiles/v1/profiles/{id}">)),
    CxoneDesktopprofilesApiDocsAgentProfile: (...args) => callOperation("cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:AgentProfile:GET:/agent-profiles/v1/profiles">)),
    CxoneDesktopprofilesApiDocsPostAgentProfilesV1Profiles: (...args) => callOperation("cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles:POST:/agent-profiles/v1/profiles">)),
    CxoneDesktopprofilesApiDocsPutAgentProfilesV1ProfilesStatus: (...args) => callOperation("cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:put_/agent-profiles/v1/profiles/status:PUT:/agent-profiles/v1/profiles/status">)),
    CxoneDesktopprofilesApiDocsGetAgentProfilesV1ProfilesIdTeams: (...args) => callOperation("cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:get_/agent-profiles/v1/profiles/{id}/teams:GET:/agent-profiles/v1/profiles/{id}/teams">)),
    CxoneDesktopprofilesApiDocsPostAgentProfilesV1ProfilesIdTeams: (...args) => callOperation("cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/{id}/teams:POST:/agent-profiles/v1/profiles/{id}/teams">)),
    CxoneDesktopprofilesApiDocsDeleteAgentProfilesV1ProfilesIdTeams: (...args) => callOperation("cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:delete_/agent-profiles/v1/profiles/{id}/teams:DELETE:/agent-profiles/v1/profiles/{id}/teams">)),
    CxoneDesktopprofilesApiDocsPostAgentProfilesV1ProfilesTeamsSearch: (...args) => callOperation("cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search", ...(args as NiceCxoneFullApiOperationArgs<"cxone-desktopprofiles-api-docs:post_/agent-profiles/v1/profiles/teams/search:POST:/agent-profiles/v1/profiles/teams/search">)),
  };
}
