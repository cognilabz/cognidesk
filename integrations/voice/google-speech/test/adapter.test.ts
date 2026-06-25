import { readFile } from "node:fs/promises";
import { SpeechClient } from "@google-cloud/speech";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createGoogleSpeechClient,
  createGoogleSpeechRawClients,
  googleSpeechCredentialStatuses,
  googleSpeechIntegration,
  googleSpeechProviderManifest,
  type GoogleSpeechClient,
} from "../src/index.js";

describe("@cognidesk/integration-voice-google-speech", () => {
  it("declares Google Cloud SDK-backed metadata and exact operation handlers", async () => {
    expect(googleSpeechProviderManifest).toMatchObject({
      id: "voice.google-speech",
      packageName: "@cognidesk/integration-voice-google-speech",
      metadata: {
        integrationName: "Google Cloud Speech Integration",
        integrationPackageName: "@cognidesk/integration-voice-google-speech",
        integrationEntryPoints: {
          manifest: "@cognidesk/integration-voice-google-speech/manifest",
          runtime: "@cognidesk/integration-voice-google-speech/runtime",
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
    await expect(readFile(new URL("../src/manifest.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/from\s+["']@google-cloud\/(?:speech|text-to-speech)["']/);
  });

  it("constructs official Google Cloud SDK raw clients", () => {
    const rawClients = createGoogleSpeechRawClients({
      clientOptions: { fallback: true },
    });

    expect(rawClients.speechClient).toBeInstanceOf(SpeechClient);
    expect(rawClients.textToSpeechClient).toBeInstanceOf(TextToSpeechClient);
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

    expect(client.getRawClients().speechClient).toBe(speechClient);
    expect(client.getRawClients().textToSpeechClient).toBe(textToSpeechClient);
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

  it("maps Cognidesk operation handlers to Google SDK-backed client methods", async () => {
    const speechClient = {
      recognize: vi.fn(async () => [{ results: [] }]),
    };
    const textToSpeechClient = {
      synthesizeSpeech: vi.fn(async () => [{ audioContent: new Uint8Array([9]) }]),
    };
    const client: GoogleSpeechClient = {
      getRawClients: vi.fn(() => ({
        speechClient: speechClient as never,
        textToSpeechClient: textToSpeechClient as never,
      })),
      transcribeSpeech: vi.fn(async () => ({ text: "mapped transcript" })),
      synthesizeSpeech: vi.fn(async () => new Uint8Array([9]).buffer),
    };
    const context = { metadata: { client } };

    await expect(googleSpeechIntegration.run(
      "voice.session.start",
      { audio: new Uint8Array([1]) },
      context,
    )).resolves.toMatchObject({ text: "mapped transcript" });
    await expect(googleSpeechIntegration.run(
      "voice.turn.finalize",
      { audio: new Uint8Array([2]), languageCode: "en-US" },
      context,
    )).resolves.toMatchObject({ text: "mapped transcript" });
    await expect(googleSpeechIntegration.run(
      "voice.speak",
      { text: "Reply", voiceName: "en-US-Standard-A" },
      context,
    )).resolves.toBeInstanceOf(ArrayBuffer);

    expect(client.transcribeSpeech).toHaveBeenCalledTimes(2);
    expect(client.transcribeSpeech).toHaveBeenNthCalledWith(1, { audio: new Uint8Array([1]) });
    expect(client.transcribeSpeech).toHaveBeenNthCalledWith(2, {
      audio: new Uint8Array([2]),
      languageCode: "en-US",
    });
    expect(client.synthesizeSpeech).toHaveBeenCalledWith({
      text: "Reply",
      voiceName: "en-US-Standard-A",
    });
  });

  it("reports Google Speech credential readiness", () => {
    expect(googleSpeechCredentialStatuses({})).toEqual([
      expect.objectContaining({ requirementId: "google-cloud-access-token", state: "missing" }),
    ]);
  });
});
