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
export const ZendeskFullApiOAuthTokensOperationKeys = [
  "CreateOAuthToken",
  "ListOAuthTokens",
  "RevokeCurrentOAuthToken",
  "RevokeOAuthToken",
  "ShowCurrentToken",
  "ShowToken"
] as const;
export type ZendeskFullApiOAuthTokensOperationKey = typeof ZendeskFullApiOAuthTokensOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiOAuthTokensOperationPathParamMap {
  "CreateOAuthToken": {};
  "ListOAuthTokens": {};
  "RevokeCurrentOAuthToken": {};
  "RevokeOAuthToken": { "oauth_token_id": ZendeskFullApiPathParamValue };
  "ShowCurrentToken": {};
  "ShowToken": { "oauth_token_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiOAuthTokensOperationRequestMap {
  "CreateOAuthToken": ZendeskFullApiOperationInput<"CreateOAuthToken">;
  "ListOAuthTokens": ZendeskFullApiOperationInput<"ListOAuthTokens">;
  "RevokeCurrentOAuthToken": ZendeskFullApiOperationInput<"RevokeCurrentOAuthToken">;
  "RevokeOAuthToken": ZendeskFullApiOperationInput<"RevokeOAuthToken">;
  "ShowCurrentToken": ZendeskFullApiOperationInput<"ShowCurrentToken">;
  "ShowToken": ZendeskFullApiOperationInput<"ShowToken">;
}

export interface ZendeskFullApiOAuthTokensGeneratedClient {
  CreateOAuthToken(...args: ZendeskFullApiOperationArgs<"CreateOAuthToken">): Promise<ZendeskFullApiOperationResponseMap["CreateOAuthToken"]>;
  ListOAuthTokens(...args: ZendeskFullApiOperationArgs<"ListOAuthTokens">): Promise<ZendeskFullApiOperationResponseMap["ListOAuthTokens"]>;
  RevokeCurrentOAuthToken(...args: ZendeskFullApiOperationArgs<"RevokeCurrentOAuthToken">): Promise<ZendeskFullApiOperationResponseMap["RevokeCurrentOAuthToken"]>;
  RevokeOAuthToken(...args: ZendeskFullApiOperationArgs<"RevokeOAuthToken">): Promise<ZendeskFullApiOperationResponseMap["RevokeOAuthToken"]>;
  ShowCurrentToken(...args: ZendeskFullApiOperationArgs<"ShowCurrentToken">): Promise<ZendeskFullApiOperationResponseMap["ShowCurrentToken"]>;
  ShowToken(...args: ZendeskFullApiOperationArgs<"ShowToken">): Promise<ZendeskFullApiOperationResponseMap["ShowToken"]>;
}

export const ZendeskFullApiOAuthTokensGeneratedFunctionNames = [
  "CreateOAuthToken",
  "ListOAuthTokens",
  "RevokeCurrentOAuthToken",
  "RevokeOAuthToken",
  "ShowCurrentToken",
  "ShowToken"
] as const satisfies readonly (keyof ZendeskFullApiOAuthTokensGeneratedClient)[];

export function createZendeskFullApiOAuthTokensGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiOAuthTokensGeneratedClient {
  return {
    CreateOAuthToken: (...args) => callOperation("CreateOAuthToken", ...(args as ZendeskFullApiOperationArgs<"CreateOAuthToken">)),
    ListOAuthTokens: (...args) => callOperation("ListOAuthTokens", ...(args as ZendeskFullApiOperationArgs<"ListOAuthTokens">)),
    RevokeCurrentOAuthToken: (...args) => callOperation("RevokeCurrentOAuthToken", ...(args as ZendeskFullApiOperationArgs<"RevokeCurrentOAuthToken">)),
    RevokeOAuthToken: (...args) => callOperation("RevokeOAuthToken", ...(args as ZendeskFullApiOperationArgs<"RevokeOAuthToken">)),
    ShowCurrentToken: (...args) => callOperation("ShowCurrentToken", ...(args as ZendeskFullApiOperationArgs<"ShowCurrentToken">)),
    ShowToken: (...args) => callOperation("ShowToken", ...(args as ZendeskFullApiOperationArgs<"ShowToken">)),
  };
}
