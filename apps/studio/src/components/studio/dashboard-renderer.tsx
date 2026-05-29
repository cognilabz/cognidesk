"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Code2Icon, DatabaseIcon, FileSpreadsheetIcon, InfoIcon, LayoutDashboardIcon, RefreshCwIcon } from "lucide-react";
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

const CHART_INITIAL_DIMENSION = { width: 320, height: 288 };
type DashboardRendererTab = "dashboard" | "data" | "sources";

export function DashboardRenderer(props: {
  previewDashboard: ConcretePreviewDashboard;
  compact?: boolean;
  checkResult?: DashboardCheckResult | null;
}) {
  const [datasets, setDatasets] = useState(props.previewDashboard.artifact.datasets);
  const [refreshingDatasetId, setRefreshingDatasetId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<DashboardRendererTab>("dashboard");
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
    setActiveTab("dashboard");
  }, [props.previewDashboard.artifact.id, props.previewDashboard.artifact.version, props.previewDashboard.artifact.datasets]);

  useEffect(() => {
    const live = props.previewDashboard.artifact.datasets.filter((dataset) => dataset.mode === "live");
    if (!live.length) return;
    void Promise.all(live.map((dataset) => refreshDataset(dataset)));
  }, [props.previewDashboard.artifact.id, props.previewDashboard.artifact.version, props.previewDashboard.artifact.datasets, refreshDataset]);

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

      <DashboardTabs
        activeTab={activeTab}
        datasetCount={datasets.length}
        liveDatasetCount={liveDatasets.length}
        onSelect={setActiveTab}
      />

      {activeTab === "dashboard" ? (
        <section
          className={cn(
            "grid gap-4",
            props.compact ? "grid-cols-2 max-sm:grid-cols-1" : "grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1",
          )}
          data-testid="dashboard-chart-view"
        >
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
      ) : null}

      {activeTab === "data" ? (
        <DashboardDataView compact={Boolean(props.compact)} datasets={datasets} />
      ) : null}

      {activeTab === "sources" ? (
        <DashboardSourcesView datasets={datasets} previewDashboard={props.previewDashboard} />
      ) : null}
    </div>
  );
}

function DashboardTabs(props: {
  activeTab: DashboardRendererTab;
  datasetCount: number;
  liveDatasetCount: number;
  onSelect: (tab: DashboardRendererTab) => void;
}) {
  const tabs: Array<{ id: DashboardRendererTab; label: string; meta: string; icon: ReactNode }> = [
    { id: "dashboard", label: "Dashboard", meta: "Charts", icon: <LayoutDashboardIcon className="size-4" /> },
    { id: "data", label: "Data", meta: `${props.datasetCount} datasets`, icon: <FileSpreadsheetIcon className="size-4" /> },
    { id: "sources", label: "Sources", meta: `${props.liveDatasetCount} live`, icon: <Code2Icon className="size-4" /> },
  ];
  return (
    <div className="flex max-w-full gap-2 overflow-x-auto border-b border-slate-200" data-testid="dashboard-view-tabs">
      {tabs.map((tab) => (
        <button
          className={cn(
            "inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-3 text-left text-sm transition-colors",
            props.activeTab === tab.id
              ? "border-slate-950 text-slate-950"
              : "border-transparent text-slate-500 hover:text-slate-800",
          )}
          data-testid={`dashboard-tab-${tab.id}`}
          key={tab.id}
          onClick={() => props.onSelect(tab.id)}
          type="button"
        >
          {tab.icon}
          <span className="grid gap-0.5">
            <span className="font-medium leading-none">{tab.label}</span>
            <span className="text-xs leading-none text-slate-400">{tab.meta}</span>
          </span>
        </button>
      ))}
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
    const xDataKey = chartXAxisKey(props.widget, rows);
    const series = props.widget.series?.length ? props.widget.series : inferSeries(rows, xDataKey);
    return (
      <article className={cn("col-span-2 min-w-0 rounded-lg border border-slate-200 bg-white p-4", props.compact ? "max-sm:col-span-1" : "max-md:col-span-1")}>
        <h3 className="text-sm font-medium text-slate-800">{props.widget.title}</h3>
        <div className="mt-4 h-72 min-w-0">
          {rows.length && series.length ? (
            <ResponsiveContainer height="100%" initialDimension={CHART_INITIAL_DIMENSION} minHeight={0} minWidth={0} width="100%">
              <LineChart data={rows}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                <XAxis dataKey={xDataKey} tick={{ fill: "#64748b", fontSize: 12 }} />
                <YAxis tick={{ fill: "#64748b", fontSize: 12 }} />
                <Tooltip />
                {series.map((entry, index) => (
                  <Line dataKey={entry.path} key={entry.path} name={entry.label} stroke={chartColor(index)} strokeWidth={2} type="monotone" />
                ))}
              </LineChart>
            </ResponsiveContainer>
          ) : <ChartEmptyState />}
        </div>
      </article>
    );
  }

  if (props.widget.kind === "bar") {
    const rows = chartRowsForWidget(props.widget, dataset);
    const labelKey = chartLabelKey(props.widget, rows);
    const valueKey = chartValueKey(props.widget, rows);
    return (
      <article className={cn("col-span-2 min-w-0 rounded-lg border border-slate-200 bg-white p-4", props.compact ? "max-sm:col-span-1" : "max-md:col-span-1")}>
        <h3 className="text-sm font-medium text-slate-800">{props.widget.title}</h3>
        <div className="mt-4 h-72 min-w-0">
          {rows.length ? (
            <ResponsiveContainer height="100%" initialDimension={CHART_INITIAL_DIMENSION} minHeight={0} minWidth={0} width="100%">
              <BarChart data={rows}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                <XAxis dataKey={labelKey} tick={{ fill: "#64748b", fontSize: 12 }} />
                <YAxis tick={{ fill: "#64748b", fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey={valueKey} fill="#2563eb" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : <ChartEmptyState />}
        </div>
      </article>
    );
  }

  if (props.widget.kind === "donut") {
    const rows = chartRowsForWidget(props.widget, dataset);
    const labelKey = chartLabelKey(props.widget, rows);
    const valueKey = chartValueKey(props.widget, rows);
    return (
      <article className="min-w-0 rounded-lg border border-slate-200 bg-white p-4">
        <h3 className="text-sm font-medium text-slate-800">{props.widget.title}</h3>
        <div className="mt-4 h-72 min-w-0">
          {rows.length ? (
            <ResponsiveContainer height="100%" initialDimension={CHART_INITIAL_DIMENSION} minHeight={0} minWidth={0} width="100%">
              <PieChart>
                <Pie
                  data={rows}
                  dataKey={valueKey}
                  innerRadius={54}
                  nameKey={labelKey}
                  outerRadius={84}
                >
                  {rows.map((_, index) => <Cell fill={chartColor(index)} key={index} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : <ChartEmptyState />}
        </div>
        <div className="mt-2 grid gap-2">
          {rows.map((row, index) => (
            <div className="flex items-center justify-between gap-3 text-sm" key={String(resolvePath(row, labelKey) ?? index)}>
              <span className="inline-flex min-w-0 items-center gap-2 text-slate-600">
                <span className="size-2 rounded-full" style={{ backgroundColor: chartColor(index) }} />
                <span className="truncate">{String(resolvePath(row, labelKey) ?? "Value")}</span>
              </span>
              <span className="font-medium text-slate-900">{String(resolvePath(row, valueKey) ?? 0)}</span>
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

function DashboardDataView(props: {
  compact?: boolean;
  datasets: StudioDashboardDataset[];
}) {
  if (!props.datasets.length) {
    return <ChartEmptyState text="No datasets attached" />;
  }
  const rowLimit = props.compact ? 8 : 24;
  return (
    <section className="grid gap-4" data-testid="dashboard-data-view">
      {props.datasets.map((dataset) => {
        const rows = rowsFromUnknown(dataset.data);
        const columns = inferDatasetColumns(rows);
        const visibleRows = rows.slice(0, rowLimit);
        return (
          <article className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white" data-testid="dashboard-dataset-table" key={dataset.id}>
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 p-4">
              <div className="min-w-0">
                <p className="inline-flex items-center gap-2 text-xs font-medium uppercase text-slate-500">
                  <FileSpreadsheetIcon className="size-4" />
                  Spreadsheet data
                </p>
                <h3 className="mt-1 truncate text-base font-semibold text-slate-950">{dataset.title}</h3>
                {dataset.description ? <p className="mt-1 text-sm text-slate-500">{dataset.description}</p> : null}
              </div>
              <div className="flex shrink-0 flex-wrap gap-2 text-xs">
                <span className={cn(
                  "rounded-full px-2 py-1 font-medium",
                  dataset.mode === "live" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600",
                )}>
                  {dataset.mode === "live" ? "Live" : "Static"}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">{rows.length} rows</span>
              </div>
            </div>
            {rows.length && columns.length ? (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                      <tr>
                        {columns.map((column) => (
                          <th className="px-4 py-3 font-medium" key={column.path}>{column.label}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {visibleRows.map((row, index) => (
                        <tr key={String(row.id ?? row.traceId ?? row.timestamp ?? index)}>
                          {columns.map((column) => (
                            <td className="max-w-[320px] truncate px-4 py-3" key={column.path}>{formatCell(resolvePath(row, column.path))}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-500">
                  Showing {new Intl.NumberFormat().format(visibleRows.length)} of {new Intl.NumberFormat().format(rows.length)} rows
                </div>
              </>
            ) : (
              <div className="h-44 p-4">
                <ChartEmptyState text="No rows returned" />
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}

function DashboardSourcesView(props: {
  datasets: StudioDashboardDataset[];
  previewDashboard: ConcretePreviewDashboard;
}) {
  return (
    <section className="grid gap-4" data-testid="dashboard-sources-view">
      <article className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="inline-flex items-center gap-2 text-xs font-medium uppercase text-slate-500">
          <InfoIcon className="size-4" />
          Artifact
        </p>
        <dl className="mt-3 grid gap-2 text-sm">
          <Detail label="Status" value={props.previewDashboard.artifact.status} />
          <Detail label="Version" value={`v${props.previewDashboard.artifact.version}`} />
          <Detail label="Datasets" value={props.datasets.map((dataset) => dataset.title).join(", ") || "0"} />
          <Detail label="Artifact key" value={props.previewDashboard.artifact.artifactKey} />
          <Detail label="Updated" value={formatDateTime(props.previewDashboard.artifact.updatedAt)} />
        </dl>
      </article>

      {props.datasets.map((dataset) => (
        <article className="min-w-0 rounded-lg border border-slate-200 bg-white p-4" data-testid="dashboard-source-card" key={dataset.id}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase text-slate-500">
                <DatabaseIcon className="size-4" />
                Data source
              </p>
              <h3 className="mt-1 truncate text-base font-semibold text-slate-950">{dataset.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{dataset.source.capability}</p>
            </div>
            <span className={cn(
              "rounded-full px-2 py-1 text-xs font-medium",
              dataset.mode === "live" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600",
            )}>
              {dataset.mode === "live" ? "Live API" : "Static snapshot"}
            </span>
          </div>
          <div className="mt-4 grid gap-3">
            <Detail label="Target" value={dataset.source.targetId} />
            <Detail label="Captured" value={formatDateTime(dataset.capturedAt)} />
            {dataset.refreshMs ? <Detail label="Refresh" value={`${new Intl.NumberFormat().format(dataset.refreshMs / 1000)}s`} /> : null}
          </div>
          <div className="mt-4 grid gap-2">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase text-slate-500">
              <Code2Icon className="size-4" />
              Function call
            </p>
            <pre className="max-h-80 overflow-auto rounded-md bg-slate-950 p-3 text-xs leading-5 text-slate-100">
              <code>{sourceFunctionText(dataset)}</code>
            </pre>
          </div>
        </article>
      ))}
    </section>
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
  return Array.isArray(dataset?.data) ? dataset.data.length : (rows.length || rowsFromUnknown(dataset?.data).length);
}

function chartRowsForWidget(widget: StudioDashboardWidget, dataset: StudioDashboardDataset | undefined): Array<Record<string, unknown>> {
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

function tableRowsForWidget(_widget: StudioDashboardWidget, dataset: StudioDashboardDataset | undefined): Array<Record<string, unknown>> {
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

function inferColumns(rows: Array<Record<string, unknown>>) {
  const preferred = ["customerLabel", "lifecycle", "activeJourneyId", "satisfaction", "eventCount", "updatedAt", "summary"];
  const keys = rows[0] ? Object.keys(rows[0]) : [];
  const selected = preferred.filter((key) => keys.includes(key));
  const fallback = keys.filter((key) => !selected.includes(key)).slice(0, Math.max(0, 5 - selected.length));
  return [...selected, ...fallback].slice(0, 6).map((key) => ({ label: labelize(key), path: key }));
}

function inferDatasetColumns(rows: Array<Record<string, unknown>>) {
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

function inferSeries(rows: Array<Record<string, unknown>>, xDataKey?: string) {
  const sample = rows[0] ?? {};
  return Object.entries(sample)
    .filter(([key, value]) => typeof value === "number" && key !== xDataKey && !isAxisLikeKey(key))
    .slice(0, 3)
    .map(([key]) => ({ label: labelize(key), path: key }));
}

function resolvePath(value: unknown, path: string): unknown {
  if (!path) return value;
  if (isRecord(value) && path in value) return value[path];
  return path.replace(/\[(\w+)\]/g, ".$1").split(".").reduce<unknown>((current, part) => {
    if (!isRecord(current)) return undefined;
    return current[part];
  }, value);
}

function rowsFromUnknown(value: unknown): Array<Record<string, unknown>> {
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
  return [...rowsByTimestamp.values()].sort((left, right) => Number(left.timestamp) - Number(right.timestamp));
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
  return traces.filter(isRecord).map((trace, index) => {
    const durationMs = numericValue(trace.durationMs ?? trace.duration ?? trace.durationMillis);
    const spanCount = numericValue(trace.spanCount ?? trace.spans);
    const startedAt = typeof trace.startedAt === "string"
      ? trace.startedAt
      : typeof trace.startTimeUnixNano === "string"
        ? nanoTimestampToIso(trace.startTimeUnixNano)
        : undefined;
    return {
      ...trace,
      name: String(trace.rootTraceName ?? trace.rootSpanName ?? trace.name ?? trace.traceId ?? trace.traceID ?? `Trace ${index + 1}`),
      ...(typeof trace.rootServiceName === "string" ? { serviceName: trace.rootServiceName } : {}),
      ...(startedAt ? { startedAt } : {}),
      status: typeof trace.status === "string" ? trace.status : "unknown",
      ...(durationMs !== null ? { durationMs, value: durationMs } : {}),
      ...(spanCount !== null ? { spanCount } : {}),
    };
  });
}

function nanoTimestampToIso(value: string) {
  const millis = Number(value.slice(0, -6));
  return Number.isFinite(millis) ? new Date(millis).toISOString() : undefined;
}

function chartXAxisKey(widget: StudioDashboardWidget, rows: Array<Record<string, unknown>>) {
  return widget.xPath ?? firstExistingPath(rows, ["date", "time", "timestamp", "name"]) ?? "date";
}

function chartLabelKey(widget: StudioDashboardWidget, rows: Array<Record<string, unknown>>) {
  return widget.labelPath ?? widget.xPath ?? firstExistingPath(rows, ["name", "label", "date", "time", "timestamp"]) ?? "name";
}

function chartValueKey(widget: StudioDashboardWidget, rows: Array<Record<string, unknown>>) {
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

function ChartEmptyState({ text = "No chart data" }: { text?: string }) {
  return (
    <div className="grid h-full place-items-center rounded-md border border-dashed border-slate-200 bg-slate-50 text-sm text-slate-500">
      {text}
    </div>
  );
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

function sourceFunctionText(dataset: StudioDashboardDataset) {
  return `queryDashboardData(${JSON.stringify(dataset.source, null, 2)})`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

const chartColors = ["#2563eb", "#0f766e", "#dc2626", "#7c3aed", "#f59e0b", "#16a34a"];

function chartColor(index: number) {
  return chartColors[index % chartColors.length] ?? chartColors[0]!;
}
