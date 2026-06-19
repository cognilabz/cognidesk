import type {
  AwsPollySynthesizeCommandInput,
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

export function createAwsSdkSpeechClient(options: AwsSdkSpeechClientOptions): AwsSpeechClient {
  return {
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
