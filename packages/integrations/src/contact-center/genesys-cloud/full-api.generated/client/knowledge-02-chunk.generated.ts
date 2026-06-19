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
export const GenesysCloudFullApiKnowledge02OperationKeys = [
  "postKnowledgeGuestSessionDocumentsSearchSuggestions",
  "postKnowledgeGuestSessionDocumentViews",
  "postKnowledgeGuestSessions",
  "postKnowledgeKnowledgebaseCategories",
  "postKnowledgeKnowledgebaseChunksSearch",
  "postKnowledgeKnowledgebaseDocumentCopies",
  "postKnowledgeKnowledgebaseDocumentFeedback",
  "postKnowledgeKnowledgebaseDocuments",
  "postKnowledgeKnowledgebaseDocumentsAnswers",
  "postKnowledgeKnowledgebaseDocumentsBulkRemove",
  "postKnowledgeKnowledgebaseDocumentsBulkUpdate",
  "postKnowledgeKnowledgebaseDocumentsPresentations",
  "postKnowledgeKnowledgebaseDocumentsQuery",
  "postKnowledgeKnowledgebaseDocumentsSearch",
  "postKnowledgeKnowledgebaseDocumentsSearchSuggestions",
  "postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd",
  "postKnowledgeKnowledgebaseDocumentVariations",
  "postKnowledgeKnowledgebaseDocumentVersions",
  "postKnowledgeKnowledgebaseDocumentViews",
  "postKnowledgeKnowledgebaseExportJobs",
  "postKnowledgeKnowledgebaseImportJobs",
  "postKnowledgeKnowledgebaseLabels",
  "postKnowledgeKnowledgebaseParseJobImport",
  "postKnowledgeKnowledgebaseParseJobs",
  "postKnowledgeKnowledgebases",
  "postKnowledgeKnowledgebaseSourcesSalesforce",
  "postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync",
  "postKnowledgeKnowledgebaseSourcesServicenow",
  "postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync",
  "postKnowledgeKnowledgebaseSynchronizeJobs",
  "postKnowledgeKnowledgebaseUploadsUrlsJobs",
  "postKnowledgeSearch",
  "postKnowledgeSearchPreview",
  "postKnowledgeSettings",
  "postKnowledgeSources",
  "postKnowledgeSourceSynchronizations",
  "postKnowledgeSourceSynchronizationUploads",
  "putKnowledgeKnowledgebaseSourcesSalesforceSourceId",
  "putKnowledgeKnowledgebaseSourcesServicenowSourceId",
  "putKnowledgeSource"
] as const;
export type GenesysCloudFullApiKnowledge02OperationKey = typeof GenesysCloudFullApiKnowledge02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiKnowledge02OperationPathParamMap {
  "postKnowledgeGuestSessionDocumentsSearchSuggestions": { "sessionId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeGuestSessionDocumentViews": { "sessionId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeGuestSessions": {};
  "postKnowledgeKnowledgebaseCategories": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseChunksSearch": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentCopies": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentFeedback": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocuments": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentsAnswers": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentsBulkRemove": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentsBulkUpdate": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentsPresentations": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentsQuery": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentsSearch": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentsSearchSuggestions": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentVariations": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentVersions": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseDocumentViews": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseExportJobs": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseImportJobs": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseLabels": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseParseJobImport": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "parseJobId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseParseJobs": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebases": {};
  "postKnowledgeKnowledgebaseSourcesSalesforce": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseSourcesServicenow": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseSynchronizeJobs": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeKnowledgebaseUploadsUrlsJobs": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeSearch": {};
  "postKnowledgeSearchPreview": {};
  "postKnowledgeSettings": {};
  "postKnowledgeSources": {};
  "postKnowledgeSourceSynchronizations": { "sourceId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeSourceSynchronizationUploads": { "sourceId": GenesysCloudFullApiPathParamValue; "synchronizationId": GenesysCloudFullApiPathParamValue };
  "putKnowledgeKnowledgebaseSourcesSalesforceSourceId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "putKnowledgeKnowledgebaseSourcesServicenowSourceId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "putKnowledgeSource": { "sourceId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiKnowledge02OperationRequestMap {
  "postKnowledgeGuestSessionDocumentsSearchSuggestions": GenesysCloudFullApiOperationInput<"postKnowledgeGuestSessionDocumentsSearchSuggestions">;
  "postKnowledgeGuestSessionDocumentViews": GenesysCloudFullApiOperationInput<"postKnowledgeGuestSessionDocumentViews">;
  "postKnowledgeGuestSessions": GenesysCloudFullApiOperationInput<"postKnowledgeGuestSessions">;
  "postKnowledgeKnowledgebaseCategories": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseCategories">;
  "postKnowledgeKnowledgebaseChunksSearch": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseChunksSearch">;
  "postKnowledgeKnowledgebaseDocumentCopies": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentCopies">;
  "postKnowledgeKnowledgebaseDocumentFeedback": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentFeedback">;
  "postKnowledgeKnowledgebaseDocuments": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocuments">;
  "postKnowledgeKnowledgebaseDocumentsAnswers": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentsAnswers">;
  "postKnowledgeKnowledgebaseDocumentsBulkRemove": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentsBulkRemove">;
  "postKnowledgeKnowledgebaseDocumentsBulkUpdate": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentsBulkUpdate">;
  "postKnowledgeKnowledgebaseDocumentsPresentations": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentsPresentations">;
  "postKnowledgeKnowledgebaseDocumentsQuery": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentsQuery">;
  "postKnowledgeKnowledgebaseDocumentsSearch": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentsSearch">;
  "postKnowledgeKnowledgebaseDocumentsSearchSuggestions": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentsSearchSuggestions">;
  "postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd">;
  "postKnowledgeKnowledgebaseDocumentVariations": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentVariations">;
  "postKnowledgeKnowledgebaseDocumentVersions": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentVersions">;
  "postKnowledgeKnowledgebaseDocumentViews": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseDocumentViews">;
  "postKnowledgeKnowledgebaseExportJobs": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseExportJobs">;
  "postKnowledgeKnowledgebaseImportJobs": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseImportJobs">;
  "postKnowledgeKnowledgebaseLabels": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseLabels">;
  "postKnowledgeKnowledgebaseParseJobImport": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseParseJobImport">;
  "postKnowledgeKnowledgebaseParseJobs": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseParseJobs">;
  "postKnowledgeKnowledgebases": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebases">;
  "postKnowledgeKnowledgebaseSourcesSalesforce": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseSourcesSalesforce">;
  "postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync">;
  "postKnowledgeKnowledgebaseSourcesServicenow": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseSourcesServicenow">;
  "postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync">;
  "postKnowledgeKnowledgebaseSynchronizeJobs": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseSynchronizeJobs">;
  "postKnowledgeKnowledgebaseUploadsUrlsJobs": GenesysCloudFullApiOperationInput<"postKnowledgeKnowledgebaseUploadsUrlsJobs">;
  "postKnowledgeSearch": GenesysCloudFullApiOperationInput<"postKnowledgeSearch">;
  "postKnowledgeSearchPreview": GenesysCloudFullApiOperationInput<"postKnowledgeSearchPreview">;
  "postKnowledgeSettings": GenesysCloudFullApiOperationInput<"postKnowledgeSettings">;
  "postKnowledgeSources": GenesysCloudFullApiOperationInput<"postKnowledgeSources">;
  "postKnowledgeSourceSynchronizations": GenesysCloudFullApiOperationInput<"postKnowledgeSourceSynchronizations">;
  "postKnowledgeSourceSynchronizationUploads": GenesysCloudFullApiOperationInput<"postKnowledgeSourceSynchronizationUploads">;
  "putKnowledgeKnowledgebaseSourcesSalesforceSourceId": GenesysCloudFullApiOperationInput<"putKnowledgeKnowledgebaseSourcesSalesforceSourceId">;
  "putKnowledgeKnowledgebaseSourcesServicenowSourceId": GenesysCloudFullApiOperationInput<"putKnowledgeKnowledgebaseSourcesServicenowSourceId">;
  "putKnowledgeSource": GenesysCloudFullApiOperationInput<"putKnowledgeSource">;
}

export interface GenesysCloudFullApiKnowledge02GeneratedClient {
  PostKnowledgeGuestSessionDocumentsSearchSuggestions(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentsSearchSuggestions">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeGuestSessionDocumentsSearchSuggestions"]>;
  PostKnowledgeGuestSessionDocumentViews(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentViews">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeGuestSessionDocumentViews"]>;
  PostKnowledgeGuestSessions(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessions">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeGuestSessions"]>;
  PostKnowledgeKnowledgebaseCategories(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseCategories">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseCategories"]>;
  PostKnowledgeKnowledgebaseChunksSearch(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseChunksSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseChunksSearch"]>;
  PostKnowledgeKnowledgebaseDocumentCopies(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentCopies">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentCopies"]>;
  PostKnowledgeKnowledgebaseDocumentFeedback(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentFeedback">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentFeedback"]>;
  PostKnowledgeKnowledgebaseDocuments(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocuments">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocuments"]>;
  PostKnowledgeKnowledgebaseDocumentsAnswers(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsAnswers">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentsAnswers"]>;
  PostKnowledgeKnowledgebaseDocumentsBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentsBulkRemove"]>;
  PostKnowledgeKnowledgebaseDocumentsBulkUpdate(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsBulkUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentsBulkUpdate"]>;
  PostKnowledgeKnowledgebaseDocumentsPresentations(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsPresentations">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentsPresentations"]>;
  PostKnowledgeKnowledgebaseDocumentsQuery(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentsQuery"]>;
  PostKnowledgeKnowledgebaseDocumentsSearch(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentsSearch"]>;
  PostKnowledgeKnowledgebaseDocumentsSearchSuggestions(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsSearchSuggestions">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentsSearchSuggestions"]>;
  PostKnowledgeKnowledgebaseDocumentsVersionsBulkAdd(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd"]>;
  PostKnowledgeKnowledgebaseDocumentVariations(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentVariations">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentVariations"]>;
  PostKnowledgeKnowledgebaseDocumentVersions(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentVersions">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentVersions"]>;
  PostKnowledgeKnowledgebaseDocumentViews(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentViews">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseDocumentViews"]>;
  PostKnowledgeKnowledgebaseExportJobs(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseExportJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseExportJobs"]>;
  PostKnowledgeKnowledgebaseImportJobs(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseImportJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseImportJobs"]>;
  PostKnowledgeKnowledgebaseLabels(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseLabels">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseLabels"]>;
  PostKnowledgeKnowledgebaseParseJobImport(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseParseJobImport">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseParseJobImport"]>;
  PostKnowledgeKnowledgebaseParseJobs(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseParseJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseParseJobs"]>;
  PostKnowledgeKnowledgebases(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebases">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebases"]>;
  PostKnowledgeKnowledgebaseSourcesSalesforce(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSourcesSalesforce">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseSourcesSalesforce"]>;
  PostKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync"]>;
  PostKnowledgeKnowledgebaseSourcesServicenow(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSourcesServicenow">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseSourcesServicenow"]>;
  PostKnowledgeKnowledgebaseSourcesServicenowSourceIdSync(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync"]>;
  PostKnowledgeKnowledgebaseSynchronizeJobs(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSynchronizeJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseSynchronizeJobs"]>;
  PostKnowledgeKnowledgebaseUploadsUrlsJobs(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseUploadsUrlsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeKnowledgebaseUploadsUrlsJobs"]>;
  PostKnowledgeSearch(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeSearch"]>;
  PostKnowledgeSearchPreview(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeSearchPreview">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeSearchPreview"]>;
  PostKnowledgeSettings(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeSettings">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeSettings"]>;
  PostKnowledgeSources(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeSources">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeSources"]>;
  PostKnowledgeSourceSynchronizations(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeSourceSynchronizations">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeSourceSynchronizations"]>;
  PostKnowledgeSourceSynchronizationUploads(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeSourceSynchronizationUploads">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeSourceSynchronizationUploads"]>;
  PutKnowledgeKnowledgebaseSourcesSalesforceSourceId(...args: GenesysCloudFullApiOperationArgs<"putKnowledgeKnowledgebaseSourcesSalesforceSourceId">): Promise<GenesysCloudFullApiOperationResponseMap["putKnowledgeKnowledgebaseSourcesSalesforceSourceId"]>;
  PutKnowledgeKnowledgebaseSourcesServicenowSourceId(...args: GenesysCloudFullApiOperationArgs<"putKnowledgeKnowledgebaseSourcesServicenowSourceId">): Promise<GenesysCloudFullApiOperationResponseMap["putKnowledgeKnowledgebaseSourcesServicenowSourceId"]>;
  PutKnowledgeSource(...args: GenesysCloudFullApiOperationArgs<"putKnowledgeSource">): Promise<GenesysCloudFullApiOperationResponseMap["putKnowledgeSource"]>;
}

export const GenesysCloudFullApiKnowledge02GeneratedFunctionNames = [
  "PostKnowledgeGuestSessionDocumentsSearchSuggestions",
  "PostKnowledgeGuestSessionDocumentViews",
  "PostKnowledgeGuestSessions",
  "PostKnowledgeKnowledgebaseCategories",
  "PostKnowledgeKnowledgebaseChunksSearch",
  "PostKnowledgeKnowledgebaseDocumentCopies",
  "PostKnowledgeKnowledgebaseDocumentFeedback",
  "PostKnowledgeKnowledgebaseDocuments",
  "PostKnowledgeKnowledgebaseDocumentsAnswers",
  "PostKnowledgeKnowledgebaseDocumentsBulkRemove",
  "PostKnowledgeKnowledgebaseDocumentsBulkUpdate",
  "PostKnowledgeKnowledgebaseDocumentsPresentations",
  "PostKnowledgeKnowledgebaseDocumentsQuery",
  "PostKnowledgeKnowledgebaseDocumentsSearch",
  "PostKnowledgeKnowledgebaseDocumentsSearchSuggestions",
  "PostKnowledgeKnowledgebaseDocumentsVersionsBulkAdd",
  "PostKnowledgeKnowledgebaseDocumentVariations",
  "PostKnowledgeKnowledgebaseDocumentVersions",
  "PostKnowledgeKnowledgebaseDocumentViews",
  "PostKnowledgeKnowledgebaseExportJobs",
  "PostKnowledgeKnowledgebaseImportJobs",
  "PostKnowledgeKnowledgebaseLabels",
  "PostKnowledgeKnowledgebaseParseJobImport",
  "PostKnowledgeKnowledgebaseParseJobs",
  "PostKnowledgeKnowledgebases",
  "PostKnowledgeKnowledgebaseSourcesSalesforce",
  "PostKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync",
  "PostKnowledgeKnowledgebaseSourcesServicenow",
  "PostKnowledgeKnowledgebaseSourcesServicenowSourceIdSync",
  "PostKnowledgeKnowledgebaseSynchronizeJobs",
  "PostKnowledgeKnowledgebaseUploadsUrlsJobs",
  "PostKnowledgeSearch",
  "PostKnowledgeSearchPreview",
  "PostKnowledgeSettings",
  "PostKnowledgeSources",
  "PostKnowledgeSourceSynchronizations",
  "PostKnowledgeSourceSynchronizationUploads",
  "PutKnowledgeKnowledgebaseSourcesSalesforceSourceId",
  "PutKnowledgeKnowledgebaseSourcesServicenowSourceId",
  "PutKnowledgeSource"
] as const satisfies readonly (keyof GenesysCloudFullApiKnowledge02GeneratedClient)[];

export function createGenesysCloudFullApiKnowledge02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiKnowledge02GeneratedClient {
  return {
    PostKnowledgeGuestSessionDocumentsSearchSuggestions: (...args) => callOperation("postKnowledgeGuestSessionDocumentsSearchSuggestions", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentsSearchSuggestions">)),
    PostKnowledgeGuestSessionDocumentViews: (...args) => callOperation("postKnowledgeGuestSessionDocumentViews", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentViews">)),
    PostKnowledgeGuestSessions: (...args) => callOperation("postKnowledgeGuestSessions", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessions">)),
    PostKnowledgeKnowledgebaseCategories: (...args) => callOperation("postKnowledgeKnowledgebaseCategories", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseCategories">)),
    PostKnowledgeKnowledgebaseChunksSearch: (...args) => callOperation("postKnowledgeKnowledgebaseChunksSearch", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseChunksSearch">)),
    PostKnowledgeKnowledgebaseDocumentCopies: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentCopies", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentCopies">)),
    PostKnowledgeKnowledgebaseDocumentFeedback: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentFeedback", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentFeedback">)),
    PostKnowledgeKnowledgebaseDocuments: (...args) => callOperation("postKnowledgeKnowledgebaseDocuments", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocuments">)),
    PostKnowledgeKnowledgebaseDocumentsAnswers: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentsAnswers", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsAnswers">)),
    PostKnowledgeKnowledgebaseDocumentsBulkRemove: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentsBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsBulkRemove">)),
    PostKnowledgeKnowledgebaseDocumentsBulkUpdate: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentsBulkUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsBulkUpdate">)),
    PostKnowledgeKnowledgebaseDocumentsPresentations: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentsPresentations", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsPresentations">)),
    PostKnowledgeKnowledgebaseDocumentsQuery: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsQuery">)),
    PostKnowledgeKnowledgebaseDocumentsSearch: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsSearch">)),
    PostKnowledgeKnowledgebaseDocumentsSearchSuggestions: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentsSearchSuggestions", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsSearchSuggestions">)),
    PostKnowledgeKnowledgebaseDocumentsVersionsBulkAdd: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd">)),
    PostKnowledgeKnowledgebaseDocumentVariations: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentVariations", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentVariations">)),
    PostKnowledgeKnowledgebaseDocumentVersions: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentVersions", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentVersions">)),
    PostKnowledgeKnowledgebaseDocumentViews: (...args) => callOperation("postKnowledgeKnowledgebaseDocumentViews", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseDocumentViews">)),
    PostKnowledgeKnowledgebaseExportJobs: (...args) => callOperation("postKnowledgeKnowledgebaseExportJobs", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseExportJobs">)),
    PostKnowledgeKnowledgebaseImportJobs: (...args) => callOperation("postKnowledgeKnowledgebaseImportJobs", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseImportJobs">)),
    PostKnowledgeKnowledgebaseLabels: (...args) => callOperation("postKnowledgeKnowledgebaseLabels", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseLabels">)),
    PostKnowledgeKnowledgebaseParseJobImport: (...args) => callOperation("postKnowledgeKnowledgebaseParseJobImport", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseParseJobImport">)),
    PostKnowledgeKnowledgebaseParseJobs: (...args) => callOperation("postKnowledgeKnowledgebaseParseJobs", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseParseJobs">)),
    PostKnowledgeKnowledgebases: (...args) => callOperation("postKnowledgeKnowledgebases", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebases">)),
    PostKnowledgeKnowledgebaseSourcesSalesforce: (...args) => callOperation("postKnowledgeKnowledgebaseSourcesSalesforce", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSourcesSalesforce">)),
    PostKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync: (...args) => callOperation("postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSourcesSalesforceSourceIdSync">)),
    PostKnowledgeKnowledgebaseSourcesServicenow: (...args) => callOperation("postKnowledgeKnowledgebaseSourcesServicenow", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSourcesServicenow">)),
    PostKnowledgeKnowledgebaseSourcesServicenowSourceIdSync: (...args) => callOperation("postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSourcesServicenowSourceIdSync">)),
    PostKnowledgeKnowledgebaseSynchronizeJobs: (...args) => callOperation("postKnowledgeKnowledgebaseSynchronizeJobs", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseSynchronizeJobs">)),
    PostKnowledgeKnowledgebaseUploadsUrlsJobs: (...args) => callOperation("postKnowledgeKnowledgebaseUploadsUrlsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeKnowledgebaseUploadsUrlsJobs">)),
    PostKnowledgeSearch: (...args) => callOperation("postKnowledgeSearch", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeSearch">)),
    PostKnowledgeSearchPreview: (...args) => callOperation("postKnowledgeSearchPreview", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeSearchPreview">)),
    PostKnowledgeSettings: (...args) => callOperation("postKnowledgeSettings", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeSettings">)),
    PostKnowledgeSources: (...args) => callOperation("postKnowledgeSources", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeSources">)),
    PostKnowledgeSourceSynchronizations: (...args) => callOperation("postKnowledgeSourceSynchronizations", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeSourceSynchronizations">)),
    PostKnowledgeSourceSynchronizationUploads: (...args) => callOperation("postKnowledgeSourceSynchronizationUploads", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeSourceSynchronizationUploads">)),
    PutKnowledgeKnowledgebaseSourcesSalesforceSourceId: (...args) => callOperation("putKnowledgeKnowledgebaseSourcesSalesforceSourceId", ...(args as GenesysCloudFullApiOperationArgs<"putKnowledgeKnowledgebaseSourcesSalesforceSourceId">)),
    PutKnowledgeKnowledgebaseSourcesServicenowSourceId: (...args) => callOperation("putKnowledgeKnowledgebaseSourcesServicenowSourceId", ...(args as GenesysCloudFullApiOperationArgs<"putKnowledgeKnowledgebaseSourcesServicenowSourceId">)),
    PutKnowledgeSource: (...args) => callOperation("putKnowledgeSource", ...(args as GenesysCloudFullApiOperationArgs<"putKnowledgeSource">)),
  };
}
