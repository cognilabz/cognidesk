// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiTeammateGroupsOperationKeys = [
  "list-company-teammate-groups",
  "create-company-teammate-group",
  "delete-company-teammate-group",
  "get-company-teammate-group",
  "update-a-company-teammate-group",
  "remove-company-teammate-group-team-inboxes",
  "list-company-teammate-group-team-inboxes",
  "add-company-teammate-group-team-inboxes",
  "remove-company-teammate-group-teammates",
  "list-company-teammate-group-teammates",
  "add-company-teammate-group-teammates",
  "remove-company-teammate-group-teams",
  "list-company-teammate-group-teams",
  "add-company-teammate-group-teams"
] as const;
export type FrontFullApiTeammateGroupsOperationKey = typeof FrontFullApiTeammateGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiTeammateGroupsOperationPathParamMap {
  "list-company-teammate-groups": {};
  "create-company-teammate-group": {};
  "delete-company-teammate-group": { "teammate_group_id": FrontFullApiPathParamValue };
  "get-company-teammate-group": { "teammate_group_id": FrontFullApiPathParamValue };
  "update-a-company-teammate-group": { "teammate_group_id": FrontFullApiPathParamValue };
  "remove-company-teammate-group-team-inboxes": { "teammate_group_id": FrontFullApiPathParamValue };
  "list-company-teammate-group-team-inboxes": { "teammate_group_id": FrontFullApiPathParamValue };
  "add-company-teammate-group-team-inboxes": { "teammate_group_id": FrontFullApiPathParamValue };
  "remove-company-teammate-group-teammates": { "teammate_group_id": FrontFullApiPathParamValue };
  "list-company-teammate-group-teammates": { "teammate_group_id": FrontFullApiPathParamValue };
  "add-company-teammate-group-teammates": { "teammate_group_id": FrontFullApiPathParamValue };
  "remove-company-teammate-group-teams": { "teammate_group_id": FrontFullApiPathParamValue };
  "list-company-teammate-group-teams": { "teammate_group_id": FrontFullApiPathParamValue };
  "add-company-teammate-group-teams": { "teammate_group_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiTeammateGroupsOperationRequestMap {
  "list-company-teammate-groups": FrontFullApiOperationInput<"list-company-teammate-groups">;
  "create-company-teammate-group": FrontFullApiOperationInput<"create-company-teammate-group">;
  "delete-company-teammate-group": FrontFullApiOperationInput<"delete-company-teammate-group">;
  "get-company-teammate-group": FrontFullApiOperationInput<"get-company-teammate-group">;
  "update-a-company-teammate-group": FrontFullApiOperationInput<"update-a-company-teammate-group">;
  "remove-company-teammate-group-team-inboxes": FrontFullApiOperationInput<"remove-company-teammate-group-team-inboxes">;
  "list-company-teammate-group-team-inboxes": FrontFullApiOperationInput<"list-company-teammate-group-team-inboxes">;
  "add-company-teammate-group-team-inboxes": FrontFullApiOperationInput<"add-company-teammate-group-team-inboxes">;
  "remove-company-teammate-group-teammates": FrontFullApiOperationInput<"remove-company-teammate-group-teammates">;
  "list-company-teammate-group-teammates": FrontFullApiOperationInput<"list-company-teammate-group-teammates">;
  "add-company-teammate-group-teammates": FrontFullApiOperationInput<"add-company-teammate-group-teammates">;
  "remove-company-teammate-group-teams": FrontFullApiOperationInput<"remove-company-teammate-group-teams">;
  "list-company-teammate-group-teams": FrontFullApiOperationInput<"list-company-teammate-group-teams">;
  "add-company-teammate-group-teams": FrontFullApiOperationInput<"add-company-teammate-group-teams">;
}

export interface FrontFullApiTeammateGroupsGeneratedClient {
  frontListCompanyTeammateGroups(...args: FrontFullApiOperationArgs<"list-company-teammate-groups">): Promise<FrontFullApiOperationResponseMap["list-company-teammate-groups"]>;
  frontCreateCompanyTeammateGroup(...args: FrontFullApiOperationArgs<"create-company-teammate-group">): Promise<FrontFullApiOperationResponseMap["create-company-teammate-group"]>;
  frontDeleteCompanyTeammateGroup(...args: FrontFullApiOperationArgs<"delete-company-teammate-group">): Promise<FrontFullApiOperationResponseMap["delete-company-teammate-group"]>;
  frontGetCompanyTeammateGroup(...args: FrontFullApiOperationArgs<"get-company-teammate-group">): Promise<FrontFullApiOperationResponseMap["get-company-teammate-group"]>;
  frontUpdateACompanyTeammateGroup(...args: FrontFullApiOperationArgs<"update-a-company-teammate-group">): Promise<FrontFullApiOperationResponseMap["update-a-company-teammate-group"]>;
  frontRemoveCompanyTeammateGroupTeamInboxes(...args: FrontFullApiOperationArgs<"remove-company-teammate-group-team-inboxes">): Promise<FrontFullApiOperationResponseMap["remove-company-teammate-group-team-inboxes"]>;
  frontListCompanyTeammateGroupTeamInboxes(...args: FrontFullApiOperationArgs<"list-company-teammate-group-team-inboxes">): Promise<FrontFullApiOperationResponseMap["list-company-teammate-group-team-inboxes"]>;
  frontAddCompanyTeammateGroupTeamInboxes(...args: FrontFullApiOperationArgs<"add-company-teammate-group-team-inboxes">): Promise<FrontFullApiOperationResponseMap["add-company-teammate-group-team-inboxes"]>;
  frontRemoveCompanyTeammateGroupTeammates(...args: FrontFullApiOperationArgs<"remove-company-teammate-group-teammates">): Promise<FrontFullApiOperationResponseMap["remove-company-teammate-group-teammates"]>;
  frontListCompanyTeammateGroupTeammates(...args: FrontFullApiOperationArgs<"list-company-teammate-group-teammates">): Promise<FrontFullApiOperationResponseMap["list-company-teammate-group-teammates"]>;
  frontAddCompanyTeammateGroupTeammates(...args: FrontFullApiOperationArgs<"add-company-teammate-group-teammates">): Promise<FrontFullApiOperationResponseMap["add-company-teammate-group-teammates"]>;
  frontRemoveCompanyTeammateGroupTeams(...args: FrontFullApiOperationArgs<"remove-company-teammate-group-teams">): Promise<FrontFullApiOperationResponseMap["remove-company-teammate-group-teams"]>;
  frontListCompanyTeammateGroupTeams(...args: FrontFullApiOperationArgs<"list-company-teammate-group-teams">): Promise<FrontFullApiOperationResponseMap["list-company-teammate-group-teams"]>;
  frontAddCompanyTeammateGroupTeams(...args: FrontFullApiOperationArgs<"add-company-teammate-group-teams">): Promise<FrontFullApiOperationResponseMap["add-company-teammate-group-teams"]>;
}

export const FrontFullApiTeammateGroupsGeneratedFunctionNames = [
  "frontListCompanyTeammateGroups",
  "frontCreateCompanyTeammateGroup",
  "frontDeleteCompanyTeammateGroup",
  "frontGetCompanyTeammateGroup",
  "frontUpdateACompanyTeammateGroup",
  "frontRemoveCompanyTeammateGroupTeamInboxes",
  "frontListCompanyTeammateGroupTeamInboxes",
  "frontAddCompanyTeammateGroupTeamInboxes",
  "frontRemoveCompanyTeammateGroupTeammates",
  "frontListCompanyTeammateGroupTeammates",
  "frontAddCompanyTeammateGroupTeammates",
  "frontRemoveCompanyTeammateGroupTeams",
  "frontListCompanyTeammateGroupTeams",
  "frontAddCompanyTeammateGroupTeams"
] as const satisfies readonly (keyof FrontFullApiTeammateGroupsGeneratedClient)[];

export function createFrontFullApiTeammateGroupsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiTeammateGroupsGeneratedClient {
  return {
    frontListCompanyTeammateGroups: (...args) => callOperation("list-company-teammate-groups", ...(args as FrontFullApiOperationArgs<"list-company-teammate-groups">)),
    frontCreateCompanyTeammateGroup: (...args) => callOperation("create-company-teammate-group", ...(args as FrontFullApiOperationArgs<"create-company-teammate-group">)),
    frontDeleteCompanyTeammateGroup: (...args) => callOperation("delete-company-teammate-group", ...(args as FrontFullApiOperationArgs<"delete-company-teammate-group">)),
    frontGetCompanyTeammateGroup: (...args) => callOperation("get-company-teammate-group", ...(args as FrontFullApiOperationArgs<"get-company-teammate-group">)),
    frontUpdateACompanyTeammateGroup: (...args) => callOperation("update-a-company-teammate-group", ...(args as FrontFullApiOperationArgs<"update-a-company-teammate-group">)),
    frontRemoveCompanyTeammateGroupTeamInboxes: (...args) => callOperation("remove-company-teammate-group-team-inboxes", ...(args as FrontFullApiOperationArgs<"remove-company-teammate-group-team-inboxes">)),
    frontListCompanyTeammateGroupTeamInboxes: (...args) => callOperation("list-company-teammate-group-team-inboxes", ...(args as FrontFullApiOperationArgs<"list-company-teammate-group-team-inboxes">)),
    frontAddCompanyTeammateGroupTeamInboxes: (...args) => callOperation("add-company-teammate-group-team-inboxes", ...(args as FrontFullApiOperationArgs<"add-company-teammate-group-team-inboxes">)),
    frontRemoveCompanyTeammateGroupTeammates: (...args) => callOperation("remove-company-teammate-group-teammates", ...(args as FrontFullApiOperationArgs<"remove-company-teammate-group-teammates">)),
    frontListCompanyTeammateGroupTeammates: (...args) => callOperation("list-company-teammate-group-teammates", ...(args as FrontFullApiOperationArgs<"list-company-teammate-group-teammates">)),
    frontAddCompanyTeammateGroupTeammates: (...args) => callOperation("add-company-teammate-group-teammates", ...(args as FrontFullApiOperationArgs<"add-company-teammate-group-teammates">)),
    frontRemoveCompanyTeammateGroupTeams: (...args) => callOperation("remove-company-teammate-group-teams", ...(args as FrontFullApiOperationArgs<"remove-company-teammate-group-teams">)),
    frontListCompanyTeammateGroupTeams: (...args) => callOperation("list-company-teammate-group-teams", ...(args as FrontFullApiOperationArgs<"list-company-teammate-group-teams">)),
    frontAddCompanyTeammateGroupTeams: (...args) => callOperation("add-company-teammate-group-teams", ...(args as FrontFullApiOperationArgs<"add-company-teammate-group-teams">)),
  };
}
