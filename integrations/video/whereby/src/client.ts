import {
  IntegrationError,
  normalizeIntegrationError,
  providerJsonRequest,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import {
  createWherebyFullApiGeneratedClient,
  type WherebyFullApiOperationKey,
  type WherebyGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  WHEREBY_FULL_API_OPERATION_BY_ID,
  WHEREBY_FULL_API_OPERATION_BY_UID,
  type WherebyFullApiOperation,
  type WherebyFullApiOperationUid,
} from "./full-api-operations.generated.js";
import type {
  WherebyAccessLinkResource,
  WherebyCreateMeetingInput,
  WherebyInsightsListResponse,
  WherebyListMeetingsResponse,
  WherebyListRecordingsResponse,
  WherebyListSummariesResponse,
  WherebyListTranscriptionsResponse,
  WherebyMeetingResource,
  WherebyOperationRequestInput,
  WherebyRecordingResource,
  WherebySummaryResource,
  WherebyTranscriptionResource,
  WherebyVideoClient,
  WherebyVideoClientOptions,
  WherebyVideoJsonObject,
  WherebyVideoProviderClient,
  WherebyVideoProviderQuery,
} from "./contracts.js";

const WHEREBY_DEFAULT_API_BASE_URL = "https://api.whereby.dev/v1";
const WHEREBY_FORM_DATA_OPERATION_UIDS = new Set([
  "PUT /rooms/{roomName}/theme/logo",
  "PUT /rooms/{roomName}/theme/room-background",
  "PUT /rooms/{roomName}/theme/room-knock-page-background",
]);
const WHEREBY_REQUIRED_QUERY_PARAMETERS_BY_OPERATION = new Map<string, readonly string[]>([
  ["GET /insights/room-sessions", ["roomName"]],
  ["GET /insights/participants", ["roomSessionId"]],
  ["GET /insights/participant", ["roomSessionId", "participantId"]],
]);

export function createWherebyVideoClient(options: WherebyVideoClientOptions = {}): WherebyVideoClient {
  const providerClient = requireWherebyVideoProviderClient(
    options.providerClient ?? createWherebyRestProviderClient(options),
  );
  const requestOperation = createProviderOperationCaller(providerClient);
  const fullApi = createWherebyFullApiGeneratedClient(requestOperation);
  const invoke = <T>(operationUidOrId: WherebyFullApiOperationUid | string, input?: WherebyOperationRequestInput) => {
    if (input === undefined) return requestOperation(operationUidOrId as WherebyFullApiOperationKey) as Promise<T>;
    return requestOperation(operationUidOrId as WherebyFullApiOperationKey, input as never) as Promise<T>;
  };

  return {
    providerClient,
    fullApi,
    requestOperation,
    createMeeting(input) {
      return invoke<WherebyMeetingResource>("POST /meetings", { body: wherebyMeetingBody(input) });
    },
    listMeetings(input = {}) {
      return invoke<WherebyListMeetingsResponse>("GET /meetings", {
        query: compactWherebyQuery({
          cursor: input.cursor,
          limit: input.limit,
          fields: input.fields,
        }),
      });
    },
    getMeeting(meetingId, input = {}) {
      return invoke<WherebyMeetingResource>("GET /meetings/{meetingId}", {
        pathParams: { meetingId },
        query: compactWherebyQuery({ fields: input.fields }),
      });
    },
    deleteMeeting(meetingId) {
      return invoke<Record<string, never>>("DELETE /meetings/{meetingId}", { pathParams: { meetingId } });
    },
    setRoomThemeTokens(roomName, input) {
      return invoke<Record<string, never>>("PUT /rooms/{roomName}/theme/tokens", {
        pathParams: { roomName },
        body: stripUndefined(input as WherebyVideoJsonObject),
      });
    },
    setRoomLogo(roomName, input) {
      return invoke<Record<string, never>>("PUT /rooms/{roomName}/theme/logo", {
        pathParams: { roomName },
        body: input,
      });
    },
    setRoomBackground(roomName, input) {
      return invoke<Record<string, never>>("PUT /rooms/{roomName}/theme/room-background", {
        pathParams: { roomName },
        body: input,
      });
    },
    setRoomKnockPageBackground(roomName, input) {
      return invoke<Record<string, never>>("PUT /rooms/{roomName}/theme/room-knock-page-background", {
        pathParams: { roomName },
        body: input,
      });
    },
    listRecordings(input = {}) {
      return invoke<WherebyListRecordingsResponse>("GET /recordings", { query: compactWherebyQuery(input) });
    },
    getRecording(recordingId) {
      return invoke<WherebyRecordingResource>("GET /recordings/{recordingId}", { pathParams: { recordingId } });
    },
    getRecordingAccessLink(recordingId, input = {}) {
      return invoke<WherebyAccessLinkResource>("GET /recordings/{recordingId}/access-link", {
        pathParams: { recordingId },
        query: compactWherebyQuery(input),
      });
    },
    bulkDeleteRecordings(recordingIds) {
      return invoke<Record<string, never>>("POST /recordings/bulk-delete", { body: { recordingIds } });
    },
    deleteRecording(recordingId) {
      return invoke<Record<string, never>>("DELETE /recordings/{recordingId}", { pathParams: { recordingId } });
    },
    createTranscription(input) {
      return invoke<WherebyTranscriptionResource>("POST /transcriptions", { body: input });
    },
    listTranscriptions(input = {}) {
      return invoke<WherebyListTranscriptionsResponse>("GET /transcriptions", { query: compactWherebyQuery(input) });
    },
    getTranscription(transcriptionId) {
      return invoke<WherebyTranscriptionResource>("GET /transcriptions/{transcriptionId}", { pathParams: { transcriptionId } });
    },
    getTranscriptionAccessLink(transcriptionId, input = {}) {
      return invoke<WherebyAccessLinkResource>("GET /transcriptions/{transcriptionId}/access-link", {
        pathParams: { transcriptionId },
        query: compactWherebyQuery(input),
      });
    },
    bulkDeleteTranscriptions(transcriptionIds) {
      return invoke<Record<string, never>>("POST /transcriptions/bulk-delete", { body: { transcriptionIds } });
    },
    deleteTranscription(transcriptionId) {
      return invoke<Record<string, never>>("DELETE /transcriptions/{transcriptionId}", { pathParams: { transcriptionId } });
    },
    createSummary(input) {
      return invoke<WherebySummaryResource>("POST /summaries", { body: input });
    },
    listSummaries(input = {}) {
      return invoke<WherebyListSummariesResponse>("GET /summaries", { query: compactWherebyQuery(input) });
    },
    getSummary(summaryId) {
      return invoke<WherebySummaryResource>("GET /summaries/{summaryId}", { pathParams: { summaryId } });
    },
    deleteSummary(summaryId) {
      return invoke<Record<string, never>>("DELETE /summaries/{summaryId}", { pathParams: { summaryId } });
    },
    getRoomInsights(input = {}) {
      return invoke<WherebyInsightsListResponse>("GET /insights/rooms", { query: compactWherebyQuery(input) });
    },
    getRoomSessionInsights(input) {
      return invoke<WherebyInsightsListResponse>("GET /insights/room-sessions", { query: compactWherebyQuery(input) });
    },
    listParticipants(input) {
      return invoke<WherebyInsightsListResponse>("GET /insights/participants", { query: compactWherebyQuery(input) });
    },
    getParticipantInsights(input) {
      return invoke<WherebyVideoJsonObject[]>("GET /insights/participant", { query: compactWherebyQuery(input) });
    },
  };
}

export function createWherebyRestProviderClient(options: Omit<WherebyVideoClientOptions, "providerClient">): WherebyVideoProviderClient {
  if (!options.apiKey) return createUnconfiguredWherebyVideoProviderClient();
  return {
    requestOperation(operationUidOrId, input) {
      const operation = resolveWherebyFullApiOperation(operationUidOrId);
      const validatedInput = validateWherebyOperationInput(operation, input);
      return requestWherebyRestOperation(operation, validatedInput, options);
    },
  };
}

export function createUnconfiguredWherebyVideoProviderClient(): WherebyVideoProviderClient {
  const failClosed: WherebyVideoProviderClient["requestOperation"] = async () => {
    throw new Error(
      "Pass Whereby API credentials to createWherebyVideoClient({ apiKey }) or a host-provided " +
      "Whereby providerClient to createWherebyVideoClient({ providerClient }).",
    );
  };
  return { requestOperation: failClosed };
}

function requireWherebyVideoProviderClient(client: WherebyVideoProviderClient): WherebyVideoProviderClient {
  if (!client || typeof client.requestOperation !== "function") {
    throw new Error(
      "Whereby requires a providerClient implementing requestOperation() or an apiKey for the built-in REST adapter.",
    );
  }
  return client;
}

function createProviderOperationCaller(providerClient: WherebyVideoProviderClient): WherebyGeneratedOperationCaller {
  return (async (operationUidOrId: WherebyFullApiOperationUid | string, input?: WherebyOperationRequestInput) => {
    const operation = resolveWherebyFullApiOperation(operationUidOrId);
    const validatedInput = validateWherebyOperationInput(operation, input);
    if (validatedInput === undefined) {
      return providerClient.requestOperation(operation.uid as WherebyFullApiOperationKey);
    }
    return providerClient.requestOperation(operation.uid as WherebyFullApiOperationKey, validatedInput);
  }) as WherebyGeneratedOperationCaller;
}

function resolveWherebyFullApiOperation(operationUidOrId: WherebyFullApiOperationUid | string) {
  const operation = WHEREBY_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
    ?? WHEREBY_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
  if (!operation) throw new Error(`Unknown Whereby provider operation '${operationUidOrId}'.`);
  return operation;
}

function validateWherebyOperationPathParams(
  operation: WherebyFullApiOperation,
  input: WherebyOperationRequestInput | undefined,
) {
  const expectedPathParams = wherebyOperationPathParameterNames(operation);
  const providedPathParams = input?.pathParams;
  if (expectedPathParams.length === 0) {
    const providedKeys = Object.keys(providedPathParams ?? {});
    if (providedKeys.length > 0) {
      throw wherebyValidationError(`Whereby operation '${operation.uid}' does not accept path parameters.`);
    }
    return;
  }

  for (const parameterName of expectedPathParams) {
    if (!parameterName) continue;
    const value = providedPathParams?.[parameterName];
    if (value === undefined) throw wherebyValidationError(`Missing Whereby path parameter '${parameterName}'.`);
    if (!isValidWherebyPathParameterValue(value)) {
      throw wherebyValidationError(`Invalid Whereby path parameter '${parameterName}'.`);
    }
  }

  const unexpectedPathParam = Object.keys(providedPathParams ?? {})
    .find((parameterName) => !expectedPathParams.includes(parameterName));
  if (unexpectedPathParam) {
    throw wherebyValidationError(
      `Unknown Whereby path parameter '${unexpectedPathParam}' for operation '${operation.uid}'.`,
    );
  }
}

function validateWherebyOperationInput(
  operation: WherebyFullApiOperation,
  input: WherebyOperationRequestInput | undefined,
): WherebyOperationRequestInput | undefined {
  if (input !== undefined && !isPlainRecord(input)) {
    throw wherebyValidationError("Whereby operation input must be an object.");
  }
  const typedInput = input as WherebyOperationRequestInput | undefined;
  validateWherebyRecordInput("pathParams", typedInput?.pathParams);
  validateWherebyRecordInput("query", typedInput?.query);
  validateWherebyHeaders(typedInput?.headers);
  validateWherebyOperationPathParams(operation, typedInput);
  validateWherebyRequiredQueryParameters(operation, typedInput);
  validateWherebyQueryValues(typedInput?.query);
  validateWherebyOperationBody(operation, typedInput?.body);
  return typedInput;
}

function validateWherebyRecordInput(
  field: "pathParams" | "query",
  value: unknown,
) {
  if (value !== undefined && !isPlainRecord(value)) {
    throw wherebyValidationError(`Whereby operation ${field} must be an object.`);
  }
}

function validateWherebyRequiredQueryParameters(
  operation: WherebyFullApiOperation,
  input: WherebyOperationRequestInput | undefined,
) {
  const requiredQueryParameters = WHEREBY_REQUIRED_QUERY_PARAMETERS_BY_OPERATION.get(operation.uid) ?? [];
  for (const parameterName of requiredQueryParameters) {
    const value = input?.query?.[parameterName];
    if (value === undefined || value === null || value === "") {
      throw wherebyValidationError(`Missing Whereby query parameter '${parameterName}'.`);
    }
  }
}

function validateWherebyHeaders(headers: Record<string, string> | undefined) {
  if (headers === undefined) return;
  if (!isPlainRecord(headers)) throw wherebyValidationError("Whereby operation headers must be an object.");
  for (const [headerName, headerValue] of Object.entries(headers)) {
    if (headerName.trim() === "") throw wherebyValidationError("Whereby operation headers must not be empty.");
    if (typeof headerValue !== "string") {
      throw wherebyValidationError(`Whereby operation header '${headerName}' must be a string.`);
    }
  }
}

function validateWherebyQueryValues(query: WherebyVideoProviderQuery | undefined) {
  for (const [key, value] of Object.entries(query ?? {})) {
    validateWherebyQueryValue(value, `query.${key}`);
  }
}

function validateWherebyQueryValue(value: unknown, path: string) {
  if (value === undefined || value === null) return;
  const valueType = typeof value;
  if (valueType === "string" || valueType === "number" || valueType === "boolean") return;
  if (Array.isArray(value)) {
    for (const [index, item] of value.entries()) {
      validateWherebyQueryValue(item, `${path}[${index}]`);
    }
    return;
  }
  if (isPlainRecord(value)) {
    for (const [key, nestedValue] of Object.entries(value)) {
      validateWherebyQueryValue(nestedValue, `${path}.${key}`);
    }
    return;
  }
  throw wherebyValidationError(`Whereby operation ${path} must be JSON-serializable query data.`);
}

function validateWherebyOperationBody(
  operation: WherebyFullApiOperation,
  body: WherebyOperationRequestInput["body"] | undefined,
) {
  if (body === undefined) return;
  if (operation.method === "GET" || operation.method === "DELETE") {
    throw wherebyValidationError(`Whereby operation '${operation.uid}' does not accept a request body.`);
  }
  if (isWherebyFormData(body)) {
    if (!WHEREBY_FORM_DATA_OPERATION_UIDS.has(operation.uid)) {
      throw wherebyValidationError(`Whereby operation '${operation.uid}' does not accept a FormData body.`);
    }
    return;
  }
  if (!isPlainRecord(body)) {
    throw wherebyValidationError(
      "Whereby operation body must be a JSON object or FormData for supported theme media operations.",
    );
  }
}

function wherebyOperationPathParameterNames(operation: WherebyFullApiOperation) {
  return [...operation.path.matchAll(/\{([^}]+)\}/g)]
    .map((match) => match[1])
    .filter((parameterName): parameterName is string => Boolean(parameterName));
}

function isValidWherebyPathParameterValue(value: unknown) {
  if (value === null || value === "") return false;
  const valueType = typeof value;
  return valueType === "string" || valueType === "number" || valueType === "boolean";
}

function isWherebyFormData(value: unknown): value is FormData {
  return typeof FormData !== "undefined" && value instanceof FormData;
}

function wherebyValidationError(message: string) {
  return new IntegrationError(
    "provider-validation",
    message,
    { providerPackageId: "video.whereby", provider: "whereby" },
  );
}

async function requestWherebyRestOperation(
  operation: WherebyFullApiOperation,
  input: WherebyOperationRequestInput | undefined,
  options: Omit<WherebyVideoClientOptions, "providerClient">,
) {
  if (!options.apiKey) {
    throw new IntegrationError(
      "credential-missing",
      "Whereby API key is required for the built-in REST adapter.",
      { providerPackageId: "video.whereby", provider: "whereby" },
    );
  }
  if (!(input?.body instanceof FormData)) {
    try {
      return await providerJsonRequest({
        baseUrl: options.baseUrl ?? WHEREBY_DEFAULT_API_BASE_URL,
        path: operation.path,
        method: operation.method,
        pathParams: input?.pathParams,
        query: flattenWherebyQuery(input?.query),
        body: input?.body,
        authorizationHeader: `Bearer ${options.apiKey}`,
        headers: input?.headers,
        fetch: options.fetch,
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        retry: options.retry,
        providerName: `Whereby REST operation '${operation.uid}'`,
      });
    } catch (error) {
      throw normalizeProviderRequestError(error, {
        providerPackageId: "video.whereby",
        provider: "whereby",
      });
    }
  }
  const body = input.body;
  const response = await (options.fetch ?? fetch)(wherebyOperationUrl(options.baseUrl ?? WHEREBY_DEFAULT_API_BASE_URL, operation.path, input), {
    method: operation.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${options.apiKey}`,
      ...(input?.headers ?? {}),
    },
    body,
    ...(options.signal ? { signal: options.signal } : {}),
  });
  return parseWherebyRestResponse(response, operation.uid);
}

function wherebyOperationUrl(baseUrl: string, path: string, input: WherebyOperationRequestInput | undefined) {
  const resolvedPath = expandWherebyPath(path, input?.pathParams ?? {});
  const url = new URL(resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`, normalizedBaseUrl(baseUrl));
  appendWherebyQuery(url.searchParams, input?.query);
  return url.toString();
}

function expandWherebyPath(path: string, pathParams: Record<string, string | number | boolean | undefined>) {
  return path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) {
      throw new IntegrationError(
        "provider-validation",
        `Missing Whereby path parameter '${key}'.`,
        { providerPackageId: "video.whereby", provider: "whereby" },
      );
    }
    return encodeURIComponent(String(value));
  });
}

function appendWherebyQuery(params: URLSearchParams, query: WherebyVideoProviderQuery | undefined, prefix?: string) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null) continue;
    const queryKey = prefix ? `${prefix}[${key}]` : key;
    if (Array.isArray(value)) {
      for (const item of value) params.append(queryKey, String(item));
      continue;
    }
    if (typeof value === "object") {
      appendWherebyQuery(params, value as WherebyVideoProviderQuery, queryKey);
      continue;
    }
    params.set(queryKey, String(value));
  }
}

async function parseWherebyRestResponse(response: Response, operation: string) {
  const payload = await parseWherebyResponsePayload(response);
  if (!response.ok) {
    throw new IntegrationError(
      providerErrorCode(response.status),
      `Whereby REST operation '${operation}' failed with HTTP ${response.status}.`,
      {
        providerPackageId: "video.whereby",
        provider: "whereby",
        statusCode: response.status,
        retryable: response.status === 429 || response.status >= 500,
        details: { payload },
      },
    );
  }
  return payload;
}

function flattenWherebyQuery(query: WherebyVideoProviderQuery | undefined) {
  const flattened: Record<string, ProviderQueryValue> = {};
  flattenWherebyQueryInto(flattened, query);
  return flattened;
}

function flattenWherebyQueryInto(
  target: Record<string, ProviderQueryValue>,
  query: WherebyVideoProviderQuery | undefined,
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
      flattenWherebyQueryInto(target, value as WherebyVideoProviderQuery, queryKey);
      continue;
    }
    target[queryKey] = value;
  }
}

function normalizeProviderRequestError(
  error: unknown,
  context: { providerPackageId: string; provider: string },
) {
  const normalized = normalizeIntegrationError(error, {
    ...context,
    statusCode: readErrorStatus(error),
    retryable: readErrorRetryable(error),
    details: readErrorPayload(error),
  });
  return normalized;
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

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return isRecord(value) && !Array.isArray(value) && !isWherebyFormData(value);
}

async function parseWherebyResponsePayload(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return { raw: text };
  }
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

function compactWherebyQuery(input: object | undefined): WherebyVideoProviderQuery {
  return stripUndefined((input ?? {}) as WherebyVideoJsonObject) as WherebyVideoProviderQuery;
}

function stripUndefined(input: WherebyVideoJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}

function wherebyMeetingBody(input: WherebyCreateMeetingInput) {
  return stripUndefined({
    endDate: input.endDate,
    isLocked: input.isLocked,
    roomMode: input.roomMode,
    roomNamePrefix: input.roomNamePrefix,
    roomNamePattern: input.roomNamePattern,
    templateType: input.templateType,
    fields: input.fields,
    recording: input.recording,
    liveTranscription: input.liveTranscription,
    streaming: input.streaming,
    ...(input.additionalFields ?? {}),
  });
}
