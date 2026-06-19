import { context, trace } from "@opentelemetry/api";
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
const tracerProvider = new BasicTracerProvider({
  spanProcessors: [new SimpleSpanProcessor(spanExporter)],
});

context.setGlobalContextManager(new AsyncLocalStorageContextManager().enable());
trace.setGlobalTracerProvider(tracerProvider);
