import { z } from "zod";

export const StudioOperatorSurfaceSchema = z.enum([
  "conversation",
  "evidence",
  "artifacts",
  "sandbox_diff",
  "validation_runs",
  "approvals",
]);
export type StudioOperatorSurface = z.infer<typeof StudioOperatorSurfaceSchema>;

export const StudioOperatorReasoningEffortSchema = z.enum(["none", "minimal", "low", "medium", "high", "xhigh"]);
export type StudioOperatorReasoningEffort = z.infer<typeof StudioOperatorReasoningEffortSchema>;

export const StudioOperatorSessionIdSchema = z.string().uuid();
export type StudioOperatorSessionId = z.infer<typeof StudioOperatorSessionIdSchema>;

export const StudioOperatorClientEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("session.start"),
    sessionId: StudioOperatorSessionIdSchema.optional(),
    targetId: z.string(),
    modelId: z.string().optional(),
    reasoningEffort: StudioOperatorReasoningEffortSchema.optional(),
    message: z.string().optional(),
  }),
  z.object({
    type: z.literal("turn.start"),
    sessionId: StudioOperatorSessionIdSchema,
    message: z.string(),
    modelId: z.string().optional(),
    reasoningEffort: StudioOperatorReasoningEffortSchema.optional(),
  }),
  z.object({
    type: z.literal("turn.interrupt"),
    sessionId: StudioOperatorSessionIdSchema,
  }),
  z.object({
    type: z.literal("approval.resolve"),
    sessionId: StudioOperatorSessionIdSchema,
    approvalId: z.string(),
    approved: z.boolean(),
    payload: z.unknown().optional(),
  }),
]);
export type StudioOperatorClientEvent = z.infer<typeof StudioOperatorClientEventSchema>;

export const StudioOperatorServerEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("session.ready"),
    sessionId: StudioOperatorSessionIdSchema,
    targetId: z.string(),
    modelId: z.string().optional(),
  }),
  z.object({
    type: z.literal("activity"),
    sessionId: StudioOperatorSessionIdSchema,
    message: z.string(),
    detail: z.string().optional(),
    category: z.string().optional(),
    input: z.unknown().optional(),
    output: z.unknown().optional(),
    surface: StudioOperatorSurfaceSchema.optional(),
  }),
  z.object({
    type: z.literal("assistant.delta"),
    sessionId: StudioOperatorSessionIdSchema,
    delta: z.string(),
  }),
  z.object({
    type: z.literal("artifact.upserted"),
    sessionId: StudioOperatorSessionIdSchema,
    artifact: z.record(z.string(), z.unknown()),
  }),
  z.object({
    type: z.literal("reasoning.summary"),
    sessionId: StudioOperatorSessionIdSchema,
    summary: z.string(),
  }),
  z.object({
    type: z.literal("tool.started"),
    sessionId: StudioOperatorSessionIdSchema,
    name: z.string(),
    input: z.unknown().optional(),
  }),
  z.object({
    type: z.literal("tool.completed"),
    sessionId: StudioOperatorSessionIdSchema,
    name: z.string(),
    output: z.unknown().optional(),
  }),
  z.object({
    type: z.literal("sandbox.diff.updated"),
    sessionId: StudioOperatorSessionIdSchema,
    summary: z.string(),
    files: z.array(z.object({
      path: z.string(),
      status: z.enum(["added", "modified", "deleted", "renamed"]),
    })),
  }),
  z.object({
    type: z.literal("validation.completed"),
    sessionId: StudioOperatorSessionIdSchema,
    commandId: z.string(),
    exitCode: z.number().int(),
    output: z.string(),
  }),
  z.object({
    type: z.literal("approval.required"),
    sessionId: StudioOperatorSessionIdSchema,
    approvalId: z.string(),
    action: z.enum(["publish_dashboard", "create_pr", "grant_credentials", "update_configuration"]),
    title: z.string(),
    payload: z.unknown(),
  }),
  z.object({
    type: z.literal("turn.completed"),
    sessionId: StudioOperatorSessionIdSchema,
  }),
  z.object({
    type: z.literal("error"),
    sessionId: StudioOperatorSessionIdSchema.optional(),
    message: z.string(),
  }),
]);
export type StudioOperatorServerEvent = z.infer<typeof StudioOperatorServerEventSchema>;
