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
export const AmazonConnectFullApiCampaignsOperationKeys = [
  "connectcampaigns:CreateCampaign",
  "connectcampaigns:DeleteCampaign",
  "connectcampaigns:DescribeCampaign",
  "connectcampaigns:GetCampaignState",
  "connectcampaigns:PauseCampaign",
  "connectcampaigns:PutDialRequestBatch",
  "connectcampaigns:ResumeCampaign",
  "connectcampaigns:StartCampaign",
  "connectcampaigns:StopCampaign",
  "connectcampaigns:UpdateCampaignDialerConfig",
  "connectcampaigns:UpdateCampaignName",
  "connectcampaigns:UpdateCampaignOutboundCallConfig"
] as const;
export type AmazonConnectFullApiCampaignsOperationKey = typeof AmazonConnectFullApiCampaignsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiCampaignsOperationPathParamMap {
  "connectcampaigns:CreateCampaign": {};
  "connectcampaigns:DeleteCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:DescribeCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:GetCampaignState": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:PauseCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:PutDialRequestBatch": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:ResumeCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:StartCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:StopCampaign": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:UpdateCampaignDialerConfig": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:UpdateCampaignName": { "id": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:UpdateCampaignOutboundCallConfig": { "id": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiCampaignsOperationRequestMap {
  "connectcampaigns:CreateCampaign": AmazonConnectFullApiOperationInput<"connectcampaigns:CreateCampaign">;
  "connectcampaigns:DeleteCampaign": AmazonConnectFullApiOperationInput<"connectcampaigns:DeleteCampaign">;
  "connectcampaigns:DescribeCampaign": AmazonConnectFullApiOperationInput<"connectcampaigns:DescribeCampaign">;
  "connectcampaigns:GetCampaignState": AmazonConnectFullApiOperationInput<"connectcampaigns:GetCampaignState">;
  "connectcampaigns:PauseCampaign": AmazonConnectFullApiOperationInput<"connectcampaigns:PauseCampaign">;
  "connectcampaigns:PutDialRequestBatch": AmazonConnectFullApiOperationInput<"connectcampaigns:PutDialRequestBatch">;
  "connectcampaigns:ResumeCampaign": AmazonConnectFullApiOperationInput<"connectcampaigns:ResumeCampaign">;
  "connectcampaigns:StartCampaign": AmazonConnectFullApiOperationInput<"connectcampaigns:StartCampaign">;
  "connectcampaigns:StopCampaign": AmazonConnectFullApiOperationInput<"connectcampaigns:StopCampaign">;
  "connectcampaigns:UpdateCampaignDialerConfig": AmazonConnectFullApiOperationInput<"connectcampaigns:UpdateCampaignDialerConfig">;
  "connectcampaigns:UpdateCampaignName": AmazonConnectFullApiOperationInput<"connectcampaigns:UpdateCampaignName">;
  "connectcampaigns:UpdateCampaignOutboundCallConfig": AmazonConnectFullApiOperationInput<"connectcampaigns:UpdateCampaignOutboundCallConfig">;
}

export interface AmazonConnectFullApiCampaignsGeneratedClient {
  CreateCampaign(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:CreateCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:CreateCampaign"]>;
  DeleteCampaign(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:DeleteCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:DeleteCampaign"]>;
  DescribeCampaign(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:DescribeCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:DescribeCampaign"]>;
  GetCampaignState(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:GetCampaignState">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:GetCampaignState"]>;
  PauseCampaign(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:PauseCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:PauseCampaign"]>;
  PutDialRequestBatch(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:PutDialRequestBatch">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:PutDialRequestBatch"]>;
  ResumeCampaign(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:ResumeCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:ResumeCampaign"]>;
  StartCampaign(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:StartCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:StartCampaign"]>;
  StopCampaign(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:StopCampaign">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:StopCampaign"]>;
  UpdateCampaignDialerConfig(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:UpdateCampaignDialerConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:UpdateCampaignDialerConfig"]>;
  UpdateCampaignName(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:UpdateCampaignName">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:UpdateCampaignName"]>;
  UpdateCampaignOutboundCallConfig(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:UpdateCampaignOutboundCallConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:UpdateCampaignOutboundCallConfig"]>;
}

export const AmazonConnectFullApiCampaignsGeneratedFunctionNames = [
  "CreateCampaign",
  "DeleteCampaign",
  "DescribeCampaign",
  "GetCampaignState",
  "PauseCampaign",
  "PutDialRequestBatch",
  "ResumeCampaign",
  "StartCampaign",
  "StopCampaign",
  "UpdateCampaignDialerConfig",
  "UpdateCampaignName",
  "UpdateCampaignOutboundCallConfig"
] as const satisfies readonly (keyof AmazonConnectFullApiCampaignsGeneratedClient)[];

export function createAmazonConnectFullApiCampaignsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiCampaignsGeneratedClient {
  return {
    CreateCampaign: (...args) => callOperation("connectcampaigns:CreateCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:CreateCampaign">)),
    DeleteCampaign: (...args) => callOperation("connectcampaigns:DeleteCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:DeleteCampaign">)),
    DescribeCampaign: (...args) => callOperation("connectcampaigns:DescribeCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:DescribeCampaign">)),
    GetCampaignState: (...args) => callOperation("connectcampaigns:GetCampaignState", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:GetCampaignState">)),
    PauseCampaign: (...args) => callOperation("connectcampaigns:PauseCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:PauseCampaign">)),
    PutDialRequestBatch: (...args) => callOperation("connectcampaigns:PutDialRequestBatch", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:PutDialRequestBatch">)),
    ResumeCampaign: (...args) => callOperation("connectcampaigns:ResumeCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:ResumeCampaign">)),
    StartCampaign: (...args) => callOperation("connectcampaigns:StartCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:StartCampaign">)),
    StopCampaign: (...args) => callOperation("connectcampaigns:StopCampaign", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:StopCampaign">)),
    UpdateCampaignDialerConfig: (...args) => callOperation("connectcampaigns:UpdateCampaignDialerConfig", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:UpdateCampaignDialerConfig">)),
    UpdateCampaignName: (...args) => callOperation("connectcampaigns:UpdateCampaignName", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:UpdateCampaignName">)),
    UpdateCampaignOutboundCallConfig: (...args) => callOperation("connectcampaigns:UpdateCampaignOutboundCallConfig", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:UpdateCampaignOutboundCallConfig">)),
  };
}
