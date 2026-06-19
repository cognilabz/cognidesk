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
export const AmazonConnectFullApiV2OperationKeys = [
  "connectcampaignsv2:CreateCampaign",
  "connectcampaignsv2:DeleteCampaign",
  "connectcampaignsv2:DeleteCampaignChannelSubtypeConfig",
  "connectcampaignsv2:DeleteCampaignCommunicationLimits",
  "connectcampaignsv2:DeleteCampaignCommunicationTime",
  "connectcampaignsv2:DeleteCampaignEntryLimits",
  "connectcampaignsv2:DeleteConnectInstanceConfig",
  "connectcampaignsv2:DeleteConnectInstanceIntegration",
  "connectcampaignsv2:DeleteInstanceOnboardingJob",
  "connectcampaignsv2:DescribeCampaign",
  "connectcampaignsv2:GetCampaignState",
  "connectcampaignsv2:GetCampaignStateBatch",
  "connectcampaignsv2:GetConnectInstanceConfig",
  "connectcampaignsv2:GetInstanceCommunicationLimits",
  "connectcampaignsv2:GetInstanceOnboardingJobStatus",
  "connectcampaignsv2:ListCampaigns",
  "connectcampaignsv2:ListConnectInstanceIntegrations",
  "connectcampaignsv2:ListTagsForResource",
  "connectcampaignsv2:PauseCampaign",
  "connectcampaignsv2:PutConnectInstanceIntegration",
  "connectcampaignsv2:PutInstanceCommunicationLimits",
  "connectcampaignsv2:PutOutboundRequestBatch",
  "connectcampaignsv2:PutProfileOutboundRequestBatch",
  "connectcampaignsv2:ResumeCampaign",
  "connectcampaignsv2:StartCampaign",
  "connectcampaignsv2:StartInstanceOnboardingJob",
  "connectcampaignsv2:StopCampaign",
  "connectcampaignsv2:TagResource",
  "connectcampaignsv2:UntagResource",
  "connectcampaignsv2:UpdateCampaignChannelSubtypeConfig",
  "connectcampaignsv2:UpdateCampaignCommunicationLimits",
  "connectcampaignsv2:UpdateCampaignCommunicationTime",
  "connectcampaignsv2:UpdateCampaignEntryLimits",
  "connectcampaignsv2:UpdateCampaignFlowAssociation",
  "connectcampaignsv2:UpdateCampaignName",
  "connectcampaignsv2:UpdateCampaignSchedule",
  "connectcampaignsv2:UpdateCampaignSource"
] as const;
export type AmazonConnectFullApiV2OperationKey = typeof AmazonConnectFullApiV2OperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiV2OperationPathParamMap {
  "connectcampaignsv2:CreateCampaign": {};
  "connectcampaignsv2:DeleteCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:DeleteCampaignChannelSubtypeConfig": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:DeleteCampaignCommunicationLimits": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:DeleteCampaignCommunicationTime": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:DeleteCampaignEntryLimits": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:DeleteConnectInstanceConfig": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:DeleteConnectInstanceIntegration": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:DeleteInstanceOnboardingJob": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:DescribeCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:GetCampaignState": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:GetCampaignStateBatch": {};
  "connectcampaignsv2:GetConnectInstanceConfig": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:GetInstanceCommunicationLimits": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:GetInstanceOnboardingJobStatus": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:ListCampaigns": {};
  "connectcampaignsv2:ListConnectInstanceIntegrations": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:ListTagsForResource": { "arn": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:PauseCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:PutConnectInstanceIntegration": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:PutInstanceCommunicationLimits": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:PutOutboundRequestBatch": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:PutProfileOutboundRequestBatch": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:ResumeCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:StartCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:StartInstanceOnboardingJob": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:StopCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:TagResource": { "arn": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:UntagResource": { "arn": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:UpdateCampaignChannelSubtypeConfig": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:UpdateCampaignCommunicationLimits": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:UpdateCampaignCommunicationTime": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:UpdateCampaignEntryLimits": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:UpdateCampaignFlowAssociation": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:UpdateCampaignName": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:UpdateCampaignSchedule": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaignsv2:UpdateCampaignSource": { "id": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiV2OperationRequestMap {
  "connectcampaignsv2:CreateCampaign": AmazonConnectFullApiOperationInput<"connectcampaignsv2:CreateCampaign">;
  "connectcampaignsv2:DeleteCampaign": AmazonConnectFullApiOperationInput<"connectcampaignsv2:DeleteCampaign">;
  "connectcampaignsv2:DeleteCampaignChannelSubtypeConfig": AmazonConnectFullApiOperationInput<"connectcampaignsv2:DeleteCampaignChannelSubtypeConfig">;
  "connectcampaignsv2:DeleteCampaignCommunicationLimits": AmazonConnectFullApiOperationInput<"connectcampaignsv2:DeleteCampaignCommunicationLimits">;
  "connectcampaignsv2:DeleteCampaignCommunicationTime": AmazonConnectFullApiOperationInput<"connectcampaignsv2:DeleteCampaignCommunicationTime">;
  "connectcampaignsv2:DeleteCampaignEntryLimits": AmazonConnectFullApiOperationInput<"connectcampaignsv2:DeleteCampaignEntryLimits">;
  "connectcampaignsv2:DeleteConnectInstanceConfig": AmazonConnectFullApiOperationInput<"connectcampaignsv2:DeleteConnectInstanceConfig">;
  "connectcampaignsv2:DeleteConnectInstanceIntegration": AmazonConnectFullApiOperationInput<"connectcampaignsv2:DeleteConnectInstanceIntegration">;
  "connectcampaignsv2:DeleteInstanceOnboardingJob": AmazonConnectFullApiOperationInput<"connectcampaignsv2:DeleteInstanceOnboardingJob">;
  "connectcampaignsv2:DescribeCampaign": AmazonConnectFullApiOperationInput<"connectcampaignsv2:DescribeCampaign">;
  "connectcampaignsv2:GetCampaignState": AmazonConnectFullApiOperationInput<"connectcampaignsv2:GetCampaignState">;
  "connectcampaignsv2:GetCampaignStateBatch": AmazonConnectFullApiOperationInput<"connectcampaignsv2:GetCampaignStateBatch">;
  "connectcampaignsv2:GetConnectInstanceConfig": AmazonConnectFullApiOperationInput<"connectcampaignsv2:GetConnectInstanceConfig">;
  "connectcampaignsv2:GetInstanceCommunicationLimits": AmazonConnectFullApiOperationInput<"connectcampaignsv2:GetInstanceCommunicationLimits">;
  "connectcampaignsv2:GetInstanceOnboardingJobStatus": AmazonConnectFullApiOperationInput<"connectcampaignsv2:GetInstanceOnboardingJobStatus">;
  "connectcampaignsv2:ListCampaigns": AmazonConnectFullApiOperationInput<"connectcampaignsv2:ListCampaigns">;
  "connectcampaignsv2:ListConnectInstanceIntegrations": AmazonConnectFullApiOperationInput<"connectcampaignsv2:ListConnectInstanceIntegrations">;
  "connectcampaignsv2:ListTagsForResource": AmazonConnectFullApiOperationInput<"connectcampaignsv2:ListTagsForResource">;
  "connectcampaignsv2:PauseCampaign": AmazonConnectFullApiOperationInput<"connectcampaignsv2:PauseCampaign">;
  "connectcampaignsv2:PutConnectInstanceIntegration": AmazonConnectFullApiOperationInput<"connectcampaignsv2:PutConnectInstanceIntegration">;
  "connectcampaignsv2:PutInstanceCommunicationLimits": AmazonConnectFullApiOperationInput<"connectcampaignsv2:PutInstanceCommunicationLimits">;
  "connectcampaignsv2:PutOutboundRequestBatch": AmazonConnectFullApiOperationInput<"connectcampaignsv2:PutOutboundRequestBatch">;
  "connectcampaignsv2:PutProfileOutboundRequestBatch": AmazonConnectFullApiOperationInput<"connectcampaignsv2:PutProfileOutboundRequestBatch">;
  "connectcampaignsv2:ResumeCampaign": AmazonConnectFullApiOperationInput<"connectcampaignsv2:ResumeCampaign">;
  "connectcampaignsv2:StartCampaign": AmazonConnectFullApiOperationInput<"connectcampaignsv2:StartCampaign">;
  "connectcampaignsv2:StartInstanceOnboardingJob": AmazonConnectFullApiOperationInput<"connectcampaignsv2:StartInstanceOnboardingJob">;
  "connectcampaignsv2:StopCampaign": AmazonConnectFullApiOperationInput<"connectcampaignsv2:StopCampaign">;
  "connectcampaignsv2:TagResource": AmazonConnectFullApiOperationInput<"connectcampaignsv2:TagResource">;
  "connectcampaignsv2:UntagResource": AmazonConnectFullApiOperationInput<"connectcampaignsv2:UntagResource">;
  "connectcampaignsv2:UpdateCampaignChannelSubtypeConfig": AmazonConnectFullApiOperationInput<"connectcampaignsv2:UpdateCampaignChannelSubtypeConfig">;
  "connectcampaignsv2:UpdateCampaignCommunicationLimits": AmazonConnectFullApiOperationInput<"connectcampaignsv2:UpdateCampaignCommunicationLimits">;
  "connectcampaignsv2:UpdateCampaignCommunicationTime": AmazonConnectFullApiOperationInput<"connectcampaignsv2:UpdateCampaignCommunicationTime">;
  "connectcampaignsv2:UpdateCampaignEntryLimits": AmazonConnectFullApiOperationInput<"connectcampaignsv2:UpdateCampaignEntryLimits">;
  "connectcampaignsv2:UpdateCampaignFlowAssociation": AmazonConnectFullApiOperationInput<"connectcampaignsv2:UpdateCampaignFlowAssociation">;
  "connectcampaignsv2:UpdateCampaignName": AmazonConnectFullApiOperationInput<"connectcampaignsv2:UpdateCampaignName">;
  "connectcampaignsv2:UpdateCampaignSchedule": AmazonConnectFullApiOperationInput<"connectcampaignsv2:UpdateCampaignSchedule">;
  "connectcampaignsv2:UpdateCampaignSource": AmazonConnectFullApiOperationInput<"connectcampaignsv2:UpdateCampaignSource">;
}

export interface AmazonConnectFullApiV2GeneratedClient {
  CreateCampaignConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:CreateCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:CreateCampaign"]>;
  DeleteCampaignConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:DeleteCampaign"]>;
  DeleteCampaignChannelSubtypeConfig(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaignChannelSubtypeConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:DeleteCampaignChannelSubtypeConfig"]>;
  DeleteCampaignCommunicationLimits(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaignCommunicationLimits">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:DeleteCampaignCommunicationLimits"]>;
  DeleteCampaignCommunicationTime(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaignCommunicationTime">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:DeleteCampaignCommunicationTime"]>;
  DeleteCampaignEntryLimits(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaignEntryLimits">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:DeleteCampaignEntryLimits"]>;
  DeleteConnectInstanceConfigConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteConnectInstanceConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:DeleteConnectInstanceConfig"]>;
  DeleteConnectInstanceIntegration(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteConnectInstanceIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:DeleteConnectInstanceIntegration"]>;
  DeleteInstanceOnboardingJobConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteInstanceOnboardingJob">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:DeleteInstanceOnboardingJob"]>;
  DescribeCampaignConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DescribeCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:DescribeCampaign"]>;
  GetCampaignStateConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetCampaignState">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:GetCampaignState"]>;
  GetCampaignStateBatchConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetCampaignStateBatch">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:GetCampaignStateBatch"]>;
  GetConnectInstanceConfigConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetConnectInstanceConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:GetConnectInstanceConfig"]>;
  GetInstanceCommunicationLimits(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetInstanceCommunicationLimits">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:GetInstanceCommunicationLimits"]>;
  GetInstanceOnboardingJobStatusConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetInstanceOnboardingJobStatus">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:GetInstanceOnboardingJobStatus"]>;
  ListCampaignsConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:ListCampaigns">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:ListCampaigns"]>;
  ListConnectInstanceIntegrations(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:ListConnectInstanceIntegrations">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:ListConnectInstanceIntegrations"]>;
  ListTagsForResourceConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:ListTagsForResource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:ListTagsForResource"]>;
  PauseCampaignConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PauseCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:PauseCampaign"]>;
  PutConnectInstanceIntegration(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PutConnectInstanceIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:PutConnectInstanceIntegration"]>;
  PutInstanceCommunicationLimits(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PutInstanceCommunicationLimits">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:PutInstanceCommunicationLimits"]>;
  PutOutboundRequestBatch(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PutOutboundRequestBatch">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:PutOutboundRequestBatch"]>;
  PutProfileOutboundRequestBatch(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PutProfileOutboundRequestBatch">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:PutProfileOutboundRequestBatch"]>;
  ResumeCampaignConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:ResumeCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:ResumeCampaign"]>;
  StartCampaignConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:StartCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:StartCampaign"]>;
  StartInstanceOnboardingJobConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:StartInstanceOnboardingJob">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:StartInstanceOnboardingJob"]>;
  StopCampaignConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:StopCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:StopCampaign"]>;
  TagResourceConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:TagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:TagResource"]>;
  UntagResourceConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UntagResource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:UntagResource"]>;
  UpdateCampaignChannelSubtypeConfig(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignChannelSubtypeConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:UpdateCampaignChannelSubtypeConfig"]>;
  UpdateCampaignCommunicationLimits(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignCommunicationLimits">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:UpdateCampaignCommunicationLimits"]>;
  UpdateCampaignCommunicationTime(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignCommunicationTime">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:UpdateCampaignCommunicationTime"]>;
  UpdateCampaignEntryLimits(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignEntryLimits">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:UpdateCampaignEntryLimits"]>;
  UpdateCampaignFlowAssociation(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignFlowAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:UpdateCampaignFlowAssociation"]>;
  UpdateCampaignNameConnectcampaignsv2(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignName">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:UpdateCampaignName"]>;
  UpdateCampaignSchedule(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignSchedule">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:UpdateCampaignSchedule"]>;
  UpdateCampaignSource(...args: AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignSource">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaignsv2:UpdateCampaignSource"]>;
}

export const AmazonConnectFullApiV2GeneratedFunctionNames = [
  "CreateCampaignConnectcampaignsv2",
  "DeleteCampaignConnectcampaignsv2",
  "DeleteCampaignChannelSubtypeConfig",
  "DeleteCampaignCommunicationLimits",
  "DeleteCampaignCommunicationTime",
  "DeleteCampaignEntryLimits",
  "DeleteConnectInstanceConfigConnectcampaignsv2",
  "DeleteConnectInstanceIntegration",
  "DeleteInstanceOnboardingJobConnectcampaignsv2",
  "DescribeCampaignConnectcampaignsv2",
  "GetCampaignStateConnectcampaignsv2",
  "GetCampaignStateBatchConnectcampaignsv2",
  "GetConnectInstanceConfigConnectcampaignsv2",
  "GetInstanceCommunicationLimits",
  "GetInstanceOnboardingJobStatusConnectcampaignsv2",
  "ListCampaignsConnectcampaignsv2",
  "ListConnectInstanceIntegrations",
  "ListTagsForResourceConnectcampaignsv2",
  "PauseCampaignConnectcampaignsv2",
  "PutConnectInstanceIntegration",
  "PutInstanceCommunicationLimits",
  "PutOutboundRequestBatch",
  "PutProfileOutboundRequestBatch",
  "ResumeCampaignConnectcampaignsv2",
  "StartCampaignConnectcampaignsv2",
  "StartInstanceOnboardingJobConnectcampaignsv2",
  "StopCampaignConnectcampaignsv2",
  "TagResourceConnectcampaignsv2",
  "UntagResourceConnectcampaignsv2",
  "UpdateCampaignChannelSubtypeConfig",
  "UpdateCampaignCommunicationLimits",
  "UpdateCampaignCommunicationTime",
  "UpdateCampaignEntryLimits",
  "UpdateCampaignFlowAssociation",
  "UpdateCampaignNameConnectcampaignsv2",
  "UpdateCampaignSchedule",
  "UpdateCampaignSource"
] as const satisfies readonly (keyof AmazonConnectFullApiV2GeneratedClient)[];

export function createAmazonConnectFullApiV2GeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiV2GeneratedClient {
  return {
    CreateCampaignConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:CreateCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:CreateCampaign">)),
    DeleteCampaignConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:DeleteCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaign">)),
    DeleteCampaignChannelSubtypeConfig: (...args) => callOperation("connectcampaignsv2:DeleteCampaignChannelSubtypeConfig", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaignChannelSubtypeConfig">)),
    DeleteCampaignCommunicationLimits: (...args) => callOperation("connectcampaignsv2:DeleteCampaignCommunicationLimits", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaignCommunicationLimits">)),
    DeleteCampaignCommunicationTime: (...args) => callOperation("connectcampaignsv2:DeleteCampaignCommunicationTime", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaignCommunicationTime">)),
    DeleteCampaignEntryLimits: (...args) => callOperation("connectcampaignsv2:DeleteCampaignEntryLimits", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteCampaignEntryLimits">)),
    DeleteConnectInstanceConfigConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:DeleteConnectInstanceConfig", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteConnectInstanceConfig">)),
    DeleteConnectInstanceIntegration: (...args) => callOperation("connectcampaignsv2:DeleteConnectInstanceIntegration", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteConnectInstanceIntegration">)),
    DeleteInstanceOnboardingJobConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:DeleteInstanceOnboardingJob", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DeleteInstanceOnboardingJob">)),
    DescribeCampaignConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:DescribeCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:DescribeCampaign">)),
    GetCampaignStateConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:GetCampaignState", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetCampaignState">)),
    GetCampaignStateBatchConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:GetCampaignStateBatch", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetCampaignStateBatch">)),
    GetConnectInstanceConfigConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:GetConnectInstanceConfig", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetConnectInstanceConfig">)),
    GetInstanceCommunicationLimits: (...args) => callOperation("connectcampaignsv2:GetInstanceCommunicationLimits", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetInstanceCommunicationLimits">)),
    GetInstanceOnboardingJobStatusConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:GetInstanceOnboardingJobStatus", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:GetInstanceOnboardingJobStatus">)),
    ListCampaignsConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:ListCampaigns", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:ListCampaigns">)),
    ListConnectInstanceIntegrations: (...args) => callOperation("connectcampaignsv2:ListConnectInstanceIntegrations", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:ListConnectInstanceIntegrations">)),
    ListTagsForResourceConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:ListTagsForResource", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:ListTagsForResource">)),
    PauseCampaignConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:PauseCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PauseCampaign">)),
    PutConnectInstanceIntegration: (...args) => callOperation("connectcampaignsv2:PutConnectInstanceIntegration", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PutConnectInstanceIntegration">)),
    PutInstanceCommunicationLimits: (...args) => callOperation("connectcampaignsv2:PutInstanceCommunicationLimits", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PutInstanceCommunicationLimits">)),
    PutOutboundRequestBatch: (...args) => callOperation("connectcampaignsv2:PutOutboundRequestBatch", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PutOutboundRequestBatch">)),
    PutProfileOutboundRequestBatch: (...args) => callOperation("connectcampaignsv2:PutProfileOutboundRequestBatch", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:PutProfileOutboundRequestBatch">)),
    ResumeCampaignConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:ResumeCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:ResumeCampaign">)),
    StartCampaignConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:StartCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:StartCampaign">)),
    StartInstanceOnboardingJobConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:StartInstanceOnboardingJob", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:StartInstanceOnboardingJob">)),
    StopCampaignConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:StopCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:StopCampaign">)),
    TagResourceConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:TagResource", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:TagResource">)),
    UntagResourceConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:UntagResource", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UntagResource">)),
    UpdateCampaignChannelSubtypeConfig: (...args) => callOperation("connectcampaignsv2:UpdateCampaignChannelSubtypeConfig", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignChannelSubtypeConfig">)),
    UpdateCampaignCommunicationLimits: (...args) => callOperation("connectcampaignsv2:UpdateCampaignCommunicationLimits", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignCommunicationLimits">)),
    UpdateCampaignCommunicationTime: (...args) => callOperation("connectcampaignsv2:UpdateCampaignCommunicationTime", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignCommunicationTime">)),
    UpdateCampaignEntryLimits: (...args) => callOperation("connectcampaignsv2:UpdateCampaignEntryLimits", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignEntryLimits">)),
    UpdateCampaignFlowAssociation: (...args) => callOperation("connectcampaignsv2:UpdateCampaignFlowAssociation", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignFlowAssociation">)),
    UpdateCampaignNameConnectcampaignsv2: (...args) => callOperation("connectcampaignsv2:UpdateCampaignName", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignName">)),
    UpdateCampaignSchedule: (...args) => callOperation("connectcampaignsv2:UpdateCampaignSchedule", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignSchedule">)),
    UpdateCampaignSource: (...args) => callOperation("connectcampaignsv2:UpdateCampaignSource", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaignsv2:UpdateCampaignSource">)),
  };
}
