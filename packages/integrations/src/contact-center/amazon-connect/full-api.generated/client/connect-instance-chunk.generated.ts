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
export const AmazonConnectFullApiConnectInstanceOperationKeys = [
  "connectcampaigns:DeleteConnectInstanceConfig",
  "connectcampaigns:DeleteInstanceOnboardingJob",
  "connectcampaigns:GetConnectInstanceConfig",
  "connectcampaigns:GetInstanceOnboardingJobStatus",
  "connectcampaigns:StartInstanceOnboardingJob"
] as const;
export type AmazonConnectFullApiConnectInstanceOperationKey = typeof AmazonConnectFullApiConnectInstanceOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiConnectInstanceOperationPathParamMap {
  "connectcampaigns:DeleteConnectInstanceConfig": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:DeleteInstanceOnboardingJob": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:GetConnectInstanceConfig": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:GetInstanceOnboardingJobStatus": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
  "connectcampaigns:StartInstanceOnboardingJob": { "connectInstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiConnectInstanceOperationRequestMap {
  "connectcampaigns:DeleteConnectInstanceConfig": AmazonConnectFullApiOperationInput<"connectcampaigns:DeleteConnectInstanceConfig">;
  "connectcampaigns:DeleteInstanceOnboardingJob": AmazonConnectFullApiOperationInput<"connectcampaigns:DeleteInstanceOnboardingJob">;
  "connectcampaigns:GetConnectInstanceConfig": AmazonConnectFullApiOperationInput<"connectcampaigns:GetConnectInstanceConfig">;
  "connectcampaigns:GetInstanceOnboardingJobStatus": AmazonConnectFullApiOperationInput<"connectcampaigns:GetInstanceOnboardingJobStatus">;
  "connectcampaigns:StartInstanceOnboardingJob": AmazonConnectFullApiOperationInput<"connectcampaigns:StartInstanceOnboardingJob">;
}

export interface AmazonConnectFullApiConnectInstanceGeneratedClient {
  DeleteConnectInstanceConfig(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:DeleteConnectInstanceConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:DeleteConnectInstanceConfig"]>;
  DeleteInstanceOnboardingJob(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:DeleteInstanceOnboardingJob">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:DeleteInstanceOnboardingJob"]>;
  GetConnectInstanceConfig(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:GetConnectInstanceConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:GetConnectInstanceConfig"]>;
  GetInstanceOnboardingJobStatus(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:GetInstanceOnboardingJobStatus">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:GetInstanceOnboardingJobStatus"]>;
  StartInstanceOnboardingJob(...args: AmazonConnectFullApiOperationArgs<"connectcampaigns:StartInstanceOnboardingJob">): Promise<AmazonConnectFullApiOperationResponseMap["connectcampaigns:StartInstanceOnboardingJob"]>;
}

export const AmazonConnectFullApiConnectInstanceGeneratedFunctionNames = [
  "DeleteConnectInstanceConfig",
  "DeleteInstanceOnboardingJob",
  "GetConnectInstanceConfig",
  "GetInstanceOnboardingJobStatus",
  "StartInstanceOnboardingJob"
] as const satisfies readonly (keyof AmazonConnectFullApiConnectInstanceGeneratedClient)[];

export function createAmazonConnectFullApiConnectInstanceGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiConnectInstanceGeneratedClient {
  return {
    DeleteConnectInstanceConfig: (...args) => callOperation("connectcampaigns:DeleteConnectInstanceConfig", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:DeleteConnectInstanceConfig">)),
    DeleteInstanceOnboardingJob: (...args) => callOperation("connectcampaigns:DeleteInstanceOnboardingJob", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:DeleteInstanceOnboardingJob">)),
    GetConnectInstanceConfig: (...args) => callOperation("connectcampaigns:GetConnectInstanceConfig", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:GetConnectInstanceConfig">)),
    GetInstanceOnboardingJobStatus: (...args) => callOperation("connectcampaigns:GetInstanceOnboardingJobStatus", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:GetInstanceOnboardingJobStatus">)),
    StartInstanceOnboardingJob: (...args) => callOperation("connectcampaigns:StartInstanceOnboardingJob", ...(args as AmazonConnectFullApiOperationArgs<"connectcampaigns:StartInstanceOnboardingJob">)),
  };
}
