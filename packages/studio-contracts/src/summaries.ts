import { z } from "zod";

export const StudioToolSummarySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  sideEffect: z.boolean(),
});
export type StudioToolSummary = z.infer<typeof StudioToolSummarySchema>;

export const StudioKnowledgeSummarySchema = z.object({
  name: z.string(),
});
export type StudioKnowledgeSummary = z.infer<typeof StudioKnowledgeSummarySchema>;

export const StudioWidgetSummarySchema = z.object({
  kind: z.string(),
});
export type StudioWidgetSummary = z.infer<typeof StudioWidgetSummarySchema>;
