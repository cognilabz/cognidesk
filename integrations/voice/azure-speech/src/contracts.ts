import type * as MicrosoftSpeechSdk from "microsoft-cognitiveservices-speech-sdk";
import type { SpeechPipelineVoiceProviderOptions } from "./speech-pipeline.js";

export interface AzureSpeechClientOptions {
  speechKey: string;
  region: string;
  sdk?: AzureSpeechSdk;
  createSpeechConfig?: AzureSpeechConfigFactory;
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
  raw?: unknown;
}

export interface AzureTextToSpeechInput {
  text: string;
  voiceName: string;
  language?: string;
  outputFormat?: AzureSpeechSynthesisOutputFormat;
  signal?: AbortSignal;
}

export type AzureSpeechOperationAlias =
  | "voice.session.start"
  | "voice.turn.finalize"
  | "voice.speak";

export interface AzureSpeechOperationInputMap {
  "voice.session.start": AzureSpeechToTextInput;
  "voice.turn.finalize": AzureSpeechToTextInput;
  "voice.speak": AzureTextToSpeechInput;
}

export interface AzureSpeechOperationOutputMap {
  "voice.session.start": AzureSpeechToTextResult;
  "voice.turn.finalize": AzureSpeechToTextResult;
  "voice.speak": ArrayBuffer;
}

export type AzureSpeechOperationHandler<K extends AzureSpeechOperationAlias> = (
  input: AzureSpeechOperationInputMap[K],
) => Promise<AzureSpeechOperationOutputMap[K]>;

export type AzureSpeechOperationHandlers = {
  [K in AzureSpeechOperationAlias]: AzureSpeechOperationHandler<K>;
};

export interface AzureSpeechClient {
  rawSdk: AzureSpeechSdk;
  rawHandles: AzureSpeechRawConfigHandles;
  createSpeechConfig: AzureSpeechConfigFactory;
  handlers: AzureSpeechOperationHandlers;
  execute<K extends AzureSpeechOperationAlias>(
    alias: K,
    input: AzureSpeechOperationInputMap[K],
  ): Promise<AzureSpeechOperationOutputMap[K]>;
  transcribeSpeech(input: AzureSpeechToTextInput): Promise<AzureSpeechToTextResult>;
  synthesizeSpeech(input: AzureTextToSpeechInput): Promise<ArrayBuffer>;
}

export interface AzureSpeechIntegrationOptions extends Partial<AzureSpeechClientOptions> {
  client?: AzureSpeechClient;
}

export interface AzureSpeechVoiceProviderOptions
  extends Omit<Partial<SpeechPipelineVoiceProviderOptions>, "provider" | "transcriptionSource" | "transcribe" | "synthesize"> {
  speechKey?: string;
  region?: string;
  client?: AzureSpeechClient;
  sdk?: AzureSpeechSdk;
  language?: string;
  voiceName: string;
  outputFormat?: AzureSpeechSynthesisOutputFormat;
}

export type AzureSpeechSynthesisOutputFormatName = keyof typeof MicrosoftSpeechSdk.SpeechSynthesisOutputFormat;
export type AzureSpeechSynthesisOutputFormat =
  | AzureSpeechSynthesisOutputFormatName
  | MicrosoftSpeechSdk.SpeechSynthesisOutputFormat;

export type AzureSpeechConfigFactory = () => AzureSpeechConfig;

export interface AzureSpeechRawConfigHandles {
  sdk: AzureSpeechSdk;
  createSpeechConfig: AzureSpeechConfigFactory;
}

export interface AzureSpeechSdk {
  SpeechConfig: {
    fromSubscription(speechKey: string, region: string): AzureSpeechConfig;
  };
  AudioConfig: {
    fromStreamInput(stream: AzurePushAudioInputStream): AzureAudioConfig;
  };
  AudioInputStream: {
    createPushStream(format?: unknown): AzurePushAudioInputStream;
  };
  AudioStreamFormat: {
    getWaveFormatPCM(samplesPerSec: number, bitsPerSample: number, channels: number): unknown;
  };
  SpeechRecognizer: new(speechConfig: AzureSpeechConfig, audioConfig?: AzureAudioConfig) => AzureSpeechRecognizer;
  SpeechSynthesizer: new(speechConfig: AzureSpeechConfig, audioConfig?: AzureAudioConfig | null) => AzureSpeechSynthesizer;
  ResultReason?: Record<string, number | string | undefined>;
  SpeechSynthesisOutputFormat: Partial<Record<AzureSpeechSynthesisOutputFormatName, MicrosoftSpeechSdk.SpeechSynthesisOutputFormat>>
    & Record<string, number | string | undefined>;
}

export type AzureAudioConfig = MicrosoftSpeechSdk.AudioConfig | Record<string, unknown>;

export interface AzureSpeechConfig {
  speechRecognitionLanguage?: string;
  speechSynthesisVoiceName?: string;
  speechSynthesisLanguage?: string;
  speechSynthesisOutputFormat?: AzureSpeechSynthesisOutputFormat;
}

export interface AzurePushAudioInputStream {
  write(buffer: ArrayBuffer): void;
  close(): void;
}

export interface AzureSpeechRecognizer {
  recognizeOnceAsync(
    success: (result: AzureSpeechRecognitionResult) => void,
    error: (error: string) => void,
  ): void;
  close?(success?: () => void, error?: (error: string) => void): void;
}

export interface AzureSpeechRecognitionResult
  extends Partial<Pick<
    MicrosoftSpeechSdk.SpeechRecognitionResult,
    "text" | "reason" | "duration" | "offset" | "errorDetails"
  >> {}

export interface AzureSpeechSynthesizer {
  speakTextAsync(
    text: string,
    success: (result: AzureSpeechSynthesisResult) => void,
    error: (error: string) => void,
  ): void;
  close?(success?: () => void, error?: (error: string) => void): void;
}

export interface AzureSpeechSynthesisResult
  extends Partial<Pick<
    MicrosoftSpeechSdk.SpeechSynthesisResult,
    "audioData" | "reason" | "errorDetails"
  >> {}
