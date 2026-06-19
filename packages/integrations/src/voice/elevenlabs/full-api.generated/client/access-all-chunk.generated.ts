// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiAccessAllOperationKeys = [
  "POST /v1/workspace/analytics/query/usage-by-product-over-time",
  "POST /v1/workspace/analytics/requests"
] as const;
export type ElevenLabsFullApiAccessAllOperationKey = typeof ElevenLabsFullApiAccessAllOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiAccessAllOperationPathParamMap {
  "POST /v1/workspace/analytics/query/usage-by-product-over-time": {};
  "POST /v1/workspace/analytics/requests": {};
}

export interface ElevenLabsFullApiAccessAllOperationRequestMap {
  "POST /v1/workspace/analytics/query/usage-by-product-over-time": ElevenLabsFullApiOperationInput<"POST /v1/workspace/analytics/query/usage-by-product-over-time">;
  "POST /v1/workspace/analytics/requests": ElevenLabsFullApiOperationInput<"POST /v1/workspace/analytics/requests">;
}

export interface ElevenLabsFullApiAccessAllGeneratedClient {
  UsageByProductOverTime(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/analytics/query/usage-by-product-over-time">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/analytics/query/usage-by-product-over-time"]>;
  RequestsList(...args: ElevenLabsFullApiOperationArgs<"POST /v1/workspace/analytics/requests">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/workspace/analytics/requests"]>;
}

export const ElevenLabsFullApiAccessAllGeneratedFunctionNames = [
  "UsageByProductOverTime",
  "RequestsList"
] as const satisfies readonly (keyof ElevenLabsFullApiAccessAllGeneratedClient)[];

export function createElevenLabsFullApiAccessAllGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiAccessAllGeneratedClient {
  return {
    UsageByProductOverTime: (...args) => callOperation("POST /v1/workspace/analytics/query/usage-by-product-over-time", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/analytics/query/usage-by-product-over-time">)),
    RequestsList: (...args) => callOperation("POST /v1/workspace/analytics/requests", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/workspace/analytics/requests">)),
  };
}
