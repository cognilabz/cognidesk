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
export const TeamsGraphTeamsProfilePhotoOperationKeys = [
  "teams.GetPhoto",
  "teams.UpdatePhoto",
  "teams.GetPhotoContent",
  "teams.UpdatePhotoContent",
  "teams.DeletePhotoContent"
] as const;
export type TeamsGraphTeamsProfilePhotoOperationKey = typeof TeamsGraphTeamsProfilePhotoOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsProfilePhotoOperationPathParamMap {
  "teams.GetPhoto": { "team-id": TeamsGraphPathParamValue };
  "teams.UpdatePhoto": { "team-id": TeamsGraphPathParamValue };
  "teams.GetPhotoContent": { "team-id": TeamsGraphPathParamValue };
  "teams.UpdatePhotoContent": { "team-id": TeamsGraphPathParamValue };
  "teams.DeletePhotoContent": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsProfilePhotoOperationRequestMap {
  "teams.GetPhoto": TeamsGraphOperationInput<"teams.GetPhoto">;
  "teams.UpdatePhoto": TeamsGraphOperationInput<"teams.UpdatePhoto">;
  "teams.GetPhotoContent": TeamsGraphOperationInput<"teams.GetPhotoContent">;
  "teams.UpdatePhotoContent": TeamsGraphOperationInput<"teams.UpdatePhotoContent">;
  "teams.DeletePhotoContent": TeamsGraphOperationInput<"teams.DeletePhotoContent">;
}

export interface TeamsGraphTeamsProfilePhotoGeneratedClient {
  TeamsGetPhoto(...args: TeamsGraphOperationArgs<"teams.GetPhoto">): Promise<TeamsGraphOperationResponseMap["teams.GetPhoto"]>;
  TeamsUpdatePhoto(...args: TeamsGraphOperationArgs<"teams.UpdatePhoto">): Promise<TeamsGraphOperationResponseMap["teams.UpdatePhoto"]>;
  TeamsGetPhotoContent(...args: TeamsGraphOperationArgs<"teams.GetPhotoContent">): Promise<TeamsGraphOperationResponseMap["teams.GetPhotoContent"]>;
  TeamsUpdatePhotoContent(...args: TeamsGraphOperationArgs<"teams.UpdatePhotoContent">): Promise<TeamsGraphOperationResponseMap["teams.UpdatePhotoContent"]>;
  TeamsDeletePhotoContent(...args: TeamsGraphOperationArgs<"teams.DeletePhotoContent">): Promise<TeamsGraphOperationResponseMap["teams.DeletePhotoContent"]>;
}

export const TeamsGraphTeamsProfilePhotoGeneratedFunctionNames = [
  "TeamsGetPhoto",
  "TeamsUpdatePhoto",
  "TeamsGetPhotoContent",
  "TeamsUpdatePhotoContent",
  "TeamsDeletePhotoContent"
] as const satisfies readonly (keyof TeamsGraphTeamsProfilePhotoGeneratedClient)[];

export function createTeamsGraphTeamsProfilePhotoGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsProfilePhotoGeneratedClient {
  return {
    TeamsGetPhoto: (...args) => callOperation("teams.GetPhoto", ...(args as TeamsGraphOperationArgs<"teams.GetPhoto">)),
    TeamsUpdatePhoto: (...args) => callOperation("teams.UpdatePhoto", ...(args as TeamsGraphOperationArgs<"teams.UpdatePhoto">)),
    TeamsGetPhotoContent: (...args) => callOperation("teams.GetPhotoContent", ...(args as TeamsGraphOperationArgs<"teams.GetPhotoContent">)),
    TeamsUpdatePhotoContent: (...args) => callOperation("teams.UpdatePhotoContent", ...(args as TeamsGraphOperationArgs<"teams.UpdatePhotoContent">)),
    TeamsDeletePhotoContent: (...args) => callOperation("teams.DeletePhotoContent", ...(args as TeamsGraphOperationArgs<"teams.DeletePhotoContent">)),
  };
}
