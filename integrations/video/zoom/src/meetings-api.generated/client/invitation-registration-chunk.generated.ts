// Generated endpoint chunk for ZoomMeetingsApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomMeetingsGeneratedOperationCaller,
  ZoomMeetingsApiOperationArgs,
  ZoomMeetingsApiOperationInput,
  ZoomMeetingsApiPathParamValue,
} from "../../meetings-api-client.generated.js";
import type { ZoomMeetingsApiOperationResponseMap } from "../../meetings-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomMeetingsApiInvitationRegistrationOperationKeys = [
  "POST /meetings/{meetingId}/batch_registrants",
  "GET /meetings/{meetingId}/invitation",
  "POST /meetings/{meetingId}/invite_links",
  "GET /meetings/{meetingId}/registrants",
  "POST /meetings/{meetingId}/registrants",
  "GET /meetings/{meetingId}/registrants/questions",
  "PATCH /meetings/{meetingId}/registrants/questions",
  "PUT /meetings/{meetingId}/registrants/status",
  "GET /meetings/{meetingId}/registrants/{registrantId}",
  "DELETE /meetings/{meetingId}/registrants/{registrantId}"
] as const;
export type ZoomMeetingsApiInvitationRegistrationOperationKey = typeof ZoomMeetingsApiInvitationRegistrationOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiInvitationRegistrationOperationPathParamMap {
  "POST /meetings/{meetingId}/batch_registrants": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/invitation": { "meetingId": ZoomMeetingsApiPathParamValue };
  "POST /meetings/{meetingId}/invite_links": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/registrants": { "meetingId": ZoomMeetingsApiPathParamValue };
  "POST /meetings/{meetingId}/registrants": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/registrants/questions": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PATCH /meetings/{meetingId}/registrants/questions": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PUT /meetings/{meetingId}/registrants/status": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/registrants/{registrantId}": { "meetingId": ZoomMeetingsApiPathParamValue; "registrantId": ZoomMeetingsApiPathParamValue };
  "DELETE /meetings/{meetingId}/registrants/{registrantId}": { "meetingId": ZoomMeetingsApiPathParamValue; "registrantId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiInvitationRegistrationOperationRequestMap {
  "POST /meetings/{meetingId}/batch_registrants": ZoomMeetingsApiOperationInput<"POST /meetings/{meetingId}/batch_registrants">;
  "GET /meetings/{meetingId}/invitation": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/invitation">;
  "POST /meetings/{meetingId}/invite_links": ZoomMeetingsApiOperationInput<"POST /meetings/{meetingId}/invite_links">;
  "GET /meetings/{meetingId}/registrants": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/registrants">;
  "POST /meetings/{meetingId}/registrants": ZoomMeetingsApiOperationInput<"POST /meetings/{meetingId}/registrants">;
  "GET /meetings/{meetingId}/registrants/questions": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/registrants/questions">;
  "PATCH /meetings/{meetingId}/registrants/questions": ZoomMeetingsApiOperationInput<"PATCH /meetings/{meetingId}/registrants/questions">;
  "PUT /meetings/{meetingId}/registrants/status": ZoomMeetingsApiOperationInput<"PUT /meetings/{meetingId}/registrants/status">;
  "GET /meetings/{meetingId}/registrants/{registrantId}": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/registrants/{registrantId}">;
  "DELETE /meetings/{meetingId}/registrants/{registrantId}": ZoomMeetingsApiOperationInput<"DELETE /meetings/{meetingId}/registrants/{registrantId}">;
}

export interface ZoomMeetingsApiInvitationRegistrationGeneratedClient {
  AddBatchRegistrants(...args: ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/batch_registrants">): Promise<ZoomMeetingsApiOperationResponseMap["POST /meetings/{meetingId}/batch_registrants"]>;
  MeetingInvitation(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/invitation">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/invitation"]>;
  MeetingInviteLinksCreate(...args: ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/invite_links">): Promise<ZoomMeetingsApiOperationResponseMap["POST /meetings/{meetingId}/invite_links"]>;
  MeetingRegistrants(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/registrants">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/registrants"]>;
  MeetingRegistrantCreate(...args: ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/registrants">): Promise<ZoomMeetingsApiOperationResponseMap["POST /meetings/{meetingId}/registrants"]>;
  MeetingRegistrantsQuestionsGet(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/registrants/questions">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/registrants/questions"]>;
  MeetingRegistrantQuestionUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/registrants/questions">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /meetings/{meetingId}/registrants/questions"]>;
  MeetingRegistrantStatus(...args: ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/registrants/status">): Promise<ZoomMeetingsApiOperationResponseMap["PUT /meetings/{meetingId}/registrants/status"]>;
  MeetingRegistrantGet(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/registrants/{registrantId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/registrants/{registrantId}"]>;
  Meetingregistrantdelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/registrants/{registrantId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /meetings/{meetingId}/registrants/{registrantId}"]>;
}

export const ZoomMeetingsApiInvitationRegistrationGeneratedFunctionNames = [
  "AddBatchRegistrants",
  "MeetingInvitation",
  "MeetingInviteLinksCreate",
  "MeetingRegistrants",
  "MeetingRegistrantCreate",
  "MeetingRegistrantsQuestionsGet",
  "MeetingRegistrantQuestionUpdate",
  "MeetingRegistrantStatus",
  "MeetingRegistrantGet",
  "Meetingregistrantdelete"
] as const satisfies readonly (keyof ZoomMeetingsApiInvitationRegistrationGeneratedClient)[];

export function createZoomMeetingsApiInvitationRegistrationGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiInvitationRegistrationGeneratedClient {
  return {
    AddBatchRegistrants: (...args) => callOperation("POST /meetings/{meetingId}/batch_registrants", ...(args as ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/batch_registrants">)),
    MeetingInvitation: (...args) => callOperation("GET /meetings/{meetingId}/invitation", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/invitation">)),
    MeetingInviteLinksCreate: (...args) => callOperation("POST /meetings/{meetingId}/invite_links", ...(args as ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/invite_links">)),
    MeetingRegistrants: (...args) => callOperation("GET /meetings/{meetingId}/registrants", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/registrants">)),
    MeetingRegistrantCreate: (...args) => callOperation("POST /meetings/{meetingId}/registrants", ...(args as ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/registrants">)),
    MeetingRegistrantsQuestionsGet: (...args) => callOperation("GET /meetings/{meetingId}/registrants/questions", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/registrants/questions">)),
    MeetingRegistrantQuestionUpdate: (...args) => callOperation("PATCH /meetings/{meetingId}/registrants/questions", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/registrants/questions">)),
    MeetingRegistrantStatus: (...args) => callOperation("PUT /meetings/{meetingId}/registrants/status", ...(args as ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/registrants/status">)),
    MeetingRegistrantGet: (...args) => callOperation("GET /meetings/{meetingId}/registrants/{registrantId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/registrants/{registrantId}">)),
    Meetingregistrantdelete: (...args) => callOperation("DELETE /meetings/{meetingId}/registrants/{registrantId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/registrants/{registrantId}">)),
  };
}
