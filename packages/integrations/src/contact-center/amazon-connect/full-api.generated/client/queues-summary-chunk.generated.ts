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
export const AmazonConnectFullApiQueuesSummaryOperationKeys = [
  "connect:ListQueues"
] as const;
export type AmazonConnectFullApiQueuesSummaryOperationKey = typeof AmazonConnectFullApiQueuesSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiQueuesSummaryOperationPathParamMap {
  "connect:ListQueues": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiQueuesSummaryOperationRequestMap {
  "connect:ListQueues": AmazonConnectFullApiOperationInput<"connect:ListQueues">;
}

export interface AmazonConnectFullApiQueuesSummaryGeneratedClient {
  ListQueues(...args: AmazonConnectFullApiOperationArgs<"connect:ListQueues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListQueues"]>;
}

export const AmazonConnectFullApiQueuesSummaryGeneratedFunctionNames = [
  "ListQueues"
] as const satisfies readonly (keyof AmazonConnectFullApiQueuesSummaryGeneratedClient)[];

export function createAmazonConnectFullApiQueuesSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiQueuesSummaryGeneratedClient {
  return {
    ListQueues: (...args) => callOperation("connect:ListQueues", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListQueues">)),
  };
}
