// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiIntegrationsOperationKeys = [
  "list-integrations",
  "create-integration",
  "delete-integration",
  "get-integration",
  "update-integration"
] as const;
export type GorgiasFullApiIntegrationsOperationKey = typeof GorgiasFullApiIntegrationsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiIntegrationsOperationPathParamMap {
  "list-integrations": {};
  "create-integration": {};
  "delete-integration": { "id": GorgiasFullApiPathParamValue };
  "get-integration": { "id": GorgiasFullApiPathParamValue };
  "update-integration": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiIntegrationsOperationRequestMap {
  "list-integrations": GorgiasFullApiOperationInput<"list-integrations">;
  "create-integration": GorgiasFullApiOperationInput<"create-integration">;
  "delete-integration": GorgiasFullApiOperationInput<"delete-integration">;
  "get-integration": GorgiasFullApiOperationInput<"get-integration">;
  "update-integration": GorgiasFullApiOperationInput<"update-integration">;
}

export interface GorgiasFullApiIntegrationsGeneratedClient {
  gorgiasListIntegrations(...args: GorgiasFullApiOperationArgs<"list-integrations">): Promise<GorgiasFullApiOperationResponseMap["list-integrations"]>;
  gorgiasCreateIntegration(...args: GorgiasFullApiOperationArgs<"create-integration">): Promise<GorgiasFullApiOperationResponseMap["create-integration"]>;
  gorgiasDeleteIntegration(...args: GorgiasFullApiOperationArgs<"delete-integration">): Promise<GorgiasFullApiOperationResponseMap["delete-integration"]>;
  gorgiasGetIntegration(...args: GorgiasFullApiOperationArgs<"get-integration">): Promise<GorgiasFullApiOperationResponseMap["get-integration"]>;
  gorgiasUpdateIntegration(...args: GorgiasFullApiOperationArgs<"update-integration">): Promise<GorgiasFullApiOperationResponseMap["update-integration"]>;
}

export const GorgiasFullApiIntegrationsGeneratedFunctionNames = [
  "gorgiasListIntegrations",
  "gorgiasCreateIntegration",
  "gorgiasDeleteIntegration",
  "gorgiasGetIntegration",
  "gorgiasUpdateIntegration"
] as const satisfies readonly (keyof GorgiasFullApiIntegrationsGeneratedClient)[];

export function createGorgiasFullApiIntegrationsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiIntegrationsGeneratedClient {
  return {
    gorgiasListIntegrations: (...args) => callOperation("list-integrations", ...(args as GorgiasFullApiOperationArgs<"list-integrations">)),
    gorgiasCreateIntegration: (...args) => callOperation("create-integration", ...(args as GorgiasFullApiOperationArgs<"create-integration">)),
    gorgiasDeleteIntegration: (...args) => callOperation("delete-integration", ...(args as GorgiasFullApiOperationArgs<"delete-integration">)),
    gorgiasGetIntegration: (...args) => callOperation("get-integration", ...(args as GorgiasFullApiOperationArgs<"get-integration">)),
    gorgiasUpdateIntegration: (...args) => callOperation("update-integration", ...(args as GorgiasFullApiOperationArgs<"update-integration">)),
  };
}
