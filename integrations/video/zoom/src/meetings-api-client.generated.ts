// Generated from the Zoom Meetings API Hub OpenAPI spec (https://developers.zoom.us/api-hub/meetings/methods/endpoints.json).
// Do not edit by hand; regenerate from the Zoom Meetings API Hub OpenAPI source after checking upstream docs.

import type { ZoomOperationRequestInput } from "./index.js";
import type {
  ZoomMeetingsApiOperationQueryMap,
  ZoomMeetingsApiOperationQueryRequiredMap,
  ZoomMeetingsApiOperationRequestBodyMap,
  ZoomMeetingsApiOperationRequestBodyRequiredMap,
  ZoomMeetingsApiOperationResponseMap,
} from "./meetings-api-schema-types.generated.js";
import {
  createZoomMeetingsApiArchivingGeneratedClient,
  ZoomMeetingsApiArchivingGeneratedFunctionNames,
  type ZoomMeetingsApiArchivingGeneratedClient,
  type ZoomMeetingsApiArchivingOperationPathParamMap,
  type ZoomMeetingsApiArchivingOperationRequestMap,
} from "./meetings-api.generated/client/archiving-chunk.generated.js";
import {
  createZoomMeetingsApiCloudRecordingGeneratedClient,
  ZoomMeetingsApiCloudRecordingGeneratedFunctionNames,
  type ZoomMeetingsApiCloudRecordingGeneratedClient,
  type ZoomMeetingsApiCloudRecordingOperationPathParamMap,
  type ZoomMeetingsApiCloudRecordingOperationRequestMap,
} from "./meetings-api.generated/client/cloud-recording-chunk.generated.js";
import {
  createZoomMeetingsApiDevicesGeneratedClient,
  ZoomMeetingsApiDevicesGeneratedFunctionNames,
  type ZoomMeetingsApiDevicesGeneratedClient,
  type ZoomMeetingsApiDevicesOperationPathParamMap,
  type ZoomMeetingsApiDevicesOperationRequestMap,
} from "./meetings-api.generated/client/devices-chunk.generated.js";
import {
  createZoomMeetingsApiH323DevicesGeneratedClient,
  ZoomMeetingsApiH323DevicesGeneratedFunctionNames,
  type ZoomMeetingsApiH323DevicesGeneratedClient,
  type ZoomMeetingsApiH323DevicesOperationPathParamMap,
  type ZoomMeetingsApiH323DevicesOperationRequestMap,
} from "./meetings-api.generated/client/h323-devices-chunk.generated.js";
import {
  createZoomMeetingsApiInMeetingAppsGeneratedClient,
  ZoomMeetingsApiInMeetingAppsGeneratedFunctionNames,
  type ZoomMeetingsApiInMeetingAppsGeneratedClient,
  type ZoomMeetingsApiInMeetingAppsOperationPathParamMap,
  type ZoomMeetingsApiInMeetingAppsOperationRequestMap,
} from "./meetings-api.generated/client/in-meeting-apps-chunk.generated.js";
import {
  createZoomMeetingsApiInMeetingFeaturesGeneratedClient,
  ZoomMeetingsApiInMeetingFeaturesGeneratedFunctionNames,
  type ZoomMeetingsApiInMeetingFeaturesGeneratedClient,
  type ZoomMeetingsApiInMeetingFeaturesOperationPathParamMap,
  type ZoomMeetingsApiInMeetingFeaturesOperationRequestMap,
} from "./meetings-api.generated/client/in-meeting-features-chunk.generated.js";
import {
  createZoomMeetingsApiInvitationRegistrationGeneratedClient,
  ZoomMeetingsApiInvitationRegistrationGeneratedFunctionNames,
  type ZoomMeetingsApiInvitationRegistrationGeneratedClient,
  type ZoomMeetingsApiInvitationRegistrationOperationPathParamMap,
  type ZoomMeetingsApiInvitationRegistrationOperationRequestMap,
} from "./meetings-api.generated/client/invitation-registration-chunk.generated.js";
import {
  createZoomMeetingsApiLiveStreamingGeneratedClient,
  ZoomMeetingsApiLiveStreamingGeneratedFunctionNames,
  type ZoomMeetingsApiLiveStreamingGeneratedClient,
  type ZoomMeetingsApiLiveStreamingOperationPathParamMap,
  type ZoomMeetingsApiLiveStreamingOperationRequestMap,
} from "./meetings-api.generated/client/live-streaming-chunk.generated.js";
import {
  createZoomMeetingsApiMeetingsGeneratedClient,
  ZoomMeetingsApiMeetingsGeneratedFunctionNames,
  type ZoomMeetingsApiMeetingsGeneratedClient,
  type ZoomMeetingsApiMeetingsOperationPathParamMap,
  type ZoomMeetingsApiMeetingsOperationRequestMap,
} from "./meetings-api.generated/client/meetings-chunk.generated.js";
import {
  createZoomMeetingsApiPACGeneratedClient,
  ZoomMeetingsApiPACGeneratedFunctionNames,
  type ZoomMeetingsApiPACGeneratedClient,
  type ZoomMeetingsApiPACOperationPathParamMap,
  type ZoomMeetingsApiPACOperationRequestMap,
} from "./meetings-api.generated/client/pac-chunk.generated.js";
import {
  createZoomMeetingsApiPollsGeneratedClient,
  ZoomMeetingsApiPollsGeneratedFunctionNames,
  type ZoomMeetingsApiPollsGeneratedClient,
  type ZoomMeetingsApiPollsOperationPathParamMap,
  type ZoomMeetingsApiPollsOperationRequestMap,
} from "./meetings-api.generated/client/polls-chunk.generated.js";
import {
  createZoomMeetingsApiReportsGeneratedClient,
  ZoomMeetingsApiReportsGeneratedFunctionNames,
  type ZoomMeetingsApiReportsGeneratedClient,
  type ZoomMeetingsApiReportsOperationPathParamMap,
  type ZoomMeetingsApiReportsOperationRequestMap,
} from "./meetings-api.generated/client/reports-chunk.generated.js";
import {
  createZoomMeetingsApiSIPPhoneGeneratedClient,
  ZoomMeetingsApiSIPPhoneGeneratedFunctionNames,
  type ZoomMeetingsApiSIPPhoneGeneratedClient,
  type ZoomMeetingsApiSIPPhoneOperationPathParamMap,
  type ZoomMeetingsApiSIPPhoneOperationRequestMap,
} from "./meetings-api.generated/client/sip-phone-chunk.generated.js";
import {
  createZoomMeetingsApiSummariesGeneratedClient,
  ZoomMeetingsApiSummariesGeneratedFunctionNames,
  type ZoomMeetingsApiSummariesGeneratedClient,
  type ZoomMeetingsApiSummariesOperationPathParamMap,
  type ZoomMeetingsApiSummariesOperationRequestMap,
} from "./meetings-api.generated/client/summaries-chunk.generated.js";
import {
  createZoomMeetingsApiSurveysGeneratedClient,
  ZoomMeetingsApiSurveysGeneratedFunctionNames,
  type ZoomMeetingsApiSurveysGeneratedClient,
  type ZoomMeetingsApiSurveysOperationPathParamMap,
  type ZoomMeetingsApiSurveysOperationRequestMap,
} from "./meetings-api.generated/client/surveys-chunk.generated.js";
import {
  createZoomMeetingsApiTemplatesGeneratedClient,
  ZoomMeetingsApiTemplatesGeneratedFunctionNames,
  type ZoomMeetingsApiTemplatesGeneratedClient,
  type ZoomMeetingsApiTemplatesOperationPathParamMap,
  type ZoomMeetingsApiTemplatesOperationRequestMap,
} from "./meetings-api.generated/client/templates-chunk.generated.js";
import {
  createZoomMeetingsApiTrackingFieldGeneratedClient,
  ZoomMeetingsApiTrackingFieldGeneratedFunctionNames,
  type ZoomMeetingsApiTrackingFieldGeneratedClient,
  type ZoomMeetingsApiTrackingFieldOperationPathParamMap,
  type ZoomMeetingsApiTrackingFieldOperationRequestMap,
} from "./meetings-api.generated/client/tracking-field-chunk.generated.js";
import {
  createZoomMeetingsApiTSPGeneratedClient,
  ZoomMeetingsApiTSPGeneratedFunctionNames,
  type ZoomMeetingsApiTSPGeneratedClient,
  type ZoomMeetingsApiTSPOperationPathParamMap,
  type ZoomMeetingsApiTSPOperationRequestMap,
} from "./meetings-api.generated/client/tsp-chunk.generated.js";
import {
  createZoomMeetingsApiWebinarsGeneratedClient,
  ZoomMeetingsApiWebinarsGeneratedFunctionNames,
  type ZoomMeetingsApiWebinarsGeneratedClient,
  type ZoomMeetingsApiWebinarsOperationPathParamMap,
  type ZoomMeetingsApiWebinarsOperationRequestMap,
} from "./meetings-api.generated/client/webinars-chunk.generated.js";

export type ZoomMeetingsApiPathParamValue = string | number;
export interface ZoomMeetingsApiOperationPathParamMap extends ZoomMeetingsApiArchivingOperationPathParamMap, ZoomMeetingsApiCloudRecordingOperationPathParamMap, ZoomMeetingsApiDevicesOperationPathParamMap, ZoomMeetingsApiH323DevicesOperationPathParamMap, ZoomMeetingsApiInMeetingAppsOperationPathParamMap, ZoomMeetingsApiInMeetingFeaturesOperationPathParamMap, ZoomMeetingsApiInvitationRegistrationOperationPathParamMap, ZoomMeetingsApiLiveStreamingOperationPathParamMap, ZoomMeetingsApiMeetingsOperationPathParamMap, ZoomMeetingsApiPACOperationPathParamMap, ZoomMeetingsApiPollsOperationPathParamMap, ZoomMeetingsApiReportsOperationPathParamMap, ZoomMeetingsApiSIPPhoneOperationPathParamMap, ZoomMeetingsApiSummariesOperationPathParamMap, ZoomMeetingsApiSurveysOperationPathParamMap, ZoomMeetingsApiTemplatesOperationPathParamMap, ZoomMeetingsApiTrackingFieldOperationPathParamMap, ZoomMeetingsApiTSPOperationPathParamMap, ZoomMeetingsApiWebinarsOperationPathParamMap {}

export type ZoomMeetingsApiOperationKey = keyof ZoomMeetingsApiOperationPathParamMap & string;

export type ZoomMeetingsApiOperationQueryInput<OperationKey extends ZoomMeetingsApiOperationKey> =
  ZoomMeetingsApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: ZoomMeetingsApiOperationQueryMap[OperationKey] }
    : { query?: ZoomMeetingsApiOperationQueryMap[OperationKey] };

export type ZoomMeetingsApiOperationBodyInput<OperationKey extends ZoomMeetingsApiOperationKey> =
  [ZoomMeetingsApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : ZoomMeetingsApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: ZoomMeetingsApiOperationRequestBodyMap[OperationKey] }
      : { body?: ZoomMeetingsApiOperationRequestBodyMap[OperationKey] };

export type ZoomMeetingsApiOperationInput<OperationKey extends ZoomMeetingsApiOperationKey> = Omit<ZoomOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends ZoomMeetingsApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: ZoomMeetingsApiOperationPathParamMap[OperationKey] }
) & ZoomMeetingsApiOperationQueryInput<OperationKey> & ZoomMeetingsApiOperationBodyInput<OperationKey>;

export interface ZoomMeetingsApiOperationRequestMap extends ZoomMeetingsApiArchivingOperationRequestMap, ZoomMeetingsApiCloudRecordingOperationRequestMap, ZoomMeetingsApiDevicesOperationRequestMap, ZoomMeetingsApiH323DevicesOperationRequestMap, ZoomMeetingsApiInMeetingAppsOperationRequestMap, ZoomMeetingsApiInMeetingFeaturesOperationRequestMap, ZoomMeetingsApiInvitationRegistrationOperationRequestMap, ZoomMeetingsApiLiveStreamingOperationRequestMap, ZoomMeetingsApiMeetingsOperationRequestMap, ZoomMeetingsApiPACOperationRequestMap, ZoomMeetingsApiPollsOperationRequestMap, ZoomMeetingsApiReportsOperationRequestMap, ZoomMeetingsApiSIPPhoneOperationRequestMap, ZoomMeetingsApiSummariesOperationRequestMap, ZoomMeetingsApiSurveysOperationRequestMap, ZoomMeetingsApiTemplatesOperationRequestMap, ZoomMeetingsApiTrackingFieldOperationRequestMap, ZoomMeetingsApiTSPOperationRequestMap, ZoomMeetingsApiWebinarsOperationRequestMap {}

export type ZoomMeetingsApiOperationArgs<OperationKey extends ZoomMeetingsApiOperationKey> = {} extends ZoomMeetingsApiOperationPathParamMap[OperationKey]
  ? [input?: ZoomMeetingsApiOperationRequestMap[OperationKey]]
  : [input: ZoomMeetingsApiOperationRequestMap[OperationKey]];

export type ZoomMeetingsGeneratedOperationCaller = <OperationKey extends ZoomMeetingsApiOperationKey>(
  operationKey: OperationKey,
  ...args: ZoomMeetingsApiOperationArgs<OperationKey>
) => Promise<ZoomMeetingsApiOperationResponseMap[OperationKey]>;

export interface ZoomMeetingsApiGeneratedClient extends ZoomMeetingsApiArchivingGeneratedClient, ZoomMeetingsApiCloudRecordingGeneratedClient, ZoomMeetingsApiDevicesGeneratedClient, ZoomMeetingsApiH323DevicesGeneratedClient, ZoomMeetingsApiInMeetingAppsGeneratedClient, ZoomMeetingsApiInMeetingFeaturesGeneratedClient, ZoomMeetingsApiInvitationRegistrationGeneratedClient, ZoomMeetingsApiLiveStreamingGeneratedClient, ZoomMeetingsApiMeetingsGeneratedClient, ZoomMeetingsApiPACGeneratedClient, ZoomMeetingsApiPollsGeneratedClient, ZoomMeetingsApiReportsGeneratedClient, ZoomMeetingsApiSIPPhoneGeneratedClient, ZoomMeetingsApiSummariesGeneratedClient, ZoomMeetingsApiSurveysGeneratedClient, ZoomMeetingsApiTemplatesGeneratedClient, ZoomMeetingsApiTrackingFieldGeneratedClient, ZoomMeetingsApiTSPGeneratedClient, ZoomMeetingsApiWebinarsGeneratedClient {}

export const ZOOM_MEETINGS_API_GENERATED_FUNCTION_COUNT = 184 as const;
export const ZOOM_MEETINGS_API_GENERATED_FUNCTION_NAMES = [
  ...ZoomMeetingsApiArchivingGeneratedFunctionNames,
  ...ZoomMeetingsApiCloudRecordingGeneratedFunctionNames,
  ...ZoomMeetingsApiDevicesGeneratedFunctionNames,
  ...ZoomMeetingsApiH323DevicesGeneratedFunctionNames,
  ...ZoomMeetingsApiInMeetingAppsGeneratedFunctionNames,
  ...ZoomMeetingsApiInMeetingFeaturesGeneratedFunctionNames,
  ...ZoomMeetingsApiInvitationRegistrationGeneratedFunctionNames,
  ...ZoomMeetingsApiLiveStreamingGeneratedFunctionNames,
  ...ZoomMeetingsApiMeetingsGeneratedFunctionNames,
  ...ZoomMeetingsApiPACGeneratedFunctionNames,
  ...ZoomMeetingsApiPollsGeneratedFunctionNames,
  ...ZoomMeetingsApiReportsGeneratedFunctionNames,
  ...ZoomMeetingsApiSIPPhoneGeneratedFunctionNames,
  ...ZoomMeetingsApiSummariesGeneratedFunctionNames,
  ...ZoomMeetingsApiSurveysGeneratedFunctionNames,
  ...ZoomMeetingsApiTemplatesGeneratedFunctionNames,
  ...ZoomMeetingsApiTrackingFieldGeneratedFunctionNames,
  ...ZoomMeetingsApiTSPGeneratedFunctionNames,
  ...ZoomMeetingsApiWebinarsGeneratedFunctionNames,
] as const satisfies readonly (keyof ZoomMeetingsApiGeneratedClient)[];

export function createZoomMeetingsApiGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiGeneratedClient {
  return Object.assign(
    {},
    createZoomMeetingsApiArchivingGeneratedClient(callOperation),
    createZoomMeetingsApiCloudRecordingGeneratedClient(callOperation),
    createZoomMeetingsApiDevicesGeneratedClient(callOperation),
    createZoomMeetingsApiH323DevicesGeneratedClient(callOperation),
    createZoomMeetingsApiInMeetingAppsGeneratedClient(callOperation),
    createZoomMeetingsApiInMeetingFeaturesGeneratedClient(callOperation),
    createZoomMeetingsApiInvitationRegistrationGeneratedClient(callOperation),
    createZoomMeetingsApiLiveStreamingGeneratedClient(callOperation),
    createZoomMeetingsApiMeetingsGeneratedClient(callOperation),
    createZoomMeetingsApiPACGeneratedClient(callOperation),
    createZoomMeetingsApiPollsGeneratedClient(callOperation),
    createZoomMeetingsApiReportsGeneratedClient(callOperation),
    createZoomMeetingsApiSIPPhoneGeneratedClient(callOperation),
    createZoomMeetingsApiSummariesGeneratedClient(callOperation),
    createZoomMeetingsApiSurveysGeneratedClient(callOperation),
    createZoomMeetingsApiTemplatesGeneratedClient(callOperation),
    createZoomMeetingsApiTrackingFieldGeneratedClient(callOperation),
    createZoomMeetingsApiTSPGeneratedClient(callOperation),
    createZoomMeetingsApiWebinarsGeneratedClient(callOperation),
  ) as ZoomMeetingsApiGeneratedClient;
}
