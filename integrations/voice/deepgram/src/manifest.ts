import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const deepgramVoiceProviderManifest = defineIntegrationProviderPackage({
  id: "voice.deepgram",
  name: "Deepgram Voice",
  packageName: "@cognidesk/integration-voice-deepgram",
  provider: "deepgram",
  category: "voice",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "Implements normalized Cognidesk speech-to-text and text-to-speech operations with the official Deepgram SDK.",
      "Raw Deepgram SDK access is exposed as an escape hatch, but Cognidesk does not claim ownership of the full Deepgram provider API.",
      "Deepgram Voice Agent, Flux streaming sessions, account administration, telephony setup, self-hosted deployment management, and custom model administration remain outside this normalized adapter.",
    ],
    evidence: [
      { label: "Deepgram SDK package", url: "https://www.npmjs.com/package/@deepgram/sdk" },
      { label: "Deepgram prerecorded audio STT", url: "https://developers.deepgram.com/docs/pre-recorded-audio" },
      { label: "Deepgram Text-to-Speech REST", url: "https://developers.deepgram.com/docs/text-to-speech" },
    ],
  },
  credentialRequirements: [{
    id: "deepgram-api-key",
    label: "Deepgram API key",
    description: "Server-side Deepgram API key used by the official SDK for speech API requests.",
    required: true,
    metadata: {
      scopeKind: "provider-permission",
      minimumAccess: ["speech-to-text", "text-to-speech"],
    },
  }],
  capabilities: [
    {
      capability: "receive",
      label: "Transcribe speech",
      description: "Transcribes customer PCM/WAV voice input with Deepgram speech-to-text.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "deepgramTranscript", label: "Deepgram Transcript" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "send",
      label: "Synthesize speech",
      description: "Synthesizes Cognidesk assistant text with Deepgram text-to-speech.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "deepgramSpeechSynthesis", label: "Deepgram Speech Synthesis" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
    },
    {
      capability: "media",
      label: "Speech audio media",
      description: "Exchanges buffered PCM input and synthesized audio for Cognidesk voice sessions.",
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
      alias: "voice.turn.finalize",
      providerOperation: "transcribeAudio",
      capability: "receive",
      label: "Transcribe speech",
      providerObject: "voiceTranscript",
      audiences: ["customer-facing"],
      exposesSensitiveData: true,
    },
    {
      alias: "voice.speak",
      providerOperation: "synthesizeSpeech",
      capability: "send",
      label: "Synthesize speech",
      providerObject: "voiceAudio",
      audiences: ["customer-facing"],
      sideEffect: true,
      exposesSensitiveData: true,
    },
  ],
  privacyNotes: [
    "Customer audio is sent to Deepgram for transcription, and assistant response text is sent to Deepgram for synthesis.",
    "Deepgram API keys remain server-side and are never issued to browsers by this package.",
  ],
  limitations: [
    "This package implements SDK-backed STT/TTS for Cognidesk speech pipelines, not Deepgram Voice Agent or Flux websocket sessions.",
    "The background LLM is the Cognidesk Agent Model Set, not Deepgram.",
  ],
  metadata: {
    implementation: {
      strategy: "official-sdk",
      sdkPackage: "@deepgram/sdk",
      verifiedVersion: "5.4.0",
      verifiedAt: "2026-06-21",
    },
    rawClient: {
      export: "getRawClient",
      coverage: "upstream-sdk",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
