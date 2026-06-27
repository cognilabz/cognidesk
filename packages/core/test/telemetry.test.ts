import { context, metrics, trace, type Attributes, type Span } from "@opentelemetry/api";
import { AsyncLocalStorageContextManager } from "@opentelemetry/context-async-hooks";
import { BasicTracerProvider, InMemorySpanExporter, SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import {
  applyUsageToTelemetrySpan,
  createTelemetryContext,
  telemetryAttributes,
  withTelemetrySpan,
} from "../src/telemetry.js";

// ─── OTel test infrastructure ────────────────────────────────────────────────

const spanExporter = new InMemorySpanExporter();
const tracerProvider = new BasicTracerProvider({
  spanProcessors: [new SimpleSpanProcessor(spanExporter)],
});

type RecordedMetric = {
  kind: "counter" | "histogram";
  name: string;
  value: number;
  attributes?: Attributes;
};

const recordedMetrics: RecordedMetric[] = [];

beforeAll(() => {
  context.setGlobalContextManager(new AsyncLocalStorageContextManager().enable());
  trace.setGlobalTracerProvider(tracerProvider);
  metrics.setGlobalMeterProvider({
    getMeter: () => ({
      createCounter: (name: string) => ({
        add: (value: number, attributes?: Attributes) => {
          recordedMetrics.push({ kind: "counter", name, value, ...(attributes ? { attributes } : {}) });
        },
      }),
      createHistogram: (name: string) => ({
        record: (value: number, attributes?: Attributes) => {
          recordedMetrics.push({ kind: "histogram", name, value, ...(attributes ? { attributes } : {}) });
        },
      }),
      createObservableGauge: () => ({ addCallback: () => undefined, removeCallback: () => undefined }),
    }),
  } as unknown as Parameters<typeof metrics.setGlobalMeterProvider>[0]);
});

beforeEach(() => {
  spanExporter.reset();
  recordedMetrics.length = 0;
});

// ─── Helper to build a minimal mock span ─────────────────────────────────────

function makeMockSpan() {
  const attrs: Record<string, unknown> = {};
  const events: Array<{ name: string; attributes?: Attributes }> = [];
  const exceptions: unknown[] = [];
  let enrichmentFailed: boolean | undefined;

  const span = {
    setAttribute(key: string, value: unknown) {
      attrs[key] = value;
      if (key === "cognidesk.telemetry.enrichment_failed") enrichmentFailed = value as boolean;
    },
    setAttributes(incoming: Attributes) {
      Object.assign(attrs, incoming);
    },
    addEvent(name: string, attributes?: Attributes) {
      events.push({ name, attributes });
    },
    recordException(error: unknown) {
      exceptions.push(error);
    },
    setStatus() {},
    end() {},
    spanContext: () => ({ traceId: "abc", spanId: "def", traceFlags: 1 }),
    isRecording: () => true,
  } as unknown as Span;

  return { span, attrs, events, exceptions, getEnrichmentFailed: () => enrichmentFailed };
}

// ─── Helpers to run code inside a real active span ───────────────────────────

async function withActiveSpan<T>(fn: (span: Span) => T | Promise<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    tracerProvider.getTracer("test").startActiveSpan("test.parent", async (span) => {
      try {
        const result = await fn(span);
        span.end();
        resolve(result);
      } catch (err) {
        span.end();
        reject(err);
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// applyUsageToTelemetrySpan
// ─────────────────────────────────────────────────────────────────────────────

describe("applyUsageToTelemetrySpan", () => {
  it("sets all five token attributes when all usage fields are present", () => {
    const { span, attrs } = makeMockSpan();
    applyUsageToTelemetrySpan(span, {
      inputTokens: 10,
      cachedInputTokens: 3,
      outputTokens: 5,
      reasoningTokens: 2,
      totalTokens: 20,
    });
    expect(attrs[telemetryAttributes.modelInputTokens]).toBe(10);
    expect(attrs[telemetryAttributes.modelCachedInputTokens]).toBe(3);
    expect(attrs[telemetryAttributes.modelOutputTokens]).toBe(5);
    expect(attrs[telemetryAttributes.modelReasoningTokens]).toBe(2);
    expect(attrs[telemetryAttributes.modelTotalTokens]).toBe(20);
  });

  it("only sets attributes for defined usage fields, skipping undefined ones", () => {
    const { span, attrs } = makeMockSpan();
    applyUsageToTelemetrySpan(span, { outputTokens: 7 });
    expect(attrs[telemetryAttributes.modelOutputTokens]).toBe(7);
    expect(attrs[telemetryAttributes.modelInputTokens]).toBeUndefined();
    expect(attrs[telemetryAttributes.modelCachedInputTokens]).toBeUndefined();
    expect(attrs[telemetryAttributes.modelReasoningTokens]).toBeUndefined();
    expect(attrs[telemetryAttributes.modelTotalTokens]).toBeUndefined();
  });

  it("sets no attributes when the usage object is empty", () => {
    const { span, attrs } = makeMockSpan();
    applyUsageToTelemetrySpan(span, {});
    expect(Object.keys(attrs)).toHaveLength(0);
  });

  it("sets only inputTokens when only inputTokens is provided", () => {
    const { span, attrs } = makeMockSpan();
    applyUsageToTelemetrySpan(span, { inputTokens: 42 });
    expect(attrs[telemetryAttributes.modelInputTokens]).toBe(42);
    expect(Object.keys(attrs)).toHaveLength(1);
  });

  it("sets only cachedInputTokens when only cachedInputTokens is provided", () => {
    const { span, attrs } = makeMockSpan();
    applyUsageToTelemetrySpan(span, { cachedInputTokens: 5 });
    expect(attrs[telemetryAttributes.modelCachedInputTokens]).toBe(5);
    expect(Object.keys(attrs)).toHaveLength(1);
  });

  it("sets only reasoningTokens when only reasoningTokens is provided", () => {
    const { span, attrs } = makeMockSpan();
    applyUsageToTelemetrySpan(span, { reasoningTokens: 9 });
    expect(attrs[telemetryAttributes.modelReasoningTokens]).toBe(9);
    expect(Object.keys(attrs)).toHaveLength(1);
  });

  it("sets attribute for a token count of 0 (zero is a valid value, not undefined)", () => {
    const { span, attrs } = makeMockSpan();
    applyUsageToTelemetrySpan(span, { cachedInputTokens: 0, totalTokens: 0 });
    expect(attrs[telemetryAttributes.modelCachedInputTokens]).toBe(0);
    expect(attrs[telemetryAttributes.modelTotalTokens]).toBe(0);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// cleanAttributes — tested through createTelemetryContext.setAttributes
// (the attribute sanitisation logic is private; we exercise it via the public API)
// ─────────────────────────────────────────────────────────────────────────────

describe("cleanAttributes (via setAttributes)", () => {
  it("truncates string values longer than 512 characters to exactly 512 characters ending with '...'", async () => {
    const captured: Record<string, unknown> = {};
    await withActiveSpan(async (span) => {
      const original = trace.getActiveSpan()?.setAttributes.bind(trace.getActiveSpan());
      vi.spyOn(span, "setAttributes").mockImplementation((a: Attributes) => {
        Object.assign(captured, a);
      });
      const ctx = createTelemetryContext({ telemetry: { enabled: true } });
      ctx.setAttributes({ "key": "x".repeat(700) });
    });
    // Use the real span exporter approach instead — create a small withTelemetrySpan wrapper
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      {
        name: "test.clean.string",
        attributes: { "long.key": "a".repeat(700) },
      },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.string");
    const longValue = String(testSpan?.attributes["long.key"] ?? "");
    expect(longValue.endsWith("...")).toBe(true);
    expect(longValue.length).toBe(512);
  });

  it("does not truncate string values of exactly 512 characters", async () => {
    const exact = "b".repeat(512);
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.exact", attributes: { "k": exact } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.exact");
    expect(testSpan?.attributes["k"]).toBe(exact);
  });

  it("drops attributes whose key exceeds 128 characters", async () => {
    const longKey = "k".repeat(129);
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.longkey", attributes: { [longKey]: "value", "short": "kept" } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.longkey");
    expect(testSpan?.attributes[longKey]).toBeUndefined();
    expect(testSpan?.attributes["short"]).toBe("kept");
  });

  it("drops the 33rd attribute and beyond (max 32 attributes)", async () => {
    const attrs: Attributes = {};
    for (let i = 1; i <= 33; i++) {
      attrs[`key${i}`] = `value${i}`;
    }
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.maxattrs", attributes: attrs },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.maxattrs");
    // span may also carry SDK-internal attributes; only check the custom ones
    const customKeys = Object.keys(testSpan?.attributes ?? {}).filter((k) => k.startsWith("key"));
    expect(customKeys.length).toBeLessThanOrEqual(32);
  });

  it("drops null attribute values", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.null", attributes: { "a": null as unknown as string, "b": "valid" } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.null");
    expect(testSpan?.attributes["a"]).toBeUndefined();
    expect(testSpan?.attributes["b"]).toBe("valid");
  });

  it("drops undefined attribute values", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.undef", attributes: { "x": undefined, "y": "ok" } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.undef");
    expect(testSpan?.attributes["x"]).toBeUndefined();
    expect(testSpan?.attributes["y"]).toBe("ok");
  });

  it("passes through finite numbers unchanged", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.num", attributes: { "n": 42.5 } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.num");
    expect(testSpan?.attributes["n"]).toBe(42.5);
  });

  it("drops NaN number values", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.nan", attributes: { "bad": Number.NaN, "good": 1 } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.nan");
    expect(testSpan?.attributes["bad"]).toBeUndefined();
    expect(testSpan?.attributes["good"]).toBe(1);
  });

  it("drops Infinity number values", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.inf", attributes: { "bad": Infinity, "good": 2 } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.inf");
    expect(testSpan?.attributes["bad"]).toBeUndefined();
    expect(testSpan?.attributes["good"]).toBe(2);
  });

  it("passes through boolean values unchanged", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.bool", attributes: { "t": true, "f": false } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.bool");
    expect(testSpan?.attributes["t"]).toBe(true);
    expect(testSpan?.attributes["f"]).toBe(false);
  });

  it("drops attributes with an empty string key", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.emptykey", attributes: { "": "ignored", "valid": "kept" } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.emptykey");
    expect(testSpan?.attributes[""]).toBeUndefined();
    expect(testSpan?.attributes["valid"]).toBe("kept");
  });

  it("keeps homogeneous string arrays as string arrays", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.strarr", attributes: { "arr": ["a", "b", "c"] } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.strarr");
    expect(testSpan?.attributes["arr"]).toEqual(["a", "b", "c"]);
  });

  it("keeps homogeneous number arrays as number arrays", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.numarr", attributes: { "arr": [1, 2, 3] } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.numarr");
    expect(testSpan?.attributes["arr"]).toEqual([1, 2, 3]);
  });

  it("keeps homogeneous boolean arrays as boolean arrays", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.boolarr", attributes: { "arr": [true, false] } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.boolarr");
    expect(testSpan?.attributes["arr"]).toEqual([true, false]);
  });

  it("converts mixed-type arrays to all-string arrays", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.mixarr", attributes: { "arr": ["x", 1, true] as unknown as string[] } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.mixarr");
    const val = testSpan?.attributes["arr"];
    expect(Array.isArray(val)).toBe(true);
    (val as unknown[]).forEach((item) => expect(typeof item).toBe("string"));
  });

  it("truncates arrays longer than 32 items to 32 items", async () => {
    const bigArray = Array.from({ length: 50 }, (_, i) => `item${i}`);
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.clean.bigarr", attributes: { "arr": bigArray } },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.bigarr");
    expect((testSpan?.attributes["arr"] as string[]).length).toBe(32);
  });

  it("JSON-serialises non-array object values to strings", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      {
        name: "test.clean.obj",
        attributes: { "obj": { nested: true } as unknown as string },
      },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.clean.obj");
    expect(testSpan?.attributes["obj"]).toBe('{"nested":true}');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// createTelemetryContext — setAttributes
// ─────────────────────────────────────────────────────────────────────────────

describe("createTelemetryContext.setAttributes", () => {
  it("forwards cleaned attributes to the active span", async () => {
    const setAttrsArgs: Attributes[] = [];
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.ctx.setattrs" },
      async (span) => {
        const original = span.setAttributes.bind(span);
        span.setAttributes = (a: Attributes) => {
          setAttrsArgs.push(a);
          original(a);
        };
        const ctx = createTelemetryContext({ telemetry: { enabled: true } });
        ctx.setAttributes({ "app.user": "alice", "app.score": 99 });
      },
    );
    // at least one call should include our keys
    const combined = Object.assign({}, ...setAttrsArgs);
    expect(combined["app.user"]).toBe("alice");
    expect(combined["app.score"]).toBe(99);
  });

  it("truncates long string values when setting attributes via setAttributes", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.ctx.truncate" },
      async () => {
        const ctx = createTelemetryContext({ telemetry: { enabled: true } });
        ctx.setAttributes({ "long": "y".repeat(700) });
      },
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.ctx.truncate");
    const val = String(testSpan?.attributes["long"] ?? "");
    expect(val.length).toBe(512);
    expect(val.endsWith("...")).toBe(true);
  });

  it("is a no-op when telemetry is disabled", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      { name: "test.ctx.disabled.setattrs" },
      async () => {
        const ctx = createTelemetryContext({ telemetry: { enabled: false } });
        // Should not throw; span should not receive the attribute
        ctx.setAttributes({ "should.not.appear": "value" });
      },
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.ctx.disabled.setattrs");
    expect(testSpan?.attributes["should.not.appear"]).toBeUndefined();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// createTelemetryContext — recordMetric
// ─────────────────────────────────────────────────────────────────────────────

describe("createTelemetryContext.recordMetric", () => {
  it("records a declared counter metric", async () => {
    const ctx = createTelemetryContext({
      telemetry: {
        enabled: true,
        customMetrics: [{ name: "app.test.counter", kind: "counter" }],
      },
    });
    ctx.recordMetric({ name: "app.test.counter", value: 3 });
    expect(recordedMetrics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: "counter", name: "app.test.counter", value: 3 }),
      ]),
    );
  });

  it("records a declared histogram metric", async () => {
    const ctx = createTelemetryContext({
      telemetry: {
        enabled: true,
        customMetrics: [{ name: "app.test.histogram", kind: "histogram" }],
      },
    });
    ctx.recordMetric({ name: "app.test.histogram", value: 42 });
    expect(recordedMetrics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: "histogram", name: "app.test.histogram", value: 42 }),
      ]),
    );
  });

  it("ignores metrics not declared in customMetrics", () => {
    const ctx = createTelemetryContext({
      telemetry: {
        enabled: true,
        customMetrics: [{ name: "app.declared", kind: "counter" }],
      },
    });
    ctx.recordMetric({ name: "app.undeclared", value: 1 });
    expect(recordedMetrics.some((m) => m.name === "app.undeclared")).toBe(false);
  });

  it("does not record any metric when telemetry is disabled", () => {
    const ctx = createTelemetryContext({
      telemetry: {
        enabled: false,
        customMetrics: [{ name: "app.disabled.metric", kind: "counter" }],
      },
    });
    ctx.recordMetric({ name: "app.disabled.metric", value: 5 });
    expect(recordedMetrics.some((m) => m.name === "app.disabled.metric")).toBe(false);
  });

  it("ignores negative values for counter metrics", () => {
    const ctx = createTelemetryContext({
      telemetry: {
        enabled: true,
        customMetrics: [{ name: "app.counter.neg", kind: "counter" }],
      },
    });
    ctx.recordMetric({ name: "app.counter.neg", value: -1 });
    expect(recordedMetrics.some((m) => m.name === "app.counter.neg")).toBe(false);
  });

  it("allows negative values for histogram metrics", () => {
    const ctx = createTelemetryContext({
      telemetry: {
        enabled: true,
        customMetrics: [{ name: "app.histo.neg", kind: "histogram" }],
      },
    });
    ctx.recordMetric({ name: "app.histo.neg", value: -10 });
    expect(recordedMetrics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ kind: "histogram", name: "app.histo.neg", value: -10 }),
      ]),
    );
  });

  it("ignores non-finite (NaN) metric values", () => {
    const ctx = createTelemetryContext({
      telemetry: {
        enabled: true,
        customMetrics: [{ name: "app.nan.metric", kind: "counter" }],
      },
    });
    ctx.recordMetric({ name: "app.nan.metric", value: Number.NaN });
    expect(recordedMetrics.some((m) => m.name === "app.nan.metric")).toBe(false);
  });

  it("ignores non-finite (Infinity) metric values", () => {
    const ctx = createTelemetryContext({
      telemetry: {
        enabled: true,
        customMetrics: [{ name: "app.inf.metric", kind: "counter" }],
      },
    });
    ctx.recordMetric({ name: "app.inf.metric", value: Infinity });
    expect(recordedMetrics.some((m) => m.name === "app.inf.metric")).toBe(false);
  });

  it("passes per-metric attributes through to the recorded metric", () => {
    const ctx = createTelemetryContext({
      telemetry: {
        enabled: true,
        customMetrics: [{ name: "app.attrs.metric", kind: "counter" }],
      },
    });
    ctx.recordMetric({
      name: "app.attrs.metric",
      value: 1,
      attributes: { "route": "GET /api", "env": "test" },
    });
    expect(recordedMetrics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "app.attrs.metric",
          attributes: expect.objectContaining({ "route": "GET /api", "env": "test" }),
        }),
      ]),
    );
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// isValidMetricName — exercised through recordMetric / recordCustomTelemetryMetrics
// ─────────────────────────────────────────────────────────────────────────────

describe("isValidMetricName (via recordMetric)", () => {
  function makeCtxWithMetric(name: string) {
    return createTelemetryContext({
      telemetry: {
        enabled: true,
        customMetrics: [{ name, kind: "counter" }],
      },
    });
  }

  it("records a metric whose name contains only lowercase letters", () => {
    const name = "app.valid";
    makeCtxWithMetric(name).recordMetric({ name, value: 1 });
    expect(recordedMetrics.some((m) => m.name === name)).toBe(true);
  });

  it("records a metric whose name contains uppercase letters", () => {
    const name = "App.Valid.Counter";
    makeCtxWithMetric(name).recordMetric({ name, value: 1 });
    expect(recordedMetrics.some((m) => m.name === name)).toBe(true);
  });

  it("records a metric whose name contains digits, dots, underscores and hyphens", () => {
    const name = "app.v2_metric-one.2";
    makeCtxWithMetric(name).recordMetric({ name, value: 1 });
    expect(recordedMetrics.some((m) => m.name === name)).toBe(true);
  });

  it("ignores a metric whose name contains spaces", () => {
    const name = "app invalid name";
    makeCtxWithMetric(name).recordMetric({ name, value: 1 });
    expect(recordedMetrics.some((m) => m.name === name)).toBe(false);
  });

  it("ignores a metric whose name contains an @ symbol", () => {
    const name = "app@metric";
    makeCtxWithMetric(name).recordMetric({ name, value: 1 });
    expect(recordedMetrics.some((m) => m.name === name)).toBe(false);
  });

  it("ignores a metric with an empty name", () => {
    const name = "";
    makeCtxWithMetric(name).recordMetric({ name, value: 1 });
    // nothing should be recorded under an empty name
    expect(recordedMetrics.some((m) => m.name === "")).toBe(false);
  });

  it("ignores a metric whose name exceeds 255 characters", () => {
    const name = "a".repeat(256);
    makeCtxWithMetric(name).recordMetric({ name, value: 1 });
    expect(recordedMetrics.some((m) => m.name === name)).toBe(false);
  });

  it("records a metric whose name is exactly 255 characters", () => {
    const name = "a".repeat(255);
    makeCtxWithMetric(name).recordMetric({ name, value: 1 });
    expect(recordedMetrics.some((m) => m.name === name)).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// withTelemetrySpan — enrichSpan integration
// ─────────────────────────────────────────────────────────────────────────────

describe("withTelemetrySpan enrichSpan", () => {
  it("calls enrichSpan with the span name, attributes and metric attributes", async () => {
    const calls: unknown[] = [];
    await withTelemetrySpan(
      {
        telemetry: {
          enabled: true,
          enrichSpan: (input) => {
            calls.push(input);
            return undefined;
          },
        },
      },
      {
        name: "test.enrich.inputs",
        attributes: { "a": "1" },
        metric: { kind: "tool", attributes: { "t": "2" } },
      },
      () => undefined,
    );
    expect(calls).toHaveLength(1);
    const call = calls[0] as Record<string, unknown>;
    expect(call["spanName"]).toBe("test.enrich.inputs");
    expect(call["metricKind"]).toBe("tool");
    expect((call["attributes"] as Record<string, unknown>)["a"]).toBe("1");
    expect((call["metricAttributes"] as Record<string, unknown>)["t"]).toBe("2");
  });

  it("does not include metricKind in enrichSpan input when no metric is defined", async () => {
    const calls: unknown[] = [];
    await withTelemetrySpan(
      {
        telemetry: {
          enabled: true,
          enrichSpan: (input) => {
            calls.push(input);
            return undefined;
          },
        },
      },
      { name: "test.enrich.nometric" },
      () => undefined,
    );
    const call = calls[0] as Record<string, unknown>;
    expect("metricKind" in call).toBe(false);
  });

  it("applies enrichment attributes to the recorded span", async () => {
    await withTelemetrySpan(
      {
        telemetry: {
          enabled: true,
          enrichSpan: () => ({
            attributes: { "enrich.tag": "yes" },
          }),
        },
      },
      { name: "test.enrich.attrs" },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.enrich.attrs");
    expect(testSpan?.attributes["enrich.tag"]).toBe("yes");
  });

  it("adds enrichment events to the recorded span", async () => {
    await withTelemetrySpan(
      {
        telemetry: {
          enabled: true,
          enrichSpan: () => ({
            events: [{ name: "custom.event", attributes: { "e": "1" } }],
          }),
        },
      },
      { name: "test.enrich.events" },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.enrich.events");
    expect(testSpan?.events.some((ev) => ev.name === "custom.event")).toBe(true);
  });

  it("records custom metrics returned by the enrichSpan callback", async () => {
    await withTelemetrySpan(
      {
        telemetry: {
          enabled: true,
          customMetrics: [{ name: "enrich.returned.counter", kind: "counter" }],
          enrichSpan: () => ({
            metrics: [{ name: "enrich.returned.counter", value: 5 }],
          }),
        },
      },
      { name: "test.enrich.metrics" },
      () => undefined,
    );
    expect(recordedMetrics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "enrich.returned.counter", value: 5 }),
      ]),
    );
  });

  it("does no enrichment when enrichSpan returns null", async () => {
    const enrichSpy = vi.fn().mockReturnValue(null);
    await withTelemetrySpan(
      { telemetry: { enabled: true, enrichSpan: enrichSpy } },
      { name: "test.enrich.null" },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.enrich.null");
    // No custom keys injected by enrichment
    expect(testSpan?.attributes["enrich.tag"]).toBeUndefined();
    expect(enrichSpy).toHaveBeenCalledOnce();
  });

  it("does no enrichment when enrichSpan returns undefined", async () => {
    const enrichSpy = vi.fn().mockReturnValue(undefined);
    await withTelemetrySpan(
      { telemetry: { enabled: true, enrichSpan: enrichSpy } },
      { name: "test.enrich.undef" },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.enrich.undef");
    expect(testSpan?.attributes["enrich.tag"]).toBeUndefined();
  });

  it("sets enrichment_failed=true on the span when enrichSpan throws", async () => {
    await withTelemetrySpan(
      {
        telemetry: {
          enabled: true,
          enrichSpan: () => {
            throw new Error("enricher boom");
          },
        },
      },
      { name: "test.enrich.throw" },
      () => undefined,
    );
    const spans = spanExporter.getFinishedSpans();
    const testSpan = spans.find((s) => s.name === "test.enrich.throw");
    expect(testSpan?.attributes["cognidesk.telemetry.enrichment_failed"]).toBe(true);
  });

  it("does not propagate the enrichSpan error to the caller", async () => {
    await expect(
      withTelemetrySpan(
        {
          telemetry: {
            enabled: true,
            enrichSpan: () => { throw new Error("enricher boom"); },
          },
        },
        { name: "test.enrich.noerrorprop" },
        () => "result",
      ),
    ).resolves.toBe("result");
  });

  it("still returns the span run result even when enrichSpan throws", async () => {
    const result = await withTelemetrySpan(
      {
        telemetry: {
          enabled: true,
          enrichSpan: async () => { throw new Error("async boom"); },
        },
      },
      { name: "test.enrich.asyncthrow" },
      () => 42,
    );
    expect(result).toBe(42);
  });

  it("merges enrichment metricAttributes into model token metric labels", async () => {
    await withTelemetrySpan(
      {
        telemetry: {
          enabled: true,
          enrichSpan: () => ({
            metricAttributes: { "segment": "vip" },
          }),
        },
      },
      {
        name: "test.enrich.metricattrs",
        metric: {
          kind: "model",
          tokenUsage: { totalTokens: 8 },
        },
      },
      () => undefined,
    );
    const tokenMetric = recordedMetrics.find(
      (m) => m.name === "cognidesk.model.tokens" && (m.attributes as Record<string, unknown>)?.["cognidesk.token.kind"] === "total",
    );
    expect(tokenMetric?.attributes).toMatchObject({ "segment": "vip" });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// recordSpanMetric — new token kinds (cachedInput, reasoning)
// ─────────────────────────────────────────────────────────────────────────────

describe("recordSpanMetric — new token kinds", () => {
  it("records a cognidesk.model.tokens histogram entry for cachedInputTokens", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      {
        name: "test.tokenmetric.cached",
        metric: { kind: "model", tokenUsage: { cachedInputTokens: 4 } },
      },
      () => undefined,
    );
    expect(recordedMetrics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          kind: "histogram",
          name: "cognidesk.model.tokens",
          value: 4,
          attributes: expect.objectContaining({ "cognidesk.token.kind": "cached_input" }),
        }),
      ]),
    );
  });

  it("records a cognidesk.model.tokens histogram entry for reasoningTokens", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      {
        name: "test.tokenmetric.reasoning",
        metric: { kind: "model", tokenUsage: { reasoningTokens: 6 } },
      },
      () => undefined,
    );
    expect(recordedMetrics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          kind: "histogram",
          name: "cognidesk.model.tokens",
          value: 6,
          attributes: expect.objectContaining({ "cognidesk.token.kind": "reasoning" }),
        }),
      ]),
    );
  });

  it("records all five token kinds when all are provided", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      {
        name: "test.tokenmetric.all",
        metric: {
          kind: "model",
          tokenUsage: {
            inputTokens: 10,
            cachedInputTokens: 2,
            outputTokens: 5,
            reasoningTokens: 1,
            totalTokens: 18,
          },
        },
      },
      () => undefined,
    );
    const tokenMetrics = recordedMetrics.filter((m) => m.name === "cognidesk.model.tokens");
    const kinds = tokenMetrics.map((m) => (m.attributes as Record<string, unknown>)["cognidesk.token.kind"]);
    expect(kinds).toContain("input");
    expect(kinds).toContain("cached_input");
    expect(kinds).toContain("output");
    expect(kinds).toContain("reasoning");
    expect(kinds).toContain("total");
  });

  it("does not record a token metric for a token kind that is undefined", async () => {
    await withTelemetrySpan(
      { telemetry: { enabled: true } },
      {
        name: "test.tokenmetric.partial",
        metric: { kind: "model", tokenUsage: { totalTokens: 3 } },
      },
      () => undefined,
    );
    const tokenMetrics = recordedMetrics.filter((m) => m.name === "cognidesk.model.tokens");
    const kinds = tokenMetrics.map((m) => (m.attributes as Record<string, unknown>)["cognidesk.token.kind"]);
    expect(kinds).toContain("total");
    expect(kinds).not.toContain("input");
    expect(kinds).not.toContain("cached_input");
    expect(kinds).not.toContain("reasoning");
    expect(kinds).not.toContain("output");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// telemetryAttributes — new constants declared by this PR
// ─────────────────────────────────────────────────────────────────────────────

describe("telemetryAttributes — new token usage keys", () => {
  it("exposes the correct attribute key for modelInputTokens", () => {
    expect(telemetryAttributes.modelInputTokens).toBe("cognidesk.model.usage.input_tokens");
  });

  it("exposes the correct attribute key for modelCachedInputTokens", () => {
    expect(telemetryAttributes.modelCachedInputTokens).toBe("cognidesk.model.usage.cached_input_tokens");
  });

  it("exposes the correct attribute key for modelOutputTokens", () => {
    expect(telemetryAttributes.modelOutputTokens).toBe("cognidesk.model.usage.output_tokens");
  });

  it("exposes the correct attribute key for modelReasoningTokens", () => {
    expect(telemetryAttributes.modelReasoningTokens).toBe("cognidesk.model.usage.reasoning_tokens");
  });

  it("exposes the correct attribute key for modelTotalTokens", () => {
    expect(telemetryAttributes.modelTotalTokens).toBe("cognidesk.model.usage.total_tokens");
  });
});