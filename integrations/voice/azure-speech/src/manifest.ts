import { defineIntegration } from "@cognidesk/integration-kit";
import type { ProviderManifestInput } from "@cognidesk/integration-kit";

export const azureSpeechManifestInput = {
  id: "voice.azure-speech",
  name: "Azure AI Speech",
  packageName: "@cognidesk/voice-azure-speech",
  provider: "azure-speech",
  category: "voice",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "Implements Azure AI Speech speech-to-text and text-to-speech for Cognidesk STT/TTS voice pipelines.",
      "Uses the official Microsoft Cognitive Services Speech SDK for JavaScript.",
      "Azure Speech supplies transcripts and synthesized PCM audio while Cognidesk owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary.",
      "Does not implement the full Azure AI Speech SDK, avatar/video APIs, telephony carrier setup, or Azure account policy.",
    ],
    evidence: [
      { label: "Azure Speech SDK for JavaScript", url: "https://github.com/microsoft/cognitive-services-speech-sdk-js" },
      { label: "Azure AI Speech SDK documentation", url: "https://learn.microsoft.com/azure/ai-services/speech-service/speech-sdk" },
    ],
  },
  credentialRequirements: [
    {
      id: "azure-speech-key",
      label: "Azure Speech resource key",
      description: "Server-side Azure AI Speech resource key used for speech-to-text and text-to-speech SDK calls.",
      required: true,
    },
    {
      id: "azure-speech-region",
      label: "Azure Speech region",
      description: "Azure region for the Speech resource, such as eastus or westeurope.",
      required: true,
    },
  ],
  capabilities: [
    {
      capability: "receive",
      label: "Transcribe speech",
      description: "Transcribes customer PCM voice input with Azure AI Speech.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "azureSpeechTranscript", label: "Azure Speech Transcript" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "send",
      label: "Synthesize speech",
      description: "Synthesizes Cognidesk assistant text with Azure AI Speech.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "azureSpeechSynthesis", label: "Azure Speech Synthesis" }],
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
  operations: [
    {
      alias: "voice.session.start",
      capability: "receive",
      providerObject: "voiceSession",
      requiresCredential: true,
      exposesSensitiveData: true,
      providerOperation: "SpeechRecognizer.recognizeOnceAsync",
    },
    {
      alias: "voice.turn.finalize",
      capability: "receive",
      providerObject: "voiceTurn",
      requiresCredential: true,
      exposesSensitiveData: true,
      providerOperation: "SpeechRecognizer.recognizeOnceAsync",
    },
    {
      alias: "voice.speak",
      capability: "send",
      providerObject: "voiceTurn",
      requiresCredential: true,
      sideEffect: true,
      externallyVisible: true,
      providerOperation: "SpeechSynthesizer.speakTextAsync",
    },
  ],
  privacyNotes: [
    "Customer audio is sent to Azure Speech for transcription, and assistant response text is sent to Azure Speech for synthesis.",
    "Azure Speech credentials remain server-side and are never issued to browsers by this package.",
  ],
  limitations: [
    "This package adapts buffered Cognidesk voice turns through the Speech SDK; it does not expose continuous recognizer sessions as Cognidesk operations.",
    "The background LLM is the Cognidesk Agent Model Set configured through @cognidesk/model, not Azure Speech.",
    "Consent, recording, retention, region selection, private networking, and Azure account policy remain SDK-user configuration.",
  ],
  metadata: {
    integrationName: "Azure AI Speech Integration",
    integrationPackageName: "@cognidesk/voice-azure-speech",
    integrationEntryPoints: {
      manifest: "@cognidesk/voice-azure-speech/manifest",
      runtime: "@cognidesk/voice-azure-speech/runtime",
    },
    channelCoverage: {
      speechToText: "typed-speech-sdk-recognize-once",
      textToSpeech: "typed-speech-sdk-speak-text",
      browserVoiceProtocol: "sdk-owned-cognidesk-voice-websocket",
      backgroundModelProvider: "sdk-owned-agent-model-set",
      fullAzureSpeechSdk: "raw-client-only",
      telephony: "not-covered",
    },
    implementation: {
      strategy: "official-sdk",
      sdkPackages: ["microsoft-cognitiveservices-speech-sdk"],
      adapterCoverage: [
        "SpeechRecognizer.recognizeOnceAsync",
        "SpeechSynthesizer.speakTextAsync",
      ],
      rawClientEscapeHatch: true,
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} satisfies ProviderManifestInput;

export const azureSpeechIntegration = defineIntegration({
  manifest: azureSpeechManifestInput,
  operations: {
    "voice.session.start": async (input: unknown) => input,
    "voice.turn.finalize": async (input: unknown) => input,
    "voice.speak": async (input: unknown) => input,
  } as never,
});

export const azureSpeechProviderManifest = azureSpeechIntegration.manifest;
