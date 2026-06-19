import { type Dispatch, type SetStateAction, useRef, useState } from "react";
import type { DashboardCheckResult } from "../dashboard-renderer";
import type { OperatorChatItem, OperatorEventEntry, PreviewDashboard } from "../types";
import { dashboardSnapshotValue, hasDashboardExport, type RawDashboardRow, stringifySmall } from "./activity";

type DashboardEventHandlers = {
  pushOperatorEvent: (event: Omit<OperatorEventEntry, "id">) => void;
  setArtifacts: Dispatch<SetStateAction<Record<string, unknown>[]>>;
  setChatItems: Dispatch<SetStateAction<OperatorChatItem[]>>;
};

export function useOperatorDashboards({ pushOperatorEvent, setArtifacts, setChatItems }: DashboardEventHandlers) {
  const dashboardSnapshotRef = useRef<Map<string, string>>(new Map());
  const surfacedDashboardVersionsRef = useRef<Set<string>>(new Set());
  const [previewDashboard, setPreviewDashboard] = useState<PreviewDashboard>(null);
  const [dashboardChecks, setDashboardChecks] = useState<Record<string, DashboardCheckResult>>({});
  const [dashboardActionError, setDashboardActionError] = useState<string | null>(null);

  async function fetchDashboardRows() {
    const response = await fetch("/api/studio/dashboards", { cache: "no-store" });
    if (!response.ok) return [];
    const data = await response.json() as { dashboards: RawDashboardRow[] };
    return data.dashboards;
  }

  async function fetchDashboardSnapshot() {
    const rows = await fetchDashboardRows();
    return new Map(rows.map((dashboard) => [dashboard.id, dashboardSnapshotValue(dashboard)]));
  }

  async function fetchDashboardPreview(id: string): Promise<PreviewDashboard> {
    const response = await fetch(`/api/studio/dashboards/${id}`, { cache: "no-store" });
    if (!response.ok) return null;
    return await response.json() as PreviewDashboard;
  }

  async function surfaceDashboardChanges() {
    const rows = await fetchDashboardRows().catch(() => []);
    if (!rows.length) return;
    const previous = dashboardSnapshotRef.current;
    dashboardSnapshotRef.current = new Map(rows.map((dashboard) => [dashboard.id, dashboardSnapshotValue(dashboard)]));
    const changed = rows.filter((dashboard) => previous.get(dashboard.id) !== dashboardSnapshotValue(dashboard));
    const dashboard = changed[0];
    if (!dashboard) return;
    const preview = await fetchDashboardPreview(dashboard.id);
    if (!preview) return;
    const surfacedKey = `${preview.artifact.id}:v${preview.artifact.version}`;
    if (surfacedDashboardVersionsRef.current.has(surfacedKey)) return;
    surfacedDashboardVersionsRef.current.add(surfacedKey);
    setArtifacts((items) => [preview.artifact as unknown as Record<string, unknown>, ...items].slice(0, 12));
    pushOperatorEvent({
      kind: "dashboard",
      title: preview.artifact.title,
      ...(preview.artifact.description ? { detail: preview.artifact.description } : {}),
      dashboardId: preview.artifact.id,
      dashboardSlug: preview.artifact.slug,
      dashboardStatus: preview.artifact.status,
      dashboardVersion: preview.artifact.version,
      artifactKey: preview.artifact.artifactKey,
      output: preview.artifact,
      surface: "artifacts",
      status: "completed",
    });
  }

  async function openDashboardFromChat(id: string, openDashboardPanel: () => void) {
    const preview = await fetchDashboardPreview(id);
    if (!preview) {
      setDashboardActionError("Dashboard could not be opened.");
      return;
    }
    setDashboardActionError(null);
    setPreviewDashboard(preview);
    openDashboardPanel();
  }

  async function publishDashboardFromChat(id: string) {
    const response = await fetch(`/api/studio/dashboards/${id}/publish`, { method: "POST" });
    if (!response.ok) {
      setDashboardActionError("Dashboard could not be published.");
      return;
    }
    const data = await response.json() as { dashboard: NonNullable<PreviewDashboard>["artifact"] };
    updateDashboardEvents(id, {
      dashboardStatus: data.dashboard.status,
      dashboardVersion: data.dashboard.version,
      artifactKey: data.dashboard.artifactKey,
      output: data.dashboard,
    });
    setPreviewDashboard((current) => current?.artifact.id === id ? { ...current, artifact: data.dashboard } : current);
    setDashboardActionError(null);
  }

  async function deleteDashboardFromChat(id: string, closeDashboardPanel: () => void) {
    const response = await fetch(`/api/studio/dashboards/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setDashboardActionError("Dashboard could not be deleted.");
      return;
    }
    updateDashboardEvents(id, {
      dashboardStatus: "deleted",
      status: "completed",
    });
    if (previewDashboard?.artifact.id === id) {
      closeDashboardPanel();
      setPreviewDashboard(null);
    }
    setDashboardActionError(null);
  }

  async function checkDashboardFromChat(id: string, openDashboardPanel: () => void) {
    const preview = await fetchDashboardPreview(id);
    if (!preview) {
      setDashboardActionError("Dashboard could not be checked.");
      return;
    }
    const issues: string[] = [];
    if (!hasDashboardExport(preview.code)) issues.push("Generated React code does not export Dashboard.");
    if (!preview.artifact.datasets.length) issues.push("No datasets are attached.");
    if (!preview.artifact.renderer.spec?.widgets?.length) issues.push("No render spec widgets are attached.");
    const liveDatasetChecks = preview.artifact.datasets.reduce<Promise<void>[]>(
      (checks, dataset) => {
        if (dataset.mode !== "live") return checks;
        checks.push(
          fetch("/api/studio/dashboard-data", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(dataset.source),
          }).then((response) => {
            if (!response.ok) issues.push(`Live dataset failed: ${dataset.title}`);
          })
        );
        return checks;
      },
      []
    );
    await Promise.all(liveDatasetChecks);
    const result: DashboardCheckResult = {
      status: issues.length ? "failed" : "passed",
      checkedAt: new Date().toISOString(),
      issues,
    };
    setDashboardChecks((items) => ({ ...items, [id]: result }));
    setPreviewDashboard(preview);
    openDashboardPanel();
    setDashboardActionError(null);
  }

  function updateDashboardEvents(id: string, patch: Partial<OperatorEventEntry>) {
    setChatItems((items) => items.map((item) => {
      if (item.type !== "event" || item.event.dashboardId !== id) return item;
      return { ...item, event: { ...item.event, ...patch } };
    }));
  }

  async function reconcileDashboardEvents(items: OperatorChatItem[]) {
    const dashboardIds = [...new Set(items
      .map((item) => item.type === "event" ? item.event.dashboardId : undefined)
      .filter((id): id is string => Boolean(id)))];
    if (!dashboardIds.length) return;
    const previews = await Promise.all(dashboardIds.map(async (id) => [id, await fetchDashboardPreview(id)] as const));
    const previewById = new Map(previews);
    setChatItems((current) => current.map((item) => {
      if (item.type !== "event" || !item.event.dashboardId) return item;
      if (!previewById.has(item.event.dashboardId)) return item;
      const preview = previewById.get(item.event.dashboardId);
      if (!preview) {
        return {
          ...item,
          event: {
            ...item.event,
            dashboardStatus: "deleted",
            status: "completed",
          },
        };
      }
      return {
        ...item,
        event: {
          ...item.event,
          title: preview.artifact.title,
          ...(preview.artifact.description ? { detail: preview.artifact.description } : {}),
          dashboardSlug: preview.artifact.slug,
          dashboardStatus: preview.artifact.status,
          dashboardVersion: preview.artifact.version,
          artifactKey: preview.artifact.artifactKey,
          output: preview.artifact,
          status: "completed",
        },
      };
    }));
  }

  function pushArtifactEvent(artifact: Record<string, unknown>) {
    const artifactDetail = stringifySmall(artifact);
    setArtifacts((items) => [artifact, ...items].slice(0, 12));
    pushOperatorEvent({
      kind: "artifact",
      title: String(artifact.title ?? artifact.type ?? "Artifact updated"),
      ...(artifactDetail ? { detail: artifactDetail } : {}),
      output: artifact,
      surface: "artifacts",
      status: "completed",
    });
  }

  return {
    checkDashboardFromChat,
    dashboardActionError,
    dashboardChecks,
    dashboardSnapshotRef,
    deleteDashboardFromChat,
    fetchDashboardSnapshot,
    openDashboardFromChat,
    previewDashboard,
    publishDashboardFromChat,
    pushArtifactEvent,
    reconcileDashboardEvents,
    setDashboardActionError,
    setPreviewDashboard,
    surfaceDashboardChanges,
  };
}
