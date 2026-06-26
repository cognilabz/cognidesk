import {
  StudioConfigurationMutationRequestSchema,
  StudioConfigurationMutationResultSchema,
  jsonResponse,
} from "@cognidesk/studio-contracts";
import {
  introspectConfiguration,
  mutationRequestId,
  runtimeConfigurationSource,
} from "./configuration.js";
import { summarizeConversation } from "./conversations.js";
import {
  coerceLimit,
  isAuthorized,
  normalizeBasePath,
  stripBasePath,
  withCors,
} from "./http-utils.js";
import {
  introspectAgent,
  introspectJourneys,
} from "./introspection.js";
import type {
  CognideskStudioAdapter,
  CreateCognideskStudioAdapterOptions,
} from "./types.js";

const MAX_CONVERSATIONS_LIMIT = 1000;

export function createCognideskStudioAdapter(options: CreateCognideskStudioAdapterOptions): CognideskStudioAdapter {
  const basePath = normalizeBasePath(options.basePath ?? "/api/studio");
  const cors = options.cors ?? true;
  const serviceToken = options.serviceToken?.trim();
  const allowUnauthenticated = options.allowUnauthenticated === true;
  if (!serviceToken && !allowUnauthenticated) {
    throw new Error("Studio adapter requires serviceToken unless allowUnauthenticated is true for local development.");
  }

  async function handle(request: Request): Promise<Response> {
    if (request.method === "OPTIONS" && cors) return withCors(new Response(null, { status: 204 }), cors);
    if (!isAuthorized(request, serviceToken, allowUnauthenticated)) {
      return withCors(jsonResponse({ error: "Unauthorized" }, { status: 401 }), cors);
    }

    const url = new URL(request.url);
    const path = stripBasePath(url.pathname, basePath);
    if (!path) return withCors(jsonResponse({ error: "Not found" }, { status: 404 }), cors);

    try {
      if (request.method === "GET" && path === "/health") {
        return withCors(jsonResponse({
          ok: true,
          targetId: options.targetId,
          agentId: options.agent.id,
          capturedAt: new Date().toISOString(),
        }), cors);
      }

      if (request.method === "GET" && (path === "/introspection" || path === "/agent")) {
        return withCors(jsonResponse(introspectAgent(
          options.targetId,
          options.agent,
          options.configuration,
          runtimeConfigurationSource(options.runtime),
        )), cors);
      }

      if (request.method === "GET" && path === "/configuration") {
        return withCors(jsonResponse(introspectConfiguration(
          options.targetId,
          options.agent,
          options.configuration,
          runtimeConfigurationSource(options.runtime),
        )), cors);
      }

      if (request.method === "POST" && path === "/configuration/changes") {
        if (!options.configuration?.updateConfiguration) {
          return withCors(jsonResponse({
            requestId: "unsupported",
            targetId: options.targetId,
            accepted: false,
            applied: false,
            status: "unsupported",
            message: "This Studio Adapter target does not support configuration mutation.",
            blockers: [{
              code: "configuration-mutation-unsupported",
              message: "The SDK host must provide configuration.updateConfiguration to accept Studio configuration changes.",
              kind: "missing-configuration",
            }],
          }, { status: 501 }), cors);
        }

        const body = StudioConfigurationMutationRequestSchema.parse(await request.json());
        if (body.targetId !== options.targetId) {
          return withCors(jsonResponse({
            requestId: body.requestId ?? "target-mismatch",
            targetId: options.targetId,
            accepted: false,
            applied: false,
            status: "validation-failed",
            message: `Mutation target '${body.targetId}' does not match adapter target '${options.targetId}'.`,
            blockers: [{
              code: "target-mismatch",
              message: `Mutation target '${body.targetId}' does not match adapter target '${options.targetId}'.`,
              kind: "validation",
            }],
          }, { status: 400 }), cors);
        }

        const result = await options.configuration.updateConfiguration({
          ...body,
          requestId: body.requestId ?? mutationRequestId(),
        });
        return withCors(jsonResponse(StudioConfigurationMutationResultSchema.parse(result), {
          status: result.accepted ? 202 : 400,
        }), cors);
      }

      if (request.method === "GET" && path === "/journeys") {
        return withCors(jsonResponse({ journeys: introspectJourneys(options.agent) }), cors);
      }

      const journeyMatch = path.match(/^\/journeys\/([^/]+)$/);
      if (request.method === "GET" && journeyMatch) {
        const journeyId = decodeURIComponent(journeyMatch[1] ?? "");
        const journey = introspectJourneys(options.agent).find((candidate) => candidate.id === journeyId);
        return withCors(journey
          ? jsonResponse({ journey })
          : jsonResponse({ error: "Journey not found" }, { status: 404 }), cors);
      }

      if (request.method === "GET" && path === "/conversations") {
        const limit = coerceLimit(url.searchParams.get("limit"), 50, MAX_CONVERSATIONS_LIMIT);
        const agentId = url.searchParams.get("agentId") ?? undefined;
        const conversations = options.conversations?.listConversations
          ? await options.conversations.listConversations({
              limit,
              ...(agentId ? { agentId } : {}),
            })
          : [];
        const summaries = await Promise.all(conversations.map((conversation) => summarizeConversation(conversation, options.runtime)));
        return withCors(jsonResponse({ conversations: summaries }), cors);
      }

      const conversationMatch = path.match(/^\/conversations\/([^/]+)$/);
      if (request.method === "GET" && conversationMatch) {
        const conversationId = decodeURIComponent(conversationMatch[1] ?? "");
        const conversation = options.conversations?.getConversation
          ? await options.conversations.getConversation(conversationId)
          : null;
        if (!conversation) return withCors(jsonResponse({ error: "Conversation not found" }, { status: 404 }), cors);
        const summary = await summarizeConversation(conversation, options.runtime);
        return withCors(jsonResponse({ conversation: summary }), cors);
      }

      const eventsMatch = path.match(/^\/conversations\/([^/]+)\/events$/);
      if (request.method === "GET" && eventsMatch) {
        const conversationId = decodeURIComponent(eventsMatch[1] ?? "");
        const afterOffset = Number(url.searchParams.get("afterOffset") ?? "0");
        const events = await options.runtime.listEvents(conversationId, Number.isFinite(afterOffset) ? afterOffset : 0);
        return withCors(jsonResponse({ events }), cors);
      }

      const snapshotMatch = path.match(/^\/conversations\/([^/]+)\/snapshot$/);
      if (request.method === "GET" && snapshotMatch) {
        const conversationId = decodeURIComponent(snapshotMatch[1] ?? "");
        const snapshot = options.runtime.getSnapshot
          ? await options.runtime.getSnapshot(conversationId)
          : null;
        return withCors(jsonResponse({ snapshot }), cors);
      }

      if (request.method === "POST" && path === "/telemetry/metrics/query") {
        if (!options.telemetry?.queryMetrics) {
          return withCors(jsonResponse({ error: "Telemetry metrics are not configured" }, { status: 501 }), cors);
        }
        const body = await request.json() as { query?: string; range?: { from: string; to: string; stepSeconds?: number } };
        if (!body.query) return withCors(jsonResponse({ error: "Missing query" }, { status: 400 }), cors);
        const result = await options.telemetry.queryMetrics({
          query: body.query,
          ...(body.range ? { range: body.range } : {}),
        });
        return withCors(jsonResponse({ result }), cors);
      }

      if (request.method === "GET" && path === "/telemetry/traces") {
        if (!options.telemetry?.listTraceSummaries) {
          return withCors(jsonResponse({ traces: [] }), cors);
        }
        const traces = await options.telemetry.listTraceSummaries({
          limit: coerceLimit(url.searchParams.get("limit"), 50, 250),
          ...(url.searchParams.get("traceId") ? { traceId: url.searchParams.get("traceId") as string } : {}),
        });
        return withCors(jsonResponse({ traces }), cors);
      }

      return withCors(jsonResponse({ error: "Not found" }, { status: 404 }), cors);
    } catch (error) {
      return withCors(jsonResponse({
        error: error instanceof Error ? error.message : "Studio adapter error",
      }, { status: 500 }), cors);
    }
  }

  return {
    handle,
    introspect: () => introspectAgent(
      options.targetId,
      options.agent,
      options.configuration,
      runtimeConfigurationSource(options.runtime),
    ),
  };
}
