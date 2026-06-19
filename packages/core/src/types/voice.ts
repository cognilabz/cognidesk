import type { ConversationRecord, RuntimeEventInput } from "../storage.js";
import type { RuntimeEvent } from "./events.js";
export type { ConversationChannel } from "./providers.js";

export type VoiceConnectionStatus = "starting" | "connected" | "ended" | "failed";

export type VoiceSpeaker = "user" | "assistant";

export interface VoiceIceServer {
  urls: string | string[];
  username?: string;
  credential?: string;
}

export interface VoiceRecordingPolicy {
  enabled?: boolean;
  requireConsent?: boolean;
  mode?: "input" | "both";
  metadata?: Record<string, unknown>;
}

export interface VoiceSelection {
  provider: string;
  voice: string;
}

export interface VoiceModelSet {
  provider: string;
  model: string;
  voice?: string;
  settings?: Record<string, unknown>;
}

export interface VoiceProfile {
  instructions?: string;
  modelSet?: VoiceModelSet;
  recording?: VoiceRecordingPolicy;
  metadata?: Record<string, unknown>;
}

export interface VoiceChannelSegment {
  id: string;
  conversationId: string;
  channel: "voice";
  startedAt: string;
  endedAt?: string;
}

export interface VoiceConnection {
  id: string;
  channelSegmentId: string;
  status: VoiceConnectionStatus;
  adapter: string;
  provider?: string;
  providerSessionId?: string;
  expiresAt?: string;
}

export interface VoiceSocketMetadata {
  url: string;
  token: string;
  expiresAt: string;
  protocol: "cognidesk.voice.v1";
}

export interface VoiceStartClientHints {
  userAgent?: string;
  locale?: string;
  metadata?: Record<string, unknown>;
}

export interface StartVoiceConversationInput<TConversationContext = unknown> {
  id?: string;
  agentId: string;
  context: TConversationContext;
  client?: VoiceStartClientHints;
  app?: unknown;
}

export interface StartVoiceSegmentInput {
  conversationId: string;
  client?: VoiceStartClientHints;
  app?: unknown;
}

export interface StartVoiceResult {
  conversation: ConversationRecord;
  channelSegment: VoiceChannelSegment;
  connection: VoiceConnection;
  socket?: VoiceSocketMetadata;
  events: RuntimeEvent[];
}

export interface CommitVoiceTranscriptInput {
  conversationId: string;
  channelSegmentId: string;
  speaker: VoiceSpeaker;
  text: string;
  recordingReferenceId?: string;
  startedAtMs?: number;
  endedAtMs?: number;
  transcriptionSource?: string;
  metadata?: Record<string, unknown>;
}

export interface CommitVoiceTranscriptReferenceInput extends CommitVoiceTranscriptInput {
  messageEventId: string;
}

export interface CommitVoiceTranscriptResult {
  message: RuntimeEvent;
  event: RuntimeEvent;
  events: RuntimeEvent[];
}

export interface RecordVoiceInterruptionInput {
  conversationId: string;
  channelSegmentId: string;
  connectionId?: string;
  interruptedMessageId?: string;
  source?: "userSpeech" | "adapter" | "provider";
  reason?: string;
  recordingReferenceId?: string;
  offsetMs?: number;
}

export type VoiceRuntimeEventInput = Extract<
  RuntimeEventInput,
  { type: `voice.${string}` }
>;
