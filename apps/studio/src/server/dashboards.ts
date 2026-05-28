import { randomUUID } from "node:crypto";
import { and, desc, eq } from "drizzle-orm";
import {
  StudioDashboardArtifactSchema,
  StudioDashboardDataQuerySchema,
  StudioDashboardDatasetSchema,
  StudioDashboardSpecSchema,
  type StudioDashboardArtifact,
  type StudioDashboardDataset,
  type StudioDashboardSpec,
} from "@cognidesk/studio-contracts";
import { deleteArtifact, putArtifact, getArtifactText } from "@/server/artifacts";
import { audit } from "@/server/audit";
import { currentTarget } from "@/server/target";
import { db } from "@/server/db/client";
import { dashboardArtifacts, dashboardArtifactVersions } from "@/server/db/schema";

export async function listDashboards(targetId?: string) {
  const rows = await db.select().from(dashboardArtifacts)
    .where(targetId ? eq(dashboardArtifacts.targetId, targetId) : undefined)
    .orderBy(desc(dashboardArtifacts.updatedAt));
  return rows;
}

export async function getDashboardArtifact(id: string): Promise<StudioDashboardArtifact | null> {
  const [dashboard] = await db.select().from(dashboardArtifacts).where(eq(dashboardArtifacts.id, id)).limit(1);
  if (!dashboard) return null;
  const [version] = await db.select().from(dashboardArtifactVersions)
    .where(and(
      eq(dashboardArtifactVersions.dashboardId, id),
      eq(dashboardArtifactVersions.version, dashboard.currentVersion),
    ))
    .limit(1);
  if (!version) return null;
  const datasets = parseStoredDatasets(version.datasetsJson, dashboard.targetId, version.createdAt.toISOString())
    .map((dataset) => normalizeDashboardDataset(dataset, dashboard.targetId));
  return StudioDashboardArtifactSchema.parse({
    id: dashboard.id,
    targetId: dashboard.targetId,
    ownerUserId: dashboard.ownerUserId,
    slug: dashboard.slug,
    title: dashboard.title,
    description: dashboard.description ?? undefined,
    status: dashboard.status,
    version: dashboard.currentVersion,
    artifactKey: version.artifactKey,
    renderer: JSON.parse(version.rendererJson) as unknown,
    datasets,
    createdAt: dashboard.createdAt.toISOString(),
    updatedAt: dashboard.updatedAt.toISOString(),
    publishedAt: dashboard.publishedAt?.toISOString(),
  });
}

export async function getDashboardCode(id: string) {
  const artifact = await getDashboardArtifact(id);
  if (!artifact) return null;
  return {
    artifact,
    code: await getArtifactText({ key: artifact.artifactKey }),
  };
}

export async function saveDashboardDraft(input: {
  userId: string;
  targetId?: string;
  dashboardId?: string;
  title: string;
  slug?: string;
  description?: string;
  code: string;
  datasets?: StudioDashboardDataset[];
  fallback?: unknown;
  spec?: StudioDashboardSpec;
}) {
  const target = await currentTarget();
  const targetId = input.targetId ?? target.target.id;
  const now = new Date();
  const requestedSlug = slugify(input.slug ?? input.title);
  const dashboardId = input.dashboardId ?? randomUUID();
  const datasets = StudioDashboardDatasetSchema.array()
    .parse(input.datasets ?? [])
    .map((dataset) => normalizeDashboardDataset(dataset, targetId));
  const existing = input.dashboardId
    ? await getDashboardArtifact(input.dashboardId)
    : null;
  const slug = existing ? requestedSlug : await uniqueDashboardSlug(targetId, requestedSlug);
  const version = existing ? existing.version + 1 : 1;
  const spec = StudioDashboardSpecSchema.parse(input.spec ?? inferDashboardSpec({
    title: input.title,
    datasets,
    ...(input.description ? { description: input.description } : {}),
  }));
  const code = ensureDashboardCode({
    title: input.title,
    code: input.code,
    spec,
    datasets,
    ...(input.description ? { description: input.description } : {}),
  });
  const artifactKey = `${target.dashboards.artifactPrefix}/${dashboardId}/v${version}/dashboard.tsx`;
  await putArtifact({
    key: artifactKey,
    body: code,
    contentType: "text/typescript",
  });

  if (existing) {
    await db.update(dashboardArtifacts).set({
      title: input.title,
      description: input.description ?? null,
      slug,
      currentVersion: version,
      status: "draft",
      updatedAt: now,
    }).where(eq(dashboardArtifacts.id, dashboardId));
  } else {
    await db.insert(dashboardArtifacts).values({
      id: dashboardId,
      targetId,
      ownerUserId: input.userId,
      slug,
      title: input.title,
      description: input.description ?? null,
      status: "draft",
      currentVersion: version,
      createdAt: now,
      updatedAt: now,
      publishedAt: null,
    });
  }

  await db.insert(dashboardArtifactVersions).values({
    id: randomUUID(),
    dashboardId,
    version,
    artifactKey,
    rendererJson: JSON.stringify({ kind: "react-component", entry: "Dashboard", spec }),
    datasetsJson: JSON.stringify(datasets),
    fallbackJson: JSON.stringify(input.fallback ?? {}),
    createdByUserId: input.userId,
    createdAt: now,
  });
  await audit({
    userId: input.userId,
    targetId,
    action: "dashboard.draft.saved",
    subjectType: "dashboard",
    subjectId: dashboardId,
    metadata: { version, artifactKey },
  });
  return await getDashboardArtifact(dashboardId);
}

export async function publishDashboard(input: {
  dashboardId: string;
  userId: string;
}) {
  const now = new Date();
  const artifact = await getDashboardArtifact(input.dashboardId);
  if (!artifact) return null;
  await db.update(dashboardArtifacts).set({
    status: "published",
    updatedAt: now,
    publishedAt: now,
  }).where(eq(dashboardArtifacts.id, input.dashboardId));
  await audit({
    userId: input.userId,
    targetId: artifact.targetId,
    action: "dashboard.published",
    subjectType: "dashboard",
    subjectId: input.dashboardId,
    metadata: { version: artifact.version },
  });
  return await getDashboardArtifact(input.dashboardId);
}

export async function deleteDashboard(input: {
  dashboardId: string;
  userId: string;
}) {
  const artifact = await getDashboardArtifact(input.dashboardId);
  if (!artifact) return null;
  const versions = await db.select().from(dashboardArtifactVersions)
    .where(eq(dashboardArtifactVersions.dashboardId, input.dashboardId));
  for (const version of versions) {
    await deleteArtifact({ key: version.artifactKey }).catch(() => undefined);
  }
  await db.delete(dashboardArtifacts).where(eq(dashboardArtifacts.id, input.dashboardId));
  await audit({
    userId: input.userId,
    targetId: artifact.targetId,
    action: "dashboard.deleted",
    subjectType: "dashboard",
    subjectId: input.dashboardId,
    metadata: { version: artifact.version, artifactKeys: versions.map((version) => version.artifactKey) },
  });
  return artifact;
}

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80) || `dashboard-${Date.now()}`;
}

async function uniqueDashboardSlug(targetId: string, baseSlug: string) {
  let candidate = baseSlug;
  for (let suffix = 2; suffix < 100; suffix += 1) {
    const [existing] = await db.select({ id: dashboardArtifacts.id }).from(dashboardArtifacts)
      .where(and(eq(dashboardArtifacts.targetId, targetId), eq(dashboardArtifacts.slug, candidate)))
      .limit(1);
    if (!existing) return candidate;
    candidate = `${baseSlug}-${suffix}`;
  }
  return `${baseSlug}-${Date.now()}`;
}

function normalizeDashboardDataset(dataset: StudioDashboardDataset, targetId: string): StudioDashboardDataset {
  const params = dataset.source.params;
  const endpoint = stringValue(params.endpoint);
  const isConversationDataset = endpoint?.includes("conversations") || containsConversationRows(dataset.data);
  const source = isConversationDataset
    ? {
        ...dataset.source,
        capability: "cognidesk.conversations" as const,
        targetId,
        params: { limit: 1000, ...params },
      }
    : dataset.source;
  const mode = dataset.mode === "live" || Boolean(params.live) || isConversationDataset ? "live" : dataset.mode;
  return {
    ...dataset,
    mode,
    source,
  };
}

function inferDashboardSpec(input: {
  title: string;
  description?: string;
  datasets: StudioDashboardDataset[];
}): StudioDashboardSpec {
  const text = `${input.title} ${input.description ?? ""}`.toLowerCase();
  const conversationDataset = input.datasets.find((dataset) => containsConversationRows(dataset.data));
  if (conversationDataset) {
    const wantsHandover = /handoff|hand\s*over|handover|escalat/.test(text);
    const wantsSentiment = /sentiment|satisfaction|mood|positive|negative/.test(text);
    const widgets: StudioDashboardSpec["widgets"] = [
      {
        id: "total-conversations",
        title: "Total conversations",
        kind: "metric",
        datasetId: conversationDataset.id,
        valuePath: "$metrics.totalConversations",
        tone: "blue",
      },
    ];
    if (wantsHandover || !text.trim()) {
      widgets.push(
        {
          id: "handover-conversations",
          title: "Handover conversations",
          kind: "metric",
          datasetId: conversationDataset.id,
          valuePath: "$metrics.handoverConversations",
          tone: "red",
        },
        {
          id: "handover-percentage",
          title: "Handover percentage",
          kind: "metric",
          datasetId: conversationDataset.id,
          valuePath: "$metrics.handoverPercentage",
          unit: "%",
          tone: "amber",
        },
        {
          id: "weekly-handover-trend",
          title: "Past-week handover trend",
          kind: "line",
          datasetId: conversationDataset.id,
          xPath: "date",
          series: [
            { label: "Total", path: "total" },
            { label: "Handovers", path: "handovers" },
          ],
        },
      );
    }
    if (wantsSentiment || !text.trim()) {
      widgets.push({
        id: "sentiment-breakdown",
        title: "User sentiment",
        kind: "donut",
        datasetId: conversationDataset.id,
        labelPath: "name",
        valuePath: "value",
        tone: "green",
      });
    }
    widgets.push({
      id: "recent-conversations",
      title: "Recent conversations",
      kind: "table",
      datasetId: conversationDataset.id,
      limit: 8,
      columns: [
        { label: "Customer", path: "customerLabel" },
        { label: "Lifecycle", path: "lifecycle" },
        { label: "Journey", path: "activeJourneyId" },
        { label: "Sentiment", path: "satisfaction" },
        { label: "Updated", path: "updatedAt" },
      ],
    });
    return StudioDashboardSpecSchema.parse({
      layout: "operations",
      summary: input.description ?? "Conversation operations dashboard generated from Studio conversation data.",
      widgets,
    });
  }

  return StudioDashboardSpecSchema.parse({
    layout: "overview",
    summary: input.description ?? "Generated Studio dashboard backed by captured datasets.",
    widgets: input.datasets.flatMap((dataset, index) => ([
      {
        id: `${dataset.id}-rows`,
        title: dataset.title,
        kind: "table" as const,
        datasetId: dataset.id,
        limit: index === 0 ? 10 : 5,
      },
    ])).slice(0, 6),
  });
}

function ensureDashboardCode(input: {
  title: string;
  description?: string;
  code: string;
  spec: StudioDashboardSpec;
  datasets: StudioDashboardDataset[];
}) {
  if (hasDashboardExport(input.code) && input.code.length > 600) return input.code;
  return generateDashboardCode(input);
}

function hasDashboardExport(code: string) {
  return /\bexport\s+(default\s+)?function\s+Dashboard\b/.test(code)
    || /\bexport\s+const\s+Dashboard\b/.test(code)
    || /\bexport\s*\{\s*Dashboard\s*\}/.test(code);
}

function generateDashboardCode(input: {
  title: string;
  description?: string;
  spec: StudioDashboardSpec;
  datasets: StudioDashboardDataset[];
}) {
  const datasetRefs = input.datasets.map((dataset) => ({
    id: dataset.id,
    title: dataset.title,
    mode: dataset.mode,
    refreshMs: dataset.refreshMs ?? null,
    source: dataset.source,
  }));
  return `import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const dashboardTitle = ${JSON.stringify(input.title)};
const dashboardDescription = ${JSON.stringify(input.description ?? "")};
const dashboardSpec = ${JSON.stringify(input.spec, null, 2)};
const datasetRefs = ${JSON.stringify(datasetRefs, null, 2)};

export function Dashboard({ dataLayer, initialDatasets = [] }) {
  const [datasets, setDatasets] = useState(initialDatasets);

  useEffect(() => {
    let cancelled = false;
    async function refreshLiveDatasets() {
      if (!dataLayer?.query) return;
      const liveRefs = datasetRefs.filter((dataset) => dataset.mode === "live");
      if (!liveRefs.length) return;
      const refreshed = await Promise.all(liveRefs.map(async (dataset) => ({
        ...dataset,
        ...(await dataLayer.query(dataset.source)),
        mode: "live",
      })));
      if (!cancelled) {
        setDatasets((current) => current.map((dataset) => refreshed.find((item) => item.id === dataset.id) ?? dataset));
      }
    }
    void refreshLiveDatasets();
    return () => {
      cancelled = true;
    };
  }, [dataLayer]);

  const byId = useMemo(() => new Map(datasets.map((dataset) => [dataset.id, dataset])), [datasets]);

  return (
    <main className="grid gap-5 p-6">
      <header>
        <p className="text-xs uppercase tracking-wide text-slate-500">Studio dashboard</p>
        <h1 className="text-2xl font-semibold text-slate-950">{dashboardTitle}</h1>
        {dashboardDescription ? <p className="mt-2 max-w-3xl text-sm text-slate-600">{dashboardDescription}</p> : null}
      </header>
      <section className="grid grid-cols-4 gap-4">
        {dashboardSpec.widgets.map((widget) => (
          <DashboardWidget key={widget.id} widget={widget} dataset={byId.get(widget.datasetId)} />
        ))}
      </section>
    </main>
  );
}

function DashboardWidget({ widget, dataset }) {
  const rows = Array.isArray(dataset?.data) ? dataset.data : Array.isArray(dataset?.data?.conversations) ? dataset.data.conversations : [];
  if (widget.kind === "metric") {
    return <article className="rounded-lg border border-slate-200 bg-white p-4"><p className="text-sm text-slate-500">{widget.title}</p><strong className="mt-2 block text-3xl text-slate-950">{rows.length}</strong></article>;
  }
  if (widget.kind === "line") {
    return <article className="col-span-2 rounded-lg border border-slate-200 bg-white p-4"><p className="mb-3 text-sm font-medium text-slate-700">{widget.title}</p><ResponsiveContainer width="100%" height={220}><LineChart data={rows}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey={widget.xPath ?? "date"} /><YAxis /><Tooltip />{(widget.series ?? []).map((series, index) => <Line key={series.path} dataKey={series.path} stroke={index ? "#0f766e" : "#2563eb"} />)}</LineChart></ResponsiveContainer></article>;
  }
  if (widget.kind === "bar") {
    return <article className="col-span-2 rounded-lg border border-slate-200 bg-white p-4"><p className="mb-3 text-sm font-medium text-slate-700">{widget.title}</p><ResponsiveContainer width="100%" height={220}><BarChart data={rows}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey={widget.labelPath ?? "name"} /><YAxis /><Tooltip /><Bar dataKey={widget.valuePath ?? "value"} fill="#2563eb" /></BarChart></ResponsiveContainer></article>;
  }
  if (widget.kind === "donut") {
    return <article className="rounded-lg border border-slate-200 bg-white p-4"><p className="mb-3 text-sm font-medium text-slate-700">{widget.title}</p><ResponsiveContainer width="100%" height={220}><PieChart><Pie data={rows} dataKey={widget.valuePath ?? "value"} nameKey={widget.labelPath ?? "name"} innerRadius={54} outerRadius={82}>{rows.map((_, index) => <Cell key={index} fill={["#16a34a", "#f59e0b", "#dc2626", "#2563eb"][index % 4]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></article>;
  }
  return <article className="col-span-4 overflow-hidden rounded-lg border border-slate-200 bg-white p-4"><p className="mb-3 text-sm font-medium text-slate-700">{widget.title}</p><pre className="max-h-72 overflow-auto text-xs text-slate-600">{JSON.stringify(rows.slice(0, widget.limit ?? 10), null, 2)}</pre></article>;
}

export default Dashboard;
`;
}

function parseStoredDatasets(rawJson: string, targetId: string, capturedAt: string) {
  const parsed = JSON.parse(rawJson) as unknown;
  const strict = StudioDashboardDatasetSchema.array().safeParse(parsed);
  if (strict.success) return strict.data;
  if (!Array.isArray(parsed)) return StudioDashboardDatasetSchema.array().parse([]);
  return StudioDashboardDatasetSchema.array().parse(
    parsed.map((dataset, index) => coerceLegacyDataset(dataset, index, targetId, capturedAt)),
  );
}

function coerceLegacyDataset(raw: unknown, index: number, targetId: string, capturedAt: string): StudioDashboardDataset {
  const record = isRecord(raw) ? raw : { data: raw };
  const title = stringValue(record.title) ?? stringValue(record.name) ?? `Dataset ${index + 1}`;
  const id = stringValue(record.id) ?? slugify(title);
  const description = stringValue(record.description);
  const sourceRecord = isRecord(record.source) ? record.source : {};
  const strictSource = StudioDashboardDataQuerySchema.safeParse(sourceRecord);
  const params = isRecord(sourceRecord.params) ? { ...sourceRecord.params } : {};
  for (const key of ["endpoint", "type", "capability"]) {
    const value = stringValue(sourceRecord[key]);
    if (value) params[key] = value;
  }
  return {
    id,
    title,
    ...(description ? { description } : {}),
    mode: stringValue(record.mode) === "live" || record.live === true ? "live" : "static",
    source: strictSource.success
      ? strictSource.data
      : {
          capability: containsConversationRows(record.data ?? record.rows ?? raw) ? "cognidesk.conversations" : "cognidesk.events",
          targetId: stringValue(sourceRecord.targetId) ?? targetId,
          params,
        },
    capturedAt: stringValue(record.capturedAt) ?? capturedAt,
    data: record.data ?? record.rows ?? raw,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function containsConversationRows(value: unknown) {
  const rows = conversationRows(value);
  return rows.some((row) => typeof row.id === "string" && typeof row.lifecycle === "string");
}

function conversationRows(value: unknown): Record<string, unknown>[] {
  if (Array.isArray(value)) return value.filter(isRecord);
  if (!isRecord(value)) return [];
  for (const key of ["conversations", "rows", "data"]) {
    const rows = value[key];
    if (Array.isArray(rows)) return rows.filter(isRecord);
  }
  return [];
}

function stringValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}
