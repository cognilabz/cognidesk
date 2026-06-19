// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiKnowledgeBasesOperationKeys = [
  "qconnect:ActivateMessageTemplate",
  "qconnect:CreateContent",
  "qconnect:CreateContentAssociation",
  "qconnect:CreateKnowledgeBase",
  "qconnect:CreateMessageTemplate",
  "qconnect:CreateMessageTemplateAttachment",
  "qconnect:CreateMessageTemplateVersion",
  "qconnect:CreateQuickResponse",
  "qconnect:DeactivateMessageTemplate",
  "qconnect:DeleteContent",
  "qconnect:DeleteContentAssociation",
  "qconnect:DeleteImportJob",
  "qconnect:DeleteKnowledgeBase",
  "qconnect:DeleteMessageTemplate",
  "qconnect:DeleteMessageTemplateAttachment",
  "qconnect:DeleteQuickResponse",
  "qconnect:GetContent",
  "qconnect:GetContentAssociation",
  "qconnect:GetContentSummary",
  "qconnect:GetImportJob",
  "qconnect:GetKnowledgeBase",
  "qconnect:GetMessageTemplate",
  "qconnect:GetQuickResponse",
  "qconnect:ListContentAssociations",
  "qconnect:ListContents",
  "qconnect:ListImportJobs",
  "qconnect:ListKnowledgeBases",
  "qconnect:ListMessageTemplateVersions",
  "qconnect:ListMessageTemplates",
  "qconnect:ListQuickResponses",
  "qconnect:RemoveKnowledgeBaseTemplateUri",
  "qconnect:RenderMessageTemplate",
  "qconnect:SearchContent",
  "qconnect:SearchMessageTemplates",
  "qconnect:SearchQuickResponses",
  "qconnect:StartContentUpload",
  "qconnect:StartImportJob",
  "qconnect:UpdateContent",
  "qconnect:UpdateKnowledgeBaseTemplateUri",
  "qconnect:UpdateMessageTemplate",
  "qconnect:UpdateMessageTemplateMetadata",
  "qconnect:UpdateQuickResponse",
  "wisdom:CreateContent",
  "wisdom:CreateKnowledgeBase",
  "wisdom:CreateQuickResponse",
  "wisdom:DeleteContent",
  "wisdom:DeleteImportJob",
  "wisdom:DeleteKnowledgeBase",
  "wisdom:DeleteQuickResponse",
  "wisdom:GetContent",
  "wisdom:GetContentSummary",
  "wisdom:GetImportJob",
  "wisdom:GetKnowledgeBase",
  "wisdom:GetQuickResponse",
  "wisdom:ListContents",
  "wisdom:ListImportJobs",
  "wisdom:ListKnowledgeBases",
  "wisdom:ListQuickResponses",
  "wisdom:RemoveKnowledgeBaseTemplateUri",
  "wisdom:SearchContent",
  "wisdom:SearchQuickResponses",
  "wisdom:StartContentUpload",
  "wisdom:StartImportJob",
  "wisdom:UpdateContent",
  "wisdom:UpdateKnowledgeBaseTemplateUri",
  "wisdom:UpdateQuickResponse"
] as const;
export type AmazonConnectFullApiKnowledgeBasesOperationKey = typeof AmazonConnectFullApiKnowledgeBasesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiKnowledgeBasesOperationPathParamMap {
  "qconnect:ActivateMessageTemplate": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateContentAssociation": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateKnowledgeBase": {};
  "qconnect:CreateMessageTemplate": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateMessageTemplateAttachment": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateMessageTemplateVersion": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateQuickResponse": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeactivateMessageTemplate": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteContentAssociation": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue; "contentAssociationId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteImportJob": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "importJobId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteKnowledgeBase": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteMessageTemplate": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteMessageTemplateAttachment": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue; "attachmentId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteQuickResponse": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "quickResponseId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetContentAssociation": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue; "contentAssociationId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetContentSummary": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetImportJob": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "importJobId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetKnowledgeBase": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetMessageTemplate": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetQuickResponse": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "quickResponseId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListContentAssociations": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListContents": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListImportJobs": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListKnowledgeBases": {};
  "qconnect:ListMessageTemplateVersions": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListMessageTemplates": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListQuickResponses": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:RemoveKnowledgeBaseTemplateUri": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:RenderMessageTemplate": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:SearchContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:SearchMessageTemplates": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:SearchQuickResponses": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:StartContentUpload": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:StartImportJob": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateKnowledgeBaseTemplateUri": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateMessageTemplate": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateMessageTemplateMetadata": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "messageTemplateId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateQuickResponse": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "quickResponseId": AmazonConnectFullApiPathParamValue };
  "wisdom:CreateContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:CreateKnowledgeBase": {};
  "wisdom:CreateQuickResponse": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:DeleteContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "wisdom:DeleteImportJob": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "importJobId": AmazonConnectFullApiPathParamValue };
  "wisdom:DeleteKnowledgeBase": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:DeleteQuickResponse": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "quickResponseId": AmazonConnectFullApiPathParamValue };
  "wisdom:GetContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "wisdom:GetContentSummary": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "wisdom:GetImportJob": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "importJobId": AmazonConnectFullApiPathParamValue };
  "wisdom:GetKnowledgeBase": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:GetQuickResponse": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "quickResponseId": AmazonConnectFullApiPathParamValue };
  "wisdom:ListContents": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:ListImportJobs": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:ListKnowledgeBases": {};
  "wisdom:ListQuickResponses": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:RemoveKnowledgeBaseTemplateUri": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:SearchContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:SearchQuickResponses": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:StartContentUpload": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:StartImportJob": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:UpdateContent": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "contentId": AmazonConnectFullApiPathParamValue };
  "wisdom:UpdateKnowledgeBaseTemplateUri": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue };
  "wisdom:UpdateQuickResponse": { "knowledgeBaseId": AmazonConnectFullApiPathParamValue; "quickResponseId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiKnowledgeBasesOperationRequestMap {
  "qconnect:ActivateMessageTemplate": AmazonConnectFullApiOperationInput<"qconnect:ActivateMessageTemplate">;
  "qconnect:CreateContent": AmazonConnectFullApiOperationInput<"qconnect:CreateContent">;
  "qconnect:CreateContentAssociation": AmazonConnectFullApiOperationInput<"qconnect:CreateContentAssociation">;
  "qconnect:CreateKnowledgeBase": AmazonConnectFullApiOperationInput<"qconnect:CreateKnowledgeBase">;
  "qconnect:CreateMessageTemplate": AmazonConnectFullApiOperationInput<"qconnect:CreateMessageTemplate">;
  "qconnect:CreateMessageTemplateAttachment": AmazonConnectFullApiOperationInput<"qconnect:CreateMessageTemplateAttachment">;
  "qconnect:CreateMessageTemplateVersion": AmazonConnectFullApiOperationInput<"qconnect:CreateMessageTemplateVersion">;
  "qconnect:CreateQuickResponse": AmazonConnectFullApiOperationInput<"qconnect:CreateQuickResponse">;
  "qconnect:DeactivateMessageTemplate": AmazonConnectFullApiOperationInput<"qconnect:DeactivateMessageTemplate">;
  "qconnect:DeleteContent": AmazonConnectFullApiOperationInput<"qconnect:DeleteContent">;
  "qconnect:DeleteContentAssociation": AmazonConnectFullApiOperationInput<"qconnect:DeleteContentAssociation">;
  "qconnect:DeleteImportJob": AmazonConnectFullApiOperationInput<"qconnect:DeleteImportJob">;
  "qconnect:DeleteKnowledgeBase": AmazonConnectFullApiOperationInput<"qconnect:DeleteKnowledgeBase">;
  "qconnect:DeleteMessageTemplate": AmazonConnectFullApiOperationInput<"qconnect:DeleteMessageTemplate">;
  "qconnect:DeleteMessageTemplateAttachment": AmazonConnectFullApiOperationInput<"qconnect:DeleteMessageTemplateAttachment">;
  "qconnect:DeleteQuickResponse": AmazonConnectFullApiOperationInput<"qconnect:DeleteQuickResponse">;
  "qconnect:GetContent": AmazonConnectFullApiOperationInput<"qconnect:GetContent">;
  "qconnect:GetContentAssociation": AmazonConnectFullApiOperationInput<"qconnect:GetContentAssociation">;
  "qconnect:GetContentSummary": AmazonConnectFullApiOperationInput<"qconnect:GetContentSummary">;
  "qconnect:GetImportJob": AmazonConnectFullApiOperationInput<"qconnect:GetImportJob">;
  "qconnect:GetKnowledgeBase": AmazonConnectFullApiOperationInput<"qconnect:GetKnowledgeBase">;
  "qconnect:GetMessageTemplate": AmazonConnectFullApiOperationInput<"qconnect:GetMessageTemplate">;
  "qconnect:GetQuickResponse": AmazonConnectFullApiOperationInput<"qconnect:GetQuickResponse">;
  "qconnect:ListContentAssociations": AmazonConnectFullApiOperationInput<"qconnect:ListContentAssociations">;
  "qconnect:ListContents": AmazonConnectFullApiOperationInput<"qconnect:ListContents">;
  "qconnect:ListImportJobs": AmazonConnectFullApiOperationInput<"qconnect:ListImportJobs">;
  "qconnect:ListKnowledgeBases": AmazonConnectFullApiOperationInput<"qconnect:ListKnowledgeBases">;
  "qconnect:ListMessageTemplateVersions": AmazonConnectFullApiOperationInput<"qconnect:ListMessageTemplateVersions">;
  "qconnect:ListMessageTemplates": AmazonConnectFullApiOperationInput<"qconnect:ListMessageTemplates">;
  "qconnect:ListQuickResponses": AmazonConnectFullApiOperationInput<"qconnect:ListQuickResponses">;
  "qconnect:RemoveKnowledgeBaseTemplateUri": AmazonConnectFullApiOperationInput<"qconnect:RemoveKnowledgeBaseTemplateUri">;
  "qconnect:RenderMessageTemplate": AmazonConnectFullApiOperationInput<"qconnect:RenderMessageTemplate">;
  "qconnect:SearchContent": AmazonConnectFullApiOperationInput<"qconnect:SearchContent">;
  "qconnect:SearchMessageTemplates": AmazonConnectFullApiOperationInput<"qconnect:SearchMessageTemplates">;
  "qconnect:SearchQuickResponses": AmazonConnectFullApiOperationInput<"qconnect:SearchQuickResponses">;
  "qconnect:StartContentUpload": AmazonConnectFullApiOperationInput<"qconnect:StartContentUpload">;
  "qconnect:StartImportJob": AmazonConnectFullApiOperationInput<"qconnect:StartImportJob">;
  "qconnect:UpdateContent": AmazonConnectFullApiOperationInput<"qconnect:UpdateContent">;
  "qconnect:UpdateKnowledgeBaseTemplateUri": AmazonConnectFullApiOperationInput<"qconnect:UpdateKnowledgeBaseTemplateUri">;
  "qconnect:UpdateMessageTemplate": AmazonConnectFullApiOperationInput<"qconnect:UpdateMessageTemplate">;
  "qconnect:UpdateMessageTemplateMetadata": AmazonConnectFullApiOperationInput<"qconnect:UpdateMessageTemplateMetadata">;
  "qconnect:UpdateQuickResponse": AmazonConnectFullApiOperationInput<"qconnect:UpdateQuickResponse">;
  "wisdom:CreateContent": AmazonConnectFullApiOperationInput<"wisdom:CreateContent">;
  "wisdom:CreateKnowledgeBase": AmazonConnectFullApiOperationInput<"wisdom:CreateKnowledgeBase">;
  "wisdom:CreateQuickResponse": AmazonConnectFullApiOperationInput<"wisdom:CreateQuickResponse">;
  "wisdom:DeleteContent": AmazonConnectFullApiOperationInput<"wisdom:DeleteContent">;
  "wisdom:DeleteImportJob": AmazonConnectFullApiOperationInput<"wisdom:DeleteImportJob">;
  "wisdom:DeleteKnowledgeBase": AmazonConnectFullApiOperationInput<"wisdom:DeleteKnowledgeBase">;
  "wisdom:DeleteQuickResponse": AmazonConnectFullApiOperationInput<"wisdom:DeleteQuickResponse">;
  "wisdom:GetContent": AmazonConnectFullApiOperationInput<"wisdom:GetContent">;
  "wisdom:GetContentSummary": AmazonConnectFullApiOperationInput<"wisdom:GetContentSummary">;
  "wisdom:GetImportJob": AmazonConnectFullApiOperationInput<"wisdom:GetImportJob">;
  "wisdom:GetKnowledgeBase": AmazonConnectFullApiOperationInput<"wisdom:GetKnowledgeBase">;
  "wisdom:GetQuickResponse": AmazonConnectFullApiOperationInput<"wisdom:GetQuickResponse">;
  "wisdom:ListContents": AmazonConnectFullApiOperationInput<"wisdom:ListContents">;
  "wisdom:ListImportJobs": AmazonConnectFullApiOperationInput<"wisdom:ListImportJobs">;
  "wisdom:ListKnowledgeBases": AmazonConnectFullApiOperationInput<"wisdom:ListKnowledgeBases">;
  "wisdom:ListQuickResponses": AmazonConnectFullApiOperationInput<"wisdom:ListQuickResponses">;
  "wisdom:RemoveKnowledgeBaseTemplateUri": AmazonConnectFullApiOperationInput<"wisdom:RemoveKnowledgeBaseTemplateUri">;
  "wisdom:SearchContent": AmazonConnectFullApiOperationInput<"wisdom:SearchContent">;
  "wisdom:SearchQuickResponses": AmazonConnectFullApiOperationInput<"wisdom:SearchQuickResponses">;
  "wisdom:StartContentUpload": AmazonConnectFullApiOperationInput<"wisdom:StartContentUpload">;
  "wisdom:StartImportJob": AmazonConnectFullApiOperationInput<"wisdom:StartImportJob">;
  "wisdom:UpdateContent": AmazonConnectFullApiOperationInput<"wisdom:UpdateContent">;
  "wisdom:UpdateKnowledgeBaseTemplateUri": AmazonConnectFullApiOperationInput<"wisdom:UpdateKnowledgeBaseTemplateUri">;
  "wisdom:UpdateQuickResponse": AmazonConnectFullApiOperationInput<"wisdom:UpdateQuickResponse">;
}

export interface AmazonConnectFullApiKnowledgeBasesGeneratedClient {
  ActivateMessageTemplate(...args: AmazonConnectFullApiOperationArgs<"qconnect:ActivateMessageTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ActivateMessageTemplate"]>;
  CreateContent(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateContent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateContent"]>;
  CreateContentAssociation(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateContentAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateContentAssociation"]>;
  CreateKnowledgeBase(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateKnowledgeBase">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateKnowledgeBase"]>;
  CreateMessageTemplate(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateMessageTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateMessageTemplate"]>;
  CreateMessageTemplateAttachment(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateMessageTemplateAttachment">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateMessageTemplateAttachment"]>;
  CreateMessageTemplateVersion(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateMessageTemplateVersion">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateMessageTemplateVersion"]>;
  CreateQuickResponse(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateQuickResponse">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateQuickResponse"]>;
  DeactivateMessageTemplate(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeactivateMessageTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeactivateMessageTemplate"]>;
  DeleteContent(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteContent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteContent"]>;
  DeleteContentAssociation(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteContentAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteContentAssociation"]>;
  DeleteImportJob(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteImportJob">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteImportJob"]>;
  DeleteKnowledgeBase(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteKnowledgeBase">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteKnowledgeBase"]>;
  DeleteMessageTemplate(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteMessageTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteMessageTemplate"]>;
  DeleteMessageTemplateAttachment(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteMessageTemplateAttachment">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteMessageTemplateAttachment"]>;
  DeleteQuickResponse(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteQuickResponse">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteQuickResponse"]>;
  GetContent(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetContent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetContent"]>;
  GetContentAssociation(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetContentAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetContentAssociation"]>;
  GetContentSummary(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetContentSummary">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetContentSummary"]>;
  GetImportJob(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetImportJob">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetImportJob"]>;
  GetKnowledgeBase(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetKnowledgeBase">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetKnowledgeBase"]>;
  GetMessageTemplate(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetMessageTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetMessageTemplate"]>;
  GetQuickResponse(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetQuickResponse">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetQuickResponse"]>;
  ListContentAssociations(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListContentAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListContentAssociations"]>;
  ListContents(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListContents">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListContents"]>;
  ListImportJobs(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListImportJobs">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListImportJobs"]>;
  ListKnowledgeBases(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListKnowledgeBases">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListKnowledgeBases"]>;
  ListMessageTemplateVersions(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListMessageTemplateVersions">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListMessageTemplateVersions"]>;
  ListMessageTemplates(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListMessageTemplates">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListMessageTemplates"]>;
  ListQuickResponses(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListQuickResponses">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListQuickResponses"]>;
  RemoveKnowledgeBaseTemplateUri(...args: AmazonConnectFullApiOperationArgs<"qconnect:RemoveKnowledgeBaseTemplateUri">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:RemoveKnowledgeBaseTemplateUri"]>;
  RenderMessageTemplate(...args: AmazonConnectFullApiOperationArgs<"qconnect:RenderMessageTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:RenderMessageTemplate"]>;
  SearchContent(...args: AmazonConnectFullApiOperationArgs<"qconnect:SearchContent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:SearchContent"]>;
  SearchMessageTemplates(...args: AmazonConnectFullApiOperationArgs<"qconnect:SearchMessageTemplates">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:SearchMessageTemplates"]>;
  SearchQuickResponses(...args: AmazonConnectFullApiOperationArgs<"qconnect:SearchQuickResponses">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:SearchQuickResponses"]>;
  StartContentUpload(...args: AmazonConnectFullApiOperationArgs<"qconnect:StartContentUpload">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:StartContentUpload"]>;
  StartImportJob(...args: AmazonConnectFullApiOperationArgs<"qconnect:StartImportJob">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:StartImportJob"]>;
  UpdateContent(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateContent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateContent"]>;
  UpdateKnowledgeBaseTemplateUri(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateKnowledgeBaseTemplateUri">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateKnowledgeBaseTemplateUri"]>;
  UpdateMessageTemplate(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateMessageTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateMessageTemplate"]>;
  UpdateMessageTemplateMetadata(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateMessageTemplateMetadata">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateMessageTemplateMetadata"]>;
  UpdateQuickResponse(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateQuickResponse">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateQuickResponse"]>;
  CreateContentWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:CreateContent">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:CreateContent"]>;
  CreateKnowledgeBaseWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:CreateKnowledgeBase">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:CreateKnowledgeBase"]>;
  CreateQuickResponseWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:CreateQuickResponse">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:CreateQuickResponse"]>;
  DeleteContentWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:DeleteContent">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:DeleteContent"]>;
  DeleteImportJobWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:DeleteImportJob">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:DeleteImportJob"]>;
  DeleteKnowledgeBaseWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:DeleteKnowledgeBase">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:DeleteKnowledgeBase"]>;
  DeleteQuickResponseWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:DeleteQuickResponse">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:DeleteQuickResponse"]>;
  GetContentWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:GetContent">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:GetContent"]>;
  GetContentSummaryWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:GetContentSummary">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:GetContentSummary"]>;
  GetImportJobWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:GetImportJob">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:GetImportJob"]>;
  GetKnowledgeBaseWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:GetKnowledgeBase">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:GetKnowledgeBase"]>;
  GetQuickResponseWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:GetQuickResponse">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:GetQuickResponse"]>;
  ListContentsWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:ListContents">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:ListContents"]>;
  ListImportJobsWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:ListImportJobs">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:ListImportJobs"]>;
  ListKnowledgeBasesWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:ListKnowledgeBases">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:ListKnowledgeBases"]>;
  ListQuickResponsesWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:ListQuickResponses">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:ListQuickResponses"]>;
  RemoveKnowledgeBaseTemplateUriWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:RemoveKnowledgeBaseTemplateUri">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:RemoveKnowledgeBaseTemplateUri"]>;
  SearchContentWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:SearchContent">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:SearchContent"]>;
  SearchQuickResponsesWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:SearchQuickResponses">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:SearchQuickResponses"]>;
  StartContentUploadWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:StartContentUpload">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:StartContentUpload"]>;
  StartImportJobWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:StartImportJob">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:StartImportJob"]>;
  UpdateContentWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:UpdateContent">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:UpdateContent"]>;
  UpdateKnowledgeBaseTemplateUriWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:UpdateKnowledgeBaseTemplateUri">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:UpdateKnowledgeBaseTemplateUri"]>;
  UpdateQuickResponseWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:UpdateQuickResponse">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:UpdateQuickResponse"]>;
}

export const AmazonConnectFullApiKnowledgeBasesGeneratedFunctionNames = [
  "ActivateMessageTemplate",
  "CreateContent",
  "CreateContentAssociation",
  "CreateKnowledgeBase",
  "CreateMessageTemplate",
  "CreateMessageTemplateAttachment",
  "CreateMessageTemplateVersion",
  "CreateQuickResponse",
  "DeactivateMessageTemplate",
  "DeleteContent",
  "DeleteContentAssociation",
  "DeleteImportJob",
  "DeleteKnowledgeBase",
  "DeleteMessageTemplate",
  "DeleteMessageTemplateAttachment",
  "DeleteQuickResponse",
  "GetContent",
  "GetContentAssociation",
  "GetContentSummary",
  "GetImportJob",
  "GetKnowledgeBase",
  "GetMessageTemplate",
  "GetQuickResponse",
  "ListContentAssociations",
  "ListContents",
  "ListImportJobs",
  "ListKnowledgeBases",
  "ListMessageTemplateVersions",
  "ListMessageTemplates",
  "ListQuickResponses",
  "RemoveKnowledgeBaseTemplateUri",
  "RenderMessageTemplate",
  "SearchContent",
  "SearchMessageTemplates",
  "SearchQuickResponses",
  "StartContentUpload",
  "StartImportJob",
  "UpdateContent",
  "UpdateKnowledgeBaseTemplateUri",
  "UpdateMessageTemplate",
  "UpdateMessageTemplateMetadata",
  "UpdateQuickResponse",
  "CreateContentWisdom",
  "CreateKnowledgeBaseWisdom",
  "CreateQuickResponseWisdom",
  "DeleteContentWisdom",
  "DeleteImportJobWisdom",
  "DeleteKnowledgeBaseWisdom",
  "DeleteQuickResponseWisdom",
  "GetContentWisdom",
  "GetContentSummaryWisdom",
  "GetImportJobWisdom",
  "GetKnowledgeBaseWisdom",
  "GetQuickResponseWisdom",
  "ListContentsWisdom",
  "ListImportJobsWisdom",
  "ListKnowledgeBasesWisdom",
  "ListQuickResponsesWisdom",
  "RemoveKnowledgeBaseTemplateUriWisdom",
  "SearchContentWisdom",
  "SearchQuickResponsesWisdom",
  "StartContentUploadWisdom",
  "StartImportJobWisdom",
  "UpdateContentWisdom",
  "UpdateKnowledgeBaseTemplateUriWisdom",
  "UpdateQuickResponseWisdom"
] as const satisfies readonly (keyof AmazonConnectFullApiKnowledgeBasesGeneratedClient)[];

export function createAmazonConnectFullApiKnowledgeBasesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiKnowledgeBasesGeneratedClient {
  return {
    ActivateMessageTemplate: (...args) => callOperation("qconnect:ActivateMessageTemplate", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ActivateMessageTemplate">)),
    CreateContent: (...args) => callOperation("qconnect:CreateContent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateContent">)),
    CreateContentAssociation: (...args) => callOperation("qconnect:CreateContentAssociation", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateContentAssociation">)),
    CreateKnowledgeBase: (...args) => callOperation("qconnect:CreateKnowledgeBase", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateKnowledgeBase">)),
    CreateMessageTemplate: (...args) => callOperation("qconnect:CreateMessageTemplate", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateMessageTemplate">)),
    CreateMessageTemplateAttachment: (...args) => callOperation("qconnect:CreateMessageTemplateAttachment", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateMessageTemplateAttachment">)),
    CreateMessageTemplateVersion: (...args) => callOperation("qconnect:CreateMessageTemplateVersion", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateMessageTemplateVersion">)),
    CreateQuickResponse: (...args) => callOperation("qconnect:CreateQuickResponse", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateQuickResponse">)),
    DeactivateMessageTemplate: (...args) => callOperation("qconnect:DeactivateMessageTemplate", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeactivateMessageTemplate">)),
    DeleteContent: (...args) => callOperation("qconnect:DeleteContent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteContent">)),
    DeleteContentAssociation: (...args) => callOperation("qconnect:DeleteContentAssociation", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteContentAssociation">)),
    DeleteImportJob: (...args) => callOperation("qconnect:DeleteImportJob", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteImportJob">)),
    DeleteKnowledgeBase: (...args) => callOperation("qconnect:DeleteKnowledgeBase", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteKnowledgeBase">)),
    DeleteMessageTemplate: (...args) => callOperation("qconnect:DeleteMessageTemplate", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteMessageTemplate">)),
    DeleteMessageTemplateAttachment: (...args) => callOperation("qconnect:DeleteMessageTemplateAttachment", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteMessageTemplateAttachment">)),
    DeleteQuickResponse: (...args) => callOperation("qconnect:DeleteQuickResponse", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteQuickResponse">)),
    GetContent: (...args) => callOperation("qconnect:GetContent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetContent">)),
    GetContentAssociation: (...args) => callOperation("qconnect:GetContentAssociation", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetContentAssociation">)),
    GetContentSummary: (...args) => callOperation("qconnect:GetContentSummary", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetContentSummary">)),
    GetImportJob: (...args) => callOperation("qconnect:GetImportJob", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetImportJob">)),
    GetKnowledgeBase: (...args) => callOperation("qconnect:GetKnowledgeBase", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetKnowledgeBase">)),
    GetMessageTemplate: (...args) => callOperation("qconnect:GetMessageTemplate", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetMessageTemplate">)),
    GetQuickResponse: (...args) => callOperation("qconnect:GetQuickResponse", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetQuickResponse">)),
    ListContentAssociations: (...args) => callOperation("qconnect:ListContentAssociations", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListContentAssociations">)),
    ListContents: (...args) => callOperation("qconnect:ListContents", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListContents">)),
    ListImportJobs: (...args) => callOperation("qconnect:ListImportJobs", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListImportJobs">)),
    ListKnowledgeBases: (...args) => callOperation("qconnect:ListKnowledgeBases", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListKnowledgeBases">)),
    ListMessageTemplateVersions: (...args) => callOperation("qconnect:ListMessageTemplateVersions", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListMessageTemplateVersions">)),
    ListMessageTemplates: (...args) => callOperation("qconnect:ListMessageTemplates", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListMessageTemplates">)),
    ListQuickResponses: (...args) => callOperation("qconnect:ListQuickResponses", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListQuickResponses">)),
    RemoveKnowledgeBaseTemplateUri: (...args) => callOperation("qconnect:RemoveKnowledgeBaseTemplateUri", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:RemoveKnowledgeBaseTemplateUri">)),
    RenderMessageTemplate: (...args) => callOperation("qconnect:RenderMessageTemplate", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:RenderMessageTemplate">)),
    SearchContent: (...args) => callOperation("qconnect:SearchContent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:SearchContent">)),
    SearchMessageTemplates: (...args) => callOperation("qconnect:SearchMessageTemplates", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:SearchMessageTemplates">)),
    SearchQuickResponses: (...args) => callOperation("qconnect:SearchQuickResponses", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:SearchQuickResponses">)),
    StartContentUpload: (...args) => callOperation("qconnect:StartContentUpload", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:StartContentUpload">)),
    StartImportJob: (...args) => callOperation("qconnect:StartImportJob", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:StartImportJob">)),
    UpdateContent: (...args) => callOperation("qconnect:UpdateContent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateContent">)),
    UpdateKnowledgeBaseTemplateUri: (...args) => callOperation("qconnect:UpdateKnowledgeBaseTemplateUri", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateKnowledgeBaseTemplateUri">)),
    UpdateMessageTemplate: (...args) => callOperation("qconnect:UpdateMessageTemplate", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateMessageTemplate">)),
    UpdateMessageTemplateMetadata: (...args) => callOperation("qconnect:UpdateMessageTemplateMetadata", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateMessageTemplateMetadata">)),
    UpdateQuickResponse: (...args) => callOperation("qconnect:UpdateQuickResponse", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateQuickResponse">)),
    CreateContentWisdom: (...args) => callOperation("wisdom:CreateContent", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:CreateContent">)),
    CreateKnowledgeBaseWisdom: (...args) => callOperation("wisdom:CreateKnowledgeBase", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:CreateKnowledgeBase">)),
    CreateQuickResponseWisdom: (...args) => callOperation("wisdom:CreateQuickResponse", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:CreateQuickResponse">)),
    DeleteContentWisdom: (...args) => callOperation("wisdom:DeleteContent", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:DeleteContent">)),
    DeleteImportJobWisdom: (...args) => callOperation("wisdom:DeleteImportJob", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:DeleteImportJob">)),
    DeleteKnowledgeBaseWisdom: (...args) => callOperation("wisdom:DeleteKnowledgeBase", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:DeleteKnowledgeBase">)),
    DeleteQuickResponseWisdom: (...args) => callOperation("wisdom:DeleteQuickResponse", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:DeleteQuickResponse">)),
    GetContentWisdom: (...args) => callOperation("wisdom:GetContent", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:GetContent">)),
    GetContentSummaryWisdom: (...args) => callOperation("wisdom:GetContentSummary", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:GetContentSummary">)),
    GetImportJobWisdom: (...args) => callOperation("wisdom:GetImportJob", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:GetImportJob">)),
    GetKnowledgeBaseWisdom: (...args) => callOperation("wisdom:GetKnowledgeBase", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:GetKnowledgeBase">)),
    GetQuickResponseWisdom: (...args) => callOperation("wisdom:GetQuickResponse", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:GetQuickResponse">)),
    ListContentsWisdom: (...args) => callOperation("wisdom:ListContents", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:ListContents">)),
    ListImportJobsWisdom: (...args) => callOperation("wisdom:ListImportJobs", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:ListImportJobs">)),
    ListKnowledgeBasesWisdom: (...args) => callOperation("wisdom:ListKnowledgeBases", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:ListKnowledgeBases">)),
    ListQuickResponsesWisdom: (...args) => callOperation("wisdom:ListQuickResponses", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:ListQuickResponses">)),
    RemoveKnowledgeBaseTemplateUriWisdom: (...args) => callOperation("wisdom:RemoveKnowledgeBaseTemplateUri", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:RemoveKnowledgeBaseTemplateUri">)),
    SearchContentWisdom: (...args) => callOperation("wisdom:SearchContent", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:SearchContent">)),
    SearchQuickResponsesWisdom: (...args) => callOperation("wisdom:SearchQuickResponses", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:SearchQuickResponses">)),
    StartContentUploadWisdom: (...args) => callOperation("wisdom:StartContentUpload", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:StartContentUpload">)),
    StartImportJobWisdom: (...args) => callOperation("wisdom:StartImportJob", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:StartImportJob">)),
    UpdateContentWisdom: (...args) => callOperation("wisdom:UpdateContent", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:UpdateContent">)),
    UpdateKnowledgeBaseTemplateUriWisdom: (...args) => callOperation("wisdom:UpdateKnowledgeBaseTemplateUri", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:UpdateKnowledgeBaseTemplateUri">)),
    UpdateQuickResponseWisdom: (...args) => callOperation("wisdom:UpdateQuickResponse", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:UpdateQuickResponse">)),
  };
}
