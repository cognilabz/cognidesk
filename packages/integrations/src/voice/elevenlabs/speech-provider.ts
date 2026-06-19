import {
  createSpeechPipelineVoiceProvider,
  pcm16WavBlob,
  type SpeechPipelineTranscription,
} from "../speech-pipeline.js";
import { createElevenLabsVoiceClient } from "./client.js";
import type { ElevenLabsSpeechVoiceProviderOptions } from "./contracts.js";
import { compactJson, requireElevenLabsApiKey } from "./request.js";

export function createElevenLabsSpeechVoiceProvider(options: ElevenLabsSpeechVoiceProviderOptions) {
  const client = options.client ?? createElevenLabsVoiceClient({
    apiKey: requireElevenLabsApiKey(options.apiKey),
    ...(options.apiBaseUrl ? { apiBaseUrl: options.apiBaseUrl } : {}),
    ...(options.fetch ? { fetch: options.fetch } : {}),
  });
  return createSpeechPipelineVoiceProvider({
    id: options.id ?? "elevenlabs-speech",
    provider: "elevenlabs",
    model: options.model ?? options.textToSpeechModelId ?? options.speechToTextModelId ?? "elevenlabs-speech",
    transcriptionSource: "elevenlabs-speech-to-text",
    ...(options.sampleRate !== undefined ? { sampleRate: options.sampleRate } : {}),
    ...(options.silenceThreshold !== undefined ? { silenceThreshold: options.silenceThreshold } : {}),
    ...(options.endSilenceMs !== undefined ? { endSilenceMs: options.endSilenceMs } : {}),
    ...(options.minSpeechMs !== undefined ? { minSpeechMs: options.minSpeechMs } : {}),
    ...(options.maxSpeechMs !== undefined ? { maxSpeechMs: options.maxSpeechMs } : {}),
    async transcribe(input): Promise<SpeechPipelineTranscription | null> {
      const transcript = await client.createTranscript({
        modelId: options.speechToTextModelId ?? "scribe_v1",
        file: pcm16WavBlob(input.audio, input.sampleRate),
        fileName: "cognidesk-voice-input.wav",
        ...(options.languageCode !== undefined ? { languageCode: options.languageCode } : {}),
        timestampsGranularity: "word",
      });
      return {
        text: transcript.text ?? "",
        ...(transcript.transcription_id ? { itemId: transcript.transcription_id } : {}),
        metadata: compactJson({
          provider: "elevenlabs",
          ...(transcript.language_code ? { languageCode: transcript.language_code } : {}),
          ...(transcript.language_probability !== undefined ? { languageProbability: transcript.language_probability } : {}),
        }),
      };
    },
    async synthesize(input) {
      const modelId = options.textToSpeechModelId ?? input.profile?.modelSet?.model;
      const audio = await client.createSpeech({
        voiceId: input.profile?.modelSet?.voice ?? options.voiceId,
        text: input.text,
        ...(modelId !== undefined ? { modelId } : {}),
        outputFormat: options.outputFormat ?? "pcm_24000",
      });
      return {
        audio,
        transcript: input.text,
        metadata: {
          provider: "elevenlabs",
          voiceId: input.profile?.modelSet?.voice ?? options.voiceId,
          outputFormat: options.outputFormat ?? "pcm_24000",
        },
      };
    },
  });
}
