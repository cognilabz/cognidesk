import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import { GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT } from "./full-api-client.generated.js";
import {
  GOOGLE_SPEECH_FULL_API_OPERATION_COUNT,
  GOOGLE_SPEECH_FULL_API_SPEC_VERSION,
} from "./full-api-operations.generated.js";

export const googleSpeechProviderManifest = defineProviderPackage({
  id: "voice.google-speech",
  name: "Google Cloud Speech",
  packageName: "@cognidesk/integrations",
  provider: "google-speech",
  category: "voice",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "Implements Google Cloud Speech-to-Text synchronous recognize and Cloud Text-to-Speech synchronous synthesize for Cognidesk STT/TTS voice pipelines.",
      "Generated operation inventory and caller interfaces cover the official Google Cloud Speech-to-Text and Text-to-Speech v1 Discovery documents.",
      "Google Cloud supplies transcripts and synthesized audio while Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary.",
      "Does not implement the full Google Cloud Speech SDKs, streaming recognizer sessions, long-running transcription, long audio synthesis, voice catalog administration, or Google Cloud IAM/project policy.",
    ],
    evidence: [
      { label: "Google Cloud Speech-to-Text speech.recognize REST API", url: "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/speech/recognize" },
      { label: "Google Cloud Speech-to-Text RecognitionConfig", url: "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig" },
      { label: "Google Cloud Text-to-Speech text.synthesize REST API", url: "https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize" },
      { label: "Google Cloud Text-to-Speech audio encodings", url: "https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1/AudioEncoding" },
      { label: "Google Cloud REST authentication", url: "https://docs.cloud.google.com/docs/authentication/rest" },
    ],
  },
  credentialRequirements: [
    {
      id: "google-cloud-access-token",
      label: "Google Cloud OAuth access token",
      description: "Server-side OAuth access token or token provider with the cloud-platform scope for Google Cloud Speech-to-Text and Text-to-Speech REST requests.",
      required: true,
    },
  ],
  capabilities: [
    {
      capability: "receive",
      label: "Transcribe speech",
      description: "Transcribes customer PCM voice input with Google Cloud Speech-to-Text.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "googleSpeechTranscript", label: "Google Speech Transcript" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "send",
      label: "Synthesize speech",
      description: "Synthesizes Cognidesk assistant text with Google Cloud Text-to-Speech.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "googleSpeechSynthesis", label: "Google Speech Synthesis" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
    },
    {
      capability: "media",
      label: "Speech audio media",
      description: "Exchanges buffered PCM input and synthesized 24 kHz PCM output for Cognidesk voice sessions.",
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
    "Customer audio is sent to Google Cloud Speech-to-Text for transcription, and assistant response text is sent to Google Cloud Text-to-Speech for synthesis.",
    "Google Cloud credentials remain server-side and are never issued to browsers by this package.",
  ],
  limitations: [
    "This package implements synchronous REST STT and REST TTS for Cognidesk speech pipelines, not full streaming Google Cloud Speech SDK sessions.",
    "The background LLM is the Cognidesk Agent Model Set configured through @cognidesk/model, not Google Cloud Speech.",
    "Consent, recording, retention, quota project selection, region/data-residency controls, private networking, and Google Cloud IAM policy remain SDK-user configuration.",
  ],
  metadata: {
    channelCoverage: {
      speechToText: "typed-synchronous-recognize-rest",
      textToSpeech: "typed-synchronous-synthesize-rest",
      browserVoiceProtocol: "sdk-owned-cognidesk-voice-websocket",
      backgroundModelProvider: "sdk-owned-agent-model-set",
      fullGoogleCloudSpeechSdk: "not-covered",
      streamingRecognize: "not-covered",
      longRunningRecognize: "not-covered",
      longAudioSynthesis: "not-covered",
    },
    generatedSpeechApi: {
      operationCount: GOOGLE_SPEECH_FULL_API_OPERATION_COUNT,
      functionCount: GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
      apiVersion: GOOGLE_SPEECH_FULL_API_SPEC_VERSION,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
