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
export const AmazonConnectFullApiIntegrationsOperationKeys = [
  "customer-profiles:ListAccountIntegrations"
] as const;
export type AmazonConnectFullApiIntegrationsOperationKey = typeof AmazonConnectFullApiIntegrationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiIntegrationsOperationPathParamMap {
  "customer-profiles:ListAccountIntegrations": {};
}

export interface AmazonConnectFullApiIntegrationsOperationRequestMap {
  "customer-profiles:ListAccountIntegrations": AmazonConnectFullApiOperationInput<"customer-profiles:ListAccountIntegrations">;
}

export interface AmazonConnectFullApiIntegrationsGeneratedClient {
  ListAccountIntegrations(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListAccountIntegrations">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListAccountIntegrations"]>;
}

export const AmazonConnectFullApiIntegrationsGeneratedFunctionNames = [
  "ListAccountIntegrations"
] as const satisfies readonly (keyof AmazonConnectFullApiIntegrationsGeneratedClient)[];

export function createAmazonConnectFullApiIntegrationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiIntegrationsGeneratedClient {
  return {
    ListAccountIntegrations: (...args) => callOperation("customer-profiles:ListAccountIntegrations", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListAccountIntegrations">)),
  };
}
