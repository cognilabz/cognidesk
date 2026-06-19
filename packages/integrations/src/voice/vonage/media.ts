import type { VonageNccoAction } from "./contracts.js";

export function createVonageTalkNcco(
  text: string,
  options: Omit<Extract<VonageNccoAction, { action: "talk" }>, "action" | "text"> = {},
): VonageNccoAction[] {
  return [{ action: "talk", text, ...options }];
}

export function createVonageWebSocketNcco(options: {
  websocketUrl: string;
  contentType?: string;
  headers?: Record<string, string>;
  eventUrl?: string[];
}): VonageNccoAction[] {
  return [{
    action: "connect",
    endpoint: [{
      type: "websocket",
      uri: options.websocketUrl,
      "content-type": options.contentType ?? "audio/l16;rate=16000",
      ...(options.headers ? { headers: options.headers } : {}),
    }],
    ...(options.eventUrl ? { eventUrl: options.eventUrl } : {}),
  }];
}
