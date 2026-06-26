import type { SpeechPipelineVoiceProviderOptions } from "./speech-pipeline.js";
import type { SpeechClient } from "@google-cloud/speech";
import type { TextToSpeechClient } from "@google-cloud/text-to-speech";

export type GoogleSpeechAccessTokenProvider = (
  input: { signal?: AbortSignal },
) => string | Promise<string>;

export interface GoogleSpeechClientOptions {
  accessToken?: string;
  getAccessToken?: GoogleSpeechAccessTokenProvider;
  speechClient?: SpeechClient;
  textToSpeechClient?: TextToSpeechClient;
  clientOptions?: object;
  quotaProjectId?: string;
}

export interface GoogleSpeechRawClients {
  speechClient: SpeechClient;
  textToSpeechClient: TextToSpeechClient;
}

export interface GoogleSpeechCredentialStatusInput {
  accessToken?: string;
  hasAccessTokenProvider?: boolean;
}

export type GoogleSpeechRecognitionEncoding =
  | "ENCODING_UNSPECIFIED"
  | "LINEAR16"
  | "FLAC"
  | "MULAW"
  | "AMR"
  | "AMR_WB"
  | "OGG_OPUS"
  | "SPEEX_WITH_HEADER_BYTE"
  | "MP3"
  | "WEBM_OPUS"
  | "ALAW"
  | string;

export type GoogleTextToSpeechAudioEncoding =
  | "AUDIO_ENCODING_UNSPECIFIED"
  | "LINEAR16"
  | "MP3"
  | "OGG_OPUS"
  | "MULAW"
  | "ALAW"
  | string;

export type GoogleTextToSpeechSsmlGender =
  | "SSML_VOICE_GENDER_UNSPECIFIED"
  | "MALE"
  | "FEMALE"
  | "NEUTRAL"
  | string;

export interface GoogleSpeechToTextInput {
  audio: Uint8Array;
  sampleRate?: number;
  languageCode?: string;
  encoding?: GoogleSpeechRecognitionEncoding;
  model?: string;
  useEnhanced?: boolean;
  enableAutomaticPunctuation?: boolean;
  maxAlternatives?: number;
  profanityFilter?: boolean;
  signal?: AbortSignal;
}

export interface GoogleSpeechToTextResult {
  text: string;
  confidence?: number;
  languageCode?: string;
  requestId?: string;
  totalBilledTime?: string;
  raw?: GoogleSpeechJsonObject;
}

export interface GoogleTextToSpeechInput {
  text: string;
  voiceName?: string;
  languageCode?: string;
  ssmlGender?: GoogleTextToSpeechSsmlGender;
  audioEncoding?: GoogleTextToSpeechAudioEncoding;
  sampleRateHertz?: number;
  speakingRate?: number;
  pitch?: number;
  volumeGainDb?: number;
  effectsProfileId?: readonly string[];
  signal?: AbortSignal;
}

export interface GoogleSpeechClient {
  getRawClients(): GoogleSpeechRawClients;
  transcribeSpeech(input: GoogleSpeechToTextInput): Promise<GoogleSpeechToTextResult>;
  synthesizeSpeech(input: GoogleTextToSpeechInput): Promise<ArrayBuffer>;
}

export interface GoogleSpeechVoiceProviderOptions
  extends Omit<Partial<SpeechPipelineVoiceProviderOptions>, "provider" | "transcriptionSource" | "transcribe" | "synthesize"> {
  accessToken?: string;
  getAccessToken?: GoogleSpeechAccessTokenProvider;
  client?: GoogleSpeechClient;
  speechClient?: SpeechClient;
  textToSpeechClient?: TextToSpeechClient;
  clientOptions?: object;
  quotaProjectId?: string;
  languageCode?: string;
  recognitionEncoding?: GoogleSpeechRecognitionEncoding;
  recognitionModel?: string;
  useEnhanced?: boolean;
  enableAutomaticPunctuation?: boolean;
  maxAlternatives?: number;
  profanityFilter?: boolean;
  voiceName: string;
  voiceLanguageCode?: string;
  ssmlGender?: GoogleTextToSpeechSsmlGender;
  audioEncoding?: GoogleTextToSpeechAudioEncoding;
  outputSampleRate?: number;
  speakingRate?: number;
  pitch?: number;
  volumeGainDb?: number;
  effectsProfileId?: readonly string[];
  stripLinear16WavHeader?: boolean;
}

export type GoogleSpeechJsonPrimitive = string | number | boolean | null;
export type GoogleSpeechJsonValue =
  | GoogleSpeechJsonPrimitive
  | GoogleSpeechJsonObject
  | readonly GoogleSpeechJsonValue[];
export interface GoogleSpeechJsonObject {
  [key: string]: GoogleSpeechJsonValue | undefined;
}
export type GoogleSpeechResource = GoogleSpeechJsonValue;

export interface GoogleSpeechOperationRequestInput {
  pathParams?: Record<string, string | number>;
  query?: Record<string, GoogleSpeechJsonValue | undefined>;
  body?: GoogleSpeechJsonValue;
  headers?: Record<string, string>;
  contentType?: string;
  responseType?: "json" | "arrayBuffer" | "response" | "stream";
}
