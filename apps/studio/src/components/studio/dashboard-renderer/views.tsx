"use client";

import type { ReactNode } from "react";
import { Code2Icon, DatabaseIcon, FileSpreadsheetIcon, InfoIcon, LayoutDashboardIcon } from "lucide-react";
import type { StudioDashboardDataset } from "@cognidesk/studio-contracts";
import { cn } from "@/lib/utils";
import { formatDateTime } from "../format";
import {
  formatCell,
  inferDatasetColumns,
  integerFormatter,
  resolvePath,
  rowsFromUnknown,
  sourceFunctionText,
  stableRowKey,
} from "./data";
import type {
  ConcretePreviewDashboard,
  DashboardRendererTab,
} from "./types";
import { ChartEmptyState } from "./widgets";

export function DashboardTabs(props: {
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

export function DashboardDataView(props: {
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
                      {visibleRows.map((row) => (
                        <tr key={String(row.id ?? row.traceId ?? row.timestamp ?? stableRowKey(row))}>
                          {columns.map((column) => (
                            <td className="max-w-[320px] truncate px-4 py-3" key={column.path}>{formatCell(resolvePath(row, column.path))}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-500">
                  Showing {integerFormatter.format(visibleRows.length)} of {integerFormatter.format(rows.length)} rows
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

export function DashboardSourcesView(props: {
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
            {dataset.refreshMs ? <Detail label="Refresh" value={`${integerFormatter.format(dataset.refreshMs / 1000)}s`} /> : null}
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

function Detail(props: { label: string; value: string }) {
  return (
    <div className="grid gap-1">
      <dt className="text-xs font-medium uppercase text-slate-500">{props.label}</dt>
      <dd className="break-words text-slate-700">{props.value}</dd>
    </div>
  );
}
