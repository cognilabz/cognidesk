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
export const AmazonConnectFullApiSecurityProfilesOperationKeys = [
  "connect:CreateSecurityProfile",
  "connect:DeleteSecurityProfile",
  "connect:DescribeSecurityProfile",
  "connect:UpdateSecurityProfile"
] as const;
export type AmazonConnectFullApiSecurityProfilesOperationKey = typeof AmazonConnectFullApiSecurityProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSecurityProfilesOperationPathParamMap {
  "connect:CreateSecurityProfile": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteSecurityProfile": { "InstanceId": AmazonConnectFullApiPathParamValue; "SecurityProfileId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeSecurityProfile": { "InstanceId": AmazonConnectFullApiPathParamValue; "SecurityProfileId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateSecurityProfile": { "InstanceId": AmazonConnectFullApiPathParamValue; "SecurityProfileId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiSecurityProfilesOperationRequestMap {
  "connect:CreateSecurityProfile": AmazonConnectFullApiOperationInput<"connect:CreateSecurityProfile">;
  "connect:DeleteSecurityProfile": AmazonConnectFullApiOperationInput<"connect:DeleteSecurityProfile">;
  "connect:DescribeSecurityProfile": AmazonConnectFullApiOperationInput<"connect:DescribeSecurityProfile">;
  "connect:UpdateSecurityProfile": AmazonConnectFullApiOperationInput<"connect:UpdateSecurityProfile">;
}

export interface AmazonConnectFullApiSecurityProfilesGeneratedClient {
  CreateSecurityProfile(...args: AmazonConnectFullApiOperationArgs<"connect:CreateSecurityProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateSecurityProfile"]>;
  DeleteSecurityProfile(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteSecurityProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteSecurityProfile"]>;
  DescribeSecurityProfile(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeSecurityProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeSecurityProfile"]>;
  UpdateSecurityProfile(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateSecurityProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateSecurityProfile"]>;
}

export const AmazonConnectFullApiSecurityProfilesGeneratedFunctionNames = [
  "CreateSecurityProfile",
  "DeleteSecurityProfile",
  "DescribeSecurityProfile",
  "UpdateSecurityProfile"
] as const satisfies readonly (keyof AmazonConnectFullApiSecurityProfilesGeneratedClient)[];

export function createAmazonConnectFullApiSecurityProfilesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSecurityProfilesGeneratedClient {
  return {
    CreateSecurityProfile: (...args) => callOperation("connect:CreateSecurityProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateSecurityProfile">)),
    DeleteSecurityProfile: (...args) => callOperation("connect:DeleteSecurityProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteSecurityProfile">)),
    DescribeSecurityProfile: (...args) => callOperation("connect:DescribeSecurityProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeSecurityProfile">)),
    UpdateSecurityProfile: (...args) => callOperation("connect:UpdateSecurityProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateSecurityProfile">)),
  };
}
