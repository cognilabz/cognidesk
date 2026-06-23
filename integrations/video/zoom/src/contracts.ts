import type {
  ZoomMeetingsApiGeneratedClient,
  ZoomMeetingsGeneratedOperationCaller,
} from "./meetings-api-client.generated.js";

export type ZoomVideoJsonPrimitive = string | number | boolean | null;
export type ZoomVideoJsonValue =
  | ZoomVideoJsonPrimitive
  | ZoomVideoJsonObject
  | readonly ZoomVideoJsonValue[];
export type ZoomVideoProviderExtensionValue = ZoomVideoJsonValue | object | undefined;
export interface ZoomVideoJsonObject {
  [key: string]: ZoomVideoProviderExtensionValue;
}
export type ZoomVideoProviderPayload = ZoomVideoJsonObject | object;
export type ZoomVideoProviderQuery = Record<string, ZoomVideoProviderExtensionValue>;
export interface ZoomVideoProviderResponse extends ZoomVideoJsonObject {}
export interface ZoomVideoProviderExtensionFields extends ZoomVideoJsonObject {}

export interface ZoomVideoClientOptions {
  accessToken: string;
  userId?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface ZoomCredentialStatusInput {
  accessToken?: string;
  webhookSecretToken?: string;
  scopes?: string[];
  expiresAt?: string;
}

export interface ZoomMeetingResource {
  id?: number | string;
  uuid?: string;
  host_id?: string;
  host_email?: string;
  topic?: string;
  type?: ZoomMeetingType;
  status?: ZoomMeetingStatus;
  start_time?: string;
  duration?: number;
  timezone?: string;
  agenda?: string;
  join_url?: string;
  start_url?: string;
  password?: string;
  settings?: ZoomVideoJsonObject;
  [key: string]: ZoomVideoProviderExtensionValue;
}

export type ZoomMeetingType = 1 | 2 | 3 | 8 | 10;
export type ZoomMeetingStatus = "waiting" | "started" | "finished";
export type ZoomListMeetingType =
  | "scheduled"
  | "live"
  | "upcoming"
  | "upcoming_meetings"
  | "previous_meetings";
export type ZoomRecurrenceType = 1 | 2 | 3;
export type ZoomMonthlyWeek = -1 | 1 | 2 | 3 | 4;
export type ZoomWeekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface ZoomMeetingRecurrence {
  type: ZoomRecurrenceType;
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: ZoomMonthlyWeek;
  monthly_week_day?: ZoomWeekday;
  repeat_interval?: number;
  weekly_days?: string;
}

export interface ZoomTrackingField {
  field: string;
  value: string;
}

export interface ZoomUserResource {
  id?: string;
  account_id?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  type?: number;
  status?: string;
  [key: string]: ZoomVideoProviderExtensionValue;
}

export interface ZoomCreateMeetingInput {
  topic?: string;
  type?: ZoomMeetingType;
  startTime?: string;
  duration?: number;
  timezone?: string;
  agenda?: string;
  password?: string;
  scheduleFor?: string;
  recurrence?: ZoomMeetingRecurrence;
  settings?: ZoomVideoJsonObject;
  trackingFields?: ZoomTrackingField[];
  templateId?: string;
  additionalFields?: ZoomVideoProviderExtensionFields;
}

export interface ZoomUpdateMeetingInput {
  topic?: string;
  type?: ZoomMeetingType;
  startTime?: string;
  duration?: number;
  timezone?: string;
  agenda?: string;
  password?: string;
  scheduleFor?: string;
  recurrence?: ZoomMeetingRecurrence;
  settings?: ZoomVideoJsonObject;
  trackingFields?: ZoomTrackingField[];
  additionalFields?: ZoomVideoProviderExtensionFields;
}

export interface ZoomListMeetingsInput {
  type?: ZoomListMeetingType;
  pageSize?: number;
  nextPageToken?: string;
  pageNumber?: number;
  from?: string;
  to?: string;
  timezone?: string;
}

export interface ZoomListMeetingsResponse {
  meetings: ZoomMeetingResource[];
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
  [key: string]: ZoomVideoProviderExtensionValue;
}

export interface ZoomGetMeetingInput {
  occurrenceId?: string;
  showPreviousOccurrences?: boolean;
}

export interface ZoomDeleteMeetingInput {
  occurrenceId?: string;
  scheduleForReminder?: boolean;
}

export type ZoomHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ZoomResource {
  [key: string]: ZoomVideoProviderExtensionValue;
}

export interface ZoomOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: ZoomVideoProviderQuery | undefined;
  body?: ZoomVideoProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}

export interface ZoomVideoClient {
  meetingsApi: ZoomMeetingsApiGeneratedClient;
  requestOperation: ZoomMeetingsGeneratedOperationCaller;
  createMeeting(input: ZoomCreateMeetingInput): Promise<ZoomMeetingResource>;
  listMeetings(input?: ZoomListMeetingsInput): Promise<ZoomListMeetingsResponse>;
  getMeeting(meetingId: number | string, input?: ZoomGetMeetingInput): Promise<ZoomMeetingResource>;
  updateMeeting(meetingId: number | string, input: ZoomUpdateMeetingInput): Promise<ZoomMeetingResource>;
  deleteMeeting(meetingId: number | string, input?: ZoomDeleteMeetingInput): Promise<Record<string, never>>;
  getCurrentUser(): Promise<ZoomUserResource>;
}

export interface ZoomLiveCheckOptions extends ZoomVideoClientOptions {
  client?: Pick<ZoomVideoClient, "getCurrentUser">;
}

export interface ValidateZoomWebhookSignatureInput {
  webhookSecretToken: string;
  rawBody: string | Buffer;
  timestamp: string | number;
  signature: string;
  version?: "v0";
  nowSeconds?: number;
  timestampToleranceSeconds?: number;
}

export interface ZoomWebhookValidationInput {
  webhookSecretToken: string;
  plainToken: string;
}

export interface ZoomWebhookValidationResponse {
  plainToken: string;
  encryptedToken: string;
}

export interface ParseZoomWebhookRequestOptions {
  webhookSecretToken?: string;
  requireSignature?: boolean;
  nowSeconds?: number;
  timestampToleranceSeconds?: number;
}

export interface ZoomWebhookEvent {
  event?: string;
  event_ts?: number;
  payload?: {
    plainToken?: string;
    object?: ZoomVideoProviderExtensionValue;
    account_id?: string;
    [key: string]: ZoomVideoProviderExtensionValue;
  };
  [key: string]: ZoomVideoProviderExtensionValue;
}

export interface ZoomSignedWebhookRequest {
  rawBody: string;
  contentType?: string;
  json?: ZoomWebhookEvent;
  event?: string;
  payload?: ZoomWebhookEvent["payload"];
  urlValidationResponse?: ZoomWebhookValidationResponse;
}
