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
export const AmazonConnectFullApiTrafficDistributionGroupsOperationKeys = [
  "connect:ListTrafficDistributionGroups"
] as const;
export type AmazonConnectFullApiTrafficDistributionGroupsOperationKey = typeof AmazonConnectFullApiTrafficDistributionGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiTrafficDistributionGroupsOperationPathParamMap {
  "connect:ListTrafficDistributionGroups": {};
}

export interface AmazonConnectFullApiTrafficDistributionGroupsOperationRequestMap {
  "connect:ListTrafficDistributionGroups": AmazonConnectFullApiOperationInput<"connect:ListTrafficDistributionGroups">;
}

export interface AmazonConnectFullApiTrafficDistributionGroupsGeneratedClient {
  ListTrafficDistributionGroups(...args: AmazonConnectFullApiOperationArgs<"connect:ListTrafficDistributionGroups">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListTrafficDistributionGroups"]>;
}

export const AmazonConnectFullApiTrafficDistributionGroupsGeneratedFunctionNames = [
  "ListTrafficDistributionGroups"
] as const satisfies readonly (keyof AmazonConnectFullApiTrafficDistributionGroupsGeneratedClient)[];

export function createAmazonConnectFullApiTrafficDistributionGroupsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiTrafficDistributionGroupsGeneratedClient {
  return {
    ListTrafficDistributionGroups: (...args) => callOperation("connect:ListTrafficDistributionGroups", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListTrafficDistributionGroups">)),
  };
}
