import { describe, expect, it } from "vitest";
import type { StudioDashboardDataset, StudioDashboardWidget } from "@cognidesk/studio-contracts";
import { metricValue } from "./data";

const conversationsDataset: StudioDashboardDataset = {
  id: "live-conversations",
  title: "Current conversations",
  mode: "live",
  source: {
    capability: "cognidesk.conversations",
    targetId: "flight-demo-local",
    params: { lifecycle: "active" },
  },
  capturedAt: "2026-06-26T08:20:00.000Z",
  data: {
    conversations: [
      { id: "conversation_1", lifecycle: "active", activeJourneyId: "human-handoff" },
      { id: "conversation_2", lifecycle: "active", activeJourneyId: "human-handoff" },
      { id: "conversation_3", lifecycle: "active", activeJourneyId: "book-flight" },
      { id: "conversation_4", lifecycle: "active", summary: "Escalated to a specialist." },
      { id: "conversation_5", lifecycle: "active" },
    ],
  },
};

const prometheusVectorDataset: StudioDashboardDataset = {
  id: "live-token-usage",
  title: "Token usage",
  mode: "live",
  source: {
    capability: "telemetry.metrics",
    targetId: "flight-demo-local",
    params: { query: "sum(cognidesk_model_tokens_sum{cognidesk_token_kind=\"total\"})" },
  },
  capturedAt: "2026-06-26T08:20:00.000Z",
  data: {
    status: "success",
    data: {
      resultType: "vector",
      result: [
        {
          metric: { __name__: "cognidesk_model_tokens_sum", cognidesk_token_kind: "total" },
          value: [1782558000, "123"],
        },
      ],
    },
  },
};

function metricWidget(valuePath: string): StudioDashboardWidget {
  return {
    id: valuePath,
    title: valuePath,
    kind: "metric",
    datasetId: "live-conversations",
    valuePath,
  };
}

describe("dashboard conversation metrics", () => {
  it("supports exact journey-count metrics separately from broad handover metrics", () => {
    expect(metricValue(metricWidget("$metrics.totalConversations"), conversationsDataset)).toBe(5);
    expect(metricValue(metricWidget("$metrics.handoverConversations"), conversationsDataset)).toBe(3);
    expect(metricValue(metricWidget("$metrics.journeyCounts.human-handoff"), conversationsDataset)).toBe(2);
    expect(metricValue(metricWidget("$metrics.journeyCounts.unassigned"), conversationsDataset)).toBe(2);
  });

  it("reads metric cards from normalized Prometheus vector rows", () => {
    expect(metricValue({
      ...metricWidget("value"),
      datasetId: "live-token-usage",
    }, prometheusVectorDataset)).toBe(123);
  });

  it("returns zero for missing exact journey-count buckets", () => {
    expect(metricValue(metricWidget("$metrics.journeyCounts.secure-email-login"), conversationsDataset)).toBe(0);
    expect(metricValue(metricWidget("$metrics.journeyCounts.human-handoff"), {
      ...conversationsDataset,
      data: { conversations: [] },
    })).toBe(0);
  });
});
