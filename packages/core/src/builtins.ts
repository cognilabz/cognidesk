import { z } from "zod";
import { tool, widget } from "./definition.js";

export const textInputWidget = widget("text-input", {
  input: z.object({
    label: z.string(),
    description: z.string().optional(),
    placeholder: z.string().optional(),
  }),
  output: z.object({
    value: z.string(),
  }),
});

export const choiceWidget = widget("choice", {
  input: z.object({
    label: z.string(),
    options: z.array(z.object({
      id: z.string(),
      label: z.string(),
      description: z.string().optional(),
    })),
  }),
  output: z.object({
    selectedId: z.string(),
  }),
});

export const confirmationWidget = widget("confirmation", {
  input: z.object({
    title: z.string(),
    message: z.string(),
    confirmLabel: z.string().optional(),
    cancelLabel: z.string().optional(),
  }),
  output: z.object({
    confirmed: z.boolean(),
  }),
});

export const datePickerWidget = widget("date-picker", {
  input: z.object({
    label: z.string(),
    min: z.string().optional(),
    max: z.string().optional(),
  }),
  output: z.object({
    value: z.string(),
  }),
});

export const formWidget = widget("form", {
  input: z.object({
    title: z.string(),
    fields: z.array(z.object({
      path: z.string(),
      label: z.string(),
      description: z.string().optional(),
      type: z.enum(["text", "email", "date", "number", "choice"]),
      required: z.boolean().default(true),
      placeholder: z.string().optional(),
      min: z.string().optional(),
      max: z.string().optional(),
      options: z.array(z.object({ id: z.string(), label: z.string() })).optional(),
    })),
  }),
  output: z.object({
    values: z.record(z.string(), z.unknown()),
  }),
});

export const endConversationTool = tool("cognidesk.endConversation", {
  description: "Close the current conversation.",
  input: z.object({
    reason: z.string().optional(),
  }),
  output: z.object({
    closed: z.literal(true),
  }),
  sideEffect: true,
  execute: async () => ({ closed: true as const }),
});

export const handoffTool = tool("cognidesk.handoff", {
  description: "Request an external handoff and pause assistant responses.",
  input: z.object({
    reason: z.string(),
    summary: z.string().optional(),
    payload: z.unknown().optional(),
  }),
  output: z.object({
    handoffRequested: z.literal(true),
  }),
  sideEffect: true,
  execute: async () => ({ handoffRequested: true as const }),
});

export const journeyContextViewerTool = tool("cognidesk.viewJourneyContext", {
  description: "View exact persisted Journey Context when explicitly exposed by developer policy.",
  input: z.object({
    journeyId: z.string(),
    fields: z.array(z.string()).optional(),
  }),
  output: z.object({
    journeyId: z.string(),
    context: z.unknown(),
  }),
  execute: async ({ input }) => ({
    journeyId: input.journeyId,
    context: {},
  }),
});

export const builtInWidgets = {
  textInputWidget,
  choiceWidget,
  confirmationWidget,
  datePickerWidget,
  formWidget,
};

export const builtInTools = {
  endConversationTool,
  handoffTool,
  journeyContextViewerTool,
};
