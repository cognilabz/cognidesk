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
export const AmazonConnectFullApiHoursOfOperationsOperationKeys = [
  "connect:AssociateHoursOfOperations",
  "connect:CreateHoursOfOperation",
  "connect:CreateHoursOfOperationOverride",
  "connect:DeleteHoursOfOperation",
  "connect:DeleteHoursOfOperationOverride",
  "connect:DescribeHoursOfOperation",
  "connect:DescribeHoursOfOperationOverride",
  "connect:DisassociateHoursOfOperations",
  "connect:ListChildHoursOfOperations",
  "connect:ListHoursOfOperationOverrides",
  "connect:UpdateHoursOfOperation",
  "connect:UpdateHoursOfOperationOverride"
] as const;
export type AmazonConnectFullApiHoursOfOperationsOperationKey = typeof AmazonConnectFullApiHoursOfOperationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiHoursOfOperationsOperationPathParamMap {
  "connect:AssociateHoursOfOperations": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue };
  "connect:CreateHoursOfOperation": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateHoursOfOperationOverride": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteHoursOfOperation": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteHoursOfOperationOverride": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue; "HoursOfOperationOverrideId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeHoursOfOperation": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeHoursOfOperationOverride": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue; "HoursOfOperationOverrideId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateHoursOfOperations": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue };
  "connect:ListChildHoursOfOperations": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue };
  "connect:ListHoursOfOperationOverrides": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateHoursOfOperation": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateHoursOfOperationOverride": { "InstanceId": AmazonConnectFullApiPathParamValue; "HoursOfOperationId": AmazonConnectFullApiPathParamValue; "HoursOfOperationOverrideId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiHoursOfOperationsOperationRequestMap {
  "connect:AssociateHoursOfOperations": AmazonConnectFullApiOperationInput<"connect:AssociateHoursOfOperations">;
  "connect:CreateHoursOfOperation": AmazonConnectFullApiOperationInput<"connect:CreateHoursOfOperation">;
  "connect:CreateHoursOfOperationOverride": AmazonConnectFullApiOperationInput<"connect:CreateHoursOfOperationOverride">;
  "connect:DeleteHoursOfOperation": AmazonConnectFullApiOperationInput<"connect:DeleteHoursOfOperation">;
  "connect:DeleteHoursOfOperationOverride": AmazonConnectFullApiOperationInput<"connect:DeleteHoursOfOperationOverride">;
  "connect:DescribeHoursOfOperation": AmazonConnectFullApiOperationInput<"connect:DescribeHoursOfOperation">;
  "connect:DescribeHoursOfOperationOverride": AmazonConnectFullApiOperationInput<"connect:DescribeHoursOfOperationOverride">;
  "connect:DisassociateHoursOfOperations": AmazonConnectFullApiOperationInput<"connect:DisassociateHoursOfOperations">;
  "connect:ListChildHoursOfOperations": AmazonConnectFullApiOperationInput<"connect:ListChildHoursOfOperations">;
  "connect:ListHoursOfOperationOverrides": AmazonConnectFullApiOperationInput<"connect:ListHoursOfOperationOverrides">;
  "connect:UpdateHoursOfOperation": AmazonConnectFullApiOperationInput<"connect:UpdateHoursOfOperation">;
  "connect:UpdateHoursOfOperationOverride": AmazonConnectFullApiOperationInput<"connect:UpdateHoursOfOperationOverride">;
}

export interface AmazonConnectFullApiHoursOfOperationsGeneratedClient {
  AssociateHoursOfOperations(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateHoursOfOperations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateHoursOfOperations"]>;
  CreateHoursOfOperation(...args: AmazonConnectFullApiOperationArgs<"connect:CreateHoursOfOperation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateHoursOfOperation"]>;
  CreateHoursOfOperationOverride(...args: AmazonConnectFullApiOperationArgs<"connect:CreateHoursOfOperationOverride">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateHoursOfOperationOverride"]>;
  DeleteHoursOfOperation(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteHoursOfOperation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteHoursOfOperation"]>;
  DeleteHoursOfOperationOverride(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteHoursOfOperationOverride">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteHoursOfOperationOverride"]>;
  DescribeHoursOfOperation(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeHoursOfOperation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeHoursOfOperation"]>;
  DescribeHoursOfOperationOverride(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeHoursOfOperationOverride">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeHoursOfOperationOverride"]>;
  DisassociateHoursOfOperations(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateHoursOfOperations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateHoursOfOperations"]>;
  ListChildHoursOfOperations(...args: AmazonConnectFullApiOperationArgs<"connect:ListChildHoursOfOperations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListChildHoursOfOperations"]>;
  ListHoursOfOperationOverrides(...args: AmazonConnectFullApiOperationArgs<"connect:ListHoursOfOperationOverrides">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListHoursOfOperationOverrides"]>;
  UpdateHoursOfOperation(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateHoursOfOperation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateHoursOfOperation"]>;
  UpdateHoursOfOperationOverride(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateHoursOfOperationOverride">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateHoursOfOperationOverride"]>;
}

export const AmazonConnectFullApiHoursOfOperationsGeneratedFunctionNames = [
  "AssociateHoursOfOperations",
  "CreateHoursOfOperation",
  "CreateHoursOfOperationOverride",
  "DeleteHoursOfOperation",
  "DeleteHoursOfOperationOverride",
  "DescribeHoursOfOperation",
  "DescribeHoursOfOperationOverride",
  "DisassociateHoursOfOperations",
  "ListChildHoursOfOperations",
  "ListHoursOfOperationOverrides",
  "UpdateHoursOfOperation",
  "UpdateHoursOfOperationOverride"
] as const satisfies readonly (keyof AmazonConnectFullApiHoursOfOperationsGeneratedClient)[];

export function createAmazonConnectFullApiHoursOfOperationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiHoursOfOperationsGeneratedClient {
  return {
    AssociateHoursOfOperations: (...args) => callOperation("connect:AssociateHoursOfOperations", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateHoursOfOperations">)),
    CreateHoursOfOperation: (...args) => callOperation("connect:CreateHoursOfOperation", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateHoursOfOperation">)),
    CreateHoursOfOperationOverride: (...args) => callOperation("connect:CreateHoursOfOperationOverride", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateHoursOfOperationOverride">)),
    DeleteHoursOfOperation: (...args) => callOperation("connect:DeleteHoursOfOperation", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteHoursOfOperation">)),
    DeleteHoursOfOperationOverride: (...args) => callOperation("connect:DeleteHoursOfOperationOverride", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteHoursOfOperationOverride">)),
    DescribeHoursOfOperation: (...args) => callOperation("connect:DescribeHoursOfOperation", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeHoursOfOperation">)),
    DescribeHoursOfOperationOverride: (...args) => callOperation("connect:DescribeHoursOfOperationOverride", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeHoursOfOperationOverride">)),
    DisassociateHoursOfOperations: (...args) => callOperation("connect:DisassociateHoursOfOperations", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateHoursOfOperations">)),
    ListChildHoursOfOperations: (...args) => callOperation("connect:ListChildHoursOfOperations", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListChildHoursOfOperations">)),
    ListHoursOfOperationOverrides: (...args) => callOperation("connect:ListHoursOfOperationOverrides", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListHoursOfOperationOverrides">)),
    UpdateHoursOfOperation: (...args) => callOperation("connect:UpdateHoursOfOperation", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateHoursOfOperation">)),
    UpdateHoursOfOperationOverride: (...args) => callOperation("connect:UpdateHoursOfOperationOverride", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateHoursOfOperationOverride">)),
  };
}
