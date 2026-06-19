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
export const TwilioVoiceFullApiApiV201001OperationKeys = [
  "api_v2010:CreateApplication",
  "api_v2010:CreateCall",
  "api_v2010:CreateCallRecording",
  "api_v2010:CreateParticipant",
  "api_v2010:CreatePayments",
  "api_v2010:CreateQueue",
  "api_v2010:CreateRealtimeTranscription",
  "api_v2010:CreateSipCredential",
  "api_v2010:CreateSipCredentialList",
  "api_v2010:CreateSipCredentialListMapping",
  "api_v2010:CreateSipDomain",
  "api_v2010:CreateSipIpAccessControlList",
  "api_v2010:CreateSipIpAccessControlListMapping",
  "api_v2010:CreateSipIpAddress",
  "api_v2010:CreateSiprec",
  "api_v2010:CreateStream",
  "api_v2010:CreateUserDefinedMessage",
  "api_v2010:CreateUserDefinedMessageSubscription",
  "api_v2010:DeleteApplication",
  "api_v2010:DeleteCall",
  "api_v2010:DeleteCallRecording",
  "api_v2010:DeleteConferenceRecording",
  "api_v2010:DeleteOutgoingCallerId",
  "api_v2010:DeleteParticipant",
  "api_v2010:DeleteQueue",
  "api_v2010:DeleteRecording",
  "api_v2010:DeleteRecordingTranscription",
  "api_v2010:DeleteSipCredential",
  "api_v2010:DeleteSipCredentialList",
  "api_v2010:DeleteSipCredentialListMapping",
  "api_v2010:DeleteSipDomain",
  "api_v2010:DeleteSipIpAccessControlList",
  "api_v2010:DeleteSipIpAccessControlListMapping",
  "api_v2010:DeleteSipIpAddress",
  "api_v2010:DeleteTranscription",
  "api_v2010:DeleteUserDefinedMessageSubscription",
  "api_v2010:FetchApplication",
  "api_v2010:FetchCall",
  "api_v2010:FetchCallNotification",
  "api_v2010:FetchCallRecording",
  "api_v2010:FetchConference",
  "api_v2010:FetchConferenceRecording",
  "api_v2010:FetchMember",
  "api_v2010:FetchOutgoingCallerId",
  "api_v2010:FetchParticipant",
  "api_v2010:FetchQueue",
  "api_v2010:FetchRecording",
  "api_v2010:FetchRecordingTranscription",
  "api_v2010:FetchSipCredential",
  "api_v2010:FetchSipCredentialList",
  "api_v2010:FetchSipCredentialListMapping",
  "api_v2010:FetchSipDomain",
  "api_v2010:FetchSipIpAccessControlList",
  "api_v2010:FetchSipIpAccessControlListMapping",
  "api_v2010:FetchSipIpAddress",
  "api_v2010:FetchTranscription",
  "api_v2010:ListApplication",
  "api_v2010:ListCall",
  "api_v2010:ListCallNotification",
  "api_v2010:ListCallRecording",
  "api_v2010:ListConference",
  "api_v2010:ListConferenceRecording",
  "api_v2010:ListMember",
  "api_v2010:ListOutgoingCallerId",
  "api_v2010:ListParticipant",
  "api_v2010:ListQueue",
  "api_v2010:ListRecording",
  "api_v2010:ListRecordingTranscription",
  "api_v2010:ListSipCredential",
  "api_v2010:ListSipCredentialList",
  "api_v2010:ListSipCredentialListMapping",
  "api_v2010:ListSipDomain",
  "api_v2010:ListSipIpAccessControlList",
  "api_v2010:ListSipIpAccessControlListMapping",
  "api_v2010:ListSipIpAddress",
  "api_v2010:ListTranscription",
  "api_v2010:UpdateApplication",
  "api_v2010:UpdateCall",
  "api_v2010:UpdateCallRecording",
  "api_v2010:UpdateConference"
] as const;
export type TwilioVoiceFullApiApiV201001OperationKey = typeof TwilioVoiceFullApiApiV201001OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioVoiceFullApiApiV201001OperationPathParamMap {
  "api_v2010:CreateApplication": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateCall": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateCallRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateParticipant": { "AccountSid": TwilioVoiceFullApiPathParamValue; "ConferenceSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreatePayments": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateQueue": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateRealtimeTranscription": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateSipCredential": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CredentialListSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateSipCredentialList": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateSipCredentialListMapping": { "AccountSid": TwilioVoiceFullApiPathParamValue; "DomainSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateSipDomain": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateSipIpAccessControlList": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateSipIpAccessControlListMapping": { "AccountSid": TwilioVoiceFullApiPathParamValue; "DomainSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateSipIpAddress": { "AccountSid": TwilioVoiceFullApiPathParamValue; "IpAccessControlListSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateSiprec": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateStream": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateUserDefinedMessage": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:CreateUserDefinedMessageSubscription": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteApplication": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteCall": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteCallRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteConferenceRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "ConferenceSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteOutgoingCallerId": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteParticipant": { "AccountSid": TwilioVoiceFullApiPathParamValue; "ConferenceSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteQueue": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteRecordingTranscription": { "AccountSid": TwilioVoiceFullApiPathParamValue; "RecordingSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteSipCredential": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CredentialListSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteSipCredentialList": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteSipCredentialListMapping": { "AccountSid": TwilioVoiceFullApiPathParamValue; "DomainSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteSipDomain": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteSipIpAccessControlList": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteSipIpAccessControlListMapping": { "AccountSid": TwilioVoiceFullApiPathParamValue; "DomainSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteSipIpAddress": { "AccountSid": TwilioVoiceFullApiPathParamValue; "IpAccessControlListSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteTranscription": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:DeleteUserDefinedMessageSubscription": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchApplication": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchCall": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchCallNotification": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchCallRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchConference": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchConferenceRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "ConferenceSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchMember": { "AccountSid": TwilioVoiceFullApiPathParamValue; "QueueSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchOutgoingCallerId": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchParticipant": { "AccountSid": TwilioVoiceFullApiPathParamValue; "ConferenceSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchQueue": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchRecordingTranscription": { "AccountSid": TwilioVoiceFullApiPathParamValue; "RecordingSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchSipCredential": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CredentialListSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchSipCredentialList": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchSipCredentialListMapping": { "AccountSid": TwilioVoiceFullApiPathParamValue; "DomainSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchSipDomain": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchSipIpAccessControlList": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchSipIpAccessControlListMapping": { "AccountSid": TwilioVoiceFullApiPathParamValue; "DomainSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchSipIpAddress": { "AccountSid": TwilioVoiceFullApiPathParamValue; "IpAccessControlListSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:FetchTranscription": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListApplication": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListCall": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListCallNotification": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListCallRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListConference": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListConferenceRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "ConferenceSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListMember": { "AccountSid": TwilioVoiceFullApiPathParamValue; "QueueSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListOutgoingCallerId": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListParticipant": { "AccountSid": TwilioVoiceFullApiPathParamValue; "ConferenceSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListQueue": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListRecordingTranscription": { "AccountSid": TwilioVoiceFullApiPathParamValue; "RecordingSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListSipCredential": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CredentialListSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListSipCredentialList": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListSipCredentialListMapping": { "AccountSid": TwilioVoiceFullApiPathParamValue; "DomainSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListSipDomain": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListSipIpAccessControlList": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListSipIpAccessControlListMapping": { "AccountSid": TwilioVoiceFullApiPathParamValue; "DomainSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListSipIpAddress": { "AccountSid": TwilioVoiceFullApiPathParamValue; "IpAccessControlListSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:ListTranscription": { "AccountSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateApplication": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateCall": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateCallRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateConference": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
}

export interface TwilioVoiceFullApiApiV201001OperationRequestMap {
  "api_v2010:CreateApplication": TwilioVoiceFullApiOperationInput<"api_v2010:CreateApplication">;
  "api_v2010:CreateCall": TwilioVoiceFullApiOperationInput<"api_v2010:CreateCall">;
  "api_v2010:CreateCallRecording": TwilioVoiceFullApiOperationInput<"api_v2010:CreateCallRecording">;
  "api_v2010:CreateParticipant": TwilioVoiceFullApiOperationInput<"api_v2010:CreateParticipant">;
  "api_v2010:CreatePayments": TwilioVoiceFullApiOperationInput<"api_v2010:CreatePayments">;
  "api_v2010:CreateQueue": TwilioVoiceFullApiOperationInput<"api_v2010:CreateQueue">;
  "api_v2010:CreateRealtimeTranscription": TwilioVoiceFullApiOperationInput<"api_v2010:CreateRealtimeTranscription">;
  "api_v2010:CreateSipCredential": TwilioVoiceFullApiOperationInput<"api_v2010:CreateSipCredential">;
  "api_v2010:CreateSipCredentialList": TwilioVoiceFullApiOperationInput<"api_v2010:CreateSipCredentialList">;
  "api_v2010:CreateSipCredentialListMapping": TwilioVoiceFullApiOperationInput<"api_v2010:CreateSipCredentialListMapping">;
  "api_v2010:CreateSipDomain": TwilioVoiceFullApiOperationInput<"api_v2010:CreateSipDomain">;
  "api_v2010:CreateSipIpAccessControlList": TwilioVoiceFullApiOperationInput<"api_v2010:CreateSipIpAccessControlList">;
  "api_v2010:CreateSipIpAccessControlListMapping": TwilioVoiceFullApiOperationInput<"api_v2010:CreateSipIpAccessControlListMapping">;
  "api_v2010:CreateSipIpAddress": TwilioVoiceFullApiOperationInput<"api_v2010:CreateSipIpAddress">;
  "api_v2010:CreateSiprec": TwilioVoiceFullApiOperationInput<"api_v2010:CreateSiprec">;
  "api_v2010:CreateStream": TwilioVoiceFullApiOperationInput<"api_v2010:CreateStream">;
  "api_v2010:CreateUserDefinedMessage": TwilioVoiceFullApiOperationInput<"api_v2010:CreateUserDefinedMessage">;
  "api_v2010:CreateUserDefinedMessageSubscription": TwilioVoiceFullApiOperationInput<"api_v2010:CreateUserDefinedMessageSubscription">;
  "api_v2010:DeleteApplication": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteApplication">;
  "api_v2010:DeleteCall": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteCall">;
  "api_v2010:DeleteCallRecording": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteCallRecording">;
  "api_v2010:DeleteConferenceRecording": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteConferenceRecording">;
  "api_v2010:DeleteOutgoingCallerId": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteOutgoingCallerId">;
  "api_v2010:DeleteParticipant": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteParticipant">;
  "api_v2010:DeleteQueue": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteQueue">;
  "api_v2010:DeleteRecording": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteRecording">;
  "api_v2010:DeleteRecordingTranscription": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteRecordingTranscription">;
  "api_v2010:DeleteSipCredential": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteSipCredential">;
  "api_v2010:DeleteSipCredentialList": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteSipCredentialList">;
  "api_v2010:DeleteSipCredentialListMapping": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteSipCredentialListMapping">;
  "api_v2010:DeleteSipDomain": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteSipDomain">;
  "api_v2010:DeleteSipIpAccessControlList": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteSipIpAccessControlList">;
  "api_v2010:DeleteSipIpAccessControlListMapping": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteSipIpAccessControlListMapping">;
  "api_v2010:DeleteSipIpAddress": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteSipIpAddress">;
  "api_v2010:DeleteTranscription": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteTranscription">;
  "api_v2010:DeleteUserDefinedMessageSubscription": TwilioVoiceFullApiOperationInput<"api_v2010:DeleteUserDefinedMessageSubscription">;
  "api_v2010:FetchApplication": TwilioVoiceFullApiOperationInput<"api_v2010:FetchApplication">;
  "api_v2010:FetchCall": TwilioVoiceFullApiOperationInput<"api_v2010:FetchCall">;
  "api_v2010:FetchCallNotification": TwilioVoiceFullApiOperationInput<"api_v2010:FetchCallNotification">;
  "api_v2010:FetchCallRecording": TwilioVoiceFullApiOperationInput<"api_v2010:FetchCallRecording">;
  "api_v2010:FetchConference": TwilioVoiceFullApiOperationInput<"api_v2010:FetchConference">;
  "api_v2010:FetchConferenceRecording": TwilioVoiceFullApiOperationInput<"api_v2010:FetchConferenceRecording">;
  "api_v2010:FetchMember": TwilioVoiceFullApiOperationInput<"api_v2010:FetchMember">;
  "api_v2010:FetchOutgoingCallerId": TwilioVoiceFullApiOperationInput<"api_v2010:FetchOutgoingCallerId">;
  "api_v2010:FetchParticipant": TwilioVoiceFullApiOperationInput<"api_v2010:FetchParticipant">;
  "api_v2010:FetchQueue": TwilioVoiceFullApiOperationInput<"api_v2010:FetchQueue">;
  "api_v2010:FetchRecording": TwilioVoiceFullApiOperationInput<"api_v2010:FetchRecording">;
  "api_v2010:FetchRecordingTranscription": TwilioVoiceFullApiOperationInput<"api_v2010:FetchRecordingTranscription">;
  "api_v2010:FetchSipCredential": TwilioVoiceFullApiOperationInput<"api_v2010:FetchSipCredential">;
  "api_v2010:FetchSipCredentialList": TwilioVoiceFullApiOperationInput<"api_v2010:FetchSipCredentialList">;
  "api_v2010:FetchSipCredentialListMapping": TwilioVoiceFullApiOperationInput<"api_v2010:FetchSipCredentialListMapping">;
  "api_v2010:FetchSipDomain": TwilioVoiceFullApiOperationInput<"api_v2010:FetchSipDomain">;
  "api_v2010:FetchSipIpAccessControlList": TwilioVoiceFullApiOperationInput<"api_v2010:FetchSipIpAccessControlList">;
  "api_v2010:FetchSipIpAccessControlListMapping": TwilioVoiceFullApiOperationInput<"api_v2010:FetchSipIpAccessControlListMapping">;
  "api_v2010:FetchSipIpAddress": TwilioVoiceFullApiOperationInput<"api_v2010:FetchSipIpAddress">;
  "api_v2010:FetchTranscription": TwilioVoiceFullApiOperationInput<"api_v2010:FetchTranscription">;
  "api_v2010:ListApplication": TwilioVoiceFullApiOperationInput<"api_v2010:ListApplication">;
  "api_v2010:ListCall": TwilioVoiceFullApiOperationInput<"api_v2010:ListCall">;
  "api_v2010:ListCallNotification": TwilioVoiceFullApiOperationInput<"api_v2010:ListCallNotification">;
  "api_v2010:ListCallRecording": TwilioVoiceFullApiOperationInput<"api_v2010:ListCallRecording">;
  "api_v2010:ListConference": TwilioVoiceFullApiOperationInput<"api_v2010:ListConference">;
  "api_v2010:ListConferenceRecording": TwilioVoiceFullApiOperationInput<"api_v2010:ListConferenceRecording">;
  "api_v2010:ListMember": TwilioVoiceFullApiOperationInput<"api_v2010:ListMember">;
  "api_v2010:ListOutgoingCallerId": TwilioVoiceFullApiOperationInput<"api_v2010:ListOutgoingCallerId">;
  "api_v2010:ListParticipant": TwilioVoiceFullApiOperationInput<"api_v2010:ListParticipant">;
  "api_v2010:ListQueue": TwilioVoiceFullApiOperationInput<"api_v2010:ListQueue">;
  "api_v2010:ListRecording": TwilioVoiceFullApiOperationInput<"api_v2010:ListRecording">;
  "api_v2010:ListRecordingTranscription": TwilioVoiceFullApiOperationInput<"api_v2010:ListRecordingTranscription">;
  "api_v2010:ListSipCredential": TwilioVoiceFullApiOperationInput<"api_v2010:ListSipCredential">;
  "api_v2010:ListSipCredentialList": TwilioVoiceFullApiOperationInput<"api_v2010:ListSipCredentialList">;
  "api_v2010:ListSipCredentialListMapping": TwilioVoiceFullApiOperationInput<"api_v2010:ListSipCredentialListMapping">;
  "api_v2010:ListSipDomain": TwilioVoiceFullApiOperationInput<"api_v2010:ListSipDomain">;
  "api_v2010:ListSipIpAccessControlList": TwilioVoiceFullApiOperationInput<"api_v2010:ListSipIpAccessControlList">;
  "api_v2010:ListSipIpAccessControlListMapping": TwilioVoiceFullApiOperationInput<"api_v2010:ListSipIpAccessControlListMapping">;
  "api_v2010:ListSipIpAddress": TwilioVoiceFullApiOperationInput<"api_v2010:ListSipIpAddress">;
  "api_v2010:ListTranscription": TwilioVoiceFullApiOperationInput<"api_v2010:ListTranscription">;
  "api_v2010:UpdateApplication": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateApplication">;
  "api_v2010:UpdateCall": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateCall">;
  "api_v2010:UpdateCallRecording": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateCallRecording">;
  "api_v2010:UpdateConference": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateConference">;
}

export interface TwilioVoiceFullApiApiV201001GeneratedClient {
  ApiV2010CreateApplication(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateApplication">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateApplication"]>;
  ApiV2010CreateCall(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateCall">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateCall"]>;
  ApiV2010CreateCallRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateCallRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateCallRecording"]>;
  ApiV2010CreateParticipant(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateParticipant">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateParticipant"]>;
  ApiV2010CreatePayments(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreatePayments">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreatePayments"]>;
  ApiV2010CreateQueue(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateQueue">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateQueue"]>;
  ApiV2010CreateRealtimeTranscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateRealtimeTranscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateRealtimeTranscription"]>;
  ApiV2010CreateSipCredential(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipCredential">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateSipCredential"]>;
  ApiV2010CreateSipCredentialList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipCredentialList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateSipCredentialList"]>;
  ApiV2010CreateSipCredentialListMapping(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipCredentialListMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateSipCredentialListMapping"]>;
  ApiV2010CreateSipDomain(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipDomain">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateSipDomain"]>;
  ApiV2010CreateSipIpAccessControlList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipIpAccessControlList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateSipIpAccessControlList"]>;
  ApiV2010CreateSipIpAccessControlListMapping(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipIpAccessControlListMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateSipIpAccessControlListMapping"]>;
  ApiV2010CreateSipIpAddress(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipIpAddress">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateSipIpAddress"]>;
  ApiV2010CreateSiprec(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSiprec">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateSiprec"]>;
  ApiV2010CreateStream(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateStream">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateStream"]>;
  ApiV2010CreateUserDefinedMessage(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateUserDefinedMessage">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateUserDefinedMessage"]>;
  ApiV2010CreateUserDefinedMessageSubscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:CreateUserDefinedMessageSubscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:CreateUserDefinedMessageSubscription"]>;
  ApiV2010DeleteApplication(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteApplication">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteApplication"]>;
  ApiV2010DeleteCall(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteCall">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteCall"]>;
  ApiV2010DeleteCallRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteCallRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteCallRecording"]>;
  ApiV2010DeleteConferenceRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteConferenceRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteConferenceRecording"]>;
  ApiV2010DeleteOutgoingCallerId(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteOutgoingCallerId">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteOutgoingCallerId"]>;
  ApiV2010DeleteParticipant(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteParticipant">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteParticipant"]>;
  ApiV2010DeleteQueue(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteQueue">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteQueue"]>;
  ApiV2010DeleteRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteRecording"]>;
  ApiV2010DeleteRecordingTranscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteRecordingTranscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteRecordingTranscription"]>;
  ApiV2010DeleteSipCredential(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipCredential">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteSipCredential"]>;
  ApiV2010DeleteSipCredentialList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipCredentialList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteSipCredentialList"]>;
  ApiV2010DeleteSipCredentialListMapping(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipCredentialListMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteSipCredentialListMapping"]>;
  ApiV2010DeleteSipDomain(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipDomain">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteSipDomain"]>;
  ApiV2010DeleteSipIpAccessControlList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipIpAccessControlList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteSipIpAccessControlList"]>;
  ApiV2010DeleteSipIpAccessControlListMapping(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipIpAccessControlListMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteSipIpAccessControlListMapping"]>;
  ApiV2010DeleteSipIpAddress(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipIpAddress">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteSipIpAddress"]>;
  ApiV2010DeleteTranscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteTranscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteTranscription"]>;
  ApiV2010DeleteUserDefinedMessageSubscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteUserDefinedMessageSubscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:DeleteUserDefinedMessageSubscription"]>;
  ApiV2010FetchApplication(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchApplication">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchApplication"]>;
  ApiV2010FetchCall(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchCall">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchCall"]>;
  ApiV2010FetchCallNotification(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchCallNotification">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchCallNotification"]>;
  ApiV2010FetchCallRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchCallRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchCallRecording"]>;
  ApiV2010FetchConference(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchConference">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchConference"]>;
  ApiV2010FetchConferenceRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchConferenceRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchConferenceRecording"]>;
  ApiV2010FetchMember(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchMember">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchMember"]>;
  ApiV2010FetchOutgoingCallerId(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchOutgoingCallerId">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchOutgoingCallerId"]>;
  ApiV2010FetchParticipant(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchParticipant">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchParticipant"]>;
  ApiV2010FetchQueue(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchQueue">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchQueue"]>;
  ApiV2010FetchRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchRecording"]>;
  ApiV2010FetchRecordingTranscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchRecordingTranscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchRecordingTranscription"]>;
  ApiV2010FetchSipCredential(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipCredential">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchSipCredential"]>;
  ApiV2010FetchSipCredentialList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipCredentialList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchSipCredentialList"]>;
  ApiV2010FetchSipCredentialListMapping(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipCredentialListMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchSipCredentialListMapping"]>;
  ApiV2010FetchSipDomain(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipDomain">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchSipDomain"]>;
  ApiV2010FetchSipIpAccessControlList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipIpAccessControlList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchSipIpAccessControlList"]>;
  ApiV2010FetchSipIpAccessControlListMapping(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipIpAccessControlListMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchSipIpAccessControlListMapping"]>;
  ApiV2010FetchSipIpAddress(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipIpAddress">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchSipIpAddress"]>;
  ApiV2010FetchTranscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:FetchTranscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:FetchTranscription"]>;
  ApiV2010ListApplication(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListApplication">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListApplication"]>;
  ApiV2010ListCall(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListCall">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListCall"]>;
  ApiV2010ListCallNotification(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListCallNotification">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListCallNotification"]>;
  ApiV2010ListCallRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListCallRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListCallRecording"]>;
  ApiV2010ListConference(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListConference">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListConference"]>;
  ApiV2010ListConferenceRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListConferenceRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListConferenceRecording"]>;
  ApiV2010ListMember(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListMember">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListMember"]>;
  ApiV2010ListOutgoingCallerId(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListOutgoingCallerId">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListOutgoingCallerId"]>;
  ApiV2010ListParticipant(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListParticipant">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListParticipant"]>;
  ApiV2010ListQueue(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListQueue">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListQueue"]>;
  ApiV2010ListRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListRecording"]>;
  ApiV2010ListRecordingTranscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListRecordingTranscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListRecordingTranscription"]>;
  ApiV2010ListSipCredential(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipCredential">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListSipCredential"]>;
  ApiV2010ListSipCredentialList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipCredentialList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListSipCredentialList"]>;
  ApiV2010ListSipCredentialListMapping(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipCredentialListMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListSipCredentialListMapping"]>;
  ApiV2010ListSipDomain(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipDomain">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListSipDomain"]>;
  ApiV2010ListSipIpAccessControlList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipIpAccessControlList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListSipIpAccessControlList"]>;
  ApiV2010ListSipIpAccessControlListMapping(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipIpAccessControlListMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListSipIpAccessControlListMapping"]>;
  ApiV2010ListSipIpAddress(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipIpAddress">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListSipIpAddress"]>;
  ApiV2010ListTranscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:ListTranscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:ListTranscription"]>;
  ApiV2010UpdateApplication(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateApplication">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateApplication"]>;
  ApiV2010UpdateCall(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateCall">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateCall"]>;
  ApiV2010UpdateCallRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateCallRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateCallRecording"]>;
  ApiV2010UpdateConference(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateConference">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateConference"]>;
}

export const TwilioVoiceFullApiApiV201001GeneratedFunctionNames = [
  "ApiV2010CreateApplication",
  "ApiV2010CreateCall",
  "ApiV2010CreateCallRecording",
  "ApiV2010CreateParticipant",
  "ApiV2010CreatePayments",
  "ApiV2010CreateQueue",
  "ApiV2010CreateRealtimeTranscription",
  "ApiV2010CreateSipCredential",
  "ApiV2010CreateSipCredentialList",
  "ApiV2010CreateSipCredentialListMapping",
  "ApiV2010CreateSipDomain",
  "ApiV2010CreateSipIpAccessControlList",
  "ApiV2010CreateSipIpAccessControlListMapping",
  "ApiV2010CreateSipIpAddress",
  "ApiV2010CreateSiprec",
  "ApiV2010CreateStream",
  "ApiV2010CreateUserDefinedMessage",
  "ApiV2010CreateUserDefinedMessageSubscription",
  "ApiV2010DeleteApplication",
  "ApiV2010DeleteCall",
  "ApiV2010DeleteCallRecording",
  "ApiV2010DeleteConferenceRecording",
  "ApiV2010DeleteOutgoingCallerId",
  "ApiV2010DeleteParticipant",
  "ApiV2010DeleteQueue",
  "ApiV2010DeleteRecording",
  "ApiV2010DeleteRecordingTranscription",
  "ApiV2010DeleteSipCredential",
  "ApiV2010DeleteSipCredentialList",
  "ApiV2010DeleteSipCredentialListMapping",
  "ApiV2010DeleteSipDomain",
  "ApiV2010DeleteSipIpAccessControlList",
  "ApiV2010DeleteSipIpAccessControlListMapping",
  "ApiV2010DeleteSipIpAddress",
  "ApiV2010DeleteTranscription",
  "ApiV2010DeleteUserDefinedMessageSubscription",
  "ApiV2010FetchApplication",
  "ApiV2010FetchCall",
  "ApiV2010FetchCallNotification",
  "ApiV2010FetchCallRecording",
  "ApiV2010FetchConference",
  "ApiV2010FetchConferenceRecording",
  "ApiV2010FetchMember",
  "ApiV2010FetchOutgoingCallerId",
  "ApiV2010FetchParticipant",
  "ApiV2010FetchQueue",
  "ApiV2010FetchRecording",
  "ApiV2010FetchRecordingTranscription",
  "ApiV2010FetchSipCredential",
  "ApiV2010FetchSipCredentialList",
  "ApiV2010FetchSipCredentialListMapping",
  "ApiV2010FetchSipDomain",
  "ApiV2010FetchSipIpAccessControlList",
  "ApiV2010FetchSipIpAccessControlListMapping",
  "ApiV2010FetchSipIpAddress",
  "ApiV2010FetchTranscription",
  "ApiV2010ListApplication",
  "ApiV2010ListCall",
  "ApiV2010ListCallNotification",
  "ApiV2010ListCallRecording",
  "ApiV2010ListConference",
  "ApiV2010ListConferenceRecording",
  "ApiV2010ListMember",
  "ApiV2010ListOutgoingCallerId",
  "ApiV2010ListParticipant",
  "ApiV2010ListQueue",
  "ApiV2010ListRecording",
  "ApiV2010ListRecordingTranscription",
  "ApiV2010ListSipCredential",
  "ApiV2010ListSipCredentialList",
  "ApiV2010ListSipCredentialListMapping",
  "ApiV2010ListSipDomain",
  "ApiV2010ListSipIpAccessControlList",
  "ApiV2010ListSipIpAccessControlListMapping",
  "ApiV2010ListSipIpAddress",
  "ApiV2010ListTranscription",
  "ApiV2010UpdateApplication",
  "ApiV2010UpdateCall",
  "ApiV2010UpdateCallRecording",
  "ApiV2010UpdateConference"
] as const satisfies readonly (keyof TwilioVoiceFullApiApiV201001GeneratedClient)[];

export function createTwilioVoiceFullApiApiV201001GeneratedClient(
  callOperation: TwilioVoiceGeneratedOperationCaller,
): TwilioVoiceFullApiApiV201001GeneratedClient {
  return {
    ApiV2010CreateApplication: (...args) => callOperation("api_v2010:CreateApplication", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateApplication">)),
    ApiV2010CreateCall: (...args) => callOperation("api_v2010:CreateCall", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateCall">)),
    ApiV2010CreateCallRecording: (...args) => callOperation("api_v2010:CreateCallRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateCallRecording">)),
    ApiV2010CreateParticipant: (...args) => callOperation("api_v2010:CreateParticipant", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateParticipant">)),
    ApiV2010CreatePayments: (...args) => callOperation("api_v2010:CreatePayments", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreatePayments">)),
    ApiV2010CreateQueue: (...args) => callOperation("api_v2010:CreateQueue", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateQueue">)),
    ApiV2010CreateRealtimeTranscription: (...args) => callOperation("api_v2010:CreateRealtimeTranscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateRealtimeTranscription">)),
    ApiV2010CreateSipCredential: (...args) => callOperation("api_v2010:CreateSipCredential", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipCredential">)),
    ApiV2010CreateSipCredentialList: (...args) => callOperation("api_v2010:CreateSipCredentialList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipCredentialList">)),
    ApiV2010CreateSipCredentialListMapping: (...args) => callOperation("api_v2010:CreateSipCredentialListMapping", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipCredentialListMapping">)),
    ApiV2010CreateSipDomain: (...args) => callOperation("api_v2010:CreateSipDomain", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipDomain">)),
    ApiV2010CreateSipIpAccessControlList: (...args) => callOperation("api_v2010:CreateSipIpAccessControlList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipIpAccessControlList">)),
    ApiV2010CreateSipIpAccessControlListMapping: (...args) => callOperation("api_v2010:CreateSipIpAccessControlListMapping", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipIpAccessControlListMapping">)),
    ApiV2010CreateSipIpAddress: (...args) => callOperation("api_v2010:CreateSipIpAddress", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSipIpAddress">)),
    ApiV2010CreateSiprec: (...args) => callOperation("api_v2010:CreateSiprec", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateSiprec">)),
    ApiV2010CreateStream: (...args) => callOperation("api_v2010:CreateStream", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateStream">)),
    ApiV2010CreateUserDefinedMessage: (...args) => callOperation("api_v2010:CreateUserDefinedMessage", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateUserDefinedMessage">)),
    ApiV2010CreateUserDefinedMessageSubscription: (...args) => callOperation("api_v2010:CreateUserDefinedMessageSubscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:CreateUserDefinedMessageSubscription">)),
    ApiV2010DeleteApplication: (...args) => callOperation("api_v2010:DeleteApplication", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteApplication">)),
    ApiV2010DeleteCall: (...args) => callOperation("api_v2010:DeleteCall", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteCall">)),
    ApiV2010DeleteCallRecording: (...args) => callOperation("api_v2010:DeleteCallRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteCallRecording">)),
    ApiV2010DeleteConferenceRecording: (...args) => callOperation("api_v2010:DeleteConferenceRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteConferenceRecording">)),
    ApiV2010DeleteOutgoingCallerId: (...args) => callOperation("api_v2010:DeleteOutgoingCallerId", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteOutgoingCallerId">)),
    ApiV2010DeleteParticipant: (...args) => callOperation("api_v2010:DeleteParticipant", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteParticipant">)),
    ApiV2010DeleteQueue: (...args) => callOperation("api_v2010:DeleteQueue", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteQueue">)),
    ApiV2010DeleteRecording: (...args) => callOperation("api_v2010:DeleteRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteRecording">)),
    ApiV2010DeleteRecordingTranscription: (...args) => callOperation("api_v2010:DeleteRecordingTranscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteRecordingTranscription">)),
    ApiV2010DeleteSipCredential: (...args) => callOperation("api_v2010:DeleteSipCredential", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipCredential">)),
    ApiV2010DeleteSipCredentialList: (...args) => callOperation("api_v2010:DeleteSipCredentialList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipCredentialList">)),
    ApiV2010DeleteSipCredentialListMapping: (...args) => callOperation("api_v2010:DeleteSipCredentialListMapping", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipCredentialListMapping">)),
    ApiV2010DeleteSipDomain: (...args) => callOperation("api_v2010:DeleteSipDomain", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipDomain">)),
    ApiV2010DeleteSipIpAccessControlList: (...args) => callOperation("api_v2010:DeleteSipIpAccessControlList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipIpAccessControlList">)),
    ApiV2010DeleteSipIpAccessControlListMapping: (...args) => callOperation("api_v2010:DeleteSipIpAccessControlListMapping", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipIpAccessControlListMapping">)),
    ApiV2010DeleteSipIpAddress: (...args) => callOperation("api_v2010:DeleteSipIpAddress", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteSipIpAddress">)),
    ApiV2010DeleteTranscription: (...args) => callOperation("api_v2010:DeleteTranscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteTranscription">)),
    ApiV2010DeleteUserDefinedMessageSubscription: (...args) => callOperation("api_v2010:DeleteUserDefinedMessageSubscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:DeleteUserDefinedMessageSubscription">)),
    ApiV2010FetchApplication: (...args) => callOperation("api_v2010:FetchApplication", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchApplication">)),
    ApiV2010FetchCall: (...args) => callOperation("api_v2010:FetchCall", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchCall">)),
    ApiV2010FetchCallNotification: (...args) => callOperation("api_v2010:FetchCallNotification", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchCallNotification">)),
    ApiV2010FetchCallRecording: (...args) => callOperation("api_v2010:FetchCallRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchCallRecording">)),
    ApiV2010FetchConference: (...args) => callOperation("api_v2010:FetchConference", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchConference">)),
    ApiV2010FetchConferenceRecording: (...args) => callOperation("api_v2010:FetchConferenceRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchConferenceRecording">)),
    ApiV2010FetchMember: (...args) => callOperation("api_v2010:FetchMember", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchMember">)),
    ApiV2010FetchOutgoingCallerId: (...args) => callOperation("api_v2010:FetchOutgoingCallerId", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchOutgoingCallerId">)),
    ApiV2010FetchParticipant: (...args) => callOperation("api_v2010:FetchParticipant", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchParticipant">)),
    ApiV2010FetchQueue: (...args) => callOperation("api_v2010:FetchQueue", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchQueue">)),
    ApiV2010FetchRecording: (...args) => callOperation("api_v2010:FetchRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchRecording">)),
    ApiV2010FetchRecordingTranscription: (...args) => callOperation("api_v2010:FetchRecordingTranscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchRecordingTranscription">)),
    ApiV2010FetchSipCredential: (...args) => callOperation("api_v2010:FetchSipCredential", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipCredential">)),
    ApiV2010FetchSipCredentialList: (...args) => callOperation("api_v2010:FetchSipCredentialList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipCredentialList">)),
    ApiV2010FetchSipCredentialListMapping: (...args) => callOperation("api_v2010:FetchSipCredentialListMapping", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipCredentialListMapping">)),
    ApiV2010FetchSipDomain: (...args) => callOperation("api_v2010:FetchSipDomain", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipDomain">)),
    ApiV2010FetchSipIpAccessControlList: (...args) => callOperation("api_v2010:FetchSipIpAccessControlList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipIpAccessControlList">)),
    ApiV2010FetchSipIpAccessControlListMapping: (...args) => callOperation("api_v2010:FetchSipIpAccessControlListMapping", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipIpAccessControlListMapping">)),
    ApiV2010FetchSipIpAddress: (...args) => callOperation("api_v2010:FetchSipIpAddress", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchSipIpAddress">)),
    ApiV2010FetchTranscription: (...args) => callOperation("api_v2010:FetchTranscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:FetchTranscription">)),
    ApiV2010ListApplication: (...args) => callOperation("api_v2010:ListApplication", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListApplication">)),
    ApiV2010ListCall: (...args) => callOperation("api_v2010:ListCall", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListCall">)),
    ApiV2010ListCallNotification: (...args) => callOperation("api_v2010:ListCallNotification", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListCallNotification">)),
    ApiV2010ListCallRecording: (...args) => callOperation("api_v2010:ListCallRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListCallRecording">)),
    ApiV2010ListConference: (...args) => callOperation("api_v2010:ListConference", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListConference">)),
    ApiV2010ListConferenceRecording: (...args) => callOperation("api_v2010:ListConferenceRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListConferenceRecording">)),
    ApiV2010ListMember: (...args) => callOperation("api_v2010:ListMember", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListMember">)),
    ApiV2010ListOutgoingCallerId: (...args) => callOperation("api_v2010:ListOutgoingCallerId", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListOutgoingCallerId">)),
    ApiV2010ListParticipant: (...args) => callOperation("api_v2010:ListParticipant", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListParticipant">)),
    ApiV2010ListQueue: (...args) => callOperation("api_v2010:ListQueue", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListQueue">)),
    ApiV2010ListRecording: (...args) => callOperation("api_v2010:ListRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListRecording">)),
    ApiV2010ListRecordingTranscription: (...args) => callOperation("api_v2010:ListRecordingTranscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListRecordingTranscription">)),
    ApiV2010ListSipCredential: (...args) => callOperation("api_v2010:ListSipCredential", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipCredential">)),
    ApiV2010ListSipCredentialList: (...args) => callOperation("api_v2010:ListSipCredentialList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipCredentialList">)),
    ApiV2010ListSipCredentialListMapping: (...args) => callOperation("api_v2010:ListSipCredentialListMapping", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipCredentialListMapping">)),
    ApiV2010ListSipDomain: (...args) => callOperation("api_v2010:ListSipDomain", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipDomain">)),
    ApiV2010ListSipIpAccessControlList: (...args) => callOperation("api_v2010:ListSipIpAccessControlList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipIpAccessControlList">)),
    ApiV2010ListSipIpAccessControlListMapping: (...args) => callOperation("api_v2010:ListSipIpAccessControlListMapping", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipIpAccessControlListMapping">)),
    ApiV2010ListSipIpAddress: (...args) => callOperation("api_v2010:ListSipIpAddress", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListSipIpAddress">)),
    ApiV2010ListTranscription: (...args) => callOperation("api_v2010:ListTranscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:ListTranscription">)),
    ApiV2010UpdateApplication: (...args) => callOperation("api_v2010:UpdateApplication", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateApplication">)),
    ApiV2010UpdateCall: (...args) => callOperation("api_v2010:UpdateCall", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateCall">)),
    ApiV2010UpdateCallRecording: (...args) => callOperation("api_v2010:UpdateCallRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateCallRecording">)),
    ApiV2010UpdateConference: (...args) => callOperation("api_v2010:UpdateConference", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateConference">)),
  };
}
