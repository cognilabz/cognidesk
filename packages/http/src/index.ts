import type {
  CognideskRuntime,
  ConversationRecord,
  CreateRuntimeConversationInput,
  HandleUserMessageInput,
  HandleUserMessageResult,
  RuntimeEvent,
  SubmitWidgetInput,
} from "@cognidesk/core";

export interface CognideskHttpRuntime {
  createConversation(input: CreateRuntimeConversationInput): Promise<ConversationRecord>;
  handleUserMessage(input: HandleUserMessageInput): Promise<HandleUserMessageResult>;
  submitWidget?(input: SubmitWidgetInput): Promise<RuntimeEvent>;
  listEvents(conversationId: string, afterOffset?: number): Promise<RuntimeEvent[]>;
}

export interface CognideskHttpHandlerOptions {
  runtime: CognideskHttpRuntime | CognideskRuntime;
  basePath?: string;
  agentId?: string;
  ssePollIntervalMs?: number;
  cors?: boolean;
}

export interface CognideskHttpHandler {
  handle(request: Request): Promise<Response>;
}

export function createCognideskHttpHandler(options: CognideskHttpHandlerOptions): CognideskHttpHandler {
  const basePath = normalizeBasePath(options.basePath ?? "");
  const pollIntervalMs = options.ssePollIntervalMs ?? 500;

  return {
    async handle(request) {
      if (request.method === "OPTIONS" && options.cors) {
        return emptyResponse(204, options);
      }

      try {
        const url = new URL(request.url);
        const path = stripBasePath(url.pathname, basePath);
        if (path === null) return json({ error: "Not found" }, 404, options);

        if (request.method === "POST" && path === "/conversations") {
          const body = await readJson<CreateConversationBody>(request);
          const agentId = body.agentId ?? options.agentId;
          if (!agentId) return json({ error: "agentId is required" }, 400, options);
          const conversation = await options.runtime.createConversation({
            ...(body.id ? { id: body.id } : {}),
            agentId,
            context: body.context ?? {},
          });
          return json({ conversation }, 201, options);
        }

        const messageMatch = path.match(/^\/conversations\/([^/]+)\/messages$/);
        if (request.method === "POST" && messageMatch) {
          const conversationId = decodeURIComponent(messageMatch[1] ?? "");
          const body = await readJson<CreateMessageBody>(request);
          const text = body.text ?? body.message;
          if (!text) return json({ error: "message is required" }, 400, options);
          const result = await options.runtime.handleUserMessage({
            conversationId,
            text,
            ...(body.turn !== undefined ? { turn: body.turn } : {}),
            ...(body.app !== undefined ? { app: body.app } : {}),
            signal: request.signal,
          });
          return json(result, 200, options);
        }

        const widgetSubmissionMatch = path.match(/^\/conversations\/([^/]+)\/widgets\/([^/]+)\/submissions$/);
        if (request.method === "POST" && widgetSubmissionMatch) {
          if (!options.runtime.submitWidget) return json({ error: "Widget submissions are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(widgetSubmissionMatch[1] ?? "");
          const promptId = decodeURIComponent(widgetSubmissionMatch[2] ?? "");
          const body = await readJson<CreateWidgetSubmissionBody>(request);
          if (!body.widgetKind) return json({ error: "widgetKind is required" }, 400, options);
          const event = await options.runtime.submitWidget({
            conversationId,
            promptId,
            widgetKind: body.widgetKind,
            output: body.output,
          });
          return json({ event }, 200, options);
        }

        const eventsMatch = path.match(/^\/conversations\/([^/]+)\/events$/);
        if (request.method === "GET" && eventsMatch) {
          const conversationId = decodeURIComponent(eventsMatch[1] ?? "");
          const afterOffset = parseOptionalInteger(url.searchParams.get("after"));
          const events = await options.runtime.listEvents(conversationId, afterOffset);
          return json({ events }, 200, options);
        }

        const streamMatch = path.match(/^\/conversations\/([^/]+)\/events\/stream$/);
        if (request.method === "GET" && streamMatch) {
          const conversationId = decodeURIComponent(streamMatch[1] ?? "");
          const afterOffset = parseOptionalInteger(url.searchParams.get("after"));
          return streamEvents({
            runtime: options.runtime,
            conversationId,
            afterOffset,
            pollIntervalMs,
            signal: request.signal,
            handlerOptions: options,
          });
        }

        return json({ error: "Not found" }, 404, options);
      } catch (error) {
        return json({
          error: error instanceof Error ? error.message : "Unknown error",
        }, 500, options);
      }
    },
  };
}

interface CreateConversationBody {
  id?: string;
  agentId?: string;
  context?: unknown;
}

interface CreateMessageBody {
  message?: string;
  text?: string;
  turn?: unknown;
  app?: unknown;
}

interface CreateWidgetSubmissionBody {
  widgetKind?: string;
  output?: unknown;
}

function streamEvents(options: {
  runtime: CognideskHttpRuntime | CognideskRuntime;
  conversationId: string;
  afterOffset: number | undefined;
  pollIntervalMs: number;
  signal: AbortSignal;
  handlerOptions: CognideskHttpHandlerOptions;
}) {
  const encoder = new TextEncoder();
  let offset = options.afterOffset ?? 0;
  let closed = false;
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const close = () => {
        if (closed) return;
        closed = true;
        controller.close();
      };
      options.signal.addEventListener("abort", close, { once: true });

      const poll = async () => {
        if (closed) return;
        try {
          const events = await options.runtime.listEvents(options.conversationId, offset);
          for (const event of events) {
            offset = event.offset;
            controller.enqueue(encoder.encode(formatSseEvent(event)));
          }
        } catch (error) {
          controller.enqueue(encoder.encode(formatSseError(error)));
        }
        if (!closed) setTimeout(poll, options.pollIntervalMs);
      };

      controller.enqueue(encoder.encode(": cognidesk stream ready\n\n"));
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
    }, options.handlerOptions),
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

async function readJson<T>(request: Request): Promise<T> {
  if (!request.body) return {} as T;
  return await request.json() as T;
}

function json(body: unknown, status: number, options: CognideskHttpHandlerOptions) {
  return new Response(JSON.stringify(body), {
    status,
    headers: withCors({
      "content-type": "application/json; charset=utf-8",
    }, options),
  });
}

function emptyResponse(status: number, options: CognideskHttpHandlerOptions) {
  return new Response(null, {
    status,
    headers: withCors({}, options),
  });
}

function withCors(headers: Record<string, string>, options: CognideskHttpHandlerOptions) {
  if (!options.cors) return headers;
  return {
    ...headers,
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type,authorization",
  };
}

function normalizeBasePath(basePath: string) {
  if (!basePath || basePath === "/") return "";
  return basePath.startsWith("/") ? basePath.replace(/\/$/, "") : `/${basePath.replace(/\/$/, "")}`;
}

function stripBasePath(pathname: string, basePath: string) {
  if (!basePath) return pathname;
  if (pathname === basePath) return "/";
  if (!pathname.startsWith(`${basePath}/`)) return null;
  return pathname.slice(basePath.length);
}

function parseOptionalInteger(value: string | null) {
  if (value === null || value === "") return undefined;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : undefined;
}
