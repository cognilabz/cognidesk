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
export const AmazonConnectFullApiApplicationsOperationKeys = [
  "appintegrations:CreateApplication",
  "appintegrations:DeleteApplication",
  "appintegrations:GetApplication",
  "appintegrations:ListApplicationAssociations",
  "appintegrations:ListApplications",
  "appintegrations:UpdateApplication"
] as const;
export type AmazonConnectFullApiApplicationsOperationKey = typeof AmazonConnectFullApiApplicationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiApplicationsOperationPathParamMap {
  "appintegrations:CreateApplication": {};
  "appintegrations:DeleteApplication": { "Arn": AmazonConnectFullApiPathParamValue };
  "appintegrations:GetApplication": { "Arn": AmazonConnectFullApiPathParamValue };
  "appintegrations:ListApplicationAssociations": { "ApplicationId": AmazonConnectFullApiPathParamValue };
  "appintegrations:ListApplications": {};
  "appintegrations:UpdateApplication": { "Arn": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiApplicationsOperationRequestMap {
  "appintegrations:CreateApplication": AmazonConnectFullApiOperationInput<"appintegrations:CreateApplication">;
  "appintegrations:DeleteApplication": AmazonConnectFullApiOperationInput<"appintegrations:DeleteApplication">;
  "appintegrations:GetApplication": AmazonConnectFullApiOperationInput<"appintegrations:GetApplication">;
  "appintegrations:ListApplicationAssociations": AmazonConnectFullApiOperationInput<"appintegrations:ListApplicationAssociations">;
  "appintegrations:ListApplications": AmazonConnectFullApiOperationInput<"appintegrations:ListApplications">;
  "appintegrations:UpdateApplication": AmazonConnectFullApiOperationInput<"appintegrations:UpdateApplication">;
}

export interface AmazonConnectFullApiApplicationsGeneratedClient {
  CreateApplication(...args: AmazonConnectFullApiOperationArgs<"appintegrations:CreateApplication">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:CreateApplication"]>;
  DeleteApplication(...args: AmazonConnectFullApiOperationArgs<"appintegrations:DeleteApplication">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:DeleteApplication"]>;
  GetApplication(...args: AmazonConnectFullApiOperationArgs<"appintegrations:GetApplication">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:GetApplication"]>;
  ListApplicationAssociations(...args: AmazonConnectFullApiOperationArgs<"appintegrations:ListApplicationAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:ListApplicationAssociations"]>;
  ListApplications(...args: AmazonConnectFullApiOperationArgs<"appintegrations:ListApplications">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:ListApplications"]>;
  UpdateApplication(...args: AmazonConnectFullApiOperationArgs<"appintegrations:UpdateApplication">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:UpdateApplication"]>;
}

export const AmazonConnectFullApiApplicationsGeneratedFunctionNames = [
  "CreateApplication",
  "DeleteApplication",
  "GetApplication",
  "ListApplicationAssociations",
  "ListApplications",
  "UpdateApplication"
] as const satisfies readonly (keyof AmazonConnectFullApiApplicationsGeneratedClient)[];

export function createAmazonConnectFullApiApplicationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiApplicationsGeneratedClient {
  return {
    CreateApplication: (...args) => callOperation("appintegrations:CreateApplication", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:CreateApplication">)),
    DeleteApplication: (...args) => callOperation("appintegrations:DeleteApplication", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:DeleteApplication">)),
    GetApplication: (...args) => callOperation("appintegrations:GetApplication", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:GetApplication">)),
    ListApplicationAssociations: (...args) => callOperation("appintegrations:ListApplicationAssociations", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:ListApplicationAssociations">)),
    ListApplications: (...args) => callOperation("appintegrations:ListApplications", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:ListApplications">)),
    UpdateApplication: (...args) => callOperation("appintegrations:UpdateApplication", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:UpdateApplication">)),
  };
}
