import type { PreviewDashboard } from "../types";

export type ConcretePreviewDashboard = NonNullable<PreviewDashboard>;

export type DashboardCheckResult = {
  status: "passed" | "failed";
  checkedAt: string;
  issues: string[];
};

export type DashboardRendererTab = "dashboard" | "data" | "sources";

export const DEFAULT_TABLE_PAGE_SIZE = 8;
export const CHART_INITIAL_DIMENSION = { width: 320, height: 288 };
