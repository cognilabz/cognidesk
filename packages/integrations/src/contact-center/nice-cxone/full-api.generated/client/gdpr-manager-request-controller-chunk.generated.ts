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
export const NiceCxoneFullApiGdprManagerRequestControllerOperationKeys = [
  "privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure"
] as const;
export type NiceCxoneFullApiGdprManagerRequestControllerOperationKey = typeof NiceCxoneFullApiGdprManagerRequestControllerOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiGdprManagerRequestControllerOperationPathParamMap {
  "privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure": {};
}

export interface NiceCxoneFullApiGdprManagerRequestControllerOperationRequestMap {
  "privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure": NiceCxoneFullApiOperationInput<"privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure">;
}

export interface NiceCxoneFullApiGdprManagerRequestControllerGeneratedClient {
  PrivacyGdprApiDocsCreateGdprErasureRequest(...args: NiceCxoneFullApiOperationArgs<"privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure">): Promise<NiceCxoneFullApiOperationResponseMap["privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure"]>;
}

export const NiceCxoneFullApiGdprManagerRequestControllerGeneratedFunctionNames = [
  "PrivacyGdprApiDocsCreateGdprErasureRequest"
] as const satisfies readonly (keyof NiceCxoneFullApiGdprManagerRequestControllerGeneratedClient)[];

export function createNiceCxoneFullApiGdprManagerRequestControllerGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiGdprManagerRequestControllerGeneratedClient {
  return {
    PrivacyGdprApiDocsCreateGdprErasureRequest: (...args) => callOperation("privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure", ...(args as NiceCxoneFullApiOperationArgs<"privacy-gdpr-api-docs:createGdprErasureRequest:POST:/privacy/v1/erasure">)),
  };
}
