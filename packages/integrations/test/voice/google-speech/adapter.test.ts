import { describe, expect, it, vi } from "vitest";
import type { VoiceProviderEvent, VoiceSocketSession } from "@cognidesk/voice-websocket";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
  GOOGLE_SPEECH_FULL_API_OPERATION_COUNT,
  createGoogleSpeechClient,
  createGoogleSpeechVoiceProvider,
  googleSpeechCredentialStatuses,
  googleSpeechProviderManifest,
} from "../../../src/voice/google-speech/index.js";

describe("@cognidesk/integrations/voice/google-speech", () => {
  it("exports an official provider manifest for Google Cloud Speech STT and TTS", () => {
    expect(googleSpeechProviderManifest).toMatchObject({
      id: "voice.google-speech",
      packageName: "@cognidesk/integrations",
      category: "voice",
      provider: "google-speech",
      trustLevel: "official",
    });
    expect(googleSpeechProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["receive", "send", "media"]));
    expect(googleSpeechProviderManifest.limitations.join(" "))
      .toContain("background LLM is the Cognidesk Agent Model Set");
    expect(GOOGLE_SPEECH_FULL_API_OPERATION_COUNT).toBe(21);
    expect(GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT).toBe(GOOGLE_SPEECH_FULL_API_OPERATION_COUNT);
    expect(googleSpeechProviderManifest.metadata?.generatedSpeechApi)
      .toMatchObject({
        operationCount: GOOGLE_SPEECH_FULL_API_OPERATION_COUNT,
        functionCount: GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
      });
    expect(googleSpeechProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/speech/recognize",
        "https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize",
        "https://docs.cloud.google.com/docs/authentication/rest",
      ]));
  });

  it("calls Google Cloud STT and TTS REST endpoints with documented JSON payloads", async () => {
    const getAccessToken = vi.fn(async () => "test-token");
    const fetchMock = vi.fn(async (url: string | URL | Request, init?: RequestInit) => {
      expect(init).toMatchObject({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer test-token",
          "content-type": "application/json; charset=utf-8",
          "x-goog-user-project": "billing-project",
        }),
      });
      const body = JSON.parse(String(init?.body));
      if (String(url).includes("speech:recognize")) {
        expect(body).toEqual({
          config: {
            encoding: "LINEAR16",
            sampleRateHertz: 24000,
            languageCode: "en-US",
            model: "latest_short",
            enableAutomaticPunctuation: true,
          },
          audio: {
            content: Buffer.from(new Uint8Array([1, 2, 3, 4])).toString("base64"),
          },
        });
        return new Response(JSON.stringify({
          results: [
            {
              alternatives: [{ transcript: "I need my ticket", confidence: 0.92 }],
              languageCode: "en-US",
            },
            {
              alternatives: [{ transcript: " status." }],
            },
          ],
          requestId: "123456789",
          totalBilledTime: "1.2s",
        }), { status: 200 });
      }
      expect(body).toEqual({
        input: {
          text: "Your ticket is confirmed.",
        },
        voice: {
          languageCode: "en-US",
          name: "en-US-Chirp3-HD-Achernar",
        },
        audioConfig: {
          audioEncoding: "LINEAR16",
          sampleRateHertz: 24000,
          speakingRate: 1.05,
        },
      });
      return new Response(JSON.stringify({
        audioContent: Buffer.from(new Uint8Array([9, 8, 7])).toString("base64"),
      }), { status: 200 });
    });
    const client = createGoogleSpeechClient({
      getAccessToken,
      quotaProjectId: "billing-project",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.transcribeSpeech({
      audio: new Uint8Array([1, 2, 3, 4]),
      languageCode: "en-US",
      model: "latest_short",
      enableAutomaticPunctuation: true,
    })).resolves.toMatchObject({
      text: "I need my ticket status.",
      confidence: 0.92,
      languageCode: "en-US",
      requestId: "123456789",
      totalBilledTime: "1.2s",
    });
    const audio = await client.synthesizeSpeech({
      text: "Your ticket is confirmed.",
      voiceName: "en-US-Chirp3-HD-Achernar",
      audioEncoding: "LINEAR16",
      sampleRateHertz: 24_000,
      speakingRate: 1.05,
    });

    expect(new Uint8Array(audio)).toEqual(new Uint8Array([9, 8, 7]));
    expect(fetchMock.mock.calls[0]?.[0]).toBe("https://speech.googleapis.com/v1/speech:recognize");
    expect(fetchMock.mock.calls[1]?.[0]).toBe("https://texttospeech.googleapis.com/v1/text:synthesize");
    expect(getAccessToken).toHaveBeenCalledTimes(2);
  });

  it("runs Google Cloud STT and TTS through the Cognidesk speech voice provider", async () => {
    const provider = createGoogleSpeechVoiceProvider({
      voiceName: "en-US-Chirp3-HD-Achernar",
      minSpeechMs: 0,
      client: {
        async transcribeSpeech(input) {
          expect(input).toMatchObject({
            sampleRate: 24000,
            languageCode: "en-US",
            encoding: "LINEAR16",
          });
          return {
            text: "I need my ticket status.",
            confidence: 0.94,
            languageCode: "en-US",
            requestId: "request_123",
          };
        },
        async synthesizeSpeech(input) {
          expect(input).toMatchObject({
            text: "Your ticket is confirmed.",
            voiceName: "en-US-Chirp3-HD-Achernar",
            languageCode: "en-US",
            audioEncoding: "LINEAR16",
            sampleRateHertz: 24000,
          });
          return wavWithPcm(new Uint8Array([5, 6, 7, 8]));
        },
      },
      languageCode: "en-US",
      recognitionEncoding: "LINEAR16",
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
        transcriptionSource: "google-cloud-speech-to-text",
        metadata: expect.objectContaining({
          provider: "google-speech",
          confidence: 0.94,
          requestId: "request_123",
        }),
      }),
      expect.objectContaining({
        kind: "server_event",
        event: expect.objectContaining({
          type: "response.output_audio.delta",
          delta: "BQYHCA==",
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

  it("reports Google Cloud credential status from token configuration", () => {
    expect(googleSpeechCredentialStatuses({})).toEqual([
      expect.objectContaining({ requirementId: "google-cloud-access-token", state: "missing" }),
    ]);
    expect(googleSpeechCredentialStatuses({
      hasAccessTokenProvider: true,
    })).toEqual([
      expect.objectContaining({ requirementId: "google-cloud-access-token", state: "configured" }),
    ]);
  });

  it("passes provider conformance for configured Google Cloud Speech STT and TTS", async () => {
    const result = await runProviderConformance({
      manifest: googleSpeechProviderManifest,
      channels: [{
        id: "voice",
        channel: "voice",
        providerPackageIds: [googleSpeechProviderManifest.id],
        enabledCapabilities: ["receive", "send", "media"],
      }],
      credentialStatuses: googleSpeechCredentialStatuses({
        hasAccessTokenProvider: true,
      }),
    });

    expect(result.status).toBe("passed");
  });
});

function wavWithPcm(pcm: Uint8Array): ArrayBuffer {
  const header = new ArrayBuffer(44);
  const view = new DataView(header);
  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + pcm.byteLength, true);
  writeAscii(view, 8, "WAVE");
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, 24_000, true);
  view.setUint32(28, 48_000, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, "data");
  view.setUint32(40, pcm.byteLength, true);
  const bytes = new Uint8Array(44 + pcm.byteLength);
  bytes.set(new Uint8Array(header), 0);
  bytes.set(pcm, 44);
  return bytes.buffer;
}

function writeAscii(view: DataView, offset: number, value: string) {
  for (let index = 0; index < value.length; index += 1) {
    view.setUint8(offset + index, value.charCodeAt(index));
  }
}

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
      provider: "google-speech",
    },
    events: [],
    createdAt: "2026-05-25T00:00:00.000Z",
    updatedAt: "2026-05-25T00:00:00.000Z",
    status: "pending",
    lastAckSequence: 0,
  };
}
