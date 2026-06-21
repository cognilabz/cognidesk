import { SpeechClient } from "@google-cloud/speech";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import type {
  GoogleSpeechClient,
  GoogleSpeechClientOptions,
} from "./contracts.js";
import {
  languageFromVoiceName,
} from "./media.js";

export function createGoogleSpeechRawClients(options: GoogleSpeechClientOptions) {
  return {
    speechClient: options.speechClient ?? new SpeechClient(options.clientOptions as never),
    textToSpeechClient: options.textToSpeechClient ?? new TextToSpeechClient(options.clientOptions as never),
  };
}

export function createGoogleSpeechClient(options: GoogleSpeechClientOptions): GoogleSpeechClient {
  const rawClients = createGoogleSpeechRawClients(options);
  return {
    async transcribeSpeech(input) {
      const languageCode = input.languageCode ?? "en-US";
      const sampleRate = input.sampleRate ?? 24_000;
      const [response] = await (rawClients.speechClient as any).recognize({
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
          content: Buffer.from(input.audio),
        },
      }, await googleCallOptions(options, input.signal));
      const results = response.results ?? [];
      const alternatives = results
        .map((result: any) => result.alternatives?.[0])
        .filter((alternative: any): alternative is NonNullable<typeof alternative> => Boolean(alternative));
      const text = alternatives
        .map((alternative: any) => alternative.transcript ?? "")
        .join("")
        .trim();
      const firstConfidence = alternatives[0]?.confidence;
      const firstLanguageCode = results[0]?.languageCode;
      return {
        text,
        ...(firstConfidence !== undefined ? { confidence: firstConfidence } : {}),
        ...(firstLanguageCode ? { languageCode: firstLanguageCode } : {}),
        ...(response.requestId ? { requestId: response.requestId } : {}),
        ...(response.totalBilledTime ? { totalBilledTime: String(response.totalBilledTime) } : {}),
        raw: response as never,
      };
    },
    async synthesizeSpeech(input) {
      const voiceName = input.voiceName;
      const languageCode = input.languageCode ?? (voiceName ? languageFromVoiceName(voiceName) : undefined) ?? "en-US";
      const [response] = await (rawClients.textToSpeechClient as any).synthesizeSpeech({
        input: {
          text: input.text,
        },
        voice: {
          languageCode,
          ...(voiceName !== undefined ? { name: voiceName } : {}),
          ...(input.ssmlGender !== undefined ? { ssmlGender: input.ssmlGender as never } : {}),
        },
        audioConfig: {
          audioEncoding: (input.audioEncoding ?? "LINEAR16") as never,
          ...(input.sampleRateHertz !== undefined ? { sampleRateHertz: input.sampleRateHertz } : {}),
          ...(input.speakingRate !== undefined ? { speakingRate: input.speakingRate } : {}),
          ...(input.pitch !== undefined ? { pitch: input.pitch } : {}),
          ...(input.volumeGainDb !== undefined ? { volumeGainDb: input.volumeGainDb } : {}),
          ...(input.effectsProfileId !== undefined ? { effectsProfileId: [...input.effectsProfileId] } : {}),
        },
      }, await googleCallOptions(options, input.signal));
      if (!response.audioContent) throw new Error("Google Speech TTS response did not include audioContent.");
      return bytesToArrayBuffer(
        typeof response.audioContent === "string"
          ? Buffer.from(response.audioContent, "base64")
          : response.audioContent,
      );
    },
  };
}

async function googleCallOptions(options: GoogleSpeechClientOptions, signal?: AbortSignal) {
  const accessToken = options.getAccessToken
    ? await options.getAccessToken({ ...(signal ? { signal } : {}) })
    : options.accessToken;
  const headers: Record<string, string> = {};
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  if (options.quotaProjectId) headers["x-goog-user-project"] = options.quotaProjectId;
  return Object.keys(headers).length > 0
    ? { otherArgs: { headers } }
    : undefined;
}

function bytesToArrayBuffer(value: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(value.byteLength);
  copy.set(value);
  return copy.buffer;
}
