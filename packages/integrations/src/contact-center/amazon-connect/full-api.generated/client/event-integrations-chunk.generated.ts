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
export const AmazonConnectFullApiEventIntegrationsOperationKeys = [
  "appintegrations:CreateEventIntegration",
  "appintegrations:DeleteEventIntegration",
  "appintegrations:GetEventIntegration",
  "appintegrations:ListEventIntegrationAssociations",
  "appintegrations:ListEventIntegrations",
  "appintegrations:UpdateEventIntegration"
] as const;
export type AmazonConnectFullApiEventIntegrationsOperationKey = typeof AmazonConnectFullApiEventIntegrationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiEventIntegrationsOperationPathParamMap {
  "appintegrations:CreateEventIntegration": {};
  "appintegrations:DeleteEventIntegration": { "Name": AmazonConnectFullApiPathParamValue };
  "appintegrations:GetEventIntegration": { "Name": AmazonConnectFullApiPathParamValue };
  "appintegrations:ListEventIntegrationAssociations": { "EventIntegrationName": AmazonConnectFullApiPathParamValue };
  "appintegrations:ListEventIntegrations": {};
  "appintegrations:UpdateEventIntegration": { "Name": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiEventIntegrationsOperationRequestMap {
  "appintegrations:CreateEventIntegration": AmazonConnectFullApiOperationInput<"appintegrations:CreateEventIntegration">;
  "appintegrations:DeleteEventIntegration": AmazonConnectFullApiOperationInput<"appintegrations:DeleteEventIntegration">;
  "appintegrations:GetEventIntegration": AmazonConnectFullApiOperationInput<"appintegrations:GetEventIntegration">;
  "appintegrations:ListEventIntegrationAssociations": AmazonConnectFullApiOperationInput<"appintegrations:ListEventIntegrationAssociations">;
  "appintegrations:ListEventIntegrations": AmazonConnectFullApiOperationInput<"appintegrations:ListEventIntegrations">;
  "appintegrations:UpdateEventIntegration": AmazonConnectFullApiOperationInput<"appintegrations:UpdateEventIntegration">;
}

export interface AmazonConnectFullApiEventIntegrationsGeneratedClient {
  CreateEventIntegration(...args: AmazonConnectFullApiOperationArgs<"appintegrations:CreateEventIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:CreateEventIntegration"]>;
  DeleteEventIntegration(...args: AmazonConnectFullApiOperationArgs<"appintegrations:DeleteEventIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:DeleteEventIntegration"]>;
  GetEventIntegration(...args: AmazonConnectFullApiOperationArgs<"appintegrations:GetEventIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:GetEventIntegration"]>;
  ListEventIntegrationAssociations(...args: AmazonConnectFullApiOperationArgs<"appintegrations:ListEventIntegrationAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:ListEventIntegrationAssociations"]>;
  ListEventIntegrations(...args: AmazonConnectFullApiOperationArgs<"appintegrations:ListEventIntegrations">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:ListEventIntegrations"]>;
  UpdateEventIntegration(...args: AmazonConnectFullApiOperationArgs<"appintegrations:UpdateEventIntegration">): Promise<AmazonConnectFullApiOperationResponseMap["appintegrations:UpdateEventIntegration"]>;
}

export const AmazonConnectFullApiEventIntegrationsGeneratedFunctionNames = [
  "CreateEventIntegration",
  "DeleteEventIntegration",
  "GetEventIntegration",
  "ListEventIntegrationAssociations",
  "ListEventIntegrations",
  "UpdateEventIntegration"
] as const satisfies readonly (keyof AmazonConnectFullApiEventIntegrationsGeneratedClient)[];

export function createAmazonConnectFullApiEventIntegrationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiEventIntegrationsGeneratedClient {
  return {
    CreateEventIntegration: (...args) => callOperation("appintegrations:CreateEventIntegration", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:CreateEventIntegration">)),
    DeleteEventIntegration: (...args) => callOperation("appintegrations:DeleteEventIntegration", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:DeleteEventIntegration">)),
    GetEventIntegration: (...args) => callOperation("appintegrations:GetEventIntegration", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:GetEventIntegration">)),
    ListEventIntegrationAssociations: (...args) => callOperation("appintegrations:ListEventIntegrationAssociations", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:ListEventIntegrationAssociations">)),
    ListEventIntegrations: (...args) => callOperation("appintegrations:ListEventIntegrations", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:ListEventIntegrations">)),
    UpdateEventIntegration: (...args) => callOperation("appintegrations:UpdateEventIntegration", ...(args as AmazonConnectFullApiOperationArgs<"appintegrations:UpdateEventIntegration">)),
  };
}
