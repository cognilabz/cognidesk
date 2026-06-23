import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
  createElevenLabsVoiceClient,
  createElevenLabsVoiceProvider,
  elevenLabsVoiceCredentialStatuses,
  elevenLabsVoiceIntegration,
  elevenLabsVoiceProviderManifest,
} from "../src/index.js";

describe("@cognidesk/integration-voice-elevenlabs", () => {
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
    const client = createElevenLabsVoiceClient({
      rawClient: {
        textToSpeech: {
          async convert(voiceId, request) {
            expect(voiceId).toBe("voice_1");
            expect(request).toMatchObject({ text: "hello", output_format: "pcm_24000" });
            return new Uint8Array([1, 2, 3]);
          },
        },
        speechToText: {
          async convert(request) {
            expect(request.file).toBeInstanceOf(Blob);
            return { transcription_id: "transcript_1", text: "hello" };
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
      },
    });

    await expect(client.createSpeech({ voiceId: "voice_1", text: "hello", outputFormat: "pcm_24000" }))
      .resolves.toBeInstanceOf(ArrayBuffer);
    await expect(client.createTranscript({ file: new Blob(["audio"]), modelId: "scribe_v1" }))
      .resolves.toMatchObject({ transcription_id: "transcript_1", text: "hello" });
    await expect(client.createConversationSignedUrl({ agentId: "agent_1", signal }))
      .resolves.toBe("wss://example.test/agent_1");
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
      onEvent: async (event) => { events.push(event); },
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
