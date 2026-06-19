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
export const TeamsGraphUsersTeam05OperationKeys = [
  "users.joinedTeams.UpdateTags",
  "users.joinedTeams.DeleteTags",
  "users.joinedTeams.tags.ListMembers",
  "users.joinedTeams.tags.CreateMembers",
  "users.joinedTeams.tags.GetMembers",
  "users.joinedTeams.tags.UpdateMembers",
  "users.joinedTeams.tags.DeleteMembers",
  "users.joinedTeams.tags.members.GetCount-f8b7",
  "users.joinedTeams.tags.GetCount-7511",
  "users.joinedTeams.GetTemplate",
  "users.joinedTeams.GetCount-0d57",
  "users.user.joinedTeams.getAllMessages"
] as const;
export type TeamsGraphUsersTeam05OperationKey = typeof TeamsGraphUsersTeam05OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersTeam05OperationPathParamMap {
  "users.joinedTeams.UpdateTags": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "users.joinedTeams.DeleteTags": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "users.joinedTeams.tags.ListMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "users.joinedTeams.tags.CreateMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "users.joinedTeams.tags.GetMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.tags.UpdateMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.tags.DeleteMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue; "teamworkTagMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.tags.members.GetCount-f8b7": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "users.joinedTeams.tags.GetCount-7511": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetTemplate": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetCount-0d57": { "user-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.getAllMessages": { "user-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersTeam05OperationRequestMap {
  "users.joinedTeams.UpdateTags": TeamsGraphOperationInput<"users.joinedTeams.UpdateTags">;
  "users.joinedTeams.DeleteTags": TeamsGraphOperationInput<"users.joinedTeams.DeleteTags">;
  "users.joinedTeams.tags.ListMembers": TeamsGraphOperationInput<"users.joinedTeams.tags.ListMembers">;
  "users.joinedTeams.tags.CreateMembers": TeamsGraphOperationInput<"users.joinedTeams.tags.CreateMembers">;
  "users.joinedTeams.tags.GetMembers": TeamsGraphOperationInput<"users.joinedTeams.tags.GetMembers">;
  "users.joinedTeams.tags.UpdateMembers": TeamsGraphOperationInput<"users.joinedTeams.tags.UpdateMembers">;
  "users.joinedTeams.tags.DeleteMembers": TeamsGraphOperationInput<"users.joinedTeams.tags.DeleteMembers">;
  "users.joinedTeams.tags.members.GetCount-f8b7": TeamsGraphOperationInput<"users.joinedTeams.tags.members.GetCount-f8b7">;
  "users.joinedTeams.tags.GetCount-7511": TeamsGraphOperationInput<"users.joinedTeams.tags.GetCount-7511">;
  "users.joinedTeams.GetTemplate": TeamsGraphOperationInput<"users.joinedTeams.GetTemplate">;
  "users.joinedTeams.GetCount-0d57": TeamsGraphOperationInput<"users.joinedTeams.GetCount-0d57">;
  "users.user.joinedTeams.getAllMessages": TeamsGraphOperationInput<"users.user.joinedTeams.getAllMessages">;
}

export interface TeamsGraphUsersTeam05GeneratedClient {
  UsersJoinedTeamsUpdateTags(...args: TeamsGraphOperationArgs<"users.joinedTeams.UpdateTags">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.UpdateTags"]>;
  UsersJoinedTeamsDeleteTags(...args: TeamsGraphOperationArgs<"users.joinedTeams.DeleteTags">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.DeleteTags"]>;
  UsersJoinedTeamsTagsListMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.tags.ListMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.tags.ListMembers"]>;
  UsersJoinedTeamsTagsCreateMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.tags.CreateMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.tags.CreateMembers"]>;
  UsersJoinedTeamsTagsGetMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.tags.GetMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.tags.GetMembers"]>;
  UsersJoinedTeamsTagsUpdateMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.tags.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.tags.UpdateMembers"]>;
  UsersJoinedTeamsTagsDeleteMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.tags.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.tags.DeleteMembers"]>;
  UsersJoinedTeamsTagsMembersGetCountF8b7(...args: TeamsGraphOperationArgs<"users.joinedTeams.tags.members.GetCount-f8b7">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.tags.members.GetCount-f8b7"]>;
  UsersJoinedTeamsTagsGetCount7511(...args: TeamsGraphOperationArgs<"users.joinedTeams.tags.GetCount-7511">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.tags.GetCount-7511"]>;
  UsersJoinedTeamsGetTemplate(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetTemplate">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetTemplate"]>;
  UsersJoinedTeamsGetCount0d57(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetCount-0d57">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetCount-0d57"]>;
  UsersUserJoinedTeamsGetAllMessages(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.getAllMessages">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.getAllMessages"]>;
}

export const TeamsGraphUsersTeam05GeneratedFunctionNames = [
  "UsersJoinedTeamsUpdateTags",
  "UsersJoinedTeamsDeleteTags",
  "UsersJoinedTeamsTagsListMembers",
  "UsersJoinedTeamsTagsCreateMembers",
  "UsersJoinedTeamsTagsGetMembers",
  "UsersJoinedTeamsTagsUpdateMembers",
  "UsersJoinedTeamsTagsDeleteMembers",
  "UsersJoinedTeamsTagsMembersGetCountF8b7",
  "UsersJoinedTeamsTagsGetCount7511",
  "UsersJoinedTeamsGetTemplate",
  "UsersJoinedTeamsGetCount0d57",
  "UsersUserJoinedTeamsGetAllMessages"
] as const satisfies readonly (keyof TeamsGraphUsersTeam05GeneratedClient)[];

export function createTeamsGraphUsersTeam05GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersTeam05GeneratedClient {
  return {
    UsersJoinedTeamsUpdateTags: (...args) => callOperation("users.joinedTeams.UpdateTags", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.UpdateTags">)),
    UsersJoinedTeamsDeleteTags: (...args) => callOperation("users.joinedTeams.DeleteTags", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.DeleteTags">)),
    UsersJoinedTeamsTagsListMembers: (...args) => callOperation("users.joinedTeams.tags.ListMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.tags.ListMembers">)),
    UsersJoinedTeamsTagsCreateMembers: (...args) => callOperation("users.joinedTeams.tags.CreateMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.tags.CreateMembers">)),
    UsersJoinedTeamsTagsGetMembers: (...args) => callOperation("users.joinedTeams.tags.GetMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.tags.GetMembers">)),
    UsersJoinedTeamsTagsUpdateMembers: (...args) => callOperation("users.joinedTeams.tags.UpdateMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.tags.UpdateMembers">)),
    UsersJoinedTeamsTagsDeleteMembers: (...args) => callOperation("users.joinedTeams.tags.DeleteMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.tags.DeleteMembers">)),
    UsersJoinedTeamsTagsMembersGetCountF8b7: (...args) => callOperation("users.joinedTeams.tags.members.GetCount-f8b7", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.tags.members.GetCount-f8b7">)),
    UsersJoinedTeamsTagsGetCount7511: (...args) => callOperation("users.joinedTeams.tags.GetCount-7511", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.tags.GetCount-7511">)),
    UsersJoinedTeamsGetTemplate: (...args) => callOperation("users.joinedTeams.GetTemplate", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetTemplate">)),
    UsersJoinedTeamsGetCount0d57: (...args) => callOperation("users.joinedTeams.GetCount-0d57", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetCount-0d57">)),
    UsersUserJoinedTeamsGetAllMessages: (...args) => callOperation("users.user.joinedTeams.getAllMessages", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.getAllMessages">)),
  };
}
