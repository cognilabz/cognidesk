// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiTeamsOperationKeys = [
  "list-teams",
  "create-team",
  "delete-team",
  "get-team",
  "update-team"
] as const;
export type GorgiasFullApiTeamsOperationKey = typeof GorgiasFullApiTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiTeamsOperationPathParamMap {
  "list-teams": {};
  "create-team": {};
  "delete-team": { "id": GorgiasFullApiPathParamValue };
  "get-team": { "id": GorgiasFullApiPathParamValue };
  "update-team": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiTeamsOperationRequestMap {
  "list-teams": GorgiasFullApiOperationInput<"list-teams">;
  "create-team": GorgiasFullApiOperationInput<"create-team">;
  "delete-team": GorgiasFullApiOperationInput<"delete-team">;
  "get-team": GorgiasFullApiOperationInput<"get-team">;
  "update-team": GorgiasFullApiOperationInput<"update-team">;
}

export interface GorgiasFullApiTeamsGeneratedClient {
  gorgiasListTeams(...args: GorgiasFullApiOperationArgs<"list-teams">): Promise<GorgiasFullApiOperationResponseMap["list-teams"]>;
  gorgiasCreateTeam(...args: GorgiasFullApiOperationArgs<"create-team">): Promise<GorgiasFullApiOperationResponseMap["create-team"]>;
  gorgiasDeleteTeam(...args: GorgiasFullApiOperationArgs<"delete-team">): Promise<GorgiasFullApiOperationResponseMap["delete-team"]>;
  gorgiasGetTeam(...args: GorgiasFullApiOperationArgs<"get-team">): Promise<GorgiasFullApiOperationResponseMap["get-team"]>;
  gorgiasUpdateTeam(...args: GorgiasFullApiOperationArgs<"update-team">): Promise<GorgiasFullApiOperationResponseMap["update-team"]>;
}

export const GorgiasFullApiTeamsGeneratedFunctionNames = [
  "gorgiasListTeams",
  "gorgiasCreateTeam",
  "gorgiasDeleteTeam",
  "gorgiasGetTeam",
  "gorgiasUpdateTeam"
] as const satisfies readonly (keyof GorgiasFullApiTeamsGeneratedClient)[];

export function createGorgiasFullApiTeamsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiTeamsGeneratedClient {
  return {
    gorgiasListTeams: (...args) => callOperation("list-teams", ...(args as GorgiasFullApiOperationArgs<"list-teams">)),
    gorgiasCreateTeam: (...args) => callOperation("create-team", ...(args as GorgiasFullApiOperationArgs<"create-team">)),
    gorgiasDeleteTeam: (...args) => callOperation("delete-team", ...(args as GorgiasFullApiOperationArgs<"delete-team">)),
    gorgiasGetTeam: (...args) => callOperation("get-team", ...(args as GorgiasFullApiOperationArgs<"get-team">)),
    gorgiasUpdateTeam: (...args) => callOperation("update-team", ...(args as GorgiasFullApiOperationArgs<"update-team">)),
  };
}
