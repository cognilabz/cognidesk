import {
  createWherebyFullApiGeneratedClient,
  type WherebyGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  WHEREBY_FULL_API_OPERATION_BY_ID,
  WHEREBY_FULL_API_OPERATION_BY_UID,
  type WherebyFullApiOperationUid,
} from "./full-api-operations.generated.js";
import type {
  WherebyCreateMeetingInput,
  WherebyHttpMethod,
  WherebyOperationRequestInput,
  WherebyResource,
  WherebyVideoClient,
  WherebyVideoClientOptions,
  WherebyVideoJsonObject,
} from "./contracts.js";
import {
  applyWherebyAccessLinkQuery,
  applyWherebyCursorQuery,
  stripUndefined,
  wherebyOperationUrl,
  wherebyRequest,
  wherebyUrl,
} from "./request.js";

export function createWherebyVideoClient(options: WherebyVideoClientOptions): WherebyVideoClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.whereby.dev/v1").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = WherebyResource>(
    method: WherebyHttpMethod,
    path: string,
    input: WherebyOperationRequestInput = {},
  ) => wherebyRequest<T>({
    url: wherebyOperationUrl(apiBaseUrl, path, input.pathParams, input.query),
    method,
    options,
    fetch: fetchImpl,
    body: input.body,
    headers: input.headers,
  });
  const requestOperation = async (
    operationUidOrId: WherebyFullApiOperationUid | string,
    input: WherebyOperationRequestInput = {},
  ) => {
    const operation = WHEREBY_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? WHEREBY_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Whereby REST OpenAPI operation '${operationUidOrId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createWherebyFullApiGeneratedClient(requestOperation as WherebyGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as WherebyGeneratedOperationCaller,
    async createMeeting(input) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, "/meetings"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: wherebyMeetingBody(input),
      });
    },
    async listMeetings(input = {}) {
      const url = wherebyUrl(apiBaseUrl, "/meetings");
      if (input.cursor) url.searchParams.set("cursor", input.cursor);
      if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
      for (const field of input.fields ?? []) url.searchParams.append("fields", field);
      return wherebyRequest({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getMeeting(meetingId, input = {}) {
      const url = wherebyUrl(apiBaseUrl, `/meetings/${encodeURIComponent(meetingId)}`);
      for (const field of input.fields ?? []) url.searchParams.append("fields", field);
      return wherebyRequest({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async deleteMeeting(meetingId) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, `/meetings/${encodeURIComponent(meetingId)}`),
        method: "DELETE",
        options,
        fetch: fetchImpl,
      });
    },
    async setRoomThemeTokens(roomName, input) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, `/rooms/${encodeURIComponent(roomName)}/theme/tokens`),
        method: "PUT",
        options,
        fetch: fetchImpl,
        body: stripUndefined(input as WherebyVideoJsonObject),
      });
    },
    async setRoomLogo(roomName, input) {
      return request("PUT", "/rooms/{roomName}/theme/logo", {
        pathParams: { roomName },
        body: input,
      });
    },
    async setRoomBackground(roomName, input) {
      return request("PUT", "/rooms/{roomName}/theme/room-background", {
        pathParams: { roomName },
        body: input,
      });
    },
    async setRoomKnockPageBackground(roomName, input) {
      return request("PUT", "/rooms/{roomName}/theme/room-knock-page-background", {
        pathParams: { roomName },
        body: input,
      });
    },
    async listRecordings(input = {}) {
      const url = wherebyUrl(apiBaseUrl, "/recordings");
      applyWherebyCursorQuery(url, input);
      return wherebyRequest({ url, method: "GET", options, fetch: fetchImpl });
    },
    async getRecording(recordingId) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, `/recordings/${encodeURIComponent(recordingId)}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getRecordingAccessLink(recordingId, input = {}) {
      const url = wherebyUrl(apiBaseUrl, `/recordings/${encodeURIComponent(recordingId)}/access-link`);
      applyWherebyAccessLinkQuery(url, input);
      return wherebyRequest({ url, method: "GET", options, fetch: fetchImpl });
    },
    async bulkDeleteRecordings(recordingIds) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, "/recordings/bulk-delete"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: { recordingIds },
      });
    },
    async deleteRecording(recordingId) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, `/recordings/${encodeURIComponent(recordingId)}`),
        method: "DELETE",
        options,
        fetch: fetchImpl,
      });
    },
    async createTranscription(input) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, "/transcriptions"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: input,
      });
    },
    async listTranscriptions(input = {}) {
      const url = wherebyUrl(apiBaseUrl, "/transcriptions");
      applyWherebyCursorQuery(url, input);
      return wherebyRequest({ url, method: "GET", options, fetch: fetchImpl });
    },
    async getTranscription(transcriptionId) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, `/transcriptions/${encodeURIComponent(transcriptionId)}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getTranscriptionAccessLink(transcriptionId, input = {}) {
      const url = wherebyUrl(apiBaseUrl, `/transcriptions/${encodeURIComponent(transcriptionId)}/access-link`);
      applyWherebyAccessLinkQuery(url, input);
      return wherebyRequest({ url, method: "GET", options, fetch: fetchImpl });
    },
    async bulkDeleteTranscriptions(transcriptionIds) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, "/transcriptions/bulk-delete"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: { transcriptionIds },
      });
    },
    async deleteTranscription(transcriptionId) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, `/transcriptions/${encodeURIComponent(transcriptionId)}`),
        method: "DELETE",
        options,
        fetch: fetchImpl,
      });
    },
    async createSummary(input) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, "/summaries"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: input,
      });
    },
    async listSummaries(input = {}) {
      const url = wherebyUrl(apiBaseUrl, "/summaries");
      applyWherebyCursorQuery(url, input);
      return wherebyRequest({ url, method: "GET", options, fetch: fetchImpl });
    },
    async getSummary(summaryId) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, `/summaries/${encodeURIComponent(summaryId)}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async deleteSummary(summaryId) {
      return wherebyRequest({
        url: wherebyUrl(apiBaseUrl, `/summaries/${encodeURIComponent(summaryId)}`),
        method: "DELETE",
        options,
        fetch: fetchImpl,
      });
    },
    async getRoomInsights(input = {}) {
      return request("GET", "/insights/rooms", { query: input });
    },
    async getRoomSessionInsights(input) {
      return request("GET", "/insights/room-sessions", { query: input });
    },
    async listParticipants(input) {
      return request("GET", "/insights/participants", { query: input });
    },
    async getParticipantInsights(input) {
      return request("GET", "/insights/participant", { query: input });
    },
  };
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
