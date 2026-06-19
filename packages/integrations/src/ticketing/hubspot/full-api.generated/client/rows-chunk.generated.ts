// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiRowsOperationKeys = [
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_getTableRows",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_createTableRow",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/batch/read_readTableRows",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/clone_cloneDraftTableRows",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/create_createDraftTableRows",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/purge_purgeDraftTableRows",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/read_readDraftTableRows",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/replace_replaceDraftTableRows",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/update_updateDraftTableRows",
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}_getTableRow",
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_getDraftTableRowById",
  "cms:hubdb:2026-03:put-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_replaceDraftTableRow",
  "cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_purgeDraftTableRow",
  "cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_updateDraftTableRow",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft/clone_cloneDraftTableRow"
] as const;
export type HubSpotFullApiRowsOperationKey = typeof HubSpotFullApiRowsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiRowsOperationPathParamMap {
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_getTableRows": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_createTableRow": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/batch/read_readTableRows": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/clone_cloneDraftTableRows": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/create_createDraftTableRows": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/purge_purgeDraftTableRows": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/read_readDraftTableRows": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/replace_replaceDraftTableRows": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/update_updateDraftTableRows": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}_getTableRow": { "tableIdOrName": HubSpotFullApiPathParamValue; "rowId": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_getDraftTableRowById": { "tableIdOrName": HubSpotFullApiPathParamValue; "rowId": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:put-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_replaceDraftTableRow": { "tableIdOrName": HubSpotFullApiPathParamValue; "rowId": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_purgeDraftTableRow": { "tableIdOrName": HubSpotFullApiPathParamValue; "rowId": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_updateDraftTableRow": { "tableIdOrName": HubSpotFullApiPathParamValue; "rowId": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft/clone_cloneDraftTableRow": { "tableIdOrName": HubSpotFullApiPathParamValue; "rowId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiRowsOperationRequestMap {
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_getTableRows": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_getTableRows">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_createTableRow": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_createTableRow">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/batch/read_readTableRows": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/batch/read_readTableRows">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/clone_cloneDraftTableRows": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/clone_cloneDraftTableRows">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/create_createDraftTableRows": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/create_createDraftTableRows">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/purge_purgeDraftTableRows": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/purge_purgeDraftTableRows">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/read_readDraftTableRows": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/read_readDraftTableRows">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/replace_replaceDraftTableRows": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/replace_replaceDraftTableRows">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/update_updateDraftTableRows": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/update_updateDraftTableRows">;
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}_getTableRow": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}_getTableRow">;
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_getDraftTableRowById": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_getDraftTableRowById">;
  "cms:hubdb:2026-03:put-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_replaceDraftTableRow": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:put-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_replaceDraftTableRow">;
  "cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_purgeDraftTableRow": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_purgeDraftTableRow">;
  "cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_updateDraftTableRow": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_updateDraftTableRow">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft/clone_cloneDraftTableRow": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft/clone_cloneDraftTableRow">;
}

export interface HubSpotFullApiRowsGeneratedClient {
  HubdbGetCmsHubdb202603TablesTableIdOrNameRowsGetTableRows(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_getTableRows">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_getTableRows"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameRowsCreateTableRow(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_createTableRow">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_createTableRow"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameRowsBatchReadReadTableRows(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/batch/read_readTableRows">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/batch/read_readTableRows"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchCloneCloneDraftTableRows(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/clone_cloneDraftTableRows">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/clone_cloneDraftTableRows"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchCreateCreateDraftTableRows(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/create_createDraftTableRows">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/create_createDraftTableRows"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchPurgePurgeDraftTableRows(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/purge_purgeDraftTableRows">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/purge_purgeDraftTableRows"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchReadReadDraftTableRows(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/read_readDraftTableRows">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/read_readDraftTableRows"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchReplaceReplaceDraftTableRows(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/replace_replaceDraftTableRows">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/replace_replaceDraftTableRows"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchUpdateUpdateDraftTableRows(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/update_updateDraftTableRows">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/update_updateDraftTableRows"]>;
  HubdbGetCmsHubdb202603TablesTableIdOrNameRowsRowIdGetTableRow(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}_getTableRow">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}_getTableRow"]>;
  HubdbGetCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftGetDraftTableRowById(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_getDraftTableRowById">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_getDraftTableRowById"]>;
  HubdbPutCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftReplaceDraftTableRow(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:put-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_replaceDraftTableRow">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:put-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_replaceDraftTableRow"]>;
  HubdbDeleteCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftPurgeDraftTableRow(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_purgeDraftTableRow">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_purgeDraftTableRow"]>;
  HubdbPatchCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftUpdateDraftTableRow(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_updateDraftTableRow">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_updateDraftTableRow"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftCloneCloneDraftTableRow(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft/clone_cloneDraftTableRow">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft/clone_cloneDraftTableRow"]>;
}

export const HubSpotFullApiRowsGeneratedFunctionNames = [
  "HubdbGetCmsHubdb202603TablesTableIdOrNameRowsGetTableRows",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameRowsCreateTableRow",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameRowsBatchReadReadTableRows",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchCloneCloneDraftTableRows",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchCreateCreateDraftTableRows",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchPurgePurgeDraftTableRows",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchReadReadDraftTableRows",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchReplaceReplaceDraftTableRows",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchUpdateUpdateDraftTableRows",
  "HubdbGetCmsHubdb202603TablesTableIdOrNameRowsRowIdGetTableRow",
  "HubdbGetCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftGetDraftTableRowById",
  "HubdbPutCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftReplaceDraftTableRow",
  "HubdbDeleteCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftPurgeDraftTableRow",
  "HubdbPatchCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftUpdateDraftTableRow",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftCloneCloneDraftTableRow"
] as const satisfies readonly (keyof HubSpotFullApiRowsGeneratedClient)[];

export function createHubSpotFullApiRowsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiRowsGeneratedClient {
  return {
    HubdbGetCmsHubdb202603TablesTableIdOrNameRowsGetTableRows: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_getTableRows", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_getTableRows">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameRowsCreateTableRow: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_createTableRow", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows_createTableRow">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameRowsBatchReadReadTableRows: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/batch/read_readTableRows", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/batch/read_readTableRows">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchCloneCloneDraftTableRows: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/clone_cloneDraftTableRows", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/clone_cloneDraftTableRows">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchCreateCreateDraftTableRows: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/create_createDraftTableRows", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/create_createDraftTableRows">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchPurgePurgeDraftTableRows: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/purge_purgeDraftTableRows", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/purge_purgeDraftTableRows">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchReadReadDraftTableRows: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/read_readDraftTableRows", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/read_readDraftTableRows">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchReplaceReplaceDraftTableRows: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/replace_replaceDraftTableRows", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/replace_replaceDraftTableRows">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameRowsDraftBatchUpdateUpdateDraftTableRows: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/update_updateDraftTableRows", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft/batch/update_updateDraftTableRows">)),
    HubdbGetCmsHubdb202603TablesTableIdOrNameRowsRowIdGetTableRow: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}_getTableRow", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}_getTableRow">)),
    HubdbGetCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftGetDraftTableRowById: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_getDraftTableRowById", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_getDraftTableRowById">)),
    HubdbPutCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftReplaceDraftTableRow: (...args) => callOperation("cms:hubdb:2026-03:put-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_replaceDraftTableRow", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:put-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_replaceDraftTableRow">)),
    HubdbDeleteCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftPurgeDraftTableRow: (...args) => callOperation("cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_purgeDraftTableRow", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_purgeDraftTableRow">)),
    HubdbPatchCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftUpdateDraftTableRow: (...args) => callOperation("cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_updateDraftTableRow", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft_updateDraftTableRow">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameRowsRowIdDraftCloneCloneDraftTableRow: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft/clone_cloneDraftTableRow", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/{rowId}/draft/clone_cloneDraftTableRow">)),
  };
}
