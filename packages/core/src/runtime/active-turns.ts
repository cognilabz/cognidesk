import { randomUUID } from "node:crypto";
import type { CompiledAgent } from "../definition.js";
import type { ConversationRecord, StorageAdapter } from "../storage.js";
import type { RuntimeEvent } from "../types.js";
import { AbortError } from "./errors.js";
import { abortErrorFromSignal } from "./cancellation.js";
import type { ActiveTurn, HandleUserMessageResult, RuntimeEventEmitter } from "./types.js";

export async function beginUserTurn(args: {
  activeTurns: Map<string, ActiveTurn>;
  conversationId: string;
  agent: CompiledAgent;
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}): Promise<ActiveTurn> {
  const previous = args.activeTurns.get(args.conversationId);
  const shouldInterrupt = args.agent.behavior?.interruptOnNewMessage !== false;
  let interruptedEvent: RuntimeEvent | undefined;
  if (previous && shouldInterrupt) {
    previous.interruptedByNewMessage = true;
    previous.controller.abort(new AbortError("interrupted_by_new_message"));
    previous.abortEvent ??= args.emit({
      conversationId: args.conversationId,
      type: "message.aborted",
      data: { reason: "interrupted_by_new_message" },
    });
    interruptedEvent = await previous.abortEvent;
  }

  const controller = new AbortController();
  const abortFromParent = () => controller.abort(args.signal ? abortErrorFromSignal(args.signal) : new AbortError("aborted"));
  if (args.signal?.aborted) abortFromParent();
  else args.signal?.addEventListener("abort", abortFromParent, { once: true });

  const turn: ActiveTurn = {
    id: randomUUID(),
    conversationId: args.conversationId,
    controller,
    interruptedByNewMessage: false,
    ...(interruptedEvent ? { interruptedEvent } : {}),
    cleanup: () => args.signal?.removeEventListener("abort", abortFromParent),
  };
  args.activeTurns.set(args.conversationId, turn);
  return turn;
}

export function finishUserTurn(activeTurns: Map<string, ActiveTurn>, turn: ActiveTurn) {
  turn.cleanup();
  if (activeTurns.get(turn.conversationId)?.id === turn.id) {
    activeTurns.delete(turn.conversationId);
  }
}

export function throwIfTurnInterrupted(turn: ActiveTurn) {
  if (turn.interruptedByNewMessage) throw new AbortError("interrupted_by_new_message");
  if (turn.controller.signal.aborted) throw abortErrorFromSignal(turn.controller.signal);
}

export async function createAbortedTurnResult(args: {
  storage: StorageAdapter;
  conversation: ConversationRecord;
  turn: ActiveTurn;
  events: RuntimeEvent[];
}): Promise<HandleUserMessageResult> {
  const abortEvent = await args.turn.abortEvent;
  if (abortEvent && !args.events.some((event) => event.id === abortEvent.id)) {
    args.events.push(abortEvent);
  }
  const snapshot = await args.storage.getSnapshot(args.conversation.id) ?? {
    conversationId: args.conversation.id,
    lifecycle: args.conversation.lifecycle,
    activeStateIds: [],
    updatedAt: new Date().toISOString(),
  };
  return {
    conversation: args.conversation,
    snapshot,
    events: args.events,
    text: "",
    ...(snapshot.activeJourneyId ? { activeJourneyId: snapshot.activeJourneyId } : {}),
  };
}
