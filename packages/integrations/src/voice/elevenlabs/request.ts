import type { VoiceJsonObject, VoiceJsonValue } from "@cognidesk/voice-websocket";
import type {
  ElevenLabsAudioIsolationInput,
  ElevenLabsForcedAlignmentInput,
  ElevenLabsHttpMethod,
  ElevenLabsListConversationsInput,
  ElevenLabsOperationRequestInput,
  ElevenLabsOutputFormat,
  ElevenLabsRequestOptions,
  ElevenLabsSpeechInput,
  ElevenLabsSpeechToTextInput,
  ElevenLabsVoiceChangerInput,
  ElevenLabsVoiceJsonObject,
  ElevenLabsVoiceJsonValue,
  ElevenLabsWebSocketUrlInput,
} from "./contracts.js";

export interface ElevenLabsRequestInput {
  apiBaseUrl: string;
  apiKey: string;
  fetch: typeof fetch;
  method: ElevenLabsHttpMethod;
  path: string;
  query?: URLSearchParams;
  headers?: Record<string, string>;
  json?: ElevenLabsVoiceJsonObject | readonly ElevenLabsVoiceJsonValue[];
  form?: FormData;
  body?: BodyInit;
  signal?: AbortSignal;
}

export function speechQuery(input: ElevenLabsSpeechInput) {
  return compactQuery({
    enable_logging: input.enableLogging,
    optimize_streaming_latency: input.optimizeStreamingLatency,
    output_format: input.outputFormat,
  });
}

export function speechBody(input: ElevenLabsSpeechInput) {
  return compactJson({
    text: input.text,
    model_id: input.modelId,
    language_code: input.languageCode,
    voice_settings: input.voiceSettings,
    pronunciation_dictionary_locators: input.pronunciationDictionaryLocators,
    seed: input.seed,
    previous_text: input.previousText,
    next_text: input.nextText,
    previous_request_ids: input.previousRequestIds,
    next_request_ids: input.nextRequestIds,
    apply_text_normalization: input.applyTextNormalization,
    apply_language_text_normalization: input.applyLanguageTextNormalization,
    use_pvc_as_ivc: input.usePvcAsIvc,
  });
}

export function transcriptForm(input: ElevenLabsSpeechToTextInput) {
  const form = new FormData();
  form.set("model_id", input.modelId ?? "scribe_v2");
  if (input.file) form.set("file", input.file, input.fileName);
  appendForm(form, "source_url", input.sourceUrl);
  appendForm(form, "language_code", input.languageCode);
  appendForm(form, "tag_audio_events", input.tagAudioEvents);
  appendForm(form, "num_speakers", input.numSpeakers);
  appendForm(form, "timestamps_granularity", input.timestampsGranularity);
  appendForm(form, "diarize", input.diarize);
  appendForm(form, "diarization_threshold", input.diarizationThreshold);
  appendForm(form, "file_format", input.fileFormat);
  appendForm(form, "webhook", input.webhook);
  appendForm(form, "webhook_id", input.webhookId);
  if (input.webhookMetadata) form.set("webhook_metadata", JSON.stringify(input.webhookMetadata));
  appendForm(form, "temperature", input.temperature);
  appendForm(form, "seed", input.seed);
  appendForm(form, "use_multi_channel", input.useMultiChannel);
  appendForm(form, "no_verbatim", input.noVerbatim);
  appendForm(form, "use_speaker_library", input.useSpeakerLibrary);
  appendForm(form, "detect_speaker_roles", input.detectSpeakerRoles);
  for (const [key, value] of Object.entries(input.extraFields ?? {})) appendForm(form, key, value);
  return form;
}

export function voiceChangerForm(input: ElevenLabsVoiceChangerInput) {
  const form = new FormData();
  form.set("audio", input.file, input.fileName);
  appendForm(form, "model_id", input.modelId);
  if (input.voiceSettings) form.set("voice_settings", JSON.stringify(input.voiceSettings));
  appendForm(form, "seed", input.seed);
  appendForm(form, "remove_background_noise", input.removeBackgroundNoise);
  return form;
}

export function audioIsolationForm(input: ElevenLabsAudioIsolationInput) {
  if (!input.file && !input.fileUrl) {
    throw new Error("Exactly one of file or fileUrl is required for ElevenLabs audio isolation.");
  }
  if (input.file && input.fileUrl) {
    throw new Error("Only one of file or fileUrl can be used for ElevenLabs audio isolation.");
  }
  const form = new FormData();
  if (input.file) form.set("audio", input.file, input.fileName);
  appendForm(form, "file_url", input.fileUrl);
  return form;
}

export function forcedAlignmentForm(input: ElevenLabsForcedAlignmentInput) {
  const form = new FormData();
  form.set("file", input.file, input.fileName);
  form.set("text", input.text);
  appendForm(form, "enabled_spooled_file", input.enabledSpooledFile);
  return form;
}

export function listConversationsQuery(input: ElevenLabsListConversationsInput) {
  const query = compactQuery({
    cursor: input.cursor,
    agent_id: input.agentId,
    call_successful: input.callSuccessful,
    call_start_before_unix: input.callStartBeforeUnix,
    call_start_after_unix: input.callStartAfterUnix,
    call_duration_min_secs: input.callDurationMinSecs,
    call_duration_max_secs: input.callDurationMaxSecs,
    rating_max: input.ratingMax,
    rating_min: input.ratingMin,
    has_feedback_comment: input.hasFeedbackComment,
    user_id: input.userId,
    page_size: input.pageSize,
  });
  appendQueryList(query, "evaluation_params", input.evaluationParams);
  appendQueryList(query, "data_collection_params", input.dataCollectionParams);
  appendQueryList(query, "tool_names", input.toolNames);
  appendQueryList(query, "tool_names_successful", input.toolNamesSuccessful);
  appendQueryList(query, "tool_names_errored", input.toolNamesErrored);
  appendQueryList(query, "main_languages", input.mainLanguages);
  return query;
}

export function audioOutputQuery(input: { outputFormat?: ElevenLabsOutputFormat; enableLogging?: boolean }) {
  return compactQuery({
    output_format: input.outputFormat,
    enable_logging: input.enableLogging,
  });
}

export function elevenLabsOperationRequest(
  method: ElevenLabsHttpMethod,
  pathTemplate: string,
  input: ElevenLabsOperationRequestInput,
): Omit<ElevenLabsRequestInput, "apiBaseUrl" | "apiKey" | "fetch"> {
  if ([input.json, input.form, input.body].filter((value) => value !== undefined).length > 1) {
    throw new Error("Only one of json, form, or body can be supplied for an ElevenLabs operation request.");
  }
  const path = pathTemplate.replace(/\{([^}]+)\}/g, (_match, rawName: string) => {
    const value = input.pathParams?.[rawName];
    if (value === undefined) throw new Error(`Missing ElevenLabs path parameter '${rawName}'.`);
    return encodeURIComponent(String(value));
  });
  return {
    method,
    path,
    ...(input.query ? { query: queryParams(input.query) } : {}),
    ...(input.headers ? { headers: input.headers } : {}),
    ...(input.json !== undefined ? { json: input.json } : {}),
    ...(input.form ? { form: input.form } : {}),
    ...(input.body ? { body: input.body } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  };
}

export async function elevenLabsJsonRequest<T>(input: ElevenLabsRequestInput): Promise<T> {
  const response = await elevenLabsRawRequest(input);
  const text = await response.text();
  return (text ? JSON.parse(text) : {}) as T;
}

export async function elevenLabsArrayBufferRequest(input: ElevenLabsRequestInput): Promise<ArrayBuffer> {
  const response = await elevenLabsRawRequest(input);
  return response.arrayBuffer();
}

export async function elevenLabsRawRequest(input: ElevenLabsRequestInput): Promise<Response> {
  const url = withQuery(`${input.apiBaseUrl}${input.path}`, input.query);
  const hasBody = input.json !== undefined || input.form !== undefined || input.body !== undefined;
  if (hasBody && input.method === "GET") {
    throw new Error("GET ElevenLabs requests cannot include json, form, or body payloads.");
  }
  const response = await input.fetch(url, {
    method: input.method,
    headers: {
      "xi-api-key": input.apiKey,
      ...(input.json ? { "content-type": "application/json" } : {}),
      ...input.headers,
    },
    ...(input.json ? { body: JSON.stringify(input.json) } : {}),
    ...(input.form ? { body: input.form } : {}),
    ...(input.body ? { body: input.body } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(message || `ElevenLabs API returned ${response.status}.`);
  }
  return response;
}

export function buildElevenLabsWebSocketUrl(input: {
  apiBaseUrl: string;
  path: string;
  input: ElevenLabsWebSocketUrlInput;
  extraQuery?: URLSearchParams;
}) {
  const url = new URL(`${input.apiBaseUrl}${input.path}`);
  url.protocol = url.protocol === "http:" ? "ws:" : "wss:";
  const query = compactQuery({
    authorization: input.input.authorization,
    single_use_token: input.input.singleUseToken,
    model_id: input.input.modelId,
    language_code: input.input.languageCode,
    enable_logging: input.input.enableLogging,
    enable_ssml_parsing: input.input.enableSsmlParsing,
    output_format: input.input.outputFormat,
    inactivity_timeout: input.input.inactivityTimeout,
    sync_alignment: input.input.syncAlignment,
  });
  for (const [key, value] of input.extraQuery ?? new URLSearchParams()) query.append(key, value);
  url.search = query.toString();
  return url.toString();
}

export function booleanQuery(values: Record<string, string | number | boolean | null | undefined>) {
  return compactQuery(values);
}

export function compactQuery(values: Record<string, string | number | boolean | null | undefined>) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined || value === null) continue;
    params.append(key, String(value));
  }
  return params;
}

export function queryParams(
  values: NonNullable<ElevenLabsRequestOptions["query"]>,
) {
  if (values instanceof URLSearchParams) return values;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, String(item));
    } else {
      params.append(key, String(value));
    }
  }
  return params;
}

export function compactJson(values: ElevenLabsVoiceJsonObject): VoiceJsonObject {
  const result: VoiceJsonObject = {};
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined || value === null) continue;
    result[key] = toVoiceJsonValue(value);
  }
  return result;
}

function toVoiceJsonValue(value: unknown): VoiceJsonValue {
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }
  if (Array.isArray(value)) return value.map(toVoiceJsonValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, toVoiceJsonValue(item)]),
    );
  }
  return null;
}

export function requireElevenLabsApiKey(apiKey: string | undefined) {
  if (!apiKey) {
    throw new Error("ElevenLabs API key is required to create a speech voice provider.");
  }
  return apiKey;
}

function appendQueryList(params: URLSearchParams, key: string, values?: string[] | null) {
  for (const value of values ?? []) params.append(key, value);
}

function appendForm(form: FormData, key: string, value: string | number | boolean | Blob | null | undefined) {
  if (value === undefined || value === null) return;
  if (value instanceof Blob) {
    form.set(key, value);
    return;
  }
  form.set(key, String(value));
}

function withQuery(url: string, query?: URLSearchParams) {
  if (!query || [...query].length === 0) return url;
  return `${url}?${query.toString()}`;
}
