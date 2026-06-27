import type { OperatorSessionRow } from "../types";
import { normalizeSession, type RawOperatorSession } from "./activity";

export type StoredOperatorMessage = {
  id: string;
  role: "user" | "assistant" | "system" | "tool";
  content: unknown;
};

export type StoredOperatorArtifact = {
  artifact: unknown;
  title: string;
  type: string;
};

export async function createOperatorSession(input: {
  title: string;
  targetId: string;
  modelId: string;
}) {
  const response = await fetch("/api/studio/operator/sessions", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!response.ok) throw new Error("Could not create Operator session");
  const data = await response.json() as { session: RawOperatorSession };
  return normalizeSession(data.session);
}

export async function fetchOperatorSessions() {
  const response = await fetch("/api/studio/operator/sessions");
  if (!response.ok) return null;
  const data = await response.json() as { sessions: RawOperatorSession[] };
  return data.sessions.map(normalizeSession);
}

export async function fetchOperatorSession(id: string) {
  const response = await fetch(`/api/studio/operator/sessions/${id}`);
  if (!response.ok) return null;
  return await response.json() as {
    messages: StoredOperatorMessage[];
    artifacts: StoredOperatorArtifact[];
  };
}

export async function renameOperatorSession(sessionId: string, title: string) {
  const response = await fetch(`/api/studio/operator/sessions/${sessionId}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) return null;
  const data = await response.json() as { session: RawOperatorSession };
  return normalizeSession(data.session);
}

export async function deleteOperatorSession(session: OperatorSessionRow) {
  const response = await fetch(`/api/studio/operator/sessions/${session.id}`, { method: "DELETE" });
  return response.ok;
}

export async function persistOperatorMessage(
  sessionId: string,
  role: "user" | "assistant" | "system" | "tool",
  content: unknown,
) {
  const response = await fetch(`/api/studio/operator/sessions/${sessionId}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ role, content }),
  });
  if (!response.ok) throw new Error("Could not persist Operator message");
}
