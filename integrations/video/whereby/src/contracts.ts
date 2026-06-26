import type {
  WherebyFullApiGeneratedClient,
  WherebyFullApiOperationKey,
  WherebyGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export interface WherebyProviderJsonRetryOptions {
  attempts?: number | undefined;
  statusCodes?: readonly number[] | undefined;
  baseDelayMs?: number | undefined;
  maxDelayMs?: number | undefined;
}

export type WherebyVideoJsonPrimitive = string | number | boolean | null;
export type WherebyVideoJsonValue =
  | WherebyVideoJsonPrimitive
  | WherebyVideoJsonObject
  | readonly WherebyVideoJsonValue[];
export type WherebyVideoProviderExtensionValue = WherebyVideoJsonValue | object | undefined;
export interface WherebyVideoJsonObject {
  [key: string]: WherebyVideoProviderExtensionValue;
}
export type WherebyVideoProviderPayload = WherebyVideoJsonObject | object;
export type WherebyVideoProviderQuery = Record<string, WherebyVideoProviderExtensionValue>;
export interface WherebyVideoProviderResponse extends WherebyVideoJsonObject {}
export interface WherebyVideoProviderExtensionFields extends WherebyVideoJsonObject {}

export interface WherebyVideoClientOptions {
  providerClient?: WherebyVideoProviderClient | undefined;
  apiKey?: string | undefined;
  baseUrl?: string | undefined;
  fetch?: typeof fetch | undefined;
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  retry?: number | WherebyProviderJsonRetryOptions | undefined;
}

export interface WherebyCredentialStatusInput {
  providerClientConfigured?: boolean;
  apiAccessConfigured?: boolean;
  apiKey?: string;
  organizationId?: string;
  subdomain?: string;
  roomTemplateConfigured?: boolean;
  webhookSigningSecret?: string;
  scopes?: string[];
}

export type WherebyRoomMode = "normal" | "group";
export type WherebyRoomNamePattern = "uuid" | "human-short";
export type WherebyMeetingField = "hostRoomUrl" | "viewerRoomUrl";
export type WherebyTemplateType = "viewerMode";
export type WherebyStorageProvider = "s3" | "whereby";
export type WherebyStorageAuthenticationType = "accessKey" | "roleBased";
export type WherebyRecordingType = "none" | "local" | "cloud";
export type WherebyRecordingStartTrigger = "none" | "prompt" | "automatic" | "automatic-2nd-participant";
export type WherebyLiveTranscriptionStartTrigger = "none" | "manual" | "automatic" | "automatic-2nd-participant";
export type WherebyStreamingStartTrigger = "none" | "prompt" | "automatic";

export interface WherebyStorageDestination {
  provider: WherebyStorageProvider;
  authenticationType?: WherebyStorageAuthenticationType;
  bucket?: string;
  accessKeyId?: string;
  accessKeySecret?: string;
  region?: string;
  oidcRoleArn?: string;
}

export interface WherebyRecordingOptions {
  type: WherebyRecordingType;
  destination?: WherebyStorageDestination | null;
  startTrigger?: WherebyRecordingStartTrigger | null;
}

export interface WherebyLiveTranscriptionOptions {
  destination?: WherebyStorageDestination | null;
  startTrigger?: WherebyLiveTranscriptionStartTrigger | null;
  language?: string | null;
  liveCaptions?: boolean;
}

export interface WherebyStreamingOptions {
  destination?: { url: string } | null;
  startTrigger?: WherebyStreamingStartTrigger | null;
}

export interface WherebyCreateMeetingInput {
  endDate: string;
  isLocked?: boolean;
  roomMode?: WherebyRoomMode;
  roomNamePrefix?: string;
  roomNamePattern?: WherebyRoomNamePattern;
  templateType?: WherebyTemplateType;
  fields?: WherebyMeetingField[];
  recording?: WherebyRecordingOptions | null;
  liveTranscription?: WherebyLiveTranscriptionOptions | null;
  streaming?: WherebyStreamingOptions | null;
  additionalFields?: WherebyVideoProviderExtensionFields;
}

export interface WherebyMeetingResource {
  meetingId: string;
  roomName?: string;
  roomUrl: string;
  startDate?: string;
  endDate: string;
  hostRoomUrl?: string;
  viewerRoomUrl?: string;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyListMeetingsInput {
  cursor?: string;
  limit?: number;
  fields?: WherebyMeetingField[];
}

export interface WherebyListMeetingsResponse {
  results: WherebyMeetingResource[];
  cursor: string | null;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyCursorListInput {
  cursor?: string;
  limit?: number;
}

export interface WherebyGetMeetingInput {
  fields?: WherebyMeetingField[];
}

export interface WherebyRoomThemeTokensInput {
  tokens?: {
    colors?: {
      primary?: string;
      secondary?: string;
      focus?: string;
      [key: string]: WherebyVideoProviderExtensionValue;
    };
    [key: string]: WherebyVideoProviderExtensionValue;
  };
  tokensPreset?: "custom" | "default";
}

export type WherebyThemeMediaInput = FormData | WherebyVideoJsonObject;

export interface WherebyInsightsQueryInput {
  cursor?: string;
  limit?: number;
  sortBy?: string;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyParticipantInsightsInput extends WherebyInsightsQueryInput {
  roomSessionId?: string;
  participantId?: string;
  externalId?: string;
}

export interface WherebyInsightsListResponse {
  results: WherebyVideoJsonObject[];
  cursor: string | null;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyRecordingResource {
  recordingId: string;
  roomSessionId?: string;
  roomName?: string;
  filename?: string;
  startDate?: string;
  endDate?: string;
  sizeInMegaBytes?: number;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyListRecordingsResponse {
  results: WherebyRecordingResource[];
  cursor: string | null;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyAccessLinkInput {
  validForSeconds?: number;
}

export interface WherebyAccessLinkResource {
  accessLink: string;
  expires: number;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyCreateTranscriptionInput {
  recordingId: string;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyTranscriptionResource {
  transcriptionId: string;
  recordingId?: string;
  roomSessionId?: string;
  roomName?: string;
  createdAt?: string;
  startDate?: string;
  endDate?: string;
  state?: "ready" | "failed" | "in_progress";
  durationInSeconds?: number;
  type?: "LIVE_TRANSCRIPTION" | "RECORDING_TRANSCRIPTION";
  storageType?: "WHEREBY_HOSTED" | "SELF_HOSTED";
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyListTranscriptionsResponse {
  results: WherebyTranscriptionResource[];
  cursor: string | null;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyCreateSummaryInput {
  transcriptionId: string;
  template?: string;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebySummaryResource {
  summaryId: string;
  transcriptionId?: string;
  state?: string;
  text?: string;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyListSummariesResponse {
  results: WherebySummaryResource[];
  cursor: string | null;
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyVideoProviderClient {
  requestOperation(operationKey: WherebyFullApiOperationKey, input?: WherebyOperationRequestInput): Promise<unknown>;
}

export interface WherebyVideoClient {
  providerClient: WherebyVideoProviderClient;
  fullApi: WherebyFullApiGeneratedClient;
  requestOperation: WherebyGeneratedOperationCaller;
  createMeeting(input: WherebyCreateMeetingInput): Promise<WherebyMeetingResource>;
  listMeetings(input?: WherebyListMeetingsInput): Promise<WherebyListMeetingsResponse>;
  getMeeting(meetingId: string, input?: WherebyGetMeetingInput): Promise<WherebyMeetingResource>;
  deleteMeeting(meetingId: string): Promise<Record<string, never>>;
  setRoomThemeTokens(roomName: string, input: WherebyRoomThemeTokensInput): Promise<Record<string, never>>;
  setRoomLogo(roomName: string, input: WherebyThemeMediaInput): Promise<Record<string, never>>;
  setRoomBackground(roomName: string, input: WherebyThemeMediaInput): Promise<Record<string, never>>;
  setRoomKnockPageBackground(roomName: string, input: WherebyThemeMediaInput): Promise<Record<string, never>>;
  listRecordings(input?: WherebyCursorListInput): Promise<WherebyListRecordingsResponse>;
  getRecording(recordingId: string): Promise<WherebyRecordingResource>;
  getRecordingAccessLink(recordingId: string, input?: WherebyAccessLinkInput): Promise<WherebyAccessLinkResource>;
  bulkDeleteRecordings(recordingIds: string[]): Promise<Record<string, never>>;
  deleteRecording(recordingId: string): Promise<Record<string, never>>;
  createTranscription(input: WherebyCreateTranscriptionInput): Promise<WherebyTranscriptionResource>;
  listTranscriptions(input?: WherebyCursorListInput): Promise<WherebyListTranscriptionsResponse>;
  getTranscription(transcriptionId: string): Promise<WherebyTranscriptionResource>;
  getTranscriptionAccessLink(transcriptionId: string, input?: WherebyAccessLinkInput): Promise<WherebyAccessLinkResource>;
  bulkDeleteTranscriptions(transcriptionIds: string[]): Promise<Record<string, never>>;
  deleteTranscription(transcriptionId: string): Promise<Record<string, never>>;
  createSummary(input: WherebyCreateSummaryInput): Promise<WherebySummaryResource>;
  listSummaries(input?: WherebyCursorListInput): Promise<WherebyListSummariesResponse>;
  getSummary(summaryId: string): Promise<WherebySummaryResource>;
  deleteSummary(summaryId: string): Promise<Record<string, never>>;
  getRoomInsights(input?: WherebyInsightsQueryInput): Promise<WherebyInsightsListResponse>;
  getRoomSessionInsights(input: WherebyInsightsQueryInput & { roomName: string }): Promise<WherebyInsightsListResponse>;
  listParticipants(input: WherebyParticipantInsightsInput): Promise<WherebyInsightsListResponse>;
  getParticipantInsights(input: WherebyParticipantInsightsInput & { roomSessionId: string; participantId: string }): Promise<WherebyVideoJsonObject[]>;
}

export interface WherebyLiveCheckOptions extends WherebyVideoClientOptions {
  client?: Pick<WherebyVideoClient, "listMeetings">;
}

export interface ValidateWherebyWebhookSignatureInput {
  webhookSigningSecret: string;
  rawBody: string | Buffer;
  signatureHeader: string;
  nowSeconds?: number;
  timestampToleranceSeconds?: number;
}

export interface ParseWherebyWebhookRequestOptions {
  webhookSigningSecret?: string;
  requireSignature?: boolean;
  verifier?: (input: {
    request: Request;
    rawBody: string;
    signatureHeader: string | null;
  }) => boolean | Promise<boolean>;
  nowSeconds?: number;
  timestampToleranceSeconds?: number;
}

export interface WherebyWebhookEvent {
  id: string;
  apiVersion?: string;
  createdAt?: string;
  type: string;
  data?: {
    meetingId?: string;
    roomName?: string;
    subdomain?: string;
    roomSessionId?: string;
    participantId?: string;
    displayName?: string;
    roleName?: string;
    metadata?: string;
    externalId?: string;
    recordingId?: string;
    transcriptionId?: string;
    status?: string;
    [key: string]: WherebyVideoProviderExtensionValue;
  };
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebySignedWebhookRequest {
  rawBody: string;
  contentType?: string;
  signatureHeader?: string;
  verified: boolean;
  json?: WherebyWebhookEvent;
  eventType?: string;
  data?: WherebyWebhookEvent["data"];
}

export type WherebyHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface WherebyResource {
  [key: string]: WherebyVideoProviderExtensionValue;
}

export interface WherebyOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: WherebyVideoProviderQuery | undefined;
  body?: WherebyVideoProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}
