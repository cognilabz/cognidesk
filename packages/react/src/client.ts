import type { RuntimeEvent } from "@cognidesk/core";
import {
  createChannelEventInput,
  createChannelEventRequestBody,
  createChannelHandoffEventInput,
  createChannelHandoffReviewEventInput,
  createChannelOutputResolutionEventInput,
  createMessageChannelEventInput,
  createOutboundContactChannelEventInput,
  createProviderObjectChannelEventInput,
  createScheduledChannelEventInput,
  createVoiceTurnChannelEventInput,
  type ChannelEventSubmitInput,
  type ChannelHandoffEventInput,
  type ChannelHandoffReviewEventInput,
  type ChannelMessageEventInput,
  type ChannelOutputResolutionEventInput,
  type OutboundContactChannelEventInput,
  type ProviderObjectChannelEventInput,
  type ScheduledChannelEventInput,
  type VoiceTurnChannelEventInput,
} from "./channel-events.js";
import type {
  CognideskClient,
  CognideskClientOptions,
  CognideskEventSourceOptions,
  CognideskRequestContext,
  CognideskRequestOperation,
  CognideskStreamEventsOptions,
  CreateConversationResult,
  HandleChannelEventResult,
  ReplayConversationResult,
  ResolveChannelOutputInput,
  ResolveChannelOutputResult,
  RuntimeSnapshotResult,
  SendMessageResult,
} from "./types.js";

export class CognideskApiError extends Error {
  readonly status: number;
  readonly body: unknown;
  readonly response: Response;

  constructor(message: string, input: { status: number; body: unknown; response: Response }) {
    super(message);
    this.name = "CognideskApiError";
    this.status = input.status;
    this.body = input.body;
    this.response = input.response;
  }
}

export function createCognideskClient(options: CognideskClientOptions): CognideskClient {
  const fetcher = options.fetch ?? fetch;
  const baseUrl = options.baseUrl.replace(/\/$/, "");
  const request = <TResult extends ClientJsonResult>(
    operation: CognideskRequestOperation,
    url: string,
    init: RequestInit | undefined,
    failureMessage: string,
    conversationId?: string,
  ) => requestJson<TResult>(fetcher, url, requestInit(options, {
    operation,
    url,
    method: init?.method === "POST" ? "POST" : "GET",
    ...(conversationId !== undefined ? { conversationId } : {}),
  }, init), failureMessage);
  const postChannelEvent = (
    operation: Extract<CognideskRequestOperation,
      | "handleChannelEvent"
      | "receiveMessage"
      | "recordProviderUpdate"
      | "finalizeVoiceTurn"
      | "requestOutboundContact"
      | "submitScheduledEvent"
      | "recordChannelOutputResolution"
      | "requestChannelHandoff"
      | "requestChannelHandoffReview"
      | "sendMessage">,
    input: ChannelEventSubmitInput,
    failureMessage: string,
  ) => {
    const normalized = createChannelEventInput(input);
    return request<HandleChannelEventResult>(operation, `${baseUrl}/channel-events`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(createChannelEventRequestBody(normalized)),
      ...(normalized.signal ? { signal: normalized.signal } : {}),
    }, failureMessage, normalized.conversationId);
  };

  return {
    createConversation(input = {}) {
      return request("createConversation", `${baseUrl}/conversations`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(input),
      }, "Failed to create conversation");
    },
    handleChannelEvent(input) {
      return postChannelEvent("handleChannelEvent", input, "Failed to handle channel event");
    },
    receiveMessage(input: ChannelMessageEventInput) {
      return postChannelEvent("receiveMessage", createMessageChannelEventInput(input), "Failed to receive message");
    },
    recordProviderUpdate(input: ProviderObjectChannelEventInput) {
      return postChannelEvent("recordProviderUpdate", createProviderObjectChannelEventInput(input), "Failed to record provider update");
    },
    finalizeVoiceTurn(input: VoiceTurnChannelEventInput) {
      return postChannelEvent("finalizeVoiceTurn", createVoiceTurnChannelEventInput(input), "Failed to finalize voice turn");
    },
    requestOutboundContact(input: OutboundContactChannelEventInput) {
      return postChannelEvent("requestOutboundContact", createOutboundContactChannelEventInput(input), "Failed to request outbound contact");
    },
    submitScheduledEvent(input: ScheduledChannelEventInput) {
      return postChannelEvent("submitScheduledEvent", createScheduledChannelEventInput(input), "Failed to submit scheduled event");
    },
    resolveChannelOutput(input: ResolveChannelOutputInput) {
      return request<ResolveChannelOutputResult>("resolveChannelOutput", `${baseUrl}/channel-outputs/resolve`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(channelOutputResolutionRequestBody(input)),
        ...(input.signal ? { signal: input.signal } : {}),
      }, "Failed to resolve channel output", input.conversationId);
    },
    recordChannelOutputResolution(input: ChannelOutputResolutionEventInput) {
      return postChannelEvent("recordChannelOutputResolution", createChannelOutputResolutionEventInput(input), "Failed to record channel output resolution");
    },
    requestChannelHandoff(input: ChannelHandoffEventInput) {
      return postChannelEvent("requestChannelHandoff", createChannelHandoffEventInput(input), "Failed to request channel handoff");
    },
    requestChannelHandoffReview(input: ChannelHandoffReviewEventInput) {
      return postChannelEvent("requestChannelHandoffReview", createChannelHandoffReviewEventInput(input), "Failed to request channel handoff review");
    },
    startVoiceConversation(input) {
      return request("startVoiceConversation", `${baseUrl}/voice/conversations`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(input),
      }, "Failed to start voice conversation");
    },
    startVoiceSegment(conversationId, input = {}) {
      return request("startVoiceSegment", conversationUrl(baseUrl, conversationId, "voice-segments"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(input),
      }, "Failed to start voice segment", conversationId);
    },
    sendMessage(conversationId, message, sendOptions = {}) {
      return postChannelEvent("sendMessage", createMessageChannelEventInput({
        conversationId,
        channel: sendOptions.channel ?? "chat",
        text: message,
        ...(sendOptions.turn !== undefined ? { turn: sendOptions.turn } : {}),
        ...(sendOptions.app !== undefined ? { app: sendOptions.app } : {}),
      }), "Failed to send message").then(sendMessageResultFromChannelEvent);
    },
    listEvents(conversationId, listOptions = {}) {
      const suffix = queryString({ after: listOptions.afterOffset });
      return request("listEvents", `${conversationUrl(baseUrl, conversationId, "events")}${suffix}`, undefined, "Failed to list events", conversationId);
    },
    submitWidget(conversationId, input) {
      return request("submitWidget", conversationUrl(baseUrl, conversationId, `widgets/${encodeURIComponent(input.promptId)}/submissions`), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          widgetKind: input.widgetKind,
          output: input.output,
        }),
      }, "Failed to submit widget", conversationId);
    },
    emitCustomEvent(conversationId, eventName, input = {}) {
      return request("emitCustomEvent", conversationUrl(baseUrl, conversationId, `custom-events/${encodeURIComponent(eventName)}`), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
        }),
      }, "Failed to emit custom event", conversationId);
    },
    emitJourneyEvent(conversationId, eventName, input = {}) {
      return request("emitJourneyEvent", conversationUrl(baseUrl, conversationId, `journey-events/${encodeURIComponent(eventName)}`), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
          ...(input.routing ? { routing: input.routing } : {}),
          ...(input.target ? { target: input.target } : {}),
          ...(input.app !== undefined ? { app: input.app } : {}),
        }),
      }, "Failed to emit journey event", conversationId);
    },
    emitIntermediateMessage(conversationId, input) {
      return request("emitIntermediateMessage", conversationUrl(baseUrl, conversationId, "intermediate-messages"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          text: input.text,
          ...(input.visibleToModel ? { visibleToModel: true } : {}),
        }),
      }, "Failed to emit intermediate message", conversationId);
    },
    emitGeneratedPreamble(conversationId, input = {}) {
      return request("emitGeneratedPreamble", conversationUrl(baseUrl, conversationId, "preambles"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.purpose ? { purpose: input.purpose } : {}),
          ...(input.maxWords !== undefined ? { maxWords: input.maxWords } : {}),
        }),
      }, "Failed to emit generated preamble", conversationId);
    },
    compactConversation(conversationId, input = {}) {
      return request("compactConversation", conversationUrl(baseUrl, conversationId, "compact"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.fromOffset !== undefined ? { fromOffset: input.fromOffset } : {}),
          ...(input.toOffset !== undefined ? { toOffset: input.toOffset } : {}),
          ...(input.schemaVersion ? { schemaVersion: input.schemaVersion } : {}),
        }),
      }, "Failed to compact conversation", conversationId);
    },
    closeConversation(conversationId, input = {}) {
      return request("closeConversation", conversationUrl(baseUrl, conversationId, "close"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.reason ? { reason: input.reason } : {}),
        }),
      }, "Failed to close conversation", conversationId);
    },
    requestHandoff(conversationId, input) {
      return request("requestHandoff", conversationUrl(baseUrl, conversationId, "handoff"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          reason: input.reason,
          ...(input.summary ? { summary: input.summary } : {}),
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
        }),
      }, "Failed to request handoff", conversationId);
    },
    resumeConversation(conversationId, input = {}) {
      return request("resumeConversation", conversationUrl(baseUrl, conversationId, "resume"), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.reason ? { reason: input.reason } : {}),
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
        }),
      }, "Failed to resume conversation", conversationId);
    },
    getSnapshot(conversationId) {
      return request("getSnapshot", conversationUrl(baseUrl, conversationId, "snapshot"), undefined, "Failed to get snapshot", conversationId);
    },
    replayConversation(conversationId, replayOptions = {}) {
      const suffix = queryString({ after: replayOptions.afterOffset });
      return request("replayConversation", `${conversationUrl(baseUrl, conversationId, "replay")}${suffix}`, undefined, "Failed to replay conversation", conversationId);
    },
    streamEvents(conversationId, handlers, streamOptions = {}) {
      const suffix = queryString({ after: streamOptions.afterOffset });
      const url = `${conversationUrl(baseUrl, conversationId, "events/stream")}${suffix}`;
      const eventSourceOptions = buildEventSourceOptions(options, streamOptions);
      const createEventSource = streamOptions.createEventSource ?? options.createEventSource;
      const source = createEventSource
        ? createEventSource(url, eventSourceOptions)
        : createDefaultEventSource(url, eventSourceOptions, streamOptions.EventSource ?? options.EventSource);
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
  | HandleChannelEventResult
  | import("./types.js").StartVoiceResult
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
  if (!response.ok) {
    throw new CognideskApiError(`${failureMessage}: ${response.status}`, {
      status: response.status,
      body: await parseResponseBody(response),
      response,
    });
  }
  return await response.json() as TResult;
}

function requestInit(options: CognideskClientOptions, context: CognideskRequestContext, init: RequestInit | undefined) {
  const resolvedOptions: RequestInit | undefined = typeof options.requestOptions === "function" ? options.requestOptions(context) : options.requestOptions;
  const {
    headers: resolvedHeaders,
    credentials: resolvedCredentials,
    method: _method,
    body: _body,
    ...resolvedInit
  } = resolvedOptions ?? {};
  const mergedHeaders = mergeHeaders(options.headers, resolvedHeaders, init?.headers);
  const credentials = resolvedCredentials ?? options.credentials;
  const merged: RequestInit = {
    ...resolvedInit,
    ...(init ?? {}),
  };

  if (mergedHeaders) merged.headers = mergedHeaders;
  if (credentials !== undefined) merged.credentials = credentials;

  return hasRequestInit(merged) ? merged : undefined;
}

function buildEventSourceOptions(options: CognideskClientOptions, streamOptions: CognideskStreamEventsOptions) {
  const {
    headers: sharedHeaders,
    withCredentials: sharedWithCredentials,
    ...sharedInit
  } = options.eventSourceOptions ?? {};
  const {
    afterOffset: _afterOffset,
    EventSource: _eventSource,
    createEventSource: _createEventSource,
    headers: streamHeaders,
    withCredentials: streamWithCredentials,
    ...streamInit
  } = streamOptions;
  const mergedHeaders = mergeHeaders(options.headers, sharedHeaders, streamHeaders);
  const withCredentials = streamWithCredentials ?? sharedWithCredentials ?? (options.credentials === "include" ? true : undefined);
  const merged: CognideskEventSourceOptions = {
    ...sharedInit,
    ...streamInit,
  };

  if (mergedHeaders) merged.headers = mergedHeaders;
  if (withCredentials !== undefined) merged.withCredentials = withCredentials;

  return merged;
}

function createDefaultEventSource(url: string, init: CognideskEventSourceOptions, eventSourceConstructor: typeof EventSource | undefined) {
  const Constructor = eventSourceConstructor ?? globalThis.EventSource;
  if (!Constructor) throw new Error("EventSource is not available in this environment.");
  return new Constructor(url, init);
}

function channelOutputResolutionRequestBody<TPayload>(input: ResolveChannelOutputInput<TPayload>) {
  const { signal: _signal, ...body } = input;
  return body;
}

function sendMessageResultFromChannelEvent(result: HandleChannelEventResult): SendMessageResult {
  return {
    text: result.turn?.text ?? result.text ?? textFromEvents(result.events) ?? "",
    events: result.events,
    ...(result.turn?.activeJourneyId ?? result.activeJourneyId
      ? { activeJourneyId: result.turn?.activeJourneyId ?? result.activeJourneyId }
      : {}),
  };
}

function textFromEvents(events: RuntimeEvent[]) {
  for (const event of [...events].reverse()) {
    if (event.type === "message.completed" && typeof event.data.text === "string") {
      return event.data.text;
    }
  }
  return undefined;
}

async function parseResponseBody(response: Response) {
  const text = await response.text();
  if (!text) return undefined;
  if (response.headers.get("content-type")?.includes("json")) {
    try {
      return JSON.parse(text) as unknown;
    } catch {
      return text;
    }
  }
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

function mergeHeaders(...headerInits: Array<HeadersInit | undefined>) {
  let merged: Headers | undefined;
  for (const headerInit of headerInits) {
    if (!headerInit) continue;
    const headers = new Headers(headerInit);
    headers.forEach((value, key) => {
      merged ??= new Headers();
      merged.set(key, value);
    });
  }
  return merged;
}

function hasRequestInit(init: RequestInit) {
  return Object.keys(init).length > 0;
}

function conversationUrl(baseUrl: string, conversationId: string, path: string) {
  return `${baseUrl}/conversations/${encodeURIComponent(conversationId)}/${path}`;
}

function queryString(values: { after?: number | undefined }) {
  const params = new URLSearchParams();
  if (values.after !== undefined) params.set("after", String(values.after));
  return params.size > 0 ? `?${params.toString()}` : "";
}
