import {
  INVALID_SPAN_CONTEXT,
  SpanStatusCode,
  context,
  metrics,
  trace,
  type Attributes,
  type Span,
} from "@opentelemetry/api";

type MaybePromise<T> = Promise<T> | T;

export type TelemetryContentMode = "redacted" | "full";

export interface RuntimeTelemetryOptions {
  enabled?: boolean;
  content?: TelemetryContentMode;
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
  addEvent(name: string, attributes?: Attributes): void;
  recordException(error: unknown): void;
}

export const telemetrySpanNames = {
  runtimeInitialize: "cognidesk.runtime.initialize",
  runtimeCreateConversation: "cognidesk.runtime.create_conversation",
  runtimeListConversations: "cognidesk.runtime.list_conversations",
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
  conversationId: "cognidesk.conversation.id",
  journeyId: "cognidesk.journey.id",
  stateId: "cognidesk.state.id",
  operation: "cognidesk.operation",
  modelRole: "cognidesk.model.role",
  modelProvider: "cognidesk.model.provider",
  modelName: "cognidesk.model.name",
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

type MetricKind = "runtime" | "model" | "tool" | "action" | "knowledge";

type TelemetryMetricOptions = {
  kind: MetricKind;
  attributes?: Attributes;
  tokenUsage?: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  };
};

export interface TelemetrySpanOptions {
  name: string;
  attributes?: Attributes;
  metric?: TelemetryMetricOptions;
}

type TelemetryInstruments = ReturnType<typeof createTelemetryInstruments>;

let telemetryInstruments: TelemetryInstruments | undefined;

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
      recordSpanMetric(spanOptions.metric, success, durationMs);
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
    addEvent(name, attributes = {}) {
      if (!telemetryEnabled(options)) return;
      trace.getActiveSpan()?.addEvent(name, cleanAttributes(attributes));
    },
    recordException(error) {
      if (!telemetryEnabled(options)) return;
      const span = trace.getActiveSpan();
      if (span) recordExceptionOnSpan(span, error);
    },
  };
}

function recordSpanMetric(metric: TelemetryMetricOptions | undefined, success: boolean, durationMs: number) {
  if (!metric) return;
  const attributes = cleanAttributes({
    ...metric.attributes,
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
      if (metric.tokenUsage?.outputTokens !== undefined) {
        instruments.modelTokens.record(metric.tokenUsage.outputTokens, { ...attributes, "cognidesk.token.kind": "output" });
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
  return Object.fromEntries(
    Object.entries(attributes).filter((entry): entry is [string, NonNullable<Attributes[string]>] => (
      entry[1] !== undefined && entry[1] !== null
    )),
  );
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
