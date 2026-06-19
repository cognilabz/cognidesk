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
export const TalkdeskFullApiExternalCredentialsOperationKeys = [
  "external-credentials-get-certificates",
  "external-credentials-options-certificates"
] as const;
export type TalkdeskFullApiExternalCredentialsOperationKey = typeof TalkdeskFullApiExternalCredentialsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiExternalCredentialsOperationPathParamMap {
  "external-credentials-get-certificates": {};
  "external-credentials-options-certificates": {};
}

export interface TalkdeskFullApiExternalCredentialsOperationRequestMap {
  "external-credentials-get-certificates": TalkdeskFullApiOperationInput<"external-credentials-get-certificates">;
  "external-credentials-options-certificates": TalkdeskFullApiOperationInput<"external-credentials-options-certificates">;
}

export interface TalkdeskFullApiExternalCredentialsGeneratedClient {
  ExternalCredentialsGetCertificates(...args: TalkdeskFullApiOperationArgs<"external-credentials-get-certificates">): Promise<TalkdeskFullApiOperationResponseMap["external-credentials-get-certificates"]>;
  ExternalCredentialsOptionsCertificates(...args: TalkdeskFullApiOperationArgs<"external-credentials-options-certificates">): Promise<TalkdeskFullApiOperationResponseMap["external-credentials-options-certificates"]>;
}

export const TalkdeskFullApiExternalCredentialsGeneratedFunctionNames = [
  "ExternalCredentialsGetCertificates",
  "ExternalCredentialsOptionsCertificates"
] as const satisfies readonly (keyof TalkdeskFullApiExternalCredentialsGeneratedClient)[];

export function createTalkdeskFullApiExternalCredentialsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiExternalCredentialsGeneratedClient {
  return {
    ExternalCredentialsGetCertificates: (...args) => callOperation("external-credentials-get-certificates", ...(args as TalkdeskFullApiOperationArgs<"external-credentials-get-certificates">)),
    ExternalCredentialsOptionsCertificates: (...args) => callOperation("external-credentials-options-certificates", ...(args as TalkdeskFullApiOperationArgs<"external-credentials-options-certificates">)),
  };
}
