// Generated provider schema DTOs for IntercomFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type IntercomFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type IntercomFullApiSchemaJsonValue = IntercomFullApiSchemaJsonPrimitive | readonly IntercomFullApiSchemaJsonValue[] | { readonly [key: string]: IntercomFullApiSchemaJsonValue | undefined };

export type IntercomFullApiSchemaAdminList = {
  type?: string;
  admins?: ReadonlyArray<IntercomFullApiSchemaAdmin>;
};

export type IntercomFullApiSchemaAdmin = {
  type?: string;
  id?: string;
  name?: string;
  email?: string;
  job_title?: string;
  away_mode_enabled?: boolean;
  away_mode_reassign?: boolean;
  away_status_reason_id?: number | null;
  has_inbox_seat?: boolean;
  team_ids?: ReadonlyArray<number>;
  avatar?: string | null;
  team_priority_level?: IntercomFullApiSchemaTeamPriorityLevel;
} | null;

export type IntercomFullApiSchemaActivityLogList = {
  type?: string;
  pages?: IntercomFullApiSchemaCursorPages;
  activity_logs?: ReadonlyArray<IntercomFullApiSchemaActivityLog>;
};

export type IntercomFullApiSchemaContentImportSourcesList = {
  type?: "list";
  pages?: IntercomFullApiSchemaPagesLink;
  total_count?: number;
  data?: ReadonlyArray<IntercomFullApiSchemaContentImportSource>;
};

export type IntercomFullApiSchemaCreateContentImportSourceRequest = {
  sync_behavior: "api";
  status?: "active" | "deactivated";
  url: string;
};

export type IntercomFullApiSchemaContentImportSource = {
  type: "content_import_source";
  id: number;
  last_synced_at: number;
  sync_behavior: "api" | "automatic" | "manual";
  status: "active" | "deactivated";
  url: string;
  created_at: number;
  updated_at: number;
};

export type IntercomFullApiSchemaError = {
  type: string;
  request_id?: string | null;
  errors: ReadonlyArray<{
  code: string;
  message?: string | null;
  field?: string | null;
}>;
};

export type IntercomFullApiSchemaUpdateContentImportSourceRequest = {
  sync_behavior: "api" | "automated" | "manual";
  status?: "active" | "deactivated";
  url: string;
};

export type IntercomFullApiSchemaExternalPagesList = {
  type?: "list";
  pages?: IntercomFullApiSchemaPagesLink;
  total_count?: number;
  data?: ReadonlyArray<IntercomFullApiSchemaExternalPage>;
};

export type IntercomFullApiSchemaCreateExternalPageRequest = {
  title: string;
  html: string;
  url?: string;
  ai_agent_availability?: boolean;
  ai_copilot_availability?: boolean;
  locale: "en";
  source_id: number;
  external_id: string;
};

export type IntercomFullApiSchemaExternalPage = {
  type: "external_page";
  id: string;
  title: string;
  html: string;
  url?: string;
  ai_agent_availability: boolean;
  ai_copilot_availability: boolean;
  ai_sales_agent_availability?: boolean;
  fin_availability?: boolean;
  locale: "en";
  source_id: number;
  external_id: string;
  created_at: number;
  updated_at: number;
  last_ingested_at: number;
};

export type IntercomFullApiSchemaUpdateExternalPageRequest = {
  title: string;
  html: string;
  url: string;
  fin_availability?: boolean;
  locale: "en";
  source_id: number;
  external_id?: string;
};

export type IntercomFullApiSchemaArticleList = {
  type?: "list";
  pages?: IntercomFullApiSchemaCursorPages;
  total_count?: number;
  data?: ReadonlyArray<IntercomFullApiSchemaArticleListItem>;
};

export type IntercomFullApiSchemaCreateArticleRequest = {
  title: string;
  description?: string;
  body?: string;
  author_id: number;
  state?: "published" | "draft";
  parent_id?: number;
  parent_type?: string;
  translated_content?: IntercomFullApiSchemaArticleTranslatedContent;
} | null;

export type IntercomFullApiSchemaArticle = IntercomFullApiSchemaArticleListItem;

export type IntercomFullApiSchemaDeletedArticleObject = {
  id?: string;
  object?: "article";
  deleted?: boolean;
};

export type IntercomFullApiSchemaUpdateArticleRequest = {
  title?: string;
  description?: string;
  body?: string;
  author_id?: number;
  state?: "published" | "draft";
  parent_id?: string;
  parent_type?: string;
  translated_content?: IntercomFullApiSchemaArticleTranslatedContent;
} | null;

export type IntercomFullApiSchemaArticleSearchResponse = {
  type?: "list";
  total_count?: number;
  data?: {
  articles?: ReadonlyArray<IntercomFullApiSchemaArticle>;
  highlights?: ReadonlyArray<IntercomFullApiSchemaArticleSearchHighlights>;
};
  pages?: IntercomFullApiSchemaCursorPages;
};

export type IntercomFullApiSchemaAwayStatusReason = {
  type?: string;
  id?: string;
  label?: string;
  emoji?: string;
  order?: number;
  deleted?: boolean;
  created_at?: number;
  updated_at?: number;
};

export type IntercomFullApiSchemaBrandList = {
  type?: string;
  data?: ReadonlyArray<IntercomFullApiSchemaBrand>;
};

export type IntercomFullApiSchemaBrand = {
  type?: string;
  id?: string;
  name?: string;
  is_default?: boolean;
  created_at?: number;
  updated_at?: number;
  help_center_id?: string;
  default_address_settings_id?: string;
};

export type IntercomFullApiSchemaCallList = {
  type?: string;
  data?: ReadonlyArray<IntercomFullApiSchemaCall>;
  total_count?: number;
  pages?: IntercomFullApiSchemaCursorPages;
};

export type IntercomFullApiSchemaCall = {
  type?: string;
  id?: string;
  conversation_id?: string | null;
  admin_id?: string | null;
  contact_id?: string | null;
  state?: string;
  initiated_at?: IntercomFullApiSchemaDatetime;
  answered_at?: IntercomFullApiSchemaDatetime;
  ended_at?: IntercomFullApiSchemaDatetime;
  created_at?: IntercomFullApiSchemaDatetime;
  updated_at?: IntercomFullApiSchemaDatetime;
  recording_url?: string | null;
  transcription_url?: string | null;
  call_type?: string;
  direction?: string;
  ended_reason?: string | null;
  phone?: string | null;
  fin_recording_url?: string | null;
  fin_transcription_url?: string | null;
};

export type IntercomFullApiSchemaCompanyList = {
  type?: "list";
  pages?: IntercomFullApiSchemaCursorPages;
  total_count?: number;
  data?: ReadonlyArray<IntercomFullApiSchemaCompany>;
};

export type IntercomFullApiSchemaCreateOrUpdateCompanyRequest = {
  name?: string;
  company_id?: string;
  plan?: string;
  size?: number;
  website?: string;
  industry?: string;
  custom_attributes?: {
  readonly [key: string]: string | undefined;
};
  remote_created_at?: number;
  monthly_spend?: number;
} | null;

export type IntercomFullApiSchemaCompany = {
  type?: "company";
  id?: string;
  name?: string;
  app_id?: string;
  plan?: {
  type?: string;
  id?: string;
  name?: string;
};
  company_id?: string;
  remote_created_at?: number;
  created_at?: number;
  updated_at?: number;
  last_request_at?: number;
  size?: number;
  website?: string;
  industry?: string;
  monthly_spend?: number;
  session_count?: number;
  user_count?: number;
  custom_attributes?: {
  readonly [key: string]: string | undefined;
};
  tags?: {
  type?: "tag.list";
  tags?: ReadonlyArray<IntercomFullApiSchemaTagBasic>;
};
  segments?: {
  type?: "segment.list";
  segments?: ReadonlyArray<IntercomFullApiSchemaSegment>;
};
};

export type IntercomFullApiSchemaDeletedCompanyObject = {
  id?: string;
  object?: "company";
  deleted?: boolean;
};

export type IntercomFullApiSchemaUpdateCompanyRequest = {
  name?: string;
  plan?: string;
  size?: number;
  website?: string;
  industry?: string;
  custom_attributes?: {
  readonly [key: string]: string | undefined;
};
  monthly_spend?: number;
} | null;

export type IntercomFullApiSchemaCompanyAttachedContacts = {
  type?: "list";
  data?: ReadonlyArray<IntercomFullApiSchemaContact>;
  total_count?: number;
  pages?: IntercomFullApiSchemaCursorPages;
};

export type IntercomFullApiSchemaNoteList = {
  type?: string;
  data?: ReadonlyArray<IntercomFullApiSchemaNote>;
  total_count?: number;
  pages?: IntercomFullApiSchemaCursorPages;
};

export type IntercomFullApiSchemaCompanyAttachedSegments = {
  type?: "list";
  data?: ReadonlyArray<IntercomFullApiSchemaSegment>;
};

export type IntercomFullApiSchemaCompanyScroll = {
  type?: "list";
  data?: ReadonlyArray<IntercomFullApiSchemaCompany>;
  pages?: IntercomFullApiSchemaCursorPages;
  total_count?: number | null;
  scroll_param?: string;
} | null;

export type IntercomFullApiSchemaContactList = {
  type?: "list";
  data?: ReadonlyArray<IntercomFullApiSchemaContact>;
  total_count?: number;
  pages?: IntercomFullApiSchemaCursorPages;
};

export type IntercomFullApiSchemaCreateContactRequest = (IntercomFullApiSchemaJsonValue | IntercomFullApiSchemaJsonValue | IntercomFullApiSchemaJsonValue);

export type IntercomFullApiSchemaContact = {
  type?: string;
  id?: string;
  external_id?: string | null;
  workspace_id?: string;
  role?: string;
  email?: string;
  email_domain?: string;
  phone?: string | null;
  name?: string | null;
  owner_id?: number | null;
  has_hard_bounced?: boolean;
  marked_email_as_spam?: boolean;
  unsubscribed_from_emails?: boolean;
  created_at?: number;
  updated_at?: number;
  signed_up_at?: number | null;
  last_seen_at?: number | null;
  last_replied_at?: number | null;
  last_contacted_at?: number | null;
  last_email_opened_at?: number | null;
  last_email_clicked_at?: number | null;
  language_override?: string | null;
  browser?: string | null;
  browser_version?: string | null;
  browser_language?: string | null;
  os?: string | null;
  android_app_name?: string | null;
  android_app_version?: string | null;
  android_device?: string | null;
  android_os_version?: string | null;
  android_sdk_version?: string | null;
  android_last_seen_at?: number | null;
  ios_app_name?: string | null;
  ios_app_version?: string | null;
  ios_device?: string | null;
  ios_os_version?: string | null;
  ios_sdk_version?: string | null;
  ios_last_seen_at?: number | null;
  custom_attributes?: {};
  avatar?: {
  type?: string;
  image_url?: string | null;
} | null;
  tags?: IntercomFullApiSchemaContactTags;
  notes?: IntercomFullApiSchemaContactNotes;
  companies?: IntercomFullApiSchemaContactCompanies;
  location?: IntercomFullApiSchemaContactLocation;
  social_profiles?: IntercomFullApiSchemaContactSocialProfiles;
};

export type IntercomFullApiSchemaContactDeleted = IntercomFullApiSchemaContactReference;

export type IntercomFullApiSchemaUpdateContactRequest = {
  role?: string;
  external_id?: string;
  email?: string;
  phone?: string | null;
  name?: string | null;
  avatar?: string | null;
  signed_up_at?: number | null;
  last_seen_at?: number | null;
  owner_id?: number | null;
  unsubscribed_from_emails?: boolean | null;
  custom_attributes?: {} | null;
};

export type IntercomFullApiSchemaContactArchived = IntercomFullApiSchemaContactReference;

export type IntercomFullApiSchemaContactBlocked = IntercomFullApiSchemaContactReference;

export type IntercomFullApiSchemaContactAttachedCompanies = {
  type?: "list";
  companies?: ReadonlyArray<IntercomFullApiSchemaCompany>;
  total_count?: number;
  pages?: IntercomFullApiSchemaPagesLink;
};

export type IntercomFullApiSchemaNote = {
  type?: string;
  id?: string;
  created_at?: number;
  contact?: {
  type?: string;
  id?: string;
} | null;
  author?: IntercomFullApiSchemaAdmin;
  body?: string;
};

export type IntercomFullApiSchemaContactSegments = {
  type?: "list";
  data?: ReadonlyArray<IntercomFullApiSchemaSegment>;
};

export type IntercomFullApiSchemaSubscriptionTypeList = {
  type?: "list";
  data?: ReadonlyArray<IntercomFullApiSchemaSubscriptionType>;
};

export type IntercomFullApiSchemaSubscriptionType = {
  type?: string;
  id?: string;
  state?: "live" | "draft" | "archived";
  default_translation?: IntercomFullApiSchemaTranslation;
  translations?: ReadonlyArray<IntercomFullApiSchemaTranslation>;
  consent_type?: "opt_out" | "opt_in";
  content_types?: ReadonlyArray<"email" | "sms_message">;
};

export type IntercomFullApiSchemaTagList = {
  type?: "list";
  data?: ReadonlyArray<IntercomFullApiSchemaTag>;
};

export type IntercomFullApiSchemaTag = {
  type?: string;
  id?: string;
  name?: string;
  applied_at?: number | null;
  applied_by?: IntercomFullApiSchemaReference;
};

export type IntercomFullApiSchemaContactUnarchived = IntercomFullApiSchemaContactReference;

export type IntercomFullApiSchemaMergeContactsRequest = {
  from?: string;
  into?: string;
};

export type IntercomFullApiSchemaSearchRequest = {
  query: (IntercomFullApiSchemaSingleFilterSearchRequest | IntercomFullApiSchemaMultipleFilterSearchRequest);
  pagination?: IntercomFullApiSchemaStartingAfterPaging;
};

export type IntercomFullApiSchemaConversationList = {
  type?: "conversation.list";
  conversations?: ReadonlyArray<IntercomFullApiSchemaConversationListItem>;
  total_count?: number;
  pages?: IntercomFullApiSchemaCursorPages;
};

export type IntercomFullApiSchemaCreateConversationRequest = {
  from: {
  type: "lead" | "user" | "contact";
  id: string;
};
  body: string;
  subject?: string;
  attachment_urls?: ReadonlyArray<string>;
  created_at?: number;
};

export type IntercomFullApiSchemaMessage = {
  type: string;
  id: string;
  created_at: number;
  subject?: string;
  body: string;
  message_type: "email" | "inapp" | "facebook" | "twitter";
  conversation_id?: string;
};

export type IntercomFullApiSchemaConversationDeleted = {
  id?: string;
  object?: "conversation";
  deleted?: boolean;
};

export type IntercomFullApiSchemaConversation = {
  type?: string;
  id?: string;
  title?: string | null;
  created_at?: number;
  updated_at?: number;
  waiting_since?: number | null;
  snoozed_until?: number | null;
  open?: boolean;
  state?: "open" | "closed" | "snoozed";
  read?: boolean;
  priority?: "priority" | "not_priority";
  admin_assignee_id?: number | null;
  team_assignee_id?: number | null;
  company?: IntercomFullApiSchemaCompany;
  tags?: IntercomFullApiSchemaTags;
  conversation_rating?: IntercomFullApiSchemaConversationRating;
  source?: IntercomFullApiSchemaConversationSource;
  contacts?: IntercomFullApiSchemaConversationContacts;
  teammates?: IntercomFullApiSchemaConversationTeammates;
  custom_attributes?: IntercomFullApiSchemaCustomAttributes;
  first_contact_reply?: IntercomFullApiSchemaConversationFirstContactReply;
  sla_applied?: IntercomFullApiSchemaSlaApplied;
  statistics?: IntercomFullApiSchemaConversationStatistics;
  conversation_parts?: IntercomFullApiSchemaConversationParts;
  linked_objects?: IntercomFullApiSchemaLinkedObjectList;
  ai_agent_participated?: boolean;
  ai_agent?: IntercomFullApiSchemaAiAgent;
};

export type IntercomFullApiSchemaUpdateConversationRequest = {
  read?: boolean;
  title?: string;
  custom_attributes?: IntercomFullApiSchemaCustomAttributes;
  company_id?: string;
};

export type IntercomFullApiSchemaConvertConversationToTicketRequest = {
  ticket_type_id: string;
  attributes?: IntercomFullApiSchemaTicketRequestCustomAttributes;
};

export type IntercomFullApiSchemaTicket = {
  type?: "ticket";
  id?: string;
  ticket_id?: string;
  category?: "Customer" | "Back-office" | "Tracker";
  ticket_attributes?: IntercomFullApiSchemaTicketCustomAttributes;
  ticket_state?: IntercomFullApiSchemaTicketState;
  ticket_type?: IntercomFullApiSchemaTicketType;
  contacts?: IntercomFullApiSchemaTicketContacts;
  admin_assignee_id?: string;
  team_assignee_id?: string;
  created_at?: number;
  updated_at?: number;
  open?: boolean;
  snoozed_until?: number;
  linked_objects?: IntercomFullApiSchemaLinkedObjectList;
  ticket_parts?: IntercomFullApiSchemaTicketParts;
  is_shared?: boolean;
} | null;

export type IntercomFullApiSchemaAttachContactToConversationRequest = {
  admin_id?: string;
  customer?: ({
  intercom_user_id: string;
  customer?: IntercomFullApiSchemaCustomerRequest;
} | {
  user_id: string;
  customer?: IntercomFullApiSchemaCustomerRequest;
} | {
  email: string;
  customer?: IntercomFullApiSchemaCustomerRequest;
});
};

export type IntercomFullApiSchemaDetachContactFromConversationRequest = {
  admin_id: string;
};

export type IntercomFullApiSchemaCloseConversationRequest = {
  message_type: "close";
  type: "admin";
  admin_id: string;
  body?: string;
};

export type IntercomFullApiSchemaSnoozeConversationRequest = {
  message_type: "snoozed";
  admin_id: string;
  snoozed_until: number;
};

export type IntercomFullApiSchemaOpenConversationRequest = {
  message_type: "open";
  admin_id: string;
};

export type IntercomFullApiSchemaAssignConversationRequest = {
  message_type: "assignment";
  type: "admin" | "team";
  admin_id: string;
  assignee_id: string;
  body?: string;
};

export type IntercomFullApiSchemaReplyConversationRequest = (IntercomFullApiSchemaContactReplyConversationRequest | IntercomFullApiSchemaAdminReplyConversationRequest);

export type IntercomFullApiSchemaRedactConversationRequest = ({
  type: "conversation_part";
  conversation_id: string;
  conversation_part_id: string;
} | {
  type: "source";
  conversation_id: string;
  source_id: string;
});

export type IntercomFullApiSchemaCustomObjectInstanceDeleted = {
  object?: string;
  id?: string;
  deleted?: boolean;
};

export type IntercomFullApiSchemaCustomObjectInstance = {
  id?: string;
  external_id?: string;
  external_created_at?: number | null;
  external_updated_at?: number | null;
  created_at?: number;
  updated_at?: number;
  type?: string;
  custom_attributes?: {
  readonly [key: string]: string | undefined;
};
} | null;

export type IntercomFullApiSchemaCreateOrUpdateCustomObjectInstanceRequest = {
  external_id?: string;
  external_created_at?: number | null;
  external_updated_at?: number | null;
  custom_attributes?: {
  readonly [key: string]: string | undefined;
} | null;
};

export type IntercomFullApiSchemaDataAttributeList = {
  type?: "list";
  data?: ReadonlyArray<IntercomFullApiSchemaDataAttribute>;
};

export type IntercomFullApiSchemaCreateDataAttributeRequest = ({
  data_type?: "options";
  options: ReadonlyArray<{
  value?: string;
}>;
} | {
  data_type?: "string" | "integer" | "float" | "boolean" | "datetime" | "date";
});

export type IntercomFullApiSchemaDataAttribute = {
  type?: "data_attribute";
  id?: number;
  model?: "contact" | "company";
  name?: string;
  full_name?: string;
  label?: string;
  description?: string;
  data_type?: "string" | "integer" | "float" | "boolean" | "date";
  options?: ReadonlyArray<string>;
  api_writable?: boolean;
  messenger_writable?: boolean;
  ui_writable?: boolean;
  custom?: boolean;
  archived?: boolean;
  created_at?: number;
  updated_at?: number;
  admin_id?: string;
};

export type IntercomFullApiSchemaUpdateDataAttributeRequest = ({
  options: ReadonlyArray<{
  value?: string;
}>;
} | IntercomFullApiSchemaJsonValue);

export type IntercomFullApiSchemaEmailList = {
  type?: string;
  data?: ReadonlyArray<IntercomFullApiSchemaEmailSetting>;
};

export type IntercomFullApiSchemaEmailSetting = {
  type?: string;
  id?: string;
  email?: string;
  verified?: boolean;
  domain?: string;
  brand_id?: string;
  forwarding_enabled?: boolean;
  forwarded_email_last_received_at?: number | null;
  created_at?: number;
  updated_at?: number;
};

export type IntercomFullApiSchemaDataEventSummary = {
  type?: "event.summary";
  email?: string;
  intercom_user_id?: string;
  user_id?: string;
  events?: ReadonlyArray<IntercomFullApiSchemaDataEventSummaryItem>;
};

export type IntercomFullApiSchemaCreateDataEventRequest = (IntercomFullApiSchemaJsonValue | IntercomFullApiSchemaJsonValue | IntercomFullApiSchemaJsonValue);

export type IntercomFullApiSchemaCreateDataEventSummariesRequest = {
  user_id?: string;
  event_summaries?: {
  event_name?: string;
  count?: number;
  first?: number;
  last?: number;
};
};

export type IntercomFullApiSchemaDataExport = {
  job_identifier?: string;
  status?: "pending" | "in_progress" | "failed" | "completed" | "no_data" | "canceled";
  download_expires_at?: string;
  download_url?: string;
};

export type IntercomFullApiSchemaCreateDataExportsRequest = {
  created_at_after: number;
  created_at_before: number;
};

export type IntercomFullApiSchemaWorkflowExport = {
  export_version?: string;
  exported_at?: string;
  app_id?: number;
  workflow?: {
  id?: string;
  title?: string;
  description?: string | null;
  trigger_type?: string;
  state?: "live" | "draft" | "paused";
  target_channels?: ReadonlyArray<string>;
  preferred_devices?: ReadonlyArray<string>;
  created_at?: string;
  updated_at?: string;
  targeting?: {} | null;
  snapshot?: {} | null;
  attributes?: ReadonlyArray<{}>;
  embedded_rules?: ReadonlyArray<{}>;
};
};

export type IntercomFullApiSchemaAiCallResponse = {
  id?: number;
  app_id?: number;
  user_phone_number?: string;
  status?: string;
  intercom_call_id?: string | null;
  external_call_id?: string;
  intercom_conversation_id?: string | null;
  call_transcript?: ReadonlyArray<{}>;
  call_summary?: string;
  intent?: ReadonlyArray<{}>;
};

export type IntercomFullApiSchemaRegisterFinVoiceCallRequest = {
  phone_number: string;
  call_id: string;
  source?: "five9" | "zoom_phone" | "aws_connect";
  data?: {} | null;
} | null;

export type IntercomFullApiSchemaFinAgentMessage = {
  author: "user" | "agent" | "fin";
  body: string;
  timestamp: string;
  timestamp_ms?: string;
};

export type IntercomFullApiSchemaFinAgentUser = {
  id: string;
  name?: string;
  email?: string;
  attributes?: {
  readonly [key: string]: IntercomFullApiSchemaJsonValue | undefined;
};
};

export type IntercomFullApiSchemaFinAgentAttachment = {
  type: "url" | "file";
  url?: string;
  name?: string;
  content_type?: string;
  data?: string;
};

export type IntercomFullApiSchemaFinAgentAttributeErrors = {
  user?: {
  attributes?: {
  readonly [key: string]: string | undefined;
};
};
  conversation?: {
  attributes?: {
  readonly [key: string]: string | undefined;
};
};
};

export type IntercomFullApiSchemaFinAgentConversationMetadata = {
  history?: ReadonlyArray<IntercomFullApiSchemaFinAgentMessage>;
  attributes?: {
  readonly [key: string]: IntercomFullApiSchemaJsonValue | undefined;
};
};

export type IntercomFullApiSchemaCollectionList = {
  type?: "list";
  pages?: IntercomFullApiSchemaCursorPages;
  total_count?: number;
  data?: ReadonlyArray<IntercomFullApiSchemaCollection>;
};

export type IntercomFullApiSchemaCreateCollectionRequest = {
  name: string;
  description?: string;
  translated_content?: IntercomFullApiSchemaGroupTranslatedContent;
  parent_id?: string | null;
  help_center_id?: number | null;
};

export type IntercomFullApiSchemaCollection = {
  id?: string;
  workspace_id?: string;
  name?: string;
  description?: string | null;
  created_at?: number;
  updated_at?: number;
  url?: string | null;
  icon?: string | null;
  order?: number;
  default_locale?: string;
  translated_content?: IntercomFullApiSchemaGroupTranslatedContent;
  parent_id?: string | null;
  help_center_id?: number | null;
};

export type IntercomFullApiSchemaDeletedCollectionObject = {
  id?: string;
  object?: "collection";
  deleted?: boolean;
};

export type IntercomFullApiSchemaUpdateCollectionRequest = {
  name?: string;
  description?: string;
  translated_content?: IntercomFullApiSchemaGroupTranslatedContent;
  parent_id?: string | null;
};

export type IntercomFullApiSchemaHelpCenterList = {
  type?: "list";
  data?: ReadonlyArray<IntercomFullApiSchemaHelpCenter>;
};

export type IntercomFullApiSchemaHelpCenter = {
  id?: string;
  workspace_id?: string;
  created_at?: number;
  updated_at?: number;
  identifier?: string;
  website_turned_on?: boolean;
  display_name?: string;
  url?: string;
  custom_domain?: string | null;
};

export type IntercomFullApiSchemaInternalArticleList = {
  type?: "list";
  pages?: IntercomFullApiSchemaCursorPages;
  total_count?: number;
  data?: ReadonlyArray<IntercomFullApiSchemaInternalArticleListItem>;
};

export type IntercomFullApiSchemaCreateInternalArticleRequest = {
  title: string;
  body?: string;
  author_id: number;
  owner_id: number;
} | null;

export type IntercomFullApiSchemaInternalArticle = IntercomFullApiSchemaInternalArticleListItem;

export type IntercomFullApiSchemaDeletedInternalArticleObject = {
  id?: string;
  object?: "internal_article";
  deleted?: boolean;
};

export type IntercomFullApiSchemaUpdateInternalArticleRequest = {
  title?: string;
  body?: string;
  author_id?: number;
  owner_id?: number;
} | null;

export type IntercomFullApiSchemaInternalArticleSearchResponse = {
  type?: "list";
  total_count?: number;
  data?: {
  internal_articles?: ReadonlyArray<IntercomFullApiSchemaInternalArticle>;
};
  pages?: IntercomFullApiSchemaCursorPages;
};

export type IntercomFullApiSchemaIpAllowlist = {
  type?: string;
  enabled?: boolean;
  ip_allowlist?: ReadonlyArray<string>;
};

export type IntercomFullApiSchemaJobs = {
  type?: "job";
  id: string;
  url?: string;
  status?: "pending" | "success" | "failed";
  resource_type?: string;
  resource_id?: string | null;
  resource_url?: string | null;
};

export type IntercomFullApiSchemaAdminWithApp = {
  type?: string;
  id?: string;
  name?: string;
  email?: string;
  job_title?: string;
  away_mode_enabled?: boolean;
  away_mode_reassign?: boolean;
  has_inbox_seat?: boolean;
  team_ids?: ReadonlyArray<number>;
  avatar?: {
  type?: string;
  image_url?: string | null;
};
  email_verified?: boolean | null;
  app?: IntercomFullApiSchemaApp;
} | null;

export type IntercomFullApiSchemaCreateMessageRequest = (IntercomFullApiSchemaJsonValue | IntercomFullApiSchemaJsonValue);

export type IntercomFullApiSchemaPaginatedResponse = {
  type?: "list" | "conversation.list";
  pages?: IntercomFullApiSchemaCursorPages;
  total_count?: number;
  data?: ReadonlyArray<(IntercomFullApiSchemaNewsItem | IntercomFullApiSchemaNewsfeed)>;
};

export type IntercomFullApiSchemaNewsItemRequest = {
  title: string;
  body?: string;
  sender_id: number;
  state?: "draft" | "live";
  deliver_silently?: boolean;
  labels?: ReadonlyArray<string>;
  reactions?: ReadonlyArray<string | null>;
  newsfeed_assignments?: ReadonlyArray<IntercomFullApiSchemaNewsfeedAssignment>;
};

export type IntercomFullApiSchemaNewsItem = {
  type?: "news-item";
  id?: string;
  workspace_id?: string;
  title?: string;
  body?: string;
  sender_id?: number;
  state?: "draft" | "live";
  newsfeed_assignments?: ReadonlyArray<IntercomFullApiSchemaNewsfeedAssignment>;
  labels?: ReadonlyArray<string | null>;
  cover_image_url?: string | null;
  reactions?: ReadonlyArray<string | null>;
  deliver_silently?: boolean;
  created_at?: number;
  updated_at?: number;
};

export type IntercomFullApiSchemaDeletedObject = {
  id?: string;
  object?: "news-item";
  deleted?: boolean;
};

export type IntercomFullApiSchemaNewsfeed = {
  id?: string;
  type?: "newsfeed";
  name?: string;
  created_at?: number;
  updated_at?: number;
};

export type IntercomFullApiSchemaCreatePhoneSwitchRequest = {
  phone: string;
  custom_attributes?: IntercomFullApiSchemaCustomAttributes;
} | null;

export type IntercomFullApiSchemaPhoneSwitch = {
  type?: "phone_call_redirect";
  phone?: string;
} | null;

export type IntercomFullApiSchemaSegmentList = {
  type?: "segment.list";
  segments?: ReadonlyArray<IntercomFullApiSchemaSegment>;
  pages?: {};
};

export type IntercomFullApiSchemaSegment = {
  type?: "segment";
  id?: string;
  name?: string;
  created_at?: number;
  updated_at?: number;
  person_type?: "contact" | "user";
  count?: number | null;
};

export type IntercomFullApiSchemaCreateOrUpdateTagRequest = {
  name: string;
  id?: string;
};

export type IntercomFullApiSchemaTagCompanyRequest = {
  name: string;
  companies: ReadonlyArray<{
  id?: string;
  company_id?: string;
}>;
};

export type IntercomFullApiSchemaUntagCompanyRequest = {
  name: string;
  companies: ReadonlyArray<{
  id?: string;
  company_id?: string;
  untag?: boolean;
}>;
};

export type IntercomFullApiSchemaTagMultipleUsersRequest = {
  name: string;
  users: ReadonlyArray<{
  id?: string;
}>;
};

export type IntercomFullApiSchemaTagBasic = {
  type?: string;
  id?: string;
  name?: string;
};

export type IntercomFullApiSchemaTeamList = {
  type?: "team.list";
  teams?: ReadonlyArray<IntercomFullApiSchemaTeam>;
};

export type IntercomFullApiSchemaTeam = {
  type?: string;
  id?: string;
  name?: string;
  admin_ids?: ReadonlyArray<number>;
  admin_priority_level?: IntercomFullApiSchemaAdminPriorityLevel;
  assignment_limit?: number | null;
  distribution_method?: string | null;
};

export type IntercomFullApiSchemaTicketStateList = {
  type?: string;
  data?: ReadonlyArray<IntercomFullApiSchemaTicketStateDetailed>;
};

export type IntercomFullApiSchemaTicketTypeList = {
  type?: string;
  data?: ReadonlyArray<IntercomFullApiSchemaTicketType>;
};

export type IntercomFullApiSchemaCreateTicketTypeRequest = {
  name: string;
  description?: string;
  category?: "Customer" | "Back-office" | "Tracker";
  icon?: string;
  is_internal?: boolean;
} | null;

export type IntercomFullApiSchemaTicketType = {
  type?: string;
  id?: string;
  category?: "Customer" | "Back-office" | "Tracker";
  name?: string;
  description?: string;
  icon?: string;
  workspace_id?: string;
  ticket_type_attributes?: IntercomFullApiSchemaTicketTypeAttributeList;
  ticket_states?: {
  type?: string;
  data?: ReadonlyArray<IntercomFullApiSchemaTicketState>;
};
  archived?: boolean;
  created_at?: number;
  updated_at?: number;
} | null;

export type IntercomFullApiSchemaUpdateTicketTypeRequest = {
  name?: string;
  description?: string;
  category?: "Customer" | "Back-office" | "Tracker";
  icon?: string;
  archived?: boolean;
  is_internal?: boolean;
} | null;

export type IntercomFullApiSchemaCreateTicketTypeAttributeRequest = {
  name: string;
  description: string;
  data_type: "string" | "list" | "integer" | "decimal" | "boolean" | "datetime" | "files";
  required_to_create?: boolean;
  required_to_create_for_contacts?: boolean;
  visible_on_create?: boolean;
  visible_to_contacts?: boolean;
  multiline?: boolean;
  list_items?: string;
  allow_multiple_values?: boolean;
};

export type IntercomFullApiSchemaTicketTypeAttribute = {
  type?: string;
  id?: string;
  workspace_id?: string;
  name?: string;
  description?: string;
  data_type?: string;
  input_options?: {};
  order?: number;
  required_to_create?: boolean;
  required_to_create_for_contacts?: boolean;
  visible_on_create?: boolean;
  visible_to_contacts?: boolean;
  default?: boolean;
  ticket_type_id?: number;
  archived?: boolean;
  created_at?: number;
  updated_at?: number;
} | null;

export type IntercomFullApiSchemaUpdateTicketTypeAttributeRequest = {
  name?: string;
  description?: string;
  required_to_create?: boolean;
  required_to_create_for_contacts?: boolean;
  visible_on_create?: boolean;
  visible_to_contacts?: boolean;
  multiline?: boolean;
  list_items?: string;
  allow_multiple_values?: boolean;
  archived?: boolean;
};

export type IntercomFullApiSchemaCreateTicketRequest = {
  ticket_type_id: string;
  contacts: ReadonlyArray<({
  id: string;
} | {
  external_id: string;
} | {
  email: string;
})>;
  conversation_to_link_id?: string;
  company_id?: string;
  created_at?: number;
  ticket_attributes?: IntercomFullApiSchemaTicketRequestCustomAttributes;
  assignment?: {
  admin_assignee_id?: string;
  team_assignee_id?: string;
};
};

export type IntercomFullApiSchemaTicketDeleted = {
  id?: string;
  object?: "ticket";
  deleted?: boolean;
};

export type IntercomFullApiSchemaUpdateTicketRequest = {
  ticket_attributes?: {};
  ticket_state_id?: string;
  company_id?: string;
  open?: boolean;
  is_shared?: boolean;
  snoozed_until?: number;
  admin_id?: number;
  assignee_id?: string;
};

export type IntercomFullApiSchemaContactReplyTicketRequest = (IntercomFullApiSchemaContactReplyTicketIntercomUserIdRequest | IntercomFullApiSchemaContactReplyTicketUserIdRequest | IntercomFullApiSchemaContactReplyTicketEmailRequest);

export type IntercomFullApiSchemaAdminReplyTicketRequest = {
  message_type: "comment" | "note" | "quick_reply";
  type: "admin";
  body?: string;
  admin_id: string;
  created_at?: number;
  reply_options?: ReadonlyArray<{
  text: string;
  uuid: string;
}>;
  attachment_urls?: ReadonlyArray<string>;
  cross_post?: boolean;
};

export type IntercomFullApiSchemaTicketReply = {
  type?: "ticket_part";
  id?: string;
  part_type?: "note" | "comment" | "quick_reply";
  body?: string | null;
  created_at?: number;
  updated_at?: number;
  author?: IntercomFullApiSchemaTicketPartAuthor;
  attachments?: ReadonlyArray<IntercomFullApiSchemaPartAttachment>;
  redacted?: boolean;
};

export type IntercomFullApiSchemaTicketList = {
  type?: "ticket.list";
  tickets?: ReadonlyArray<IntercomFullApiSchemaTicket>;
  total_count?: number;
  pages?: IntercomFullApiSchemaCursorPages;
};

export type IntercomFullApiSchemaVisitor = {
  type?: string;
  id?: string;
  user_id?: string;
  anonymous?: boolean;
  email?: string;
  phone?: string | null;
  name?: string | null;
  pseudonym?: string | null;
  avatar?: {
  type?: string;
  image_url?: string | null;
};
  app_id?: string;
  companies?: {
  type?: "company.list";
  companies?: ReadonlyArray<IntercomFullApiSchemaCompany>;
};
  location_data?: {
  type?: string;
  city_name?: string;
  continent_code?: string;
  country_code?: string;
  country_name?: string;
  postal_code?: string;
  region_name?: string;
  timezone?: string;
};
  las_request_at?: number;
  created_at?: number;
  remote_created_at?: number;
  signed_up_at?: number;
  updated_at?: number;
  session_count?: number;
  social_profiles?: {
  type?: "social_profile.list";
  social_profiles?: ReadonlyArray<string>;
};
  owner_id?: string | null;
  unsubscribed_from_emails?: boolean;
  marked_email_as_spam?: boolean;
  has_hard_bounced?: boolean;
  tags?: {
  type?: "tag.list";
  tags?: ReadonlyArray<{
  type?: "tag";
  id?: string;
  name?: string;
}>;
};
  segments?: {
  type?: "segment.list";
  segments?: ReadonlyArray<string>;
};
  custom_attributes?: {
  readonly [key: string]: string | undefined;
};
  referrer?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_medium?: string | null;
  utm_source?: string | null;
  utm_term?: string | null;
  do_not_track?: boolean | null;
} | null;

export type IntercomFullApiSchemaUpdateVisitorRequest = (IntercomFullApiSchemaJsonValue | IntercomFullApiSchemaJsonValue);

export type IntercomFullApiSchemaConvertVisitorRequest = {
  type: string;
  user: (IntercomFullApiSchemaJsonValue | IntercomFullApiSchemaJsonValue);
  visitor: (IntercomFullApiSchemaJsonValue | IntercomFullApiSchemaJsonValue | IntercomFullApiSchemaJsonValue);
};

export type IntercomFullApiSchemaTeamPriorityLevel = {
  primary_team_ids?: ReadonlyArray<number> | null;
  secondary_team_ids?: ReadonlyArray<number> | null;
} | null;

export type IntercomFullApiSchemaCursorPages = {
  type?: "pages";
  page?: number;
  next?: IntercomFullApiSchemaStartingAfterPaging;
  per_page?: number;
  total_pages?: number;
} | null;

export type IntercomFullApiSchemaActivityLog = {
  id?: string;
  performed_by?: {
  type?: string;
  id?: string;
  email?: string;
  ip?: string;
};
  metadata?: IntercomFullApiSchemaActivityLogMetadata;
  created_at?: number;
  activity_type?: "admin_conversation_assignment_limit_change" | "admin_ticket_assignment_limit_change" | "admin_away_mode_change" | "admin_deletion" | "admin_deprovisioned" | "admin_impersonation_end" | "admin_impersonation_start" | "admin_impersonation_consent_approved" | "admin_impersonation_consent_revoked" | "admin_invite_change" | "admin_invite_creation" | "admin_invite_deletion" | "admin_login_failure" | "admin_login_success" | "admin_logout" | "admin_password_reset_request" | "admin_password_reset_success" | "admin_permission_change" | "admin_provisioned" | "admin_two_factor_auth_change" | "admin_unauthorized_sign_in_method" | "app_admin_join" | "app_authentication_method_change" | "app_data_deletion" | "app_data_export" | "app_google_sso_domain_change" | "app_identity_verification_change" | "app_name_change" | "app_outbound_address_change" | "app_package_installation" | "app_package_token_regeneration" | "app_package_uninstallation" | "app_team_creation" | "app_team_deletion" | "app_team_membership_modification" | "app_timezone_change" | "app_webhook_creation" | "app_webhook_deletion" | "articles_in_messenger_enabled_change" | "automatic_away_mode_setting_change" | "bulk_delete" | "bulk_export" | "campaign_deletion" | "campaign_state_change" | "conversation_deletion_schedule_creation" | "conversation_deletion_schedule_deletion" | "conversation_deletion_schedule_state_change" | "conversation_deletion_schedule_update" | "conversation_part_deletion" | "conversation_topic_change" | "conversation_topic_creation" | "conversation_topic_deletion" | "content_redaction_rule_creation" | "content_redaction_rule_deletion" | "content_redaction_rule_update" | "csv_import_completion" | "csv_import_creation" | "custom_authentication_token_creation" | "help_center_settings_change" | "inbound_conversations_change" | "inbox_access_change" | "macro_creation" | "macro_deletion" | "macro_update" | "malicious_domains_setting_change" | "message_deletion" | "message_state_change" | "messenger_api_secret_creation" | "messenger_api_secret_deletion" | "messenger_look_and_feel_change" | "messenger_search_required_change" | "messenger_spaces_change" | "oauth_token_revocation" | "office_hours_change" | "role_change" | "role_creation" | "role_deletion" | "ruleset_activation_title_preview" | "ruleset_creation" | "ruleset_deletion" | "search_browse_enabled_change" | "search_browse_required_change" | "seat_change" | "seat_revoke" | "security_settings_change" | "series_creation" | "series_deletion" | "series_settings_update" | "series_status_change" | "series_update" | "strip_inbound_email_links_change" | "temporary_expectation_change" | "team_assignment_limit_change" | "trusted_domains_setting_change" | "unassign_unsnoozed_at_capacity_setting_change" | "unassign_unsnoozed_when_away_setting_change" | "upfront_email_collection_change" | "allowed_attachment_filetypes_setting_change" | "attach_uploads_inline_setting_change" | "teammate_gifs_setting_change" | "user_camera_attachments_setting_change" | "user_conversation_attachments_setting_change" | "user_file_attachments_setting_change" | "user_gifs_setting_change" | "user_media_attachments_setting_change" | "user_voice_notes_setting_change" | "welcome_message_change" | "workspace_deletion_request" | "hide_csat_from_agents_setting_change";
  activity_description?: string;
} | null;

export type IntercomFullApiSchemaPagesLink = {
  type?: "pages";
  page?: number;
  next?: string | null;
  per_page?: number;
  total_pages?: number;
};

export type IntercomFullApiSchemaArticleListItem = {
  type?: "article";
  id?: string;
  workspace_id?: string;
  title?: string;
  description?: string | null;
  body?: string | null;
  author_id?: number;
  state?: "published" | "draft";
  created_at?: number;
  updated_at?: number;
  url?: string | null;
  parent_id?: number | null;
  parent_ids?: ReadonlyArray<number>;
  parent_type?: string | null;
  default_locale?: string;
  translated_content?: IntercomFullApiSchemaArticleTranslatedContent;
  tags?: IntercomFullApiSchemaTags;
};

export type IntercomFullApiSchemaArticleTranslatedContent = {
  type?: null | "article_translated_content";
  ar?: IntercomFullApiSchemaArticleContent;
  bg?: IntercomFullApiSchemaArticleContent;
  bs?: IntercomFullApiSchemaArticleContent;
  ca?: IntercomFullApiSchemaArticleContent;
  cs?: IntercomFullApiSchemaArticleContent;
  da?: IntercomFullApiSchemaArticleContent;
  de?: IntercomFullApiSchemaArticleContent;
  el?: IntercomFullApiSchemaArticleContent;
  en?: IntercomFullApiSchemaArticleContent;
  es?: IntercomFullApiSchemaArticleContent;
  et?: IntercomFullApiSchemaArticleContent;
  fi?: IntercomFullApiSchemaArticleContent;
  fr?: IntercomFullApiSchemaArticleContent;
  he?: IntercomFullApiSchemaArticleContent;
  hr?: IntercomFullApiSchemaArticleContent;
  hu?: IntercomFullApiSchemaArticleContent;
  id?: IntercomFullApiSchemaArticleContent;
  it?: IntercomFullApiSchemaArticleContent;
  ja?: IntercomFullApiSchemaArticleContent;
  ko?: IntercomFullApiSchemaArticleContent;
  lt?: IntercomFullApiSchemaArticleContent;
  lv?: IntercomFullApiSchemaArticleContent;
  mn?: IntercomFullApiSchemaArticleContent;
  nb?: IntercomFullApiSchemaArticleContent;
  nl?: IntercomFullApiSchemaArticleContent;
  pl?: IntercomFullApiSchemaArticleContent;
  pt?: IntercomFullApiSchemaArticleContent;
  ro?: IntercomFullApiSchemaArticleContent;
  ru?: IntercomFullApiSchemaArticleContent;
  sl?: IntercomFullApiSchemaArticleContent;
  sr?: IntercomFullApiSchemaArticleContent;
  sv?: IntercomFullApiSchemaArticleContent;
  tr?: IntercomFullApiSchemaArticleContent;
  vi?: IntercomFullApiSchemaArticleContent;
  "pt-BR"?: IntercomFullApiSchemaArticleContent;
  "zh-CN"?: IntercomFullApiSchemaArticleContent;
  "zh-TW"?: IntercomFullApiSchemaArticleContent;
} | null;

export type IntercomFullApiSchemaArticleSearchHighlights = {
  article_id?: string;
  highlighted_title?: ReadonlyArray<{
  type?: "highlight" | "plain";
  text?: string;
}>;
  highlighted_summary?: ReadonlyArray<ReadonlyArray<{
  type?: "highlight" | "plain";
  text?: string;
}>>;
};

export type IntercomFullApiSchemaDatetime = (string | number);

export type IntercomFullApiSchemaContactTags = {
  data?: ReadonlyArray<IntercomFullApiSchemaAddressableList>;
  url?: string;
  total_count?: number;
  has_more?: boolean;
} | null;

export type IntercomFullApiSchemaContactNotes = {
  data?: ReadonlyArray<IntercomFullApiSchemaAddressableList>;
  url?: string;
  total_count?: number;
  has_more?: boolean;
};

export type IntercomFullApiSchemaContactCompanies = {
  data?: ReadonlyArray<IntercomFullApiSchemaCompanyData>;
  url?: string;
  total_count?: number;
  has_more?: boolean;
};

export type IntercomFullApiSchemaContactLocation = {
  type?: string | null;
  country?: string | null;
  region?: string | null;
  city?: string | null;
};

export type IntercomFullApiSchemaContactSocialProfiles = {
  data?: ReadonlyArray<IntercomFullApiSchemaSocialProfile>;
};

export type IntercomFullApiSchemaContactReference = {
  type?: "contact";
  id?: string;
  external_id?: string | null;
};

export type IntercomFullApiSchemaTranslation = {
  name?: string;
  description?: string;
  locale?: string;
};

export type IntercomFullApiSchemaReference = {
  type?: string;
  id?: string | null;
};

export type IntercomFullApiSchemaSingleFilterSearchRequest = {
  field?: string;
  operator?: "=" | "!=" | "IN" | "NIN" | "<" | ">" | "~" | "!~" | "^" | "$";
  value?: (string | number | boolean | ReadonlyArray<(string | number)>);
};

export type IntercomFullApiSchemaMultipleFilterSearchRequest = {
  operator?: "AND" | "OR";
  value?: (ReadonlyArray<IntercomFullApiSchemaMultipleFilterSearchRequest> | ReadonlyArray<IntercomFullApiSchemaSingleFilterSearchRequest>);
};

export type IntercomFullApiSchemaStartingAfterPaging = {
  per_page?: number;
  starting_after?: string | null;
} | null;

export type IntercomFullApiSchemaConversationListItem = {
  type?: string;
  id?: string;
  title?: string | null;
  created_at?: number;
  updated_at?: number;
  waiting_since?: number | null;
  snoozed_until?: number | null;
  open?: boolean;
  state?: "open" | "closed" | "snoozed";
  read?: boolean;
  priority?: "priority" | "not_priority";
  admin_assignee_id?: number | null;
  team_assignee_id?: number | null;
  company?: IntercomFullApiSchemaCompany;
  tags?: IntercomFullApiSchemaTags;
  conversation_rating?: IntercomFullApiSchemaConversationRating;
  source?: IntercomFullApiSchemaConversationSource;
  contacts?: IntercomFullApiSchemaConversationContacts;
  teammates?: IntercomFullApiSchemaConversationTeammates;
  custom_attributes?: IntercomFullApiSchemaCustomAttributes;
  first_contact_reply?: IntercomFullApiSchemaConversationFirstContactReply;
  sla_applied?: IntercomFullApiSchemaSlaApplied;
  statistics?: IntercomFullApiSchemaConversationStatistics;
  linked_objects?: IntercomFullApiSchemaLinkedObjectList;
  ai_agent_participated?: boolean;
  ai_agent?: IntercomFullApiSchemaAiAgent;
};

export type IntercomFullApiSchemaTags = {
  type?: "tag.list";
  tags?: ReadonlyArray<IntercomFullApiSchemaTag>;
};

export type IntercomFullApiSchemaConversationRating = {
  rating?: number;
  remark?: string;
  created_at?: number;
  updated_at?: number;
  contact?: IntercomFullApiSchemaContactReference;
  teammate?: IntercomFullApiSchemaReference;
} | null;

export type IntercomFullApiSchemaConversationSource = {
  type?: "conversation" | "email" | "facebook" | "instagram" | "phone_call" | "phone_switch" | "push" | "sms" | "twitter" | "whatsapp";
  id?: string;
  delivered_as?: string;
  subject?: string;
  body?: string;
  author?: IntercomFullApiSchemaConversationPartAuthor;
  attachments?: ReadonlyArray<IntercomFullApiSchemaPartAttachment>;
  url?: string | null;
  redacted?: boolean;
};

export type IntercomFullApiSchemaConversationContacts = {
  type?: "contact.list";
  contacts?: ReadonlyArray<IntercomFullApiSchemaContactReference>;
};

export type IntercomFullApiSchemaConversationTeammates = {
  type?: string;
  teammates?: ReadonlyArray<IntercomFullApiSchemaReference>;
} | null;

export type IntercomFullApiSchemaCustomAttributes = {
  readonly [key: string]: (string | number | IntercomFullApiSchemaDatetime | IntercomFullApiSchemaCustomObjectInstanceList) | undefined;
};

export type IntercomFullApiSchemaConversationFirstContactReply = {
  created_at?: number;
  type?: string;
  url?: string | null;
} | null;

export type IntercomFullApiSchemaSlaApplied = {
  type?: string;
  sla_name?: string;
  sla_status?: "hit" | "missed" | "cancelled" | "active";
} | null;

export type IntercomFullApiSchemaConversationStatistics = {
  type?: string;
  time_to_assignment?: number;
  time_to_admin_reply?: number;
  time_to_first_close?: number;
  time_to_last_close?: number;
  median_time_to_reply?: number;
  first_contact_reply_at?: number;
  first_assignment_at?: number;
  first_admin_reply_at?: number;
  first_close_at?: number;
  last_assignment_at?: number;
  last_assignment_admin_reply_at?: number;
  last_contact_reply_at?: number;
  last_admin_reply_at?: number;
  last_close_at?: number;
  last_closed_by_id?: string;
  count_reopens?: number;
  count_assignments?: number;
  count_conversation_parts?: number;
  assigned_team_first_response_time?: ReadonlyArray<IntercomFullApiSchemaConversationResponseTime>;
  assigned_team_first_response_time_in_office_hours?: ReadonlyArray<IntercomFullApiSchemaConversationResponseTime>;
  handling_time?: number;
  adjusted_handling_time?: number | null;
} | null;

export type IntercomFullApiSchemaConversationParts = {
  type?: "conversation_part.list";
  conversation_parts?: ReadonlyArray<IntercomFullApiSchemaConversationPart>;
  total_count?: number;
};

export type IntercomFullApiSchemaLinkedObjectList = {
  type?: "list";
  total_count?: number;
  has_more?: boolean;
  data?: ReadonlyArray<IntercomFullApiSchemaLinkedObject>;
};

export type IntercomFullApiSchemaAiAgent = {
  source_type?: "essentials_plan_setup" | "profile" | "workflow" | "workflow_preview" | "fin_preview";
  source_title?: string | null;
  last_answer_type?: null | "ai_answer" | "custom_answer";
  resolution_state?: "assumed_resolution" | "confirmed_resolution" | "escalated" | "negative_feedback" | "procedure_handoff" | null;
  rating?: number | null;
  rating_remark?: string | null;
  created_at?: number | null;
  updated_at?: number | null;
  content_sources?: IntercomFullApiSchemaContentSourcesList;
};

export type IntercomFullApiSchemaTicketRequestCustomAttributes = {
  readonly [key: string]: (string | null | number | boolean | ReadonlyArray<IntercomFullApiSchemaJsonValue>) | undefined;
};

export type IntercomFullApiSchemaTicketCustomAttributes = {
  readonly [key: string]: (string | null | number | boolean | ReadonlyArray<IntercomFullApiSchemaJsonValue> | IntercomFullApiSchemaFileAttribute) | undefined;
};

export type IntercomFullApiSchemaTicketState = {
  type?: string;
  id?: string;
  category?: "submitted" | "in_progress" | "waiting_on_customer" | "resolved";
  internal_label?: string;
  external_label?: string;
} | null;

export type IntercomFullApiSchemaTicketContacts = {
  type?: "contact.list";
  contacts?: ReadonlyArray<IntercomFullApiSchemaContactReference>;
};

export type IntercomFullApiSchemaTicketParts = {
  type?: "ticket_part.list";
  ticket_parts?: ReadonlyArray<IntercomFullApiSchemaTicketPart>;
  total_count?: number;
};

export type IntercomFullApiSchemaCustomerRequest = ({
  intercom_user_id: string;
} | {
  user_id: string;
} | {
  email: string;
});

export type IntercomFullApiSchemaContactReplyConversationRequest = (IntercomFullApiSchemaContactReplyIntercomUserIdRequest | IntercomFullApiSchemaContactReplyEmailRequest | IntercomFullApiSchemaContactReplyUserIdRequest);

export type IntercomFullApiSchemaAdminReplyConversationRequest = {
  message_type: "comment" | "note" | "quick_reply";
  type: "admin";
  body?: string;
  admin_id: string;
  created_at?: number;
  reply_options?: ReadonlyArray<IntercomFullApiSchemaQuickReplyOption>;
  attachment_urls?: ReadonlyArray<string>;
  attachment_files?: ReadonlyArray<IntercomFullApiSchemaConversationAttachmentFiles>;
  skip_notifications?: boolean;
};

export type IntercomFullApiSchemaDataEventSummaryItem = {
  name?: string;
  first?: string;
  last?: string;
  count?: number;
  description?: string;
} | null;

export type IntercomFullApiSchemaGroupTranslatedContent = {
  type?: null | "group_translated_content";
  ar?: IntercomFullApiSchemaGroupContent;
  bg?: IntercomFullApiSchemaGroupContent;
  bs?: IntercomFullApiSchemaGroupContent;
  ca?: IntercomFullApiSchemaGroupContent;
  cs?: IntercomFullApiSchemaGroupContent;
  da?: IntercomFullApiSchemaGroupContent;
  de?: IntercomFullApiSchemaGroupContent;
  el?: IntercomFullApiSchemaGroupContent;
  en?: IntercomFullApiSchemaGroupContent;
  es?: IntercomFullApiSchemaGroupContent;
  et?: IntercomFullApiSchemaGroupContent;
  fi?: IntercomFullApiSchemaGroupContent;
  fr?: IntercomFullApiSchemaGroupContent;
  he?: IntercomFullApiSchemaGroupContent;
  hr?: IntercomFullApiSchemaGroupContent;
  hu?: IntercomFullApiSchemaGroupContent;
  id?: IntercomFullApiSchemaGroupContent;
  it?: IntercomFullApiSchemaGroupContent;
  ja?: IntercomFullApiSchemaGroupContent;
  ko?: IntercomFullApiSchemaGroupContent;
  lt?: IntercomFullApiSchemaGroupContent;
  lv?: IntercomFullApiSchemaGroupContent;
  mn?: IntercomFullApiSchemaGroupContent;
  nb?: IntercomFullApiSchemaGroupContent;
  nl?: IntercomFullApiSchemaGroupContent;
  pl?: IntercomFullApiSchemaGroupContent;
  pt?: IntercomFullApiSchemaGroupContent;
  ro?: IntercomFullApiSchemaGroupContent;
  ru?: IntercomFullApiSchemaGroupContent;
  sl?: IntercomFullApiSchemaGroupContent;
  sr?: IntercomFullApiSchemaGroupContent;
  sv?: IntercomFullApiSchemaGroupContent;
  tr?: IntercomFullApiSchemaGroupContent;
  vi?: IntercomFullApiSchemaGroupContent;
  "pt-BR"?: IntercomFullApiSchemaGroupContent;
  "zh-CN"?: IntercomFullApiSchemaGroupContent;
  "zh-TW"?: IntercomFullApiSchemaGroupContent;
} | null;

export type IntercomFullApiSchemaInternalArticleListItem = {
  type?: "internal_article";
  id?: string;
  title?: string;
  body?: string | null;
  owner_id?: number;
  author_id?: number;
  created_at?: number;
  updated_at?: number;
  locale?: string;
};

export type IntercomFullApiSchemaApp = {
  type?: string;
  id_code?: string;
  name?: string;
  region?: string;
  timezone?: string;
  created_at?: number;
  identity_verification?: boolean;
} | null;

export type IntercomFullApiSchemaNewsfeedAssignment = {
  newsfeed_id?: number;
  published_at?: number;
};

export type IntercomFullApiSchemaAdminPriorityLevel = {
  primary_admin_ids?: ReadonlyArray<number> | null;
  secondary_admin_ids?: ReadonlyArray<number> | null;
} | null;

export type IntercomFullApiSchemaTicketStateDetailed = {
  type?: string;
  id?: string;
  category?: "submitted" | "in_progress" | "waiting_on_customer" | "resolved";
  internal_label?: string;
  external_label?: string;
  archived?: boolean;
  ticket_types?: {
  type?: string;
  data?: ReadonlyArray<IntercomFullApiSchemaTicketType>;
};
} | null;

export type IntercomFullApiSchemaTicketTypeAttributeList = {
  type?: string;
  ticket_type_attributes?: ReadonlyArray<IntercomFullApiSchemaTicketTypeAttribute>;
};

export type IntercomFullApiSchemaContactReplyTicketIntercomUserIdRequest = IntercomFullApiSchemaContactReplyBaseRequest;

export type IntercomFullApiSchemaContactReplyTicketUserIdRequest = IntercomFullApiSchemaContactReplyBaseRequest;

export type IntercomFullApiSchemaContactReplyTicketEmailRequest = IntercomFullApiSchemaContactReplyBaseRequest;

export type IntercomFullApiSchemaTicketPartAuthor = {
  type?: "admin" | "bot" | "team" | "user";
  id?: string;
  name?: string | null;
  email?: string;
};

export type IntercomFullApiSchemaPartAttachment = {
  type?: string;
  name?: string;
  url?: string;
  content_type?: string;
  filesize?: number;
  width?: number;
  height?: number;
};

export type IntercomFullApiSchemaActivityLogMetadata = {
  sign_in_method?: string | null;
  external_id?: string | null;
  away_mode?: boolean | null;
  away_status_reason?: string | null;
  reassign_conversations?: boolean | null;
  source?: string | null;
  auto_changed?: string | null;
  update_by?: number | null;
  update_by_name?: string | null;
  conversation_assignment_limit?: number | null;
  ticket_assignment_limit?: number | null;
  team?: {
  id?: number;
  name?: string;
} | null;
  team_assignment_limit?: number | null;
  enabled?: boolean | null;
  mode?: string | null;
  consent_id?: number | null;
  expired_at?: string | null;
  before?: {} | null;
  after?: {} | null;
} | null;

export type IntercomFullApiSchemaArticleContent = {
  type?: null | "article_content";
  title?: string;
  description?: string;
  body?: string;
  author_id?: number;
  state?: "published" | "draft";
  created_at?: number;
  updated_at?: number;
  url?: string;
} | null;

export type IntercomFullApiSchemaAddressableList = {
  type?: string;
  id?: string;
  url?: string;
};

export type IntercomFullApiSchemaCompanyData = {
  id?: string;
  type?: "company";
  url?: string;
};

export type IntercomFullApiSchemaSocialProfile = {
  type?: string;
  name?: string;
  url?: string;
};

export type IntercomFullApiSchemaConversationPartAuthor = {
  type?: string;
  id?: string;
  name?: string | null;
  email?: string;
  from_ai_agent?: boolean;
  is_ai_answer?: boolean;
};

export type IntercomFullApiSchemaCustomObjectInstanceList = {
  type?: string;
  instances?: ReadonlyArray<IntercomFullApiSchemaCustomObjectInstance>;
};

export type IntercomFullApiSchemaConversationResponseTime = {
  team_id?: number;
  team_name?: string;
  response_time?: number;
};

export type IntercomFullApiSchemaConversationPart = {
  type?: string;
  id?: string;
  part_type?: string;
  body?: string | null;
  created_at?: number;
  updated_at?: number;
  notified_at?: number;
  assigned_to?: IntercomFullApiSchemaReference;
  author?: IntercomFullApiSchemaConversationPartAuthor;
  attachments?: ReadonlyArray<IntercomFullApiSchemaPartAttachment>;
  external_id?: string | null;
  redacted?: boolean;
  email_message_metadata?: IntercomFullApiSchemaEmailMessageMetadata;
  metadata?: IntercomFullApiSchemaConversationPartMetadata;
  state?: "open" | "closed" | "snoozed";
  tags?: ReadonlyArray<IntercomFullApiSchemaTagBasic> | null;
  event_details?: IntercomFullApiSchemaEventDetails;
  app_package_code?: string | null;
};

export type IntercomFullApiSchemaLinkedObject = {
  type?: "ticket" | "conversation";
  id?: string;
  category?: "Customer" | "Back-office" | "Tracker" | null;
};

export type IntercomFullApiSchemaContentSourcesList = {
  type?: "content_source.list";
  total_count?: number;
  content_sources?: ReadonlyArray<IntercomFullApiSchemaContentSource>;
};

export type IntercomFullApiSchemaFileAttribute = {
  type?: string;
  name?: string;
  url?: string;
  content_type?: string;
  filesize?: number;
  width?: number;
  height?: number;
};

export type IntercomFullApiSchemaTicketPart = {
  type?: string;
  id?: string;
  part_type?: string;
  body?: string | null;
  previous_ticket_state?: "submitted" | "in_progress" | "waiting_on_customer" | "resolved";
  ticket_state?: "submitted" | "in_progress" | "waiting_on_customer" | "resolved";
  created_at?: number;
  updated_at?: number;
  assigned_to?: IntercomFullApiSchemaReference;
  author?: IntercomFullApiSchemaTicketPartAuthor;
  attachments?: ReadonlyArray<IntercomFullApiSchemaPartAttachment>;
  external_id?: string | null;
  redacted?: boolean;
  app_package_code?: string;
  updated_attribute_data?: {
  attribute: {
  type: "attribute";
  id: string;
  label: string;
};
  value: {
  type: "value";
  id: (string | null | ReadonlyArray<number>);
  label: (string | ReadonlyArray<string>);
};
} | null;
};

export type IntercomFullApiSchemaContactReplyIntercomUserIdRequest = IntercomFullApiSchemaContactReplyBaseRequest;

export type IntercomFullApiSchemaContactReplyEmailRequest = IntercomFullApiSchemaContactReplyBaseRequest;

export type IntercomFullApiSchemaContactReplyUserIdRequest = IntercomFullApiSchemaContactReplyBaseRequest;

export type IntercomFullApiSchemaQuickReplyOption = {
  text: string;
  uuid: string;
};

export type IntercomFullApiSchemaConversationAttachmentFiles = {
  content_type?: string;
  data?: string;
  name?: string;
};

export type IntercomFullApiSchemaGroupContent = {
  type?: null | "group_content";
  name?: string;
  description?: string;
} | null;

export type IntercomFullApiSchemaContactReplyBaseRequest = {
  message_type: "comment";
  type: "user";
  body: string;
  created_at?: number;
  attachment_urls?: ReadonlyArray<string>;
  reply_options?: ReadonlyArray<{
  text: string;
  uuid: string;
}>;
};

export type IntercomFullApiSchemaEmailMessageMetadata = {
  subject?: string;
  email_address_headers?: ReadonlyArray<IntercomFullApiSchemaEmailAddressHeader>;
  message_id?: string | null;
};

export type IntercomFullApiSchemaConversationPartMetadata = {
  quick_reply_options?: ReadonlyArray<IntercomFullApiSchemaQuickReplyOption>;
  quick_reply_uuid?: string;
};

export type IntercomFullApiSchemaEventDetails = (IntercomFullApiSchemaConversationAttributeUpdatedByWorkflow | IntercomFullApiSchemaConversationAttributeUpdatedByAdmin | IntercomFullApiSchemaConversationAttributeUpdatedByUser | IntercomFullApiSchemaCustomActionStarted | IntercomFullApiSchemaCustomActionFinished | IntercomFullApiSchemaOperatorWorkflowEvent);

export type IntercomFullApiSchemaContentSource = {
  content_type?: "file" | "article" | "external_content" | "content_snippet" | "workflow_connector_action";
  url?: string;
  title?: string;
  locale?: string;
};

export type IntercomFullApiSchemaEmailAddressHeader = {
  type?: string;
  email_address?: string;
  name?: string | null;
};

export type IntercomFullApiSchemaConversationAttributeUpdatedByWorkflow = {
  workflow?: {
  name?: string;
};
  attribute?: {
  name?: string;
};
  value?: {
  name?: string;
};
};

export type IntercomFullApiSchemaConversationAttributeUpdatedByAdmin = {
  attribute?: {
  name?: string;
};
  value?: {
  name?: string;
  previous?: string | null;
};
};

export type IntercomFullApiSchemaConversationAttributeUpdatedByUser = {
  attribute?: {
  name?: string;
};
  value?: {
  name?: string;
  previous?: string | null;
};
};

export type IntercomFullApiSchemaCustomActionStarted = {
  action?: {
  name?: string;
};
};

export type IntercomFullApiSchemaCustomActionFinished = {
  action?: {
  name?: string;
  result?: "success" | "failed";
};
};

export type IntercomFullApiSchemaOperatorWorkflowEvent = {
  workflow?: {
  name?: string;
};
  event?: {
  type?: string;
  result?: string;
};
};

export interface IntercomFullApiOperationQueryMap {
  "listAdmins": {
  display_avatar?: boolean;
};
  "retrieveAdmin": {};
  "setAwayAdmin": {};
  "listActivityLogs": {
  created_at_after: string;
  created_at_before?: string;
};
  "listContentImportSources": {};
  "createContentImportSource": {};
  "deleteContentImportSource": {};
  "getContentImportSource": {};
  "updateContentImportSource": {};
  "listExternalPages": {};
  "createExternalPage": {};
  "deleteExternalPage": {};
  "getExternalPage": {};
  "updateExternalPage": {};
  "listArticles": {};
  "createArticle": {};
  "deleteArticle": {};
  "retrieveArticle": {};
  "updateArticle": {};
  "searchArticles": {
  phrase?: string;
  state?: string;
  help_center_id?: number;
  highlight?: boolean;
};
  "listAwayStatusReasons": {};
  "listBrands": {};
  "retrieveBrand": {};
  "listCalls": {
  page?: number;
  per_page?: number;
};
  "showCall": {};
  "showCallRecording": {};
  "showCallTranscript": {};
  "listCallsWithTranscripts": {};
  "retrieveCompany": {
  name?: string;
  company_id?: string;
  tag_id?: string;
  segment_id?: string;
  page?: number;
  per_page?: number;
};
  "createOrUpdateCompany": {};
  "deleteCompany": {};
  "RetrieveACompanyById": {};
  "UpdateCompany": {};
  "ListAttachedContacts": {};
  "listCompanyNotes": {};
  "ListAttachedSegmentsForCompanies": {};
  "listAllCompanies": {
  page?: number;
  per_page?: number;
  order?: string;
};
  "scrollOverAllCompanies": {
  scroll_param?: string;
};
  "ListContacts": {};
  "CreateContact": {};
  "DeleteContact": {};
  "ShowContact": {};
  "UpdateContact": {};
  "ArchiveContact": {};
  "BlockContact": {};
  "listCompaniesForAContact": {};
  "attachContactToACompany": {};
  "detachContactFromACompany": {};
  "listNotes": {};
  "createNote": {};
  "listSegmentsForAContact": {};
  "listSubscriptionsForAContact": {};
  "attachSubscriptionTypeToContact": {};
  "detachSubscriptionTypeToContact": {};
  "listTagsForAContact": {};
  "attachTagToContact": {};
  "detachTagFromContact": {};
  "UnarchiveContact": {};
  "ShowContactByExternalId": {};
  "MergeContact": {};
  "SearchContacts": {};
  "listConversations": {
  per_page?: number;
  starting_after?: string;
};
  "createConversation": {};
  "deleteConversation": {};
  "retrieveConversation": {
  display_as?: string;
  include_translations?: boolean;
};
  "updateConversation": {
  display_as?: string;
};
  "convertConversationToTicket": {};
  "attachContactToConversation": {};
  "detachContactFromConversation": {};
  "manageConversation": {};
  "replyConversation": {};
  "attachTagToConversation": {};
  "detachTagFromConversation": {};
  "redactConversation": {};
  "searchConversations": {};
  "deleteCustomObjectInstancesById": {
  external_id: string;
};
  "getCustomObjectInstancesByExternalId": {
  external_id: string;
};
  "createCustomObjectInstances": {};
  "deleteCustomObjectInstancesByExternalId": {};
  "getCustomObjectInstancesById": {};
  "lisDataAttributes": {
  model?: "contact" | "company" | "conversation";
  include_archived?: boolean;
};
  "createDataAttribute": {};
  "updateDataAttribute": {};
  "downloadDataExport": {};
  "get_/download/reporting_data/{job_identifier}": {
  app_id: string;
  job_identifier: string;
};
  "listEmails": {};
  "retrieveEmail": {};
  "lisDataEvents": {
  filter: ({
  user_id: string;
} | {
  intercom_user_id: string;
} | {
  email: string;
});
  type: string;
  summary?: boolean;
};
  "createDataEvent": {};
  "dataEventSummaries": {};
  "cancelDataExport": {};
  "createDataExport": {};
  "getDataExport": {};
  "get_/export/reporting_data/{job_identifier}": {
  app_id: string;
  client_id: string;
  job_identifier: string;
};
  "post_/export/reporting_data/enqueue": {};
  "get_/export/reporting_data/get_datasets": {};
  "exportWorkflow": {};
  "collectFinVoiceCallById": {};
  "collectFinVoiceCallsByConversationId": {};
  "collectFinVoiceCallByExternalId": {};
  "collectFinVoiceCallByPhoneNumber": {};
  "registerFinVoiceCall": {};
  "replyToFin": {};
  "startFinConversation": {};
  "listAllCollections": {};
  "createCollection": {};
  "deleteCollection": {};
  "retrieveCollection": {};
  "updateCollection": {};
  "listHelpCenters": {};
  "retrieveHelpCenter": {};
  "listInternalArticles": {};
  "createInternalArticle": {};
  "deleteInternalArticle": {};
  "retrieveInternalArticle": {};
  "updateInternalArticle": {};
  "searchInternalArticles": {
  folder_id?: string;
};
  "getIpAllowlist": {};
  "updateIpAllowlist": {};
  "jobsStatus": {};
  "identifyAdmin": {};
  "createMessage": {};
  "listNewsItems": {};
  "createNewsItem": {};
  "deleteNewsItem": {};
  "retrieveNewsItem": {};
  "updateNewsItem": {};
  "listNewsfeeds": {};
  "retrieveNewsfeed": {};
  "listLiveNewsfeedItems": {};
  "retrieveNote": {};
  "createPhoneSwitch": {};
  "listSegments": {
  include_count?: boolean;
};
  "retrieveSegment": {};
  "listSubscriptionTypes": {};
  "listTags": {};
  "createTag": {};
  "deleteTag": {};
  "findTag": {};
  "listTeams": {};
  "retrieveTeam": {};
  "listTicketStates": {};
  "listTicketTypes": {};
  "createTicketType": {};
  "getTicketType": {};
  "updateTicketType": {};
  "createTicketTypeAttribute": {};
  "updateTicketTypeAttribute": {};
  "createTicket": {};
  "deleteTicket": {};
  "getTicket": {};
  "updateTicket": {};
  "replyTicket": {};
  "attachTagToTicket": {};
  "detachTagFromTicket": {};
  "enqueueCreateTicket": {};
  "searchTickets": {};
  "retrieveVisitorWithUserId": {
  user_id: string;
};
  "updateVisitor": {};
  "convertVisitor": {};
}

export interface IntercomFullApiOperationQueryRequiredMap {
  "listAdmins": false;
  "retrieveAdmin": false;
  "setAwayAdmin": false;
  "listActivityLogs": true;
  "listContentImportSources": false;
  "createContentImportSource": false;
  "deleteContentImportSource": false;
  "getContentImportSource": false;
  "updateContentImportSource": false;
  "listExternalPages": false;
  "createExternalPage": false;
  "deleteExternalPage": false;
  "getExternalPage": false;
  "updateExternalPage": false;
  "listArticles": false;
  "createArticle": false;
  "deleteArticle": false;
  "retrieveArticle": false;
  "updateArticle": false;
  "searchArticles": false;
  "listAwayStatusReasons": false;
  "listBrands": false;
  "retrieveBrand": false;
  "listCalls": false;
  "showCall": false;
  "showCallRecording": false;
  "showCallTranscript": false;
  "listCallsWithTranscripts": false;
  "retrieveCompany": false;
  "createOrUpdateCompany": false;
  "deleteCompany": false;
  "RetrieveACompanyById": false;
  "UpdateCompany": false;
  "ListAttachedContacts": false;
  "listCompanyNotes": false;
  "ListAttachedSegmentsForCompanies": false;
  "listAllCompanies": false;
  "scrollOverAllCompanies": false;
  "ListContacts": false;
  "CreateContact": false;
  "DeleteContact": false;
  "ShowContact": false;
  "UpdateContact": false;
  "ArchiveContact": false;
  "BlockContact": false;
  "listCompaniesForAContact": false;
  "attachContactToACompany": false;
  "detachContactFromACompany": false;
  "listNotes": false;
  "createNote": false;
  "listSegmentsForAContact": false;
  "listSubscriptionsForAContact": false;
  "attachSubscriptionTypeToContact": false;
  "detachSubscriptionTypeToContact": false;
  "listTagsForAContact": false;
  "attachTagToContact": false;
  "detachTagFromContact": false;
  "UnarchiveContact": false;
  "ShowContactByExternalId": false;
  "MergeContact": false;
  "SearchContacts": false;
  "listConversations": false;
  "createConversation": false;
  "deleteConversation": false;
  "retrieveConversation": false;
  "updateConversation": false;
  "convertConversationToTicket": false;
  "attachContactToConversation": false;
  "detachContactFromConversation": false;
  "manageConversation": false;
  "replyConversation": false;
  "attachTagToConversation": false;
  "detachTagFromConversation": false;
  "redactConversation": false;
  "searchConversations": false;
  "deleteCustomObjectInstancesById": true;
  "getCustomObjectInstancesByExternalId": true;
  "createCustomObjectInstances": false;
  "deleteCustomObjectInstancesByExternalId": false;
  "getCustomObjectInstancesById": false;
  "lisDataAttributes": false;
  "createDataAttribute": false;
  "updateDataAttribute": false;
  "downloadDataExport": false;
  "get_/download/reporting_data/{job_identifier}": true;
  "listEmails": false;
  "retrieveEmail": false;
  "lisDataEvents": true;
  "createDataEvent": false;
  "dataEventSummaries": false;
  "cancelDataExport": false;
  "createDataExport": false;
  "getDataExport": false;
  "get_/export/reporting_data/{job_identifier}": true;
  "post_/export/reporting_data/enqueue": false;
  "get_/export/reporting_data/get_datasets": false;
  "exportWorkflow": false;
  "collectFinVoiceCallById": false;
  "collectFinVoiceCallsByConversationId": false;
  "collectFinVoiceCallByExternalId": false;
  "collectFinVoiceCallByPhoneNumber": false;
  "registerFinVoiceCall": false;
  "replyToFin": false;
  "startFinConversation": false;
  "listAllCollections": false;
  "createCollection": false;
  "deleteCollection": false;
  "retrieveCollection": false;
  "updateCollection": false;
  "listHelpCenters": false;
  "retrieveHelpCenter": false;
  "listInternalArticles": false;
  "createInternalArticle": false;
  "deleteInternalArticle": false;
  "retrieveInternalArticle": false;
  "updateInternalArticle": false;
  "searchInternalArticles": false;
  "getIpAllowlist": false;
  "updateIpAllowlist": false;
  "jobsStatus": false;
  "identifyAdmin": false;
  "createMessage": false;
  "listNewsItems": false;
  "createNewsItem": false;
  "deleteNewsItem": false;
  "retrieveNewsItem": false;
  "updateNewsItem": false;
  "listNewsfeeds": false;
  "retrieveNewsfeed": false;
  "listLiveNewsfeedItems": false;
  "retrieveNote": false;
  "createPhoneSwitch": false;
  "listSegments": false;
  "retrieveSegment": false;
  "listSubscriptionTypes": false;
  "listTags": false;
  "createTag": false;
  "deleteTag": false;
  "findTag": false;
  "listTeams": false;
  "retrieveTeam": false;
  "listTicketStates": false;
  "listTicketTypes": false;
  "createTicketType": false;
  "getTicketType": false;
  "updateTicketType": false;
  "createTicketTypeAttribute": false;
  "updateTicketTypeAttribute": false;
  "createTicket": false;
  "deleteTicket": false;
  "getTicket": false;
  "updateTicket": false;
  "replyTicket": false;
  "attachTagToTicket": false;
  "detachTagFromTicket": false;
  "enqueueCreateTicket": false;
  "searchTickets": false;
  "retrieveVisitorWithUserId": true;
  "updateVisitor": false;
  "convertVisitor": false;
}

export interface IntercomFullApiOperationRequestBodyMap {
  "listAdmins": never;
  "retrieveAdmin": never;
  "setAwayAdmin": {
  away_mode_enabled: boolean;
  away_mode_reassign: boolean;
  away_status_reason_id?: number;
};
  "listActivityLogs": never;
  "listContentImportSources": never;
  "createContentImportSource": IntercomFullApiSchemaCreateContentImportSourceRequest;
  "deleteContentImportSource": never;
  "getContentImportSource": never;
  "updateContentImportSource": IntercomFullApiSchemaUpdateContentImportSourceRequest;
  "listExternalPages": never;
  "createExternalPage": IntercomFullApiSchemaCreateExternalPageRequest;
  "deleteExternalPage": never;
  "getExternalPage": never;
  "updateExternalPage": IntercomFullApiSchemaUpdateExternalPageRequest;
  "listArticles": never;
  "createArticle": IntercomFullApiSchemaCreateArticleRequest;
  "deleteArticle": never;
  "retrieveArticle": never;
  "updateArticle": IntercomFullApiSchemaUpdateArticleRequest;
  "searchArticles": never;
  "listAwayStatusReasons": never;
  "listBrands": never;
  "retrieveBrand": never;
  "listCalls": never;
  "showCall": never;
  "showCallRecording": never;
  "showCallTranscript": never;
  "listCallsWithTranscripts": {
  conversation_ids: ReadonlyArray<string>;
};
  "retrieveCompany": never;
  "createOrUpdateCompany": IntercomFullApiSchemaCreateOrUpdateCompanyRequest;
  "deleteCompany": never;
  "RetrieveACompanyById": never;
  "UpdateCompany": IntercomFullApiSchemaUpdateCompanyRequest;
  "ListAttachedContacts": never;
  "listCompanyNotes": never;
  "ListAttachedSegmentsForCompanies": never;
  "listAllCompanies": never;
  "scrollOverAllCompanies": never;
  "ListContacts": never;
  "CreateContact": IntercomFullApiSchemaCreateContactRequest;
  "DeleteContact": never;
  "ShowContact": never;
  "UpdateContact": IntercomFullApiSchemaUpdateContactRequest;
  "ArchiveContact": never;
  "BlockContact": never;
  "listCompaniesForAContact": never;
  "attachContactToACompany": {
  id: string;
};
  "detachContactFromACompany": never;
  "listNotes": never;
  "createNote": {
  body: string;
  admin_id?: string;
};
  "listSegmentsForAContact": never;
  "listSubscriptionsForAContact": never;
  "attachSubscriptionTypeToContact": {
  id: string;
  consent_type: string;
};
  "detachSubscriptionTypeToContact": never;
  "listTagsForAContact": never;
  "attachTagToContact": {
  id: string;
};
  "detachTagFromContact": never;
  "UnarchiveContact": never;
  "ShowContactByExternalId": never;
  "MergeContact": IntercomFullApiSchemaMergeContactsRequest;
  "SearchContacts": IntercomFullApiSchemaSearchRequest;
  "listConversations": never;
  "createConversation": IntercomFullApiSchemaCreateConversationRequest;
  "deleteConversation": never;
  "retrieveConversation": never;
  "updateConversation": IntercomFullApiSchemaUpdateConversationRequest;
  "convertConversationToTicket": IntercomFullApiSchemaConvertConversationToTicketRequest;
  "attachContactToConversation": IntercomFullApiSchemaAttachContactToConversationRequest;
  "detachContactFromConversation": IntercomFullApiSchemaDetachContactFromConversationRequest;
  "manageConversation": (IntercomFullApiSchemaCloseConversationRequest | IntercomFullApiSchemaSnoozeConversationRequest | IntercomFullApiSchemaOpenConversationRequest | IntercomFullApiSchemaAssignConversationRequest);
  "replyConversation": IntercomFullApiSchemaReplyConversationRequest;
  "attachTagToConversation": {
  id: string;
  admin_id: string;
};
  "detachTagFromConversation": {
  admin_id: string;
};
  "redactConversation": IntercomFullApiSchemaRedactConversationRequest;
  "searchConversations": IntercomFullApiSchemaSearchRequest;
  "deleteCustomObjectInstancesById": never;
  "getCustomObjectInstancesByExternalId": never;
  "createCustomObjectInstances": IntercomFullApiSchemaCreateOrUpdateCustomObjectInstanceRequest;
  "deleteCustomObjectInstancesByExternalId": never;
  "getCustomObjectInstancesById": never;
  "lisDataAttributes": never;
  "createDataAttribute": IntercomFullApiSchemaCreateDataAttributeRequest;
  "updateDataAttribute": IntercomFullApiSchemaUpdateDataAttributeRequest;
  "downloadDataExport": never;
  "get_/download/reporting_data/{job_identifier}": never;
  "listEmails": never;
  "retrieveEmail": never;
  "lisDataEvents": never;
  "createDataEvent": IntercomFullApiSchemaCreateDataEventRequest;
  "dataEventSummaries": IntercomFullApiSchemaCreateDataEventSummariesRequest;
  "cancelDataExport": never;
  "createDataExport": IntercomFullApiSchemaCreateDataExportsRequest;
  "getDataExport": never;
  "get_/export/reporting_data/{job_identifier}": never;
  "post_/export/reporting_data/enqueue": {
  dataset_id: string;
  attribute_ids: ReadonlyArray<string>;
  start_time: number;
  end_time: number;
};
  "get_/export/reporting_data/get_datasets": never;
  "exportWorkflow": never;
  "collectFinVoiceCallById": never;
  "collectFinVoiceCallsByConversationId": never;
  "collectFinVoiceCallByExternalId": never;
  "collectFinVoiceCallByPhoneNumber": never;
  "registerFinVoiceCall": IntercomFullApiSchemaRegisterFinVoiceCallRequest;
  "replyToFin": {
  conversation_id: string;
  message: IntercomFullApiSchemaFinAgentMessage;
  user: IntercomFullApiSchemaFinAgentUser;
  attachments?: ReadonlyArray<IntercomFullApiSchemaFinAgentAttachment>;
};
  "startFinConversation": {
  conversation_id: string;
  message: IntercomFullApiSchemaFinAgentMessage;
  user: IntercomFullApiSchemaFinAgentUser;
  attachments?: ReadonlyArray<IntercomFullApiSchemaFinAgentAttachment>;
  conversation_metadata?: IntercomFullApiSchemaFinAgentConversationMetadata;
};
  "listAllCollections": never;
  "createCollection": IntercomFullApiSchemaCreateCollectionRequest;
  "deleteCollection": never;
  "retrieveCollection": never;
  "updateCollection": IntercomFullApiSchemaUpdateCollectionRequest;
  "listHelpCenters": never;
  "retrieveHelpCenter": never;
  "listInternalArticles": never;
  "createInternalArticle": IntercomFullApiSchemaCreateInternalArticleRequest;
  "deleteInternalArticle": never;
  "retrieveInternalArticle": never;
  "updateInternalArticle": IntercomFullApiSchemaUpdateInternalArticleRequest;
  "searchInternalArticles": never;
  "getIpAllowlist": never;
  "updateIpAllowlist": IntercomFullApiSchemaIpAllowlist;
  "jobsStatus": never;
  "identifyAdmin": never;
  "createMessage": IntercomFullApiSchemaCreateMessageRequest;
  "listNewsItems": never;
  "createNewsItem": IntercomFullApiSchemaNewsItemRequest;
  "deleteNewsItem": never;
  "retrieveNewsItem": never;
  "updateNewsItem": IntercomFullApiSchemaNewsItemRequest;
  "listNewsfeeds": never;
  "retrieveNewsfeed": never;
  "listLiveNewsfeedItems": never;
  "retrieveNote": never;
  "createPhoneSwitch": IntercomFullApiSchemaCreatePhoneSwitchRequest;
  "listSegments": never;
  "retrieveSegment": never;
  "listSubscriptionTypes": never;
  "listTags": never;
  "createTag": (IntercomFullApiSchemaCreateOrUpdateTagRequest | IntercomFullApiSchemaTagCompanyRequest | IntercomFullApiSchemaUntagCompanyRequest | IntercomFullApiSchemaTagMultipleUsersRequest);
  "deleteTag": never;
  "findTag": never;
  "listTeams": never;
  "retrieveTeam": never;
  "listTicketStates": never;
  "listTicketTypes": never;
  "createTicketType": IntercomFullApiSchemaCreateTicketTypeRequest;
  "getTicketType": never;
  "updateTicketType": IntercomFullApiSchemaUpdateTicketTypeRequest;
  "createTicketTypeAttribute": IntercomFullApiSchemaCreateTicketTypeAttributeRequest;
  "updateTicketTypeAttribute": IntercomFullApiSchemaUpdateTicketTypeAttributeRequest;
  "createTicket": IntercomFullApiSchemaCreateTicketRequest;
  "deleteTicket": never;
  "getTicket": never;
  "updateTicket": IntercomFullApiSchemaUpdateTicketRequest;
  "replyTicket": (IntercomFullApiSchemaContactReplyTicketRequest | IntercomFullApiSchemaAdminReplyTicketRequest);
  "attachTagToTicket": {
  id: string;
  admin_id: string;
};
  "detachTagFromTicket": {
  admin_id: string;
};
  "enqueueCreateTicket": IntercomFullApiSchemaCreateTicketRequest;
  "searchTickets": IntercomFullApiSchemaSearchRequest;
  "retrieveVisitorWithUserId": never;
  "updateVisitor": IntercomFullApiSchemaUpdateVisitorRequest;
  "convertVisitor": IntercomFullApiSchemaConvertVisitorRequest;
}

export interface IntercomFullApiOperationRequestBodyRequiredMap {
  "listAdmins": false;
  "retrieveAdmin": false;
  "setAwayAdmin": false;
  "listActivityLogs": false;
  "listContentImportSources": false;
  "createContentImportSource": false;
  "deleteContentImportSource": false;
  "getContentImportSource": false;
  "updateContentImportSource": false;
  "listExternalPages": false;
  "createExternalPage": false;
  "deleteExternalPage": false;
  "getExternalPage": false;
  "updateExternalPage": false;
  "listArticles": false;
  "createArticle": false;
  "deleteArticle": false;
  "retrieveArticle": false;
  "updateArticle": false;
  "searchArticles": false;
  "listAwayStatusReasons": false;
  "listBrands": false;
  "retrieveBrand": false;
  "listCalls": false;
  "showCall": false;
  "showCallRecording": false;
  "showCallTranscript": false;
  "listCallsWithTranscripts": true;
  "retrieveCompany": false;
  "createOrUpdateCompany": false;
  "deleteCompany": false;
  "RetrieveACompanyById": false;
  "UpdateCompany": false;
  "ListAttachedContacts": false;
  "listCompanyNotes": false;
  "ListAttachedSegmentsForCompanies": false;
  "listAllCompanies": false;
  "scrollOverAllCompanies": false;
  "ListContacts": false;
  "CreateContact": false;
  "DeleteContact": false;
  "ShowContact": false;
  "UpdateContact": false;
  "ArchiveContact": false;
  "BlockContact": false;
  "listCompaniesForAContact": false;
  "attachContactToACompany": false;
  "detachContactFromACompany": false;
  "listNotes": false;
  "createNote": false;
  "listSegmentsForAContact": false;
  "listSubscriptionsForAContact": false;
  "attachSubscriptionTypeToContact": false;
  "detachSubscriptionTypeToContact": false;
  "listTagsForAContact": false;
  "attachTagToContact": false;
  "detachTagFromContact": false;
  "UnarchiveContact": false;
  "ShowContactByExternalId": false;
  "MergeContact": false;
  "SearchContacts": false;
  "listConversations": false;
  "createConversation": false;
  "deleteConversation": false;
  "retrieveConversation": false;
  "updateConversation": false;
  "convertConversationToTicket": false;
  "attachContactToConversation": false;
  "detachContactFromConversation": false;
  "manageConversation": false;
  "replyConversation": false;
  "attachTagToConversation": false;
  "detachTagFromConversation": false;
  "redactConversation": false;
  "searchConversations": false;
  "deleteCustomObjectInstancesById": false;
  "getCustomObjectInstancesByExternalId": false;
  "createCustomObjectInstances": false;
  "deleteCustomObjectInstancesByExternalId": false;
  "getCustomObjectInstancesById": false;
  "lisDataAttributes": false;
  "createDataAttribute": false;
  "updateDataAttribute": false;
  "downloadDataExport": false;
  "get_/download/reporting_data/{job_identifier}": false;
  "listEmails": false;
  "retrieveEmail": false;
  "lisDataEvents": false;
  "createDataEvent": false;
  "dataEventSummaries": false;
  "cancelDataExport": false;
  "createDataExport": false;
  "getDataExport": false;
  "get_/export/reporting_data/{job_identifier}": false;
  "post_/export/reporting_data/enqueue": true;
  "get_/export/reporting_data/get_datasets": false;
  "exportWorkflow": false;
  "collectFinVoiceCallById": false;
  "collectFinVoiceCallsByConversationId": false;
  "collectFinVoiceCallByExternalId": false;
  "collectFinVoiceCallByPhoneNumber": false;
  "registerFinVoiceCall": false;
  "replyToFin": true;
  "startFinConversation": true;
  "listAllCollections": false;
  "createCollection": false;
  "deleteCollection": false;
  "retrieveCollection": false;
  "updateCollection": false;
  "listHelpCenters": false;
  "retrieveHelpCenter": false;
  "listInternalArticles": false;
  "createInternalArticle": false;
  "deleteInternalArticle": false;
  "retrieveInternalArticle": false;
  "updateInternalArticle": false;
  "searchInternalArticles": false;
  "getIpAllowlist": false;
  "updateIpAllowlist": false;
  "jobsStatus": false;
  "identifyAdmin": false;
  "createMessage": false;
  "listNewsItems": false;
  "createNewsItem": false;
  "deleteNewsItem": false;
  "retrieveNewsItem": false;
  "updateNewsItem": false;
  "listNewsfeeds": false;
  "retrieveNewsfeed": false;
  "listLiveNewsfeedItems": false;
  "retrieveNote": false;
  "createPhoneSwitch": false;
  "listSegments": false;
  "retrieveSegment": false;
  "listSubscriptionTypes": false;
  "listTags": false;
  "createTag": false;
  "deleteTag": false;
  "findTag": false;
  "listTeams": false;
  "retrieveTeam": false;
  "listTicketStates": false;
  "listTicketTypes": false;
  "createTicketType": false;
  "getTicketType": false;
  "updateTicketType": false;
  "createTicketTypeAttribute": false;
  "updateTicketTypeAttribute": false;
  "createTicket": false;
  "deleteTicket": false;
  "getTicket": false;
  "updateTicket": false;
  "replyTicket": false;
  "attachTagToTicket": false;
  "detachTagFromTicket": false;
  "enqueueCreateTicket": false;
  "searchTickets": false;
  "retrieveVisitorWithUserId": false;
  "updateVisitor": false;
  "convertVisitor": false;
}

export interface IntercomFullApiOperationResponseMap {
  "listAdmins": IntercomFullApiSchemaAdminList;
  "retrieveAdmin": IntercomFullApiSchemaAdmin;
  "setAwayAdmin": IntercomFullApiSchemaAdmin;
  "listActivityLogs": IntercomFullApiSchemaActivityLogList;
  "listContentImportSources": IntercomFullApiSchemaContentImportSourcesList;
  "createContentImportSource": IntercomFullApiSchemaContentImportSource;
  "deleteContentImportSource": IntercomFullApiSchemaError;
  "getContentImportSource": IntercomFullApiSchemaContentImportSource;
  "updateContentImportSource": IntercomFullApiSchemaContentImportSource;
  "listExternalPages": IntercomFullApiSchemaExternalPagesList;
  "createExternalPage": IntercomFullApiSchemaExternalPage;
  "deleteExternalPage": IntercomFullApiSchemaExternalPage;
  "getExternalPage": IntercomFullApiSchemaExternalPage;
  "updateExternalPage": IntercomFullApiSchemaExternalPage;
  "listArticles": IntercomFullApiSchemaArticleList;
  "createArticle": IntercomFullApiSchemaArticle;
  "deleteArticle": IntercomFullApiSchemaDeletedArticleObject;
  "retrieveArticle": IntercomFullApiSchemaArticle;
  "updateArticle": IntercomFullApiSchemaArticle;
  "searchArticles": IntercomFullApiSchemaArticleSearchResponse;
  "listAwayStatusReasons": ReadonlyArray<IntercomFullApiSchemaAwayStatusReason>;
  "listBrands": IntercomFullApiSchemaBrandList;
  "retrieveBrand": IntercomFullApiSchemaBrand;
  "listCalls": IntercomFullApiSchemaCallList;
  "showCall": IntercomFullApiSchemaCall;
  "showCallRecording": IntercomFullApiSchemaError;
  "showCallTranscript": string;
  "listCallsWithTranscripts": {
  type?: string;
  data?: ReadonlyArray<(IntercomFullApiSchemaCall & {
  transcript?: ReadonlyArray<{
  readonly [key: string]: IntercomFullApiSchemaJsonValue | undefined;
}>;
  transcript_status?: string | null;
})>;
};
  "retrieveCompany": IntercomFullApiSchemaCompanyList;
  "createOrUpdateCompany": IntercomFullApiSchemaCompany;
  "deleteCompany": IntercomFullApiSchemaDeletedCompanyObject;
  "RetrieveACompanyById": IntercomFullApiSchemaCompany;
  "UpdateCompany": IntercomFullApiSchemaCompany;
  "ListAttachedContacts": IntercomFullApiSchemaCompanyAttachedContacts;
  "listCompanyNotes": IntercomFullApiSchemaNoteList;
  "ListAttachedSegmentsForCompanies": IntercomFullApiSchemaCompanyAttachedSegments;
  "listAllCompanies": IntercomFullApiSchemaCompanyList;
  "scrollOverAllCompanies": IntercomFullApiSchemaCompanyScroll;
  "ListContacts": IntercomFullApiSchemaContactList;
  "CreateContact": IntercomFullApiSchemaContact;
  "DeleteContact": IntercomFullApiSchemaContactDeleted;
  "ShowContact": IntercomFullApiSchemaContact;
  "UpdateContact": IntercomFullApiSchemaContact;
  "ArchiveContact": IntercomFullApiSchemaContactArchived;
  "BlockContact": IntercomFullApiSchemaContactBlocked;
  "listCompaniesForAContact": IntercomFullApiSchemaContactAttachedCompanies;
  "attachContactToACompany": IntercomFullApiSchemaCompany;
  "detachContactFromACompany": IntercomFullApiSchemaCompany;
  "listNotes": IntercomFullApiSchemaNoteList;
  "createNote": IntercomFullApiSchemaNote;
  "listSegmentsForAContact": IntercomFullApiSchemaContactSegments;
  "listSubscriptionsForAContact": IntercomFullApiSchemaSubscriptionTypeList;
  "attachSubscriptionTypeToContact": IntercomFullApiSchemaSubscriptionType;
  "detachSubscriptionTypeToContact": IntercomFullApiSchemaSubscriptionType;
  "listTagsForAContact": IntercomFullApiSchemaTagList;
  "attachTagToContact": IntercomFullApiSchemaTag;
  "detachTagFromContact": IntercomFullApiSchemaTag;
  "UnarchiveContact": IntercomFullApiSchemaContactUnarchived;
  "ShowContactByExternalId": IntercomFullApiSchemaContact;
  "MergeContact": IntercomFullApiSchemaContact;
  "SearchContacts": IntercomFullApiSchemaContactList;
  "listConversations": IntercomFullApiSchemaConversationList;
  "createConversation": IntercomFullApiSchemaMessage;
  "deleteConversation": IntercomFullApiSchemaConversationDeleted;
  "retrieveConversation": IntercomFullApiSchemaConversation;
  "updateConversation": IntercomFullApiSchemaConversation;
  "convertConversationToTicket": IntercomFullApiSchemaTicket;
  "attachContactToConversation": IntercomFullApiSchemaConversation;
  "detachContactFromConversation": IntercomFullApiSchemaConversation;
  "manageConversation": IntercomFullApiSchemaConversation;
  "replyConversation": IntercomFullApiSchemaConversation;
  "attachTagToConversation": IntercomFullApiSchemaTag;
  "detachTagFromConversation": IntercomFullApiSchemaTag;
  "redactConversation": IntercomFullApiSchemaConversation;
  "searchConversations": IntercomFullApiSchemaConversationList;
  "deleteCustomObjectInstancesById": IntercomFullApiSchemaCustomObjectInstanceDeleted;
  "getCustomObjectInstancesByExternalId": IntercomFullApiSchemaCustomObjectInstance;
  "createCustomObjectInstances": IntercomFullApiSchemaCustomObjectInstance;
  "deleteCustomObjectInstancesByExternalId": IntercomFullApiSchemaCustomObjectInstanceDeleted;
  "getCustomObjectInstancesById": IntercomFullApiSchemaCustomObjectInstance;
  "lisDataAttributes": IntercomFullApiSchemaDataAttributeList;
  "createDataAttribute": IntercomFullApiSchemaDataAttribute;
  "updateDataAttribute": IntercomFullApiSchemaDataAttribute;
  "downloadDataExport": void;
  "get_/download/reporting_data/{job_identifier}": IntercomFullApiSchemaError;
  "listEmails": IntercomFullApiSchemaEmailList;
  "retrieveEmail": IntercomFullApiSchemaEmailSetting;
  "lisDataEvents": IntercomFullApiSchemaDataEventSummary;
  "createDataEvent": IntercomFullApiSchemaError;
  "dataEventSummaries": IntercomFullApiSchemaError;
  "cancelDataExport": IntercomFullApiSchemaDataExport;
  "createDataExport": IntercomFullApiSchemaDataExport;
  "getDataExport": IntercomFullApiSchemaDataExport;
  "get_/export/reporting_data/{job_identifier}": {
  job_identifier?: string;
  status?: string;
  download_url?: string;
  download_expires_at?: string;
};
  "post_/export/reporting_data/enqueue": {
  job_identifier?: string;
  status?: string;
  download_url?: string;
  download_expires_at?: string;
};
  "get_/export/reporting_data/get_datasets": {
  type?: string;
  data?: ReadonlyArray<{
  id?: string;
  name?: string;
  description?: string;
  default_time_attribute_id?: string;
  attributes?: ReadonlyArray<{
  id?: string;
  name?: string;
}>;
}>;
};
  "exportWorkflow": IntercomFullApiSchemaWorkflowExport;
  "collectFinVoiceCallById": IntercomFullApiSchemaAiCallResponse;
  "collectFinVoiceCallsByConversationId": ReadonlyArray<IntercomFullApiSchemaAiCallResponse>;
  "collectFinVoiceCallByExternalId": IntercomFullApiSchemaAiCallResponse;
  "collectFinVoiceCallByPhoneNumber": IntercomFullApiSchemaError;
  "registerFinVoiceCall": IntercomFullApiSchemaAiCallResponse;
  "replyToFin": {
  conversation_id?: string;
  user_id?: string;
  status?: "thinking" | "awaiting_user_reply" | "escalated" | "resolved" | "complete";
  created_at_ms?: string;
  errors?: IntercomFullApiSchemaFinAgentAttributeErrors;
  sse_subscription_url?: string;
};
  "startFinConversation": {
  conversation_id?: string;
  user_id?: string;
  status?: "thinking" | "awaiting_user_reply" | "escalated" | "resolved" | "complete";
  created_at_ms?: string;
  errors?: IntercomFullApiSchemaFinAgentAttributeErrors;
  sse_subscription_url?: string;
};
  "listAllCollections": IntercomFullApiSchemaCollectionList;
  "createCollection": IntercomFullApiSchemaCollection;
  "deleteCollection": IntercomFullApiSchemaDeletedCollectionObject;
  "retrieveCollection": IntercomFullApiSchemaCollection;
  "updateCollection": IntercomFullApiSchemaCollection;
  "listHelpCenters": IntercomFullApiSchemaHelpCenterList;
  "retrieveHelpCenter": IntercomFullApiSchemaHelpCenter;
  "listInternalArticles": IntercomFullApiSchemaInternalArticleList;
  "createInternalArticle": IntercomFullApiSchemaInternalArticle;
  "deleteInternalArticle": IntercomFullApiSchemaDeletedInternalArticleObject;
  "retrieveInternalArticle": IntercomFullApiSchemaInternalArticle;
  "updateInternalArticle": IntercomFullApiSchemaInternalArticle;
  "searchInternalArticles": IntercomFullApiSchemaInternalArticleSearchResponse;
  "getIpAllowlist": IntercomFullApiSchemaIpAllowlist;
  "updateIpAllowlist": IntercomFullApiSchemaIpAllowlist;
  "jobsStatus": IntercomFullApiSchemaJobs;
  "identifyAdmin": IntercomFullApiSchemaAdminWithApp;
  "createMessage": IntercomFullApiSchemaMessage;
  "listNewsItems": IntercomFullApiSchemaPaginatedResponse;
  "createNewsItem": IntercomFullApiSchemaNewsItem;
  "deleteNewsItem": IntercomFullApiSchemaDeletedObject;
  "retrieveNewsItem": IntercomFullApiSchemaNewsItem;
  "updateNewsItem": IntercomFullApiSchemaNewsItem;
  "listNewsfeeds": IntercomFullApiSchemaPaginatedResponse;
  "retrieveNewsfeed": IntercomFullApiSchemaNewsfeed;
  "listLiveNewsfeedItems": IntercomFullApiSchemaPaginatedResponse;
  "retrieveNote": IntercomFullApiSchemaNote;
  "createPhoneSwitch": IntercomFullApiSchemaPhoneSwitch;
  "listSegments": IntercomFullApiSchemaSegmentList;
  "retrieveSegment": IntercomFullApiSchemaSegment;
  "listSubscriptionTypes": IntercomFullApiSchemaSubscriptionTypeList;
  "listTags": IntercomFullApiSchemaTagList;
  "createTag": IntercomFullApiSchemaTagBasic;
  "deleteTag": IntercomFullApiSchemaError;
  "findTag": IntercomFullApiSchemaTagBasic;
  "listTeams": IntercomFullApiSchemaTeamList;
  "retrieveTeam": IntercomFullApiSchemaTeam;
  "listTicketStates": IntercomFullApiSchemaTicketStateList;
  "listTicketTypes": IntercomFullApiSchemaTicketTypeList;
  "createTicketType": IntercomFullApiSchemaTicketType;
  "getTicketType": IntercomFullApiSchemaTicketType;
  "updateTicketType": IntercomFullApiSchemaTicketType;
  "createTicketTypeAttribute": IntercomFullApiSchemaTicketTypeAttribute;
  "updateTicketTypeAttribute": IntercomFullApiSchemaTicketTypeAttribute;
  "createTicket": IntercomFullApiSchemaTicket;
  "deleteTicket": IntercomFullApiSchemaTicketDeleted;
  "getTicket": IntercomFullApiSchemaTicket;
  "updateTicket": IntercomFullApiSchemaTicket;
  "replyTicket": IntercomFullApiSchemaTicketReply;
  "attachTagToTicket": IntercomFullApiSchemaTag;
  "detachTagFromTicket": IntercomFullApiSchemaTag;
  "enqueueCreateTicket": IntercomFullApiSchemaJobs;
  "searchTickets": IntercomFullApiSchemaTicketList;
  "retrieveVisitorWithUserId": IntercomFullApiSchemaVisitor;
  "updateVisitor": IntercomFullApiSchemaVisitor;
  "convertVisitor": IntercomFullApiSchemaContact;
}
