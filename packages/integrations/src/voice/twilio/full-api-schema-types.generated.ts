// Generated provider schema DTOs for TwilioVoiceFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type TwilioVoiceFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type TwilioVoiceFullApiSchemaJsonValue = TwilioVoiceFullApiSchemaJsonPrimitive | readonly TwilioVoiceFullApiSchemaJsonValue[] | { readonly [key: string]: TwilioVoiceFullApiSchemaJsonValue | undefined };

export type TwilioVoiceFullApiSchemaApiV2010AccountApplication = {
  account_sid?: string | null;
  api_version?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  message_status_callback?: string | null;
  sid?: string | null;
  sms_fallback_method?: "GET" | "POST";
  sms_fallback_url?: string | null;
  sms_method?: "GET" | "POST";
  sms_status_callback?: string | null;
  sms_url?: string | null;
  status_callback?: string | null;
  status_callback_method?: "GET" | "POST";
  uri?: string | null;
  voice_caller_id_lookup?: boolean | null;
  voice_fallback_method?: "GET" | "POST";
  voice_fallback_url?: string | null;
  voice_method?: "GET" | "POST";
  voice_url?: string | null;
  public_application_connect_enabled?: boolean | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountCall = {
  sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  parent_call_sid?: string | null;
  account_sid?: string | null;
  to?: string | null;
  to_formatted?: string | null;
  from?: string | null;
  from_formatted?: string | null;
  phone_number_sid?: string | null;
  status?: TwilioVoiceFullApiSchemaCallEnumStatus;
  start_time?: string | null;
  end_time?: string | null;
  duration?: string | null;
  price?: string | null;
  price_unit?: string | null;
  direction?: string | null;
  answered_by?: string | null;
  api_version?: string | null;
  forwarded_from?: string | null;
  group_sid?: string | null;
  caller_name?: string | null;
  queue_time?: string | null;
  trunk_sid?: string | null;
  uri?: string | null;
  subresource_uris?: {} | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountCallCallRecording = {
  account_sid?: string | null;
  api_version?: string | null;
  call_sid?: string | null;
  conference_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  start_time?: string | null;
  duration?: string | null;
  sid?: string | null;
  price?: number | null;
  uri?: string | null;
  encryption_details?: TwilioVoiceFullApiSchemaJsonValue | null;
  price_unit?: string | null;
  status?: TwilioVoiceFullApiSchemaCallRecordingEnumStatus;
  channels?: number;
  source?: TwilioVoiceFullApiSchemaCallRecordingEnumSource;
  error_code?: number | null;
  track?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountConferenceParticipant = {
  account_sid?: string | null;
  call_sid?: string | null;
  label?: string | null;
  call_sid_to_coach?: string | null;
  coaching?: boolean | null;
  conference_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  end_conference_on_exit?: boolean | null;
  muted?: boolean | null;
  hold?: boolean | null;
  start_conference_on_enter?: boolean | null;
  status?: TwilioVoiceFullApiSchemaParticipantEnumStatus;
  queue_time?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaPaymentsEnumBankAccountType = "consumer-checking" | "consumer-savings" | "commercial-checking";

export type TwilioVoiceFullApiSchemaPaymentsEnumPaymentMethod = "credit-card" | "ach-debit";

export type TwilioVoiceFullApiSchemaPaymentsEnumTokenType = "one-time" | "reusable" | "payment-method";

export type TwilioVoiceFullApiSchemaApiV2010AccountCallPayments = {
  account_sid?: string | null;
  call_sid?: string | null;
  sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountQueue = {
  date_updated?: string | null;
  current_size?: number;
  friendly_name?: string | null;
  uri?: string | null;
  account_sid?: string | null;
  average_wait_time?: number;
  sid?: string | null;
  date_created?: string | null;
  max_size?: number;
};

export type TwilioVoiceFullApiSchemaRealtimeTranscriptionEnumTrack = "inbound_track" | "outbound_track" | "both_tracks";

export type TwilioVoiceFullApiSchemaApiV2010AccountCallRealtimeTranscription = {
  sid?: string | null;
  account_sid?: string | null;
  call_sid?: string | null;
  name?: string | null;
  status?: TwilioVoiceFullApiSchemaRealtimeTranscriptionEnumStatus;
  date_updated?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialListSipCredential = {
  sid?: string | null;
  account_sid?: string | null;
  credential_list_sid?: string | null;
  username?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialList = {
  account_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  sid?: string | null;
  subresource_uris?: {} | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomainSipCredentialListMapping = {
  account_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  domain_sid?: string | null;
  friendly_name?: string | null;
  sid?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomain = {
  account_sid?: string | null;
  api_version?: string | null;
  auth_type?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  domain_name?: string | null;
  friendly_name?: string | null;
  sid?: string | null;
  uri?: string | null;
  voice_fallback_method?: "GET" | "POST";
  voice_fallback_url?: string | null;
  voice_method?: "GET" | "POST";
  voice_status_callback_method?: "GET" | "POST";
  voice_status_callback_url?: string | null;
  voice_url?: string | null;
  subresource_uris?: {} | null;
  sip_registration?: boolean | null;
  emergency_calling_enabled?: boolean | null;
  secure?: boolean | null;
  byoc_trunk_sid?: string | null;
  emergency_caller_sid?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlList = {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  subresource_uris?: {} | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomainSipIpAccessControlListMapping = {
  account_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  domain_sid?: string | null;
  friendly_name?: string | null;
  sid?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlListSipIpAddress = {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  ip_address?: string | null;
  cidr_prefix_length?: number;
  ip_access_control_list_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaSiprecEnumTrack = "inbound_track" | "outbound_track" | "both_tracks";

export type TwilioVoiceFullApiSchemaApiV2010AccountCallSiprec = {
  sid?: string | null;
  account_sid?: string | null;
  call_sid?: string | null;
  name?: string | null;
  status?: TwilioVoiceFullApiSchemaSiprecEnumStatus;
  date_updated?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaStreamEnumTrack = "inbound_track" | "outbound_track" | "both_tracks";

export type TwilioVoiceFullApiSchemaApiV2010AccountCallStream = {
  sid?: string | null;
  account_sid?: string | null;
  call_sid?: string | null;
  name?: string | null;
  status?: TwilioVoiceFullApiSchemaStreamEnumStatus;
  date_updated?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountCallUserDefinedMessage = {
  account_sid?: string | null;
  call_sid?: string | null;
  sid?: string | null;
  date_created?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountCallUserDefinedMessageSubscription = {
  account_sid?: string | null;
  call_sid?: string | null;
  sid?: string | null;
  date_created?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountCallCallNotificationInstance = {
  account_sid?: string | null;
  api_version?: string | null;
  call_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  error_code?: string | null;
  log?: string | null;
  message_date?: string | null;
  message_text?: string | null;
  more_info?: string | null;
  request_method?: "GET" | "POST";
  request_url?: string | null;
  request_variables?: string | null;
  response_body?: string | null;
  response_headers?: string | null;
  sid?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountConference = {
  account_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  api_version?: string | null;
  friendly_name?: string | null;
  region?: string | null;
  sid?: string | null;
  status?: TwilioVoiceFullApiSchemaConferenceEnumStatus;
  uri?: string | null;
  subresource_uris?: {} | null;
  reason_conference_ended?: TwilioVoiceFullApiSchemaConferenceEnumReasonConferenceEnded;
  call_sid_ending_conference?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountConferenceConferenceRecording = {
  account_sid?: string | null;
  api_version?: string | null;
  call_sid?: string | null;
  conference_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  start_time?: string | null;
  duration?: string | null;
  sid?: string | null;
  price?: string | null;
  price_unit?: string | null;
  status?: TwilioVoiceFullApiSchemaConferenceRecordingEnumStatus;
  channels?: number;
  source?: TwilioVoiceFullApiSchemaConferenceRecordingEnumSource;
  error_code?: number | null;
  encryption_details?: TwilioVoiceFullApiSchemaJsonValue | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountQueueMember = {
  call_sid?: string | null;
  date_enqueued?: string | null;
  position?: number;
  uri?: string | null;
  wait_time?: number;
  queue_sid?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountOutgoingCallerId = {
  sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  account_sid?: string | null;
  phone_number?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountRecording = {
  account_sid?: string | null;
  api_version?: string | null;
  call_sid?: string | null;
  conference_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  start_time?: string | null;
  duration?: string | null;
  sid?: string | null;
  price?: string | null;
  price_unit?: string | null;
  status?: TwilioVoiceFullApiSchemaRecordingEnumStatus;
  channels?: number | null;
  source?: TwilioVoiceFullApiSchemaRecordingEnumSource;
  error_code?: number | null;
  uri?: string | null;
  encryption_details?: TwilioVoiceFullApiSchemaJsonValue | null;
  subresource_uris?: {} | null;
  media_url?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountRecordingRecordingTranscription = {
  account_sid?: string | null;
  api_version?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  duration?: string | null;
  price?: number | null;
  price_unit?: string | null;
  recording_sid?: string | null;
  sid?: string | null;
  status?: TwilioVoiceFullApiSchemaRecordingTranscriptionEnumStatus;
  transcription_text?: string | null;
  type?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaApiV2010AccountTranscription = {
  account_sid?: string | null;
  api_version?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  duration?: string | null;
  price?: number | null;
  price_unit?: string | null;
  recording_sid?: string | null;
  sid?: string | null;
  status?: TwilioVoiceFullApiSchemaTranscriptionEnumStatus;
  transcription_text?: string | null;
  type?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaCallEnumStatus = "queued" | "ringing" | "in-progress" | "completed" | "busy" | "failed" | "no-answer" | "canceled";

export type TwilioVoiceFullApiSchemaApiV2010AccountCallCallNotification = {
  account_sid?: string | null;
  api_version?: string | null;
  call_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  error_code?: string | null;
  log?: string | null;
  message_date?: string | null;
  message_text?: string | null;
  more_info?: string | null;
  request_method?: "GET" | "POST";
  request_url?: string | null;
  sid?: string | null;
  uri?: string | null;
};

export type TwilioVoiceFullApiSchemaConferenceEnumStatus = "init" | "in-progress" | "completed";

export type TwilioVoiceFullApiSchemaCallEnumUpdateStatus = "canceled" | "completed";

export type TwilioVoiceFullApiSchemaCallRecordingEnumStatus = "in-progress" | "paused" | "stopped" | "processing" | "completed" | "absent";

export type TwilioVoiceFullApiSchemaConferenceEnumUpdateStatus = "completed";

export type TwilioVoiceFullApiSchemaConferenceRecordingEnumStatus = "in-progress" | "paused" | "stopped" | "processing" | "completed" | "absent";

export type TwilioVoiceFullApiSchemaPaymentsEnumCapture = "payment-card-number" | "expiration-date" | "security-code" | "postal-code" | "bank-routing-number" | "bank-account-number" | "payment-card-number-matcher" | "expiration-date-matcher" | "security-code-matcher" | "postal-code-matcher";

export type TwilioVoiceFullApiSchemaPaymentsEnumStatus = "complete" | "cancel";

export type TwilioVoiceFullApiSchemaRealtimeTranscriptionEnumUpdateStatus = "stopped";

export type TwilioVoiceFullApiSchemaSiprecEnumUpdateStatus = "stopped";

export type TwilioVoiceFullApiSchemaStreamEnumUpdateStatus = "stopped";

export type TwilioVoiceFullApiSchemaInsightsV1AccountSettings = {
  account_sid?: string | null;
  advanced_features?: boolean | null;
  voice_trace?: boolean | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaInsightsV1CallAnnotation = {
  call_sid?: string | null;
  account_sid?: string | null;
  answered_by?: TwilioVoiceFullApiSchemaAnnotationEnumAnsweredBy;
  connectivity_issue?: TwilioVoiceFullApiSchemaAnnotationEnumConnectivityIssue;
  quality_issues?: ReadonlyArray<string> | null;
  spam?: boolean | null;
  call_score?: number | null;
  comment?: string | null;
  incident?: string | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaInsightsV1Call = {
  sid?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioVoiceFullApiSchemaInsightsV1Conference = {
  conference_sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  create_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  duration_seconds?: number | null;
  connect_duration_seconds?: number | null;
  status?: TwilioVoiceFullApiSchemaConferenceEnumConferenceStatus;
  max_participants?: number | null;
  max_concurrent_participants?: number | null;
  unique_participants?: number | null;
  end_reason?: TwilioVoiceFullApiSchemaConferenceEnumConferenceEndReason;
  ended_by?: string | null;
  mixer_region?: TwilioVoiceFullApiSchemaConferenceEnumRegion;
  mixer_region_requested?: TwilioVoiceFullApiSchemaConferenceEnumRegion;
  recording_enabled?: boolean | null;
  detected_issues?: TwilioVoiceFullApiSchemaJsonValue | null;
  tags?: ReadonlyArray<TwilioVoiceFullApiSchemaConferenceEnumTag> | null;
  tag_info?: TwilioVoiceFullApiSchemaJsonValue | null;
  processing_state?: TwilioVoiceFullApiSchemaConferenceEnumProcessingState;
  url?: string | null;
  links?: {} | null;
};

export type TwilioVoiceFullApiSchemaInsightsV1ConferenceConferenceParticipant = {
  participant_sid?: string | null;
  label?: string | null;
  conference_sid?: string | null;
  call_sid?: string | null;
  account_sid?: string | null;
  call_direction?: TwilioVoiceFullApiSchemaConferenceParticipantEnumCallDirection;
  from?: string | null;
  to?: string | null;
  call_status?: TwilioVoiceFullApiSchemaConferenceParticipantEnumCallStatus;
  country_code?: string | null;
  is_moderator?: boolean | null;
  join_time?: string | null;
  leave_time?: string | null;
  duration_seconds?: number | null;
  outbound_queue_length?: number | null;
  outbound_time_in_queue?: number | null;
  jitter_buffer_size?: TwilioVoiceFullApiSchemaConferenceParticipantEnumJitterBufferSize;
  is_coach?: boolean | null;
  coached_participants?: ReadonlyArray<string> | null;
  participant_region?: TwilioVoiceFullApiSchemaConferenceParticipantEnumRegion;
  conference_region?: TwilioVoiceFullApiSchemaConferenceParticipantEnumRegion;
  call_type?: TwilioVoiceFullApiSchemaConferenceParticipantEnumCallType;
  processing_state?: TwilioVoiceFullApiSchemaConferenceParticipantEnumProcessingState;
  properties?: TwilioVoiceFullApiSchemaJsonValue | null;
  events?: TwilioVoiceFullApiSchemaJsonValue | null;
  metrics?: TwilioVoiceFullApiSchemaJsonValue | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaSummaryEnumProcessingState = "complete" | "partial";

export type TwilioVoiceFullApiSchemaInsightsV1CallSummary = {
  account_sid?: string | null;
  call_sid?: string | null;
  call_type?: TwilioVoiceFullApiSchemaSummaryEnumCallType;
  call_state?: TwilioVoiceFullApiSchemaSummaryEnumCallState;
  answered_by?: TwilioVoiceFullApiSchemaSummaryEnumAnsweredBy;
  processing_state?: TwilioVoiceFullApiSchemaSummaryEnumProcessingState;
  created_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  duration?: number | null;
  connect_duration?: number | null;
  from?: {
  "x-twilio"?: {
  pii?: TwilioVoiceFullApiSchemaJsonValue;
};
} | null;
  to?: {
  "x-twilio"?: {
  pii?: TwilioVoiceFullApiSchemaJsonValue;
};
} | null;
  carrier_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  client_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  sdk_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  sip_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  tags?: ReadonlyArray<string> | null;
  url?: string | null;
  attributes?: TwilioVoiceFullApiSchemaJsonValue | null;
  properties?: TwilioVoiceFullApiSchemaJsonValue | null;
  trust?: TwilioVoiceFullApiSchemaJsonValue | null;
  annotation?: TwilioVoiceFullApiSchemaJsonValue | null;
};

export type TwilioVoiceFullApiSchemaInsightsV1VideoRoomSummaryVideoParticipantSummary = {
  participant_sid?: string | null;
  participant_identity?: string | null;
  join_time?: string | null;
  leave_time?: string | null;
  duration_sec?: number | null;
  account_sid?: string | null;
  room_sid?: string | null;
  status?: TwilioVoiceFullApiSchemaVideoParticipantSummaryEnumRoomStatus;
  codecs?: ReadonlyArray<TwilioVoiceFullApiSchemaVideoParticipantSummaryEnumCodec> | null;
  end_reason?: string | null;
  error_code?: number | null;
  error_code_url?: string | null;
  media_region?: TwilioVoiceFullApiSchemaVideoParticipantSummaryEnumTwilioRealm;
  properties?: TwilioVoiceFullApiSchemaJsonValue | null;
  edge_location?: TwilioVoiceFullApiSchemaVideoParticipantSummaryEnumEdgeLocation;
  publisher_info?: TwilioVoiceFullApiSchemaJsonValue | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaInsightsV1VideoRoomSummary = {
  account_sid?: string | null;
  room_sid?: string | null;
  room_name?: string | null;
  create_time?: string | null;
  end_time?: string | null;
  room_type?: TwilioVoiceFullApiSchemaVideoRoomSummaryEnumRoomType;
  room_status?: TwilioVoiceFullApiSchemaVideoRoomSummaryEnumRoomStatus;
  status_callback?: string | null;
  status_callback_method?: "GET" | "POST";
  created_method?: TwilioVoiceFullApiSchemaVideoRoomSummaryEnumCreatedMethod;
  end_reason?: TwilioVoiceFullApiSchemaVideoRoomSummaryEnumEndReason;
  max_participants?: number | null;
  unique_participants?: number | null;
  unique_participant_identities?: number | null;
  concurrent_participants?: number | null;
  max_concurrent_participants?: number | null;
  codecs?: ReadonlyArray<TwilioVoiceFullApiSchemaVideoRoomSummaryEnumCodec> | null;
  media_region?: TwilioVoiceFullApiSchemaVideoRoomSummaryEnumTwilioRealm;
  duration_sec?: number | null;
  total_participant_duration_sec?: number | null;
  total_recording_duration_sec?: number | null;
  processing_state?: TwilioVoiceFullApiSchemaVideoRoomSummaryEnumProcessingState;
  recording_enabled?: boolean | null;
  edge_location?: TwilioVoiceFullApiSchemaVideoRoomSummaryEnumEdgeLocation;
  url?: string | null;
  links?: {} | null;
};

export type TwilioVoiceFullApiSchemaCallSummariesEnumProcessingStateRequest = "completed" | "started" | "partial" | "all";

export type TwilioVoiceFullApiSchemaCallSummariesEnumSortBy = "start_time" | "end_time";

export type TwilioVoiceFullApiSchemaCallSummariesEnumAnsweredBy = "unknown" | "machine_start" | "machine_end_beep" | "machine_end_silence" | "machine_end_other" | "human" | "fax";

export type TwilioVoiceFullApiSchemaInsightsV1CallSummaries = {
  account_sid?: string | null;
  call_sid?: string | null;
  answered_by?: TwilioVoiceFullApiSchemaCallSummariesEnumAnsweredBy;
  call_type?: TwilioVoiceFullApiSchemaCallSummariesEnumCallType;
  call_state?: TwilioVoiceFullApiSchemaCallSummariesEnumCallState;
  processing_state?: TwilioVoiceFullApiSchemaCallSummariesEnumProcessingState;
  created_time?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  duration?: number | null;
  connect_duration?: number | null;
  from?: {
  "x-twilio"?: {
  pii?: TwilioVoiceFullApiSchemaJsonValue;
};
} | null;
  to?: {
  "x-twilio"?: {
  pii?: TwilioVoiceFullApiSchemaJsonValue;
};
} | null;
  carrier_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  client_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  sdk_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  sip_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  tags?: ReadonlyArray<string> | null;
  url?: string | null;
  attributes?: TwilioVoiceFullApiSchemaJsonValue | null;
  properties?: TwilioVoiceFullApiSchemaJsonValue | null;
  trust?: TwilioVoiceFullApiSchemaJsonValue | null;
  annotation?: TwilioVoiceFullApiSchemaJsonValue | null;
};

export type TwilioVoiceFullApiSchemaEventEnumTwilioEdge = "unknown_edge" | "carrier_edge" | "sip_edge" | "sdk_edge" | "client_edge";

export type TwilioVoiceFullApiSchemaInsightsV1CallEvent = {
  timestamp?: string | null;
  call_sid?: string | null;
  account_sid?: string | null;
  edge?: TwilioVoiceFullApiSchemaEventEnumTwilioEdge;
  group?: string | null;
  level?: TwilioVoiceFullApiSchemaEventEnumLevel;
  name?: string | null;
  carrier_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  sip_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  sdk_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  client_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
};

export type TwilioVoiceFullApiSchemaMetricEnumTwilioEdge = "unknown_edge" | "carrier_edge" | "sip_edge" | "sdk_edge" | "client_edge";

export type TwilioVoiceFullApiSchemaMetricEnumStreamDirection = "unknown" | "inbound" | "outbound" | "both";

export type TwilioVoiceFullApiSchemaInsightsV1CallMetric = {
  timestamp?: string | null;
  call_sid?: string | null;
  account_sid?: string | null;
  edge?: TwilioVoiceFullApiSchemaMetricEnumTwilioEdge;
  direction?: TwilioVoiceFullApiSchemaMetricEnumStreamDirection;
  carrier_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  sip_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  sdk_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
  client_edge?: TwilioVoiceFullApiSchemaJsonValue | null;
};

export type TwilioVoiceFullApiSchemaVideoRoomSummaryEnumRoomType = "go" | "peer_to_peer" | "group" | "group_small";

export type TwilioVoiceFullApiSchemaVideoRoomSummaryEnumCodec = "VP8" | "H264" | "VP9" | "opus";

export type TwilioVoiceFullApiSchemaAnnotationEnumAnsweredBy = "unknown_answered_by" | "human" | "machine";

export type TwilioVoiceFullApiSchemaAnnotationEnumConnectivityIssue = "unknown_connectivity_issue" | "no_connectivity_issue" | "invalid_number" | "caller_id" | "dropped_call" | "number_reachability";

export type TwilioVoiceFullApiSchemaInsightsV2CreateAccountReportRequest = {
  time_range?: {
  start_datetime?: string;
  end_datetime?: string;
};
  filters?: ReadonlyArray<TwilioVoiceFullApiSchemaReportFilter>;
};

export type TwilioVoiceFullApiSchemaInsightsV2CreateReportResponse = {
  account_sid?: string;
  report_id?: string;
  status?: TwilioVoiceFullApiSchemaReportStatus;
  request_meta?: TwilioVoiceFullApiSchemaReportMetadata;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaInsightsV2CreatePhoneNumbersReportRequest = {
  time_range?: {
  start_datetime?: string;
  end_datetime?: string;
};
  filters?: ReadonlyArray<TwilioVoiceFullApiSchemaPhoneNumberReportFilter>;
  size?: number;
};

export type TwilioVoiceFullApiSchemaInsightsV2AccountReport = {
  account_sid?: string;
  report_id?: string;
  status?: TwilioVoiceFullApiSchemaReportStatus;
  request_meta?: TwilioVoiceFullApiSchemaReportMetadata;
  report?: TwilioVoiceFullApiSchemaAccountReport;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaInsightsV2InboundPhoneNumberReport = {
  handle?: string;
  total_calls?: number;
  call_answer_score?: number;
  call_state_percentage?: {
  completed?: number;
  fail?: number;
  busy?: number;
  noanswer?: number;
  canceled?: number;
};
  silent_calls_percentage?: number;
};

export type TwilioVoiceFullApiSchemaInsightsV2OutboundPhoneNumberReport = {
  handle?: string;
  total_calls?: number;
  call_answer_score?: number;
  calls_by_device_type?: {
  readonly [key: string]: number | undefined;
};
  answer_rate_device_type?: {
  readonly [key: string]: number | undefined;
};
  call_state_percentage?: {
  completed?: number;
  fail?: number;
  busy?: number;
  noanswer?: number;
  canceled?: number;
};
  blocked_calls_by_carrier?: ReadonlyArray<TwilioVoiceFullApiSchemaCountyCarrierValue>;
  silent_calls_percentage?: number;
  short_duration_calls_percentage?: number;
  long_duration_calls_percentage?: number;
  potential_robocalls_percentage?: number;
  answering_machine_detection?: {
  total_calls?: number;
  answered_by_human_percentage?: number;
  answered_by_machine_percentage?: number;
};
};

export type TwilioVoiceFullApiSchemaInsightsQueryRequest = {
  domain?: string;
  query: TwilioVoiceFullApiSchemaQueryDefinition;
};

export type TwilioVoiceFullApiSchemaInsightsQueryResponse = {
  domain?: string;
  items?: ReadonlyArray<{
  readonly [key: string]: TwilioVoiceFullApiSchemaJsonValue | undefined;
}>;
  meta?: TwilioVoiceFullApiSchemaPaginationMeta;
};

export type TwilioVoiceFullApiSchemaInsightsMetadataResponse = {
  domain?: string;
  cubes?: ReadonlyArray<{
  name: string;
  description?: string;
  measures: ReadonlyArray<{
  name: string;
  description?: string;
  type: string;
  aggregation?: string;
}>;
  dimensions: ReadonlyArray<{
  name: string;
  description?: string;
  type: string;
}>;
}>;
};

export type TwilioVoiceFullApiSchemaTrunkingV1TrunkCredentialList = {
  account_sid?: string | null;
  sid?: string | null;
  trunk_sid?: string | null;
  friendly_name?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaTrunkingV1TrunkIpAccessControlList = {
  account_sid?: string | null;
  sid?: string | null;
  trunk_sid?: string | null;
  friendly_name?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaTrunkingV1TrunkOriginationUrl = {
  account_sid?: string | null;
  sid?: string | null;
  trunk_sid?: string | null;
  weight?: number;
  enabled?: boolean | null;
  sip_url?: string | null;
  friendly_name?: string | null;
  priority?: number;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaTrunkingV1TrunkPhoneNumber = {
  account_sid?: string | null;
  address_requirements?: TwilioVoiceFullApiSchemaPhoneNumberEnumAddressRequirement;
  api_version?: string | null;
  beta?: boolean | null;
  capabilities?: {
  mms?: boolean;
  sms?: boolean;
  voice?: boolean;
  fax?: boolean;
} | null;
  date_created?: string | null;
  date_updated?: string | null;
  friendly_name?: string | null;
  links?: {} | null;
  phone_number?: string | null;
  sid?: string | null;
  sms_application_sid?: string | null;
  sms_fallback_method?: "GET" | "POST";
  sms_fallback_url?: string | null;
  sms_method?: "GET" | "POST";
  sms_url?: string | null;
  status_callback?: string | null;
  status_callback_method?: "GET" | "POST";
  trunk_sid?: string | null;
  url?: string | null;
  voice_application_sid?: string | null;
  voice_caller_id_lookup?: boolean | null;
  voice_fallback_method?: "GET" | "POST";
  voice_fallback_url?: string | null;
  voice_method?: "GET" | "POST";
  voice_url?: string | null;
};

export type TwilioVoiceFullApiSchemaTrunkEnumTransferSetting = "disable-all" | "enable-all" | "sip-only";

export type TwilioVoiceFullApiSchemaTrunkEnumTransferCallerId = "from-transferee" | "from-transferor";

export type TwilioVoiceFullApiSchemaTrunkingV1Trunk = {
  account_sid?: string | null;
  domain_name?: string | null;
  disaster_recovery_method?: "GET" | "POST";
  disaster_recovery_url?: string | null;
  friendly_name?: string | null;
  secure?: boolean | null;
  recording?: TwilioVoiceFullApiSchemaJsonValue | null;
  transfer_mode?: TwilioVoiceFullApiSchemaTrunkEnumTransferSetting;
  transfer_caller_id?: TwilioVoiceFullApiSchemaTrunkEnumTransferCallerId;
  cnam_lookup_enabled?: boolean | null;
  auth_type?: string | null;
  symmetric_rtp_enabled?: boolean | null;
  auth_type_set?: ReadonlyArray<string> | null;
  date_created?: string | null;
  date_updated?: string | null;
  sid?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioVoiceFullApiSchemaTrunkingV1TrunkRecording = {
  mode?: TwilioVoiceFullApiSchemaRecordingEnumRecordingMode;
  trim?: TwilioVoiceFullApiSchemaRecordingEnumRecordingTrim;
};

export type TwilioVoiceFullApiSchemaRecordingEnumRecordingMode = "do-not-record" | "record-from-ringing" | "record-from-answer" | "record-from-ringing-dual" | "record-from-answer-dual";

export type TwilioVoiceFullApiSchemaRecordingEnumRecordingTrim = "trim-silence" | "do-not-trim";

export type TwilioVoiceFullApiSchemaVoiceV1ByocTrunk = {
  account_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  voice_url?: string | null;
  voice_method?: "GET" | "POST";
  voice_fallback_url?: string | null;
  voice_fallback_method?: "GET" | "POST";
  status_callback_url?: string | null;
  status_callback_method?: "GET" | "POST";
  cnam_lookup_enabled?: boolean | null;
  connection_policy_sid?: string | null;
  from_domain_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicy = {
  account_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicyConnectionPolicyTarget = {
  account_sid?: string | null;
  connection_policy_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  target?: string | null;
  priority?: number;
  weight?: number;
  enabled?: boolean | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate = {
  update_count?: number;
  update_request?: string | null;
};

export type TwilioVoiceFullApiSchemaVoiceV1IpRecord = {
  account_sid?: string | null;
  sid?: string | null;
  friendly_name?: string | null;
  ip_address?: string | null;
  cidr_prefix_length?: number;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaVoiceV1SourceIpMapping = {
  sid?: string | null;
  ip_record_sid?: string | null;
  sip_domain_sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsCountryInstance = {
  iso_code?: string | null;
  name?: string | null;
  continent?: string | null;
  country_codes?: ReadonlyArray<string> | null;
  low_risk_numbers_enabled?: boolean | null;
  high_risk_special_numbers_enabled?: boolean | null;
  high_risk_tollfraud_numbers_enabled?: boolean | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsSettings = {
  dialing_permissions_inheritance?: boolean | null;
  url?: string | null;
};

export type TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsCountry = {
  iso_code?: string | null;
  name?: string | null;
  continent?: string | null;
  country_codes?: ReadonlyArray<string> | null;
  low_risk_numbers_enabled?: boolean | null;
  high_risk_special_numbers_enabled?: boolean | null;
  high_risk_tollfraud_numbers_enabled?: boolean | null;
  url?: string | null;
  links?: {} | null;
};

export type TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes = {
  prefix?: string | null;
};

export type TwilioVoiceFullApiSchemaVoiceV3TranscriptionCreateRequestWithSourceId = {
  transcriptionConfigurationId: string;
  inputSource?: "SOURCE_ID";
  sourceId: string;
  participants?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV3TranscriptionParticipant>;
};

export type TwilioVoiceFullApiSchemaVoiceV3TranscriptionCreateRequestWithMediaUrl = {
  transcriptionConfigurationId: string;
  inputSource?: "MEDIA_URL";
  mediaUrl: string;
  audioStartedAt?: string;
  participants?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV3TranscriptionParticipant>;
};

export type TwilioVoiceFullApiSchemaVoiceV3TranscriptionLongRunningOperation202Response = {
  status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";
  statusUrl: string;
  transcription: TwilioVoiceFullApiSchemaVoiceV3TranscriptionTranscription;
};

export type TwilioVoiceFullApiSchemaVoiceV3TranscriptionLongRunningOperationResponse = {
  operationId: string;
  status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";
  statusUrl: string;
  transcription: TwilioVoiceFullApiSchemaVoiceV3TranscriptionTranscription;
};

export type TwilioVoiceFullApiSchemaCallRecordingEnumSource = "DialVerb" | "Conference" | "OutboundAPI" | "Trunking" | "RecordVerb" | "StartCallRecordingAPI" | "StartConferenceRecordingAPI";

export type TwilioVoiceFullApiSchemaParticipantEnumStatus = "queued" | "connecting" | "ringing" | "connected" | "complete" | "failed";

export type TwilioVoiceFullApiSchemaRealtimeTranscriptionEnumStatus = "in-progress" | "stopped";

export type TwilioVoiceFullApiSchemaSiprecEnumStatus = "in-progress" | "stopped";

export type TwilioVoiceFullApiSchemaStreamEnumStatus = "in-progress" | "stopped";

export type TwilioVoiceFullApiSchemaConferenceEnumReasonConferenceEnded = "conference-ended-via-api" | "participant-with-end-conference-on-exit-left" | "participant-with-end-conference-on-exit-kicked" | "last-participant-kicked" | "last-participant-left";

export type TwilioVoiceFullApiSchemaConferenceRecordingEnumSource = "DialVerb" | "Conference" | "OutboundAPI" | "Trunking" | "RecordVerb" | "StartCallRecordingAPI" | "StartConferenceRecordingAPI";

export type TwilioVoiceFullApiSchemaRecordingEnumStatus = "in-progress" | "paused" | "stopped" | "processing" | "completed" | "absent" | "deleted";

export type TwilioVoiceFullApiSchemaRecordingEnumSource = "DialVerb" | "Conference" | "OutboundAPI" | "Trunking" | "RecordVerb" | "StartCallRecordingAPI" | "StartConferenceRecordingAPI";

export type TwilioVoiceFullApiSchemaRecordingTranscriptionEnumStatus = "in-progress" | "completed" | "failed";

export type TwilioVoiceFullApiSchemaTranscriptionEnumStatus = "in-progress" | "completed" | "failed";

export type TwilioVoiceFullApiSchemaConferenceEnumConferenceStatus = "in_progress" | "not_started" | "completed" | "summary_timeout";

export type TwilioVoiceFullApiSchemaConferenceEnumConferenceEndReason = "last_participant_left" | "conference_ended_via_api" | "participant_with_end_conference_on_exit_left" | "last_participant_kicked" | "participant_with_end_conference_on_exit_kicked";

export type TwilioVoiceFullApiSchemaConferenceEnumRegion = "us1" | "us2" | "au1" | "br1" | "ie1" | "jp1" | "sg1" | "de1" | "in1";

export type TwilioVoiceFullApiSchemaConferenceEnumTag = "invalid_requested_region" | "duplicate_identity" | "start_failure" | "region_configuration_issues" | "quality_warnings" | "participant_behavior_issues" | "high_packet_loss" | "high_jitter" | "high_latency" | "low_mos" | "detected_silence" | "no_concurrent_participants";

export type TwilioVoiceFullApiSchemaConferenceEnumProcessingState = "complete" | "in_progress" | "timeout";

export type TwilioVoiceFullApiSchemaConferenceParticipantEnumCallDirection = "inbound" | "outbound";

export type TwilioVoiceFullApiSchemaConferenceParticipantEnumCallStatus = "answered" | "completed" | "busy" | "fail" | "noanswer" | "ringing" | "canceled";

export type TwilioVoiceFullApiSchemaConferenceParticipantEnumJitterBufferSize = "large" | "small" | "medium" | "off";

export type TwilioVoiceFullApiSchemaConferenceParticipantEnumRegion = "us1" | "us2" | "au1" | "br1" | "ie1" | "jp1" | "sg1" | "de1" | "in1";

export type TwilioVoiceFullApiSchemaConferenceParticipantEnumCallType = "carrier" | "client" | "sip";

export type TwilioVoiceFullApiSchemaConferenceParticipantEnumProcessingState = "complete" | "in_progress" | "timeout";

export type TwilioVoiceFullApiSchemaSummaryEnumCallType = "carrier" | "sip" | "trunking" | "client" | "whatsapp";

export type TwilioVoiceFullApiSchemaSummaryEnumCallState = "ringing" | "completed" | "busy" | "fail" | "noanswer" | "canceled" | "answered" | "undialed";

export type TwilioVoiceFullApiSchemaSummaryEnumAnsweredBy = "unknown" | "machine_start" | "machine_end_beep" | "machine_end_silence" | "machine_end_other" | "human" | "fax";

export type TwilioVoiceFullApiSchemaVideoParticipantSummaryEnumRoomStatus = "in_progress" | "connected" | "completed" | "disconnected";

export type TwilioVoiceFullApiSchemaVideoParticipantSummaryEnumCodec = "VP8" | "H264" | "VP9" | "opus";

export type TwilioVoiceFullApiSchemaVideoParticipantSummaryEnumTwilioRealm = "us1" | "us2" | "au1" | "br1" | "ie1" | "jp1" | "sg1" | "in1" | "de1" | "gll";

export type TwilioVoiceFullApiSchemaVideoParticipantSummaryEnumEdgeLocation = "ashburn" | "dublin" | "frankfurt" | "singapore" | "sydney" | "sao_paulo" | "roaming" | "umatilla" | "tokyo";

export type TwilioVoiceFullApiSchemaVideoRoomSummaryEnumRoomStatus = "in_progress" | "completed";

export type TwilioVoiceFullApiSchemaVideoRoomSummaryEnumCreatedMethod = "sdk" | "ad_hoc" | "api";

export type TwilioVoiceFullApiSchemaVideoRoomSummaryEnumEndReason = "room_ended_via_api" | "timeout";

export type TwilioVoiceFullApiSchemaVideoRoomSummaryEnumTwilioRealm = "us1" | "us2" | "au1" | "br1" | "ie1" | "jp1" | "sg1" | "in1" | "de1" | "gll";

export type TwilioVoiceFullApiSchemaVideoRoomSummaryEnumProcessingState = "complete" | "in_progress" | "timeout" | "not_started";

export type TwilioVoiceFullApiSchemaVideoRoomSummaryEnumEdgeLocation = "ashburn" | "dublin" | "frankfurt" | "singapore" | "sydney" | "sao_paulo" | "roaming" | "umatilla" | "tokyo";

export type TwilioVoiceFullApiSchemaCallSummariesEnumCallType = "carrier" | "sip" | "trunking" | "client" | "whatsapp";

export type TwilioVoiceFullApiSchemaCallSummariesEnumCallState = "ringing" | "completed" | "busy" | "fail" | "noanswer" | "canceled" | "answered" | "undialed";

export type TwilioVoiceFullApiSchemaCallSummariesEnumProcessingState = "complete" | "partial";

export type TwilioVoiceFullApiSchemaEventEnumLevel = "UNKNOWN" | "DEBUG" | "INFO" | "WARNING" | "ERROR";

export type TwilioVoiceFullApiSchemaReportFilter = {
  key?: string;
  values?: ReadonlyArray<string>;
};

export type TwilioVoiceFullApiSchemaReportStatus = "created" | "running" | "completed";

export type TwilioVoiceFullApiSchemaReportMetadata = {
  start_datetime?: string;
  end_datetime?: string;
  filters?: ReadonlyArray<TwilioVoiceFullApiSchemaReportFilter>;
};

export type TwilioVoiceFullApiSchemaPhoneNumberReportFilter = {
  key?: string;
  values?: ReadonlyArray<string>;
};

export type TwilioVoiceFullApiSchemaAccountReport = {
  call_deliverability_score?: number;
  call_answer_score?: number;
  total_calls?: number;
  call_direction?: {
  outbound?: number;
  inbound?: number;
};
  call_state?: {
  completed?: number;
  fail?: number;
  busy?: number;
  noanswer?: number;
  canceled?: number;
};
  call_type?: {
  carrier?: number;
  sip?: number;
  trunking?: number;
  client?: number;
  whatsapp?: number;
};
  aloc?: number;
  twilio_edge_location?: {
  readonly [key: string]: number | undefined;
};
  caller_country_code?: {
  readonly [key: string]: number | undefined;
};
  callee_country_code?: {
  readonly [key: string]: number | undefined;
};
  average_queue_time_ms?: number;
  silent_calls_percentage?: number;
  network_issues?: {
  sdk?: {
  ice_failures_percentage?: number;
  high_latency_percentage?: number;
  high_packet_loss_percentage?: number;
  high_jitter_percentage?: number;
};
  twilio_gateway?: {
  high_latency_percentage?: number;
  high_packet_loss_percentage?: number;
  high_jitter_percentage?: number;
};
};
  KYT?: {
  outbound_carrier_calling?: {
  unique_calling_numbers?: number;
  unique_called_numbers?: number;
  blocked_calls_by_carrier?: ReadonlyArray<TwilioVoiceFullApiSchemaCountyCarrierValue>;
  short_duration_calls_percentage?: number;
  long_duration_calls_percentage?: number;
  potential_robocalls_percentage?: number;
  branded_calling?: TwilioVoiceFullApiSchemaBrandedCalling;
  voice_integrity?: TwilioVoiceFullApiSchemaVoiceIntegrity;
  stir_shaken?: TwilioVoiceFullApiSchemaStirShaken;
};
};
  answering_machine_detection?: {
  total_calls?: number;
  answered_by_human_percentage?: number;
  answered_by_machine_percentage?: number;
};
};

export type TwilioVoiceFullApiSchemaCountyCarrierValue = {
  country?: string;
  carriers?: ReadonlyArray<{
  carrier?: string;
  total_calls?: number;
  blocked_calls?: number;
  blocked_calls_percentage?: number;
}>;
};

export type TwilioVoiceFullApiSchemaQueryDefinition = {
  measures?: ReadonlyArray<string>;
  dimensions?: ReadonlyArray<string>;
  filters?: ReadonlyArray<{
  op?: "AND" | "OR" | "EQ" | "NE" | "GT" | "LT" | "IN";
  expressions: ReadonlyArray<{
  op: "AND" | "OR" | "EQ" | "NE" | "GT" | "LT" | "IN";
  field: string;
  values?: ReadonlyArray<string>;
}>;
}>;
  orderBy?: ReadonlyArray<{
  field?: string;
  direction?: "ASC" | "DESC";
}>;
};

export type TwilioVoiceFullApiSchemaPaginationMeta = {
  key: string;
  pageSize: number;
  previousToken?: string | null;
  nextToken?: string | null;
};

export type TwilioVoiceFullApiSchemaPhoneNumberEnumAddressRequirement = "none" | "any" | "local" | "foreign";

export type TwilioVoiceFullApiSchemaVoiceV3TranscriptionParticipant = {
  type?: "CUSTOMER" | "HUMAN_AGENT" | "AI_AGENT";
  address?: string;
  name?: string;
  audioChannelIndex: number;
};

export type TwilioVoiceFullApiSchemaVoiceV3TranscriptionTranscription = {
  id: string;
  accountId: string;
  status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";
  transcriptionConfigurationId: string;
  mediaUrl?: string | null;
  sourceId?: string | null;
  audioStartedAt?: string;
  conversationId?: string | null;
  participants?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV3TranscriptionParticipant>;
  duration?: number | null;
  resolvedConfiguration?: TwilioVoiceFullApiSchemaVoiceV3TranscriptionResolvedConfiguration;
  createdAt: string;
  updatedAt: string;
  url: string;
};

export type TwilioVoiceFullApiSchemaBrandedCalling = {
  total_branded_calls?: number;
  percent_branded_calls?: number;
  answer_rate?: number;
  human_answer_rate?: number;
  engagement_rate?: number;
  by_use_case?: ReadonlyArray<TwilioVoiceFullApiSchemaBrandedUseCaseDetail>;
};

export type TwilioVoiceFullApiSchemaVoiceIntegrity = {
  enabled_calls?: number;
  enabled_percentage?: number;
  calls_per_bundle?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceIntegrityCallsPerBundle>;
};

export type TwilioVoiceFullApiSchemaStirShaken = {
  call_count?: {
  stsh_a?: number;
  stsh_b?: number;
  stsh_c?: number;
};
  percentage?: {
  stsh_a?: number;
  stsh_b?: number;
  stsh_c?: number;
};
  answer_rate?: {
  stsh_a?: number;
  stsh_b?: number;
  stsh_c?: number;
};
};

export type TwilioVoiceFullApiSchemaVoiceV3TranscriptionResolvedConfiguration = {
  transcriptionEngine?: string;
  speechModel?: string;
  language?: string;
  transcriptionStatusCallback?: TwilioVoiceFullApiSchemaVoiceV3TranscriptionTranscriptionStatusCallback;
  conversationConfigurationId?: string | null;
  participantDefaults?: ReadonlyArray<{
  audioChannelIndex: number;
  type: "CUSTOMER" | "HUMAN_AGENT" | "AI_AGENT";
}>;
};

export type TwilioVoiceFullApiSchemaBrandedUseCaseDetail = {
  use_case?: string;
  enabled_phonenumbers?: number;
  total_calls?: number;
  answer_rate?: number;
  human_answer_rate?: number;
  engagement_rate?: number;
};

export type TwilioVoiceFullApiSchemaVoiceIntegrityCallsPerBundle = {
  bundle_sid?: string;
  enabled_phonenumbers?: number;
  total_calls?: number;
  answer_rate?: number;
  human_answer_rate?: number;
};

export type TwilioVoiceFullApiSchemaVoiceV3TranscriptionTranscriptionStatusCallback = {
  url?: string;
  method?: "POST";
  events?: ReadonlyArray<"COMPLETED"> | null;
};

export interface TwilioVoiceFullApiOperationQueryMap {
  "api_v2010:CreateApplication": {};
  "api_v2010:CreateCall": {};
  "api_v2010:CreateCallRecording": {};
  "api_v2010:CreateParticipant": {};
  "api_v2010:CreatePayments": {};
  "api_v2010:CreateQueue": {};
  "api_v2010:CreateRealtimeTranscription": {};
  "api_v2010:CreateSipCredential": {};
  "api_v2010:CreateSipCredentialList": {};
  "api_v2010:CreateSipCredentialListMapping": {};
  "api_v2010:CreateSipDomain": {};
  "api_v2010:CreateSipIpAccessControlList": {};
  "api_v2010:CreateSipIpAccessControlListMapping": {};
  "api_v2010:CreateSipIpAddress": {};
  "api_v2010:CreateSiprec": {};
  "api_v2010:CreateStream": {};
  "api_v2010:CreateUserDefinedMessage": {};
  "api_v2010:CreateUserDefinedMessageSubscription": {};
  "api_v2010:DeleteApplication": {};
  "api_v2010:DeleteCall": {};
  "api_v2010:DeleteCallRecording": {};
  "api_v2010:DeleteConferenceRecording": {};
  "api_v2010:DeleteOutgoingCallerId": {};
  "api_v2010:DeleteParticipant": {};
  "api_v2010:DeleteQueue": {};
  "api_v2010:DeleteRecording": {};
  "api_v2010:DeleteRecordingTranscription": {};
  "api_v2010:DeleteSipCredential": {};
  "api_v2010:DeleteSipCredentialList": {};
  "api_v2010:DeleteSipCredentialListMapping": {};
  "api_v2010:DeleteSipDomain": {};
  "api_v2010:DeleteSipIpAccessControlList": {};
  "api_v2010:DeleteSipIpAccessControlListMapping": {};
  "api_v2010:DeleteSipIpAddress": {};
  "api_v2010:DeleteTranscription": {};
  "api_v2010:DeleteUserDefinedMessageSubscription": {};
  "api_v2010:FetchApplication": {};
  "api_v2010:FetchCall": {};
  "api_v2010:FetchCallNotification": {};
  "api_v2010:FetchCallRecording": {};
  "api_v2010:FetchConference": {};
  "api_v2010:FetchConferenceRecording": {};
  "api_v2010:FetchMember": {};
  "api_v2010:FetchOutgoingCallerId": {};
  "api_v2010:FetchParticipant": {};
  "api_v2010:FetchQueue": {};
  "api_v2010:FetchRecording": {
  IncludeSoftDeleted?: boolean;
};
  "api_v2010:FetchRecordingTranscription": {};
  "api_v2010:FetchSipCredential": {};
  "api_v2010:FetchSipCredentialList": {};
  "api_v2010:FetchSipCredentialListMapping": {};
  "api_v2010:FetchSipDomain": {};
  "api_v2010:FetchSipIpAccessControlList": {};
  "api_v2010:FetchSipIpAccessControlListMapping": {};
  "api_v2010:FetchSipIpAddress": {};
  "api_v2010:FetchTranscription": {};
  "api_v2010:ListApplication": {
  FriendlyName?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListCall": {
  To?: string;
  From?: string;
  ParentCallSid?: string;
  Status?: TwilioVoiceFullApiSchemaCallEnumStatus;
  StartTime?: string;
  "StartTime<"?: string;
  "StartTime>"?: string;
  EndTime?: string;
  "EndTime<"?: string;
  "EndTime>"?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListCallNotification": {
  Log?: number;
  MessageDate?: string;
  "MessageDate<"?: string;
  "MessageDate>"?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListCallRecording": {
  DateCreated?: string;
  "DateCreated<"?: string;
  "DateCreated>"?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListConference": {
  DateCreated?: string;
  "DateCreated<"?: string;
  "DateCreated>"?: string;
  DateUpdated?: string;
  "DateUpdated<"?: string;
  "DateUpdated>"?: string;
  FriendlyName?: string;
  Status?: TwilioVoiceFullApiSchemaConferenceEnumStatus;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListConferenceRecording": {
  DateCreated?: string;
  "DateCreated<"?: string;
  "DateCreated>"?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListMember": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListOutgoingCallerId": {
  PhoneNumber?: string;
  FriendlyName?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListParticipant": {
  Muted?: boolean;
  Hold?: boolean;
  Coaching?: boolean;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListQueue": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListRecording": {
  DateCreated?: string;
  "DateCreated<"?: string;
  "DateCreated>"?: string;
  CallSid?: string;
  ConferenceSid?: string;
  IncludeSoftDeleted?: boolean;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListRecordingTranscription": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListSipCredential": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListSipCredentialList": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListSipCredentialListMapping": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListSipDomain": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListSipIpAccessControlList": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListSipIpAccessControlListMapping": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListSipIpAddress": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:ListTranscription": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "api_v2010:UpdateApplication": {};
  "api_v2010:UpdateCall": {};
  "api_v2010:UpdateCallRecording": {};
  "api_v2010:UpdateConference": {};
  "api_v2010:UpdateConferenceRecording": {};
  "api_v2010:UpdateMember": {};
  "api_v2010:UpdateOutgoingCallerId": {};
  "api_v2010:UpdateParticipant": {};
  "api_v2010:UpdatePayments": {};
  "api_v2010:UpdateQueue": {};
  "api_v2010:UpdateRealtimeTranscription": {};
  "api_v2010:UpdateSipCredential": {};
  "api_v2010:UpdateSipCredentialList": {};
  "api_v2010:UpdateSipDomain": {};
  "api_v2010:UpdateSipIpAccessControlList": {};
  "api_v2010:UpdateSipIpAddress": {};
  "api_v2010:UpdateSiprec": {};
  "api_v2010:UpdateStream": {};
  "insights_v1:FetchAccountSettings": {
  SubaccountSid?: string;
};
  "insights_v1:FetchAnnotation": {};
  "insights_v1:FetchCall": {};
  "insights_v1:FetchConference": {};
  "insights_v1:FetchConferenceParticipant": {
  Events?: string;
  Metrics?: string;
};
  "insights_v1:FetchSummary": {
  ProcessingState?: TwilioVoiceFullApiSchemaSummaryEnumProcessingState;
};
  "insights_v1:FetchVideoParticipantSummary": {};
  "insights_v1:FetchVideoRoomSummary": {};
  "insights_v1:ListCallSummaries": {
  From?: string;
  To?: string;
  FromCarrier?: string;
  ToCarrier?: string;
  FromCountryCode?: string;
  ToCountryCode?: string;
  VerifiedCaller?: boolean;
  HasTag?: boolean;
  StartTime?: string;
  EndTime?: string;
  CallType?: string;
  CallState?: string;
  Direction?: string;
  ProcessingState?: TwilioVoiceFullApiSchemaCallSummariesEnumProcessingStateRequest;
  SortBy?: TwilioVoiceFullApiSchemaCallSummariesEnumSortBy;
  Subaccount?: string;
  AbnormalSession?: boolean;
  AnsweredBy?: TwilioVoiceFullApiSchemaCallSummariesEnumAnsweredBy;
  AnsweredByAnnotation?: string;
  ConnectivityIssueAnnotation?: string;
  QualityIssueAnnotation?: string;
  SpamAnnotation?: boolean;
  CallScoreAnnotation?: string;
  BrandedEnabled?: boolean;
  VoiceIntegrityEnabled?: boolean;
  BrandedBundleSid?: string;
  BrandedLogo?: boolean;
  BrandedType?: string;
  BrandedUseCase?: string;
  BrandedCallReason?: string;
  VoiceIntegrityBundleSid?: string;
  VoiceIntegrityUseCase?: string;
  BusinessProfileIdentity?: string;
  BusinessProfileIndustry?: string;
  BusinessProfileBundleSid?: string;
  BusinessProfileType?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "insights_v1:ListConference": {
  ConferenceSid?: string;
  FriendlyName?: string;
  Status?: string;
  CreatedAfter?: string;
  CreatedBefore?: string;
  MixerRegion?: string;
  Tags?: string;
  Subaccount?: string;
  DetectedIssues?: string;
  EndReason?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "insights_v1:ListConferenceParticipant": {
  ParticipantSid?: string;
  Label?: string;
  Events?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "insights_v1:ListEvent": {
  Edge?: TwilioVoiceFullApiSchemaEventEnumTwilioEdge;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "insights_v1:ListMetric": {
  Edge?: TwilioVoiceFullApiSchemaMetricEnumTwilioEdge;
  Direction?: TwilioVoiceFullApiSchemaMetricEnumStreamDirection;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "insights_v1:ListVideoParticipantSummary": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "insights_v1:ListVideoRoomSummary": {
  RoomType?: ReadonlyArray<TwilioVoiceFullApiSchemaVideoRoomSummaryEnumRoomType>;
  Codec?: ReadonlyArray<TwilioVoiceFullApiSchemaVideoRoomSummaryEnumCodec>;
  RoomName?: string;
  CreatedAfter?: string;
  CreatedBefore?: string;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "insights_v1:UpdateAccountSettings": {};
  "insights_v1:UpdateAnnotation": {};
  "insights_v2:CreateAccountReport": {};
  "insights_v2:CreateInboundPhoneNumbersReport": {};
  "insights_v2:CreateOutboundPhoneNumbersReport": {};
  "insights_v2:FetchAccountReport": {};
  "insights_v2:ListInboundPhoneNumbersReport": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "insights_v2:ListOutboundPhoneNumbersReport": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "insights_v3:CreateQueryResults": {
  pageSize?: number;
};
  "insights_v3:FetchMetadata": {};
  "insights_v3:FetchQueryResults": {
  pageToken: string;
};
  "trunking_v1:CreateCredentialList": {};
  "trunking_v1:CreateIpAccessControlList": {};
  "trunking_v1:CreateOriginationUrl": {};
  "trunking_v1:CreatePhoneNumber": {};
  "trunking_v1:CreateTrunk": {};
  "trunking_v1:DeleteCredentialList": {};
  "trunking_v1:DeleteIpAccessControlList": {};
  "trunking_v1:DeleteOriginationUrl": {};
  "trunking_v1:DeletePhoneNumber": {};
  "trunking_v1:DeleteTrunk": {};
  "trunking_v1:FetchCredentialList": {};
  "trunking_v1:FetchIpAccessControlList": {};
  "trunking_v1:FetchOriginationUrl": {};
  "trunking_v1:FetchPhoneNumber": {};
  "trunking_v1:FetchRecording": {};
  "trunking_v1:FetchTrunk": {};
  "trunking_v1:ListCredentialList": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "trunking_v1:ListIpAccessControlList": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "trunking_v1:ListOriginationUrl": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "trunking_v1:ListPhoneNumber": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "trunking_v1:ListTrunk": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "trunking_v1:UpdateOriginationUrl": {};
  "trunking_v1:UpdateRecording": {};
  "trunking_v1:UpdateTrunk": {};
  "voice_v1:CreateByocTrunk": {};
  "voice_v1:CreateConnectionPolicy": {};
  "voice_v1:CreateConnectionPolicyTarget": {};
  "voice_v1:CreateDialingPermissionsCountryBulkUpdate": {};
  "voice_v1:CreateIpRecord": {};
  "voice_v1:CreateSourceIpMapping": {};
  "voice_v1:DeleteArchivedCall": {};
  "voice_v1:DeleteByocTrunk": {};
  "voice_v1:DeleteConnectionPolicy": {};
  "voice_v1:DeleteConnectionPolicyTarget": {};
  "voice_v1:DeleteIpRecord": {};
  "voice_v1:DeleteSourceIpMapping": {};
  "voice_v1:FetchByocTrunk": {};
  "voice_v1:FetchConnectionPolicy": {};
  "voice_v1:FetchConnectionPolicyTarget": {};
  "voice_v1:FetchDialingPermissionsCountry": {};
  "voice_v1:FetchDialingPermissionsSettings": {};
  "voice_v1:FetchIpRecord": {};
  "voice_v1:FetchSourceIpMapping": {};
  "voice_v1:ListByocTrunk": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "voice_v1:ListConnectionPolicy": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "voice_v1:ListConnectionPolicyTarget": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "voice_v1:ListDialingPermissionsCountry": {
  IsoCode?: string;
  Continent?: string;
  CountryCode?: string;
  LowRiskNumbersEnabled?: boolean;
  HighRiskSpecialNumbersEnabled?: boolean;
  HighRiskTollfraudNumbersEnabled?: boolean;
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "voice_v1:ListDialingPermissionsHrsPrefixes": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "voice_v1:ListIpRecord": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "voice_v1:ListSourceIpMapping": {
  PageSize?: number;
  Page?: number;
  PageToken?: string;
};
  "voice_v1:UpdateByocTrunk": {};
  "voice_v1:UpdateConnectionPolicy": {};
  "voice_v1:UpdateConnectionPolicyTarget": {};
  "voice_v1:UpdateDialingPermissionsSettings": {};
  "voice_v1:UpdateIpRecord": {};
  "voice_v1:UpdateSourceIpMapping": {};
  "voice_v3:CreateV3Transcriptions": {};
  "voice_v3:FetchTranscription": {};
}

export interface TwilioVoiceFullApiOperationQueryRequiredMap {
  "api_v2010:CreateApplication": false;
  "api_v2010:CreateCall": false;
  "api_v2010:CreateCallRecording": false;
  "api_v2010:CreateParticipant": false;
  "api_v2010:CreatePayments": false;
  "api_v2010:CreateQueue": false;
  "api_v2010:CreateRealtimeTranscription": false;
  "api_v2010:CreateSipCredential": false;
  "api_v2010:CreateSipCredentialList": false;
  "api_v2010:CreateSipCredentialListMapping": false;
  "api_v2010:CreateSipDomain": false;
  "api_v2010:CreateSipIpAccessControlList": false;
  "api_v2010:CreateSipIpAccessControlListMapping": false;
  "api_v2010:CreateSipIpAddress": false;
  "api_v2010:CreateSiprec": false;
  "api_v2010:CreateStream": false;
  "api_v2010:CreateUserDefinedMessage": false;
  "api_v2010:CreateUserDefinedMessageSubscription": false;
  "api_v2010:DeleteApplication": false;
  "api_v2010:DeleteCall": false;
  "api_v2010:DeleteCallRecording": false;
  "api_v2010:DeleteConferenceRecording": false;
  "api_v2010:DeleteOutgoingCallerId": false;
  "api_v2010:DeleteParticipant": false;
  "api_v2010:DeleteQueue": false;
  "api_v2010:DeleteRecording": false;
  "api_v2010:DeleteRecordingTranscription": false;
  "api_v2010:DeleteSipCredential": false;
  "api_v2010:DeleteSipCredentialList": false;
  "api_v2010:DeleteSipCredentialListMapping": false;
  "api_v2010:DeleteSipDomain": false;
  "api_v2010:DeleteSipIpAccessControlList": false;
  "api_v2010:DeleteSipIpAccessControlListMapping": false;
  "api_v2010:DeleteSipIpAddress": false;
  "api_v2010:DeleteTranscription": false;
  "api_v2010:DeleteUserDefinedMessageSubscription": false;
  "api_v2010:FetchApplication": false;
  "api_v2010:FetchCall": false;
  "api_v2010:FetchCallNotification": false;
  "api_v2010:FetchCallRecording": false;
  "api_v2010:FetchConference": false;
  "api_v2010:FetchConferenceRecording": false;
  "api_v2010:FetchMember": false;
  "api_v2010:FetchOutgoingCallerId": false;
  "api_v2010:FetchParticipant": false;
  "api_v2010:FetchQueue": false;
  "api_v2010:FetchRecording": false;
  "api_v2010:FetchRecordingTranscription": false;
  "api_v2010:FetchSipCredential": false;
  "api_v2010:FetchSipCredentialList": false;
  "api_v2010:FetchSipCredentialListMapping": false;
  "api_v2010:FetchSipDomain": false;
  "api_v2010:FetchSipIpAccessControlList": false;
  "api_v2010:FetchSipIpAccessControlListMapping": false;
  "api_v2010:FetchSipIpAddress": false;
  "api_v2010:FetchTranscription": false;
  "api_v2010:ListApplication": false;
  "api_v2010:ListCall": false;
  "api_v2010:ListCallNotification": false;
  "api_v2010:ListCallRecording": false;
  "api_v2010:ListConference": false;
  "api_v2010:ListConferenceRecording": false;
  "api_v2010:ListMember": false;
  "api_v2010:ListOutgoingCallerId": false;
  "api_v2010:ListParticipant": false;
  "api_v2010:ListQueue": false;
  "api_v2010:ListRecording": false;
  "api_v2010:ListRecordingTranscription": false;
  "api_v2010:ListSipCredential": false;
  "api_v2010:ListSipCredentialList": false;
  "api_v2010:ListSipCredentialListMapping": false;
  "api_v2010:ListSipDomain": false;
  "api_v2010:ListSipIpAccessControlList": false;
  "api_v2010:ListSipIpAccessControlListMapping": false;
  "api_v2010:ListSipIpAddress": false;
  "api_v2010:ListTranscription": false;
  "api_v2010:UpdateApplication": false;
  "api_v2010:UpdateCall": false;
  "api_v2010:UpdateCallRecording": false;
  "api_v2010:UpdateConference": false;
  "api_v2010:UpdateConferenceRecording": false;
  "api_v2010:UpdateMember": false;
  "api_v2010:UpdateOutgoingCallerId": false;
  "api_v2010:UpdateParticipant": false;
  "api_v2010:UpdatePayments": false;
  "api_v2010:UpdateQueue": false;
  "api_v2010:UpdateRealtimeTranscription": false;
  "api_v2010:UpdateSipCredential": false;
  "api_v2010:UpdateSipCredentialList": false;
  "api_v2010:UpdateSipDomain": false;
  "api_v2010:UpdateSipIpAccessControlList": false;
  "api_v2010:UpdateSipIpAddress": false;
  "api_v2010:UpdateSiprec": false;
  "api_v2010:UpdateStream": false;
  "insights_v1:FetchAccountSettings": false;
  "insights_v1:FetchAnnotation": false;
  "insights_v1:FetchCall": false;
  "insights_v1:FetchConference": false;
  "insights_v1:FetchConferenceParticipant": false;
  "insights_v1:FetchSummary": false;
  "insights_v1:FetchVideoParticipantSummary": false;
  "insights_v1:FetchVideoRoomSummary": false;
  "insights_v1:ListCallSummaries": false;
  "insights_v1:ListConference": false;
  "insights_v1:ListConferenceParticipant": false;
  "insights_v1:ListEvent": false;
  "insights_v1:ListMetric": false;
  "insights_v1:ListVideoParticipantSummary": false;
  "insights_v1:ListVideoRoomSummary": false;
  "insights_v1:UpdateAccountSettings": false;
  "insights_v1:UpdateAnnotation": false;
  "insights_v2:CreateAccountReport": false;
  "insights_v2:CreateInboundPhoneNumbersReport": false;
  "insights_v2:CreateOutboundPhoneNumbersReport": false;
  "insights_v2:FetchAccountReport": false;
  "insights_v2:ListInboundPhoneNumbersReport": false;
  "insights_v2:ListOutboundPhoneNumbersReport": false;
  "insights_v3:CreateQueryResults": false;
  "insights_v3:FetchMetadata": false;
  "insights_v3:FetchQueryResults": true;
  "trunking_v1:CreateCredentialList": false;
  "trunking_v1:CreateIpAccessControlList": false;
  "trunking_v1:CreateOriginationUrl": false;
  "trunking_v1:CreatePhoneNumber": false;
  "trunking_v1:CreateTrunk": false;
  "trunking_v1:DeleteCredentialList": false;
  "trunking_v1:DeleteIpAccessControlList": false;
  "trunking_v1:DeleteOriginationUrl": false;
  "trunking_v1:DeletePhoneNumber": false;
  "trunking_v1:DeleteTrunk": false;
  "trunking_v1:FetchCredentialList": false;
  "trunking_v1:FetchIpAccessControlList": false;
  "trunking_v1:FetchOriginationUrl": false;
  "trunking_v1:FetchPhoneNumber": false;
  "trunking_v1:FetchRecording": false;
  "trunking_v1:FetchTrunk": false;
  "trunking_v1:ListCredentialList": false;
  "trunking_v1:ListIpAccessControlList": false;
  "trunking_v1:ListOriginationUrl": false;
  "trunking_v1:ListPhoneNumber": false;
  "trunking_v1:ListTrunk": false;
  "trunking_v1:UpdateOriginationUrl": false;
  "trunking_v1:UpdateRecording": false;
  "trunking_v1:UpdateTrunk": false;
  "voice_v1:CreateByocTrunk": false;
  "voice_v1:CreateConnectionPolicy": false;
  "voice_v1:CreateConnectionPolicyTarget": false;
  "voice_v1:CreateDialingPermissionsCountryBulkUpdate": false;
  "voice_v1:CreateIpRecord": false;
  "voice_v1:CreateSourceIpMapping": false;
  "voice_v1:DeleteArchivedCall": false;
  "voice_v1:DeleteByocTrunk": false;
  "voice_v1:DeleteConnectionPolicy": false;
  "voice_v1:DeleteConnectionPolicyTarget": false;
  "voice_v1:DeleteIpRecord": false;
  "voice_v1:DeleteSourceIpMapping": false;
  "voice_v1:FetchByocTrunk": false;
  "voice_v1:FetchConnectionPolicy": false;
  "voice_v1:FetchConnectionPolicyTarget": false;
  "voice_v1:FetchDialingPermissionsCountry": false;
  "voice_v1:FetchDialingPermissionsSettings": false;
  "voice_v1:FetchIpRecord": false;
  "voice_v1:FetchSourceIpMapping": false;
  "voice_v1:ListByocTrunk": false;
  "voice_v1:ListConnectionPolicy": false;
  "voice_v1:ListConnectionPolicyTarget": false;
  "voice_v1:ListDialingPermissionsCountry": false;
  "voice_v1:ListDialingPermissionsHrsPrefixes": false;
  "voice_v1:ListIpRecord": false;
  "voice_v1:ListSourceIpMapping": false;
  "voice_v1:UpdateByocTrunk": false;
  "voice_v1:UpdateConnectionPolicy": false;
  "voice_v1:UpdateConnectionPolicyTarget": false;
  "voice_v1:UpdateDialingPermissionsSettings": false;
  "voice_v1:UpdateIpRecord": false;
  "voice_v1:UpdateSourceIpMapping": false;
  "voice_v3:CreateV3Transcriptions": false;
  "voice_v3:FetchTranscription": false;
}

export interface TwilioVoiceFullApiOperationRequestBodyMap {
  "api_v2010:CreateApplication": {
  ApiVersion?: string;
  VoiceUrl?: string;
  VoiceMethod?: "GET" | "POST";
  VoiceFallbackUrl?: string;
  VoiceFallbackMethod?: "GET" | "POST";
  StatusCallback?: string;
  StatusCallbackMethod?: "GET" | "POST";
  VoiceCallerIdLookup?: boolean;
  SmsUrl?: string;
  SmsMethod?: "GET" | "POST";
  SmsFallbackUrl?: string;
  SmsFallbackMethod?: "GET" | "POST";
  SmsStatusCallback?: string;
  MessageStatusCallback?: string;
  FriendlyName?: string;
  PublicApplicationConnectEnabled?: boolean;
};
  "api_v2010:CreateCall": {
  To: string;
  From: string;
  Method?: "GET" | "POST";
  FallbackUrl?: string;
  FallbackMethod?: "GET" | "POST";
  StatusCallback?: string;
  StatusCallbackEvent?: ReadonlyArray<string>;
  StatusCallbackMethod?: "GET" | "POST";
  SendDigits?: string;
  Timeout?: number;
  Record?: boolean;
  RecordingChannels?: string;
  RecordingStatusCallback?: string;
  RecordingStatusCallbackMethod?: "GET" | "POST";
  RecordingConfigurationId?: string;
  SipAuthUsername?: string;
  SipAuthPassword?: string;
  MachineDetection?: string;
  MachineDetectionTimeout?: number;
  RecordingStatusCallbackEvent?: ReadonlyArray<string>;
  Trim?: string;
  CallerId?: string;
  MachineDetectionSpeechThreshold?: number;
  MachineDetectionSpeechEndThreshold?: number;
  MachineDetectionSilenceTimeout?: number;
  AsyncAmd?: string;
  AsyncAmdStatusCallback?: string;
  AsyncAmdStatusCallbackMethod?: "GET" | "POST";
  Byoc?: string;
  CallReason?: string;
  CallToken?: string;
  RecordingTrack?: string;
  TimeLimit?: number;
  ClientNotificationUrl?: string;
  Url?: string;
  Twiml?: string;
  ApplicationSid?: string;
};
  "api_v2010:CreateCallRecording": {
  RecordingStatusCallbackEvent?: ReadonlyArray<string>;
  RecordingStatusCallback?: string;
  RecordingStatusCallbackMethod?: "GET" | "POST";
  Trim?: string;
  RecordingChannels?: string;
  RecordingTrack?: string;
  RecordingConfigurationId?: string;
};
  "api_v2010:CreateParticipant": {
  From: string;
  To: string;
  StatusCallback?: string;
  StatusCallbackMethod?: "GET" | "POST";
  StatusCallbackEvent?: ReadonlyArray<string>;
  Label?: string;
  Timeout?: number;
  Record?: boolean;
  Muted?: boolean;
  Beep?: string;
  StartConferenceOnEnter?: boolean;
  EndConferenceOnExit?: boolean;
  WaitUrl?: string;
  WaitMethod?: "GET" | "POST";
  EarlyMedia?: boolean;
  MaxParticipants?: number;
  ConferenceRecord?: string;
  ConferenceTrim?: string;
  ConferenceStatusCallback?: string;
  ConferenceStatusCallbackMethod?: "GET" | "POST";
  ConferenceStatusCallbackEvent?: ReadonlyArray<string>;
  RecordingChannels?: string;
  RecordingStatusCallback?: string;
  RecordingStatusCallbackMethod?: "GET" | "POST";
  SipAuthUsername?: string;
  SipAuthPassword?: string;
  Region?: string;
  ConferenceRecordingStatusCallback?: string;
  ConferenceRecordingStatusCallbackMethod?: "GET" | "POST";
  RecordingStatusCallbackEvent?: ReadonlyArray<string>;
  ConferenceRecordingStatusCallbackEvent?: ReadonlyArray<string>;
  Coaching?: boolean;
  CallSidToCoach?: string;
  JitterBufferSize?: string;
  Byoc?: string;
  CallerId?: string;
  CallReason?: string;
  RecordingTrack?: string;
  RecordingConfigurationId?: string;
  TimeLimit?: number;
  MachineDetection?: string;
  MachineDetectionTimeout?: number;
  MachineDetectionSpeechThreshold?: number;
  MachineDetectionSpeechEndThreshold?: number;
  MachineDetectionSilenceTimeout?: number;
  AmdStatusCallback?: string;
  AmdStatusCallbackMethod?: "GET" | "POST";
  Trim?: string;
  CallToken?: string;
  ClientNotificationUrl?: string;
  CallerDisplayName?: string;
};
  "api_v2010:CreatePayments": {
  IdempotencyKey: string;
  StatusCallback: string;
  BankAccountType?: TwilioVoiceFullApiSchemaPaymentsEnumBankAccountType;
  ChargeAmount?: number;
  Currency?: string;
  Description?: string;
  Input?: string;
  MinPostalCodeLength?: number;
  Parameter?: TwilioVoiceFullApiSchemaJsonValue;
  PaymentConnector?: string;
  PaymentMethod?: TwilioVoiceFullApiSchemaPaymentsEnumPaymentMethod;
  PostalCode?: boolean;
  SecurityCode?: boolean;
  Timeout?: number;
  TokenType?: TwilioVoiceFullApiSchemaPaymentsEnumTokenType;
  ValidCardTypes?: string;
  RequireMatchingInputs?: string;
  Confirmation?: "true" | "false";
};
  "api_v2010:CreateQueue": {
  FriendlyName: string;
  MaxSize?: number;
};
  "api_v2010:CreateRealtimeTranscription": {
  Name?: string;
  Track?: TwilioVoiceFullApiSchemaRealtimeTranscriptionEnumTrack;
  StatusCallbackUrl?: string;
  StatusCallbackMethod?: "GET" | "POST";
  InboundTrackLabel?: string;
  OutboundTrackLabel?: string;
  PartialResults?: boolean;
  LanguageCode?: string;
  TranscriptionEngine?: string;
  ProfanityFilter?: boolean;
  SpeechModel?: string;
  Hints?: string;
  EnableAutomaticPunctuation?: boolean;
  IntelligenceService?: string;
  ConversationConfiguration?: string;
  ConversationId?: string;
  TranscriptionConfigurationId?: string;
  EnableProviderData?: boolean;
};
  "api_v2010:CreateSipCredential": {
  Username: string;
  Password: string;
};
  "api_v2010:CreateSipCredentialList": {
  FriendlyName: string;
};
  "api_v2010:CreateSipCredentialListMapping": {
  CredentialListSid: string;
};
  "api_v2010:CreateSipDomain": {
  DomainName: string;
  FriendlyName?: string;
  VoiceUrl?: string;
  VoiceMethod?: "GET" | "POST";
  VoiceFallbackUrl?: string;
  VoiceFallbackMethod?: "GET" | "POST";
  VoiceStatusCallbackUrl?: string;
  VoiceStatusCallbackMethod?: "GET" | "POST";
  SipRegistration?: boolean;
  EmergencyCallingEnabled?: boolean;
  Secure?: boolean;
  ByocTrunkSid?: string;
  EmergencyCallerSid?: string;
};
  "api_v2010:CreateSipIpAccessControlList": {
  FriendlyName: string;
};
  "api_v2010:CreateSipIpAccessControlListMapping": {
  IpAccessControlListSid: string;
};
  "api_v2010:CreateSipIpAddress": {
  FriendlyName: string;
  IpAddress: string;
  CidrPrefixLength?: number;
};
  "api_v2010:CreateSiprec": {
  Name?: string;
  ConnectorName?: string;
  Track?: TwilioVoiceFullApiSchemaSiprecEnumTrack;
  StatusCallback?: string;
  StatusCallbackMethod?: "GET" | "POST";
  "Parameter1.Name"?: string;
  "Parameter1.Value"?: string;
  "Parameter2.Name"?: string;
  "Parameter2.Value"?: string;
  "Parameter3.Name"?: string;
  "Parameter3.Value"?: string;
  "Parameter4.Name"?: string;
  "Parameter4.Value"?: string;
  "Parameter5.Name"?: string;
  "Parameter5.Value"?: string;
  "Parameter6.Name"?: string;
  "Parameter6.Value"?: string;
  "Parameter7.Name"?: string;
  "Parameter7.Value"?: string;
  "Parameter8.Name"?: string;
  "Parameter8.Value"?: string;
  "Parameter9.Name"?: string;
  "Parameter9.Value"?: string;
  "Parameter10.Name"?: string;
  "Parameter10.Value"?: string;
  "Parameter11.Name"?: string;
  "Parameter11.Value"?: string;
  "Parameter12.Name"?: string;
  "Parameter12.Value"?: string;
  "Parameter13.Name"?: string;
  "Parameter13.Value"?: string;
  "Parameter14.Name"?: string;
  "Parameter14.Value"?: string;
  "Parameter15.Name"?: string;
  "Parameter15.Value"?: string;
  "Parameter16.Name"?: string;
  "Parameter16.Value"?: string;
  "Parameter17.Name"?: string;
  "Parameter17.Value"?: string;
  "Parameter18.Name"?: string;
  "Parameter18.Value"?: string;
  "Parameter19.Name"?: string;
  "Parameter19.Value"?: string;
  "Parameter20.Name"?: string;
  "Parameter20.Value"?: string;
  "Parameter21.Name"?: string;
  "Parameter21.Value"?: string;
  "Parameter22.Name"?: string;
  "Parameter22.Value"?: string;
  "Parameter23.Name"?: string;
  "Parameter23.Value"?: string;
  "Parameter24.Name"?: string;
  "Parameter24.Value"?: string;
  "Parameter25.Name"?: string;
  "Parameter25.Value"?: string;
  "Parameter26.Name"?: string;
  "Parameter26.Value"?: string;
  "Parameter27.Name"?: string;
  "Parameter27.Value"?: string;
  "Parameter28.Name"?: string;
  "Parameter28.Value"?: string;
  "Parameter29.Name"?: string;
  "Parameter29.Value"?: string;
  "Parameter30.Name"?: string;
  "Parameter30.Value"?: string;
  "Parameter31.Name"?: string;
  "Parameter31.Value"?: string;
  "Parameter32.Name"?: string;
  "Parameter32.Value"?: string;
  "Parameter33.Name"?: string;
  "Parameter33.Value"?: string;
  "Parameter34.Name"?: string;
  "Parameter34.Value"?: string;
  "Parameter35.Name"?: string;
  "Parameter35.Value"?: string;
  "Parameter36.Name"?: string;
  "Parameter36.Value"?: string;
  "Parameter37.Name"?: string;
  "Parameter37.Value"?: string;
  "Parameter38.Name"?: string;
  "Parameter38.Value"?: string;
  "Parameter39.Name"?: string;
  "Parameter39.Value"?: string;
  "Parameter40.Name"?: string;
  "Parameter40.Value"?: string;
  "Parameter41.Name"?: string;
  "Parameter41.Value"?: string;
  "Parameter42.Name"?: string;
  "Parameter42.Value"?: string;
  "Parameter43.Name"?: string;
  "Parameter43.Value"?: string;
  "Parameter44.Name"?: string;
  "Parameter44.Value"?: string;
  "Parameter45.Name"?: string;
  "Parameter45.Value"?: string;
  "Parameter46.Name"?: string;
  "Parameter46.Value"?: string;
  "Parameter47.Name"?: string;
  "Parameter47.Value"?: string;
  "Parameter48.Name"?: string;
  "Parameter48.Value"?: string;
  "Parameter49.Name"?: string;
  "Parameter49.Value"?: string;
  "Parameter50.Name"?: string;
  "Parameter50.Value"?: string;
  "Parameter51.Name"?: string;
  "Parameter51.Value"?: string;
  "Parameter52.Name"?: string;
  "Parameter52.Value"?: string;
  "Parameter53.Name"?: string;
  "Parameter53.Value"?: string;
  "Parameter54.Name"?: string;
  "Parameter54.Value"?: string;
  "Parameter55.Name"?: string;
  "Parameter55.Value"?: string;
  "Parameter56.Name"?: string;
  "Parameter56.Value"?: string;
  "Parameter57.Name"?: string;
  "Parameter57.Value"?: string;
  "Parameter58.Name"?: string;
  "Parameter58.Value"?: string;
  "Parameter59.Name"?: string;
  "Parameter59.Value"?: string;
  "Parameter60.Name"?: string;
  "Parameter60.Value"?: string;
  "Parameter61.Name"?: string;
  "Parameter61.Value"?: string;
  "Parameter62.Name"?: string;
  "Parameter62.Value"?: string;
  "Parameter63.Name"?: string;
  "Parameter63.Value"?: string;
  "Parameter64.Name"?: string;
  "Parameter64.Value"?: string;
  "Parameter65.Name"?: string;
  "Parameter65.Value"?: string;
  "Parameter66.Name"?: string;
  "Parameter66.Value"?: string;
  "Parameter67.Name"?: string;
  "Parameter67.Value"?: string;
  "Parameter68.Name"?: string;
  "Parameter68.Value"?: string;
  "Parameter69.Name"?: string;
  "Parameter69.Value"?: string;
  "Parameter70.Name"?: string;
  "Parameter70.Value"?: string;
  "Parameter71.Name"?: string;
  "Parameter71.Value"?: string;
  "Parameter72.Name"?: string;
  "Parameter72.Value"?: string;
  "Parameter73.Name"?: string;
  "Parameter73.Value"?: string;
  "Parameter74.Name"?: string;
  "Parameter74.Value"?: string;
  "Parameter75.Name"?: string;
  "Parameter75.Value"?: string;
  "Parameter76.Name"?: string;
  "Parameter76.Value"?: string;
  "Parameter77.Name"?: string;
  "Parameter77.Value"?: string;
  "Parameter78.Name"?: string;
  "Parameter78.Value"?: string;
  "Parameter79.Name"?: string;
  "Parameter79.Value"?: string;
  "Parameter80.Name"?: string;
  "Parameter80.Value"?: string;
  "Parameter81.Name"?: string;
  "Parameter81.Value"?: string;
  "Parameter82.Name"?: string;
  "Parameter82.Value"?: string;
  "Parameter83.Name"?: string;
  "Parameter83.Value"?: string;
  "Parameter84.Name"?: string;
  "Parameter84.Value"?: string;
  "Parameter85.Name"?: string;
  "Parameter85.Value"?: string;
  "Parameter86.Name"?: string;
  "Parameter86.Value"?: string;
  "Parameter87.Name"?: string;
  "Parameter87.Value"?: string;
  "Parameter88.Name"?: string;
  "Parameter88.Value"?: string;
  "Parameter89.Name"?: string;
  "Parameter89.Value"?: string;
  "Parameter90.Name"?: string;
  "Parameter90.Value"?: string;
  "Parameter91.Name"?: string;
  "Parameter91.Value"?: string;
  "Parameter92.Name"?: string;
  "Parameter92.Value"?: string;
  "Parameter93.Name"?: string;
  "Parameter93.Value"?: string;
  "Parameter94.Name"?: string;
  "Parameter94.Value"?: string;
  "Parameter95.Name"?: string;
  "Parameter95.Value"?: string;
  "Parameter96.Name"?: string;
  "Parameter96.Value"?: string;
  "Parameter97.Name"?: string;
  "Parameter97.Value"?: string;
  "Parameter98.Name"?: string;
  "Parameter98.Value"?: string;
  "Parameter99.Name"?: string;
  "Parameter99.Value"?: string;
};
  "api_v2010:CreateStream": {
  Url: string;
  Name?: string;
  Track?: TwilioVoiceFullApiSchemaStreamEnumTrack;
  StatusCallback?: string;
  StatusCallbackMethod?: "GET" | "POST";
  "Parameter1.Name"?: string;
  "Parameter1.Value"?: string;
  "Parameter2.Name"?: string;
  "Parameter2.Value"?: string;
  "Parameter3.Name"?: string;
  "Parameter3.Value"?: string;
  "Parameter4.Name"?: string;
  "Parameter4.Value"?: string;
  "Parameter5.Name"?: string;
  "Parameter5.Value"?: string;
  "Parameter6.Name"?: string;
  "Parameter6.Value"?: string;
  "Parameter7.Name"?: string;
  "Parameter7.Value"?: string;
  "Parameter8.Name"?: string;
  "Parameter8.Value"?: string;
  "Parameter9.Name"?: string;
  "Parameter9.Value"?: string;
  "Parameter10.Name"?: string;
  "Parameter10.Value"?: string;
  "Parameter11.Name"?: string;
  "Parameter11.Value"?: string;
  "Parameter12.Name"?: string;
  "Parameter12.Value"?: string;
  "Parameter13.Name"?: string;
  "Parameter13.Value"?: string;
  "Parameter14.Name"?: string;
  "Parameter14.Value"?: string;
  "Parameter15.Name"?: string;
  "Parameter15.Value"?: string;
  "Parameter16.Name"?: string;
  "Parameter16.Value"?: string;
  "Parameter17.Name"?: string;
  "Parameter17.Value"?: string;
  "Parameter18.Name"?: string;
  "Parameter18.Value"?: string;
  "Parameter19.Name"?: string;
  "Parameter19.Value"?: string;
  "Parameter20.Name"?: string;
  "Parameter20.Value"?: string;
  "Parameter21.Name"?: string;
  "Parameter21.Value"?: string;
  "Parameter22.Name"?: string;
  "Parameter22.Value"?: string;
  "Parameter23.Name"?: string;
  "Parameter23.Value"?: string;
  "Parameter24.Name"?: string;
  "Parameter24.Value"?: string;
  "Parameter25.Name"?: string;
  "Parameter25.Value"?: string;
  "Parameter26.Name"?: string;
  "Parameter26.Value"?: string;
  "Parameter27.Name"?: string;
  "Parameter27.Value"?: string;
  "Parameter28.Name"?: string;
  "Parameter28.Value"?: string;
  "Parameter29.Name"?: string;
  "Parameter29.Value"?: string;
  "Parameter30.Name"?: string;
  "Parameter30.Value"?: string;
  "Parameter31.Name"?: string;
  "Parameter31.Value"?: string;
  "Parameter32.Name"?: string;
  "Parameter32.Value"?: string;
  "Parameter33.Name"?: string;
  "Parameter33.Value"?: string;
  "Parameter34.Name"?: string;
  "Parameter34.Value"?: string;
  "Parameter35.Name"?: string;
  "Parameter35.Value"?: string;
  "Parameter36.Name"?: string;
  "Parameter36.Value"?: string;
  "Parameter37.Name"?: string;
  "Parameter37.Value"?: string;
  "Parameter38.Name"?: string;
  "Parameter38.Value"?: string;
  "Parameter39.Name"?: string;
  "Parameter39.Value"?: string;
  "Parameter40.Name"?: string;
  "Parameter40.Value"?: string;
  "Parameter41.Name"?: string;
  "Parameter41.Value"?: string;
  "Parameter42.Name"?: string;
  "Parameter42.Value"?: string;
  "Parameter43.Name"?: string;
  "Parameter43.Value"?: string;
  "Parameter44.Name"?: string;
  "Parameter44.Value"?: string;
  "Parameter45.Name"?: string;
  "Parameter45.Value"?: string;
  "Parameter46.Name"?: string;
  "Parameter46.Value"?: string;
  "Parameter47.Name"?: string;
  "Parameter47.Value"?: string;
  "Parameter48.Name"?: string;
  "Parameter48.Value"?: string;
  "Parameter49.Name"?: string;
  "Parameter49.Value"?: string;
  "Parameter50.Name"?: string;
  "Parameter50.Value"?: string;
  "Parameter51.Name"?: string;
  "Parameter51.Value"?: string;
  "Parameter52.Name"?: string;
  "Parameter52.Value"?: string;
  "Parameter53.Name"?: string;
  "Parameter53.Value"?: string;
  "Parameter54.Name"?: string;
  "Parameter54.Value"?: string;
  "Parameter55.Name"?: string;
  "Parameter55.Value"?: string;
  "Parameter56.Name"?: string;
  "Parameter56.Value"?: string;
  "Parameter57.Name"?: string;
  "Parameter57.Value"?: string;
  "Parameter58.Name"?: string;
  "Parameter58.Value"?: string;
  "Parameter59.Name"?: string;
  "Parameter59.Value"?: string;
  "Parameter60.Name"?: string;
  "Parameter60.Value"?: string;
  "Parameter61.Name"?: string;
  "Parameter61.Value"?: string;
  "Parameter62.Name"?: string;
  "Parameter62.Value"?: string;
  "Parameter63.Name"?: string;
  "Parameter63.Value"?: string;
  "Parameter64.Name"?: string;
  "Parameter64.Value"?: string;
  "Parameter65.Name"?: string;
  "Parameter65.Value"?: string;
  "Parameter66.Name"?: string;
  "Parameter66.Value"?: string;
  "Parameter67.Name"?: string;
  "Parameter67.Value"?: string;
  "Parameter68.Name"?: string;
  "Parameter68.Value"?: string;
  "Parameter69.Name"?: string;
  "Parameter69.Value"?: string;
  "Parameter70.Name"?: string;
  "Parameter70.Value"?: string;
  "Parameter71.Name"?: string;
  "Parameter71.Value"?: string;
  "Parameter72.Name"?: string;
  "Parameter72.Value"?: string;
  "Parameter73.Name"?: string;
  "Parameter73.Value"?: string;
  "Parameter74.Name"?: string;
  "Parameter74.Value"?: string;
  "Parameter75.Name"?: string;
  "Parameter75.Value"?: string;
  "Parameter76.Name"?: string;
  "Parameter76.Value"?: string;
  "Parameter77.Name"?: string;
  "Parameter77.Value"?: string;
  "Parameter78.Name"?: string;
  "Parameter78.Value"?: string;
  "Parameter79.Name"?: string;
  "Parameter79.Value"?: string;
  "Parameter80.Name"?: string;
  "Parameter80.Value"?: string;
  "Parameter81.Name"?: string;
  "Parameter81.Value"?: string;
  "Parameter82.Name"?: string;
  "Parameter82.Value"?: string;
  "Parameter83.Name"?: string;
  "Parameter83.Value"?: string;
  "Parameter84.Name"?: string;
  "Parameter84.Value"?: string;
  "Parameter85.Name"?: string;
  "Parameter85.Value"?: string;
  "Parameter86.Name"?: string;
  "Parameter86.Value"?: string;
  "Parameter87.Name"?: string;
  "Parameter87.Value"?: string;
  "Parameter88.Name"?: string;
  "Parameter88.Value"?: string;
  "Parameter89.Name"?: string;
  "Parameter89.Value"?: string;
  "Parameter90.Name"?: string;
  "Parameter90.Value"?: string;
  "Parameter91.Name"?: string;
  "Parameter91.Value"?: string;
  "Parameter92.Name"?: string;
  "Parameter92.Value"?: string;
  "Parameter93.Name"?: string;
  "Parameter93.Value"?: string;
  "Parameter94.Name"?: string;
  "Parameter94.Value"?: string;
  "Parameter95.Name"?: string;
  "Parameter95.Value"?: string;
  "Parameter96.Name"?: string;
  "Parameter96.Value"?: string;
  "Parameter97.Name"?: string;
  "Parameter97.Value"?: string;
  "Parameter98.Name"?: string;
  "Parameter98.Value"?: string;
  "Parameter99.Name"?: string;
  "Parameter99.Value"?: string;
};
  "api_v2010:CreateUserDefinedMessage": {
  Content: string;
  IdempotencyKey?: string;
};
  "api_v2010:CreateUserDefinedMessageSubscription": {
  Callback: string;
  IdempotencyKey?: string;
  Method?: "GET" | "POST";
};
  "api_v2010:DeleteApplication": never;
  "api_v2010:DeleteCall": never;
  "api_v2010:DeleteCallRecording": never;
  "api_v2010:DeleteConferenceRecording": never;
  "api_v2010:DeleteOutgoingCallerId": never;
  "api_v2010:DeleteParticipant": never;
  "api_v2010:DeleteQueue": never;
  "api_v2010:DeleteRecording": never;
  "api_v2010:DeleteRecordingTranscription": never;
  "api_v2010:DeleteSipCredential": never;
  "api_v2010:DeleteSipCredentialList": never;
  "api_v2010:DeleteSipCredentialListMapping": never;
  "api_v2010:DeleteSipDomain": never;
  "api_v2010:DeleteSipIpAccessControlList": never;
  "api_v2010:DeleteSipIpAccessControlListMapping": never;
  "api_v2010:DeleteSipIpAddress": never;
  "api_v2010:DeleteTranscription": never;
  "api_v2010:DeleteUserDefinedMessageSubscription": never;
  "api_v2010:FetchApplication": never;
  "api_v2010:FetchCall": never;
  "api_v2010:FetchCallNotification": never;
  "api_v2010:FetchCallRecording": never;
  "api_v2010:FetchConference": never;
  "api_v2010:FetchConferenceRecording": never;
  "api_v2010:FetchMember": never;
  "api_v2010:FetchOutgoingCallerId": never;
  "api_v2010:FetchParticipant": never;
  "api_v2010:FetchQueue": never;
  "api_v2010:FetchRecording": never;
  "api_v2010:FetchRecordingTranscription": never;
  "api_v2010:FetchSipCredential": never;
  "api_v2010:FetchSipCredentialList": never;
  "api_v2010:FetchSipCredentialListMapping": never;
  "api_v2010:FetchSipDomain": never;
  "api_v2010:FetchSipIpAccessControlList": never;
  "api_v2010:FetchSipIpAccessControlListMapping": never;
  "api_v2010:FetchSipIpAddress": never;
  "api_v2010:FetchTranscription": never;
  "api_v2010:ListApplication": never;
  "api_v2010:ListCall": never;
  "api_v2010:ListCallNotification": never;
  "api_v2010:ListCallRecording": never;
  "api_v2010:ListConference": never;
  "api_v2010:ListConferenceRecording": never;
  "api_v2010:ListMember": never;
  "api_v2010:ListOutgoingCallerId": never;
  "api_v2010:ListParticipant": never;
  "api_v2010:ListQueue": never;
  "api_v2010:ListRecording": never;
  "api_v2010:ListRecordingTranscription": never;
  "api_v2010:ListSipCredential": never;
  "api_v2010:ListSipCredentialList": never;
  "api_v2010:ListSipCredentialListMapping": never;
  "api_v2010:ListSipDomain": never;
  "api_v2010:ListSipIpAccessControlList": never;
  "api_v2010:ListSipIpAccessControlListMapping": never;
  "api_v2010:ListSipIpAddress": never;
  "api_v2010:ListTranscription": never;
  "api_v2010:UpdateApplication": {
  FriendlyName?: string;
  ApiVersion?: string;
  VoiceUrl?: string;
  VoiceMethod?: "GET" | "POST";
  VoiceFallbackUrl?: string;
  VoiceFallbackMethod?: "GET" | "POST";
  StatusCallback?: string;
  StatusCallbackMethod?: "GET" | "POST";
  VoiceCallerIdLookup?: boolean;
  SmsUrl?: string;
  SmsMethod?: "GET" | "POST";
  SmsFallbackUrl?: string;
  SmsFallbackMethod?: "GET" | "POST";
  SmsStatusCallback?: string;
  MessageStatusCallback?: string;
  PublicApplicationConnectEnabled?: boolean;
};
  "api_v2010:UpdateCall": {
  Url?: string;
  Method?: "GET" | "POST";
  Status?: TwilioVoiceFullApiSchemaCallEnumUpdateStatus;
  FallbackUrl?: string;
  FallbackMethod?: "GET" | "POST";
  StatusCallback?: string;
  StatusCallbackMethod?: "GET" | "POST";
  Twiml?: string;
  TimeLimit?: number;
};
  "api_v2010:UpdateCallRecording": {
  Status: TwilioVoiceFullApiSchemaCallRecordingEnumStatus;
  PauseBehavior?: string;
};
  "api_v2010:UpdateConference": {
  Status?: TwilioVoiceFullApiSchemaConferenceEnumUpdateStatus;
  AnnounceUrl?: string;
  AnnounceMethod?: "GET" | "POST";
};
  "api_v2010:UpdateConferenceRecording": {
  Status: TwilioVoiceFullApiSchemaConferenceRecordingEnumStatus;
  PauseBehavior?: string;
};
  "api_v2010:UpdateMember": {
  Url: string;
  Method?: "GET" | "POST";
};
  "api_v2010:UpdateOutgoingCallerId": {
  FriendlyName?: string;
};
  "api_v2010:UpdateParticipant": {
  Muted?: boolean;
  Hold?: boolean;
  HoldUrl?: string;
  HoldMethod?: "GET" | "POST";
  AnnounceUrl?: string;
  AnnounceMethod?: "GET" | "POST";
  WaitUrl?: string;
  WaitMethod?: "GET" | "POST";
  BeepOnExit?: boolean;
  EndConferenceOnExit?: boolean;
  Coaching?: boolean;
  CallSidToCoach?: string;
};
  "api_v2010:UpdatePayments": {
  IdempotencyKey: string;
  StatusCallback: string;
  Capture?: TwilioVoiceFullApiSchemaPaymentsEnumCapture;
  Status?: TwilioVoiceFullApiSchemaPaymentsEnumStatus;
};
  "api_v2010:UpdateQueue": {
  FriendlyName?: string;
  MaxSize?: number;
};
  "api_v2010:UpdateRealtimeTranscription": {
  Status: TwilioVoiceFullApiSchemaRealtimeTranscriptionEnumUpdateStatus;
};
  "api_v2010:UpdateSipCredential": {
  Password?: string;
};
  "api_v2010:UpdateSipCredentialList": {
  FriendlyName: string;
};
  "api_v2010:UpdateSipDomain": {
  FriendlyName?: string;
  VoiceFallbackMethod?: "GET" | "POST";
  VoiceFallbackUrl?: string;
  VoiceMethod?: "GET" | "POST";
  VoiceStatusCallbackMethod?: "GET" | "POST";
  VoiceStatusCallbackUrl?: string;
  VoiceUrl?: string;
  SipRegistration?: boolean;
  DomainName?: string;
  EmergencyCallingEnabled?: boolean;
  Secure?: boolean;
  ByocTrunkSid?: string;
  EmergencyCallerSid?: string;
};
  "api_v2010:UpdateSipIpAccessControlList": {
  FriendlyName: string;
};
  "api_v2010:UpdateSipIpAddress": {
  IpAddress?: string;
  FriendlyName?: string;
  CidrPrefixLength?: number;
};
  "api_v2010:UpdateSiprec": {
  Status: TwilioVoiceFullApiSchemaSiprecEnumUpdateStatus;
};
  "api_v2010:UpdateStream": {
  Status: TwilioVoiceFullApiSchemaStreamEnumUpdateStatus;
};
  "insights_v1:FetchAccountSettings": never;
  "insights_v1:FetchAnnotation": never;
  "insights_v1:FetchCall": never;
  "insights_v1:FetchConference": never;
  "insights_v1:FetchConferenceParticipant": never;
  "insights_v1:FetchSummary": never;
  "insights_v1:FetchVideoParticipantSummary": never;
  "insights_v1:FetchVideoRoomSummary": never;
  "insights_v1:ListCallSummaries": never;
  "insights_v1:ListConference": never;
  "insights_v1:ListConferenceParticipant": never;
  "insights_v1:ListEvent": never;
  "insights_v1:ListMetric": never;
  "insights_v1:ListVideoParticipantSummary": never;
  "insights_v1:ListVideoRoomSummary": never;
  "insights_v1:UpdateAccountSettings": {
  AdvancedFeatures?: boolean;
  VoiceTrace?: boolean;
  SubaccountSid?: string;
};
  "insights_v1:UpdateAnnotation": {
  AnsweredBy?: TwilioVoiceFullApiSchemaAnnotationEnumAnsweredBy;
  ConnectivityIssue?: TwilioVoiceFullApiSchemaAnnotationEnumConnectivityIssue;
  QualityIssues?: string;
  Spam?: boolean;
  CallScore?: number | null;
  Comment?: string;
  Incident?: string;
};
  "insights_v2:CreateAccountReport": TwilioVoiceFullApiSchemaInsightsV2CreateAccountReportRequest;
  "insights_v2:CreateInboundPhoneNumbersReport": TwilioVoiceFullApiSchemaInsightsV2CreatePhoneNumbersReportRequest;
  "insights_v2:CreateOutboundPhoneNumbersReport": TwilioVoiceFullApiSchemaInsightsV2CreatePhoneNumbersReportRequest;
  "insights_v2:FetchAccountReport": never;
  "insights_v2:ListInboundPhoneNumbersReport": never;
  "insights_v2:ListOutboundPhoneNumbersReport": never;
  "insights_v3:CreateQueryResults": TwilioVoiceFullApiSchemaInsightsQueryRequest;
  "insights_v3:FetchMetadata": never;
  "insights_v3:FetchQueryResults": never;
  "trunking_v1:CreateCredentialList": {
  CredentialListSid: string;
};
  "trunking_v1:CreateIpAccessControlList": {
  IpAccessControlListSid: string;
};
  "trunking_v1:CreateOriginationUrl": {
  Weight: number;
  Priority: number;
  Enabled: boolean;
  FriendlyName: string;
  SipUrl: string;
};
  "trunking_v1:CreatePhoneNumber": {
  PhoneNumberSid: string;
};
  "trunking_v1:CreateTrunk": {
  FriendlyName?: string;
  DomainName?: string;
  DisasterRecoveryUrl?: string;
  DisasterRecoveryMethod?: "GET" | "POST";
  TransferMode?: TwilioVoiceFullApiSchemaTrunkEnumTransferSetting;
  Secure?: boolean;
  CnamLookupEnabled?: boolean;
  TransferCallerId?: TwilioVoiceFullApiSchemaTrunkEnumTransferCallerId;
};
  "trunking_v1:DeleteCredentialList": never;
  "trunking_v1:DeleteIpAccessControlList": never;
  "trunking_v1:DeleteOriginationUrl": never;
  "trunking_v1:DeletePhoneNumber": never;
  "trunking_v1:DeleteTrunk": never;
  "trunking_v1:FetchCredentialList": never;
  "trunking_v1:FetchIpAccessControlList": never;
  "trunking_v1:FetchOriginationUrl": never;
  "trunking_v1:FetchPhoneNumber": never;
  "trunking_v1:FetchRecording": never;
  "trunking_v1:FetchTrunk": never;
  "trunking_v1:ListCredentialList": never;
  "trunking_v1:ListIpAccessControlList": never;
  "trunking_v1:ListOriginationUrl": never;
  "trunking_v1:ListPhoneNumber": never;
  "trunking_v1:ListTrunk": never;
  "trunking_v1:UpdateOriginationUrl": {
  Weight?: number;
  Priority?: number;
  Enabled?: boolean;
  FriendlyName?: string;
  SipUrl?: string;
};
  "trunking_v1:UpdateRecording": {
  Mode?: TwilioVoiceFullApiSchemaRecordingEnumRecordingMode;
  Trim?: TwilioVoiceFullApiSchemaRecordingEnumRecordingTrim;
};
  "trunking_v1:UpdateTrunk": {
  FriendlyName?: string;
  DomainName?: string;
  DisasterRecoveryUrl?: string;
  DisasterRecoveryMethod?: "GET" | "POST";
  TransferMode?: TwilioVoiceFullApiSchemaTrunkEnumTransferSetting;
  Secure?: boolean;
  CnamLookupEnabled?: boolean;
  TransferCallerId?: TwilioVoiceFullApiSchemaTrunkEnumTransferCallerId;
};
  "voice_v1:CreateByocTrunk": {
  FriendlyName?: string;
  VoiceUrl?: string;
  VoiceMethod?: "GET" | "POST";
  VoiceFallbackUrl?: string;
  VoiceFallbackMethod?: "GET" | "POST";
  StatusCallbackUrl?: string;
  StatusCallbackMethod?: "GET" | "POST";
  CnamLookupEnabled?: boolean;
  ConnectionPolicySid?: string;
  FromDomainSid?: string;
};
  "voice_v1:CreateConnectionPolicy": {
  FriendlyName?: string;
};
  "voice_v1:CreateConnectionPolicyTarget": {
  Target: string;
  FriendlyName?: string;
  Priority?: number;
  Weight?: number;
  Enabled?: boolean;
};
  "voice_v1:CreateDialingPermissionsCountryBulkUpdate": {
  UpdateRequest: string;
};
  "voice_v1:CreateIpRecord": {
  IpAddress: string;
  FriendlyName?: string;
  CidrPrefixLength?: number;
};
  "voice_v1:CreateSourceIpMapping": {
  IpRecordSid: string;
  SipDomainSid: string;
};
  "voice_v1:DeleteArchivedCall": never;
  "voice_v1:DeleteByocTrunk": never;
  "voice_v1:DeleteConnectionPolicy": never;
  "voice_v1:DeleteConnectionPolicyTarget": never;
  "voice_v1:DeleteIpRecord": never;
  "voice_v1:DeleteSourceIpMapping": never;
  "voice_v1:FetchByocTrunk": never;
  "voice_v1:FetchConnectionPolicy": never;
  "voice_v1:FetchConnectionPolicyTarget": never;
  "voice_v1:FetchDialingPermissionsCountry": never;
  "voice_v1:FetchDialingPermissionsSettings": never;
  "voice_v1:FetchIpRecord": never;
  "voice_v1:FetchSourceIpMapping": never;
  "voice_v1:ListByocTrunk": never;
  "voice_v1:ListConnectionPolicy": never;
  "voice_v1:ListConnectionPolicyTarget": never;
  "voice_v1:ListDialingPermissionsCountry": never;
  "voice_v1:ListDialingPermissionsHrsPrefixes": never;
  "voice_v1:ListIpRecord": never;
  "voice_v1:ListSourceIpMapping": never;
  "voice_v1:UpdateByocTrunk": {
  FriendlyName?: string;
  VoiceUrl?: string;
  VoiceMethod?: "GET" | "POST";
  VoiceFallbackUrl?: string;
  VoiceFallbackMethod?: "GET" | "POST";
  StatusCallbackUrl?: string;
  StatusCallbackMethod?: "GET" | "POST";
  CnamLookupEnabled?: boolean;
  ConnectionPolicySid?: string;
  FromDomainSid?: string;
};
  "voice_v1:UpdateConnectionPolicy": {
  FriendlyName?: string;
};
  "voice_v1:UpdateConnectionPolicyTarget": {
  FriendlyName?: string;
  Target?: string;
  Priority?: number;
  Weight?: number;
  Enabled?: boolean;
};
  "voice_v1:UpdateDialingPermissionsSettings": {
  DialingPermissionsInheritance?: boolean;
};
  "voice_v1:UpdateIpRecord": {
  FriendlyName?: string;
};
  "voice_v1:UpdateSourceIpMapping": {
  SipDomainSid: string;
};
  "voice_v3:CreateV3Transcriptions": (TwilioVoiceFullApiSchemaVoiceV3TranscriptionCreateRequestWithSourceId | TwilioVoiceFullApiSchemaVoiceV3TranscriptionCreateRequestWithMediaUrl);
  "voice_v3:FetchTranscription": never;
}

export interface TwilioVoiceFullApiOperationRequestBodyRequiredMap {
  "api_v2010:CreateApplication": false;
  "api_v2010:CreateCall": false;
  "api_v2010:CreateCallRecording": false;
  "api_v2010:CreateParticipant": false;
  "api_v2010:CreatePayments": false;
  "api_v2010:CreateQueue": false;
  "api_v2010:CreateRealtimeTranscription": false;
  "api_v2010:CreateSipCredential": false;
  "api_v2010:CreateSipCredentialList": false;
  "api_v2010:CreateSipCredentialListMapping": false;
  "api_v2010:CreateSipDomain": false;
  "api_v2010:CreateSipIpAccessControlList": false;
  "api_v2010:CreateSipIpAccessControlListMapping": false;
  "api_v2010:CreateSipIpAddress": false;
  "api_v2010:CreateSiprec": false;
  "api_v2010:CreateStream": false;
  "api_v2010:CreateUserDefinedMessage": false;
  "api_v2010:CreateUserDefinedMessageSubscription": false;
  "api_v2010:DeleteApplication": false;
  "api_v2010:DeleteCall": false;
  "api_v2010:DeleteCallRecording": false;
  "api_v2010:DeleteConferenceRecording": false;
  "api_v2010:DeleteOutgoingCallerId": false;
  "api_v2010:DeleteParticipant": false;
  "api_v2010:DeleteQueue": false;
  "api_v2010:DeleteRecording": false;
  "api_v2010:DeleteRecordingTranscription": false;
  "api_v2010:DeleteSipCredential": false;
  "api_v2010:DeleteSipCredentialList": false;
  "api_v2010:DeleteSipCredentialListMapping": false;
  "api_v2010:DeleteSipDomain": false;
  "api_v2010:DeleteSipIpAccessControlList": false;
  "api_v2010:DeleteSipIpAccessControlListMapping": false;
  "api_v2010:DeleteSipIpAddress": false;
  "api_v2010:DeleteTranscription": false;
  "api_v2010:DeleteUserDefinedMessageSubscription": false;
  "api_v2010:FetchApplication": false;
  "api_v2010:FetchCall": false;
  "api_v2010:FetchCallNotification": false;
  "api_v2010:FetchCallRecording": false;
  "api_v2010:FetchConference": false;
  "api_v2010:FetchConferenceRecording": false;
  "api_v2010:FetchMember": false;
  "api_v2010:FetchOutgoingCallerId": false;
  "api_v2010:FetchParticipant": false;
  "api_v2010:FetchQueue": false;
  "api_v2010:FetchRecording": false;
  "api_v2010:FetchRecordingTranscription": false;
  "api_v2010:FetchSipCredential": false;
  "api_v2010:FetchSipCredentialList": false;
  "api_v2010:FetchSipCredentialListMapping": false;
  "api_v2010:FetchSipDomain": false;
  "api_v2010:FetchSipIpAccessControlList": false;
  "api_v2010:FetchSipIpAccessControlListMapping": false;
  "api_v2010:FetchSipIpAddress": false;
  "api_v2010:FetchTranscription": false;
  "api_v2010:ListApplication": false;
  "api_v2010:ListCall": false;
  "api_v2010:ListCallNotification": false;
  "api_v2010:ListCallRecording": false;
  "api_v2010:ListConference": false;
  "api_v2010:ListConferenceRecording": false;
  "api_v2010:ListMember": false;
  "api_v2010:ListOutgoingCallerId": false;
  "api_v2010:ListParticipant": false;
  "api_v2010:ListQueue": false;
  "api_v2010:ListRecording": false;
  "api_v2010:ListRecordingTranscription": false;
  "api_v2010:ListSipCredential": false;
  "api_v2010:ListSipCredentialList": false;
  "api_v2010:ListSipCredentialListMapping": false;
  "api_v2010:ListSipDomain": false;
  "api_v2010:ListSipIpAccessControlList": false;
  "api_v2010:ListSipIpAccessControlListMapping": false;
  "api_v2010:ListSipIpAddress": false;
  "api_v2010:ListTranscription": false;
  "api_v2010:UpdateApplication": false;
  "api_v2010:UpdateCall": false;
  "api_v2010:UpdateCallRecording": false;
  "api_v2010:UpdateConference": false;
  "api_v2010:UpdateConferenceRecording": false;
  "api_v2010:UpdateMember": false;
  "api_v2010:UpdateOutgoingCallerId": false;
  "api_v2010:UpdateParticipant": false;
  "api_v2010:UpdatePayments": false;
  "api_v2010:UpdateQueue": false;
  "api_v2010:UpdateRealtimeTranscription": false;
  "api_v2010:UpdateSipCredential": false;
  "api_v2010:UpdateSipCredentialList": false;
  "api_v2010:UpdateSipDomain": false;
  "api_v2010:UpdateSipIpAccessControlList": false;
  "api_v2010:UpdateSipIpAddress": false;
  "api_v2010:UpdateSiprec": false;
  "api_v2010:UpdateStream": false;
  "insights_v1:FetchAccountSettings": false;
  "insights_v1:FetchAnnotation": false;
  "insights_v1:FetchCall": false;
  "insights_v1:FetchConference": false;
  "insights_v1:FetchConferenceParticipant": false;
  "insights_v1:FetchSummary": false;
  "insights_v1:FetchVideoParticipantSummary": false;
  "insights_v1:FetchVideoRoomSummary": false;
  "insights_v1:ListCallSummaries": false;
  "insights_v1:ListConference": false;
  "insights_v1:ListConferenceParticipant": false;
  "insights_v1:ListEvent": false;
  "insights_v1:ListMetric": false;
  "insights_v1:ListVideoParticipantSummary": false;
  "insights_v1:ListVideoRoomSummary": false;
  "insights_v1:UpdateAccountSettings": false;
  "insights_v1:UpdateAnnotation": false;
  "insights_v2:CreateAccountReport": false;
  "insights_v2:CreateInboundPhoneNumbersReport": false;
  "insights_v2:CreateOutboundPhoneNumbersReport": false;
  "insights_v2:FetchAccountReport": false;
  "insights_v2:ListInboundPhoneNumbersReport": false;
  "insights_v2:ListOutboundPhoneNumbersReport": false;
  "insights_v3:CreateQueryResults": true;
  "insights_v3:FetchMetadata": false;
  "insights_v3:FetchQueryResults": false;
  "trunking_v1:CreateCredentialList": false;
  "trunking_v1:CreateIpAccessControlList": false;
  "trunking_v1:CreateOriginationUrl": false;
  "trunking_v1:CreatePhoneNumber": false;
  "trunking_v1:CreateTrunk": false;
  "trunking_v1:DeleteCredentialList": false;
  "trunking_v1:DeleteIpAccessControlList": false;
  "trunking_v1:DeleteOriginationUrl": false;
  "trunking_v1:DeletePhoneNumber": false;
  "trunking_v1:DeleteTrunk": false;
  "trunking_v1:FetchCredentialList": false;
  "trunking_v1:FetchIpAccessControlList": false;
  "trunking_v1:FetchOriginationUrl": false;
  "trunking_v1:FetchPhoneNumber": false;
  "trunking_v1:FetchRecording": false;
  "trunking_v1:FetchTrunk": false;
  "trunking_v1:ListCredentialList": false;
  "trunking_v1:ListIpAccessControlList": false;
  "trunking_v1:ListOriginationUrl": false;
  "trunking_v1:ListPhoneNumber": false;
  "trunking_v1:ListTrunk": false;
  "trunking_v1:UpdateOriginationUrl": false;
  "trunking_v1:UpdateRecording": false;
  "trunking_v1:UpdateTrunk": false;
  "voice_v1:CreateByocTrunk": false;
  "voice_v1:CreateConnectionPolicy": false;
  "voice_v1:CreateConnectionPolicyTarget": false;
  "voice_v1:CreateDialingPermissionsCountryBulkUpdate": false;
  "voice_v1:CreateIpRecord": false;
  "voice_v1:CreateSourceIpMapping": false;
  "voice_v1:DeleteArchivedCall": false;
  "voice_v1:DeleteByocTrunk": false;
  "voice_v1:DeleteConnectionPolicy": false;
  "voice_v1:DeleteConnectionPolicyTarget": false;
  "voice_v1:DeleteIpRecord": false;
  "voice_v1:DeleteSourceIpMapping": false;
  "voice_v1:FetchByocTrunk": false;
  "voice_v1:FetchConnectionPolicy": false;
  "voice_v1:FetchConnectionPolicyTarget": false;
  "voice_v1:FetchDialingPermissionsCountry": false;
  "voice_v1:FetchDialingPermissionsSettings": false;
  "voice_v1:FetchIpRecord": false;
  "voice_v1:FetchSourceIpMapping": false;
  "voice_v1:ListByocTrunk": false;
  "voice_v1:ListConnectionPolicy": false;
  "voice_v1:ListConnectionPolicyTarget": false;
  "voice_v1:ListDialingPermissionsCountry": false;
  "voice_v1:ListDialingPermissionsHrsPrefixes": false;
  "voice_v1:ListIpRecord": false;
  "voice_v1:ListSourceIpMapping": false;
  "voice_v1:UpdateByocTrunk": false;
  "voice_v1:UpdateConnectionPolicy": false;
  "voice_v1:UpdateConnectionPolicyTarget": false;
  "voice_v1:UpdateDialingPermissionsSettings": false;
  "voice_v1:UpdateIpRecord": false;
  "voice_v1:UpdateSourceIpMapping": false;
  "voice_v3:CreateV3Transcriptions": true;
  "voice_v3:FetchTranscription": false;
}

export interface TwilioVoiceFullApiOperationResponseMap {
  "api_v2010:CreateApplication": TwilioVoiceFullApiSchemaApiV2010AccountApplication;
  "api_v2010:CreateCall": TwilioVoiceFullApiSchemaApiV2010AccountCall;
  "api_v2010:CreateCallRecording": TwilioVoiceFullApiSchemaApiV2010AccountCallCallRecording;
  "api_v2010:CreateParticipant": TwilioVoiceFullApiSchemaApiV2010AccountConferenceParticipant;
  "api_v2010:CreatePayments": TwilioVoiceFullApiSchemaApiV2010AccountCallPayments;
  "api_v2010:CreateQueue": TwilioVoiceFullApiSchemaApiV2010AccountQueue;
  "api_v2010:CreateRealtimeTranscription": TwilioVoiceFullApiSchemaApiV2010AccountCallRealtimeTranscription;
  "api_v2010:CreateSipCredential": TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialListSipCredential;
  "api_v2010:CreateSipCredentialList": TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialList;
  "api_v2010:CreateSipCredentialListMapping": TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomainSipCredentialListMapping;
  "api_v2010:CreateSipDomain": TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomain;
  "api_v2010:CreateSipIpAccessControlList": TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlList;
  "api_v2010:CreateSipIpAccessControlListMapping": TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomainSipIpAccessControlListMapping;
  "api_v2010:CreateSipIpAddress": TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlListSipIpAddress;
  "api_v2010:CreateSiprec": TwilioVoiceFullApiSchemaApiV2010AccountCallSiprec;
  "api_v2010:CreateStream": TwilioVoiceFullApiSchemaApiV2010AccountCallStream;
  "api_v2010:CreateUserDefinedMessage": TwilioVoiceFullApiSchemaApiV2010AccountCallUserDefinedMessage;
  "api_v2010:CreateUserDefinedMessageSubscription": TwilioVoiceFullApiSchemaApiV2010AccountCallUserDefinedMessageSubscription;
  "api_v2010:DeleteApplication": void;
  "api_v2010:DeleteCall": void;
  "api_v2010:DeleteCallRecording": void;
  "api_v2010:DeleteConferenceRecording": void;
  "api_v2010:DeleteOutgoingCallerId": void;
  "api_v2010:DeleteParticipant": void;
  "api_v2010:DeleteQueue": void;
  "api_v2010:DeleteRecording": void;
  "api_v2010:DeleteRecordingTranscription": void;
  "api_v2010:DeleteSipCredential": void;
  "api_v2010:DeleteSipCredentialList": void;
  "api_v2010:DeleteSipCredentialListMapping": void;
  "api_v2010:DeleteSipDomain": void;
  "api_v2010:DeleteSipIpAccessControlList": void;
  "api_v2010:DeleteSipIpAccessControlListMapping": void;
  "api_v2010:DeleteSipIpAddress": void;
  "api_v2010:DeleteTranscription": void;
  "api_v2010:DeleteUserDefinedMessageSubscription": void;
  "api_v2010:FetchApplication": TwilioVoiceFullApiSchemaApiV2010AccountApplication;
  "api_v2010:FetchCall": TwilioVoiceFullApiSchemaApiV2010AccountCall;
  "api_v2010:FetchCallNotification": TwilioVoiceFullApiSchemaApiV2010AccountCallCallNotificationInstance;
  "api_v2010:FetchCallRecording": TwilioVoiceFullApiSchemaApiV2010AccountCallCallRecording;
  "api_v2010:FetchConference": TwilioVoiceFullApiSchemaApiV2010AccountConference;
  "api_v2010:FetchConferenceRecording": TwilioVoiceFullApiSchemaApiV2010AccountConferenceConferenceRecording;
  "api_v2010:FetchMember": TwilioVoiceFullApiSchemaApiV2010AccountQueueMember;
  "api_v2010:FetchOutgoingCallerId": TwilioVoiceFullApiSchemaApiV2010AccountOutgoingCallerId;
  "api_v2010:FetchParticipant": TwilioVoiceFullApiSchemaApiV2010AccountConferenceParticipant;
  "api_v2010:FetchQueue": TwilioVoiceFullApiSchemaApiV2010AccountQueue;
  "api_v2010:FetchRecording": TwilioVoiceFullApiSchemaApiV2010AccountRecording;
  "api_v2010:FetchRecordingTranscription": TwilioVoiceFullApiSchemaApiV2010AccountRecordingRecordingTranscription;
  "api_v2010:FetchSipCredential": TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialListSipCredential;
  "api_v2010:FetchSipCredentialList": TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialList;
  "api_v2010:FetchSipCredentialListMapping": TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomainSipCredentialListMapping;
  "api_v2010:FetchSipDomain": TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomain;
  "api_v2010:FetchSipIpAccessControlList": TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlList;
  "api_v2010:FetchSipIpAccessControlListMapping": TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomainSipIpAccessControlListMapping;
  "api_v2010:FetchSipIpAddress": TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlListSipIpAddress;
  "api_v2010:FetchTranscription": TwilioVoiceFullApiSchemaApiV2010AccountTranscription;
  "api_v2010:ListApplication": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  applications?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountApplication>;
};
  "api_v2010:ListCall": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  calls?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountCall>;
};
  "api_v2010:ListCallNotification": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  notifications?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountCallCallNotification>;
};
  "api_v2010:ListCallRecording": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  recordings?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountCallCallRecording>;
};
  "api_v2010:ListConference": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  conferences?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountConference>;
};
  "api_v2010:ListConferenceRecording": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  recordings?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountConferenceConferenceRecording>;
};
  "api_v2010:ListMember": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  queue_members?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountQueueMember>;
};
  "api_v2010:ListOutgoingCallerId": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  outgoing_caller_ids?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountOutgoingCallerId>;
};
  "api_v2010:ListParticipant": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  participants?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountConferenceParticipant>;
};
  "api_v2010:ListQueue": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  queues?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountQueue>;
};
  "api_v2010:ListRecording": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  recordings?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountRecording>;
};
  "api_v2010:ListRecordingTranscription": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  transcriptions?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountRecordingRecordingTranscription>;
};
  "api_v2010:ListSipCredential": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  credentials?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialListSipCredential>;
};
  "api_v2010:ListSipCredentialList": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  credential_lists?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialList>;
};
  "api_v2010:ListSipCredentialListMapping": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  credential_list_mappings?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomainSipCredentialListMapping>;
};
  "api_v2010:ListSipDomain": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  domains?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomain>;
};
  "api_v2010:ListSipIpAccessControlList": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  ip_access_control_lists?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlList>;
};
  "api_v2010:ListSipIpAccessControlListMapping": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  ip_access_control_list_mappings?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomainSipIpAccessControlListMapping>;
};
  "api_v2010:ListSipIpAddress": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  ip_addresses?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlListSipIpAddress>;
};
  "api_v2010:ListTranscription": {
  end?: number;
  first_page_uri?: string;
  next_page_uri?: string | null;
  page?: number;
  page_size?: number;
  previous_page_uri?: string | null;
  start?: number;
  uri?: string;
  transcriptions?: ReadonlyArray<TwilioVoiceFullApiSchemaApiV2010AccountTranscription>;
};
  "api_v2010:UpdateApplication": TwilioVoiceFullApiSchemaApiV2010AccountApplication;
  "api_v2010:UpdateCall": TwilioVoiceFullApiSchemaApiV2010AccountCall;
  "api_v2010:UpdateCallRecording": TwilioVoiceFullApiSchemaApiV2010AccountCallCallRecording;
  "api_v2010:UpdateConference": TwilioVoiceFullApiSchemaApiV2010AccountConference;
  "api_v2010:UpdateConferenceRecording": TwilioVoiceFullApiSchemaApiV2010AccountConferenceConferenceRecording;
  "api_v2010:UpdateMember": TwilioVoiceFullApiSchemaApiV2010AccountQueueMember;
  "api_v2010:UpdateOutgoingCallerId": TwilioVoiceFullApiSchemaApiV2010AccountOutgoingCallerId;
  "api_v2010:UpdateParticipant": TwilioVoiceFullApiSchemaApiV2010AccountConferenceParticipant;
  "api_v2010:UpdatePayments": TwilioVoiceFullApiSchemaApiV2010AccountCallPayments;
  "api_v2010:UpdateQueue": TwilioVoiceFullApiSchemaApiV2010AccountQueue;
  "api_v2010:UpdateRealtimeTranscription": TwilioVoiceFullApiSchemaApiV2010AccountCallRealtimeTranscription;
  "api_v2010:UpdateSipCredential": TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialListSipCredential;
  "api_v2010:UpdateSipCredentialList": TwilioVoiceFullApiSchemaApiV2010AccountSipSipCredentialList;
  "api_v2010:UpdateSipDomain": TwilioVoiceFullApiSchemaApiV2010AccountSipSipDomain;
  "api_v2010:UpdateSipIpAccessControlList": TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlList;
  "api_v2010:UpdateSipIpAddress": TwilioVoiceFullApiSchemaApiV2010AccountSipSipIpAccessControlListSipIpAddress;
  "api_v2010:UpdateSiprec": TwilioVoiceFullApiSchemaApiV2010AccountCallSiprec;
  "api_v2010:UpdateStream": TwilioVoiceFullApiSchemaApiV2010AccountCallStream;
  "insights_v1:FetchAccountSettings": TwilioVoiceFullApiSchemaInsightsV1AccountSettings;
  "insights_v1:FetchAnnotation": TwilioVoiceFullApiSchemaInsightsV1CallAnnotation;
  "insights_v1:FetchCall": TwilioVoiceFullApiSchemaInsightsV1Call;
  "insights_v1:FetchConference": TwilioVoiceFullApiSchemaInsightsV1Conference;
  "insights_v1:FetchConferenceParticipant": TwilioVoiceFullApiSchemaInsightsV1ConferenceConferenceParticipant;
  "insights_v1:FetchSummary": TwilioVoiceFullApiSchemaInsightsV1CallSummary;
  "insights_v1:FetchVideoParticipantSummary": TwilioVoiceFullApiSchemaInsightsV1VideoRoomSummaryVideoParticipantSummary;
  "insights_v1:FetchVideoRoomSummary": TwilioVoiceFullApiSchemaInsightsV1VideoRoomSummary;
  "insights_v1:ListCallSummaries": {
  call_summaries?: ReadonlyArray<TwilioVoiceFullApiSchemaInsightsV1CallSummaries>;
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
  "insights_v1:ListConference": {
  conferences?: ReadonlyArray<TwilioVoiceFullApiSchemaInsightsV1Conference>;
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
  "insights_v1:ListConferenceParticipant": {
  participants?: ReadonlyArray<TwilioVoiceFullApiSchemaInsightsV1ConferenceConferenceParticipant>;
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
  "insights_v1:ListEvent": {
  events?: ReadonlyArray<TwilioVoiceFullApiSchemaInsightsV1CallEvent>;
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
  "insights_v1:ListMetric": {
  metrics?: ReadonlyArray<TwilioVoiceFullApiSchemaInsightsV1CallMetric>;
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
  "insights_v1:ListVideoParticipantSummary": {
  participants?: ReadonlyArray<TwilioVoiceFullApiSchemaInsightsV1VideoRoomSummaryVideoParticipantSummary>;
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
  "insights_v1:ListVideoRoomSummary": {
  rooms?: ReadonlyArray<TwilioVoiceFullApiSchemaInsightsV1VideoRoomSummary>;
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
  "insights_v1:UpdateAccountSettings": TwilioVoiceFullApiSchemaInsightsV1AccountSettings;
  "insights_v1:UpdateAnnotation": TwilioVoiceFullApiSchemaInsightsV1CallAnnotation;
  "insights_v2:CreateAccountReport": TwilioVoiceFullApiSchemaInsightsV2CreateReportResponse;
  "insights_v2:CreateInboundPhoneNumbersReport": TwilioVoiceFullApiSchemaInsightsV2CreateReportResponse;
  "insights_v2:CreateOutboundPhoneNumbersReport": TwilioVoiceFullApiSchemaInsightsV2CreateReportResponse;
  "insights_v2:FetchAccountReport": TwilioVoiceFullApiSchemaInsightsV2AccountReport;
  "insights_v2:ListInboundPhoneNumbersReport": {
  reports?: ReadonlyArray<TwilioVoiceFullApiSchemaInsightsV2InboundPhoneNumberReport>;
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
  "insights_v2:ListOutboundPhoneNumbersReport": {
  reports?: ReadonlyArray<TwilioVoiceFullApiSchemaInsightsV2OutboundPhoneNumberReport>;
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
  "insights_v3:CreateQueryResults": TwilioVoiceFullApiSchemaInsightsQueryResponse;
  "insights_v3:FetchMetadata": TwilioVoiceFullApiSchemaInsightsMetadataResponse;
  "insights_v3:FetchQueryResults": TwilioVoiceFullApiSchemaInsightsQueryResponse;
  "trunking_v1:CreateCredentialList": TwilioVoiceFullApiSchemaTrunkingV1TrunkCredentialList;
  "trunking_v1:CreateIpAccessControlList": TwilioVoiceFullApiSchemaTrunkingV1TrunkIpAccessControlList;
  "trunking_v1:CreateOriginationUrl": TwilioVoiceFullApiSchemaTrunkingV1TrunkOriginationUrl;
  "trunking_v1:CreatePhoneNumber": TwilioVoiceFullApiSchemaTrunkingV1TrunkPhoneNumber;
  "trunking_v1:CreateTrunk": TwilioVoiceFullApiSchemaTrunkingV1Trunk;
  "trunking_v1:DeleteCredentialList": void;
  "trunking_v1:DeleteIpAccessControlList": void;
  "trunking_v1:DeleteOriginationUrl": void;
  "trunking_v1:DeletePhoneNumber": void;
  "trunking_v1:DeleteTrunk": void;
  "trunking_v1:FetchCredentialList": TwilioVoiceFullApiSchemaTrunkingV1TrunkCredentialList;
  "trunking_v1:FetchIpAccessControlList": TwilioVoiceFullApiSchemaTrunkingV1TrunkIpAccessControlList;
  "trunking_v1:FetchOriginationUrl": TwilioVoiceFullApiSchemaTrunkingV1TrunkOriginationUrl;
  "trunking_v1:FetchPhoneNumber": TwilioVoiceFullApiSchemaTrunkingV1TrunkPhoneNumber;
  "trunking_v1:FetchRecording": TwilioVoiceFullApiSchemaTrunkingV1TrunkRecording;
  "trunking_v1:FetchTrunk": TwilioVoiceFullApiSchemaTrunkingV1Trunk;
  "trunking_v1:ListCredentialList": {
  credential_lists?: ReadonlyArray<TwilioVoiceFullApiSchemaTrunkingV1TrunkCredentialList>;
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
  "trunking_v1:ListIpAccessControlList": {
  ip_access_control_lists?: ReadonlyArray<TwilioVoiceFullApiSchemaTrunkingV1TrunkIpAccessControlList>;
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
  "trunking_v1:ListOriginationUrl": {
  origination_urls?: ReadonlyArray<TwilioVoiceFullApiSchemaTrunkingV1TrunkOriginationUrl>;
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
  "trunking_v1:ListPhoneNumber": {
  phone_numbers?: ReadonlyArray<TwilioVoiceFullApiSchemaTrunkingV1TrunkPhoneNumber>;
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
  "trunking_v1:ListTrunk": {
  trunks?: ReadonlyArray<TwilioVoiceFullApiSchemaTrunkingV1Trunk>;
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
  "trunking_v1:UpdateOriginationUrl": TwilioVoiceFullApiSchemaTrunkingV1TrunkOriginationUrl;
  "trunking_v1:UpdateRecording": TwilioVoiceFullApiSchemaTrunkingV1TrunkRecording;
  "trunking_v1:UpdateTrunk": TwilioVoiceFullApiSchemaTrunkingV1Trunk;
  "voice_v1:CreateByocTrunk": TwilioVoiceFullApiSchemaVoiceV1ByocTrunk;
  "voice_v1:CreateConnectionPolicy": TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicy;
  "voice_v1:CreateConnectionPolicyTarget": TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicyConnectionPolicyTarget;
  "voice_v1:CreateDialingPermissionsCountryBulkUpdate": TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate;
  "voice_v1:CreateIpRecord": TwilioVoiceFullApiSchemaVoiceV1IpRecord;
  "voice_v1:CreateSourceIpMapping": TwilioVoiceFullApiSchemaVoiceV1SourceIpMapping;
  "voice_v1:DeleteArchivedCall": void;
  "voice_v1:DeleteByocTrunk": void;
  "voice_v1:DeleteConnectionPolicy": void;
  "voice_v1:DeleteConnectionPolicyTarget": void;
  "voice_v1:DeleteIpRecord": void;
  "voice_v1:DeleteSourceIpMapping": void;
  "voice_v1:FetchByocTrunk": TwilioVoiceFullApiSchemaVoiceV1ByocTrunk;
  "voice_v1:FetchConnectionPolicy": TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicy;
  "voice_v1:FetchConnectionPolicyTarget": TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicyConnectionPolicyTarget;
  "voice_v1:FetchDialingPermissionsCountry": TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsCountryInstance;
  "voice_v1:FetchDialingPermissionsSettings": TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsSettings;
  "voice_v1:FetchIpRecord": TwilioVoiceFullApiSchemaVoiceV1IpRecord;
  "voice_v1:FetchSourceIpMapping": TwilioVoiceFullApiSchemaVoiceV1SourceIpMapping;
  "voice_v1:ListByocTrunk": {
  byoc_trunks?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV1ByocTrunk>;
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
  "voice_v1:ListConnectionPolicy": {
  connection_policies?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicy>;
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
  "voice_v1:ListConnectionPolicyTarget": {
  targets?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicyConnectionPolicyTarget>;
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
  "voice_v1:ListDialingPermissionsCountry": {
  content?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsCountry>;
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
  "voice_v1:ListDialingPermissionsHrsPrefixes": {
  content?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes>;
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
  "voice_v1:ListIpRecord": {
  ip_records?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV1IpRecord>;
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
  "voice_v1:ListSourceIpMapping": {
  source_ip_mappings?: ReadonlyArray<TwilioVoiceFullApiSchemaVoiceV1SourceIpMapping>;
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
  "voice_v1:UpdateByocTrunk": TwilioVoiceFullApiSchemaVoiceV1ByocTrunk;
  "voice_v1:UpdateConnectionPolicy": TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicy;
  "voice_v1:UpdateConnectionPolicyTarget": TwilioVoiceFullApiSchemaVoiceV1ConnectionPolicyConnectionPolicyTarget;
  "voice_v1:UpdateDialingPermissionsSettings": TwilioVoiceFullApiSchemaVoiceV1DialingPermissionsDialingPermissionsSettings;
  "voice_v1:UpdateIpRecord": TwilioVoiceFullApiSchemaVoiceV1IpRecord;
  "voice_v1:UpdateSourceIpMapping": TwilioVoiceFullApiSchemaVoiceV1SourceIpMapping;
  "voice_v3:CreateV3Transcriptions": TwilioVoiceFullApiSchemaVoiceV3TranscriptionLongRunningOperation202Response;
  "voice_v3:FetchTranscription": TwilioVoiceFullApiSchemaVoiceV3TranscriptionLongRunningOperationResponse;
}
