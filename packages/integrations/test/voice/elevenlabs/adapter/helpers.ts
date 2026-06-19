import type { VoiceSocketSession } from "@cognidesk/voice-websocket";

export { describe, expect, it, vi } from "vitest";
export { runProviderConformance } from "@cognidesk/test-harness";
export type { VoiceProviderEvent, VoiceSocketSession } from "@cognidesk/voice-websocket";
export {
  ELEVENLABS_API_FAMILIES,
  ELEVENLABS_API_SPEC_SOURCES,
  ELEVENLABS_FULL_API_GENERATED_FUNCTION_COUNT,
  ELEVENLABS_FULL_API_OPERATION_COUNT,
  ELEVENLABS_FULL_API_PATH_COUNT,
  createElevenLabsSpeechVoiceProvider,
  createElevenLabsVoiceClient,
  createElevenLabsVoiceLiveChecks,
  elevenLabsVoiceCredentialStatuses,
  elevenLabsVoiceProviderManifest,
} from "../../../../src/voice/elevenlabs/index.js";

export function fakeVoiceSession(): VoiceSocketSession {
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
      provider: "elevenlabs",
    },
    events: [],
    createdAt: "2026-05-25T00:00:00.000Z",
    updatedAt: "2026-05-25T00:00:00.000Z",
    status: "pending",
    lastAckSequence: 0,
  };
}
