import { z } from "zod";
import type { CompiledJourney } from "../definition.js";
import type { ConversationRecord } from "../storage.js";
import type {
  AgentModelSet,
  ConversationChannel,
  RuntimeSnapshot,
} from "../types.js";
import { createJourneyCompletion, createToolConfirmationPromptId } from "./journey-state.js";
import type { StateMachineTurnResult } from "./types.js";
import {
  resolveInitialJourneyContext,
  resolveJourneyEntryState,
} from "./state-machine/context.js";
import { enterStateTree, stateRequirementsSatisfied } from "./state-machine/entry.js";
import { applyStateExtraction } from "./state-machine/extraction.js";
import type {
  RuntimeEmit,
  StateMachineDeps,
} from "./state-machine/types.js";

export async function executeStateMachineTurn(args: StateMachineDeps & {
  journey: CompiledJourney;
  models: AgentModelSet;
  conversation: ConversationRecord;
  previousSnapshot: RuntimeSnapshot | null;
  userText: string;
  channel?: ConversationChannel;
  turn: unknown;
  app: unknown;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}): Promise<StateMachineTurnResult> {
  const stateById = new Map(args.journey.states.map((state) => [state.id, state]));
  const sameJourney = args.previousSnapshot?.activeJourneyId === args.journey.id;
  const context = await resolveInitialJourneyContext(args);
  const activeStates = sameJourney
    ? (args.previousSnapshot?.activeStateIds ?? [])
      .map((stateId) => stateById.get(stateId))
      .filter((state): state is CompiledJourney["states"][number] => Boolean(state))
    : args.journey.initialStateId
      ? await enterStateTree({
          ...args,
          stateById,
          state: await resolveJourneyEntryState({
            ...args,
            stateById,
            context,
          }),
          context,
          emitSelf: true,
        })
      : [];
  if (activeStates.length === 0) return { activeStateIds: [], journeyContext: context };

  const nextActiveStates: CompiledJourney["states"] = [];
  for (const state of activeStates) {
    const activeState = await applyStateExtraction({
      ...args,
      state,
      context,
    });
    nextActiveStates.push(...await advanceStateMachine({
      ...args,
      stateById,
      state: activeState,
      context,
      ...(args.channel ? { channel: args.channel } : {}),
    }));
  }

  const completed = createJourneyCompletion(args.journey.id, nextActiveStates);
  if (completed) {
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.completed",
      data: completed,
    });
  }

  return {
    activeStateIds: completed ? [] : nextActiveStates.map((state) => state.id),
    journeyContext: context,
    ...(args.channel ? { channel: args.channel } : {}),
    ...(completed ? { completed } : {}),
  };
}

export async function advanceStateMachine(args: StateMachineDeps & {
  journey: CompiledJourney;
  models?: AgentModelSet;
  conversation: ConversationRecord;
  stateById: Map<string, CompiledJourney["states"][number]>;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  userText?: string;
  channel?: ConversationChannel;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) {
  let state = args.state;
  const visited = new Set<string>();
  while (!visited.has(state.id)) {
    visited.add(state.id);
    const lifecycle = await args.requireConversationRecord(args.conversation.id);
    if (lifecycle.lifecycle !== "active") return [state];
    const voiceMode = args.channel === "voice";
    if (!stateRequirementsSatisfied(state, args.context)) {
      if (!voiceMode) await args.emitFieldPrompts({ ...args, state });
      return [state];
    }
    if (!voiceMode) {
      const fieldConfirmationCount = await args.emitFieldConfirmationPrompts({ ...args, state });
      if (fieldConfirmationCount > 0) return [state];
    }
    let confirmedPromptId: string | undefined;
    if (state.requiresVisit) {
      if (voiceMode) {
        confirmedPromptId = await resolveVoiceConfirmedPromptId({ ...args, state });
        if (hasConfirmableTransitionToolRun(state) && !confirmedPromptId) return [state];
      } else {
        const promptCount = await args.emitConfirmationPrompts({ ...args, state });
        if (promptCount > 0) return [state];
      }
    }

    await args.runStateActionRuns({ ...args, state, actionType: "transition" });
    const toolTargetId = await args.runStateToolRuns({
      ...args,
      state,
      actionType: "transition",
      ...(confirmedPromptId ? { confirmedPromptId } : {}),
    });
    const latestConversation = await args.requireConversationRecord(args.conversation.id);
    if (latestConversation.lifecycle !== "active") return [state];
    const transition = toolTargetId
      ? { targetId: toolTargetId }
      : await args.selectTransition({
          journey: args.journey,
          conversation: args.conversation,
          state,
          context: args.context,
          ...(args.models ? { models: args.models } : {}),
          ...(args.userText ? { userText: args.userText } : {}),
          ...(args.signal ? { signal: args.signal } : {}),
          emit: args.emit,
        });
    if (!transition) return [state];

    const nextState = args.stateById.get(transition.targetId);
    if (!nextState) return [state];
    await args.runStateActionRuns({ ...args, state, actionType: "exit" });
    await args.runStateToolRuns({ ...args, state, actionType: "exit" });
    const lifecycleAfterExit = await args.requireConversationRecord(args.conversation.id);
    if (lifecycleAfterExit.lifecycle !== "active") return [state];
    const enteredStates = await enterStateTree({
      ...args,
      state: nextState,
      emitSelf: true,
    });
    if (enteredStates.length !== 1) return enteredStates;
    state = enteredStates[0] ?? nextState;
  }
  return [state];
}

const voiceConfirmationSchema = z.object({
  confirmed: z.boolean(),
  confidence: z.number().min(0).max(1),
  reason: z.string(),
});

async function resolveVoiceConfirmedPromptId(args: StateMachineDeps & {
  journey: CompiledJourney;
  models?: AgentModelSet;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  userText?: string;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) {
  const confirmable = args.state.toolRuns.filter((toolRun) => (
    toolRun.actionType === "transition" && toolRun.confirm
  ));
  if (confirmable.length === 0) return undefined;
  if (!args.models || !args.userText?.trim()) return undefined;
  const toolRun = confirmable[0];
  if (!toolRun) return undefined;
  const output = await args.generateTextWithTrace({
    conversationId: args.conversation.id,
    model: args.models.matcher,
    input: {
      role: "matcher",
      promptTask: "transition-matcher",
      responseFormat: voiceConfirmationSchema,
      messages: [{
        role: "system",
        content: [
          "Decide whether the customer's latest voice utterance explicitly confirms the pending side-effect action.",
          "Return confirmed=true only for clear approval to proceed now.",
          "Concise affirmative replies such as yes, yes please, confirm it, or go ahead count as clear approval when they answer the described pending action.",
          "Return confirmed=false for questions, hesitation, corrections, missing details, or unrelated text.",
        ].join("\n"),
      }, {
        role: "user",
        content: JSON.stringify({
          journeyId: args.journey.id,
          stateId: args.state.id,
          toolName: toolRun.tool.name,
          confirmationMessage: toolRun.confirm?.message,
          confirmationReason: toolRun.confirm?.reason,
          journeyContext: args.context,
          latestUtterance: args.userText,
        }),
      }],
      ...(args.signal ? { signal: args.signal } : {}),
    },
  });
  const parsed = voiceConfirmationSchema.safeParse(output.structured);
  if (!parsed.success || !parsed.data.confirmed || parsed.data.confidence < 0.6) return undefined;
  return createToolConfirmationPromptId(args.journey.id, args.state.id, toolRun.tool.name);
}

function hasConfirmableTransitionToolRun(state: CompiledJourney["states"][number]) {
  return state.toolRuns.some((toolRun) => toolRun.actionType === "transition" && toolRun.confirm);
}
