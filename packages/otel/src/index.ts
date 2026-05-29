import process from "node:process";
import { metrics, SpanStatusCode, trace } from "@opentelemetry/api";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-proto";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { Resource } from "@opentelemetry/resources";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { NodeSDK } from "@opentelemetry/sdk-node";

export interface CognideskOtelOptions {
  serviceName: string;
  serviceVersion?: string;
  environment?: string;
  otlpEndpoint?: string;
  tracesEndpoint?: string;
  metricsEndpoint?: string;
  metricExportIntervalMillis?: number;
  resourceAttributes?: Record<string, string | number | boolean>;
  installShutdownHooks?: boolean;
}

export interface CognideskOtelHandle {
  sdk: NodeSDK;
  shutdown(): Promise<void>;
}

export interface CognideskDemoTelemetrySeedOptions {
  serviceName?: string;
  serviceVersion?: string;
  intervalMillis?: number;
}

export interface CognideskDemoTelemetrySeedHandle {
  shutdown(): void;
}

export function startCognideskOtel(options: CognideskOtelOptions): CognideskOtelHandle {
  const baseEndpoint = trimTrailingSlash(options.otlpEndpoint ?? process.env.OTEL_EXPORTER_OTLP_ENDPOINT ?? "http://localhost:4318");
  const sdk = new NodeSDK({
    resource: new Resource({
      "service.name": options.serviceName,
      ...(options.serviceVersion ? { "service.version": options.serviceVersion } : {}),
      ...(options.environment ? { "deployment.environment.name": options.environment } : {}),
      ...options.resourceAttributes,
    }),
    traceExporter: new OTLPTraceExporter({
      url: options.tracesEndpoint ?? process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT ?? `${baseEndpoint}/v1/traces`,
    }),
    metricReader: new PeriodicExportingMetricReader({
      exporter: new OTLPMetricExporter({
        url: options.metricsEndpoint ?? process.env.OTEL_EXPORTER_OTLP_METRICS_ENDPOINT ?? `${baseEndpoint}/v1/metrics`,
      }),
      exportIntervalMillis: options.metricExportIntervalMillis ?? 5000,
    }),
  });

  sdk.start();

  const shutdown = async () => {
    await sdk.shutdown();
  };

  if (options.installShutdownHooks ?? true) {
    const shutdownAndExit = (signal: NodeJS.Signals) => {
      void shutdown()
        .catch((error) => {
          console.error("Failed to shut down Cognidesk OpenTelemetry", error);
        })
        .finally(() => {
          process.kill(process.pid, signal);
        });
    };
    process.once("SIGTERM", shutdownAndExit);
    process.once("SIGINT", shutdownAndExit);
  }

  return { sdk, shutdown };
}

export function startCognideskDemoTelemetrySeed(
  options: CognideskDemoTelemetrySeedOptions = {},
): CognideskDemoTelemetrySeedHandle {
  const serviceName = options.serviceName ?? "cognidesk-flight-demo";
  const serviceVersion = options.serviceVersion ?? "0.0.0";
  const intervalMillis = Math.max(1000, options.intervalMillis ?? 3000);
  const meter = metrics.getMeter("cognidesk-demo-telemetry", serviceVersion);
  const tracer = trace.getTracer("cognidesk-demo-telemetry", serviceVersion);
  const supportRequests = meter.createCounter("cognidesk_demo_support_requests_total", {
    description: "Synthetic support workload for local Studio telemetry dashboards.",
    unit: "{request}",
  });
  const handoffs = meter.createCounter("cognidesk_demo_handoffs_total", {
    description: "Synthetic handoff count for local Studio telemetry dashboards.",
    unit: "{handoff}",
  });
  const queueDepthByRoute = new Map<string, DemoTelemetryPoint>();
  const slaMinutesByTier = new Map<string, DemoTelemetryPoint>();
  const timeoutHandles = new Set<ReturnType<typeof setTimeout>>();
  let tick = 0;

  meter.createObservableGauge("cognidesk_demo_queue_depth", {
    description: "Synthetic live queue depth by route.",
    unit: "{conversation}",
  }).addCallback((observable) => {
    for (const point of queueDepthByRoute.values()) {
      observable.observe(point.value, point.attributes);
    }
  });

  meter.createObservableGauge("cognidesk_demo_sla_minutes", {
    description: "Synthetic current SLA wait estimate by support tier.",
    unit: "min",
  }).addCallback((observable) => {
    for (const point of slaMinutesByTier.values()) {
      observable.observe(point.value, point.attributes);
    }
  });

  function emit() {
    const route = demoTelemetryRoutes[tick % demoTelemetryRoutes.length]!;
    const requests = 2 + ((tick + route.offset) % 5);
    const escalations = (tick + route.offset) % 4 === 0 ? 1 : 0;
    const queueDepth = 3 + ((tick * 2 + route.offset) % 13);
    const slaMinutes = 4 + ((tick + route.offset * 3) % 18);
    const durationMs = 80 + ((tick * 37 + route.offset * 19) % 620);
    const attributes = {
      "service.name": serviceName,
      "cognidesk.demo": "flight",
      "flight_demo.route": route.route,
      "flight_demo.channel": route.channel,
      "flight_demo.support_tier": route.tier,
      "flight_demo.priority": route.priority,
    };

    supportRequests.add(requests, attributes);
    if (escalations) handoffs.add(escalations, attributes);
    queueDepthByRoute.set(route.route, { value: queueDepth, attributes });
    slaMinutesByTier.set(route.tier, { value: slaMinutes, attributes });

    const span = tracer.startSpan("flight_demo.synthetic.support_case", {
      attributes: {
        ...attributes,
        "flight_demo.synthetic_request_count": requests,
        "flight_demo.synthetic_queue_depth": queueDepth,
        "flight_demo.synthetic_sla_minutes": slaMinutes,
      },
    });
    span.setStatus({ code: escalations ? SpanStatusCode.ERROR : SpanStatusCode.OK });
    if (escalations) {
      span.recordException(new Error("Synthetic handoff threshold exceeded"));
    }
    const timeout = setTimeout(() => {
      timeoutHandles.delete(timeout);
      span.end();
    }, durationMs);
    timeoutHandles.add(timeout);
    tick += 1;
  }

  emit();
  const interval = setInterval(emit, intervalMillis);
  return {
    shutdown() {
      clearInterval(interval);
      for (const timeout of timeoutHandles) clearTimeout(timeout);
      timeoutHandles.clear();
    },
  };
}

function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

type DemoTelemetryPoint = {
  value: number;
  attributes: Record<string, string | number | boolean>;
};

const demoTelemetryRoutes = [
  { route: "VIE-LHR", channel: "chat", tier: "rebooking", priority: "high", offset: 1 },
  { route: "VIE-FRA", channel: "web", tier: "status", priority: "normal", offset: 2 },
  { route: "VIE-CDG", channel: "chat", tier: "baggage", priority: "normal", offset: 3 },
  { route: "VIE-AMS", channel: "mobile", tier: "booking", priority: "low", offset: 4 },
] as const;
