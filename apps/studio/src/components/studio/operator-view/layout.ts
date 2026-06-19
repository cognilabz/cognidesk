import { type CSSProperties, type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";
import {
  CHAT_INLINE_MIN_WIDTH,
  DASHBOARD_COLLAPSE_THRESHOLD,
  DASHBOARD_DEFAULT_WIDTH,
  DASHBOARD_INLINE_MIN_WIDTH,
  DASHBOARD_RESIZE_MIN_WIDTH,
  SESSION_COLLAPSE_THRESHOLD,
  SESSION_DEFAULT_WIDTH,
  SESSION_MAX_WIDTH,
  SESSION_RAIL_WIDTH,
  SESSION_RESIZE_MIN_WIDTH,
} from "./config";
import { beginColumnResize, clamp } from "./panels";

export function useOperatorViewLayout({ hasPreviewDashboard }: { hasPreviewDashboard: boolean }) {
  const operatorLayoutRef = useRef<HTMLElement | null>(null);
  const [sessionSidebarCollapsed, setSessionSidebarCollapsed] = useState(false);
  const [sessionSidebarWidth, setSessionSidebarWidth] = useState(SESSION_DEFAULT_WIDTH);
  const [dashboardPanelOpen, setDashboardPanelOpen] = useState(false);
  const [dashboardPanelWidth, setDashboardPanelWidth] = useState(DASHBOARD_DEFAULT_WIDTH);
  const [dashboardPanelMaximized, setDashboardPanelMaximized] = useState(false);
  const [operatorLayoutWidth, setOperatorLayoutWidth] = useState<number | undefined>(undefined);

  const sessionColumnWidth = sessionSidebarCollapsed ? SESSION_RAIL_WIDTH : sessionSidebarWidth;
  const dashboardAvailableInlineWidth = operatorLayoutWidth !== undefined
    ? operatorLayoutWidth - sessionColumnWidth - CHAT_INLINE_MIN_WIDTH
    : null;
  const dashboardInlineMaxWidth = dashboardAvailableInlineWidth;
  const canShowDashboardInline = dashboardInlineMaxWidth !== null && dashboardInlineMaxWidth >= DASHBOARD_INLINE_MIN_WIDTH;
  const dashboardInlineWidth = canShowDashboardInline
    ? clamp(dashboardPanelWidth, DASHBOARD_INLINE_MIN_WIDTH, dashboardInlineMaxWidth)
    : DASHBOARD_INLINE_MIN_WIDTH;
  const dashboardPanelVisible = dashboardPanelOpen && hasPreviewDashboard;
  const effectiveDashboardPanelMaximized = dashboardPanelMaximized || (
    dashboardPanelVisible
    && dashboardInlineMaxWidth !== null
    && !canShowDashboardInline
  );
  const operatorGridStyle = {
    "--session-column": `${sessionColumnWidth}px`,
    "--dashboard-column": effectiveDashboardPanelMaximized
      ? "calc(100% - var(--session-column))"
      : `${dashboardInlineWidth}px`,
  } as CSSProperties;

  useEffect(() => {
    const node = operatorLayoutRef.current;
    if (!node) return;
    const updateLayoutWidth = () => {
      setOperatorLayoutWidth(node.getBoundingClientRect().width);
    };
    const observer = new ResizeObserver(updateLayoutWidth);
    observer.observe(node);
    window.addEventListener("resize", updateLayoutWidth);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLayoutWidth);
    };
  }, []);

  function closeDashboardPanel(options?: { resetWidth?: boolean }) {
    setDashboardPanelOpen(false);
    setDashboardPanelMaximized(false);
    if (options?.resetWidth) {
      setDashboardPanelWidth(DASHBOARD_DEFAULT_WIDTH);
    }
  }

  function openDashboardPanel(options: { resetWidth?: boolean } = {}) {
    setDashboardPanelMaximized(false);
    if (options.resetWidth) setDashboardPanelWidth(DASHBOARD_DEFAULT_WIDTH);
    setDashboardPanelOpen(true);
  }

  function toggleDashboardMaximized() {
    if (effectiveDashboardPanelMaximized) {
      if (!canShowDashboardInline || dashboardInlineMaxWidth === null) {
        setDashboardPanelMaximized(true);
        return;
      }
      setDashboardPanelMaximized(false);
      setDashboardPanelWidth(clamp(DASHBOARD_DEFAULT_WIDTH, DASHBOARD_INLINE_MIN_WIDTH, dashboardInlineMaxWidth));
      return;
    }
    setDashboardPanelMaximized(true);
  }

  function startSessionSidebarResize(event: ReactPointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    const rect = operatorLayoutRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cleanup = beginColumnResize();
    const handlePointerMove = (moveEvent: PointerEvent) => {
      const rawWidth = moveEvent.clientX - rect.left;
      if (rawWidth <= SESSION_COLLAPSE_THRESHOLD) {
        setSessionSidebarCollapsed(true);
        return;
      }
      setSessionSidebarCollapsed(false);
      setSessionSidebarWidth(clamp(rawWidth, SESSION_RESIZE_MIN_WIDTH, SESSION_MAX_WIDTH));
    };
    const handlePointerUp = () => {
      cleanup();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp, { once: true });
  }

  function startDashboardResize(event: ReactPointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    const handle = event.currentTarget;
    const pointerId = event.pointerId;
    try {
      handle.setPointerCapture(pointerId);
    } catch {
      // Pointer capture is best effort; window listeners still carry the resize.
    }
    const rect = operatorLayoutRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cleanup = beginColumnResize();
    let closedDuringResize = false;
    const updateDashboardWidth = (clientX: number) => {
      if (closedDuringResize) return;
      const width = rect.right - clientX;
      const availableWidth = rect.width - sessionColumnWidth - CHAT_INLINE_MIN_WIDTH;
      const maxWidth = Math.max(DASHBOARD_RESIZE_MIN_WIDTH, availableWidth);
      if (width <= DASHBOARD_COLLAPSE_THRESHOLD) {
        closedDuringResize = true;
        closeDashboardPanel({ resetWidth: true });
        return;
      }
      if (width >= maxWidth) {
        setDashboardPanelMaximized(true);
        setDashboardPanelWidth(maxWidth);
        return;
      }
      setDashboardPanelMaximized(false);
      setDashboardPanelWidth(clamp(width, DASHBOARD_INLINE_MIN_WIDTH, maxWidth));
    };
    const handlePointerMove = (moveEvent: PointerEvent) => {
      updateDashboardWidth(moveEvent.clientX);
    };
    const handlePointerUp = (upEvent: PointerEvent) => {
      updateDashboardWidth(upEvent.clientX);
      try {
        handle.releasePointerCapture(pointerId);
      } catch {
        // Capture may already be released if the pointer left the handle.
      }
      cleanup();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp, { once: true });
  }

  return {
    closeDashboardPanel,
    dashboardPanelVisible,
    effectiveDashboardPanelMaximized,
    openDashboardPanel,
    operatorGridStyle,
    operatorLayoutRef,
    sessionSidebarCollapsed,
    setSessionSidebarCollapsed,
    startDashboardResize,
    startSessionSidebarResize,
    toggleDashboardMaximized,
  };
}
