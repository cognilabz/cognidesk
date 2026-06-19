import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";
import { OPENAI_REALTIME_V1_MODEL } from "./contracts.js";

export const openAIVoiceProviderManifest = defineProviderPackage({
  id: "voice.openai",
  name: "OpenAI Realtime Voice",
  packageName: "@cognidesk/integrations",
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
      "Telephony numbers, outbound calling, consent, recording, retention, and OpenAI credential distribution remain SDK-user/provider configuration outside this package.",
    ],
    evidence: [
      { label: "OpenAI Realtime and audio guide", url: "https://developers.openai.com/api/docs/guides/realtime" },
      { label: "OpenAI Realtime conversations guide", url: "https://developers.openai.com/api/docs/guides/realtime-conversations" },
      { label: "OpenAI Realtime client events reference", url: "https://developers.openai.com/api/reference/resources/realtime/client-events/" },
      { label: "OpenAI realtime models prompting guide", url: "https://developers.openai.com/api/docs/guides/realtime-models-prompting" },
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
  privacyNotes: [
    "Live audio, transcripts, instructions, and projected tool schemas are sent to OpenAI Realtime from the server.",
    "OpenAI credentials remain server-side and are never issued to the browser by this package.",
  ],
  limitations: [
    `This package currently supports only ${OPENAI_REALTIME_V1_MODEL}.`,
    "Outbound call initiation, telephony numbers, consent, recording, and retention are supplied by the SDK user's channel/provider configuration.",
  ],
  metadata: {
    channelCoverage: {
      realtimeAudio: "typed-session-events",
      realtimeTranscript: "typed-selected",
      realtimeToolCalls: "typed-projected",
      telephony: "not-covered",
      outboundCalling: "not-covered",
      ephemeralSessionIssuance: "not-covered",
      transcriptionOnlySessions: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
