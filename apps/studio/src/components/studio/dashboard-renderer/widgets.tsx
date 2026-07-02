"use client";

import dynamic from "next/dynamic";
import type { StudioDashboardDataset, StudioDashboardWidget } from "@cognidesk/studio-contracts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  chartColor,
  chartLabelKey,
  chartRowsForWidget,
  chartValueKey,
  chartXAxisKey,
  formatCell,
  formatMetricValue,
  inferColumns,
  inferSeries,
  integerFormatter,
  metricValue,
  resolvePath,
  stableRowKey,
  summarizeDataset,
  tableRowsForWidget,
  toneClasses,
} from "./data";
import { CHART_INITIAL_DIMENSION } from "./types";

const Bar = dynamic(() => import("recharts").then((mod) => mod.Bar), { ssr: false });
const BarChart = dynamic(() => import("recharts").then((mod) => mod.BarChart), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then((mod) => mod.CartesianGrid), { ssr: false });
const Cell = dynamic(() => import("recharts").then((mod) => mod.Cell), { ssr: false });
const Line = dynamic(() => import("recharts").then((mod) => mod.Line), { ssr: false });
const LineChart = dynamic(() => import("recharts").then((mod) => mod.LineChart), { ssr: false });
const Pie = dynamic(() => import("recharts").then((mod) => mod.Pie), { ssr: false });
const PieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((mod) => mod.ResponsiveContainer), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), { ssr: false });
const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), { ssr: false });

export function DashboardWidget(props: {
  compact?: boolean;
  datasets: StudioDashboardDataset[];
  onLoadMoreRows: () => void;
  visibleRowCount: number;
  widget: StudioDashboardWidget;
}) {
  const dataset = props.datasets.find((item) => item.id === props.widget.datasetId) ?? props.datasets[0];
  if (props.widget.kind === "metric") {
    const value = metricValue(props.widget, dataset);
    const missing = value === undefined || value === null;
    return (
      <article className={cn("rounded-lg border bg-white p-4", missing ? "border-amber-200 bg-amber-50" : toneClasses(props.widget.tone))}>
        <p className="text-sm text-slate-500">{props.widget.title}</p>
        <strong className={cn("mt-2 block font-semibold", missing ? "text-base text-amber-800" : "text-3xl text-slate-950")}>
          {formatMetricValue(value, props.widget.unit)}
        </strong>
        {missing && props.widget.valuePath ? <p className="mt-2 text-xs text-amber-800">No value found for {props.widget.valuePath}.</p> : null}
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
                  {rows.map((row, index) => <Cell fill={chartColor(index)} key={String(resolvePath(row, labelKey) ?? JSON.stringify(row))} />)}
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
            {visibleRows.map((row) => (
              <tr key={String(row.id ?? stableRowKey(row))}>
                {columns.map((column) => <td className="max-w-[280px] truncate px-4 py-3" key={column.path}>{formatCell(resolvePath(row, column.path))}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-4 py-3 text-sm text-slate-500">
        <span>
          Showing {integerFormatter.format(visibleRows.length)} of {integerFormatter.format(rows.length)} rows
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

export function ChartEmptyState({ text = "No chart data" }: { text?: string }) {
  return (
    <div className="grid h-full place-items-center rounded-md border border-dashed border-slate-200 bg-slate-50 text-sm text-slate-500">
      {text}
    </div>
  );
}
