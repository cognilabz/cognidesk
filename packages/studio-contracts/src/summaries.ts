import { z } from "zod";

export const StudioToolSummarySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  sideEffect: z.boolean(),
});
export type StudioToolSummary = z.infer<typeof StudioToolSummarySchema>;

export const StudioKnowledgeSummarySchema = z.object({
  name: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  documentCount: z.number().int().nonnegative().optional(),
  documents: z.array(z.object({
    id: z.string(),
    name: z.string().optional(),
    title: z.string().optional(),
    metadata: z.record(z.string(), z.unknown()).optional(),
    content: z.string().optional(),
    contentSnippet: z.string().optional(),
  })).optional(),
});
export type StudioKnowledgeSummary = z.infer<typeof StudioKnowledgeSummarySchema>;

export const StudioWidgetSummarySchema = z.object({
  kind: z.string(),
});
export type StudioWidgetSummary = z.infer<typeof StudioWidgetSummarySchema>;
