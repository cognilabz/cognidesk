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
const sessionId = "11111111-1111-4111-8111-111111111111";

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
    sessions.set(sessionId, session({ userId: "owner" }));

    await handleClientMessage(socket, claims({ userId: "owner" }), JSON.stringify({
      type: "turn.start",
      sessionId,
      message: "continue",
    }));

    expect(codex.startTurn).toHaveBeenCalledWith(expect.objectContaining({
      threadId: "thread-1",
      message: "continue",
    }));
    expect(sessions.get(sessionId)?.currentTurnId).toBe("next-turn");
  });

  it("blocks a non-owner from resuming or interrupting an in-memory session", async () => {
    sessions.set(sessionId, session({ userId: "owner", currentTurnId: "turn-1" }));

    await expect(handleClientMessage(socket, claims({ userId: "intruder" }), JSON.stringify({
      type: "turn.start",
      sessionId,
      message: "take over",
    }))).rejects.toThrow("Operator session access denied");

    await expect(handleClientMessage(socket, claims({ userId: "intruder" }), JSON.stringify({
      type: "turn.interrupt",
      sessionId,
    }))).rejects.toThrow("Operator session access denied");

    expect(codex.startTurn).not.toHaveBeenCalled();
    expect(codex.interruptTurn).not.toHaveBeenCalled();
  });

  it("lets an admin interrupt another user's in-memory session", async () => {
    sessions.set(sessionId, session({ userId: "owner", currentTurnId: "turn-1" }));

    await handleClientMessage(socket, claims({ userId: "admin", role: "admin" }), JSON.stringify({
      type: "turn.interrupt",
      sessionId,
    }));

    expect(codex.interruptTurn).toHaveBeenCalledWith("thread-1", "turn-1");
  });

  it("lets a caller with admin scope resume another user's in-memory session", async () => {
    sessions.set(sessionId, session({ userId: "owner" }));

    await handleClientMessage(socket, claims({
      userId: "scoped",
      permissions: ["admin:manage"],
    }), JSON.stringify({
      type: "turn.start",
      sessionId,
      message: "authorized takeover",
    }));

    expect(codex.startTurn).toHaveBeenCalledWith(expect.objectContaining({
      threadId: "thread-1",
      message: "authorized takeover",
    }));
  });

  it("lets the owning user reuse an existing session id when starting a session", async () => {
    sessions.set(sessionId, session({ userId: "owner", threadId: "old-thread" }));
    threadToSession.set("old-thread", sessionId);

    await handleClientMessage(socket, claims({ userId: "owner" }), JSON.stringify({
      type: "session.start",
      sessionId,
      targetId: "target-2",
      modelId: "gpt-5",
    }));

    expect(prepareSandbox).toHaveBeenCalledWith(sessionId);
    expect(codex.startThread).toHaveBeenCalledWith(expect.objectContaining({
      cwd: `/tmp/cognidesk-test/${sessionId}`,
      model: "gpt-5",
    }));
    expect(sessions.get(sessionId)).toEqual(expect.objectContaining({
      sessionId,
      targetId: "target-2",
      userId: "owner",
      threadId: "new-thread",
      modelId: "gpt-5",
    }));
    expect(threadToSession.get("new-thread")).toBe(sessionId);
  });

  it("blocks a non-owner from overwriting an existing session id", async () => {
    const existing = session({ userId: "owner", threadId: "old-thread" });
    sessions.set(sessionId, existing);
    threadToSession.set("old-thread", sessionId);

    await expect(handleClientMessage(socket, claims({ userId: "intruder" }), JSON.stringify({
      type: "session.start",
      sessionId,
      targetId: "target-2",
      message: "hijack",
    }))).rejects.toThrow("Operator session access denied");

    expect(prepareSandbox).not.toHaveBeenCalled();
    expect(codex.startThread).not.toHaveBeenCalled();
    expect(codex.startTurn).not.toHaveBeenCalled();
    expect(sessions.get(sessionId)).toBe(existing);
    expect(threadToSession.get("old-thread")).toBe(sessionId);
  });

  it("lets a caller with admin scope overwrite another user's existing session id", async () => {
    sessions.set(sessionId, session({ userId: "owner", threadId: "old-thread" }));

    await handleClientMessage(socket, claims({
      userId: "scoped",
      permissions: ["admin:manage"],
    }), JSON.stringify({
      type: "session.start",
      sessionId,
      targetId: "target-2",
    }));

    expect(codex.startThread).toHaveBeenCalled();
    expect(sessions.get(sessionId)).toEqual(expect.objectContaining({
      targetId: "target-2",
      userId: "scoped",
      threadId: "new-thread",
    }));
    expect(threadToSession.get("new-thread")).toBe(sessionId);
  });

  it("rejects path-like session ids before preparing a sandbox", async () => {
    await expect(handleClientMessage(socket, claims(), JSON.stringify({
      type: "session.start",
      sessionId: "../outside",
      targetId: "target-1",
    }))).rejects.toThrow();

    await expect(handleClientMessage(socket, claims(), JSON.stringify({
      type: "turn.start",
      sessionId: "../outside",
      message: "continue",
    }))).rejects.toThrow();

    expect(prepareSandbox).not.toHaveBeenCalled();
    expect(codex.startThread).not.toHaveBeenCalled();
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
    sessionId,
    targetId: "target-1",
    userId: "owner",
    sandboxPath: "/tmp/cognidesk-test",
    threadId: "thread-1",
    socket,
    ...overrides,
  };
}
