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
export const TwilioVoiceFullApiApiV201002OperationKeys = [
  "api_v2010:UpdateConferenceRecording",
  "api_v2010:UpdateMember",
  "api_v2010:UpdateOutgoingCallerId",
  "api_v2010:UpdateParticipant",
  "api_v2010:UpdatePayments",
  "api_v2010:UpdateQueue",
  "api_v2010:UpdateRealtimeTranscription",
  "api_v2010:UpdateSipCredential",
  "api_v2010:UpdateSipCredentialList",
  "api_v2010:UpdateSipDomain",
  "api_v2010:UpdateSipIpAccessControlList",
  "api_v2010:UpdateSipIpAddress",
  "api_v2010:UpdateSiprec",
  "api_v2010:UpdateStream"
] as const;
export type TwilioVoiceFullApiApiV201002OperationKey = typeof TwilioVoiceFullApiApiV201002OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioVoiceFullApiApiV201002OperationPathParamMap {
  "api_v2010:UpdateConferenceRecording": { "AccountSid": TwilioVoiceFullApiPathParamValue; "ConferenceSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateMember": { "AccountSid": TwilioVoiceFullApiPathParamValue; "QueueSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateOutgoingCallerId": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateParticipant": { "AccountSid": TwilioVoiceFullApiPathParamValue; "ConferenceSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdatePayments": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateQueue": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateRealtimeTranscription": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateSipCredential": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CredentialListSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateSipCredentialList": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateSipDomain": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateSipIpAccessControlList": { "AccountSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateSipIpAddress": { "AccountSid": TwilioVoiceFullApiPathParamValue; "IpAccessControlListSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateSiprec": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "api_v2010:UpdateStream": { "AccountSid": TwilioVoiceFullApiPathParamValue; "CallSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
}

export interface TwilioVoiceFullApiApiV201002OperationRequestMap {
  "api_v2010:UpdateConferenceRecording": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateConferenceRecording">;
  "api_v2010:UpdateMember": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateMember">;
  "api_v2010:UpdateOutgoingCallerId": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateOutgoingCallerId">;
  "api_v2010:UpdateParticipant": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateParticipant">;
  "api_v2010:UpdatePayments": TwilioVoiceFullApiOperationInput<"api_v2010:UpdatePayments">;
  "api_v2010:UpdateQueue": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateQueue">;
  "api_v2010:UpdateRealtimeTranscription": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateRealtimeTranscription">;
  "api_v2010:UpdateSipCredential": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateSipCredential">;
  "api_v2010:UpdateSipCredentialList": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateSipCredentialList">;
  "api_v2010:UpdateSipDomain": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateSipDomain">;
  "api_v2010:UpdateSipIpAccessControlList": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateSipIpAccessControlList">;
  "api_v2010:UpdateSipIpAddress": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateSipIpAddress">;
  "api_v2010:UpdateSiprec": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateSiprec">;
  "api_v2010:UpdateStream": TwilioVoiceFullApiOperationInput<"api_v2010:UpdateStream">;
}

export interface TwilioVoiceFullApiApiV201002GeneratedClient {
  ApiV2010UpdateConferenceRecording(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateConferenceRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateConferenceRecording"]>;
  ApiV2010UpdateMember(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateMember">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateMember"]>;
  ApiV2010UpdateOutgoingCallerId(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateOutgoingCallerId">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateOutgoingCallerId"]>;
  ApiV2010UpdateParticipant(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateParticipant">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateParticipant"]>;
  ApiV2010UpdatePayments(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdatePayments">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdatePayments"]>;
  ApiV2010UpdateQueue(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateQueue">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateQueue"]>;
  ApiV2010UpdateRealtimeTranscription(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateRealtimeTranscription">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateRealtimeTranscription"]>;
  ApiV2010UpdateSipCredential(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipCredential">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateSipCredential"]>;
  ApiV2010UpdateSipCredentialList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipCredentialList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateSipCredentialList"]>;
  ApiV2010UpdateSipDomain(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipDomain">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateSipDomain"]>;
  ApiV2010UpdateSipIpAccessControlList(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipIpAccessControlList">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateSipIpAccessControlList"]>;
  ApiV2010UpdateSipIpAddress(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipIpAddress">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateSipIpAddress"]>;
  ApiV2010UpdateSiprec(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSiprec">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateSiprec"]>;
  ApiV2010UpdateStream(...args: TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateStream">): Promise<TwilioVoiceFullApiOperationResponseMap["api_v2010:UpdateStream"]>;
}

export const TwilioVoiceFullApiApiV201002GeneratedFunctionNames = [
  "ApiV2010UpdateConferenceRecording",
  "ApiV2010UpdateMember",
  "ApiV2010UpdateOutgoingCallerId",
  "ApiV2010UpdateParticipant",
  "ApiV2010UpdatePayments",
  "ApiV2010UpdateQueue",
  "ApiV2010UpdateRealtimeTranscription",
  "ApiV2010UpdateSipCredential",
  "ApiV2010UpdateSipCredentialList",
  "ApiV2010UpdateSipDomain",
  "ApiV2010UpdateSipIpAccessControlList",
  "ApiV2010UpdateSipIpAddress",
  "ApiV2010UpdateSiprec",
  "ApiV2010UpdateStream"
] as const satisfies readonly (keyof TwilioVoiceFullApiApiV201002GeneratedClient)[];

export function createTwilioVoiceFullApiApiV201002GeneratedClient(
  callOperation: TwilioVoiceGeneratedOperationCaller,
): TwilioVoiceFullApiApiV201002GeneratedClient {
  return {
    ApiV2010UpdateConferenceRecording: (...args) => callOperation("api_v2010:UpdateConferenceRecording", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateConferenceRecording">)),
    ApiV2010UpdateMember: (...args) => callOperation("api_v2010:UpdateMember", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateMember">)),
    ApiV2010UpdateOutgoingCallerId: (...args) => callOperation("api_v2010:UpdateOutgoingCallerId", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateOutgoingCallerId">)),
    ApiV2010UpdateParticipant: (...args) => callOperation("api_v2010:UpdateParticipant", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateParticipant">)),
    ApiV2010UpdatePayments: (...args) => callOperation("api_v2010:UpdatePayments", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdatePayments">)),
    ApiV2010UpdateQueue: (...args) => callOperation("api_v2010:UpdateQueue", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateQueue">)),
    ApiV2010UpdateRealtimeTranscription: (...args) => callOperation("api_v2010:UpdateRealtimeTranscription", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateRealtimeTranscription">)),
    ApiV2010UpdateSipCredential: (...args) => callOperation("api_v2010:UpdateSipCredential", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipCredential">)),
    ApiV2010UpdateSipCredentialList: (...args) => callOperation("api_v2010:UpdateSipCredentialList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipCredentialList">)),
    ApiV2010UpdateSipDomain: (...args) => callOperation("api_v2010:UpdateSipDomain", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipDomain">)),
    ApiV2010UpdateSipIpAccessControlList: (...args) => callOperation("api_v2010:UpdateSipIpAccessControlList", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipIpAccessControlList">)),
    ApiV2010UpdateSipIpAddress: (...args) => callOperation("api_v2010:UpdateSipIpAddress", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSipIpAddress">)),
    ApiV2010UpdateSiprec: (...args) => callOperation("api_v2010:UpdateSiprec", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateSiprec">)),
    ApiV2010UpdateStream: (...args) => callOperation("api_v2010:UpdateStream", ...(args as TwilioVoiceFullApiOperationArgs<"api_v2010:UpdateStream">)),
  };
}
