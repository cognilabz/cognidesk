import { randomUUID } from "node:crypto";
import type { WebSocket } from "ws";
import {
  StudioOperatorClientEventSchema,
  type StudioOperatorClientEvent,
} from "@cognidesk/studio-contracts";
import { CodexAppServerClient } from "../codex-client.js";
import { buildBaseInstructions, modelForCodex, prepareSandbox } from "./sandbox.js";
import { send } from "./transport.js";
import type { OperatorSession, StudioClaims } from "./types.js";

export const codex = new CodexAppServerClient();
export const sessions = new Map<string, OperatorSession>();
export const threadToSession = new Map<string, string>();

export async function handleClientMessage(socket: WebSocket, claims: StudioClaims, raw: string) {
  const value = JSON.parse(raw) as unknown;
  if (isStudioClaims(value)) return;
  const event = StudioOperatorClientEventSchema.parse(value);
  switch (event.type) {
    case "session.start":
      await startSession(socket, claims, event);
      break;
    case "turn.start":
      await startTurn(socket, claims, event);
      break;
    case "turn.interrupt":
      await interruptTurn(event.sessionId);
      break;
    case "approval.resolve":
      send(socket, {
        type: "activity",
        sessionId: event.sessionId,
        message: event.approved ? "Approval accepted." : "Approval rejected.",
        surface: "approvals",
      });
      break;
  }
}

async function startSession(
  socket: WebSocket,
  claims: StudioClaims,
  event: Extract<StudioOperatorClientEvent, { type: "session.start" }>,
) {
  const sessionId = event.sessionId ?? randomUUID();
  const sandboxPath = await prepareSandbox(sessionId);
  const model = modelForCodex(event.modelId);
  const thread = await codex.startThread({
    cwd: sandboxPath,
    baseInstructions: buildBaseInstructions(event.targetId, claims.sessionToken),
    ...(model ? { model } : {}),
  });
  const session: OperatorSession = {
    sessionId,
    targetId: event.targetId,
    userId: claims.userId,
    sandboxPath,
    threadId: thread.thread.id,
    socket,
    ...(event.modelId ? { modelId: event.modelId } : {}),
    ...(event.reasoningEffort ? { reasoningEffort: event.reasoningEffort } : {}),
  };
  sessions.set(sessionId, session);
  threadToSession.set(thread.thread.id, sessionId);
  send(socket, {
    type: "session.ready",
    sessionId,
    targetId: event.targetId,
    modelId: event.modelId,
  });
  if (event.message?.trim()) {
    const turn = await codex.startTurn({
      threadId: thread.thread.id,
      message: event.message,
      ...(model ? { model } : {}),
      ...(event.reasoningEffort ? { effort: event.reasoningEffort } : {}),
    });
    session.currentTurnId = turn.turn.id;
  }
}

async function startTurn(
  socket: WebSocket,
  claims: StudioClaims,
  event: Extract<StudioOperatorClientEvent, { type: "turn.start" }>,
) {
  let session = sessions.get(event.sessionId);
  if (!session) {
    await startSession(socket, claims, {
      type: "session.start",
      sessionId: event.sessionId,
      targetId: process.env.STUDIO_DEFAULT_TARGET_ID ?? "flight-demo-local",
      modelId: event.modelId,
      reasoningEffort: event.reasoningEffort,
    });
    session = sessions.get(event.sessionId);
  }
  if (!session) throw new Error("Operator session could not be started");
  session.socket = socket;
  const model = modelForCodex(event.modelId ?? session.modelId);
  if (event.modelId) session.modelId = event.modelId;
  if (event.reasoningEffort) session.reasoningEffort = event.reasoningEffort;
  const turn = await codex.startTurn({
    threadId: session.threadId,
    message: event.message,
    ...(model ? { model } : {}),
    ...(session.reasoningEffort ? { effort: session.reasoningEffort } : {}),
  });
  session.currentTurnId = turn.turn.id;
}

export async function interruptTurn(sessionId: string) {
  const session = sessions.get(sessionId);
  if (!session?.currentTurnId) return;
  await codex.interruptTurn(session.threadId, session.currentTurnId);
}

function isStudioClaims(value: unknown): value is { type: "studio.claims" } {
  return Boolean(value && typeof value === "object" && "type" in value && value.type === "studio.claims");
}
