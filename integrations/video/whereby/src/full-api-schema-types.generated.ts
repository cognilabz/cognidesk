// Generated provider schema DTOs for WherebyFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type WherebyFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type WherebyFullApiSchemaJsonValue = WherebyFullApiSchemaJsonPrimitive | readonly WherebyFullApiSchemaJsonValue[] | { readonly [key: string]: WherebyFullApiSchemaJsonValue | undefined };

export type WherebyFullApiSchemaFields = ReadonlyArray<"hostRoomUrl" | "viewerRoomUrl">;

export type WherebyFullApiSchemaMeeting = {
  meetingId: string;
  roomName?: string;
  roomUrl: string;
  startDate?: string;
  endDate: string;
  hostRoomUrl?: string;
  viewerRoomUrl?: string;
};

export type WherebyFullApiSchemaRecording = {};

export type WherebyFullApiSchemaTranscription = {
  transcriptionId: string;
  roomSessionId: string;
  filename?: string;
  roomName: string;
  startDate: string;
  endDate: string;
  state: "ready" | "failed" | "in_progress";
  createdAt: string;
  durationInSeconds?: number;
  type: "LIVE_TRANSCRIPTION" | "RECORDING_TRANSCRIPTION";
  storageType?: "WHEREBY_HOSTED" | "SELF_HOSTED";
};

export type WherebyFullApiSchemaSummary = {};

export interface WherebyFullApiOperationQueryMap {
  "POST /meetings": {};
  "GET /meetings": {
  cursor?: string;
  limit?: number;
  fields?: WherebyFullApiSchemaFields;
};
  "DELETE /meetings/{meetingId}": {};
  "GET /meetings/{meetingId}": {
  fields?: WherebyFullApiSchemaFields;
};
  "GET /recordings": {
  roomName?: string;
  cursor?: string;
  limit?: number;
  sortBy?: WherebyFullApiSchemaJsonValue;
};
  "DELETE /recordings/{recordingId}": {};
  "GET /recordings/{recordingId}": {};
  "GET /recordings/{recordingId}/access-link": {
  validForSeconds?: number;
};
  "POST /recordings/bulk-delete": {};
  "POST /transcriptions": {};
  "GET /transcriptions": {
  roomName?: string;
  cursor?: string;
  limit?: number;
  sortBy?: WherebyFullApiSchemaJsonValue;
};
  "DELETE /transcriptions/{transcriptionId}": {};
  "GET /transcriptions/{transcriptionId}": {};
  "GET /transcriptions/{transcriptionId}/access-link": {
  validForSeconds?: number;
};
  "POST /transcriptions/bulk-delete": {};
  "POST /summaries": {};
  "GET /summaries": {
  cursor?: string;
  limit?: number;
  sortBy?: WherebyFullApiSchemaJsonValue;
};
  "DELETE /summaries/{summaryId}": {};
  "GET /summaries/{summaryId}": {};
  "PUT /rooms/{roomName}/theme/tokens": {};
  "PUT /rooms/{roomName}/theme/logo": {};
  "PUT /rooms/{roomName}/theme/room-background": {};
  "PUT /rooms/{roomName}/theme/room-knock-page-background": {};
  "GET /insights/rooms": {
  roomName?: {
  exact?: string;
  startsWith?: string;
  contains?: string;
};
  createdAt?: {
  from?: string;
  to?: string;
};
  sortBy?: WherebyFullApiSchemaJsonValue;
  cursor?: WherebyFullApiSchemaJsonValue;
  limit?: number;
};
  "GET /insights/room-sessions": {
  roomName: WherebyFullApiSchemaJsonValue;
  roomSessionId?: WherebyFullApiSchemaJsonValue;
  sortBy?: WherebyFullApiSchemaJsonValue;
  cursor?: WherebyFullApiSchemaJsonValue;
  limit?: number;
};
  "GET /insights/participants": {
  roomSessionId: WherebyFullApiSchemaJsonValue;
  externalId?: WherebyFullApiSchemaJsonValue;
  sortBy?: WherebyFullApiSchemaJsonValue;
  cursor?: WherebyFullApiSchemaJsonValue;
  limit?: number;
};
  "GET /insights/participant": {
  roomSessionId: WherebyFullApiSchemaJsonValue;
  participantId: WherebyFullApiSchemaJsonValue;
};
}

export interface WherebyFullApiOperationQueryRequiredMap {
  "POST /meetings": false;
  "GET /meetings": false;
  "DELETE /meetings/{meetingId}": false;
  "GET /meetings/{meetingId}": false;
  "GET /recordings": false;
  "DELETE /recordings/{recordingId}": false;
  "GET /recordings/{recordingId}": false;
  "GET /recordings/{recordingId}/access-link": false;
  "POST /recordings/bulk-delete": false;
  "POST /transcriptions": false;
  "GET /transcriptions": false;
  "DELETE /transcriptions/{transcriptionId}": false;
  "GET /transcriptions/{transcriptionId}": false;
  "GET /transcriptions/{transcriptionId}/access-link": false;
  "POST /transcriptions/bulk-delete": false;
  "POST /summaries": false;
  "GET /summaries": false;
  "DELETE /summaries/{summaryId}": false;
  "GET /summaries/{summaryId}": false;
  "PUT /rooms/{roomName}/theme/tokens": false;
  "PUT /rooms/{roomName}/theme/logo": false;
  "PUT /rooms/{roomName}/theme/room-background": false;
  "PUT /rooms/{roomName}/theme/room-knock-page-background": false;
  "GET /insights/rooms": false;
  "GET /insights/room-sessions": true;
  "GET /insights/participants": true;
  "GET /insights/participant": true;
}

export interface WherebyFullApiOperationRequestBodyMap {
  "POST /meetings": {
  endDate: string;
  startDate?: string;
  isLocked?: boolean;
  roomMode?: "group" | "normal";
  roomNamePrefix?: string;
  roomNamePattern?: "uuid" | "human-short";
  templateType?: "viewerMode";
  recording?: {
  type: "none" | "local" | "cloud";
  destination: {
  provider: "s3" | "whereby";
  authenticationType?: "accessKey" | "roleBased";
  bucket?: string;
  accessKeyId?: string;
  accessKeySecret?: string;
  fileFormat?: "mkv" | "mp4";
  oidcRoleArn?: string;
};
  startTrigger: "none" | "prompt" | "automatic" | "automatic-2nd-participant";
};
  liveTranscription?: {
  destination: {
  provider: "s3" | "whereby";
  authenticationType?: "accessKey" | "roleBased";
  bucket?: string;
  accessKeyId?: string;
  accessKeySecret?: string;
  region?: string;
  oidcRoleArn?: string;
};
  startTrigger: "none" | "manual" | "automatic" | "automatic-2nd-participant";
  language?: "ca," | "zh," | "zh-TW," | "cs," | "da," | "nl," | "en," | "en-US," | "en-GB," | "fi," | "fr," | "de," | "de-CH," | "el," | "hi," | "id," | "it," | "ja," | "ko," | "lv," | "ms," | "no," | "pl," | "pt," | "pt-BR," | "ro," | "ru," | "sk," | "es," | "sv," | "th," | "uk," | "vi,";
  liveCaptions?: boolean;
};
  streaming?: {
  destination: {
  url: string;
};
  startTrigger: "none" | "prompt" | "automatic";
};
  fields?: WherebyFullApiSchemaFields;
};
  "GET /meetings": never;
  "DELETE /meetings/{meetingId}": never;
  "GET /meetings/{meetingId}": never;
  "GET /recordings": never;
  "DELETE /recordings/{recordingId}": never;
  "GET /recordings/{recordingId}": never;
  "GET /recordings/{recordingId}/access-link": never;
  "POST /recordings/bulk-delete": {
  recordingIds: ReadonlyArray<string>;
};
  "POST /transcriptions": {
  recordingId: string;
};
  "GET /transcriptions": never;
  "DELETE /transcriptions/{transcriptionId}": never;
  "GET /transcriptions/{transcriptionId}": never;
  "GET /transcriptions/{transcriptionId}/access-link": never;
  "POST /transcriptions/bulk-delete": {
  transcriptionIds: ReadonlyArray<string>;
};
  "POST /summaries": {
  transcriptionId: string;
  template?: "SOAP" | "Extended SOAP" | "General Narrative" | "General Bulleted" | "Educational Lecture" | "Educational Tutoring";
};
  "GET /summaries": never;
  "DELETE /summaries/{summaryId}": never;
  "GET /summaries/{summaryId}": never;
  "PUT /rooms/{roomName}/theme/tokens": {
  tokens?: {
  colors?: {
  primary?: string;
  secondary?: string;
  focus?: string;
};
};
  tokensPreset?: "custom" | "default";
};
  "PUT /rooms/{roomName}/theme/logo": {
  theme?: "default";
};
  "PUT /rooms/{roomName}/theme/room-background": {
  palette?: "default" | "grey" | "purple" | "burgund";
  theme?: "default" | "mountains" | "characters" | "rocks";
};
  "PUT /rooms/{roomName}/theme/room-knock-page-background": {
  palette?: "default" | "grey" | "purple" | "burgund";
  theme?: "default" | "mountains" | "characters" | "rocks";
};
  "GET /insights/rooms": never;
  "GET /insights/room-sessions": never;
  "GET /insights/participants": never;
  "GET /insights/participant": never;
}

export interface WherebyFullApiOperationRequestBodyRequiredMap {
  "POST /meetings": false;
  "GET /meetings": false;
  "DELETE /meetings/{meetingId}": false;
  "GET /meetings/{meetingId}": false;
  "GET /recordings": false;
  "DELETE /recordings/{recordingId}": false;
  "GET /recordings/{recordingId}": false;
  "GET /recordings/{recordingId}/access-link": false;
  "POST /recordings/bulk-delete": false;
  "POST /transcriptions": false;
  "GET /transcriptions": false;
  "DELETE /transcriptions/{transcriptionId}": false;
  "GET /transcriptions/{transcriptionId}": false;
  "GET /transcriptions/{transcriptionId}/access-link": false;
  "POST /transcriptions/bulk-delete": false;
  "POST /summaries": false;
  "GET /summaries": false;
  "DELETE /summaries/{summaryId}": false;
  "GET /summaries/{summaryId}": false;
  "PUT /rooms/{roomName}/theme/tokens": false;
  "PUT /rooms/{roomName}/theme/logo": false;
  "PUT /rooms/{roomName}/theme/room-background": false;
  "PUT /rooms/{roomName}/theme/room-knock-page-background": false;
  "GET /insights/rooms": false;
  "GET /insights/room-sessions": false;
  "GET /insights/participants": false;
  "GET /insights/participant": false;
}

export interface WherebyFullApiOperationResponseMap {
  "POST /meetings": WherebyFullApiSchemaMeeting;
  "GET /meetings": {
  results: ReadonlyArray<WherebyFullApiSchemaMeeting>;
  cursor: string;
};
  "DELETE /meetings/{meetingId}": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "GET /meetings/{meetingId}": WherebyFullApiSchemaMeeting;
  "GET /recordings": {
  results: ReadonlyArray<WherebyFullApiSchemaRecording>;
  cursor: string;
};
  "DELETE /recordings/{recordingId}": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "GET /recordings/{recordingId}": WherebyFullApiSchemaRecording;
  "GET /recordings/{recordingId}/access-link": {
  accessLink: string;
  expires: number;
};
  "POST /recordings/bulk-delete": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "POST /transcriptions": {
  transcriptionId?: string;
};
  "GET /transcriptions": {
  results: ReadonlyArray<WherebyFullApiSchemaTranscription>;
};
  "DELETE /transcriptions/{transcriptionId}": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "GET /transcriptions/{transcriptionId}": WherebyFullApiSchemaTranscription;
  "GET /transcriptions/{transcriptionId}/access-link": {
  accessLink: string;
  expires: number;
};
  "POST /transcriptions/bulk-delete": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "POST /summaries": {
  summaryId?: string;
};
  "GET /summaries": {
  results: ReadonlyArray<WherebyFullApiSchemaSummary>;
};
  "DELETE /summaries/{summaryId}": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "GET /summaries/{summaryId}": WherebyFullApiSchemaSummary;
  "PUT /rooms/{roomName}/theme/tokens": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "PUT /rooms/{roomName}/theme/logo": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "PUT /rooms/{roomName}/theme/room-background": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "PUT /rooms/{roomName}/theme/room-knock-page-background": {
  error?: string;
  data?: {
  msLeft?: number;
};
};
  "GET /insights/rooms": {
  cursor?: string;
  results?: ReadonlyArray<{
  roomName: string;
  createdAt: string;
  endAt: string;
  firstSessionStartedAt: string;
  lastSessionStartedAt: string;
  totalParticipantMinutes: number;
  totalRecorderMinutes: number;
  totalStreamerMinutes: number;
  totalUniqueParticipants: number;
  totalUniqueRecorders: number;
  totalUniqueStreamers: number;
  totalSessions: number;
  rating?: number | null;
  totalRatings?: number | null;
}>;
};
  "GET /insights/room-sessions": {
  cursor?: string;
  results?: ReadonlyArray<{
  roomSessionId: string;
  roomName: string;
  startedAt?: string;
  endedAt?: string;
  totalParticipantMinutes: number;
  totalRecorderMinutes: number;
  totalStreamerMinutes: number;
  totalUniqueParticipants: number;
  totalUniqueRecorders: number;
  totalUniqueStreamers: number;
  rating?: number | null;
  totalRatings?: number | null;
}>;
};
  "GET /insights/participants": {
  cursor?: string;
  results?: ReadonlyArray<{
  roomSessionId: string;
  participantId: string;
  deviceId: string;
  userId: string;
  roleName: string;
  displayName: string;
  joinedAt: string;
  leftAt: string;
  externalId: string;
  rating?: number | null;
  tags?: ReadonlyArray<string> | null;
  comment?: string | null;
}>;
};
  "GET /insights/participant": ReadonlyArray<{
  displayName: string;
  userRole: string;
  userAgent: string;
  timeStamp: string;
  sampleRateMs: number;
  samples: {};
}>;
}
