import { createSpeechPipelineVoiceProvider } from "../speech-pipeline.js";
import { createGoogleSpeechClient } from "./client.js";
import type { GoogleSpeechVoiceProviderOptions } from "./contracts.js";
import { languageFromVoiceName, stripWavHeader } from "./media.js";

export function createGoogleSpeechVoiceProvider(options: GoogleSpeechVoiceProviderOptions) {
  const client = options.client ?? createGoogleSpeechClient({
    ...(options.accessToken ? { accessToken: options.accessToken } : {}),
    ...(options.getAccessToken ? { getAccessToken: options.getAccessToken } : {}),
    ...(options.fetch ? { fetch: options.fetch } : {}),
    ...(options.speechToTextEndpoint ? { speechToTextEndpoint: options.speechToTextEndpoint } : {}),
    ...(options.textToSpeechEndpoint ? { textToSpeechEndpoint: options.textToSpeechEndpoint } : {}),
    ...(options.quotaProjectId ? { quotaProjectId: options.quotaProjectId } : {}),
  });
  return createSpeechPipelineVoiceProvider({
    id: options.id ?? "google-speech",
    provider: "google-speech",
    model: options.model ?? "google-cloud-speech-stt-tts",
    transcriptionSource: "google-cloud-speech-to-text",
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
        ...(options.languageCode !== undefined ? { languageCode: options.languageCode } : {}),
        ...(options.recognitionEncoding !== undefined ? { encoding: options.recognitionEncoding } : {}),
        ...(options.recognitionModel !== undefined ? { model: options.recognitionModel } : {}),
        ...(options.useEnhanced !== undefined ? { useEnhanced: options.useEnhanced } : {}),
        ...(options.enableAutomaticPunctuation !== undefined ? { enableAutomaticPunctuation: options.enableAutomaticPunctuation } : {}),
        ...(options.maxAlternatives !== undefined ? { maxAlternatives: options.maxAlternatives } : {}),
        ...(options.profanityFilter !== undefined ? { profanityFilter: options.profanityFilter } : {}),
      });
      return {
        text: transcript.text,
        metadata: {
          provider: "google-speech",
          ...(transcript.confidence !== undefined ? { confidence: transcript.confidence } : {}),
          ...(transcript.languageCode ? { languageCode: transcript.languageCode } : {}),
          ...(transcript.requestId ? { requestId: transcript.requestId } : {}),
          ...(transcript.totalBilledTime ? { totalBilledTime: transcript.totalBilledTime } : {}),
        },
      };
    },
    async synthesize(input) {
      const voiceName = input.profile?.modelSet?.voice ?? options.voiceName;
      const audioEncoding = options.audioEncoding ?? "LINEAR16";
      const audio = await client.synthesizeSpeech({
        text: input.text,
        voiceName,
        signal: input.signal,
        languageCode: options.voiceLanguageCode ?? languageFromVoiceName(voiceName) ?? options.languageCode ?? "en-US",
        audioEncoding,
        sampleRateHertz: options.outputSampleRate ?? options.sampleRate ?? 24_000,
        ...(options.ssmlGender !== undefined ? { ssmlGender: options.ssmlGender } : {}),
        ...(options.speakingRate !== undefined ? { speakingRate: options.speakingRate } : {}),
        ...(options.pitch !== undefined ? { pitch: options.pitch } : {}),
        ...(options.volumeGainDb !== undefined ? { volumeGainDb: options.volumeGainDb } : {}),
        ...(options.effectsProfileId !== undefined ? { effectsProfileId: options.effectsProfileId } : {}),
      });
      return {
        audio: options.stripLinear16WavHeader === false || audioEncoding !== "LINEAR16"
          ? audio
          : stripWavHeader(audio),
        transcript: input.text,
        metadata: {
          provider: "google-speech",
          voiceName,
          audioEncoding,
          sampleRateHertz: options.outputSampleRate ?? options.sampleRate ?? 24_000,
        },
      };
    },
  });
}
