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
export const AmazonConnectFullApiSearchQueuesOperationKeys = [
  "connect:SearchQueues"
] as const;
export type AmazonConnectFullApiSearchQueuesOperationKey = typeof AmazonConnectFullApiSearchQueuesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchQueuesOperationPathParamMap {
  "connect:SearchQueues": {};
}

export interface AmazonConnectFullApiSearchQueuesOperationRequestMap {
  "connect:SearchQueues": AmazonConnectFullApiOperationInput<"connect:SearchQueues">;
}

export interface AmazonConnectFullApiSearchQueuesGeneratedClient {
  SearchQueues(...args: AmazonConnectFullApiOperationArgs<"connect:SearchQueues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchQueues"]>;
}

export const AmazonConnectFullApiSearchQueuesGeneratedFunctionNames = [
  "SearchQueues"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchQueuesGeneratedClient)[];

export function createAmazonConnectFullApiSearchQueuesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchQueuesGeneratedClient {
  return {
    SearchQueues: (...args) => callOperation("connect:SearchQueues", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchQueues">)),
  };
}
