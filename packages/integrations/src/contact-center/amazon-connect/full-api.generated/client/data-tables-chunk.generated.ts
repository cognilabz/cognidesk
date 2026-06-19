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
export const AmazonConnectFullApiDataTablesOperationKeys = [
  "connect:BatchCreateDataTableValue",
  "connect:BatchDeleteDataTableValue",
  "connect:BatchDescribeDataTableValue",
  "connect:BatchUpdateDataTableValue",
  "connect:CreateDataTable",
  "connect:CreateDataTableAttribute",
  "connect:DeleteDataTable",
  "connect:DeleteDataTableAttribute",
  "connect:DescribeDataTable",
  "connect:DescribeDataTableAttribute",
  "connect:EvaluateDataTableValues",
  "connect:ListDataTableAttributes",
  "connect:ListDataTablePrimaryValues",
  "connect:ListDataTableValues",
  "connect:ListDataTables",
  "connect:UpdateDataTableAttribute",
  "connect:UpdateDataTableMetadata",
  "connect:UpdateDataTablePrimaryValues"
] as const;
export type AmazonConnectFullApiDataTablesOperationKey = typeof AmazonConnectFullApiDataTablesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiDataTablesOperationPathParamMap {
  "connect:BatchCreateDataTableValue": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:BatchDeleteDataTableValue": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:BatchDescribeDataTableValue": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:BatchUpdateDataTableValue": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:CreateDataTable": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateDataTableAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteDataTable": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteDataTableAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue; "AttributeName": AmazonConnectFullApiPathParamValue };
  "connect:DescribeDataTable": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeDataTableAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue; "AttributeName": AmazonConnectFullApiPathParamValue };
  "connect:EvaluateDataTableValues": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:ListDataTableAttributes": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:ListDataTablePrimaryValues": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:ListDataTableValues": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:ListDataTables": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateDataTableAttribute": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue; "AttributeName": AmazonConnectFullApiPathParamValue };
  "connect:UpdateDataTableMetadata": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateDataTablePrimaryValues": { "InstanceId": AmazonConnectFullApiPathParamValue; "DataTableId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiDataTablesOperationRequestMap {
  "connect:BatchCreateDataTableValue": AmazonConnectFullApiOperationInput<"connect:BatchCreateDataTableValue">;
  "connect:BatchDeleteDataTableValue": AmazonConnectFullApiOperationInput<"connect:BatchDeleteDataTableValue">;
  "connect:BatchDescribeDataTableValue": AmazonConnectFullApiOperationInput<"connect:BatchDescribeDataTableValue">;
  "connect:BatchUpdateDataTableValue": AmazonConnectFullApiOperationInput<"connect:BatchUpdateDataTableValue">;
  "connect:CreateDataTable": AmazonConnectFullApiOperationInput<"connect:CreateDataTable">;
  "connect:CreateDataTableAttribute": AmazonConnectFullApiOperationInput<"connect:CreateDataTableAttribute">;
  "connect:DeleteDataTable": AmazonConnectFullApiOperationInput<"connect:DeleteDataTable">;
  "connect:DeleteDataTableAttribute": AmazonConnectFullApiOperationInput<"connect:DeleteDataTableAttribute">;
  "connect:DescribeDataTable": AmazonConnectFullApiOperationInput<"connect:DescribeDataTable">;
  "connect:DescribeDataTableAttribute": AmazonConnectFullApiOperationInput<"connect:DescribeDataTableAttribute">;
  "connect:EvaluateDataTableValues": AmazonConnectFullApiOperationInput<"connect:EvaluateDataTableValues">;
  "connect:ListDataTableAttributes": AmazonConnectFullApiOperationInput<"connect:ListDataTableAttributes">;
  "connect:ListDataTablePrimaryValues": AmazonConnectFullApiOperationInput<"connect:ListDataTablePrimaryValues">;
  "connect:ListDataTableValues": AmazonConnectFullApiOperationInput<"connect:ListDataTableValues">;
  "connect:ListDataTables": AmazonConnectFullApiOperationInput<"connect:ListDataTables">;
  "connect:UpdateDataTableAttribute": AmazonConnectFullApiOperationInput<"connect:UpdateDataTableAttribute">;
  "connect:UpdateDataTableMetadata": AmazonConnectFullApiOperationInput<"connect:UpdateDataTableMetadata">;
  "connect:UpdateDataTablePrimaryValues": AmazonConnectFullApiOperationInput<"connect:UpdateDataTablePrimaryValues">;
}

export interface AmazonConnectFullApiDataTablesGeneratedClient {
  BatchCreateDataTableValue(...args: AmazonConnectFullApiOperationArgs<"connect:BatchCreateDataTableValue">): Promise<AmazonConnectFullApiOperationResponseMap["connect:BatchCreateDataTableValue"]>;
  BatchDeleteDataTableValue(...args: AmazonConnectFullApiOperationArgs<"connect:BatchDeleteDataTableValue">): Promise<AmazonConnectFullApiOperationResponseMap["connect:BatchDeleteDataTableValue"]>;
  BatchDescribeDataTableValue(...args: AmazonConnectFullApiOperationArgs<"connect:BatchDescribeDataTableValue">): Promise<AmazonConnectFullApiOperationResponseMap["connect:BatchDescribeDataTableValue"]>;
  BatchUpdateDataTableValue(...args: AmazonConnectFullApiOperationArgs<"connect:BatchUpdateDataTableValue">): Promise<AmazonConnectFullApiOperationResponseMap["connect:BatchUpdateDataTableValue"]>;
  CreateDataTable(...args: AmazonConnectFullApiOperationArgs<"connect:CreateDataTable">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateDataTable"]>;
  CreateDataTableAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:CreateDataTableAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateDataTableAttribute"]>;
  DeleteDataTable(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteDataTable">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteDataTable"]>;
  DeleteDataTableAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteDataTableAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteDataTableAttribute"]>;
  DescribeDataTable(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeDataTable">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeDataTable"]>;
  DescribeDataTableAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeDataTableAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeDataTableAttribute"]>;
  EvaluateDataTableValues(...args: AmazonConnectFullApiOperationArgs<"connect:EvaluateDataTableValues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:EvaluateDataTableValues"]>;
  ListDataTableAttributes(...args: AmazonConnectFullApiOperationArgs<"connect:ListDataTableAttributes">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListDataTableAttributes"]>;
  ListDataTablePrimaryValues(...args: AmazonConnectFullApiOperationArgs<"connect:ListDataTablePrimaryValues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListDataTablePrimaryValues"]>;
  ListDataTableValues(...args: AmazonConnectFullApiOperationArgs<"connect:ListDataTableValues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListDataTableValues"]>;
  ListDataTables(...args: AmazonConnectFullApiOperationArgs<"connect:ListDataTables">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListDataTables"]>;
  UpdateDataTableAttribute(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateDataTableAttribute">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateDataTableAttribute"]>;
  UpdateDataTableMetadata(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateDataTableMetadata">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateDataTableMetadata"]>;
  UpdateDataTablePrimaryValues(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateDataTablePrimaryValues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateDataTablePrimaryValues"]>;
}

export const AmazonConnectFullApiDataTablesGeneratedFunctionNames = [
  "BatchCreateDataTableValue",
  "BatchDeleteDataTableValue",
  "BatchDescribeDataTableValue",
  "BatchUpdateDataTableValue",
  "CreateDataTable",
  "CreateDataTableAttribute",
  "DeleteDataTable",
  "DeleteDataTableAttribute",
  "DescribeDataTable",
  "DescribeDataTableAttribute",
  "EvaluateDataTableValues",
  "ListDataTableAttributes",
  "ListDataTablePrimaryValues",
  "ListDataTableValues",
  "ListDataTables",
  "UpdateDataTableAttribute",
  "UpdateDataTableMetadata",
  "UpdateDataTablePrimaryValues"
] as const satisfies readonly (keyof AmazonConnectFullApiDataTablesGeneratedClient)[];

export function createAmazonConnectFullApiDataTablesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiDataTablesGeneratedClient {
  return {
    BatchCreateDataTableValue: (...args) => callOperation("connect:BatchCreateDataTableValue", ...(args as AmazonConnectFullApiOperationArgs<"connect:BatchCreateDataTableValue">)),
    BatchDeleteDataTableValue: (...args) => callOperation("connect:BatchDeleteDataTableValue", ...(args as AmazonConnectFullApiOperationArgs<"connect:BatchDeleteDataTableValue">)),
    BatchDescribeDataTableValue: (...args) => callOperation("connect:BatchDescribeDataTableValue", ...(args as AmazonConnectFullApiOperationArgs<"connect:BatchDescribeDataTableValue">)),
    BatchUpdateDataTableValue: (...args) => callOperation("connect:BatchUpdateDataTableValue", ...(args as AmazonConnectFullApiOperationArgs<"connect:BatchUpdateDataTableValue">)),
    CreateDataTable: (...args) => callOperation("connect:CreateDataTable", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateDataTable">)),
    CreateDataTableAttribute: (...args) => callOperation("connect:CreateDataTableAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateDataTableAttribute">)),
    DeleteDataTable: (...args) => callOperation("connect:DeleteDataTable", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteDataTable">)),
    DeleteDataTableAttribute: (...args) => callOperation("connect:DeleteDataTableAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteDataTableAttribute">)),
    DescribeDataTable: (...args) => callOperation("connect:DescribeDataTable", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeDataTable">)),
    DescribeDataTableAttribute: (...args) => callOperation("connect:DescribeDataTableAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeDataTableAttribute">)),
    EvaluateDataTableValues: (...args) => callOperation("connect:EvaluateDataTableValues", ...(args as AmazonConnectFullApiOperationArgs<"connect:EvaluateDataTableValues">)),
    ListDataTableAttributes: (...args) => callOperation("connect:ListDataTableAttributes", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListDataTableAttributes">)),
    ListDataTablePrimaryValues: (...args) => callOperation("connect:ListDataTablePrimaryValues", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListDataTablePrimaryValues">)),
    ListDataTableValues: (...args) => callOperation("connect:ListDataTableValues", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListDataTableValues">)),
    ListDataTables: (...args) => callOperation("connect:ListDataTables", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListDataTables">)),
    UpdateDataTableAttribute: (...args) => callOperation("connect:UpdateDataTableAttribute", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateDataTableAttribute">)),
    UpdateDataTableMetadata: (...args) => callOperation("connect:UpdateDataTableMetadata", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateDataTableMetadata">)),
    UpdateDataTablePrimaryValues: (...args) => callOperation("connect:UpdateDataTablePrimaryValues", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateDataTablePrimaryValues">)),
  };
}
