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
export const HubSpotFullApiFilesOperationKeys = [
  "files:files:2026-03:post-/files/2026-03/files_upload",
  "files:files:2026-03:post-/files/2026-03/files/import-from-url/async_importFromUrl",
  "files:files:2026-03:get-/files/2026-03/files/import-from-url/async/tasks/{taskId}/status_checkImport",
  "files:files:2026-03:get-/files/2026-03/files/search_doSearch",
  "files:files:2026-03:get-/files/2026-03/files/stat/{path}_getMetadata",
  "files:files:2026-03:get-/files/2026-03/files/{fileId}_getById",
  "files:files:2026-03:put-/files/2026-03/files/{fileId}_replace",
  "files:files:2026-03:delete-/files/2026-03/files/{fileId}_archive",
  "files:files:2026-03:patch-/files/2026-03/files/{fileId}_updateProperties",
  "files:files:2026-03:delete-/files/2026-03/files/{fileId}/gdpr-delete_delete",
  "files:files:2026-03:get-/files/2026-03/files/{fileId}/signed-url_getSignedUrl",
  "files:files:2026-03:post-/files/2026-03/folders_create"
] as const;
export type HubSpotFullApiFilesOperationKey = typeof HubSpotFullApiFilesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiFilesOperationPathParamMap {
  "files:files:2026-03:post-/files/2026-03/files_upload": {};
  "files:files:2026-03:post-/files/2026-03/files/import-from-url/async_importFromUrl": {};
  "files:files:2026-03:get-/files/2026-03/files/import-from-url/async/tasks/{taskId}/status_checkImport": { "taskId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:get-/files/2026-03/files/search_doSearch": {};
  "files:files:2026-03:get-/files/2026-03/files/stat/{path}_getMetadata": { "path": HubSpotFullApiPathParamValue };
  "files:files:2026-03:get-/files/2026-03/files/{fileId}_getById": { "fileId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:put-/files/2026-03/files/{fileId}_replace": { "fileId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:delete-/files/2026-03/files/{fileId}_archive": { "fileId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:patch-/files/2026-03/files/{fileId}_updateProperties": { "fileId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:delete-/files/2026-03/files/{fileId}/gdpr-delete_delete": { "fileId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:get-/files/2026-03/files/{fileId}/signed-url_getSignedUrl": { "fileId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:post-/files/2026-03/folders_create": {};
}

export interface HubSpotFullApiFilesOperationRequestMap {
  "files:files:2026-03:post-/files/2026-03/files_upload": HubSpotFullApiOperationInput<"files:files:2026-03:post-/files/2026-03/files_upload">;
  "files:files:2026-03:post-/files/2026-03/files/import-from-url/async_importFromUrl": HubSpotFullApiOperationInput<"files:files:2026-03:post-/files/2026-03/files/import-from-url/async_importFromUrl">;
  "files:files:2026-03:get-/files/2026-03/files/import-from-url/async/tasks/{taskId}/status_checkImport": HubSpotFullApiOperationInput<"files:files:2026-03:get-/files/2026-03/files/import-from-url/async/tasks/{taskId}/status_checkImport">;
  "files:files:2026-03:get-/files/2026-03/files/search_doSearch": HubSpotFullApiOperationInput<"files:files:2026-03:get-/files/2026-03/files/search_doSearch">;
  "files:files:2026-03:get-/files/2026-03/files/stat/{path}_getMetadata": HubSpotFullApiOperationInput<"files:files:2026-03:get-/files/2026-03/files/stat/{path}_getMetadata">;
  "files:files:2026-03:get-/files/2026-03/files/{fileId}_getById": HubSpotFullApiOperationInput<"files:files:2026-03:get-/files/2026-03/files/{fileId}_getById">;
  "files:files:2026-03:put-/files/2026-03/files/{fileId}_replace": HubSpotFullApiOperationInput<"files:files:2026-03:put-/files/2026-03/files/{fileId}_replace">;
  "files:files:2026-03:delete-/files/2026-03/files/{fileId}_archive": HubSpotFullApiOperationInput<"files:files:2026-03:delete-/files/2026-03/files/{fileId}_archive">;
  "files:files:2026-03:patch-/files/2026-03/files/{fileId}_updateProperties": HubSpotFullApiOperationInput<"files:files:2026-03:patch-/files/2026-03/files/{fileId}_updateProperties">;
  "files:files:2026-03:delete-/files/2026-03/files/{fileId}/gdpr-delete_delete": HubSpotFullApiOperationInput<"files:files:2026-03:delete-/files/2026-03/files/{fileId}/gdpr-delete_delete">;
  "files:files:2026-03:get-/files/2026-03/files/{fileId}/signed-url_getSignedUrl": HubSpotFullApiOperationInput<"files:files:2026-03:get-/files/2026-03/files/{fileId}/signed-url_getSignedUrl">;
  "files:files:2026-03:post-/files/2026-03/folders_create": HubSpotFullApiOperationInput<"files:files:2026-03:post-/files/2026-03/folders_create">;
}

export interface HubSpotFullApiFilesGeneratedClient {
  FilesPostFiles202603FilesUpload(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:post-/files/2026-03/files_upload">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:post-/files/2026-03/files_upload"]>;
  FilesPostFiles202603FilesImportFromUrlAsyncImportFromUrl(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:post-/files/2026-03/files/import-from-url/async_importFromUrl">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:post-/files/2026-03/files/import-from-url/async_importFromUrl"]>;
  FilesGetFiles202603FilesImportFromUrlAsyncTasksTaskIdStatusCheckImport(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/import-from-url/async/tasks/{taskId}/status_checkImport">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:get-/files/2026-03/files/import-from-url/async/tasks/{taskId}/status_checkImport"]>;
  FilesGetFiles202603FilesSearchDoSearch(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:get-/files/2026-03/files/search_doSearch"]>;
  FilesGetFiles202603FilesStatPathGetMetadata(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/stat/{path}_getMetadata">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:get-/files/2026-03/files/stat/{path}_getMetadata"]>;
  FilesGetFiles202603FilesFileIdGetById(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/{fileId}_getById">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:get-/files/2026-03/files/{fileId}_getById"]>;
  FilesPutFiles202603FilesFileIdReplace(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:put-/files/2026-03/files/{fileId}_replace">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:put-/files/2026-03/files/{fileId}_replace"]>;
  FilesDeleteFiles202603FilesFileIdArchive(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:delete-/files/2026-03/files/{fileId}_archive">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:delete-/files/2026-03/files/{fileId}_archive"]>;
  FilesPatchFiles202603FilesFileIdUpdateProperties(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:patch-/files/2026-03/files/{fileId}_updateProperties">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:patch-/files/2026-03/files/{fileId}_updateProperties"]>;
  FilesDeleteFiles202603FilesFileIdGdprDeleteDelete(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:delete-/files/2026-03/files/{fileId}/gdpr-delete_delete">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:delete-/files/2026-03/files/{fileId}/gdpr-delete_delete"]>;
  FilesGetFiles202603FilesFileIdSignedUrlGetSignedUrl(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/{fileId}/signed-url_getSignedUrl">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:get-/files/2026-03/files/{fileId}/signed-url_getSignedUrl"]>;
  FilesPostFiles202603FoldersCreate(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:post-/files/2026-03/folders_create">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:post-/files/2026-03/folders_create"]>;
}

export const HubSpotFullApiFilesGeneratedFunctionNames = [
  "FilesPostFiles202603FilesUpload",
  "FilesPostFiles202603FilesImportFromUrlAsyncImportFromUrl",
  "FilesGetFiles202603FilesImportFromUrlAsyncTasksTaskIdStatusCheckImport",
  "FilesGetFiles202603FilesSearchDoSearch",
  "FilesGetFiles202603FilesStatPathGetMetadata",
  "FilesGetFiles202603FilesFileIdGetById",
  "FilesPutFiles202603FilesFileIdReplace",
  "FilesDeleteFiles202603FilesFileIdArchive",
  "FilesPatchFiles202603FilesFileIdUpdateProperties",
  "FilesDeleteFiles202603FilesFileIdGdprDeleteDelete",
  "FilesGetFiles202603FilesFileIdSignedUrlGetSignedUrl",
  "FilesPostFiles202603FoldersCreate"
] as const satisfies readonly (keyof HubSpotFullApiFilesGeneratedClient)[];

export function createHubSpotFullApiFilesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiFilesGeneratedClient {
  return {
    FilesPostFiles202603FilesUpload: (...args) => callOperation("files:files:2026-03:post-/files/2026-03/files_upload", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:post-/files/2026-03/files_upload">)),
    FilesPostFiles202603FilesImportFromUrlAsyncImportFromUrl: (...args) => callOperation("files:files:2026-03:post-/files/2026-03/files/import-from-url/async_importFromUrl", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:post-/files/2026-03/files/import-from-url/async_importFromUrl">)),
    FilesGetFiles202603FilesImportFromUrlAsyncTasksTaskIdStatusCheckImport: (...args) => callOperation("files:files:2026-03:get-/files/2026-03/files/import-from-url/async/tasks/{taskId}/status_checkImport", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/import-from-url/async/tasks/{taskId}/status_checkImport">)),
    FilesGetFiles202603FilesSearchDoSearch: (...args) => callOperation("files:files:2026-03:get-/files/2026-03/files/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/search_doSearch">)),
    FilesGetFiles202603FilesStatPathGetMetadata: (...args) => callOperation("files:files:2026-03:get-/files/2026-03/files/stat/{path}_getMetadata", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/stat/{path}_getMetadata">)),
    FilesGetFiles202603FilesFileIdGetById: (...args) => callOperation("files:files:2026-03:get-/files/2026-03/files/{fileId}_getById", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/{fileId}_getById">)),
    FilesPutFiles202603FilesFileIdReplace: (...args) => callOperation("files:files:2026-03:put-/files/2026-03/files/{fileId}_replace", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:put-/files/2026-03/files/{fileId}_replace">)),
    FilesDeleteFiles202603FilesFileIdArchive: (...args) => callOperation("files:files:2026-03:delete-/files/2026-03/files/{fileId}_archive", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:delete-/files/2026-03/files/{fileId}_archive">)),
    FilesPatchFiles202603FilesFileIdUpdateProperties: (...args) => callOperation("files:files:2026-03:patch-/files/2026-03/files/{fileId}_updateProperties", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:patch-/files/2026-03/files/{fileId}_updateProperties">)),
    FilesDeleteFiles202603FilesFileIdGdprDeleteDelete: (...args) => callOperation("files:files:2026-03:delete-/files/2026-03/files/{fileId}/gdpr-delete_delete", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:delete-/files/2026-03/files/{fileId}/gdpr-delete_delete">)),
    FilesGetFiles202603FilesFileIdSignedUrlGetSignedUrl: (...args) => callOperation("files:files:2026-03:get-/files/2026-03/files/{fileId}/signed-url_getSignedUrl", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/files/{fileId}/signed-url_getSignedUrl">)),
    FilesPostFiles202603FoldersCreate: (...args) => callOperation("files:files:2026-03:post-/files/2026-03/folders_create", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:post-/files/2026-03/folders_create">)),
  };
}
