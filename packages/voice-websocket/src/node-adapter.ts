import { WebSocketServer } from "ws";
import type { IncomingMessage, Server as HttpServer } from "node:http";
import type { Duplex } from "node:stream";
import type { RawData, WebSocket } from "ws";
import type { VoiceProfile } from "@cognidesk/core";
import { handleVoiceSocket } from "./handler.js";
import type {
  VoiceControlSurface,
  VoiceProvider,
  VoiceRecorder,
  VoiceSessionStore,
  VoiceSocketLike,
} from "./protocol.js";
import type { VoiceRuntime } from "./runtime.js";
import { normalizePathPrefix } from "./urls.js";

export interface AttachNodeVoiceWebSocketAdapterOptions {
  server: HttpServer;
  store: VoiceSessionStore;
  runtime: VoiceRuntime;
  provider: VoiceProvider;
  control?: VoiceControlSurface;
  profile?: VoiceProfile;
  recorder?: VoiceRecorder;
  pathPrefix?: string;
  initialGreeting?: string;
  reconnectTokenTtlMs?: number;
  reconnectGraceMs?: number;
  turnPreambleMs?: number;
}

export function attachNodeVoiceWebSocketAdapter(options: AttachNodeVoiceWebSocketAdapterOptions) {
  const pathPrefix = normalizePathPrefix(options.pathPrefix ?? "/voice/connections");
  const webSocketServer = new WebSocketServer({ noServer: true });

  const upgradeListener = (request: IncomingMessage, socket: Duplex, head: Buffer) => {
    const parsed = parseVoiceSocketRequest(request, pathPrefix);
    if (!parsed) return;
    webSocketServer.handleUpgrade(request, socket, head, (webSocket) => {
      webSocketServer.emit("connection", webSocket, request, parsed);
    });
  };

  options.server.on("upgrade", upgradeListener);
  webSocketServer.on("connection", (webSocket: WebSocket, _request: IncomingMessage, parsed: VoiceSocketRequest) => {
    void handleVoiceSocket({
      socket: adaptNodeWebSocket(webSocket),
      connectionId: parsed.connectionId,
      token: parsed.token,
      store: options.store,
      runtime: options.runtime,
      provider: options.provider,
      ...(options.control ? { control: options.control } : {}),
      ...(options.profile ? { profile: options.profile } : {}),
      ...(options.recorder ? { recorder: options.recorder } : {}),
      ...(options.initialGreeting !== undefined ? { initialGreeting: options.initialGreeting } : {}),
      ...(options.reconnectTokenTtlMs !== undefined ? { reconnectTokenTtlMs: options.reconnectTokenTtlMs } : {}),
      ...(options.reconnectGraceMs !== undefined ? { reconnectGraceMs: options.reconnectGraceMs } : {}),
      ...(options.turnPreambleMs !== undefined ? { turnPreambleMs: options.turnPreambleMs } : {}),
    });
  });

  return {
    close() {
      options.server.off("upgrade", upgradeListener);
      webSocketServer.close();
    },
    webSocketServer,
  };
}

interface VoiceSocketRequest {
  connectionId: string;
  token: string;
}

function parseVoiceSocketRequest(request: IncomingMessage, pathPrefix: string): VoiceSocketRequest | null {
  if (!request.url) return null;
  const url = new URL(request.url, "http://localhost");
  const expectedPrefix = `${pathPrefix}/`;
  if (!url.pathname.startsWith(expectedPrefix) || !url.pathname.endsWith("/socket")) return null;
  const connectionId = decodeURIComponent(url.pathname.slice(expectedPrefix.length, -"/socket".length));
  if (!connectionId) return null;
  const token = url.searchParams.get("token") ?? parseTokenFromProtocol(request.headers["sec-websocket-protocol"]);
  if (!token) return null;
  return { connectionId, token };
}

function adaptNodeWebSocket(socket: WebSocket): VoiceSocketLike {
  return {
    send(data) {
      socket.send(data);
    },
    close(code, reason) {
      socket.close(code, reason);
    },
    on(event, listener) {
      if (event === "message") {
        socket.on("message", (data: RawData) => {
          (listener as (data: string) => void)(rawDataToString(data));
        });
        return;
      }
      if (event === "close") {
        socket.on("close", (code, reason) => {
          (listener as (code?: number, reason?: string) => void)(code, reason.toString("utf8"));
        });
        return;
      }
      socket.on("error", listener);
    },
  };
}

function rawDataToString(data: RawData) {
  if (typeof data === "string") return data;
  if (Buffer.isBuffer(data)) return data.toString("utf8");
  if (Array.isArray(data)) return Buffer.concat(data).toString("utf8");
  return Buffer.from(data).toString("utf8");
}

function parseTokenFromProtocol(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value.join(",") : value;
  if (!raw) return undefined;
  const protocols = raw.split(",").map((candidate) => candidate.trim()).filter(Boolean);
  const bearer = protocols.find((candidate) => candidate.startsWith("cognidesk.voice.token."));
  return bearer?.slice("cognidesk.voice.token.".length);
}
