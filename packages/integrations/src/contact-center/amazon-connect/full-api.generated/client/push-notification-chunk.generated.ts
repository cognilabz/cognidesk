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
export const AmazonConnectFullApiPushNotificationOperationKeys = [
  "connect:CreatePushNotificationRegistration",
  "connect:DeletePushNotificationRegistration"
] as const;
export type AmazonConnectFullApiPushNotificationOperationKey = typeof AmazonConnectFullApiPushNotificationOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiPushNotificationOperationPathParamMap {
  "connect:CreatePushNotificationRegistration": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeletePushNotificationRegistration": { "InstanceId": AmazonConnectFullApiPathParamValue; "RegistrationId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiPushNotificationOperationRequestMap {
  "connect:CreatePushNotificationRegistration": AmazonConnectFullApiOperationInput<"connect:CreatePushNotificationRegistration">;
  "connect:DeletePushNotificationRegistration": AmazonConnectFullApiOperationInput<"connect:DeletePushNotificationRegistration">;
}

export interface AmazonConnectFullApiPushNotificationGeneratedClient {
  CreatePushNotificationRegistration(...args: AmazonConnectFullApiOperationArgs<"connect:CreatePushNotificationRegistration">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreatePushNotificationRegistration"]>;
  DeletePushNotificationRegistration(...args: AmazonConnectFullApiOperationArgs<"connect:DeletePushNotificationRegistration">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeletePushNotificationRegistration"]>;
}

export const AmazonConnectFullApiPushNotificationGeneratedFunctionNames = [
  "CreatePushNotificationRegistration",
  "DeletePushNotificationRegistration"
] as const satisfies readonly (keyof AmazonConnectFullApiPushNotificationGeneratedClient)[];

export function createAmazonConnectFullApiPushNotificationGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiPushNotificationGeneratedClient {
  return {
    CreatePushNotificationRegistration: (...args) => callOperation("connect:CreatePushNotificationRegistration", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreatePushNotificationRegistration">)),
    DeletePushNotificationRegistration: (...args) => callOperation("connect:DeletePushNotificationRegistration", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeletePushNotificationRegistration">)),
  };
}
