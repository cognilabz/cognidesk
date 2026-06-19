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
export const GenesysCloudFullApiLearningOperationKeys = [
  "deleteLearningAssignment",
  "deleteLearningModule",
  "getLearningAssignment",
  "getLearningAssignments",
  "getLearningAssignmentsMe",
  "getLearningAssignmentStep",
  "getLearningModule",
  "getLearningModuleJob",
  "getLearningModulePreview",
  "getLearningModuleRule",
  "getLearningModules",
  "getLearningModulesAssignments",
  "getLearningModulesCoverartCoverArtId",
  "getLearningModuleVersion",
  "getLearningScheduleslotsJob",
  "getLearningScormScormId",
  "patchLearningAssignment",
  "patchLearningAssignmentReschedule",
  "patchLearningAssignmentStep",
  "patchLearningModuleUserAssignments",
  "postLearningAssessmentsScoring",
  "postLearningAssignmentReassign",
  "postLearningAssignmentReset",
  "postLearningAssignments",
  "postLearningAssignmentsAggregatesQuery",
  "postLearningAssignmentsBulkadd",
  "postLearningAssignmentsBulkremove",
  "postLearningModuleJobs",
  "postLearningModulePublish",
  "postLearningModules",
  "postLearningRulesQuery",
  "postLearningScheduleslotsJobs",
  "postLearningScheduleslotsQuery",
  "postLearningScorm",
  "putLearningModule",
  "putLearningModulePreview",
  "putLearningModuleRule"
] as const;
export type GenesysCloudFullApiLearningOperationKey = typeof GenesysCloudFullApiLearningOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiLearningOperationPathParamMap {
  "deleteLearningAssignment": { "assignmentId": GenesysCloudFullApiPathParamValue };
  "deleteLearningModule": { "moduleId": GenesysCloudFullApiPathParamValue };
  "getLearningAssignment": { "assignmentId": GenesysCloudFullApiPathParamValue };
  "getLearningAssignments": {};
  "getLearningAssignmentsMe": {};
  "getLearningAssignmentStep": { "assignmentId": GenesysCloudFullApiPathParamValue; "stepId": GenesysCloudFullApiPathParamValue };
  "getLearningModule": { "moduleId": GenesysCloudFullApiPathParamValue };
  "getLearningModuleJob": { "moduleId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getLearningModulePreview": { "moduleId": GenesysCloudFullApiPathParamValue };
  "getLearningModuleRule": { "moduleId": GenesysCloudFullApiPathParamValue };
  "getLearningModules": {};
  "getLearningModulesAssignments": {};
  "getLearningModulesCoverartCoverArtId": { "coverArtId": GenesysCloudFullApiPathParamValue };
  "getLearningModuleVersion": { "moduleId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getLearningScheduleslotsJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getLearningScormScormId": { "scormId": GenesysCloudFullApiPathParamValue };
  "patchLearningAssignment": { "assignmentId": GenesysCloudFullApiPathParamValue };
  "patchLearningAssignmentReschedule": { "assignmentId": GenesysCloudFullApiPathParamValue };
  "patchLearningAssignmentStep": { "assignmentId": GenesysCloudFullApiPathParamValue; "stepId": GenesysCloudFullApiPathParamValue };
  "patchLearningModuleUserAssignments": { "moduleId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "postLearningAssessmentsScoring": {};
  "postLearningAssignmentReassign": { "assignmentId": GenesysCloudFullApiPathParamValue };
  "postLearningAssignmentReset": { "assignmentId": GenesysCloudFullApiPathParamValue };
  "postLearningAssignments": {};
  "postLearningAssignmentsAggregatesQuery": {};
  "postLearningAssignmentsBulkadd": {};
  "postLearningAssignmentsBulkremove": {};
  "postLearningModuleJobs": { "moduleId": GenesysCloudFullApiPathParamValue };
  "postLearningModulePublish": { "moduleId": GenesysCloudFullApiPathParamValue };
  "postLearningModules": {};
  "postLearningRulesQuery": {};
  "postLearningScheduleslotsJobs": {};
  "postLearningScheduleslotsQuery": {};
  "postLearningScorm": {};
  "putLearningModule": { "moduleId": GenesysCloudFullApiPathParamValue };
  "putLearningModulePreview": { "moduleId": GenesysCloudFullApiPathParamValue };
  "putLearningModuleRule": { "moduleId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiLearningOperationRequestMap {
  "deleteLearningAssignment": GenesysCloudFullApiOperationInput<"deleteLearningAssignment">;
  "deleteLearningModule": GenesysCloudFullApiOperationInput<"deleteLearningModule">;
  "getLearningAssignment": GenesysCloudFullApiOperationInput<"getLearningAssignment">;
  "getLearningAssignments": GenesysCloudFullApiOperationInput<"getLearningAssignments">;
  "getLearningAssignmentsMe": GenesysCloudFullApiOperationInput<"getLearningAssignmentsMe">;
  "getLearningAssignmentStep": GenesysCloudFullApiOperationInput<"getLearningAssignmentStep">;
  "getLearningModule": GenesysCloudFullApiOperationInput<"getLearningModule">;
  "getLearningModuleJob": GenesysCloudFullApiOperationInput<"getLearningModuleJob">;
  "getLearningModulePreview": GenesysCloudFullApiOperationInput<"getLearningModulePreview">;
  "getLearningModuleRule": GenesysCloudFullApiOperationInput<"getLearningModuleRule">;
  "getLearningModules": GenesysCloudFullApiOperationInput<"getLearningModules">;
  "getLearningModulesAssignments": GenesysCloudFullApiOperationInput<"getLearningModulesAssignments">;
  "getLearningModulesCoverartCoverArtId": GenesysCloudFullApiOperationInput<"getLearningModulesCoverartCoverArtId">;
  "getLearningModuleVersion": GenesysCloudFullApiOperationInput<"getLearningModuleVersion">;
  "getLearningScheduleslotsJob": GenesysCloudFullApiOperationInput<"getLearningScheduleslotsJob">;
  "getLearningScormScormId": GenesysCloudFullApiOperationInput<"getLearningScormScormId">;
  "patchLearningAssignment": GenesysCloudFullApiOperationInput<"patchLearningAssignment">;
  "patchLearningAssignmentReschedule": GenesysCloudFullApiOperationInput<"patchLearningAssignmentReschedule">;
  "patchLearningAssignmentStep": GenesysCloudFullApiOperationInput<"patchLearningAssignmentStep">;
  "patchLearningModuleUserAssignments": GenesysCloudFullApiOperationInput<"patchLearningModuleUserAssignments">;
  "postLearningAssessmentsScoring": GenesysCloudFullApiOperationInput<"postLearningAssessmentsScoring">;
  "postLearningAssignmentReassign": GenesysCloudFullApiOperationInput<"postLearningAssignmentReassign">;
  "postLearningAssignmentReset": GenesysCloudFullApiOperationInput<"postLearningAssignmentReset">;
  "postLearningAssignments": GenesysCloudFullApiOperationInput<"postLearningAssignments">;
  "postLearningAssignmentsAggregatesQuery": GenesysCloudFullApiOperationInput<"postLearningAssignmentsAggregatesQuery">;
  "postLearningAssignmentsBulkadd": GenesysCloudFullApiOperationInput<"postLearningAssignmentsBulkadd">;
  "postLearningAssignmentsBulkremove": GenesysCloudFullApiOperationInput<"postLearningAssignmentsBulkremove">;
  "postLearningModuleJobs": GenesysCloudFullApiOperationInput<"postLearningModuleJobs">;
  "postLearningModulePublish": GenesysCloudFullApiOperationInput<"postLearningModulePublish">;
  "postLearningModules": GenesysCloudFullApiOperationInput<"postLearningModules">;
  "postLearningRulesQuery": GenesysCloudFullApiOperationInput<"postLearningRulesQuery">;
  "postLearningScheduleslotsJobs": GenesysCloudFullApiOperationInput<"postLearningScheduleslotsJobs">;
  "postLearningScheduleslotsQuery": GenesysCloudFullApiOperationInput<"postLearningScheduleslotsQuery">;
  "postLearningScorm": GenesysCloudFullApiOperationInput<"postLearningScorm">;
  "putLearningModule": GenesysCloudFullApiOperationInput<"putLearningModule">;
  "putLearningModulePreview": GenesysCloudFullApiOperationInput<"putLearningModulePreview">;
  "putLearningModuleRule": GenesysCloudFullApiOperationInput<"putLearningModuleRule">;
}

export interface GenesysCloudFullApiLearningGeneratedClient {
  DeleteLearningAssignment(...args: GenesysCloudFullApiOperationArgs<"deleteLearningAssignment">): Promise<GenesysCloudFullApiOperationResponseMap["deleteLearningAssignment"]>;
  DeleteLearningModule(...args: GenesysCloudFullApiOperationArgs<"deleteLearningModule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteLearningModule"]>;
  GetLearningAssignment(...args: GenesysCloudFullApiOperationArgs<"getLearningAssignment">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningAssignment"]>;
  GetLearningAssignments(...args: GenesysCloudFullApiOperationArgs<"getLearningAssignments">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningAssignments"]>;
  GetLearningAssignmentsMe(...args: GenesysCloudFullApiOperationArgs<"getLearningAssignmentsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningAssignmentsMe"]>;
  GetLearningAssignmentStep(...args: GenesysCloudFullApiOperationArgs<"getLearningAssignmentStep">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningAssignmentStep"]>;
  GetLearningModule(...args: GenesysCloudFullApiOperationArgs<"getLearningModule">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningModule"]>;
  GetLearningModuleJob(...args: GenesysCloudFullApiOperationArgs<"getLearningModuleJob">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningModuleJob"]>;
  GetLearningModulePreview(...args: GenesysCloudFullApiOperationArgs<"getLearningModulePreview">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningModulePreview"]>;
  GetLearningModuleRule(...args: GenesysCloudFullApiOperationArgs<"getLearningModuleRule">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningModuleRule"]>;
  GetLearningModules(...args: GenesysCloudFullApiOperationArgs<"getLearningModules">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningModules"]>;
  GetLearningModulesAssignments(...args: GenesysCloudFullApiOperationArgs<"getLearningModulesAssignments">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningModulesAssignments"]>;
  GetLearningModulesCoverartCoverArtId(...args: GenesysCloudFullApiOperationArgs<"getLearningModulesCoverartCoverArtId">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningModulesCoverartCoverArtId"]>;
  GetLearningModuleVersion(...args: GenesysCloudFullApiOperationArgs<"getLearningModuleVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningModuleVersion"]>;
  GetLearningScheduleslotsJob(...args: GenesysCloudFullApiOperationArgs<"getLearningScheduleslotsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningScheduleslotsJob"]>;
  GetLearningScormScormId(...args: GenesysCloudFullApiOperationArgs<"getLearningScormScormId">): Promise<GenesysCloudFullApiOperationResponseMap["getLearningScormScormId"]>;
  PatchLearningAssignment(...args: GenesysCloudFullApiOperationArgs<"patchLearningAssignment">): Promise<GenesysCloudFullApiOperationResponseMap["patchLearningAssignment"]>;
  PatchLearningAssignmentReschedule(...args: GenesysCloudFullApiOperationArgs<"patchLearningAssignmentReschedule">): Promise<GenesysCloudFullApiOperationResponseMap["patchLearningAssignmentReschedule"]>;
  PatchLearningAssignmentStep(...args: GenesysCloudFullApiOperationArgs<"patchLearningAssignmentStep">): Promise<GenesysCloudFullApiOperationResponseMap["patchLearningAssignmentStep"]>;
  PatchLearningModuleUserAssignments(...args: GenesysCloudFullApiOperationArgs<"patchLearningModuleUserAssignments">): Promise<GenesysCloudFullApiOperationResponseMap["patchLearningModuleUserAssignments"]>;
  PostLearningAssessmentsScoring(...args: GenesysCloudFullApiOperationArgs<"postLearningAssessmentsScoring">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningAssessmentsScoring"]>;
  PostLearningAssignmentReassign(...args: GenesysCloudFullApiOperationArgs<"postLearningAssignmentReassign">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningAssignmentReassign"]>;
  PostLearningAssignmentReset(...args: GenesysCloudFullApiOperationArgs<"postLearningAssignmentReset">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningAssignmentReset"]>;
  PostLearningAssignments(...args: GenesysCloudFullApiOperationArgs<"postLearningAssignments">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningAssignments"]>;
  PostLearningAssignmentsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postLearningAssignmentsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningAssignmentsAggregatesQuery"]>;
  PostLearningAssignmentsBulkadd(...args: GenesysCloudFullApiOperationArgs<"postLearningAssignmentsBulkadd">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningAssignmentsBulkadd"]>;
  PostLearningAssignmentsBulkremove(...args: GenesysCloudFullApiOperationArgs<"postLearningAssignmentsBulkremove">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningAssignmentsBulkremove"]>;
  PostLearningModuleJobs(...args: GenesysCloudFullApiOperationArgs<"postLearningModuleJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningModuleJobs"]>;
  PostLearningModulePublish(...args: GenesysCloudFullApiOperationArgs<"postLearningModulePublish">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningModulePublish"]>;
  PostLearningModules(...args: GenesysCloudFullApiOperationArgs<"postLearningModules">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningModules"]>;
  PostLearningRulesQuery(...args: GenesysCloudFullApiOperationArgs<"postLearningRulesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningRulesQuery"]>;
  PostLearningScheduleslotsJobs(...args: GenesysCloudFullApiOperationArgs<"postLearningScheduleslotsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningScheduleslotsJobs"]>;
  PostLearningScheduleslotsQuery(...args: GenesysCloudFullApiOperationArgs<"postLearningScheduleslotsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningScheduleslotsQuery"]>;
  PostLearningScorm(...args: GenesysCloudFullApiOperationArgs<"postLearningScorm">): Promise<GenesysCloudFullApiOperationResponseMap["postLearningScorm"]>;
  PutLearningModule(...args: GenesysCloudFullApiOperationArgs<"putLearningModule">): Promise<GenesysCloudFullApiOperationResponseMap["putLearningModule"]>;
  PutLearningModulePreview(...args: GenesysCloudFullApiOperationArgs<"putLearningModulePreview">): Promise<GenesysCloudFullApiOperationResponseMap["putLearningModulePreview"]>;
  PutLearningModuleRule(...args: GenesysCloudFullApiOperationArgs<"putLearningModuleRule">): Promise<GenesysCloudFullApiOperationResponseMap["putLearningModuleRule"]>;
}

export const GenesysCloudFullApiLearningGeneratedFunctionNames = [
  "DeleteLearningAssignment",
  "DeleteLearningModule",
  "GetLearningAssignment",
  "GetLearningAssignments",
  "GetLearningAssignmentsMe",
  "GetLearningAssignmentStep",
  "GetLearningModule",
  "GetLearningModuleJob",
  "GetLearningModulePreview",
  "GetLearningModuleRule",
  "GetLearningModules",
  "GetLearningModulesAssignments",
  "GetLearningModulesCoverartCoverArtId",
  "GetLearningModuleVersion",
  "GetLearningScheduleslotsJob",
  "GetLearningScormScormId",
  "PatchLearningAssignment",
  "PatchLearningAssignmentReschedule",
  "PatchLearningAssignmentStep",
  "PatchLearningModuleUserAssignments",
  "PostLearningAssessmentsScoring",
  "PostLearningAssignmentReassign",
  "PostLearningAssignmentReset",
  "PostLearningAssignments",
  "PostLearningAssignmentsAggregatesQuery",
  "PostLearningAssignmentsBulkadd",
  "PostLearningAssignmentsBulkremove",
  "PostLearningModuleJobs",
  "PostLearningModulePublish",
  "PostLearningModules",
  "PostLearningRulesQuery",
  "PostLearningScheduleslotsJobs",
  "PostLearningScheduleslotsQuery",
  "PostLearningScorm",
  "PutLearningModule",
  "PutLearningModulePreview",
  "PutLearningModuleRule"
] as const satisfies readonly (keyof GenesysCloudFullApiLearningGeneratedClient)[];

export function createGenesysCloudFullApiLearningGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiLearningGeneratedClient {
  return {
    DeleteLearningAssignment: (...args) => callOperation("deleteLearningAssignment", ...(args as GenesysCloudFullApiOperationArgs<"deleteLearningAssignment">)),
    DeleteLearningModule: (...args) => callOperation("deleteLearningModule", ...(args as GenesysCloudFullApiOperationArgs<"deleteLearningModule">)),
    GetLearningAssignment: (...args) => callOperation("getLearningAssignment", ...(args as GenesysCloudFullApiOperationArgs<"getLearningAssignment">)),
    GetLearningAssignments: (...args) => callOperation("getLearningAssignments", ...(args as GenesysCloudFullApiOperationArgs<"getLearningAssignments">)),
    GetLearningAssignmentsMe: (...args) => callOperation("getLearningAssignmentsMe", ...(args as GenesysCloudFullApiOperationArgs<"getLearningAssignmentsMe">)),
    GetLearningAssignmentStep: (...args) => callOperation("getLearningAssignmentStep", ...(args as GenesysCloudFullApiOperationArgs<"getLearningAssignmentStep">)),
    GetLearningModule: (...args) => callOperation("getLearningModule", ...(args as GenesysCloudFullApiOperationArgs<"getLearningModule">)),
    GetLearningModuleJob: (...args) => callOperation("getLearningModuleJob", ...(args as GenesysCloudFullApiOperationArgs<"getLearningModuleJob">)),
    GetLearningModulePreview: (...args) => callOperation("getLearningModulePreview", ...(args as GenesysCloudFullApiOperationArgs<"getLearningModulePreview">)),
    GetLearningModuleRule: (...args) => callOperation("getLearningModuleRule", ...(args as GenesysCloudFullApiOperationArgs<"getLearningModuleRule">)),
    GetLearningModules: (...args) => callOperation("getLearningModules", ...(args as GenesysCloudFullApiOperationArgs<"getLearningModules">)),
    GetLearningModulesAssignments: (...args) => callOperation("getLearningModulesAssignments", ...(args as GenesysCloudFullApiOperationArgs<"getLearningModulesAssignments">)),
    GetLearningModulesCoverartCoverArtId: (...args) => callOperation("getLearningModulesCoverartCoverArtId", ...(args as GenesysCloudFullApiOperationArgs<"getLearningModulesCoverartCoverArtId">)),
    GetLearningModuleVersion: (...args) => callOperation("getLearningModuleVersion", ...(args as GenesysCloudFullApiOperationArgs<"getLearningModuleVersion">)),
    GetLearningScheduleslotsJob: (...args) => callOperation("getLearningScheduleslotsJob", ...(args as GenesysCloudFullApiOperationArgs<"getLearningScheduleslotsJob">)),
    GetLearningScormScormId: (...args) => callOperation("getLearningScormScormId", ...(args as GenesysCloudFullApiOperationArgs<"getLearningScormScormId">)),
    PatchLearningAssignment: (...args) => callOperation("patchLearningAssignment", ...(args as GenesysCloudFullApiOperationArgs<"patchLearningAssignment">)),
    PatchLearningAssignmentReschedule: (...args) => callOperation("patchLearningAssignmentReschedule", ...(args as GenesysCloudFullApiOperationArgs<"patchLearningAssignmentReschedule">)),
    PatchLearningAssignmentStep: (...args) => callOperation("patchLearningAssignmentStep", ...(args as GenesysCloudFullApiOperationArgs<"patchLearningAssignmentStep">)),
    PatchLearningModuleUserAssignments: (...args) => callOperation("patchLearningModuleUserAssignments", ...(args as GenesysCloudFullApiOperationArgs<"patchLearningModuleUserAssignments">)),
    PostLearningAssessmentsScoring: (...args) => callOperation("postLearningAssessmentsScoring", ...(args as GenesysCloudFullApiOperationArgs<"postLearningAssessmentsScoring">)),
    PostLearningAssignmentReassign: (...args) => callOperation("postLearningAssignmentReassign", ...(args as GenesysCloudFullApiOperationArgs<"postLearningAssignmentReassign">)),
    PostLearningAssignmentReset: (...args) => callOperation("postLearningAssignmentReset", ...(args as GenesysCloudFullApiOperationArgs<"postLearningAssignmentReset">)),
    PostLearningAssignments: (...args) => callOperation("postLearningAssignments", ...(args as GenesysCloudFullApiOperationArgs<"postLearningAssignments">)),
    PostLearningAssignmentsAggregatesQuery: (...args) => callOperation("postLearningAssignmentsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postLearningAssignmentsAggregatesQuery">)),
    PostLearningAssignmentsBulkadd: (...args) => callOperation("postLearningAssignmentsBulkadd", ...(args as GenesysCloudFullApiOperationArgs<"postLearningAssignmentsBulkadd">)),
    PostLearningAssignmentsBulkremove: (...args) => callOperation("postLearningAssignmentsBulkremove", ...(args as GenesysCloudFullApiOperationArgs<"postLearningAssignmentsBulkremove">)),
    PostLearningModuleJobs: (...args) => callOperation("postLearningModuleJobs", ...(args as GenesysCloudFullApiOperationArgs<"postLearningModuleJobs">)),
    PostLearningModulePublish: (...args) => callOperation("postLearningModulePublish", ...(args as GenesysCloudFullApiOperationArgs<"postLearningModulePublish">)),
    PostLearningModules: (...args) => callOperation("postLearningModules", ...(args as GenesysCloudFullApiOperationArgs<"postLearningModules">)),
    PostLearningRulesQuery: (...args) => callOperation("postLearningRulesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postLearningRulesQuery">)),
    PostLearningScheduleslotsJobs: (...args) => callOperation("postLearningScheduleslotsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postLearningScheduleslotsJobs">)),
    PostLearningScheduleslotsQuery: (...args) => callOperation("postLearningScheduleslotsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postLearningScheduleslotsQuery">)),
    PostLearningScorm: (...args) => callOperation("postLearningScorm", ...(args as GenesysCloudFullApiOperationArgs<"postLearningScorm">)),
    PutLearningModule: (...args) => callOperation("putLearningModule", ...(args as GenesysCloudFullApiOperationArgs<"putLearningModule">)),
    PutLearningModulePreview: (...args) => callOperation("putLearningModulePreview", ...(args as GenesysCloudFullApiOperationArgs<"putLearningModulePreview">)),
    PutLearningModuleRule: (...args) => callOperation("putLearningModuleRule", ...(args as GenesysCloudFullApiOperationArgs<"putLearningModuleRule">)),
  };
}
