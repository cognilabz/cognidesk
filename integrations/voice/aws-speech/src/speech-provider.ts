import type { VoiceJsonObject, VoiceJsonValue } from "@cognidesk/voice-websocket";
import {
  createSpeechPipelineVoiceProvider,
  type SpeechPipelineTranscription,
} from "./speech-pipeline.js";
import { createAwsSdkSpeechClient, createAwsSpeechClient } from "./client.js";
import type { AwsSpeechVoiceProviderOptions } from "./contracts.js";
import {
  DEFAULT_POLLY_PCM_SAMPLE_RATE,
  resamplePcm16Audio,
} from "./synthesis.js";

const DEFAULT_PIPELINE_SAMPLE_RATE = 24_000;

export function createAwsSpeechVoiceProvider(options: AwsSpeechVoiceProviderOptions) {
  const client = options.client
    ?? (options.StartStreamTranscriptionCommand || options.SynthesizeSpeechCommand
      ? createAwsSdkSpeechClient({
          transcribeStreamingClient: requireOption(
            options.transcribeStreamingClient,
            "AWS Transcribe Streaming client is required with injected AWS command constructors.",
          ),
          StartStreamTranscriptionCommand: requireOption(
            options.StartStreamTranscriptionCommand,
            "StartStreamTranscriptionCommand constructor is required with injected AWS command clients.",
          ),
          pollyClient: requireOption(
            options.pollyClient,
            "Amazon Polly client is required with injected AWS command constructors.",
          ),
          SynthesizeSpeechCommand: requireOption(
            options.SynthesizeSpeechCommand,
            "SynthesizeSpeechCommand constructor is required with injected AWS command clients.",
          ),
        })
      : createAwsSpeechClient({
          ...(options.accessKeyId ? { accessKeyId: options.accessKeyId } : {}),
          ...(options.secretAccessKey ? { secretAccessKey: options.secretAccessKey } : {}),
          ...(options.region ? { region: options.region } : {}),
          ...(options.sessionToken ? { sessionToken: options.sessionToken } : {}),
          ...(options.transcribeStreamingClient ? { transcribeStreamingClient: options.transcribeStreamingClient as never } : {}),
          ...(options.pollyClient ? { pollyClient: options.pollyClient as never } : {}),
          ...(options.transcribeStreamingClientConfig ? { transcribeStreamingClientConfig: options.transcribeStreamingClientConfig } : {}),
          ...(options.pollyClientConfig ? { pollyClientConfig: options.pollyClientConfig } : {}),
        }));
  const pipelineSampleRate = options.sampleRate ?? DEFAULT_PIPELINE_SAMPLE_RATE;

  return createSpeechPipelineVoiceProvider({
    id: options.id ?? "aws-speech",
    provider: "aws-speech",
    model: options.model ?? "aws-transcribe-polly",
    transcriptionSource: "amazon-transcribe",
    sampleRate: pipelineSampleRate,
    ...(options.silenceThreshold !== undefined ? { silenceThreshold: options.silenceThreshold } : {}),
    ...(options.endSilenceMs !== undefined ? { endSilenceMs: options.endSilenceMs } : {}),
    ...(options.minSpeechMs !== undefined ? { minSpeechMs: options.minSpeechMs } : {}),
    ...(options.maxSpeechMs !== undefined ? { maxSpeechMs: options.maxSpeechMs } : {}),
    async transcribe(input): Promise<SpeechPipelineTranscription | null> {
      const transcript = await client.transcribeSpeech({
        audio: input.audio,
        sampleRate: input.sampleRate,
        signal: input.signal,
        ...(options.languageCode !== undefined ? { languageCode: options.languageCode } : {}),
        ...(options.mediaEncoding !== undefined ? { mediaEncoding: options.mediaEncoding } : {}),
        ...(options.identifyLanguage !== undefined ? { identifyLanguage: options.identifyLanguage } : {}),
        ...(options.identifyMultipleLanguages !== undefined ? { identifyMultipleLanguages: options.identifyMultipleLanguages } : {}),
        ...(options.languageOptions !== undefined ? { languageOptions: options.languageOptions } : {}),
        ...(options.preferredLanguage !== undefined ? { preferredLanguage: options.preferredLanguage } : {}),
        ...(options.vocabularyName !== undefined ? { vocabularyName: options.vocabularyName } : {}),
        ...(options.vocabularyNames !== undefined ? { vocabularyNames: options.vocabularyNames } : {}),
        ...(options.vocabularyFilterName !== undefined ? { vocabularyFilterName: options.vocabularyFilterName } : {}),
        ...(options.vocabularyFilterNames !== undefined ? { vocabularyFilterNames: options.vocabularyFilterNames } : {}),
        ...(options.vocabularyFilterMethod !== undefined ? { vocabularyFilterMethod: options.vocabularyFilterMethod } : {}),
        ...(options.showSpeakerLabel !== undefined ? { showSpeakerLabel: options.showSpeakerLabel } : {}),
        ...(options.enableChannelIdentification !== undefined ? { enableChannelIdentification: options.enableChannelIdentification } : {}),
        ...(options.numberOfChannels !== undefined ? { numberOfChannels: options.numberOfChannels } : {}),
        ...(options.enablePartialResultsStabilization !== undefined
          ? { enablePartialResultsStabilization: options.enablePartialResultsStabilization }
          : {}),
        ...(options.partialResultsStability !== undefined ? { partialResultsStability: options.partialResultsStability } : {}),
        ...(options.contentIdentificationType !== undefined ? { contentIdentificationType: options.contentIdentificationType } : {}),
        ...(options.contentRedactionType !== undefined ? { contentRedactionType: options.contentRedactionType } : {}),
        ...(options.piiEntityTypes !== undefined ? { piiEntityTypes: options.piiEntityTypes } : {}),
        ...(options.languageModelName !== undefined ? { languageModelName: options.languageModelName } : {}),
        ...(options.sessionResumeWindow !== undefined ? { sessionResumeWindow: options.sessionResumeWindow } : {}),
      });
      if (!transcript) return null;
      return {
        text: transcript.text,
        ...(transcript.resultId ? { itemId: transcript.resultId } : {}),
        ...(transcript.startedAtSeconds !== undefined ? { startedAtMs: secondsToMs(transcript.startedAtSeconds) } : {}),
        ...(transcript.endedAtSeconds !== undefined ? { endedAtMs: secondsToMs(transcript.endedAtSeconds) } : {}),
        metadata: compactJson({
          provider: "aws-speech",
          service: "amazon-transcribe",
          ...(transcript.languageCode ? { languageCode: transcript.languageCode } : {}),
          ...(transcript.resultIds && transcript.resultIds.length > 0 ? { resultIds: transcript.resultIds } : {}),
          ...(transcript.resultCount !== undefined ? { resultCount: transcript.resultCount } : {}),
        }),
      };
    },
    async synthesize(input) {
      const voiceId = (input.profile?.modelSet?.voice ?? options.voiceId) as AwsSpeechVoiceProviderOptions["voiceId"];
      const outputFormat = options.outputFormat ?? "pcm";
      const pollySampleRate = options.pollySampleRate
        ?? (outputFormat === "pcm" ? DEFAULT_POLLY_PCM_SAMPLE_RATE : undefined);
      const synthesis = await client.synthesizeSpeech({
        text: input.text,
        voiceId,
        outputFormat,
        signal: input.signal,
        ...(options.engine !== undefined ? { engine: options.engine } : {}),
        ...(options.pollyLanguageCode !== undefined ? { languageCode: options.pollyLanguageCode } : {}),
        ...(pollySampleRate !== undefined ? { sampleRate: pollySampleRate } : {}),
        ...(options.speechMarkTypes !== undefined ? { speechMarkTypes: options.speechMarkTypes } : {}),
        ...(options.textType !== undefined ? { textType: options.textType } : {}),
        ...(options.lexiconNames !== undefined ? { lexiconNames: options.lexiconNames } : {}),
      });
      const audio = outputFormat === "pcm" && pollySampleRate
        ? await resamplePcm16Audio(synthesis.audio, Number(pollySampleRate), pipelineSampleRate)
        : synthesis.audio;
      return {
        audio,
        transcript: input.text,
        metadata: compactJson({
          provider: "aws-speech",
          service: "amazon-polly",
          voiceId,
          outputFormat: synthesis.outputFormat ?? outputFormat,
          ...(pollySampleRate ? { providerSampleRate: pollySampleRate } : {}),
          ...(outputFormat === "pcm" ? { sampleRate: pipelineSampleRate } : {}),
          ...(synthesis.contentType ? { contentType: synthesis.contentType } : {}),
          ...(options.engine ? { engine: options.engine } : {}),
          ...(synthesis.requestCharacters !== undefined ? { requestCharacters: synthesis.requestCharacters } : {}),
        }),
      };
    },
  });
}

export const createAwsSpeechVoiceAdapter = createAwsSpeechVoiceProvider;

function secondsToMs(seconds: number) {
  return Math.round(seconds * 1000);
}

function compactJson(input: Record<string, VoiceJsonValue | undefined>): VoiceJsonObject {
  const output: VoiceJsonObject = {};
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) output[key] = value;
  }
  return output;
}

function requireOption<T>(value: T | undefined, message: string): T {
  if (value === undefined || value === null) throw new Error(message);
  return value;
}
