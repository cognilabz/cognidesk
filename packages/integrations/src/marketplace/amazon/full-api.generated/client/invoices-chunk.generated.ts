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
export const AmazonFullApiInvoicesOperationKeys = [
  "InvoicesApiModel_2024-06-19:getInvoicesAttributes",
  "InvoicesApiModel_2024-06-19:getInvoicesDocument",
  "InvoicesApiModel_2024-06-19:createInvoicesExport",
  "InvoicesApiModel_2024-06-19:getInvoicesExports",
  "InvoicesApiModel_2024-06-19:getInvoicesExport",
  "InvoicesApiModel_2024-06-19:createGovernmentInvoice",
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus",
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument",
  "InvoicesApiModel_2024-06-19:getInvoices",
  "InvoicesApiModel_2024-06-19:getInvoice"
] as const;
export type AmazonFullApiInvoicesOperationKey = typeof AmazonFullApiInvoicesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiInvoicesOperationPathParamMap {
  "InvoicesApiModel_2024-06-19:getInvoicesAttributes": {};
  "InvoicesApiModel_2024-06-19:getInvoicesDocument": { "invoicesDocumentId": AmazonFullApiPathParamValue };
  "InvoicesApiModel_2024-06-19:createInvoicesExport": {};
  "InvoicesApiModel_2024-06-19:getInvoicesExports": {};
  "InvoicesApiModel_2024-06-19:getInvoicesExport": { "exportId": AmazonFullApiPathParamValue };
  "InvoicesApiModel_2024-06-19:createGovernmentInvoice": {};
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus": {};
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument": { "shipmentId": AmazonFullApiPathParamValue };
  "InvoicesApiModel_2024-06-19:getInvoices": {};
  "InvoicesApiModel_2024-06-19:getInvoice": { "invoiceId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiInvoicesOperationRequestMap {
  "InvoicesApiModel_2024-06-19:getInvoicesAttributes": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:getInvoicesAttributes">;
  "InvoicesApiModel_2024-06-19:getInvoicesDocument": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:getInvoicesDocument">;
  "InvoicesApiModel_2024-06-19:createInvoicesExport": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:createInvoicesExport">;
  "InvoicesApiModel_2024-06-19:getInvoicesExports": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:getInvoicesExports">;
  "InvoicesApiModel_2024-06-19:getInvoicesExport": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:getInvoicesExport">;
  "InvoicesApiModel_2024-06-19:createGovernmentInvoice": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:createGovernmentInvoice">;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus">;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument">;
  "InvoicesApiModel_2024-06-19:getInvoices": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:getInvoices">;
  "InvoicesApiModel_2024-06-19:getInvoice": AmazonFullApiOperationInput<"InvoicesApiModel_2024-06-19:getInvoice">;
}

export interface AmazonFullApiInvoicesGeneratedClient {
  GetInvoicesAttributes(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoicesAttributes">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:getInvoicesAttributes"]>;
  GetInvoicesDocument(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoicesDocument">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:getInvoicesDocument"]>;
  CreateInvoicesExport(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:createInvoicesExport">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:createInvoicesExport"]>;
  GetInvoicesExports(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoicesExports">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:getInvoicesExports"]>;
  GetInvoicesExport(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoicesExport">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:getInvoicesExport"]>;
  CreateGovernmentInvoice(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:createGovernmentInvoice">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:createGovernmentInvoice"]>;
  GetGovernmentInvoiceStatus(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus"]>;
  GetGovernmentInvoiceDocument(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument"]>;
  GetInvoices(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoices">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:getInvoices"]>;
  GetInvoice(...args: AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoice">): Promise<AmazonFullApiOperationResponseMap["InvoicesApiModel_2024-06-19:getInvoice"]>;
}

export const AmazonFullApiInvoicesGeneratedFunctionNames = [
  "GetInvoicesAttributes",
  "GetInvoicesDocument",
  "CreateInvoicesExport",
  "GetInvoicesExports",
  "GetInvoicesExport",
  "CreateGovernmentInvoice",
  "GetGovernmentInvoiceStatus",
  "GetGovernmentInvoiceDocument",
  "GetInvoices",
  "GetInvoice"
] as const satisfies readonly (keyof AmazonFullApiInvoicesGeneratedClient)[];

export function createAmazonFullApiInvoicesGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiInvoicesGeneratedClient {
  return {
    GetInvoicesAttributes: (...args) => callOperation("InvoicesApiModel_2024-06-19:getInvoicesAttributes", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoicesAttributes">)),
    GetInvoicesDocument: (...args) => callOperation("InvoicesApiModel_2024-06-19:getInvoicesDocument", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoicesDocument">)),
    CreateInvoicesExport: (...args) => callOperation("InvoicesApiModel_2024-06-19:createInvoicesExport", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:createInvoicesExport">)),
    GetInvoicesExports: (...args) => callOperation("InvoicesApiModel_2024-06-19:getInvoicesExports", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoicesExports">)),
    GetInvoicesExport: (...args) => callOperation("InvoicesApiModel_2024-06-19:getInvoicesExport", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoicesExport">)),
    CreateGovernmentInvoice: (...args) => callOperation("InvoicesApiModel_2024-06-19:createGovernmentInvoice", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:createGovernmentInvoice">)),
    GetGovernmentInvoiceStatus: (...args) => callOperation("InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus">)),
    GetGovernmentInvoiceDocument: (...args) => callOperation("InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument">)),
    GetInvoices: (...args) => callOperation("InvoicesApiModel_2024-06-19:getInvoices", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoices">)),
    GetInvoice: (...args) => callOperation("InvoicesApiModel_2024-06-19:getInvoice", ...(args as AmazonFullApiOperationArgs<"InvoicesApiModel_2024-06-19:getInvoice">)),
  };
}
