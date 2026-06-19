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
export const NiceCxoneFullApiRecordingStatusOperationKeys = [
  "recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status"
] as const;
export type NiceCxoneFullApiRecordingStatusOperationKey = typeof NiceCxoneFullApiRecordingStatusOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiRecordingStatusOperationPathParamMap {
  "recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status": {};
}

export interface NiceCxoneFullApiRecordingStatusOperationRequestMap {
  "recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status": NiceCxoneFullApiOperationInput<"recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status">;
}

export interface NiceCxoneFullApiRecordingStatusGeneratedClient {
  RecordingRecordingstatusApiDocsGetRecordingStatus(...args: NiceCxoneFullApiOperationArgs<"recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status">): Promise<NiceCxoneFullApiOperationResponseMap["recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status"]>;
}

export const NiceCxoneFullApiRecordingStatusGeneratedFunctionNames = [
  "RecordingRecordingstatusApiDocsGetRecordingStatus"
] as const satisfies readonly (keyof NiceCxoneFullApiRecordingStatusGeneratedClient)[];

export function createNiceCxoneFullApiRecordingStatusGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiRecordingStatusGeneratedClient {
  return {
    RecordingRecordingstatusApiDocsGetRecordingStatus: (...args) => callOperation("recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status", ...(args as NiceCxoneFullApiOperationArgs<"recording-recordingstatus-api-docs:GetRecordingStatus:GET:/interaction-recording-management-service/v1/interactions/get-recording-status">)),
  };
}
