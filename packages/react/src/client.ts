import type { RuntimeEvent } from "@cognidesk/core";
import type {
  CognideskClient,
  CognideskClientOptions,
  CreateConversationResult,
  ReplayConversationResult,
  RuntimeSnapshotResult,
  SendMessageResult,
} from "./types.js";

export function createCognideskClient(options: CognideskClientOptions): CognideskClient {
  const fetcher = options.fetch ?? fetch;
  const baseUrl = options.baseUrl.replace(/\/$/, "");

  return {
    createConversation(input = {}) {
      return requestJson(fetcher, `${baseUrl}/conversations`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(input),
      }, "Failed to create conversation");
    },
    sendMessage(conversationId, message, sendOptions = {}) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, "messages"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          message,
          ...(sendOptions.turn !== undefined ? { turn: sendOptions.turn } : {}),
          ...(sendOptions.app !== undefined ? { app: sendOptions.app } : {}),
        }),
      }, "Failed to send message");
    },
    listEvents(conversationId, listOptions = {}) {
      const suffix = queryString({ after: listOptions.afterOffset });
      return requestJson(fetcher, `${conversationUrl(baseUrl, conversationId, "events")}${suffix}`, undefined, "Failed to list events");
    },
    submitWidget(conversationId, input) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, `widgets/${encodeURIComponent(input.promptId)}/submissions`), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          widgetKind: input.widgetKind,
          output: input.output,
        }),
      }, "Failed to submit widget");
    },
    emitCustomEvent(conversationId, eventName, input = {}) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, `custom-events/${encodeURIComponent(eventName)}`), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
          ...(input.traceId ? { traceId: input.traceId } : {}),
        }),
      }, "Failed to emit custom event");
    },
    emitJourneyEvent(conversationId, eventName, input = {}) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, `journey-events/${encodeURIComponent(eventName)}`), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
          ...(input.routing ? { routing: input.routing } : {}),
          ...(input.target ? { target: input.target } : {}),
          ...(input.app !== undefined ? { app: input.app } : {}),
          ...(input.traceId ? { traceId: input.traceId } : {}),
        }),
      }, "Failed to emit journey event");
    },
    emitIntermediateMessage(conversationId, input) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, "intermediate-messages"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          text: input.text,
          ...(input.traceId ? { traceId: input.traceId } : {}),
        }),
      }, "Failed to emit intermediate message");
    },
    emitGeneratedPreamble(conversationId, input = {}) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, "preambles"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.purpose ? { purpose: input.purpose } : {}),
          ...(input.maxWords !== undefined ? { maxWords: input.maxWords } : {}),
          ...(input.traceId ? { traceId: input.traceId } : {}),
        }),
      }, "Failed to emit generated preamble");
    },
    compactConversation(conversationId, input = {}) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, "compact"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.fromOffset !== undefined ? { fromOffset: input.fromOffset } : {}),
          ...(input.toOffset !== undefined ? { toOffset: input.toOffset } : {}),
          ...(input.schemaVersion ? { schemaVersion: input.schemaVersion } : {}),
        }),
      }, "Failed to compact conversation");
    },
    closeConversation(conversationId, input = {}) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, "close"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.reason ? { reason: input.reason } : {}),
        }),
      }, "Failed to close conversation");
    },
    requestHandoff(conversationId, input) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, "handoff"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          reason: input.reason,
          ...(input.summary ? { summary: input.summary } : {}),
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
        }),
      }, "Failed to request handoff");
    },
    resumeConversation(conversationId, input = {}) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, "resume"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.reason ? { reason: input.reason } : {}),
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
        }),
      }, "Failed to resume conversation");
    },
    getSnapshot(conversationId) {
      return requestJson(fetcher, conversationUrl(baseUrl, conversationId, "snapshot"), undefined, "Failed to get snapshot");
    },
    replayConversation(conversationId, replayOptions = {}) {
      const suffix = queryString({ after: replayOptions.afterOffset });
      return requestJson(fetcher, `${conversationUrl(baseUrl, conversationId, "replay")}${suffix}`, undefined, "Failed to replay conversation");
    },
    streamEvents(conversationId, handlers, streamOptions = {}) {
      const eventSourceConstructor = options.EventSource ?? globalThis.EventSource;
      if (!eventSourceConstructor) throw new Error("EventSource is not available in this environment.");
      const suffix = queryString({ after: streamOptions.afterOffset });
      const source = new eventSourceConstructor(`${conversationUrl(baseUrl, conversationId, "events/stream")}${suffix}`);
      source.addEventListener("event", (event) => {
        handlers.onEvent(JSON.parse((event as MessageEvent).data) as RuntimeEvent);
      });
      if (handlers.onError) source.addEventListener("error", handlers.onError);
      return () => source.close();
    },
  };
}

type ClientJsonResult =
  | CreateConversationResult
  | SendMessageResult
  | RuntimeSnapshotResult
  | ReplayConversationResult
  | { event: RuntimeEvent }
  | { event: RuntimeEvent; snapshot: RuntimeSnapshotResult["snapshot"]; events: RuntimeEvent[] }
  | { events: RuntimeEvent[] }
  | { text: string; events: RuntimeEvent[] }
  | { summary: unknown; snapshot: NonNullable<RuntimeSnapshotResult["snapshot"]>; events: RuntimeEvent[] }
  | { conversation: CreateConversationResult["conversation"] }
  | { conversation: CreateConversationResult["conversation"]; event: RuntimeEvent };

async function requestJson<TResult extends ClientJsonResult>(
  fetcher: typeof fetch,
  url: string,
  init: RequestInit | undefined,
  failureMessage: string,
): Promise<TResult> {
  const response = await fetcher(url, init);
  if (!response.ok) throw new Error(`${failureMessage}: ${response.status}`);
  return await response.json() as TResult;
}

function conversationUrl(baseUrl: string, conversationId: string, path: string) {
  return `${baseUrl}/conversations/${encodeURIComponent(conversationId)}/${path}`;
}

function queryString(values: { after?: number | undefined }) {
  const params = new URLSearchParams();
  if (values.after !== undefined) params.set("after", String(values.after));
  return params.size > 0 ? `?${params.toString()}` : "";
}
