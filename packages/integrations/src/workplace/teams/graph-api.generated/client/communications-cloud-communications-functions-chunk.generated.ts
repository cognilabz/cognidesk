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
export const TeamsGraphCommunicationsCloudCommunicationsFunctionsOperationKeys = [
  "communications.getAllOnlineMeetingMessages"
] as const;
export type TeamsGraphCommunicationsCloudCommunicationsFunctionsOperationKey = typeof TeamsGraphCommunicationsCloudCommunicationsFunctionsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphCommunicationsCloudCommunicationsFunctionsOperationPathParamMap {
  "communications.getAllOnlineMeetingMessages": {};
}

export interface TeamsGraphCommunicationsCloudCommunicationsFunctionsOperationRequestMap {
  "communications.getAllOnlineMeetingMessages": TeamsGraphOperationInput<"communications.getAllOnlineMeetingMessages">;
}

export interface TeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedClient {
  CommunicationsGetAllOnlineMeetingMessages(...args: TeamsGraphOperationArgs<"communications.getAllOnlineMeetingMessages">): Promise<TeamsGraphOperationResponseMap["communications.getAllOnlineMeetingMessages"]>;
}

export const TeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedFunctionNames = [
  "CommunicationsGetAllOnlineMeetingMessages"
] as const satisfies readonly (keyof TeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedClient)[];

export function createTeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphCommunicationsCloudCommunicationsFunctionsGeneratedClient {
  return {
    CommunicationsGetAllOnlineMeetingMessages: (...args) => callOperation("communications.getAllOnlineMeetingMessages", ...(args as TeamsGraphOperationArgs<"communications.getAllOnlineMeetingMessages">)),
  };
}
