import type { PromptTask } from "@cognidesk/core";

export const promptTasks = [
  "response",
  "journey-matcher",
  "transition-matcher",
  "delegation-completion",
  "extraction",
  "citation-post-processing",
  "compaction",
  "generated-preamble",
] as const satisfies readonly PromptTask[];

export const promptTemplateFields = {
  response: ["selectedJourneyId", "activeStateIds", "journeyContext", "tools", "structuredOutput"],
  "journey-matcher": ["latestUserMessage", "activeJourneyId", "conversationTranscript", "candidates", "structuredOutput"],
  "transition-matcher": ["journey", "state", "latestUserMessage", "currentContext", "candidates", "structuredOutput"],
  "delegation-completion": ["journey", "conversationTranscript", "structuredOutput"],
  extraction: ["journey", "state", "latestUserMessage", "currentContext", "fields", "stateInstructions", "structuredOutput"],
  "citation-post-processing": ["assistantAnswer", "knowledge", "structuredOutput"],
  compaction: ["instructions", "fromOffset", "toOffset", "events", "structuredOutput"],
  "generated-preamble": ["purpose", "maxWords", "history"],
} as const satisfies Record<PromptTask, readonly string[]>;

export type PromptTemplateMap = Record<PromptTask, string>;

export interface PromptResearchBasis {
  source: string;
  note: string;
}

export interface PromptProfileMetadata {
  slug: string;
  displayName: string;
  researchBasis: PromptResearchBasis[];
  taskNotes: Partial<Record<PromptTask, string>>;
}

export interface BundledPromptProfile {
  metadata: PromptProfileMetadata;
  templates: PromptTemplateMap;
}
