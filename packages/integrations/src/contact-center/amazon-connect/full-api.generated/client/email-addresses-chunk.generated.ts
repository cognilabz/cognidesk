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
export const AmazonConnectFullApiEmailAddressesOperationKeys = [
  "connect:AssociateEmailAddressAlias",
  "connect:CreateEmailAddress",
  "connect:DeleteEmailAddress",
  "connect:DescribeEmailAddress",
  "connect:DisassociateEmailAddressAlias",
  "connect:UpdateEmailAddressMetadata"
] as const;
export type AmazonConnectFullApiEmailAddressesOperationKey = typeof AmazonConnectFullApiEmailAddressesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiEmailAddressesOperationPathParamMap {
  "connect:AssociateEmailAddressAlias": { "InstanceId": AmazonConnectFullApiPathParamValue; "EmailAddressId": AmazonConnectFullApiPathParamValue };
  "connect:CreateEmailAddress": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteEmailAddress": { "InstanceId": AmazonConnectFullApiPathParamValue; "EmailAddressId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeEmailAddress": { "InstanceId": AmazonConnectFullApiPathParamValue; "EmailAddressId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateEmailAddressAlias": { "InstanceId": AmazonConnectFullApiPathParamValue; "EmailAddressId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateEmailAddressMetadata": { "InstanceId": AmazonConnectFullApiPathParamValue; "EmailAddressId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiEmailAddressesOperationRequestMap {
  "connect:AssociateEmailAddressAlias": AmazonConnectFullApiOperationInput<"connect:AssociateEmailAddressAlias">;
  "connect:CreateEmailAddress": AmazonConnectFullApiOperationInput<"connect:CreateEmailAddress">;
  "connect:DeleteEmailAddress": AmazonConnectFullApiOperationInput<"connect:DeleteEmailAddress">;
  "connect:DescribeEmailAddress": AmazonConnectFullApiOperationInput<"connect:DescribeEmailAddress">;
  "connect:DisassociateEmailAddressAlias": AmazonConnectFullApiOperationInput<"connect:DisassociateEmailAddressAlias">;
  "connect:UpdateEmailAddressMetadata": AmazonConnectFullApiOperationInput<"connect:UpdateEmailAddressMetadata">;
}

export interface AmazonConnectFullApiEmailAddressesGeneratedClient {
  AssociateEmailAddressAlias(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateEmailAddressAlias">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateEmailAddressAlias"]>;
  CreateEmailAddress(...args: AmazonConnectFullApiOperationArgs<"connect:CreateEmailAddress">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateEmailAddress"]>;
  DeleteEmailAddress(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteEmailAddress">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteEmailAddress"]>;
  DescribeEmailAddress(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeEmailAddress">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeEmailAddress"]>;
  DisassociateEmailAddressAlias(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateEmailAddressAlias">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateEmailAddressAlias"]>;
  UpdateEmailAddressMetadata(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateEmailAddressMetadata">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateEmailAddressMetadata"]>;
}

export const AmazonConnectFullApiEmailAddressesGeneratedFunctionNames = [
  "AssociateEmailAddressAlias",
  "CreateEmailAddress",
  "DeleteEmailAddress",
  "DescribeEmailAddress",
  "DisassociateEmailAddressAlias",
  "UpdateEmailAddressMetadata"
] as const satisfies readonly (keyof AmazonConnectFullApiEmailAddressesGeneratedClient)[];

export function createAmazonConnectFullApiEmailAddressesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiEmailAddressesGeneratedClient {
  return {
    AssociateEmailAddressAlias: (...args) => callOperation("connect:AssociateEmailAddressAlias", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateEmailAddressAlias">)),
    CreateEmailAddress: (...args) => callOperation("connect:CreateEmailAddress", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateEmailAddress">)),
    DeleteEmailAddress: (...args) => callOperation("connect:DeleteEmailAddress", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteEmailAddress">)),
    DescribeEmailAddress: (...args) => callOperation("connect:DescribeEmailAddress", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeEmailAddress">)),
    DisassociateEmailAddressAlias: (...args) => callOperation("connect:DisassociateEmailAddressAlias", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateEmailAddressAlias">)),
    UpdateEmailAddressMetadata: (...args) => callOperation("connect:UpdateEmailAddressMetadata", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateEmailAddressMetadata">)),
  };
}
