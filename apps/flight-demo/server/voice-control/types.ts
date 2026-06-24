import type {
  AgentModelSet,
  CognideskRuntime,
  CompiledAgent,
  RuntimeEvent,
} from "@cognidesk/core";
import type { FlightKnowledgeIndex } from "../knowledge-index.js";
import { flightTools } from "../agent/tools/flight-tools.js";

export type FlightToolName = Exclude<keyof typeof flightTools, "sendWhatsAppCustomerMessage">;
export type VoiceTurnIntent = "advance_journey" | "side_exchange" | "cancel_or_replace" | "correction" | "handoff";
export type VoiceBackgroundWorkStatus = "running" | "completed" | "failed" | "cancelled";

export interface FlightDemoVoiceControlInput {
  runtime: CognideskRuntime;
  agent: CompiledAgent;
  models: AgentModelSet;
  knowledgeIndex: FlightKnowledgeIndex;
}

export interface VoiceBackgroundWorkRecord {
  id: string;
  conversationId: string;
  channelSegmentId: string;
  connectionId?: string;
  intent: VoiceTurnIntent;
  targetJourneyId?: string;
  userTranscript: string;
  reason?: string;
  status: VoiceBackgroundWorkStatus;
  startedAt: string;
  updatedAt: string;
  resultText?: string;
  activeJourneyId?: string;
  error?: string;
  events: RuntimeEvent[];
  controller: AbortController;
  promise?: Promise<void>;
}
