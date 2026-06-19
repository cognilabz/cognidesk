// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiAppointmentSchedulingServiceOperationKeys = [
  "getFlatAppointmentScheduling",
  "getPhysiciansByPastEncounters"
] as const;
export type TalkdeskFullApiAppointmentSchedulingServiceOperationKey = typeof TalkdeskFullApiAppointmentSchedulingServiceOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiAppointmentSchedulingServiceOperationPathParamMap {
  "getFlatAppointmentScheduling": {};
  "getPhysiciansByPastEncounters": {};
}

export interface TalkdeskFullApiAppointmentSchedulingServiceOperationRequestMap {
  "getFlatAppointmentScheduling": TalkdeskFullApiOperationInput<"getFlatAppointmentScheduling">;
  "getPhysiciansByPastEncounters": TalkdeskFullApiOperationInput<"getPhysiciansByPastEncounters">;
}

export interface TalkdeskFullApiAppointmentSchedulingServiceGeneratedClient {
  GetFlatAppointmentScheduling(...args: TalkdeskFullApiOperationArgs<"getFlatAppointmentScheduling">): Promise<TalkdeskFullApiOperationResponseMap["getFlatAppointmentScheduling"]>;
  GetPhysiciansByPastEncounters(...args: TalkdeskFullApiOperationArgs<"getPhysiciansByPastEncounters">): Promise<TalkdeskFullApiOperationResponseMap["getPhysiciansByPastEncounters"]>;
}

export const TalkdeskFullApiAppointmentSchedulingServiceGeneratedFunctionNames = [
  "GetFlatAppointmentScheduling",
  "GetPhysiciansByPastEncounters"
] as const satisfies readonly (keyof TalkdeskFullApiAppointmentSchedulingServiceGeneratedClient)[];

export function createTalkdeskFullApiAppointmentSchedulingServiceGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiAppointmentSchedulingServiceGeneratedClient {
  return {
    GetFlatAppointmentScheduling: (...args) => callOperation("getFlatAppointmentScheduling", ...(args as TalkdeskFullApiOperationArgs<"getFlatAppointmentScheduling">)),
    GetPhysiciansByPastEncounters: (...args) => callOperation("getPhysiciansByPastEncounters", ...(args as TalkdeskFullApiOperationArgs<"getPhysiciansByPastEncounters">)),
  };
}
