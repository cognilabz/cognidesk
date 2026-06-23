import * as speechSdk from "microsoft-cognitiveservices-speech-sdk";
import type {
  AzureSpeechClient,
  AzureSpeechClientOptions,
  AzureSpeechConfig,
  AzureSpeechRecognitionResult,
  AzureSpeechSdk,
  AzureSpeechSynthesisResult,
} from "./contracts.js";

export function createAzureSpeechClient(options: AzureSpeechClientOptions): AzureSpeechClient {
  const sdk = options.sdk ?? speechSdk as unknown as AzureSpeechSdk;
  return {
    async transcribeSpeech(input) {
      const speechConfig = sdk.SpeechConfig.fromSubscription(options.speechKey, options.region);
      speechConfig.speechRecognitionLanguage = input.language ?? "en-US";
      const sampleRate = input.sampleRate ?? 24_000;
      const format = sdk.AudioStreamFormat.getWaveFormatPCM(sampleRate, 16, 1);
      const stream = sdk.AudioInputStream.createPushStream(format);
      stream.write(bytesToArrayBuffer(input.audio));
      stream.close();
      const audioConfig = sdk.AudioConfig.fromStreamInput(stream);
      const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
      const result = await recognizeOnce(recognizer, input.signal);
      return {
        text: result.text ?? "",
        ...(result.reason !== undefined ? { recognitionStatus: String(result.reason) } : {}),
        ...(typeof result.duration === "number" ? { duration: result.duration } : {}),
        ...(typeof result.offset === "number" ? { offset: result.offset } : {}),
        raw: result,
      };
    },
    async synthesizeSpeech(input) {
      const speechConfig = sdk.SpeechConfig.fromSubscription(options.speechKey, options.region);
      speechConfig.speechSynthesisVoiceName = input.voiceName;
      speechConfig.speechSynthesisLanguage = input.language ?? languageFromVoiceName(input.voiceName) ?? "en-US";
      setOutputFormat(sdk, speechConfig, input.outputFormat);
      const synthesizer = new sdk.SpeechSynthesizer(speechConfig);
      const result = await speakText(synthesizer, input.text, input.signal);
      if (!result.audioData) {
        throw new Error(result.errorDetails || "Azure Speech synthesis did not include audioData.");
      }
      return result.audioData;
    },
  };
}

function recognizeOnce(
  recognizer: { recognizeOnceAsync: Function; close?: () => void },
  signal?: AbortSignal,
) {
  return new Promise<AzureSpeechRecognitionResult>((resolve, reject) => {
    let settled = false;
    let onAbort: (() => void) | undefined;
    const cleanup = () => {
      if (onAbort) signal?.removeEventListener("abort", onAbort);
    };
    const rejectAborted = () => {
      if (settled) return;
      settled = true;
      cleanup();
      recognizer.close?.();
      reject(new Error("Azure Speech recognition aborted."));
    };
    onAbort = () => rejectAborted();
    if (signal?.aborted) {
      rejectAborted();
      return;
    }
    signal?.addEventListener("abort", onAbort, { once: true });
    recognizer.recognizeOnceAsync(
      (result: AzureSpeechRecognitionResult) => {
        if (settled) return;
        settled = true;
        cleanup();
        recognizer.close?.();
        resolve(result);
      },
      (error: string) => {
        if (settled) return;
        settled = true;
        cleanup();
        recognizer.close?.();
        reject(new Error(error));
      },
    );
  });
}

function speakText(
  synthesizer: { speakTextAsync: Function; close?: () => void },
  text: string,
  signal?: AbortSignal,
) {
  return new Promise<AzureSpeechSynthesisResult>((resolve, reject) => {
    let settled = false;
    let onAbort: (() => void) | undefined;
    const cleanup = () => {
      if (onAbort) signal?.removeEventListener("abort", onAbort);
    };
    const rejectAborted = () => {
      if (settled) return;
      settled = true;
      cleanup();
      synthesizer.close?.();
      reject(new Error("Azure Speech synthesis aborted."));
    };
    onAbort = () => rejectAborted();
    if (signal?.aborted) {
      rejectAborted();
      return;
    }
    signal?.addEventListener("abort", onAbort, { once: true });
    synthesizer.speakTextAsync(
      text,
      (result: AzureSpeechSynthesisResult) => {
        if (settled) return;
        settled = true;
        cleanup();
        synthesizer.close?.();
        resolve(result);
      },
      (error: string) => {
        if (settled) return;
        settled = true;
        cleanup();
        synthesizer.close?.();
        reject(new Error(error));
      },
    );
  });
}

function setOutputFormat(sdk: AzureSpeechSdk, speechConfig: AzureSpeechConfig, outputFormat: string | undefined) {
  if (!outputFormat) return;
  const enumValue = sdk.SpeechSynthesisOutputFormat?.[outputFormat];
  const selected = enumValue ?? outputFormat;
  if (speechConfig.setSpeechSynthesisOutputFormat) {
    speechConfig.setSpeechSynthesisOutputFormat(selected);
    return;
  }
  speechConfig.speechSynthesisOutputFormat = selected;
}

function languageFromVoiceName(voiceName: string) {
  const match = /^[a-z]{2}-[A-Z]{2}/.exec(voiceName);
  return match?.[0];
}

function bytesToArrayBuffer(value: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(value.byteLength);
  copy.set(value);
  return copy.buffer;
}
