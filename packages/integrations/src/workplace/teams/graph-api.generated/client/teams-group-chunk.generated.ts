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
export const TeamsGraphTeamsGroupOperationKeys = [
  "teams.GetGroup",
  "teams.group.ListServiceProvisioningErrors",
  "teams.group.ServiceProvisioningErrors.GetCount-f5fe"
] as const;
export type TeamsGraphTeamsGroupOperationKey = typeof TeamsGraphTeamsGroupOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsGroupOperationPathParamMap {
  "teams.GetGroup": { "team-id": TeamsGraphPathParamValue };
  "teams.group.ListServiceProvisioningErrors": { "team-id": TeamsGraphPathParamValue };
  "teams.group.ServiceProvisioningErrors.GetCount-f5fe": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsGroupOperationRequestMap {
  "teams.GetGroup": TeamsGraphOperationInput<"teams.GetGroup">;
  "teams.group.ListServiceProvisioningErrors": TeamsGraphOperationInput<"teams.group.ListServiceProvisioningErrors">;
  "teams.group.ServiceProvisioningErrors.GetCount-f5fe": TeamsGraphOperationInput<"teams.group.ServiceProvisioningErrors.GetCount-f5fe">;
}

export interface TeamsGraphTeamsGroupGeneratedClient {
  TeamsGetGroup(...args: TeamsGraphOperationArgs<"teams.GetGroup">): Promise<TeamsGraphOperationResponseMap["teams.GetGroup"]>;
  TeamsGroupListServiceProvisioningErrors(...args: TeamsGraphOperationArgs<"teams.group.ListServiceProvisioningErrors">): Promise<TeamsGraphOperationResponseMap["teams.group.ListServiceProvisioningErrors"]>;
  TeamsGroupServiceProvisioningErrorsGetCountF5fe(...args: TeamsGraphOperationArgs<"teams.group.ServiceProvisioningErrors.GetCount-f5fe">): Promise<TeamsGraphOperationResponseMap["teams.group.ServiceProvisioningErrors.GetCount-f5fe"]>;
}

export const TeamsGraphTeamsGroupGeneratedFunctionNames = [
  "TeamsGetGroup",
  "TeamsGroupListServiceProvisioningErrors",
  "TeamsGroupServiceProvisioningErrorsGetCountF5fe"
] as const satisfies readonly (keyof TeamsGraphTeamsGroupGeneratedClient)[];

export function createTeamsGraphTeamsGroupGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsGroupGeneratedClient {
  return {
    TeamsGetGroup: (...args) => callOperation("teams.GetGroup", ...(args as TeamsGraphOperationArgs<"teams.GetGroup">)),
    TeamsGroupListServiceProvisioningErrors: (...args) => callOperation("teams.group.ListServiceProvisioningErrors", ...(args as TeamsGraphOperationArgs<"teams.group.ListServiceProvisioningErrors">)),
    TeamsGroupServiceProvisioningErrorsGetCountF5fe: (...args) => callOperation("teams.group.ServiceProvisioningErrors.GetCount-f5fe", ...(args as TeamsGraphOperationArgs<"teams.group.ServiceProvisioningErrors.GetCount-f5fe">)),
  };
}
