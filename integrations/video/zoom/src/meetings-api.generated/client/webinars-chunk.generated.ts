// Generated endpoint chunk for ZoomMeetingsApi.
// Do not edit by hand; refresh this generated provider package after updating provider specs.

import type {
  ZoomMeetingsGeneratedOperationCaller,
  ZoomMeetingsApiOperationArgs,
  ZoomMeetingsApiOperationInput,
  ZoomMeetingsApiPathParamValue,
} from "../../meetings-api-client.generated.js";
import type { ZoomMeetingsApiOperationResponseMap } from "../../meetings-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomMeetingsApiWebinarsOperationKeys = [
  "DELETE /live_webinars/{webinarId}/chat/messages/{messageId}",
  "GET /past_webinars/{webinarId}/absentees",
  "GET /past_webinars/{webinarId}/instances",
  "GET /past_webinars/{webinarId}/participants",
  "GET /past_webinars/{webinarId}/polls",
  "GET /past_webinars/{webinarId}/qa",
  "GET /users/{userId}/webinar_templates",
  "POST /users/{userId}/webinar_templates",
  "GET /users/{userId}/webinars",
  "POST /users/{userId}/webinars",
  "GET /webinars/{webinarId}",
  "DELETE /webinars/{webinarId}",
  "PATCH /webinars/{webinarId}",
  "POST /webinars/{webinarId}/batch_registrants",
  "GET /webinars/{webinarId}/branding",
  "POST /webinars/{webinarId}/branding/name_tags",
  "DELETE /webinars/{webinarId}/branding/name_tags",
  "PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}",
  "POST /webinars/{webinarId}/branding/virtual_backgrounds",
  "DELETE /webinars/{webinarId}/branding/virtual_backgrounds",
  "PATCH /webinars/{webinarId}/branding/virtual_backgrounds",
  "POST /webinars/{webinarId}/branding/wallpaper",
  "DELETE /webinars/{webinarId}/branding/wallpaper",
  "POST /webinars/{webinarId}/invite_links",
  "GET /webinars/{webinarId}/jointoken/live_streaming",
  "GET /webinars/{webinarId}/jointoken/local_archiving",
  "GET /webinars/{webinarId}/jointoken/local_recording",
  "GET /webinars/{webinarId}/livestream",
  "PATCH /webinars/{webinarId}/livestream",
  "PATCH /webinars/{webinarId}/livestream/status",
  "GET /webinars/{webinarId}/panelists",
  "POST /webinars/{webinarId}/panelists",
  "DELETE /webinars/{webinarId}/panelists",
  "DELETE /webinars/{webinarId}/panelists/{panelistId}",
  "GET /webinars/{webinarId}/polls",
  "POST /webinars/{webinarId}/polls",
  "GET /webinars/{webinarId}/polls/{pollId}",
  "PUT /webinars/{webinarId}/polls/{pollId}",
  "DELETE /webinars/{webinarId}/polls/{pollId}",
  "GET /webinars/{webinarId}/registrants",
  "POST /webinars/{webinarId}/registrants",
  "GET /webinars/{webinarId}/registrants/questions",
  "PATCH /webinars/{webinarId}/registrants/questions",
  "PUT /webinars/{webinarId}/registrants/status",
  "GET /webinars/{webinarId}/registrants/{registrantId}",
  "DELETE /webinars/{webinarId}/registrants/{registrantId}",
  "POST /webinars/{webinarId}/sip_dialing",
  "PUT /webinars/{webinarId}/status",
  "GET /webinars/{webinarId}/survey",
  "DELETE /webinars/{webinarId}/survey",
  "PATCH /webinars/{webinarId}/survey",
  "GET /webinars/{webinarId}/token",
  "GET /webinars/{webinarId}/tracking_sources"
] as const;
export type ZoomMeetingsApiWebinarsOperationKey = typeof ZoomMeetingsApiWebinarsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiWebinarsOperationPathParamMap {
  "DELETE /live_webinars/{webinarId}/chat/messages/{messageId}": { "webinarId": ZoomMeetingsApiPathParamValue; "messageId": ZoomMeetingsApiPathParamValue };
  "GET /past_webinars/{webinarId}/absentees": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /past_webinars/{webinarId}/instances": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /past_webinars/{webinarId}/participants": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /past_webinars/{webinarId}/polls": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /past_webinars/{webinarId}/qa": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /users/{userId}/webinar_templates": { "userId": ZoomMeetingsApiPathParamValue };
  "POST /users/{userId}/webinar_templates": { "userId": ZoomMeetingsApiPathParamValue };
  "GET /users/{userId}/webinars": { "userId": ZoomMeetingsApiPathParamValue };
  "POST /users/{userId}/webinars": { "userId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}": { "webinarId": ZoomMeetingsApiPathParamValue };
  "DELETE /webinars/{webinarId}": { "webinarId": ZoomMeetingsApiPathParamValue };
  "PATCH /webinars/{webinarId}": { "webinarId": ZoomMeetingsApiPathParamValue };
  "POST /webinars/{webinarId}/batch_registrants": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/branding": { "webinarId": ZoomMeetingsApiPathParamValue };
  "POST /webinars/{webinarId}/branding/name_tags": { "webinarId": ZoomMeetingsApiPathParamValue };
  "DELETE /webinars/{webinarId}/branding/name_tags": { "webinarId": ZoomMeetingsApiPathParamValue };
  "PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}": { "webinarId": ZoomMeetingsApiPathParamValue; "nameTagId": ZoomMeetingsApiPathParamValue };
  "POST /webinars/{webinarId}/branding/virtual_backgrounds": { "webinarId": ZoomMeetingsApiPathParamValue };
  "DELETE /webinars/{webinarId}/branding/virtual_backgrounds": { "webinarId": ZoomMeetingsApiPathParamValue };
  "PATCH /webinars/{webinarId}/branding/virtual_backgrounds": { "webinarId": ZoomMeetingsApiPathParamValue };
  "POST /webinars/{webinarId}/branding/wallpaper": { "webinarId": ZoomMeetingsApiPathParamValue };
  "DELETE /webinars/{webinarId}/branding/wallpaper": { "webinarId": ZoomMeetingsApiPathParamValue };
  "POST /webinars/{webinarId}/invite_links": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/jointoken/live_streaming": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/jointoken/local_archiving": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/jointoken/local_recording": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/livestream": { "webinarId": ZoomMeetingsApiPathParamValue };
  "PATCH /webinars/{webinarId}/livestream": { "webinarId": ZoomMeetingsApiPathParamValue };
  "PATCH /webinars/{webinarId}/livestream/status": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/panelists": { "webinarId": ZoomMeetingsApiPathParamValue };
  "POST /webinars/{webinarId}/panelists": { "webinarId": ZoomMeetingsApiPathParamValue };
  "DELETE /webinars/{webinarId}/panelists": { "webinarId": ZoomMeetingsApiPathParamValue };
  "DELETE /webinars/{webinarId}/panelists/{panelistId}": { "webinarId": ZoomMeetingsApiPathParamValue; "panelistId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/polls": { "webinarId": ZoomMeetingsApiPathParamValue };
  "POST /webinars/{webinarId}/polls": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/polls/{pollId}": { "webinarId": ZoomMeetingsApiPathParamValue; "pollId": ZoomMeetingsApiPathParamValue };
  "PUT /webinars/{webinarId}/polls/{pollId}": { "webinarId": ZoomMeetingsApiPathParamValue; "pollId": ZoomMeetingsApiPathParamValue };
  "DELETE /webinars/{webinarId}/polls/{pollId}": { "webinarId": ZoomMeetingsApiPathParamValue; "pollId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/registrants": { "webinarId": ZoomMeetingsApiPathParamValue };
  "POST /webinars/{webinarId}/registrants": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/registrants/questions": { "webinarId": ZoomMeetingsApiPathParamValue };
  "PATCH /webinars/{webinarId}/registrants/questions": { "webinarId": ZoomMeetingsApiPathParamValue };
  "PUT /webinars/{webinarId}/registrants/status": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/registrants/{registrantId}": { "webinarId": ZoomMeetingsApiPathParamValue; "registrantId": ZoomMeetingsApiPathParamValue };
  "DELETE /webinars/{webinarId}/registrants/{registrantId}": { "webinarId": ZoomMeetingsApiPathParamValue; "registrantId": ZoomMeetingsApiPathParamValue };
  "POST /webinars/{webinarId}/sip_dialing": { "webinarId": ZoomMeetingsApiPathParamValue };
  "PUT /webinars/{webinarId}/status": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/survey": { "webinarId": ZoomMeetingsApiPathParamValue };
  "DELETE /webinars/{webinarId}/survey": { "webinarId": ZoomMeetingsApiPathParamValue };
  "PATCH /webinars/{webinarId}/survey": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/token": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /webinars/{webinarId}/tracking_sources": { "webinarId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiWebinarsOperationRequestMap {
  "DELETE /live_webinars/{webinarId}/chat/messages/{messageId}": ZoomMeetingsApiOperationInput<"DELETE /live_webinars/{webinarId}/chat/messages/{messageId}">;
  "GET /past_webinars/{webinarId}/absentees": ZoomMeetingsApiOperationInput<"GET /past_webinars/{webinarId}/absentees">;
  "GET /past_webinars/{webinarId}/instances": ZoomMeetingsApiOperationInput<"GET /past_webinars/{webinarId}/instances">;
  "GET /past_webinars/{webinarId}/participants": ZoomMeetingsApiOperationInput<"GET /past_webinars/{webinarId}/participants">;
  "GET /past_webinars/{webinarId}/polls": ZoomMeetingsApiOperationInput<"GET /past_webinars/{webinarId}/polls">;
  "GET /past_webinars/{webinarId}/qa": ZoomMeetingsApiOperationInput<"GET /past_webinars/{webinarId}/qa">;
  "GET /users/{userId}/webinar_templates": ZoomMeetingsApiOperationInput<"GET /users/{userId}/webinar_templates">;
  "POST /users/{userId}/webinar_templates": ZoomMeetingsApiOperationInput<"POST /users/{userId}/webinar_templates">;
  "GET /users/{userId}/webinars": ZoomMeetingsApiOperationInput<"GET /users/{userId}/webinars">;
  "POST /users/{userId}/webinars": ZoomMeetingsApiOperationInput<"POST /users/{userId}/webinars">;
  "GET /webinars/{webinarId}": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}">;
  "DELETE /webinars/{webinarId}": ZoomMeetingsApiOperationInput<"DELETE /webinars/{webinarId}">;
  "PATCH /webinars/{webinarId}": ZoomMeetingsApiOperationInput<"PATCH /webinars/{webinarId}">;
  "POST /webinars/{webinarId}/batch_registrants": ZoomMeetingsApiOperationInput<"POST /webinars/{webinarId}/batch_registrants">;
  "GET /webinars/{webinarId}/branding": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/branding">;
  "POST /webinars/{webinarId}/branding/name_tags": ZoomMeetingsApiOperationInput<"POST /webinars/{webinarId}/branding/name_tags">;
  "DELETE /webinars/{webinarId}/branding/name_tags": ZoomMeetingsApiOperationInput<"DELETE /webinars/{webinarId}/branding/name_tags">;
  "PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}": ZoomMeetingsApiOperationInput<"PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}">;
  "POST /webinars/{webinarId}/branding/virtual_backgrounds": ZoomMeetingsApiOperationInput<"POST /webinars/{webinarId}/branding/virtual_backgrounds">;
  "DELETE /webinars/{webinarId}/branding/virtual_backgrounds": ZoomMeetingsApiOperationInput<"DELETE /webinars/{webinarId}/branding/virtual_backgrounds">;
  "PATCH /webinars/{webinarId}/branding/virtual_backgrounds": ZoomMeetingsApiOperationInput<"PATCH /webinars/{webinarId}/branding/virtual_backgrounds">;
  "POST /webinars/{webinarId}/branding/wallpaper": ZoomMeetingsApiOperationInput<"POST /webinars/{webinarId}/branding/wallpaper">;
  "DELETE /webinars/{webinarId}/branding/wallpaper": ZoomMeetingsApiOperationInput<"DELETE /webinars/{webinarId}/branding/wallpaper">;
  "POST /webinars/{webinarId}/invite_links": ZoomMeetingsApiOperationInput<"POST /webinars/{webinarId}/invite_links">;
  "GET /webinars/{webinarId}/jointoken/live_streaming": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/jointoken/live_streaming">;
  "GET /webinars/{webinarId}/jointoken/local_archiving": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/jointoken/local_archiving">;
  "GET /webinars/{webinarId}/jointoken/local_recording": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/jointoken/local_recording">;
  "GET /webinars/{webinarId}/livestream": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/livestream">;
  "PATCH /webinars/{webinarId}/livestream": ZoomMeetingsApiOperationInput<"PATCH /webinars/{webinarId}/livestream">;
  "PATCH /webinars/{webinarId}/livestream/status": ZoomMeetingsApiOperationInput<"PATCH /webinars/{webinarId}/livestream/status">;
  "GET /webinars/{webinarId}/panelists": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/panelists">;
  "POST /webinars/{webinarId}/panelists": ZoomMeetingsApiOperationInput<"POST /webinars/{webinarId}/panelists">;
  "DELETE /webinars/{webinarId}/panelists": ZoomMeetingsApiOperationInput<"DELETE /webinars/{webinarId}/panelists">;
  "DELETE /webinars/{webinarId}/panelists/{panelistId}": ZoomMeetingsApiOperationInput<"DELETE /webinars/{webinarId}/panelists/{panelistId}">;
  "GET /webinars/{webinarId}/polls": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/polls">;
  "POST /webinars/{webinarId}/polls": ZoomMeetingsApiOperationInput<"POST /webinars/{webinarId}/polls">;
  "GET /webinars/{webinarId}/polls/{pollId}": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/polls/{pollId}">;
  "PUT /webinars/{webinarId}/polls/{pollId}": ZoomMeetingsApiOperationInput<"PUT /webinars/{webinarId}/polls/{pollId}">;
  "DELETE /webinars/{webinarId}/polls/{pollId}": ZoomMeetingsApiOperationInput<"DELETE /webinars/{webinarId}/polls/{pollId}">;
  "GET /webinars/{webinarId}/registrants": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/registrants">;
  "POST /webinars/{webinarId}/registrants": ZoomMeetingsApiOperationInput<"POST /webinars/{webinarId}/registrants">;
  "GET /webinars/{webinarId}/registrants/questions": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/registrants/questions">;
  "PATCH /webinars/{webinarId}/registrants/questions": ZoomMeetingsApiOperationInput<"PATCH /webinars/{webinarId}/registrants/questions">;
  "PUT /webinars/{webinarId}/registrants/status": ZoomMeetingsApiOperationInput<"PUT /webinars/{webinarId}/registrants/status">;
  "GET /webinars/{webinarId}/registrants/{registrantId}": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/registrants/{registrantId}">;
  "DELETE /webinars/{webinarId}/registrants/{registrantId}": ZoomMeetingsApiOperationInput<"DELETE /webinars/{webinarId}/registrants/{registrantId}">;
  "POST /webinars/{webinarId}/sip_dialing": ZoomMeetingsApiOperationInput<"POST /webinars/{webinarId}/sip_dialing">;
  "PUT /webinars/{webinarId}/status": ZoomMeetingsApiOperationInput<"PUT /webinars/{webinarId}/status">;
  "GET /webinars/{webinarId}/survey": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/survey">;
  "DELETE /webinars/{webinarId}/survey": ZoomMeetingsApiOperationInput<"DELETE /webinars/{webinarId}/survey">;
  "PATCH /webinars/{webinarId}/survey": ZoomMeetingsApiOperationInput<"PATCH /webinars/{webinarId}/survey">;
  "GET /webinars/{webinarId}/token": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/token">;
  "GET /webinars/{webinarId}/tracking_sources": ZoomMeetingsApiOperationInput<"GET /webinars/{webinarId}/tracking_sources">;
}

export interface ZoomMeetingsApiWebinarsGeneratedClient {
  DeleteWebinarChatMessageById(...args: ZoomMeetingsApiOperationArgs<"DELETE /live_webinars/{webinarId}/chat/messages/{messageId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /live_webinars/{webinarId}/chat/messages/{messageId}"]>;
  WebinarAbsentees(...args: ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/absentees">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_webinars/{webinarId}/absentees"]>;
  PastWebinars(...args: ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/instances">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_webinars/{webinarId}/instances"]>;
  ListWebinarParticipants(...args: ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/participants">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_webinars/{webinarId}/participants"]>;
  ListPastWebinarPollResults(...args: ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/polls">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_webinars/{webinarId}/polls"]>;
  ListPastWebinarQA(...args: ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/qa">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_webinars/{webinarId}/qa"]>;
  ListWebinarTemplates(...args: ZoomMeetingsApiOperationArgs<"GET /users/{userId}/webinar_templates">): Promise<ZoomMeetingsApiOperationResponseMap["GET /users/{userId}/webinar_templates"]>;
  WebinarTemplateCreate(...args: ZoomMeetingsApiOperationArgs<"POST /users/{userId}/webinar_templates">): Promise<ZoomMeetingsApiOperationResponseMap["POST /users/{userId}/webinar_templates"]>;
  Webinars(...args: ZoomMeetingsApiOperationArgs<"GET /users/{userId}/webinars">): Promise<ZoomMeetingsApiOperationResponseMap["GET /users/{userId}/webinars"]>;
  WebinarCreate(...args: ZoomMeetingsApiOperationArgs<"POST /users/{userId}/webinars">): Promise<ZoomMeetingsApiOperationResponseMap["POST /users/{userId}/webinars"]>;
  Webinar(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}"]>;
  WebinarDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /webinars/{webinarId}"]>;
  WebinarUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /webinars/{webinarId}"]>;
  AddBatchWebinarRegistrants(...args: ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/batch_registrants">): Promise<ZoomMeetingsApiOperationResponseMap["POST /webinars/{webinarId}/batch_registrants"]>;
  GetWebinarBranding(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/branding">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/branding"]>;
  CreateWebinarBrandingNameTag(...args: ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/branding/name_tags">): Promise<ZoomMeetingsApiOperationResponseMap["POST /webinars/{webinarId}/branding/name_tags"]>;
  DeleteWebinarBrandingNameTag(...args: ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/branding/name_tags">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /webinars/{webinarId}/branding/name_tags"]>;
  UpdateWebinarBrandingNameTag(...args: ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}"]>;
  UploadWebinarBrandingVB(...args: ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/branding/virtual_backgrounds">): Promise<ZoomMeetingsApiOperationResponseMap["POST /webinars/{webinarId}/branding/virtual_backgrounds"]>;
  DeleteWebinarBrandingVB(...args: ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/branding/virtual_backgrounds">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /webinars/{webinarId}/branding/virtual_backgrounds"]>;
  SetWebinarBrandingVB(...args: ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/branding/virtual_backgrounds">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /webinars/{webinarId}/branding/virtual_backgrounds"]>;
  UploadWebinarBrandingWallpaper(...args: ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/branding/wallpaper">): Promise<ZoomMeetingsApiOperationResponseMap["POST /webinars/{webinarId}/branding/wallpaper"]>;
  DeleteWebinarBrandingWallpaper(...args: ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/branding/wallpaper">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /webinars/{webinarId}/branding/wallpaper"]>;
  WebinarInviteLinksCreate(...args: ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/invite_links">): Promise<ZoomMeetingsApiOperationResponseMap["POST /webinars/{webinarId}/invite_links"]>;
  WebinarLiveStreamingJoinToken(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/jointoken/live_streaming">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/jointoken/live_streaming"]>;
  WebinarLocalArchivingArchiveToken(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/jointoken/local_archiving">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/jointoken/local_archiving"]>;
  WebinarLocalRecordingJoinToken(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/jointoken/local_recording">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/jointoken/local_recording"]>;
  GetWebinarLiveStreamDetails(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/livestream">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/livestream"]>;
  WebinarLiveStreamUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/livestream">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /webinars/{webinarId}/livestream"]>;
  WebinarLiveStreamStatusUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/livestream/status">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /webinars/{webinarId}/livestream/status"]>;
  WebinarPanelists(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/panelists">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/panelists"]>;
  WebinarPanelistCreate(...args: ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/panelists">): Promise<ZoomMeetingsApiOperationResponseMap["POST /webinars/{webinarId}/panelists"]>;
  WebinarPanelistsDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/panelists">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /webinars/{webinarId}/panelists"]>;
  WebinarPanelistDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/panelists/{panelistId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /webinars/{webinarId}/panelists/{panelistId}"]>;
  WebinarPolls(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/polls">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/polls"]>;
  WebinarPollCreate(...args: ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/polls">): Promise<ZoomMeetingsApiOperationResponseMap["POST /webinars/{webinarId}/polls"]>;
  WebinarPollGet(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/polls/{pollId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/polls/{pollId}"]>;
  WebinarPollUpdate(...args: ZoomMeetingsApiOperationArgs<"PUT /webinars/{webinarId}/polls/{pollId}">): Promise<ZoomMeetingsApiOperationResponseMap["PUT /webinars/{webinarId}/polls/{pollId}"]>;
  WebinarPollDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/polls/{pollId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /webinars/{webinarId}/polls/{pollId}"]>;
  WebinarRegistrants(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/registrants">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/registrants"]>;
  WebinarRegistrantCreate(...args: ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/registrants">): Promise<ZoomMeetingsApiOperationResponseMap["POST /webinars/{webinarId}/registrants"]>;
  WebinarRegistrantsQuestionsGet(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/registrants/questions">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/registrants/questions"]>;
  WebinarRegistrantQuestionUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/registrants/questions">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /webinars/{webinarId}/registrants/questions"]>;
  WebinarRegistrantStatus(...args: ZoomMeetingsApiOperationArgs<"PUT /webinars/{webinarId}/registrants/status">): Promise<ZoomMeetingsApiOperationResponseMap["PUT /webinars/{webinarId}/registrants/status"]>;
  WebinarRegistrantGet(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/registrants/{registrantId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/registrants/{registrantId}"]>;
  DeleteWebinarRegistrant(...args: ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/registrants/{registrantId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /webinars/{webinarId}/registrants/{registrantId}"]>;
  GetWebinarSipDialingWithPasscode(...args: ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/sip_dialing">): Promise<ZoomMeetingsApiOperationResponseMap["POST /webinars/{webinarId}/sip_dialing"]>;
  WebinarStatus(...args: ZoomMeetingsApiOperationArgs<"PUT /webinars/{webinarId}/status">): Promise<ZoomMeetingsApiOperationResponseMap["PUT /webinars/{webinarId}/status"]>;
  WebinarSurveyGet(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/survey">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/survey"]>;
  WebinarSurveyDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/survey">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /webinars/{webinarId}/survey"]>;
  WebinarSurveyUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/survey">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /webinars/{webinarId}/survey"]>;
  WebinarToken(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/token">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/token"]>;
  GetTrackingSources(...args: ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/tracking_sources">): Promise<ZoomMeetingsApiOperationResponseMap["GET /webinars/{webinarId}/tracking_sources"]>;
}

export const ZoomMeetingsApiWebinarsGeneratedFunctionNames = [
  "DeleteWebinarChatMessageById",
  "WebinarAbsentees",
  "PastWebinars",
  "ListWebinarParticipants",
  "ListPastWebinarPollResults",
  "ListPastWebinarQA",
  "ListWebinarTemplates",
  "WebinarTemplateCreate",
  "Webinars",
  "WebinarCreate",
  "Webinar",
  "WebinarDelete",
  "WebinarUpdate",
  "AddBatchWebinarRegistrants",
  "GetWebinarBranding",
  "CreateWebinarBrandingNameTag",
  "DeleteWebinarBrandingNameTag",
  "UpdateWebinarBrandingNameTag",
  "UploadWebinarBrandingVB",
  "DeleteWebinarBrandingVB",
  "SetWebinarBrandingVB",
  "UploadWebinarBrandingWallpaper",
  "DeleteWebinarBrandingWallpaper",
  "WebinarInviteLinksCreate",
  "WebinarLiveStreamingJoinToken",
  "WebinarLocalArchivingArchiveToken",
  "WebinarLocalRecordingJoinToken",
  "GetWebinarLiveStreamDetails",
  "WebinarLiveStreamUpdate",
  "WebinarLiveStreamStatusUpdate",
  "WebinarPanelists",
  "WebinarPanelistCreate",
  "WebinarPanelistsDelete",
  "WebinarPanelistDelete",
  "WebinarPolls",
  "WebinarPollCreate",
  "WebinarPollGet",
  "WebinarPollUpdate",
  "WebinarPollDelete",
  "WebinarRegistrants",
  "WebinarRegistrantCreate",
  "WebinarRegistrantsQuestionsGet",
  "WebinarRegistrantQuestionUpdate",
  "WebinarRegistrantStatus",
  "WebinarRegistrantGet",
  "DeleteWebinarRegistrant",
  "GetWebinarSipDialingWithPasscode",
  "WebinarStatus",
  "WebinarSurveyGet",
  "WebinarSurveyDelete",
  "WebinarSurveyUpdate",
  "WebinarToken",
  "GetTrackingSources"
] as const satisfies readonly (keyof ZoomMeetingsApiWebinarsGeneratedClient)[];

export function createZoomMeetingsApiWebinarsGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiWebinarsGeneratedClient {
  return {
    DeleteWebinarChatMessageById: (...args) => callOperation("DELETE /live_webinars/{webinarId}/chat/messages/{messageId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /live_webinars/{webinarId}/chat/messages/{messageId}">)),
    WebinarAbsentees: (...args) => callOperation("GET /past_webinars/{webinarId}/absentees", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/absentees">)),
    PastWebinars: (...args) => callOperation("GET /past_webinars/{webinarId}/instances", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/instances">)),
    ListWebinarParticipants: (...args) => callOperation("GET /past_webinars/{webinarId}/participants", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/participants">)),
    ListPastWebinarPollResults: (...args) => callOperation("GET /past_webinars/{webinarId}/polls", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/polls">)),
    ListPastWebinarQA: (...args) => callOperation("GET /past_webinars/{webinarId}/qa", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_webinars/{webinarId}/qa">)),
    ListWebinarTemplates: (...args) => callOperation("GET /users/{userId}/webinar_templates", ...(args as ZoomMeetingsApiOperationArgs<"GET /users/{userId}/webinar_templates">)),
    WebinarTemplateCreate: (...args) => callOperation("POST /users/{userId}/webinar_templates", ...(args as ZoomMeetingsApiOperationArgs<"POST /users/{userId}/webinar_templates">)),
    Webinars: (...args) => callOperation("GET /users/{userId}/webinars", ...(args as ZoomMeetingsApiOperationArgs<"GET /users/{userId}/webinars">)),
    WebinarCreate: (...args) => callOperation("POST /users/{userId}/webinars", ...(args as ZoomMeetingsApiOperationArgs<"POST /users/{userId}/webinars">)),
    Webinar: (...args) => callOperation("GET /webinars/{webinarId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}">)),
    WebinarDelete: (...args) => callOperation("DELETE /webinars/{webinarId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}">)),
    WebinarUpdate: (...args) => callOperation("PATCH /webinars/{webinarId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}">)),
    AddBatchWebinarRegistrants: (...args) => callOperation("POST /webinars/{webinarId}/batch_registrants", ...(args as ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/batch_registrants">)),
    GetWebinarBranding: (...args) => callOperation("GET /webinars/{webinarId}/branding", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/branding">)),
    CreateWebinarBrandingNameTag: (...args) => callOperation("POST /webinars/{webinarId}/branding/name_tags", ...(args as ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/branding/name_tags">)),
    DeleteWebinarBrandingNameTag: (...args) => callOperation("DELETE /webinars/{webinarId}/branding/name_tags", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/branding/name_tags">)),
    UpdateWebinarBrandingNameTag: (...args) => callOperation("PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}">)),
    UploadWebinarBrandingVB: (...args) => callOperation("POST /webinars/{webinarId}/branding/virtual_backgrounds", ...(args as ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/branding/virtual_backgrounds">)),
    DeleteWebinarBrandingVB: (...args) => callOperation("DELETE /webinars/{webinarId}/branding/virtual_backgrounds", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/branding/virtual_backgrounds">)),
    SetWebinarBrandingVB: (...args) => callOperation("PATCH /webinars/{webinarId}/branding/virtual_backgrounds", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/branding/virtual_backgrounds">)),
    UploadWebinarBrandingWallpaper: (...args) => callOperation("POST /webinars/{webinarId}/branding/wallpaper", ...(args as ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/branding/wallpaper">)),
    DeleteWebinarBrandingWallpaper: (...args) => callOperation("DELETE /webinars/{webinarId}/branding/wallpaper", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/branding/wallpaper">)),
    WebinarInviteLinksCreate: (...args) => callOperation("POST /webinars/{webinarId}/invite_links", ...(args as ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/invite_links">)),
    WebinarLiveStreamingJoinToken: (...args) => callOperation("GET /webinars/{webinarId}/jointoken/live_streaming", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/jointoken/live_streaming">)),
    WebinarLocalArchivingArchiveToken: (...args) => callOperation("GET /webinars/{webinarId}/jointoken/local_archiving", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/jointoken/local_archiving">)),
    WebinarLocalRecordingJoinToken: (...args) => callOperation("GET /webinars/{webinarId}/jointoken/local_recording", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/jointoken/local_recording">)),
    GetWebinarLiveStreamDetails: (...args) => callOperation("GET /webinars/{webinarId}/livestream", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/livestream">)),
    WebinarLiveStreamUpdate: (...args) => callOperation("PATCH /webinars/{webinarId}/livestream", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/livestream">)),
    WebinarLiveStreamStatusUpdate: (...args) => callOperation("PATCH /webinars/{webinarId}/livestream/status", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/livestream/status">)),
    WebinarPanelists: (...args) => callOperation("GET /webinars/{webinarId}/panelists", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/panelists">)),
    WebinarPanelistCreate: (...args) => callOperation("POST /webinars/{webinarId}/panelists", ...(args as ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/panelists">)),
    WebinarPanelistsDelete: (...args) => callOperation("DELETE /webinars/{webinarId}/panelists", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/panelists">)),
    WebinarPanelistDelete: (...args) => callOperation("DELETE /webinars/{webinarId}/panelists/{panelistId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/panelists/{panelistId}">)),
    WebinarPolls: (...args) => callOperation("GET /webinars/{webinarId}/polls", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/polls">)),
    WebinarPollCreate: (...args) => callOperation("POST /webinars/{webinarId}/polls", ...(args as ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/polls">)),
    WebinarPollGet: (...args) => callOperation("GET /webinars/{webinarId}/polls/{pollId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/polls/{pollId}">)),
    WebinarPollUpdate: (...args) => callOperation("PUT /webinars/{webinarId}/polls/{pollId}", ...(args as ZoomMeetingsApiOperationArgs<"PUT /webinars/{webinarId}/polls/{pollId}">)),
    WebinarPollDelete: (...args) => callOperation("DELETE /webinars/{webinarId}/polls/{pollId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/polls/{pollId}">)),
    WebinarRegistrants: (...args) => callOperation("GET /webinars/{webinarId}/registrants", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/registrants">)),
    WebinarRegistrantCreate: (...args) => callOperation("POST /webinars/{webinarId}/registrants", ...(args as ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/registrants">)),
    WebinarRegistrantsQuestionsGet: (...args) => callOperation("GET /webinars/{webinarId}/registrants/questions", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/registrants/questions">)),
    WebinarRegistrantQuestionUpdate: (...args) => callOperation("PATCH /webinars/{webinarId}/registrants/questions", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/registrants/questions">)),
    WebinarRegistrantStatus: (...args) => callOperation("PUT /webinars/{webinarId}/registrants/status", ...(args as ZoomMeetingsApiOperationArgs<"PUT /webinars/{webinarId}/registrants/status">)),
    WebinarRegistrantGet: (...args) => callOperation("GET /webinars/{webinarId}/registrants/{registrantId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/registrants/{registrantId}">)),
    DeleteWebinarRegistrant: (...args) => callOperation("DELETE /webinars/{webinarId}/registrants/{registrantId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/registrants/{registrantId}">)),
    GetWebinarSipDialingWithPasscode: (...args) => callOperation("POST /webinars/{webinarId}/sip_dialing", ...(args as ZoomMeetingsApiOperationArgs<"POST /webinars/{webinarId}/sip_dialing">)),
    WebinarStatus: (...args) => callOperation("PUT /webinars/{webinarId}/status", ...(args as ZoomMeetingsApiOperationArgs<"PUT /webinars/{webinarId}/status">)),
    WebinarSurveyGet: (...args) => callOperation("GET /webinars/{webinarId}/survey", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/survey">)),
    WebinarSurveyDelete: (...args) => callOperation("DELETE /webinars/{webinarId}/survey", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /webinars/{webinarId}/survey">)),
    WebinarSurveyUpdate: (...args) => callOperation("PATCH /webinars/{webinarId}/survey", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /webinars/{webinarId}/survey">)),
    WebinarToken: (...args) => callOperation("GET /webinars/{webinarId}/token", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/token">)),
    GetTrackingSources: (...args) => callOperation("GET /webinars/{webinarId}/tracking_sources", ...(args as ZoomMeetingsApiOperationArgs<"GET /webinars/{webinarId}/tracking_sources">)),
  };
}
