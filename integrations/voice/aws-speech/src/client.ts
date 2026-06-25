import {
  PollyClient,
  SynthesizeSpeechCommand,
  type PollyClientConfig,
} from "@aws-sdk/client-polly";
import {
  StartStreamTranscriptionCommand,
  TranscribeStreamingClient,
  type TranscribeStreamingClientConfig,
} from "@aws-sdk/client-transcribe-streaming";
import type {
  AwsPollySynthesizeCommandInput,
  AwsSpeechClientOptions,
  AwsSpeechRawClients,
  AwsSdkSpeechClientOptions,
  AwsSpeechClient,
} from "./contracts.js";
import {
  defaultPollyCommandSampleRate,
  normalizePollyAudioStream,
} from "./synthesis.js";
import {
  awsTranscribeStreamingCommandInput,
  collectAwsTranscript,
} from "./transcription.js";

export function createAwsSpeechRawClients(options: AwsSpeechClientOptions): AwsSpeechRawClients {
  const credentials = options.accessKeyId && options.secretAccessKey
    ? {
        accessKeyId: options.accessKeyId,
        secretAccessKey: options.secretAccessKey,
        ...(options.sessionToken ? { sessionToken: options.sessionToken } : {}),
      }
    : undefined;
  const transcribeConfig: TranscribeStreamingClientConfig = {
    ...(options.region ? { region: options.region } : {}),
    ...(credentials ? { credentials } : {}),
    ...(options.transcribeStreamingClientConfig ?? {}),
  };
  const pollyConfig: PollyClientConfig = {
    ...(options.region ? { region: options.region } : {}),
    ...(credentials ? { credentials } : {}),
    ...(options.pollyClientConfig ?? {}),
  };
  return {
    transcribeStreamingClient: options.transcribeStreamingClient ?? new TranscribeStreamingClient(transcribeConfig),
    pollyClient: options.pollyClient ?? new PollyClient(pollyConfig),
  };
}

export function createAwsSpeechClient(options: AwsSpeechClientOptions): AwsSpeechClient<AwsSpeechRawClients> {
  const rawClients = createAwsSpeechRawClients(options);
  return createAwsSdkSpeechClient({
    transcribeStreamingClient: rawClients.transcribeStreamingClient,
    StartStreamTranscriptionCommand,
    pollyClient: rawClients.pollyClient,
    SynthesizeSpeechCommand,
  }) as AwsSpeechClient<AwsSpeechRawClients>;
}

export function createAwsSdkSpeechClient(options: AwsSdkSpeechClientOptions): AwsSpeechClient {
  const rawClients = {
    transcribeStreamingClient: options.transcribeStreamingClient,
    pollyClient: options.pollyClient,
  };
  return {
    rawClients,
    getRawClient() {
      return rawClients;
    },
    async transcribeSpeech(input) {
      const commandInput = awsTranscribeStreamingCommandInput(input);
      const command = new options.StartStreamTranscriptionCommand(commandInput);
      const response = await options.transcribeStreamingClient.send(
        command,
        input.signal ? { abortSignal: input.signal } : undefined,
      );
      return collectAwsTranscript(response);
    },
    async synthesizeSpeech(input) {
      const outputFormat = input.outputFormat ?? "pcm";
      const commandInput: AwsPollySynthesizeCommandInput = {
        Text: input.text,
        VoiceId: input.voiceId,
        OutputFormat: outputFormat,
        ...(input.engine !== undefined ? { Engine: input.engine } : {}),
        ...(input.languageCode !== undefined ? { LanguageCode: input.languageCode } : {}),
        ...(input.sampleRate !== undefined ? { SampleRate: input.sampleRate } : defaultPollyCommandSampleRate(outputFormat)),
        ...(input.speechMarkTypes !== undefined ? { SpeechMarkTypes: input.speechMarkTypes } : {}),
        ...(input.textType !== undefined ? { TextType: input.textType } : {}),
        ...(input.lexiconNames !== undefined ? { LexiconNames: input.lexiconNames } : {}),
      };
      const command = new options.SynthesizeSpeechCommand(commandInput);
      const response = await options.pollyClient.send(
        command,
        input.signal ? { abortSignal: input.signal } : undefined,
      );
      if (!response.AudioStream) {
        throw new Error("Amazon Polly SynthesizeSpeech response did not include AudioStream.");
      }
      return {
        audio: await normalizePollyAudioStream(response.AudioStream),
        ...(response.ContentType ? { contentType: response.ContentType } : {}),
        ...(response.RequestCharacters !== undefined ? { requestCharacters: response.RequestCharacters } : {}),
        outputFormat,
      };
    },
  };
}
