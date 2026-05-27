import type {
  AnyTool,
  CognideskRuntime,
  CompiledAgent,
  ConversationRecord,
  KnowledgeSource,
  RuntimeEvent,
  RuntimeSnapshot,
  WidgetDefinition,
} from "@cognidesk/core";
import {
  jsonResponse,
  StudioAgentIntrospectionSchema,
  StudioConversationSummarySchema,
  type StudioAgentIntrospection,
  type StudioConversationSummary,
  type StudioJourneySummary,
  type StudioKnowledgeSummary,
  type StudioToolSummary,
  type StudioWidgetSummary,
} from "@cognidesk/studio-contracts";

export interface StudioAdapterRuntime {
  listEvents(conversationId: string, afterOffset?: number): Promise<RuntimeEvent[]>;
  getSnapshot?(conversationId: string): Promise<RuntimeSnapshot | null>;
}

export interface StudioAdapterConversationSource {
  listConversations?(input: {
    limit: number;
    agentId?: string;
  }): Promise<ConversationRecord[]>;
  getConversation?(conversationId: string): Promise<ConversationRecord | null>;
}

export interface StudioAdapterTelemetrySource {
  listTraceSummaries?(input: {
    traceId?: string;
    limit: number;
  }): Promise<unknown[]>;
  queryMetrics?(input: {
    query: string;
    range?: { from: string; to: string; stepSeconds?: number };
  }): Promise<unknown>;
}

export interface CreateCognideskStudioAdapterOptions {
  targetId: string;
  agent: CompiledAgent;
  runtime: StudioAdapterRuntime | CognideskRuntime;
  conversations?: StudioAdapterConversationSource;
  telemetry?: StudioAdapterTelemetrySource;
  basePath?: string;
  serviceToken?: string;
  cors?: boolean;
}

export interface CognideskStudioAdapter {
  handle(request: Request): Promise<Response>;
  introspect(): StudioAgentIntrospection;
}

export function createCognideskStudioAdapter(options: CreateCognideskStudioAdapterOptions): CognideskStudioAdapter {
  const basePath = normalizeBasePath(options.basePath ?? "/api/studio");
  const cors = options.cors ?? true;

  async function handle(request: Request): Promise<Response> {
    if (request.method === "OPTIONS" && cors) return withCors(new Response(null, { status: 204 }), cors);
    if (!isAuthorized(request, options.serviceToken)) {
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
        return withCors(jsonResponse(introspectAgent(options.targetId, options.agent)), cors);
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
        const limit = coerceLimit(url.searchParams.get("limit"), 50, 250);
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
    introspect: () => introspectAgent(options.targetId, options.agent),
  };
}

export function introspectAgent(targetId: string, agent: CompiledAgent): StudioAgentIntrospection {
  return StudioAgentIntrospectionSchema.parse({
    targetId,
    agent: {
      id: agent.id,
      instructions: agent.instructions,
      logLevel: agent.logLevel,
      journeyCount: agent.journeys.length,
      toolCount: agent.tools.length,
      knowledgeCount: agent.knowledge.length,
      widgetCount: agent.widgets.length,
    },
    journeys: introspectJourneys(agent),
    tools: agent.tools.map(summarizeTool),
    knowledge: agent.knowledge.map(summarizeKnowledge),
    widgets: agent.widgets.map(summarizeWidget),
    capturedAt: new Date().toISOString(),
  });
}

export function introspectJourneys(agent: CompiledAgent): StudioJourneySummary[] {
  return agent.journeys.map((journey) => ({
    id: journey.id,
    kind: journey.kind,
    condition: journey.condition,
    examples: journey.examples,
    tags: journey.tags,
    priority: journey.priority,
    stickiness: journey.stickiness,
    alwaysInclude: journey.alwaysInclude,
    graph: journey.toGraph(),
    mermaid: journey.toMermaid(),
    ...(journey.delegation
      ? {
          delegation: {
            goal: journey.delegation.goal,
            ...(journey.delegation.instructions ? { instructions: journey.delegation.instructions } : {}),
            completeWhen: journey.delegation.completeWhen,
            tools: journey.delegation.tools.map(summarizeTool),
          },
        }
      : {}),
    tools: journey.tools.map(summarizeTool),
    knowledge: journey.knowledge.map(summarizeKnowledge),
  }));
}

function summarizeTool(tool: AnyTool): StudioToolSummary {
  return {
    name: tool.name,
    ...(tool.description ? { description: tool.description } : {}),
    sideEffect: tool.sideEffect,
  };
}

function summarizeKnowledge(source: KnowledgeSource): StudioKnowledgeSummary {
  return { name: source.name };
}

function summarizeWidget(widget: WidgetDefinition): StudioWidgetSummary {
  return { kind: widget.kind };
}

async function summarizeConversation(
  conversation: ConversationRecord,
  runtime: StudioAdapterRuntime | CognideskRuntime,
): Promise<StudioConversationSummary> {
  const [snapshot, events] = await Promise.all([
    runtime.getSnapshot?.(conversation.id) ?? Promise.resolve(null),
    runtime.listEvents(conversation.id, 0).catch(() => []),
  ]);
  const traceIds = new Set<string>();
  for (const event of events) {
    if (event.telemetry?.traceId) traceIds.add(event.telemetry.traceId);
  }
  return StudioConversationSummarySchema.parse({
    id: conversation.id,
    agentId: conversation.agentId,
    lifecycle: conversation.lifecycle,
    createdAt: conversation.createdAt,
    updatedAt: conversation.updatedAt,
    activeJourneyId: snapshot?.activeJourneyId,
    activeStateIds: snapshot?.activeStateIds ?? [],
    eventCount: events.length,
    traceIds: [...traceIds],
  });
}

function isAuthorized(request: Request, serviceToken?: string) {
  if (!serviceToken) return true;
  const authorization = request.headers.get("authorization");
  const studioToken = request.headers.get("x-cognidesk-studio-token");
  return authorization === `Bearer ${serviceToken}` || studioToken === serviceToken;
}

function stripBasePath(pathname: string, basePath: string) {
  if (pathname === basePath) return "/";
  if (!pathname.startsWith(`${basePath}/`)) return null;
  return pathname.slice(basePath.length);
}

function normalizeBasePath(value: string) {
  const prefixed = value.startsWith("/") ? value : `/${value}`;
  return prefixed.replace(/\/+$/, "") || "/";
}

function coerceLimit(value: string | null, fallback: number, max: number) {
  const parsed = Number(value ?? fallback);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(Math.floor(parsed), max);
}

function withCors(response: Response, enabled: boolean) {
  if (!enabled) return response;
  const headers = new Headers(response.headers);
  headers.set("access-control-allow-origin", "*");
  headers.set("access-control-allow-methods", "GET,POST,OPTIONS");
  headers.set("access-control-allow-headers", "authorization,content-type,x-cognidesk-studio-token");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
