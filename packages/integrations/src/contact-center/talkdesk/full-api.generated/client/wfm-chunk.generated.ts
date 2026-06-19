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
export const TalkdeskFullApiWFMOperationKeys = [
  "uploadHistoryImport",
  "GetHistoryImport",
  "uploadForecastImport",
  "getForecastImportStatus"
] as const;
export type TalkdeskFullApiWFMOperationKey = typeof TalkdeskFullApiWFMOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiWFMOperationPathParamMap {
  "uploadHistoryImport": {};
  "GetHistoryImport": { "id": TalkdeskFullApiPathParamValue };
  "uploadForecastImport": {};
  "getForecastImportStatus": { "import_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiWFMOperationRequestMap {
  "uploadHistoryImport": TalkdeskFullApiOperationInput<"uploadHistoryImport">;
  "GetHistoryImport": TalkdeskFullApiOperationInput<"GetHistoryImport">;
  "uploadForecastImport": TalkdeskFullApiOperationInput<"uploadForecastImport">;
  "getForecastImportStatus": TalkdeskFullApiOperationInput<"getForecastImportStatus">;
}

export interface TalkdeskFullApiWFMGeneratedClient {
  UploadHistoryImport(...args: TalkdeskFullApiOperationArgs<"uploadHistoryImport">): Promise<TalkdeskFullApiOperationResponseMap["uploadHistoryImport"]>;
  GetHistoryImport(...args: TalkdeskFullApiOperationArgs<"GetHistoryImport">): Promise<TalkdeskFullApiOperationResponseMap["GetHistoryImport"]>;
  UploadForecastImport(...args: TalkdeskFullApiOperationArgs<"uploadForecastImport">): Promise<TalkdeskFullApiOperationResponseMap["uploadForecastImport"]>;
  GetForecastImportStatus(...args: TalkdeskFullApiOperationArgs<"getForecastImportStatus">): Promise<TalkdeskFullApiOperationResponseMap["getForecastImportStatus"]>;
}

export const TalkdeskFullApiWFMGeneratedFunctionNames = [
  "UploadHistoryImport",
  "GetHistoryImport",
  "UploadForecastImport",
  "GetForecastImportStatus"
] as const satisfies readonly (keyof TalkdeskFullApiWFMGeneratedClient)[];

export function createTalkdeskFullApiWFMGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiWFMGeneratedClient {
  return {
    UploadHistoryImport: (...args) => callOperation("uploadHistoryImport", ...(args as TalkdeskFullApiOperationArgs<"uploadHistoryImport">)),
    GetHistoryImport: (...args) => callOperation("GetHistoryImport", ...(args as TalkdeskFullApiOperationArgs<"GetHistoryImport">)),
    UploadForecastImport: (...args) => callOperation("uploadForecastImport", ...(args as TalkdeskFullApiOperationArgs<"uploadForecastImport">)),
    GetForecastImportStatus: (...args) => callOperation("getForecastImportStatus", ...(args as TalkdeskFullApiOperationArgs<"getForecastImportStatus">)),
  };
}
