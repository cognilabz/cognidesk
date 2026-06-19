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
export const AmazonConnectFullApiQueuesOperationKeys = [
  "connect:AssociateQueueEmailAddresses",
  "connect:AssociateQueueQuickConnects",
  "connect:CreateQueue",
  "connect:DeleteQueue",
  "connect:DescribeQueue",
  "connect:DisassociateQueueEmailAddresses",
  "connect:DisassociateQueueQuickConnects",
  "connect:ListQueueEmailAddresses",
  "connect:ListQueueQuickConnects",
  "connect:UpdateQueueHoursOfOperation",
  "connect:UpdateQueueMaxContacts",
  "connect:UpdateQueueName",
  "connect:UpdateQueueOutboundCallerConfig",
  "connect:UpdateQueueOutboundEmailConfig",
  "connect:UpdateQueueStatus"
] as const;
export type AmazonConnectFullApiQueuesOperationKey = typeof AmazonConnectFullApiQueuesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiQueuesOperationPathParamMap {
  "connect:AssociateQueueEmailAddresses": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:AssociateQueueQuickConnects": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:CreateQueue": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteQueue": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeQueue": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateQueueEmailAddresses": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateQueueQuickConnects": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:ListQueueEmailAddresses": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:ListQueueQuickConnects": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateQueueHoursOfOperation": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateQueueMaxContacts": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateQueueName": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateQueueOutboundCallerConfig": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateQueueOutboundEmailConfig": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateQueueStatus": { "InstanceId": AmazonConnectFullApiPathParamValue; "QueueId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiQueuesOperationRequestMap {
  "connect:AssociateQueueEmailAddresses": AmazonConnectFullApiOperationInput<"connect:AssociateQueueEmailAddresses">;
  "connect:AssociateQueueQuickConnects": AmazonConnectFullApiOperationInput<"connect:AssociateQueueQuickConnects">;
  "connect:CreateQueue": AmazonConnectFullApiOperationInput<"connect:CreateQueue">;
  "connect:DeleteQueue": AmazonConnectFullApiOperationInput<"connect:DeleteQueue">;
  "connect:DescribeQueue": AmazonConnectFullApiOperationInput<"connect:DescribeQueue">;
  "connect:DisassociateQueueEmailAddresses": AmazonConnectFullApiOperationInput<"connect:DisassociateQueueEmailAddresses">;
  "connect:DisassociateQueueQuickConnects": AmazonConnectFullApiOperationInput<"connect:DisassociateQueueQuickConnects">;
  "connect:ListQueueEmailAddresses": AmazonConnectFullApiOperationInput<"connect:ListQueueEmailAddresses">;
  "connect:ListQueueQuickConnects": AmazonConnectFullApiOperationInput<"connect:ListQueueQuickConnects">;
  "connect:UpdateQueueHoursOfOperation": AmazonConnectFullApiOperationInput<"connect:UpdateQueueHoursOfOperation">;
  "connect:UpdateQueueMaxContacts": AmazonConnectFullApiOperationInput<"connect:UpdateQueueMaxContacts">;
  "connect:UpdateQueueName": AmazonConnectFullApiOperationInput<"connect:UpdateQueueName">;
  "connect:UpdateQueueOutboundCallerConfig": AmazonConnectFullApiOperationInput<"connect:UpdateQueueOutboundCallerConfig">;
  "connect:UpdateQueueOutboundEmailConfig": AmazonConnectFullApiOperationInput<"connect:UpdateQueueOutboundEmailConfig">;
  "connect:UpdateQueueStatus": AmazonConnectFullApiOperationInput<"connect:UpdateQueueStatus">;
}

export interface AmazonConnectFullApiQueuesGeneratedClient {
  AssociateQueueEmailAddresses(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateQueueEmailAddresses">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateQueueEmailAddresses"]>;
  AssociateQueueQuickConnects(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateQueueQuickConnects">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateQueueQuickConnects"]>;
  CreateQueue(...args: AmazonConnectFullApiOperationArgs<"connect:CreateQueue">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateQueue"]>;
  DeleteQueue(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteQueue">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteQueue"]>;
  DescribeQueue(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeQueue">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeQueue"]>;
  DisassociateQueueEmailAddresses(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateQueueEmailAddresses">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateQueueEmailAddresses"]>;
  DisassociateQueueQuickConnects(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateQueueQuickConnects">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateQueueQuickConnects"]>;
  ListQueueEmailAddresses(...args: AmazonConnectFullApiOperationArgs<"connect:ListQueueEmailAddresses">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListQueueEmailAddresses"]>;
  ListQueueQuickConnects(...args: AmazonConnectFullApiOperationArgs<"connect:ListQueueQuickConnects">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListQueueQuickConnects"]>;
  UpdateQueueHoursOfOperation(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateQueueHoursOfOperation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateQueueHoursOfOperation"]>;
  UpdateQueueMaxContacts(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateQueueMaxContacts">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateQueueMaxContacts"]>;
  UpdateQueueName(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateQueueName">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateQueueName"]>;
  UpdateQueueOutboundCallerConfig(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateQueueOutboundCallerConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateQueueOutboundCallerConfig"]>;
  UpdateQueueOutboundEmailConfig(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateQueueOutboundEmailConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateQueueOutboundEmailConfig"]>;
  UpdateQueueStatus(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateQueueStatus">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateQueueStatus"]>;
}

export const AmazonConnectFullApiQueuesGeneratedFunctionNames = [
  "AssociateQueueEmailAddresses",
  "AssociateQueueQuickConnects",
  "CreateQueue",
  "DeleteQueue",
  "DescribeQueue",
  "DisassociateQueueEmailAddresses",
  "DisassociateQueueQuickConnects",
  "ListQueueEmailAddresses",
  "ListQueueQuickConnects",
  "UpdateQueueHoursOfOperation",
  "UpdateQueueMaxContacts",
  "UpdateQueueName",
  "UpdateQueueOutboundCallerConfig",
  "UpdateQueueOutboundEmailConfig",
  "UpdateQueueStatus"
] as const satisfies readonly (keyof AmazonConnectFullApiQueuesGeneratedClient)[];

export function createAmazonConnectFullApiQueuesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiQueuesGeneratedClient {
  return {
    AssociateQueueEmailAddresses: (...args) => callOperation("connect:AssociateQueueEmailAddresses", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateQueueEmailAddresses">)),
    AssociateQueueQuickConnects: (...args) => callOperation("connect:AssociateQueueQuickConnects", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateQueueQuickConnects">)),
    CreateQueue: (...args) => callOperation("connect:CreateQueue", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateQueue">)),
    DeleteQueue: (...args) => callOperation("connect:DeleteQueue", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteQueue">)),
    DescribeQueue: (...args) => callOperation("connect:DescribeQueue", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeQueue">)),
    DisassociateQueueEmailAddresses: (...args) => callOperation("connect:DisassociateQueueEmailAddresses", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateQueueEmailAddresses">)),
    DisassociateQueueQuickConnects: (...args) => callOperation("connect:DisassociateQueueQuickConnects", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateQueueQuickConnects">)),
    ListQueueEmailAddresses: (...args) => callOperation("connect:ListQueueEmailAddresses", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListQueueEmailAddresses">)),
    ListQueueQuickConnects: (...args) => callOperation("connect:ListQueueQuickConnects", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListQueueQuickConnects">)),
    UpdateQueueHoursOfOperation: (...args) => callOperation("connect:UpdateQueueHoursOfOperation", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateQueueHoursOfOperation">)),
    UpdateQueueMaxContacts: (...args) => callOperation("connect:UpdateQueueMaxContacts", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateQueueMaxContacts">)),
    UpdateQueueName: (...args) => callOperation("connect:UpdateQueueName", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateQueueName">)),
    UpdateQueueOutboundCallerConfig: (...args) => callOperation("connect:UpdateQueueOutboundCallerConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateQueueOutboundCallerConfig">)),
    UpdateQueueOutboundEmailConfig: (...args) => callOperation("connect:UpdateQueueOutboundEmailConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateQueueOutboundEmailConfig">)),
    UpdateQueueStatus: (...args) => callOperation("connect:UpdateQueueStatus", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateQueueStatus">)),
  };
}
