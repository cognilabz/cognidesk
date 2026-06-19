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
export const HubSpotFullApiFoldersOperationKeys = [
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders_getFoldersPage",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders_createFolder",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/batch/read_readFolders",
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}_getFolderById",
  "cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/folders/{objectId}_archiveFolder",
  "cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/folders/{objectId}_updateFolder",
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions",
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion",
  "files:files:2026-03:get-/files/2026-03/folders/search_doSearch",
  "files:files:2026-03:post-/files/2026-03/folders/update/async_updatePropertiesRecursively",
  "files:files:2026-03:get-/files/2026-03/folders/update/async/tasks/{taskId}/status_checkUpdateStatus",
  "files:files:2026-03:get-/files/2026-03/folders/{folderId}_getById",
  "files:files:2026-03:delete-/files/2026-03/folders/{folderId}_archive",
  "files:files:2026-03:patch-/files/2026-03/folders/{folderId}_updateProperties",
  "files:files:2026-03:get-/files/2026-03/folders/{folderPath}_getByPath",
  "files:files:2026-03:delete-/files/2026-03/folders/{folderPath}_archiveByPath"
] as const;
export type HubSpotFullApiFoldersOperationKey = typeof HubSpotFullApiFoldersOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiFoldersOperationPathParamMap {
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders_getFoldersPage": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders_createFolder": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/batch/read_readFolders": {};
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}_getFolderById": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/folders/{objectId}_archiveFolder": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/folders/{objectId}_updateFolder": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion": { "objectId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion": { "objectId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:get-/files/2026-03/folders/search_doSearch": {};
  "files:files:2026-03:post-/files/2026-03/folders/update/async_updatePropertiesRecursively": {};
  "files:files:2026-03:get-/files/2026-03/folders/update/async/tasks/{taskId}/status_checkUpdateStatus": { "taskId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:get-/files/2026-03/folders/{folderId}_getById": { "folderId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:delete-/files/2026-03/folders/{folderId}_archive": { "folderId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:patch-/files/2026-03/folders/{folderId}_updateProperties": { "folderId": HubSpotFullApiPathParamValue };
  "files:files:2026-03:get-/files/2026-03/folders/{folderPath}_getByPath": { "folderPath": HubSpotFullApiPathParamValue };
  "files:files:2026-03:delete-/files/2026-03/folders/{folderPath}_archiveByPath": { "folderPath": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiFoldersOperationRequestMap {
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders_getFoldersPage": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders_getFoldersPage">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders_createFolder": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders_createFolder">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/batch/read_readFolders": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/batch/read_readFolders">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}_getFolderById": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}_getFolderById">;
  "cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/folders/{objectId}_archiveFolder": HubSpotFullApiOperationInput<"cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/folders/{objectId}_archiveFolder">;
  "cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/folders/{objectId}_updateFolder": HubSpotFullApiOperationInput<"cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/folders/{objectId}_updateFolder">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion">;
  "files:files:2026-03:get-/files/2026-03/folders/search_doSearch": HubSpotFullApiOperationInput<"files:files:2026-03:get-/files/2026-03/folders/search_doSearch">;
  "files:files:2026-03:post-/files/2026-03/folders/update/async_updatePropertiesRecursively": HubSpotFullApiOperationInput<"files:files:2026-03:post-/files/2026-03/folders/update/async_updatePropertiesRecursively">;
  "files:files:2026-03:get-/files/2026-03/folders/update/async/tasks/{taskId}/status_checkUpdateStatus": HubSpotFullApiOperationInput<"files:files:2026-03:get-/files/2026-03/folders/update/async/tasks/{taskId}/status_checkUpdateStatus">;
  "files:files:2026-03:get-/files/2026-03/folders/{folderId}_getById": HubSpotFullApiOperationInput<"files:files:2026-03:get-/files/2026-03/folders/{folderId}_getById">;
  "files:files:2026-03:delete-/files/2026-03/folders/{folderId}_archive": HubSpotFullApiOperationInput<"files:files:2026-03:delete-/files/2026-03/folders/{folderId}_archive">;
  "files:files:2026-03:patch-/files/2026-03/folders/{folderId}_updateProperties": HubSpotFullApiOperationInput<"files:files:2026-03:patch-/files/2026-03/folders/{folderId}_updateProperties">;
  "files:files:2026-03:get-/files/2026-03/folders/{folderPath}_getByPath": HubSpotFullApiOperationInput<"files:files:2026-03:get-/files/2026-03/folders/{folderPath}_getByPath">;
  "files:files:2026-03:delete-/files/2026-03/folders/{folderPath}_archiveByPath": HubSpotFullApiOperationInput<"files:files:2026-03:delete-/files/2026-03/folders/{folderPath}_archiveByPath">;
}

export interface HubSpotFullApiFoldersGeneratedClient {
  PagesGetCmsPages202603LandingPagesFoldersGetFoldersPage(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders_getFoldersPage">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders_getFoldersPage"]>;
  PagesPostCmsPages202603LandingPagesFoldersCreateFolder(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders_createFolder">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders_createFolder"]>;
  PagesPostCmsPages202603LandingPagesFoldersBatchReadReadFolders(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/batch/read_readFolders">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/batch/read_readFolders"]>;
  PagesGetCmsPages202603LandingPagesFoldersObjectIdGetFolderById(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}_getFolderById">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}_getFolderById"]>;
  PagesDeleteCmsPages202603LandingPagesFoldersObjectIdArchiveFolder(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/folders/{objectId}_archiveFolder">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/folders/{objectId}_archiveFolder"]>;
  PagesPatchCmsPages202603LandingPagesFoldersObjectIdUpdateFolder(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/folders/{objectId}_updateFolder">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/folders/{objectId}_updateFolder"]>;
  PagesGetCmsPages202603LandingPagesFoldersObjectIdRevisionsGetFolderPreviousVersions(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions"]>;
  PagesGetCmsPages202603LandingPagesFoldersObjectIdRevisionsRevisionIdGetFolderPreviousVersion(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion"]>;
  PagesPostCmsPages202603LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreRestoreFolderPreviousVersion(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion"]>;
  FilesGetFiles202603FoldersSearchDoSearch(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/folders/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:get-/files/2026-03/folders/search_doSearch"]>;
  FilesPostFiles202603FoldersUpdateAsyncUpdatePropertiesRecursively(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:post-/files/2026-03/folders/update/async_updatePropertiesRecursively">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:post-/files/2026-03/folders/update/async_updatePropertiesRecursively"]>;
  FilesGetFiles202603FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatus(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/folders/update/async/tasks/{taskId}/status_checkUpdateStatus">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:get-/files/2026-03/folders/update/async/tasks/{taskId}/status_checkUpdateStatus"]>;
  FilesGetFiles202603FoldersFolderIdGetById(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/folders/{folderId}_getById">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:get-/files/2026-03/folders/{folderId}_getById"]>;
  FilesDeleteFiles202603FoldersFolderIdArchive(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:delete-/files/2026-03/folders/{folderId}_archive">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:delete-/files/2026-03/folders/{folderId}_archive"]>;
  FilesPatchFiles202603FoldersFolderIdUpdateProperties(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:patch-/files/2026-03/folders/{folderId}_updateProperties">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:patch-/files/2026-03/folders/{folderId}_updateProperties"]>;
  FilesGetFiles202603FoldersFolderPathGetByPath(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/folders/{folderPath}_getByPath">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:get-/files/2026-03/folders/{folderPath}_getByPath"]>;
  FilesDeleteFiles202603FoldersFolderPathArchiveByPath(...args: HubSpotFullApiOperationArgs<"files:files:2026-03:delete-/files/2026-03/folders/{folderPath}_archiveByPath">): Promise<HubSpotFullApiOperationResponseMap["files:files:2026-03:delete-/files/2026-03/folders/{folderPath}_archiveByPath"]>;
}

export const HubSpotFullApiFoldersGeneratedFunctionNames = [
  "PagesGetCmsPages202603LandingPagesFoldersGetFoldersPage",
  "PagesPostCmsPages202603LandingPagesFoldersCreateFolder",
  "PagesPostCmsPages202603LandingPagesFoldersBatchReadReadFolders",
  "PagesGetCmsPages202603LandingPagesFoldersObjectIdGetFolderById",
  "PagesDeleteCmsPages202603LandingPagesFoldersObjectIdArchiveFolder",
  "PagesPatchCmsPages202603LandingPagesFoldersObjectIdUpdateFolder",
  "PagesGetCmsPages202603LandingPagesFoldersObjectIdRevisionsGetFolderPreviousVersions",
  "PagesGetCmsPages202603LandingPagesFoldersObjectIdRevisionsRevisionIdGetFolderPreviousVersion",
  "PagesPostCmsPages202603LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreRestoreFolderPreviousVersion",
  "FilesGetFiles202603FoldersSearchDoSearch",
  "FilesPostFiles202603FoldersUpdateAsyncUpdatePropertiesRecursively",
  "FilesGetFiles202603FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatus",
  "FilesGetFiles202603FoldersFolderIdGetById",
  "FilesDeleteFiles202603FoldersFolderIdArchive",
  "FilesPatchFiles202603FoldersFolderIdUpdateProperties",
  "FilesGetFiles202603FoldersFolderPathGetByPath",
  "FilesDeleteFiles202603FoldersFolderPathArchiveByPath"
] as const satisfies readonly (keyof HubSpotFullApiFoldersGeneratedClient)[];

export function createHubSpotFullApiFoldersGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiFoldersGeneratedClient {
  return {
    PagesGetCmsPages202603LandingPagesFoldersGetFoldersPage: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders_getFoldersPage", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders_getFoldersPage">)),
    PagesPostCmsPages202603LandingPagesFoldersCreateFolder: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders_createFolder", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders_createFolder">)),
    PagesPostCmsPages202603LandingPagesFoldersBatchReadReadFolders: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/batch/read_readFolders", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/batch/read_readFolders">)),
    PagesGetCmsPages202603LandingPagesFoldersObjectIdGetFolderById: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}_getFolderById", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}_getFolderById">)),
    PagesDeleteCmsPages202603LandingPagesFoldersObjectIdArchiveFolder: (...args) => callOperation("cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/folders/{objectId}_archiveFolder", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/folders/{objectId}_archiveFolder">)),
    PagesPatchCmsPages202603LandingPagesFoldersObjectIdUpdateFolder: (...args) => callOperation("cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/folders/{objectId}_updateFolder", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/folders/{objectId}_updateFolder">)),
    PagesGetCmsPages202603LandingPagesFoldersObjectIdRevisionsGetFolderPreviousVersions: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions">)),
    PagesGetCmsPages202603LandingPagesFoldersObjectIdRevisionsRevisionIdGetFolderPreviousVersion: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion">)),
    PagesPostCmsPages202603LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreRestoreFolderPreviousVersion: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion">)),
    FilesGetFiles202603FoldersSearchDoSearch: (...args) => callOperation("files:files:2026-03:get-/files/2026-03/folders/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/folders/search_doSearch">)),
    FilesPostFiles202603FoldersUpdateAsyncUpdatePropertiesRecursively: (...args) => callOperation("files:files:2026-03:post-/files/2026-03/folders/update/async_updatePropertiesRecursively", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:post-/files/2026-03/folders/update/async_updatePropertiesRecursively">)),
    FilesGetFiles202603FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatus: (...args) => callOperation("files:files:2026-03:get-/files/2026-03/folders/update/async/tasks/{taskId}/status_checkUpdateStatus", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/folders/update/async/tasks/{taskId}/status_checkUpdateStatus">)),
    FilesGetFiles202603FoldersFolderIdGetById: (...args) => callOperation("files:files:2026-03:get-/files/2026-03/folders/{folderId}_getById", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/folders/{folderId}_getById">)),
    FilesDeleteFiles202603FoldersFolderIdArchive: (...args) => callOperation("files:files:2026-03:delete-/files/2026-03/folders/{folderId}_archive", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:delete-/files/2026-03/folders/{folderId}_archive">)),
    FilesPatchFiles202603FoldersFolderIdUpdateProperties: (...args) => callOperation("files:files:2026-03:patch-/files/2026-03/folders/{folderId}_updateProperties", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:patch-/files/2026-03/folders/{folderId}_updateProperties">)),
    FilesGetFiles202603FoldersFolderPathGetByPath: (...args) => callOperation("files:files:2026-03:get-/files/2026-03/folders/{folderPath}_getByPath", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:get-/files/2026-03/folders/{folderPath}_getByPath">)),
    FilesDeleteFiles202603FoldersFolderPathArchiveByPath: (...args) => callOperation("files:files:2026-03:delete-/files/2026-03/folders/{folderPath}_archiveByPath", ...(args as HubSpotFullApiOperationArgs<"files:files:2026-03:delete-/files/2026-03/folders/{folderPath}_archiveByPath">)),
  };
}
