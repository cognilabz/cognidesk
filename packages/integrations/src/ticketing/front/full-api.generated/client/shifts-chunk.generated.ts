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
export const FrontFullApiShiftsOperationKeys = [
  "list-shifts",
  "create-shift",
  "get-shift",
  "update-shift",
  "remove-teammates-from-shift",
  "list-shifts-teammates",
  "add-teammates-to-shift",
  "list-teammate-shifts",
  "list-team-shifts",
  "create-team-shift"
] as const;
export type FrontFullApiShiftsOperationKey = typeof FrontFullApiShiftsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiShiftsOperationPathParamMap {
  "list-shifts": {};
  "create-shift": {};
  "get-shift": { "shift_id": FrontFullApiPathParamValue };
  "update-shift": { "shift_id": FrontFullApiPathParamValue };
  "remove-teammates-from-shift": { "shift_id": FrontFullApiPathParamValue };
  "list-shifts-teammates": { "shift_id": FrontFullApiPathParamValue };
  "add-teammates-to-shift": { "shift_id": FrontFullApiPathParamValue };
  "list-teammate-shifts": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-shifts": { "team_id": FrontFullApiPathParamValue };
  "create-team-shift": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiShiftsOperationRequestMap {
  "list-shifts": FrontFullApiOperationInput<"list-shifts">;
  "create-shift": FrontFullApiOperationInput<"create-shift">;
  "get-shift": FrontFullApiOperationInput<"get-shift">;
  "update-shift": FrontFullApiOperationInput<"update-shift">;
  "remove-teammates-from-shift": FrontFullApiOperationInput<"remove-teammates-from-shift">;
  "list-shifts-teammates": FrontFullApiOperationInput<"list-shifts-teammates">;
  "add-teammates-to-shift": FrontFullApiOperationInput<"add-teammates-to-shift">;
  "list-teammate-shifts": FrontFullApiOperationInput<"list-teammate-shifts">;
  "list-team-shifts": FrontFullApiOperationInput<"list-team-shifts">;
  "create-team-shift": FrontFullApiOperationInput<"create-team-shift">;
}

export interface FrontFullApiShiftsGeneratedClient {
  frontListShifts(...args: FrontFullApiOperationArgs<"list-shifts">): Promise<FrontFullApiOperationResponseMap["list-shifts"]>;
  frontCreateShift(...args: FrontFullApiOperationArgs<"create-shift">): Promise<FrontFullApiOperationResponseMap["create-shift"]>;
  frontGetShift(...args: FrontFullApiOperationArgs<"get-shift">): Promise<FrontFullApiOperationResponseMap["get-shift"]>;
  frontUpdateShift(...args: FrontFullApiOperationArgs<"update-shift">): Promise<FrontFullApiOperationResponseMap["update-shift"]>;
  frontRemoveTeammatesFromShift(...args: FrontFullApiOperationArgs<"remove-teammates-from-shift">): Promise<FrontFullApiOperationResponseMap["remove-teammates-from-shift"]>;
  frontListShiftsTeammates(...args: FrontFullApiOperationArgs<"list-shifts-teammates">): Promise<FrontFullApiOperationResponseMap["list-shifts-teammates"]>;
  frontAddTeammatesToShift(...args: FrontFullApiOperationArgs<"add-teammates-to-shift">): Promise<FrontFullApiOperationResponseMap["add-teammates-to-shift"]>;
  frontListTeammateShifts(...args: FrontFullApiOperationArgs<"list-teammate-shifts">): Promise<FrontFullApiOperationResponseMap["list-teammate-shifts"]>;
  frontListTeamShifts(...args: FrontFullApiOperationArgs<"list-team-shifts">): Promise<FrontFullApiOperationResponseMap["list-team-shifts"]>;
  frontCreateTeamShift(...args: FrontFullApiOperationArgs<"create-team-shift">): Promise<FrontFullApiOperationResponseMap["create-team-shift"]>;
}

export const FrontFullApiShiftsGeneratedFunctionNames = [
  "frontListShifts",
  "frontCreateShift",
  "frontGetShift",
  "frontUpdateShift",
  "frontRemoveTeammatesFromShift",
  "frontListShiftsTeammates",
  "frontAddTeammatesToShift",
  "frontListTeammateShifts",
  "frontListTeamShifts",
  "frontCreateTeamShift"
] as const satisfies readonly (keyof FrontFullApiShiftsGeneratedClient)[];

export function createFrontFullApiShiftsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiShiftsGeneratedClient {
  return {
    frontListShifts: (...args) => callOperation("list-shifts", ...(args as FrontFullApiOperationArgs<"list-shifts">)),
    frontCreateShift: (...args) => callOperation("create-shift", ...(args as FrontFullApiOperationArgs<"create-shift">)),
    frontGetShift: (...args) => callOperation("get-shift", ...(args as FrontFullApiOperationArgs<"get-shift">)),
    frontUpdateShift: (...args) => callOperation("update-shift", ...(args as FrontFullApiOperationArgs<"update-shift">)),
    frontRemoveTeammatesFromShift: (...args) => callOperation("remove-teammates-from-shift", ...(args as FrontFullApiOperationArgs<"remove-teammates-from-shift">)),
    frontListShiftsTeammates: (...args) => callOperation("list-shifts-teammates", ...(args as FrontFullApiOperationArgs<"list-shifts-teammates">)),
    frontAddTeammatesToShift: (...args) => callOperation("add-teammates-to-shift", ...(args as FrontFullApiOperationArgs<"add-teammates-to-shift">)),
    frontListTeammateShifts: (...args) => callOperation("list-teammate-shifts", ...(args as FrontFullApiOperationArgs<"list-teammate-shifts">)),
    frontListTeamShifts: (...args) => callOperation("list-team-shifts", ...(args as FrontFullApiOperationArgs<"list-team-shifts">)),
    frontCreateTeamShift: (...args) => callOperation("create-team-shift", ...(args as FrontFullApiOperationArgs<"create-team-shift">)),
  };
}
