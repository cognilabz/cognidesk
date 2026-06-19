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
export const GenesysCloudFullApiKnowledge01OperationKeys = [
  "deleteKnowledgeConnection",
  "deleteKnowledgeKnowledgebase",
  "deleteKnowledgeKnowledgebaseCategory",
  "deleteKnowledgeKnowledgebaseDocument",
  "deleteKnowledgeKnowledgebaseDocumentVariation",
  "deleteKnowledgeKnowledgebaseExportJob",
  "deleteKnowledgeKnowledgebaseImportJob",
  "deleteKnowledgeKnowledgebaseLabel",
  "deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId",
  "deleteKnowledgeKnowledgebaseSourcesServicenowSourceId",
  "deleteKnowledgeKnowledgebaseSynchronizeJob",
  "deleteKnowledgeSetting",
  "deleteKnowledgeSource",
  "getKnowledgeConnection",
  "getKnowledgeConnectionOptions",
  "getKnowledgeConnections",
  "getKnowledgeGuestSessionCategories",
  "getKnowledgeGuestSessionDocument",
  "getKnowledgeGuestSessionDocuments",
  "getKnowledgeIntegrationOptions",
  "getKnowledgeKnowledgebase",
  "getKnowledgeKnowledgebaseCategories",
  "getKnowledgeKnowledgebaseCategory",
  "getKnowledgeKnowledgebaseDocument",
  "getKnowledgeKnowledgebaseDocumentFeedback",
  "getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId",
  "getKnowledgeKnowledgebaseDocuments",
  "getKnowledgeKnowledgebaseDocumentsFeedback",
  "getKnowledgeKnowledgebaseDocumentVariation",
  "getKnowledgeKnowledgebaseDocumentVariations",
  "getKnowledgeKnowledgebaseDocumentVersion",
  "getKnowledgeKnowledgebaseDocumentVersions",
  "getKnowledgeKnowledgebaseDocumentVersionVariation",
  "getKnowledgeKnowledgebaseDocumentVersionVariations",
  "getKnowledgeKnowledgebaseExportJob",
  "getKnowledgeKnowledgebaseImportJob",
  "getKnowledgeKnowledgebaseLabel",
  "getKnowledgeKnowledgebaseLabels",
  "getKnowledgeKnowledgebaseOperations",
  "getKnowledgeKnowledgebaseOperationsUsersQuery",
  "getKnowledgeKnowledgebaseParseJob",
  "getKnowledgeKnowledgebases",
  "getKnowledgeKnowledgebaseSources",
  "getKnowledgeKnowledgebaseSourcesSalesforceSourceId",
  "getKnowledgeKnowledgebaseSourcesServicenowSourceId",
  "getKnowledgeKnowledgebaseSynchronizeJob",
  "getKnowledgeKnowledgebaseUnansweredGroup",
  "getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup",
  "getKnowledgeKnowledgebaseUnansweredGroups",
  "getKnowledgeKnowledgebaseUploadsUrlsJob",
  "getKnowledgeSetting",
  "getKnowledgeSettings",
  "getKnowledgeSource",
  "getKnowledgeSources",
  "getKnowledgeSourcesSynchronizations",
  "getKnowledgeSourceSynchronization",
  "getKnowledgeSourceSynchronizations",
  "patchKnowledgeConnection",
  "patchKnowledgeGuestSessionDocumentsSearchSearchId",
  "patchKnowledgeKnowledgebase",
  "patchKnowledgeKnowledgebaseCategory",
  "patchKnowledgeKnowledgebaseChunksSearchSearchId",
  "patchKnowledgeKnowledgebaseDocument",
  "patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId",
  "patchKnowledgeKnowledgebaseDocumentsSearchSearchId",
  "patchKnowledgeKnowledgebaseDocumentVariation",
  "patchKnowledgeKnowledgebaseImportJob",
  "patchKnowledgeKnowledgebaseLabel",
  "patchKnowledgeKnowledgebaseParseJob",
  "patchKnowledgeKnowledgebaseSynchronizeJob",
  "patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup",
  "patchKnowledgeSetting",
  "patchKnowledgeSourceSynchronization",
  "postKnowledgeConnections",
  "postKnowledgeDocumentuploads",
  "postKnowledgeGuestSessionDocumentCopies",
  "postKnowledgeGuestSessionDocumentFeedback",
  "postKnowledgeGuestSessionDocumentsAnswers",
  "postKnowledgeGuestSessionDocumentsPresentations",
  "postKnowledgeGuestSessionDocumentsSearch"
] as const;
export type GenesysCloudFullApiKnowledge01OperationKey = typeof GenesysCloudFullApiKnowledge01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiKnowledge01OperationPathParamMap {
  "deleteKnowledgeConnection": { "connectionId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebase": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebaseCategory": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "categoryId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebaseDocument": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebaseDocumentVariation": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue; "documentVariationId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebaseExportJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "exportJobId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebaseImportJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "importJobId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebaseLabel": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "labelId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebaseSourcesServicenowSourceId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeKnowledgebaseSynchronizeJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "syncJobId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeSetting": { "knowledgeSettingId": GenesysCloudFullApiPathParamValue };
  "deleteKnowledgeSource": { "sourceId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeConnection": { "connectionId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeConnectionOptions": { "connectionId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeConnections": {};
  "getKnowledgeGuestSessionCategories": { "sessionId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeGuestSessionDocument": { "sessionId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeGuestSessionDocuments": { "sessionId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeIntegrationOptions": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebase": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseCategories": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseCategory": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "categoryId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocument": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocumentFeedback": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue; "feedbackId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocuments": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocumentsFeedback": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocumentVariation": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue; "documentVariationId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocumentVariations": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocumentVersion": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocumentVersions": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocumentVersionVariation": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue; "variationId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseDocumentVersionVariations": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseExportJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "exportJobId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseImportJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "importJobId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseLabel": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "labelId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseLabels": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseOperations": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseOperationsUsersQuery": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseParseJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "parseJobId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebases": {};
  "getKnowledgeKnowledgebaseSources": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseSourcesSalesforceSourceId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseSourcesServicenowSourceId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseSynchronizeJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "syncJobId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseUnansweredGroup": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "groupId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "groupId": GenesysCloudFullApiPathParamValue; "phraseGroupId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseUnansweredGroups": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeKnowledgebaseUploadsUrlsJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeSetting": { "knowledgeSettingId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeSettings": {};
  "getKnowledgeSource": { "sourceId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeSources": {};
  "getKnowledgeSourcesSynchronizations": {};
  "getKnowledgeSourceSynchronization": { "sourceId": GenesysCloudFullApiPathParamValue; "synchronizationId": GenesysCloudFullApiPathParamValue };
  "getKnowledgeSourceSynchronizations": { "sourceId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeConnection": { "connectionId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeGuestSessionDocumentsSearchSearchId": { "sessionId": GenesysCloudFullApiPathParamValue; "searchId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebase": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseCategory": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "categoryId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseChunksSearchSearchId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "searchId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseDocument": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue; "feedbackId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseDocumentsSearchSearchId": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "searchId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseDocumentVariation": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue; "documentVariationId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseImportJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "importJobId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseLabel": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "labelId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseParseJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "parseJobId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseSynchronizeJob": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "syncJobId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup": { "knowledgeBaseId": GenesysCloudFullApiPathParamValue; "groupId": GenesysCloudFullApiPathParamValue; "phraseGroupId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeSetting": { "knowledgeSettingId": GenesysCloudFullApiPathParamValue };
  "patchKnowledgeSourceSynchronization": { "sourceId": GenesysCloudFullApiPathParamValue; "synchronizationId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeConnections": {};
  "postKnowledgeDocumentuploads": {};
  "postKnowledgeGuestSessionDocumentCopies": { "sessionId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeGuestSessionDocumentFeedback": { "sessionId": GenesysCloudFullApiPathParamValue; "documentId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeGuestSessionDocumentsAnswers": { "sessionId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeGuestSessionDocumentsPresentations": { "sessionId": GenesysCloudFullApiPathParamValue };
  "postKnowledgeGuestSessionDocumentsSearch": { "sessionId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiKnowledge01OperationRequestMap {
  "deleteKnowledgeConnection": GenesysCloudFullApiOperationInput<"deleteKnowledgeConnection">;
  "deleteKnowledgeKnowledgebase": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebase">;
  "deleteKnowledgeKnowledgebaseCategory": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebaseCategory">;
  "deleteKnowledgeKnowledgebaseDocument": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebaseDocument">;
  "deleteKnowledgeKnowledgebaseDocumentVariation": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebaseDocumentVariation">;
  "deleteKnowledgeKnowledgebaseExportJob": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebaseExportJob">;
  "deleteKnowledgeKnowledgebaseImportJob": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebaseImportJob">;
  "deleteKnowledgeKnowledgebaseLabel": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebaseLabel">;
  "deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId">;
  "deleteKnowledgeKnowledgebaseSourcesServicenowSourceId": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebaseSourcesServicenowSourceId">;
  "deleteKnowledgeKnowledgebaseSynchronizeJob": GenesysCloudFullApiOperationInput<"deleteKnowledgeKnowledgebaseSynchronizeJob">;
  "deleteKnowledgeSetting": GenesysCloudFullApiOperationInput<"deleteKnowledgeSetting">;
  "deleteKnowledgeSource": GenesysCloudFullApiOperationInput<"deleteKnowledgeSource">;
  "getKnowledgeConnection": GenesysCloudFullApiOperationInput<"getKnowledgeConnection">;
  "getKnowledgeConnectionOptions": GenesysCloudFullApiOperationInput<"getKnowledgeConnectionOptions">;
  "getKnowledgeConnections": GenesysCloudFullApiOperationInput<"getKnowledgeConnections">;
  "getKnowledgeGuestSessionCategories": GenesysCloudFullApiOperationInput<"getKnowledgeGuestSessionCategories">;
  "getKnowledgeGuestSessionDocument": GenesysCloudFullApiOperationInput<"getKnowledgeGuestSessionDocument">;
  "getKnowledgeGuestSessionDocuments": GenesysCloudFullApiOperationInput<"getKnowledgeGuestSessionDocuments">;
  "getKnowledgeIntegrationOptions": GenesysCloudFullApiOperationInput<"getKnowledgeIntegrationOptions">;
  "getKnowledgeKnowledgebase": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebase">;
  "getKnowledgeKnowledgebaseCategories": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseCategories">;
  "getKnowledgeKnowledgebaseCategory": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseCategory">;
  "getKnowledgeKnowledgebaseDocument": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocument">;
  "getKnowledgeKnowledgebaseDocumentFeedback": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocumentFeedback">;
  "getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId">;
  "getKnowledgeKnowledgebaseDocuments": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocuments">;
  "getKnowledgeKnowledgebaseDocumentsFeedback": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocumentsFeedback">;
  "getKnowledgeKnowledgebaseDocumentVariation": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocumentVariation">;
  "getKnowledgeKnowledgebaseDocumentVariations": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocumentVariations">;
  "getKnowledgeKnowledgebaseDocumentVersion": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocumentVersion">;
  "getKnowledgeKnowledgebaseDocumentVersions": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocumentVersions">;
  "getKnowledgeKnowledgebaseDocumentVersionVariation": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocumentVersionVariation">;
  "getKnowledgeKnowledgebaseDocumentVersionVariations": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseDocumentVersionVariations">;
  "getKnowledgeKnowledgebaseExportJob": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseExportJob">;
  "getKnowledgeKnowledgebaseImportJob": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseImportJob">;
  "getKnowledgeKnowledgebaseLabel": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseLabel">;
  "getKnowledgeKnowledgebaseLabels": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseLabels">;
  "getKnowledgeKnowledgebaseOperations": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseOperations">;
  "getKnowledgeKnowledgebaseOperationsUsersQuery": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseOperationsUsersQuery">;
  "getKnowledgeKnowledgebaseParseJob": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseParseJob">;
  "getKnowledgeKnowledgebases": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebases">;
  "getKnowledgeKnowledgebaseSources": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseSources">;
  "getKnowledgeKnowledgebaseSourcesSalesforceSourceId": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseSourcesSalesforceSourceId">;
  "getKnowledgeKnowledgebaseSourcesServicenowSourceId": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseSourcesServicenowSourceId">;
  "getKnowledgeKnowledgebaseSynchronizeJob": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseSynchronizeJob">;
  "getKnowledgeKnowledgebaseUnansweredGroup": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseUnansweredGroup">;
  "getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup">;
  "getKnowledgeKnowledgebaseUnansweredGroups": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseUnansweredGroups">;
  "getKnowledgeKnowledgebaseUploadsUrlsJob": GenesysCloudFullApiOperationInput<"getKnowledgeKnowledgebaseUploadsUrlsJob">;
  "getKnowledgeSetting": GenesysCloudFullApiOperationInput<"getKnowledgeSetting">;
  "getKnowledgeSettings": GenesysCloudFullApiOperationInput<"getKnowledgeSettings">;
  "getKnowledgeSource": GenesysCloudFullApiOperationInput<"getKnowledgeSource">;
  "getKnowledgeSources": GenesysCloudFullApiOperationInput<"getKnowledgeSources">;
  "getKnowledgeSourcesSynchronizations": GenesysCloudFullApiOperationInput<"getKnowledgeSourcesSynchronizations">;
  "getKnowledgeSourceSynchronization": GenesysCloudFullApiOperationInput<"getKnowledgeSourceSynchronization">;
  "getKnowledgeSourceSynchronizations": GenesysCloudFullApiOperationInput<"getKnowledgeSourceSynchronizations">;
  "patchKnowledgeConnection": GenesysCloudFullApiOperationInput<"patchKnowledgeConnection">;
  "patchKnowledgeGuestSessionDocumentsSearchSearchId": GenesysCloudFullApiOperationInput<"patchKnowledgeGuestSessionDocumentsSearchSearchId">;
  "patchKnowledgeKnowledgebase": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebase">;
  "patchKnowledgeKnowledgebaseCategory": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseCategory">;
  "patchKnowledgeKnowledgebaseChunksSearchSearchId": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseChunksSearchSearchId">;
  "patchKnowledgeKnowledgebaseDocument": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseDocument">;
  "patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId">;
  "patchKnowledgeKnowledgebaseDocumentsSearchSearchId": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseDocumentsSearchSearchId">;
  "patchKnowledgeKnowledgebaseDocumentVariation": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseDocumentVariation">;
  "patchKnowledgeKnowledgebaseImportJob": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseImportJob">;
  "patchKnowledgeKnowledgebaseLabel": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseLabel">;
  "patchKnowledgeKnowledgebaseParseJob": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseParseJob">;
  "patchKnowledgeKnowledgebaseSynchronizeJob": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseSynchronizeJob">;
  "patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup": GenesysCloudFullApiOperationInput<"patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup">;
  "patchKnowledgeSetting": GenesysCloudFullApiOperationInput<"patchKnowledgeSetting">;
  "patchKnowledgeSourceSynchronization": GenesysCloudFullApiOperationInput<"patchKnowledgeSourceSynchronization">;
  "postKnowledgeConnections": GenesysCloudFullApiOperationInput<"postKnowledgeConnections">;
  "postKnowledgeDocumentuploads": GenesysCloudFullApiOperationInput<"postKnowledgeDocumentuploads">;
  "postKnowledgeGuestSessionDocumentCopies": GenesysCloudFullApiOperationInput<"postKnowledgeGuestSessionDocumentCopies">;
  "postKnowledgeGuestSessionDocumentFeedback": GenesysCloudFullApiOperationInput<"postKnowledgeGuestSessionDocumentFeedback">;
  "postKnowledgeGuestSessionDocumentsAnswers": GenesysCloudFullApiOperationInput<"postKnowledgeGuestSessionDocumentsAnswers">;
  "postKnowledgeGuestSessionDocumentsPresentations": GenesysCloudFullApiOperationInput<"postKnowledgeGuestSessionDocumentsPresentations">;
  "postKnowledgeGuestSessionDocumentsSearch": GenesysCloudFullApiOperationInput<"postKnowledgeGuestSessionDocumentsSearch">;
}

export interface GenesysCloudFullApiKnowledge01GeneratedClient {
  DeleteKnowledgeConnection(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeConnection">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeConnection"]>;
  DeleteKnowledgeKnowledgebase(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebase">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebase"]>;
  DeleteKnowledgeKnowledgebaseCategory(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseCategory">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebaseCategory"]>;
  DeleteKnowledgeKnowledgebaseDocument(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseDocument">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebaseDocument"]>;
  DeleteKnowledgeKnowledgebaseDocumentVariation(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseDocumentVariation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebaseDocumentVariation"]>;
  DeleteKnowledgeKnowledgebaseExportJob(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseExportJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebaseExportJob"]>;
  DeleteKnowledgeKnowledgebaseImportJob(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseImportJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebaseImportJob"]>;
  DeleteKnowledgeKnowledgebaseLabel(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseLabel">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebaseLabel"]>;
  DeleteKnowledgeKnowledgebaseSourcesSalesforceSourceId(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId"]>;
  DeleteKnowledgeKnowledgebaseSourcesServicenowSourceId(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseSourcesServicenowSourceId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebaseSourcesServicenowSourceId"]>;
  DeleteKnowledgeKnowledgebaseSynchronizeJob(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseSynchronizeJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeKnowledgebaseSynchronizeJob"]>;
  DeleteKnowledgeSetting(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeSetting">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeSetting"]>;
  DeleteKnowledgeSource(...args: GenesysCloudFullApiOperationArgs<"deleteKnowledgeSource">): Promise<GenesysCloudFullApiOperationResponseMap["deleteKnowledgeSource"]>;
  GetKnowledgeConnection(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeConnection">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeConnection"]>;
  GetKnowledgeConnectionOptions(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeConnectionOptions">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeConnectionOptions"]>;
  GetKnowledgeConnections(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeConnections">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeConnections"]>;
  GetKnowledgeGuestSessionCategories(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeGuestSessionCategories">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeGuestSessionCategories"]>;
  GetKnowledgeGuestSessionDocument(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeGuestSessionDocument">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeGuestSessionDocument"]>;
  GetKnowledgeGuestSessionDocuments(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeGuestSessionDocuments">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeGuestSessionDocuments"]>;
  GetKnowledgeIntegrationOptions(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeIntegrationOptions">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeIntegrationOptions"]>;
  GetKnowledgeKnowledgebase(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebase">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebase"]>;
  GetKnowledgeKnowledgebaseCategories(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseCategories">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseCategories"]>;
  GetKnowledgeKnowledgebaseCategory(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseCategory">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseCategory"]>;
  GetKnowledgeKnowledgebaseDocument(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocument">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocument"]>;
  GetKnowledgeKnowledgebaseDocumentFeedback(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentFeedback">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocumentFeedback"]>;
  GetKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId"]>;
  GetKnowledgeKnowledgebaseDocuments(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocuments">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocuments"]>;
  GetKnowledgeKnowledgebaseDocumentsFeedback(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentsFeedback">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocumentsFeedback"]>;
  GetKnowledgeKnowledgebaseDocumentVariation(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVariation">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocumentVariation"]>;
  GetKnowledgeKnowledgebaseDocumentVariations(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVariations">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocumentVariations"]>;
  GetKnowledgeKnowledgebaseDocumentVersion(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocumentVersion"]>;
  GetKnowledgeKnowledgebaseDocumentVersions(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocumentVersions"]>;
  GetKnowledgeKnowledgebaseDocumentVersionVariation(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVersionVariation">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocumentVersionVariation"]>;
  GetKnowledgeKnowledgebaseDocumentVersionVariations(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVersionVariations">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseDocumentVersionVariations"]>;
  GetKnowledgeKnowledgebaseExportJob(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseExportJob">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseExportJob"]>;
  GetKnowledgeKnowledgebaseImportJob(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseImportJob">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseImportJob"]>;
  GetKnowledgeKnowledgebaseLabel(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseLabel">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseLabel"]>;
  GetKnowledgeKnowledgebaseLabels(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseLabels">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseLabels"]>;
  GetKnowledgeKnowledgebaseOperations(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseOperations">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseOperations"]>;
  GetKnowledgeKnowledgebaseOperationsUsersQuery(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseOperationsUsersQuery">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseOperationsUsersQuery"]>;
  GetKnowledgeKnowledgebaseParseJob(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseParseJob">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseParseJob"]>;
  GetKnowledgeKnowledgebases(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebases">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebases"]>;
  GetKnowledgeKnowledgebaseSources(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseSources">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseSources"]>;
  GetKnowledgeKnowledgebaseSourcesSalesforceSourceId(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseSourcesSalesforceSourceId">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseSourcesSalesforceSourceId"]>;
  GetKnowledgeKnowledgebaseSourcesServicenowSourceId(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseSourcesServicenowSourceId">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseSourcesServicenowSourceId"]>;
  GetKnowledgeKnowledgebaseSynchronizeJob(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseSynchronizeJob">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseSynchronizeJob"]>;
  GetKnowledgeKnowledgebaseUnansweredGroup(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseUnansweredGroup">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseUnansweredGroup"]>;
  GetKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup"]>;
  GetKnowledgeKnowledgebaseUnansweredGroups(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseUnansweredGroups">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseUnansweredGroups"]>;
  GetKnowledgeKnowledgebaseUploadsUrlsJob(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseUploadsUrlsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeKnowledgebaseUploadsUrlsJob"]>;
  GetKnowledgeSetting(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeSetting">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeSetting"]>;
  GetKnowledgeSettings(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeSettings"]>;
  GetKnowledgeSource(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeSource">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeSource"]>;
  GetKnowledgeSources(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeSources">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeSources"]>;
  GetKnowledgeSourcesSynchronizations(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeSourcesSynchronizations">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeSourcesSynchronizations"]>;
  GetKnowledgeSourceSynchronization(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeSourceSynchronization">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeSourceSynchronization"]>;
  GetKnowledgeSourceSynchronizations(...args: GenesysCloudFullApiOperationArgs<"getKnowledgeSourceSynchronizations">): Promise<GenesysCloudFullApiOperationResponseMap["getKnowledgeSourceSynchronizations"]>;
  PatchKnowledgeConnection(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeConnection">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeConnection"]>;
  PatchKnowledgeGuestSessionDocumentsSearchSearchId(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeGuestSessionDocumentsSearchSearchId">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeGuestSessionDocumentsSearchSearchId"]>;
  PatchKnowledgeKnowledgebase(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebase">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebase"]>;
  PatchKnowledgeKnowledgebaseCategory(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseCategory">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseCategory"]>;
  PatchKnowledgeKnowledgebaseChunksSearchSearchId(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseChunksSearchSearchId">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseChunksSearchSearchId"]>;
  PatchKnowledgeKnowledgebaseDocument(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseDocument">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseDocument"]>;
  PatchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId"]>;
  PatchKnowledgeKnowledgebaseDocumentsSearchSearchId(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseDocumentsSearchSearchId">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseDocumentsSearchSearchId"]>;
  PatchKnowledgeKnowledgebaseDocumentVariation(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseDocumentVariation">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseDocumentVariation"]>;
  PatchKnowledgeKnowledgebaseImportJob(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseImportJob">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseImportJob"]>;
  PatchKnowledgeKnowledgebaseLabel(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseLabel">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseLabel"]>;
  PatchKnowledgeKnowledgebaseParseJob(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseParseJob">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseParseJob"]>;
  PatchKnowledgeKnowledgebaseSynchronizeJob(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseSynchronizeJob">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseSynchronizeJob"]>;
  PatchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup"]>;
  PatchKnowledgeSetting(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeSetting">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeSetting"]>;
  PatchKnowledgeSourceSynchronization(...args: GenesysCloudFullApiOperationArgs<"patchKnowledgeSourceSynchronization">): Promise<GenesysCloudFullApiOperationResponseMap["patchKnowledgeSourceSynchronization"]>;
  PostKnowledgeConnections(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeConnections">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeConnections"]>;
  PostKnowledgeDocumentuploads(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeDocumentuploads">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeDocumentuploads"]>;
  PostKnowledgeGuestSessionDocumentCopies(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentCopies">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeGuestSessionDocumentCopies"]>;
  PostKnowledgeGuestSessionDocumentFeedback(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentFeedback">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeGuestSessionDocumentFeedback"]>;
  PostKnowledgeGuestSessionDocumentsAnswers(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentsAnswers">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeGuestSessionDocumentsAnswers"]>;
  PostKnowledgeGuestSessionDocumentsPresentations(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentsPresentations">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeGuestSessionDocumentsPresentations"]>;
  PostKnowledgeGuestSessionDocumentsSearch(...args: GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postKnowledgeGuestSessionDocumentsSearch"]>;
}

export const GenesysCloudFullApiKnowledge01GeneratedFunctionNames = [
  "DeleteKnowledgeConnection",
  "DeleteKnowledgeKnowledgebase",
  "DeleteKnowledgeKnowledgebaseCategory",
  "DeleteKnowledgeKnowledgebaseDocument",
  "DeleteKnowledgeKnowledgebaseDocumentVariation",
  "DeleteKnowledgeKnowledgebaseExportJob",
  "DeleteKnowledgeKnowledgebaseImportJob",
  "DeleteKnowledgeKnowledgebaseLabel",
  "DeleteKnowledgeKnowledgebaseSourcesSalesforceSourceId",
  "DeleteKnowledgeKnowledgebaseSourcesServicenowSourceId",
  "DeleteKnowledgeKnowledgebaseSynchronizeJob",
  "DeleteKnowledgeSetting",
  "DeleteKnowledgeSource",
  "GetKnowledgeConnection",
  "GetKnowledgeConnectionOptions",
  "GetKnowledgeConnections",
  "GetKnowledgeGuestSessionCategories",
  "GetKnowledgeGuestSessionDocument",
  "GetKnowledgeGuestSessionDocuments",
  "GetKnowledgeIntegrationOptions",
  "GetKnowledgeKnowledgebase",
  "GetKnowledgeKnowledgebaseCategories",
  "GetKnowledgeKnowledgebaseCategory",
  "GetKnowledgeKnowledgebaseDocument",
  "GetKnowledgeKnowledgebaseDocumentFeedback",
  "GetKnowledgeKnowledgebaseDocumentFeedbackFeedbackId",
  "GetKnowledgeKnowledgebaseDocuments",
  "GetKnowledgeKnowledgebaseDocumentsFeedback",
  "GetKnowledgeKnowledgebaseDocumentVariation",
  "GetKnowledgeKnowledgebaseDocumentVariations",
  "GetKnowledgeKnowledgebaseDocumentVersion",
  "GetKnowledgeKnowledgebaseDocumentVersions",
  "GetKnowledgeKnowledgebaseDocumentVersionVariation",
  "GetKnowledgeKnowledgebaseDocumentVersionVariations",
  "GetKnowledgeKnowledgebaseExportJob",
  "GetKnowledgeKnowledgebaseImportJob",
  "GetKnowledgeKnowledgebaseLabel",
  "GetKnowledgeKnowledgebaseLabels",
  "GetKnowledgeKnowledgebaseOperations",
  "GetKnowledgeKnowledgebaseOperationsUsersQuery",
  "GetKnowledgeKnowledgebaseParseJob",
  "GetKnowledgeKnowledgebases",
  "GetKnowledgeKnowledgebaseSources",
  "GetKnowledgeKnowledgebaseSourcesSalesforceSourceId",
  "GetKnowledgeKnowledgebaseSourcesServicenowSourceId",
  "GetKnowledgeKnowledgebaseSynchronizeJob",
  "GetKnowledgeKnowledgebaseUnansweredGroup",
  "GetKnowledgeKnowledgebaseUnansweredGroupPhrasegroup",
  "GetKnowledgeKnowledgebaseUnansweredGroups",
  "GetKnowledgeKnowledgebaseUploadsUrlsJob",
  "GetKnowledgeSetting",
  "GetKnowledgeSettings",
  "GetKnowledgeSource",
  "GetKnowledgeSources",
  "GetKnowledgeSourcesSynchronizations",
  "GetKnowledgeSourceSynchronization",
  "GetKnowledgeSourceSynchronizations",
  "PatchKnowledgeConnection",
  "PatchKnowledgeGuestSessionDocumentsSearchSearchId",
  "PatchKnowledgeKnowledgebase",
  "PatchKnowledgeKnowledgebaseCategory",
  "PatchKnowledgeKnowledgebaseChunksSearchSearchId",
  "PatchKnowledgeKnowledgebaseDocument",
  "PatchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId",
  "PatchKnowledgeKnowledgebaseDocumentsSearchSearchId",
  "PatchKnowledgeKnowledgebaseDocumentVariation",
  "PatchKnowledgeKnowledgebaseImportJob",
  "PatchKnowledgeKnowledgebaseLabel",
  "PatchKnowledgeKnowledgebaseParseJob",
  "PatchKnowledgeKnowledgebaseSynchronizeJob",
  "PatchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup",
  "PatchKnowledgeSetting",
  "PatchKnowledgeSourceSynchronization",
  "PostKnowledgeConnections",
  "PostKnowledgeDocumentuploads",
  "PostKnowledgeGuestSessionDocumentCopies",
  "PostKnowledgeGuestSessionDocumentFeedback",
  "PostKnowledgeGuestSessionDocumentsAnswers",
  "PostKnowledgeGuestSessionDocumentsPresentations",
  "PostKnowledgeGuestSessionDocumentsSearch"
] as const satisfies readonly (keyof GenesysCloudFullApiKnowledge01GeneratedClient)[];

export function createGenesysCloudFullApiKnowledge01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiKnowledge01GeneratedClient {
  return {
    DeleteKnowledgeConnection: (...args) => callOperation("deleteKnowledgeConnection", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeConnection">)),
    DeleteKnowledgeKnowledgebase: (...args) => callOperation("deleteKnowledgeKnowledgebase", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebase">)),
    DeleteKnowledgeKnowledgebaseCategory: (...args) => callOperation("deleteKnowledgeKnowledgebaseCategory", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseCategory">)),
    DeleteKnowledgeKnowledgebaseDocument: (...args) => callOperation("deleteKnowledgeKnowledgebaseDocument", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseDocument">)),
    DeleteKnowledgeKnowledgebaseDocumentVariation: (...args) => callOperation("deleteKnowledgeKnowledgebaseDocumentVariation", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseDocumentVariation">)),
    DeleteKnowledgeKnowledgebaseExportJob: (...args) => callOperation("deleteKnowledgeKnowledgebaseExportJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseExportJob">)),
    DeleteKnowledgeKnowledgebaseImportJob: (...args) => callOperation("deleteKnowledgeKnowledgebaseImportJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseImportJob">)),
    DeleteKnowledgeKnowledgebaseLabel: (...args) => callOperation("deleteKnowledgeKnowledgebaseLabel", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseLabel">)),
    DeleteKnowledgeKnowledgebaseSourcesSalesforceSourceId: (...args) => callOperation("deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseSourcesSalesforceSourceId">)),
    DeleteKnowledgeKnowledgebaseSourcesServicenowSourceId: (...args) => callOperation("deleteKnowledgeKnowledgebaseSourcesServicenowSourceId", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseSourcesServicenowSourceId">)),
    DeleteKnowledgeKnowledgebaseSynchronizeJob: (...args) => callOperation("deleteKnowledgeKnowledgebaseSynchronizeJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeKnowledgebaseSynchronizeJob">)),
    DeleteKnowledgeSetting: (...args) => callOperation("deleteKnowledgeSetting", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeSetting">)),
    DeleteKnowledgeSource: (...args) => callOperation("deleteKnowledgeSource", ...(args as GenesysCloudFullApiOperationArgs<"deleteKnowledgeSource">)),
    GetKnowledgeConnection: (...args) => callOperation("getKnowledgeConnection", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeConnection">)),
    GetKnowledgeConnectionOptions: (...args) => callOperation("getKnowledgeConnectionOptions", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeConnectionOptions">)),
    GetKnowledgeConnections: (...args) => callOperation("getKnowledgeConnections", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeConnections">)),
    GetKnowledgeGuestSessionCategories: (...args) => callOperation("getKnowledgeGuestSessionCategories", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeGuestSessionCategories">)),
    GetKnowledgeGuestSessionDocument: (...args) => callOperation("getKnowledgeGuestSessionDocument", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeGuestSessionDocument">)),
    GetKnowledgeGuestSessionDocuments: (...args) => callOperation("getKnowledgeGuestSessionDocuments", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeGuestSessionDocuments">)),
    GetKnowledgeIntegrationOptions: (...args) => callOperation("getKnowledgeIntegrationOptions", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeIntegrationOptions">)),
    GetKnowledgeKnowledgebase: (...args) => callOperation("getKnowledgeKnowledgebase", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebase">)),
    GetKnowledgeKnowledgebaseCategories: (...args) => callOperation("getKnowledgeKnowledgebaseCategories", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseCategories">)),
    GetKnowledgeKnowledgebaseCategory: (...args) => callOperation("getKnowledgeKnowledgebaseCategory", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseCategory">)),
    GetKnowledgeKnowledgebaseDocument: (...args) => callOperation("getKnowledgeKnowledgebaseDocument", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocument">)),
    GetKnowledgeKnowledgebaseDocumentFeedback: (...args) => callOperation("getKnowledgeKnowledgebaseDocumentFeedback", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentFeedback">)),
    GetKnowledgeKnowledgebaseDocumentFeedbackFeedbackId: (...args) => callOperation("getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId">)),
    GetKnowledgeKnowledgebaseDocuments: (...args) => callOperation("getKnowledgeKnowledgebaseDocuments", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocuments">)),
    GetKnowledgeKnowledgebaseDocumentsFeedback: (...args) => callOperation("getKnowledgeKnowledgebaseDocumentsFeedback", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentsFeedback">)),
    GetKnowledgeKnowledgebaseDocumentVariation: (...args) => callOperation("getKnowledgeKnowledgebaseDocumentVariation", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVariation">)),
    GetKnowledgeKnowledgebaseDocumentVariations: (...args) => callOperation("getKnowledgeKnowledgebaseDocumentVariations", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVariations">)),
    GetKnowledgeKnowledgebaseDocumentVersion: (...args) => callOperation("getKnowledgeKnowledgebaseDocumentVersion", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVersion">)),
    GetKnowledgeKnowledgebaseDocumentVersions: (...args) => callOperation("getKnowledgeKnowledgebaseDocumentVersions", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVersions">)),
    GetKnowledgeKnowledgebaseDocumentVersionVariation: (...args) => callOperation("getKnowledgeKnowledgebaseDocumentVersionVariation", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVersionVariation">)),
    GetKnowledgeKnowledgebaseDocumentVersionVariations: (...args) => callOperation("getKnowledgeKnowledgebaseDocumentVersionVariations", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseDocumentVersionVariations">)),
    GetKnowledgeKnowledgebaseExportJob: (...args) => callOperation("getKnowledgeKnowledgebaseExportJob", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseExportJob">)),
    GetKnowledgeKnowledgebaseImportJob: (...args) => callOperation("getKnowledgeKnowledgebaseImportJob", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseImportJob">)),
    GetKnowledgeKnowledgebaseLabel: (...args) => callOperation("getKnowledgeKnowledgebaseLabel", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseLabel">)),
    GetKnowledgeKnowledgebaseLabels: (...args) => callOperation("getKnowledgeKnowledgebaseLabels", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseLabels">)),
    GetKnowledgeKnowledgebaseOperations: (...args) => callOperation("getKnowledgeKnowledgebaseOperations", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseOperations">)),
    GetKnowledgeKnowledgebaseOperationsUsersQuery: (...args) => callOperation("getKnowledgeKnowledgebaseOperationsUsersQuery", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseOperationsUsersQuery">)),
    GetKnowledgeKnowledgebaseParseJob: (...args) => callOperation("getKnowledgeKnowledgebaseParseJob", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseParseJob">)),
    GetKnowledgeKnowledgebases: (...args) => callOperation("getKnowledgeKnowledgebases", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebases">)),
    GetKnowledgeKnowledgebaseSources: (...args) => callOperation("getKnowledgeKnowledgebaseSources", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseSources">)),
    GetKnowledgeKnowledgebaseSourcesSalesforceSourceId: (...args) => callOperation("getKnowledgeKnowledgebaseSourcesSalesforceSourceId", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseSourcesSalesforceSourceId">)),
    GetKnowledgeKnowledgebaseSourcesServicenowSourceId: (...args) => callOperation("getKnowledgeKnowledgebaseSourcesServicenowSourceId", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseSourcesServicenowSourceId">)),
    GetKnowledgeKnowledgebaseSynchronizeJob: (...args) => callOperation("getKnowledgeKnowledgebaseSynchronizeJob", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseSynchronizeJob">)),
    GetKnowledgeKnowledgebaseUnansweredGroup: (...args) => callOperation("getKnowledgeKnowledgebaseUnansweredGroup", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseUnansweredGroup">)),
    GetKnowledgeKnowledgebaseUnansweredGroupPhrasegroup: (...args) => callOperation("getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup">)),
    GetKnowledgeKnowledgebaseUnansweredGroups: (...args) => callOperation("getKnowledgeKnowledgebaseUnansweredGroups", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseUnansweredGroups">)),
    GetKnowledgeKnowledgebaseUploadsUrlsJob: (...args) => callOperation("getKnowledgeKnowledgebaseUploadsUrlsJob", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeKnowledgebaseUploadsUrlsJob">)),
    GetKnowledgeSetting: (...args) => callOperation("getKnowledgeSetting", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeSetting">)),
    GetKnowledgeSettings: (...args) => callOperation("getKnowledgeSettings", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeSettings">)),
    GetKnowledgeSource: (...args) => callOperation("getKnowledgeSource", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeSource">)),
    GetKnowledgeSources: (...args) => callOperation("getKnowledgeSources", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeSources">)),
    GetKnowledgeSourcesSynchronizations: (...args) => callOperation("getKnowledgeSourcesSynchronizations", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeSourcesSynchronizations">)),
    GetKnowledgeSourceSynchronization: (...args) => callOperation("getKnowledgeSourceSynchronization", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeSourceSynchronization">)),
    GetKnowledgeSourceSynchronizations: (...args) => callOperation("getKnowledgeSourceSynchronizations", ...(args as GenesysCloudFullApiOperationArgs<"getKnowledgeSourceSynchronizations">)),
    PatchKnowledgeConnection: (...args) => callOperation("patchKnowledgeConnection", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeConnection">)),
    PatchKnowledgeGuestSessionDocumentsSearchSearchId: (...args) => callOperation("patchKnowledgeGuestSessionDocumentsSearchSearchId", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeGuestSessionDocumentsSearchSearchId">)),
    PatchKnowledgeKnowledgebase: (...args) => callOperation("patchKnowledgeKnowledgebase", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebase">)),
    PatchKnowledgeKnowledgebaseCategory: (...args) => callOperation("patchKnowledgeKnowledgebaseCategory", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseCategory">)),
    PatchKnowledgeKnowledgebaseChunksSearchSearchId: (...args) => callOperation("patchKnowledgeKnowledgebaseChunksSearchSearchId", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseChunksSearchSearchId">)),
    PatchKnowledgeKnowledgebaseDocument: (...args) => callOperation("patchKnowledgeKnowledgebaseDocument", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseDocument">)),
    PatchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId: (...args) => callOperation("patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseDocumentFeedbackFeedbackId">)),
    PatchKnowledgeKnowledgebaseDocumentsSearchSearchId: (...args) => callOperation("patchKnowledgeKnowledgebaseDocumentsSearchSearchId", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseDocumentsSearchSearchId">)),
    PatchKnowledgeKnowledgebaseDocumentVariation: (...args) => callOperation("patchKnowledgeKnowledgebaseDocumentVariation", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseDocumentVariation">)),
    PatchKnowledgeKnowledgebaseImportJob: (...args) => callOperation("patchKnowledgeKnowledgebaseImportJob", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseImportJob">)),
    PatchKnowledgeKnowledgebaseLabel: (...args) => callOperation("patchKnowledgeKnowledgebaseLabel", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseLabel">)),
    PatchKnowledgeKnowledgebaseParseJob: (...args) => callOperation("patchKnowledgeKnowledgebaseParseJob", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseParseJob">)),
    PatchKnowledgeKnowledgebaseSynchronizeJob: (...args) => callOperation("patchKnowledgeKnowledgebaseSynchronizeJob", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseSynchronizeJob">)),
    PatchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup: (...args) => callOperation("patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup">)),
    PatchKnowledgeSetting: (...args) => callOperation("patchKnowledgeSetting", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeSetting">)),
    PatchKnowledgeSourceSynchronization: (...args) => callOperation("patchKnowledgeSourceSynchronization", ...(args as GenesysCloudFullApiOperationArgs<"patchKnowledgeSourceSynchronization">)),
    PostKnowledgeConnections: (...args) => callOperation("postKnowledgeConnections", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeConnections">)),
    PostKnowledgeDocumentuploads: (...args) => callOperation("postKnowledgeDocumentuploads", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeDocumentuploads">)),
    PostKnowledgeGuestSessionDocumentCopies: (...args) => callOperation("postKnowledgeGuestSessionDocumentCopies", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentCopies">)),
    PostKnowledgeGuestSessionDocumentFeedback: (...args) => callOperation("postKnowledgeGuestSessionDocumentFeedback", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentFeedback">)),
    PostKnowledgeGuestSessionDocumentsAnswers: (...args) => callOperation("postKnowledgeGuestSessionDocumentsAnswers", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentsAnswers">)),
    PostKnowledgeGuestSessionDocumentsPresentations: (...args) => callOperation("postKnowledgeGuestSessionDocumentsPresentations", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentsPresentations">)),
    PostKnowledgeGuestSessionDocumentsSearch: (...args) => callOperation("postKnowledgeGuestSessionDocumentsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postKnowledgeGuestSessionDocumentsSearch">)),
  };
}
