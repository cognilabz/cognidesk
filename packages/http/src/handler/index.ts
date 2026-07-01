import { defineChannelContext, type AgentChatStartAction, type AgentChatStartBehavior, type ConversationRecord, type RuntimeEvent, type RuntimePrivacySettings } from "@cognidesk/core";
import { parseOptionalInteger, normalizeBasePath, stripBasePath } from "../path.js";
import { emptyResponse, HttpInputError, json, type ResponseOptions } from "../responses.js";
import { streamEvents } from "../sse.js";
import { authorizeRequest } from "./auth.js";
import {
  handleChannelEvent,
  hasHandleChannelEvent,
  readChannelEventInput,
  sendMessageResultFromChannelEvent,
} from "./channel-events.js";
import {
  hasResolveChannelOutput,
  readChannelOutputResolutionInput,
} from "./channel-output.js";
import { internalErrorMessage } from "./errors.js";
import {
  optionalChannel,
  optionalChannelProperty,
  optionalNonNegativeNumber,
  optionalRouting,
  optionalString,
  optionalStringProperty,
  optionalTarget,
  optionalVoiceClient,
} from "./optional.js";
import { isRecord, readObject } from "./body.js";
import { withVoiceEventsUrl } from "./voice.js";
import type {
  CognideskHttpHandler,
  CognideskHttpHandlerOptions,
  CreateChannelEventBody,
  ResolveChannelOutputBody,
} from "../types.js";

export function createCognideskHttpHandler(options: CognideskHttpHandlerOptions): CognideskHttpHandler {
  const basePath = normalizeBasePath(options.basePath ?? "");
  const pollIntervalMs = options.ssePollIntervalMs ?? 500;

  return {
    async handle(request) {
      const responseOptions = {
        request,
        ...(options.cors !== undefined ? { cors: options.cors } : {}),
      } satisfies ResponseOptions;

      try {
        const url = new URL(request.url);
        const path = stripBasePath(url.pathname, basePath);
        if (path === null) return json({ error: "Not found" }, 404, responseOptions);

        if (request.method === "OPTIONS" && options.cors) {
          return emptyResponse(204, responseOptions);
        }

        const authorizationResponse = await authorizeRequest(options, { request, url, path }, responseOptions);
        if (authorizationResponse) return authorizationResponse;

        if (request.method === "GET" && path === "/conversations") {
          if (!options.runtime.listConversations) return json({ error: "Conversation listing is not supported by this runtime" }, 501, responseOptions);
          const limit = parseOptionalInteger(url.searchParams.get("limit"), "limit");
          const agentId = optionalSearchString(url.searchParams, "agentId");
          const customerId = optionalSearchString(url.searchParams, "customerId");
          const beforeUpdatedAt = optionalSearchString(url.searchParams, "beforeUpdatedAt") ?? optionalSearchString(url.searchParams, "before");
          const afterUpdatedAt = optionalSearchString(url.searchParams, "afterUpdatedAt") ?? optionalSearchString(url.searchParams, "after");
          const beforeId = optionalSearchString(url.searchParams, "beforeId");
          const afterId = optionalSearchString(url.searchParams, "afterId");
          if ((beforeId && !beforeUpdatedAt) || (beforeUpdatedAt && beforeId === undefined && url.searchParams.has("beforeId"))) {
            throw new HttpInputError("beforeUpdatedAt and beforeId must be provided together.");
          }
          if ((afterId && !afterUpdatedAt) || (afterUpdatedAt && afterId === undefined && url.searchParams.has("afterId"))) {
            throw new HttpInputError("afterUpdatedAt and afterId must be provided together.");
          }
          const conversations = await options.runtime.listConversations({
            ...(agentId ? { agentId } : {}),
            ...(customerId ? { customerId } : {}),
            ...(beforeUpdatedAt && beforeId ? { before: { updatedAt: beforeUpdatedAt, id: beforeId } } : {}),
            ...(afterUpdatedAt && afterId ? { after: { updatedAt: afterUpdatedAt, id: afterId } } : {}),
            ...(beforeUpdatedAt && !beforeId ? { beforeUpdatedAt } : {}),
            ...(afterUpdatedAt && !afterId ? { afterUpdatedAt } : {}),
            ...(limit !== undefined ? { limit } : {}),
          });
          return json({ conversations }, 200, responseOptions);
        }

        if (request.method === "POST" && path === "/conversations") {
          const body = await readObject(request);
          const agentId = optionalString(body, "agentId") ?? options.agentId;
          if (!agentId) return json({ error: "agentId is required" }, 400, responseOptions);
          const conversation = await options.runtime.createConversation({
            ...optionalStringProperty(body, "id"),
            agentId,
            ...optionalChannelProperty(body),
            context: body.context ?? {},
            ...(body.privacy !== undefined ? { privacy: body.privacy as RuntimePrivacySettings } : {}),
          });
          const events = await emitChatStartEvents({
            runtime: options.runtime,
            conversation,
            behavior: hasOwnProperty(body, "chatStart") ? chatStartBehaviorFromBody(body) : options.chatStart,
            app: body.app,
          });
          return json({
            conversation,
            ...(events.length > 0 ? { events } : {}),
          }, 201, responseOptions);
        }

        const conversationMatch = path.match(/^\/conversations\/([^/]+)$/);
        if (conversationMatch) {
          const conversationId = decodeURIComponent(conversationMatch[1] ?? "");
          if (request.method === "GET") {
            if (!options.runtime.getConversation) return json({ error: "Conversation retrieval is not supported by this runtime" }, 501, responseOptions);
            const conversation = await options.runtime.getConversation(conversationId);
            if (!conversation) return json({ error: "Conversation not found" }, 404, responseOptions);
            return json({ conversation }, 200, responseOptions);
          }

          if (request.method === "PATCH") {
            if (!options.runtime.updateConversationContext) return json({ error: "Conversation context updates are not supported by this runtime" }, 501, responseOptions);
            const body = await readObject(request);
            if (!hasOwnProperty(body, "context")) throw new HttpInputError("context is required.");
            const conversation = await options.runtime.updateConversationContext({
              conversationId,
              context: body.context,
            });
            if (!conversation) return json({ error: "Conversation not found" }, 404, responseOptions);
            return json({ conversation }, 200, responseOptions);
          }

          if (request.method === "DELETE") {
            if (!options.runtime.deleteConversation) return json({ error: "Conversation deletion is not supported by this runtime" }, 501, responseOptions);
            const deleted = await options.runtime.deleteConversation(conversationId);
            if (!deleted) return json({ error: "Conversation not found" }, 404, responseOptions);
            return emptyResponse(204, responseOptions);
          }
        }

        if (request.method === "POST" && path === "/channel-events") {
          const body = await readObject(request) as CreateChannelEventBody;
          const input = readChannelEventInput(body, request.signal);
          const result = await handleChannelEvent(options, input, responseOptions);
          if (result instanceof Response) return result;
          return json(result, 200, responseOptions);
        }

        if (request.method === "POST" && path === "/channel-outputs/resolve") {
          if (!hasResolveChannelOutput(options.runtime)) {
            return json({ error: "Channel Output resolution is not supported by this runtime" }, 501, responseOptions);
          }
          const body = await readObject(request) as ResolveChannelOutputBody;
          const input = readChannelOutputResolutionInput(body, request.signal);
          const result = await options.runtime.resolveChannelOutput(input);
          return json(result, 200, responseOptions);
        }

        if (request.method === "POST" && path === "/voice/conversations") {
          if (!options.runtime.startVoiceConversation) return json({ error: "Voice conversations are not supported by this runtime" }, 501, responseOptions);
          if (!options.voice?.createSocket) return json({ error: "Voice socket handshakes are not configured" }, 501, responseOptions);
          const body = await readObject(request);
          const agentId = optionalString(body, "agentId") ?? options.agentId;
          if (!agentId) return json({ error: "agentId is required" }, 400, responseOptions);
          const requestChatStart = hasOwnProperty(body, "chatStart") ? chatStartBehaviorFromBody(body) : undefined;
          const result = await options.runtime.startVoiceConversation({
            ...optionalStringProperty(body, "id"),
            agentId,
            context: body.context ?? {},
            ...(body.privacy !== undefined ? { privacy: body.privacy as RuntimePrivacySettings } : {}),
            ...optionalVoiceClient(body),
            ...(body.app !== undefined ? { app: body.app } : {}),
          });
          const events = await emitChatStartEvents({
            runtime: options.runtime,
            conversation: result.conversation,
            behavior: hasOwnProperty(body, "chatStart") ? requestChatStart : options.chatStart,
            app: body.app,
          });
          const socket = await options.voice.createSocket({
            result,
            request,
            basePath,
            ...optionalInitialGreeting(body, requestChatStart),
          });
          return json(withVoiceEventsUrl({
            ...result,
            socket,
            events: [...result.events, ...events],
          }, basePath), 201, responseOptions);
        }

        const voiceSegmentMatch = path.match(/^\/conversations\/([^/]+)\/voice-segments$/);
        if (request.method === "POST" && voiceSegmentMatch) {
          if (!options.runtime.startVoiceSegment) return json({ error: "Voice segments are not supported by this runtime" }, 501, responseOptions);
          if (!options.voice?.createSocket) return json({ error: "Voice socket handshakes are not configured" }, 501, responseOptions);
          const conversationId = decodeURIComponent(voiceSegmentMatch[1] ?? "");
          const body = await readObject(request);
          const result = await options.runtime.startVoiceSegment({
            conversationId,
            ...optionalVoiceClient(body),
            ...(body.app !== undefined ? { app: body.app } : {}),
          });
          const socket = await options.voice.createSocket({
            result,
            request,
            basePath,
            ...optionalInitialGreeting(body),
          });
          return json(withVoiceEventsUrl({ ...result, socket }, basePath), 200, responseOptions);
        }

        const messageMatch = path.match(/^\/conversations\/([^/]+)\/messages$/);
        if (request.method === "POST" && messageMatch) {
          const conversationId = decodeURIComponent(messageMatch[1] ?? "");
          const body = await readObject(request);
          const text = optionalString(body, "text") ?? optionalString(body, "message");
          if (!text) return json({ error: "message is required" }, 400, responseOptions);
          const channel = optionalChannel(body, "channel") ?? defineChannelContext("chat");
          if (hasHandleChannelEvent(options.runtime)) {
            const result = await options.runtime.handleChannelEvent({
              conversationId,
              event: {
                channel,
                nature: "message",
                direction: "inbound",
                intent: "customer-message",
                actor: { type: "customer" },
                payload: {
                  text,
                  ...(body.turn !== undefined ? { turn: body.turn } : {}),
                },
              },
              ...(body.turn !== undefined ? { handling: { turn: body.turn } } : {}),
              ...(body.app !== undefined ? { app: body.app } : {}),
              signal: request.signal,
            });
            return json(sendMessageResultFromChannelEvent(result), 200, responseOptions);
          }
          const result = await options.runtime.handleUserMessage({
            conversationId,
            text,
            channel,
            ...(body.turn !== undefined ? { turn: body.turn } : {}),
            ...(body.app !== undefined ? { app: body.app } : {}),
            signal: request.signal,
          });
          return json(result, 200, responseOptions);
        }

        const customEventMatch = path.match(/^\/conversations\/([^/]+)\/custom-events\/([^/]+)$/);
        if (request.method === "POST" && customEventMatch) {
          if (!options.runtime.emitCustomEvent) return json({ error: "Custom events are not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(customEventMatch[1] ?? "");
          const eventName = decodeURIComponent(customEventMatch[2] ?? "");
          const event = options.customEvents?.find((candidate) => candidate.name === eventName);
          if (!event) return json({ error: `Custom event '${eventName}' is not registered with the HTTP handler` }, 404, responseOptions);
          const body = await readObject(request);
          const emitted = await options.runtime.emitCustomEvent({
            conversationId,
            event,
            payload: body.payload,
          });
          return json({ event: emitted }, 200, responseOptions);
        }

        const journeyEventMatch = path.match(/^\/conversations\/([^/]+)\/journey-events\/([^/]+)$/);
        if (request.method === "POST" && journeyEventMatch) {
          if (!options.runtime.emitJourneyEvent) return json({ error: "Journey events are not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(journeyEventMatch[1] ?? "");
          const eventName = decodeURIComponent(journeyEventMatch[2] ?? "");
          const event = options.journeyEvents?.find((candidate) => candidate.name === eventName);
          if (!event) return json({ error: `Journey event '${eventName}' is not registered with the HTTP handler` }, 404, responseOptions);
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
            signal: request.signal,
          });
          return json(result, 200, responseOptions);
        }

        const handoffMatch = path.match(/^\/conversations\/([^/]+)\/handoff$/);
        if (request.method === "POST" && handoffMatch) {
          if (!options.runtime.requestHandoff) return json({ error: "Handoff is not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(handoffMatch[1] ?? "");
          const body = await readObject(request);
          const reason = optionalString(body, "reason");
          if (!reason) return json({ error: "reason is required" }, 400, responseOptions);
          const result = await options.runtime.requestHandoff({
            conversationId,
            reason,
            ...optionalStringProperty(body, "summary"),
            ...(body.payload !== undefined ? { payload: body.payload } : {}),
          });
          return json(result, 200, responseOptions);
        }

        const closeMatch = path.match(/^\/conversations\/([^/]+)\/close$/);
        if (request.method === "POST" && closeMatch) {
          if (!options.runtime.closeConversation) return json({ error: "Conversation closure is not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(closeMatch[1] ?? "");
          const body = await readObject(request);
          const conversation = await options.runtime.closeConversation(
            conversationId,
            optionalString(body, "reason"),
          );
          return json({ conversation }, 200, responseOptions);
        }

        const resumeMatch = path.match(/^\/conversations\/([^/]+)\/resume$/);
        if (request.method === "POST" && resumeMatch) {
          if (!options.runtime.resumeConversation) return json({ error: "Conversation resume is not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(resumeMatch[1] ?? "");
          const body = await readObject(request);
          const result = await options.runtime.resumeConversation({
            conversationId,
            ...optionalStringProperty(body, "reason"),
            ...(body.payload !== undefined ? { payload: body.payload } : {}),
          });
          return json(result, 200, responseOptions);
        }

        const intermediateMessageMatch = path.match(/^\/conversations\/([^/]+)\/intermediate-messages$/);
        if (request.method === "POST" && intermediateMessageMatch) {
          if (!options.runtime.emitIntermediateMessage) return json({ error: "Intermediate messages are not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(intermediateMessageMatch[1] ?? "");
          const body = await readObject(request);
          const text = optionalString(body, "text");
          if (!text) return json({ error: "text is required" }, 400, responseOptions);
          const result = await options.runtime.emitIntermediateMessage({
            conversationId,
            text,
            ...(body.visibleToModel === true ? { visibleToModel: true } : {}),
          });
          return json(result, 200, responseOptions);
        }

        const preambleMatch = path.match(/^\/conversations\/([^/]+)\/preambles$/);
        if (request.method === "POST" && preambleMatch) {
          if (!options.runtime.emitGeneratedPreamble) return json({ error: "Generated preambles are not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(preambleMatch[1] ?? "");
          const body = await readObject(request);
          const maxWords = optionalNonNegativeNumber(body, "maxWords");
          const result = await options.runtime.emitGeneratedPreamble({
            conversationId,
            ...optionalStringProperty(body, "purpose"),
            ...(maxWords !== undefined ? { maxWords } : {}),
            signal: request.signal,
          });
          return json(result, 200, responseOptions);
        }

        const compactionMatch = path.match(/^\/conversations\/([^/]+)\/compact$/);
        if (request.method === "POST" && compactionMatch) {
          if (!options.runtime.compactConversation) return json({ error: "Conversation compaction is not supported by this runtime" }, 501, responseOptions);
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
          return json(result, 200, responseOptions);
        }

        const widgetSubmissionMatch = path.match(/^\/conversations\/([^/]+)\/widgets\/([^/]+)\/submissions$/);
        if (request.method === "POST" && widgetSubmissionMatch) {
          if (!options.runtime.submitWidget) return json({ error: "Widget submissions are not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(widgetSubmissionMatch[1] ?? "");
          const promptId = decodeURIComponent(widgetSubmissionMatch[2] ?? "");
          const body = await readObject(request);
          const widgetKind = optionalString(body, "widgetKind");
          if (!widgetKind) return json({ error: "widgetKind is required" }, 400, responseOptions);
          const event = await options.runtime.submitWidget({
            conversationId,
            promptId,
            widgetKind,
            output: body.output,
          });
          return json({ event }, 200, responseOptions);
        }

        const snapshotMatch = path.match(/^\/conversations\/([^/]+)\/snapshot$/);
        if (request.method === "GET" && snapshotMatch) {
          if (!options.runtime.getSnapshot) return json({ error: "Snapshots are not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(snapshotMatch[1] ?? "");
          const snapshot = await options.runtime.getSnapshot(conversationId);
          return json({ snapshot }, 200, responseOptions);
        }

        const replayMatch = path.match(/^\/conversations\/([^/]+)\/replay$/);
        if (request.method === "GET" && replayMatch) {
          if (!options.runtime.replayConversation) return json({ error: "Event replay is not supported by this runtime" }, 501, responseOptions);
          const conversationId = decodeURIComponent(replayMatch[1] ?? "");
          const afterOffset = parseOptionalInteger(url.searchParams.get("after"));
          const replay = await options.runtime.replayConversation({
            conversationId,
            ...(afterOffset !== undefined ? { afterOffset } : {}),
          });
          return json(replay, 200, responseOptions);
        }

        const eventsMatch = path.match(/^\/conversations\/([^/]+)\/events$/);
        if (request.method === "GET" && eventsMatch) {
          const conversationId = decodeURIComponent(eventsMatch[1] ?? "");
          const afterOffset = parseOptionalInteger(url.searchParams.get("after"));
          const events = await options.runtime.listEvents(conversationId, afterOffset);
          return json({ events }, 200, responseOptions);
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
            responseOptions,
          });
        }

        return json({ error: "Not found" }, 404, responseOptions);
      } catch (error) {
        if (error instanceof HttpInputError) {
          return json({ error: error.message }, error.status, responseOptions);
        }
        return json({
          error: internalErrorMessage(error, options),
        }, 500, responseOptions);
      }
    },
  };
}

async function emitChatStartEvents(input: {
  runtime: CognideskHttpHandlerOptions["runtime"];
  conversation: ConversationRecord;
  behavior: AgentChatStartBehavior | undefined;
  app: unknown;
}): Promise<RuntimeEvent[]> {
  const action = await resolveChatStartAction(input.behavior, input.conversation, input.app);
  if (!action) return [];
  if (typeof action === "string") {
    return emitChatStartMessage(input.runtime, input.conversation.id, { text: action, visibleToModel: true });
  }
  if (action.type === "none") return [];
  if (action.type === "generatedPreamble") {
    if (!input.runtime.emitGeneratedPreamble) throw new HttpInputError("chatStart generatedPreamble requires emitGeneratedPreamble support.");
    const result = await input.runtime.emitGeneratedPreamble({
      conversationId: input.conversation.id,
      ...(action.purpose ? { purpose: action.purpose } : {}),
      ...(action.maxWords !== undefined ? { maxWords: action.maxWords } : {}),
    });
    return result.events;
  }
  return emitChatStartMessage(input.runtime, input.conversation.id, {
    text: action.text,
    visibleToModel: action.visibleToModel ?? true,
  });
}

async function resolveChatStartAction(
  behavior: AgentChatStartBehavior | undefined,
  conversation: ConversationRecord,
  app: unknown,
): Promise<AgentChatStartAction> {
  if (typeof behavior !== "function") return behavior;
  return behavior({
    conversation,
    context: conversation.context,
    ...(conversation.channel ? { channel: conversation.channel } : {}),
    app,
  });
}

async function emitChatStartMessage(
  runtime: CognideskHttpHandlerOptions["runtime"],
  conversationId: string,
  input: { text: string; visibleToModel?: boolean },
) {
  if (!runtime.emitIntermediateMessage) throw new HttpInputError("chatStart message requires emitIntermediateMessage support.");
  const text = input.text.trim();
  if (!text) return [];
  const result = await runtime.emitIntermediateMessage({
    conversationId,
    text,
    ...(input.visibleToModel ? { visibleToModel: true } : {}),
  });
  return result.events;
}

function chatStartBehaviorFromBody(body: Record<string, unknown>): AgentChatStartAction | undefined {
  if (!("chatStart" in body)) return undefined;
  const value = body.chatStart;
  if (value === undefined) return undefined;
  if (value === null || value === false || typeof value === "string") return value;
  if (!isRecord(value)) throw new HttpInputError("chatStart must be a string, false, null, or an object.");
  const type = optionalString(value, "type") ?? "message";
  if (type === "none") return { type: "none" };
  if (type === "generatedPreamble") {
    const maxWords = optionalNonNegativeNumber(value, "maxWords");
    return {
      type,
      ...optionalStringProperty(value, "purpose"),
      ...(maxWords !== undefined ? { maxWords } : {}),
    };
  }
  if (type !== "message") throw new HttpInputError("chatStart.type must be message, generatedPreamble, or none.");
  const text = optionalString(value, "text");
  if (!text) throw new HttpInputError("chatStart.text is required.");
  const visibleToModel = value.visibleToModel;
  if (visibleToModel !== undefined && visibleToModel !== null && typeof visibleToModel !== "boolean") {
    throw new HttpInputError("chatStart.visibleToModel must be a boolean.");
  }
  return {
    type: "message",
    text,
    ...(visibleToModel !== undefined && visibleToModel !== null ? { visibleToModel } : {}),
  };
}

function optionalInitialGreeting(
  body: Record<string, unknown>,
  chatStart?: AgentChatStartAction,
) {
  const initialGreeting = optionalString(body, "initialGreeting") ?? chatStartSpeechText(chatStart);
  return initialGreeting ? { initialGreeting } : {};
}

function chatStartSpeechText(action: AgentChatStartAction | undefined) {
  if (!action) return undefined;
  if (typeof action === "string") return normalizeText(action);
  if (action.type === "message") return normalizeText(action.text);
  return undefined;
}

function normalizeText(text: string) {
  const trimmed = text.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function optionalSearchString(params: URLSearchParams, key: string) {
  const value = params.get(key);
  if (value === null) return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function hasOwnProperty(value: Record<string, unknown>, key: string) {
  return Object.prototype.hasOwnProperty.call(value, key);
}
