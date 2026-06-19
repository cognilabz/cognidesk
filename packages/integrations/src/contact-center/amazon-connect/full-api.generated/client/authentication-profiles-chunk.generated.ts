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
export const AmazonConnectFullApiAuthenticationProfilesOperationKeys = [
  "connect:DescribeAuthenticationProfile",
  "connect:UpdateAuthenticationProfile"
] as const;
export type AmazonConnectFullApiAuthenticationProfilesOperationKey = typeof AmazonConnectFullApiAuthenticationProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiAuthenticationProfilesOperationPathParamMap {
  "connect:DescribeAuthenticationProfile": { "InstanceId": AmazonConnectFullApiPathParamValue; "AuthenticationProfileId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateAuthenticationProfile": { "InstanceId": AmazonConnectFullApiPathParamValue; "AuthenticationProfileId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiAuthenticationProfilesOperationRequestMap {
  "connect:DescribeAuthenticationProfile": AmazonConnectFullApiOperationInput<"connect:DescribeAuthenticationProfile">;
  "connect:UpdateAuthenticationProfile": AmazonConnectFullApiOperationInput<"connect:UpdateAuthenticationProfile">;
}

export interface AmazonConnectFullApiAuthenticationProfilesGeneratedClient {
  DescribeAuthenticationProfile(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeAuthenticationProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeAuthenticationProfile"]>;
  UpdateAuthenticationProfile(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateAuthenticationProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateAuthenticationProfile"]>;
}

export const AmazonConnectFullApiAuthenticationProfilesGeneratedFunctionNames = [
  "DescribeAuthenticationProfile",
  "UpdateAuthenticationProfile"
] as const satisfies readonly (keyof AmazonConnectFullApiAuthenticationProfilesGeneratedClient)[];

export function createAmazonConnectFullApiAuthenticationProfilesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiAuthenticationProfilesGeneratedClient {
  return {
    DescribeAuthenticationProfile: (...args) => callOperation("connect:DescribeAuthenticationProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeAuthenticationProfile">)),
    UpdateAuthenticationProfile: (...args) => callOperation("connect:UpdateAuthenticationProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateAuthenticationProfile">)),
  };
}
