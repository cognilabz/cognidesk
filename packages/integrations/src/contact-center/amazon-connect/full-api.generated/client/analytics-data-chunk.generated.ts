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
export const AmazonConnectFullApiAnalyticsDataOperationKeys = [
  "connect:AssociateAnalyticsDataSet",
  "connect:BatchAssociateAnalyticsDataSet",
  "connect:BatchDisassociateAnalyticsDataSet",
  "connect:DisassociateAnalyticsDataSet",
  "connect:ListAnalyticsDataAssociations",
  "connect:ListAnalyticsDataLakeDataSets"
] as const;
export type AmazonConnectFullApiAnalyticsDataOperationKey = typeof AmazonConnectFullApiAnalyticsDataOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiAnalyticsDataOperationPathParamMap {
  "connect:AssociateAnalyticsDataSet": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:BatchAssociateAnalyticsDataSet": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:BatchDisassociateAnalyticsDataSet": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateAnalyticsDataSet": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListAnalyticsDataAssociations": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListAnalyticsDataLakeDataSets": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiAnalyticsDataOperationRequestMap {
  "connect:AssociateAnalyticsDataSet": AmazonConnectFullApiOperationInput<"connect:AssociateAnalyticsDataSet">;
  "connect:BatchAssociateAnalyticsDataSet": AmazonConnectFullApiOperationInput<"connect:BatchAssociateAnalyticsDataSet">;
  "connect:BatchDisassociateAnalyticsDataSet": AmazonConnectFullApiOperationInput<"connect:BatchDisassociateAnalyticsDataSet">;
  "connect:DisassociateAnalyticsDataSet": AmazonConnectFullApiOperationInput<"connect:DisassociateAnalyticsDataSet">;
  "connect:ListAnalyticsDataAssociations": AmazonConnectFullApiOperationInput<"connect:ListAnalyticsDataAssociations">;
  "connect:ListAnalyticsDataLakeDataSets": AmazonConnectFullApiOperationInput<"connect:ListAnalyticsDataLakeDataSets">;
}

export interface AmazonConnectFullApiAnalyticsDataGeneratedClient {
  AssociateAnalyticsDataSet(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateAnalyticsDataSet">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateAnalyticsDataSet"]>;
  BatchAssociateAnalyticsDataSet(...args: AmazonConnectFullApiOperationArgs<"connect:BatchAssociateAnalyticsDataSet">): Promise<AmazonConnectFullApiOperationResponseMap["connect:BatchAssociateAnalyticsDataSet"]>;
  BatchDisassociateAnalyticsDataSet(...args: AmazonConnectFullApiOperationArgs<"connect:BatchDisassociateAnalyticsDataSet">): Promise<AmazonConnectFullApiOperationResponseMap["connect:BatchDisassociateAnalyticsDataSet"]>;
  DisassociateAnalyticsDataSet(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateAnalyticsDataSet">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateAnalyticsDataSet"]>;
  ListAnalyticsDataAssociations(...args: AmazonConnectFullApiOperationArgs<"connect:ListAnalyticsDataAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListAnalyticsDataAssociations"]>;
  ListAnalyticsDataLakeDataSets(...args: AmazonConnectFullApiOperationArgs<"connect:ListAnalyticsDataLakeDataSets">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListAnalyticsDataLakeDataSets"]>;
}

export const AmazonConnectFullApiAnalyticsDataGeneratedFunctionNames = [
  "AssociateAnalyticsDataSet",
  "BatchAssociateAnalyticsDataSet",
  "BatchDisassociateAnalyticsDataSet",
  "DisassociateAnalyticsDataSet",
  "ListAnalyticsDataAssociations",
  "ListAnalyticsDataLakeDataSets"
] as const satisfies readonly (keyof AmazonConnectFullApiAnalyticsDataGeneratedClient)[];

export function createAmazonConnectFullApiAnalyticsDataGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiAnalyticsDataGeneratedClient {
  return {
    AssociateAnalyticsDataSet: (...args) => callOperation("connect:AssociateAnalyticsDataSet", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateAnalyticsDataSet">)),
    BatchAssociateAnalyticsDataSet: (...args) => callOperation("connect:BatchAssociateAnalyticsDataSet", ...(args as AmazonConnectFullApiOperationArgs<"connect:BatchAssociateAnalyticsDataSet">)),
    BatchDisassociateAnalyticsDataSet: (...args) => callOperation("connect:BatchDisassociateAnalyticsDataSet", ...(args as AmazonConnectFullApiOperationArgs<"connect:BatchDisassociateAnalyticsDataSet">)),
    DisassociateAnalyticsDataSet: (...args) => callOperation("connect:DisassociateAnalyticsDataSet", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateAnalyticsDataSet">)),
    ListAnalyticsDataAssociations: (...args) => callOperation("connect:ListAnalyticsDataAssociations", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListAnalyticsDataAssociations">)),
    ListAnalyticsDataLakeDataSets: (...args) => callOperation("connect:ListAnalyticsDataLakeDataSets", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListAnalyticsDataLakeDataSets">)),
  };
}
