import type { ConversationLifecycle } from "./events.js";

export interface RuntimeSnapshot {
  conversationId: string;
  lifecycle: ConversationLifecycle;
  activeJourneyId?: string;
  activeStateIds: string[];
  journeyContext?: unknown;
  journeyContexts?: JourneyContextRecord[];
  journeySummaries?: JourneySummary[];
  compactionSummary?: unknown;
  definitionHash?: string;
  updatedAt: string;
}

export interface JourneySummary {
  journeyId: string;
  kind: "stateMachine" | "delegation";
  summary: string;
  completedAt: string;
  stateId?: string;
  reason?: string;
}

export interface JourneyContextRecord {
  journeyId: string;
  context: unknown;
  updatedAt: string;
  stateId?: string;
}
