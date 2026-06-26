import { readFile } from "node:fs/promises";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  createElevenLabsVoiceClient,
  createElevenLabsVoiceProvider,
  elevenLabsVoiceCredentialStatuses,
  elevenLabsVoiceIntegration,
  elevenLabsVoiceProviderManifest,
  type ElevenLabsRawClient,
} from "../src/index.js";

const elevenLabsSdkMock = vi.hoisted(() => ({
  constructorOptions: [] as unknown[],
  instances: [] as unknown[],
}));

vi.mock("@elevenlabs/elevenlabs-js", () => ({
  ElevenLabsClient: class ElevenLabsClient {
    textToSpeech = { convert: async () => new Uint8Array([1]) };
    speechToText = { convert: async () => ({ text: "mock transcript" }) };
    conversationalAi = {
      conversations: {
        getSignedUrl: async () => ({ signedUrl: "wss://example.test/mock" }),
      },
    };

    constructor(options?: unknown) {
      elevenLabsSdkMock.constructorOptions.push(options);
      elevenLabsSdkMock.instances.push(this);
    }
  },
}));

describe("@cognidesk/integration-voice-elevenlabs", () => {
  beforeEach(() => {
    elevenLabsSdkMock.constructorOptions.length = 0;
    elevenLabsSdkMock.instances.length = 0;
  });

  it("keeps manifest metadata split from SDK runtime imports", async () => {
    expect(elevenLabsVoiceProviderManifest.packageName).toBe("@cognidesk/integration-voice-elevenlabs");
    expect(elevenLabsVoiceProviderManifest.metadata?.implementation).toMatchObject({
      strategy: "official-sdk",
      sdkPackage: "@elevenlabs/elevenlabs-js",
      verifiedVersion: "2.53.1",
    });
    expect(Object.keys(elevenLabsVoiceIntegration.operations)).toEqual([
      "voice.speak",
      "voice.turn.finalize",
      "elevenlabs.conversation.authorize",
    ]);
    await expect(readFile(new URL("../src/manifest.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/from\s+["']@elevenlabs\/elevenlabs-js["']/);
  });

  it("uses injected ElevenLabs SDK clients for speech and transcripts", async () => {
    const signal = new AbortController().signal;
    const audio = new Blob(["audio"], { type: "audio/wav" });
    const rawClient: ElevenLabsRawClient = {
      textToSpeech: {
        async convert(voiceId, request, requestOptions) {
          expect(voiceId).toBe("voice_1");
          expect(request).toMatchObject({ text: "hello", outputFormat: "pcm_24000" });
          expect(request).not.toHaveProperty("output_format");
          expect(requestOptions?.abortSignal).toBe(signal);
          return new Uint8Array([1, 2, 3]);
        },
      },
      speechToText: {
        async convert(request, requestOptions) {
          expect(request.file).toMatchObject({ data: audio, filename: "audio.wav" });
          expect(request).toMatchObject({
            modelId: "scribe_v1",
            languageCode: "en",
            timestampsGranularity: "word",
          });
          expect(request).not.toHaveProperty("model_id");
          expect(request).not.toHaveProperty("language_code");
          expect(requestOptions?.abortSignal).toBe(signal);
          return {
            transcriptionId: "transcript_1",
            text: "hello",
            languageCode: "en",
            languageProbability: 0.99,
          };
        },
      },
      conversationalAi: {
        conversations: {
          async getSignedUrl(request, requestOptions) {
            expect(request).toEqual({ agentId: "agent_1" });
            expect(requestOptions?.abortSignal).toBe(signal);
            return { signedUrl: `wss://example.test/${request.agentId}` };
          },
        },
      },
    };
    const client = createElevenLabsVoiceClient({
      rawClient,
    });

    await expect(client.getRawClient()).resolves.toBe(rawClient);
    await expect(client.createSpeech({ voiceId: "voice_1", text: "hello", outputFormat: "pcm_24000", signal }))
      .resolves.toBeInstanceOf(ArrayBuffer);
    await expect(client.createTranscript({
      file: audio,
      fileName: "audio.wav",
      modelId: "scribe_v1",
      languageCode: "en",
      timestampsGranularity: "word",
      signal,
    })).resolves.toMatchObject({
      transcription_id: "transcript_1",
      transcriptionId: "transcript_1",
      text: "hello",
      language_code: "en",
      languageCode: "en",
      language_probability: 0.99,
      languageProbability: 0.99,
    });
    await expect(client.createConversationSignedUrl({ agentId: "agent_1", signal }))
      .resolves.toBe("wss://example.test/agent_1");
  });

  it("lazily creates the official ElevenLabs SDK client as the raw escape hatch", async () => {
    const client = createElevenLabsVoiceClient({
      apiKey: "test-api-key",
      apiBaseUrl: "https://elevenlabs.example.test",
    });

    const rawClient = await client.getRawClient();

    expect(elevenLabsSdkMock.constructorOptions).toEqual([{
      apiKey: "test-api-key",
      baseUrl: "https://elevenlabs.example.test",
    }]);
    expect(elevenLabsSdkMock.instances).toHaveLength(1);
    expect(rawClient).toBe(elevenLabsSdkMock.instances[0]);
    expect(rawClient.constructor.name).toBe("ElevenLabsClient");
    expect(rawClient.textToSpeech?.convert).toBeTypeOf("function");
    expect(rawClient.speechToText?.convert).toBeTypeOf("function");
    expect(rawClient.conversationalAi?.conversations?.getSignedUrl).toBeTypeOf("function");
    await expect(client.getRawClient()).resolves.toBe(rawClient);
  });

  it("preserves Cognidesk speech pipeline streaming constraints", async () => {
    const provider = createElevenLabsVoiceProvider({
      voiceId: "voice_1",
      minSpeechMs: 0,
      client: {
        async getRawClient() {
          throw new Error("not used");
        },
        async createTranscript() {
          return { transcription_id: "transcript_1", text: "hello" };
        },
        async createSpeech() {
          return new Uint8Array([1, 2]).buffer;
        },
        async createConversationSignedUrl() {
          return "wss://example.test";
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
    await session.speak({ text: "hello" });

    expect(events).toEqual(expect.arrayContaining([
      expect.objectContaining({ kind: "input_transcript.completed", text: "hello" }),
      expect.objectContaining({ kind: "server_event", event: expect.objectContaining({ type: "response.output_audio.delta" }) }),
    ]));
  });

  it("reports credential readiness", () => {
    expect(elevenLabsVoiceCredentialStatuses({})[0]?.state).toBe("missing");
    expect(elevenLabsVoiceCredentialStatuses({ apiKey: "key" })[0]?.state).toBe("configured");
  });
});
