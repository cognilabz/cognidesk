import { randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";
import {
  StudioAgentIntrospectionSchema,
  StudioConfigurationSurfaceSchema,
  StudioConfigurationMutationResultSchema,
  StudioConversationSummarySchema,
  StudioDashboardDataQuerySchema,
  StudioDataQuerySchema,
  StudioTargetManifestSchema,
  type StudioAgentIntrospection,
  type StudioConfigurationSurface,
  type StudioConfigurationMutationOperation,
  type StudioConfigurationMutationResult,
  type StudioConversationSummary,
  type StudioDashboardDataQuery,
  type StudioDataQuery,
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

export async function requestConfigurationChange(input: {
  reason: string;
  operations: StudioConfigurationMutationOperation[];
  actor?: { id?: string; role?: string };
}): Promise<{ status: number; result: StudioConfigurationMutationResult }> {
  const manifest = await currentTarget();
  const response = await adapterFetch(manifest, "/configuration/changes", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      requestId: randomUUID(),
      targetId: manifest.target.id,
      reason: input.reason,
      operations: input.operations,
      ...(input.actor ? { actor: input.actor } : {}),
    }),
  });
  const result = StudioConfigurationMutationResultSchema.parse(await response.json());
  return { status: response.status, result };
}

export async function fetchTargetConversations(
  options: { limit?: number; offset?: number; agentId?: string; lifecycle?: StudioConversationRow["lifecycle"] } = {},
): Promise<StudioConversationRow[]> {
  const manifest = await currentTarget();
  const requestedLimit = clampInt(options.limit ?? 50, 1, MAX_TARGET_CONVERSATIONS);
  const requestedOffset = clampInt(options.offset ?? 0, 0, MAX_TARGET_CONVERSATIONS);
  const adapterLimit = options.lifecycle
    ? MAX_TARGET_CONVERSATIONS
    : clampInt(requestedLimit + requestedOffset, 1, MAX_TARGET_CONVERSATIONS);
  const params = new URLSearchParams();
  params.set("limit", String(adapterLimit));
  if (options.agentId) params.set("agentId", options.agentId);
  const response = await adapterFetch(manifest, `/conversations?${params.toString()}`);
  if (!response.ok) throw new Error(`Studio Adapter conversations returned ${response.status}`);
  const body = await response.json() as unknown;
  const conversationsPayload = isRecord(body) ? body.conversations : undefined;
  if (!Array.isArray(conversationsPayload)) throw new Error("Studio Adapter conversations response is missing conversations array.");
  const conversations = StudioConversationSummarySchema.array().parse(conversationsPayload);
  const rows = conversations.map(studioConversationRowFromSummary);
  const filteredRows = options.lifecycle ? rows.filter((row) => row.lifecycle === options.lifecycle) : rows;
  return filteredRows.slice(requestedOffset, requestedOffset + requestedLimit);
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

export async function queryStudioData(query: StudioDataQuery) {
  const parsed = StudioDataQuerySchema.parse(query);
  const manifest = await currentTarget();
  if (parsed.targetId !== manifest.target.id) {
    throw new Error(`Studio data targetId '${parsed.targetId}' does not match current Studio target '${manifest.target.id}'.`);
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

export async function queryDashboardData(query: StudioDashboardDataQuery) {
  return queryStudioData(StudioDashboardDataQuerySchema.parse(query));
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
  const requestedTraceIds = traceIdsParam(query.params.traceIds);
  const requestedTraceId = stringParam(query.params.traceId);
  const traceIds = requestedTraceIds.length ? requestedTraceIds : requestedTraceId ? [requestedTraceId] : [];
  if (traceIds.length) {
    const traces = await fetchTempoTraceDetails(source, traceIds);
    return {
      id: randomUUID(),
      title: "Telemetry Trace Data",
      source: query,
      capturedAt: new Date().toISOString(),
      data: normalizeTempoTraceDataset(null, traces),
    };
  }

  const url = new URL("/api/search", source.baseUrl);
  const serviceName = stringParam(query.params.serviceName) ?? "cognidesk-flight-demo";
  const traceQl = stringParam(query.params.query) ?? stringParam(query.params.q);
  if (traceQl) url.searchParams.set("q", traceQl);
  else url.searchParams.set("tags", stringParam(query.params.tags) ?? `service.name=${serviceName}`);
  const limit = clampInt(numberParam(query.params.limit) ?? 20, 1, 100);
  url.searchParams.set("limit", String(limit));
  const start = numberParam(query.params.start);
  const end = numberParam(query.params.end);
  const minDuration = stringParam(query.params.minDuration);
  const maxDuration = stringParam(query.params.maxDuration);
  if (start !== undefined) url.searchParams.set("start", String(start));
  if (end !== undefined) url.searchParams.set("end", String(end));
  if (minDuration) url.searchParams.set("minDuration", minDuration);
  if (maxDuration) url.searchParams.set("maxDuration", maxDuration);
  const response = await fetch(url, source.headers ? { headers: source.headers } : {});
  if (!response.ok) throw new Error(`Trace source returned ${response.status}`);
  const search = await response.json() as unknown;
  if (booleanParam(query.params.includeTraceData) || stringParam(query.params.mode) === "full") {
    const searchTraceIds = extractTraceIds(search).slice(0, limit);
    const traces = await fetchTempoTraceDetails(source, searchTraceIds);
    return {
      id: randomUUID(),
      title: "Telemetry Trace Data",
      source: query,
      capturedAt: new Date().toISOString(),
      data: normalizeTempoTraceDataset(search, traces),
    };
  }
  return {
    id: randomUUID(),
    title: "Telemetry Traces",
    source: query,
    capturedAt: new Date().toISOString(),
    data: search,
  };
}

async function fetchTempoTraceDetails(source: StudioTargetManifest["telemetry"]["sources"][number], traceIds: string[]) {
  const uniqueTraceIds = [...new Set(traceIds.map((traceId) => traceId.trim()).filter(Boolean))];
  return await Promise.all(uniqueTraceIds.map(async (traceId) => {
    const url = new URL(`/api/traces/${encodeURIComponent(traceId)}`, source.baseUrl);
    const response = await fetch(url, source.headers ? { headers: source.headers } : {});
    if (!response.ok) throw new Error(`Trace source returned ${response.status} for trace ${traceId}`);
    return {
      traceId,
      raw: await response.json() as unknown,
    };
  }));
}

export function normalizeTempoTraceDataset(
  search: unknown,
  traces: Array<{ traceId: string; raw: unknown }>,
) {
  const normalizedTraces = traces.map((trace) => {
    const spans = spansFromTracePayload(trace.raw, trace.traceId);
    return {
      traceId: trace.traceId,
      raw: trace.raw,
      spans,
      spanCount: spans.length,
    };
  });
  return {
    ...(search !== null ? { search } : {}),
    traces: normalizedTraces,
    spans: normalizedTraces.flatMap((trace) => trace.spans),
    rawTraces: traces,
  };
}

function spansFromTracePayload(payload: unknown, fallbackTraceId: string): Array<Record<string, unknown>> {
  const spans: Array<Record<string, unknown>> = [];
  for (const resourceSpan of resourceSpansFromPayload(payload)) {
    const resource = isRecord(resourceSpan.resource) ? resourceSpan.resource : {};
    const resourceAttributes = attributesRecord(resource.attributes);
    const scopeSpanCandidates = [
      ...arrayRecords(resourceSpan.scopeSpans),
      ...arrayRecords(resourceSpan.instrumentationLibrarySpans),
    ];
    for (const scopeSpan of scopeSpanCandidates) {
      const scope = isRecord(scopeSpan.scope)
        ? scopeSpan.scope
        : isRecord(scopeSpan.instrumentationLibrary)
          ? scopeSpan.instrumentationLibrary
          : {};
      const scopeAttributes = attributesRecord(scope.attributes);
      for (const span of arrayRecords(scopeSpan.spans)) {
        const attributes = attributesRecord(span.attributes);
        const traceId = stringParam(span.traceId) ?? stringParam(span.traceID) ?? fallbackTraceId;
        const spanId = stringParam(span.spanId) ?? stringParam(span.spanID);
        const parentSpanId = stringParam(span.parentSpanId) ?? stringParam(span.parentSpanID);
        const startedAt = timestampFromSpan(span.startTimeUnixNano ?? span.startTimeUnixMillis ?? span.startTime);
        const endedAt = timestampFromSpan(span.endTimeUnixNano ?? span.endTimeUnixMillis ?? span.endTime);
        const durationMs = durationMsFromSpan(span.startTimeUnixNano ?? span.startTimeUnixMillis ?? span.startTime, span.endTimeUnixNano ?? span.endTimeUnixMillis ?? span.endTime);
        spans.push({
          ...span,
          traceId,
          ...(spanId ? { spanId } : {}),
          ...(parentSpanId ? { parentSpanId } : {}),
          name: stringParam(span.name) ?? spanId ?? traceId,
          attributes,
          resourceAttributes,
          scopeAttributes,
          ...(stringParam(resourceAttributes["service.name"]) ? { serviceName: resourceAttributes["service.name"] } : {}),
          ...(startedAt ? { startedAt } : {}),
          ...(endedAt ? { endedAt } : {}),
          ...(durationMs !== null ? { durationMs } : {}),
          events: arrayRecords(span.events).map((event) => ({
            ...event,
            attributes: attributesRecord(event.attributes),
          })),
          links: arrayRecords(span.links).map((link) => ({
            ...link,
            attributes: attributesRecord(link.attributes),
          })),
          raw: span,
        });
      }
    }
  }
  return spans;
}

function resourceSpansFromPayload(payload: unknown): Array<Record<string, unknown>> {
  if (!isRecord(payload)) return [];
  return [
    ...arrayRecords(payload.resourceSpans),
    ...arrayRecords(payload.batches),
    ...arrayRecords(isRecord(payload.data) ? payload.data.resourceSpans : undefined),
    ...arrayRecords(isRecord(payload.data) ? payload.data.batches : undefined),
  ];
}

function attributesRecord(value: unknown) {
  const attributes: Record<string, unknown> = {};
  if (Array.isArray(value)) {
    for (const entry of value) {
      if (!isRecord(entry)) continue;
      const key = stringParam(entry.key);
      if (!key) continue;
      attributes[key] = otelAttributeValue(entry.value);
    }
    return attributes;
  }
  return isRecord(value) ? { ...value } : attributes;
}

function otelAttributeValue(value: unknown): unknown {
  if (!isRecord(value)) return value;
  for (const key of ["stringValue", "intValue", "doubleValue", "boolValue", "bytesValue"]) {
    if (value[key] !== undefined) return value[key];
  }
  if (isRecord(value.arrayValue) && Array.isArray(value.arrayValue.values)) {
    return value.arrayValue.values.map(otelAttributeValue);
  }
  if (isRecord(value.kvlistValue) && Array.isArray(value.kvlistValue.values)) {
    return attributesRecord(value.kvlistValue.values);
  }
  return value;
}

function extractTraceIds(value: unknown): string[] {
  const traceIds: string[] = [];
  const visit = (candidate: unknown) => {
    if (Array.isArray(candidate)) {
      for (const item of candidate) visit(item);
      return;
    }
    if (!isRecord(candidate)) return;
    const traceId = stringParam(candidate.traceId) ?? stringParam(candidate.traceID);
    if (traceId) traceIds.push(traceId);
    for (const key of ["traces", "result", "results", "data"]) {
      if (candidate[key] !== undefined) visit(candidate[key]);
    }
  };
  visit(value);
  return [...new Set(traceIds)];
}

function traceIdsParam(value: unknown) {
  if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
  if (typeof value === "string") return value.split(",").map((item) => item.trim()).filter(Boolean);
  return [];
}

function booleanParam(value: unknown) {
  return value === true || value === "true" || value === "1" || value === 1;
}

function timestampFromSpan(value: unknown) {
  const number = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isFinite(number)) return undefined;
  const millis = number > 1_000_000_000_000_000 ? Math.floor(number / 1_000_000) : number;
  return new Date(millis).toISOString();
}

function durationMsFromSpan(start: unknown, end: unknown) {
  const startNumber = typeof start === "number" ? start : typeof start === "string" ? Number(start) : NaN;
  const endNumber = typeof end === "number" ? end : typeof end === "string" ? Number(end) : NaN;
  if (!Number.isFinite(startNumber) || !Number.isFinite(endNumber)) return null;
  const divisor = Math.max(startNumber, endNumber) > 1_000_000_000_000_000 ? 1_000_000 : 1;
  return (endNumber - startNumber) / divisor;
}

function arrayRecords(value: unknown): Array<Record<string, unknown>> {
  return Array.isArray(value) ? value.filter(isRecord) : [];
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

export function studioConversationRowFromSummary(summary: StudioConversationSummary): StudioConversationRow {
  const extensionFields = summary as Record<string, unknown>;
  const targetCustomerLabel = stringParam(extensionFields.customerLabel);
  const targetSummary = stringParam(extensionFields.summary);
  return {
    ...summary,
    id: summary.id,
    agentId: summary.agentId,
    lifecycle: summary.lifecycle,
    ...(summary.customerRelation ? { customerRelation: summary.customerRelation } : {}),
    customerLabel: targetCustomerLabel ?? summary.customerRelation?.label ?? (summary.customerRelation?.id ? `Customer ${summary.customerRelation.id}` : `Conversation ${summary.id.slice(0, 8)}`),
    summary: targetSummary ?? summarizeTargetConversation(summary),
    createdAt: summary.createdAt,
    updatedAt: summary.updatedAt,
    ...(summary.activeJourneyId ? { activeJourneyId: summary.activeJourneyId } : {}),
    activeStateIds: summary.activeStateIds,
    traceIds: summary.traceIds,
    ...(summary.eventCount !== undefined ? { eventCount: summary.eventCount } : {}),
    satisfaction: satisfactionValue(extensionFields.satisfaction),
  };
}

function satisfactionValue(value: unknown): StudioConversationRow["satisfaction"] {
  return value === "positive" || value === "neutral" || value === "negative" ? value : "neutral";
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
