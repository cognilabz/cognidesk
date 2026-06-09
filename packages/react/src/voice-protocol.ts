import type {
  VoiceProtocolClientEvent,
  VoiceProtocolServerEvent,
} from "./types.js";

export interface VoiceProtocolClientOptions {
  url: string;
  WebSocket?: typeof WebSocket;
  protocols?: string | string[];
  onOpen?(): void;
  onEvent?(event: VoiceProtocolServerEvent): void;
  onClose?(event: CloseEvent): void;
  onError?(event: Event): void;
}

export interface VoiceProtocolClient {
  readonly socket: WebSocket;
  sendEvent(event: VoiceProtocolClientEvent): void;
  close(code?: number, reason?: string): void;
}

export function createVoiceProtocolClient(options: VoiceProtocolClientOptions): VoiceProtocolClient {
  const WebSocketCtor = options.WebSocket ?? globalThis.WebSocket;
  if (!WebSocketCtor) throw new Error("WebSocket is not available in this environment.");
  const socket = new WebSocketCtor(options.url, options.protocols);
  socket.addEventListener("open", () => options.onOpen?.());
  socket.addEventListener("message", (message) => {
    if (typeof message.data !== "string") return;
    options.onEvent?.(JSON.parse(message.data) as VoiceProtocolServerEvent);
  });
  if (options.onClose) socket.addEventListener("close", options.onClose);
  if (options.onError) socket.addEventListener("error", options.onError);

  return {
    socket,
    sendEvent(event) {
      if (socket.readyState !== WebSocketCtor.OPEN) return;
      socket.send(JSON.stringify(event));
    },
    close(code, reason) {
      socket.close(code, reason);
    },
  };
}
