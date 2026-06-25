import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  azureSpeechCredentialStatuses,
  azureSpeechIntegration,
  azureSpeechProviderManifest,
  createAzureSpeechClient,
  createAzureSpeechIntegration,
  createAzureSpeechOperationHandlers,
  type AzureAudioConfig,
  type AzureSpeechConfig,
  type AzureSpeechRecognitionResult,
  type AzureSpeechSdk,
  type AzureSpeechSynthesisResult,
} from "../src/index.js";

describe("@cognidesk/integration-voice-azure-speech", () => {
  it("declares Speech SDK-backed metadata and exact operation handlers", () => {
    expect(azureSpeechProviderManifest).toMatchObject({
      id: "voice.azure-speech",
      packageName: "@cognidesk/integration-voice-azure-speech",
      metadata: {
        integrationName: "Azure AI Speech Integration",
        integrationPackageName: "@cognidesk/integration-voice-azure-speech",
        integrationEntryPoints: {
          manifest: "@cognidesk/integration-voice-azure-speech/manifest",
          runtime: "@cognidesk/integration-voice-azure-speech/runtime",
        },
        implementation: {
          strategy: "official-sdk",
          sdkPackages: ["microsoft-cognitiveservices-speech-sdk"],
          rawClientEscapeHatch: true,
        },
      },
    });
    expect(assertIntegrationConformance(azureSpeechIntegration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
    });
  });

  it("uses an injected Azure Speech SDK shape for recognition and synthesis", async () => {
    const { calls, sdk } = fakeAzureSpeechSdk();
    const client = createAzureSpeechClient({ speechKey: "key", region: "westeurope", sdk });

    expect(client.rawSdk).toBe(sdk);
    expect(client.createSpeechConfig()).toMatchObject({ speechKey: "key", region: "westeurope" });
    await expect(client.transcribeSpeech({
      audio: new Uint8Array([1, 2, 3, 4]),
      sampleRate: 16000,
      language: "en-US",
    })).resolves.toMatchObject({
      text: "Hello from Azure.",
      duration: 5000,
      offset: 100,
      recognitionStatus: "RecognizedSpeech",
    });
    await expect(client.synthesizeSpeech({
      text: "Reply",
      voiceName: "en-US-AvaMultilingualNeural",
      outputFormat: "Riff24Khz16BitMonoPcm",
    })).resolves.toBeInstanceOf(ArrayBuffer);
    expect(calls.getWaveFormatPCM).toHaveBeenCalledWith(16000, 16, 1);
    expect(calls.write).toHaveBeenCalledWith(expect.any(ArrayBuffer));
    expect(calls.fromStreamInput).toHaveBeenCalledTimes(1);
    expect(calls.recognizeOnceAsync).toHaveBeenCalledTimes(1);
    expect(calls.speakTextAsync).toHaveBeenCalledWith("Reply", expect.any(Function), expect.any(Function));
    expect(calls.configs.at(-1)).toMatchObject({
      speechSynthesisVoiceName: "en-US-AvaMultilingualNeural",
      speechSynthesisLanguage: "en-US",
      speechSynthesisOutputFormat: 24,
    });
  });

  it("binds runtime operations to SDK-backed Azure Speech client methods", async () => {
    const { calls, sdk } = fakeAzureSpeechSdk();
    const client = createAzureSpeechClient({ speechKey: "key", region: "westeurope", sdk });
    const handlers = createAzureSpeechOperationHandlers({ client });
    const integration = createAzureSpeechIntegration({ client });

    await expect(handlers["voice.turn.finalize"]({
      audio: new Uint8Array([1, 2]),
    })).resolves.toMatchObject({ text: "Hello from Azure." });
    await expect(integration.run("voice.speak", {
      text: "Reply",
      voiceName: "en-US-AvaMultilingualNeural",
    })).resolves.toBeInstanceOf(ArrayBuffer);
    expect(integration.metadata?.client).toBe(client);
    expect(integration.metadata?.rawSdk).toBe(sdk);
    expect(calls.recognizeOnceAsync).toHaveBeenCalledTimes(1);
    expect(calls.speakTextAsync).toHaveBeenCalledTimes(1);
  });

  it("default runtime integration requires and uses a metadata Azure Speech client", async () => {
    const { calls, sdk } = fakeAzureSpeechSdk();
    const client = createAzureSpeechClient({ speechKey: "key", region: "westeurope", sdk });

    await expect(azureSpeechIntegration.run("voice.session.start", {
      audio: new Uint8Array([1, 2]),
    }, {
      metadata: { client },
    })).resolves.toMatchObject({ text: "Hello from Azure." });
    await expect(azureSpeechIntegration.run("voice.speak", {
      text: "Reply",
      voiceName: "en-US-AvaMultilingualNeural",
    })).rejects.toThrow(/Azure Speech client/);
    expect(calls.recognizeOnceAsync).toHaveBeenCalledTimes(1);
  });

  it("constructs and exposes the official Microsoft Speech SDK handles by default", async () => {
    vi.resetModules();
    const { calls, sdk } = fakeAzureSpeechSdk();
    vi.doMock("microsoft-cognitiveservices-speech-sdk", () => sdk);

    try {
      const { createAzureSpeechClient } = await import("../src/client.js");
      const client = createAzureSpeechClient({ speechKey: "key", region: "westeurope" });

      expect(client.rawSdk.SpeechConfig).toBe(sdk.SpeechConfig);
      await expect(client.transcribeSpeech({
        audio: new Uint8Array([9, 10]),
      })).resolves.toMatchObject({ text: "Hello from Azure." });
      expect(calls.fromSubscription).toHaveBeenCalledWith("key", "westeurope");
      expect(calls.recognizerConstructed).toHaveBeenCalledTimes(1);
    } finally {
      vi.doUnmock("microsoft-cognitiveservices-speech-sdk");
      vi.resetModules();
    }
  });

  it("reports Azure Speech credential readiness", () => {
    expect(azureSpeechCredentialStatuses({})).toEqual(expect.arrayContaining([
      expect.objectContaining({ requirementId: "azure-speech-key", state: "missing" }),
    ]));
  });
});

function fakeAzureSpeechSdk(): { sdk: AzureSpeechSdk; calls: ReturnType<typeof fakeAzureSpeechSdkCalls> } {
  const calls = fakeAzureSpeechSdkCalls();
  class FakeSpeechRecognizer {
    constructor(speechConfig: AzureSpeechConfig, audioConfig?: AzureAudioConfig) {
      calls.recognizerConstructed(speechConfig, audioConfig);
    }
    recognizeOnceAsync(
      success: (result: AzureSpeechRecognitionResult) => void,
      _error: (error: string) => void,
    ) {
      calls.recognizeOnceAsync();
      success({
        text: "Hello from Azure.",
        reason: "RecognizedSpeech" as never,
        duration: 5000,
        offset: 100,
      });
    }
    close() {
      calls.recognizerClose();
    }
  }
  class FakeSpeechSynthesizer {
    constructor(speechConfig: AzureSpeechConfig, audioConfig?: AzureAudioConfig | null) {
      calls.synthesizerConstructed(speechConfig, audioConfig);
    }
    speakTextAsync(
      text: string,
      success: (result: AzureSpeechSynthesisResult) => void,
      error: (error: string) => void,
    ) {
      calls.speakTextAsync(text, success, error);
      success({ audioData: new Uint8Array([5, 6, 7]).buffer, reason: "SynthesizingAudioCompleted" as never });
    }
    close() {
      calls.synthesizerClose();
    }
  }
  const sdk: AzureSpeechSdk = {
    SpeechConfig: {
      fromSubscription(speechKey: string, region: string) {
        return calls.fromSubscription(speechKey, region);
      },
    },
    AudioConfig: {
      fromStreamInput(stream) {
        return calls.fromStreamInput(stream);
      },
    },
    AudioInputStream: {
      createPushStream(format?: unknown) {
        calls.createPushStream(format);
        return {
          write(buffer: ArrayBuffer) {
            calls.write(buffer);
          },
          close() {
            calls.streamClose();
          },
        };
      },
    },
    AudioStreamFormat: {
      getWaveFormatPCM(samplesPerSec: number, bitsPerSample: number, channels: number) {
        return calls.getWaveFormatPCM(samplesPerSec, bitsPerSample, channels);
      },
    },
    SpeechRecognizer: FakeSpeechRecognizer,
    SpeechSynthesizer: FakeSpeechSynthesizer,
    SpeechSynthesisOutputFormat: {
      Riff24Khz16BitMonoPcm: 24 as never,
    },
  };
  return { calls, sdk };
}

function fakeAzureSpeechSdkCalls() {
  const configs: AzureSpeechConfig[] = [];
  return {
    configs,
    fromSubscription: vi.fn((speechKey: string, region: string) => {
      const config = { speechKey, region } as AzureSpeechConfig & { speechKey: string; region: string };
      configs.push(config);
      return config;
    }),
    getWaveFormatPCM: vi.fn((samplesPerSec: number, bitsPerSample: number, channels: number) => ({
      samplesPerSec,
      bitsPerSample,
      channels,
    })),
    createPushStream: vi.fn(),
    write: vi.fn(),
    streamClose: vi.fn(),
    fromStreamInput: vi.fn((stream: unknown) => ({ stream })),
    recognizerConstructed: vi.fn(),
    recognizeOnceAsync: vi.fn(),
    recognizerClose: vi.fn(),
    synthesizerConstructed: vi.fn(),
    speakTextAsync: vi.fn(),
    synthesizerClose: vi.fn(),
  };
}
