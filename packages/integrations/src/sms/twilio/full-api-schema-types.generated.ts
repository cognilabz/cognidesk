// Generated provider schema DTOs for TwilioSmsFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type TwilioSmsFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type TwilioSmsFullApiSchemaJsonValue = TwilioSmsFullApiSchemaJsonPrimitive | readonly TwilioSmsFullApiSchemaJsonValue[] | { readonly [key: string]: TwilioSmsFullApiSchemaJsonValue | undefined };

export type TwilioSmsFullApiSchemaMessageEnumContentRetention = "retain" | "discard";

export type TwilioSmsFullApiSchemaMessageEnumAddressRetention = "retain" | "obfuscate";

export type TwilioSmsFullApiSchemaMessageEnumTrafficType = "free";

export type TwilioSmsFullApiSchemaMessageEnumScheduleType = "fixed";

export type TwilioSmsFullApiSchemaMessageEnumRiskCheck = "enable" | "disable";

export type TwilioSmsFullApiSchemaApiV2010AccountMessage = {
  body?: string | null;
  num_segments?: string | null;
  direction?: TwilioSmsFullApiSchemaMessageEnumDirection;
  from?: string | null;
  to?: string | null;
  date_updated?: string | null;
  price?: string | null;
  error_message?: string | null;
  uri?: string | null;
  account_sid?: string | null;
  num_media?: string | null;
  status?: TwilioSmsFullApiSchemaMessageEnumStatus;
  messaging_service_sid?: string | null;
  sid?: string | null;
  date_sent?: string | null;
  date_created?: string | null;
  error_code?: number | null;
  price_unit?: string | null;
  api_version?: string | null;
  subresource_uris?: {} | null;
};

export type TwilioSmsFullApiSchemaMessageFeedbackEnumOutcome = "confirmed" | "unconfirmed";

export type TwilioSmsFullApiSchemaApiV2010AccountMessageMessageFeedback = {
  account_sid?: string | null;
  message_sid?: string | null;
  outcome?: TwilioSmsFullApiSchemaMessageFeedbackEnumOutcome;
  date_created?: string | null;
  date_updated?: string | null;
  uri?: string | null;
};

export type TwilioSmsFullApiSchemaApiV2010AccountMessageMedia = {
  account_sid?: string | null;
  content_type?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  parent_sid?: string | null;
  sid?: string | null;
  uri?: string | null;
};

export type TwilioSmsFullApiSchemaApiV2010AccountShortCode = {
  account_sid?: string | null;
  api_version?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  short_code?: string | null;
  sid?: string | null;
  sms_fallback_method?: "GET" | "POST";
  sms_fallback_url?: string | null;
  sms_method?: "GET" | "POST";
  sms_url?: string | null;
  uri?: string | null;
};

export type TwilioSmsFullApiSchemaMessageEnumUpdateStatus = "canceled";

export type TwilioSmsFullApiSchemaContentApprovalRequest = {
  name: string;
  category: string;
};

export type TwilioSmsFullApiSchemaContentV1ContentApprovalCreate = {
  name?: string | null;
  category?: string | null;
  content_type?: string | null;
  status?: string | null;
  rejection_reason?: string | null;
  allow_category_change?: boolean | null;
};

export type TwilioSmsFullApiSchemaContentCreateRequest = {
  friendly_name?: string;
  variables?: {
  readonly [key: string]: string | undefined;
};
  language: string;
  types: TwilioSmsFullApiSchemaTypes;
};

export type TwilioSmsFullApiSchemaContentV1Content = {
  date_created?: string | null;
  date_updated?: string | null;
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  language?: string | null;
  variables?: {} | null;
  types?: {} | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaContentV1ContentApprovalFetch = {
  sid?: string | null;
  account_sid?: string | null;
  whatsapp?: {} | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaContentV1ContentAndApprovals = {
  date_created?: string | null;
  date_updated?: string | null;
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  language?: string | null;
  variables?: {} | null;
  types?: {} | null;
  approval_requests?: {} | null;
};

export type TwilioSmsFullApiSchemaContentV1LegacyContent = {
  date_created?: string | null;
  date_updated?: string | null;
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  language?: string | null;
  variables?: {} | null;
  types?: {} | null;
  legacy_template_name?: string | null;
  legacy_body?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaContentUpdateRequest = {
  friendly_name?: string;
  variables?: {
  readonly [key: string]: string | undefined;
};
  language?: string;
  types: TwilioSmsFullApiSchemaTypes;
};

export type TwilioSmsFullApiSchemaContentV1Content2 = {
  date_created?: string | null;
  date_updated?: string | null;
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  language?: string | null;
  variables?: {} | null;
  types?: {} | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaContentV1ContentAndApprovals2 = {
  date_created?: string | null;
  date_updated?: string | null;
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  language?: string | null;
  variables?: {} | null;
  types?: {} | null;
  approval_requests?: {} | null;
};

export type TwilioSmsFullApiSchemaConfigurationAddressEnumType = "sms" | "whatsapp" | "messenger" | "gbm" | "email" | "rcs" | "apple" | "chat";

export type TwilioSmsFullApiSchemaConfigurationAddressEnumAutoCreationType = "webhook" | "studio" | "default";

export type TwilioSmsFullApiSchemaConfigurationAddressEnumMethod = "get" | "post";

export type TwilioSmsFullApiSchemaConversationsV1ConfigurationAddress = {
  sid?: string | null;
  account_sid?: string | null;
  type?: string | null;
  address?: string | null;
  friendly_name?: string | null;
  auto_creation?: TwilioSmsFullApiSchemaJsonValue | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  address_country?: string | null;
};

export type TwilioSmsFullApiSchemaConversationEnumState = "initializing" | "inactive" | "active" | "closed";

export type TwilioSmsFullApiSchemaConversationsV1Conversation = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  messaging_service_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  unique_name?: string | null;
  attributes?: string | null;
  state?: TwilioSmsFullApiSchemaConversationEnumState;
  date_created?: string | null;
  date_updated?: string | null;
  timers?: TwilioSmsFullApiSchemaJsonValue | null;
  url?: string | null;
  links?: {} | null;
  bindings?: TwilioSmsFullApiSchemaJsonValue | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ConversationConversationMessage = {
  account_sid?: string | null;
  conversation_sid?: string | null;
  sid?: string | null;
  index?: number;
  author?: string | null;
  body?: string | null;
  media?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
  attributes?: string | null;
  participant_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  delivery?: TwilioSmsFullApiSchemaJsonValue | null;
  links?: {} | null;
  content_sid?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ConversationConversationParticipant = {
  account_sid?: string | null;
  conversation_sid?: string | null;
  sid?: string | null;
  identity?: string | null;
  attributes?: string | null;
  messaging_binding?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  role_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  last_read_message_index?: number | null;
  last_read_timestamp?: string | null;
};

export type TwilioSmsFullApiSchemaConversationScopedWebhookEnumTarget = "webhook" | "trigger" | "studio";

export type TwilioSmsFullApiSchemaConversationScopedWebhookEnumMethod = "get" | "post";

export type TwilioSmsFullApiSchemaConversationsV1ConversationConversationScopedWebhook = {
  sid?: string | null;
  account_sid?: string | null;
  conversation_sid?: string | null;
  target?: string | null;
  url?: string | null;
  configuration?: TwilioSmsFullApiSchemaJsonValue | null;
  date_created?: string | null;
  date_updated?: string | null;
};

export type TwilioSmsFullApiSchemaConversationWithParticipantsEnumState = "initializing" | "inactive" | "active" | "closed";

export type TwilioSmsFullApiSchemaConversationsV1ConversationWithParticipants = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  messaging_service_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  unique_name?: string | null;
  attributes?: string | null;
  state?: TwilioSmsFullApiSchemaConversationWithParticipantsEnumState;
  date_created?: string | null;
  date_updated?: string | null;
  timers?: TwilioSmsFullApiSchemaJsonValue | null;
  links?: {} | null;
  bindings?: TwilioSmsFullApiSchemaJsonValue | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaCredentialEnumPushType = "apn" | "gcm" | "fcm";

export type TwilioSmsFullApiSchemaConversationsV1Credential = {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  type?: TwilioSmsFullApiSchemaCredentialEnumPushType;
  sandbox?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaRoleEnumRoleType = "conversation" | "service";

export type TwilioSmsFullApiSchemaConversationsV1Role = {
  sid?: string | null;
  account_sid?: string | null;
  chat_service_sid?: string | null;
  friendly_name?: string | null;
  type?: TwilioSmsFullApiSchemaRoleEnumRoleType;
  permissions?: ReadonlyArray<string> | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1Service = {
  account_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaServiceConversationEnumState = "inactive" | "active" | "closed" | "initializing";

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversation = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  messaging_service_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  unique_name?: string | null;
  attributes?: string | null;
  state?: TwilioSmsFullApiSchemaServiceConversationEnumState;
  date_created?: string | null;
  date_updated?: string | null;
  timers?: TwilioSmsFullApiSchemaJsonValue | null;
  url?: string | null;
  links?: {} | null;
  bindings?: TwilioSmsFullApiSchemaJsonValue | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationMessage = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  conversation_sid?: string | null;
  sid?: string | null;
  index?: number;
  author?: string | null;
  body?: string | null;
  media?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
  attributes?: string | null;
  participant_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  delivery?: TwilioSmsFullApiSchemaJsonValue | null;
  url?: string | null;
  links?: {} | null;
  content_sid?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationParticipant = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  conversation_sid?: string | null;
  sid?: string | null;
  identity?: string | null;
  attributes?: string | null;
  messaging_binding?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  role_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  last_read_message_index?: number | null;
  last_read_timestamp?: string | null;
};

export type TwilioSmsFullApiSchemaServiceConversationScopedWebhookEnumTarget = "webhook" | "trigger" | "studio";

export type TwilioSmsFullApiSchemaServiceConversationScopedWebhookEnumMethod = "get" | "post";

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationScopedWebhook = {
  sid?: string | null;
  account_sid?: string | null;
  chat_service_sid?: string | null;
  conversation_sid?: string | null;
  target?: string | null;
  url?: string | null;
  configuration?: TwilioSmsFullApiSchemaJsonValue | null;
  date_created?: string | null;
  date_updated?: string | null;
};

export type TwilioSmsFullApiSchemaServiceConversationWithParticipantsEnumState = "initializing" | "inactive" | "active" | "closed";

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationWithParticipants = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  messaging_service_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  unique_name?: string | null;
  attributes?: string | null;
  state?: TwilioSmsFullApiSchemaServiceConversationWithParticipantsEnumState;
  date_created?: string | null;
  date_updated?: string | null;
  timers?: TwilioSmsFullApiSchemaJsonValue | null;
  links?: {} | null;
  bindings?: TwilioSmsFullApiSchemaJsonValue | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaServiceRoleEnumRoleType = "conversation" | "service";

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceRole = {
  sid?: string | null;
  account_sid?: string | null;
  chat_service_sid?: string | null;
  friendly_name?: string | null;
  type?: TwilioSmsFullApiSchemaServiceRoleEnumRoleType;
  permissions?: ReadonlyArray<string> | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceUser = {
  sid?: string | null;
  account_sid?: string | null;
  chat_service_sid?: string | null;
  role_sid?: string | null;
  identity?: string | null;
  friendly_name?: string | null;
  attributes?: string | null;
  is_online?: boolean | null;
  is_notifiable?: boolean | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaConversationsV1User = {
  sid?: string | null;
  account_sid?: string | null;
  chat_service_sid?: string | null;
  role_sid?: string | null;
  identity?: string | null;
  friendly_name?: string | null;
  attributes?: string | null;
  is_online?: boolean | null;
  is_notifiable?: boolean | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaConversationsV1Configuration = {
  account_sid?: string | null;
  default_chat_service_sid?: string | null;
  default_messaging_service_sid?: string | null;
  default_inactive_timer?: string | null;
  default_closed_timer?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ConfigurationConfigurationWebhook = {
  account_sid?: string | null;
  method?: TwilioSmsFullApiSchemaConfigurationWebhookEnumMethod;
  filters?: ReadonlyArray<string> | null;
  pre_webhook_url?: string | null;
  post_webhook_url?: string | null;
  target?: TwilioSmsFullApiSchemaConfigurationWebhookEnumTarget;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ConversationConversationMessageConversationMessageReceipt = {
  account_sid?: string | null;
  conversation_sid?: string | null;
  sid?: string | null;
  message_sid?: string | null;
  channel_message_sid?: string | null;
  participant_sid?: string | null;
  status?: TwilioSmsFullApiSchemaConversationMessageReceiptEnumDeliveryStatus;
  error_code?: number;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceBinding = {
  sid?: string | null;
  account_sid?: string | null;
  chat_service_sid?: string | null;
  credential_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  endpoint?: string | null;
  identity?: string | null;
  binding_type?: TwilioSmsFullApiSchemaServiceBindingEnumBindingType;
  message_types?: ReadonlyArray<string> | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceConfiguration = {
  chat_service_sid?: string | null;
  default_conversation_creator_role_sid?: string | null;
  default_conversation_role_sid?: string | null;
  default_chat_service_role_sid?: string | null;
  url?: string | null;
  links?: {} | null;
  reachability_enabled?: boolean | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  conversation_sid?: string | null;
  message_sid?: string | null;
  sid?: string | null;
  channel_message_sid?: string | null;
  participant_sid?: string | null;
  status?: TwilioSmsFullApiSchemaServiceConversationMessageReceiptEnumDeliveryStatus;
  error_code?: number;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceConfigurationServiceNotification = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  new_message?: TwilioSmsFullApiSchemaJsonValue | null;
  added_to_conversation?: TwilioSmsFullApiSchemaJsonValue | null;
  removed_from_conversation?: TwilioSmsFullApiSchemaJsonValue | null;
  log_enabled?: boolean | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceUserServiceUserConversation = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  conversation_sid?: string | null;
  unread_messages_count?: number | null;
  last_read_message_index?: number | null;
  participant_sid?: string | null;
  user_sid?: string | null;
  friendly_name?: string | null;
  conversation_state?: TwilioSmsFullApiSchemaServiceUserConversationEnumState;
  timers?: TwilioSmsFullApiSchemaJsonValue | null;
  attributes?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  created_by?: string | null;
  notification_level?: TwilioSmsFullApiSchemaServiceUserConversationEnumNotificationLevel;
  unique_name?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  pre_webhook_url?: string | null;
  post_webhook_url?: string | null;
  filters?: ReadonlyArray<string> | null;
  method?: TwilioSmsFullApiSchemaServiceWebhookConfigurationEnumMethod;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaConversationsV1UserUserConversation = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  conversation_sid?: string | null;
  unread_messages_count?: number | null;
  last_read_message_index?: number | null;
  participant_sid?: string | null;
  user_sid?: string | null;
  friendly_name?: string | null;
  conversation_state?: TwilioSmsFullApiSchemaUserConversationEnumState;
  timers?: TwilioSmsFullApiSchemaJsonValue | null;
  attributes?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  created_by?: string | null;
  notification_level?: TwilioSmsFullApiSchemaUserConversationEnumNotificationLevel;
  unique_name?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaConversationMessageEnumOrderType = "asc" | "desc";

export type TwilioSmsFullApiSchemaConversationsV1ParticipantConversation = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  participant_sid?: string | null;
  participant_user_sid?: string | null;
  participant_identity?: string | null;
  participant_messaging_binding?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  conversation_sid?: string | null;
  conversation_unique_name?: string | null;
  conversation_friendly_name?: string | null;
  conversation_attributes?: string | null;
  conversation_date_created?: string | null;
  conversation_date_updated?: string | null;
  conversation_created_by?: string | null;
  conversation_state?: TwilioSmsFullApiSchemaParticipantConversationEnumState;
  conversation_timers?: TwilioSmsFullApiSchemaJsonValue | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaServiceBindingEnumBindingType = "apn" | "gcm" | "fcm" | "twilsock";

export type TwilioSmsFullApiSchemaServiceConversationMessageEnumOrderType = "asc" | "desc";

export type TwilioSmsFullApiSchemaConversationsV1ServiceServiceParticipantConversation = {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  participant_sid?: string | null;
  participant_user_sid?: string | null;
  participant_identity?: string | null;
  participant_messaging_binding?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  conversation_sid?: string | null;
  conversation_unique_name?: string | null;
  conversation_friendly_name?: string | null;
  conversation_attributes?: string | null;
  conversation_date_created?: string | null;
  conversation_date_updated?: string | null;
  conversation_created_by?: string | null;
  conversation_state?: TwilioSmsFullApiSchemaServiceParticipantConversationEnumState;
  conversation_timers?: TwilioSmsFullApiSchemaJsonValue | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaConfigurationWebhookEnumTarget = "webhook" | "flex";

export type TwilioSmsFullApiSchemaServiceUserConversationEnumNotificationLevel = "default" | "muted";

export type TwilioSmsFullApiSchemaUserConversationEnumNotificationLevel = "default" | "muted";

export type TwilioSmsFullApiSchemaConversationsV2ParticipantAddress = {
  address: string;
  channel: "VOICE" | "SMS" | "RCS" | "WHATSAPP" | "CHAT";
  participantId?: string;
};

export type TwilioSmsFullApiSchemaConversationsV2ContentText = {
  type: "TEXT";
  text: string;
};

export type TwilioSmsFullApiSchemaConversationsV2ContentTranscription = {
  type: "TRANSCRIPTION";
  text: string;
  transcription?: {
  channel?: number;
  confidence?: number;
  engine?: string;
  words?: ReadonlyArray<{
  text: string;
  startTime?: string;
  endTime?: string;
}>;
};
};

export type TwilioSmsFullApiSchemaConversationsV2SendMessagePayload = {
  from: TwilioSmsFullApiSchemaConversationsV2SendMessageParticipant;
  to: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2SendMessageParticipant>;
  content: TwilioSmsFullApiSchemaConversationsV2SendMessageContent;
  channelSettings?: TwilioSmsFullApiSchemaConversationsV2ChannelSettings;
};

export type TwilioSmsFullApiSchemaConversationsV2ChannelSettings = {
  readonly [key: string]: TwilioSmsFullApiSchemaJsonValue | undefined;
};

export type TwilioSmsFullApiSchemaConversationsV2StatusCallbackConfig = {
  url: string;
  method?: "POST" | "GET";
};

export type TwilioSmsFullApiSchemaConversationsV2ConversationsV1Bridge = {
  serviceId: string;
};

export type TwilioSmsFullApiSchemaConversationsV2Participant = {
  id: string;
  conversationId: string;
  accountId: string;
  name: string;
  type?: "HUMAN_AGENT" | "CUSTOMER" | "AI_AGENT" | "AGENT" | "UNKNOWN";
  profileId?: string;
  addresses?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Address>;
  createdAt?: string;
  updatedAt?: string;
};

export type TwilioSmsFullApiSchemaConversationsV2Address = {
  channel: "VOICE" | "SMS" | "RCS" | "WHATSAPP" | "CHAT";
  address: string;
  channelId?: string;
};

export type TwilioSmsFullApiSchemaConversationsV2ConfigurationChannelSettings = {
  readonly [key: string]: TwilioSmsFullApiSchemaConversationsV2ChannelSetting | undefined;
};

export type TwilioSmsFullApiSchemaMessagingV1ServiceAlphaSender = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  alpha_sender?: string | null;
  capabilities?: ReadonlyArray<string> | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1BrandRegistrationsBrandRegistrationOtp = {
  account_sid?: string | null;
  brand_registration_sid?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1BrandRegistrations = {
  sid?: string | null;
  account_sid?: string | null;
  customer_profile_bundle_sid?: string | null;
  a2p_profile_bundle_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  brand_type?: string | null;
  status?: TwilioSmsFullApiSchemaBrandRegistrationsEnumStatus;
  tcr_id?: string | null;
  failure_reason?: string | null;
  errors?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
  url?: string | null;
  brand_score?: number | null;
  brand_feedback?: ReadonlyArray<TwilioSmsFullApiSchemaBrandRegistrationsEnumBrandFeedback> | null;
  identity_status?: TwilioSmsFullApiSchemaBrandRegistrationsEnumIdentityStatus;
  russell_3000?: boolean | null;
  government_entity?: boolean | null;
  tax_exempt_status?: string | null;
  skip_automatic_sec_vet?: boolean | null;
  mock?: boolean | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaBrandVettingEnumVettingProvider = "campaign-verify" | "aegis";

export type TwilioSmsFullApiSchemaMessagingV1BrandRegistrationsBrandVetting = {
  account_sid?: string | null;
  brand_sid?: string | null;
  brand_vetting_sid?: string | null;
  date_updated?: string | null;
  date_created?: string | null;
  vetting_id?: string | null;
  vetting_class?: string | null;
  vetting_status?: string | null;
  vetting_provider?: TwilioSmsFullApiSchemaBrandVettingEnumVettingProvider;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1ServiceChannelSender = {
  account_sid?: string | null;
  messaging_service_sid?: string | null;
  sid?: string | null;
  sender?: string | null;
  sender_type?: string | null;
  country_code?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1ServiceDestinationAlphaSender = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  alpha_sender?: string | null;
  capabilities?: ReadonlyArray<string> | null;
  url?: string | null;
  iso_country_code?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1ExternalCampaign = {
  sid?: string | null;
  account_sid?: string | null;
  campaign_id?: string | null;
  messaging_service_sid?: string | null;
  date_created?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1LinkshorteningMessagingService = {
  domain_sid?: string | null;
  messaging_service_sid?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1ServicePhoneNumber = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  phone_number?: string | null;
  country_code?: string | null;
  capabilities?: ReadonlyArray<string> | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaServiceEnumScanMessageContent = "inherit" | "enable" | "disable";

export type TwilioSmsFullApiSchemaMessagingV1Service = {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  inbound_request_url?: string | null;
  inbound_method?: "GET" | "POST";
  fallback_url?: string | null;
  fallback_method?: "GET" | "POST";
  status_callback?: string | null;
  sticky_sender?: boolean | null;
  mms_converter?: boolean | null;
  smart_encoding?: boolean | null;
  scan_message_content?: TwilioSmsFullApiSchemaServiceEnumScanMessageContent;
  fallback_to_long_code?: boolean | null;
  area_code_geomatch?: boolean | null;
  synchronous_validation?: boolean | null;
  validity_period?: number;
  url?: string | null;
  links?: {} | null;
  usecase?: string | null;
  us_app_to_person_registered?: boolean | null;
  use_inbound_webhook_on_number?: boolean | null;
};

export type TwilioSmsFullApiSchemaMessagingV1ServiceShortCode = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  short_code?: string | null;
  country_code?: string | null;
  capabilities?: ReadonlyArray<string> | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaTollfreeVerificationEnumUseCaseCategories = ReadonlyArray<"TWO_FACTOR_AUTHENTICATION" | "ACCOUNT_NOTIFICATIONS" | "CUSTOMER_CARE" | "CHARITY_NONPROFIT" | "DELIVERY_NOTIFICATIONS" | "FRAUD_ALERT_MESSAGING" | "EVENTS" | "HIGHER_EDUCATION" | "K12" | "MARKETING" | "POLLING_AND_VOTING_NON_POLITICAL" | "POLITICAL_ELECTION_CAMPAIGNS" | "PUBLIC_SERVICE_ANNOUNCEMENT" | "SECURITY_ALERT"> | null;

export type TwilioSmsFullApiSchemaTollfreeVerificationEnumOptInType = "VERBAL" | "WEB_FORM" | "PAPER_FORM" | "VIA_TEXT" | "MOBILE_QR_CODE" | "IMPORT" | "IMPORT_PLEASE_REPLACE";

export type TwilioSmsFullApiSchemaTollfreeVerificationEnumBusinessRegistrationAuthority = "EIN" | "CBN" | "CRN" | "PROVINCIAL_NUMBER" | "VAT" | "ACN" | "ABN" | "BRN" | "SIREN" | "SIRET" | "NZBN" | "USt-IdNr" | "CIF" | "NIF" | "CNPJ" | "UID" | "NEQ" | "OTHER";

export type TwilioSmsFullApiSchemaTollfreeVerificationEnumBusinessType = "PRIVATE_PROFIT" | "PUBLIC_PROFIT" | "SOLE_PROPRIETOR" | "NON_PROFIT" | "GOVERNMENT";

export type TwilioSmsFullApiSchemaTollfreeVerificationEnumVettingProvider = "CAMPAIGN_VERIFY";

export type TwilioSmsFullApiSchemaMessagingV1TollfreeVerification = {
  sid?: string | null;
  account_sid?: string | null;
  customer_profile_sid?: string | null;
  trust_product_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  regulated_item_sid?: string | null;
  business_name?: string | null;
  business_street_address?: string | null;
  business_street_address2?: string | null;
  business_city?: string | null;
  business_state_province_region?: string | null;
  business_postal_code?: string | null;
  business_country?: string | null;
  business_website?: string | null;
  business_contact_first_name?: string | null;
  business_contact_last_name?: string | null;
  business_contact_email?: string | null;
  business_contact_phone?: string | null;
  notification_email?: string | null;
  use_case_categories?: TwilioSmsFullApiSchemaTollfreeVerificationEnumUseCaseCategories;
  use_case_summary?: string | null;
  production_message_sample?: string | null;
  opt_in_image_urls?: ReadonlyArray<string> | null;
  opt_in_type?: TwilioSmsFullApiSchemaTollfreeVerificationEnumOptInType;
  message_volume?: string | null;
  additional_information?: string | null;
  tollfree_phone_number_sid?: string | null;
  tollfree_phone_number?: string | null;
  status?: TwilioSmsFullApiSchemaTollfreeVerificationEnumStatus;
  url?: string | null;
  rejection_reason?: string | null;
  error_code?: number | null;
  edit_expiration?: string | null;
  edit_allowed?: boolean | null;
  business_registration_number?: string | null;
  business_registration_authority?: TwilioSmsFullApiSchemaTollfreeVerificationEnumBusinessRegistrationAuthority;
  business_registration_country?: string | null;
  business_type?: TwilioSmsFullApiSchemaTollfreeVerificationEnumBusinessType;
  business_registration_phone_number?: string | null;
  doing_business_as?: string | null;
  opt_in_confirmation_message?: string | null;
  help_message_sample?: string | null;
  privacy_policy_url?: string | null;
  terms_and_conditions_url?: string | null;
  age_gated_content?: boolean | null;
  opt_in_keywords?: ReadonlyArray<string> | null;
  rejection_reasons?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
  resource_links?: TwilioSmsFullApiSchemaJsonValue | null;
  external_reference_id?: string | null;
  vetting_id?: string | null;
  vetting_provider?: TwilioSmsFullApiSchemaTollfreeVerificationEnumVettingProvider;
  vetting_id_expiration?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPersonResponse = (TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPerson | TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPersonV2);

export type TwilioSmsFullApiSchemaMessagingV1Deactivation = {
  redirect_to?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1DomainCertV4 = {
  domain_sid?: string | null;
  date_updated?: string | null;
  date_expires?: string | null;
  date_created?: string | null;
  domain_name?: string | null;
  certificate_sid?: string | null;
  url?: string | null;
  cert_in_validation?: TwilioSmsFullApiSchemaJsonValue | null;
};

export type TwilioSmsFullApiSchemaMessagingV1DomainConfig = {
  domain_sid?: string | null;
  config_sid?: string | null;
  fallback_url?: string | null;
  callback_url?: string | null;
  continue_on_failure?: boolean | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  disable_https?: boolean | null;
};

export type TwilioSmsFullApiSchemaMessagingV1DomainConfigMessagingService = {
  domain_sid?: string | null;
  config_sid?: string | null;
  messaging_service_sid?: string | null;
  fallback_url?: string | null;
  callback_url?: string | null;
  continue_on_failure?: boolean | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1DomainDnsValidation = {
  domain_sid?: string | null;
  is_valid?: boolean | null;
  reason?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1LinkshorteningMessagingServiceDomainAssociation = {
  domain_sid?: string | null;
  messaging_service_sid?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPersonUsecase = {
  us_app_to_person_usecases?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
};

export type TwilioSmsFullApiSchemaMessagingV1Usecase = {
  usecases?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
};

export type TwilioSmsFullApiSchemaTollfreeVerificationEnumStatus = "PENDING_REVIEW" | "IN_REVIEW" | "TWILIO_APPROVED" | "TWILIO_REJECTED";

export type TwilioSmsFullApiSchemaMessagingV1RequestManagedCert = {
  domain_sid?: string | null;
  date_updated?: string | null;
  date_created?: string | null;
  date_expires?: string | null;
  domain_name?: string | null;
  certificate_sid?: string | null;
  url?: string | null;
  managed?: boolean | null;
  requesting?: boolean | null;
};

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderRequestsCreate = {
  sender_id: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderFieldsSenderId;
  configuration?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderConfiguration;
  webhook?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderWebhook;
  profile?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderProfile;
};

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderResponse = {
  sid?: string | null;
  status?: TwilioSmsFullApiSchemaChannelsSenderEnumStatus;
  sender_id?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderFieldsSenderId;
  configuration?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderConfiguration;
  webhook?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderWebhook;
  profile?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderProfileGenericResponse;
  properties?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderProperties;
  offline_reasons?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderOfflineReasons;
  compliance?: TwilioSmsFullApiSchemaMessagingV2RcsComplianceResponse;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV2WhatsappTypingIndicator = {
  channel: "whatsapp";
  messageId: string;
};

export type TwilioSmsFullApiSchemaMessagingV2DomainCertV4 = {
  domain_sid?: string | null;
  date_updated?: string | null;
  date_expires?: string | null;
  date_created?: string | null;
  domain_name?: string | null;
  certificate_sid?: string | null;
  managed?: boolean | null;
  requesting?: boolean | null;
  url?: string | null;
  cert_in_validation?: TwilioSmsFullApiSchemaJsonValue | null;
};

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderRequestsUpdate = {
  configuration?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderConfiguration;
  webhook?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderWebhook;
  profile?: TwilioSmsFullApiSchemaMessagingV2ChannelsSenderProfile;
};

export type TwilioSmsFullApiSchemaTypingIndicatorRequest = (TwilioSmsFullApiSchemaWhatsAppTypingIndicatorRequest | TwilioSmsFullApiSchemaAppleTypingIndicatorRequest);

export type TwilioSmsFullApiSchemaStudioV1FlowEngagement = {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  contact_sid?: string | null;
  contact_channel_address?: string | null;
  context?: TwilioSmsFullApiSchemaJsonValue | null;
  status?: TwilioSmsFullApiSchemaEngagementEnumStatus;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaStudioV1FlowExecution = {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  contact_sid?: string | null;
  contact_channel_address?: string | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  status?: TwilioSmsFullApiSchemaExecutionEnumStatus;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaStudioV1FlowEngagementEngagementContext = {
  account_sid?: string | null;
  context?: TwilioSmsFullApiSchemaJsonValue | null;
  engagement_sid?: string | null;
  flow_sid?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaStudioV1FlowExecutionExecutionContext = {
  account_sid?: string | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  flow_sid?: string | null;
  execution_sid?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaStudioV1FlowExecutionExecutionStep = {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  execution_sid?: string | null;
  parent_step_sid?: string | null;
  name?: string | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  transitioned_from?: string | null;
  transitioned_to?: string | null;
  type?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaStudioV1FlowExecutionExecutionStepExecutionStepContext = {
  account_sid?: string | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  execution_sid?: string | null;
  flow_sid?: string | null;
  step_sid?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaStudioV1Flow = {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  status?: TwilioSmsFullApiSchemaFlowEnumStatus2;
  version?: number;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaStudioV1FlowEngagementStep = {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  engagement_sid?: string | null;
  name?: string | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  parent_step_sid?: string | null;
  transitioned_from?: string | null;
  transitioned_to?: string | null;
  type?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaStudioV1FlowEngagementStepStepContext = {
  account_sid?: string | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  engagement_sid?: string | null;
  flow_sid?: string | null;
  step_sid?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaExecutionEnumStatus = "active" | "ended";

export type TwilioSmsFullApiSchemaStudioV2FlowExecution = {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  contact_channel_address?: string | null;
  contact_sid?: string | null;
  flow_version?: number | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  status?: TwilioSmsFullApiSchemaExecutionEnumStatus2;
  date_created?: string | null;
  date_updated?: string | null;
  initiated_by?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaFlowEnumStatus = "draft" | "published";

export type TwilioSmsFullApiSchemaStudioV2Flow = {
  sid?: string | null;
  account_sid?: string | null;
  author_sid?: string | null;
  friendly_name?: string | null;
  definition?: TwilioSmsFullApiSchemaJsonValue | null;
  status?: TwilioSmsFullApiSchemaFlowEnumStatus;
  revision?: number;
  commit_message?: string | null;
  valid?: boolean | null;
  errors?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
  warnings?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
  date_created?: string | null;
  date_updated?: string | null;
  webhook_url?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaStudioV2FlowExecutionExecutionContext = {
  account_sid?: string | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  flow_sid?: string | null;
  execution_sid?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaStudioV2FlowExecutionExecutionStep = {
  sid?: string | null;
  account_sid?: string | null;
  flow_sid?: string | null;
  execution_sid?: string | null;
  parent_step_sid?: string | null;
  name?: string | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  transitioned_from?: string | null;
  transitioned_to?: string | null;
  type?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaStudioV2FlowExecutionExecutionStepExecutionStepContext = {
  account_sid?: string | null;
  context?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  execution_sid?: string | null;
  flow_sid?: string | null;
  step_sid?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaStudioV2FlowFlowRevision = {
  sid?: string | null;
  account_sid?: string | null;
  author_sid?: string | null;
  friendly_name?: string | null;
  definition?: TwilioSmsFullApiSchemaJsonValue | null;
  status?: TwilioSmsFullApiSchemaFlowRevisionEnumStatus;
  revision?: number;
  commit_message?: string | null;
  valid?: boolean | null;
  errors?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaStudioV2FlowTestUser = {
  sid?: string | null;
  test_users?: ReadonlyArray<string> | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaExecutionEnumStatus2 = "active" | "ended";

export type TwilioSmsFullApiSchemaFlowValidateEnumStatus = "draft" | "published";

export type TwilioSmsFullApiSchemaStudioV2FlowValidate = {
  valid?: boolean | null;
};

export type TwilioSmsFullApiSchemaAccessTokenEnumFactorTypes = "push";

export type TwilioSmsFullApiSchemaVerifyV2ServiceAccessToken = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_identity?: string | null;
  factor_type?: TwilioSmsFullApiSchemaAccessTokenEnumFactorTypes;
  factor_friendly_name?: string | null;
  token?: string | null;
  url?: string | null;
  ttl?: number;
  date_created?: string | null;
};

export type TwilioSmsFullApiSchemaVerifyV2ServiceRateLimitBucket = {
  sid?: string | null;
  rate_limit_sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  max?: number;
  interval?: number;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaVerifyV2ServiceEntityChallenge = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_sid?: string | null;
  identity?: string | null;
  factor_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  date_responded?: string | null;
  expiration_date?: string | null;
  status?: TwilioSmsFullApiSchemaChallengeEnumChallengeStatuses;
  responded_reason?: TwilioSmsFullApiSchemaChallengeEnumChallengeReasons;
  details?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  hidden_details?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  metadata?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  factor_type?: TwilioSmsFullApiSchemaChallengeEnumFactorTypes;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaVerifyV2ServiceEntity = {
  sid?: string | null;
  identity?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaVerifyV2ServiceMessagingConfiguration = {
  account_sid?: string | null;
  service_sid?: string | null;
  country?: string | null;
  messaging_service_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaNewFactorEnumFactorTypes = "push" | "totp" | "passkeys";

export type TwilioSmsFullApiSchemaNewFactorEnumNotificationPlatforms = "apn" | "fcm" | "none";

export type TwilioSmsFullApiSchemaNewFactorEnumTotpAlgorithms = "sha1" | "sha256" | "sha512";

export type TwilioSmsFullApiSchemaVerifyV2ServiceEntityNewFactor = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_sid?: string | null;
  identity?: string | null;
  binding?: TwilioSmsFullApiSchemaJsonValue | null;
  options?: TwilioSmsFullApiSchemaJsonValue | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  status?: TwilioSmsFullApiSchemaNewFactorEnumFactorStatuses;
  factor_type?: TwilioSmsFullApiSchemaNewFactorEnumFactorTypes;
  config?: TwilioSmsFullApiSchemaJsonValue | null;
  metadata?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaVerifyV2ServiceEntityChallengeNotification = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_sid?: string | null;
  identity?: string | null;
  challenge_sid?: string | null;
  priority?: string | null;
  ttl?: number;
  date_created?: string | null;
};

export type TwilioSmsFullApiSchemaVerifyV2ServiceRateLimit = {
  sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  unique_name?: string | null;
  description?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaVerifyV2Safelist = {
  sid?: string | null;
  phone_number?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaVerifyV2Service = {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  code_length?: number;
  lookup_enabled?: boolean | null;
  psd2_enabled?: boolean | null;
  skip_sms_to_landlines?: boolean | null;
  dtmf_input_required?: boolean | null;
  tts_name?: string | null;
  do_not_share_warning_enabled?: boolean | null;
  custom_code_enabled?: boolean | null;
  push?: TwilioSmsFullApiSchemaJsonValue | null;
  totp?: TwilioSmsFullApiSchemaJsonValue | null;
  default_template_sid?: string | null;
  whatsapp?: TwilioSmsFullApiSchemaJsonValue | null;
  passkeys?: TwilioSmsFullApiSchemaJsonValue | null;
  verify_event_subscription_enabled?: boolean | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioSmsFullApiSchemaVerificationEnumRiskCheck = "enable" | "disable";

export type TwilioSmsFullApiSchemaVerifyV2ServiceVerification = {
  sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  to?: string | null;
  channel?: TwilioSmsFullApiSchemaVerificationEnumChannel;
  status?: string | null;
  valid?: boolean | null;
  lookup?: TwilioSmsFullApiSchemaJsonValue | null;
  amount?: string | null;
  payee?: string | null;
  send_code_attempts?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
  date_created?: string | null;
  date_updated?: string | null;
  sna?: TwilioSmsFullApiSchemaJsonValue | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaVerifyV2ServiceVerificationCheck = {
  sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  to?: string | null;
  channel?: TwilioSmsFullApiSchemaVerificationCheckEnumChannel;
  status?: string | null;
  valid?: boolean | null;
  amount?: string | null;
  payee?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  sna_attempts_error_codes?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
};

export type TwilioSmsFullApiSchemaWebhookEnumStatus = "enabled" | "disabled";

export type TwilioSmsFullApiSchemaWebhookEnumVersion = "v1" | "v2";

export type TwilioSmsFullApiSchemaVerifyV2ServiceWebhook = {
  sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  event_types?: ReadonlyArray<string> | null;
  status?: TwilioSmsFullApiSchemaWebhookEnumStatus;
  version?: TwilioSmsFullApiSchemaWebhookEnumVersion;
  webhook_url?: string | null;
  webhook_method?: TwilioSmsFullApiSchemaWebhookEnumMethods;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaVerifyV2ServiceEntityFactor = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_sid?: string | null;
  identity?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  status?: TwilioSmsFullApiSchemaFactorEnumFactorStatuses;
  factor_type?: TwilioSmsFullApiSchemaFactorEnumFactorTypes;
  config?: TwilioSmsFullApiSchemaJsonValue | null;
  metadata?: {
  "x-twilio"?: {
  pii?: TwilioSmsFullApiSchemaJsonValue;
};
} | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaVerifyV2Form = {
  form_type?: TwilioSmsFullApiSchemaFormEnumFormTypes;
  forms?: TwilioSmsFullApiSchemaJsonValue | null;
  form_meta?: TwilioSmsFullApiSchemaJsonValue | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaVerifyV2VerificationAttempt = {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  verification_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  conversion_status?: TwilioSmsFullApiSchemaVerificationAttemptEnumConversionStatus;
  channel?: TwilioSmsFullApiSchemaVerificationAttemptEnumChannels;
  price?: TwilioSmsFullApiSchemaJsonValue | null;
  channel_data?: TwilioSmsFullApiSchemaJsonValue | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaVerificationAttemptsSummaryEnumChannels = "sms" | "call" | "email" | "whatsapp" | "rbm";

export type TwilioSmsFullApiSchemaVerifyV2VerificationAttemptsSummary = {
  total_attempts?: number;
  total_converted?: number;
  total_unconverted?: number;
  conversion_rate_percentage?: string | null;
  url?: string | null;
};

export type TwilioSmsFullApiSchemaChallengeEnumChallengeStatuses = "pending" | "expired" | "approved" | "denied";

export type TwilioSmsFullApiSchemaChallengeEnumListOrders = "asc" | "desc";

export type TwilioSmsFullApiSchemaVerificationAttemptEnumChannels = "sms" | "call" | "email" | "whatsapp" | "rbm";

export type TwilioSmsFullApiSchemaVerificationAttemptEnumConversionStatus = "converted" | "unconverted";

export type TwilioSmsFullApiSchemaVerifyV2VerificationTemplate = {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  channels?: ReadonlyArray<string> | null;
  translations?: TwilioSmsFullApiSchemaJsonValue | null;
};

export type TwilioSmsFullApiSchemaFactorEnumTotpAlgorithms = "sha1" | "sha256" | "sha512";

export type TwilioSmsFullApiSchemaVerificationEnumStatus = "canceled" | "approved";

export type TwilioSmsFullApiSchemaMessageEnumDirection = "inbound" | "outbound-api" | "outbound-call" | "outbound-reply";

export type TwilioSmsFullApiSchemaMessageEnumStatus = "queued" | "sending" | "sent" | "failed" | "delivered" | "undelivered" | "receiving" | "received" | "accepted" | "scheduled" | "read" | "partially_delivered" | "canceled";

export type TwilioSmsFullApiSchemaTypes = {
  "twilio/text"?: TwilioSmsFullApiSchemaTwilioText;
  "twilio/media"?: TwilioSmsFullApiSchemaTwilioMedia;
  "twilio/location"?: TwilioSmsFullApiSchemaTwilioLocation;
  "twilio/list-picker"?: TwilioSmsFullApiSchemaTwilioListPicker;
  "twilio/call-to-action"?: TwilioSmsFullApiSchemaTwilioCallToAction;
  "twilio/quick-reply"?: TwilioSmsFullApiSchemaTwilioQuickReply;
  "twilio/card"?: TwilioSmsFullApiSchemaTwilioCard;
  "twilio/catalog"?: TwilioSmsFullApiSchemaTwilioCatalog;
  "twilio/carousel"?: TwilioSmsFullApiSchemaTwilioCarousel;
  "twilio/flows"?: TwilioSmsFullApiSchemaTwilioFlows;
  "twilio/schedule"?: TwilioSmsFullApiSchemaTwilioSchedule;
  "whatsapp/card"?: TwilioSmsFullApiSchemaWhatsappCard;
  "whatsapp/authentication"?: TwilioSmsFullApiSchemaWhatsappAuthentication;
  "whatsapp/flows"?: TwilioSmsFullApiSchemaWhatsappFlows;
};

export type TwilioSmsFullApiSchemaConfigurationWebhookEnumMethod = "GET" | "POST";

export type TwilioSmsFullApiSchemaConversationMessageReceiptEnumDeliveryStatus = "read" | "failed" | "delivered" | "undelivered" | "sent";

export type TwilioSmsFullApiSchemaServiceConversationMessageReceiptEnumDeliveryStatus = "read" | "failed" | "delivered" | "undelivered" | "sent";

export type TwilioSmsFullApiSchemaServiceUserConversationEnumState = "inactive" | "active" | "closed";

export type TwilioSmsFullApiSchemaServiceWebhookConfigurationEnumMethod = "GET" | "POST";

export type TwilioSmsFullApiSchemaUserConversationEnumState = "inactive" | "active" | "closed";

export type TwilioSmsFullApiSchemaParticipantConversationEnumState = "inactive" | "active" | "closed";

export type TwilioSmsFullApiSchemaServiceParticipantConversationEnumState = "inactive" | "active" | "closed";

export type TwilioSmsFullApiSchemaConversationsV2SendMessageParticipant = {
  participantId?: string;
  address?: string;
  channel?: "VOICE" | "SMS" | "RCS" | "WHATSAPP" | "CHAT";
};

export type TwilioSmsFullApiSchemaConversationsV2SendMessageContent = {
  text?: string;
  contentId?: string;
  variables?: {
  readonly [key: string]: string | undefined;
};
  mediaUrls?: ReadonlyArray<string>;
};

export type TwilioSmsFullApiSchemaConversationsV2ChannelSetting = {
  statusTimeouts?: TwilioSmsFullApiSchemaConversationsV2StatusTimeouts;
  captureRules?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2CaptureRule>;
};

export type TwilioSmsFullApiSchemaBrandRegistrationsEnumStatus = "PENDING" | "APPROVED" | "FAILED" | "IN_REVIEW" | "DELETION_PENDING" | "DELETION_FAILED" | "SUSPENDED";

export type TwilioSmsFullApiSchemaBrandRegistrationsEnumBrandFeedback = "TAX_ID" | "STOCK_SYMBOL" | "NONPROFIT" | "GOVERNMENT_ENTITY" | "OTHERS";

export type TwilioSmsFullApiSchemaBrandRegistrationsEnumIdentityStatus = "SELF_DECLARED" | "UNVERIFIED" | "VERIFIED" | "VETTED_VERIFIED";

export type TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPerson = {
  sid?: string | null;
  account_sid?: string | null;
  brand_registration_sid?: string | null;
  messaging_service_sid?: string | null;
  description?: string | null;
  message_samples?: ReadonlyArray<string> | null;
  us_app_to_person_usecase?: string | null;
  has_embedded_links?: boolean | null;
  has_embedded_phone?: boolean | null;
  subscriber_opt_in?: boolean | null;
  age_gated?: boolean | null;
  direct_lending?: boolean | null;
  campaign_status?: string | null;
  campaign_id?: string | null;
  is_externally_registered?: boolean | null;
  rate_limits?: TwilioSmsFullApiSchemaJsonValue | null;
  message_flow?: string | null;
  opt_in_message?: string | null;
  opt_out_message?: string | null;
  help_message?: string | null;
  opt_in_keywords?: ReadonlyArray<string> | null;
  opt_out_keywords?: ReadonlyArray<string> | null;
  help_keywords?: ReadonlyArray<string> | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  mock?: boolean | null;
  errors?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
};

export type TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPersonV2 = {
  sid?: string | null;
  account_sid?: string | null;
  brand_registration_sid?: string | null;
  messaging_service_sid?: string | null;
  description?: string | null;
  message_samples?: ReadonlyArray<string> | null;
  us_app_to_person_usecase?: string | null;
  has_embedded_links?: boolean | null;
  has_embedded_phone?: boolean | null;
  subscriber_opt_in?: boolean | null;
  age_gated?: boolean | null;
  direct_lending?: boolean | null;
  campaign_status?: string | null;
  campaign_id?: string | null;
  is_externally_registered?: boolean | null;
  rate_limits?: TwilioSmsFullApiSchemaJsonValue | null;
  message_flow?: string | null;
  opt_in_message?: string | null;
  opt_out_message?: string | null;
  help_message?: string | null;
  opt_in_keywords?: ReadonlyArray<string> | null;
  opt_out_keywords?: ReadonlyArray<string> | null;
  help_keywords?: ReadonlyArray<string> | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  mock?: boolean | null;
  errors?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue> | null;
  privacy_policy_url: string | null;
  terms_and_conditions_url: string | null;
};

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderFieldsSenderId = string | null;

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderConfiguration = {
  waba_id?: string | null;
  verification_method?: "sms" | "voice";
  verification_code?: string | null;
  voice_application_sid?: string | null;
  account_type?: "ISV" | "ISVSubAccount";
} | null;

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderWebhook = {
  callback_url?: string | null;
  callback_method?: "POST" | "PUT";
  fallback_url?: string | null;
  fallback_method?: "POST" | "PUT";
  status_callback_url?: string | null;
  status_callback_method?: string | null;
} | null;

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderProfile = {
  name?: string | null;
  about?: string | null;
  address?: string | null;
  description?: string | null;
  logo_url?: string | null;
  banner_url?: string | null;
  privacy_url?: string | null;
  terms_of_service_url?: string | null;
  accent_color?: string | null;
  use_case?: "PROMOTIONAL" | "TRANSACTIONAL" | "OTP" | "MULTI_USE";
  vertical?: string | null;
  websites?: TwilioSmsFullApiSchemaJsonValue;
  emails?: TwilioSmsFullApiSchemaJsonValue;
  phone_numbers?: TwilioSmsFullApiSchemaJsonValue;
} | null;

export type TwilioSmsFullApiSchemaChannelsSenderEnumStatus = "CREATING" | "ONLINE" | "OFFLINE" | "PENDING_VERIFICATION" | "VERIFYING" | "ONLINE:UPDATING" | "TWILIO_REVIEW" | "DRAFT" | "STUBBED";

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderProfileGenericResponse = {
  name?: string | null;
  about?: string | null;
  address?: string | null;
  description?: string | null;
  logo_url?: string | null;
  banner_url?: string | null;
  privacy_url?: string | null;
  terms_of_service_url?: string | null;
  accent_color?: string | null;
  use_case?: "PROMOTIONAL" | "TRANSACTIONAL" | "OTP" | "MULTI_USE";
  vertical?: string | null;
  websites?: ReadonlyArray<{
  website?: string;
  label?: string;
}> | null;
  emails?: ReadonlyArray<{
  email?: string;
  label?: string;
}> | null;
  phone_numbers?: ReadonlyArray<{
  phone_number?: string;
  label?: string;
}> | null;
} | null;

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderProperties = {
  quality_rating?: string | null;
  messaging_limit?: string | null;
} | null;

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderOfflineReasons = ReadonlyArray<TwilioSmsFullApiSchemaMessagingV2ChannelsSenderOfflineReasonsItems> | null;

export type TwilioSmsFullApiSchemaMessagingV2RcsComplianceResponse = {
  registration_sid: string;
  countries?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV2RcsComplianceCountryResponse>;
} | null;

export type TwilioSmsFullApiSchemaWhatsAppTypingIndicatorRequest = {
  channel: "WHATSAPP";
  messageId: string;
};

export type TwilioSmsFullApiSchemaAppleTypingIndicatorRequest = {
  channel: "APPLE";
  from: string;
  to: string;
  event?: "START" | "END";
};

export type TwilioSmsFullApiSchemaEngagementEnumStatus = "active" | "ended";

export type TwilioSmsFullApiSchemaFlowEnumStatus2 = "draft" | "published";

export type TwilioSmsFullApiSchemaFlowRevisionEnumStatus = "draft" | "published";

export type TwilioSmsFullApiSchemaChallengeEnumChallengeReasons = "none" | "not_needed" | "not_requested";

export type TwilioSmsFullApiSchemaChallengeEnumFactorTypes = "push" | "totp" | "passkeys";

export type TwilioSmsFullApiSchemaNewFactorEnumFactorStatuses = "unverified" | "verified";

export type TwilioSmsFullApiSchemaVerificationEnumChannel = "sms" | "call" | "email" | "whatsapp" | "sna";

export type TwilioSmsFullApiSchemaVerificationCheckEnumChannel = "sms" | "call" | "email" | "whatsapp" | "sna";

export type TwilioSmsFullApiSchemaWebhookEnumMethods = "GET" | "POST";

export type TwilioSmsFullApiSchemaFactorEnumFactorStatuses = "unverified" | "verified";

export type TwilioSmsFullApiSchemaFactorEnumFactorTypes = "push" | "totp" | "passkeys";

export type TwilioSmsFullApiSchemaFormEnumFormTypes = "form-push";

export type TwilioSmsFullApiSchemaTwilioText = {
  body: string;
} | null;

export type TwilioSmsFullApiSchemaTwilioMedia = {
  body?: string;
  media: ReadonlyArray<string>;
} | null;

export type TwilioSmsFullApiSchemaTwilioLocation = {
  latitude: number;
  longitude: number;
  label?: string;
  id?: string;
  address?: string;
} | null;

export type TwilioSmsFullApiSchemaTwilioListPicker = {
  body: string;
  button: string;
  items: TwilioSmsFullApiSchemaListItems;
} | null;

export type TwilioSmsFullApiSchemaTwilioCallToAction = {
  body: string;
  actions: TwilioSmsFullApiSchemaCallToActionActions;
} | null;

export type TwilioSmsFullApiSchemaTwilioQuickReply = {
  body: string;
  actions: TwilioSmsFullApiSchemaQuickReplyActions;
} | null;

export type TwilioSmsFullApiSchemaTwilioCard = {
  title?: string;
  subtitle?: string;
  media?: ReadonlyArray<string>;
  actions?: TwilioSmsFullApiSchemaCardActions;
} | null;

export type TwilioSmsFullApiSchemaTwilioCatalog = {
  title?: string;
  body: string;
  subtitle?: string;
  id?: string;
  items?: TwilioSmsFullApiSchemaCatalogItems;
  dynamic_items?: string;
} | null;

export type TwilioSmsFullApiSchemaTwilioCarousel = {
  body: string;
  cards: TwilioSmsFullApiSchemaCarouselCards;
} | null;

export type TwilioSmsFullApiSchemaTwilioFlows = {
  body: string;
  button_text: string;
  subtitle?: string;
  media_url?: string;
  pages: TwilioSmsFullApiSchemaFlowsPages;
  type: string;
} | null;

export type TwilioSmsFullApiSchemaTwilioSchedule = {
  id: string;
  title: string;
  timeSlots: string;
} | null;

export type TwilioSmsFullApiSchemaWhatsappCard = {
  body: string;
  footer?: string;
  media?: ReadonlyArray<string>;
  header_text?: string;
  actions?: TwilioSmsFullApiSchemaCardActions;
} | null;

export type TwilioSmsFullApiSchemaWhatsappAuthentication = {
  add_security_recommendation?: boolean;
  code_expiration_minutes?: number;
  actions: TwilioSmsFullApiSchemaAuthenticationActions;
} | null;

export type TwilioSmsFullApiSchemaWhatsappFlows = {
  body: string;
  button_text: string;
  subtitle?: string;
  media_url?: string;
  flow_id: string;
  flow_token?: string;
  flow_first_page_id?: string;
  is_flow_first_page_endpoint?: boolean;
} | null;

export type TwilioSmsFullApiSchemaConversationsV2StatusTimeouts = {
  inactive?: number;
  closed?: number;
};

export type TwilioSmsFullApiSchemaConversationsV2CaptureRule = {
  from: string;
  to: string;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};

export type TwilioSmsFullApiSchemaMessagingV2ChannelsSenderOfflineReasonsItems = {
  code?: string | null;
  message?: string | null;
  more_info?: string | null;
} | null;

export type TwilioSmsFullApiSchemaMessagingV2RcsComplianceCountryResponse = {
  country: string;
  registration_sid?: string;
  status?: TwilioSmsFullApiSchemaMessagingV2RcsCountryStatus;
  carriers?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV2RcsCarrier>;
};

export type TwilioSmsFullApiSchemaListItems = ReadonlyArray<TwilioSmsFullApiSchemaListItem>;

export type TwilioSmsFullApiSchemaCallToActionActions = ReadonlyArray<TwilioSmsFullApiSchemaCallToActionAction>;

export type TwilioSmsFullApiSchemaQuickReplyActions = ReadonlyArray<TwilioSmsFullApiSchemaQuickReplyAction>;

export type TwilioSmsFullApiSchemaCardActions = ReadonlyArray<TwilioSmsFullApiSchemaCardAction>;

export type TwilioSmsFullApiSchemaCatalogItems = ReadonlyArray<TwilioSmsFullApiSchemaCatalogItem>;

export type TwilioSmsFullApiSchemaCarouselCards = ReadonlyArray<TwilioSmsFullApiSchemaCarouselCard>;

export type TwilioSmsFullApiSchemaFlowsPages = ReadonlyArray<TwilioSmsFullApiSchemaFlowsPage>;

export type TwilioSmsFullApiSchemaAuthenticationActions = ReadonlyArray<TwilioSmsFullApiSchemaAuthenticationAction>;

export type TwilioSmsFullApiSchemaMessagingV2RcsCountryStatus = "ONLINE" | "OFFLINE" | "TWILIO_REVIEW" | "PENDING_VERIFICATION";

export type TwilioSmsFullApiSchemaMessagingV2RcsCarrier = {
  name?: string;
  status?: TwilioSmsFullApiSchemaMessagingV2RcsCarrierStatus;
};

export type TwilioSmsFullApiSchemaListItem = {
  id: string;
  item: string;
  description?: string;
};

export type TwilioSmsFullApiSchemaCallToActionAction = {
  type: TwilioSmsFullApiSchemaCallToActionActionType;
  title: string;
  url?: string;
  phone?: string;
  code?: string;
  id?: string;
};

export type TwilioSmsFullApiSchemaQuickReplyAction = {
  type?: TwilioSmsFullApiSchemaQuickReplyActionType;
  title: string;
  id?: string;
};

export type TwilioSmsFullApiSchemaCardAction = {
  type: TwilioSmsFullApiSchemaCardActionType;
  title: string;
  url?: string;
  phone?: string;
  id?: string;
  code?: string;
  webview_size?: TwilioSmsFullApiSchemaWebviewSizeType;
};

export type TwilioSmsFullApiSchemaCatalogItem = {
  id?: string;
  section_title?: string;
  name?: string;
  media_url?: string;
  price?: number;
  description?: string;
};

export type TwilioSmsFullApiSchemaCarouselCard = {
  title?: string;
  body: string;
  media: string;
  actions: TwilioSmsFullApiSchemaCarouselActions;
};

export type TwilioSmsFullApiSchemaFlowsPage = {
  id: string;
  next_page_id?: string;
  title: string;
  subtitle?: string;
  layout: TwilioSmsFullApiSchemaFlowsPageComponents;
};

export type TwilioSmsFullApiSchemaAuthenticationAction = {
  type: TwilioSmsFullApiSchemaAuthenticationActionType;
  copy_code_text: string;
};

export type TwilioSmsFullApiSchemaMessagingV2RcsCarrierStatus = "UNKNOWN" | "UNLAUNCHED" | "CARRIER_REVIEW" | "APPROVED" | "REJECTED" | "SUSPENDED";

export type TwilioSmsFullApiSchemaCallToActionActionType = "URL" | "PHONE_NUMBER" | "COPY_CODE" | "VOICE_CALL" | "VOICE_CALL_REQUEST";

export type TwilioSmsFullApiSchemaQuickReplyActionType = "QUICK_REPLY";

export type TwilioSmsFullApiSchemaCardActionType = "URL" | "PHONE_NUMBER" | "QUICK_REPLY" | "COPY_CODE" | "VOICE_CALL";

export type TwilioSmsFullApiSchemaWebviewSizeType = "TALL" | "FULL" | "HALF" | "NONE";

export type TwilioSmsFullApiSchemaCarouselActions = ReadonlyArray<TwilioSmsFullApiSchemaCarouselAction>;

export type TwilioSmsFullApiSchemaFlowsPageComponents = ReadonlyArray<TwilioSmsFullApiSchemaFlowsPageComponent>;

export type TwilioSmsFullApiSchemaAuthenticationActionType = "COPY_CODE";

export type TwilioSmsFullApiSchemaCarouselAction = {
  type: TwilioSmsFullApiSchemaCarouselActionType;
  title: string;
  url?: string;
  phone?: string;
  id?: string;
};

export type TwilioSmsFullApiSchemaFlowsPageComponent = {
  label?: string;
  type: string;
};

export type TwilioSmsFullApiSchemaCarouselActionType = "URL" | "PHONE_NUMBER" | "QUICK_REPLY";

export interface TwilioSmsFullApiOperationQueryMap {
  "api_v2010:CreateMessage": {};
  "api_v2010:CreateMessageFeedback": {};
  "api_v2010:DeleteMedia": {};
  "api_v2010:DeleteMessage": {};
  "api_v2010:FetchMedia": {};
  "api_v2010:FetchMessage": {};
  "api_v2010:FetchShortCode": {};
  "api_v2010:ListMedia": {
  DateCreated?: string;
  "DateCreated<"?: string;
  "DateCreated>"?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListMessage": {
  To?: string;
  From?: string;
  DateSent?: string;
  "DateSent<"?: string;
  "DateSent>"?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListShortCode": {
  FriendlyName?: string;
  ShortCode?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:UpdateMessage": {};
  "api_v2010:UpdateShortCode": {};
  "content_v1:CreateApprovalCreate": {};
  "content_v1:CreateContent": {};
  "content_v1:DeleteContent": {};
  "content_v1:FetchApprovalFetch": {};
  "content_v1:FetchContent": {};
  "content_v1:ListContent": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "content_v1:ListContentAndApprovals": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "content_v1:ListLegacyContent": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "content_v1:UpdateContent": {};
  "content_v2:ListContent": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
  SortByDate?: string;
  SortByContentName?: string;
  DateCreatedAfter?: string;
  DateCreatedBefore?: string;
  ContentName?: string;
  Content?: string;
  Language?: ReadonlyArray<string>;
  ContentType?: ReadonlyArray<string>;
  ChannelEligibility?: ReadonlyArray<string>;
};
  "content_v2:ListContentAndApprovals": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
  SortByDate?: string;
  SortByContentName?: string;
  DateCreatedAfter?: string;
  DateCreatedBefore?: string;
  ContentName?: string;
  Content?: string;
  Language?: ReadonlyArray<string>;
  ContentType?: ReadonlyArray<string>;
  ChannelEligibility?: ReadonlyArray<string>;
};
  "conversations_v1:CreateConfigurationAddress": {};
  "conversations_v1:CreateConversation": {};
  "conversations_v1:CreateConversationMessage": {};
  "conversations_v1:CreateConversationParticipant": {};
  "conversations_v1:CreateConversationScopedWebhook": {};
  "conversations_v1:CreateConversationWithParticipants": {};
  "conversations_v1:CreateCredential": {};
  "conversations_v1:CreateRole": {};
  "conversations_v1:CreateService": {};
  "conversations_v1:CreateServiceConversation": {};
  "conversations_v1:CreateServiceConversationMessage": {};
  "conversations_v1:CreateServiceConversationParticipant": {};
  "conversations_v1:CreateServiceConversationScopedWebhook": {};
  "conversations_v1:CreateServiceConversationWithParticipants": {};
  "conversations_v1:CreateServiceRole": {};
  "conversations_v1:CreateServiceUser": {};
  "conversations_v1:CreateUser": {};
  "conversations_v1:DeleteConfigurationAddress": {};
  "conversations_v1:DeleteConversation": {};
  "conversations_v1:DeleteConversationMessage": {};
  "conversations_v1:DeleteConversationParticipant": {};
  "conversations_v1:DeleteConversationScopedWebhook": {};
  "conversations_v1:DeleteCredential": {};
  "conversations_v1:DeleteRole": {};
  "conversations_v1:DeleteService": {};
  "conversations_v1:DeleteServiceBinding": {};
  "conversations_v1:DeleteServiceConversation": {};
  "conversations_v1:DeleteServiceConversationMessage": {};
  "conversations_v1:DeleteServiceConversationParticipant": {};
  "conversations_v1:DeleteServiceConversationScopedWebhook": {};
  "conversations_v1:DeleteServiceRole": {};
  "conversations_v1:DeleteServiceUser": {};
  "conversations_v1:DeleteServiceUserConversation": {};
  "conversations_v1:DeleteUser": {};
  "conversations_v1:DeleteUserConversation": {};
  "conversations_v1:FetchConfiguration": {};
  "conversations_v1:FetchConfigurationAddress": {};
  "conversations_v1:FetchConfigurationWebhook": {};
  "conversations_v1:FetchConversation": {};
  "conversations_v1:FetchConversationMessage": {};
  "conversations_v1:FetchConversationMessageReceipt": {};
  "conversations_v1:FetchConversationParticipant": {};
  "conversations_v1:FetchConversationScopedWebhook": {};
  "conversations_v1:FetchCredential": {};
  "conversations_v1:FetchRole": {};
  "conversations_v1:FetchService": {};
  "conversations_v1:FetchServiceBinding": {};
  "conversations_v1:FetchServiceConfiguration": {};
  "conversations_v1:FetchServiceConversation": {};
  "conversations_v1:FetchServiceConversationMessage": {};
  "conversations_v1:FetchServiceConversationMessageReceipt": {};
  "conversations_v1:FetchServiceConversationParticipant": {};
  "conversations_v1:FetchServiceConversationScopedWebhook": {};
  "conversations_v1:FetchServiceNotification": {};
  "conversations_v1:FetchServiceRole": {};
  "conversations_v1:FetchServiceUser": {};
  "conversations_v1:FetchServiceUserConversation": {};
  "conversations_v1:FetchServiceWebhookConfiguration": {};
  "conversations_v1:FetchUser": {};
  "conversations_v1:FetchUserConversation": {};
  "conversations_v1:ListConfigurationAddress": {
  Type?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListConversation": {
  StartDate?: string;
  EndDate?: string;
  State?: TwilioSmsFullApiSchemaConversationEnumState;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListConversationMessage": {
  Order?: TwilioSmsFullApiSchemaConversationMessageEnumOrderType;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListConversationMessageReceipt": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListConversationParticipant": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListConversationScopedWebhook": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListCredential": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListParticipantConversation": {
  Identity?: string;
  Address?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListRole": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListService": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceBinding": {
  BindingType?: ReadonlyArray<TwilioSmsFullApiSchemaServiceBindingEnumBindingType>;
  Identity?: ReadonlyArray<string>;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceConversation": {
  StartDate?: string;
  EndDate?: string;
  State?: TwilioSmsFullApiSchemaServiceConversationEnumState;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceConversationMessage": {
  Order?: TwilioSmsFullApiSchemaServiceConversationMessageEnumOrderType;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceConversationMessageReceipt": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceConversationParticipant": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceConversationScopedWebhook": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceParticipantConversation": {
  Identity?: string;
  Address?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceRole": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceUser": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListServiceUserConversation": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListUser": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:ListUserConversation": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "conversations_v1:UpdateConfiguration": {};
  "conversations_v1:UpdateConfigurationAddress": {};
  "conversations_v1:UpdateConfigurationWebhook": {};
  "conversations_v1:UpdateConversation": {};
  "conversations_v1:UpdateConversationMessage": {};
  "conversations_v1:UpdateConversationParticipant": {};
  "conversations_v1:UpdateConversationScopedWebhook": {};
  "conversations_v1:UpdateCredential": {};
  "conversations_v1:UpdateRole": {};
  "conversations_v1:UpdateServiceConfiguration": {};
  "conversations_v1:UpdateServiceConversation": {};
  "conversations_v1:UpdateServiceConversationMessage": {};
  "conversations_v1:UpdateServiceConversationParticipant": {};
  "conversations_v1:UpdateServiceConversationScopedWebhook": {};
  "conversations_v1:UpdateServiceNotification": {};
  "conversations_v1:UpdateServiceRole": {};
  "conversations_v1:UpdateServiceUser": {};
  "conversations_v1:UpdateServiceUserConversation": {};
  "conversations_v1:UpdateServiceWebhookConfiguration": {};
  "conversations_v1:UpdateUser": {};
  "conversations_v1:UpdateUserConversation": {};
  "conversations_v2:CreateCommunicationInConversation": {};
  "conversations_v2:CreateConfiguration": {};
  "conversations_v2:CreateConversationAction": {};
  "conversations_v2:CreateConversationWithConfig": {};
  "conversations_v2:CreateParticipantInConversation": {};
  "conversations_v2:DeleteConfiguration": {};
  "conversations_v2:DeleteConversationAsync": {};
  "conversations_v2:FetchCommunication": {};
  "conversations_v2:FetchConfiguration": {};
  "conversations_v2:FetchConversation": {};
  "conversations_v2:FetchConversationAction": {};
  "conversations_v2:FetchOperationStatus": {};
  "conversations_v2:FetchParticipant": {};
  "conversations_v2:ListCommunicationByConversation": {
  channelId?: string;
  pageSize?: number;
  pageToken?: string;
};
  "conversations_v2:ListConfiguration": {
  pageSize?: number;
  pageToken?: string;
  memoryStoreId?: string;
};
  "conversations_v2:ListConversationByAccount": {
  status?: ReadonlyArray<"ACTIVE" | "INACTIVE" | "CLOSED">;
  channelId?: string;
  pageSize?: number;
  pageToken?: string;
};
  "conversations_v2:ListParticipantByConversation": {
  pageSize?: number;
  pageToken?: string;
};
  "conversations_v2:PatchConversationById": {};
  "conversations_v2:UpdateConfiguration": {};
  "conversations_v2:UpdateConversationById": {};
  "conversations_v2:UpdateParticipantInConversation": {};
  "messaging_v1:CreateAlphaSender": {};
  "messaging_v1:CreateBrandRegistrationOtp": {};
  "messaging_v1:CreateBrandRegistrations": {};
  "messaging_v1:CreateBrandVetting": {};
  "messaging_v1:CreateChannelSender": {};
  "messaging_v1:CreateDestinationAlphaSender": {};
  "messaging_v1:CreateExternalCampaign": {};
  "messaging_v1:CreateLinkshorteningMessagingService": {};
  "messaging_v1:CreatePhoneNumber": {};
  "messaging_v1:CreateService": {};
  "messaging_v1:CreateShortCode": {};
  "messaging_v1:CreateTollfreeVerification": {};
  "messaging_v1:CreateUsAppToPerson": {};
  "messaging_v1:DeleteAlphaSender": {};
  "messaging_v1:DeleteChannelSender": {};
  "messaging_v1:DeleteDestinationAlphaSender": {};
  "messaging_v1:DeleteDomainCertV4": {};
  "messaging_v1:DeleteLinkshorteningMessagingService": {};
  "messaging_v1:DeletePhoneNumber": {};
  "messaging_v1:DeleteService": {};
  "messaging_v1:DeleteShortCode": {};
  "messaging_v1:DeleteTollfreeVerification": {};
  "messaging_v1:DeleteUsAppToPerson": {};
  "messaging_v1:FetchAlphaSender": {};
  "messaging_v1:FetchBrandRegistrations": {};
  "messaging_v1:FetchBrandVetting": {};
  "messaging_v1:FetchChannelSender": {};
  "messaging_v1:FetchDeactivation": {
  Date?: string;
};
  "messaging_v1:FetchDestinationAlphaSender": {};
  "messaging_v1:FetchDomainCertV4": {};
  "messaging_v1:FetchDomainConfig": {};
  "messaging_v1:FetchDomainConfigMessagingService": {};
  "messaging_v1:FetchDomainDnsValidation": {};
  "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation": {};
  "messaging_v1:FetchPhoneNumber": {};
  "messaging_v1:FetchService": {};
  "messaging_v1:FetchShortCode": {};
  "messaging_v1:FetchTollfreeVerification": {};
  "messaging_v1:FetchUsAppToPerson": {};
  "messaging_v1:FetchUsAppToPersonUsecase": {
  BrandRegistrationSid?: string;
};
  "messaging_v1:FetchUsecase": {};
  "messaging_v1:ListAlphaSender": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "messaging_v1:ListBrandRegistrations": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "messaging_v1:ListBrandVetting": {
  VettingProvider?: TwilioSmsFullApiSchemaBrandVettingEnumVettingProvider;
};
  "messaging_v1:ListChannelSender": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "messaging_v1:ListDestinationAlphaSender": {
  IsoCountryCode?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "messaging_v1:ListPhoneNumber": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "messaging_v1:ListService": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "messaging_v1:ListShortCode": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "messaging_v1:ListTollfreeVerification": {
  TollfreePhoneNumberSid?: string;
  Status?: TwilioSmsFullApiSchemaTollfreeVerificationEnumStatus;
  ExternalReferenceId?: string;
  IncludeSubAccounts?: boolean;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
  TrustProductSid?: ReadonlyArray<string>;
};
  "messaging_v1:ListUsAppToPerson": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "messaging_v1:UpdateBrandRegistrations": {};
  "messaging_v1:UpdateDomainCertV4": {};
  "messaging_v1:UpdateDomainConfig": {};
  "messaging_v1:UpdateRequestManagedCert": {};
  "messaging_v1:UpdateService": {};
  "messaging_v1:UpdateTollfreeVerification": {};
  "messaging_v1:UpdateUsAppToPerson": {};
  "messaging_v2:CreateChannelsSender": {};
  "messaging_v2:CreateTypingIndicator": {};
  "messaging_v2:DeleteChannelsSender": {};
  "messaging_v2:FetchChannelsSender": {};
  "messaging_v2:FetchDomainCertV4": {};
  "messaging_v2:ListChannelsSender": {
  Channel: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "messaging_v2:UpdateChannelsSender": {};
  "messaging_v3:CreateV3TypingIndicator": {};
  "studio_v1:CreateEngagement": {};
  "studio_v1:CreateExecution": {};
  "studio_v1:DeleteEngagement": {};
  "studio_v1:DeleteExecution": {};
  "studio_v1:DeleteFlow": {};
  "studio_v1:FetchEngagement": {};
  "studio_v1:FetchEngagementContext": {};
  "studio_v1:FetchExecution": {};
  "studio_v1:FetchExecutionContext": {};
  "studio_v1:FetchExecutionStep": {};
  "studio_v1:FetchExecutionStepContext": {};
  "studio_v1:FetchFlow": {};
  "studio_v1:FetchStep": {};
  "studio_v1:FetchStepContext": {};
  "studio_v1:ListEngagement": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "studio_v1:ListExecution": {
  DateCreatedFrom?: string;
  DateCreatedTo?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "studio_v1:ListExecutionStep": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "studio_v1:ListFlow": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "studio_v1:ListStep": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "studio_v1:UpdateExecution": {};
  "studio_v2:CreateExecution": {};
  "studio_v2:CreateFlow": {};
  "studio_v2:DeleteExecution": {};
  "studio_v2:DeleteFlow": {};
  "studio_v2:FetchExecution": {};
  "studio_v2:FetchExecutionContext": {};
  "studio_v2:FetchExecutionStep": {};
  "studio_v2:FetchExecutionStepContext": {};
  "studio_v2:FetchFlow": {};
  "studio_v2:FetchFlowRevision": {};
  "studio_v2:FetchTestUser": {};
  "studio_v2:ListExecution": {
  status?: TwilioSmsFullApiSchemaExecutionEnumStatus2;
  DateCreatedFrom?: string;
  DateCreatedTo?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "studio_v2:ListExecutionStep": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "studio_v2:ListFlow": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "studio_v2:ListFlowRevision": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "studio_v2:UpdateExecution": {};
  "studio_v2:UpdateFlow": {};
  "studio_v2:UpdateFlowValidate": {};
  "studio_v2:UpdateTestUser": {};
  "verify_v2:CreateAccessToken": {};
  "verify_v2:CreateBucket": {};
  "verify_v2:CreateChallenge": {};
  "verify_v2:CreateChallengePasskeys": {};
  "verify_v2:CreateEntity": {};
  "verify_v2:CreateMessagingConfiguration": {};
  "verify_v2:CreateNewFactor": {};
  "verify_v2:CreateNewFactorPasskey": {};
  "verify_v2:CreateNotification": {};
  "verify_v2:CreateRateLimit": {};
  "verify_v2:CreateSafelist": {};
  "verify_v2:CreateService": {};
  "verify_v2:CreateVerification": {};
  "verify_v2:CreateVerificationCheck": {};
  "verify_v2:CreateWebhook": {};
  "verify_v2:DeleteBucket": {};
  "verify_v2:DeleteEntity": {};
  "verify_v2:DeleteFactor": {};
  "verify_v2:DeleteMessagingConfiguration": {};
  "verify_v2:DeleteRateLimit": {};
  "verify_v2:DeleteSafelist": {};
  "verify_v2:DeleteService": {};
  "verify_v2:DeleteWebhook": {};
  "verify_v2:FetchAccessToken": {};
  "verify_v2:FetchBucket": {};
  "verify_v2:FetchChallenge": {};
  "verify_v2:FetchEntity": {};
  "verify_v2:FetchFactor": {};
  "verify_v2:FetchForm": {};
  "verify_v2:FetchMessagingConfiguration": {};
  "verify_v2:FetchRateLimit": {};
  "verify_v2:FetchSafelist": {};
  "verify_v2:FetchService": {};
  "verify_v2:FetchVerification": {};
  "verify_v2:FetchVerificationAttempt": {};
  "verify_v2:FetchVerificationAttemptsSummary": {
  VerifyServiceSid?: string;
  DateCreatedAfter?: string;
  DateCreatedBefore?: string;
  Country?: string;
  Channel?: TwilioSmsFullApiSchemaVerificationAttemptsSummaryEnumChannels;
  DestinationPrefix?: string;
};
  "verify_v2:FetchWebhook": {};
  "verify_v2:ListBucket": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:ListChallenge": {
  FactorSid?: string;
  Status?: TwilioSmsFullApiSchemaChallengeEnumChallengeStatuses;
  Order?: TwilioSmsFullApiSchemaChallengeEnumListOrders;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:ListEntity": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:ListFactor": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:ListMessagingConfiguration": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:ListRateLimit": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:ListService": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:ListVerificationAttempt": {
  DateCreatedAfter?: string;
  DateCreatedBefore?: string;
  "ChannelData.To"?: string;
  Country?: string;
  Channel?: TwilioSmsFullApiSchemaVerificationAttemptEnumChannels;
  VerifyServiceSid?: string;
  VerificationSid?: string;
  Status?: TwilioSmsFullApiSchemaVerificationAttemptEnumConversionStatus;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:ListVerificationTemplate": {
  FriendlyName?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:ListWebhook": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "verify_v2:UpdateBucket": {};
  "verify_v2:UpdateChallenge": {};
  "verify_v2:UpdateChallengePasskeys": {};
  "verify_v2:UpdateFactor": {};
  "verify_v2:UpdateMessagingConfiguration": {};
  "verify_v2:UpdatePasskeysFactor": {};
  "verify_v2:UpdateRateLimit": {};
  "verify_v2:UpdateService": {};
  "verify_v2:UpdateVerification": {};
  "verify_v2:UpdateWebhook": {};
}

export interface TwilioSmsFullApiOperationQueryRequiredMap {
  "api_v2010:CreateMessage": false;
  "api_v2010:CreateMessageFeedback": false;
  "api_v2010:DeleteMedia": false;
  "api_v2010:DeleteMessage": false;
  "api_v2010:FetchMedia": false;
  "api_v2010:FetchMessage": false;
  "api_v2010:FetchShortCode": false;
  "api_v2010:ListMedia": false;
  "api_v2010:ListMessage": false;
  "api_v2010:ListShortCode": false;
  "api_v2010:UpdateMessage": false;
  "api_v2010:UpdateShortCode": false;
  "content_v1:CreateApprovalCreate": false;
  "content_v1:CreateContent": false;
  "content_v1:DeleteContent": false;
  "content_v1:FetchApprovalFetch": false;
  "content_v1:FetchContent": false;
  "content_v1:ListContent": false;
  "content_v1:ListContentAndApprovals": false;
  "content_v1:ListLegacyContent": false;
  "content_v1:UpdateContent": false;
  "content_v2:ListContent": false;
  "content_v2:ListContentAndApprovals": false;
  "conversations_v1:CreateConfigurationAddress": false;
  "conversations_v1:CreateConversation": false;
  "conversations_v1:CreateConversationMessage": false;
  "conversations_v1:CreateConversationParticipant": false;
  "conversations_v1:CreateConversationScopedWebhook": false;
  "conversations_v1:CreateConversationWithParticipants": false;
  "conversations_v1:CreateCredential": false;
  "conversations_v1:CreateRole": false;
  "conversations_v1:CreateService": false;
  "conversations_v1:CreateServiceConversation": false;
  "conversations_v1:CreateServiceConversationMessage": false;
  "conversations_v1:CreateServiceConversationParticipant": false;
  "conversations_v1:CreateServiceConversationScopedWebhook": false;
  "conversations_v1:CreateServiceConversationWithParticipants": false;
  "conversations_v1:CreateServiceRole": false;
  "conversations_v1:CreateServiceUser": false;
  "conversations_v1:CreateUser": false;
  "conversations_v1:DeleteConfigurationAddress": false;
  "conversations_v1:DeleteConversation": false;
  "conversations_v1:DeleteConversationMessage": false;
  "conversations_v1:DeleteConversationParticipant": false;
  "conversations_v1:DeleteConversationScopedWebhook": false;
  "conversations_v1:DeleteCredential": false;
  "conversations_v1:DeleteRole": false;
  "conversations_v1:DeleteService": false;
  "conversations_v1:DeleteServiceBinding": false;
  "conversations_v1:DeleteServiceConversation": false;
  "conversations_v1:DeleteServiceConversationMessage": false;
  "conversations_v1:DeleteServiceConversationParticipant": false;
  "conversations_v1:DeleteServiceConversationScopedWebhook": false;
  "conversations_v1:DeleteServiceRole": false;
  "conversations_v1:DeleteServiceUser": false;
  "conversations_v1:DeleteServiceUserConversation": false;
  "conversations_v1:DeleteUser": false;
  "conversations_v1:DeleteUserConversation": false;
  "conversations_v1:FetchConfiguration": false;
  "conversations_v1:FetchConfigurationAddress": false;
  "conversations_v1:FetchConfigurationWebhook": false;
  "conversations_v1:FetchConversation": false;
  "conversations_v1:FetchConversationMessage": false;
  "conversations_v1:FetchConversationMessageReceipt": false;
  "conversations_v1:FetchConversationParticipant": false;
  "conversations_v1:FetchConversationScopedWebhook": false;
  "conversations_v1:FetchCredential": false;
  "conversations_v1:FetchRole": false;
  "conversations_v1:FetchService": false;
  "conversations_v1:FetchServiceBinding": false;
  "conversations_v1:FetchServiceConfiguration": false;
  "conversations_v1:FetchServiceConversation": false;
  "conversations_v1:FetchServiceConversationMessage": false;
  "conversations_v1:FetchServiceConversationMessageReceipt": false;
  "conversations_v1:FetchServiceConversationParticipant": false;
  "conversations_v1:FetchServiceConversationScopedWebhook": false;
  "conversations_v1:FetchServiceNotification": false;
  "conversations_v1:FetchServiceRole": false;
  "conversations_v1:FetchServiceUser": false;
  "conversations_v1:FetchServiceUserConversation": false;
  "conversations_v1:FetchServiceWebhookConfiguration": false;
  "conversations_v1:FetchUser": false;
  "conversations_v1:FetchUserConversation": false;
  "conversations_v1:ListConfigurationAddress": false;
  "conversations_v1:ListConversation": false;
  "conversations_v1:ListConversationMessage": false;
  "conversations_v1:ListConversationMessageReceipt": false;
  "conversations_v1:ListConversationParticipant": false;
  "conversations_v1:ListConversationScopedWebhook": false;
  "conversations_v1:ListCredential": false;
  "conversations_v1:ListParticipantConversation": false;
  "conversations_v1:ListRole": false;
  "conversations_v1:ListService": false;
  "conversations_v1:ListServiceBinding": false;
  "conversations_v1:ListServiceConversation": false;
  "conversations_v1:ListServiceConversationMessage": false;
  "conversations_v1:ListServiceConversationMessageReceipt": false;
  "conversations_v1:ListServiceConversationParticipant": false;
  "conversations_v1:ListServiceConversationScopedWebhook": false;
  "conversations_v1:ListServiceParticipantConversation": false;
  "conversations_v1:ListServiceRole": false;
  "conversations_v1:ListServiceUser": false;
  "conversations_v1:ListServiceUserConversation": false;
  "conversations_v1:ListUser": false;
  "conversations_v1:ListUserConversation": false;
  "conversations_v1:UpdateConfiguration": false;
  "conversations_v1:UpdateConfigurationAddress": false;
  "conversations_v1:UpdateConfigurationWebhook": false;
  "conversations_v1:UpdateConversation": false;
  "conversations_v1:UpdateConversationMessage": false;
  "conversations_v1:UpdateConversationParticipant": false;
  "conversations_v1:UpdateConversationScopedWebhook": false;
  "conversations_v1:UpdateCredential": false;
  "conversations_v1:UpdateRole": false;
  "conversations_v1:UpdateServiceConfiguration": false;
  "conversations_v1:UpdateServiceConversation": false;
  "conversations_v1:UpdateServiceConversationMessage": false;
  "conversations_v1:UpdateServiceConversationParticipant": false;
  "conversations_v1:UpdateServiceConversationScopedWebhook": false;
  "conversations_v1:UpdateServiceNotification": false;
  "conversations_v1:UpdateServiceRole": false;
  "conversations_v1:UpdateServiceUser": false;
  "conversations_v1:UpdateServiceUserConversation": false;
  "conversations_v1:UpdateServiceWebhookConfiguration": false;
  "conversations_v1:UpdateUser": false;
  "conversations_v1:UpdateUserConversation": false;
  "conversations_v2:CreateCommunicationInConversation": false;
  "conversations_v2:CreateConfiguration": false;
  "conversations_v2:CreateConversationAction": false;
  "conversations_v2:CreateConversationWithConfig": false;
  "conversations_v2:CreateParticipantInConversation": false;
  "conversations_v2:DeleteConfiguration": false;
  "conversations_v2:DeleteConversationAsync": false;
  "conversations_v2:FetchCommunication": false;
  "conversations_v2:FetchConfiguration": false;
  "conversations_v2:FetchConversation": false;
  "conversations_v2:FetchConversationAction": false;
  "conversations_v2:FetchOperationStatus": false;
  "conversations_v2:FetchParticipant": false;
  "conversations_v2:ListCommunicationByConversation": false;
  "conversations_v2:ListConfiguration": false;
  "conversations_v2:ListConversationByAccount": false;
  "conversations_v2:ListParticipantByConversation": false;
  "conversations_v2:PatchConversationById": false;
  "conversations_v2:UpdateConfiguration": false;
  "conversations_v2:UpdateConversationById": false;
  "conversations_v2:UpdateParticipantInConversation": false;
  "messaging_v1:CreateAlphaSender": false;
  "messaging_v1:CreateBrandRegistrationOtp": false;
  "messaging_v1:CreateBrandRegistrations": false;
  "messaging_v1:CreateBrandVetting": false;
  "messaging_v1:CreateChannelSender": false;
  "messaging_v1:CreateDestinationAlphaSender": false;
  "messaging_v1:CreateExternalCampaign": false;
  "messaging_v1:CreateLinkshorteningMessagingService": false;
  "messaging_v1:CreatePhoneNumber": false;
  "messaging_v1:CreateService": false;
  "messaging_v1:CreateShortCode": false;
  "messaging_v1:CreateTollfreeVerification": false;
  "messaging_v1:CreateUsAppToPerson": false;
  "messaging_v1:DeleteAlphaSender": false;
  "messaging_v1:DeleteChannelSender": false;
  "messaging_v1:DeleteDestinationAlphaSender": false;
  "messaging_v1:DeleteDomainCertV4": false;
  "messaging_v1:DeleteLinkshorteningMessagingService": false;
  "messaging_v1:DeletePhoneNumber": false;
  "messaging_v1:DeleteService": false;
  "messaging_v1:DeleteShortCode": false;
  "messaging_v1:DeleteTollfreeVerification": false;
  "messaging_v1:DeleteUsAppToPerson": false;
  "messaging_v1:FetchAlphaSender": false;
  "messaging_v1:FetchBrandRegistrations": false;
  "messaging_v1:FetchBrandVetting": false;
  "messaging_v1:FetchChannelSender": false;
  "messaging_v1:FetchDeactivation": false;
  "messaging_v1:FetchDestinationAlphaSender": false;
  "messaging_v1:FetchDomainCertV4": false;
  "messaging_v1:FetchDomainConfig": false;
  "messaging_v1:FetchDomainConfigMessagingService": false;
  "messaging_v1:FetchDomainDnsValidation": false;
  "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation": false;
  "messaging_v1:FetchPhoneNumber": false;
  "messaging_v1:FetchService": false;
  "messaging_v1:FetchShortCode": false;
  "messaging_v1:FetchTollfreeVerification": false;
  "messaging_v1:FetchUsAppToPerson": false;
  "messaging_v1:FetchUsAppToPersonUsecase": false;
  "messaging_v1:FetchUsecase": false;
  "messaging_v1:ListAlphaSender": false;
  "messaging_v1:ListBrandRegistrations": false;
  "messaging_v1:ListBrandVetting": false;
  "messaging_v1:ListChannelSender": false;
  "messaging_v1:ListDestinationAlphaSender": false;
  "messaging_v1:ListPhoneNumber": false;
  "messaging_v1:ListService": false;
  "messaging_v1:ListShortCode": false;
  "messaging_v1:ListTollfreeVerification": false;
  "messaging_v1:ListUsAppToPerson": false;
  "messaging_v1:UpdateBrandRegistrations": false;
  "messaging_v1:UpdateDomainCertV4": false;
  "messaging_v1:UpdateDomainConfig": false;
  "messaging_v1:UpdateRequestManagedCert": false;
  "messaging_v1:UpdateService": false;
  "messaging_v1:UpdateTollfreeVerification": false;
  "messaging_v1:UpdateUsAppToPerson": false;
  "messaging_v2:CreateChannelsSender": false;
  "messaging_v2:CreateTypingIndicator": false;
  "messaging_v2:DeleteChannelsSender": false;
  "messaging_v2:FetchChannelsSender": false;
  "messaging_v2:FetchDomainCertV4": false;
  "messaging_v2:ListChannelsSender": true;
  "messaging_v2:UpdateChannelsSender": false;
  "messaging_v3:CreateV3TypingIndicator": false;
  "studio_v1:CreateEngagement": false;
  "studio_v1:CreateExecution": false;
  "studio_v1:DeleteEngagement": false;
  "studio_v1:DeleteExecution": false;
  "studio_v1:DeleteFlow": false;
  "studio_v1:FetchEngagement": false;
  "studio_v1:FetchEngagementContext": false;
  "studio_v1:FetchExecution": false;
  "studio_v1:FetchExecutionContext": false;
  "studio_v1:FetchExecutionStep": false;
  "studio_v1:FetchExecutionStepContext": false;
  "studio_v1:FetchFlow": false;
  "studio_v1:FetchStep": false;
  "studio_v1:FetchStepContext": false;
  "studio_v1:ListEngagement": false;
  "studio_v1:ListExecution": false;
  "studio_v1:ListExecutionStep": false;
  "studio_v1:ListFlow": false;
  "studio_v1:ListStep": false;
  "studio_v1:UpdateExecution": false;
  "studio_v2:CreateExecution": false;
  "studio_v2:CreateFlow": false;
  "studio_v2:DeleteExecution": false;
  "studio_v2:DeleteFlow": false;
  "studio_v2:FetchExecution": false;
  "studio_v2:FetchExecutionContext": false;
  "studio_v2:FetchExecutionStep": false;
  "studio_v2:FetchExecutionStepContext": false;
  "studio_v2:FetchFlow": false;
  "studio_v2:FetchFlowRevision": false;
  "studio_v2:FetchTestUser": false;
  "studio_v2:ListExecution": false;
  "studio_v2:ListExecutionStep": false;
  "studio_v2:ListFlow": false;
  "studio_v2:ListFlowRevision": false;
  "studio_v2:UpdateExecution": false;
  "studio_v2:UpdateFlow": false;
  "studio_v2:UpdateFlowValidate": false;
  "studio_v2:UpdateTestUser": false;
  "verify_v2:CreateAccessToken": false;
  "verify_v2:CreateBucket": false;
  "verify_v2:CreateChallenge": false;
  "verify_v2:CreateChallengePasskeys": false;
  "verify_v2:CreateEntity": false;
  "verify_v2:CreateMessagingConfiguration": false;
  "verify_v2:CreateNewFactor": false;
  "verify_v2:CreateNewFactorPasskey": false;
  "verify_v2:CreateNotification": false;
  "verify_v2:CreateRateLimit": false;
  "verify_v2:CreateSafelist": false;
  "verify_v2:CreateService": false;
  "verify_v2:CreateVerification": false;
  "verify_v2:CreateVerificationCheck": false;
  "verify_v2:CreateWebhook": false;
  "verify_v2:DeleteBucket": false;
  "verify_v2:DeleteEntity": false;
  "verify_v2:DeleteFactor": false;
  "verify_v2:DeleteMessagingConfiguration": false;
  "verify_v2:DeleteRateLimit": false;
  "verify_v2:DeleteSafelist": false;
  "verify_v2:DeleteService": false;
  "verify_v2:DeleteWebhook": false;
  "verify_v2:FetchAccessToken": false;
  "verify_v2:FetchBucket": false;
  "verify_v2:FetchChallenge": false;
  "verify_v2:FetchEntity": false;
  "verify_v2:FetchFactor": false;
  "verify_v2:FetchForm": false;
  "verify_v2:FetchMessagingConfiguration": false;
  "verify_v2:FetchRateLimit": false;
  "verify_v2:FetchSafelist": false;
  "verify_v2:FetchService": false;
  "verify_v2:FetchVerification": false;
  "verify_v2:FetchVerificationAttempt": false;
  "verify_v2:FetchVerificationAttemptsSummary": false;
  "verify_v2:FetchWebhook": false;
  "verify_v2:ListBucket": false;
  "verify_v2:ListChallenge": false;
  "verify_v2:ListEntity": false;
  "verify_v2:ListFactor": false;
  "verify_v2:ListMessagingConfiguration": false;
  "verify_v2:ListRateLimit": false;
  "verify_v2:ListService": false;
  "verify_v2:ListVerificationAttempt": false;
  "verify_v2:ListVerificationTemplate": false;
  "verify_v2:ListWebhook": false;
  "verify_v2:UpdateBucket": false;
  "verify_v2:UpdateChallenge": false;
  "verify_v2:UpdateChallengePasskeys": false;
  "verify_v2:UpdateFactor": false;
  "verify_v2:UpdateMessagingConfiguration": false;
  "verify_v2:UpdatePasskeysFactor": false;
  "verify_v2:UpdateRateLimit": false;
  "verify_v2:UpdateService": false;
  "verify_v2:UpdateVerification": false;
  "verify_v2:UpdateWebhook": false;
}

export interface TwilioSmsFullApiOperationRequestBodyMap {
  "api_v2010:CreateMessage": {
  To: string;
  StatusCallback?: string;
  ApplicationSid?: string;
  MaxPrice?: number;
  ProvideFeedback?: boolean;
  Attempt?: number;
  ValidityPeriod?: number;
  ForceDelivery?: boolean;
  ContentRetention?: TwilioSmsFullApiSchemaMessageEnumContentRetention;
  AddressRetention?: TwilioSmsFullApiSchemaMessageEnumAddressRetention;
  SmartEncoded?: boolean;
  PersistentAction?: ReadonlyArray<string>;
  TrafficType?: TwilioSmsFullApiSchemaMessageEnumTrafficType;
  ShortenUrls?: boolean;
  ScheduleType?: TwilioSmsFullApiSchemaMessageEnumScheduleType;
  SendAt?: string;
  SendAsMms?: boolean;
  ContentVariables?: string;
  RiskCheck?: TwilioSmsFullApiSchemaMessageEnumRiskCheck;
  From?: string;
  FallbackFrom?: string;
  MessagingServiceSid?: string;
  Body?: string;
  MediaUrl?: ReadonlyArray<string>;
  ContentSid?: string;
};
  "api_v2010:CreateMessageFeedback": {
  Outcome?: TwilioSmsFullApiSchemaMessageFeedbackEnumOutcome;
};
  "api_v2010:DeleteMedia": never;
  "api_v2010:DeleteMessage": never;
  "api_v2010:FetchMedia": never;
  "api_v2010:FetchMessage": never;
  "api_v2010:FetchShortCode": never;
  "api_v2010:ListMedia": never;
  "api_v2010:ListMessage": never;
  "api_v2010:ListShortCode": never;
  "api_v2010:UpdateMessage": {
  Body?: string;
  Status?: TwilioSmsFullApiSchemaMessageEnumUpdateStatus;
};
  "api_v2010:UpdateShortCode": {
  FriendlyName?: string;
  ApiVersion?: string;
  SmsUrl?: string;
  SmsMethod?: "GET" | "POST";
  SmsFallbackUrl?: string;
  SmsFallbackMethod?: "GET" | "POST";
};
  "content_v1:CreateApprovalCreate": TwilioSmsFullApiSchemaContentApprovalRequest;
  "content_v1:CreateContent": TwilioSmsFullApiSchemaContentCreateRequest;
  "content_v1:DeleteContent": never;
  "content_v1:FetchApprovalFetch": never;
  "content_v1:FetchContent": never;
  "content_v1:ListContent": never;
  "content_v1:ListContentAndApprovals": never;
  "content_v1:ListLegacyContent": never;
  "content_v1:UpdateContent": TwilioSmsFullApiSchemaContentUpdateRequest;
  "content_v2:ListContent": never;
  "content_v2:ListContentAndApprovals": never;
  "conversations_v1:CreateConfigurationAddress": {
  Type: TwilioSmsFullApiSchemaConfigurationAddressEnumType;
  Address: string;
  FriendlyName?: string;
  "AutoCreation.Enabled"?: boolean;
  "AutoCreation.Type"?: TwilioSmsFullApiSchemaConfigurationAddressEnumAutoCreationType;
  "AutoCreation.ConversationServiceSid"?: string;
  "AutoCreation.WebhookUrl"?: string;
  "AutoCreation.WebhookMethod"?: TwilioSmsFullApiSchemaConfigurationAddressEnumMethod;
  "AutoCreation.WebhookFilters"?: ReadonlyArray<string>;
  "AutoCreation.StudioFlowSid"?: string;
  "AutoCreation.StudioRetryCount"?: number;
  AddressCountry?: string;
};
  "conversations_v1:CreateConversation": {
  FriendlyName?: string;
  UniqueName?: string;
  DateCreated?: string;
  DateUpdated?: string;
  MessagingServiceSid?: string;
  Attributes?: string;
  State?: TwilioSmsFullApiSchemaConversationEnumState;
  "Timers.Inactive"?: string;
  "Timers.Closed"?: string;
  "Bindings.Email.Address"?: string;
  "Bindings.Email.Name"?: string;
};
  "conversations_v1:CreateConversationMessage": {
  Author?: string;
  Body?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Attributes?: string;
  MediaSid?: string;
  ContentSid?: string;
  ContentVariables?: string;
  Subject?: string;
};
  "conversations_v1:CreateConversationParticipant": {
  Identity?: string;
  "MessagingBinding.Address"?: string;
  "MessagingBinding.ProxyAddress"?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Attributes?: string;
  "MessagingBinding.ProjectedAddress"?: string;
  RoleSid?: string;
};
  "conversations_v1:CreateConversationScopedWebhook": {
  Target: TwilioSmsFullApiSchemaConversationScopedWebhookEnumTarget;
  "Configuration.Url"?: string;
  "Configuration.Method"?: TwilioSmsFullApiSchemaConversationScopedWebhookEnumMethod;
  "Configuration.Filters"?: ReadonlyArray<string>;
  "Configuration.Triggers"?: ReadonlyArray<string>;
  "Configuration.FlowSid"?: string;
  "Configuration.ReplayAfter"?: number;
};
  "conversations_v1:CreateConversationWithParticipants": {
  FriendlyName?: string;
  UniqueName?: string;
  DateCreated?: string;
  DateUpdated?: string;
  MessagingServiceSid?: string;
  Attributes?: string;
  State?: TwilioSmsFullApiSchemaConversationWithParticipantsEnumState;
  "Timers.Inactive"?: string;
  "Timers.Closed"?: string;
  "Bindings.Email.Address"?: string;
  "Bindings.Email.Name"?: string;
  Participant?: ReadonlyArray<string>;
};
  "conversations_v1:CreateCredential": {
  Type: TwilioSmsFullApiSchemaCredentialEnumPushType;
  FriendlyName?: string;
  Certificate?: string;
  PrivateKey?: string;
  Sandbox?: boolean;
  ApiKey?: string;
  Secret?: string;
};
  "conversations_v1:CreateRole": {
  FriendlyName: string;
  Type: TwilioSmsFullApiSchemaRoleEnumRoleType;
  Permission: ReadonlyArray<string>;
};
  "conversations_v1:CreateService": {
  FriendlyName: string;
};
  "conversations_v1:CreateServiceConversation": {
  FriendlyName?: string;
  UniqueName?: string;
  Attributes?: string;
  MessagingServiceSid?: string;
  DateCreated?: string;
  DateUpdated?: string;
  State?: TwilioSmsFullApiSchemaServiceConversationEnumState;
  "Timers.Inactive"?: string;
  "Timers.Closed"?: string;
  "Bindings.Email.Address"?: string;
  "Bindings.Email.Name"?: string;
};
  "conversations_v1:CreateServiceConversationMessage": {
  Author?: string;
  Body?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Attributes?: string;
  MediaSid?: string;
  ContentSid?: string;
  ContentVariables?: string;
  Subject?: string;
};
  "conversations_v1:CreateServiceConversationParticipant": {
  Identity?: string;
  "MessagingBinding.Address"?: string;
  "MessagingBinding.ProxyAddress"?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Attributes?: string;
  "MessagingBinding.ProjectedAddress"?: string;
  RoleSid?: string;
};
  "conversations_v1:CreateServiceConversationScopedWebhook": {
  Target: TwilioSmsFullApiSchemaServiceConversationScopedWebhookEnumTarget;
  "Configuration.Url"?: string;
  "Configuration.Method"?: TwilioSmsFullApiSchemaServiceConversationScopedWebhookEnumMethod;
  "Configuration.Filters"?: ReadonlyArray<string>;
  "Configuration.Triggers"?: ReadonlyArray<string>;
  "Configuration.FlowSid"?: string;
  "Configuration.ReplayAfter"?: number;
};
  "conversations_v1:CreateServiceConversationWithParticipants": {
  FriendlyName?: string;
  UniqueName?: string;
  DateCreated?: string;
  DateUpdated?: string;
  MessagingServiceSid?: string;
  Attributes?: string;
  State?: TwilioSmsFullApiSchemaServiceConversationWithParticipantsEnumState;
  "Timers.Inactive"?: string;
  "Timers.Closed"?: string;
  "Bindings.Email.Address"?: string;
  "Bindings.Email.Name"?: string;
  Participant?: ReadonlyArray<string>;
};
  "conversations_v1:CreateServiceRole": {
  FriendlyName: string;
  Type: TwilioSmsFullApiSchemaServiceRoleEnumRoleType;
  Permission: ReadonlyArray<string>;
};
  "conversations_v1:CreateServiceUser": {
  Identity: string;
  FriendlyName?: string;
  Attributes?: string;
  RoleSid?: string;
};
  "conversations_v1:CreateUser": {
  Identity: string;
  FriendlyName?: string;
  Attributes?: string;
  RoleSid?: string;
};
  "conversations_v1:DeleteConfigurationAddress": never;
  "conversations_v1:DeleteConversation": never;
  "conversations_v1:DeleteConversationMessage": never;
  "conversations_v1:DeleteConversationParticipant": never;
  "conversations_v1:DeleteConversationScopedWebhook": never;
  "conversations_v1:DeleteCredential": never;
  "conversations_v1:DeleteRole": never;
  "conversations_v1:DeleteService": never;
  "conversations_v1:DeleteServiceBinding": never;
  "conversations_v1:DeleteServiceConversation": never;
  "conversations_v1:DeleteServiceConversationMessage": never;
  "conversations_v1:DeleteServiceConversationParticipant": never;
  "conversations_v1:DeleteServiceConversationScopedWebhook": never;
  "conversations_v1:DeleteServiceRole": never;
  "conversations_v1:DeleteServiceUser": never;
  "conversations_v1:DeleteServiceUserConversation": never;
  "conversations_v1:DeleteUser": never;
  "conversations_v1:DeleteUserConversation": never;
  "conversations_v1:FetchConfiguration": never;
  "conversations_v1:FetchConfigurationAddress": never;
  "conversations_v1:FetchConfigurationWebhook": never;
  "conversations_v1:FetchConversation": never;
  "conversations_v1:FetchConversationMessage": never;
  "conversations_v1:FetchConversationMessageReceipt": never;
  "conversations_v1:FetchConversationParticipant": never;
  "conversations_v1:FetchConversationScopedWebhook": never;
  "conversations_v1:FetchCredential": never;
  "conversations_v1:FetchRole": never;
  "conversations_v1:FetchService": never;
  "conversations_v1:FetchServiceBinding": never;
  "conversations_v1:FetchServiceConfiguration": never;
  "conversations_v1:FetchServiceConversation": never;
  "conversations_v1:FetchServiceConversationMessage": never;
  "conversations_v1:FetchServiceConversationMessageReceipt": never;
  "conversations_v1:FetchServiceConversationParticipant": never;
  "conversations_v1:FetchServiceConversationScopedWebhook": never;
  "conversations_v1:FetchServiceNotification": never;
  "conversations_v1:FetchServiceRole": never;
  "conversations_v1:FetchServiceUser": never;
  "conversations_v1:FetchServiceUserConversation": never;
  "conversations_v1:FetchServiceWebhookConfiguration": never;
  "conversations_v1:FetchUser": never;
  "conversations_v1:FetchUserConversation": never;
  "conversations_v1:ListConfigurationAddress": never;
  "conversations_v1:ListConversation": never;
  "conversations_v1:ListConversationMessage": never;
  "conversations_v1:ListConversationMessageReceipt": never;
  "conversations_v1:ListConversationParticipant": never;
  "conversations_v1:ListConversationScopedWebhook": never;
  "conversations_v1:ListCredential": never;
  "conversations_v1:ListParticipantConversation": never;
  "conversations_v1:ListRole": never;
  "conversations_v1:ListService": never;
  "conversations_v1:ListServiceBinding": never;
  "conversations_v1:ListServiceConversation": never;
  "conversations_v1:ListServiceConversationMessage": never;
  "conversations_v1:ListServiceConversationMessageReceipt": never;
  "conversations_v1:ListServiceConversationParticipant": never;
  "conversations_v1:ListServiceConversationScopedWebhook": never;
  "conversations_v1:ListServiceParticipantConversation": never;
  "conversations_v1:ListServiceRole": never;
  "conversations_v1:ListServiceUser": never;
  "conversations_v1:ListServiceUserConversation": never;
  "conversations_v1:ListUser": never;
  "conversations_v1:ListUserConversation": never;
  "conversations_v1:UpdateConfiguration": {
  DefaultChatServiceSid?: string;
  DefaultMessagingServiceSid?: string;
  DefaultInactiveTimer?: string;
  DefaultClosedTimer?: string;
};
  "conversations_v1:UpdateConfigurationAddress": {
  FriendlyName?: string;
  "AutoCreation.Enabled"?: boolean;
  "AutoCreation.Type"?: TwilioSmsFullApiSchemaConfigurationAddressEnumAutoCreationType;
  "AutoCreation.ConversationServiceSid"?: string;
  "AutoCreation.WebhookUrl"?: string;
  "AutoCreation.WebhookMethod"?: TwilioSmsFullApiSchemaConfigurationAddressEnumMethod;
  "AutoCreation.WebhookFilters"?: ReadonlyArray<string>;
  "AutoCreation.StudioFlowSid"?: string;
  "AutoCreation.StudioRetryCount"?: number;
};
  "conversations_v1:UpdateConfigurationWebhook": {
  Method?: string;
  Filters?: ReadonlyArray<string>;
  PreWebhookUrl?: string;
  PostWebhookUrl?: string;
  Target?: TwilioSmsFullApiSchemaConfigurationWebhookEnumTarget;
};
  "conversations_v1:UpdateConversation": {
  FriendlyName?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Attributes?: string;
  MessagingServiceSid?: string;
  State?: TwilioSmsFullApiSchemaConversationEnumState;
  "Timers.Inactive"?: string;
  "Timers.Closed"?: string;
  UniqueName?: string;
  "Bindings.Email.Address"?: string;
  "Bindings.Email.Name"?: string;
};
  "conversations_v1:UpdateConversationMessage": {
  Author?: string;
  Body?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Attributes?: string;
  Subject?: string;
};
  "conversations_v1:UpdateConversationParticipant": {
  DateCreated?: string;
  DateUpdated?: string;
  Attributes?: string;
  RoleSid?: string;
  "MessagingBinding.ProxyAddress"?: string;
  "MessagingBinding.ProjectedAddress"?: string;
  Identity?: string;
  LastReadMessageIndex?: number | null;
  LastReadTimestamp?: string;
};
  "conversations_v1:UpdateConversationScopedWebhook": {
  "Configuration.Url"?: string;
  "Configuration.Method"?: TwilioSmsFullApiSchemaConversationScopedWebhookEnumMethod;
  "Configuration.Filters"?: ReadonlyArray<string>;
  "Configuration.Triggers"?: ReadonlyArray<string>;
  "Configuration.FlowSid"?: string;
};
  "conversations_v1:UpdateCredential": {
  Type?: TwilioSmsFullApiSchemaCredentialEnumPushType;
  FriendlyName?: string;
  Certificate?: string;
  PrivateKey?: string;
  Sandbox?: boolean;
  ApiKey?: string;
  Secret?: string;
};
  "conversations_v1:UpdateRole": {
  Permission: ReadonlyArray<string>;
};
  "conversations_v1:UpdateServiceConfiguration": {
  DefaultConversationCreatorRoleSid?: string;
  DefaultConversationRoleSid?: string;
  DefaultChatServiceRoleSid?: string;
  ReachabilityEnabled?: boolean;
};
  "conversations_v1:UpdateServiceConversation": {
  FriendlyName?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Attributes?: string;
  MessagingServiceSid?: string;
  State?: TwilioSmsFullApiSchemaServiceConversationEnumState;
  "Timers.Inactive"?: string;
  "Timers.Closed"?: string;
  UniqueName?: string;
  "Bindings.Email.Address"?: string;
  "Bindings.Email.Name"?: string;
};
  "conversations_v1:UpdateServiceConversationMessage": {
  Author?: string;
  Body?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Attributes?: string;
  Subject?: string;
};
  "conversations_v1:UpdateServiceConversationParticipant": {
  DateCreated?: string;
  DateUpdated?: string;
  Identity?: string;
  Attributes?: string;
  RoleSid?: string;
  "MessagingBinding.ProxyAddress"?: string;
  "MessagingBinding.ProjectedAddress"?: string;
  LastReadMessageIndex?: number | null;
  LastReadTimestamp?: string;
};
  "conversations_v1:UpdateServiceConversationScopedWebhook": {
  "Configuration.Url"?: string;
  "Configuration.Method"?: TwilioSmsFullApiSchemaServiceConversationScopedWebhookEnumMethod;
  "Configuration.Filters"?: ReadonlyArray<string>;
  "Configuration.Triggers"?: ReadonlyArray<string>;
  "Configuration.FlowSid"?: string;
};
  "conversations_v1:UpdateServiceNotification": {
  LogEnabled?: boolean;
  "NewMessage.Enabled"?: boolean;
  "NewMessage.Template"?: string;
  "NewMessage.Sound"?: string;
  "NewMessage.BadgeCountEnabled"?: boolean;
  "AddedToConversation.Enabled"?: boolean;
  "AddedToConversation.Template"?: string;
  "AddedToConversation.Sound"?: string;
  "RemovedFromConversation.Enabled"?: boolean;
  "RemovedFromConversation.Template"?: string;
  "RemovedFromConversation.Sound"?: string;
  "NewMessage.WithMedia.Enabled"?: boolean;
  "NewMessage.WithMedia.Template"?: string;
};
  "conversations_v1:UpdateServiceRole": {
  Permission: ReadonlyArray<string>;
};
  "conversations_v1:UpdateServiceUser": {
  FriendlyName?: string;
  Attributes?: string;
  RoleSid?: string;
};
  "conversations_v1:UpdateServiceUserConversation": {
  NotificationLevel?: TwilioSmsFullApiSchemaServiceUserConversationEnumNotificationLevel;
  LastReadTimestamp?: string;
  LastReadMessageIndex?: number | null;
};
  "conversations_v1:UpdateServiceWebhookConfiguration": {
  PreWebhookUrl?: string;
  PostWebhookUrl?: string;
  Filters?: ReadonlyArray<string>;
  Method?: string;
};
  "conversations_v1:UpdateUser": {
  FriendlyName?: string;
  Attributes?: string;
  RoleSid?: string;
};
  "conversations_v1:UpdateUserConversation": {
  NotificationLevel?: TwilioSmsFullApiSchemaUserConversationEnumNotificationLevel;
  LastReadTimestamp?: string;
  LastReadMessageIndex?: number | null;
};
  "conversations_v2:CreateCommunicationInConversation": {
  author: {
  address: string;
  channel: "VOICE" | "SMS" | "RCS" | "WHATSAPP" | "CHAT";
  participantId?: string;
};
  content: ({
  type: "TEXT";
  text: string;
} | {
  type: "TRANSCRIPTION";
  text: string;
  transcription?: {
  channel?: number;
  confidence?: number;
  engine?: string;
};
});
  channelId?: string;
  recipients: ReadonlyArray<{
  address: string;
  channel: "VOICE" | "SMS" | "RCS" | "WHATSAPP" | "CHAT";
  participantId?: string;
}>;
};
  "conversations_v2:CreateConfiguration": {
  displayName: string;
  description: string;
  conversationGroupingType: "GROUP_BY_PROFILE" | "GROUP_BY_PARTICIPANT_ADDRESSES" | "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE";
  memoryStoreId: string;
  channelSettings?: {
  readonly [key: string]: {
  statusTimeouts?: {
  inactive?: number;
  closed?: number;
};
  captureRules?: ReadonlyArray<{
  from: string;
  to: string;
  metadata?: {
  readonly [key: string]: string | undefined;
};
}>;
} | undefined;
};
  statusCallbacks?: ReadonlyArray<{
  url: string;
  method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
}>;
  intelligenceConfigurationIds?: ReadonlyArray<string>;
  memoryExtractionEnabled?: boolean;
};
  "conversations_v2:CreateConversationAction": {
  type: string;
  payload: TwilioSmsFullApiSchemaConversationsV2SendMessagePayload;
};
  "conversations_v2:CreateConversationWithConfig": {
  configurationId: string;
  name?: string;
  configuration?: {
  intelligenceConfigurationIds?: ReadonlyArray<string>;
};
  participants?: ReadonlyArray<{
  name?: string;
  type?: "HUMAN_AGENT" | "CUSTOMER" | "AI_AGENT";
  profileId?: string;
  addresses?: ReadonlyArray<{
  channel: "VOICE" | "SMS" | "RCS" | "EMAIL" | "WHATSAPP" | "CHAT" | "API" | "SYSTEM";
  address: string;
  channelId?: string;
}>;
}>;
};
  "conversations_v2:CreateParticipantInConversation": {
  name?: string;
  type?: "HUMAN_AGENT" | "CUSTOMER" | "AI_AGENT" | "AGENT" | "UNKNOWN";
  profileId?: string;
  addresses: ReadonlyArray<{
  channel: "VOICE" | "SMS" | "RCS" | "WHATSAPP" | "CHAT";
  address: string;
  channelId?: string;
}>;
};
  "conversations_v2:DeleteConfiguration": never;
  "conversations_v2:DeleteConversationAsync": never;
  "conversations_v2:FetchCommunication": never;
  "conversations_v2:FetchConfiguration": never;
  "conversations_v2:FetchConversation": never;
  "conversations_v2:FetchConversationAction": never;
  "conversations_v2:FetchOperationStatus": never;
  "conversations_v2:FetchParticipant": never;
  "conversations_v2:ListCommunicationByConversation": never;
  "conversations_v2:ListConfiguration": never;
  "conversations_v2:ListConversationByAccount": never;
  "conversations_v2:ListParticipantByConversation": never;
  "conversations_v2:PatchConversationById": {
  name?: string;
  status?: "ACTIVE" | "INACTIVE" | "CLOSED";
  configuration?: {
  statusCallbacks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2StatusCallbackConfig>;
};
};
  "conversations_v2:UpdateConfiguration": {
  displayName?: string;
  description: string;
  conversationGroupingType: "GROUP_BY_PROFILE" | "GROUP_BY_PARTICIPANT_ADDRESSES" | "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE";
  memoryStoreId: string;
  channelSettings: {
  readonly [key: string]: {
  statusTimeouts?: {
  inactive?: number;
  closed?: number;
};
  captureRules?: ReadonlyArray<{
  from: string;
  to: string;
  metadata?: {
  readonly [key: string]: string | undefined;
};
}>;
} | undefined;
};
  statusCallbacks?: ReadonlyArray<{
  url: string;
  method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
}>;
  intelligenceConfigurationIds?: ReadonlyArray<string>;
  memoryExtractionEnabled?: boolean;
};
  "conversations_v2:UpdateConversationById": {
  name?: string;
  status: "ACTIVE" | "INACTIVE" | "CLOSED";
};
  "conversations_v2:UpdateParticipantInConversation": {
  name?: string;
  type?: "HUMAN_AGENT" | "CUSTOMER" | "AI_AGENT" | "AGENT" | "UNKNOWN";
  profileId?: string;
  addresses?: ReadonlyArray<{
  channel: "VOICE" | "SMS" | "RCS" | "WHATSAPP" | "CHAT";
  address: string;
  channelId?: string;
}>;
};
  "messaging_v1:CreateAlphaSender": {
  AlphaSender: string;
};
  "messaging_v1:CreateBrandRegistrationOtp": never;
  "messaging_v1:CreateBrandRegistrations": {
  CustomerProfileBundleSid: string;
  A2PProfileBundleSid: string;
  BrandType?: string;
  Mock?: boolean;
  SkipAutomaticSecVet?: boolean;
};
  "messaging_v1:CreateBrandVetting": {
  VettingProvider: TwilioSmsFullApiSchemaBrandVettingEnumVettingProvider;
  VettingId?: string;
};
  "messaging_v1:CreateChannelSender": {
  Sid: string;
};
  "messaging_v1:CreateDestinationAlphaSender": {
  AlphaSender: string;
  IsoCountryCode?: string;
};
  "messaging_v1:CreateExternalCampaign": {
  CampaignId: string;
  MessagingServiceSid: string;
  CnpMigration?: boolean;
};
  "messaging_v1:CreateLinkshorteningMessagingService": never;
  "messaging_v1:CreatePhoneNumber": {
  PhoneNumberSid: string;
};
  "messaging_v1:CreateService": {
  FriendlyName: string;
  InboundRequestUrl?: string;
  InboundMethod?: "GET" | "POST";
  FallbackUrl?: string;
  FallbackMethod?: "GET" | "POST";
  StatusCallback?: string;
  StickySender?: boolean;
  MmsConverter?: boolean;
  SmartEncoding?: boolean;
  ScanMessageContent?: TwilioSmsFullApiSchemaServiceEnumScanMessageContent;
  FallbackToLongCode?: boolean;
  AreaCodeGeomatch?: boolean;
  ValidityPeriod?: number;
  SynchronousValidation?: boolean;
  Usecase?: string;
  UseInboundWebhookOnNumber?: boolean;
};
  "messaging_v1:CreateShortCode": {
  ShortCodeSid: string;
};
  "messaging_v1:CreateTollfreeVerification": {
  BusinessName: string;
  BusinessWebsite: string;
  NotificationEmail: string;
  UseCaseCategories: TwilioSmsFullApiSchemaTollfreeVerificationEnumUseCaseCategories;
  UseCaseSummary: string;
  ProductionMessageSample: string;
  OptInImageUrls: ReadonlyArray<string>;
  OptInType: TwilioSmsFullApiSchemaTollfreeVerificationEnumOptInType;
  MessageVolume: string;
  TollfreePhoneNumberSid: string;
  CustomerProfileSid?: string;
  BusinessStreetAddress?: string;
  BusinessStreetAddress2?: string;
  BusinessCity?: string;
  BusinessStateProvinceRegion?: string;
  BusinessPostalCode?: string;
  BusinessCountry?: string;
  AdditionalInformation?: string;
  BusinessContactFirstName?: string;
  BusinessContactLastName?: string;
  BusinessContactEmail?: string;
  BusinessContactPhone?: string;
  ExternalReferenceId?: string;
  BusinessRegistrationNumber?: string;
  BusinessRegistrationAuthority?: TwilioSmsFullApiSchemaTollfreeVerificationEnumBusinessRegistrationAuthority;
  BusinessRegistrationCountry?: string;
  BusinessType?: TwilioSmsFullApiSchemaTollfreeVerificationEnumBusinessType;
  BusinessRegistrationPhoneNumber?: string;
  DoingBusinessAs?: string;
  OptInConfirmationMessage?: string;
  HelpMessageSample?: string;
  PrivacyPolicyUrl?: string;
  TermsAndConditionsUrl?: string;
  AgeGatedContent?: boolean;
  OptInKeywords?: ReadonlyArray<string>;
  VettingProvider?: TwilioSmsFullApiSchemaTollfreeVerificationEnumVettingProvider;
  VettingId?: string;
};
  "messaging_v1:CreateUsAppToPerson": {
  BrandRegistrationSid: string;
  Description: string;
  MessageFlow: string;
  MessageSamples: ReadonlyArray<string>;
  UsAppToPersonUsecase: string;
  HasEmbeddedLinks: boolean;
  HasEmbeddedPhone: boolean;
  OptInMessage?: string;
  OptOutMessage?: string;
  HelpMessage?: string;
  OptInKeywords?: ReadonlyArray<string>;
  OptOutKeywords?: ReadonlyArray<string>;
  HelpKeywords?: ReadonlyArray<string>;
  SubscriberOptIn?: boolean;
  AgeGated?: boolean;
  DirectLending?: boolean;
  PrivacyPolicyUrl?: string;
  TermsAndConditionsUrl?: string;
};
  "messaging_v1:DeleteAlphaSender": never;
  "messaging_v1:DeleteChannelSender": never;
  "messaging_v1:DeleteDestinationAlphaSender": never;
  "messaging_v1:DeleteDomainCertV4": never;
  "messaging_v1:DeleteLinkshorteningMessagingService": never;
  "messaging_v1:DeletePhoneNumber": never;
  "messaging_v1:DeleteService": never;
  "messaging_v1:DeleteShortCode": never;
  "messaging_v1:DeleteTollfreeVerification": never;
  "messaging_v1:DeleteUsAppToPerson": never;
  "messaging_v1:FetchAlphaSender": never;
  "messaging_v1:FetchBrandRegistrations": never;
  "messaging_v1:FetchBrandVetting": never;
  "messaging_v1:FetchChannelSender": never;
  "messaging_v1:FetchDeactivation": never;
  "messaging_v1:FetchDestinationAlphaSender": never;
  "messaging_v1:FetchDomainCertV4": never;
  "messaging_v1:FetchDomainConfig": never;
  "messaging_v1:FetchDomainConfigMessagingService": never;
  "messaging_v1:FetchDomainDnsValidation": never;
  "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation": never;
  "messaging_v1:FetchPhoneNumber": never;
  "messaging_v1:FetchService": never;
  "messaging_v1:FetchShortCode": never;
  "messaging_v1:FetchTollfreeVerification": never;
  "messaging_v1:FetchUsAppToPerson": never;
  "messaging_v1:FetchUsAppToPersonUsecase": never;
  "messaging_v1:FetchUsecase": never;
  "messaging_v1:ListAlphaSender": never;
  "messaging_v1:ListBrandRegistrations": never;
  "messaging_v1:ListBrandVetting": never;
  "messaging_v1:ListChannelSender": never;
  "messaging_v1:ListDestinationAlphaSender": never;
  "messaging_v1:ListPhoneNumber": never;
  "messaging_v1:ListService": never;
  "messaging_v1:ListShortCode": never;
  "messaging_v1:ListTollfreeVerification": never;
  "messaging_v1:ListUsAppToPerson": never;
  "messaging_v1:UpdateBrandRegistrations": never;
  "messaging_v1:UpdateDomainCertV4": {
  TlsCert: string;
};
  "messaging_v1:UpdateDomainConfig": {
  FallbackUrl?: string;
  CallbackUrl?: string;
  ContinueOnFailure?: boolean;
  DisableHttps?: boolean;
};
  "messaging_v1:UpdateRequestManagedCert": never;
  "messaging_v1:UpdateService": {
  FriendlyName?: string;
  InboundRequestUrl?: string;
  InboundMethod?: "GET" | "POST";
  FallbackUrl?: string;
  FallbackMethod?: "GET" | "POST";
  StatusCallback?: string;
  StickySender?: boolean;
  MmsConverter?: boolean;
  SmartEncoding?: boolean;
  ScanMessageContent?: TwilioSmsFullApiSchemaServiceEnumScanMessageContent;
  FallbackToLongCode?: boolean;
  AreaCodeGeomatch?: boolean;
  ValidityPeriod?: number;
  SynchronousValidation?: boolean;
  Usecase?: string;
  UseInboundWebhookOnNumber?: boolean;
};
  "messaging_v1:UpdateTollfreeVerification": {
  BusinessName?: string;
  BusinessWebsite?: string;
  NotificationEmail?: string;
  UseCaseCategories?: TwilioSmsFullApiSchemaTollfreeVerificationEnumUseCaseCategories;
  UseCaseSummary?: string;
  ProductionMessageSample?: string;
  OptInImageUrls?: ReadonlyArray<string>;
  OptInType?: TwilioSmsFullApiSchemaTollfreeVerificationEnumOptInType;
  MessageVolume?: string;
  BusinessStreetAddress?: string;
  BusinessStreetAddress2?: string;
  BusinessCity?: string;
  BusinessStateProvinceRegion?: string;
  BusinessPostalCode?: string;
  BusinessCountry?: string;
  AdditionalInformation?: string;
  BusinessContactFirstName?: string;
  BusinessContactLastName?: string;
  BusinessContactEmail?: string;
  BusinessContactPhone?: string;
  EditReason?: string;
  BusinessRegistrationNumber?: string;
  BusinessRegistrationAuthority?: TwilioSmsFullApiSchemaTollfreeVerificationEnumBusinessRegistrationAuthority;
  BusinessRegistrationCountry?: string;
  BusinessType?: TwilioSmsFullApiSchemaTollfreeVerificationEnumBusinessType;
  BusinessRegistrationPhoneNumber?: string;
  DoingBusinessAs?: string;
  OptInConfirmationMessage?: string;
  HelpMessageSample?: string;
  PrivacyPolicyUrl?: string;
  TermsAndConditionsUrl?: string;
  AgeGatedContent?: boolean;
  OptInKeywords?: ReadonlyArray<string>;
  VettingProvider?: TwilioSmsFullApiSchemaTollfreeVerificationEnumVettingProvider;
  VettingId?: string;
};
  "messaging_v1:UpdateUsAppToPerson": {
  HasEmbeddedLinks: boolean;
  HasEmbeddedPhone: boolean;
  MessageSamples: ReadonlyArray<string>;
  MessageFlow: string;
  Description: string;
  AgeGated: boolean;
  DirectLending: boolean;
  PrivacyPolicyUrl?: string;
  TermsAndConditionsUrl?: string;
};
  "messaging_v2:CreateChannelsSender": TwilioSmsFullApiSchemaMessagingV2ChannelsSenderRequestsCreate;
  "messaging_v2:CreateTypingIndicator": TwilioSmsFullApiSchemaMessagingV2WhatsappTypingIndicator;
  "messaging_v2:DeleteChannelsSender": never;
  "messaging_v2:FetchChannelsSender": never;
  "messaging_v2:FetchDomainCertV4": never;
  "messaging_v2:ListChannelsSender": never;
  "messaging_v2:UpdateChannelsSender": TwilioSmsFullApiSchemaMessagingV2ChannelsSenderRequestsUpdate;
  "messaging_v3:CreateV3TypingIndicator": TwilioSmsFullApiSchemaTypingIndicatorRequest;
  "studio_v1:CreateEngagement": {
  To: string;
  From: string;
  Parameters?: TwilioSmsFullApiSchemaJsonValue;
};
  "studio_v1:CreateExecution": {
  To: string;
  From: string;
  Parameters?: TwilioSmsFullApiSchemaJsonValue;
};
  "studio_v1:DeleteEngagement": never;
  "studio_v1:DeleteExecution": never;
  "studio_v1:DeleteFlow": never;
  "studio_v1:FetchEngagement": never;
  "studio_v1:FetchEngagementContext": never;
  "studio_v1:FetchExecution": never;
  "studio_v1:FetchExecutionContext": never;
  "studio_v1:FetchExecutionStep": never;
  "studio_v1:FetchExecutionStepContext": never;
  "studio_v1:FetchFlow": never;
  "studio_v1:FetchStep": never;
  "studio_v1:FetchStepContext": never;
  "studio_v1:ListEngagement": never;
  "studio_v1:ListExecution": never;
  "studio_v1:ListExecutionStep": never;
  "studio_v1:ListFlow": never;
  "studio_v1:ListStep": never;
  "studio_v1:UpdateExecution": {
  Status: TwilioSmsFullApiSchemaExecutionEnumStatus;
};
  "studio_v2:CreateExecution": {
  To: string;
  From: string;
  Parameters?: TwilioSmsFullApiSchemaJsonValue;
};
  "studio_v2:CreateFlow": {
  FriendlyName: string;
  Status: TwilioSmsFullApiSchemaFlowEnumStatus;
  Definition: TwilioSmsFullApiSchemaJsonValue;
  CommitMessage?: string;
  AuthorSid?: string;
};
  "studio_v2:DeleteExecution": never;
  "studio_v2:DeleteFlow": never;
  "studio_v2:FetchExecution": never;
  "studio_v2:FetchExecutionContext": never;
  "studio_v2:FetchExecutionStep": never;
  "studio_v2:FetchExecutionStepContext": never;
  "studio_v2:FetchFlow": never;
  "studio_v2:FetchFlowRevision": never;
  "studio_v2:FetchTestUser": never;
  "studio_v2:ListExecution": never;
  "studio_v2:ListExecutionStep": never;
  "studio_v2:ListFlow": never;
  "studio_v2:ListFlowRevision": never;
  "studio_v2:UpdateExecution": {
  Status: TwilioSmsFullApiSchemaExecutionEnumStatus2;
};
  "studio_v2:UpdateFlow": {
  Status: TwilioSmsFullApiSchemaFlowEnumStatus;
  FriendlyName?: string;
  Definition?: TwilioSmsFullApiSchemaJsonValue;
  CommitMessage?: string;
  AuthorSid?: string;
};
  "studio_v2:UpdateFlowValidate": {
  FriendlyName: string;
  Status: TwilioSmsFullApiSchemaFlowValidateEnumStatus;
  Definition: TwilioSmsFullApiSchemaJsonValue;
  CommitMessage?: string;
};
  "studio_v2:UpdateTestUser": {
  TestUsers: ReadonlyArray<string>;
};
  "verify_v2:CreateAccessToken": {
  Identity: string;
  FactorType: TwilioSmsFullApiSchemaAccessTokenEnumFactorTypes;
  FactorFriendlyName?: string;
  Ttl?: number;
};
  "verify_v2:CreateBucket": {
  Max: number;
  Interval: number;
};
  "verify_v2:CreateChallenge": {
  FactorSid: string;
  ExpirationDate?: string;
  "Details.Message"?: string;
  "Details.Fields"?: ReadonlyArray<TwilioSmsFullApiSchemaJsonValue>;
  HiddenDetails?: TwilioSmsFullApiSchemaJsonValue;
  AuthPayload?: string;
};
  "verify_v2:CreateChallengePasskeys": {
  identity?: string;
  factor_sid?: string;
};
  "verify_v2:CreateEntity": {
  Identity: string;
};
  "verify_v2:CreateMessagingConfiguration": {
  Country: string;
  MessagingServiceSid: string;
};
  "verify_v2:CreateNewFactor": {
  FriendlyName: string;
  FactorType: TwilioSmsFullApiSchemaNewFactorEnumFactorTypes;
  "Binding.Alg"?: string;
  "Binding.PublicKey"?: string;
  "Config.AppId"?: string;
  "Config.NotificationPlatform"?: TwilioSmsFullApiSchemaNewFactorEnumNotificationPlatforms;
  "Config.NotificationToken"?: string;
  "Config.SdkVersion"?: string;
  "Binding.Secret"?: string;
  "Config.TimeStep"?: number;
  "Config.Skew"?: number;
  "Config.CodeLength"?: number;
  "Config.Alg"?: TwilioSmsFullApiSchemaNewFactorEnumTotpAlgorithms;
  Metadata?: TwilioSmsFullApiSchemaJsonValue;
};
  "verify_v2:CreateNewFactorPasskey": {
  friendly_name: string;
  identity: string;
  config?: {
  relying_party?: {
  id?: string;
  name?: string;
  origins?: ReadonlyArray<string>;
};
  authenticator_attachment?: "platform" | "cross-platform" | "any";
  discoverable_credentials?: "required" | "preferred" | "discouraged";
  user_verification?: "required" | "preferred" | "discouraged";
};
};
  "verify_v2:CreateNotification": {
  Ttl?: number;
};
  "verify_v2:CreateRateLimit": {
  UniqueName: string;
  Description?: string;
};
  "verify_v2:CreateSafelist": {
  PhoneNumber: string;
};
  "verify_v2:CreateService": {
  FriendlyName: string;
  CodeLength?: number;
  LookupEnabled?: boolean;
  SkipSmsToLandlines?: boolean;
  DtmfInputRequired?: boolean;
  TtsName?: string;
  Psd2Enabled?: boolean;
  DoNotShareWarningEnabled?: boolean;
  CustomCodeEnabled?: boolean;
  "Push.IncludeDate"?: boolean;
  "Push.ApnCredentialSid"?: string;
  "Push.FcmCredentialSid"?: string;
  "Totp.Issuer"?: string;
  "Totp.TimeStep"?: number;
  "Totp.CodeLength"?: number;
  "Totp.Skew"?: number;
  DefaultTemplateSid?: string;
  "Whatsapp.MsgServiceSid"?: string;
  "Whatsapp.From"?: string;
  "Passkeys.RelyingParty.Id"?: string;
  "Passkeys.RelyingParty.Name"?: string;
  "Passkeys.RelyingParty.Origins"?: string;
  "Passkeys.AuthenticatorAttachment"?: string;
  "Passkeys.DiscoverableCredentials"?: string;
  "Passkeys.UserVerification"?: string;
  VerifyEventSubscriptionEnabled?: boolean;
};
  "verify_v2:CreateVerification": {
  To: string;
  Channel: string;
  CustomFriendlyName?: string;
  CustomMessage?: string;
  SendDigits?: string;
  Locale?: string;
  CustomCode?: string;
  Amount?: string;
  Payee?: string;
  RateLimits?: TwilioSmsFullApiSchemaJsonValue;
  ChannelConfiguration?: TwilioSmsFullApiSchemaJsonValue;
  AppHash?: string;
  TemplateSid?: string;
  TemplateCustomSubstitutions?: string;
  DeviceIp?: string;
  EnableSnaClientToken?: boolean;
  RiskCheck?: TwilioSmsFullApiSchemaVerificationEnumRiskCheck;
  Tags?: string;
};
  "verify_v2:CreateVerificationCheck": {
  Code?: string;
  To?: string;
  VerificationSid?: string;
  Amount?: string;
  Payee?: string;
  SnaClientToken?: string;
};
  "verify_v2:CreateWebhook": {
  FriendlyName: string;
  EventTypes: ReadonlyArray<string>;
  WebhookUrl: string;
  Status?: TwilioSmsFullApiSchemaWebhookEnumStatus;
  Version?: TwilioSmsFullApiSchemaWebhookEnumVersion;
};
  "verify_v2:DeleteBucket": never;
  "verify_v2:DeleteEntity": never;
  "verify_v2:DeleteFactor": never;
  "verify_v2:DeleteMessagingConfiguration": never;
  "verify_v2:DeleteRateLimit": never;
  "verify_v2:DeleteSafelist": never;
  "verify_v2:DeleteService": never;
  "verify_v2:DeleteWebhook": never;
  "verify_v2:FetchAccessToken": never;
  "verify_v2:FetchBucket": never;
  "verify_v2:FetchChallenge": never;
  "verify_v2:FetchEntity": never;
  "verify_v2:FetchFactor": never;
  "verify_v2:FetchForm": never;
  "verify_v2:FetchMessagingConfiguration": never;
  "verify_v2:FetchRateLimit": never;
  "verify_v2:FetchSafelist": never;
  "verify_v2:FetchService": never;
  "verify_v2:FetchVerification": never;
  "verify_v2:FetchVerificationAttempt": never;
  "verify_v2:FetchVerificationAttemptsSummary": never;
  "verify_v2:FetchWebhook": never;
  "verify_v2:ListBucket": never;
  "verify_v2:ListChallenge": never;
  "verify_v2:ListEntity": never;
  "verify_v2:ListFactor": never;
  "verify_v2:ListMessagingConfiguration": never;
  "verify_v2:ListRateLimit": never;
  "verify_v2:ListService": never;
  "verify_v2:ListVerificationAttempt": never;
  "verify_v2:ListVerificationTemplate": never;
  "verify_v2:ListWebhook": never;
  "verify_v2:UpdateBucket": {
  Max?: number;
  Interval?: number;
};
  "verify_v2:UpdateChallenge": {
  AuthPayload?: string;
  Metadata?: TwilioSmsFullApiSchemaJsonValue;
};
  "verify_v2:UpdateChallengePasskeys": {
  id: string;
  rawId: string;
  authenticatorAttachment: "platform" | "cross-platform";
  type?: "public-key";
  response: {
  authenticatorData: string;
  clientDataJSON: string;
  signature: string;
  userHandle?: string;
};
};
  "verify_v2:UpdateFactor": {
  AuthPayload?: string;
  FriendlyName?: string;
  "Config.NotificationToken"?: string;
  "Config.SdkVersion"?: string;
  "Config.TimeStep"?: number;
  "Config.Skew"?: number;
  "Config.CodeLength"?: number;
  "Config.Alg"?: TwilioSmsFullApiSchemaFactorEnumTotpAlgorithms;
  "Config.NotificationPlatform"?: string;
};
  "verify_v2:UpdateMessagingConfiguration": {
  MessagingServiceSid: string;
};
  "verify_v2:UpdatePasskeysFactor": {
  id?: string;
  rawId?: string;
  authenticatorAttachment?: "platform" | "cross-platform";
  type?: "public-key";
  response: {
  attestationObject?: string;
  clientDataJSON?: string;
  transports?: ReadonlyArray<"usb" | "nfc" | "ble" | "smart-card" | "internal" | "hybrid">;
};
};
  "verify_v2:UpdateRateLimit": {
  Description?: string;
};
  "verify_v2:UpdateService": {
  FriendlyName?: string;
  CodeLength?: number;
  LookupEnabled?: boolean;
  SkipSmsToLandlines?: boolean;
  DtmfInputRequired?: boolean;
  TtsName?: string;
  Psd2Enabled?: boolean;
  DoNotShareWarningEnabled?: boolean;
  CustomCodeEnabled?: boolean;
  "Push.IncludeDate"?: boolean;
  "Push.ApnCredentialSid"?: string;
  "Push.FcmCredentialSid"?: string;
  "Totp.Issuer"?: string;
  "Totp.TimeStep"?: number;
  "Totp.CodeLength"?: number;
  "Totp.Skew"?: number;
  DefaultTemplateSid?: string;
  "Whatsapp.MsgServiceSid"?: string;
  "Whatsapp.From"?: string;
  "Passkeys.RelyingParty.Id"?: string;
  "Passkeys.RelyingParty.Name"?: string;
  "Passkeys.RelyingParty.Origins"?: string;
  "Passkeys.AuthenticatorAttachment"?: string;
  "Passkeys.DiscoverableCredentials"?: string;
  "Passkeys.UserVerification"?: string;
  VerifyEventSubscriptionEnabled?: boolean;
};
  "verify_v2:UpdateVerification": {
  Status: TwilioSmsFullApiSchemaVerificationEnumStatus;
};
  "verify_v2:UpdateWebhook": {
  FriendlyName?: string;
  EventTypes?: ReadonlyArray<string>;
  WebhookUrl?: string;
  Status?: TwilioSmsFullApiSchemaWebhookEnumStatus;
  Version?: TwilioSmsFullApiSchemaWebhookEnumVersion;
};
}

export interface TwilioSmsFullApiOperationRequestBodyRequiredMap {
  "api_v2010:CreateMessage": false;
  "api_v2010:CreateMessageFeedback": false;
  "api_v2010:DeleteMedia": false;
  "api_v2010:DeleteMessage": false;
  "api_v2010:FetchMedia": false;
  "api_v2010:FetchMessage": false;
  "api_v2010:FetchShortCode": false;
  "api_v2010:ListMedia": false;
  "api_v2010:ListMessage": false;
  "api_v2010:ListShortCode": false;
  "api_v2010:UpdateMessage": false;
  "api_v2010:UpdateShortCode": false;
  "content_v1:CreateApprovalCreate": true;
  "content_v1:CreateContent": true;
  "content_v1:DeleteContent": false;
  "content_v1:FetchApprovalFetch": false;
  "content_v1:FetchContent": false;
  "content_v1:ListContent": false;
  "content_v1:ListContentAndApprovals": false;
  "content_v1:ListLegacyContent": false;
  "content_v1:UpdateContent": true;
  "content_v2:ListContent": false;
  "content_v2:ListContentAndApprovals": false;
  "conversations_v1:CreateConfigurationAddress": false;
  "conversations_v1:CreateConversation": false;
  "conversations_v1:CreateConversationMessage": false;
  "conversations_v1:CreateConversationParticipant": false;
  "conversations_v1:CreateConversationScopedWebhook": false;
  "conversations_v1:CreateConversationWithParticipants": false;
  "conversations_v1:CreateCredential": false;
  "conversations_v1:CreateRole": false;
  "conversations_v1:CreateService": false;
  "conversations_v1:CreateServiceConversation": false;
  "conversations_v1:CreateServiceConversationMessage": false;
  "conversations_v1:CreateServiceConversationParticipant": false;
  "conversations_v1:CreateServiceConversationScopedWebhook": false;
  "conversations_v1:CreateServiceConversationWithParticipants": false;
  "conversations_v1:CreateServiceRole": false;
  "conversations_v1:CreateServiceUser": false;
  "conversations_v1:CreateUser": false;
  "conversations_v1:DeleteConfigurationAddress": false;
  "conversations_v1:DeleteConversation": false;
  "conversations_v1:DeleteConversationMessage": false;
  "conversations_v1:DeleteConversationParticipant": false;
  "conversations_v1:DeleteConversationScopedWebhook": false;
  "conversations_v1:DeleteCredential": false;
  "conversations_v1:DeleteRole": false;
  "conversations_v1:DeleteService": false;
  "conversations_v1:DeleteServiceBinding": false;
  "conversations_v1:DeleteServiceConversation": false;
  "conversations_v1:DeleteServiceConversationMessage": false;
  "conversations_v1:DeleteServiceConversationParticipant": false;
  "conversations_v1:DeleteServiceConversationScopedWebhook": false;
  "conversations_v1:DeleteServiceRole": false;
  "conversations_v1:DeleteServiceUser": false;
  "conversations_v1:DeleteServiceUserConversation": false;
  "conversations_v1:DeleteUser": false;
  "conversations_v1:DeleteUserConversation": false;
  "conversations_v1:FetchConfiguration": false;
  "conversations_v1:FetchConfigurationAddress": false;
  "conversations_v1:FetchConfigurationWebhook": false;
  "conversations_v1:FetchConversation": false;
  "conversations_v1:FetchConversationMessage": false;
  "conversations_v1:FetchConversationMessageReceipt": false;
  "conversations_v1:FetchConversationParticipant": false;
  "conversations_v1:FetchConversationScopedWebhook": false;
  "conversations_v1:FetchCredential": false;
  "conversations_v1:FetchRole": false;
  "conversations_v1:FetchService": false;
  "conversations_v1:FetchServiceBinding": false;
  "conversations_v1:FetchServiceConfiguration": false;
  "conversations_v1:FetchServiceConversation": false;
  "conversations_v1:FetchServiceConversationMessage": false;
  "conversations_v1:FetchServiceConversationMessageReceipt": false;
  "conversations_v1:FetchServiceConversationParticipant": false;
  "conversations_v1:FetchServiceConversationScopedWebhook": false;
  "conversations_v1:FetchServiceNotification": false;
  "conversations_v1:FetchServiceRole": false;
  "conversations_v1:FetchServiceUser": false;
  "conversations_v1:FetchServiceUserConversation": false;
  "conversations_v1:FetchServiceWebhookConfiguration": false;
  "conversations_v1:FetchUser": false;
  "conversations_v1:FetchUserConversation": false;
  "conversations_v1:ListConfigurationAddress": false;
  "conversations_v1:ListConversation": false;
  "conversations_v1:ListConversationMessage": false;
  "conversations_v1:ListConversationMessageReceipt": false;
  "conversations_v1:ListConversationParticipant": false;
  "conversations_v1:ListConversationScopedWebhook": false;
  "conversations_v1:ListCredential": false;
  "conversations_v1:ListParticipantConversation": false;
  "conversations_v1:ListRole": false;
  "conversations_v1:ListService": false;
  "conversations_v1:ListServiceBinding": false;
  "conversations_v1:ListServiceConversation": false;
  "conversations_v1:ListServiceConversationMessage": false;
  "conversations_v1:ListServiceConversationMessageReceipt": false;
  "conversations_v1:ListServiceConversationParticipant": false;
  "conversations_v1:ListServiceConversationScopedWebhook": false;
  "conversations_v1:ListServiceParticipantConversation": false;
  "conversations_v1:ListServiceRole": false;
  "conversations_v1:ListServiceUser": false;
  "conversations_v1:ListServiceUserConversation": false;
  "conversations_v1:ListUser": false;
  "conversations_v1:ListUserConversation": false;
  "conversations_v1:UpdateConfiguration": false;
  "conversations_v1:UpdateConfigurationAddress": false;
  "conversations_v1:UpdateConfigurationWebhook": false;
  "conversations_v1:UpdateConversation": false;
  "conversations_v1:UpdateConversationMessage": false;
  "conversations_v1:UpdateConversationParticipant": false;
  "conversations_v1:UpdateConversationScopedWebhook": false;
  "conversations_v1:UpdateCredential": false;
  "conversations_v1:UpdateRole": false;
  "conversations_v1:UpdateServiceConfiguration": false;
  "conversations_v1:UpdateServiceConversation": false;
  "conversations_v1:UpdateServiceConversationMessage": false;
  "conversations_v1:UpdateServiceConversationParticipant": false;
  "conversations_v1:UpdateServiceConversationScopedWebhook": false;
  "conversations_v1:UpdateServiceNotification": false;
  "conversations_v1:UpdateServiceRole": false;
  "conversations_v1:UpdateServiceUser": false;
  "conversations_v1:UpdateServiceUserConversation": false;
  "conversations_v1:UpdateServiceWebhookConfiguration": false;
  "conversations_v1:UpdateUser": false;
  "conversations_v1:UpdateUserConversation": false;
  "conversations_v2:CreateCommunicationInConversation": false;
  "conversations_v2:CreateConfiguration": false;
  "conversations_v2:CreateConversationAction": true;
  "conversations_v2:CreateConversationWithConfig": false;
  "conversations_v2:CreateParticipantInConversation": false;
  "conversations_v2:DeleteConfiguration": false;
  "conversations_v2:DeleteConversationAsync": false;
  "conversations_v2:FetchCommunication": false;
  "conversations_v2:FetchConfiguration": false;
  "conversations_v2:FetchConversation": false;
  "conversations_v2:FetchConversationAction": false;
  "conversations_v2:FetchOperationStatus": false;
  "conversations_v2:FetchParticipant": false;
  "conversations_v2:ListCommunicationByConversation": false;
  "conversations_v2:ListConfiguration": false;
  "conversations_v2:ListConversationByAccount": false;
  "conversations_v2:ListParticipantByConversation": false;
  "conversations_v2:PatchConversationById": false;
  "conversations_v2:UpdateConfiguration": false;
  "conversations_v2:UpdateConversationById": false;
  "conversations_v2:UpdateParticipantInConversation": false;
  "messaging_v1:CreateAlphaSender": false;
  "messaging_v1:CreateBrandRegistrationOtp": false;
  "messaging_v1:CreateBrandRegistrations": false;
  "messaging_v1:CreateBrandVetting": false;
  "messaging_v1:CreateChannelSender": false;
  "messaging_v1:CreateDestinationAlphaSender": false;
  "messaging_v1:CreateExternalCampaign": false;
  "messaging_v1:CreateLinkshorteningMessagingService": false;
  "messaging_v1:CreatePhoneNumber": false;
  "messaging_v1:CreateService": false;
  "messaging_v1:CreateShortCode": false;
  "messaging_v1:CreateTollfreeVerification": false;
  "messaging_v1:CreateUsAppToPerson": false;
  "messaging_v1:DeleteAlphaSender": false;
  "messaging_v1:DeleteChannelSender": false;
  "messaging_v1:DeleteDestinationAlphaSender": false;
  "messaging_v1:DeleteDomainCertV4": false;
  "messaging_v1:DeleteLinkshorteningMessagingService": false;
  "messaging_v1:DeletePhoneNumber": false;
  "messaging_v1:DeleteService": false;
  "messaging_v1:DeleteShortCode": false;
  "messaging_v1:DeleteTollfreeVerification": false;
  "messaging_v1:DeleteUsAppToPerson": false;
  "messaging_v1:FetchAlphaSender": false;
  "messaging_v1:FetchBrandRegistrations": false;
  "messaging_v1:FetchBrandVetting": false;
  "messaging_v1:FetchChannelSender": false;
  "messaging_v1:FetchDeactivation": false;
  "messaging_v1:FetchDestinationAlphaSender": false;
  "messaging_v1:FetchDomainCertV4": false;
  "messaging_v1:FetchDomainConfig": false;
  "messaging_v1:FetchDomainConfigMessagingService": false;
  "messaging_v1:FetchDomainDnsValidation": false;
  "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation": false;
  "messaging_v1:FetchPhoneNumber": false;
  "messaging_v1:FetchService": false;
  "messaging_v1:FetchShortCode": false;
  "messaging_v1:FetchTollfreeVerification": false;
  "messaging_v1:FetchUsAppToPerson": false;
  "messaging_v1:FetchUsAppToPersonUsecase": false;
  "messaging_v1:FetchUsecase": false;
  "messaging_v1:ListAlphaSender": false;
  "messaging_v1:ListBrandRegistrations": false;
  "messaging_v1:ListBrandVetting": false;
  "messaging_v1:ListChannelSender": false;
  "messaging_v1:ListDestinationAlphaSender": false;
  "messaging_v1:ListPhoneNumber": false;
  "messaging_v1:ListService": false;
  "messaging_v1:ListShortCode": false;
  "messaging_v1:ListTollfreeVerification": false;
  "messaging_v1:ListUsAppToPerson": false;
  "messaging_v1:UpdateBrandRegistrations": false;
  "messaging_v1:UpdateDomainCertV4": false;
  "messaging_v1:UpdateDomainConfig": false;
  "messaging_v1:UpdateRequestManagedCert": false;
  "messaging_v1:UpdateService": false;
  "messaging_v1:UpdateTollfreeVerification": false;
  "messaging_v1:UpdateUsAppToPerson": false;
  "messaging_v2:CreateChannelsSender": true;
  "messaging_v2:CreateTypingIndicator": true;
  "messaging_v2:DeleteChannelsSender": false;
  "messaging_v2:FetchChannelsSender": false;
  "messaging_v2:FetchDomainCertV4": false;
  "messaging_v2:ListChannelsSender": false;
  "messaging_v2:UpdateChannelsSender": false;
  "messaging_v3:CreateV3TypingIndicator": true;
  "studio_v1:CreateEngagement": false;
  "studio_v1:CreateExecution": false;
  "studio_v1:DeleteEngagement": false;
  "studio_v1:DeleteExecution": false;
  "studio_v1:DeleteFlow": false;
  "studio_v1:FetchEngagement": false;
  "studio_v1:FetchEngagementContext": false;
  "studio_v1:FetchExecution": false;
  "studio_v1:FetchExecutionContext": false;
  "studio_v1:FetchExecutionStep": false;
  "studio_v1:FetchExecutionStepContext": false;
  "studio_v1:FetchFlow": false;
  "studio_v1:FetchStep": false;
  "studio_v1:FetchStepContext": false;
  "studio_v1:ListEngagement": false;
  "studio_v1:ListExecution": false;
  "studio_v1:ListExecutionStep": false;
  "studio_v1:ListFlow": false;
  "studio_v1:ListStep": false;
  "studio_v1:UpdateExecution": false;
  "studio_v2:CreateExecution": false;
  "studio_v2:CreateFlow": false;
  "studio_v2:DeleteExecution": false;
  "studio_v2:DeleteFlow": false;
  "studio_v2:FetchExecution": false;
  "studio_v2:FetchExecutionContext": false;
  "studio_v2:FetchExecutionStep": false;
  "studio_v2:FetchExecutionStepContext": false;
  "studio_v2:FetchFlow": false;
  "studio_v2:FetchFlowRevision": false;
  "studio_v2:FetchTestUser": false;
  "studio_v2:ListExecution": false;
  "studio_v2:ListExecutionStep": false;
  "studio_v2:ListFlow": false;
  "studio_v2:ListFlowRevision": false;
  "studio_v2:UpdateExecution": false;
  "studio_v2:UpdateFlow": false;
  "studio_v2:UpdateFlowValidate": false;
  "studio_v2:UpdateTestUser": false;
  "verify_v2:CreateAccessToken": false;
  "verify_v2:CreateBucket": false;
  "verify_v2:CreateChallenge": false;
  "verify_v2:CreateChallengePasskeys": true;
  "verify_v2:CreateEntity": false;
  "verify_v2:CreateMessagingConfiguration": false;
  "verify_v2:CreateNewFactor": false;
  "verify_v2:CreateNewFactorPasskey": true;
  "verify_v2:CreateNotification": false;
  "verify_v2:CreateRateLimit": false;
  "verify_v2:CreateSafelist": false;
  "verify_v2:CreateService": false;
  "verify_v2:CreateVerification": false;
  "verify_v2:CreateVerificationCheck": false;
  "verify_v2:CreateWebhook": false;
  "verify_v2:DeleteBucket": false;
  "verify_v2:DeleteEntity": false;
  "verify_v2:DeleteFactor": false;
  "verify_v2:DeleteMessagingConfiguration": false;
  "verify_v2:DeleteRateLimit": false;
  "verify_v2:DeleteSafelist": false;
  "verify_v2:DeleteService": false;
  "verify_v2:DeleteWebhook": false;
  "verify_v2:FetchAccessToken": false;
  "verify_v2:FetchBucket": false;
  "verify_v2:FetchChallenge": false;
  "verify_v2:FetchEntity": false;
  "verify_v2:FetchFactor": false;
  "verify_v2:FetchForm": false;
  "verify_v2:FetchMessagingConfiguration": false;
  "verify_v2:FetchRateLimit": false;
  "verify_v2:FetchSafelist": false;
  "verify_v2:FetchService": false;
  "verify_v2:FetchVerification": false;
  "verify_v2:FetchVerificationAttempt": false;
  "verify_v2:FetchVerificationAttemptsSummary": false;
  "verify_v2:FetchWebhook": false;
  "verify_v2:ListBucket": false;
  "verify_v2:ListChallenge": false;
  "verify_v2:ListEntity": false;
  "verify_v2:ListFactor": false;
  "verify_v2:ListMessagingConfiguration": false;
  "verify_v2:ListRateLimit": false;
  "verify_v2:ListService": false;
  "verify_v2:ListVerificationAttempt": false;
  "verify_v2:ListVerificationTemplate": false;
  "verify_v2:ListWebhook": false;
  "verify_v2:UpdateBucket": false;
  "verify_v2:UpdateChallenge": false;
  "verify_v2:UpdateChallengePasskeys": true;
  "verify_v2:UpdateFactor": false;
  "verify_v2:UpdateMessagingConfiguration": false;
  "verify_v2:UpdatePasskeysFactor": true;
  "verify_v2:UpdateRateLimit": false;
  "verify_v2:UpdateService": false;
  "verify_v2:UpdateVerification": false;
  "verify_v2:UpdateWebhook": false;
}

export interface TwilioSmsFullApiOperationResponseMap {
  "api_v2010:CreateMessage": TwilioSmsFullApiSchemaApiV2010AccountMessage;
  "api_v2010:CreateMessageFeedback": TwilioSmsFullApiSchemaApiV2010AccountMessageMessageFeedback;
  "api_v2010:DeleteMedia": void;
  "api_v2010:DeleteMessage": void;
  "api_v2010:FetchMedia": TwilioSmsFullApiSchemaApiV2010AccountMessageMedia;
  "api_v2010:FetchMessage": TwilioSmsFullApiSchemaApiV2010AccountMessage;
  "api_v2010:FetchShortCode": TwilioSmsFullApiSchemaApiV2010AccountShortCode;
  "api_v2010:ListMedia": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  media_list?: ReadonlyArray<TwilioSmsFullApiSchemaApiV2010AccountMessageMedia>;
};
  "api_v2010:ListMessage": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  messages?: ReadonlyArray<TwilioSmsFullApiSchemaApiV2010AccountMessage>;
};
  "api_v2010:ListShortCode": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  short_codes?: ReadonlyArray<TwilioSmsFullApiSchemaApiV2010AccountShortCode>;
};
  "api_v2010:UpdateMessage": TwilioSmsFullApiSchemaApiV2010AccountMessage;
  "api_v2010:UpdateShortCode": TwilioSmsFullApiSchemaApiV2010AccountShortCode;
  "content_v1:CreateApprovalCreate": TwilioSmsFullApiSchemaContentV1ContentApprovalCreate;
  "content_v1:CreateContent": TwilioSmsFullApiSchemaContentV1Content;
  "content_v1:DeleteContent": void;
  "content_v1:FetchApprovalFetch": TwilioSmsFullApiSchemaContentV1ContentApprovalFetch;
  "content_v1:FetchContent": TwilioSmsFullApiSchemaContentV1Content;
  "content_v1:ListContent": {
  contents?: ReadonlyArray<TwilioSmsFullApiSchemaContentV1Content>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "content_v1:ListContentAndApprovals": {
  contents?: ReadonlyArray<TwilioSmsFullApiSchemaContentV1ContentAndApprovals>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "content_v1:ListLegacyContent": {
  contents?: ReadonlyArray<TwilioSmsFullApiSchemaContentV1LegacyContent>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "content_v1:UpdateContent": TwilioSmsFullApiSchemaContentV1Content;
  "content_v2:ListContent": {
  contents?: ReadonlyArray<TwilioSmsFullApiSchemaContentV1Content2>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "content_v2:ListContentAndApprovals": {
  contents?: ReadonlyArray<TwilioSmsFullApiSchemaContentV1ContentAndApprovals2>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:CreateConfigurationAddress": TwilioSmsFullApiSchemaConversationsV1ConfigurationAddress;
  "conversations_v1:CreateConversation": TwilioSmsFullApiSchemaConversationsV1Conversation;
  "conversations_v1:CreateConversationMessage": TwilioSmsFullApiSchemaConversationsV1ConversationConversationMessage;
  "conversations_v1:CreateConversationParticipant": TwilioSmsFullApiSchemaConversationsV1ConversationConversationParticipant;
  "conversations_v1:CreateConversationScopedWebhook": TwilioSmsFullApiSchemaConversationsV1ConversationConversationScopedWebhook;
  "conversations_v1:CreateConversationWithParticipants": TwilioSmsFullApiSchemaConversationsV1ConversationWithParticipants;
  "conversations_v1:CreateCredential": TwilioSmsFullApiSchemaConversationsV1Credential;
  "conversations_v1:CreateRole": TwilioSmsFullApiSchemaConversationsV1Role;
  "conversations_v1:CreateService": TwilioSmsFullApiSchemaConversationsV1Service;
  "conversations_v1:CreateServiceConversation": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversation;
  "conversations_v1:CreateServiceConversationMessage": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationMessage;
  "conversations_v1:CreateServiceConversationParticipant": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationParticipant;
  "conversations_v1:CreateServiceConversationScopedWebhook": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
  "conversations_v1:CreateServiceConversationWithParticipants": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationWithParticipants;
  "conversations_v1:CreateServiceRole": TwilioSmsFullApiSchemaConversationsV1ServiceServiceRole;
  "conversations_v1:CreateServiceUser": TwilioSmsFullApiSchemaConversationsV1ServiceServiceUser;
  "conversations_v1:CreateUser": TwilioSmsFullApiSchemaConversationsV1User;
  "conversations_v1:DeleteConfigurationAddress": void;
  "conversations_v1:DeleteConversation": void;
  "conversations_v1:DeleteConversationMessage": void;
  "conversations_v1:DeleteConversationParticipant": void;
  "conversations_v1:DeleteConversationScopedWebhook": void;
  "conversations_v1:DeleteCredential": void;
  "conversations_v1:DeleteRole": void;
  "conversations_v1:DeleteService": void;
  "conversations_v1:DeleteServiceBinding": void;
  "conversations_v1:DeleteServiceConversation": void;
  "conversations_v1:DeleteServiceConversationMessage": void;
  "conversations_v1:DeleteServiceConversationParticipant": void;
  "conversations_v1:DeleteServiceConversationScopedWebhook": void;
  "conversations_v1:DeleteServiceRole": void;
  "conversations_v1:DeleteServiceUser": void;
  "conversations_v1:DeleteServiceUserConversation": void;
  "conversations_v1:DeleteUser": void;
  "conversations_v1:DeleteUserConversation": void;
  "conversations_v1:FetchConfiguration": TwilioSmsFullApiSchemaConversationsV1Configuration;
  "conversations_v1:FetchConfigurationAddress": TwilioSmsFullApiSchemaConversationsV1ConfigurationAddress;
  "conversations_v1:FetchConfigurationWebhook": TwilioSmsFullApiSchemaConversationsV1ConfigurationConfigurationWebhook;
  "conversations_v1:FetchConversation": TwilioSmsFullApiSchemaConversationsV1Conversation;
  "conversations_v1:FetchConversationMessage": TwilioSmsFullApiSchemaConversationsV1ConversationConversationMessage;
  "conversations_v1:FetchConversationMessageReceipt": TwilioSmsFullApiSchemaConversationsV1ConversationConversationMessageConversationMessageReceipt;
  "conversations_v1:FetchConversationParticipant": TwilioSmsFullApiSchemaConversationsV1ConversationConversationParticipant;
  "conversations_v1:FetchConversationScopedWebhook": TwilioSmsFullApiSchemaConversationsV1ConversationConversationScopedWebhook;
  "conversations_v1:FetchCredential": TwilioSmsFullApiSchemaConversationsV1Credential;
  "conversations_v1:FetchRole": TwilioSmsFullApiSchemaConversationsV1Role;
  "conversations_v1:FetchService": TwilioSmsFullApiSchemaConversationsV1Service;
  "conversations_v1:FetchServiceBinding": TwilioSmsFullApiSchemaConversationsV1ServiceServiceBinding;
  "conversations_v1:FetchServiceConfiguration": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConfiguration;
  "conversations_v1:FetchServiceConversation": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversation;
  "conversations_v1:FetchServiceConversationMessage": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationMessage;
  "conversations_v1:FetchServiceConversationMessageReceipt": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt;
  "conversations_v1:FetchServiceConversationParticipant": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationParticipant;
  "conversations_v1:FetchServiceConversationScopedWebhook": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
  "conversations_v1:FetchServiceNotification": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConfigurationServiceNotification;
  "conversations_v1:FetchServiceRole": TwilioSmsFullApiSchemaConversationsV1ServiceServiceRole;
  "conversations_v1:FetchServiceUser": TwilioSmsFullApiSchemaConversationsV1ServiceServiceUser;
  "conversations_v1:FetchServiceUserConversation": TwilioSmsFullApiSchemaConversationsV1ServiceServiceUserServiceUserConversation;
  "conversations_v1:FetchServiceWebhookConfiguration": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
  "conversations_v1:FetchUser": TwilioSmsFullApiSchemaConversationsV1User;
  "conversations_v1:FetchUserConversation": TwilioSmsFullApiSchemaConversationsV1UserUserConversation;
  "conversations_v1:ListConfigurationAddress": {
  address_configurations?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ConfigurationAddress>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListConversation": {
  conversations?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1Conversation>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListConversationMessage": {
  messages?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ConversationConversationMessage>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListConversationMessageReceipt": {
  delivery_receipts?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ConversationConversationMessageConversationMessageReceipt>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListConversationParticipant": {
  participants?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ConversationConversationParticipant>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListConversationScopedWebhook": {
  webhooks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ConversationConversationScopedWebhook>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListCredential": {
  credentials?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1Credential>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListParticipantConversation": {
  conversations?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ParticipantConversation>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListRole": {
  roles?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1Role>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListService": {
  services?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1Service>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceBinding": {
  bindings?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceBinding>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceConversation": {
  conversations?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversation>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceConversationMessage": {
  messages?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationMessage>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceConversationMessageReceipt": {
  delivery_receipts?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceConversationParticipant": {
  participants?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationParticipant>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceConversationScopedWebhook": {
  webhooks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationScopedWebhook>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceParticipantConversation": {
  conversations?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceParticipantConversation>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceRole": {
  roles?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceRole>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceUser": {
  users?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceUser>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListServiceUserConversation": {
  conversations?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1ServiceServiceUserServiceUserConversation>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListUser": {
  users?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1User>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:ListUserConversation": {
  conversations?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV1UserUserConversation>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "conversations_v1:UpdateConfiguration": TwilioSmsFullApiSchemaConversationsV1Configuration;
  "conversations_v1:UpdateConfigurationAddress": TwilioSmsFullApiSchemaConversationsV1ConfigurationAddress;
  "conversations_v1:UpdateConfigurationWebhook": TwilioSmsFullApiSchemaConversationsV1ConfigurationConfigurationWebhook;
  "conversations_v1:UpdateConversation": TwilioSmsFullApiSchemaConversationsV1Conversation;
  "conversations_v1:UpdateConversationMessage": TwilioSmsFullApiSchemaConversationsV1ConversationConversationMessage;
  "conversations_v1:UpdateConversationParticipant": TwilioSmsFullApiSchemaConversationsV1ConversationConversationParticipant;
  "conversations_v1:UpdateConversationScopedWebhook": TwilioSmsFullApiSchemaConversationsV1ConversationConversationScopedWebhook;
  "conversations_v1:UpdateCredential": TwilioSmsFullApiSchemaConversationsV1Credential;
  "conversations_v1:UpdateRole": TwilioSmsFullApiSchemaConversationsV1Role;
  "conversations_v1:UpdateServiceConfiguration": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConfiguration;
  "conversations_v1:UpdateServiceConversation": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversation;
  "conversations_v1:UpdateServiceConversationMessage": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationMessage;
  "conversations_v1:UpdateServiceConversationParticipant": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationParticipant;
  "conversations_v1:UpdateServiceConversationScopedWebhook": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
  "conversations_v1:UpdateServiceNotification": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConfigurationServiceNotification;
  "conversations_v1:UpdateServiceRole": TwilioSmsFullApiSchemaConversationsV1ServiceServiceRole;
  "conversations_v1:UpdateServiceUser": TwilioSmsFullApiSchemaConversationsV1ServiceServiceUser;
  "conversations_v1:UpdateServiceUserConversation": TwilioSmsFullApiSchemaConversationsV1ServiceServiceUserServiceUserConversation;
  "conversations_v1:UpdateServiceWebhookConfiguration": TwilioSmsFullApiSchemaConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
  "conversations_v1:UpdateUser": TwilioSmsFullApiSchemaConversationsV1User;
  "conversations_v1:UpdateUserConversation": TwilioSmsFullApiSchemaConversationsV1UserUserConversation;
  "conversations_v2:CreateCommunicationInConversation": {
  id: string;
  conversationId: string;
  accountId: string;
  author: TwilioSmsFullApiSchemaConversationsV2ParticipantAddress;
  content: (TwilioSmsFullApiSchemaConversationsV2ContentText | TwilioSmsFullApiSchemaConversationsV2ContentTranscription);
  channelId?: string;
  resourceId?: string;
  recipients: ReadonlyArray<(TwilioSmsFullApiSchemaConversationsV2ParticipantAddress & {
  deliveryStatus?: "INITIATED" | "IN_PROGRESS" | "DELIVERED" | "COMPLETED" | "FAILED";
})>;
  createdAt?: string;
  updatedAt?: string;
  occurredAt?: string;
};
  "conversations_v2:CreateConfiguration": {
  statusUrl: string;
  related?: {
  readonly [key: string]: string | undefined;
} | null;
  readonly [key: string]: TwilioSmsFullApiSchemaJsonValue | string | {
  readonly [key: string]: string | undefined;
} | null | undefined;
};
  "conversations_v2:CreateConversationAction": {
  id: string;
  type: string;
  status: "PENDING" | "COMPLETED" | "FAILED";
  conversationId: string;
  related?: {
  readonly [key: string]: string | undefined;
};
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
};
  "conversations_v2:CreateConversationWithConfig": {
  id: string;
  accountId: string;
  configurationId: string;
  status?: "ACTIVE" | "INACTIVE" | "CLOSED";
  name?: string | null;
  createdAt?: string;
  updatedAt?: string;
  configuration?: {
  displayName?: string;
  description?: string;
  conversationGroupingType?: "GROUP_BY_PROFILE" | "GROUP_BY_PARTICIPANT_ADDRESSES" | "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE";
  memoryStoreId?: string;
  channelSettings?: TwilioSmsFullApiSchemaConversationsV2ChannelSettings;
  statusCallbacks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2StatusCallbackConfig>;
  intelligenceConfigurationIds?: ReadonlyArray<string>;
  memoryExtractionEnabled?: boolean;
  conversationsV1Bridge?: TwilioSmsFullApiSchemaConversationsV2ConversationsV1Bridge;
};
  participants?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Participant>;
};
  "conversations_v2:CreateParticipantInConversation": {
  id: string;
  conversationId: string;
  accountId: string;
  name: string;
  type?: "HUMAN_AGENT" | "CUSTOMER" | "AI_AGENT" | "AGENT" | "UNKNOWN";
  profileId?: string;
  addresses?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Address>;
  createdAt?: string;
  updatedAt?: string;
};
  "conversations_v2:DeleteConfiguration": {
  statusUrl: string;
  related?: {
  readonly [key: string]: string | undefined;
} | null;
  readonly [key: string]: TwilioSmsFullApiSchemaJsonValue | string | {
  readonly [key: string]: string | undefined;
} | null | undefined;
};
  "conversations_v2:DeleteConversationAsync": {
  statusUrl: string;
  related?: {
  readonly [key: string]: string | undefined;
} | null;
  readonly [key: string]: TwilioSmsFullApiSchemaJsonValue | string | {
  readonly [key: string]: string | undefined;
} | null | undefined;
};
  "conversations_v2:FetchCommunication": {
  id: string;
  conversationId: string;
  accountId: string;
  author: TwilioSmsFullApiSchemaConversationsV2ParticipantAddress;
  content: (TwilioSmsFullApiSchemaConversationsV2ContentText | TwilioSmsFullApiSchemaConversationsV2ContentTranscription);
  channelId?: string;
  resourceId?: string;
  recipients: ReadonlyArray<(TwilioSmsFullApiSchemaConversationsV2ParticipantAddress & {
  deliveryStatus?: "INITIATED" | "IN_PROGRESS" | "DELIVERED" | "COMPLETED" | "FAILED";
})>;
  createdAt?: string;
  updatedAt?: string;
  occurredAt?: string;
};
  "conversations_v2:FetchConfiguration": {
  id: string;
  displayName: string;
  description: string;
  conversationGroupingType: "GROUP_BY_PROFILE" | "GROUP_BY_PARTICIPANT_ADDRESSES" | "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE";
  memoryStoreId: string;
  channelSettings?: TwilioSmsFullApiSchemaConversationsV2ConfigurationChannelSettings;
  statusCallbacks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2StatusCallbackConfig>;
  intelligenceConfigurationIds?: ReadonlyArray<string>;
  memoryExtractionEnabled?: boolean;
  conversationsV1Bridge?: TwilioSmsFullApiSchemaConversationsV2ConversationsV1Bridge;
  createdAt?: string;
  updatedAt?: string;
  version?: number;
};
  "conversations_v2:FetchConversation": {
  id: string;
  accountId: string;
  configurationId: string;
  status?: "ACTIVE" | "INACTIVE" | "CLOSED";
  name?: string | null;
  createdAt?: string;
  updatedAt?: string;
  configuration?: {
  displayName?: string;
  description?: string;
  conversationGroupingType?: "GROUP_BY_PROFILE" | "GROUP_BY_PARTICIPANT_ADDRESSES" | "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE";
  memoryStoreId?: string;
  channelSettings?: TwilioSmsFullApiSchemaConversationsV2ChannelSettings;
  statusCallbacks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2StatusCallbackConfig>;
  intelligenceConfigurationIds?: ReadonlyArray<string>;
  memoryExtractionEnabled?: boolean;
  conversationsV1Bridge?: TwilioSmsFullApiSchemaConversationsV2ConversationsV1Bridge;
};
  participants?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Participant>;
};
  "conversations_v2:FetchConversationAction": {
  id: string;
  type: string;
  status: "PENDING" | "COMPLETED" | "FAILED";
  conversationId: string;
  related?: {
  readonly [key: string]: string | undefined;
};
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
};
  "conversations_v2:FetchOperationStatus": {
  operationId: string;
  status: "PENDING" | "RUNNING" | "CANCELLED" | "COMPLETED" | "FAILED";
  createdAt: string;
  completedAt?: string | null;
  statusUrl: string;
  error?: {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
} | null;
  related?: {
  readonly [key: string]: string | undefined;
} | null;
};
  "conversations_v2:FetchParticipant": {
  id: string;
  conversationId: string;
  accountId: string;
  name: string;
  type?: "HUMAN_AGENT" | "CUSTOMER" | "AI_AGENT" | "AGENT" | "UNKNOWN";
  profileId?: string;
  addresses?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Address>;
  createdAt?: string;
  updatedAt?: string;
};
  "conversations_v2:ListCommunicationByConversation": {
  communications: ReadonlyArray<{
  id: string;
  conversationId: string;
  accountId: string;
  author: TwilioSmsFullApiSchemaConversationsV2ParticipantAddress;
  content: (TwilioSmsFullApiSchemaConversationsV2ContentText | TwilioSmsFullApiSchemaConversationsV2ContentTranscription);
  channelId?: string;
  resourceId?: string;
  recipients: ReadonlyArray<(TwilioSmsFullApiSchemaConversationsV2ParticipantAddress & {
  deliveryStatus?: "INITIATED" | "IN_PROGRESS" | "DELIVERED" | "COMPLETED" | "FAILED";
})>;
  createdAt?: string;
  updatedAt?: string;
  occurredAt?: string;
}>;
  meta: {
  key?: string;
  pageSize?: number;
  previousToken?: string;
  nextToken?: string;
};
};
  "conversations_v2:ListConfiguration": {
  configurations: ReadonlyArray<{
  id: string;
  displayName: string;
  description: string;
  conversationGroupingType: "GROUP_BY_PROFILE" | "GROUP_BY_PARTICIPANT_ADDRESSES" | "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE";
  memoryStoreId: string;
  channelSettings?: TwilioSmsFullApiSchemaConversationsV2ConfigurationChannelSettings;
  statusCallbacks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2StatusCallbackConfig>;
  intelligenceConfigurationIds?: ReadonlyArray<string>;
  memoryExtractionEnabled?: boolean;
  conversationsV1Bridge?: TwilioSmsFullApiSchemaConversationsV2ConversationsV1Bridge;
  createdAt?: string;
  updatedAt?: string;
  version?: number;
}>;
  meta: {
  key: string;
  pageSize: number;
  previousToken?: string;
  nextToken?: string;
};
};
  "conversations_v2:ListConversationByAccount": {
  conversations: ReadonlyArray<{
  id: string;
  accountId: string;
  configurationId: string;
  status?: "ACTIVE" | "INACTIVE" | "CLOSED";
  name?: string | null;
  createdAt?: string;
  updatedAt?: string;
  configuration?: {
  displayName?: string;
  description?: string;
  conversationGroupingType?: "GROUP_BY_PROFILE" | "GROUP_BY_PARTICIPANT_ADDRESSES" | "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE";
  memoryStoreId?: string;
  channelSettings?: TwilioSmsFullApiSchemaConversationsV2ChannelSettings;
  statusCallbacks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2StatusCallbackConfig>;
  intelligenceConfigurationIds?: ReadonlyArray<string>;
  memoryExtractionEnabled?: boolean;
  conversationsV1Bridge?: TwilioSmsFullApiSchemaConversationsV2ConversationsV1Bridge;
};
  participants?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Participant>;
}>;
  meta: {
  key: string;
  pageSize: number;
  previousToken?: string;
  nextToken?: string;
};
};
  "conversations_v2:ListParticipantByConversation": {
  participants: ReadonlyArray<{
  id: string;
  conversationId: string;
  accountId: string;
  name: string;
  type?: "HUMAN_AGENT" | "CUSTOMER" | "AI_AGENT" | "AGENT" | "UNKNOWN";
  profileId?: string;
  addresses?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Address>;
  createdAt?: string;
  updatedAt?: string;
}>;
  meta: {
  key?: string;
  pageSize?: number;
  previousToken?: string;
  nextToken?: string;
};
};
  "conversations_v2:PatchConversationById": {
  id: string;
  accountId: string;
  configurationId: string;
  status?: "ACTIVE" | "INACTIVE" | "CLOSED";
  name?: string | null;
  createdAt?: string;
  updatedAt?: string;
  configuration?: {
  displayName?: string;
  description?: string;
  conversationGroupingType?: "GROUP_BY_PROFILE" | "GROUP_BY_PARTICIPANT_ADDRESSES" | "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE";
  memoryStoreId?: string;
  channelSettings?: TwilioSmsFullApiSchemaConversationsV2ChannelSettings;
  statusCallbacks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2StatusCallbackConfig>;
  intelligenceConfigurationIds?: ReadonlyArray<string>;
  memoryExtractionEnabled?: boolean;
  conversationsV1Bridge?: TwilioSmsFullApiSchemaConversationsV2ConversationsV1Bridge;
};
  participants?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Participant>;
};
  "conversations_v2:UpdateConfiguration": {
  statusUrl: string;
  related?: {
  readonly [key: string]: string | undefined;
} | null;
  readonly [key: string]: TwilioSmsFullApiSchemaJsonValue | string | {
  readonly [key: string]: string | undefined;
} | null | undefined;
};
  "conversations_v2:UpdateConversationById": {
  id: string;
  accountId: string;
  configurationId: string;
  status?: "ACTIVE" | "INACTIVE" | "CLOSED";
  name?: string | null;
  createdAt?: string;
  updatedAt?: string;
  configuration?: {
  displayName?: string;
  description?: string;
  conversationGroupingType?: "GROUP_BY_PROFILE" | "GROUP_BY_PARTICIPANT_ADDRESSES" | "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE";
  memoryStoreId?: string;
  channelSettings?: TwilioSmsFullApiSchemaConversationsV2ChannelSettings;
  statusCallbacks?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2StatusCallbackConfig>;
  intelligenceConfigurationIds?: ReadonlyArray<string>;
  memoryExtractionEnabled?: boolean;
  conversationsV1Bridge?: TwilioSmsFullApiSchemaConversationsV2ConversationsV1Bridge;
};
  participants?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Participant>;
};
  "conversations_v2:UpdateParticipantInConversation": {
  id: string;
  conversationId: string;
  accountId: string;
  name: string;
  type?: "HUMAN_AGENT" | "CUSTOMER" | "AI_AGENT" | "AGENT" | "UNKNOWN";
  profileId?: string;
  addresses?: ReadonlyArray<TwilioSmsFullApiSchemaConversationsV2Address>;
  createdAt?: string;
  updatedAt?: string;
};
  "messaging_v1:CreateAlphaSender": TwilioSmsFullApiSchemaMessagingV1ServiceAlphaSender;
  "messaging_v1:CreateBrandRegistrationOtp": TwilioSmsFullApiSchemaMessagingV1BrandRegistrationsBrandRegistrationOtp;
  "messaging_v1:CreateBrandRegistrations": TwilioSmsFullApiSchemaMessagingV1BrandRegistrations;
  "messaging_v1:CreateBrandVetting": TwilioSmsFullApiSchemaMessagingV1BrandRegistrationsBrandVetting;
  "messaging_v1:CreateChannelSender": TwilioSmsFullApiSchemaMessagingV1ServiceChannelSender;
  "messaging_v1:CreateDestinationAlphaSender": TwilioSmsFullApiSchemaMessagingV1ServiceDestinationAlphaSender;
  "messaging_v1:CreateExternalCampaign": TwilioSmsFullApiSchemaMessagingV1ExternalCampaign;
  "messaging_v1:CreateLinkshorteningMessagingService": TwilioSmsFullApiSchemaMessagingV1LinkshorteningMessagingService;
  "messaging_v1:CreatePhoneNumber": TwilioSmsFullApiSchemaMessagingV1ServicePhoneNumber;
  "messaging_v1:CreateService": TwilioSmsFullApiSchemaMessagingV1Service;
  "messaging_v1:CreateShortCode": TwilioSmsFullApiSchemaMessagingV1ServiceShortCode;
  "messaging_v1:CreateTollfreeVerification": TwilioSmsFullApiSchemaMessagingV1TollfreeVerification;
  "messaging_v1:CreateUsAppToPerson": TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPersonResponse;
  "messaging_v1:DeleteAlphaSender": void;
  "messaging_v1:DeleteChannelSender": void;
  "messaging_v1:DeleteDestinationAlphaSender": void;
  "messaging_v1:DeleteDomainCertV4": void;
  "messaging_v1:DeleteLinkshorteningMessagingService": void;
  "messaging_v1:DeletePhoneNumber": void;
  "messaging_v1:DeleteService": void;
  "messaging_v1:DeleteShortCode": void;
  "messaging_v1:DeleteTollfreeVerification": void;
  "messaging_v1:DeleteUsAppToPerson": void;
  "messaging_v1:FetchAlphaSender": TwilioSmsFullApiSchemaMessagingV1ServiceAlphaSender;
  "messaging_v1:FetchBrandRegistrations": TwilioSmsFullApiSchemaMessagingV1BrandRegistrations;
  "messaging_v1:FetchBrandVetting": TwilioSmsFullApiSchemaMessagingV1BrandRegistrationsBrandVetting;
  "messaging_v1:FetchChannelSender": TwilioSmsFullApiSchemaMessagingV1ServiceChannelSender;
  "messaging_v1:FetchDeactivation": TwilioSmsFullApiSchemaMessagingV1Deactivation;
  "messaging_v1:FetchDestinationAlphaSender": TwilioSmsFullApiSchemaMessagingV1ServiceDestinationAlphaSender;
  "messaging_v1:FetchDomainCertV4": TwilioSmsFullApiSchemaMessagingV1DomainCertV4;
  "messaging_v1:FetchDomainConfig": TwilioSmsFullApiSchemaMessagingV1DomainConfig;
  "messaging_v1:FetchDomainConfigMessagingService": TwilioSmsFullApiSchemaMessagingV1DomainConfigMessagingService;
  "messaging_v1:FetchDomainDnsValidation": TwilioSmsFullApiSchemaMessagingV1DomainDnsValidation;
  "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation": TwilioSmsFullApiSchemaMessagingV1LinkshorteningMessagingServiceDomainAssociation;
  "messaging_v1:FetchPhoneNumber": TwilioSmsFullApiSchemaMessagingV1ServicePhoneNumber;
  "messaging_v1:FetchService": TwilioSmsFullApiSchemaMessagingV1Service;
  "messaging_v1:FetchShortCode": TwilioSmsFullApiSchemaMessagingV1ServiceShortCode;
  "messaging_v1:FetchTollfreeVerification": TwilioSmsFullApiSchemaMessagingV1TollfreeVerification;
  "messaging_v1:FetchUsAppToPerson": TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPersonResponse;
  "messaging_v1:FetchUsAppToPersonUsecase": TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPersonUsecase;
  "messaging_v1:FetchUsecase": TwilioSmsFullApiSchemaMessagingV1Usecase;
  "messaging_v1:ListAlphaSender": {
  alpha_senders?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1ServiceAlphaSender>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:ListBrandRegistrations": {
  data?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1BrandRegistrations>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:ListBrandVetting": {
  data?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1BrandRegistrationsBrandVetting>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:ListChannelSender": {
  senders?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1ServiceChannelSender>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:ListDestinationAlphaSender": {
  alpha_senders?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1ServiceDestinationAlphaSender>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:ListPhoneNumber": {
  phone_numbers?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1ServicePhoneNumber>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:ListService": {
  services?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1Service>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:ListShortCode": {
  short_codes?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1ServiceShortCode>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:ListTollfreeVerification": {
  verifications?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1TollfreeVerification>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:ListUsAppToPerson": {
  compliance?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPersonResponse>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v1:UpdateBrandRegistrations": TwilioSmsFullApiSchemaMessagingV1BrandRegistrations;
  "messaging_v1:UpdateDomainCertV4": TwilioSmsFullApiSchemaMessagingV1DomainCertV4;
  "messaging_v1:UpdateDomainConfig": TwilioSmsFullApiSchemaMessagingV1DomainConfig;
  "messaging_v1:UpdateRequestManagedCert": TwilioSmsFullApiSchemaMessagingV1RequestManagedCert;
  "messaging_v1:UpdateService": TwilioSmsFullApiSchemaMessagingV1Service;
  "messaging_v1:UpdateTollfreeVerification": TwilioSmsFullApiSchemaMessagingV1TollfreeVerification;
  "messaging_v1:UpdateUsAppToPerson": TwilioSmsFullApiSchemaMessagingV1ServiceUsAppToPersonResponse;
  "messaging_v2:CreateChannelsSender": TwilioSmsFullApiSchemaMessagingV2ChannelsSenderResponse;
  "messaging_v2:CreateTypingIndicator": {
  success?: boolean;
};
  "messaging_v2:DeleteChannelsSender": void;
  "messaging_v2:FetchChannelsSender": TwilioSmsFullApiSchemaMessagingV2ChannelsSenderResponse;
  "messaging_v2:FetchDomainCertV4": TwilioSmsFullApiSchemaMessagingV2DomainCertV4;
  "messaging_v2:ListChannelsSender": {
  senders?: ReadonlyArray<TwilioSmsFullApiSchemaMessagingV2ChannelsSenderResponse>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "messaging_v2:UpdateChannelsSender": TwilioSmsFullApiSchemaMessagingV2ChannelsSenderResponse;
  "messaging_v3:CreateV3TypingIndicator": {
  success?: boolean;
};
  "studio_v1:CreateEngagement": TwilioSmsFullApiSchemaStudioV1FlowEngagement;
  "studio_v1:CreateExecution": TwilioSmsFullApiSchemaStudioV1FlowExecution;
  "studio_v1:DeleteEngagement": void;
  "studio_v1:DeleteExecution": void;
  "studio_v1:DeleteFlow": void;
  "studio_v1:FetchEngagement": TwilioSmsFullApiSchemaStudioV1FlowEngagement;
  "studio_v1:FetchEngagementContext": TwilioSmsFullApiSchemaStudioV1FlowEngagementEngagementContext;
  "studio_v1:FetchExecution": TwilioSmsFullApiSchemaStudioV1FlowExecution;
  "studio_v1:FetchExecutionContext": TwilioSmsFullApiSchemaStudioV1FlowExecutionExecutionContext;
  "studio_v1:FetchExecutionStep": TwilioSmsFullApiSchemaStudioV1FlowExecutionExecutionStep;
  "studio_v1:FetchExecutionStepContext": TwilioSmsFullApiSchemaStudioV1FlowExecutionExecutionStepExecutionStepContext;
  "studio_v1:FetchFlow": TwilioSmsFullApiSchemaStudioV1Flow;
  "studio_v1:FetchStep": TwilioSmsFullApiSchemaStudioV1FlowEngagementStep;
  "studio_v1:FetchStepContext": TwilioSmsFullApiSchemaStudioV1FlowEngagementStepStepContext;
  "studio_v1:ListEngagement": {
  engagements?: ReadonlyArray<TwilioSmsFullApiSchemaStudioV1FlowEngagement>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "studio_v1:ListExecution": {
  executions?: ReadonlyArray<TwilioSmsFullApiSchemaStudioV1FlowExecution>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "studio_v1:ListExecutionStep": {
  steps?: ReadonlyArray<TwilioSmsFullApiSchemaStudioV1FlowExecutionExecutionStep>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "studio_v1:ListFlow": {
  flows?: ReadonlyArray<TwilioSmsFullApiSchemaStudioV1Flow>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "studio_v1:ListStep": {
  steps?: ReadonlyArray<TwilioSmsFullApiSchemaStudioV1FlowEngagementStep>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "studio_v1:UpdateExecution": TwilioSmsFullApiSchemaStudioV1FlowExecution;
  "studio_v2:CreateExecution": TwilioSmsFullApiSchemaStudioV2FlowExecution;
  "studio_v2:CreateFlow": TwilioSmsFullApiSchemaStudioV2Flow;
  "studio_v2:DeleteExecution": void;
  "studio_v2:DeleteFlow": void;
  "studio_v2:FetchExecution": TwilioSmsFullApiSchemaStudioV2FlowExecution;
  "studio_v2:FetchExecutionContext": TwilioSmsFullApiSchemaStudioV2FlowExecutionExecutionContext;
  "studio_v2:FetchExecutionStep": TwilioSmsFullApiSchemaStudioV2FlowExecutionExecutionStep;
  "studio_v2:FetchExecutionStepContext": TwilioSmsFullApiSchemaStudioV2FlowExecutionExecutionStepExecutionStepContext;
  "studio_v2:FetchFlow": TwilioSmsFullApiSchemaStudioV2Flow;
  "studio_v2:FetchFlowRevision": TwilioSmsFullApiSchemaStudioV2FlowFlowRevision;
  "studio_v2:FetchTestUser": TwilioSmsFullApiSchemaStudioV2FlowTestUser;
  "studio_v2:ListExecution": {
  executions?: ReadonlyArray<TwilioSmsFullApiSchemaStudioV2FlowExecution>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "studio_v2:ListExecutionStep": {
  steps?: ReadonlyArray<TwilioSmsFullApiSchemaStudioV2FlowExecutionExecutionStep>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "studio_v2:ListFlow": {
  flows?: ReadonlyArray<TwilioSmsFullApiSchemaStudioV2Flow>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "studio_v2:ListFlowRevision": {
  revisions?: ReadonlyArray<TwilioSmsFullApiSchemaStudioV2FlowFlowRevision>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "studio_v2:UpdateExecution": TwilioSmsFullApiSchemaStudioV2FlowExecution;
  "studio_v2:UpdateFlow": TwilioSmsFullApiSchemaStudioV2Flow;
  "studio_v2:UpdateFlowValidate": TwilioSmsFullApiSchemaStudioV2FlowValidate;
  "studio_v2:UpdateTestUser": TwilioSmsFullApiSchemaStudioV2FlowTestUser;
  "verify_v2:CreateAccessToken": TwilioSmsFullApiSchemaVerifyV2ServiceAccessToken;
  "verify_v2:CreateBucket": TwilioSmsFullApiSchemaVerifyV2ServiceRateLimitBucket;
  "verify_v2:CreateChallenge": TwilioSmsFullApiSchemaVerifyV2ServiceEntityChallenge;
  "verify_v2:CreateChallengePasskeys": {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_sid?: string | null;
  identity?: string | null;
  factor_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  date_responded?: string | null;
  expiration_date?: string | null;
  status?: "pending" | "expired" | "approved" | "denied";
  responded_reason?: "none" | "not_needed" | "not_requested";
  details?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  hidden_details?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  metadata?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  factor_type?: "push" | "totp" | "passkeys";
  url?: string | null;
  links?: {} | null;
  options?: {};
};
  "verify_v2:CreateEntity": TwilioSmsFullApiSchemaVerifyV2ServiceEntity;
  "verify_v2:CreateMessagingConfiguration": TwilioSmsFullApiSchemaVerifyV2ServiceMessagingConfiguration;
  "verify_v2:CreateNewFactor": TwilioSmsFullApiSchemaVerifyV2ServiceEntityNewFactor;
  "verify_v2:CreateNewFactorPasskey": {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_sid?: string | null;
  identity?: string | null;
  binding?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  options?: TwilioSmsFullApiSchemaJsonValue | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  status?: "unverified" | "verified";
  factor_type?: "push" | "totp" | "passkeys";
  config?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  metadata?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  url?: string | null;
};
  "verify_v2:CreateNotification": TwilioSmsFullApiSchemaVerifyV2ServiceEntityChallengeNotification;
  "verify_v2:CreateRateLimit": TwilioSmsFullApiSchemaVerifyV2ServiceRateLimit;
  "verify_v2:CreateSafelist": TwilioSmsFullApiSchemaVerifyV2Safelist;
  "verify_v2:CreateService": TwilioSmsFullApiSchemaVerifyV2Service;
  "verify_v2:CreateVerification": TwilioSmsFullApiSchemaVerifyV2ServiceVerification;
  "verify_v2:CreateVerificationCheck": TwilioSmsFullApiSchemaVerifyV2ServiceVerificationCheck;
  "verify_v2:CreateWebhook": TwilioSmsFullApiSchemaVerifyV2ServiceWebhook;
  "verify_v2:DeleteBucket": void;
  "verify_v2:DeleteEntity": void;
  "verify_v2:DeleteFactor": void;
  "verify_v2:DeleteMessagingConfiguration": void;
  "verify_v2:DeleteRateLimit": void;
  "verify_v2:DeleteSafelist": void;
  "verify_v2:DeleteService": void;
  "verify_v2:DeleteWebhook": void;
  "verify_v2:FetchAccessToken": TwilioSmsFullApiSchemaVerifyV2ServiceAccessToken;
  "verify_v2:FetchBucket": TwilioSmsFullApiSchemaVerifyV2ServiceRateLimitBucket;
  "verify_v2:FetchChallenge": TwilioSmsFullApiSchemaVerifyV2ServiceEntityChallenge;
  "verify_v2:FetchEntity": TwilioSmsFullApiSchemaVerifyV2ServiceEntity;
  "verify_v2:FetchFactor": TwilioSmsFullApiSchemaVerifyV2ServiceEntityFactor;
  "verify_v2:FetchForm": TwilioSmsFullApiSchemaVerifyV2Form;
  "verify_v2:FetchMessagingConfiguration": TwilioSmsFullApiSchemaVerifyV2ServiceMessagingConfiguration;
  "verify_v2:FetchRateLimit": TwilioSmsFullApiSchemaVerifyV2ServiceRateLimit;
  "verify_v2:FetchSafelist": TwilioSmsFullApiSchemaVerifyV2Safelist;
  "verify_v2:FetchService": TwilioSmsFullApiSchemaVerifyV2Service;
  "verify_v2:FetchVerification": TwilioSmsFullApiSchemaVerifyV2ServiceVerification;
  "verify_v2:FetchVerificationAttempt": TwilioSmsFullApiSchemaVerifyV2VerificationAttempt;
  "verify_v2:FetchVerificationAttemptsSummary": TwilioSmsFullApiSchemaVerifyV2VerificationAttemptsSummary;
  "verify_v2:FetchWebhook": TwilioSmsFullApiSchemaVerifyV2ServiceWebhook;
  "verify_v2:ListBucket": {
  buckets?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2ServiceRateLimitBucket>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:ListChallenge": {
  challenges?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2ServiceEntityChallenge>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:ListEntity": {
  entities?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2ServiceEntity>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:ListFactor": {
  factors?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2ServiceEntityFactor>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:ListMessagingConfiguration": {
  messaging_configurations?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2ServiceMessagingConfiguration>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:ListRateLimit": {
  rate_limits?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2ServiceRateLimit>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:ListService": {
  services?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2Service>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:ListVerificationAttempt": {
  attempts?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2VerificationAttempt>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:ListVerificationTemplate": {
  templates?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2VerificationTemplate>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:ListWebhook": {
  webhooks?: ReadonlyArray<TwilioSmsFullApiSchemaVerifyV2ServiceWebhook>;
  meta?: {
  first_page_url?: string;
  key?: string;
  next_page_url?: string | null;
  page?: number;
  page_size?: number;
  previous_page_url?: string | null;
  url?: string;
};
};
  "verify_v2:UpdateBucket": TwilioSmsFullApiSchemaVerifyV2ServiceRateLimitBucket;
  "verify_v2:UpdateChallenge": TwilioSmsFullApiSchemaVerifyV2ServiceEntityChallenge;
  "verify_v2:UpdateChallengePasskeys": {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_sid?: string | null;
  identity?: string | null;
  factor_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  date_responded?: string | null;
  expiration_date?: string | null;
  status?: "pending" | "expired" | "approved" | "denied";
  responded_reason?: "none" | "not_needed" | "not_requested";
  details?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  hidden_details?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  metadata?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  factor_type?: "push" | "totp" | "passkeys";
  url?: string | null;
  links?: {} | null;
  options?: {};
};
  "verify_v2:UpdateFactor": TwilioSmsFullApiSchemaVerifyV2ServiceEntityFactor;
  "verify_v2:UpdateMessagingConfiguration": TwilioSmsFullApiSchemaVerifyV2ServiceMessagingConfiguration;
  "verify_v2:UpdatePasskeysFactor": {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  entity_sid?: string | null;
  identity?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  status?: "unverified" | "verified";
  factor_type?: "push" | "totp" | "passkeys";
  config?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  metadata?: {
  "x-twilio"?: TwilioSmsFullApiSchemaJsonValue;
} | null;
  url?: string | null;
};
  "verify_v2:UpdateRateLimit": TwilioSmsFullApiSchemaVerifyV2ServiceRateLimit;
  "verify_v2:UpdateService": TwilioSmsFullApiSchemaVerifyV2Service;
  "verify_v2:UpdateVerification": TwilioSmsFullApiSchemaVerifyV2ServiceVerification;
  "verify_v2:UpdateWebhook": TwilioSmsFullApiSchemaVerifyV2ServiceWebhook;
}
