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
export const AmazonFullApiAppIntegrationsOperationKeys = [
  "appIntegrations-2024-04-01:createNotification",
  "appIntegrations-2024-04-01:deleteNotifications",
  "appIntegrations-2024-04-01:recordActionFeedback"
] as const;
export type AmazonFullApiAppIntegrationsOperationKey = typeof AmazonFullApiAppIntegrationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiAppIntegrationsOperationPathParamMap {
  "appIntegrations-2024-04-01:createNotification": {};
  "appIntegrations-2024-04-01:deleteNotifications": {};
  "appIntegrations-2024-04-01:recordActionFeedback": { "notificationId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiAppIntegrationsOperationRequestMap {
  "appIntegrations-2024-04-01:createNotification": AmazonFullApiOperationInput<"appIntegrations-2024-04-01:createNotification">;
  "appIntegrations-2024-04-01:deleteNotifications": AmazonFullApiOperationInput<"appIntegrations-2024-04-01:deleteNotifications">;
  "appIntegrations-2024-04-01:recordActionFeedback": AmazonFullApiOperationInput<"appIntegrations-2024-04-01:recordActionFeedback">;
}

export interface AmazonFullApiAppIntegrationsGeneratedClient {
  CreateNotification(...args: AmazonFullApiOperationArgs<"appIntegrations-2024-04-01:createNotification">): Promise<AmazonFullApiOperationResponseMap["appIntegrations-2024-04-01:createNotification"]>;
  DeleteNotifications(...args: AmazonFullApiOperationArgs<"appIntegrations-2024-04-01:deleteNotifications">): Promise<AmazonFullApiOperationResponseMap["appIntegrations-2024-04-01:deleteNotifications"]>;
  RecordActionFeedback(...args: AmazonFullApiOperationArgs<"appIntegrations-2024-04-01:recordActionFeedback">): Promise<AmazonFullApiOperationResponseMap["appIntegrations-2024-04-01:recordActionFeedback"]>;
}

export const AmazonFullApiAppIntegrationsGeneratedFunctionNames = [
  "CreateNotification",
  "DeleteNotifications",
  "RecordActionFeedback"
] as const satisfies readonly (keyof AmazonFullApiAppIntegrationsGeneratedClient)[];

export function createAmazonFullApiAppIntegrationsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiAppIntegrationsGeneratedClient {
  return {
    CreateNotification: (...args) => callOperation("appIntegrations-2024-04-01:createNotification", ...(args as AmazonFullApiOperationArgs<"appIntegrations-2024-04-01:createNotification">)),
    DeleteNotifications: (...args) => callOperation("appIntegrations-2024-04-01:deleteNotifications", ...(args as AmazonFullApiOperationArgs<"appIntegrations-2024-04-01:deleteNotifications">)),
    RecordActionFeedback: (...args) => callOperation("appIntegrations-2024-04-01:recordActionFeedback", ...(args as AmazonFullApiOperationArgs<"appIntegrations-2024-04-01:recordActionFeedback">)),
  };
}
