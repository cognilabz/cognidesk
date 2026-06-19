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
export const AmazonConnectFullApiSearchContactFlowModulesOperationKeys = [
  "connect:SearchContactFlowModules"
] as const;
export type AmazonConnectFullApiSearchContactFlowModulesOperationKey = typeof AmazonConnectFullApiSearchContactFlowModulesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchContactFlowModulesOperationPathParamMap {
  "connect:SearchContactFlowModules": {};
}

export interface AmazonConnectFullApiSearchContactFlowModulesOperationRequestMap {
  "connect:SearchContactFlowModules": AmazonConnectFullApiOperationInput<"connect:SearchContactFlowModules">;
}

export interface AmazonConnectFullApiSearchContactFlowModulesGeneratedClient {
  SearchContactFlowModules(...args: AmazonConnectFullApiOperationArgs<"connect:SearchContactFlowModules">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchContactFlowModules"]>;
}

export const AmazonConnectFullApiSearchContactFlowModulesGeneratedFunctionNames = [
  "SearchContactFlowModules"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchContactFlowModulesGeneratedClient)[];

export function createAmazonConnectFullApiSearchContactFlowModulesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchContactFlowModulesGeneratedClient {
  return {
    SearchContactFlowModules: (...args) => callOperation("connect:SearchContactFlowModules", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchContactFlowModules">)),
  };
}
