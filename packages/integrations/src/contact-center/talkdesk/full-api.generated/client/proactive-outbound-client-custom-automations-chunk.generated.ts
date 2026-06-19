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
export const TalkdeskFullApiProactiveOutboundClientCustomAutomationsOperationKeys = [
  "v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post",
  "v1-record-list-record-list-id-record-record-id-schedule-callback-created-post",
  "v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post"
] as const;
export type TalkdeskFullApiProactiveOutboundClientCustomAutomationsOperationKey = typeof TalkdeskFullApiProactiveOutboundClientCustomAutomationsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiProactiveOutboundClientCustomAutomationsOperationPathParamMap {
  "v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post": { "record_list_id": TalkdeskFullApiPathParamValue; "record_id": TalkdeskFullApiPathParamValue; "disposition": TalkdeskFullApiPathParamValue };
  "v1-record-list-record-list-id-record-record-id-schedule-callback-created-post": { "record_list_id": TalkdeskFullApiPathParamValue; "record_id": TalkdeskFullApiPathParamValue };
  "v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post": { "record_list_id": TalkdeskFullApiPathParamValue; "record_id": TalkdeskFullApiPathParamValue; "disposition": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiProactiveOutboundClientCustomAutomationsOperationRequestMap {
  "v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post": TalkdeskFullApiOperationInput<"v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post">;
  "v1-record-list-record-list-id-record-record-id-schedule-callback-created-post": TalkdeskFullApiOperationInput<"v1-record-list-record-list-id-record-record-id-schedule-callback-created-post">;
  "v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post": TalkdeskFullApiOperationInput<"v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post">;
}

export interface TalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedClient {
  V1RecordListRecordListIdRecordRecordIdCallAttemptDispositionDispositionPost(...args: TalkdeskFullApiOperationArgs<"v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post">): Promise<TalkdeskFullApiOperationResponseMap["v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post"]>;
  V1RecordListRecordListIdRecordRecordIdScheduleCallbackCreatedPost(...args: TalkdeskFullApiOperationArgs<"v1-record-list-record-list-id-record-record-id-schedule-callback-created-post">): Promise<TalkdeskFullApiOperationResponseMap["v1-record-list-record-list-id-record-record-id-schedule-callback-created-post"]>;
  V1RecordListRecordListIdRecordRecordIdCallbackAttemptDispositionDispositionPost(...args: TalkdeskFullApiOperationArgs<"v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post">): Promise<TalkdeskFullApiOperationResponseMap["v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post"]>;
}

export const TalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedFunctionNames = [
  "V1RecordListRecordListIdRecordRecordIdCallAttemptDispositionDispositionPost",
  "V1RecordListRecordListIdRecordRecordIdScheduleCallbackCreatedPost",
  "V1RecordListRecordListIdRecordRecordIdCallbackAttemptDispositionDispositionPost"
] as const satisfies readonly (keyof TalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedClient)[];

export function createTalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiProactiveOutboundClientCustomAutomationsGeneratedClient {
  return {
    V1RecordListRecordListIdRecordRecordIdCallAttemptDispositionDispositionPost: (...args) => callOperation("v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post", ...(args as TalkdeskFullApiOperationArgs<"v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post">)),
    V1RecordListRecordListIdRecordRecordIdScheduleCallbackCreatedPost: (...args) => callOperation("v1-record-list-record-list-id-record-record-id-schedule-callback-created-post", ...(args as TalkdeskFullApiOperationArgs<"v1-record-list-record-list-id-record-record-id-schedule-callback-created-post">)),
    V1RecordListRecordListIdRecordRecordIdCallbackAttemptDispositionDispositionPost: (...args) => callOperation("v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post", ...(args as TalkdeskFullApiOperationArgs<"v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post">)),
  };
}
