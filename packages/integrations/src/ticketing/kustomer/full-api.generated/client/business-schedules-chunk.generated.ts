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
export const KustomerFullApiBusinessSchedulesOperationKeys = [
  "GetAllSchedules",
  "CreateSchedule",
  "DeleteSchedulebyID",
  "GetSchedulebyID",
  "UpdateSchedulebyID",
  "GetDefaultSchedule"
] as const;
export type KustomerFullApiBusinessSchedulesOperationKey = typeof KustomerFullApiBusinessSchedulesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiBusinessSchedulesOperationPathParamMap {
  "GetAllSchedules": {};
  "CreateSchedule": {};
  "DeleteSchedulebyID": { "id": KustomerFullApiPathParamValue };
  "GetSchedulebyID": { "id": KustomerFullApiPathParamValue };
  "UpdateSchedulebyID": { "id": KustomerFullApiPathParamValue };
  "GetDefaultSchedule": {};
}

export interface KustomerFullApiBusinessSchedulesOperationRequestMap {
  "GetAllSchedules": KustomerFullApiOperationInput<"GetAllSchedules">;
  "CreateSchedule": KustomerFullApiOperationInput<"CreateSchedule">;
  "DeleteSchedulebyID": KustomerFullApiOperationInput<"DeleteSchedulebyID">;
  "GetSchedulebyID": KustomerFullApiOperationInput<"GetSchedulebyID">;
  "UpdateSchedulebyID": KustomerFullApiOperationInput<"UpdateSchedulebyID">;
  "GetDefaultSchedule": KustomerFullApiOperationInput<"GetDefaultSchedule">;
}

export interface KustomerFullApiBusinessSchedulesGeneratedClient {
  kustomerGetAllSchedules(...args: KustomerFullApiOperationArgs<"GetAllSchedules">): Promise<KustomerFullApiOperationResponseMap["GetAllSchedules"]>;
  kustomerCreateSchedule(...args: KustomerFullApiOperationArgs<"CreateSchedule">): Promise<KustomerFullApiOperationResponseMap["CreateSchedule"]>;
  kustomerDeleteSchedulebyID(...args: KustomerFullApiOperationArgs<"DeleteSchedulebyID">): Promise<KustomerFullApiOperationResponseMap["DeleteSchedulebyID"]>;
  kustomerGetSchedulebyID(...args: KustomerFullApiOperationArgs<"GetSchedulebyID">): Promise<KustomerFullApiOperationResponseMap["GetSchedulebyID"]>;
  kustomerUpdateSchedulebyID(...args: KustomerFullApiOperationArgs<"UpdateSchedulebyID">): Promise<KustomerFullApiOperationResponseMap["UpdateSchedulebyID"]>;
  kustomerGetDefaultSchedule(...args: KustomerFullApiOperationArgs<"GetDefaultSchedule">): Promise<KustomerFullApiOperationResponseMap["GetDefaultSchedule"]>;
}

export const KustomerFullApiBusinessSchedulesGeneratedFunctionNames = [
  "kustomerGetAllSchedules",
  "kustomerCreateSchedule",
  "kustomerDeleteSchedulebyID",
  "kustomerGetSchedulebyID",
  "kustomerUpdateSchedulebyID",
  "kustomerGetDefaultSchedule"
] as const satisfies readonly (keyof KustomerFullApiBusinessSchedulesGeneratedClient)[];

export function createKustomerFullApiBusinessSchedulesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiBusinessSchedulesGeneratedClient {
  return {
    kustomerGetAllSchedules: (...args) => callOperation("GetAllSchedules", ...(args as KustomerFullApiOperationArgs<"GetAllSchedules">)),
    kustomerCreateSchedule: (...args) => callOperation("CreateSchedule", ...(args as KustomerFullApiOperationArgs<"CreateSchedule">)),
    kustomerDeleteSchedulebyID: (...args) => callOperation("DeleteSchedulebyID", ...(args as KustomerFullApiOperationArgs<"DeleteSchedulebyID">)),
    kustomerGetSchedulebyID: (...args) => callOperation("GetSchedulebyID", ...(args as KustomerFullApiOperationArgs<"GetSchedulebyID">)),
    kustomerUpdateSchedulebyID: (...args) => callOperation("UpdateSchedulebyID", ...(args as KustomerFullApiOperationArgs<"UpdateSchedulebyID">)),
    kustomerGetDefaultSchedule: (...args) => callOperation("GetDefaultSchedule", ...(args as KustomerFullApiOperationArgs<"GetDefaultSchedule">)),
  };
}
