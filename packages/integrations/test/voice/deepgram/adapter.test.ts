import { describe, expect, it, vi } from "vitest";
import type { VoiceProviderEvent, VoiceSocketSession } from "@cognidesk/voice-websocket";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  DEEPGRAM_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
  DEEPGRAM_SPEECH_FULL_API_OPERATION_COUNT,
  createDeepgramSpeechClient,
  createDeepgramSpeechVoiceProvider,
  deepgramSpeechCredentialStatuses,
  deepgramSpeechProviderManifest,
} from "../../../src/voice/deepgram/index.js";

describe("@cognidesk/integrations/voice/deepgram", () => {
  it("exports an official provider manifest for Deepgram STT and TTS only", () => {
    expect(deepgramSpeechProviderManifest).toMatchObject({
      id: "voice.deepgram",
      packageName: "@cognidesk/integrations",
      category: "voice",
      provider: "deepgram",
      trustLevel: "official",
    });
    expect(deepgramSpeechProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["receive", "send", "media"]));
    expect(deepgramSpeechProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toEqual(expect.arrayContaining(["llm", "agent"]));
    expect(deepgramSpeechProviderManifest.limitations.join(" "))
      .toContain("background LLM is the Cognidesk Agent Model Set");
    expect(DEEPGRAM_SPEECH_FULL_API_OPERATION_COUNT).toBe(49);
    expect(DEEPGRAM_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT).toBe(DEEPGRAM_SPEECH_FULL_API_OPERATION_COUNT);
    expect(deepgramSpeechProviderManifest.metadata?.generatedSpeechApi)
      .toMatchObject({
        operationCount: DEEPGRAM_SPEECH_FULL_API_OPERATION_COUNT,
        functionCount: DEEPGRAM_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
      });
    expect(deepgramSpeechProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.deepgram.com/docs/pre-recorded-audio",
        "https://developers.deepgram.com/docs/text-to-speech",
        "https://developers.deepgram.com/docs/tts-media-output-settings",
      ]));
  });

  it("calls Deepgram STT and TTS REST endpoints with documented request shapes", async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      if (url.includes("/v1/listen")) {
        expect(init).toMatchObject({
          method: "POST",
          headers: expect.objectContaining({
            authorization: "Token test-key",
            "content-type": "audio/wav",
            accept: "application/json",
          }),
        });
        expect(Buffer.from(init?.body as Uint8Array).toString("ascii", 0, 4)).toBe("RIFF");
        return new Response(JSON.stringify({
          metadata: {
            request_id: "dg_req_123",
            duration: 1.2,
            channels: 1,
            models: ["model_uuid_1"],
            model_info: {
              model_uuid_1: {
                name: "2-general-nova",
                arch: "nova-3",
              },
            },
          },
          results: {
            channels: [{
              alternatives: [{
                transcript: "I need my ticket status.",
                confidence: 0.97,
              }],
            }],
          },
        }), { status: 200 });
      }
      expect(init).toMatchObject({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Token test-key",
          "content-type": "application/json",
        }),
        body: JSON.stringify({ text: "Your ticket is confirmed." }),
      });
      return new Response(new Uint8Array([1, 2, 3]), {
        status: 200,
        headers: {
          "content-type": "audio/l16;rate=24000",
          "dg-request-id": "dg_tts_req_123",
          "dg-model-name": "aura-2-thalia-en",
          "dg-model-uuid": "tts_model_uuid_1",
          "dg-char-count": "25",
        },
      });
    });
    const client = createDeepgramSpeechClient({
      apiKey: "test-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.transcribeAudio({
      audio: new Uint8Array([1, 2, 3, 4]),
      language: "en-US",
    })).resolves.toMatchObject({
      text: "I need my ticket status.",
      requestId: "dg_req_123",
      confidence: 0.97,
      modelName: "2-general-nova",
    });
    const synthesis = await client.synthesizeSpeech({
      text: "Your ticket is confirmed.",
      model: "aura-2-thalia-en",
    });

    expect(new Uint8Array(synthesis.audio)).toEqual(new Uint8Array([1, 2, 3]));
    expect(synthesis).toMatchObject({
      requestId: "dg_tts_req_123",
      modelName: "aura-2-thalia-en",
      modelUuid: "tts_model_uuid_1",
      charCount: 25,
      contentType: "audio/l16;rate=24000",
    });
    expect(fetchMock.mock.calls[0]?.[0]).toBe(
      "https://api.deepgram.com/v1/listen?model=nova-3&smart_format=true&language=en-US",
    );
    expect(fetchMock.mock.calls[1]?.[0]).toBe(
      "https://api.deepgram.com/v1/speak?model=aura-2-thalia-en&encoding=linear16&container=none&sample_rate=24000",
    );
  });

  it("runs Deepgram STT and TTS through the Cognidesk speech voice provider", async () => {
    const provider = createDeepgramSpeechVoiceProvider({
      minSpeechMs: 0,
      language: "en-US",
      client: {
        async transcribeAudio(input) {
          expect(input).toMatchObject({
            model: "nova-3",
            language: "en-US",
            sampleRate: 24_000,
          });
          expect(input.audio).toBeInstanceOf(Uint8Array);
          return {
            text: "I need my ticket status.",
            requestId: "dg_req_123",
            confidence: 0.96,
            modelName: "nova-3",
          };
        },
        async synthesizeSpeech(input) {
          expect(input).toMatchObject({
            text: "Your ticket is confirmed.",
            model: "aura-2-thalia-en",
            encoding: "linear16",
            container: "none",
            sampleRate: 24_000,
          });
          return {
            audio: new Uint8Array([5, 6, 7]).buffer,
            requestId: "dg_tts_req_123",
            modelName: "aura-2-thalia-en",
          };
        },
      },
    });
    const events: VoiceProviderEvent[] = [];
    const session = await provider.connect({
      session: fakeVoiceSession(),
      signal: new AbortController().signal,
      onEvent: (event) => {
        events.push(event);
      },
    });

    await session.send({
      type: "input_audio_buffer.append",
      audio: Buffer.from(new Int16Array([1200, 1400, 0, 0]).buffer).toString("base64"),
    });
    await session.send({ type: "input_audio_buffer.commit" });
    await session.speak({ text: "Your ticket is confirmed." });

    expect(events).toEqual(expect.arrayContaining([
      expect.objectContaining({
        kind: "input_transcript.completed",
        text: "I need my ticket status.",
        itemId: "dg_req_123",
        transcriptionSource: "deepgram-speech-to-text",
      }),
      expect.objectContaining({
        kind: "server_event",
        event: expect.objectContaining({
          type: "response.output_audio.delta",
          delta: "BQYH",
        }),
      }),
      expect.objectContaining({
        kind: "server_event",
        event: expect.objectContaining({
          type: "response.output_audio_transcript.done",
          transcript: "Your ticket is confirmed.",
        }),
      }),
    ]));
  });

  it("reports Deepgram credential status from the expected env secret shape", () => {
    expect(deepgramSpeechCredentialStatuses({})).toEqual([
      expect.objectContaining({ requirementId: "deepgram-api-key", state: "missing" }),
    ]);
    expect(deepgramSpeechCredentialStatuses({ apiKey: "configured" })).toEqual([
      expect.objectContaining({ requirementId: "deepgram-api-key", state: "configured" }),
    ]);
  });

  it("passes provider conformance for configured Deepgram STT and TTS", async () => {
    const result = await runProviderConformance({
      manifest: deepgramSpeechProviderManifest,
      channels: [{
        id: "voice",
        channel: "voice",
        providerPackageIds: [deepgramSpeechProviderManifest.id],
        enabledCapabilities: ["receive", "send", "media"],
      }],
      credentialStatuses: deepgramSpeechCredentialStatuses({ apiKey: "configured" }),
    });

    expect(result.status).toBe("passed");
  });
});

function fakeVoiceSession(): VoiceSocketSession {
  return {
    id: "voice_connection_1",
    conversation: {
      id: "conversation_1",
      agentId: "flight-service",
      lifecycle: "active",
      context: {},
      createdAt: "2026-05-25T00:00:00.000Z",
      updatedAt: "2026-05-25T00:00:00.000Z",
    },
    channelSegment: {
      id: "voice_segment_1",
      conversationId: "conversation_1",
      channel: "voice",
      startedAt: "2026-05-25T00:00:00.000Z",
    },
    connection: {
      id: "voice_connection_1",
      channelSegmentId: "voice_segment_1",
      status: "starting",
      adapter: "cognidesk-voice-websocket",
      provider: "deepgram",
    },
    events: [],
    createdAt: "2026-05-25T00:00:00.000Z",
    updatedAt: "2026-05-25T00:00:00.000Z",
    status: "pending",
    lastAckSequence: 0,
  };
}
