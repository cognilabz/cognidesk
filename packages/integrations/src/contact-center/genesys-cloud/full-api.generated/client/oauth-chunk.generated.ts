// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiOAuthOperationKeys = [
  "deleteOauthClient",
  "getOauthAuthorization",
  "getOauthAuthorizations",
  "getOauthClient",
  "getOauthClients",
  "getOauthClientUsageQueryResult",
  "getOauthClientUsageSummary",
  "getOauthScope",
  "getOauthScopes",
  "postOauthClients",
  "postOauthClientSecret",
  "postOauthClientUsageQuery",
  "putOauthClient"
] as const;
export type GenesysCloudFullApiOAuthOperationKey = typeof GenesysCloudFullApiOAuthOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiOAuthOperationPathParamMap {
  "deleteOauthClient": { "clientId": GenesysCloudFullApiPathParamValue };
  "getOauthAuthorization": { "clientId": GenesysCloudFullApiPathParamValue };
  "getOauthAuthorizations": {};
  "getOauthClient": { "clientId": GenesysCloudFullApiPathParamValue };
  "getOauthClients": {};
  "getOauthClientUsageQueryResult": { "clientId": GenesysCloudFullApiPathParamValue; "executionId": GenesysCloudFullApiPathParamValue };
  "getOauthClientUsageSummary": { "clientId": GenesysCloudFullApiPathParamValue };
  "getOauthScope": { "scopeId": GenesysCloudFullApiPathParamValue };
  "getOauthScopes": {};
  "postOauthClients": {};
  "postOauthClientSecret": { "clientId": GenesysCloudFullApiPathParamValue };
  "postOauthClientUsageQuery": { "clientId": GenesysCloudFullApiPathParamValue };
  "putOauthClient": { "clientId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiOAuthOperationRequestMap {
  "deleteOauthClient": GenesysCloudFullApiOperationInput<"deleteOauthClient">;
  "getOauthAuthorization": GenesysCloudFullApiOperationInput<"getOauthAuthorization">;
  "getOauthAuthorizations": GenesysCloudFullApiOperationInput<"getOauthAuthorizations">;
  "getOauthClient": GenesysCloudFullApiOperationInput<"getOauthClient">;
  "getOauthClients": GenesysCloudFullApiOperationInput<"getOauthClients">;
  "getOauthClientUsageQueryResult": GenesysCloudFullApiOperationInput<"getOauthClientUsageQueryResult">;
  "getOauthClientUsageSummary": GenesysCloudFullApiOperationInput<"getOauthClientUsageSummary">;
  "getOauthScope": GenesysCloudFullApiOperationInput<"getOauthScope">;
  "getOauthScopes": GenesysCloudFullApiOperationInput<"getOauthScopes">;
  "postOauthClients": GenesysCloudFullApiOperationInput<"postOauthClients">;
  "postOauthClientSecret": GenesysCloudFullApiOperationInput<"postOauthClientSecret">;
  "postOauthClientUsageQuery": GenesysCloudFullApiOperationInput<"postOauthClientUsageQuery">;
  "putOauthClient": GenesysCloudFullApiOperationInput<"putOauthClient">;
}

export interface GenesysCloudFullApiOAuthGeneratedClient {
  DeleteOauthClient(...args: GenesysCloudFullApiOperationArgs<"deleteOauthClient">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOauthClient"]>;
  GetOauthAuthorization(...args: GenesysCloudFullApiOperationArgs<"getOauthAuthorization">): Promise<GenesysCloudFullApiOperationResponseMap["getOauthAuthorization"]>;
  GetOauthAuthorizations(...args: GenesysCloudFullApiOperationArgs<"getOauthAuthorizations">): Promise<GenesysCloudFullApiOperationResponseMap["getOauthAuthorizations"]>;
  GetOauthClient(...args: GenesysCloudFullApiOperationArgs<"getOauthClient">): Promise<GenesysCloudFullApiOperationResponseMap["getOauthClient"]>;
  GetOauthClients(...args: GenesysCloudFullApiOperationArgs<"getOauthClients">): Promise<GenesysCloudFullApiOperationResponseMap["getOauthClients"]>;
  GetOauthClientUsageQueryResult(...args: GenesysCloudFullApiOperationArgs<"getOauthClientUsageQueryResult">): Promise<GenesysCloudFullApiOperationResponseMap["getOauthClientUsageQueryResult"]>;
  GetOauthClientUsageSummary(...args: GenesysCloudFullApiOperationArgs<"getOauthClientUsageSummary">): Promise<GenesysCloudFullApiOperationResponseMap["getOauthClientUsageSummary"]>;
  GetOauthScope(...args: GenesysCloudFullApiOperationArgs<"getOauthScope">): Promise<GenesysCloudFullApiOperationResponseMap["getOauthScope"]>;
  GetOauthScopes(...args: GenesysCloudFullApiOperationArgs<"getOauthScopes">): Promise<GenesysCloudFullApiOperationResponseMap["getOauthScopes"]>;
  PostOauthClients(...args: GenesysCloudFullApiOperationArgs<"postOauthClients">): Promise<GenesysCloudFullApiOperationResponseMap["postOauthClients"]>;
  PostOauthClientSecret(...args: GenesysCloudFullApiOperationArgs<"postOauthClientSecret">): Promise<GenesysCloudFullApiOperationResponseMap["postOauthClientSecret"]>;
  PostOauthClientUsageQuery(...args: GenesysCloudFullApiOperationArgs<"postOauthClientUsageQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postOauthClientUsageQuery"]>;
  PutOauthClient(...args: GenesysCloudFullApiOperationArgs<"putOauthClient">): Promise<GenesysCloudFullApiOperationResponseMap["putOauthClient"]>;
}

export const GenesysCloudFullApiOAuthGeneratedFunctionNames = [
  "DeleteOauthClient",
  "GetOauthAuthorization",
  "GetOauthAuthorizations",
  "GetOauthClient",
  "GetOauthClients",
  "GetOauthClientUsageQueryResult",
  "GetOauthClientUsageSummary",
  "GetOauthScope",
  "GetOauthScopes",
  "PostOauthClients",
  "PostOauthClientSecret",
  "PostOauthClientUsageQuery",
  "PutOauthClient"
] as const satisfies readonly (keyof GenesysCloudFullApiOAuthGeneratedClient)[];

export function createGenesysCloudFullApiOAuthGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiOAuthGeneratedClient {
  return {
    DeleteOauthClient: (...args) => callOperation("deleteOauthClient", ...(args as GenesysCloudFullApiOperationArgs<"deleteOauthClient">)),
    GetOauthAuthorization: (...args) => callOperation("getOauthAuthorization", ...(args as GenesysCloudFullApiOperationArgs<"getOauthAuthorization">)),
    GetOauthAuthorizations: (...args) => callOperation("getOauthAuthorizations", ...(args as GenesysCloudFullApiOperationArgs<"getOauthAuthorizations">)),
    GetOauthClient: (...args) => callOperation("getOauthClient", ...(args as GenesysCloudFullApiOperationArgs<"getOauthClient">)),
    GetOauthClients: (...args) => callOperation("getOauthClients", ...(args as GenesysCloudFullApiOperationArgs<"getOauthClients">)),
    GetOauthClientUsageQueryResult: (...args) => callOperation("getOauthClientUsageQueryResult", ...(args as GenesysCloudFullApiOperationArgs<"getOauthClientUsageQueryResult">)),
    GetOauthClientUsageSummary: (...args) => callOperation("getOauthClientUsageSummary", ...(args as GenesysCloudFullApiOperationArgs<"getOauthClientUsageSummary">)),
    GetOauthScope: (...args) => callOperation("getOauthScope", ...(args as GenesysCloudFullApiOperationArgs<"getOauthScope">)),
    GetOauthScopes: (...args) => callOperation("getOauthScopes", ...(args as GenesysCloudFullApiOperationArgs<"getOauthScopes">)),
    PostOauthClients: (...args) => callOperation("postOauthClients", ...(args as GenesysCloudFullApiOperationArgs<"postOauthClients">)),
    PostOauthClientSecret: (...args) => callOperation("postOauthClientSecret", ...(args as GenesysCloudFullApiOperationArgs<"postOauthClientSecret">)),
    PostOauthClientUsageQuery: (...args) => callOperation("postOauthClientUsageQuery", ...(args as GenesysCloudFullApiOperationArgs<"postOauthClientUsageQuery">)),
    PutOauthClient: (...args) => callOperation("putOauthClient", ...(args as GenesysCloudFullApiOperationArgs<"putOauthClient">)),
  };
}
