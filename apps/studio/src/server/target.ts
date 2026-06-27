import { randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";
import {
  StudioAgentIntrospectionSchema,
  StudioConfigurationSurfaceSchema,
  StudioConversationSummarySchema,
  StudioDashboardDataQuerySchema,
  StudioTargetManifestSchema,
  type StudioAgentIntrospection,
  type StudioConfigurationSurface,
  type StudioConversationSummary,
  type StudioDashboardDataQuery,
  type StudioTargetManifest,
} from "@cognidesk/studio-contracts";
import { audit } from "@/server/audit";
import { loadStudioTargetManifest, studioEnv } from "@/server/config";
import { db, ensureStudioDatabase } from "@/server/db/client";
import { studioTargets } from "@/server/db/schema";
import { createStudioAdapterHeaders } from "@/server/target-adapter-auth";
import type { StudioConversationRow } from "@/components/studio/types";

const MAX_TARGET_CONVERSATIONS = 1000;

export async function ensureDefaultTarget(userId?: string | null): Promise<StudioTargetManifest> {
  await ensureStudioDatabase();
  const manifest = loadStudioTargetManifest();
  const now = new Date();
  await db.insert(studioTargets).values({
    id: manifest.target.id,
    name: manifest.target.name,
    environment: manifest.target.environment,
    manifestJson: JSON.stringify(manifest),
    overlayJson: null,
    effectiveManifestJson: JSON.stringify(manifest),
    createdAt: now,
    updatedAt: now,
  }).onConflictDoUpdate({
    target: studioTargets.id,
    set: {
      name: manifest.target.name,
      environment: manifest.target.environment,
      manifestJson: JSON.stringify(manifest),
      effectiveManifestJson: JSON.stringify(manifest),
      updatedAt: now,
    },
  });
  await audit({
    ...(userId !== undefined ? { userId } : {}),
    targetId: manifest.target.id,
    action: "studio.target.synced",
    subjectType: "studio_target",
    subjectId: manifest.target.id,
    metadata: { source: "manifest" },
  });
  return manifest;
}

export async function currentTarget() {
  await ensureStudioDatabase();
  const [target] = await db.select().from(studioTargets).limit(1);
  if (!target) return ensureDefaultTarget(null);
  return StudioTargetManifestSchema.parse(JSON.parse(target.effectiveManifestJson) as unknown);
}

export async function targetHealth() {
  const manifest = await currentTarget();
  const start = performance.now();
  try {
    const response = await adapterFetch(manifest, "/health");
    return {
      ok: response.ok,
      status: response.status,
      latencyMs: Math.round(performance.now() - start),
      body: await safeJson(response),
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      latencyMs: Math.round(performance.now() - start),
      body: { error: error instanceof Error ? error.message : "Connection failed" },
    };
  }
}

export async function fetchIntrospection(): Promise<StudioAgentIntrospection> {
  const manifest = await currentTarget();
  const response = await adapterFetch(manifest, "/introspection");
  if (!response.ok) throw new Error(`Studio Adapter returned ${response.status}`);
  return StudioAgentIntrospectionSchema.parse(await response.json());
}

export async function fetchConfigurationSurface(): Promise<StudioConfigurationSurface> {
  const manifest = await currentTarget();
  const response = await adapterFetch(manifest, "/configuration");
  if (!response.ok) throw new Error(`Studio Adapter configuration returned ${response.status}`);
  return StudioConfigurationSurfaceSchema.parse(await response.json());
}

export async function fetchTargetConversations(
  options: { limit?: number; offset?: number; agentId?: string; lifecycle?: StudioConversationRow["lifecycle"] } = {},
): Promise<StudioConversationRow[]> {
  const manifest = await currentTarget();
  const params = new URLSearchParams();
  params.set("limit", String(clampInt(options.limit ?? 50, 1, MAX_TARGET_CONVERSATIONS)));
  if (options.offset !== undefined) params.set("offset", String(clampInt(options.offset, 0, 100000)));
  if (options.agentId) params.set("agentId", options.agentId);
  const response = await adapterFetch(manifest, `/conversations?${params.toString()}`);
  if (!response.ok) throw new Error(`Studio Adapter conversations returned ${response.status}`);
  const body = await response.json() as unknown;
  const conversationsPayload = isRecord(body) ? body.conversations : undefined;
  if (!Array.isArray(conversationsPayload)) throw new Error("Studio Adapter conversations response is missing conversations array.");
  const conversations = StudioConversationSummarySchema.array().parse(conversationsPayload);
  const rows = conversations.map(studioConversationRowFromSummary);
  return options.lifecycle ? rows.filter((row) => row.lifecycle === options.lifecycle) : rows;
}

export async function fetchTargetConversation(conversationId: string): Promise<StudioConversationRow> {
  const manifest = await currentTarget();
  const response = await adapterFetch(manifest, `/conversations/${encodeURIComponent(conversationId)}`);
  if (!response.ok) throw new Error(`Studio Adapter conversation returned ${response.status}`);
  const body = await response.json() as unknown;
  const conversationPayload = isRecord(body) ? body.conversation : undefined;
  const conversation = StudioConversationSummarySchema.parse(conversationPayload);
  return studioConversationRowFromSummary(conversation);
}

export async function fetchConversationEvents(conversationId: string, afterOffset = 0) {
  const manifest = await currentTarget();
  const response = await adapterFetch(manifest, `/conversations/${encodeURIComponent(conversationId)}/events?afterOffset=${afterOffset}`);
  if (!response.ok) throw new Error(`Studio Adapter events returned ${response.status}`);
  return await response.json() as { events: unknown[] };
}

export async function fetchConversationSnapshot(conversationId: string) {
  const manifest = await currentTarget();
  const response = await adapterFetch(manifest, `/conversations/${encodeURIComponent(conversationId)}/snapshot`);
  if (!response.ok) throw new Error(`Studio Adapter snapshot returned ${response.status}`);
  return await response.json() as { snapshot: unknown };
}

export async function queryDashboardData(query: StudioDashboardDataQuery) {
  const parsed = StudioDashboardDataQuerySchema.parse(query);
  const manifest = await currentTarget();
  if (parsed.targetId !== manifest.target.id) {
    throw new Error(`Dashboard data targetId '${parsed.targetId}' does not match current Studio target '${manifest.target.id}'.`);
  }
  switch (parsed.capability) {
    case "cognidesk.agent":
      return {
        id: randomUUID(),
        title: "Compiled Agent",
        source: parsed,
        capturedAt: new Date().toISOString(),
        data: await fetchIntrospection(),
      };
    case "cognidesk.configuration":
      return {
        id: randomUUID(),
        title: "Studio Configuration Surface",
        source: parsed,
        capturedAt: new Date().toISOString(),
        data: await fetchConfigurationSurface(),
      };
    case "cognidesk.conversations":
      const agentId = stringParam(parsed.params.agentId);
      const lifecycle = lifecycleParam(parsed.params.lifecycle);
      return {
        id: randomUUID(),
        title: "Studio Conversations",
        source: parsed,
        capturedAt: new Date().toISOString(),
        data: await fetchTargetConversations({
          limit: numberParam(parsed.params.limit) ?? 1000,
          offset: numberParam(parsed.params.offset) ?? 0,
          ...(agentId ? { agentId } : {}),
          ...(lifecycle ? { lifecycle } : {}),
        }),
      };
    case "cognidesk.events": {
      const conversationId = stringParam(parsed.params.conversationId);
      if (!conversationId) throw new Error("conversationId is required for cognidesk.events");
      return {
        id: randomUUID(),
        title: "Runtime Events",
        source: parsed,
        capturedAt: new Date().toISOString(),
        data: await fetchConversationEvents(conversationId, numberParam(parsed.params.afterOffset) ?? 0),
      };
    }
    case "cognidesk.snapshots": {
      const conversationId = stringParam(parsed.params.conversationId);
      if (!conversationId) throw new Error("conversationId is required for cognidesk.snapshots");
      return {
        id: randomUUID(),
        title: "Runtime Snapshot",
        source: parsed,
        capturedAt: new Date().toISOString(),
        data: await fetchConversationSnapshot(conversationId),
      };
    }
    case "telemetry.metrics":
      return queryMetricData(parsed);
    case "telemetry.traces":
      return queryTraceData(parsed);
  }
}

async function queryMetricData(query: StudioDashboardDataQuery) {
  const manifest = await currentTarget();
  const source = manifest.telemetry.sources.find((candidate) => candidate.kind === "prometheus");
  if (!source) throw new Error("No Prometheus telemetry source configured");
  const expression = stringParam(query.params.query) ?? "sum(rate(cognidesk_runtime_operations_total[5m]))";
  const wantsRange = query.params.start !== undefined
    || query.params.end !== undefined
    || query.params.step !== undefined
    || query.params.rangeSeconds !== undefined;
  const url = new URL(wantsRange ? "/api/v1/query_range" : "/api/v1/query", source.baseUrl);
  url.searchParams.set("query", expression);
  if (wantsRange) {
    const end = numberParam(query.params.end) ?? Math.floor(Date.now() / 1000);
    const rangeSeconds = numberParam(query.params.rangeSeconds) ?? 3600;
    const start = numberParam(query.params.start) ?? end - rangeSeconds;
    const step = numberParam(query.params.step) ?? Math.max(15, Math.floor(rangeSeconds / 60));
    url.searchParams.set("start", String(start));
    url.searchParams.set("end", String(end));
    url.searchParams.set("step", String(step));
  }
  const response = await fetch(url, source.headers ? { headers: source.headers } : {});
  if (!response.ok) throw new Error(`Metric source returned ${response.status}`);
  return {
    id: randomUUID(),
    title: "Telemetry Metrics",
    source: query,
    capturedAt: new Date().toISOString(),
    data: await response.json(),
  };
}

async function queryTraceData(query: StudioDashboardDataQuery) {
  const manifest = await currentTarget();
  const source = manifest.telemetry.sources.find((candidate) => candidate.kind === "tempo");
  if (!source) throw new Error("No Tempo telemetry source configured");
  const url = new URL("/api/search", source.baseUrl);
  const serviceName = stringParam(query.params.serviceName) ?? "cognidesk-flight-demo";
  url.searchParams.set("tags", `service.name=${serviceName}`);
  const response = await fetch(url, source.headers ? { headers: source.headers } : {});
  if (!response.ok) throw new Error(`Trace source returned ${response.status}`);
  return {
    id: randomUUID(),
    title: "Telemetry Traces",
    source: query,
    capturedAt: new Date().toISOString(),
    data: await response.json(),
  };
}

async function adapterFetch(manifest: StudioTargetManifest, path: string, init: RequestInit = {}) {
  const env = studioEnv();
  if (!env.targetServiceToken) {
    throw new Error("COGNIDESK_STUDIO_TARGET_TOKEN is required for Studio target adapter calls outside local development.");
  }
  const basePath = manifest.runtime.studioAdapterBasePath.replace(/\/+$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  const headers = createStudioAdapterHeaders(manifest, env.targetServiceToken, init.headers);
  return await fetch(new URL(`${basePath}${suffix}`, manifest.runtime.baseUrl), {
    ...init,
    headers,
    cache: "no-store",
  });
}

async function safeJson(response: Response) {
  try {
    return await response.json() as unknown;
  } catch {
    return null;
  }
}

function stringParam(value: unknown) {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function numberParam(value: unknown) {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function studioConversationRowFromSummary(summary: StudioConversationSummary): StudioConversationRow {
  return {
    id: summary.id,
    agentId: summary.agentId,
    lifecycle: summary.lifecycle,
    customerLabel: `Conversation ${summary.id.slice(0, 8)}`,
    summary: summarizeTargetConversation(summary),
    createdAt: summary.createdAt,
    updatedAt: summary.updatedAt,
    ...(summary.activeJourneyId ? { activeJourneyId: summary.activeJourneyId } : {}),
    activeStateIds: summary.activeStateIds,
    traceIds: summary.traceIds,
    ...(summary.eventCount !== undefined ? { eventCount: summary.eventCount } : {}),
    ...(summary.tokenUsage ? { tokenUsage: summary.tokenUsage } : {}),
    satisfaction: "neutral",
  };
}

function lifecycleParam(value: unknown): StudioConversationRow["lifecycle"] | undefined {
  return value === "active" || value === "handoff" || value === "closed" ? value : undefined;
}

function summarizeTargetConversation(summary: StudioConversationSummary) {
  const journey = summary.activeJourneyId ? ` in ${summary.activeJourneyId}` : "";
  const states = summary.activeStateIds.length ? `; states: ${summary.activeStateIds.join(", ")}` : "";
  const events = summary.eventCount === undefined ? "event count unavailable" : `${summary.eventCount} events`;
  return `${labelLifecycle(summary.lifecycle)} ${summary.agentId} conversation${journey} (${events}${states}).`;
}

function labelLifecycle(value: string) {
  return value[0]?.toUpperCase() + value.slice(1);
}

function clampInt(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.trunc(value)));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
