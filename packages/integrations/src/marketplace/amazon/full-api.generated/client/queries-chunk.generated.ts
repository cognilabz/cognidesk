// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiQueriesOperationKeys = [
  "dataKiosk_2023-11-15:getQueries",
  "dataKiosk_2023-11-15:createQuery",
  "dataKiosk_2023-11-15:cancelQuery",
  "dataKiosk_2023-11-15:getQuery",
  "dataKiosk_2023-11-15:getDocument"
] as const;
export type AmazonFullApiQueriesOperationKey = typeof AmazonFullApiQueriesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiQueriesOperationPathParamMap {
  "dataKiosk_2023-11-15:getQueries": {};
  "dataKiosk_2023-11-15:createQuery": {};
  "dataKiosk_2023-11-15:cancelQuery": { "queryId": AmazonFullApiPathParamValue };
  "dataKiosk_2023-11-15:getQuery": { "queryId": AmazonFullApiPathParamValue };
  "dataKiosk_2023-11-15:getDocument": { "documentId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiQueriesOperationRequestMap {
  "dataKiosk_2023-11-15:getQueries": AmazonFullApiOperationInput<"dataKiosk_2023-11-15:getQueries">;
  "dataKiosk_2023-11-15:createQuery": AmazonFullApiOperationInput<"dataKiosk_2023-11-15:createQuery">;
  "dataKiosk_2023-11-15:cancelQuery": AmazonFullApiOperationInput<"dataKiosk_2023-11-15:cancelQuery">;
  "dataKiosk_2023-11-15:getQuery": AmazonFullApiOperationInput<"dataKiosk_2023-11-15:getQuery">;
  "dataKiosk_2023-11-15:getDocument": AmazonFullApiOperationInput<"dataKiosk_2023-11-15:getDocument">;
}

export interface AmazonFullApiQueriesGeneratedClient {
  GetQueries(...args: AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:getQueries">): Promise<AmazonFullApiOperationResponseMap["dataKiosk_2023-11-15:getQueries"]>;
  CreateQuery(...args: AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:createQuery">): Promise<AmazonFullApiOperationResponseMap["dataKiosk_2023-11-15:createQuery"]>;
  CancelQuery(...args: AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:cancelQuery">): Promise<AmazonFullApiOperationResponseMap["dataKiosk_2023-11-15:cancelQuery"]>;
  GetQuery(...args: AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:getQuery">): Promise<AmazonFullApiOperationResponseMap["dataKiosk_2023-11-15:getQuery"]>;
  GetDocument(...args: AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:getDocument">): Promise<AmazonFullApiOperationResponseMap["dataKiosk_2023-11-15:getDocument"]>;
}

export const AmazonFullApiQueriesGeneratedFunctionNames = [
  "GetQueries",
  "CreateQuery",
  "CancelQuery",
  "GetQuery",
  "GetDocument"
] as const satisfies readonly (keyof AmazonFullApiQueriesGeneratedClient)[];

export function createAmazonFullApiQueriesGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiQueriesGeneratedClient {
  return {
    GetQueries: (...args) => callOperation("dataKiosk_2023-11-15:getQueries", ...(args as AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:getQueries">)),
    CreateQuery: (...args) => callOperation("dataKiosk_2023-11-15:createQuery", ...(args as AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:createQuery">)),
    CancelQuery: (...args) => callOperation("dataKiosk_2023-11-15:cancelQuery", ...(args as AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:cancelQuery">)),
    GetQuery: (...args) => callOperation("dataKiosk_2023-11-15:getQuery", ...(args as AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:getQuery">)),
    GetDocument: (...args) => callOperation("dataKiosk_2023-11-15:getDocument", ...(args as AmazonFullApiOperationArgs<"dataKiosk_2023-11-15:getDocument">)),
  };
}
