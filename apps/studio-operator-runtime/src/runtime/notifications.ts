import type { CodexNotification } from "../codex-client.js";
import {
  activityMessage,
  isToolCompleted,
  isToolStarted,
  isUsefulActivity,
  notificationName,
  parseDiffFiles,
} from "./activity.js";
import { sessions, threadToSession } from "./sessions.js";
import { getThreadId, send } from "./transport.js";

export function handleCodexNotification(notification: CodexNotification) {
  const threadId = getThreadId(notification.params);
  if (!threadId) return;
  const sessionId = threadToSession.get(threadId);
  if (!sessionId) return;
  const session = sessions.get(sessionId);
  if (!session) return;
  const socket = session.socket;

  if (notification.method === "turn/started" && typeof notification.params.turn === "object" && notification.params.turn && "id" in notification.params.turn && typeof notification.params.turn.id === "string") {
    session.currentTurnId = notification.params.turn.id;
    send(socket, {
      type: "activity",
      sessionId,
      message: "Started the operator turn.",
      category: "turn",
      surface: "conversation",
    });
  } else if (notification.method === "item/agentMessage/delta") {
    send(socket, {
      type: "assistant.delta",
      sessionId,
      delta: String(notification.params.delta ?? ""),
    });
  } else if (notification.method === "turn/diff/updated") {
    const diff = String(notification.params.diff ?? "");
    send(socket, {
      type: "sandbox.diff.updated",
      sessionId,
      summary: diff ? "Sandbox diff updated." : "Sandbox diff is empty.",
      files: parseDiffFiles(diff),
    });
  } else if (notification.method === "turn/plan/updated") {
    const explanation = notification.params.explanation;
    if (typeof explanation === "string" && explanation.trim()) {
      send(socket, {
        type: "reasoning.summary",
        sessionId,
        summary: explanation,
      });
    }
    send(socket, {
      type: "artifact.upserted",
      sessionId,
      artifact: {
        type: "plan",
        title: "Operator plan",
        explanation: notification.params.explanation ?? null,
        steps: notification.params.plan ?? [],
      },
    });
  } else if (notification.method === "turn/completed") {
    delete session.currentTurnId;
    send(socket, { type: "turn.completed", sessionId });
  } else if (notification.method === "error") {
    send(socket, {
      type: "error",
      sessionId,
      message: JSON.stringify(notification.params),
    });
  } else if (isToolStarted(notification.method)) {
    send(socket, {
      type: "tool.started",
      sessionId,
      name: notificationName(notification),
      input: notification.params,
    });
  } else if (isToolCompleted(notification.method)) {
    send(socket, {
      type: "tool.completed",
      sessionId,
      name: notificationName(notification),
      output: notification.params,
    });
  } else if (isUsefulActivity(notification.method)) {
    const activity = activityMessage(notification);
    send(socket, {
      type: "activity",
      sessionId,
      message: activity.message,
      ...(activity.detail ? { detail: activity.detail } : {}),
      ...(activity.category ? { category: activity.category } : {}),
      ...(activity.input !== undefined ? { input: activity.input } : {}),
      ...(activity.output !== undefined ? { output: activity.output } : {}),
      surface: "conversation",
    });
  }
}
