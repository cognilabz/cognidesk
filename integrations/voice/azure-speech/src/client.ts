import * as speechSdk from "microsoft-cognitiveservices-speech-sdk";
import {
  defineIntegration,
  type IntegrationOperationHandlers,
} from "@cognidesk/integration-kit";
import type {
  AzureSpeechClient,
  AzureSpeechClientOptions,
  AzureSpeechConfig,
  AzureSpeechIntegrationOptions,
  AzureSpeechOperationAlias,
  AzureSpeechOperationHandlers,
  AzureSpeechRecognitionResult,
  AzureSpeechRawConfigHandles,
  AzureSpeechSdk,
  AzureSpeechSynthesisOutputFormat,
  AzureSpeechSynthesisResult,
} from "./contracts.js";
import { azureSpeechManifestInput } from "./manifest.js";

export function createAzureSpeechRawConfigHandles(options: AzureSpeechClientOptions): AzureSpeechRawConfigHandles {
  const sdk = (options.sdk ?? speechSdk) as unknown as AzureSpeechSdk;
  return {
    sdk,
    createSpeechConfig: options.createSpeechConfig
      ?? (() => sdk.SpeechConfig.fromSubscription(options.speechKey, options.region)),
  };
}

export function createAzureSpeechClient(options: AzureSpeechClientOptions): AzureSpeechClient {
  const rawHandles = createAzureSpeechRawConfigHandles(options);
  const sdk = rawHandles.sdk;
  const transcribeSpeech: AzureSpeechClient["transcribeSpeech"] = async (input) => {
    const speechConfig = rawHandles.createSpeechConfig();
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
  };
  const synthesizeSpeech: AzureSpeechClient["synthesizeSpeech"] = async (input) => {
    const speechConfig = rawHandles.createSpeechConfig();
    speechConfig.speechSynthesisVoiceName = input.voiceName;
    speechConfig.speechSynthesisLanguage = input.language ?? languageFromVoiceName(input.voiceName) ?? "en-US";
    setOutputFormat(sdk, speechConfig, input.outputFormat);
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig);
    const result = await speakText(synthesizer, input.text, input.signal);
    if (!result.audioData) {
      throw new Error(result.errorDetails || "Azure Speech synthesis did not include audioData.");
    }
    return normalizeAudioData(result.audioData);
  };
  const handlers = {
    "voice.session.start": transcribeSpeech,
    "voice.turn.finalize": transcribeSpeech,
    "voice.speak": synthesizeSpeech,
  } satisfies AzureSpeechOperationHandlers;
  const execute = (<K extends AzureSpeechOperationAlias>(
    alias: K,
    input: Parameters<AzureSpeechOperationHandlers[K]>[0],
  ) => handlers[alias](input as never)) as AzureSpeechClient["execute"];

  return {
    rawSdk: sdk,
    rawHandles,
    createSpeechConfig: rawHandles.createSpeechConfig,
    handlers,
    execute,
    transcribeSpeech,
    synthesizeSpeech,
  };
}

export function createAzureSpeechOperationHandlers(
  options: AzureSpeechIntegrationOptions,
): AzureSpeechOperationHandlers {
  const client = options.client ?? createAzureSpeechClient({
    speechKey: requireOption(options.speechKey, "Azure Speech key is required to create operation handlers."),
    region: requireOption(options.region, "Azure Speech region is required to create operation handlers."),
    ...(options.sdk ? { sdk: options.sdk } : {}),
    ...(options.createSpeechConfig ? { createSpeechConfig: options.createSpeechConfig } : {}),
  });
  return client.handlers;
}

export function createAzureSpeechIntegration(options: AzureSpeechIntegrationOptions) {
  const client = options.client ?? createAzureSpeechClient({
    speechKey: requireOption(options.speechKey, "Azure Speech key is required to create an integration."),
    region: requireOption(options.region, "Azure Speech region is required to create an integration."),
    ...(options.sdk ? { sdk: options.sdk } : {}),
    ...(options.createSpeechConfig ? { createSpeechConfig: options.createSpeechConfig } : {}),
  });
  return defineIntegration({
    manifest: azureSpeechManifestInput,
    operations: client.handlers as unknown as IntegrationOperationHandlers,
    metadata: {
      client,
      rawSdk: client.rawSdk,
      rawHandles: client.rawHandles,
    },
  });
}

function recognizeOnce(
  recognizer: {
    recognizeOnceAsync(
      success: (result: AzureSpeechRecognitionResult) => void,
      error: (error: string) => void,
    ): void;
    close?: (success?: () => void, error?: (error: string) => void) => void;
  },
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
  synthesizer: {
    speakTextAsync(
      text: string,
      success: (result: AzureSpeechSynthesisResult) => void,
      error: (error: string) => void,
    ): void;
    close?: (success?: () => void, error?: (error: string) => void) => void;
  },
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

function setOutputFormat(
  sdk: AzureSpeechSdk,
  speechConfig: AzureSpeechConfig,
  outputFormat: AzureSpeechSynthesisOutputFormat | undefined,
) {
  if (!outputFormat) return;
  if (typeof outputFormat === "string") {
    const selected = sdk.SpeechSynthesisOutputFormat[outputFormat];
    if (selected === undefined) {
      throw new Error(`Unknown Azure Speech synthesis output format '${outputFormat}'.`);
    }
    speechConfig.speechSynthesisOutputFormat = selected as AzureSpeechSynthesisOutputFormat;
  } else {
    speechConfig.speechSynthesisOutputFormat = outputFormat;
  }
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

function normalizeAudioData(value: ArrayBuffer | ArrayBufferView): ArrayBuffer {
  if (value instanceof ArrayBuffer) return value;
  return bytesToArrayBuffer(new Uint8Array(value.buffer, value.byteOffset, value.byteLength));
}

function requireOption(value: string | undefined, message: string) {
  if (!value) throw new Error(message);
  return value;
}
