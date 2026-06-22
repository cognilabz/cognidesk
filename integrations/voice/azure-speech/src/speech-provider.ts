import { createSpeechPipelineVoiceProvider } from "./speech-pipeline.js";
import { createAzureSpeechClient } from "./client.js";
import type { AzureSpeechVoiceProviderOptions } from "./contracts.js";

export function createAzureSpeechVoiceProvider(options: AzureSpeechVoiceProviderOptions) {
  const client = options.client ?? createAzureSpeechClient({
    speechKey: requireOption(options.speechKey, "Azure Speech key is required to create a speech voice provider."),
    region: requireOption(options.region, "Azure Speech region is required to create a speech voice provider."),
    ...(options.sdk ? { sdk: options.sdk } : {}),
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
      const outputFormat = options.outputFormat;
      const audio = await client.synthesizeSpeech({
        text: input.text,
        voiceName,
        signal: input.signal,
        ...(options.language !== undefined ? { language: options.language } : {}),
        ...(outputFormat !== undefined ? { outputFormat } : {}),
      });
      return {
        audio,
        transcript: input.text,
        metadata: {
          provider: "azure-speech",
          voiceName,
          ...(outputFormat !== undefined ? { outputFormat } : {}),
        },
      };
    },
  });
}

export const createAzureSpeechVoiceAdapter = createAzureSpeechVoiceProvider;

function requireOption(value: string | undefined, message: string) {
  if (!value) throw new Error(message);
  return value;
}
