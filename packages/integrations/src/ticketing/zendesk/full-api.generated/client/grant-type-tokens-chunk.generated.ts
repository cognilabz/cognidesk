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
export const ZendeskFullApiGrantTypeTokensOperationKeys = [
  "CreateTokenForGrantType"
] as const;
export type ZendeskFullApiGrantTypeTokensOperationKey = typeof ZendeskFullApiGrantTypeTokensOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiGrantTypeTokensOperationPathParamMap {
  "CreateTokenForGrantType": {};
}

export interface ZendeskFullApiGrantTypeTokensOperationRequestMap {
  "CreateTokenForGrantType": ZendeskFullApiOperationInput<"CreateTokenForGrantType">;
}

export interface ZendeskFullApiGrantTypeTokensGeneratedClient {
  CreateTokenForGrantType(...args: ZendeskFullApiOperationArgs<"CreateTokenForGrantType">): Promise<ZendeskFullApiOperationResponseMap["CreateTokenForGrantType"]>;
}

export const ZendeskFullApiGrantTypeTokensGeneratedFunctionNames = [
  "CreateTokenForGrantType"
] as const satisfies readonly (keyof ZendeskFullApiGrantTypeTokensGeneratedClient)[];

export function createZendeskFullApiGrantTypeTokensGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiGrantTypeTokensGeneratedClient {
  return {
    CreateTokenForGrantType: (...args) => callOperation("CreateTokenForGrantType", ...(args as ZendeskFullApiOperationArgs<"CreateTokenForGrantType">)),
  };
}
