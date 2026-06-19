// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiSearchWorkspaceAssociationsOperationKeys = [
  "connect:SearchWorkspaceAssociations"
] as const;
export type AmazonConnectFullApiSearchWorkspaceAssociationsOperationKey = typeof AmazonConnectFullApiSearchWorkspaceAssociationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchWorkspaceAssociationsOperationPathParamMap {
  "connect:SearchWorkspaceAssociations": {};
}

export interface AmazonConnectFullApiSearchWorkspaceAssociationsOperationRequestMap {
  "connect:SearchWorkspaceAssociations": AmazonConnectFullApiOperationInput<"connect:SearchWorkspaceAssociations">;
}

export interface AmazonConnectFullApiSearchWorkspaceAssociationsGeneratedClient {
  SearchWorkspaceAssociations(...args: AmazonConnectFullApiOperationArgs<"connect:SearchWorkspaceAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchWorkspaceAssociations"]>;
}

export const AmazonConnectFullApiSearchWorkspaceAssociationsGeneratedFunctionNames = [
  "SearchWorkspaceAssociations"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchWorkspaceAssociationsGeneratedClient)[];

export function createAmazonConnectFullApiSearchWorkspaceAssociationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchWorkspaceAssociationsGeneratedClient {
  return {
    SearchWorkspaceAssociations: (...args) => callOperation("connect:SearchWorkspaceAssociations", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchWorkspaceAssociations">)),
  };
}
