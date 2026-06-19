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
export const AmazonConnectFullApiSearchWorkspacesOperationKeys = [
  "connect:SearchWorkspaces"
] as const;
export type AmazonConnectFullApiSearchWorkspacesOperationKey = typeof AmazonConnectFullApiSearchWorkspacesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchWorkspacesOperationPathParamMap {
  "connect:SearchWorkspaces": {};
}

export interface AmazonConnectFullApiSearchWorkspacesOperationRequestMap {
  "connect:SearchWorkspaces": AmazonConnectFullApiOperationInput<"connect:SearchWorkspaces">;
}

export interface AmazonConnectFullApiSearchWorkspacesGeneratedClient {
  SearchWorkspaces(...args: AmazonConnectFullApiOperationArgs<"connect:SearchWorkspaces">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchWorkspaces"]>;
}

export const AmazonConnectFullApiSearchWorkspacesGeneratedFunctionNames = [
  "SearchWorkspaces"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchWorkspacesGeneratedClient)[];

export function createAmazonConnectFullApiSearchWorkspacesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchWorkspacesGeneratedClient {
  return {
    SearchWorkspaces: (...args) => callOperation("connect:SearchWorkspaces", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchWorkspaces">)),
  };
}
