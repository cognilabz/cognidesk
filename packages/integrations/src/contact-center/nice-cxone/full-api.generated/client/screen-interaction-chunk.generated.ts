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
export const NiceCxoneFullApiScreenInteractionOperationKeys = [
  "recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording",
  "recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording"
] as const;
export type NiceCxoneFullApiScreenInteractionOperationKey = typeof NiceCxoneFullApiScreenInteractionOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiScreenInteractionOperationPathParamMap {
  "recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording": {};
  "recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording": {};
}

export interface NiceCxoneFullApiScreenInteractionOperationRequestMap {
  "recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording": NiceCxoneFullApiOperationInput<"recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording">;
  "recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording": NiceCxoneFullApiOperationInput<"recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording">;
}

export interface NiceCxoneFullApiScreenInteractionGeneratedClient {
  RecordingScreeninteractionsApiDocsStartScreenrecord(...args: NiceCxoneFullApiOperationArgs<"recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording">): Promise<NiceCxoneFullApiOperationResponseMap["recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording"]>;
  RecordingScreeninteractionsApiDocsStopScreenRecording(...args: NiceCxoneFullApiOperationArgs<"recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording">): Promise<NiceCxoneFullApiOperationResponseMap["recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording"]>;
}

export const NiceCxoneFullApiScreenInteractionGeneratedFunctionNames = [
  "RecordingScreeninteractionsApiDocsStartScreenrecord",
  "RecordingScreeninteractionsApiDocsStopScreenRecording"
] as const satisfies readonly (keyof NiceCxoneFullApiScreenInteractionGeneratedClient)[];

export function createNiceCxoneFullApiScreenInteractionGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiScreenInteractionGeneratedClient {
  return {
    RecordingScreeninteractionsApiDocsStartScreenrecord: (...args) => callOperation("recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording", ...(args as NiceCxoneFullApiOperationArgs<"recording-screeninteractions-api-docs:StartScreenrecord:POST:/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording">)),
    RecordingScreeninteractionsApiDocsStopScreenRecording: (...args) => callOperation("recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording", ...(args as NiceCxoneFullApiOperationArgs<"recording-screeninteractions-api-docs:StopScreenRecording:POST:/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording">)),
  };
}
