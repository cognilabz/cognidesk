import type { StudioDashboardDataset, StudioDashboardWidget } from "@cognidesk/studio-contracts";
import { formatDateTime } from "../format";

type ConversationRow = {
  id: string;
  lifecycle?: string;
  customerLabel?: string;
  activeJourneyId?: string;
  satisfaction?: "positive" | "neutral" | "negative";
  summary?: string;
  createdAt?: string;
  updatedAt?: string;
  eventCount?: number;
};

export const integerFormatter = new Intl.NumberFormat();
const metricFormatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 1,
});

export function inferWidgets(datasets: StudioDashboardDataset[]): StudioDashboardWidget[] {
  const conversationDataset = datasets.find((dataset) => conversationRows(dataset.data).length);
  if (conversationDataset) {
    return [
      { id: "total-conversations", title: "Total conversations", kind: "metric", datasetId: conversationDataset.id, valuePath: "$metrics.totalConversations", tone: "blue" },
      { id: "handover-conversations", title: "Handover conversations", kind: "metric", datasetId: conversationDataset.id, valuePath: "$metrics.handoverConversations", tone: "red" },
      { id: "handover-percentage", title: "Handover percentage", kind: "metric", datasetId: conversationDataset.id, valuePath: "$metrics.handoverPercentage", unit: "%", tone: "amber" },
      {
        id: "weekly-handover-trend",
        title: "Past-week handover trend",
        kind: "line",
        datasetId: conversationDataset.id,
        xPath: "date",
        series: [{ label: "Total", path: "total" }, { label: "Handovers", path: "handovers" }],
      },
      { id: "sentiment-breakdown", title: "User sentiment", kind: "donut", datasetId: conversationDataset.id, labelPath: "name", valuePath: "value" },
      { id: "recent-conversations", title: "Recent conversations", kind: "table", datasetId: conversationDataset.id, limit: 8 },
    ];
  }
  return datasets.map((dataset) => ({
    id: `${dataset.id}-table`,
    title: dataset.title,
    kind: "table",
    datasetId: dataset.id,
  }));
}

export function metricValue(widget: StudioDashboardWidget, dataset: StudioDashboardDataset | undefined) {
  const rows = conversationRows(dataset?.data);
  if (widget.valuePath?.startsWith("$metrics.") && rows.length) {
    const metrics = conversationMetrics(rows);
    return resolvePath(metrics, widget.valuePath.replace("$metrics.", ""));
  }
  if (widget.valuePath && dataset) return resolvePath(dataset.data, widget.valuePath);
  return Array.isArray(dataset?.data) ? dataset.data.length : (rows.length || rowsFromUnknown(dataset?.data).length);
}

export function chartRowsForWidget(widget: StudioDashboardWidget, dataset: StudioDashboardDataset | undefined): Array<Record<string, unknown>> {
  const rows = conversationRows(dataset?.data);
  const title = `${widget.id} ${widget.title}`.toLowerCase();
  if (rows.length && /\b(trend|week|weekly|time series|over time)\b/.test(title)) return weeklyConversationTrend(rows);
  if (rows.length && widget.kind === "line" && shouldAggregateRows(rows, widget.valuePath ?? widget.yPath ?? "value")) return weeklyConversationTrend(rows);
  if (rows.length && /sentiment|satisfaction/.test(title)) return sentimentRows(rows);
  if (rows.length && (widget.kind === "bar" || widget.kind === "donut")) {
    const categoryPath = widget.labelPath ?? inferConversationCategoryPath(title);
    const valuePath = widget.valuePath ?? widget.yPath ?? "value";
    if (categoryPath && shouldAggregateRows(rows, valuePath)) {
      return aggregateRowsByPath(rows, categoryPath, valuePath);
    }
  }
  return normalizeChartRows(rowsFromUnknown(dataset?.data), widget);
}

export function tableRowsForWidget(_widget: StudioDashboardWidget, dataset: StudioDashboardDataset | undefined): Array<Record<string, unknown>> {
  return rowsFromUnknown(dataset?.data);
}

function conversationRows(value: unknown): ConversationRow[] {
  if (Array.isArray(value)) return value.filter(isConversationRow);
  if (!isRecord(value)) return [];
  for (const key of ["conversations", "rows", "data"]) {
    const rows = value[key];
    if (Array.isArray(rows)) return rows.filter(isConversationRow);
  }
  return [];
}

function conversationMetrics(rows: ConversationRow[]) {
  const totalConversations = rows.length;
  const handoverConversations = rows.filter(isHandoverConversation).length;
  const journeyCounts = rows.reduce<Record<string, number>>((counts, row) => {
    const journeyId = row.activeJourneyId?.trim() || "unassigned";
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

function weeklyConversationTrend(rows: ConversationRow[]) {
  const days = [...Array.from({ length: 7 })].map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    date.setHours(0, 0, 0, 0);
    return date;
  });
  return days.map((date) => {
    const next = new Date(date);
    next.setDate(next.getDate() + 1);
    const dayRows = rows.filter((row) => {
      const value = new Date(row.updatedAt ?? row.createdAt ?? "");
      return Number.isFinite(value.getTime()) && value >= date && value < next;
    });
    return {
      date: date.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      total: dayRows.length,
      handover: dayRows.filter(isHandoverConversation).length,
      handovers: dayRows.filter(isHandoverConversation).length,
    };
  });
}

function sentimentRows(rows: ConversationRow[]) {
  return ["positive", "neutral", "negative"].map((name) => ({
    name,
    satisfaction: name,
    sentiment: name,
    value: rows.filter((row) => row.satisfaction === name).length,
    count: rows.filter((row) => row.satisfaction === name).length,
  }));
}

function isHandoverConversation(row: ConversationRow) {
  return row.lifecycle === "handoff" || /handoff|hand\s*off|handover|escalat/i.test(`${row.activeJourneyId ?? ""} ${row.summary ?? ""}`);
}

function isConversationRow(value: unknown): value is ConversationRow {
  return isRecord(value) && typeof value.id === "string" && (
    typeof value.lifecycle === "string" ||
    typeof value.customerLabel === "string" ||
    typeof value.updatedAt === "string"
  );
}

export function inferColumns(rows: Array<Record<string, unknown>>) {
  const preferred = ["customerLabel", "lifecycle", "activeJourneyId", "satisfaction", "eventCount", "updatedAt", "summary"];
  const keys = rows[0] ? Object.keys(rows[0]) : [];
  const selected = preferred.filter((key) => keys.includes(key));
  const fallback = keys.filter((key) => !selected.includes(key)).slice(0, Math.max(0, 5 - selected.length));
  return [...selected, ...fallback].slice(0, 6).map((key) => ({ label: labelize(key), path: key }));
}

export function inferDatasetColumns(rows: Array<Record<string, unknown>>) {
  const preferred = [
    "time",
    "date",
    "name",
    "value",
    "flight_demo_route",
    "flight_demo_support_tier",
    "flight_demo_channel",
    "durationMs",
    "spanCount",
    "status",
  ];
  const keys = rows[0] ? Object.keys(rows[0]).filter((key) => key !== "metric" && key !== "__name__") : [];
  const selected = preferred.filter((key) => keys.includes(key));
  const fallback = keys.filter((key) => !selected.includes(key)).slice(0, Math.max(0, 8 - selected.length));
  return [...selected, ...fallback].slice(0, 8).map((key) => ({ label: labelize(key), path: key }));
}

export function inferSeries(rows: Array<Record<string, unknown>>, xDataKey?: string) {
  const sample = rows[0] ?? {};
  return Object.entries(sample)
    .filter(([key, value]) => typeof value === "number" && key !== xDataKey && !isAxisLikeKey(key))
    .slice(0, 3)
    .map(([key]) => ({ label: labelize(key), path: key }));
}

export function resolvePath(value: unknown, path: string): unknown {
  if (!path) return value;
  if (isRecord(value) && path in value) return value[path];
  return path.replace(/\[(\w+)\]/g, ".$1").split(".").reduce<unknown>((current, part) => {
    if (!isRecord(current)) return undefined;
    return current[part];
  }, value);
}

export function rowsFromUnknown(value: unknown): Array<Record<string, unknown>> {
  const rows = conversationRows(value);
  if (rows.length) return rows;
  const prometheus = prometheusRows(value);
  if (prometheus.length) return prometheus;
  const traces = traceRows(value);
  if (traces.length) return traces;
  if (Array.isArray(value)) return value.filter(isRecord);
  if (!isRecord(value)) return [];
  for (const key of ["rows", "items", "results", "result", "data", "values", "traces", "spans"]) {
    const nestedRows = rowsFromUnknown(value[key]);
    if (nestedRows.length) return nestedRows;
  }
  for (const nestedValue of Object.values(value)) {
    const nestedRows = rowsFromUnknown(nestedValue);
    if (nestedRows.length) return nestedRows;
  }
  return [value];
}

function normalizeChartRows(rows: Array<Record<string, unknown>>, widget: StudioDashboardWidget) {
  const valuePaths = [
    widget.valuePath,
    widget.yPath,
    ...(widget.series?.map((series) => series.path) ?? []),
  ].filter((path): path is string => Boolean(path));
  const labelPath = widget.labelPath ?? widget.xPath;
  return rows.map((row, index) => {
    const next = { ...row };
    if (labelPath && resolvePath(next, labelPath) === undefined) {
      setPath(next, labelPath, `Row ${index + 1}`);
    }
    for (const path of valuePaths) {
      const number = numericValue(resolvePath(row, path));
      if (number !== null) setPath(next, path, number);
    }
    if (resolvePath(next, "name") === undefined) {
      const label = labelPath ? resolvePath(row, labelPath) : undefined;
      if (label !== undefined && label !== null) next.name = String(label);
    }
    if (resolvePath(next, "value") === undefined) {
      const numericEntry = Object.entries(next).find(([key, value]) => (
        typeof value === "number" && !isAxisLikeKey(key)
      ));
      if (numericEntry) next.value = numericEntry[1];
    }
    return next;
  });
}

function prometheusRows(value: unknown): Array<Record<string, unknown>> {
  if (!isRecord(value)) return [];
  const data = isRecord(value.data) ? value.data : value;
  const result = Array.isArray(data.result) ? data.result.filter(isRecord) : [];
  if (!result.length) return [];

  const hasMatrixValues = result.some((series) => Array.isArray(series.values));
  if (hasMatrixValues) return prometheusMatrixRows(result);

  return result.map((series, index) => {
    const metric = isRecord(series.metric) ? series.metric : {};
    const valueNumber = numericValue(prometheusSampleValue(series.value)) ?? 0;
    const name = prometheusSeriesName(metric, index);
    return {
      ...metric,
      metric,
      name,
      value: valueNumber,
      count: valueNumber,
    };
  });
}

function prometheusMatrixRows(result: Array<Record<string, unknown>>) {
  const rowsByTimestamp = new Map<number, Record<string, unknown>>();
  result.forEach((series, seriesIndex) => {
    const metric = isRecord(series.metric) ? series.metric : {};
    const name = prometheusSeriesName(metric, seriesIndex);
    const key = uniqueSeriesKey(name, seriesIndex);
    const samples = Array.isArray(series.values) ? series.values : [];
    for (const sample of samples) {
      if (!Array.isArray(sample)) continue;
      const timestamp = numericValue(sample[0]);
      const value = numericValue(sample[1]);
      if (timestamp === null || value === null) continue;
      const row = rowsByTimestamp.get(timestamp) ?? {
        timestamp,
        time: new Date(timestamp * 1000).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }),
        date: new Date(timestamp * 1000).toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      };
      row[key] = value;
      if (result.length === 1) row.value = value;
      rowsByTimestamp.set(timestamp, row);
    }
  });
  return Array.from(rowsByTimestamp.values()).sort((left, right) => Number(left.timestamp) - Number(right.timestamp));
}

function prometheusSampleValue(value: unknown) {
  if (Array.isArray(value)) return value[1];
  return value;
}

function prometheusSeriesName(metric: Record<string, unknown>, index: number) {
  const preferred = ["__name__", "job", "service_name", "service", "instance", "span_name"];
  for (const key of preferred) {
    const value = metric[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  const labels = Object.entries(metric)
    .filter(([, value]) => typeof value === "string" && value.trim())
    .slice(0, 2)
    .map(([key, value]) => `${key}=${value}`);
  return labels.length ? labels.join(", ") : `Series ${index + 1}`;
}

function traceRows(value: unknown): Array<Record<string, unknown>> {
  if (!isRecord(value)) return [];
  const traces = Array.isArray(value.traces)
    ? value.traces
    : isRecord(value.data) && Array.isArray(value.data.traces)
      ? value.data.traces
      : [];
  const rows: Array<Record<string, unknown>> = [];
  traces.forEach((trace, index) => {
    if (!isRecord(trace)) return;
    const durationMs = numericValue(trace.durationMs ?? trace.duration ?? trace.durationMillis);
    const spanCount = numericValue(trace.spanCount ?? trace.spans);
    const startedAt = typeof trace.startedAt === "string"
      ? trace.startedAt
      : typeof trace.startTimeUnixNano === "string"
        ? nanoTimestampToIso(trace.startTimeUnixNano)
        : undefined;
    rows.push({
      ...trace,
      name: String(trace.rootTraceName ?? trace.rootSpanName ?? trace.name ?? trace.traceId ?? trace.traceID ?? `Trace ${index + 1}`),
      ...(typeof trace.rootServiceName === "string" ? { serviceName: trace.rootServiceName } : {}),
      ...(startedAt ? { startedAt } : {}),
      status: typeof trace.status === "string" ? trace.status : "unknown",
      ...(durationMs !== null ? { durationMs, value: durationMs } : {}),
      ...(spanCount !== null ? { spanCount } : {}),
    });
  });
  return rows;
}

function nanoTimestampToIso(value: string) {
  const millis = Number(value.slice(0, -6));
  return Number.isFinite(millis) ? new Date(millis).toISOString() : undefined;
}

export function chartXAxisKey(widget: StudioDashboardWidget, rows: Array<Record<string, unknown>>) {
  return widget.xPath ?? firstExistingPath(rows, ["date", "time", "timestamp", "name"]) ?? "date";
}

export function chartLabelKey(widget: StudioDashboardWidget, rows: Array<Record<string, unknown>>) {
  return widget.labelPath ?? widget.xPath ?? firstExistingPath(rows, ["name", "label", "date", "time", "timestamp"]) ?? "name";
}

export function chartValueKey(widget: StudioDashboardWidget, rows: Array<Record<string, unknown>>) {
  return widget.valuePath ?? widget.yPath ?? firstExistingPath(rows, ["value", "count", "total", "durationMs", "spanCount"]) ?? "value";
}

function firstExistingPath(rows: Array<Record<string, unknown>>, paths: string[]) {
  return paths.find((path) => rows.some((row) => resolvePath(row, path) !== undefined));
}

function inferConversationCategoryPath(title: string) {
  if (/journey|workflow/.test(title)) return "activeJourneyId";
  if (/sentiment|satisfaction/.test(title)) return "satisfaction";
  if (/state|status|lifecycle|handoff|handover|escalat/.test(title)) return "lifecycle";
  return null;
}

function shouldAggregateRows(rows: Array<Record<string, unknown>>, valuePath: string) {
  return rows.every((row) => numericValue(resolvePath(row, valuePath)) === null);
}

function aggregateRowsByPath(rows: Array<Record<string, unknown>>, labelPath: string, valuePath: string) {
  const counts = new Map<string, number>();
  for (const row of rows) {
    const label = categoryLabel(resolvePath(row, labelPath));
    counts.set(label, (counts.get(label) ?? 0) + 1);
  }
  return [...counts.entries()].map(([label, value]) => {
    const row: Record<string, unknown> = { name: label, value, count: value, total: value };
    setPath(row, labelPath, label);
    setPath(row, valuePath, value);
    return row;
  });
}

function categoryLabel(value: unknown) {
  if (value === null || value === undefined || value === "") return "Unspecified";
  if (Array.isArray(value)) return value.length ? value.join(", ") : "None";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function numericValue(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value.replace(/,/g, ""));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function setPath(target: Record<string, unknown>, path: string, value: unknown) {
  if (!path.includes(".")) {
    target[path] = value;
    return;
  }
  const parts = path.split(".");
  let current = target;
  for (const part of parts.slice(0, -1)) {
    const next = current[part];
    if (!isRecord(next)) current[part] = {};
    current = current[part] as Record<string, unknown>;
  }
  current[parts[parts.length - 1]!] = value;
}

function uniqueSeriesKey(name: string, index: number) {
  const key = name
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/^(\d)/, "series_$1");
  return key || `series_${index + 1}`;
}

function isAxisLikeKey(key: string) {
  return /^(timestamp|time|date)$/i.test(key);
}

export function formatMetricValue(value: unknown, unit?: string) {
  const text = typeof value === "number"
    ? metricFormatter.format(value)
    : String(value ?? 0);
  return unit ? `${text}${unit}` : text;
}

export function formatCell(value: unknown) {
  if (typeof value === "string" && /\d{4}-\d{2}-\d{2}T/.test(value)) return formatDateTime(value);
  if (typeof value === "number") return integerFormatter.format(value);
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

export function summarizeDataset(dataset: StudioDashboardDataset | undefined) {
  if (!dataset) return "No dataset is attached to this widget.";
  const rows = tableRowsForWidget({ id: "summary", title: "Summary", kind: "table" }, dataset);
  return `${dataset.title} contains ${rows.length} rows captured at ${formatDateTime(dataset.capturedAt)}.`;
}

export function stableRowKey(row: Record<string, unknown>) {
  return JSON.stringify(row);
}

export function toneClasses(tone: StudioDashboardWidget["tone"]) {
  if (tone === "red") return "border-red-200";
  if (tone === "green") return "border-emerald-200";
  if (tone === "amber") return "border-amber-200";
  if (tone === "violet") return "border-violet-200";
  if (tone === "teal") return "border-teal-200";
  if (tone === "blue") return "border-blue-200";
  return "border-slate-200";
}

function labelize(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function sourceFunctionText(dataset: StudioDashboardDataset) {
  return `queryDashboardData(${JSON.stringify(dataset.source, null, 2)})`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

const chartColors = ["#2563eb", "#0f766e", "#dc2626", "#7c3aed", "#f59e0b", "#16a34a"];

export function chartColor(index: number) {
  return chartColors[index % chartColors.length] ?? chartColors[0]!;
}
