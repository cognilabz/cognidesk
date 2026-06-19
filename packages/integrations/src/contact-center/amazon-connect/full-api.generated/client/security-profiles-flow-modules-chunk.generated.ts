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
export const AmazonConnectFullApiSecurityProfilesFlowModulesOperationKeys = [
  "connect:ListSecurityProfileFlowModules"
] as const;
export type AmazonConnectFullApiSecurityProfilesFlowModulesOperationKey = typeof AmazonConnectFullApiSecurityProfilesFlowModulesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSecurityProfilesFlowModulesOperationPathParamMap {
  "connect:ListSecurityProfileFlowModules": { "InstanceId": AmazonConnectFullApiPathParamValue; "SecurityProfileId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiSecurityProfilesFlowModulesOperationRequestMap {
  "connect:ListSecurityProfileFlowModules": AmazonConnectFullApiOperationInput<"connect:ListSecurityProfileFlowModules">;
}

export interface AmazonConnectFullApiSecurityProfilesFlowModulesGeneratedClient {
  ListSecurityProfileFlowModules(...args: AmazonConnectFullApiOperationArgs<"connect:ListSecurityProfileFlowModules">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListSecurityProfileFlowModules"]>;
}

export const AmazonConnectFullApiSecurityProfilesFlowModulesGeneratedFunctionNames = [
  "ListSecurityProfileFlowModules"
] as const satisfies readonly (keyof AmazonConnectFullApiSecurityProfilesFlowModulesGeneratedClient)[];

export function createAmazonConnectFullApiSecurityProfilesFlowModulesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSecurityProfilesFlowModulesGeneratedClient {
  return {
    ListSecurityProfileFlowModules: (...args) => callOperation("connect:ListSecurityProfileFlowModules", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListSecurityProfileFlowModules">)),
  };
}
