import type { OperatorEvent } from "../types";

export function operatorEventSessionId(event: OperatorEvent) {
  return "sessionId" in event && typeof event.sessionId === "string" ? event.sessionId : null;
}

export function shouldApplyOperatorEvent(
  event: OperatorEvent,
  currentSessionId: string | null,
  activeTurnSessionId: string | null,
) {
  const eventSessionId = operatorEventSessionId(event);
  if (!eventSessionId) return true;
  if (activeTurnSessionId && eventSessionId !== activeTurnSessionId) return false;
  if (currentSessionId && eventSessionId !== currentSessionId) return false;
  return true;
}
