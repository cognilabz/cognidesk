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
export const AmazonConnectFullApiUserHierarchyGroupsSummaryOperationKeys = [
  "connect:ListUserHierarchyGroups"
] as const;
export type AmazonConnectFullApiUserHierarchyGroupsSummaryOperationKey = typeof AmazonConnectFullApiUserHierarchyGroupsSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiUserHierarchyGroupsSummaryOperationPathParamMap {
  "connect:ListUserHierarchyGroups": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiUserHierarchyGroupsSummaryOperationRequestMap {
  "connect:ListUserHierarchyGroups": AmazonConnectFullApiOperationInput<"connect:ListUserHierarchyGroups">;
}

export interface AmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedClient {
  ListUserHierarchyGroups(...args: AmazonConnectFullApiOperationArgs<"connect:ListUserHierarchyGroups">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListUserHierarchyGroups"]>;
}

export const AmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedFunctionNames = [
  "ListUserHierarchyGroups"
] as const satisfies readonly (keyof AmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedClient)[];

export function createAmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiUserHierarchyGroupsSummaryGeneratedClient {
  return {
    ListUserHierarchyGroups: (...args) => callOperation("connect:ListUserHierarchyGroups", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListUserHierarchyGroups">)),
  };
}
