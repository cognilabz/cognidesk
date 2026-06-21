import type { NormalizedIntegrationErrorShape } from "./errors.js";

export interface IntegrationInstrumentationEvent {
  providerPackageId: string;
  provider?: string;
  operationAlias: string;
  phase: "start" | "success" | "error";
  startedAt: number;
  durationMs?: number;
  metadata?: Record<string, unknown>;
  error?: NormalizedIntegrationErrorShape;
}

export interface IntegrationInstrumentationHooks {
  onOperationStart?(event: IntegrationInstrumentationEvent): void;
  onOperationSuccess?(event: IntegrationInstrumentationEvent): void;
  onOperationError?(event: IntegrationInstrumentationEvent): void;
}

export function createOperationInstrumentation(input: {
  providerPackageId: string;
  provider?: string;
  operationAlias: string;
  hooks?: IntegrationInstrumentationHooks;
  metadata?: Record<string, unknown>;
}) {
  const startedAt = Date.now();
  const startEvent: IntegrationInstrumentationEvent = {
    providerPackageId: input.providerPackageId,
    ...(input.provider ? { provider: input.provider } : {}),
    operationAlias: input.operationAlias,
    phase: "start",
    startedAt,
    ...(input.metadata ? { metadata: input.metadata } : {}),
  };
  input.hooks?.onOperationStart?.(startEvent);

  return {
    success(metadata?: Record<string, unknown>) {
      input.hooks?.onOperationSuccess?.({
        ...startEvent,
        phase: "success",
        durationMs: Date.now() - startedAt,
        ...(metadata ? { metadata: { ...startEvent.metadata, ...metadata } } : {}),
      });
    },
    error(error: NormalizedIntegrationErrorShape, metadata?: Record<string, unknown>) {
      input.hooks?.onOperationError?.({
        ...startEvent,
        phase: "error",
        durationMs: Date.now() - startedAt,
        error,
        ...(metadata ? { metadata: { ...startEvent.metadata, ...metadata } } : {}),
      });
    },
  };
}
