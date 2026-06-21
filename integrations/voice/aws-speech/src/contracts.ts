import type {
  SpeechPipelineSynthesis,
  SpeechPipelineVoiceProviderOptions,
} from "./speech-pipeline.js";
import type {
  PollyClient,
  PollyClientConfig,
} from "@aws-sdk/client-polly";
import type {
  TranscribeStreamingClient,
  TranscribeStreamingClientConfig,
} from "@aws-sdk/client-transcribe-streaming";

export const AWS_SPEECH_API_SOURCES = {
  transcribeStreamingApi: "https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html",
  transcribeStreamingSetup: "https://docs.aws.amazon.com/transcribe/latest/dg/streaming-setting-up.html",
  transcribeSdk: "https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe-streaming",
  pollySynthesizeSpeech: "https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html",
  pollyApiReference: "https://docs.aws.amazon.com/polly/latest/dg/API_Reference.html",
  pollySdk: "https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/polly",
} as const;

export type AwsSpeechJsonPrimitive = string | number | boolean | null;
export type AwsSpeechJsonValue =
  | AwsSpeechJsonPrimitive
  | AwsSpeechJsonObject
  | readonly AwsSpeechJsonValue[];
export type AwsSpeechProviderExtensionValue = AwsSpeechJsonValue | object | undefined;
export interface AwsSpeechJsonObject {
  [key: string]: AwsSpeechProviderExtensionValue;
}
export type AwsSpeechProviderPayload = AwsSpeechJsonObject | object;
export type AwsSpeechProviderQuery = Record<string, AwsSpeechProviderExtensionValue>;
export interface AwsSpeechProviderResponse extends AwsSpeechJsonObject {}
export interface AwsSpeechProviderExtensionFields extends AwsSpeechJsonObject {}
export type AwsSpeechResource = AwsSpeechJsonValue | AwsSpeechProviderPayload;

export interface AwsSpeechOperationRequestInput {
  pathParams?: Record<string, string | number>;
  query?: AwsSpeechProviderQuery;
  body?: AwsSpeechProviderPayload;
  headers?: Record<string, string>;
  contentType?: string;
  responseType?: "json" | "arrayBuffer" | "response" | "stream";
}

export type AwsTranscribeMediaEncoding = "pcm" | "ogg-opus" | "flac";
export type AwsTranscribePartialResultsStability = "high" | "medium" | "low";
export type AwsTranscribeVocabularyFilterMethod = "remove" | "mask" | "tag";
export type AwsPollyOutputFormat = "json" | "mp3" | "ogg_vorbis" | "pcm" | "ogg_opus";
export type AwsPollyEngine = "standard" | "neural" | "long-form" | "generative";
export type AwsPollyTextType = "text" | "ssml";

export interface AwsSpeechCredentialStatusInput {
  accessKeyId?: string;
  secretAccessKey?: string;
  region?: string;
  sessionToken?: string;
}

export interface AwsTranscribeSpeechInput {
  audio: Uint8Array;
  sampleRate?: number;
  languageCode?: string;
  mediaEncoding?: AwsTranscribeMediaEncoding;
  identifyLanguage?: boolean;
  identifyMultipleLanguages?: boolean;
  languageOptions?: string[];
  preferredLanguage?: string;
  vocabularyName?: string;
  vocabularyFilterName?: string;
  vocabularyFilterMethod?: AwsTranscribeVocabularyFilterMethod;
  sessionId?: string;
  enablePartialResultsStabilization?: boolean;
  partialResultsStability?: AwsTranscribePartialResultsStability;
  signal?: AbortSignal;
}

export interface AwsTranscribeSpeechResult {
  text: string;
  resultId?: string;
  resultIds?: string[];
  languageCode?: string;
  startedAtSeconds?: number;
  endedAtSeconds?: number;
  resultCount?: number;
}

export interface AwsPollySynthesizeSpeechInput {
  text: string;
  voiceId: string;
  outputFormat?: AwsPollyOutputFormat;
  engine?: AwsPollyEngine;
  languageCode?: string;
  sampleRate?: string;
  textType?: AwsPollyTextType;
  lexiconNames?: string[];
  signal?: AbortSignal;
}

export interface AwsPollySynthesizeSpeechResult {
  audio: SpeechPipelineSynthesis["audio"];
  contentType?: string;
  requestCharacters?: number;
  outputFormat?: AwsPollyOutputFormat;
}

export interface AwsSpeechClient {
  transcribeSpeech(input: AwsTranscribeSpeechInput): Promise<AwsTranscribeSpeechResult | null>;
  synthesizeSpeech(input: AwsPollySynthesizeSpeechInput): Promise<AwsPollySynthesizeSpeechResult>;
}

export interface AwsSpeechClientOptions extends AwsSpeechCredentialStatusInput {
  transcribeStreamingClient?: TranscribeStreamingClient;
  pollyClient?: PollyClient;
  transcribeStreamingClientConfig?: TranscribeStreamingClientConfig;
  pollyClientConfig?: PollyClientConfig;
}

export interface AwsSdkCommandClient<Output> {
  send(command: unknown, options?: { abortSignal?: AbortSignal }): Promise<Output>;
}

export interface AwsSdkCommandConstructor<Input> {
  new(input: Input): unknown;
}

export interface AwsTranscribeStreamingCommandInput {
  AudioStream: AsyncIterable<AwsTranscribeStreamingAudioStreamEvent>;
  MediaEncoding: AwsTranscribeMediaEncoding;
  MediaSampleRateHertz: number;
  LanguageCode?: string;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: string;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: AwsTranscribeVocabularyFilterMethod;
  SessionId?: string;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: AwsTranscribePartialResultsStability;
}

export interface AwsTranscribeStreamingAudioStreamEvent {
  AudioEvent: {
    AudioChunk: Uint8Array;
  };
}

export interface AwsTranscribeStreamingCommandOutput {
  TranscriptResultStream?: AsyncIterable<AwsTranscribeStreamingResponseEvent>;
  LanguageCode?: string;
  MediaEncoding?: AwsTranscribeMediaEncoding;
  MediaSampleRateHertz?: number;
}

interface AwsSdkExceptionShape {
  Message?: string;
  message?: string;
}

export interface AwsTranscribeStreamingResponseEvent {
  TranscriptEvent?: {
    Transcript?: {
      Results?: AwsTranscribeStreamingResult[];
    };
  };
  BadRequestException?: AwsSdkExceptionShape;
  ConflictException?: AwsSdkExceptionShape;
  InternalFailureException?: AwsSdkExceptionShape;
  LimitExceededException?: AwsSdkExceptionShape;
  ServiceUnavailableException?: AwsSdkExceptionShape;
}

export interface AwsTranscribeStreamingResult {
  Alternatives?: Array<{
    Transcript?: string;
  }>;
  EndTime?: number;
  IsPartial?: boolean;
  ResultId?: string;
  StartTime?: number;
}

export interface AwsPollySynthesizeCommandInput {
  Text: string;
  VoiceId: string;
  OutputFormat: AwsPollyOutputFormat;
  Engine?: AwsPollyEngine;
  LanguageCode?: string;
  SampleRate?: string;
  TextType?: AwsPollyTextType;
  LexiconNames?: string[];
}

export interface AwsPollySynthesizeCommandOutput {
  AudioStream?: unknown;
  ContentType?: string;
  RequestCharacters?: number;
}

export interface AwsSdkSpeechClientOptions {
  transcribeStreamingClient: AwsSdkCommandClient<AwsTranscribeStreamingCommandOutput>;
  StartStreamTranscriptionCommand: AwsSdkCommandConstructor<AwsTranscribeStreamingCommandInput>;
  pollyClient: AwsSdkCommandClient<AwsPollySynthesizeCommandOutput>;
  SynthesizeSpeechCommand: AwsSdkCommandConstructor<AwsPollySynthesizeCommandInput>;
}

export interface AwsSpeechVoiceProviderOptions
  extends Omit<Partial<SpeechPipelineVoiceProviderOptions>, "provider" | "transcriptionSource" | "transcribe" | "synthesize"> {
  client?: AwsSpeechClient;
  accessKeyId?: string;
  secretAccessKey?: string;
  region?: string;
  sessionToken?: string;
  transcribeStreamingClientConfig?: TranscribeStreamingClientConfig;
  pollyClientConfig?: PollyClientConfig;
  transcribeStreamingClient?: AwsSdkSpeechClientOptions["transcribeStreamingClient"];
  StartStreamTranscriptionCommand?: AwsSdkSpeechClientOptions["StartStreamTranscriptionCommand"];
  pollyClient?: AwsSdkSpeechClientOptions["pollyClient"];
  SynthesizeSpeechCommand?: AwsSdkSpeechClientOptions["SynthesizeSpeechCommand"];
  languageCode?: string;
  mediaEncoding?: AwsTranscribeMediaEncoding;
  identifyLanguage?: boolean;
  identifyMultipleLanguages?: boolean;
  languageOptions?: string[];
  preferredLanguage?: string;
  vocabularyName?: string;
  vocabularyFilterName?: string;
  vocabularyFilterMethod?: AwsTranscribeVocabularyFilterMethod;
  enablePartialResultsStabilization?: boolean;
  partialResultsStability?: AwsTranscribePartialResultsStability;
  voiceId: string;
  outputFormat?: AwsPollyOutputFormat;
  engine?: AwsPollyEngine;
  pollyLanguageCode?: string;
  pollySampleRate?: string;
  textType?: AwsPollyTextType;
  lexiconNames?: string[];
}
