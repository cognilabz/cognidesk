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
export const AmazonConnectFullApiUserHierarchyStructureOperationKeys = [
  "connect:DescribeUserHierarchyStructure",
  "connect:UpdateUserHierarchyStructure"
] as const;
export type AmazonConnectFullApiUserHierarchyStructureOperationKey = typeof AmazonConnectFullApiUserHierarchyStructureOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiUserHierarchyStructureOperationPathParamMap {
  "connect:DescribeUserHierarchyStructure": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateUserHierarchyStructure": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiUserHierarchyStructureOperationRequestMap {
  "connect:DescribeUserHierarchyStructure": AmazonConnectFullApiOperationInput<"connect:DescribeUserHierarchyStructure">;
  "connect:UpdateUserHierarchyStructure": AmazonConnectFullApiOperationInput<"connect:UpdateUserHierarchyStructure">;
}

export interface AmazonConnectFullApiUserHierarchyStructureGeneratedClient {
  DescribeUserHierarchyStructure(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeUserHierarchyStructure">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeUserHierarchyStructure"]>;
  UpdateUserHierarchyStructure(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateUserHierarchyStructure">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateUserHierarchyStructure"]>;
}

export const AmazonConnectFullApiUserHierarchyStructureGeneratedFunctionNames = [
  "DescribeUserHierarchyStructure",
  "UpdateUserHierarchyStructure"
] as const satisfies readonly (keyof AmazonConnectFullApiUserHierarchyStructureGeneratedClient)[];

export function createAmazonConnectFullApiUserHierarchyStructureGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiUserHierarchyStructureGeneratedClient {
  return {
    DescribeUserHierarchyStructure: (...args) => callOperation("connect:DescribeUserHierarchyStructure", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeUserHierarchyStructure">)),
    UpdateUserHierarchyStructure: (...args) => callOperation("connect:UpdateUserHierarchyStructure", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateUserHierarchyStructure">)),
  };
}
