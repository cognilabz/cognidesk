import type { CompiledJourney } from "../../definition.js";
import type { ConversationRecord } from "../../storage.js";
import {
  getPathValue,
  hasUsableValue,
} from "../context.js";
import { isFieldRequired } from "../journey-state.js";
import type {
  RuntimeEmit,
  StateMachineDeps,
} from "./types.js";

export async function enterStateTree(args: StateMachineDeps & {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  stateById: Map<string, CompiledJourney["states"][number]>;
  state: CompiledJourney["states"][number] | undefined;
  context: Record<string, unknown>;
  emitSelf: boolean;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}): Promise<CompiledJourney["states"]> {
  if (!args.state) return [];
  if (args.emitSelf) {
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.state.entered",
      data: { journeyId: args.journey.id, stateId: args.state.id },
    });
  }
  await args.runStateActionRuns({
    ...args,
    state: args.state,
    actionType: "entry",
  });
  await args.runStateToolRuns({
    ...args,
    state: args.state,
    actionType: "entry",
  });
  const lifecycle = await args.requireConversationRecord(args.conversation.id);
  if (lifecycle.lifecycle !== "active") return [args.state];

  const children = args.journey.states.filter((state) => state.parentId === args.state?.id);
  if (children.length === 0) return [args.state];
  const childEntryStates = args.state.type === "parallel"
    ? children
    : args.state.initialStateId
      ? [args.stateById.get(args.state.initialStateId)].filter((state): state is CompiledJourney["states"][number] => Boolean(state))
      : [];
  const activeStates: CompiledJourney["states"] = [];
  for (const child of childEntryStates) {
    activeStates.push(...await enterStateTree({
      ...args,
      state: child,
      emitSelf: true,
    }));
  }
  return activeStates.length > 0 ? activeStates : [args.state];
}

export function stateRequirementsSatisfied(state: CompiledJourney["states"][number], context: Record<string, unknown>) {
  return state.collected
    .filter((field) => isFieldRequired(field, context))
    .every((field) => hasUsableValue(getPathValue(context, field.path)));
}
