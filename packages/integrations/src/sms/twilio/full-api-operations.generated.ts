// Generated from Twilio's official twilio-oai OpenAPI specs (https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json).
// Do not edit by hand; run scripts/generate-twilio-full-api.mjs after checking upstream docs.

export const TWILIO_SMS_FULL_API_SPEC_SOURCE = "https://github.com/twilio/twilio-oai" as const;
export const TWILIO_SMS_FULL_API_SPEC_VERSION = "twilio-oai-main-2026-06-17" as const;
export const TWILIO_SMS_FULL_API_GENERATED_AT = "2026-06-17" as const;
export const TWILIO_SMS_FULL_API_OPERATION_COUNT = 309 as const;

export const TWILIO_SMS_FULL_API_SPECS = [
  {
    "key": "api_v2010",
    "file": "twilio_api_v2010.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json",
    "version": "1.0.0",
    "documentedOperationCount": 197,
    "includedOperationCount": 12,
    "includeTags": [
      "Api20100401Message",
      "Api20100401MediaInstance",
      "Api20100401Media",
      "Api20100401Feedback",
      "Api20100401ShortCode"
    ]
  },
  {
    "key": "messaging_v1",
    "file": "twilio_messaging_v1.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json",
    "version": "1.0.0",
    "documentedOperationCount": 58,
    "includedOperationCount": 58
  },
  {
    "key": "messaging_v2",
    "file": "twilio_messaging_v2.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v2.json",
    "version": "1.0.0",
    "documentedOperationCount": 7,
    "includedOperationCount": 7
  },
  {
    "key": "messaging_v3",
    "file": "twilio_messaging_v3.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v3.json",
    "version": "1.0.0",
    "documentedOperationCount": 1,
    "includedOperationCount": 1
  },
  {
    "key": "conversations_v1",
    "file": "twilio_conversations_v1.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json",
    "version": "1.0.0",
    "documentedOperationCount": 103,
    "includedOperationCount": 103
  },
  {
    "key": "conversations_v2",
    "file": "twilio_conversations_v2.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json",
    "version": "2.0.0",
    "documentedOperationCount": 21,
    "includedOperationCount": 21
  },
  {
    "key": "content_v1",
    "file": "twilio_content_v1.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json",
    "version": "1.1.0",
    "documentedOperationCount": 9,
    "includedOperationCount": 9
  },
  {
    "key": "content_v2",
    "file": "twilio_content_v2.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v2.json",
    "version": "1.0.0",
    "documentedOperationCount": 2,
    "includedOperationCount": 2
  },
  {
    "key": "verify_v2",
    "file": "twilio_verify_v2.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json",
    "version": "1.0.0",
    "documentedOperationCount": 57,
    "includedOperationCount": 57
  },
  {
    "key": "verify_v3",
    "file": "twilio_verify_v3.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v3.json",
    "version": "1.0.0",
    "documentedOperationCount": 0,
    "includedOperationCount": 0
  },
  {
    "key": "studio_v1",
    "file": "twilio_studio_v1.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json",
    "version": "1.0.0",
    "documentedOperationCount": 20,
    "includedOperationCount": 20
  },
  {
    "key": "studio_v2",
    "file": "twilio_studio_v2.json",
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json",
    "version": "1.0.0",
    "documentedOperationCount": 19,
    "includedOperationCount": 19
  }
] as const;

export const TWILIO_SMS_FULL_API_OPERATIONS = [
  {
    "id": "api_v2010:CreateMessage",
    "operationId": "CreateMessage",
    "functionName": "ApiV2010CreateMessage",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Messages.json",
    "tags": [
      "Api20100401Message"
    ],
    "summary": "Send a message",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:CreateMessageFeedback",
    "operationId": "CreateMessageFeedback",
    "functionName": "ApiV2010CreateMessageFeedback",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json",
    "tags": [
      "Api20100401Feedback"
    ],
    "summary": "Create Message Feedback to confirm a tracked user action was performed by the recipient of the associated Message",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteMedia",
    "operationId": "DeleteMedia",
    "functionName": "ApiV2010DeleteMedia",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json",
    "tags": [
      "Api20100401MediaInstance"
    ],
    "summary": "Delete the Media resource.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:DeleteMessage",
    "operationId": "DeleteMessage",
    "functionName": "ApiV2010DeleteMessage",
    "specKey": "api_v2010",
    "method": "DELETE",
    "path": "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json",
    "tags": [
      "Api20100401Message"
    ],
    "summary": "Deletes a Message resource from your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchMedia",
    "operationId": "FetchMedia",
    "functionName": "ApiV2010FetchMedia",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json",
    "tags": [
      "Api20100401MediaInstance"
    ],
    "summary": "Fetch a single Media resource associated with a specific Message resource",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchMessage",
    "operationId": "FetchMessage",
    "functionName": "ApiV2010FetchMessage",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json",
    "tags": [
      "Api20100401Message"
    ],
    "summary": "Fetch a specific Message",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:FetchShortCode",
    "operationId": "FetchShortCode",
    "functionName": "ApiV2010FetchShortCode",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json",
    "tags": [
      "Api20100401ShortCode"
    ],
    "summary": "Fetch an instance of a short code",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListMedia",
    "operationId": "ListMedia",
    "functionName": "ApiV2010ListMedia",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json",
    "tags": [
      "Api20100401Media"
    ],
    "summary": "Read a list of Media resources associated with a specific Message resource",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListMessage",
    "operationId": "ListMessage",
    "functionName": "ApiV2010ListMessage",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/Messages.json",
    "tags": [
      "Api20100401Message"
    ],
    "summary": "Retrieve a list of Message resources associated with a Twilio Account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:ListShortCode",
    "operationId": "ListShortCode",
    "functionName": "ApiV2010ListShortCode",
    "specKey": "api_v2010",
    "method": "GET",
    "path": "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json",
    "tags": [
      "Api20100401ShortCode"
    ],
    "summary": "Retrieve a list of short-codes belonging to the account used to make the request",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateMessage",
    "operationId": "UpdateMessage",
    "functionName": "ApiV2010UpdateMessage",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json",
    "tags": [
      "Api20100401Message"
    ],
    "summary": "Update a Message resource (used to redact Message `body` text and to cancel not-yet-sent messages)",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "api_v2010:UpdateShortCode",
    "operationId": "UpdateShortCode",
    "functionName": "ApiV2010UpdateShortCode",
    "specKey": "api_v2010",
    "method": "POST",
    "path": "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json",
    "tags": [
      "Api20100401ShortCode"
    ],
    "summary": "Update a short code with the following parameters",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json"
  },
  {
    "id": "content_v1:CreateApprovalCreate",
    "operationId": "CreateApprovalCreate",
    "functionName": "ContentV1CreateApprovalCreate",
    "specKey": "content_v1",
    "method": "POST",
    "path": "/v1/Content/{ContentSid}/ApprovalRequests/whatsapp",
    "tags": [
      "Contentv1ApprovalCreate"
    ],
    "summary": "Create Content Approval Request",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json"
  },
  {
    "id": "content_v1:CreateContent",
    "operationId": "CreateContent",
    "functionName": "ContentV1CreateContent",
    "specKey": "content_v1",
    "method": "POST",
    "path": "/v1/Content",
    "tags": [
      "Contentv1Content"
    ],
    "summary": "Create Content",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json"
  },
  {
    "id": "content_v1:DeleteContent",
    "operationId": "DeleteContent",
    "functionName": "ContentV1DeleteContent",
    "specKey": "content_v1",
    "method": "DELETE",
    "path": "/v1/Content/{Sid}",
    "tags": [
      "Contentv1Content"
    ],
    "summary": "Delete Content",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json"
  },
  {
    "id": "content_v1:FetchApprovalFetch",
    "operationId": "FetchApprovalFetch",
    "functionName": "ContentV1FetchApprovalFetch",
    "specKey": "content_v1",
    "method": "GET",
    "path": "/v1/Content/{Sid}/ApprovalRequests",
    "tags": [
      "Contentv1ApprovalFetch"
    ],
    "summary": "Fetch Approval Status",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json"
  },
  {
    "id": "content_v1:FetchContent",
    "operationId": "FetchContent",
    "functionName": "ContentV1FetchContent",
    "specKey": "content_v1",
    "method": "GET",
    "path": "/v1/Content/{Sid}",
    "tags": [
      "Contentv1Content"
    ],
    "summary": "Fetch Content",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json"
  },
  {
    "id": "content_v1:ListContent",
    "operationId": "ListContent",
    "functionName": "ContentV1ListContent",
    "specKey": "content_v1",
    "method": "GET",
    "path": "/v1/Content",
    "tags": [
      "Contentv1Content"
    ],
    "summary": "List Contents",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json"
  },
  {
    "id": "content_v1:ListContentAndApprovals",
    "operationId": "ListContentAndApprovals",
    "functionName": "ContentV1ListContentAndApprovals",
    "specKey": "content_v1",
    "method": "GET",
    "path": "/v1/ContentAndApprovals",
    "tags": [
      "Contentv1ContentAndApprovals"
    ],
    "summary": "List Content Approvals",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json"
  },
  {
    "id": "content_v1:ListLegacyContent",
    "operationId": "ListLegacyContent",
    "functionName": "ContentV1ListLegacyContent",
    "specKey": "content_v1",
    "method": "GET",
    "path": "/v1/LegacyContent",
    "tags": [
      "Contentv1LegacyContent"
    ],
    "summary": "List Legacy Contents",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json"
  },
  {
    "id": "content_v1:UpdateContent",
    "operationId": "UpdateContent",
    "functionName": "ContentV1UpdateContent",
    "specKey": "content_v1",
    "method": "PUT",
    "path": "/v1/Content/{Sid}",
    "tags": [
      "Contentv1Content"
    ],
    "summary": "Update Content",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v1.json"
  },
  {
    "id": "content_v2:ListContent",
    "operationId": "ListContent",
    "functionName": "ContentV2ListContent",
    "specKey": "content_v2",
    "method": "GET",
    "path": "/v2/Content",
    "tags": [
      "ContentV2Content"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v2.json"
  },
  {
    "id": "content_v2:ListContentAndApprovals",
    "operationId": "ListContentAndApprovals",
    "functionName": "ContentV2ListContentAndApprovals",
    "specKey": "content_v2",
    "method": "GET",
    "path": "/v2/ContentAndApprovals",
    "tags": [
      "ContentV2ContentAndApprovals"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_content_v2.json"
  },
  {
    "id": "conversations_v1:CreateConfigurationAddress",
    "operationId": "CreateConfigurationAddress",
    "functionName": "ConversationsV1CreateConfigurationAddress",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Configuration/Addresses",
    "tags": [
      "ConversationsV1AddressConfiguration"
    ],
    "summary": "Create a new address configuration",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateConversation",
    "operationId": "CreateConversation",
    "functionName": "ConversationsV1CreateConversation",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Conversations",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Create a new conversation in your account's default service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateConversationMessage",
    "operationId": "CreateConversationMessage",
    "functionName": "ConversationsV1CreateConversationMessage",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Conversations/{ConversationSid}/Messages",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Add a new message to the conversation",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateConversationParticipant",
    "operationId": "CreateConversationParticipant",
    "functionName": "ConversationsV1CreateConversationParticipant",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Conversations/{ConversationSid}/Participants",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Add a new participant to the conversation",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateConversationScopedWebhook",
    "operationId": "CreateConversationScopedWebhook",
    "functionName": "ConversationsV1CreateConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Conversations/{ConversationSid}/Webhooks",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Create a new webhook scoped to the conversation",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateConversationWithParticipants",
    "operationId": "CreateConversationWithParticipants",
    "functionName": "ConversationsV1CreateConversationWithParticipants",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/ConversationWithParticipants",
    "tags": [
      "ConversationsV1ConversationWithParticipants"
    ],
    "summary": "Create a new conversation with the list of participants in your account's default service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateCredential",
    "operationId": "CreateCredential",
    "functionName": "ConversationsV1CreateCredential",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Credentials",
    "tags": [
      "ConversationsV1Credential"
    ],
    "summary": "Add a new push notification credential to your account",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateRole",
    "operationId": "CreateRole",
    "functionName": "ConversationsV1CreateRole",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Roles",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Create a new user role in your account's default service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateService",
    "operationId": "CreateService",
    "functionName": "ConversationsV1CreateService",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services",
    "tags": [
      "ConversationsV1Service"
    ],
    "summary": "Create a new conversation service on your account",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateServiceConversation",
    "operationId": "CreateServiceConversation",
    "functionName": "ConversationsV1CreateServiceConversation",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Conversations",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Create a new conversation in your service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateServiceConversationMessage",
    "operationId": "CreateServiceConversationMessage",
    "functionName": "ConversationsV1CreateServiceConversationMessage",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Add a new message to the conversation in a specific service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateServiceConversationParticipant",
    "operationId": "CreateServiceConversationParticipant",
    "functionName": "ConversationsV1CreateServiceConversationParticipant",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Add a new participant to the conversation in a specific service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateServiceConversationScopedWebhook",
    "operationId": "CreateServiceConversationScopedWebhook",
    "functionName": "ConversationsV1CreateServiceConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Create a new webhook scoped to the conversation in a specific service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateServiceConversationWithParticipants",
    "operationId": "CreateServiceConversationWithParticipants",
    "functionName": "ConversationsV1CreateServiceConversationWithParticipants",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/ConversationWithParticipants",
    "tags": [
      "ConversationsV1ConversationWithParticipants"
    ],
    "summary": "Create a new conversation with the list of participants in your account's default service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateServiceRole",
    "operationId": "CreateServiceRole",
    "functionName": "ConversationsV1CreateServiceRole",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Roles",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Create a new user role in your service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateServiceUser",
    "operationId": "CreateServiceUser",
    "functionName": "ConversationsV1CreateServiceUser",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Users",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Add a new conversation user to your service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:CreateUser",
    "operationId": "CreateUser",
    "functionName": "ConversationsV1CreateUser",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Users",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Add a new conversation user to your account's default service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteConfigurationAddress",
    "operationId": "DeleteConfigurationAddress",
    "functionName": "ConversationsV1DeleteConfigurationAddress",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Configuration/Addresses/{Sid}",
    "tags": [
      "ConversationsV1AddressConfiguration"
    ],
    "summary": "Remove an existing address configuration",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteConversation",
    "operationId": "DeleteConversation",
    "functionName": "ConversationsV1DeleteConversation",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Conversations/{Sid}",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Remove a conversation from your account's default service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteConversationMessage",
    "operationId": "DeleteConversationMessage",
    "functionName": "ConversationsV1DeleteConversationMessage",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Conversations/{ConversationSid}/Messages/{Sid}",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Remove a message from the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteConversationParticipant",
    "operationId": "DeleteConversationParticipant",
    "functionName": "ConversationsV1DeleteConversationParticipant",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Conversations/{ConversationSid}/Participants/{Sid}",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Remove a participant from the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteConversationScopedWebhook",
    "operationId": "DeleteConversationScopedWebhook",
    "functionName": "ConversationsV1DeleteConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Remove an existing webhook scoped to the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteCredential",
    "operationId": "DeleteCredential",
    "functionName": "ConversationsV1DeleteCredential",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Credentials/{Sid}",
    "tags": [
      "ConversationsV1Credential"
    ],
    "summary": "Remove a push notification credential from your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteRole",
    "operationId": "DeleteRole",
    "functionName": "ConversationsV1DeleteRole",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Roles/{Sid}",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Remove a user role from your account's default service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteService",
    "operationId": "DeleteService",
    "functionName": "ConversationsV1DeleteService",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Services/{Sid}",
    "tags": [
      "ConversationsV1Service"
    ],
    "summary": "Remove a conversation service with all its nested resources from your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteServiceBinding",
    "operationId": "DeleteServiceBinding",
    "functionName": "ConversationsV1DeleteServiceBinding",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ChatServiceSid}/Bindings/{Sid}",
    "tags": [
      "ConversationsV1Binding"
    ],
    "summary": "Remove a push notification binding from the conversation service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteServiceConversation",
    "operationId": "DeleteServiceConversation",
    "functionName": "ConversationsV1DeleteServiceConversation",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{Sid}",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Remove a conversation from your service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteServiceConversationMessage",
    "operationId": "DeleteServiceConversationMessage",
    "functionName": "ConversationsV1DeleteServiceConversationMessage",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Remove a message from the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteServiceConversationParticipant",
    "operationId": "DeleteServiceConversationParticipant",
    "functionName": "ConversationsV1DeleteServiceConversationParticipant",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Remove a participant from the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteServiceConversationScopedWebhook",
    "operationId": "DeleteServiceConversationScopedWebhook",
    "functionName": "ConversationsV1DeleteServiceConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Remove an existing webhook scoped to the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteServiceRole",
    "operationId": "DeleteServiceRole",
    "functionName": "ConversationsV1DeleteServiceRole",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ChatServiceSid}/Roles/{Sid}",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Remove a user role from your service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteServiceUser",
    "operationId": "DeleteServiceUser",
    "functionName": "ConversationsV1DeleteServiceUser",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ChatServiceSid}/Users/{Sid}",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Remove a conversation user from your service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteServiceUserConversation",
    "operationId": "DeleteServiceUserConversation",
    "functionName": "ConversationsV1DeleteServiceUserConversation",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}",
    "tags": [
      "ConversationsV1UserConversation"
    ],
    "summary": "Delete a specific User Conversation.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteUser",
    "operationId": "DeleteUser",
    "functionName": "ConversationsV1DeleteUser",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Users/{Sid}",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Remove a conversation user from your account's default service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:DeleteUserConversation",
    "operationId": "DeleteUserConversation",
    "functionName": "ConversationsV1DeleteUserConversation",
    "specKey": "conversations_v1",
    "method": "DELETE",
    "path": "/v1/Users/{UserSid}/Conversations/{ConversationSid}",
    "tags": [
      "ConversationsV1UserConversation"
    ],
    "summary": "Delete a specific User Conversation.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchConfiguration",
    "operationId": "FetchConfiguration",
    "functionName": "ConversationsV1FetchConfiguration",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Configuration",
    "tags": [
      "ConversationsV1Configuration"
    ],
    "summary": "Fetch the global configuration of conversations on your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchConfigurationAddress",
    "operationId": "FetchConfigurationAddress",
    "functionName": "ConversationsV1FetchConfigurationAddress",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Configuration/Addresses/{Sid}",
    "tags": [
      "ConversationsV1AddressConfiguration"
    ],
    "summary": "Fetch an address configuration ",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchConfigurationWebhook",
    "operationId": "FetchConfigurationWebhook",
    "functionName": "ConversationsV1FetchConfigurationWebhook",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Configuration/Webhooks",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchConversation",
    "operationId": "FetchConversation",
    "functionName": "ConversationsV1FetchConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations/{Sid}",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Fetch a conversation from your account's default service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchConversationMessage",
    "operationId": "FetchConversationMessage",
    "functionName": "ConversationsV1FetchConversationMessage",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations/{ConversationSid}/Messages/{Sid}",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Fetch a message from the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchConversationMessageReceipt",
    "operationId": "FetchConversationMessageReceipt",
    "functionName": "ConversationsV1FetchConversationMessageReceipt",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}",
    "tags": [
      "ConversationsV1DeliveryReceipt"
    ],
    "summary": "Fetch the delivery and read receipts of the conversation message",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchConversationParticipant",
    "operationId": "FetchConversationParticipant",
    "functionName": "ConversationsV1FetchConversationParticipant",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations/{ConversationSid}/Participants/{Sid}",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Fetch a participant of the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchConversationScopedWebhook",
    "operationId": "FetchConversationScopedWebhook",
    "functionName": "ConversationsV1FetchConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Fetch the configuration of a conversation-scoped webhook",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchCredential",
    "operationId": "FetchCredential",
    "functionName": "ConversationsV1FetchCredential",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Credentials/{Sid}",
    "tags": [
      "ConversationsV1Credential"
    ],
    "summary": "Fetch a push notification credential from your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchRole",
    "operationId": "FetchRole",
    "functionName": "ConversationsV1FetchRole",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Roles/{Sid}",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Fetch a user role from your account's default service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchService",
    "operationId": "FetchService",
    "functionName": "ConversationsV1FetchService",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{Sid}",
    "tags": [
      "ConversationsV1Service"
    ],
    "summary": "Fetch a conversation service from your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceBinding",
    "operationId": "FetchServiceBinding",
    "functionName": "ConversationsV1FetchServiceBinding",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Bindings/{Sid}",
    "tags": [
      "ConversationsV1Binding"
    ],
    "summary": "Fetch a push notification binding from the conversation service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceConfiguration",
    "operationId": "FetchServiceConfiguration",
    "functionName": "ConversationsV1FetchServiceConfiguration",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Configuration",
    "tags": [
      "ConversationsV1Configuration"
    ],
    "summary": "Fetch the configuration of a conversation service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceConversation",
    "operationId": "FetchServiceConversation",
    "functionName": "ConversationsV1FetchServiceConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{Sid}",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Fetch a conversation from your service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceConversationMessage",
    "operationId": "FetchServiceConversationMessage",
    "functionName": "ConversationsV1FetchServiceConversationMessage",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Fetch a message from the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceConversationMessageReceipt",
    "operationId": "FetchServiceConversationMessageReceipt",
    "functionName": "ConversationsV1FetchServiceConversationMessageReceipt",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}",
    "tags": [
      "ConversationsV1DeliveryReceipt"
    ],
    "summary": "Fetch the delivery and read receipts of the conversation message",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceConversationParticipant",
    "operationId": "FetchServiceConversationParticipant",
    "functionName": "ConversationsV1FetchServiceConversationParticipant",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Fetch a participant of the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceConversationScopedWebhook",
    "operationId": "FetchServiceConversationScopedWebhook",
    "functionName": "ConversationsV1FetchServiceConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Fetch the configuration of a conversation-scoped webhook",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceNotification",
    "operationId": "FetchServiceNotification",
    "functionName": "ConversationsV1FetchServiceNotification",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Configuration/Notifications",
    "tags": [
      "ConversationsV1Notification"
    ],
    "summary": "Fetch push notification service settings",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceRole",
    "operationId": "FetchServiceRole",
    "functionName": "ConversationsV1FetchServiceRole",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Roles/{Sid}",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Fetch a user role from your service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceUser",
    "operationId": "FetchServiceUser",
    "functionName": "ConversationsV1FetchServiceUser",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Users/{Sid}",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Fetch a conversation user from your service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceUserConversation",
    "operationId": "FetchServiceUserConversation",
    "functionName": "ConversationsV1FetchServiceUserConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}",
    "tags": [
      "ConversationsV1UserConversation"
    ],
    "summary": "Fetch a specific User Conversation.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchServiceWebhookConfiguration",
    "operationId": "FetchServiceWebhookConfiguration",
    "functionName": "ConversationsV1FetchServiceWebhookConfiguration",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Configuration/Webhooks",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Fetch a specific service webhook configuration.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchUser",
    "operationId": "FetchUser",
    "functionName": "ConversationsV1FetchUser",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Users/{Sid}",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Fetch a conversation user from your account's default service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:FetchUserConversation",
    "operationId": "FetchUserConversation",
    "functionName": "ConversationsV1FetchUserConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Users/{UserSid}/Conversations/{ConversationSid}",
    "tags": [
      "ConversationsV1UserConversation"
    ],
    "summary": "Fetch a specific User Conversation.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListConfigurationAddress",
    "operationId": "ListConfigurationAddress",
    "functionName": "ConversationsV1ListConfigurationAddress",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Configuration/Addresses",
    "tags": [
      "ConversationsV1AddressConfiguration"
    ],
    "summary": "Retrieve a list of address configurations for an account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListConversation",
    "operationId": "ListConversation",
    "functionName": "ConversationsV1ListConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Retrieve a list of conversations in your account's default service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListConversationMessage",
    "operationId": "ListConversationMessage",
    "functionName": "ConversationsV1ListConversationMessage",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations/{ConversationSid}/Messages",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Retrieve a list of all messages in the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListConversationMessageReceipt",
    "operationId": "ListConversationMessageReceipt",
    "functionName": "ConversationsV1ListConversationMessageReceipt",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts",
    "tags": [
      "ConversationsV1DeliveryReceipt"
    ],
    "summary": "Retrieve a list of all delivery and read receipts of the conversation message",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListConversationParticipant",
    "operationId": "ListConversationParticipant",
    "functionName": "ConversationsV1ListConversationParticipant",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations/{ConversationSid}/Participants",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Retrieve a list of all participants of the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListConversationScopedWebhook",
    "operationId": "ListConversationScopedWebhook",
    "functionName": "ConversationsV1ListConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Conversations/{ConversationSid}/Webhooks",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Retrieve a list of all webhooks scoped to the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListCredential",
    "operationId": "ListCredential",
    "functionName": "ConversationsV1ListCredential",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Credentials",
    "tags": [
      "ConversationsV1Credential"
    ],
    "summary": "Retrieve a list of all push notification credentials on your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListParticipantConversation",
    "operationId": "ListParticipantConversation",
    "functionName": "ConversationsV1ListParticipantConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/ParticipantConversations",
    "tags": [
      "ConversationsV1ParticipantConversation"
    ],
    "summary": "Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListRole",
    "operationId": "ListRole",
    "functionName": "ConversationsV1ListRole",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Roles",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Retrieve a list of all user roles in your account's default service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListService",
    "operationId": "ListService",
    "functionName": "ConversationsV1ListService",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services",
    "tags": [
      "ConversationsV1Service"
    ],
    "summary": "Retrieve a list of all conversation services on your account",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceBinding",
    "operationId": "ListServiceBinding",
    "functionName": "ConversationsV1ListServiceBinding",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Bindings",
    "tags": [
      "ConversationsV1Binding"
    ],
    "summary": "Retrieve a list of all push notification bindings in the conversation service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceConversation",
    "operationId": "ListServiceConversation",
    "functionName": "ConversationsV1ListServiceConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Retrieve a list of conversations in your service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceConversationMessage",
    "operationId": "ListServiceConversationMessage",
    "functionName": "ConversationsV1ListServiceConversationMessage",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Retrieve a list of all messages in the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceConversationMessageReceipt",
    "operationId": "ListServiceConversationMessageReceipt",
    "functionName": "ConversationsV1ListServiceConversationMessageReceipt",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts",
    "tags": [
      "ConversationsV1DeliveryReceipt"
    ],
    "summary": "Retrieve a list of all delivery and read receipts of the conversation message",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceConversationParticipant",
    "operationId": "ListServiceConversationParticipant",
    "functionName": "ConversationsV1ListServiceConversationParticipant",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Retrieve a list of all participants of the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceConversationScopedWebhook",
    "operationId": "ListServiceConversationScopedWebhook",
    "functionName": "ConversationsV1ListServiceConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Retrieve a list of all webhooks scoped to the conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceParticipantConversation",
    "operationId": "ListServiceParticipantConversation",
    "functionName": "ConversationsV1ListServiceParticipantConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/ParticipantConversations",
    "tags": [
      "ConversationsV1ParticipantConversation"
    ],
    "summary": "Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceRole",
    "operationId": "ListServiceRole",
    "functionName": "ConversationsV1ListServiceRole",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Roles",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Retrieve a list of all user roles in your service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceUser",
    "operationId": "ListServiceUser",
    "functionName": "ConversationsV1ListServiceUser",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Users",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Retrieve a list of all conversation users in your service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListServiceUserConversation",
    "operationId": "ListServiceUserConversation",
    "functionName": "ConversationsV1ListServiceUserConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations",
    "tags": [
      "ConversationsV1UserConversation"
    ],
    "summary": "Retrieve a list of all User Conversations for the User.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListUser",
    "operationId": "ListUser",
    "functionName": "ConversationsV1ListUser",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Users",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Retrieve a list of all conversation users in your account's default service",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:ListUserConversation",
    "operationId": "ListUserConversation",
    "functionName": "ConversationsV1ListUserConversation",
    "specKey": "conversations_v1",
    "method": "GET",
    "path": "/v1/Users/{UserSid}/Conversations",
    "tags": [
      "ConversationsV1UserConversation"
    ],
    "summary": "Retrieve a list of all User Conversations for the User.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateConfiguration",
    "operationId": "UpdateConfiguration",
    "functionName": "ConversationsV1UpdateConfiguration",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Configuration",
    "tags": [
      "ConversationsV1Configuration"
    ],
    "summary": "Update the global configuration of conversations on your account",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateConfigurationAddress",
    "operationId": "UpdateConfigurationAddress",
    "functionName": "ConversationsV1UpdateConfigurationAddress",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Configuration/Addresses/{Sid}",
    "tags": [
      "ConversationsV1AddressConfiguration"
    ],
    "summary": "Update an existing address configuration",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateConfigurationWebhook",
    "operationId": "UpdateConfigurationWebhook",
    "functionName": "ConversationsV1UpdateConfigurationWebhook",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Configuration/Webhooks",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateConversation",
    "operationId": "UpdateConversation",
    "functionName": "ConversationsV1UpdateConversation",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Conversations/{Sid}",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Update an existing conversation in your account's default service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateConversationMessage",
    "operationId": "UpdateConversationMessage",
    "functionName": "ConversationsV1UpdateConversationMessage",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Conversations/{ConversationSid}/Messages/{Sid}",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Update an existing message in the conversation",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateConversationParticipant",
    "operationId": "UpdateConversationParticipant",
    "functionName": "ConversationsV1UpdateConversationParticipant",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Conversations/{ConversationSid}/Participants/{Sid}",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Update an existing participant in the conversation",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateConversationScopedWebhook",
    "operationId": "UpdateConversationScopedWebhook",
    "functionName": "ConversationsV1UpdateConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Update an existing conversation-scoped webhook",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateCredential",
    "operationId": "UpdateCredential",
    "functionName": "ConversationsV1UpdateCredential",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Credentials/{Sid}",
    "tags": [
      "ConversationsV1Credential"
    ],
    "summary": "Update an existing push notification credential on your account",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateRole",
    "operationId": "UpdateRole",
    "functionName": "ConversationsV1UpdateRole",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Roles/{Sid}",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Update an existing user role in your account's default service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceConfiguration",
    "operationId": "UpdateServiceConfiguration",
    "functionName": "ConversationsV1UpdateServiceConfiguration",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Configuration",
    "tags": [
      "ConversationsV1Configuration"
    ],
    "summary": "Update configuration settings of a conversation service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceConversation",
    "operationId": "UpdateServiceConversation",
    "functionName": "ConversationsV1UpdateServiceConversation",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{Sid}",
    "tags": [
      "ConversationsV1Conversation"
    ],
    "summary": "Update an existing conversation in your service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceConversationMessage",
    "operationId": "UpdateServiceConversationMessage",
    "functionName": "ConversationsV1UpdateServiceConversationMessage",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}",
    "tags": [
      "ConversationsV1Message"
    ],
    "summary": "Update an existing message in the conversation",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceConversationParticipant",
    "operationId": "UpdateServiceConversationParticipant",
    "functionName": "ConversationsV1UpdateServiceConversationParticipant",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}",
    "tags": [
      "ConversationsV1Participant"
    ],
    "summary": "Update an existing participant in the conversation",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceConversationScopedWebhook",
    "operationId": "UpdateServiceConversationScopedWebhook",
    "functionName": "ConversationsV1UpdateServiceConversationScopedWebhook",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Update an existing conversation-scoped webhook",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceNotification",
    "operationId": "UpdateServiceNotification",
    "functionName": "ConversationsV1UpdateServiceNotification",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Configuration/Notifications",
    "tags": [
      "ConversationsV1Notification"
    ],
    "summary": "Update push notification service settings",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceRole",
    "operationId": "UpdateServiceRole",
    "functionName": "ConversationsV1UpdateServiceRole",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Roles/{Sid}",
    "tags": [
      "ConversationsV1Role"
    ],
    "summary": "Update an existing user role in your service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceUser",
    "operationId": "UpdateServiceUser",
    "functionName": "ConversationsV1UpdateServiceUser",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Users/{Sid}",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Update an existing conversation user in your service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceUserConversation",
    "operationId": "UpdateServiceUserConversation",
    "functionName": "ConversationsV1UpdateServiceUserConversation",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}",
    "tags": [
      "ConversationsV1UserConversation"
    ],
    "summary": "Update a specific User Conversation.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateServiceWebhookConfiguration",
    "operationId": "UpdateServiceWebhookConfiguration",
    "functionName": "ConversationsV1UpdateServiceWebhookConfiguration",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Services/{ChatServiceSid}/Configuration/Webhooks",
    "tags": [
      "ConversationsV1Webhook"
    ],
    "summary": "Update a specific Webhook.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateUser",
    "operationId": "UpdateUser",
    "functionName": "ConversationsV1UpdateUser",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Users/{Sid}",
    "tags": [
      "ConversationsV1User"
    ],
    "summary": "Update an existing conversation user in your account's default service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v1:UpdateUserConversation",
    "operationId": "UpdateUserConversation",
    "functionName": "ConversationsV1UpdateUserConversation",
    "specKey": "conversations_v1",
    "method": "POST",
    "path": "/v1/Users/{UserSid}/Conversations/{ConversationSid}",
    "tags": [
      "ConversationsV1UserConversation"
    ],
    "summary": "Update a specific User Conversation.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v1.json"
  },
  {
    "id": "conversations_v2:CreateCommunicationInConversation",
    "operationId": "CreateCommunicationInConversation",
    "functionName": "ConversationsV2CreateCommunicationInConversation",
    "specKey": "conversations_v2",
    "method": "POST",
    "path": "/v2/Conversations/{ConversationSid}/Communications",
    "tags": [
      "ConversationsV2Communication"
    ],
    "summary": "Create Communication",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:CreateConfiguration",
    "operationId": "CreateConfiguration",
    "functionName": "ConversationsV2CreateConfiguration",
    "specKey": "conversations_v2",
    "method": "POST",
    "path": "/v2/ControlPlane/Configurations",
    "tags": [
      "ConversationsV2Configuration"
    ],
    "summary": "Create a Configuration",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:CreateConversationAction",
    "operationId": "CreateConversationAction",
    "functionName": "ConversationsV2CreateConversationAction",
    "specKey": "conversations_v2",
    "method": "POST",
    "path": "/v2/Conversations/{ConversationId}/Actions",
    "tags": [
      "ConversationsV2Action"
    ],
    "summary": "Create an Action",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:CreateConversationWithConfig",
    "operationId": "CreateConversationWithConfig",
    "functionName": "ConversationsV2CreateConversationWithConfig",
    "specKey": "conversations_v2",
    "method": "POST",
    "path": "/v2/Conversations",
    "tags": [
      "ConversationsV2Conversation"
    ],
    "summary": "Create a new Conversation",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:CreateParticipantInConversation",
    "operationId": "CreateParticipantInConversation",
    "functionName": "ConversationsV2CreateParticipantInConversation",
    "specKey": "conversations_v2",
    "method": "POST",
    "path": "/v2/Conversations/{ConversationSid}/Participants",
    "tags": [
      "ConversationsV2Participant"
    ],
    "summary": "Create Participant",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:DeleteConfiguration",
    "operationId": "DeleteConfiguration",
    "functionName": "ConversationsV2DeleteConfiguration",
    "specKey": "conversations_v2",
    "method": "DELETE",
    "path": "/v2/ControlPlane/Configurations/{Sid}",
    "tags": [
      "ConversationsV2Configuration"
    ],
    "summary": "Delete Configuration",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:DeleteConversationAsync",
    "operationId": "DeleteConversationAsync",
    "functionName": "ConversationsV2DeleteConversationAsync",
    "specKey": "conversations_v2",
    "method": "DELETE",
    "path": "/v2/Conversations/{Sid}",
    "tags": [
      "ConversationsV2Conversation"
    ],
    "summary": "Delete a Conversation (async)",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:FetchCommunication",
    "operationId": "FetchCommunication",
    "functionName": "ConversationsV2FetchCommunication",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/Conversations/{ConversationSid}/Communications/{Sid}",
    "tags": [
      "ConversationsV2Communication"
    ],
    "summary": "Fetch Communication",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:FetchConfiguration",
    "operationId": "FetchConfiguration",
    "functionName": "ConversationsV2FetchConfiguration",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/ControlPlane/Configurations/{Sid}",
    "tags": [
      "ConversationsV2Configuration"
    ],
    "summary": "Fetch Configuration",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:FetchConversation",
    "operationId": "FetchConversation",
    "functionName": "ConversationsV2FetchConversation",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/Conversations/{Sid}",
    "tags": [
      "ConversationsV2Conversation"
    ],
    "summary": "Fetch Conversation",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:FetchConversationAction",
    "operationId": "FetchConversationAction",
    "functionName": "ConversationsV2FetchConversationAction",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/Conversations/{ConversationId}/Actions/{ActionId}",
    "tags": [
      "ConversationsV2Action"
    ],
    "summary": "Get Action Status",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:FetchOperationStatus",
    "operationId": "FetchOperationStatus",
    "functionName": "ConversationsV2FetchOperationStatus",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/ControlPlane/Operations/{Sid}",
    "tags": [
      "ConversationsV2Operation"
    ],
    "summary": "Get Operation Status",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:FetchParticipant",
    "operationId": "FetchParticipant",
    "functionName": "ConversationsV2FetchParticipant",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/Conversations/{ConversationSid}/Participants/{Sid}",
    "tags": [
      "ConversationsV2Participant"
    ],
    "summary": "Fetch Participant",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:ListCommunicationByConversation",
    "operationId": "ListCommunicationByConversation",
    "functionName": "ConversationsV2ListCommunicationByConversation",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/Conversations/{ConversationSid}/Communications",
    "tags": [
      "ConversationsV2Communication"
    ],
    "summary": "List Communications",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:ListConfiguration",
    "operationId": "ListConfiguration",
    "functionName": "ConversationsV2ListConfiguration",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/ControlPlane/Configurations",
    "tags": [
      "ConversationsV2Configuration"
    ],
    "summary": "List Configurations",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:ListConversationByAccount",
    "operationId": "ListConversationByAccount",
    "functionName": "ConversationsV2ListConversationByAccount",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/Conversations",
    "tags": [
      "ConversationsV2Conversation"
    ],
    "summary": "List Conversations",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:ListParticipantByConversation",
    "operationId": "ListParticipantByConversation",
    "functionName": "ConversationsV2ListParticipantByConversation",
    "specKey": "conversations_v2",
    "method": "GET",
    "path": "/v2/Conversations/{ConversationSid}/Participants",
    "tags": [
      "ConversationsV2Participant"
    ],
    "summary": "List Participants",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:PatchConversationById",
    "operationId": "PatchConversationById",
    "functionName": "ConversationsV2PatchConversationById",
    "specKey": "conversations_v2",
    "method": "PATCH",
    "path": "/v2/Conversations/{Sid}",
    "tags": [
      "ConversationsV2Conversation"
    ],
    "summary": "Partially Update a Conversation",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:UpdateConfiguration",
    "operationId": "UpdateConfiguration",
    "functionName": "ConversationsV2UpdateConfiguration",
    "specKey": "conversations_v2",
    "method": "PUT",
    "path": "/v2/ControlPlane/Configurations/{Sid}",
    "tags": [
      "ConversationsV2Configuration"
    ],
    "summary": "Update Configuration",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:UpdateConversationById",
    "operationId": "UpdateConversationById",
    "functionName": "ConversationsV2UpdateConversationById",
    "specKey": "conversations_v2",
    "method": "PUT",
    "path": "/v2/Conversations/{Sid}",
    "tags": [
      "ConversationsV2Conversation"
    ],
    "summary": "Update a Conversation",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "conversations_v2:UpdateParticipantInConversation",
    "operationId": "UpdateParticipantInConversation",
    "functionName": "ConversationsV2UpdateParticipantInConversation",
    "specKey": "conversations_v2",
    "method": "PUT",
    "path": "/v2/Conversations/{ConversationSid}/Participants/{Sid}",
    "tags": [
      "ConversationsV2Participant"
    ],
    "summary": "Update a Participant",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_conversations_v2.json"
  },
  {
    "id": "messaging_v1:CreateAlphaSender",
    "operationId": "CreateAlphaSender",
    "functionName": "MessagingV1CreateAlphaSender",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services/{ServiceSid}/AlphaSenders",
    "tags": [
      "MessagingV1AlphaSender"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateBrandRegistrationOtp",
    "operationId": "CreateBrandRegistrationOtp",
    "functionName": "MessagingV1CreateBrandRegistrationOtp",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/a2p/BrandRegistrations/{BrandRegistrationSid}/SmsOtp",
    "tags": [
      "MessagingV1BrandRegistrationOtp"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateBrandRegistrations",
    "operationId": "CreateBrandRegistrations",
    "functionName": "MessagingV1CreateBrandRegistrations",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/a2p/BrandRegistrations",
    "tags": [
      "MessagingV1BrandRegistration"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateBrandVetting",
    "operationId": "CreateBrandVetting",
    "functionName": "MessagingV1CreateBrandVetting",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/a2p/BrandRegistrations/{BrandSid}/Vettings",
    "tags": [
      "MessagingV1BrandVetting"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateChannelSender",
    "operationId": "CreateChannelSender",
    "functionName": "MessagingV1CreateChannelSender",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services/{MessagingServiceSid}/ChannelSenders",
    "tags": [
      "MessagingV1ChannelSender"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateDestinationAlphaSender",
    "operationId": "CreateDestinationAlphaSender",
    "functionName": "MessagingV1CreateDestinationAlphaSender",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services/{ServiceSid}/DestinationAlphaSenders",
    "tags": [
      "MessagingV1DestinationAlphaSender"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateExternalCampaign",
    "operationId": "CreateExternalCampaign",
    "functionName": "MessagingV1CreateExternalCampaign",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services/PreregisteredUsa2p",
    "tags": [
      "MessagingV1ExternalCampaign"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateLinkshorteningMessagingService",
    "operationId": "CreateLinkshorteningMessagingService",
    "functionName": "MessagingV1CreateLinkshorteningMessagingService",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}",
    "tags": [
      "MessagingV1LinkshorteningMessagingService"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreatePhoneNumber",
    "operationId": "CreatePhoneNumber",
    "functionName": "MessagingV1CreatePhoneNumber",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services/{ServiceSid}/PhoneNumbers",
    "tags": [
      "MessagingV1PhoneNumber"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateService",
    "operationId": "CreateService",
    "functionName": "MessagingV1CreateService",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services",
    "tags": [
      "MessagingV1Service"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateShortCode",
    "operationId": "CreateShortCode",
    "functionName": "MessagingV1CreateShortCode",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services/{ServiceSid}/ShortCodes",
    "tags": [
      "MessagingV1ShortCode"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateTollfreeVerification",
    "operationId": "CreateTollfreeVerification",
    "functionName": "MessagingV1CreateTollfreeVerification",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Tollfree/Verifications",
    "tags": [
      "MessagingV1TollfreeVerification"
    ],
    "summary": "Create a tollfree verification",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:CreateUsAppToPerson",
    "operationId": "CreateUsAppToPerson",
    "functionName": "MessagingV1CreateUsAppToPerson",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p",
    "tags": [
      "MessagingV1UsAppToPerson"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeleteAlphaSender",
    "operationId": "DeleteAlphaSender",
    "functionName": "MessagingV1DeleteAlphaSender",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ServiceSid}/AlphaSenders/{Sid}",
    "tags": [
      "MessagingV1AlphaSender"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeleteChannelSender",
    "operationId": "DeleteChannelSender",
    "functionName": "MessagingV1DeleteChannelSender",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}",
    "tags": [
      "MessagingV1ChannelSender"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeleteDestinationAlphaSender",
    "operationId": "DeleteDestinationAlphaSender",
    "functionName": "MessagingV1DeleteDestinationAlphaSender",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ServiceSid}/DestinationAlphaSenders/{Sid}",
    "tags": [
      "MessagingV1DestinationAlphaSender"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeleteDomainCertV4",
    "operationId": "DeleteDomainCertV4",
    "functionName": "MessagingV1DeleteDomainCertV4",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/LinkShortening/Domains/{DomainSid}/Certificate",
    "tags": [
      "MessagingV1DomainCerts"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeleteLinkshorteningMessagingService",
    "operationId": "DeleteLinkshorteningMessagingService",
    "functionName": "MessagingV1DeleteLinkshorteningMessagingService",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}",
    "tags": [
      "MessagingV1LinkshorteningMessagingService"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeletePhoneNumber",
    "operationId": "DeletePhoneNumber",
    "functionName": "MessagingV1DeletePhoneNumber",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}",
    "tags": [
      "MessagingV1PhoneNumber"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeleteService",
    "operationId": "DeleteService",
    "functionName": "MessagingV1DeleteService",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/Services/{Sid}",
    "tags": [
      "MessagingV1Service"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeleteShortCode",
    "operationId": "DeleteShortCode",
    "functionName": "MessagingV1DeleteShortCode",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/Services/{ServiceSid}/ShortCodes/{Sid}",
    "tags": [
      "MessagingV1ShortCode"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeleteTollfreeVerification",
    "operationId": "DeleteTollfreeVerification",
    "functionName": "MessagingV1DeleteTollfreeVerification",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/Tollfree/Verifications/{Sid}",
    "tags": [
      "MessagingV1TollfreeVerification"
    ],
    "summary": "Delete a tollfree verification",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:DeleteUsAppToPerson",
    "operationId": "DeleteUsAppToPerson",
    "functionName": "MessagingV1DeleteUsAppToPerson",
    "specKey": "messaging_v1",
    "method": "DELETE",
    "path": "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}",
    "tags": [
      "MessagingV1UsAppToPerson"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchAlphaSender",
    "operationId": "FetchAlphaSender",
    "functionName": "MessagingV1FetchAlphaSender",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{ServiceSid}/AlphaSenders/{Sid}",
    "tags": [
      "MessagingV1AlphaSender"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchBrandRegistrations",
    "operationId": "FetchBrandRegistrations",
    "functionName": "MessagingV1FetchBrandRegistrations",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/a2p/BrandRegistrations/{Sid}",
    "tags": [
      "MessagingV1BrandRegistration"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchBrandVetting",
    "operationId": "FetchBrandVetting",
    "functionName": "MessagingV1FetchBrandVetting",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}",
    "tags": [
      "MessagingV1BrandVetting"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchChannelSender",
    "operationId": "FetchChannelSender",
    "functionName": "MessagingV1FetchChannelSender",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}",
    "tags": [
      "MessagingV1ChannelSender"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchDeactivation",
    "operationId": "FetchDeactivation",
    "functionName": "MessagingV1FetchDeactivation",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Deactivations",
    "tags": [
      "MessagingV1Deactivations"
    ],
    "summary": "Fetch a list of all United States numbers that have been deactivated on a specific date.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchDestinationAlphaSender",
    "operationId": "FetchDestinationAlphaSender",
    "functionName": "MessagingV1FetchDestinationAlphaSender",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{ServiceSid}/DestinationAlphaSenders/{Sid}",
    "tags": [
      "MessagingV1DestinationAlphaSender"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchDomainCertV4",
    "operationId": "FetchDomainCertV4",
    "functionName": "MessagingV1FetchDomainCertV4",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/LinkShortening/Domains/{DomainSid}/Certificate",
    "tags": [
      "MessagingV1DomainCerts"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchDomainConfig",
    "operationId": "FetchDomainConfig",
    "functionName": "MessagingV1FetchDomainConfig",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/LinkShortening/Domains/{DomainSid}/Config",
    "tags": [
      "MessagingV1DomainConfig"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchDomainConfigMessagingService",
    "operationId": "FetchDomainConfigMessagingService",
    "functionName": "MessagingV1FetchDomainConfigMessagingService",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/LinkShortening/MessagingService/{MessagingServiceSid}/DomainConfig",
    "tags": [
      "MessagingV1DomainConfigMessagingService"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchDomainDnsValidation",
    "operationId": "FetchDomainDnsValidation",
    "functionName": "MessagingV1FetchDomainDnsValidation",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/LinkShortening/Domains/{DomainSid}/ValidateDns",
    "tags": [
      "MessagingV1DomainValidateDns"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation",
    "operationId": "FetchLinkshorteningMessagingServiceDomainAssociation",
    "functionName": "MessagingV1FetchLinkshorteningMessagingServiceDomainAssociation",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/LinkShortening/MessagingServices/{MessagingServiceSid}/Domain",
    "tags": [
      "MessagingV1LinkshorteningMessagingServiceDomainAssociation"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchPhoneNumber",
    "operationId": "FetchPhoneNumber",
    "functionName": "MessagingV1FetchPhoneNumber",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}",
    "tags": [
      "MessagingV1PhoneNumber"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchService",
    "operationId": "FetchService",
    "functionName": "MessagingV1FetchService",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{Sid}",
    "tags": [
      "MessagingV1Service"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchShortCode",
    "operationId": "FetchShortCode",
    "functionName": "MessagingV1FetchShortCode",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{ServiceSid}/ShortCodes/{Sid}",
    "tags": [
      "MessagingV1ShortCode"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchTollfreeVerification",
    "operationId": "FetchTollfreeVerification",
    "functionName": "MessagingV1FetchTollfreeVerification",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Tollfree/Verifications/{Sid}",
    "tags": [
      "MessagingV1TollfreeVerification"
    ],
    "summary": "Retrieve a tollfree verification",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchUsAppToPerson",
    "operationId": "FetchUsAppToPerson",
    "functionName": "MessagingV1FetchUsAppToPerson",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}",
    "tags": [
      "MessagingV1UsAppToPerson"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchUsAppToPersonUsecase",
    "operationId": "FetchUsAppToPersonUsecase",
    "functionName": "MessagingV1FetchUsAppToPersonUsecase",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/Usecases",
    "tags": [
      "MessagingV1UsAppToPersonUsecase"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:FetchUsecase",
    "operationId": "FetchUsecase",
    "functionName": "MessagingV1FetchUsecase",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/Usecases",
    "tags": [
      "MessagingV1Usecase"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListAlphaSender",
    "operationId": "ListAlphaSender",
    "functionName": "MessagingV1ListAlphaSender",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{ServiceSid}/AlphaSenders",
    "tags": [
      "MessagingV1AlphaSender"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListBrandRegistrations",
    "operationId": "ListBrandRegistrations",
    "functionName": "MessagingV1ListBrandRegistrations",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/a2p/BrandRegistrations",
    "tags": [
      "MessagingV1BrandRegistration"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListBrandVetting",
    "operationId": "ListBrandVetting",
    "functionName": "MessagingV1ListBrandVetting",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/a2p/BrandRegistrations/{BrandSid}/Vettings",
    "tags": [
      "MessagingV1BrandVetting"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListChannelSender",
    "operationId": "ListChannelSender",
    "functionName": "MessagingV1ListChannelSender",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{MessagingServiceSid}/ChannelSenders",
    "tags": [
      "MessagingV1ChannelSender"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListDestinationAlphaSender",
    "operationId": "ListDestinationAlphaSender",
    "functionName": "MessagingV1ListDestinationAlphaSender",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{ServiceSid}/DestinationAlphaSenders",
    "tags": [
      "MessagingV1DestinationAlphaSender"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListPhoneNumber",
    "operationId": "ListPhoneNumber",
    "functionName": "MessagingV1ListPhoneNumber",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{ServiceSid}/PhoneNumbers",
    "tags": [
      "MessagingV1PhoneNumber"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListService",
    "operationId": "ListService",
    "functionName": "MessagingV1ListService",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services",
    "tags": [
      "MessagingV1Service"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListShortCode",
    "operationId": "ListShortCode",
    "functionName": "MessagingV1ListShortCode",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{ServiceSid}/ShortCodes",
    "tags": [
      "MessagingV1ShortCode"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListTollfreeVerification",
    "operationId": "ListTollfreeVerification",
    "functionName": "MessagingV1ListTollfreeVerification",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Tollfree/Verifications",
    "tags": [
      "MessagingV1TollfreeVerification"
    ],
    "summary": "List tollfree verifications",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:ListUsAppToPerson",
    "operationId": "ListUsAppToPerson",
    "functionName": "MessagingV1ListUsAppToPerson",
    "specKey": "messaging_v1",
    "method": "GET",
    "path": "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p",
    "tags": [
      "MessagingV1UsAppToPerson"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:UpdateBrandRegistrations",
    "operationId": "UpdateBrandRegistrations",
    "functionName": "MessagingV1UpdateBrandRegistrations",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/a2p/BrandRegistrations/{Sid}",
    "tags": [
      "MessagingV1BrandRegistration"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:UpdateDomainCertV4",
    "operationId": "UpdateDomainCertV4",
    "functionName": "MessagingV1UpdateDomainCertV4",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/LinkShortening/Domains/{DomainSid}/Certificate",
    "tags": [
      "MessagingV1DomainCerts"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:UpdateDomainConfig",
    "operationId": "UpdateDomainConfig",
    "functionName": "MessagingV1UpdateDomainConfig",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/LinkShortening/Domains/{DomainSid}/Config",
    "tags": [
      "MessagingV1DomainConfig"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:UpdateRequestManagedCert",
    "operationId": "UpdateRequestManagedCert",
    "functionName": "MessagingV1UpdateRequestManagedCert",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/LinkShortening/Domains/{DomainSid}/RequestManagedCert",
    "tags": [
      "MessagingV1RequestManagedCert"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:UpdateService",
    "operationId": "UpdateService",
    "functionName": "MessagingV1UpdateService",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services/{Sid}",
    "tags": [
      "MessagingV1Service"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:UpdateTollfreeVerification",
    "operationId": "UpdateTollfreeVerification",
    "functionName": "MessagingV1UpdateTollfreeVerification",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Tollfree/Verifications/{Sid}",
    "tags": [
      "MessagingV1TollfreeVerification"
    ],
    "summary": "Edit a tollfree verification",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v1:UpdateUsAppToPerson",
    "operationId": "UpdateUsAppToPerson",
    "functionName": "MessagingV1UpdateUsAppToPerson",
    "specKey": "messaging_v1",
    "method": "POST",
    "path": "/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}",
    "tags": [
      "MessagingV1UsAppToPerson"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json"
  },
  {
    "id": "messaging_v2:CreateChannelsSender",
    "operationId": "CreateChannelsSender",
    "functionName": "MessagingV2CreateChannelsSender",
    "specKey": "messaging_v2",
    "method": "POST",
    "path": "/v2/Channels/Senders",
    "tags": [
      "MessagingV2ChannelsSender"
    ],
    "summary": "Create a Sender",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v2.json"
  },
  {
    "id": "messaging_v2:CreateTypingIndicator",
    "operationId": "CreateTypingIndicator",
    "functionName": "MessagingV2CreateTypingIndicator",
    "specKey": "messaging_v2",
    "method": "POST",
    "path": "/v2/Indicators/Typing.json",
    "tags": [
      "MessagingV2TypingIndicator"
    ],
    "summary": "Send a typing indicator",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v2.json"
  },
  {
    "id": "messaging_v2:DeleteChannelsSender",
    "operationId": "DeleteChannelsSender",
    "functionName": "MessagingV2DeleteChannelsSender",
    "specKey": "messaging_v2",
    "method": "DELETE",
    "path": "/v2/Channels/Senders/{Sid}",
    "tags": [
      "MessagingV2ChannelsSender"
    ],
    "summary": "Delete a Sender",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v2.json"
  },
  {
    "id": "messaging_v2:FetchChannelsSender",
    "operationId": "FetchChannelsSender",
    "functionName": "MessagingV2FetchChannelsSender",
    "specKey": "messaging_v2",
    "method": "GET",
    "path": "/v2/Channels/Senders/{Sid}",
    "tags": [
      "MessagingV2ChannelsSender"
    ],
    "summary": "Retrieve a Sender",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v2.json"
  },
  {
    "id": "messaging_v2:FetchDomainCertV4",
    "operationId": "FetchDomainCertV4",
    "functionName": "MessagingV2FetchDomainCertV4",
    "specKey": "messaging_v2",
    "method": "GET",
    "path": "/v2/LinkShortening/Domains/{DomainSid}/Certificate",
    "tags": [
      "MessagingV2DomainCerts"
    ],
    "summary": "",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v2.json"
  },
  {
    "id": "messaging_v2:ListChannelsSender",
    "operationId": "ListChannelsSender",
    "functionName": "MessagingV2ListChannelsSender",
    "specKey": "messaging_v2",
    "method": "GET",
    "path": "/v2/Channels/Senders",
    "tags": [
      "MessagingV2ChannelsSender"
    ],
    "summary": "Retrieve a list of Senders",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v2.json"
  },
  {
    "id": "messaging_v2:UpdateChannelsSender",
    "operationId": "UpdateChannelsSender",
    "functionName": "MessagingV2UpdateChannelsSender",
    "specKey": "messaging_v2",
    "method": "POST",
    "path": "/v2/Channels/Senders/{Sid}",
    "tags": [
      "MessagingV2ChannelsSender"
    ],
    "summary": "Update a sender's information, including `profile`, `webhook`, and `configuration`.",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v2.json"
  },
  {
    "id": "messaging_v3:CreateV3TypingIndicator",
    "operationId": "CreateV3TypingIndicator",
    "functionName": "MessagingV3CreateV3TypingIndicator",
    "specKey": "messaging_v3",
    "method": "POST",
    "path": "/v3/Indicators/Typing.json",
    "tags": [
      "MessagingV3TypingIndicator"
    ],
    "summary": "Send a typing indicator",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v3.json"
  },
  {
    "id": "studio_v1:CreateEngagement",
    "operationId": "CreateEngagement",
    "functionName": "StudioV1CreateEngagement",
    "specKey": "studio_v1",
    "method": "POST",
    "path": "/v1/Flows/{FlowSid}/Engagements",
    "tags": [
      "StudioV1Engagement"
    ],
    "summary": "Triggers a new Engagement for the Flow",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:CreateExecution",
    "operationId": "CreateExecution",
    "functionName": "StudioV1CreateExecution",
    "specKey": "studio_v1",
    "method": "POST",
    "path": "/v1/Flows/{FlowSid}/Executions",
    "tags": [
      "StudioV1Execution"
    ],
    "summary": "Triggers a new Execution for the Flow",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:DeleteEngagement",
    "operationId": "DeleteEngagement",
    "functionName": "StudioV1DeleteEngagement",
    "specKey": "studio_v1",
    "method": "DELETE",
    "path": "/v1/Flows/{FlowSid}/Engagements/{Sid}",
    "tags": [
      "StudioV1Engagement"
    ],
    "summary": "Delete this Engagement and all Steps relating to it.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:DeleteExecution",
    "operationId": "DeleteExecution",
    "functionName": "StudioV1DeleteExecution",
    "specKey": "studio_v1",
    "method": "DELETE",
    "path": "/v1/Flows/{FlowSid}/Executions/{Sid}",
    "tags": [
      "StudioV1Execution"
    ],
    "summary": "Delete the Execution and all Steps relating to it.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:DeleteFlow",
    "operationId": "DeleteFlow",
    "functionName": "StudioV1DeleteFlow",
    "specKey": "studio_v1",
    "method": "DELETE",
    "path": "/v1/Flows/{Sid}",
    "tags": [
      "StudioV1Flow"
    ],
    "summary": "Delete a specific Flow.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:FetchEngagement",
    "operationId": "FetchEngagement",
    "functionName": "StudioV1FetchEngagement",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Engagements/{Sid}",
    "tags": [
      "StudioV1Engagement"
    ],
    "summary": "Retrieve an Engagement",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:FetchEngagementContext",
    "operationId": "FetchEngagementContext",
    "functionName": "StudioV1FetchEngagementContext",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context",
    "tags": [
      "StudioV1EngagementContext"
    ],
    "summary": "Retrieve the most recent context for an Engagement.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:FetchExecution",
    "operationId": "FetchExecution",
    "functionName": "StudioV1FetchExecution",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Executions/{Sid}",
    "tags": [
      "StudioV1Execution"
    ],
    "summary": "Retrieve an Execution",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:FetchExecutionContext",
    "operationId": "FetchExecutionContext",
    "functionName": "StudioV1FetchExecutionContext",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Context",
    "tags": [
      "StudioV1ExecutionContext"
    ],
    "summary": "Retrieve the most recent context for an Execution.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:FetchExecutionStep",
    "operationId": "FetchExecutionStep",
    "functionName": "StudioV1FetchExecutionStep",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}",
    "tags": [
      "StudioV1ExecutionStep"
    ],
    "summary": "Retrieve a Step.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:FetchExecutionStepContext",
    "operationId": "FetchExecutionStepContext",
    "functionName": "StudioV1FetchExecutionStepContext",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context",
    "tags": [
      "StudioV1ExecutionStepContext"
    ],
    "summary": "Retrieve the context for an Execution Step.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:FetchFlow",
    "operationId": "FetchFlow",
    "functionName": "StudioV1FetchFlow",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{Sid}",
    "tags": [
      "StudioV1Flow"
    ],
    "summary": "Retrieve a specific Flow.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:FetchStep",
    "operationId": "FetchStep",
    "functionName": "StudioV1FetchStep",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{Sid}",
    "tags": [
      "StudioV1Step"
    ],
    "summary": "Retrieve a Step.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:FetchStepContext",
    "operationId": "FetchStepContext",
    "functionName": "StudioV1FetchStepContext",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{StepSid}/Context",
    "tags": [
      "StudioV1StepContext"
    ],
    "summary": "Retrieve the context for an Engagement Step.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:ListEngagement",
    "operationId": "ListEngagement",
    "functionName": "StudioV1ListEngagement",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Engagements",
    "tags": [
      "StudioV1Engagement"
    ],
    "summary": "Retrieve a list of all Engagements for the Flow.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:ListExecution",
    "operationId": "ListExecution",
    "functionName": "StudioV1ListExecution",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Executions",
    "tags": [
      "StudioV1Execution"
    ],
    "summary": "Retrieve a list of all Executions for the Flow.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:ListExecutionStep",
    "operationId": "ListExecutionStep",
    "functionName": "StudioV1ListExecutionStep",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps",
    "tags": [
      "StudioV1ExecutionStep"
    ],
    "summary": "Retrieve a list of all Steps for an Execution.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:ListFlow",
    "operationId": "ListFlow",
    "functionName": "StudioV1ListFlow",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows",
    "tags": [
      "StudioV1Flow"
    ],
    "summary": "Retrieve a list of all Flows.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:ListStep",
    "operationId": "ListStep",
    "functionName": "StudioV1ListStep",
    "specKey": "studio_v1",
    "method": "GET",
    "path": "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps",
    "tags": [
      "StudioV1Step"
    ],
    "summary": "Retrieve a list of all Steps for an Engagement.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v1:UpdateExecution",
    "operationId": "UpdateExecution",
    "functionName": "StudioV1UpdateExecution",
    "specKey": "studio_v1",
    "method": "POST",
    "path": "/v1/Flows/{FlowSid}/Executions/{Sid}",
    "tags": [
      "StudioV1Execution"
    ],
    "summary": "Update the status of an Execution to `ended`.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v1.json"
  },
  {
    "id": "studio_v2:CreateExecution",
    "operationId": "CreateExecution",
    "functionName": "StudioV2CreateExecution",
    "specKey": "studio_v2",
    "method": "POST",
    "path": "/v2/Flows/{FlowSid}/Executions",
    "tags": [
      "StudioV2Execution"
    ],
    "summary": "Triggers a new Execution for the Flow",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:CreateFlow",
    "operationId": "CreateFlow",
    "functionName": "StudioV2CreateFlow",
    "specKey": "studio_v2",
    "method": "POST",
    "path": "/v2/Flows",
    "tags": [
      "StudioV2Flow"
    ],
    "summary": "Create a Flow.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:DeleteExecution",
    "operationId": "DeleteExecution",
    "functionName": "StudioV2DeleteExecution",
    "specKey": "studio_v2",
    "method": "DELETE",
    "path": "/v2/Flows/{FlowSid}/Executions/{Sid}",
    "tags": [
      "StudioV2Execution"
    ],
    "summary": "Delete the Execution and all Steps relating to it.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:DeleteFlow",
    "operationId": "DeleteFlow",
    "functionName": "StudioV2DeleteFlow",
    "specKey": "studio_v2",
    "method": "DELETE",
    "path": "/v2/Flows/{Sid}",
    "tags": [
      "StudioV2Flow"
    ],
    "summary": "Delete a specific Flow.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:FetchExecution",
    "operationId": "FetchExecution",
    "functionName": "StudioV2FetchExecution",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{FlowSid}/Executions/{Sid}",
    "tags": [
      "StudioV2Execution"
    ],
    "summary": "Retrieve an Execution",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:FetchExecutionContext",
    "operationId": "FetchExecutionContext",
    "functionName": "StudioV2FetchExecutionContext",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context",
    "tags": [
      "StudioV2ExecutionContext"
    ],
    "summary": "Retrieve the most recent context for an Execution.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:FetchExecutionStep",
    "operationId": "FetchExecutionStep",
    "functionName": "StudioV2FetchExecutionStep",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}",
    "tags": [
      "StudioV2ExecutionStep"
    ],
    "summary": "Retrieve a Step.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:FetchExecutionStepContext",
    "operationId": "FetchExecutionStepContext",
    "functionName": "StudioV2FetchExecutionStepContext",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context",
    "tags": [
      "StudioV2ExecutionStepContext"
    ],
    "summary": "Retrieve the context for an Execution Step.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:FetchFlow",
    "operationId": "FetchFlow",
    "functionName": "StudioV2FetchFlow",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{Sid}",
    "tags": [
      "StudioV2Flow"
    ],
    "summary": "Retrieve a specific Flow.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:FetchFlowRevision",
    "operationId": "FetchFlowRevision",
    "functionName": "StudioV2FetchFlowRevision",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{Sid}/Revisions/{Revision}",
    "tags": [
      "StudioV2FlowRevision"
    ],
    "summary": "Retrieve a specific Flow revision.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:FetchTestUser",
    "operationId": "FetchTestUser",
    "functionName": "StudioV2FetchTestUser",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{Sid}/TestUsers",
    "tags": [
      "StudioV2FlowTestUser"
    ],
    "summary": "Fetch flow test users",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:ListExecution",
    "operationId": "ListExecution",
    "functionName": "StudioV2ListExecution",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{FlowSid}/Executions",
    "tags": [
      "StudioV2Execution"
    ],
    "summary": "Retrieve a list of all Executions for the Flow.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:ListExecutionStep",
    "operationId": "ListExecutionStep",
    "functionName": "StudioV2ListExecutionStep",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps",
    "tags": [
      "StudioV2ExecutionStep"
    ],
    "summary": "Retrieve a list of all Steps for an Execution.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:ListFlow",
    "operationId": "ListFlow",
    "functionName": "StudioV2ListFlow",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows",
    "tags": [
      "StudioV2Flow"
    ],
    "summary": "Retrieve a list of all Flows.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:ListFlowRevision",
    "operationId": "ListFlowRevision",
    "functionName": "StudioV2ListFlowRevision",
    "specKey": "studio_v2",
    "method": "GET",
    "path": "/v2/Flows/{Sid}/Revisions",
    "tags": [
      "StudioV2FlowRevision"
    ],
    "summary": "Retrieve a list of all Flows revisions.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:UpdateExecution",
    "operationId": "UpdateExecution",
    "functionName": "StudioV2UpdateExecution",
    "specKey": "studio_v2",
    "method": "POST",
    "path": "/v2/Flows/{FlowSid}/Executions/{Sid}",
    "tags": [
      "StudioV2Execution"
    ],
    "summary": "Update the status of an Execution to `ended`.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:UpdateFlow",
    "operationId": "UpdateFlow",
    "functionName": "StudioV2UpdateFlow",
    "specKey": "studio_v2",
    "method": "POST",
    "path": "/v2/Flows/{Sid}",
    "tags": [
      "StudioV2Flow"
    ],
    "summary": "Update a Flow.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:UpdateFlowValidate",
    "operationId": "UpdateFlowValidate",
    "functionName": "StudioV2UpdateFlowValidate",
    "specKey": "studio_v2",
    "method": "POST",
    "path": "/v2/Flows/Validate",
    "tags": [
      "StudioV2FlowValidate"
    ],
    "summary": "Validate flow JSON definition",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "studio_v2:UpdateTestUser",
    "operationId": "UpdateTestUser",
    "functionName": "StudioV2UpdateTestUser",
    "specKey": "studio_v2",
    "method": "POST",
    "path": "/v2/Flows/{Sid}/TestUsers",
    "tags": [
      "StudioV2FlowTestUser"
    ],
    "summary": "Update flow test users",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_studio_v2.json"
  },
  {
    "id": "verify_v2:CreateAccessToken",
    "operationId": "CreateAccessToken",
    "functionName": "VerifyV2CreateAccessToken",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/AccessTokens",
    "tags": [
      "VerifyV2AccessToken"
    ],
    "summary": "Create a new enrollment Access Token for the Entity",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateBucket",
    "operationId": "CreateBucket",
    "functionName": "VerifyV2CreateBucket",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets",
    "tags": [
      "VerifyV2Bucket"
    ],
    "summary": "Create a new Bucket for a Rate Limit",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateChallenge",
    "operationId": "CreateChallenge",
    "functionName": "VerifyV2CreateChallenge",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges",
    "tags": [
      "VerifyV2Challenge"
    ],
    "summary": "Create a new Challenge for the Factor",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateChallengePasskeys",
    "operationId": "CreateChallengePasskeys",
    "functionName": "VerifyV2CreateChallengePasskeys",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Passkeys/Challenges",
    "tags": [
      "VerifyV2NewChallenge"
    ],
    "summary": "Create a Passkeys Challenge",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateEntity",
    "operationId": "CreateEntity",
    "functionName": "VerifyV2CreateEntity",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Entities",
    "tags": [
      "VerifyV2Entity"
    ],
    "summary": "Create a new Entity for the Service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateMessagingConfiguration",
    "operationId": "CreateMessagingConfiguration",
    "functionName": "VerifyV2CreateMessagingConfiguration",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/MessagingConfigurations",
    "tags": [
      "VerifyV2MessagingConfiguration"
    ],
    "summary": "Create a new MessagingConfiguration for a service.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateNewFactor",
    "operationId": "CreateNewFactor",
    "functionName": "VerifyV2CreateNewFactor",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors",
    "tags": [
      "VerifyV2NewFactor"
    ],
    "summary": "Create a new Factor for the Entity",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateNewFactorPasskey",
    "operationId": "CreateNewFactorPasskey",
    "functionName": "VerifyV2CreateNewFactorPasskey",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Passkeys/Factors",
    "tags": [
      "VerifyV2NewFactor"
    ],
    "summary": "Create a new Passkeys Factor for the Entity",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateNotification",
    "operationId": "CreateNotification",
    "functionName": "VerifyV2CreateNotification",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications",
    "tags": [
      "VerifyV2Notification"
    ],
    "summary": "Create a new Notification for the corresponding Challenge",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateRateLimit",
    "operationId": "CreateRateLimit",
    "functionName": "VerifyV2CreateRateLimit",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/RateLimits",
    "tags": [
      "VerifyV2RateLimit"
    ],
    "summary": "Create a new Rate Limit for a Service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateSafelist",
    "operationId": "CreateSafelist",
    "functionName": "VerifyV2CreateSafelist",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/SafeList/Numbers",
    "tags": [
      "VerifyV2Safelist"
    ],
    "summary": "Add a new phone number to SafeList.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateService",
    "operationId": "CreateService",
    "functionName": "VerifyV2CreateService",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services",
    "tags": [
      "VerifyV2Service"
    ],
    "summary": "Create a new Verification Service.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateVerification",
    "operationId": "CreateVerification",
    "functionName": "VerifyV2CreateVerification",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Verifications",
    "tags": [
      "VerifyV2Verification"
    ],
    "summary": "Create a new Verification using a Service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateVerificationCheck",
    "operationId": "CreateVerificationCheck",
    "functionName": "VerifyV2CreateVerificationCheck",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/VerificationCheck",
    "tags": [
      "VerifyV2VerificationCheck"
    ],
    "summary": "challenge a specific Verification Check.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:CreateWebhook",
    "operationId": "CreateWebhook",
    "functionName": "VerifyV2CreateWebhook",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Webhooks",
    "tags": [
      "VerifyV2Webhook"
    ],
    "summary": "Create a new Webhook for the Service",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:DeleteBucket",
    "operationId": "DeleteBucket",
    "functionName": "VerifyV2DeleteBucket",
    "specKey": "verify_v2",
    "method": "DELETE",
    "path": "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}",
    "tags": [
      "VerifyV2Bucket"
    ],
    "summary": "Delete a specific Bucket.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:DeleteEntity",
    "operationId": "DeleteEntity",
    "functionName": "VerifyV2DeleteEntity",
    "specKey": "verify_v2",
    "method": "DELETE",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}",
    "tags": [
      "VerifyV2Entity"
    ],
    "summary": "Delete a specific Entity.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:DeleteFactor",
    "operationId": "DeleteFactor",
    "functionName": "VerifyV2DeleteFactor",
    "specKey": "verify_v2",
    "method": "DELETE",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}",
    "tags": [
      "VerifyV2Factor"
    ],
    "summary": "Delete a specific Factor.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:DeleteMessagingConfiguration",
    "operationId": "DeleteMessagingConfiguration",
    "functionName": "VerifyV2DeleteMessagingConfiguration",
    "specKey": "verify_v2",
    "method": "DELETE",
    "path": "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}",
    "tags": [
      "VerifyV2MessagingConfiguration"
    ],
    "summary": "Delete a specific MessagingConfiguration.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:DeleteRateLimit",
    "operationId": "DeleteRateLimit",
    "functionName": "VerifyV2DeleteRateLimit",
    "specKey": "verify_v2",
    "method": "DELETE",
    "path": "/v2/Services/{ServiceSid}/RateLimits/{Sid}",
    "tags": [
      "VerifyV2RateLimit"
    ],
    "summary": "Delete a specific Rate Limit.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:DeleteSafelist",
    "operationId": "DeleteSafelist",
    "functionName": "VerifyV2DeleteSafelist",
    "specKey": "verify_v2",
    "method": "DELETE",
    "path": "/v2/SafeList/Numbers/{PhoneNumber}",
    "tags": [
      "VerifyV2Safelist"
    ],
    "summary": "Remove a phone number from SafeList.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:DeleteService",
    "operationId": "DeleteService",
    "functionName": "VerifyV2DeleteService",
    "specKey": "verify_v2",
    "method": "DELETE",
    "path": "/v2/Services/{Sid}",
    "tags": [
      "VerifyV2Service"
    ],
    "summary": "Delete a specific Verification Service Instance.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:DeleteWebhook",
    "operationId": "DeleteWebhook",
    "functionName": "VerifyV2DeleteWebhook",
    "specKey": "verify_v2",
    "method": "DELETE",
    "path": "/v2/Services/{ServiceSid}/Webhooks/{Sid}",
    "tags": [
      "VerifyV2Webhook"
    ],
    "summary": "Delete a specific Webhook.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchAccessToken",
    "operationId": "FetchAccessToken",
    "functionName": "VerifyV2FetchAccessToken",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/AccessTokens/{Sid}",
    "tags": [
      "VerifyV2AccessToken"
    ],
    "summary": "Fetch an Access Token for the Entity",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchBucket",
    "operationId": "FetchBucket",
    "functionName": "VerifyV2FetchBucket",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}",
    "tags": [
      "VerifyV2Bucket"
    ],
    "summary": "Fetch a specific Bucket.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchChallenge",
    "operationId": "FetchChallenge",
    "functionName": "VerifyV2FetchChallenge",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}",
    "tags": [
      "VerifyV2Challenge"
    ],
    "summary": "Fetch a specific Challenge.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchEntity",
    "operationId": "FetchEntity",
    "functionName": "VerifyV2FetchEntity",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}",
    "tags": [
      "VerifyV2Entity"
    ],
    "summary": "Fetch a specific Entity.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchFactor",
    "operationId": "FetchFactor",
    "functionName": "VerifyV2FetchFactor",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}",
    "tags": [
      "VerifyV2Factor"
    ],
    "summary": "Fetch a specific Factor.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchForm",
    "operationId": "FetchForm",
    "functionName": "VerifyV2FetchForm",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Forms/{FormType}",
    "tags": [
      "VerifyV2Form"
    ],
    "summary": "Fetch the forms for a specific Form Type.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchMessagingConfiguration",
    "operationId": "FetchMessagingConfiguration",
    "functionName": "VerifyV2FetchMessagingConfiguration",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}",
    "tags": [
      "VerifyV2MessagingConfiguration"
    ],
    "summary": "Fetch a specific MessagingConfiguration.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchRateLimit",
    "operationId": "FetchRateLimit",
    "functionName": "VerifyV2FetchRateLimit",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/RateLimits/{Sid}",
    "tags": [
      "VerifyV2RateLimit"
    ],
    "summary": "Fetch a specific Rate Limit.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchSafelist",
    "operationId": "FetchSafelist",
    "functionName": "VerifyV2FetchSafelist",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/SafeList/Numbers/{PhoneNumber}",
    "tags": [
      "VerifyV2Safelist"
    ],
    "summary": "Check if a phone number exists in SafeList.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchService",
    "operationId": "FetchService",
    "functionName": "VerifyV2FetchService",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{Sid}",
    "tags": [
      "VerifyV2Service"
    ],
    "summary": "Fetch specific Verification Service Instance.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchVerification",
    "operationId": "FetchVerification",
    "functionName": "VerifyV2FetchVerification",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/Verifications/{Sid}",
    "tags": [
      "VerifyV2Verification"
    ],
    "summary": "Fetch a specific Verification",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchVerificationAttempt",
    "operationId": "FetchVerificationAttempt",
    "functionName": "VerifyV2FetchVerificationAttempt",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Attempts/{Sid}",
    "tags": [
      "VerifyV2VerificationAttempt"
    ],
    "summary": "Fetch a specific verification attempt.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchVerificationAttemptsSummary",
    "operationId": "FetchVerificationAttemptsSummary",
    "functionName": "VerifyV2FetchVerificationAttemptsSummary",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Attempts/Summary",
    "tags": [
      "VerifyV2VerificationAttemptsSummary"
    ],
    "summary": "Get a summary of how many attempts were made and how many were converted.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:FetchWebhook",
    "operationId": "FetchWebhook",
    "functionName": "VerifyV2FetchWebhook",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/Webhooks/{Sid}",
    "tags": [
      "VerifyV2Webhook"
    ],
    "summary": "Fetch a specific Webhook.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListBucket",
    "operationId": "ListBucket",
    "functionName": "VerifyV2ListBucket",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets",
    "tags": [
      "VerifyV2Bucket"
    ],
    "summary": "Retrieve a list of all Buckets for a Rate Limit.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListChallenge",
    "operationId": "ListChallenge",
    "functionName": "VerifyV2ListChallenge",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges",
    "tags": [
      "VerifyV2Challenge"
    ],
    "summary": "Retrieve a list of all Challenges for a Factor.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListEntity",
    "operationId": "ListEntity",
    "functionName": "VerifyV2ListEntity",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/Entities",
    "tags": [
      "VerifyV2Entity"
    ],
    "summary": "Retrieve a list of all Entities for a Service.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListFactor",
    "operationId": "ListFactor",
    "functionName": "VerifyV2ListFactor",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors",
    "tags": [
      "VerifyV2Factor"
    ],
    "summary": "Retrieve a list of all Factors for an Entity.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListMessagingConfiguration",
    "operationId": "ListMessagingConfiguration",
    "functionName": "VerifyV2ListMessagingConfiguration",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/MessagingConfigurations",
    "tags": [
      "VerifyV2MessagingConfiguration"
    ],
    "summary": "Retrieve a list of all Messaging Configurations for a Service.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListRateLimit",
    "operationId": "ListRateLimit",
    "functionName": "VerifyV2ListRateLimit",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/RateLimits",
    "tags": [
      "VerifyV2RateLimit"
    ],
    "summary": "Retrieve a list of all Rate Limits for a service.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListService",
    "operationId": "ListService",
    "functionName": "VerifyV2ListService",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services",
    "tags": [
      "VerifyV2Service"
    ],
    "summary": "Retrieve a list of all Verification Services for an account.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListVerificationAttempt",
    "operationId": "ListVerificationAttempt",
    "functionName": "VerifyV2ListVerificationAttempt",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Attempts",
    "tags": [
      "VerifyV2VerificationAttempt"
    ],
    "summary": "List all the verification attempts for a given Account.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListVerificationTemplate",
    "operationId": "ListVerificationTemplate",
    "functionName": "VerifyV2ListVerificationTemplate",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Templates",
    "tags": [
      "VerifyV2Template"
    ],
    "summary": "List all the available templates for a given Account.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:ListWebhook",
    "operationId": "ListWebhook",
    "functionName": "VerifyV2ListWebhook",
    "specKey": "verify_v2",
    "method": "GET",
    "path": "/v2/Services/{ServiceSid}/Webhooks",
    "tags": [
      "VerifyV2Webhook"
    ],
    "summary": "Retrieve a list of all Webhooks for a Service.",
    "requestContentTypes": [],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdateBucket",
    "operationId": "UpdateBucket",
    "functionName": "VerifyV2UpdateBucket",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}",
    "tags": [
      "VerifyV2Bucket"
    ],
    "summary": "Update a specific Bucket.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdateChallenge",
    "operationId": "UpdateChallenge",
    "functionName": "VerifyV2UpdateChallenge",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}",
    "tags": [
      "VerifyV2Challenge"
    ],
    "summary": "Verify a specific Challenge.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdateChallengePasskeys",
    "operationId": "UpdateChallengePasskeys",
    "functionName": "VerifyV2UpdateChallengePasskeys",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Passkeys/ApproveChallenge",
    "tags": [],
    "summary": "Approve a Passkeys Challenge",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdateFactor",
    "operationId": "UpdateFactor",
    "functionName": "VerifyV2UpdateFactor",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}",
    "tags": [
      "VerifyV2Factor"
    ],
    "summary": "Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdateMessagingConfiguration",
    "operationId": "UpdateMessagingConfiguration",
    "functionName": "VerifyV2UpdateMessagingConfiguration",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}",
    "tags": [
      "VerifyV2MessagingConfiguration"
    ],
    "summary": "Update a specific MessagingConfiguration",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdatePasskeysFactor",
    "operationId": "UpdatePasskeysFactor",
    "functionName": "VerifyV2UpdatePasskeysFactor",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Passkeys/VerifyFactor",
    "tags": [],
    "summary": "Verify a Passkeys Factor",
    "requestContentTypes": [
      "application/json"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdateRateLimit",
    "operationId": "UpdateRateLimit",
    "functionName": "VerifyV2UpdateRateLimit",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/RateLimits/{Sid}",
    "tags": [
      "VerifyV2RateLimit"
    ],
    "summary": "Update a specific Rate Limit.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdateService",
    "operationId": "UpdateService",
    "functionName": "VerifyV2UpdateService",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{Sid}",
    "tags": [
      "VerifyV2Service"
    ],
    "summary": "Update a specific Verification Service.",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdateVerification",
    "operationId": "UpdateVerification",
    "functionName": "VerifyV2UpdateVerification",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Verifications/{Sid}",
    "tags": [
      "VerifyV2Verification"
    ],
    "summary": "Update a Verification status",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  },
  {
    "id": "verify_v2:UpdateWebhook",
    "operationId": "UpdateWebhook",
    "functionName": "VerifyV2UpdateWebhook",
    "specKey": "verify_v2",
    "method": "POST",
    "path": "/v2/Services/{ServiceSid}/Webhooks/{Sid}",
    "tags": [
      "VerifyV2Webhook"
    ],
    "summary": "",
    "requestContentTypes": [
      "application/x-www-form-urlencoded"
    ],
    "sourceUrl": "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json"
  }
] as const;

// Hardened literal operation keys for generated SDK typing.
export const TWILIO_SMS_FULL_API_OPERATION_IDS = [
  "api_v2010:CreateMessage",
  "api_v2010:CreateMessageFeedback",
  "api_v2010:DeleteMedia",
  "api_v2010:DeleteMessage",
  "api_v2010:FetchMedia",
  "api_v2010:FetchMessage",
  "api_v2010:FetchShortCode",
  "api_v2010:ListMedia",
  "api_v2010:ListMessage",
  "api_v2010:ListShortCode",
  "api_v2010:UpdateMessage",
  "api_v2010:UpdateShortCode",
  "content_v1:CreateApprovalCreate",
  "content_v1:CreateContent",
  "content_v1:DeleteContent",
  "content_v1:FetchApprovalFetch",
  "content_v1:FetchContent",
  "content_v1:ListContent",
  "content_v1:ListContentAndApprovals",
  "content_v1:ListLegacyContent",
  "content_v1:UpdateContent",
  "content_v2:ListContent",
  "content_v2:ListContentAndApprovals",
  "conversations_v1:CreateConfigurationAddress",
  "conversations_v1:CreateConversation",
  "conversations_v1:CreateConversationMessage",
  "conversations_v1:CreateConversationParticipant",
  "conversations_v1:CreateConversationScopedWebhook",
  "conversations_v1:CreateConversationWithParticipants",
  "conversations_v1:CreateCredential",
  "conversations_v1:CreateRole",
  "conversations_v1:CreateService",
  "conversations_v1:CreateServiceConversation",
  "conversations_v1:CreateServiceConversationMessage",
  "conversations_v1:CreateServiceConversationParticipant",
  "conversations_v1:CreateServiceConversationScopedWebhook",
  "conversations_v1:CreateServiceConversationWithParticipants",
  "conversations_v1:CreateServiceRole",
  "conversations_v1:CreateServiceUser",
  "conversations_v1:CreateUser",
  "conversations_v1:DeleteConfigurationAddress",
  "conversations_v1:DeleteConversation",
  "conversations_v1:DeleteConversationMessage",
  "conversations_v1:DeleteConversationParticipant",
  "conversations_v1:DeleteConversationScopedWebhook",
  "conversations_v1:DeleteCredential",
  "conversations_v1:DeleteRole",
  "conversations_v1:DeleteService",
  "conversations_v1:DeleteServiceBinding",
  "conversations_v1:DeleteServiceConversation",
  "conversations_v1:DeleteServiceConversationMessage",
  "conversations_v1:DeleteServiceConversationParticipant",
  "conversations_v1:DeleteServiceConversationScopedWebhook",
  "conversations_v1:DeleteServiceRole",
  "conversations_v1:DeleteServiceUser",
  "conversations_v1:DeleteServiceUserConversation",
  "conversations_v1:DeleteUser",
  "conversations_v1:DeleteUserConversation",
  "conversations_v1:FetchConfiguration",
  "conversations_v1:FetchConfigurationAddress",
  "conversations_v1:FetchConfigurationWebhook",
  "conversations_v1:FetchConversation",
  "conversations_v1:FetchConversationMessage",
  "conversations_v1:FetchConversationMessageReceipt",
  "conversations_v1:FetchConversationParticipant",
  "conversations_v1:FetchConversationScopedWebhook",
  "conversations_v1:FetchCredential",
  "conversations_v1:FetchRole",
  "conversations_v1:FetchService",
  "conversations_v1:FetchServiceBinding",
  "conversations_v1:FetchServiceConfiguration",
  "conversations_v1:FetchServiceConversation",
  "conversations_v1:FetchServiceConversationMessage",
  "conversations_v1:FetchServiceConversationMessageReceipt",
  "conversations_v1:FetchServiceConversationParticipant",
  "conversations_v1:FetchServiceConversationScopedWebhook",
  "conversations_v1:FetchServiceNotification",
  "conversations_v1:FetchServiceRole",
  "conversations_v1:FetchServiceUser",
  "conversations_v1:FetchServiceUserConversation",
  "conversations_v1:FetchServiceWebhookConfiguration",
  "conversations_v1:FetchUser",
  "conversations_v1:FetchUserConversation",
  "conversations_v1:ListConfigurationAddress",
  "conversations_v1:ListConversation",
  "conversations_v1:ListConversationMessage",
  "conversations_v1:ListConversationMessageReceipt",
  "conversations_v1:ListConversationParticipant",
  "conversations_v1:ListConversationScopedWebhook",
  "conversations_v1:ListCredential",
  "conversations_v1:ListParticipantConversation",
  "conversations_v1:ListRole",
  "conversations_v1:ListService",
  "conversations_v1:ListServiceBinding",
  "conversations_v1:ListServiceConversation",
  "conversations_v1:ListServiceConversationMessage",
  "conversations_v1:ListServiceConversationMessageReceipt",
  "conversations_v1:ListServiceConversationParticipant",
  "conversations_v1:ListServiceConversationScopedWebhook",
  "conversations_v1:ListServiceParticipantConversation",
  "conversations_v1:ListServiceRole",
  "conversations_v1:ListServiceUser",
  "conversations_v1:ListServiceUserConversation",
  "conversations_v1:ListUser",
  "conversations_v1:ListUserConversation",
  "conversations_v1:UpdateConfiguration",
  "conversations_v1:UpdateConfigurationAddress",
  "conversations_v1:UpdateConfigurationWebhook",
  "conversations_v1:UpdateConversation",
  "conversations_v1:UpdateConversationMessage",
  "conversations_v1:UpdateConversationParticipant",
  "conversations_v1:UpdateConversationScopedWebhook",
  "conversations_v1:UpdateCredential",
  "conversations_v1:UpdateRole",
  "conversations_v1:UpdateServiceConfiguration",
  "conversations_v1:UpdateServiceConversation",
  "conversations_v1:UpdateServiceConversationMessage",
  "conversations_v1:UpdateServiceConversationParticipant",
  "conversations_v1:UpdateServiceConversationScopedWebhook",
  "conversations_v1:UpdateServiceNotification",
  "conversations_v1:UpdateServiceRole",
  "conversations_v1:UpdateServiceUser",
  "conversations_v1:UpdateServiceUserConversation",
  "conversations_v1:UpdateServiceWebhookConfiguration",
  "conversations_v1:UpdateUser",
  "conversations_v1:UpdateUserConversation",
  "conversations_v2:CreateCommunicationInConversation",
  "conversations_v2:CreateConfiguration",
  "conversations_v2:CreateConversationAction",
  "conversations_v2:CreateConversationWithConfig",
  "conversations_v2:CreateParticipantInConversation",
  "conversations_v2:DeleteConfiguration",
  "conversations_v2:DeleteConversationAsync",
  "conversations_v2:FetchCommunication",
  "conversations_v2:FetchConfiguration",
  "conversations_v2:FetchConversation",
  "conversations_v2:FetchConversationAction",
  "conversations_v2:FetchOperationStatus",
  "conversations_v2:FetchParticipant",
  "conversations_v2:ListCommunicationByConversation",
  "conversations_v2:ListConfiguration",
  "conversations_v2:ListConversationByAccount",
  "conversations_v2:ListParticipantByConversation",
  "conversations_v2:PatchConversationById",
  "conversations_v2:UpdateConfiguration",
  "conversations_v2:UpdateConversationById",
  "conversations_v2:UpdateParticipantInConversation",
  "messaging_v1:CreateAlphaSender",
  "messaging_v1:CreateBrandRegistrationOtp",
  "messaging_v1:CreateBrandRegistrations",
  "messaging_v1:CreateBrandVetting",
  "messaging_v1:CreateChannelSender",
  "messaging_v1:CreateDestinationAlphaSender",
  "messaging_v1:CreateExternalCampaign",
  "messaging_v1:CreateLinkshorteningMessagingService",
  "messaging_v1:CreatePhoneNumber",
  "messaging_v1:CreateService",
  "messaging_v1:CreateShortCode",
  "messaging_v1:CreateTollfreeVerification",
  "messaging_v1:CreateUsAppToPerson",
  "messaging_v1:DeleteAlphaSender",
  "messaging_v1:DeleteChannelSender",
  "messaging_v1:DeleteDestinationAlphaSender",
  "messaging_v1:DeleteDomainCertV4",
  "messaging_v1:DeleteLinkshorteningMessagingService",
  "messaging_v1:DeletePhoneNumber",
  "messaging_v1:DeleteService",
  "messaging_v1:DeleteShortCode",
  "messaging_v1:DeleteTollfreeVerification",
  "messaging_v1:DeleteUsAppToPerson",
  "messaging_v1:FetchAlphaSender",
  "messaging_v1:FetchBrandRegistrations",
  "messaging_v1:FetchBrandVetting",
  "messaging_v1:FetchChannelSender",
  "messaging_v1:FetchDeactivation",
  "messaging_v1:FetchDestinationAlphaSender",
  "messaging_v1:FetchDomainCertV4",
  "messaging_v1:FetchDomainConfig",
  "messaging_v1:FetchDomainConfigMessagingService",
  "messaging_v1:FetchDomainDnsValidation",
  "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation",
  "messaging_v1:FetchPhoneNumber",
  "messaging_v1:FetchService",
  "messaging_v1:FetchShortCode",
  "messaging_v1:FetchTollfreeVerification",
  "messaging_v1:FetchUsAppToPerson",
  "messaging_v1:FetchUsAppToPersonUsecase",
  "messaging_v1:FetchUsecase",
  "messaging_v1:ListAlphaSender",
  "messaging_v1:ListBrandRegistrations",
  "messaging_v1:ListBrandVetting",
  "messaging_v1:ListChannelSender",
  "messaging_v1:ListDestinationAlphaSender",
  "messaging_v1:ListPhoneNumber",
  "messaging_v1:ListService",
  "messaging_v1:ListShortCode",
  "messaging_v1:ListTollfreeVerification",
  "messaging_v1:ListUsAppToPerson",
  "messaging_v1:UpdateBrandRegistrations",
  "messaging_v1:UpdateDomainCertV4",
  "messaging_v1:UpdateDomainConfig",
  "messaging_v1:UpdateRequestManagedCert",
  "messaging_v1:UpdateService",
  "messaging_v1:UpdateTollfreeVerification",
  "messaging_v1:UpdateUsAppToPerson",
  "messaging_v2:CreateChannelsSender",
  "messaging_v2:CreateTypingIndicator",
  "messaging_v2:DeleteChannelsSender",
  "messaging_v2:FetchChannelsSender",
  "messaging_v2:FetchDomainCertV4",
  "messaging_v2:ListChannelsSender",
  "messaging_v2:UpdateChannelsSender",
  "messaging_v3:CreateV3TypingIndicator",
  "studio_v1:CreateEngagement",
  "studio_v1:CreateExecution",
  "studio_v1:DeleteEngagement",
  "studio_v1:DeleteExecution",
  "studio_v1:DeleteFlow",
  "studio_v1:FetchEngagement",
  "studio_v1:FetchEngagementContext",
  "studio_v1:FetchExecution",
  "studio_v1:FetchExecutionContext",
  "studio_v1:FetchExecutionStep",
  "studio_v1:FetchExecutionStepContext",
  "studio_v1:FetchFlow",
  "studio_v1:FetchStep",
  "studio_v1:FetchStepContext",
  "studio_v1:ListEngagement",
  "studio_v1:ListExecution",
  "studio_v1:ListExecutionStep",
  "studio_v1:ListFlow",
  "studio_v1:ListStep",
  "studio_v1:UpdateExecution",
  "studio_v2:CreateExecution",
  "studio_v2:CreateFlow",
  "studio_v2:DeleteExecution",
  "studio_v2:DeleteFlow",
  "studio_v2:FetchExecution",
  "studio_v2:FetchExecutionContext",
  "studio_v2:FetchExecutionStep",
  "studio_v2:FetchExecutionStepContext",
  "studio_v2:FetchFlow",
  "studio_v2:FetchFlowRevision",
  "studio_v2:FetchTestUser",
  "studio_v2:ListExecution",
  "studio_v2:ListExecutionStep",
  "studio_v2:ListFlow",
  "studio_v2:ListFlowRevision",
  "studio_v2:UpdateExecution",
  "studio_v2:UpdateFlow",
  "studio_v2:UpdateFlowValidate",
  "studio_v2:UpdateTestUser",
  "verify_v2:CreateAccessToken",
  "verify_v2:CreateBucket",
  "verify_v2:CreateChallenge",
  "verify_v2:CreateChallengePasskeys",
  "verify_v2:CreateEntity",
  "verify_v2:CreateMessagingConfiguration",
  "verify_v2:CreateNewFactor",
  "verify_v2:CreateNewFactorPasskey",
  "verify_v2:CreateNotification",
  "verify_v2:CreateRateLimit",
  "verify_v2:CreateSafelist",
  "verify_v2:CreateService",
  "verify_v2:CreateVerification",
  "verify_v2:CreateVerificationCheck",
  "verify_v2:CreateWebhook",
  "verify_v2:DeleteBucket",
  "verify_v2:DeleteEntity",
  "verify_v2:DeleteFactor",
  "verify_v2:DeleteMessagingConfiguration",
  "verify_v2:DeleteRateLimit",
  "verify_v2:DeleteSafelist",
  "verify_v2:DeleteService",
  "verify_v2:DeleteWebhook",
  "verify_v2:FetchAccessToken",
  "verify_v2:FetchBucket",
  "verify_v2:FetchChallenge",
  "verify_v2:FetchEntity",
  "verify_v2:FetchFactor",
  "verify_v2:FetchForm",
  "verify_v2:FetchMessagingConfiguration",
  "verify_v2:FetchRateLimit",
  "verify_v2:FetchSafelist",
  "verify_v2:FetchService",
  "verify_v2:FetchVerification",
  "verify_v2:FetchVerificationAttempt",
  "verify_v2:FetchVerificationAttemptsSummary",
  "verify_v2:FetchWebhook",
  "verify_v2:ListBucket",
  "verify_v2:ListChallenge",
  "verify_v2:ListEntity",
  "verify_v2:ListFactor",
  "verify_v2:ListMessagingConfiguration",
  "verify_v2:ListRateLimit",
  "verify_v2:ListService",
  "verify_v2:ListVerificationAttempt",
  "verify_v2:ListVerificationTemplate",
  "verify_v2:ListWebhook",
  "verify_v2:UpdateBucket",
  "verify_v2:UpdateChallenge",
  "verify_v2:UpdateChallengePasskeys",
  "verify_v2:UpdateFactor",
  "verify_v2:UpdateMessagingConfiguration",
  "verify_v2:UpdatePasskeysFactor",
  "verify_v2:UpdateRateLimit",
  "verify_v2:UpdateService",
  "verify_v2:UpdateVerification",
  "verify_v2:UpdateWebhook"
] as const;
export const TWILIO_SMS_FULL_API_OPERATION_OPERATION_IDS = [
  "CreateMessage",
  "CreateMessageFeedback",
  "DeleteMedia",
  "DeleteMessage",
  "FetchMedia",
  "FetchMessage",
  "FetchShortCode",
  "ListMedia",
  "ListMessage",
  "ListShortCode",
  "UpdateMessage",
  "UpdateShortCode",
  "CreateApprovalCreate",
  "CreateContent",
  "DeleteContent",
  "FetchApprovalFetch",
  "FetchContent",
  "ListContent",
  "ListContentAndApprovals",
  "ListLegacyContent",
  "UpdateContent",
  "CreateConfigurationAddress",
  "CreateConversation",
  "CreateConversationMessage",
  "CreateConversationParticipant",
  "CreateConversationScopedWebhook",
  "CreateConversationWithParticipants",
  "CreateCredential",
  "CreateRole",
  "CreateService",
  "CreateServiceConversation",
  "CreateServiceConversationMessage",
  "CreateServiceConversationParticipant",
  "CreateServiceConversationScopedWebhook",
  "CreateServiceConversationWithParticipants",
  "CreateServiceRole",
  "CreateServiceUser",
  "CreateUser",
  "DeleteConfigurationAddress",
  "DeleteConversation",
  "DeleteConversationMessage",
  "DeleteConversationParticipant",
  "DeleteConversationScopedWebhook",
  "DeleteCredential",
  "DeleteRole",
  "DeleteService",
  "DeleteServiceBinding",
  "DeleteServiceConversation",
  "DeleteServiceConversationMessage",
  "DeleteServiceConversationParticipant",
  "DeleteServiceConversationScopedWebhook",
  "DeleteServiceRole",
  "DeleteServiceUser",
  "DeleteServiceUserConversation",
  "DeleteUser",
  "DeleteUserConversation",
  "FetchConfiguration",
  "FetchConfigurationAddress",
  "FetchConfigurationWebhook",
  "FetchConversation",
  "FetchConversationMessage",
  "FetchConversationMessageReceipt",
  "FetchConversationParticipant",
  "FetchConversationScopedWebhook",
  "FetchCredential",
  "FetchRole",
  "FetchService",
  "FetchServiceBinding",
  "FetchServiceConfiguration",
  "FetchServiceConversation",
  "FetchServiceConversationMessage",
  "FetchServiceConversationMessageReceipt",
  "FetchServiceConversationParticipant",
  "FetchServiceConversationScopedWebhook",
  "FetchServiceNotification",
  "FetchServiceRole",
  "FetchServiceUser",
  "FetchServiceUserConversation",
  "FetchServiceWebhookConfiguration",
  "FetchUser",
  "FetchUserConversation",
  "ListConfigurationAddress",
  "ListConversation",
  "ListConversationMessage",
  "ListConversationMessageReceipt",
  "ListConversationParticipant",
  "ListConversationScopedWebhook",
  "ListCredential",
  "ListParticipantConversation",
  "ListRole",
  "ListService",
  "ListServiceBinding",
  "ListServiceConversation",
  "ListServiceConversationMessage",
  "ListServiceConversationMessageReceipt",
  "ListServiceConversationParticipant",
  "ListServiceConversationScopedWebhook",
  "ListServiceParticipantConversation",
  "ListServiceRole",
  "ListServiceUser",
  "ListServiceUserConversation",
  "ListUser",
  "ListUserConversation",
  "UpdateConfiguration",
  "UpdateConfigurationAddress",
  "UpdateConfigurationWebhook",
  "UpdateConversation",
  "UpdateConversationMessage",
  "UpdateConversationParticipant",
  "UpdateConversationScopedWebhook",
  "UpdateCredential",
  "UpdateRole",
  "UpdateServiceConfiguration",
  "UpdateServiceConversation",
  "UpdateServiceConversationMessage",
  "UpdateServiceConversationParticipant",
  "UpdateServiceConversationScopedWebhook",
  "UpdateServiceNotification",
  "UpdateServiceRole",
  "UpdateServiceUser",
  "UpdateServiceUserConversation",
  "UpdateServiceWebhookConfiguration",
  "UpdateUser",
  "UpdateUserConversation",
  "CreateCommunicationInConversation",
  "CreateConfiguration",
  "CreateConversationAction",
  "CreateConversationWithConfig",
  "CreateParticipantInConversation",
  "DeleteConfiguration",
  "DeleteConversationAsync",
  "FetchCommunication",
  "FetchConversationAction",
  "FetchOperationStatus",
  "FetchParticipant",
  "ListCommunicationByConversation",
  "ListConfiguration",
  "ListConversationByAccount",
  "ListParticipantByConversation",
  "PatchConversationById",
  "UpdateConversationById",
  "UpdateParticipantInConversation",
  "CreateAlphaSender",
  "CreateBrandRegistrationOtp",
  "CreateBrandRegistrations",
  "CreateBrandVetting",
  "CreateChannelSender",
  "CreateDestinationAlphaSender",
  "CreateExternalCampaign",
  "CreateLinkshorteningMessagingService",
  "CreatePhoneNumber",
  "CreateShortCode",
  "CreateTollfreeVerification",
  "CreateUsAppToPerson",
  "DeleteAlphaSender",
  "DeleteChannelSender",
  "DeleteDestinationAlphaSender",
  "DeleteDomainCertV4",
  "DeleteLinkshorteningMessagingService",
  "DeletePhoneNumber",
  "DeleteShortCode",
  "DeleteTollfreeVerification",
  "DeleteUsAppToPerson",
  "FetchAlphaSender",
  "FetchBrandRegistrations",
  "FetchBrandVetting",
  "FetchChannelSender",
  "FetchDeactivation",
  "FetchDestinationAlphaSender",
  "FetchDomainCertV4",
  "FetchDomainConfig",
  "FetchDomainConfigMessagingService",
  "FetchDomainDnsValidation",
  "FetchLinkshorteningMessagingServiceDomainAssociation",
  "FetchPhoneNumber",
  "FetchTollfreeVerification",
  "FetchUsAppToPerson",
  "FetchUsAppToPersonUsecase",
  "FetchUsecase",
  "ListAlphaSender",
  "ListBrandRegistrations",
  "ListBrandVetting",
  "ListChannelSender",
  "ListDestinationAlphaSender",
  "ListPhoneNumber",
  "ListTollfreeVerification",
  "ListUsAppToPerson",
  "UpdateBrandRegistrations",
  "UpdateDomainCertV4",
  "UpdateDomainConfig",
  "UpdateRequestManagedCert",
  "UpdateService",
  "UpdateTollfreeVerification",
  "UpdateUsAppToPerson",
  "CreateChannelsSender",
  "CreateTypingIndicator",
  "DeleteChannelsSender",
  "FetchChannelsSender",
  "ListChannelsSender",
  "UpdateChannelsSender",
  "CreateV3TypingIndicator",
  "CreateEngagement",
  "CreateExecution",
  "DeleteEngagement",
  "DeleteExecution",
  "DeleteFlow",
  "FetchEngagement",
  "FetchEngagementContext",
  "FetchExecution",
  "FetchExecutionContext",
  "FetchExecutionStep",
  "FetchExecutionStepContext",
  "FetchFlow",
  "FetchStep",
  "FetchStepContext",
  "ListEngagement",
  "ListExecution",
  "ListExecutionStep",
  "ListFlow",
  "ListStep",
  "UpdateExecution",
  "CreateFlow",
  "FetchFlowRevision",
  "FetchTestUser",
  "ListFlowRevision",
  "UpdateFlow",
  "UpdateFlowValidate",
  "UpdateTestUser",
  "CreateAccessToken",
  "CreateBucket",
  "CreateChallenge",
  "CreateChallengePasskeys",
  "CreateEntity",
  "CreateMessagingConfiguration",
  "CreateNewFactor",
  "CreateNewFactorPasskey",
  "CreateNotification",
  "CreateRateLimit",
  "CreateSafelist",
  "CreateVerification",
  "CreateVerificationCheck",
  "CreateWebhook",
  "DeleteBucket",
  "DeleteEntity",
  "DeleteFactor",
  "DeleteMessagingConfiguration",
  "DeleteRateLimit",
  "DeleteSafelist",
  "DeleteWebhook",
  "FetchAccessToken",
  "FetchBucket",
  "FetchChallenge",
  "FetchEntity",
  "FetchFactor",
  "FetchForm",
  "FetchMessagingConfiguration",
  "FetchRateLimit",
  "FetchSafelist",
  "FetchVerification",
  "FetchVerificationAttempt",
  "FetchVerificationAttemptsSummary",
  "FetchWebhook",
  "ListBucket",
  "ListChallenge",
  "ListEntity",
  "ListFactor",
  "ListMessagingConfiguration",
  "ListRateLimit",
  "ListVerificationAttempt",
  "ListVerificationTemplate",
  "ListWebhook",
  "UpdateBucket",
  "UpdateChallenge",
  "UpdateChallengePasskeys",
  "UpdateFactor",
  "UpdateMessagingConfiguration",
  "UpdatePasskeysFactor",
  "UpdateRateLimit",
  "UpdateVerification",
  "UpdateWebhook"
] as const;
// End hardened literal operation keys.

export type TwilioSmsFullApiOperation = typeof TWILIO_SMS_FULL_API_OPERATIONS[number];
export type TwilioSmsFullApiOperationId = TwilioSmsFullApiOperation["id"];

export const TWILIO_SMS_FULL_API_OPERATION_BY_ID = new Map<string, TwilioSmsFullApiOperation>(
  TWILIO_SMS_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]),
);
