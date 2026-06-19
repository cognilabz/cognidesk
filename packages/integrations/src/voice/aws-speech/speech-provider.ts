import type { VoiceJsonObject, VoiceJsonValue } from "@cognidesk/voice-websocket";
import {
  createSpeechPipelineVoiceProvider,
  type SpeechPipelineTranscription,
} from "../speech-pipeline.js";
import { createAwsSdkSpeechClient } from "./client.js";
import type { AwsSpeechVoiceProviderOptions } from "./contracts.js";
import {
  DEFAULT_POLLY_PCM_SAMPLE_RATE,
  resamplePcm16Audio,
} from "./synthesis.js";

const DEFAULT_PIPELINE_SAMPLE_RATE = 24_000;

export function createAwsSpeechVoiceProvider(options: AwsSpeechVoiceProviderOptions) {
  const client = options.client ?? createAwsSdkSpeechClient({
    transcribeStreamingClient: requireOption(
      options.transcribeStreamingClient,
      "AWS Transcribe Streaming client is required to create an AWS speech voice provider.",
    ),
    StartStreamTranscriptionCommand: requireOption(
      options.StartStreamTranscriptionCommand,
      "StartStreamTranscriptionCommand constructor is required to create an AWS speech voice provider.",
    ),
    pollyClient: requireOption(
      options.pollyClient,
      "Amazon Polly client is required to create an AWS speech voice provider.",
    ),
    SynthesizeSpeechCommand: requireOption(
      options.SynthesizeSpeechCommand,
      "SynthesizeSpeechCommand constructor is required to create an AWS speech voice provider.",
    ),
  });
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
        ...(options.vocabularyFilterName !== undefined ? { vocabularyFilterName: options.vocabularyFilterName } : {}),
        ...(options.vocabularyFilterMethod !== undefined ? { vocabularyFilterMethod: options.vocabularyFilterMethod } : {}),
        ...(options.enablePartialResultsStabilization !== undefined
          ? { enablePartialResultsStabilization: options.enablePartialResultsStabilization }
          : {}),
        ...(options.partialResultsStability !== undefined ? { partialResultsStability: options.partialResultsStability } : {}),
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
      const voiceId = input.profile?.modelSet?.voice ?? options.voiceId;
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
