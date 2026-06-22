import {
  defineIntegration,
  type IntegrationOperationContext,
  type ProviderCredentialStatusInput,
} from "@cognidesk/integration-kit";
import {
  createSpeechPipelineVoiceProvider,
  pcm16WavBlob,
  type SpeechPipelineVoiceProviderOptions,
} from "@cognidesk/integration-kit/speech";
import { deepgramVoiceProviderManifest } from "./manifest.js";

export { deepgramVoiceProviderManifest } from "./manifest.js";

export interface DeepgramVoiceClientOptions {
  apiKey?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
  rawClient?: DeepgramRawClient;
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
  raw?: DeepgramJsonObject;
}

export interface DeepgramTextToSpeechInput {
  text: string;
  model?: string;
  encoding?: string;
  container?: string;
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

export interface DeepgramVoiceClient {
  getRawClient(): Promise<DeepgramRawClient>;
  transcribeAudio(input: DeepgramTranscribeAudioInput): Promise<DeepgramTranscriptionResult>;
  synthesizeSpeech(input: DeepgramTextToSpeechInput): Promise<DeepgramTextToSpeechResult>;
}

export interface DeepgramVoiceProviderOptions
  extends Omit<Partial<SpeechPipelineVoiceProviderOptions>, "provider" | "transcriptionSource" | "transcribe" | "synthesize"> {
  apiKey?: string;
  client?: DeepgramVoiceClient;
  rawClient?: DeepgramRawClient;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
  speechToTextModel?: string;
  textToSpeechModel?: string;
  language?: string;
  smartFormat?: boolean;
  punctuate?: boolean;
  detectLanguage?: boolean;
  encoding?: string;
  container?: string;
  outputSampleRate?: number;
}

export type DeepgramJsonPrimitive = string | number | boolean | null;
export type DeepgramJsonValue = DeepgramJsonPrimitive | DeepgramJsonObject | DeepgramJsonValue[];
export interface DeepgramJsonObject {
  [key: string]: DeepgramJsonValue;
}

export interface DeepgramRawClient {
  listen?: {
    v1?: {
      media?: {
        transcribeFile(uploadable: Blob, request: Record<string, unknown>, requestOptions?: Record<string, unknown>): Promise<unknown>;
      };
    };
  };
  speak?: {
    v1?: {
      audio?: {
        generate(request: Record<string, unknown>, requestOptions?: Record<string, unknown>): Promise<unknown>;
      };
    };
  };
}

const DEFAULT_STT_MODEL = "nova-3";
const DEFAULT_TTS_MODEL = "aura-2-thalia-en";
const DEFAULT_TTS_ENCODING = "linear16";
const DEFAULT_TTS_CONTAINER = "none";
const DEFAULT_SAMPLE_RATE = 24_000;

export const deepgramVoiceIntegration = defineIntegration({
  manifest: deepgramVoiceProviderManifest,
  operations: {
    "voice.turn.finalize": async (input: unknown, context: IntegrationOperationContext) =>
      metadataClient<DeepgramVoiceClient>(context).transcribeAudio(input as DeepgramTranscribeAudioInput),
    "voice.speak": async (input: unknown, context: IntegrationOperationContext) =>
      metadataClient<DeepgramVoiceClient>(context).synthesizeSpeech(input as DeepgramTextToSpeechInput),
  },
});

function metadataClient<Client>(context: IntegrationOperationContext): Client {
  const client = context.metadata?.client;
  if (!client) throw new Error("Pass a Deepgram voice client as context.metadata.client.");
  return client as Client;
}

export function createDeepgramVoiceProvider(options: DeepgramVoiceProviderOptions = {}) {
  const client = options.client ?? createDeepgramVoiceClient({
    apiKey: requireApiKey(options.apiKey),
    ...(options.rawClient ? { rawClient: options.rawClient } : {}),
    ...(options.apiBaseUrl ? { apiBaseUrl: options.apiBaseUrl } : {}),
    ...(options.fetch ? { fetch: options.fetch } : {}),
  });
  return createSpeechPipelineVoiceProvider({
    id: options.id ?? "deepgram-voice",
    provider: "deepgram",
    model: options.model ?? options.textToSpeechModel ?? options.speechToTextModel ?? "deepgram-voice",
    transcriptionSource: "deepgram-speech-to-text",
    ...(options.sampleRate !== undefined ? { sampleRate: options.sampleRate } : {}),
    ...(options.silenceThreshold !== undefined ? { silenceThreshold: options.silenceThreshold } : {}),
    ...(options.endSilenceMs !== undefined ? { endSilenceMs: options.endSilenceMs } : {}),
    ...(options.minSpeechMs !== undefined ? { minSpeechMs: options.minSpeechMs } : {}),
    ...(options.maxSpeechMs !== undefined ? { maxSpeechMs: options.maxSpeechMs } : {}),
    async transcribe(input) {
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

export function createDeepgramVoiceClient(options: DeepgramVoiceClientOptions): DeepgramVoiceClient {
  let rawClientPromise: Promise<DeepgramRawClient> | undefined;
  const getRawClient = () => {
    rawClientPromise ??= options.rawClient
      ? Promise.resolve(options.rawClient)
      : createDeepgramSdkClient(options);
    return rawClientPromise;
  };

  return {
    getRawClient,
    async transcribeAudio(input) {
      const rawClient = await getRawClient();
      const transcribeFile = rawClient.listen?.v1?.media?.transcribeFile;
      if (!transcribeFile) throw new Error("Deepgram SDK client does not expose listen.v1.media.transcribeFile.");
      const sampleRate = input.sampleRate ?? DEFAULT_SAMPLE_RATE;
      const response = await transcribeFile.call(
        rawClient.listen?.v1?.media,
        pcm16WavBlob(input.audio, sampleRate),
        compactJson({
          model: input.model ?? DEFAULT_STT_MODEL,
          smart_format: input.smartFormat ?? true,
          language: input.language,
          punctuate: input.punctuate,
          detect_language: input.detectLanguage,
        }),
        compactJson({ abortSignal: input.signal }),
      );
      const json = normalizeSdkJson(response);
      const metadata = objectField(json.metadata);
      const alternative = firstAlternative(json);
      const requestId = stringField(metadata?.request_id);
      const duration = numberField(metadata?.duration);
      const channels = numberField(metadata?.channels);
      const confidence = numberField(alternative?.confidence);
      const modelName = modelNameFromMetadata(metadata);
      return {
        text: stringField(alternative?.transcript) ?? "",
        ...(requestId ? { requestId } : {}),
        ...(duration !== undefined ? { duration } : {}),
        ...(channels !== undefined ? { channels } : {}),
        ...(confidence !== undefined ? { confidence } : {}),
        ...(modelName ? { modelName } : {}),
        raw: json,
      };
    },
    async synthesizeSpeech(input) {
      const rawClient = await getRawClient();
      const generate = rawClient.speak?.v1?.audio?.generate;
      if (!generate) throw new Error("Deepgram SDK client does not expose speak.v1.audio.generate.");
      const encoding = input.encoding ?? DEFAULT_TTS_ENCODING;
      const container = input.container ?? DEFAULT_TTS_CONTAINER;
      const sampleRate = input.sampleRate ?? DEFAULT_SAMPLE_RATE;
      const response = await generate.call(
        rawClient.speak?.v1?.audio,
        compactJson({
          text: input.text,
          model: input.model ?? DEFAULT_TTS_MODEL,
          encoding,
          container,
          sample_rate: sampleRate,
        }),
        compactJson({ abortSignal: input.signal }),
      );
      return normalizeBinaryResponse(response);
    },
  };
}

export function deepgramVoiceCredentialStatuses(input: { apiKey?: string }): ProviderCredentialStatusInput[] {
  const configured = Boolean(input.apiKey);
  return [{
    providerPackageId: deepgramVoiceProviderManifest.id,
    requirementId: "deepgram-api-key",
    state: configured ? "configured" : "missing",
    message: configured
      ? "Deepgram API key is configured."
      : "A Deepgram API key is required for server-side speech API requests.",
  }];
}

async function createDeepgramSdkClient(options: DeepgramVoiceClientOptions): Promise<DeepgramRawClient> {
  const apiKey = requireApiKey(options.apiKey);
  const sdk = await import("@deepgram/sdk");
  const Client = sdk.DeepgramClient ?? sdk.DefaultDeepgramClient;
  return new Client({
    apiKey,
    ...(options.apiBaseUrl ? { baseUrl: options.apiBaseUrl } : {}),
    ...(options.fetch ? { fetch: options.fetch } : {}),
  }) as unknown as DeepgramRawClient;
}

async function normalizeBinaryResponse(response: unknown): Promise<DeepgramTextToSpeechResult> {
  if (response instanceof Response) {
    const requestId = response.headers.get("dg-request-id") ?? undefined;
    const modelName = response.headers.get("dg-model-name") ?? undefined;
    const modelUuid = response.headers.get("dg-model-uuid") ?? undefined;
    const charCount = numberHeader(response.headers, "dg-char-count");
    const contentType = response.headers.get("content-type") ?? undefined;
    return {
      audio: await response.arrayBuffer(),
      ...(requestId ? { requestId } : {}),
      ...(modelName ? { modelName } : {}),
      ...(modelUuid ? { modelUuid } : {}),
      ...(charCount !== undefined ? { charCount } : {}),
      ...(contentType ? { contentType } : {}),
    };
  }
  if (response instanceof ArrayBuffer) return { audio: response };
  if (response instanceof Uint8Array) return { audio: arrayBufferFromBytes(response) };
  if (isRecord(response) && response.body instanceof ReadableStream) {
    return { audio: await streamToArrayBuffer(response.body) };
  }
  if (isRecord(response) && response.data instanceof ArrayBuffer) return { audio: response.data };
  if (isRecord(response) && response.result instanceof ArrayBuffer) return { audio: response.result };
  throw new Error("Unsupported Deepgram SDK TTS response shape.");
}

function arrayBufferFromBytes(bytes: Uint8Array) {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy.buffer;
}

function normalizeSdkJson(value: unknown): DeepgramJsonObject {
  if (isRecord(value) && isRecord(value.result)) return value.result as DeepgramJsonObject;
  if (isRecord(value)) return value as DeepgramJsonObject;
  return {};
}

async function streamToArrayBuffer(stream: ReadableStream<Uint8Array>) {
  const chunks: Uint8Array[] = [];
  let total = 0;
  const reader = stream.getReader();
  try {
    while (true) {
      const next = await reader.read();
      if (next.done) break;
      chunks.push(next.value);
      total += next.value.byteLength;
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes.buffer;
}

function firstAlternative(json: DeepgramJsonObject) {
  const results = objectField(json.results);
  const channel = objectArrayField(results?.channels)?.[0];
  return objectArrayField(channel?.alternatives)?.[0];
}

function modelNameFromMetadata(metadata: DeepgramJsonObject | undefined) {
  const modelIds = stringArrayField(metadata?.models);
  const firstModelId = modelIds?.[0];
  if (!firstModelId) return undefined;
  const modelInfo = objectField(metadata?.model_info);
  return stringField(objectField(modelInfo?.[firstModelId])?.name)
    ?? stringField(objectField(modelInfo?.[firstModelId])?.arch);
}

function compactJson(input: Record<string, DeepgramJsonValue | AbortSignal | undefined>): DeepgramJsonObject {
  const output: DeepgramJsonObject = {};
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) output[key] = value as DeepgramJsonValue;
  }
  return output;
}

function requireApiKey(value: string | undefined) {
  if (!value) throw new Error("Deepgram API key is required to create a voice client.");
  return value;
}

function stringField(value: DeepgramJsonValue | undefined) {
  return typeof value === "string" ? value : undefined;
}

function numberField(value: DeepgramJsonValue | undefined) {
  return typeof value === "number" ? value : undefined;
}

function objectField(value: DeepgramJsonValue | undefined) {
  return isRecord(value) ? value as DeepgramJsonObject : undefined;
}

function objectArrayField(value: DeepgramJsonValue | undefined) {
  return Array.isArray(value)
    ? value.filter((item): item is DeepgramJsonObject => isRecord(item))
    : undefined;
}

function stringArrayField(value: DeepgramJsonValue | undefined) {
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
