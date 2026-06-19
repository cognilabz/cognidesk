import { defineProviderPackage } from "@cognidesk/core";

export const cognideskVoiceWebSocketProviderManifest = defineProviderPackage({
  id: "voice.websocket",
  name: "Cognidesk Voice WebSocket",
  packageName: "@cognidesk/voice-websocket",
  provider: "websocket",
  category: "voice",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "local-protocol",
    notes: [
      "Implements the Cognidesk browser voice WebSocket protocol, session token store, reconnect flow, runtime transcript bridge, and provider-session event bridge.",
      "Does not implement an external voice provider API, telephony carrier API, OpenAI API client, Twilio/Vonage call control, SIP stack, recording storage, or browser credential issuance.",
      "External provider media, telephony setup, consent, recording, retention, and routing policy are supplied by the selected VoiceProvider and SDK-user configuration.",
    ],
    evidence: [
      { label: "CONTEXT.md Voice Browser Protocol definition" },
      { label: "CONTEXT.md Voice WebSocket Adapter definition" },
      {
        label: "ADR-0063 Voice WebSocket Protocol",
        url: "https://github.com/cognilabz/cognidesk/blob/main/docs/adr/0063-use-a-cognidesk-voice-websocket-protocol.md",
      },
      {
        label: "ADR-0067 Node Voice WebSocket Adapter",
        url: "https://github.com/cognilabz/cognidesk/blob/main/docs/adr/0067-ship-a-node-voice-websocket-adapter.md",
      },
    ],
  },
  capabilities: [
    {
      capability: "receive",
      label: "Receive browser voice input",
      description: "Accepts live browser voice protocol events for a Cognidesk voice Channel Segment.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "voiceConnection", label: "Voice Connection" }],
    },
    {
      capability: "send",
      label: "Send browser voice output",
      description: "Streams assistant voice protocol events back to the browser client.",
      audiences: ["customer-facing"],
      providerObjects: [{ kind: "voiceConnection", label: "Voice Connection" }],
      sideEffect: true,
    },
    {
      capability: "media",
      label: "Voice media stream",
      description: "Carries audio, transcript, interruption, and acknowledgement events through the Cognidesk voice protocol.",
      audiences: ["customer-facing"],
      providerObjects: [
        { kind: "voiceConnection", label: "Voice Connection" },
        { kind: "voiceTranscript", label: "Voice Transcript" },
      ],
      exposesSensitiveData: true,
    },
    {
      capability: "thread",
      label: "Attach to conversation",
      description: "Maps a voice Channel Segment to a Cognidesk Conversation selected by SDK-user routing.",
      audiences: ["customer-facing", "internal-support"],
      providerObjects: [{ kind: "conversation", label: "Conversation" }],
    },
  ],
  privacyNotes: [
    "Browser audio and transcript events pass through the application-hosted Cognidesk Voice Browser Protocol.",
    "The package does not grant browser access to provider realtime credentials.",
  ],
  limitations: [
    "Provider realtime transport is supplied by a VoiceProvider implementation.",
    "Conversation routing, consent, recording, and retention behavior are configured by the SDK user.",
  ],
  metadata: {
    channelCoverage: {
      browserVoiceProtocol: "sdk-owned-local-protocol",
      audioStream: "typed-protocol",
      transcriptStream: "typed-protocol",
      reconnectSessionToken: "typed-protocol",
      providerRealtimeTransport: "not-covered",
      telephonyCarrier: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
