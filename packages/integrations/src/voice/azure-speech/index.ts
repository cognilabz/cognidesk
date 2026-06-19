import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import {
  createSpeechPipelineVoiceProvider,
  pcm16WavBytes,
  type SpeechPipelineVoiceProviderOptions,
} from "../speech-pipeline.js";
import { AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT } from "./full-api-client.generated.js";
import {
  AZURE_SPEECH_FULL_API_OPERATION_COUNT,
  AZURE_SPEECH_FULL_API_SPEC_VERSION,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";
export {
  AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
  AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES,
  createAzureSpeechFullApiGeneratedClient,
  type AzureSpeechFullApiGeneratedClient,
  type AzureSpeechGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  AZURE_SPEECH_FULL_API_GENERATED_AT,
  AZURE_SPEECH_FULL_API_OPERATION_BY_ID,
  AZURE_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID,
  AZURE_SPEECH_FULL_API_OPERATION_COUNT,
  AZURE_SPEECH_FULL_API_OPERATIONS,
  AZURE_SPEECH_FULL_API_SPECS,
  AZURE_SPEECH_FULL_API_SPEC,
  AZURE_SPEECH_FULL_API_SPEC_SOURCE,
  AZURE_SPEECH_FULL_API_SPEC_VERSION,
  type AzureSpeechFullApiOperation,
  type AzureSpeechFullApiOperationId,
  type AzureSpeechFullApiOperationMethod,
  type AzureSpeechFullApiSpec,
} from "./full-api-operations.generated.js";

export const azureSpeechProviderManifest = defineProviderPackage({
  id: "voice.azure-speech",
  name: "Azure AI Speech",
  packageName: "@cognidesk/integrations",
  provider: "azure-speech",
  category: "voice",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "Implements Azure AI Speech speech-to-text and text-to-speech for Cognidesk STT/TTS voice pipelines.",
      "Generated operation inventory and caller interfaces cover Microsoft azure-rest-api-specs Speech data-plane files for Speech-to-Text management, custom voice, batch synthesis, and transcription surfaces.",
      "Azure Speech supplies transcripts and synthesized PCM audio while Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary.",
      "The short-audio STT and realtime TTS endpoints used by the built-in adapter are documented in Microsoft REST docs but are not represented in the generated azure-rest-api-specs files, so that adapter code remains handwritten.",
      "Does not implement the full Azure AI Speech SDK, avatar/video APIs, telephony carrier setup, or Azure account policy.",
    ],
    evidence: [
      { label: "Azure AI Speech to text REST API", url: "https://learn.microsoft.com/azure/ai-services/speech-service/rest-speech-to-text-short" },
      { label: "Azure AI Text to speech REST API", url: "https://learn.microsoft.com/azure/ai-services/speech-service/rest-text-to-speech" },
      { label: "Azure Speech audio output formats", url: "https://learn.microsoft.com/azure/ai-services/speech-service/rest-text-to-speech#audio-outputs" },
    ],
  },
  credentialRequirements: [
    {
      id: "azure-speech-key",
      label: "Azure Speech resource key",
      description: "Server-side Azure AI Speech resource key used for speech-to-text and text-to-speech REST calls.",
      required: true,
    },
    {
      id: "azure-speech-region",
      label: "Azure Speech region",
      description: "Azure region for the Speech resource, such as eastus or westeurope.",
      required: true,
    },
  ],
  capabilities: [
    {
      capability: "receive",
      label: "Transcribe speech",
      description: "Transcribes customer PCM voice input with Azure AI Speech to text.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "azureSpeechTranscript", label: "Azure Speech Transcript" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "send",
      label: "Synthesize speech",
      description: "Synthesizes Cognidesk assistant text with Azure AI Text to speech.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "azureSpeechSynthesis", label: "Azure Speech Synthesis" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
    },
    {
      capability: "media",
      label: "Speech audio media",
      description: "Exchanges buffered PCM input and synthesized 24 kHz PCM output for Cognidesk voice sessions.",
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
    "Customer audio is sent to Azure Speech for transcription, and assistant response text is sent to Azure Speech for synthesis.",
    "Azure Speech credentials remain server-side and are never issued to browsers by this package.",
  ],
  limitations: [
    "This package implements short-audio REST STT and REST TTS for Cognidesk speech pipelines, not full streaming Azure Speech SDK sessions.",
    "The background LLM is the Cognidesk Agent Model Set configured through @cognidesk/model, not Azure Speech.",
    "Consent, recording, retention, region selection, private networking, and Azure account policy remain SDK-user configuration.",
  ],
  metadata: {
    channelCoverage: {
      speechToText: "typed-short-audio-rest",
      textToSpeech: "typed-rest",
      browserVoiceProtocol: "sdk-owned-cognidesk-voice-websocket",
      backgroundModelProvider: "sdk-owned-agent-model-set",
      fullAzureSpeechSdk: "not-covered",
      telephony: "not-covered",
    },
    generatedSpeechApi: {
      operationCount: AZURE_SPEECH_FULL_API_OPERATION_COUNT,
      functionCount: AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
      apiVersion: AZURE_SPEECH_FULL_API_SPEC_VERSION,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export interface AzureSpeechClientOptions {
  speechKey: string;
  region: string;
  fetch?: typeof fetch;
  speechToTextEndpoint?: string;
  textToSpeechEndpoint?: string;
}

export interface AzureSpeechCredentialStatusInput {
  speechKey?: string;
  region?: string;
}

export interface AzureSpeechToTextInput {
  audio: Uint8Array;
  sampleRate?: number;
  language?: string;
  signal?: AbortSignal;
}

export interface AzureSpeechToTextResult {
  text: string;
  recognitionStatus?: string;
  duration?: number;
  offset?: number;
  raw?: AzureSpeechJsonObject;
}

export interface AzureTextToSpeechInput {
  text: string;
  voiceName: string;
  language?: string;
  outputFormat?: string;
  signal?: AbortSignal;
}

export interface AzureSpeechClient {
  transcribeSpeech(input: AzureSpeechToTextInput): Promise<AzureSpeechToTextResult>;
  synthesizeSpeech(input: AzureTextToSpeechInput): Promise<ArrayBuffer>;
}

export interface AzureSpeechVoiceProviderOptions
  extends Omit<Partial<SpeechPipelineVoiceProviderOptions>, "provider" | "transcriptionSource" | "transcribe" | "synthesize"> {
  speechKey?: string;
  region?: string;
  client?: AzureSpeechClient;
  fetch?: typeof fetch;
  speechToTextEndpoint?: string;
  textToSpeechEndpoint?: string;
  language?: string;
  voiceName: string;
  outputFormat?: string;
}

export type AzureSpeechJsonPrimitive = string | number | boolean | null;
export type AzureSpeechJsonValue =
  | AzureSpeechJsonPrimitive
  | AzureSpeechJsonObject
  | readonly AzureSpeechJsonValue[];
export interface AzureSpeechJsonObject {
  [key: string]: AzureSpeechJsonValue | undefined;
}
export type AzureSpeechResource = AzureSpeechJsonValue | ArrayBuffer | ReadableStream<Uint8Array>;
export interface AzureSpeechOperationRequestInput {
  pathParams?: Record<string, string | number>;
  query?: Record<string, AzureSpeechJsonValue | undefined>;
  body?: AzureSpeechJsonValue | ArrayBuffer | Uint8Array | FormData;
  headers?: Record<string, string>;
  contentType?: string;
  responseType?: "json" | "arrayBuffer" | "response" | "stream";
}

export function createAzureSpeechVoiceProvider(options: AzureSpeechVoiceProviderOptions) {
  const client = options.client ?? createAzureSpeechClient({
    speechKey: requireOption(options.speechKey, "Azure Speech key is required to create a speech voice provider."),
    region: requireOption(options.region, "Azure Speech region is required to create a speech voice provider."),
    ...(options.fetch ? { fetch: options.fetch } : {}),
    ...(options.speechToTextEndpoint ? { speechToTextEndpoint: options.speechToTextEndpoint } : {}),
    ...(options.textToSpeechEndpoint ? { textToSpeechEndpoint: options.textToSpeechEndpoint } : {}),
  });
  return createSpeechPipelineVoiceProvider({
    id: options.id ?? "azure-speech",
    provider: "azure-speech",
    model: options.model ?? "azure-speech-stt-tts",
    transcriptionSource: "azure-speech-to-text",
    ...(options.sampleRate !== undefined ? { sampleRate: options.sampleRate } : {}),
    ...(options.silenceThreshold !== undefined ? { silenceThreshold: options.silenceThreshold } : {}),
    ...(options.endSilenceMs !== undefined ? { endSilenceMs: options.endSilenceMs } : {}),
    ...(options.minSpeechMs !== undefined ? { minSpeechMs: options.minSpeechMs } : {}),
    ...(options.maxSpeechMs !== undefined ? { maxSpeechMs: options.maxSpeechMs } : {}),
    async transcribe(input) {
      const transcript = await client.transcribeSpeech({
        audio: input.audio,
        sampleRate: input.sampleRate,
        signal: input.signal,
        ...(options.language !== undefined ? { language: options.language } : {}),
      });
      return {
        text: transcript.text,
        metadata: {
          provider: "azure-speech",
          ...(transcript.recognitionStatus ? { recognitionStatus: transcript.recognitionStatus } : {}),
        },
      };
    },
    async synthesize(input) {
      const voiceName = input.profile?.modelSet?.voice ?? options.voiceName;
      const audio = await client.synthesizeSpeech({
        text: input.text,
        voiceName,
        signal: input.signal,
        ...(options.language !== undefined ? { language: options.language } : {}),
        ...(options.outputFormat !== undefined ? { outputFormat: options.outputFormat } : {}),
      });
      return {
        audio,
        transcript: input.text,
        metadata: {
          provider: "azure-speech",
          voiceName,
          outputFormat: options.outputFormat ?? "raw-24khz-16bit-mono-pcm",
        },
      };
    },
  });
}

export function createAzureSpeechClient(options: AzureSpeechClientOptions): AzureSpeechClient {
  const fetchImpl = options.fetch ?? fetch;
  const speechToTextEndpoint = options.speechToTextEndpoint
    ?? `https://${options.region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1`;
  const textToSpeechEndpoint = options.textToSpeechEndpoint
    ?? `https://${options.region}.tts.speech.microsoft.com/cognitiveservices/v1`;
  return {
    async transcribeSpeech(input) {
      const language = input.language ?? "en-US";
      const sampleRate = input.sampleRate ?? 24_000;
      const url = new URL(speechToTextEndpoint);
      url.searchParams.set("language", language);
      url.searchParams.set("format", "detailed");
      const response = await fetchImpl(url.toString(), {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": options.speechKey,
          "content-type": `audio/wav; codecs=audio/pcm; samplerate=${sampleRate}`,
          accept: "application/json",
        },
        body: pcm16WavBytes(input.audio, sampleRate),
        ...(input.signal ? { signal: input.signal } : {}),
      });
      const json = await azureJsonResponse(response);
      const text = stringField(json.DisplayText)
        ?? stringField(objectArrayField(json.NBest)?.[0]?.Display)
        ?? "";
      const recognitionStatus = stringField(json.RecognitionStatus);
      const duration = numberField(json.Duration);
      const offset = numberField(json.Offset);
      return {
        text,
        ...(recognitionStatus ? { recognitionStatus } : {}),
        ...(duration !== undefined ? { duration } : {}),
        ...(offset !== undefined ? { offset } : {}),
        raw: json,
      };
    },
    async synthesizeSpeech(input) {
      const outputFormat = input.outputFormat ?? "raw-24khz-16bit-mono-pcm";
      const response = await fetchImpl(textToSpeechEndpoint, {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": options.speechKey,
          "content-type": "application/ssml+xml",
          "X-Microsoft-OutputFormat": outputFormat,
          "User-Agent": "cognidesk",
        },
        body: azureSsml({
          text: input.text,
          voiceName: input.voiceName,
          language: input.language ?? languageFromVoiceName(input.voiceName) ?? "en-US",
        }),
        ...(input.signal ? { signal: input.signal } : {}),
      });
      if (!response.ok) {
        const message = await response.text().catch(() => "");
        throw new Error(message || `Azure Speech TTS returned ${response.status}.`);
      }
      return response.arrayBuffer();
    },
  };
}

export function azureSpeechCredentialStatuses(input: AzureSpeechCredentialStatusInput): ProviderCredentialStatusInput[] {
  const keyConfigured = Boolean(input.speechKey);
  const regionConfigured = Boolean(input.region);
  return [
    {
      providerPackageId: azureSpeechProviderManifest.id,
      requirementId: "azure-speech-key",
      state: keyConfigured ? "configured" : "missing",
      message: keyConfigured
        ? "Azure Speech key is configured."
        : "An Azure Speech resource key is required for speech requests.",
    },
    {
      providerPackageId: azureSpeechProviderManifest.id,
      requirementId: "azure-speech-region",
      state: regionConfigured ? "configured" : "missing",
      message: regionConfigured
        ? "Azure Speech region is configured."
        : "An Azure Speech region is required for speech requests.",
    },
  ];
}

async function azureJsonResponse(response: Response): Promise<AzureSpeechJsonObject> {
  const text = await response.text();
  if (!response.ok) {
    throw new Error(text || `Azure Speech STT returned ${response.status}.`);
  }
  return text ? JSON.parse(text) as AzureSpeechJsonObject : {};
}

function azureSsml(input: { text: string; voiceName: string; language: string }) {
  return [
    `<speak version="1.0" xml:lang="${escapeXml(input.language)}" xmlns="http://www.w3.org/2001/10/synthesis">`,
    `<voice name="${escapeXml(input.voiceName)}">${escapeXml(input.text)}</voice>`,
    "</speak>",
  ].join("");
}

function languageFromVoiceName(voiceName: string) {
  const match = /^[a-z]{2}-[A-Z]{2}/.exec(voiceName);
  return match?.[0];
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}

function requireOption(value: string | undefined, message: string) {
  if (!value) throw new Error(message);
  return value;
}

function stringField(value: AzureSpeechJsonValue | undefined) {
  return typeof value === "string" ? value : undefined;
}

function numberField(value: AzureSpeechJsonValue | undefined) {
  return typeof value === "number" ? value : undefined;
}

function objectArrayField(value: AzureSpeechJsonValue | undefined) {
  return Array.isArray(value)
    ? value.filter((item): item is AzureSpeechJsonObject => typeof item === "object" && item !== null && !Array.isArray(item))
    : undefined;
}
