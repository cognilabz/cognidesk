import { z } from "zod";
import { builtInWidgets } from "../../builtins.js";
import type { ConversationRecord } from "../../storage.js";
import type { RuntimeEvent, WidgetDefinition } from "../../types.js";
import { isRecord, setPathValue } from "../context.js";
import {
  extractWidgetFieldValue,
  findJourneyStates,
  mergeActiveStates,
  parseFieldGroupPromptId,
  parseFieldConfirmationPromptId,
  parseFieldPromptId,
  parseToolConfirmationPromptId,
  resolveWidgetPromptState,
} from "../journey-state.js";
import {
  enterState,
  exitState,
  saveStateMachineProgress,
} from "./state-lifecycle.js";
import type { StateInteractionDeps } from "./types.js";

type PromptedEvent = Extract<RuntimeEvent, { type: "ui.prompted" }>;

const builtInWidgetsByKind = new Map<string, WidgetDefinition>(
  Object.values(builtInWidgets).map((widget) => [widget.kind, widget]),
);

export async function validateWidgetSubmission(args: StateInteractionDeps & {
  conversation: ConversationRecord;
  promptId: string;
  widgetKind: string;
  output: unknown;
}) {
  const events = await args.storage.listEvents({ conversationId: args.conversation.id });
  const prompt = findLatestOpenPrompt(events, args.promptId);
  if (!prompt) {
    throw new Error(`Widget prompt '${args.promptId}' is not open.`);
  }
  if (prompt.data.widgetKind !== args.widgetKind) {
    throw new Error(`Widget prompt '${args.promptId}' expects widget '${prompt.data.widgetKind}', got '${args.widgetKind}'.`);
  }

  const snapshot = await args.storage.getSnapshot(args.conversation.id);
  const widget = resolveExpectedWidget(args, snapshot, args.promptId, prompt.data.widgetKind);
  if (!widget) return { output: args.output };
  const parsed = widget.output.safeParse(args.output);
  if (!parsed.success) {
    throw new Error(`Widget output for prompt '${args.promptId}' is invalid: ${parsed.error.message}`);
  }
  return { output: parsed.data };
}

export async function processWidgetSubmission(args: StateInteractionDeps & {
  conversation: ConversationRecord;
  promptId: string;
  output: unknown;
}) {
  if (!args.agent) return;
  const snapshot = await args.storage.getSnapshot(args.conversation.id);
  const journey = snapshot?.activeJourneyId
    ? args.agent.journeys.find((candidate) => candidate.id === snapshot.activeJourneyId)
    : undefined;
  if (!journey || journey.kind !== "stateMachine") return;
  const stateById = new Map(journey.states.map((state) => [state.id, state]));
  const state = resolveWidgetPromptState(journey, snapshot, args.promptId);
  if (!state) return;
  const context = isRecord(snapshot?.journeyContext) ? structuredClone(snapshot.journeyContext) : {};
  const siblingActiveStates = findJourneyStates(
    journey,
    (snapshot?.activeStateIds ?? []).filter((stateId) => stateId !== state.id),
  );
  const fieldPrompt = parseFieldPromptId(args.promptId);
  const fieldGroupPrompt = parseFieldGroupPromptId(args.promptId);
  const fieldConfirmationPrompt = parseFieldConfirmationPromptId(args.promptId);
  const fieldGroupTarget = fieldGroupPrompt && fieldGroupPrompt.journeyId === journey.id && fieldGroupPrompt.stateId === state.id
    ? fieldGroupPrompt
    : null;
  const fieldPromptTarget = fieldPrompt && fieldPrompt.journeyId === journey.id && fieldPrompt.stateId === state.id
    ? fieldPrompt
    : null;
  const fieldConfirmationTarget = fieldConfirmationPrompt
    && fieldConfirmationPrompt.journeyId === journey.id
    && fieldConfirmationPrompt.stateId === state.id
    ? fieldConfirmationPrompt
    : null;
  if (fieldGroupTarget) {
    const values = z.object({ values: z.record(z.string(), z.unknown()) }).safeParse(args.output);
    if (!values.success) return;
    for (const field of state.collected) {
      if (field.path in values.data.values) {
        setPathValue(context, field.path, values.data.values[field.path]);
      }
    }
    const branchStates = await args.advanceStateMachine({
      journey,
      conversation: args.conversation,
      stateById,
      state,
      context,
      emit: args.emit,
    });
    await saveStateMachineProgress({
      ...args,
      previousSnapshot: snapshot,
      journey,
      activeStates: mergeActiveStates(siblingActiveStates, branchStates),
      context,
    });
    return;
  }

  if (fieldPromptTarget || fieldConfirmationTarget) {
    const target = fieldPromptTarget ?? fieldConfirmationTarget;
    if (!target) return;
    const field = state.collected.find((candidate) => candidate.path === target.path);
    if (!field) return;
    if (fieldPromptTarget) {
      setPathValue(context, field.path, extractWidgetFieldValue(args.output));
    } else {
      const confirmed = z.object({ confirmed: z.boolean() }).safeParse(args.output);
      if (!confirmed.success || !confirmed.data.confirmed) return;
    }
    const branchStates = await args.advanceStateMachine({
      journey,
      conversation: args.conversation,
      stateById,
      state,
      context,
      emit: args.emit,
    });
    await saveStateMachineProgress({
      ...args,
      previousSnapshot: snapshot,
      journey,
      activeStates: mergeActiveStates(siblingActiveStates, branchStates),
      context,
    });
    return;
  }

  const confirmed = z.object({ confirmed: z.boolean() }).safeParse(args.output);
  if (!confirmed.success) return;
  if (!confirmed.data.confirmed) {
    const events = await args.storage.listEvents({ conversationId: args.conversation.id });
    const previousPrompt = [...events].reverse().find((event): event is PromptedEvent => (
      event.type === "ui.prompted" && event.data.promptId === args.promptId
    ));
    if (previousPrompt) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "ui.prompted",
        data: previousPrompt.data,
      });
    }
    return;
  }
  const toolTargetId = await args.runStateToolRuns({
    journey,
    conversation: args.conversation,
    state,
    context,
    actionType: "transition",
    confirmedPromptId: args.promptId,
    emit: args.emit,
  });
  const latestConversation = await args.requireConversationRecord(args.conversation.id);
  if (latestConversation.lifecycle !== "active") return;
  const next = toolTargetId
    ? { targetId: toolTargetId }
    : await args.selectTransition({
        journey,
        conversation: args.conversation,
        state,
        context,
        emit: args.emit,
      });
  const nextState = next ? stateById.get(next.targetId) : null;
  const branchStates = nextState ? [nextState] : [state];
  const activeStates = mergeActiveStates(siblingActiveStates, branchStates);
  if (nextState) {
    await exitState({ ...args, journey, state, context });
    const lifecycleAfterExit = await args.requireConversationRecord(args.conversation.id);
    if (lifecycleAfterExit.lifecycle !== "active") return;
    await enterState({ ...args, journey, state: nextState, context });
  }
  await saveStateMachineProgress({
    ...args,
    previousSnapshot: snapshot,
    journey,
    activeStates,
    context,
  });
}

function findLatestOpenPrompt(events: RuntimeEvent[], promptId: string): PromptedEvent | null {
  let latestPrompt: PromptedEvent | null = null;
  let latestSubmissionOffset = 0;
  for (const event of events) {
    if (event.type === "ui.prompted" && event.data.promptId === promptId) latestPrompt = event;
    if (event.type === "ui.submitted" && event.data.promptId === promptId) latestSubmissionOffset = event.offset;
  }
  if (!latestPrompt || latestSubmissionOffset > latestPrompt.offset) return null;
  return latestPrompt;
}

function resolveExpectedWidget(
  args: StateInteractionDeps,
  snapshot: Awaited<ReturnType<StateInteractionDeps["storage"]["getSnapshot"]>>,
  promptId: string,
  widgetKind: string,
): WidgetDefinition | null {
  const stateWidget = resolveStatePromptWidget(args, snapshot, promptId);
  return stateWidget
    ?? args.agent?.widgets.find((widget) => widget.kind === widgetKind)
    ?? builtInWidgetsByKind.get(widgetKind)
    ?? null;
}

function resolveStatePromptWidget(
  args: StateInteractionDeps,
  snapshot: Awaited<ReturnType<StateInteractionDeps["storage"]["getSnapshot"]>>,
  promptId: string,
): WidgetDefinition | null {
  if (!args.agent) return null;
  const journey = snapshot?.activeJourneyId
    ? args.agent.journeys.find((candidate) => candidate.id === snapshot.activeJourneyId)
    : undefined;
  if (!journey || journey.kind !== "stateMachine") return null;
  const state = resolveWidgetPromptState(journey, snapshot, promptId);
  if (!state) return null;

  const fieldGroupPrompt = parseFieldGroupPromptId(promptId);
  if (fieldGroupPrompt && fieldGroupPrompt.journeyId === journey.id && fieldGroupPrompt.stateId === state.id) {
    return builtInWidgets.formWidget;
  }

  const fieldPrompt = parseFieldPromptId(promptId);
  if (fieldPrompt && fieldPrompt.journeyId === journey.id && fieldPrompt.stateId === state.id) {
    const field = state.collected.find((candidate) => candidate.path === fieldPrompt.path);
    return field?.widget ?? builtInWidgets.textInputWidget;
  }

  const fieldConfirmationPrompt = parseFieldConfirmationPromptId(promptId);
  if (
    fieldConfirmationPrompt
    && fieldConfirmationPrompt.journeyId === journey.id
    && fieldConfirmationPrompt.stateId === state.id
  ) {
    const field = state.collected.find((candidate) => candidate.path === fieldConfirmationPrompt.path);
    return field && typeof field.confirm === "object" && field.confirm.widget
      ? field.confirm.widget
      : builtInWidgets.confirmationWidget;
  }

  const toolConfirmationPrompt = parseToolConfirmationPromptId(promptId);
  if (
    toolConfirmationPrompt
    && toolConfirmationPrompt.journeyId === journey.id
    && toolConfirmationPrompt.stateId === state.id
  ) {
    const toolRun = state.toolRuns.find((candidate) => candidate.tool.name === toolConfirmationPrompt.toolName);
    return toolRun?.confirm?.widget ?? builtInWidgets.confirmationWidget;
  }

  return null;
}
