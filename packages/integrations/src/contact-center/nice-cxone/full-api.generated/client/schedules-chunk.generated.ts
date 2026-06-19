// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiSchedulesOperationKeys = [
  "wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export"
] as const;
export type NiceCxoneFullApiSchedulesOperationKey = typeof NiceCxoneFullApiSchedulesOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiSchedulesOperationPathParamMap {
  "wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export": {};
}

export interface NiceCxoneFullApiSchedulesOperationRequestMap {
  "wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export": NiceCxoneFullApiOperationInput<"wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export">;
}

export interface NiceCxoneFullApiSchedulesGeneratedClient {
  WfmExportscheduleApiDocsExportScheduleAsList(...args: NiceCxoneFullApiOperationArgs<"wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export">): Promise<NiceCxoneFullApiOperationResponseMap["wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export"]>;
}

export const NiceCxoneFullApiSchedulesGeneratedFunctionNames = [
  "WfmExportscheduleApiDocsExportScheduleAsList"
] as const satisfies readonly (keyof NiceCxoneFullApiSchedulesGeneratedClient)[];

export function createNiceCxoneFullApiSchedulesGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiSchedulesGeneratedClient {
  return {
    WfmExportscheduleApiDocsExportScheduleAsList: (...args) => callOperation("wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export", ...(args as NiceCxoneFullApiOperationArgs<"wfm-exportschedule-api-docs:exportScheduleAsList:POST:/schedules/export">)),
  };
}
