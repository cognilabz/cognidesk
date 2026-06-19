// Generated provider schema DTOs for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type ZoomContactCenterFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type ZoomContactCenterFullApiSchemaJsonValue = ZoomContactCenterFullApiSchemaJsonPrimitive | readonly ZoomContactCenterFullApiSchemaJsonValue[] | { readonly [key: string]: ZoomContactCenterFullApiSchemaJsonValue | undefined };

export interface ZoomContactCenterFullApiOperationQueryMap {
  "GET /contact_center/address_books": {
  next_page_token?: string;
  page_size?: number;
  unit_id: string;
};
  "POST /contact_center/address_books": {};
  "GET /contact_center/address_books/contacts/{contactId}/custom_fields": {
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/address_books/custom_fields": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/address_books/custom_fields": {};
  "GET /contact_center/address_books/custom_fields/{customFieldId}": {};
  "DELETE /contact_center/address_books/custom_fields/{customFieldId}": {};
  "PATCH /contact_center/address_books/custom_fields/{customFieldId}": {};
  "GET /contact_center/address_books/units": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/address_books/units": {};
  "GET /contact_center/address_books/units/{unitId}": {
  unit_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/address_books/units/{unitId}": {};
  "PATCH /contact_center/address_books/units/{unitId}": {};
  "GET /contact_center/address_books/{addressBookId}": {
  address_book_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/address_books/{addressBookId}": {};
  "PATCH /contact_center/address_books/{addressBookId}": {};
  "GET /contact_center/address_books/{addressBookId}/contacts": {
  address_book_identifier_type?: "id" | "name";
  emails?: ReadonlyArray<string>;
  phone_numbers?: ReadonlyArray<string>;
  page_size?: number;
  next_page_token?: string;
};
  "POST /contact_center/address_books/{addressBookId}/contacts": {};
  "POST /contact_center/address_books/{addressBookId}/contacts/batch": {};
  "DELETE /contact_center/address_books/{addressBookId}/contacts/batch": {};
  "PATCH /contact_center/address_books/{addressBookId}/contacts/batch": {};
  "GET /contact_center/address_books/{addressBookId}/contacts/{contactId}": {
  address_book_identifier_type?: "id" | "name";
  contact_identifier_type?: "id" | "email";
};
  "DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}": {};
  "PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}": {};
  "GET /contact_center/system_statuses": {
  next_page_token?: string;
  page_size?: number;
  status_category?: "agent_status" | "queue_opt_out_and_not_ready_status";
};
  "POST /contact_center/system_statuses": {};
  "GET /contact_center/system_statuses/{statusId}": {
  status_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/system_statuses/{statusId}": {
  status_identifier_type?: "id" | "name";
};
  "PATCH /contact_center/system_statuses/{statusId}": {
  status_identifier_type?: "id" | "name";
};
  "GET /contact_center/asset_library/assets": {
  next_page_token?: string;
  asset_type?: "audio" | "image" | "script" | "slides" | "text" | "video" | "saved_reply";
  asset_language_code?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  page_size?: number;
  asset_item_name?: string;
};
  "POST /contact_center/asset_library/assets": {};
  "PATCH /contact_center/asset_library/assets/items": {};
  "GET /contact_center/asset_library/assets/{assetId}": {
  asset_identifier_type?: "id" | "name";
  asset_item_name?: string;
  asset_language_code?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
};
  "DELETE /contact_center/asset_library/assets/{assetId}": {
  archive?: boolean;
};
  "PATCH /contact_center/asset_library/assets/{assetId}": {};
  "POST /contact_center/asset_library/assets/{assetId}/duplicate": {};
  "DELETE /contact_center/asset_library/assets/{assetId}/items": {};
  "GET /contact_center/asset_library/categories": {
  next_page_token?: string;
  page_size?: number;
  category_scope?: string;
};
  "POST /contact_center/asset_library/categories": {};
  "GET /contact_center/asset_library/categories/{categoryId}": {
  asset_category_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/asset_library/categories/{categoryId}": {};
  "PATCH /contact_center/asset_library/categories/{categoryId}": {};
  "GET /contact_center/block_list_rules/ip_addresses": {
  match_type?: "ip_address";
  status?: "active" | "inactive";
  ip_address?: string;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/block_list_rules/ip_addresses": {};
  "DELETE /contact_center/block_list_rules/ip_addresses": {};
  "GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}": {};
  "GET /contact_center/block_list_rules/phone_numbers": {
  match_type?: "phone_number" | "prefix";
  status?: "active" | "inactive";
  phone_number?: string;
  channel?: string;
  direction?: string;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/block_list_rules/phone_numbers": {};
  "DELETE /contact_center/block_list_rules/phone_numbers": {};
  "GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}": {};
  "PUT /contact_center/engagements/{engagementId}/recording/{command}": {};
  "POST /contact_center/users/{userId}/commands": {};
  "GET /contact_center/users/{userId}/devices": {
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/outbound_campaign/campaigns": {
  outbound_campaign_status?: "draft" | "ready" | "running" | "paused" | "completed" | "not_running";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/outbound_campaign/campaigns": {};
  "GET /contact_center/outbound_campaign/campaigns/{campaignId}": {
  campaign_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/outbound_campaign/campaigns/{campaignId}": {};
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}": {};
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status": {};
  "GET /contact_center/outbound_campaign/contact_list_custom_fields": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/outbound_campaign/contact_list_custom_fields": {};
  "GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": {};
  "DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": {};
  "PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": {};
  "GET /contact_center/outbound_campaign/contact_lists": {
  contact_list_type?: "contact" | "do_not_contact";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/outbound_campaign/contact_lists": {};
  "PATCH /contact_center/outbound_campaign/contact_lists": {};
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}": {
  contact_list_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}": {};
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}": {};
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": {
  contact_list_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": {};
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": {};
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch": {};
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": {
  identifier_type?: "id" | "name";
};
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": {};
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": {};
  "GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields": {};
  "GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": {};
  "DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": {};
  "GET /contact_center/dispositions": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/dispositions": {};
  "GET /contact_center/dispositions/sets": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/dispositions/sets": {};
  "GET /contact_center/dispositions/sets/{dispositionSetId}": {
  disposition_set_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/dispositions/sets/{dispositionSetId}": {};
  "PATCH /contact_center/dispositions/sets/{dispositionSetId}": {};
  "GET /contact_center/dispositions/{dispositionId}": {
  disposition_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/dispositions/{dispositionId}": {};
  "PATCH /contact_center/dispositions/{dispositionId}": {};
  "POST /contact_center/engagement": {};
  "GET /contact_center/engagements": {
  timezone?: string;
  from?: string;
  to?: string;
  queue_id?: string;
  consumer_number?: string;
  channel_types?: ReadonlyArray<"voice" | "sms" | "chat" | "video" | "kiosk" | "in_app_chat" | "in_app_video">;
  channel?: "voice" | "video" | "messaging" | "email";
  channel_sources?: ReadonlyArray<"in_app_video" | "kiosk_video" | "web_video" | "web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address">;
  direction?: "inbound" | "outbound";
  user_id?: string;
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/engagements/{engagementId}": {};
  "PATCH /contact_center/engagements/{engagementId}": {};
  "GET /contact_center/engagements/{engagementId}/attachments": {
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/engagements/{engagementId}/events": {};
  "GET /contact_center/engagements/{engagementId}/recordings/status": {};
  "GET /contact_center/engagements/{engagementId}/survey": {};
  "GET /contact_center/engagements/{engagementId}/transfer/flows": {
  keyword?: string;
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/engagements/{engagementId}/transfer/queues": {
  keyword?: string;
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/engagements/{engagementId}/transfer/users": {
  keyword?: string;
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/flows": {
  status?: "draft" | "published" | "archived";
  channel_type?: "voice" | "chat" | "sms" | "video" | "in_app_chat";
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address" | "api";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/flows": {};
  "GET /contact_center/flows/{flowId}": {
  flow_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/flows/{flowId}": {};
  "PATCH /contact_center/flows/{flowId}": {};
  "GET /contact_center/flows/{flowId}/entry_points": {
  flow_identifier_type?: "id" | "name";
};
  "POST /contact_center/flows/{flowId}/entry_points": {};
  "DELETE /contact_center/flows/{flowId}/entry_points": {};
  "GET /contact_center/flows/{flowId}/export": {
  flow_identifier_type?: "id" | "name";
  flow_version: number;
};
  "PUT /contact_center/flows/{flowId}/publish": {
  flow_version?: number;
};
  "GET /contact_center/flows_entry_points": {
  channel: "voice" | "video" | "messaging" | "email";
  channel_source?: "sms" | "web_chat" | "in_app_chat" | "team_chat" | "instagram" | "facebook_messenger" | "whatsapp" | "email_address";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks": {};
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": {};
  "PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": {};
  "GET /contact_center/inboxes": {
  page_size?: number;
  next_page_token?: string;
};
  "POST /contact_center/inboxes": {};
  "DELETE /contact_center/inboxes": {
  inbox_ids?: ReadonlyArray<string>;
  delete_all_messages_and_inboxes?: boolean;
  move_to_inbox_id?: string;
};
  "GET /contact_center/inboxes/messages": {
  queue_ids?: ReadonlyArray<string>;
  cc_queue_ids?: ReadonlyArray<string>;
  inbox_id?: string;
  flow_id?: string;
  minimum_duration?: number;
  maximum_duration?: number;
  message_type?: "voicemail";
  from?: string;
  to?: string;
  engagement_id?: string;
  consumer_number?: string;
  status?: "normal" | "deleted";
  next_page_token?: string;
  page_size?: number;
};
  "DELETE /contact_center/inboxes/messages": {
  delete_all_messages?: boolean;
  queue_ids?: ReadonlyArray<string>;
  cc_queue_ids?: ReadonlyArray<string>;
  flow_ids?: ReadonlyArray<string>;
};
  "GET /contact_center/inboxes/{inboxId}": {
  inbox_identifier_type?: "id" | "name";
};
  "PATCH /contact_center/inboxes/{inboxId}": {};
  "PATCH /contact_center/inboxes/{inboxId}/email_notification": {};
  "GET /contact_center/inboxes/{inboxId}/email_notifications": {
  inbox_identifier_type?: "id" | "name";
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/inboxes/{inboxId}/messages": {
  inbox_identifier_type?: "id" | "name";
  queue_ids?: ReadonlyArray<string>;
  message_type?: "voicemail";
  flow_id?: string;
  from?: string;
  to?: string;
  next_page_token?: string;
  page_size?: number;
};
  "DELETE /contact_center/inboxes/{inboxId}/messages": {
  delete_all_messages?: boolean;
};
  "DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}": {};
  "GET /contact_center/inboxes/{inboxId}/queues": {
  inbox_identifier_type?: "id" | "name";
};
  "POST /contact_center/inboxes/{inboxId}/queues": {};
  "DELETE /contact_center/inboxes/{inboxId}/queues": {
  queue_ids?: ReadonlyArray<string>;
  cc_queue_ids?: ReadonlyArray<string>;
};
  "GET /contact_center/inboxes/{inboxId}/users": {
  inbox_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/inboxes/{inboxId}/users": {
  inbox_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/inboxes/{inboxId}/users": {
  inbox_identifier_type?: "id" | "name";
  user_ids: ReadonlyArray<string>;
};
  "GET /contact_center/email/messages": {
  engagement_id: string;
  direction?: "forward" | "backward";
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/messaging/messages": {
  engagement_id: string;
  direction?: "forward" | "backward";
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/sms": {
  next_page_token?: string;
  page_size?: number;
  from?: string;
  to?: string;
  country_iso_codes?: ReadonlyArray<string>;
  direction?: "inbound" | "outbound";
  user_id?: string;
  engagement_id?: string;
  consumer_number?: string;
};
  "POST /contact_center/sms": {};
  "GET /contact_center/voice_calls": {
  from?: string;
  to?: string;
  types?: ReadonlyArray<"external_call" | "external_conference_call" | "external_callback_call" | "internal_call" | "internal_conference_call" | "internal_callback_call">;
  distribution?: "acd" | "non_acd";
  consumer_number?: string;
  direction?: "inbound" | "outbound";
  user_ids?: ReadonlyArray<string>;
  engagement_id?: string;
  queue_ids?: ReadonlyArray<string>;
  cc_queue_ids?: ReadonlyArray<string>;
  country_iso_codes?: ReadonlyArray<string>;
  number_types?: ReadonlyArray<"toll_free_number" | "virtual_service_number" | "byoc_number">;
  region_ids?: ReadonlyArray<string>;
  region_names?: ReadonlyArray<string>;
  team_ids?: ReadonlyArray<string>;
  team_names?: ReadonlyArray<string>;
  sub_types?: ReadonlyArray<"external_warm_conference_call" | "external_direct_conference_call" | "external_warm_transfer_call" | "external_direct_transfer_call" | "internal_warm_conference_call" | "internal_direct_conference_call" | "internal_warm_transfer_call" | "internal_direct_transfer_call" | "flow_initiated_outgoing_call">;
  view_type?: "summary" | "detail";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/work_item/messages": {
  engagement_id: string;
  direction?: "forward" | "backward";
  order?: string;
  page_size?: number;
  next_page_token?: string;
};
  "POST /contact_center/messages": {};
  "GET /contact_center/engagements/notes": {
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/engagements/{engagementId}/notes": {
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/engagements/{engagementId}/notes/{noteId}": {};
  "PATCH /contact_center/engagements/{engagementId}/notes/{noteId}": {};
  "GET /contact_center/business_hours": {
  account_default?: boolean;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/business_hours": {};
  "GET /contact_center/business_hours/{businessHourId}": {
  business_hour_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/business_hours/{businessHourId}": {};
  "PATCH /contact_center/business_hours/{businessHourId}": {};
  "GET /contact_center/business_hours/{businessHourId}/flows": {
  business_hour_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/business_hours/{businessHourId}/queues": {
  business_hour_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/closures": {
  account_default?: boolean;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/closures": {};
  "GET /contact_center/closures/{closureSetId}": {
  closure_set_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/closures/{closureSetId}": {};
  "PATCH /contact_center/closures/{closureSetId}": {};
  "GET /contact_center/closures/{closureSetId}/flows": {
  closure_set_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/closures/{closureSetId}/queues": {
  closure_set_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/queue_templates": {
  channel?: "voice" | "messaging" | "email" | "video" | "work_item";
  next_page_token?: string;
  page_size?: string;
};
  "POST /contact_center/queue_templates": {};
  "DELETE /contact_center/queue_templates": {};
  "GET /contact_center/queue_templates/{queueTemplateId}": {
  queue_template_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/queue_templates/{queueTemplateId}": {
  queue_template_identifier_type?: "id" | "name";
};
  "PATCH /contact_center/queue_templates/{queueTemplateId}": {
  queue_template_identifier_type?: "id" | "name";
};
  "GET /contact_center/queues": {
  channel_type?: "voice" | "chat" | "sms" | "video" | "in_app_chat" | "messaging";
  channel?: "voice" | "video" | "messaging" | "email";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/queues": {};
  "POST /contact_center/queues/batch": {};
  "DELETE /contact_center/queues/batch": {};
  "GET /contact_center/queues/{queueId}": {
  queue_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/queues/{queueId}": {
  queue_identifier_type?: "id" | "name";
};
  "PATCH /contact_center/queues/{queueId}": {
  queue_identifier_type?: "id" | "name";
};
  "GET /contact_center/queues/{queueId}/agents": {
  queue_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/queues/{queueId}/agents": {};
  "DELETE /contact_center/queues/{queueId}/agents/{userId}": {};
  "PATCH /contact_center/queues/{queueId}/agents/{userId}": {};
  "GET /contact_center/queues/{queueId}/dispositions": {
  queue_identifier_type?: "id" | "name";
  assign_type?: "inbound" | "outbound";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/queues/{queueId}/dispositions": {
  queue_identifier_type?: "id" | "name";
};
  "GET /contact_center/queues/{queueId}/dispositions/sets": {
  queue_identifier_type?: "id" | "name";
  assign_type?: "inbound" | "outbound";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/queues/{queueId}/dispositions/sets": {};
  "DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}": {
  assign_type?: "inbound" | "outbound";
};
  "DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}": {
  queue_identifier_type?: "id" | "name";
  disposition_identifier_type?: "id" | "name";
  assign_type?: "inbound" | "outbound";
};
  "GET /contact_center/queues/{queueId}/interrupt": {
  is_enable_api_control?: boolean;
  bucket_id?: string;
};
  "PATCH /contact_center/queues/{queueId}/interrupt": {
  bucket_id?: string;
};
  "POST /contact_center/queues/{queueId}/interrupt_menu": {
  bucket_id?: string;
};
  "DELETE /contact_center/queues/{queueId}/interrupt_menu": {
  bucket_id?: string;
};
  "GET /contact_center/queues/{queueId}/operating_hours": {};
  "PATCH /contact_center/queues/{queueId}/operating_hours": {};
  "GET /contact_center/queues/{queueId}/recordings": {
  channel_type?: "voice" | "video";
  channel?: "voice" | "video";
  from?: string;
  to?: string;
  exemption?: "true" | "false";
  queue_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "DELETE /contact_center/queues/{queueId}/recordings": {
  delete_all_recordings?: true;
};
  "DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}": {};
  "POST /contact_center/queues/{queueId}/scheduled_callbacks/events": {};
  "GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots": {
  from?: string;
  to?: string;
  timezone?: string;
};
  "GET /contact_center/queues/{queueId}/supervisors": {
  queue_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/queues/{queueId}/supervisors": {};
  "DELETE /contact_center/queues/{queueId}/supervisors/{userId}": {};
  "POST /contact_center/queues/{queueId}/teams": {};
  "DELETE /contact_center/queues/{queueId}/teams": {};
  "DELETE /contact_center/queues/{queueId}/teams/{teamId}": {};
  "PUT /contact_center/{engagementId}/rtms_app/status": {};
  "GET /contact_center/engagements/{engagementId}/recordings": {
  channel_type?: "voice" | "video";
  channel?: "voice" | "video";
  from?: string;
  to?: string;
  exemption?: "true" | "false";
  next_page_token?: string;
  page_size?: number;
};
  "DELETE /contact_center/engagements/{engagementId}/recordings": {
  delete_all_recordings?: true;
};
  "GET /contact_center/recordings": {
  query_date_type?: string;
  from?: string;
  to?: string;
  recording_type?: "on_demand" | "automatic";
  owner_type?: "user" | "queue";
  channel_type?: "voice" | "video";
  channel?: "voice" | "video";
  exemption?: "true" | "false";
  next_page_token?: string;
  page_size?: number;
};
  "DELETE /contact_center/recordings/{recordingId}": {};
  "GET /contact_center/regions": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/regions": {};
  "GET /contact_center/regions/{regionId}": {
  region_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/regions/{regionId}": {
  region_identifier_type?: "id" | "name";
  move_to_region_id: string;
};
  "PATCH /contact_center/regions/{regionId}": {
  region_identifier_type?: "id" | "name";
};
  "GET /contact_center/regions/{regionId}/users": {
  region_identifier_type?: "id" | "name";
  role_id?: string;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/regions/{regionId}/users": {
  region_identifier_type?: "id" | "name";
};
  "GET /contact_center/analytics/agents/leg_metrics": {
  from?: string;
  to?: string;
  timezone?: string;
  engagement_id?: string;
  user_id?: string;
  display_name?: string;
  user_email?: string;
  cc_queue_id?: string;
  channel: "voice" | "video" | "messaging" | "email";
  channel_source?: "in_app_chat" | "web_chat" | "sms" | "facebook_messenger" | "whatsapp" | "instagram";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/analytics/agents/status_history": {
  timezone?: string;
  from?: string;
  to?: string;
  queue_id?: string;
  cc_queue_id?: string;
  user_id?: string;
  status_id?: string;
  sub_status_id?: string;
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/analytics/agents/time_sheets": {
  next_page_token?: string;
  page_size?: number;
  timezone?: string;
  from?: string;
  to?: string;
  queue_id?: string;
  user_id?: string;
  interval?: "15_minutes" | "30_minutes" | "1_hour" | "1_day" | "1_week" | "1_month";
};
  "GET /contact_center/analytics/historical/details/metrics": {
  timezone?: string;
  from?: string;
  to?: string;
  queue_ids?: ReadonlyArray<string>;
  cc_queue_ids?: ReadonlyArray<string>;
  user_id?: string;
  consumer_number?: string;
  consumer_id?: string;
  direction?: "inbound" | "outbound";
  results?: ReadonlyArray<string>;
  channel_types?: ReadonlyArray<"voice" | "video" | "chat" | "sms">;
  channel: "voice" | "video" | "messaging" | "email";
  channel_sources?: ReadonlyArray<"web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address">;
  queue_wait_type?: "live_waiting" | "callback";
  required_skill_ids?: ReadonlyArray<string>;
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/analytics/historical/queues/agents/metrics": {
  timezone?: string;
  from?: string;
  to?: string;
  cc_queue_id: string;
  channel?: "voice";
  interval?: "15_minutes" | "30_minutes" | "1_hour" | "1_day" | "1_week" | "1_month";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/analytics/historical/queues/metrics": {
  timezone?: string;
  from?: string;
  to?: string;
  queue_ids?: ReadonlyArray<string>;
  cc_queue_ids?: ReadonlyArray<string>;
  channel_types?: ReadonlyArray<"voice" | "video" | "chat" | "sms">;
  channel: "voice" | "video" | "messaging" | "email";
  channel_sources?: ReadonlyArray<"web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address">;
  interval?: "15_minutes" | "30_minutes" | "1_hour" | "1_day" | "1_week" | "1_month";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics": {
  timezone?: string;
  from?: string;
  to?: string;
  channel_types?: ReadonlyArray<"voice" | "video" | "chat" | "sms">;
  channel: "voice" | "video" | "messaging" | "email";
  channel_sources?: ReadonlyArray<"web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address">;
  interval?: "15_minutes" | "30_minutes" | "1_hour" | "1_day" | "1_week" | "1_month";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/analytics/dataset/historical/agent_performance": {
  from?: string;
  to?: string;
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  sort_order?: "asc" | "desc";
  timezone?: string;
  engagement_id?: ReadonlyArray<string>;
  agent_leg_id?: ReadonlyArray<string>;
  direction?: "inbound" | "outbound";
  queue_id?: ReadonlyArray<string>;
  user_id?: ReadonlyArray<string>;
  team_id?: ReadonlyArray<string>;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
  origin_method?: "outbound" | "callback" | "scheduled_callback" | "callback_retry" | "conference" | "transfer_to_agent" | "transfer_to_queue" | "warm_transfer_to_agent" | "warm_transfer_to_queue" | "direct_transfer_to_agent" | "direct_transfer_to_queue" | "route_to_queue" | "route_to_agents" | "switch_to_voice" | "switch_to_video" | "invite_agent" | "takeover" | "outbound_progressive_dial" | "outbound_preview_dial" | "outbound_third_party_dial";
  switch_method?: "switch_messaging_to_voice" | "switch_messaging_to_video" | "switch_voice_to_video" | "switch_work_item_to_voice" | "switch_work_item_to_video";
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/dataset/historical/agent_timecard": {
  from?: string;
  to?: string;
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  timezone?: string;
  sort_order?: "asc" | "desc";
  user_id?: ReadonlyArray<string>;
  team_id?: ReadonlyArray<string>;
  agent_countries?: ReadonlyArray<string>;
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}": {
  timezone?: string;
  from?: string;
  to?: string;
  page?: number;
  page_size?: number;
};
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema": {};
  "GET /contact_center/analytics/dataset/historical/disposition": {
  engagement_ids?: ReadonlyArray<string>;
  user_ids?: ReadonlyArray<string>;
  queue_ids?: ReadonlyArray<string>;
  team_ids?: ReadonlyArray<string>;
  channels?: ReadonlyArray<"voice" | "video" | "messaging" | "email">;
  direction?: "inbound" | "outbound";
  disposition_types?: ReadonlyArray<"single" | "multi-level">;
  disposition_sources?: ReadonlyArray<"default" | "agent">;
  from?: string;
  to?: string;
  timezone?: string;
  sort_order?: "asc" | "desc";
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/dataset/historical/engagement": {
  from?: string;
  to?: string;
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  timezone?: string;
  sort_order?: "asc" | "desc";
  engagement_id?: ReadonlyArray<string>;
  direction?: "inbound" | "outbound";
  enter_channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  enter_channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
  caller_id?: string;
  dnis?: string;
  ani?: string;
  queue_id?: ReadonlyArray<string>;
  user_id?: ReadonlyArray<string>;
  team_id?: ReadonlyArray<string>;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/dataset/historical/engagement_timelines": {
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  sort_order?: "asc" | "desc";
  timezone?: string;
  channels?: ReadonlyArray<"voice" | "video" | "messaging" | "email" | "work_item">;
  channel_sources?: ReadonlyArray<"voice" | "web_video" | "in_app_video" | "kiosk_video" | "web_chat" | "in_app_chat" | "team_chat" | "sms" | "facebook_messenger" | "instagram" | "whatsapp" | "email_address" | "api">;
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/dataset/historical/expert_assist": {
  from?: string;
  to?: string;
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  timezone?: string;
  sort_order?: "asc" | "desc";
  engagement_id?: ReadonlyArray<string>;
  direction?: "inbound" | "outbound";
  queue_id?: ReadonlyArray<string>;
  user_id?: ReadonlyArray<string>;
  team_id?: ReadonlyArray<string>;
  channel?: "voice" | "video" | "messaging" | "email";
  channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain";
  expert_assist_instance_id?: ReadonlyArray<string>;
  expert_assist_status?: "Unknown" | "initiated" | "available" | "no_available";
  expert_assist_feature?: "Unknown" | "ea_info_retrieval" | "ea_knowledge_base" | "ea_next_best_action";
  info_retrieval_group_id?: ReadonlyArray<string>;
  knowledge_base_id?: ReadonlyArray<string>;
  next_best_action_id?: ReadonlyArray<string>;
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/dataset/historical/flow_performance": {
  from?: string;
  to?: string;
  enter_time_from?: string;
  enter_time_to?: string;
  exit_time_from?: string;
  exit_time_to?: string;
  timezone?: string;
  sort_order?: "asc" | "desc";
  engagement_id?: ReadonlyArray<string>;
  flow_execution_id?: ReadonlyArray<string>;
  flow_id?: ReadonlyArray<string>;
  enter_channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  enter_channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
  entry_point?: string;
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/dataset/historical/outbound_dialer_performance": {
  from?: string;
  to?: string;
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  timezone?: string;
  sort_order?: "asc" | "desc";
  engagement_id?: ReadonlyArray<string>;
  campaign_id?: ReadonlyArray<string>;
  contact_list_id?: ReadonlyArray<string>;
  dialer_method?: "progressive" | "preview";
  caller_id_number?: string;
  consumer_number?: string;
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/dataset/historical/queue_performance": {
  from?: string;
  to?: string;
  enter_time_from?: string;
  enter_time_to?: string;
  exit_time_from?: string;
  exit_time_to?: string;
  timezone?: string;
  sort_order?: "asc" | "desc";
  engagement_id?: ReadonlyArray<string>;
  direction?: "inbound" | "outbound";
  queue_id?: ReadonlyArray<string>;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
  origin_method?: "take_over" | "hand_over" | "callback" | "scheduled_callback" | "callback_retry" | "outbound" | "conference" | "release" | "warm_transfer_to_agent" | "warm_transfer_to_queue" | "direct_transfer_to_agent" | "direct_transfer_to_queue" | "transfer_to_agent" | "transfer_to_queue" | "route_to_queue" | "route_to_agent" | "outbound_progressive_dial" | "outbound_preview_dial" | "outbound_third_party_dial" | "park";
  enter_queue_id?: ReadonlyArray<string>;
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/log/historical/engagement": {
  timezone?: string;
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  sort_order?: "asc" | "desc";
  engagement_id?: string;
  direction?: "inbound" | "outbound";
  channels?: ReadonlyArray<"voice" | "video" | "messaging" | "email" | "work_item">;
  channel_sources?: ReadonlyArray<"voice" | "web_video" | "in_app_video" | "kiosk_video" | "web_chat" | "in_app_chat" | "team_chat" | "sms" | "facebook_messenger" | "instagram" | "whatsapp" | "email_address" | "api">;
  consumer_name?: string;
  queue_ids?: ReadonlyArray<string>;
  user_ids?: ReadonlyArray<string>;
  team_ids?: ReadonlyArray<string>;
  flow_ids?: ReadonlyArray<string>;
  blocked?: boolean;
  event_names?: ReadonlyArray<string>;
  caller_id?: string;
  ani_from?: string;
  dnis_to?: string;
  aiea_used?: "used" | "not_used";
  page_size?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/log/historical/journey": {
  timezone?: string;
  from?: string;
  to?: string;
  global_engagement_id?: string;
  direction?: "outbound" | "inbound" | "internal";
  channels?: ReadonlyArray<"voice" | "video" | "messaging" | "email">;
  channel_sources?: ReadonlyArray<"voice" | "web_video" | "in_app_video" | "kiosk_video" | "web_chat" | "in_app_chat" | "team_chat" | "sms" | "facebook_messenger" | "instagram" | "whatsapp" | "email_address">;
  queue_ids?: ReadonlyArray<string>;
  user_ids?: ReadonlyArray<string>;
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/reports/operation_logs": {
  from?: string;
  to?: string;
  category?: string;
  action?: "Add" | "Delete" | "Update" | "Operate" | "Move" | "Download" | "Recover" | "Import" | "Export" | "Unmask" | "Subscribe" | "Agree" | "Generate" | "Enable" | "Disable" | "Publish" | "Unpublish" | "Opt-Out" | "SyncData" | "Initizate" | "Submit" | "Restore" | "Listen" | "Edit" | "REST API - Add" | "REST API - Delete" | "REST API - Update" | "Manually Redact" | "Migrate";
  keyword?: string;
  agent_region_id?: string;
  agent_region_name?: string;
  team_id?: string;
  team_name?: string;
  sort_order?: "asc" | "desc";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/roles": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/roles": {};
  "POST /contact_center/roles/duplicate": {};
  "GET /contact_center/roles/{roleId}": {
  role_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/roles/{roleId}": {
  role_identifier_type?: "id" | "name";
  transfer_role_id: string;
};
  "PATCH /contact_center/roles/{roleId}": {
  role_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/roles/{roleId}/privileges": {};
  "GET /contact_center/roles/{roleId}/users": {
  role_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/roles/{roleId}/users": {};
  "DELETE /contact_center/roles/{roleId}/users/{userId}": {};
  "GET /contact_center/agent_routing_profiles": {
  agent_routing_profile_name?: string;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/agent_routing_profiles": {};
  "GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}": {
  agent_routing_profile_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}": {
  agent_routing_profile_identifier_type?: "id" | "name";
};
  "PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}": {
  agent_routing_profile_identifier_type?: "id" | "name";
};
  "GET /contact_center/consumer_routing_profiles": {
  consumer_routing_profile_name?: string;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/consumer_routing_profiles": {};
  "GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": {
  consumer_routing_profile_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": {
  consumer_routing_profile_identifier_type?: "id" | "name";
};
  "PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": {
  consumer_routing_profile_identifier_type?: "id" | "name";
};
  "GET /contact_center/skills": {
  skill_category_id?: string;
  skill_id?: string;
  skill_type?: "text" | "proficiency";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/skills": {};
  "GET /contact_center/skills/categories": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/skills/categories": {};
  "GET /contact_center/skills/categories/{skillCategoryId}": {
  skill_category_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/skills/categories/{skillCategoryId}": {};
  "PATCH /contact_center/skills/categories/{skillCategoryId}": {};
  "GET /contact_center/skills/{skillId}": {
  skill_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/skills/{skillId}": {
  skill_identifier_type?: "id" | "name";
};
  "PATCH /contact_center/skills/{skillId}": {
  skill_identifier_type?: "id" | "name";
};
  "GET /contact_center/skills/{skillId}/users": {
  skill_identifier_type?: "id" | "name";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/teams": {
  parent_team_id?: string;
  team_name?: string;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/teams": {};
  "GET /contact_center/teams/{teamId}": {};
  "DELETE /contact_center/teams/{teamId}": {};
  "PATCH /contact_center/teams/{teamId}": {};
  "GET /contact_center/teams/{teamId}/agents": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/teams/{teamId}/agents": {};
  "DELETE /contact_center/teams/{teamId}/agents": {
  user_ids: string;
};
  "GET /contact_center/teams/{teamId}/children": {
  max_level?: number;
  next_page_token?: string;
  page_size?: number;
};
  "PATCH /contact_center/teams/{teamId}/move": {};
  "GET /contact_center/teams/{teamId}/parents": {};
  "GET /contact_center/teams/{teamId}/supervisors": {
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/teams/{teamId}/supervisors": {};
  "DELETE /contact_center/teams/{teamId}/supervisors": {
  user_ids: string;
};
  "GET /contact_center/users": {
  search_key?: string;
  user_access?: "active" | "inactive";
  region_id?: string;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/users": {};
  "DELETE /contact_center/users": {
  user_ids?: ReadonlyArray<string>;
  user_emails?: ReadonlyArray<string>;
};
  "PATCH /contact_center/users": {};
  "POST /contact_center/users/batch": {};
  "PATCH /contact_center/users/status": {};
  "GET /contact_center/users/templates": {
  template_type?: "add" | "update";
  template_status?: "active" | "inactive" | "needs_attention";
  template_name?: string;
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/users/templates": {};
  "GET /contact_center/users/templates/{templateId}": {};
  "DELETE /contact_center/users/templates/{templateId}": {
  user_template_identifier_type?: "id" | "name";
};
  "PATCH /contact_center/users/templates/{templateId}": {
  user_template_identifier_type?: "id" | "name";
};
  "GET /contact_center/users/{userId}": {};
  "DELETE /contact_center/users/{userId}": {
  user_identifier_type?: "id" | "email";
};
  "PATCH /contact_center/users/{userId}": {
  user_identifier_type?: "id" | "email";
};
  "PATCH /contact_center/users/{userId}/opt_in_out_queues": {};
  "GET /contact_center/users/{userId}/queues": {
  channel?: "voice" | "video" | "messaging" | "email";
  user_assignment_type?: "agent" | "supervisor" | "any" | "both";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/users/{userId}/recordings": {
  channel_type?: "voice" | "video";
  channel?: "voice" | "video";
  from?: string;
  to?: string;
  exemption?: "true" | "false";
  next_page_token?: string;
  page_size?: number;
};
  "DELETE /contact_center/users/{userId}/recordings": {
  delete_all_recordings?: boolean;
};
  "GET /contact_center/users/{userId}/skills": {
  skill_category_id?: string;
  skill_type?: "text" | "proficiency";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/users/{userId}/skills": {};
  "DELETE /contact_center/users/{userId}/skills/{skillId}": {
  user_identifier_type?: "id" | "email";
  skill_identifier_type?: "id" | "name";
};
  "PATCH /contact_center/users/{userId}/status": {
  user_identifier_type?: "id" | "email";
};
  "GET /contact_center/variable_logs": {
  from?: string;
  to?: string;
  timezone?: string;
  group_type?: "system" | "custom";
  data_type?: "boolean" | "currency" | "date" | "email" | "number" | "percent" | "phone" | "string" | "time" | "url" | "json" | "array";
  engagement_id?: string;
  flow_id?: string;
  widget_name?: string;
  variable_name?: string;
  variable_value?: string;
  sort_order?: "desc" | "asc";
  next_page_token?: string;
  page_size?: number;
};
  "GET /contact_center/variable_logs/{variableLogId}": {};
  "DELETE /contact_center/variable_logs/{variableLogId}": {};
  "GET /contact_center/variables": {
  variable_group_id: string;
  data_type?: "string" | "number" | "boolean" | "date_time" | "currency" | "percentage" | "email" | "url" | "phone" | "json" | "array";
  variable_type?: "global_variable" | "address_book_variable";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/variables": {};
  "GET /contact_center/variables/groups": {
  variable_group_type?: "system" | "custom";
  next_page_token?: string;
  page_size?: number;
};
  "POST /contact_center/variables/groups": {};
  "GET /contact_center/variables/groups/{variableGroupId}": {
  variable_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/variables/groups/{variableGroupId}": {};
  "PATCH /contact_center/variables/groups/{variableGroupId}": {};
  "GET /contact_center/variables/{variableId}": {
  variable_identifier_type?: "id" | "name";
};
  "DELETE /contact_center/variables/{variableId}": {};
  "PATCH /contact_center/variables/{variableId}": {};
}

export interface ZoomContactCenterFullApiOperationQueryRequiredMap {
  "GET /contact_center/address_books": true;
  "POST /contact_center/address_books": false;
  "GET /contact_center/address_books/contacts/{contactId}/custom_fields": false;
  "GET /contact_center/address_books/custom_fields": false;
  "POST /contact_center/address_books/custom_fields": false;
  "GET /contact_center/address_books/custom_fields/{customFieldId}": false;
  "DELETE /contact_center/address_books/custom_fields/{customFieldId}": false;
  "PATCH /contact_center/address_books/custom_fields/{customFieldId}": false;
  "GET /contact_center/address_books/units": false;
  "POST /contact_center/address_books/units": false;
  "GET /contact_center/address_books/units/{unitId}": false;
  "DELETE /contact_center/address_books/units/{unitId}": false;
  "PATCH /contact_center/address_books/units/{unitId}": false;
  "GET /contact_center/address_books/{addressBookId}": false;
  "DELETE /contact_center/address_books/{addressBookId}": false;
  "PATCH /contact_center/address_books/{addressBookId}": false;
  "GET /contact_center/address_books/{addressBookId}/contacts": false;
  "POST /contact_center/address_books/{addressBookId}/contacts": false;
  "POST /contact_center/address_books/{addressBookId}/contacts/batch": false;
  "DELETE /contact_center/address_books/{addressBookId}/contacts/batch": false;
  "PATCH /contact_center/address_books/{addressBookId}/contacts/batch": false;
  "GET /contact_center/address_books/{addressBookId}/contacts/{contactId}": false;
  "DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}": false;
  "PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}": false;
  "GET /contact_center/system_statuses": false;
  "POST /contact_center/system_statuses": false;
  "GET /contact_center/system_statuses/{statusId}": false;
  "DELETE /contact_center/system_statuses/{statusId}": false;
  "PATCH /contact_center/system_statuses/{statusId}": false;
  "GET /contact_center/asset_library/assets": false;
  "POST /contact_center/asset_library/assets": false;
  "PATCH /contact_center/asset_library/assets/items": false;
  "GET /contact_center/asset_library/assets/{assetId}": false;
  "DELETE /contact_center/asset_library/assets/{assetId}": false;
  "PATCH /contact_center/asset_library/assets/{assetId}": false;
  "POST /contact_center/asset_library/assets/{assetId}/duplicate": false;
  "DELETE /contact_center/asset_library/assets/{assetId}/items": false;
  "GET /contact_center/asset_library/categories": false;
  "POST /contact_center/asset_library/categories": false;
  "GET /contact_center/asset_library/categories/{categoryId}": false;
  "DELETE /contact_center/asset_library/categories/{categoryId}": false;
  "PATCH /contact_center/asset_library/categories/{categoryId}": false;
  "GET /contact_center/block_list_rules/ip_addresses": false;
  "POST /contact_center/block_list_rules/ip_addresses": false;
  "DELETE /contact_center/block_list_rules/ip_addresses": false;
  "GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}": false;
  "GET /contact_center/block_list_rules/phone_numbers": false;
  "POST /contact_center/block_list_rules/phone_numbers": false;
  "DELETE /contact_center/block_list_rules/phone_numbers": false;
  "GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}": false;
  "PUT /contact_center/engagements/{engagementId}/recording/{command}": false;
  "POST /contact_center/users/{userId}/commands": false;
  "GET /contact_center/users/{userId}/devices": false;
  "GET /contact_center/outbound_campaign/campaigns": false;
  "POST /contact_center/outbound_campaign/campaigns": false;
  "GET /contact_center/outbound_campaign/campaigns/{campaignId}": false;
  "DELETE /contact_center/outbound_campaign/campaigns/{campaignId}": false;
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}": false;
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status": false;
  "GET /contact_center/outbound_campaign/contact_list_custom_fields": false;
  "POST /contact_center/outbound_campaign/contact_list_custom_fields": false;
  "GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": false;
  "DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": false;
  "PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": false;
  "GET /contact_center/outbound_campaign/contact_lists": false;
  "POST /contact_center/outbound_campaign/contact_lists": false;
  "PATCH /contact_center/outbound_campaign/contact_lists": false;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}": false;
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}": false;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}": false;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": false;
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": false;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": false;
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch": false;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": false;
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": false;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": false;
  "GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields": false;
  "GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": false;
  "POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": false;
  "DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": false;
  "GET /contact_center/dispositions": false;
  "POST /contact_center/dispositions": false;
  "GET /contact_center/dispositions/sets": false;
  "POST /contact_center/dispositions/sets": false;
  "GET /contact_center/dispositions/sets/{dispositionSetId}": false;
  "DELETE /contact_center/dispositions/sets/{dispositionSetId}": false;
  "PATCH /contact_center/dispositions/sets/{dispositionSetId}": false;
  "GET /contact_center/dispositions/{dispositionId}": false;
  "DELETE /contact_center/dispositions/{dispositionId}": false;
  "PATCH /contact_center/dispositions/{dispositionId}": false;
  "POST /contact_center/engagement": false;
  "GET /contact_center/engagements": false;
  "GET /contact_center/engagements/{engagementId}": false;
  "PATCH /contact_center/engagements/{engagementId}": false;
  "GET /contact_center/engagements/{engagementId}/attachments": false;
  "GET /contact_center/engagements/{engagementId}/events": false;
  "GET /contact_center/engagements/{engagementId}/recordings/status": false;
  "GET /contact_center/engagements/{engagementId}/survey": false;
  "GET /contact_center/engagements/{engagementId}/transfer/flows": false;
  "GET /contact_center/engagements/{engagementId}/transfer/queues": false;
  "GET /contact_center/engagements/{engagementId}/transfer/users": false;
  "GET /contact_center/flows": false;
  "POST /contact_center/flows": false;
  "GET /contact_center/flows/{flowId}": false;
  "DELETE /contact_center/flows/{flowId}": false;
  "PATCH /contact_center/flows/{flowId}": false;
  "GET /contact_center/flows/{flowId}/entry_points": false;
  "POST /contact_center/flows/{flowId}/entry_points": false;
  "DELETE /contact_center/flows/{flowId}/entry_points": false;
  "GET /contact_center/flows/{flowId}/export": true;
  "PUT /contact_center/flows/{flowId}/publish": false;
  "GET /contact_center/flows_entry_points": true;
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks": false;
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": false;
  "PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": false;
  "GET /contact_center/inboxes": false;
  "POST /contact_center/inboxes": false;
  "DELETE /contact_center/inboxes": false;
  "GET /contact_center/inboxes/messages": false;
  "DELETE /contact_center/inboxes/messages": false;
  "GET /contact_center/inboxes/{inboxId}": false;
  "PATCH /contact_center/inboxes/{inboxId}": false;
  "PATCH /contact_center/inboxes/{inboxId}/email_notification": false;
  "GET /contact_center/inboxes/{inboxId}/email_notifications": false;
  "GET /contact_center/inboxes/{inboxId}/messages": false;
  "DELETE /contact_center/inboxes/{inboxId}/messages": false;
  "DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}": false;
  "GET /contact_center/inboxes/{inboxId}/queues": false;
  "POST /contact_center/inboxes/{inboxId}/queues": false;
  "DELETE /contact_center/inboxes/{inboxId}/queues": false;
  "GET /contact_center/inboxes/{inboxId}/users": false;
  "POST /contact_center/inboxes/{inboxId}/users": false;
  "DELETE /contact_center/inboxes/{inboxId}/users": true;
  "GET /contact_center/email/messages": true;
  "GET /contact_center/messaging/messages": true;
  "GET /contact_center/sms": false;
  "POST /contact_center/sms": false;
  "GET /contact_center/voice_calls": false;
  "GET /contact_center/work_item/messages": true;
  "POST /contact_center/messages": false;
  "GET /contact_center/engagements/notes": false;
  "GET /contact_center/engagements/{engagementId}/notes": false;
  "GET /contact_center/engagements/{engagementId}/notes/{noteId}": false;
  "PATCH /contact_center/engagements/{engagementId}/notes/{noteId}": false;
  "GET /contact_center/business_hours": false;
  "POST /contact_center/business_hours": false;
  "GET /contact_center/business_hours/{businessHourId}": false;
  "DELETE /contact_center/business_hours/{businessHourId}": false;
  "PATCH /contact_center/business_hours/{businessHourId}": false;
  "GET /contact_center/business_hours/{businessHourId}/flows": false;
  "GET /contact_center/business_hours/{businessHourId}/queues": false;
  "GET /contact_center/closures": false;
  "POST /contact_center/closures": false;
  "GET /contact_center/closures/{closureSetId}": false;
  "DELETE /contact_center/closures/{closureSetId}": false;
  "PATCH /contact_center/closures/{closureSetId}": false;
  "GET /contact_center/closures/{closureSetId}/flows": false;
  "GET /contact_center/closures/{closureSetId}/queues": false;
  "GET /contact_center/queue_templates": false;
  "POST /contact_center/queue_templates": false;
  "DELETE /contact_center/queue_templates": false;
  "GET /contact_center/queue_templates/{queueTemplateId}": false;
  "DELETE /contact_center/queue_templates/{queueTemplateId}": false;
  "PATCH /contact_center/queue_templates/{queueTemplateId}": false;
  "GET /contact_center/queues": false;
  "POST /contact_center/queues": false;
  "POST /contact_center/queues/batch": false;
  "DELETE /contact_center/queues/batch": false;
  "GET /contact_center/queues/{queueId}": false;
  "DELETE /contact_center/queues/{queueId}": false;
  "PATCH /contact_center/queues/{queueId}": false;
  "GET /contact_center/queues/{queueId}/agents": false;
  "POST /contact_center/queues/{queueId}/agents": false;
  "DELETE /contact_center/queues/{queueId}/agents/{userId}": false;
  "PATCH /contact_center/queues/{queueId}/agents/{userId}": false;
  "GET /contact_center/queues/{queueId}/dispositions": false;
  "POST /contact_center/queues/{queueId}/dispositions": false;
  "GET /contact_center/queues/{queueId}/dispositions/sets": false;
  "POST /contact_center/queues/{queueId}/dispositions/sets": false;
  "DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}": false;
  "DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}": false;
  "GET /contact_center/queues/{queueId}/interrupt": false;
  "PATCH /contact_center/queues/{queueId}/interrupt": false;
  "POST /contact_center/queues/{queueId}/interrupt_menu": false;
  "DELETE /contact_center/queues/{queueId}/interrupt_menu": false;
  "GET /contact_center/queues/{queueId}/operating_hours": false;
  "PATCH /contact_center/queues/{queueId}/operating_hours": false;
  "GET /contact_center/queues/{queueId}/recordings": false;
  "DELETE /contact_center/queues/{queueId}/recordings": false;
  "DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}": false;
  "POST /contact_center/queues/{queueId}/scheduled_callbacks/events": false;
  "GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots": false;
  "GET /contact_center/queues/{queueId}/supervisors": false;
  "POST /contact_center/queues/{queueId}/supervisors": false;
  "DELETE /contact_center/queues/{queueId}/supervisors/{userId}": false;
  "POST /contact_center/queues/{queueId}/teams": false;
  "DELETE /contact_center/queues/{queueId}/teams": false;
  "DELETE /contact_center/queues/{queueId}/teams/{teamId}": false;
  "PUT /contact_center/{engagementId}/rtms_app/status": false;
  "GET /contact_center/engagements/{engagementId}/recordings": false;
  "DELETE /contact_center/engagements/{engagementId}/recordings": false;
  "GET /contact_center/recordings": false;
  "DELETE /contact_center/recordings/{recordingId}": false;
  "GET /contact_center/regions": false;
  "POST /contact_center/regions": false;
  "GET /contact_center/regions/{regionId}": false;
  "DELETE /contact_center/regions/{regionId}": true;
  "PATCH /contact_center/regions/{regionId}": false;
  "GET /contact_center/regions/{regionId}/users": false;
  "POST /contact_center/regions/{regionId}/users": false;
  "GET /contact_center/analytics/agents/leg_metrics": true;
  "GET /contact_center/analytics/agents/status_history": false;
  "GET /contact_center/analytics/agents/time_sheets": false;
  "GET /contact_center/analytics/historical/details/metrics": true;
  "GET /contact_center/analytics/historical/queues/agents/metrics": true;
  "GET /contact_center/analytics/historical/queues/metrics": true;
  "GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics": true;
  "GET /contact_center/analytics/dataset/historical/agent_performance": false;
  "GET /contact_center/analytics/dataset/historical/agent_timecard": false;
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}": false;
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema": false;
  "GET /contact_center/analytics/dataset/historical/disposition": false;
  "GET /contact_center/analytics/dataset/historical/engagement": false;
  "GET /contact_center/analytics/dataset/historical/engagement_timelines": false;
  "GET /contact_center/analytics/dataset/historical/expert_assist": false;
  "GET /contact_center/analytics/dataset/historical/flow_performance": false;
  "GET /contact_center/analytics/dataset/historical/outbound_dialer_performance": false;
  "GET /contact_center/analytics/dataset/historical/queue_performance": false;
  "GET /contact_center/analytics/log/historical/engagement": false;
  "GET /contact_center/analytics/log/historical/journey": false;
  "GET /contact_center/reports/operation_logs": false;
  "GET /contact_center/roles": false;
  "POST /contact_center/roles": false;
  "POST /contact_center/roles/duplicate": false;
  "GET /contact_center/roles/{roleId}": false;
  "DELETE /contact_center/roles/{roleId}": true;
  "PATCH /contact_center/roles/{roleId}": false;
  "DELETE /contact_center/roles/{roleId}/privileges": false;
  "GET /contact_center/roles/{roleId}/users": false;
  "POST /contact_center/roles/{roleId}/users": false;
  "DELETE /contact_center/roles/{roleId}/users/{userId}": false;
  "GET /contact_center/agent_routing_profiles": false;
  "POST /contact_center/agent_routing_profiles": false;
  "GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}": false;
  "DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}": false;
  "PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}": false;
  "GET /contact_center/consumer_routing_profiles": false;
  "POST /contact_center/consumer_routing_profiles": false;
  "GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": false;
  "DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": false;
  "PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": false;
  "GET /contact_center/skills": false;
  "POST /contact_center/skills": false;
  "GET /contact_center/skills/categories": false;
  "POST /contact_center/skills/categories": false;
  "GET /contact_center/skills/categories/{skillCategoryId}": false;
  "DELETE /contact_center/skills/categories/{skillCategoryId}": false;
  "PATCH /contact_center/skills/categories/{skillCategoryId}": false;
  "GET /contact_center/skills/{skillId}": false;
  "DELETE /contact_center/skills/{skillId}": false;
  "PATCH /contact_center/skills/{skillId}": false;
  "GET /contact_center/skills/{skillId}/users": false;
  "GET /contact_center/teams": false;
  "POST /contact_center/teams": false;
  "GET /contact_center/teams/{teamId}": false;
  "DELETE /contact_center/teams/{teamId}": false;
  "PATCH /contact_center/teams/{teamId}": false;
  "GET /contact_center/teams/{teamId}/agents": false;
  "POST /contact_center/teams/{teamId}/agents": false;
  "DELETE /contact_center/teams/{teamId}/agents": true;
  "GET /contact_center/teams/{teamId}/children": false;
  "PATCH /contact_center/teams/{teamId}/move": false;
  "GET /contact_center/teams/{teamId}/parents": false;
  "GET /contact_center/teams/{teamId}/supervisors": false;
  "POST /contact_center/teams/{teamId}/supervisors": false;
  "DELETE /contact_center/teams/{teamId}/supervisors": true;
  "GET /contact_center/users": false;
  "POST /contact_center/users": false;
  "DELETE /contact_center/users": false;
  "PATCH /contact_center/users": false;
  "POST /contact_center/users/batch": false;
  "PATCH /contact_center/users/status": false;
  "GET /contact_center/users/templates": false;
  "POST /contact_center/users/templates": false;
  "GET /contact_center/users/templates/{templateId}": false;
  "DELETE /contact_center/users/templates/{templateId}": false;
  "PATCH /contact_center/users/templates/{templateId}": false;
  "GET /contact_center/users/{userId}": false;
  "DELETE /contact_center/users/{userId}": false;
  "PATCH /contact_center/users/{userId}": false;
  "PATCH /contact_center/users/{userId}/opt_in_out_queues": false;
  "GET /contact_center/users/{userId}/queues": false;
  "GET /contact_center/users/{userId}/recordings": false;
  "DELETE /contact_center/users/{userId}/recordings": false;
  "GET /contact_center/users/{userId}/skills": false;
  "POST /contact_center/users/{userId}/skills": false;
  "DELETE /contact_center/users/{userId}/skills/{skillId}": false;
  "PATCH /contact_center/users/{userId}/status": false;
  "GET /contact_center/variable_logs": false;
  "GET /contact_center/variable_logs/{variableLogId}": false;
  "DELETE /contact_center/variable_logs/{variableLogId}": false;
  "GET /contact_center/variables": true;
  "POST /contact_center/variables": false;
  "GET /contact_center/variables/groups": false;
  "POST /contact_center/variables/groups": false;
  "GET /contact_center/variables/groups/{variableGroupId}": false;
  "DELETE /contact_center/variables/groups/{variableGroupId}": false;
  "PATCH /contact_center/variables/groups/{variableGroupId}": false;
  "GET /contact_center/variables/{variableId}": false;
  "DELETE /contact_center/variables/{variableId}": false;
  "PATCH /contact_center/variables/{variableId}": false;
}

export interface ZoomContactCenterFullApiOperationRequestBodyMap {
  "GET /contact_center/address_books": never;
  "POST /contact_center/address_books": {
  unit_id?: string;
  address_book_name?: string;
  address_book_description?: string;
};
  "GET /contact_center/address_books/contacts/{contactId}/custom_fields": never;
  "GET /contact_center/address_books/custom_fields": never;
  "POST /contact_center/address_books/custom_fields": {
  custom_field_name: string;
  custom_field_description?: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "dateTime" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  address_book_ids?: ReadonlyArray<string>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
};
  "GET /contact_center/address_books/custom_fields/{customFieldId}": never;
  "DELETE /contact_center/address_books/custom_fields/{customFieldId}": never;
  "PATCH /contact_center/address_books/custom_fields/{customFieldId}": {
  custom_field_name: string;
  custom_field_description?: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "dateTime" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  address_book_ids?: ReadonlyArray<string>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
};
  "GET /contact_center/address_books/units": never;
  "POST /contact_center/address_books/units": {
  unit_name?: string;
  unit_description?: string;
};
  "GET /contact_center/address_books/units/{unitId}": never;
  "DELETE /contact_center/address_books/units/{unitId}": never;
  "PATCH /contact_center/address_books/units/{unitId}": {
  unit_name?: string;
  unit_description?: string;
};
  "GET /contact_center/address_books/{addressBookId}": never;
  "DELETE /contact_center/address_books/{addressBookId}": never;
  "PATCH /contact_center/address_books/{addressBookId}": {
  address_book_name?: string;
  address_book_description?: string;
};
  "GET /contact_center/address_books/{addressBookId}/contacts": never;
  "POST /contact_center/address_books/{addressBookId}/contacts": {
  display_name: string;
  first_name?: string;
  last_name?: string;
  phone_numbers: ReadonlyArray<string>;
  phones: ReadonlyArray<{
  phone_number?: string;
  phone_type?: "main" | "work" | "home" | "mobile" | "other";
}>;
  emails?: ReadonlyArray<string>;
  location?: string;
  timezone?: string;
  account_number?: string;
  company?: string;
  role?: string;
  variables?: ReadonlyArray<{
  variable_id?: string;
  variable_value?: string;
}>;
  consumer_ids?: ReadonlyArray<string>;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_value?: string;
}>;
};
  "POST /contact_center/address_books/{addressBookId}/contacts/batch": {
  contacts?: ReadonlyArray<{
  display_name: string;
  first_name?: string;
  last_name?: string;
  phones?: ReadonlyArray<{
  phone_number: string;
  phone_type?: "main" | "work" | "home" | "mobile" | "other";
}>;
  emails?: ReadonlyArray<string>;
  location?: string;
  timezone?: string;
  account_number?: string;
  company?: string;
  role?: string;
  consumer_ids?: ReadonlyArray<string>;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_value?: string;
}>;
  source_id?: string;
  source_name?: string;
}>;
};
  "DELETE /contact_center/address_books/{addressBookId}/contacts/batch": {
  contact_ids: ReadonlyArray<string>;
};
  "PATCH /contact_center/address_books/{addressBookId}/contacts/batch": {
  contacts?: ReadonlyArray<{
  contact_id: string;
  display_name?: string;
  first_name?: string;
  last_name?: string;
  phones?: ReadonlyArray<{
  phone_number: string;
  phone_type?: "main" | "work" | "home" | "mobile" | "other";
}>;
  emails?: ReadonlyArray<string>;
  location?: string;
  timezone?: string;
  account_number?: string;
  company?: string;
  role?: string;
  consumer_ids?: ReadonlyArray<string>;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_value?: string;
}>;
  source_id?: string;
  source_name?: string;
}>;
};
  "GET /contact_center/address_books/{addressBookId}/contacts/{contactId}": never;
  "DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}": never;
  "PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}": {
  display_name?: string;
  first_name?: string;
  last_name?: string;
  phone_numbers: ReadonlyArray<string>;
  phones: ReadonlyArray<{
  phone_number?: string;
  phone_type?: "main" | "work" | "home" | "mobile" | "other";
}>;
  emails?: ReadonlyArray<string>;
  location?: string;
  timezone?: string;
  account_number?: string;
  company?: string;
  role?: string;
  variables?: ReadonlyArray<{
  variable_id?: string;
  variable_value?: string;
}>;
  consumer_ids?: ReadonlyArray<string>;
  custom_fields?: ReadonlyArray<{
  custom_field_id?: string;
  custom_field_value?: string;
}>;
};
  "GET /contact_center/system_statuses": never;
  "POST /contact_center/system_statuses": {
  status_name?: string;
  status_category?: "agent_status" | "queue_opt_out_and_not_ready_status";
  enable?: boolean;
  status_assigned_queues?: ReadonlyArray<{
  id?: string;
}>;
};
  "GET /contact_center/system_statuses/{statusId}": never;
  "DELETE /contact_center/system_statuses/{statusId}": never;
  "PATCH /contact_center/system_statuses/{statusId}": {
  status_name?: string;
  enable?: boolean;
  status_assigned_queues?: ReadonlyArray<{
  id?: string;
}>;
};
  "GET /contact_center/asset_library/assets": never;
  "POST /contact_center/asset_library/assets": {
  asset_name: string;
  asset_description?: string;
  asset_type: "audio" | "image" | "slides" | "text" | "video" | "saved_reply";
  category_id?: string;
  asset_items: ReadonlyArray<{
  asset_item_name?: string;
  asset_item_language?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  upload_file?: string;
  asset_item_content?: string;
  is_default?: boolean;
  asset_item_voice?: string;
}>;
};
  "PATCH /contact_center/asset_library/assets/items": {
  items: ReadonlyArray<{
  asset_id: string;
  asset_item_language: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  asset_item_name?: string;
  asset_item_voice?: string;
  upload_file_name?: string;
  upload_file_content?: string;
  use_shared?: boolean;
}>;
  shared_item?: {
  upload_file_content?: string;
  upload_file_name?: string;
};
};
  "GET /contact_center/asset_library/assets/{assetId}": never;
  "DELETE /contact_center/asset_library/assets/{assetId}": never;
  "PATCH /contact_center/asset_library/assets/{assetId}": {
  asset_description?: string;
  asset_name?: string;
  category_id?: string;
  asset_items?: ReadonlyArray<{
  asset_item_id?: string;
  asset_item_name?: string;
  upload_file?: string;
  asset_item_content?: string;
  is_default?: boolean;
  asset_item_voice?: string;
  asset_item_language?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
}>;
  restore?: boolean;
};
  "POST /contact_center/asset_library/assets/{assetId}/duplicate": {
  assets: ReadonlyArray<{
  asset_name: string;
  asset_description?: string;
}>;
};
  "DELETE /contact_center/asset_library/assets/{assetId}/items": {
  asset_item_ids?: ReadonlyArray<string>;
};
  "GET /contact_center/asset_library/categories": never;
  "POST /contact_center/asset_library/categories": {
  category_name: string;
  category_scope: "system" | "agent";
};
  "GET /contact_center/asset_library/categories/{categoryId}": never;
  "DELETE /contact_center/asset_library/categories/{categoryId}": never;
  "PATCH /contact_center/asset_library/categories/{categoryId}": {
  category_name?: string;
};
  "GET /contact_center/block_list_rules/ip_addresses": never;
  "POST /contact_center/block_list_rules/ip_addresses": {
  ip_address_block_list_rules: ReadonlyArray<{
  status: "active" | "inactive";
  match_type: "ip_address";
  ip_address: string;
  comment?: string;
}>;
};
  "DELETE /contact_center/block_list_rules/ip_addresses": {
  ip_address_block_list_rule_ids: ReadonlyArray<string>;
};
  "GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}": never;
  "GET /contact_center/block_list_rules/phone_numbers": never;
  "POST /contact_center/block_list_rules/phone_numbers": {
  phone_block_list_rules: ReadonlyArray<{
  status: "active" | "inactive";
  match_type: "phone_number" | "prefix";
  country_iso_code: string;
  phone_number: string;
  exceptions?: ReadonlyArray<string>;
  direction: ReadonlyArray<"inbound" | "outbound">;
  channel: ReadonlyArray<"voice" | "sms">;
  comment?: string;
}>;
};
  "DELETE /contact_center/block_list_rules/phone_numbers": {
  phone_block_list_rule_ids: ReadonlyArray<string>;
};
  "GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}": never;
  "PUT /contact_center/engagements/{engagementId}/recording/{command}": never;
  "POST /contact_center/users/{userId}/commands": {
  command: "make_call" | "answer_call" | "hold_call" | "unhold_call" | "end_call" | "conference_warm_invite";
  channel: "voice";
  params?: {
  device_id?: string;
  cc_queue_id?: string;
  queue_caller_id_number?: string;
  consumer_number?: string;
  consumer_display_name?: string;
  reservation_id?: string;
  engagement_id?: string;
  invitee_type?: 0 | 1 | 2;
  invitee_id?: string;
};
};
  "GET /contact_center/users/{userId}/devices": never;
  "GET /contact_center/outbound_campaign/campaigns": never;
  "POST /contact_center/outbound_campaign/campaigns": {
  outbound_campaign_name: string;
  outbound_campaign_description?: string;
  queue_id: string;
  phone_number_id: string;
  assign_type?: "queue" | "default" | "customer";
  dialing_method: "progressive" | "preview" | "agentless";
  dialing_method_settings: ({
  enable_amd?: boolean;
  amd_settings?: {
  greeting_asset_id?: string;
  answering_machine_asset_id?: string;
};
  enable_abandonment_timeout?: boolean;
  abandonment_timeout?: number;
  abandonment_message_asset_id?: string;
} | {
  dialing_strategy?: "automatic" | "manual";
  preview_timer?: number;
  enable_skip?: boolean;
  max_skips?: number;
  enable_ignore_preview_notification?: boolean;
  allow_retry_preview_dialer?: boolean;
} | {
  max_concurrent_calls: number;
  agentless_amd_off_action?: "useFlow" | "hangUp" | "playMedia";
  agentless_amd_off_resource_id?: string;
  old_flow_id?: string;
  new_flow_id: string;
});
  outbound_campaign_priority?: number;
  campaign_contact_list_ids?: ReadonlyArray<string>;
  campaign_do_not_contact_list_ids?: ReadonlyArray<string>;
  exclusion_logic?: "and" | "or";
  max_attempts_per_contact?: number;
  attempts_use_same_period?: boolean;
  second_attempt_period?: number;
  third_attempt_period?: number;
  other_attempt_period?: number;
  retry_period?: number;
  retry_period_unit?: "seconds" | "minutes" | "hours" | "days";
  dial_sequence?: "list_dial" | "contact_dial" | "contact_with_lock";
  enable_max_ring_time?: boolean;
  max_ring_time?: number;
  business_hour_source?: "queue" | "campaign";
  business_hour_id?: string;
  enable_closure_hour?: boolean;
  closure_set_id?: string;
  contact_timezone_source?: "none" | "area_code" | "timezone";
  contact_phone_order?: string;
  enable_always_running?: boolean;
  enable_diagnostics?: boolean;
};
  "GET /contact_center/outbound_campaign/campaigns/{campaignId}": never;
  "DELETE /contact_center/outbound_campaign/campaigns/{campaignId}": never;
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}": {
  outbound_campaign_name?: string;
  outbound_campaign_description?: string;
  phone_number_id?: string;
  assign_type?: "queue" | "default" | "customer";
  outbound_campaign_priority?: number;
  enable_max_ring_time?: boolean;
  max_ring_time?: number;
  campaign_do_not_contact_list_ids?: ReadonlyArray<string>;
  exclusion_logic?: "and" | "or";
  max_attempts_per_contact?: number;
  attempts_use_same_period?: boolean;
  second_attempt_period?: number;
  third_attempt_period?: number;
  other_attempt_period?: number;
  retry_period?: number;
  retry_period_unit?: "seconds" | "minutes" | "hours" | "days";
  dial_sequence?: "list_dial" | "contact_dial" | "contact_with_lock";
  enable_abandonment_timeout?: boolean;
  abandonment_timeout?: number;
  abandonment_message_asset_id?: string;
  enable_skip?: boolean;
  max_skips?: number;
  business_hour_source?: "queue" | "campaign";
  business_hour_id?: string;
  enable_closure_hour?: boolean;
  closure_set_id?: string;
  contact_timezone_source?: "none" | "timezone" | "area_code";
  contact_phone_order?: string;
  enable_always_running?: boolean;
  contact_order?: number;
  enable_diagnostics?: boolean;
  allow_retry_preview_dialer?: boolean;
  max_concurrent_calls?: number;
  old_flow_id?: string;
  new_flow_id?: string;
  agentless_amd_off_action?: "use_flow" | "hang_up" | "play_media";
  agentless_amd_off_resource_id?: string;
};
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status": {
  status?: "Draft" | "Ready" | "Paused" | "Running";
};
  "GET /contact_center/outbound_campaign/contact_list_custom_fields": never;
  "POST /contact_center/outbound_campaign/contact_list_custom_fields": {
  custom_field_name: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "date_time" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  contact_list_ids?: ReadonlyArray<string>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  allow_third_party_access?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
};
  "GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": never;
  "DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": never;
  "PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": {
  custom_field_name?: string;
  data_type?: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "date_time" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  contact_list_ids?: ReadonlyArray<string>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  allow_third_party_access?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
};
  "GET /contact_center/outbound_campaign/contact_lists": never;
  "POST /contact_center/outbound_campaign/contact_lists": {
  contact_list_name: string;
  contact_list_description?: string;
  contact_list_type?: "contact" | "do_not_contact";
};
  "PATCH /contact_center/outbound_campaign/contact_lists": {
  contact_list_id: string;
  contact_list_name?: string;
  contact_list_description?: string;
};
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}": never;
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}": never;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}": {
  contact_list_name?: string;
  contact_list_description?: string;
};
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": never;
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": {
  contact_display_name: string;
  contact_first_name?: string;
  contact_last_name?: string;
  contact_phones: ReadonlyArray<{
  contact_phone_number: string;
  contact_phone_type: "Main" | "Work" | "Home" | "Mobile" | "Other";
}>;
  contact_emails?: ReadonlyArray<string>;
  contact_location?: string;
  contact_account_number?: string;
  contact_company?: string;
  contact_role?: string;
  contact_timezone?: string;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_value: string;
}>;
};
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": {
  contacts?: ReadonlyArray<{
  contact_id: string;
  contact_display_name?: string;
  contact_first_name?: string;
  contact_last_name?: string;
  contact_phones?: ReadonlyArray<{
  contact_phone_number?: string;
  contact_phone_type?: "Main" | "Work" | "Home" | "Mobile" | "Other";
}>;
  contact_emails?: ReadonlyArray<string>;
  contact_location?: string;
  contact_account_number?: string;
  contact_company?: string;
  contact_role?: string;
  contact_timezone?: string;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_value: string;
}>;
}>;
};
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch": {
  contacts?: ReadonlyArray<{
  contact_display_name: string;
  contact_first_name?: string;
  contact_last_name?: string;
  contact_phones: ReadonlyArray<{
  contact_phone_number: string;
  contact_phone_type: "Main" | "Work" | "Home" | "Mobile" | "Other";
}>;
  contact_emails?: ReadonlyArray<string>;
  contact_location?: string;
  contact_account_number?: string;
  contact_company?: string;
  contact_role?: string;
  contact_timezone?: string;
}>;
};
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": never;
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": never;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": {
  contact_display_name?: string;
  contact_first_name?: string;
  contact_last_name?: string;
  contact_phones?: ReadonlyArray<{
  contact_phone_number?: string;
  contact_phone_type?: "Main" | "Work" | "Home" | "Mobile" | "Other";
}>;
  contact_emails?: ReadonlyArray<string>;
  contact_location?: string;
  contact_account_number?: string;
  contact_company?: string;
  contact_role?: string;
  contact_timezone?: string;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_value: string;
}>;
};
  "GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields": never;
  "GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": never;
  "POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": {
  phone_numbers: ReadonlyArray<string>;
};
  "DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": {
  phone_ids?: ReadonlyArray<string>;
};
  "GET /contact_center/dispositions": never;
  "POST /contact_center/dispositions": {
  status?: "inactive" | "active";
  disposition_name: string;
  disposition_description?: string;
  disposition_type?: "single" | "multi_level";
  sub_dispositions?: ReadonlyArray<{
  sub_disposition_name: string;
  current_index: number;
  parent_index: number;
}>;
};
  "GET /contact_center/dispositions/sets": never;
  "POST /contact_center/dispositions/sets": {
  status?: "inactive" | "active";
  disposition_set_name: string;
  disposition_set_description?: string;
  disposition_ids?: ReadonlyArray<string>;
};
  "GET /contact_center/dispositions/sets/{dispositionSetId}": never;
  "DELETE /contact_center/dispositions/sets/{dispositionSetId}": never;
  "PATCH /contact_center/dispositions/sets/{dispositionSetId}": {
  disposition_set_name?: string;
  disposition_set_description?: string;
  status?: "inactive" | "active";
  disposition_ids?: ReadonlyArray<string>;
};
  "GET /contact_center/dispositions/{dispositionId}": never;
  "DELETE /contact_center/dispositions/{dispositionId}": never;
  "PATCH /contact_center/dispositions/{dispositionId}": {
  disposition_name?: string;
  status?: "inactive" | "active";
  disposition_description?: string;
  disposition_type?: "single" | "multi_level";
  sub_dispositions?: ReadonlyArray<{
  sub_disposition_id?: string;
  sub_disposition_name: string;
  current_index: number;
  parent_index: number;
}>;
};
  "POST /contact_center/engagement": {
  work_item_variables?: {
  work_item_id?: string;
  work_item_name: string;
  work_item_desc?: string;
  work_item_type_id?: string;
  work_item_type?: string;
  work_item_due_date?: string;
  work_item_origin?: string;
  work_item_priority?: number;
  work_item_transcript_url?: string;
  work_item_hyperlink?: string;
};
  flow?: {
  flow_entry_id: string;
};
  language_code?: string;
  channels?: ReadonlyArray<{
  channel: "work_item";
  channel_source: "API";
}>;
  consumers?: ReadonlyArray<{
  consumer_external_id?: string;
  consumer_display_name: string;
  consumer_email?: string;
  consumer_number?: string;
}>;
  variables?: ReadonlyArray<{
  name: string;
  value: string;
}>;
};
  "GET /contact_center/engagements": never;
  "GET /contact_center/engagements/{engagementId}": never;
  "PATCH /contact_center/engagements/{engagementId}": {
  engagement_status?: "end" | "activate" | "deactivate";
  engagement_action: "transfer to queue" | "transfer to agent" | "transfer to flow" | "release" | "end" | "activate" | "deactivate";
  target_queue_id?: string;
  target_agent_id?: string;
  target_flow_id?: string;
};
  "GET /contact_center/engagements/{engagementId}/attachments": never;
  "GET /contact_center/engagements/{engagementId}/events": never;
  "GET /contact_center/engagements/{engagementId}/recordings/status": never;
  "GET /contact_center/engagements/{engagementId}/survey": never;
  "GET /contact_center/engagements/{engagementId}/transfer/flows": never;
  "GET /contact_center/engagements/{engagementId}/transfer/queues": never;
  "GET /contact_center/engagements/{engagementId}/transfer/users": never;
  "GET /contact_center/flows": never;
  "POST /contact_center/flows": {
  flow_name: string;
  flow_description?: string;
  flow_version_description?: string;
  flow_file: string;
  import_mode: "new" | "version";
};
  "GET /contact_center/flows/{flowId}": never;
  "DELETE /contact_center/flows/{flowId}": never;
  "PATCH /contact_center/flows/{flowId}": {
  flow_name?: string;
  flow_description?: string;
  flow_version_description?: string;
  flow_version: number;
};
  "GET /contact_center/flows/{flowId}/entry_points": never;
  "POST /contact_center/flows/{flowId}/entry_points": {
  entry_points?: ReadonlyArray<{
  entry_id: string;
  entry_language?: string;
  customer_identity_source?: "from" | "reply_to";
}>;
  enable_detect_language?: boolean;
};
  "DELETE /contact_center/flows/{flowId}/entry_points": {
  entry_ids?: ReadonlyArray<string>;
};
  "GET /contact_center/flows/{flowId}/export": never;
  "PUT /contact_center/flows/{flowId}/publish": never;
  "GET /contact_center/flows_entry_points": never;
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks": never;
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": never;
  "PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": {
  content: string;
};
  "GET /contact_center/inboxes": never;
  "POST /contact_center/inboxes": {
  inbox_name?: string;
  inbox_description?: string;
  inbox_type?: "voicemail";
  inbox_content_storage_location?: "US" | "AU" | "BR" | "CA" | "DE" | "JP" | "SG";
  voicemail?: {
  soft_delete?: boolean;
  soft_delete_days_limit?: number;
  voicemail_time_limit?: number;
  delete_voicemail_days_limit?: number;
  voicemail_transcription?: boolean;
  voicemail_notification_by_email?: {
  enable?: boolean;
  include_voicemail_file?: boolean;
  include_voicemail_transcription?: boolean;
  forward_voicemail_to_emails?: boolean;
  emails?: ReadonlyArray<string>;
};
};
};
  "DELETE /contact_center/inboxes": never;
  "GET /contact_center/inboxes/messages": never;
  "DELETE /contact_center/inboxes/messages": never;
  "GET /contact_center/inboxes/{inboxId}": never;
  "PATCH /contact_center/inboxes/{inboxId}": {
  inbox_name?: string;
  inbox_description?: string;
  inbox_content_storage_location?: "US" | "AU" | "BR" | "CA" | "DE" | "JP" | "SG";
  voicemail?: {
  soft_delete?: boolean;
  soft_delete_days_limit?: number;
  voicemail_time_limit?: number;
  delete_voicemail_days_limit?: number;
  voicemail_transcription?: boolean;
  voicemail_notification_by_email?: {
  enable?: boolean;
  include_voicemail_file?: boolean;
  include_voicemail_transcription?: boolean;
  forward_voicemail_to_emails?: boolean;
  emails?: ReadonlyArray<string>;
};
  greeting_audio_asset_id?: string;
  voicemail_auto_assignment?: {
  enable?: boolean;
  voicemail_auto_assignment_type?: 1 | 2 | 3 | 4 | 5;
  voicemail_auto_assignment_during_active_work_session?: 0 | 1;
  voicemail_auto_assignment_content_id?: string;
  voicemail_auto_assignment_routine_profile_id?: string;
};
  voicemail_send_reminders_for_unresolved?: {
  enable?: boolean;
  send_alert_for_unresolved_voicemail_timeout?: number;
};
};
};
  "PATCH /contact_center/inboxes/{inboxId}/email_notification": {
  user_id: string;
  email_notification?: boolean;
};
  "GET /contact_center/inboxes/{inboxId}/email_notifications": never;
  "GET /contact_center/inboxes/{inboxId}/messages": never;
  "DELETE /contact_center/inboxes/{inboxId}/messages": never;
  "DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}": never;
  "GET /contact_center/inboxes/{inboxId}/queues": never;
  "POST /contact_center/inboxes/{inboxId}/queues": {
  queue_ids?: ReadonlyArray<string>;
  cc_queue_ids?: ReadonlyArray<string>;
};
  "DELETE /contact_center/inboxes/{inboxId}/queues": never;
  "GET /contact_center/inboxes/{inboxId}/users": never;
  "POST /contact_center/inboxes/{inboxId}/users": {
  user_ids?: ReadonlyArray<string>;
};
  "DELETE /contact_center/inboxes/{inboxId}/users": never;
  "GET /contact_center/email/messages": never;
  "GET /contact_center/messaging/messages": never;
  "GET /contact_center/sms": never;
  "POST /contact_center/sms": {
  contact_center_number: string;
  consumer_numbers: ReadonlyArray<string>;
  body: string;
};
  "GET /contact_center/voice_calls": never;
  "GET /contact_center/work_item/messages": never;
  "POST /contact_center/messages": {
  from: string;
  to: string;
  whatsapp_message?: {
  type: "whatsAppTemplate";
  value: string;
};
  sms_message?: {
  type: "text";
  value: string;
};
  create_engagement?: boolean;
  flow_id?: string;
};
  "GET /contact_center/engagements/notes": never;
  "GET /contact_center/engagements/{engagementId}/notes": never;
  "GET /contact_center/engagements/{engagementId}/notes/{noteId}": never;
  "PATCH /contact_center/engagements/{engagementId}/notes/{noteId}": {
  note?: string;
};
  "GET /contact_center/business_hours": never;
  "POST /contact_center/business_hours": {
  business_hour_name?: string;
  business_hour_description?: string;
  timezone?: string;
  account_default?: boolean;
  hours?: {
  hour_type?: 1 | 2;
  custom_hours?: ReadonlyArray<{
  day_of_week?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  custom_hour_type?: 1 | 2;
  custom_hour_ranges?: ReadonlyArray<{
  start_time?: string;
  end_time?: string;
}>;
}>;
};
};
  "GET /contact_center/business_hours/{businessHourId}": never;
  "DELETE /contact_center/business_hours/{businessHourId}": never;
  "PATCH /contact_center/business_hours/{businessHourId}": {
  business_hour_name?: string;
  business_hour_description?: string;
  timezone?: string;
  account_default?: boolean;
  hours?: {
  hour_type?: 1 | 2;
  custom_hours?: ReadonlyArray<{
  day_of_week?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  custom_hour_type?: 0 | 1 | 2;
  custom_hour_ranges?: ReadonlyArray<{
  start_time?: string;
  end_time?: string;
}>;
}>;
};
};
  "GET /contact_center/business_hours/{businessHourId}/flows": never;
  "GET /contact_center/business_hours/{businessHourId}/queues": never;
  "GET /contact_center/closures": never;
  "POST /contact_center/closures": {
  closure_set_name: string;
  closure_set_description?: string;
  timezone: string;
  account_default?: boolean;
  closures: ReadonlyArray<{
  closure_name: string;
  closure_hour_type: 1 | 2;
  start_time: string;
  end_time: string;
  recurring_frequency: 0 | 1 | 2 | 3;
  recurring_frequency_type?: 1 | 2;
  recurring_month?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  recurring_week_interval?: number;
  recurring_days_of_week?: ReadonlyArray<string>;
}>;
};
  "GET /contact_center/closures/{closureSetId}": never;
  "DELETE /contact_center/closures/{closureSetId}": never;
  "PATCH /contact_center/closures/{closureSetId}": {
  closure_set_name: string;
  closure_set_description?: string;
  timezone: string;
  account_default?: boolean;
  closures: ReadonlyArray<{
  closure_id?: string;
  closure_name?: string;
  closure_hour_type?: 1 | 2;
  start_time?: string;
  end_time?: string;
  recurring_frequency?: 0 | 1 | 2 | 3;
  recurring_frequency_type?: 1 | 2;
  recurring_month?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  recurring_week_interval?: number;
  recurring_days_of_week?: ReadonlyArray<string>;
  to_delete?: boolean;
}>;
};
  "GET /contact_center/closures/{closureSetId}/flows": never;
  "GET /contact_center/closures/{closureSetId}/queues": never;
  "GET /contact_center/queue_templates": never;
  "POST /contact_center/queue_templates": {
  queue_template_name: string;
  queue_template_description?: string;
  channel: "voice" | "video" | "messaging" | "email" | "work_item";
  queue_template_type: "add" | "update";
};
  "DELETE /contact_center/queue_templates": {
  queue_template_ids: ReadonlyArray<string>;
};
  "GET /contact_center/queue_templates/{queueTemplateId}": never;
  "DELETE /contact_center/queue_templates/{queueTemplateId}": never;
  "PATCH /contact_center/queue_templates/{queueTemplateId}": {
  queue_template_name?: string;
  queue_template_description?: string;
  queue_template_status?: "active" | "inactive";
};
  "GET /contact_center/queues": never;
  "POST /contact_center/queues": {
  queue_name?: string;
  queue_description?: string;
  channel_types?: ReadonlyArray<"voice" | "chat" | "sms" | "video" | "in_app_chat" | "messaging" | "work_item">;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
};
  "POST /contact_center/queues/batch": {
  template_id?: string;
  queues?: ReadonlyArray<{
  queue_name: string;
  queue_description: string;
}>;
};
  "DELETE /contact_center/queues/batch": {
  cc_queue_ids?: ReadonlyArray<string>;
};
  "GET /contact_center/queues/{queueId}": never;
  "DELETE /contact_center/queues/{queueId}": never;
  "PATCH /contact_center/queues/{queueId}": {
  queue_name?: string;
  queue_description?: string;
  max_wait_time?: number;
  wrap_up_time?: number;
  max_engagement_in_queue?: number;
  short_abandon?: {
  enable?: boolean;
  threshold?: number;
};
  channel_types?: ReadonlyArray<"voice" | "chat" | "sms" | "video" | "in_app_chat" | "messaging" | "work_item">;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  distribution_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  distribution_duration_in_seconds?: number;
  connecting_media_id?: string;
  transferring_media_id?: string;
  holding_media_id?: string;
  waiting_room_id?: string;
  message_accept?: "manual" | "auto";
  wrap_up_expiration?: boolean;
  wrap_up_after_transfer?: boolean;
  overflow_to_goodbye_message?: boolean;
  overflow_to_queue_id?: string;
  overflow_to_cc_queue_id?: string;
  overflow_to_flow_id?: string;
  overflow_to_inbox_id?: string;
  overflow_to_goodbye_message_asset_id?: string;
  auto_close_message?: string;
  auto_close_message_enabled?: boolean;
  auto_close_timeout?: number;
  auto_close_alert_message?: string;
  auto_close_alert_message_enabled?: boolean;
  auto_close_alert_message_time?: number;
  recording_storage_location?: "us" | "au" | "br" | "ca" | "de" | "jp" | "sg";
  service_level_threshold_in_seconds?: number;
  service_level_exclude_short_abandoned_calls?: boolean;
  service_level_exclude_long_abandoned_calls?: boolean;
  service_level_exclude_abandoned_quit_engagements?: boolean;
  service_level_exclude_overflow_engagements?: boolean;
  service_level_target_in_percentage?: number;
  agent_routing_profile_id?: string;
  agent_routing_settings?: {
  allow_agent_select_skill_for_transfer?: boolean;
  maximum_look_back_period?: number;
  last_engaged_agent_data_from_queue_ids?: ReadonlyArray<string>;
};
  consumer_routing_profile_id?: string;
  engagement_acceptance?: {
  acceptance_type?: "manual" | "auto";
  enable_agent_alert_tone?: boolean;
  enable_agent_whisper_announcement?: boolean;
  agent_whisper_announcement_asset_id?: string;
  enable_agent_greeting?: boolean;
  agent_greeting_asset_id?: string;
};
  inbound_launch_url_info?: {
  config?: ReadonlyArray<{
  launch_trigger?: "ringing" | "answered" | "ended";
  launch_url?: string;
}>;
  enable_launch_url?: boolean;
};
  notes_asset_id?: string;
  disposition_required?: boolean;
  default_disposition_id?: string;
  outbound_settings?: {
  enable_outbound_calls?: boolean;
  queue_caller_ids?: ReadonlyArray<string>;
  outbound_launch_url_info?: {
  config?: ReadonlyArray<{
  launch_trigger?: "initiated" | "connected" | "ended";
  url?: string;
}>;
  enable_launch_url?: boolean;
};
  outbound_labels?: {
  outbound_call_duration_lower_threshold?: number;
  outbound_call_duration_upper_threshold?: number;
};
  outbound_transferring_media_id?: string;
  outbound_holding_media_id?: string;
  outbound_notes_asset_id?: string;
  outbound_disposition_required?: boolean;
  outbound_default_disposition_id?: string;
  outbound_wrap_up_time?: number;
  outbound_wrap_up_expiration?: boolean;
  outbound_wrap_up_after_transfer?: boolean;
};
  scheduled_callback_settings?: {
  enable_scheduled_callback?: boolean;
  consumer_inquiry_option?: string;
  greeting_message?: {
  custom_media_asset_id?: string;
  language_code?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  voice_id?: "Danielle" | "Gregory" | "Ivy" | "Joanna" | "Joey" | "Justin" | "Kendra" | "Kevin" | "Kimberly" | "Matthew" | "Ruth" | "Salli" | "Stephen";
  message_text?: string;
};
};
  video_callback_settings?: {
  enable_video_callback?: boolean;
  time_to_offer_callback?: number;
  callback_url_expiration?: number;
  enable_resend_callback_url?: boolean;
  resend_callback_url_time?: "60" | "90" | "120";
  resend_callback_url_time_in_seconds?: 60 | 90 | 120;
  enable_mobile_notification?: boolean;
  callback_timeout?: number;
  enable_callback_cancel_message?: boolean;
  callback_cancel_email_subject?: string;
  callback_cancel_email_body?: string;
  enable_callback_cancel_sms_message?: boolean;
  callback_cancel_sms_text?: string;
  enable_callback_offter_time?: boolean;
  enable_callback_offer_time?: boolean;
  callback_offer_time?: ReadonlyArray<{
  callback_offer_day?: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  callback_offer_start_time?: string;
  callback_offer_end_time?: string;
}>;
  enable_callback_return_time?: boolean;
  callback_return_timezone_id?: string;
  callback_return_day?: ReadonlyArray<{
  callback_return_day?: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  callback_return_start_time?: string;
  callback_return_end_time?: string;
}>;
};
};
  "GET /contact_center/queues/{queueId}/agents": never;
  "POST /contact_center/queues/{queueId}/agents": {
  user_ids?: ReadonlyArray<string>;
};
  "DELETE /contact_center/queues/{queueId}/agents/{userId}": never;
  "PATCH /contact_center/queues/{queueId}/agents/{userId}": {
  opt_in_out_status: 0 | 1 | 2;
};
  "GET /contact_center/queues/{queueId}/dispositions": never;
  "POST /contact_center/queues/{queueId}/dispositions": {
  disposition_ids?: ReadonlyArray<string>;
  assign_type?: "inbound" | "outbound";
};
  "GET /contact_center/queues/{queueId}/dispositions/sets": never;
  "POST /contact_center/queues/{queueId}/dispositions/sets": {
  disposition_set_ids?: ReadonlyArray<string>;
  assign_type?: "inbound" | "outbound";
};
  "DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}": never;
  "DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}": never;
  "GET /contact_center/queues/{queueId}/interrupt": never;
  "PATCH /contact_center/queues/{queueId}/interrupt": {
  audio_interrupts?: ReadonlyArray<{
  audio_asset_id: string;
  play_after_seconds: number;
  is_loop: boolean;
  loop_interval?: number;
  disable_audio?: boolean;
}>;
  notify_interrupts?: {
  play_after_seconds: number;
  is_loop: boolean;
  loop_interval?: number;
  notify_position_in_queue?: {
  custom_audio_type: "standard" | "advanced";
  custom_audio: ReadonlyArray<{
  audio_asset_id?: string;
  audio_variable?: "customer_position";
  order: number;
}>;
  over_limit_custom_audio: ReadonlyArray<{
  order?: number;
  audio_asset_id?: string;
}>;
};
  notify_estimated_wait_time?: {
  custom_audio_type: "standard" | "advanced";
  custom_audio: ReadonlyArray<{
  audio_asset_id?: string;
  audio_variable?: "wait_time";
  order: number;
}>;
  over_limit_custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id: string;
}>;
  backup_custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id: string;
}>;
};
};
};
  "POST /contact_center/queues/{queueId}/interrupt_menu": {
  menu_language_code: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  voice_id: "Danielle" | "Gregory" | "Ivy" | "Joanna" | "Joey" | "Justin" | "Kendra" | "Kevin" | "Kimberly" | "Matthew" | "Ruth" | "Salli" | "Stephen";
  accept_timeout?: number;
  play_interval: number;
  loop_play?: boolean;
  loop_interval?: number;
  menu_options: ReadonlyArray<{
  keypress: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "*" | "#";
  menu_action: "request_callback" | "leave_voicemail" | "route_flow" | "repeat_menu";
  play_message?: string;
  play_message_custom_audio?: {
  custom_audio_type: "advanced" | "standard";
  custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  route_to_flow_id?: string;
  voice_mail_inbox_id?: string;
  callback_settings?: {
  callback_number_type?: "flow_entry_id" | "account_default_caller_id" | "queue_default_caller_id";
  callback_confirm_keypress?: "#" | "*";
  accept_callback_timeout?: number;
  enable_offer_phone_number?: boolean;
  offer_number_message?: string;
  offer_number_message_custom_audio?: {
  custom_audio_type: "advanced" | "standard";
  custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  callback_confirm_messsage?: string;
  callback_confirm_message?: string;
  callback_confirm_message_custom_audio?: {
  custom_audio_type: "advanced" | "standard";
  custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  enable_offer_extension_number?: boolean;
  offer_extension_number_message?: string;
  offer_extension_number_message_custom_audio?: {
  custom_audio_type: "advanced" | "standard";
  custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  confirm_extension_number_message?: string;
  confirm_extension_number_message_custom_audio?: {
  custom_audio_type: "advanced" | "standard";
  custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  outbound_dial_option?: "auto_greeting" | "directly_connect";
  outbound_dial_greeting_message?: string;
  outbound_dial_greeting_message_custom_audio?: {
  custom_audio_type: "advanced" | "standard";
  custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  callback_timeout?: number;
  enable_callback_cancel_message?: boolean;
  callback_cancel_message?: string;
  callback_cancel_message_custom_audio?: {
  custom_audio_type: "advanced" | "standard";
  custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  callback_returning_message?: string;
  callback_returning_message_custom_audio?: {
  custom_audio_type: "advanced" | "standard";
  custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  enable_callback_offer_time?: boolean;
  callback_offer_timezone_id?: string;
  callback_offer_time?: ReadonlyArray<{
  callback_offer_day?: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  callback_offer_start_time?: string;
  callback_offer_end_time?: string;
}>;
  enable_callback_return_time?: boolean;
  callback_return_timezone_id?: string;
  callback_return_day?: ReadonlyArray<{
  callback_return_day?: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  callback_return_start_time?: string;
  callback_return_end_time?: string;
}>;
  enable_advanced_callback_confirmation?: boolean;
  advanced_callback_confirmation?: {
  keypress_voice_message?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "*";
  advanced_callback_confirm_message?: string;
  callback_voice_message_time_limit?: number;
  enable_voice_message_transcription?: boolean;
  callback_voice_message_display_time?: number;
  advanced_callback_confirm_message_with_extension?: string;
  greeting_message?: string;
  end_message?: string;
  save_recording_message?: string;
  short_recording_message?: string;
  keypress_listen_recording_message?: string;
  keypress_save_recording_message?: string;
  keypress_re_recording_message?: string;
};
};
}>;
  invalid_option_message_custom_audio?: {
  custom_audio_type: "advanced" | "standard";
  custom_audio: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
};
  "DELETE /contact_center/queues/{queueId}/interrupt_menu": never;
  "GET /contact_center/queues/{queueId}/operating_hours": never;
  "PATCH /contact_center/queues/{queueId}/operating_hours": {
  account_default_business_hour?: boolean;
  operating_hours_business_hour_id?: string;
  account_default_closure_set?: boolean;
  operating_hours_closure_set_id?: string;
  operating_hours_overflow_enabled?: boolean;
  overflow_to_default_goodbye_message?: boolean;
  overflow_to_goodbye_message_asset_id?: string;
  overflow_to_queue_id?: string;
  overflow_to_flow_id?: string;
  overflow_to_inbox_id?: string;
};
  "GET /contact_center/queues/{queueId}/recordings": never;
  "DELETE /contact_center/queues/{queueId}/recordings": never;
  "DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}": {
  cancelation_reason?: string;
};
  "POST /contact_center/queues/{queueId}/scheduled_callbacks/events": {
  start_time: string;
  attendees: ReadonlyArray<{
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}>;
};
  "GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots": never;
  "GET /contact_center/queues/{queueId}/supervisors": never;
  "POST /contact_center/queues/{queueId}/supervisors": {
  user_ids?: ReadonlyArray<string>;
};
  "DELETE /contact_center/queues/{queueId}/supervisors/{userId}": never;
  "POST /contact_center/queues/{queueId}/teams": {
  team_ids: ReadonlyArray<string>;
};
  "DELETE /contact_center/queues/{queueId}/teams": {
  team_ids: ReadonlyArray<string>;
};
  "DELETE /contact_center/queues/{queueId}/teams/{teamId}": never;
  "PUT /contact_center/{engagementId}/rtms_app/status": {
  action?: "start" | "stop" | "pause" | "resume";
  settings?: {
  client_id: string;
};
};
  "GET /contact_center/engagements/{engagementId}/recordings": never;
  "DELETE /contact_center/engagements/{engagementId}/recordings": never;
  "GET /contact_center/recordings": never;
  "DELETE /contact_center/recordings/{recordingId}": never;
  "GET /contact_center/regions": never;
  "POST /contact_center/regions": {
  region_name?: string;
  sip_zone_id?: string;
};
  "GET /contact_center/regions/{regionId}": never;
  "DELETE /contact_center/regions/{regionId}": never;
  "PATCH /contact_center/regions/{regionId}": {
  region_name?: string;
  sip_zone_id?: string;
};
  "GET /contact_center/regions/{regionId}/users": never;
  "POST /contact_center/regions/{regionId}/users": {
  user_ids?: ReadonlyArray<string>;
};
  "GET /contact_center/analytics/agents/leg_metrics": never;
  "GET /contact_center/analytics/agents/status_history": never;
  "GET /contact_center/analytics/agents/time_sheets": never;
  "GET /contact_center/analytics/historical/details/metrics": never;
  "GET /contact_center/analytics/historical/queues/agents/metrics": never;
  "GET /contact_center/analytics/historical/queues/metrics": never;
  "GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics": never;
  "GET /contact_center/analytics/dataset/historical/agent_performance": never;
  "GET /contact_center/analytics/dataset/historical/agent_timecard": never;
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}": never;
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema": never;
  "GET /contact_center/analytics/dataset/historical/disposition": never;
  "GET /contact_center/analytics/dataset/historical/engagement": never;
  "GET /contact_center/analytics/dataset/historical/engagement_timelines": never;
  "GET /contact_center/analytics/dataset/historical/expert_assist": never;
  "GET /contact_center/analytics/dataset/historical/flow_performance": never;
  "GET /contact_center/analytics/dataset/historical/outbound_dialer_performance": never;
  "GET /contact_center/analytics/dataset/historical/queue_performance": never;
  "GET /contact_center/analytics/log/historical/engagement": never;
  "GET /contact_center/analytics/log/historical/journey": never;
  "GET /contact_center/reports/operation_logs": never;
  "GET /contact_center/roles": never;
  "POST /contact_center/roles": {
  role_name?: string;
  role_description?: string;
  privileges?: ReadonlyArray<string>;
};
  "POST /contact_center/roles/duplicate": {
  original_role_name?: string;
  new_role_name?: string;
};
  "GET /contact_center/roles/{roleId}": never;
  "DELETE /contact_center/roles/{roleId}": never;
  "PATCH /contact_center/roles/{roleId}": {
  role_name?: string;
  role_description?: string;
  privileges?: ReadonlyArray<string>;
};
  "DELETE /contact_center/roles/{roleId}/privileges": {
  privileges?: ReadonlyArray<string>;
};
  "GET /contact_center/roles/{roleId}/users": never;
  "POST /contact_center/roles/{roleId}/users": {
  user_ids?: ReadonlyArray<string>;
};
  "DELETE /contact_center/roles/{roleId}/users/{userId}": never;
  "GET /contact_center/agent_routing_profiles": never;
  "POST /contact_center/agent_routing_profiles": {
  agent_routing_profile_name: string;
  agent_routing_profile_description?: string;
  wait_time_agent_in_seconds?: number;
  priorities?: ReadonlyArray<{
  category_type: "skill" | "intent";
  skill_category_id?: string;
  intent_group_id?: string;
  minimum_proficiency_level?: number;
  skill_category_required?: boolean;
  intent_group_required?: boolean;
  default_skill_id?: string;
  time_step?: number;
  backup_skills?: ReadonlyArray<{
  backup_skill_id: string;
  minimum_proficiency_level?: number;
}>;
}>;
  time_steps?: ReadonlyArray<number>;
  ignore_transferring_skills?: boolean;
};
  "GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}": never;
  "DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}": never;
  "PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}": {
  agent_routing_profile_name?: string;
  agent_routing_profile_description?: string;
  wait_time_agent_in_seconds?: number;
  priorities?: ReadonlyArray<{
  category_type: "skill" | "intent";
  skill_category_id?: string;
  intent_group_id?: string;
  minimum_proficiency_level?: number;
  skill_category_required?: boolean;
  intent_group_required?: boolean;
  default_skill_id?: string;
  time_step?: number;
  backup_skills?: ReadonlyArray<{
  backup_skill_id: string;
  minimum_proficiency_level?: number;
}>;
}>;
  time_steps?: ReadonlyArray<number>;
  ignore_transferring_skills?: boolean;
};
  "GET /contact_center/consumer_routing_profiles": never;
  "POST /contact_center/consumer_routing_profiles": {
  consumer_routing_profile_name: string;
  consumer_routing_profile_description?: string;
  top_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
  accumulated_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  incremental_rate: number;
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
};
  "GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": never;
  "DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": never;
  "PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": {
  consumer_routing_profile_name?: string;
  consumer_routing_profile_description?: string;
  top_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
  accumulated_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  incremental_rate: number;
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
};
  "GET /contact_center/skills": never;
  "POST /contact_center/skills": {
  skill_category_id?: string;
  skill_name?: string;
};
  "GET /contact_center/skills/categories": never;
  "POST /contact_center/skills/categories": {
  max_proficiency_level?: number;
  skill_category_name?: string;
  skill_category_description?: string;
  skill_type?: "text" | "proficiency";
};
  "GET /contact_center/skills/categories/{skillCategoryId}": never;
  "DELETE /contact_center/skills/categories/{skillCategoryId}": never;
  "PATCH /contact_center/skills/categories/{skillCategoryId}": {
  max_proficiency_level?: number;
  skill_category_name?: string;
  skill_category_description?: string;
};
  "GET /contact_center/skills/{skillId}": never;
  "DELETE /contact_center/skills/{skillId}": never;
  "PATCH /contact_center/skills/{skillId}": {
  skill_name?: string;
};
  "GET /contact_center/skills/{skillId}/users": never;
  "GET /contact_center/teams": never;
  "POST /contact_center/teams": {
  team_name: string;
  team_description?: string;
  parent_team_id: string;
};
  "GET /contact_center/teams/{teamId}": never;
  "DELETE /contact_center/teams/{teamId}": never;
  "PATCH /contact_center/teams/{teamId}": {
  team_name: string;
  team_description?: string;
};
  "GET /contact_center/teams/{teamId}/agents": never;
  "POST /contact_center/teams/{teamId}/agents": {
  user_ids?: ReadonlyArray<string>;
};
  "DELETE /contact_center/teams/{teamId}/agents": never;
  "GET /contact_center/teams/{teamId}/children": never;
  "PATCH /contact_center/teams/{teamId}/move": {
  parent_team_id: string;
};
  "GET /contact_center/teams/{teamId}/parents": never;
  "GET /contact_center/teams/{teamId}/supervisors": never;
  "POST /contact_center/teams/{teamId}/supervisors": {
  user_ids: ReadonlyArray<string>;
};
  "DELETE /contact_center/teams/{teamId}/supervisors": never;
  "GET /contact_center/users": never;
  "POST /contact_center/users": {
  user_id?: string;
  user_email?: string;
  role_id?: string;
  country_iso_code?: string;
  client_integration?: "Default" | "Salesforce" | "Zendesk" | "ServiceNow" | "Microsoft_Dynamics_365";
  client_integration_name?: string;
  user_access?: "active" | "inactive";
  region_id?: string;
  channel_settings?: {
  multi_channel_engagements?: {
  enable?: boolean;
  max_agent_load?: number;
  email_max_agent_load?: number;
};
  concurrent_message_capacity?: number;
  concurrent_email_capacity?: number;
};
  template_id?: string;
  package_name?: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist">;
  emergency_calling?: boolean;
  billing_account_id?: string;
};
  "DELETE /contact_center/users": never;
  "PATCH /contact_center/users": {
  users?: ReadonlyArray<{
  user_id?: string;
  user_email?: string;
  client_integration?: "Default" | "Salesforce" | "Zendesk" | "ServiceNow" | "Microsoft_Dynamics_365";
  client_integration_name?: string;
  role_id?: string;
  status_id?: string;
  sub_status_id?: string;
  user_access?: "active" | "inactive";
  country_iso_code?: string;
  template_id?: string;
  package_name?: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist" | "zoom_contact_center_for_service_cloud_voice" | "zoom_contact_center_for_epic">;
  billing_account_id?: string;
}>;
};
  "POST /contact_center/users/batch": {
  users?: ReadonlyArray<{
  user_id?: string;
  user_email?: string;
  role_id?: string;
  country_iso_code?: string;
  client_integration?: "Default" | "Salesforce" | "Zendesk" | "ServiceNow" | "Microsoft_Dynamics_365";
  client_integration_name?: string;
  user_access?: "active" | "inactive";
  channel_settings?: {
  multi_channel_engagements?: {
  enable?: boolean;
  max_agent_load?: number;
  email_max_agent_load?: number;
};
  concurrent_message_capacity?: number;
  concurrent_email_capacity?: number;
};
  template_id?: string;
  package_name?: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist">;
  billing_account_id?: string;
}>;
};
  "PATCH /contact_center/users/status": {
  users?: ReadonlyArray<{
  user_id?: string;
  user_email?: string;
  status_id?: string;
  sub_status_id?: string;
}>;
};
  "GET /contact_center/users/templates": never;
  "POST /contact_center/users/templates": {
  template_name: string;
  template_description?: string;
  template_type: "add" | "update";
  selected_blocks: ReadonlyArray<"role" | "package" | "team" | "client_integration" | "external_url" | "user_access" | "country_or_region" | "region" | "mobile_client" | "emergency_calling" | "assigned_queues" | "skills" | "engagement_capacity">;
  role: string;
  package: {
  package_name: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist" | "zoom_contact_center_for_service_cloud_voice" | "zoom_contact_center_for_epic" | "zoom_contact_center_unified_view_for_servicenow">;
  billing_account_id?: string;
};
  team?: {
  team_id: string;
  team_supervisor: boolean;
};
  client_integration?: {
  client_integration_application: string;
  client_integration_name?: string;
};
  external_url?: {
  enable_external_url: boolean;
  external_launch_url: string;
};
  user_access?: boolean;
  country_or_region?: string;
  region?: string;
  mobile_client?: boolean;
  emergency_calling?: boolean;
  assigned_queues?: {
  agent_queue_ids?: ReadonlyArray<string>;
  supervisor_queue_ids?: ReadonlyArray<string>;
  default_outbound_voice_queue_id?: string;
  default_outbound_message_queue_id?: string;
};
  skills?: ReadonlyArray<{
  skill_id: string;
  proficiency_level?: number;
}>;
  engagement_capacity?: {
  concurrent_email_capacity?: number;
  concurrent_message_capacity?: number;
  email_max_agent_load?: number;
  message_max_agent_load?: number;
};
};
  "GET /contact_center/users/templates/{templateId}": never;
  "DELETE /contact_center/users/templates/{templateId}": never;
  "PATCH /contact_center/users/templates/{templateId}": {
  template_name?: string;
  template_description?: string;
  selected_blocks?: ReadonlyArray<"role" | "package" | "team" | "client_integration" | "external_url" | "user_access" | "country_or_region" | "region" | "mobile_client" | "emergency_calling" | "assigned_queues" | "skills" | "engagement_capacity" | "assigned_numbers" | "assigned_intents">;
  role?: string;
  package?: {
  package_name: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<string>;
  billing_account_id?: string;
};
  team?: {
  team_id: string;
  team_supervisor: boolean;
};
  client_integration?: {
  client_integration_application: string;
  client_integration_name?: string;
};
  external_url?: {
  enable_external_url: boolean;
  external_launch_url: string;
};
  user_access?: boolean;
  country_or_region?: string;
  region?: string;
  mobile_client?: boolean;
  emergency_calling?: boolean;
  assigned_queues?: {
  agent_queue_ids?: ReadonlyArray<string>;
  supervisor_queue_ids?: ReadonlyArray<string>;
  default_outbound_voice_queue_id?: string;
  default_outbound_message_queue_id?: string;
};
  skills?: ReadonlyArray<{
  skill_id: string;
  proficiency_level?: number;
}>;
  engagement_capacity?: {
  concurrent_email_capacity?: number;
  concurrent_message_capacity?: number;
  email_max_agent_load?: number;
  message_max_agent_load?: number;
};
};
  "GET /contact_center/users/{userId}": never;
  "DELETE /contact_center/users/{userId}": never;
  "PATCH /contact_center/users/{userId}": {
  client_integration?: "Default" | "Salesforce" | "Zendesk" | "ServiceNow" | "Microsoft_Dynamics_365";
  client_integration_name?: string;
  role_id?: string;
  status_id?: string;
  sub_status_id?: string;
  user_access?: "active" | "inactive";
  country_iso_code?: string;
  region_id?: string;
  channel_settings?: {
  multi_channel_engagements?: {
  enable?: boolean;
  max_agent_load?: number;
  email_max_agent_load?: number;
};
  concurrent_message_capacity?: number;
  concurrent_email_capacity?: number;
};
  template_id?: string;
  package_name?: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist">;
  emergency_calling?: boolean;
  billing_account_id?: string;
};
  "PATCH /contact_center/users/{userId}/opt_in_out_queues": {
  opt_in_out_status: 0 | 1;
  queue_ids?: ReadonlyArray<string>;
  channel_type?: 0 | 4 | 7 | 8 | 9;
};
  "GET /contact_center/users/{userId}/queues": never;
  "GET /contact_center/users/{userId}/recordings": never;
  "DELETE /contact_center/users/{userId}/recordings": never;
  "GET /contact_center/users/{userId}/skills": never;
  "POST /contact_center/users/{userId}/skills": {
  skills?: ReadonlyArray<{
  skill_id?: string;
  max_proficiency_level?: number;
}>;
};
  "DELETE /contact_center/users/{userId}/skills/{skillId}": never;
  "PATCH /contact_center/users/{userId}/status": {
  status_id?: string;
  sub_status_id?: string;
};
  "GET /contact_center/variable_logs": never;
  "GET /contact_center/variable_logs/{variableLogId}": never;
  "DELETE /contact_center/variable_logs/{variableLogId}": never;
  "GET /contact_center/variables": never;
  "POST /contact_center/variables": {
  variable_group_id: string;
  variable_name: string;
  variable_description?: string;
  variable_type: "global_variable" | "address_book_variable";
  address_book_ids?: ReadonlyArray<string>;
  use_in_reporting?: boolean;
  mask_variable_data?: boolean;
  use_as_routing_profile_parameters?: boolean;
  data_type: "string" | "number" | "boolean" | "date_time" | "currency" | "percentage" | "email" | "url" | "phone" | "json" | "array";
  value_category?: string;
  values?: ReadonlyArray<string>;
  linked_value_lock?: boolean;
  default_value?: string;
  use_in_external_url_parameters?: boolean;
  client_show_in_client_profile_section?: boolean;
  client_show_in_client_engagement_section?: boolean;
  client_show_in_inbound_call_notifications?: boolean;
};
  "GET /contact_center/variables/groups": never;
  "POST /contact_center/variables/groups": {
  variable_group_name: string;
  variable_group_description?: string;
  variable_group_type?: "custom";
};
  "GET /contact_center/variables/groups/{variableGroupId}": never;
  "DELETE /contact_center/variables/groups/{variableGroupId}": never;
  "PATCH /contact_center/variables/groups/{variableGroupId}": {
  variable_group_name?: string;
  variable_group_description?: string;
};
  "GET /contact_center/variables/{variableId}": never;
  "DELETE /contact_center/variables/{variableId}": never;
  "PATCH /contact_center/variables/{variableId}": {
  variable_name?: string;
  variable_description?: string;
  address_book_ids?: ReadonlyArray<string>;
  use_in_reporting?: boolean;
  mask_variable_data?: boolean;
  use_as_routing_profile_parameters?: boolean;
  data_type?: "string" | "number" | "boolean" | "date_time" | "currency" | "percentage" | "email" | "url" | "phone" | "json" | "array";
  value_category?: string;
  values?: ReadonlyArray<string>;
  linked_value_lock?: boolean;
  default_value?: string;
  use_in_external_url_parameters?: boolean;
  client_show_in_client_profile_section?: boolean;
  client_show_in_client_engagement_section?: boolean;
  client_show_in_inbound_call_notifications?: boolean;
};
}

export interface ZoomContactCenterFullApiOperationRequestBodyRequiredMap {
  "GET /contact_center/address_books": false;
  "POST /contact_center/address_books": false;
  "GET /contact_center/address_books/contacts/{contactId}/custom_fields": false;
  "GET /contact_center/address_books/custom_fields": false;
  "POST /contact_center/address_books/custom_fields": false;
  "GET /contact_center/address_books/custom_fields/{customFieldId}": false;
  "DELETE /contact_center/address_books/custom_fields/{customFieldId}": false;
  "PATCH /contact_center/address_books/custom_fields/{customFieldId}": false;
  "GET /contact_center/address_books/units": false;
  "POST /contact_center/address_books/units": false;
  "GET /contact_center/address_books/units/{unitId}": false;
  "DELETE /contact_center/address_books/units/{unitId}": false;
  "PATCH /contact_center/address_books/units/{unitId}": false;
  "GET /contact_center/address_books/{addressBookId}": false;
  "DELETE /contact_center/address_books/{addressBookId}": false;
  "PATCH /contact_center/address_books/{addressBookId}": false;
  "GET /contact_center/address_books/{addressBookId}/contacts": false;
  "POST /contact_center/address_books/{addressBookId}/contacts": false;
  "POST /contact_center/address_books/{addressBookId}/contacts/batch": false;
  "DELETE /contact_center/address_books/{addressBookId}/contacts/batch": false;
  "PATCH /contact_center/address_books/{addressBookId}/contacts/batch": false;
  "GET /contact_center/address_books/{addressBookId}/contacts/{contactId}": false;
  "DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}": false;
  "PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}": false;
  "GET /contact_center/system_statuses": false;
  "POST /contact_center/system_statuses": false;
  "GET /contact_center/system_statuses/{statusId}": false;
  "DELETE /contact_center/system_statuses/{statusId}": false;
  "PATCH /contact_center/system_statuses/{statusId}": false;
  "GET /contact_center/asset_library/assets": false;
  "POST /contact_center/asset_library/assets": false;
  "PATCH /contact_center/asset_library/assets/items": false;
  "GET /contact_center/asset_library/assets/{assetId}": false;
  "DELETE /contact_center/asset_library/assets/{assetId}": false;
  "PATCH /contact_center/asset_library/assets/{assetId}": false;
  "POST /contact_center/asset_library/assets/{assetId}/duplicate": false;
  "DELETE /contact_center/asset_library/assets/{assetId}/items": false;
  "GET /contact_center/asset_library/categories": false;
  "POST /contact_center/asset_library/categories": false;
  "GET /contact_center/asset_library/categories/{categoryId}": false;
  "DELETE /contact_center/asset_library/categories/{categoryId}": false;
  "PATCH /contact_center/asset_library/categories/{categoryId}": false;
  "GET /contact_center/block_list_rules/ip_addresses": false;
  "POST /contact_center/block_list_rules/ip_addresses": false;
  "DELETE /contact_center/block_list_rules/ip_addresses": false;
  "GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}": false;
  "GET /contact_center/block_list_rules/phone_numbers": false;
  "POST /contact_center/block_list_rules/phone_numbers": false;
  "DELETE /contact_center/block_list_rules/phone_numbers": false;
  "GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}": false;
  "PUT /contact_center/engagements/{engagementId}/recording/{command}": false;
  "POST /contact_center/users/{userId}/commands": false;
  "GET /contact_center/users/{userId}/devices": false;
  "GET /contact_center/outbound_campaign/campaigns": false;
  "POST /contact_center/outbound_campaign/campaigns": false;
  "GET /contact_center/outbound_campaign/campaigns/{campaignId}": false;
  "DELETE /contact_center/outbound_campaign/campaigns/{campaignId}": false;
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}": false;
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status": false;
  "GET /contact_center/outbound_campaign/contact_list_custom_fields": false;
  "POST /contact_center/outbound_campaign/contact_list_custom_fields": false;
  "GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": false;
  "DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": false;
  "PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": false;
  "GET /contact_center/outbound_campaign/contact_lists": false;
  "POST /contact_center/outbound_campaign/contact_lists": false;
  "PATCH /contact_center/outbound_campaign/contact_lists": false;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}": false;
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}": false;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}": false;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": false;
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": false;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": false;
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch": false;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": false;
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": false;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": false;
  "GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields": false;
  "GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": false;
  "POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": false;
  "DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": false;
  "GET /contact_center/dispositions": false;
  "POST /contact_center/dispositions": false;
  "GET /contact_center/dispositions/sets": false;
  "POST /contact_center/dispositions/sets": false;
  "GET /contact_center/dispositions/sets/{dispositionSetId}": false;
  "DELETE /contact_center/dispositions/sets/{dispositionSetId}": false;
  "PATCH /contact_center/dispositions/sets/{dispositionSetId}": false;
  "GET /contact_center/dispositions/{dispositionId}": false;
  "DELETE /contact_center/dispositions/{dispositionId}": false;
  "PATCH /contact_center/dispositions/{dispositionId}": false;
  "POST /contact_center/engagement": false;
  "GET /contact_center/engagements": false;
  "GET /contact_center/engagements/{engagementId}": false;
  "PATCH /contact_center/engagements/{engagementId}": false;
  "GET /contact_center/engagements/{engagementId}/attachments": false;
  "GET /contact_center/engagements/{engagementId}/events": false;
  "GET /contact_center/engagements/{engagementId}/recordings/status": false;
  "GET /contact_center/engagements/{engagementId}/survey": false;
  "GET /contact_center/engagements/{engagementId}/transfer/flows": false;
  "GET /contact_center/engagements/{engagementId}/transfer/queues": false;
  "GET /contact_center/engagements/{engagementId}/transfer/users": false;
  "GET /contact_center/flows": false;
  "POST /contact_center/flows": false;
  "GET /contact_center/flows/{flowId}": false;
  "DELETE /contact_center/flows/{flowId}": false;
  "PATCH /contact_center/flows/{flowId}": false;
  "GET /contact_center/flows/{flowId}/entry_points": false;
  "POST /contact_center/flows/{flowId}/entry_points": false;
  "DELETE /contact_center/flows/{flowId}/entry_points": false;
  "GET /contact_center/flows/{flowId}/export": false;
  "PUT /contact_center/flows/{flowId}/publish": false;
  "GET /contact_center/flows_entry_points": false;
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks": false;
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": false;
  "PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": false;
  "GET /contact_center/inboxes": false;
  "POST /contact_center/inboxes": false;
  "DELETE /contact_center/inboxes": false;
  "GET /contact_center/inboxes/messages": false;
  "DELETE /contact_center/inboxes/messages": false;
  "GET /contact_center/inboxes/{inboxId}": false;
  "PATCH /contact_center/inboxes/{inboxId}": false;
  "PATCH /contact_center/inboxes/{inboxId}/email_notification": false;
  "GET /contact_center/inboxes/{inboxId}/email_notifications": false;
  "GET /contact_center/inboxes/{inboxId}/messages": false;
  "DELETE /contact_center/inboxes/{inboxId}/messages": false;
  "DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}": false;
  "GET /contact_center/inboxes/{inboxId}/queues": false;
  "POST /contact_center/inboxes/{inboxId}/queues": false;
  "DELETE /contact_center/inboxes/{inboxId}/queues": false;
  "GET /contact_center/inboxes/{inboxId}/users": false;
  "POST /contact_center/inboxes/{inboxId}/users": false;
  "DELETE /contact_center/inboxes/{inboxId}/users": false;
  "GET /contact_center/email/messages": false;
  "GET /contact_center/messaging/messages": false;
  "GET /contact_center/sms": false;
  "POST /contact_center/sms": false;
  "GET /contact_center/voice_calls": false;
  "GET /contact_center/work_item/messages": false;
  "POST /contact_center/messages": false;
  "GET /contact_center/engagements/notes": false;
  "GET /contact_center/engagements/{engagementId}/notes": false;
  "GET /contact_center/engagements/{engagementId}/notes/{noteId}": false;
  "PATCH /contact_center/engagements/{engagementId}/notes/{noteId}": false;
  "GET /contact_center/business_hours": false;
  "POST /contact_center/business_hours": false;
  "GET /contact_center/business_hours/{businessHourId}": false;
  "DELETE /contact_center/business_hours/{businessHourId}": false;
  "PATCH /contact_center/business_hours/{businessHourId}": false;
  "GET /contact_center/business_hours/{businessHourId}/flows": false;
  "GET /contact_center/business_hours/{businessHourId}/queues": false;
  "GET /contact_center/closures": false;
  "POST /contact_center/closures": false;
  "GET /contact_center/closures/{closureSetId}": false;
  "DELETE /contact_center/closures/{closureSetId}": false;
  "PATCH /contact_center/closures/{closureSetId}": false;
  "GET /contact_center/closures/{closureSetId}/flows": false;
  "GET /contact_center/closures/{closureSetId}/queues": false;
  "GET /contact_center/queue_templates": false;
  "POST /contact_center/queue_templates": false;
  "DELETE /contact_center/queue_templates": false;
  "GET /contact_center/queue_templates/{queueTemplateId}": false;
  "DELETE /contact_center/queue_templates/{queueTemplateId}": false;
  "PATCH /contact_center/queue_templates/{queueTemplateId}": false;
  "GET /contact_center/queues": false;
  "POST /contact_center/queues": false;
  "POST /contact_center/queues/batch": false;
  "DELETE /contact_center/queues/batch": false;
  "GET /contact_center/queues/{queueId}": false;
  "DELETE /contact_center/queues/{queueId}": false;
  "PATCH /contact_center/queues/{queueId}": false;
  "GET /contact_center/queues/{queueId}/agents": false;
  "POST /contact_center/queues/{queueId}/agents": false;
  "DELETE /contact_center/queues/{queueId}/agents/{userId}": false;
  "PATCH /contact_center/queues/{queueId}/agents/{userId}": false;
  "GET /contact_center/queues/{queueId}/dispositions": false;
  "POST /contact_center/queues/{queueId}/dispositions": false;
  "GET /contact_center/queues/{queueId}/dispositions/sets": false;
  "POST /contact_center/queues/{queueId}/dispositions/sets": false;
  "DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}": false;
  "DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}": false;
  "GET /contact_center/queues/{queueId}/interrupt": false;
  "PATCH /contact_center/queues/{queueId}/interrupt": false;
  "POST /contact_center/queues/{queueId}/interrupt_menu": false;
  "DELETE /contact_center/queues/{queueId}/interrupt_menu": false;
  "GET /contact_center/queues/{queueId}/operating_hours": false;
  "PATCH /contact_center/queues/{queueId}/operating_hours": false;
  "GET /contact_center/queues/{queueId}/recordings": false;
  "DELETE /contact_center/queues/{queueId}/recordings": false;
  "DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}": false;
  "POST /contact_center/queues/{queueId}/scheduled_callbacks/events": false;
  "GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots": false;
  "GET /contact_center/queues/{queueId}/supervisors": false;
  "POST /contact_center/queues/{queueId}/supervisors": false;
  "DELETE /contact_center/queues/{queueId}/supervisors/{userId}": false;
  "POST /contact_center/queues/{queueId}/teams": false;
  "DELETE /contact_center/queues/{queueId}/teams": false;
  "DELETE /contact_center/queues/{queueId}/teams/{teamId}": false;
  "PUT /contact_center/{engagementId}/rtms_app/status": false;
  "GET /contact_center/engagements/{engagementId}/recordings": false;
  "DELETE /contact_center/engagements/{engagementId}/recordings": false;
  "GET /contact_center/recordings": false;
  "DELETE /contact_center/recordings/{recordingId}": false;
  "GET /contact_center/regions": false;
  "POST /contact_center/regions": false;
  "GET /contact_center/regions/{regionId}": false;
  "DELETE /contact_center/regions/{regionId}": false;
  "PATCH /contact_center/regions/{regionId}": false;
  "GET /contact_center/regions/{regionId}/users": false;
  "POST /contact_center/regions/{regionId}/users": false;
  "GET /contact_center/analytics/agents/leg_metrics": false;
  "GET /contact_center/analytics/agents/status_history": false;
  "GET /contact_center/analytics/agents/time_sheets": false;
  "GET /contact_center/analytics/historical/details/metrics": false;
  "GET /contact_center/analytics/historical/queues/agents/metrics": false;
  "GET /contact_center/analytics/historical/queues/metrics": false;
  "GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics": false;
  "GET /contact_center/analytics/dataset/historical/agent_performance": false;
  "GET /contact_center/analytics/dataset/historical/agent_timecard": false;
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}": false;
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema": false;
  "GET /contact_center/analytics/dataset/historical/disposition": false;
  "GET /contact_center/analytics/dataset/historical/engagement": false;
  "GET /contact_center/analytics/dataset/historical/engagement_timelines": false;
  "GET /contact_center/analytics/dataset/historical/expert_assist": false;
  "GET /contact_center/analytics/dataset/historical/flow_performance": false;
  "GET /contact_center/analytics/dataset/historical/outbound_dialer_performance": false;
  "GET /contact_center/analytics/dataset/historical/queue_performance": false;
  "GET /contact_center/analytics/log/historical/engagement": false;
  "GET /contact_center/analytics/log/historical/journey": false;
  "GET /contact_center/reports/operation_logs": false;
  "GET /contact_center/roles": false;
  "POST /contact_center/roles": false;
  "POST /contact_center/roles/duplicate": false;
  "GET /contact_center/roles/{roleId}": false;
  "DELETE /contact_center/roles/{roleId}": false;
  "PATCH /contact_center/roles/{roleId}": false;
  "DELETE /contact_center/roles/{roleId}/privileges": false;
  "GET /contact_center/roles/{roleId}/users": false;
  "POST /contact_center/roles/{roleId}/users": false;
  "DELETE /contact_center/roles/{roleId}/users/{userId}": false;
  "GET /contact_center/agent_routing_profiles": false;
  "POST /contact_center/agent_routing_profiles": false;
  "GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}": false;
  "DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}": false;
  "PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}": false;
  "GET /contact_center/consumer_routing_profiles": false;
  "POST /contact_center/consumer_routing_profiles": false;
  "GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": false;
  "DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": false;
  "PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": false;
  "GET /contact_center/skills": false;
  "POST /contact_center/skills": false;
  "GET /contact_center/skills/categories": false;
  "POST /contact_center/skills/categories": false;
  "GET /contact_center/skills/categories/{skillCategoryId}": false;
  "DELETE /contact_center/skills/categories/{skillCategoryId}": false;
  "PATCH /contact_center/skills/categories/{skillCategoryId}": false;
  "GET /contact_center/skills/{skillId}": false;
  "DELETE /contact_center/skills/{skillId}": false;
  "PATCH /contact_center/skills/{skillId}": false;
  "GET /contact_center/skills/{skillId}/users": false;
  "GET /contact_center/teams": false;
  "POST /contact_center/teams": false;
  "GET /contact_center/teams/{teamId}": false;
  "DELETE /contact_center/teams/{teamId}": false;
  "PATCH /contact_center/teams/{teamId}": false;
  "GET /contact_center/teams/{teamId}/agents": false;
  "POST /contact_center/teams/{teamId}/agents": false;
  "DELETE /contact_center/teams/{teamId}/agents": false;
  "GET /contact_center/teams/{teamId}/children": false;
  "PATCH /contact_center/teams/{teamId}/move": false;
  "GET /contact_center/teams/{teamId}/parents": false;
  "GET /contact_center/teams/{teamId}/supervisors": false;
  "POST /contact_center/teams/{teamId}/supervisors": false;
  "DELETE /contact_center/teams/{teamId}/supervisors": false;
  "GET /contact_center/users": false;
  "POST /contact_center/users": false;
  "DELETE /contact_center/users": false;
  "PATCH /contact_center/users": false;
  "POST /contact_center/users/batch": false;
  "PATCH /contact_center/users/status": false;
  "GET /contact_center/users/templates": false;
  "POST /contact_center/users/templates": false;
  "GET /contact_center/users/templates/{templateId}": false;
  "DELETE /contact_center/users/templates/{templateId}": false;
  "PATCH /contact_center/users/templates/{templateId}": false;
  "GET /contact_center/users/{userId}": false;
  "DELETE /contact_center/users/{userId}": false;
  "PATCH /contact_center/users/{userId}": false;
  "PATCH /contact_center/users/{userId}/opt_in_out_queues": false;
  "GET /contact_center/users/{userId}/queues": false;
  "GET /contact_center/users/{userId}/recordings": false;
  "DELETE /contact_center/users/{userId}/recordings": false;
  "GET /contact_center/users/{userId}/skills": false;
  "POST /contact_center/users/{userId}/skills": false;
  "DELETE /contact_center/users/{userId}/skills/{skillId}": false;
  "PATCH /contact_center/users/{userId}/status": false;
  "GET /contact_center/variable_logs": false;
  "GET /contact_center/variable_logs/{variableLogId}": false;
  "DELETE /contact_center/variable_logs/{variableLogId}": false;
  "GET /contact_center/variables": false;
  "POST /contact_center/variables": false;
  "GET /contact_center/variables/groups": false;
  "POST /contact_center/variables/groups": false;
  "GET /contact_center/variables/groups/{variableGroupId}": false;
  "DELETE /contact_center/variables/groups/{variableGroupId}": false;
  "PATCH /contact_center/variables/groups/{variableGroupId}": false;
  "GET /contact_center/variables/{variableId}": false;
  "DELETE /contact_center/variables/{variableId}": false;
  "PATCH /contact_center/variables/{variableId}": false;
}

export interface ZoomContactCenterFullApiOperationResponseMap {
  "GET /contact_center/address_books": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  address_books?: ReadonlyArray<{
  address_book_id?: string;
  address_book_name?: string;
  address_book_description?: string;
  total_contacts?: number;
  unit_id?: string;
  unit_name?: string;
}>;
};
  "POST /contact_center/address_books": {
  address_book_id?: string;
  address_book_name?: string;
  address_book_description?: string;
  unit_id?: string;
  unit_name?: string;
};
  "GET /contact_center/address_books/contacts/{contactId}/custom_fields": {
  next_page_token?: string;
  page_size?: number;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_name: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "dateTime" | "pick_list";
  custom_field_value?: string;
  outdated?: boolean;
}>;
};
  "GET /contact_center/address_books/custom_fields": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_name: string;
  custom_field_description?: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "dateTime" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  address_books?: ReadonlyArray<{
  address_book_id?: string;
  address_book_name?: string;
}>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
}>;
};
  "POST /contact_center/address_books/custom_fields": {
  custom_field_id: string;
  custom_field_name: string;
  custom_field_description?: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "dateTime" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  address_books?: ReadonlyArray<{
  address_book_id?: string;
  address_book_name?: string;
}>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
};
  "GET /contact_center/address_books/custom_fields/{customFieldId}": {
  custom_field_id: string;
  custom_field_name: string;
  custom_field_description?: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "dateTime" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  address_books?: ReadonlyArray<{
  address_book_id?: string;
  address_book_name?: string;
}>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
};
  "DELETE /contact_center/address_books/custom_fields/{customFieldId}": void;
  "PATCH /contact_center/address_books/custom_fields/{customFieldId}": void;
  "GET /contact_center/address_books/units": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  units?: ReadonlyArray<{
  unit_id?: string;
  unit_name?: string;
  unit_description?: string;
}>;
};
  "POST /contact_center/address_books/units": {
  unit_id?: string;
  unit_name?: string;
  unit_description?: string;
};
  "GET /contact_center/address_books/units/{unitId}": {
  unit_id?: string;
  unit_name?: string;
  unit_description?: string;
};
  "DELETE /contact_center/address_books/units/{unitId}": void;
  "PATCH /contact_center/address_books/units/{unitId}": void;
  "GET /contact_center/address_books/{addressBookId}": {
  address_book_id?: string;
  address_book_name?: string;
  address_book_description?: string;
  total_contacts?: number;
  unit_id?: string;
  unit_name?: string;
  queue_ids?: ReadonlyArray<string>;
  team_ids?: ReadonlyArray<string>;
};
  "DELETE /contact_center/address_books/{addressBookId}": void;
  "PATCH /contact_center/address_books/{addressBookId}": void;
  "GET /contact_center/address_books/{addressBookId}/contacts": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  contacts?: ReadonlyArray<{
  contact_id: string;
  display_name: string;
  first_name?: string;
  last_name?: string;
  phone_numbers?: ReadonlyArray<string>;
  phones: ReadonlyArray<{
  phone_number?: string;
  phone_type?: "main" | "work" | "home" | "mobile" | "other";
}>;
  emails?: ReadonlyArray<string>;
  location?: string;
  timezone?: string;
  account_number?: string;
  company?: string;
  role?: string;
  address_book_id?: string;
  address_book_name?: string;
  variables?: ReadonlyArray<{
  variable_group_id?: string;
  variable_id?: string;
  variable_name?: string;
  data_type?: "string" | "boolean";
  variable_value?: string;
}>;
  consumer_ids?: ReadonlyArray<string>;
  custom_fields_url?: string;
}>;
};
  "POST /contact_center/address_books/{addressBookId}/contacts": {
  contact_id?: string;
  display_name: string;
  first_name?: string;
  last_name?: string;
  phone_numbers: ReadonlyArray<string>;
  phones: ReadonlyArray<{
  phone_number?: string;
  phone_type?: "main" | "work" | "home" | "mobile" | "other";
}>;
  emails?: ReadonlyArray<string>;
  location?: string;
  timezone?: string;
  account_number?: string;
  company?: string;
  role?: string;
  address_book_id?: string;
  address_book_name?: string;
  variables?: ReadonlyArray<{
  variable_group_id?: string;
  variable_id?: string;
  variable_name?: string;
  data_type?: "string" | "boolean";
  variable_value?: string;
}>;
  consumer_ids?: ReadonlyArray<string>;
  custom_fields_url?: string;
};
  "POST /contact_center/address_books/{addressBookId}/contacts/batch": {
  contacts?: ReadonlyArray<{
  contact_id?: string;
  display_name?: string;
  first_name?: string;
  last_name?: string;
  phones?: ReadonlyArray<{
  phone_number?: string;
  phone_type?: "main" | "work" | "home" | "mobile" | "other";
}>;
  emails?: ReadonlyArray<string>;
  location?: string;
  timezone?: string;
  account_number?: string;
  company?: string;
  role?: string;
  address_book_id?: string;
  address_book_name?: string;
  consumer_ids?: ReadonlyArray<string>;
  custom_fields_url?: string;
  source_id?: string;
  source_name?: string;
}>;
  invalid_contacts?: ReadonlyArray<{
  display_name?: string;
  phone_numbers?: ReadonlyArray<string>;
  emails?: ReadonlyArray<string>;
  error_messages?: ReadonlyArray<string>;
}>;
};
  "DELETE /contact_center/address_books/{addressBookId}/contacts/batch": void;
  "PATCH /contact_center/address_books/{addressBookId}/contacts/batch": {
  contacts?: ReadonlyArray<{
  contact_id?: string;
  display_name?: string;
  first_name?: string;
  last_name?: string;
  phones?: ReadonlyArray<{
  phone_number?: string;
  phone_type?: "main" | "work" | "home" | "mobile" | "other";
}>;
  emails?: ReadonlyArray<string>;
  location?: string;
  timezone?: string;
  account_number?: string;
  company?: string;
  role?: string;
  address_book_id?: string;
  address_book_name?: string;
  consumer_ids?: ReadonlyArray<string>;
  custom_fields_url?: string;
  source_id?: string;
  source_name?: string;
}>;
  invalid_contacts?: ReadonlyArray<{
  display_name?: string;
  phone_numbers?: ReadonlyArray<string>;
  emails?: ReadonlyArray<string>;
  error_messages?: ReadonlyArray<string>;
}>;
};
  "GET /contact_center/address_books/{addressBookId}/contacts/{contactId}": {
  contact_id: string;
  display_name: string;
  first_name?: string;
  last_name?: string;
  phone_numbers?: ReadonlyArray<string>;
  phones: ReadonlyArray<{
  phone_number?: string;
  phone_type?: "main" | "work" | "home" | "mobile" | "other";
}>;
  emails?: ReadonlyArray<string>;
  location?: string;
  timezone?: string;
  account_number?: string;
  company?: string;
  role?: string;
  address_book_id?: string;
  address_book_name?: string;
  variables?: ReadonlyArray<{
  variable_group_id?: string;
  variable_id?: string;
  variable_name?: string;
  data_type?: "string" | "boolean";
  variable_value?: string;
}>;
  consumer_ids?: ReadonlyArray<string>;
  custom_fields_url?: string;
};
  "DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}": void;
  "PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}": void;
  "GET /contact_center/system_statuses": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  statuses?: ReadonlyArray<{
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied" | "string";
  status_type?: "default" | "custom";
  status_category?: "agent_status" | "queue_opt_out_and_not_ready_status";
  enable?: boolean;
  status_assigned_queues?: ReadonlyArray<{
  id?: string;
  value?: string;
}>;
}>;
};
  "POST /contact_center/system_statuses": {
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  status_type?: "default" | "custom";
  status_category?: "agent_status" | "queue_opt_out_and_not_ready_status";
  enable?: boolean;
};
  "GET /contact_center/system_statuses/{statusId}": {
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  status_type?: "default" | "custom";
  status_category?: "agent_status" | "queue_opt_out_and_not_ready_status";
  enable?: boolean;
  status_assigned_queues?: ReadonlyArray<{
  id?: string;
  value?: string;
}>;
};
  "DELETE /contact_center/system_statuses/{statusId}": void;
  "PATCH /contact_center/system_statuses/{statusId}": void;
  "GET /contact_center/asset_library/assets": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  assets?: ReadonlyArray<{
  asset_id?: string;
  asset_name?: string;
  asset_description?: string;
  asset_type?: "audio" | "image" | "script" | "slides" | "text" | "video" | "saved_reply";
  asset_category_id?: string;
  asset_category_name?: string;
  asset_language_code?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  modified_by?: string;
  last_modified_time?: string;
  asset_items_url?: string;
}>;
};
  "POST /contact_center/asset_library/assets": {
  asset_id?: string;
  asset_name?: string;
  asset_description?: string;
  asset_type?: "audio" | "image" | "slides" | "text" | "video" | "saved_reply";
  modified_by?: string;
  asset_items?: ReadonlyArray<{
  asset_item_id?: string;
  asset_item_name?: string;
  asset_item_language?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  is_default?: boolean;
  asset_item_content?: string;
  asset_item_file_url?: string;
  asset_item_voice?: string;
}>;
  asset_language_code?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  category_id?: string;
  category_name?: string;
  archived?: boolean;
  last_modified_time?: string;
  archived_time?: string;
};
  "PATCH /contact_center/asset_library/assets/items": {
  succeeded_assets: ReadonlyArray<{
  asset_id: string;
  asset_item_language: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
}>;
  failed_assets: ReadonlyArray<{
  asset_id: string;
  asset_item_language: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  error_code: number;
  error_message: string;
}>;
};
  "GET /contact_center/asset_library/assets/{assetId}": {
  asset_id?: string;
  asset_name?: string;
  asset_description?: string;
  asset_type?: "audio" | "image" | "slides" | "text" | "video" | "saved_reply";
  modified_by?: string;
  last_modified_time?: string;
  archived?: boolean;
  archived_time?: string;
  asset_items?: ReadonlyArray<{
  asset_item_id?: string;
  asset_item_name?: string;
  asset_item_language?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  is_default?: boolean;
  asset_item_content?: string;
  asset_item_file_url?: string;
  asset_item_voice?: string;
}>;
  asset_language_code?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  category_id?: string;
  category_name?: string;
};
  "DELETE /contact_center/asset_library/assets/{assetId}": void;
  "PATCH /contact_center/asset_library/assets/{assetId}": void;
  "POST /contact_center/asset_library/assets/{assetId}/duplicate": {
  results: ReadonlyArray<{
  asset_id?: string;
  asset_name?: string;
  status: "success" | "failed";
  error?: string;
}>;
};
  "DELETE /contact_center/asset_library/assets/{assetId}/items": void;
  "GET /contact_center/asset_library/categories": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  categories?: ReadonlyArray<{
  category_id?: string;
  category_name?: string;
  category_scope?: "system" | "agent";
}>;
};
  "POST /contact_center/asset_library/categories": {
  category_id?: string;
  category_name?: string;
  category_scope?: "system" | "agent";
};
  "GET /contact_center/asset_library/categories/{categoryId}": {
  category_id?: string;
  category_name?: string;
  category_scope?: "system" | "agent";
};
  "DELETE /contact_center/asset_library/categories/{categoryId}": void;
  "PATCH /contact_center/asset_library/categories/{categoryId}": void;
  "GET /contact_center/block_list_rules/ip_addresses": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  ip_address_block_list_rules?: ReadonlyArray<{
  ip_address_block_list_rule_id: string;
  ip_address: string;
  match_type: "ip_address";
  status: "active" | "inactive";
  comment?: string;
  created_time: string;
  last_modified_time: string;
}>;
};
  "POST /contact_center/block_list_rules/ip_addresses": {
  ip_address_block_list_rules: ReadonlyArray<{
  ip_address_block_list_rule_id: string;
  status: "active" | "inactive";
  match_type: "ip_address";
  ip_address: string;
  comment?: string;
  created_time?: string;
  last_modified_time?: string;
}>;
};
  "DELETE /contact_center/block_list_rules/ip_addresses": void;
  "GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}": {
  ip_address_block_list_rule_id: string;
  ip_address: string;
  match_type: "ip_address";
  status: "active" | "inactive";
  comment?: string;
  created_time: string;
  last_modified_time: string;
};
  "GET /contact_center/block_list_rules/phone_numbers": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  phone_block_list_rules?: ReadonlyArray<{
  phone_block_list_rule_id: string;
  status: "active" | "inactive";
  match_type: "phone_number" | "prefix";
  country_iso_code: string;
  phone_number: string;
  exceptions?: ReadonlyArray<string>;
  direction: ReadonlyArray<"inbound" | "outbound">;
  channel: ReadonlyArray<"voice" | "sms">;
  comment?: string;
  created_time: string;
  last_modified_time: string;
}>;
};
  "POST /contact_center/block_list_rules/phone_numbers": {
  phone_block_list_rules: ReadonlyArray<{
  phone_block_list_rule_id: string;
  status: "active" | "inactive";
  match_type: "phone_number" | "prefix";
  country_iso_code: string;
  phone_number: string;
  exceptions?: ReadonlyArray<string>;
  direction: ReadonlyArray<"inbound" | "outbound">;
  channel: ReadonlyArray<"voice" | "sms">;
  comment?: string;
  created_time?: string;
  last_modified_time?: string;
}>;
};
  "DELETE /contact_center/block_list_rules/phone_numbers": void;
  "GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}": {
  phone_block_list_rule_id: string;
  status: "active" | "inactive";
  match_type: "phone_number" | "prefix";
  country_iso_code: string;
  phone_number: string;
  exceptions?: ReadonlyArray<string>;
  direction: ReadonlyArray<"inbound" | "outbound">;
  channel: ReadonlyArray<"voice" | "sms">;
  comment?: string;
  created_time: string;
  last_modified_time: string;
};
  "PUT /contact_center/engagements/{engagementId}/recording/{command}": void;
  "POST /contact_center/users/{userId}/commands": {
  request_id: string;
};
  "GET /contact_center/users/{userId}/devices": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  devices?: ReadonlyArray<{
  device_id?: string;
  device_version?: string;
  sip_registration_information?: {
  registration_success?: boolean;
};
  device_type?: "pwa" | "client" | "cti";
}>;
};
  "GET /contact_center/outbound_campaign/campaigns": {
  page_size?: number;
  total_records?: number;
  next_page_token?: string;
  outbound_campaign_items?: ReadonlyArray<{
  outbound_campaign_id?: string;
  outbound_campaign_name?: string;
  outbound_campaign_description?: string;
  outbound_campaign_status?: "draft" | "ready" | "running" | "paused" | "completed" | "not_running";
}>;
};
  "POST /contact_center/outbound_campaign/campaigns": {
  outbound_campaign_id?: string;
  outbound_campaign_name?: string;
  outbound_campaign_description?: string;
  queue_id?: string;
  queue_name?: string;
  phone_number_id?: string;
  assign_type?: "queue" | "default" | "customer";
  outbound_campaign_status?: "draft" | "ready" | "running" | "paused" | "completed" | "not_running";
  dialing_method?: "progressive" | "preview" | "agentless";
  dialing_method_settings?: ({
  enable_amd?: boolean;
  amd_settings?: {
  greeting_asset_id?: string;
  answering_machine_asset_id?: string;
};
  enable_abandonment_timeout?: boolean;
  abandonment_timeout?: number;
  abandonment_message_asset_id?: string;
} | {
  dialing_strategy?: "automatic" | "manual";
  preview_timer?: number;
  enable_skip?: boolean;
  max_skips?: number;
  enable_ignore_preview_notification?: boolean;
  allow_retry_preview_dialer?: boolean;
} | {
  max_concurrent_calls?: number;
  agentless_amd_off_action?: "use_flow" | "hang_up" | "play_media";
  agentless_amd_off_resource_id?: string;
  old_flow_id?: string;
  new_flow_id?: string;
});
  outbound_campaign_priority?: number;
  campaign_contact_list?: ReadonlyArray<{
  contact_list_id: string;
  contact_list_name: string;
  contact_list_description?: string;
  contacts_count?: string;
}>;
  campaign_do_not_contact_list_ids?: ReadonlyArray<{
  contact_list_id: string;
  contact_list_name: string;
  contact_list_description?: string;
  contacts_count?: string;
}>;
  exclusion_logic?: string;
  max_attempts_per_contact?: number;
  attempts_use_same_period?: boolean;
  second_attempt_period?: number;
  third_attempt_period?: number;
  other_attempt_period?: number;
  retry_period?: number;
  retry_period_unit?: "seconds" | "minutes" | "hours" | "days";
  dial_sequence?: string;
  max_ring_time?: number;
  enable_max_ring_time?: boolean;
  business_hour_source?: "queue" | "campaign";
  business_hour_id?: string;
  enable_closure_hour?: boolean;
  closure_set_id?: string;
  contact_timezone_source?: "none" | "timezone" | "area_code";
  contact_phone_order?: string;
  enable_always_running?: boolean;
  contact_order?: number;
  enable_diagnostics?: boolean;
};
  "GET /contact_center/outbound_campaign/campaigns/{campaignId}": {
  outbound_campaign_id?: string;
  outbound_campaign_name?: string;
  outbound_campaign_description?: string;
  queue_id?: string;
  queue_name?: string;
  phone_number_id?: string;
  assign_type?: "queue" | "default" | "customer";
  outbound_campaign_status?: "draft" | "ready" | "running" | "paused" | "completed" | "not_running";
  dialing_method?: "progressive" | "preview" | "agentless";
  dialing_method_settings?: ({
  enable_amd?: boolean;
  amd_settings?: {
  greeting_asset_id?: string;
  answering_machine_asset_id?: string;
};
  enable_abandonment_timeout?: boolean;
  abandonment_timeout?: number;
  abandonment_message_asset_id?: string;
} | {
  dialing_strategy?: "automatic" | "manual";
  preview_timer?: number;
  enable_skip?: boolean;
  max_skips?: number;
  enable_ignore_preview_notification?: boolean;
  allow_retry_preview_dialer?: boolean;
} | {
  max_concurrent_calls?: number;
  agentless_amd_off_action?: "useFlow" | "hangUp" | "playMedia";
  agentless_amd_off_resource_id?: string;
  agentless_amd_off_resource_name?: string;
  old_flow_id?: string;
  new_flow_id?: string;
});
  outbound_campaign_priority?: number;
  campaign_contact_list?: ReadonlyArray<{
  contact_list_id: string;
  contact_list_name: string;
  contact_list_description?: string;
  contacts_count?: string;
}>;
  campaign_do_not_contact_list?: ReadonlyArray<{
  contact_list_id?: string;
  contact_list_name?: string;
  contact_list_description?: string;
  contacts_count?: string;
}>;
  exclusion_logic?: "and" | "or";
  max_attempts_per_contact?: number;
  attempts_use_same_period?: boolean;
  second_attempt_period?: number;
  third_attempt_period?: number;
  other_attempt_period?: number;
  retry_period?: number;
  retry_period_unit?: "seconds" | "minutes" | "hours" | "days";
  dial_sequence?: "list_dial" | "contact_dial" | "contact_with_lock";
  enable_max_ring_time?: boolean;
  max_ring_time?: number;
  contact_phone_order?: string;
  enable_always_running?: boolean;
  contact_order?: number;
  enable_diagnostics?: boolean;
  business_hour_source?: "queue" | "campaign";
  business_hour_id?: string;
  enable_closure_hour?: boolean;
  closure_set_id?: string;
  contact_timezone_source?: "none" | "timezone" | "area_code";
};
  "DELETE /contact_center/outbound_campaign/campaigns/{campaignId}": void;
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}": void;
  "PATCH /contact_center/outbound_campaign/campaigns/{campaignId}/status": void;
  "GET /contact_center/outbound_campaign/contact_list_custom_fields": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_name: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "date_time" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  contact_list_ids?: ReadonlyArray<string>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  allow_third_party_access?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
}>;
};
  "POST /contact_center/outbound_campaign/contact_list_custom_fields": {
  custom_field_id: string;
  custom_field_name: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "date_time" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  contact_list_ids?: ReadonlyArray<string>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  allow_third_party_access?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
};
  "GET /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": {
  custom_field_id: string;
  custom_field_name: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "date_time" | "pick_list";
  default_value?: string;
  pick_list_values?: ReadonlyArray<string>;
  contact_list_ids?: ReadonlyArray<string>;
  use_as_routing_profile_parameter?: boolean;
  use_as_external_url_parameter?: boolean;
  show_in_transferred_calls?: boolean;
  allow_third_party_access?: boolean;
  show_in_inbound_notification?: boolean;
  show_in_profile_tab?: boolean;
};
  "DELETE /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": void;
  "PATCH /contact_center/outbound_campaign/contact_list_custom_fields/{customFieldId}": void;
  "GET /contact_center/outbound_campaign/contact_lists": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  contact_lists?: ReadonlyArray<{
  contact_list_id: string;
  contact_list_name: string;
  contact_list_description?: string;
  contacts_count?: number;
}>;
};
  "POST /contact_center/outbound_campaign/contact_lists": {
  contact_list_id?: string;
  contact_list_name?: string;
  contact_list_description?: string;
  contacts_count?: number;
  contact_list_type?: string;
};
  "PATCH /contact_center/outbound_campaign/contact_lists": {
  failed_contact_lists?: ReadonlyArray<{
  contact_list_id?: string;
  error?: string;
}>;
};
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}": {
  contact_list_id: string;
  contact_list_name: string;
  contact_list_description?: string;
  contacts_count?: number;
  contact_list_type?: "contact" | "do_not_contact";
};
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}": void;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}": void;
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  contacts?: ReadonlyArray<{
  contact_id: string;
  contact_display_name: string;
  contact_first_name?: string;
  contact_last_name?: string;
  contact_phones: ReadonlyArray<{
  contact_phone_number: string;
  contact_phone_type: "Main" | "Home" | "Work" | "Mobile" | "Other";
}>;
  contact_emails?: ReadonlyArray<string>;
  contact_location?: string;
  contact_account_number?: string;
  contact_company?: string;
  contact_role?: string;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_value: string;
}>;
}>;
};
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": {
  contact_id: string;
  contact_display_name: string;
  contact_first_name?: string;
  contact_last_name?: string;
  contact_phones: ReadonlyArray<{
  contact_phone_number: string;
  contact_phone_type: "Main" | "Work" | "Home" | "Mobile" | "Other";
}>;
  contact_emails?: ReadonlyArray<string>;
  contact_location?: string;
  contact_account_number?: string;
  contact_company?: string;
  contact_role?: string;
  contact_timezone?: string;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_value: string;
}>;
};
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts": {
  failed_contacts?: ReadonlyArray<{
  contact_id?: string;
  error?: string;
}>;
};
  "POST /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/batch": {
  failed_contacts?: ReadonlyArray<{
  contact_index?: string;
  error?: string;
}>;
};
  "GET /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": {
  contact_id: string;
  contact_display_name: string;
  contact_first_name?: string;
  contact_last_name?: string;
  contact_phones: ReadonlyArray<{
  contact_phone_number: string;
  contact_phone_type: "Main" | "Home" | "Work" | "Mobile" | "Other";
}>;
  contact_emails?: ReadonlyArray<string>;
  contact_location?: string;
  contact_account_number?: string;
  contact_company?: string;
  contact_role?: string;
  contact_timezone?: string;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_value: string;
}>;
};
  "DELETE /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": void;
  "PATCH /contact_center/outbound_campaign/contact_lists/{contactListId}/contacts/{contactId}": void;
  "GET /contact_center/outbound_campaign/contacts/{contactId}/custom_fields": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  custom_fields?: ReadonlyArray<{
  custom_field_id: string;
  custom_field_name: string;
  data_type: "string" | "number" | "boolean" | "email" | "phone" | "percent" | "currency" | "date_time" | "pick_list";
  custom_field_value?: string;
}>;
};
  "GET /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  dnc_list_phones?: ReadonlyArray<{
  phone_id: string;
  phone_number: string;
}>;
};
  "POST /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": ZoomContactCenterFullApiSchemaJsonValue;
  "DELETE /contact_center/outbound_campaign/dnc_lists/{dncListId}/phones": void;
  "GET /contact_center/dispositions": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
  disposition_description?: string;
  status?: "inactive" | "active";
  queue_count?: number;
  last_modified_time?: string;
  modified_by?: string;
  disposition_type?: "single" | "multi_level";
}>;
};
  "POST /contact_center/dispositions": {
  disposition_id?: string;
  disposition_name?: string;
  disposition_description?: string;
  status?: "inactive" | "active";
  last_modified_time?: string;
  modified_by?: string;
  disposition_type?: "single" | "multi_level";
};
  "GET /contact_center/dispositions/sets": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  disposition_sets?: ReadonlyArray<{
  disposition_set_id?: string;
  disposition_set_name?: string;
  disposition_set_description?: string;
  status?: "inactive" | "active";
  last_modified_time?: string;
  modified_by?: string;
  dispositions_count?: number;
  queues_count?: number;
}>;
};
  "POST /contact_center/dispositions/sets": {
  disposition_set_id?: string;
  disposition_set_name?: string;
  disposition_set_description?: string;
  status?: "inactive" | "active";
  last_modified_time?: string;
  modified_by?: string;
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
}>;
};
  "GET /contact_center/dispositions/sets/{dispositionSetId}": {
  disposition_set_id?: string;
  disposition_set_name?: string;
  disposition_set_description?: string;
  status?: "inactive" | "active";
  last_modified_time?: string;
  modified_by?: string;
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
}>;
  queues?: ReadonlyArray<{
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
}>;
};
  "DELETE /contact_center/dispositions/sets/{dispositionSetId}": void;
  "PATCH /contact_center/dispositions/sets/{dispositionSetId}": void;
  "GET /contact_center/dispositions/{dispositionId}": {
  disposition_id?: string;
  disposition_name?: string;
  disposition_description?: string;
  status?: "inactive" | "active";
  queue_count?: number;
  last_modified_time?: string;
  modified_by?: string;
  disposition_type?: "single" | "multi_level";
  sub_dispositions?: ReadonlyArray<{
  sub_disposition_id?: string;
  sub_disposition_name?: string;
  current_index?: number;
  parent_index?: number;
}>;
};
  "DELETE /contact_center/dispositions/{dispositionId}": void;
  "PATCH /contact_center/dispositions/{dispositionId}": void;
  "POST /contact_center/engagement": {
  work_item_variables?: {
  work_item_name?: string;
  work_item_source_id?: string;
  work_item_desc?: string;
  work_item_type?: string;
  work_item_id?: string;
  work_item_due_date?: string;
  work_item_origin?: string;
  work_item_priority?: string;
  work_item_transcript_url?: string;
  work_item_hyperlink?: string;
  work_item_type_id?: string;
};
  flows?: ReadonlyArray<{
  flow_entry_id?: string;
  flow_id?: string;
  flow_name?: string;
  flow_version?: string;
}>;
  session_id?: string;
  engagement_id: string;
  language_code?: string;
  channels?: ReadonlyArray<{
  channel?: "work_item";
  channel_source?: "API";
}>;
  start_time: string;
  consumers?: ReadonlyArray<{
  consumer_id?: string;
  consumer_external_id?: string;
  consumer_display_name?: string;
  consumer_email?: string;
  consumer_number?: string;
}>;
  variables?: ReadonlyArray<{
  name?: string;
  value?: string;
}>;
};
  "GET /contact_center/engagements": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  engagements?: ReadonlyArray<{
  start_time?: string;
  end_time?: string;
  duration?: number;
  engagement_id?: string;
  direction?: string;
  channel_types?: ReadonlyArray<"voice" | "sms" | "chat" | "video" | "kiosk" | "in_app_chat" | "in_app_video">;
  channels?: ReadonlyArray<{
  channel?: "voice" | "video" | "messaging" | "email";
  channel_source?: "in_app_video" | "kiosk_video" | "web_video" | "web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address";
}>;
  consumers?: ReadonlyArray<{
  consumer_id?: string;
  consumer_display_name?: string;
  consumer_number?: string;
}>;
  flows?: ReadonlyArray<{
  flow_id?: string;
  flow_name?: string;
  flow_version?: string;
}>;
  queues?: ReadonlyArray<{
  cc_queue_id?: string;
  queue_name?: string;
  queue_id?: string;
}>;
  agents?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
}>;
  talk_duration?: number;
  flow_duration?: number;
  waiting_duration?: number;
  handling_duration?: number;
  wrap_up_duration?: number;
  transfer_count?: number;
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
}>;
  notes?: ReadonlyArray<{
  user_id?: string;
  note_id?: string;
  note?: string;
  last_modified_time?: string;
}>;
  transcript_url?: string;
  survey_id?: string;
  transferCount?: number;
  voice_mail?: number;
  queue_wait_type?: "live_waiting" | "callback";
  callback_voice_messages?: ReadonlyArray<{
  callback_voice_message_url?: string;
  callback_voice_message_transcript_url?: string;
}>;
}>;
};
  "GET /contact_center/engagements/{engagementId}": {
  start_time?: string;
  end_time?: string;
  duration?: number;
  engagement_id?: string;
  channel_types?: ReadonlyArray<"voice" | "sms" | "chat" | "video" | "kiosk" | "in_app_chat" | "in_app_video">;
  channels?: ReadonlyArray<{
  channel?: "voice" | "video" | "messaging" | "email";
  channel_source?: "in_app_video" | "kiosk_video" | "web_video" | "web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address";
}>;
  consumers?: ReadonlyArray<{
  consumer_id?: string;
  consumer_display_name?: string;
  consumer_number?: string;
}>;
  direction?: "inbound" | "outbound";
  flows?: ReadonlyArray<{
  flow_id?: string;
  flow_name?: string;
  flow_version?: string;
}>;
  queues?: ReadonlyArray<{
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
}>;
  agents?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
}>;
  queue_wait_type?: "live_waiting" | "callback";
  talk_duration?: number;
  flow_duration?: number;
  waiting_duration?: number;
  handling_duration?: number;
  wrap_up_duration?: number;
  voice_mail?: number;
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
}>;
  notes?: ReadonlyArray<{
  user_id?: string;
  note_id?: string;
  note?: string;
  last_modified_time?: string;
}>;
  events?: ReadonlyArray<{
  start_time?: string;
  duration?: number;
  channel_type?: "voice" | "sms" | "chat" | "video" | "in_app_chat" | "kiosk" | "in_app_chat" | "in_app_video";
  channel?: "voice" | "video" | "messaging" | "email";
  channel_source?: "in_app_video" | "kiosk_video" | "web_video" | "web_chat" | "in_app_chat" | "sms" | "email_address";
  event_type?: string;
  direction?: "inbound" | "outbound";
  flow_id?: string;
  flow_name?: string;
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  user_id?: string;
  user_display_name?: string;
  accept_type?: "manual" | "auto";
  transfer_to_flow_id?: string;
  transfer_to_flow_name?: string;
  transfer_to_queue_id?: string;
  transfer_to_cc_queue_id?: string;
  transfer_to_queue_name?: string;
  transfer_to_user_id?: string;
  transfer_to_user_display_name?: string;
  transfer_to_number?: string;
  transfer_type?: "cold" | "warm";
  transfer_count?: number;
  upgraded_to_channel_type?: "video";
  crm_type?: string;
  crm_call_status?: "ringing" | "answer" | "hangup" | "miss";
  supervisor_id?: string;
  supervisor_display_name?: string;
  consumer_id?: string;
  consumer_display_name?: string;
  inbox_id?: string;
  inbox_name?: string;
  conference_type?: "cold" | "warm";
  invitee_type?: "Agent" | "Queue" | "PSTN number";
  invitee?: string;
  skills?: ReadonlyArray<{
  skill_category_id?: string;
  skill_category_name?: string;
  skill_id?: string;
  skill_name?: string;
  skill_proficiency_level?: number;
}>;
  email_reply_to?: ReadonlyArray<{
  email_address?: string;
  email_name?: string;
}>;
  email_reply_cc?: ReadonlyArray<{
  email_address?: string;
  email_name?: string;
}>;
  email_reply_bcc?: ReadonlyArray<{
  email_address?: string;
  email_name?: string;
}>;
}>;
  transcript_url?: string;
  survey_id?: string;
  callback_voice_messages?: ReadonlyArray<{
  callback_voice_message_url?: string;
  callback_voice_message_transcript_url?: string;
}>;
};
  "PATCH /contact_center/engagements/{engagementId}": void;
  "GET /contact_center/engagements/{engagementId}/attachments": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  attachments?: ReadonlyArray<{
  attachment_id?: string;
  engagement_id?: string;
  attachment_name?: string;
  attachment_url?: string;
  attachment_alias?: string;
  attachment_size?: number;
  attachment_type?: string;
}>;
};
  "GET /contact_center/engagements/{engagementId}/events": {
  engagement_id?: string;
  events?: ReadonlyArray<{
  start_time?: string;
  event_name?: string;
  channel?: "voice" | "video";
  channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video";
  event_content?: string;
}>;
};
  "GET /contact_center/engagements/{engagementId}/recordings/status": {
  statuses?: ReadonlyArray<{
  status?: "pause" | "resume" | "start" | "stop";
  last_modified_time?: string;
}>;
  engagement_id?: string;
  channel?: "voice" | "video";
  channel_source?: "in_app_video" | "kiosk_video" | "web_video";
};
  "GET /contact_center/engagements/{engagementId}/survey": {
  survey_id?: string;
  survey_name?: string;
  engagement_id?: string;
  queue_id?: string;
  queue_name?: string;
  flow_id?: string;
  flow_name?: string;
  survey_trigger_level?: 0 | 1;
  survey_results?: ReadonlyArray<{
  question_id?: string;
  question_name?: string;
  question_type?: 0 | 5 | 7;
  question_order?: number;
  date_time?: string;
  answer?: string;
  numeric_answer?: number;
  file_url?: string;
}>;
};
  "GET /contact_center/engagements/{engagementId}/transfer/flows": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  flows?: ReadonlyArray<{
  flow_id: string;
  flow_name?: string;
  flow_description?: string;
}>;
};
  "GET /contact_center/engagements/{engagementId}/transfer/queues": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  queues?: ReadonlyArray<{
  queue_id: string;
  queue_name?: string;
  queue_description?: string;
}>;
};
  "GET /contact_center/engagements/{engagementId}/transfer/users": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  users?: ReadonlyArray<{
  cc_user_id: string;
  user_id?: string;
  user_display_name?: string;
  user_email?: string;
  user_status: "offline" | "available" | "unavailable" | "occupied" | "break" | "meal" | "training" | "meeting" | "end_shift" | "forced" | "disabling" | "in_meeting" | "on_call";
  user_first_name?: string;
  user_last_name?: string;
  user_profile_picture_background_color?: string;
  user_profile_picture_file_id?: string;
  user_profile_picture_type?: string;
  user_personal_profile_avatar?: string;
  queue_count?: number;
  queues?: ReadonlyArray<{
  queue_id?: string;
  queue_name?: string;
}>;
}>;
};
  "GET /contact_center/flows": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  flows?: ReadonlyArray<{
  flow_id?: string;
  flow_name?: string;
  flow_description?: string;
  channel_type?: "voice" | "chat" | "sms" | "video" | "in_app_chat";
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address" | "api";
  status?: "draft" | "published" | "archived" | "debugging";
  modified_by?: string;
  last_modified_time?: string;
  entry_points?: ReadonlyArray<{
  entry_id?: string;
  entry_name?: string;
  entry_number?: string;
  entry_language?: string;
  email_address?: string;
}>;
  flow_versions?: ReadonlyArray<{
  flow_version_id?: string;
  flow_version_description?: string;
  flow_version_status?: "draft" | "published" | "archived" | "debugging";
  flow_version?: number;
  flow_version_modified_by?: string;
  flow_version_last_modified_time?: string;
}>;
}>;
};
  "POST /contact_center/flows": {
  flow_id?: string;
  flow_name?: string;
  flow_description?: string;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "video" | "voice" | "sms" | "web_chat" | "in_app_chat" | "facebook_messenger" | "whatsapp" | "instagram" | "team_chat" | "email_address" | "api";
  status?: "draft" | "published";
  modified_by?: string;
  last_modified_time?: string;
  entry_points?: ReadonlyArray<{
  entry_id?: string;
  entry_name?: string;
  entry_number?: string;
  entry_language?: string;
  email_address?: string;
}>;
  flow_versions?: ReadonlyArray<{
  flow_version_id?: string;
  flow_version_description?: string;
  flow_version_status?: "draft" | "published" | "archieved";
  flow_version?: number;
  flow_version_modified_by?: string;
  flow_version_last_modified_time?: string;
}>;
};
  "GET /contact_center/flows/{flowId}": {
  flow_id?: string;
  flow_name?: string;
  flow_description?: string;
  channel_type?: "voice" | "chat" | "sms" | "video" | "in_app_chat";
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address" | "api";
  status?: "draft" | "published" | "archived" | "debugging";
  modified_by?: string;
  last_modified_time?: string;
  entry_points?: ReadonlyArray<{
  entry_id?: string;
  entry_name?: string;
  entry_number?: string;
  entry_language?: string;
  email_address?: string;
}>;
  flow_versions?: ReadonlyArray<{
  flow_version_id?: string;
  flow_version_description?: string;
  flow_version_status?: "draft" | "published" | "archived" | "debugging";
  flow_version?: number;
  flow_version_modified_by?: string;
  flow_version_last_modified_time?: string;
}>;
};
  "DELETE /contact_center/flows/{flowId}": void;
  "PATCH /contact_center/flows/{flowId}": void;
  "GET /contact_center/flows/{flowId}/entry_points": {
  entry_points?: ReadonlyArray<{
  entry_id: string;
  entry_number?: string;
  entry_email?: string;
  entry_name?: string;
  entry_number_type?: 2 | 3 | 5;
  entry_number_country_code?: string;
  entry_number_area_code?: string;
  entry_language?: string;
  customer_identity_source?: "from" | "reply_to";
}>;
  enable_detect_language?: boolean;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "sms" | "web_chat" | "in_app_chat" | "team_chat" | "email_address" | "instagram" | "facebook_messenger" | "whatsapp" | "api";
};
  "POST /contact_center/flows/{flowId}/entry_points": {
  entry_points: ReadonlyArray<{
  entry_id: string;
  entry_language?: string;
  customer_identity_source?: "from" | "reply_to";
}>;
  channel_source: "sms" | "web_chat" | "in_app_chat" | "team_chat" | "email" | "instagram" | "facebook_messenger" | "whatsapp" | "api";
  channel: "voice" | "video" | "messaging" | "email" | "work_item";
  enable_detect_language?: boolean;
};
  "DELETE /contact_center/flows/{flowId}/entry_points": void;
  "GET /contact_center/flows/{flowId}/export": void;
  "PUT /contact_center/flows/{flowId}/publish": void;
  "GET /contact_center/flows_entry_points": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  entry_points?: ReadonlyArray<{
  entry_id?: string;
  entry_number?: string;
  entry_name?: string;
  entry_email?: string;
  entry_number_type?: 2 | 3 | 5;
  entry_number_country_code?: string;
  entry_number_area_code?: string;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "sms" | "web_chat" | "in_app_chat" | "team_chat" | "email_address" | "instagram" | "facebook_messenger" | "whatsapp" | "api";
}>;
};
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks": {
  follow_up_tasks?: ReadonlyArray<{
  task_id?: string;
  engagement_id?: string;
  content?: string;
  user_id?: string;
  create_time?: string;
  update_time?: string;
}>;
};
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": {
  task_id: string;
  engagement_id: string;
  content: string;
  user_id?: string;
  create_time: string;
  update_time: string;
};
  "PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": void;
  "GET /contact_center/inboxes": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  inboxes?: ReadonlyArray<{
  inbox_id?: string;
  inbox_name?: string;
  inbox_type?: "voicemail";
  access_user_count?: number;
  access_queue_count?: number;
  last_modified_time?: string;
  modified_by?: string;
}>;
};
  "POST /contact_center/inboxes": {
  inbox_id?: string;
  inbox_name?: string;
  inbox_description?: string;
  inbox_type?: "voicemail";
  inbox_content_storage_location?: "US" | "AU" | "BR" | "CA" | "DE" | "JP" | "SG";
  last_modified_time?: string;
  modified_by?: string;
  voicemail?: {
  soft_delete?: boolean;
  soft_delete_days_limit?: number;
  voicemail_time_limit?: number;
  delete_voicemail_days_limit?: number;
  voicemail_transcription?: boolean;
  voicemail_notification_by_email?: {
  enable?: boolean;
  include_voicemail_file?: boolean;
  include_voicemail_transcription?: boolean;
  forward_voicemail_to_emails?: boolean;
  emails?: ReadonlyArray<string>;
};
  voicemail_auto_assignment?: {
  enable?: boolean;
  voicemail_auto_assignment_type?: 1 | 2 | 3 | 4 | 5;
  voicemail_auto_assignment_during_active_work_session?: 0 | 1;
  voicemail_auto_assignment_content_id?: string;
  voicemail_auto_assignment_routine_profile_id?: string;
};
  voicemail_send_reminders_for_unresolved?: {
  enable?: boolean;
  send_alert_for_unresolved_voicemail_timeout?: number;
};
};
};
  "DELETE /contact_center/inboxes": void;
  "GET /contact_center/inboxes/messages": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  messages?: ReadonlyArray<{
  message_id?: string;
  inbox_id?: string;
  inbox_name?: string;
  engagement_id?: string;
  created_at?: string;
  flow_id?: string;
  flow_name?: string;
  queue_id?: string;
  cci_queue_id?: string;
  queue_name?: string;
  message_type?: "voicemail";
  download_url?: string;
  playback_url?: string;
  transcript_url?: string;
  message_duration?: number;
  consumer_number?: string;
  consumer_id?: string;
  consumer_display_name?: string;
  status?: "normal" | "deleted";
}>;
};
  "DELETE /contact_center/inboxes/messages": void;
  "GET /contact_center/inboxes/{inboxId}": {
  inbox_id?: string;
  inbox_name?: string;
  inbox_description?: string;
  inbox_type?: "voicemail";
  inbox_content_storage_location?: "US" | "AU" | "BR" | "CA" | "DE" | "JP" | "SG";
  last_modified_time?: string;
  modified_by?: string;
  voicemail?: {
  soft_delete?: boolean;
  soft_delete_days_limit?: number;
  voicemail_time_limit?: number;
  delete_voicemail_days_limit?: number;
  voicemail_transcription?: boolean;
  voicemail_notification_by_email?: {
  enable?: boolean;
  include_voicemail_file?: boolean;
  include_voicemail_transcription?: boolean;
  forward_voicemail_to_emails?: boolean;
  emails?: ReadonlyArray<string>;
};
  greeting_audio_asset_id?: string;
  voicemail_auto_assignment?: {
  enable?: boolean;
  voicemail_auto_assignment_type?: 1 | 2 | 3 | 4 | 5;
  voicemail_auto_assignment_during_active_work_session?: 0 | 1;
  voicemail_auto_assignment_content_id?: string;
  voicemail_auto_assignment_routine_profile_id?: string;
};
  voicemail_send_reminders_for_unresolved?: {
  enable?: boolean;
  send_alert_for_unresolved_voicemail_timeout?: number;
};
};
};
  "PATCH /contact_center/inboxes/{inboxId}": void;
  "PATCH /contact_center/inboxes/{inboxId}/email_notification": void;
  "GET /contact_center/inboxes/{inboxId}/email_notifications": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  email_notifications?: ReadonlyArray<{
  user_id?: string;
  email_notification?: boolean;
  display_name?: string;
  user_email?: string;
}>;
};
  "GET /contact_center/inboxes/{inboxId}/messages": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  messages?: ReadonlyArray<{
  message_id?: string;
  inbox_id?: string;
  inbox_name?: string;
  engagement_id?: string;
  created_at?: string;
  flow_id?: string;
  flow_name?: string;
  queue_id?: string;
  queue_name?: string;
  message_type?: "voicemail";
  download_url?: string;
  playback_url?: string;
  transcript_url?: string;
  message_duration?: number;
  consumer_number?: string;
  consumer_id?: string;
  consumer_display_name?: string;
  status?: "normal" | "deleted";
}>;
};
  "DELETE /contact_center/inboxes/{inboxId}/messages": void;
  "DELETE /contact_center/inboxes/{inboxId}/messages/{messageId}": void;
  "GET /contact_center/inboxes/{inboxId}/queues": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  queues?: ReadonlyArray<{
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  agents_count?: number;
  supervisors_count?: number;
  channel_types?: ReadonlyArray<"voice" | "chat" | "sms" | "video" | "in_app_chat">;
  channel?: "voice" | "video" | "messaging" | "email";
}>;
};
  "POST /contact_center/inboxes/{inboxId}/queues": void;
  "DELETE /contact_center/inboxes/{inboxId}/queues": void;
  "GET /contact_center/inboxes/{inboxId}/users": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  users?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
}>;
};
  "POST /contact_center/inboxes/{inboxId}/users": void;
  "DELETE /contact_center/inboxes/{inboxId}/users": void;
  "GET /contact_center/email/messages": {
  engagement_id?: string;
  messages?: ReadonlyArray<{
  content?: string;
  text: string;
  subject?: string;
  sent_time: string;
  from_type: "agent" | "customer" | "supervisor";
  user_id: string;
  user_name: string;
  from_address?: {
  name?: string;
  address?: string;
};
  to?: ReadonlyArray<{
  name?: string;
  address?: string;
}>;
  cc?: ReadonlyArray<{
  name?: string;
  address?: string;
}>;
  bcc?: ReadonlyArray<{
  name?: string;
  address?: string;
}>;
  content_mime_type?: string;
  message_type: "general" | "system";
  files?: ReadonlyArray<{
  file_type?: string;
  file_name?: string;
  file_size?: number;
  download_url?: string;
}>;
  inline_files?: ReadonlyArray<{
  file_type?: string;
  file_name?: string;
  file_size?: number;
  download_url?: string;
}>;
}>;
  has_more?: boolean;
  next_page_token?: string;
};
  "GET /contact_center/messaging/messages": {
  messages?: ReadonlyArray<{
  message_id: string;
  content?: {
  type: "text" | "html" | "markdown" | "quickReplies" | "card" | "carousel" | "form" | "article" | "video" | "attachment" | "multiAttachment" | "error";
  value: string;
};
  sent_time: string;
  sender_participant_id: string;
  sender_participant_name: string;
  message_type: "general" | "system";
}>;
  has_more: boolean;
  next_page_token?: string;
};
  "GET /contact_center/sms": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  from?: string;
  to?: string;
  sms?: ReadonlyArray<{
  direction?: "inbound" | "outbound";
  engagement_id?: string;
  contact_center_number?: string;
  start_time?: string;
  end_time?: string;
  consumer_number?: string;
  consumer_display_name?: string;
  queues?: ReadonlyArray<{
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
}>;
  agents?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
}>;
  country_name?: string;
  sms_types?: ReadonlyArray<"sms" | "mms">;
  total_sent_messages?: number;
  total_received_messages?: number;
  total_sent_files?: number;
  total_received_files?: number;
}>;
};
  "POST /contact_center/sms": ReadonlyArray<{
  contact_center_number: string;
  consumer_number: string;
  message_id?: string;
  success: boolean;
  description?: "Invalid consumer number. The format of the consumer number used is incorrect. E.164 format is required" | "Zoom Contact Center numbers cannot be used as consumer numbers. Retry using a non Zoom Contact Center number" | "The consumer number you have messaged has not opted in" | "This consumer number has opted out of receiving SMS from this Zoom contact center number" | "This consumer number is a part of the block list defined by your Zoom Contact Center account administrator and cannot be messaged" | "International messaging is not supported on this account";
}>;
  "GET /contact_center/voice_calls": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  from?: string;
  to?: string;
  voice_calls?: ReadonlyArray<{
  engagement_id?: string;
  direction?: "inbound" | "outbound";
  call_legs?: ReadonlyArray<"inbound" | "outbound">;
  distributions?: ReadonlyArray<"acd" | "non_acd">;
  types?: ReadonlyArray<"external_call" | "external_conference_call" | "external_callback_call" | "internal_call" | "internal_conference_call" | "internal_callback_call">;
  sub_types?: ReadonlyArray<"external_warm_conference_call" | "external_direct_conference_call" | "external_warm_transfer_call" | "external_direct_transfer_call" | "internal_warm_conference_call" | "internal_direct_conference_call" | "internal_warm_transfer_call" | "internal_direct_transfer_call" | "flow_initiated_outgoing_call">;
  caller_number?: string;
  caller_number_type?: "toll_free_number" | "virtual_service_number" | "byoc_number";
  callee_number?: string;
  callee_number_type?: "toll_free_number" | "virtual_service_number" | "byoc_number";
  start_time?: string;
  end_time?: string;
  total_duration?: number;
  consumer_number?: string;
  consumer_display_name?: string;
  queues?: ReadonlyArray<{
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
}>;
  agents?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
  user_email?: string;
  user_ip_address?: string;
  user_device_mac_address?: string;
  user_registered_sip_zone?: string;
  sip_zone_ip_address?: string;
  user_region?: string;
  team_ids?: ReadonlyArray<string>;
  team_names?: ReadonlyArray<string>;
}>;
  flows?: ReadonlyArray<{
  flow_id?: string;
  flow_name?: string;
}>;
  country_name?: string;
  recorded?: boolean;
  monitored?: boolean;
  inbox?: boolean;
  result?: "completed" | "short_abandoned" | "long_abandoned" | "hold_abandoned" | "long_calls" | "short_calls" | "hang_up_calls" | "overflowed_to_disconnect" | "overflowed_to_inbox" | "overflowed" | "abandon_quit" | "auto_closed" | "contained" | "missed" | "declined" | "callback_abandoned_by_consumer";
  caller_id?: string;
  calling_party?: "consumer" | "agent";
  charge?: string;
  rates?: ReadonlyArray<string>;
  charge_type?: "per_minute";
  session_border_controller_list?: ReadonlyArray<{
  session_border_controller_name?: string;
  session_border_controller_ip_address?: string;
  consumer_zoom_trunk_name?: string;
  consumer_sbc_ip_address?: string;
}>;
  voice_call_details?: ReadonlyArray<{
  engagement_id?: string;
  call_leg?: "inbound" | "outbound";
  distribution?: "acd" | "non_acd";
  type?: "external_call" | "external_conference_call" | "external_callback_call" | "internal_call" | "internal_conference_call" | "internal_callback_call";
  caller_number?: string;
  caller_number_type?: "toll_free_number" | "virtual_service_number" | "byoc_number";
  callee_number?: string;
  callee_number_type?: "toll_free_number" | "virtual_service_number" | "byoc_number";
  start_time?: string;
  end_time?: string;
  total_duration?: number;
  consumer_number?: string;
  consumer_display_name?: string;
  queue?: {
  cc_queue_id?: string;
  queue_name?: string;
};
  agents?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
  user_email?: string;
  user_ip_address?: string;
  user_device_mac_address?: string;
  user_registered_sip_zone?: string;
  sip_zone_ip_address?: string;
  user_region?: string;
  team_ids?: ReadonlyArray<string>;
  team_names?: ReadonlyArray<string>;
}>;
  flow?: {
  flow_id?: string;
  flow_name?: string;
};
  country_name?: string;
  recorded?: boolean;
  monitored?: boolean;
  inbox?: boolean;
  result?: "completed" | "short_abandoned" | "long_abandoned" | "hold_abandoned" | "long_calls" | "short_calls" | "hang_up_calls" | "overflowed_to_disconnect" | "overflowed_to_inbox" | "overflowed" | "abandon_quit" | "auto_closed" | "contained" | "missed" | "declined" | "callback_abandoned_by_consumer";
  caller_id?: string;
  calling_party?: "consumer" | "agent";
  charge?: string;
  rate?: string;
  charge_type?: "per_minute";
}>;
}>;
};
  "GET /contact_center/work_item/messages": {
  engagement_id?: string;
  messages?: ReadonlyArray<{
  message_id: string;
  content?: {
  type: "text" | "html" | "action" | "markdown" | "quickReplies" | "card" | "carousel" | "article" | "image" | "audio" | "video" | "link" | "attachment";
  value: string;
};
  message_details?: {
  content_type?: "text" | "html" | "action" | "markdown" | "quickReplies" | "card" | "carousel" | "article" | "image" | "audio" | "video" | "link" | "attachment";
  content?: string;
  text?: string;
  subject?: string;
  from_address?: {
  name?: string;
  address?: string;
};
  to_addresses?: ReadonlyArray<{
  name?: string;
  address?: string;
}>;
  files?: ReadonlyArray<{
  file_type?: string;
  file_name?: string;
  file_size?: number;
  download_url?: string;
}>;
  inline_files?: ReadonlyArray<{
  file_type?: string;
  file_name?: string;
  file_size?: number;
  download_url?: string;
}>;
};
  sent_time: string;
  sender_participant_id: string;
  sender_participant_name: string;
  message_type: "general" | "system";
  message_channel?: "email" | "sms";
}>;
  has_more: boolean;
  next_page_token?: string;
};
  "POST /contact_center/messages": {
  from: string;
  to: string;
  message_id: string;
  engagement_id?: string;
  new_engagement?: boolean;
  opt_in_required?: boolean;
};
  "GET /contact_center/engagements/notes": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  notes?: ReadonlyArray<{
  note_id?: string;
  engagement_id?: string;
  channel_type?: "voice" | "sms" | "chat" | "video";
  channel?: "voice" | "sms" | "chat" | "video" | "email";
  channel_source?: string;
  note?: string;
  last_modified_time?: string;
  user_id?: string;
}>;
};
  "GET /contact_center/engagements/{engagementId}/notes": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  notes?: ReadonlyArray<{
  note_id?: string;
  engagement_id?: string;
  channel_type?: "voice" | "sms" | "chat" | "video";
  channel?: "voice" | "sms" | "chat" | "video" | "email";
  channel_source?: string;
  note?: string;
  last_modified_time?: string;
  user_id?: string;
}>;
};
  "GET /contact_center/engagements/{engagementId}/notes/{noteId}": {
  note_id?: string;
  engagement_id?: string;
  channel_type?: "voice" | "sms" | "chat" | "video" | "email";
  channel?: "voice" | "sms" | "chat" | "video" | "email";
  channel_source?: "email_address";
  note?: string;
  last_modified_time?: string;
  user_id?: string;
};
  "PATCH /contact_center/engagements/{engagementId}/notes/{noteId}": void;
  "GET /contact_center/business_hours": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  business_hours?: ReadonlyArray<{
  business_hour_id?: string;
  business_hour_name?: string;
  timezone?: string;
  account_default?: boolean;
  queues_count?: number;
  flows_count?: number;
  hours?: {
  hour_type?: 1 | 2;
  custom_hours?: ReadonlyArray<{
  day_of_week?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  custom_hour_type?: 0 | 1 | 2;
  custom_hour_ranges?: ReadonlyArray<{
  start_time?: string;
  end_time?: string;
}>;
}>;
};
}>;
};
  "POST /contact_center/business_hours": {
  business_hour_id?: string;
  business_hour_name?: string;
  business_hour_description?: string;
  timezone?: string;
  account_default?: boolean;
  hours?: {
  hour_type?: 1 | 2;
  custom_hours?: ReadonlyArray<{
  day_of_week?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  custom_hour_type?: 0 | 1 | 2;
  custom_hour_ranges?: ReadonlyArray<{
  start_time?: string;
  end_time?: string;
}>;
}>;
};
};
  "GET /contact_center/business_hours/{businessHourId}": {
  business_hour_id?: string;
  business_hour_name?: string;
  business_hour_description?: string;
  timezone?: string;
  account_default?: boolean;
  hours?: {
  hour_type?: 1 | 2;
  custom_hours?: ReadonlyArray<{
  day_of_week?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  custom_hour_type?: 0 | 1 | 2;
  custom_hour_ranges?: ReadonlyArray<{
  start_time?: string;
  end_time?: string;
}>;
}>;
};
};
  "DELETE /contact_center/business_hours/{businessHourId}": void;
  "PATCH /contact_center/business_hours/{businessHourId}": void;
  "GET /contact_center/business_hours/{businessHourId}/flows": {
  next_page_token: string;
  page_size: number;
  total_records?: number;
  flows?: ReadonlyArray<{
  flow_id: string;
  flow_name: string;
}>;
};
  "GET /contact_center/business_hours/{businessHourId}/queues": {
  next_page_token: string;
  page_size: number;
  total_records?: number;
  queues?: ReadonlyArray<{
  queue_id: string;
  cc_queue_id: string;
  queue_name: string;
}>;
};
  "GET /contact_center/closures": {
  next_page_token: string;
  page_size: number;
  total_records?: number;
  closure_sets?: ReadonlyArray<{
  closure_set_id: string;
  closure_set_name: string;
  timezone: string;
  account_default: boolean;
  queues_count: number;
  flows_count: number;
  closures: ReadonlyArray<{
  closure_id?: string;
  closure_name: string;
  closure_hour_type: 1 | 2;
  start_time: string;
  end_time: string;
  recurring_frequency: 0 | 1 | 2 | 3;
  recurring_frequency_type?: 1 | 2;
  recurring_month?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  recurring_week_interval?: number;
  recurring_days_of_week?: ReadonlyArray<string>;
}>;
}>;
};
  "POST /contact_center/closures": {
  closure_set_id: string;
  closure_set_name: string;
  closure_set_description: string;
  timezone: string;
  account_default: boolean;
  closures: ReadonlyArray<{
  closure_id?: string;
  closure_name: string;
  closure_hour_type: 1 | 2;
  start_time: string;
  end_time: string;
  recurring_frequency: 0 | 1 | 2 | 3;
  recurring_frequency_type?: 1 | 2;
  recurring_month?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  recurring_week_interval?: number;
  recurring_days_of_week?: ReadonlyArray<string>;
}>;
};
  "GET /contact_center/closures/{closureSetId}": {
  closure_set_id: string;
  closure_set_name: string;
  closure_set_description: string;
  timezone: string;
  account_default: boolean;
  closures: ReadonlyArray<{
  closure_id?: string;
  closure_name: string;
  closure_hour_type: 1 | 2;
  start_time: string;
  end_time: string;
  recurring_frequency: 0 | 1 | 2 | 3;
  recurring_frequency_type?: 1 | 2;
  recurring_month?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  recurring_week_interval?: number;
  recurring_days_of_week?: ReadonlyArray<string>;
}>;
};
  "DELETE /contact_center/closures/{closureSetId}": void;
  "PATCH /contact_center/closures/{closureSetId}": void;
  "GET /contact_center/closures/{closureSetId}/flows": {
  next_page_token: string;
  page_size: number;
  total_records?: number;
  flows?: ReadonlyArray<{
  flow_id: string;
  flow_name: string;
}>;
};
  "GET /contact_center/closures/{closureSetId}/queues": {
  next_page_token: string;
  page_size: number;
  total_records?: number;
  queues?: ReadonlyArray<{
  queue_id: string;
  cc_queue_id: string;
  queue_name: string;
}>;
};
  "GET /contact_center/queue_templates": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  queue_templates?: ReadonlyArray<{
  template_id: string;
  template_name: string;
  template_description: string;
  channel: "voice" | "messaging" | "email" | "video" | "work_item";
  template_type: "add" | "update";
  template_status: "active" | "inactive";
  template_need_attention: boolean;
  modified_by: string;
  last_modified_time: string;
}>;
};
  "POST /contact_center/queue_templates": {
  queue_template_id: string;
  queue_template_name: string;
  queue_template_description?: string;
  channel: "voice" | "video" | "messaging" | "email" | "work_item";
  queue_template_type: "add" | "update";
  queue_template_status: "active" | "inactive";
  queue_template_need_attention?: boolean;
  modified_by: string;
  last_modified_time: string;
};
  "DELETE /contact_center/queue_templates": void;
  "GET /contact_center/queue_templates/{queueTemplateId}": {
  queue_template_id: string;
  queue_template_name: string;
  queue_template_description?: string;
  channel: "voice" | "video" | "messaging" | "email" | "work_item";
  queue_template_type: "add" | "update";
  queue_template_status: "active" | "inactive";
  queue_template_need_attention?: boolean;
  modified_by: string;
  last_modified_time: string;
};
  "DELETE /contact_center/queue_templates/{queueTemplateId}": void;
  "PATCH /contact_center/queue_templates/{queueTemplateId}": void;
  "GET /contact_center/queues": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  queues?: ReadonlyArray<{
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  agents_count?: number;
  supervisors_count?: number;
  channel_types?: ReadonlyArray<"voice" | "chat" | "sms" | "video" | "in_app_chat" | "messaging">;
  channel?: "voice" | "video" | "messaging" | "email";
  modified_by?: string;
  last_modified_time?: string;
}>;
};
  "POST /contact_center/queues": {
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  queue_description?: string;
  channel_types?: ReadonlyArray<"voice" | "chat" | "sms" | "video" | "in_app_chat" | "messaging" | "work_item">;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
};
  "POST /contact_center/queues/batch": ReadonlyArray<{
  cc_queue_id: string;
  queue_name: string;
  queue_description: string;
  channel: string;
}>;
  "DELETE /contact_center/queues/batch": void;
  "GET /contact_center/queues/{queueId}": {
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  queue_description?: string;
  dispositions_count?: number;
  disposition_sets_count?: number;
  channel_types?: ReadonlyArray<"voice" | "chat" | "sms" | "video" | "in_app_chat" | "messaging" | "work_item">;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  max_wait_time?: number;
  wrap_up_time?: number;
  max_engagement_in_queue?: number;
  short_abandon?: {
  enable?: boolean;
  threshold?: number;
};
  distribution_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  distribution_duration_in_seconds?: number;
  connecting_media_id?: string;
  connecting_media_filename?: string;
  transferring_media_id?: string;
  transferring_media_filename?: string;
  holding_media_id?: string;
  holding_media_filename?: string;
  waiting_room_name?: string;
  waiting_room_id?: string;
  message_accept?: "manual" | "auto";
  wrap_up_expiration?: boolean;
  overflow_type?: 0 | 1 | 2 | 3;
  overflow_to_goodbye_message?: boolean;
  overflow_to_goodbye_message_asset_id?: string;
  overflow_to_queue_id?: string;
  overflow_to_cc_queue_id?: string;
  overflow_to_flow_id?: string;
  overflow_to_inbox_id?: string;
  auto_close_message?: string;
  auto_close_message_enabled?: boolean;
  auto_close_timeout?: number;
  auto_close_alert_message?: string;
  auto_close_alert_message_enabled?: boolean;
  auto_close_alert_message_time?: number;
  recording_storage_location?: "us" | "au" | "br" | "ca" | "de" | "jp" | "sg";
  service_level_threshold_in_seconds?: number;
  service_level_exclude_short_abandoned_calls?: boolean;
  service_level_exclude_long_abandoned_calls?: boolean;
  service_level_exclude_abandoned_quit_engagements?: boolean;
  service_level_target_in_percentage?: number;
  agent_routing_profile_id?: string;
  agent_routing_profile_name?: string;
  consumer_routing_profile_id?: string;
  consumer_routing_profile_name?: string;
  caller_ids?: ReadonlyArray<string>;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
  engagement_acceptance?: {
  acceptance_type?: "auto" | "manual";
  enable_agent_alert_tone?: boolean;
  enable_agent_whisper_announcement?: boolean;
  agent_whisper_announcement_asset_id?: string;
  enable_agent_greeting?: boolean;
  agent_greeting_asset_id?: string;
  greeting_filename?: string;
  whisper_filename?: string;
};
  inbound_launch_url_info?: {
  config?: ReadonlyArray<{
  launch_trigger?: "ringing" | "answered" | "ended";
  launch_url?: string;
}>;
  enable_launch_url?: boolean;
};
  outbound_launch_url_info?: {
  config?: ReadonlyArray<{
  launch_trigger?: "initiated" | "connected" | "ended";
  url?: string;
}>;
  enable_launch_url?: boolean;
};
  queue_waiting_experience?: {
  default_connecting_music_file_id?: string;
  default_connecting_music_name?: string;
  default_connecting_music_url?: string;
  connecting_music_asset_id?: string;
  connecting_music_filename?: string;
  connecting_music_url?: string;
  default_transfer_music_url?: string;
  transfer_music_asset_id?: string;
  transfer_music_filename?: string;
  transfer_music_url?: string;
  default_hold_music_file_id?: string;
  default_hold_music_name?: string;
  default_hold_music_url?: string;
  holding_music_asset_id?: string;
  holding_music_filename?: string;
  holding_music_url?: string;
};
  inbound_dispositions?: {
  enable_disposition?: boolean;
  queue_disposition_type?: number;
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
}>;
  disposition_sets?: ReadonlyArray<{
  disposition_set_id?: string;
  disposition_set_name?: string;
}>;
  default_disposition_id?: string;
  default_disposition_name?: string;
};
  outbound_dispositions?: {
  enable_disposition?: boolean;
  queue_disposition_type?: number;
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
}>;
  disposition_sets?: ReadonlyArray<{
  disposition_set_id?: string;
  disposition_set_name?: string;
}>;
  default_disposition_id?: string;
  default_disposition_name?: string;
};
  wrap_up_after_transfer?: boolean;
  engagement_distribution?: "longest_idle" | "sequential" | "rotating" | "simultaneous" | "most_available" | "manual" | "longest_ready" | "longest_idle_for_this_queue";
  outbound_settings?: {
  enable_outbound_calls?: boolean;
  queue_caller_ids?: ReadonlyArray<string>;
  outbound_launch_url_info?: {
  enable_launch_url?: boolean;
  config?: ReadonlyArray<{
  launch_trigger?: "initiated" | "connected" | "ended";
  url?: string;
}>;
};
  outbound_labels?: {
  outbound_call_duration_lower_threshold?: number;
  outbound_call_duration_upper_threshold?: number;
};
  outbound_transferring_media_id?: string;
  outbound_holding_media_id?: string;
  outbound_notes_asset_id?: string;
  outbound_disposition_required?: boolean;
  outbound_default_disposition_id?: string;
  outbound_wrap_up_time?: number;
  outbound_wrap_up_expiration?: boolean;
  outbound_wrap_up_after_transfer?: boolean;
};
  scheduled_callback_settings?: {
  enable_scheduled_callback?: boolean;
  consumer_inquiry_option?: string;
  greeting_message?: {
  custom_media_asset_id?: string;
  language_code?: string;
  voice_id?: "Danielle" | "Gregory" | "Ivy" | "Joanna" | "Joey" | "Justin" | "Kendra" | "Kevin" | "Kimberly" | "Matthew" | "Ruth" | "Salli" | "Stephen";
  message_text?: string;
};
};
};
  "DELETE /contact_center/queues/{queueId}": void;
  "PATCH /contact_center/queues/{queueId}": void;
  "GET /contact_center/queues/{queueId}/agents": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  agents?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
  role_id?: string;
  role_name?: string;
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  user_access?: "active" | "inactive";
  opt_in_out_status?: 0 | 1 | 2;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
}>;
};
  "POST /contact_center/queues/{queueId}/agents": {
  agents?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
  role_id?: string;
  role_name?: string;
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  user_access?: "active" | "inactive";
  opt_in_out_status?: 0 | 1 | 2;
}>;
};
  "DELETE /contact_center/queues/{queueId}/agents/{userId}": void;
  "PATCH /contact_center/queues/{queueId}/agents/{userId}": void;
  "GET /contact_center/queues/{queueId}/dispositions": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
  disposition_description?: string;
  status?: "inactive" | "active";
  last_modified_time?: string;
  modified_by?: string;
  queue_name?: string;
  cc_queue_id?: string;
  assign_type?: "inbound" | "outbound";
}>;
};
  "POST /contact_center/queues/{queueId}/dispositions": {
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
  disposition_description?: string;
  status?: "inactive" | "active";
  last_modified_time?: string;
  modified_by?: string;
  queue_name?: string;
  cc_queue_id?: string;
  assign_type?: "inbound" | "outbound";
}>;
};
  "GET /contact_center/queues/{queueId}/dispositions/sets": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  disposition_sets?: ReadonlyArray<{
  disposition_set_id?: string;
  disposition_set_name?: string;
  disposition_set_description?: string;
  status?: "inactive" | "active";
  last_modified_time?: string;
  modified_by?: string;
  queue_name?: string;
  cc_queue_id?: string;
  assign_type?: "inbound" | "outbound";
}>;
};
  "POST /contact_center/queues/{queueId}/dispositions/sets": {
  disposition_sets?: ReadonlyArray<{
  disposition_set_id?: string;
  disposition_set_name?: string;
  disposition_set_description?: string;
  status?: "inactive" | "active";
  last_modified_time?: string;
  modified_by?: string;
  queue_name?: string;
  cc_queue_id?: string;
  assign_type?: "inbound" | "outbound";
}>;
};
  "DELETE /contact_center/queues/{queueId}/dispositions/sets/{dispositionSetId}": void;
  "DELETE /contact_center/queues/{queueId}/dispositions/{dispositionId}": void;
  "GET /contact_center/queues/{queueId}/interrupt": {
  bucket_id?: string | null;
  audio_interrupts?: ReadonlyArray<{
  audio_asset_id?: string;
  audio_filename?: string;
  audio_url?: string;
  play_after_seconds?: number;
  is_loop?: boolean;
  loop_interval?: number | null;
  disable_audio?: boolean;
}>;
  notify_interrupts?: {
  play_after_seconds?: number;
  is_loop?: boolean;
  loop_interval?: number | null;
  notify_position_in_queue?: {
  custom_audio_type?: "standard" | "advanced";
  custom_audio?: ReadonlyArray<{
  order?: number;
  audio_asset_id?: string | null;
  audio_filename?: string | null;
  audio_variable?: "customer_position" | "wait_time";
}>;
  over_limit_custom_audio?: ReadonlyArray<{
  order?: number;
  audio_asset_id?: string | null;
  audio_filename?: string | null;
  audio_variable?: "customer_position" | "wait_time";
}>;
};
  notify_estimated_wait_time?: {
  custom_audio_type?: "standard" | "advanced";
  custom_audio?: ReadonlyArray<{
  order?: number;
  audio_asset_id?: string | null;
  audio_filename?: string | null;
  audio_variable?: "customer_position" | "wait_time";
}>;
  over_limit_custom_audio?: ReadonlyArray<{
  order?: number;
  audio_asset_id?: string | null;
  audio_filename?: string | null;
  audio_variable?: "customer_position" | "wait_time";
}>;
  backup_custom_audio?: ReadonlyArray<{
  order?: number;
  audio_asset_id?: string | null;
  audio_filename?: string | null;
  audio_variable?: "customer_position" | "wait_time";
}>;
};
};
};
  "PATCH /contact_center/queues/{queueId}/interrupt": void;
  "POST /contact_center/queues/{queueId}/interrupt_menu": {
  queue_id?: string;
  menu_language_code?: "zh-CN" | "zh-TW" | "yue-CN" | "cmn-CN" | "da-DK" | "nl-NL" | "en-AU" | "en-NZ" | "en-GB" | "en-US" | "fr-CA" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "pl-PL" | "pt-BR" | "pt-PT" | "ro-RO" | "ru-RU" | "es-ES" | "es-MX" | "es-US" | "sv-SE" | "tr-TR";
  voice_id?: "Danielle" | "Gregory" | "Ivy" | "Joanna" | "Joey" | "Justin" | "Kendra" | "Kevin" | "Kimberly" | "Matthew" | "Ruth" | "Salli" | "Stephen";
  accept_timeout?: number;
  play_interval?: number;
  loop_play?: boolean;
  loop_interval?: number;
  menu_options?: ReadonlyArray<{
  keypress: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "*" | "#";
  menu_action: "request_callback" | "leave_voicemail" | "route_flow" | "repeat_menu";
  play_message?: string;
  play_message_custom_audio?: {
  custom_audio_type?: "advanced" | "standard";
  custom_audio?: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  route_to_flow_id?: string;
  voice_mail_inbox_id?: string;
  callback_settings?: {
  callback_number_type?: "flow_entry_id" | "account_default_caller_id" | "queue_default_caller_id";
  callback_confirm_keypress?: "#" | "*";
  accept_callback_timeout?: number;
  enable_offer_phone_number?: boolean;
  offer_number_message?: string;
  offer_number_message_custom_audio?: {
  custom_audio_type?: "advanced" | "standard";
  custom_audio?: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  callback_confirm_messsage?: string;
  callback_confirm_message?: string;
  callback_confirm_message_custom_audio?: {
  custom_audio_type?: "advanced" | "standard";
  custom_audio?: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  enable_offer_extension_number?: boolean;
  offer_extension_number_message?: string;
  offer_extension_number_message_custom_audio?: {
  custom_audio_type?: "advanced" | "standard";
  custom_audio?: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  confirm_extension_number_message?: string;
  confirm_extension_number_message_custom_audio?: {
  custom_audio_type?: "advanced" | "standard";
  custom_audio?: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  outbound_dial_option?: "auto_greeting" | "directly_connect";
  outbound_dial_greeting_message?: string;
  outbound_dial_greeting_message_custom_audio?: {
  custom_audio_type?: "advanced" | "standard";
  custom_audio?: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  callback_timeout?: number;
  enable_callback_cancel_message?: boolean;
  callback_cancel_message?: string;
  callback_cancel_message_custom_audio?: {
  custom_audio_type?: "advanced" | "standard";
  custom_audio?: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  callback_returning_message?: string;
  callback_returning_message_custom_audio?: {
  custom_audio_type?: "advanced" | "standard";
  custom_audio?: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
  enable_callback_offer_time?: boolean;
  callback_offer_timezone_id?: string;
  callback_offer_time?: ReadonlyArray<{
  callback_offer_day?: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  callback_offer_start_time?: string;
  callback_offer_end_time?: string;
}>;
  enable_callback_return_time?: boolean;
  callback_return_timezone_id?: string;
  callback_return_day?: ReadonlyArray<{
  callback_return_day?: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  callback_return_start_time?: string;
  callback_return_end_time?: string;
}>;
};
}>;
  invalid_option_message_custom_audio?: {
  custom_audio_type?: "advanced" | "standard";
  custom_audio?: ReadonlyArray<{
  order: number;
  audio_asset_id?: string;
  audio_variable?: "keypress";
}>;
};
};
  "DELETE /contact_center/queues/{queueId}/interrupt_menu": void;
  "GET /contact_center/queues/{queueId}/operating_hours": {
  business_hour_id: string;
  business_hour_name: string;
  closure_set_id?: string;
  closure_set_name?: string;
  account_default_business_hour: boolean;
  account_default_closure_set?: boolean;
  operating_hours_overflow_enabled?: boolean;
  overflow_to_default_goodbye_message?: boolean;
  overflow_to_goodbye_message_asset_id?: string;
  overflow_to_goodbye_message_asset_name?: string;
  overflow_to_queue_id?: string;
  overflow_to_queue_name?: string;
  overflow_to_flow_id?: string;
  overflow_to_flow_name?: string;
  overflow_to_inbox_id?: string;
  overflow_to_inbox_name?: string;
};
  "PATCH /contact_center/queues/{queueId}/operating_hours": void;
  "GET /contact_center/queues/{queueId}/recordings": {
  next_page_token?: string;
  page_size?: number;
  from?: string;
  to?: string;
  recordings?: ReadonlyArray<{
  recording_id?: string;
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  recording_duration?: number;
  download_url?: string;
  transcript_url?: string;
  playback_url?: string;
  recording_start_time?: string;
  recording_end_time?: string;
  user_id?: string;
  display_name?: string;
  user_email?: string;
  recording_type?: "on_demand" | "automatic";
  channel_type?: "voice" | "video";
  channel?: "voice" | "video";
  direction?: "inbound" | "outbound";
  owner_id?: string;
  owner_name?: string;
  owner_type?: "user" | "queue";
  engagement_id?: string;
  flow_name?: string;
  flow_id?: string;
  consumer_name?: string;
  consumer_number?: string;
  consumers?: ReadonlyArray<{
  consumer_name?: string;
  consumer_number?: string;
}>;
  exemption?: boolean;
  team_id?: string;
  conference_participant?: ReadonlyArray<{
  user_id?: string;
  user_name?: string;
  queue_id?: string;
  queue_name?: string;
  team_id?: string;
  team_name?: string;
  contact_id?: string;
  contact_name?: string;
  contact_number?: string;
  participant_type?: "agent" | "customer" | "supervisor" | "outbound";
}>;
  segment_type?: "inbound" | "conference";
  reason_details?: string;
  team_name?: string;
}>;
};
  "DELETE /contact_center/queues/{queueId}/recordings": void;
  "DELETE /contact_center/queues/{queueId}/scheduled_callbacks/attendees/{attendeeId}": void;
  "POST /contact_center/queues/{queueId}/scheduled_callbacks/events": {
  attendees?: ReadonlyArray<{
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  attendee_id?: string;
}>;
};
  "GET /contact_center/queues/{queueId}/scheduled_callbacks/supportive_slots": {
  timezone?: string;
  slot_duration?: number;
  booking_days?: ReadonlyArray<{
  slot_date?: string;
  slots?: ReadonlyArray<{
  available_count?: number;
  start_time?: string;
  availability_status?: "available" | "unavailable";
}>;
}>;
};
  "GET /contact_center/queues/{queueId}/supervisors": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  supervisors?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
  user_email?: string;
  role_id?: string;
  role_name?: string;
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  user_access?: "active" | "inactive";
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
  cc_user_id?: string;
}>;
};
  "POST /contact_center/queues/{queueId}/supervisors": {
  supervisors?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
  role_id?: string;
  role_name?: string;
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  user_access?: "active" | "inactive";
}>;
};
  "DELETE /contact_center/queues/{queueId}/supervisors/{userId}": void;
  "POST /contact_center/queues/{queueId}/teams": {
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
};
  "DELETE /contact_center/queues/{queueId}/teams": void;
  "DELETE /contact_center/queues/{queueId}/teams/{teamId}": void;
  "PUT /contact_center/{engagementId}/rtms_app/status": void;
  "GET /contact_center/engagements/{engagementId}/recordings": {
  next_page_token?: string;
  page_size?: number;
  from?: string;
  to?: string;
  recordings?: ReadonlyArray<{
  recording_id?: string;
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  recording_duration?: number;
  download_url?: string;
  transcript_url?: string;
  playback_url?: string;
  recording_start_time?: string;
  recording_end_time?: string;
  user_id?: string;
  display_name?: string;
  user_email?: string;
  recording_type?: "on_demand" | "automatic";
  channel_type?: "voice" | "video";
  channel?: "voice" | "video";
  direction?: "inbound" | "outbound";
  owner_id?: string;
  owner_name?: string;
  owner_type?: "user" | "queue";
  engagement_id?: string;
  flow_name?: string;
  flow_id?: string;
  consumer_name?: string;
  consumer_number?: string;
  consumers?: ReadonlyArray<{
  consumer_name?: string;
  consumer_number?: string;
}>;
  exemption?: boolean;
  team_id?: string;
  conference_participant?: ReadonlyArray<{
  user_id?: string;
  user_name?: string;
  queue_id?: string;
  queue_name?: string;
  team_id?: string;
  team_name?: string;
  contact_id?: string;
  contact_name?: string;
  contact_number?: string;
  participant_type?: "agent" | "customer" | "supervisor" | "outbound";
}>;
  segment_type?: "inbound" | "conference";
  reason_details?: string;
  team_name?: string;
}>;
};
  "DELETE /contact_center/engagements/{engagementId}/recordings": void;
  "GET /contact_center/recordings": {
  next_page_token?: string;
  page_size?: number;
  from?: string;
  to?: string;
  recordings?: ReadonlyArray<{
  recording_id?: string;
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  recording_duration?: number;
  download_url?: string;
  transcript_url?: string;
  playback_url?: string;
  recording_start_time?: string;
  recording_end_time?: string;
  user_id?: string;
  display_name?: string;
  user_email?: string;
  recording_type?: "on_demand" | "automatic";
  channel_type?: "voice" | "video";
  channel?: "voice" | "video";
  direction?: "inbound" | "outbound";
  owner_id?: string;
  owner_name?: string;
  owner_type?: "user" | "queue";
  engagement_id?: string;
  flow_name?: string;
  flow_id?: string;
  consumer_name?: string;
  consumer_number?: string;
  consumers?: ReadonlyArray<{
  consumer_name?: string;
  consumer_number?: string;
}>;
  exemption?: boolean;
  team_id?: string;
  conference_participant?: ReadonlyArray<{
  user_id?: string;
  user_name?: string;
  queue_id?: string;
  queue_name?: string;
  team_id?: string;
  team_name?: string;
  contact_id?: string;
  contact_name?: string;
  contact_number?: string;
  participant_type?: "agent" | "customer" | "supervisor" | "outbound";
}>;
  segment_type?: "inbound" | "conference";
  reason_details?: string;
  team_name?: string;
}>;
};
  "DELETE /contact_center/recordings/{recordingId}": void;
  "GET /contact_center/regions": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  regions?: ReadonlyArray<{
  region_id?: string;
  region_name?: string;
  is_main_region?: boolean;
  sip_zone_id?: string;
  sip_zone_name?: string;
  users_count?: number;
  last_modified_time?: string;
}>;
};
  "POST /contact_center/regions": {
  region_name?: string;
  region_id?: string;
  sip_zone_id?: string;
};
  "GET /contact_center/regions/{regionId}": {
  region_id?: string;
  region_name?: string;
  sip_zone_id?: string;
  sip_zone_name?: string;
  is_main_region?: boolean;
};
  "DELETE /contact_center/regions/{regionId}": void;
  "PATCH /contact_center/regions/{regionId}": void;
  "GET /contact_center/regions/{regionId}/users": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  users?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
  role_id?: string;
  role_name?: string;
}>;
};
  "POST /contact_center/regions/{regionId}/users": ZoomContactCenterFullApiSchemaJsonValue;
  "GET /contact_center/analytics/agents/leg_metrics": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  users?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
  user_email?: string;
  leg_metrics?: ReadonlyArray<{
  channel?: "voice" | "video" | "messaging" | "email";
  channel_source?: "in_app_chat" | "web_chat" | "sms" | "facebook_messenger" | "whatsapp" | "instagram";
  engagement_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  agent_offered?: number;
  refused_engagement?: boolean;
  handled_engagement?: boolean;
  handle_duration?: number;
  agent_first_response_duration?: number;
  ring_duration?: number;
  conversation_duration?: number;
  hold_count?: number;
  hold_duration?: number;
  warm_conference?: number;
  warm_conference_duration?: number;
  conference_count?: number;
  conference_duration?: number;
  warm_transfer_initiated?: number;
  warm_transfer_completed?: number;
  warm_transfer_duration?: number;
  direct_transfer?: boolean;
  transferred_initiated?: number;
  transferred_completed?: number;
  wrap_up_duration?: number;
  disposition_id?: string;
  disposition_name?: string;
  agent_start_time?: string;
  agent_end_time?: string;
}>;
}>;
};
  "GET /contact_center/analytics/agents/status_history": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  statuses?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
  status_id?: string;
  occupied_queue_id?: string;
  occupied_queue_name?: string;
  occupied_engagement_id?: string;
  occupied_engagements?: ReadonlyArray<{
  engagement_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
}>;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied" | "string";
  sub_status_id?: string;
  sub_status_name?: "Inbound" | "Transferring in" | "Wrapping up" | "Holding" | "Transferring out" | "Taking Over" | "Monitoring" | "Barging" | "Whispering" | "Outbound" | "string";
  start_time?: string;
  end_time?: string;
  duration?: number;
}>;
};
  "GET /contact_center/analytics/agents/time_sheets": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  agents?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
  ready_duration?: number;
  ready_percentage?: number;
  not_ready_duration?: number;
  not_ready_percentage?: number;
  occupied_duration?: number;
  occupied_percentage?: number;
  online_duration?: number;
  offline_duration?: number;
  inbound_average_voice_call_talking_duration?: number;
  average_video_call_talking_duration?: number;
  average_wrap_up_duration?: number;
  start_time_interval?: string;
  end_time_interval?: string;
  total_outbound_voice_call?: number;
  total_outbound_voice_call_duration?: number;
  total_inbound_voice_call?: number;
  total_inbound_voice_call_duration?: number;
}>;
};
  "GET /contact_center/analytics/historical/details/metrics": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  details?: ReadonlyArray<{
  engagement_id?: string;
  channels?: ReadonlyArray<{
  channel?: "voice" | "video" | "messaging" | "email";
  channel_source?: "web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp" | "email_address";
}>;
  direction?: "inbound" | "outbound";
  consumer_number?: string;
  consumer_id?: string;
  consumer_name?: string;
  consumer_country_name?: string;
  consumer_country_code?: string;
  start_time?: string;
  results?: "completed" | "contained" | "short_abandoned" | "long_abandoned" | "hold_abandoned" | "overflowed" | "overflowed_to_inbox" | "overflowed_to_disconnect" | "long_calls" | "short_calls" | "hang_up_calls" | "auto_closed" | "abandon_quit" | "callback_abandoned_by_consumer";
  total_duration?: number;
  ivr_duration?: number;
  waiting_duration?: number;
  talking_duration?: number;
  hold_duration?: number;
  wrap_up_duration?: number;
  disposition_id?: string;
  disposition_name?: string;
  flows?: ReadonlyArray<{
  flow_id?: string;
  flow_name?: string;
  flow_version?: string;
}>;
  queues?: ReadonlyArray<{
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
}>;
  agents?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
}>;
  total_flow_duration?: number;
  queue_wait_type?: "live_waiting" | "callback";
  last_widget_name?: string;
  agent_first_message_speed?: number;
  dialed_numbers?: ReadonlyArray<string>;
  callback_waiting_duration?: number;
  callback_pending_duration?: number;
  handling_duration?: number;
  ring_duration?: number;
  required_skills?: ReadonlyArray<{
  skill_id?: string;
  skill_name?: string;
  minimum_proficiency_level?: number;
}>;
  optional_skills?: ReadonlyArray<{
  skill_id?: string;
  skill_name?: string;
  matched?: boolean;
}>;
  agent_skills?: ReadonlyArray<{
  skill_id?: string;
  skill_name?: string;
  proficiency_level?: number;
}>;
}>;
};
  "GET /contact_center/analytics/historical/queues/agents/metrics": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  agents?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
  voice?: {
  offers_total?: number;
  offers_acd?: number;
  offers_non_acd?: number;
  offers_answered?: number;
  offers_answered_acd_inbound?: number;
  offers_missed?: number;
  offers_declined?: number;
  total_transferred_in?: number;
  total_transferred_out?: number;
  hold_hang_up?: number;
  upgraded_to_video_call?: number;
  total_inbound_handling_duration?: number;
  average_inbound_handling_duration?: number;
  longest_inbound_handling_duration?: number;
  average_inbound_answer_duration?: number;
  total_inbound_answer_duration?: number;
  longest_inbound_answer_duration?: number;
  total_inbound_ring_duration?: number;
  average_inbound_ring_duration?: number;
  longest_inbound_ring_duration?: number;
  total_inbound_hold_duration?: number;
  average_inbound_hold_duration?: number;
  longest_inbound_hold_duration?: number;
  total_inbound_wrap_up_duration?: number;
  average_inbound_wrap_up_duration?: number;
  longest_inbound_wrap_up_duration?: number;
  total_outbound?: number;
  short_outbound?: number;
  long_outbound?: number;
  hangup_outbound?: number;
  total_outbound_ring_duration?: number;
  average_outbound_ring_duration?: number;
  longest_outbound_ring_duration?: number;
  total_outbound_handling_duration?: number;
  average_outbound_handling_duration?: number;
  longest_outbound_handling_duration?: number;
  total_outbound_answer_duration?: number;
  average_outbound_answer_duration?: number;
  longest_outbound_answer_duration?: number;
  total_outbound_wrap_up_duration?: number;
  average_outbound_wrap_up_duration?: number;
  longest_outbound_wrap_up_duration?: number;
  total_outbound_hold_duration?: number;
  average_outbound_hold_duration?: number;
  longest_outbound_hold_duration?: number;
};
}>;
};
  "GET /contact_center/analytics/historical/queues/metrics": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  queues?: ReadonlyArray<{
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  total_inbound?: number;
  total_completed?: number;
  total_transferred_in?: number;
  total_transferred_out?: number;
  voice?: {
  service_level?: number;
  short_abandoned?: number;
  long_abandoned?: number;
  hold_abandoned?: number;
  total_missed?: number;
  total_overflowed?: number;
  upgraded_to_video_call?: number;
  inbound_average_waiting_duration?: number;
  inbound_shortest_waiting_duration?: number;
  inbound_longest_waiting_duration?: number;
  inbound_average_talking_duration?: number;
  inbound_longest_talking_duration?: number;
  inbound_shortest_talking_duration?: number;
  inbound_average_wrap_up_duration?: number;
  inbound_longest_wrap_up_duration?: number;
  inbound_shortest_wrap_up_duration?: number;
  total_outbound?: number;
  hangup_outbound?: number;
  short_outbound?: number;
  long_outbound?: number;
  start_time_interval?: string;
  end_time_interval?: string;
  total_answered_users?: number;
  total_answer_duration?: number;
  total_hold_duration?: number;
  total_wrap_up_duration?: number;
  total_queue_wait_duration?: number;
  total_abandoned_duration?: number;
  total_outbound_answer_duration?: number;
  total_outbound_hold_duration?: number;
  total_outbound_wrap_up_duration?: number;
  average_outbound_answer_duration?: number;
  average_outbound_hold_duration?: number;
  average_outbound_wrap_up_duration?: number;
};
  sms?: {
  start_time_interval?: string;
  end_time_interval?: string;
  total_sent?: number;
  average_sent?: number;
  total_auto_closed?: number;
  total_released?: number;
  total_abandoned?: number;
  total_overflowed?: number;
  upgraded_to_voice_call?: number;
  upgraded_to_video_call?: number;
  inbound_average_waiting_duration?: number;
  inbound_shortest_waiting_duration?: number;
  inbound_longest_waiting_duration?: number;
  inbound_average_messaging_duration?: number;
  inbound_longest_messaging_duration?: number;
  inbound_shortest_messaging_duration?: number;
  average_agent_first_message_speed?: number;
  shortest_agent_first_message_speed?: number;
  longest_agent_first_message_speed?: number;
  total_outbound?: number;
  total_outbound_answer_duration?: number;
  total_outbound_wrap_up_duration?: number;
  average_outbound_answer_duration?: number;
  average_outbound_wrap_up_duration?: number;
};
  chat?: {
  start_time_interval?: string;
  end_time_interval?: string;
  service_level?: number;
  total_sent?: number;
  average_sent?: number;
  total_abandoned?: number;
  total_auto_closed?: number;
  total_released?: number;
  upgraded_to_voice_call?: number;
  upgraded_to_video_call?: number;
  average_waiting_duration?: number;
  shortest_waiting_duration?: number;
  longest_waiting_duration?: number;
  average_messaging_duration?: number;
  longest_messaging_duration?: number;
  shortest_messaging_duration?: number;
  average_agent_first_message_speed?: number;
  shortest_agent_first_message_speed?: number;
  longest_agent_first_message_speed?: number;
};
  video?: {
  start_time_interval?: string;
  end_time_interval?: string;
  service_level?: number;
  short_abandoned?: number;
  long_abandoned?: number;
  hold_abandoned?: number;
  total_missed?: number;
  total_overflowed?: number;
  average_waiting_duration?: number;
  shortest_waiting_duration?: number;
  longest_waiting_duration?: number;
  average_talking_duration?: number;
  longest_talking_duration?: number;
  shortest_talking_duration?: number;
  average_wrap_up_duration?: number;
  longest_wrap_up_duration?: number;
  shortest_wrap_up_duration?: number;
};
  messaging?: {
  channel_sources?: ReadonlyArray<"web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp">;
  start_time_interval?: string;
  end_time_interval?: string;
  service_level?: number;
  total_sent?: number;
  average_sent?: number;
  total_auto_closed?: number;
  total_released?: number;
  total_abandoned?: number;
  total_overflowed?: number;
  upgraded_to_voice_call?: number;
  upgraded_to_video_call?: number;
  inbound_average_waiting_duration?: number;
  inbound_shortest_waiting_duration?: number;
  inbound_longest_waiting_duration?: number;
  inbound_average_messaging_duration?: number;
  inbound_longest_messaging_duration?: number;
  inbound_shortest_messaging_duration?: number;
  average_agent_first_message_speed?: number;
  shortest_agent_first_message_speed?: number;
  longest_agent_first_message_speed?: number;
  total_outbound?: number;
  total_outbound_answer_duration?: number;
  total_outbound_wrap_up_duration?: number;
  average_outbound_answer_duration?: number;
  average_outbound_wrap_up_duration?: number;
};
  email?: {
  channel_sources?: ReadonlyArray<"email_address">;
  start_time_interval?: string;
  end_time_interval?: string;
  service_level?: number;
  total_overflowed?: number;
  total_auto_closed?: number;
  total_offered?: number;
  total_released?: number;
  total_offers?: number;
  total_offers_acd?: number;
  total_offers_non_acd?: number;
  total_offers_answered?: number;
  total_offers_missed?: number;
  total_offers_declined?: number;
  total_handled?: number;
  total_transferred_out_within_queue?: number;
  total_transferred_out_of_queue?: number;
  total_transferred_in_to_agent?: number;
  total_transferred_in_to_queue?: number;
  inbound_average_waiting_duration?: number;
  inbound_shortest_waiting_duration?: number;
  inbound_longest_waiting_duration?: number;
  inbound_average_messaging_duration?: number;
  inbound_longest_messaging_duration?: number;
  inbound_shortest_messaging_duration?: number;
  inbound_total_messaging_duration?: number;
  inbound_average_agent_first_reply_duration?: number;
  inbound_longest_agent_first_reply_duration?: number;
  inbound_shortest_agent_first_reply_duration?: number;
  inbound_average_agent_reply_duration?: number;
  inbound_longest_agent_reply_duration?: number;
  inbound_shortest_agent_reply_duration?: number;
  inbound_average_inactive_duration?: number;
  inbound_longest_inactive_duration?: number;
  inbound_shortest_inactive_duration?: number;
  inbound_total_inactive_duration?: number;
  total_outbound?: number;
  outbound_messages_sent?: number;
  outbound_average_active_duration?: number;
  outbound_longest_active_duration?: number;
  outbound_total_active_duration?: number;
  outbound_average_inactive_duration?: number;
  outbound_longest_inactive_duration?: number;
  outbound_total_inactive_duration?: number;
};
}>;
};
  "GET /contact_center/analytics/historical/queues/{queueId}/agents/metrics": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  agents?: ReadonlyArray<{
  user_id?: string;
  display_name?: string;
  total_inbound?: number;
  total_completed?: number;
  total_transferred_in?: number;
  total_transferred_out?: number;
  voice?: {
  upgraded_to_video_call?: number;
  total_declined?: number;
  total_missed?: number;
  inbound_average_talking_duration?: number;
  inbound_longest_talking_duration?: number;
  inbound_shortest_talking_duration?: number;
  inbound_average_wrap_up_duration?: number;
  inbound_longest_wrap_up_duration?: number;
  inbound_shortest_wrap_up_duration?: number;
  total_outbound?: number;
  hangup_outbound?: number;
  short_outbound?: number;
  long_outbound?: number;
  start_time_interval?: string;
  end_time_interval?: string;
  total_answered_users?: number;
  total_answer_duration?: number;
  total_hold_duration?: number;
  total_wrap_up_duration?: number;
  total_queue_wait_duration?: number;
  total_abandoned_duration?: number;
  total_outbound_answer_duration?: number;
  total_outbound_hold_duration?: number;
  total_outbound_wrap_up_duration?: number;
  average_outbound_answer_duration?: number;
  average_outbound_hold_duration?: number;
  average_outbound_wrap_up_duration?: number;
};
  video?: {
  total_declined?: number;
  total_missed?: number;
  average_talking_duration?: number;
  longest_talking_duration?: number;
  shortest_talking_duration?: number;
  average_wrap_up_duration?: number;
  longest_wrap_up_duration?: number;
  shortest_wrap_up_duration?: number;
};
  chat?: {
  total_sent?: number;
  average_sent?: number;
  total_abandoned?: number;
  total_auto_closed?: number;
  total_released?: number;
  total_overflowed?: number;
  upgraded_to_voice_call?: number;
  upgraded_to_video_call?: number;
  average_messaging_duration?: number;
  longest_messaging_duration?: number;
  shortest_messaging_duration?: number;
  average_waiting_duration?: number;
  shortest_waiting_duration?: number;
  longest_waiting_duration?: number;
  average_agent_first_message_speed?: number;
  shortest_agent_first_message_speed?: number;
  longest_agent_first_message_speed?: number;
};
  sms?: {
  total_sent?: number;
  average_sent?: number;
  total_abandoned?: number;
  total_auto_closed?: number;
  total_released?: number;
  total_overflowed?: number;
  upgraded_to_voice_call?: number;
  upgraded_to_video_call?: number;
  inbound_average_messaging_duration?: number;
  inbound_longest_messaging_duration?: number;
  inbound_shortest_messaging_duration?: number;
  inbound_average_waiting_duration?: number;
  inbound_shortest_waiting_duration?: number;
  inbound_longest_waiting_duration?: number;
  average_agent_first_message_speed?: number;
  shortest_agent_first_message_speed?: number;
  longest_agent_first_message_speed?: number;
  total_outbound?: number;
  total_outbound_answer_duration?: number;
  total_outbound_wrap_up_duration?: number;
  average_outbound_answer_duration?: number;
  average_outbound_wrap_up_duration?: number;
};
  messaging?: {
  channel_sources?: ReadonlyArray<"web_chat" | "in_app_chat" | "sms" | "facebook_messenger" | "whatsapp">;
  total_sent?: number;
  average_sent?: number;
  total_abandoned?: number;
  total_auto_closed?: number;
  total_released?: number;
  total_overflowed?: number;
  upgraded_to_voice_call?: number;
  upgraded_to_video_call?: number;
  inbound_average_messaging_duration?: number;
  inbound_longest_messaging_duration?: number;
  inbound_shortest_messaging_duration?: number;
  inbound_average_waiting_duration?: number;
  inbound_shortest_waiting_duration?: number;
  inbound_longest_waiting_duration?: number;
  average_agent_first_message_speed?: number;
  shortest_agent_first_message_speed?: number;
  longest_agent_first_message_speed?: number;
  total_outbound?: number;
  total_outbound_answer_duration?: number;
  total_outbound_wrap_up_duration?: number;
  average_outbound_answer_duration?: number;
  average_outbound_wrap_up_duration?: number;
};
  email?: {
  channel_sources?: ReadonlyArray<"email_address">;
  total_offers?: number;
  total_offers_acd?: number;
  total_offers_non_acd?: number;
  total_offers_answered?: number;
  total_offers_missed?: number;
  total_offers_declined?: number;
  total_auto_closed?: number;
  total_transferred_out_within_queue?: number;
  total_transferred_out_of_queue?: number;
  total_transferred_in_within_queue?: number;
  total_transferred_in_outside_queue?: number;
  inbound_average_messaging_duration?: number;
  inbound_longest_messaging_duration?: number;
  inbound_shortest_messaging_duration?: number;
  inbound_average_agent_first_reply_duration?: number;
  inbound_longest_agent_first_reply_duration?: number;
  inbound_shortest_agent_first_reply_duration?: number;
  inbound_average_agent_reply_duration?: number;
  inbound_longest_agent_reply_duration?: number;
  inbound_shortest_agent_reply_duration?: number;
  inbound_average_inactive_duration?: number;
  inbound_longest_inactive_duration?: number;
  inbound_shortest_inactive_duration?: number;
};
}>;
};
  "GET /contact_center/analytics/dataset/historical/agent_performance": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  users?: ReadonlyArray<{
  engagement_id?: string;
  start_time?: string;
  end_time?: string;
  direction?: "inbound" | "outbound";
  user_id?: string;
  user_name?: string;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
  queue_id?: string;
  queue_name?: string;
  team_id?: string;
  team_name?: string;
  handled_count?: number;
  handle_duration?: number;
  direct_transfer_count?: number;
  warm_transfer_initiated_count?: number;
  warm_transfer_completed_count?: number;
  transfer_initiated_count?: number;
  transfer_completed_count?: number;
  warm_conference_count?: number;
  agent_offered_count?: number;
  agent_refused_count?: number;
  agent_missed_count?: number;
  ring_disconnect_count?: number;
  agent_declined_count?: number;
  agent_message_sent_count?: number;
  hold_count?: number;
  conversation_duration?: number;
  perview_duration?: number;
  conference_duration?: number;
  conference_count?: number;
  hold_duration?: number;
  wrap_up_duration?: number;
  inbound_handled_count?: number;
  outbound_handle_duration?: number;
  warm_conference_duraton?: number;
  warm_transfer_duration?: number;
  ring_duration?: number;
  agent_first_response_duration?: number;
  dial_duration?: number;
  inbound_conversation_duration?: number;
  inbound_handle_duration?: number;
  outbound_handled_count?: number;
  outbound_conversation_duration?: number;
  third_party_dialer_wait_duration?: number;
  channel_switch_count?: number;
  dnis_to?: string;
  origin_method?: "outbound" | "callback" | "scheduled_callback" | "callback_retry" | "conference" | "transfer_to_agent" | "transfer_to_queue" | "warm_transfer_to_agent" | "warm_transfer_to_queue" | "direct_transfer_to_agent" | "direct_transfer_to_queue" | "route_to_queue" | "route_to_agents" | "switch_to_voice" | "switch_to_video" | "invite_agent" | "takeover" | "outbound_progressive_dial" | "outbound_preview_dial" | "outbound_third_party_dial";
  agent_leg_id?: string;
  parked_count?: number;
  switch_method?: "switch_messaging_to_voice" | "switch_messaging_to_video" | "switch_voice_to_video" | "switch_work_item_to_voice" | "switch_work_item_to_video";
  ani_from?: string;
}>;
  start_time_from?: string;
  start_time_to?: string;
  end_time_to?: string;
  end_time_from?: string;
};
  "GET /contact_center/analytics/dataset/historical/agent_timecard": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  users?: ReadonlyArray<{
  work_session_id?: string;
  start_time?: string;
  end_time?: string;
  user_id?: string;
  user_name?: string;
  user_status?: string;
  user_sub_status?: string;
  team?: {
  team_id?: string;
  team_name?: string;
};
  ready_duration?: number;
  occupied_duration?: number;
  not_ready_duration?: number;
  work_session_duration?: number;
  work_session_start_time?: string;
  work_session_end_time?: string;
  client_type?: "client" | "pwa" | "crm" | "web" | "mobile";
  agent_country?: string;
  ip_address?: string;
}>;
  start_time_from?: string;
  start_time_to?: string;
  end_time_to?: string;
  end_time_from?: string;
};
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}": {
  widget_id?: string;
  report_id?: string;
  timezone?: string;
  from?: string;
  to?: string;
  page?: number;
  page_size?: number;
  total_records?: number;
  data?: ReadonlyArray<{
  field_name?: string;
}>;
};
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema": {
  widget_id: string;
  report_id: string;
  schema: ReadonlyArray<{
  field_name: string;
  field_type: "string" | "array" | "object" | "number" | "integer" | "id_name";
  description?: string;
}>;
};
  "GET /contact_center/analytics/dataset/historical/disposition": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  historical_dispositions?: ReadonlyArray<{
  disposition_name?: string;
  tier1_disposition_name?: string;
  tier2_disposition_name?: string;
  tier3_disposition_name?: string;
  tier4_disposition_name?: string;
  account_id?: string;
  parent_account_id?: string;
  user_id?: string;
  user_name?: string;
  disposition_type?: "single" | "multi_level";
  disposition_source?: "default" | "agent";
  channel?: "voice" | "video" | "messaging" | "email";
  channel_source?: "voice" | "web_video" | "in_app_video" | "kiosk_video" | "web_chat" | "in_app_chat" | "team_chat" | "sms" | "facebook_messenger" | "instagram" | "whatsapp" | "email";
  team_id?: string;
  team_name?: string;
  queue_id?: string;
  queue_name?: string;
  engagement_id?: string;
  direction?: "inbound" | "outbound";
}>;
};
  "GET /contact_center/analytics/dataset/historical/engagement": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  engagements?: ReadonlyArray<{
  engagement_id?: string;
  direction?: "inbound" | "outbound";
  start_time?: string;
  end_time?: string;
  enter_channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  enter_channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
  channels?: ReadonlyArray<{
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
}>;
  caller_id?: string;
  dnis?: string;
  ani?: string;
  consumer?: {
  consumer_email?: string;
  consumer_name?: string;
};
  queues?: ReadonlyArray<{
  queue_id?: string;
  queue_name?: string;
}>;
  users?: ReadonlyArray<{
  user_id?: string;
  user_name?: string;
}>;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
  duration?: number;
  handle_duration?: number;
  conversation_duration?: number;
  hold_count?: number;
  hold_duration?: number;
  warm_transfer_initiated_count?: number;
  warm_transfer_completed_count?: number;
  warm_transfer_duration?: number;
  direct_transfer_count?: number;
  transfer_initiated_count?: number;
  transfer_completed_count?: number;
  warm_conference_count?: number;
  warm_conference_duration?: number;
  conference_count?: number;
  conference_duration?: number;
  wrap_up_duration?: number;
  abandoned_count?: number;
  aiea_usage?: "used" | "not_used";
}>;
};
  "GET /contact_center/analytics/dataset/historical/engagement_timelines": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  engagement_timelines?: ReadonlyArray<{
  engagement_id: string;
  channels?: ReadonlyArray<{
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "voice" | "web_video" | "in_app_video" | "kiosk_video" | "web_chat" | "in_app_chat" | "team_chat" | "sms" | "facebook_messenger" | "instagram" | "whatsapp" | "email_address" | "api";
}>;
  disconnect_info?: "agent" | "customer" | "system";
  entity_timelines?: ReadonlyArray<{
  entity?: {
  entity_id?: string;
  entity_type?: "Queue" | "Consumer" | "Agent" | "Supervisor" | "Flow" | "Campaign" | "Virtual Agent";
  entity_descriptive_name?: string;
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "voice" | "web_video" | "in_app_video" | "kiosk_video" | "web_chat" | "in_app_chat" | "team_chat" | "sms" | "facebook_messenger" | "instagram" | "whatsapp" | "email_address" | "api";
  matched_skills_and_intents?: ReadonlyArray<{
  type: "skill" | "intent";
  category: string;
  name: string;
  min_proficiency?: number | null;
}>;
};
  segments?: ReadonlyArray<{
  segment_type?: "customer_interact_segment" | "customer_ring_segment" | "in_flow_segment" | "queue_waiting_segment" | "queue_park_segment" | "queue_callback_waiting_segment" | "agent_ring_segment" | "dial_customer_segment" | "agent_outbound_preview_dial_segment" | "agent_hold_segment" | "agent_conversation_segment" | "agent_warm_transfer_segment" | "agent_warm_conference_segment" | "agent_conference_segment" | "agent_wrap_up_segment" | "supervisor_listen_segment" | "supervisor_whisper_segment" | "supervisor_view_segment" | "supervisor_barge_segment" | "supervisor_monitor_segment" | "campaign_dial_segment" | "zva_virtual_agent_conversation_segment" | "zva_consumer_interact_segment";
  start_time?: string;
  end_time?: string;
  end_reason?: string;
}>;
}>;
}>;
};
  "GET /contact_center/analytics/dataset/historical/expert_assist": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  start_time_from?: string;
  start_time_to?: string;
  end_time_from?: string;
  end_time_to?: string;
  engagements?: ReadonlyArray<{
  engagement_id?: string;
  direction?: "inbound" | "outbound";
  start_time?: string;
  end_time?: string;
  channels?: ReadonlyArray<{
  channel?: "voice" | "video" | "messaging" | "email";
  channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain";
}>;
  queues?: ReadonlyArray<{
  queue_id?: string;
  queue_name?: string;
}>;
  users?: ReadonlyArray<{
  user_id?: string;
  user_name?: string;
}>;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
  handle_duration?: number;
  wrap_up_duration?: number;
  expert_assist_status?: "Unknown" | "initiated" | "available" | "no_available";
  expert_assist_instance?: ReadonlyArray<{
  expert_assist_instance_id?: string;
  expert_assist_instance_name?: string;
}>;
  info_retrieval_group?: ReadonlyArray<{
  info_retrieval_group_id?: string;
  info_retrieval_group_name?: string;
}>;
  knowledge_base?: ReadonlyArray<{
  knowledge_base_id?: string;
  knowledge_base_name?: string;
}>;
  next_best_action?: ReadonlyArray<{
  next_best_action_id?: string;
  next_best_action_name?: string;
}>;
  expert_assist_feature?: ReadonlyArray<"Unknown" | "ea_info_retrieval" | "ea_knowledge_base" | "ea_next_best_action">;
}>;
};
  "GET /contact_center/analytics/dataset/historical/flow_performance": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  from?: string;
  to?: string;
  enter_time_from?: string;
  enter_time_to?: string;
  exit_time_from?: string;
  exit_time_to?: string;
  timezone?: string;
  flows?: ReadonlyArray<{
  flow_id?: string;
  flow_name?: string;
  flow_version?: string;
  flow_enter_time?: string;
  flow_exit_time?: string;
  enter_channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  enter_channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
  entry_point?: string;
  engagement_id?: string;
  flow_offered_count?: number;
  flow_upgraded_count?: number;
  offerred_to_queue_count?: number;
  handled_by_queue_count?: number;
  handled_by_first_offered_queue_count?: number;
  offered_to_agent_count?: number;
  handled_by_agent_count?: number;
  handled_by_first_offered_agent_count?: number;
  flow_duration?: number;
  first_widget_duration?: number;
  first_offered_queue_duration?: number;
  duration_to_first_handled_queue?: number;
  duration_to_first_offered_agent?: number;
  duration_to_first_handled_agent?: number;
  destination?: string;
  dnis_to?: string;
  ani_from?: string;
  flow_widget_path?: string;
  flow_execution_id?: string;
}>;
};
  "GET /contact_center/analytics/dataset/historical/outbound_dialer_performance": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  engagements?: ReadonlyArray<{
  engagement_id?: string;
  start_time?: string;
  end_time?: string;
  campaign?: {
  campaign_id?: string;
  campaign_name?: string;
};
  contact_list?: {
  contact_list_id?: string;
  contact_list_name?: string;
};
  contact?: {
  contact_id?: string;
  contact_name?: string;
};
  dialer_method?: "progressive" | "preview";
  dnc_flag?: boolean;
  caller_id_number?: string;
  consumer_number?: string;
  calls_answered_count?: number;
  calls_failed_count?: number;
  calls_with_amd_count?: number;
  calls_blocked_count?: number;
  contacts_connected_count?: number;
  dnc_count?: number;
  engagement_duration?: number;
  response_duration?: number;
  calls_skipped_count?: number;
}>;
  start_time_from?: string;
  start_time_to?: string;
  end_time_to?: string;
  end_time_from?: string;
};
  "GET /contact_center/analytics/dataset/historical/queue_performance": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  timezone?: string;
  from?: string;
  to?: string;
  enter_time_from?: string;
  enter_time_to?: string;
  exit_time_from?: string;
  exit_time_to?: string;
  queues?: ReadonlyArray<{
  engagement_id?: string;
  enter_time?: string;
  exit_time?: string;
  queue_id?: string;
  queue_name?: string;
  enter_channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  enter_channel_source?: "voice" | "in_app_video" | "kiosk_video" | "web_video" | "in_app_chat" | "in_video_chat" | "web_chat" | "sms" | "facebook_messenger" | "instagram" | "team_chat" | "whats_app" | "email_domain" | "api";
  origin_method?: "take_over" | "hand_over" | "callback" | "scheduled_callback" | "callback_retry" | "outbound" | "conference" | "release" | "warm_transfer_to_agent" | "warm_transfer_to_queue" | "direct_transfer_to_agent" | "direct_transfer_to_queue" | "transfer_to_agent" | "transfer_to_queue" | "route_to_queue" | "route_to_agent" | "outbound_progressive_dial" | "outbound_preview_dial" | "outbound_third_party_dial" | "park";
  direction?: "inbound" | "outbound";
  queue_offered_count?: number;
  abandoned_count?: number;
  short_abandons_count?: number;
  long_abandons_count?: number;
  overflow_count?: number;
  inbound_handled_count?: number;
  in_queue_wait_duration?: number;
  abandon_duration?: number;
  speed_of_answer_duration?: number;
  inbound_handle_duration?: number;
  inbound_conversation_duration?: number;
  inbound_wrap_up_duration?: number;
  outbound_count?: number;
  outbound_handled_count?: number;
  outbound_connected_count?: number;
  outbound_dial_duration?: number;
  outbound_handle_duration?: number;
  outbound_conversation_duration?: number;
  outbound_wrap_up_duration?: number;
  callback_registered_count?: number;
  callback_abandoned_count?: number;
  callback_canceled_count?: number;
  callback_timeout_count?: number;
  callback_handled_count?: number;
  callback_wait_duration?: number;
  callback_pending_duration?: number;
  callback_handle_duration?: number;
  callback_conversation_duration?: number;
  callback_wrap_up_duration?: number;
  handle_count?: number;
  hold_count?: number;
  warm_transfer_initiated_count?: number;
  warm_transfer_completed_count?: number;
  direct_transfer_count?: number;
  transfer_initiated_count?: number;
  transfer_completed_count?: number;
  warm_conference_count?: number;
  conference_count?: number;
  auto_close_disconnect_count?: number;
  handle_duration?: number;
  conversation_duration?: number;
  wrap_up_duration?: number;
  hold_duration?: number;
  conference_duration?: number;
  warm_transfer_duration?: number;
  warm_conference_duration?: number;
  dnis_to?: string;
  ani_from?: string;
  parked_count?: number;
  parked_duration?: number;
  enter_queue_id?: string;
}>;
};
  "GET /contact_center/analytics/log/historical/engagement": {
  timezone?: string;
  engagement_logs?: ReadonlyArray<{
  engagement_id?: string;
  direction?: "inbound" | "outbound";
  channels?: ReadonlyArray<{
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "voice" | "web_video" | "in_app_video" | "kiosk_video" | "web_chat" | "in_app_chat" | "team_chat" | "sms" | "facebook_messenger" | "instagram" | "whatsapp" | "email_address" | "api";
}>;
  enter_channel?: {
  channel?: "voice" | "video" | "messaging" | "email" | "work_item";
  channel_source?: "voice" | "web_video" | "in_app_video" | "kiosk_video" | "web_chat" | "in_app_chat" | "team_chat" | "sms" | "facebook_messenger" | "instagram" | "whatsapp" | "email_address" | "api";
};
  start_time?: string;
  end_time?: string;
  consumer?: {
  consumer_name?: string;
  consumer_email?: string;
  consumer_number?: string;
};
  queues?: ReadonlyArray<{
  queue_id?: string;
  queue_name?: string;
}>;
  users?: ReadonlyArray<{
  user_id?: string;
  user_name?: string;
}>;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
  flows?: ReadonlyArray<{
  flow_id?: string;
  flow_name?: string;
}>;
  events?: ReadonlyArray<{
  event_id?: string;
  event_name?: string;
}>;
  caller_id?: string;
  ani_from?: string;
  dnis_to?: string;
  duration?: number;
  hold_count?: number;
  hold_duration?: number;
  warm_transfer_initiated_count?: number;
  warm_transfer_completed_count?: number;
  warm_transfer_duration?: number;
  direct_transfer_count?: number;
  transfer_initiated_count?: number;
  transfer_completed_count?: number;
  warm_conference_count?: number;
  warm_conference_duration?: number;
  conference_count?: number;
  blocked?: boolean;
  conference_duration?: number;
  voicemail_count?: number;
  dispositions?: ReadonlyArray<{
  disposition_id?: string;
  disposition_name?: string;
}>;
  notes?: ReadonlyArray<{
  note_id?: string;
  note_content?: string;
  user_id?: string;
}>;
  transcript_url?: string;
  survey_id?: string;
  aiea_used?: "used" | "not_used";
}>;
  page_size?: number;
  total_records?: number;
  next_page_token?: string;
};
  "GET /contact_center/analytics/log/historical/journey": {
  journeys?: ReadonlyArray<{
  global_engagement_id?: string;
  direction?: "inbound" | "outbound" | "internal";
  channels?: ReadonlyArray<{
  channel?: "voice" | "video" | "messaging" | "email";
  channel_source?: "voice" | "web_video" | "in_app_video" | "kiosk_video" | "web_chat" | "in_app_chat" | "team_chat" | "sms" | "facebook_messenger" | "instagram" | "whatsapp" | "email_address";
}>;
  ani_from?: string;
  dnis_to?: string;
  start_time?: string;
  consumer?: {
  consumer_number?: string;
};
  queues?: ReadonlyArray<{
  queue_id?: string;
  queue_name?: string;
}>;
  users?: ReadonlyArray<{
  user_id?: string;
  user_name?: string;
}>;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
  call_queues?: ReadonlyArray<{
  extension_name?: string;
  phone_number?: string;
  extension_number?: string;
}>;
  zoom_phone_users?: ReadonlyArray<{
  extension_name?: string;
  phone_number?: string;
  extension_number?: string;
}>;
  shared_line_groups?: ReadonlyArray<{
  extension_name?: string;
  phone_number?: string;
  extension_number?: string;
}>;
  auto_receptionists?: ReadonlyArray<{
  extension_name?: string;
  phone_number?: string;
  extension_number?: string;
}>;
  common_areas?: ReadonlyArray<{
  extension_name?: string;
  phone_number?: string;
  extension_number?: string;
}>;
  zoom_rooms?: ReadonlyArray<{
  extension_name?: string;
  phone_number?: string;
  extension_number?: string;
}>;
  inter_ops?: ReadonlyArray<{
  extension_name?: string;
  phone_number?: string;
  extension_number?: string;
}>;
}>;
  timezone?: string;
  page_size?: number;
  total_records?: number;
  next_page_token?: string;
};
  "GET /contact_center/reports/operation_logs": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  operation_logs?: ReadonlyArray<{
  time?: string;
  operator?: string;
  category?: string;
  object_name?: string;
  operation_log_id?: string;
  action?: string;
  operation_detail?: string;
  agent_region_id?: string;
  agent_region_name?: string;
  team_id?: string;
  team_name?: string;
  object_id?: string;
}>;
  highest_watermark?: string;
};
  "GET /contact_center/roles": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  roles?: ReadonlyArray<{
  role_id?: string;
  role_name?: string;
  role_description?: string;
  total_users?: number;
  modified_by?: string;
  last_modified_time?: string;
}>;
};
  "POST /contact_center/roles": {
  role_id?: string;
  role_name?: string;
  role_description?: string;
  privileges?: {
  analytics_settings?: ReadonlyArray<string>;
  administration_settings?: ReadonlyArray<string>;
  general_settings?: ReadonlyArray<string>;
};
};
  "POST /contact_center/roles/duplicate": {
  role_id?: string;
  role_name?: string;
  role_description?: string;
};
  "GET /contact_center/roles/{roleId}": {
  role_id?: string;
  role_name?: string;
  role_description?: string;
  total_users?: number;
  modified_by?: string;
  last_modified_time?: string;
  privileges?: {
  analytics_settings?: ReadonlyArray<string>;
  administration_settings?: ReadonlyArray<string>;
  general_settings?: ReadonlyArray<string>;
};
};
  "DELETE /contact_center/roles/{roleId}": void;
  "PATCH /contact_center/roles/{roleId}": void;
  "DELETE /contact_center/roles/{roleId}/privileges": void;
  "GET /contact_center/roles/{roleId}/users": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  users?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
}>;
};
  "POST /contact_center/roles/{roleId}/users": {
  users?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
}>;
};
  "DELETE /contact_center/roles/{roleId}/users/{userId}": void;
  "GET /contact_center/agent_routing_profiles": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  agent_routing_profiles?: ReadonlyArray<{
  agent_routing_profile_id?: string;
  agent_routing_profile_name?: string;
  agent_routing_profile_description?: string;
  wait_time_agent_in_seconds?: number;
  priorities?: ReadonlyArray<{
  priority_id?: string;
  priority_order?: number;
  category_type: "skill" | "intent";
  skill_category_id?: string;
  intent_group_id?: string;
  skill_category_name?: string;
  intent_group_name?: string;
  skill_type?: "text" | "proficiency";
  minimum_proficiency_level?: number;
  skill_category_required?: boolean;
  intent_group_required?: boolean;
  default_skill_id?: string;
  default_skill_name?: string;
  time_step?: number;
  backup_skills?: ReadonlyArray<{
  backup_skill_id: string;
  backup_skill_name?: string;
  minimum_proficiency_level?: number;
}>;
}>;
  time_steps?: ReadonlyArray<number>;
  ignore_transferring_skills?: boolean;
}>;
};
  "POST /contact_center/agent_routing_profiles": {
  agent_routing_profile_id?: string;
  agent_routing_profile_name?: string;
  agent_routing_profile_description?: string;
  wait_time_agent_in_seconds?: number;
  priorities?: ReadonlyArray<{
  priority_id?: string;
  priority_order?: number;
  category_type: "skill" | "intent";
  skill_category_id?: string;
  intent_group_id?: string;
  skill_category_name?: string;
  intent_group_name?: string;
  skill_type?: "text" | "proficiency";
  minimum_proficiency_level?: number;
  skill_category_required?: boolean;
  intent_group_required?: boolean;
  default_skill_id?: string;
  default_skill_name?: string;
  time_step?: number;
  backup_skills?: ReadonlyArray<{
  backup_skill_id: string;
  backup_skill_name?: string;
  minimum_proficiency_level?: number;
}>;
}>;
  time_steps?: ReadonlyArray<number>;
  ignore_transferring_skills?: boolean;
};
  "GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}": {
  agent_routing_profile_id?: string;
  agent_routing_profile_name?: string;
  agent_routing_profile_description?: string;
  wait_time_agent_in_seconds?: number;
  priorities?: ReadonlyArray<{
  priority_id?: string;
  priority_order?: number;
  category_type: "skill" | "intent";
  skill_category_id?: string;
  intent_group_id?: string;
  skill_category_name?: string;
  intent_group_name?: string;
  skill_type?: "text" | "proficiency";
  minimum_proficiency_level?: number;
  skill_category_required?: boolean;
  intent_group_required?: boolean;
  default_skill_id?: string;
  default_skill_name?: string;
  time_step?: number;
  backup_skills?: ReadonlyArray<{
  backup_skill_id: string;
  backup_skill_name?: string;
  minimum_proficiency_level?: number;
}>;
}>;
  time_steps?: ReadonlyArray<number>;
  ignore_transferring_skills?: boolean;
};
  "DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}": void;
  "PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}": void;
  "GET /contact_center/consumer_routing_profiles": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  consumer_routing_profiles?: ReadonlyArray<{
  consumer_routing_profile_id?: string;
  consumer_routing_profile_name?: string;
  consumer_routing_profile_description?: string;
  top_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
  accumulated_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  incremental_rate: number;
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
}>;
};
  "POST /contact_center/consumer_routing_profiles": {
  consumer_routing_profile_id?: string;
  consumer_routing_profile_name?: string;
  consumer_routing_profile_description?: string;
  top_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
  accumulated_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  incremental_rate: number;
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
};
  "GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": {
  consumer_routing_profile_id?: string;
  consumer_routing_profile_name?: string;
  consumer_routing_profile_description?: string;
  top_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
  accumulated_priorities?: ReadonlyArray<{
  attribute_type: "address_book_contacts" | "entrance_to_queue" | "new_customer" | "returning_customer" | "release_to_queue" | "skills" | "address_book_variable" | "global_variable";
  incremental_rate: number;
  parameter?: {
  ids?: ReadonlyArray<string>;
  enter_queue_start_time?: string;
  enter_queue_end_time?: string;
  enter_queue_timezone?: string;
  max_returning_minutes?: number;
  variable_id?: string;
  variable_values?: ReadonlyArray<string>;
  operator?: "equal_to" | "greater_than" | "less_than" | "contains";
  compared_value?: string;
};
}>;
};
  "DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": void;
  "PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": void;
  "GET /contact_center/skills": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  skills?: ReadonlyArray<{
  skill_id?: string;
  skill_name?: string;
  skill_type?: "text" | "proficiency";
  max_proficiency_level?: 1 | 2 | 3 | 4 | 5;
  skill_category_name?: string;
  skill_category_id?: string;
  total_users?: number;
  modified_by?: string;
  last_modified_time?: string;
}>;
};
  "POST /contact_center/skills": {
  skill_id?: string;
  skill_name?: string;
  skill_type?: "text" | "proficiency";
  max_proficiency_level?: 1 | 2 | 3 | 4 | 5;
  skill_category_name?: string;
  skill_category_id?: string;
  total_users?: number;
  modified_by?: string;
  last_modified_time?: string;
};
  "GET /contact_center/skills/categories": {
  next_page_token?: string;
  page_size?: number;
  skill_categories?: ReadonlyArray<{
  skill_category_id?: string;
  skill_category_name?: string;
  skill_category_description?: string;
  max_proficiency_level?: number;
  total_agent_routing_profiles?: number;
  skill_type?: "text" | "proficiency";
  modified_by?: string;
  last_modified_time?: string;
}>;
};
  "POST /contact_center/skills/categories": {
  skill_category_id?: string;
  skill_category_name?: string;
  skill_category_description?: string;
  skill_type?: "text" | "proficiency";
  max_proficiency_level?: number;
  modified_by?: string;
  last_modified_time?: string;
};
  "GET /contact_center/skills/categories/{skillCategoryId}": {
  skill_category_id?: string;
  skill_category_name?: string;
  skill_category_description?: string;
  max_proficiency_level?: number;
  skill_type?: "text" | "proficiency";
  modified_by?: string;
  last_modified_time?: string;
};
  "DELETE /contact_center/skills/categories/{skillCategoryId}": void;
  "PATCH /contact_center/skills/categories/{skillCategoryId}": void;
  "GET /contact_center/skills/{skillId}": {
  skill_id?: string;
  skill_name?: string;
  skill_type?: "text" | "proficiency";
  max_proficiency_level?: 1 | 2 | 3 | 4 | 5;
  skill_category_name?: string;
  skill_category_id?: string;
  total_users?: number;
  modified_by?: string;
  last_modified_time?: string;
};
  "DELETE /contact_center/skills/{skillId}": void;
  "PATCH /contact_center/skills/{skillId}": void;
  "GET /contact_center/skills/{skillId}/users": {
  next_page_token?: string;
  page_size?: number;
  users?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
}>;
};
  "GET /contact_center/teams": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
  team_description?: string;
  parent_team_id?: string;
  parent_team_name?: string;
  created_time?: string;
  modify_time?: string;
}>;
};
  "POST /contact_center/teams": {
  team_id?: string;
  team_name?: string;
  team_description?: string;
  parent_team_id?: string;
  parent_team_name?: string;
  created_time?: string;
};
  "GET /contact_center/teams/{teamId}": {
  team_id?: string;
  team_name?: string;
  parent_team_id?: string;
  parent_team_name?: string;
  team_description?: string;
  created_time?: string;
  modify_time?: string;
};
  "DELETE /contact_center/teams/{teamId}": void;
  "PATCH /contact_center/teams/{teamId}": void;
  "GET /contact_center/teams/{teamId}/agents": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  agents?: ReadonlyArray<{
  user_id?: string;
  user_display_name?: string;
  user_email?: string;
  cc_user_id?: string;
}>;
};
  "POST /contact_center/teams/{teamId}/agents": {
  agents?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  user_display_name?: string;
  user_email?: string;
  assigned_time?: string;
}>;
};
  "DELETE /contact_center/teams/{teamId}/agents": void;
  "GET /contact_center/teams/{teamId}/children": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  level?: number;
  child_teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
  level?: number;
  parent_team_id?: string;
  has_children?: boolean;
}>;
};
  "PATCH /contact_center/teams/{teamId}/move": void;
  "GET /contact_center/teams/{teamId}/parents": {
  team_id: string;
  team_name: string;
  level: number;
  parent_teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
  level?: number;
  parent_team_id?: string;
}>;
};
  "GET /contact_center/teams/{teamId}/supervisors": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  supervisors?: ReadonlyArray<{
  user_id?: string;
  user_display_name?: string;
  user_email?: string;
  cc_user_id?: string;
}>;
};
  "POST /contact_center/teams/{teamId}/supervisors": {
  supervisors?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  user_display_name?: string;
  user_email?: string;
  assigned_time?: string;
}>;
};
  "DELETE /contact_center/teams/{teamId}/supervisors": void;
  "GET /contact_center/users": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  users?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
  role_id?: string;
  role_name?: string;
  client_integration?: "Default" | "Salesforce" | "Zendesk" | "ServiceNow" | "Microsoft_Dynamics_365";
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  sub_status_id?: string;
  sub_status_name?: "Break" | "End Shift" | "Forced" | "Meal" | "Meeting" | "Training";
  user_access?: "active" | "inactive";
  modified_by?: string;
  last_modified_time?: string;
  country_iso_code?: string;
  region_id?: string;
  region_name?: string;
  channel_settings?: {
  multi_channel_engagements?: {
  enable?: boolean;
  max_agent_load?: number;
  email_max_agent_load?: number;
};
  concurrent_message_capacity?: number;
  concurrent_email_capacity?: number;
};
  package_name?: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist">;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
  billing_account_id?: string;
  billing_account_name?: string;
}>;
};
  "POST /contact_center/users": {
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
  role_id?: string;
  role_name?: string;
  country_iso_code?: string;
  client_integration?: "Default" | "Salesforce" | "Zendesk" | "ServiceNow" | "Microsoft_Dynamics_365";
  client_integration_name?: string;
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  user_access?: "active" | "inactive";
  region_id?: string;
  region_name?: string;
  channel_settings?: {
  multi_channel_engagements?: {
  enable?: boolean;
  max_agent_load?: number;
  email_max_agent_load?: number;
};
  concurrent_message_capacity?: number;
  concurrent_email_capacity?: number;
};
  package_name?: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist">;
  emergency_calling?: boolean;
  billing_account_id?: string;
  billing_account_name?: string;
};
  "DELETE /contact_center/users": void;
  "PATCH /contact_center/users": void;
  "POST /contact_center/users/batch": {
  users?: ReadonlyArray<{
  user_id?: string;
  cc_user_id?: string;
  display_name?: string;
  user_email?: string;
  role_id?: string;
  role_name?: string;
  country_iso_code?: string;
  client_integration?: "Default" | "Salesforce" | "Zendesk" | "ServiceNow" | "Microsoft_Dynamics_365";
  client_integration_name?: string;
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  user_access?: "active" | "inactive";
  channel_settings?: {
  multi_channel_engagements?: {
  enable?: boolean;
  max_agent_load?: number;
  email_max_agent_load?: number;
};
  concurrent_message_capacity?: number;
  concurrent_email_capacity?: number;
};
  package_name?: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist">;
  billing_account_id?: string;
  billing_account_name?: string;
}>;
};
  "PATCH /contact_center/users/status": void;
  "GET /contact_center/users/templates": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  user_templates?: ReadonlyArray<{
  template_id?: string;
  template_name?: string;
  template_type?: "add" | "update";
  template_status?: "active" | "inactive" | "needs_attention";
}>;
};
  "POST /contact_center/users/templates": {
  template_id: string;
  template_name?: string;
  template_description?: string;
  template_type?: "add" | "update";
  template_status?: "active" | "inactive" | "needs_attention";
  selected_blocks?: ReadonlyArray<"role" | "package" | "team" | "client_integration" | "external_url" | "user_access" | "country_or_region" | "region" | "mobile_client" | "emergency_calling" | "assigned_queues" | "skills" | "engagement_capacity">;
  role?: string;
  package?: {
  package_name: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist" | "zoom_contact_center_for_service_cloud_voice" | "zoom_contact_center_for_epic" | "zoom_contact_center_unified_view_for_servicenow">;
  billing_account_id?: string;
};
  team?: {
  team_id: string;
  team_supervisor: boolean;
};
  client_integration?: {
  client_integration_application: string;
  client_integration_name?: string;
};
  external_url?: {
  enable_external_url: boolean;
  external_launch_url: string;
};
  user_access?: boolean;
  country_or_region?: string;
  region?: string;
  mobile_client?: boolean;
  emergency_calling?: boolean;
  assigned_queues?: {
  agent_queue_ids?: ReadonlyArray<string>;
  supervisor_queue_ids?: ReadonlyArray<string>;
  default_outbound_voice_queue_id?: string;
  default_outbound_message_queue_id?: string;
};
  skills?: ReadonlyArray<{
  skill_id: string;
  proficiency_level?: number;
}>;
  engagement_capacity?: {
  concurrent_email_capacity?: number;
  concurrent_message_capacity?: number;
  email_max_agent_load?: number;
  message_max_agent_load?: number;
};
  modified_by?: string;
  last_modified_time?: string;
  created_by?: string;
  created_time?: string;
};
  "GET /contact_center/users/templates/{templateId}": {
  template_id: string;
  template_name?: string;
  template_description?: string;
  template_type?: "add" | "update";
  template_status?: "active" | "inactive" | "needs_attention";
  selected_blocks?: ReadonlyArray<"role" | "package" | "team" | "client_integration" | "external_url" | "user_access" | "country_or_region" | "region" | "mobile_client" | "emergency_calling" | "assigned_queues" | "skills" | "engagement_capacity">;
  role?: string;
  package?: {
  package_name: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<string>;
  billing_account_id?: string;
};
  team?: {
  team_id: string;
  team_supervisor: boolean;
};
  client_integration?: {
  client_integration_application: string;
  client_integration_name?: string;
};
  external_url?: {
  enable_external_url: boolean;
  external_launch_url: string;
};
  user_access?: boolean;
  country_or_region?: string;
  region?: string;
  mobile_client?: boolean;
  emergency_calling?: boolean;
  assigned_queues?: {
  agent_queue_ids?: ReadonlyArray<string>;
  supervisor_queue_ids?: ReadonlyArray<string>;
  default_outbound_voice_queue_id?: string;
  default_outbound_message_queue_id?: string;
};
  skills?: ReadonlyArray<{
  skill_id: string;
  proficiency_level?: number;
}>;
  engagement_capacity?: {
  concurrent_email_capacity?: number;
  concurrent_message_capacity?: number;
  email_max_agent_load?: number;
  message_max_agent_load?: number;
};
  modified_by?: string;
  last_modified_time?: string;
  created_by?: string;
  created_time?: string;
};
  "DELETE /contact_center/users/templates/{templateId}": void;
  "PATCH /contact_center/users/templates/{templateId}": void;
  "GET /contact_center/users/{userId}": {
  user_id?: string;
  display_name?: string;
  user_email?: string;
  role_id?: string;
  role_name?: string;
  client_integration?: "Default" | "Salesforce" | "Zendesk" | "ServiceNow" | "Microsoft_Dynamics_365";
  client_integration_name?: string;
  status_id?: string;
  status_name?: "Offline" | "Ready" | "Not Ready" | "Occupied";
  sub_status_id?: string;
  sub_status_name?: "Break" | "End Shift" | "Forced" | "Meal" | "Meeting" | "Training";
  user_access?: "active" | "inactive";
  country_iso_code?: string;
  region_id?: string;
  region_name?: string;
  channel_settings?: {
  multi_channel_engagements?: {
  enable?: boolean;
  max_agent_load?: number;
  email_max_agent_load?: number;
};
  concurrent_message_capacity?: number;
  concurrent_email_capacity?: number;
};
  package_name?: "essentials" | "premium" | "elite";
  add_ons_plan?: ReadonlyArray<"ai_expert_assist">;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
  cc_user_id?: string;
  emergency_calling?: boolean;
  billing_account_id?: string;
  billing_account_name?: string;
};
  "DELETE /contact_center/users/{userId}": void;
  "PATCH /contact_center/users/{userId}": void;
  "PATCH /contact_center/users/{userId}/opt_in_out_queues": void;
  "GET /contact_center/users/{userId}/queues": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  queues?: ReadonlyArray<{
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  queue_description?: string;
  channel?: "voice" | "video" | "messaging" | "email";
  user_assignment_type?: "agent" | "supervisor" | "both";
  caller_ids?: ReadonlyArray<string>;
  teams?: ReadonlyArray<{
  team_id?: string;
  team_name?: string;
}>;
}>;
};
  "GET /contact_center/users/{userId}/recordings": {
  next_page_token?: string;
  page_size?: number;
  from?: string;
  to?: string;
  recordings?: ReadonlyArray<{
  recording_id?: string;
  queue_id?: string;
  cc_queue_id?: string;
  queue_name?: string;
  recording_duration?: number;
  download_url?: string;
  transcript_url?: string;
  playback_url?: string;
  recording_start_time?: string;
  recording_end_time?: string;
  user_id?: string;
  display_name?: string;
  user_email?: string;
  recording_type?: "on_demand" | "automatic";
  channel_type?: "voice" | "video";
  channel?: "voice" | "video";
  direction?: "inbound" | "outbound";
  owner_id?: string;
  owner_name?: string;
  owner_type?: "user" | "queue";
  engagement_id?: string;
  flow_name?: string;
  flow_id?: string;
  consumer_name?: string;
  consumer_number?: string;
  consumers?: ReadonlyArray<{
  consumer_name?: string;
  consumer_number?: string;
}>;
  exemption?: boolean;
  reason_details?: string;
  segment_type?: "inbound" | "conference";
  team_id?: string;
  team_name?: string;
  conference_participant?: ReadonlyArray<{
  user_id?: string;
  user_name?: string;
  queue_id?: string;
  queue_name?: string;
  team_id?: string;
  team_name?: string;
  contact_id?: string;
  contact_name?: string;
  contact_number?: string;
  participant_type?: "agent" | "customer" | "supervisor" | "outbound";
}>;
}>;
};
  "DELETE /contact_center/users/{userId}/recordings": void;
  "GET /contact_center/users/{userId}/skills": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  skills?: ReadonlyArray<{
  skill_id?: string;
  skill_name?: string;
  skill_type?: string;
  max_proficiency_level?: number;
  user_proficiency_level?: number;
  skill_category_id?: string;
  skill_category_name?: string;
}>;
};
  "POST /contact_center/users/{userId}/skills": ZoomContactCenterFullApiSchemaJsonValue;
  "DELETE /contact_center/users/{userId}/skills/{skillId}": void;
  "PATCH /contact_center/users/{userId}/status": void;
  "GET /contact_center/variable_logs": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  highest_watermark?: string;
  from?: string;
  to?: string;
  variable_logs?: ReadonlyArray<{
  variable_log_id?: string;
  engagement_id?: string;
  flow_id?: string;
  flow_name?: string;
  widget_name?: string;
  variable_name?: string;
  variable_value?: string;
  group_type?: "system" | "custom";
  data_type?: "boolean" | "currency" | "date" | "email" | "number" | "percent" | "phone" | "string" | "time" | "url" | "json" | "array";
  created_at?: string;
}>;
};
  "GET /contact_center/variable_logs/{variableLogId}": {
  variable_log_id?: string;
  engagement_id?: string;
  flow_id?: string;
  flow_name?: string;
  widget_name?: string;
  variable_name?: string;
  variable_value?: string;
  group_type?: "system" | "custom";
  data_type?: "boolean" | "currency" | "date" | "email" | "number" | "percent" | "phone" | "string" | "url";
  created_at?: string;
};
  "DELETE /contact_center/variable_logs/{variableLogId}": void;
  "GET /contact_center/variables": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  variables?: ReadonlyArray<{
  variable_id?: string;
  variable_group_id?: string;
  variable_name?: string;
  default_value?: string;
  variable_type?: "global_variable" | "address_book_variable";
  data_type?: "string" | "number" | "boolean" | "date_time" | "currency" | "percentage" | "email" | "url" | "phone" | "json" | "array";
  variable_description?: string;
  mask_variable_data?: boolean;
  values?: ReadonlyArray<string>;
  value_category?: string;
  used_in_address_book_count?: number;
}>;
};
  "POST /contact_center/variables": {
  variable_id?: string;
  variable_group_id?: string;
  variable_name?: string;
  variable_description?: string;
  variable_type?: "global_variable" | "address_book_variable";
  address_books?: ReadonlyArray<{
  address_book_id?: string;
  address_book_name?: string;
  unit_id?: string;
  unit_name?: string;
  total_contacts?: number;
}>;
  use_in_reporting?: boolean;
  mask_variable_data?: boolean;
  use_as_routing_profile_parameters?: boolean;
  data_type?: "string" | "number" | "boolean" | "date_time" | "currency" | "percentage" | "email" | "url" | "phone" | "json" | "array";
  value_category?: string;
  values?: ReadonlyArray<string>;
  linked_value_lock?: boolean;
  default_value?: string;
  use_in_external_url_parameters?: boolean;
  client_show_in_client_profile_section?: boolean;
  client_show_in_client_engagement_section?: boolean;
  client_show_in_inbound_call_notifications?: boolean;
};
  "GET /contact_center/variables/groups": {
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  variable_groups?: ReadonlyArray<{
  variable_group_id?: string;
  variable_group_name?: string;
  variable_group_description?: string;
  variable_group_type?: "system" | "custom";
  variable_group_variables_count?: number;
}>;
};
  "POST /contact_center/variables/groups": {
  variable_group_id?: string;
  variable_group_name?: string;
  variable_group_description?: string;
  variable_group_type?: "custom";
  variable_group_variables_count?: number;
};
  "GET /contact_center/variables/groups/{variableGroupId}": {
  variable_group_id?: string;
  variable_group_name?: string;
  variable_group_description?: string;
  variable_group_type?: "system" | "custom";
  variable_group_variables_count?: number;
};
  "DELETE /contact_center/variables/groups/{variableGroupId}": void;
  "PATCH /contact_center/variables/groups/{variableGroupId}": void;
  "GET /contact_center/variables/{variableId}": {
  variable_id?: string;
  variable_group_id?: string;
  variable_name?: string;
  variable_description?: string;
  variable_type?: "global_variable" | "address_book_variable";
  address_books?: ReadonlyArray<{
  address_book_id?: string;
  address_book_name?: string;
  unit_id?: string;
  unit_name?: string;
  total_contacts?: number;
}>;
  use_in_reporting?: boolean;
  mask_variable_data?: boolean;
  use_as_routing_profile_parameters?: boolean;
  data_type?: "string" | "number" | "boolean" | "date_time" | "currency" | "percentage" | "email" | "url" | "phone" | "json" | "array";
  value_category?: string;
  values?: ReadonlyArray<string>;
  linked_value_lock?: boolean;
  default_value?: string;
  use_in_external_url_parameters?: boolean;
  client_show_in_client_profile_section?: boolean;
  client_show_in_client_engagement_section?: boolean;
  client_show_in_inbound_call_notifications?: boolean;
};
  "DELETE /contact_center/variables/{variableId}": void;
  "PATCH /contact_center/variables/{variableId}": void;
}
