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
export const NiceCxoneFullApiAuthorizationManagementOperationKeys = [
  "cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search"
] as const;
export type NiceCxoneFullApiAuthorizationManagementOperationKey = typeof NiceCxoneFullApiAuthorizationManagementOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAuthorizationManagementOperationPathParamMap {
  "cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search": {};
}

export interface NiceCxoneFullApiAuthorizationManagementOperationRequestMap {
  "cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search": NiceCxoneFullApiOperationInput<"cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search">;
}

export interface NiceCxoneFullApiAuthorizationManagementGeneratedClient {
  CxoneAuthorizationmanagementApiDocsSearchRole(...args: NiceCxoneFullApiOperationArgs<"cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search"]>;
}

export const NiceCxoneFullApiAuthorizationManagementGeneratedFunctionNames = [
  "CxoneAuthorizationmanagementApiDocsSearchRole"
] as const satisfies readonly (keyof NiceCxoneFullApiAuthorizationManagementGeneratedClient)[];

export function createNiceCxoneFullApiAuthorizationManagementGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAuthorizationManagementGeneratedClient {
  return {
    CxoneAuthorizationmanagementApiDocsSearchRole: (...args) => callOperation("cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search", ...(args as NiceCxoneFullApiOperationArgs<"cxone-authorizationmanagement-api-docs:searchRole:POST:/authorization/v1/roles/search">)),
  };
}
