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
export const TeamsGraphTeamsTeamsAsyncOperationOperationKeys = [
  "teams.ListOperations",
  "teams.CreateOperations",
  "teams.GetOperations",
  "teams.UpdateOperations",
  "teams.DeleteOperations",
  "teams.operations.GetCount-66af"
] as const;
export type TeamsGraphTeamsTeamsAsyncOperationOperationKey = typeof TeamsGraphTeamsTeamsAsyncOperationOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsTeamsAsyncOperationOperationPathParamMap {
  "teams.ListOperations": { "team-id": TeamsGraphPathParamValue };
  "teams.CreateOperations": { "team-id": TeamsGraphPathParamValue };
  "teams.GetOperations": { "team-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "teams.UpdateOperations": { "team-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "teams.DeleteOperations": { "team-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "teams.operations.GetCount-66af": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsTeamsAsyncOperationOperationRequestMap {
  "teams.ListOperations": TeamsGraphOperationInput<"teams.ListOperations">;
  "teams.CreateOperations": TeamsGraphOperationInput<"teams.CreateOperations">;
  "teams.GetOperations": TeamsGraphOperationInput<"teams.GetOperations">;
  "teams.UpdateOperations": TeamsGraphOperationInput<"teams.UpdateOperations">;
  "teams.DeleteOperations": TeamsGraphOperationInput<"teams.DeleteOperations">;
  "teams.operations.GetCount-66af": TeamsGraphOperationInput<"teams.operations.GetCount-66af">;
}

export interface TeamsGraphTeamsTeamsAsyncOperationGeneratedClient {
  TeamsListOperations(...args: TeamsGraphOperationArgs<"teams.ListOperations">): Promise<TeamsGraphOperationResponseMap["teams.ListOperations"]>;
  TeamsCreateOperations(...args: TeamsGraphOperationArgs<"teams.CreateOperations">): Promise<TeamsGraphOperationResponseMap["teams.CreateOperations"]>;
  TeamsGetOperations(...args: TeamsGraphOperationArgs<"teams.GetOperations">): Promise<TeamsGraphOperationResponseMap["teams.GetOperations"]>;
  TeamsUpdateOperations(...args: TeamsGraphOperationArgs<"teams.UpdateOperations">): Promise<TeamsGraphOperationResponseMap["teams.UpdateOperations"]>;
  TeamsDeleteOperations(...args: TeamsGraphOperationArgs<"teams.DeleteOperations">): Promise<TeamsGraphOperationResponseMap["teams.DeleteOperations"]>;
  TeamsOperationsGetCount66af(...args: TeamsGraphOperationArgs<"teams.operations.GetCount-66af">): Promise<TeamsGraphOperationResponseMap["teams.operations.GetCount-66af"]>;
}

export const TeamsGraphTeamsTeamsAsyncOperationGeneratedFunctionNames = [
  "TeamsListOperations",
  "TeamsCreateOperations",
  "TeamsGetOperations",
  "TeamsUpdateOperations",
  "TeamsDeleteOperations",
  "TeamsOperationsGetCount66af"
] as const satisfies readonly (keyof TeamsGraphTeamsTeamsAsyncOperationGeneratedClient)[];

export function createTeamsGraphTeamsTeamsAsyncOperationGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsTeamsAsyncOperationGeneratedClient {
  return {
    TeamsListOperations: (...args) => callOperation("teams.ListOperations", ...(args as TeamsGraphOperationArgs<"teams.ListOperations">)),
    TeamsCreateOperations: (...args) => callOperation("teams.CreateOperations", ...(args as TeamsGraphOperationArgs<"teams.CreateOperations">)),
    TeamsGetOperations: (...args) => callOperation("teams.GetOperations", ...(args as TeamsGraphOperationArgs<"teams.GetOperations">)),
    TeamsUpdateOperations: (...args) => callOperation("teams.UpdateOperations", ...(args as TeamsGraphOperationArgs<"teams.UpdateOperations">)),
    TeamsDeleteOperations: (...args) => callOperation("teams.DeleteOperations", ...(args as TeamsGraphOperationArgs<"teams.DeleteOperations">)),
    TeamsOperationsGetCount66af: (...args) => callOperation("teams.operations.GetCount-66af", ...(args as TeamsGraphOperationArgs<"teams.operations.GetCount-66af">)),
  };
}
