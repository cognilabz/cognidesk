import { z } from "zod";

export const conversationCompactionSummarySchema = z.object({
  summary: z.string(),
  stableFacts: z.array(z.string()).default([]),
  openQuestions: z.array(z.string()).default([]),
  activeCommitments: z.array(z.string()).default([]),
});

export type ConversationCompactionSummary = z.infer<typeof conversationCompactionSummarySchema>;

export const citationPostProcessingSchema = z.object({
  segments: z.array(z.object({
    text: z.string(),
    knowledgeIds: z.array(z.string()).default([]),
  })),
});

export const delegationCompletionSchema = z.object({
  complete: z.boolean(),
  reason: z.string().optional(),
});

export const journeyMatchSchema = z.object({
  candidates: z.array(z.object({
    journeyId: z.string(),
    confidence: z.number().optional(),
    reason: z.string().optional(),
  })).default([]),
});

export const transitionMatchSchema = z.object({
  candidates: z.array(z.object({
    id: z.string(),
    confidence: z.number().optional(),
    reason: z.string().optional(),
  })).default([]),
});

export const stateExtractionSchema = z.object({
  values: z.record(z.string(), z.unknown()).default({}),
});
