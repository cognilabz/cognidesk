import {
  INVALID_SPAN_CONTEXT,
  SpanStatusCode,
  context,
  metrics,
  trace,
  type AttributeValue,
  type Attributes,
  type Counter,
  type Histogram,
  type Span,
} from "@opentelemetry/api";
import type { UsageRecord } from "./types.js";

type MaybePromise<T> = Promise<T> | T;

export type TelemetryContentMode = "redacted" | "full";

export interface RuntimeTelemetryOptions {
  enabled?: boolean;
  content?: TelemetryContentMode;
  customMetrics?: TelemetryCustomMetricDefinition[];
  enrichSpan?: TelemetrySpanEnricher;
}

export interface RuntimeEventTelemetry {
  traceId: string;
  spanId?: string;
}

export interface TelemetryContextSpanOptions {
  attributes?: Attributes;
}

export type TelemetrySpanRunner<T> = (span: Span) => MaybePromise<T>;

export interface TelemetryContext {
  startSpan(name: string, options?: TelemetryContextSpanOptions): Span;
  withSpan<T>(name: string, run: TelemetrySpanRunner<T>): Promise<T>;
  withSpan<T>(name: string, options: TelemetryContextSpanOptions, run: TelemetrySpanRunner<T>): Promise<T>;
  setAttribute(name: string, value: string | number | boolean): void;
  setAttributes(attributes: Attributes): void;
  addEvent(name: string, attributes?: Attributes): void;
  recordMetric(metric: TelemetryCustomMetric): void;
  recordException(error: unknown): void;
}

export const telemetrySpanNames = {
  runtimeInitialize: "cognidesk.runtime.initialize",
  runtimeCreateConversation: "cognidesk.runtime.create_conversation",
  runtimeGetConversation: "cognidesk.runtime.get_conversation",
  runtimeListConversations: "cognidesk.runtime.list_conversations",
  runtimeUpdateConversationContext: "cognidesk.runtime.update_conversation_context",
  runtimeDeleteConversation: "cognidesk.runtime.delete_conversation",
  runtimeEmitEvent: "cognidesk.runtime.emit_event",
  runtimeEmitIntermediateMessage: "cognidesk.runtime.emit_intermediate_message",
  runtimeEmitGeneratedPreamble: "cognidesk.runtime.emit_generated_preamble",
  runtimeEmitCustomEvent: "cognidesk.runtime.emit_custom_event",
  runtimeEmitJourneyEvent: "cognidesk.runtime.emit_journey_event",
  runtimeListEvents: "cognidesk.runtime.list_events",
  runtimeReplayConversation: "cognidesk.runtime.replay_conversation",
  runtimeSubmitWidget: "cognidesk.runtime.submit_widget",
  runtimeGetSnapshot: "cognidesk.runtime.get_snapshot",
  runtimeHandleChannelEvent: "cognidesk.runtime.handle_channel_event",
  runtimeHandleUserMessage: "cognidesk.runtime.handle_user_message",
  runtimeCloseConversation: "cognidesk.runtime.close_conversation",
  runtimeRequestHandoff: "cognidesk.runtime.request_handoff",
  runtimeResumeConversation: "cognidesk.runtime.resume_conversation",
  runtimeCompactConversation: "cognidesk.runtime.compact_conversation",
  journeySelect: "cognidesk.journey.select",
  modelGenerate: "cognidesk.model.generate",
  toolExecute: "cognidesk.tool.execute",
  actionExecute: "cognidesk.action.execute",
  knowledgeRetrieve: "cognidesk.knowledge.retrieve",
} as const;

export const telemetryAttributes = {
  agentId: "cognidesk.agent.id",
  customerId: "cognidesk.customer.id",
  conversationId: "cognidesk.conversation.id",
  journeyId: "cognidesk.journey.id",
  stateId: "cognidesk.state.id",
  operation: "cognidesk.operation",
  modelRole: "cognidesk.model.role",
  modelProvider: "cognidesk.model.provider",
  modelName: "cognidesk.model.name",
  modelInputTokens: "cognidesk.model.usage.input_tokens",
  modelOutputTokens: "cognidesk.model.usage.output_tokens",
  modelCachedInputTokens: "cognidesk.model.usage.cached_input_tokens",
  modelReasoningTokens: "cognidesk.model.usage.reasoning_tokens",
  modelTotalTokens: "cognidesk.model.usage.total_tokens",
  promptTask: "cognidesk.prompt.task",
  toolName: "cognidesk.tool.name",
  actionName: "cognidesk.action.name",
  knowledgeSourceName: "cognidesk.knowledge.source.name",
  success: "cognidesk.success",
  errorType: "cognidesk.error.type",
} as const;

export const telemetryEventNames = {
  runtimeEvent: "cognidesk.runtime.event",
  userMessage: "cognidesk.user.message",
  modelInput: "cognidesk.model.input",
  modelOutput: "cognidesk.model.output",
  toolInput: "cognidesk.tool.input",
  toolOutput: "cognidesk.tool.output",
  knowledgeItems: "cognidesk.knowledge.items",
} as const;

type TelemetryOptionsCarrier = {
  telemetry?: RuntimeTelemetryOptions;
};

export type TelemetryMetricKind = "runtime" | "model" | "tool" | "action" | "knowledge";

type TelemetryMetricOptions = {
  kind: TelemetryMetricKind;
  attributes?: Attributes;
  tokenUsage?: UsageRecord;
};

export interface TelemetrySpanOptions {
  name: string;
  attributes?: Attributes;
  metric?: TelemetryMetricOptions;
}

export interface TelemetryCustomMetric {
  name: string;
  value: number;
  attributes?: Attributes;
}

export interface TelemetryCustomMetricDefinition {
  name: string;
  kind: "counter" | "histogram";
  description?: string;
  unit?: string;
}

export interface TelemetrySpanEnrichmentInput {
  spanName: string;
  metricKind?: TelemetryMetricKind;
  attributes: Attributes;
  metricAttributes: Attributes;
}

export interface TelemetrySpanEvent {
  name: string;
  attributes?: Attributes;
}

export interface TelemetrySpanEnrichment {
  attributes?: Attributes;
  metricAttributes?: Attributes;
  events?: TelemetrySpanEvent[];
  metrics?: TelemetryCustomMetric[];
}

export type TelemetrySpanEnricher = (
  input: TelemetrySpanEnrichmentInput,
) => MaybePromise<TelemetrySpanEnrichment | null | undefined>;

type TelemetryInstruments = ReturnType<typeof createTelemetryInstruments>;
type CustomCounter = Pick<Counter, "add">;
type CustomHistogram = Pick<Histogram, "record">;

let telemetryInstruments: TelemetryInstruments | undefined;
const customCounters = new Map<string, CustomCounter>();
const customHistograms = new Map<string, CustomHistogram>();

const maxAttributeValueLength = 512;
const maxAttributeKeyLength = 128;
const maxAttributeCount = 32;
const maxAttributeArrayLength = 32;

function getTracer() {
  return trace.getTracer("cognidesk.core");
}

function getTelemetryInstruments() {
  telemetryInstruments ??= createTelemetryInstruments();
  return telemetryInstruments;
}

function createTelemetryInstruments() {
  const meter = metrics.getMeter("cognidesk.core");
  return {
    runtimeOperations: meter.createCounter("cognidesk.runtime.operations", {
      description: "Runtime SDK operations.",
    }),
    runtimeOperationDuration: meter.createHistogram("cognidesk.runtime.operation.duration", {
      description: "Runtime SDK operation duration.",
      unit: "ms",
    }),
    runtimeEvents: meter.createCounter("cognidesk.runtime.events", {
      description: "Runtime events emitted by the SDK.",
    }),
    runtimeFailures: meter.createCounter("cognidesk.runtime.failures", {
      description: "Runtime SDK operation failures.",
    }),
    modelCalls: meter.createCounter("cognidesk.model.calls", {
      description: "Model calls made by the SDK.",
    }),
    modelDuration: meter.createHistogram("cognidesk.model.duration", {
      description: "Model call duration.",
      unit: "ms",
    }),
    modelTokens: meter.createHistogram("cognidesk.model.tokens", {
      description: "Model token usage reported by providers.",
    }),
    toolExecutions: meter.createCounter("cognidesk.tool.executions", {
      description: "Tool executions made by the SDK.",
    }),
    toolDuration: meter.createHistogram("cognidesk.tool.duration", {
      description: "Tool execution duration.",
      unit: "ms",
    }),
    actionExecutions: meter.createCounter("cognidesk.action.executions", {
      description: "State action executions made by the SDK.",
    }),
    actionDuration: meter.createHistogram("cognidesk.action.duration", {
      description: "State action execution duration.",
      unit: "ms",
    }),
    knowledgeRetrievals: meter.createCounter("cognidesk.knowledge.retrievals", {
      description: "Knowledge retrieval calls made by the SDK.",
    }),
    knowledgeDuration: meter.createHistogram("cognidesk.knowledge.duration", {
      description: "Knowledge retrieval duration.",
      unit: "ms",
    }),
  };
}

export function telemetryEnabled(options: TelemetryOptionsCarrier) {
  return options.telemetry?.enabled !== false;
}

export function telemetryContentMode(options: TelemetryOptionsCarrier): TelemetryContentMode {
  return options.telemetry?.content ?? "redacted";
}

export async function withTelemetrySpan<T>(
  options: TelemetryOptionsCarrier,
  spanOptions: TelemetrySpanOptions,
  run: (span: Span) => MaybePromise<T>,
): Promise<T> {
  if (!telemetryEnabled(options)) {
    return run(trace.wrapSpanContext(INVALID_SPAN_CONTEXT));
  }

  const startedAt = performance.now();
  return getTracer().startActiveSpan(spanOptions.name, {
    attributes: cleanAttributes(spanOptions.attributes),
  }, async (span) => {
    let success = false;
    const enrichment = await applyTelemetrySpanEnrichment(options, spanOptions, span);
    try {
      const result = await run(span);
      success = true;
      span.setStatus({ code: SpanStatusCode.OK });
      return result;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error instanceof Error ? error.message : "Operation failed.",
      });
      recordExceptionOnSpan(span, error);
      throw error;
    } finally {
      const durationMs = performance.now() - startedAt;
      recordSpanMetric(spanOptions.metric, success, durationMs, enrichment.metricAttributes);
      recordCustomTelemetryMetrics(options, enrichment.metrics, {
        ...spanOptions.metric?.attributes,
        ...enrichment.metricAttributes,
        [telemetryAttributes.success]: success,
      });
      span.end();
    }
  });
}

export function recordRuntimeEventMetric(options: TelemetryOptionsCarrier, attributes: Attributes = {}) {
  if (!telemetryEnabled(options)) return;
  getTelemetryInstruments().runtimeEvents.add(1, cleanAttributes(attributes));
}

export function addTelemetryContentEvent(
  options: TelemetryOptionsCarrier,
  name: string,
  attributes: Record<string, unknown>,
) {
  if (!telemetryEnabled(options) || telemetryContentMode(options) !== "full") return;
  trace.getActiveSpan()?.addEvent(name, serializeEventAttributes(attributes));
}

export function activeRuntimeEventTelemetry(options: TelemetryOptionsCarrier): RuntimeEventTelemetry | undefined {
  if (!telemetryEnabled(options)) return undefined;
  const spanContext = trace.getActiveSpan()?.spanContext();
  if (!spanContext || spanContext.traceId === "00000000000000000000000000000000") return undefined;
  return {
    traceId: spanContext.traceId,
    spanId: spanContext.spanId,
  };
}

export function createTelemetryContext(options: TelemetryOptionsCarrier): TelemetryContext {
  return {
    startSpan(name, spanOptions = {}) {
      if (!telemetryEnabled(options)) return trace.wrapSpanContext(INVALID_SPAN_CONTEXT);
      return getTracer().startSpan(name, {
        attributes: cleanAttributes(spanOptions.attributes),
      }, context.active());
    },
    async withSpan<T>(
      name: string,
      optionsOrRun: TelemetryContextSpanOptions | TelemetrySpanRunner<T>,
      maybeRun?: TelemetrySpanRunner<T>,
    ) {
      const run = typeof optionsOrRun === "function" ? optionsOrRun : maybeRun;
      const spanOptions = typeof optionsOrRun === "function" ? {} : optionsOrRun;
      if (!run) throw new Error("TelemetryContext.withSpan requires a span runner.");
      return withTelemetrySpan(options, {
        name,
        ...(spanOptions.attributes ? { attributes: spanOptions.attributes } : {}),
      }, run);
    },
    setAttribute(name, value) {
      if (!telemetryEnabled(options)) return;
      trace.getActiveSpan()?.setAttribute(name, value);
    },
    setAttributes(attributes) {
      if (!telemetryEnabled(options)) return;
      trace.getActiveSpan()?.setAttributes(cleanAttributes(attributes));
    },
    addEvent(name, attributes = {}) {
      if (!telemetryEnabled(options)) return;
      trace.getActiveSpan()?.addEvent(name, cleanAttributes(attributes));
    },
    recordMetric(metric) {
      recordCustomTelemetryMetrics(options, [metric]);
    },
    recordException(error) {
      if (!telemetryEnabled(options)) return;
      const span = trace.getActiveSpan();
      if (span) recordExceptionOnSpan(span, error);
    },
  };
}

export function applyUsageToTelemetrySpan(span: Span, usage: UsageRecord) {
  if (usage.inputTokens !== undefined) span.setAttribute(telemetryAttributes.modelInputTokens, usage.inputTokens);
  if (usage.outputTokens !== undefined) span.setAttribute(telemetryAttributes.modelOutputTokens, usage.outputTokens);
  if (usage.cachedInputTokens !== undefined) span.setAttribute(telemetryAttributes.modelCachedInputTokens, usage.cachedInputTokens);
  if (usage.reasoningTokens !== undefined) span.setAttribute(telemetryAttributes.modelReasoningTokens, usage.reasoningTokens);
  if (usage.totalTokens !== undefined) span.setAttribute(telemetryAttributes.modelTotalTokens, usage.totalTokens);
}

async function applyTelemetrySpanEnrichment(
  options: TelemetryOptionsCarrier,
  spanOptions: TelemetrySpanOptions,
  span: Span,
): Promise<{ metricAttributes: Attributes; metrics: TelemetryCustomMetric[] }> {
  const enrichSpan = options.telemetry?.enrichSpan;
  if (!enrichSpan) return { metricAttributes: {}, metrics: [] };
  try {
    const enrichment = await enrichSpan({
      spanName: spanOptions.name,
      ...(spanOptions.metric?.kind ? { metricKind: spanOptions.metric.kind } : {}),
      attributes: cleanAttributes(spanOptions.attributes),
      metricAttributes: cleanAttributes(spanOptions.metric?.attributes),
    });
    if (!enrichment) return { metricAttributes: {}, metrics: [] };
    const attributes = cleanAttributes(enrichment.attributes);
    if (Object.keys(attributes).length > 0) span.setAttributes(attributes);
    for (const event of enrichment.events ?? []) {
      span.addEvent(event.name, cleanAttributes(event.attributes));
    }
    return {
      metricAttributes: cleanAttributes(enrichment.metricAttributes),
      metrics: enrichment.metrics ?? [],
    };
  } catch (error) {
    recordExceptionOnSpan(span, error);
    span.setAttribute("cognidesk.telemetry.enrichment_failed", true);
    return { metricAttributes: {}, metrics: [] };
  }
}

function recordSpanMetric(
  metric: TelemetryMetricOptions | undefined,
  success: boolean,
  durationMs: number,
  enrichmentAttributes: Attributes = {},
) {
  if (!metric) return;
  const attributes = cleanAttributes({
    ...metric.attributes,
    ...enrichmentAttributes,
    [telemetryAttributes.success]: success,
  });
  const instruments = getTelemetryInstruments();
  if (!success) instruments.runtimeFailures.add(1, attributes);
  switch (metric.kind) {
    case "runtime":
      instruments.runtimeOperations.add(1, attributes);
      instruments.runtimeOperationDuration.record(durationMs, attributes);
      return;
    case "model":
      instruments.modelCalls.add(1, attributes);
      instruments.modelDuration.record(durationMs, attributes);
      if (metric.tokenUsage?.inputTokens !== undefined) {
        instruments.modelTokens.record(metric.tokenUsage.inputTokens, { ...attributes, "cognidesk.token.kind": "input" });
      }
      if (metric.tokenUsage?.cachedInputTokens !== undefined) {
        instruments.modelTokens.record(metric.tokenUsage.cachedInputTokens, { ...attributes, "cognidesk.token.kind": "cached_input" });
      }
      if (metric.tokenUsage?.outputTokens !== undefined) {
        instruments.modelTokens.record(metric.tokenUsage.outputTokens, { ...attributes, "cognidesk.token.kind": "output" });
      }
      if (metric.tokenUsage?.reasoningTokens !== undefined) {
        instruments.modelTokens.record(metric.tokenUsage.reasoningTokens, { ...attributes, "cognidesk.token.kind": "reasoning" });
      }
      if (metric.tokenUsage?.totalTokens !== undefined) {
        instruments.modelTokens.record(metric.tokenUsage.totalTokens, { ...attributes, "cognidesk.token.kind": "total" });
      }
      return;
    case "tool":
      instruments.toolExecutions.add(1, attributes);
      instruments.toolDuration.record(durationMs, attributes);
      return;
    case "action":
      instruments.actionExecutions.add(1, attributes);
      instruments.actionDuration.record(durationMs, attributes);
      return;
    case "knowledge":
      instruments.knowledgeRetrievals.add(1, attributes);
      instruments.knowledgeDuration.record(durationMs, attributes);
      return;
  }
}

function recordCustomTelemetryMetrics(
  options: TelemetryOptionsCarrier,
  metricsToRecord: TelemetryCustomMetric[] | undefined,
  commonAttributes: Attributes = {},
) {
  if (!telemetryEnabled(options) || !metricsToRecord?.length) return;
  for (const metric of metricsToRecord) {
    const definition = options.telemetry?.customMetrics?.find((candidate) => candidate.name === metric.name);
    if (!definition || !isValidMetricName(definition.name) || !Number.isFinite(metric.value)) continue;
    const attributes = cleanAttributes({
      ...commonAttributes,
      ...metric.attributes,
    });
    if (definition.kind === "histogram") {
      const instrument = customHistograms.get(definition.name) ?? createCustomHistogram(definition);
      instrument.record(metric.value, attributes);
      continue;
    }
    if (metric.value < 0) continue;
    const instrument = customCounters.get(definition.name) ?? createCustomCounter(definition);
    instrument.add(metric.value, attributes);
  }
}

function createCustomCounter(metric: TelemetryCustomMetricDefinition): CustomCounter {
  const instrument = metrics.getMeter("cognidesk.core").createCounter(metric.name, {
    ...(metric.description ? { description: metric.description } : {}),
    ...(metric.unit ? { unit: metric.unit } : {}),
  });
  customCounters.set(metric.name, instrument);
  return instrument;
}

function createCustomHistogram(metric: TelemetryCustomMetricDefinition): CustomHistogram {
  const instrument = metrics.getMeter("cognidesk.core").createHistogram(metric.name, {
    ...(metric.description ? { description: metric.description } : {}),
    ...(metric.unit ? { unit: metric.unit } : {}),
  });
  customHistograms.set(metric.name, instrument);
  return instrument;
}

function isValidMetricName(name: string) {
  if (!name || name.length > 255) return false;
  for (const character of name) {
    const code = character.charCodeAt(0);
    const isLower = code >= 97 && code <= 122;
    const isUpper = code >= 65 && code <= 90;
    const isDigit = code >= 48 && code <= 57;
    if (!isLower && !isUpper && !isDigit && character !== "." && character !== "_" && character !== "-") return false;
  }
  return true;
}

function recordExceptionOnSpan(span: Span, error: unknown) {
  if (error instanceof Error) {
    span.recordException(error);
    span.setAttribute(telemetryAttributes.errorType, error.name);
    return;
  }
  span.recordException(String(error));
  span.setAttribute(telemetryAttributes.errorType, typeof error);
}

function cleanAttributes(attributes: Attributes | undefined): Attributes {
  if (!attributes) return {};
  const cleaned: Attributes = {};
  for (const [key, value] of Object.entries(attributes)) {
    if (Object.keys(cleaned).length >= maxAttributeCount) break;
    if (!key || key.length > maxAttributeKeyLength) continue;
    const attributeValue = cleanAttributeValue(value);
    if (attributeValue !== undefined) cleaned[key] = attributeValue;
  }
  return cleaned;
}

function cleanAttributeValue(value: AttributeValue | null | undefined): AttributeValue | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value === "string") return truncateAttributeString(value);
  if (typeof value === "number") return Number.isFinite(value) ? value : undefined;
  if (typeof value === "boolean") return value;
  if (Array.isArray(value)) {
    const cleaned = value
      .slice(0, maxAttributeArrayLength)
      .map((item) => cleanScalarAttributeValue(item))
      .filter((item): item is string | number | boolean => item !== undefined);
    if (cleaned.every((item) => typeof item === "string")) return cleaned as string[];
    if (cleaned.every((item) => typeof item === "number")) return cleaned as number[];
    if (cleaned.every((item) => typeof item === "boolean")) return cleaned as boolean[];
    return cleaned.map(String);
  }
  return truncateAttributeString(JSON.stringify(value));
}

function cleanScalarAttributeValue(value: unknown): string | number | boolean | undefined {
  if (typeof value === "string") return truncateAttributeString(value);
  if (typeof value === "number") return Number.isFinite(value) ? value : undefined;
  if (typeof value === "boolean") return value;
  return undefined;
}

function truncateAttributeString(value: string) {
  if (value.length <= maxAttributeValueLength) return value;
  return `${value.slice(0, maxAttributeValueLength - 3)}...`;
}

function serializeEventAttributes(attributes: Record<string, unknown>): Attributes {
  return Object.fromEntries(
    Object.entries(attributes)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, serializeAttributeValue(value)]),
  );
}

function serializeAttributeValue(value: unknown): string | number | boolean {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
  return JSON.stringify(value);
}
