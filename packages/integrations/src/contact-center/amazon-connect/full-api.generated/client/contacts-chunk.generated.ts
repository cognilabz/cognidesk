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
export const AmazonConnectFullApiContactsOperationKeys = [
  "connect:AssociateContactWithUser",
  "connect:DescribeContact",
  "connect:UpdateContact",
  "connect:UpdateContactRoutingData"
] as const;
export type AmazonConnectFullApiContactsOperationKey = typeof AmazonConnectFullApiContactsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiContactsOperationPathParamMap {
  "connect:AssociateContactWithUser": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeContact": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContact": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContactRoutingData": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiContactsOperationRequestMap {
  "connect:AssociateContactWithUser": AmazonConnectFullApiOperationInput<"connect:AssociateContactWithUser">;
  "connect:DescribeContact": AmazonConnectFullApiOperationInput<"connect:DescribeContact">;
  "connect:UpdateContact": AmazonConnectFullApiOperationInput<"connect:UpdateContact">;
  "connect:UpdateContactRoutingData": AmazonConnectFullApiOperationInput<"connect:UpdateContactRoutingData">;
}

export interface AmazonConnectFullApiContactsGeneratedClient {
  AssociateContactWithUser(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateContactWithUser">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateContactWithUser"]>;
  DescribeContact(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeContact"]>;
  UpdateContact(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContact"]>;
  UpdateContactRoutingData(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactRoutingData">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactRoutingData"]>;
}

export const AmazonConnectFullApiContactsGeneratedFunctionNames = [
  "AssociateContactWithUser",
  "DescribeContact",
  "UpdateContact",
  "UpdateContactRoutingData"
] as const satisfies readonly (keyof AmazonConnectFullApiContactsGeneratedClient)[];

export function createAmazonConnectFullApiContactsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiContactsGeneratedClient {
  return {
    AssociateContactWithUser: (...args) => callOperation("connect:AssociateContactWithUser", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateContactWithUser">)),
    DescribeContact: (...args) => callOperation("connect:DescribeContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeContact">)),
    UpdateContact: (...args) => callOperation("connect:UpdateContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContact">)),
    UpdateContactRoutingData: (...args) => callOperation("connect:UpdateContactRoutingData", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactRoutingData">)),
  };
}
