import { z } from "zod";

export const conversationCompactionSummarySchema = z.object({
  summary: z.string(),
  stableFacts: z.array(z.string()),
  openQuestions: z.array(z.string()),
  activeCommitments: z.array(z.string()),
});

export type ConversationCompactionSummary = z.infer<typeof conversationCompactionSummarySchema>;

export const citationPostProcessingSchema = z.object({
  segments: z.array(z.object({
    text: z.string(),
    knowledgeIds: z.array(z.string()),
  })),
});

export const delegationCompletionSchema = z.object({
  complete: z.boolean(),
  reason: z.string().nullable(),
});

export const journeyMatchSchema = z.object({
  candidates: z.array(z.object({
    journeyId: z.string(),
    confidence: z.number(),
    reason: z.string(),
  })),
});

export const transitionMatchSchema = z.object({
  candidates: z.array(z.object({
    id: z.string(),
    confidence: z.number(),
    reason: z.string(),
  })),
});

export const stateExtractionSchema = z.object({
  values: z.object({}).catchall(z.any()),
});

const stateExtractionValueSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
]);

export function createStateExtractionSchema(paths: string[]) {
  return z.object({
    values: z.object(Object.fromEntries(paths.map((path) => [path, stateExtractionValueSchema]))),
  });
}
