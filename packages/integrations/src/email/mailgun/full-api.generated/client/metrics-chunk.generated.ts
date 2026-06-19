// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiMetricsOperationKeys = [
  "POST /v1/analytics/metrics",
  "POST /v1/analytics/usage/metrics"
] as const;
export type MailgunFullApiMetricsOperationKey = typeof MailgunFullApiMetricsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiMetricsOperationPathParamMap {
  "POST /v1/analytics/metrics": {};
  "POST /v1/analytics/usage/metrics": {};
}

export interface MailgunFullApiMetricsOperationRequestMap {
  "POST /v1/analytics/metrics": MailgunFullApiOperationInput<"POST /v1/analytics/metrics">;
  "POST /v1/analytics/usage/metrics": MailgunFullApiOperationInput<"POST /v1/analytics/usage/metrics">;
}

export interface MailgunFullApiMetricsGeneratedClient {
  QueryAccountMetrics(...args: MailgunFullApiOperationArgs<"POST /v1/analytics/metrics">): Promise<MailgunFullApiOperationResponseMap["POST /v1/analytics/metrics"]>;
  QueryAccountUsageMetrics(...args: MailgunFullApiOperationArgs<"POST /v1/analytics/usage/metrics">): Promise<MailgunFullApiOperationResponseMap["POST /v1/analytics/usage/metrics"]>;
}

export const MailgunFullApiMetricsGeneratedFunctionNames = [
  "QueryAccountMetrics",
  "QueryAccountUsageMetrics"
] as const satisfies readonly (keyof MailgunFullApiMetricsGeneratedClient)[];

export function createMailgunFullApiMetricsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiMetricsGeneratedClient {
  return {
    QueryAccountMetrics: (...args) => callOperation("POST /v1/analytics/metrics", ...(args as MailgunFullApiOperationArgs<"POST /v1/analytics/metrics">)),
    QueryAccountUsageMetrics: (...args) => callOperation("POST /v1/analytics/usage/metrics", ...(args as MailgunFullApiOperationArgs<"POST /v1/analytics/usage/metrics">)),
  };
}
