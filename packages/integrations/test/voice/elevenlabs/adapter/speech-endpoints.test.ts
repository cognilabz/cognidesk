import {
  ELEVENLABS_API_FAMILIES,
  ELEVENLABS_API_SPEC_SOURCES,
  ELEVENLABS_FULL_API_GENERATED_FUNCTION_COUNT,
  ELEVENLABS_FULL_API_OPERATION_COUNT,
  ELEVENLABS_FULL_API_PATH_COUNT,
  createElevenLabsSpeechVoiceProvider,
  createElevenLabsVoiceClient,
  createElevenLabsVoiceLiveChecks,
  describe,
  elevenLabsVoiceCredentialStatuses,
  elevenLabsVoiceProviderManifest,
  expect,
  fakeVoiceSession,
  it,
  runProviderConformance,
  type VoiceProviderEvent,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("creates speech through the documented Text to Speech endpoint", async () => {
      const fetchMock = vi.fn(async () =>
        new Response(new Uint8Array([1, 2, 3]), { status: 200 })
      );
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });

      const audio = await client.createSpeech({
        voiceId: "voice_123",
        text: "Your flight is confirmed.",
        modelId: "eleven_multilingual_v2",
        outputFormat: "mp3_44100_128",
        enableLogging: false,
        voiceSettings: {
          stability: 0.4,
          similarity_boost: 0.8,
        },
      });

      expect(new Uint8Array(audio)).toEqual(new Uint8Array([1, 2, 3]));
      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.elevenlabs.io/v1/text-to-speech/voice_123?enable_logging=false&output_format=mp3_44100_128",
        expect.objectContaining({
          method: "POST",
          headers: expect.objectContaining({
            "xi-api-key": "test-key",
            "content-type": "application/json",
          }),
        }),
      );
      const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
      expect(JSON.parse(request.body)).toEqual({
        text: "Your flight is confirmed.",
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.4,
          similarity_boost: 0.8,
        },
      });
    });

  it("streams speech audio and returns the readable response body", async () => {
      const body = new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(new Uint8Array([4, 5, 6]));
          controller.close();
        },
      });
      const fetchMock = vi.fn(async () => new Response(body, { status: 200 }));
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });

      const stream = await client.streamSpeech({
        voiceId: "voice_123",
        text: "Streaming response.",
        optimizeStreamingLatency: 1,
      });

      expect(stream).toBeInstanceOf(ReadableStream);
      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.elevenlabs.io/v1/text-to-speech/voice_123/stream?optimize_streaming_latency=1",
        expect.objectContaining({ method: "POST" }),
      );
    });

  it("creates speech with timing through the timestamps endpoint", async () => {
      const fetchMock = vi.fn(async () =>
        new Response(JSON.stringify({
          audio_base64: "AQID",
          alignment: {
            characters: ["H"],
            character_start_times_seconds: [0],
            character_end_times_seconds: [0.1],
          },
        }), { status: 200 })
      );
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });

      const response = await client.createSpeechWithTiming({
        voiceId: "voice_123",
        text: "Hello",
      });

      expect(response.audio_base64).toBe("AQID");
      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.elevenlabs.io/v1/text-to-speech/voice_123/with-timestamps",
        expect.objectContaining({ method: "POST" }),
      );
    });

  it("streams speech with timing through the documented stream timestamps endpoint", async () => {
      const body = new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(new Uint8Array([9]));
          controller.close();
        },
      });
      const fetchMock = vi.fn(async () => new Response(body, { status: 200 }));
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });

      await client.streamSpeechWithTiming({
        voiceId: "voice_123",
        text: "Timed stream",
        outputFormat: "mp3_44100_128",
      });

      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.elevenlabs.io/v1/text-to-speech/voice_123/stream/with-timestamps?output_format=mp3_44100_128",
        expect.objectContaining({ method: "POST" }),
      );
    });

  it("creates and retrieves Speech to Text transcripts", async () => {
      const fetchMock = vi.fn(async (url: string) => {
        if (url.endsWith("/v1/speech-to-text")) {
          return new Response(JSON.stringify({ text: "Hello world!" }), { status: 200 });
        }
        return new Response(JSON.stringify({ transcription_id: "tr_123", text: "Hello world!" }), { status: 200 });
      });
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });

      await client.createTranscript({
        sourceUrl: "https://media.example.test/call.mp3",
        modelId: "scribe_v2",
        diarize: true,
        timestampsGranularity: "word",
        webhookMetadata: { conversationId: "conversation_1" },
      });
      const transcript = await client.getTranscript("tr_123");
      await client.deleteTranscript("tr_123");

      expect(transcript.text).toBe("Hello world!");
      const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: FormData };
      expect(request.body.get("source_url")).toBe("https://media.example.test/call.mp3");
      expect(request.body.get("model_id")).toBe("scribe_v2");
      expect(request.body.get("diarize")).toBe("true");
      expect(request.body.get("timestamps_granularity")).toBe("word");
      expect(request.body.get("webhook_metadata")).toBe(JSON.stringify({ conversationId: "conversation_1" }));
      expect(fetchMock.mock.calls[1]?.[0]).toBe(
        "https://api.elevenlabs.io/v1/speech-to-text/transcripts/tr_123",
      );
      expect(fetchMock).toHaveBeenLastCalledWith(
        "https://api.elevenlabs.io/v1/speech-to-text/transcripts/tr_123",
        expect.objectContaining({ method: "DELETE" }),
      );
    });

  it("rejects ambiguous transcript source input", async () => {
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: vi.fn() as unknown as typeof fetch,
      });

      await expect(client.createTranscript({}))
        .rejects.toThrow("Exactly one of file or sourceUrl");
      await expect(client.createTranscript({
        sourceUrl: "https://media.example.test/call.mp3",
        file: new Blob(["abc"], { type: "audio/mpeg" }),
      })).rejects.toThrow("Only one of file or sourceUrl");
    });

  it("covers voice changer, sound effects, audio isolation, and forced alignment endpoints", async () => {
      const fetchMock = vi.fn(async (url: string) => {
        if (url.endsWith("/v1/forced-alignment")) {
          return new Response(JSON.stringify({ characters: [] }), { status: 200 });
        }
        return new Response(new Uint8Array([1, 2, 3]), { status: 200 });
      });
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });
      const audio = new Blob(["abc"], { type: "audio/mpeg" });

      await client.createVoiceChange({
        voiceId: "voice_123",
        file: audio,
        fileName: "input.mp3",
        modelId: "eleven_multilingual_sts_v2",
        outputFormat: "mp3_44100_128",
        removeBackgroundNoise: true,
      });
      await client.streamVoiceChange({ voiceId: "voice_123", file: audio });
      await client.createSoundEffect({ text: "Door chime", durationSeconds: 1.5 });
      await client.isolateAudio({ fileUrl: "https://media.example.test/noisy.mp3" });
      await client.streamAudioIsolation({ file: audio });
      const alignment = await client.createForcedAlignment({
        file: audio,
        fileName: "input.mp3",
        text: "hello",
      });

      expect(alignment).toEqual({ characters: [] });
      expect(fetchMock.mock.calls.map((call) => call[0])).toEqual([
        "https://api.elevenlabs.io/v1/speech-to-speech/voice_123?output_format=mp3_44100_128",
        "https://api.elevenlabs.io/v1/speech-to-speech/voice_123/stream",
        "https://api.elevenlabs.io/v1/sound-generation",
        "https://api.elevenlabs.io/v1/audio-isolation",
        "https://api.elevenlabs.io/v1/audio-isolation/stream",
        "https://api.elevenlabs.io/v1/forced-alignment",
      ]);
      const voiceChangeForm = ((fetchMock.mock.calls[0] as unknown[])[1] as { body: FormData }).body;
      expect(voiceChangeForm.get("model_id")).toBe("eleven_multilingual_sts_v2");
      expect(voiceChangeForm.get("remove_background_noise")).toBe("true");
      const soundEffectRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
      expect(JSON.parse(soundEffectRequest.body)).toEqual({
        text: "Door chime",
        duration_seconds: 1.5,
      });
    });

  it("lists voices and models for readiness and voice selection", async () => {
      const fetchMock = vi.fn(async (url: string) => {
        if (url.endsWith("/v2/voices")) {
          return new Response(JSON.stringify({ voices: [{ voice_id: "voice_123", name: "Rachel" }] }), { status: 200 });
        }
        return new Response(JSON.stringify([{ model_id: "eleven_multilingual_v2", name: "Multilingual", can_do_text_to_speech: true }]), { status: 200 });
      });
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });

      const voices = await client.listVoices();
      const models = await client.listModels();

      expect(voices.voices[0]).toMatchObject({ voice_id: "voice_123", name: "Rachel" });
      expect(models[0]).toMatchObject({ model_id: "eleven_multilingual_v2", can_do_text_to_speech: true });
    });

  it("builds documented Text to Speech websocket URLs without exposing xi-api-key in query params", () => {
      const client = createElevenLabsVoiceClient({ apiKey: "server-key" });

      expect(client.buildTextToSpeechWebSocketUrl({
        voiceId: "voice_123",
        modelId: "eleven_flash_v2_5",
        outputFormat: "ulaw_8000",
        singleUseToken: "token_123",
        syncAlignment: true,
      })).toBe(
        "wss://api.elevenlabs.io/v1/text-to-speech/voice_123/stream-input?single_use_token=token_123&model_id=eleven_flash_v2_5&output_format=ulaw_8000&sync_alignment=true",
      );

      expect(client.buildMultiContextTextToSpeechWebSocketUrl({
        voiceId: "voice_123",
        modelId: "eleven_flash_v2_5",
        inactivityTimeout: 30,
      })).toBe(
        "wss://api.elevenlabs.io/v1/text-to-speech/voice_123/multi-stream-input?model_id=eleven_flash_v2_5&inactivity_timeout=30",
      );
    });
});
