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
export const ZoomMeetingsApiReportsOperationKeys = [
  "GET /report/activities",
  "GET /report/billing",
  "GET /report/billing/invoices",
  "GET /report/cloud_recording",
  "GET /report/daily",
  "GET /report/disclaimer",
  "GET /report/history_meetings",
  "GET /report/meeting_activities",
  "GET /report/meetings/{meetingId}",
  "GET /report/meetings/{meetingId}/participants",
  "GET /report/meetings/{meetingId}/polls",
  "GET /report/meetings/{meetingId}/qa",
  "GET /report/meetings/{meetingId}/survey",
  "GET /report/operationlogs",
  "GET /report/remote_support",
  "GET /report/telephone",
  "GET /report/upcoming_events",
  "GET /report/users",
  "GET /report/users/{userId}/meetings",
  "GET /report/webinars/{webinarId}",
  "GET /report/webinars/{webinarId}/participants",
  "GET /report/webinars/{webinarId}/polls",
  "GET /report/webinars/{webinarId}/qa",
  "GET /report/webinars/{webinarId}/survey"
] as const;
export type ZoomMeetingsApiReportsOperationKey = typeof ZoomMeetingsApiReportsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiReportsOperationPathParamMap {
  "GET /report/activities": {};
  "GET /report/billing": {};
  "GET /report/billing/invoices": {};
  "GET /report/cloud_recording": {};
  "GET /report/daily": {};
  "GET /report/disclaimer": {};
  "GET /report/history_meetings": {};
  "GET /report/meeting_activities": {};
  "GET /report/meetings/{meetingId}": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /report/meetings/{meetingId}/participants": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /report/meetings/{meetingId}/polls": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /report/meetings/{meetingId}/qa": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /report/meetings/{meetingId}/survey": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /report/operationlogs": {};
  "GET /report/remote_support": {};
  "GET /report/telephone": {};
  "GET /report/upcoming_events": {};
  "GET /report/users": {};
  "GET /report/users/{userId}/meetings": { "userId": ZoomMeetingsApiPathParamValue };
  "GET /report/webinars/{webinarId}": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /report/webinars/{webinarId}/participants": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /report/webinars/{webinarId}/polls": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /report/webinars/{webinarId}/qa": { "webinarId": ZoomMeetingsApiPathParamValue };
  "GET /report/webinars/{webinarId}/survey": { "webinarId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiReportsOperationRequestMap {
  "GET /report/activities": ZoomMeetingsApiOperationInput<"GET /report/activities">;
  "GET /report/billing": ZoomMeetingsApiOperationInput<"GET /report/billing">;
  "GET /report/billing/invoices": ZoomMeetingsApiOperationInput<"GET /report/billing/invoices">;
  "GET /report/cloud_recording": ZoomMeetingsApiOperationInput<"GET /report/cloud_recording">;
  "GET /report/daily": ZoomMeetingsApiOperationInput<"GET /report/daily">;
  "GET /report/disclaimer": ZoomMeetingsApiOperationInput<"GET /report/disclaimer">;
  "GET /report/history_meetings": ZoomMeetingsApiOperationInput<"GET /report/history_meetings">;
  "GET /report/meeting_activities": ZoomMeetingsApiOperationInput<"GET /report/meeting_activities">;
  "GET /report/meetings/{meetingId}": ZoomMeetingsApiOperationInput<"GET /report/meetings/{meetingId}">;
  "GET /report/meetings/{meetingId}/participants": ZoomMeetingsApiOperationInput<"GET /report/meetings/{meetingId}/participants">;
  "GET /report/meetings/{meetingId}/polls": ZoomMeetingsApiOperationInput<"GET /report/meetings/{meetingId}/polls">;
  "GET /report/meetings/{meetingId}/qa": ZoomMeetingsApiOperationInput<"GET /report/meetings/{meetingId}/qa">;
  "GET /report/meetings/{meetingId}/survey": ZoomMeetingsApiOperationInput<"GET /report/meetings/{meetingId}/survey">;
  "GET /report/operationlogs": ZoomMeetingsApiOperationInput<"GET /report/operationlogs">;
  "GET /report/remote_support": ZoomMeetingsApiOperationInput<"GET /report/remote_support">;
  "GET /report/telephone": ZoomMeetingsApiOperationInput<"GET /report/telephone">;
  "GET /report/upcoming_events": ZoomMeetingsApiOperationInput<"GET /report/upcoming_events">;
  "GET /report/users": ZoomMeetingsApiOperationInput<"GET /report/users">;
  "GET /report/users/{userId}/meetings": ZoomMeetingsApiOperationInput<"GET /report/users/{userId}/meetings">;
  "GET /report/webinars/{webinarId}": ZoomMeetingsApiOperationInput<"GET /report/webinars/{webinarId}">;
  "GET /report/webinars/{webinarId}/participants": ZoomMeetingsApiOperationInput<"GET /report/webinars/{webinarId}/participants">;
  "GET /report/webinars/{webinarId}/polls": ZoomMeetingsApiOperationInput<"GET /report/webinars/{webinarId}/polls">;
  "GET /report/webinars/{webinarId}/qa": ZoomMeetingsApiOperationInput<"GET /report/webinars/{webinarId}/qa">;
  "GET /report/webinars/{webinarId}/survey": ZoomMeetingsApiOperationInput<"GET /report/webinars/{webinarId}/survey">;
}

export interface ZoomMeetingsApiReportsGeneratedClient {
  ReportSignInSignOutActivities(...args: ZoomMeetingsApiOperationArgs<"GET /report/activities">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/activities"]>;
  GetBillingReport(...args: ZoomMeetingsApiOperationArgs<"GET /report/billing">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/billing"]>;
  GetBillingInvoicesReports(...args: ZoomMeetingsApiOperationArgs<"GET /report/billing/invoices">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/billing/invoices"]>;
  ReportCloudRecording(...args: ZoomMeetingsApiOperationArgs<"GET /report/cloud_recording">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/cloud_recording"]>;
  ReportDaily(...args: ZoomMeetingsApiOperationArgs<"GET /report/daily">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/daily"]>;
  Getdisclaimerreport(...args: ZoomMeetingsApiOperationArgs<"GET /report/disclaimer">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/disclaimer"]>;
  Gethistorymeetingandwebinarlist(...args: ZoomMeetingsApiOperationArgs<"GET /report/history_meetings">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/history_meetings"]>;
  ReportMeetingactivitylogs(...args: ZoomMeetingsApiOperationArgs<"GET /report/meeting_activities">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/meeting_activities"]>;
  ReportMeetingDetails(...args: ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/meetings/{meetingId}"]>;
  ReportMeetingParticipants(...args: ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}/participants">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/meetings/{meetingId}/participants"]>;
  ReportMeetingPolls(...args: ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}/polls">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/meetings/{meetingId}/polls"]>;
  ReportMeetingQA(...args: ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}/qa">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/meetings/{meetingId}/qa"]>;
  ReportMeetingSurvey(...args: ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}/survey">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/meetings/{meetingId}/survey"]>;
  ReportOperationLogs(...args: ZoomMeetingsApiOperationArgs<"GET /report/operationlogs">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/operationlogs"]>;
  Getremotesupportreport(...args: ZoomMeetingsApiOperationArgs<"GET /report/remote_support">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/remote_support"]>;
  ReportTelephone(...args: ZoomMeetingsApiOperationArgs<"GET /report/telephone">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/telephone"]>;
  ReportUpcomingEvents(...args: ZoomMeetingsApiOperationArgs<"GET /report/upcoming_events">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/upcoming_events"]>;
  ReportUsers(...args: ZoomMeetingsApiOperationArgs<"GET /report/users">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/users"]>;
  ReportMeetings(...args: ZoomMeetingsApiOperationArgs<"GET /report/users/{userId}/meetings">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/users/{userId}/meetings"]>;
  ReportWebinarDetails(...args: ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/webinars/{webinarId}"]>;
  ReportWebinarParticipants(...args: ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}/participants">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/webinars/{webinarId}/participants"]>;
  ReportWebinarPolls(...args: ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}/polls">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/webinars/{webinarId}/polls"]>;
  ReportWebinarQA(...args: ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}/qa">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/webinars/{webinarId}/qa"]>;
  ReportWebinarSurvey(...args: ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}/survey">): Promise<ZoomMeetingsApiOperationResponseMap["GET /report/webinars/{webinarId}/survey"]>;
}

export const ZoomMeetingsApiReportsGeneratedFunctionNames = [
  "ReportSignInSignOutActivities",
  "GetBillingReport",
  "GetBillingInvoicesReports",
  "ReportCloudRecording",
  "ReportDaily",
  "Getdisclaimerreport",
  "Gethistorymeetingandwebinarlist",
  "ReportMeetingactivitylogs",
  "ReportMeetingDetails",
  "ReportMeetingParticipants",
  "ReportMeetingPolls",
  "ReportMeetingQA",
  "ReportMeetingSurvey",
  "ReportOperationLogs",
  "Getremotesupportreport",
  "ReportTelephone",
  "ReportUpcomingEvents",
  "ReportUsers",
  "ReportMeetings",
  "ReportWebinarDetails",
  "ReportWebinarParticipants",
  "ReportWebinarPolls",
  "ReportWebinarQA",
  "ReportWebinarSurvey"
] as const satisfies readonly (keyof ZoomMeetingsApiReportsGeneratedClient)[];

export function createZoomMeetingsApiReportsGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiReportsGeneratedClient {
  return {
    ReportSignInSignOutActivities: (...args) => callOperation("GET /report/activities", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/activities">)),
    GetBillingReport: (...args) => callOperation("GET /report/billing", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/billing">)),
    GetBillingInvoicesReports: (...args) => callOperation("GET /report/billing/invoices", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/billing/invoices">)),
    ReportCloudRecording: (...args) => callOperation("GET /report/cloud_recording", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/cloud_recording">)),
    ReportDaily: (...args) => callOperation("GET /report/daily", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/daily">)),
    Getdisclaimerreport: (...args) => callOperation("GET /report/disclaimer", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/disclaimer">)),
    Gethistorymeetingandwebinarlist: (...args) => callOperation("GET /report/history_meetings", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/history_meetings">)),
    ReportMeetingactivitylogs: (...args) => callOperation("GET /report/meeting_activities", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/meeting_activities">)),
    ReportMeetingDetails: (...args) => callOperation("GET /report/meetings/{meetingId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}">)),
    ReportMeetingParticipants: (...args) => callOperation("GET /report/meetings/{meetingId}/participants", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}/participants">)),
    ReportMeetingPolls: (...args) => callOperation("GET /report/meetings/{meetingId}/polls", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}/polls">)),
    ReportMeetingQA: (...args) => callOperation("GET /report/meetings/{meetingId}/qa", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}/qa">)),
    ReportMeetingSurvey: (...args) => callOperation("GET /report/meetings/{meetingId}/survey", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/meetings/{meetingId}/survey">)),
    ReportOperationLogs: (...args) => callOperation("GET /report/operationlogs", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/operationlogs">)),
    Getremotesupportreport: (...args) => callOperation("GET /report/remote_support", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/remote_support">)),
    ReportTelephone: (...args) => callOperation("GET /report/telephone", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/telephone">)),
    ReportUpcomingEvents: (...args) => callOperation("GET /report/upcoming_events", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/upcoming_events">)),
    ReportUsers: (...args) => callOperation("GET /report/users", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/users">)),
    ReportMeetings: (...args) => callOperation("GET /report/users/{userId}/meetings", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/users/{userId}/meetings">)),
    ReportWebinarDetails: (...args) => callOperation("GET /report/webinars/{webinarId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}">)),
    ReportWebinarParticipants: (...args) => callOperation("GET /report/webinars/{webinarId}/participants", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}/participants">)),
    ReportWebinarPolls: (...args) => callOperation("GET /report/webinars/{webinarId}/polls", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}/polls">)),
    ReportWebinarQA: (...args) => callOperation("GET /report/webinars/{webinarId}/qa", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}/qa">)),
    ReportWebinarSurvey: (...args) => callOperation("GET /report/webinars/{webinarId}/survey", ...(args as ZoomMeetingsApiOperationArgs<"GET /report/webinars/{webinarId}/survey">)),
  };
}
