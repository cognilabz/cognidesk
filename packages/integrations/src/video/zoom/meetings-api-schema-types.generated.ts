// Generated provider schema DTOs for ZoomMeetingsApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type ZoomMeetingsApiSchemaJsonPrimitive = string | number | boolean | null;
export type ZoomMeetingsApiSchemaJsonValue = ZoomMeetingsApiSchemaJsonPrimitive | readonly ZoomMeetingsApiSchemaJsonValue[] | { readonly [key: string]: ZoomMeetingsApiSchemaJsonValue | undefined };

export interface ZoomMeetingsApiOperationQueryMap {
  "GET /archive_files": {
  page_size?: number;
  next_page_token?: string;
  from?: string;
  to?: string;
  query_date_type?: "meeting_start_time" | "archive_complete_time";
  group_id?: string;
  group_ids?: string;
};
  "GET /archive_files/statistics": {
  from?: string;
  to?: string;
};
  "PATCH /archive_files/{fileId}": {};
  "GET /meetings/{meetingId}/jointoken/local_archiving": {};
  "GET /past_meetings/{meetingUUID}/archive_files": {};
  "DELETE /past_meetings/{meetingUUID}/archive_files": {};
  "GET /meetings/{meetingId}/recordings": {
  include_fields?: string;
  ttl?: number;
};
  "DELETE /meetings/{meetingId}/recordings": {
  action?: "trash" | "delete";
};
  "GET /meetings/{meetingId}/recordings/analytics_details": {
  page_size?: number;
  next_page_token?: string;
  from?: string;
  to?: string;
  type?: "by_view" | "by_download";
};
  "GET /meetings/{meetingId}/recordings/analytics_summary": {
  from?: string;
  to?: string;
};
  "GET /meetings/{meetingId}/recordings/registrants": {
  status?: "pending" | "approved" | "denied";
  page_size?: number;
  page_number?: number;
  next_page_token?: string;
};
  "POST /meetings/{meetingId}/recordings/registrants": {};
  "GET /meetings/{meetingId}/recordings/registrants/questions": {};
  "PATCH /meetings/{meetingId}/recordings/registrants/questions": {};
  "PUT /meetings/{meetingId}/recordings/registrants/status": {};
  "GET /meetings/{meetingId}/recordings/settings": {};
  "PATCH /meetings/{meetingId}/recordings/settings": {};
  "DELETE /meetings/{meetingId}/recordings/{recordingId}": {
  action?: "trash" | "delete";
};
  "PUT /meetings/{meetingId}/recordings/{recordingId}/status": {};
  "GET /meetings/{meetingId}/transcript": {};
  "DELETE /meetings/{meetingId}/transcript": {};
  "PUT /meetings/{meetingUUID}/recordings/status": {};
  "GET /users/{userId}/recordings": {
  page_size?: number;
  next_page_token?: string;
  mc?: string;
  trash?: boolean;
  from?: string;
  to?: string;
  trash_type?: string;
  meeting_id?: number;
};
  "GET /devices": {
  search_text?: string;
  platform_os?: "win" | "mac" | "ipad" | "iphone" | "android" | "linux";
  is_enrolled_in_zdm?: boolean;
  device_type?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;
  device_vendor?: string;
  device_model?: string;
  device_status?: -1 | 0 | 1;
  page_size?: number;
  next_page_token?: string;
};
  "POST /devices": {};
  "GET /devices/groups": {
  page_size?: number;
  next_page_token?: string;
};
  "POST /devices/zpa/assignment": {};
  "GET /devices/zpa/settings": {
  user_id?: string;
};
  "POST /devices/zpa/upgrade": {};
  "DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}": {};
  "GET /devices/zpa/zdm_groups/{zdmGroupId}/versions": {};
  "GET /devices/{deviceId}": {};
  "DELETE /devices/{deviceId}": {};
  "PATCH /devices/{deviceId}": {};
  "PATCH /devices/{deviceId}/assign_group": {
  group_id: string;
};
  "PATCH /devices/{deviceId}/assignment": {};
  "GET /h323/devices": {
  page_size?: number;
  page_number?: number;
  next_page_token?: string;
};
  "POST /h323/devices": {};
  "DELETE /h323/devices/{deviceId}": {};
  "PATCH /h323/devices/{deviceId}": {};
  "POST /meetings/{meetingId}/open_apps": {};
  "DELETE /meetings/{meetingId}/open_apps": {};
  "DELETE /live_meetings/{meetingId}/chat/messages/{messageId}": {
  file_ids?: string;
};
  "PATCH /live_meetings/{meetingId}/chat/messages/{messageId}": {};
  "PATCH /live_meetings/{meetingId}/events": {};
  "GET /meetings/{meetingId}/jointoken/local_recording": {
  bypass_waiting_room?: boolean;
};
  "GET /meetings/{meetingId}/token": {
  type?: "closed_caption_token";
};
  "POST /meetings/{meetingId}/batch_registrants": {};
  "GET /meetings/{meetingId}/invitation": {};
  "POST /meetings/{meetingId}/invite_links": {};
  "GET /meetings/{meetingId}/registrants": {
  occurrence_id?: string;
  status?: "pending" | "approved" | "denied";
  page_size?: number;
  page_number?: number;
  next_page_token?: string;
};
  "POST /meetings/{meetingId}/registrants": {
  occurrence_ids?: string;
};
  "GET /meetings/{meetingId}/registrants/questions": {};
  "PATCH /meetings/{meetingId}/registrants/questions": {};
  "PUT /meetings/{meetingId}/registrants/status": {
  occurrence_id?: string;
};
  "GET /meetings/{meetingId}/registrants/{registrantId}": {};
  "DELETE /meetings/{meetingId}/registrants/{registrantId}": {
  occurrence_id?: string;
};
  "GET /meetings/{meetingId}/jointoken/live_streaming": {};
  "GET /meetings/{meetingId}/livestream": {};
  "PATCH /meetings/{meetingId}/livestream": {};
  "PATCH /meetings/{meetingId}/livestream/status": {};
  "PATCH /live_meetings/{meetingId}/rtms_app/status": {};
  "GET /meetings/{meetingId}": {
  occurrence_id?: string;
  show_previous_occurrences?: boolean;
};
  "DELETE /meetings/{meetingId}": {
  occurrence_id?: string;
  schedule_for_reminder?: boolean;
  cancel_meeting_reminder?: boolean;
};
  "PATCH /meetings/{meetingId}": {
  occurrence_id?: string;
};
  "POST /meetings/{meetingId}/sip_dialing": {};
  "PUT /meetings/{meetingId}/status": {};
  "GET /past_meetings/{meetingId}": {};
  "GET /past_meetings/{meetingId}/instances": {
  from?: string;
  to?: string;
};
  "GET /past_meetings/{meetingId}/participants": {
  page_size?: number;
  next_page_token?: string;
};
  "GET /past_meetings/{meetingId}/qa": {};
  "GET /users/{userId}/meetings": {
  type?: "scheduled" | "live" | "upcoming" | "upcoming_meetings" | "previous_meetings";
  page_size?: number;
  next_page_token?: string;
  page_number?: number;
  from?: string;
  to?: string;
  timezone?: string;
};
  "POST /users/{userId}/meetings": {};
  "GET /users/{userId}/upcoming_meetings": {};
  "GET /users/{userId}/pac": {};
  "POST /meetings/{meetingId}/batch_polls": {};
  "GET /meetings/{meetingId}/polls": {
  anonymous?: boolean;
};
  "POST /meetings/{meetingId}/polls": {};
  "GET /meetings/{meetingId}/polls/{pollId}": {};
  "PUT /meetings/{meetingId}/polls/{pollId}": {};
  "DELETE /meetings/{meetingId}/polls/{pollId}": {};
  "GET /past_meetings/{meetingId}/polls": {};
  "GET /report/activities": {
  from?: string;
  to?: string;
  page_size?: number;
  next_page_token?: string;
};
  "GET /report/billing": {};
  "GET /report/billing/invoices": {
  billing_id: string;
};
  "GET /report/cloud_recording": {
  from: string;
  to: string;
  group_id?: string;
};
  "GET /report/daily": {
  year?: number;
  month?: number;
  group_id?: string;
};
  "GET /report/disclaimer": {
  from: string;
  to: string;
  search_value?: string;
  disclaimer_type?: "login" | "joinMeeting" | "recording" | "remoteControl" | "meetingConnector" | "archive" | "summary" | "query" | "AICompanion" | "caption" | "joinSDKMeeting" | "NDI" | "joinWebinar" | "internalMMRGuestJoin" | "liveStream" | "phoneACR" | "viewBOActivity" | "webinarBO" | "unmuteAudio" | "joinOnZoom" | "GDPR" | "chinaMeeting" | "zappJoin" | "softUpdateReminder" | "all";
  group_id?: string;
  page_size?: number;
  next_page_token?: string;
};
  "GET /report/history_meetings": {
  from: string;
  to: string;
  date_type?: "start_time" | "end_time";
  meeting_type?: "meeting" | "webinar" | "all";
  report_type?: "all" | "poll" | "survey" | "qa" | "resource" | "reaction";
  search_key?: string;
  page_size?: number;
  next_page_token?: string;
  group_id?: string;
  meeting_feature?: "screen_sharing" | "video_on" | "remote_control" | "closed_caption" | "language_interpretation" | "telephone_usage" | "in_meeting_chat" | "poll" | "join_by_room" | "waiting_room" | "live_transcription" | "reaction" | "zoom_apps" | "annotation" | "raise_hand" | "virtual_background" | "whiteboard" | "immersive_scene" | "avatar" | "switch_to_mobile" | "file_sharing" | "meeting_summary" | "meeting_questions" | "record_to_computer" | "record_to_cloud" | "live_translation" | "registration" | "smart_recording" | "multi_speaker" | "meeting_wallpaper" | "gen_ai_virtual_background" | "multi_share" | "document_collaboration" | "portrait_lighting" | "personalized_audio_isolation" | "color_themes";
};
  "GET /report/meeting_activities": {
  from: string;
  to: string;
  page_size?: number;
  next_page_token?: string;
  meeting_number?: string;
  search_key?: string;
  activity_type: "All Activities" | "Meeting Created" | "Meeting Started" | "User Join" | "User Left" | "Remote Control" | "In-Meeting Chat" | "Meeting Ended";
};
  "GET /report/meetings/{meetingId}": {};
  "GET /report/meetings/{meetingId}/participants": {
  page_size?: number;
  next_page_token?: string;
  include_fields?: "registrant_id";
};
  "GET /report/meetings/{meetingId}/polls": {};
  "GET /report/meetings/{meetingId}/qa": {};
  "GET /report/meetings/{meetingId}/survey": {};
  "GET /report/operationlogs": {
  from: string;
  to: string;
  page_size?: number;
  next_page_token?: string;
  category_type?: "all" | "user" | "user_settings" | "account" | "billing" | "im" | "recording" | "phone_contacts" | "webinar" | "sub_account" | "role" | "zoom_rooms";
};
  "GET /report/remote_support": {
  from: string;
  to: string;
  next_page_token?: string;
  page_size?: string;
};
  "GET /report/telephone": {
  type?: "1" | "2" | "3";
  query_date_type?: "start_time" | "end_time" | "meeting_start_time" | "meeting_end_time";
  from: string;
  to: string;
  page_size?: number;
  page_number?: number;
  next_page_token?: string;
};
  "GET /report/upcoming_events": {
  from: string;
  to: string;
  page_size?: number;
  next_page_token?: string;
  type?: "meeting" | "webinar" | "all";
  group_id?: string;
};
  "GET /report/users": {
  type?: "active" | "inactive";
  from: string;
  to: string;
  page_size?: number;
  page_number?: number;
  next_page_token?: string;
  group_id?: string;
};
  "GET /report/users/{userId}/meetings": {
  from: string;
  to: string;
  page_size?: number;
  next_page_token?: string;
  type?: "past" | "pastOne" | "pastJoined";
};
  "GET /report/webinars/{webinarId}": {};
  "GET /report/webinars/{webinarId}/participants": {
  page_size?: number;
  next_page_token?: string;
  include_fields?: "registrant_id";
};
  "GET /report/webinars/{webinarId}/polls": {};
  "GET /report/webinars/{webinarId}/qa": {};
  "GET /report/webinars/{webinarId}/survey": {};
  "GET /sip_phones/phones": {
  search_key?: string;
  page_size?: number;
  next_page_token?: string;
};
  "POST /sip_phones/phones": {};
  "DELETE /sip_phones/phones/{phoneId}": {};
  "PATCH /sip_phones/phones/{phoneId}": {};
  "GET /meetings/meeting_summaries": {
  page_size?: number;
  next_page_token?: string;
  from?: string;
  to?: string;
  time_filter_field?: "summary_start_time" | "summary_created_time";
};
  "GET /meetings/{meetingId}/meeting_summary": {};
  "DELETE /meetings/{meetingId}/meeting_summary": {};
  "GET /meetings/{meetingId}/survey": {};
  "DELETE /meetings/{meetingId}/survey": {};
  "PATCH /meetings/{meetingId}/survey": {};
  "GET /tsp": {};
  "PATCH /tsp": {};
  "GET /users/{userId}/tsp": {};
  "POST /users/{userId}/tsp": {};
  "PATCH /users/{userId}/tsp/settings": {};
  "GET /users/{userId}/tsp/{tspId}": {};
  "DELETE /users/{userId}/tsp/{tspId}": {};
  "PATCH /users/{userId}/tsp/{tspId}": {};
  "GET /users/{userId}/meeting_templates": {};
  "POST /users/{userId}/meeting_templates": {};
  "GET /tracking_fields": {};
  "POST /tracking_fields": {};
  "GET /tracking_fields/{fieldId}": {};
  "DELETE /tracking_fields/{fieldId}": {};
  "PATCH /tracking_fields/{fieldId}": {};
  "DELETE /live_webinars/{webinarId}/chat/messages/{messageId}": {
  file_ids?: string;
};
  "GET /past_webinars/{webinarId}/absentees": {
  occurrence_id?: string;
  page_size?: number;
  next_page_token?: string;
};
  "GET /past_webinars/{webinarId}/instances": {};
  "GET /past_webinars/{webinarId}/participants": {
  page_size?: number;
  next_page_token?: string;
};
  "GET /past_webinars/{webinarId}/polls": {};
  "GET /past_webinars/{webinarId}/qa": {};
  "GET /users/{userId}/webinar_templates": {};
  "POST /users/{userId}/webinar_templates": {};
  "GET /users/{userId}/webinars": {
  type?: "scheduled" | "upcoming";
  page_size?: number;
  page_number?: number;
  include_events_webinar?: boolean;
};
  "POST /users/{userId}/webinars": {};
  "GET /webinars/{webinarId}": {
  occurrence_id?: string;
  show_previous_occurrences?: boolean;
};
  "DELETE /webinars/{webinarId}": {
  occurrence_id?: string;
  cancel_webinar_reminder?: boolean;
};
  "PATCH /webinars/{webinarId}": {
  occurrence_id?: string;
};
  "POST /webinars/{webinarId}/batch_registrants": {};
  "GET /webinars/{webinarId}/branding": {};
  "POST /webinars/{webinarId}/branding/name_tags": {};
  "DELETE /webinars/{webinarId}/branding/name_tags": {
  name_tag_ids?: string;
};
  "PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}": {};
  "POST /webinars/{webinarId}/branding/virtual_backgrounds": {};
  "DELETE /webinars/{webinarId}/branding/virtual_backgrounds": {
  ids?: string;
};
  "PATCH /webinars/{webinarId}/branding/virtual_backgrounds": {
  id?: string;
  set_default_for_all_panelists?: boolean;
};
  "POST /webinars/{webinarId}/branding/wallpaper": {};
  "DELETE /webinars/{webinarId}/branding/wallpaper": {};
  "POST /webinars/{webinarId}/invite_links": {};
  "GET /webinars/{webinarId}/jointoken/live_streaming": {};
  "GET /webinars/{webinarId}/jointoken/local_archiving": {};
  "GET /webinars/{webinarId}/jointoken/local_recording": {};
  "GET /webinars/{webinarId}/livestream": {};
  "PATCH /webinars/{webinarId}/livestream": {};
  "PATCH /webinars/{webinarId}/livestream/status": {};
  "GET /webinars/{webinarId}/panelists": {};
  "POST /webinars/{webinarId}/panelists": {};
  "DELETE /webinars/{webinarId}/panelists": {};
  "DELETE /webinars/{webinarId}/panelists/{panelistId}": {};
  "GET /webinars/{webinarId}/polls": {
  anonymous?: boolean;
};
  "POST /webinars/{webinarId}/polls": {};
  "GET /webinars/{webinarId}/polls/{pollId}": {};
  "PUT /webinars/{webinarId}/polls/{pollId}": {};
  "DELETE /webinars/{webinarId}/polls/{pollId}": {};
  "GET /webinars/{webinarId}/registrants": {
  occurrence_id?: string;
  status?: "pending" | "approved" | "denied";
  tracking_source_id?: string;
  page_size?: number;
  page_number?: number;
  next_page_token?: string;
};
  "POST /webinars/{webinarId}/registrants": {
  occurrence_ids?: string;
};
  "GET /webinars/{webinarId}/registrants/questions": {};
  "PATCH /webinars/{webinarId}/registrants/questions": {};
  "PUT /webinars/{webinarId}/registrants/status": {
  occurrence_id?: string;
};
  "GET /webinars/{webinarId}/registrants/{registrantId}": {
  occurrence_id?: string;
};
  "DELETE /webinars/{webinarId}/registrants/{registrantId}": {
  occurrence_id?: string;
};
  "POST /webinars/{webinarId}/sip_dialing": {};
  "PUT /webinars/{webinarId}/status": {};
  "GET /webinars/{webinarId}/survey": {};
  "DELETE /webinars/{webinarId}/survey": {};
  "PATCH /webinars/{webinarId}/survey": {};
  "GET /webinars/{webinarId}/token": {
  type?: "closed_caption_token";
};
  "GET /webinars/{webinarId}/tracking_sources": {};
}

export interface ZoomMeetingsApiOperationQueryRequiredMap {
  "GET /archive_files": false;
  "GET /archive_files/statistics": false;
  "PATCH /archive_files/{fileId}": false;
  "GET /meetings/{meetingId}/jointoken/local_archiving": false;
  "GET /past_meetings/{meetingUUID}/archive_files": false;
  "DELETE /past_meetings/{meetingUUID}/archive_files": false;
  "GET /meetings/{meetingId}/recordings": false;
  "DELETE /meetings/{meetingId}/recordings": false;
  "GET /meetings/{meetingId}/recordings/analytics_details": false;
  "GET /meetings/{meetingId}/recordings/analytics_summary": false;
  "GET /meetings/{meetingId}/recordings/registrants": false;
  "POST /meetings/{meetingId}/recordings/registrants": false;
  "GET /meetings/{meetingId}/recordings/registrants/questions": false;
  "PATCH /meetings/{meetingId}/recordings/registrants/questions": false;
  "PUT /meetings/{meetingId}/recordings/registrants/status": false;
  "GET /meetings/{meetingId}/recordings/settings": false;
  "PATCH /meetings/{meetingId}/recordings/settings": false;
  "DELETE /meetings/{meetingId}/recordings/{recordingId}": false;
  "PUT /meetings/{meetingId}/recordings/{recordingId}/status": false;
  "GET /meetings/{meetingId}/transcript": false;
  "DELETE /meetings/{meetingId}/transcript": false;
  "PUT /meetings/{meetingUUID}/recordings/status": false;
  "GET /users/{userId}/recordings": false;
  "GET /devices": false;
  "POST /devices": false;
  "GET /devices/groups": false;
  "POST /devices/zpa/assignment": false;
  "GET /devices/zpa/settings": false;
  "POST /devices/zpa/upgrade": false;
  "DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}": false;
  "GET /devices/zpa/zdm_groups/{zdmGroupId}/versions": false;
  "GET /devices/{deviceId}": false;
  "DELETE /devices/{deviceId}": false;
  "PATCH /devices/{deviceId}": false;
  "PATCH /devices/{deviceId}/assign_group": true;
  "PATCH /devices/{deviceId}/assignment": false;
  "GET /h323/devices": false;
  "POST /h323/devices": false;
  "DELETE /h323/devices/{deviceId}": false;
  "PATCH /h323/devices/{deviceId}": false;
  "POST /meetings/{meetingId}/open_apps": false;
  "DELETE /meetings/{meetingId}/open_apps": false;
  "DELETE /live_meetings/{meetingId}/chat/messages/{messageId}": false;
  "PATCH /live_meetings/{meetingId}/chat/messages/{messageId}": false;
  "PATCH /live_meetings/{meetingId}/events": false;
  "GET /meetings/{meetingId}/jointoken/local_recording": false;
  "GET /meetings/{meetingId}/token": false;
  "POST /meetings/{meetingId}/batch_registrants": false;
  "GET /meetings/{meetingId}/invitation": false;
  "POST /meetings/{meetingId}/invite_links": false;
  "GET /meetings/{meetingId}/registrants": false;
  "POST /meetings/{meetingId}/registrants": false;
  "GET /meetings/{meetingId}/registrants/questions": false;
  "PATCH /meetings/{meetingId}/registrants/questions": false;
  "PUT /meetings/{meetingId}/registrants/status": false;
  "GET /meetings/{meetingId}/registrants/{registrantId}": false;
  "DELETE /meetings/{meetingId}/registrants/{registrantId}": false;
  "GET /meetings/{meetingId}/jointoken/live_streaming": false;
  "GET /meetings/{meetingId}/livestream": false;
  "PATCH /meetings/{meetingId}/livestream": false;
  "PATCH /meetings/{meetingId}/livestream/status": false;
  "PATCH /live_meetings/{meetingId}/rtms_app/status": false;
  "GET /meetings/{meetingId}": false;
  "DELETE /meetings/{meetingId}": false;
  "PATCH /meetings/{meetingId}": false;
  "POST /meetings/{meetingId}/sip_dialing": false;
  "PUT /meetings/{meetingId}/status": false;
  "GET /past_meetings/{meetingId}": false;
  "GET /past_meetings/{meetingId}/instances": false;
  "GET /past_meetings/{meetingId}/participants": false;
  "GET /past_meetings/{meetingId}/qa": false;
  "GET /users/{userId}/meetings": false;
  "POST /users/{userId}/meetings": false;
  "GET /users/{userId}/upcoming_meetings": false;
  "GET /users/{userId}/pac": false;
  "POST /meetings/{meetingId}/batch_polls": false;
  "GET /meetings/{meetingId}/polls": false;
  "POST /meetings/{meetingId}/polls": false;
  "GET /meetings/{meetingId}/polls/{pollId}": false;
  "PUT /meetings/{meetingId}/polls/{pollId}": false;
  "DELETE /meetings/{meetingId}/polls/{pollId}": false;
  "GET /past_meetings/{meetingId}/polls": false;
  "GET /report/activities": false;
  "GET /report/billing": false;
  "GET /report/billing/invoices": true;
  "GET /report/cloud_recording": true;
  "GET /report/daily": false;
  "GET /report/disclaimer": true;
  "GET /report/history_meetings": true;
  "GET /report/meeting_activities": true;
  "GET /report/meetings/{meetingId}": false;
  "GET /report/meetings/{meetingId}/participants": false;
  "GET /report/meetings/{meetingId}/polls": false;
  "GET /report/meetings/{meetingId}/qa": false;
  "GET /report/meetings/{meetingId}/survey": false;
  "GET /report/operationlogs": true;
  "GET /report/remote_support": true;
  "GET /report/telephone": true;
  "GET /report/upcoming_events": true;
  "GET /report/users": true;
  "GET /report/users/{userId}/meetings": true;
  "GET /report/webinars/{webinarId}": false;
  "GET /report/webinars/{webinarId}/participants": false;
  "GET /report/webinars/{webinarId}/polls": false;
  "GET /report/webinars/{webinarId}/qa": false;
  "GET /report/webinars/{webinarId}/survey": false;
  "GET /sip_phones/phones": false;
  "POST /sip_phones/phones": false;
  "DELETE /sip_phones/phones/{phoneId}": false;
  "PATCH /sip_phones/phones/{phoneId}": false;
  "GET /meetings/meeting_summaries": false;
  "GET /meetings/{meetingId}/meeting_summary": false;
  "DELETE /meetings/{meetingId}/meeting_summary": false;
  "GET /meetings/{meetingId}/survey": false;
  "DELETE /meetings/{meetingId}/survey": false;
  "PATCH /meetings/{meetingId}/survey": false;
  "GET /tsp": false;
  "PATCH /tsp": false;
  "GET /users/{userId}/tsp": false;
  "POST /users/{userId}/tsp": false;
  "PATCH /users/{userId}/tsp/settings": false;
  "GET /users/{userId}/tsp/{tspId}": false;
  "DELETE /users/{userId}/tsp/{tspId}": false;
  "PATCH /users/{userId}/tsp/{tspId}": false;
  "GET /users/{userId}/meeting_templates": false;
  "POST /users/{userId}/meeting_templates": false;
  "GET /tracking_fields": false;
  "POST /tracking_fields": false;
  "GET /tracking_fields/{fieldId}": false;
  "DELETE /tracking_fields/{fieldId}": false;
  "PATCH /tracking_fields/{fieldId}": false;
  "DELETE /live_webinars/{webinarId}/chat/messages/{messageId}": false;
  "GET /past_webinars/{webinarId}/absentees": false;
  "GET /past_webinars/{webinarId}/instances": false;
  "GET /past_webinars/{webinarId}/participants": false;
  "GET /past_webinars/{webinarId}/polls": false;
  "GET /past_webinars/{webinarId}/qa": false;
  "GET /users/{userId}/webinar_templates": false;
  "POST /users/{userId}/webinar_templates": false;
  "GET /users/{userId}/webinars": false;
  "POST /users/{userId}/webinars": false;
  "GET /webinars/{webinarId}": false;
  "DELETE /webinars/{webinarId}": false;
  "PATCH /webinars/{webinarId}": false;
  "POST /webinars/{webinarId}/batch_registrants": false;
  "GET /webinars/{webinarId}/branding": false;
  "POST /webinars/{webinarId}/branding/name_tags": false;
  "DELETE /webinars/{webinarId}/branding/name_tags": false;
  "PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}": false;
  "POST /webinars/{webinarId}/branding/virtual_backgrounds": false;
  "DELETE /webinars/{webinarId}/branding/virtual_backgrounds": false;
  "PATCH /webinars/{webinarId}/branding/virtual_backgrounds": false;
  "POST /webinars/{webinarId}/branding/wallpaper": false;
  "DELETE /webinars/{webinarId}/branding/wallpaper": false;
  "POST /webinars/{webinarId}/invite_links": false;
  "GET /webinars/{webinarId}/jointoken/live_streaming": false;
  "GET /webinars/{webinarId}/jointoken/local_archiving": false;
  "GET /webinars/{webinarId}/jointoken/local_recording": false;
  "GET /webinars/{webinarId}/livestream": false;
  "PATCH /webinars/{webinarId}/livestream": false;
  "PATCH /webinars/{webinarId}/livestream/status": false;
  "GET /webinars/{webinarId}/panelists": false;
  "POST /webinars/{webinarId}/panelists": false;
  "DELETE /webinars/{webinarId}/panelists": false;
  "DELETE /webinars/{webinarId}/panelists/{panelistId}": false;
  "GET /webinars/{webinarId}/polls": false;
  "POST /webinars/{webinarId}/polls": false;
  "GET /webinars/{webinarId}/polls/{pollId}": false;
  "PUT /webinars/{webinarId}/polls/{pollId}": false;
  "DELETE /webinars/{webinarId}/polls/{pollId}": false;
  "GET /webinars/{webinarId}/registrants": false;
  "POST /webinars/{webinarId}/registrants": false;
  "GET /webinars/{webinarId}/registrants/questions": false;
  "PATCH /webinars/{webinarId}/registrants/questions": false;
  "PUT /webinars/{webinarId}/registrants/status": false;
  "GET /webinars/{webinarId}/registrants/{registrantId}": false;
  "DELETE /webinars/{webinarId}/registrants/{registrantId}": false;
  "POST /webinars/{webinarId}/sip_dialing": false;
  "PUT /webinars/{webinarId}/status": false;
  "GET /webinars/{webinarId}/survey": false;
  "DELETE /webinars/{webinarId}/survey": false;
  "PATCH /webinars/{webinarId}/survey": false;
  "GET /webinars/{webinarId}/token": false;
  "GET /webinars/{webinarId}/tracking_sources": false;
}

export interface ZoomMeetingsApiOperationRequestBodyMap {
  "GET /archive_files": never;
  "GET /archive_files/statistics": never;
  "PATCH /archive_files/{fileId}": {
  auto_delete: boolean;
};
  "GET /meetings/{meetingId}/jointoken/local_archiving": never;
  "GET /past_meetings/{meetingUUID}/archive_files": never;
  "DELETE /past_meetings/{meetingUUID}/archive_files": never;
  "GET /meetings/{meetingId}/recordings": never;
  "DELETE /meetings/{meetingId}/recordings": never;
  "GET /meetings/{meetingId}/recordings/analytics_details": never;
  "GET /meetings/{meetingId}/recordings/analytics_summary": never;
  "GET /meetings/{meetingId}/recordings/registrants": never;
  "POST /meetings/{meetingId}/recordings/registrants": ({
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-250" | "251-500" | "501-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  state?: string;
  status?: "approved" | "denied" | "pending";
  zip?: string;
});
  "GET /meetings/{meetingId}/recordings/registrants/questions": never;
  "PATCH /meetings/{meetingId}/recordings/registrants/questions": ({
  custom_questions?: ReadonlyArray<{
  answers?: ReadonlyArray<string>;
  required?: boolean;
  title?: string;
  type?: "short" | "single" | "multiple";
}>;
  questions?: ReadonlyArray<{
  field_name?: "last_name" | "address" | "city" | "country" | "zip" | "state" | "phone" | "industry" | "org" | "job_title" | "purchasing_time_frame" | "role_in_purchase_process" | "no_of_employees" | "comments";
  required?: boolean;
}>;
});
  "PUT /meetings/{meetingId}/recordings/registrants/status": {
  action: "approve" | "deny";
  registrants?: ReadonlyArray<{
  id?: string;
}>;
};
  "GET /meetings/{meetingId}/recordings/settings": never;
  "PATCH /meetings/{meetingId}/recordings/settings": {
  approval_type?: 0 | 1 | 2;
  authentication_domains?: string;
  authentication_option?: string;
  on_demand?: boolean;
  password?: string;
  recording_authentication?: boolean;
  send_email_to_host?: boolean;
  share_recording?: "publicly" | "internally" | "none";
  show_social_share_buttons?: boolean;
  topic?: string;
  viewer_download?: boolean;
  auto_delete?: boolean;
};
  "DELETE /meetings/{meetingId}/recordings/{recordingId}": never;
  "PUT /meetings/{meetingId}/recordings/{recordingId}/status": {
  action?: "recover";
};
  "GET /meetings/{meetingId}/transcript": never;
  "DELETE /meetings/{meetingId}/transcript": never;
  "PUT /meetings/{meetingUUID}/recordings/status": {
  action?: "recover";
};
  "GET /users/{userId}/recordings": never;
  "GET /devices": never;
  "POST /devices": {
  device_name: string;
  mac_address: string;
  serial_number: string;
  vendor: string;
  model: string;
  room_id?: string;
  user_email?: string;
  device_type: 0 | 1 | 5;
  tag?: string;
  zdm_group_id?: string;
  extension_number?: string;
};
  "GET /devices/groups": never;
  "POST /devices/zpa/assignment": {
  extension_number?: string;
  mac_address: string;
  vendor: string;
};
  "GET /devices/zpa/settings": never;
  "POST /devices/zpa/upgrade": {
  zdm_group_id: string;
  data: ({
  firmware_versions?: ReadonlyArray<{
  vendor?: string;
  version?: string;
  model?: string;
}>;
  upgrade_type: "UPGRADE_FIRMWARE";
} | {
  app_version?: string;
  upgrade_type: "UPGRADE_APP";
});
};
  "DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}": never;
  "GET /devices/zpa/zdm_groups/{zdmGroupId}/versions": never;
  "GET /devices/{deviceId}": never;
  "DELETE /devices/{deviceId}": never;
  "PATCH /devices/{deviceId}": {
  device_name: string;
  tag?: string;
  room_id?: string;
  device_type?: 0 | 1 | 3;
};
  "PATCH /devices/{deviceId}/assign_group": never;
  "PATCH /devices/{deviceId}/assignment": {
  room_id?: string;
  app_type?: "ZR" | "ZRC" | "ZRP" | "ZRW";
};
  "GET /h323/devices": never;
  "POST /h323/devices": {
  encryption: "auto" | "yes" | "no";
  ip: string;
  name: string;
  protocol: "H.323" | "SIP";
};
  "DELETE /h323/devices/{deviceId}": never;
  "PATCH /h323/devices/{deviceId}": {
  encryption: "auto" | "yes" | "no";
  ip: string;
  name: string;
  protocol: "H.323" | "SIP";
};
  "POST /meetings/{meetingId}/open_apps": never;
  "DELETE /meetings/{meetingId}/open_apps": never;
  "DELETE /live_meetings/{meetingId}/chat/messages/{messageId}": never;
  "PATCH /live_meetings/{meetingId}/chat/messages/{messageId}": {
  message_content: string;
};
  "PATCH /live_meetings/{meetingId}/events": {
  method?: "recording.start" | "recording.stop" | "recording.pause" | "recording.resume" | "participant.invite" | "participant.invite.callout" | "participant.invite.room_system_callout" | "waiting_room.update" | "ai_companion.start" | "ai_companion.stop" | "ai_companion.disable" | "participant.remove";
  params?: {
  contacts?: ReadonlyArray<{
  email?: string;
  id?: string;
}>;
  invitee_name?: string;
  phone_number?: string;
  invite_options?: {
  require_greeting?: boolean;
  require_pressing_one?: boolean;
};
  call_type?: string;
  device_ip?: string;
  h323_headers?: {
  from_display_name?: string;
  to_display_name?: string;
};
  sip_headers?: {
  from_display_name?: string;
  to_display_name?: string;
  from_uri?: string;
  additional_headers?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
};
  participant_uuid?: string;
  waiting_room_title?: string;
  waiting_room_description?: string;
  ai_companion_mode?: "questions" | "summary" | "all";
  retain_meeting_transcript?: boolean;
  delete_meeting_assets?: boolean;
};
};
  "GET /meetings/{meetingId}/jointoken/local_recording": never;
  "GET /meetings/{meetingId}/token": never;
  "POST /meetings/{meetingId}/batch_registrants": {
  auto_approve?: boolean;
  registrants_confirmation_email?: boolean;
  registrants?: ReadonlyArray<{
  email: string;
  first_name: string;
  last_name?: string;
}>;
};
  "GET /meetings/{meetingId}/invitation": never;
  "POST /meetings/{meetingId}/invite_links": {
  attendees?: ReadonlyArray<{
  name: string;
  disable_video?: boolean;
  disable_audio?: boolean;
}>;
  ttl?: number;
};
  "GET /meetings/{meetingId}/registrants": never;
  "POST /meetings/{meetingId}/registrants": ({
  first_name: string;
  last_name?: string;
  email: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  phone?: string;
  comments?: string;
  custom_questions?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  industry?: string;
  job_title?: string;
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-500" | "500-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  org?: string;
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
} & {
  language?: "en-US" | "de-DE" | "es-ES" | "fr-FR" | "jp-JP" | "pt-PT" | "ru-RU" | "zh-CN" | "zh-TW" | "ko-KO" | "it-IT" | "vi-VN" | "pl-PL" | "Tr-TR";
} & {
  auto_approve?: boolean;
});
  "GET /meetings/{meetingId}/registrants/questions": never;
  "PATCH /meetings/{meetingId}/registrants/questions": ({
  custom_questions?: ReadonlyArray<{
  answers?: ReadonlyArray<string>;
  required?: boolean;
  title?: string;
  type?: "short" | "single";
}>;
  questions?: ReadonlyArray<{
  field_name?: "last_name" | "address" | "city" | "country" | "zip" | "state" | "phone" | "industry" | "org" | "job_title" | "purchasing_time_frame" | "role_in_purchase_process" | "no_of_employees" | "comments";
  required?: boolean;
}>;
});
  "PUT /meetings/{meetingId}/registrants/status": {
  action: "approve" | "cancel" | "deny";
  registrants?: ReadonlyArray<{
  email?: string;
  id?: string;
}>;
};
  "GET /meetings/{meetingId}/registrants/{registrantId}": never;
  "DELETE /meetings/{meetingId}/registrants/{registrantId}": never;
  "GET /meetings/{meetingId}/jointoken/live_streaming": never;
  "GET /meetings/{meetingId}/livestream": never;
  "PATCH /meetings/{meetingId}/livestream": {
  page_url: string;
  stream_key: string;
  stream_url: string;
  resolution?: string;
};
  "PATCH /meetings/{meetingId}/livestream/status": {
  action?: "start" | "stop" | "mode";
  settings?: {
  active_speaker_name?: boolean;
  display_name?: string;
  layout?: "follow_host" | "gallery_view" | "speaker_view";
  close_caption?: "burnt-in" | "embedded" | "off";
};
};
  "PATCH /live_meetings/{meetingId}/rtms_app/status": {
  action?: "start" | "stop" | "pause" | "resume";
  settings?: {
  participant_user_id?: string;
  client_id: string;
};
};
  "GET /meetings/{meetingId}": never;
  "DELETE /meetings/{meetingId}": never;
  "PATCH /meetings/{meetingId}": {
  agenda?: string;
  duration?: number;
  password?: string;
  pre_schedule?: boolean;
  schedule_for?: string;
  recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
};
  settings?: {
  allow_multiple_devices?: boolean;
  alternative_hosts?: string;
  alternative_hosts_email_notification?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_host_manage_meeting_summary?: boolean;
  alternative_host_manage_cloud_recording?: boolean;
  approval_type?: 0 | 1 | 2;
  approved_or_denied_countries_or_regions?: {
  approved_list?: ReadonlyArray<string>;
  denied_list?: ReadonlyArray<string>;
  enable?: boolean;
  method?: "approve" | "deny";
};
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_exception?: ReadonlyArray<{
  email?: string;
  name?: string;
  join_url?: string;
}>;
  authentication_name?: string;
  authentication_option?: string;
  auto_recording?: "local" | "cloud" | "none";
  auto_add_recording_to_video_management?: {
  enable: boolean;
  channels?: ReadonlyArray<{
  channel_id: string;
  name?: string;
}>;
};
  breakout_room?: {
  enable?: boolean;
  rooms?: ReadonlyArray<{
  name?: string;
  participants?: ReadonlyArray<string>;
}>;
};
  calendar_type?: 1 | 2;
  close_registration?: boolean;
  cn_meeting?: boolean;
  contact_email?: string;
  contact_name?: string;
  custom_keys?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
  email_notification?: boolean;
  encryption_type?: "enhanced_encryption" | "e2ee";
  enforce_login?: boolean;
  enforce_login_domains?: string;
  focus_mode?: boolean;
  global_dial_in_countries?: ReadonlyArray<string>;
  global_dial_in_numbers?: ReadonlyArray<{
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree";
}>;
  host_video?: boolean;
  in_meeting?: boolean;
  jbh_time?: 0 | 5 | 10 | 15;
  join_before_host?: boolean;
  question_and_answer?: {
  enable?: boolean;
  allow_submit_questions?: boolean;
  allow_anonymous_questions?: boolean;
  question_visibility?: "answered" | "all";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
};
  language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  languages?: string;
  interpreter_languages?: string;
}>;
};
  sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  sign_language?: string;
}>;
};
  meeting_authentication?: boolean;
  meeting_invitees?: ReadonlyArray<{
  email?: string;
}>;
  mute_upon_entry?: boolean;
  participant_video?: boolean;
  private_meeting?: boolean;
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registration_type?: 1 | 2 | 3;
  show_share_button?: boolean;
  use_pmi?: boolean;
  waiting_room?: boolean;
  waiting_room_options?: {
  mode: "follow_setting" | "custom";
  who_goes_to_waiting_room?: "everyone" | "users_not_in_account" | "users_not_in_account_or_whitelisted_domains" | "users_not_on_invite" | "users_not_in_org";
};
  watermark?: boolean;
  host_save_video_order?: boolean;
  internal_meeting?: boolean;
  continuous_meeting_chat?: {
  enable?: boolean;
  auto_add_invited_external_users?: boolean;
  auto_add_meeting_participants?: boolean;
};
  participant_focused_meeting?: boolean;
  push_change_to_calendar?: boolean;
  resources?: ReadonlyArray<{
  resource_type?: "whiteboard";
  resource_id?: string;
  permission_level?: "editor" | "commenter" | "viewer";
}>;
  auto_start_meeting_summary?: boolean;
  who_will_receive_summary?: 1 | 2 | 3 | 4;
  auto_start_ai_companion_questions?: boolean;
  who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
  summary_template_id?: string;
  device_testing?: boolean;
  request_permission_to_unmute_participants?: boolean;
  allow_host_control_participant_mute_state?: boolean;
  disable_participant_video?: boolean;
  email_in_attendee_report?: boolean;
};
  start_time?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: ReadonlyArray<{
  field?: string;
  value?: string;
}>;
  type?: 1 | 2 | 3 | 8 | 10;
};
  "POST /meetings/{meetingId}/sip_dialing": {
  passcode?: string;
};
  "PUT /meetings/{meetingId}/status": {
  action?: "end" | "recover";
};
  "GET /past_meetings/{meetingId}": never;
  "GET /past_meetings/{meetingId}/instances": never;
  "GET /past_meetings/{meetingId}/participants": never;
  "GET /past_meetings/{meetingId}/qa": never;
  "GET /users/{userId}/meetings": never;
  "POST /users/{userId}/meetings": {
  agenda?: string;
  default_password?: boolean;
  duration?: number;
  password?: string;
  pre_schedule?: boolean;
  recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
};
  schedule_for?: string;
  settings?: {
  additional_data_center_regions?: ReadonlyArray<string>;
  allow_multiple_devices?: boolean;
  alternative_hosts?: string;
  alternative_hosts_email_notification?: boolean;
  approval_type?: 0 | 1 | 2;
  approved_or_denied_countries_or_regions?: {
  approved_list?: ReadonlyArray<string>;
  denied_list?: ReadonlyArray<string>;
  enable?: boolean;
  method?: "approve" | "deny";
};
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_exception?: ReadonlyArray<{
  email?: string;
  name?: string;
}>;
  authentication_option?: string;
  auto_recording?: "local" | "cloud" | "none";
  auto_add_recording_to_video_management?: {
  enable: boolean;
  channels?: ReadonlyArray<{
  channel_id: string;
  name?: string;
}>;
};
  breakout_room?: {
  enable?: boolean;
  rooms?: ReadonlyArray<{
  name?: string;
  participants?: ReadonlyArray<string>;
}>;
};
  calendar_type?: 1 | 2;
  close_registration?: boolean;
  cn_meeting?: boolean;
  contact_email?: string;
  contact_name?: string;
  email_notification?: boolean;
  encryption_type?: "enhanced_encryption" | "e2ee";
  focus_mode?: boolean;
  global_dial_in_countries?: ReadonlyArray<string>;
  host_video?: boolean;
  in_meeting?: boolean;
  jbh_time?: 0 | 5 | 10 | 15;
  join_before_host?: boolean;
  question_and_answer?: {
  enable?: boolean;
  allow_submit_questions?: boolean;
  allow_anonymous_questions?: boolean;
  question_visibility?: "answered" | "all";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
};
  language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  languages?: string;
  interpreter_languages?: string;
}>;
};
  sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  sign_language?: string;
}>;
};
  meeting_authentication?: boolean;
  meeting_invitees?: ReadonlyArray<{
  email?: string;
}>;
  mute_upon_entry?: boolean;
  participant_video?: boolean;
  private_meeting?: boolean;
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registration_type?: 1 | 2 | 3;
  show_share_button?: boolean;
  show_join_info?: boolean;
  use_pmi?: boolean;
  waiting_room?: boolean;
  waiting_room_options?: {
  mode: "follow_setting" | "custom";
  who_goes_to_waiting_room?: "everyone" | "users_not_in_account" | "users_not_in_account_or_whitelisted_domains" | "users_not_on_invite" | "users_not_in_org";
};
  watermark?: boolean;
  host_save_video_order?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_host_manage_meeting_summary?: boolean;
  alternative_host_manage_cloud_recording?: boolean;
  internal_meeting?: boolean;
  continuous_meeting_chat?: {
  enable?: boolean;
  auto_add_invited_external_users?: boolean;
  auto_add_meeting_participants?: boolean;
};
  participant_focused_meeting?: boolean;
  push_change_to_calendar?: boolean;
  resources?: ReadonlyArray<{
  resource_type?: "whiteboard";
  resource_id?: string;
  permission_level?: "editor" | "commenter" | "viewer";
}>;
  auto_start_meeting_summary?: boolean;
  who_will_receive_summary?: 1 | 2 | 3 | 4;
  auto_start_ai_companion_questions?: boolean;
  who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
  summary_template_id?: string;
  device_testing?: boolean;
  request_permission_to_unmute_participants?: boolean;
  allow_host_control_participant_mute_state?: boolean;
  disable_participant_video?: boolean;
  email_in_attendee_report?: boolean;
};
  start_time?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: ReadonlyArray<{
  field: string;
  value?: string;
}>;
  type?: 1 | 2 | 3 | 8 | 10;
};
  "GET /users/{userId}/upcoming_meetings": never;
  "GET /users/{userId}/pac": never;
  "POST /meetings/{meetingId}/batch_polls": {
  polls?: ReadonlyArray<{
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
}>;
};
  "GET /meetings/{meetingId}/polls": never;
  "POST /meetings/{meetingId}/polls": ({
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
});
  "GET /meetings/{meetingId}/polls/{pollId}": never;
  "PUT /meetings/{meetingId}/polls/{pollId}": ({
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
});
  "DELETE /meetings/{meetingId}/polls/{pollId}": never;
  "GET /past_meetings/{meetingId}/polls": never;
  "GET /report/activities": never;
  "GET /report/billing": never;
  "GET /report/billing/invoices": never;
  "GET /report/cloud_recording": never;
  "GET /report/daily": never;
  "GET /report/disclaimer": never;
  "GET /report/history_meetings": never;
  "GET /report/meeting_activities": never;
  "GET /report/meetings/{meetingId}": never;
  "GET /report/meetings/{meetingId}/participants": never;
  "GET /report/meetings/{meetingId}/polls": never;
  "GET /report/meetings/{meetingId}/qa": never;
  "GET /report/meetings/{meetingId}/survey": never;
  "GET /report/operationlogs": never;
  "GET /report/remote_support": never;
  "GET /report/telephone": never;
  "GET /report/upcoming_events": never;
  "GET /report/users": never;
  "GET /report/users/{userId}/meetings": never;
  "GET /report/webinars/{webinarId}": never;
  "GET /report/webinars/{webinarId}/participants": never;
  "GET /report/webinars/{webinarId}/polls": never;
  "GET /report/webinars/{webinarId}/qa": never;
  "GET /report/webinars/{webinarId}/survey": never;
  "GET /sip_phones/phones": never;
  "POST /sip_phones/phones": {
  authorization_name: string;
  domain: string;
  password: string;
  registration_expire_time?: number;
  user_email: string;
  user_name: string;
  voice_mail?: string;
  display_number?: string;
  server: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
  server_2?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
  server_3?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
};
  "DELETE /sip_phones/phones/{phoneId}": never;
  "PATCH /sip_phones/phones/{phoneId}": {
  authorization_name?: string;
  domain?: string;
  password?: string;
  registration_expire_time?: number;
  user_name?: string;
  voice_mail?: string;
  display_number?: string;
  server?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
  server_2?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
  server_3?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
};
  "GET /meetings/meeting_summaries": never;
  "GET /meetings/{meetingId}/meeting_summary": never;
  "DELETE /meetings/{meetingId}/meeting_summary": never;
  "GET /meetings/{meetingId}/survey": never;
  "DELETE /meetings/{meetingId}/survey": never;
  "PATCH /meetings/{meetingId}/survey": {
  custom_survey?: {
  title?: string;
  anonymous?: boolean;
  numbered_questions?: boolean;
  show_question_type?: boolean;
  feedback?: string;
  questions?: ReadonlyArray<{
  name?: string;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
  answer_required?: boolean;
  show_as_dropdown?: boolean;
  answers?: ReadonlyArray<string>;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
}>;
  answer_min_character?: number;
  answer_max_character?: number;
  rating_min_value?: number;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_max_label?: string;
}>;
};
  show_in_the_browser?: boolean;
  third_party_survey?: string;
};
  "GET /tsp": never;
  "PATCH /tsp": {
  dial_in_number_unrestricted?: boolean;
  enable?: boolean;
  master_account_setting_extended?: boolean;
  modify_credential_forbidden?: boolean;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
  tsp_enabled?: boolean;
  tsp_provider?: string;
};
  "GET /users/{userId}/tsp": never;
  "POST /users/{userId}/tsp": {
  conference_code: string;
  dial_in_numbers?: ReadonlyArray<{
  code?: string;
  country_label?: string;
  number?: string;
  type?: "toll" | "tollfree" | "media_link";
}>;
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
};
  "PATCH /users/{userId}/tsp/settings": {
  audio_url?: string;
};
  "GET /users/{userId}/tsp/{tspId}": never;
  "DELETE /users/{userId}/tsp/{tspId}": never;
  "PATCH /users/{userId}/tsp/{tspId}": {
  conference_code: string;
  dial_in_numbers?: ReadonlyArray<{
  code?: string;
  country_label?: string;
  number?: string;
  type?: "toll" | "tollfree" | "media_link";
}>;
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
};
  "GET /users/{userId}/meeting_templates": never;
  "POST /users/{userId}/meeting_templates": {
  meeting_id?: number;
  name?: string;
  save_recurrence?: boolean;
  overwrite?: boolean;
};
  "GET /tracking_fields": never;
  "POST /tracking_fields": {
  field?: string;
  recommended_values?: ReadonlyArray<string>;
  required?: boolean;
  visible?: boolean;
};
  "GET /tracking_fields/{fieldId}": never;
  "DELETE /tracking_fields/{fieldId}": never;
  "PATCH /tracking_fields/{fieldId}": {
  field?: string;
  recommended_values?: ReadonlyArray<string>;
  required?: boolean;
  visible?: boolean;
};
  "DELETE /live_webinars/{webinarId}/chat/messages/{messageId}": never;
  "GET /past_webinars/{webinarId}/absentees": never;
  "GET /past_webinars/{webinarId}/instances": never;
  "GET /past_webinars/{webinarId}/participants": never;
  "GET /past_webinars/{webinarId}/polls": never;
  "GET /past_webinars/{webinarId}/qa": never;
  "GET /users/{userId}/webinar_templates": never;
  "POST /users/{userId}/webinar_templates": {
  webinar_id?: number;
  name?: string;
  save_recurrence?: boolean;
  overwrite?: boolean;
};
  "GET /users/{userId}/webinars": never;
  "POST /users/{userId}/webinars": {
  agenda?: string;
  duration?: number;
  password?: string;
  default_passcode?: boolean;
  recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: string;
};
  schedule_for?: string;
  settings?: {
  additional_data_center_regions?: ReadonlyArray<string>;
  allow_multiple_devices?: boolean;
  alternative_hosts?: string;
  alternative_host_update_polls?: boolean;
  approval_type?: 0 | 1 | 2;
  attendees_and_panelists_reminder_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_option?: string;
  auto_recording?: "local" | "cloud" | "none";
  close_registration?: boolean;
  contact_email?: string;
  contact_name?: string;
  email_language?: string;
  enforce_login?: boolean;
  enforce_login_domains?: string;
  follow_up_absentees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  follow_up_attendees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  global_dial_in_countries?: ReadonlyArray<string>;
  hd_video?: boolean;
  hd_video_for_attendees?: boolean;
  host_video?: boolean;
  language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  languages?: string;
  interpreter_languages?: string;
}>;
};
  sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  sign_language?: string;
}>;
};
  panelist_authentication?: boolean;
  meeting_authentication?: boolean;
  add_watermark?: boolean;
  add_audio_watermark?: boolean;
  on_demand?: boolean;
  panelists_invitation_email_notification?: boolean;
  panelists_video?: boolean;
  post_webinar_survey?: boolean;
  practice_session?: boolean;
  question_and_answer?: {
  allow_submit_questions?: boolean;
  allow_anonymous_questions?: boolean;
  answer_questions?: "only" | "all";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  allow_auto_reply?: boolean;
  auto_reply_text?: string;
  enable?: boolean;
};
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registrants_restrict_number?: number;
  registration_type?: 1 | 2 | 3;
  send_1080p_video_to_attendees?: boolean;
  show_share_button?: boolean;
  show_join_info?: boolean;
  survey_url?: string;
  enable_session_branding?: boolean;
  request_permission_to_unmute_participants?: boolean;
  allow_host_control_participant_mute_state?: boolean;
  email_in_attendee_report?: boolean;
};
  start_time?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: ReadonlyArray<{
  field: string;
  value?: string;
}>;
  type?: 5 | 6 | 9;
  is_simulive?: boolean;
  record_file_id?: string;
  transition_to_live?: boolean;
  simulive_delay_start?: {
  enable?: boolean;
  time?: number;
  timeunit?: "second" | "minute";
};
};
  "GET /webinars/{webinarId}": never;
  "DELETE /webinars/{webinarId}": never;
  "PATCH /webinars/{webinarId}": {
  agenda?: string;
  duration?: number;
  password?: string;
  schedule_for?: string;
  recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
};
  settings?: {
  additional_data_center_regions?: ReadonlyArray<string>;
  allow_multiple_devices?: boolean;
  alternative_hosts?: string;
  alternative_host_update_polls?: boolean;
  approval_type?: 0 | 1 | 2;
  attendees_and_panelists_reminder_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_option?: string;
  auto_recording?: "local" | "cloud" | "none";
  close_registration?: boolean;
  contact_email?: string;
  contact_name?: string;
  email_language?: string;
  enforce_login?: boolean;
  enforce_login_domains?: string;
  follow_up_absentees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  follow_up_attendees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  global_dial_in_countries?: ReadonlyArray<string>;
  hd_video?: boolean;
  hd_video_for_attendees?: boolean;
  host_video?: boolean;
  language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  languages?: string;
  interpreter_languages?: string;
}>;
};
  sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  sign_language?: string;
}>;
};
  panelist_authentication?: boolean;
  meeting_authentication?: boolean;
  add_watermark?: boolean;
  add_audio_watermark?: boolean;
  notify_registrants?: boolean;
  on_demand?: boolean;
  panelists_invitation_email_notification?: boolean;
  panelists_video?: boolean;
  post_webinar_survey?: boolean;
  practice_session?: boolean;
  question_and_answer?: {
  allow_submit_questions?: boolean;
  allow_anonymous_questions?: boolean;
  answer_questions?: "only" | "all";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  allow_auto_reply?: boolean;
  auto_reply_text?: string;
  enable?: boolean;
};
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registrants_restrict_number?: number;
  registration_type?: 1 | 2 | 3;
  send_1080p_video_to_attendees?: boolean;
  show_share_button?: boolean;
  show_join_info?: boolean;
  survey_url?: string;
  enable_session_branding?: boolean;
  request_permission_to_unmute_participants?: boolean;
  allow_host_control_participant_mute_state?: boolean;
  email_in_attendee_report?: boolean;
};
  start_time?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: ReadonlyArray<{
  field?: string;
  value?: string;
}>;
  type?: 5 | 6 | 9;
  is_simulive?: boolean;
  record_file_id?: string;
  transition_to_live?: boolean;
  simulive_delay_start?: {
  enable?: boolean;
  time?: number;
  timeunit?: "second" | "minute";
};
};
  "POST /webinars/{webinarId}/batch_registrants": {
  auto_approve?: boolean;
  registrants?: ReadonlyArray<{
  email: string;
  first_name: string;
  last_name?: string;
}>;
};
  "GET /webinars/{webinarId}/branding": never;
  "POST /webinars/{webinarId}/branding/name_tags": {
  name: string;
  text_color: string;
  accent_color: string;
  background_color: string;
  is_default?: boolean;
  set_default_for_all_panelists?: boolean;
};
  "DELETE /webinars/{webinarId}/branding/name_tags": never;
  "PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}": {
  name?: string;
  text_color?: string;
  accent_color?: string;
  background_color?: string;
  is_default?: boolean;
  set_default_for_all_panelists?: boolean;
};
  "POST /webinars/{webinarId}/branding/virtual_backgrounds": {
  file: string;
  default?: boolean;
  set_default_for_all_panelists?: boolean;
};
  "DELETE /webinars/{webinarId}/branding/virtual_backgrounds": never;
  "PATCH /webinars/{webinarId}/branding/virtual_backgrounds": never;
  "POST /webinars/{webinarId}/branding/wallpaper": {
  file: string;
};
  "DELETE /webinars/{webinarId}/branding/wallpaper": never;
  "POST /webinars/{webinarId}/invite_links": {
  attendees?: ReadonlyArray<{
  name: string;
  disable_video?: boolean;
  disable_audio?: boolean;
}>;
  ttl?: number;
};
  "GET /webinars/{webinarId}/jointoken/live_streaming": never;
  "GET /webinars/{webinarId}/jointoken/local_archiving": never;
  "GET /webinars/{webinarId}/jointoken/local_recording": never;
  "GET /webinars/{webinarId}/livestream": never;
  "PATCH /webinars/{webinarId}/livestream": {
  page_url: string;
  stream_key: string;
  stream_url: string;
  resolution?: string;
};
  "PATCH /webinars/{webinarId}/livestream/status": {
  action?: "start" | "stop";
  settings?: {
  active_speaker_name?: boolean;
  display_name?: string;
  close_caption?: "burnt-in" | "embedded" | "off";
};
};
  "GET /webinars/{webinarId}/panelists": never;
  "POST /webinars/{webinarId}/panelists": {
  panelists?: ReadonlyArray<({
  email?: string;
  name?: string;
} & {
  virtual_background_id?: string;
  name_tag_id?: string;
  name_tag_name?: string;
  name_tag_pronouns?: string;
  name_tag_description?: string;
})>;
};
  "DELETE /webinars/{webinarId}/panelists": never;
  "DELETE /webinars/{webinarId}/panelists/{panelistId}": never;
  "GET /webinars/{webinarId}/polls": never;
  "POST /webinars/{webinarId}/polls": ({
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
});
  "GET /webinars/{webinarId}/polls/{pollId}": never;
  "PUT /webinars/{webinarId}/polls/{pollId}": ({
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
});
  "DELETE /webinars/{webinarId}/polls/{pollId}": never;
  "GET /webinars/{webinarId}/registrants": never;
  "POST /webinars/{webinarId}/registrants": {
  first_name: string;
  last_name?: string;
  email: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  phone?: string;
  comments?: string;
  custom_questions?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  industry?: string;
  job_title?: string;
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-500" | "500-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  org?: string;
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  language?: "en-US" | "de-DE" | "es-ES" | "fr-FR" | "jp-JP" | "pt-PT" | "ru-RU" | "zh-CN" | "zh-TW" | "ko-KO" | "it-IT" | "vi-VN" | "pl-PL" | "Tr-TR";
  source_id?: string;
};
  "GET /webinars/{webinarId}/registrants/questions": never;
  "PATCH /webinars/{webinarId}/registrants/questions": ({
  custom_questions?: ReadonlyArray<{
  answers?: ReadonlyArray<string>;
  required?: boolean;
  title?: string;
  type?: "short" | "single_radio" | "single_dropdown" | "multiple";
}>;
  questions?: ReadonlyArray<{
  field_name?: "last_name" | "address" | "city" | "country" | "zip" | "state" | "phone" | "industry" | "org" | "job_title" | "purchasing_time_frame" | "role_in_purchase_process" | "no_of_employees" | "comments";
  required?: boolean;
}>;
});
  "PUT /webinars/{webinarId}/registrants/status": {
  action: "approve" | "deny" | "cancel";
  registrants?: ReadonlyArray<{
  email?: string;
  id?: string;
}>;
};
  "GET /webinars/{webinarId}/registrants/{registrantId}": never;
  "DELETE /webinars/{webinarId}/registrants/{registrantId}": never;
  "POST /webinars/{webinarId}/sip_dialing": {
  passcode?: string;
};
  "PUT /webinars/{webinarId}/status": {
  action?: "end";
};
  "GET /webinars/{webinarId}/survey": never;
  "DELETE /webinars/{webinarId}/survey": never;
  "PATCH /webinars/{webinarId}/survey": ({
  custom_survey?: {
  title?: string;
  anonymous?: boolean;
  numbered_questions?: boolean;
  show_question_type?: boolean;
  feedback?: string;
  questions?: ReadonlyArray<{
  name?: string;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
  answer_required?: boolean;
  show_as_dropdown?: boolean;
  answers?: ReadonlyArray<string>;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
}>;
  answer_min_character?: number;
  answer_max_character?: number;
  rating_min_value?: number;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_max_label?: string;
}>;
};
  show_in_the_browser?: boolean;
  show_in_the_follow_up_email?: boolean;
  third_party_survey?: string;
});
  "GET /webinars/{webinarId}/token": never;
  "GET /webinars/{webinarId}/tracking_sources": never;
}

export interface ZoomMeetingsApiOperationRequestBodyRequiredMap {
  "GET /archive_files": false;
  "GET /archive_files/statistics": false;
  "PATCH /archive_files/{fileId}": false;
  "GET /meetings/{meetingId}/jointoken/local_archiving": false;
  "GET /past_meetings/{meetingUUID}/archive_files": false;
  "DELETE /past_meetings/{meetingUUID}/archive_files": false;
  "GET /meetings/{meetingId}/recordings": false;
  "DELETE /meetings/{meetingId}/recordings": false;
  "GET /meetings/{meetingId}/recordings/analytics_details": false;
  "GET /meetings/{meetingId}/recordings/analytics_summary": false;
  "GET /meetings/{meetingId}/recordings/registrants": false;
  "POST /meetings/{meetingId}/recordings/registrants": false;
  "GET /meetings/{meetingId}/recordings/registrants/questions": false;
  "PATCH /meetings/{meetingId}/recordings/registrants/questions": false;
  "PUT /meetings/{meetingId}/recordings/registrants/status": false;
  "GET /meetings/{meetingId}/recordings/settings": false;
  "PATCH /meetings/{meetingId}/recordings/settings": false;
  "DELETE /meetings/{meetingId}/recordings/{recordingId}": false;
  "PUT /meetings/{meetingId}/recordings/{recordingId}/status": false;
  "GET /meetings/{meetingId}/transcript": false;
  "DELETE /meetings/{meetingId}/transcript": false;
  "PUT /meetings/{meetingUUID}/recordings/status": false;
  "GET /users/{userId}/recordings": false;
  "GET /devices": false;
  "POST /devices": false;
  "GET /devices/groups": false;
  "POST /devices/zpa/assignment": false;
  "GET /devices/zpa/settings": false;
  "POST /devices/zpa/upgrade": false;
  "DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}": false;
  "GET /devices/zpa/zdm_groups/{zdmGroupId}/versions": false;
  "GET /devices/{deviceId}": false;
  "DELETE /devices/{deviceId}": false;
  "PATCH /devices/{deviceId}": false;
  "PATCH /devices/{deviceId}/assign_group": false;
  "PATCH /devices/{deviceId}/assignment": false;
  "GET /h323/devices": false;
  "POST /h323/devices": false;
  "DELETE /h323/devices/{deviceId}": false;
  "PATCH /h323/devices/{deviceId}": false;
  "POST /meetings/{meetingId}/open_apps": false;
  "DELETE /meetings/{meetingId}/open_apps": false;
  "DELETE /live_meetings/{meetingId}/chat/messages/{messageId}": false;
  "PATCH /live_meetings/{meetingId}/chat/messages/{messageId}": false;
  "PATCH /live_meetings/{meetingId}/events": false;
  "GET /meetings/{meetingId}/jointoken/local_recording": false;
  "GET /meetings/{meetingId}/token": false;
  "POST /meetings/{meetingId}/batch_registrants": false;
  "GET /meetings/{meetingId}/invitation": false;
  "POST /meetings/{meetingId}/invite_links": false;
  "GET /meetings/{meetingId}/registrants": false;
  "POST /meetings/{meetingId}/registrants": false;
  "GET /meetings/{meetingId}/registrants/questions": false;
  "PATCH /meetings/{meetingId}/registrants/questions": false;
  "PUT /meetings/{meetingId}/registrants/status": false;
  "GET /meetings/{meetingId}/registrants/{registrantId}": false;
  "DELETE /meetings/{meetingId}/registrants/{registrantId}": false;
  "GET /meetings/{meetingId}/jointoken/live_streaming": false;
  "GET /meetings/{meetingId}/livestream": false;
  "PATCH /meetings/{meetingId}/livestream": false;
  "PATCH /meetings/{meetingId}/livestream/status": false;
  "PATCH /live_meetings/{meetingId}/rtms_app/status": false;
  "GET /meetings/{meetingId}": false;
  "DELETE /meetings/{meetingId}": false;
  "PATCH /meetings/{meetingId}": false;
  "POST /meetings/{meetingId}/sip_dialing": false;
  "PUT /meetings/{meetingId}/status": false;
  "GET /past_meetings/{meetingId}": false;
  "GET /past_meetings/{meetingId}/instances": false;
  "GET /past_meetings/{meetingId}/participants": false;
  "GET /past_meetings/{meetingId}/qa": false;
  "GET /users/{userId}/meetings": false;
  "POST /users/{userId}/meetings": false;
  "GET /users/{userId}/upcoming_meetings": false;
  "GET /users/{userId}/pac": false;
  "POST /meetings/{meetingId}/batch_polls": false;
  "GET /meetings/{meetingId}/polls": false;
  "POST /meetings/{meetingId}/polls": false;
  "GET /meetings/{meetingId}/polls/{pollId}": false;
  "PUT /meetings/{meetingId}/polls/{pollId}": false;
  "DELETE /meetings/{meetingId}/polls/{pollId}": false;
  "GET /past_meetings/{meetingId}/polls": false;
  "GET /report/activities": false;
  "GET /report/billing": false;
  "GET /report/billing/invoices": false;
  "GET /report/cloud_recording": false;
  "GET /report/daily": false;
  "GET /report/disclaimer": false;
  "GET /report/history_meetings": false;
  "GET /report/meeting_activities": false;
  "GET /report/meetings/{meetingId}": false;
  "GET /report/meetings/{meetingId}/participants": false;
  "GET /report/meetings/{meetingId}/polls": false;
  "GET /report/meetings/{meetingId}/qa": false;
  "GET /report/meetings/{meetingId}/survey": false;
  "GET /report/operationlogs": false;
  "GET /report/remote_support": false;
  "GET /report/telephone": false;
  "GET /report/upcoming_events": false;
  "GET /report/users": false;
  "GET /report/users/{userId}/meetings": false;
  "GET /report/webinars/{webinarId}": false;
  "GET /report/webinars/{webinarId}/participants": false;
  "GET /report/webinars/{webinarId}/polls": false;
  "GET /report/webinars/{webinarId}/qa": false;
  "GET /report/webinars/{webinarId}/survey": false;
  "GET /sip_phones/phones": false;
  "POST /sip_phones/phones": false;
  "DELETE /sip_phones/phones/{phoneId}": false;
  "PATCH /sip_phones/phones/{phoneId}": false;
  "GET /meetings/meeting_summaries": false;
  "GET /meetings/{meetingId}/meeting_summary": false;
  "DELETE /meetings/{meetingId}/meeting_summary": false;
  "GET /meetings/{meetingId}/survey": false;
  "DELETE /meetings/{meetingId}/survey": false;
  "PATCH /meetings/{meetingId}/survey": false;
  "GET /tsp": false;
  "PATCH /tsp": false;
  "GET /users/{userId}/tsp": false;
  "POST /users/{userId}/tsp": false;
  "PATCH /users/{userId}/tsp/settings": false;
  "GET /users/{userId}/tsp/{tspId}": false;
  "DELETE /users/{userId}/tsp/{tspId}": false;
  "PATCH /users/{userId}/tsp/{tspId}": false;
  "GET /users/{userId}/meeting_templates": false;
  "POST /users/{userId}/meeting_templates": false;
  "GET /tracking_fields": false;
  "POST /tracking_fields": false;
  "GET /tracking_fields/{fieldId}": false;
  "DELETE /tracking_fields/{fieldId}": false;
  "PATCH /tracking_fields/{fieldId}": false;
  "DELETE /live_webinars/{webinarId}/chat/messages/{messageId}": false;
  "GET /past_webinars/{webinarId}/absentees": false;
  "GET /past_webinars/{webinarId}/instances": false;
  "GET /past_webinars/{webinarId}/participants": false;
  "GET /past_webinars/{webinarId}/polls": false;
  "GET /past_webinars/{webinarId}/qa": false;
  "GET /users/{userId}/webinar_templates": false;
  "POST /users/{userId}/webinar_templates": false;
  "GET /users/{userId}/webinars": false;
  "POST /users/{userId}/webinars": false;
  "GET /webinars/{webinarId}": false;
  "DELETE /webinars/{webinarId}": false;
  "PATCH /webinars/{webinarId}": false;
  "POST /webinars/{webinarId}/batch_registrants": false;
  "GET /webinars/{webinarId}/branding": false;
  "POST /webinars/{webinarId}/branding/name_tags": false;
  "DELETE /webinars/{webinarId}/branding/name_tags": false;
  "PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}": false;
  "POST /webinars/{webinarId}/branding/virtual_backgrounds": false;
  "DELETE /webinars/{webinarId}/branding/virtual_backgrounds": false;
  "PATCH /webinars/{webinarId}/branding/virtual_backgrounds": false;
  "POST /webinars/{webinarId}/branding/wallpaper": false;
  "DELETE /webinars/{webinarId}/branding/wallpaper": false;
  "POST /webinars/{webinarId}/invite_links": false;
  "GET /webinars/{webinarId}/jointoken/live_streaming": false;
  "GET /webinars/{webinarId}/jointoken/local_archiving": false;
  "GET /webinars/{webinarId}/jointoken/local_recording": false;
  "GET /webinars/{webinarId}/livestream": false;
  "PATCH /webinars/{webinarId}/livestream": false;
  "PATCH /webinars/{webinarId}/livestream/status": false;
  "GET /webinars/{webinarId}/panelists": false;
  "POST /webinars/{webinarId}/panelists": false;
  "DELETE /webinars/{webinarId}/panelists": false;
  "DELETE /webinars/{webinarId}/panelists/{panelistId}": false;
  "GET /webinars/{webinarId}/polls": false;
  "POST /webinars/{webinarId}/polls": false;
  "GET /webinars/{webinarId}/polls/{pollId}": false;
  "PUT /webinars/{webinarId}/polls/{pollId}": false;
  "DELETE /webinars/{webinarId}/polls/{pollId}": false;
  "GET /webinars/{webinarId}/registrants": false;
  "POST /webinars/{webinarId}/registrants": false;
  "GET /webinars/{webinarId}/registrants/questions": false;
  "PATCH /webinars/{webinarId}/registrants/questions": false;
  "PUT /webinars/{webinarId}/registrants/status": false;
  "GET /webinars/{webinarId}/registrants/{registrantId}": false;
  "DELETE /webinars/{webinarId}/registrants/{registrantId}": false;
  "POST /webinars/{webinarId}/sip_dialing": false;
  "PUT /webinars/{webinarId}/status": false;
  "GET /webinars/{webinarId}/survey": false;
  "DELETE /webinars/{webinarId}/survey": false;
  "PATCH /webinars/{webinarId}/survey": false;
  "GET /webinars/{webinarId}/token": false;
  "GET /webinars/{webinarId}/tracking_sources": false;
}

export interface ZoomMeetingsApiOperationResponseMap {
  "GET /archive_files": {
  from?: string;
  meetings?: ReadonlyArray<{
  account_name: string;
  archive_files: ReadonlyArray<{
  download_url: string;
  file_extension: string;
  file_path?: string;
  file_size: number;
  file_type: "MP4" | "M4A" | "CHAT" | "CC" | "CHAT_MESSAGE" | "TRANSCRIPT" | "SUB_GROUP_MEMBER_LOG" | "AIC_COVERSATION";
  id: string;
  individual: boolean;
  participant_email?: string;
  participant_join_time: string;
  participant_leave_time: string;
  recording_type: "shared_screen_with_speaker_view" | "audio_only" | "chat_file" | "closed_caption" | "chat_message" | "audio_transcript" | "aic_conversation";
  status: "completed" | "processing" | "failed";
  encryption_fingerprint: string;
  number_of_messages?: number;
  storage_location?: "US" | "AU" | "BR" | "CA" | "EU" | "IN" | "JP" | "SG" | "CH";
  auto_delete?: boolean;
}>;
  complete_time: ({} | "");
  duration: number;
  duration_in_second: number;
  host_id: string;
  id: number;
  is_breakout_room: boolean;
  meeting_type: "internal" | "external";
  parent_meeting_id?: string;
  recording_count: number;
  start_time: string;
  timezone: string;
  topic: string;
  total_size: number;
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
  uuid: string;
  status: "completed" | "processing";
  group_id?: string;
  physical_files?: ReadonlyArray<{
  file_id?: string;
  file_name?: string;
  file_size?: number;
  download_url?: string;
}>;
}>;
  next_page_token?: string;
  page_size?: number;
  to?: string;
  total_records?: number;
};
  "GET /archive_files/statistics": {
  from?: string;
  to?: string;
  total_records?: number;
  statistic_by_file_extension?: {
  mp4_file_count?: number;
  m4a_file_count?: number;
  txt_file_count?: number;
  json_file_count?: number;
  vtt_file_count?: number;
};
  statistic_by_file_status?: {
  processing_file_count?: number;
  completed_file_count?: number;
  failed_file_count?: number;
};
};
  "PATCH /archive_files/{fileId}": void;
  "GET /meetings/{meetingId}/jointoken/local_archiving": {
  expire_in?: 120;
  token?: string;
};
  "GET /past_meetings/{meetingUUID}/archive_files": {
  account_name: string;
  archive_files: ReadonlyArray<{
  download_url: string;
  file_extension: string;
  file_path?: string;
  file_size: number;
  file_type: "MP4" | "M4A" | "CHAT" | "CC" | "CHAT_MESSAGE" | "TRANSCRIPT" | "SUB_GROUP_MEMBER_LOG" | "AIC_COVERSATION";
  id: string;
  individual: boolean;
  participant_email?: string;
  participant_join_time: string;
  participant_leave_time: string;
  recording_type: "shared_screen_with_speaker_view" | "audio_only" | "chat_file" | "closed_caption" | "chat_message" | "audio_transcript" | "aic_conversation";
  status: "completed" | "processing" | "failed";
  encryption_fingerprint: string;
  number_of_messages?: number;
  storage_location?: "US" | "AU" | "BR" | "CA" | "EU" | "IN" | "JP" | "SG" | "CH";
  auto_delete?: boolean;
}>;
  complete_time: ({} | "");
  duration: number;
  duration_in_second: number;
  host_id: string;
  id: number;
  is_breakout_room: boolean;
  meeting_type: "internal" | "external";
  parent_meeting_id?: string;
  recording_count: number;
  start_time: string;
  timezone: string;
  topic: string;
  total_size: number;
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
  uuid: string;
  status: "completed" | "processing";
  group_id?: string;
  physical_files?: ReadonlyArray<{
  file_id?: string;
  file_name?: string;
  file_size?: number;
  download_url?: string;
}>;
};
  "DELETE /past_meetings/{meetingUUID}/archive_files": void;
  "GET /meetings/{meetingId}/recordings": (({
  account_id?: string;
  duration?: number;
  host_id?: string;
  id?: number;
  recording_count?: number;
  start_time?: string;
  topic?: string;
  total_size?: number;
  type?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "99";
  uuid?: string;
  recording_play_passcode?: string;
  auto_delete?: boolean;
  auto_delete_date?: string;
  service_name?: string;
  rc_zone?: string;
  instance_id?: string;
  zone_instance_id?: string;
  rc_meeting_zone_name?: string;
  external_storage_addr?: string;
} & ({
  recording_files?: ReadonlyArray<({
  deleted_time?: string;
  download_url?: string;
  file_path?: string;
  file_size?: number;
  file_type?: "MP4" | "M4A" | "CHAT" | "TRANSCRIPT" | "CSV" | "TB" | "CC" | "CHAT_MESSAGE" | "SUMMARY";
  file_extension?: "MP4" | "M4A" | "TXT" | "VTT" | "CSV" | "JSON" | "JPG";
  id?: string;
  meeting_id?: string;
  play_url?: string;
  recording_end?: string;
  recording_start?: string;
  recording_type?: "shared_screen_with_speaker_view(CC)" | "shared_screen_with_speaker_view" | "shared_screen_with_gallery_view" | "active_speaker" | "gallery_view" | "shared_screen" | "audio_only" | "audio_transcript" | "chat_file" | "poll" | "host_video" | "closed_caption" | "timeline" | "thumbnail" | "audio_interpretation" | "summary" | "summary_next_steps" | "summary_smart_chapters" | "sign_interpretation" | "production_studio";
  status?: "completed";
})>;
})) & {
  download_access_token?: string;
  password?: string;
  recording_play_passcode?: string;
} & {
  participant_audio_files?: ReadonlyArray<{
  download_url?: string;
  file_name?: string;
  file_path?: string;
  file_size?: number;
  file_type?: string;
  id?: string;
  play_url?: string;
  recording_end?: string;
  recording_start?: string;
  status?: "completed";
}>;
});
  "DELETE /meetings/{meetingId}/recordings": void;
  "GET /meetings/{meetingId}/recordings/analytics_details": {
  from?: string;
  to?: string;
  next_page_token?: string;
  page_size?: number;
  total_records?: number;
  analytics_details?: ReadonlyArray<{
  date_time?: string;
  name?: string;
  email?: string;
  duration?: number;
}>;
};
  "GET /meetings/{meetingId}/recordings/analytics_summary": {
  from?: string;
  to?: string;
  analytics_summary?: ReadonlyArray<{
  date?: string;
  views_total_count?: number;
  downloads_total_count?: number;
}>;
};
  "GET /meetings/{meetingId}/recordings/registrants": (({
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: ReadonlyArray<({
  id?: string;
} & ({
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-250" | "251-500" | "501-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  state?: string;
  status?: "approved" | "denied" | "pending";
  zip?: string;
}))>;
}));
  "POST /meetings/{meetingId}/recordings/registrants": {
  id?: number;
  registrant_id?: string;
  share_url?: string;
  topic?: string;
};
  "GET /meetings/{meetingId}/recordings/registrants/questions": {
  custom_questions?: ReadonlyArray<{
  answers?: ReadonlyArray<string>;
  required?: boolean;
  title?: string;
  type?: "short" | "single" | "multiple";
}>;
  questions?: ReadonlyArray<{
  field_name?: "last_name" | "address" | "city" | "country" | "zip" | "state" | "phone" | "industry" | "org" | "job_title" | "purchasing_time_frame" | "role_in_purchase_process" | "no_of_employees" | "comments";
  required?: boolean;
}>;
};
  "PATCH /meetings/{meetingId}/recordings/registrants/questions": void;
  "PUT /meetings/{meetingId}/recordings/registrants/status": void;
  "GET /meetings/{meetingId}/recordings/settings": {
  approval_type?: 0 | 1 | 2;
  authentication_domains?: string;
  authentication_option?: string;
  authentication_name?: string;
  on_demand?: boolean;
  password?: string;
  recording_authentication?: boolean;
  send_email_to_host?: boolean;
  share_recording?: "publicly" | "internally" | "none";
  show_social_share_buttons?: boolean;
  topic?: string;
  viewer_download?: boolean;
  auto_delete?: boolean;
  auto_delete_date?: string;
};
  "PATCH /meetings/{meetingId}/recordings/settings": void;
  "DELETE /meetings/{meetingId}/recordings/{recordingId}": void;
  "PUT /meetings/{meetingId}/recordings/{recordingId}/status": void;
  "GET /meetings/{meetingId}/transcript": {
  meeting_id?: string;
  account_id?: string;
  meeting_topic?: string;
  host_id?: string;
  transcript_created_time?: string;
  can_download?: boolean;
  auto_delete?: boolean;
  auto_delete_date?: string;
  download_url?: string | null;
  download_restriction_reason?: "DELETED_OR_TRASHED" | "UNSUPPORTED" | "NO_TRANSCRIPT_DATA" | "NOT_READY";
};
  "DELETE /meetings/{meetingId}/transcript": void;
  "PUT /meetings/{meetingUUID}/recordings/status": void;
  "GET /users/{userId}/recordings": ({
  from?: string;
  to?: string;
} & {
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
} & {
  meetings?: ReadonlyArray<(({
  account_id?: string;
  duration?: number;
  host_id?: string;
  id?: number;
  recording_count?: number;
  start_time?: string;
  topic?: string;
  total_size?: number;
  type?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "99";
  uuid?: string;
  recording_play_passcode?: string;
  auto_delete?: boolean;
  auto_delete_date?: string;
} & ({
  recording_files?: ReadonlyArray<({
  deleted_time?: string;
  download_url?: string;
  file_path?: string;
  file_size?: number;
  file_type?: "MP4" | "M4A" | "CHAT" | "TRANSCRIPT" | "CSV" | "TB" | "CC" | "CHAT_MESSAGE" | "SUMMARY";
  file_extension?: "MP4" | "M4A" | "TXT" | "VTT" | "CSV" | "JSON" | "JPG";
  id?: string;
  meeting_id?: string;
  play_url?: string;
  recording_end?: string;
  recording_start?: string;
  recording_type?: "shared_screen_with_speaker_view(CC)" | "shared_screen_with_speaker_view" | "shared_screen_with_gallery_view" | "active_speaker" | "gallery_view" | "shared_screen" | "audio_only" | "audio_transcript" | "chat_file" | "poll" | "host_video" | "closed_caption" | "timeline" | "thumbnail" | "audio_interpretation" | "summary" | "summary_next_steps" | "summary_smart_chapters" | "sign_interpretation" | "production_studio";
  status?: "completed";
})>;
})))>;
});
  "GET /devices": {
  next_page_token?: string;
  page_size?: number;
  devices?: ReadonlyArray<{
  device_id?: string;
  device_name?: string;
  mac_address?: string;
  serial_number?: string;
  vendor?: string;
  model?: string;
  platform_os?: string;
  app_version?: string;
  tag?: string;
  enrolled_in_zdm?: boolean;
  connected_to_zdm?: boolean;
  room_id?: string;
  room_name?: string;
  device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  skd_version?: string;
  device_status?: -1 | 0 | 1;
  last_online?: string;
  user_email?: string;
}>;
};
  "POST /devices": void;
  "GET /devices/groups": {
  groups?: ReadonlyArray<{
  zdm_group_id?: string;
  name?: string;
  description?: string;
}>;
  next_page_token?: string;
  page_size?: number;
};
  "POST /devices/zpa/assignment": void;
  "GET /devices/zpa/settings": {
  language?: string;
  timezone?: string;
  device_infos?: ReadonlyArray<{
  device_id?: string;
  device_type?: string;
  vendor?: string;
  model?: string;
  status?: "online" | "offline";
  policy?: {
  hot_desking?: {
  status?: "online" | "offline";
};
  call_control?: {
  status?: "unsupported" | "on" | "off";
};
};
}>;
};
  "POST /devices/zpa/upgrade": void;
  "DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}": void;
  "GET /devices/zpa/zdm_groups/{zdmGroupId}/versions": {
  firmware_versions?: ReadonlyArray<{
  vendor?: string;
  model?: string;
  version?: string;
  warn_info?: string;
}>;
  app_versions?: ReadonlyArray<string>;
};
  "GET /devices/{deviceId}": {
  device_id?: string;
  device_name?: string;
  mac_address?: string;
  serial_number?: string;
  vendor?: string;
  model?: string;
  platform_os?: string;
  app_version?: string;
  tag?: string;
  enrolled_in_zdm?: boolean;
  connected_to_zdm?: boolean;
  room_id?: string;
  room_name?: string;
  device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  sdk_version?: string;
  device_status?: -1 | 0 | 1;
  last_online?: string;
  user_email?: string;
};
  "DELETE /devices/{deviceId}": void;
  "PATCH /devices/{deviceId}": void;
  "PATCH /devices/{deviceId}/assign_group": void;
  "PATCH /devices/{deviceId}/assignment": void;
  "GET /h323/devices": ({
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  devices?: ReadonlyArray<({
  id?: string;
} & {
  encryption: "auto" | "yes" | "no";
  ip: string;
  name: string;
  protocol: "H.323" | "SIP";
})>;
});
  "POST /h323/devices": ({
  id?: string;
} & {
  encryption: "auto" | "yes" | "no";
  ip: string;
  name: string;
  protocol: "H.323" | "SIP";
});
  "DELETE /h323/devices/{deviceId}": void;
  "PATCH /h323/devices/{deviceId}": void;
  "POST /meetings/{meetingId}/open_apps": {
  id?: number;
  start_time?: string;
  app_id?: string;
};
  "DELETE /meetings/{meetingId}/open_apps": void;
  "DELETE /live_meetings/{meetingId}/chat/messages/{messageId}": void;
  "PATCH /live_meetings/{meetingId}/chat/messages/{messageId}": void;
  "PATCH /live_meetings/{meetingId}/events": void;
  "GET /meetings/{meetingId}/jointoken/local_recording": {
  expire_in?: 120;
  token?: string;
};
  "GET /meetings/{meetingId}/token": {
  token?: string;
};
  "POST /meetings/{meetingId}/batch_registrants": {
  registrants?: ReadonlyArray<{
  email?: string;
  join_url?: string;
  registrant_id?: string;
  participant_pin_code?: number;
}>;
};
  "GET /meetings/{meetingId}/invitation": {
  invitation?: string;
  sip_links?: ReadonlyArray<string>;
};
  "POST /meetings/{meetingId}/invite_links": {
  attendees?: ReadonlyArray<{
  join_url?: string;
  name?: string;
}>;
};
  "GET /meetings/{meetingId}/registrants": (({
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: ReadonlyArray<({
  id?: string;
} & ({
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-250" | "251-500" | "501-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  state?: string;
  status?: "approved" | "denied" | "pending";
  zip?: string;
}) & {
  create_time?: string;
  join_url?: string;
  status?: string;
  participant_pin_code?: number;
})>;
}));
  "POST /meetings/{meetingId}/registrants": {
  id?: number;
  join_url?: string;
  registrant_id?: string;
  start_time?: string;
  topic?: string;
  occurrences?: ReadonlyArray<{
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: string;
}>;
  participant_pin_code?: number;
};
  "GET /meetings/{meetingId}/registrants/questions": ({
  custom_questions?: ReadonlyArray<{
  answers?: ReadonlyArray<string>;
  required?: boolean;
  title?: string;
  type?: "short" | "single";
}>;
  questions?: ReadonlyArray<{
  field_name?: "last_name" | "address" | "city" | "country" | "zip" | "state" | "phone" | "industry" | "org" | "job_title" | "purchasing_time_frame" | "role_in_purchase_process" | "no_of_employees" | "comments";
  required?: boolean;
}>;
});
  "PATCH /meetings/{meetingId}/registrants/questions": void;
  "PUT /meetings/{meetingId}/registrants/status": void;
  "GET /meetings/{meetingId}/registrants/{registrantId}": ({
  id?: string;
} & ({
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-250" | "251-500" | "501-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  state?: string;
  status?: "approved" | "denied" | "pending";
  zip?: string;
}) & {
  create_time?: string;
  join_url?: string;
  status?: "approved" | "pending" | "denied";
  participant_pin_code?: number;
});
  "DELETE /meetings/{meetingId}/registrants/{registrantId}": void;
  "GET /meetings/{meetingId}/jointoken/live_streaming": {
  expire_in?: 120;
  token?: string;
};
  "GET /meetings/{meetingId}/livestream": {
  page_url?: string;
  stream_key?: string;
  stream_url?: string;
  resolution?: string;
};
  "PATCH /meetings/{meetingId}/livestream": void;
  "PATCH /meetings/{meetingId}/livestream/status": void;
  "PATCH /live_meetings/{meetingId}/rtms_app/status": void;
  "GET /meetings/{meetingId}": {
  assistant_id?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  uuid?: string;
  registration_url?: string;
  agenda?: string;
  created_at?: string;
  duration?: number;
  encrypted_password?: string;
  pstn_password?: string;
  h323_password?: string;
  join_url?: string;
  chat_join_url?: string;
  occurrences?: ReadonlyArray<{
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: "available" | "deleted";
}>;
  password?: string;
  pmi?: string;
  pre_schedule?: boolean;
  recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
};
  settings?: {
  additional_data_center_regions?: ReadonlyArray<string>;
  allow_multiple_devices?: boolean;
  alternative_hosts?: string;
  alternative_hosts_email_notification?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_host_manage_meeting_summary?: boolean;
  alternative_host_manage_cloud_recording?: boolean;
  approval_type?: 0 | 1 | 2;
  approved_or_denied_countries_or_regions?: {
  approved_list?: ReadonlyArray<string>;
  denied_list?: ReadonlyArray<string>;
  enable?: boolean;
  method?: "approve" | "deny";
};
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_exception?: ReadonlyArray<{
  email?: string;
  name?: string;
  join_url?: string;
}>;
  authentication_name?: string;
  authentication_option?: string;
  auto_recording?: "local" | "cloud" | "none";
  auto_add_recording_to_video_management?: {
  enable: boolean;
  channels?: ReadonlyArray<{
  channel_id: string;
  name?: string;
}>;
};
  breakout_room?: {
  enable?: boolean;
  rooms?: ReadonlyArray<{
  name?: string;
  participants?: ReadonlyArray<string>;
}>;
};
  calendar_type?: 1 | 2;
  close_registration?: boolean;
  cn_meeting?: boolean;
  contact_email?: string;
  contact_name?: string;
  custom_keys?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
  email_notification?: boolean;
  encryption_type?: "enhanced_encryption" | "e2ee";
  enforce_login?: boolean;
  enforce_login_domains?: string;
  focus_mode?: boolean;
  global_dial_in_countries?: ReadonlyArray<string>;
  global_dial_in_numbers?: ReadonlyArray<{
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree";
}>;
  host_video?: boolean;
  in_meeting?: boolean;
  jbh_time?: 0 | 5 | 10 | 15;
  join_before_host?: boolean;
  question_and_answer?: {
  enable?: boolean;
  allow_submit_questions?: boolean;
  allow_anonymous_questions?: boolean;
  question_visibility?: "answered" | "all";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
};
  language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  languages?: string;
  interpreter_languages?: string;
}>;
};
  sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  sign_language?: string;
}>;
};
  meeting_authentication?: boolean;
  mute_upon_entry?: boolean;
  participant_video?: boolean;
  private_meeting?: boolean;
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registration_type?: 1 | 2 | 3;
  show_share_button?: boolean;
  show_join_info?: boolean;
  use_pmi?: boolean;
  waiting_room?: boolean;
  waiting_room_options?: {
  mode: "follow_setting" | "custom";
  who_goes_to_waiting_room?: "everyone" | "users_not_in_account" | "users_not_in_account_or_whitelisted_domains" | "users_not_on_invite" | "users_not_in_org";
};
  watermark?: boolean;
  host_save_video_order?: boolean;
  internal_meeting?: boolean;
  meeting_invitees?: ReadonlyArray<{
  email?: string;
  internal_user?: boolean;
}>;
  continuous_meeting_chat?: {
  enable?: boolean;
  auto_add_invited_external_users?: boolean;
  auto_add_meeting_participants?: boolean;
  channel_id?: string;
};
  participant_focused_meeting?: boolean;
  push_change_to_calendar?: boolean;
  resources?: ReadonlyArray<{
  resource_type?: "whiteboard";
  resource_id?: string;
  permission_level?: "editor" | "commenter" | "viewer";
}>;
  auto_start_meeting_summary?: boolean;
  who_will_receive_summary?: 1 | 2 | 3 | 4;
  auto_start_ai_companion_questions?: boolean;
  who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
  summary_template_id?: string;
  device_testing?: boolean;
  request_permission_to_unmute_participants?: boolean;
  allow_host_control_participant_mute_state?: boolean;
  disable_participant_video?: boolean;
  email_in_attendee_report?: boolean;
};
  start_time?: string;
  start_url?: string;
  status?: "waiting" | "started";
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: ReadonlyArray<{
  field?: string;
  value?: string;
  visible?: boolean;
}>;
  type?: 1 | 2 | 3 | 4 | 8 | 10;
  dynamic_host_key?: string;
  creation_source?: "other" | "open_api" | "web_portal";
};
  "DELETE /meetings/{meetingId}": void;
  "PATCH /meetings/{meetingId}": void;
  "POST /meetings/{meetingId}/sip_dialing": {
  sip_dialing?: string;
  paid_crc_plan_participant?: boolean;
  participant_identifier_code?: string;
  expire_in?: number;
};
  "PUT /meetings/{meetingId}/status": void;
  "GET /past_meetings/{meetingId}": {
  id?: number;
  uuid?: string;
  duration?: number;
  start_time?: string;
  end_time?: string;
  host_id?: string;
  dept?: string;
  participants_count?: number;
  source?: string;
  topic?: string;
  total_minutes?: number;
  type?: 0 | 1 | 2 | 3 | 4 | 7 | 8;
  user_email?: string;
  user_name?: string;
  has_meeting_summary?: boolean;
};
  "GET /past_meetings/{meetingId}/instances": {
  meetings?: ReadonlyArray<{
  start_time?: string;
  uuid?: string;
}>;
};
  "GET /past_meetings/{meetingId}/participants": {
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
  participants?: ReadonlyArray<{
  id?: string;
  name?: string;
  user_id?: string;
  registrant_id?: string;
  user_email?: string;
  join_time?: string;
  leave_time?: string;
  duration?: number;
  failover?: boolean;
  status?: "in_meeting" | "in_waiting_room";
  internal_user?: boolean;
}>;
};
  "GET /past_meetings/{meetingId}/qa": {
  id?: number;
  questions?: ReadonlyArray<{
  email?: string;
  name?: string;
  question_details?: ReadonlyArray<{
  answer?: string;
  question?: string;
}>;
}>;
  start_time?: string;
  uuid?: string;
};
  "GET /users/{userId}/meetings": ({
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  meetings?: ReadonlyArray<({
  agenda?: string;
  created_at?: string;
  duration?: number;
  host_id?: string;
  id?: number;
  join_url?: string;
  pmi?: string;
  start_time?: string;
  timezone?: string;
  topic?: string;
  type?: 1 | 2 | 3 | 8;
  uuid?: string;
})>;
});
  "POST /users/{userId}/meetings": {
  assistant_id?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  uuid?: string;
  registration_url?: string;
  agenda?: string;
  created_at?: string;
  duration?: number;
  encrypted_password?: string;
  pstn_password?: string;
  h323_password?: string;
  join_url?: string;
  chat_join_url?: string;
  occurrences?: ReadonlyArray<{
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: "available" | "deleted";
}>;
  password?: string;
  pmi?: string;
  pre_schedule?: boolean;
  recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
};
  settings?: {
  additional_data_center_regions?: ReadonlyArray<string>;
  allow_multiple_devices?: boolean;
  alternative_hosts?: string;
  alternative_hosts_email_notification?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_host_manage_meeting_summary?: boolean;
  alternative_host_manage_cloud_recording?: boolean;
  approval_type?: 0 | 1 | 2;
  approved_or_denied_countries_or_regions?: {
  approved_list?: ReadonlyArray<string>;
  denied_list?: ReadonlyArray<string>;
  enable?: boolean;
  method?: "approve" | "deny";
};
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_exception?: ReadonlyArray<{
  email?: string;
  name?: string;
  join_url?: string;
}>;
  authentication_name?: string;
  authentication_option?: string;
  auto_recording?: "local" | "cloud" | "none";
  auto_add_recording_to_video_management?: {
  enable: boolean;
  channels?: ReadonlyArray<{
  channel_id: string;
  name?: string;
}>;
};
  breakout_room?: {
  enable?: boolean;
  rooms?: ReadonlyArray<{
  name?: string;
  participants?: ReadonlyArray<string>;
}>;
};
  calendar_type?: 1 | 2;
  close_registration?: boolean;
  cn_meeting?: boolean;
  contact_email?: string;
  contact_name?: string;
  custom_keys?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
  email_notification?: boolean;
  encryption_type?: "enhanced_encryption" | "e2ee";
  enforce_login?: boolean;
  enforce_login_domains?: string;
  focus_mode?: boolean;
  global_dial_in_countries?: ReadonlyArray<string>;
  global_dial_in_numbers?: ReadonlyArray<{
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree";
}>;
  host_video?: boolean;
  in_meeting?: boolean;
  jbh_time?: 0 | 5 | 10 | 15;
  join_before_host?: boolean;
  question_and_answer?: {
  enable?: boolean;
  allow_submit_questions?: boolean;
  allow_anonymous_questions?: boolean;
  question_visibility?: "answered" | "all";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
};
  language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  languages?: string;
  interpreter_languages?: string;
}>;
};
  sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  sign_language?: string;
}>;
};
  meeting_authentication?: boolean;
  mute_upon_entry?: boolean;
  participant_video?: boolean;
  private_meeting?: boolean;
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registration_type?: 1 | 2 | 3;
  show_share_button?: boolean;
  show_join_info?: boolean;
  use_pmi?: boolean;
  waiting_room?: boolean;
  waiting_room_options?: {
  mode: "follow_setting" | "custom";
  who_goes_to_waiting_room?: "everyone" | "users_not_in_account" | "users_not_in_account_or_whitelisted_domains" | "users_not_on_invite" | "users_not_in_org";
};
  watermark?: boolean;
  host_save_video_order?: boolean;
  internal_meeting?: boolean;
  meeting_invitees?: ReadonlyArray<{
  email?: string;
}>;
  continuous_meeting_chat?: {
  enable?: boolean;
  auto_add_invited_external_users?: boolean;
  auto_add_meeting_participants?: boolean;
  channel_id?: string;
};
  participant_focused_meeting?: boolean;
  push_change_to_calendar?: boolean;
  resources?: ReadonlyArray<{
  resource_type?: "whiteboard";
  resource_id?: string;
  permission_level?: "editor" | "commenter" | "viewer";
}>;
  auto_start_meeting_summary?: boolean;
  who_will_receive_summary?: 1 | 2 | 3 | 4;
  auto_start_ai_companion_questions?: boolean;
  who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
  summary_template_id?: string;
  device_testing?: boolean;
  request_permission_to_unmute_participants?: boolean;
  allow_host_control_participant_mute_state?: boolean;
  disable_participant_video?: boolean;
  email_in_attendee_report?: boolean;
};
  start_time?: string;
  start_url?: string;
  status?: "waiting" | "started";
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: ReadonlyArray<{
  field?: string;
  value?: string;
  visible?: boolean;
}>;
  type?: 1 | 2 | 3 | 8 | 10;
  dynamic_host_key?: string;
  creation_source?: "other" | "open_api" | "web_portal";
};
  "GET /users/{userId}/upcoming_meetings": {
  total_records?: number;
  meetings?: ReadonlyArray<{
  id?: number;
  topic?: string;
  type?: 1 | 2 | 3 | 8;
  start_time?: string;
  duration?: number;
  timezone?: string;
  created_at?: string;
  join_url?: string;
  passcode?: string;
  use_pmi?: boolean;
  is_host?: boolean;
  is_all_day?: boolean;
}>;
};
  "GET /users/{userId}/pac": {
  pac_accounts?: ReadonlyArray<{
  conference_id?: number;
  dedicated_dial_in_number?: ReadonlyArray<{
  country?: string;
  number?: string;
}>;
  global_dial_in_numbers?: ReadonlyArray<{
  country?: string;
  number?: string;
}>;
  listen_only_password?: string;
  participant_password?: string;
}>;
};
  "POST /meetings/{meetingId}/batch_polls": {
  polls?: ReadonlyArray<{
  anonymous?: boolean;
  id?: string;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  status?: "notstart" | "started" | "ended" | "sharing";
  title?: string;
}>;
};
  "GET /meetings/{meetingId}/polls": ({
  polls?: ReadonlyArray<({
  id?: string;
  status?: "notstart" | "started" | "ended" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
})>;
  total_records?: number;
});
  "POST /meetings/{meetingId}/polls": ({
  id?: string;
  status?: "notstart" | "started" | "ended" | "sharing";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
});
  "GET /meetings/{meetingId}/polls/{pollId}": ({
  id?: string;
  status?: "notstart" | "started" | "ended" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
});
  "PUT /meetings/{meetingId}/polls/{pollId}": void;
  "DELETE /meetings/{meetingId}/polls/{pollId}": void;
  "GET /past_meetings/{meetingId}/polls": {
  id?: number;
  questions?: ReadonlyArray<{
  email?: string;
  name?: string;
  question_details?: ReadonlyArray<{
  answer?: string;
  date_time?: string;
  polling_id?: string;
  question?: string;
}>;
}>;
  start_time?: string;
  uuid?: string;
};
  "GET /report/activities": {
  activity_logs?: ReadonlyArray<{
  client_type?: string;
  email?: string;
  ip_address?: string;
  time?: string;
  type?: "Sign in" | "Sign out";
  version?: string;
}>;
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
};
  "GET /report/billing": {
  billing_reports?: ReadonlyArray<{
  end_date?: string;
  id?: string;
  start_date?: string;
  tax_amount?: string;
  total_amount?: string;
  type?: 0 | 1;
}>;
  currency?: string;
};
  "GET /report/billing/invoices": {
  currency?: string;
  invoices?: ReadonlyArray<{
  end_date?: string;
  invoice_charge_name?: string;
  invoice_number?: string;
  quantity?: number;
  start_date?: string;
  tax_amount?: string;
  total_amount?: string;
}>;
};
  "GET /report/cloud_recording": ({
  from?: string;
  to?: string;
} & {
  cloud_recording_storage?: ReadonlyArray<{
  date?: string;
  free_usage?: string;
  plan_usage?: string;
  usage?: string;
}>;
});
  "GET /report/daily": {
  dates?: ReadonlyArray<{
  date?: string;
  meeting_minutes?: number;
  meetings?: number;
  new_users?: number;
  participants?: number;
}>;
  month?: number;
  year?: number;
};
  "GET /report/disclaimer": {
  disclaimer_records?: ReadonlyArray<{
  disclaimer_status?: "Agree" | "Cancel" | "Passive Agree" | "Decline Attend";
  time?: string;
  disclaimer_type?: string;
  user_email?: string;
  meeting_number?: number;
  meeting_id?: string;
  client_type?: string;
  is_zoom_event?: boolean;
  is_guest?: boolean;
  group_ids?: ReadonlyArray<string>;
  display_name?: string;
}>;
  next_page_token?: string;
  page_size?: number;
};
  "GET /report/history_meetings": {
  next_page_token?: string;
  page_size?: number;
  history_meetings?: ReadonlyArray<{
  meeting_uuid?: string;
  meeting_id?: number;
  type?: "Meeting" | "Webinar";
  host_display_name?: string;
  host_email?: string;
  start_time?: string;
  end_time?: string;
  topic?: string;
  participants?: number;
  duration?: number;
  total_participant_minutes?: number;
  department?: string;
  group?: ReadonlyArray<string>;
  source?: string;
  unique_viewers?: number;
  max_concurrent_views?: number;
  create_time?: string;
  custom_fields?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
  tracking_fields?: ReadonlyArray<{
  field?: string;
  value?: string;
}>;
  feature_used?: {
  screen_sharing?: boolean;
  video_on?: boolean;
  remote_control?: boolean;
  closed_caption?: boolean;
  breakout_room?: boolean;
  language_interpretation?: boolean;
  telephone_usage?: boolean;
  in_meeting_chat?: boolean;
  poll?: boolean;
  join_by_room?: boolean;
  waiting_room?: boolean;
  live_transcription?: boolean;
  reaction?: boolean;
  zoom_apps?: boolean;
  annotation?: boolean;
  raise_hand?: boolean;
  virtual_background?: boolean;
  whiteboard?: boolean;
  immersive_scene?: boolean;
  avatar?: boolean;
  switch_to_mobile?: boolean;
  file_sharing?: boolean;
  meeting_summary?: boolean;
  meeting_questions?: boolean;
  record_to_computer?: boolean;
  record_to_cloud?: boolean;
  live_translation?: boolean;
  registration?: boolean;
  smart_recording?: boolean;
  multi_speaker?: boolean;
  meeting_wallpaper?: boolean;
  gen_ai_virtual_background?: boolean;
  multi_share?: boolean;
  document_collaboration?: boolean;
  portrait_lighting?: boolean;
  personalized_audio_isolation?: boolean;
  color_themes?: boolean;
};
}>;
};
  "GET /report/meeting_activities": {
  meeting_activity_logs?: ReadonlyArray<{
  meeting_number: string;
  activity_time: string;
  operator: string;
  operator_email: string;
  activity_category: string;
  activity_detail: string;
}>;
  next_page_token?: string;
  page_size?: number;
};
  "GET /report/meetings/{meetingId}": {
  custom_keys?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
  dept?: string;
  duration?: number;
  end_time?: string;
  id?: number;
  participants_count?: number;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  tracking_fields?: ReadonlyArray<{
  field?: string;
  value?: string;
}>;
  type?: number;
  user_email?: string;
  user_name?: string;
  uuid?: string;
};
  "GET /report/meetings/{meetingId}/participants": ({
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
} & {
  participants?: ReadonlyArray<{
  customer_key?: string;
  duration?: number;
  failover?: boolean;
  id?: string;
  join_time?: string;
  leave_time?: string;
  name?: string;
  registrant_id?: string;
  status?: "in_meeting" | "in_waiting_room";
  user_email?: string;
  user_id?: string;
  bo_mtg_id?: string;
  participant_user_id?: string;
}>;
});
  "GET /report/meetings/{meetingId}/polls": {
  id?: number;
  uuid?: string;
  start_time?: string;
  questions?: ReadonlyArray<{
  email?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  question_details?: ReadonlyArray<{
  answer?: string;
  date_time?: string;
  polling_id?: string;
  question?: string;
}>;
}>;
};
  "GET /report/meetings/{meetingId}/qa": {
  id?: number;
  questions?: ReadonlyArray<{
  user_id?: string;
  email?: string;
  name?: string;
  question_details?: ReadonlyArray<{
  answer?: string;
  question?: string;
  question_id?: string;
  create_time?: string;
  question_status?: "default" | "open" | "dismissed" | "answered" | "deleted";
  answer_details?: ReadonlyArray<{
  user_id?: string;
  name?: string;
  email?: string;
  content?: string;
  create_time?: string;
  type?: "default" | "host_answered_publicly" | "host_answered_privately" | "participant_commented" | "host_answered";
}>;
}>;
}>;
  start_time?: string;
  uuid?: string;
};
  "GET /report/meetings/{meetingId}/survey": {
  meeting_id?: number;
  meeting_uuid?: string;
  start_time?: string;
  survey_id?: string;
  survey_name?: string;
  survey_answers?: ReadonlyArray<{
  email?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  answer_details?: ReadonlyArray<{
  question?: string;
  question_id?: string;
  answer?: string;
  date_time?: string;
}>;
}>;
};
  "GET /report/operationlogs": ({
  next_page_token?: string;
  page_size?: number;
} & {
  operation_logs?: ReadonlyArray<{
  action?: string;
  category_type?: string;
  operation_detail?: string;
  operator?: string;
  time?: string;
}>;
});
  "GET /report/remote_support": {
  remote_support_logs?: ReadonlyArray<{
  meeting_start_time?: string;
  meeting_uuid?: string;
  meeting_number?: number;
  topic?: string;
  meeting_host_id?: string;
  supporter_name?: string;
  supporter_email?: string;
  supportee_name?: string;
  supportee_email?: string;
  request_time?: string;
  wait_time?: string;
  start_time?: string;
  end_time?: string;
  duration?: string;
}>;
  next_page_token?: string;
  page_size?: number;
};
  "GET /report/telephone": ({
  from?: string;
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  to?: string;
  total_records?: number;
} & {
  telephony_usage?: ReadonlyArray<{
  call_in_number?: string;
  country_name?: string;
  dept?: string;
  duration?: number;
  end_time?: string;
  host_email?: string;
  host_id?: string;
  host_name?: string;
  meeting_id?: number;
  meeting_type?: string;
  phone_number?: string;
  rate?: number;
  signaled_number?: string;
  start_time?: string;
  total?: number;
  type?: "toll-free" | "call-out" | "call-in" | "US toll-number" | "global toll-number" | "premium" | "premium call-in" | "Toll";
  uuid?: string;
}>;
});
  "GET /report/upcoming_events": {
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
  upcoming_events?: ReadonlyArray<{
  dept?: string;
  host_id?: string;
  host_name?: string;
  id?: string;
  start_time?: string;
  topic?: string;
}>;
};
  "GET /report/users": ({
  from?: string;
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  to?: string;
  total_records?: number;
} & {
  total_meeting_minutes?: number;
  total_meetings?: number;
  total_participants?: number;
  users?: ReadonlyArray<{
  custom_attributes?: ReadonlyArray<{
  key?: string;
  name?: string;
  value?: string;
}>;
  dept?: string;
  email?: string;
  id?: string;
  meeting_minutes?: number;
  meetings?: number;
  participants?: number;
  type?: number;
  user_name?: string;
}>;
});
  "GET /report/users/{userId}/meetings": ({
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  from?: string;
  meetings?: ReadonlyArray<{
  custom_keys?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
  duration?: number;
  end_time?: string;
  id?: number;
  participants_count?: number;
  session_key?: string;
  source?: string;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  user_email?: string;
  user_name?: string;
  uuid?: string;
  schedule_time?: string;
  join_waiting_room_time?: string;
  join_time?: string;
  leave_time?: string;
  host_organization?: string;
  host_name?: string;
  has_screen_share?: boolean;
  has_recording?: boolean;
  has_chat?: boolean;
  meeting_encryption_status?: 1 | 2;
  participants_count_my_account?: number;
}>;
  next_page_token?: string;
  to?: string;
});
  "GET /report/webinars/{webinarId}": {
  custom_keys?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
  dept?: string;
  duration?: number;
  end_time?: string;
  id?: number;
  participants_count?: number;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  tracking_fields?: ReadonlyArray<{
  field?: string;
  value?: string;
}>;
  type?: number;
  user_email?: string;
  user_name?: string;
  uuid?: string;
};
  "GET /report/webinars/{webinarId}/participants": ({
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
} & {
  participants?: ReadonlyArray<{
  customer_key?: string;
  duration?: number;
  failover?: boolean;
  id?: string;
  join_time?: string;
  leave_time?: string;
  name?: string;
  registrant_id?: string;
  status?: "in_meeting" | "in_waiting_room";
  user_email?: string;
  user_id?: string;
  participant_user_id?: string;
  bo_mtg_id?: string;
}>;
});
  "GET /report/webinars/{webinarId}/polls": {
  id?: number;
  questions?: ReadonlyArray<{
  email?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  question_details?: ReadonlyArray<{
  answer?: string;
  date_time?: string;
  polling_id?: string;
  question?: string;
}>;
}>;
  start_time?: string;
  uuid?: string;
};
  "GET /report/webinars/{webinarId}/qa": {
  id?: number;
  questions?: ReadonlyArray<{
  user_id?: string;
  email?: string;
  name?: string;
  question_details?: ReadonlyArray<{
  answer?: string;
  question?: string;
  question_id?: string;
  create_time?: string;
  question_status?: "default" | "open" | "dismissed" | "answered" | "deleted";
  answer_details?: ReadonlyArray<{
  user_id?: string;
  name?: string;
  email?: string;
  content?: string;
  create_time?: string;
  type?: "default" | "host_answered_publicly" | "host_answered_privately" | "participant_commented" | "host_answered";
}>;
}>;
}>;
  start_time?: string;
  uuid?: string;
};
  "GET /report/webinars/{webinarId}/survey": {
  webinar_id?: number;
  webinar_uuid?: string;
  start_time?: string;
  survey_id?: string;
  survey_name?: string;
  survey_answers?: ReadonlyArray<{
  email?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  answer_details?: ReadonlyArray<{
  question?: string;
  question_id?: string;
  answer?: string;
  date_time?: string;
}>;
}>;
};
  "GET /sip_phones/phones": {
  next_page_token?: string;
  page_size?: number;
  phones?: ReadonlyArray<{
  authorization_name?: string;
  domain?: string;
  phone_id?: string;
  password?: string;
  registration_expire_time?: number;
  user_email?: string;
  user_name?: string;
  voice_mail?: string;
  display_number?: string;
  server?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
  server_2?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
  server_3?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
}>;
};
  "POST /sip_phones/phones": {
  phone_id?: string;
  authorization_name?: string;
  domain?: string;
  password?: string;
  registration_expire_time?: number;
  user_email?: string;
  user_name?: string;
  voice_mail?: string;
  display_number?: string;
  server?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
  server_2?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
  server_3?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
};
  "DELETE /sip_phones/phones/{phoneId}": void;
  "PATCH /sip_phones/phones/{phoneId}": void;
  "GET /meetings/meeting_summaries": {
  page_size?: number;
  next_page_token?: string;
  from?: string;
  to?: string;
  summaries?: ReadonlyArray<{
  meeting_host_id?: string;
  meeting_host_email?: string;
  meeting_uuid?: string;
  meeting_id?: number;
  meeting_topic?: string;
  meeting_start_time?: string;
  meeting_end_time?: string;
  summary_start_time?: string;
  summary_end_time?: string;
  summary_created_time?: string;
  summary_last_modified_time?: string;
}>;
};
  "GET /meetings/{meetingId}/meeting_summary": {
  meeting_host_id?: string;
  meeting_host_email?: string;
  meeting_uuid?: string;
  meeting_id?: number;
  meeting_topic?: string;
  meeting_start_time?: string;
  meeting_end_time?: string;
  summary_start_time?: string;
  summary_end_time?: string;
  summary_created_time?: string;
  summary_last_modified_time?: string;
  summary_last_modified_user_id?: string;
  summary_last_modified_user_email?: string;
  summary_title?: string;
  summary_overview?: string;
  summary_details?: ReadonlyArray<{
  label?: string;
  summary?: string;
}>;
  next_steps?: ReadonlyArray<string>;
  edited_summary?: {
  summary_overview?: string;
  summary_details?: string;
  next_steps?: ReadonlyArray<string>;
};
  summary_content?: string;
  summary_doc_url?: string;
};
  "DELETE /meetings/{meetingId}/meeting_summary": void;
  "GET /meetings/{meetingId}/survey": {
  custom_survey?: {
  title?: string;
  anonymous?: boolean;
  numbered_questions?: boolean;
  show_question_type?: boolean;
  feedback?: string;
  questions?: ReadonlyArray<{
  name?: string;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
  answer_required?: boolean;
  show_as_dropdown?: boolean;
  answers?: ReadonlyArray<string>;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
}>;
  answer_min_character?: number;
  answer_max_character?: number;
  rating_min_value?: number;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_max_label?: string;
}>;
};
  show_in_the_browser?: boolean;
  third_party_survey?: string;
};
  "DELETE /meetings/{meetingId}/survey": void;
  "PATCH /meetings/{meetingId}/survey": void;
  "GET /tsp": {
  dial_in_number_unrestricted?: boolean;
  dial_in_numbers?: ReadonlyArray<{
  code?: string;
  number?: string;
  type?: string;
}>;
  enable?: boolean;
  master_account_setting_extended?: boolean;
  modify_credential_forbidden?: boolean;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
  tsp_enabled?: boolean;
  tsp_provider?: string;
};
  "PATCH /tsp": void;
  "GET /users/{userId}/tsp": {
  tsp_accounts?: ReadonlyArray<{
  conference_code: string;
  dial_in_numbers?: ReadonlyArray<{
  code?: string;
  country_label?: string;
  number?: string;
  type?: "toll" | "tollfree" | "media_link";
}>;
  id?: "1" | "2";
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
}>;
};
  "POST /users/{userId}/tsp": ({
  id?: string;
} & {
  conference_code: string;
  dial_in_numbers?: ReadonlyArray<{
  code?: string;
  country_label?: string;
  number?: string;
  type?: "toll" | "tollfree" | "media_link";
}>;
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
});
  "PATCH /users/{userId}/tsp/settings": void;
  "GET /users/{userId}/tsp/{tspId}": {
  conference_code: string;
  dial_in_numbers?: ReadonlyArray<{
  code?: string;
  country_label?: string;
  number?: string;
  type?: "toll" | "tollfree" | "media_link";
}>;
  id?: string;
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
};
  "DELETE /users/{userId}/tsp/{tspId}": void;
  "PATCH /users/{userId}/tsp/{tspId}": void;
  "GET /users/{userId}/meeting_templates": {
  templates?: ReadonlyArray<{
  id?: string;
  name?: string;
  type?: number;
}>;
  total_records?: number;
};
  "POST /users/{userId}/meeting_templates": {
  id?: string;
  name?: string;
};
  "GET /tracking_fields": {
  total_records?: number;
  tracking_fields?: ReadonlyArray<{
  id?: string;
  field?: string;
  recommended_values?: ReadonlyArray<string>;
  required?: boolean;
  visible?: boolean;
}>;
};
  "POST /tracking_fields": ({
  id?: string;
} & {
  field?: string;
  recommended_values?: ReadonlyArray<string>;
  required?: boolean;
  visible?: boolean;
});
  "GET /tracking_fields/{fieldId}": {
  id?: string;
  field?: string;
  recommended_values?: ReadonlyArray<string>;
  required?: boolean;
  visible?: boolean;
};
  "DELETE /tracking_fields/{fieldId}": void;
  "PATCH /tracking_fields/{fieldId}": void;
  "DELETE /live_webinars/{webinarId}/chat/messages/{messageId}": void;
  "GET /past_webinars/{webinarId}/absentees": ({
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: ReadonlyArray<({
  id?: string;
} & ({
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-250" | "251-500" | "501-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  state?: string;
  status?: "approved" | "denied" | "pending";
  zip?: string;
}) & {
  create_time?: string;
  join_url?: string;
  status?: string;
})>;
});
  "GET /past_webinars/{webinarId}/instances": {
  webinars?: ReadonlyArray<{
  start_time?: string;
  uuid?: string;
}>;
};
  "GET /past_webinars/{webinarId}/participants": {
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  participants?: ReadonlyArray<{
  id?: string;
  name?: string;
  user_id?: string;
  registrant_id?: string;
  user_email?: string;
  join_time?: string;
  leave_time?: string;
  duration?: number;
  failover?: boolean;
  status?: "in_meeting" | "in_waiting_room";
  internal_user?: boolean;
}>;
  total_records?: number;
};
  "GET /past_webinars/{webinarId}/polls": {
  id?: number;
  questions?: ReadonlyArray<{
  email?: string;
  name?: string;
  question_details?: ReadonlyArray<{
  answer?: string;
  date_time?: string;
  polling_id?: string;
  question?: string;
}>;
}>;
  start_time?: string;
  uuid?: string;
};
  "GET /past_webinars/{webinarId}/qa": {
  id?: number;
  questions?: ReadonlyArray<{
  email?: string;
  name?: string;
  question_details?: ReadonlyArray<{
  answer?: string;
  question?: string;
}>;
}>;
  start_time?: string;
  uuid?: string;
};
  "GET /users/{userId}/webinar_templates": {
  templates?: ReadonlyArray<{
  id?: string;
  name?: string;
  type?: number;
}>;
  total_records?: number;
};
  "POST /users/{userId}/webinar_templates": {
  id?: string;
  name?: string;
};
  "GET /users/{userId}/webinars": ({
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  webinars?: ReadonlyArray<({
  agenda?: string;
  created_at?: string;
  duration?: number;
  host_id?: string;
  id?: number;
  join_url?: string;
  start_time?: string;
  timezone?: string;
  topic?: string;
  type?: 5 | 6 | 9;
  uuid?: string;
  is_simulive?: boolean;
  is_events_webinar?: boolean;
})>;
});
  "POST /users/{userId}/webinars": {
  host_email?: string;
  host_id?: string;
  id?: number;
  template_id?: string;
  uuid?: string;
  agenda?: string;
  created_at?: string;
  duration?: number;
  registration_url?: string;
  join_url?: string;
  occurrences?: ReadonlyArray<{
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: "available" | "deleted";
}>;
  password?: string;
  encrypted_passcode?: string;
  h323_passcode?: string;
  recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: string;
};
  settings?: {
  additional_data_center_regions?: ReadonlyArray<string>;
  allow_multiple_devices?: boolean;
  alternative_hosts?: string;
  alternative_host_update_polls?: boolean;
  approval_type?: 0 | 1 | 2;
  attendees_and_panelists_reminder_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_name?: string;
  authentication_option?: string;
  auto_recording?: "local" | "cloud" | "none";
  close_registration?: boolean;
  contact_email?: string;
  contact_name?: string;
  email_language?: string;
  enforce_login?: boolean;
  enforce_login_domains?: string;
  follow_up_absentees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  follow_up_attendees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  global_dial_in_countries?: ReadonlyArray<string>;
  global_dial_in_numbers?: ReadonlyArray<{
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree" | "premium";
}>;
  hd_video?: boolean;
  hd_video_for_attendees?: boolean;
  host_video?: boolean;
  language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  languages?: string;
  interpreter_languages?: string;
}>;
};
  sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  sign_language?: string;
}>;
};
  panelist_authentication?: boolean;
  meeting_authentication?: boolean;
  add_watermark?: boolean;
  add_audio_watermark?: boolean;
  on_demand?: boolean;
  panelists_invitation_email_notification?: boolean;
  panelists_video?: boolean;
  post_webinar_survey?: boolean;
  practice_session?: boolean;
  question_and_answer?: {
  allow_submit_questions?: boolean;
  allow_anonymous_questions?: boolean;
  answer_questions?: "only" | "all";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  allow_auto_reply?: boolean;
  auto_reply_text?: string;
  enable?: boolean;
};
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registrants_restrict_number?: number;
  registration_type?: 1 | 2 | 3;
  send_1080p_video_to_attendees?: boolean;
  show_share_button?: boolean;
  show_join_info?: boolean;
  survey_url?: string;
  enable_session_branding?: boolean;
  request_permission_to_unmute_participants?: boolean;
  allow_host_control_participant_mute_state?: boolean;
  email_in_attendee_report?: boolean;
};
  start_time?: string;
  start_url?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: ReadonlyArray<{
  field?: string;
  value?: string;
  visible?: boolean;
}>;
  type?: 5 | 6 | 9;
  is_simulive?: boolean;
  record_file_id?: string;
  transition_to_live?: boolean;
  simulive_delay_start?: {
  enable?: boolean;
  time?: number;
  timeunit?: string;
};
  creation_source?: "other" | "open_api" | "web_portal";
};
  "GET /webinars/{webinarId}": {
  host_email?: string;
  host_id?: string;
  id?: number;
  template_id?: string;
  uuid?: string;
  agenda?: string;
  created_at?: string;
  duration?: number;
  registration_url?: string;
  join_url?: string;
  occurrences?: ReadonlyArray<{
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: "available" | "deleted";
}>;
  password?: string;
  encrypted_passcode?: string;
  h323_passcode?: string;
  recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: string;
};
  settings?: {
  additional_data_center_regions?: ReadonlyArray<string>;
  allow_multiple_devices?: boolean;
  alternative_hosts?: string;
  alternative_host_update_polls?: boolean;
  approval_type?: 0 | 1 | 2;
  attendees_and_panelists_reminder_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_name?: string;
  authentication_option?: string;
  auto_recording?: "local" | "cloud" | "none";
  close_registration?: boolean;
  contact_email?: string;
  contact_name?: string;
  email_language?: string;
  enforce_login?: boolean;
  enforce_login_domains?: string;
  follow_up_absentees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  follow_up_attendees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
  global_dial_in_countries?: ReadonlyArray<string>;
  global_dial_in_numbers?: ReadonlyArray<{
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree" | "premium";
}>;
  hd_video?: boolean;
  hd_video_for_attendees?: boolean;
  host_video?: boolean;
  language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  languages?: string;
  interpreter_languages?: string;
}>;
};
  sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: ReadonlyArray<{
  email?: string;
  sign_language?: string;
}>;
};
  panelist_authentication?: boolean;
  meeting_authentication?: boolean;
  add_watermark?: boolean;
  add_audio_watermark?: boolean;
  on_demand?: boolean;
  panelists_invitation_email_notification?: boolean;
  panelists_video?: boolean;
  post_webinar_survey?: boolean;
  practice_session?: boolean;
  question_and_answer?: {
  allow_submit_questions?: boolean;
  allow_anonymous_questions?: boolean;
  answer_questions?: "only" | "all";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  allow_auto_reply?: boolean;
  auto_reply_text?: string;
  enable?: boolean;
};
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registrants_restrict_number?: number;
  registration_type?: 1 | 2 | 3;
  send_1080p_video_to_attendees?: boolean;
  show_share_button?: boolean;
  show_join_info?: boolean;
  survey_url?: string;
  enable_session_branding?: boolean;
  request_permission_to_unmute_participants?: boolean;
  allow_host_control_participant_mute_state?: boolean;
  email_in_attendee_report?: boolean;
};
  start_time?: string;
  start_url?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: ReadonlyArray<{
  field?: string;
  value?: string;
  visible?: boolean;
}>;
  type?: 5 | 6 | 9;
  is_simulive?: boolean;
  record_file_id?: string;
  transition_to_live?: boolean;
  simulive_delay_start?: {
  enable?: boolean;
  time?: number;
  timeunit?: "second" | "minute";
};
  creation_source?: "other" | "open_api" | "web_portal";
};
  "DELETE /webinars/{webinarId}": void;
  "PATCH /webinars/{webinarId}": void;
  "POST /webinars/{webinarId}/batch_registrants": {
  registrants?: ReadonlyArray<{
  email?: string;
  join_url?: string;
  registrant_id?: string;
}>;
};
  "GET /webinars/{webinarId}/branding": {
  wallpaper?: {
  id?: string;
};
  virtual_backgrounds?: ReadonlyArray<{
  id?: string;
  name?: string;
  is_default?: boolean;
}>;
  name_tags?: ReadonlyArray<{
  id?: string;
  name?: string;
  text_color?: string;
  accent_color?: string;
  background_color?: string;
  is_default?: boolean;
}>;
};
  "POST /webinars/{webinarId}/branding/name_tags": {
  id?: string;
  name?: string;
  text_color?: string;
  accent_color?: string;
  background_color?: string;
  is_default?: boolean;
};
  "DELETE /webinars/{webinarId}/branding/name_tags": void;
  "PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}": void;
  "POST /webinars/{webinarId}/branding/virtual_backgrounds": {
  id?: string;
  name?: string;
  is_default?: boolean;
  size?: number;
  type?: "image";
};
  "DELETE /webinars/{webinarId}/branding/virtual_backgrounds": void;
  "PATCH /webinars/{webinarId}/branding/virtual_backgrounds": void;
  "POST /webinars/{webinarId}/branding/wallpaper": {
  id?: string;
  name?: string;
  size?: number;
  type?: "image";
};
  "DELETE /webinars/{webinarId}/branding/wallpaper": void;
  "POST /webinars/{webinarId}/invite_links": {
  attendees?: ReadonlyArray<{
  join_url?: string;
  name?: string;
}>;
};
  "GET /webinars/{webinarId}/jointoken/live_streaming": {
  expire_in?: 120;
  token?: string;
};
  "GET /webinars/{webinarId}/jointoken/local_archiving": {
  expire_in?: 120;
  token?: string;
};
  "GET /webinars/{webinarId}/jointoken/local_recording": {
  expire_in?: 120;
  token?: string;
};
  "GET /webinars/{webinarId}/livestream": {
  page_url?: string;
  stream_key?: string;
  stream_url?: string;
  resolution?: string;
};
  "PATCH /webinars/{webinarId}/livestream": void;
  "PATCH /webinars/{webinarId}/livestream/status": void;
  "GET /webinars/{webinarId}/panelists": ({
  panelists?: ReadonlyArray<({
  id?: string;
} & {
  email?: string;
  name?: string;
} & {
  join_url?: string;
} & {
  virtual_background_id?: string;
  name_tag_id?: string;
  name_tag_name?: string;
  name_tag_pronouns?: string;
  name_tag_description?: string;
})>;
  total_records?: number;
});
  "POST /webinars/{webinarId}/panelists": {
  id?: string;
  updated_at?: string;
};
  "DELETE /webinars/{webinarId}/panelists": void;
  "DELETE /webinars/{webinarId}/panelists/{panelistId}": void;
  "GET /webinars/{webinarId}/polls": ({
  polls?: ReadonlyArray<({
  id?: string;
  status?: "notstart" | "started" | "ended" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
})>;
  total_records?: number;
});
  "POST /webinars/{webinarId}/polls": ({
  id?: string;
  status?: "notstart" | "started" | "ended" | "sharing";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
});
  "GET /webinars/{webinarId}/polls/{pollId}": ({
  id?: string;
  status?: "notstart" | "started" | "ended" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: ReadonlyArray<{
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: ReadonlyArray<string>;
  case_sensitive?: boolean;
  name?: string;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
  prompt_right_answers?: ReadonlyArray<string>;
}>;
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: ReadonlyArray<string>;
  show_as_dropdown?: boolean;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
}>;
  title?: string;
});
  "PUT /webinars/{webinarId}/polls/{pollId}": void;
  "DELETE /webinars/{webinarId}/polls/{pollId}": void;
  "GET /webinars/{webinarId}/registrants": ({
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: ReadonlyArray<({
  id?: string;
} & ({
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-250" | "251-500" | "501-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  state?: string;
  status?: "approved" | "denied" | "pending";
  zip?: string;
}) & {
  create_time?: string;
  join_url?: string;
  status?: string;
})>;
});
  "POST /webinars/{webinarId}/registrants": {
  id?: number;
  join_url?: string;
  registrant_id?: string;
  start_time?: string;
  topic?: string;
  occurrences?: ReadonlyArray<{
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: string;
}>;
};
  "GET /webinars/{webinarId}/registrants/questions": ({
  custom_questions?: ReadonlyArray<{
  answers?: ReadonlyArray<string>;
  required?: boolean;
  title?: string;
  type?: "short" | "single_radio" | "single_dropdown" | "multiple";
}>;
  questions?: ReadonlyArray<{
  field_name?: "last_name" | "address" | "city" | "country" | "zip" | "state" | "phone" | "industry" | "org" | "job_title" | "purchasing_time_frame" | "role_in_purchase_process" | "no_of_employees" | "comments";
  required?: boolean;
}>;
});
  "PATCH /webinars/{webinarId}/registrants/questions": void;
  "PUT /webinars/{webinarId}/registrants/status": void;
  "GET /webinars/{webinarId}/registrants/{registrantId}": ({
  id?: string;
} & ({
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?: "" | "1-20" | "21-50" | "51-100" | "101-250" | "251-500" | "501-1,000" | "1,001-5,000" | "5,001-10,000" | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?: "" | "Within a month" | "1-3 months" | "4-6 months" | "More than 6 months" | "No timeframe";
  role_in_purchase_process?: "" | "Decision Maker" | "Evaluator/Recommender" | "Influencer" | "Not involved";
  state?: string;
  status?: "approved" | "denied" | "pending";
  zip?: string;
} & {
  language?: "en-US" | "de-DE" | "es-ES" | "fr-FR" | "jp-JP" | "pt-PT" | "ru-RU" | "zh-CN" | "zh-TW" | "ko-KO" | "it-IT" | "vi-VN" | "pl-PL" | "Tr-TR";
}) & {
  create_time?: string;
  join_url?: string;
  status?: string;
});
  "DELETE /webinars/{webinarId}/registrants/{registrantId}": void;
  "POST /webinars/{webinarId}/sip_dialing": {
  sip_dialing?: string;
  paid_crc_plan_participant?: boolean;
  participant_identifier_code?: string;
  expire_in?: number;
};
  "PUT /webinars/{webinarId}/status": void;
  "GET /webinars/{webinarId}/survey": {
  custom_survey?: {
  title?: string;
  anonymous?: boolean;
  numbered_questions?: boolean;
  show_question_type?: boolean;
  feedback?: string;
  questions?: ReadonlyArray<{
  name?: string;
  type?: "single" | "multiple" | "matching" | "rank_order" | "short_answer" | "long_answer" | "fill_in_the_blank" | "rating_scale";
  answer_required?: boolean;
  show_as_dropdown?: boolean;
  answers?: ReadonlyArray<string>;
  prompts?: ReadonlyArray<{
  prompt_question?: string;
}>;
  answer_min_character?: number;
  answer_max_character?: number;
  rating_min_value?: number;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_max_label?: string;
}>;
};
  show_in_the_browser?: boolean;
  show_in_the_follow_up_email?: boolean;
  third_party_survey?: string;
};
  "DELETE /webinars/{webinarId}/survey": void;
  "PATCH /webinars/{webinarId}/survey": void;
  "GET /webinars/{webinarId}/token": {
  token?: string;
};
  "GET /webinars/{webinarId}/tracking_sources": {
  total_records?: number;
  tracking_sources?: ReadonlyArray<{
  id?: string;
  registration_count?: number;
  source_name?: string;
  tracking_url?: string;
  visitor_count?: number;
}>;
};
}
