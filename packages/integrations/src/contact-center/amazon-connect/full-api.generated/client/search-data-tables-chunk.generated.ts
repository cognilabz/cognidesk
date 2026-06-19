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
export const AmazonConnectFullApiSearchDataTablesOperationKeys = [
  "connect:SearchDataTables"
] as const;
export type AmazonConnectFullApiSearchDataTablesOperationKey = typeof AmazonConnectFullApiSearchDataTablesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchDataTablesOperationPathParamMap {
  "connect:SearchDataTables": {};
}

export interface AmazonConnectFullApiSearchDataTablesOperationRequestMap {
  "connect:SearchDataTables": AmazonConnectFullApiOperationInput<"connect:SearchDataTables">;
}

export interface AmazonConnectFullApiSearchDataTablesGeneratedClient {
  SearchDataTables(...args: AmazonConnectFullApiOperationArgs<"connect:SearchDataTables">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchDataTables"]>;
}

export const AmazonConnectFullApiSearchDataTablesGeneratedFunctionNames = [
  "SearchDataTables"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchDataTablesGeneratedClient)[];

export function createAmazonConnectFullApiSearchDataTablesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchDataTablesGeneratedClient {
  return {
    SearchDataTables: (...args) => callOperation("connect:SearchDataTables", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchDataTables">)),
  };
}
