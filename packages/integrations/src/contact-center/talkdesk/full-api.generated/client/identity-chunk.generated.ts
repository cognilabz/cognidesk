// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiIdentityOperationKeys = [
  "getEmailValidation"
] as const;
export type TalkdeskFullApiIdentityOperationKey = typeof TalkdeskFullApiIdentityOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiIdentityOperationPathParamMap {
  "getEmailValidation": { "email": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiIdentityOperationRequestMap {
  "getEmailValidation": TalkdeskFullApiOperationInput<"getEmailValidation">;
}

export interface TalkdeskFullApiIdentityGeneratedClient {
  GetEmailValidation(...args: TalkdeskFullApiOperationArgs<"getEmailValidation">): Promise<TalkdeskFullApiOperationResponseMap["getEmailValidation"]>;
}

export const TalkdeskFullApiIdentityGeneratedFunctionNames = [
  "GetEmailValidation"
] as const satisfies readonly (keyof TalkdeskFullApiIdentityGeneratedClient)[];

export function createTalkdeskFullApiIdentityGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiIdentityGeneratedClient {
  return {
    GetEmailValidation: (...args) => callOperation("getEmailValidation", ...(args as TalkdeskFullApiOperationArgs<"getEmailValidation">)),
  };
}
