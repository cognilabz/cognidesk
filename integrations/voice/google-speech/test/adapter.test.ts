import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createGoogleSpeechClient,
  googleSpeechCredentialStatuses,
  googleSpeechIntegration,
  googleSpeechProviderManifest,
} from "../src/index.js";

describe("@cognidesk/voice-google-speech", () => {
  it("declares Google Cloud SDK-backed metadata and exact operation handlers", () => {
    expect(googleSpeechProviderManifest).toMatchObject({
      id: "voice.google-speech",
      packageName: "@cognidesk/voice-google-speech",
      metadata: {
        integrationName: "Google Cloud Speech Integration",
        integrationPackageName: "@cognidesk/voice-google-speech",
        integrationEntryPoints: {
          manifest: "@cognidesk/voice-google-speech/manifest",
          runtime: "@cognidesk/voice-google-speech/runtime",
        },
        implementation: {
          strategy: "official-sdk",
          sdkPackages: [
            "@google-cloud/speech",
            "@google-cloud/text-to-speech",
          ],
          rawClientEscapeHatch: true,
        },
      },
    });
    expect(assertIntegrationConformance(googleSpeechIntegration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
    });
  });

  it("uses injected Google Cloud clients for recognize and synthesize", async () => {
    const speechClient = {
      recognize: vi.fn(async () => [{
        results: [{
          languageCode: "en-US",
          alternatives: [{ transcript: "Hello from Google.", confidence: 0.99 }],
        }],
        requestId: "request_1",
      }]),
    };
    const textToSpeechClient = {
      synthesizeSpeech: vi.fn(async () => [{
        audioContent: new Uint8Array([1, 2, 3]),
      }]),
    };
    const client = createGoogleSpeechClient({
      speechClient: speechClient as never,
      textToSpeechClient: textToSpeechClient as never,
      accessToken: "token",
      quotaProjectId: "quota-project",
    });

    await expect(client.transcribeSpeech({
      audio: new Uint8Array([1, 2]),
      languageCode: "en-US",
    })).resolves.toMatchObject({ text: "Hello from Google.", requestId: "request_1" });
    await expect(client.synthesizeSpeech({
      text: "Reply",
      voiceName: "en-US-Standard-A",
    })).resolves.toBeInstanceOf(ArrayBuffer);
    expect((speechClient.recognize as any).mock.calls[0]?.[1]).toMatchObject({
      otherArgs: {
        headers: {
          Authorization: "Bearer token",
          "x-goog-user-project": "quota-project",
        },
      },
    });
  });

  it("reports Google Speech credential readiness", () => {
    expect(googleSpeechCredentialStatuses({})).toEqual([
      expect.objectContaining({ requirementId: "google-cloud-access-token", state: "missing" }),
    ]);
  });
});
