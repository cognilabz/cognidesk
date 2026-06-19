import {
  createZoomMeetingsApiGeneratedClient,
  type ZoomMeetingsGeneratedOperationCaller,
} from "./meetings-api-client.generated.js";
import {
  ZOOM_MEETINGS_API_OPERATION_BY_ID,
  ZOOM_MEETINGS_API_OPERATION_BY_UID,
  type ZoomMeetingsApiOperationUid,
} from "./meetings-api-operations.generated.js";
import type {
  ZoomCreateMeetingInput,
  ZoomDeleteMeetingInput,
  ZoomHttpMethod,
  ZoomListMeetingsInput,
  ZoomOperationRequestInput,
  ZoomResource,
  ZoomUpdateMeetingInput,
  ZoomVideoClient,
  ZoomVideoClientOptions,
  ZoomVideoJsonObject,
  ZoomVideoProviderExtensionValue,
  ZoomVideoProviderPayload,
  ZoomVideoProviderQuery,
} from "./contracts.js";

export function createZoomVideoClient(options: ZoomVideoClientOptions): ZoomVideoClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.zoom.us/v2").replace(/\/+$/, "");
  const userId = options.userId ?? "me";
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = ZoomResource>(
    method: ZoomHttpMethod,
    path: string,
    input: ZoomOperationRequestInput = {},
  ) => zoomRequest<T>({
    url: zoomOperationUrl(apiBaseUrl, path, input.pathParams, input.query),
    method,
    options,
    fetch: fetchImpl,
    body: input.body,
    headers: input.headers,
  });
  const requestOperation = async (
    operationUidOrId: ZoomMeetingsApiOperationUid | string,
    input: ZoomOperationRequestInput = {},
  ) => {
    const operation = ZOOM_MEETINGS_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? ZOOM_MEETINGS_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Zoom Meetings API Hub operation '${operationUidOrId}'.`);
    return request(operation.method, operation.path, input);
  };
  const meetingsApi = createZoomMeetingsApiGeneratedClient(requestOperation as ZoomMeetingsGeneratedOperationCaller);

  return {
    meetingsApi,
    requestOperation: requestOperation as ZoomMeetingsGeneratedOperationCaller,
    async createMeeting(input) {
      return zoomRequest({
        url: zoomUrl(apiBaseUrl, `/users/${encodeURIComponent(userId)}/meetings`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: zoomMeetingBody(input),
      });
    },
    async listMeetings(input = {}) {
      const url = zoomUrl(apiBaseUrl, `/users/${encodeURIComponent(userId)}/meetings`);
      if (input.type) url.searchParams.set("type", input.type);
      if (input.pageSize !== undefined) url.searchParams.set("page_size", String(input.pageSize));
      if (input.nextPageToken) url.searchParams.set("next_page_token", input.nextPageToken);
      if (input.pageNumber !== undefined) url.searchParams.set("page_number", String(input.pageNumber));
      if (input.from) url.searchParams.set("from", input.from);
      if (input.to) url.searchParams.set("to", input.to);
      if (input.timezone) url.searchParams.set("timezone", input.timezone);
      return zoomRequest({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getMeeting(meetingId, input = {}) {
      const url = zoomUrl(apiBaseUrl, `/meetings/${encodeURIComponent(String(meetingId))}`);
      if (input.occurrenceId) url.searchParams.set("occurrence_id", input.occurrenceId);
      if (input.showPreviousOccurrences !== undefined) {
        url.searchParams.set("show_previous_occurrences", String(input.showPreviousOccurrences));
      }
      return zoomRequest({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async updateMeeting(meetingId, input) {
      return zoomRequest({
        url: zoomUrl(apiBaseUrl, `/meetings/${encodeURIComponent(String(meetingId))}`),
        method: "PATCH",
        options,
        fetch: fetchImpl,
        body: zoomMeetingBody(input),
      });
    },
    async deleteMeeting(meetingId, input = {}) {
      const url = zoomUrl(apiBaseUrl, `/meetings/${encodeURIComponent(String(meetingId))}`);
      if (input.occurrenceId) url.searchParams.set("occurrence_id", input.occurrenceId);
      if (input.scheduleForReminder !== undefined) {
        url.searchParams.set("schedule_for_reminder", String(input.scheduleForReminder));
      }
      return zoomRequest({
        url,
        method: "DELETE",
        options,
        fetch: fetchImpl,
      });
    },
    async getCurrentUser() {
      return zoomRequest({
        url: zoomUrl(apiBaseUrl, "/users/me"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}

function zoomUrl(apiBaseUrl: string, path: string) {
  return new URL(path.replace(/^\/+/, ""), `${apiBaseUrl}/`);
}

function zoomMeetingBody(input: ZoomCreateMeetingInput | ZoomUpdateMeetingInput) {
  return stripUndefined({
    topic: input.topic,
    type: input.type,
    start_time: input.startTime,
    duration: input.duration,
    timezone: input.timezone,
    agenda: input.agenda,
    password: input.password,
    schedule_for: input.scheduleFor,
    recurrence: input.recurrence,
    settings: input.settings,
    tracking_fields: input.trackingFields,
    ...("templateId" in input ? { template_id: input.templateId } : {}),
    ...(input.additionalFields ?? {}),
  });
}

async function zoomRequest<T>(input: {
  url: URL;
  method: ZoomHttpMethod;
  options: ZoomVideoClientOptions;
  fetch: typeof fetch;
  body?: ZoomVideoProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}): Promise<T> {
  if (!input.options.accessToken) throw new Error("Zoom OAuth access token is required.");
  const requestBody = input.body === undefined ? undefined : JSON.stringify(input.body);
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.accessToken}`,
      ...(requestBody ? { "content-type": "application/json" } : {}),
      ...input.headers,
    },
    ...(requestBody ? { body: requestBody } : {}),
  });
  const text = await response.text();
  const responseBody = text ? JSON.parse(text) as T & ZoomErrorResponse : {} as T & ZoomErrorResponse;
  if (!response.ok) {
    throw new Error(zoomErrorMessage(responseBody, response.status));
  }
  return responseBody as T;
}

function zoomOperationUrl(
  apiBaseUrl: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query?: ZoomVideoProviderQuery,
) {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Zoom path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const url = zoomUrl(apiBaseUrl, resolvedPath);
  appendZoomQuery(url.searchParams, query);
  return url;
}

function appendZoomQuery(params: URLSearchParams, query?: ZoomVideoProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}

function stripUndefined(input: ZoomVideoJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}

interface ZoomErrorResponse {
  code?: number | string;
  message?: string;
  errors?: ZoomVideoProviderExtensionValue;
}

function zoomErrorMessage(body: ZoomErrorResponse, status: number) {
  const code = body.code !== undefined ? `Zoom error ${body.code}` : `Zoom REST API returned ${status}`;
  return body.message ? `${code}: ${body.message}` : `${code}.`;
}
