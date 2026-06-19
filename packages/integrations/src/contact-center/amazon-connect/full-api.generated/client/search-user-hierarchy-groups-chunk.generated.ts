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
export const AmazonConnectFullApiSearchUserHierarchyGroupsOperationKeys = [
  "connect:SearchUserHierarchyGroups"
] as const;
export type AmazonConnectFullApiSearchUserHierarchyGroupsOperationKey = typeof AmazonConnectFullApiSearchUserHierarchyGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchUserHierarchyGroupsOperationPathParamMap {
  "connect:SearchUserHierarchyGroups": {};
}

export interface AmazonConnectFullApiSearchUserHierarchyGroupsOperationRequestMap {
  "connect:SearchUserHierarchyGroups": AmazonConnectFullApiOperationInput<"connect:SearchUserHierarchyGroups">;
}

export interface AmazonConnectFullApiSearchUserHierarchyGroupsGeneratedClient {
  SearchUserHierarchyGroups(...args: AmazonConnectFullApiOperationArgs<"connect:SearchUserHierarchyGroups">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchUserHierarchyGroups"]>;
}

export const AmazonConnectFullApiSearchUserHierarchyGroupsGeneratedFunctionNames = [
  "SearchUserHierarchyGroups"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchUserHierarchyGroupsGeneratedClient)[];

export function createAmazonConnectFullApiSearchUserHierarchyGroupsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchUserHierarchyGroupsGeneratedClient {
  return {
    SearchUserHierarchyGroups: (...args) => callOperation("connect:SearchUserHierarchyGroups", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchUserHierarchyGroups">)),
  };
}
