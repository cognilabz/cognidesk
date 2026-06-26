import type {
  SpeechPipelineSynthesis,
  SpeechPipelineVoiceProviderOptions,
} from "./speech-pipeline.js";
import type {
  PollyClient,
  PollyClientConfig,
  SynthesizeSpeechCommandInput,
  SynthesizeSpeechCommandOutput,
} from "@aws-sdk/client-polly";
import type {
  StartStreamTranscriptionCommandInput,
  StartStreamTranscriptionCommandOutput,
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

export type AwsTranscribeMediaEncoding = NonNullable<StartStreamTranscriptionCommandInput["MediaEncoding"]>;
export type AwsTranscribeLanguageCode = NonNullable<StartStreamTranscriptionCommandInput["LanguageCode"]>;
export type AwsTranscribePartialResultsStability = NonNullable<StartStreamTranscriptionCommandInput["PartialResultsStability"]>;
export type AwsTranscribeVocabularyFilterMethod = NonNullable<StartStreamTranscriptionCommandInput["VocabularyFilterMethod"]>;
export type AwsTranscribeContentIdentificationType = NonNullable<StartStreamTranscriptionCommandInput["ContentIdentificationType"]>;
export type AwsTranscribeContentRedactionType = NonNullable<StartStreamTranscriptionCommandInput["ContentRedactionType"]>;
export type AwsPollyOutputFormat = NonNullable<SynthesizeSpeechCommandInput["OutputFormat"]>;
export type AwsPollyEngine = NonNullable<SynthesizeSpeechCommandInput["Engine"]>;
export type AwsPollyLanguageCode = NonNullable<SynthesizeSpeechCommandInput["LanguageCode"]>;
export type AwsPollySpeechMarkType = NonNullable<SynthesizeSpeechCommandInput["SpeechMarkTypes"]>[number];
export type AwsPollyTextType = NonNullable<SynthesizeSpeechCommandInput["TextType"]>;
export type AwsPollyVoiceId = NonNullable<SynthesizeSpeechCommandInput["VoiceId"]>;

export interface AwsSpeechCredentialStatusInput {
  accessKeyId?: string;
  secretAccessKey?: string;
  region?: string;
  sessionToken?: string;
}

export interface AwsTranscribeSpeechInput {
  audio: Uint8Array;
  sampleRate?: number;
  languageCode?: AwsTranscribeLanguageCode;
  mediaEncoding?: AwsTranscribeMediaEncoding;
  identifyLanguage?: boolean;
  identifyMultipleLanguages?: boolean;
  languageOptions?: string[];
  preferredLanguage?: AwsTranscribeLanguageCode;
  vocabularyName?: string;
  vocabularyNames?: string[];
  vocabularyFilterName?: string;
  vocabularyFilterNames?: string[];
  vocabularyFilterMethod?: AwsTranscribeVocabularyFilterMethod;
  sessionId?: string;
  showSpeakerLabel?: boolean;
  enableChannelIdentification?: boolean;
  numberOfChannels?: number;
  enablePartialResultsStabilization?: boolean;
  partialResultsStability?: AwsTranscribePartialResultsStability;
  contentIdentificationType?: AwsTranscribeContentIdentificationType;
  contentRedactionType?: AwsTranscribeContentRedactionType;
  piiEntityTypes?: string[];
  languageModelName?: string;
  sessionResumeWindow?: number;
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
  voiceId: AwsPollyVoiceId;
  outputFormat?: AwsPollyOutputFormat;
  engine?: AwsPollyEngine;
  languageCode?: AwsPollyLanguageCode;
  sampleRate?: string;
  speechMarkTypes?: AwsPollySpeechMarkType[];
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

export interface AwsSpeechClient<RawClients extends AwsSpeechCommandClients = AwsSpeechCommandClients> {
  rawClients: RawClients;
  getRawClient(): RawClients;
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

export type AwsTranscribeStreamingCommandInput = StartStreamTranscriptionCommandInput;
export type AwsTranscribeStreamingCommandOutput = StartStreamTranscriptionCommandOutput;
export type AwsTranscribeStreamingAudioStreamEvent = NonNullable<StartStreamTranscriptionCommandInput["AudioStream"]> extends AsyncIterable<infer Event>
  ? Event
  : never;
export type AwsTranscribeStreamingResponseEvent = NonNullable<StartStreamTranscriptionCommandOutput["TranscriptResultStream"]> extends AsyncIterable<infer Event>
  ? Event
  : never;
export type AwsPollySynthesizeCommandInput = SynthesizeSpeechCommandInput;
export type AwsPollySynthesizeCommandOutput = SynthesizeSpeechCommandOutput;

export interface AwsSpeechCommandClients {
  transcribeStreamingClient: AwsSdkCommandClient<AwsTranscribeStreamingCommandOutput>;
  pollyClient: AwsSdkCommandClient<AwsPollySynthesizeCommandOutput>;
}

export interface AwsSpeechRawClients extends AwsSpeechCommandClients {
  transcribeStreamingClient: TranscribeStreamingClient;
  pollyClient: PollyClient;
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
  languageCode?: AwsTranscribeLanguageCode;
  mediaEncoding?: AwsTranscribeMediaEncoding;
  identifyLanguage?: boolean;
  identifyMultipleLanguages?: boolean;
  languageOptions?: string[];
  preferredLanguage?: AwsTranscribeLanguageCode;
  vocabularyName?: string;
  vocabularyNames?: string[];
  vocabularyFilterName?: string;
  vocabularyFilterNames?: string[];
  vocabularyFilterMethod?: AwsTranscribeVocabularyFilterMethod;
  showSpeakerLabel?: boolean;
  enableChannelIdentification?: boolean;
  numberOfChannels?: number;
  enablePartialResultsStabilization?: boolean;
  partialResultsStability?: AwsTranscribePartialResultsStability;
  contentIdentificationType?: AwsTranscribeContentIdentificationType;
  contentRedactionType?: AwsTranscribeContentRedactionType;
  piiEntityTypes?: string[];
  languageModelName?: string;
  sessionResumeWindow?: number;
  voiceId: AwsPollyVoiceId;
  outputFormat?: AwsPollyOutputFormat;
  engine?: AwsPollyEngine;
  pollyLanguageCode?: AwsPollyLanguageCode;
  pollySampleRate?: string;
  speechMarkTypes?: AwsPollySpeechMarkType[];
  textType?: AwsPollyTextType;
  lexiconNames?: string[];
}
