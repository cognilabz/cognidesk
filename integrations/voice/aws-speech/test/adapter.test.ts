import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  awsSpeechCredentialStatuses,
  awsSpeechIntegration,
  awsSpeechProviderManifest,
  createAwsSdkSpeechClient,
  type AwsPollySynthesizeCommandInput,
  type AwsSdkCommandClient,
  type AwsTranscribeStreamingCommandInput,
} from "../src/index.js";

describe("@cognidesk/integration-voice-aws-speech", () => {
  it("declares SDK-backed voice adapter metadata and exact operation handlers", () => {
    expect(awsSpeechProviderManifest).toMatchObject({
      id: "voice.aws-speech",
      packageName: "@cognidesk/integration-voice-aws-speech",
      metadata: {
        integrationName: "AWS Speech Integration",
        integrationPackageName: "@cognidesk/integration-voice-aws-speech",
        integrationEntryPoints: {
          manifest: "@cognidesk/integration-voice-aws-speech/manifest",
          runtime: "@cognidesk/integration-voice-aws-speech/runtime",
        },
        implementation: {
          strategy: "official-sdk",
          sdkPackages: [
            "@aws-sdk/client-transcribe-streaming",
            "@aws-sdk/client-polly",
          ],
          rawClientEscapeHatch: true,
        },
      },
    });
    expect(assertIntegrationConformance(awsSpeechIntegration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
    });
  });

  it("adapts AWS SDK command clients for Transcribe Streaming and Polly", async () => {
    const transcribeStreamingClient: AwsSdkCommandClient<any> = {
      send: vi.fn(async (command: unknown) => {
        expect(command).toBeInstanceOf(FakeStartStreamTranscriptionCommand);
        const input = (command as FakeStartStreamTranscriptionCommand).input;
        expect(input).toMatchObject({
          LanguageCode: "en-US",
          MediaEncoding: "pcm",
          MediaSampleRateHertz: 16000,
        });
        return {
          TranscriptResultStream: transcriptEvents([{
            TranscriptEvent: {
              Transcript: {
                Results: [{
                  IsPartial: false,
                  ResultId: "result_1",
                  StartTime: 0,
                  EndTime: 0.5,
                  Alternatives: [{ Transcript: "Hello from AWS." }],
                }],
              },
            },
          }]),
        };
      }),
    };
    const pollyClient: AwsSdkCommandClient<any> = {
      send: vi.fn(async (command: unknown) => {
        expect(command).toBeInstanceOf(FakeSynthesizeSpeechCommand);
        expect((command as FakeSynthesizeSpeechCommand).input).toMatchObject({
          Text: "Reply",
          VoiceId: "Joanna",
          OutputFormat: "pcm",
        });
        return { AudioStream: new Uint8Array([1, 2, 3]), ContentType: "audio/pcm" };
      }),
    };
    const client = createAwsSdkSpeechClient({
      transcribeStreamingClient,
      StartStreamTranscriptionCommand: FakeStartStreamTranscriptionCommand,
      pollyClient,
      SynthesizeSpeechCommand: FakeSynthesizeSpeechCommand,
    });

    await expect(client.transcribeSpeech({
      audio: new Uint8Array([1, 2]),
      sampleRate: 16000,
      languageCode: "en-US",
    })).resolves.toMatchObject({ text: "Hello from AWS.", resultId: "result_1" });
    await expect(client.synthesizeSpeech({
      text: "Reply",
      voiceId: "Joanna",
      outputFormat: "pcm",
    })).resolves.toMatchObject({ contentType: "audio/pcm" });
  });

  it("reports credential readiness without constructing SDK clients", () => {
    expect(awsSpeechCredentialStatuses({})[0]).toMatchObject({ state: "missing" });
    expect(awsSpeechCredentialStatuses({
      accessKeyId: "key",
      secretAccessKey: "secret",
      region: "eu-central-1",
    })).toEqual(expect.arrayContaining([
      expect.objectContaining({ requirementId: "aws-region", state: "configured" }),
    ]));
  });
});

class FakeStartStreamTranscriptionCommand {
  constructor(readonly input: AwsTranscribeStreamingCommandInput) {}
}

class FakeSynthesizeSpeechCommand {
  constructor(readonly input: AwsPollySynthesizeCommandInput) {}
}

async function* transcriptEvents(events: any[]) {
  for (const event of events) yield event;
}
