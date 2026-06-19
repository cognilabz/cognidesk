import { describe, expect, it, vi } from "vitest";
import type { VoiceProviderEvent, VoiceSocketSession } from "@cognidesk/voice-websocket";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  AWS_SPEECH_API_SOURCES,
  AWS_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
  AWS_SPEECH_FULL_API_OPERATION_COUNT,
  awsSpeechCredentialStatuses,
  awsSpeechProviderManifest,
  createAwsSdkSpeechClient,
  createAwsSpeechVoiceProvider,
  type AwsPollySynthesizeCommandInput,
  type AwsPollySynthesizeCommandOutput,
  type AwsSdkCommandClient,
  type AwsTranscribeStreamingCommandInput,
  type AwsTranscribeStreamingCommandOutput,
  type AwsTranscribeStreamingResponseEvent,
} from "../../../src/voice/aws-speech/index.js";

describe("@cognidesk/integrations/voice/aws-speech", () => {
  it("exports an official provider manifest for Amazon Transcribe and Polly STT/TTS", () => {
    expect(awsSpeechProviderManifest).toMatchObject({
      id: "voice.aws-speech",
      packageName: "@cognidesk/integrations",
      category: "voice",
      provider: "aws-speech",
      trustLevel: "official",
    });
    expect(awsSpeechProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["receive", "send", "media"]));
    expect(awsSpeechProviderManifest.limitations.join(" "))
      .toContain("background LLM is the Cognidesk Agent Model Set");
    expect(AWS_SPEECH_FULL_API_OPERATION_COUNT).toBe(58);
    expect(AWS_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT).toBe(AWS_SPEECH_FULL_API_OPERATION_COUNT);
    expect(awsSpeechProviderManifest.metadata?.generatedSpeechApi)
      .toMatchObject({
        operationCount: AWS_SPEECH_FULL_API_OPERATION_COUNT,
        functionCount: AWS_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
      });
    expect(awsSpeechProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        AWS_SPEECH_API_SOURCES.transcribeStreamingApi,
        AWS_SPEECH_API_SOURCES.transcribeStreamingSetup,
        AWS_SPEECH_API_SOURCES.pollySynthesizeSpeech,
      ]));
  });

  it("adapts structural AWS SDK command clients for Transcribe Streaming and Polly", async () => {
    const abortController = new AbortController();
    const transcribeStreamingClient: AwsSdkCommandClient<AwsTranscribeStreamingCommandOutput> = {
      send: vi.fn(async (command: unknown, options?: { abortSignal?: AbortSignal }) => {
        expect(command).toBeInstanceOf(FakeStartStreamTranscriptionCommand);
        expect(options?.abortSignal).toBe(abortController.signal);
        const input = (command as FakeStartStreamTranscriptionCommand).input;
        expect(input).toMatchObject({
          LanguageCode: "en-US",
          MediaEncoding: "pcm",
          MediaSampleRateHertz: 16000,
          VocabularyName: "support-vocabulary",
        });
        const audioEvents = [];
        for await (const event of input.AudioStream) audioEvents.push(event);
        expect(audioEvents).toEqual([{
          AudioEvent: {
            AudioChunk: new Uint8Array([1, 2, 3, 4]),
          },
        }]);
        return {
          LanguageCode: "en-US",
          TranscriptResultStream: transcriptEvents([
            transcriptResult("partial_1", "I need", true, 0, 0.3),
            transcriptResult("result_1", "I need my ticket status.", false, 0, 0.72),
            transcriptResult("result_2", "Please help.", false, 0.72, 1.25),
          ]),
        };
      }),
    };
    const pollyClient: AwsSdkCommandClient<AwsPollySynthesizeCommandOutput> = {
      send: vi.fn(async (command: unknown, options?: { abortSignal?: AbortSignal }) => {
        expect(command).toBeInstanceOf(FakeSynthesizeSpeechCommand);
        expect(options?.abortSignal).toBe(abortController.signal);
        expect((command as FakeSynthesizeSpeechCommand).input).toMatchObject({
          Text: "Your ticket is confirmed.",
          VoiceId: "Joanna",
          OutputFormat: "pcm",
          SampleRate: "16000",
          Engine: "neural",
        });
        return {
          AudioStream: new Uint8Array([9, 8, 7]),
          ContentType: "audio/pcm",
          RequestCharacters: 25,
        };
      }),
    };
    const client = createAwsSdkSpeechClient({
      transcribeStreamingClient,
      StartStreamTranscriptionCommand: FakeStartStreamTranscriptionCommand,
      pollyClient,
      SynthesizeSpeechCommand: FakeSynthesizeSpeechCommand,
    });

    await expect(client.transcribeSpeech({
      audio: new Uint8Array([1, 2, 3, 4]),
      sampleRate: 16000,
      languageCode: "en-US",
      vocabularyName: "support-vocabulary",
      signal: abortController.signal,
    })).resolves.toMatchObject({
      text: "I need my ticket status. Please help.",
      resultId: "result_2",
      resultIds: ["result_1", "result_2"],
      languageCode: "en-US",
      startedAtSeconds: 0,
      endedAtSeconds: 1.25,
      resultCount: 3,
    });
    const synthesis = await client.synthesizeSpeech({
      text: "Your ticket is confirmed.",
      voiceId: "Joanna",
      outputFormat: "pcm",
      engine: "neural",
      signal: abortController.signal,
    });

    expect(new Uint8Array(synthesis.audio as Uint8Array)).toEqual(new Uint8Array([9, 8, 7]));
    expect(synthesis).toMatchObject({
      contentType: "audio/pcm",
      requestCharacters: 25,
      outputFormat: "pcm",
    });
  });

  it("runs AWS STT and TTS through the Cognidesk speech voice provider", async () => {
    const provider = createAwsSpeechVoiceProvider({
      voiceId: "Joanna",
      minSpeechMs: 0,
      client: {
        async transcribeSpeech(input) {
          expect(input).toMatchObject({
            sampleRate: 24000,
            languageCode: "en-US",
          });
          return {
            text: "I need my ticket status.",
            resultId: "aws_result_1",
            languageCode: "en-US",
            startedAtSeconds: 0,
            endedAtSeconds: 0.25,
          };
        },
        async synthesizeSpeech(input) {
          expect(input).toMatchObject({
            text: "Your ticket is confirmed.",
            voiceId: "Joanna",
            outputFormat: "pcm",
            sampleRate: "16000",
          });
          return {
            audio: new Int16Array([1200, 1600]).buffer,
            contentType: "audio/pcm",
            outputFormat: "pcm",
          };
        },
      },
      languageCode: "en-US",
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
        itemId: "aws_result_1",
        transcriptionSource: "amazon-transcribe",
      }),
      expect.objectContaining({
        kind: "server_event",
        event: expect.objectContaining({
          type: "response.output_audio.delta",
          delta: expect.any(String),
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

  it("reports AWS Speech credential status from expected AWS credential names", () => {
    expect(awsSpeechCredentialStatuses({})).toEqual([
      expect.objectContaining({ requirementId: "aws-access-key-id", state: "missing" }),
      expect.objectContaining({ requirementId: "aws-secret-access-key", state: "missing" }),
      expect.objectContaining({ requirementId: "aws-region", state: "missing" }),
      expect.objectContaining({ requirementId: "aws-session-token", state: "not-required" }),
    ]);
    expect(awsSpeechCredentialStatuses({
      accessKeyId: "configured",
      secretAccessKey: "configured",
      region: "eu-central-1",
      sessionToken: "configured",
    })).toEqual([
      expect.objectContaining({ requirementId: "aws-access-key-id", state: "configured" }),
      expect.objectContaining({ requirementId: "aws-secret-access-key", state: "configured" }),
      expect.objectContaining({ requirementId: "aws-region", state: "configured" }),
      expect.objectContaining({ requirementId: "aws-session-token", state: "configured" }),
    ]);
  });

  it("passes provider conformance for configured AWS Speech STT and TTS", async () => {
    const result = await runProviderConformance({
      manifest: awsSpeechProviderManifest,
      channels: [{
        id: "voice",
        channel: "voice",
        providerPackageIds: [awsSpeechProviderManifest.id],
        enabledCapabilities: ["receive", "send", "media"],
      }],
      credentialStatuses: awsSpeechCredentialStatuses({
        accessKeyId: "configured",
        secretAccessKey: "configured",
        region: "eu-central-1",
      }),
    });

    expect(result.status).toBe("passed");
  });
});

class FakeStartStreamTranscriptionCommand {
  constructor(readonly input: AwsTranscribeStreamingCommandInput) {}
}

class FakeSynthesizeSpeechCommand {
  constructor(readonly input: AwsPollySynthesizeCommandInput) {}
}

async function* transcriptEvents(events: AwsTranscribeStreamingResponseEvent[]) {
  for (const event of events) yield event;
}

function transcriptResult(
  resultId: string,
  transcript: string,
  isPartial: boolean,
  startTime: number,
  endTime: number,
): AwsTranscribeStreamingResponseEvent {
  return {
    TranscriptEvent: {
      Transcript: {
        Results: [{
          Alternatives: [{ Transcript: transcript }],
          EndTime: endTime,
          IsPartial: isPartial,
          ResultId: resultId,
          StartTime: startTime,
        }],
      },
    },
  };
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
      provider: "aws-speech",
    },
    events: [],
    createdAt: "2026-05-25T00:00:00.000Z",
    updatedAt: "2026-05-25T00:00:00.000Z",
    status: "pending",
    lastAckSequence: 0,
  };
}
