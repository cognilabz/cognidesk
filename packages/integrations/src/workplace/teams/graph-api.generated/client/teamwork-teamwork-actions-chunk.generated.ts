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
export const TeamsGraphTeamworkTeamworkActionsOperationKeys = [
  "teamwork.sendActivityNotificationToRecipients"
] as const;
export type TeamsGraphTeamworkTeamworkActionsOperationKey = typeof TeamsGraphTeamworkTeamworkActionsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamworkTeamworkActionsOperationPathParamMap {
  "teamwork.sendActivityNotificationToRecipients": {};
}

export interface TeamsGraphTeamworkTeamworkActionsOperationRequestMap {
  "teamwork.sendActivityNotificationToRecipients": TeamsGraphOperationInput<"teamwork.sendActivityNotificationToRecipients">;
}

export interface TeamsGraphTeamworkTeamworkActionsGeneratedClient {
  TeamworkSendActivityNotificationToRecipients(...args: TeamsGraphOperationArgs<"teamwork.sendActivityNotificationToRecipients">): Promise<TeamsGraphOperationResponseMap["teamwork.sendActivityNotificationToRecipients"]>;
}

export const TeamsGraphTeamworkTeamworkActionsGeneratedFunctionNames = [
  "TeamworkSendActivityNotificationToRecipients"
] as const satisfies readonly (keyof TeamsGraphTeamworkTeamworkActionsGeneratedClient)[];

export function createTeamsGraphTeamworkTeamworkActionsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamworkTeamworkActionsGeneratedClient {
  return {
    TeamworkSendActivityNotificationToRecipients: (...args) => callOperation("teamwork.sendActivityNotificationToRecipients", ...(args as TeamsGraphOperationArgs<"teamwork.sendActivityNotificationToRecipients">)),
  };
}
