// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiGlobalClientsOperationKeys = [
  "GlobalOAuthClientsTokenSummary",
  "ListGlobalOAuthClients",
  "ShowGlobalClient"
] as const;
export type ZendeskFullApiGlobalClientsOperationKey = typeof ZendeskFullApiGlobalClientsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiGlobalClientsOperationPathParamMap {
  "GlobalOAuthClientsTokenSummary": {};
  "ListGlobalOAuthClients": {};
  "ShowGlobalClient": { "global_client_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiGlobalClientsOperationRequestMap {
  "GlobalOAuthClientsTokenSummary": ZendeskFullApiOperationInput<"GlobalOAuthClientsTokenSummary">;
  "ListGlobalOAuthClients": ZendeskFullApiOperationInput<"ListGlobalOAuthClients">;
  "ShowGlobalClient": ZendeskFullApiOperationInput<"ShowGlobalClient">;
}

export interface ZendeskFullApiGlobalClientsGeneratedClient {
  GlobalOAuthClientsTokenSummary(...args: ZendeskFullApiOperationArgs<"GlobalOAuthClientsTokenSummary">): Promise<ZendeskFullApiOperationResponseMap["GlobalOAuthClientsTokenSummary"]>;
  ListGlobalOAuthClients(...args: ZendeskFullApiOperationArgs<"ListGlobalOAuthClients">): Promise<ZendeskFullApiOperationResponseMap["ListGlobalOAuthClients"]>;
  ShowGlobalClient(...args: ZendeskFullApiOperationArgs<"ShowGlobalClient">): Promise<ZendeskFullApiOperationResponseMap["ShowGlobalClient"]>;
}

export const ZendeskFullApiGlobalClientsGeneratedFunctionNames = [
  "GlobalOAuthClientsTokenSummary",
  "ListGlobalOAuthClients",
  "ShowGlobalClient"
] as const satisfies readonly (keyof ZendeskFullApiGlobalClientsGeneratedClient)[];

export function createZendeskFullApiGlobalClientsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiGlobalClientsGeneratedClient {
  return {
    GlobalOAuthClientsTokenSummary: (...args) => callOperation("GlobalOAuthClientsTokenSummary", ...(args as ZendeskFullApiOperationArgs<"GlobalOAuthClientsTokenSummary">)),
    ListGlobalOAuthClients: (...args) => callOperation("ListGlobalOAuthClients", ...(args as ZendeskFullApiOperationArgs<"ListGlobalOAuthClients">)),
    ShowGlobalClient: (...args) => callOperation("ShowGlobalClient", ...(args as ZendeskFullApiOperationArgs<"ShowGlobalClient">)),
  };
}
