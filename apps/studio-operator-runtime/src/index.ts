import { WebSocketServer } from "ws";
import { handleCodexNotification } from "./runtime/notifications.js";
import { claimsFromTrustedStudioHeaders } from "./runtime/auth.js";
import { codex, handleClientMessage } from "./runtime/sessions.js";
import { send } from "./runtime/transport.js";
import type { StudioClaims } from "./runtime/types.js";

const host = process.env.HOST ?? "127.0.0.1";
const port = Number(process.env.PORT ?? 4099);

const wss = new WebSocketServer({ host, port, path: "/ws" });
codex.onNotification(handleCodexNotification);

wss.on("connection", (socket, request) => {
  let claims: StudioClaims;
  try {
    claims = claimsFromTrustedStudioHeaders(request.headers);
  } catch (error) {
    send(socket, {
      type: "error",
      message: error instanceof Error ? error.message : "Studio Operator Runtime WebSocket authentication failed",
    });
    socket.close(1008, "Unauthorized");
    return;
  }

  send(socket, {
    type: "activity",
    message: "Studio Operator Runtime connected.",
    surface: "conversation",
  });

  socket.on("message", (data) => {
    void handleClientMessage(socket, claims, data.toString()).catch((error) => {
      send(socket, {
        type: "error",
        message: error instanceof Error ? error.message : "Operator runtime error",
      });
    });
  });
});

console.log(`Cognidesk Studio Operator Runtime listening on ws://${host}:${port}/ws`);
