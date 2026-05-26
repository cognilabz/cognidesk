import type { CognideskRuntime, RuntimeEvent } from "@cognidesk/core";
import { withCors, type ResponseOptions } from "./responses.js";

export interface EventStreamRuntime {
  listEvents(conversationId: string, afterOffset?: number): Promise<RuntimeEvent[]>;
}

export function streamEvents(options: {
  runtime: EventStreamRuntime | CognideskRuntime;
  conversationId: string;
  afterOffset: number | undefined;
  pollIntervalMs: number;
  signal: AbortSignal;
  responseOptions: ResponseOptions;
}) {
  const encoder = new TextEncoder();
  let offset = options.afterOffset ?? 0;
  let closed = false;
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const close = () => {
        if (closed) return;
        closed = true;
        try {
          controller.close();
        } catch {
          // The stream may already have been closed by cancel().
        }
      };
      options.signal.addEventListener("abort", close, { once: true });

      const poll = async () => {
        if (closed) return;
        try {
          const events = await options.runtime.listEvents(options.conversationId, offset);
          if (closed) return;
          for (const event of events) {
            if (closed) return;
            offset = event.offset;
            controller.enqueue(encoder.encode(formatSseEvent(event)));
          }
        } catch (error) {
          if (closed) return;
          controller.enqueue(encoder.encode(formatSseError(error)));
        }
        if (!closed) setTimeout(poll, options.pollIntervalMs);
      };

      if (!closed) controller.enqueue(encoder.encode(": cognidesk stream ready\n\n"));
      void poll();
    },
    cancel() {
      closed = true;
    },
  });

  return new Response(stream, {
    status: 200,
    headers: withCors({
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
    }, options.responseOptions),
  });
}

function formatSseEvent(event: RuntimeEvent) {
  return [
    `id: ${event.offset}`,
    "event: event",
    `data: ${JSON.stringify(event)}`,
    "",
    "",
  ].join("\n");
}

function formatSseError(error: unknown) {
  return [
    "event: error",
    `data: ${JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" })}`,
    "",
    "",
  ].join("\n");
}
