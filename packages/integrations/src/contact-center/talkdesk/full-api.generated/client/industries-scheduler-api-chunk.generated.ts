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
export const TalkdeskFullApiINDUSTRIESSCHEDULERAPIOperationKeys = [
  "industries-scheduler-teams-get",
  "industries-scheduler-availabilities-post",
  "industries-scheduler-appointment-get",
  "industries-scheduler-appointment-post",
  "industries-scheduler-appointment-put",
  "industries-scheduler-appointment-cancel-post"
] as const;
export type TalkdeskFullApiINDUSTRIESSCHEDULERAPIOperationKey = typeof TalkdeskFullApiINDUSTRIESSCHEDULERAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiINDUSTRIESSCHEDULERAPIOperationPathParamMap {
  "industries-scheduler-teams-get": {};
  "industries-scheduler-availabilities-post": {};
  "industries-scheduler-appointment-get": {};
  "industries-scheduler-appointment-post": {};
  "industries-scheduler-appointment-put": {};
  "industries-scheduler-appointment-cancel-post": {};
}

export interface TalkdeskFullApiINDUSTRIESSCHEDULERAPIOperationRequestMap {
  "industries-scheduler-teams-get": TalkdeskFullApiOperationInput<"industries-scheduler-teams-get">;
  "industries-scheduler-availabilities-post": TalkdeskFullApiOperationInput<"industries-scheduler-availabilities-post">;
  "industries-scheduler-appointment-get": TalkdeskFullApiOperationInput<"industries-scheduler-appointment-get">;
  "industries-scheduler-appointment-post": TalkdeskFullApiOperationInput<"industries-scheduler-appointment-post">;
  "industries-scheduler-appointment-put": TalkdeskFullApiOperationInput<"industries-scheduler-appointment-put">;
  "industries-scheduler-appointment-cancel-post": TalkdeskFullApiOperationInput<"industries-scheduler-appointment-cancel-post">;
}

export interface TalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedClient {
  IndustriesSchedulerTeamsGet(...args: TalkdeskFullApiOperationArgs<"industries-scheduler-teams-get">): Promise<TalkdeskFullApiOperationResponseMap["industries-scheduler-teams-get"]>;
  IndustriesSchedulerAvailabilitiesPost(...args: TalkdeskFullApiOperationArgs<"industries-scheduler-availabilities-post">): Promise<TalkdeskFullApiOperationResponseMap["industries-scheduler-availabilities-post"]>;
  IndustriesSchedulerAppointmentGet(...args: TalkdeskFullApiOperationArgs<"industries-scheduler-appointment-get">): Promise<TalkdeskFullApiOperationResponseMap["industries-scheduler-appointment-get"]>;
  IndustriesSchedulerAppointmentPost(...args: TalkdeskFullApiOperationArgs<"industries-scheduler-appointment-post">): Promise<TalkdeskFullApiOperationResponseMap["industries-scheduler-appointment-post"]>;
  IndustriesSchedulerAppointmentPut(...args: TalkdeskFullApiOperationArgs<"industries-scheduler-appointment-put">): Promise<TalkdeskFullApiOperationResponseMap["industries-scheduler-appointment-put"]>;
  IndustriesSchedulerAppointmentCancelPost(...args: TalkdeskFullApiOperationArgs<"industries-scheduler-appointment-cancel-post">): Promise<TalkdeskFullApiOperationResponseMap["industries-scheduler-appointment-cancel-post"]>;
}

export const TalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedFunctionNames = [
  "IndustriesSchedulerTeamsGet",
  "IndustriesSchedulerAvailabilitiesPost",
  "IndustriesSchedulerAppointmentGet",
  "IndustriesSchedulerAppointmentPost",
  "IndustriesSchedulerAppointmentPut",
  "IndustriesSchedulerAppointmentCancelPost"
] as const satisfies readonly (keyof TalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedClient)[];

export function createTalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiINDUSTRIESSCHEDULERAPIGeneratedClient {
  return {
    IndustriesSchedulerTeamsGet: (...args) => callOperation("industries-scheduler-teams-get", ...(args as TalkdeskFullApiOperationArgs<"industries-scheduler-teams-get">)),
    IndustriesSchedulerAvailabilitiesPost: (...args) => callOperation("industries-scheduler-availabilities-post", ...(args as TalkdeskFullApiOperationArgs<"industries-scheduler-availabilities-post">)),
    IndustriesSchedulerAppointmentGet: (...args) => callOperation("industries-scheduler-appointment-get", ...(args as TalkdeskFullApiOperationArgs<"industries-scheduler-appointment-get">)),
    IndustriesSchedulerAppointmentPost: (...args) => callOperation("industries-scheduler-appointment-post", ...(args as TalkdeskFullApiOperationArgs<"industries-scheduler-appointment-post">)),
    IndustriesSchedulerAppointmentPut: (...args) => callOperation("industries-scheduler-appointment-put", ...(args as TalkdeskFullApiOperationArgs<"industries-scheduler-appointment-put">)),
    IndustriesSchedulerAppointmentCancelPost: (...args) => callOperation("industries-scheduler-appointment-cancel-post", ...(args as TalkdeskFullApiOperationArgs<"industries-scheduler-appointment-cancel-post">)),
  };
}
