import type {
  GoogleSpeechClient,
  GoogleSpeechClientOptions,
  GoogleSpeechJsonObject,
} from "./contracts.js";
import {
  arrayBufferFromBytes,
  base64FromBytes,
  bytesFromBase64,
  languageFromVoiceName,
} from "./media.js";
import {
  googleHeaders,
  googleJsonResponse,
  numberField,
  objectArrayField,
  stringField,
} from "./request.js";

export function createGoogleSpeechClient(options: GoogleSpeechClientOptions): GoogleSpeechClient {
  const fetchImpl = options.fetch ?? fetch;
  const speechToTextEndpoint = options.speechToTextEndpoint
    ?? "https://speech.googleapis.com/v1/speech:recognize";
  const textToSpeechEndpoint = options.textToSpeechEndpoint
    ?? "https://texttospeech.googleapis.com/v1/text:synthesize";
  return {
    async transcribeSpeech(input) {
      const languageCode = input.languageCode ?? "en-US";
      const sampleRate = input.sampleRate ?? 24_000;
      const response = await fetchImpl(speechToTextEndpoint, {
        method: "POST",
        headers: await googleHeaders(options, input.signal),
        body: JSON.stringify({
          config: {
            encoding: input.encoding ?? "LINEAR16",
            sampleRateHertz: sampleRate,
            languageCode,
            ...(input.model !== undefined ? { model: input.model } : {}),
            ...(input.useEnhanced !== undefined ? { useEnhanced: input.useEnhanced } : {}),
            ...(input.enableAutomaticPunctuation !== undefined ? { enableAutomaticPunctuation: input.enableAutomaticPunctuation } : {}),
            ...(input.maxAlternatives !== undefined ? { maxAlternatives: input.maxAlternatives } : {}),
            ...(input.profanityFilter !== undefined ? { profanityFilter: input.profanityFilter } : {}),
          },
          audio: {
            content: base64FromBytes(input.audio),
          },
        }),
        ...(input.signal ? { signal: input.signal } : {}),
      });
      const json = await googleJsonResponse(response, "Google Speech STT");
      const results = objectArrayField(json.results) ?? [];
      const alternatives = results
        .map((result) => objectArrayField(result.alternatives)?.[0])
        .filter((alternative): alternative is GoogleSpeechJsonObject => Boolean(alternative));
      const text = alternatives
        .map((alternative) => stringField(alternative.transcript) ?? "")
        .join("")
        .trim();
      const firstConfidence = numberField(alternatives[0]?.confidence);
      const firstLanguageCode = stringField(results[0]?.languageCode);
      const requestId = stringField(json.requestId);
      const totalBilledTime = stringField(json.totalBilledTime);
      return {
        text,
        ...(firstConfidence !== undefined ? { confidence: firstConfidence } : {}),
        ...(firstLanguageCode ? { languageCode: firstLanguageCode } : {}),
        ...(requestId ? { requestId } : {}),
        ...(totalBilledTime ? { totalBilledTime } : {}),
        raw: json,
      };
    },
    async synthesizeSpeech(input) {
      const voiceName = input.voiceName;
      const languageCode = input.languageCode ?? (voiceName ? languageFromVoiceName(voiceName) : undefined) ?? "en-US";
      const response = await fetchImpl(textToSpeechEndpoint, {
        method: "POST",
        headers: await googleHeaders(options, input.signal),
        body: JSON.stringify({
          input: {
            text: input.text,
          },
          voice: {
            languageCode,
            ...(voiceName !== undefined ? { name: voiceName } : {}),
            ...(input.ssmlGender !== undefined ? { ssmlGender: input.ssmlGender } : {}),
          },
          audioConfig: {
            audioEncoding: input.audioEncoding ?? "LINEAR16",
            ...(input.sampleRateHertz !== undefined ? { sampleRateHertz: input.sampleRateHertz } : {}),
            ...(input.speakingRate !== undefined ? { speakingRate: input.speakingRate } : {}),
            ...(input.pitch !== undefined ? { pitch: input.pitch } : {}),
            ...(input.volumeGainDb !== undefined ? { volumeGainDb: input.volumeGainDb } : {}),
            ...(input.effectsProfileId !== undefined ? { effectsProfileId: input.effectsProfileId } : {}),
          },
        }),
        ...(input.signal ? { signal: input.signal } : {}),
      });
      const json = await googleJsonResponse(response, "Google Speech TTS");
      const audioContent = stringField(json.audioContent);
      if (!audioContent) throw new Error("Google Speech TTS response did not include audioContent.");
      return arrayBufferFromBytes(bytesFromBase64(audioContent));
    },
  };
}
