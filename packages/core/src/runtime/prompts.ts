import { z } from "zod";
import type { CompiledJourney } from "../definition.js";
import type { ConversationRecord, StorageAdapter } from "../storage.js";
import type { RuntimeEvent } from "../types.js";
import type { GuardResult } from "../types.js";
import {
  getPathValue,
  hasUsableValue,
  isStructuredGuardDenial,
  isRecord,
} from "./context.js";
import {
  createFieldGroupPromptId,
  createFieldConfirmationPromptId,
  createFieldPromptId,
  createGuardPromptId,
  createToolConfirmationPromptId,
  isFieldRequired,
} from "./journey-state.js";
import type { RuntimeEventEmitter } from "./types.js";

export async function emitGuardDenial(args: {
  storage: StorageAdapter;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state?: CompiledJourney["states"][number];
  result: GuardResult;
  emit: RuntimeEventEmitter;
}) {
  if (!isStructuredGuardDenial(args.result)) return;

  await args.emit({
    conversationId: args.conversation.id,
    type: "journey.guard.denied",
    data: {
      journeyId: args.journey.id,
      ...(args.state ? { stateId: args.state.id } : {}),
      code: args.result.code,
      ...(args.result.message ? { message: args.result.message } : {}),
      ...(args.result.metadata ? { metadata: args.result.metadata } : {}),
    },
  });

  if (!args.result.prompt) return;
  const promptId = createGuardPromptId(args.journey.id, args.state?.id, args.result.code);
  const existing = await args.storage.listEvents({ conversationId: args.conversation.id });
  const hasOpenPrompt = existing.some((event) => (
    event.type === "ui.prompted" && event.data.promptId === promptId
  )) && !existing.some((event) => (
    event.type === "ui.submitted" && event.data.promptId === promptId
  ));
  if (hasOpenPrompt) return;

  await args.emit({
    conversationId: args.conversation.id,
    type: "ui.prompted",
    data: {
      promptId,
      widgetKind: args.result.prompt.widget.kind,
      input: args.result.prompt.input,
    },
  });
}

export async function emitFieldPrompts(args: {
  storage: StorageAdapter;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  emit: RuntimeEventEmitter;
}) {
  const missingFields = args.state.collected.filter((field) => (
    isFieldRequired(field, args.context) && !hasUsableValue(getPathValue(args.context, field.path))
  ));
  if (missingFields.length === 0) return 0;
  const existing = await args.storage.listEvents({ conversationId: args.conversation.id });
  if (missingFields.length > 1) {
    const promptId = createFieldGroupPromptId(args.journey.id, args.state.id);
    const hasOpenPrompt = existing.some((event) => (
      event.type === "ui.prompted" && event.data.promptId === promptId
    )) && !existing.some((event) => (
      event.type === "ui.submitted" && event.data.promptId === promptId
    ));
    if (hasOpenPrompt) return 0;
    await args.emit({
      conversationId: args.conversation.id,
      type: "ui.prompted",
      data: {
        promptId,
        widgetKind: "form",
        input: {
          title: "Missing details",
          fields: missingFields.map(formFieldFromCollectedField),
        },
      },
    });
    return 1;
  }
  let prompted = 0;
  for (const field of missingFields) {
    const promptId = createFieldPromptId(args.journey.id, args.state.id, field.path);
    const hasOpenPrompt = existing.some((event) => (
      event.type === "ui.prompted" && event.data.promptId === promptId
    )) && !existing.some((event) => (
      event.type === "ui.submitted" && event.data.promptId === promptId
    ));
    if (hasOpenPrompt) continue;
    await args.emit({
      conversationId: args.conversation.id,
      type: "ui.prompted",
      data: {
        promptId,
        widgetKind: field.widget?.kind ?? "text-input",
        input: field.widgetInput ?? {
          label: field.prompt ?? field.path,
        },
      },
    });
    prompted += 1;
  }
  return prompted;
}

function formFieldFromCollectedField(field: CompiledJourney["states"][number]["collected"][number]) {
  const input = isRecord(field.widgetInput) ? field.widgetInput : {};
  const widgetKind = field.widget?.kind;
  return {
    path: field.path,
    label: typeof input.label === "string" ? input.label : field.prompt ?? field.path,
    ...(typeof input.description === "string" ? { description: input.description } : {}),
    type: widgetKind === "date-picker" ? "date" : widgetKind === "choice" ? "choice" : "text",
    required: field.required,
    ...(typeof input.placeholder === "string" ? { placeholder: input.placeholder } : {}),
    ...(typeof input.min === "string" ? { min: input.min } : {}),
    ...(typeof input.max === "string" ? { max: input.max } : {}),
    ...(Array.isArray(input.options) ? { options: input.options } : {}),
  };
}

export async function emitFieldConfirmationPrompts(args: {
  storage: StorageAdapter;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  emit: RuntimeEventEmitter;
}) {
  const confirmableFields = args.state.collected.filter((field) => (
    field.confirm && hasUsableValue(getPathValue(args.context, field.path))
  ));
  if (confirmableFields.length === 0) return 0;
  const existing = await args.storage.listEvents({ conversationId: args.conversation.id });
  let prompted = 0;
  for (const field of confirmableFields) {
    const promptId = createFieldConfirmationPromptId(args.journey.id, args.state.id, field.path);
    const hasConfirmedSubmission = existing.some((event) => isConfirmedSubmission(event, promptId));
    if (hasConfirmedSubmission) continue;
    const hasOpenPrompt = isPromptOpen(existing, promptId);
    if (hasOpenPrompt) continue;
    const policy = typeof field.confirm === "object" ? field.confirm : {};
    const value = getPathValue(args.context, field.path);
    await args.emit({
      conversationId: args.conversation.id,
      type: "ui.prompted",
      data: {
        promptId,
        widgetKind: policy.widget?.kind ?? "confirmation",
        input: {
          title: policy.message ?? `Confirm ${field.path}`,
          message: policy.reason ?? policy.message ?? `Please confirm ${field.path}: ${String(value)}.`,
          confirmLabel: "Confirm",
          cancelLabel: "Edit",
        },
      },
    });
    prompted += 1;
  }
  return prompted;
}

const confirmedWidgetOutputSchema = z.object({ confirmed: z.literal(true) });

function isConfirmedSubmission(event: RuntimeEvent, promptId: string) {
  return event.type === "ui.submitted"
    && event.data.promptId === promptId
    && confirmedWidgetOutputSchema.safeParse(event.data.output).success;
}

function isPromptOpen(events: RuntimeEvent[], promptId: string) {
  let latestPromptOffset = 0;
  let latestSubmissionOffset = 0;
  for (const event of events) {
    if (event.type === "ui.prompted" && event.data.promptId === promptId) latestPromptOffset = event.offset;
    if (event.type === "ui.submitted" && event.data.promptId === promptId) latestSubmissionOffset = event.offset;
  }
  return latestPromptOffset > latestSubmissionOffset;
}

export async function emitConfirmationPrompts(args: {
  storage: StorageAdapter;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  emit: RuntimeEventEmitter;
}) {
  const confirmableToolRuns = args.state.toolRuns.filter((toolRun) => (
    toolRun.actionType === "transition" && toolRun.confirm
  ));
  if (confirmableToolRuns.length === 0) return 0;
  const existing = await args.storage.listEvents({ conversationId: args.conversation.id });
  let prompted = 0;
  for (const toolRun of confirmableToolRuns) {
    const promptId = createToolConfirmationPromptId(args.journey.id, args.state.id, toolRun.tool.name);
    const hasOpenPrompt = existing.some((event) => (
      event.type === "ui.prompted" && event.data.promptId === promptId
    )) && !existing.some((event) => (
      event.type === "ui.submitted" && event.data.promptId === promptId
    ));
    if (hasOpenPrompt) continue;
    await args.emit({
      conversationId: args.conversation.id,
      type: "ui.prompted",
      data: {
        promptId,
        widgetKind: toolRun.confirm?.widget?.kind ?? "confirmation",
        input: {
          title: toolRun.confirm?.message ?? `Confirm ${toolRun.tool.name}`,
          message: toolRun.confirm?.reason ?? toolRun.confirm?.message ?? `Confirm ${toolRun.tool.name}.`,
          confirmLabel: "Confirm",
          cancelLabel: "Cancel",
        },
      },
    });
    prompted += 1;
  }
  return prompted;
}
