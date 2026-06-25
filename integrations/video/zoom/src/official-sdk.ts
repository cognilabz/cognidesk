import { IntegrationError, normalizeIntegrationError } from "@cognidesk/integration-kit";
import { MeetingsEndpoints, MeetingsS2SAuthClient } from "@zoom/rivet/meetings";
import { UsersEndpoints, UsersS2SAuthClient } from "@zoom/rivet/users";
import type { ZoomMeetingsGeneratedOperationCaller } from "./meetings-api-client.generated.js";
import {
  ZOOM_MEETINGS_API_OPERATION_BY_ID,
  ZOOM_MEETINGS_API_OPERATION_BY_UID,
  type ZoomMeetingsApiOperation,
} from "./meetings-api-operations.generated.js";
import type {
  ZoomOperationRequestInput,
  ZoomVideoClientOptions,
  ZoomVideoProviderClient,
  ZoomVideoProviderQuery,
} from "./contracts.js";

const ZOOM_RIVET_USER_AGENT = "cognidesk-integration-video-zoom";

export const ZOOM_RIVET_SDK_PACKAGE_NAME = "@zoom/rivet";
export const ZOOM_RIVET_MEETINGS_REST_EXCEPTION_OPERATION_UIDS = [
  "GET /report/disclaimer",
  "GET /report/remote_support",
] as const;

const ZOOM_RIVET_MEETINGS_OPERATION_DISPATCH = {
  "GET /archive_files": ["archiving", "listArchivedFiles"],
  "GET /archive_files/statistics": ["archiving", "getArchivedFileStatistics"],
  "PATCH /archive_files/{fileId}": ["archiving", "updateArchivedFilesAutoDeleteStatus"],
  "GET /meetings/{meetingId}/jointoken/local_archiving": ["meetings", "getMeetingsArchiveTokenForLocalArchiving"],
  "GET /past_meetings/{meetingUUID}/archive_files": ["archiving", "getMeetingsArchivedFiles"],
  "DELETE /past_meetings/{meetingUUID}/archive_files": ["archiving", "deleteMeetingsArchivedFiles"],
  "GET /meetings/{meetingId}/recordings": ["cloudRecording", "getMeetingRecordings"],
  "DELETE /meetings/{meetingId}/recordings": ["cloudRecording", "deleteMeetingOrWebinarRecordings"],
  "GET /meetings/{meetingId}/recordings/analytics_details": ["cloudRecording", "getMeetingOrWebinarRecordingsAnalyticsDetails"],
  "GET /meetings/{meetingId}/recordings/analytics_summary": ["cloudRecording", "getMeetingOrWebinarRecordingsAnalyticsSummary"],
  "GET /meetings/{meetingId}/recordings/registrants": ["cloudRecording", "listRecordingRegistrants"],
  "POST /meetings/{meetingId}/recordings/registrants": ["cloudRecording", "createRecordingRegistrant"],
  "GET /meetings/{meetingId}/recordings/registrants/questions": ["cloudRecording", "getRegistrationQuestions"],
  "PATCH /meetings/{meetingId}/recordings/registrants/questions": ["cloudRecording", "updateRegistrationQuestions"],
  "PUT /meetings/{meetingId}/recordings/registrants/status": ["cloudRecording", "updateRegistrantsStatus"],
  "GET /meetings/{meetingId}/recordings/settings": ["cloudRecording", "getMeetingRecordingSettings"],
  "PATCH /meetings/{meetingId}/recordings/settings": ["cloudRecording", "updateMeetingRecordingSettings"],
  "DELETE /meetings/{meetingId}/recordings/{recordingId}": ["cloudRecording", "deleteRecordingFileForMeetingOrWebinar"],
  "PUT /meetings/{meetingId}/recordings/{recordingId}/status": ["cloudRecording", "recoverSingleRecording"],
  "GET /meetings/{meetingId}/transcript": ["cloudRecording", "getMeetingTranscript"],
  "DELETE /meetings/{meetingId}/transcript": ["cloudRecording", "deleteMeetingOrWebinarTranscript"],
  "PUT /meetings/{meetingUUID}/recordings/status": ["cloudRecording", "recoverMeetingRecordings"],
  "GET /users/{userId}/recordings": ["cloudRecording", "listAllRecordings"],
  "GET /devices": ["devices", "listDevices"],
  "POST /devices": ["devices", "addNewDevice"],
  "GET /devices/groups": ["devices", "getZDMGroupInfo"],
  "POST /devices/zpa/assignment": ["devices", "assignDeviceToUserOrCommonarea"],
  "GET /devices/zpa/settings": ["devices", "getZoomPhoneApplianceSettingsByUserID"],
  "POST /devices/zpa/upgrade": ["devices", "upgradeZPAFirmwareOrApp"],
  "DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}": ["devices", "deleteZPADeviceByVendorAndMacAddress"],
  "GET /devices/zpa/zdm_groups/{zdmGroupId}/versions": ["devices", "getZPAVersionInfo"],
  "GET /devices/{deviceId}": ["devices", "getDeviceDetail"],
  "DELETE /devices/{deviceId}": ["devices", "deleteDevice"],
  "PATCH /devices/{deviceId}": ["devices", "changeDevice"],
  "PATCH /devices/{deviceId}/assign_group": ["devices", "assignDeviceToGroup"],
  "PATCH /devices/{deviceId}/assignment": ["devices", "changeDeviceAssociation"],
  "GET /h323/devices": ["h323Devices", "listHSIPDevices"],
  "POST /h323/devices": ["h323Devices", "createHSIPDevice"],
  "DELETE /h323/devices/{deviceId}": ["h323Devices", "deleteHSIPDevice"],
  "PATCH /h323/devices/{deviceId}": ["h323Devices", "updateHSIPDevice"],
  "POST /meetings/{meetingId}/open_apps": ["meetings", "addMeetingApp"],
  "DELETE /meetings/{meetingId}/open_apps": ["meetings", "deleteMeetingApp"],
  "DELETE /live_meetings/{meetingId}/chat/messages/{messageId}": ["meetings", "deleteLiveMeetingMessage"],
  "PATCH /live_meetings/{meetingId}/chat/messages/{messageId}": ["meetings", "updateLiveMeetingMessage"],
  "PATCH /live_meetings/{meetingId}/events": ["meetings", "useInMeetingControls"],
  "GET /meetings/{meetingId}/jointoken/local_recording": ["meetings", "getMeetingsJoinTokenForLocalRecording"],
  "GET /meetings/{meetingId}/token": ["meetings", "getMeetingsToken"],
  "POST /meetings/{meetingId}/batch_registrants": ["meetings", "performBatchRegistration"],
  "GET /meetings/{meetingId}/invitation": ["meetings", "getMeetingInvitation"],
  "POST /meetings/{meetingId}/invite_links": ["meetings", "createMeetingsInviteLinks"],
  "GET /meetings/{meetingId}/registrants": ["meetings", "listMeetingRegistrants"],
  "POST /meetings/{meetingId}/registrants": ["meetings", "addMeetingRegistrant"],
  "GET /meetings/{meetingId}/registrants/questions": ["meetings", "listRegistrationQuestions"],
  "PATCH /meetings/{meetingId}/registrants/questions": ["meetings", "updateRegistrationQuestions"],
  "PUT /meetings/{meetingId}/registrants/status": ["meetings", "updateRegistrantsStatus"],
  "GET /meetings/{meetingId}/registrants/{registrantId}": ["meetings", "getMeetingRegistrant"],
  "DELETE /meetings/{meetingId}/registrants/{registrantId}": ["meetings", "deleteMeetingRegistrant"],
  "GET /meetings/{meetingId}/jointoken/live_streaming": ["meetings", "getMeetingsJoinTokenForLiveStreaming"],
  "GET /meetings/{meetingId}/livestream": ["meetings", "getLivestreamDetails"],
  "PATCH /meetings/{meetingId}/livestream": ["meetings", "updateLivestream"],
  "PATCH /meetings/{meetingId}/livestream/status": ["meetings", "updateLivestreamStatus"],
  "PATCH /live_meetings/{meetingId}/rtms_app/status": ["meetings", "updateParticipantRealTimeMediaStreamsRTMSAppStatus"],
  "GET /meetings/{meetingId}": ["meetings", "getMeeting"],
  "DELETE /meetings/{meetingId}": ["meetings", "deleteMeeting"],
  "PATCH /meetings/{meetingId}": ["meetings", "updateMeeting"],
  "POST /meetings/{meetingId}/sip_dialing": ["meetings", "getMeetingSIPURIWithPasscode"],
  "PUT /meetings/{meetingId}/status": ["meetings", "updateMeetingStatus"],
  "GET /past_meetings/{meetingId}": ["meetings", "getPastMeetingDetails"],
  "GET /past_meetings/{meetingId}/instances": ["meetings", "listPastMeetingInstances"],
  "GET /past_meetings/{meetingId}/participants": ["meetings", "getPastMeetingParticipants"],
  "GET /past_meetings/{meetingId}/qa": ["meetings", "listPastMeetingsQA"],
  "GET /users/{userId}/meetings": ["meetings", "listMeetings"],
  "POST /users/{userId}/meetings": ["meetings", "createMeeting"],
  "GET /users/{userId}/upcoming_meetings": ["meetings", "listUpcomingMeetings"],
  "GET /users/{userId}/pac": ["pAC", "listUsersPACAccounts"],
  "POST /meetings/{meetingId}/batch_polls": ["meetings", "performBatchPollCreation"],
  "GET /meetings/{meetingId}/polls": ["meetings", "listMeetingPolls"],
  "POST /meetings/{meetingId}/polls": ["meetings", "createMeetingPoll"],
  "GET /meetings/{meetingId}/polls/{pollId}": ["meetings", "getMeetingPoll"],
  "PUT /meetings/{meetingId}/polls/{pollId}": ["meetings", "updateMeetingPoll"],
  "DELETE /meetings/{meetingId}/polls/{pollId}": ["meetings", "deleteMeetingPoll"],
  "GET /past_meetings/{meetingId}/polls": ["meetings", "listPastMeetingsPollResults"],
  "GET /report/activities": ["reports", "getSignInSignOutActivityReport"],
  "GET /report/billing": ["reports", "getBillingReports"],
  "GET /report/billing/invoices": ["reports", "getBillingInvoiceReports"],
  "GET /report/cloud_recording": ["reports", "getCloudRecordingUsageReport"],
  "GET /report/daily": ["reports", "getDailyUsageReport"],
  "GET /report/history_meetings": ["reports", "getHistoryMeetingAndWebinarList"],
  "GET /report/meeting_activities": ["reports", "getMeetingActivitiesReport"],
  "GET /report/meetings/{meetingId}": ["reports", "getMeetingDetailReports"],
  "GET /report/meetings/{meetingId}/participants": ["reports", "getMeetingParticipantReports"],
  "GET /report/meetings/{meetingId}/polls": ["reports", "getMeetingPollReports"],
  "GET /report/meetings/{meetingId}/qa": ["reports", "getMeetingQAReport"],
  "GET /report/meetings/{meetingId}/survey": ["reports", "getMeetingSurveyReport"],
  "GET /report/operationlogs": ["reports", "getOperationLogsReport"],
  "GET /report/telephone": ["reports", "getTelephoneReports"],
  "GET /report/upcoming_events": ["reports", "getUpcomingEventsReport"],
  "GET /report/users": ["reports", "getActiveOrInactiveHostReports"],
  "GET /report/users/{userId}/meetings": ["reports", "getMeetingReports"],
  "GET /report/webinars/{webinarId}": ["reports", "getWebinarDetailReports"],
  "GET /report/webinars/{webinarId}/participants": ["reports", "getWebinarParticipantReports"],
  "GET /report/webinars/{webinarId}/polls": ["reports", "getWebinarPollReports"],
  "GET /report/webinars/{webinarId}/qa": ["reports", "getWebinarQAReport"],
  "GET /report/webinars/{webinarId}/survey": ["reports", "getWebinarSurveyReport"],
  "GET /sip_phones/phones": ["sIPPhone", "listSIPPhones"],
  "POST /sip_phones/phones": ["sIPPhone", "enableSIPPhone"],
  "DELETE /sip_phones/phones/{phoneId}": ["sIPPhone", "deleteSIPPhone"],
  "PATCH /sip_phones/phones/{phoneId}": ["sIPPhone", "updateSIPPhone"],
  "GET /meetings/meeting_summaries": ["meetings", "listAccountsMeetingOrWebinarSummaries"],
  "GET /meetings/{meetingId}/meeting_summary": ["meetings", "getMeetingOrWebinarSummary"],
  "DELETE /meetings/{meetingId}/meeting_summary": ["meetings", "deleteMeetingOrWebinarSummary"],
  "GET /meetings/{meetingId}/survey": ["meetings", "getMeetingSurvey"],
  "DELETE /meetings/{meetingId}/survey": ["meetings", "deleteMeetingSurvey"],
  "PATCH /meetings/{meetingId}/survey": ["meetings", "updateMeetingSurvey"],
  "GET /tsp": ["tSP", "getAccountsTSPInformation"],
  "PATCH /tsp": ["tSP", "updateAccountsTSPInformation"],
  "GET /users/{userId}/tsp": ["tSP", "listUsersTSPAccounts"],
  "POST /users/{userId}/tsp": ["tSP", "addUsersTSPAccount"],
  "PATCH /users/{userId}/tsp/settings": ["tSP", "setGlobalDialInURLForTSPUser"],
  "GET /users/{userId}/tsp/{tspId}": ["tSP", "getUsersTSPAccount"],
  "DELETE /users/{userId}/tsp/{tspId}": ["tSP", "deleteUsersTSPAccount"],
  "PATCH /users/{userId}/tsp/{tspId}": ["tSP", "updateTSPAccount"],
  "GET /users/{userId}/meeting_templates": ["meetings", "listMeetingTemplates"],
  "POST /users/{userId}/meeting_templates": ["meetings", "createMeetingTemplateFromExistingMeeting"],
  "GET /tracking_fields": ["trackingField", "listTrackingFields"],
  "POST /tracking_fields": ["trackingField", "createTrackingField"],
  "GET /tracking_fields/{fieldId}": ["trackingField", "getTrackingField"],
  "DELETE /tracking_fields/{fieldId}": ["trackingField", "deleteTrackingField"],
  "PATCH /tracking_fields/{fieldId}": ["trackingField", "updateTrackingField"],
  "DELETE /live_webinars/{webinarId}/chat/messages/{messageId}": ["webinars", "deleteLiveWebinarMessage"],
  "GET /past_webinars/{webinarId}/absentees": ["webinars", "getWebinarAbsentees"],
  "GET /past_webinars/{webinarId}/instances": ["webinars", "listPastWebinarInstances"],
  "GET /past_webinars/{webinarId}/participants": ["webinars", "listWebinarParticipants"],
  "GET /past_webinars/{webinarId}/polls": ["webinars", "listPastWebinarPollResults"],
  "GET /past_webinars/{webinarId}/qa": ["webinars", "listQAsOfPastWebinar"],
  "GET /users/{userId}/webinar_templates": ["webinars", "listWebinarTemplates"],
  "POST /users/{userId}/webinar_templates": ["webinars", "createWebinarTemplate"],
  "GET /users/{userId}/webinars": ["webinars", "listWebinars"],
  "POST /users/{userId}/webinars": ["webinars", "createWebinar"],
  "GET /webinars/{webinarId}": ["webinars", "getWebinar"],
  "DELETE /webinars/{webinarId}": ["webinars", "deleteWebinar"],
  "PATCH /webinars/{webinarId}": ["webinars", "updateWebinar"],
  "POST /webinars/{webinarId}/batch_registrants": ["webinars", "performBatchRegistration"],
  "GET /webinars/{webinarId}/branding": ["webinars", "getWebinarsSessionBranding"],
  "POST /webinars/{webinarId}/branding/name_tags": ["webinars", "createWebinarsBrandingNameTag"],
  "DELETE /webinars/{webinarId}/branding/name_tags": ["webinars", "deleteWebinarsBrandingNameTag"],
  "PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}": ["webinars", "updateWebinarsBrandingNameTag"],
  "POST /webinars/{webinarId}/branding/virtual_backgrounds": ["webinars", "uploadWebinarsBrandingVirtualBackground"],
  "DELETE /webinars/{webinarId}/branding/virtual_backgrounds": ["webinars", "deleteWebinarsBrandingVirtualBackgrounds"],
  "PATCH /webinars/{webinarId}/branding/virtual_backgrounds": ["webinars", "setWebinarsDefaultBrandingVirtualBackground"],
  "POST /webinars/{webinarId}/branding/wallpaper": ["webinars", "uploadWebinarsBrandingWallpaper"],
  "DELETE /webinars/{webinarId}/branding/wallpaper": ["webinars", "deleteWebinarsBrandingWallpaper"],
  "POST /webinars/{webinarId}/invite_links": ["webinars", "createWebinarsInviteLinks"],
  "GET /webinars/{webinarId}/jointoken/live_streaming": ["webinars", "getWebinarsJoinTokenForLiveStreaming"],
  "GET /webinars/{webinarId}/jointoken/local_archiving": ["webinars", "getWebinarsArchiveTokenForLocalArchiving"],
  "GET /webinars/{webinarId}/jointoken/local_recording": ["webinars", "getWebinarsJoinTokenForLocalRecording"],
  "GET /webinars/{webinarId}/livestream": ["webinars", "getLiveStreamDetails"],
  "PATCH /webinars/{webinarId}/livestream": ["webinars", "updateLiveStream"],
  "PATCH /webinars/{webinarId}/livestream/status": ["webinars", "updateLiveStreamStatus"],
  "GET /webinars/{webinarId}/panelists": ["webinars", "listPanelists"],
  "POST /webinars/{webinarId}/panelists": ["webinars", "addPanelists"],
  "DELETE /webinars/{webinarId}/panelists": ["webinars", "removeAllPanelists"],
  "DELETE /webinars/{webinarId}/panelists/{panelistId}": ["webinars", "removePanelist"],
  "GET /webinars/{webinarId}/polls": ["webinars", "listWebinarsPolls"],
  "POST /webinars/{webinarId}/polls": ["webinars", "createWebinarsPoll"],
  "GET /webinars/{webinarId}/polls/{pollId}": ["webinars", "getWebinarPoll"],
  "PUT /webinars/{webinarId}/polls/{pollId}": ["webinars", "updateWebinarPoll"],
  "DELETE /webinars/{webinarId}/polls/{pollId}": ["webinars", "deleteWebinarPoll"],
  "GET /webinars/{webinarId}/registrants": ["webinars", "listWebinarRegistrants"],
  "POST /webinars/{webinarId}/registrants": ["webinars", "addWebinarRegistrant"],
  "GET /webinars/{webinarId}/registrants/questions": ["webinars", "listRegistrationQuestions"],
  "PATCH /webinars/{webinarId}/registrants/questions": ["webinars", "updateRegistrationQuestions"],
  "PUT /webinars/{webinarId}/registrants/status": ["webinars", "updateRegistrantsStatus"],
  "GET /webinars/{webinarId}/registrants/{registrantId}": ["webinars", "getWebinarRegistrant"],
  "DELETE /webinars/{webinarId}/registrants/{registrantId}": ["webinars", "deleteWebinarRegistrant"],
  "POST /webinars/{webinarId}/sip_dialing": ["webinars", "getWebinarSIPURIWithPasscode"],
  "PUT /webinars/{webinarId}/status": ["webinars", "updateWebinarStatus"],
  "GET /webinars/{webinarId}/survey": ["webinars", "getWebinarSurvey"],
  "DELETE /webinars/{webinarId}/survey": ["webinars", "deleteWebinarSurvey"],
  "PATCH /webinars/{webinarId}/survey": ["webinars", "updateWebinarSurvey"],
  "GET /webinars/{webinarId}/token": ["webinars", "getWebinarsToken"],
  "GET /webinars/{webinarId}/tracking_sources": ["webinars", "getWebinarTrackingSources"],
} as const satisfies Record<string, readonly [string, string]>;

export const ZOOM_RIVET_MEETINGS_SDK_OPERATION_COUNT = Object.keys(ZOOM_RIVET_MEETINGS_OPERATION_DISPATCH).length;

export interface ZoomOfficialSdkRuntimeOptions extends Omit<ZoomVideoClientOptions, "providerClient"> {
  resolveAccessToken: () => string | Promise<string>;
  restFallback?: (
    operation: ZoomMeetingsApiOperation,
    input: ZoomOperationRequestInput | undefined,
  ) => Promise<unknown>;
}

export interface ZoomOfficialSdkRuntime {
  rawClient: {
    sdkPackage: typeof ZOOM_RIVET_SDK_PACKAGE_NAME;
    meetings: unknown;
    users: unknown;
  };
  requestOperation: ZoomMeetingsGeneratedOperationCaller;
  getCurrentUser: ZoomVideoProviderClient["getCurrentUser"];
}

type ZoomRivetEndpointInput = {
  path?: Record<string, string | number | boolean>;
  query?: ZoomVideoProviderQuery;
  body?: unknown;
};
type ZoomRivetEndpoint = (input: ZoomRivetEndpointInput) => Promise<unknown>;
type ZoomRivetEndpoints = Record<string, Record<string, ZoomRivetEndpoint>>;
type ZoomRivetResponse = { data?: unknown; statusCode?: number; trackingId?: string };

export function hasZoomOfficialSdkCredentials(options: Omit<ZoomVideoClientOptions, "providerClient">) {
  return Boolean(options.accessToken || options.getAccessToken || hasZoomAccountOAuthCredentials(options));
}

export function shouldUseZoomOfficialSdkRuntime(options: Omit<ZoomVideoClientOptions, "providerClient">) {
  return hasZoomOfficialSdkCredentials(options) && !requiresZoomRestTransport(options);
}

export function requiresZoomRestTransport(options: Omit<ZoomVideoClientOptions, "providerClient">) {
  return Boolean(options.fetch || options.signal || options.retry || options.oauthBaseUrl);
}

export function createZoomOfficialSdkRuntime(options: ZoomOfficialSdkRuntimeOptions): ZoomOfficialSdkRuntime {
  const meetings = createZoomRivetMeetingsRuntime(options);
  const users = createZoomRivetUsersRuntime(options);
  const requestOperation = (async (operationUidOrId, ...args) => {
    const operation = resolveZoomMeetingsOperation(String(operationUidOrId));
    const input = args[0] as ZoomOperationRequestInput | undefined;
    validateZoomOperationInput(operation, input);
    return callZoomRivetMeetingsOperation(meetings.endpoints, operation, input, options.restFallback);
  }) as ZoomMeetingsGeneratedOperationCaller;

  return {
    rawClient: {
      sdkPackage: ZOOM_RIVET_SDK_PACKAGE_NAME,
      meetings: meetings.rawClient,
      users: users.rawClient,
    },
    requestOperation,
    async getCurrentUser() {
      try {
        const response = await users.endpoints.users.getUser({
          path: { userId: "me" },
        });
        return unwrapZoomRivetResponse(response) as Awaited<ReturnType<ZoomVideoProviderClient["getCurrentUser"]>>;
      } catch (error) {
        throw normalizeZoomRivetError(error);
      }
    },
  };
}

function createZoomRivetMeetingsRuntime(options: ZoomOfficialSdkRuntimeOptions) {
  if (shouldUseZoomRivetManagedS2SAuth(options)) {
    const rawClient = new MeetingsS2SAuthClient(zoomRivetS2SClientOptions(options));
    return { rawClient, endpoints: rawClient.endpoints as unknown as ZoomRivetEndpoints };
  }
  const endpoints = new MeetingsEndpoints(zoomRivetEndpointOptions(options, createZoomRivetAccessTokenAuth(options)));
  return { rawClient: endpoints, endpoints: endpoints as unknown as ZoomRivetEndpoints };
}

function createZoomRivetUsersRuntime(options: ZoomOfficialSdkRuntimeOptions) {
  if (shouldUseZoomRivetManagedS2SAuth(options)) {
    const rawClient = new UsersS2SAuthClient(zoomRivetS2SClientOptions(options));
    return { rawClient, endpoints: rawClient.endpoints as unknown as { users: { getUser: ZoomRivetEndpoint } } };
  }
  const endpoints = new UsersEndpoints(zoomRivetUserEndpointOptions(options, createZoomRivetAccessTokenAuth(options)));
  return { rawClient: endpoints, endpoints: endpoints as unknown as { users: { getUser: ZoomRivetEndpoint } } };
}

function zoomRivetS2SClientOptions(options: ZoomOfficialSdkRuntimeOptions) {
  return {
    accountId: requireString(options.accountId, "Zoom accountId"),
    clientId: requireString(options.clientId, "Zoom clientId"),
    clientSecret: requireString(options.clientSecret, "Zoom clientSecret"),
    disableReceiver: true,
    ...zoomRivetCommonEndpointOptions(options),
  } as unknown as ConstructorParameters<typeof MeetingsS2SAuthClient>[0] & ConstructorParameters<typeof UsersS2SAuthClient>[0];
}

function zoomRivetEndpointOptions(
  options: ZoomOfficialSdkRuntimeOptions,
  auth: { getToken: () => string | Promise<string> },
) {
  return {
    auth,
    ...zoomRivetCommonEndpointOptions(options),
  } as unknown as ConstructorParameters<typeof MeetingsEndpoints>[0];
}

function zoomRivetUserEndpointOptions(
  options: ZoomOfficialSdkRuntimeOptions,
  auth: { getToken: () => string | Promise<string> },
) {
  return {
    auth,
    ...zoomRivetCommonEndpointOptions(options),
  } as unknown as ConstructorParameters<typeof UsersEndpoints>[0];
}

function zoomRivetCommonEndpointOptions(options: ZoomOfficialSdkRuntimeOptions) {
  return {
    userAgentName: ZOOM_RIVET_USER_AGENT,
    ...(options.baseUrl !== undefined ? { baseUrl: options.baseUrl } : {}),
    ...(options.timeoutMs !== undefined ? { timeout: options.timeoutMs } : {}),
  };
}

function createZoomRivetAccessTokenAuth(options: ZoomOfficialSdkRuntimeOptions) {
  return {
    getToken: options.resolveAccessToken,
  };
}

function shouldUseZoomRivetManagedS2SAuth(options: ZoomOfficialSdkRuntimeOptions) {
  return !options.accessToken && !options.getAccessToken && hasZoomAccountOAuthCredentials(options);
}

function hasZoomAccountOAuthCredentials(options: Omit<ZoomVideoClientOptions, "providerClient">) {
  return Boolean(options.accountId && options.clientId && options.clientSecret);
}

async function callZoomRivetMeetingsOperation(
  endpoints: ZoomRivetEndpoints,
  operation: ZoomMeetingsApiOperation,
  input: ZoomOperationRequestInput | undefined,
  restFallback: ZoomOfficialSdkRuntimeOptions["restFallback"],
) {
  if (hasHeaders(input)) return callRestFallback(operation, input, restFallback, "per-request headers");
  const dispatch = ZOOM_RIVET_MEETINGS_OPERATION_DISPATCH[
    operation.uid as keyof typeof ZOOM_RIVET_MEETINGS_OPERATION_DISPATCH
  ];
  if (!dispatch) return callRestFallback(operation, input, restFallback, "operation is not exposed by Zoom Rivet");

  const [groupName, methodName] = dispatch;
  const group = endpoints[groupName];
  const endpoint = group?.[methodName];
  if (!endpoint) {
    throw new IntegrationError(
      "provider-validation",
      `Zoom Rivet SDK endpoint '${groupName}.${methodName}' is unavailable for operation '${operation.uid}'.`,
      {
        providerPackageId: "video.zoom",
        provider: "zoom",
        details: { sdkPackage: ZOOM_RIVET_SDK_PACKAGE_NAME, operation: operation.uid },
      },
    );
  }
  try {
    return unwrapZoomRivetResponse(await endpoint(toZoomRivetEndpointInput(input)));
  } catch (error) {
    throw normalizeZoomRivetError(error);
  }
}

async function callRestFallback(
  operation: ZoomMeetingsApiOperation,
  input: ZoomOperationRequestInput | undefined,
  restFallback: ZoomOfficialSdkRuntimeOptions["restFallback"],
  reason: string,
) {
  if (restFallback) return restFallback(operation, input);
  throw new IntegrationError(
    "provider-validation",
    `Zoom Rivet SDK cannot execute operation '${operation.uid}' because ${reason}, and no typed REST fallback is configured.`,
    {
      providerPackageId: "video.zoom",
      provider: "zoom",
      details: { sdkPackage: ZOOM_RIVET_SDK_PACKAGE_NAME, operation: operation.uid, reason },
    },
  );
}

function toZoomRivetEndpointInput(input: ZoomOperationRequestInput | undefined): ZoomRivetEndpointInput {
  const endpointInput: ZoomRivetEndpointInput = {};
  const path = stripUndefined(input?.pathParams);
  if (Object.keys(path).length > 0) endpointInput.path = path;
  if (input?.query && Object.keys(input.query).length > 0) endpointInput.query = input.query;
  if (input?.body !== undefined) endpointInput.body = input.body;
  return endpointInput;
}

function resolveZoomMeetingsOperation(operationUidOrId: string) {
  const operation = ZOOM_MEETINGS_API_OPERATION_BY_UID.get(operationUidOrId)
    ?? ZOOM_MEETINGS_API_OPERATION_BY_ID.get(operationUidOrId);
  if (!operation) throw new Error(`Unknown Zoom Meetings API Hub operation '${operationUidOrId}'.`);
  return operation;
}

function validateZoomOperationInput(
  operation: ZoomMeetingsApiOperation,
  input: ZoomOperationRequestInput | undefined,
) {
  if (input !== undefined && !isRecord(input)) throw new Error("Zoom operation input must be an object.");
  validateRecord(input?.pathParams, "pathParams");
  validateRecord(input?.query, "query");
  validateRecord(input?.headers, "headers");
  validateZoomOperationPathParams(operation, input);
}

function validateZoomOperationPathParams(
  operation: ZoomMeetingsApiOperation,
  input: ZoomOperationRequestInput | undefined,
) {
  for (const key of operation.path.matchAll(/\{([^}]+)\}/g)) {
    const parameterName = key[1];
    if (!parameterName) continue;
    const value = input?.pathParams?.[parameterName];
    if (value === undefined || value === null || value === "") {
      throw new Error(`Missing Zoom path parameter '${parameterName}'.`);
    }
  }
}

function validateRecord(value: unknown, label: string) {
  if (value !== undefined && !isRecord(value)) throw new Error(`Zoom operation ${label} must be an object.`);
}

function stripUndefined(
  input: Record<string, string | number | boolean | undefined> | undefined,
): Record<string, string | number | boolean> {
  return Object.fromEntries(
    Object.entries(input ?? {}).filter((entry): entry is [string, string | number | boolean] => entry[1] !== undefined),
  );
}

function hasHeaders(input: ZoomOperationRequestInput | undefined) {
  return Boolean(input?.headers && Object.keys(input.headers).length > 0);
}

function unwrapZoomRivetResponse(response: unknown) {
  if (!isRecord(response)) return response ?? {};
  if (!("data" in response)) return response;
  return (response as ZoomRivetResponse).data ?? {};
}

function normalizeZoomRivetError(error: unknown) {
  return normalizeIntegrationError(error, {
    providerPackageId: "video.zoom",
    provider: "zoom",
    details: { sdkPackage: ZOOM_RIVET_SDK_PACKAGE_NAME },
  });
}

function requireString(value: string | undefined, label: string) {
  if (!value) throw new Error(`${label} is required for Zoom Rivet server-to-server OAuth.`);
  return value;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
