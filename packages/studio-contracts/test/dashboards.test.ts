import { describe, expect, it } from "vitest";
import {
  StudioDataQuerySchema,
  StudioDashboardSpecSchema,
  validateStudioDashboardPath,
} from "../src/index.js";

describe("studio dashboard contracts", () => {
  it("accepts row aggregation metric specs and attribute bracket paths", () => {
    const spec = StudioDashboardSpecSchema.parse({
      layout: "operations",
      widgets: [
        {
          id: "token-sum",
          title: "Total tokens",
          kind: "metric",
          datasetId: "conversations",
          aggregate: "sum",
          valuePath: "usage.totalTokens",
        },
        {
          id: "provider-models",
          title: "Provider models",
          kind: "metric",
          datasetId: "conversations",
          aggregate: "countNonNull",
          valuePath: "attributes[\"gen_ai.request.model\"]",
        },
        {
          id: "avg-token-expression",
          title: "Average tokens",
          kind: "metric",
          datasetId: "conversations",
          valuePath: "avg(usage.totalTokens)",
        },
      ],
    });

    expect(spec.widgets[0]).toMatchObject({ aggregate: "sum", valuePath: "usage.totalTokens" });
    expect(validateStudioDashboardPath("sum(metrics.totalTokens)")).toBeNull();
    expect(validateStudioDashboardPath("attributes[\"gen_ai.request.model\"]")).toBeNull();
  });

  it("rejects unsupported computed and wildcard paths", () => {
    expect(() => StudioDashboardSpecSchema.parse({
      layout: "operations",
      widgets: [
        {
          id: "bad-computed-path",
          title: "Bad computed path",
          kind: "metric",
          datasetId: "conversations",
          valuePath: "$computed.rows[*].total",
        },
      ],
    })).toThrow(/Unsupported dashboard path/);
  });

  it("exposes the shared data query contract outside dashboards", () => {
    expect(StudioDataQuerySchema.parse({
      capability: "telemetry.traces",
      targetId: "cognitrain-local",
      params: {
        traceId: "trace_1",
        includeTraceData: true,
      },
    })).toMatchObject({
      capability: "telemetry.traces",
      params: {
        traceId: "trace_1",
        includeTraceData: true,
      },
    });
  });
});
