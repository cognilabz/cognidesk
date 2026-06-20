import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { WebSocket } from "ws";
import { codex, handleClientMessage, sessions, threadToSession } from "./sessions.js";
import type { OperatorSession, StudioClaims } from "./types.js";

const socket = { readyState: WebSocket.OPEN, send: vi.fn() } as unknown as WebSocket;

describe("operator runtime session authorization", () => {
  beforeEach(() => {
    sessions.clear();
    threadToSession.clear();
    vi.spyOn(codex, "startTurn").mockResolvedValue({ turn: { id: "next-turn" } });
    vi.spyOn(codex, "interruptTurn").mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("lets the owning user resume an in-memory session turn", async () => {
    sessions.set("session-1", session({ userId: "owner" }));

    await handleClientMessage(socket, claims({ userId: "owner" }), JSON.stringify({
      type: "turn.start",
      sessionId: "session-1",
      message: "continue",
    }));

    expect(codex.startTurn).toHaveBeenCalledWith(expect.objectContaining({
      threadId: "thread-1",
      message: "continue",
    }));
    expect(sessions.get("session-1")?.currentTurnId).toBe("next-turn");
  });

  it("blocks a non-owner from resuming or interrupting an in-memory session", async () => {
    sessions.set("session-1", session({ userId: "owner", currentTurnId: "turn-1" }));

    await expect(handleClientMessage(socket, claims({ userId: "intruder" }), JSON.stringify({
      type: "turn.start",
      sessionId: "session-1",
      message: "take over",
    }))).rejects.toThrow("Operator session access denied");

    await expect(handleClientMessage(socket, claims({ userId: "intruder" }), JSON.stringify({
      type: "turn.interrupt",
      sessionId: "session-1",
    }))).rejects.toThrow("Operator session access denied");

    expect(codex.startTurn).not.toHaveBeenCalled();
    expect(codex.interruptTurn).not.toHaveBeenCalled();
  });

  it("lets an admin interrupt another user's in-memory session", async () => {
    sessions.set("session-1", session({ userId: "owner", currentTurnId: "turn-1" }));

    await handleClientMessage(socket, claims({ userId: "admin", role: "admin" }), JSON.stringify({
      type: "turn.interrupt",
      sessionId: "session-1",
    }));

    expect(codex.interruptTurn).toHaveBeenCalledWith("thread-1", "turn-1");
  });

  it("lets a caller with admin scope resume another user's in-memory session", async () => {
    sessions.set("session-1", session({ userId: "owner" }));

    await handleClientMessage(socket, claims({
      userId: "scoped",
      permissions: ["admin:manage"],
    }), JSON.stringify({
      type: "turn.start",
      sessionId: "session-1",
      message: "authorized takeover",
    }));

    expect(codex.startTurn).toHaveBeenCalledWith(expect.objectContaining({
      threadId: "thread-1",
      message: "authorized takeover",
    }));
  });
});

function claims(overrides: Partial<StudioClaims> = {}): StudioClaims {
  return {
    userId: "owner",
    role: "operator",
    ...overrides,
  };
}

function session(overrides: Partial<OperatorSession> = {}): OperatorSession {
  return {
    sessionId: "session-1",
    targetId: "target-1",
    userId: "owner",
    sandboxPath: "/tmp/cognidesk-test",
    threadId: "thread-1",
    socket,
    ...overrides,
  };
}
