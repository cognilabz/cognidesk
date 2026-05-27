import { parseOptionalInteger, normalizeBasePath, stripBasePath } from "./path.js";
import { emptyResponse, HttpInputError, json, readJson } from "./responses.js";
import { streamEvents } from "./sse.js";
import type {
  CognideskHttpHandler,
  CognideskHttpHandlerOptions,
  CreateCloseBody,
  CreateCompactionBody,
  CreateConversationBody,
  CreateGeneratedPreambleBody,
  CreateHandoffBody,
  CreateIntermediateMessageBody,
  CreateJourneyEventBody,
  CreateMessageBody,
  CreateResumeBody,
  CreateRuntimeEventBody,
  CreateWidgetSubmissionBody,
} from "./types.js";

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
          const body = await readObject(request);
          const agentId = optionalString(body, "agentId") ?? options.agentId;
          if (!agentId) return json({ error: "agentId is required" }, 400, options);
          const conversation = await options.runtime.createConversation({
            ...optionalStringProperty(body, "id"),
            agentId,
            context: body.context ?? {},
          });
          return json({ conversation }, 201, options);
        }

        const messageMatch = path.match(/^\/conversations\/([^/]+)\/messages$/);
        if (request.method === "POST" && messageMatch) {
          const conversationId = decodeURIComponent(messageMatch[1] ?? "");
          const body = await readObject(request);
          const text = optionalString(body, "text") ?? optionalString(body, "message");
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

        const customEventMatch = path.match(/^\/conversations\/([^/]+)\/custom-events\/([^/]+)$/);
        if (request.method === "POST" && customEventMatch) {
          if (!options.runtime.emitCustomEvent) return json({ error: "Custom events are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(customEventMatch[1] ?? "");
          const eventName = decodeURIComponent(customEventMatch[2] ?? "");
          const event = options.customEvents?.find((candidate) => candidate.name === eventName);
          if (!event) return json({ error: `Custom event '${eventName}' is not registered with the HTTP handler` }, 404, options);
          const body = await readObject(request);
          const emitted = await options.runtime.emitCustomEvent({
            conversationId,
            event,
            payload: body.payload,
            ...optionalStringProperty(body, "traceId"),
          });
          return json({ event: emitted }, 200, options);
        }

        const journeyEventMatch = path.match(/^\/conversations\/([^/]+)\/journey-events\/([^/]+)$/);
        if (request.method === "POST" && journeyEventMatch) {
          if (!options.runtime.emitJourneyEvent) return json({ error: "Journey events are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(journeyEventMatch[1] ?? "");
          const eventName = decodeURIComponent(journeyEventMatch[2] ?? "");
          const event = options.journeyEvents?.find((candidate) => candidate.name === eventName);
          if (!event) return json({ error: `Journey event '${eventName}' is not registered with the HTTP handler` }, 404, options);
          const body = await readObject(request);
          const routing = optionalRouting(body, "routing");
          const target = optionalTarget(body, "target");
          const result = await options.runtime.emitJourneyEvent({
            conversationId,
            event,
            payload: body.payload,
            ...(routing ? { routing } : {}),
            ...(target ? { target } : {}),
            ...(body.app !== undefined ? { app: body.app } : {}),
            ...optionalStringProperty(body, "traceId"),
            signal: request.signal,
          });
          return json(result, 200, options);
        }

        const handoffMatch = path.match(/^\/conversations\/([^/]+)\/handoff$/);
        if (request.method === "POST" && handoffMatch) {
          if (!options.runtime.requestHandoff) return json({ error: "Handoff is not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(handoffMatch[1] ?? "");
          const body = await readObject(request);
          const reason = optionalString(body, "reason");
          if (!reason) return json({ error: "reason is required" }, 400, options);
          const result = await options.runtime.requestHandoff({
            conversationId,
            reason,
            ...optionalStringProperty(body, "summary"),
            ...(body.payload !== undefined ? { payload: body.payload } : {}),
          });
          return json(result, 200, options);
        }

        const closeMatch = path.match(/^\/conversations\/([^/]+)\/close$/);
        if (request.method === "POST" && closeMatch) {
          if (!options.runtime.closeConversation) return json({ error: "Conversation closure is not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(closeMatch[1] ?? "");
          const body = await readObject(request);
          const conversation = await options.runtime.closeConversation(
            conversationId,
            optionalString(body, "reason"),
          );
          return json({ conversation }, 200, options);
        }

        const resumeMatch = path.match(/^\/conversations\/([^/]+)\/resume$/);
        if (request.method === "POST" && resumeMatch) {
          if (!options.runtime.resumeConversation) return json({ error: "Conversation resume is not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(resumeMatch[1] ?? "");
          const body = await readObject(request);
          const result = await options.runtime.resumeConversation({
            conversationId,
            ...optionalStringProperty(body, "reason"),
            ...(body.payload !== undefined ? { payload: body.payload } : {}),
          });
          return json(result, 200, options);
        }

        const intermediateMessageMatch = path.match(/^\/conversations\/([^/]+)\/intermediate-messages$/);
        if (request.method === "POST" && intermediateMessageMatch) {
          if (!options.runtime.emitIntermediateMessage) return json({ error: "Intermediate messages are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(intermediateMessageMatch[1] ?? "");
          const body = await readObject(request);
          const text = optionalString(body, "text");
          if (!text) return json({ error: "text is required" }, 400, options);
          const result = await options.runtime.emitIntermediateMessage({
            conversationId,
            text,
            ...optionalStringProperty(body, "traceId"),
            ...(body.visibleToModel === true ? { visibleToModel: true } : {}),
          });
          return json(result, 200, options);
        }

        const preambleMatch = path.match(/^\/conversations\/([^/]+)\/preambles$/);
        if (request.method === "POST" && preambleMatch) {
          if (!options.runtime.emitGeneratedPreamble) return json({ error: "Generated preambles are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(preambleMatch[1] ?? "");
          const body = await readObject(request);
          const maxWords = optionalNonNegativeNumber(body, "maxWords");
          const result = await options.runtime.emitGeneratedPreamble({
            conversationId,
            ...optionalStringProperty(body, "purpose"),
            ...(maxWords !== undefined ? { maxWords } : {}),
            ...optionalStringProperty(body, "traceId"),
            signal: request.signal,
          });
          return json(result, 200, options);
        }

        const compactionMatch = path.match(/^\/conversations\/([^/]+)\/compact$/);
        if (request.method === "POST" && compactionMatch) {
          if (!options.runtime.compactConversation) return json({ error: "Conversation compaction is not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(compactionMatch[1] ?? "");
          const body = await readObject(request);
          const fromOffset = optionalNonNegativeNumber(body, "fromOffset");
          const toOffset = optionalNonNegativeNumber(body, "toOffset");
          const result = await options.runtime.compactConversation({
            conversationId,
            ...(fromOffset !== undefined ? { fromOffset } : {}),
            ...(toOffset !== undefined ? { toOffset } : {}),
            ...optionalStringProperty(body, "schemaVersion"),
            signal: request.signal,
          });
          return json(result, 200, options);
        }

        const widgetSubmissionMatch = path.match(/^\/conversations\/([^/]+)\/widgets\/([^/]+)\/submissions$/);
        if (request.method === "POST" && widgetSubmissionMatch) {
          if (!options.runtime.submitWidget) return json({ error: "Widget submissions are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(widgetSubmissionMatch[1] ?? "");
          const promptId = decodeURIComponent(widgetSubmissionMatch[2] ?? "");
          const body = await readObject(request);
          const widgetKind = optionalString(body, "widgetKind");
          if (!widgetKind) return json({ error: "widgetKind is required" }, 400, options);
          const event = await options.runtime.submitWidget({
            conversationId,
            promptId,
            widgetKind,
            output: body.output,
          });
          return json({ event }, 200, options);
        }

        const snapshotMatch = path.match(/^\/conversations\/([^/]+)\/snapshot$/);
        if (request.method === "GET" && snapshotMatch) {
          if (!options.runtime.getSnapshot) return json({ error: "Snapshots are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(snapshotMatch[1] ?? "");
          const snapshot = await options.runtime.getSnapshot(conversationId);
          return json({ snapshot }, 200, options);
        }

        const replayMatch = path.match(/^\/conversations\/([^/]+)\/replay$/);
        if (request.method === "GET" && replayMatch) {
          if (!options.runtime.replayConversation) return json({ error: "Event replay is not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(replayMatch[1] ?? "");
          const afterOffset = parseOptionalInteger(url.searchParams.get("after"));
          const replay = await options.runtime.replayConversation({
            conversationId,
            ...(afterOffset !== undefined ? { afterOffset } : {}),
          });
          return json(replay, 200, options);
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
            responseOptions: options,
          });
        }

        return json({ error: "Not found" }, 404, options);
      } catch (error) {
        if (error instanceof HttpInputError) {
          return json({ error: error.message }, error.status, options);
        }
        return json({
          error: error instanceof Error ? error.message : "Unknown error",
        }, 500, options);
      }
    },
  };
}

async function readObject(request: Request) {
  const body = await readJson(request);
  if (!isRecord(body)) throw new HttpInputError("Request body must be a JSON object.");
  return body;
}

function optionalString(body: Record<string, unknown>, key: string) {
  const value = body[key];
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "string") throw new HttpInputError(`${key} must be a string.`);
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function optionalStringProperty<TKey extends string>(body: Record<string, unknown>, key: TKey) {
  const value = optionalString(body, key);
  return value ? { [key]: value } as Record<TKey, string> : {};
}

function optionalNonNegativeNumber(body: Record<string, unknown>, key: string) {
  const value = body[key];
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0) {
    throw new HttpInputError(`${key} must be a non-negative integer.`);
  }
  return value;
}

function optionalRouting(body: Record<string, unknown>, key: string) {
  const value = optionalString(body, key);
  if (!value) return undefined;
  if (value !== "none" && value !== "activeJourneyOnly" && value !== "full" && value !== "targeted") {
    throw new HttpInputError(`${key} must be a valid routing mode.`);
  }
  return value;
}

function optionalTarget(body: Record<string, unknown>, key: string) {
  const value = body[key];
  if (value === undefined || value === null) return undefined;
  if (!isRecord(value)) throw new HttpInputError(`${key} must be an object.`);
  const journeyId = optionalString(value, "journeyId");
  const stateId = optionalString(value, "stateId");
  return {
    ...(journeyId ? { journeyId } : {}),
    ...(stateId ? { stateId } : {}),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
