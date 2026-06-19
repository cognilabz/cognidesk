// Generated provider schema DTOs for VonageVoiceFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type VonageVoiceFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type VonageVoiceFullApiSchemaJsonValue = VonageVoiceFullApiSchemaJsonPrimitive | readonly VonageVoiceFullApiSchemaJsonValue[] | { readonly [key: string]: VonageVoiceFullApiSchemaJsonValue | undefined };

export type VonageVoiceFullApiSchemaConversationUuid = string;

export type VonageVoiceFullApiSchemaGetCallsResponse = {
  count?: number;
  page_size?: number;
  record_index?: number;
  _links?: {
  self?: {
  href?: string;
};
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
};
  _embedded?: {
  calls?: ReadonlyArray<VonageVoiceFullApiSchemaGetCallResponse>;
};
};

export type VonageVoiceFullApiSchemaCreateCallRequestNcco = (VonageVoiceFullApiSchemaCreateCallRequestBase & {
  ncco: ReadonlyArray<{}>;
});

export type VonageVoiceFullApiSchemaCreateCallRequestAnswerUrl = (VonageVoiceFullApiSchemaCreateCallRequestBase & {
  answer_url: ReadonlyArray<string>;
  answer_method?: "POST" | "GET";
});

export type VonageVoiceFullApiSchemaCreateCallResponse = {
  uuid?: VonageVoiceFullApiSchemaUuid;
  status?: VonageVoiceFullApiSchemaStatus;
  direction?: VonageVoiceFullApiSchemaDirection;
  conversation_uuid?: VonageVoiceFullApiSchemaConversationUuid;
};

export type VonageVoiceFullApiSchemaGetCallResponse = {
  _links?: {
  self?: {
  href?: string;
};
};
  uuid?: VonageVoiceFullApiSchemaUuid;
  conversation_uuid?: VonageVoiceFullApiSchemaConversationUuid;
  to?: (VonageVoiceFullApiSchemaEndpointPhoneTo | VonageVoiceFullApiSchemaEndpointSip | VonageVoiceFullApiSchemaEndpointWebsocket | VonageVoiceFullApiSchemaEndpointVBCExtension | VonageVoiceFullApiSchemaEndpointApp);
  from?: VonageVoiceFullApiSchemaFrom;
  status?: VonageVoiceFullApiSchemaStatus;
  direction?: VonageVoiceFullApiSchemaDirection;
  rate?: VonageVoiceFullApiSchemaRate;
  price?: VonageVoiceFullApiSchemaPrice;
  duration?: VonageVoiceFullApiSchemaDuration;
  start_time?: VonageVoiceFullApiSchemaStartTime;
  end_time?: VonageVoiceFullApiSchemaEndTime;
  network?: VonageVoiceFullApiSchemaNetwork;
};

export type VonageVoiceFullApiSchemaUpdateCallRequestTransferNcco = {
  action: VonageVoiceFullApiSchemaRequestTransferActionParam;
  destination: {
  type: string;
  ncco: ReadonlyArray<{}>;
};
};

export type VonageVoiceFullApiSchemaUpdateCallRequestTransferAnswerUrl = {
  action: VonageVoiceFullApiSchemaRequestTransferActionParam;
  destination: {
  type: string;
  url: ReadonlyArray<string>;
};
};

export type VonageVoiceFullApiSchemaUpdateCallRequestHangup = {
  action?: "hangup";
};

export type VonageVoiceFullApiSchemaUpdateCallRequestMute = {
  action?: "mute";
};

export type VonageVoiceFullApiSchemaUpdateCallRequestUnmute = {
  action?: "unmute";
};

export type VonageVoiceFullApiSchemaUpdateCallRequestEarmuff = {
  action?: "earmuff";
};

export type VonageVoiceFullApiSchemaUpdateCallRequestUnearmuff = {
  action?: "unearmuff";
};

export type VonageVoiceFullApiSchemaStartStreamRequest = {
  stream_url: ReadonlyArray<string>;
  loop?: number;
  level?: string;
};

export type VonageVoiceFullApiSchemaStartStreamResponse = {
  message?: string;
  uuid?: VonageVoiceFullApiSchemaUuid;
};

export type VonageVoiceFullApiSchemaStopStreamResponse = {
  message?: string;
  uuid?: VonageVoiceFullApiSchemaUuid;
};

export type VonageVoiceFullApiSchemaStartTalkRequest = {
  text: string;
  language?: VonageVoiceFullApiSchemaLanguage2;
  style?: VonageVoiceFullApiSchemaStyle2;
  premium?: boolean;
  voice_name?: VonageVoiceFullApiSchemaVoiceName;
  loop?: number;
  level?: string;
};

export type VonageVoiceFullApiSchemaStartTalkResponse = {
  message?: string;
  uuid?: VonageVoiceFullApiSchemaUuid;
};

export type VonageVoiceFullApiSchemaStopTalkResponse = {
  message?: string;
  uuid?: VonageVoiceFullApiSchemaUuid;
};

export type VonageVoiceFullApiSchemaDTMFRequest = {
  digits?: string;
};

export type VonageVoiceFullApiSchemaDTMFResponse = {
  message?: string;
  uuid?: VonageVoiceFullApiSchemaUuid;
};

export type VonageVoiceFullApiSchemaCreateCallRequestNcco2 = (VonageVoiceFullApiSchemaJsonValue & {
  ncco?: ReadonlyArray<{}>;
} & VonageVoiceFullApiSchemaCreateCallRequestBaseV2);

export type VonageVoiceFullApiSchemaCreateCallRequestAnswerUrl2 = (VonageVoiceFullApiSchemaJsonValue & {
  answer_url?: ReadonlyArray<string>;
  answer_method?: "POST" | "GET";
} & VonageVoiceFullApiSchemaCreateCallRequestBaseV2);

export type VonageVoiceFullApiSchemaApplicationResponseCollection = {
  page_size?: number;
  page?: number;
  total_items?: number;
  total_pages?: number;
  _embedded?: {
  applications?: ReadonlyArray<VonageVoiceFullApiSchemaApplicationResponse>;
};
};

export type VonageVoiceFullApiSchemaVoiceRegion = "na-east" | "na-west" | "eu-east" | "eu-west" | "apac-sng" | "apac-australia";

export type VonageVoiceFullApiSchemaVideoResponse = {
  webhooks?: {
  archive_status?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  connection_created?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  connection_destroyed?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  session_created?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  session_destroyed?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  session_notification?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  stream_created?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  stream_destroyed?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  render_status?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  captions_status?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  broadcast_status?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  sip_call_created?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  sip_call_updated?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  sip_call_destroyed?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
  sip_call_mute_forced?: {
  address?: string;
  active?: VonageVoiceFullApiSchemaActiveWebhook;
};
};
  storage?: {
  server_side_encryption?: boolean;
  end_to_end_encryption?: boolean;
  cloud_storage?: boolean;
};
};

export type VonageVoiceFullApiSchemaApplicationResponse = {
  id?: string;
  name?: string;
  capabilities?: {
  voice?: {
  webhooks?: {
  answer_url?: {
  address?: string;
  http_method?: string;
  connect_timeout?: number;
  socket_timeout?: number;
};
  fallback_answer_url?: {
  address?: string;
  http_method?: string;
  connect_timeout?: number;
  socket_timeout?: number;
};
  event_url?: {
  address?: string;
  http_method?: string;
  connect_timeout?: number;
  socket_timeout?: number;
};
};
  signed_callbacks?: boolean;
  conversations_ttl?: number;
  leg_persistence_time?: number;
  region?: VonageVoiceFullApiSchemaVoiceRegion;
};
  messages?: {
  webhooks?: {
  inbound_url?: {
  address?: string;
  http_method?: string;
};
  status_url?: {
  address?: string;
  http_method?: string;
};
};
};
  rtc?: {
  webhooks?: {
  event_url?: {
  address?: string;
  http_method?: string;
};
};
  signed_callbacks?: boolean;
};
  vbc?: {};
  network_apis?: {
  network_application_id?: string;
  redirect_uri?: string;
};
  meetings?: {
  webhooks?: {
  recording_changed?: {
  address?: string;
  http_method?: string;
};
  room_changed?: {
  address?: string;
  http_method?: string;
};
  session_changed?: {
  address?: string;
  http_method?: string;
};
};
};
  verify?: {
  version?: string;
  webhooks?: {
  status_url?: {
  address?: string;
  http_method?: string;
};
};
};
  video?: VonageVoiceFullApiSchemaVideoResponse;
};
  privacy?: {
  improve_ai?: boolean;
};
};

export type VonageVoiceFullApiSchemaInstance = string;

export type VonageVoiceFullApiSchemaPageSize = number;

export type VonageVoiceFullApiSchemaUserName = string;

export type VonageVoiceFullApiSchemaUserLite = {
  id?: VonageVoiceFullApiSchemaUserId2;
  name?: VonageVoiceFullApiSchemaUserName;
  display_name?: VonageVoiceFullApiSchemaUserDisplayName;
  _links?: VonageVoiceFullApiSchemaUserLinks;
};

export type VonageVoiceFullApiSchemaUserDisplayName = string;

export type VonageVoiceFullApiSchemaUserImageUrl = string;

export type VonageVoiceFullApiSchemaUserProperties = {
  custom_data?: {};
  ttl?: number;
};

export type VonageVoiceFullApiSchemaUserChannels = {
  pstn?: ReadonlyArray<{
  number?: number;
}>;
  sip?: ReadonlyArray<{
  uri?: string;
  username?: string;
  password?: string;
}>;
  vbc?: ReadonlyArray<{
  extension?: string;
}>;
  websocket?: ReadonlyArray<{
  uri?: string;
  "content-type"?: "audio/l16;rate=8000" | "audio/l16;rate=16000";
  headers?: {
  customer_id?: string;
};
}>;
  sms?: ReadonlyArray<{
  number?: string;
}>;
  mms?: ReadonlyArray<{
  number?: string;
}>;
  whatsapp?: ReadonlyArray<{
  number?: string;
}>;
  viber?: ReadonlyArray<{
  number?: string;
}>;
  messenger?: ReadonlyArray<{
  id?: string;
}>;
};

export type VonageVoiceFullApiSchemaUser = {
  id?: VonageVoiceFullApiSchemaUserId2;
  name?: VonageVoiceFullApiSchemaUserName;
  display_name?: VonageVoiceFullApiSchemaUserDisplayName;
  image_url?: VonageVoiceFullApiSchemaUserImageUrl;
  properties?: VonageVoiceFullApiSchemaUserProperties;
  channels?: VonageVoiceFullApiSchemaUserChannels;
  _links?: VonageVoiceFullApiSchemaUserLinks;
};

export type VonageVoiceFullApiSchemaPageSize2 = number;

export type VonageVoiceFullApiSchemaConversationLite = {
  id?: VonageVoiceFullApiSchemaConversationId;
  name?: VonageVoiceFullApiSchemaConversationName;
  display_name?: VonageVoiceFullApiSchemaConversationDisplayName;
  image_url?: VonageVoiceFullApiSchemaConversationImageUrl;
  timestamp?: VonageVoiceFullApiSchemaConversationTimestamp;
  _links?: VonageVoiceFullApiSchemaConversationLinks;
};

export type VonageVoiceFullApiSchemaConversationName = string;

export type VonageVoiceFullApiSchemaConversationDisplayName = string | null;

export type VonageVoiceFullApiSchemaConversationImageUrl = string | null;

export type VonageVoiceFullApiSchemaConversationProperties = {
  ttl?: number;
  custom_data?: {
  readonly [key: string]: string | undefined;
};
};

export type VonageVoiceFullApiSchemaConversationNumbers = {
  type?: "phone";
  number?: string;
};

export type VonageVoiceFullApiSchemaConversationCallback = {
  url?: string;
  event_mask?: string;
  params?: {
  applicationId?: string;
  ncco_url?: string;
};
  method?: "POST" | "GET";
};

export type VonageVoiceFullApiSchemaConversation = {
  id?: VonageVoiceFullApiSchemaConversationId;
  name?: VonageVoiceFullApiSchemaConversationName;
  display_name?: VonageVoiceFullApiSchemaConversationDisplayName;
  image_url?: VonageVoiceFullApiSchemaConversationImageUrl;
  state?: VonageVoiceFullApiSchemaConversationState;
  sequence_number?: VonageVoiceFullApiSchemaConversationSequenceNumber;
  timestamp?: VonageVoiceFullApiSchemaConversationTimestamp;
  properties?: VonageVoiceFullApiSchemaConversationProperties;
  _links?: VonageVoiceFullApiSchemaConversationLinks;
};

export type VonageVoiceFullApiSchemaMemberLite = {
  id?: VonageVoiceFullApiSchemaMemberId;
  state?: VonageVoiceFullApiSchemaMemberState;
  _embedded?: {
  user?: VonageVoiceFullApiSchemaUserLite2;
};
  _links?: {
  href?: VonageVoiceFullApiSchemaMemberHref;
};
};

export type VonageVoiceFullApiSchemaMemberStateRequest = "invited" | "joined";

export type VonageVoiceFullApiSchemaUserId = string;

export type VonageVoiceFullApiSchemaUserName2 = string | null;

export type VonageVoiceFullApiSchemaChannel = ({
  type: "app";
  from?: VonageVoiceFullApiSchemaMemberChannelFrom;
  to?: {
  type?: "app";
  user?: string;
};
} | {
  type: "phone";
  from?: VonageVoiceFullApiSchemaMemberChannelFrom;
  to?: {
  number?: string;
  type?: "phone";
};
} | {
  type?: "sms";
  from?: VonageVoiceFullApiSchemaMemberChannelFrom;
  to?: {
  number?: string;
  type?: "sms";
};
} | {
  type?: "mms";
  from?: VonageVoiceFullApiSchemaMemberChannelFrom;
  to?: {
  number?: string;
};
} | {
  type?: "whatsapp";
  from?: VonageVoiceFullApiSchemaMemberChannelFrom;
  to?: {
  number?: string;
};
} | {
  type?: "viber";
  from?: VonageVoiceFullApiSchemaMemberChannelFrom;
  to?: {
  id?: string;
};
} | {
  type?: "messenger";
  from?: VonageVoiceFullApiSchemaMemberChannelFrom;
  to?: {
  id?: string;
};
});

export type VonageVoiceFullApiSchemaMedia = {
  audio_settings?: {
  enabled?: boolean;
  earmuffed?: boolean;
  muted?: boolean;
};
  audio?: boolean;
};

export type VonageVoiceFullApiSchemaKnockerId = string;

export type VonageVoiceFullApiSchemaMemberIdInviting = string;

export type VonageVoiceFullApiSchemaMemberFrom = string;

export type VonageVoiceFullApiSchemaMember = {
  id?: VonageVoiceFullApiSchemaMemberId;
  conversation_id?: VonageVoiceFullApiSchemaConversationId;
  _embedded?: {
  user?: VonageVoiceFullApiSchemaUserLite2;
};
  state?: VonageVoiceFullApiSchemaMemberState;
  timestamp?: VonageVoiceFullApiSchemaMemberTimestamp;
  initiator?: VonageVoiceFullApiSchemaMemberInitiator;
  channel?: VonageVoiceFullApiSchemaChannel;
  media?: VonageVoiceFullApiSchemaMedia;
  knocking_id?: string;
  invited_by?: string;
  _links?: {
  href?: VonageVoiceFullApiSchemaMemberHref;
};
};

export type VonageVoiceFullApiSchemaMessageEvent = {
  type: "message";
  from?: string;
  body: (VonageVoiceFullApiSchemaMessageBodyText | VonageVoiceFullApiSchemaMessageBodyImage | VonageVoiceFullApiSchemaMessageBodyAudio | VonageVoiceFullApiSchemaMessageBodyVideo | VonageVoiceFullApiSchemaMessageBodyFile | VonageVoiceFullApiSchemaMessageBodyTemplate | VonageVoiceFullApiSchemaMessageBodyCustom | VonageVoiceFullApiSchemaMessageBodyVcard | VonageVoiceFullApiSchemaMessageBodyLocation | VonageVoiceFullApiSchemaMessageBodyRandom);
};

export type VonageVoiceFullApiSchemaMessagesubmittedEvent = {
  type: "message:submitted";
  from?: string;
  body: {
  event_id: string;
};
};

export type VonageVoiceFullApiSchemaMessagerejectedEvent = {
  type: "message:rejected";
  from?: string;
  body: {
  event_id: string;
};
};

export type VonageVoiceFullApiSchemaMessageundeliverableEvent = {
  type: "message:undeliverable";
  from?: string;
  body: {
  event_id: string;
};
};

export type VonageVoiceFullApiSchemaMessageseenEvent = {
  type: "message:seen";
  from?: string;
  body: {
  event_id: string;
};
};

export type VonageVoiceFullApiSchemaMessagedeliveredEvent = {
  type: "message:delivered";
  from?: string;
  body: {
  event_id: string;
};
};

export type VonageVoiceFullApiSchemaEphemeralEvent = {
  type: "ephemeral";
  from?: string;
  body: {};
};

export type VonageVoiceFullApiSchemaCustomEvent = {
  type: string;
  from?: string;
  body: {};
};

export type VonageVoiceFullApiSchemaAudioplayEvent = {
  type: "audio:play";
  from?: string;
  body: {
  queue?: boolean;
  level: number;
  loop: number;
  stream_url: ReadonlyArray<string>;
};
};

export type VonageVoiceFullApiSchemaAudioplaystopEvent = {
  type: "audio:play:stop";
  from?: string;
  body: {
  play_id: string;
};
};

export type VonageVoiceFullApiSchemaAudiosayEvent = {
  type: "audio:say";
  from?: string;
  body: {
  level: number;
  loop: number;
  queue?: boolean;
  voice_name?: string;
  language?: string;
  style?: number;
  premium?: boolean;
  text: string;
  ssml?: boolean;
};
};

export type VonageVoiceFullApiSchemaAudiosaystopEvent = {
  type: "audio:say:stop";
  from?: string;
  body: {
  say_id: string;
};
};

export type VonageVoiceFullApiSchemaAudiodtmfEvent = {
  type: "audio:dtmf";
  from?: string;
  body: (VonageVoiceFullApiSchemaAudiodtmfBodyDigitNoMethod | VonageVoiceFullApiSchemaAudiodtmfBodyDigitsNoMethod | VonageVoiceFullApiSchemaAudiodtmfBodyDigit | VonageVoiceFullApiSchemaAudiodtmfBodyDigits);
};

export type VonageVoiceFullApiSchemaAudiorecordEvent = {
  type: "audio:record";
  from?: string;
  body: {
  validity?: number;
  streamed?: boolean;
  format?: string;
  beep_start?: boolean;
  beep_stop?: boolean;
  detect_speech?: boolean;
  split?: boolean;
  mulitrack?: boolean;
  channels?: number;
  transcription?: {
  language: string;
  sentiment_analysis?: boolean;
};
};
};

export type VonageVoiceFullApiSchemaAudiorecordstopEvent = {
  type: "audio:record:stop";
  from?: string;
  body: {
  record_id: string;
};
};

export type VonageVoiceFullApiSchemaAudiomuteonEvent = {
  type: "audio:mute:on";
  from?: string;
  body: {
  rtc_id: string;
};
};

export type VonageVoiceFullApiSchemaAudiomuteoffEvent = {
  type: "audio:mute:off";
  from?: string;
  body: {
  rtc_id: string;
};
};

export type VonageVoiceFullApiSchemaAudioearmuffonEvent = {
  type: "audio:earmuff:on";
  from?: string;
  body: {
  rtc_id: string;
};
};

export type VonageVoiceFullApiSchemaAudioearmuffoffEvent = {
  type: "audio:earmuff:off";
  from?: string;
  body: {
  rtc_id: string;
};
};

export type VonageVoiceFullApiSchemaMessageEventResponse = {
  id?: number;
  type?: "message";
  from?: string;
  body?: (VonageVoiceFullApiSchemaMessageBodyText | VonageVoiceFullApiSchemaMessageBodyImage | VonageVoiceFullApiSchemaMessageBodyAudio | VonageVoiceFullApiSchemaMessageBodyVideo | VonageVoiceFullApiSchemaMessageBodyFile | VonageVoiceFullApiSchemaMessageBodyTemplate | VonageVoiceFullApiSchemaMessageBodyCustom | VonageVoiceFullApiSchemaMessageBodyVcard | VonageVoiceFullApiSchemaMessageBodyLocation | VonageVoiceFullApiSchemaMessageBodyRandom);
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMessagesubmittedEventResponse = {
  id?: number;
  type?: "message:submitted";
  from?: string;
  body?: {
  event_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMessagerejectedEventResponse = {
  id?: number;
  type?: "message:rejected";
  from?: string;
  body?: {
  event_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMessageundeliverableEventResponse = {
  id?: number;
  type?: "message:undeliverable";
  from?: string;
  body?: {
  event_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMessageseenEventResponse = {
  id?: number;
  type?: "message:seen";
  from?: string;
  body?: {
  event_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMessagedeliveredEventResponse = {
  id?: number;
  type?: "message:delivered";
  from?: string;
  body?: {
  event_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaCustomEventResponse = {
  id?: number;
  type?: string;
  from?: string;
  body?: {};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaEphemeralEventResponse = {
  id?: number;
  type?: "ephemeral";
  from?: string;
  body?: {};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudioplayEventResponse = {
  id?: number;
  type?: "audio:play";
  from?: string;
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
  body?: {
  queue?: boolean;
  level?: number;
  loop?: number;
  stream_url?: ReadonlyArray<string>;
};
};

export type VonageVoiceFullApiSchemaAudioplaystopEventResponse = {
  id?: number;
  type?: "audio:play:stop";
  from?: string;
  body?: {
  play_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiosayEventResponse = {
  id?: number;
  type?: "audio:say";
  from?: string;
  body?: {
  level?: number;
  loop?: number;
  queue?: boolean;
  voice_name?: string;
  language?: string;
  style?: number;
  premium?: boolean;
  text?: string;
  ssml?: boolean;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiosaystopEventResponse = {
  id?: number;
  type?: "audio:say:stop";
  from?: string;
  body?: {
  say_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiodtmfEventResponse = {
  id?: number;
  type?: "audio:dtmf";
  from?: string;
  body?: (VonageVoiceFullApiSchemaAudiodtmfBodyDigitNoMethod | VonageVoiceFullApiSchemaAudiodtmfBodyDigitsNoMethod | VonageVoiceFullApiSchemaAudiodtmfBodyDigit | VonageVoiceFullApiSchemaAudiodtmfBodyDigits);
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiorecordEventResponse = {
  id?: number;
  type?: "audio:record";
  from?: string;
  body?: {
  recording_id?: string;
  validity?: number;
  streamed?: boolean;
  format?: string;
  beep_start?: boolean;
  beep_stop?: boolean;
  detect_speech?: boolean;
  split?: boolean;
  mulitrack?: boolean;
  channels?: number;
  transcription?: {
  language?: string;
  sentiment_analysis?: boolean;
};
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiorecordstopEventResponse = {
  id?: number;
  type?: "audio:record:stop";
  from?: string;
  body?: {
  record_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiomuteonEventResponse = {
  id?: number;
  type?: "audio:mute:on";
  from?: string;
  body?: {
  rtc_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiomuteoffEventResponse = {
  id?: number;
  type?: "audio:mute:off";
  from?: string;
  body?: {
  rtc_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudioearmuffonEventResponse = {
  id?: number;
  type?: "audio:earmuff:on";
  from?: string;
  body?: {
  rtc_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudioearmuffoffEventResponse = {
  id?: number;
  type?: "audio:earmuff:off";
  from?: string;
  body?: {
  rtc_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMembermessagestatusEventResponse = {
  id?: number;
  type?: "member:message:status";
  from?: string;
  body?: {
  original_event_id?: string;
  message_type?: "text" | "image" | "video" | "audio" | "file" | "vcard" | "custom" | "template" | "location";
  channel_type?: "sms" | "mms" | "whatsapp" | "viber" | "messenger";
  from?: string;
  to?: string;
  message_uuid?: string;
  error?: {};
  text?: string;
  image?: {
  url?: string;
};
  audio?: {
  url?: string;
};
  video?: {
  url?: string;
};
  file?: {
  url?: string;
};
  template?: {
  name?: string;
  parameters?: ReadonlyArray<string>;
};
  whatsapp?: {
  policy?: string;
  locale?: string;
};
  custom?: {};
  vcard?: {
  url?: string;
};
  location?: {
  longitude?: string;
  latitude?: string;
  name?: string;
  address?: string;
};
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudioplaydoneEventResponse = {
  id?: number;
  type?: "audio:play:done";
  from?: string;
  body?: {
  play_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiosaydoneEventResponse = {
  id?: number;
  type?: "audio:say:done";
  from?: string;
  body?: {
  say_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiorecorddoneEventResponse = {
  id?: number;
  type?: "audio:record:done";
  from?: string;
  body?: {
  event_id?: number;
  recording_id?: string;
  destination_url?: string;
  format?: string;
  start_time?: string;
  end_time?: string;
  size?: number;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiospeakingonEventResponse = {
  id?: number;
  type?: "audio:speaking:on";
  from?: string;
  body?: {
  channel?: VonageVoiceFullApiSchemaEventChannel;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudiospeakingoffEventResponse = {
  id?: number;
  type?: "audio:speaking:off";
  from?: string;
  body?: {
  channel?: VonageVoiceFullApiSchemaEventChannel;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudioasrdoneEventResponse = {
  id?: number;
  type?: "audio:asr:done";
  from?: string;
  body?: {
  channel?: VonageVoiceFullApiSchemaEventChannel;
  asr?: {
  results?: ReadonlyArray<{
  word?: string;
  confidence?: number;
}>;
  error?: string;
  asr_id?: string;
  call_id?: string;
  timeout_reason?: string;
};
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaAudioasrrecorddoneEventResponse = {
  id?: number;
  type?: "audio:asr:record:done";
  from?: string;
  body?: {
  channel?: VonageVoiceFullApiSchemaEventChannel;
  asr?: {
  error?: string;
  asr_id?: string;
  call_id?: string;
  destination_url?: string;
  format?: "mp3" | "wav";
  start_time?: string;
  end_time?: string;
  size?: number;
  media_service_uuid?: string;
};
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMemberinvitedEventResponse = {
  id?: number;
  type?: "member:invited";
  from?: string;
  body?: {
  cname?: string;
  invited_by?: string;
  member_id?: string;
  sdp?: string;
  conversation?: {
  conversation_id?: string;
  display_name?: string;
  name?: string;
  image_url?: string;
};
  user?: {
  id?: VonageVoiceFullApiSchemaUserId;
  member_id?: string;
  user_id?: string;
  name?: VonageVoiceFullApiSchemaUserName2;
  display_name?: VonageVoiceFullApiSchemaUserDisplayName2;
  image_url?: VonageVoiceFullApiSchemaUserImageUrl2;
  properties?: VonageVoiceFullApiSchemaUserProperties2;
  media?: (VonageVoiceFullApiSchemaEventMediaBoolean | VonageVoiceFullApiSchemaEventMedia);
};
  channel?: (VonageVoiceFullApiSchemaEventSmsChannel | VonageVoiceFullApiSchemaEventMmsChannel | VonageVoiceFullApiSchemaEventWhatsappChannel | VonageVoiceFullApiSchemaEventViberChannel | VonageVoiceFullApiSchemaEventMessengerChannel);
  media?: (VonageVoiceFullApiSchemaEventMediaBoolean | VonageVoiceFullApiSchemaEventMedia);
  timestamp?: {
  invited?: string;
  left?: string;
  joined?: string;
};
  initiator?: {
  invited?: {
  isSystem?: boolean;
  member_id?: string;
  user_id?: string;
};
};
  invited_by_member?: VonageVoiceFullApiSchemaEventInvitedMember;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMemberjoinedEventResponse = {
  id?: number;
  type?: "member:joined";
  from?: string;
  body?: {
  member_id?: string;
  user?: {
  id?: VonageVoiceFullApiSchemaUserId;
  member_id?: string;
  user_id?: string;
  name?: VonageVoiceFullApiSchemaUserName2;
  display_name?: VonageVoiceFullApiSchemaUserDisplayName2;
  image_url?: VonageVoiceFullApiSchemaUserImageUrl2;
  properties?: VonageVoiceFullApiSchemaUserProperties2;
  media?: (VonageVoiceFullApiSchemaEventMediaBoolean | VonageVoiceFullApiSchemaEventMedia);
};
  channel?: (VonageVoiceFullApiSchemaEventSmsChannel | VonageVoiceFullApiSchemaEventMmsChannel | VonageVoiceFullApiSchemaEventWhatsappChannel | VonageVoiceFullApiSchemaEventViberChannel | VonageVoiceFullApiSchemaEventMessengerChannel);
  timestamp?: {
  invited?: string;
  left?: string;
  joined?: string;
};
  initiator?: {
  joined?: {
  isSystem?: boolean;
  member_id?: string;
  user_id?: string;
};
};
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMemberleftEventResponse = {
  id?: number;
  type?: "member:left";
  from?: string;
  body?: {
  member_id?: string;
  user?: {
  id?: VonageVoiceFullApiSchemaUserId;
  member_id?: string;
  user_id?: string;
  name?: VonageVoiceFullApiSchemaUserName2;
  display_name?: VonageVoiceFullApiSchemaUserDisplayName2;
  image_url?: VonageVoiceFullApiSchemaUserImageUrl2;
  properties?: VonageVoiceFullApiSchemaUserProperties2;
  media?: (VonageVoiceFullApiSchemaEventMediaBoolean | VonageVoiceFullApiSchemaEventMedia);
};
  channel?: (VonageVoiceFullApiSchemaEventSmsChannel | VonageVoiceFullApiSchemaEventMmsChannel | VonageVoiceFullApiSchemaEventWhatsappChannel | VonageVoiceFullApiSchemaEventViberChannel | VonageVoiceFullApiSchemaEventMessengerChannel);
  timestamp?: {
  invited?: string;
  left?: string;
  joined?: string;
};
  initiator?: {
  joined?: {
  isSystem?: boolean;
  member_id?: string;
  user_id?: string;
};
  left?: {
  isSystem?: boolean;
  member_id?: string;
  user_id?: string;
};
};
  reason?: {
  code?: string;
  text?: string;
};
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaMembermediaEventResponse = {
  id?: number;
  type?: "member:media";
  from?: string;
  body?: {
  audio?: boolean;
  media?: (VonageVoiceFullApiSchemaEventMediaBoolean | VonageVoiceFullApiSchemaEventMedia);
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaConversationupdateEventResponse = {
  id?: number;
  type?: "conversation:updated";
  from?: string;
  body?: {
  id?: string;
  name?: string;
  timestamp?: VonageVoiceFullApiSchemaTimestampResConversation;
  display_name?: string;
  image_url?: string;
  state?: "ACTIVE" | "INACTIVE" | "DELETED";
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaEventdeleteEventResponse = {
  id?: number;
  type?: "event:delete";
  from?: string;
  body?: {
  event_id?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaSipstatusEventResponse = {
  id?: number;
  type?: "sip:status";
  from?: string;
  body?: {
  price?: string;
  rate?: string;
  duration?: string;
  to?: string;
  from?: string;
  network_code?: string;
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
  request_time?: string;
  start_time?: string;
  end_time?: string;
  status?: "started" | "ringing" | "answered" | "completed" | "machine" | "failed" | "busy" | "timeout" | "cancelled" | "rejected";
  direction?: "in" | "out";
  state?: (VonageVoiceFullApiSchemaLegStatus | VonageVoiceFullApiSchemaLegStatusComplete);
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaSiphangupEventResponse = {
  id?: number;
  type?: "sip:hangup";
  from?: string;
  body?: {
  direction?: "inbound" | "outbound";
  quality?: {
  mos_score?: number;
  quality_percentage?: number;
  jitter_min_var?: number;
  jitter_max_var?: number;
  jitter_loss_rate?: number;
  jitter_burst_rate?: number;
  flaw_total?: number;
  packet_cnt?: number;
  packet_loss_perc?: number;
};
  bandwidth?: {
  byte_in?: number;
  byte_out?: number;
};
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
  reason?: {
  text?: string;
  code?: string;
  sip_code?: string;
};
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaSipansweredEventResponse = {
  id?: number;
  type?: "sip:answered";
  from?: string;
  body?: {
  direction?: "inbound" | "outbound";
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaSipmachineEventResponse = {
  id?: number;
  type?: "sip:machine";
  from?: string;
  body?: {
  type?: string;
  confidence?: number;
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaSipamdmachineEventResponse = {
  id?: number;
  type?: "sip:amd_machine";
  from?: string;
  body?: {
  type?: string;
  confidence?: number;
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaSipringingEventResponse = {
  id?: number;
  type?: "sip:ringing";
  from?: string;
  body?: {
  direction?: "inbound" | "outbound";
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaRtcstatusEventResponse = {
  id?: number;
  type?: "rtc:status";
  from?: string;
  body?: {
  duration?: string;
  end_time?: string;
  mos?: number;
  price?: string;
  price_currency?: string;
  start_time?: string;
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaRtctransferEventResponse = {
  id?: number;
  type?: "rtc:transfer";
  from?: string;
  body?: {
  was_member?: string;
  user_id?: string;
  transferred_from?: string;
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaRtchangupEventResponse = {
  id?: number;
  type?: "rtc:hangup";
  from?: string;
  body?: {
  direction?: "inbound" | "outbound";
  quality?: {
  mos_score?: number;
  quality_percentage?: number;
  jitter_min_var?: number;
  jitter_max_var?: number;
  jitter_loss_rate?: number;
  jitter_burst_rate?: number;
  flaw_total?: number;
  packet_cnt?: number;
  packet_loss_perc?: number;
};
  bandwidth?: {
  byte_in?: number;
  byte_out?: number;
};
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
  reason?: {
  text?: string;
  code?: string;
  sip_code?: string;
};
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaRtcansweredEventResponse = {
  id?: number;
  type?: "rtc:answered";
  from?: string;
  body?: {
  direction?: "inbound" | "outbound";
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaRtcringingEventResponse = {
  id?: number;
  type?: "rtc:ringing";
  from?: string;
  body?: {
  direction?: "inbound" | "outbound";
  channel?: VonageVoiceFullApiSchemaEventAudioChannels;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaRtcanswerEventResponse = {
  id?: number;
  type?: "rtc:answer";
  from?: string;
  body?: {
  answer?: string;
  rtc_id?: string;
  isFromMB?: boolean;
  session_destination?: string;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaLegstatusupdateEventResponse = {
  id?: number;
  type?: "leg:status:update";
  from?: string;
  body?: {
  leg_id?: string;
  direction?: "inbound" | "outbound";
  type?: "app" | "phone" | "sip" | "websocket" | "vbc" | "whatsapp-voice";
  status?: "started" | "ringing" | "answered" | "completed" | "machine" | "failed" | "busy" | "timeout" | "cancelled" | "rejected";
  state?: (VonageVoiceFullApiSchemaLegStatusComplete | VonageVoiceFullApiSchemaLegStatus);
  statusHistory?: ReadonlyArray<(VonageVoiceFullApiSchemaLegStatusHistoryMember | VonageVoiceFullApiSchemaLegStatusHistoryKnocker)>;
};
  timestamp?: VonageVoiceFullApiSchemaTimestampCreated;
  _embedded?: VonageVoiceFullApiSchemaEmbeddedEventFrom;
  _links?: VonageVoiceFullApiSchemaEventLinks;
};

export type VonageVoiceFullApiSchemaConversationUser = {
  id?: VonageVoiceFullApiSchemaConversationId;
  name?: VonageVoiceFullApiSchemaConversationName;
  display_name?: VonageVoiceFullApiSchemaConversationDisplayName;
  image_url?: VonageVoiceFullApiSchemaConversationImageUrl;
  sequence_number?: VonageVoiceFullApiSchemaConversationSequenceNumber;
  properties?: VonageVoiceFullApiSchemaConversationProperties;
  timestamp?: VonageVoiceFullApiSchemaConversationTimestamp;
  _links?: VonageVoiceFullApiSchemaConversationLinks;
  _embedded?: VonageVoiceFullApiSchemaConversationMembers;
};

export type VonageVoiceFullApiSchemaLanguage = "ar" | "ca-ES" | "cmn-CN" | "cmn-TW" | "cs-CZ" | "cy-GB" | "da-DK" | "de-DE" | "el-GR" | "en-AU" | "en-GB" | "en-GB-WLS" | "en-IN" | "en-US" | "en-ZA" | "es-ES" | "es-MX" | "es-US" | "eu-ES" | "fi-FI" | "fil-PH" | "fr-CA" | "fr-FR" | "he-IL" | "hi-IN" | "hu-HU" | "id-ID" | "is-IS" | "it-IT" | "ja-JP" | "ko-KR" | "nb-NO" | "nl-NL" | "no-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "sk-SK" | "sv-SE" | "th-TH" | "tr-TR" | "uk-UA" | "vi-VN" | "yue-CN";

export type VonageVoiceFullApiSchemaStyle = number;

export type VonageVoiceFullApiSchemaStopTalkResponse2 = {
  message?: string;
  uuid?: string;
};

export type VonageVoiceFullApiSchemaStartStreamRequest2 = {
  stream_url: ReadonlyArray<string>;
  loop?: number;
  level?: string;
};

export type VonageVoiceFullApiSchemaStartStreamResponse2 = {
  message?: string;
  uuid?: string;
};

export type VonageVoiceFullApiSchemaStopStreamResponse2 = {
  message?: string;
  uuid?: string;
};

export type VonageVoiceFullApiSchemaAction = "start" | "stop";

export type VonageVoiceFullApiSchemaEventUrl = ReadonlyArray<string>;

export type VonageVoiceFullApiSchemaEventMethod = string;

export type VonageVoiceFullApiSchemaSplit = string;

export type VonageVoiceFullApiSchemaFormat = "mp3" | "wav" | "vorbis";

export type VonageVoiceFullApiSchemaRetentionTtl = number;

export type VonageVoiceFullApiSchemaTimeout = number;

export type VonageVoiceFullApiSchemaTranscription = {
  language?: string;
  sentiment_analysis?: boolean;
  event_url?: ReadonlyArray<string>;
  event_method?: "GET" | "POST";
};

export type VonageVoiceFullApiSchemaCountry = string;

export type VonageVoiceFullApiSchemaInboundNumbers = {
  count?: number;
  numbers?: ReadonlyArray<VonageVoiceFullApiSchemaOwnednumber>;
};

export type VonageVoiceFullApiSchemaAvailableNumbers = {
  count?: number;
  numbers?: ReadonlyArray<VonageVoiceFullApiSchemaAvailablenumber>;
};

export type VonageVoiceFullApiSchemaNumberDetails = {
  country: VonageVoiceFullApiSchemaCountry;
  msisdn: string;
  target_api_key?: string;
};

export type VonageVoiceFullApiSchemaResponse = {
  "error-code"?: string;
  "error-code-label"?: string;
};

export type VonageVoiceFullApiSchemaNumberDetailsUpdate = {
  country: VonageVoiceFullApiSchemaCountry;
  msisdn: string;
  app_id?: string;
  moHttpUrl?: string;
  moSmppSysType?: string;
  voiceCallbackType?: "sip" | "tel" | "app";
  voiceCallbackValue?: string;
  voiceStatusCallback?: string;
  messagesCallbackType?: "app";
  messagesCallbackValue?: string;
};

export type VonageVoiceFullApiSchemaCreateCallRequestBase = {
  to: ReadonlyArray<(VonageVoiceFullApiSchemaEndpointPhoneTo | VonageVoiceFullApiSchemaEndpointSip | VonageVoiceFullApiSchemaEndpointWebsocket | VonageVoiceFullApiSchemaEndpointVBCExtension | VonageVoiceFullApiSchemaEndpointApp)>;
  from?: VonageVoiceFullApiSchemaEndpointPhoneFrom;
  random_from_number?: boolean;
  event_url?: ReadonlyArray<string>;
  event_method?: "POST" | "GET";
  machine_detection?: "continue" | "hangup";
  advanced_machine_detection?: {
  behavior?: "continue" | "hangup";
  mode?: "default" | "detect" | "detect_beep";
  beep_timeout?: number;
};
  length_timer?: number;
  ringing_timer?: number;
};

export type VonageVoiceFullApiSchemaUuid = string;

export type VonageVoiceFullApiSchemaStatus = string;

export type VonageVoiceFullApiSchemaDirection = "outbound" | "inbound";

export type VonageVoiceFullApiSchemaEndpointPhoneTo = {
  type: string;
  number: VonageVoiceFullApiSchemaAddressE164;
  dtmfAnswer?: string;
  shaken?: string;
};

export type VonageVoiceFullApiSchemaEndpointSip = {
  type: string;
  uri: VonageVoiceFullApiSchemaAddressSip;
  headers?: {};
  standard_headers?: {
  "User-to-User": string;
};
};

export type VonageVoiceFullApiSchemaEndpointWebsocket = {
  type: string;
  uri?: VonageVoiceFullApiSchemaAddressWebsocket;
  "content-type": "audio/l16;rate=8000" | "audio/l16;rate=16000" | "audio/l16;rate=24000";
  headers?: {
  customer_id?: string;
};
  authorization?: {
  type?: "vonage" | "custom";
  value?: string;
};
};

export type VonageVoiceFullApiSchemaEndpointVBCExtension = {
  type: string;
  extension: string;
};

export type VonageVoiceFullApiSchemaEndpointApp = {
  type: string;
  user: string;
};

export type VonageVoiceFullApiSchemaFrom = {
  type?: string;
  number?: string;
};

export type VonageVoiceFullApiSchemaRate = string;

export type VonageVoiceFullApiSchemaPrice = string;

export type VonageVoiceFullApiSchemaDuration = string;

export type VonageVoiceFullApiSchemaStartTime = string;

export type VonageVoiceFullApiSchemaEndTime = string;

export type VonageVoiceFullApiSchemaNetwork = string;

export type VonageVoiceFullApiSchemaRequestTransferActionParam = "transfer";

export type VonageVoiceFullApiSchemaLanguage2 = "ar" | "ca-ES" | "cmn-CN" | "cmn-TW" | "cs-CZ" | "cy-GB" | "da-DK" | "de-DE" | "el-GR" | "en-AU" | "en-GB" | "en-GB-WLS" | "en-IN" | "en-US" | "en-ZA" | "es-ES" | "es-MX" | "es-US" | "eu-ES" | "fi-FI" | "fil-PH" | "fr-CA" | "fr-FR" | "he-IL" | "hi-IN" | "hu-HU" | "id-ID" | "is-IS" | "it-IT" | "ja-JP" | "ko-KR" | "nb-NO" | "nl-NL" | "no-NO" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "sk-SK" | "sv-SE" | "th-TH" | "tr-TR" | "uk-UA" | "vi-VN" | "yue-CN";

export type VonageVoiceFullApiSchemaStyle2 = number;

export type VonageVoiceFullApiSchemaVoiceName = "Aditi" | "Agnieszka" | "Alva" | "Amy" | "Astrid" | "Bianca" | "Brian" | "Carla" | "Carmen" | "Carmit" | "Catarina" | "Celine" | "Cem" | "Chantal" | "Chipmunk" | "Conchita" | "Cristiano" | "Damayanti" | "Dora" | "Emma" | "Empar" | "Enrique" | "Eric" | "Ewa" | "Felipe" | "Filiz" | "Geraint" | "Giorgio" | "Gwyneth" | "Hans" | "Henrik" | "Ines" | "Ioana" | "Iveta" | "Ivy" | "Jacek" | "Jan" | "Jennifer" | "Joana" | "Joanna" | "Joey" | "Jordi" | "Justin" | "Kanya" | "Karl" | "Kendra" | "Kimberly" | "Laila" | "Laura" | "Lea" | "Lekha" | "Liv" | "Lotte" | "Lucia" | "Luciana" | "Mads" | "Maged" | "Maja" | "Mariska" | "Marlene" | "Mathieu" | "Matthew" | "Maxim" | "Mei-Jia" | "Melina" | "Mia" | "Miguel" | "Miren" | "Mizuki" | "Montserrat" | "Naja" | "Nicole" | "Nikos" | "Nora" | "Oskar" | "Penelope" | "Raveena" | "Ricardo" | "Ruben" | "Russell" | "Salli" | "Satu" | "Seoyeon" | "Sin-Ji" | "Sora" | "Takumi" | "Tarik" | "Tatyana" | "Tessa" | "Tian-Tian" | "Vicki" | "Vitoria" | "Yelda" | "Zeina" | "Zhiyu" | "Zuzana";

export type VonageVoiceFullApiSchemaCreateCallRequestBaseV2 = {
  to: ReadonlyArray<(VonageVoiceFullApiSchemaEndpointPhoneTo2 | VonageVoiceFullApiSchemaEndpointSip2 | VonageVoiceFullApiSchemaEndpointWebsocket2 | VonageVoiceFullApiSchemaEndpointVBCExtension2 | VonageVoiceFullApiSchemaEndpointApp2)>;
  from: VonageVoiceFullApiSchemaEndpointPhoneFrom2;
  event_url?: ReadonlyArray<string>;
  event_method?: "POST" | "GET";
  machine_detection?: "continue" | "hangup";
  length_timer?: number;
  ringing_timer?: number;
};

export type VonageVoiceFullApiSchemaActiveWebhook = boolean;

export type VonageVoiceFullApiSchemaUserId2 = string;

export type VonageVoiceFullApiSchemaUserLinks = {
  self?: {
  href?: string;
};
};

export type VonageVoiceFullApiSchemaConversationId = string;

export type VonageVoiceFullApiSchemaConversationTimestamp = {
  created?: string;
  updated?: string | null;
  destroyed?: string | null;
};

export type VonageVoiceFullApiSchemaConversationLinks = {
  self?: {
  href?: string;
};
};

export type VonageVoiceFullApiSchemaConversationState = "ACTIVE" | "INACTIVE" | "DELETED";

export type VonageVoiceFullApiSchemaConversationSequenceNumber = number;

export type VonageVoiceFullApiSchemaMemberId = string;

export type VonageVoiceFullApiSchemaMemberState = "INVITED" | "JOINED" | "LEFT" | "UNKNOWN";

export type VonageVoiceFullApiSchemaUserLite2 = {
  id?: VonageVoiceFullApiSchemaUserId;
  name?: VonageVoiceFullApiSchemaUserName2;
  display_name?: VonageVoiceFullApiSchemaUserDisplayName2;
  _links?: VonageVoiceFullApiSchemaUserLinks2;
};

export type VonageVoiceFullApiSchemaMemberHref = string;

export type VonageVoiceFullApiSchemaMemberChannelFrom = {
  type?: string;
};

export type VonageVoiceFullApiSchemaMemberTimestamp = {
  invited?: VonageVoiceFullApiSchemaTimestamp;
  joined?: VonageVoiceFullApiSchemaTimestamp;
  left?: VonageVoiceFullApiSchemaTimestamp;
};

export type VonageVoiceFullApiSchemaMemberInitiator = ({
  joined?: {
  is_system?: boolean;
  user_id?: VonageVoiceFullApiSchemaUserId;
  member_id?: VonageVoiceFullApiSchemaMemberId;
};
} | {
  invited?: {
  is_system?: boolean;
};
});

export type VonageVoiceFullApiSchemaMessageBodyText = {
  message_type?: "text";
  text?: string;
};

export type VonageVoiceFullApiSchemaMessageBodyImage = {
  message_type?: "image";
  image?: {
  url?: string;
};
};

export type VonageVoiceFullApiSchemaMessageBodyAudio = {
  message_type?: "audio";
  audio?: {
  url?: string;
};
};

export type VonageVoiceFullApiSchemaMessageBodyVideo = {
  message_type?: "video";
  video?: {
  url?: string;
};
};

export type VonageVoiceFullApiSchemaMessageBodyFile = {
  message_type?: "file";
  file?: {
  url?: string;
};
};

export type VonageVoiceFullApiSchemaMessageBodyTemplate = {
  message_type?: "template";
  template?: {
  name?: string;
  parameters?: ReadonlyArray<string>;
  whatsapp?: {
  policy?: string;
  locale?: string;
};
};
};

export type VonageVoiceFullApiSchemaMessageBodyCustom = {
  message_type?: "custom";
  custom?: {
  custom_field?: string;
};
};

export type VonageVoiceFullApiSchemaMessageBodyVcard = {
  message_type?: "vcard";
  vcard?: {
  url?: string;
};
  image?: {
  url?: string;
};
};

export type VonageVoiceFullApiSchemaMessageBodyLocation = {
  message_type?: "location";
  location?: {
  longitude?: string;
  latitude?: string;
  name?: string;
  address?: string;
};
};

export type VonageVoiceFullApiSchemaMessageBodyRandom = {
  message_type?: "random";
};

export type VonageVoiceFullApiSchemaAudiodtmfBodyDigitNoMethod = {
  digit: string;
  channel?: VonageVoiceFullApiSchemaEventChannel;
  dtmf_seq?: number;
};

export type VonageVoiceFullApiSchemaAudiodtmfBodyDigitsNoMethod = {
  digits: string;
  channel?: VonageVoiceFullApiSchemaEventChannel;
  dtmf_seq?: number;
};

export type VonageVoiceFullApiSchemaAudiodtmfBodyDigit = {
  digit: string;
  channel?: VonageVoiceFullApiSchemaEventChannel;
  dtmf_seq?: number;
  method: "in";
  duration: number;
};

export type VonageVoiceFullApiSchemaAudiodtmfBodyDigits = {
  digits: string;
  channel?: VonageVoiceFullApiSchemaEventChannel;
  dtmf_seq?: number;
  method: "in";
  duration: number;
};

export type VonageVoiceFullApiSchemaTimestampCreated = string;

export type VonageVoiceFullApiSchemaEmbeddedEventFrom = {
  from_user?: VonageVoiceFullApiSchemaEventUser;
  from_member?: {
  id?: string;
};
};

export type VonageVoiceFullApiSchemaEventLinks = {
  self?: {
  href?: string;
};
};

export type VonageVoiceFullApiSchemaEventChannel = {
  to?: VonageVoiceFullApiSchemaChannel;
  from?: VonageVoiceFullApiSchemaChannel;
  id?: string;
  type?: "app" | "phone" | "sip" | "websocket" | "vbc" | "whatsapp-voice";
  headers?: {};
};

export type VonageVoiceFullApiSchemaUserDisplayName2 = string | null;

export type VonageVoiceFullApiSchemaUserImageUrl2 = string;

export type VonageVoiceFullApiSchemaUserProperties2 = {
  custom_data?: {};
};

export type VonageVoiceFullApiSchemaEventMediaBoolean = {
  audio_settings?: {
  enabled?: boolean;
  earmuffed?: boolean;
  muted?: boolean;
};
  audio?: boolean;
};

export type VonageVoiceFullApiSchemaEventMedia = {
  audio_settings?: {
  enabled?: boolean;
  earmuffed?: boolean;
  muted?: boolean;
};
  audio?: {
  enabled?: boolean;
  earmuffed?: boolean;
  muted?: boolean;
};
};

export type VonageVoiceFullApiSchemaEventSmsChannel = {
  to?: {
  number?: string;
};
  from?: {
  number?: string;
};
  type?: "sms";
};

export type VonageVoiceFullApiSchemaEventMmsChannel = {
  to?: {
  number?: string;
};
  from?: {
  number?: string;
};
  type?: "mms";
};

export type VonageVoiceFullApiSchemaEventWhatsappChannel = {
  to?: {
  number?: string;
};
  from?: {
  number?: string;
};
  type?: "whatsapp";
};

export type VonageVoiceFullApiSchemaEventViberChannel = {
  to?: {
  number?: string;
};
  from?: {
  id?: string;
};
  type?: "viber";
};

export type VonageVoiceFullApiSchemaEventMessengerChannel = {
  to?: {
  id?: string;
};
  from?: {
  id?: string;
};
  type?: "viber";
};

export type VonageVoiceFullApiSchemaEventInvitedMember = {
  channel?: (VonageVoiceFullApiSchemaEventSmsChannel | VonageVoiceFullApiSchemaEventMmsChannel | VonageVoiceFullApiSchemaEventWhatsappChannel | VonageVoiceFullApiSchemaEventViberChannel | VonageVoiceFullApiSchemaEventMessengerChannel);
  media?: (VonageVoiceFullApiSchemaEventMediaBoolean | VonageVoiceFullApiSchemaEventMedia);
  member_id?: string;
  name?: string;
  state?: "INVITED" | "JOINED" | "LEFT" | "UNKNOWN";
  timestamp?: {
  invited?: string;
  left?: string;
  joined?: string;
};
  user_id?: string;
};

export type VonageVoiceFullApiSchemaEventAudioChannels = {
  id?: string;
  type?: "app" | "phone" | "sip" | "websocket" | "vbc" | "whatsapp-voice";
  to?: (VonageVoiceFullApiSchemaConversationNumbersPhone | VonageVoiceFullApiSchemaConversationNumbersSip | VonageVoiceFullApiSchemaConversationNumbersApp | VonageVoiceFullApiSchemaConversationNumbersVbc | VonageVoiceFullApiSchemaConversationNumbersWebsocket | VonageVoiceFullApiSchemaConversationNumbersWhatsappvoice);
  from?: (VonageVoiceFullApiSchemaConversationNumbersPhone | VonageVoiceFullApiSchemaConversationNumbersSip | VonageVoiceFullApiSchemaConversationNumbersApp | VonageVoiceFullApiSchemaConversationNumbersVbc | VonageVoiceFullApiSchemaConversationNumbersWebsocket | VonageVoiceFullApiSchemaConversationNumbersWhatsappvoice);
  headers?: {};
};

export type VonageVoiceFullApiSchemaTimestampResConversation = {
  created?: VonageVoiceFullApiSchemaTimestampCreated;
  updated?: VonageVoiceFullApiSchemaTimestampUpdated;
  destroyed?: VonageVoiceFullApiSchemaTimestampDestroyed;
};

export type VonageVoiceFullApiSchemaLegStatus = {
  status?: "started" | "ringing" | "answered";
};

export type VonageVoiceFullApiSchemaLegStatusComplete = {
  status?: "completed";
  successful?: boolean;
  reason?: "failed" | "busy" | "timeout" | "cancelled" | "rejected" | "ok" | "not_found" | "request_terminated" | "bad_extension" | "busy_here" | "request_timeout" | "temporarily_unavailable" | "forbidden" | "gone" | "bad_gateway" | "address_incomplete" | "server_internal_error" | "not_implemented" | "server_timeout" | "version_not_supported" | "service_unavailable" | "payment_required" | "banned_call_ended" | "flow_failed";
};

export type VonageVoiceFullApiSchemaLegStatusHistoryMember = {
  conversation_id?: string;
  member_id?: string;
  status?: "started" | "ringing" | "answered" | "completed" | "machine" | "failed" | "busy" | "timeout" | "cancelled" | "rejected";
  state?: (VonageVoiceFullApiSchemaLegStatusComplete | VonageVoiceFullApiSchemaLegStatus);
  date?: string;
};

export type VonageVoiceFullApiSchemaLegStatusHistoryKnocker = {
  knocker_id?: string;
  status?: "started" | "ringing" | "answered" | "completed" | "machine" | "failed" | "busy" | "timeout" | "cancelled" | "rejected";
  state?: (VonageVoiceFullApiSchemaLegStatusComplete | VonageVoiceFullApiSchemaLegStatus);
  date?: string;
};

export type VonageVoiceFullApiSchemaConversationMembers = {
  id?: VonageVoiceFullApiSchemaMemberId;
  state?: VonageVoiceFullApiSchemaMemberState;
};

export type VonageVoiceFullApiSchemaOwnednumber = {
  country?: VonageVoiceFullApiSchemaCountry;
  msisdn?: string;
  moHttpUrl?: string;
  type?: string;
  features?: ReadonlyArray<string>;
  limitations?: ReadonlyArray<VonageVoiceFullApiSchemaNumberLimitation>;
  messagesCallbackType?: string;
  messagesCallbackValue?: string;
  voiceCallbackType?: string;
  voiceCallbackValue?: string;
  app_id?: string;
};

export type VonageVoiceFullApiSchemaAvailablenumber = {
  country?: VonageVoiceFullApiSchemaCountry;
  msisdn?: string;
  type?: string;
  initialPrice?: string;
  cost?: string;
  features?: ReadonlyArray<string>;
  limitations?: ReadonlyArray<VonageVoiceFullApiSchemaNumberLimitation>;
};

export type VonageVoiceFullApiSchemaEndpointPhoneFrom = {
  type: string;
  number: string;
};

export type VonageVoiceFullApiSchemaAddressE164 = string;

export type VonageVoiceFullApiSchemaAddressSip = string;

export type VonageVoiceFullApiSchemaAddressWebsocket = string;

export type VonageVoiceFullApiSchemaEndpointPhoneTo2 = {
  type: string;
  number: VonageVoiceFullApiSchemaAddressE1642;
  dtmfAnswer?: string;
  shaken?: string;
};

export type VonageVoiceFullApiSchemaEndpointSip2 = {
  type: string;
  uri: VonageVoiceFullApiSchemaAddressSip2;
  headers?: {};
  standard_headers?: {
  "User-to-User": string;
};
};

export type VonageVoiceFullApiSchemaEndpointWebsocket2 = {
  type: string;
  uri?: VonageVoiceFullApiSchemaAddressWebsocket2;
  "content-type": "audio/l16;rate=8000" | "audio/l16;rate=16000" | "audio/l16;rate=24000";
  headers?: {
  customer_id?: string;
};
  authorization?: {
  type?: "vonage" | "custom";
  value?: string;
};
};

export type VonageVoiceFullApiSchemaEndpointVBCExtension2 = {
  type: string;
  extension: string;
};

export type VonageVoiceFullApiSchemaEndpointApp2 = {
  type: string;
  user: string;
};

export type VonageVoiceFullApiSchemaEndpointPhoneFrom2 = {
  type: string;
  number: string;
};

export type VonageVoiceFullApiSchemaUserLinks2 = {
  self?: {
  href?: string;
};
};

export type VonageVoiceFullApiSchemaTimestamp = string;

export type VonageVoiceFullApiSchemaEventUser = {
  id?: VonageVoiceFullApiSchemaUserId;
  name?: VonageVoiceFullApiSchemaUserName2;
  display_name?: VonageVoiceFullApiSchemaUserDisplayName2;
  image_url?: VonageVoiceFullApiSchemaUserImageUrl2;
  custom_data?: {};
};

export type VonageVoiceFullApiSchemaConversationNumbersPhone = {
  type: "phone";
  number: string;
};

export type VonageVoiceFullApiSchemaConversationNumbersSip = {
  type: "sip";
  uri: string;
  usenname?: string;
  password?: string;
};

export type VonageVoiceFullApiSchemaConversationNumbersApp = {
  type: "app";
  user?: string;
};

export type VonageVoiceFullApiSchemaConversationNumbersVbc = {
  type: "vbc";
  extension: string;
};

export type VonageVoiceFullApiSchemaConversationNumbersWebsocket = {
  type: "websocket";
  uri: string;
  content_type?: string;
};

export type VonageVoiceFullApiSchemaConversationNumbersWhatsappvoice = {
  type?: "whatsapp-voice";
  number?: string;
};

export type VonageVoiceFullApiSchemaTimestampUpdated = string;

export type VonageVoiceFullApiSchemaTimestampDestroyed = string;

export type VonageVoiceFullApiSchemaNumberLimitation = {
  feature: "MMS" | "SMS" | "VOICE";
  type: "INBOUND" | "OUTBOUND";
  reach: "DOMESTIC" | "INTERNATIONAL";
};

export type VonageVoiceFullApiSchemaAddressE1642 = string;

export type VonageVoiceFullApiSchemaAddressSip2 = string;

export type VonageVoiceFullApiSchemaAddressWebsocket2 = string;

export interface VonageVoiceFullApiOperationQueryMap {
  "voice_v1:getCalls": {
  status?: "started" | "ringing" | "answered" | "machine" | "completed" | "busy" | "cancelled" | "failed" | "rejected" | "timeout" | "unanswered";
  date_start?: string;
  date_end?: string;
  page_size?: number;
  record_index?: number;
  order?: "asc" | "desc";
  conversation_uuid?: VonageVoiceFullApiSchemaConversationUuid;
};
  "voice_v1:createCall": {};
  "voice_v1:getCall": {};
  "voice_v1:updateCall": {};
  "voice_v1:startStream": {};
  "voice_v1:stopStream": {};
  "voice_v1:startTalk": {};
  "voice_v1:stopTalk": {};
  "voice_v1:startDTMF": {};
  "voice_v1:Subscribe-DTMF": {};
  "voice_v1:Unsubscribe-DTMF": {};
  "voice_v2:createCall": {};
  "application_v2:listApplication": {
  page_size?: number;
  page?: number;
};
  "application_v2:createApplication": {};
  "application_v2:getApplication": {};
  "application_v2:updateApplication": {};
  "application_v2:deleteApplication": {};
  "application_v2:getUsers": {
  page_size?: VonageVoiceFullApiSchemaPageSize;
  order?: "asc" | "desc" | "ASC" | "DESC";
  cursor?: string;
  name?: VonageVoiceFullApiSchemaUserName;
};
  "application_v2:createUser": {};
  "application_v2:getUser": {};
  "application_v2:updateUser": {};
  "application_v2:deleteUser": {};
  "conversation_v1:listConversations": {
  date_start?: string;
  date_end?: string;
  page_size?: VonageVoiceFullApiSchemaPageSize2;
  order?: "asc" | "desc" | "ASC" | "DESC";
  cursor?: string;
};
  "conversation_v1:createConversation": {};
  "conversation_v1:retrieveConversation": {};
  "conversation_v1:replaceConversation": {};
  "conversation_v1:deleteConversation": {};
  "conversation_v1:getMembers": {
  page_size?: VonageVoiceFullApiSchemaPageSize2;
  order?: "asc" | "desc" | "ASC" | "DESC";
  cursor?: string;
};
  "conversation_v1:createMember": {};
  "conversation_v1:getMe": {};
  "conversation_v1:getMember": {};
  "conversation_v1:updateMember": {};
  "conversation_v1:createEvent": {};
  "conversation_v1:getEvents": {
  start_id?: string;
  end_id?: string;
  event_type?: "leg:status:update" | "audio:dtmf" | "audio:earmuff:off" | "audio:earmuff:on" | "audio:mute:off" | "audio:mute:on" | "audio:play:stop" | "audio:play:done" | "audio:play" | "audio:record:stop" | "audio:record:done" | "audio:record" | "audio:asr:done" | "audio:asr:record:done" | "audio:say:stop" | "audio:say:done" | "audio:say" | "audio:speaking:on" | "audio:speaking:off" | "message" | "message:submitted" | "message:rejected" | "message:undeliverable" | "message:seen" | "message:delivered" | "member:joined" | "member:left" | "member:media" | "member:message:status" | "member:invited" | "conversation:updated" | "event:delete" | "rtc:status" | "rtc:transfer" | "rtc:hangup" | "rtc:answered" | "rtc:ringing" | "rtc:answer" | "rtc:terminate" | "sip:status" | "sip:hangup" | "sip:answered" | "sip:machine" | "sip:amd_machine" | "sip:ringing";
  page_size?: VonageVoiceFullApiSchemaPageSize2;
  order?: "asc" | "desc" | "ASC" | "DESC";
  cursor?: string;
  exclude_deleted_events?: boolean;
};
  "conversation_v1:getEvent": {};
  "conversation_v1:deleteEvent": {};
  "conversation_v1:getuserConversations": {
  date_start?: string;
  page_size?: VonageVoiceFullApiSchemaPageSize2;
  order?: "asc" | "desc" | "ASC" | "DESC";
  cursor?: string;
  state?: "INVITED" | "JOINED" | "LEFT";
  order_by?: "created";
  include_custom_data?: boolean;
};
  "conversation_v1:talk": {};
  "conversation_v1:stopTalk": {};
  "conversation_v1:startStream": {};
  "conversation_v1:stopStream": {};
  "conversation_v1:recordConversation": {};
  "numbers:getOwnedNumbers": {
  application_id?: string;
  has_application?: boolean;
  country?: VonageVoiceFullApiSchemaCountry;
  pattern?: string;
  search_pattern?: 0 | 1 | 2;
  size?: number;
  index?: number;
};
  "numbers:getAvailableNumbers": {
  country: VonageVoiceFullApiSchemaCountry;
  type?: "landline" | "mobile-lvn" | "landline-toll-free";
  pattern?: string;
  search_pattern?: 0 | 1 | 2;
  features?: "SMS" | "VOICE" | "SMS,VOICE" | "MMS" | "SMS,MMS" | "VOICE,MMS" | "SMS,MMS,VOICE";
  size?: number;
  index?: number;
};
  "numbers:buyANumber": {};
  "numbers:cancelANumber": {};
  "numbers:updateANumber": {};
}

export interface VonageVoiceFullApiOperationQueryRequiredMap {
  "voice_v1:getCalls": false;
  "voice_v1:createCall": false;
  "voice_v1:getCall": false;
  "voice_v1:updateCall": false;
  "voice_v1:startStream": false;
  "voice_v1:stopStream": false;
  "voice_v1:startTalk": false;
  "voice_v1:stopTalk": false;
  "voice_v1:startDTMF": false;
  "voice_v1:Subscribe-DTMF": false;
  "voice_v1:Unsubscribe-DTMF": false;
  "voice_v2:createCall": false;
  "application_v2:listApplication": false;
  "application_v2:createApplication": false;
  "application_v2:getApplication": false;
  "application_v2:updateApplication": false;
  "application_v2:deleteApplication": false;
  "application_v2:getUsers": false;
  "application_v2:createUser": false;
  "application_v2:getUser": false;
  "application_v2:updateUser": false;
  "application_v2:deleteUser": false;
  "conversation_v1:listConversations": false;
  "conversation_v1:createConversation": false;
  "conversation_v1:retrieveConversation": false;
  "conversation_v1:replaceConversation": false;
  "conversation_v1:deleteConversation": false;
  "conversation_v1:getMembers": false;
  "conversation_v1:createMember": false;
  "conversation_v1:getMe": false;
  "conversation_v1:getMember": false;
  "conversation_v1:updateMember": false;
  "conversation_v1:createEvent": false;
  "conversation_v1:getEvents": false;
  "conversation_v1:getEvent": false;
  "conversation_v1:deleteEvent": false;
  "conversation_v1:getuserConversations": false;
  "conversation_v1:talk": false;
  "conversation_v1:stopTalk": false;
  "conversation_v1:startStream": false;
  "conversation_v1:stopStream": false;
  "conversation_v1:recordConversation": false;
  "numbers:getOwnedNumbers": false;
  "numbers:getAvailableNumbers": true;
  "numbers:buyANumber": false;
  "numbers:cancelANumber": false;
  "numbers:updateANumber": false;
}

export interface VonageVoiceFullApiOperationRequestBodyMap {
  "voice_v1:getCalls": never;
  "voice_v1:createCall": (VonageVoiceFullApiSchemaCreateCallRequestNcco | VonageVoiceFullApiSchemaCreateCallRequestAnswerUrl);
  "voice_v1:getCall": never;
  "voice_v1:updateCall": (VonageVoiceFullApiSchemaUpdateCallRequestTransferNcco | VonageVoiceFullApiSchemaUpdateCallRequestTransferAnswerUrl | VonageVoiceFullApiSchemaUpdateCallRequestHangup | VonageVoiceFullApiSchemaUpdateCallRequestMute | VonageVoiceFullApiSchemaUpdateCallRequestUnmute | VonageVoiceFullApiSchemaUpdateCallRequestEarmuff | VonageVoiceFullApiSchemaUpdateCallRequestUnearmuff);
  "voice_v1:startStream": VonageVoiceFullApiSchemaStartStreamRequest;
  "voice_v1:stopStream": never;
  "voice_v1:startTalk": VonageVoiceFullApiSchemaStartTalkRequest;
  "voice_v1:stopTalk": never;
  "voice_v1:startDTMF": VonageVoiceFullApiSchemaDTMFRequest;
  "voice_v1:Subscribe-DTMF": {
  event_url?: ReadonlyArray<string>;
};
  "voice_v1:Unsubscribe-DTMF": never;
  "voice_v2:createCall": (VonageVoiceFullApiSchemaCreateCallRequestNcco2 | VonageVoiceFullApiSchemaCreateCallRequestAnswerUrl2);
  "application_v2:listApplication": never;
  "application_v2:createApplication": {
  name: string;
  keys?: {
  public_key?: string;
};
  capabilities?: {
  voice?: {
  webhooks?: {
  answer_url?: {
  address?: string;
  http_method?: "GET" | "POST";
  connect_timeout?: number;
  socket_timeout?: number;
};
  fallback_answer_url?: {
  address?: string;
  http_method?: "GET" | "POST";
  connect_timeout?: number;
  socket_timeout?: number;
};
  event_url?: {
  address?: string;
  http_method?: "GET" | "POST";
  connect_timeout?: number;
  socket_timeout?: number;
};
};
  signed_callbacks?: boolean;
  conversations_ttl?: number;
  leg_persistence_time?: number;
  region?: VonageVoiceFullApiSchemaVoiceRegion;
};
  rtc?: {
  webhooks?: {
  event_url?: {
  address?: string;
  http_method?: "GET" | "POST";
};
};
  signed_callbacks?: boolean;
};
  messages?: {
  version?: string;
  webhooks?: {
  inbound_url?: {
  address?: string;
  http_method?: "POST";
};
  status_url?: {
  address?: string;
  http_method?: "POST";
};
};
};
  vbc?: {};
  network_apis?: {
  network_application_id?: string;
  redirect_uri?: string;
};
  meetings?: {
  webhooks?: {
  recording_changed?: {
  address?: string;
  http_method?: "POST";
};
  room_changed?: {
  address?: string;
  http_method?: "POST";
};
  session_changed?: {
  address?: string;
  http_method?: "POST";
};
};
};
  verify?: {
  webhooks?: {
  status_url?: {
  address?: string;
  http_method?: "POST";
};
};
};
  video?: VonageVoiceFullApiSchemaVideoResponse;
};
  privacy?: {
  improve_ai?: boolean;
};
};
  "application_v2:getApplication": never;
  "application_v2:updateApplication": {
  name: string;
  keys?: {
  public_key?: string;
};
  capabilities?: {
  voice?: {
  webhooks?: {
  answer_url?: {
  address?: string;
  http_method?: "GET" | "POST";
  connect_timeout?: number;
  socket_timeout?: number;
};
  fallback_answer_url?: {
  address?: string;
  http_method?: "GET" | "POST";
  connect_timeout?: number;
  socket_timeout?: number;
};
  event_url?: {
  address?: string;
  http_method?: "GET" | "POST";
  connect_timeout?: number;
  socket_timeout?: number;
};
};
  signed_callbacks?: boolean;
  conversations_ttl?: number;
  leg_persistence_time?: number;
  region?: VonageVoiceFullApiSchemaVoiceRegion;
};
  rtc?: {
  webhooks?: {
  event_url?: {
  address?: string;
  http_method?: "GET" | "POST";
};
};
  signed_callbacks?: boolean;
};
  messages?: {
  webhooks?: {
  inbound_url?: {
  address?: string;
  http_method?: "POST";
};
  status_url?: {
  address?: string;
  http_method?: "POST";
};
};
};
  vbc?: {};
  network_apis?: {
  network_application_id?: string;
  redirect_uri?: string;
};
  meetings?: {
  webhooks?: {
  recording_url?: {
  address?: string;
  http_method?: "POST";
};
  rooms_url?: {
  address?: string;
  http_method?: "POST";
};
  sessions_url?: {
  address?: string;
  http_method?: "POST";
};
};
};
  video?: VonageVoiceFullApiSchemaVideoResponse;
};
  privacy?: {
  improve_ai?: boolean;
};
};
  "application_v2:deleteApplication": never;
  "application_v2:getUsers": never;
  "application_v2:createUser": {
  name?: VonageVoiceFullApiSchemaUserName;
  display_name?: VonageVoiceFullApiSchemaUserDisplayName;
  image_url?: VonageVoiceFullApiSchemaUserImageUrl;
  properties?: VonageVoiceFullApiSchemaUserProperties;
  channels?: VonageVoiceFullApiSchemaUserChannels;
};
  "application_v2:getUser": never;
  "application_v2:updateUser": {
  name?: VonageVoiceFullApiSchemaUserName;
  display_name?: VonageVoiceFullApiSchemaUserDisplayName;
  image_url?: VonageVoiceFullApiSchemaUserImageUrl;
  channels?: VonageVoiceFullApiSchemaUserChannels;
};
  "application_v2:deleteUser": never;
  "conversation_v1:listConversations": never;
  "conversation_v1:createConversation": {
  name?: VonageVoiceFullApiSchemaConversationName;
  display_name?: VonageVoiceFullApiSchemaConversationDisplayName;
  image_url?: VonageVoiceFullApiSchemaConversationImageUrl;
  properties?: VonageVoiceFullApiSchemaConversationProperties;
  numbers?: VonageVoiceFullApiSchemaConversationNumbers;
  callback?: VonageVoiceFullApiSchemaConversationCallback;
};
  "conversation_v1:retrieveConversation": never;
  "conversation_v1:replaceConversation": {
  name?: VonageVoiceFullApiSchemaConversationName;
  display_name?: VonageVoiceFullApiSchemaConversationDisplayName;
  image_url?: VonageVoiceFullApiSchemaConversationImageUrl;
  properties?: VonageVoiceFullApiSchemaConversationProperties;
  numbers?: VonageVoiceFullApiSchemaConversationNumbers;
  callback?: VonageVoiceFullApiSchemaConversationCallback;
};
  "conversation_v1:deleteConversation": never;
  "conversation_v1:getMembers": never;
  "conversation_v1:createMember": {
  state: VonageVoiceFullApiSchemaMemberStateRequest;
  user: {
  id?: VonageVoiceFullApiSchemaUserId;
  name?: VonageVoiceFullApiSchemaUserName2;
};
  channel: VonageVoiceFullApiSchemaChannel;
  media?: VonageVoiceFullApiSchemaMedia;
  knocking_id?: VonageVoiceFullApiSchemaKnockerId;
  member_id_inviting?: VonageVoiceFullApiSchemaMemberIdInviting;
  from?: VonageVoiceFullApiSchemaMemberFrom;
};
  "conversation_v1:getMe": never;
  "conversation_v1:getMember": never;
  "conversation_v1:updateMember": ({
  state?: "joined";
  from?: string;
} | {
  state?: "left";
  from?: string;
  reason?: {
  code?: string;
  text?: string;
};
});
  "conversation_v1:createEvent": (VonageVoiceFullApiSchemaMessageEvent | VonageVoiceFullApiSchemaMessagesubmittedEvent | VonageVoiceFullApiSchemaMessagerejectedEvent | VonageVoiceFullApiSchemaMessageundeliverableEvent | VonageVoiceFullApiSchemaMessageseenEvent | VonageVoiceFullApiSchemaMessagedeliveredEvent | VonageVoiceFullApiSchemaEphemeralEvent | VonageVoiceFullApiSchemaCustomEvent | VonageVoiceFullApiSchemaAudioplayEvent | VonageVoiceFullApiSchemaAudioplaystopEvent | VonageVoiceFullApiSchemaAudiosayEvent | VonageVoiceFullApiSchemaAudiosaystopEvent | VonageVoiceFullApiSchemaAudiodtmfEvent | VonageVoiceFullApiSchemaAudiorecordEvent | VonageVoiceFullApiSchemaAudiorecordstopEvent | VonageVoiceFullApiSchemaAudiomuteonEvent | VonageVoiceFullApiSchemaAudiomuteoffEvent | VonageVoiceFullApiSchemaAudioearmuffonEvent | VonageVoiceFullApiSchemaAudioearmuffoffEvent);
  "conversation_v1:getEvents": never;
  "conversation_v1:getEvent": never;
  "conversation_v1:deleteEvent": never;
  "conversation_v1:getuserConversations": never;
  "conversation_v1:talk": {
  text?: string;
  language?: VonageVoiceFullApiSchemaLanguage;
  style?: VonageVoiceFullApiSchemaStyle;
  premium?: boolean;
  loop?: number;
  level?: string;
};
  "conversation_v1:stopTalk": never;
  "conversation_v1:startStream": VonageVoiceFullApiSchemaStartStreamRequest2;
  "conversation_v1:stopStream": never;
  "conversation_v1:recordConversation": {
  action: VonageVoiceFullApiSchemaAction;
  event_url?: VonageVoiceFullApiSchemaEventUrl;
  event_method?: VonageVoiceFullApiSchemaEventMethod;
  split?: VonageVoiceFullApiSchemaSplit;
  format?: VonageVoiceFullApiSchemaFormat;
  retention_ttl?: VonageVoiceFullApiSchemaRetentionTtl;
  timeout?: VonageVoiceFullApiSchemaTimeout;
  transcription?: VonageVoiceFullApiSchemaTranscription;
};
  "numbers:getOwnedNumbers": never;
  "numbers:getAvailableNumbers": never;
  "numbers:buyANumber": VonageVoiceFullApiSchemaNumberDetails;
  "numbers:cancelANumber": VonageVoiceFullApiSchemaNumberDetails;
  "numbers:updateANumber": VonageVoiceFullApiSchemaNumberDetailsUpdate;
}

export interface VonageVoiceFullApiOperationRequestBodyRequiredMap {
  "voice_v1:getCalls": false;
  "voice_v1:createCall": false;
  "voice_v1:getCall": false;
  "voice_v1:updateCall": true;
  "voice_v1:startStream": true;
  "voice_v1:stopStream": false;
  "voice_v1:startTalk": false;
  "voice_v1:stopTalk": false;
  "voice_v1:startDTMF": true;
  "voice_v1:Subscribe-DTMF": true;
  "voice_v1:Unsubscribe-DTMF": false;
  "voice_v2:createCall": false;
  "application_v2:listApplication": false;
  "application_v2:createApplication": true;
  "application_v2:getApplication": false;
  "application_v2:updateApplication": true;
  "application_v2:deleteApplication": false;
  "application_v2:getUsers": false;
  "application_v2:createUser": false;
  "application_v2:getUser": false;
  "application_v2:updateUser": false;
  "application_v2:deleteUser": false;
  "conversation_v1:listConversations": false;
  "conversation_v1:createConversation": false;
  "conversation_v1:retrieveConversation": false;
  "conversation_v1:replaceConversation": false;
  "conversation_v1:deleteConversation": false;
  "conversation_v1:getMembers": false;
  "conversation_v1:createMember": false;
  "conversation_v1:getMe": false;
  "conversation_v1:getMember": false;
  "conversation_v1:updateMember": false;
  "conversation_v1:createEvent": false;
  "conversation_v1:getEvents": false;
  "conversation_v1:getEvent": false;
  "conversation_v1:deleteEvent": false;
  "conversation_v1:getuserConversations": false;
  "conversation_v1:talk": false;
  "conversation_v1:stopTalk": false;
  "conversation_v1:startStream": true;
  "conversation_v1:stopStream": false;
  "conversation_v1:recordConversation": false;
  "numbers:getOwnedNumbers": false;
  "numbers:getAvailableNumbers": false;
  "numbers:buyANumber": true;
  "numbers:cancelANumber": true;
  "numbers:updateANumber": true;
}

export interface VonageVoiceFullApiOperationResponseMap {
  "voice_v1:getCalls": VonageVoiceFullApiSchemaGetCallsResponse;
  "voice_v1:createCall": VonageVoiceFullApiSchemaCreateCallResponse;
  "voice_v1:getCall": VonageVoiceFullApiSchemaGetCallResponse;
  "voice_v1:updateCall": void;
  "voice_v1:startStream": VonageVoiceFullApiSchemaStartStreamResponse;
  "voice_v1:stopStream": VonageVoiceFullApiSchemaStopStreamResponse;
  "voice_v1:startTalk": VonageVoiceFullApiSchemaStartTalkResponse;
  "voice_v1:stopTalk": VonageVoiceFullApiSchemaStopTalkResponse;
  "voice_v1:startDTMF": VonageVoiceFullApiSchemaDTMFResponse;
  "voice_v1:Subscribe-DTMF": void;
  "voice_v1:Unsubscribe-DTMF": void;
  "voice_v2:createCall": {};
  "application_v2:listApplication": VonageVoiceFullApiSchemaApplicationResponseCollection;
  "application_v2:createApplication": (VonageVoiceFullApiSchemaApplicationResponse & {
  keys?: {
  public_key?: string;
  private_key?: string;
};
});
  "application_v2:getApplication": VonageVoiceFullApiSchemaApplicationResponse;
  "application_v2:updateApplication": (VonageVoiceFullApiSchemaApplicationResponse & {
  keys?: {
  public_key?: string;
  private_key?: string;
};
});
  "application_v2:deleteApplication": {
  type?: string;
  title?: string;
  detail?: string;
  instance?: VonageVoiceFullApiSchemaInstance;
};
  "application_v2:getUsers": {
  page_size: VonageVoiceFullApiSchemaPageSize;
  _embedded: {
  users: ReadonlyArray<VonageVoiceFullApiSchemaUserLite>;
};
  _links: {
  first: {
  href?: string;
};
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
};
};
  "application_v2:createUser": VonageVoiceFullApiSchemaUser;
  "application_v2:getUser": VonageVoiceFullApiSchemaUser;
  "application_v2:updateUser": VonageVoiceFullApiSchemaUser;
  "application_v2:deleteUser": {
  title?: string;
  type?: string;
  code?: string;
  detail?: string;
  instance?: string;
  invalid_parameters?: ReadonlyArray<{
  name?: string;
  reason?: string;
}>;
};
  "conversation_v1:listConversations": {
  page_size: VonageVoiceFullApiSchemaPageSize2;
  _embedded: {
  conversations: ReadonlyArray<VonageVoiceFullApiSchemaConversationLite>;
};
  _links: {
  first?: {
  href?: string;
};
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
};
};
  "conversation_v1:createConversation": VonageVoiceFullApiSchemaConversation;
  "conversation_v1:retrieveConversation": VonageVoiceFullApiSchemaConversation;
  "conversation_v1:replaceConversation": VonageVoiceFullApiSchemaConversation;
  "conversation_v1:deleteConversation": {
  title?: string;
  type?: string;
  code?: string;
  detail?: string;
  instance?: string;
};
  "conversation_v1:getMembers": {
  page_size?: number;
  _embedded?: {
  members?: ReadonlyArray<VonageVoiceFullApiSchemaMemberLite>;
};
  _links?: {
  first?: {
  href?: string;
};
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
};
};
  "conversation_v1:createMember": VonageVoiceFullApiSchemaMember;
  "conversation_v1:getMe": VonageVoiceFullApiSchemaMember;
  "conversation_v1:getMember": (VonageVoiceFullApiSchemaMember & {
  state?: string;
});
  "conversation_v1:updateMember": VonageVoiceFullApiSchemaMember;
  "conversation_v1:createEvent": (VonageVoiceFullApiSchemaMessageEventResponse | VonageVoiceFullApiSchemaMessagesubmittedEventResponse | VonageVoiceFullApiSchemaMessagerejectedEventResponse | VonageVoiceFullApiSchemaMessageundeliverableEventResponse | VonageVoiceFullApiSchemaMessageseenEventResponse | VonageVoiceFullApiSchemaMessagedeliveredEventResponse | VonageVoiceFullApiSchemaCustomEventResponse | VonageVoiceFullApiSchemaEphemeralEventResponse | VonageVoiceFullApiSchemaAudioplayEventResponse | VonageVoiceFullApiSchemaAudioplaystopEventResponse | VonageVoiceFullApiSchemaAudiosayEventResponse | VonageVoiceFullApiSchemaAudiosaystopEventResponse | VonageVoiceFullApiSchemaAudiodtmfEventResponse | VonageVoiceFullApiSchemaAudiorecordEventResponse | VonageVoiceFullApiSchemaAudiorecordstopEventResponse | VonageVoiceFullApiSchemaAudiomuteonEventResponse | VonageVoiceFullApiSchemaAudiomuteoffEventResponse | VonageVoiceFullApiSchemaAudioearmuffonEventResponse | VonageVoiceFullApiSchemaAudioearmuffoffEventResponse);
  "conversation_v1:getEvents": {
  page_size?: VonageVoiceFullApiSchemaPageSize2;
  _links?: {
  first?: {
  href?: string;
};
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
};
  _embedded?: ReadonlyArray<(VonageVoiceFullApiSchemaMessageEventResponse | VonageVoiceFullApiSchemaMessagesubmittedEventResponse | VonageVoiceFullApiSchemaMessagerejectedEventResponse | VonageVoiceFullApiSchemaMessageundeliverableEventResponse | VonageVoiceFullApiSchemaMessageseenEventResponse | VonageVoiceFullApiSchemaMessagedeliveredEventResponse | VonageVoiceFullApiSchemaMembermessagestatusEventResponse | VonageVoiceFullApiSchemaCustomEventResponse | VonageVoiceFullApiSchemaAudioplayEventResponse | VonageVoiceFullApiSchemaAudioplaystopEventResponse | VonageVoiceFullApiSchemaAudioplaydoneEventResponse | VonageVoiceFullApiSchemaAudiosayEventResponse | VonageVoiceFullApiSchemaAudiosaystopEventResponse | VonageVoiceFullApiSchemaAudiosaydoneEventResponse | VonageVoiceFullApiSchemaAudiodtmfEventResponse | VonageVoiceFullApiSchemaAudiorecordEventResponse | VonageVoiceFullApiSchemaAudiorecordstopEventResponse | VonageVoiceFullApiSchemaAudiorecorddoneEventResponse | VonageVoiceFullApiSchemaAudiomuteonEventResponse | VonageVoiceFullApiSchemaAudiomuteoffEventResponse | VonageVoiceFullApiSchemaAudioearmuffonEventResponse | VonageVoiceFullApiSchemaAudioearmuffoffEventResponse | VonageVoiceFullApiSchemaAudiospeakingonEventResponse | VonageVoiceFullApiSchemaAudiospeakingoffEventResponse | VonageVoiceFullApiSchemaAudioasrdoneEventResponse | VonageVoiceFullApiSchemaAudioasrrecorddoneEventResponse | VonageVoiceFullApiSchemaMemberinvitedEventResponse | VonageVoiceFullApiSchemaMemberjoinedEventResponse | VonageVoiceFullApiSchemaMemberleftEventResponse | VonageVoiceFullApiSchemaMembermediaEventResponse | VonageVoiceFullApiSchemaConversationupdateEventResponse | VonageVoiceFullApiSchemaEventdeleteEventResponse | VonageVoiceFullApiSchemaSipstatusEventResponse | VonageVoiceFullApiSchemaSiphangupEventResponse | VonageVoiceFullApiSchemaSipansweredEventResponse | VonageVoiceFullApiSchemaSipmachineEventResponse | VonageVoiceFullApiSchemaSipamdmachineEventResponse | VonageVoiceFullApiSchemaSipringingEventResponse | VonageVoiceFullApiSchemaRtcstatusEventResponse | VonageVoiceFullApiSchemaRtctransferEventResponse | VonageVoiceFullApiSchemaRtchangupEventResponse | VonageVoiceFullApiSchemaRtcansweredEventResponse | VonageVoiceFullApiSchemaRtcringingEventResponse | VonageVoiceFullApiSchemaRtcanswerEventResponse | VonageVoiceFullApiSchemaLegstatusupdateEventResponse)>;
};
  "conversation_v1:getEvent": (VonageVoiceFullApiSchemaMessageEventResponse | VonageVoiceFullApiSchemaMessagesubmittedEventResponse | VonageVoiceFullApiSchemaMessagerejectedEventResponse | VonageVoiceFullApiSchemaMessageundeliverableEventResponse | VonageVoiceFullApiSchemaMessageseenEventResponse | VonageVoiceFullApiSchemaMessagedeliveredEventResponse | VonageVoiceFullApiSchemaCustomEventResponse | VonageVoiceFullApiSchemaAudioplayEventResponse | VonageVoiceFullApiSchemaAudioplaystopEventResponse | VonageVoiceFullApiSchemaAudioplaydoneEventResponse | VonageVoiceFullApiSchemaAudiosayEventResponse | VonageVoiceFullApiSchemaAudiosaystopEventResponse | VonageVoiceFullApiSchemaAudiosaydoneEventResponse | VonageVoiceFullApiSchemaAudiodtmfEventResponse | VonageVoiceFullApiSchemaAudiorecordEventResponse | VonageVoiceFullApiSchemaAudiorecordstopEventResponse | VonageVoiceFullApiSchemaAudiorecorddoneEventResponse | VonageVoiceFullApiSchemaAudiomuteonEventResponse | VonageVoiceFullApiSchemaAudiomuteoffEventResponse | VonageVoiceFullApiSchemaAudioearmuffonEventResponse | VonageVoiceFullApiSchemaAudioearmuffoffEventResponse | VonageVoiceFullApiSchemaAudiospeakingonEventResponse | VonageVoiceFullApiSchemaAudiospeakingoffEventResponse | VonageVoiceFullApiSchemaAudioasrdoneEventResponse | VonageVoiceFullApiSchemaAudioasrrecorddoneEventResponse | VonageVoiceFullApiSchemaMemberinvitedEventResponse | VonageVoiceFullApiSchemaMemberjoinedEventResponse | VonageVoiceFullApiSchemaMemberleftEventResponse | VonageVoiceFullApiSchemaMembermediaEventResponse | VonageVoiceFullApiSchemaMembermessagestatusEventResponse | VonageVoiceFullApiSchemaConversationupdateEventResponse | VonageVoiceFullApiSchemaEventdeleteEventResponse | VonageVoiceFullApiSchemaSipstatusEventResponse | VonageVoiceFullApiSchemaSiphangupEventResponse | VonageVoiceFullApiSchemaSipansweredEventResponse | VonageVoiceFullApiSchemaSipmachineEventResponse | VonageVoiceFullApiSchemaSipamdmachineEventResponse | VonageVoiceFullApiSchemaSipringingEventResponse | VonageVoiceFullApiSchemaRtcstatusEventResponse | VonageVoiceFullApiSchemaRtctransferEventResponse | VonageVoiceFullApiSchemaRtchangupEventResponse | VonageVoiceFullApiSchemaRtcansweredEventResponse | VonageVoiceFullApiSchemaRtcringingEventResponse | VonageVoiceFullApiSchemaRtcanswerEventResponse | VonageVoiceFullApiSchemaLegstatusupdateEventResponse);
  "conversation_v1:deleteEvent": {
  title?: string;
  type?: string;
  code?: string;
  detail?: string;
  instance?: string;
};
  "conversation_v1:getuserConversations": {
  page_size: VonageVoiceFullApiSchemaPageSize2;
  _embedded: {
  conversations: ReadonlyArray<VonageVoiceFullApiSchemaConversationUser>;
};
  _links: {
  first?: {
  href?: string;
};
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
};
};
  "conversation_v1:talk": {
  message?: string;
  uuid?: string;
};
  "conversation_v1:stopTalk": VonageVoiceFullApiSchemaStopTalkResponse2;
  "conversation_v1:startStream": VonageVoiceFullApiSchemaStartStreamResponse2;
  "conversation_v1:stopStream": VonageVoiceFullApiSchemaStopStreamResponse2;
  "conversation_v1:recordConversation": {
  title?: string;
  type?: string;
  code?: string;
  detail?: string;
  instance?: string;
  invalid_parameters?: ReadonlyArray<{
  name?: string;
  reason?: string;
}>;
};
  "numbers:getOwnedNumbers": VonageVoiceFullApiSchemaInboundNumbers;
  "numbers:getAvailableNumbers": VonageVoiceFullApiSchemaAvailableNumbers;
  "numbers:buyANumber": VonageVoiceFullApiSchemaResponse;
  "numbers:cancelANumber": VonageVoiceFullApiSchemaResponse;
  "numbers:updateANumber": VonageVoiceFullApiSchemaResponse;
}
