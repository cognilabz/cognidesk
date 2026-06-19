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
export const NiceCxoneFullApiVerificationTokenOperationKeys = [
  "digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication",
  "digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification"
] as const;
export type NiceCxoneFullApiVerificationTokenOperationKey = typeof NiceCxoneFullApiVerificationTokenOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiVerificationTokenOperationPathParamMap {
  "digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication": {};
  "digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification": {};
}

export interface NiceCxoneFullApiVerificationTokenOperationRequestMap {
  "digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication": NiceCxoneFullApiOperationInput<"digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication">;
  "digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification": NiceCxoneFullApiOperationInput<"digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification">;
}

export interface NiceCxoneFullApiVerificationTokenGeneratedClient {
  DigitalVerificationtokenApiDocsGetOneTimeToken(...args: NiceCxoneFullApiOperationArgs<"digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication">): Promise<NiceCxoneFullApiOperationResponseMap["digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication"]>;
  DigitalVerificationtokenApiDocsVerifyOneTimeToken(...args: NiceCxoneFullApiOperationArgs<"digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification">): Promise<NiceCxoneFullApiOperationResponseMap["digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification"]>;
}

export const NiceCxoneFullApiVerificationTokenGeneratedFunctionNames = [
  "DigitalVerificationtokenApiDocsGetOneTimeToken",
  "DigitalVerificationtokenApiDocsVerifyOneTimeToken"
] as const satisfies readonly (keyof NiceCxoneFullApiVerificationTokenGeneratedClient)[];

export function createNiceCxoneFullApiVerificationTokenGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiVerificationTokenGeneratedClient {
  return {
    DigitalVerificationtokenApiDocsGetOneTimeToken: (...args) => callOperation("digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication", ...(args as NiceCxoneFullApiOperationArgs<"digital-verificationtoken-api-docs:getOneTimeToken:GET:/one-time-token/authentication">)),
    DigitalVerificationtokenApiDocsVerifyOneTimeToken: (...args) => callOperation("digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification", ...(args as NiceCxoneFullApiOperationArgs<"digital-verificationtoken-api-docs:verifyOneTimeToken:POST:/one-time-token/verification">)),
  };
}
