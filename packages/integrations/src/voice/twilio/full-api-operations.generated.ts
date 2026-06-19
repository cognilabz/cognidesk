// Generated from Twilio's official twilio-oai OpenAPI specs (https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json).
// Do not edit by hand; run scripts/generate-twilio-full-api.mjs after checking upstream docs.

export const TWILIO_VOICE_FULL_API_SPEC_SOURCE = "https://github.com/twilio/twilio-oai" as const;
export const TWILIO_VOICE_FULL_API_SPEC_VERSION = "twilio-oai-main-2026-06-17" as const;
export const TWILIO_VOICE_FULL_API_GENERATED_AT = "2026-06-17" as const;
export const TWILIO_VOICE_FULL_API_OPERATION_COUNT = 178 as const;

export const TWILIO_VOICE_FULL_API_SPECS = [
  {
    "key": "api_v2010",
    "file": "twilio_api_v2010.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json",
    "version": "1.0.0",
    "documentedOperationCount": 197,
    "includedOperationCount": 94,
    "includeTags": [
      "Api20100401Application",
      "Api20100401Call",
      "Api20100401CallNotification",
      "Api20100401CallRecording",
      "Api20100401CallTranscription",
      "Api20100401Conference",
      "Api20100401ConferenceRecording",
      "Api20100401Credential",
      "Api20100401CredentialList",
      "Api20100401CredentialListMapping",
      "Api20100401Domain",
      "Api20100401IpAccessControlList",
      "Api20100401IpAccessControlListMapping",
      "Api20100401Member",
      "Api20100401OutgoingCallerId",
      "Api20100401Participant",
      "Api20100401Payment",
      "Api20100401Queue",
      "Api20100401Recording",
      "Api20100401RecordingTranscription",
      "Api20100401SipIpAddress",
      "Api20100401Siprec",
      "Api20100401Stream",
      "Api20100401Transcription",
      "Api20100401UserDefinedMessage",
      "Api20100401UserDefinedMessageSubscription"
    ]
  },
  {
    "key": "voice_v1",
    "file": "twilio_voice_v1.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json",
    "version": "1.0.0",
    "documentedOperationCount": 32,
    "includedOperationCount": 32
  },
  {
    "key": "voice_v3",
    "file": "twilio_voice_v3.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v3.json",
    "version": "1.0.0",
    "documentedOperationCount": 2,
    "includedOperationCount": 2
  },
  {
    "key": "trunking_v1",
    "file": "twilio_trunking_v1.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json",
    "version": "1.0.0",
    "documentedOperationCount": 24,
    "includedOperationCount": 24
  },
  {
    "key": "insights_v1",
    "file": "twilio_insights_v1.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json",
    "version": "1.0.0",
    "documentedOperationCount": 17,
    "includedOperationCount": 17
  },
  {
    "key": "insights_v2",
    "file": "twilio_insights_v2.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v2.json",
    "version": "1.0.0",
    "documentedOperationCount": 6,
    "includedOperationCount": 6
  },
  {
    "key": "insights_v3",
    "file": "twilio_insights_v3.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v3.json",
    "version": "1.0.0",
    "documentedOperationCount": 3,
    "includedOperationCount": 3
  }
] as const;

export const TWILIO_VOICE_FULL_API_OPERATIONS = [
  {
    "id": "api_v2010:CreateApplication",
    "operationId": "CreateApplication",
    "functionName": "ApiV2010CreateApplication",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Applications.json",
    "tags": [
      "Api20100401Application"
    ],
    "summary": "Create a new application within your account",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateCall",
    "operationId": "CreateCall",
    "functionName": "ApiV2010CreateCall",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls.json",
    "tags": [
      "Api20100401Call"
    ],
    "summary": "Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateCallRecording",
    "operationId": "CreateCallRecording",
    "functionName": "ApiV2010CreateCallRecording",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json",
    "tags": [
      "Api20100401CallRecording"
    ],
    "summary": "Create a recording for the call",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateParticipant",
    "operationId": "CreateParticipant",
    "functionName": "ApiV2010CreateParticipant",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json",
    "tags": [
      "Api20100401Participant"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreatePayments",
    "operationId": "CreatePayments",
    "functionName": "ApiV2010CreatePayments",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json",
    "tags": [
      "Api20100401Payment"
    ],
    "summary": "create an instance of payments. This will start a new payments session",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateQueue",
    "operationId": "CreateQueue",
    "functionName": "ApiV2010CreateQueue",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Queues.json",
    "tags": [
      "Api20100401Queue"
    ],
    "summary": "Create a queue",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateRealtimeTranscription",
    "operationId": "CreateRealtimeTranscription",
    "functionName": "ApiV2010CreateRealtimeTranscription",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions.json",
    "tags": [
      "Api20100401CallTranscription"
    ],
    "summary": "Create a Transcription",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateSipCredential",
    "operationId": "CreateSipCredential",
    "functionName": "ApiV2010CreateSipCredential",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json",
    "tags": [
      "Api20100401Credential"
    ],
    "summary": "Create a new credential resource.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateSipCredentialList",
    "operationId": "CreateSipCredentialList",
    "functionName": "ApiV2010CreateSipCredentialList",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json",
    "tags": [
      "Api20100401CredentialList"
    ],
    "summary": "Create a Credential List",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateSipCredentialListMapping",
    "operationId": "CreateSipCredentialListMapping",
    "functionName": "ApiV2010CreateSipCredentialListMapping",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json",
    "tags": [
      "Api20100401CredentialListMapping"
    ],
    "summary": "Create a CredentialListMapping resource for an account.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateSipDomain",
    "operationId": "CreateSipDomain",
    "functionName": "ApiV2010CreateSipDomain",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json",
    "tags": [
      "Api20100401Domain"
    ],
    "summary": "Create a new Domain",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateSipIpAccessControlList",
    "operationId": "CreateSipIpAccessControlList",
    "functionName": "ApiV2010CreateSipIpAccessControlList",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json",
    "tags": [
      "Api20100401IpAccessControlList"
    ],
    "summary": "Create a new IpAccessControlList resource",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateSipIpAccessControlListMapping",
    "operationId": "CreateSipIpAccessControlListMapping",
    "functionName": "ApiV2010CreateSipIpAccessControlListMapping",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json",
    "tags": [
      "Api20100401IpAccessControlListMapping"
    ],
    "summary": "Create a new IpAccessControlListMapping resource.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateSipIpAddress",
    "operationId": "CreateSipIpAddress",
    "functionName": "ApiV2010CreateSipIpAddress",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json",
    "tags": [
      "Api20100401SipIpAddress"
    ],
    "summary": "Create a new IpAddress resource.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateSiprec",
    "operationId": "CreateSiprec",
    "functionName": "ApiV2010CreateSiprec",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec.json",
    "tags": [
      "Api20100401Siprec"
    ],
    "summary": "Create a Siprec",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateStream",
    "operationId": "CreateStream",
    "functionName": "ApiV2010CreateStream",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams.json",
    "tags": [
      "Api20100401Stream"
    ],
    "summary": "Create a Stream",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateUserDefinedMessage",
    "operationId": "CreateUserDefinedMessage",
    "functionName": "ApiV2010CreateUserDefinedMessage",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json",
    "tags": [
      "Api20100401UserDefinedMessage"
    ],
    "summary": "Create a new User Defined Message for the given Call SID.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateUserDefinedMessageSubscription",
    "operationId": "CreateUserDefinedMessageSubscription",
    "functionName": "ApiV2010CreateUserDefinedMessageSubscription",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json",
    "tags": [
      "Api20100401UserDefinedMessageSubscription"
    ],
    "summary": "Subscribe to User Defined Messages for a given Call SID.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteApplication",
    "operationId": "DeleteApplication",
    "functionName": "ApiV2010DeleteApplication",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json",
    "tags": [
      "Api20100401Application"
    ],
    "summary": "Delete the application by the specified application sid",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteCall",
    "operationId": "DeleteCall",
    "functionName": "ApiV2010DeleteCall",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json",
    "tags": [
      "Api20100401Call"
    ],
    "summary": "Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteCallRecording",
    "operationId": "DeleteCallRecording",
    "functionName": "ApiV2010DeleteCallRecording",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json",
    "tags": [
      "Api20100401CallRecording"
    ],
    "summary": "Delete a recording from your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteConferenceRecording",
    "operationId": "DeleteConferenceRecording",
    "functionName": "ApiV2010DeleteConferenceRecording",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json",
    "tags": [
      "Api20100401ConferenceRecording"
    ],
    "summary": "Delete a recording from your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteOutgoingCallerId",
    "operationId": "DeleteOutgoingCallerId",
    "functionName": "ApiV2010DeleteOutgoingCallerId",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json",
    "tags": [
      "Api20100401OutgoingCallerId"
    ],
    "summary": "Delete the caller-id specified from the account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteParticipant",
    "operationId": "DeleteParticipant",
    "functionName": "ApiV2010DeleteParticipant",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json",
    "tags": [
      "Api20100401Participant"
    ],
    "summary": "Kick a participant from a given conference",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteQueue",
    "operationId": "DeleteQueue",
    "functionName": "ApiV2010DeleteQueue",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json",
    "tags": [
      "Api20100401Queue"
    ],
    "summary": "Remove an empty queue",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteRecording",
    "operationId": "DeleteRecording",
    "functionName": "ApiV2010DeleteRecording",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json",
    "tags": [
      "Api20100401Recording"
    ],
    "summary": "Delete a recording from your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteRecordingTranscription",
    "operationId": "DeleteRecordingTranscription",
    "functionName": "ApiV2010DeleteRecordingTranscription",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json",
    "tags": [
      "Api20100401RecordingTranscription"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteSipCredential",
    "operationId": "DeleteSipCredential",
    "functionName": "ApiV2010DeleteSipCredential",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json",
    "tags": [
      "Api20100401Credential"
    ],
    "summary": "Delete a credential resource.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteSipCredentialList",
    "operationId": "DeleteSipCredentialList",
    "functionName": "ApiV2010DeleteSipCredentialList",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json",
    "tags": [
      "Api20100401CredentialList"
    ],
    "summary": "Delete a Credential List",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteSipCredentialListMapping",
    "operationId": "DeleteSipCredentialListMapping",
    "functionName": "ApiV2010DeleteSipCredentialListMapping",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json",
    "tags": [
      "Api20100401CredentialListMapping"
    ],
    "summary": "Delete a CredentialListMapping resource from an account.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteSipDomain",
    "operationId": "DeleteSipDomain",
    "functionName": "ApiV2010DeleteSipDomain",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json",
    "tags": [
      "Api20100401Domain"
    ],
    "summary": "Delete an instance of a Domain",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteSipIpAccessControlList",
    "operationId": "DeleteSipIpAccessControlList",
    "functionName": "ApiV2010DeleteSipIpAccessControlList",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json",
    "tags": [
      "Api20100401IpAccessControlList"
    ],
    "summary": "Delete an IpAccessControlList from the requested account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteSipIpAccessControlListMapping",
    "operationId": "DeleteSipIpAccessControlListMapping",
    "functionName": "ApiV2010DeleteSipIpAccessControlListMapping",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json",
    "tags": [
      "Api20100401IpAccessControlListMapping"
    ],
    "summary": "Delete an IpAccessControlListMapping resource.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteSipIpAddress",
    "operationId": "DeleteSipIpAddress",
    "functionName": "ApiV2010DeleteSipIpAddress",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json",
    "tags": [
      "Api20100401SipIpAddress"
    ],
    "summary": "Delete an IpAddress resource.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteTranscription",
    "operationId": "DeleteTranscription",
    "functionName": "ApiV2010DeleteTranscription",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json",
    "tags": [
      "Api20100401Transcription"
    ],
    "summary": "Delete a transcription from the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteUserDefinedMessageSubscription",
    "operationId": "DeleteUserDefinedMessageSubscription",
    "functionName": "ApiV2010DeleteUserDefinedMessageSubscription",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json",
    "tags": [
      "Api20100401UserDefinedMessageSubscription"
    ],
    "summary": "Delete a specific User Defined Message Subscription.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchApplication",
    "operationId": "FetchApplication",
    "functionName": "ApiV2010FetchApplication",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json",
    "tags": [
      "Api20100401Application"
    ],
    "summary": "Fetch the application specified by the provided sid",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchCall",
    "operationId": "FetchCall",
    "functionName": "ApiV2010FetchCall",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json",
    "tags": [
      "Api20100401Call"
    ],
    "summary": "Fetch the call specified by the provided Call SID",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchCallNotification",
    "operationId": "FetchCallNotification",
    "functionName": "ApiV2010FetchCallNotification",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json",
    "tags": [
      "Api20100401CallNotification"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchCallRecording",
    "operationId": "FetchCallRecording",
    "functionName": "ApiV2010FetchCallRecording",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json",
    "tags": [
      "Api20100401CallRecording"
    ],
    "summary": "Fetch an instance of a recording for a call",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchConference",
    "operationId": "FetchConference",
    "functionName": "ApiV2010FetchConference",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json",
    "tags": [
      "Api20100401Conference"
    ],
    "summary": "Fetch an instance of a conference",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchConferenceRecording",
    "operationId": "FetchConferenceRecording",
    "functionName": "ApiV2010FetchConferenceRecording",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json",
    "tags": [
      "Api20100401ConferenceRecording"
    ],
    "summary": "Fetch an instance of a recording for a call",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchMember",
    "operationId": "FetchMember",
    "functionName": "ApiV2010FetchMember",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json",
    "tags": [
      "Api20100401Member"
    ],
    "summary": "Fetch a specific member from the queue",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchOutgoingCallerId",
    "operationId": "FetchOutgoingCallerId",
    "functionName": "ApiV2010FetchOutgoingCallerId",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json",
    "tags": [
      "Api20100401OutgoingCallerId"
    ],
    "summary": "Fetch an outgoing-caller-id belonging to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchParticipant",
    "operationId": "FetchParticipant",
    "functionName": "ApiV2010FetchParticipant",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json",
    "tags": [
      "Api20100401Participant"
    ],
    "summary": "Fetch an instance of a participant",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchQueue",
    "operationId": "FetchQueue",
    "functionName": "ApiV2010FetchQueue",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json",
    "tags": [
      "Api20100401Queue"
    ],
    "summary": "Fetch an instance of a queue identified by the QueueSid",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchRecording",
    "operationId": "FetchRecording",
    "functionName": "ApiV2010FetchRecording",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json",
    "tags": [
      "Api20100401Recording"
    ],
    "summary": "Fetch an instance of a recording",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchRecordingTranscription",
    "operationId": "FetchRecordingTranscription",
    "functionName": "ApiV2010FetchRecordingTranscription",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json",
    "tags": [
      "Api20100401RecordingTranscription"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchSipCredential",
    "operationId": "FetchSipCredential",
    "functionName": "ApiV2010FetchSipCredential",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json",
    "tags": [
      "Api20100401Credential"
    ],
    "summary": "Fetch a single credential.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchSipCredentialList",
    "operationId": "FetchSipCredentialList",
    "functionName": "ApiV2010FetchSipCredentialList",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json",
    "tags": [
      "Api20100401CredentialList"
    ],
    "summary": "Get a Credential List",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchSipCredentialListMapping",
    "operationId": "FetchSipCredentialListMapping",
    "functionName": "ApiV2010FetchSipCredentialListMapping",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json",
    "tags": [
      "Api20100401CredentialListMapping"
    ],
    "summary": "Fetch a single CredentialListMapping resource from an account.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchSipDomain",
    "operationId": "FetchSipDomain",
    "functionName": "ApiV2010FetchSipDomain",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json",
    "tags": [
      "Api20100401Domain"
    ],
    "summary": "Fetch an instance of a Domain",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchSipIpAccessControlList",
    "operationId": "FetchSipIpAccessControlList",
    "functionName": "ApiV2010FetchSipIpAccessControlList",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json",
    "tags": [
      "Api20100401IpAccessControlList"
    ],
    "summary": "Fetch a specific instance of an IpAccessControlList",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchSipIpAccessControlListMapping",
    "operationId": "FetchSipIpAccessControlListMapping",
    "functionName": "ApiV2010FetchSipIpAccessControlListMapping",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json",
    "tags": [
      "Api20100401IpAccessControlListMapping"
    ],
    "summary": "Fetch an IpAccessControlListMapping resource.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchSipIpAddress",
    "operationId": "FetchSipIpAddress",
    "functionName": "ApiV2010FetchSipIpAddress",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json",
    "tags": [
      "Api20100401SipIpAddress"
    ],
    "summary": "Read one IpAddress resource.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchTranscription",
    "operationId": "FetchTranscription",
    "functionName": "ApiV2010FetchTranscription",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json",
    "tags": [
      "Api20100401Transcription"
    ],
    "summary": "Fetch an instance of a Transcription",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListApplication",
    "operationId": "ListApplication",
    "functionName": "ApiV2010ListApplication",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Applications.json",
    "tags": [
      "Api20100401Application"
    ],
    "summary": "Retrieve a list of applications representing an application within the requesting account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListCall",
    "operationId": "ListCall",
    "functionName": "ApiV2010ListCall",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls.json",
    "tags": [
      "Api20100401Call"
    ],
    "summary": "Retrieves a collection of calls made to and from your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListCallNotification",
    "operationId": "ListCallNotification",
    "functionName": "ApiV2010ListCallNotification",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json",
    "tags": [
      "Api20100401CallNotification"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListCallRecording",
    "operationId": "ListCallRecording",
    "functionName": "ApiV2010ListCallRecording",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json",
    "tags": [
      "Api20100401CallRecording"
    ],
    "summary": "Retrieve a list of recordings belonging to the call used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListConference",
    "operationId": "ListConference",
    "functionName": "ApiV2010ListConference",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences.json",
    "tags": [
      "Api20100401Conference"
    ],
    "summary": "Retrieve a list of conferences belonging to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListConferenceRecording",
    "operationId": "ListConferenceRecording",
    "functionName": "ApiV2010ListConferenceRecording",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json",
    "tags": [
      "Api20100401ConferenceRecording"
    ],
    "summary": "Retrieve a list of recordings belonging to the call used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListMember",
    "operationId": "ListMember",
    "functionName": "ApiV2010ListMember",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json",
    "tags": [
      "Api20100401Member"
    ],
    "summary": "Retrieve the members of the queue",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListOutgoingCallerId",
    "operationId": "ListOutgoingCallerId",
    "functionName": "ApiV2010ListOutgoingCallerId",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json",
    "tags": [
      "Api20100401OutgoingCallerId"
    ],
    "summary": "Retrieve a list of outgoing-caller-ids belonging to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListParticipant",
    "operationId": "ListParticipant",
    "functionName": "ApiV2010ListParticipant",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json",
    "tags": [
      "Api20100401Participant"
    ],
    "summary": "Retrieve a list of participants belonging to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListQueue",
    "operationId": "ListQueue",
    "functionName": "ApiV2010ListQueue",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Queues.json",
    "tags": [
      "Api20100401Queue"
    ],
    "summary": "Retrieve a list of queues belonging to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListRecording",
    "operationId": "ListRecording",
    "functionName": "ApiV2010ListRecording",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Recordings.json",
    "tags": [
      "Api20100401Recording"
    ],
    "summary": "Retrieve a list of recordings belonging to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListRecordingTranscription",
    "operationId": "ListRecordingTranscription",
    "functionName": "ApiV2010ListRecordingTranscription",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json",
    "tags": [
      "Api20100401RecordingTranscription"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListSipCredential",
    "operationId": "ListSipCredential",
    "functionName": "ApiV2010ListSipCredential",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json",
    "tags": [
      "Api20100401Credential"
    ],
    "summary": "Retrieve a list of credentials.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListSipCredentialList",
    "operationId": "ListSipCredentialList",
    "functionName": "ApiV2010ListSipCredentialList",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json",
    "tags": [
      "Api20100401CredentialList"
    ],
    "summary": "Get All Credential Lists",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListSipCredentialListMapping",
    "operationId": "ListSipCredentialListMapping",
    "functionName": "ApiV2010ListSipCredentialListMapping",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json",
    "tags": [
      "Api20100401CredentialListMapping"
    ],
    "summary": "Read multiple CredentialListMapping resources from an account.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListSipDomain",
    "operationId": "ListSipDomain",
    "functionName": "ApiV2010ListSipDomain",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json",
    "tags": [
      "Api20100401Domain"
    ],
    "summary": "Retrieve a list of domains belonging to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListSipIpAccessControlList",
    "operationId": "ListSipIpAccessControlList",
    "functionName": "ApiV2010ListSipIpAccessControlList",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json",
    "tags": [
      "Api20100401IpAccessControlList"
    ],
    "summary": "Retrieve a list of IpAccessControlLists that belong to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListSipIpAccessControlListMapping",
    "operationId": "ListSipIpAccessControlListMapping",
    "functionName": "ApiV2010ListSipIpAccessControlListMapping",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json",
    "tags": [
      "Api20100401IpAccessControlListMapping"
    ],
    "summary": "Retrieve a list of IpAccessControlListMapping resources.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListSipIpAddress",
    "operationId": "ListSipIpAddress",
    "functionName": "ApiV2010ListSipIpAddress",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json",
    "tags": [
      "Api20100401SipIpAddress"
    ],
    "summary": "Read multiple IpAddress resources.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListTranscription",
    "operationId": "ListTranscription",
    "functionName": "ApiV2010ListTranscription",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Transcriptions.json",
    "tags": [
      "Api20100401Transcription"
    ],
    "summary": "Retrieve a list of transcriptions belonging to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateApplication",
    "operationId": "UpdateApplication",
    "functionName": "ApiV2010UpdateApplication",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json",
    "tags": [
      "Api20100401Application"
    ],
    "summary": "Updates the application's properties",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateCall",
    "operationId": "UpdateCall",
    "functionName": "ApiV2010UpdateCall",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json",
    "tags": [
      "Api20100401Call"
    ],
    "summary": "Initiates a call redirect or terminates a call",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateCallRecording",
    "operationId": "UpdateCallRecording",
    "functionName": "ApiV2010UpdateCallRecording",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json",
    "tags": [
      "Api20100401CallRecording"
    ],
    "summary": "Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateConference",
    "operationId": "UpdateConference",
    "functionName": "ApiV2010UpdateConference",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json",
    "tags": [
      "Api20100401Conference"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateConferenceRecording",
    "operationId": "UpdateConferenceRecording",
    "functionName": "ApiV2010UpdateConferenceRecording",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json",
    "tags": [
      "Api20100401ConferenceRecording"
    ],
    "summary": "Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateMember",
    "operationId": "UpdateMember",
    "functionName": "ApiV2010UpdateMember",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json",
    "tags": [
      "Api20100401Member"
    ],
    "summary": "Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateOutgoingCallerId",
    "operationId": "UpdateOutgoingCallerId",
    "functionName": "ApiV2010UpdateOutgoingCallerId",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json",
    "tags": [
      "Api20100401OutgoingCallerId"
    ],
    "summary": "Updates the caller-id",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateParticipant",
    "operationId": "UpdateParticipant",
    "functionName": "ApiV2010UpdateParticipant",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json",
    "tags": [
      "Api20100401Participant"
    ],
    "summary": "Update the properties of the participant",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdatePayments",
    "operationId": "UpdatePayments",
    "functionName": "ApiV2010UpdatePayments",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json",
    "tags": [
      "Api20100401Payment"
    ],
    "summary": "update an instance of payments with different phases of payment flows.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateQueue",
    "operationId": "UpdateQueue",
    "functionName": "ApiV2010UpdateQueue",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json",
    "tags": [
      "Api20100401Queue"
    ],
    "summary": "Update the queue with the new parameters",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateRealtimeTranscription",
    "operationId": "UpdateRealtimeTranscription",
    "functionName": "ApiV2010UpdateRealtimeTranscription",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions/{Sid}.json",
    "tags": [
      "Api20100401CallTranscription"
    ],
    "summary": "Stop a Transcription using either the SID of the Transcription resource or the `name` used when creating the resource",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateSipCredential",
    "operationId": "UpdateSipCredential",
    "functionName": "ApiV2010UpdateSipCredential",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json",
    "tags": [
      "Api20100401Credential"
    ],
    "summary": "Update a credential resource.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateSipCredentialList",
    "operationId": "UpdateSipCredentialList",
    "functionName": "ApiV2010UpdateSipCredentialList",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json",
    "tags": [
      "Api20100401CredentialList"
    ],
    "summary": "Update a Credential List",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateSipDomain",
    "operationId": "UpdateSipDomain",
    "functionName": "ApiV2010UpdateSipDomain",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json",
    "tags": [
      "Api20100401Domain"
    ],
    "summary": "Update the attributes of a domain",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateSipIpAccessControlList",
    "operationId": "UpdateSipIpAccessControlList",
    "functionName": "ApiV2010UpdateSipIpAccessControlList",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json",
    "tags": [
      "Api20100401IpAccessControlList"
    ],
    "summary": "Rename an IpAccessControlList",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateSipIpAddress",
    "operationId": "UpdateSipIpAddress",
    "functionName": "ApiV2010UpdateSipIpAddress",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json",
    "tags": [
      "Api20100401SipIpAddress"
    ],
    "summary": "Update an IpAddress resource.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateSiprec",
    "operationId": "UpdateSiprec",
    "functionName": "ApiV2010UpdateSiprec",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec/{Sid}.json",
    "tags": [
      "Api20100401Siprec"
    ],
    "summary": "Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateStream",
    "operationId": "UpdateStream",
    "functionName": "ApiV2010UpdateStream",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams/{Sid}.json",
    "tags": [
      "Api20100401Stream"
    ],
    "summary": "Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "insights_v1:FetchAccountSettings",
    "operationId": "FetchAccountSettings",
    "functionName": "InsightsV1FetchAccountSettings",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Voice/Settings",
    "tags": [
      "InsightsV1Setting"
    ],
    "summary": "Get the Voice Insights Settings.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:FetchAnnotation",
    "operationId": "FetchAnnotation",
    "functionName": "InsightsV1FetchAnnotation",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Voice/{CallSid}/Annotation",
    "tags": [
      "InsightsV1Annotation"
    ],
    "summary": "Get the Annotation for a specific Call.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:FetchCall",
    "operationId": "FetchCall",
    "functionName": "InsightsV1FetchCall",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Voice/{Sid}",
    "tags": [
      "InsightsV1Call"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:FetchConference",
    "operationId": "FetchConference",
    "functionName": "InsightsV1FetchConference",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Conferences/{ConferenceSid}",
    "tags": [
      "InsightsV1Conference"
    ],
    "summary": "Get a specific Conference Summary.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:FetchConferenceParticipant",
    "operationId": "FetchConferenceParticipant",
    "functionName": "InsightsV1FetchConferenceParticipant",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}",
    "tags": [
      "InsightsV1ConferenceParticipant"
    ],
    "summary": "Get a specific Conference Participant Summary for a Conference.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:FetchSummary",
    "operationId": "FetchSummary",
    "functionName": "InsightsV1FetchSummary",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Voice/{CallSid}/Summary",
    "tags": [
      "InsightsV1CallSummary"
    ],
    "summary": "Get a specific Call Summary.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:FetchVideoParticipantSummary",
    "operationId": "FetchVideoParticipantSummary",
    "functionName": "InsightsV1FetchVideoParticipantSummary",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}",
    "tags": [
      "InsightsV1Participant"
    ],
    "summary": "Get Video Log Analyzer data for a Room Participant.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:FetchVideoRoomSummary",
    "operationId": "FetchVideoRoomSummary",
    "functionName": "InsightsV1FetchVideoRoomSummary",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Video/Rooms/{RoomSid}",
    "tags": [
      "InsightsV1Room"
    ],
    "summary": "Get Video Log Analyzer data for a Room.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:ListCallSummaries",
    "operationId": "ListCallSummaries",
    "functionName": "InsightsV1ListCallSummaries",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Voice/Summaries",
    "tags": [
      "InsightsV1CallSummaries"
    ],
    "summary": "Get a list of Call Summaries.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:ListConference",
    "operationId": "ListConference",
    "functionName": "InsightsV1ListConference",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Conferences",
    "tags": [
      "InsightsV1Conference"
    ],
    "summary": "Get a list of Conference Summaries.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:ListConferenceParticipant",
    "operationId": "ListConferenceParticipant",
    "functionName": "InsightsV1ListConferenceParticipant",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Conferences/{ConferenceSid}/Participants",
    "tags": [
      "InsightsV1ConferenceParticipant"
    ],
    "summary": "Get a list of Conference Participants Summaries for a Conference.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:ListEvent",
    "operationId": "ListEvent",
    "functionName": "InsightsV1ListEvent",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Voice/{CallSid}/Events",
    "tags": [
      "InsightsV1Event"
    ],
    "summary": "Get a list of Call Insight Events for a Call.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:ListMetric",
    "operationId": "ListMetric",
    "functionName": "InsightsV1ListMetric",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Voice/{CallSid}/Metrics",
    "tags": [
      "InsightsV1Metric"
    ],
    "summary": "Get a list of Call Metrics for a Call.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:ListVideoParticipantSummary",
    "operationId": "ListVideoParticipantSummary",
    "functionName": "InsightsV1ListVideoParticipantSummary",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Video/Rooms/{RoomSid}/Participants",
    "tags": [
      "InsightsV1Participant"
    ],
    "summary": "Get a list of room participants.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:ListVideoRoomSummary",
    "operationId": "ListVideoRoomSummary",
    "functionName": "InsightsV1ListVideoRoomSummary",
    "specKey": "insights_v1",
    "method": "GET",
    "path": "/v1/Video/Rooms",
    "tags": [
      "InsightsV1Room"
    ],
    "summary": "Get a list of Programmable Video Rooms.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:UpdateAccountSettings",
    "operationId": "UpdateAccountSettings",
    "functionName": "InsightsV1UpdateAccountSettings",
    "specKey": "insights_v1",
    "method": "POST",
    "path": "/v1/Voice/Settings",
    "tags": [
      "InsightsV1Setting"
    ],
    "summary": "Update a specific Voice Insights Setting.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v1:UpdateAnnotation",
    "operationId": "UpdateAnnotation",
    "functionName": "InsightsV1UpdateAnnotation",
    "specKey": "insights_v1",
    "method": "POST",
    "path": "/v1/Voice/{CallSid}/Annotation",
    "tags": [
      "InsightsV1Annotation"
    ],
    "summary": "Update an Annotation for a specific Call.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v1.json"
  },
  {
    "id": "insights_v2:CreateAccountReport",
    "operationId": "CreateAccountReport",
    "functionName": "InsightsV2CreateAccountReport",
    "specKey": "insights_v2",
    "method": "POST",
    "path": "/v2/Voice/Reports",
    "tags": [
      "InsightsV1CreateAccountReport"
    ],
    "summary": "Create Account Level Report",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v2.json"
  },
  {
    "id": "insights_v2:CreateInboundPhoneNumbersReport",
    "operationId": "CreateInboundPhoneNumbersReport",
    "functionName": "InsightsV2CreateInboundPhoneNumbersReport",
    "specKey": "insights_v2",
    "method": "POST",
    "path": "/v2/Voice/Reports/PhoneNumbers/Inbound",
    "tags": [
      "InsightsV1CreateInboundPhoneNumbersReport"
    ],
    "summary": "Create Inbound Phone Numbers Level Report",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v2.json"
  },
  {
    "id": "insights_v2:CreateOutboundPhoneNumbersReport",
    "operationId": "CreateOutboundPhoneNumbersReport",
    "functionName": "InsightsV2CreateOutboundPhoneNumbersReport",
    "specKey": "insights_v2",
    "method": "POST",
    "path": "/v2/Voice/Reports/PhoneNumbers/Outbound",
    "tags": [
      "InsightsV1CreateOutboundPhoneNumbersReport"
    ],
    "summary": "Create Outbound Phone Numbers Level Report",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v2.json"
  },
  {
    "id": "insights_v2:FetchAccountReport",
    "operationId": "FetchAccountReport",
    "functionName": "InsightsV2FetchAccountReport",
    "specKey": "insights_v2",
    "method": "GET",
    "path": "/v2/Voice/Reports/{reportId}",
    "tags": [
      "InsightsV1GetAccountReport"
    ],
    "summary": "Fetch Voice Insights Account Level Report",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v2.json"
  },
  {
    "id": "insights_v2:ListInboundPhoneNumbersReport",
    "operationId": "ListInboundPhoneNumbersReport",
    "functionName": "InsightsV2ListInboundPhoneNumbersReport",
    "specKey": "insights_v2",
    "method": "GET",
    "path": "/v2/Voice/Reports/PhoneNumbers/Inbound/{reportId}",
    "tags": [
      "InsightsV1GetInboundPhoneNumbersReport"
    ],
    "summary": "List Inbound Phone Numbers Level Reports",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v2.json"
  },
  {
    "id": "insights_v2:ListOutboundPhoneNumbersReport",
    "operationId": "ListOutboundPhoneNumbersReport",
    "functionName": "InsightsV2ListOutboundPhoneNumbersReport",
    "specKey": "insights_v2",
    "method": "GET",
    "path": "/v2/Voice/Reports/PhoneNumbers/Outbound/{reportId}",
    "tags": [
      "InsightsV1GetOutboundPhoneNumbersReport"
    ],
    "summary": "List Outbound Phone Numbers Level Reports",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v2.json"
  },
  {
    "id": "insights_v3:CreateQueryResults",
    "operationId": "CreateQueryResults",
    "functionName": "InsightsV3CreateQueryResults",
    "specKey": "insights_v3",
    "method": "POST",
    "path": "/v3/InsightsDomains/Conversations/Query",
    "tags": [
      "TwilioInsights"
    ],
    "summary": "Execute a semantic query",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v3.json"
  },
  {
    "id": "insights_v3:FetchMetadata",
    "operationId": "FetchMetadata",
    "functionName": "InsightsV3FetchMetadata",
    "specKey": "insights_v3",
    "method": "GET",
    "path": "/v3/InsightsDomains/Conversations/Metadata",
    "tags": [
      "TwilioInsights"
    ],
    "summary": "Fetch Metadata for the Conversations domain",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v3.json"
  },
  {
    "id": "insights_v3:FetchQueryResults",
    "operationId": "FetchQueryResults",
    "functionName": "InsightsV3FetchQueryResults",
    "specKey": "insights_v3",
    "method": "GET",
    "path": "/v3/InsightsDomains/Conversations/Query",
    "tags": [
      "TwilioInsights"
    ],
    "summary": "Fetch semantic query results",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_insights_v3.json"
  },
  {
    "id": "trunking_v1:CreateCredentialList",
    "operationId": "CreateCredentialList",
    "functionName": "TrunkingV1CreateCredentialList",
    "specKey": "trunking_v1",
    "method": "POST",
    "path": "/v1/Trunks/{TrunkSid}/CredentialLists",
    "tags": [
      "TrunkingV1CredentialList"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:CreateIpAccessControlList",
    "operationId": "CreateIpAccessControlList",
    "functionName": "TrunkingV1CreateIpAccessControlList",
    "specKey": "trunking_v1",
    "method": "POST",
    "path": "/v1/Trunks/{TrunkSid}/IpAccessControlLists",
    "tags": [
      "TrunkingV1IpAccessControlList"
    ],
    "summary": "Associate an IP Access Control List with a Trunk",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:CreateOriginationUrl",
    "operationId": "CreateOriginationUrl",
    "functionName": "TrunkingV1CreateOriginationUrl",
    "specKey": "trunking_v1",
    "method": "POST",
    "path": "/v1/Trunks/{TrunkSid}/OriginationUrls",
    "tags": [
      "TrunkingV1OriginationUrl"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:CreatePhoneNumber",
    "operationId": "CreatePhoneNumber",
    "functionName": "TrunkingV1CreatePhoneNumber",
    "specKey": "trunking_v1",
    "method": "POST",
    "path": "/v1/Trunks/{TrunkSid}/PhoneNumbers",
    "tags": [
      "TrunkingV1PhoneNumber"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:CreateTrunk",
    "operationId": "CreateTrunk",
    "functionName": "TrunkingV1CreateTrunk",
    "specKey": "trunking_v1",
    "method": "POST",
    "path": "/v1/Trunks",
    "tags": [
      "TrunkingV1Trunk"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:DeleteCredentialList",
    "operationId": "DeleteCredentialList",
    "functionName": "TrunkingV1DeleteCredentialList",
    "specKey": "trunking_v1",
    "method": "DELETE",
    "path": "/v1/Trunks/{TrunkSid}/CredentialLists/{Sid}",
    "tags": [
      "TrunkingV1CredentialList"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:DeleteIpAccessControlList",
    "operationId": "DeleteIpAccessControlList",
    "functionName": "TrunkingV1DeleteIpAccessControlList",
    "specKey": "trunking_v1",
    "method": "DELETE",
    "path": "/v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}",
    "tags": [
      "TrunkingV1IpAccessControlList"
    ],
    "summary": "Remove an associated IP Access Control List from a Trunk",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:DeleteOriginationUrl",
    "operationId": "DeleteOriginationUrl",
    "functionName": "TrunkingV1DeleteOriginationUrl",
    "specKey": "trunking_v1",
    "method": "DELETE",
    "path": "/v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}",
    "tags": [
      "TrunkingV1OriginationUrl"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:DeletePhoneNumber",
    "operationId": "DeletePhoneNumber",
    "functionName": "TrunkingV1DeletePhoneNumber",
    "specKey": "trunking_v1",
    "method": "DELETE",
    "path": "/v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}",
    "tags": [
      "TrunkingV1PhoneNumber"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:DeleteTrunk",
    "operationId": "DeleteTrunk",
    "functionName": "TrunkingV1DeleteTrunk",
    "specKey": "trunking_v1",
    "method": "DELETE",
    "path": "/v1/Trunks/{Sid}",
    "tags": [
      "TrunkingV1Trunk"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:FetchCredentialList",
    "operationId": "FetchCredentialList",
    "functionName": "TrunkingV1FetchCredentialList",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{TrunkSid}/CredentialLists/{Sid}",
    "tags": [
      "TrunkingV1CredentialList"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:FetchIpAccessControlList",
    "operationId": "FetchIpAccessControlList",
    "functionName": "TrunkingV1FetchIpAccessControlList",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}",
    "tags": [
      "TrunkingV1IpAccessControlList"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:FetchOriginationUrl",
    "operationId": "FetchOriginationUrl",
    "functionName": "TrunkingV1FetchOriginationUrl",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}",
    "tags": [
      "TrunkingV1OriginationUrl"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:FetchPhoneNumber",
    "operationId": "FetchPhoneNumber",
    "functionName": "TrunkingV1FetchPhoneNumber",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}",
    "tags": [
      "TrunkingV1PhoneNumber"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:FetchRecording",
    "operationId": "FetchRecording",
    "functionName": "TrunkingV1FetchRecording",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{TrunkSid}/Recording",
    "tags": [
      "TrunkingV1Recording"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:FetchTrunk",
    "operationId": "FetchTrunk",
    "functionName": "TrunkingV1FetchTrunk",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{Sid}",
    "tags": [
      "TrunkingV1Trunk"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:ListCredentialList",
    "operationId": "ListCredentialList",
    "functionName": "TrunkingV1ListCredentialList",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{TrunkSid}/CredentialLists",
    "tags": [
      "TrunkingV1CredentialList"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:ListIpAccessControlList",
    "operationId": "ListIpAccessControlList",
    "functionName": "TrunkingV1ListIpAccessControlList",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{TrunkSid}/IpAccessControlLists",
    "tags": [
      "TrunkingV1IpAccessControlList"
    ],
    "summary": "List all IP Access Control Lists for a Trunk",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:ListOriginationUrl",
    "operationId": "ListOriginationUrl",
    "functionName": "TrunkingV1ListOriginationUrl",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{TrunkSid}/OriginationUrls",
    "tags": [
      "TrunkingV1OriginationUrl"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:ListPhoneNumber",
    "operationId": "ListPhoneNumber",
    "functionName": "TrunkingV1ListPhoneNumber",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks/{TrunkSid}/PhoneNumbers",
    "tags": [
      "TrunkingV1PhoneNumber"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:ListTrunk",
    "operationId": "ListTrunk",
    "functionName": "TrunkingV1ListTrunk",
    "specKey": "trunking_v1",
    "method": "GET",
    "path": "/v1/Trunks",
    "tags": [
      "TrunkingV1Trunk"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:UpdateOriginationUrl",
    "operationId": "UpdateOriginationUrl",
    "functionName": "TrunkingV1UpdateOriginationUrl",
    "specKey": "trunking_v1",
    "method": "POST",
    "path": "/v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}",
    "tags": [
      "TrunkingV1OriginationUrl"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:UpdateRecording",
    "operationId": "UpdateRecording",
    "functionName": "TrunkingV1UpdateRecording",
    "specKey": "trunking_v1",
    "method": "POST",
    "path": "/v1/Trunks/{TrunkSid}/Recording",
    "tags": [
      "TrunkingV1Recording"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "trunking_v1:UpdateTrunk",
    "operationId": "UpdateTrunk",
    "functionName": "TrunkingV1UpdateTrunk",
    "specKey": "trunking_v1",
    "method": "POST",
    "path": "/v1/Trunks/{Sid}",
    "tags": [
      "TrunkingV1Trunk"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_trunking_v1.json"
  },
  {
    "id": "voice_v1:CreateByocTrunk",
    "operationId": "CreateByocTrunk",
    "functionName": "VoiceV1CreateByocTrunk",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/ByocTrunks",
    "tags": [
      "VoiceV1ByocTrunk"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:CreateConnectionPolicy",
    "operationId": "CreateConnectionPolicy",
    "functionName": "VoiceV1CreateConnectionPolicy",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/ConnectionPolicies",
    "tags": [
      "VoiceV1ConnectionPolicy"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:CreateConnectionPolicyTarget",
    "operationId": "CreateConnectionPolicyTarget",
    "functionName": "VoiceV1CreateConnectionPolicyTarget",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets",
    "tags": [
      "VoiceV1ConnectionPolicyTarget"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:CreateDialingPermissionsCountryBulkUpdate",
    "operationId": "CreateDialingPermissionsCountryBulkUpdate",
    "functionName": "VoiceV1CreateDialingPermissionsCountryBulkUpdate",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/DialingPermissions/BulkCountryUpdates",
    "tags": [
      "VoiceV1BulkCountryUpdate"
    ],
    "summary": "Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:CreateIpRecord",
    "operationId": "CreateIpRecord",
    "functionName": "VoiceV1CreateIpRecord",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/IpRecords",
    "tags": [
      "VoiceV1IpRecord"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:CreateSourceIpMapping",
    "operationId": "CreateSourceIpMapping",
    "functionName": "VoiceV1CreateSourceIpMapping",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/SourceIpMappings",
    "tags": [
      "VoiceV1SourceIpMapping"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:DeleteArchivedCall",
    "operationId": "DeleteArchivedCall",
    "functionName": "VoiceV1DeleteArchivedCall",
    "specKey": "voice_v1",
    "method": "DELETE",
    "path": "/v1/Archives/{Date}/Calls/{Sid}",
    "tags": [
      "VoiceV1ArchivedCall"
    ],
    "summary": "Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:DeleteByocTrunk",
    "operationId": "DeleteByocTrunk",
    "functionName": "VoiceV1DeleteByocTrunk",
    "specKey": "voice_v1",
    "method": "DELETE",
    "path": "/v1/ByocTrunks/{Sid}",
    "tags": [
      "VoiceV1ByocTrunk"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:DeleteConnectionPolicy",
    "operationId": "DeleteConnectionPolicy",
    "functionName": "VoiceV1DeleteConnectionPolicy",
    "specKey": "voice_v1",
    "method": "DELETE",
    "path": "/v1/ConnectionPolicies/{Sid}",
    "tags": [
      "VoiceV1ConnectionPolicy"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:DeleteConnectionPolicyTarget",
    "operationId": "DeleteConnectionPolicyTarget",
    "functionName": "VoiceV1DeleteConnectionPolicyTarget",
    "specKey": "voice_v1",
    "method": "DELETE",
    "path": "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}",
    "tags": [
      "VoiceV1ConnectionPolicyTarget"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:DeleteIpRecord",
    "operationId": "DeleteIpRecord",
    "functionName": "VoiceV1DeleteIpRecord",
    "specKey": "voice_v1",
    "method": "DELETE",
    "path": "/v1/IpRecords/{Sid}",
    "tags": [
      "VoiceV1IpRecord"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:DeleteSourceIpMapping",
    "operationId": "DeleteSourceIpMapping",
    "functionName": "VoiceV1DeleteSourceIpMapping",
    "specKey": "voice_v1",
    "method": "DELETE",
    "path": "/v1/SourceIpMappings/{Sid}",
    "tags": [
      "VoiceV1SourceIpMapping"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:FetchByocTrunk",
    "operationId": "FetchByocTrunk",
    "functionName": "VoiceV1FetchByocTrunk",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/ByocTrunks/{Sid}",
    "tags": [
      "VoiceV1ByocTrunk"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:FetchConnectionPolicy",
    "operationId": "FetchConnectionPolicy",
    "functionName": "VoiceV1FetchConnectionPolicy",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/ConnectionPolicies/{Sid}",
    "tags": [
      "VoiceV1ConnectionPolicy"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:FetchConnectionPolicyTarget",
    "operationId": "FetchConnectionPolicyTarget",
    "functionName": "VoiceV1FetchConnectionPolicyTarget",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}",
    "tags": [
      "VoiceV1ConnectionPolicyTarget"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:FetchDialingPermissionsCountry",
    "operationId": "FetchDialingPermissionsCountry",
    "functionName": "VoiceV1FetchDialingPermissionsCountry",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/DialingPermissions/Countries/{IsoCode}",
    "tags": [
      "VoiceV1Country"
    ],
    "summary": "Retrieve voice dialing country permissions identified by the given ISO country code",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:FetchDialingPermissionsSettings",
    "operationId": "FetchDialingPermissionsSettings",
    "functionName": "VoiceV1FetchDialingPermissionsSettings",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/Settings",
    "tags": [
      "VoiceV1Settings"
    ],
    "summary": "Retrieve voice dialing permissions inheritance for the sub-account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:FetchIpRecord",
    "operationId": "FetchIpRecord",
    "functionName": "VoiceV1FetchIpRecord",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/IpRecords/{Sid}",
    "tags": [
      "VoiceV1IpRecord"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:FetchSourceIpMapping",
    "operationId": "FetchSourceIpMapping",
    "functionName": "VoiceV1FetchSourceIpMapping",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/SourceIpMappings/{Sid}",
    "tags": [
      "VoiceV1SourceIpMapping"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:ListByocTrunk",
    "operationId": "ListByocTrunk",
    "functionName": "VoiceV1ListByocTrunk",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/ByocTrunks",
    "tags": [
      "VoiceV1ByocTrunk"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:ListConnectionPolicy",
    "operationId": "ListConnectionPolicy",
    "functionName": "VoiceV1ListConnectionPolicy",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/ConnectionPolicies",
    "tags": [
      "VoiceV1ConnectionPolicy"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:ListConnectionPolicyTarget",
    "operationId": "ListConnectionPolicyTarget",
    "functionName": "VoiceV1ListConnectionPolicyTarget",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets",
    "tags": [
      "VoiceV1ConnectionPolicyTarget"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:ListDialingPermissionsCountry",
    "operationId": "ListDialingPermissionsCountry",
    "functionName": "VoiceV1ListDialingPermissionsCountry",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/DialingPermissions/Countries",
    "tags": [
      "VoiceV1Country"
    ],
    "summary": "Retrieve all voice dialing country permissions for this account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:ListDialingPermissionsHrsPrefixes",
    "operationId": "ListDialingPermissionsHrsPrefixes",
    "functionName": "VoiceV1ListDialingPermissionsHrsPrefixes",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes",
    "tags": [
      "VoiceV1HighriskSpecialPrefix"
    ],
    "summary": "Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:ListIpRecord",
    "operationId": "ListIpRecord",
    "functionName": "VoiceV1ListIpRecord",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/IpRecords",
    "tags": [
      "VoiceV1IpRecord"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:ListSourceIpMapping",
    "operationId": "ListSourceIpMapping",
    "functionName": "VoiceV1ListSourceIpMapping",
    "specKey": "voice_v1",
    "method": "GET",
    "path": "/v1/SourceIpMappings",
    "tags": [
      "VoiceV1SourceIpMapping"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:UpdateByocTrunk",
    "operationId": "UpdateByocTrunk",
    "functionName": "VoiceV1UpdateByocTrunk",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/ByocTrunks/{Sid}",
    "tags": [
      "VoiceV1ByocTrunk"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:UpdateConnectionPolicy",
    "operationId": "UpdateConnectionPolicy",
    "functionName": "VoiceV1UpdateConnectionPolicy",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/ConnectionPolicies/{Sid}",
    "tags": [
      "VoiceV1ConnectionPolicy"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:UpdateConnectionPolicyTarget",
    "operationId": "UpdateConnectionPolicyTarget",
    "functionName": "VoiceV1UpdateConnectionPolicyTarget",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}",
    "tags": [
      "VoiceV1ConnectionPolicyTarget"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:UpdateDialingPermissionsSettings",
    "operationId": "UpdateDialingPermissionsSettings",
    "functionName": "VoiceV1UpdateDialingPermissionsSettings",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/Settings",
    "tags": [
      "VoiceV1Settings"
    ],
    "summary": "Update voice dialing permissions inheritance for the sub-account",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:UpdateIpRecord",
    "operationId": "UpdateIpRecord",
    "functionName": "VoiceV1UpdateIpRecord",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/IpRecords/{Sid}",
    "tags": [
      "VoiceV1IpRecord"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v1:UpdateSourceIpMapping",
    "operationId": "UpdateSourceIpMapping",
    "functionName": "VoiceV1UpdateSourceIpMapping",
    "specKey": "voice_v1",
    "method": "POST",
    "path": "/v1/SourceIpMappings/{Sid}",
    "tags": [
      "VoiceV1SourceIpMapping"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v1.json"
  },
  {
    "id": "voice_v3:CreateV3Transcriptions",
    "operationId": "CreateV3Transcriptions",
    "functionName": "VoiceV3CreateV3Transcriptions",
    "specKey": "voice_v3",
    "method": "POST",
    "path": "/v3/Transcriptions",
    "tags": [
      "V3Transcriptions"
    ],
    "summary": "Creates a new transcription from either a sourceId or a mediaUrl. Either sourceId or mediaUrl must be provided, but not both.",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v3.json"
  },
  {
    "id": "voice_v3:FetchTranscription",
    "operationId": "FetchTranscription",
    "functionName": "VoiceV3FetchTranscription",
    "specKey": "voice_v3",
    "method": "GET",
    "path": "/v3/Transcriptions/{transcriptionId}",
    "tags": [
      "V3Transcriptions"
    ],
    "summary": "Fetch metadata about a specific transcription",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_voice_v3.json"
  }
] as const;

// Hardened literal operation keys for generated SDK typing.
export const TWILIO_VOICE_FULL_API_OPERATION_IDS = [
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
  "api_v2010:UpdateConference",
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
  "api_v2010:UpdateStream",
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
  "insights_v1:UpdateAnnotation",
  "insights_v2:CreateAccountReport",
  "insights_v2:CreateInboundPhoneNumbersReport",
  "insights_v2:CreateOutboundPhoneNumbersReport",
  "insights_v2:FetchAccountReport",
  "insights_v2:ListInboundPhoneNumbersReport",
  "insights_v2:ListOutboundPhoneNumbersReport",
  "insights_v3:CreateQueryResults",
  "insights_v3:FetchMetadata",
  "insights_v3:FetchQueryResults",
  "trunking_v1:CreateCredentialList",
  "trunking_v1:CreateIpAccessControlList",
  "trunking_v1:CreateOriginationUrl",
  "trunking_v1:CreatePhoneNumber",
  "trunking_v1:CreateTrunk",
  "trunking_v1:DeleteCredentialList",
  "trunking_v1:DeleteIpAccessControlList",
  "trunking_v1:DeleteOriginationUrl",
  "trunking_v1:DeletePhoneNumber",
  "trunking_v1:DeleteTrunk",
  "trunking_v1:FetchCredentialList",
  "trunking_v1:FetchIpAccessControlList",
  "trunking_v1:FetchOriginationUrl",
  "trunking_v1:FetchPhoneNumber",
  "trunking_v1:FetchRecording",
  "trunking_v1:FetchTrunk",
  "trunking_v1:ListCredentialList",
  "trunking_v1:ListIpAccessControlList",
  "trunking_v1:ListOriginationUrl",
  "trunking_v1:ListPhoneNumber",
  "trunking_v1:ListTrunk",
  "trunking_v1:UpdateOriginationUrl",
  "trunking_v1:UpdateRecording",
  "trunking_v1:UpdateTrunk",
  "voice_v1:CreateByocTrunk",
  "voice_v1:CreateConnectionPolicy",
  "voice_v1:CreateConnectionPolicyTarget",
  "voice_v1:CreateDialingPermissionsCountryBulkUpdate",
  "voice_v1:CreateIpRecord",
  "voice_v1:CreateSourceIpMapping",
  "voice_v1:DeleteArchivedCall",
  "voice_v1:DeleteByocTrunk",
  "voice_v1:DeleteConnectionPolicy",
  "voice_v1:DeleteConnectionPolicyTarget",
  "voice_v1:DeleteIpRecord",
  "voice_v1:DeleteSourceIpMapping",
  "voice_v1:FetchByocTrunk",
  "voice_v1:FetchConnectionPolicy",
  "voice_v1:FetchConnectionPolicyTarget",
  "voice_v1:FetchDialingPermissionsCountry",
  "voice_v1:FetchDialingPermissionsSettings",
  "voice_v1:FetchIpRecord",
  "voice_v1:FetchSourceIpMapping",
  "voice_v1:ListByocTrunk",
  "voice_v1:ListConnectionPolicy",
  "voice_v1:ListConnectionPolicyTarget",
  "voice_v1:ListDialingPermissionsCountry",
  "voice_v1:ListDialingPermissionsHrsPrefixes",
  "voice_v1:ListIpRecord",
  "voice_v1:ListSourceIpMapping",
  "voice_v1:UpdateByocTrunk",
  "voice_v1:UpdateConnectionPolicy",
  "voice_v1:UpdateConnectionPolicyTarget",
  "voice_v1:UpdateDialingPermissionsSettings",
  "voice_v1:UpdateIpRecord",
  "voice_v1:UpdateSourceIpMapping",
  "voice_v3:CreateV3Transcriptions",
  "voice_v3:FetchTranscription"
] as const;
export const TWILIO_VOICE_FULL_API_OPERATION_OPERATION_IDS = [
  "CreateApplication",
  "CreateCall",
  "CreateCallRecording",
  "CreateParticipant",
  "CreatePayments",
  "CreateQueue",
  "CreateRealtimeTranscription",
  "CreateSipCredential",
  "CreateSipCredentialList",
  "CreateSipCredentialListMapping",
  "CreateSipDomain",
  "CreateSipIpAccessControlList",
  "CreateSipIpAccessControlListMapping",
  "CreateSipIpAddress",
  "CreateSiprec",
  "CreateStream",
  "CreateUserDefinedMessage",
  "CreateUserDefinedMessageSubscription",
  "DeleteApplication",
  "DeleteCall",
  "DeleteCallRecording",
  "DeleteConferenceRecording",
  "DeleteOutgoingCallerId",
  "DeleteParticipant",
  "DeleteQueue",
  "DeleteRecording",
  "DeleteRecordingTranscription",
  "DeleteSipCredential",
  "DeleteSipCredentialList",
  "DeleteSipCredentialListMapping",
  "DeleteSipDomain",
  "DeleteSipIpAccessControlList",
  "DeleteSipIpAccessControlListMapping",
  "DeleteSipIpAddress",
  "DeleteTranscription",
  "DeleteUserDefinedMessageSubscription",
  "FetchApplication",
  "FetchCall",
  "FetchCallNotification",
  "FetchCallRecording",
  "FetchConference",
  "FetchConferenceRecording",
  "FetchMember",
  "FetchOutgoingCallerId",
  "FetchParticipant",
  "FetchQueue",
  "FetchRecording",
  "FetchRecordingTranscription",
  "FetchSipCredential",
  "FetchSipCredentialList",
  "FetchSipCredentialListMapping",
  "FetchSipDomain",
  "FetchSipIpAccessControlList",
  "FetchSipIpAccessControlListMapping",
  "FetchSipIpAddress",
  "FetchTranscription",
  "ListApplication",
  "ListCall",
  "ListCallNotification",
  "ListCallRecording",
  "ListConference",
  "ListConferenceRecording",
  "ListMember",
  "ListOutgoingCallerId",
  "ListParticipant",
  "ListQueue",
  "ListRecording",
  "ListRecordingTranscription",
  "ListSipCredential",
  "ListSipCredentialList",
  "ListSipCredentialListMapping",
  "ListSipDomain",
  "ListSipIpAccessControlList",
  "ListSipIpAccessControlListMapping",
  "ListSipIpAddress",
  "ListTranscription",
  "UpdateApplication",
  "UpdateCall",
  "UpdateCallRecording",
  "UpdateConference",
  "UpdateConferenceRecording",
  "UpdateMember",
  "UpdateOutgoingCallerId",
  "UpdateParticipant",
  "UpdatePayments",
  "UpdateQueue",
  "UpdateRealtimeTranscription",
  "UpdateSipCredential",
  "UpdateSipCredentialList",
  "UpdateSipDomain",
  "UpdateSipIpAccessControlList",
  "UpdateSipIpAddress",
  "UpdateSiprec",
  "UpdateStream",
  "FetchAccountSettings",
  "FetchAnnotation",
  "FetchConferenceParticipant",
  "FetchSummary",
  "FetchVideoParticipantSummary",
  "FetchVideoRoomSummary",
  "ListCallSummaries",
  "ListConferenceParticipant",
  "ListEvent",
  "ListMetric",
  "ListVideoParticipantSummary",
  "ListVideoRoomSummary",
  "UpdateAccountSettings",
  "UpdateAnnotation",
  "CreateAccountReport",
  "CreateInboundPhoneNumbersReport",
  "CreateOutboundPhoneNumbersReport",
  "FetchAccountReport",
  "ListInboundPhoneNumbersReport",
  "ListOutboundPhoneNumbersReport",
  "CreateQueryResults",
  "FetchMetadata",
  "FetchQueryResults",
  "CreateCredentialList",
  "CreateIpAccessControlList",
  "CreateOriginationUrl",
  "CreatePhoneNumber",
  "CreateTrunk",
  "DeleteCredentialList",
  "DeleteIpAccessControlList",
  "DeleteOriginationUrl",
  "DeletePhoneNumber",
  "DeleteTrunk",
  "FetchCredentialList",
  "FetchIpAccessControlList",
  "FetchOriginationUrl",
  "FetchPhoneNumber",
  "FetchTrunk",
  "ListCredentialList",
  "ListIpAccessControlList",
  "ListOriginationUrl",
  "ListPhoneNumber",
  "ListTrunk",
  "UpdateOriginationUrl",
  "UpdateRecording",
  "UpdateTrunk",
  "CreateByocTrunk",
  "CreateConnectionPolicy",
  "CreateConnectionPolicyTarget",
  "CreateDialingPermissionsCountryBulkUpdate",
  "CreateIpRecord",
  "CreateSourceIpMapping",
  "DeleteArchivedCall",
  "DeleteByocTrunk",
  "DeleteConnectionPolicy",
  "DeleteConnectionPolicyTarget",
  "DeleteIpRecord",
  "DeleteSourceIpMapping",
  "FetchByocTrunk",
  "FetchConnectionPolicy",
  "FetchConnectionPolicyTarget",
  "FetchDialingPermissionsCountry",
  "FetchDialingPermissionsSettings",
  "FetchIpRecord",
  "FetchSourceIpMapping",
  "ListByocTrunk",
  "ListConnectionPolicy",
  "ListConnectionPolicyTarget",
  "ListDialingPermissionsCountry",
  "ListDialingPermissionsHrsPrefixes",
  "ListIpRecord",
  "ListSourceIpMapping",
  "UpdateByocTrunk",
  "UpdateConnectionPolicy",
  "UpdateConnectionPolicyTarget",
  "UpdateDialingPermissionsSettings",
  "UpdateIpRecord",
  "UpdateSourceIpMapping",
  "CreateV3Transcriptions"
] as const;
// End hardened literal operation keys.

export type TwilioVoiceFullApiOperation = typeof TWILIO_VOICE_FULL_API_OPERATIONS[number];
export type TwilioVoiceFullApiOperationId = TwilioVoiceFullApiOperation["id"];

export const TWILIO_VOICE_FULL_API_OPERATION_BY_ID = new Map<string, TwilioVoiceFullApiOperation>(
  TWILIO_VOICE_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]),
);
