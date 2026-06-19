// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiTimeOffOperationKeys = [
  "list-teammate-time-offs",
  "create-time-off",
  "list-team-time-offs",
  "delete-time-off",
  "get-time-off",
  "update-time-off"
] as const;
export type FrontFullApiTimeOffOperationKey = typeof FrontFullApiTimeOffOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiTimeOffOperationPathParamMap {
  "list-teammate-time-offs": { "teammate_id": FrontFullApiPathParamValue };
  "create-time-off": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-time-offs": { "team_id": FrontFullApiPathParamValue };
  "delete-time-off": { "time_off_id": FrontFullApiPathParamValue };
  "get-time-off": { "time_off_id": FrontFullApiPathParamValue };
  "update-time-off": { "time_off_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiTimeOffOperationRequestMap {
  "list-teammate-time-offs": FrontFullApiOperationInput<"list-teammate-time-offs">;
  "create-time-off": FrontFullApiOperationInput<"create-time-off">;
  "list-team-time-offs": FrontFullApiOperationInput<"list-team-time-offs">;
  "delete-time-off": FrontFullApiOperationInput<"delete-time-off">;
  "get-time-off": FrontFullApiOperationInput<"get-time-off">;
  "update-time-off": FrontFullApiOperationInput<"update-time-off">;
}

export interface FrontFullApiTimeOffGeneratedClient {
  frontListTeammateTimeOffs(...args: FrontFullApiOperationArgs<"list-teammate-time-offs">): Promise<FrontFullApiOperationResponseMap["list-teammate-time-offs"]>;
  frontCreateTimeOff(...args: FrontFullApiOperationArgs<"create-time-off">): Promise<FrontFullApiOperationResponseMap["create-time-off"]>;
  frontListTeamTimeOffs(...args: FrontFullApiOperationArgs<"list-team-time-offs">): Promise<FrontFullApiOperationResponseMap["list-team-time-offs"]>;
  frontDeleteTimeOff(...args: FrontFullApiOperationArgs<"delete-time-off">): Promise<FrontFullApiOperationResponseMap["delete-time-off"]>;
  frontGetTimeOff(...args: FrontFullApiOperationArgs<"get-time-off">): Promise<FrontFullApiOperationResponseMap["get-time-off"]>;
  frontUpdateTimeOff(...args: FrontFullApiOperationArgs<"update-time-off">): Promise<FrontFullApiOperationResponseMap["update-time-off"]>;
}

export const FrontFullApiTimeOffGeneratedFunctionNames = [
  "frontListTeammateTimeOffs",
  "frontCreateTimeOff",
  "frontListTeamTimeOffs",
  "frontDeleteTimeOff",
  "frontGetTimeOff",
  "frontUpdateTimeOff"
] as const satisfies readonly (keyof FrontFullApiTimeOffGeneratedClient)[];

export function createFrontFullApiTimeOffGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiTimeOffGeneratedClient {
  return {
    frontListTeammateTimeOffs: (...args) => callOperation("list-teammate-time-offs", ...(args as FrontFullApiOperationArgs<"list-teammate-time-offs">)),
    frontCreateTimeOff: (...args) => callOperation("create-time-off", ...(args as FrontFullApiOperationArgs<"create-time-off">)),
    frontListTeamTimeOffs: (...args) => callOperation("list-team-time-offs", ...(args as FrontFullApiOperationArgs<"list-team-time-offs">)),
    frontDeleteTimeOff: (...args) => callOperation("delete-time-off", ...(args as FrontFullApiOperationArgs<"delete-time-off">)),
    frontGetTimeOff: (...args) => callOperation("get-time-off", ...(args as FrontFullApiOperationArgs<"get-time-off">)),
    frontUpdateTimeOff: (...args) => callOperation("update-time-off", ...(args as FrontFullApiOperationArgs<"update-time-off">)),
  };
}
