import { describe, expect, it } from "vitest";
import type { StudioConversationSummary } from "@cognidesk/studio-contracts";

process.env.STUDIO_DATABASE_PROVIDER = "sqlite";
process.env.STUDIO_DATABASE_URL = ":memory:";

describe("target conversation rows", () => {
  it("preserves adapter extension fields on Studio conversation rows", async () => {
    const { studioConversationRowFromSummary } = await import("./target");
    const row = studioConversationRowFromSummary({
      id: "conversation_123456789",
      agentId: "support-agent",
      lifecycle: "closed",
      createdAt: "2026-06-26T08:00:00.000Z",
      updatedAt: "2026-06-26T08:10:00.000Z",
      activeStateIds: [],
      traceIds: [],
      totalTokens: 420,
      modelCalls: 3,
      usage: {
        totalTokens: 420,
      },
      metrics: {
        modelCalls: 3,
      },
      attributes: {
        "gen_ai.request.model": "gpt-5-mini",
      },
    } as StudioConversationSummary);

    expect(row).toMatchObject({
      id: "conversation_123456789",
      customerLabel: "Conversation conversa",
      totalTokens: 420,
      modelCalls: 3,
      usage: { totalTokens: 420 },
      metrics: { modelCalls: 3 },
      attributes: {
        "gen_ai.request.model": "gpt-5-mini",
      },
    });
  });

  it("normalizes complete trace payloads into raw traces and generic span rows", async () => {
    const { normalizeTempoTraceDataset } = await import("./target");
    const dataset = normalizeTempoTraceDataset({ traces: [{ traceId: "trace_1" }] }, [{
      traceId: "trace_1",
      raw: {
        resourceSpans: [{
          resource: {
            attributes: [
              { key: "service.name", value: { stringValue: "cognitrain-runtime" } },
              { key: "deployment.environment", value: { stringValue: "test" } },
            ],
          },
          scopeSpans: [{
            scope: {
              name: "cognidesk-sdk",
              attributes: [{ key: "sdk.version", value: { stringValue: "1.2.3" } }],
            },
            spans: [{
              traceId: "trace_1",
              spanId: "span_1",
              parentSpanId: "",
              name: "message.generated",
              startTimeUnixNano: "1782558000000000000",
              endTimeUnixNano: "1782558000120000000",
              attributes: [
                { key: "gen_ai.request.model", value: { stringValue: "gpt-5-mini" } },
                { key: "usage.total_tokens", value: { intValue: "420" } },
              ],
              events: [{
                name: "message.completed",
                attributes: [
                  { key: "usage.total_tokens", value: { intValue: "420" } },
                ],
              }],
            }],
          }],
        }],
      },
    }]);

    expect(dataset.rawTraces[0]).toMatchObject({ traceId: "trace_1" });
    expect(dataset.spans[0]).toMatchObject({
      traceId: "trace_1",
      spanId: "span_1",
      name: "message.generated",
      serviceName: "cognitrain-runtime",
      durationMs: 120,
      attributes: {
        "gen_ai.request.model": "gpt-5-mini",
        "usage.total_tokens": "420",
      },
      resourceAttributes: {
        "service.name": "cognitrain-runtime",
      },
      scopeAttributes: {
        "sdk.version": "1.2.3",
      },
      events: [{
        name: "message.completed",
        attributes: {
          "usage.total_tokens": "420",
        },
      }],
    });
  });
});
