// Generated endpoint chunk for TwilioVoiceFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioVoiceGeneratedOperationCaller,
  TwilioVoiceFullApiOperationArgs,
  TwilioVoiceFullApiOperationInput,
  TwilioVoiceFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioVoiceFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioVoiceFullApiInsightsV1OperationKeys = [
  "insights_v1:FetchAccountSettings",
  "insights_v1:FetchAnnotation",
  "insights_v1:FetchCall",
  "insights_v1:FetchConference",
  "insights_v1:FetchConferenceParticipant",
  "insights_v1:FetchSummary",
  "insights_v1:FetchVideoParticipantSummary",
  "insights_v1:FetchVideoRoomSummary",
  "insights_v1:ListCallSummaries",
  "insights_v1:ListConference",
  "insights_v1:ListConferenceParticipant",
  "insights_v1:ListEvent",
  "insights_v1:ListMetric",
  "insights_v1:ListVideoParticipantSummary",
  "insights_v1:ListVideoRoomSummary",
  "insights_v1:UpdateAccountSettings",
  "insights_v1:UpdateAnnotation"
] as const;
export type TwilioVoiceFullApiInsightsV1OperationKey = typeof TwilioVoiceFullApiInsightsV1OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioVoiceFullApiInsightsV1OperationPathParamMap {
  "insights_v1:FetchAccountSettings": {};
  "insights_v1:FetchAnnotation": { "CallSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:FetchCall": { "Sid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:FetchConference": { "ConferenceSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:FetchConferenceParticipant": { "ConferenceSid": TwilioVoiceFullApiPathParamValue; "ParticipantSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:FetchSummary": { "CallSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:FetchVideoParticipantSummary": { "RoomSid": TwilioVoiceFullApiPathParamValue; "ParticipantSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:FetchVideoRoomSummary": { "RoomSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:ListCallSummaries": {};
  "insights_v1:ListConference": {};
  "insights_v1:ListConferenceParticipant": { "ConferenceSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:ListEvent": { "CallSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:ListMetric": { "CallSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:ListVideoParticipantSummary": { "RoomSid": TwilioVoiceFullApiPathParamValue };
  "insights_v1:ListVideoRoomSummary": {};
  "insights_v1:UpdateAccountSettings": {};
  "insights_v1:UpdateAnnotation": { "CallSid": TwilioVoiceFullApiPathParamValue };
}

export interface TwilioVoiceFullApiInsightsV1OperationRequestMap {
  "insights_v1:FetchAccountSettings": TwilioVoiceFullApiOperationInput<"insights_v1:FetchAccountSettings">;
  "insights_v1:FetchAnnotation": TwilioVoiceFullApiOperationInput<"insights_v1:FetchAnnotation">;
  "insights_v1:FetchCall": TwilioVoiceFullApiOperationInput<"insights_v1:FetchCall">;
  "insights_v1:FetchConference": TwilioVoiceFullApiOperationInput<"insights_v1:FetchConference">;
  "insights_v1:FetchConferenceParticipant": TwilioVoiceFullApiOperationInput<"insights_v1:FetchConferenceParticipant">;
  "insights_v1:FetchSummary": TwilioVoiceFullApiOperationInput<"insights_v1:FetchSummary">;
  "insights_v1:FetchVideoParticipantSummary": TwilioVoiceFullApiOperationInput<"insights_v1:FetchVideoParticipantSummary">;
  "insights_v1:FetchVideoRoomSummary": TwilioVoiceFullApiOperationInput<"insights_v1:FetchVideoRoomSummary">;
  "insights_v1:ListCallSummaries": TwilioVoiceFullApiOperationInput<"insights_v1:ListCallSummaries">;
  "insights_v1:ListConference": TwilioVoiceFullApiOperationInput<"insights_v1:ListConference">;
  "insights_v1:ListConferenceParticipant": TwilioVoiceFullApiOperationInput<"insights_v1:ListConferenceParticipant">;
  "insights_v1:ListEvent": TwilioVoiceFullApiOperationInput<"insights_v1:ListEvent">;
  "insights_v1:ListMetric": TwilioVoiceFullApiOperationInput<"insights_v1:ListMetric">;
  "insights_v1:ListVideoParticipantSummary": TwilioVoiceFullApiOperationInput<"insights_v1:ListVideoParticipantSummary">;
  "insights_v1:ListVideoRoomSummary": TwilioVoiceFullApiOperationInput<"insights_v1:ListVideoRoomSummary">;
  "insights_v1:UpdateAccountSettings": TwilioVoiceFullApiOperationInput<"insights_v1:UpdateAccountSettings">;
  "insights_v1:UpdateAnnotation": TwilioVoiceFullApiOperationInput<"insights_v1:UpdateAnnotation">;
}

export interface TwilioVoiceFullApiInsightsV1GeneratedClient {
  InsightsV1FetchAccountSettings(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:FetchAccountSettings">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:FetchAccountSettings"]>;
  InsightsV1FetchAnnotation(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:FetchAnnotation">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:FetchAnnotation"]>;
  InsightsV1FetchCall(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:FetchCall">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:FetchCall"]>;
  InsightsV1FetchConference(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:FetchConference">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:FetchConference"]>;
  InsightsV1FetchConferenceParticipant(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:FetchConferenceParticipant">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:FetchConferenceParticipant"]>;
  InsightsV1FetchSummary(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:FetchSummary">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:FetchSummary"]>;
  InsightsV1FetchVideoParticipantSummary(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:FetchVideoParticipantSummary">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:FetchVideoParticipantSummary"]>;
  InsightsV1FetchVideoRoomSummary(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:FetchVideoRoomSummary">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:FetchVideoRoomSummary"]>;
  InsightsV1ListCallSummaries(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:ListCallSummaries">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:ListCallSummaries"]>;
  InsightsV1ListConference(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:ListConference">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:ListConference"]>;
  InsightsV1ListConferenceParticipant(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:ListConferenceParticipant">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:ListConferenceParticipant"]>;
  InsightsV1ListEvent(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:ListEvent">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:ListEvent"]>;
  InsightsV1ListMetric(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:ListMetric">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:ListMetric"]>;
  InsightsV1ListVideoParticipantSummary(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:ListVideoParticipantSummary">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:ListVideoParticipantSummary"]>;
  InsightsV1ListVideoRoomSummary(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:ListVideoRoomSummary">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:ListVideoRoomSummary"]>;
  InsightsV1UpdateAccountSettings(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:UpdateAccountSettings">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:UpdateAccountSettings"]>;
  InsightsV1UpdateAnnotation(...args: TwilioVoiceFullApiOperationArgs<"insights_v1:UpdateAnnotation">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v1:UpdateAnnotation"]>;
}

export const TwilioVoiceFullApiInsightsV1GeneratedFunctionNames = [
  "InsightsV1FetchAccountSettings",
  "InsightsV1FetchAnnotation",
  "InsightsV1FetchCall",
  "InsightsV1FetchConference",
  "InsightsV1FetchConferenceParticipant",
  "InsightsV1FetchSummary",
  "InsightsV1FetchVideoParticipantSummary",
  "InsightsV1FetchVideoRoomSummary",
  "InsightsV1ListCallSummaries",
  "InsightsV1ListConference",
  "InsightsV1ListConferenceParticipant",
  "InsightsV1ListEvent",
  "InsightsV1ListMetric",
  "InsightsV1ListVideoParticipantSummary",
  "InsightsV1ListVideoRoomSummary",
  "InsightsV1UpdateAccountSettings",
  "InsightsV1UpdateAnnotation"
] as const satisfies readonly (keyof TwilioVoiceFullApiInsightsV1GeneratedClient)[];

export function createTwilioVoiceFullApiInsightsV1GeneratedClient(
  callOperation: TwilioVoiceGeneratedOperationCaller,
): TwilioVoiceFullApiInsightsV1GeneratedClient {
  return {
    InsightsV1FetchAccountSettings: (...args) => callOperation("insights_v1:FetchAccountSettings", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:FetchAccountSettings">)),
    InsightsV1FetchAnnotation: (...args) => callOperation("insights_v1:FetchAnnotation", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:FetchAnnotation">)),
    InsightsV1FetchCall: (...args) => callOperation("insights_v1:FetchCall", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:FetchCall">)),
    InsightsV1FetchConference: (...args) => callOperation("insights_v1:FetchConference", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:FetchConference">)),
    InsightsV1FetchConferenceParticipant: (...args) => callOperation("insights_v1:FetchConferenceParticipant", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:FetchConferenceParticipant">)),
    InsightsV1FetchSummary: (...args) => callOperation("insights_v1:FetchSummary", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:FetchSummary">)),
    InsightsV1FetchVideoParticipantSummary: (...args) => callOperation("insights_v1:FetchVideoParticipantSummary", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:FetchVideoParticipantSummary">)),
    InsightsV1FetchVideoRoomSummary: (...args) => callOperation("insights_v1:FetchVideoRoomSummary", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:FetchVideoRoomSummary">)),
    InsightsV1ListCallSummaries: (...args) => callOperation("insights_v1:ListCallSummaries", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:ListCallSummaries">)),
    InsightsV1ListConference: (...args) => callOperation("insights_v1:ListConference", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:ListConference">)),
    InsightsV1ListConferenceParticipant: (...args) => callOperation("insights_v1:ListConferenceParticipant", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:ListConferenceParticipant">)),
    InsightsV1ListEvent: (...args) => callOperation("insights_v1:ListEvent", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:ListEvent">)),
    InsightsV1ListMetric: (...args) => callOperation("insights_v1:ListMetric", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:ListMetric">)),
    InsightsV1ListVideoParticipantSummary: (...args) => callOperation("insights_v1:ListVideoParticipantSummary", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:ListVideoParticipantSummary">)),
    InsightsV1ListVideoRoomSummary: (...args) => callOperation("insights_v1:ListVideoRoomSummary", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:ListVideoRoomSummary">)),
    InsightsV1UpdateAccountSettings: (...args) => callOperation("insights_v1:UpdateAccountSettings", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:UpdateAccountSettings">)),
    InsightsV1UpdateAnnotation: (...args) => callOperation("insights_v1:UpdateAnnotation", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v1:UpdateAnnotation">)),
  };
}
