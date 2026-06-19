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
export const AmazonConnectFullApiRoutingProfilesSummaryOperationKeys = [
  "connect:ListRoutingProfiles"
] as const;
export type AmazonConnectFullApiRoutingProfilesSummaryOperationKey = typeof AmazonConnectFullApiRoutingProfilesSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiRoutingProfilesSummaryOperationPathParamMap {
  "connect:ListRoutingProfiles": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiRoutingProfilesSummaryOperationRequestMap {
  "connect:ListRoutingProfiles": AmazonConnectFullApiOperationInput<"connect:ListRoutingProfiles">;
}

export interface AmazonConnectFullApiRoutingProfilesSummaryGeneratedClient {
  ListRoutingProfiles(...args: AmazonConnectFullApiOperationArgs<"connect:ListRoutingProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListRoutingProfiles"]>;
}

export const AmazonConnectFullApiRoutingProfilesSummaryGeneratedFunctionNames = [
  "ListRoutingProfiles"
] as const satisfies readonly (keyof AmazonConnectFullApiRoutingProfilesSummaryGeneratedClient)[];

export function createAmazonConnectFullApiRoutingProfilesSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiRoutingProfilesSummaryGeneratedClient {
  return {
    ListRoutingProfiles: (...args) => callOperation("connect:ListRoutingProfiles", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListRoutingProfiles">)),
  };
}
