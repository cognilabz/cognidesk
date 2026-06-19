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
export const AmazonConnectFullApiSearchSecurityProfilesOperationKeys = [
  "connect:SearchSecurityProfiles"
] as const;
export type AmazonConnectFullApiSearchSecurityProfilesOperationKey = typeof AmazonConnectFullApiSearchSecurityProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchSecurityProfilesOperationPathParamMap {
  "connect:SearchSecurityProfiles": {};
}

export interface AmazonConnectFullApiSearchSecurityProfilesOperationRequestMap {
  "connect:SearchSecurityProfiles": AmazonConnectFullApiOperationInput<"connect:SearchSecurityProfiles">;
}

export interface AmazonConnectFullApiSearchSecurityProfilesGeneratedClient {
  SearchSecurityProfiles(...args: AmazonConnectFullApiOperationArgs<"connect:SearchSecurityProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchSecurityProfiles"]>;
}

export const AmazonConnectFullApiSearchSecurityProfilesGeneratedFunctionNames = [
  "SearchSecurityProfiles"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchSecurityProfilesGeneratedClient)[];

export function createAmazonConnectFullApiSearchSecurityProfilesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchSecurityProfilesGeneratedClient {
  return {
    SearchSecurityProfiles: (...args) => callOperation("connect:SearchSecurityProfiles", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchSecurityProfiles">)),
  };
}
