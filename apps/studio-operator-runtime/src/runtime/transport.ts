import { WebSocket } from "ws";

export function send(socket: WebSocket, event: unknown) {
  if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify(event));
}

export function getThreadId(params: Record<string, unknown>) {
  const value = params.threadId;
  if (typeof value === "string") return value;
  const thread = params.thread;
  if (thread && typeof thread === "object" && "id" in thread && typeof thread.id === "string") return thread.id;
  return null;
}
