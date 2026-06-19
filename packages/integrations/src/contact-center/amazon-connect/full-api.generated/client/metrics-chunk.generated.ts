// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiMetricsOperationKeys = [
  "connect:GetContactMetrics",
  "connect:GetCurrentMetricData",
  "connect:GetCurrentUserData",
  "connect:GetMetricData",
  "connect:GetMetricDataV2"
] as const;
export type AmazonConnectFullApiMetricsOperationKey = typeof AmazonConnectFullApiMetricsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiMetricsOperationPathParamMap {
  "connect:GetContactMetrics": {};
  "connect:GetCurrentMetricData": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:GetCurrentUserData": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:GetMetricData": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:GetMetricDataV2": {};
}

export interface AmazonConnectFullApiMetricsOperationRequestMap {
  "connect:GetContactMetrics": AmazonConnectFullApiOperationInput<"connect:GetContactMetrics">;
  "connect:GetCurrentMetricData": AmazonConnectFullApiOperationInput<"connect:GetCurrentMetricData">;
  "connect:GetCurrentUserData": AmazonConnectFullApiOperationInput<"connect:GetCurrentUserData">;
  "connect:GetMetricData": AmazonConnectFullApiOperationInput<"connect:GetMetricData">;
  "connect:GetMetricDataV2": AmazonConnectFullApiOperationInput<"connect:GetMetricDataV2">;
}

export interface AmazonConnectFullApiMetricsGeneratedClient {
  GetContactMetrics(...args: AmazonConnectFullApiOperationArgs<"connect:GetContactMetrics">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetContactMetrics"]>;
  GetCurrentMetricData(...args: AmazonConnectFullApiOperationArgs<"connect:GetCurrentMetricData">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetCurrentMetricData"]>;
  GetCurrentUserData(...args: AmazonConnectFullApiOperationArgs<"connect:GetCurrentUserData">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetCurrentUserData"]>;
  GetMetricData(...args: AmazonConnectFullApiOperationArgs<"connect:GetMetricData">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetMetricData"]>;
  GetMetricDataV2(...args: AmazonConnectFullApiOperationArgs<"connect:GetMetricDataV2">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetMetricDataV2"]>;
}

export const AmazonConnectFullApiMetricsGeneratedFunctionNames = [
  "GetContactMetrics",
  "GetCurrentMetricData",
  "GetCurrentUserData",
  "GetMetricData",
  "GetMetricDataV2"
] as const satisfies readonly (keyof AmazonConnectFullApiMetricsGeneratedClient)[];

export function createAmazonConnectFullApiMetricsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiMetricsGeneratedClient {
  return {
    GetContactMetrics: (...args) => callOperation("connect:GetContactMetrics", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetContactMetrics">)),
    GetCurrentMetricData: (...args) => callOperation("connect:GetCurrentMetricData", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetCurrentMetricData">)),
    GetCurrentUserData: (...args) => callOperation("connect:GetCurrentUserData", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetCurrentUserData">)),
    GetMetricData: (...args) => callOperation("connect:GetMetricData", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetMetricData">)),
    GetMetricDataV2: (...args) => callOperation("connect:GetMetricDataV2", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetMetricDataV2">)),
  };
}
