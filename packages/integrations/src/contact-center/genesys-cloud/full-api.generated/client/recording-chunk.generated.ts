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
export const GenesysCloudFullApiRecordingOperationKeys = [
  "deleteConversationRecordingAnnotation",
  "deleteOrphanrecording",
  "deleteRecordingCrossplatformMediaretentionpolicies",
  "deleteRecordingCrossplatformMediaretentionpolicy",
  "deleteRecordingJob",
  "deleteRecordingMediaretentionpolicies",
  "deleteRecordingMediaretentionpolicy",
  "getConversationRecording",
  "getConversationRecordingAnnotation",
  "getConversationRecordingAnnotations",
  "getConversationRecordingmetadata",
  "getConversationRecordingmetadataRecordingId",
  "getConversationRecordings",
  "getOrphanrecording",
  "getOrphanrecordingMedia",
  "getOrphanrecordings",
  "getRecordingBatchrequest",
  "getRecordingCrossplatformMediaretentionpolicies",
  "getRecordingCrossplatformMediaretentionpolicy",
  "getRecordingJob",
  "getRecordingJobFailedrecordings",
  "getRecordingJobs",
  "getRecordingKeyconfiguration",
  "getRecordingKeyconfigurations",
  "getRecordingMediaretentionpolicies",
  "getRecordingMediaretentionpolicy",
  "getRecordingRecordingkeys",
  "getRecordingRecordingkeysRotationschedule",
  "getRecordingSettings",
  "getRecordingsRetentionQuery",
  "getRecordingsScreensessionsDetails",
  "getRecordingUploadsReport",
  "patchRecordingCrossplatformMediaretentionpolicy",
  "patchRecordingMediaretentionpolicy",
  "postConversationRecordingAnnotations",
  "postRecordingBatchrequests",
  "postRecordingCrossplatformMediaretentionpolicies",
  "postRecordingJobs",
  "postRecordingKeyconfigurations",
  "postRecordingKeyconfigurationsValidate",
  "postRecordingLocalkeys",
  "postRecordingMediaretentionpolicies",
  "postRecordingRecordingkeys",
  "postRecordingsDeletionprotection",
  "postRecordingsScreensessionsAcknowledge",
  "postRecordingsScreensessionsMetadata",
  "postRecordingUploadsReports",
  "putConversationRecording",
  "putConversationRecordingAnnotation",
  "putOrphanrecording",
  "putRecordingCrossplatformMediaretentionpolicy",
  "putRecordingJob",
  "putRecordingKeyconfiguration",
  "putRecordingMediaretentionpolicy",
  "putRecordingRecordingkeysRotationschedule",
  "putRecordingsDeletionprotection",
  "putRecordingSettings"
] as const;
export type GenesysCloudFullApiRecordingOperationKey = typeof GenesysCloudFullApiRecordingOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiRecordingOperationPathParamMap {
  "deleteConversationRecordingAnnotation": { "conversationId": GenesysCloudFullApiPathParamValue; "recordingId": GenesysCloudFullApiPathParamValue; "annotationId": GenesysCloudFullApiPathParamValue };
  "deleteOrphanrecording": { "orphanId": GenesysCloudFullApiPathParamValue };
  "deleteRecordingCrossplatformMediaretentionpolicies": {};
  "deleteRecordingCrossplatformMediaretentionpolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "deleteRecordingJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteRecordingMediaretentionpolicies": {};
  "deleteRecordingMediaretentionpolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "getConversationRecording": { "conversationId": GenesysCloudFullApiPathParamValue; "recordingId": GenesysCloudFullApiPathParamValue };
  "getConversationRecordingAnnotation": { "conversationId": GenesysCloudFullApiPathParamValue; "recordingId": GenesysCloudFullApiPathParamValue; "annotationId": GenesysCloudFullApiPathParamValue };
  "getConversationRecordingAnnotations": { "conversationId": GenesysCloudFullApiPathParamValue; "recordingId": GenesysCloudFullApiPathParamValue };
  "getConversationRecordingmetadata": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationRecordingmetadataRecordingId": { "conversationId": GenesysCloudFullApiPathParamValue; "recordingId": GenesysCloudFullApiPathParamValue };
  "getConversationRecordings": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getOrphanrecording": { "orphanId": GenesysCloudFullApiPathParamValue };
  "getOrphanrecordingMedia": { "orphanId": GenesysCloudFullApiPathParamValue };
  "getOrphanrecordings": {};
  "getRecordingBatchrequest": { "jobId": GenesysCloudFullApiPathParamValue };
  "getRecordingCrossplatformMediaretentionpolicies": {};
  "getRecordingCrossplatformMediaretentionpolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "getRecordingJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getRecordingJobFailedrecordings": { "jobId": GenesysCloudFullApiPathParamValue };
  "getRecordingJobs": {};
  "getRecordingKeyconfiguration": { "keyConfigurationId": GenesysCloudFullApiPathParamValue };
  "getRecordingKeyconfigurations": {};
  "getRecordingMediaretentionpolicies": {};
  "getRecordingMediaretentionpolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "getRecordingRecordingkeys": {};
  "getRecordingRecordingkeysRotationschedule": {};
  "getRecordingSettings": {};
  "getRecordingsRetentionQuery": {};
  "getRecordingsScreensessionsDetails": {};
  "getRecordingUploadsReport": { "reportId": GenesysCloudFullApiPathParamValue };
  "patchRecordingCrossplatformMediaretentionpolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "patchRecordingMediaretentionpolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "postConversationRecordingAnnotations": { "conversationId": GenesysCloudFullApiPathParamValue; "recordingId": GenesysCloudFullApiPathParamValue };
  "postRecordingBatchrequests": {};
  "postRecordingCrossplatformMediaretentionpolicies": {};
  "postRecordingJobs": {};
  "postRecordingKeyconfigurations": {};
  "postRecordingKeyconfigurationsValidate": {};
  "postRecordingLocalkeys": {};
  "postRecordingMediaretentionpolicies": {};
  "postRecordingRecordingkeys": {};
  "postRecordingsDeletionprotection": {};
  "postRecordingsScreensessionsAcknowledge": {};
  "postRecordingsScreensessionsMetadata": {};
  "postRecordingUploadsReports": {};
  "putConversationRecording": { "conversationId": GenesysCloudFullApiPathParamValue; "recordingId": GenesysCloudFullApiPathParamValue };
  "putConversationRecordingAnnotation": { "conversationId": GenesysCloudFullApiPathParamValue; "recordingId": GenesysCloudFullApiPathParamValue; "annotationId": GenesysCloudFullApiPathParamValue };
  "putOrphanrecording": { "orphanId": GenesysCloudFullApiPathParamValue };
  "putRecordingCrossplatformMediaretentionpolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "putRecordingJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "putRecordingKeyconfiguration": { "keyConfigurationId": GenesysCloudFullApiPathParamValue };
  "putRecordingMediaretentionpolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "putRecordingRecordingkeysRotationschedule": {};
  "putRecordingsDeletionprotection": {};
  "putRecordingSettings": {};
}

export interface GenesysCloudFullApiRecordingOperationRequestMap {
  "deleteConversationRecordingAnnotation": GenesysCloudFullApiOperationInput<"deleteConversationRecordingAnnotation">;
  "deleteOrphanrecording": GenesysCloudFullApiOperationInput<"deleteOrphanrecording">;
  "deleteRecordingCrossplatformMediaretentionpolicies": GenesysCloudFullApiOperationInput<"deleteRecordingCrossplatformMediaretentionpolicies">;
  "deleteRecordingCrossplatformMediaretentionpolicy": GenesysCloudFullApiOperationInput<"deleteRecordingCrossplatformMediaretentionpolicy">;
  "deleteRecordingJob": GenesysCloudFullApiOperationInput<"deleteRecordingJob">;
  "deleteRecordingMediaretentionpolicies": GenesysCloudFullApiOperationInput<"deleteRecordingMediaretentionpolicies">;
  "deleteRecordingMediaretentionpolicy": GenesysCloudFullApiOperationInput<"deleteRecordingMediaretentionpolicy">;
  "getConversationRecording": GenesysCloudFullApiOperationInput<"getConversationRecording">;
  "getConversationRecordingAnnotation": GenesysCloudFullApiOperationInput<"getConversationRecordingAnnotation">;
  "getConversationRecordingAnnotations": GenesysCloudFullApiOperationInput<"getConversationRecordingAnnotations">;
  "getConversationRecordingmetadata": GenesysCloudFullApiOperationInput<"getConversationRecordingmetadata">;
  "getConversationRecordingmetadataRecordingId": GenesysCloudFullApiOperationInput<"getConversationRecordingmetadataRecordingId">;
  "getConversationRecordings": GenesysCloudFullApiOperationInput<"getConversationRecordings">;
  "getOrphanrecording": GenesysCloudFullApiOperationInput<"getOrphanrecording">;
  "getOrphanrecordingMedia": GenesysCloudFullApiOperationInput<"getOrphanrecordingMedia">;
  "getOrphanrecordings": GenesysCloudFullApiOperationInput<"getOrphanrecordings">;
  "getRecordingBatchrequest": GenesysCloudFullApiOperationInput<"getRecordingBatchrequest">;
  "getRecordingCrossplatformMediaretentionpolicies": GenesysCloudFullApiOperationInput<"getRecordingCrossplatformMediaretentionpolicies">;
  "getRecordingCrossplatformMediaretentionpolicy": GenesysCloudFullApiOperationInput<"getRecordingCrossplatformMediaretentionpolicy">;
  "getRecordingJob": GenesysCloudFullApiOperationInput<"getRecordingJob">;
  "getRecordingJobFailedrecordings": GenesysCloudFullApiOperationInput<"getRecordingJobFailedrecordings">;
  "getRecordingJobs": GenesysCloudFullApiOperationInput<"getRecordingJobs">;
  "getRecordingKeyconfiguration": GenesysCloudFullApiOperationInput<"getRecordingKeyconfiguration">;
  "getRecordingKeyconfigurations": GenesysCloudFullApiOperationInput<"getRecordingKeyconfigurations">;
  "getRecordingMediaretentionpolicies": GenesysCloudFullApiOperationInput<"getRecordingMediaretentionpolicies">;
  "getRecordingMediaretentionpolicy": GenesysCloudFullApiOperationInput<"getRecordingMediaretentionpolicy">;
  "getRecordingRecordingkeys": GenesysCloudFullApiOperationInput<"getRecordingRecordingkeys">;
  "getRecordingRecordingkeysRotationschedule": GenesysCloudFullApiOperationInput<"getRecordingRecordingkeysRotationschedule">;
  "getRecordingSettings": GenesysCloudFullApiOperationInput<"getRecordingSettings">;
  "getRecordingsRetentionQuery": GenesysCloudFullApiOperationInput<"getRecordingsRetentionQuery">;
  "getRecordingsScreensessionsDetails": GenesysCloudFullApiOperationInput<"getRecordingsScreensessionsDetails">;
  "getRecordingUploadsReport": GenesysCloudFullApiOperationInput<"getRecordingUploadsReport">;
  "patchRecordingCrossplatformMediaretentionpolicy": GenesysCloudFullApiOperationInput<"patchRecordingCrossplatformMediaretentionpolicy">;
  "patchRecordingMediaretentionpolicy": GenesysCloudFullApiOperationInput<"patchRecordingMediaretentionpolicy">;
  "postConversationRecordingAnnotations": GenesysCloudFullApiOperationInput<"postConversationRecordingAnnotations">;
  "postRecordingBatchrequests": GenesysCloudFullApiOperationInput<"postRecordingBatchrequests">;
  "postRecordingCrossplatformMediaretentionpolicies": GenesysCloudFullApiOperationInput<"postRecordingCrossplatformMediaretentionpolicies">;
  "postRecordingJobs": GenesysCloudFullApiOperationInput<"postRecordingJobs">;
  "postRecordingKeyconfigurations": GenesysCloudFullApiOperationInput<"postRecordingKeyconfigurations">;
  "postRecordingKeyconfigurationsValidate": GenesysCloudFullApiOperationInput<"postRecordingKeyconfigurationsValidate">;
  "postRecordingLocalkeys": GenesysCloudFullApiOperationInput<"postRecordingLocalkeys">;
  "postRecordingMediaretentionpolicies": GenesysCloudFullApiOperationInput<"postRecordingMediaretentionpolicies">;
  "postRecordingRecordingkeys": GenesysCloudFullApiOperationInput<"postRecordingRecordingkeys">;
  "postRecordingsDeletionprotection": GenesysCloudFullApiOperationInput<"postRecordingsDeletionprotection">;
  "postRecordingsScreensessionsAcknowledge": GenesysCloudFullApiOperationInput<"postRecordingsScreensessionsAcknowledge">;
  "postRecordingsScreensessionsMetadata": GenesysCloudFullApiOperationInput<"postRecordingsScreensessionsMetadata">;
  "postRecordingUploadsReports": GenesysCloudFullApiOperationInput<"postRecordingUploadsReports">;
  "putConversationRecording": GenesysCloudFullApiOperationInput<"putConversationRecording">;
  "putConversationRecordingAnnotation": GenesysCloudFullApiOperationInput<"putConversationRecordingAnnotation">;
  "putOrphanrecording": GenesysCloudFullApiOperationInput<"putOrphanrecording">;
  "putRecordingCrossplatformMediaretentionpolicy": GenesysCloudFullApiOperationInput<"putRecordingCrossplatformMediaretentionpolicy">;
  "putRecordingJob": GenesysCloudFullApiOperationInput<"putRecordingJob">;
  "putRecordingKeyconfiguration": GenesysCloudFullApiOperationInput<"putRecordingKeyconfiguration">;
  "putRecordingMediaretentionpolicy": GenesysCloudFullApiOperationInput<"putRecordingMediaretentionpolicy">;
  "putRecordingRecordingkeysRotationschedule": GenesysCloudFullApiOperationInput<"putRecordingRecordingkeysRotationschedule">;
  "putRecordingsDeletionprotection": GenesysCloudFullApiOperationInput<"putRecordingsDeletionprotection">;
  "putRecordingSettings": GenesysCloudFullApiOperationInput<"putRecordingSettings">;
}

export interface GenesysCloudFullApiRecordingGeneratedClient {
  DeleteConversationRecordingAnnotation(...args: GenesysCloudFullApiOperationArgs<"deleteConversationRecordingAnnotation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationRecordingAnnotation"]>;
  DeleteOrphanrecording(...args: GenesysCloudFullApiOperationArgs<"deleteOrphanrecording">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrphanrecording"]>;
  DeleteRecordingCrossplatformMediaretentionpolicies(...args: GenesysCloudFullApiOperationArgs<"deleteRecordingCrossplatformMediaretentionpolicies">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRecordingCrossplatformMediaretentionpolicies"]>;
  DeleteRecordingCrossplatformMediaretentionpolicy(...args: GenesysCloudFullApiOperationArgs<"deleteRecordingCrossplatformMediaretentionpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRecordingCrossplatformMediaretentionpolicy"]>;
  DeleteRecordingJob(...args: GenesysCloudFullApiOperationArgs<"deleteRecordingJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRecordingJob"]>;
  DeleteRecordingMediaretentionpolicies(...args: GenesysCloudFullApiOperationArgs<"deleteRecordingMediaretentionpolicies">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRecordingMediaretentionpolicies"]>;
  DeleteRecordingMediaretentionpolicy(...args: GenesysCloudFullApiOperationArgs<"deleteRecordingMediaretentionpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["deleteRecordingMediaretentionpolicy"]>;
  GetConversationRecording(...args: GenesysCloudFullApiOperationArgs<"getConversationRecording">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationRecording"]>;
  GetConversationRecordingAnnotation(...args: GenesysCloudFullApiOperationArgs<"getConversationRecordingAnnotation">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationRecordingAnnotation"]>;
  GetConversationRecordingAnnotations(...args: GenesysCloudFullApiOperationArgs<"getConversationRecordingAnnotations">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationRecordingAnnotations"]>;
  GetConversationRecordingmetadata(...args: GenesysCloudFullApiOperationArgs<"getConversationRecordingmetadata">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationRecordingmetadata"]>;
  GetConversationRecordingmetadataRecordingId(...args: GenesysCloudFullApiOperationArgs<"getConversationRecordingmetadataRecordingId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationRecordingmetadataRecordingId"]>;
  GetConversationRecordings(...args: GenesysCloudFullApiOperationArgs<"getConversationRecordings">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationRecordings"]>;
  GetOrphanrecording(...args: GenesysCloudFullApiOperationArgs<"getOrphanrecording">): Promise<GenesysCloudFullApiOperationResponseMap["getOrphanrecording"]>;
  GetOrphanrecordingMedia(...args: GenesysCloudFullApiOperationArgs<"getOrphanrecordingMedia">): Promise<GenesysCloudFullApiOperationResponseMap["getOrphanrecordingMedia"]>;
  GetOrphanrecordings(...args: GenesysCloudFullApiOperationArgs<"getOrphanrecordings">): Promise<GenesysCloudFullApiOperationResponseMap["getOrphanrecordings"]>;
  GetRecordingBatchrequest(...args: GenesysCloudFullApiOperationArgs<"getRecordingBatchrequest">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingBatchrequest"]>;
  GetRecordingCrossplatformMediaretentionpolicies(...args: GenesysCloudFullApiOperationArgs<"getRecordingCrossplatformMediaretentionpolicies">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingCrossplatformMediaretentionpolicies"]>;
  GetRecordingCrossplatformMediaretentionpolicy(...args: GenesysCloudFullApiOperationArgs<"getRecordingCrossplatformMediaretentionpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingCrossplatformMediaretentionpolicy"]>;
  GetRecordingJob(...args: GenesysCloudFullApiOperationArgs<"getRecordingJob">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingJob"]>;
  GetRecordingJobFailedrecordings(...args: GenesysCloudFullApiOperationArgs<"getRecordingJobFailedrecordings">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingJobFailedrecordings"]>;
  GetRecordingJobs(...args: GenesysCloudFullApiOperationArgs<"getRecordingJobs">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingJobs"]>;
  GetRecordingKeyconfiguration(...args: GenesysCloudFullApiOperationArgs<"getRecordingKeyconfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingKeyconfiguration"]>;
  GetRecordingKeyconfigurations(...args: GenesysCloudFullApiOperationArgs<"getRecordingKeyconfigurations">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingKeyconfigurations"]>;
  GetRecordingMediaretentionpolicies(...args: GenesysCloudFullApiOperationArgs<"getRecordingMediaretentionpolicies">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingMediaretentionpolicies"]>;
  GetRecordingMediaretentionpolicy(...args: GenesysCloudFullApiOperationArgs<"getRecordingMediaretentionpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingMediaretentionpolicy"]>;
  GetRecordingRecordingkeys(...args: GenesysCloudFullApiOperationArgs<"getRecordingRecordingkeys">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingRecordingkeys"]>;
  GetRecordingRecordingkeysRotationschedule(...args: GenesysCloudFullApiOperationArgs<"getRecordingRecordingkeysRotationschedule">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingRecordingkeysRotationschedule"]>;
  GetRecordingSettings(...args: GenesysCloudFullApiOperationArgs<"getRecordingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingSettings"]>;
  GetRecordingsRetentionQuery(...args: GenesysCloudFullApiOperationArgs<"getRecordingsRetentionQuery">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingsRetentionQuery"]>;
  GetRecordingsScreensessionsDetails(...args: GenesysCloudFullApiOperationArgs<"getRecordingsScreensessionsDetails">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingsScreensessionsDetails"]>;
  GetRecordingUploadsReport(...args: GenesysCloudFullApiOperationArgs<"getRecordingUploadsReport">): Promise<GenesysCloudFullApiOperationResponseMap["getRecordingUploadsReport"]>;
  PatchRecordingCrossplatformMediaretentionpolicy(...args: GenesysCloudFullApiOperationArgs<"patchRecordingCrossplatformMediaretentionpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["patchRecordingCrossplatformMediaretentionpolicy"]>;
  PatchRecordingMediaretentionpolicy(...args: GenesysCloudFullApiOperationArgs<"patchRecordingMediaretentionpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["patchRecordingMediaretentionpolicy"]>;
  PostConversationRecordingAnnotations(...args: GenesysCloudFullApiOperationArgs<"postConversationRecordingAnnotations">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationRecordingAnnotations"]>;
  PostRecordingBatchrequests(...args: GenesysCloudFullApiOperationArgs<"postRecordingBatchrequests">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingBatchrequests"]>;
  PostRecordingCrossplatformMediaretentionpolicies(...args: GenesysCloudFullApiOperationArgs<"postRecordingCrossplatformMediaretentionpolicies">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingCrossplatformMediaretentionpolicies"]>;
  PostRecordingJobs(...args: GenesysCloudFullApiOperationArgs<"postRecordingJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingJobs"]>;
  PostRecordingKeyconfigurations(...args: GenesysCloudFullApiOperationArgs<"postRecordingKeyconfigurations">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingKeyconfigurations"]>;
  PostRecordingKeyconfigurationsValidate(...args: GenesysCloudFullApiOperationArgs<"postRecordingKeyconfigurationsValidate">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingKeyconfigurationsValidate"]>;
  PostRecordingLocalkeys(...args: GenesysCloudFullApiOperationArgs<"postRecordingLocalkeys">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingLocalkeys"]>;
  PostRecordingMediaretentionpolicies(...args: GenesysCloudFullApiOperationArgs<"postRecordingMediaretentionpolicies">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingMediaretentionpolicies"]>;
  PostRecordingRecordingkeys(...args: GenesysCloudFullApiOperationArgs<"postRecordingRecordingkeys">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingRecordingkeys"]>;
  PostRecordingsDeletionprotection(...args: GenesysCloudFullApiOperationArgs<"postRecordingsDeletionprotection">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingsDeletionprotection"]>;
  PostRecordingsScreensessionsAcknowledge(...args: GenesysCloudFullApiOperationArgs<"postRecordingsScreensessionsAcknowledge">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingsScreensessionsAcknowledge"]>;
  PostRecordingsScreensessionsMetadata(...args: GenesysCloudFullApiOperationArgs<"postRecordingsScreensessionsMetadata">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingsScreensessionsMetadata"]>;
  PostRecordingUploadsReports(...args: GenesysCloudFullApiOperationArgs<"postRecordingUploadsReports">): Promise<GenesysCloudFullApiOperationResponseMap["postRecordingUploadsReports"]>;
  PutConversationRecording(...args: GenesysCloudFullApiOperationArgs<"putConversationRecording">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationRecording"]>;
  PutConversationRecordingAnnotation(...args: GenesysCloudFullApiOperationArgs<"putConversationRecordingAnnotation">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationRecordingAnnotation"]>;
  PutOrphanrecording(...args: GenesysCloudFullApiOperationArgs<"putOrphanrecording">): Promise<GenesysCloudFullApiOperationResponseMap["putOrphanrecording"]>;
  PutRecordingCrossplatformMediaretentionpolicy(...args: GenesysCloudFullApiOperationArgs<"putRecordingCrossplatformMediaretentionpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["putRecordingCrossplatformMediaretentionpolicy"]>;
  PutRecordingJob(...args: GenesysCloudFullApiOperationArgs<"putRecordingJob">): Promise<GenesysCloudFullApiOperationResponseMap["putRecordingJob"]>;
  PutRecordingKeyconfiguration(...args: GenesysCloudFullApiOperationArgs<"putRecordingKeyconfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["putRecordingKeyconfiguration"]>;
  PutRecordingMediaretentionpolicy(...args: GenesysCloudFullApiOperationArgs<"putRecordingMediaretentionpolicy">): Promise<GenesysCloudFullApiOperationResponseMap["putRecordingMediaretentionpolicy"]>;
  PutRecordingRecordingkeysRotationschedule(...args: GenesysCloudFullApiOperationArgs<"putRecordingRecordingkeysRotationschedule">): Promise<GenesysCloudFullApiOperationResponseMap["putRecordingRecordingkeysRotationschedule"]>;
  PutRecordingsDeletionprotection(...args: GenesysCloudFullApiOperationArgs<"putRecordingsDeletionprotection">): Promise<GenesysCloudFullApiOperationResponseMap["putRecordingsDeletionprotection"]>;
  PutRecordingSettings(...args: GenesysCloudFullApiOperationArgs<"putRecordingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putRecordingSettings"]>;
}

export const GenesysCloudFullApiRecordingGeneratedFunctionNames = [
  "DeleteConversationRecordingAnnotation",
  "DeleteOrphanrecording",
  "DeleteRecordingCrossplatformMediaretentionpolicies",
  "DeleteRecordingCrossplatformMediaretentionpolicy",
  "DeleteRecordingJob",
  "DeleteRecordingMediaretentionpolicies",
  "DeleteRecordingMediaretentionpolicy",
  "GetConversationRecording",
  "GetConversationRecordingAnnotation",
  "GetConversationRecordingAnnotations",
  "GetConversationRecordingmetadata",
  "GetConversationRecordingmetadataRecordingId",
  "GetConversationRecordings",
  "GetOrphanrecording",
  "GetOrphanrecordingMedia",
  "GetOrphanrecordings",
  "GetRecordingBatchrequest",
  "GetRecordingCrossplatformMediaretentionpolicies",
  "GetRecordingCrossplatformMediaretentionpolicy",
  "GetRecordingJob",
  "GetRecordingJobFailedrecordings",
  "GetRecordingJobs",
  "GetRecordingKeyconfiguration",
  "GetRecordingKeyconfigurations",
  "GetRecordingMediaretentionpolicies",
  "GetRecordingMediaretentionpolicy",
  "GetRecordingRecordingkeys",
  "GetRecordingRecordingkeysRotationschedule",
  "GetRecordingSettings",
  "GetRecordingsRetentionQuery",
  "GetRecordingsScreensessionsDetails",
  "GetRecordingUploadsReport",
  "PatchRecordingCrossplatformMediaretentionpolicy",
  "PatchRecordingMediaretentionpolicy",
  "PostConversationRecordingAnnotations",
  "PostRecordingBatchrequests",
  "PostRecordingCrossplatformMediaretentionpolicies",
  "PostRecordingJobs",
  "PostRecordingKeyconfigurations",
  "PostRecordingKeyconfigurationsValidate",
  "PostRecordingLocalkeys",
  "PostRecordingMediaretentionpolicies",
  "PostRecordingRecordingkeys",
  "PostRecordingsDeletionprotection",
  "PostRecordingsScreensessionsAcknowledge",
  "PostRecordingsScreensessionsMetadata",
  "PostRecordingUploadsReports",
  "PutConversationRecording",
  "PutConversationRecordingAnnotation",
  "PutOrphanrecording",
  "PutRecordingCrossplatformMediaretentionpolicy",
  "PutRecordingJob",
  "PutRecordingKeyconfiguration",
  "PutRecordingMediaretentionpolicy",
  "PutRecordingRecordingkeysRotationschedule",
  "PutRecordingsDeletionprotection",
  "PutRecordingSettings"
] as const satisfies readonly (keyof GenesysCloudFullApiRecordingGeneratedClient)[];

export function createGenesysCloudFullApiRecordingGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiRecordingGeneratedClient {
  return {
    DeleteConversationRecordingAnnotation: (...args) => callOperation("deleteConversationRecordingAnnotation", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationRecordingAnnotation">)),
    DeleteOrphanrecording: (...args) => callOperation("deleteOrphanrecording", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrphanrecording">)),
    DeleteRecordingCrossplatformMediaretentionpolicies: (...args) => callOperation("deleteRecordingCrossplatformMediaretentionpolicies", ...(args as GenesysCloudFullApiOperationArgs<"deleteRecordingCrossplatformMediaretentionpolicies">)),
    DeleteRecordingCrossplatformMediaretentionpolicy: (...args) => callOperation("deleteRecordingCrossplatformMediaretentionpolicy", ...(args as GenesysCloudFullApiOperationArgs<"deleteRecordingCrossplatformMediaretentionpolicy">)),
    DeleteRecordingJob: (...args) => callOperation("deleteRecordingJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteRecordingJob">)),
    DeleteRecordingMediaretentionpolicies: (...args) => callOperation("deleteRecordingMediaretentionpolicies", ...(args as GenesysCloudFullApiOperationArgs<"deleteRecordingMediaretentionpolicies">)),
    DeleteRecordingMediaretentionpolicy: (...args) => callOperation("deleteRecordingMediaretentionpolicy", ...(args as GenesysCloudFullApiOperationArgs<"deleteRecordingMediaretentionpolicy">)),
    GetConversationRecording: (...args) => callOperation("getConversationRecording", ...(args as GenesysCloudFullApiOperationArgs<"getConversationRecording">)),
    GetConversationRecordingAnnotation: (...args) => callOperation("getConversationRecordingAnnotation", ...(args as GenesysCloudFullApiOperationArgs<"getConversationRecordingAnnotation">)),
    GetConversationRecordingAnnotations: (...args) => callOperation("getConversationRecordingAnnotations", ...(args as GenesysCloudFullApiOperationArgs<"getConversationRecordingAnnotations">)),
    GetConversationRecordingmetadata: (...args) => callOperation("getConversationRecordingmetadata", ...(args as GenesysCloudFullApiOperationArgs<"getConversationRecordingmetadata">)),
    GetConversationRecordingmetadataRecordingId: (...args) => callOperation("getConversationRecordingmetadataRecordingId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationRecordingmetadataRecordingId">)),
    GetConversationRecordings: (...args) => callOperation("getConversationRecordings", ...(args as GenesysCloudFullApiOperationArgs<"getConversationRecordings">)),
    GetOrphanrecording: (...args) => callOperation("getOrphanrecording", ...(args as GenesysCloudFullApiOperationArgs<"getOrphanrecording">)),
    GetOrphanrecordingMedia: (...args) => callOperation("getOrphanrecordingMedia", ...(args as GenesysCloudFullApiOperationArgs<"getOrphanrecordingMedia">)),
    GetOrphanrecordings: (...args) => callOperation("getOrphanrecordings", ...(args as GenesysCloudFullApiOperationArgs<"getOrphanrecordings">)),
    GetRecordingBatchrequest: (...args) => callOperation("getRecordingBatchrequest", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingBatchrequest">)),
    GetRecordingCrossplatformMediaretentionpolicies: (...args) => callOperation("getRecordingCrossplatformMediaretentionpolicies", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingCrossplatformMediaretentionpolicies">)),
    GetRecordingCrossplatformMediaretentionpolicy: (...args) => callOperation("getRecordingCrossplatformMediaretentionpolicy", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingCrossplatformMediaretentionpolicy">)),
    GetRecordingJob: (...args) => callOperation("getRecordingJob", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingJob">)),
    GetRecordingJobFailedrecordings: (...args) => callOperation("getRecordingJobFailedrecordings", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingJobFailedrecordings">)),
    GetRecordingJobs: (...args) => callOperation("getRecordingJobs", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingJobs">)),
    GetRecordingKeyconfiguration: (...args) => callOperation("getRecordingKeyconfiguration", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingKeyconfiguration">)),
    GetRecordingKeyconfigurations: (...args) => callOperation("getRecordingKeyconfigurations", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingKeyconfigurations">)),
    GetRecordingMediaretentionpolicies: (...args) => callOperation("getRecordingMediaretentionpolicies", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingMediaretentionpolicies">)),
    GetRecordingMediaretentionpolicy: (...args) => callOperation("getRecordingMediaretentionpolicy", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingMediaretentionpolicy">)),
    GetRecordingRecordingkeys: (...args) => callOperation("getRecordingRecordingkeys", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingRecordingkeys">)),
    GetRecordingRecordingkeysRotationschedule: (...args) => callOperation("getRecordingRecordingkeysRotationschedule", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingRecordingkeysRotationschedule">)),
    GetRecordingSettings: (...args) => callOperation("getRecordingSettings", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingSettings">)),
    GetRecordingsRetentionQuery: (...args) => callOperation("getRecordingsRetentionQuery", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingsRetentionQuery">)),
    GetRecordingsScreensessionsDetails: (...args) => callOperation("getRecordingsScreensessionsDetails", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingsScreensessionsDetails">)),
    GetRecordingUploadsReport: (...args) => callOperation("getRecordingUploadsReport", ...(args as GenesysCloudFullApiOperationArgs<"getRecordingUploadsReport">)),
    PatchRecordingCrossplatformMediaretentionpolicy: (...args) => callOperation("patchRecordingCrossplatformMediaretentionpolicy", ...(args as GenesysCloudFullApiOperationArgs<"patchRecordingCrossplatformMediaretentionpolicy">)),
    PatchRecordingMediaretentionpolicy: (...args) => callOperation("patchRecordingMediaretentionpolicy", ...(args as GenesysCloudFullApiOperationArgs<"patchRecordingMediaretentionpolicy">)),
    PostConversationRecordingAnnotations: (...args) => callOperation("postConversationRecordingAnnotations", ...(args as GenesysCloudFullApiOperationArgs<"postConversationRecordingAnnotations">)),
    PostRecordingBatchrequests: (...args) => callOperation("postRecordingBatchrequests", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingBatchrequests">)),
    PostRecordingCrossplatformMediaretentionpolicies: (...args) => callOperation("postRecordingCrossplatformMediaretentionpolicies", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingCrossplatformMediaretentionpolicies">)),
    PostRecordingJobs: (...args) => callOperation("postRecordingJobs", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingJobs">)),
    PostRecordingKeyconfigurations: (...args) => callOperation("postRecordingKeyconfigurations", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingKeyconfigurations">)),
    PostRecordingKeyconfigurationsValidate: (...args) => callOperation("postRecordingKeyconfigurationsValidate", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingKeyconfigurationsValidate">)),
    PostRecordingLocalkeys: (...args) => callOperation("postRecordingLocalkeys", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingLocalkeys">)),
    PostRecordingMediaretentionpolicies: (...args) => callOperation("postRecordingMediaretentionpolicies", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingMediaretentionpolicies">)),
    PostRecordingRecordingkeys: (...args) => callOperation("postRecordingRecordingkeys", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingRecordingkeys">)),
    PostRecordingsDeletionprotection: (...args) => callOperation("postRecordingsDeletionprotection", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingsDeletionprotection">)),
    PostRecordingsScreensessionsAcknowledge: (...args) => callOperation("postRecordingsScreensessionsAcknowledge", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingsScreensessionsAcknowledge">)),
    PostRecordingsScreensessionsMetadata: (...args) => callOperation("postRecordingsScreensessionsMetadata", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingsScreensessionsMetadata">)),
    PostRecordingUploadsReports: (...args) => callOperation("postRecordingUploadsReports", ...(args as GenesysCloudFullApiOperationArgs<"postRecordingUploadsReports">)),
    PutConversationRecording: (...args) => callOperation("putConversationRecording", ...(args as GenesysCloudFullApiOperationArgs<"putConversationRecording">)),
    PutConversationRecordingAnnotation: (...args) => callOperation("putConversationRecordingAnnotation", ...(args as GenesysCloudFullApiOperationArgs<"putConversationRecordingAnnotation">)),
    PutOrphanrecording: (...args) => callOperation("putOrphanrecording", ...(args as GenesysCloudFullApiOperationArgs<"putOrphanrecording">)),
    PutRecordingCrossplatformMediaretentionpolicy: (...args) => callOperation("putRecordingCrossplatformMediaretentionpolicy", ...(args as GenesysCloudFullApiOperationArgs<"putRecordingCrossplatformMediaretentionpolicy">)),
    PutRecordingJob: (...args) => callOperation("putRecordingJob", ...(args as GenesysCloudFullApiOperationArgs<"putRecordingJob">)),
    PutRecordingKeyconfiguration: (...args) => callOperation("putRecordingKeyconfiguration", ...(args as GenesysCloudFullApiOperationArgs<"putRecordingKeyconfiguration">)),
    PutRecordingMediaretentionpolicy: (...args) => callOperation("putRecordingMediaretentionpolicy", ...(args as GenesysCloudFullApiOperationArgs<"putRecordingMediaretentionpolicy">)),
    PutRecordingRecordingkeysRotationschedule: (...args) => callOperation("putRecordingRecordingkeysRotationschedule", ...(args as GenesysCloudFullApiOperationArgs<"putRecordingRecordingkeysRotationschedule">)),
    PutRecordingsDeletionprotection: (...args) => callOperation("putRecordingsDeletionprotection", ...(args as GenesysCloudFullApiOperationArgs<"putRecordingsDeletionprotection">)),
    PutRecordingSettings: (...args) => callOperation("putRecordingSettings", ...(args as GenesysCloudFullApiOperationArgs<"putRecordingSettings">)),
  };
}
