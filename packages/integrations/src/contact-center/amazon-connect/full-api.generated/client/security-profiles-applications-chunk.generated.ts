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
export const AmazonConnectFullApiSecurityProfilesApplicationsOperationKeys = [
  "connect:ListSecurityProfileApplications"
] as const;
export type AmazonConnectFullApiSecurityProfilesApplicationsOperationKey = typeof AmazonConnectFullApiSecurityProfilesApplicationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSecurityProfilesApplicationsOperationPathParamMap {
  "connect:ListSecurityProfileApplications": { "InstanceId": AmazonConnectFullApiPathParamValue; "SecurityProfileId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiSecurityProfilesApplicationsOperationRequestMap {
  "connect:ListSecurityProfileApplications": AmazonConnectFullApiOperationInput<"connect:ListSecurityProfileApplications">;
}

export interface AmazonConnectFullApiSecurityProfilesApplicationsGeneratedClient {
  ListSecurityProfileApplications(...args: AmazonConnectFullApiOperationArgs<"connect:ListSecurityProfileApplications">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListSecurityProfileApplications"]>;
}

export const AmazonConnectFullApiSecurityProfilesApplicationsGeneratedFunctionNames = [
  "ListSecurityProfileApplications"
] as const satisfies readonly (keyof AmazonConnectFullApiSecurityProfilesApplicationsGeneratedClient)[];

export function createAmazonConnectFullApiSecurityProfilesApplicationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSecurityProfilesApplicationsGeneratedClient {
  return {
    ListSecurityProfileApplications: (...args) => callOperation("connect:ListSecurityProfileApplications", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListSecurityProfileApplications">)),
  };
}
