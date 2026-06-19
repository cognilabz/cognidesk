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
export const GenesysCloudFullApiExternalContacts01OperationKeys = [
  "deleteExternalcontactsContact",
  "deleteExternalcontactsContactNote",
  "deleteExternalcontactsContactsSchema",
  "deleteExternalcontactsExternalsource",
  "deleteExternalcontactsImportCsvSetting",
  "deleteExternalcontactsImportSetting",
  "deleteExternalcontactsOrganization",
  "deleteExternalcontactsOrganizationNote",
  "deleteExternalcontactsOrganizationTrustor",
  "deleteExternalcontactsRelationship",
  "getExternalcontactsContact",
  "getExternalcontactsContactIdentifiers",
  "getExternalcontactsContactJourneySegments",
  "getExternalcontactsContactJourneySessions",
  "getExternalcontactsContactNote",
  "getExternalcontactsContactNotes",
  "getExternalcontactsContacts",
  "getExternalcontactsContactsExport",
  "getExternalcontactsContactsExports",
  "getExternalcontactsContactsSchema",
  "getExternalcontactsContactsSchemas",
  "getExternalcontactsContactsSchemasCoretype",
  "getExternalcontactsContactsSchemasCoretypes",
  "getExternalcontactsContactsSchemasLimits",
  "getExternalcontactsContactsSchemaVersion",
  "getExternalcontactsContactsSchemaVersions",
  "getExternalcontactsContactUnresolved",
  "getExternalcontactsExternalsource",
  "getExternalcontactsExternalsources",
  "getExternalcontactsImportCsvSetting",
  "getExternalcontactsImportCsvSettings",
  "getExternalcontactsImportCsvUploadDetails",
  "getExternalcontactsImportCsvUploadPreview",
  "getExternalcontactsImportJob",
  "getExternalcontactsImportJobs",
  "getExternalcontactsImportSetting",
  "getExternalcontactsImportSettings",
  "getExternalcontactsOrganization",
  "getExternalcontactsOrganizationContacts",
  "getExternalcontactsOrganizationIdentifiers",
  "getExternalcontactsOrganizationNote",
  "getExternalcontactsOrganizationNotes",
  "getExternalcontactsOrganizationRelationships",
  "getExternalcontactsOrganizations",
  "getExternalcontactsOrganizationsSchema",
  "getExternalcontactsOrganizationsSchemas",
  "getExternalcontactsOrganizationsSchemasCoretype",
  "getExternalcontactsOrganizationsSchemasCoretypes",
  "getExternalcontactsOrganizationsSchemasLimits",
  "getExternalcontactsOrganizationsSchemaVersion",
  "getExternalcontactsOrganizationsSchemaVersions",
  "getExternalcontactsRelationship",
  "getExternalcontactsReversewhitepageslookup",
  "getExternalcontactsScanContacts",
  "getExternalcontactsScanContactsDivisionviewsAll",
  "getExternalcontactsScanNotes",
  "getExternalcontactsScanNotesDivisionviewsAll",
  "getExternalcontactsScanOrganizations",
  "getExternalcontactsScanOrganizationsDivisionviewsAll",
  "getExternalcontactsScanRelationships",
  "getExternalcontactsScanRelationshipsDivisionviewsAll",
  "patchExternalcontactsContact",
  "patchExternalcontactsContactIdentifiers",
  "patchExternalcontactsOrganizationIdentifiers",
  "postExternalcontactsBulkContacts",
  "postExternalcontactsBulkContactsAdd",
  "postExternalcontactsBulkContactsDivisionviews",
  "postExternalcontactsBulkContactsEnrich",
  "postExternalcontactsBulkContactsRemove",
  "postExternalcontactsBulkContactsUnresolved",
  "postExternalcontactsBulkContactsUpdate",
  "postExternalcontactsBulkNotes",
  "postExternalcontactsBulkNotesAdd",
  "postExternalcontactsBulkNotesRemove",
  "postExternalcontactsBulkNotesUpdate",
  "postExternalcontactsBulkOrganizations",
  "postExternalcontactsBulkOrganizationsAdd",
  "postExternalcontactsBulkOrganizationsDivisionviews",
  "postExternalcontactsBulkOrganizationsEnrich",
  "postExternalcontactsBulkOrganizationsRemove"
] as const;
export type GenesysCloudFullApiExternalContacts01OperationKey = typeof GenesysCloudFullApiExternalContacts01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiExternalContacts01OperationPathParamMap {
  "deleteExternalcontactsContact": { "contactId": GenesysCloudFullApiPathParamValue };
  "deleteExternalcontactsContactNote": { "contactId": GenesysCloudFullApiPathParamValue; "noteId": GenesysCloudFullApiPathParamValue };
  "deleteExternalcontactsContactsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "deleteExternalcontactsExternalsource": { "externalSourceId": GenesysCloudFullApiPathParamValue };
  "deleteExternalcontactsImportCsvSetting": { "settingsId": GenesysCloudFullApiPathParamValue };
  "deleteExternalcontactsImportSetting": { "settingsId": GenesysCloudFullApiPathParamValue };
  "deleteExternalcontactsOrganization": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "deleteExternalcontactsOrganizationNote": { "externalOrganizationId": GenesysCloudFullApiPathParamValue; "noteId": GenesysCloudFullApiPathParamValue };
  "deleteExternalcontactsOrganizationTrustor": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "deleteExternalcontactsRelationship": { "relationshipId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContact": { "contactId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactIdentifiers": { "contactId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactJourneySegments": { "contactId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactJourneySessions": { "contactId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactNote": { "contactId": GenesysCloudFullApiPathParamValue; "noteId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactNotes": { "contactId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContacts": {};
  "getExternalcontactsContactsExport": { "exportId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactsExports": {};
  "getExternalcontactsContactsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactsSchemas": {};
  "getExternalcontactsContactsSchemasCoretype": { "coreTypeName": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactsSchemasCoretypes": {};
  "getExternalcontactsContactsSchemasLimits": {};
  "getExternalcontactsContactsSchemaVersion": { "schemaId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactsSchemaVersions": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsContactUnresolved": { "contactId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsExternalsource": { "externalSourceId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsExternalsources": {};
  "getExternalcontactsImportCsvSetting": { "settingsId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsImportCsvSettings": {};
  "getExternalcontactsImportCsvUploadDetails": { "uploadId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsImportCsvUploadPreview": { "uploadId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsImportJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsImportJobs": {};
  "getExternalcontactsImportSetting": { "settingsId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsImportSettings": {};
  "getExternalcontactsOrganization": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsOrganizationContacts": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsOrganizationIdentifiers": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsOrganizationNote": { "externalOrganizationId": GenesysCloudFullApiPathParamValue; "noteId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsOrganizationNotes": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsOrganizationRelationships": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsOrganizations": {};
  "getExternalcontactsOrganizationsSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsOrganizationsSchemas": {};
  "getExternalcontactsOrganizationsSchemasCoretype": { "coreTypeName": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsOrganizationsSchemasCoretypes": {};
  "getExternalcontactsOrganizationsSchemasLimits": {};
  "getExternalcontactsOrganizationsSchemaVersion": { "schemaId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsOrganizationsSchemaVersions": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsRelationship": { "relationshipId": GenesysCloudFullApiPathParamValue };
  "getExternalcontactsReversewhitepageslookup": {};
  "getExternalcontactsScanContacts": {};
  "getExternalcontactsScanContactsDivisionviewsAll": {};
  "getExternalcontactsScanNotes": {};
  "getExternalcontactsScanNotesDivisionviewsAll": {};
  "getExternalcontactsScanOrganizations": {};
  "getExternalcontactsScanOrganizationsDivisionviewsAll": {};
  "getExternalcontactsScanRelationships": {};
  "getExternalcontactsScanRelationshipsDivisionviewsAll": {};
  "patchExternalcontactsContact": { "contactId": GenesysCloudFullApiPathParamValue };
  "patchExternalcontactsContactIdentifiers": { "contactId": GenesysCloudFullApiPathParamValue };
  "patchExternalcontactsOrganizationIdentifiers": { "externalOrganizationId": GenesysCloudFullApiPathParamValue };
  "postExternalcontactsBulkContacts": {};
  "postExternalcontactsBulkContactsAdd": {};
  "postExternalcontactsBulkContactsDivisionviews": {};
  "postExternalcontactsBulkContactsEnrich": {};
  "postExternalcontactsBulkContactsRemove": {};
  "postExternalcontactsBulkContactsUnresolved": {};
  "postExternalcontactsBulkContactsUpdate": {};
  "postExternalcontactsBulkNotes": {};
  "postExternalcontactsBulkNotesAdd": {};
  "postExternalcontactsBulkNotesRemove": {};
  "postExternalcontactsBulkNotesUpdate": {};
  "postExternalcontactsBulkOrganizations": {};
  "postExternalcontactsBulkOrganizationsAdd": {};
  "postExternalcontactsBulkOrganizationsDivisionviews": {};
  "postExternalcontactsBulkOrganizationsEnrich": {};
  "postExternalcontactsBulkOrganizationsRemove": {};
}

export interface GenesysCloudFullApiExternalContacts01OperationRequestMap {
  "deleteExternalcontactsContact": GenesysCloudFullApiOperationInput<"deleteExternalcontactsContact">;
  "deleteExternalcontactsContactNote": GenesysCloudFullApiOperationInput<"deleteExternalcontactsContactNote">;
  "deleteExternalcontactsContactsSchema": GenesysCloudFullApiOperationInput<"deleteExternalcontactsContactsSchema">;
  "deleteExternalcontactsExternalsource": GenesysCloudFullApiOperationInput<"deleteExternalcontactsExternalsource">;
  "deleteExternalcontactsImportCsvSetting": GenesysCloudFullApiOperationInput<"deleteExternalcontactsImportCsvSetting">;
  "deleteExternalcontactsImportSetting": GenesysCloudFullApiOperationInput<"deleteExternalcontactsImportSetting">;
  "deleteExternalcontactsOrganization": GenesysCloudFullApiOperationInput<"deleteExternalcontactsOrganization">;
  "deleteExternalcontactsOrganizationNote": GenesysCloudFullApiOperationInput<"deleteExternalcontactsOrganizationNote">;
  "deleteExternalcontactsOrganizationTrustor": GenesysCloudFullApiOperationInput<"deleteExternalcontactsOrganizationTrustor">;
  "deleteExternalcontactsRelationship": GenesysCloudFullApiOperationInput<"deleteExternalcontactsRelationship">;
  "getExternalcontactsContact": GenesysCloudFullApiOperationInput<"getExternalcontactsContact">;
  "getExternalcontactsContactIdentifiers": GenesysCloudFullApiOperationInput<"getExternalcontactsContactIdentifiers">;
  "getExternalcontactsContactJourneySegments": GenesysCloudFullApiOperationInput<"getExternalcontactsContactJourneySegments">;
  "getExternalcontactsContactJourneySessions": GenesysCloudFullApiOperationInput<"getExternalcontactsContactJourneySessions">;
  "getExternalcontactsContactNote": GenesysCloudFullApiOperationInput<"getExternalcontactsContactNote">;
  "getExternalcontactsContactNotes": GenesysCloudFullApiOperationInput<"getExternalcontactsContactNotes">;
  "getExternalcontactsContacts": GenesysCloudFullApiOperationInput<"getExternalcontactsContacts">;
  "getExternalcontactsContactsExport": GenesysCloudFullApiOperationInput<"getExternalcontactsContactsExport">;
  "getExternalcontactsContactsExports": GenesysCloudFullApiOperationInput<"getExternalcontactsContactsExports">;
  "getExternalcontactsContactsSchema": GenesysCloudFullApiOperationInput<"getExternalcontactsContactsSchema">;
  "getExternalcontactsContactsSchemas": GenesysCloudFullApiOperationInput<"getExternalcontactsContactsSchemas">;
  "getExternalcontactsContactsSchemasCoretype": GenesysCloudFullApiOperationInput<"getExternalcontactsContactsSchemasCoretype">;
  "getExternalcontactsContactsSchemasCoretypes": GenesysCloudFullApiOperationInput<"getExternalcontactsContactsSchemasCoretypes">;
  "getExternalcontactsContactsSchemasLimits": GenesysCloudFullApiOperationInput<"getExternalcontactsContactsSchemasLimits">;
  "getExternalcontactsContactsSchemaVersion": GenesysCloudFullApiOperationInput<"getExternalcontactsContactsSchemaVersion">;
  "getExternalcontactsContactsSchemaVersions": GenesysCloudFullApiOperationInput<"getExternalcontactsContactsSchemaVersions">;
  "getExternalcontactsContactUnresolved": GenesysCloudFullApiOperationInput<"getExternalcontactsContactUnresolved">;
  "getExternalcontactsExternalsource": GenesysCloudFullApiOperationInput<"getExternalcontactsExternalsource">;
  "getExternalcontactsExternalsources": GenesysCloudFullApiOperationInput<"getExternalcontactsExternalsources">;
  "getExternalcontactsImportCsvSetting": GenesysCloudFullApiOperationInput<"getExternalcontactsImportCsvSetting">;
  "getExternalcontactsImportCsvSettings": GenesysCloudFullApiOperationInput<"getExternalcontactsImportCsvSettings">;
  "getExternalcontactsImportCsvUploadDetails": GenesysCloudFullApiOperationInput<"getExternalcontactsImportCsvUploadDetails">;
  "getExternalcontactsImportCsvUploadPreview": GenesysCloudFullApiOperationInput<"getExternalcontactsImportCsvUploadPreview">;
  "getExternalcontactsImportJob": GenesysCloudFullApiOperationInput<"getExternalcontactsImportJob">;
  "getExternalcontactsImportJobs": GenesysCloudFullApiOperationInput<"getExternalcontactsImportJobs">;
  "getExternalcontactsImportSetting": GenesysCloudFullApiOperationInput<"getExternalcontactsImportSetting">;
  "getExternalcontactsImportSettings": GenesysCloudFullApiOperationInput<"getExternalcontactsImportSettings">;
  "getExternalcontactsOrganization": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganization">;
  "getExternalcontactsOrganizationContacts": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationContacts">;
  "getExternalcontactsOrganizationIdentifiers": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationIdentifiers">;
  "getExternalcontactsOrganizationNote": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationNote">;
  "getExternalcontactsOrganizationNotes": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationNotes">;
  "getExternalcontactsOrganizationRelationships": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationRelationships">;
  "getExternalcontactsOrganizations": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizations">;
  "getExternalcontactsOrganizationsSchema": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationsSchema">;
  "getExternalcontactsOrganizationsSchemas": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationsSchemas">;
  "getExternalcontactsOrganizationsSchemasCoretype": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationsSchemasCoretype">;
  "getExternalcontactsOrganizationsSchemasCoretypes": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationsSchemasCoretypes">;
  "getExternalcontactsOrganizationsSchemasLimits": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationsSchemasLimits">;
  "getExternalcontactsOrganizationsSchemaVersion": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationsSchemaVersion">;
  "getExternalcontactsOrganizationsSchemaVersions": GenesysCloudFullApiOperationInput<"getExternalcontactsOrganizationsSchemaVersions">;
  "getExternalcontactsRelationship": GenesysCloudFullApiOperationInput<"getExternalcontactsRelationship">;
  "getExternalcontactsReversewhitepageslookup": GenesysCloudFullApiOperationInput<"getExternalcontactsReversewhitepageslookup">;
  "getExternalcontactsScanContacts": GenesysCloudFullApiOperationInput<"getExternalcontactsScanContacts">;
  "getExternalcontactsScanContactsDivisionviewsAll": GenesysCloudFullApiOperationInput<"getExternalcontactsScanContactsDivisionviewsAll">;
  "getExternalcontactsScanNotes": GenesysCloudFullApiOperationInput<"getExternalcontactsScanNotes">;
  "getExternalcontactsScanNotesDivisionviewsAll": GenesysCloudFullApiOperationInput<"getExternalcontactsScanNotesDivisionviewsAll">;
  "getExternalcontactsScanOrganizations": GenesysCloudFullApiOperationInput<"getExternalcontactsScanOrganizations">;
  "getExternalcontactsScanOrganizationsDivisionviewsAll": GenesysCloudFullApiOperationInput<"getExternalcontactsScanOrganizationsDivisionviewsAll">;
  "getExternalcontactsScanRelationships": GenesysCloudFullApiOperationInput<"getExternalcontactsScanRelationships">;
  "getExternalcontactsScanRelationshipsDivisionviewsAll": GenesysCloudFullApiOperationInput<"getExternalcontactsScanRelationshipsDivisionviewsAll">;
  "patchExternalcontactsContact": GenesysCloudFullApiOperationInput<"patchExternalcontactsContact">;
  "patchExternalcontactsContactIdentifiers": GenesysCloudFullApiOperationInput<"patchExternalcontactsContactIdentifiers">;
  "patchExternalcontactsOrganizationIdentifiers": GenesysCloudFullApiOperationInput<"patchExternalcontactsOrganizationIdentifiers">;
  "postExternalcontactsBulkContacts": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkContacts">;
  "postExternalcontactsBulkContactsAdd": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkContactsAdd">;
  "postExternalcontactsBulkContactsDivisionviews": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkContactsDivisionviews">;
  "postExternalcontactsBulkContactsEnrich": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkContactsEnrich">;
  "postExternalcontactsBulkContactsRemove": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkContactsRemove">;
  "postExternalcontactsBulkContactsUnresolved": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkContactsUnresolved">;
  "postExternalcontactsBulkContactsUpdate": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkContactsUpdate">;
  "postExternalcontactsBulkNotes": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkNotes">;
  "postExternalcontactsBulkNotesAdd": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkNotesAdd">;
  "postExternalcontactsBulkNotesRemove": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkNotesRemove">;
  "postExternalcontactsBulkNotesUpdate": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkNotesUpdate">;
  "postExternalcontactsBulkOrganizations": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkOrganizations">;
  "postExternalcontactsBulkOrganizationsAdd": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkOrganizationsAdd">;
  "postExternalcontactsBulkOrganizationsDivisionviews": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkOrganizationsDivisionviews">;
  "postExternalcontactsBulkOrganizationsEnrich": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkOrganizationsEnrich">;
  "postExternalcontactsBulkOrganizationsRemove": GenesysCloudFullApiOperationInput<"postExternalcontactsBulkOrganizationsRemove">;
}

export interface GenesysCloudFullApiExternalContacts01GeneratedClient {
  DeleteExternalcontactsContact(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsContact">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsContact"]>;
  DeleteExternalcontactsContactNote(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsContactNote">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsContactNote"]>;
  DeleteExternalcontactsContactsSchema(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsContactsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsContactsSchema"]>;
  DeleteExternalcontactsExternalsource(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsExternalsource">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsExternalsource"]>;
  DeleteExternalcontactsImportCsvSetting(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsImportCsvSetting">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsImportCsvSetting"]>;
  DeleteExternalcontactsImportSetting(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsImportSetting">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsImportSetting"]>;
  DeleteExternalcontactsOrganization(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsOrganization">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsOrganization"]>;
  DeleteExternalcontactsOrganizationNote(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsOrganizationNote">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsOrganizationNote"]>;
  DeleteExternalcontactsOrganizationTrustor(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsOrganizationTrustor">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsOrganizationTrustor"]>;
  DeleteExternalcontactsRelationship(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsRelationship">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsRelationship"]>;
  GetExternalcontactsContact(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContact">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContact"]>;
  GetExternalcontactsContactIdentifiers(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactIdentifiers">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactIdentifiers"]>;
  GetExternalcontactsContactJourneySegments(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactJourneySegments">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactJourneySegments"]>;
  GetExternalcontactsContactJourneySessions(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactJourneySessions">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactJourneySessions"]>;
  GetExternalcontactsContactNote(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactNote">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactNote"]>;
  GetExternalcontactsContactNotes(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactNotes">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactNotes"]>;
  GetExternalcontactsContacts(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContacts">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContacts"]>;
  GetExternalcontactsContactsExport(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsExport">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactsExport"]>;
  GetExternalcontactsContactsExports(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsExports">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactsExports"]>;
  GetExternalcontactsContactsSchema(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactsSchema"]>;
  GetExternalcontactsContactsSchemas(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactsSchemas"]>;
  GetExternalcontactsContactsSchemasCoretype(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemasCoretype">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactsSchemasCoretype"]>;
  GetExternalcontactsContactsSchemasCoretypes(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemasCoretypes">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactsSchemasCoretypes"]>;
  GetExternalcontactsContactsSchemasLimits(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemasLimits">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactsSchemasLimits"]>;
  GetExternalcontactsContactsSchemaVersion(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemaVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactsSchemaVersion"]>;
  GetExternalcontactsContactsSchemaVersions(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemaVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactsSchemaVersions"]>;
  GetExternalcontactsContactUnresolved(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsContactUnresolved">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsContactUnresolved"]>;
  GetExternalcontactsExternalsource(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsExternalsource">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsExternalsource"]>;
  GetExternalcontactsExternalsources(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsExternalsources">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsExternalsources"]>;
  GetExternalcontactsImportCsvSetting(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsImportCsvSetting">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsImportCsvSetting"]>;
  GetExternalcontactsImportCsvSettings(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsImportCsvSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsImportCsvSettings"]>;
  GetExternalcontactsImportCsvUploadDetails(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsImportCsvUploadDetails">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsImportCsvUploadDetails"]>;
  GetExternalcontactsImportCsvUploadPreview(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsImportCsvUploadPreview">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsImportCsvUploadPreview"]>;
  GetExternalcontactsImportJob(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsImportJob">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsImportJob"]>;
  GetExternalcontactsImportJobs(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsImportJobs">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsImportJobs"]>;
  GetExternalcontactsImportSetting(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsImportSetting">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsImportSetting"]>;
  GetExternalcontactsImportSettings(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsImportSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsImportSettings"]>;
  GetExternalcontactsOrganization(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganization">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganization"]>;
  GetExternalcontactsOrganizationContacts(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationContacts">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationContacts"]>;
  GetExternalcontactsOrganizationIdentifiers(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationIdentifiers">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationIdentifiers"]>;
  GetExternalcontactsOrganizationNote(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationNote">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationNote"]>;
  GetExternalcontactsOrganizationNotes(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationNotes">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationNotes"]>;
  GetExternalcontactsOrganizationRelationships(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationRelationships">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationRelationships"]>;
  GetExternalcontactsOrganizations(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizations">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizations"]>;
  GetExternalcontactsOrganizationsSchema(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationsSchema"]>;
  GetExternalcontactsOrganizationsSchemas(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationsSchemas"]>;
  GetExternalcontactsOrganizationsSchemasCoretype(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemasCoretype">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationsSchemasCoretype"]>;
  GetExternalcontactsOrganizationsSchemasCoretypes(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemasCoretypes">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationsSchemasCoretypes"]>;
  GetExternalcontactsOrganizationsSchemasLimits(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemasLimits">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationsSchemasLimits"]>;
  GetExternalcontactsOrganizationsSchemaVersion(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemaVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationsSchemaVersion"]>;
  GetExternalcontactsOrganizationsSchemaVersions(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemaVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsOrganizationsSchemaVersions"]>;
  GetExternalcontactsRelationship(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsRelationship">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsRelationship"]>;
  GetExternalcontactsReversewhitepageslookup(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsReversewhitepageslookup">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsReversewhitepageslookup"]>;
  GetExternalcontactsScanContacts(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsScanContacts">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsScanContacts"]>;
  GetExternalcontactsScanContactsDivisionviewsAll(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsScanContactsDivisionviewsAll">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsScanContactsDivisionviewsAll"]>;
  GetExternalcontactsScanNotes(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsScanNotes">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsScanNotes"]>;
  GetExternalcontactsScanNotesDivisionviewsAll(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsScanNotesDivisionviewsAll">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsScanNotesDivisionviewsAll"]>;
  GetExternalcontactsScanOrganizations(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsScanOrganizations">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsScanOrganizations"]>;
  GetExternalcontactsScanOrganizationsDivisionviewsAll(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsScanOrganizationsDivisionviewsAll">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsScanOrganizationsDivisionviewsAll"]>;
  GetExternalcontactsScanRelationships(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsScanRelationships">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsScanRelationships"]>;
  GetExternalcontactsScanRelationshipsDivisionviewsAll(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsScanRelationshipsDivisionviewsAll">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsScanRelationshipsDivisionviewsAll"]>;
  PatchExternalcontactsContact(...args: GenesysCloudFullApiOperationArgs<"patchExternalcontactsContact">): Promise<GenesysCloudFullApiOperationResponseMap["patchExternalcontactsContact"]>;
  PatchExternalcontactsContactIdentifiers(...args: GenesysCloudFullApiOperationArgs<"patchExternalcontactsContactIdentifiers">): Promise<GenesysCloudFullApiOperationResponseMap["patchExternalcontactsContactIdentifiers"]>;
  PatchExternalcontactsOrganizationIdentifiers(...args: GenesysCloudFullApiOperationArgs<"patchExternalcontactsOrganizationIdentifiers">): Promise<GenesysCloudFullApiOperationResponseMap["patchExternalcontactsOrganizationIdentifiers"]>;
  PostExternalcontactsBulkContacts(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContacts">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkContacts"]>;
  PostExternalcontactsBulkContactsAdd(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkContactsAdd"]>;
  PostExternalcontactsBulkContactsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkContactsDivisionviews"]>;
  PostExternalcontactsBulkContactsEnrich(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsEnrich">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkContactsEnrich"]>;
  PostExternalcontactsBulkContactsRemove(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkContactsRemove"]>;
  PostExternalcontactsBulkContactsUnresolved(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsUnresolved">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkContactsUnresolved"]>;
  PostExternalcontactsBulkContactsUpdate(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkContactsUpdate"]>;
  PostExternalcontactsBulkNotes(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkNotes">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkNotes"]>;
  PostExternalcontactsBulkNotesAdd(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkNotesAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkNotesAdd"]>;
  PostExternalcontactsBulkNotesRemove(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkNotesRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkNotesRemove"]>;
  PostExternalcontactsBulkNotesUpdate(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkNotesUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkNotesUpdate"]>;
  PostExternalcontactsBulkOrganizations(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizations">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkOrganizations"]>;
  PostExternalcontactsBulkOrganizationsAdd(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkOrganizationsAdd"]>;
  PostExternalcontactsBulkOrganizationsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkOrganizationsDivisionviews"]>;
  PostExternalcontactsBulkOrganizationsEnrich(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsEnrich">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkOrganizationsEnrich"]>;
  PostExternalcontactsBulkOrganizationsRemove(...args: GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postExternalcontactsBulkOrganizationsRemove"]>;
}

export const GenesysCloudFullApiExternalContacts01GeneratedFunctionNames = [
  "DeleteExternalcontactsContact",
  "DeleteExternalcontactsContactNote",
  "DeleteExternalcontactsContactsSchema",
  "DeleteExternalcontactsExternalsource",
  "DeleteExternalcontactsImportCsvSetting",
  "DeleteExternalcontactsImportSetting",
  "DeleteExternalcontactsOrganization",
  "DeleteExternalcontactsOrganizationNote",
  "DeleteExternalcontactsOrganizationTrustor",
  "DeleteExternalcontactsRelationship",
  "GetExternalcontactsContact",
  "GetExternalcontactsContactIdentifiers",
  "GetExternalcontactsContactJourneySegments",
  "GetExternalcontactsContactJourneySessions",
  "GetExternalcontactsContactNote",
  "GetExternalcontactsContactNotes",
  "GetExternalcontactsContacts",
  "GetExternalcontactsContactsExport",
  "GetExternalcontactsContactsExports",
  "GetExternalcontactsContactsSchema",
  "GetExternalcontactsContactsSchemas",
  "GetExternalcontactsContactsSchemasCoretype",
  "GetExternalcontactsContactsSchemasCoretypes",
  "GetExternalcontactsContactsSchemasLimits",
  "GetExternalcontactsContactsSchemaVersion",
  "GetExternalcontactsContactsSchemaVersions",
  "GetExternalcontactsContactUnresolved",
  "GetExternalcontactsExternalsource",
  "GetExternalcontactsExternalsources",
  "GetExternalcontactsImportCsvSetting",
  "GetExternalcontactsImportCsvSettings",
  "GetExternalcontactsImportCsvUploadDetails",
  "GetExternalcontactsImportCsvUploadPreview",
  "GetExternalcontactsImportJob",
  "GetExternalcontactsImportJobs",
  "GetExternalcontactsImportSetting",
  "GetExternalcontactsImportSettings",
  "GetExternalcontactsOrganization",
  "GetExternalcontactsOrganizationContacts",
  "GetExternalcontactsOrganizationIdentifiers",
  "GetExternalcontactsOrganizationNote",
  "GetExternalcontactsOrganizationNotes",
  "GetExternalcontactsOrganizationRelationships",
  "GetExternalcontactsOrganizations",
  "GetExternalcontactsOrganizationsSchema",
  "GetExternalcontactsOrganizationsSchemas",
  "GetExternalcontactsOrganizationsSchemasCoretype",
  "GetExternalcontactsOrganizationsSchemasCoretypes",
  "GetExternalcontactsOrganizationsSchemasLimits",
  "GetExternalcontactsOrganizationsSchemaVersion",
  "GetExternalcontactsOrganizationsSchemaVersions",
  "GetExternalcontactsRelationship",
  "GetExternalcontactsReversewhitepageslookup",
  "GetExternalcontactsScanContacts",
  "GetExternalcontactsScanContactsDivisionviewsAll",
  "GetExternalcontactsScanNotes",
  "GetExternalcontactsScanNotesDivisionviewsAll",
  "GetExternalcontactsScanOrganizations",
  "GetExternalcontactsScanOrganizationsDivisionviewsAll",
  "GetExternalcontactsScanRelationships",
  "GetExternalcontactsScanRelationshipsDivisionviewsAll",
  "PatchExternalcontactsContact",
  "PatchExternalcontactsContactIdentifiers",
  "PatchExternalcontactsOrganizationIdentifiers",
  "PostExternalcontactsBulkContacts",
  "PostExternalcontactsBulkContactsAdd",
  "PostExternalcontactsBulkContactsDivisionviews",
  "PostExternalcontactsBulkContactsEnrich",
  "PostExternalcontactsBulkContactsRemove",
  "PostExternalcontactsBulkContactsUnresolved",
  "PostExternalcontactsBulkContactsUpdate",
  "PostExternalcontactsBulkNotes",
  "PostExternalcontactsBulkNotesAdd",
  "PostExternalcontactsBulkNotesRemove",
  "PostExternalcontactsBulkNotesUpdate",
  "PostExternalcontactsBulkOrganizations",
  "PostExternalcontactsBulkOrganizationsAdd",
  "PostExternalcontactsBulkOrganizationsDivisionviews",
  "PostExternalcontactsBulkOrganizationsEnrich",
  "PostExternalcontactsBulkOrganizationsRemove"
] as const satisfies readonly (keyof GenesysCloudFullApiExternalContacts01GeneratedClient)[];

export function createGenesysCloudFullApiExternalContacts01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiExternalContacts01GeneratedClient {
  return {
    DeleteExternalcontactsContact: (...args) => callOperation("deleteExternalcontactsContact", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsContact">)),
    DeleteExternalcontactsContactNote: (...args) => callOperation("deleteExternalcontactsContactNote", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsContactNote">)),
    DeleteExternalcontactsContactsSchema: (...args) => callOperation("deleteExternalcontactsContactsSchema", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsContactsSchema">)),
    DeleteExternalcontactsExternalsource: (...args) => callOperation("deleteExternalcontactsExternalsource", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsExternalsource">)),
    DeleteExternalcontactsImportCsvSetting: (...args) => callOperation("deleteExternalcontactsImportCsvSetting", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsImportCsvSetting">)),
    DeleteExternalcontactsImportSetting: (...args) => callOperation("deleteExternalcontactsImportSetting", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsImportSetting">)),
    DeleteExternalcontactsOrganization: (...args) => callOperation("deleteExternalcontactsOrganization", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsOrganization">)),
    DeleteExternalcontactsOrganizationNote: (...args) => callOperation("deleteExternalcontactsOrganizationNote", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsOrganizationNote">)),
    DeleteExternalcontactsOrganizationTrustor: (...args) => callOperation("deleteExternalcontactsOrganizationTrustor", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsOrganizationTrustor">)),
    DeleteExternalcontactsRelationship: (...args) => callOperation("deleteExternalcontactsRelationship", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsRelationship">)),
    GetExternalcontactsContact: (...args) => callOperation("getExternalcontactsContact", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContact">)),
    GetExternalcontactsContactIdentifiers: (...args) => callOperation("getExternalcontactsContactIdentifiers", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactIdentifiers">)),
    GetExternalcontactsContactJourneySegments: (...args) => callOperation("getExternalcontactsContactJourneySegments", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactJourneySegments">)),
    GetExternalcontactsContactJourneySessions: (...args) => callOperation("getExternalcontactsContactJourneySessions", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactJourneySessions">)),
    GetExternalcontactsContactNote: (...args) => callOperation("getExternalcontactsContactNote", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactNote">)),
    GetExternalcontactsContactNotes: (...args) => callOperation("getExternalcontactsContactNotes", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactNotes">)),
    GetExternalcontactsContacts: (...args) => callOperation("getExternalcontactsContacts", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContacts">)),
    GetExternalcontactsContactsExport: (...args) => callOperation("getExternalcontactsContactsExport", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsExport">)),
    GetExternalcontactsContactsExports: (...args) => callOperation("getExternalcontactsContactsExports", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsExports">)),
    GetExternalcontactsContactsSchema: (...args) => callOperation("getExternalcontactsContactsSchema", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchema">)),
    GetExternalcontactsContactsSchemas: (...args) => callOperation("getExternalcontactsContactsSchemas", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemas">)),
    GetExternalcontactsContactsSchemasCoretype: (...args) => callOperation("getExternalcontactsContactsSchemasCoretype", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemasCoretype">)),
    GetExternalcontactsContactsSchemasCoretypes: (...args) => callOperation("getExternalcontactsContactsSchemasCoretypes", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemasCoretypes">)),
    GetExternalcontactsContactsSchemasLimits: (...args) => callOperation("getExternalcontactsContactsSchemasLimits", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemasLimits">)),
    GetExternalcontactsContactsSchemaVersion: (...args) => callOperation("getExternalcontactsContactsSchemaVersion", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemaVersion">)),
    GetExternalcontactsContactsSchemaVersions: (...args) => callOperation("getExternalcontactsContactsSchemaVersions", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactsSchemaVersions">)),
    GetExternalcontactsContactUnresolved: (...args) => callOperation("getExternalcontactsContactUnresolved", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsContactUnresolved">)),
    GetExternalcontactsExternalsource: (...args) => callOperation("getExternalcontactsExternalsource", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsExternalsource">)),
    GetExternalcontactsExternalsources: (...args) => callOperation("getExternalcontactsExternalsources", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsExternalsources">)),
    GetExternalcontactsImportCsvSetting: (...args) => callOperation("getExternalcontactsImportCsvSetting", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsImportCsvSetting">)),
    GetExternalcontactsImportCsvSettings: (...args) => callOperation("getExternalcontactsImportCsvSettings", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsImportCsvSettings">)),
    GetExternalcontactsImportCsvUploadDetails: (...args) => callOperation("getExternalcontactsImportCsvUploadDetails", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsImportCsvUploadDetails">)),
    GetExternalcontactsImportCsvUploadPreview: (...args) => callOperation("getExternalcontactsImportCsvUploadPreview", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsImportCsvUploadPreview">)),
    GetExternalcontactsImportJob: (...args) => callOperation("getExternalcontactsImportJob", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsImportJob">)),
    GetExternalcontactsImportJobs: (...args) => callOperation("getExternalcontactsImportJobs", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsImportJobs">)),
    GetExternalcontactsImportSetting: (...args) => callOperation("getExternalcontactsImportSetting", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsImportSetting">)),
    GetExternalcontactsImportSettings: (...args) => callOperation("getExternalcontactsImportSettings", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsImportSettings">)),
    GetExternalcontactsOrganization: (...args) => callOperation("getExternalcontactsOrganization", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganization">)),
    GetExternalcontactsOrganizationContacts: (...args) => callOperation("getExternalcontactsOrganizationContacts", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationContacts">)),
    GetExternalcontactsOrganizationIdentifiers: (...args) => callOperation("getExternalcontactsOrganizationIdentifiers", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationIdentifiers">)),
    GetExternalcontactsOrganizationNote: (...args) => callOperation("getExternalcontactsOrganizationNote", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationNote">)),
    GetExternalcontactsOrganizationNotes: (...args) => callOperation("getExternalcontactsOrganizationNotes", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationNotes">)),
    GetExternalcontactsOrganizationRelationships: (...args) => callOperation("getExternalcontactsOrganizationRelationships", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationRelationships">)),
    GetExternalcontactsOrganizations: (...args) => callOperation("getExternalcontactsOrganizations", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizations">)),
    GetExternalcontactsOrganizationsSchema: (...args) => callOperation("getExternalcontactsOrganizationsSchema", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchema">)),
    GetExternalcontactsOrganizationsSchemas: (...args) => callOperation("getExternalcontactsOrganizationsSchemas", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemas">)),
    GetExternalcontactsOrganizationsSchemasCoretype: (...args) => callOperation("getExternalcontactsOrganizationsSchemasCoretype", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemasCoretype">)),
    GetExternalcontactsOrganizationsSchemasCoretypes: (...args) => callOperation("getExternalcontactsOrganizationsSchemasCoretypes", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemasCoretypes">)),
    GetExternalcontactsOrganizationsSchemasLimits: (...args) => callOperation("getExternalcontactsOrganizationsSchemasLimits", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemasLimits">)),
    GetExternalcontactsOrganizationsSchemaVersion: (...args) => callOperation("getExternalcontactsOrganizationsSchemaVersion", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemaVersion">)),
    GetExternalcontactsOrganizationsSchemaVersions: (...args) => callOperation("getExternalcontactsOrganizationsSchemaVersions", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsOrganizationsSchemaVersions">)),
    GetExternalcontactsRelationship: (...args) => callOperation("getExternalcontactsRelationship", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsRelationship">)),
    GetExternalcontactsReversewhitepageslookup: (...args) => callOperation("getExternalcontactsReversewhitepageslookup", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsReversewhitepageslookup">)),
    GetExternalcontactsScanContacts: (...args) => callOperation("getExternalcontactsScanContacts", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsScanContacts">)),
    GetExternalcontactsScanContactsDivisionviewsAll: (...args) => callOperation("getExternalcontactsScanContactsDivisionviewsAll", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsScanContactsDivisionviewsAll">)),
    GetExternalcontactsScanNotes: (...args) => callOperation("getExternalcontactsScanNotes", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsScanNotes">)),
    GetExternalcontactsScanNotesDivisionviewsAll: (...args) => callOperation("getExternalcontactsScanNotesDivisionviewsAll", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsScanNotesDivisionviewsAll">)),
    GetExternalcontactsScanOrganizations: (...args) => callOperation("getExternalcontactsScanOrganizations", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsScanOrganizations">)),
    GetExternalcontactsScanOrganizationsDivisionviewsAll: (...args) => callOperation("getExternalcontactsScanOrganizationsDivisionviewsAll", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsScanOrganizationsDivisionviewsAll">)),
    GetExternalcontactsScanRelationships: (...args) => callOperation("getExternalcontactsScanRelationships", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsScanRelationships">)),
    GetExternalcontactsScanRelationshipsDivisionviewsAll: (...args) => callOperation("getExternalcontactsScanRelationshipsDivisionviewsAll", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsScanRelationshipsDivisionviewsAll">)),
    PatchExternalcontactsContact: (...args) => callOperation("patchExternalcontactsContact", ...(args as GenesysCloudFullApiOperationArgs<"patchExternalcontactsContact">)),
    PatchExternalcontactsContactIdentifiers: (...args) => callOperation("patchExternalcontactsContactIdentifiers", ...(args as GenesysCloudFullApiOperationArgs<"patchExternalcontactsContactIdentifiers">)),
    PatchExternalcontactsOrganizationIdentifiers: (...args) => callOperation("patchExternalcontactsOrganizationIdentifiers", ...(args as GenesysCloudFullApiOperationArgs<"patchExternalcontactsOrganizationIdentifiers">)),
    PostExternalcontactsBulkContacts: (...args) => callOperation("postExternalcontactsBulkContacts", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContacts">)),
    PostExternalcontactsBulkContactsAdd: (...args) => callOperation("postExternalcontactsBulkContactsAdd", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsAdd">)),
    PostExternalcontactsBulkContactsDivisionviews: (...args) => callOperation("postExternalcontactsBulkContactsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsDivisionviews">)),
    PostExternalcontactsBulkContactsEnrich: (...args) => callOperation("postExternalcontactsBulkContactsEnrich", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsEnrich">)),
    PostExternalcontactsBulkContactsRemove: (...args) => callOperation("postExternalcontactsBulkContactsRemove", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsRemove">)),
    PostExternalcontactsBulkContactsUnresolved: (...args) => callOperation("postExternalcontactsBulkContactsUnresolved", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsUnresolved">)),
    PostExternalcontactsBulkContactsUpdate: (...args) => callOperation("postExternalcontactsBulkContactsUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkContactsUpdate">)),
    PostExternalcontactsBulkNotes: (...args) => callOperation("postExternalcontactsBulkNotes", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkNotes">)),
    PostExternalcontactsBulkNotesAdd: (...args) => callOperation("postExternalcontactsBulkNotesAdd", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkNotesAdd">)),
    PostExternalcontactsBulkNotesRemove: (...args) => callOperation("postExternalcontactsBulkNotesRemove", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkNotesRemove">)),
    PostExternalcontactsBulkNotesUpdate: (...args) => callOperation("postExternalcontactsBulkNotesUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkNotesUpdate">)),
    PostExternalcontactsBulkOrganizations: (...args) => callOperation("postExternalcontactsBulkOrganizations", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizations">)),
    PostExternalcontactsBulkOrganizationsAdd: (...args) => callOperation("postExternalcontactsBulkOrganizationsAdd", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsAdd">)),
    PostExternalcontactsBulkOrganizationsDivisionviews: (...args) => callOperation("postExternalcontactsBulkOrganizationsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsDivisionviews">)),
    PostExternalcontactsBulkOrganizationsEnrich: (...args) => callOperation("postExternalcontactsBulkOrganizationsEnrich", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsEnrich">)),
    PostExternalcontactsBulkOrganizationsRemove: (...args) => callOperation("postExternalcontactsBulkOrganizationsRemove", ...(args as GenesysCloudFullApiOperationArgs<"postExternalcontactsBulkOrganizationsRemove">)),
  };
}
