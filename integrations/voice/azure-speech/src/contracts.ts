import type { SpeechPipelineVoiceProviderOptions } from "./speech-pipeline.js";

export interface AzureSpeechClientOptions {
  speechKey: string;
  region: string;
  sdk?: AzureSpeechSdk;
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
  sdk?: AzureSpeechSdk;
  language?: string;
  voiceName: string;
  outputFormat?: string;
}

export interface AzureSpeechSdk {
  SpeechConfig: {
    fromSubscription(speechKey: string, region: string): AzureSpeechConfig;
  };
  AudioConfig: {
    fromStreamInput(stream: unknown): unknown;
  };
  AudioInputStream: {
    createPushStream(format?: unknown): AzurePushAudioInputStream;
  };
  AudioStreamFormat: {
    getWaveFormatPCM(samplesPerSec: number, bitsPerSample: number, channels: number): unknown;
  };
  SpeechRecognizer: new(speechConfig: AzureSpeechConfig, audioConfig: unknown) => AzureSpeechRecognizer;
  SpeechSynthesizer: new(speechConfig: AzureSpeechConfig, audioConfig?: unknown) => AzureSpeechSynthesizer;
  ResultReason?: Record<string, number | string>;
  SpeechSynthesisOutputFormat?: Record<string, number | string>;
}

export interface AzureSpeechConfig {
  speechRecognitionLanguage?: string;
  speechSynthesisVoiceName?: string;
  speechSynthesisLanguage?: string;
  speechSynthesisOutputFormat?: unknown;
  setSpeechSynthesisOutputFormat?(format: unknown): void;
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
  close?(): void;
}

export interface AzureSpeechRecognitionResult {
  text?: string;
  reason?: unknown;
  duration?: number;
  offset?: number;
  errorDetails?: string;
}

export interface AzureSpeechSynthesizer {
  speakTextAsync(
    text: string,
    success: (result: AzureSpeechSynthesisResult) => void,
    error: (error: string) => void,
  ): void;
  close?(): void;
}

export interface AzureSpeechSynthesisResult {
  audioData?: ArrayBuffer;
  reason?: unknown;
  errorDetails?: string;
}
