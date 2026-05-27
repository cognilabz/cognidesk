import process from "node:process";
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

function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}
