import type { SpeechPipelineVoiceProviderOptions } from "../speech-pipeline.js";
import type {
  ElevenLabsFullApiGeneratedClient,
  ElevenLabsGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type ElevenLabsVoiceJsonPrimitive = string | number | boolean | null;
export type ElevenLabsVoiceJsonValue =
  | ElevenLabsVoiceJsonPrimitive
  | ElevenLabsVoiceJsonObject
  | readonly ElevenLabsVoiceJsonValue[];
export type ElevenLabsVoiceProviderExtensionValue = ElevenLabsVoiceJsonValue | object | undefined;
export interface ElevenLabsVoiceJsonObject {
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}
export type ElevenLabsVoiceProviderPayload = ElevenLabsVoiceJsonObject | object;
export type ElevenLabsVoiceProviderQuery = Record<string, ElevenLabsVoiceProviderExtensionValue>;
export interface ElevenLabsVoiceProviderResponse extends ElevenLabsVoiceJsonObject {}
export interface ElevenLabsVoiceProviderExtensionFields extends ElevenLabsVoiceJsonObject {}

export interface ElevenLabsVoiceClientOptions {
  apiKey: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export const ELEVENLABS_API_SPEC_SOURCES = {
  openapiJson: "https://api.elevenlabs.io/openapi.json",
  docsApiReference: "https://elevenlabs.io/docs/api-reference",
  docsFullIndex: "https://elevenlabs.io/docs/llms-full.txt",
} as const;

export const ELEVENLABS_API_FAMILIES = [
  "agents",
  "conversations",
  "users",
  "tools",
  "knowledge-base",
  "tests",
  "phone-numbers",
  "widget",
  "workspace",
  "sip-trunk",
  "twilio",
  "exotel",
  "whatsapp",
  "batch-calling",
  "llm",
  "mcp",
  "analytics",
  "environment-variables",
  "text-to-speech",
  "speech-to-text",
  "music",
  "speech-engine",
  "voices",
  "text-to-dialogue",
  "speech-to-speech",
  "voice-design",
  "sound-generation",
  "audio-isolation",
  "dubbing",
  "forced-alignment",
  "pronunciation-dictionaries",
  "audio-native",
  "studio",
  "history",
  "models",
  "single-use-token",
  "user",
  "service-accounts",
  "api-keys",
  "webhooks",
] as const;

export type ElevenLabsApiFamily = typeof ELEVENLABS_API_FAMILIES[number];
export type ElevenLabsHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ElevenLabsRequestOptions {
  method: ElevenLabsHttpMethod;
  path: string;
  query?: URLSearchParams | Record<string, string | number | boolean | null | undefined | Array<string | number | boolean>>;
  headers?: Record<string, string>;
  json?: ElevenLabsVoiceJsonObject | readonly ElevenLabsVoiceJsonValue[];
  form?: FormData;
  body?: BodyInit;
  signal?: AbortSignal;
}

export interface ElevenLabsOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: ElevenLabsRequestOptions["query"];
  headers?: Record<string, string> | undefined;
  json?: ElevenLabsVoiceJsonObject | readonly ElevenLabsVoiceJsonValue[] | undefined;
  form?: FormData | undefined;
  body?: BodyInit | undefined;
  signal?: AbortSignal | undefined;
  responseType?: "json" | "arrayBuffer" | "stream" | "response" | undefined;
}

export interface ElevenLabsCredentialStatusInput {
  apiKey?: string;
}

export type ElevenLabsOutputFormat = string;
export type ElevenLabsApplyTextNormalization = "auto" | "on" | "off";
export type ElevenLabsTimestampGranularity = "none" | "word" | "character";

export interface ElevenLabsVoiceSettings {
  stability?: number;
  similarity_boost?: number;
  style?: number;
  use_speaker_boost?: boolean;
  speed?: number;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsPronunciationDictionaryLocator {
  pronunciation_dictionary_id: string;
  version_id: string;
}

export interface ElevenLabsSpeechInput {
  voiceId: string;
  text: string;
  modelId?: string;
  languageCode?: string | null;
  voiceSettings?: ElevenLabsVoiceSettings | null;
  pronunciationDictionaryLocators?: ElevenLabsPronunciationDictionaryLocator[] | null;
  seed?: number | null;
  previousText?: string | null;
  nextText?: string | null;
  previousRequestIds?: string[] | null;
  nextRequestIds?: string[] | null;
  applyTextNormalization?: ElevenLabsApplyTextNormalization;
  applyLanguageTextNormalization?: boolean;
  usePvcAsIvc?: boolean;
  enableLogging?: boolean;
  optimizeStreamingLatency?: 0 | 1 | 2 | 3 | 4 | null;
  outputFormat?: ElevenLabsOutputFormat;
}

export interface ElevenLabsSpeechWithTimingResponse {
  audio_base64: string;
  alignment?: ElevenLabsCharacterAlignment;
  normalized_alignment?: ElevenLabsCharacterAlignment;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsSoundEffectInput {
  text: string;
  durationSeconds?: number | null;
  promptInfluence?: number | null;
  outputFormat?: ElevenLabsOutputFormat;
  enableLogging?: boolean;
}

export interface ElevenLabsVoiceChangerInput {
  voiceId: string;
  file: Blob;
  fileName?: string;
  modelId?: string;
  voiceSettings?: ElevenLabsVoiceSettings | null;
  seed?: number | null;
  removeBackgroundNoise?: boolean;
  outputFormat?: ElevenLabsOutputFormat;
  enableLogging?: boolean;
}

export interface ElevenLabsAudioIsolationInput {
  file?: Blob;
  fileName?: string;
  fileUrl?: string;
  outputFormat?: ElevenLabsOutputFormat;
  enableLogging?: boolean;
}

export interface ElevenLabsForcedAlignmentInput {
  file: Blob;
  text: string;
  fileName?: string;
  enabledSpooledFile?: boolean;
}

export interface ElevenLabsHistoryListInput {
  pageSize?: number;
  startAfterHistoryItemId?: string;
  voiceId?: string;
  search?: string;
  source?: string;
}

export interface ElevenLabsHistoryListResponse {
  history: Array<ElevenLabsVoiceJsonObject>;
  last_history_item_id?: string;
  has_more?: boolean;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsSingleUseTokenInput {
  tokenType: "realtime_scribe" | "tts_websocket";
}

export interface ElevenLabsCharacterAlignment {
  characters: string[];
  character_start_times_seconds: number[];
  character_end_times_seconds: number[];
}

export interface ElevenLabsSpeechToTextInput {
  modelId?: "scribe_v1" | "scribe_v2" | string;
  file?: Blob;
  fileName?: string;
  sourceUrl?: string;
  languageCode?: string | null;
  tagAudioEvents?: boolean;
  numSpeakers?: number | null;
  timestampsGranularity?: ElevenLabsTimestampGranularity;
  diarize?: boolean;
  diarizationThreshold?: number | null;
  fileFormat?: "pcm_s16le_16" | "other";
  webhook?: boolean;
  webhookId?: string | null;
  webhookMetadata?: Record<string, string | number | boolean>;
  temperature?: number | null;
  seed?: number | null;
  useMultiChannel?: boolean;
  noVerbatim?: boolean;
  useSpeakerLibrary?: boolean;
  detectSpeakerRoles?: boolean;
  enableLogging?: boolean;
  extraFields?: Record<string, string | number | boolean | Blob | null | undefined>;
}

export interface ElevenLabsTranscriptWord {
  text: string;
  start?: number;
  end?: number;
  type?: string;
  speaker_id?: string;
  logprob?: number;
  channel_index?: number;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsTranscriptResponse {
  transcription_id?: string;
  language_code?: string;
  language_probability?: number;
  text?: string;
  words?: ElevenLabsTranscriptWord[];
  transcripts?: ElevenLabsVoiceJsonObject | readonly ElevenLabsVoiceJsonValue[];
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsVoiceSummary {
  voice_id: string;
  name: string;
  category?: string;
  preview_url?: string;
  labels?: Record<string, string>;
  settings?: ElevenLabsVoiceSettings;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsVoicesResponse {
  voices: ElevenLabsVoiceSummary[];
  has_more?: boolean;
  next_page_token?: string;
  total_count?: number;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsModelSummary {
  model_id: string;
  name: string;
  can_do_text_to_speech?: boolean;
  can_do_voice_conversion?: boolean;
  can_be_finetuned?: boolean;
  languages?: Array<{ language_id?: string; name?: string; [key: string]: ElevenLabsVoiceJsonValue | undefined }>;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsConversationSignedUrlInput {
  agentId: string;
  includeConversationId?: boolean;
  branchId?: string | null;
  environment?: string | null;
}

export interface ElevenLabsConversationSignedUrlResponse {
  signed_url: string;
  conversation_id?: string;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsListConversationsInput {
  cursor?: string | null;
  agentId?: string | null;
  callSuccessful?: "success" | "failure" | "unknown" | null;
  callStartBeforeUnix?: number | null;
  callStartAfterUnix?: number | null;
  callDurationMinSecs?: number | null;
  callDurationMaxSecs?: number | null;
  ratingMax?: number | null;
  ratingMin?: number | null;
  hasFeedbackComment?: boolean | null;
  userId?: string | null;
  evaluationParams?: string[] | null;
  dataCollectionParams?: string[] | null;
  toolNames?: string[] | null;
  toolNamesSuccessful?: string[] | null;
  toolNamesErrored?: string[] | null;
  mainLanguages?: string[] | null;
  pageSize?: number;
}

export interface ElevenLabsConversationSummary {
  agent_id: string;
  conversation_id: string;
  start_time_unix_secs?: number;
  call_duration_secs?: number;
  message_count?: number;
  status?: string;
  direction?: string;
  transcript_summary?: string;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsListConversationsResponse {
  conversations: ElevenLabsConversationSummary[];
  has_more?: boolean;
  next_cursor?: string;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsConversationDetails {
  agent_id: string;
  conversation_id: string;
  status?: string;
  has_audio?: boolean;
  transcript?: Array<ElevenLabsVoiceJsonObject>;
  metadata?: ElevenLabsVoiceProviderExtensionFields;
  [key: string]: ElevenLabsVoiceProviderExtensionValue;
}

export interface ElevenLabsWebSocketUrlInput {
  voiceId: string;
  modelId?: string;
  languageCode?: string;
  enableLogging?: boolean;
  enableSsmlParsing?: boolean;
  outputFormat?: ElevenLabsOutputFormat;
  inactivityTimeout?: number;
  syncAlignment?: boolean;
  authorization?: string;
  singleUseToken?: string;
}

export interface ElevenLabsMultiContextWebSocketUrlInput extends ElevenLabsWebSocketUrlInput {
  autoMode?: boolean;
}

export interface ElevenLabsVoiceClient {
  fullApi: ElevenLabsFullApiGeneratedClient;
  requestOperation: ElevenLabsGeneratedOperationCaller;
  createSpeech(input: ElevenLabsSpeechInput): Promise<ArrayBuffer>;
  streamSpeech(input: ElevenLabsSpeechInput): Promise<ReadableStream<Uint8Array>>;
  createSpeechWithTiming(input: ElevenLabsSpeechInput): Promise<ElevenLabsSpeechWithTimingResponse>;
  streamSpeechWithTiming(input: ElevenLabsSpeechInput): Promise<ReadableStream<Uint8Array>>;
  createTranscript(input: ElevenLabsSpeechToTextInput): Promise<ElevenLabsTranscriptResponse>;
  getTranscript(transcriptionId: string): Promise<ElevenLabsTranscriptResponse>;
  deleteTranscript(transcriptionId: string): Promise<void>;
  createVoiceChange(input: ElevenLabsVoiceChangerInput): Promise<ArrayBuffer>;
  streamVoiceChange(input: ElevenLabsVoiceChangerInput): Promise<ReadableStream<Uint8Array>>;
  createSoundEffect(input: ElevenLabsSoundEffectInput): Promise<ArrayBuffer>;
  isolateAudio(input: ElevenLabsAudioIsolationInput): Promise<ArrayBuffer>;
  streamAudioIsolation(input: ElevenLabsAudioIsolationInput): Promise<ReadableStream<Uint8Array>>;
  createForcedAlignment(input: ElevenLabsForcedAlignmentInput): Promise<ElevenLabsVoiceProviderResponse>;
  listVoices(): Promise<ElevenLabsVoicesResponse>;
  listModels(): Promise<ElevenLabsModelSummary[]>;
  getConversationSignedUrl(input: ElevenLabsConversationSignedUrlInput): Promise<ElevenLabsConversationSignedUrlResponse>;
  listConversations(input?: ElevenLabsListConversationsInput): Promise<ElevenLabsListConversationsResponse>;
  getConversation(conversationId: string, input?: { format?: "json" | "opentelemetry" }): Promise<ElevenLabsConversationDetails>;
  getConversationAudio(conversationId: string): Promise<ArrayBuffer>;
  listHistory(input?: ElevenLabsHistoryListInput): Promise<ElevenLabsHistoryListResponse>;
  getHistoryItem(historyItemId: string): Promise<ElevenLabsVoiceProviderResponse>;
  deleteHistoryItem(historyItemId: string): Promise<void>;
  getHistoryAudio(historyItemId: string): Promise<ArrayBuffer>;
  downloadHistoryItems(input: { historyItemIds: string[] }): Promise<ArrayBuffer>;
  createSingleUseToken(input: ElevenLabsSingleUseTokenInput): Promise<ElevenLabsVoiceProviderResponse>;
  getUser(): Promise<ElevenLabsVoiceProviderResponse>;
  getUserSubscription(): Promise<ElevenLabsVoiceProviderResponse>;
  buildTextToSpeechWebSocketUrl(input: ElevenLabsWebSocketUrlInput): string;
  buildMultiContextTextToSpeechWebSocketUrl(input: ElevenLabsMultiContextWebSocketUrlInput): string;
}

export interface ElevenLabsLiveCheckOptions extends ElevenLabsVoiceClientOptions {
  client?: Pick<ElevenLabsVoiceClient, "listModels">;
}

export interface ElevenLabsSpeechVoiceProviderOptions
  extends Omit<Partial<SpeechPipelineVoiceProviderOptions>, "provider" | "transcriptionSource" | "transcribe" | "synthesize"> {
  apiKey?: string;
  client?: Pick<ElevenLabsVoiceClient, "createSpeech" | "createTranscript">;
  voiceId: string;
  textToSpeechModelId?: string;
  speechToTextModelId?: string;
  outputFormat?: ElevenLabsOutputFormat;
  languageCode?: string | null;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}
