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
export const TalkdeskFullApiRecordingsAPIOperationKeys = [
  "calls-call-id-recordings-get",
  "interactions-interaction-id-recordings-recording-id-delete",
  "recordings-id-get",
  "recordings-id-media-get"
] as const;
export type TalkdeskFullApiRecordingsAPIOperationKey = typeof TalkdeskFullApiRecordingsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiRecordingsAPIOperationPathParamMap {
  "calls-call-id-recordings-get": { "call_id": TalkdeskFullApiPathParamValue };
  "interactions-interaction-id-recordings-recording-id-delete": { "interaction_id": TalkdeskFullApiPathParamValue; "recording_id": TalkdeskFullApiPathParamValue };
  "recordings-id-get": { "id": TalkdeskFullApiPathParamValue };
  "recordings-id-media-get": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiRecordingsAPIOperationRequestMap {
  "calls-call-id-recordings-get": TalkdeskFullApiOperationInput<"calls-call-id-recordings-get">;
  "interactions-interaction-id-recordings-recording-id-delete": TalkdeskFullApiOperationInput<"interactions-interaction-id-recordings-recording-id-delete">;
  "recordings-id-get": TalkdeskFullApiOperationInput<"recordings-id-get">;
  "recordings-id-media-get": TalkdeskFullApiOperationInput<"recordings-id-media-get">;
}

export interface TalkdeskFullApiRecordingsAPIGeneratedClient {
  CallsCallIdRecordingsGet(...args: TalkdeskFullApiOperationArgs<"calls-call-id-recordings-get">): Promise<TalkdeskFullApiOperationResponseMap["calls-call-id-recordings-get"]>;
  InteractionsInteractionIdRecordingsRecordingIdDelete(...args: TalkdeskFullApiOperationArgs<"interactions-interaction-id-recordings-recording-id-delete">): Promise<TalkdeskFullApiOperationResponseMap["interactions-interaction-id-recordings-recording-id-delete"]>;
  RecordingsIdGet(...args: TalkdeskFullApiOperationArgs<"recordings-id-get">): Promise<TalkdeskFullApiOperationResponseMap["recordings-id-get"]>;
  RecordingsIdMediaGet(...args: TalkdeskFullApiOperationArgs<"recordings-id-media-get">): Promise<TalkdeskFullApiOperationResponseMap["recordings-id-media-get"]>;
}

export const TalkdeskFullApiRecordingsAPIGeneratedFunctionNames = [
  "CallsCallIdRecordingsGet",
  "InteractionsInteractionIdRecordingsRecordingIdDelete",
  "RecordingsIdGet",
  "RecordingsIdMediaGet"
] as const satisfies readonly (keyof TalkdeskFullApiRecordingsAPIGeneratedClient)[];

export function createTalkdeskFullApiRecordingsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiRecordingsAPIGeneratedClient {
  return {
    CallsCallIdRecordingsGet: (...args) => callOperation("calls-call-id-recordings-get", ...(args as TalkdeskFullApiOperationArgs<"calls-call-id-recordings-get">)),
    InteractionsInteractionIdRecordingsRecordingIdDelete: (...args) => callOperation("interactions-interaction-id-recordings-recording-id-delete", ...(args as TalkdeskFullApiOperationArgs<"interactions-interaction-id-recordings-recording-id-delete">)),
    RecordingsIdGet: (...args) => callOperation("recordings-id-get", ...(args as TalkdeskFullApiOperationArgs<"recordings-id-get">)),
    RecordingsIdMediaGet: (...args) => callOperation("recordings-id-media-get", ...(args as TalkdeskFullApiOperationArgs<"recordings-id-media-get">)),
  };
}
