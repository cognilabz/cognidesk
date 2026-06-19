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
export const AmazonConnectFullApiSecurityProfilesSummaryOperationKeys = [
  "connect:ListSecurityProfiles"
] as const;
export type AmazonConnectFullApiSecurityProfilesSummaryOperationKey = typeof AmazonConnectFullApiSecurityProfilesSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSecurityProfilesSummaryOperationPathParamMap {
  "connect:ListSecurityProfiles": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiSecurityProfilesSummaryOperationRequestMap {
  "connect:ListSecurityProfiles": AmazonConnectFullApiOperationInput<"connect:ListSecurityProfiles">;
}

export interface AmazonConnectFullApiSecurityProfilesSummaryGeneratedClient {
  ListSecurityProfiles(...args: AmazonConnectFullApiOperationArgs<"connect:ListSecurityProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListSecurityProfiles"]>;
}

export const AmazonConnectFullApiSecurityProfilesSummaryGeneratedFunctionNames = [
  "ListSecurityProfiles"
] as const satisfies readonly (keyof AmazonConnectFullApiSecurityProfilesSummaryGeneratedClient)[];

export function createAmazonConnectFullApiSecurityProfilesSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSecurityProfilesSummaryGeneratedClient {
  return {
    ListSecurityProfiles: (...args) => callOperation("connect:ListSecurityProfiles", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListSecurityProfiles">)),
  };
}
