// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiAuthenticateOperationKeys = [
  "authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password",
  "authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password"
] as const;
export type NiceCxoneFullApiAuthenticateOperationKey = typeof NiceCxoneFullApiAuthenticateOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAuthenticateOperationPathParamMap {
  "authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password": { "agentId": NiceCxoneFullApiPathParamValue };
  "authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password": {};
}

export interface NiceCxoneFullApiAuthenticateOperationRequestMap {
  "authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password": NiceCxoneFullApiOperationInput<"authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password">;
  "authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password": NiceCxoneFullApiOperationInput<"authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password">;
}

export interface NiceCxoneFullApiAuthenticateGeneratedClient {
  AuthenticationAuthenticateApiDocsPasswordReset(...args: NiceCxoneFullApiOperationArgs<"authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password"]>;
  AuthenticationAuthenticateApiDocsPasswordChange(...args: NiceCxoneFullApiOperationArgs<"authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password"]>;
}

export const NiceCxoneFullApiAuthenticateGeneratedFunctionNames = [
  "AuthenticationAuthenticateApiDocsPasswordReset",
  "AuthenticationAuthenticateApiDocsPasswordChange"
] as const satisfies readonly (keyof NiceCxoneFullApiAuthenticateGeneratedClient)[];

export function createNiceCxoneFullApiAuthenticateGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAuthenticateGeneratedClient {
  return {
    AuthenticationAuthenticateApiDocsPasswordReset: (...args) => callOperation("authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password", ...(args as NiceCxoneFullApiOperationArgs<"authentication-authenticate-api-docs:passwordReset:PUT:/agents/{agentId}/reset-password">)),
    AuthenticationAuthenticateApiDocsPasswordChange: (...args) => callOperation("authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password", ...(args as NiceCxoneFullApiOperationArgs<"authentication-authenticate-api-docs:PasswordChange:PUT:/agents/change-password">)),
  };
}
