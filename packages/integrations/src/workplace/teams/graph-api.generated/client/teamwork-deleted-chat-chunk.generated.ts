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
export const TeamsGraphTeamworkDeletedChatOperationKeys = [
  "teamwork.ListDeletedChats",
  "teamwork.CreateDeletedChats",
  "teamwork.GetDeletedChats",
  "teamwork.UpdateDeletedChats",
  "teamwork.DeleteDeletedChats",
  "teamwork.deletedChats.deletedChat.undoDelete",
  "teamwork.deletedChats.GetCount-fc09"
] as const;
export type TeamsGraphTeamworkDeletedChatOperationKey = typeof TeamsGraphTeamworkDeletedChatOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamworkDeletedChatOperationPathParamMap {
  "teamwork.ListDeletedChats": {};
  "teamwork.CreateDeletedChats": {};
  "teamwork.GetDeletedChats": { "deletedChat-id": TeamsGraphPathParamValue };
  "teamwork.UpdateDeletedChats": { "deletedChat-id": TeamsGraphPathParamValue };
  "teamwork.DeleteDeletedChats": { "deletedChat-id": TeamsGraphPathParamValue };
  "teamwork.deletedChats.deletedChat.undoDelete": { "deletedChat-id": TeamsGraphPathParamValue };
  "teamwork.deletedChats.GetCount-fc09": {};
}

export interface TeamsGraphTeamworkDeletedChatOperationRequestMap {
  "teamwork.ListDeletedChats": TeamsGraphOperationInput<"teamwork.ListDeletedChats">;
  "teamwork.CreateDeletedChats": TeamsGraphOperationInput<"teamwork.CreateDeletedChats">;
  "teamwork.GetDeletedChats": TeamsGraphOperationInput<"teamwork.GetDeletedChats">;
  "teamwork.UpdateDeletedChats": TeamsGraphOperationInput<"teamwork.UpdateDeletedChats">;
  "teamwork.DeleteDeletedChats": TeamsGraphOperationInput<"teamwork.DeleteDeletedChats">;
  "teamwork.deletedChats.deletedChat.undoDelete": TeamsGraphOperationInput<"teamwork.deletedChats.deletedChat.undoDelete">;
  "teamwork.deletedChats.GetCount-fc09": TeamsGraphOperationInput<"teamwork.deletedChats.GetCount-fc09">;
}

export interface TeamsGraphTeamworkDeletedChatGeneratedClient {
  TeamworkListDeletedChats(...args: TeamsGraphOperationArgs<"teamwork.ListDeletedChats">): Promise<TeamsGraphOperationResponseMap["teamwork.ListDeletedChats"]>;
  TeamworkCreateDeletedChats(...args: TeamsGraphOperationArgs<"teamwork.CreateDeletedChats">): Promise<TeamsGraphOperationResponseMap["teamwork.CreateDeletedChats"]>;
  TeamworkGetDeletedChats(...args: TeamsGraphOperationArgs<"teamwork.GetDeletedChats">): Promise<TeamsGraphOperationResponseMap["teamwork.GetDeletedChats"]>;
  TeamworkUpdateDeletedChats(...args: TeamsGraphOperationArgs<"teamwork.UpdateDeletedChats">): Promise<TeamsGraphOperationResponseMap["teamwork.UpdateDeletedChats"]>;
  TeamworkDeleteDeletedChats(...args: TeamsGraphOperationArgs<"teamwork.DeleteDeletedChats">): Promise<TeamsGraphOperationResponseMap["teamwork.DeleteDeletedChats"]>;
  TeamworkDeletedChatsDeletedChatUndoDelete(...args: TeamsGraphOperationArgs<"teamwork.deletedChats.deletedChat.undoDelete">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedChats.deletedChat.undoDelete"]>;
  TeamworkDeletedChatsGetCountFc09(...args: TeamsGraphOperationArgs<"teamwork.deletedChats.GetCount-fc09">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedChats.GetCount-fc09"]>;
}

export const TeamsGraphTeamworkDeletedChatGeneratedFunctionNames = [
  "TeamworkListDeletedChats",
  "TeamworkCreateDeletedChats",
  "TeamworkGetDeletedChats",
  "TeamworkUpdateDeletedChats",
  "TeamworkDeleteDeletedChats",
  "TeamworkDeletedChatsDeletedChatUndoDelete",
  "TeamworkDeletedChatsGetCountFc09"
] as const satisfies readonly (keyof TeamsGraphTeamworkDeletedChatGeneratedClient)[];

export function createTeamsGraphTeamworkDeletedChatGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamworkDeletedChatGeneratedClient {
  return {
    TeamworkListDeletedChats: (...args) => callOperation("teamwork.ListDeletedChats", ...(args as TeamsGraphOperationArgs<"teamwork.ListDeletedChats">)),
    TeamworkCreateDeletedChats: (...args) => callOperation("teamwork.CreateDeletedChats", ...(args as TeamsGraphOperationArgs<"teamwork.CreateDeletedChats">)),
    TeamworkGetDeletedChats: (...args) => callOperation("teamwork.GetDeletedChats", ...(args as TeamsGraphOperationArgs<"teamwork.GetDeletedChats">)),
    TeamworkUpdateDeletedChats: (...args) => callOperation("teamwork.UpdateDeletedChats", ...(args as TeamsGraphOperationArgs<"teamwork.UpdateDeletedChats">)),
    TeamworkDeleteDeletedChats: (...args) => callOperation("teamwork.DeleteDeletedChats", ...(args as TeamsGraphOperationArgs<"teamwork.DeleteDeletedChats">)),
    TeamworkDeletedChatsDeletedChatUndoDelete: (...args) => callOperation("teamwork.deletedChats.deletedChat.undoDelete", ...(args as TeamsGraphOperationArgs<"teamwork.deletedChats.deletedChat.undoDelete">)),
    TeamworkDeletedChatsGetCountFc09: (...args) => callOperation("teamwork.deletedChats.GetCount-fc09", ...(args as TeamsGraphOperationArgs<"teamwork.deletedChats.GetCount-fc09">)),
  };
}
