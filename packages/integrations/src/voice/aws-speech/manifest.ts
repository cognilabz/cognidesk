import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import { AWS_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT } from "./full-api-client.generated.js";
import {
  AWS_SPEECH_FULL_API_OPERATION_COUNT,
  AWS_SPEECH_FULL_API_SPEC_VERSION,
} from "./full-api-operations.generated.js";
import { AWS_SPEECH_API_SOURCES } from "./contracts.js";

export const awsSpeechProviderManifest = defineProviderPackage({
  id: "voice.aws-speech",
  name: "AWS Speech",
  packageName: "@cognidesk/integrations",
  provider: "aws-speech",
  category: "voice",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "Implements Amazon Transcribe Streaming speech-to-text and Amazon Polly SynthesizeSpeech text-to-speech for Cognidesk STT/TTS voice pipelines.",
      "Generated operation inventory and caller interfaces cover the official AWS Transcribe Streaming, Transcribe, and Polly Smithy API models for SDK-user-owned execution.",
      "AWS supplies transcripts and synthesized audio only; Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, response generation, and durable transcript boundary.",
      "The built-in Cognidesk speech adapter executes only Transcribe Streaming and Polly SynthesizeSpeech through injected AWS SDK clients; broader generated operations require an SDK-user-owned caller and AWS account policy.",
    ],
    evidence: [
      { label: "Amazon Transcribe StartStreamTranscription API", url: AWS_SPEECH_API_SOURCES.transcribeStreamingApi },
      { label: "Amazon Transcribe streaming setup", url: AWS_SPEECH_API_SOURCES.transcribeStreamingSetup },
      { label: "AWS SDK for JavaScript Transcribe Streaming client", url: AWS_SPEECH_API_SOURCES.transcribeSdk },
      { label: "Amazon Polly SynthesizeSpeech API", url: AWS_SPEECH_API_SOURCES.pollySynthesizeSpeech },
      { label: "Amazon Polly API reference", url: AWS_SPEECH_API_SOURCES.pollyApiReference },
      { label: "AWS SDK for JavaScript Polly client", url: AWS_SPEECH_API_SOURCES.pollySdk },
    ],
  },
  credentialRequirements: [
    {
      id: "aws-access-key-id",
      label: "AWS access key ID",
      description: "Server-side AWS access key ID scoped by the SDK user for Amazon Transcribe Streaming and Amazon Polly calls.",
      scopes: ["transcribe:StartStreamTranscription", "polly:SynthesizeSpeech"],
      required: true,
      metadata: {
        scopeKind: "provider-permission-labels",
        privilegeGuidance: "These strings are AWS IAM action names, not OAuth scopes.",
      },
    },
    {
      id: "aws-secret-access-key",
      label: "AWS secret access key",
      description: "Server-side AWS secret access key used by the SDK user's AWS client credential provider.",
      required: true,
    },
    {
      id: "aws-region",
      label: "AWS Region",
      description: "SDK-user-selected AWS Region for Amazon Transcribe Streaming and Amazon Polly requests.",
      required: true,
    },
    {
      id: "aws-session-token",
      label: "AWS session token",
      description: "Optional server-side AWS session token when the SDK user uses temporary credentials.",
      required: false,
    },
  ],
  capabilities: [
    {
      capability: "receive",
      label: "Transcribe speech",
      description: "Transcribes customer PCM voice input with Amazon Transcribe Streaming.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "awsTranscribeTranscript", label: "Amazon Transcribe Transcript" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "send",
      label: "Synthesize speech",
      description: "Synthesizes Cognidesk assistant text with Amazon Polly.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "awsPollySynthesis", label: "Amazon Polly Synthesis" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
    },
    {
      capability: "media",
      label: "Speech audio media",
      description: "Exchanges buffered PCM input and synthesized Polly audio for Cognidesk voice sessions.",
      audiences: ["customer-facing", "internal-support"],
      providerObjects: [
        { kind: "voiceTranscript", label: "Voice Transcript" },
        { kind: "voiceAudio", label: "Voice Audio" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
  ],
  privacyNotes: [
    "Customer audio is sent to Amazon Transcribe for transcription, and assistant response text is sent to Amazon Polly for synthesis.",
    "AWS credentials remain server-side and are never issued to browsers by this package.",
  ],
  limitations: [
    "This package implements AWS STT/TTS for Cognidesk speech pipelines through injected AWS SDK clients; it does not own AWS credential resolution, IAM roles, VPC endpoints, or account policy.",
    "The background LLM is the Cognidesk Agent Model Set configured through @cognidesk/model, not Amazon Transcribe or Amazon Polly.",
    "Consent, recording, retention, region selection, private networking, custom vocabularies, lexicons, and AWS account policy remain SDK-user configuration.",
    "Amazon Polly PCM output is requested at 16 kHz by default because Polly documents PCM sample rates of 8000 and 16000 Hz; the adapter resamples PCM output to the Cognidesk voice protocol sample rate before sending browser audio deltas.",
  ],
  metadata: {
    channelCoverage: {
      speechToText: "typed-transcribe-streaming-sdk-adapter",
      textToSpeech: "typed-polly-synthesize-speech-sdk-adapter",
      browserVoiceProtocol: "sdk-owned-cognidesk-voice-websocket",
      backgroundModelProvider: "sdk-owned-agent-model-set",
      fullAwsTranscribeApi: "not-covered",
      fullAmazonPollyApi: "not-covered",
      telephony: "not-covered",
    },
    generatedSpeechApi: {
      operationCount: AWS_SPEECH_FULL_API_OPERATION_COUNT,
      functionCount: AWS_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
      apiVersion: AWS_SPEECH_FULL_API_SPEC_VERSION,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
