// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiBusinessRulesOperationKeys = [
  "deleteBusinessrulesDecisiontable",
  "deleteBusinessrulesDecisiontableExport",
  "deleteBusinessrulesDecisiontableImport",
  "deleteBusinessrulesDecisiontableVersion",
  "deleteBusinessrulesDecisiontableVersionRow",
  "deleteBusinessrulesSchema",
  "getBusinessrulesDecisiontable",
  "getBusinessrulesDecisiontableExport",
  "getBusinessrulesDecisiontableExports",
  "getBusinessrulesDecisiontableImport",
  "getBusinessrulesDecisiontableImports",
  "getBusinessrulesDecisiontables",
  "getBusinessrulesDecisiontablesSearch",
  "getBusinessrulesDecisiontableVersion",
  "getBusinessrulesDecisiontableVersionRow",
  "getBusinessrulesDecisiontableVersionRows",
  "getBusinessrulesDecisiontableVersions",
  "getBusinessrulesSchema",
  "getBusinessrulesSchemas",
  "getBusinessrulesSchemasCoretype",
  "getBusinessrulesSchemasCoretypes",
  "patchBusinessrulesDecisiontable",
  "patchBusinessrulesDecisiontableImport",
  "patchBusinessrulesDecisiontableVersion",
  "postBusinessrulesDecisiontableExecute",
  "postBusinessrulesDecisiontableExports",
  "postBusinessrulesDecisiontableImports",
  "postBusinessrulesDecisiontables",
  "postBusinessrulesDecisiontableVersionCopy",
  "postBusinessrulesDecisiontableVersionExecute",
  "postBusinessrulesDecisiontableVersionRows",
  "postBusinessrulesDecisiontableVersionRowsBulkAdd",
  "postBusinessrulesDecisiontableVersionRowsBulkRemove",
  "postBusinessrulesDecisiontableVersionRowsBulkUpdate",
  "postBusinessrulesDecisiontableVersionRowsSearch",
  "postBusinessrulesDecisiontableVersions",
  "postBusinessrulesDecisiontableVersionSync",
  "postBusinessrulesSchemas",
  "putBusinessrulesDecisiontableVersionPublish",
  "putBusinessrulesDecisiontableVersionRow",
  "putBusinessrulesSchema"
] as const;
export type GenesysCloudFullApiBusinessRulesOperationKey = typeof GenesysCloudFullApiBusinessRulesOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiBusinessRulesOperationPathParamMap {
  "deleteBusinessrulesDecisiontable": { "tableId": GenesysCloudFullApiPathParamValue };
  "deleteBusinessrulesDecisiontableExport": { "tableId": GenesysCloudFullApiPathParamValue; "exportJobId": GenesysCloudFullApiPathParamValue };
  "deleteBusinessrulesDecisiontableImport": { "tableId": GenesysCloudFullApiPathParamValue; "importJobId": GenesysCloudFullApiPathParamValue };
  "deleteBusinessrulesDecisiontableVersion": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "deleteBusinessrulesDecisiontableVersionRow": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue; "rowId": GenesysCloudFullApiPathParamValue };
  "deleteBusinessrulesSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesDecisiontable": { "tableId": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesDecisiontableExport": { "tableId": GenesysCloudFullApiPathParamValue; "exportJobId": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesDecisiontableExports": { "tableId": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesDecisiontableImport": { "tableId": GenesysCloudFullApiPathParamValue; "importJobId": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesDecisiontableImports": { "tableId": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesDecisiontables": {};
  "getBusinessrulesDecisiontablesSearch": {};
  "getBusinessrulesDecisiontableVersion": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesDecisiontableVersionRow": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue; "rowId": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesDecisiontableVersionRows": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesDecisiontableVersions": { "tableId": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesSchemas": {};
  "getBusinessrulesSchemasCoretype": { "coreTypeName": GenesysCloudFullApiPathParamValue };
  "getBusinessrulesSchemasCoretypes": {};
  "patchBusinessrulesDecisiontable": { "tableId": GenesysCloudFullApiPathParamValue };
  "patchBusinessrulesDecisiontableImport": { "tableId": GenesysCloudFullApiPathParamValue; "importJobId": GenesysCloudFullApiPathParamValue };
  "patchBusinessrulesDecisiontableVersion": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableExecute": { "tableId": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableExports": { "tableId": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableImports": { "tableId": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontables": {};
  "postBusinessrulesDecisiontableVersionCopy": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableVersionExecute": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableVersionRows": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableVersionRowsBulkAdd": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableVersionRowsBulkRemove": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableVersionRowsBulkUpdate": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableVersionRowsSearch": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableVersions": { "tableId": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesDecisiontableVersionSync": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "postBusinessrulesSchemas": {};
  "putBusinessrulesDecisiontableVersionPublish": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue };
  "putBusinessrulesDecisiontableVersionRow": { "tableId": GenesysCloudFullApiPathParamValue; "tableVersion": GenesysCloudFullApiPathParamValue; "rowId": GenesysCloudFullApiPathParamValue };
  "putBusinessrulesSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiBusinessRulesOperationRequestMap {
  "deleteBusinessrulesDecisiontable": GenesysCloudFullApiOperationInput<"deleteBusinessrulesDecisiontable">;
  "deleteBusinessrulesDecisiontableExport": GenesysCloudFullApiOperationInput<"deleteBusinessrulesDecisiontableExport">;
  "deleteBusinessrulesDecisiontableImport": GenesysCloudFullApiOperationInput<"deleteBusinessrulesDecisiontableImport">;
  "deleteBusinessrulesDecisiontableVersion": GenesysCloudFullApiOperationInput<"deleteBusinessrulesDecisiontableVersion">;
  "deleteBusinessrulesDecisiontableVersionRow": GenesysCloudFullApiOperationInput<"deleteBusinessrulesDecisiontableVersionRow">;
  "deleteBusinessrulesSchema": GenesysCloudFullApiOperationInput<"deleteBusinessrulesSchema">;
  "getBusinessrulesDecisiontable": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontable">;
  "getBusinessrulesDecisiontableExport": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontableExport">;
  "getBusinessrulesDecisiontableExports": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontableExports">;
  "getBusinessrulesDecisiontableImport": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontableImport">;
  "getBusinessrulesDecisiontableImports": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontableImports">;
  "getBusinessrulesDecisiontables": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontables">;
  "getBusinessrulesDecisiontablesSearch": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontablesSearch">;
  "getBusinessrulesDecisiontableVersion": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontableVersion">;
  "getBusinessrulesDecisiontableVersionRow": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontableVersionRow">;
  "getBusinessrulesDecisiontableVersionRows": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontableVersionRows">;
  "getBusinessrulesDecisiontableVersions": GenesysCloudFullApiOperationInput<"getBusinessrulesDecisiontableVersions">;
  "getBusinessrulesSchema": GenesysCloudFullApiOperationInput<"getBusinessrulesSchema">;
  "getBusinessrulesSchemas": GenesysCloudFullApiOperationInput<"getBusinessrulesSchemas">;
  "getBusinessrulesSchemasCoretype": GenesysCloudFullApiOperationInput<"getBusinessrulesSchemasCoretype">;
  "getBusinessrulesSchemasCoretypes": GenesysCloudFullApiOperationInput<"getBusinessrulesSchemasCoretypes">;
  "patchBusinessrulesDecisiontable": GenesysCloudFullApiOperationInput<"patchBusinessrulesDecisiontable">;
  "patchBusinessrulesDecisiontableImport": GenesysCloudFullApiOperationInput<"patchBusinessrulesDecisiontableImport">;
  "patchBusinessrulesDecisiontableVersion": GenesysCloudFullApiOperationInput<"patchBusinessrulesDecisiontableVersion">;
  "postBusinessrulesDecisiontableExecute": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableExecute">;
  "postBusinessrulesDecisiontableExports": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableExports">;
  "postBusinessrulesDecisiontableImports": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableImports">;
  "postBusinessrulesDecisiontables": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontables">;
  "postBusinessrulesDecisiontableVersionCopy": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableVersionCopy">;
  "postBusinessrulesDecisiontableVersionExecute": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableVersionExecute">;
  "postBusinessrulesDecisiontableVersionRows": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableVersionRows">;
  "postBusinessrulesDecisiontableVersionRowsBulkAdd": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableVersionRowsBulkAdd">;
  "postBusinessrulesDecisiontableVersionRowsBulkRemove": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableVersionRowsBulkRemove">;
  "postBusinessrulesDecisiontableVersionRowsBulkUpdate": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableVersionRowsBulkUpdate">;
  "postBusinessrulesDecisiontableVersionRowsSearch": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableVersionRowsSearch">;
  "postBusinessrulesDecisiontableVersions": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableVersions">;
  "postBusinessrulesDecisiontableVersionSync": GenesysCloudFullApiOperationInput<"postBusinessrulesDecisiontableVersionSync">;
  "postBusinessrulesSchemas": GenesysCloudFullApiOperationInput<"postBusinessrulesSchemas">;
  "putBusinessrulesDecisiontableVersionPublish": GenesysCloudFullApiOperationInput<"putBusinessrulesDecisiontableVersionPublish">;
  "putBusinessrulesDecisiontableVersionRow": GenesysCloudFullApiOperationInput<"putBusinessrulesDecisiontableVersionRow">;
  "putBusinessrulesSchema": GenesysCloudFullApiOperationInput<"putBusinessrulesSchema">;
}

export interface GenesysCloudFullApiBusinessRulesGeneratedClient {
  DeleteBusinessrulesDecisiontable(...args: GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontable">): Promise<GenesysCloudFullApiOperationResponseMap["deleteBusinessrulesDecisiontable"]>;
  DeleteBusinessrulesDecisiontableExport(...args: GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontableExport">): Promise<GenesysCloudFullApiOperationResponseMap["deleteBusinessrulesDecisiontableExport"]>;
  DeleteBusinessrulesDecisiontableImport(...args: GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontableImport">): Promise<GenesysCloudFullApiOperationResponseMap["deleteBusinessrulesDecisiontableImport"]>;
  DeleteBusinessrulesDecisiontableVersion(...args: GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontableVersion">): Promise<GenesysCloudFullApiOperationResponseMap["deleteBusinessrulesDecisiontableVersion"]>;
  DeleteBusinessrulesDecisiontableVersionRow(...args: GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontableVersionRow">): Promise<GenesysCloudFullApiOperationResponseMap["deleteBusinessrulesDecisiontableVersionRow"]>;
  DeleteBusinessrulesSchema(...args: GenesysCloudFullApiOperationArgs<"deleteBusinessrulesSchema">): Promise<GenesysCloudFullApiOperationResponseMap["deleteBusinessrulesSchema"]>;
  GetBusinessrulesDecisiontable(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontable">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontable"]>;
  GetBusinessrulesDecisiontableExport(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableExport">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontableExport"]>;
  GetBusinessrulesDecisiontableExports(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableExports">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontableExports"]>;
  GetBusinessrulesDecisiontableImport(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableImport">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontableImport"]>;
  GetBusinessrulesDecisiontableImports(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableImports">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontableImports"]>;
  GetBusinessrulesDecisiontables(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontables">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontables"]>;
  GetBusinessrulesDecisiontablesSearch(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontablesSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontablesSearch"]>;
  GetBusinessrulesDecisiontableVersion(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontableVersion"]>;
  GetBusinessrulesDecisiontableVersionRow(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableVersionRow">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontableVersionRow"]>;
  GetBusinessrulesDecisiontableVersionRows(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableVersionRows">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontableVersionRows"]>;
  GetBusinessrulesDecisiontableVersions(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesDecisiontableVersions"]>;
  GetBusinessrulesSchema(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesSchema"]>;
  GetBusinessrulesSchemas(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesSchemas"]>;
  GetBusinessrulesSchemasCoretype(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesSchemasCoretype">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesSchemasCoretype"]>;
  GetBusinessrulesSchemasCoretypes(...args: GenesysCloudFullApiOperationArgs<"getBusinessrulesSchemasCoretypes">): Promise<GenesysCloudFullApiOperationResponseMap["getBusinessrulesSchemasCoretypes"]>;
  PatchBusinessrulesDecisiontable(...args: GenesysCloudFullApiOperationArgs<"patchBusinessrulesDecisiontable">): Promise<GenesysCloudFullApiOperationResponseMap["patchBusinessrulesDecisiontable"]>;
  PatchBusinessrulesDecisiontableImport(...args: GenesysCloudFullApiOperationArgs<"patchBusinessrulesDecisiontableImport">): Promise<GenesysCloudFullApiOperationResponseMap["patchBusinessrulesDecisiontableImport"]>;
  PatchBusinessrulesDecisiontableVersion(...args: GenesysCloudFullApiOperationArgs<"patchBusinessrulesDecisiontableVersion">): Promise<GenesysCloudFullApiOperationResponseMap["patchBusinessrulesDecisiontableVersion"]>;
  PostBusinessrulesDecisiontableExecute(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableExecute">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableExecute"]>;
  PostBusinessrulesDecisiontableExports(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableExports">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableExports"]>;
  PostBusinessrulesDecisiontableImports(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableImports">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableImports"]>;
  PostBusinessrulesDecisiontables(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontables">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontables"]>;
  PostBusinessrulesDecisiontableVersionCopy(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionCopy">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableVersionCopy"]>;
  PostBusinessrulesDecisiontableVersionExecute(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionExecute">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableVersionExecute"]>;
  PostBusinessrulesDecisiontableVersionRows(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRows">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableVersionRows"]>;
  PostBusinessrulesDecisiontableVersionRowsBulkAdd(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRowsBulkAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableVersionRowsBulkAdd"]>;
  PostBusinessrulesDecisiontableVersionRowsBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRowsBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableVersionRowsBulkRemove"]>;
  PostBusinessrulesDecisiontableVersionRowsBulkUpdate(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRowsBulkUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableVersionRowsBulkUpdate"]>;
  PostBusinessrulesDecisiontableVersionRowsSearch(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRowsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableVersionRowsSearch"]>;
  PostBusinessrulesDecisiontableVersions(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersions">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableVersions"]>;
  PostBusinessrulesDecisiontableVersionSync(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionSync">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesDecisiontableVersionSync"]>;
  PostBusinessrulesSchemas(...args: GenesysCloudFullApiOperationArgs<"postBusinessrulesSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["postBusinessrulesSchemas"]>;
  PutBusinessrulesDecisiontableVersionPublish(...args: GenesysCloudFullApiOperationArgs<"putBusinessrulesDecisiontableVersionPublish">): Promise<GenesysCloudFullApiOperationResponseMap["putBusinessrulesDecisiontableVersionPublish"]>;
  PutBusinessrulesDecisiontableVersionRow(...args: GenesysCloudFullApiOperationArgs<"putBusinessrulesDecisiontableVersionRow">): Promise<GenesysCloudFullApiOperationResponseMap["putBusinessrulesDecisiontableVersionRow"]>;
  PutBusinessrulesSchema(...args: GenesysCloudFullApiOperationArgs<"putBusinessrulesSchema">): Promise<GenesysCloudFullApiOperationResponseMap["putBusinessrulesSchema"]>;
}

export const GenesysCloudFullApiBusinessRulesGeneratedFunctionNames = [
  "DeleteBusinessrulesDecisiontable",
  "DeleteBusinessrulesDecisiontableExport",
  "DeleteBusinessrulesDecisiontableImport",
  "DeleteBusinessrulesDecisiontableVersion",
  "DeleteBusinessrulesDecisiontableVersionRow",
  "DeleteBusinessrulesSchema",
  "GetBusinessrulesDecisiontable",
  "GetBusinessrulesDecisiontableExport",
  "GetBusinessrulesDecisiontableExports",
  "GetBusinessrulesDecisiontableImport",
  "GetBusinessrulesDecisiontableImports",
  "GetBusinessrulesDecisiontables",
  "GetBusinessrulesDecisiontablesSearch",
  "GetBusinessrulesDecisiontableVersion",
  "GetBusinessrulesDecisiontableVersionRow",
  "GetBusinessrulesDecisiontableVersionRows",
  "GetBusinessrulesDecisiontableVersions",
  "GetBusinessrulesSchema",
  "GetBusinessrulesSchemas",
  "GetBusinessrulesSchemasCoretype",
  "GetBusinessrulesSchemasCoretypes",
  "PatchBusinessrulesDecisiontable",
  "PatchBusinessrulesDecisiontableImport",
  "PatchBusinessrulesDecisiontableVersion",
  "PostBusinessrulesDecisiontableExecute",
  "PostBusinessrulesDecisiontableExports",
  "PostBusinessrulesDecisiontableImports",
  "PostBusinessrulesDecisiontables",
  "PostBusinessrulesDecisiontableVersionCopy",
  "PostBusinessrulesDecisiontableVersionExecute",
  "PostBusinessrulesDecisiontableVersionRows",
  "PostBusinessrulesDecisiontableVersionRowsBulkAdd",
  "PostBusinessrulesDecisiontableVersionRowsBulkRemove",
  "PostBusinessrulesDecisiontableVersionRowsBulkUpdate",
  "PostBusinessrulesDecisiontableVersionRowsSearch",
  "PostBusinessrulesDecisiontableVersions",
  "PostBusinessrulesDecisiontableVersionSync",
  "PostBusinessrulesSchemas",
  "PutBusinessrulesDecisiontableVersionPublish",
  "PutBusinessrulesDecisiontableVersionRow",
  "PutBusinessrulesSchema"
] as const satisfies readonly (keyof GenesysCloudFullApiBusinessRulesGeneratedClient)[];

export function createGenesysCloudFullApiBusinessRulesGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiBusinessRulesGeneratedClient {
  return {
    DeleteBusinessrulesDecisiontable: (...args) => callOperation("deleteBusinessrulesDecisiontable", ...(args as GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontable">)),
    DeleteBusinessrulesDecisiontableExport: (...args) => callOperation("deleteBusinessrulesDecisiontableExport", ...(args as GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontableExport">)),
    DeleteBusinessrulesDecisiontableImport: (...args) => callOperation("deleteBusinessrulesDecisiontableImport", ...(args as GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontableImport">)),
    DeleteBusinessrulesDecisiontableVersion: (...args) => callOperation("deleteBusinessrulesDecisiontableVersion", ...(args as GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontableVersion">)),
    DeleteBusinessrulesDecisiontableVersionRow: (...args) => callOperation("deleteBusinessrulesDecisiontableVersionRow", ...(args as GenesysCloudFullApiOperationArgs<"deleteBusinessrulesDecisiontableVersionRow">)),
    DeleteBusinessrulesSchema: (...args) => callOperation("deleteBusinessrulesSchema", ...(args as GenesysCloudFullApiOperationArgs<"deleteBusinessrulesSchema">)),
    GetBusinessrulesDecisiontable: (...args) => callOperation("getBusinessrulesDecisiontable", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontable">)),
    GetBusinessrulesDecisiontableExport: (...args) => callOperation("getBusinessrulesDecisiontableExport", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableExport">)),
    GetBusinessrulesDecisiontableExports: (...args) => callOperation("getBusinessrulesDecisiontableExports", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableExports">)),
    GetBusinessrulesDecisiontableImport: (...args) => callOperation("getBusinessrulesDecisiontableImport", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableImport">)),
    GetBusinessrulesDecisiontableImports: (...args) => callOperation("getBusinessrulesDecisiontableImports", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableImports">)),
    GetBusinessrulesDecisiontables: (...args) => callOperation("getBusinessrulesDecisiontables", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontables">)),
    GetBusinessrulesDecisiontablesSearch: (...args) => callOperation("getBusinessrulesDecisiontablesSearch", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontablesSearch">)),
    GetBusinessrulesDecisiontableVersion: (...args) => callOperation("getBusinessrulesDecisiontableVersion", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableVersion">)),
    GetBusinessrulesDecisiontableVersionRow: (...args) => callOperation("getBusinessrulesDecisiontableVersionRow", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableVersionRow">)),
    GetBusinessrulesDecisiontableVersionRows: (...args) => callOperation("getBusinessrulesDecisiontableVersionRows", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableVersionRows">)),
    GetBusinessrulesDecisiontableVersions: (...args) => callOperation("getBusinessrulesDecisiontableVersions", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesDecisiontableVersions">)),
    GetBusinessrulesSchema: (...args) => callOperation("getBusinessrulesSchema", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesSchema">)),
    GetBusinessrulesSchemas: (...args) => callOperation("getBusinessrulesSchemas", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesSchemas">)),
    GetBusinessrulesSchemasCoretype: (...args) => callOperation("getBusinessrulesSchemasCoretype", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesSchemasCoretype">)),
    GetBusinessrulesSchemasCoretypes: (...args) => callOperation("getBusinessrulesSchemasCoretypes", ...(args as GenesysCloudFullApiOperationArgs<"getBusinessrulesSchemasCoretypes">)),
    PatchBusinessrulesDecisiontable: (...args) => callOperation("patchBusinessrulesDecisiontable", ...(args as GenesysCloudFullApiOperationArgs<"patchBusinessrulesDecisiontable">)),
    PatchBusinessrulesDecisiontableImport: (...args) => callOperation("patchBusinessrulesDecisiontableImport", ...(args as GenesysCloudFullApiOperationArgs<"patchBusinessrulesDecisiontableImport">)),
    PatchBusinessrulesDecisiontableVersion: (...args) => callOperation("patchBusinessrulesDecisiontableVersion", ...(args as GenesysCloudFullApiOperationArgs<"patchBusinessrulesDecisiontableVersion">)),
    PostBusinessrulesDecisiontableExecute: (...args) => callOperation("postBusinessrulesDecisiontableExecute", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableExecute">)),
    PostBusinessrulesDecisiontableExports: (...args) => callOperation("postBusinessrulesDecisiontableExports", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableExports">)),
    PostBusinessrulesDecisiontableImports: (...args) => callOperation("postBusinessrulesDecisiontableImports", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableImports">)),
    PostBusinessrulesDecisiontables: (...args) => callOperation("postBusinessrulesDecisiontables", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontables">)),
    PostBusinessrulesDecisiontableVersionCopy: (...args) => callOperation("postBusinessrulesDecisiontableVersionCopy", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionCopy">)),
    PostBusinessrulesDecisiontableVersionExecute: (...args) => callOperation("postBusinessrulesDecisiontableVersionExecute", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionExecute">)),
    PostBusinessrulesDecisiontableVersionRows: (...args) => callOperation("postBusinessrulesDecisiontableVersionRows", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRows">)),
    PostBusinessrulesDecisiontableVersionRowsBulkAdd: (...args) => callOperation("postBusinessrulesDecisiontableVersionRowsBulkAdd", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRowsBulkAdd">)),
    PostBusinessrulesDecisiontableVersionRowsBulkRemove: (...args) => callOperation("postBusinessrulesDecisiontableVersionRowsBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRowsBulkRemove">)),
    PostBusinessrulesDecisiontableVersionRowsBulkUpdate: (...args) => callOperation("postBusinessrulesDecisiontableVersionRowsBulkUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRowsBulkUpdate">)),
    PostBusinessrulesDecisiontableVersionRowsSearch: (...args) => callOperation("postBusinessrulesDecisiontableVersionRowsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionRowsSearch">)),
    PostBusinessrulesDecisiontableVersions: (...args) => callOperation("postBusinessrulesDecisiontableVersions", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersions">)),
    PostBusinessrulesDecisiontableVersionSync: (...args) => callOperation("postBusinessrulesDecisiontableVersionSync", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesDecisiontableVersionSync">)),
    PostBusinessrulesSchemas: (...args) => callOperation("postBusinessrulesSchemas", ...(args as GenesysCloudFullApiOperationArgs<"postBusinessrulesSchemas">)),
    PutBusinessrulesDecisiontableVersionPublish: (...args) => callOperation("putBusinessrulesDecisiontableVersionPublish", ...(args as GenesysCloudFullApiOperationArgs<"putBusinessrulesDecisiontableVersionPublish">)),
    PutBusinessrulesDecisiontableVersionRow: (...args) => callOperation("putBusinessrulesDecisiontableVersionRow", ...(args as GenesysCloudFullApiOperationArgs<"putBusinessrulesDecisiontableVersionRow">)),
    PutBusinessrulesSchema: (...args) => callOperation("putBusinessrulesSchema", ...(args as GenesysCloudFullApiOperationArgs<"putBusinessrulesSchema">)),
  };
}
