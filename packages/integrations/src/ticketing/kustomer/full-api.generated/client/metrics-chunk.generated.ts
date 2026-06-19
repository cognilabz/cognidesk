// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiMetricsOperationKeys = [
  "QueueMetrics"
] as const;
export type KustomerFullApiMetricsOperationKey = typeof KustomerFullApiMetricsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiMetricsOperationPathParamMap {
  "QueueMetrics": { "ids": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiMetricsOperationRequestMap {
  "QueueMetrics": KustomerFullApiOperationInput<"QueueMetrics">;
}

export interface KustomerFullApiMetricsGeneratedClient {
  kustomerQueueMetrics(...args: KustomerFullApiOperationArgs<"QueueMetrics">): Promise<KustomerFullApiOperationResponseMap["QueueMetrics"]>;
}

export const KustomerFullApiMetricsGeneratedFunctionNames = [
  "kustomerQueueMetrics"
] as const satisfies readonly (keyof KustomerFullApiMetricsGeneratedClient)[];

export function createKustomerFullApiMetricsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiMetricsGeneratedClient {
  return {
    kustomerQueueMetrics: (...args) => callOperation("QueueMetrics", ...(args as KustomerFullApiOperationArgs<"QueueMetrics">)),
  };
}
