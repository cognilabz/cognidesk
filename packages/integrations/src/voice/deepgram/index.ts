import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import {
  createSpeechPipelineVoiceProvider,
  pcm16WavBytes,
  type SpeechPipelineTranscription,
  type SpeechPipelineVoiceProviderOptions,
} from "../speech-pipeline.js";
import { DEEPGRAM_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT } from "./full-api-client.generated.js";
import {
  DEEPGRAM_SPEECH_FULL_API_OPERATION_COUNT,
  DEEPGRAM_SPEECH_FULL_API_SPEC_VERSION,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";
export {
  DEEPGRAM_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
  DEEPGRAM_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES,
  createDeepgramSpeechFullApiGeneratedClient,
  type DeepgramSpeechFullApiGeneratedClient,
  type DeepgramSpeechGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  DEEPGRAM_SPEECH_FULL_API_GENERATED_AT,
  DEEPGRAM_SPEECH_FULL_API_OPERATION_BY_ID,
  DEEPGRAM_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID,
  DEEPGRAM_SPEECH_FULL_API_OPERATION_COUNT,
  DEEPGRAM_SPEECH_FULL_API_OPERATIONS,
  DEEPGRAM_SPEECH_FULL_API_SPEC,
  DEEPGRAM_SPEECH_FULL_API_SPEC_SOURCE,
  DEEPGRAM_SPEECH_FULL_API_SPEC_VERSION,
  type DeepgramSpeechFullApiOperation,
  type DeepgramSpeechFullApiOperationId,
  type DeepgramSpeechFullApiOperationMethod,
} from "./full-api-operations.generated.js";

export const deepgramSpeechProviderManifest = defineProviderPackage({
  id: "voice.deepgram",
  name: "Deepgram Speech",
  packageName: "@cognidesk/integrations",
  provider: "deepgram",
  category: "voice",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "Implements Deepgram prerecorded speech-to-text and Aura text-to-speech REST requests for Cognidesk STT/TTS voice pipelines.",
      "Generated operation inventory and caller interfaces cover Deepgram's official REST OpenAPI document, including /v1/listen and /v1/speak.",
      "Deepgram supplies transcripts and synthesized speech audio while Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary.",
      "Does not implement Deepgram Voice Agent, Flux websocket sessions, live streaming STT, custom model administration, self-hosted deployment management, telephony carrier setup, or Deepgram account policy.",
    ],
    evidence: [
      { label: "Deepgram prerecorded audio STT", url: "https://developers.deepgram.com/docs/pre-recorded-audio" },
      { label: "Deepgram Text-to-Speech REST", url: "https://developers.deepgram.com/docs/text-to-speech" },
      { label: "Deepgram TTS media output settings", url: "https://developers.deepgram.com/docs/tts-media-output-settings" },
    ],
  },
  credentialRequirements: [
    {
      id: "deepgram-api-key",
      label: "Deepgram API key",
      description: "Server-side Deepgram API key sent through the Authorization Token header for speech API requests.",
      required: true,
      metadata: {
        minimumAccess: ["speech-to-text", "text-to-speech"],
        enterpriseControls: ["project-retention-policy", "region-routing", "self-hosted-or-private-deployment"],
      },
    },
  ],
  capabilities: [
    {
      capability: "receive",
      label: "Transcribe speech",
      description: "Transcribes customer PCM voice input with Deepgram speech-to-text.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "deepgramTranscript", label: "Deepgram Transcript" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "send",
      label: "Synthesize speech",
      description: "Synthesizes Cognidesk assistant text with Deepgram Aura text-to-speech.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "deepgramSpeechSynthesis", label: "Deepgram Speech Synthesis" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
    },
    {
      capability: "media",
      label: "Speech audio media",
      description: "Exchanges buffered PCM input and synthesized 24 kHz linear16 output for Cognidesk voice sessions.",
      audiences: ["customer-facing", "internal-support"],
      providerObjects: [
        { kind: "voiceTranscript", label: "Voice Transcript" },
        { kind: "voiceAudio", label: "Voice Audio" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
  ],
  privacyNotes: [
    "Customer audio is sent to Deepgram for transcription, and assistant response text is sent to Deepgram for synthesis.",
    "Deepgram API keys remain server-side and are never issued to browsers by this package.",
  ],
  limitations: [
    "This package implements REST STT/TTS for Cognidesk speech pipelines, not Deepgram Voice Agent or full streaming websocket sessions.",
    "The background LLM is the Cognidesk Agent Model Set configured through @cognidesk/model, not Deepgram.",
    "Consent, recording, retention, project region, model-improvement settings, self-hosting, and Deepgram enterprise account policy remain SDK-user/provider configuration.",
  ],
  metadata: {
    channelCoverage: {
      speechToText: "typed-prerecorded-audio-rest",
      textToSpeech: "typed-rest",
      browserVoiceProtocol: "sdk-owned-cognidesk-voice-websocket",
      backgroundModelProvider: "sdk-owned-agent-model-set",
      deepgramVoiceAgent: "not-covered",
      fluxStreaming: "not-covered",
      telephony: "not-covered",
    },
    generatedSpeechApi: {
      operationCount: DEEPGRAM_SPEECH_FULL_API_OPERATION_COUNT,
      functionCount: DEEPGRAM_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
      apiVersion: DEEPGRAM_SPEECH_FULL_API_SPEC_VERSION,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export interface DeepgramSpeechClientOptions {
  apiKey: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface DeepgramSpeechCredentialStatusInput {
  apiKey?: string;
}

export interface DeepgramTranscribeAudioInput {
  audio: Uint8Array;
  sampleRate?: number;
  model?: string;
  language?: string;
  smartFormat?: boolean;
  punctuate?: boolean;
  detectLanguage?: boolean;
  signal?: AbortSignal;
}

export interface DeepgramTranscriptionResult {
  text: string;
  requestId?: string;
  duration?: number;
  channels?: number;
  confidence?: number;
  modelName?: string;
  raw?: DeepgramSpeechJsonObject;
}

export interface DeepgramTextToSpeechInput {
  text: string;
  model?: string;
  encoding?: DeepgramAudioEncoding;
  container?: DeepgramAudioContainer;
  sampleRate?: number;
  signal?: AbortSignal;
}

export interface DeepgramTextToSpeechResult {
  audio: ArrayBuffer;
  requestId?: string;
  modelName?: string;
  modelUuid?: string;
  charCount?: number;
  contentType?: string;
}

export interface DeepgramSpeechClient {
  transcribeAudio(input: DeepgramTranscribeAudioInput): Promise<DeepgramTranscriptionResult>;
  synthesizeSpeech(input: DeepgramTextToSpeechInput): Promise<DeepgramTextToSpeechResult>;
}

export type DeepgramAudioEncoding = "linear16" | "mulaw" | "alaw" | "mp3" | "opus" | "flac" | "aac" | string;
export type DeepgramAudioContainer = "wav" | "none" | "ogg" | string;

export interface DeepgramSpeechVoiceProviderOptions
  extends Omit<Partial<SpeechPipelineVoiceProviderOptions>, "provider" | "transcriptionSource" | "transcribe" | "synthesize"> {
  apiKey?: string;
  client?: DeepgramSpeechClient;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
  speechToTextModel?: string;
  textToSpeechModel?: string;
  language?: string;
  smartFormat?: boolean;
  punctuate?: boolean;
  detectLanguage?: boolean;
  encoding?: DeepgramAudioEncoding;
  container?: DeepgramAudioContainer;
  outputSampleRate?: number;
}

export type DeepgramSpeechJsonPrimitive = string | number | boolean | null;
export type DeepgramSpeechJsonValue =
  | DeepgramSpeechJsonPrimitive
  | DeepgramSpeechJsonObject
  | DeepgramSpeechJsonValue[];
export interface DeepgramSpeechJsonObject {
  [key: string]: DeepgramSpeechJsonValue;
}
export type DeepgramSpeechResource = DeepgramSpeechJsonValue | ArrayBuffer | ReadableStream<Uint8Array>;
export interface DeepgramSpeechOperationRequestInput {
  pathParams?: Record<string, string | number>;
  query?: Record<string, DeepgramSpeechJsonValue | undefined>;
  body?: DeepgramSpeechJsonValue | ArrayBuffer | Uint8Array | FormData;
  headers?: Record<string, string>;
  contentType?: string;
  responseType?: "json" | "arrayBuffer" | "response" | "stream";
}

const DEFAULT_STT_MODEL = "nova-3";
const DEFAULT_TTS_MODEL = "aura-2-thalia-en";
const DEFAULT_TTS_ENCODING = "linear16";
const DEFAULT_TTS_CONTAINER = "none";
const DEFAULT_SAMPLE_RATE = 24_000;

export function createDeepgramSpeechVoiceProvider(options: DeepgramSpeechVoiceProviderOptions = {}) {
  const client = options.client ?? createDeepgramSpeechClient({
    apiKey: requireDeepgramApiKey(options.apiKey),
    ...(options.apiBaseUrl ? { apiBaseUrl: options.apiBaseUrl } : {}),
    ...(options.fetch ? { fetch: options.fetch } : {}),
  });
  return createSpeechPipelineVoiceProvider({
    id: options.id ?? "deepgram-speech",
    provider: "deepgram",
    model: options.model ?? options.textToSpeechModel ?? options.speechToTextModel ?? "deepgram-speech",
    transcriptionSource: "deepgram-speech-to-text",
    ...(options.sampleRate !== undefined ? { sampleRate: options.sampleRate } : {}),
    ...(options.silenceThreshold !== undefined ? { silenceThreshold: options.silenceThreshold } : {}),
    ...(options.endSilenceMs !== undefined ? { endSilenceMs: options.endSilenceMs } : {}),
    ...(options.minSpeechMs !== undefined ? { minSpeechMs: options.minSpeechMs } : {}),
    ...(options.maxSpeechMs !== undefined ? { maxSpeechMs: options.maxSpeechMs } : {}),
    async transcribe(input): Promise<SpeechPipelineTranscription | null> {
      const transcript = await client.transcribeAudio({
        audio: input.audio,
        sampleRate: input.sampleRate,
        model: options.speechToTextModel ?? DEFAULT_STT_MODEL,
        signal: input.signal,
        ...(options.language !== undefined ? { language: options.language } : {}),
        ...(options.smartFormat !== undefined ? { smartFormat: options.smartFormat } : {}),
        ...(options.punctuate !== undefined ? { punctuate: options.punctuate } : {}),
        ...(options.detectLanguage !== undefined ? { detectLanguage: options.detectLanguage } : {}),
      });
      return {
        text: transcript.text,
        ...(transcript.requestId ? { itemId: transcript.requestId } : {}),
        metadata: compactJson({
          provider: "deepgram",
          model: transcript.modelName ?? options.speechToTextModel ?? DEFAULT_STT_MODEL,
          ...(transcript.requestId ? { requestId: transcript.requestId } : {}),
          ...(transcript.confidence !== undefined ? { confidence: transcript.confidence } : {}),
          ...(transcript.duration !== undefined ? { duration: transcript.duration } : {}),
        }),
      };
    },
    async synthesize(input) {
      const model = input.profile?.modelSet?.voice ?? options.textToSpeechModel ?? DEFAULT_TTS_MODEL;
      const encoding = options.encoding ?? DEFAULT_TTS_ENCODING;
      const container = options.container ?? DEFAULT_TTS_CONTAINER;
      const outputSampleRate = options.outputSampleRate ?? options.sampleRate ?? DEFAULT_SAMPLE_RATE;
      const synthesis = await client.synthesizeSpeech({
        text: input.text,
        model,
        encoding,
        container,
        sampleRate: outputSampleRate,
        signal: input.signal,
      });
      return {
        audio: synthesis.audio,
        transcript: input.text,
        metadata: compactJson({
          provider: "deepgram",
          model: synthesis.modelName ?? model,
          encoding,
          container,
          sampleRate: outputSampleRate,
          ...(synthesis.requestId ? { requestId: synthesis.requestId } : {}),
          ...(synthesis.modelUuid ? { modelUuid: synthesis.modelUuid } : {}),
          ...(synthesis.charCount !== undefined ? { charCount: synthesis.charCount } : {}),
          ...(synthesis.contentType ? { contentType: synthesis.contentType } : {}),
        }),
      };
    },
  });
}

export function createDeepgramSpeechClient(options: DeepgramSpeechClientOptions): DeepgramSpeechClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.deepgram.com").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  return {
    async transcribeAudio(input) {
      const sampleRate = input.sampleRate ?? DEFAULT_SAMPLE_RATE;
      const url = new URL(`${apiBaseUrl}/v1/listen`);
      appendQuery(url, "model", input.model ?? DEFAULT_STT_MODEL);
      appendQuery(url, "smart_format", input.smartFormat ?? true);
      appendQuery(url, "language", input.language);
      appendQuery(url, "punctuate", input.punctuate);
      appendQuery(url, "detect_language", input.detectLanguage);
      const response = await fetchImpl(url.toString(), {
        method: "POST",
        headers: {
          authorization: `Token ${options.apiKey}`,
          "content-type": "audio/wav",
          accept: "application/json",
        },
        body: pcm16WavBytes(input.audio, sampleRate),
        ...(input.signal ? { signal: input.signal } : {}),
      });
      const json = await deepgramJsonResponse(response, "STT");
      const metadata = objectField(json.metadata);
      const bestAlternative = firstDeepgramAlternative(json);
      const requestId = stringField(metadata?.request_id);
      const duration = numberField(metadata?.duration);
      const channels = numberField(metadata?.channels);
      const confidence = numberField(bestAlternative?.confidence);
      const modelName = deepgramModelName(metadata);
      return {
        text: stringField(bestAlternative?.transcript) ?? "",
        ...(requestId ? { requestId } : {}),
        ...(duration !== undefined ? { duration } : {}),
        ...(channels !== undefined ? { channels } : {}),
        ...(confidence !== undefined ? { confidence } : {}),
        ...(modelName ? { modelName } : {}),
        raw: json,
      };
    },
    async synthesizeSpeech(input) {
      const encoding = input.encoding ?? DEFAULT_TTS_ENCODING;
      const container = input.container ?? (encoding === DEFAULT_TTS_ENCODING ? DEFAULT_TTS_CONTAINER : undefined);
      const sampleRate = input.sampleRate ?? (encoding === DEFAULT_TTS_ENCODING ? DEFAULT_SAMPLE_RATE : undefined);
      const url = new URL(`${apiBaseUrl}/v1/speak`);
      appendQuery(url, "model", input.model ?? DEFAULT_TTS_MODEL);
      appendQuery(url, "encoding", encoding);
      appendQuery(url, "container", container);
      appendQuery(url, "sample_rate", sampleRate);
      const response = await fetchImpl(url.toString(), {
        method: "POST",
        headers: {
          authorization: `Token ${options.apiKey}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ text: input.text }),
        ...(input.signal ? { signal: input.signal } : {}),
      });
      if (!response.ok) {
        const message = await response.text().catch(() => "");
        throw new Error(message || `Deepgram TTS returned ${response.status}.`);
      }
      const requestId = response.headers.get("dg-request-id") ?? undefined;
      const modelName = response.headers.get("dg-model-name") ?? undefined;
      const modelUuid = response.headers.get("dg-model-uuid") ?? undefined;
      const contentType = response.headers.get("content-type") ?? undefined;
      const charCount = numberHeader(response.headers, "dg-char-count");
      return {
        audio: await response.arrayBuffer(),
        ...(requestId ? { requestId } : {}),
        ...(modelName ? { modelName } : {}),
        ...(modelUuid ? { modelUuid } : {}),
        ...(charCount !== undefined ? { charCount } : {}),
        ...(contentType ? { contentType } : {}),
      };
    },
  };
}

export function deepgramSpeechCredentialStatuses(
  input: DeepgramSpeechCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const configured = Boolean(input.apiKey);
  return [{
    providerPackageId: deepgramSpeechProviderManifest.id,
    requirementId: "deepgram-api-key",
    state: configured ? "configured" : "missing",
    message: configured
      ? "Deepgram API key is configured."
      : "A Deepgram API key is required for server-side speech API requests.",
  }];
}

async function deepgramJsonResponse(response: Response, surface: "STT" | "TTS"): Promise<DeepgramSpeechJsonObject> {
  const text = await response.text();
  if (!response.ok) {
    throw new Error(text || `Deepgram ${surface} returned ${response.status}.`);
  }
  return text ? JSON.parse(text) as DeepgramSpeechJsonObject : {};
}

function firstDeepgramAlternative(json: DeepgramSpeechJsonObject) {
  const results = objectField(json.results);
  const channel = objectArrayField(results?.channels)?.[0];
  return objectArrayField(channel?.alternatives)?.[0];
}

function deepgramModelName(metadata: DeepgramSpeechJsonObject | undefined) {
  const modelIds = stringArrayField(metadata?.models);
  const firstModelId = modelIds?.[0];
  if (!firstModelId) return undefined;
  const modelInfo = objectField(metadata?.model_info);
  return stringField(objectField(modelInfo?.[firstModelId])?.name)
    ?? stringField(objectField(modelInfo?.[firstModelId])?.arch);
}

function appendQuery(url: URL, key: string, value: string | number | boolean | undefined) {
  if (value !== undefined) url.searchParams.set(key, String(value));
}

function compactJson(input: Record<string, DeepgramSpeechJsonValue | undefined>): DeepgramSpeechJsonObject {
  const output: DeepgramSpeechJsonObject = {};
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) output[key] = value;
  }
  return output;
}

function requireDeepgramApiKey(value: string | undefined) {
  if (!value) throw new Error("Deepgram API key is required to create a speech voice provider.");
  return value;
}

function stringField(value: DeepgramSpeechJsonValue | undefined) {
  return typeof value === "string" ? value : undefined;
}

function numberField(value: DeepgramSpeechJsonValue | undefined) {
  return typeof value === "number" ? value : undefined;
}

function objectField(value: DeepgramSpeechJsonValue | undefined) {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? value
    : undefined;
}

function objectArrayField(value: DeepgramSpeechJsonValue | undefined) {
  return Array.isArray(value)
    ? value.filter((item): item is DeepgramSpeechJsonObject => typeof item === "object" && item !== null && !Array.isArray(item))
    : undefined;
}

function stringArrayField(value: DeepgramSpeechJsonValue | undefined) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : undefined;
}

function numberHeader(headers: Headers, name: string) {
  const value = headers.get(name);
  if (!value) return undefined;
  const number = Number(value);
  return Number.isFinite(number) ? number : undefined;
}
