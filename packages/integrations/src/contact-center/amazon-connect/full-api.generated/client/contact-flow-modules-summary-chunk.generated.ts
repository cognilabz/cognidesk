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
export const AmazonConnectFullApiContactFlowModulesSummaryOperationKeys = [
  "connect:ListContactFlowModules"
] as const;
export type AmazonConnectFullApiContactFlowModulesSummaryOperationKey = typeof AmazonConnectFullApiContactFlowModulesSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiContactFlowModulesSummaryOperationPathParamMap {
  "connect:ListContactFlowModules": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiContactFlowModulesSummaryOperationRequestMap {
  "connect:ListContactFlowModules": AmazonConnectFullApiOperationInput<"connect:ListContactFlowModules">;
}

export interface AmazonConnectFullApiContactFlowModulesSummaryGeneratedClient {
  ListContactFlowModules(...args: AmazonConnectFullApiOperationArgs<"connect:ListContactFlowModules">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListContactFlowModules"]>;
}

export const AmazonConnectFullApiContactFlowModulesSummaryGeneratedFunctionNames = [
  "ListContactFlowModules"
] as const satisfies readonly (keyof AmazonConnectFullApiContactFlowModulesSummaryGeneratedClient)[];

export function createAmazonConnectFullApiContactFlowModulesSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiContactFlowModulesSummaryGeneratedClient {
  return {
    ListContactFlowModules: (...args) => callOperation("connect:ListContactFlowModules", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListContactFlowModules">)),
  };
}
