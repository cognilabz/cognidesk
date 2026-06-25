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
import type { ElevenLabsClient as ElevenLabsSdkClient } from "@elevenlabs/elevenlabs-js";
import { elevenLabsVoiceProviderManifest } from "./manifest.js";

export { elevenLabsVoiceProviderManifest } from "./manifest.js";

export interface ElevenLabsVoiceClientOptions {
  apiKey?: string;
  apiBaseUrl?: string;
  rawClient?: ElevenLabsRawClient;
}

export interface ElevenLabsRawClient {
  textToSpeech?: {
    convert(...args: Parameters<ElevenLabsSdkClient["textToSpeech"]["convert"]>): Promise<unknown>;
    stream?(...args: Parameters<ElevenLabsSdkClient["textToSpeech"]["stream"]>): Promise<unknown>;
    convertWithTimestamps?(
      ...args: Parameters<ElevenLabsSdkClient["textToSpeech"]["convertWithTimestamps"]>
    ): Promise<unknown>;
  };
  speechToText?: {
    convert(...args: Parameters<ElevenLabsSdkClient["speechToText"]["convert"]>): Promise<unknown>;
    transcripts?: Partial<Pick<ElevenLabsSdkClient["speechToText"]["transcripts"], "get" | "delete">>;
  };
  conversationalAi?: {
    conversations?: {
      getSignedUrl(
        ...args: Parameters<ElevenLabsSdkClient["conversationalAi"]["conversations"]["getSignedUrl"]>
      ): Promise<ElevenLabsConversationSignedUrlResponse | string>;
    };
  };
  fetch?: ElevenLabsSdkClient["fetch"];
}

export interface ElevenLabsConversationSignedUrlRequest {
  agentId: string;
  includeConversationId?: boolean;
  branchId?: string;
  environment?: string;
}

export interface ElevenLabsConversationSignedUrlResponse {
  signedUrl?: string;
  signed_url?: string;
  [key: string]: unknown;
}

export interface ElevenLabsCreateSpeechInput {
  voiceId: string;
  text: string;
  modelId?: string;
  outputFormat?: string;
  signal?: AbortSignal;
}

export interface ElevenLabsCreateTranscriptInput {
  file?: Blob;
  fileName?: string;
  sourceUrl?: string;
  modelId?: string;
  languageCode?: string;
  timestampsGranularity?: "none" | "word" | "character";
  signal?: AbortSignal;
}

export interface ElevenLabsTranscriptResponse {
  transcription_id?: string;
  transcriptionId?: string;
  text?: string;
  language_code?: string;
  languageCode?: string;
  language_probability?: number;
  languageProbability?: number;
  [key: string]: unknown;
}

export interface ElevenLabsVoiceClient {
  getRawClient(): Promise<ElevenLabsRawClient>;
  createSpeech(input: ElevenLabsCreateSpeechInput): Promise<ArrayBuffer>;
  createTranscript(input: ElevenLabsCreateTranscriptInput): Promise<ElevenLabsTranscriptResponse>;
  createConversationSignedUrl(input: { agentId: string; signal?: AbortSignal }): Promise<string>;
}

export interface ElevenLabsVoiceProviderOptions
  extends Omit<Partial<SpeechPipelineVoiceProviderOptions>, "provider" | "transcriptionSource" | "transcribe" | "synthesize"> {
  apiKey?: string;
  client?: ElevenLabsVoiceClient;
  rawClient?: ElevenLabsRawClient;
  apiBaseUrl?: string;
  voiceId: string;
  speechToTextModelId?: string;
  textToSpeechModelId?: string;
  languageCode?: string;
  outputFormat?: string;
}

const elevenLabsVoiceOperationHandlers = {
  "voice.speak": async (input: unknown, context: IntegrationOperationContext) =>
    metadataClient<ElevenLabsVoiceClient>(context).createSpeech(input as ElevenLabsCreateSpeechInput),
  "voice.turn.finalize": async (input: unknown, context: IntegrationOperationContext) =>
    metadataClient<ElevenLabsVoiceClient>(context).createTranscript(input as ElevenLabsCreateTranscriptInput),
  "elevenlabs.conversation.authorize": async (
    input: unknown,
    context: IntegrationOperationContext,
  ) => metadataClient<ElevenLabsVoiceClient>(context).createConversationSignedUrl(
    input as { agentId: string; signal?: AbortSignal },
  ),
} as const;

export const elevenLabsVoiceIntegration = defineIntegration({
  manifest: elevenLabsVoiceProviderManifest,
  operations: elevenLabsVoiceOperationHandlers,
});

function metadataClient<Client>(context: IntegrationOperationContext): Client {
  const client = context.metadata?.client;
  if (!client) throw new Error("Pass an ElevenLabs voice client as context.metadata.client.");
  return client as Client;
}

export function createElevenLabsVoiceProvider(options: ElevenLabsVoiceProviderOptions) {
  const client = options.client ?? createElevenLabsVoiceClient({
    apiKey: requireApiKey(options.apiKey),
    ...(options.apiBaseUrl ? { apiBaseUrl: options.apiBaseUrl } : {}),
    ...(options.rawClient ? { rawClient: options.rawClient } : {}),
  });
  return createSpeechPipelineVoiceProvider({
    id: options.id ?? "elevenlabs-voice",
    provider: "elevenlabs",
    model: options.model ?? options.textToSpeechModelId ?? options.speechToTextModelId ?? "elevenlabs-voice",
    transcriptionSource: "elevenlabs-speech-to-text",
    ...(options.sampleRate !== undefined ? { sampleRate: options.sampleRate } : {}),
    ...(options.silenceThreshold !== undefined ? { silenceThreshold: options.silenceThreshold } : {}),
    ...(options.endSilenceMs !== undefined ? { endSilenceMs: options.endSilenceMs } : {}),
    ...(options.minSpeechMs !== undefined ? { minSpeechMs: options.minSpeechMs } : {}),
    ...(options.maxSpeechMs !== undefined ? { maxSpeechMs: options.maxSpeechMs } : {}),
    async transcribe(input) {
      const transcript = await client.createTranscript({
        modelId: options.speechToTextModelId ?? "scribe_v1",
        file: pcm16WavBlob(input.audio, input.sampleRate),
        fileName: "cognidesk-voice-input.wav",
        ...(options.languageCode !== undefined ? { languageCode: options.languageCode } : {}),
        timestampsGranularity: "word",
        signal: input.signal,
      });
      const transcriptionId = transcript.transcription_id ?? transcript.transcriptionId;
      const languageCode = transcript.language_code ?? transcript.languageCode;
      const languageProbability = transcript.language_probability ?? transcript.languageProbability;
      return {
        text: transcript.text ?? "",
        ...(transcriptionId ? { itemId: transcriptionId } : {}),
        metadata: compact({
          provider: "elevenlabs",
          ...(languageCode ? { languageCode } : {}),
          ...(languageProbability !== undefined ? { languageProbability } : {}),
        }) as Record<string, string | number | boolean | null>,
      };
    },
    async synthesize(input) {
      const modelId = options.textToSpeechModelId ?? input.profile?.modelSet?.model;
      const audio = await client.createSpeech({
        voiceId: input.profile?.modelSet?.voice ?? options.voiceId,
        text: input.text,
        ...(modelId !== undefined ? { modelId } : {}),
        outputFormat: options.outputFormat ?? "pcm_24000",
        signal: input.signal,
      });
      return {
        audio,
        transcript: input.text,
        metadata: {
          provider: "elevenlabs",
          voiceId: input.profile?.modelSet?.voice ?? options.voiceId,
          outputFormat: options.outputFormat ?? "pcm_24000",
        },
      };
    },
  });
}

export function createElevenLabsVoiceClient(options: ElevenLabsVoiceClientOptions): ElevenLabsVoiceClient {
  let rawClientPromise: Promise<ElevenLabsRawClient> | undefined;
  const getRawClient = () => {
    rawClientPromise ??= options.rawClient
      ? Promise.resolve(options.rawClient)
      : createElevenLabsSdkClient(options);
    return rawClientPromise;
  };
  return {
    getRawClient,
    async createSpeech(input) {
      const rawClient = await getRawClient();
      const response = await rawClient.textToSpeech?.convert(
        input.voiceId,
        textToSpeechConvertRequest(input),
        requestOptions(input.signal),
      );
      return responseToArrayBuffer(response);
    },
    async createTranscript(input) {
      if (!input.file && !input.sourceUrl) {
        throw new Error("Exactly one of file or sourceUrl is required to create an ElevenLabs transcript.");
      }
      if (input.file && input.sourceUrl) {
        throw new Error("Only one of file or sourceUrl can be used to create an ElevenLabs transcript.");
      }
      const rawClient = await getRawClient();
      const response = await rawClient.speechToText?.convert(
        speechToTextConvertRequest(input),
        requestOptions(input.signal),
      );
      return normalizeTranscript(response);
    },
    async createConversationSignedUrl(input) {
      const rawClient = await getRawClient();
      const response = await rawClient.conversationalAi?.conversations?.getSignedUrl?.(
        { agentId: input.agentId },
        requestOptions(input.signal),
      );
      if (typeof response === "string") return response;
      if (isRecord(response) && typeof response.signed_url === "string") return response.signed_url;
      if (isRecord(response) && typeof response.signedUrl === "string") return response.signedUrl;
      throw new Error("ElevenLabs SDK signed URL response did not include a URL.");
    },
  };
}

type TextToSpeechConvertRequest = Parameters<ElevenLabsSdkClient["textToSpeech"]["convert"]>[1];
type SpeechToTextConvertRequest = Parameters<ElevenLabsSdkClient["speechToText"]["convert"]>[0];
type ElevenLabsRequestOptions = Parameters<ElevenLabsSdkClient["textToSpeech"]["convert"]>[2];

export function elevenLabsVoiceCredentialStatuses(input: { apiKey?: string }): ProviderCredentialStatusInput[] {
  const configured = Boolean(input.apiKey);
  return [{
    providerPackageId: elevenLabsVoiceProviderManifest.id,
    requirementId: "elevenlabs-api-key",
    state: configured ? "configured" : "missing",
    message: configured
      ? "ElevenLabs API key is configured."
      : "An ElevenLabs API key is required for server-side voice API requests.",
  }];
}

async function createElevenLabsSdkClient(options: ElevenLabsVoiceClientOptions): Promise<ElevenLabsRawClient> {
  const apiKey = requireApiKey(options.apiKey);
  const sdk = await import("@elevenlabs/elevenlabs-js");
  const Client = sdk.ElevenLabsClient;
  return new Client({
    apiKey,
    ...(options.apiBaseUrl ? { baseUrl: options.apiBaseUrl } : {}),
  }) as unknown as ElevenLabsRawClient;
}

async function responseToArrayBuffer(response: unknown): Promise<ArrayBuffer> {
  if (response instanceof ArrayBuffer) return response;
  if (response instanceof Uint8Array) return arrayBufferFromBytes(response);
  if (response instanceof Response) return response.arrayBuffer();
  if (response instanceof ReadableStream) return streamToArrayBuffer(response);
  if (isRecord(response) && response.body instanceof ReadableStream) return streamToArrayBuffer(response.body);
  throw new Error("Unsupported ElevenLabs SDK audio response shape.");
}

function arrayBufferFromBytes(bytes: Uint8Array) {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy.buffer;
}

function normalizeTranscript(response: unknown): ElevenLabsTranscriptResponse {
  if (isRecord(response)) {
    return {
      ...response,
      ...(typeof response.transcription_id === "string" || typeof response.transcriptionId !== "string"
        ? {}
        : { transcription_id: response.transcriptionId }),
      ...(typeof response.language_code === "string" || typeof response.languageCode !== "string"
        ? {}
        : { language_code: response.languageCode }),
      ...(typeof response.language_probability === "number" || typeof response.languageProbability !== "number"
        ? {}
        : { language_probability: response.languageProbability }),
    } as ElevenLabsTranscriptResponse;
  }
  return {};
}

function uploadableFile(input: ElevenLabsCreateTranscriptInput) {
  if (!input.file) return undefined;
  return input.fileName ? { data: input.file, filename: input.fileName } : input.file;
}

function textToSpeechConvertRequest(input: ElevenLabsCreateSpeechInput): TextToSpeechConvertRequest {
  const request: Partial<TextToSpeechConvertRequest> & { text: string } = { text: input.text };
  if (input.modelId !== undefined) request.modelId = input.modelId as NonNullable<TextToSpeechConvertRequest["modelId"]>;
  if (input.outputFormat !== undefined) {
    request.outputFormat = input.outputFormat as NonNullable<TextToSpeechConvertRequest["outputFormat"]>;
  }
  return request as TextToSpeechConvertRequest;
}

function speechToTextConvertRequest(input: ElevenLabsCreateTranscriptInput): SpeechToTextConvertRequest {
  const request: Partial<SpeechToTextConvertRequest> & Pick<SpeechToTextConvertRequest, "modelId"> = {
    modelId: (input.modelId ?? "scribe_v1") as NonNullable<SpeechToTextConvertRequest["modelId"]>,
  };
  const file = uploadableFile(input);
  if (file !== undefined) request.file = file as SpeechToTextConvertRequest["file"];
  if (input.sourceUrl !== undefined) request.sourceUrl = input.sourceUrl;
  if (input.languageCode !== undefined) request.languageCode = input.languageCode;
  if (input.timestampsGranularity !== undefined) {
    request.timestampsGranularity =
      input.timestampsGranularity as NonNullable<SpeechToTextConvertRequest["timestampsGranularity"]>;
  }
  return request as SpeechToTextConvertRequest;
}

function requestOptions(signal: AbortSignal | undefined): ElevenLabsRequestOptions {
  return compact({ abortSignal: signal }) as ElevenLabsRequestOptions;
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

function compact(input: Record<string, unknown | undefined>) {
  const output: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) output[key] = value;
  }
  return output;
}

function requireApiKey(value: string | undefined) {
  if (!value) throw new Error("ElevenLabs API key is required to create a voice client.");
  return value;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
