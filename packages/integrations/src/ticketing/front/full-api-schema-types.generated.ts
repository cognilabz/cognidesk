// Generated provider schema DTOs for FrontFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type FrontFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type FrontFullApiSchemaJsonValue = FrontFullApiSchemaJsonPrimitive | readonly FrontFullApiSchemaJsonValue[] | { readonly [key: string]: FrontFullApiSchemaJsonValue | undefined };

export type FrontFullApiSchemaAccountResponse = {
  _links: {
  self?: string;
  related?: {
  contacts?: string;
};
};
  id: string;
  name: string;
  logo_url: string | null;
  description: string | null;
  domains: ReadonlyArray<string>;
  external_id: string | null;
  custom_fields: FrontFullApiSchemaCustomFieldParameter;
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaAccount = {
  name?: string;
  description?: string;
  domains?: ReadonlyArray<string>;
  external_id?: string;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaAccountPatch = {
  name?: string;
  description?: string;
  domains?: ReadonlyArray<string>;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaContactIds = {
  contact_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaContactResponse = {
  _links?: {
  self?: string;
  related?: {
  notes?: string;
  conversations?: string;
  owner?: string;
};
};
  id?: string;
  name?: string;
  description?: string;
  avatar_url?: string;
  links?: ReadonlyArray<string>;
  groups?: ReadonlyArray<FrontFullApiSchemaContactListResponses>;
  lists?: ReadonlyArray<FrontFullApiSchemaContactListResponses>;
  handles?: ReadonlyArray<FrontFullApiSchemaContactHandle>;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
  is_private?: boolean;
};

export type FrontFullApiSchemaCustomFieldResponse = {
  _links: {
  self?: string;
};
  id: string;
  name: string;
  description: string;
  type: "string" | "boolean" | "datetime" | "number" | "teammate" | "inbox" | "enum";
  values?: ReadonlyArray<{
  value?: string;
  label?: string;
}>;
};

export type FrontFullApiSchemaAnalyticsExportRequest = (FrontFullApiSchemaAnalyticsMessagesExportColumns | FrontFullApiSchemaAnalyticsActivitiesExportsColumns);

export type FrontFullApiSchemaAnalyticsExportResponse = {
  _links: {
  self?: string;
};
  id: string;
  status: "running" | "done" | "too_big" | "failed";
  progress: number;
  url?: string;
  filename?: string;
  size?: number | null;
  created_at?: number;
  filters: FrontFullApiSchemaAnalyticsFilters;
};

export type FrontFullApiSchemaAnalyticsReportRequest = {
  start: number;
  end: number;
  timezone?: string;
  filters?: FrontFullApiSchemaAnalyticsFilters;
  metrics: ReadonlyArray<FrontFullApiSchemaAnalyticsMetricId>;
};

export type FrontFullApiSchemaAnalyticsReportResponse = {
  _links: {
  self?: string;
};
  uid: string;
  status: "running" | "done" | "failed";
  progress: number;
  metrics: ReadonlyArray<FrontFullApiSchemaAnalyticsScalar>;
};

export type FrontFullApiSchemaAppEvent = {
  event_type: string;
  app_object: {
  id?: string;
  ext_link?: string;
};
};

export type FrontFullApiSchemaChannelResponse = {
  _links: {
  self?: string;
  related?: {
  inbox?: string | null;
  owner?: string;
};
};
  id: string;
  name?: string;
  address?: string;
  type: "custom" | "facebook" | "gmail" | "google_play" | "imap" | "intercom" | "form" | "office365" | "layer_anon" | "smtp" | "talkdesk" | "truly" | "twilio" | "twilio_whatsapp" | "twitter" | "twitter_dm" | "yalo_wha" | "front_chat" | "front_mail";
  send_as?: string;
  settings: {
  undo_send_time?: 0 | 5 | 10 | 15 | 30 | 60;
  all_teammates_can_reply?: boolean;
};
  is_private: boolean;
  is_valid: boolean;
};

export type FrontFullApiSchemaUpdateChannel = {
  name?: string;
  inbox_id?: string;
  settings?: {
  undo_send_time?: 0 | 5 | 10 | 15 | 30 | 60;
  all_teammates_can_reply?: boolean;
  webhook_url?: string;
};
};

export type FrontFullApiSchemaUpdateChannel2 = {
  status?: "offline" | "ok";
};

export type FrontFullApiSchemaApplicationMessageTemplate = (FrontFullApiSchemaApplicationMessageTemplateEditBlob & {
  external_id?: string;
});

export type FrontFullApiSchemaApplicationMessageTemplateResponse = {
  template_id?: number;
};

export type FrontFullApiSchemaApplicationMessageTemplateEditBlob = {
  name?: string;
  blurb?: string;
  is_disabled?: boolean;
  status_name?: string;
  variable_mappings?: ReadonlyArray<{
  uid: string;
  name: string;
  type: string;
}>;
  template_preview?: string;
};

export type FrontFullApiSchemaCreateCall = (FrontFullApiSchemaCreateCallInbound | FrontFullApiSchemaCreateCallOutbound);

export type FrontFullApiSchemaUpdateCall = {
  occurred_at?: number;
  call_status: "queued" | "ringing" | "connected" | "hold" | "hangup" | "abandoned" | "missed" | "transferred";
  agent_email_address?: string;
};

export type FrontFullApiSchemaAddCallSummary = {
  content: string;
};

export type FrontFullApiSchemaAddCallTranscript = {
  lines: ReadonlyArray<FrontFullApiSchemaTranscriptLine>;
};

export type FrontFullApiSchemaCreateDraft = {
  author_id?: string;
  to?: ReadonlyArray<string>;
  cc?: ReadonlyArray<string>;
  bcc?: ReadonlyArray<string>;
  subject?: string;
  body: string;
  quote_body?: string;
  attachments?: ReadonlyArray<string>;
  mode?: "private" | "shared";
  signature_id?: string;
  should_add_default_signature?: boolean;
};

export type FrontFullApiSchemaMessageResponse = {
  _links?: {
  self?: string;
  related?: {
  conversation?: string;
  message_replied_to?: string;
  message_seen?: string;
};
};
  id?: string;
  message_uid?: string;
  type?: "call" | "custom" | "email" | "facebook" | "front_chat" | "googleplay" | "intercom" | "internal" | "phone-call" | "sms" | "tweet" | "tweet_dm" | "whatsapp" | "yalo_wha";
  is_inbound?: boolean;
  draft_mode?: "shared" | "private";
  error_type?: string;
  version?: string;
  created_at?: number;
  subject?: string;
  blurb?: string;
  author?: FrontFullApiSchemaTeammateResponse;
  recipients?: ReadonlyArray<FrontFullApiSchemaRecipientResponse>;
  body?: string;
  text?: string;
  attachments?: ReadonlyArray<FrontFullApiSchemaAttachment>;
  signature?: FrontFullApiSchemaSignatureResponse;
  metadata?: {
  intercom_url?: string;
  duration?: number;
  have_been_answered?: boolean;
  external_id?: string;
  twitter_url?: string;
  is_retweet?: boolean;
  have_been_retweeted?: boolean;
  have_been_favorited?: boolean;
  thread_ref?: string;
  headers?: {};
  chat_visitor_url?: string;
};
};

export type FrontFullApiSchemaInboundMessage = {
  sender: {
  name?: string;
  handle: string;
  email?: string;
};
  subject?: string;
  body: string;
  metadata: {
  external_id: string;
  external_conversation_id: string;
  referenced_message_external_id?: string;
};
  delivered_at?: number;
  attachments?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaCustomMessage = {
  sender: {
  contact_id?: string;
  name?: string;
  handle: string;
};
  subject?: string;
  body: string;
  body_format?: "html" | "markdown";
  metadata?: {
  thread_ref?: string;
  headers?: {};
};
  attachments?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaOutboundMessage = {
  to: ReadonlyArray<string>;
  cc?: ReadonlyArray<string>;
  bcc?: ReadonlyArray<string>;
  sender_name?: string;
  subject?: string;
  author_id?: string;
  body: string;
  text?: string;
  options?: {
  tag_ids?: ReadonlyArray<string>;
  archive?: boolean;
};
  attachments?: ReadonlyArray<string>;
  signature_id?: string;
  should_add_default_signature?: boolean;
};

export type FrontFullApiSchemaOutboundMessage2 = {
  sender_name?: string;
  to: ReadonlyArray<{
  name?: string;
  handle: string;
  email?: string;
}>;
  subject?: string;
  author_id?: string;
  body: string;
  metadata: {
  external_id: string;
  external_conversation_id: string;
  referenced_message_external_id?: string;
};
  delivered_at?: number;
  attachments?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaCommentResponse = {
  _links: {
  self?: string;
  related?: {
  conversation?: string;
  mentions?: string;
  comment_replied_to?: string | null;
};
};
  id: string;
  author: FrontFullApiSchemaTeammateResponse;
  body: string;
  posted_at?: number;
  attachments: ReadonlyArray<FrontFullApiSchemaAttachment>;
  is_pinned: boolean;
};

export type FrontFullApiSchemaUpdateComment = {
  body?: string;
  is_pinned?: boolean;
};

export type FrontFullApiSchemaTeammateResponse = {
  _links: {
  self?: string;
  related?: {
  inboxes?: string;
  conversations?: string;
  botSource?: string;
};
};
  id: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
  is_available: boolean;
  is_blocked: boolean;
  type: "user" | "visitor" | "ai" | "api" | "application" | "bulk_reply" | "csat" | "integration" | "macro" | "rule" | "smart_csat";
  custom_fields: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaCreateComment = {
  author_id?: string;
  body: string;
  is_pinned?: boolean;
  attachments?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaRuleResponse = {
  _links: {
  self?: string;
  related?: {
  owner?: string | null;
};
};
  id: string;
  name: string;
  actions: ReadonlyArray<string>;
  is_private: boolean;
};

export type FrontFullApiSchemaStatusResponse = {
  _links: {
  self?: string;
};
  id: string;
  name: string;
  category: "open" | "waiting" | "resolved";
  description: string | null;
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaTagResponse = {
  _links: {
  self?: string;
  related?: {
  conversations?: string;
  owner?: string | null;
  parent_tag?: string | null;
  children?: string | null;
};
};
  id: string;
  name: string;
  description: string | null;
  highlight: string | null;
  is_private: boolean;
  is_visible_in_conversation_lists: boolean;
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaCreateTag = {
  name: string;
  description?: string;
  highlight?: "grey" | "pink" | "red" | "orange" | "yellow" | "green" | "light-blue" | "blue" | "purple";
  is_visible_in_conversation_lists?: boolean;
};

export type FrontFullApiSchemaContactListResponses = {
  _links?: {
  self?: string;
  related?: {
  contacts?: string;
  owner?: string;
};
};
  id?: string;
  name?: string;
  is_private?: boolean;
};

export type FrontFullApiSchemaCreateContactList = {
  name: string;
};

export type FrontFullApiSchemaRemoveContactsFromList = {
  contact_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaAddContactsToList = {
  contact_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaCreateContact = (FrontFullApiSchemaContact & {
  handles?: ReadonlyArray<FrontFullApiSchemaContactHandle>;
});

export type FrontFullApiSchemaContact = {
  name?: string;
  description?: string;
  avatar?: string;
  links?: ReadonlyArray<string>;
  group_names?: ReadonlyArray<string>;
  list_names?: ReadonlyArray<string>;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaConversationResponse = {
  _links: {
  self?: string;
  related?: {
  events?: string;
  followers?: string;
  messages?: string;
  comments?: string;
  inboxes?: string;
  last_message?: string;
};
};
  id: string;
  type: "conversation" | "discussion" | "task";
  subject: string;
  status: "archived" | "unassigned" | "deleted" | "assigned";
  status_id?: string;
  status_category?: "open" | "waiting" | "resolved";
  ticket_ids: ReadonlyArray<string>;
  assignee: FrontFullApiSchemaTeammateResponse;
  recipient: FrontFullApiSchemaRecipientResponse;
  tags: ReadonlyArray<FrontFullApiSchemaTagResponse>;
  links: ReadonlyArray<FrontFullApiSchemaLinkResponse>;
  custom_fields: FrontFullApiSchemaCustomFieldParameter;
  created_at?: number;
  updated_at?: number;
  waiting_since?: number;
  is_private: boolean;
  scheduled_reminders: ReadonlyArray<FrontFullApiSchemaReminder>;
  description?: string | null;
  metadata: {
  external_conversation_ids?: ReadonlyArray<string>;
};
};

export type FrontFullApiSchemaDeleteContactHandle = (FrontFullApiSchemaContactHandle & {
  force?: boolean;
});

export type FrontFullApiSchemaContactHandle = {
  handle: string;
  source: "twitter" | "email" | "phone" | "facebook" | "intercom" | "front_chat" | "custom";
};

export type FrontFullApiSchemaContactNoteResponses = {
  _links: {
  related?: {
  author?: string;
  owner?: string | null;
};
};
  author: FrontFullApiSchemaTeammateResponse;
  body: string;
  created_at?: number;
};

export type FrontFullApiSchemaCreateContactNote = {
  author_id: string;
  body: string;
};

export type FrontFullApiSchemaMergeContacts = {
  target_contact_id?: string;
  contact_ids: ReadonlyArray<string>;
};

export type FrontFullApiSchemaCreateConversation = {
  type: "discussion" | "task";
  inbox_id?: string;
  teammate_ids?: ReadonlyArray<string>;
  subject: string;
  comment?: {
  author_id?: string;
  body: string;
  attachments?: ReadonlyArray<string>;
};
  description?: string;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaUpdateConversation = {
  assignee_id?: string;
  inbox_id?: string;
  status?: "archived" | "open" | "deleted" | "spam";
  status_id?: string;
  tag_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  description?: string | null;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaUpdateConversationAssignee = {
  assignee_id: string;
};

export type FrontFullApiSchemaReplyDraft = (FrontFullApiSchemaCreateDraft & {
  channel_id?: string;
});

export type FrontFullApiSchemaEventResponse = {
  _links?: {
  self?: string;
};
  id?: string;
  type?: "assign" | "unassign" | "archive" | "reopen" | "trash" | "restore" | "reminder" | "comment" | "mention" | "inbound" | "outbound" | "out_reply" | "move" | "forward" | "tag" | "untag" | "sending_error" | "message_bounce_error" | "conversations_merged" | "link_added" | "link_removed" | "custom_field_updated" | "macro_triggered" | "topic_identified" | "ticket_status_update" | "call_started" | "call_abandoned" | "call_queued" | "call_on_hold" | "call_resumed" | "call_connected" | "call_missed" | "call_hangup" | "call_transferred";
  emitted_at?: number;
  source?: {
  _meta?: {
  type?: "api" | "oauth_client" | "rule" | "teammate" | "imap" | "gmail" | "reminder" | "inboxes" | "recipient";
};
  data?: (FrontFullApiSchemaRuleResponse | FrontFullApiSchemaTeammateResponse | ReadonlyArray<FrontFullApiSchemaInboxResponse>);
};
  target?: {
  _meta?: {
  type?: "teammate" | "inboxes" | "message" | "comment" | "tag" | "deleted_conversation_ids" | "link" | "custom_field";
};
  data?: (FrontFullApiSchemaTeammateResponse | FrontFullApiSchemaInboxResponse | FrontFullApiSchemaTagResponse | FrontFullApiSchemaCommentResponse | FrontFullApiSchemaMessageResponse | FrontFullApiSchemaLinkResponse);
};
  conversation?: FrontFullApiSchemaConversationResponse;
};

export type FrontFullApiSchemaInboxResponse = {
  _links?: {
  self?: string;
  related?: {
  teammates?: string;
  conversations?: string;
  channels?: string;
  owner?: string;
};
};
  id?: string;
  name?: string;
  is_private?: boolean;
  is_public?: boolean;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaOutboundReplyMessage = {
  to?: ReadonlyArray<string>;
  cc?: ReadonlyArray<string>;
  bcc?: ReadonlyArray<string>;
  sender_name?: string;
  subject?: string;
  author_id?: string;
  channel_id?: string;
  body: string;
  text?: string;
  quote_body?: string;
  options?: {
  tag_ids?: ReadonlyArray<string>;
  archive?: boolean;
};
  attachments?: ReadonlyArray<string>;
  signature_id?: string;
  should_add_default_signature?: boolean;
};

export type FrontFullApiSchemaUpdateConversationReminders = {
  teammate_id: string;
  scheduled_at: number;
  status_id?: string;
};

export type FrontFullApiSchemaTagIds = {
  tag_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaDeleteDraft = {
  version: string;
};

export type FrontFullApiSchemaEditDraft = (FrontFullApiSchemaReplyDraft & {
  version?: string;
  mode?: "shared";
});

export type FrontFullApiSchemaCreateInbox = {
  name: string;
  teammate_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  is_public?: boolean;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaCreateChannel = {
  name?: string;
  settings?: {
  undo_send_time?: 0 | 5 | 10 | 15 | 30 | 60;
  all_teammates_can_reply?: boolean;
  webhook_url?: string;
  sid?: string;
  auth_token?: string;
};
  type: "custom" | "smtp" | "twilio";
  send_as?: string;
};

export type FrontFullApiSchemaImportMessage = {
  sender: {
  author_id?: string;
  name?: string;
  handle: string;
};
  to: ReadonlyArray<string>;
  cc?: ReadonlyArray<string>;
  bcc?: ReadonlyArray<string>;
  subject?: string;
  body: string;
  body_format?: "html" | "markdown";
  external_id: string;
  created_at: number;
  type?: "email" | "sms" | "intercom" | "custom";
  assignee_id?: string;
  tags?: ReadonlyArray<string>;
  conversation_id?: string;
  metadata: {
  thread_ref?: string;
  is_inbound: boolean;
  is_archived?: boolean;
  should_skip_rules?: boolean;
};
  attachments?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaTeammateIds = {
  teammate_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaKnowledgeBaseArticleSlimResponse = {
  _links: {
  self?: string;
  related?: {
  knowledge_base?: string;
  category?: string | null;
  content?: string;
};
};
  id: string;
  slug: string;
  locales: ReadonlyArray<string>;
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaKnowledgeBaseArticleResponse = {
  _links: {
  self?: string;
  related?: {
  knowledge_base?: string;
  category?: string;
  last_editor?: string;
};
};
  id: string;
  slug: string;
  name: string;
  status: string;
  keywords: ReadonlyArray<string>;
  content: string;
  locale: string;
  attachments: ReadonlyArray<FrontFullApiSchemaAttachment>;
  last_edited_at?: number;
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaKnowledgeBaseArticlePatch = {
  author_id?: string;
  subject?: string;
  content?: string;
  status?: "draft" | "published";
};

export type FrontFullApiSchemaKnowledgeBaseCategorySlimResponse = {
  _links: {
  self?: string;
  related?: {
  knowledge_base?: string;
  parent_category?: string | null;
  articles?: string;
};
};
  id: string;
  slug: string;
  is_hidden: boolean;
  locales: ReadonlyArray<string>;
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaKnowledgeBaseCategoryResponse = {
  _links: {
  self?: string;
  related?: {
  knowledge_base?: string;
  parent_category?: string | null;
  articles?: string;
};
};
  id: string;
  name: string | null;
  description: string | null;
  is_hidden: boolean;
  locale: "fr" | "en";
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaKnowledgeBaseCategoryPatch = {
  name?: string;
  description?: string;
};

export type FrontFullApiSchemaKnowledgeBaseSlimResponse = {
  _links: {
  self?: string;
  related?: {
  articles?: string;
  categories?: string;
};
};
  id: string;
  type: "internal" | "external";
  locales: ReadonlyArray<string>;
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaKnowledgeBaseCreate = {
  name: string;
  type?: "internal" | "external";
};

export type FrontFullApiSchemaKnowledgeBaseResponse = {
  _links: {
  self?: string;
  related?: {
  articles?: string;
  categories?: string;
};
};
  id: string;
  name: string;
  status: "published" | "unpublished";
  type: "internal" | "external";
  locale: "fr" | "en";
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaKnowledgeBaseArticleCreate = {
  category_id?: string;
  author_id?: string;
  subject?: string;
  content?: string;
  status?: "draft" | "published";
};

export type FrontFullApiSchemaKnowledgeBaseCategoryCreate = {
  parent_category_id?: string;
  name: string;
  description?: string;
};

export type FrontFullApiSchemaKnowledgeBasePatch = {
  name?: string;
};

export type FrontFullApiSchemaLinkResponse = {
  _links: {
  self?: string;
};
  id: string;
  name: string;
  type: string;
  external_url: string;
  custom_fields: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaCreateLink = {
  name?: string;
  external_url?: string;
  pattern?: string;
};

export type FrontFullApiSchemaUpdateLink = {
  name?: string;
};

export type FrontFullApiSchemaIdentityResponse = {
  _links: {
  self?: string;
};
  id: string;
  name: string;
};

export type FrontFullApiSchemaMessageTemplateFolderResponse = {
  _links: {
  self?: string;
  related?: {
  owner?: string | null;
  parent_folder?: string | null;
  child_folders?: string | null;
  child_answers?: string | null;
};
};
  id: string;
  name: string;
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaCreateMessageTemplateFolder = {
  name: string;
  parent_folder_id?: string;
};

export type FrontFullApiSchemaUpdateMessageTemplateFolder = {
  name?: string;
  parent_folder_id?: string;
};

export type FrontFullApiSchemaCreateMessageTemplateFolderAsChild = {
  name: string;
};

export type FrontFullApiSchemaCreateMessageTemplateAsChild = {
  name: string;
  subject?: string;
  body: string;
  inbox_ids?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaMessageTemplateResponse = {
  _links: {
  self?: string;
  related?: {
  owner?: string | null;
  parent_folder?: string | null;
};
};
  id: string;
  name: string;
  subject: string | null;
  body: string;
  attachments: ReadonlyArray<FrontFullApiSchemaAttachment>;
  is_available_for_all_inboxes: boolean;
  inbox_ids: ReadonlyArray<string> | null;
};

export type FrontFullApiSchemaCreateSharedMessageTemplate = {
  name: string;
  subject?: string;
  body: string;
  folder_id?: string;
  inbox_ids?: ReadonlyArray<string>;
  attachments?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaSeenReceiptResponse = {
  _links: {
  self?: string;
  related?: {
  message?: string;
};
};
  first_seen_at: string;
  seen_by: FrontFullApiSchemaContactHandle;
};

export type FrontFullApiSchemaShiftResponse = {
  _links: {
  self?: string;
  related?: {
  teammates?: string;
  owner?: string;
};
};
  id: string;
  name: string;
  color: "black" | "grey" | "pink" | "purple" | "blue" | "teal" | "green" | "yellow" | "orange" | "red";
  timezone: string;
  times: FrontFullApiSchemaShiftIntervals;
  created_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaCreateShift = {
  name: string;
  color: "black" | "grey" | "pink" | "purple" | "blue" | "teal" | "green" | "yellow" | "orange" | "red";
  timezone: string;
  times: FrontFullApiSchemaShiftIntervals;
  teammate_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaUpdateShift = {
  name?: string;
  color?: "black" | "grey" | "pink" | "purple" | "blue" | "teal" | "green" | "yellow" | "orange" | "red";
  timezone?: string;
  times?: FrontFullApiSchemaShiftIntervals;
  teammate_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaSignatureResponse = {
  _links: {
  self?: string;
  related?: {
  owner?: string;
};
};
  id: string;
  name: string | null;
  body: string;
  sender_info: string | null;
  is_visible_for_all_teammate_channels: boolean;
  is_default: boolean;
  is_private: boolean;
  channel_ids: ReadonlyArray<string> | null;
};

export type FrontFullApiSchemaUpdateSignature = {
  name?: string;
  sender_info?: string;
  body?: string;
  is_visible_for_all_teammate_channels?: boolean;
  is_default?: boolean;
  channel_ids?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaUpdateTag = {
  name?: string;
  description?: string;
  highlight?: "grey" | "pink" | "red" | "orange" | "yellow" | "green" | "light-blue" | "blue" | "purple";
  parent_tag_id?: string;
  is_visible_in_conversation_lists?: boolean;
};

export type FrontFullApiSchemaTeammateGroupResponse = {
  _links: {
  self?: string;
  related?: {
  teammates?: string;
  teams?: string;
  inboxes?: string;
};
};
  id: string;
  name: string;
  description: string | null;
  is_managed_by_scim: boolean;
  permissions: {
  contacts?: {
  access?: string;
  contact_list_ids?: ReadonlyArray<string>;
};
};
};

export type FrontFullApiSchemaCreateTeammateGroup = {
  name: string;
  description?: string;
  permissions?: {
  contacts?: {
  access: string;
  contact_group_ids?: ReadonlyArray<string>;
  contact_list_ids?: ReadonlyArray<string>;
};
};
};

export type FrontFullApiSchemaUpdateTeammateGroup = {
  name?: string;
  description?: string;
  permissions?: {
  contacts?: {
  access: string;
  contact_group_ids?: ReadonlyArray<string>;
  contact_list_ids?: ReadonlyArray<string>;
};
};
};

export type FrontFullApiSchemaInboxIds = {
  inbox_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaTeamIds = {
  team_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaTeamPreviewResponse = {
  _links: {
  self?: string;
};
  id: string;
  name: string;
};

export type FrontFullApiSchemaUpdateTeammate = {
  username?: string;
  first_name?: string;
  last_name?: string;
  is_available?: boolean;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaCreatePrivateMessageTemplate = {
  name: string;
  subject?: string;
  body: string;
  folder_id?: string;
};

export type FrontFullApiSchemaCreatePrivateInbox = {
  name: string;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaCreatePrivateSignature = {
  name: string;
  sender_info?: string;
  body: string;
  is_default?: boolean;
  channel_ids?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaTimeOffResponse = {
  _links: {
  self?: string;
  related?: {
  teammate?: string;
};
};
  id: string;
  name: string;
  start_at: number;
  end_at?: number | null;
  created_at?: number;
  updated_at?: number;
  auto_responder: {
  is_enabled?: boolean;
  channel_ids?: ReadonlyArray<string>;
  is_contacts_only?: boolean;
  body?: string;
};
};

export type FrontFullApiSchemaCreateTimeOff = {
  name: string;
  start_at: number;
  end_at?: number | null;
  auto_responder?: {
  body?: string;
  is_enabled?: boolean;
  is_contacts_only?: boolean;
  channel_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
};
};

export type FrontFullApiSchemaTeamResponse = {
  _links: {
  self?: string;
};
  id: string;
  name: string;
  inboxes: ReadonlyArray<FrontFullApiSchemaInboxResponse>;
  members: ReadonlyArray<FrontFullApiSchemaTeammateResponse>;
};

export type FrontFullApiSchemaCreateTeamInbox = {
  name: string;
  teammate_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  is_public?: boolean;
  custom_fields?: FrontFullApiSchemaCustomFieldParameter;
};

export type FrontFullApiSchemaCreateSharedSignature = {
  name: string;
  sender_info?: string;
  body: string;
  is_visible_for_all_teammate_channels?: boolean;
  is_default?: boolean;
  channel_ids?: ReadonlyArray<string>;
};

export type FrontFullApiSchemaSharedViewResponse = {
  _links: {
  self?: string;
  related?: {
  owner?: string | null;
};
};
  id: string;
  name: string;
  highlight: string | null;
  inbox_ids: ReadonlyArray<string>;
  tag_ids: ReadonlyArray<string>;
  not_tag_ids: ReadonlyArray<string>;
  no_tags: boolean;
  assignee_ids: ReadonlyArray<string>;
  not_assignee_ids: ReadonlyArray<string>;
};

export type FrontFullApiSchemaCreateView = {
  name: string;
  inbox_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
  tag_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  not_tag_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  no_tags?: boolean;
  assignee_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  not_assignee_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  highlight?: string;
};

export type FrontFullApiSchemaUpdateTimeOff = {
  name?: string;
  start_at?: number;
  end_at?: number | null;
  auto_responder?: {
  body?: string;
  is_enabled?: boolean;
  is_contacts_only?: boolean;
  channel_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
};
};

export type FrontFullApiSchemaUpdateView = {
  name?: string;
  inbox_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  tag_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  not_tag_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  no_tags?: boolean;
  assignee_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  not_assignee_ids?: ReadonlyArray<FrontFullApiSchemaResourceID>;
  highlight?: string;
};

export type FrontFullApiSchemaCustomFieldParameter = {};

export type FrontFullApiSchemaResourceID = string;

export type FrontFullApiSchemaAnalyticsMessagesExportColumns = {
  columns: ReadonlyArray<FrontFullApiSchemaAnalyticsMessagesColumns>;
};

export type FrontFullApiSchemaAnalyticsActivitiesExportsColumns = {
  columns: ReadonlyArray<(FrontFullApiSchemaAnalyticsActivitiesColumns | FrontFullApiSchemaAnalyticsActivitiesParameterizedColumns | FrontFullApiSchemaAnalyticsActivitiesSmartQAParameterizedColumn | FrontFullApiSchemaAnalyticsActivitiesNumericParameterizedColumn)>;
};

export type FrontFullApiSchemaAnalyticsFilters = (FrontFullApiSchemaTagIds | FrontFullApiSchemaTeammateIds | FrontFullApiSchemaChannelIds | FrontFullApiSchemaInboxIds | FrontFullApiSchemaTeamIds | FrontFullApiSchemaAccountIds);

export type FrontFullApiSchemaAnalyticsMetricId = "avg_csat_survey_response" | "avg_first_response_time" | "avg_handle_time" | "avg_replies_to_resolution" | "avg_resolution_time" | "avg_response_time" | "avg_sla_breach_time" | "avg_total_reply_time" | "new_segments_count" | "num_active_segments_full" | "num_archived_segments" | "num_archived_segments_with_reply" | "num_csat_survey_response" | "num_messages_received" | "num_messages_sent" | "num_sla_breach" | "pct_csat_survey_satisfaction" | "pct_resolved_on_first_reply" | "pct_tagged_conversations" | "num_closed_segments" | "num_open_segments_start" | "num_open_segments_end" | "num_resolved_segments" | "num_unresolved_active_segments" | "num_workload_segments";

export type FrontFullApiSchemaAnalyticsScalar = {
  id: FrontFullApiSchemaAnalyticsMetricId;
  type: FrontFullApiSchemaAnalyticsScalarType;
  value: FrontFullApiSchemaAnalyticsScalarValue;
};

export type FrontFullApiSchemaCreateCallInbound = {
  external_call_id: string;
  initial_status: "queued" | "ringing";
  direction: "inbound";
  from: FrontFullApiSchemaCallParty;
  started_at?: number;
  parent_external_call_id: string;
  agent_email_address?: string;
};

export type FrontFullApiSchemaCreateCallOutbound = {
  external_call_id: string;
  initial_status: "queued" | "ringing";
  direction: "outbound";
  to: FrontFullApiSchemaCallParty;
  started_at?: number;
  parent_external_call_id: string;
  agent_email_address?: string;
};

export type FrontFullApiSchemaTranscriptLine = {
  speaker_name: string;
  content: string;
  start_time_seconds: number;
  speaker_type: "internal" | "external";
};

export type FrontFullApiSchemaRecipientResponse = {
  _links: {
  related?: {
  contact?: string | null;
};
};
  name: string | null;
  handle: string;
  role: "from" | "to" | "cc" | "bcc" | "reply-to";
};

export type FrontFullApiSchemaAttachment = {
  id: string;
  filename: string;
  url: string;
  content_type: string;
  size: number;
  metadata: {
  is_inline?: boolean;
  cid?: string;
};
};

export type FrontFullApiSchemaReminder = {
  _links: {
  related?: {
  owner?: string;
};
};
  created_at?: number;
  scheduled_at?: number;
  updated_at?: number;
};

export type FrontFullApiSchemaShiftIntervals = {
  mon?: FrontFullApiSchemaShiftInterval;
  tue?: FrontFullApiSchemaShiftInterval;
  wed?: FrontFullApiSchemaShiftInterval;
  thu?: FrontFullApiSchemaShiftInterval;
  fri?: FrontFullApiSchemaShiftInterval;
  sat?: FrontFullApiSchemaShiftInterval;
  sun?: FrontFullApiSchemaShiftInterval;
};

export type FrontFullApiSchemaAnalyticsMessagesColumns = "Message ID" | "Segment ID" | "Conversation ID" | "Ticket IDs" | "Segment" | "Direction" | "Status" | "Inbox" | "Inbox API ID" | "Inbox at activity time" | "Inbox API IDs at activity time" | "Message date" | "Autoreply" | "Reaction time" | "Total reply time" | "Handle time" | "Response time" | "Attributed to" | "Assignee" | "Author" | "Contact name" | "Contact handle" | "Account names" | "From" | "To" | "Cc" | "Bcc" | "Extract" | "Tags" | "Tag API IDs" | "Message API ID" | "Conversation API ID" | "New Conversation" | "First response" | "Business hours" | "Subject" | "Segment start" | "Segment end" | "Segment closed" | "Last segment activity" | "Segment cumulative teammates" | "Ticket status name" | "Ticket status category" | "Custom Field";

export type FrontFullApiSchemaAnalyticsActivitiesColumns = "Activity ID" | "Type" | "Source" | "Message ID" | "Segment ID" | "Conversation ID" | "Ticket IDs" | "Segment" | "Segment start" | "Segment end" | "Direction" | "Status" | "Status at activity time" | "Inbox" | "Inbox API ID" | "Inbox at activity time" | "Inbox API IDs at activity time" | "Previous inbox IDs" | "Message date" | "Autoreply" | "Reaction time" | "Total reply time" | "Handle time" | "Response time" | "Stage resolution time" | "Replies to resolution" | "Ticket resolution time" | "Ticket replies to resolution" | "Attributed to" | "Assignee" | "Author" | "Contact name" | "Contact handle" | "Account names" | "From" | "To" | "Cc" | "Bcc" | "Extract" | "Tags" | "Tag API IDs" | "Tags at activity time" | "Tag API IDs at activity time" | "Tag application duration" | "Activity API ID" | "Message API ID" | "Comment API ID" | "Conversation API ID" | "Message original ID" | "New Conversation" | "First response" | "Business hours" | "Subject" | "Account name" | "Survey rating" | "Survey comment" | "Segment closed" | "Segment contains messages" | "Last segment activity" | "Added tag" | "Added tag API ID" | "Removed tag" | "Removed tag API ID" | "Segment cumulative teammates" | "Ticket status name" | "Ticket status category" | "Time spent in Ticket Status" | "Transitions to Ticket Status" | "Smart QA score" | "Custom Field" | "Updated Custom Field";

export type FrontFullApiSchemaAnalyticsActivitiesParameterizedColumns = (string | string | string | string | string);

export type FrontFullApiSchemaAnalyticsActivitiesSmartQAParameterizedColumn = {
  name: "Smart QA score";
  id: FrontFullApiSchemaAnalyticsActivitiesSmartQAScoreParameters;
};

export type FrontFullApiSchemaAnalyticsActivitiesNumericParameterizedColumn = {
  name: "Time spent in Ticket Status" | "Transitions to Ticket Status" | "Custom Field" | "Updated Custom Field";
  id: number;
};

export type FrontFullApiSchemaChannelIds = {
  channel_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaAccountIds = {
  account_ids: ReadonlyArray<FrontFullApiSchemaResourceID>;
};

export type FrontFullApiSchemaAnalyticsScalarType = "number" | "percentage" | "string" | "duration" | "resource";

export type FrontFullApiSchemaAnalyticsScalarValue = (number | string | {
  label?: string;
  resource?: {
  id: string;
  _links: {
  self?: string;
};
};
});

export type FrontFullApiSchemaCallParty = {
  handle: string;
  name?: string;
};

export type FrontFullApiSchemaShiftInterval = {
  start: string;
  end: string;
};

export type FrontFullApiSchemaAnalyticsActivitiesSmartQAScoreParameters = "Comprehension" | "Solution_Offered" | "Professionalism" | "Professional_Behavior" | "Professional_Relationship" | "Readability" | "Grammar_Spelling" | "General_Empathy" | "Cognitive_Empathy" | "Emotional_Empathy" | "Compassionate_Empathy" | "Tone" | "Adaptive_Tone" | "Neutral_Tone" | "Positive_Tone" | "Brevity" | "Demo_Offered" | "Information_Gathering" | "Upsell" | "Friendly" | "Greeting_Offered" | "Personalisation" | "Adaptability";

export interface FrontFullApiOperationQueryMap {
  "list-accounts": {
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-account": {};
  "delete-an-account": {};
  "fetch-an-account": {};
  "update-account": {};
  "remove-contact-from-account": {};
  "list-account-contacts": {
  page_token?: string;
  limit?: number;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "add-contact-to-account": {};
  "list-account-custom-fields": {};
  "create-analytics-export": {};
  "get-analytics-export": {};
  "create-analytics-report": {};
  "get-analytics-report": {};
  "trigger-app-event": {};
  "list-channels": {};
  "get-channel": {};
  "update-channel": {};
  "update-channel:channel-api": {};
  "sync-application-message-template": {};
  "update-application-message-template": {};
  "create-call": {};
  "update-call": {};
  "add-call-recording": {};
  "add-call-summary": {};
  "add-call-transcript": {};
  "update-external-message-status": {};
  "create-draft": {};
  "sync-inbound-message": {};
  "receive-custom-messages": {};
  "create-message": {};
  "sync-outbound-message": {};
  "validate-channel": {};
  "get-comment": {};
  "update-comment": {};
  "download-attachment-for-a-comment": {};
  "list-comment-mentions": {};
  "add-comment-reply": {};
  "list-all-company-rules": {};
  "list-company-ticket-statuses": {};
  "get-ticket-status-by-id": {};
  "list-company-tags": {
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-company-tag": {};
  "list-groups": {};
  "create-group": {};
  "delete-group": {};
  "remove-contacts-from-group": {};
  "list-contacts-in-group": {
  page_token?: string;
  limit?: number;
};
  "add-contacts-to-group": {};
  "list-contact-lists": {};
  "create-contact-list": {};
  "delete-contact-list": {};
  "remove-contacts-from-contact-list": {};
  "list-contacts-in-contact-list": {
  page_token?: string;
  limit?: number;
};
  "add-contacts-to-contact-list": {};
  "list-contacts": {
  q?: string;
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-contact": {};
  "delete-a-contact": {};
  "get-contact": {};
  "update-a-contact": {};
  "list-contact-conversations": {
  q?: string;
  limit?: number;
  page_token?: string;
};
  "delete-contact-handle": {};
  "add-contact-handle": {};
  "list-notes": {};
  "add-note": {};
  "list-contact-custom-fields": {};
  "merge-contacts": {};
  "list-conversations": {
  q?: string;
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-conversation": {};
  "delete-conversation": {};
  "get-conversation-by-id": {};
  "update-conversation": {};
  "update-conversation-assignee": {};
  "list-conversation-comments": {};
  "add-comment": {};
  "list-conversation-drafts": {};
  "create-draft-reply": {};
  "list-conversation-events": {
  limit?: number;
  page_token?: string;
};
  "delete-conversation-followers": {};
  "list-conversation-followers": {};
  "add-conversation-followers": {
  ignore_errors?: boolean;
};
  "list-conversation-inboxes": {};
  "remove-conversation-links": {};
  "add-conversation-link": {};
  "list-conversation-messages": {
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-message-reply": {};
  "update-conversation-reminders": {};
  "remove-conversation-tag": {};
  "add-conversation-tag": {};
  "list-conversation-custom-fields": {};
  "search-conversations": {
  limit?: number;
  page_token?: string;
};
  "list-custom-fields": {};
  "download-attachment": {};
  "delete-draft": {};
  "edit-draft": {};
  "list-events": {
  q?: string;
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "get-event": {};
  "list-inboxes": {};
  "create-inbox": {};
  "get-inbox": {};
  "list-inbox-channels": {};
  "create-a-channel": {};
  "list-inbox-conversations": {
  q?: string;
  limit?: number;
  page_token?: string;
};
  "import-inbox-message": {};
  "removes-inbox-access": {};
  "list-inbox-access": {};
  "add-inbox-access": {};
  "list-inbox-custom-fields": {};
  "delete-an-article": {};
  "get-a-knowledge-base-article": {};
  "get-knowledge-base-article-with-content-in-default-locale": {};
  "update-article-content-in-default-locale": {};
  "download-attachment-from-an-article": {};
  "get-knowledge-base-article-with-content-in-specified-locale": {};
  "update-article-content-in-specified-locale": {};
  "delete-a-knowledge-base-category": {};
  "get-a-knowledge-base-category": {};
  "list-articles-in-a-category": {
  limit?: number;
  page_token?: string;
};
  "get-knowledge-base-category-content-in-default-locale": {};
  "update-knowledge-base-category-in-default-locale": {};
  "get-knowledge-base-category-with-content-in-specified-locale": {};
  "update-knowledge-base-category-in-specified-locale": {};
  "list-knowledge-bases": {};
  "create-a-knowledge-base": {};
  "get-a-knowledge-base": {};
  "list-articles-in-a-knowledge-base": {
  limit?: number;
  page_token?: string;
};
  "create-article-in-a-knowledge-base-in-default-locale": {};
  "list-categories-in-a-knowledge-base": {
  limit?: number;
  page_token?: string;
};
  "create-knowledge-base-category-in-default-locale": {};
  "get-a-knowledge-base-with-content-in-default-locale": {};
  "update-knowledge-base-in-default-locale": {};
  "create-article-in-a-knowledge-base-in-specified-locale": {};
  "create-knowledge-base-category-in-specified-locale": {};
  "get-a-knowledge-base-with-content-in-specified-locale": {};
  "update-knowledge-base-in-specified-locale": {};
  "list-links": {
  q?: string;
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-link": {};
  "get-link": {};
  "update-a-link": {};
  "list-link-conversations": {
  q?: string;
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "list-link-custom-fields": {};
  "api-token-details": {};
  "list-folders": {
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-folder": {};
  "delete-folder": {};
  "get-folder": {};
  "update-folder": {};
  "get-child-folders": {};
  "create-child-folder": {};
  "get-child-templates": {};
  "create-child-template": {};
  "list-message-templates": {
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-message-template": {};
  "delete-message-template": {};
  "get-message-template": {};
  "update-message-template": {};
  "download-attachment-for-a-message-template": {};
  "get-message": {};
  "download-attachment-for-a-message": {};
  "get-message-seen-status": {};
  "mark-message-seen": {};
  "list-rules": {};
  "get-rule": {};
  "list-shifts": {};
  "create-shift": {};
  "get-shift": {};
  "update-shift": {};
  "remove-teammates-from-shift": {};
  "list-shifts-teammates": {};
  "add-teammates-to-shift": {};
  "delete-signature": {};
  "get-signatures": {};
  "update-signature": {};
  "list-tags": {
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-tag": {};
  "delete-tag": {};
  "get-tag": {};
  "update-a-tag": {};
  "list-tag-children": {};
  "create-child-tag": {};
  "list-tagged-conversations": {
  q?: string;
  limit?: number;
  page_token?: string;
};
  "list-company-teammate-groups": {};
  "create-company-teammate-group": {};
  "delete-company-teammate-group": {};
  "get-company-teammate-group": {};
  "update-a-company-teammate-group": {};
  "remove-company-teammate-group-team-inboxes": {};
  "list-company-teammate-group-team-inboxes": {};
  "add-company-teammate-group-team-inboxes": {};
  "remove-company-teammate-group-teammates": {};
  "list-company-teammate-group-teammates": {};
  "add-company-teammate-group-teammates": {};
  "remove-company-teammate-group-teams": {};
  "list-company-teammate-group-teams": {};
  "add-company-teammate-group-teams": {};
  "list-teammates": {};
  "get-teammate": {};
  "update-teammate": {};
  "list-teammate-channels": {};
  "list-teammate-groups": {};
  "create-teammate-group": {};
  "list-teammate-contact-lists": {};
  "create-teammate-contact-list": {};
  "list-teammate-contacts": {
  q?: string;
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-teammate-contact": {};
  "list-assigned-conversations": {
  q?: string;
  limit?: number;
  page_token?: string;
};
  "list-teammate-inboxes": {};
  "list-teammate-folders": {
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-teammate-folder": {};
  "list-teammate-message-templates": {
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-teammate-message-template": {};
  "list-teammate-private-inboxes": {};
  "create-teammate-private-inbox": {};
  "list-teammate-rules": {};
  "list-teammate-shifts": {};
  "list-teammate-signatures": {};
  "create-teammate-signature": {};
  "list-teammate-tags": {
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-teammate-tag": {};
  "list-teammate-time-offs": {
  limit?: number;
  page_token?: string;
  q?: string;
};
  "create-time-off": {};
  "list-teammate-custom-fields": {};
  "list-teams": {};
  "get-team": {};
  "list-team-channels": {};
  "list-team-groups": {};
  "create-team-group": {};
  "list-team-contact-lists": {};
  "create-team-contact-list": {};
  "list-team-contacts": {
  q?: string;
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-team-contact": {};
  "list-team-inboxes": {};
  "create-team-inbox": {};
  "list-team-folders": {
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-team-folder": {};
  "list-team-message-templates": {
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-team-message-template": {};
  "list-team-rules": {};
  "list-team-shifts": {};
  "create-team-shift": {};
  "list-team-signatures": {};
  "create-team-signature": {};
  "list-team-tags": {
  limit?: number;
  page_token?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
  "create-team-tag": {};
  "remove-teammates-from-team": {};
  "add-teammates-to-team": {};
  "list-team-time-offs": {
  limit?: number;
  page_token?: string;
  q?: string;
};
  "list-team-views": {
  limit?: number;
  page_token?: string;
};
  "create-team-view": {};
  "delete-time-off": {};
  "get-time-off": {};
  "update-time-off": {};
  "list-views": {
  limit?: number;
  page_token?: string;
};
  "get-view": {};
  "update-view": {};
  "add-view-teammates": {};
}

export interface FrontFullApiOperationQueryRequiredMap {
  "list-accounts": false;
  "create-account": false;
  "delete-an-account": false;
  "fetch-an-account": false;
  "update-account": false;
  "remove-contact-from-account": false;
  "list-account-contacts": false;
  "add-contact-to-account": false;
  "list-account-custom-fields": false;
  "create-analytics-export": false;
  "get-analytics-export": false;
  "create-analytics-report": false;
  "get-analytics-report": false;
  "trigger-app-event": false;
  "list-channels": false;
  "get-channel": false;
  "update-channel": false;
  "update-channel:channel-api": false;
  "sync-application-message-template": false;
  "update-application-message-template": false;
  "create-call": false;
  "update-call": false;
  "add-call-recording": false;
  "add-call-summary": false;
  "add-call-transcript": false;
  "update-external-message-status": false;
  "create-draft": false;
  "sync-inbound-message": false;
  "receive-custom-messages": false;
  "create-message": false;
  "sync-outbound-message": false;
  "validate-channel": false;
  "get-comment": false;
  "update-comment": false;
  "download-attachment-for-a-comment": false;
  "list-comment-mentions": false;
  "add-comment-reply": false;
  "list-all-company-rules": false;
  "list-company-ticket-statuses": false;
  "get-ticket-status-by-id": false;
  "list-company-tags": false;
  "create-company-tag": false;
  "list-groups": false;
  "create-group": false;
  "delete-group": false;
  "remove-contacts-from-group": false;
  "list-contacts-in-group": false;
  "add-contacts-to-group": false;
  "list-contact-lists": false;
  "create-contact-list": false;
  "delete-contact-list": false;
  "remove-contacts-from-contact-list": false;
  "list-contacts-in-contact-list": false;
  "add-contacts-to-contact-list": false;
  "list-contacts": false;
  "create-contact": false;
  "delete-a-contact": false;
  "get-contact": false;
  "update-a-contact": false;
  "list-contact-conversations": false;
  "delete-contact-handle": false;
  "add-contact-handle": false;
  "list-notes": false;
  "add-note": false;
  "list-contact-custom-fields": false;
  "merge-contacts": false;
  "list-conversations": false;
  "create-conversation": false;
  "delete-conversation": false;
  "get-conversation-by-id": false;
  "update-conversation": false;
  "update-conversation-assignee": false;
  "list-conversation-comments": false;
  "add-comment": false;
  "list-conversation-drafts": false;
  "create-draft-reply": false;
  "list-conversation-events": false;
  "delete-conversation-followers": false;
  "list-conversation-followers": false;
  "add-conversation-followers": false;
  "list-conversation-inboxes": false;
  "remove-conversation-links": false;
  "add-conversation-link": false;
  "list-conversation-messages": false;
  "create-message-reply": false;
  "update-conversation-reminders": false;
  "remove-conversation-tag": false;
  "add-conversation-tag": false;
  "list-conversation-custom-fields": false;
  "search-conversations": false;
  "list-custom-fields": false;
  "download-attachment": false;
  "delete-draft": false;
  "edit-draft": false;
  "list-events": false;
  "get-event": false;
  "list-inboxes": false;
  "create-inbox": false;
  "get-inbox": false;
  "list-inbox-channels": false;
  "create-a-channel": false;
  "list-inbox-conversations": false;
  "import-inbox-message": false;
  "removes-inbox-access": false;
  "list-inbox-access": false;
  "add-inbox-access": false;
  "list-inbox-custom-fields": false;
  "delete-an-article": false;
  "get-a-knowledge-base-article": false;
  "get-knowledge-base-article-with-content-in-default-locale": false;
  "update-article-content-in-default-locale": false;
  "download-attachment-from-an-article": false;
  "get-knowledge-base-article-with-content-in-specified-locale": false;
  "update-article-content-in-specified-locale": false;
  "delete-a-knowledge-base-category": false;
  "get-a-knowledge-base-category": false;
  "list-articles-in-a-category": false;
  "get-knowledge-base-category-content-in-default-locale": false;
  "update-knowledge-base-category-in-default-locale": false;
  "get-knowledge-base-category-with-content-in-specified-locale": false;
  "update-knowledge-base-category-in-specified-locale": false;
  "list-knowledge-bases": false;
  "create-a-knowledge-base": false;
  "get-a-knowledge-base": false;
  "list-articles-in-a-knowledge-base": false;
  "create-article-in-a-knowledge-base-in-default-locale": false;
  "list-categories-in-a-knowledge-base": false;
  "create-knowledge-base-category-in-default-locale": false;
  "get-a-knowledge-base-with-content-in-default-locale": false;
  "update-knowledge-base-in-default-locale": false;
  "create-article-in-a-knowledge-base-in-specified-locale": false;
  "create-knowledge-base-category-in-specified-locale": false;
  "get-a-knowledge-base-with-content-in-specified-locale": false;
  "update-knowledge-base-in-specified-locale": false;
  "list-links": false;
  "create-link": false;
  "get-link": false;
  "update-a-link": false;
  "list-link-conversations": false;
  "list-link-custom-fields": false;
  "api-token-details": false;
  "list-folders": false;
  "create-folder": false;
  "delete-folder": false;
  "get-folder": false;
  "update-folder": false;
  "get-child-folders": false;
  "create-child-folder": false;
  "get-child-templates": false;
  "create-child-template": false;
  "list-message-templates": false;
  "create-message-template": false;
  "delete-message-template": false;
  "get-message-template": false;
  "update-message-template": false;
  "download-attachment-for-a-message-template": false;
  "get-message": false;
  "download-attachment-for-a-message": false;
  "get-message-seen-status": false;
  "mark-message-seen": false;
  "list-rules": false;
  "get-rule": false;
  "list-shifts": false;
  "create-shift": false;
  "get-shift": false;
  "update-shift": false;
  "remove-teammates-from-shift": false;
  "list-shifts-teammates": false;
  "add-teammates-to-shift": false;
  "delete-signature": false;
  "get-signatures": false;
  "update-signature": false;
  "list-tags": false;
  "create-tag": false;
  "delete-tag": false;
  "get-tag": false;
  "update-a-tag": false;
  "list-tag-children": false;
  "create-child-tag": false;
  "list-tagged-conversations": false;
  "list-company-teammate-groups": false;
  "create-company-teammate-group": false;
  "delete-company-teammate-group": false;
  "get-company-teammate-group": false;
  "update-a-company-teammate-group": false;
  "remove-company-teammate-group-team-inboxes": false;
  "list-company-teammate-group-team-inboxes": false;
  "add-company-teammate-group-team-inboxes": false;
  "remove-company-teammate-group-teammates": false;
  "list-company-teammate-group-teammates": false;
  "add-company-teammate-group-teammates": false;
  "remove-company-teammate-group-teams": false;
  "list-company-teammate-group-teams": false;
  "add-company-teammate-group-teams": false;
  "list-teammates": false;
  "get-teammate": false;
  "update-teammate": false;
  "list-teammate-channels": false;
  "list-teammate-groups": false;
  "create-teammate-group": false;
  "list-teammate-contact-lists": false;
  "create-teammate-contact-list": false;
  "list-teammate-contacts": false;
  "create-teammate-contact": false;
  "list-assigned-conversations": false;
  "list-teammate-inboxes": false;
  "list-teammate-folders": false;
  "create-teammate-folder": false;
  "list-teammate-message-templates": false;
  "create-teammate-message-template": false;
  "list-teammate-private-inboxes": false;
  "create-teammate-private-inbox": false;
  "list-teammate-rules": false;
  "list-teammate-shifts": false;
  "list-teammate-signatures": false;
  "create-teammate-signature": false;
  "list-teammate-tags": false;
  "create-teammate-tag": false;
  "list-teammate-time-offs": false;
  "create-time-off": false;
  "list-teammate-custom-fields": false;
  "list-teams": false;
  "get-team": false;
  "list-team-channels": false;
  "list-team-groups": false;
  "create-team-group": false;
  "list-team-contact-lists": false;
  "create-team-contact-list": false;
  "list-team-contacts": false;
  "create-team-contact": false;
  "list-team-inboxes": false;
  "create-team-inbox": false;
  "list-team-folders": false;
  "create-team-folder": false;
  "list-team-message-templates": false;
  "create-team-message-template": false;
  "list-team-rules": false;
  "list-team-shifts": false;
  "create-team-shift": false;
  "list-team-signatures": false;
  "create-team-signature": false;
  "list-team-tags": false;
  "create-team-tag": false;
  "remove-teammates-from-team": false;
  "add-teammates-to-team": false;
  "list-team-time-offs": false;
  "list-team-views": false;
  "create-team-view": false;
  "delete-time-off": false;
  "get-time-off": false;
  "update-time-off": false;
  "list-views": false;
  "get-view": false;
  "update-view": false;
  "add-view-teammates": false;
}

export interface FrontFullApiOperationRequestBodyMap {
  "list-accounts": never;
  "create-account": FrontFullApiSchemaAccount;
  "delete-an-account": never;
  "fetch-an-account": never;
  "update-account": FrontFullApiSchemaAccountPatch;
  "remove-contact-from-account": FrontFullApiSchemaContactIds;
  "list-account-contacts": never;
  "add-contact-to-account": FrontFullApiSchemaContactIds;
  "list-account-custom-fields": never;
  "create-analytics-export": FrontFullApiSchemaAnalyticsExportRequest;
  "get-analytics-export": never;
  "create-analytics-report": FrontFullApiSchemaAnalyticsReportRequest;
  "get-analytics-report": never;
  "trigger-app-event": FrontFullApiSchemaAppEvent;
  "list-channels": never;
  "get-channel": never;
  "update-channel": FrontFullApiSchemaUpdateChannel;
  "update-channel:channel-api": FrontFullApiSchemaUpdateChannel2;
  "sync-application-message-template": FrontFullApiSchemaApplicationMessageTemplate;
  "update-application-message-template": FrontFullApiSchemaApplicationMessageTemplateEditBlob;
  "create-call": FrontFullApiSchemaCreateCall;
  "update-call": FrontFullApiSchemaUpdateCall;
  "add-call-recording": {
  attachments: string;
  recording_type: "call" | "voicemail";
};
  "add-call-summary": FrontFullApiSchemaAddCallSummary;
  "add-call-transcript": FrontFullApiSchemaAddCallTranscript;
  "update-external-message-status": {
  status: "failed";
  reason?: string;
};
  "create-draft": FrontFullApiSchemaCreateDraft;
  "sync-inbound-message": FrontFullApiSchemaInboundMessage;
  "receive-custom-messages": FrontFullApiSchemaCustomMessage;
  "create-message": FrontFullApiSchemaOutboundMessage;
  "sync-outbound-message": FrontFullApiSchemaOutboundMessage2;
  "validate-channel": never;
  "get-comment": never;
  "update-comment": FrontFullApiSchemaUpdateComment;
  "download-attachment-for-a-comment": never;
  "list-comment-mentions": never;
  "add-comment-reply": FrontFullApiSchemaCreateComment;
  "list-all-company-rules": never;
  "list-company-ticket-statuses": never;
  "get-ticket-status-by-id": never;
  "list-company-tags": never;
  "create-company-tag": FrontFullApiSchemaCreateTag;
  "list-groups": never;
  "create-group": FrontFullApiSchemaCreateContactList;
  "delete-group": never;
  "remove-contacts-from-group": FrontFullApiSchemaRemoveContactsFromList;
  "list-contacts-in-group": never;
  "add-contacts-to-group": FrontFullApiSchemaAddContactsToList;
  "list-contact-lists": never;
  "create-contact-list": FrontFullApiSchemaCreateContactList;
  "delete-contact-list": never;
  "remove-contacts-from-contact-list": FrontFullApiSchemaRemoveContactsFromList;
  "list-contacts-in-contact-list": never;
  "add-contacts-to-contact-list": FrontFullApiSchemaAddContactsToList;
  "list-contacts": never;
  "create-contact": FrontFullApiSchemaCreateContact;
  "delete-a-contact": never;
  "get-contact": never;
  "update-a-contact": FrontFullApiSchemaContact;
  "list-contact-conversations": never;
  "delete-contact-handle": FrontFullApiSchemaDeleteContactHandle;
  "add-contact-handle": FrontFullApiSchemaContactHandle;
  "list-notes": never;
  "add-note": FrontFullApiSchemaCreateContactNote;
  "list-contact-custom-fields": never;
  "merge-contacts": FrontFullApiSchemaMergeContacts;
  "list-conversations": never;
  "create-conversation": FrontFullApiSchemaCreateConversation;
  "delete-conversation": never;
  "get-conversation-by-id": never;
  "update-conversation": FrontFullApiSchemaUpdateConversation;
  "update-conversation-assignee": FrontFullApiSchemaUpdateConversationAssignee;
  "list-conversation-comments": never;
  "add-comment": FrontFullApiSchemaCreateComment;
  "list-conversation-drafts": never;
  "create-draft-reply": FrontFullApiSchemaReplyDraft;
  "list-conversation-events": never;
  "delete-conversation-followers": {
  teammate_ids: ReadonlyArray<string>;
};
  "list-conversation-followers": never;
  "add-conversation-followers": {
  teammate_ids: ReadonlyArray<string>;
};
  "list-conversation-inboxes": never;
  "remove-conversation-links": {
  link_ids: ReadonlyArray<string>;
};
  "add-conversation-link": {
  link_ids?: ReadonlyArray<string>;
  link_external_urls?: ReadonlyArray<string>;
};
  "list-conversation-messages": never;
  "create-message-reply": FrontFullApiSchemaOutboundReplyMessage;
  "update-conversation-reminders": FrontFullApiSchemaUpdateConversationReminders;
  "remove-conversation-tag": FrontFullApiSchemaTagIds;
  "add-conversation-tag": FrontFullApiSchemaTagIds;
  "list-conversation-custom-fields": never;
  "search-conversations": never;
  "list-custom-fields": never;
  "download-attachment": never;
  "delete-draft": FrontFullApiSchemaDeleteDraft;
  "edit-draft": FrontFullApiSchemaEditDraft;
  "list-events": never;
  "get-event": never;
  "list-inboxes": never;
  "create-inbox": FrontFullApiSchemaCreateInbox;
  "get-inbox": never;
  "list-inbox-channels": never;
  "create-a-channel": FrontFullApiSchemaCreateChannel;
  "list-inbox-conversations": never;
  "import-inbox-message": FrontFullApiSchemaImportMessage;
  "removes-inbox-access": FrontFullApiSchemaTeammateIds;
  "list-inbox-access": never;
  "add-inbox-access": FrontFullApiSchemaTeammateIds;
  "list-inbox-custom-fields": never;
  "delete-an-article": never;
  "get-a-knowledge-base-article": never;
  "get-knowledge-base-article-with-content-in-default-locale": never;
  "update-article-content-in-default-locale": FrontFullApiSchemaKnowledgeBaseArticlePatch;
  "download-attachment-from-an-article": never;
  "get-knowledge-base-article-with-content-in-specified-locale": never;
  "update-article-content-in-specified-locale": FrontFullApiSchemaKnowledgeBaseArticlePatch;
  "delete-a-knowledge-base-category": never;
  "get-a-knowledge-base-category": never;
  "list-articles-in-a-category": never;
  "get-knowledge-base-category-content-in-default-locale": never;
  "update-knowledge-base-category-in-default-locale": FrontFullApiSchemaKnowledgeBaseCategoryPatch;
  "get-knowledge-base-category-with-content-in-specified-locale": never;
  "update-knowledge-base-category-in-specified-locale": FrontFullApiSchemaKnowledgeBaseCategoryPatch;
  "list-knowledge-bases": never;
  "create-a-knowledge-base": FrontFullApiSchemaKnowledgeBaseCreate;
  "get-a-knowledge-base": never;
  "list-articles-in-a-knowledge-base": never;
  "create-article-in-a-knowledge-base-in-default-locale": FrontFullApiSchemaKnowledgeBaseArticleCreate;
  "list-categories-in-a-knowledge-base": never;
  "create-knowledge-base-category-in-default-locale": FrontFullApiSchemaKnowledgeBaseCategoryCreate;
  "get-a-knowledge-base-with-content-in-default-locale": never;
  "update-knowledge-base-in-default-locale": FrontFullApiSchemaKnowledgeBasePatch;
  "create-article-in-a-knowledge-base-in-specified-locale": FrontFullApiSchemaKnowledgeBaseArticleCreate;
  "create-knowledge-base-category-in-specified-locale": FrontFullApiSchemaKnowledgeBaseCategoryCreate;
  "get-a-knowledge-base-with-content-in-specified-locale": never;
  "update-knowledge-base-in-specified-locale": FrontFullApiSchemaKnowledgeBasePatch;
  "list-links": never;
  "create-link": FrontFullApiSchemaCreateLink;
  "get-link": never;
  "update-a-link": FrontFullApiSchemaUpdateLink;
  "list-link-conversations": never;
  "list-link-custom-fields": never;
  "api-token-details": never;
  "list-folders": never;
  "create-folder": FrontFullApiSchemaCreateMessageTemplateFolder;
  "delete-folder": never;
  "get-folder": never;
  "update-folder": FrontFullApiSchemaUpdateMessageTemplateFolder;
  "get-child-folders": never;
  "create-child-folder": FrontFullApiSchemaCreateMessageTemplateFolderAsChild;
  "get-child-templates": never;
  "create-child-template": FrontFullApiSchemaCreateMessageTemplateAsChild;
  "list-message-templates": never;
  "create-message-template": FrontFullApiSchemaCreateSharedMessageTemplate;
  "delete-message-template": never;
  "get-message-template": never;
  "update-message-template": never;
  "download-attachment-for-a-message-template": never;
  "get-message": never;
  "download-attachment-for-a-message": never;
  "get-message-seen-status": never;
  "mark-message-seen": {};
  "list-rules": never;
  "get-rule": never;
  "list-shifts": never;
  "create-shift": FrontFullApiSchemaCreateShift;
  "get-shift": never;
  "update-shift": FrontFullApiSchemaUpdateShift;
  "remove-teammates-from-shift": FrontFullApiSchemaTeammateIds;
  "list-shifts-teammates": never;
  "add-teammates-to-shift": FrontFullApiSchemaTeammateIds;
  "delete-signature": never;
  "get-signatures": never;
  "update-signature": FrontFullApiSchemaUpdateSignature;
  "list-tags": never;
  "create-tag": FrontFullApiSchemaCreateTag;
  "delete-tag": never;
  "get-tag": never;
  "update-a-tag": FrontFullApiSchemaUpdateTag;
  "list-tag-children": never;
  "create-child-tag": FrontFullApiSchemaCreateTag;
  "list-tagged-conversations": never;
  "list-company-teammate-groups": never;
  "create-company-teammate-group": FrontFullApiSchemaCreateTeammateGroup;
  "delete-company-teammate-group": never;
  "get-company-teammate-group": never;
  "update-a-company-teammate-group": FrontFullApiSchemaUpdateTeammateGroup;
  "remove-company-teammate-group-team-inboxes": FrontFullApiSchemaInboxIds;
  "list-company-teammate-group-team-inboxes": never;
  "add-company-teammate-group-team-inboxes": FrontFullApiSchemaInboxIds;
  "remove-company-teammate-group-teammates": FrontFullApiSchemaTeammateIds;
  "list-company-teammate-group-teammates": never;
  "add-company-teammate-group-teammates": FrontFullApiSchemaTeammateIds;
  "remove-company-teammate-group-teams": FrontFullApiSchemaTeamIds;
  "list-company-teammate-group-teams": never;
  "add-company-teammate-group-teams": FrontFullApiSchemaTeamIds;
  "list-teammates": never;
  "get-teammate": never;
  "update-teammate": FrontFullApiSchemaUpdateTeammate;
  "list-teammate-channels": never;
  "list-teammate-groups": never;
  "create-teammate-group": FrontFullApiSchemaCreateContactList;
  "list-teammate-contact-lists": never;
  "create-teammate-contact-list": FrontFullApiSchemaCreateContactList;
  "list-teammate-contacts": never;
  "create-teammate-contact": FrontFullApiSchemaCreateContact;
  "list-assigned-conversations": never;
  "list-teammate-inboxes": never;
  "list-teammate-folders": never;
  "create-teammate-folder": FrontFullApiSchemaCreateMessageTemplateFolder;
  "list-teammate-message-templates": never;
  "create-teammate-message-template": FrontFullApiSchemaCreatePrivateMessageTemplate;
  "list-teammate-private-inboxes": never;
  "create-teammate-private-inbox": FrontFullApiSchemaCreatePrivateInbox;
  "list-teammate-rules": never;
  "list-teammate-shifts": never;
  "list-teammate-signatures": never;
  "create-teammate-signature": FrontFullApiSchemaCreatePrivateSignature;
  "list-teammate-tags": never;
  "create-teammate-tag": FrontFullApiSchemaCreateTag;
  "list-teammate-time-offs": never;
  "create-time-off": FrontFullApiSchemaCreateTimeOff;
  "list-teammate-custom-fields": never;
  "list-teams": never;
  "get-team": never;
  "list-team-channels": never;
  "list-team-groups": never;
  "create-team-group": FrontFullApiSchemaCreateContactList;
  "list-team-contact-lists": never;
  "create-team-contact-list": FrontFullApiSchemaCreateContactList;
  "list-team-contacts": never;
  "create-team-contact": FrontFullApiSchemaCreateContact;
  "list-team-inboxes": never;
  "create-team-inbox": FrontFullApiSchemaCreateTeamInbox;
  "list-team-folders": never;
  "create-team-folder": FrontFullApiSchemaCreateMessageTemplateFolder;
  "list-team-message-templates": never;
  "create-team-message-template": FrontFullApiSchemaCreateSharedMessageTemplate;
  "list-team-rules": never;
  "list-team-shifts": never;
  "create-team-shift": FrontFullApiSchemaCreateShift;
  "list-team-signatures": never;
  "create-team-signature": FrontFullApiSchemaCreateSharedSignature;
  "list-team-tags": never;
  "create-team-tag": FrontFullApiSchemaCreateTag;
  "remove-teammates-from-team": FrontFullApiSchemaTeammateIds;
  "add-teammates-to-team": FrontFullApiSchemaTeammateIds;
  "list-team-time-offs": never;
  "list-team-views": never;
  "create-team-view": FrontFullApiSchemaCreateView;
  "delete-time-off": never;
  "get-time-off": never;
  "update-time-off": FrontFullApiSchemaUpdateTimeOff;
  "list-views": never;
  "get-view": never;
  "update-view": FrontFullApiSchemaUpdateView;
  "add-view-teammates": {
  teammate_ids: ReadonlyArray<string>;
};
}

export interface FrontFullApiOperationRequestBodyRequiredMap {
  "list-accounts": false;
  "create-account": false;
  "delete-an-account": false;
  "fetch-an-account": false;
  "update-account": false;
  "remove-contact-from-account": false;
  "list-account-contacts": false;
  "add-contact-to-account": false;
  "list-account-custom-fields": false;
  "create-analytics-export": false;
  "get-analytics-export": false;
  "create-analytics-report": false;
  "get-analytics-report": false;
  "trigger-app-event": false;
  "list-channels": false;
  "get-channel": false;
  "update-channel": false;
  "update-channel:channel-api": false;
  "sync-application-message-template": false;
  "update-application-message-template": false;
  "create-call": false;
  "update-call": false;
  "add-call-recording": false;
  "add-call-summary": false;
  "add-call-transcript": false;
  "update-external-message-status": false;
  "create-draft": false;
  "sync-inbound-message": false;
  "receive-custom-messages": false;
  "create-message": false;
  "sync-outbound-message": false;
  "validate-channel": false;
  "get-comment": false;
  "update-comment": false;
  "download-attachment-for-a-comment": false;
  "list-comment-mentions": false;
  "add-comment-reply": false;
  "list-all-company-rules": false;
  "list-company-ticket-statuses": false;
  "get-ticket-status-by-id": false;
  "list-company-tags": false;
  "create-company-tag": false;
  "list-groups": false;
  "create-group": false;
  "delete-group": false;
  "remove-contacts-from-group": false;
  "list-contacts-in-group": false;
  "add-contacts-to-group": false;
  "list-contact-lists": false;
  "create-contact-list": false;
  "delete-contact-list": false;
  "remove-contacts-from-contact-list": false;
  "list-contacts-in-contact-list": false;
  "add-contacts-to-contact-list": false;
  "list-contacts": false;
  "create-contact": false;
  "delete-a-contact": false;
  "get-contact": false;
  "update-a-contact": false;
  "list-contact-conversations": false;
  "delete-contact-handle": false;
  "add-contact-handle": false;
  "list-notes": false;
  "add-note": false;
  "list-contact-custom-fields": false;
  "merge-contacts": false;
  "list-conversations": false;
  "create-conversation": false;
  "delete-conversation": false;
  "get-conversation-by-id": false;
  "update-conversation": false;
  "update-conversation-assignee": false;
  "list-conversation-comments": false;
  "add-comment": false;
  "list-conversation-drafts": false;
  "create-draft-reply": false;
  "list-conversation-events": false;
  "delete-conversation-followers": false;
  "list-conversation-followers": false;
  "add-conversation-followers": false;
  "list-conversation-inboxes": false;
  "remove-conversation-links": false;
  "add-conversation-link": false;
  "list-conversation-messages": false;
  "create-message-reply": false;
  "update-conversation-reminders": false;
  "remove-conversation-tag": false;
  "add-conversation-tag": false;
  "list-conversation-custom-fields": false;
  "search-conversations": false;
  "list-custom-fields": false;
  "download-attachment": false;
  "delete-draft": false;
  "edit-draft": false;
  "list-events": false;
  "get-event": false;
  "list-inboxes": false;
  "create-inbox": false;
  "get-inbox": false;
  "list-inbox-channels": false;
  "create-a-channel": false;
  "list-inbox-conversations": false;
  "import-inbox-message": false;
  "removes-inbox-access": false;
  "list-inbox-access": false;
  "add-inbox-access": false;
  "list-inbox-custom-fields": false;
  "delete-an-article": false;
  "get-a-knowledge-base-article": false;
  "get-knowledge-base-article-with-content-in-default-locale": false;
  "update-article-content-in-default-locale": false;
  "download-attachment-from-an-article": false;
  "get-knowledge-base-article-with-content-in-specified-locale": false;
  "update-article-content-in-specified-locale": false;
  "delete-a-knowledge-base-category": false;
  "get-a-knowledge-base-category": false;
  "list-articles-in-a-category": false;
  "get-knowledge-base-category-content-in-default-locale": false;
  "update-knowledge-base-category-in-default-locale": false;
  "get-knowledge-base-category-with-content-in-specified-locale": false;
  "update-knowledge-base-category-in-specified-locale": false;
  "list-knowledge-bases": false;
  "create-a-knowledge-base": false;
  "get-a-knowledge-base": false;
  "list-articles-in-a-knowledge-base": false;
  "create-article-in-a-knowledge-base-in-default-locale": false;
  "list-categories-in-a-knowledge-base": false;
  "create-knowledge-base-category-in-default-locale": false;
  "get-a-knowledge-base-with-content-in-default-locale": false;
  "update-knowledge-base-in-default-locale": false;
  "create-article-in-a-knowledge-base-in-specified-locale": false;
  "create-knowledge-base-category-in-specified-locale": false;
  "get-a-knowledge-base-with-content-in-specified-locale": false;
  "update-knowledge-base-in-specified-locale": false;
  "list-links": false;
  "create-link": false;
  "get-link": false;
  "update-a-link": false;
  "list-link-conversations": false;
  "list-link-custom-fields": false;
  "api-token-details": false;
  "list-folders": false;
  "create-folder": false;
  "delete-folder": false;
  "get-folder": false;
  "update-folder": false;
  "get-child-folders": false;
  "create-child-folder": false;
  "get-child-templates": false;
  "create-child-template": false;
  "list-message-templates": false;
  "create-message-template": false;
  "delete-message-template": false;
  "get-message-template": false;
  "update-message-template": false;
  "download-attachment-for-a-message-template": false;
  "get-message": false;
  "download-attachment-for-a-message": false;
  "get-message-seen-status": false;
  "mark-message-seen": false;
  "list-rules": false;
  "get-rule": false;
  "list-shifts": false;
  "create-shift": false;
  "get-shift": false;
  "update-shift": false;
  "remove-teammates-from-shift": false;
  "list-shifts-teammates": false;
  "add-teammates-to-shift": false;
  "delete-signature": false;
  "get-signatures": false;
  "update-signature": false;
  "list-tags": false;
  "create-tag": false;
  "delete-tag": false;
  "get-tag": false;
  "update-a-tag": false;
  "list-tag-children": false;
  "create-child-tag": false;
  "list-tagged-conversations": false;
  "list-company-teammate-groups": false;
  "create-company-teammate-group": false;
  "delete-company-teammate-group": false;
  "get-company-teammate-group": false;
  "update-a-company-teammate-group": false;
  "remove-company-teammate-group-team-inboxes": false;
  "list-company-teammate-group-team-inboxes": false;
  "add-company-teammate-group-team-inboxes": false;
  "remove-company-teammate-group-teammates": false;
  "list-company-teammate-group-teammates": false;
  "add-company-teammate-group-teammates": false;
  "remove-company-teammate-group-teams": false;
  "list-company-teammate-group-teams": false;
  "add-company-teammate-group-teams": false;
  "list-teammates": false;
  "get-teammate": false;
  "update-teammate": false;
  "list-teammate-channels": false;
  "list-teammate-groups": false;
  "create-teammate-group": false;
  "list-teammate-contact-lists": false;
  "create-teammate-contact-list": false;
  "list-teammate-contacts": false;
  "create-teammate-contact": false;
  "list-assigned-conversations": false;
  "list-teammate-inboxes": false;
  "list-teammate-folders": false;
  "create-teammate-folder": false;
  "list-teammate-message-templates": false;
  "create-teammate-message-template": false;
  "list-teammate-private-inboxes": false;
  "create-teammate-private-inbox": false;
  "list-teammate-rules": false;
  "list-teammate-shifts": false;
  "list-teammate-signatures": false;
  "create-teammate-signature": false;
  "list-teammate-tags": false;
  "create-teammate-tag": false;
  "list-teammate-time-offs": false;
  "create-time-off": true;
  "list-teammate-custom-fields": false;
  "list-teams": false;
  "get-team": false;
  "list-team-channels": false;
  "list-team-groups": false;
  "create-team-group": false;
  "list-team-contact-lists": false;
  "create-team-contact-list": false;
  "list-team-contacts": false;
  "create-team-contact": false;
  "list-team-inboxes": false;
  "create-team-inbox": false;
  "list-team-folders": false;
  "create-team-folder": false;
  "list-team-message-templates": false;
  "create-team-message-template": false;
  "list-team-rules": false;
  "list-team-shifts": false;
  "create-team-shift": false;
  "list-team-signatures": false;
  "create-team-signature": false;
  "list-team-tags": false;
  "create-team-tag": false;
  "remove-teammates-from-team": false;
  "add-teammates-to-team": false;
  "list-team-time-offs": false;
  "list-team-views": false;
  "create-team-view": false;
  "delete-time-off": false;
  "get-time-off": false;
  "update-time-off": true;
  "list-views": false;
  "get-view": false;
  "update-view": false;
  "add-view-teammates": false;
}

export interface FrontFullApiOperationResponseMap {
  "list-accounts": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaAccountResponse>;
};
  "create-account": FrontFullApiSchemaAccountResponse;
  "delete-an-account": void;
  "fetch-an-account": FrontFullApiSchemaAccountResponse;
  "update-account": FrontFullApiSchemaAccountResponse;
  "remove-contact-from-account": void;
  "list-account-contacts": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactResponse>;
};
  "add-contact-to-account": void;
  "list-account-custom-fields": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaCustomFieldResponse>;
};
  "create-analytics-export": FrontFullApiSchemaAnalyticsExportResponse;
  "get-analytics-export": FrontFullApiSchemaAnalyticsExportResponse;
  "create-analytics-report": FrontFullApiSchemaAnalyticsReportResponse;
  "get-analytics-report": FrontFullApiSchemaAnalyticsReportResponse;
  "trigger-app-event": void;
  "list-channels": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaChannelResponse>;
};
  "get-channel": FrontFullApiSchemaChannelResponse;
  "update-channel": void;
  "update-channel:channel-api": void;
  "sync-application-message-template": FrontFullApiSchemaApplicationMessageTemplateResponse;
  "update-application-message-template": FrontFullApiSchemaApplicationMessageTemplateResponse;
  "create-call": void;
  "update-call": void;
  "add-call-recording": void;
  "add-call-summary": void;
  "add-call-transcript": void;
  "update-external-message-status": void;
  "create-draft": FrontFullApiSchemaMessageResponse;
  "sync-inbound-message": {
  status?: string;
  message_uid?: string;
};
  "receive-custom-messages": {
  status?: string;
  message_uid?: string;
};
  "create-message": {
  status?: string;
  message_uid?: string;
};
  "sync-outbound-message": {
  status?: string;
  message_uid?: string;
};
  "validate-channel": {
  status?: string;
};
  "get-comment": FrontFullApiSchemaCommentResponse;
  "update-comment": FrontFullApiSchemaCommentResponse;
  "download-attachment-for-a-comment": string;
  "list-comment-mentions": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTeammateResponse>;
};
  "add-comment-reply": FrontFullApiSchemaCommentResponse;
  "list-all-company-rules": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaRuleResponse>;
};
  "list-company-ticket-statuses": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaStatusResponse>;
};
  "get-ticket-status-by-id": FrontFullApiSchemaStatusResponse;
  "list-company-tags": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTagResponse>;
};
  "create-company-tag": FrontFullApiSchemaTagResponse;
  "list-groups": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactListResponses>;
};
  "create-group": void;
  "delete-group": void;
  "remove-contacts-from-group": void;
  "list-contacts-in-group": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactResponse>;
};
  "add-contacts-to-group": void;
  "list-contact-lists": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactListResponses>;
};
  "create-contact-list": void;
  "delete-contact-list": void;
  "remove-contacts-from-contact-list": void;
  "list-contacts-in-contact-list": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactResponse>;
};
  "add-contacts-to-contact-list": void;
  "list-contacts": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactResponse>;
};
  "create-contact": FrontFullApiSchemaContactResponse;
  "delete-a-contact": void;
  "get-contact": FrontFullApiSchemaContactResponse;
  "update-a-contact": void;
  "list-contact-conversations": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaConversationResponse>;
};
  "delete-contact-handle": void;
  "add-contact-handle": void;
  "list-notes": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactNoteResponses>;
};
  "add-note": FrontFullApiSchemaContactNoteResponses;
  "list-contact-custom-fields": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaCustomFieldResponse>;
};
  "merge-contacts": FrontFullApiSchemaContactResponse;
  "list-conversations": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaConversationResponse>;
};
  "create-conversation": FrontFullApiSchemaConversationResponse;
  "delete-conversation": void;
  "get-conversation-by-id": FrontFullApiSchemaConversationResponse;
  "update-conversation": void;
  "update-conversation-assignee": void;
  "list-conversation-comments": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaCommentResponse>;
};
  "add-comment": FrontFullApiSchemaCommentResponse;
  "list-conversation-drafts": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageResponse>;
};
  "create-draft-reply": FrontFullApiSchemaMessageResponse;
  "list-conversation-events": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaEventResponse>;
};
  "delete-conversation-followers": void;
  "list-conversation-followers": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTeammateResponse>;
};
  "add-conversation-followers": void;
  "list-conversation-inboxes": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaInboxResponse>;
};
  "remove-conversation-links": void;
  "add-conversation-link": void;
  "list-conversation-messages": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageResponse>;
};
  "create-message-reply": {
  status?: string;
  message_uid?: string;
};
  "update-conversation-reminders": void;
  "remove-conversation-tag": void;
  "add-conversation-tag": void;
  "list-conversation-custom-fields": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaCustomFieldResponse>;
};
  "search-conversations": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _total?: number;
  _results?: ReadonlyArray<FrontFullApiSchemaConversationResponse>;
};
  "list-custom-fields": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaCustomFieldResponse>;
};
  "download-attachment": string;
  "delete-draft": void;
  "edit-draft": FrontFullApiSchemaMessageResponse;
  "list-events": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaEventResponse>;
};
  "get-event": FrontFullApiSchemaEventResponse;
  "list-inboxes": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaInboxResponse>;
};
  "create-inbox": FrontFullApiSchemaInboxResponse;
  "get-inbox": FrontFullApiSchemaInboxResponse;
  "list-inbox-channels": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaChannelResponse>;
};
  "create-a-channel": void;
  "list-inbox-conversations": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaConversationResponse>;
};
  "import-inbox-message": {
  status?: string;
  message_uid?: string;
};
  "removes-inbox-access": void;
  "list-inbox-access": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTeammateResponse>;
};
  "add-inbox-access": void;
  "list-inbox-custom-fields": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaCustomFieldResponse>;
};
  "delete-an-article": FrontFullApiSchemaKnowledgeBaseArticleSlimResponse;
  "get-a-knowledge-base-article": FrontFullApiSchemaKnowledgeBaseArticleSlimResponse;
  "get-knowledge-base-article-with-content-in-default-locale": FrontFullApiSchemaKnowledgeBaseArticleResponse;
  "update-article-content-in-default-locale": FrontFullApiSchemaKnowledgeBaseArticleResponse;
  "download-attachment-from-an-article": string;
  "get-knowledge-base-article-with-content-in-specified-locale": FrontFullApiSchemaKnowledgeBaseArticleResponse;
  "update-article-content-in-specified-locale": FrontFullApiSchemaKnowledgeBaseArticleResponse;
  "delete-a-knowledge-base-category": void;
  "get-a-knowledge-base-category": FrontFullApiSchemaKnowledgeBaseCategorySlimResponse;
  "list-articles-in-a-category": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaKnowledgeBaseArticleSlimResponse>;
};
  "get-knowledge-base-category-content-in-default-locale": FrontFullApiSchemaKnowledgeBaseCategoryResponse;
  "update-knowledge-base-category-in-default-locale": FrontFullApiSchemaKnowledgeBaseCategoryResponse;
  "get-knowledge-base-category-with-content-in-specified-locale": FrontFullApiSchemaKnowledgeBaseCategoryResponse;
  "update-knowledge-base-category-in-specified-locale": FrontFullApiSchemaKnowledgeBaseCategoryResponse;
  "list-knowledge-bases": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaKnowledgeBaseSlimResponse>;
};
  "create-a-knowledge-base": FrontFullApiSchemaKnowledgeBaseResponse;
  "get-a-knowledge-base": FrontFullApiSchemaKnowledgeBaseSlimResponse;
  "list-articles-in-a-knowledge-base": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaKnowledgeBaseArticleSlimResponse>;
};
  "create-article-in-a-knowledge-base-in-default-locale": FrontFullApiSchemaKnowledgeBaseArticleResponse;
  "list-categories-in-a-knowledge-base": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaKnowledgeBaseCategorySlimResponse>;
};
  "create-knowledge-base-category-in-default-locale": FrontFullApiSchemaKnowledgeBaseCategoryResponse;
  "get-a-knowledge-base-with-content-in-default-locale": FrontFullApiSchemaKnowledgeBaseResponse;
  "update-knowledge-base-in-default-locale": FrontFullApiSchemaKnowledgeBaseResponse;
  "create-article-in-a-knowledge-base-in-specified-locale": FrontFullApiSchemaKnowledgeBaseArticleResponse;
  "create-knowledge-base-category-in-specified-locale": FrontFullApiSchemaKnowledgeBaseCategoryResponse;
  "get-a-knowledge-base-with-content-in-specified-locale": FrontFullApiSchemaKnowledgeBaseResponse;
  "update-knowledge-base-in-specified-locale": FrontFullApiSchemaKnowledgeBaseResponse;
  "list-links": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaLinkResponse>;
};
  "create-link": FrontFullApiSchemaLinkResponse;
  "get-link": FrontFullApiSchemaLinkResponse;
  "update-a-link": void;
  "list-link-conversations": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaConversationResponse>;
};
  "list-link-custom-fields": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaCustomFieldResponse>;
};
  "api-token-details": FrontFullApiSchemaIdentityResponse;
  "list-folders": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageTemplateFolderResponse>;
};
  "create-folder": FrontFullApiSchemaMessageTemplateFolderResponse;
  "delete-folder": {
  status?: string;
  message_template_folder_id?: string;
};
  "get-folder": FrontFullApiSchemaMessageTemplateFolderResponse;
  "update-folder": FrontFullApiSchemaMessageTemplateFolderResponse;
  "get-child-folders": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageTemplateFolderResponse>;
};
  "create-child-folder": FrontFullApiSchemaMessageTemplateFolderResponse;
  "get-child-templates": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageTemplateFolderResponse>;
};
  "create-child-template": FrontFullApiSchemaMessageTemplateResponse;
  "list-message-templates": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageTemplateResponse>;
};
  "create-message-template": FrontFullApiSchemaMessageTemplateResponse;
  "delete-message-template": void;
  "get-message-template": FrontFullApiSchemaMessageTemplateResponse;
  "update-message-template": FrontFullApiSchemaMessageTemplateResponse;
  "download-attachment-for-a-message-template": string;
  "get-message": FrontFullApiSchemaMessageResponse;
  "download-attachment-for-a-message": string;
  "get-message-seen-status": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaSeenReceiptResponse>;
};
  "mark-message-seen": void;
  "list-rules": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaRuleResponse>;
};
  "get-rule": FrontFullApiSchemaRuleResponse;
  "list-shifts": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaShiftResponse>;
};
  "create-shift": FrontFullApiSchemaShiftResponse;
  "get-shift": FrontFullApiSchemaShiftResponse;
  "update-shift": void;
  "remove-teammates-from-shift": void;
  "list-shifts-teammates": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTeammateResponse>;
};
  "add-teammates-to-shift": void;
  "delete-signature": void;
  "get-signatures": FrontFullApiSchemaSignatureResponse;
  "update-signature": FrontFullApiSchemaSignatureResponse;
  "list-tags": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTagResponse>;
};
  "create-tag": FrontFullApiSchemaTagResponse;
  "delete-tag": void;
  "get-tag": FrontFullApiSchemaTagResponse;
  "update-a-tag": void;
  "list-tag-children": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTagResponse>;
};
  "create-child-tag": FrontFullApiSchemaTagResponse;
  "list-tagged-conversations": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaConversationResponse>;
};
  "list-company-teammate-groups": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTeammateGroupResponse>;
};
  "create-company-teammate-group": FrontFullApiSchemaTeammateGroupResponse;
  "delete-company-teammate-group": void;
  "get-company-teammate-group": FrontFullApiSchemaTeammateGroupResponse;
  "update-a-company-teammate-group": void;
  "remove-company-teammate-group-team-inboxes": void;
  "list-company-teammate-group-team-inboxes": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaInboxResponse>;
};
  "add-company-teammate-group-team-inboxes": void;
  "remove-company-teammate-group-teammates": void;
  "list-company-teammate-group-teammates": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTeammateResponse>;
};
  "add-company-teammate-group-teammates": void;
  "remove-company-teammate-group-teams": void;
  "list-company-teammate-group-teams": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTeamPreviewResponse>;
};
  "add-company-teammate-group-teams": void;
  "list-teammates": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTeammateResponse>;
};
  "get-teammate": FrontFullApiSchemaTeammateResponse;
  "update-teammate": void;
  "list-teammate-channels": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaChannelResponse>;
};
  "list-teammate-groups": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactListResponses>;
};
  "create-teammate-group": void;
  "list-teammate-contact-lists": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactListResponses>;
};
  "create-teammate-contact-list": void;
  "list-teammate-contacts": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactResponse>;
};
  "create-teammate-contact": FrontFullApiSchemaContactResponse;
  "list-assigned-conversations": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaConversationResponse>;
};
  "list-teammate-inboxes": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaInboxResponse>;
};
  "list-teammate-folders": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageTemplateFolderResponse>;
};
  "create-teammate-folder": FrontFullApiSchemaMessageTemplateFolderResponse;
  "list-teammate-message-templates": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageTemplateResponse>;
};
  "create-teammate-message-template": FrontFullApiSchemaMessageTemplateResponse;
  "list-teammate-private-inboxes": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaInboxResponse>;
};
  "create-teammate-private-inbox": FrontFullApiSchemaInboxResponse;
  "list-teammate-rules": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaRuleResponse>;
};
  "list-teammate-shifts": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaShiftResponse>;
};
  "list-teammate-signatures": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaSignatureResponse>;
};
  "create-teammate-signature": FrontFullApiSchemaSignatureResponse;
  "list-teammate-tags": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTagResponse>;
};
  "create-teammate-tag": FrontFullApiSchemaTagResponse;
  "list-teammate-time-offs": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTimeOffResponse>;
};
  "create-time-off": FrontFullApiSchemaTimeOffResponse;
  "list-teammate-custom-fields": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaCustomFieldResponse>;
};
  "list-teams": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTeamPreviewResponse>;
};
  "get-team": FrontFullApiSchemaTeamResponse;
  "list-team-channels": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaChannelResponse>;
};
  "list-team-groups": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactListResponses>;
};
  "create-team-group": void;
  "list-team-contact-lists": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactListResponses>;
};
  "create-team-contact-list": void;
  "list-team-contacts": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaContactResponse>;
};
  "create-team-contact": FrontFullApiSchemaContactResponse;
  "list-team-inboxes": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaInboxResponse>;
};
  "create-team-inbox": FrontFullApiSchemaInboxResponse;
  "list-team-folders": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageTemplateFolderResponse>;
};
  "create-team-folder": FrontFullApiSchemaMessageTemplateFolderResponse;
  "list-team-message-templates": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaMessageTemplateResponse>;
};
  "create-team-message-template": FrontFullApiSchemaMessageTemplateResponse;
  "list-team-rules": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaRuleResponse>;
};
  "list-team-shifts": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaShiftResponse>;
};
  "create-team-shift": FrontFullApiSchemaShiftResponse;
  "list-team-signatures": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaSignatureResponse>;
};
  "create-team-signature": FrontFullApiSchemaSignatureResponse;
  "list-team-tags": {
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTagResponse>;
};
  "create-team-tag": FrontFullApiSchemaTagResponse;
  "remove-teammates-from-team": void;
  "add-teammates-to-team": void;
  "list-team-time-offs": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaTimeOffResponse>;
};
  "list-team-views": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaSharedViewResponse>;
};
  "create-team-view": FrontFullApiSchemaSharedViewResponse;
  "delete-time-off": void;
  "get-time-off": FrontFullApiSchemaTimeOffResponse;
  "update-time-off": void;
  "list-views": {
  _pagination?: {
  next?: string | null;
};
  _links?: {
  self?: string;
};
  _results?: ReadonlyArray<FrontFullApiSchemaSharedViewResponse>;
};
  "get-view": FrontFullApiSchemaSharedViewResponse;
  "update-view": void;
  "add-view-teammates": void;
}
