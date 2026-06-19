// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiCustomObjectRecordsOperationKeys = [
  "AutocompleteCustomObjectRecordSearch",
  "CountCustomObjectRecords",
  "CreateCustomObjectRecord",
  "CustomObjectRecordBulkJobs",
  "CustomObjectRecordsLimit",
  "DeleteCustomObjectRecord",
  "DeleteCustomObjectRecordByExternalIdOrName",
  "FilteredSearchCustomObjectRecords",
  "IncrementalCustomObjectRecordExportCursor",
  "ListCustomObjectRecords",
  "SearchCustomObjectRecords",
  "ShowCustomObjectRecord",
  "UpdateCustomObjectRecord",
  "UpsertCustomObjectRecordByExternalIdOrName"
] as const;
export type ZendeskFullApiCustomObjectRecordsOperationKey = typeof ZendeskFullApiCustomObjectRecordsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiCustomObjectRecordsOperationPathParamMap {
  "AutocompleteCustomObjectRecordSearch": { "custom_object_key": ZendeskFullApiPathParamValue };
  "CountCustomObjectRecords": { "custom_object_key": ZendeskFullApiPathParamValue };
  "CreateCustomObjectRecord": { "custom_object_key": ZendeskFullApiPathParamValue };
  "CustomObjectRecordBulkJobs": { "custom_object_key": ZendeskFullApiPathParamValue };
  "CustomObjectRecordsLimit": {};
  "DeleteCustomObjectRecord": { "custom_object_key": ZendeskFullApiPathParamValue; "custom_object_record_id": ZendeskFullApiPathParamValue };
  "DeleteCustomObjectRecordByExternalIdOrName": { "custom_object_key": ZendeskFullApiPathParamValue };
  "FilteredSearchCustomObjectRecords": { "custom_object_key": ZendeskFullApiPathParamValue };
  "IncrementalCustomObjectRecordExportCursor": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ListCustomObjectRecords": { "custom_object_key": ZendeskFullApiPathParamValue };
  "SearchCustomObjectRecords": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ShowCustomObjectRecord": { "custom_object_key": ZendeskFullApiPathParamValue; "custom_object_record_id": ZendeskFullApiPathParamValue };
  "UpdateCustomObjectRecord": { "custom_object_key": ZendeskFullApiPathParamValue; "custom_object_record_id": ZendeskFullApiPathParamValue };
  "UpsertCustomObjectRecordByExternalIdOrName": { "custom_object_key": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiCustomObjectRecordsOperationRequestMap {
  "AutocompleteCustomObjectRecordSearch": ZendeskFullApiOperationInput<"AutocompleteCustomObjectRecordSearch">;
  "CountCustomObjectRecords": ZendeskFullApiOperationInput<"CountCustomObjectRecords">;
  "CreateCustomObjectRecord": ZendeskFullApiOperationInput<"CreateCustomObjectRecord">;
  "CustomObjectRecordBulkJobs": ZendeskFullApiOperationInput<"CustomObjectRecordBulkJobs">;
  "CustomObjectRecordsLimit": ZendeskFullApiOperationInput<"CustomObjectRecordsLimit">;
  "DeleteCustomObjectRecord": ZendeskFullApiOperationInput<"DeleteCustomObjectRecord">;
  "DeleteCustomObjectRecordByExternalIdOrName": ZendeskFullApiOperationInput<"DeleteCustomObjectRecordByExternalIdOrName">;
  "FilteredSearchCustomObjectRecords": ZendeskFullApiOperationInput<"FilteredSearchCustomObjectRecords">;
  "IncrementalCustomObjectRecordExportCursor": ZendeskFullApiOperationInput<"IncrementalCustomObjectRecordExportCursor">;
  "ListCustomObjectRecords": ZendeskFullApiOperationInput<"ListCustomObjectRecords">;
  "SearchCustomObjectRecords": ZendeskFullApiOperationInput<"SearchCustomObjectRecords">;
  "ShowCustomObjectRecord": ZendeskFullApiOperationInput<"ShowCustomObjectRecord">;
  "UpdateCustomObjectRecord": ZendeskFullApiOperationInput<"UpdateCustomObjectRecord">;
  "UpsertCustomObjectRecordByExternalIdOrName": ZendeskFullApiOperationInput<"UpsertCustomObjectRecordByExternalIdOrName">;
}

export interface ZendeskFullApiCustomObjectRecordsGeneratedClient {
  AutocompleteCustomObjectRecordSearch(...args: ZendeskFullApiOperationArgs<"AutocompleteCustomObjectRecordSearch">): Promise<ZendeskFullApiOperationResponseMap["AutocompleteCustomObjectRecordSearch"]>;
  CountCustomObjectRecords(...args: ZendeskFullApiOperationArgs<"CountCustomObjectRecords">): Promise<ZendeskFullApiOperationResponseMap["CountCustomObjectRecords"]>;
  CreateCustomObjectRecord(...args: ZendeskFullApiOperationArgs<"CreateCustomObjectRecord">): Promise<ZendeskFullApiOperationResponseMap["CreateCustomObjectRecord"]>;
  CustomObjectRecordBulkJobs(...args: ZendeskFullApiOperationArgs<"CustomObjectRecordBulkJobs">): Promise<ZendeskFullApiOperationResponseMap["CustomObjectRecordBulkJobs"]>;
  CustomObjectRecordsLimit(...args: ZendeskFullApiOperationArgs<"CustomObjectRecordsLimit">): Promise<ZendeskFullApiOperationResponseMap["CustomObjectRecordsLimit"]>;
  DeleteCustomObjectRecord(...args: ZendeskFullApiOperationArgs<"DeleteCustomObjectRecord">): Promise<ZendeskFullApiOperationResponseMap["DeleteCustomObjectRecord"]>;
  DeleteCustomObjectRecordByExternalIdOrName(...args: ZendeskFullApiOperationArgs<"DeleteCustomObjectRecordByExternalIdOrName">): Promise<ZendeskFullApiOperationResponseMap["DeleteCustomObjectRecordByExternalIdOrName"]>;
  FilteredSearchCustomObjectRecords(...args: ZendeskFullApiOperationArgs<"FilteredSearchCustomObjectRecords">): Promise<ZendeskFullApiOperationResponseMap["FilteredSearchCustomObjectRecords"]>;
  IncrementalCustomObjectRecordExportCursor(...args: ZendeskFullApiOperationArgs<"IncrementalCustomObjectRecordExportCursor">): Promise<ZendeskFullApiOperationResponseMap["IncrementalCustomObjectRecordExportCursor"]>;
  ListCustomObjectRecords(...args: ZendeskFullApiOperationArgs<"ListCustomObjectRecords">): Promise<ZendeskFullApiOperationResponseMap["ListCustomObjectRecords"]>;
  SearchCustomObjectRecords(...args: ZendeskFullApiOperationArgs<"SearchCustomObjectRecords">): Promise<ZendeskFullApiOperationResponseMap["SearchCustomObjectRecords"]>;
  ShowCustomObjectRecord(...args: ZendeskFullApiOperationArgs<"ShowCustomObjectRecord">): Promise<ZendeskFullApiOperationResponseMap["ShowCustomObjectRecord"]>;
  UpdateCustomObjectRecord(...args: ZendeskFullApiOperationArgs<"UpdateCustomObjectRecord">): Promise<ZendeskFullApiOperationResponseMap["UpdateCustomObjectRecord"]>;
  UpsertCustomObjectRecordByExternalIdOrName(...args: ZendeskFullApiOperationArgs<"UpsertCustomObjectRecordByExternalIdOrName">): Promise<ZendeskFullApiOperationResponseMap["UpsertCustomObjectRecordByExternalIdOrName"]>;
}

export const ZendeskFullApiCustomObjectRecordsGeneratedFunctionNames = [
  "AutocompleteCustomObjectRecordSearch",
  "CountCustomObjectRecords",
  "CreateCustomObjectRecord",
  "CustomObjectRecordBulkJobs",
  "CustomObjectRecordsLimit",
  "DeleteCustomObjectRecord",
  "DeleteCustomObjectRecordByExternalIdOrName",
  "FilteredSearchCustomObjectRecords",
  "IncrementalCustomObjectRecordExportCursor",
  "ListCustomObjectRecords",
  "SearchCustomObjectRecords",
  "ShowCustomObjectRecord",
  "UpdateCustomObjectRecord",
  "UpsertCustomObjectRecordByExternalIdOrName"
] as const satisfies readonly (keyof ZendeskFullApiCustomObjectRecordsGeneratedClient)[];

export function createZendeskFullApiCustomObjectRecordsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiCustomObjectRecordsGeneratedClient {
  return {
    AutocompleteCustomObjectRecordSearch: (...args) => callOperation("AutocompleteCustomObjectRecordSearch", ...(args as ZendeskFullApiOperationArgs<"AutocompleteCustomObjectRecordSearch">)),
    CountCustomObjectRecords: (...args) => callOperation("CountCustomObjectRecords", ...(args as ZendeskFullApiOperationArgs<"CountCustomObjectRecords">)),
    CreateCustomObjectRecord: (...args) => callOperation("CreateCustomObjectRecord", ...(args as ZendeskFullApiOperationArgs<"CreateCustomObjectRecord">)),
    CustomObjectRecordBulkJobs: (...args) => callOperation("CustomObjectRecordBulkJobs", ...(args as ZendeskFullApiOperationArgs<"CustomObjectRecordBulkJobs">)),
    CustomObjectRecordsLimit: (...args) => callOperation("CustomObjectRecordsLimit", ...(args as ZendeskFullApiOperationArgs<"CustomObjectRecordsLimit">)),
    DeleteCustomObjectRecord: (...args) => callOperation("DeleteCustomObjectRecord", ...(args as ZendeskFullApiOperationArgs<"DeleteCustomObjectRecord">)),
    DeleteCustomObjectRecordByExternalIdOrName: (...args) => callOperation("DeleteCustomObjectRecordByExternalIdOrName", ...(args as ZendeskFullApiOperationArgs<"DeleteCustomObjectRecordByExternalIdOrName">)),
    FilteredSearchCustomObjectRecords: (...args) => callOperation("FilteredSearchCustomObjectRecords", ...(args as ZendeskFullApiOperationArgs<"FilteredSearchCustomObjectRecords">)),
    IncrementalCustomObjectRecordExportCursor: (...args) => callOperation("IncrementalCustomObjectRecordExportCursor", ...(args as ZendeskFullApiOperationArgs<"IncrementalCustomObjectRecordExportCursor">)),
    ListCustomObjectRecords: (...args) => callOperation("ListCustomObjectRecords", ...(args as ZendeskFullApiOperationArgs<"ListCustomObjectRecords">)),
    SearchCustomObjectRecords: (...args) => callOperation("SearchCustomObjectRecords", ...(args as ZendeskFullApiOperationArgs<"SearchCustomObjectRecords">)),
    ShowCustomObjectRecord: (...args) => callOperation("ShowCustomObjectRecord", ...(args as ZendeskFullApiOperationArgs<"ShowCustomObjectRecord">)),
    UpdateCustomObjectRecord: (...args) => callOperation("UpdateCustomObjectRecord", ...(args as ZendeskFullApiOperationArgs<"UpdateCustomObjectRecord">)),
    UpsertCustomObjectRecordByExternalIdOrName: (...args) => callOperation("UpsertCustomObjectRecordByExternalIdOrName", ...(args as ZendeskFullApiOperationArgs<"UpsertCustomObjectRecordByExternalIdOrName">)),
  };
}
