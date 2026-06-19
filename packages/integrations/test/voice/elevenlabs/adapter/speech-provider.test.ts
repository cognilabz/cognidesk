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
  it("runs ElevenLabs STT and TTS through the Cognidesk speech voice provider", async () => {
      const provider = createElevenLabsSpeechVoiceProvider({
        voiceId: "voice_123",
        minSpeechMs: 0,
        client: {
          async createTranscript(input) {
            expect(input.file).toBeInstanceOf(Blob);
            expect(input.fileName).toBe("cognidesk-voice-input.wav");
            expect(input.modelId).toBe("scribe_v1");
            return {
              transcription_id: "transcript_123",
              text: "I need my ticket status.",
              language_code: "en",
            };
          },
          async createSpeech(input) {
            expect(input).toMatchObject({
              voiceId: "voice_123",
              text: "Your ticket is confirmed.",
              outputFormat: "pcm_24000",
            });
            return new Uint8Array([1, 2, 3, 4]).buffer;
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
          itemId: "transcript_123",
          transcriptionSource: "elevenlabs-speech-to-text",
        }),
        expect.objectContaining({
          kind: "server_event",
          event: expect.objectContaining({
            type: "response.output_audio.delta",
            delta: "AQIDBA==",
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
});
