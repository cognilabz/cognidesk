import type { StudioDashboardDataset, StudioDashboardSpec } from "@cognidesk/studio-contracts";

export function ensureDashboardCode(input: {
  title: string;
  description?: string;
  code: string;
  spec: StudioDashboardSpec;
  datasets: StudioDashboardDataset[];
}) {
  if (hasDashboardExport(input.code) && input.code.length > 600) return input.code;
  return generateDashboardCode(input);
}

export function hasDashboardExport(code: string) {
  return /\bexport\s+(default\s+)?function\s+Dashboard\b/.test(code)
    || /\bexport\s+const\s+Dashboard\b/.test(code)
    || /\bexport\s*\{\s*Dashboard\s*\}/.test(code);
}

export function generateDashboardCode(input: {
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
  const rows = rowsFromDataset(dataset?.data);
  if (widget.kind === "metric") {
    const value = metricValue(widget, dataset, rows);
    const missing = value === undefined || value === null;
    return <article className={missing ? "rounded-lg border border-amber-200 bg-amber-50 p-4" : "rounded-lg border border-slate-200 bg-white p-4"}><p className="text-sm text-slate-500">{widget.title}</p><strong className={missing ? "mt-2 block text-base font-semibold text-amber-800" : "mt-2 block text-3xl text-slate-950"}>{formatMetricValue(value, widget.unit)}</strong>{missing && widget.valuePath ? <p className="mt-2 text-xs text-amber-800">No value found for {widget.valuePath}.</p> : null}</article>;
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

function metricValue(widget, dataset, rows) {
  if (widget.valuePath?.startsWith("$metrics.")) {
    const metrics = conversationMetrics(rows);
    return resolvePath(metrics, widget.valuePath.replace("$metrics.", "")) ?? 0;
  }
  const aggregateRequest = metricAggregateForWidget(widget);
  if (aggregateRequest) return aggregateMetricValue(rows, aggregateRequest.path, aggregateRequest.aggregate);
  if (widget.valuePath && dataset) {
    const directValue = resolvePath(dataset.data, widget.valuePath);
    if (directValue !== undefined) return directValue;
    const normalizedValue = normalizedMetricValue(rows, widget.valuePath);
    if (normalizedValue !== undefined) return normalizedValue;
    return undefined;
  }
  if (widget.valuePath) return undefined;
  return rows.length;
}

function metricAggregateForWidget(widget) {
  const expression = widget.valuePath ? parseMetricAggregateExpression(widget.valuePath) : null;
  if (widget.aggregate) return { aggregate: widget.aggregate, path: expression?.path ?? widget.valuePath };
  return expression;
}

function parseMetricAggregateExpression(valuePath) {
  const trimmed = valuePath.trim();
  const open = trimmed.indexOf("(");
  if (open <= 0 || !trimmed.endsWith(")")) return null;
  const aggregate = trimmed.slice(0, open);
  if (!["sum", "avg", "max", "count", "countNonNull"].includes(aggregate)) return null;
  const path = trimmed.slice(open + 1, -1).trim();
  return path ? { aggregate, path } : null;
}

function aggregateMetricValue(rows, path, aggregate) {
  if (aggregate === "count") return rows.length;
  if (!path) return undefined;
  const values = rows.map((row) => resolvePath(row, path)).filter((value) => value !== undefined && value !== null);
  if (aggregate === "countNonNull") return values.length;
  const numericValues = values.map(numericValue).filter((value) => value !== null);
  if (!numericValues.length) return undefined;
  if (aggregate === "sum") return numericValues.reduce((sum, value) => sum + value, 0);
  if (aggregate === "avg") return numericValues.reduce((sum, value) => sum + value, 0) / numericValues.length;
  if (aggregate === "max") return Math.max(...numericValues);
  return undefined;
}

function normalizedMetricValue(rows, valuePath) {
  const values = rows.map((row) => resolvePath(row, valuePath)).filter((value) => value !== undefined && value !== null);
  if (!values.length) return undefined;
  if (values.length === 1) return values[0];
  const numericValues = values.map(numericValue);
  if (numericValues.every((value) => value !== null)) return numericValues.reduce((sum, value) => sum + value, 0);
  return values[values.length - 1];
}

function conversationMetrics(rows) {
  const totalConversations = rows.length;
  const handoverConversations = rows.filter((row) => row.lifecycle === "handoff" || /handoff|hand\\s*off|handover|escalat/i.test(String(row.activeJourneyId ?? "") + " " + String(row.summary ?? ""))).length;
  const journeyCounts = rows.reduce((counts, row) => {
    const journeyId = String(row.activeJourneyId ?? "").trim() || "unassigned";
    counts[journeyId] = (counts[journeyId] ?? 0) + 1;
    return counts;
  }, {});
  return {
    totalConversations,
    handoverConversations,
    handoverPercentage: totalConversations ? Number(((handoverConversations / totalConversations) * 100).toFixed(1)) : 0,
    journeyCounts,
  };
}

function rowsFromDataset(value) {
  if (Array.isArray(value)) return value.filter(isRecord);
  if (!isRecord(value)) return [];
  for (const key of ["conversations", "rows", "items", "results", "result", "data", "events", "values", "traces", "spans"]) {
    const rows = rowsFromDataset(value[key]);
    if (rows.length) return rows;
  }
  return [value];
}

function resolvePath(value, path) {
  if (!path) return value;
  if (isRecord(value) && path in value) return value[path];
  const parts = parsePath(path);
  if (!parts) return undefined;
  return parts.reduce((current, part) => {
    if (Array.isArray(current)) {
      const index = Number(part);
      return Number.isInteger(index) && index >= 0 ? current[index] : undefined;
    }
    if (!isRecord(current)) return undefined;
    return part in current ? current[part] : undefined;
  }, value);
}

function parsePath(path) {
  const parts = [];
  let current = "";
  for (let index = 0; index < path.length; index += 1) {
    const char = path[index];
    if (char === ".") {
      if (current) {
        parts.push(current);
        current = "";
        continue;
      }
      if (path[index - 1] === "]") continue;
      return null;
    }
    if (char === "[") {
      if (current) {
        parts.push(current);
        current = "";
      }
      const end = path.indexOf("]", index + 1);
      if (end < 0) return null;
      const content = path.slice(index + 1, end).trim();
      if (!content) return null;
      const quoted = (content[0] === '"' && content[content.length - 1] === '"') || (content[0] === "'" && content[content.length - 1] === "'");
      parts.push(quoted ? content.slice(1, -1) : content);
      index = end;
      continue;
    }
    current += char;
  }
  if (current) parts.push(current);
  return parts.every((part) => part.length > 0) ? parts : null;
}

function numericValue(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value.replace(/,/g, ""));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function formatMetricValue(value, unit) {
  if (value === undefined || value === null) return "Missing data";
  const text = typeof value === "number" ? new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(value) : String(value);
  return unit ? text + unit : text;
}

function isRecord(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

export default Dashboard;
`;
}
