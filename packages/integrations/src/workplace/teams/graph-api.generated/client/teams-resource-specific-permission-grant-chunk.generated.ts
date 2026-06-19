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
export const TeamsGraphTeamsResourceSpecificPermissionGrantOperationKeys = [
  "teams.ListPermissionGrants",
  "teams.CreatePermissionGrants",
  "teams.GetPermissionGrants",
  "teams.UpdatePermissionGrants",
  "teams.DeletePermissionGrants",
  "teams.permissionGrants.GetCount-34e2"
] as const;
export type TeamsGraphTeamsResourceSpecificPermissionGrantOperationKey = typeof TeamsGraphTeamsResourceSpecificPermissionGrantOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsResourceSpecificPermissionGrantOperationPathParamMap {
  "teams.ListPermissionGrants": { "team-id": TeamsGraphPathParamValue };
  "teams.CreatePermissionGrants": { "team-id": TeamsGraphPathParamValue };
  "teams.GetPermissionGrants": { "team-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "teams.UpdatePermissionGrants": { "team-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "teams.DeletePermissionGrants": { "team-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "teams.permissionGrants.GetCount-34e2": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsResourceSpecificPermissionGrantOperationRequestMap {
  "teams.ListPermissionGrants": TeamsGraphOperationInput<"teams.ListPermissionGrants">;
  "teams.CreatePermissionGrants": TeamsGraphOperationInput<"teams.CreatePermissionGrants">;
  "teams.GetPermissionGrants": TeamsGraphOperationInput<"teams.GetPermissionGrants">;
  "teams.UpdatePermissionGrants": TeamsGraphOperationInput<"teams.UpdatePermissionGrants">;
  "teams.DeletePermissionGrants": TeamsGraphOperationInput<"teams.DeletePermissionGrants">;
  "teams.permissionGrants.GetCount-34e2": TeamsGraphOperationInput<"teams.permissionGrants.GetCount-34e2">;
}

export interface TeamsGraphTeamsResourceSpecificPermissionGrantGeneratedClient {
  TeamsListPermissionGrants(...args: TeamsGraphOperationArgs<"teams.ListPermissionGrants">): Promise<TeamsGraphOperationResponseMap["teams.ListPermissionGrants"]>;
  TeamsCreatePermissionGrants(...args: TeamsGraphOperationArgs<"teams.CreatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["teams.CreatePermissionGrants"]>;
  TeamsGetPermissionGrants(...args: TeamsGraphOperationArgs<"teams.GetPermissionGrants">): Promise<TeamsGraphOperationResponseMap["teams.GetPermissionGrants"]>;
  TeamsUpdatePermissionGrants(...args: TeamsGraphOperationArgs<"teams.UpdatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["teams.UpdatePermissionGrants"]>;
  TeamsDeletePermissionGrants(...args: TeamsGraphOperationArgs<"teams.DeletePermissionGrants">): Promise<TeamsGraphOperationResponseMap["teams.DeletePermissionGrants"]>;
  TeamsPermissionGrantsGetCount34e2(...args: TeamsGraphOperationArgs<"teams.permissionGrants.GetCount-34e2">): Promise<TeamsGraphOperationResponseMap["teams.permissionGrants.GetCount-34e2"]>;
}

export const TeamsGraphTeamsResourceSpecificPermissionGrantGeneratedFunctionNames = [
  "TeamsListPermissionGrants",
  "TeamsCreatePermissionGrants",
  "TeamsGetPermissionGrants",
  "TeamsUpdatePermissionGrants",
  "TeamsDeletePermissionGrants",
  "TeamsPermissionGrantsGetCount34e2"
] as const satisfies readonly (keyof TeamsGraphTeamsResourceSpecificPermissionGrantGeneratedClient)[];

export function createTeamsGraphTeamsResourceSpecificPermissionGrantGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsResourceSpecificPermissionGrantGeneratedClient {
  return {
    TeamsListPermissionGrants: (...args) => callOperation("teams.ListPermissionGrants", ...(args as TeamsGraphOperationArgs<"teams.ListPermissionGrants">)),
    TeamsCreatePermissionGrants: (...args) => callOperation("teams.CreatePermissionGrants", ...(args as TeamsGraphOperationArgs<"teams.CreatePermissionGrants">)),
    TeamsGetPermissionGrants: (...args) => callOperation("teams.GetPermissionGrants", ...(args as TeamsGraphOperationArgs<"teams.GetPermissionGrants">)),
    TeamsUpdatePermissionGrants: (...args) => callOperation("teams.UpdatePermissionGrants", ...(args as TeamsGraphOperationArgs<"teams.UpdatePermissionGrants">)),
    TeamsDeletePermissionGrants: (...args) => callOperation("teams.DeletePermissionGrants", ...(args as TeamsGraphOperationArgs<"teams.DeletePermissionGrants">)),
    TeamsPermissionGrantsGetCount34e2: (...args) => callOperation("teams.permissionGrants.GetCount-34e2", ...(args as TeamsGraphOperationArgs<"teams.permissionGrants.GetCount-34e2">)),
  };
}
