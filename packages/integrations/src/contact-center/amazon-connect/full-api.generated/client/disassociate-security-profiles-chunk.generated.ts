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
export const AmazonConnectFullApiDisassociateSecurityProfilesOperationKeys = [
  "connect:DisassociateSecurityProfiles"
] as const;
export type AmazonConnectFullApiDisassociateSecurityProfilesOperationKey = typeof AmazonConnectFullApiDisassociateSecurityProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiDisassociateSecurityProfilesOperationPathParamMap {
  "connect:DisassociateSecurityProfiles": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiDisassociateSecurityProfilesOperationRequestMap {
  "connect:DisassociateSecurityProfiles": AmazonConnectFullApiOperationInput<"connect:DisassociateSecurityProfiles">;
}

export interface AmazonConnectFullApiDisassociateSecurityProfilesGeneratedClient {
  DisassociateSecurityProfiles(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateSecurityProfiles">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateSecurityProfiles"]>;
}

export const AmazonConnectFullApiDisassociateSecurityProfilesGeneratedFunctionNames = [
  "DisassociateSecurityProfiles"
] as const satisfies readonly (keyof AmazonConnectFullApiDisassociateSecurityProfilesGeneratedClient)[];

export function createAmazonConnectFullApiDisassociateSecurityProfilesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiDisassociateSecurityProfilesGeneratedClient {
  return {
    DisassociateSecurityProfiles: (...args) => callOperation("connect:DisassociateSecurityProfiles", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateSecurityProfiles">)),
  };
}
