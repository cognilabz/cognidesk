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
export const AmazonConnectFullApiAuthenticationProfilesSummaryOperationKeys = [
  "connect:ListAuthenticationProfiles"
] as const;
export type AmazonConnectFullApiAuthenticationProfilesSummaryOperationKey = typeof AmazonConnectFullApiAuthenticationProfilesSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiAuthenticationProfilesSummaryOperationPathParamMap {
  "connect:ListAuthenticationProfiles": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiAuthenticationProfilesSummaryOperationRequestMap {
  "connect:ListAuthenticationProfiles": AmazonConnectFullApiOperationInput<"connect:ListAuthenticationProfiles">;
}

export interface AmazonConnectFullApiAuthenticationProfilesSummaryGeneratedClient {
  ListAuthenticationProfiles(...args: AmazonConnectFullApiOperationArgs<"connect:ListAuthenticationProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListAuthenticationProfiles"]>;
}

export const AmazonConnectFullApiAuthenticationProfilesSummaryGeneratedFunctionNames = [
  "ListAuthenticationProfiles"
] as const satisfies readonly (keyof AmazonConnectFullApiAuthenticationProfilesSummaryGeneratedClient)[];

export function createAmazonConnectFullApiAuthenticationProfilesSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiAuthenticationProfilesSummaryGeneratedClient {
  return {
    ListAuthenticationProfiles: (...args) => callOperation("connect:ListAuthenticationProfiles", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListAuthenticationProfiles">)),
  };
}
