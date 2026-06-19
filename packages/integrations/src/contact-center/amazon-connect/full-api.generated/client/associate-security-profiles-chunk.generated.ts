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
export const AmazonConnectFullApiAssociateSecurityProfilesOperationKeys = [
  "connect:AssociateSecurityProfiles"
] as const;
export type AmazonConnectFullApiAssociateSecurityProfilesOperationKey = typeof AmazonConnectFullApiAssociateSecurityProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiAssociateSecurityProfilesOperationPathParamMap {
  "connect:AssociateSecurityProfiles": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiAssociateSecurityProfilesOperationRequestMap {
  "connect:AssociateSecurityProfiles": AmazonConnectFullApiOperationInput<"connect:AssociateSecurityProfiles">;
}

export interface AmazonConnectFullApiAssociateSecurityProfilesGeneratedClient {
  AssociateSecurityProfiles(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateSecurityProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateSecurityProfiles"]>;
}

export const AmazonConnectFullApiAssociateSecurityProfilesGeneratedFunctionNames = [
  "AssociateSecurityProfiles"
] as const satisfies readonly (keyof AmazonConnectFullApiAssociateSecurityProfilesGeneratedClient)[];

export function createAmazonConnectFullApiAssociateSecurityProfilesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiAssociateSecurityProfilesGeneratedClient {
  return {
    AssociateSecurityProfiles: (...args) => callOperation("connect:AssociateSecurityProfiles", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateSecurityProfiles">)),
  };
}
