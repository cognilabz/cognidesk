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
export const AmazonConnectFullApiSecurityProfilesPermissionsOperationKeys = [
  "connect:ListSecurityProfilePermissions"
] as const;
export type AmazonConnectFullApiSecurityProfilesPermissionsOperationKey = typeof AmazonConnectFullApiSecurityProfilesPermissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSecurityProfilesPermissionsOperationPathParamMap {
  "connect:ListSecurityProfilePermissions": { "InstanceId": AmazonConnectFullApiPathParamValue; "SecurityProfileId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiSecurityProfilesPermissionsOperationRequestMap {
  "connect:ListSecurityProfilePermissions": AmazonConnectFullApiOperationInput<"connect:ListSecurityProfilePermissions">;
}

export interface AmazonConnectFullApiSecurityProfilesPermissionsGeneratedClient {
  ListSecurityProfilePermissions(...args: AmazonConnectFullApiOperationArgs<"connect:ListSecurityProfilePermissions">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListSecurityProfilePermissions"]>;
}

export const AmazonConnectFullApiSecurityProfilesPermissionsGeneratedFunctionNames = [
  "ListSecurityProfilePermissions"
] as const satisfies readonly (keyof AmazonConnectFullApiSecurityProfilesPermissionsGeneratedClient)[];

export function createAmazonConnectFullApiSecurityProfilesPermissionsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSecurityProfilesPermissionsGeneratedClient {
  return {
    ListSecurityProfilePermissions: (...args) => callOperation("connect:ListSecurityProfilePermissions", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListSecurityProfilePermissions">)),
  };
}
