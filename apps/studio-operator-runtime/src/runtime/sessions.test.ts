import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { WebSocket } from "ws";
import { prepareSandbox } from "./sandbox.js";
import { codex, handleClientMessage, sessions, threadToSession } from "./sessions.js";
import type { OperatorSession, StudioClaims } from "./types.js";

vi.mock("./sandbox.js", () => {
  return {
    buildBaseInstructions: vi.fn((targetId: string, sessionToken?: string) => `${targetId}:${sessionToken ?? ""}`),
    modelForCodex: vi.fn((modelId?: string) => modelId === "codex-default" ? undefined : modelId),
    prepareSandbox: vi.fn(async (sessionId: string) => `/tmp/cognidesk-test/${sessionId}`),
  };
});

const socket = { readyState: WebSocket.OPEN, send: vi.fn() } as unknown as WebSocket;

describe("operator runtime session authorization", () => {
  beforeEach(() => {
    sessions.clear();
    threadToSession.clear();
    vi.mocked(prepareSandbox).mockClear();
    vi.spyOn(codex, "startThread").mockResolvedValue({ thread: { id: "new-thread" }, model: "codex-default" });
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

  it("lets the owning user reuse an existing session id when starting a session", async () => {
    sessions.set("session-1", session({ userId: "owner", threadId: "old-thread" }));
    threadToSession.set("old-thread", "session-1");

    await handleClientMessage(socket, claims({ userId: "owner" }), JSON.stringify({
      type: "session.start",
      sessionId: "session-1",
      targetId: "target-2",
      modelId: "gpt-5",
    }));

    expect(prepareSandbox).toHaveBeenCalledWith("session-1");
    expect(codex.startThread).toHaveBeenCalledWith(expect.objectContaining({
      cwd: "/tmp/cognidesk-test/session-1",
      model: "gpt-5",
    }));
    expect(sessions.get("session-1")).toEqual(expect.objectContaining({
      sessionId: "session-1",
      targetId: "target-2",
      userId: "owner",
      threadId: "new-thread",
      modelId: "gpt-5",
    }));
    expect(threadToSession.get("new-thread")).toBe("session-1");
  });

  it("blocks a non-owner from overwriting an existing session id", async () => {
    const existing = session({ userId: "owner", threadId: "old-thread" });
    sessions.set("session-1", existing);
    threadToSession.set("old-thread", "session-1");

    await expect(handleClientMessage(socket, claims({ userId: "intruder" }), JSON.stringify({
      type: "session.start",
      sessionId: "session-1",
      targetId: "target-2",
      message: "hijack",
    }))).rejects.toThrow("Operator session access denied");

    expect(prepareSandbox).not.toHaveBeenCalled();
    expect(codex.startThread).not.toHaveBeenCalled();
    expect(codex.startTurn).not.toHaveBeenCalled();
    expect(sessions.get("session-1")).toBe(existing);
    expect(threadToSession.get("old-thread")).toBe("session-1");
  });

  it("lets a caller with admin scope overwrite another user's existing session id", async () => {
    sessions.set("session-1", session({ userId: "owner", threadId: "old-thread" }));

    await handleClientMessage(socket, claims({
      userId: "scoped",
      permissions: ["admin:manage"],
    }), JSON.stringify({
      type: "session.start",
      sessionId: "session-1",
      targetId: "target-2",
    }));

    expect(codex.startThread).toHaveBeenCalled();
    expect(sessions.get("session-1")).toEqual(expect.objectContaining({
      targetId: "target-2",
      userId: "scoped",
      threadId: "new-thread",
    }));
    expect(threadToSession.get("new-thread")).toBe("session-1");
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
