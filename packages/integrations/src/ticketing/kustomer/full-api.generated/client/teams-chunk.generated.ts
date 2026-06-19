// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiTeamsOperationKeys = [
  "GetTeams",
  "CreateTeam",
  "RemoveTeamMember",
  "AddTeamMember",
  "GetaUsersTeams"
] as const;
export type KustomerFullApiTeamsOperationKey = typeof KustomerFullApiTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiTeamsOperationPathParamMap {
  "GetTeams": {};
  "CreateTeam": {};
  "RemoveTeamMember": { "id": KustomerFullApiPathParamValue };
  "AddTeamMember": { "id": KustomerFullApiPathParamValue };
  "GetaUsersTeams": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiTeamsOperationRequestMap {
  "GetTeams": KustomerFullApiOperationInput<"GetTeams">;
  "CreateTeam": KustomerFullApiOperationInput<"CreateTeam">;
  "RemoveTeamMember": KustomerFullApiOperationInput<"RemoveTeamMember">;
  "AddTeamMember": KustomerFullApiOperationInput<"AddTeamMember">;
  "GetaUsersTeams": KustomerFullApiOperationInput<"GetaUsersTeams">;
}

export interface KustomerFullApiTeamsGeneratedClient {
  kustomerGetTeams(...args: KustomerFullApiOperationArgs<"GetTeams">): Promise<KustomerFullApiOperationResponseMap["GetTeams"]>;
  kustomerCreateTeam(...args: KustomerFullApiOperationArgs<"CreateTeam">): Promise<KustomerFullApiOperationResponseMap["CreateTeam"]>;
  kustomerRemoveTeamMember(...args: KustomerFullApiOperationArgs<"RemoveTeamMember">): Promise<KustomerFullApiOperationResponseMap["RemoveTeamMember"]>;
  kustomerAddTeamMember(...args: KustomerFullApiOperationArgs<"AddTeamMember">): Promise<KustomerFullApiOperationResponseMap["AddTeamMember"]>;
  kustomerGetaUsersTeams(...args: KustomerFullApiOperationArgs<"GetaUsersTeams">): Promise<KustomerFullApiOperationResponseMap["GetaUsersTeams"]>;
}

export const KustomerFullApiTeamsGeneratedFunctionNames = [
  "kustomerGetTeams",
  "kustomerCreateTeam",
  "kustomerRemoveTeamMember",
  "kustomerAddTeamMember",
  "kustomerGetaUsersTeams"
] as const satisfies readonly (keyof KustomerFullApiTeamsGeneratedClient)[];

export function createKustomerFullApiTeamsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiTeamsGeneratedClient {
  return {
    kustomerGetTeams: (...args) => callOperation("GetTeams", ...(args as KustomerFullApiOperationArgs<"GetTeams">)),
    kustomerCreateTeam: (...args) => callOperation("CreateTeam", ...(args as KustomerFullApiOperationArgs<"CreateTeam">)),
    kustomerRemoveTeamMember: (...args) => callOperation("RemoveTeamMember", ...(args as KustomerFullApiOperationArgs<"RemoveTeamMember">)),
    kustomerAddTeamMember: (...args) => callOperation("AddTeamMember", ...(args as KustomerFullApiOperationArgs<"AddTeamMember">)),
    kustomerGetaUsersTeams: (...args) => callOperation("GetaUsersTeams", ...(args as KustomerFullApiOperationArgs<"GetaUsersTeams">)),
  };
}
