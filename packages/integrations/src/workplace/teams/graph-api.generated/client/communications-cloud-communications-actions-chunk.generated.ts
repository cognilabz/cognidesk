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
export const TeamsGraphCommunicationsCloudCommunicationsActionsOperationKeys = [
  "communications.getPresencesByUserId"
] as const;
export type TeamsGraphCommunicationsCloudCommunicationsActionsOperationKey = typeof TeamsGraphCommunicationsCloudCommunicationsActionsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphCommunicationsCloudCommunicationsActionsOperationPathParamMap {
  "communications.getPresencesByUserId": {};
}

export interface TeamsGraphCommunicationsCloudCommunicationsActionsOperationRequestMap {
  "communications.getPresencesByUserId": TeamsGraphOperationInput<"communications.getPresencesByUserId">;
}

export interface TeamsGraphCommunicationsCloudCommunicationsActionsGeneratedClient {
  CommunicationsGetPresencesByUserId(...args: TeamsGraphOperationArgs<"communications.getPresencesByUserId">): Promise<TeamsGraphOperationResponseMap["communications.getPresencesByUserId"]>;
}

export const TeamsGraphCommunicationsCloudCommunicationsActionsGeneratedFunctionNames = [
  "CommunicationsGetPresencesByUserId"
] as const satisfies readonly (keyof TeamsGraphCommunicationsCloudCommunicationsActionsGeneratedClient)[];

export function createTeamsGraphCommunicationsCloudCommunicationsActionsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphCommunicationsCloudCommunicationsActionsGeneratedClient {
  return {
    CommunicationsGetPresencesByUserId: (...args) => callOperation("communications.getPresencesByUserId", ...(args as TeamsGraphOperationArgs<"communications.getPresencesByUserId">)),
  };
}
