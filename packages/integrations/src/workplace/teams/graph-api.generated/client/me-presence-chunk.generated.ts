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
export const TeamsGraphMePresenceOperationKeys = [
  "me.GetPresence",
  "me.UpdatePresence",
  "me.DeletePresence",
  "me.presence.clearAutomaticLocation",
  "me.presence.clearLocation",
  "me.presence.clearPresence",
  "me.presence.clearUserPreferredPresence",
  "me.presence.setAutomaticLocation",
  "me.presence.setManualLocation",
  "me.presence.setPresence",
  "me.presence.setStatusMessage",
  "me.presence.setUserPreferredPresence"
] as const;
export type TeamsGraphMePresenceOperationKey = typeof TeamsGraphMePresenceOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMePresenceOperationPathParamMap {
  "me.GetPresence": {};
  "me.UpdatePresence": {};
  "me.DeletePresence": {};
  "me.presence.clearAutomaticLocation": {};
  "me.presence.clearLocation": {};
  "me.presence.clearPresence": {};
  "me.presence.clearUserPreferredPresence": {};
  "me.presence.setAutomaticLocation": {};
  "me.presence.setManualLocation": {};
  "me.presence.setPresence": {};
  "me.presence.setStatusMessage": {};
  "me.presence.setUserPreferredPresence": {};
}

export interface TeamsGraphMePresenceOperationRequestMap {
  "me.GetPresence": TeamsGraphOperationInput<"me.GetPresence">;
  "me.UpdatePresence": TeamsGraphOperationInput<"me.UpdatePresence">;
  "me.DeletePresence": TeamsGraphOperationInput<"me.DeletePresence">;
  "me.presence.clearAutomaticLocation": TeamsGraphOperationInput<"me.presence.clearAutomaticLocation">;
  "me.presence.clearLocation": TeamsGraphOperationInput<"me.presence.clearLocation">;
  "me.presence.clearPresence": TeamsGraphOperationInput<"me.presence.clearPresence">;
  "me.presence.clearUserPreferredPresence": TeamsGraphOperationInput<"me.presence.clearUserPreferredPresence">;
  "me.presence.setAutomaticLocation": TeamsGraphOperationInput<"me.presence.setAutomaticLocation">;
  "me.presence.setManualLocation": TeamsGraphOperationInput<"me.presence.setManualLocation">;
  "me.presence.setPresence": TeamsGraphOperationInput<"me.presence.setPresence">;
  "me.presence.setStatusMessage": TeamsGraphOperationInput<"me.presence.setStatusMessage">;
  "me.presence.setUserPreferredPresence": TeamsGraphOperationInput<"me.presence.setUserPreferredPresence">;
}

export interface TeamsGraphMePresenceGeneratedClient {
  MeGetPresence(...args: TeamsGraphOperationArgs<"me.GetPresence">): Promise<TeamsGraphOperationResponseMap["me.GetPresence"]>;
  MeUpdatePresence(...args: TeamsGraphOperationArgs<"me.UpdatePresence">): Promise<TeamsGraphOperationResponseMap["me.UpdatePresence"]>;
  MeDeletePresence(...args: TeamsGraphOperationArgs<"me.DeletePresence">): Promise<TeamsGraphOperationResponseMap["me.DeletePresence"]>;
  MePresenceClearAutomaticLocation(...args: TeamsGraphOperationArgs<"me.presence.clearAutomaticLocation">): Promise<TeamsGraphOperationResponseMap["me.presence.clearAutomaticLocation"]>;
  MePresenceClearLocation(...args: TeamsGraphOperationArgs<"me.presence.clearLocation">): Promise<TeamsGraphOperationResponseMap["me.presence.clearLocation"]>;
  MePresenceClearPresence(...args: TeamsGraphOperationArgs<"me.presence.clearPresence">): Promise<TeamsGraphOperationResponseMap["me.presence.clearPresence"]>;
  MePresenceClearUserPreferredPresence(...args: TeamsGraphOperationArgs<"me.presence.clearUserPreferredPresence">): Promise<TeamsGraphOperationResponseMap["me.presence.clearUserPreferredPresence"]>;
  MePresenceSetAutomaticLocation(...args: TeamsGraphOperationArgs<"me.presence.setAutomaticLocation">): Promise<TeamsGraphOperationResponseMap["me.presence.setAutomaticLocation"]>;
  MePresenceSetManualLocation(...args: TeamsGraphOperationArgs<"me.presence.setManualLocation">): Promise<TeamsGraphOperationResponseMap["me.presence.setManualLocation"]>;
  MePresenceSetPresence(...args: TeamsGraphOperationArgs<"me.presence.setPresence">): Promise<TeamsGraphOperationResponseMap["me.presence.setPresence"]>;
  MePresenceSetStatusMessage(...args: TeamsGraphOperationArgs<"me.presence.setStatusMessage">): Promise<TeamsGraphOperationResponseMap["me.presence.setStatusMessage"]>;
  MePresenceSetUserPreferredPresence(...args: TeamsGraphOperationArgs<"me.presence.setUserPreferredPresence">): Promise<TeamsGraphOperationResponseMap["me.presence.setUserPreferredPresence"]>;
}

export const TeamsGraphMePresenceGeneratedFunctionNames = [
  "MeGetPresence",
  "MeUpdatePresence",
  "MeDeletePresence",
  "MePresenceClearAutomaticLocation",
  "MePresenceClearLocation",
  "MePresenceClearPresence",
  "MePresenceClearUserPreferredPresence",
  "MePresenceSetAutomaticLocation",
  "MePresenceSetManualLocation",
  "MePresenceSetPresence",
  "MePresenceSetStatusMessage",
  "MePresenceSetUserPreferredPresence"
] as const satisfies readonly (keyof TeamsGraphMePresenceGeneratedClient)[];

export function createTeamsGraphMePresenceGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMePresenceGeneratedClient {
  return {
    MeGetPresence: (...args) => callOperation("me.GetPresence", ...(args as TeamsGraphOperationArgs<"me.GetPresence">)),
    MeUpdatePresence: (...args) => callOperation("me.UpdatePresence", ...(args as TeamsGraphOperationArgs<"me.UpdatePresence">)),
    MeDeletePresence: (...args) => callOperation("me.DeletePresence", ...(args as TeamsGraphOperationArgs<"me.DeletePresence">)),
    MePresenceClearAutomaticLocation: (...args) => callOperation("me.presence.clearAutomaticLocation", ...(args as TeamsGraphOperationArgs<"me.presence.clearAutomaticLocation">)),
    MePresenceClearLocation: (...args) => callOperation("me.presence.clearLocation", ...(args as TeamsGraphOperationArgs<"me.presence.clearLocation">)),
    MePresenceClearPresence: (...args) => callOperation("me.presence.clearPresence", ...(args as TeamsGraphOperationArgs<"me.presence.clearPresence">)),
    MePresenceClearUserPreferredPresence: (...args) => callOperation("me.presence.clearUserPreferredPresence", ...(args as TeamsGraphOperationArgs<"me.presence.clearUserPreferredPresence">)),
    MePresenceSetAutomaticLocation: (...args) => callOperation("me.presence.setAutomaticLocation", ...(args as TeamsGraphOperationArgs<"me.presence.setAutomaticLocation">)),
    MePresenceSetManualLocation: (...args) => callOperation("me.presence.setManualLocation", ...(args as TeamsGraphOperationArgs<"me.presence.setManualLocation">)),
    MePresenceSetPresence: (...args) => callOperation("me.presence.setPresence", ...(args as TeamsGraphOperationArgs<"me.presence.setPresence">)),
    MePresenceSetStatusMessage: (...args) => callOperation("me.presence.setStatusMessage", ...(args as TeamsGraphOperationArgs<"me.presence.setStatusMessage">)),
    MePresenceSetUserPreferredPresence: (...args) => callOperation("me.presence.setUserPreferredPresence", ...(args as TeamsGraphOperationArgs<"me.presence.setUserPreferredPresence">)),
  };
}
