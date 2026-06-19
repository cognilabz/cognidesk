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
export const AmazonConnectFullApiNotificationsOperationKeys = [
  "connect:CreateNotification",
  "connect:DeleteNotification",
  "connect:DescribeNotification",
  "connect:ListNotifications",
  "connect:UpdateNotificationContent"
] as const;
export type AmazonConnectFullApiNotificationsOperationKey = typeof AmazonConnectFullApiNotificationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiNotificationsOperationPathParamMap {
  "connect:CreateNotification": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteNotification": { "InstanceId": AmazonConnectFullApiPathParamValue; "NotificationId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeNotification": { "InstanceId": AmazonConnectFullApiPathParamValue; "NotificationId": AmazonConnectFullApiPathParamValue };
  "connect:ListNotifications": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateNotificationContent": { "InstanceId": AmazonConnectFullApiPathParamValue; "NotificationId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiNotificationsOperationRequestMap {
  "connect:CreateNotification": AmazonConnectFullApiOperationInput<"connect:CreateNotification">;
  "connect:DeleteNotification": AmazonConnectFullApiOperationInput<"connect:DeleteNotification">;
  "connect:DescribeNotification": AmazonConnectFullApiOperationInput<"connect:DescribeNotification">;
  "connect:ListNotifications": AmazonConnectFullApiOperationInput<"connect:ListNotifications">;
  "connect:UpdateNotificationContent": AmazonConnectFullApiOperationInput<"connect:UpdateNotificationContent">;
}

export interface AmazonConnectFullApiNotificationsGeneratedClient {
  CreateNotification(...args: AmazonConnectFullApiOperationArgs<"connect:CreateNotification">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateNotification"]>;
  DeleteNotification(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteNotification">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteNotification"]>;
  DescribeNotification(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeNotification">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeNotification"]>;
  ListNotifications(...args: AmazonConnectFullApiOperationArgs<"connect:ListNotifications">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListNotifications"]>;
  UpdateNotificationContent(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateNotificationContent">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateNotificationContent"]>;
}

export const AmazonConnectFullApiNotificationsGeneratedFunctionNames = [
  "CreateNotification",
  "DeleteNotification",
  "DescribeNotification",
  "ListNotifications",
  "UpdateNotificationContent"
] as const satisfies readonly (keyof AmazonConnectFullApiNotificationsGeneratedClient)[];

export function createAmazonConnectFullApiNotificationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiNotificationsGeneratedClient {
  return {
    CreateNotification: (...args) => callOperation("connect:CreateNotification", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateNotification">)),
    DeleteNotification: (...args) => callOperation("connect:DeleteNotification", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteNotification">)),
    DescribeNotification: (...args) => callOperation("connect:DescribeNotification", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeNotification">)),
    ListNotifications: (...args) => callOperation("connect:ListNotifications", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListNotifications">)),
    UpdateNotificationContent: (...args) => callOperation("connect:UpdateNotificationContent", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateNotificationContent">)),
  };
}
