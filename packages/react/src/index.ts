import type { RuntimeEvent } from "@cognidesk/core";

export interface CognideskClientOptions {
  baseUrl: string;
}

export interface CognideskClient {
  sendMessage(conversationId: string, message: string): Promise<void>;
  streamEvents(conversationId: string, handlers: { onEvent(event: RuntimeEvent): void }): () => void;
}

export function createCognideskClient(options: CognideskClientOptions): CognideskClient {
  return {
    async sendMessage(conversationId, message) {
      await fetch(`${options.baseUrl}/conversations/${encodeURIComponent(conversationId)}/messages`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message }),
      });
    },
    streamEvents(conversationId, handlers) {
      const source = new EventSource(`${options.baseUrl}/conversations/${encodeURIComponent(conversationId)}/events/stream`);
      source.addEventListener("event", (event) => {
        handlers.onEvent(JSON.parse((event as MessageEvent).data) as RuntimeEvent);
      });
      return () => source.close();
    },
  };
}
