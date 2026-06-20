import { describe, expect, it } from "vitest";
import { operatorEventSessionId, shouldApplyOperatorEvent } from "./event-routing";

const sessionA = "11111111-1111-4111-8111-111111111111";
const sessionB = "22222222-2222-4222-8222-222222222222";

describe("operator event routing", () => {
  it("applies events for the selected in-flight session", () => {
    expect(shouldApplyOperatorEvent({
      type: "assistant.delta",
      sessionId: sessionA,
      delta: "hello",
    }, sessionA, sessionA)).toBe(true);
  });

  it("drops events from a different in-flight session", () => {
    expect(shouldApplyOperatorEvent({
      type: "tool.completed",
      sessionId: sessionA,
      name: "fetch",
    }, sessionB, sessionB)).toBe(false);
  });

  it("drops stale session events after the visible session changes", () => {
    expect(shouldApplyOperatorEvent({
      type: "turn.completed",
      sessionId: sessionA,
    }, sessionB, null)).toBe(false);
  });

  it("allows socket errors without a session id", () => {
    const event = { type: "error" as const, message: "socket closed" };

    expect(operatorEventSessionId(event)).toBeNull();
    expect(shouldApplyOperatorEvent(event, sessionB, sessionB)).toBe(true);
  });
});
