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
export const HubSpotFullApiTablesOperationKeys = [
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables_getAllTables",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables_createTable",
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/draft_getAllDraftTables",
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}_getTableDetails",
  "cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}_archiveTable",
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_getDraftTableDetailsById",
  "cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_updateDraftTable",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/clone_cloneDraftTable",
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/export_exportDraftTable",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/import_importDraftTable",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/publish_publishDraftTable",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/reset_resetDraftTable",
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/export_exportTable",
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft_readDraftTableRows",
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/unpublish_unpublishTable",
  "cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/versions/{versionId}_removeTableVersion"
] as const;
export type HubSpotFullApiTablesOperationKey = typeof HubSpotFullApiTablesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiTablesOperationPathParamMap {
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables_getAllTables": {};
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables_createTable": {};
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/draft_getAllDraftTables": {};
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}_getTableDetails": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}_archiveTable": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_getDraftTableDetailsById": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_updateDraftTable": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/clone_cloneDraftTable": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/export_exportDraftTable": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/import_importDraftTable": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/publish_publishDraftTable": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/reset_resetDraftTable": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/export_exportTable": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft_readDraftTableRows": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/unpublish_unpublishTable": { "tableIdOrName": HubSpotFullApiPathParamValue };
  "cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/versions/{versionId}_removeTableVersion": { "tableIdOrName": HubSpotFullApiPathParamValue; "versionId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiTablesOperationRequestMap {
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables_getAllTables": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables_getAllTables">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables_createTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables_createTable">;
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/draft_getAllDraftTables": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/draft_getAllDraftTables">;
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}_getTableDetails": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}_getTableDetails">;
  "cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}_archiveTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}_archiveTable">;
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_getDraftTableDetailsById": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_getDraftTableDetailsById">;
  "cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_updateDraftTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_updateDraftTable">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/clone_cloneDraftTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/clone_cloneDraftTable">;
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/export_exportDraftTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/export_exportDraftTable">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/import_importDraftTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/import_importDraftTable">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/publish_publishDraftTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/publish_publishDraftTable">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/reset_resetDraftTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/reset_resetDraftTable">;
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/export_exportTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/export_exportTable">;
  "cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft_readDraftTableRows": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft_readDraftTableRows">;
  "cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/unpublish_unpublishTable": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/unpublish_unpublishTable">;
  "cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/versions/{versionId}_removeTableVersion": HubSpotFullApiOperationInput<"cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/versions/{versionId}_removeTableVersion">;
}

export interface HubSpotFullApiTablesGeneratedClient {
  HubdbGetCmsHubdb202603TablesGetAllTables(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables_getAllTables">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables_getAllTables"]>;
  HubdbPostCmsHubdb202603TablesCreateTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables_createTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables_createTable"]>;
  HubdbGetCmsHubdb202603TablesDraftGetAllDraftTables(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/draft_getAllDraftTables">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/draft_getAllDraftTables"]>;
  HubdbGetCmsHubdb202603TablesTableIdOrNameGetTableDetails(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}_getTableDetails">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}_getTableDetails"]>;
  HubdbDeleteCmsHubdb202603TablesTableIdOrNameArchiveTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}_archiveTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}_archiveTable"]>;
  HubdbGetCmsHubdb202603TablesTableIdOrNameDraftGetDraftTableDetailsById(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_getDraftTableDetailsById">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_getDraftTableDetailsById"]>;
  HubdbPatchCmsHubdb202603TablesTableIdOrNameDraftUpdateDraftTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_updateDraftTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_updateDraftTable"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameDraftCloneCloneDraftTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/clone_cloneDraftTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/clone_cloneDraftTable"]>;
  HubdbGetCmsHubdb202603TablesTableIdOrNameDraftExportExportDraftTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/export_exportDraftTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/export_exportDraftTable"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameDraftImportImportDraftTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/import_importDraftTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/import_importDraftTable"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameDraftPublishPublishDraftTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/publish_publishDraftTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/publish_publishDraftTable"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameDraftResetResetDraftTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/reset_resetDraftTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/reset_resetDraftTable"]>;
  HubdbGetCmsHubdb202603TablesTableIdOrNameExportExportTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/export_exportTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/export_exportTable"]>;
  HubdbGetCmsHubdb202603TablesTableIdOrNameRowsDraftReadDraftTableRows(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft_readDraftTableRows">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft_readDraftTableRows"]>;
  HubdbPostCmsHubdb202603TablesTableIdOrNameUnpublishUnpublishTable(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/unpublish_unpublishTable">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/unpublish_unpublishTable"]>;
  HubdbDeleteCmsHubdb202603TablesTableIdOrNameVersionsVersionIdRemoveTableVersion(...args: HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/versions/{versionId}_removeTableVersion">): Promise<HubSpotFullApiOperationResponseMap["cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/versions/{versionId}_removeTableVersion"]>;
}

export const HubSpotFullApiTablesGeneratedFunctionNames = [
  "HubdbGetCmsHubdb202603TablesGetAllTables",
  "HubdbPostCmsHubdb202603TablesCreateTable",
  "HubdbGetCmsHubdb202603TablesDraftGetAllDraftTables",
  "HubdbGetCmsHubdb202603TablesTableIdOrNameGetTableDetails",
  "HubdbDeleteCmsHubdb202603TablesTableIdOrNameArchiveTable",
  "HubdbGetCmsHubdb202603TablesTableIdOrNameDraftGetDraftTableDetailsById",
  "HubdbPatchCmsHubdb202603TablesTableIdOrNameDraftUpdateDraftTable",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameDraftCloneCloneDraftTable",
  "HubdbGetCmsHubdb202603TablesTableIdOrNameDraftExportExportDraftTable",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameDraftImportImportDraftTable",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameDraftPublishPublishDraftTable",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameDraftResetResetDraftTable",
  "HubdbGetCmsHubdb202603TablesTableIdOrNameExportExportTable",
  "HubdbGetCmsHubdb202603TablesTableIdOrNameRowsDraftReadDraftTableRows",
  "HubdbPostCmsHubdb202603TablesTableIdOrNameUnpublishUnpublishTable",
  "HubdbDeleteCmsHubdb202603TablesTableIdOrNameVersionsVersionIdRemoveTableVersion"
] as const satisfies readonly (keyof HubSpotFullApiTablesGeneratedClient)[];

export function createHubSpotFullApiTablesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiTablesGeneratedClient {
  return {
    HubdbGetCmsHubdb202603TablesGetAllTables: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables_getAllTables", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables_getAllTables">)),
    HubdbPostCmsHubdb202603TablesCreateTable: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables_createTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables_createTable">)),
    HubdbGetCmsHubdb202603TablesDraftGetAllDraftTables: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/draft_getAllDraftTables", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/draft_getAllDraftTables">)),
    HubdbGetCmsHubdb202603TablesTableIdOrNameGetTableDetails: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}_getTableDetails", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}_getTableDetails">)),
    HubdbDeleteCmsHubdb202603TablesTableIdOrNameArchiveTable: (...args) => callOperation("cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}_archiveTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}_archiveTable">)),
    HubdbGetCmsHubdb202603TablesTableIdOrNameDraftGetDraftTableDetailsById: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_getDraftTableDetailsById", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_getDraftTableDetailsById">)),
    HubdbPatchCmsHubdb202603TablesTableIdOrNameDraftUpdateDraftTable: (...args) => callOperation("cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_updateDraftTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:patch-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft_updateDraftTable">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameDraftCloneCloneDraftTable: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/clone_cloneDraftTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/clone_cloneDraftTable">)),
    HubdbGetCmsHubdb202603TablesTableIdOrNameDraftExportExportDraftTable: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/export_exportDraftTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/export_exportDraftTable">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameDraftImportImportDraftTable: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/import_importDraftTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/import_importDraftTable">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameDraftPublishPublishDraftTable: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/publish_publishDraftTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/publish_publishDraftTable">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameDraftResetResetDraftTable: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/reset_resetDraftTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/draft/reset_resetDraftTable">)),
    HubdbGetCmsHubdb202603TablesTableIdOrNameExportExportTable: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/export_exportTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/export_exportTable">)),
    HubdbGetCmsHubdb202603TablesTableIdOrNameRowsDraftReadDraftTableRows: (...args) => callOperation("cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft_readDraftTableRows", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:get-/cms/hubdb/2026-03/tables/{tableIdOrName}/rows/draft_readDraftTableRows">)),
    HubdbPostCmsHubdb202603TablesTableIdOrNameUnpublishUnpublishTable: (...args) => callOperation("cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/unpublish_unpublishTable", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:post-/cms/hubdb/2026-03/tables/{tableIdOrName}/unpublish_unpublishTable">)),
    HubdbDeleteCmsHubdb202603TablesTableIdOrNameVersionsVersionIdRemoveTableVersion: (...args) => callOperation("cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/versions/{versionId}_removeTableVersion", ...(args as HubSpotFullApiOperationArgs<"cms:hubdb:2026-03:delete-/cms/hubdb/2026-03/tables/{tableIdOrName}/versions/{versionId}_removeTableVersion">)),
  };
}
