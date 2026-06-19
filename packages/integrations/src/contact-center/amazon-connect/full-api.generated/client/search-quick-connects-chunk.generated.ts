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
export const AmazonConnectFullApiSearchQuickConnectsOperationKeys = [
  "connect:SearchQuickConnects"
] as const;
export type AmazonConnectFullApiSearchQuickConnectsOperationKey = typeof AmazonConnectFullApiSearchQuickConnectsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchQuickConnectsOperationPathParamMap {
  "connect:SearchQuickConnects": {};
}

export interface AmazonConnectFullApiSearchQuickConnectsOperationRequestMap {
  "connect:SearchQuickConnects": AmazonConnectFullApiOperationInput<"connect:SearchQuickConnects">;
}

export interface AmazonConnectFullApiSearchQuickConnectsGeneratedClient {
  SearchQuickConnects(...args: AmazonConnectFullApiOperationArgs<"connect:SearchQuickConnects">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchQuickConnects"]>;
}

export const AmazonConnectFullApiSearchQuickConnectsGeneratedFunctionNames = [
  "SearchQuickConnects"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchQuickConnectsGeneratedClient)[];

export function createAmazonConnectFullApiSearchQuickConnectsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchQuickConnectsGeneratedClient {
  return {
    SearchQuickConnects: (...args) => callOperation("connect:SearchQuickConnects", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchQuickConnects">)),
  };
}
