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
export const ZendeskFullApiOAuthClientsOperationKeys = [
  "ClientGenerateSecret",
  "CreateOAuthClient",
  "DeleteClient",
  "ListCurrentUserOAuthClients",
  "ListOAuthClients",
  "ShowClient",
  "UpdateClient"
] as const;
export type ZendeskFullApiOAuthClientsOperationKey = typeof ZendeskFullApiOAuthClientsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiOAuthClientsOperationPathParamMap {
  "ClientGenerateSecret": { "oauth_client_id": ZendeskFullApiPathParamValue };
  "CreateOAuthClient": {};
  "DeleteClient": { "oauth_client_id": ZendeskFullApiPathParamValue };
  "ListCurrentUserOAuthClients": {};
  "ListOAuthClients": {};
  "ShowClient": { "oauth_client_id": ZendeskFullApiPathParamValue };
  "UpdateClient": { "oauth_client_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiOAuthClientsOperationRequestMap {
  "ClientGenerateSecret": ZendeskFullApiOperationInput<"ClientGenerateSecret">;
  "CreateOAuthClient": ZendeskFullApiOperationInput<"CreateOAuthClient">;
  "DeleteClient": ZendeskFullApiOperationInput<"DeleteClient">;
  "ListCurrentUserOAuthClients": ZendeskFullApiOperationInput<"ListCurrentUserOAuthClients">;
  "ListOAuthClients": ZendeskFullApiOperationInput<"ListOAuthClients">;
  "ShowClient": ZendeskFullApiOperationInput<"ShowClient">;
  "UpdateClient": ZendeskFullApiOperationInput<"UpdateClient">;
}

export interface ZendeskFullApiOAuthClientsGeneratedClient {
  ClientGenerateSecret(...args: ZendeskFullApiOperationArgs<"ClientGenerateSecret">): Promise<ZendeskFullApiOperationResponseMap["ClientGenerateSecret"]>;
  CreateOAuthClient(...args: ZendeskFullApiOperationArgs<"CreateOAuthClient">): Promise<ZendeskFullApiOperationResponseMap["CreateOAuthClient"]>;
  DeleteClient(...args: ZendeskFullApiOperationArgs<"DeleteClient">): Promise<ZendeskFullApiOperationResponseMap["DeleteClient"]>;
  ListCurrentUserOAuthClients(...args: ZendeskFullApiOperationArgs<"ListCurrentUserOAuthClients">): Promise<ZendeskFullApiOperationResponseMap["ListCurrentUserOAuthClients"]>;
  ListOAuthClients(...args: ZendeskFullApiOperationArgs<"ListOAuthClients">): Promise<ZendeskFullApiOperationResponseMap["ListOAuthClients"]>;
  ShowClient(...args: ZendeskFullApiOperationArgs<"ShowClient">): Promise<ZendeskFullApiOperationResponseMap["ShowClient"]>;
  UpdateClient(...args: ZendeskFullApiOperationArgs<"UpdateClient">): Promise<ZendeskFullApiOperationResponseMap["UpdateClient"]>;
}

export const ZendeskFullApiOAuthClientsGeneratedFunctionNames = [
  "ClientGenerateSecret",
  "CreateOAuthClient",
  "DeleteClient",
  "ListCurrentUserOAuthClients",
  "ListOAuthClients",
  "ShowClient",
  "UpdateClient"
] as const satisfies readonly (keyof ZendeskFullApiOAuthClientsGeneratedClient)[];

export function createZendeskFullApiOAuthClientsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiOAuthClientsGeneratedClient {
  return {
    ClientGenerateSecret: (...args) => callOperation("ClientGenerateSecret", ...(args as ZendeskFullApiOperationArgs<"ClientGenerateSecret">)),
    CreateOAuthClient: (...args) => callOperation("CreateOAuthClient", ...(args as ZendeskFullApiOperationArgs<"CreateOAuthClient">)),
    DeleteClient: (...args) => callOperation("DeleteClient", ...(args as ZendeskFullApiOperationArgs<"DeleteClient">)),
    ListCurrentUserOAuthClients: (...args) => callOperation("ListCurrentUserOAuthClients", ...(args as ZendeskFullApiOperationArgs<"ListCurrentUserOAuthClients">)),
    ListOAuthClients: (...args) => callOperation("ListOAuthClients", ...(args as ZendeskFullApiOperationArgs<"ListOAuthClients">)),
    ShowClient: (...args) => callOperation("ShowClient", ...(args as ZendeskFullApiOperationArgs<"ShowClient">)),
    UpdateClient: (...args) => callOperation("UpdateClient", ...(args as ZendeskFullApiOperationArgs<"UpdateClient">)),
  };
}
