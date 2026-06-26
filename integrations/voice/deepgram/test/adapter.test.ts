import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
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
    expect(deepgramVoiceProviderManifest.operations).toEqual(expect.arrayContaining([
      expect.objectContaining({
        alias: "voice.turn.finalize",
        providerOperation: "listen.v1.media.transcribeFile",
      }),
      expect.objectContaining({
        alias: "voice.speak",
        providerOperation: "speak.v1.audio.generate",
      }),
    ]));
    expect(Object.keys(deepgramVoiceIntegration.operations)).toEqual(["voice.turn.finalize", "voice.speak"]);
    await expect(readFile(new URL("../src/manifest.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/from\s+["']@deepgram\/sdk["']/);
  });

  it("creates the official Deepgram SDK client for runtime voice operations", async () => {
    const fetchCalls: Array<{ url: string; method?: string; bodyType?: string }> = [];
    const sdkFetch = vi.fn(async (
      input: Parameters<typeof fetch>[0],
      init?: Parameters<typeof fetch>[1],
    ): Promise<Response> => {
      const url = String(input);
      const body = init?.body;
      const fetchCall: { url: string; method?: string; bodyType?: string } = { url };
      const bodyType = typeof body === "string" ? "String" : body && typeof body === "object" ? body.constructor.name : undefined;
      if (init?.method) fetchCall.method = init.method;
      if (bodyType) fetchCall.bodyType = bodyType;
      fetchCalls.push(fetchCall);

      if (url.includes("/v1/speak")) {
        return new Response(new Uint8Array([7, 8]).buffer, {
          status: 200,
          headers: {
            "content-type": "audio/wav",
            "dg-request-id": "dg_tts_1",
            "dg-model-name": "aura-2-thalia-en",
            "dg-model-uuid": "model_uuid_1",
            "dg-char-count": "2",
          },
        });
      }

      return Response.json({
        metadata: {
          request_id: "dg_stt_1",
          duration: 1.2,
          channels: 1,
          models: ["model_1"],
          model_info: { model_1: { name: "nova-3" } },
        },
        results: { channels: [{ alternatives: [{ transcript: "hello sdk", confidence: 0.91 }] }] },
      });
    });

    const client = createDeepgramVoiceClient({ apiKey: "dg_key", fetch: sdkFetch });
    const rawClient = await client.getRawClient();

    await expect(client.getSdkClient()).resolves.toBe(rawClient);
    expect(typeof rawClient.listen?.v1?.media?.transcribeFile).toBe("function");
    expect(typeof rawClient.speak?.v1?.audio?.generate).toBe("function");
    await expect(client.transcribeAudio({ audio: new Uint8Array([1, 2]), model: "nova-3" }))
      .resolves.toMatchObject({
        text: "hello sdk",
        requestId: "dg_stt_1",
        confidence: 0.91,
        modelName: "nova-3",
      });
    await expect(client.synthesizeSpeech({ text: "hi", model: "aura-2-thalia-en" }))
      .resolves.toMatchObject({
        audio: expect.any(ArrayBuffer),
        requestId: "dg_tts_1",
        modelName: "aura-2-thalia-en",
        modelUuid: "model_uuid_1",
        charCount: 2,
        contentType: "audio/wav",
      });
    expect(fetchCalls[0]).toMatchObject({ method: "POST", bodyType: "Blob" });
    expect(fetchCalls[0]?.url).toContain("/v1/listen?");
    expect(fetchCalls[0]?.url).toContain("model=nova-3");
    expect(fetchCalls[1]).toMatchObject({ method: "POST", bodyType: "String" });
    expect(fetchCalls[1]?.url).toContain("/v1/speak?");
    expect(fetchCalls[1]?.url).toContain("model=aura-2-thalia-en");
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
                return {
                  bodyUsed: false,
                  stream: () => null,
                  blob: async () => new Blob([new Uint8Array([1, 2, 3])]),
                  arrayBuffer: async () => new Uint8Array([1, 2, 3]).buffer,
                };
              },
            },
          },
        },
      },
    });

    const rawClient = await client.getRawClient();
    await expect(client.getSdkClient()).resolves.toBe(rawClient);
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
        async getSdkClient() {
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
      onEvent: async (event: unknown) => { events.push(event); },
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
