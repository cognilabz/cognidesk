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
export const AmazonConnectFullApiEntitySecurityProfilesSummaryOperationKeys = [
  "connect:ListEntitySecurityProfiles"
] as const;
export type AmazonConnectFullApiEntitySecurityProfilesSummaryOperationKey = typeof AmazonConnectFullApiEntitySecurityProfilesSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiEntitySecurityProfilesSummaryOperationPathParamMap {
  "connect:ListEntitySecurityProfiles": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiEntitySecurityProfilesSummaryOperationRequestMap {
  "connect:ListEntitySecurityProfiles": AmazonConnectFullApiOperationInput<"connect:ListEntitySecurityProfiles">;
}

export interface AmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedClient {
  ListEntitySecurityProfiles(...args: AmazonConnectFullApiOperationArgs<"connect:ListEntitySecurityProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListEntitySecurityProfiles"]>;
}

export const AmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedFunctionNames = [
  "ListEntitySecurityProfiles"
] as const satisfies readonly (keyof AmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedClient)[];

export function createAmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiEntitySecurityProfilesSummaryGeneratedClient {
  return {
    ListEntitySecurityProfiles: (...args) => callOperation("connect:ListEntitySecurityProfiles", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListEntitySecurityProfiles">)),
  };
}
