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
export const NiceCxoneFullApiRecordingControlOperationKeys = [
  "recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand",
  "recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand",
  "recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record"
] as const;
export type NiceCxoneFullApiRecordingControlOperationKey = typeof NiceCxoneFullApiRecordingControlOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiRecordingControlOperationPathParamMap {
  "recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand": {};
  "recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand": {};
  "recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record": {};
}

export interface NiceCxoneFullApiRecordingControlOperationRequestMap {
  "recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand": NiceCxoneFullApiOperationInput<"recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand">;
  "recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand": NiceCxoneFullApiOperationInput<"recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand">;
  "recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record": NiceCxoneFullApiOperationInput<"recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record">;
}

export interface NiceCxoneFullApiRecordingControlGeneratedClient {
  RecordingRecordingondemandApiDocsStopRecord(...args: NiceCxoneFullApiOperationArgs<"recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand">): Promise<NiceCxoneFullApiOperationResponseMap["recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand"]>;
  RecordingRecordingondemandApiDocsReleaseRecording(...args: NiceCxoneFullApiOperationArgs<"recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand">): Promise<NiceCxoneFullApiOperationResponseMap["recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand"]>;
  RecordingRecordingondemandApiDocsDoNotRecord(...args: NiceCxoneFullApiOperationArgs<"recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record">): Promise<NiceCxoneFullApiOperationResponseMap["recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record"]>;
}

export const NiceCxoneFullApiRecordingControlGeneratedFunctionNames = [
  "RecordingRecordingondemandApiDocsStopRecord",
  "RecordingRecordingondemandApiDocsReleaseRecording",
  "RecordingRecordingondemandApiDocsDoNotRecord"
] as const satisfies readonly (keyof NiceCxoneFullApiRecordingControlGeneratedClient)[];

export function createNiceCxoneFullApiRecordingControlGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiRecordingControlGeneratedClient {
  return {
    RecordingRecordingondemandApiDocsStopRecord: (...args) => callOperation("recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand", ...(args as NiceCxoneFullApiOperationArgs<"recording-recordingondemand-api-docs:StopRecord:POST:/interaction-recording-management-service/v1/interactions/start-recording-on-demand">)),
    RecordingRecordingondemandApiDocsReleaseRecording: (...args) => callOperation("recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand", ...(args as NiceCxoneFullApiOperationArgs<"recording-recordingondemand-api-docs:ReleaseRecording:POST:/interaction-recording-management-service/v1/interactions/stop-recording-on-demand">)),
    RecordingRecordingondemandApiDocsDoNotRecord: (...args) => callOperation("recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record", ...(args as NiceCxoneFullApiOperationArgs<"recording-recordingondemand-api-docs:DoNotRecord:POST:/interaction-recording-management-service/v1/interactions/do-not-record">)),
  };
}
