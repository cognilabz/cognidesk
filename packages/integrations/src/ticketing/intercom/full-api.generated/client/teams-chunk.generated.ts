// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiTeamsOperationKeys = [
  "listTeams",
  "retrieveTeam"
] as const;
export type IntercomFullApiTeamsOperationKey = typeof IntercomFullApiTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiTeamsOperationPathParamMap {
  "listTeams": {};
  "retrieveTeam": { "team_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiTeamsOperationRequestMap {
  "listTeams": IntercomFullApiOperationInput<"listTeams">;
  "retrieveTeam": IntercomFullApiOperationInput<"retrieveTeam">;
}

export interface IntercomFullApiTeamsGeneratedClient {
  intercomListTeams(...args: IntercomFullApiOperationArgs<"listTeams">): Promise<IntercomFullApiOperationResponseMap["listTeams"]>;
  intercomRetrieveTeam(...args: IntercomFullApiOperationArgs<"retrieveTeam">): Promise<IntercomFullApiOperationResponseMap["retrieveTeam"]>;
}

export const IntercomFullApiTeamsGeneratedFunctionNames = [
  "intercomListTeams",
  "intercomRetrieveTeam"
] as const satisfies readonly (keyof IntercomFullApiTeamsGeneratedClient)[];

export function createIntercomFullApiTeamsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiTeamsGeneratedClient {
  return {
    intercomListTeams: (...args) => callOperation("listTeams", ...(args as IntercomFullApiOperationArgs<"listTeams">)),
    intercomRetrieveTeam: (...args) => callOperation("retrieveTeam", ...(args as IntercomFullApiOperationArgs<"retrieveTeam">)),
  };
}
