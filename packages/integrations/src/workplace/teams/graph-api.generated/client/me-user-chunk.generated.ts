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
export const TeamsGraphMeUserOperationKeys = [
  "me.user.GetUser",
  "me.user.UpdateUser"
] as const;
export type TeamsGraphMeUserOperationKey = typeof TeamsGraphMeUserOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeUserOperationPathParamMap {
  "me.user.GetUser": {};
  "me.user.UpdateUser": {};
}

export interface TeamsGraphMeUserOperationRequestMap {
  "me.user.GetUser": TeamsGraphOperationInput<"me.user.GetUser">;
  "me.user.UpdateUser": TeamsGraphOperationInput<"me.user.UpdateUser">;
}

export interface TeamsGraphMeUserGeneratedClient {
  MeUserGetUser(...args: TeamsGraphOperationArgs<"me.user.GetUser">): Promise<TeamsGraphOperationResponseMap["me.user.GetUser"]>;
  MeUserUpdateUser(...args: TeamsGraphOperationArgs<"me.user.UpdateUser">): Promise<TeamsGraphOperationResponseMap["me.user.UpdateUser"]>;
}

export const TeamsGraphMeUserGeneratedFunctionNames = [
  "MeUserGetUser",
  "MeUserUpdateUser"
] as const satisfies readonly (keyof TeamsGraphMeUserGeneratedClient)[];

export function createTeamsGraphMeUserGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeUserGeneratedClient {
  return {
    MeUserGetUser: (...args) => callOperation("me.user.GetUser", ...(args as TeamsGraphOperationArgs<"me.user.GetUser">)),
    MeUserUpdateUser: (...args) => callOperation("me.user.UpdateUser", ...(args as TeamsGraphOperationArgs<"me.user.UpdateUser">)),
  };
}
