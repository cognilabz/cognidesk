import { describe, expect, it, vi } from "vitest";
import type { VoiceProviderEvent, VoiceSocketSession } from "@cognidesk/voice-websocket";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
  AZURE_SPEECH_FULL_API_OPERATION_COUNT,
  azureSpeechCredentialStatuses,
  azureSpeechProviderManifest,
  createAzureSpeechClient,
  createAzureSpeechVoiceProvider,
} from "../../../src/voice/azure-speech/index.js";

describe("@cognidesk/integrations/voice/azure-speech", () => {
  it("exports an official provider manifest for Azure Speech STT and TTS", () => {
    expect(azureSpeechProviderManifest).toMatchObject({
      id: "voice.azure-speech",
      packageName: "@cognidesk/integrations",
      category: "voice",
      provider: "azure-speech",
      trustLevel: "official",
    });
    expect(azureSpeechProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["receive", "send", "media"]));
    expect(azureSpeechProviderManifest.limitations.join(" "))
      .toContain("background LLM is the Cognidesk Agent Model Set");
    expect(AZURE_SPEECH_FULL_API_OPERATION_COUNT).toBe(105);
    expect(AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT).toBe(AZURE_SPEECH_FULL_API_OPERATION_COUNT);
    expect(azureSpeechProviderManifest.metadata?.generatedSpeechApi)
      .toMatchObject({
        operationCount: AZURE_SPEECH_FULL_API_OPERATION_COUNT,
        functionCount: AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
      });
    expect(azureSpeechProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://learn.microsoft.com/azure/ai-services/speech-service/rest-speech-to-text-short",
        "https://learn.microsoft.com/azure/ai-services/speech-service/rest-text-to-speech",
      ]));
  });

  it("calls Azure STT and TTS REST endpoints with documented audio formats", async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      if (url.includes(".stt.")) {
        expect(init).toMatchObject({
          method: "POST",
          headers: expect.objectContaining({
            "Ocp-Apim-Subscription-Key": "test-key",
            "content-type": "audio/wav; codecs=audio/pcm; samplerate=24000",
          }),
        });
        return new Response(JSON.stringify({
          RecognitionStatus: "Success",
          DisplayText: "I need my ticket status.",
        }), { status: 200 });
      }
      expect(init).toMatchObject({
        method: "POST",
        headers: expect.objectContaining({
          "Ocp-Apim-Subscription-Key": "test-key",
          "X-Microsoft-OutputFormat": "raw-24khz-16bit-mono-pcm",
        }),
      });
      expect(String(init?.body)).toContain("en-US-AvaMultilingualNeural");
      return new Response(new Uint8Array([1, 2, 3]), { status: 200 });
    });
    const client = createAzureSpeechClient({
      speechKey: "test-key",
      region: "westeurope",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.transcribeSpeech({
      audio: new Uint8Array([1, 2, 3, 4]),
      language: "en-US",
    })).resolves.toMatchObject({
      text: "I need my ticket status.",
      recognitionStatus: "Success",
    });
    await expect(client.synthesizeSpeech({
      text: "Your ticket is confirmed.",
      voiceName: "en-US-AvaMultilingualNeural",
    })).resolves.toBeInstanceOf(ArrayBuffer);

    expect(fetchMock.mock.calls[0]?.[0]).toBe(
      "https://westeurope.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=en-US&format=detailed",
    );
    expect(fetchMock.mock.calls[1]?.[0]).toBe(
      "https://westeurope.tts.speech.microsoft.com/cognitiveservices/v1",
    );
  });

  it("runs Azure STT and TTS through the Cognidesk speech voice provider", async () => {
    const provider = createAzureSpeechVoiceProvider({
      voiceName: "en-US-AvaMultilingualNeural",
      minSpeechMs: 0,
      client: {
        async transcribeSpeech() {
          return { text: "I need my ticket status.", recognitionStatus: "Success" };
        },
        async synthesizeSpeech(input) {
          expect(input).toMatchObject({
            text: "Your ticket is confirmed.",
            voiceName: "en-US-AvaMultilingualNeural",
          });
          return new Uint8Array([5, 6, 7]).buffer;
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
        transcriptionSource: "azure-speech-to-text",
      }),
      expect.objectContaining({
        kind: "server_event",
        event: expect.objectContaining({
          type: "response.output_audio.delta",
          delta: "BQYH",
        }),
      }),
    ]));
  });

  it("reports Azure Speech credential status from expected env secret names", () => {
    expect(azureSpeechCredentialStatuses({})).toEqual([
      expect.objectContaining({ requirementId: "azure-speech-key", state: "missing" }),
      expect.objectContaining({ requirementId: "azure-speech-region", state: "missing" }),
    ]);
    expect(azureSpeechCredentialStatuses({
      speechKey: "configured",
      region: "westeurope",
    })).toEqual([
      expect.objectContaining({ requirementId: "azure-speech-key", state: "configured" }),
      expect.objectContaining({ requirementId: "azure-speech-region", state: "configured" }),
    ]);
  });

  it("passes provider conformance for configured Azure Speech STT and TTS", async () => {
    const result = await runProviderConformance({
      manifest: azureSpeechProviderManifest,
      channels: [{
        id: "voice",
        channel: "voice",
        providerPackageIds: [azureSpeechProviderManifest.id],
        enabledCapabilities: ["receive", "send", "media"],
      }],
      credentialStatuses: azureSpeechCredentialStatuses({
        speechKey: "configured",
        region: "westeurope",
      }),
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
      provider: "azure-speech",
    },
    events: [],
    createdAt: "2026-05-25T00:00:00.000Z",
    updatedAt: "2026-05-25T00:00:00.000Z",
    status: "pending",
    lastAckSequence: 0,
  };
}
