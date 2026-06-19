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
export const NiceCxoneFullApiAssociationOperationKeys = [
  "authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations"
] as const;
export type NiceCxoneFullApiAssociationOperationKey = typeof NiceCxoneFullApiAssociationOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAssociationOperationPathParamMap {
  "authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations": {};
}

export interface NiceCxoneFullApiAssociationOperationRequestMap {
  "authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations": NiceCxoneFullApiOperationInput<"authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations">;
}

export interface NiceCxoneFullApiAssociationGeneratedClient {
  AuthenticationGlobalauthenticationApiDocsGetAccountAccessAssociations(...args: NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations"]>;
}

export const NiceCxoneFullApiAssociationGeneratedFunctionNames = [
  "AuthenticationGlobalauthenticationApiDocsGetAccountAccessAssociations"
] as const satisfies readonly (keyof NiceCxoneFullApiAssociationGeneratedClient)[];

export function createNiceCxoneFullApiAssociationGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAssociationGeneratedClient {
  return {
    AuthenticationGlobalauthenticationApiDocsGetAccountAccessAssociations: (...args) => callOperation("authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations", ...(args as NiceCxoneFullApiOperationArgs<"authentication-globalauthentication-api-docs:getAccountAccessAssociations:GET:/account-access/v1/associations">)),
  };
}
