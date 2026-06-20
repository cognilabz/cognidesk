"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { RefreshCwIcon } from "lucide-react";
import type { StudioDashboardDataset } from "@cognidesk/studio-contracts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatDateTime } from "../format";
import {
  DEFAULT_TABLE_PAGE_SIZE,
  type ConcretePreviewDashboard,
  type DashboardCheckResult,
  type DashboardRendererTab,
} from "./types";
import { inferWidgets } from "./data";
import {
  DashboardDataView,
  DashboardSourcesView,
  DashboardTabs,
} from "./views";
import { DashboardWidget } from "./widgets";

export type { DashboardCheckResult } from "./types";

export function DashboardRenderer(props: {
  previewDashboard: ConcretePreviewDashboard;
  compact?: boolean;
  checkResult?: DashboardCheckResult | null;
}) {
  const dashboardKey = `${props.previewDashboard.artifact.id}:${props.previewDashboard.artifact.version}`;
  return <DashboardRendererContent key={dashboardKey} {...props} />;
}

function DashboardRendererContent(props: {
  previewDashboard: ConcretePreviewDashboard;
  compact?: boolean;
  checkResult?: DashboardCheckResult | null;
}) {
  const baseDatasets = props.previewDashboard.artifact.datasets;
  const [datasetOverrides, setDatasetOverrides] = useState<Record<string, StudioDashboardDataset>>({});
  const [refreshingDatasetId, setRefreshingDatasetId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<DashboardRendererTab>("dashboard");
  const [visibleRowsByWidget, setVisibleRowsByWidget] = useState<Record<string, number>>({});
  const datasets = useMemo(
    () => baseDatasets.map((dataset) => datasetOverrides[dataset.id] ?? dataset),
    [baseDatasets, datasetOverrides],
  );
  const spec = props.previewDashboard.artifact.renderer.spec;
  const widgets = useMemo(
    () => spec?.widgets?.length ? spec.widgets : inferWidgets(datasets),
    [datasets, spec],
  );
  const liveDatasets = useMemo(
    () => datasets.filter((dataset) => dataset.mode === "live"),
    [datasets],
  );

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
      setDatasetOverrides((items) => ({
        ...items,
        [dataset.id]: {
          ...dataset,
          capturedAt: data.dataset.capturedAt,
          data: data.dataset.data,
          source: data.dataset.source,
        },
      }));
    } finally {
      setRefreshingDatasetId(null);
    }
  }, []);

  useEffect(() => {
    const live: StudioDashboardDataset[] = [];
    for (const dataset of baseDatasets) {
      if (dataset.mode === "live") live.push(dataset);
    }
    if (!live.length) return;
    void Promise.all(live.map((dataset) => refreshDataset(dataset)));
  }, [baseDatasets, refreshDataset]);

  useEffect(() => {
    const timers: number[] = [];
    for (const dataset of liveDatasets) {
      if (dataset.refreshMs && dataset.refreshMs >= 5000) {
        timers.push(window.setInterval(() => void refreshDataset(dataset), dataset.refreshMs));
      }
    }
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
