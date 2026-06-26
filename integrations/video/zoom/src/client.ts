import {
  IntegrationError,
  normalizeIntegrationError,
  providerJsonRequest,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import {
  createZoomMeetingsApiGeneratedClient,
  type ZoomMeetingsGeneratedOperationCaller,
} from "./meetings-api-client.generated.js";
import {
  ZOOM_MEETINGS_API_OPERATION_BY_ID,
  ZOOM_MEETINGS_API_OPERATION_BY_UID,
  type ZoomMeetingsApiOperation,
} from "./meetings-api-operations.generated.js";
import type {
  ZoomCreateMeetingInput,
  ZoomDeleteMeetingInput,
  ZoomGetMeetingInput,
  ZoomOperationRequestInput,
  ZoomVideoClient,
  ZoomVideoClientOptions,
  ZoomVideoProviderQuery,
  ZoomVideoProviderClient,
  ZoomVideoProviderPayload,
  ZoomUpdateMeetingInput,
} from "./contracts.js";
import {
  createZoomOfficialSdkRuntime,
  shouldUseZoomOfficialSdkRuntime,
} from "./official-sdk.js";

const ZOOM_DEFAULT_API_BASE_URL = "https://api.zoom.us/v2";
const ZOOM_DEFAULT_OAUTH_BASE_URL = "https://zoom.us";
const ZOOM_DEFAULT_USER_ID = "me";

export function createZoomVideoClient(options: ZoomVideoClientOptions = {}): ZoomVideoClient {
  const providerClient = options.providerClient ?? createZoomDefaultVideoProviderClient(options);
  const requestOperation = createProviderBackedMeetingsOperationCaller(providerClient);
  const meetingsApi = createZoomMeetingsApiGeneratedClient(requestOperation);

  return {
    providerClient,
    meetingsApi,
    requestOperation,
    createMeeting(input) {
      return providerClient.createMeeting(input);
    },
    listMeetings(input) {
      return providerClient.listMeetings(input);
    },
    getMeeting(meetingId, input) {
      return providerClient.getMeeting(meetingId, input);
    },
    updateMeeting(meetingId, input) {
      return providerClient.updateMeeting(meetingId, input);
    },
    deleteMeeting(meetingId, input) {
      return providerClient.deleteMeeting(meetingId, input);
    },
    getCurrentUser() {
      return providerClient.getCurrentUser();
    },
  };
}

function createZoomDefaultVideoProviderClient(
  options: Omit<ZoomVideoClientOptions, "providerClient"> = {},
): ZoomVideoProviderClient {
  if (shouldUseZoomOfficialSdkRuntime(options)) return createZoomOfficialSdkVideoProviderClient(options);
  return createZoomRestVideoProviderClient(options);
}

export function createZoomOfficialSdkVideoProviderClient(
  options: Omit<ZoomVideoClientOptions, "providerClient"> = {},
): ZoomVideoProviderClient {
  if (!hasZoomRestCredentials(options)) return createMissingZoomVideoProviderClient();
  const runtime = createZoomOfficialSdkRuntime({
    ...options,
    resolveAccessToken: () => resolveZoomAccessToken(options),
    restFallback: (operation, input) =>
      requestZoomRestOperation(operation, input as ZoomRestOperationInput | undefined, options),
  });
  const requestOperation = runtime.requestOperation;

  return {
    rawClient: runtime.rawClient,
    requestOperation,
    async createMeeting(input) {
      return requestOperation("POST /users/{userId}/meetings", {
        pathParams: { userId: options.userId ?? ZOOM_DEFAULT_USER_ID },
        body: zoomMeetingBody(input),
      }) as ReturnType<ZoomVideoProviderClient["createMeeting"]>;
    },
    async listMeetings(input = {}) {
      return requestOperation("GET /users/{userId}/meetings", {
        pathParams: { userId: options.userId ?? ZOOM_DEFAULT_USER_ID },
        query: zoomListMeetingsQuery(input),
      }) as ReturnType<ZoomVideoProviderClient["listMeetings"]>;
    },
    async getMeeting(meetingId, input = {}) {
      return requestOperation("GET /meetings/{meetingId}", {
        pathParams: { meetingId },
        query: zoomGetMeetingQuery(input),
      }) as ReturnType<ZoomVideoProviderClient["getMeeting"]>;
    },
    async updateMeeting(meetingId, input) {
      return await requestOperation("PATCH /meetings/{meetingId}", {
        pathParams: { meetingId },
        body: zoomMeetingBody(input),
      }) as unknown as Awaited<ReturnType<ZoomVideoProviderClient["updateMeeting"]>>;
    },
    async deleteMeeting(meetingId, input = {}) {
      return await requestOperation("DELETE /meetings/{meetingId}", {
        pathParams: { meetingId },
        query: zoomDeleteMeetingQuery(input),
      }) as unknown as Awaited<ReturnType<ZoomVideoProviderClient["deleteMeeting"]>>;
    },
    getCurrentUser: runtime.getCurrentUser,
  };
}

export function createZoomRestVideoProviderClient(options: Omit<ZoomVideoClientOptions, "providerClient"> = {}): ZoomVideoProviderClient {
  if (!hasZoomRestCredentials(options)) return createMissingZoomVideoProviderClient();
  const requestOperation = (async (operationUidOrId, ...args) => {
    const operation = resolveZoomMeetingsOperation(String(operationUidOrId));
    const input = args[0] as ZoomRestOperationInput | undefined;
    validateZoomOperationPathParams(operation, input);
    return requestZoomRestOperation(operation, input as ZoomRestOperationInput | undefined, options);
  }) as ZoomMeetingsGeneratedOperationCaller;

  return {
    requestOperation,
    async createMeeting(input) {
      return requestOperation("POST /users/{userId}/meetings", {
        pathParams: { userId: options.userId ?? ZOOM_DEFAULT_USER_ID },
        body: zoomMeetingBody(input),
      }) as ReturnType<ZoomVideoProviderClient["createMeeting"]>;
    },
    async listMeetings(input = {}) {
      return requestOperation("GET /users/{userId}/meetings", {
        pathParams: { userId: options.userId ?? ZOOM_DEFAULT_USER_ID },
        query: zoomListMeetingsQuery(input),
      }) as ReturnType<ZoomVideoProviderClient["listMeetings"]>;
    },
    async getMeeting(meetingId, input = {}) {
      return requestOperation("GET /meetings/{meetingId}", {
        pathParams: { meetingId },
        query: zoomGetMeetingQuery(input),
      }) as ReturnType<ZoomVideoProviderClient["getMeeting"]>;
    },
    async updateMeeting(meetingId, input) {
      return await requestOperation("PATCH /meetings/{meetingId}", {
        pathParams: { meetingId },
        body: zoomMeetingBody(input),
      }) as unknown as Awaited<ReturnType<ZoomVideoProviderClient["updateMeeting"]>>;
    },
    async deleteMeeting(meetingId, input = {}) {
      return await requestOperation("DELETE /meetings/{meetingId}", {
        pathParams: { meetingId },
        query: zoomDeleteMeetingQuery(input),
      }) as unknown as Awaited<ReturnType<ZoomVideoProviderClient["deleteMeeting"]>>;
    },
    async getCurrentUser() {
      return await requestZoomRestPath("GET /users/{userId}", "GET", {
        pathParams: { userId: "me" },
      }, options, "GET /users/{userId}") as Awaited<ReturnType<ZoomVideoProviderClient["getCurrentUser"]>>;
    },
  };
}

function createProviderBackedMeetingsOperationCaller(
  providerClient: ZoomVideoProviderClient,
): ZoomMeetingsGeneratedOperationCaller {
  return (async (operationUidOrId, ...args) => {
    const operation = resolveZoomMeetingsOperation(String(operationUidOrId));
    validateZoomOperationPathParams(operation, args[0] as ZoomRestOperationInput | undefined);
    const callProviderOperation = providerClient.requestOperation as (
      operation: string,
      ...input: unknown[]
    ) => Promise<unknown>;
    return callProviderOperation(operation.uid, ...args);
  }) as ZoomMeetingsGeneratedOperationCaller;
}

export function createMissingZoomVideoProviderClient(): ZoomVideoProviderClient {
  const fail = async (): Promise<never> => {
    throw new Error(
      "Zoom video credentials are required. Pass accessToken/getAccessToken/account OAuth options for the built-in REST adapter or a host-injected ZoomVideoProviderClient.",
    );
  };
  return {
    createMeeting: fail,
    listMeetings: fail,
    getMeeting: fail,
    updateMeeting: fail,
    deleteMeeting: fail,
    getCurrentUser: fail,
    requestOperation: fail as ZoomMeetingsGeneratedOperationCaller,
  };
}

type ZoomRestOperationInput = ZoomOperationRequestInput;

function resolveZoomMeetingsOperation(operationUidOrId: string) {
  const operation = ZOOM_MEETINGS_API_OPERATION_BY_UID.get(operationUidOrId)
    ?? ZOOM_MEETINGS_API_OPERATION_BY_ID.get(operationUidOrId);
  if (!operation) throw new Error(`Unknown Zoom Meetings API Hub operation '${operationUidOrId}'.`);
  return operation;
}

function validateZoomOperationPathParams(
  operation: ZoomMeetingsApiOperation,
  input: ZoomRestOperationInput | undefined,
) {
  for (const key of operation.path.matchAll(/\{([^}]+)\}/g)) {
    const parameterName = key[1];
    if (!parameterName) continue;
    const value = input?.pathParams?.[parameterName];
    if (value === undefined) throw new Error(`Missing Zoom path parameter '${parameterName}'.`);
  }
}

async function requestZoomRestOperation(
  operation: ZoomMeetingsApiOperation,
  input: ZoomRestOperationInput | undefined,
  options: Omit<ZoomVideoClientOptions, "providerClient">,
) {
  return requestZoomRestPath(operation.path, operation.method, input, options, operation.uid);
}

async function requestZoomRestPath(
  path: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  input: ZoomRestOperationInput | undefined,
  options: Omit<ZoomVideoClientOptions, "providerClient">,
  operationLabel: string,
) {
  const accessToken = await resolveZoomAccessToken(options);
  try {
    return await providerJsonRequest({
      baseUrl: options.baseUrl ?? ZOOM_DEFAULT_API_BASE_URL,
      path,
      method,
      pathParams: input?.pathParams,
      query: flattenZoomQuery(input?.query),
      body: input?.body,
      accessToken,
      headers: input?.headers,
      fetch: options.fetch,
      signal: options.signal,
      timeoutMs: options.timeoutMs,
      retry: options.retry,
      providerName: `Zoom REST operation '${operationLabel}'`,
    });
  } catch (error) {
    throw normalizeProviderRequestError(error, {
      providerPackageId: "video.zoom",
      provider: "zoom",
    });
  }
}

async function parseZoomResponsePayload(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return { raw: text };
  }
}

async function resolveZoomAccessToken(options: Omit<ZoomVideoClientOptions, "providerClient">) {
  if (options.accessToken) return options.accessToken;
  if (options.getAccessToken) return options.getAccessToken();
  if (options.accountId && options.clientId && options.clientSecret) {
    return createZoomServerOAuthAccessToken(options as ZoomServerOAuthTokenOptions);
  }
  throw new IntegrationError(
    "credential-missing",
    "Zoom accessToken, getAccessToken, or account OAuth credentials are required for the built-in REST adapter.",
    { providerPackageId: "video.zoom", provider: "zoom" },
  );
}

export interface ZoomServerOAuthTokenOptions {
  accountId: string;
  clientId: string;
  clientSecret: string;
  oauthBaseUrl?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export async function createZoomServerOAuthAccessToken(options: ZoomServerOAuthTokenOptions): Promise<string> {
  const url = new URL("/oauth/token", normalizedBaseUrl(options.oauthBaseUrl ?? ZOOM_DEFAULT_OAUTH_BASE_URL));
  url.searchParams.set("grant_type", "account_credentials");
  url.searchParams.set("account_id", options.accountId);
  const response = await (options.fetch ?? fetch)(url.toString(), {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: `Basic ${Buffer.from(`${options.clientId}:${options.clientSecret}`).toString("base64")}`,
      "content-type": "application/x-www-form-urlencoded",
    },
    ...(options.signal ? { signal: options.signal } : {}),
  });
  const payload = await parseZoomResponsePayload(response) as { access_token?: string; error?: string; reason?: string };
  if (!response.ok || !payload.access_token) {
    throw new IntegrationError(
      response.ok ? "provider-auth" : providerErrorCode(response.status),
      `Zoom server OAuth token request failed with HTTP ${response.status}.`,
      {
        providerPackageId: "video.zoom",
        provider: "zoom",
        statusCode: response.status,
        retryable: response.status === 429 || response.status >= 500,
        details: { payload },
      },
    );
  }
  return payload.access_token;
}

function hasZoomRestCredentials(options: Omit<ZoomVideoClientOptions, "providerClient">) {
  return Boolean(options.accessToken || options.getAccessToken || (options.accountId && options.clientId && options.clientSecret));
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

function zoomListMeetingsQuery(input: import("./contracts.js").ZoomListMeetingsInput) {
  return stripUndefined({
    type: input.type,
    page_size: input.pageSize,
    next_page_token: input.nextPageToken,
    page_number: input.pageNumber,
    from: input.from,
    to: input.to,
    timezone: input.timezone,
  }) as ZoomVideoProviderQuery;
}

function zoomGetMeetingQuery(input: ZoomGetMeetingInput) {
  return stripUndefined({
    occurrence_id: input.occurrenceId,
    show_previous_occurrences: input.showPreviousOccurrences,
  }) as ZoomVideoProviderQuery;
}

function zoomDeleteMeetingQuery(input: ZoomDeleteMeetingInput) {
  return stripUndefined({
    occurrence_id: input.occurrenceId,
    schedule_for_reminder: input.scheduleForReminder,
  }) as ZoomVideoProviderQuery;
}

function flattenZoomQuery(query: ZoomVideoProviderQuery | undefined) {
  const flattened: Record<string, ProviderQueryValue> = {};
  flattenZoomQueryInto(flattened, query);
  return flattened;
}

function flattenZoomQueryInto(
  target: Record<string, ProviderQueryValue>,
  query: ZoomVideoProviderQuery | undefined,
  prefix?: string,
) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null) continue;
    const queryKey = prefix ? `${prefix}[${key}]` : key;
    if (Array.isArray(value)) {
      target[queryKey] = value.map(String);
      continue;
    }
    if (typeof value === "object") {
      flattenZoomQueryInto(target, value as ZoomVideoProviderQuery, queryKey);
      continue;
    }
    target[queryKey] = value;
  }
}

function normalizeProviderRequestError(
  error: unknown,
  context: { providerPackageId: string; provider: string },
) {
  return normalizeIntegrationError(error, {
    ...context,
    statusCode: readErrorStatus(error),
    retryable: readErrorRetryable(error),
    details: readErrorPayload(error),
  });
}

function readErrorStatus(error: unknown) {
  if (!isRecord(error)) return undefined;
  const status = error.status ?? error.statusCode;
  return typeof status === "number" ? status : undefined;
}

function readErrorRetryable(error: unknown) {
  const status = readErrorStatus(error);
  return status === undefined ? undefined : status === 429 || status >= 500;
}

function readErrorPayload(error: unknown) {
  if (!isRecord(error) || error.payload === undefined) return undefined;
  return { payload: error.payload };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function stripUndefined<T extends Record<string, unknown>>(input: T) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}

function providerErrorCode(status: number) {
  if (status === 401) return "provider-auth";
  if (status === 403) return "provider-permission";
  if (status === 429) return "provider-rate-limited";
  if (status === 408 || status === 504) return "provider-timeout";
  if (status >= 500) return "provider-unavailable";
  return "provider-validation";
}

function normalizedBaseUrl(baseUrl: string) {
  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}
