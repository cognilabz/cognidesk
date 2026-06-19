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
export const AmazonConnectFullApiFlowAssociationsBatchOperationKeys = [
  "connect:BatchGetFlowAssociation"
] as const;
export type AmazonConnectFullApiFlowAssociationsBatchOperationKey = typeof AmazonConnectFullApiFlowAssociationsBatchOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiFlowAssociationsBatchOperationPathParamMap {
  "connect:BatchGetFlowAssociation": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiFlowAssociationsBatchOperationRequestMap {
  "connect:BatchGetFlowAssociation": AmazonConnectFullApiOperationInput<"connect:BatchGetFlowAssociation">;
}

export interface AmazonConnectFullApiFlowAssociationsBatchGeneratedClient {
  BatchGetFlowAssociation(...args: AmazonConnectFullApiOperationArgs<"connect:BatchGetFlowAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:BatchGetFlowAssociation"]>;
}

export const AmazonConnectFullApiFlowAssociationsBatchGeneratedFunctionNames = [
  "BatchGetFlowAssociation"
] as const satisfies readonly (keyof AmazonConnectFullApiFlowAssociationsBatchGeneratedClient)[];

export function createAmazonConnectFullApiFlowAssociationsBatchGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiFlowAssociationsBatchGeneratedClient {
  return {
    BatchGetFlowAssociation: (...args) => callOperation("connect:BatchGetFlowAssociation", ...(args as AmazonConnectFullApiOperationArgs<"connect:BatchGetFlowAssociation">)),
  };
}
