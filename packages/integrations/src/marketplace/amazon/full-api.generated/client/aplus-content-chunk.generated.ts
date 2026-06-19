// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiAplusContentOperationKeys = [
  "aplusContent_2020-11-01:searchContentDocuments",
  "aplusContent_2020-11-01:createContentDocument",
  "aplusContent_2020-11-01:getContentDocument",
  "aplusContent_2020-11-01:updateContentDocument",
  "aplusContent_2020-11-01:listContentDocumentAsinRelations",
  "aplusContent_2020-11-01:postContentDocumentAsinRelations",
  "aplusContent_2020-11-01:validateContentDocumentAsinRelations",
  "aplusContent_2020-11-01:searchContentPublishRecords",
  "aplusContent_2020-11-01:postContentDocumentApprovalSubmission",
  "aplusContent_2020-11-01:postContentDocumentSuspendSubmission"
] as const;
export type AmazonFullApiAplusContentOperationKey = typeof AmazonFullApiAplusContentOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiAplusContentOperationPathParamMap {
  "aplusContent_2020-11-01:searchContentDocuments": {};
  "aplusContent_2020-11-01:createContentDocument": {};
  "aplusContent_2020-11-01:getContentDocument": { "contentReferenceKey": AmazonFullApiPathParamValue };
  "aplusContent_2020-11-01:updateContentDocument": { "contentReferenceKey": AmazonFullApiPathParamValue };
  "aplusContent_2020-11-01:listContentDocumentAsinRelations": { "contentReferenceKey": AmazonFullApiPathParamValue };
  "aplusContent_2020-11-01:postContentDocumentAsinRelations": { "contentReferenceKey": AmazonFullApiPathParamValue };
  "aplusContent_2020-11-01:validateContentDocumentAsinRelations": {};
  "aplusContent_2020-11-01:searchContentPublishRecords": {};
  "aplusContent_2020-11-01:postContentDocumentApprovalSubmission": { "contentReferenceKey": AmazonFullApiPathParamValue };
  "aplusContent_2020-11-01:postContentDocumentSuspendSubmission": { "contentReferenceKey": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiAplusContentOperationRequestMap {
  "aplusContent_2020-11-01:searchContentDocuments": AmazonFullApiOperationInput<"aplusContent_2020-11-01:searchContentDocuments">;
  "aplusContent_2020-11-01:createContentDocument": AmazonFullApiOperationInput<"aplusContent_2020-11-01:createContentDocument">;
  "aplusContent_2020-11-01:getContentDocument": AmazonFullApiOperationInput<"aplusContent_2020-11-01:getContentDocument">;
  "aplusContent_2020-11-01:updateContentDocument": AmazonFullApiOperationInput<"aplusContent_2020-11-01:updateContentDocument">;
  "aplusContent_2020-11-01:listContentDocumentAsinRelations": AmazonFullApiOperationInput<"aplusContent_2020-11-01:listContentDocumentAsinRelations">;
  "aplusContent_2020-11-01:postContentDocumentAsinRelations": AmazonFullApiOperationInput<"aplusContent_2020-11-01:postContentDocumentAsinRelations">;
  "aplusContent_2020-11-01:validateContentDocumentAsinRelations": AmazonFullApiOperationInput<"aplusContent_2020-11-01:validateContentDocumentAsinRelations">;
  "aplusContent_2020-11-01:searchContentPublishRecords": AmazonFullApiOperationInput<"aplusContent_2020-11-01:searchContentPublishRecords">;
  "aplusContent_2020-11-01:postContentDocumentApprovalSubmission": AmazonFullApiOperationInput<"aplusContent_2020-11-01:postContentDocumentApprovalSubmission">;
  "aplusContent_2020-11-01:postContentDocumentSuspendSubmission": AmazonFullApiOperationInput<"aplusContent_2020-11-01:postContentDocumentSuspendSubmission">;
}

export interface AmazonFullApiAplusContentGeneratedClient {
  SearchContentDocuments(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:searchContentDocuments">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:searchContentDocuments"]>;
  CreateContentDocument(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:createContentDocument">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:createContentDocument"]>;
  GetContentDocument(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:getContentDocument">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:getContentDocument"]>;
  UpdateContentDocument(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:updateContentDocument">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:updateContentDocument"]>;
  ListContentDocumentAsinRelations(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:listContentDocumentAsinRelations">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:listContentDocumentAsinRelations"]>;
  PostContentDocumentAsinRelations(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:postContentDocumentAsinRelations">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:postContentDocumentAsinRelations"]>;
  ValidateContentDocumentAsinRelations(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:validateContentDocumentAsinRelations">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:validateContentDocumentAsinRelations"]>;
  SearchContentPublishRecords(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:searchContentPublishRecords">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:searchContentPublishRecords"]>;
  PostContentDocumentApprovalSubmission(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:postContentDocumentApprovalSubmission">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:postContentDocumentApprovalSubmission"]>;
  PostContentDocumentSuspendSubmission(...args: AmazonFullApiOperationArgs<"aplusContent_2020-11-01:postContentDocumentSuspendSubmission">): Promise<AmazonFullApiOperationResponseMap["aplusContent_2020-11-01:postContentDocumentSuspendSubmission"]>;
}

export const AmazonFullApiAplusContentGeneratedFunctionNames = [
  "SearchContentDocuments",
  "CreateContentDocument",
  "GetContentDocument",
  "UpdateContentDocument",
  "ListContentDocumentAsinRelations",
  "PostContentDocumentAsinRelations",
  "ValidateContentDocumentAsinRelations",
  "SearchContentPublishRecords",
  "PostContentDocumentApprovalSubmission",
  "PostContentDocumentSuspendSubmission"
] as const satisfies readonly (keyof AmazonFullApiAplusContentGeneratedClient)[];

export function createAmazonFullApiAplusContentGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiAplusContentGeneratedClient {
  return {
    SearchContentDocuments: (...args) => callOperation("aplusContent_2020-11-01:searchContentDocuments", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:searchContentDocuments">)),
    CreateContentDocument: (...args) => callOperation("aplusContent_2020-11-01:createContentDocument", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:createContentDocument">)),
    GetContentDocument: (...args) => callOperation("aplusContent_2020-11-01:getContentDocument", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:getContentDocument">)),
    UpdateContentDocument: (...args) => callOperation("aplusContent_2020-11-01:updateContentDocument", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:updateContentDocument">)),
    ListContentDocumentAsinRelations: (...args) => callOperation("aplusContent_2020-11-01:listContentDocumentAsinRelations", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:listContentDocumentAsinRelations">)),
    PostContentDocumentAsinRelations: (...args) => callOperation("aplusContent_2020-11-01:postContentDocumentAsinRelations", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:postContentDocumentAsinRelations">)),
    ValidateContentDocumentAsinRelations: (...args) => callOperation("aplusContent_2020-11-01:validateContentDocumentAsinRelations", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:validateContentDocumentAsinRelations">)),
    SearchContentPublishRecords: (...args) => callOperation("aplusContent_2020-11-01:searchContentPublishRecords", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:searchContentPublishRecords">)),
    PostContentDocumentApprovalSubmission: (...args) => callOperation("aplusContent_2020-11-01:postContentDocumentApprovalSubmission", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:postContentDocumentApprovalSubmission">)),
    PostContentDocumentSuspendSubmission: (...args) => callOperation("aplusContent_2020-11-01:postContentDocumentSuspendSubmission", ...(args as AmazonFullApiOperationArgs<"aplusContent_2020-11-01:postContentDocumentSuspendSubmission">)),
  };
}
