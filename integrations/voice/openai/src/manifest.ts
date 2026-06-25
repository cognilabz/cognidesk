import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";
import type { ProviderManifestInput } from "@cognidesk/integration-kit";

export const OPENAI_REALTIME_V1_MODEL = "gpt-realtime-2";

export const openAIVoiceManifestInput = {
  id: "voice.openai",
  name: "OpenAI Realtime Voice",
  packageName: "@cognidesk/integration-voice-openai",
  provider: "openai",
  category: "voice",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "provider-api-subset",
    notes: [
      "Implements a server-side OpenAI Realtime voice adapter for Cognidesk browser voice sessions, including session updates, audio events, speech responses, and function-tool outputs.",
      "The generic send and handoff capabilities mean OpenAI Realtime audio response events and Cognidesk-approved Realtime function tools only; they do not mean outbound telephony, carrier handoff, or full OpenAI API coverage.",
      "Does not implement the full OpenAI API surface, client-side ephemeral session issuance, transcription-only sessions, model administration, file/vector-store APIs, Responses API breadth, or telephony provider operations.",
    ],
    evidence: [
      { label: "OpenAI Realtime and audio guide", url: "https://developers.openai.com/api/docs/guides/realtime" },
      { label: "OpenAI Realtime conversations guide", url: "https://developers.openai.com/api/docs/guides/realtime-conversations" },
      { label: "OpenAI Realtime client events reference", url: "https://developers.openai.com/api/reference/resources/realtime/client-events/" },
    ],
  },
  credentialRequirements: [
    {
      id: "openai-api-key",
      label: "OpenAI API key",
      description: "Server-side OpenAI credential used to create realtime voice sessions.",
      required: true,
      metadata: {
        scopeModel: "openai-project-api-key-permissions",
        minimumAccess: ["model-capabilities:request", "prompts:read-write-if-used"],
        projectScoped: true,
      },
    },
  ],
  capabilities: [
    {
      capability: "receive",
      label: "Receive realtime speech",
      description: "Receives customer speech and transcript events from an OpenAI Realtime session.",
      audiences: ["customer-facing"],
      providerObjects: [
        { kind: "openaiRealtimeSession", label: "OpenAI Realtime Session" },
        { kind: "voiceTranscript", label: "Voice Transcript" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "send",
      label: "Send realtime speech",
      description: "Creates assistant audio responses through OpenAI Realtime.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "openaiRealtimeSession", label: "OpenAI Realtime Session" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
    },
    {
      capability: "media",
      label: "Realtime audio media",
      description: "Exchanges live audio, audio transcript, and response lifecycle events with OpenAI Realtime.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "openaiRealtimeSession", label: "OpenAI Realtime Session" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "handoff",
      label: "Voice control tool calls",
      description: "Projects SDK-user-approved Cognidesk control tools into the realtime voice session.",
      audiences: ["customer-facing", "internal-support"],
      providerObjects: [{ kind: "openaiRealtimeToolCall", label: "OpenAI Realtime Tool Call" }],
      requiresCredential: true,
      sideEffect: true,
      changesWorkflow: true,
    },
  ],
  operations: [
    {
      alias: "voice.session.start",
      capability: "receive",
      providerObject: "voiceSession",
      requiresCredential: true,
      exposesSensitiveData: true,
      providerOperation: "OpenAIRealtimeWS.create + OpenAIRealtimeWS.send(session.update)",
    },
    {
      alias: "voice.turn.finalize",
      capability: "receive",
      providerObject: "voiceTurn",
      requiresCredential: true,
      exposesSensitiveData: true,
      providerOperation: "OpenAIRealtimeWS.send(input_audio_buffer.commit)",
    },
    {
      alias: "voice.speak",
      capability: "send",
      providerObject: "voiceTurn",
      requiresCredential: true,
      sideEffect: true,
      externallyVisible: true,
      providerOperation: "OpenAIRealtimeWS.send(response.create)",
    },
  ],
  privacyNotes: [
    "Live audio, transcripts, instructions, and projected tool schemas are sent to OpenAI Realtime from the server.",
    "OpenAI credentials remain server-side and are never issued to the browser by this package.",
  ],
  limitations: [
    `This package currently supports only ${OPENAI_REALTIME_V1_MODEL}.`,
    "Outbound call initiation, telephony numbers, consent, recording, and retention are supplied by the SDK user's channel/provider configuration.",
  ],
  metadata: {
    integrationName: "OpenAI Realtime Voice Integration",
    integrationPackageName: "@cognidesk/integration-voice-openai",
    integrationEntryPoints: {
      manifest: "@cognidesk/integration-voice-openai/manifest",
      runtime: "@cognidesk/integration-voice-openai/runtime",
    },
    channelCoverage: {
      realtimeAudio: "typed-session-events",
      realtimeTranscript: "typed-selected",
      realtimeToolCalls: "typed-projected",
      telephony: "not-covered",
      outboundCalling: "not-covered",
      ephemeralSessionIssuance: "not-covered",
      transcriptionOnlySessions: "not-covered",
    },
    implementation: {
      strategy: "official-sdk",
      sdkPackage: "openai",
      sdkPackages: ["openai"],
      verifiedVersion: "6.44.0",
      verifiedAt: "2026-06-25",
      adapterCoverage: [
        "OpenAIRealtimeWS.create",
        "session.update",
        "input_audio_buffer.commit",
        "response.create",
      ],
      rawClientEscapeHatch: true,
    },
    rawClient: {
      option: "rawClient",
      export: "getRawClient",
      coverage: "upstream-sdk",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} satisfies ProviderManifestInput;

export const openAIVoiceProviderManifest = defineIntegrationProviderPackage(openAIVoiceManifestInput);
