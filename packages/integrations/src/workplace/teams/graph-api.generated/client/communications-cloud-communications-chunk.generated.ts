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
export const TeamsGraphCommunicationsCloudCommunicationsOperationKeys = [
  "communications.cloudCommunications.GetCloudCommunications",
  "communications.cloudCommunications.UpdateCloudCommunications"
] as const;
export type TeamsGraphCommunicationsCloudCommunicationsOperationKey = typeof TeamsGraphCommunicationsCloudCommunicationsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphCommunicationsCloudCommunicationsOperationPathParamMap {
  "communications.cloudCommunications.GetCloudCommunications": {};
  "communications.cloudCommunications.UpdateCloudCommunications": {};
}

export interface TeamsGraphCommunicationsCloudCommunicationsOperationRequestMap {
  "communications.cloudCommunications.GetCloudCommunications": TeamsGraphOperationInput<"communications.cloudCommunications.GetCloudCommunications">;
  "communications.cloudCommunications.UpdateCloudCommunications": TeamsGraphOperationInput<"communications.cloudCommunications.UpdateCloudCommunications">;
}

export interface TeamsGraphCommunicationsCloudCommunicationsGeneratedClient {
  CommunicationsCloudCommunicationsGetCloudCommunications(...args: TeamsGraphOperationArgs<"communications.cloudCommunications.GetCloudCommunications">): Promise<TeamsGraphOperationResponseMap["communications.cloudCommunications.GetCloudCommunications"]>;
  CommunicationsCloudCommunicationsUpdateCloudCommunications(...args: TeamsGraphOperationArgs<"communications.cloudCommunications.UpdateCloudCommunications">): Promise<TeamsGraphOperationResponseMap["communications.cloudCommunications.UpdateCloudCommunications"]>;
}

export const TeamsGraphCommunicationsCloudCommunicationsGeneratedFunctionNames = [
  "CommunicationsCloudCommunicationsGetCloudCommunications",
  "CommunicationsCloudCommunicationsUpdateCloudCommunications"
] as const satisfies readonly (keyof TeamsGraphCommunicationsCloudCommunicationsGeneratedClient)[];

export function createTeamsGraphCommunicationsCloudCommunicationsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphCommunicationsCloudCommunicationsGeneratedClient {
  return {
    CommunicationsCloudCommunicationsGetCloudCommunications: (...args) => callOperation("communications.cloudCommunications.GetCloudCommunications", ...(args as TeamsGraphOperationArgs<"communications.cloudCommunications.GetCloudCommunications">)),
    CommunicationsCloudCommunicationsUpdateCloudCommunications: (...args) => callOperation("communications.cloudCommunications.UpdateCloudCommunications", ...(args as TeamsGraphOperationArgs<"communications.cloudCommunications.UpdateCloudCommunications">)),
  };
}
