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
export const AmazonConnectFullApiPhoneNumberOperationKeys = [
  "connect:AssociatePhoneNumberContactFlow",
  "connect:ClaimPhoneNumber",
  "connect:DescribePhoneNumber",
  "connect:DisassociatePhoneNumberContactFlow",
  "connect:ImportPhoneNumber",
  "connect:ListPhoneNumbersV2",
  "connect:ReleasePhoneNumber",
  "connect:SearchAvailablePhoneNumbers",
  "connect:UpdatePhoneNumber",
  "connect:UpdatePhoneNumberMetadata"
] as const;
export type AmazonConnectFullApiPhoneNumberOperationKey = typeof AmazonConnectFullApiPhoneNumberOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiPhoneNumberOperationPathParamMap {
  "connect:AssociatePhoneNumberContactFlow": { "PhoneNumberId": AmazonConnectFullApiPathParamValue };
  "connect:ClaimPhoneNumber": {};
  "connect:DescribePhoneNumber": { "PhoneNumberId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociatePhoneNumberContactFlow": { "PhoneNumberId": AmazonConnectFullApiPathParamValue };
  "connect:ImportPhoneNumber": {};
  "connect:ListPhoneNumbersV2": {};
  "connect:ReleasePhoneNumber": { "PhoneNumberId": AmazonConnectFullApiPathParamValue };
  "connect:SearchAvailablePhoneNumbers": {};
  "connect:UpdatePhoneNumber": { "PhoneNumberId": AmazonConnectFullApiPathParamValue };
  "connect:UpdatePhoneNumberMetadata": { "PhoneNumberId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiPhoneNumberOperationRequestMap {
  "connect:AssociatePhoneNumberContactFlow": AmazonConnectFullApiOperationInput<"connect:AssociatePhoneNumberContactFlow">;
  "connect:ClaimPhoneNumber": AmazonConnectFullApiOperationInput<"connect:ClaimPhoneNumber">;
  "connect:DescribePhoneNumber": AmazonConnectFullApiOperationInput<"connect:DescribePhoneNumber">;
  "connect:DisassociatePhoneNumberContactFlow": AmazonConnectFullApiOperationInput<"connect:DisassociatePhoneNumberContactFlow">;
  "connect:ImportPhoneNumber": AmazonConnectFullApiOperationInput<"connect:ImportPhoneNumber">;
  "connect:ListPhoneNumbersV2": AmazonConnectFullApiOperationInput<"connect:ListPhoneNumbersV2">;
  "connect:ReleasePhoneNumber": AmazonConnectFullApiOperationInput<"connect:ReleasePhoneNumber">;
  "connect:SearchAvailablePhoneNumbers": AmazonConnectFullApiOperationInput<"connect:SearchAvailablePhoneNumbers">;
  "connect:UpdatePhoneNumber": AmazonConnectFullApiOperationInput<"connect:UpdatePhoneNumber">;
  "connect:UpdatePhoneNumberMetadata": AmazonConnectFullApiOperationInput<"connect:UpdatePhoneNumberMetadata">;
}

export interface AmazonConnectFullApiPhoneNumberGeneratedClient {
  AssociatePhoneNumberContactFlow(...args: AmazonConnectFullApiOperationArgs<"connect:AssociatePhoneNumberContactFlow">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociatePhoneNumberContactFlow"]>;
  ClaimPhoneNumber(...args: AmazonConnectFullApiOperationArgs<"connect:ClaimPhoneNumber">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ClaimPhoneNumber"]>;
  DescribePhoneNumber(...args: AmazonConnectFullApiOperationArgs<"connect:DescribePhoneNumber">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribePhoneNumber"]>;
  DisassociatePhoneNumberContactFlow(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociatePhoneNumberContactFlow">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociatePhoneNumberContactFlow"]>;
  ImportPhoneNumber(...args: AmazonConnectFullApiOperationArgs<"connect:ImportPhoneNumber">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ImportPhoneNumber"]>;
  ListPhoneNumbersV2(...args: AmazonConnectFullApiOperationArgs<"connect:ListPhoneNumbersV2">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListPhoneNumbersV2"]>;
  ReleasePhoneNumber(...args: AmazonConnectFullApiOperationArgs<"connect:ReleasePhoneNumber">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ReleasePhoneNumber"]>;
  SearchAvailablePhoneNumbers(...args: AmazonConnectFullApiOperationArgs<"connect:SearchAvailablePhoneNumbers">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchAvailablePhoneNumbers"]>;
  UpdatePhoneNumber(...args: AmazonConnectFullApiOperationArgs<"connect:UpdatePhoneNumber">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdatePhoneNumber"]>;
  UpdatePhoneNumberMetadata(...args: AmazonConnectFullApiOperationArgs<"connect:UpdatePhoneNumberMetadata">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdatePhoneNumberMetadata"]>;
}

export const AmazonConnectFullApiPhoneNumberGeneratedFunctionNames = [
  "AssociatePhoneNumberContactFlow",
  "ClaimPhoneNumber",
  "DescribePhoneNumber",
  "DisassociatePhoneNumberContactFlow",
  "ImportPhoneNumber",
  "ListPhoneNumbersV2",
  "ReleasePhoneNumber",
  "SearchAvailablePhoneNumbers",
  "UpdatePhoneNumber",
  "UpdatePhoneNumberMetadata"
] as const satisfies readonly (keyof AmazonConnectFullApiPhoneNumberGeneratedClient)[];

export function createAmazonConnectFullApiPhoneNumberGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiPhoneNumberGeneratedClient {
  return {
    AssociatePhoneNumberContactFlow: (...args) => callOperation("connect:AssociatePhoneNumberContactFlow", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociatePhoneNumberContactFlow">)),
    ClaimPhoneNumber: (...args) => callOperation("connect:ClaimPhoneNumber", ...(args as AmazonConnectFullApiOperationArgs<"connect:ClaimPhoneNumber">)),
    DescribePhoneNumber: (...args) => callOperation("connect:DescribePhoneNumber", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribePhoneNumber">)),
    DisassociatePhoneNumberContactFlow: (...args) => callOperation("connect:DisassociatePhoneNumberContactFlow", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociatePhoneNumberContactFlow">)),
    ImportPhoneNumber: (...args) => callOperation("connect:ImportPhoneNumber", ...(args as AmazonConnectFullApiOperationArgs<"connect:ImportPhoneNumber">)),
    ListPhoneNumbersV2: (...args) => callOperation("connect:ListPhoneNumbersV2", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListPhoneNumbersV2">)),
    ReleasePhoneNumber: (...args) => callOperation("connect:ReleasePhoneNumber", ...(args as AmazonConnectFullApiOperationArgs<"connect:ReleasePhoneNumber">)),
    SearchAvailablePhoneNumbers: (...args) => callOperation("connect:SearchAvailablePhoneNumbers", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchAvailablePhoneNumbers">)),
    UpdatePhoneNumber: (...args) => callOperation("connect:UpdatePhoneNumber", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdatePhoneNumber">)),
    UpdatePhoneNumberMetadata: (...args) => callOperation("connect:UpdatePhoneNumberMetadata", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdatePhoneNumberMetadata">)),
  };
}
