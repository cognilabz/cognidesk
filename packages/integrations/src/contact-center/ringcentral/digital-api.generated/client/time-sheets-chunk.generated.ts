// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiTimeSheetsOperationKeys = [
  "GET /time_sheets",
  "POST /time_sheets",
  "DELETE /time_sheets/{timeSheetId}",
  "GET /time_sheets/{timeSheetId}",
  "PUT /time_sheets/{timeSheetId}"
] as const;
export type RingCentralDigitalApiTimeSheetsOperationKey = typeof RingCentralDigitalApiTimeSheetsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiTimeSheetsOperationPathParamMap {
  "GET /time_sheets": {};
  "POST /time_sheets": {};
  "DELETE /time_sheets/{timeSheetId}": { "timeSheetId": RingCentralDigitalApiPathParamValue };
  "GET /time_sheets/{timeSheetId}": { "timeSheetId": RingCentralDigitalApiPathParamValue };
  "PUT /time_sheets/{timeSheetId}": { "timeSheetId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiTimeSheetsOperationRequestMap {
  "GET /time_sheets": RingCentralDigitalApiOperationInput<"GET /time_sheets">;
  "POST /time_sheets": RingCentralDigitalApiOperationInput<"POST /time_sheets">;
  "DELETE /time_sheets/{timeSheetId}": RingCentralDigitalApiOperationInput<"DELETE /time_sheets/{timeSheetId}">;
  "GET /time_sheets/{timeSheetId}": RingCentralDigitalApiOperationInput<"GET /time_sheets/{timeSheetId}">;
  "PUT /time_sheets/{timeSheetId}": RingCentralDigitalApiOperationInput<"PUT /time_sheets/{timeSheetId}">;
}

export interface RingCentralDigitalApiTimeSheetsGeneratedClient {
  GetAllTimeSheets(...args: RingCentralDigitalApiOperationArgs<"GET /time_sheets">): Promise<RingCentralDigitalApiOperationResponseMap["GET /time_sheets"]>;
  CreateTimeSheet(...args: RingCentralDigitalApiOperationArgs<"POST /time_sheets">): Promise<RingCentralDigitalApiOperationResponseMap["POST /time_sheets"]>;
  DeleteTimeSheet(...args: RingCentralDigitalApiOperationArgs<"DELETE /time_sheets/{timeSheetId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /time_sheets/{timeSheetId}"]>;
  GetTimeSheet(...args: RingCentralDigitalApiOperationArgs<"GET /time_sheets/{timeSheetId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /time_sheets/{timeSheetId}"]>;
  UpdateTimeSheet(...args: RingCentralDigitalApiOperationArgs<"PUT /time_sheets/{timeSheetId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /time_sheets/{timeSheetId}"]>;
}

export const RingCentralDigitalApiTimeSheetsGeneratedFunctionNames = [
  "GetAllTimeSheets",
  "CreateTimeSheet",
  "DeleteTimeSheet",
  "GetTimeSheet",
  "UpdateTimeSheet"
] as const satisfies readonly (keyof RingCentralDigitalApiTimeSheetsGeneratedClient)[];

export function createRingCentralDigitalApiTimeSheetsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiTimeSheetsGeneratedClient {
  return {
    GetAllTimeSheets: (...args) => callOperation("GET /time_sheets", ...(args as RingCentralDigitalApiOperationArgs<"GET /time_sheets">)),
    CreateTimeSheet: (...args) => callOperation("POST /time_sheets", ...(args as RingCentralDigitalApiOperationArgs<"POST /time_sheets">)),
    DeleteTimeSheet: (...args) => callOperation("DELETE /time_sheets/{timeSheetId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /time_sheets/{timeSheetId}">)),
    GetTimeSheet: (...args) => callOperation("GET /time_sheets/{timeSheetId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /time_sheets/{timeSheetId}">)),
    UpdateTimeSheet: (...args) => callOperation("PUT /time_sheets/{timeSheetId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /time_sheets/{timeSheetId}">)),
  };
}
