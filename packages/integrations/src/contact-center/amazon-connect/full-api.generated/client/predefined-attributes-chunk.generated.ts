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
export const AmazonConnectFullApiPredefinedAttributesOperationKeys = [
  "connect:CreatePredefinedAttribute",
  "connect:DeletePredefinedAttribute",
  "connect:DescribePredefinedAttribute",
  "connect:ListPredefinedAttributes",
  "connect:UpdatePredefinedAttribute"
] as const;
export type AmazonConnectFullApiPredefinedAttributesOperationKey = typeof AmazonConnectFullApiPredefinedAttributesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiPredefinedAttributesOperationPathParamMap {
  "connect:CreatePredefinedAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeletePredefinedAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue; "Name": AmazonConnectFullApiPathParamValue };
  "connect:DescribePredefinedAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue; "Name": AmazonConnectFullApiPathParamValue };
  "connect:ListPredefinedAttributes": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdatePredefinedAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue; "Name": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiPredefinedAttributesOperationRequestMap {
  "connect:CreatePredefinedAttribute": AmazonConnectFullApiOperationInput<"connect:CreatePredefinedAttribute">;
  "connect:DeletePredefinedAttribute": AmazonConnectFullApiOperationInput<"connect:DeletePredefinedAttribute">;
  "connect:DescribePredefinedAttribute": AmazonConnectFullApiOperationInput<"connect:DescribePredefinedAttribute">;
  "connect:ListPredefinedAttributes": AmazonConnectFullApiOperationInput<"connect:ListPredefinedAttributes">;
  "connect:UpdatePredefinedAttribute": AmazonConnectFullApiOperationInput<"connect:UpdatePredefinedAttribute">;
}

export interface AmazonConnectFullApiPredefinedAttributesGeneratedClient {
  CreatePredefinedAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:CreatePredefinedAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreatePredefinedAttribute"]>;
  DeletePredefinedAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:DeletePredefinedAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeletePredefinedAttribute"]>;
  DescribePredefinedAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:DescribePredefinedAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribePredefinedAttribute"]>;
  ListPredefinedAttributes(...args: AmazonConnectFullApiOperationArgs<"connect:ListPredefinedAttributes">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListPredefinedAttributes"]>;
  UpdatePredefinedAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:UpdatePredefinedAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdatePredefinedAttribute"]>;
}

export const AmazonConnectFullApiPredefinedAttributesGeneratedFunctionNames = [
  "CreatePredefinedAttribute",
  "DeletePredefinedAttribute",
  "DescribePredefinedAttribute",
  "ListPredefinedAttributes",
  "UpdatePredefinedAttribute"
] as const satisfies readonly (keyof AmazonConnectFullApiPredefinedAttributesGeneratedClient)[];

export function createAmazonConnectFullApiPredefinedAttributesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiPredefinedAttributesGeneratedClient {
  return {
    CreatePredefinedAttribute: (...args) => callOperation("connect:CreatePredefinedAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreatePredefinedAttribute">)),
    DeletePredefinedAttribute: (...args) => callOperation("connect:DeletePredefinedAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeletePredefinedAttribute">)),
    DescribePredefinedAttribute: (...args) => callOperation("connect:DescribePredefinedAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribePredefinedAttribute">)),
    ListPredefinedAttributes: (...args) => callOperation("connect:ListPredefinedAttributes", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListPredefinedAttributes">)),
    UpdatePredefinedAttribute: (...args) => callOperation("connect:UpdatePredefinedAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdatePredefinedAttribute">)),
  };
}
