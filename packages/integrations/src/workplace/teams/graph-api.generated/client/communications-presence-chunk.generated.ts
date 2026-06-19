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
export const TeamsGraphCommunicationsPresenceOperationKeys = [
  "communications.ListPresences",
  "communications.CreatePresences",
  "communications.GetPresences",
  "communications.UpdatePresences",
  "communications.DeletePresences",
  "communications.presences.presence.clearAutomaticLocation",
  "communications.presences.presence.clearLocation",
  "communications.presences.presence.clearPresence",
  "communications.presences.presence.clearUserPreferredPresence",
  "communications.presences.presence.setAutomaticLocation",
  "communications.presences.presence.setManualLocation",
  "communications.presences.presence.setPresence",
  "communications.presences.presence.setStatusMessage",
  "communications.presences.presence.setUserPreferredPresence",
  "communications.presences.GetCount-e4ed"
] as const;
export type TeamsGraphCommunicationsPresenceOperationKey = typeof TeamsGraphCommunicationsPresenceOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphCommunicationsPresenceOperationPathParamMap {
  "communications.ListPresences": {};
  "communications.CreatePresences": {};
  "communications.GetPresences": { "presence-id": TeamsGraphPathParamValue };
  "communications.UpdatePresences": { "presence-id": TeamsGraphPathParamValue };
  "communications.DeletePresences": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.presence.clearAutomaticLocation": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.presence.clearLocation": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.presence.clearPresence": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.presence.clearUserPreferredPresence": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.presence.setAutomaticLocation": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.presence.setManualLocation": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.presence.setPresence": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.presence.setStatusMessage": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.presence.setUserPreferredPresence": { "presence-id": TeamsGraphPathParamValue };
  "communications.presences.GetCount-e4ed": {};
}

export interface TeamsGraphCommunicationsPresenceOperationRequestMap {
  "communications.ListPresences": TeamsGraphOperationInput<"communications.ListPresences">;
  "communications.CreatePresences": TeamsGraphOperationInput<"communications.CreatePresences">;
  "communications.GetPresences": TeamsGraphOperationInput<"communications.GetPresences">;
  "communications.UpdatePresences": TeamsGraphOperationInput<"communications.UpdatePresences">;
  "communications.DeletePresences": TeamsGraphOperationInput<"communications.DeletePresences">;
  "communications.presences.presence.clearAutomaticLocation": TeamsGraphOperationInput<"communications.presences.presence.clearAutomaticLocation">;
  "communications.presences.presence.clearLocation": TeamsGraphOperationInput<"communications.presences.presence.clearLocation">;
  "communications.presences.presence.clearPresence": TeamsGraphOperationInput<"communications.presences.presence.clearPresence">;
  "communications.presences.presence.clearUserPreferredPresence": TeamsGraphOperationInput<"communications.presences.presence.clearUserPreferredPresence">;
  "communications.presences.presence.setAutomaticLocation": TeamsGraphOperationInput<"communications.presences.presence.setAutomaticLocation">;
  "communications.presences.presence.setManualLocation": TeamsGraphOperationInput<"communications.presences.presence.setManualLocation">;
  "communications.presences.presence.setPresence": TeamsGraphOperationInput<"communications.presences.presence.setPresence">;
  "communications.presences.presence.setStatusMessage": TeamsGraphOperationInput<"communications.presences.presence.setStatusMessage">;
  "communications.presences.presence.setUserPreferredPresence": TeamsGraphOperationInput<"communications.presences.presence.setUserPreferredPresence">;
  "communications.presences.GetCount-e4ed": TeamsGraphOperationInput<"communications.presences.GetCount-e4ed">;
}

export interface TeamsGraphCommunicationsPresenceGeneratedClient {
  CommunicationsListPresences(...args: TeamsGraphOperationArgs<"communications.ListPresences">): Promise<TeamsGraphOperationResponseMap["communications.ListPresences"]>;
  CommunicationsCreatePresences(...args: TeamsGraphOperationArgs<"communications.CreatePresences">): Promise<TeamsGraphOperationResponseMap["communications.CreatePresences"]>;
  CommunicationsGetPresences(...args: TeamsGraphOperationArgs<"communications.GetPresences">): Promise<TeamsGraphOperationResponseMap["communications.GetPresences"]>;
  CommunicationsUpdatePresences(...args: TeamsGraphOperationArgs<"communications.UpdatePresences">): Promise<TeamsGraphOperationResponseMap["communications.UpdatePresences"]>;
  CommunicationsDeletePresences(...args: TeamsGraphOperationArgs<"communications.DeletePresences">): Promise<TeamsGraphOperationResponseMap["communications.DeletePresences"]>;
  CommunicationsPresencesPresenceClearAutomaticLocation(...args: TeamsGraphOperationArgs<"communications.presences.presence.clearAutomaticLocation">): Promise<TeamsGraphOperationResponseMap["communications.presences.presence.clearAutomaticLocation"]>;
  CommunicationsPresencesPresenceClearLocation(...args: TeamsGraphOperationArgs<"communications.presences.presence.clearLocation">): Promise<TeamsGraphOperationResponseMap["communications.presences.presence.clearLocation"]>;
  CommunicationsPresencesPresenceClearPresence(...args: TeamsGraphOperationArgs<"communications.presences.presence.clearPresence">): Promise<TeamsGraphOperationResponseMap["communications.presences.presence.clearPresence"]>;
  CommunicationsPresencesPresenceClearUserPreferredPresence(...args: TeamsGraphOperationArgs<"communications.presences.presence.clearUserPreferredPresence">): Promise<TeamsGraphOperationResponseMap["communications.presences.presence.clearUserPreferredPresence"]>;
  CommunicationsPresencesPresenceSetAutomaticLocation(...args: TeamsGraphOperationArgs<"communications.presences.presence.setAutomaticLocation">): Promise<TeamsGraphOperationResponseMap["communications.presences.presence.setAutomaticLocation"]>;
  CommunicationsPresencesPresenceSetManualLocation(...args: TeamsGraphOperationArgs<"communications.presences.presence.setManualLocation">): Promise<TeamsGraphOperationResponseMap["communications.presences.presence.setManualLocation"]>;
  CommunicationsPresencesPresenceSetPresence(...args: TeamsGraphOperationArgs<"communications.presences.presence.setPresence">): Promise<TeamsGraphOperationResponseMap["communications.presences.presence.setPresence"]>;
  CommunicationsPresencesPresenceSetStatusMessage(...args: TeamsGraphOperationArgs<"communications.presences.presence.setStatusMessage">): Promise<TeamsGraphOperationResponseMap["communications.presences.presence.setStatusMessage"]>;
  CommunicationsPresencesPresenceSetUserPreferredPresence(...args: TeamsGraphOperationArgs<"communications.presences.presence.setUserPreferredPresence">): Promise<TeamsGraphOperationResponseMap["communications.presences.presence.setUserPreferredPresence"]>;
  CommunicationsPresencesGetCountE4ed(...args: TeamsGraphOperationArgs<"communications.presences.GetCount-e4ed">): Promise<TeamsGraphOperationResponseMap["communications.presences.GetCount-e4ed"]>;
}

export const TeamsGraphCommunicationsPresenceGeneratedFunctionNames = [
  "CommunicationsListPresences",
  "CommunicationsCreatePresences",
  "CommunicationsGetPresences",
  "CommunicationsUpdatePresences",
  "CommunicationsDeletePresences",
  "CommunicationsPresencesPresenceClearAutomaticLocation",
  "CommunicationsPresencesPresenceClearLocation",
  "CommunicationsPresencesPresenceClearPresence",
  "CommunicationsPresencesPresenceClearUserPreferredPresence",
  "CommunicationsPresencesPresenceSetAutomaticLocation",
  "CommunicationsPresencesPresenceSetManualLocation",
  "CommunicationsPresencesPresenceSetPresence",
  "CommunicationsPresencesPresenceSetStatusMessage",
  "CommunicationsPresencesPresenceSetUserPreferredPresence",
  "CommunicationsPresencesGetCountE4ed"
] as const satisfies readonly (keyof TeamsGraphCommunicationsPresenceGeneratedClient)[];

export function createTeamsGraphCommunicationsPresenceGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphCommunicationsPresenceGeneratedClient {
  return {
    CommunicationsListPresences: (...args) => callOperation("communications.ListPresences", ...(args as TeamsGraphOperationArgs<"communications.ListPresences">)),
    CommunicationsCreatePresences: (...args) => callOperation("communications.CreatePresences", ...(args as TeamsGraphOperationArgs<"communications.CreatePresences">)),
    CommunicationsGetPresences: (...args) => callOperation("communications.GetPresences", ...(args as TeamsGraphOperationArgs<"communications.GetPresences">)),
    CommunicationsUpdatePresences: (...args) => callOperation("communications.UpdatePresences", ...(args as TeamsGraphOperationArgs<"communications.UpdatePresences">)),
    CommunicationsDeletePresences: (...args) => callOperation("communications.DeletePresences", ...(args as TeamsGraphOperationArgs<"communications.DeletePresences">)),
    CommunicationsPresencesPresenceClearAutomaticLocation: (...args) => callOperation("communications.presences.presence.clearAutomaticLocation", ...(args as TeamsGraphOperationArgs<"communications.presences.presence.clearAutomaticLocation">)),
    CommunicationsPresencesPresenceClearLocation: (...args) => callOperation("communications.presences.presence.clearLocation", ...(args as TeamsGraphOperationArgs<"communications.presences.presence.clearLocation">)),
    CommunicationsPresencesPresenceClearPresence: (...args) => callOperation("communications.presences.presence.clearPresence", ...(args as TeamsGraphOperationArgs<"communications.presences.presence.clearPresence">)),
    CommunicationsPresencesPresenceClearUserPreferredPresence: (...args) => callOperation("communications.presences.presence.clearUserPreferredPresence", ...(args as TeamsGraphOperationArgs<"communications.presences.presence.clearUserPreferredPresence">)),
    CommunicationsPresencesPresenceSetAutomaticLocation: (...args) => callOperation("communications.presences.presence.setAutomaticLocation", ...(args as TeamsGraphOperationArgs<"communications.presences.presence.setAutomaticLocation">)),
    CommunicationsPresencesPresenceSetManualLocation: (...args) => callOperation("communications.presences.presence.setManualLocation", ...(args as TeamsGraphOperationArgs<"communications.presences.presence.setManualLocation">)),
    CommunicationsPresencesPresenceSetPresence: (...args) => callOperation("communications.presences.presence.setPresence", ...(args as TeamsGraphOperationArgs<"communications.presences.presence.setPresence">)),
    CommunicationsPresencesPresenceSetStatusMessage: (...args) => callOperation("communications.presences.presence.setStatusMessage", ...(args as TeamsGraphOperationArgs<"communications.presences.presence.setStatusMessage">)),
    CommunicationsPresencesPresenceSetUserPreferredPresence: (...args) => callOperation("communications.presences.presence.setUserPreferredPresence", ...(args as TeamsGraphOperationArgs<"communications.presences.presence.setUserPreferredPresence">)),
    CommunicationsPresencesGetCountE4ed: (...args) => callOperation("communications.presences.GetCount-e4ed", ...(args as TeamsGraphOperationArgs<"communications.presences.GetCount-e4ed">)),
  };
}
