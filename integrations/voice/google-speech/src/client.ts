import { SpeechClient, protos as speechProtos } from "@google-cloud/speech";
import { TextToSpeechClient, protos as textToSpeechProtos } from "@google-cloud/text-to-speech";
import type {
  GoogleSpeechClient,
  GoogleSpeechClientOptions,
  GoogleSpeechRawClients,
} from "./contracts.js";
import {
  languageFromVoiceName,
} from "./media.js";

export function createGoogleSpeechRawClients(options: GoogleSpeechClientOptions): GoogleSpeechRawClients {
  return {
    speechClient: options.speechClient ?? new SpeechClient(options.clientOptions as never),
    textToSpeechClient: options.textToSpeechClient ?? new TextToSpeechClient(options.clientOptions as never),
  };
}

export function createGoogleSpeechClient(options: GoogleSpeechClientOptions): GoogleSpeechClient {
  const rawClients = createGoogleSpeechRawClients(options);
  return {
    getRawClients() {
      return rawClients;
    },
    async transcribeSpeech(input) {
      const languageCode = input.languageCode ?? "en-US";
      const sampleRate = input.sampleRate ?? 24_000;
      const request: speechProtos.google.cloud.speech.v1.IRecognizeRequest = {
        config: {
          encoding: (input.encoding ?? "LINEAR16") as never,
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
      };
      const [response] = await rawClients.speechClient.recognize(
        request,
        await googleCallOptions(options, input.signal),
      );
      const results = response.results ?? [];
      const alternatives = results
        .map((result) => result.alternatives?.[0])
        .filter((alternative): alternative is NonNullable<typeof alternative> => Boolean(alternative));
      const text = alternatives
        .map((alternative) => alternative.transcript ?? "")
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
      const firstConfidence = alternatives[0]?.confidence;
      const firstLanguageCode = results[0]?.languageCode;
      const requestId = response.requestId !== undefined && response.requestId !== null
        ? String(response.requestId)
        : undefined;
      return {
        text,
        ...(firstConfidence !== undefined && firstConfidence !== null ? { confidence: firstConfidence } : {}),
        ...(firstLanguageCode ? { languageCode: firstLanguageCode } : {}),
        ...(requestId ? { requestId } : {}),
        ...(response.totalBilledTime ? { totalBilledTime: String(response.totalBilledTime) } : {}),
        raw: response as never,
      };
    },
    async synthesizeSpeech(input) {
      const voiceName = input.voiceName;
      const languageCode = input.languageCode ?? (voiceName ? languageFromVoiceName(voiceName) : undefined) ?? "en-US";
      const request: textToSpeechProtos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
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
      };
      const [response] = await rawClients.textToSpeechClient.synthesizeSpeech(
        request,
        await googleCallOptions(options, input.signal),
      );
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
