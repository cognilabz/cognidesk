import { context, metrics, trace, type Attributes } from "@opentelemetry/api";
import { AsyncLocalStorageContextManager } from "@opentelemetry/context-async-hooks";
import { BasicTracerProvider, InMemorySpanExporter, SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";

export { expect, it } from "vitest";
export { z } from "zod";
export {
  buildJourneyIndex,
  createAgent,
  createRuntime,
  knowledgeSource,
  tool,
} from "../../../src/index.js";
export type { TextGenerationInput } from "../../../src/index.js";
export { RecordingStorage, createModels, vectorForMatcherTest } from "../fixtures.js";

export const spanExporter = new InMemorySpanExporter();
export const recordedMetrics: Array<{
  kind: "counter" | "histogram";
  name: string;
  value: number;
  attributes?: Attributes;
}> = [];
const tracerProvider = new BasicTracerProvider({
  spanProcessors: [new SimpleSpanProcessor(spanExporter)],
});

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
    createObservableGauge: () => ({
      addCallback: () => undefined,
      removeCallback: () => undefined,
    }),
  }),
} as unknown as Parameters<typeof metrics.setGlobalMeterProvider>[0]);
