// Generated provider schema DTOs for RingCentralDigitalApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type RingCentralDigitalApiSchemaJsonPrimitive = string | number | boolean | null;
export type RingCentralDigitalApiSchemaJsonValue = RingCentralDigitalApiSchemaJsonPrimitive | readonly RingCentralDigitalApiSchemaJsonValue[] | { readonly [key: string]: RingCentralDigitalApiSchemaJsonValue | undefined };

export type RingCentralDigitalApiSchemaTopology = {
  name?: string;
  created_at?: string;
  updated_at?: string;
  id?: string;
  config?: {};
};

export type RingCentralDigitalApiSchemaCreateUpdateTopology = {
  name?: string;
  json_config?: string;
};

export type RingCentralDigitalApiSchemaGetAllTopologiesResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaTopology>;
};

export type RingCentralDigitalApiSchemaGetAllAttachmentsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaAttachment>;
};

export type RingCentralDigitalApiSchemaAttachment = {
  content_type?: string;
  created_at?: string;
  embed?: boolean;
  filename?: string;
  foreign_id?: string;
  id?: string;
  "public?"?: boolean;
  size?: number;
  updated_at?: string;
  url?: string;
  video_metadata?: ReadonlyArray<string>;
};

export type RingCentralDigitalApiSchemaIntervention = {
  category_ids?: ReadonlyArray<string>;
  closed?: boolean;
  closed_at?: string;
  comments_count?: number;
  content_id?: string;
  created_at?: string;
  custom_fields?: {};
  deferred_at?: string;
  detected_language?: string;
  first_user_reply_id?: string;
  first_user_reply_in?: number;
  first_user_reply_in_bh?: number;
  id: string;
  identity_id?: string;
  identity_group_id?: string;
  last_user_reply_in?: number;
  last_user_reply_in_bh?: number;
  source_id?: string;
  status?: string;
  thread_id?: string;
  updated_at?: string;
  user_id?: string;
  user_replies_count?: number;
  user_reply_in_average?: number;
  user_reply_in_average_bh?: number;
  user_reply_in_average_count?: number;
  satisfaction_grade?: number;
  satisfaction_answered_at?: string;
  satisfaction_sent_at?: string;
  survey_response_id?: string;
  survey_id?: string;
  translation_enabled?: boolean;
};

export type RingCentralDigitalApiSchemaBotCompleteResponse = {
  status?: string;
  message?: string;
};

export type RingCentralDigitalApiSchemaHandoverFromBotToAgentResponse = {
  status?: string;
  message?: string;
};

export type RingCentralDigitalApiSchemaGetAllCategoriesResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaCategory>;
};

export type RingCentralDigitalApiSchemaCategory = {
  color?: number;
  created_at?: string;
  id: string;
  mandatory?: boolean;
  multiple?: boolean;
  name?: string;
  parent_id?: string;
  post_qualification?: boolean;
  source_ids?: ReadonlyArray<string>;
  unselectable?: boolean;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaGetAllChannelsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaChannel>;
};

export type RingCentralDigitalApiSchemaChannel = {
  created_at?: string;
  hard_capability?: number;
  id?: string;
  label?: string;
  name?: string;
  soft_capability?: number;
  source_ids?: ReadonlyArray<string>;
  task_timeout_seconds?: number;
  agent_sla?: number;
  agent_sla_threshold?: number;
  updated_at?: string;
  auto_complete_category_ids?: ReadonlyArray<string>;
  task_auto_complete_seconds?: number;
};

export type RingCentralDigitalApiSchemaGetAllCommunitiesResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaCommunity>;
};

export type RingCentralDigitalApiSchemaCommunity = {
  active?: boolean;
  created_at?: string;
  id?: string;
  name?: string;
  type?: string;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaGetAllSourcesResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaSource>;
};

export type RingCentralDigitalApiSchemaSource = {
  active?: boolean;
  auto_detect_content_language?: boolean;
  channel_id?: string;
  color?: number;
  color_hex?: string;
  community_id?: string;
  content_archiving?: boolean;
  content_archiving_period?: number;
  content_languages?: ReadonlyArray<string>;
  created_at?: string;
  default_category_ids?: ReadonlyArray<string>;
  default_content_language?: string;
  enable_android?: boolean;
  enable_ios?: boolean;
  enable_web?: boolean;
  auto_response_triggers?: ReadonlyArray<{
  language?: string;
  created_from_trigger?: string;
  body?: string;
}>;
  auto_response_trigger_enabled?: {
  first_message_from_user?: boolean;
  out_of_office_hours_message?: boolean;
};
  auto_response_trigger_grace_periods?: {
  first_message_from_user?: number;
  out_of_office_hours_message?: number;
};
  signatures?: ReadonlyArray<{
  language?: string;
  name?: string;
  body?: string;
}>;
  from_name?: string;
  error_message?: string;
  template_message_namespace?: string;
  hidden_from_stats?: boolean;
  id?: string;
  intervention_messages_boost?: number;
  live_chat?: boolean;
  name?: string;
  sla_expired_strategy?: "max" | "half" | "base";
  sla_response?: number;
  sla_threshold?: number;
  sla_filtering_categories_strategy?: string;
  sla_filtering_category_ids?: ReadonlyArray<string>;
  default_task_priority?: number;
  status?: string;
  template_messages?: ReadonlyArray<{
  components?: ReadonlyArray<{
  type?: string;
  text?: string;
  buttons?: ReadonlyArray<{
  type?: string;
  text?: string;
  phone_number?: string;
  url?: string;
}>;
}>;
  language?: string;
  name?: string;
}>;
  time_sheet_ids?: ReadonlyArray<string>;
  transferred_tasks_boost?: number;
  attachments_security_level?: string;
  type?: string;
  updated_at?: string;
  user_thread_default_category_ids?: ReadonlyArray<string>;
  time_for_thread_inclusion?: number;
  time_for_thread_inclusion_enabled?: boolean;
  email_parser?: boolean;
  imap_smtp_email?: string;
  imap_mailboxes_to_import?: ReadonlyArray<string>;
  imap_mailbox_used_for_sent_mail?: string;
  imap_address?: string;
  imap_port?: number;
  imap_username?: string;
  imap_use_ssl_tls?: boolean;
  imap_use_start_tls?: boolean;
  imap_authentication_type?: string;
  imap_ssl_verify_mode?: string;
  smtp_address?: string;
  smtp_port?: number;
  smtp_username?: string;
  smtp_use_ssl_tls?: boolean;
  smtp_use_start_tls?: boolean;
  smtp_authentication_type?: string;
  smtp_ssl_verify_mode?: string;
  smtp_helo_domain?: string;
  threading_heuristics?: boolean;
  common_ancestors_threading?: boolean;
  spam_assassin_level?: string;
  whitelisted_emails?: string;
  cc_blacklist?: ReadonlyArray<string>;
  postmark_enabled?: boolean;
};

export type RingCentralDigitalApiSchemaGetAllThreadsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaThread>;
};

export type RingCentralDigitalApiSchemaThread = {
  category_ids?: ReadonlyArray<string>;
  closed?: boolean;
  contents_count?: number;
  created_at?: string;
  extra_data?: {};
  foreign_id?: string;
  id: string;
  interventions_count?: number;
  source_id?: string;
  thread_category_ids?: ReadonlyArray<string>;
  title?: string;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaMessagingThread = (RingCentralDigitalApiSchemaThread & {
  disable_text_input?: boolean;
});

export type RingCentralDigitalApiSchemaGetAllContentsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaContent>;
};

export type RingCentralDigitalApiSchemaContent = {
  approval_required?: boolean;
  attachments?: ReadonlyArray<RingCentralDigitalApiSchemaContentAttachment>;
  attachments_count?: number;
  author_id?: string;
  auto_submitted?: boolean;
  body?: string;
  body_formatted?: RingCentralDigitalApiSchemaContentBodyFormatted;
  body_input_format?: "text" | "html";
  category_ids?: ReadonlyArray<string>;
  context_data?: {};
  created_at?: string;
  created_from?: string;
  creator_id?: string;
  first_in_thread?: boolean;
  foreign_categories?: ReadonlyArray<string>;
  foreign_id?: string;
  headers?: {
  readonly [key: string]: ReadonlyArray<string> | undefined;
};
  id: string;
  identity_group_id?: string;
  in_reply_to_author_id?: string;
  in_reply_to_id?: string;
  intervention_id?: string;
  language?: string;
  original_body?: string;
  private_message?: boolean;
  published?: boolean;
  rating?: number;
  rated_with?: "THUMBS_UP" | "THUMBS_DOWN";
  rating_reason?: string;
  remotely_deleted?: boolean;
  source_id?: string;
  source_language?: string;
  source_type?: string;
  source_url?: string;
  status?: string;
  synchronization_status?: string;
  synchronization_error?: string;
  target_language?: string;
  thread_id?: string;
  title?: string;
  translated_body?: string;
  translation_error?: string;
  translation_status?: "pending" | "success" | "error";
  type?: string;
  updated_at?: string;
  capabilities_supported?: ReadonlyArray<string>;
};

export type RingCentralDigitalApiSchemaGetAllCustomFieldsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaCustomField>;
};

export type RingCentralDigitalApiSchemaCustomField = {
  associated_type_name?: string;
  created_at?: string;
  id: string;
  key?: string;
  label: string;
  multiple?: boolean;
  position?: number;
  type?: string;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaGetAllEventsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaEvent>;
};

export type RingCentralDigitalApiSchemaEvent = {
  created_at?: string;
  extra_infos?: RingCentralDigitalApiSchemaEventExtraInfo;
  id: string;
  name?: string;
  updated_at?: string;
  user_id?: string;
};

export type RingCentralDigitalApiSchemaGetAllFoldersResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaFolder>;
};

export type RingCentralDigitalApiSchemaFolder = {
  id: string;
  created_at?: string;
  updated_at?: string;
  label?: string;
  parent_id?: string;
  position?: number;
  query?: string;
  render_threads_count?: boolean;
  role_restriction?: RingCentralDigitalApiSchemaRestriction;
  team_restriction?: RingCentralDigitalApiSchemaRestriction;
  user_restriction?: RingCentralDigitalApiSchemaRestriction;
  user_id?: string;
};

export type RingCentralDigitalApiSchemaGetAllIdentitiesResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaIdentity>;
};

export type RingCentralDigitalApiSchemaIdentity = {
  avatar_url?: string;
  community_id?: string;
  community_url?: string;
  company?: string;
  created_at?: string;
  display_name?: string;
  email?: string;
  extra_values?: {};
  firstname?: string;
  foreign_id?: string;
  gender?: string;
  home_phone?: string;
  id?: string;
  identity_group_id?: string;
  lastname?: string;
  mobile_phone?: string;
  screenname?: string;
  type?: string;
  updated_at?: string;
  user_ids?: ReadonlyArray<string>;
  uuid?: string;
};

export type RingCentralDigitalApiSchemaGetAllIdentityGroupsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaIdentityGroup>;
};

export type RingCentralDigitalApiSchemaIdentityGroup = {
  avatar_url?: string;
  company?: string;
  created_at?: string;
  custom_field_values?: {};
  emails?: ReadonlyArray<string>;
  firstname?: string;
  gender?: string;
  home_phones?: ReadonlyArray<string>;
  id: string;
  identity_ids?: ReadonlyArray<string>;
  lastname?: string;
  mobile_phones?: ReadonlyArray<string>;
  notes?: string;
  tag_ids?: ReadonlyArray<string>;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaUiLocale = {
  code?: string;
  name?: string;
};

export type RingCentralDigitalApiSchemaGetAllInterventionCommentsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaInterventionComment>;
};

export type RingCentralDigitalApiSchemaInterventionComment = {
  body?: string;
  created_at?: string;
  id?: string;
  intervention_id?: string;
  thread_id?: string;
  updated_at?: string;
  user_id?: string;
  videntity_id?: string;
};

export type RingCentralDigitalApiSchemaGetAllInterventionsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaIntervention>;
};

export type RingCentralDigitalApiSchemaLocale = {
  code?: string;
  interface?: boolean;
  name?: string;
};

export type RingCentralDigitalApiSchemaGetAllPresenceStatusResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaPresenceStatus>;
};

export type RingCentralDigitalApiSchemaPresenceStatus = {
  created_at?: string;
  id: string;
  name: string;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaGetAllReplyAssistantEntriesResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaReplyAssistantEntry>;
};

export type RingCentralDigitalApiSchemaReplyAssistantEntry = {
  category_ids?: ReadonlyArray<string>;
  created_at?: string;
  entry_group_id?: string;
  foreign_id?: string;
  id: string;
  label?: string;
  shortcuts?: string;
  source_ids?: ReadonlyArray<string>;
  updated_at?: string;
  version_ids?: ReadonlyArray<string>;
};

export type RingCentralDigitalApiSchemaGetAllReplyAssistantGroupsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaReplyAssistantGroup>;
};

export type RingCentralDigitalApiSchemaReplyAssistantGroup = {
  autocomplete?: boolean;
  created_at?: string;
  entry_ids?: ReadonlyArray<string>;
  id: string;
  name?: string;
  position?: number;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaGetAllReplyAssistantVersionsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaReplyAssistantVersion>;
};

export type RingCentralDigitalApiSchemaReplyAssistantVersion = {
  attachments_count?: number;
  body?: string;
  created_at?: string;
  entry_id?: string;
  format?: "text" | "html";
  id: string;
  language?: string;
  source_ids?: ReadonlyArray<string>;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaGetAllRolesResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaRole>;
};

export type RingCentralDigitalApiSchemaRole = {
  access_help_center?: boolean;
  access_previous_messages?: boolean;
  access_pull_mode?: boolean;
  admin_stamp_answer?: boolean;
  anonymize_identity?: boolean;
  approve_content?: boolean;
  ask_an_expert?: boolean;
  assign_intervention?: boolean;
  author_block_content?: boolean;
  close_content_thread?: boolean;
  create_and_destroy_extension?: boolean;
  create_community?: boolean;
  create_content_source?: boolean;
  create_user?: boolean;
  created_at?: string;
  delay_export_content?: boolean;
  delete_content_thread?: boolean;
  escalate_to_video?: boolean;
  export_identity?: boolean;
  id?: string;
  impersonate_user?: boolean;
  invite_user?: boolean;
  label?: string;
  lock_identity?: boolean;
  manage_api_access_tokens?: boolean;
  manage_app_sdk_applications?: boolean;
  manage_categories?: boolean;
  manage_chat?: boolean;
  manage_custom_fields?: boolean;
  manage_custom_notifications?: boolean;
  manage_emails_templates?: boolean;
  manage_folders?: boolean;
  manage_ice?: boolean;
  manage_identities?: boolean;
  manage_messaging?: boolean;
  manage_own_notifications?: boolean;
  manage_reply_assistant?: boolean;
  manage_roles?: boolean;
  manage_rules_engine_rules?: boolean;
  manage_tags?: boolean;
  manage_teams?: boolean;
  manage_topologies?: boolean;
  manage_users_of_my_teams?: boolean;
  monitor_tasks?: boolean;
  monitor_team_tasks?: boolean;
  mute_content?: boolean;
  open_content_thread?: boolean;
  publish_content?: boolean;
  read_community?: boolean;
  read_content_source?: boolean;
  read_event?: boolean;
  read_export?: boolean;
  read_identity?: boolean;
  read_own_stats?: boolean;
  read_presence?: boolean;
  read_stats?: boolean;
  read_user?: boolean;
  receive_tasks?: boolean;
  reply_with_assistant?: boolean;
  search_contents?: boolean;
  search_event?: boolean;
  update_community?: boolean;
  update_content_source?: boolean;
  update_extension?: boolean;
  update_identity?: boolean;
  update_intervention?: boolean;
  update_own_intervention?: boolean;
  update_settings?: boolean;
  update_time_sheet?: boolean;
  update_user?: boolean;
  updated_at?: string;
  use_cobrowsing?: boolean;
  use_emoji?: boolean;
};

export type RingCentralDigitalApiSchemaSettings = {
  activity_presence_threshold?: number;
  activity_tracking?: boolean;
  beginning_of_week?: string;
  browser_notifications_disabled?: boolean;
  "content_languages[]"?: ReadonlyArray<string>;
  created_at?: string;
  deny_iframe_integration?: boolean;
  disable_password_autocomplete?: boolean;
  display_only_unknown_bbcode?: boolean;
  dump_in_preprod?: boolean;
  enable_auto_scroll_down?: boolean;
  expire_password_after?: number;
  expire_password_enabled?: boolean;
  fte_duration?: number;
  id?: string;
  identity_merge?: boolean;
  intervention_closing_period?: number;
  intervention_defer_rates?: ReadonlyArray<number>;
  intervention_defer_threshold?: number;
  intervention_rates?: ReadonlyArray<number>;
  locale?: string;
  multi_lang?: boolean;
  name?: string;
  password_archivable_enabled?: boolean;
  password_archivable_size?: number;
  password_min_length?: number;
  password_non_word?: boolean;
  password_numbers?: boolean;
  password_recovery_disabled?: boolean;
  push_enabled?: boolean;
  reply_as_any_identity?: boolean;
  rtl_support?: boolean;
  self_approval_required?: boolean;
  session_timeout?: number;
  sharding_key?: string;
  spellchecking?: boolean;
  style?: string;
  third_party_services_disabled?: boolean;
  timezone?: string;
  type?: string;
  updated_at?: string;
  urgent_task_threshold?: number;
  use_two_letters_avatars?: boolean;
};

export type RingCentralDigitalApiSchemaAgentStatus = {
  agent_id?: string;
  channels?: ReadonlyArray<RingCentralDigitalApiSchemaAgentStatusChannel>;
  custom_status?: RingCentralDigitalApiSchemaAgentCustomStatus;
};

export type RingCentralDigitalApiSchemaGetAllSurveysResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaSurvey>;
};

export type RingCentralDigitalApiSchemaSurvey = {
  id?: string;
  created_at?: string;
  updated_at?: string;
  name?: string;
  link?: string;
  active?: boolean;
  from_name?: string;
  instant_send_threshold?: number;
  max_time_since_last_reply?: number;
  send_delay?: number;
  category_ids?: ReadonlyArray<string>;
  team_ids?: ReadonlyArray<string>;
  source_ids?: ReadonlyArray<string>;
  type?: "alchemer";
  questions?: ReadonlyArray<RingCentralDigitalApiSchemaSurveyQuestion>;
};

export type RingCentralDigitalApiSchemaSurveyResponse = {
  id?: string;
  created_at?: string;
  updated_at?: string;
  main_indicator?: number;
  main_indicator_scaled?: number;
  intervention_id?: string;
  survey_id?: string;
  source_id?: string;
  user_id?: string;
  response_foreign_id?: string;
  questions?: ReadonlyArray<RingCentralDigitalApiSchemaSurveyResponseQuestion>;
};

export type RingCentralDigitalApiSchemaGetAllTagsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaTag>;
};

export type RingCentralDigitalApiSchemaTag = {
  created_at?: string;
  id: string;
  name: string;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaGetAllTasksResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaTask>;
};

export type RingCentralDigitalApiSchemaTask = {
  accepted_at?: string;
  agent_ids?: ReadonlyArray<string>;
  channel_id?: string;
  completed_at?: string;
  content_id?: string;
  created_at?: string;
  expire_at?: string;
  id: string;
  intervention_id?: string;
  locked_at?: string;
  priority?: number;
  step?: string;
  thread_id?: string;
  transfered_at?: string;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaGetAllTeamsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaTeam>;
};

export type RingCentralDigitalApiSchemaTeam = {
  created_at?: string;
  id: string;
  leader_ids?: ReadonlyArray<string>;
  name?: string;
  updated_at?: string;
  user_ids?: ReadonlyArray<string>;
};

export type RingCentralDigitalApiSchemaGetAllTimeSheetsResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaTimeSheet>;
};

export type RingCentralDigitalApiSchemaTimeSheet = {
  active?: boolean;
  created_at?: string;
  friday_hours?: string;
  "holidays[]"?: ReadonlyArray<RingCentralDigitalApiSchemaTimeSheetHoliday>;
  id: string;
  label?: string;
  monday_hours?: string;
  saturday_hours?: string;
  source_ids?: ReadonlyArray<string>;
  sunday_hours?: string;
  thursday_hours?: string;
  timezone?: string;
  tuesday_hours?: string;
  updated_at?: string;
  wednesday_hours?: string;
};

export type RingCentralDigitalApiSchemaTimezone = {
  name?: RingCentralDigitalApiSchemaJsonValue;
  utc_offset?: RingCentralDigitalApiSchemaJsonValue;
};

export type RingCentralDigitalApiSchemaGetAllUserCapacitiesResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaUserCapacity>;
};

export type RingCentralDigitalApiSchemaUserCapacity = {
  channels?: ReadonlyArray<{
  id?: string;
  default_capacity?: number;
  max_capacity?: number;
}>;
  created_at?: string;
  id?: string;
  name?: string;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaGetAllUsersResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaUser>;
};

export type RingCentralDigitalApiSchemaUser = {
  category_ids?: ReadonlyArray<string>;
  created_at?: string;
  email?: string;
  enabled?: boolean;
  external_id?: string;
  firstname?: string;
  gender?: string;
  id: string;
  identity_ids?: ReadonlyArray<string>;
  invitation_pending?: boolean;
  lastname?: string;
  locale?: string;
  nickname?: string;
  rc_user_id?: string;
  role_id?: string;
  spoken_languages?: ReadonlyArray<string>;
  team_ids?: ReadonlyArray<string>;
  timezone?: string;
  updated_at?: string;
  user_capacity_id?: string;
  no_password?: boolean;
};

export type RingCentralDigitalApiSchemaUserSourcesPermissions = {
  source_1_id?: ReadonlyArray<string>;
  source_2_id?: ReadonlyArray<string>;
};

export type RingCentralDigitalApiSchemaGetAllUserSignaturesResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaUserSignature>;
};

export type RingCentralDigitalApiSchemaUserSignature = {
  id: string;
  body: string;
  name?: string;
  source_ids?: ReadonlyArray<string>;
  language?: string;
};

export type RingCentralDigitalApiSchemaGetAllWebhooksResponse = {
  count?: number;
  limit?: number;
  offset?: number;
  records?: ReadonlyArray<RingCentralDigitalApiSchemaWebhook>;
};

export type RingCentralDigitalApiSchemaWebhook = {
  active?: boolean;
  api_access_token?: RingCentralDigitalApiSchemaWebhookAccessToken;
  id: string;
  registered_events?: ReadonlyArray<string>;
  staging_use?: boolean;
  url?: string;
  verify_token?: string;
  webhook_status?: string;
};

export type RingCentralDigitalApiSchemaContentAttachment = {
  content_type?: string;
  created_at?: string;
  embed?: string;
  filename?: string;
  foreign_id?: string;
  id?: string;
  "public?"?: string;
  size?: number;
  updated_at?: string;
  url?: string;
};

export type RingCentralDigitalApiSchemaContentBodyFormatted = {
  html?: string;
  text?: string;
};

export type RingCentralDigitalApiSchemaEventExtraInfo = {
  authentication_strategy?: string;
  "business/time_sheet_id"?: string;
  category_ids?: ReadonlyArray<string>;
  closed_automatically?: string;
  content_id?: string;
  content_source_id?: string;
  content_thread_id?: string;
  deferred_duration?: string;
  deletions?: {};
  foreign_id?: string;
  intervention_id?: string;
  request_ip?: string;
  task_id?: string;
  user_id?: string;
};

export type RingCentralDigitalApiSchemaRestriction = {
  only?: ReadonlyArray<string>;
};

export type RingCentralDigitalApiSchemaAgentStatusChannel = {
  busyness?: "unoccupied" | "ok" | "busy" | "full";
  id?: string;
  name?: string;
  status?: string;
};

export type RingCentralDigitalApiSchemaAgentCustomStatus = {
  id?: string;
};

export type RingCentralDigitalApiSchemaSurveyQuestion = {
  foreign_id?: string;
  main?: boolean;
  text?: string;
  choices?: ReadonlyArray<RingCentralDigitalApiSchemaSurveyQuestionChoices>;
};

export type RingCentralDigitalApiSchemaSurveyResponseQuestion = {
  foreign_id?: string;
  text?: string;
  replies?: ReadonlyArray<RingCentralDigitalApiSchemaSurveyQuestionReply>;
};

export type RingCentralDigitalApiSchemaTimeSheetHoliday = {
  date?: string;
  name?: string;
};

export type RingCentralDigitalApiSchemaWebhookAccessToken = {
  created_at?: string;
  id: string;
  updated_at?: string;
};

export type RingCentralDigitalApiSchemaSurveyQuestionChoices = {
  text?: string;
  value?: string;
};

export type RingCentralDigitalApiSchemaSurveyQuestionReply = {
  text?: string;
  value?: string;
};

export interface RingCentralDigitalApiOperationQueryMap {
  "PUT /topologies/{topologyId}/activate": {};
  "PUT /topologies/{topologyId}": {};
  "DELETE /topologies/{topologyId}": {};
  "GET /topologies/{topologyId}": {};
  "POST /topologies": {};
  "GET /topologies": {};
  "GET /attachments": {
  offset?: number;
  limit?: number;
  extension?: string;
  created_before?: string;
  created_after?: string;
};
  "POST /attachments": {};
  "GET /attachments/{attachmentId}": {};
  "POST /bots/engage": {
  content_id: string;
};
  "POST /bots/complete": {
  intervention_id: string;
  close_thread?: boolean;
  "thread_category_ids[]"?: ReadonlyArray<string>;
};
  "POST /bots/handover": {
  from: string;
  to: string;
  type: string;
  identity_foreign_id: string;
  app_id?: string;
  intervention_id?: string;
  "thread_category_ids[]"?: ReadonlyArray<string>;
  trigger?: string;
};
  "GET /categories": {
  ids?: string;
  parent_id?: string;
  offset?: number;
  limit?: number;
};
  "POST /categories": {
  name?: string;
  parent_id?: string;
  color?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  mandatory?: boolean;
  multiple?: boolean;
  post_qualification?: boolean;
  unselectable?: boolean;
  "source_ids[]"?: ReadonlyArray<string>;
};
  "DELETE /categories/{categoryId}": {
  take_over_category_id?: string;
};
  "GET /categories/{categoryId}": {};
  "PUT /categories/{categoryId}": {
  name?: string;
  parent_id?: string;
  color?: number;
  mandatory?: boolean;
  multiple?: boolean;
  post_qualification?: boolean;
  unselectable?: boolean;
  "source_ids[]"?: ReadonlyArray<string>;
};
  "GET /channels": {
  offset?: number;
  limit?: number;
};
  "GET /channels/{channelId}": {};
  "PUT /channels/{channelId}": {
  name?: string;
  "source_ids[]"?: ReadonlyArray<string>;
  soft_capability?: number;
  hard_capability?: number;
  task_timeout_seconds?: number;
  agent_sla?: number;
  agent_sla_threshold?: number;
  task_auto_complete_seconds?: number;
  "auto_complete_category_ids[]"?: ReadonlyArray<string>;
};
  "GET /communities": {
  offset?: number;
  limit?: number;
};
  "GET /communities/{communityId}": {};
  "GET /content_sources": {
  permission?: "read" | "initiate_discussion";
  offset?: number;
  active?: boolean;
  limit?: number;
};
  "GET /content_sources/{sourceId}": {};
  "PUT /content_sources/{sourceId}": {
  name?: string;
  active?: boolean;
  channel_id?: string;
  color?: number;
  "time_sheet_ids[]"?: ReadonlyArray<string>;
  sla_response?: number;
  sla_threshold?: number;
  sla_filtering_categories_strategy?: "ignored_categories" | "selected_categories";
  "sla_filtering_category_ids[]"?: ReadonlyArray<string>;
  sla_expired_strategy?: "max" | "half" | "base";
  attachments_security_level?: "strict" | "relaxed" | "permissive";
  intervention_messages_boost?: number;
  transferred_tasks_boost?: number;
  hidden_from_stats?: boolean;
  "default_category_ids[]"?: ReadonlyArray<string>;
  "user_thread_default_category_ids[]"?: ReadonlyArray<string>;
  signatures?: ReadonlyArray<{}>;
  auto_response_triggers?: ReadonlyArray<{}>;
  "auto_response_trigger_enabled[first_message_from_user]"?: boolean;
  "auto_response_trigger_enabled[out_of_office_hours_message]"?: boolean;
  "auto_response_trigger_grace_periods[first_message_from_user]"?: number;
  "auto_response_trigger_grace_periods[out_of_office_hours_message]"?: number;
  default_content_language?: string;
  auto_detect_content_language?: boolean;
  content_languages?: ReadonlyArray<string>;
  content_archiving?: boolean;
  content_archiving_period?: number;
  from_name?: string;
  default_task_priority?: number;
  enable_android?: boolean;
  enable_ios?: boolean;
  enable_web?: boolean;
  imap_smtp_email?: string;
  imap_mailboxes_to_import?: ReadonlyArray<string>;
  imap_mailbox_used_for_sent_mail?: string;
  imap_address?: string;
  imap_port?: number;
  imap_username?: string;
  imap_password?: string;
  imap_oauth_refresh_token?: string;
  imap_use_ssl_tls?: boolean;
  imap_use_start_tls?: boolean;
  imap_authentication_type?: "basic" | "microsoft_identity_platform";
  imap_ssl_verify_mode?: "NONE" | "PEER" | "CLIENT_ONCE" | "FAIL_IF_NO_PEER_CERT";
  smtp_address?: string;
  smtp_port?: number;
  smtp_username?: string;
  smtp_password?: string;
  smtp_oauth_refresh_token?: string;
  smtp_use_ssl_tls?: boolean;
  smtp_use_start_tls?: boolean;
  smtp_authentication_type?: "basic" | "microsoft_identity_platform";
  smtp_ssl_verify_mode?: "NONE" | "PEER" | "CLIENT_ONCE" | "FAIL_IF_NO_PEER_CERT";
  smtp_helo_domain?: string;
  threading_heuristics?: boolean;
  common_ancestors_threading?: boolean;
  spam_assassin_level?: "disabled" | "relaxed" | "strict";
  whitelisted_emails?: string;
  cc_blacklist?: ReadonlyArray<string>;
  email_parser?: boolean;
  time_for_thread_inclusion?: number;
  time_for_thread_inclusion_enabled?: boolean;
};
  "PUT /content_sources/{sourceId}/email_credentials": {
  "imap[username]"?: string;
  "imap[password]"?: string;
  "smtp[username]"?: string;
  "smtp[password]"?: string;
};
  "GET /content_threads": {
  q?: string;
  offset?: number;
  limit?: number;
};
  "GET /content_threads/{threadId}": {};
  "PUT /content_threads/{threadId}/close": {};
  "PUT /content_threads/{threadId}/ignore": {};
  "GET /content_threads/{threadId}/open": {};
  "PUT /content_threads/{threadId}/update_categories": {
  "thread_category_ids[]"?: ReadonlyArray<string>;
};
  "PUT /content_threads/{threadId}/disable_text_input": {};
  "PUT /content_threads/{threadId}/enable_text_input": {};
  "GET /contents": {
  q?: string;
  offset?: number;
  limit?: number;
};
  "POST /contents": {
  author_id?: string;
  body: string;
  in_reply_to_id?: string;
  private?: boolean;
  source_id?: string;
  "attachment_ids[]"?: ReadonlyArray<string>;
  auto_submitted?: boolean;
  title?: string;
  to?: string;
  "to[]"?: ReadonlyArray<string>;
  "cc[]"?: ReadonlyArray<string>;
  "bcc[]"?: ReadonlyArray<string>;
  template_name?: string;
  template_language?: string;
  disable_text_input_on_thread?: boolean;
};
  "GET /contents/{contentId}": {};
  "PUT /contents/{contentId}/ignore": {};
  "PUT /contents/{contentId}/update_categories": {
  "category_ids[]": ReadonlyArray<string>;
};
  "PUT /contents/{contentId}/update_custom_score": {
  custom_score: number;
};
  "GET /custom_fields": {
  offset?: number;
  limit?: number;
};
  "POST /custom_fields": {
  associated_type_name: "IdentityGroup" | "Intervention";
  label: string;
  key?: string;
  type?: "string" | "boolean" | "text" | "integer" | "float" | "single_choice" | "multiple_choice";
  "choices[]"?: ReadonlyArray<string>;
  multiple?: boolean;
  position?: number;
  read_only?: boolean;
};
  "DELETE /custom_fields/{customFieldId}": {};
  "GET /custom_fields/{customFieldId}": {};
  "PUT /custom_fields/{customFieldId}": {
  label?: string;
  "choices[]"?: ReadonlyArray<string>;
  position?: number;
  read_only?: boolean;
};
  "GET /events": {
  q?: string;
  offset?: number;
  limit?: number;
};
  "GET /events/{eventId}": {};
  "GET /folders": {
  offset?: number;
  limit?: number;
};
  "POST /folders": {
  label?: string;
  parent_id?: string;
  position?: number;
  query?: string;
  render_threads_count?: boolean;
  "role_restriction[only][]"?: ReadonlyArray<string>;
  "team_restriction[only][]"?: ReadonlyArray<string>;
  "user_restriction[only][]"?: ReadonlyArray<string>;
};
  "DELETE /folders/{folderId}": {};
  "GET /folders/{folderId}": {};
  "PUT /folders/{folderId}": {
  label?: string;
  parent_id?: string;
  position?: number;
  query?: string;
  render_threads_count?: boolean;
  "role_restriction[only][]"?: ReadonlyArray<string>;
  "team_restriction[only][]"?: ReadonlyArray<string>;
  "user_restriction[only][]"?: ReadonlyArray<string>;
};
  "GET /identities": {
  community_id?: string;
  source_id?: string;
  identity_group_id?: string;
  identity_group_ids?: string;
  user_id?: string;
  sort?: "created_at" | "updated_at";
  foreign_id?: string;
  uuid?: string;
  offset?: number;
  limit?: number;
};
  "GET /identities/{identityId}": {};
  "POST /identities/import": {
  community_id: string;
  source_id?: string;
  identifier: string;
  upsert?: boolean;
  company?: string;
  firstname?: string;
  gender?: "man" | "woman";
  home_phone?: string;
  lastname?: string;
  mobile_phone?: string;
  screenname?: string;
  "extra_values[extra_value_key]"?: string;
};
  "GET /identity_groups": {
  firstname?: string;
  lastname?: string;
  email?: string;
  uuid?: string;
  ids?: string;
  sort?: "created_at" | "updated_at";
  offset?: number;
  limit?: number;
};
  "GET /identity_groups/{identityGroupId}": {};
  "PUT /identity_groups/{identityGroupId}": {
  company?: string;
  "custom_field_values[custom_field_key]"?: string;
  "emails[]"?: ReadonlyArray<string>;
  firstname?: string;
  gender?: "man" | "woman";
  "home_phones[]"?: ReadonlyArray<string>;
  lastname?: string;
  "mobile_phones[]"?: ReadonlyArray<string>;
  notes?: string;
  "tag_ids[]"?: ReadonlyArray<string>;
};
  "PUT /identity_groups/{identityGroupId}/merge": {
  associated_identity_id: string;
};
  "GET /interface_locales": {};
  "GET /intervention_comments": {
  intervention_id?: string;
  thread_id?: string;
  user_id?: string;
  identity_id?: string;
  offset?: number;
  limit?: number;
};
  "POST /intervention_comments": {
  body: string;
  intervention_id: string;
  user_id: string;
};
  "DELETE /intervention_comments/{interventionCommentId}": {};
  "GET /intervention_comments/{interventionCommentId}": {};
  "GET /interventions": {
  thread_id?: string;
  user_id?: string;
  identity_group_id?: string;
  identity_id?: string;
  status?: "active" | "closed" | "deferred" | "opened" | "reopened";
  sort?: "created_at" | "updated_at";
  offset?: number;
  limit?: number;
};
  "POST /interventions": {
  content_id: string;
};
  "GET /interventions/{interventionId}": {};
  "PUT /interventions/{interventionId}": {
  "custom_field_values[custom_field_key]"?: string;
};
  "DELETE /interventions/{interventionId}/cancel": {};
  "PUT /interventions/{interventionId}/close": {};
  "PUT /interventions/{interventionId}/reassign": {
  user_id: string;
};
  "PUT /interventions/{interventionId}/update_categories": {
  "category_ids[]": ReadonlyArray<string>;
};
  "GET /locales": {};
  "GET /presence_status": {
  offset?: number;
  limit?: number;
};
  "POST /presence_status": {
  name: string;
};
  "DELETE /presence_status/{presenceStatusId}": {};
  "GET /presence_status/{presenceStatusId}": {};
  "PUT /presence_status/{presenceStatusId}": {
  name: string;
};
  "GET /reply_assistant/entries": {
  offset?: number;
  limit?: number;
};
  "POST /reply_assistant/entries": {
  label: string;
};
  "DELETE /reply_assistant/entries/{replyAssistantEntryId}": {};
  "GET /reply_assistant/entries/{replyAssistantEntryId}": {};
  "PUT /reply_assistant/entries/{replyAssistantEntryId}": {
  label?: string;
  foreign_id?: string;
  "category_ids[]"?: ReadonlyArray<string>;
  "shortcuts[]"?: ReadonlyArray<string>;
  entry_group_id?: string;
  "source_ids[]"?: ReadonlyArray<string>;
};
  "GET /reply_assistant/groups": {
  offset?: number;
  limit?: number;
};
  "POST /reply_assistant/groups": {
  name: string;
  "entry_ids[]"?: ReadonlyArray<string>;
  autocomplete?: boolean;
  position?: number;
};
  "DELETE /reply_assistant/groups/{replyAssistantGroupId}": {};
  "GET /reply_assistant/groups/{replyAssistantGroupId}": {};
  "PUT /reply_assistant/groups/{replyAssistantGroupId}": {
  name?: string;
  "entry_ids[]"?: ReadonlyArray<string>;
  autocomplete?: boolean;
  position?: number;
};
  "GET /reply_assistant/versions": {
  offset?: number;
  limit?: number;
};
  "POST /reply_assistant/versions": {
  body: string;
  entry_id: string;
  "source_ids[]"?: ReadonlyArray<string>;
  format?: "text" | "html";
  language?: string;
};
  "DELETE /reply_assistant/versions/{replyAssistantVersionId}": {};
  "GET /reply_assistant/versions/{replyAssistantVersionId}": {};
  "PUT /reply_assistant/versions/{replyAssistantVersionId}": {
  body?: string;
  entry_id?: string;
  "source_ids[]"?: ReadonlyArray<string>;
  format?: "text" | "html";
  language?: string;
};
  "GET /roles": {
  offset?: number;
  limit?: number;
};
  "POST /roles": {
  label: string;
  access_help_center?: boolean;
  access_previous_messages?: boolean;
  access_pull_mode?: boolean;
  admin_stamp_answer?: boolean;
  approve_content?: boolean;
  ask_an_expert?: boolean;
  assign_intervention?: boolean;
  author_block_content?: boolean;
  close_content_thread?: boolean;
  create_and_destroy_extension?: boolean;
  create_community?: boolean;
  create_content_source?: boolean;
  create_user?: boolean;
  delay_export_content?: boolean;
  delete_content_thread?: boolean;
  escalate_to_video?: boolean;
  impersonate_user?: boolean;
  invite_user?: boolean;
  manage_api_access_tokens?: boolean;
  manage_app_sdk_applications?: boolean;
  manage_automatic_exports_tasks?: boolean;
  manage_categories?: boolean;
  manage_chat?: boolean;
  manage_custom_fields?: boolean;
  manage_custom_notifications?: boolean;
  manage_emails_templates?: boolean;
  manage_folders?: boolean;
  manage_ice?: boolean;
  manage_identities?: boolean;
  manage_own_notifications?: boolean;
  manage_reply_assistant?: boolean;
  manage_roles?: boolean;
  manage_rules_engine_rules?: boolean;
  manage_surveys?: boolean;
  manage_tags?: boolean;
  manage_teams?: boolean;
  manage_topologies?: boolean;
  manage_users_of_my_teams?: boolean;
  monitor_tasks?: boolean;
  monitor_team_tasks?: boolean;
  mute_content?: boolean;
  open_content_thread?: boolean;
  publish_content?: boolean;
  read_community?: boolean;
  read_content_source?: boolean;
  read_event?: boolean;
  read_export?: boolean;
  read_identity?: boolean;
  read_own_stats?: boolean;
  read_presence?: boolean;
  read_stats?: boolean;
  read_surveys?: boolean;
  read_user?: boolean;
  receive_tasks?: boolean;
  reply_with_assistant?: boolean;
  search_contents?: boolean;
  search_event?: boolean;
  update_community?: boolean;
  update_content_source?: boolean;
  update_extension?: boolean;
  update_identity?: boolean;
  update_intervention?: boolean;
  update_own_intervention?: boolean;
  update_settings?: boolean;
  update_time_sheet?: boolean;
  update_user?: boolean;
  use_emoji?: boolean;
};
  "GET /roles/{roleId}": {};
  "PUT /roles/{roleId}": {
  access_help_center?: boolean;
  access_previous_messages?: boolean;
  access_pull_mode?: boolean;
  admin_stamp_answer?: boolean;
  approve_content?: boolean;
  ask_an_expert?: boolean;
  assign_intervention?: boolean;
  author_block_content?: boolean;
  close_content_thread?: boolean;
  create_and_destroy_extension?: boolean;
  create_community?: boolean;
  create_content_source?: boolean;
  create_user?: boolean;
  delay_export_content?: boolean;
  delete_content_thread?: boolean;
  escalate_to_video?: boolean;
  impersonate_user?: boolean;
  invite_user?: boolean;
  manage_api_access_tokens?: boolean;
  manage_app_sdk_applications?: boolean;
  manage_automatic_exports_tasks?: boolean;
  manage_categories?: boolean;
  manage_chat?: boolean;
  manage_custom_fields?: boolean;
  manage_custom_notifications?: boolean;
  manage_emails_templates?: boolean;
  manage_folders?: boolean;
  manage_ice?: boolean;
  manage_identities?: boolean;
  manage_own_notifications?: boolean;
  manage_reply_assistant?: boolean;
  manage_roles?: boolean;
  manage_rules_engine_rules?: boolean;
  manage_surveys?: boolean;
  manage_tags?: boolean;
  manage_teams?: boolean;
  manage_topologies?: boolean;
  manage_users_of_my_teams?: boolean;
  monitor_tasks?: boolean;
  monitor_team_tasks?: boolean;
  mute_content?: boolean;
  open_content_thread?: boolean;
  publish_content?: boolean;
  read_community?: boolean;
  read_content_source?: boolean;
  read_event?: boolean;
  read_export?: boolean;
  read_identity?: boolean;
  read_own_stats?: boolean;
  read_presence?: boolean;
  read_stats?: boolean;
  read_surveys?: boolean;
  read_user?: boolean;
  receive_tasks?: boolean;
  reply_with_assistant?: boolean;
  search_contents?: boolean;
  search_event?: boolean;
  update_community?: boolean;
  update_content_source?: boolean;
  update_extension?: boolean;
  update_identity?: boolean;
  update_intervention?: boolean;
  update_own_intervention?: boolean;
  update_settings?: boolean;
  update_time_sheet?: boolean;
  update_user?: boolean;
  use_emoji?: boolean;
};
  "GET /settings": {};
  "PUT /settings": {
  activity_presence_threshold?: number;
  activity_tracking?: boolean;
  beginning_of_week?: string;
  category_tagging?: boolean;
  content_languages?: string;
  dashboard?: boolean;
  deny_iframe_integration?: boolean;
  disable_password_autocomplete?: boolean;
  expire_password_after?: number;
  enable_auto_scroll_down?: boolean;
  expire_password_enabled?: boolean;
  export_in_seconds?: boolean;
  fold_useless_contents?: boolean;
  fte_duration?: number;
  identity_merge?: boolean;
  "intervention_defer_rates[]"?: ReadonlyArray<number>;
  intervention_defer_threshold?: number;
  "intervention_rates[]"?: ReadonlyArray<number>;
  locale?: string;
  multi_lang?: boolean;
  name?: string;
  password_archivable_enabled?: boolean;
  password_archivable_size?: number;
  password_min_length?: number;
  password_non_word?: boolean;
  password_numbers?: boolean;
  password_recovery_disabled?: boolean;
  push_enabled?: boolean;
  reply_as_any_identity?: boolean;
  rtl_support?: boolean;
  self_approval_required?: boolean;
  session_timeout?: number;
  spellchecking?: boolean;
  style?: string;
  third_party_services_disabled?: boolean;
  timezone?: string;
  track_js?: boolean;
  type?: "demo" | "production" | "archived";
  urgent_task_threshold?: number;
  use_system_font?: boolean;
};
  "GET /status": {
  "source_ids[]"?: ReadonlyArray<string>;
  "category_ids[]"?: ReadonlyArray<string>;
  "team_ids[]"?: ReadonlyArray<string>;
  "spoken_languages[]"?: ReadonlyArray<string>;
};
  "GET /surveys": {};
  "GET /surveys/{surveyId}": {};
  "GET /survey_responses/{surveyResponseId}": {};
  "GET /status/{agentId}": {};
  "PUT /status/{agentId}": {
  status?: string;
  custom_status_id?: string;
};
  "GET /tags": {
  ids?: string;
  offset?: number;
  limit?: number;
};
  "POST /tags": {
  name: string;
};
  "DELETE /tags/{tagId}": {};
  "GET /tags/{tagId}": {};
  "PUT /tags/{tagId}": {
  name: string;
};
  "GET /tasks": {
  queue?: string;
  channel_id?: string;
  step?: string;
  offset?: number;
  limit?: number;
};
  "GET /tasks/{taskId}": {};
  "POST /tasks/{taskId}/move": {
  queue: string;
};
  "POST /tasks/{taskId}/complete": {
  queue: string;
};
  "POST /tasks/{taskId}/transfer": {
  "agent_ids[]"?: ReadonlyArray<string>;
  bypass?: string;
  "category_ids[]"?: ReadonlyArray<string>;
  language?: string;
  "team_ids[]"?: ReadonlyArray<string>;
  comment?: string;
};
  "GET /teams": {
  offset?: number;
  limit?: number;
};
  "POST /teams": {
  name?: string;
  "leader_ids[]"?: ReadonlyArray<string>;
  "user_ids[]"?: ReadonlyArray<string>;
};
  "DELETE /teams/{teamId}": {
  take_over_category_id?: string;
};
  "GET /teams/{teamId}": {};
  "PUT /teams/{teamId}": {
  name?: string;
  "leader_ids[]"?: ReadonlyArray<string>;
  "user_ids[]"?: ReadonlyArray<string>;
};
  "GET /time_sheets": {
  offset?: number;
  limit?: number;
};
  "POST /time_sheets": {
  active?: boolean;
  label: string;
  "source_ids[]"?: ReadonlyArray<string>;
  holidays_region?: "de" | "es" | "fr" | "gb" | "it" | "nl" | "us";
  holidays?: string;
  monday_hours?: string;
  tuesday_hours?: string;
  wednesday_hours?: string;
  thursday_hours?: string;
  friday_hours?: string;
  saturday_hours?: string;
  sunday_hours?: string;
};
  "DELETE /time_sheets/{timeSheetId}": {};
  "GET /time_sheets/{timeSheetId}": {};
  "PUT /time_sheets/{timeSheetId}": {
  active?: boolean;
  label?: string;
  "source_ids[]"?: ReadonlyArray<string>;
  holidays?: string;
  monday_hours?: string;
  tuesday_hours?: string;
  wednesday_hours?: string;
  thursday_hours?: string;
  friday_hours?: string;
  saturday_hours?: string;
  sunday_hours?: string;
};
  "GET /timezones": {};
  "GET /user_capacities": {
  offset?: number;
  limit?: number;
};
  "POST /user_capacities": {
  name: string;
  "channels[][channel_id]"?: string;
  "channels[][default_capacity]"?: number;
  "channels[][max_capacity]"?: number;
};
  "DELETE /user_capacities/{userCapacityId}": {};
  "GET /user_capacities/{userCapacityId}": {};
  "PUT /user_capacities/{userCapacityId}": {
  name?: string;
  "channels[][channel_id]"?: string;
  "channels[][default_capacity]"?: number;
  "channels[][max_capacity]"?: number;
};
  "GET /users": {
  email?: string;
  category_id?: string;
  identity_id?: string;
  external_id?: string;
  role_id?: string;
  team_id?: string;
  offset?: number;
  limit?: number;
};
  "POST /users": {
  "category_ids[]"?: ReadonlyArray<string>;
  email: string;
  enabled?: boolean;
  external_id?: string;
  firstname: string;
  gender?: "man" | "woman";
  "identity_ids[]"?: ReadonlyArray<string>;
  lastname: string;
  locale?: string;
  nickname?: string;
  password: string;
  role_id: string;
  "team_ids[]"?: ReadonlyArray<string>;
  timezone?: string;
  "spoken_languages[]"?: ReadonlyArray<string>;
  no_password?: boolean;
};
  "POST /users/invite": {
  "category_ids[]"?: ReadonlyArray<string>;
  email: string;
  enabled?: boolean;
  external_id?: string;
  firstname: string;
  gender?: "man" | "woman";
  "identity_ids[]"?: ReadonlyArray<string>;
  lastname: string;
  locale?: string;
  nickname?: string;
  role_id: string;
  "team_ids[]"?: ReadonlyArray<string>;
  timezone?: string;
  "spoken_languages[]"?: ReadonlyArray<string>;
};
  "DELETE /users/{userId}": {};
  "GET /users/{userId}": {};
  "PUT /users/{userId}": {
  "category_ids[]"?: ReadonlyArray<string>;
  email?: string;
  enabled?: boolean;
  external_id?: string;
  firstname?: string;
  gender?: "man" | "woman";
  "identity_ids[]"?: ReadonlyArray<string>;
  lastname?: string;
  locale?: string;
  nickname?: string;
  password?: string;
  role_id?: string;
  "team_ids[]"?: ReadonlyArray<string>;
  timezone?: string;
  "spoken_languages[]"?: ReadonlyArray<string>;
  no_password?: boolean;
};
  "GET /users/{userId}/sources_permissions": {};
  "PUT /users/{userId}/sources_permissions": {
  "{source_x_id}"?: string;
};
  "GET /users/{userId}/signatures": {};
  "POST /users/{userId}/signatures": {
  body: string;
  "source_ids[]"?: ReadonlyArray<string>;
  language?: string;
  name?: string;
};
  "DELETE /users/{userId}/signatures/{signatureId}": {};
  "GET /users/{userId}/signatures/{signatureId}": {};
  "PUT /users/{userId}/signatures/{signatureId}": {
  body?: string;
  "source_ids[]"?: ReadonlyArray<string>;
  language?: string;
  name?: string;
};
  "GET /webhooks": {
  access_token: string;
  offset?: number;
  limit?: number;
};
  "POST /webhooks": {
  access_token: string;
  active?: boolean;
  name?: string;
  staging_use?: boolean;
  url: string;
  verify_token?: string;
  secret?: string;
  "registered_events[]": ReadonlyArray<"content.approved" | "content.discussion_initiated" | "content.exported" | "content.imported" | "content.replied" | "content.update_exported" | "identity.merged" | "identity.unmerged" | "intervention.assigned" | "intervention.canceled" | "intervention.closed" | "intervention.custom_fields_updated" | "intervention.deferred" | "intervention.opened" | "intervention.reactivated" | "intervention.recategorized" | "intervention.reopened" | "intervention.user_updated" | "push_agent.accept_task" | "push_agent.availability_change" | "push_agent.busyness_change" | "push_agent.connected" | "push_agent.disconnected" | "push_agent.missed_task" | "push_agent.reconnected" | "push_agent.request_task" | "survey_response.imported" | "task.assigned" | "task.completed" | "task.created" | "task.destroyed" | "task.expired_from_step" | "task.expired_from_workbin" | "task.recategorized" | "task.resume" | "task.supervisor_assigned" | "task.taken" | "task.transferred" | "task.undelivered">;
};
  "DELETE /webhooks/{webhookId}": {
  access_token: string;
};
  "GET /webhooks/{webhookId}": {
  access_token: string;
};
  "PUT /webhooks/{webhookId}": {
  access_token: string;
  active?: boolean;
  name?: string;
  staging_use?: boolean;
  url?: string;
  verify_token?: string;
  secret?: string;
  "registered_events[]"?: ReadonlyArray<string>;
};
}

export interface RingCentralDigitalApiOperationQueryRequiredMap {
  "PUT /topologies/{topologyId}/activate": false;
  "PUT /topologies/{topologyId}": false;
  "DELETE /topologies/{topologyId}": false;
  "GET /topologies/{topologyId}": false;
  "POST /topologies": false;
  "GET /topologies": false;
  "GET /attachments": false;
  "POST /attachments": false;
  "GET /attachments/{attachmentId}": false;
  "POST /bots/engage": true;
  "POST /bots/complete": true;
  "POST /bots/handover": true;
  "GET /categories": false;
  "POST /categories": false;
  "DELETE /categories/{categoryId}": false;
  "GET /categories/{categoryId}": false;
  "PUT /categories/{categoryId}": false;
  "GET /channels": false;
  "GET /channels/{channelId}": false;
  "PUT /channels/{channelId}": false;
  "GET /communities": false;
  "GET /communities/{communityId}": false;
  "GET /content_sources": false;
  "GET /content_sources/{sourceId}": false;
  "PUT /content_sources/{sourceId}": false;
  "PUT /content_sources/{sourceId}/email_credentials": false;
  "GET /content_threads": false;
  "GET /content_threads/{threadId}": false;
  "PUT /content_threads/{threadId}/close": false;
  "PUT /content_threads/{threadId}/ignore": false;
  "GET /content_threads/{threadId}/open": false;
  "PUT /content_threads/{threadId}/update_categories": false;
  "PUT /content_threads/{threadId}/disable_text_input": false;
  "PUT /content_threads/{threadId}/enable_text_input": false;
  "GET /contents": false;
  "POST /contents": true;
  "GET /contents/{contentId}": false;
  "PUT /contents/{contentId}/ignore": false;
  "PUT /contents/{contentId}/update_categories": true;
  "PUT /contents/{contentId}/update_custom_score": true;
  "GET /custom_fields": false;
  "POST /custom_fields": true;
  "DELETE /custom_fields/{customFieldId}": false;
  "GET /custom_fields/{customFieldId}": false;
  "PUT /custom_fields/{customFieldId}": false;
  "GET /events": false;
  "GET /events/{eventId}": false;
  "GET /folders": false;
  "POST /folders": false;
  "DELETE /folders/{folderId}": false;
  "GET /folders/{folderId}": false;
  "PUT /folders/{folderId}": false;
  "GET /identities": false;
  "GET /identities/{identityId}": false;
  "POST /identities/import": true;
  "GET /identity_groups": false;
  "GET /identity_groups/{identityGroupId}": false;
  "PUT /identity_groups/{identityGroupId}": false;
  "PUT /identity_groups/{identityGroupId}/merge": true;
  "GET /interface_locales": false;
  "GET /intervention_comments": false;
  "POST /intervention_comments": true;
  "DELETE /intervention_comments/{interventionCommentId}": false;
  "GET /intervention_comments/{interventionCommentId}": false;
  "GET /interventions": false;
  "POST /interventions": true;
  "GET /interventions/{interventionId}": false;
  "PUT /interventions/{interventionId}": false;
  "DELETE /interventions/{interventionId}/cancel": false;
  "PUT /interventions/{interventionId}/close": false;
  "PUT /interventions/{interventionId}/reassign": true;
  "PUT /interventions/{interventionId}/update_categories": true;
  "GET /locales": false;
  "GET /presence_status": false;
  "POST /presence_status": true;
  "DELETE /presence_status/{presenceStatusId}": false;
  "GET /presence_status/{presenceStatusId}": false;
  "PUT /presence_status/{presenceStatusId}": true;
  "GET /reply_assistant/entries": false;
  "POST /reply_assistant/entries": true;
  "DELETE /reply_assistant/entries/{replyAssistantEntryId}": false;
  "GET /reply_assistant/entries/{replyAssistantEntryId}": false;
  "PUT /reply_assistant/entries/{replyAssistantEntryId}": false;
  "GET /reply_assistant/groups": false;
  "POST /reply_assistant/groups": true;
  "DELETE /reply_assistant/groups/{replyAssistantGroupId}": false;
  "GET /reply_assistant/groups/{replyAssistantGroupId}": false;
  "PUT /reply_assistant/groups/{replyAssistantGroupId}": false;
  "GET /reply_assistant/versions": false;
  "POST /reply_assistant/versions": true;
  "DELETE /reply_assistant/versions/{replyAssistantVersionId}": false;
  "GET /reply_assistant/versions/{replyAssistantVersionId}": false;
  "PUT /reply_assistant/versions/{replyAssistantVersionId}": false;
  "GET /roles": false;
  "POST /roles": true;
  "GET /roles/{roleId}": false;
  "PUT /roles/{roleId}": false;
  "GET /settings": false;
  "PUT /settings": false;
  "GET /status": false;
  "GET /surveys": false;
  "GET /surveys/{surveyId}": false;
  "GET /survey_responses/{surveyResponseId}": false;
  "GET /status/{agentId}": false;
  "PUT /status/{agentId}": false;
  "GET /tags": false;
  "POST /tags": true;
  "DELETE /tags/{tagId}": false;
  "GET /tags/{tagId}": false;
  "PUT /tags/{tagId}": true;
  "GET /tasks": false;
  "GET /tasks/{taskId}": false;
  "POST /tasks/{taskId}/move": true;
  "POST /tasks/{taskId}/complete": true;
  "POST /tasks/{taskId}/transfer": false;
  "GET /teams": false;
  "POST /teams": false;
  "DELETE /teams/{teamId}": false;
  "GET /teams/{teamId}": false;
  "PUT /teams/{teamId}": false;
  "GET /time_sheets": false;
  "POST /time_sheets": true;
  "DELETE /time_sheets/{timeSheetId}": false;
  "GET /time_sheets/{timeSheetId}": false;
  "PUT /time_sheets/{timeSheetId}": false;
  "GET /timezones": false;
  "GET /user_capacities": false;
  "POST /user_capacities": true;
  "DELETE /user_capacities/{userCapacityId}": false;
  "GET /user_capacities/{userCapacityId}": false;
  "PUT /user_capacities/{userCapacityId}": false;
  "GET /users": false;
  "POST /users": true;
  "POST /users/invite": true;
  "DELETE /users/{userId}": false;
  "GET /users/{userId}": false;
  "PUT /users/{userId}": false;
  "GET /users/{userId}/sources_permissions": false;
  "PUT /users/{userId}/sources_permissions": false;
  "GET /users/{userId}/signatures": false;
  "POST /users/{userId}/signatures": true;
  "DELETE /users/{userId}/signatures/{signatureId}": false;
  "GET /users/{userId}/signatures/{signatureId}": false;
  "PUT /users/{userId}/signatures/{signatureId}": false;
  "GET /webhooks": true;
  "POST /webhooks": true;
  "DELETE /webhooks/{webhookId}": true;
  "GET /webhooks/{webhookId}": true;
  "PUT /webhooks/{webhookId}": true;
}

export interface RingCentralDigitalApiOperationRequestBodyMap {
  "PUT /topologies/{topologyId}/activate": never;
  "PUT /topologies/{topologyId}": RingCentralDigitalApiSchemaCreateUpdateTopology;
  "DELETE /topologies/{topologyId}": never;
  "GET /topologies/{topologyId}": never;
  "POST /topologies": RingCentralDigitalApiSchemaCreateUpdateTopology;
  "GET /topologies": never;
  "GET /attachments": never;
  "POST /attachments": {
  file?: string;
  private?: "true" | "=1";
};
  "GET /attachments/{attachmentId}": never;
  "POST /bots/engage": never;
  "POST /bots/complete": never;
  "POST /bots/handover": never;
  "GET /categories": never;
  "POST /categories": never;
  "DELETE /categories/{categoryId}": never;
  "GET /categories/{categoryId}": never;
  "PUT /categories/{categoryId}": never;
  "GET /channels": never;
  "GET /channels/{channelId}": never;
  "PUT /channels/{channelId}": never;
  "GET /communities": never;
  "GET /communities/{communityId}": never;
  "GET /content_sources": never;
  "GET /content_sources/{sourceId}": never;
  "PUT /content_sources/{sourceId}": never;
  "PUT /content_sources/{sourceId}/email_credentials": never;
  "GET /content_threads": never;
  "GET /content_threads/{threadId}": never;
  "PUT /content_threads/{threadId}/close": never;
  "PUT /content_threads/{threadId}/ignore": never;
  "GET /content_threads/{threadId}/open": never;
  "PUT /content_threads/{threadId}/update_categories": never;
  "PUT /content_threads/{threadId}/disable_text_input": never;
  "PUT /content_threads/{threadId}/enable_text_input": never;
  "GET /contents": never;
  "POST /contents": never;
  "GET /contents/{contentId}": never;
  "PUT /contents/{contentId}/ignore": never;
  "PUT /contents/{contentId}/update_categories": never;
  "PUT /contents/{contentId}/update_custom_score": never;
  "GET /custom_fields": never;
  "POST /custom_fields": never;
  "DELETE /custom_fields/{customFieldId}": never;
  "GET /custom_fields/{customFieldId}": never;
  "PUT /custom_fields/{customFieldId}": never;
  "GET /events": never;
  "GET /events/{eventId}": never;
  "GET /folders": never;
  "POST /folders": never;
  "DELETE /folders/{folderId}": never;
  "GET /folders/{folderId}": never;
  "PUT /folders/{folderId}": never;
  "GET /identities": never;
  "GET /identities/{identityId}": never;
  "POST /identities/import": never;
  "GET /identity_groups": never;
  "GET /identity_groups/{identityGroupId}": never;
  "PUT /identity_groups/{identityGroupId}": never;
  "PUT /identity_groups/{identityGroupId}/merge": never;
  "GET /interface_locales": never;
  "GET /intervention_comments": never;
  "POST /intervention_comments": never;
  "DELETE /intervention_comments/{interventionCommentId}": never;
  "GET /intervention_comments/{interventionCommentId}": never;
  "GET /interventions": never;
  "POST /interventions": never;
  "GET /interventions/{interventionId}": never;
  "PUT /interventions/{interventionId}": never;
  "DELETE /interventions/{interventionId}/cancel": never;
  "PUT /interventions/{interventionId}/close": never;
  "PUT /interventions/{interventionId}/reassign": never;
  "PUT /interventions/{interventionId}/update_categories": never;
  "GET /locales": never;
  "GET /presence_status": never;
  "POST /presence_status": never;
  "DELETE /presence_status/{presenceStatusId}": never;
  "GET /presence_status/{presenceStatusId}": never;
  "PUT /presence_status/{presenceStatusId}": never;
  "GET /reply_assistant/entries": never;
  "POST /reply_assistant/entries": never;
  "DELETE /reply_assistant/entries/{replyAssistantEntryId}": never;
  "GET /reply_assistant/entries/{replyAssistantEntryId}": never;
  "PUT /reply_assistant/entries/{replyAssistantEntryId}": never;
  "GET /reply_assistant/groups": never;
  "POST /reply_assistant/groups": never;
  "DELETE /reply_assistant/groups/{replyAssistantGroupId}": never;
  "GET /reply_assistant/groups/{replyAssistantGroupId}": never;
  "PUT /reply_assistant/groups/{replyAssistantGroupId}": never;
  "GET /reply_assistant/versions": never;
  "POST /reply_assistant/versions": never;
  "DELETE /reply_assistant/versions/{replyAssistantVersionId}": never;
  "GET /reply_assistant/versions/{replyAssistantVersionId}": never;
  "PUT /reply_assistant/versions/{replyAssistantVersionId}": never;
  "GET /roles": never;
  "POST /roles": never;
  "GET /roles/{roleId}": never;
  "PUT /roles/{roleId}": never;
  "GET /settings": never;
  "PUT /settings": never;
  "GET /status": never;
  "GET /surveys": never;
  "GET /surveys/{surveyId}": never;
  "GET /survey_responses/{surveyResponseId}": never;
  "GET /status/{agentId}": never;
  "PUT /status/{agentId}": never;
  "GET /tags": never;
  "POST /tags": never;
  "DELETE /tags/{tagId}": never;
  "GET /tags/{tagId}": never;
  "PUT /tags/{tagId}": never;
  "GET /tasks": never;
  "GET /tasks/{taskId}": never;
  "POST /tasks/{taskId}/move": never;
  "POST /tasks/{taskId}/complete": never;
  "POST /tasks/{taskId}/transfer": never;
  "GET /teams": never;
  "POST /teams": never;
  "DELETE /teams/{teamId}": never;
  "GET /teams/{teamId}": never;
  "PUT /teams/{teamId}": never;
  "GET /time_sheets": never;
  "POST /time_sheets": never;
  "DELETE /time_sheets/{timeSheetId}": never;
  "GET /time_sheets/{timeSheetId}": never;
  "PUT /time_sheets/{timeSheetId}": never;
  "GET /timezones": never;
  "GET /user_capacities": never;
  "POST /user_capacities": never;
  "DELETE /user_capacities/{userCapacityId}": never;
  "GET /user_capacities/{userCapacityId}": never;
  "PUT /user_capacities/{userCapacityId}": never;
  "GET /users": never;
  "POST /users": never;
  "POST /users/invite": never;
  "DELETE /users/{userId}": never;
  "GET /users/{userId}": never;
  "PUT /users/{userId}": never;
  "GET /users/{userId}/sources_permissions": never;
  "PUT /users/{userId}/sources_permissions": never;
  "GET /users/{userId}/signatures": never;
  "POST /users/{userId}/signatures": never;
  "DELETE /users/{userId}/signatures/{signatureId}": never;
  "GET /users/{userId}/signatures/{signatureId}": never;
  "PUT /users/{userId}/signatures/{signatureId}": never;
  "GET /webhooks": never;
  "POST /webhooks": never;
  "DELETE /webhooks/{webhookId}": never;
  "GET /webhooks/{webhookId}": never;
  "PUT /webhooks/{webhookId}": never;
}

export interface RingCentralDigitalApiOperationRequestBodyRequiredMap {
  "PUT /topologies/{topologyId}/activate": false;
  "PUT /topologies/{topologyId}": false;
  "DELETE /topologies/{topologyId}": false;
  "GET /topologies/{topologyId}": false;
  "POST /topologies": true;
  "GET /topologies": false;
  "GET /attachments": false;
  "POST /attachments": false;
  "GET /attachments/{attachmentId}": false;
  "POST /bots/engage": false;
  "POST /bots/complete": false;
  "POST /bots/handover": false;
  "GET /categories": false;
  "POST /categories": false;
  "DELETE /categories/{categoryId}": false;
  "GET /categories/{categoryId}": false;
  "PUT /categories/{categoryId}": false;
  "GET /channels": false;
  "GET /channels/{channelId}": false;
  "PUT /channels/{channelId}": false;
  "GET /communities": false;
  "GET /communities/{communityId}": false;
  "GET /content_sources": false;
  "GET /content_sources/{sourceId}": false;
  "PUT /content_sources/{sourceId}": false;
  "PUT /content_sources/{sourceId}/email_credentials": false;
  "GET /content_threads": false;
  "GET /content_threads/{threadId}": false;
  "PUT /content_threads/{threadId}/close": false;
  "PUT /content_threads/{threadId}/ignore": false;
  "GET /content_threads/{threadId}/open": false;
  "PUT /content_threads/{threadId}/update_categories": false;
  "PUT /content_threads/{threadId}/disable_text_input": false;
  "PUT /content_threads/{threadId}/enable_text_input": false;
  "GET /contents": false;
  "POST /contents": false;
  "GET /contents/{contentId}": false;
  "PUT /contents/{contentId}/ignore": false;
  "PUT /contents/{contentId}/update_categories": false;
  "PUT /contents/{contentId}/update_custom_score": false;
  "GET /custom_fields": false;
  "POST /custom_fields": false;
  "DELETE /custom_fields/{customFieldId}": false;
  "GET /custom_fields/{customFieldId}": false;
  "PUT /custom_fields/{customFieldId}": false;
  "GET /events": false;
  "GET /events/{eventId}": false;
  "GET /folders": false;
  "POST /folders": false;
  "DELETE /folders/{folderId}": false;
  "GET /folders/{folderId}": false;
  "PUT /folders/{folderId}": false;
  "GET /identities": false;
  "GET /identities/{identityId}": false;
  "POST /identities/import": false;
  "GET /identity_groups": false;
  "GET /identity_groups/{identityGroupId}": false;
  "PUT /identity_groups/{identityGroupId}": false;
  "PUT /identity_groups/{identityGroupId}/merge": false;
  "GET /interface_locales": false;
  "GET /intervention_comments": false;
  "POST /intervention_comments": false;
  "DELETE /intervention_comments/{interventionCommentId}": false;
  "GET /intervention_comments/{interventionCommentId}": false;
  "GET /interventions": false;
  "POST /interventions": false;
  "GET /interventions/{interventionId}": false;
  "PUT /interventions/{interventionId}": false;
  "DELETE /interventions/{interventionId}/cancel": false;
  "PUT /interventions/{interventionId}/close": false;
  "PUT /interventions/{interventionId}/reassign": false;
  "PUT /interventions/{interventionId}/update_categories": false;
  "GET /locales": false;
  "GET /presence_status": false;
  "POST /presence_status": false;
  "DELETE /presence_status/{presenceStatusId}": false;
  "GET /presence_status/{presenceStatusId}": false;
  "PUT /presence_status/{presenceStatusId}": false;
  "GET /reply_assistant/entries": false;
  "POST /reply_assistant/entries": false;
  "DELETE /reply_assistant/entries/{replyAssistantEntryId}": false;
  "GET /reply_assistant/entries/{replyAssistantEntryId}": false;
  "PUT /reply_assistant/entries/{replyAssistantEntryId}": false;
  "GET /reply_assistant/groups": false;
  "POST /reply_assistant/groups": false;
  "DELETE /reply_assistant/groups/{replyAssistantGroupId}": false;
  "GET /reply_assistant/groups/{replyAssistantGroupId}": false;
  "PUT /reply_assistant/groups/{replyAssistantGroupId}": false;
  "GET /reply_assistant/versions": false;
  "POST /reply_assistant/versions": false;
  "DELETE /reply_assistant/versions/{replyAssistantVersionId}": false;
  "GET /reply_assistant/versions/{replyAssistantVersionId}": false;
  "PUT /reply_assistant/versions/{replyAssistantVersionId}": false;
  "GET /roles": false;
  "POST /roles": false;
  "GET /roles/{roleId}": false;
  "PUT /roles/{roleId}": false;
  "GET /settings": false;
  "PUT /settings": false;
  "GET /status": false;
  "GET /surveys": false;
  "GET /surveys/{surveyId}": false;
  "GET /survey_responses/{surveyResponseId}": false;
  "GET /status/{agentId}": false;
  "PUT /status/{agentId}": false;
  "GET /tags": false;
  "POST /tags": false;
  "DELETE /tags/{tagId}": false;
  "GET /tags/{tagId}": false;
  "PUT /tags/{tagId}": false;
  "GET /tasks": false;
  "GET /tasks/{taskId}": false;
  "POST /tasks/{taskId}/move": false;
  "POST /tasks/{taskId}/complete": false;
  "POST /tasks/{taskId}/transfer": false;
  "GET /teams": false;
  "POST /teams": false;
  "DELETE /teams/{teamId}": false;
  "GET /teams/{teamId}": false;
  "PUT /teams/{teamId}": false;
  "GET /time_sheets": false;
  "POST /time_sheets": false;
  "DELETE /time_sheets/{timeSheetId}": false;
  "GET /time_sheets/{timeSheetId}": false;
  "PUT /time_sheets/{timeSheetId}": false;
  "GET /timezones": false;
  "GET /user_capacities": false;
  "POST /user_capacities": false;
  "DELETE /user_capacities/{userCapacityId}": false;
  "GET /user_capacities/{userCapacityId}": false;
  "PUT /user_capacities/{userCapacityId}": false;
  "GET /users": false;
  "POST /users": false;
  "POST /users/invite": false;
  "DELETE /users/{userId}": false;
  "GET /users/{userId}": false;
  "PUT /users/{userId}": false;
  "GET /users/{userId}/sources_permissions": false;
  "PUT /users/{userId}/sources_permissions": false;
  "GET /users/{userId}/signatures": false;
  "POST /users/{userId}/signatures": false;
  "DELETE /users/{userId}/signatures/{signatureId}": false;
  "GET /users/{userId}/signatures/{signatureId}": false;
  "PUT /users/{userId}/signatures/{signatureId}": false;
  "GET /webhooks": false;
  "POST /webhooks": false;
  "DELETE /webhooks/{webhookId}": false;
  "GET /webhooks/{webhookId}": false;
  "PUT /webhooks/{webhookId}": false;
}

export interface RingCentralDigitalApiOperationResponseMap {
  "PUT /topologies/{topologyId}/activate": RingCentralDigitalApiSchemaTopology;
  "PUT /topologies/{topologyId}": RingCentralDigitalApiSchemaTopology;
  "DELETE /topologies/{topologyId}": RingCentralDigitalApiSchemaTopology;
  "GET /topologies/{topologyId}": RingCentralDigitalApiSchemaTopology;
  "POST /topologies": RingCentralDigitalApiSchemaTopology;
  "GET /topologies": RingCentralDigitalApiSchemaGetAllTopologiesResponse;
  "GET /attachments": RingCentralDigitalApiSchemaGetAllAttachmentsResponse;
  "POST /attachments": RingCentralDigitalApiSchemaAttachment;
  "GET /attachments/{attachmentId}": RingCentralDigitalApiSchemaAttachment;
  "POST /bots/engage": RingCentralDigitalApiSchemaIntervention;
  "POST /bots/complete": RingCentralDigitalApiSchemaBotCompleteResponse;
  "POST /bots/handover": RingCentralDigitalApiSchemaHandoverFromBotToAgentResponse;
  "GET /categories": RingCentralDigitalApiSchemaGetAllCategoriesResponse;
  "POST /categories": RingCentralDigitalApiSchemaCategory;
  "DELETE /categories/{categoryId}": RingCentralDigitalApiSchemaCategory;
  "GET /categories/{categoryId}": RingCentralDigitalApiSchemaCategory;
  "PUT /categories/{categoryId}": RingCentralDigitalApiSchemaCategory;
  "GET /channels": RingCentralDigitalApiSchemaGetAllChannelsResponse;
  "GET /channels/{channelId}": RingCentralDigitalApiSchemaChannel;
  "PUT /channels/{channelId}": RingCentralDigitalApiSchemaChannel;
  "GET /communities": RingCentralDigitalApiSchemaGetAllCommunitiesResponse;
  "GET /communities/{communityId}": RingCentralDigitalApiSchemaCommunity;
  "GET /content_sources": RingCentralDigitalApiSchemaGetAllSourcesResponse;
  "GET /content_sources/{sourceId}": RingCentralDigitalApiSchemaSource;
  "PUT /content_sources/{sourceId}": RingCentralDigitalApiSchemaSource;
  "PUT /content_sources/{sourceId}/email_credentials": RingCentralDigitalApiSchemaSource;
  "GET /content_threads": RingCentralDigitalApiSchemaGetAllThreadsResponse;
  "GET /content_threads/{threadId}": RingCentralDigitalApiSchemaThread;
  "PUT /content_threads/{threadId}/close": RingCentralDigitalApiSchemaThread;
  "PUT /content_threads/{threadId}/ignore": RingCentralDigitalApiSchemaThread;
  "GET /content_threads/{threadId}/open": RingCentralDigitalApiSchemaThread;
  "PUT /content_threads/{threadId}/update_categories": RingCentralDigitalApiSchemaThread;
  "PUT /content_threads/{threadId}/disable_text_input": RingCentralDigitalApiSchemaMessagingThread;
  "PUT /content_threads/{threadId}/enable_text_input": RingCentralDigitalApiSchemaMessagingThread;
  "GET /contents": RingCentralDigitalApiSchemaGetAllContentsResponse;
  "POST /contents": RingCentralDigitalApiSchemaContent;
  "GET /contents/{contentId}": RingCentralDigitalApiSchemaContent;
  "PUT /contents/{contentId}/ignore": RingCentralDigitalApiSchemaContent;
  "PUT /contents/{contentId}/update_categories": RingCentralDigitalApiSchemaContent;
  "PUT /contents/{contentId}/update_custom_score": RingCentralDigitalApiSchemaContent;
  "GET /custom_fields": RingCentralDigitalApiSchemaGetAllCustomFieldsResponse;
  "POST /custom_fields": RingCentralDigitalApiSchemaCustomField;
  "DELETE /custom_fields/{customFieldId}": RingCentralDigitalApiSchemaCustomField;
  "GET /custom_fields/{customFieldId}": RingCentralDigitalApiSchemaCustomField;
  "PUT /custom_fields/{customFieldId}": RingCentralDigitalApiSchemaCustomField;
  "GET /events": RingCentralDigitalApiSchemaGetAllEventsResponse;
  "GET /events/{eventId}": RingCentralDigitalApiSchemaEvent;
  "GET /folders": RingCentralDigitalApiSchemaGetAllFoldersResponse;
  "POST /folders": RingCentralDigitalApiSchemaFolder;
  "DELETE /folders/{folderId}": RingCentralDigitalApiSchemaFolder;
  "GET /folders/{folderId}": RingCentralDigitalApiSchemaFolder;
  "PUT /folders/{folderId}": RingCentralDigitalApiSchemaFolder;
  "GET /identities": RingCentralDigitalApiSchemaGetAllIdentitiesResponse;
  "GET /identities/{identityId}": RingCentralDigitalApiSchemaIdentity;
  "POST /identities/import": RingCentralDigitalApiSchemaIdentity;
  "GET /identity_groups": RingCentralDigitalApiSchemaGetAllIdentityGroupsResponse;
  "GET /identity_groups/{identityGroupId}": RingCentralDigitalApiSchemaIdentityGroup;
  "PUT /identity_groups/{identityGroupId}": RingCentralDigitalApiSchemaIdentityGroup;
  "PUT /identity_groups/{identityGroupId}/merge": RingCentralDigitalApiSchemaIdentityGroup;
  "GET /interface_locales": ReadonlyArray<RingCentralDigitalApiSchemaUiLocale>;
  "GET /intervention_comments": RingCentralDigitalApiSchemaGetAllInterventionCommentsResponse;
  "POST /intervention_comments": RingCentralDigitalApiSchemaInterventionComment;
  "DELETE /intervention_comments/{interventionCommentId}": RingCentralDigitalApiSchemaInterventionComment;
  "GET /intervention_comments/{interventionCommentId}": RingCentralDigitalApiSchemaInterventionComment;
  "GET /interventions": RingCentralDigitalApiSchemaGetAllInterventionsResponse;
  "POST /interventions": RingCentralDigitalApiSchemaIntervention;
  "GET /interventions/{interventionId}": RingCentralDigitalApiSchemaIntervention;
  "PUT /interventions/{interventionId}": RingCentralDigitalApiSchemaIntervention;
  "DELETE /interventions/{interventionId}/cancel": RingCentralDigitalApiSchemaIntervention;
  "PUT /interventions/{interventionId}/close": RingCentralDigitalApiSchemaIntervention;
  "PUT /interventions/{interventionId}/reassign": RingCentralDigitalApiSchemaIntervention;
  "PUT /interventions/{interventionId}/update_categories": RingCentralDigitalApiSchemaIntervention;
  "GET /locales": ReadonlyArray<RingCentralDigitalApiSchemaLocale>;
  "GET /presence_status": RingCentralDigitalApiSchemaGetAllPresenceStatusResponse;
  "POST /presence_status": RingCentralDigitalApiSchemaPresenceStatus;
  "DELETE /presence_status/{presenceStatusId}": RingCentralDigitalApiSchemaPresenceStatus;
  "GET /presence_status/{presenceStatusId}": RingCentralDigitalApiSchemaPresenceStatus;
  "PUT /presence_status/{presenceStatusId}": RingCentralDigitalApiSchemaPresenceStatus;
  "GET /reply_assistant/entries": RingCentralDigitalApiSchemaGetAllReplyAssistantEntriesResponse;
  "POST /reply_assistant/entries": RingCentralDigitalApiSchemaReplyAssistantEntry;
  "DELETE /reply_assistant/entries/{replyAssistantEntryId}": RingCentralDigitalApiSchemaReplyAssistantEntry;
  "GET /reply_assistant/entries/{replyAssistantEntryId}": RingCentralDigitalApiSchemaReplyAssistantEntry;
  "PUT /reply_assistant/entries/{replyAssistantEntryId}": RingCentralDigitalApiSchemaReplyAssistantEntry;
  "GET /reply_assistant/groups": RingCentralDigitalApiSchemaGetAllReplyAssistantGroupsResponse;
  "POST /reply_assistant/groups": RingCentralDigitalApiSchemaReplyAssistantGroup;
  "DELETE /reply_assistant/groups/{replyAssistantGroupId}": RingCentralDigitalApiSchemaReplyAssistantGroup;
  "GET /reply_assistant/groups/{replyAssistantGroupId}": RingCentralDigitalApiSchemaReplyAssistantGroup;
  "PUT /reply_assistant/groups/{replyAssistantGroupId}": RingCentralDigitalApiSchemaReplyAssistantGroup;
  "GET /reply_assistant/versions": RingCentralDigitalApiSchemaGetAllReplyAssistantVersionsResponse;
  "POST /reply_assistant/versions": RingCentralDigitalApiSchemaReplyAssistantVersion;
  "DELETE /reply_assistant/versions/{replyAssistantVersionId}": RingCentralDigitalApiSchemaReplyAssistantVersion;
  "GET /reply_assistant/versions/{replyAssistantVersionId}": RingCentralDigitalApiSchemaReplyAssistantVersion;
  "PUT /reply_assistant/versions/{replyAssistantVersionId}": RingCentralDigitalApiSchemaReplyAssistantVersion;
  "GET /roles": RingCentralDigitalApiSchemaGetAllRolesResponse;
  "POST /roles": RingCentralDigitalApiSchemaRole;
  "GET /roles/{roleId}": RingCentralDigitalApiSchemaRole;
  "PUT /roles/{roleId}": RingCentralDigitalApiSchemaRole;
  "GET /settings": RingCentralDigitalApiSchemaSettings;
  "PUT /settings": RingCentralDigitalApiSchemaSettings;
  "GET /status": ReadonlyArray<RingCentralDigitalApiSchemaAgentStatus>;
  "GET /surveys": RingCentralDigitalApiSchemaGetAllSurveysResponse;
  "GET /surveys/{surveyId}": RingCentralDigitalApiSchemaSurvey;
  "GET /survey_responses/{surveyResponseId}": RingCentralDigitalApiSchemaSurveyResponse;
  "GET /status/{agentId}": RingCentralDigitalApiSchemaAgentStatus;
  "PUT /status/{agentId}": RingCentralDigitalApiSchemaAgentStatus;
  "GET /tags": RingCentralDigitalApiSchemaGetAllTagsResponse;
  "POST /tags": RingCentralDigitalApiSchemaTag;
  "DELETE /tags/{tagId}": RingCentralDigitalApiSchemaTag;
  "GET /tags/{tagId}": RingCentralDigitalApiSchemaTag;
  "PUT /tags/{tagId}": RingCentralDigitalApiSchemaTag;
  "GET /tasks": RingCentralDigitalApiSchemaGetAllTasksResponse;
  "GET /tasks/{taskId}": RingCentralDigitalApiSchemaTask;
  "POST /tasks/{taskId}/move": RingCentralDigitalApiSchemaTask;
  "POST /tasks/{taskId}/complete": RingCentralDigitalApiSchemaTask;
  "POST /tasks/{taskId}/transfer": RingCentralDigitalApiSchemaTask;
  "GET /teams": RingCentralDigitalApiSchemaGetAllTeamsResponse;
  "POST /teams": RingCentralDigitalApiSchemaTeam;
  "DELETE /teams/{teamId}": RingCentralDigitalApiSchemaTeam;
  "GET /teams/{teamId}": RingCentralDigitalApiSchemaTeam;
  "PUT /teams/{teamId}": RingCentralDigitalApiSchemaTeam;
  "GET /time_sheets": RingCentralDigitalApiSchemaGetAllTimeSheetsResponse;
  "POST /time_sheets": RingCentralDigitalApiSchemaTimeSheet;
  "DELETE /time_sheets/{timeSheetId}": RingCentralDigitalApiSchemaTimeSheet;
  "GET /time_sheets/{timeSheetId}": RingCentralDigitalApiSchemaTimeSheet;
  "PUT /time_sheets/{timeSheetId}": RingCentralDigitalApiSchemaTimeSheet;
  "GET /timezones": ReadonlyArray<RingCentralDigitalApiSchemaTimezone>;
  "GET /user_capacities": RingCentralDigitalApiSchemaGetAllUserCapacitiesResponse;
  "POST /user_capacities": RingCentralDigitalApiSchemaUserCapacity;
  "DELETE /user_capacities/{userCapacityId}": RingCentralDigitalApiSchemaUserCapacity;
  "GET /user_capacities/{userCapacityId}": RingCentralDigitalApiSchemaUserCapacity;
  "PUT /user_capacities/{userCapacityId}": RingCentralDigitalApiSchemaUserCapacity;
  "GET /users": RingCentralDigitalApiSchemaGetAllUsersResponse;
  "POST /users": RingCentralDigitalApiSchemaUser;
  "POST /users/invite": RingCentralDigitalApiSchemaUser;
  "DELETE /users/{userId}": RingCentralDigitalApiSchemaUser;
  "GET /users/{userId}": RingCentralDigitalApiSchemaUser;
  "PUT /users/{userId}": RingCentralDigitalApiSchemaUser;
  "GET /users/{userId}/sources_permissions": RingCentralDigitalApiSchemaUserSourcesPermissions;
  "PUT /users/{userId}/sources_permissions": RingCentralDigitalApiSchemaUserSourcesPermissions;
  "GET /users/{userId}/signatures": RingCentralDigitalApiSchemaGetAllUserSignaturesResponse;
  "POST /users/{userId}/signatures": RingCentralDigitalApiSchemaUserSignature;
  "DELETE /users/{userId}/signatures/{signatureId}": RingCentralDigitalApiSchemaUserSignature;
  "GET /users/{userId}/signatures/{signatureId}": RingCentralDigitalApiSchemaUserSignature;
  "PUT /users/{userId}/signatures/{signatureId}": RingCentralDigitalApiSchemaUserSignature;
  "GET /webhooks": RingCentralDigitalApiSchemaGetAllWebhooksResponse;
  "POST /webhooks": RingCentralDigitalApiSchemaWebhook;
  "DELETE /webhooks/{webhookId}": RingCentralDigitalApiSchemaWebhook;
  "GET /webhooks/{webhookId}": RingCentralDigitalApiSchemaWebhook;
  "PUT /webhooks/{webhookId}": RingCentralDigitalApiSchemaWebhook;
}
