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
export const AmazonConnectFullApiSearchRoutingProfilesOperationKeys = [
  "connect:SearchRoutingProfiles"
] as const;
export type AmazonConnectFullApiSearchRoutingProfilesOperationKey = typeof AmazonConnectFullApiSearchRoutingProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchRoutingProfilesOperationPathParamMap {
  "connect:SearchRoutingProfiles": {};
}

export interface AmazonConnectFullApiSearchRoutingProfilesOperationRequestMap {
  "connect:SearchRoutingProfiles": AmazonConnectFullApiOperationInput<"connect:SearchRoutingProfiles">;
}

export interface AmazonConnectFullApiSearchRoutingProfilesGeneratedClient {
  SearchRoutingProfiles(...args: AmazonConnectFullApiOperationArgs<"connect:SearchRoutingProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchRoutingProfiles"]>;
}

export const AmazonConnectFullApiSearchRoutingProfilesGeneratedFunctionNames = [
  "SearchRoutingProfiles"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchRoutingProfilesGeneratedClient)[];

export function createAmazonConnectFullApiSearchRoutingProfilesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchRoutingProfilesGeneratedClient {
  return {
    SearchRoutingProfiles: (...args) => callOperation("connect:SearchRoutingProfiles", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchRoutingProfiles">)),
  };
}
