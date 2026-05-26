import { parseOptionalInteger, normalizeBasePath, stripBasePath } from "./path.js";
import { emptyResponse, json, readJson } from "./responses.js";
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

        const customEventMatch = path.match(/^\/conversations\/([^/]+)\/custom-events\/([^/]+)$/);
        if (request.method === "POST" && customEventMatch) {
          if (!options.runtime.emitCustomEvent) return json({ error: "Custom events are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(customEventMatch[1] ?? "");
          const eventName = decodeURIComponent(customEventMatch[2] ?? "");
          const event = options.customEvents?.find((candidate) => candidate.name === eventName);
          if (!event) return json({ error: `Custom event '${eventName}' is not registered with the HTTP handler` }, 404, options);
          const body = await readJson<CreateRuntimeEventBody>(request);
          const emitted = await options.runtime.emitCustomEvent({
            conversationId,
            event,
            payload: body.payload,
            ...(body.traceId ? { traceId: body.traceId } : {}),
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
          const body = await readJson<CreateJourneyEventBody>(request);
          const result = await options.runtime.emitJourneyEvent({
            conversationId,
            event,
            payload: body.payload,
            ...(body.routing ? { routing: body.routing } : {}),
            ...(body.target ? { target: body.target } : {}),
            ...(body.app !== undefined ? { app: body.app } : {}),
            ...(body.traceId ? { traceId: body.traceId } : {}),
            signal: request.signal,
          });
          return json(result, 200, options);
        }

        const handoffMatch = path.match(/^\/conversations\/([^/]+)\/handoff$/);
        if (request.method === "POST" && handoffMatch) {
          if (!options.runtime.requestHandoff) return json({ error: "Handoff is not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(handoffMatch[1] ?? "");
          const body = await readJson<CreateHandoffBody>(request);
          if (!body.reason) return json({ error: "reason is required" }, 400, options);
          const result = await options.runtime.requestHandoff({
            conversationId,
            reason: body.reason,
            ...(body.summary ? { summary: body.summary } : {}),
            ...(body.payload !== undefined ? { payload: body.payload } : {}),
          });
          return json(result, 200, options);
        }

        const closeMatch = path.match(/^\/conversations\/([^/]+)\/close$/);
        if (request.method === "POST" && closeMatch) {
          if (!options.runtime.closeConversation) return json({ error: "Conversation closure is not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(closeMatch[1] ?? "");
          const body = await readJson<CreateCloseBody>(request);
          const conversation = await options.runtime.closeConversation(
            conversationId,
            body.reason,
          );
          return json({ conversation }, 200, options);
        }

        const resumeMatch = path.match(/^\/conversations\/([^/]+)\/resume$/);
        if (request.method === "POST" && resumeMatch) {
          if (!options.runtime.resumeConversation) return json({ error: "Conversation resume is not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(resumeMatch[1] ?? "");
          const body = await readJson<CreateResumeBody>(request);
          const result = await options.runtime.resumeConversation({
            conversationId,
            ...(body.reason ? { reason: body.reason } : {}),
            ...(body.payload !== undefined ? { payload: body.payload } : {}),
          });
          return json(result, 200, options);
        }

        const intermediateMessageMatch = path.match(/^\/conversations\/([^/]+)\/intermediate-messages$/);
        if (request.method === "POST" && intermediateMessageMatch) {
          if (!options.runtime.emitIntermediateMessage) return json({ error: "Intermediate messages are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(intermediateMessageMatch[1] ?? "");
          const body = await readJson<CreateIntermediateMessageBody>(request);
          if (!body.text) return json({ error: "text is required" }, 400, options);
          const result = await options.runtime.emitIntermediateMessage({
            conversationId,
            text: body.text,
            ...(body.traceId ? { traceId: body.traceId } : {}),
          });
          return json(result, 200, options);
        }

        const preambleMatch = path.match(/^\/conversations\/([^/]+)\/preambles$/);
        if (request.method === "POST" && preambleMatch) {
          if (!options.runtime.emitGeneratedPreamble) return json({ error: "Generated preambles are not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(preambleMatch[1] ?? "");
          const body = await readJson<CreateGeneratedPreambleBody>(request);
          const result = await options.runtime.emitGeneratedPreamble({
            conversationId,
            ...(body.purpose ? { purpose: body.purpose } : {}),
            ...(body.maxWords !== undefined ? { maxWords: body.maxWords } : {}),
            ...(body.traceId ? { traceId: body.traceId } : {}),
            signal: request.signal,
          });
          return json(result, 200, options);
        }

        const compactionMatch = path.match(/^\/conversations\/([^/]+)\/compact$/);
        if (request.method === "POST" && compactionMatch) {
          if (!options.runtime.compactConversation) return json({ error: "Conversation compaction is not supported by this runtime" }, 501, options);
          const conversationId = decodeURIComponent(compactionMatch[1] ?? "");
          const body = await readJson<CreateCompactionBody>(request);
          const result = await options.runtime.compactConversation({
            conversationId,
            ...(body.fromOffset !== undefined ? { fromOffset: body.fromOffset } : {}),
            ...(body.toOffset !== undefined ? { toOffset: body.toOffset } : {}),
            ...(body.schemaVersion ? { schemaVersion: body.schemaVersion } : {}),
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
        return json({
          error: error instanceof Error ? error.message : "Unknown error",
        }, 500, options);
      }
    },
  };
}
