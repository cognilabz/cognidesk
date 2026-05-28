"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { InfoIcon, RefreshCwIcon } from "lucide-react";
import type { StudioDashboardDataset, StudioDashboardWidget } from "@cognidesk/studio-contracts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PreviewDashboard } from "./types";
import { formatDateTime } from "./ui";

type ConcretePreviewDashboard = NonNullable<PreviewDashboard>;
const DEFAULT_TABLE_PAGE_SIZE = 8;

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

export type DashboardCheckResult = {
  status: "passed" | "failed";
  checkedAt: string;
  issues: string[];
};

export function DashboardRenderer(props: {
  previewDashboard: ConcretePreviewDashboard;
  compact?: boolean;
  checkResult?: DashboardCheckResult | null;
}) {
  const [datasets, setDatasets] = useState(props.previewDashboard.artifact.datasets);
  const [refreshingDatasetId, setRefreshingDatasetId] = useState<string | null>(null);
  const [visibleRowsByWidget, setVisibleRowsByWidget] = useState<Record<string, number>>({});
  const spec = props.previewDashboard.artifact.renderer.spec;
  const widgets = useMemo(
    () => spec?.widgets?.length ? spec.widgets : inferWidgets(datasets),
    [datasets, spec],
  );
  const liveDatasets = datasets.filter((dataset) => dataset.mode === "live");

  const refreshDataset = useCallback(async (dataset: StudioDashboardDataset) => {
    setRefreshingDatasetId(dataset.id);
    try {
      const response = await fetch("/api/studio/dashboard-data", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataset.source),
      });
      if (!response.ok) return;
      const data = await response.json() as { dataset: StudioDashboardDataset };
      setDatasets((items) => items.map((item) => (
        item.id === dataset.id
          ? {
              ...item,
              capturedAt: data.dataset.capturedAt,
              data: data.dataset.data,
              source: data.dataset.source,
            }
          : item
      )));
    } finally {
      setRefreshingDatasetId(null);
    }
  }, []);

  useEffect(() => {
    setDatasets(props.previewDashboard.artifact.datasets);
    setVisibleRowsByWidget({});
  }, [props.previewDashboard.artifact.id, props.previewDashboard.artifact.version, props.previewDashboard.artifact.datasets]);

  useEffect(() => {
    const timers = liveDatasets
      .filter((dataset) => dataset.refreshMs && dataset.refreshMs >= 5000)
      .map((dataset) => window.setInterval(() => void refreshDataset(dataset), dataset.refreshMs));
    return () => {
      for (const timer of timers) window.clearInterval(timer);
    };
  }, [liveDatasets, refreshDataset]);

  return (
    <div className={cn("grid gap-5", props.compact ? "text-sm" : "")} data-testid="dashboard-renderer">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase text-slate-500">Studio dashboard artifact</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">{props.previewDashboard.artifact.title}</h2>
          {props.previewDashboard.artifact.description ? (
            <p className="mt-2 max-w-3xl text-sm text-slate-600">{props.previewDashboard.artifact.description}</p>
          ) : null}
        </div>
        {liveDatasets.length ? (
          <div className="flex flex-wrap gap-2">
            {liveDatasets.map((dataset) => (
              <Button
                className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                disabled={refreshingDatasetId === dataset.id}
                key={dataset.id}
                onClick={() => void refreshDataset(dataset)}
                size="sm"
                type="button"
                variant="outline"
              >
                <RefreshCwIcon className={cn(refreshingDatasetId === dataset.id && "animate-spin")} />
                Refresh {dataset.title}
              </Button>
            ))}
          </div>
        ) : null}
      </header>

      {props.checkResult ? (
        <section className={cn(
          "rounded-lg border p-3 text-sm",
          props.checkResult.status === "passed" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800",
        )}>
          <p className="font-medium">Check {props.checkResult.status}</p>
          <p className="mt-1 text-xs opacity-80">{formatDateTime(props.checkResult.checkedAt)}</p>
          {props.checkResult.issues.length ? (
            <ul className="mt-2 list-disc pl-5">
              {props.checkResult.issues.map((issue) => <li key={issue}>{issue}</li>)}
            </ul>
          ) : null}
        </section>
      ) : null}

      <section className={cn(
        "grid gap-4",
        props.compact ? "grid-cols-2 max-sm:grid-cols-1" : "grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1",
      )}>
        {widgets.map((widget) => (
          <DashboardWidget
            compact={Boolean(props.compact)}
            datasets={datasets}
            key={widget.id}
            onLoadMoreRows={() => setVisibleRowsByWidget((items) => ({
              ...items,
              [widget.id]: (items[widget.id] ?? widget.limit ?? DEFAULT_TABLE_PAGE_SIZE) + (widget.limit ?? DEFAULT_TABLE_PAGE_SIZE),
            }))}
            visibleRowCount={visibleRowsByWidget[widget.id] ?? widget.limit ?? DEFAULT_TABLE_PAGE_SIZE}
            widget={widget}
          />
        ))}
      </section>

      <details className="group rounded-lg border border-slate-200 bg-white">
        <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <span className="inline-flex items-center gap-2">
            <InfoIcon className="size-4 text-slate-500" />
            Artifact info
          </span>
          <span className="text-xs font-normal text-slate-500">
            {props.previewDashboard.artifact.status} / v{props.previewDashboard.artifact.version}
          </span>
        </summary>
        <div className="border-t border-slate-100 p-4">
          <dl className="mt-3 grid gap-2 text-sm">
            <Detail label="Status" value={props.previewDashboard.artifact.status} />
            <Detail label="Version" value={`v${props.previewDashboard.artifact.version}`} />
            <Detail label="Datasets" value={datasets.map((dataset) => dataset.title).join(", ") || "0"} />
            <Detail label="Artifact key" value={props.previewDashboard.artifact.artifactKey} />
            <Detail label="Updated" value={formatDateTime(props.previewDashboard.artifact.updatedAt)} />
          </dl>
        </div>
      </details>
    </div>
  );
}

function DashboardWidget(props: {
  compact?: boolean;
  datasets: StudioDashboardDataset[];
  onLoadMoreRows: () => void;
  visibleRowCount: number;
  widget: StudioDashboardWidget;
}) {
  const dataset = props.datasets.find((item) => item.id === props.widget.datasetId) ?? props.datasets[0];
  if (props.widget.kind === "metric") {
    return (
      <article className={cn("rounded-lg border bg-white p-4", toneClasses(props.widget.tone))}>
        <p className="text-sm text-slate-500">{props.widget.title}</p>
        <strong className="mt-2 block text-3xl font-semibold text-slate-950">
          {formatMetricValue(metricValue(props.widget, dataset), props.widget.unit)}
        </strong>
        {props.widget.description ? <p className="mt-2 text-xs text-slate-500">{props.widget.description}</p> : null}
      </article>
    );
  }

  if (props.widget.kind === "line") {
    const rows = chartRowsForWidget(props.widget, dataset);
    const series = props.widget.series?.length ? props.widget.series : inferSeries(rows);
    return (
      <article className={cn("col-span-2 rounded-lg border border-slate-200 bg-white p-4", props.compact ? "max-sm:col-span-1" : "max-md:col-span-1")}>
        <h3 className="text-sm font-medium text-slate-800">{props.widget.title}</h3>
        <div className="mt-4 h-72">
          <ResponsiveContainer height="100%" width="100%">
            <LineChart data={rows}>
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
              <XAxis dataKey={props.widget.xPath ?? "date"} tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis tick={{ fill: "#64748b", fontSize: 12 }} />
              <Tooltip />
              {series.map((entry, index) => (
                <Line dataKey={entry.path} key={entry.path} name={entry.label} stroke={chartColor(index)} strokeWidth={2} type="monotone" />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </article>
    );
  }

  if (props.widget.kind === "bar") {
    const rows = chartRowsForWidget(props.widget, dataset);
    return (
      <article className={cn("col-span-2 rounded-lg border border-slate-200 bg-white p-4", props.compact ? "max-sm:col-span-1" : "max-md:col-span-1")}>
        <h3 className="text-sm font-medium text-slate-800">{props.widget.title}</h3>
        <div className="mt-4 h-72">
          <ResponsiveContainer height="100%" width="100%">
            <BarChart data={rows}>
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
              <XAxis dataKey={props.widget.labelPath ?? props.widget.xPath ?? "name"} tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis tick={{ fill: "#64748b", fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey={props.widget.valuePath ?? props.widget.yPath ?? "value"} fill="#2563eb" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    );
  }

  if (props.widget.kind === "donut") {
    const rows = chartRowsForWidget(props.widget, dataset);
    return (
      <article className="rounded-lg border border-slate-200 bg-white p-4">
        <h3 className="text-sm font-medium text-slate-800">{props.widget.title}</h3>
        <div className="mt-4 h-72">
          <ResponsiveContainer height="100%" width="100%">
            <PieChart>
              <Pie
                data={rows}
                dataKey={props.widget.valuePath ?? "value"}
                innerRadius={54}
                nameKey={props.widget.labelPath ?? "name"}
                outerRadius={84}
              >
                {rows.map((_, index) => <Cell fill={chartColor(index)} key={index} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 grid gap-2">
          {rows.map((row, index) => (
            <div className="flex items-center justify-between gap-3 text-sm" key={String(row[props.widget.labelPath ?? "name"] ?? index)}>
              <span className="inline-flex min-w-0 items-center gap-2 text-slate-600">
                <span className="size-2 rounded-full" style={{ backgroundColor: chartColor(index) }} />
                <span className="truncate">{String(row[props.widget.labelPath ?? "name"] ?? "Value")}</span>
              </span>
              <span className="font-medium text-slate-900">{String(row[props.widget.valuePath ?? "value"] ?? 0)}</span>
            </div>
          ))}
        </div>
      </article>
    );
  }

  if (props.widget.kind === "insight") {
    return (
      <article className="rounded-lg border border-slate-200 bg-white p-4">
        <h3 className="text-sm font-medium text-slate-800">{props.widget.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{props.widget.description ?? summarizeDataset(dataset)}</p>
      </article>
    );
  }

  const rows = tableRowsForWidget(props.widget, dataset);
  const columns = props.widget.columns?.length ? props.widget.columns : inferColumns(rows);
  const visibleRows = rows.slice(0, Math.max(1, props.visibleRowCount));
  return (
    <article className={cn("overflow-hidden rounded-lg border border-slate-200 bg-white", props.compact ? "col-span-2 max-sm:col-span-1" : "col-span-4 max-md:col-span-1")}>
      <div className="border-b border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-800">{props.widget.title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              {columns.map((column) => <th className="px-4 py-3 font-medium" key={column.path}>{column.label}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {visibleRows.map((row, index) => (
              <tr key={String(row.id ?? index)}>
                {columns.map((column) => <td className="max-w-[280px] truncate px-4 py-3" key={column.path}>{formatCell(resolvePath(row, column.path))}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-4 py-3 text-sm text-slate-500">
        <span>
          Showing {new Intl.NumberFormat().format(visibleRows.length)} of {new Intl.NumberFormat().format(rows.length)} rows
        </span>
        {visibleRows.length < rows.length ? (
          <Button
            className="border-slate-200 text-slate-700 hover:bg-slate-50"
            onClick={props.onLoadMoreRows}
            size="sm"
            type="button"
            variant="outline"
          >
            Load more
          </Button>
        ) : null}
      </div>
    </article>
  );
}

function inferWidgets(datasets: StudioDashboardDataset[]): StudioDashboardWidget[] {
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

function metricValue(widget: StudioDashboardWidget, dataset: StudioDashboardDataset | undefined) {
  const rows = conversationRows(dataset?.data);
  if (widget.valuePath?.startsWith("$metrics.") && rows.length) {
    const metrics = conversationMetrics(rows);
    return metrics[widget.valuePath.replace("$metrics.", "") as keyof ReturnType<typeof conversationMetrics>];
  }
  if (widget.valuePath && dataset) return resolvePath(dataset.data, widget.valuePath);
  return Array.isArray(dataset?.data) ? dataset.data.length : rows.length;
}

function chartRowsForWidget(widget: StudioDashboardWidget, dataset: StudioDashboardDataset | undefined): Array<Record<string, unknown>> {
  const rows = conversationRows(dataset?.data);
  const title = `${widget.id} ${widget.title}`.toLowerCase();
  if (rows.length && /\b(trend|week|weekly|time series|over time)\b/.test(title)) return weeklyConversationTrend(rows);
  if (rows.length && /sentiment|satisfaction/.test(title)) return sentimentRows(rows);
  return tableRowsForWidget(widget, dataset);
}

function tableRowsForWidget(_widget: StudioDashboardWidget, dataset: StudioDashboardDataset | undefined): Array<Record<string, unknown>> {
  const rows = conversationRows(dataset?.data);
  if (rows.length) return rows;
  if (Array.isArray(dataset?.data)) return dataset.data.filter(isRecord);
  if (isRecord(dataset?.data)) {
    for (const value of Object.values(dataset.data)) {
      if (Array.isArray(value)) return value.filter(isRecord);
    }
    return [dataset.data];
  }
  return [];
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
  return {
    totalConversations,
    handoverConversations,
    handoverPercentage: totalConversations ? Number(((handoverConversations / totalConversations) * 100).toFixed(1)) : 0,
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

function inferColumns(rows: Array<Record<string, unknown>>) {
  const preferred = ["customerLabel", "lifecycle", "activeJourneyId", "satisfaction", "eventCount", "updatedAt", "summary"];
  const keys = rows[0] ? Object.keys(rows[0]) : [];
  const selected = preferred.filter((key) => keys.includes(key));
  const fallback = keys.filter((key) => !selected.includes(key)).slice(0, Math.max(0, 5 - selected.length));
  return [...selected, ...fallback].slice(0, 6).map((key) => ({ label: labelize(key), path: key }));
}

function inferSeries(rows: Array<Record<string, unknown>>) {
  const sample = rows[0] ?? {};
  return Object.entries(sample)
    .filter(([, value]) => typeof value === "number")
    .slice(0, 3)
    .map(([key]) => ({ label: labelize(key), path: key }));
}

function resolvePath(value: unknown, path: string): unknown {
  if (!path) return value;
  return path.split(".").reduce<unknown>((current, part) => {
    if (!isRecord(current)) return undefined;
    return current[part];
  }, value);
}

function formatMetricValue(value: unknown, unit?: string) {
  const text = typeof value === "number"
    ? new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(value)
    : String(value ?? 0);
  return unit ? `${text}${unit}` : text;
}

function formatCell(value: unknown) {
  if (typeof value === "string" && /\d{4}-\d{2}-\d{2}T/.test(value)) return formatDateTime(value);
  if (typeof value === "number") return new Intl.NumberFormat().format(value);
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function summarizeDataset(dataset: StudioDashboardDataset | undefined) {
  if (!dataset) return "No dataset is attached to this widget.";
  const rows = tableRowsForWidget({ id: "summary", title: "Summary", kind: "table" }, dataset);
  return `${dataset.title} contains ${rows.length} rows captured at ${formatDateTime(dataset.capturedAt)}.`;
}

function Detail(props: { label: string; value: string }) {
  return (
    <div className="grid gap-1">
      <dt className="text-xs font-medium uppercase text-slate-500">{props.label}</dt>
      <dd className="break-words text-slate-700">{props.value}</dd>
    </div>
  );
}

function toneClasses(tone: StudioDashboardWidget["tone"]) {
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

const chartColors = ["#2563eb", "#0f766e", "#dc2626", "#7c3aed", "#f59e0b", "#16a34a"];

function chartColor(index: number) {
  return chartColors[index % chartColors.length] ?? chartColors[0]!;
}
