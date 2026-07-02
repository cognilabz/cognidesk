import { describe, expect, it } from "vitest";
import type { StudioDashboardDataset, StudioDashboardWidget } from "@cognidesk/studio-contracts";
import { formatMetricValue, metricValue, resolvePath, rowsFromUnknown } from "./data";

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

const conversationTokenDataset: StudioDashboardDataset = {
  id: "conversation-token-usage",
  title: "Conversation token usage",
  mode: "live",
  source: {
    capability: "cognidesk.conversations",
    targetId: "cognitrain-local",
    params: { limit: 100 },
  },
  capturedAt: "2026-06-26T08:20:00.000Z",
  data: Array.from({ length: 100 }, (_, index) => ({
    id: `conversation_${index + 1}`,
    lifecycle: "closed",
    createdAt: "2026-06-26T08:00:00.000Z",
    updatedAt: "2026-06-26T08:10:00.000Z",
    totalTokens: index + 1,
    modelCalls: index % 2 === 0 ? 1 : 2,
    usage: {
      totalTokens: 2,
    },
    attributes: {
      "gen_ai.request.model": index % 2 === 0 ? "gpt-5-mini" : null,
    },
  })),
};

const traceSpanDataset: StudioDashboardDataset = {
  id: "trace-spans",
  title: "Trace spans",
  mode: "live",
  source: {
    capability: "telemetry.traces",
    targetId: "cognitrain-local",
    params: { traceId: "trace_1" },
  },
  capturedAt: "2026-06-26T08:20:00.000Z",
  data: {
    rawTraces: [{ traceId: "trace_1", raw: { resourceSpans: [] } }],
    traces: [{ traceId: "trace_1", spanCount: 2, raw: { resourceSpans: [] } }],
    spans: [
      {
        traceId: "trace_1",
        spanId: "span_1",
        name: "message.generated",
        attributes: {
          "usage.total_tokens": "420",
          "gen_ai.request.model": "gpt-5-mini",
        },
        resourceAttributes: {
          "service.name": "cognitrain-runtime",
        },
      },
      {
        traceId: "trace_1",
        spanId: "span_2",
        name: "tool.completed",
        attributes: {
          "usage.total_tokens": "80",
        },
        resourceAttributes: {
          "service.name": "cognitrain-runtime",
        },
      },
    ],
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

  it("aggregates explicit metric paths over generic conversation rows", () => {
    expect(metricValue({
      ...metricWidget("totalTokens"),
      aggregate: "sum",
      datasetId: "conversation-token-usage",
    }, conversationTokenDataset)).toBe(5050);
    expect(metricValue({
      ...metricWidget("sum(modelCalls)"),
      datasetId: "conversation-token-usage",
    }, conversationTokenDataset)).toBe(150);
    expect(metricValue({
      ...metricWidget("avg(usage.totalTokens)"),
      datasetId: "conversation-token-usage",
    }, conversationTokenDataset)).toBe(2);
    expect(metricValue({
      ...metricWidget("attributes[\"gen_ai.request.model\"]"),
      aggregate: "countNonNull",
      datasetId: "conversation-token-usage",
    }, conversationTokenDataset)).toBe(50);
  });

  it("does not fall back to row count for missing explicit metric paths", () => {
    const value = metricValue({
      ...metricWidget("usage.missingTotalTokens"),
      datasetId: "conversation-token-usage",
    }, conversationTokenDataset);

    expect(value).toBeUndefined();
    expect(formatMetricValue(value)).toBe("Missing data");
  });

  it("resolves quoted attribute keys with dots", () => {
    expect(resolvePath({
      attributes: {
        "gen_ai.request.model": "gpt-5-mini",
      },
    }, "attributes[\"gen_ai.request.model\"]")).toBe("gpt-5-mini");
  });

  it("uses full trace span rows for generic trace reporting metrics", () => {
    expect(rowsFromUnknown(traceSpanDataset.data)).toHaveLength(2);
    expect(metricValue({
      ...metricWidget("sum(attributes[\"usage.total_tokens\"])"),
      datasetId: "trace-spans",
    }, traceSpanDataset)).toBe(500);
    expect(metricValue({
      ...metricWidget("resourceAttributes[\"service.name\"]"),
      aggregate: "countNonNull",
      datasetId: "trace-spans",
    }, traceSpanDataset)).toBe(2);
  });

  it("returns zero for missing exact journey-count buckets", () => {
    expect(metricValue(metricWidget("$metrics.journeyCounts.secure-email-login"), conversationsDataset)).toBe(0);
    expect(metricValue(metricWidget("$metrics.journeyCounts.human-handoff"), {
      ...conversationsDataset,
      data: { conversations: [] },
    })).toBe(0);
  });
});
