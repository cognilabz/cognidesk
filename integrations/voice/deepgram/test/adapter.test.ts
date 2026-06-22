import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
  createDeepgramVoiceClient,
  createDeepgramVoiceProvider,
  deepgramVoiceCredentialStatuses,
  deepgramVoiceIntegration,
  deepgramVoiceProviderManifest,
} from "../src/index.js";

describe("@cognidesk/integration-voice-deepgram", () => {
  it("keeps manifest metadata split from SDK runtime imports", async () => {
    expect(deepgramVoiceProviderManifest.packageName).toBe("@cognidesk/integration-voice-deepgram");
    expect(deepgramVoiceProviderManifest.metadata?.implementation).toMatchObject({
      strategy: "official-sdk",
      sdkPackage: "@deepgram/sdk",
      verifiedVersion: "5.4.0",
    });
    expect(Object.keys(deepgramVoiceIntegration.operations)).toEqual(["voice.turn.finalize", "voice.speak"]);
    await expect(readFile(new URL("../src/manifest.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/from\s+["']@deepgram\/sdk["']/);
  });

  it("uses injected Deepgram SDK clients for normalized STT and TTS", async () => {
    const client = createDeepgramVoiceClient({
      rawClient: {
        listen: {
          v1: {
            media: {
              async transcribeFile(uploadable, request) {
                expect(uploadable).toBeInstanceOf(Blob);
                expect(request).toMatchObject({ model: "nova-3", smart_format: true });
                return {
                  metadata: {
                    request_id: "dg_req_1",
                    models: ["model_1"],
                    model_info: { model_1: { name: "nova-3" } },
                  },
                  results: { channels: [{ alternatives: [{ transcript: "hello", confidence: 0.9 }] }] },
                };
              },
            },
          },
        },
        speak: {
          v1: {
            audio: {
              async generate(request) {
                expect(request).toMatchObject({ text: "hi", model: "aura-2-thalia-en" });
                return new Uint8Array([1, 2, 3]);
              },
            },
          },
        },
      },
    });

    await expect(client.transcribeAudio({ audio: new Uint8Array([1, 2]) })).resolves.toMatchObject({
      text: "hello",
      requestId: "dg_req_1",
      confidence: 0.9,
      modelName: "nova-3",
    });
    await expect(client.synthesizeSpeech({ text: "hi" })).resolves.toMatchObject({
      audio: expect.any(ArrayBuffer),
    });
  });

  it("preserves Cognidesk speech pipeline streaming constraints", async () => {
    const provider = createDeepgramVoiceProvider({
      minSpeechMs: 0,
      client: {
        async getRawClient() {
          throw new Error("not used");
        },
        async transcribeAudio() {
          return { text: "hello", requestId: "dg_req_1" };
        },
        async synthesizeSpeech() {
          return { audio: new Uint8Array([4, 5]).buffer };
        },
      },
    });
    const events: unknown[] = [];
    const session = await provider.connect({
      session: { id: "session-1", conversationId: "conversation-1" } as never,
      signal: new AbortController().signal,
      onEvent: async (event) => { events.push(event); },
    });
    await session.send({
      type: "input_audio_buffer.append",
      audio: Buffer.from(new Int16Array([1200, 0]).buffer).toString("base64"),
    });
    await session.send({ type: "input_audio_buffer.commit" });
    await session.speak({ text: "hi" });

    expect(events).toEqual(expect.arrayContaining([
      expect.objectContaining({ kind: "input_transcript.completed", text: "hello" }),
      expect.objectContaining({ kind: "server_event", event: expect.objectContaining({ type: "response.output_audio.delta" }) }),
    ]));
  });

  it("reports credential readiness", () => {
    expect(deepgramVoiceCredentialStatuses({})[0]?.state).toBe("missing");
    expect(deepgramVoiceCredentialStatuses({ apiKey: "key" })[0]?.state).toBe("configured");
  });
});
