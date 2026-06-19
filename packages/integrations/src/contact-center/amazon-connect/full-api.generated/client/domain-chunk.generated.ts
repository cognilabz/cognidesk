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
export const AmazonConnectFullApiDomainOperationKeys = [
  "connecthealth:CreateDomain",
  "connecthealth:DeleteDomain",
  "connecthealth:GetDomain",
  "connecthealth:GetPatientInsightsJob",
  "connecthealth:ListDomains",
  "connecthealth:StartPatientInsightsJob"
] as const;
export type AmazonConnectFullApiDomainOperationKey = typeof AmazonConnectFullApiDomainOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiDomainOperationPathParamMap {
  "connecthealth:CreateDomain": {};
  "connecthealth:DeleteDomain": { "domainId": AmazonConnectFullApiPathParamValue };
  "connecthealth:GetDomain": { "domainId": AmazonConnectFullApiPathParamValue };
  "connecthealth:GetPatientInsightsJob": { "domainId": AmazonConnectFullApiPathParamValue; "jobId": AmazonConnectFullApiPathParamValue };
  "connecthealth:ListDomains": {};
  "connecthealth:StartPatientInsightsJob": { "domainId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiDomainOperationRequestMap {
  "connecthealth:CreateDomain": AmazonConnectFullApiOperationInput<"connecthealth:CreateDomain">;
  "connecthealth:DeleteDomain": AmazonConnectFullApiOperationInput<"connecthealth:DeleteDomain">;
  "connecthealth:GetDomain": AmazonConnectFullApiOperationInput<"connecthealth:GetDomain">;
  "connecthealth:GetPatientInsightsJob": AmazonConnectFullApiOperationInput<"connecthealth:GetPatientInsightsJob">;
  "connecthealth:ListDomains": AmazonConnectFullApiOperationInput<"connecthealth:ListDomains">;
  "connecthealth:StartPatientInsightsJob": AmazonConnectFullApiOperationInput<"connecthealth:StartPatientInsightsJob">;
}

export interface AmazonConnectFullApiDomainGeneratedClient {
  CreateDomainConnecthealth(...args: AmazonConnectFullApiOperationArgs<"connecthealth:CreateDomain">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:CreateDomain"]>;
  DeleteDomainConnecthealth(...args: AmazonConnectFullApiOperationArgs<"connecthealth:DeleteDomain">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:DeleteDomain"]>;
  GetDomainConnecthealth(...args: AmazonConnectFullApiOperationArgs<"connecthealth:GetDomain">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:GetDomain"]>;
  GetPatientInsightsJob(...args: AmazonConnectFullApiOperationArgs<"connecthealth:GetPatientInsightsJob">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:GetPatientInsightsJob"]>;
  ListDomainsConnecthealth(...args: AmazonConnectFullApiOperationArgs<"connecthealth:ListDomains">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:ListDomains"]>;
  StartPatientInsightsJob(...args: AmazonConnectFullApiOperationArgs<"connecthealth:StartPatientInsightsJob">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:StartPatientInsightsJob"]>;
}

export const AmazonConnectFullApiDomainGeneratedFunctionNames = [
  "CreateDomainConnecthealth",
  "DeleteDomainConnecthealth",
  "GetDomainConnecthealth",
  "GetPatientInsightsJob",
  "ListDomainsConnecthealth",
  "StartPatientInsightsJob"
] as const satisfies readonly (keyof AmazonConnectFullApiDomainGeneratedClient)[];

export function createAmazonConnectFullApiDomainGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiDomainGeneratedClient {
  return {
    CreateDomainConnecthealth: (...args) => callOperation("connecthealth:CreateDomain", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:CreateDomain">)),
    DeleteDomainConnecthealth: (...args) => callOperation("connecthealth:DeleteDomain", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:DeleteDomain">)),
    GetDomainConnecthealth: (...args) => callOperation("connecthealth:GetDomain", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:GetDomain">)),
    GetPatientInsightsJob: (...args) => callOperation("connecthealth:GetPatientInsightsJob", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:GetPatientInsightsJob">)),
    ListDomainsConnecthealth: (...args) => callOperation("connecthealth:ListDomains", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:ListDomains">)),
    StartPatientInsightsJob: (...args) => callOperation("connecthealth:StartPatientInsightsJob", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:StartPatientInsightsJob">)),
  };
}
