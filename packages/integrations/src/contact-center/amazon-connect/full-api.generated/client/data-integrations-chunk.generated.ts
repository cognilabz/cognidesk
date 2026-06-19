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
export const AmazonConnectFullApiDataIntegrationsOperationKeys = [
  "appintegrations:CreateDataIntegration",
  "appintegrations:CreateDataIntegrationAssociation",
  "appintegrations:DeleteDataIntegration",
  "appintegrations:GetDataIntegration",
  "appintegrations:ListDataIntegrationAssociations",
  "appintegrations:ListDataIntegrations",
  "appintegrations:UpdateDataIntegration",
  "appintegrations:UpdateDataIntegrationAssociation"
] as const;
export type AmazonConnectFullApiDataIntegrationsOperationKey = typeof AmazonConnectFullApiDataIntegrationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiDataIntegrationsOperationPathParamMap {
  "appintegrations:CreateDataIntegration": {};
  "appintegrations:CreateDataIntegrationAssociation": { "DataIntegrationIdentifier": AmazonConnectFullApiPathParamValue };
  "appintegrations:DeleteDataIntegration": { "DataIntegrationIdentifier": AmazonConnectFullApiPathParamValue };
  "appintegrations:GetDataIntegration": { "Identifier": AmazonConnectFullApiPathParamValue };
  "appintegrations:ListDataIntegrationAssociations": { "DataIntegrationIdentifier": AmazonConnectFullApiPathParamValue };
  "appintegrations:ListDataIntegrations": {};
  "appintegrations:UpdateDataIntegration": { "Identifier": AmazonConnectFullApiPathParamValue };
  "appintegrations:UpdateDataIntegrationAssociation": { "DataIntegrationIdentifier": AmazonConnectFullApiPathParamValue; "DataIntegrationAssociationIdentifier": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiDataIntegrationsOperationRequestMap {
  "appintegrations:CreateDataIntegration": AmazonConnectFullApiOperationInput<"appintegrations:CreateDataIntegration">;
  "appintegrations:CreateDataIntegrationAssociation": AmazonConnectFullApiOperationInput<"appintegrations:CreateDataIntegrationAssociation">;
  "appintegrations:DeleteDataIntegration": AmazonConnectFullApiOperationInput<"appintegrations:DeleteDataIntegration">;
  "appintegrations:GetDataIntegration": AmazonConnectFullApiOperationInput<"appintegrations:GetDataIntegration">;
  "appintegrations:ListDataIntegrationAssociations": AmazonConnectFullApiOperationInput<"appintegrations:ListDataIntegrationAssociations">;
  "appintegrations:ListDataIntegrations": AmazonConnectFullApiOperationInput<"appintegrations:ListDataIntegrations">;
  "appintegrations:UpdateDataIntegration": AmazonConnectFullApiOperationInput<"appintegrations:UpdateDataIntegration">;
  "appintegrations:UpdateDataIntegrationAssociation": AmazonConnectFullApiOperationInput<"appintegrations:UpdateDataIntegrationAssociation">;
}

export interface AmazonConnectFullApiDataIntegrationsGeneratedClient {
  CreateDataIntegration(...args: AmazonConnectFullApiOperationArgs<"appintegrations:CreateDataIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:CreateDataIntegration"]>;
  CreateDataIntegrationAssociation(...args: AmazonConnectFullApiOperationArgs<"appintegrations:CreateDataIntegrationAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:CreateDataIntegrationAssociation"]>;
  DeleteDataIntegration(...args: AmazonConnectFullApiOperationArgs<"appintegrations:DeleteDataIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:DeleteDataIntegration"]>;
  GetDataIntegration(...args: AmazonConnectFullApiOperationArgs<"appintegrations:GetDataIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:GetDataIntegration"]>;
  ListDataIntegrationAssociations(...args: AmazonConnectFullApiOperationArgs<"appintegrations:ListDataIntegrationAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:ListDataIntegrationAssociations"]>;
  ListDataIntegrations(...args: AmazonConnectFullApiOperationArgs<"appintegrations:ListDataIntegrations">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:ListDataIntegrations"]>;
  UpdateDataIntegration(...args: AmazonConnectFullApiOperationArgs<"appintegrations:UpdateDataIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:UpdateDataIntegration"]>;
  UpdateDataIntegrationAssociation(...args: AmazonConnectFullApiOperationArgs<"appintegrations:UpdateDataIntegrationAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:UpdateDataIntegrationAssociation"]>;
}

export const AmazonConnectFullApiDataIntegrationsGeneratedFunctionNames = [
  "CreateDataIntegration",
  "CreateDataIntegrationAssociation",
  "DeleteDataIntegration",
  "GetDataIntegration",
  "ListDataIntegrationAssociations",
  "ListDataIntegrations",
  "UpdateDataIntegration",
  "UpdateDataIntegrationAssociation"
] as const satisfies readonly (keyof AmazonConnectFullApiDataIntegrationsGeneratedClient)[];

export function createAmazonConnectFullApiDataIntegrationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiDataIntegrationsGeneratedClient {
  return {
    CreateDataIntegration: (...args) => callOperation("appintegrations:CreateDataIntegration", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:CreateDataIntegration">)),
    CreateDataIntegrationAssociation: (...args) => callOperation("appintegrations:CreateDataIntegrationAssociation", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:CreateDataIntegrationAssociation">)),
    DeleteDataIntegration: (...args) => callOperation("appintegrations:DeleteDataIntegration", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:DeleteDataIntegration">)),
    GetDataIntegration: (...args) => callOperation("appintegrations:GetDataIntegration", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:GetDataIntegration">)),
    ListDataIntegrationAssociations: (...args) => callOperation("appintegrations:ListDataIntegrationAssociations", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:ListDataIntegrationAssociations">)),
    ListDataIntegrations: (...args) => callOperation("appintegrations:ListDataIntegrations", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:ListDataIntegrations">)),
    UpdateDataIntegration: (...args) => callOperation("appintegrations:UpdateDataIntegration", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:UpdateDataIntegration">)),
    UpdateDataIntegrationAssociation: (...args) => callOperation("appintegrations:UpdateDataIntegrationAssociation", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:UpdateDataIntegrationAssociation">)),
  };
}
