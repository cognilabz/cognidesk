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
export const AmazonConnectFullApiFlowAssociationsOperationKeys = [
  "connect:AssociateFlow",
  "connect:DisassociateFlow",
  "connect:GetFlowAssociation"
] as const;
export type AmazonConnectFullApiFlowAssociationsOperationKey = typeof AmazonConnectFullApiFlowAssociationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiFlowAssociationsOperationPathParamMap {
  "connect:AssociateFlow": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateFlow": { "InstanceId": AmazonConnectFullApiPathParamValue; "ResourceId": AmazonConnectFullApiPathParamValue; "ResourceType": AmazonConnectFullApiPathParamValue };
  "connect:GetFlowAssociation": { "InstanceId": AmazonConnectFullApiPathParamValue; "ResourceId": AmazonConnectFullApiPathParamValue; "ResourceType": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiFlowAssociationsOperationRequestMap {
  "connect:AssociateFlow": AmazonConnectFullApiOperationInput<"connect:AssociateFlow">;
  "connect:DisassociateFlow": AmazonConnectFullApiOperationInput<"connect:DisassociateFlow">;
  "connect:GetFlowAssociation": AmazonConnectFullApiOperationInput<"connect:GetFlowAssociation">;
}

export interface AmazonConnectFullApiFlowAssociationsGeneratedClient {
  AssociateFlow(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateFlow">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateFlow"]>;
  DisassociateFlow(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateFlow">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateFlow"]>;
  GetFlowAssociation(...args: AmazonConnectFullApiOperationArgs<"connect:GetFlowAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetFlowAssociation"]>;
}

export const AmazonConnectFullApiFlowAssociationsGeneratedFunctionNames = [
  "AssociateFlow",
  "DisassociateFlow",
  "GetFlowAssociation"
] as const satisfies readonly (keyof AmazonConnectFullApiFlowAssociationsGeneratedClient)[];

export function createAmazonConnectFullApiFlowAssociationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiFlowAssociationsGeneratedClient {
  return {
    AssociateFlow: (...args) => callOperation("connect:AssociateFlow", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateFlow">)),
    DisassociateFlow: (...args) => callOperation("connect:DisassociateFlow", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateFlow">)),
    GetFlowAssociation: (...args) => callOperation("connect:GetFlowAssociation", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetFlowAssociation">)),
  };
}
