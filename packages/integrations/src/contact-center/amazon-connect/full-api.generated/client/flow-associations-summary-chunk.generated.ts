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
export const AmazonConnectFullApiFlowAssociationsSummaryOperationKeys = [
  "connect:ListFlowAssociations"
] as const;
export type AmazonConnectFullApiFlowAssociationsSummaryOperationKey = typeof AmazonConnectFullApiFlowAssociationsSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiFlowAssociationsSummaryOperationPathParamMap {
  "connect:ListFlowAssociations": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiFlowAssociationsSummaryOperationRequestMap {
  "connect:ListFlowAssociations": AmazonConnectFullApiOperationInput<"connect:ListFlowAssociations">;
}

export interface AmazonConnectFullApiFlowAssociationsSummaryGeneratedClient {
  ListFlowAssociations(...args: AmazonConnectFullApiOperationArgs<"connect:ListFlowAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListFlowAssociations"]>;
}

export const AmazonConnectFullApiFlowAssociationsSummaryGeneratedFunctionNames = [
  "ListFlowAssociations"
] as const satisfies readonly (keyof AmazonConnectFullApiFlowAssociationsSummaryGeneratedClient)[];

export function createAmazonConnectFullApiFlowAssociationsSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiFlowAssociationsSummaryGeneratedClient {
  return {
    ListFlowAssociations: (...args) => callOperation("connect:ListFlowAssociations", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListFlowAssociations">)),
  };
}
