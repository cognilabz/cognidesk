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
export const AmazonFullApiSupplySourcesOperationKeys = [
  "supplySources_2020-07-01:getSupplySources",
  "supplySources_2020-07-01:createSupplySource",
  "supplySources_2020-07-01:getSupplySource",
  "supplySources_2020-07-01:updateSupplySource",
  "supplySources_2020-07-01:archiveSupplySource",
  "supplySources_2020-07-01:updateSupplySourceStatus"
] as const;
export type AmazonFullApiSupplySourcesOperationKey = typeof AmazonFullApiSupplySourcesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiSupplySourcesOperationPathParamMap {
  "supplySources_2020-07-01:getSupplySources": {};
  "supplySources_2020-07-01:createSupplySource": {};
  "supplySources_2020-07-01:getSupplySource": { "supplySourceId": AmazonFullApiPathParamValue };
  "supplySources_2020-07-01:updateSupplySource": { "supplySourceId": AmazonFullApiPathParamValue };
  "supplySources_2020-07-01:archiveSupplySource": { "supplySourceId": AmazonFullApiPathParamValue };
  "supplySources_2020-07-01:updateSupplySourceStatus": { "supplySourceId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiSupplySourcesOperationRequestMap {
  "supplySources_2020-07-01:getSupplySources": AmazonFullApiOperationInput<"supplySources_2020-07-01:getSupplySources">;
  "supplySources_2020-07-01:createSupplySource": AmazonFullApiOperationInput<"supplySources_2020-07-01:createSupplySource">;
  "supplySources_2020-07-01:getSupplySource": AmazonFullApiOperationInput<"supplySources_2020-07-01:getSupplySource">;
  "supplySources_2020-07-01:updateSupplySource": AmazonFullApiOperationInput<"supplySources_2020-07-01:updateSupplySource">;
  "supplySources_2020-07-01:archiveSupplySource": AmazonFullApiOperationInput<"supplySources_2020-07-01:archiveSupplySource">;
  "supplySources_2020-07-01:updateSupplySourceStatus": AmazonFullApiOperationInput<"supplySources_2020-07-01:updateSupplySourceStatus">;
}

export interface AmazonFullApiSupplySourcesGeneratedClient {
  GetSupplySources(...args: AmazonFullApiOperationArgs<"supplySources_2020-07-01:getSupplySources">): Promise<AmazonFullApiOperationResponseMap["supplySources_2020-07-01:getSupplySources"]>;
  CreateSupplySource(...args: AmazonFullApiOperationArgs<"supplySources_2020-07-01:createSupplySource">): Promise<AmazonFullApiOperationResponseMap["supplySources_2020-07-01:createSupplySource"]>;
  GetSupplySource(...args: AmazonFullApiOperationArgs<"supplySources_2020-07-01:getSupplySource">): Promise<AmazonFullApiOperationResponseMap["supplySources_2020-07-01:getSupplySource"]>;
  UpdateSupplySource(...args: AmazonFullApiOperationArgs<"supplySources_2020-07-01:updateSupplySource">): Promise<AmazonFullApiOperationResponseMap["supplySources_2020-07-01:updateSupplySource"]>;
  ArchiveSupplySource(...args: AmazonFullApiOperationArgs<"supplySources_2020-07-01:archiveSupplySource">): Promise<AmazonFullApiOperationResponseMap["supplySources_2020-07-01:archiveSupplySource"]>;
  UpdateSupplySourceStatus(...args: AmazonFullApiOperationArgs<"supplySources_2020-07-01:updateSupplySourceStatus">): Promise<AmazonFullApiOperationResponseMap["supplySources_2020-07-01:updateSupplySourceStatus"]>;
}

export const AmazonFullApiSupplySourcesGeneratedFunctionNames = [
  "GetSupplySources",
  "CreateSupplySource",
  "GetSupplySource",
  "UpdateSupplySource",
  "ArchiveSupplySource",
  "UpdateSupplySourceStatus"
] as const satisfies readonly (keyof AmazonFullApiSupplySourcesGeneratedClient)[];

export function createAmazonFullApiSupplySourcesGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiSupplySourcesGeneratedClient {
  return {
    GetSupplySources: (...args) => callOperation("supplySources_2020-07-01:getSupplySources", ...(args as AmazonFullApiOperationArgs<"supplySources_2020-07-01:getSupplySources">)),
    CreateSupplySource: (...args) => callOperation("supplySources_2020-07-01:createSupplySource", ...(args as AmazonFullApiOperationArgs<"supplySources_2020-07-01:createSupplySource">)),
    GetSupplySource: (...args) => callOperation("supplySources_2020-07-01:getSupplySource", ...(args as AmazonFullApiOperationArgs<"supplySources_2020-07-01:getSupplySource">)),
    UpdateSupplySource: (...args) => callOperation("supplySources_2020-07-01:updateSupplySource", ...(args as AmazonFullApiOperationArgs<"supplySources_2020-07-01:updateSupplySource">)),
    ArchiveSupplySource: (...args) => callOperation("supplySources_2020-07-01:archiveSupplySource", ...(args as AmazonFullApiOperationArgs<"supplySources_2020-07-01:archiveSupplySource">)),
    UpdateSupplySourceStatus: (...args) => callOperation("supplySources_2020-07-01:updateSupplySourceStatus", ...(args as AmazonFullApiOperationArgs<"supplySources_2020-07-01:updateSupplySourceStatus">)),
  };
}
