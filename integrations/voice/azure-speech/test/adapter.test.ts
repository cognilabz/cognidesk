import { describe, expect, it } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  azureSpeechCredentialStatuses,
  azureSpeechIntegration,
  azureSpeechProviderManifest,
  createAzureSpeechClient,
  type AzureSpeechSdk,
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
    const sdk = fakeAzureSpeechSdk();
    const client = createAzureSpeechClient({ speechKey: "key", region: "westeurope", sdk });

    await expect(client.transcribeSpeech({
      audio: new Uint8Array([1, 2, 3, 4]),
      sampleRate: 24000,
      language: "en-US",
    })).resolves.toMatchObject({ text: "Hello from Azure." });
    await expect(client.synthesizeSpeech({
      text: "Reply",
      voiceName: "en-US-AvaMultilingualNeural",
    })).resolves.toBeInstanceOf(ArrayBuffer);
  });

  it("reports Azure Speech credential readiness", () => {
    expect(azureSpeechCredentialStatuses({})).toEqual(expect.arrayContaining([
      expect.objectContaining({ requirementId: "azure-speech-key", state: "missing" }),
    ]));
  });
});

function fakeAzureSpeechSdk(): AzureSpeechSdk {
  return {
    SpeechConfig: {
      fromSubscription() {
        return {};
      },
    },
    AudioConfig: {
      fromStreamInput(stream: unknown) {
        return { stream };
      },
    },
    AudioInputStream: {
      createPushStream() {
        return {
          write() {},
          close() {},
        };
      },
    },
    AudioStreamFormat: {
      getWaveFormatPCM() {
        return {};
      },
    },
    SpeechRecognizer: class {
      recognizeOnceAsync(success: Function) {
        success({ text: "Hello from Azure.", reason: "RecognizedSpeech" });
      }
      close() {}
    },
    SpeechSynthesizer: class {
      speakTextAsync(_text: string, success: Function) {
        success({ audioData: new Uint8Array([5, 6, 7]).buffer, reason: "SynthesizingAudioCompleted" });
      }
      close() {}
    },
    SpeechSynthesisOutputFormat: {},
  };
}
